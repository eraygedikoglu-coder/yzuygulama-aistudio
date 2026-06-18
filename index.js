// ==========================================================================
// SLIDE NAVIGATION LOGIC
// ==========================================================================
let currentSlide = 1;
const totalSlides = 17;

function updateSlide() {
    // Hide Back to Top button on slide change
    const bttBtn = document.getElementById('back-to-top-btn');
    if (bttBtn) bttBtn.classList.remove('show');

    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const slideIndicator = document.getElementById('slide-number');
    const progressBar = document.getElementById('progress-bar');

    slides.forEach((slide) => {
        const index = parseInt(slide.getAttribute('data-index'));
        slide.classList.remove('active', 'prev-slide');
        
        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index < currentSlide) {
            slide.classList.add('prev-slide');
        }
    });

    // Update Progress Bar
    const progressPercent = (currentSlide / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Update Indicator
    slideIndicator.textContent = `${currentSlide} / ${totalSlides}`;

    // Update Button States
    prevBtn.disabled = currentSlide === 1;
    if (currentSlide === totalSlides) {
        nextBtn.innerHTML = 'Tamamla <i class="fa-solid fa-check"></i>';
    } else {
        nextBtn.innerHTML = 'İleri <i class="fa-solid fa-chevron-right"></i>';
    }

    // Initialize slide 14 interactive mockup when loaded
    if (currentSlide === 14) {
        const firstItem = document.querySelector('.steps-list .step-list-item:nth-child(1)');
        if (firstItem) {
            showStepGuide('step1', firstItem);
        }
    }

    // Initialize Slide 15 Quiz when active
    if (currentSlide === 15) {
        initQuiz();
    }
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlide();
    } else {
        // Final slide action
        alert("Harika! Sunumu başarıyla tamamladınız. Google AI Studio ile sınıflarınızda harikalar yaratmaya hazırsınız. 🚀");
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlide();
    }
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return; // Don't trigger slide change when typing in simulator
    }
    
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
        e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
        e.preventDefault();
    }
});

