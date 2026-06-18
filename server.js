const express = require('express');
const cors = require('cors');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
const prisma = new PrismaClient();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve Static Files
app.use(express.static(path.join(__dirname)));

// API: Get Top 10 Scores
app.get('/api/scores', async (req, res) => {
    try {
        const scores = await prisma.quizScore.findMany({
            orderBy: [
                { score: 'desc' },
                { createdAt: 'desc' }
            ],
            take: 10
        });
        res.json(scores);
    } catch (error) {
        console.error('Error fetching scores:', error);
        res.status(500).json({ error: 'Skorlar alınırken bir hata oluştu.' });
    }
});

// API: Submit New Score
app.post('/api/scores', async (req, res) => {
    const { name, score, total } = req.body;
    
    // Basic validation
    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'İsim alanı boş bırakılamaz.' });
    }
    if (score === undefined || total === undefined) {
        return res.status(400).json({ error: 'Skor ve toplam soru bilgisi gereklidir.' });
    }

    try {
        const newScore = await prisma.quizScore.create({
            data: {
                name: name.trim(),
                score: parseInt(score),
                total: parseInt(total)
            }
        });
        res.status(201).json(newScore);
    } catch (error) {
        console.error('Error saving score:', error);
        res.status(500).json({ error: 'Skor kaydedilirken bir hata oluştu.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
