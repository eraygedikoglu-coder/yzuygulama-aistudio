# Eğitimciler İçin Yapay Zeka ve Google AI Studio Kaynak Dökümanı

Bu döküman, öğretmenlerin yapay zekanın temellerini anlamaları, tarihsel gelişimini incelemeleri, günümüzdeki sınırlarını keşfetmeleri ve sınıflarında bu teknolojiyi güvenle kullanabilmeleri için hazırlanmış kapsamlı bir rehberdir.

---

## 1. Yapay Zeka (AI) Nedir?
Yapay zeka, bir bilgisayarın veya kontrolündeki bir robotun, genellikle insan zekası gerektiren görevleri (öğrenme, akıl yürütme, problem çözme, algılama ve dil anlama gibi) yerine getirme yeteneğidir.

### Basit Bir Analoji: İnsan Beyni vs. Yapay Sinir Ağları
* **İnsan Beyni:** Bilgileri nöronlar (sinir hücreleri) ve bunlar arasındaki sinaps bağları aracılığıyla iletir. Deneyimledikçe bu bağlar güçlenir ve öğrenme gerçekleşir.
* **Yapay Zeka (Yapay Sinir Ağları):** Beyinden ilham almıştır. Milyarlarca dijital düğümün (yapay nöronlar) birbirine ağırlıklarla (bağ güçleri) bağlanmasıyla oluşur. Yapay zeka, milyarlarca veri hücresini inceleyerek bu ağırlıkları ayarlar ve kalıpları (örüntüleri) öğrenir.

---

## 2. Yapay Zekanın Tarihsel Yolculuğu

Yapay zeka bugünkü seviyesine ani bir sıçramayla değil, inişli çıkışlı bir süreçle gelmiştir:

1. **1950 - Alan Turing ve Bilgisayarın Düşünmesi:** Alan Turing, "Makineler düşünebilir mi?" sorusunu sorarak ünlü **Turing Testi**'ni ortaya attı.
2. **1956 - Dartmouth Konferansı:** "Yapay Zeka" (Artificial Intelligence) terimi ilk kez resmi olarak John McCarthy tarafından bu akademik konferansta kullanıldı.
3. **1970 - 1990 - Yapay Zeka Kışları (AI Winters):** Aşırı beklentilerin karşılanamaması ve işlemci gücünün yetersizliği nedeniyle araştırmalara verilen fonlar kesildi ve durgunluk dönemleri yaşandı.
4. **1997 - Deep Blue vs. Kasparov:** IBM'in geliştirdiği Deep Blue bilgisayarı, dünya satranç şampiyonu Garry Kasparov'u yenerek büyük ses getirdi.
5. **2012 - Derin Öğrenme (Deep Learning) Patlaması:** GPU (ekran kartı) güçlerinin artmasıyla yapay zeka görselleri tanımada insan seviyesine yaklaşmaya başladı.
6. **2017 - Transformer Mimarisi:** Google mühendisleri tarafından yayınlanan *"Attention Is All You Need"* makalesi, bugünkü dil modellerinin (ChatGPT, Gemini vb.) temelini atan **Transformer** yapısını dünyaya tanıttı.
7. **2020'ler - Üretken Yapay Zeka ve LLM Çağı:** Metin, görsel, kod ve video üretebilen çoklu modlu (multimodal) büyük dil modelleri günlük hayatın bir parçası haline geldi.

---

## 3. Günümüzde Yapay Zeka Hangi Aşamada? (Çılgın Örnekler)

Yapay zeka artık sadece sohbet eden basit bir robot değildir; bilim, sanat ve endüstride çığır açan seviyededir:

* **AlphaFold (Biyolojide Devrim):** Google DeepMind tarafından geliştirilen AlphaFold, bilim dünyasının 50 yıldır çözemediği **"protein katlanması"** problemini çözdü. Dünyadaki neredeyse tüm proteinlerin yapısını haritalandırarak ilaç geliştirme ve biyoloji araştırmalarını yüzyıllarca hızlandırdı.
* **Sora ve Veo (Kurgusal Gerçeklik):** Sadece yazılı komutlardan (text-to-video) sinematik kalitede, fizik kurallarına uygun 1 dakikalık gerçekçi videolar üretebilen video modelleri geliştirildi.
* **Gemini 1.5 Pro (Devasa Bağlam Penceresi):** 2 milyon token'lık (yaklaşık 1.5 milyon kelime) bir bağlam belleğine sahiptir. Bu, yapay zekaya 1 saatlik bir videoyu, 30.000 satırlık bir kodu veya kütüphane dolusu kitabı tek seferde yükleyip saniyeler içinde analiz ettirebileceğiniz anlamına gelir.
* **Akıl Yürüten Modeller (o1 / o3):** Soruları yanıtlamadan önce "düşünme zinciri" (chain-of-thought) kurarak matematik olimpiyatlarında derece yapabilen, karmaşık kodlama projelerini sıfırdan yazıp test edebilen yeni nesil muhakeme modelleri hayatımıza girdi.

