// ==========================================================================
// GOOGLE AI STUDIO - EĞİTİM REHBERİ VERİ MODELİ (HANDBOOK DATA)
// ==========================================================================

const handbookData = [
  {
    id: "prompt-mühendisligi",
    title: "1. Prompt Mühendisliği",
    icon: "fa-solid fa-wand-magic-sparkles",
    description: "Yapay zekaya istekleri doğru şekilde anlatma becerisi; system instruction, soru bankası, materyal hazırlama ve rubrik oluşturma teknikleri.",
    topics: [
      {
        title: "System Instruction ile Ders Asistanı Oluşturma",
        content: `
          <p><strong>Sistem Yönergeleri (System Instructions)</strong>, yapay zekaya tüm sohbet boyunca uyması gereken <strong>kalıcı bir kimlik, kurallar ve üslup</strong> vermenizi sağlar. Klasik sohbet arayüzlerinde yapay zeka bir süre sonra ilk verdiğiniz rolleri unutabilir, ancak AI Studio'da System Instruction alanına yazılanlar asla unutulmaz.</p>
          <div class="tip-box">
            <h5>💡 Yönerge Hazırlarken 4 Altın Kural (R-G-S-Ü):</h5>
            <ul>
              <li><strong>R - Rol:</strong> Yapay zekaya kim olduğunu söyleyin. (Örn: "Sen deneyimli bir 6. sınıf Sosyal Bilgiler öğretmenisin.")</li>
              <li><strong>G - Görev:</strong> Ne yapması gerektiğini netleştirin. (Örn: "Öğrencilere doğrudan cevap verme, onlara ipucu vererek buldur.")</li>
              <li><strong>S - Sınırlar:</strong> Neleri yapmaması gerektiğini çizin. (Örn: "Lise seviyesindeki terimleri kullanma, müfredat dışına çıkma.")</li>
              <li><strong>Ü - Üslup:</strong> Nasıl konuşacağını belirleyin. (Örn: "Samimi, destekleyici ve emoji kullanan bir ton kullan.")</li>
            </ul>
          </div>
        `,
        prompts: [
          {
            title: "Sokratik Öğretmen Asistanı Şablonu",
            text: "Sen 7. sınıf Fen Bilimleri dersi için Sokratik yöntemle çalışan bir öğretmensin. Görevin, öğrencilerin sorularına doğrudan doğru yanıtı vermek DEĞİLDİR. Bunun yerine, onların yanlışlarını fark etmelerini ve doğru cevaba adım adım, kendi akıl yürütmeleriyle ulaşmalarını sağlayacak açık uçlu ve yönlendirici sorular sormaktır. Üslubun sabırlı, cesaretlendirici, motive edici ve merak uyandırıcı olmalıdır. Asla lise ve üzeri karmaşık fizik/kimya terimlerini kullanma."
          }
        ]
      },
      {
        title: "Soru Bankası Üretme",
        content: `
          <p>Yapay zekayı kullanarak sınav, quiz veya çalışma kağıdı soruları hazırlamak, öğretmenlerin iş yükünü en çok hafifleten alanlardan biridir. Ancak rastgele sorular üretmek yerine <strong>MEB Kazanımlarına ve Bilişsel Seviyelere (Bloom Taksonomisi)</strong> uygun sorular tasarlatmak kritik önem taşır.</p>
          <div class="info-card">
            <h5>🔧 Parametre Ayarları:</h5>
            <p>Soru bankası üretirken yapay zekanın uydurma yapmaması ve müfredat dışına çıkmaması için <strong>Sıcaklık (Temperature) ayarını 0.0 veya 0.2 gibi en düşük seviyede</strong> tutmalısınız. Bu, AI'ın daha tutarlı ve kararlı sorular hazırlamasını sağlar.</p>
          </div>
        `,
        prompts: [
          {
            title: "Beceri Temelli (PISA Tarzı) Soru Üretici",
            text: "Aşağıdaki kazanımı dikkate alarak, 8. sınıf öğrencileri için günlük hayattan bir senaryoya dayanan, PISA tarzı 1 adet beceri temelli çoktan seçmeli soru hazırlayacaksın. Soru, ezber bilgiyi değil, grafik okuma, analiz ve mantık yürütme becerilerini ölçmelidir. \n\nKazanım: LGS.8.3.1. Maddenin fiziksel ve kimyasal değişimlerini örneklerle açıklar.\n\nSoru yapısı:\n1. Senaryo (Metin ve gerekirse hayali bir tablo verisi)\n2. Soru kökü\n3. A, B, C, D seçenekleri\n4. Doğru cevap ve detaylı pedagojik açıklaması."
          }
        ]
      },
      {
        title: "Kazanım Bazlı Materyal Hazırlama",
        content: `
          <p>Öğrencilerin derse ilgisini çekmek için sadece ders kitabına bağlı kalmayıp, kazanımlarla tam uyumlu <strong>okuma metinleri, bulmacalar, günlük hayat ilişkileri ve analojiler</strong> tasarlayabilirsiniz. Google AI Studio, bu materyalleri saniyeler içinde farklı öğrenme stillerine uygun olarak biçimlendirebilir.</p>
        `,
        prompts: [
          {
            title: "Kazanım Uyumlu Analoji ve Hikaye Tasarlayıcı",
            text: "Konu: Maddenin Halleri ve Tanecikli Yapı\nKazanım: F.6.3.1. Maddelerin tanecikli, boşluklu ve hareketli yapıda olduğunu fark eder.\n\nGörev: Bu konuyu 6. sınıf öğrencilerine sevdirmek amacıyla günlük hayattan (örneğin sinema salonundaki koltuklar, otobüs durakları vb.) eğlenceli bir analoji (benzetim) kurarak 3 paragraflık bir hikaye oluştur. Hikaye sonunda öğrencilerin çıkarım yapmasını sağlayacak 2 adet tartışma sorusu ekle."
          }
        ]
      },
      {
        title: "Rubrik (Değerlendirme Ölçeği) Oluşturma",
        content: `
          <p>Proje ödevleri, sunumlar veya performans görevlerini adil ve objektif şekilde değerlendirmek öğretmenler için saatler alabilir. Yapay zekaya projenin detaylarını vererek <strong>analitik veya bütüncül değerlendirme ölçekleri (rubrik)</strong> hazırlatabilir ve bunu bir tablo formatında alabilirsiniz.</p>
        `,
        prompts: [
          {
            title: "Analitik Rubrik Hazırlama Şablonu",
            text: "Görevin: 'Yenilenebilir Enerji Kaynakları' konulu 7. sınıf proje ödevi için analitik bir rubrik hazırlamaktır. Değerlendirme kriterleri olarak şunları kullanacaksın: 1) Araştırma derinliği, 2) Yaratıcılık ve Model Tasarımı, 3) Sunum Becerileri, 4) Zaman Yönetimi ve İş Birliği. \n\nRubrik her kriter için 4 seviyeli olmalıdır: Çok İyi (4 Puan), İyi (3 Puan), Geliştirilmeli (2 Puan), Yetersiz (1 Puan). Çıktıyı Markdown tablo biçiminde sun."
          }
        ]
      },
      {
        title: "Farklılaştırılmış Öğretim",
        content: `
          <p>Sınıfınızda özel öğrenme ihtiyacı olan (BEP'li) öğrenciler, disleksi tanısı almış bireyler veya akranlarının ilerisinde olan üstün potansiyelli öğrenciler bulunabilir. <strong>Farklılaştırılmış Öğretim</strong> yaklaşımıyla, aynı kazanımı farklı zorluk düzeylerinde ve farklı materyallerle sunabilirsiniz.</p>
        `,
        prompts: [
          {
            title: "BEP ve Üstün Zekalı Öğrenci İçin Etkinlik Uyarlama",
            text: "Kazanım: F.5.2.1. Canlıların benzerlik ve farklılıklarına göre sınıflandırılması.\nElimdeki Etkinlik: Omurgalı ve omurgasız canlıların özelliklerini karşılaştıran 2 sayfalık yoğun bir okuma metni.\n\nGörev: Bu etkinliği aynı kazanımı koruyarak şu iki farklı öğrenci profili için yeniden yapılandır:\nProfil A (Hafif düzey öğrenme güçlüğü çeken öğrenci): Metni basitleştir, maddeleştir, görsel şemalar öner ve soru sayısını azalt.\nProfil B (Üstün potansiyelli ve hızlı öğrenen öğrenci): Araştırma ve sorgulamaya dayalı, derin analiz gerektiren bir ek araştırma sorusu ve problem senaryosu ekle."
          }
        ]
      },
      {
        title: "Prompt Şablonları — Hızlı Başvuru Tablosu",
        content: `
          <p>Sınıfta hızlıca kullanabileceğiniz, sıkça ihtiyaç duyulan ders hazırlık şablonları:</p>
          <table class="handbook-table">
            <thead>
              <tr>
                <th>Kategori</th>
                <th>Ne İşe Yarar?</th>
                <th>Örnek Başlangıç İstem Parçası</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ders Planı</strong></td>
                <td>MEB formatında plan yazar.</td>
                <td>"5. sınıf Bilişim Teknolojileri dersi için 40 dakikalık..."</td>
              </tr>
              <tr>
                <td><strong>Veli Mektubu</strong></td>
                <td>Nazik bilgilendirmeler üretir.</td>
                <td>"Dönem sonu sergisi için velileri davet eden samimi bir..."</td>
              </tr>
              <tr>
                <td><strong>Ödev Tasarımı</strong></td>
                <td>Yaparak yaşayarak ödev üretir.</td>
                <td>"Öğrencilerin evdeki malzemelerle yapabileceği 3 farklı..."</td>
              </tr>
            </tbody>
          </table>
        `,
        prompts: []
      }
    ]
  },
  {
    id: "multimodal-kullanim",
    title: "2. Multimodal Kullanım",
    icon: "fa-solid fa-photo-film",
    description: "Yapay zekânın görsel, PDF ve ses dosyalarıyla çalışabilme yeteneklerini kullanarak ders materyali analizi ve içerik üretimi.",
    topics: [
      {
        title: "Görsel Analizi — Bir Sanat Eserini Analiz Ettirme",
        content: `
          <p>Gemini modelleri çoklu modlu (multimodal) olduğu için sisteme doğrudan görsel yükleyebilirsiniz. Bir resmi yükleyip yapay zekadan <strong>görsel okuma yapmasını, grafik veya haritayı analiz etmesini</strong> isteyebilirsiniz. Görsel Sanatlar dersinde bir tabloyu tahlil ettirmek veya Türkçe dersinde bir karikatürün ana fikrini sorgulatmak için harikadır.</p>
          <div class="warning-box">
            <h5>⚠️ Dikkat Edilmesi Gerekenler:</h5>
            <p>Fotoğraflarda öğrencilerin veya kişilerin yüzleri doğrudan görünüyorsa, veri gizliliği kuralları gereği bu görselleri sisteme yüklemeyin. Haritalar, tarihi belgeler veya sanat eserleri gibi telifsiz kamuya açık görselleri tercih edin.</p>
          </div>
        `,
        prompts: [
          {
            title: "Görsel Analiz ve Sokratik Sorgulama İstemi",
            text: "[AI Studio'ya bir resim (örneğin Kaplumbağa Terbiyecisi tablosunu) yükledikten sonra]:\nSana yüklediğim bu resmi sanatsal ve tarihi açıdan analiz etmeni istiyorum. Öncelikle eserin adını, ressamını ve yapıldığı dönemi tespit et. Ardından eserde yer alan sembollerin (kaplumbağalar, ney, derviş kıyafeti) ne anlama geldiğini açıkla. Son olarak, bu resmi 8. sınıf öğrencilerine gösterdiğimde onlara resmin derin anlamını düşündürmek için sorabileceğim 3 adet estetik/eleştirel soru öner."
          }
        ]
      },
      {
        title: "PDF Analizi — Müfredat Dokümanıyla Çalışma",
        content: `
          <p>Gemini 1.5 modellerinin en büyük gücü <strong>2 Milyon Token (yaklaşık 1.5 milyon kelime)</strong> değerindeki devasa bağlam penceresidir. Bu sayede, okulunuzun 200 sayfalık müfredat kılavuzunu veya tüm bir ders kitabını PDF olarak AI Studio'ya yükleyebilir, saniyeler içinde arama ve analiz yapabilirsiniz.</p>
        `,
        prompts: [
          {
            title: "Müfredat PDF Belgesi Sorgulama",
            text: "[AI Studio'ya MEB Bilişim Teknolojileri Müfredat PDF'ini yükledikten sonra]:\nBu müfredat dökümanında 'Yapay Zeka ve Algoritma' konusunun kaçıncı sınıflarda, hangi kazanımlarla ve kaç saatlik sürelerle ele alındığını listele. Bu kazanımlarla doğrudan örtüşen 3 adet yenilikçi sınıf içi etkinlik fikri üret."
          }
        ]
      },
      {
        title: "Ses Analizi — Bir Ses Kaydını Metne Dönüştürme",
        content: `
          <p>Eğitimciler olarak kendi anlattığınız ders kayıtlarını, yabancı dil dinleme (listening) sınavlarının seslerini veya öğrencilerin yaptığı sunumların ses dosyalarını sisteme yükleyebilirsiniz. Model, ses kaydındaki <strong>konuşmaları tespit eder, deşifre (transcribe) eder ve analiz raporu sunar</strong>.</p>
        `,
        prompts: [
          {
            title: "Ses Kaydı Analizi ve Özetleme",
            text: "[AI Studio'ya ders anlatım kaydını veya öğrenci sunum ses dosyasını yükledikten sonra]:\nBu ses kaydını çözümleyerek konuşulanları Türkçe metne dök. Ardından şu analizleri yap:\n1) Anlatılan konunun ana hatları ve önemli kavramları nelerdir?\n2) Konuşmada tekrarlanan kelime veya pedagojik hatalar var mı?\n3) Bu ders anlatımını daha etkileşimli hale getirmek için 3 tavsiye ver."
          }
        ]
      }
    ]
  },
  {
    id: "build-mode-chatbotlar",
    title: "3. Build Mode — Chatbot Uygulamaları",
    icon: "fa-solid fa-comments",
    description: "Kod yazmadan yapay zekâ destekli chatbot uygulamaları oluşturma; konu tekrarı, kelime öğrenme, yazma koçu ve deney simülatörü gibi araçlar.",
    topics: [
      {
        title: "Build Apps Arayüzü ve Erişim",
        content: `
          <p>Google AI Studio'nun <strong>"Build Mode" (Uygulama Geliştirme Modu)</strong> sayesinde, tek bir satır kod yazmadan sadece form alanlarını doldurarak web üzerinde çalışan ve başkalarıyla paylaşabileceğiniz interaktif yapay zeka uygulamaları tasarlayabilirsiniz. Burada oluşturduğunuz uygulamalar size özel bir web linki (URL) üretir.</p>
        `,
        prompts: []
      },
      {
        title: "Konu Tekrar Chatbot'u",
        content: `
          <p>Öğrencilerinizin evde ders çalışırken anlamadıkları yerleri sorabilecekleri, onlara doğrudan cevap vermeyip ipuçları ile konuyu hatırlatan 24 saat aktif bir ders tekrar koçu oluşturabilirsiniz.</p>
        `,
        prompts: [
          {
            title: "Ders Tekrar Asistanı Sistem Yönergesi",
            text: "Sen 5. sınıf Fen Bilimleri dersi için 'Maddenin Değişimi' ünitesi tekrar koçusun. Görevin, öğrencilerin bu ünite ile ilgili takıldığı kavramları (erime, donma, buharlaşma, yoğuşma, süblimleşme, kırağılaşma) anlamalarına yardımcı olmaktır. Öğrenci bir kavramı sorduğunda ona doğrudan tanım yapma. Günlük hayattan bir örnek ver (örn: kışın araba camlarının buğulanması hangisidir?) ve onun tahmin etmesini iste. Doğru bildiğinde tebrik edip pekiştirici bilgi ver."
          }
        ]
      },
      {
        title: "Kelime/Kavram Öğrenme Uygulaması",
        content: `
          <p>Yabancı dil öğretiminde kelime ezberlemek yerine bağlam içinde öğrenmek esastır. Bu chatbot, öğrencilere seçtikleri kelimeleri cümle içinde kullandırarak öğretir.</p>
        `,
        prompts: [
          {
            title: "Yabancı Dil Kelime Koçu Yönergesi",
            text: "Sen ortaokul İngilizce seviyesine uygun çalışan bir 'Vocabulary Coach'sun. Öğrencilerle seviyelerine uygun kelime oyunları oynarsın. Her adımda öğrenciye yeni bir İngilizce kelime ver, Türkçe anlamını sorma. Bunun yerine o kelimeyi içeren basit bir İngilizce cümle kurmasını iste. Kurduğu cümleyi dil bilgisi ve bağlam açısından değerlendir, eğer hata varsa doğrusunu gösterip onu yüreklendir."
          }
        ]
      },
      {
        title: "Yazma Koçu",
        content: `
          <p>Öğrencilerin kompozisyon, hikaye veya paragraf yazma becerilerini geliştiren, metindeki anlatım bozukluklarını ve yazım hatalarını öğrencinin kendisinin düzeltmesini teşvik eden asistan.</p>
        `,
        prompts: [
          {
            title: "Yazma Becerisi Destek Botu Yönergesi",
            text: "Sen Türkçe dersi Yazma Koçusun. Öğrenciler sana yazdıkları kısa kompozisyon veya hikayeleri gönderecek. Sen metni doğrudan düzeltmeyeceksin. Metni şu 3 kritere göre değerlendirip öğrenciye geri bildirim vereceksin: 1) İmla ve noktalama hataları (hangi satırda ne hata olduğunu belirt ama doğrusunu hemen yazma, onun bulmasını sağla), 2) Giriş-gelişme-sonuç bütünlüğü, 3) Kelime çeşitliliği. Çok nazik ve yapıcı bir ton kullan."
          }
        ]
      },
      {
        title: "Deney Simülatörü",
        content: `
          <p>Laboratuvar imkanı kısıtlı okullarda veya tehlikeli kimyasal reaksiyonları sınıfta yapmadan önce öğrencilerin sanal olarak deneyebileceği metin tabanlı simülasyon aracı.</p>
        `,
        prompts: [
          {
            title: "Sanal Kimya Laboratuvarı Yönergesi",
            text: "Sen ortaokul seviyesine uygun çalışan bir Sanal Fen Laboratuvarı Simülatörüsün. Öğrenci laboratuvara girer. Ona 3 seçenek sun: A) Asit-Baz Deneyi, B) Yoğunluk Kulesi Deneyi, C) Isı ve Sıcaklık Değişimi Deneyi. Öğrenci seçimi yaptıktan sonra ona elindeki malzemeleri listele ve 'İlk adımda ne yapmak istersin?' diye sor. Öğrencinin verdiği yanıta göre kimyasal ve fiziksel sonuçları gerçekçi ama anlaşılır bir dille tasvir et."
          }
        ]
      },
      {
        title: "Tarihsel Karakter Canlandırma",
        content: `
          <p>Öğrencilerin tarih dersindeki önemli şahsiyetlerle mülakat yapmasını sağlayarak tarihsel empati kurmalarını kolaylaştıran rol yapma (role-play) robotu.</p>
        `,
        prompts: [
          {
            title: "Galileo Galilei Rol Yapma Yönergesi",
            text: "Sen ünlü gökbilimci ve fizikçi Galileo Galilei'sin. Yıl 1633, engizisyon mahkemesinde yargılanma sürecindesin veya teleskobunla gökyüzünü gözlemliyorsun. Karşındaki kişi ise seninle röportaj yapmaya gelmiş bir zaman yolcusu öğrenci. Sorulara o dönemin bilgisiyle, bilime olan inancınla ve hafif İtalyan aksanı taklit eden nazik bir Türkçeyle cevap ver. Modern döneme ait (akıllı telefon, internet vb.) kelimeleri bilmediğini unutma."
          }
        ]
      },
      {
        title: "Matematik Problem Çözücü",
        content: `
          <p>Matematikteki ezberci yaklaşımı kırmak amacıyla formülü doğrudan vermeyen, sorunun mantığını somut örneklerle açıklayan asistan yönergesi.</p>
        `,
        prompts: [
          {
            title: "Mantıksal Matematik Çözüm Rehberi",
            text: "Sen öğrencilere matematik problemlerini sevdiren bir asistan öğretmensin. Bir öğrenci sana matematik sorusu gönderdiğinde çözümü hemen yazma. Önce sorunun hikayesini somutlaştır (örneğin havuz problemi ise 'Düşün ki bahçende bir çocuk havuzu var...' diyerek anlat). Öğrenciye ilk işlem olarak ne yapması gerektiğini sor, adım adım yönlendir."
          }
        ]
      },
      {
        title: "Müfredat Planlama Aracı",
        content: `
          <p>Öğretmenlerin haftalık ders planlarını, kazanım takvimlerini ve ders içi etkinlik zamanlamalarını optimize eden kurumsal asistan.</p>
        `,
        prompts: [
          {
            title: "Haftalık Ders Planı Asistanı Yönergesi",
            text: "Sen öğretmenlerin ders planlama yükünü hafifleten profesyonel bir eğitim tasarımcısısın. Öğretmen sana dersin adını, sınıf seviyesini, haftalık ders saatini ve hedef kazanımı verecek. Sen MEB formatına uygun olarak şu bölümleri içeren 1 ders saatlik (40 dk) plan üreteceksin: 1) Derse giriş ve dikkat çekme etkinliği (5 dk), 2) Keşfetme ve konuyu işleme (20 dk), 3) Değerlendirme ve özet (15 dk), 4) Ev ödevi ve alternatif kaynak önerisi."
          }
        ]
      }
    ]
  },
  {
    id: "ai-studio-entegrasyon",
    title: "4. AI Studio ile GitHub ve Vercel Entegrasyonu",
    icon: "fa-solid fa-code-branch",
    description: "AI Studio'da oluşturulan uygulamaların GitHub üzerinden Vercel'e güvenli bir şekilde deploy edilmesi ve paylaşılması süreci.",
    topics: [
      {
        title: "GitHub Repo Oluşturma ve Bağlama",
        content: `
          <p>Google AI Studio'da tasarladığınız bir arayüzün kodlarını (HTML/JS) dışarı aktarmak için sağ üstteki <strong>"Get Code"</strong> butonuna basabilirsiniz. Bu kodları tüm dünyaya açmak için ilk adım bir GitHub deposu (repository) oluşturmaktır.</p>
          <div class="info-card">
            <h5>📁 Adım Adım GitHub Kurulumu:</h5>
            <ol>
              <li>GitHub hesabınızda oturum açın ve sağ üstteki <strong>"+" &gt; "New repository"</strong> seçeneğine tıklayın.</li>
              <li>Deponuza bir isim verin (Örn: <code>yapay-zeka-sinif-botu</code>) ve "Public" olarak oluşturun.</li>
              <li>Bilgisayarınızda projenizin olduğu klasörde terminali açıp şu komutları çalıştırarak kodlarınızı GitHub'a gönderin:
                <pre><code>git init\ngit add .\ngit commit -m "ilk commit"\ngit branch -M main\ngit remote add origin [REPO_LINKINIZ]\ngit push -u origin main</code></pre>
              </li>
            </ol>
          </div>
        `,
        prompts: []
      },
      {
        title: "Deploy Öncesi Güvenlik Yapılandırması",
        content: `
          <p>Yapay zeka uygulamalarınızı internete yüklerken en büyük risk, <strong>API Anahtarınızın (API Key) çalınmasıdır</strong>. API anahtarınız çalınırsa başkaları sizin kotanızı tüketebilir veya adınıza yüksek faturalar çıkarabilir.</p>
          <div class="warning-box">
            <h5>⚠️ Güvenlik Kuralları:</h5>
            <ul>
              <li><strong>Asla koda doğrudan yazmayın:</strong> API Key değerinizi HTML veya JS dosyasının içerisine tırnak içinde yapıştırmayın.</li>
              <li><strong>Çevre Değişkenleri (Environment Variables):</strong> API anahtarınızı yerel bilgisayarınızda <code>.env</code> dosyasında saklayın.</li>
              <li><strong>Restriksiyon Yapın:</strong> Google AI Developer Console üzerinden API anahtarınızı sadece belirli web sitelerinde (örneğin sadece sizin vercel domaininizde) çalışacak şekilde sınırlandırın.</li>
            </ul>
          </div>
        `,
        prompts: []
      },
      {
        title: "Vercel'e Deployment ve Paylaşım",
        content: `
          <p>GitHub'a yüklediğiniz web tabanlı chatbot uygulamasını ücretsiz olarak sunucuya yüklemek için en kolay yöntem <strong>Vercel</strong> kullanmaktır.</p>
          <div class="info-card">
            <h5>🚀 Vercel Entegrasyonu:</h5>
            <ol>
              <li>Vercel.com sitesine gidin ve GitHub hesabınızla giriş yapın.</li>
              <li><strong>"Add New" &gt; "Project"</strong> butonuna basarak oluşturduğunuz GitHub reposunu seçip "Import" edin.</li>
              <li><strong>Environment Variables (Çevre Değişkenleri)</strong> alanına gelin. Anahtar adı olarak <code>GEMINI_API_KEY</code>, değer olarak ise AI Studio'dan aldığınız API anahtarınızı girin.</li>
              <li>"Deploy" butonuna basın. Vercel uygulamanızı saniyeler içinde derleyecek ve size <code>https://projeniz.vercel.app</code> şeklinde güvenli bir web linki verecektir.</li>
            </ol>
          </div>
        `,
        prompts: []
      }
    ]
  },
  {
    id: "build-mode-gelismis",
    title: "5. Build Mode — Gelişmiş Uygulamalar",
    icon: "fa-solid fa-laptop-code",
    description: "Build Apps'in tüm gücünü kullanarak interaktif quiz platformları, sesli asistanlar, görsel atölyeleri ve oyunlar oluşturma.",
    topics: [
      {
        title: "Gelişmiş Uygulama — İnteraktif Quiz Platformu",
        content: `
          <p>Öğrencilerin sınıf içi tablet veya akıllı tahta üzerinden katılabileceği, yapay zekanın anlık sorular sorduğu ve öğrencilerin verdikleri cevaplara göre onlara özel gelişim karnesi hazırlayan web uygulaması mantığı.</p>
        `,
        prompts: [
          {
            title: "İnteraktif Soru ve Puanlama Platformu Yönergesi",
            text: "Sen interaktif bir kelime quiz platformusun. Öğrenciye her aşamada seviyesine göre 1 soru soracaksın. Öğrenci doğru cevap verirse skorunu 10 puan artır ve tebrik et. Yanlış cevap verirse doğrusunu açıkla ve 5 puan düşür. Her 3 soruda bir öğrenciye detaylı bir 'Kelime Gelişim Raporu' sunarak hangi alanlarda zayıf olduğunu analiz et."
          }
        ]
      },
      {
        title: "Sesli Telaffuz Asistanı",
        content: `
          <p>Yabancı dil öğreniminde konuşma pratiği yapmak en zor kısımdır. Gemini'ın multimodal ses yeteneklerini kullanarak, öğrencinin mikrofondan söylediği İngilizce cümlelerin telaffuzunu tahlil eden sistem.</p>
        `,
        prompts: [
          {
            title: "Pronunciation Coach Yönergesi",
            text: "Sen yabancı dil sınıfları için çalışan bir telaffuz ve konuşma koçusun. Sana ses dosyası veya mikrofon kaydı olarak gönderilen konuşmaları dinleyeceksin. Konuşmadaki kelimelerin telaffuz doğruluğunu değerlendir. Varsa vurgu hatalarını, yutulan sesleri veya yanlış telaffuz edilen kelimeleri raporla. Kelimenin doğru okunuşunu fonetik olarak ve Türkçe ipuçlarıyla tarif et."
          }
        ]
      },
      {
        title: "Görsel Materyal Atölyesi",
        content: `
          <p>Yapay zekayı kullanarak ders sunumları için şema taslakları, kavram haritaları ve zihin haritası yapısı çıkarma yönergeleri.</p>
        `,
        prompts: [
          {
            title: "Zihin Haritası Metin Yapısı Çıkarıcı",
            text: "Konu: Sindirim Sistemi Organları\nGörev: Bu konuyu 7. sınıf öğrencilerine anlatmak üzere hazırlanacak zihin haritasının (Mind Map) hiyerarşik yapısını çıkar. En merkezde 'Sindirim Sistemi' olacak şekilde, alt dalları (Sindirim kanalı, yardımcı organlar) ve bunların altındaki detayları girintili liste formatında yapılandır. Her organın yanına akılda kalıcı 1 kelimelik bir benzetim ekle (örn: Mide - Karıştırıcı)."
          }
        ]
      },
      {
        title: "Şarkı ve Melodi Üretici",
        content: `
          <p>Müzik veya okul öncesi öğretmenleri için, kazanımları şarkı sözü haline getiren ve müzikal ritim yapısı öneren yaratıcı asistan.</p>
        `,
        prompts: [
          {
            title: "Eğitici Akılda Kalıcı Şarkı Sözü Yazarı",
            text: "Konu: Matematik Çarpım Tablosu (Özellikle 7'ler ve 8'ler)\nGörev: İlkokul 3. sınıf öğrencilerinin ezberlemekte zorlandığı bu çarpımları içeren, rap veya tekerleme ritmine uygun, eğlenceli ve kafiyeli 4 kıtadan oluşan bir eğitici şarkı sözü yaz. Şarkının nakaratı çok basit ve akılda kalıcı olsun."
          }
        ]
      },
      {
        title: "Hikâye Macera Oyunu",
        content: `
          <p>Öğrencilerin tarih, fen veya Türkçe derslerinde kararlarına göre yönlenen metin tabanlı "Kendi Maceranı Kendin Seç" (Choose Your Own Adventure) kurguları tasarlama.</p>
        `,
        prompts: [
          {
            title: "Kurtuluş Savaşı Macera Oyunu Yönergesi",
            text: "Sen Kurtuluş Savaşı döneminde geçen interaktif bir tarih macera oyunusun. Oyuncu, Sivas Kongresi'ne katılmaya çalışan genç bir vatansever rolündedir. Her adımda oyuncuya içinde bulunduğu durumu tasvir et ve ona seçebileceği 3 farklı yol (A, B, C) sun. Oyuncunun seçimine göre hikayeyi ilerlet. Yanlış kararlar (güvenliği hiçe sayma vb.) elenmesine yol açsın. Amaç, kararların tarihi sonuçlarını yaşayarak öğretmektir."
          }
        ]
      },
      {
        title: "Öğrenci Proje Takip Panosu",
        content: `
          <p>Proje tabanlı öğrenmede öğretmenlerin öğrenci gruplarının ilerlemesini kaydettiği, yapay zekanın ise gruplara sonraki adımlar için otomatik tavsiyeler ürettiği sistem şablonu.</p>
        `,
        prompts: [
          {
            title: "Proje Değerlendirme ve Tavsiye Üretici",
            text: "Grup Adı: Robotik Tasarım Grubu\nProje Konusu: Akıllı çöp kutusu tasarımı\nŞu Anki Aşama: Arduino bağlantıları yapıldı, mesafe sensörü takıldı ancak kodlama kısmında servo motorun ne zaman döneceği yazılmadı.\n\nGörev: Bu grubun durumunu analiz ederek, projenin tamamlanabilmesi için atılması gereken sonraki 3 teknik adımı listeleyen ve karşılaşılabilecek olası kodlama hatalarına karşı uyaran samimi bir grup geri bildirimi hazırla."
          }
        ]
      }
    ]
  },
  {
    id: "grounding-guncel-bilgi",
    title: "6. Grounding ile Güncel Bilgi",
    icon: "fa-solid fa-globe",
    description: "Google Arama entegrasyonu ile yapay zekâ yanıtlarını güncel kaynaklarla destekleme ve bilgi doğrulama becerileri.",
    topics: [
      {
        title: "Google Arama Entegrasyonu ile Güncel Olay Analizi",
        content: `
          <p>Yapay zeka modellerinin en büyük zafiyetlerinden biri, eğitim verilerinin kesildiği tarihten sonraki güncel olayları bilmemeleridir. Google AI Studio'da yer alan <strong>"Google Search Grounding" (Google Arama Temellendirmesi)</strong> özelliği, Gemini'ın yanıt vermeden önce web'de canlı arama yapmasını sağlar. Bu özellik halüsinasyon riskini neredeyse sıfıra indirir.</p>
          <div class="info-card">
            <h5>⚙️ Grounding Nasıl Açılır?</h5>
            <p>AI Studio sağ panelindeki araçlar (Tools) menüsünden <strong>"Google Search"</strong> seçeneğini aktif etmeniz yeterlidir. Bu sayede model, verdiği bilgilerin altına doğrulama yaptığı web sitelerinin kaynak linklerini de ekleyecektir.</p>
          </div>
        `,
        prompts: [
          {
            title: "Güncel Bilimsel Keşif Raporu İstemi",
            text: "[Google Search Grounding aktifken]:\nSon 6 ay içinde uzay araştırmaları veya NASA'nın James Webb teleskobu tarafından gerçekleştirilen en önemli 3 yeni keşfi web üzerinden araştırarak listele. Her keşif için haber kaynağının linkini ve bu keşiflerin ortaokul fen bilimleri dersinde 'Uzay Araştırmaları' ünitesinde nasıl bir güncel örnek olarak kullanılabileceğini açıkla."
          }
        ]
      },
      {
        title: "Kaynak Doğrulama Etkinliği — \"AI Doğru mu Söylüyor?\"",
        content: `
          <p>Sınıflarımızda öğrencilere yapay zekaya körü körüne güvenmemeyi öğretmek kritik bir medya okuryazarlığı becerisidir. Öğrencilerin AI çıktılarını klasik arama motorlarıyla veya kütüphane kaynaklarıyla eşleştirerek doğruladığı bir sınıf etkinliği tasarımı.</p>
        `,
        prompts: [
          {
            title: "Bilgi Doğrulama Dedektifliği Etkinliği",
            text: "Ortaokul Türkçe dersi 'Medya Okuryazarlığı' kapsamında uygulanmak üzere 1 ders saatlik 'Yapay Zeka Dedektifleri' etkinlik planı hazırla. Etkinlikte, yapay zekanın kasıtlı olarak hatalı bilgi (halüsinasyon) verdiği bir metin üzerinden öğrencilerin internette arama yaparak bu hataları bulması ve kaynak göstererek doğrulama yapması hedeflensin. Etkinlik kağıdı şablonu da içersin."
          }
        ]
      }
    ]
  },
  {
    id: "gorsel-uretim-imagen",
    title: "7. Görsel Üretim — Imagen",
    icon: "fa-solid fa-palette",
    description: "Imagen 3 modeli ile metin açıklamasından ders materyali, poster ve hikâye illüstrasyonları üretme.",
    topics: [
      {
        title: "Ders Materyali İçin Görsel Üretme",
        content: `
          <p>Google'ın gelişmiş görsel üretim modeli <strong>Imagen 3</strong> sayesinde, çalışma kağıtlarınız, slaytlarınız ve ders anlatımlarınız için kimsede olmayan, tamamen özgün görseller tasarlayabilirsiniz. Google AI Studio veya entegre araçlarla prompt yazarak bunu yapabilirsiniz.</p>
          <div class="tip-box">
            <h5>🎨 Kaliteli Eğitsel Görsel İpuçları:</h5>
            <ul>
              <li><strong>Tarz Tanımlayın:</strong> "vector illustration, minimalist diagram, 3D render, cartoon style..."</li>
              <li><strong>Arka Planı Temizleyin:</strong> "isolated on a clean white background" yazarak görselleri sunumlarınıza kolayca yerleştirin.</li>
              <li><strong>Detay Verin:</strong> Karakterin yaşını, bakış açısını, renk paletini net belirtin.</li>
            </ul>
          </div>
        `,
        prompts: [
          {
            title: "Hücre Modeli Görsel Üretim İstemi",
            text: "A highly detailed, colorful 3D vector illustration of a plant cell, showing cell wall, chloroplasts, nucleus, and mitochondria. Isolated on a clean, solid dark blue background, professional educational textbook diagram style, clear layout, no labels."
          }
        ]
      },
      {
        title: "Poster ve İnfografik Tasarımı",
        content: `
          <p>Sınıf panolarını süsleyecek, kuralları veya formülleri görselleştiren eğitici poster ve infografik tasarımları üretmek için prompt kurguları.</p>
        `,
        prompts: [
          {
            title: "Sınıf Kuralları Poster Taslağı",
            text: "A minimalist educational poster showing classroom safety rules in chemistry lab. Flat vector art style, warm color palette, symbols of safety goggles, washing hands, and lab coat, clean design, inspiring mood."
          }
        ]
      },
      {
        title: "Hikâye İllüstrasyonu",
        content: `
          <p>Kendi yazdığınız masalları veya Türkçe dersinde öğrencilerin yazdığı hikayeleri resimlendirmek için tutarlı karakter tasarımları üretme ipuçları.</p>
        `,
        prompts: [
          {
            title: "Çocuk Kitabı Sayfa Çizimi İstemi",
            text: "A cute watercolor illustration for a children's storybook. A young friendly brown bear wearing a red scarf, reading a book under a big oak tree in a sunny forest. Soft pastel colors, warm lighting, magical and whimsical style."
          }
        ]
      }
    ]
  },
  {
    id: "guvenlik-ve-etik",
    title: "8. Güvenlik ve Etik",
    icon: "fa-solid fa-shield-halved",
    description: "Yapay zekâ kullanımında güvenlik önlemleri ve etik kurallar hakkında bilgilendirme.",
    topics: [
      {
        title: "Güvenlik ve Etik Kuralları",
        content: `
          <p>Yapay zeka sistemleri kullanılırken ön yargılar (bias) barındırabileceği, cinsiyetçi, ırkçı veya kültürel açıdan ayrımcı çıktılar üretebileceği unutulmamalıdır. Sınıfta yapay zekayı bir <strong>pedagojik süzgeçten</strong> geçirmek öğretmenin asli görevidir.</p>
        `,
        prompts: []
      },
      {
        title: "KVKK ve Öğrenci Verisi Güvenliği",
        content: `
          <p>Öğrencilerimizin isimleri, okul numaraları, fotoğrafları, sesleri ve kişisel gelişim bilgileri <strong>Kişisel Verilerin Korunması Kanunu (KVKK)</strong> kapsamında hassas verilerdir. AI Studio'da paylaştığınız her verinin veri tabanlarında saklanabileceğini bilerek hareket etmelisiniz.</p>
          <div class="warning-box" style="border-color: var(--color-pink);">
            <h5>🚨 Temel Veri Filtresi:</h5>
            <p>Sisteme yükleyeceğiniz her öğrenci çalışmasını veya soruyu şu süzgeçten geçirin: <em>'Ben bu veriyi okulun bahçe duvarındaki panoya herkesin göreceği şekilde asabilir miyim?'</em> Cevabınız hayır ise o veriyi yapay zekaya yüklemeyin!</p>
          </div>
        `,
        prompts: []
      },
      {
        title: "Halüsinasyon Farkındalığı",
        content: `
          <p>Yapay zeka modelleri olasılıksal (probabilistic) çalıştıkları için bazen son derece ikna edici yalanlar söyleyebilirler. Buna yapay zeka literatüründe <strong>"Halüsinasyon" (Hallucination)</strong> denir. Ders materyallerindeki formülleri, tarihi tarihleri ve isimleri sınıfa götürmeden önce mutlaka kendiniz teyit edin.</p>
        `,
        prompts: []
      },
      {
        title: "Telif Hakkı ve Akademik Dürüstlük",
        content: `
          <p>Öğrencilerin ödevlerinde yapay zekayı tamamen kopyala-yapıştır aracı olarak kullanması akademik dürüstlüğü zedeler. Çözüm, yapay zekayı yasaklamak değil; ödev tasarımlarını değiştirerek öğrencilerin AI'ı sadece taslak çıkarmada ve fikir geliştirmede kullanmalarını teşvik etmek, kaynak gösterme alışkanlığı kazandırmaktır.</p>
        `,
        prompts: [
          {
            title: "Akademik Dürüstlük Sözleşmesi İstem Taslağı",
            text: "Ortaokul ve lise düzeyindeki sınıflar için, öğrencilerin ödevlerinde yapay zekayı hangi ölçüde ve nasıl kaynak göstererek kullanabileceklerini düzenleyen, 5 maddelik, öğrenci dostu dille yazılmış bir 'Yapay Zeka ve Akademik Dürüstlük Sözleşmesi' taslağı hazırla."
          }
        ]
      },
      {
        title: "Sınıfta Yapay Zekâ Kullanım Kuralları Oluşturma Etkinliği",
        content: `
          <p>Öğrencilerinizle birlikte sınıfta yapay zeka araçlarını ne zaman ve nasıl kullanabileceğinize dair ortak bir sınıf anayasası çıkarma etkinliği planı.</p>
        `,
        prompts: [
          {
            title: "Yapay Zeka Sınıf Anayasası Çalıştayı",
            text: "Bilişim Teknolojileri veya Rehberlik dersinde uygulanmak üzere, 40 dakikalık 'Sınıfımızın Yapay Zeka Kurallarını Yazıyoruz' atölye çalışması planı oluştur. Etkinlikte beyin fırtınası soruları, grup çalışması rolleri ve nihai bir sınıf panosu görsel taslağı yer alsın."
          }
        ]
      }
    ]
  },
  {
    id: "hazir-prompt-kutuphanesi",
    title: "9. Hazır Prompt Kütüphanesi",
    icon: "fa-solid fa-book-bookmark",
    description: "Öğretmenlerin günlük işlerinde kullanabilecekleri hazır prompt şablonları ve örnekleri.",
    topics: [
      {
        title: "Hazır Prompt Kütüphanesi Nedir?",
        content: `
          <p>Bu bölüm, farklı branşlardaki öğretmenlerimizin Google AI Studio'da hızlıca kopyalayıp ilgili alanları değiştirerek kullanabilecekleri pratik şablon kütüphanesidir. İlgili branşın altındaki kod bloklarından istemleri kopyalayabilirsiniz.</p>
        `,
        prompts: []
      },
      {
        title: "Türkçe / Türk Dili ve Edebiyatı",
        content: `<p>Türkçe derslerinde okuma anlama, dil bilgisi ve yaratıcı yazarlık için hazır kopyalanabilir şablon:</p>`,
        prompts: [
          {
            title: "Okuma Anlama Metni ve Soru Üretici",
            text: "Sınıf Seviyesi: 6. Sınıf\nKonu: Çevre Bilinci ve Doğa Sevgisi\n\nGörev: Bu seviyedeki öğrencilerin kelime dağarcığına uygun, merak uyandıran 250 kelimelik bir okuma metni yaz. Metinden hareketle yanıtlanacak 3 adet açık uçlu okuma-anlama sorusu ve bu soruların öğretmen için cevap anahtarını hazırla."
          }
        ]
      },
      {
        title: "Matematik",
        content: `<p>Yeni nesil soru tasarımları ve geometri ispat mantığı için asistan şablonu:</p>`,
        prompts: [
          {
            title: "LGS Tarzı Sayısal Analiz Sorusu",
            text: "Konu: Üslü İfadeler ve Ondalık Gösterimlerin Çözümlenmesi\nGörev: 8. sınıf LGS sınav formatına tam uyumlu, günlük yaşamdan bir kargo paketleme veya veri aktarım hızı senaryosuna dayanan, öğrencilerin işlem becerisiyle mantıksal akıl yürütmesini harmanlayan 1 adet çoktan seçmeli LGS tarzı matematik sorusu yaz. Tüm şıkları ve çözüm aşamalarını detaylandır."
          }
        ]
      },
      {
        title: "Fen Bilimleri",
        content: `<p>Fen derslerinde deney yönergeleri ve kavram yanılgısı analiz şablonları:</p>`,
        prompts: [
          {
            title: "Kavram Yanılgısı Tespit Etkinliği",
            text: "Konu: Isı ve Sıcaklık arasındaki farklar.\nGörev: Öğrencilerin sıklıkla yaptığı 'Hava sıcaklığı bugün çok yüksek, ısısı arttı' gibi kavram yanılgılarını ortaya çıkaracak 3 soruluk bir doğru-yanlış etkinliği tasarla. Her doğrunun/yanlışın arkasındaki fiziksel gerçeği 5. sınıf seviyesine uygun olarak açıkla."
          }
        ]
      },
      {
        title: "Sosyal Bilgiler / Tarih",
        content: `<p>Tarihi karakter mektupları ve coğrafya harita okuma pratikleri:</p>`,
        prompts: [
          {
            title: "Tarihsel Empati - İstiklal Yolu Günlüğü",
            text: "Görevin: Kurtuluş Savaşı sırasında İnebolu'dan Ankara'ya kağnısıyla cephane taşıyan kurgusal bir karakterin (örneğin Şerife Bacı'nın yol arkadaşı bir köylü) ağzından yazılmış 1 sayfalık günlük sayfası oluştur. Günlükte coğrafi zorluklar, soğuk hava ve vatan sevgisi temaları ön planda olsun."
          }
        ]
      },
      {
        title: "İngilizce",
        content: `<p>Seviyelendirilmiş okuma metinleri ve kelime eşleştirme bulmacaları:</p>`,
        prompts: [
          {
            title: "Lexile Seviyeli Okuma Metni (A2)",
            text: "Target Level: CEFR A2 (Elementary)\nTopic: My Summer Holiday\n\nTask: Write a simple story about a family visiting Cappadocia. Use only Present Simple and Past Simple tenses. Include a 'Vocabulary list' with English definitions for the 5 most difficult words in the text."
          }
        ]
      },
      {
        title: "Bilişim Teknolojileri",
        content: `<p>Algoritma mantığı ve Scratch/Python kod hatalarını ayıklama asistanı:</p>`,
        prompts: [
          {
            title: "Scratch Blok Mantığı Algoritma Soruları",
            text: "Görevin: Scratch programında 'Değişkenler' ve 'Eğer İse' karar bloklarını öğrenen 6. sınıf öğrencileri için 3 adet kısa senaryo yaz. Her senaryoda karakterin ekranda ne yapacağı anlatılsın ve öğrencilerden bu karakterin algoritmasını Scratch blok isimleriyle yazması istensin."
          }
        ]
      },
      {
        title: "Görsel Sanatlar / Müzik",
        content: `<p>Sanat akımları inceleme ve yaratıcı enstrüman yapım fikirleri:</p>`,
        prompts: [
          {
            title: "Evdeki Malzemelerle Enstrüman Tasarlama",
            text: "Görevin: Müzik dersi kapsamında, 4. sınıf öğrencilerinin evdeki geri dönüşüm malzemelerini (karton kutu, paket lastiği, plastik bardak) kullanarak yapabilecekleri 3 farklı basit telli veya vurmalı çalgı tasarım kılavuzu hazırla. Her çalgının ses çıkarma prensibini basitçe açıkla."
          }
        ]
      }
    ]
  },
  {
    id: "sorun-giderme-ve-sss",
    title: "10. Sorun Giderme ve SSS",
    icon: "fa-solid fa-circle-question",
    description: "AI Studio kullanımında karşılaşılabilecek yaygın sorunlar ve çözüm önerileri.",
    topics: [
      {
        title: "Yaygın Hatalar ve Çözümleri",
        content: `
          <div class="safety-grid">
            <div class="safety-item glass">
              <div class="safety-icon text-danger"><i class="fa-solid fa-triangle-exclamation"></i></div>
              <div>
                <h4>Quota Exceeded (Kota Aşımı) Hatası</h4>
                <p><strong>Nedeni:</strong> Ücretsiz test katmanında dakikada 15 istekten veya günde 1500 istekten fazla sorgu göndermiş olabilirsiniz.<br><strong>Çözümü:</strong> İsteklerinizi biraz yavaşlatın, 1 dakika kadar bekleyip tekrar deneyin veya farklı bir Google hesabıyla yeni bir API anahtarı alın.</p>
              </div>
            </div>
            <div class="safety-item glass">
              <div class="safety-icon text-warning"><i class="fa-solid fa-key"></i></div>
              <div>
                <h4>API Key Authorization (Yetkilendirme) Hatası</h4>
                <p><strong>Nedeni:</strong> Koda yapıştırdığınız API anahtarında eksik karakter olabilir ya da anahtarın süresi dolmuştur.<br><strong>Çözümü:</strong> AI Studio panelinden "Get API Key" diyerek yeni bir anahtar üretin ve kodunuzdaki çevre değişkenini güncelleyin.</p>
              </div>
            </div>
          </div>
        `,
        prompts: []
      },
      {
        title: "AI Yanlış Cevap Veriyor Durumu",
        content: `
          <p>Yapay zekanın yanlış cevap verdiğini veya konuyu saptırdığını fark ederseniz şu adımları izleyin:</p>
          <ul>
            <li><strong>Temperature Ayarı:</strong> Sıcaklık ayarını sıfıra (0.0) çekin. Bu, modelin yaratıcı olmasını engelleyip sadece gerçeklere bağlı kalmasını sağlar.</li>
            <li><strong>Google Search Grounding:</strong> Arama grounding özelliğini açarak modelin internetten doğrulama yapmasını sağlayın.</li>
            <li><strong>Few-Shot Prompting:</strong> Yapay zekaya sadece ne yapacağını söylemeyin, ona istediğiniz formatta 1 adet örnek soru ve cevap gösterin.</li>
          </ul>
        `,
        prompts: []
      },
      {
        title: "Token Limiti Aşıldığında Ne Yapılır?",
        content: `
          <p>Çok uzun sohbetlerde veya sisteme çok sayıda büyük dosya yüklediğinizde token limitine ulaşabilirsiniz. Çözüm yolları:</p>
          <ul>
            <li><strong>Clear Chat:</strong> Sohbet geçmişindeki gereksiz konuşmaları silmek için sağ üstteki çöp kutusu veya "Clear History" butonunu kullanın.</li>
            <li><strong>Büyük Belgeleri Bölün:</strong> 500 sayfalık bir kitabı tek seferde yüklemek yerine sadece çalışacağınız 20-30 sayfalık bölümleri çıkarıp yükleyin.</li>
          </ul>
        `,
        prompts: []
      },
      {
        title: "Hangi Model Ne Zaman Seçilir — Karar Ağacı",
        content: `
          <table class="handbook-table">
            <thead>
              <tr>
                <th>Model Adı</th>
                <th>En Güçlü Yanı</th>
                <th>Ne Zaman Seçilmeli?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gemini 1.5 Flash</strong></td>
                <td>Hız, düşük maliyet, günlük rutinler.</td>
                <td>Soru bankası hazırlama, basit ders planları, chatbot uygulamaları, hızlı okuma tahlili.</td>
              </tr>
              <tr>
                <td><strong>Gemini 1.5 Pro</strong></td>
                <td>Derin akıl yürütme, karmaşık kodlama, devasa bağlam.</td>
                <td>Çok uzun kitap veya kod analizi, akademik makale inceleme, ileri düzey mantık soruları hazırlama.</td>
              </tr>
            </tbody>
          </table>
        `,
        prompts: []
      },
      {
        title: "Sık Sorulan Sorular (SSS)",
        content: `
          <div class="faq-container">
            <div class="faq-item">
              <h5>❓ Google AI Studio tamamen ücretsiz mi?</h5>
              <p>Evet, eğitimciler ve geliştiriciler için sunulan standart test katmanı (rate limitler dahilinde) tamamen ücretsizdir.</p>
            </div>
            <div class="faq-item">
              <h5>❓ AI Studio'da paylaştığımız verileri Google görüyor mu?</h5>
              <p>Ücretsiz katmanda paylaşılan veriler modellerin geliştirilmesi amacıyla anonimleştirilerek incelenebilir. Bu nedenle kişisel veya gizli verileri paylaşmamalısınız. Kurumsal Google Workspace hesaplarında ise veri gizliliği korunur.</p>
            </div>
            <div class="faq-item">
              <h5>❓ Öğrencilerim doğrudan AI Studio'yu kullanabilir mi?</h5>
              <p>AI Studio geliştirici odaklı bir platformdur. Öğrencilerinizin doğrudan kullanımı yerine, sizin tasarladığınız "Build Apps" linklerini veya Vercel'e yüklediğiniz arayüzleri kullanmaları pedagojik açıdan çok daha güvenlidir.</p>
            </div>
          </div>
        `,
        prompts: []
      }
    ]
  }
];

// Share globally via window context
if (typeof window !== "undefined") {
  window.handbookData = handbookData;
}