// ==========================================================================
// ACCORDION LOGIC
// ==========================================================================
function toggleAccordion(activeIndex) {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach((item, index) => {
        if (index === activeIndex) {
            item.classList.toggle('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ==========================================================================
// SIMULATOR LOGIC & PRESETS
// ==========================================================================
const presets = {
    matematik: {
        instructions: "Sen MEB Ortaokul müfredatına uygun çalışan, öğrencilerin sorularına doğrudan cevap vermeyen, onların adım adım düşünerek çözüme ulaşmasını sağlayan sabırlı bir Matematik Öğretmenisin.",
        userInput: "EBOB-EKOK sorularını nasıl çözeceğimi anlamıyorum.",
        outputs: [
            "Merhaba! EBOB ve EKOK kavramları başlangıçta biraz kafa karıştırıcı görünebilir ama aslında çok mantıklıdır. 🌟\n\nDiyelim ki elinde 12 cm ve 18 cm uzunluğunda iki tahta çubuk var. Bunları hiç artmayacak şekilde EŞİT uzunlukta en büyük parçalara bölmek istiyorsun. Sence bu parçaların boyu en fazla kaç cm olabilir? Her iki sayıyı da bölen en büyük ortak sayıyı bulabilir misin? Deneyelim!",
            "Harika bir soru! EBOB (En Büyük Ortak Bölen) bulurken sayıları çarpanlarına ayırırız.\n\nÖrneğin 10 ve 15 sayılarını düşünelim. Hem 10'u hem 15'i kalansız bölebilen en büyük sayı kaçtır? İpucu: Sonları 0 ve 5 ile bitiyor. Ne dersin?"
        ]
    },
    turkce: {
        instructions: "Sen MEB Ortaokul müfredatına uygun, öğrencilere dil bilgisi (fiilimsiler, cümlede anlam vb.) ve okuma anlama konularında rehberlik eden samimi bir Türkçe Öğretmenisin.",
        userInput: "Fiilimsi ile çekimli fiil arasındaki farkı karıştırıyorum.",
        outputs: [
            "Harika bir soru! Fiilimsiler (eylemsiler) ve çekimli fiiller Türkçe'de çok karıştırılır ama çözmesi eğlencelidir. 📚\n\nBir ipucu: Çekimli fiiller cümlenin yüklemi olup iş bildirirken (örneğin: 'Koşuyorum'), fiilimsiler fiil gibi görünseler de artık isim, sıfat veya zarf olmuşlardır ve zaman eki almazlar.\n\nŞu cümleye bak: 'Koşan çocuk düştü.'\nBuradaki 'koşan' ve 'düştü' kelimelerinden hangisi zaman bildirip cümleyi tamamlıyor? Hangisi ismi nitelendiriyor? Hadi tahmin et!",
            "Merhaba sevgili öğrencim! Çekimli fiil kip ve kişi eki alır (Gel-di-m, oku-uyor-sun gibi). Fiilimsi ise fiil kök veya gövdesinden türetilir ancak fiil anlamını korumasına rağmen isim, sıfat ya da zarf görevinde kullanılır. 'Okumak güzeldir' cümlesindeki 'Okumak' gibi. Buradaki farkı başka bir cümleyle test edelim mi?"
        ]
    },
    fen: {
        instructions: "Sen MEB Ortaokul müfredatına uygun, öğrencilere fen bilimleri (DNA, fiziksel/kimyasal değişimler vb.) konularını günlük yaşamdan örneklerle açıklayan merak uyandırıcı bir Fen Bilimleri Öğretmenisin.",
        userInput: "Fiziksel değişim ile kimyasal değişim arasındaki farkı nasıl anlarım?",
        outputs: [
            "Bilim atölyemize hoş geldin! Maddenin geçirdiği değişimleri anlamak çok kolaydır. 🔬\n\nŞöyle düşün: Bir kağıdı yırttığında (fiziksel) sadece dış görünüşü değişir ama hala kağıttır, değil mi? Peki kağıdı yaktığında (kimyasal) geriye ne kalır? Kül ve duman! Peki külü tekrar kağıt yapabilir miyiz?\n\nBuradan yola çıkarak, sence yumurtanın haşlanması fiziksel mi yoksa kimyasal bir değişim midir? Neden?",
            "Merhaba genç araştırmacı! Fiziksel değişimde maddenin sadece dış yapısı değişir ve yeni bir madde oluşmaz (örn: buzun erimesi). Kimyasal değişimde ise maddenin kimliği değişir ve yeni maddeler oluşur (örn: demirin paslanması).\n\nSence sütten yoğurt yapılması hangi gruba girer? İçindeki bakteriler sütün kimliğini değiştirmiş olabilir mi?"
        ]
    },
    sosyal: {
        instructions: "Sen MEB Ortaokul müfredatına uygun, öğrencilere tarih, coğrafya ve vatandaşlık konularını hikayeleştirerek anlatan, milli değerleri aktaran bir Sosyal Bilgiler Öğretmenisin.",
        userInput: "İpek Yolu'nun tarihteki önemi nedir?",
        outputs: [
            "Harika bir tarihi yolculuğa çıkıyoruz! 🗺️ İpek Yolu sadece tüccarların ipek taşıdığı bir yol değildi.\n\nDüşün bakalım: Farklı ülkelerden gelen insanlar bu yolda ticaret yaparken sadece mallarını mı paylaşırlardı? Yoksa fikirlerini, dillerini, dinlerini ve yemek kültürlerini de aktarırlar mıydı?\n\nBu durum sence ülkeler arasında nasıl bir kültürel etkileşim yaratmıştır? Bir düşün bakalım!",
            "Merhaba sevgili tarih kaşifi! İpek Yolu, Çin'den başlayıp Avrupa'ya kadar uzanan, tarihin en önemli ticaret ve kültür köprüsüdür. Bu yol üzerinde kurulan hanlar ve kervansaraylar hakkında hiç bilgi duymuş muydun?"
        ]
    },
    ingilizce: {
        instructions: "Sen MEB Ortaokul müfredatına uygun, öğrencilerin İngilizce konuşma ve kelime becerilerini geliştiren, samimi ve İngilizce-Türkçe hibrit yanıtlar veren bir İngilizce Öğretmenisin.",
        userInput: "Present Continuous Tense (Şimdiki zaman) cümle yapısını anlamıyorum.",
        outputs: [
            "Hello there! Don't worry, we can learn this easily! 🇬🇧\n\nŞimdiki zamanı (Present Continuous) konuşma anında yaptığımız işleri anlatmak için kullanırız. Formülümüz çok basit: am/is/are + fiilin sonuna '-ing' takısı.\n\nFor example: 'I am reading a book.' (Ben kitap okuyorum).\n\nŞimdi sıra sende! 'Ben şimdi müzik dinliyorum' cümlesini 'listen to music' kalıbını kullanarak İngilizce yazabilir misin?",
            "Hello! Let's make it fun! Present Continuous Tense is very easy.\n\nDüşün ki şu an ders çalışıyorsun: 'I am studying.'\n\nPeki arkadaşının şu an futbol oynadığını nasıl söylerdin? İpucu: He/She için 'is' kullanılır ve fiilimiz 'play'. Hadi dene!"
        ]
    },
    dinkulturu: {
        instructions: "Sen MEB Ortaokul müfredatına uygun, öğrencilere din kültürü, ahlaki değerler, yardımlaşma ve hoşgörü konularını açıklayan, sevgi dolu bir Din Kültürü ve Ahlak Bilgisi Öğretmenisin.",
        userInput: "Sadaka-i cariye nedir, normal sadakadan farkı nedir?",
        outputs: [
            "Merhaba sevgili öğrencim, çok güzel ve anlamlı bir konuyu merak etmişsin. 🌸\n\nSadaka-i cariye, etkisi ve faydası biz öldükten sonra da devam eden, kalıcı iyiliklerdir. Örneğin bir okul yaptırmak, bir ağaç dikmek veya faydalı bir kitap yazmak gibi.\n\nSence diktiğin bir ağacın gölgesinde insanlar oturdukça veya meyvesini yedikçe bu neden sürekli devam eden bir sevap sayılır? Normal sadakadan farkını bu örneğe bakarak nasıl açıklarsın?",
            "Selamlar evladım! Normal sadaka o anlık bir ihtiyacı giderir (örn: bir fakire yemek vermek). Sadaka-i cariye ise kesintisiz akan bir çeşme gibidir. İnsanlar o çeşmeden su içtikçe sevap hanene yazılmaya devam eder. Ne kadar güzel bir yardımlaşma yöntemi değil mi?"
        ]
    },
    bilisim: {
        instructions: "Sen MEB Ortaokul müfredatına uygun, öğrencilere algoritma mantığı, blok tabanlı kodlama ve dijital vatandaşlık konularını eğlenceli şekilde öğreten bir Bilişim Teknolojileri Öğretmenisin.",
        userInput: "Döngü (Loop) kavramı kodlamada ne işe yarar?",
        outputs: [
            "Selam geleceğin yazılımcısı! 💻 Harika bir algoritma konusuna geldik.\n\nDüşün ki oyun karakterine 10 adım ileri gitmesini söyleyeceksin. Bunun için 10 defa alt alta '10 adım git' yazmak yerine, bilgisayara 'Bu işi 10 kere tekrarla' komutu vermek sence neden daha kolaydır?\n\nDöngüler (Loops) tam olarak bu işe yarar. Sence günlük hayatımızda sürekli tekrarladığımız hangi döngüler var?",
            "Merhaba robotik meraklısı! Döngüler kod yazarken zamandan kazanmamızı ve kodun daha temiz görünmesini sağlar. Scratch programında kullandığımız 'Sürekli Tekrarla' veya '10 Defa Tekrarla' blokları birer döngüdür. Kendi yapacağın bir oyunda döngüyü nerede kullanmak isterdin?"
        ]
    }
};

function loadPreset(type) {
    // Update active button styling
    const buttons = document.querySelectorAll('.sim-preset-btn');
    buttons.forEach((btn) => btn.classList.remove('active'));
    
    // Find active button trigger
    const clickedBtn = document.querySelector(`[onclick="loadPreset('${type}')"]`);
    if (clickedBtn) clickedBtn.classList.add('active');

    // Load content
    const preset = presets[type];
    if (preset) {
        document.getElementById('sim-instructions').value = preset.instructions;
        document.getElementById('sim-user-input').value = preset.userInput;
        document.getElementById('sim-output-text').textContent = "Parametreler yüklendi. 'İstemi Çalıştır' butonuna basarak cevabı simüle edebilirsiniz.";
        document.getElementById('sim-status').textContent = "Hazır";
        document.getElementById('sim-status').className = "status-badge";
    }
}

function updateTempVal(val) {
    document.getElementById('temp-val').textContent = val;
}

function runSimulator() {
    const instructions = document.getElementById('sim-instructions').value.trim();
    const userInput = document.getElementById('sim-user-input').value.trim();
    const outputText = document.getElementById('sim-output-text');
    const statusBadge = document.getElementById('sim-status');

    if (!instructions || !userInput) {
        alert("Lütfen hem Sistem Yönergesini hem de Kullanıcı Sorusunu doldurun!");
        return;
    }

    // Show Running State
    statusBadge.textContent = "Çalışıyor...";
    statusBadge.className = "status-badge running";
    outputText.textContent = "Yapay Zeka düşünüyor ve yanıt üretiyor...";

    // Simulate Network Latency
    setTimeout(() => {
        let finalResponse = "";

        // Check if matching any of our preset contents
        if (instructions.includes("Matematik") || instructions.includes("matematik")) {
            const index = Math.floor(Math.random() * presets.matematik.outputs.length);
            finalResponse = presets.matematik.outputs[index];
        } else if (instructions.includes("Türkçe") || instructions.includes("turkce") || instructions.includes("dil bilgisi")) {
            const index = Math.floor(Math.random() * presets.turkce.outputs.length);
            finalResponse = presets.turkce.outputs[index];
        } else if (instructions.includes("Fen") || instructions.includes("fen")) {
            const index = Math.floor(Math.random() * presets.fen.outputs.length);
            finalResponse = presets.fen.outputs[index];
        } else if (instructions.includes("Sosyal") || instructions.includes("sosyal")) {
            const index = Math.floor(Math.random() * presets.sosyal.outputs.length);
            finalResponse = presets.sosyal.outputs[index];
        } else if (instructions.includes("İngilizce") || instructions.includes("ingilizce") || instructions.includes("English")) {
            const index = Math.floor(Math.random() * presets.ingilizce.outputs.length);
            finalResponse = presets.ingilizce.outputs[index];
        } else if (instructions.includes("Din Kültürü") || instructions.includes("dinkulturu")) {
            const index = Math.floor(Math.random() * presets.dinkulturu.outputs.length);
            finalResponse = presets.dinkulturu.outputs[index];
        } else if (instructions.includes("Bilişim") || instructions.includes("bilisim") || instructions.includes("kodlama")) {
            const index = Math.floor(Math.random() * presets.bilisim.outputs.length);
            finalResponse = presets.bilisim.outputs[index];
        } else {
            // General customized response matching instructions
            finalResponse = `🤖 Özel Sistem Modu Aktif!\n\nTanımladığınız Yönerge: "${instructions.substring(0, 80)}..."\n\nKullanıcı Sorusu: "${userInput}"\n\nGemini Yanıtı:\nHarika bir deneme! Google AI Studio'da oluşturduğunuz bu Sistem Yönergesi sayesinde, yapay zekanız tam da istediğiniz üslup ve uzmanlıkla yanıt verecektir. Sınıfınız için özel bir eğitim robotu tasarlamış oldunuz!`;
        }

        // Typewriter Effect
        typeWriter(finalResponse, outputText);
        
        statusBadge.textContent = "Tamamlandı";
        statusBadge.className = "status-badge success";
    }, 1500);
}

// Typewriter simulation
function typeWriter(text, element) {
    element.textContent = "";
    let i = 0;
    const speed = 10; // character typing speed in ms
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            element.scrollTop = element.scrollHeight; // Auto-scroll to bottom
            setTimeout(type, speed);
        }
    }
    type();
}

// ==========================================================================
// SAFETY DETAIL LOGIC (SLIDE 6)
// ==========================================================================
const safetyDetails = {
    gizlilik: {
        title: "Öğrenci Veri Güvenliği 🛡️",
        body: `
            Öğrencilerin kişisel ve akademik verilerini korumak yasal (KVKK) ve etik bir sorumluluktur. AI Studio'yu kullanırken şu kurallara dikkat edilmelidir:
            <ul>
                <li><strong>Kimliksizleştirme:</strong> İsteme asla öğrenci ad-soyadı, okul numarası veya sınıf ismi yazmayın. (Örn: "Ahmet Yılmaz adındaki 6-A sınıfı öğrencim..." yerine "Bir 6. sınıf öğrencim..." şeklinde yazın).</li>
                <li><strong>Görsel ve Ses Yüklemeleri:</strong> AI Studio'ya öğrencilerin yüzlerinin net göründüğü fotoğrafları ya da ses kayıtlarını analiz amaçlı yüklemeyin.</li>
                <li><strong>Özel Bilgiler:</strong> Karneler, gelişim gözlemlerini ya da rehberlik notlarını yapay zekaya yüklerken kişileri tanımlayıcı tüm bilgileri silin.</li>
            </ul>
        `
    },
    halusinasyon: {
        title: "Halüsinasyonları Yönetmek 🔍",
        body: `
            Yapay zeka modelleri bazen mantıklı görünen ancak tamamen uydurma olan yanlış bilgiler ("halüsinasyonlar") üretebilir. Güvenli dersler için:
            <ul>
                <li><strong>Her Zaman Doğrulayın:</strong> Yapay zekanın hazırladığı sınav sorularının cevap anahtarlarını, bilimsel formülleri ve tarihi olayları sınıfta paylaşmadan önce mutlaka kontrol edin.</li>
                <li><strong>Grounding Aktifleştirin:</strong> Tarih veya güncel bilim konularında AI Studio'da <strong>Google Arama Entegrasyonu (Grounding)</strong> özelliğini aktif ederek verileri doğrulatın.</li>
                <li><strong>Çelişkili Çıktılar:</strong> Yapay zekaya aynı soruyu birkaç kez sorarak veya sıcaklık (temperature) ayarını 0'a çekerek daha tutarlı yanıtlar elde edin.</li>
            </ul>
        `
    },
    kurumsal: {
        title: "Neden Kurumsal Hesap? 🏫",
        body: `
            Eğitim kurumlarında yapay zeka araçlarını entegre ederken kurumsal okul hesaplarını tercih etmeliyiz:
            <ul>
                <li><strong>Veri Eğitimi Engelleyici:</strong> <em>Google Workspace for Education</em> kurumsal hesapları kullanıldığında, paylaştığınız veriler Google'ın modellerini eğitmesi için kullanılmaz ve gizli kalır.</li>
                <li><strong>Yönetici Denetimleri:</strong> Okul yöneticileri hangi yapay zeka özelliklerinin öğrenciler için açık olacağını merkezi panellerinden güvenle denetleyebilir.</li>
                <li><strong>Güvenli Entegrasyon:</strong> 'Kodu Al' butonuyla kodlama yaparken kurumsal API anahtarları kullanımı veri sızıntılarını önler.</li>
            </ul>
        `
    }
};

function showSafetyDetail(type, element) {
    const items = document.querySelectorAll('.safety-item');
    const callout = document.getElementById('safety-callout');
    
    // Check if clicking currently active to toggle back to Gold Rule
    if (element.classList.contains('active')) {
        element.classList.remove('active');
        resetSafetyCallout();
        return;
    }
    
    // Deactivate others, activate current
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    
    // Update callout content with animation
    callout.style.opacity = 0;
    callout.style.transform = "scale(0.95)";
    callout.style.transition = "opacity 0.2s ease, transform 0.2s ease";
    
    setTimeout(() => {
        const detail = safetyDetails[type];
        if (detail) {
            callout.innerHTML = `
                <div class="safety-detail-title">${detail.title}</div>
                <div class="safety-detail-body">${detail.body}</div>
                <button class="btn btn-secondary btn-mini" onclick="resetSafetyCallout()">
                    <i class="fa-solid fa-arrow-rotate-left"></i> Altın Kural'a Dön
                </button>
            `;
        }
        callout.style.opacity = 1;
        callout.style.transform = "scale(1)";
    }, 200);
}

function resetSafetyCallout() {
    const items = document.querySelectorAll('.safety-item');
    items.forEach(item => item.classList.remove('active'));
    
    const callout = document.getElementById('safety-callout');
    callout.style.opacity = 0;
    callout.style.transform = "scale(0.95)";
    
    setTimeout(() => {
        callout.innerHTML = `
            <div class="callout-icon"><i class="fa-solid fa-shield-halved"></i></div>
            <h3>Altın Kural</h3>
            <p class="callout-text">"Yapay zekaya, okul panosuna asamayacağınız hiçbir öğrenci verisini yüklemeyin!"</p>
            <span class="detail-tip">Detaylı MEB rehberini görmek için soldaki başlıklardan birine tıklayabilirsiniz.</span>
        `;
        callout.style.opacity = 1;
        callout.style.transform = "scale(1)";
    }, 200);
}

// ==========================================================================
// INTERACTIVE STEP GUIDE LOGIC (SLIDE 7)
// ==========================================================================
function showStepGuide(step, element) {
    const items = document.querySelectorAll('.step-list-item');
    const screenContent = document.getElementById('browser-screen-content');
    const urlBar = document.getElementById('browser-url');
    
    // Deactivate others, activate current
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    
    screenContent.style.opacity = 0;
    screenContent.style.transform = "scale(0.97)";
    screenContent.style.transition = "opacity 0.2s ease, transform 0.2s ease";
    
    setTimeout(() => {
        if (step === 'step1') {
            urlBar.textContent = "https://aistudio.google.com";
            screenContent.innerHTML = `
                <div class="mock-big-url">aistudio.google.com</div>
                <div class="mock-welcome-title">Google AI Studio Atölyesi 🛠️</div>
                <p class="mock-welcome-desc">Gemini modellerini kalıcı Sistem Yönergeleri ve gelişmiş sıcaklık ayarlarıyla eğitebileceğiniz resmi geliştirici ortamı.</p>
                <button class="btn btn-accent" onclick="document.querySelector('.steps-list .step-list-item:nth-child(2)').click()">
                    <i class="fa-solid fa-right-to-bracket"></i> Google Hesabı ile Giriş Yap
                </button>
            `;
        } else if (step === 'step2') {
            urlBar.textContent = "https://accounts.google.com/signin";
            screenContent.innerHTML = `
                <div class="mock-login-card">
                    <div class="mock-login-logo">
                        <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
                    </div>
                    <div class="mock-login-text">Google AI Studio'ya devam et</div>
                    <button class="mock-btn-google" onclick="document.querySelector('.steps-list .step-list-item:nth-child(3)').click()">
                        <i class="fa-brands fa-google mock-google-icon"></i> Google Hesabı ile Oturum Aç
                    </button>
                    <div class="mock-login-text" style="margin-top: 8px;">
                        Henüz hesabınız yok mu?<br>
                        <span class="mock-login-link" onclick="showGoogleAccountGuide()">
                            <i class="fa-solid fa-circle-question"></i> Nasıl Google Hesabı Açarım?
                        </span>
                    </div>
                </div>
            `;
        } else if (step === 'step3') {
            urlBar.textContent = "https://aistudio.google.com/app/prompts";
            screenContent.innerHTML = `
                <div class="mock-dashboard">
                    <div class="mock-dash-sidebar">
                        <div class="mock-dash-logo"></div>
                        <div class="mock-dash-item active"></div>
                        <div class="mock-dash-item"></div>
                        <div class="mock-dash-item"></div>
                    </div>
                    <div class="mock-dash-main">
                        <div class="mock-dash-title">Yeni İstem Paneli (New Chat)</div>
                        <div class="mock-dash-workspace">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                            <span>Tebrikler! Atölyeniz Hazır 🎉</span>
                            <span style="font-size: 0.65rem; color: var(--text-muted); text-align: center;">Buradan ilk yönergenizi yazarak çalışmaya başlayabilirsiniz.</span>
                        </div>
                    </div>
                </div>
            `;
        }
        screenContent.style.opacity = 1;
        screenContent.style.transform = "scale(1)";
    }, 200);
}

function showGoogleAccountGuide() {
    const screenContent = document.getElementById('browser-screen-content');
    const urlBar = document.getElementById('browser-url');
    
    urlBar.textContent = "https://support.google.com/accounts";
    screenContent.style.opacity = 0;
    screenContent.style.transform = "scale(0.97)";
    
    setTimeout(() => {
        screenContent.innerHTML = `
            <div class="guide-container">
                <div class="guide-header">
                    <button class="guide-back-btn" onclick="document.querySelector('.steps-list .step-list-item:nth-child(2)').click()" aria-label="Geri">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <h4>Google Hesabı Oluşturma Rehberi 📝</h4>
                </div>
                <div class="guide-steps">
                    <div class="guide-step-card">
                        <div class="guide-step-num">1</div>
                        <div>
                            <h5>Kaydolma Sayfasına Gidin</h5>
                            <p>Tarayıcınızda <strong>google.com</strong> adresini açın, sağ üstteki "Oturum Açın" ve ardından "Hesap Oluştur" seçeneğine tıklayın.</p>
                        </div>
                    </div>
                    <div class="guide-step-card">
                        <div class="guide-step-num">2</div>
                        <div>
                            <h5>Kişisel Bilgilerinizi Girin</h5>
                            <p>Adınızı, soyadınızı yazın ve kendinize bir kullanıcı adı belirleyin (Örn: <em>ismim@gmail.com</em>).</p>
                        </div>
                    </div>
                    <div class="guide-step-card">
                        <div class="guide-step-num">3</div>
                        <div>
                            <h5>Güçlü Şifre Oluşturun</h5>
                            <p>Harf, sayı ve semboller içeren en az 8 karakterli güvenli bir şifre belirleyin.</p>
                        </div>
                    </div>
                    <div class="guide-step-card">
                        <div class="guide-step-num">4</div>
                        <div>
                            <h5>Doğrulama ve Tamamlama</h5>
                            <p>İsteğe bağlı olarak telefon numaranızı ve kurtarma e-postanızı ekleyerek doğrulama işlemini tamamlayın.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        screenContent.style.opacity = 1;
        screenContent.style.transform = "scale(1)";
    }, 200);
}

// ==========================================================================
// INTERACTIVE ASSESSMENT QUIZ LOGIC (SLIDE 13)
// ==========================================================================
const quizQuestions = [
    {
        text: "Yapay zeka modellerinin bazen son derece mantıklı görünen ancak tamamen uydurma ve yanlış bilgiler üretmesine ne ad verilir?",
        options: [
            { text: "Halüsinasyon (Uydurma)", letter: "A", correct: true, feedback: "Tebrikler! Yapay zeka modelleri bazen bilmedikleri konularda son derece ikna edici 'uydurma' (hallucinating) cevaplar üretebilir." },
            { text: "Grounding (Arama)", letter: "B", correct: false, feedback: "Yanlış. Grounding, uydurmaları engellemek için yapay zekayı Google Arama ile doğrulama yöntemidir." },
            { text: "Temperature (Sıcaklık)", letter: "C", correct: false, feedback: "Yanlış. Temperature yaratıcılık derecesini ayarlayan bir parametredir." },
            { text: "Prompting (İstem)", letter: "D", correct: false, feedback: "Yanlış. Prompting, yapay zekaya ne yapması gerektiğini söyleyen yönergelerdir." }
        ]
    },
    {
        text: "Google AI Studio'da, yapay zekanın tüm sohbet boyunca asla unutmaması gereken öğretmen rolünü tanımladığımız alan hangisidir?",
        options: [
            { text: "Temperature Ayarları", letter: "A", correct: false, feedback: "Yanlış. Sıcaklık parametresi yaratıcılığı ayarlar, kimlik tanımlamaz." },
            { text: "System Instructions (Sistem Yönergeleri)", letter: "B", correct: true, feedback: "Harika! System Instructions, modele kalıcı bir rol (örn: matematik öğretmeni) ve kurallar vermek için kullanılan alandır." },
            { text: "Structured Prompt (Örnekli İstem)", letter: "C", correct: false, feedback: "Yanlış. Structured Prompt, yapay zekaya örnek girdi-çıktı çiftleri sunarak veri kalıpları öğretme biçimidir." },
            { text: "Google Grounding (Arama)", letter: "D", correct: false, feedback: "Yanlış. Grounding, güncel internet aramalarını aktif veya pasif etme seçeneğidir." }
        ]
    },
    {
        text: "Fen bilimleri kazanımlarına uygun, kesin gerçeklere dayalı sınav soruları hazırlarken Temperature (Sıcaklık) parametresi kaça ayarlanmalıdır?",
        options: [
            { text: "2.0 (Maksimum Yaratıcılık)", letter: "A", correct: false, feedback: "Yanlış. Yüksek sıcaklık esnekliği ve hayal gücünü artırır, ancak bilimsel sorularda hata riski doğurur." },
            { text: "1.0 (Orta Yaratıcılık)", letter: "B", correct: false, feedback: "Yanlış. 1.0 genel masal veya beyin fırtınaları için uygundur; kesin bilimsel veriler için yüksek kalır." },
            { text: "0.0 (Düşük / En Kararlı)", letter: "C", correct: true, feedback: "Muhteşem! Kesin gerçekler, formüller ve ölçme değerlendirme testleri tasarlarken Temperature 0.0'a en yakın değerde tutulmalıdır." },
            { text: "1.5 (Yüksek Yaratıcılık)", letter: "D", correct: false, feedback: "Yanlış. Yüksek sıcaklık yaratıcı masal veya şiir yazmak için uygundur." }
        ]
    },
    {
        text: "Tasarladığımız bir uygulamanın kodlarını Vercel'e deploy etmeden önce, API anahtarımızın (API Key) güvenliğini sağlamak için en doğru yöntem hangisidir?",
        options: [
            { text: "API anahtarını doğrudan HTML kodunun içine yazmak", letter: "A", correct: false, feedback: "Yanlış. Kodunuzu GitHub'a yüklediğinizde API anahtarınız herkes tarafından görülebilir ve çalınabilir." },
            { text: "API anahtarını çevre değişkenlerinde (.env veya Vercel panelinde) saklamak", letter: "B", correct: true, feedback: "Harika! Çevre değişkenleri (Environment Variables) API anahtarınızın kodunuzda gizli ve güvenli kalmasını sağlar." },
            { text: "API anahtarını okul web sitesinde düz metin olarak paylaşmak", letter: "C", correct: false, feedback: "Yanlış. Bu kesinlikle güvenlik sızıntısına yol açacaktır." },
            { text: "API anahtarı kullanmaktan vazgeçmek", letter: "D", correct: false, feedback: "Yanlış. API anahtarı olmadan Gemini modelleriyle bağlantı kuramazsınız." }
        ]
    },
    {
        text: "Yapay zeka modellerinin veri gizliliği standartları açısından, MEB KVKK kurallarına uyum sağlamak için yapılması gereken en önemli eylem hangisidir?",
        options: [
            { text: "Öğrencilerin adını, soyadını ve fotoğraflarını eksiksiz yüklemek", letter: "A", correct: false, feedback: "Yanlış! Öğrencilerin kişisel verilerini doğrudan paylaşmak KVKK ihlalidir." },
            { text: "Verileri tamamen silmek ve yapay zekayı hiç kullanmamak", letter: "B", correct: false, feedback: "Yanlış. Yapay zekayı yasaklamak yerine sorumlu ve etik kullanımı öğretmeliyiz." },
            { text: "Yüklenen verileri anonimleştirmek ve kişisel kimlik bilgilerini sisteme girmemek", letter: "C", correct: true, feedback: "Mükemmel! Öğrenci verilerini anonimleştirerek girmek veri gizliliğini korur." },
            { text: "Ödevleri velilerden izin almadan sisteme yüklemek", letter: "D", correct: false, feedback: "Yanlış. Veli izni olmadan öğrenci verilerini paylaşmak yasal sorunlar doğurabilir." }
        ]
    }
];

let quizCurrentQuestion = 0;
let quizScore = 0;
let quizAnswered = false;

function initQuiz() {
    quizCurrentQuestion = 0;
    quizScore = 0;
    quizAnswered = false;
    document.getElementById('quiz-question-area').style.display = 'block';
    document.getElementById('quiz-result-area').style.display = 'none';
    
    // Reset submission form and leaderboard UI
    const submitForm = document.getElementById('quiz-submit-form');
    if (submitForm) submitForm.style.display = 'block';
    const usernameInput = document.getElementById('quiz-username');
    if (usernameInput) usernameInput.value = '';
    const leaderboardArea = document.getElementById('leaderboard-area');
    if (leaderboardArea) leaderboardArea.style.display = 'none';

    renderQuizQuestion();
}

function renderQuizQuestion() {
    quizAnswered = false;
    const qData = quizQuestions[quizCurrentQuestion];
    
    // Progress Indicator
    document.getElementById('quiz-prog').textContent = `Soru ${quizCurrentQuestion + 1} / ${quizQuestions.length}`;
    
    // Question Text
    document.getElementById('quiz-q-text').textContent = qData.text;
    
    // Options Grid
    const optionsGrid = document.getElementById('quiz-opt-grid');
    optionsGrid.innerHTML = '';
    
    qData.options.forEach((opt, idx) => {
        const optButton = document.createElement('button');
        optButton.className = 'quiz-option';
        optButton.onclick = () => selectQuizOption(idx, optButton);
        optButton.innerHTML = `
            <span class="quiz-opt-letter">${opt.letter}</span>
            <span>${opt.text}</span>
        `;
        optionsGrid.appendChild(optButton);
    });
    
    // Feedback Box
    const feedbackBox = document.getElementById('quiz-feed');
    feedbackBox.style.display = 'none';
    feedbackBox.textContent = '';
}

function selectQuizOption(optionIdx, buttonElement) {
    if (quizAnswered) return; // Allow only one answer
    quizAnswered = true;
    
    const qData = quizQuestions[quizCurrentQuestion];
    const selectedOption = qData.options[optionIdx];
    const feedbackBox = document.getElementById('quiz-feed');
    
    // Apply correct / incorrect styles
    const optionButtons = document.querySelectorAll('.quiz-option');
    optionButtons.forEach((btn, idx) => {
        btn.classList.add('disabled');
        const opt = qData.options[idx];
        if (opt.correct) {
            btn.classList.add('correct');
        }
    });
    
    if (selectedOption.correct) {
        buttonElement.classList.add('correct');
        quizScore++;
        feedbackBox.className = 'quiz-feedback-box correct';
    } else {
        buttonElement.classList.add('incorrect');
        feedbackBox.className = 'quiz-feedback-box incorrect';
    }
    
    // Display feedback
    feedbackBox.textContent = selectedOption.feedback;
    feedbackBox.style.display = 'block';
    
    // Append a Next button to progress
    const nextBtnContainer = document.createElement('div');
    nextBtnContainer.style.marginTop = '20px';
    nextBtnContainer.style.display = 'flex';
    nextBtnContainer.style.justifyContent = 'flex-end';
    
    const nextQuizBtn = document.createElement('button');
    nextQuizBtn.className = 'btn btn-primary';
    if (quizCurrentQuestion === quizQuestions.length - 1) {
        nextQuizBtn.innerHTML = 'Sonuçları Gör <i class="fa-solid fa-square-poll-vertical"></i>';
    } else {
        nextQuizBtn.innerHTML = 'Sonraki Soru <i class="fa-solid fa-chevron-right"></i>';
    }
    nextQuizBtn.onclick = nextQuizQuestion;
    
    nextBtnContainer.appendChild(nextQuizBtn);
    feedbackBox.appendChild(nextBtnContainer);
}

function nextQuizQuestion() {
    if (quizCurrentQuestion < quizQuestions.length - 1) {
        quizCurrentQuestion++;
        renderQuizQuestion();
    } else {
        // Show Results
        document.getElementById('quiz-question-area').style.display = 'none';
        
        const resultArea = document.getElementById('quiz-result-area');
        const scoreText = document.getElementById('quiz-score-text');
        
        scoreText.textContent = `Toplam ${quizQuestions.length} sorudan ${quizScore} tanesini doğru yanıtladınız!`;
        resultArea.style.display = 'block';
    }
}

function restartQuiz() {
    initQuiz();
}

// ==========================================================================
// QUIZ LEADERBOARD BACKEND API INTEGRATION
// ==========================================================================
async function submitScore() {
    const usernameInput = document.getElementById('quiz-username');
    if (!usernameInput) return;
    
    const name = usernameInput.value.trim();
    if (!name) {
        alert('Lütfen liderlik tablosu için adınızı yazın.');
        return;
    }
    
    const scoreData = {
        name: name,
        score: quizScore,
        total: quizQuestions.length
    };
    
    try {
        const response = await fetch('/api/scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scoreData)
        });
        
        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error || 'Skor gönderilemedi.');
        }
        
        // Hide submission box
        const submitForm = document.getElementById('quiz-submit-form');
        if (submitForm) submitForm.style.display = 'none';
        
        // Load and show leaderboard
        await loadLeaderboard();
        
    } catch (error) {
        console.error('Error submitting score:', error);
        alert('Skorunuz kaydedilirken bir hata oluştu: ' + error.message);
    }
}

async function loadLeaderboard() {
    const tbody = document.getElementById('leaderboard-tbody');
    const leaderboardArea = document.getElementById('leaderboard-area');
    if (!tbody || !leaderboardArea) return;
    
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Skorlar yükleniyor...</td></tr>';
    leaderboardArea.style.display = 'block';
    
    try {
        const response = await fetch('/api/scores');
        if (!response.ok) {
            throw new Error('Skorlar yüklenemedi.');
        }
        
        const scores = await response.json();
        tbody.innerHTML = '';
        
        if (scores.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Henüz kaydedilmiş skor bulunmuyor. İlk skoru siz kaydedin!</td></tr>';
            return;
        }
        
        scores.forEach((item, index) => {
            const row = document.createElement('tr');
            
            // Format rank badge
            let rankHtml = '';
            const rank = index + 1;
            if (rank === 1) {
                rankHtml = `<span class="rank-badge rank-1"><i class="fa-solid fa-crown"></i></span>`;
            } else if (rank === 2) {
                rankHtml = `<span class="rank-badge rank-2">2</span>`;
            } else if (rank === 3) {
                rankHtml = `<span class="rank-badge rank-3">3</span>`;
            } else {
                rankHtml = `<span class="rank-badge rank-other">${rank}</span>`;
            }
            
            // Format date (convert string to localized date/time)
            const dateObj = new Date(item.createdAt);
            const dateStr = dateObj.toLocaleDateString('tr-TR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            row.innerHTML = `
                <td style="width: 60px; text-align: center;">${rankHtml}</td>
                <td style="font-weight: 600;">${escapeHtml(item.name)}</td>
                <td style="color: var(--color-accent); font-weight: 700;">${item.score} / ${item.total}</td>
                <td style="color: var(--text-muted); font-size: 0.8rem;">${dateStr}</td>
            `;
            tbody.appendChild(row);
        });
        
    } catch (error) {
        console.error('Error loading leaderboard:', error);
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-danger);">Yükleme hatası: ${error.message}</td></tr>`;
    }
}

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Initialize on page load
window.onload = function() {
    updateSlide();
    loadPreset('matematik');
    setupScrollListener();
};

// ==========================================================================
// MODE SWITCHING & HANDBOOK LOGIC
// ==========================================================================
let currentMode = 'presentation'; // 'presentation' or 'handbook'
let activeHandbookModuleId = null;

function switchMode(mode) {
    if (currentMode === mode) return;
    currentMode = mode;

    const bttBtn = document.getElementById('back-to-top-btn');
    if (bttBtn) bttBtn.classList.remove('show');

    const presentationTab = document.getElementById('tab-presentation');
    const handbookTab = document.getElementById('tab-handbook');
    const slidesWrapper = document.getElementById('slides-wrapper');
    const handbookWrapper = document.getElementById('handbook-wrapper');
    const footer = document.querySelector('.presentation-footer');
    const slideIndicator = document.getElementById('slide-number');

    if (mode === 'presentation') {
        presentationTab.classList.add('active');
        handbookTab.classList.remove('active');
        slidesWrapper.style.display = 'block';
        handbookWrapper.style.display = 'none';
        footer.style.display = 'flex';
        slideIndicator.style.visibility = 'visible';
        updateSlide();
    } else {
        handbookTab.classList.add('active');
        presentationTab.classList.remove('active');
        slidesWrapper.style.display = 'none';
        handbookWrapper.style.display = 'grid';
        footer.style.display = 'none';
        slideIndicator.style.visibility = 'hidden';

        // Lazy initialize the handbook sidebar & default content
        initHandbook();
    }
}

function initHandbook() {
    const handbookMenu = document.getElementById('handbook-menu');
    if (!handbookMenu || handbookMenu.children.length > 0) {
        // If already initialized, just make sure first is shown if none is active
        if (!activeHandbookModuleId && handbookData.length > 0) {
            showHandbookModule(handbookData[0].id);
        }
        return;
    }

    handbookMenu.innerHTML = '';
    
    handbookData.forEach(module => {
        const item = document.createElement('button');
        item.className = 'handbook-menu-item';
        item.id = `hb-item-${module.id}`;
        item.onclick = () => showHandbookModule(module.id);
        item.innerHTML = `
            <i class="${module.icon}"></i>
            <span>${module.title}</span>
        `;
        handbookMenu.appendChild(item);
    });

    if (handbookData.length > 0) {
        showHandbookModule(handbookData[0].id);
    }
}

function showHandbookModule(moduleId) {
    activeHandbookModuleId = moduleId;

    // Update active class in sidebar
    const menuItems = document.querySelectorAll('.handbook-menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    const activeItem = document.getElementById(`hb-item-${moduleId}`);
    if (activeItem) {
        activeItem.classList.add('active');
    }

    // Load data
    const module = handbookData.find(m => m.id === moduleId);
    if (!module) return;

    // Header info
    document.getElementById('handbook-module-title').textContent = module.title;
    document.getElementById('handbook-module-desc').textContent = module.description;

    // Details pane
    const detailsContainer = document.getElementById('handbook-details');
    detailsContainer.innerHTML = '';

    module.topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'handbook-topic-card';

        let html = `<h4>${topic.title}</h4>`;
        html += `<div class="topic-body">${topic.content}</div>`;

        if (topic.prompts && topic.prompts.length > 0) {
            topic.prompts.forEach(p => {
                html += `
                    <div class="prompt-card">
                        <div class="prompt-card-header">
                            <span><i class="fa-solid fa-copy"></i> Hazır Şablon: ${p.title}</span>
                            <button class="copy-btn" onclick="copyPrompt(\`${p.text.replace(/`/g, '\\`').replace(/\n/g, '\\n')}\`, this)">
                                <i class="fa-regular fa-clone"></i> İstem Kopyala
                            </button>
                        </div>
                        <div class="prompt-text">${escapeHtml(p.text)}</div>
                    </div>
                `;
            });
        }

        card.innerHTML = html;
        detailsContainer.appendChild(card);
    });
}

function copyPrompt(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = btnElement.innerHTML;
        btnElement.innerHTML = '<i class="fa-solid fa-check"></i> Kopyalandı!';
        btnElement.classList.add('success');
        
        setTimeout(() => {
            btnElement.innerHTML = originalHTML;
            btnElement.classList.remove('success');
        }, 2000);
    }).catch(err => {
        console.error('Kopyalama hatası: ', err);
        alert('Kopyalanamadı, lütfen metni seçerek manuel kopyalayın.');
    });
}