---

## 4. Yapay Zeka Eğitimde Neden Önemli?

1. **Bireyselleştirilmiş Öğrenme:** Her öğrencinin öğrenme hızı farklıdır. Yapay zeka, bir konuyu anlamayan öğrenciye seviyesine uygun analojilerle tekrar açıklayabilir.
2. **Öğretmen Asistanlığı:** Ders planı hazırlama, sınav sorusu tasarlama, puanlama anahtarı (rubrik) oluşturma gibi zaman alıcı bürokratik işleri dakikalar içine indirerek öğretmenin sınıfa ve öğrencilere daha fazla vakit ayırmasını sağlar.
3. **Geleceğe Hazırlık:** Gelecekte öğrencilerimizin yapay zeka ile iş birliği içinde çalışması gerekecektir. Sınıfta yapay zekayı etik ve üretken kullanmayı öğrenen öğrenciler iş hayatına önde başlayacaktır.

---

## 5. Google AI Studio Nedir ve Eğitimde Nasıl Kullanılır?
Google AI Studio, Gemini modellerini sınıflarımıza özel hale getirebileceğimiz ücretsiz bir "atölye" alanıdır.

* **Sistem Yönergeleri (System Instructions):** Yapay zekaya kalıcı roller (Örn: Sokratik Matematik Koçu, Hikaye Anlatıcısı) verirsiniz.
* **Sıcaklık (Temperature):** Yaratıcılığı ayarlarsınız. 0.0 gerçekçi bilgiler, 1.0+ yaratıcı hikaye üretimleri için uygundur.
* **Google Grounding (Arama):** AI yanıtlarını güncel web aramalarıyla doğrulayarak halüsinasyon riskini en aza indirir.

---

## 6. Sorumlu Yapay Zeka ve Etik Sınırlar

* **Öğrenci Gizliliği:** Asla öğrencilerin isimlerini, karnelerini, rehberlik notlarını sisteme yüklemeyin. Verileri her zaman anonimleştirin.
* **Eğitimcinin Rolü:** Yapay zeka öğretmenlerin yerini alamaz. AI sadece bir yardımcıdır; pedagojik denetim, empati ve son kontrol her zaman öğretmene aittir.

---

## 7. Kapsamlı Eğitim Modülleri ve Hazır Şablonlar

Bu bölüm, öğretmen eğitiminde ele alınan 10 ana modülün detaylı açıklamalarını ve doğrudan kopyalanabilir prompt şablonlarını içermektedir.

### Modül 1: Prompt Mühendisliği
* **System Instruction ile Ders Asistanı:** AI Studio'da "System Instruction" alanına yazılan yönergeler sohbet boyunca kalıcıdır. Yönerge hazırlarken **Rol, Görev, Sınırlar ve Üslup (R-G-S-Ü)** kurallarına uyulmalıdır.
  * *Şablon İstem (Sokratik Matematik Koçu):* "Sen ortaokul seviyesinde çalışan bir Matematik öğretmenisin. Görevin, öğrencilere sorularının yanıtını doğrudan vermek değil, yönlendirici sorularla (Sokratik yöntemle) cevabı kendilerinin bulmasını sağlamaktır."
* **Soru Bankası Üretme:** LGS veya okul içi sınavlar için MEB kazanımlarına tam uyumlu sorular hazırlatılabilir. Doğru ve müfredat içi sonuçlar için **Sıcaklık (Temperature) 0.0 veya 0.2** seviyesine indirilmelidir.
  * *Şablon İstem (PISA Tarzı Fen Sorusu):* "8. sınıf Fen Bilimleri 'Maddenin Değişimi' kazanımına uygun, günlük yaşam senaryosuna dayanan 1 adet çoktan seçmeli beceri temelli soru ve detaylı çözüm açıklaması hazırlayacaksın."
* **Kazanım Bazlı Materyal:** Ders kazanım kodlarını girerek okuma metinleri, zihin haritaları ve analojiler üretebilirsiniz.
* **Rubrik Değerlendirme:** Öğrenci performanslarını objektif değerlendirmek için analitik rubrik şablonları hazırlanabilir.
* **Farklılaştırılmış Öğretim:** Aynı kazanım, hafif öğrenme güçlüğü çeken (BEP) öğrenciler ile üstün potansiyelli öğrenciler için farklı zorluk seviyelerine uyarlanabilir.

