const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const router = express.Router();

router.get('/', async (req, res) => {
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

router.post('/', async (req, res) => {
    const { name, score, total } = req.body;
    
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

app.use('/api/scores', router);
app.use('/', router); // Fallback in case Vercel routes relatively

module.exports = app;