function filterHandbook() {
    const searchVal = document.getElementById('handbook-search').value.toLowerCase().trim();
    const handbookMenu = document.getElementById('handbook-menu');
    
    // Clear sidebar items first and rebuild or filter
    const items = handbookMenu.querySelectorAll('.handbook-menu-item');
    
    if (!searchVal) {
        items.forEach(item => {
            item.style.display = 'flex';
        });
        // Restore active if available
        if (activeHandbookModuleId) {
            showHandbookModule(activeHandbookModuleId);
        }
        return;
    }

    let firstMatchId = null;

    handbookData.forEach(module => {
        const item = document.getElementById(`hb-item-${module.id}`);
        
        // Search in module title and description
        let isMatch = module.title.toLowerCase().includes(searchVal) || 
                      module.description.toLowerCase().includes(searchVal);

        // Search in topics (title, content, prompts)
        if (!isMatch) {
            module.topics.forEach(topic => {
                if (topic.title.toLowerCase().includes(searchVal) || 
                    topic.content.toLowerCase().includes(searchVal)) {
                    isMatch = true;
                }
                if (topic.prompts) {
                    topic.prompts.forEach(p => {
                        if (p.title.toLowerCase().includes(searchVal) || 
                            p.text.toLowerCase().includes(searchVal)) {
                            isMatch = true;
                        }
                    });
                }
            });
        }

        if (item) {
            if (isMatch) {
                item.style.display = 'flex';
                if (!firstMatchId) {
                    firstMatchId = module.id;
                }
            } else {
                item.style.display = 'none';
            }
        }
    });

    if (firstMatchId) {
        showHandbookModule(firstMatchId);
    } else {
        // No match found across all modules
        document.getElementById('handbook-module-title').textContent = "Arama Sonucu Yok";
        document.getElementById('handbook-module-desc').textContent = "Girdiğiniz terime uygun bir konu veya şablon bulunamadı.";
        document.getElementById('handbook-details').innerHTML = `
            <div class="tip-box" style="border-color: var(--color-pink);">
                <h5>🔍 İpucu:</h5>
                <p>Matematik, Grounding, KVKK, Imagen, Sıcaklık gibi anahtar kelimeleri aramayı deneyin.</p>
            </div>
        `;
    }
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ==========================================================================
// SCROLL TO TOP & BACK TO TOP BUTTON LOGIC
// ==========================================================================
function scrollToTop() {
    if (currentMode === 'presentation') {
        const activeSlideEl = document.querySelector('.slide.active');
        if (activeSlideEl) {
            activeSlideEl.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        const pane = document.querySelector('.handbook-content-pane');
        if (pane) {
            pane.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

function setupScrollListener() {
    const btn = document.getElementById('back-to-top-btn');
    if (!btn) return;

    // Monitor scroll events on slides and handbook pane
    const scrollContainers = document.querySelectorAll('.slide, .handbook-content-pane');
    scrollContainers.forEach(container => {
        container.addEventListener('scroll', () => {
            const isSlideActive = container.classList.contains('active') && currentMode === 'presentation';
            const isHandbookActive = container.classList.contains('handbook-content-pane') && currentMode === 'handbook';
            
            if (isSlideActive || isHandbookActive) {
                if (container.scrollTop > 150) {
                    btn.classList.add('show');
                } else {
                    btn.classList.remove('show');
                }
            }
        });
    });
}

// ==========================================================================
// EXPORT COMPANION RESOURCE TO PDF (PRINT DIALOG)
// ==========================================================================
function downloadResourcesPDF() {
    let printContainer = document.getElementById('printable-area');
    if (!printContainer) {
        printContainer = document.createElement('div');
        printContainer.id = 'printable-area';
        document.body.appendChild(printContainer);
    }
    
    let html = `
        <div class="print-header">
            <h1>Google AI Studio Eğitim Sunumu - Kapsamlı Kaynak Kılavuzu 🎓</h1>
            <p>Öğretmenler için Yapay Zeka ve Google AI Studio Rehberi</p>
        </div>
    `;
    
    handbookData.forEach(module => {
        html += `
            <div class="print-module">
                <h2>${module.title}</h2>
                <p class="print-module-desc"><em>${module.description}</em></p>
        `;
        
        module.topics.forEach(topic => {
            html += `
                <div class="print-topic">
                    <h3>${topic.title}</h3>
                    <div class="print-content">${topic.content}</div>
            `;
            
            if (topic.prompts && topic.prompts.length > 0) {
                topic.prompts.forEach(p => {
                    html += `
                        <div class="print-prompt">
                            <strong>Hazır Şablon: ${p.title}</strong>
                            <pre>${p.text}</pre>
                        </div>
                    `;
                });
            }
            html += `</div>`;
        });
        
        html += `</div>`;
    });
    
    printContainer.innerHTML = html;
    
    // Trigger browser print dialog
    window.print();
}

// ==========================================================================
// GO TO START (RESTART PRESENTATION)
// ==========================================================================
function goToStart() {
    // If in handbook mode, switch back to presentation mode first
    if (currentMode === 'handbook') {
        switchMode('presentation');
    }
    currentSlide = 1;
    updateSlide();
}

// ==========================================================================
// THEME SWITCHER LOGIC
// ==========================================================================
const themes = {
    default: { 
        primary: '#4f46e5', 
        accent: '#06b6d4', 
        primaryGlow: 'rgba(79, 70, 229, 0.4)', 
        accentGlow: 'rgba(6, 182, 212, 0.4)',
        bgDark: '#0a0b10',
        bgContainer: 'rgba(15, 17, 26, 0.7)'
    },
    emerald: { 
        primary: '#059669', 
        accent: '#10b981', 
        primaryGlow: 'rgba(5, 150, 105, 0.4)', 
        accentGlow: 'rgba(16, 185, 129, 0.4)',
        bgDark: '#031710',
        bgContainer: 'rgba(4, 25, 18, 0.75)'
    },
    crimson: { 
        primary: '#dc2626', 
        accent: '#f87171', 
        primaryGlow: 'rgba(220, 38, 38, 0.4)', 
        accentGlow: 'rgba(248, 113, 113, 0.4)',
        bgDark: '#160505',
        bgContainer: 'rgba(28, 7, 7, 0.75)'
    },
    ocean: { 
        primary: '#0284c7', 
        accent: '#38bdf8', 
        primaryGlow: 'rgba(2, 132, 199, 0.4)', 
        accentGlow: 'rgba(56, 189, 248, 0.4)',
        bgDark: '#031625',
        bgContainer: 'rgba(4, 23, 38, 0.75)'
    },
    amber: { 
        primary: '#d97706', 
        accent: '#fbbf24', 
        primaryGlow: 'rgba(217, 119, 6, 0.4)', 
        accentGlow: 'rgba(251, 191, 36, 0.4)',
        bgDark: '#1c1103',
        bgContainer: 'rgba(32, 20, 5, 0.75)'
    }
};

function changeTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-accent', theme.accent);
    document.documentElement.style.setProperty('--color-primary-glow', theme.primaryGlow);
    document.documentElement.style.setProperty('--color-accent-glow', theme.accentGlow);
    document.documentElement.style.setProperty('--bg-dark', theme.bgDark);
    document.documentElement.style.setProperty('--bg-container', theme.bgContainer);
    
    // Update active class on color palette buttons
    const buttons = document.querySelectorAll('.palette-color');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.querySelector(`.palette-color.${themeName}`);
    if (activeBtn) activeBtn.classList.add('active');
}