### Modül 2: Multimodal Kullanım
* **Görsel Analizi:** Gemini'a tarihi haritalar, grafikler, deney düzenekleri veya sanat eserleri yüklenerek detaylı analiz raporları veya sokratik tartışma soruları alınabilir.
* **PDF Analizi:** Devasa 2 Milyon Token bağlam penceresi sayesinde, MEB müfredat kılavuzları veya 200 sayfalık ders kitapları tek seferde sisteme yüklenip taranabilir.
* **Ses Analizi:** Sınıf içi ses kayıtları, yabancı dil dinleme sınavları veya ders anlatımları yüklenerek transkripsiyon (deşifre) ve pedagojik geri bildirim raporları oluşturulabilir.

### Modül 3: Build Mode — Chatbot Uygulamaları
* **Build Apps Arayüzü:** Kod yazmadan sadece yönerge formunu doldurarak web üzerinde çalışan ve öğrencilerle doğrudan paylaşılabilen özel eğitim chatbot'ları (konu tekrar botları, kelime koçları, yazma asistanları, deney simülatörleri veya tarihsel karakter canlandırmaları) tasarlanabilir.
  * *Şablon İstem (Marie Curie Rol Yapma):* "Sen Nobel ödüllü kimyager Marie Curie'sin. Yıl 1910. Karşındaki öğrencinin radyasyon, tıp ve bilimsel çalışmalarına dair sorularını o dönemin bilgisiyle ve bilimsel coşkunla cevapla."

### Modül 4: AI Studio ile GitHub ve Vercel Entegrasyonu
* **GitHub Repo Bağlantısı:** AI Studio'da tasarlanan uygulamanın kodları "Get Code" ile alınıp GitHub reposuna aktarılır.
* **Güvenlik (API Key):** API anahtarlarının çalınmasını önlemek için kodun içine doğrudan yazılmamalı, `.env` dosyasında saklanmalıdır. API anahtarlarına Google Cloud panelinden IP veya alan adı kısıtlaması getirilmelidir.
* **Vercel Deployment:** GitHub reposu Vercel'e bağlanarak çevre değişkenleri (environment variables) alanına `GEMINI_API_KEY` girilir ve tek tıkla canlı yayın linki (URL) alınır.

### Modül 5: Build Mode — Gelişmiş Uygulamalar
* **İnteraktif Quiz:** Öğrencilere anlık puanlama, ipucu ve konu anlatımı sunan web tabanlı test uygulamaları.
* **Sesli Telaffuz Asistanı:** Gemini'ın ses yeteneklerini kullanarak yabancı dil sınıflarında öğrencilerin okunuşlarını dinleyip düzelten telaffuz koçları.
* **Hikaye Macera Oyunları:** Öğrencilerin kararlarına göre ilerleyen "Kendi Maceranı Kendin Seç" kurguları.

### Modül 6: Grounding ile Güncel Bilgi
* **Google Search Grounding:** AI Studio sağ panelinde yer alan "Google Search" aracı aktifleştirildiğinde, Gemini yanıt vermeden önce web araması yaparak kaynak linklerini yanıtın altına ekler. Bu sayede güncel bilimsel gelişmeler veya haberler hatasız analiz edilir.
* **Kaynak Doğrulama Etkinliği:** Öğrencilerin yapay zekanın verdiği yanıtları arama motorlarında araştırıp doğrulayarak bilgi okuryazarlığı kazandığı sınıf içi çalışmalar.

### Modül 7: Görsel Üretim — Imagen
* **Imagen 3 ile Eğitsel Görsel:** Ders slaytları ve çalışma kağıtları için özgün, telifsiz görseller üretilebilir.
  * *Örnek İstem:* "A highly detailed educational flat vector illustration of a water cycle diagram, showing evaporation, condensation, and precipitation. Clean white background, no text labels."
* **Poster ve İnfografik:** Sınıf kuralları veya formülleri içeren estetik panolar tasarlanabilir.

### Modül 8: Güvenlik ve Etik
* **KVKK Uyumluğu:** Yapay zekaya asla öğrencilerin gerçek isimleri, karneleri, yüzlerinin göründüğü fotoğraflar veya ses kayıtları yüklenmemelidir. Veriler her zaman anonimleştirilmelidir.
* **Akademik Dürüstlük:** Öğrencilerin ödevlerinde yapay zekayı kopyala-yapıştır aracı olarak kullanmak yerine bir araştırma ortağı olarak kullanmaları ve AI çıktısını kaynak göstermeleri öğretilmelidir.

### Modül 9: Branşlara Özel Hazır Prompt Kütüphanesi
* **Türkçe:** "Sınıf: 6. Sınıf. Konu: Sevgi ve Dostluk. Bu seviyeye uygun 200 kelimelik bir okuma metni ve 3 adet okuma anlama sorusu yaz."
* **Matematik:** "8. sınıf LGS sınav formatında, üslü sayılar kazanımına uygun, günlük hayattan kargo paketleme senaryolu 1 adet çoktan seçmeli yeni nesil soru ve çözümü."
* **Fen Bilimleri:** "Isı ve sıcaklık arasındaki farkları 6. sınıf öğrencilerine somutlaştıracak 3 soruluk bir doğru-yanlış etkinliği ve pedagojik açıklaması."
* **Sosyal Bilgiler:** "1920 yılında Ankara'da Büyük Millet Meclisi'nin açılışına tanıklık eden genç bir gazetecinin ağzından kurgusal bir gazete haberi yaz."
* **İngilizce:** "Create a CEFR A2 level short reading passage about visiting Cappadocia. Include a vocabulary list with English definitions of 5 target words."
* **Bilişim Teknolojileri:** "Scratch programında 'Eğer İse' ve 'Değişkenler' bloklarını anlatan 3 adet kısa algoritma senaryosu oluştur."

### Modül 10: Sorun Giderme ve SSS
* **Quota Exceeded Hatası:** Dakikadaki veya günlük istek limiti aşıldığında oluşur. 1 dakika bekleyip istek sıklığı azaltılmalıdır.
* **Yanlış Cevap / Halüsinasyon:** Sıcaklık (Temperature) 0.0'a indirilmeli, Google Search grounding açılmalı veya promptta "Few-shot" (örnekli) yönlendirme yapılmalıdır.
* **Token Sınırı:** Sohbet çok uzadığında "Clear Chat" ile geçmiş silinmeli, büyük PDF dökümanları bölünerek parça parça yüklenmelidir.
* **Model Seçimi:** Hızlı ve günlük işler için **Gemini 1.5 Flash**, karmaşık kodlama ve derin analizler için **Gemini 1.5 Pro** seçilmelidir.

---

## 8. Sıkça Sorulan Sorular (SSS)

1. **Google AI Studio ücretsiz mi?**
   * Evet, eğitimciler ve geliştiriciler için sunulan standart test katmanı tamamen ücretsizdir.
2. **Yapay zekaya yüklediğimiz veriler güvenli mi?**
   * Ücretsiz katmanda paylaşılan veriler modellerin eğitimi için kullanılabilir. Bu nedenle kişisel veya gizli verileri yüklememelisiniz. Kurumsal *Google Workspace for Education* hesaplarında ise veriler gizli tutulur ve eğitme dahil edilmez.
3. **Öğrenciler doğrudan AI Studio'yu kullanabilir mi?**
   * AI Studio geliştirici odaklı bir platformdur. Öğrencilerin doğrudan girmesi yerine öğretmenlerin oluşturduğu "Build Apps" linkleri veya Vercel domainleri üzerinden arayüzleri kullanmaları çok daha güvenlidir.

---

## 9. Ölçme ve Değerlendirme Etkinliği (Genişletilmiş Quiz)

Öğretmen eğitimlerinde kullanılmak üzere 5 adet kontrol sorusu:

1. **Yapay zeka modellerinin bazen doğru gibi görünen ama tamamen yanlış veya uydurma bilgiler üretmesine ne ad verilir?**
   * *Cevap:* Halüsinasyon (Uydurma)
2. **Google AI Studio'da yapay zekanın tüm sohbet boyunca asla unutmaması gereken öğretmen rolünü tanımladığımız alan hangisidir?**
   * *Cevap:* System Instructions (Sistem Yönergeleri)
3. **Soru hazırlarken yapay zekanın kararlı, net ve gerçekçi yanıtlar vermesi için hangi parametreyi sıfıra yaklaştırmalıyız?**
   * *Cevap:* Temperature (Sıcaklık)
4. **Yapay zeka çıktılarının güncel ve doğru web bilgileriyle desteklenmesini ve altına kaynak linkleri eklenmesini sağlayan AI Studio aracı hangisidir?**
   * *Cevap:* Google Search Grounding
5. **API anahtarımızı güvenceye almak için yayına almadan önce yapmamız gereken güvenlik önlemi nedir?**
   * *Cevap:* API anahtarını koda doğrudan yazmamak, `.env` (Environment Variables) dosyasında saklamak ve API anahtarına IP/Domain kısıtlaması getirmek.

---

## Kaynakça (References)

1. **Google AI for Developers:** Official documentation on Gemini models and API workflows. [https://ai.google.dev](https://ai.google.dev)
2. **UNESCO (2021):** AI and Education: Guidance for Policy-makers. United Nations Educational, Scientific and Cultural Organization.
3. **MIT RAISE:** Responsible AI for Social Empowerment and Education training guides.
4. **Milli Eğitim Bakanlığı (MEB):** Fatih Projesi ve Eğitimde Yapay Zeka Uygulamaları Çerçeve Raporları.
5. **Google DeepMind (2020):** "Highly accurate protein structure prediction with AlphaFold" Nature Journal Publication.
6. **Grow with Google:** Generative AI for Educators Professional Development Course.
