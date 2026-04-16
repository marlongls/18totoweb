import Head from 'next/head';
import { useState } from 'react';

const D = {
  brand: '18TOTO',
  domain: '18totowap.com',
  logo: 'https://i.postimg.cc/mr6Ch8gB/18-png.png',
  linkLogin: 'https://loginwap.gelapsekali.com/18',
  linkDaftar: 'https://daftarwap.gelapsekali.com/18',
  amphtml: '18totowap.com',
};

export default function Home() {
  const [faq, setFaq] = useState(null);
  return (
    <>
      <Head>
        <title>18TOTO | Link Login Terbaru: Gerbang Utama Menuju Dunia Epik</title>
        <meta name="description" content="18TOTO hadir di 18totowap.com sebagai link login terbaru - gerbang utama menuju dunia epik. Didukung infrastruktur server premium dengan uptime 99,9%, proteksi data canggih, dan navigasi intuitif yang memudahkan setiap pengguna. Mulai petualangan digital Anda hari ini." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={D.logo} />
        <link rel="canonical" href={"https://" + D.domain + "/"} />
        <link rel="amphtml" href={"https://" + D.domain + "/amp/"} />
        <meta property="og:title" content="18TOTO | Link Login Terbaru: Gerbang Utama Menuju Dunia Epik" />
        <meta property="og:description" content="18TOTO hadir di 18totowap.com sebagai link login terbaru - gerbang utama menuju dunia epik. Didukung infrastruktur server premium dengan uptime 99,9%, proteksi data canggih, dan navigasi intuitif yang memudahkan setiap pengguna. Mulai petualangan digital Anda hari ini." />
        <meta property="og:image" content={D.logo} />
        <meta property="og:url" content={"https://" + D.domain} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="18TOTO | Link Login Terbaru: Gerbang Utama Menuju Dunia Epik" />
        <meta name="twitter:description" content="18TOTO hadir di 18totowap.com sebagai link login terbaru - gerbang utama menuju dunia epik. Didukung infrastruktur server premium dengan uptime 99,9%, proteksi data canggih, dan navigasi intuitif yang memudahkan setiap pengguna. Mulai petualangan digital Anda hari ini." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        *{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
        body{font-family:'Kanit',sans-serif;background:#fefce8;color:#451a03;line-height:1.7;overflow-x:hidden}
        a{color:inherit;text-decoration:none}img{max-width:100%;display:block}
        .w{max-width:1060px;margin:0 auto;padding:0 20px}

        header{position:sticky;top:0;z-index:50;background:#fefce8ee;backdrop-filter:blur(16px);border-bottom:1px solid rgba(180,83,9,.08)}
        .nv{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
        .lo{display:flex;align-items:center;gap:8px;font-weight:800;font-size:19px;color:#b45309}
        .lo img{width:32px;height:32px;border-radius:8px}
        .nb{display:flex;gap:8px}
        .b{display:inline-flex;align-items:center;gap:6px;padding:10px 20px;border-radius:12px;font-weight:700;font-size:13px;transition:.25s;border:none;cursor:pointer;font-family:inherit}
        .bp{background:linear-gradient(90deg,#b45309,#f59e0b);color:#fff;box-shadow:0 4px 16px #b4530935}
        .bp:hover{transform:translateY(-2px);box-shadow:0 6px 24px #b4530950}
        .bo{border:1.5px solid rgba(180,83,9,.08);color:#451a03;background:transparent}
        .bo:hover{border-color:#b45309;color:#b45309}
        .bl{padding:14px 28px;font-size:15px}

        .hero{padding:70px 0 50px;text-align:center;background:#fef9c3}
        .hero .badge{display:inline-block;padding:5px 14px;border:1px solid #b4530920;border-radius:99px;font-size:11px;color:#b45309;background:#b4530910;margin-bottom:16px;font-weight:700}
        .hero h1{font-size:clamp(26px,4.5vw,46px);font-weight:800;line-height:1.12;margin-bottom:14px;color:#451a03}
        .hero .ld{color:#854d0e;font-size:15px;max-width:580px;margin:0 auto 24px}
        .hero .hb{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:20px}
        .hero .tr{display:flex;justify-content:center;gap:20px;font-size:12px;color:#854d0e}
        .hero .tr .ck{color:#b45309;font-weight:700}

        .sec{padding:50px 0}
        .sec-a{background:#fef9c3}
        .sh{margin-bottom:32px}
        .sh.c{text-align:center}
        .sh .tg{display:inline-block;padding:4px 12px;border:1px solid rgba(180,83,9,.08);border-radius:10px;font-size:10px;color:#b45309;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px}
        .sh h2{font-size:clamp(20px,3vw,32px);font-weight:800;margin-bottom:6px}
        .sh p{color:#854d0e;font-size:13px;max-width:540px}
        .sh.c p{margin:0 auto}

        .fg{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
        .fc{background:#fff;border:1px solid rgba(180,83,9,.08);border-radius:14px;padding:22px;display:flex;gap:14px;transition:.3s}
        .fc:hover{border-color:#b45309;transform:translateY(-3px);box-shadow:0 10px 30px #b4530910}
        .fc .ic{width:44px;height:44px;border-radius:10px;background:#b4530912;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
        .fc h3{font-size:14px;font-weight:700;margin-bottom:3px}
        .fc p{color:#854d0e;font-size:12px;margin:0}

        .body-text{max-width:760px}
        .body-text.c{margin:0 auto}
        .body-text p{color:#854d0e;font-size:14px;line-height:1.85;margin-bottom:16px;text-align:justify}

        .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .step{background:#fff;border:1px solid rgba(180,83,9,.08);border-radius:14px;padding:20px;text-align:center;transition:.3s}
        .step:hover{border-color:#b45309}
        .step .nm{width:40px;height:40px;border-radius:50%;background:linear-gradient(90deg,#b45309,#f59e0b);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;margin:0 auto 10px}
        .step h3{font-size:13px;font-weight:700;margin-bottom:3px}
        .step p{color:#854d0e;font-size:11px;margin:0}

        .cta{background:linear-gradient(90deg,#b45309,#f59e0b);border-radius:16px;padding:44px 24px;text-align:center;color:#fff}
        .cta h2{font-size:clamp(18px,3vw,28px);font-weight:800;margin-bottom:8px}
        .cta p{opacity:.9;margin-bottom:18px;font-size:14px}
        .cta .b{background:#fff;color:#b45309;font-weight:700}

        .faq-list{max-width:700px;margin:0 auto}
        .fi{background:#fff;border:1px solid rgba(180,83,9,.08);border-radius:12px;padding:16px 20px;margin-bottom:8px;cursor:pointer;transition:.2s}
        .fi:hover{border-color:#b45309}
        .fq{font-weight:600;display:flex;justify-content:space-between;align-items:center;font-size:14px}
        .fq span{color:#b45309;font-size:18px}
        .fa{margin-top:10px;color:#854d0e;font-size:13px;line-height:1.7}

        footer{border-top:1px solid rgba(180,83,9,.08);padding:24px 0;text-align:center;color:#854d0e;font-size:11px}
        footer .fl{display:flex;justify-content:center;gap:14px;margin-bottom:6px;flex-wrap:wrap}
        footer a:hover{color:#b45309}

        
        .bnr{padding:20px 0}
        .bnr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .bnr-card{border-radius:12px;overflow:hidden;border:1px solid var(--border,rgba(255,255,255,.1));transition:.3s}
        .bnr-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.15)}
        .bnr-card img{width:100%;height:auto;display:block}
        @media(max-width:768px){.bnr-grid{grid-template-columns:1fr}}
        @media(max-width:768px){.fg,.steps{grid-template-columns:1fr}}
      `}</style>

      <header><div className="w nv">
        <a href="#" className="lo"><img src={D.logo} alt={D.brand} />{D.brand}</a>
        <div className="nb"><a href={D.linkLogin} className="b bo">Login</a><a href={D.linkDaftar} className="b bp">Daftar</a></div>
      </div></header>

      <main>
        <section className="hero"><div className="w">
          <div className="badge">18TOTO &mdash; Platform Resmi 2026</div>
          <h1>18TOTO | Link Login Terbaru: Gerbang Utama Menuju Dunia Epik</h1>
          <p className="ld">18TOTO hadir di 18totowap.com sebagai link login terbaru - gerbang utama menuju dunia epik. Didukung infrastruktur server premium dengan uptime 99,9%, proteksi data canggih, dan navigasi intuitif yang memudahkan setiap pengguna. Mulai petualangan digital Anda hari ini.</p>
          <div className="hb">
            <a href={D.linkDaftar} className="b bp bl">Akses Wap Sekarang &rarr;</a>
            <a href={D.linkLogin} className="b bo bl">Login Akun</a>
          </div>
          <div className="tr">
            <span><span className="ck">&#10003;</span> SSL 256-bit</span>
            <span><span className="ck">&#10003;</span> Uptime 99.9%</span>
            <span><span className="ck">&#10003;</span> Support 24/7</span>
          </div>
        </div></section>

        
        <section className="bnr"><div className="w">
          <div className="bnr-grid">
            <a href={D.linkDaftar} className="bnr-card"><img src="https://picsum.photos/id/21/720/280" alt="Promo 18TOTO 1" loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://picsum.photos/id/22/720/280" alt="Promo 18TOTO 2" loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://picsum.photos/id/23/720/280" alt="Promo 18TOTO 3" loading="lazy" /></a>
          </div>
        </div></section>

        <section className="sec" id="fitur"><div className="w">
          <div className="sh c"><span className="tg">Navigasi Ringan untuk Mobile</span><h2>Navigasi Ringan untuk Mobile</h2><p>Dioptimasi untuk 3G/4G &mdash; fitur unggulan untuk pengalaman terbaik Anda.</p></div>
          <div className="fg">
            <div className="fc"><div className="ic">&#128242;</div><div><h3>Desain Wap Ringan</h3><p>Layout minimalis yang hemat bandwidth dan super cepat.</p></div></div>
            <div className="fc"><div className="ic">&#128274;</div><div><h3>Sesi Terproteksi</h3><p>Token keamanan mencegah pembajakan akun Anda.</p></div></div>
            <div className="fc"><div className="ic">&#127760;</div><div><h3>Jangkauan Luas</h3><p>Berfungsi optimal di berbagai kondisi jaringan.</p></div></div>
            <div className="fc"><div className="ic">&#128276;</div><div><h3>Notifikasi Instan</h3><p>Dapatkan info terbaru langsung di layar Anda.</p></div></div>
          </div>
        </div></section>

        <section className="sec sec-a" id="tentang"><div className="w">
          <div className="sh"><span className="tg">Gerbang Utama Menuju Dunia Epik di 18TOTO: Panduan Lengkap</span><h2>Gerbang Utama Menuju Dunia Epik di 18TOTO: Panduan Lengkap</h2></div>
          <div className="body-text">
            <p>Performa kecepatan 18TOTO secara konsisten mendapat skor tinggi dalam pengujian Core Web Vitals yang menjadi standar industri. Pengalaman pengguna di 18TOTO diperkaya dengan animasi halus dan transisi visual yang membuat setiap interaksi terasa premium. 18totowap.com merupakan alamat resmi 18TOTO yang telah dipercaya oleh ratusan ribu pengguna aktif dari berbagai penjuru Indonesia. Infrastruktur multi-domain 18TOTO dirancang agar pemblokiran pada satu alamat tidak mempengaruhi ketersediaan layanan secara keseluruhan.</p>
            <p>Portal resmi 18TOTO di 18totowap.com hadir dengan misi menghadirkan ekosistem digital yang ramah, responsif, dan selalu tersedia untuk penggunanya. 18TOTO secara proaktif memperbarui sistem aksesnya untuk merespons perubahan kebijakan jaringan dengan kecepatan dan ketepatan. 18TOTO mendukung semua browser mobile populer dan menjamin kompatibilitas lintas platform untuk jangkauan pengguna yang maksimal. Pusat data yang digunakan 18TOTO dilengkapi sistem pendingin presisi dan pasokan listrik cadangan ganda untuk menjamin operasi tanpa henti.</p>
          </div>
        </div></section>

        <section className="sec" id="panduan"><div className="w">
          <div className="sh c"><span className="tg">Cara Bergabung dengan Mudah</span><h2>Cara Bergabung dengan Mudah</h2><p>Ikuti langkah berikut untuk memulai.</p></div>
          <div className="steps">
            <div className="step"><div className="nm">1</div><h3>Dioptimasi untuk 3G/4G</h3><p>Buka halaman resmi 18TOTO melalui link di atas.</p></div>
            <div className="step"><div className="nm">2</div><h3>Hemat Kuota Data</h3><p>Sistem kami menjaga data Anda tetap aman.</p></div>
            <div className="step"><div className="nm">3</div><h3>Registrasi dalam 2 Menit</h3><p>Selesai! Nikmati semua fitur yang tersedia.</p></div>
          </div>
        </div></section>

        <section className="sec sec-a"><div className="w">
          <div className="cta">
            <h2>Bergabung dengan 18TOTO Sekarang!</h2>
            <p>Daftar gratis dan rasakan layanan premium tanpa batas.</p>
            <a href={D.linkDaftar} className="b bl">Akses Wap Sekarang &rarr;</a>
          </div>
        </div></section>

        <section className="sec" id="faq"><div className="w">
          <div className="sh c"><span className="tg">FAQ</span><h2>Pertanyaan Umum</h2><p>Temukan jawaban untuk pertanyaan populer.</p></div>
          <div className="faq-list">
            <div className="fi" key={0} onClick={() => setFaq(faq === 0 ? null : 0)}>
              <div className="fq">Apa beda versi wap dan desktop?<span>{faq === 0 ? '\u2212' : '+'}</span></div>
              {faq === 0 && <div className="fa">Versi wap dioptimasi untuk perangkat mobile dengan ukuran lebih ringan namun fitur tetap lengkap.</div>}
            </div>
            <div className="fi" key={1} onClick={() => setFaq(faq === 1 ? null : 1)}>
              <div className="fq">Apakah akun sama di semua versi?<span>{faq === 1 ? '\u2212' : '+'}</span></div>
              {faq === 1 && <div className="fa">Ya, satu akun bisa digunakan di versi wap, desktop, maupun link alternatif.</div>}
            </div>
            <div className="fi" key={2} onClick={() => setFaq(faq === 2 ? null : 2)}>
              <div className="fq">Bagaimana jika koneksi lambat?<span>{faq === 2 ? '\u2212' : '+'}</span></div>
              {faq === 2 && <div className="fa">Versi wap dirancang khusus agar tetap cepat meskipun jaringan terbatas.</div>}
            </div>
            <div className="fi" key={3} onClick={() => setFaq(faq === 3 ? null : 3)}>
              <div className="fq">Perlu install aplikasi?<span>{faq === 3 ? '\u2212' : '+'}</span></div>
              {faq === 3 && <div className="fa">Tidak, cukup buka melalui browser ponsel tanpa unduhan apapun.</div>}
            </div>
          </div>
        </div></section>
      </main>

      <footer><div className="w">
        <div className="fl">
          <a href="#fitur">Fitur</a><a href="#tentang">Tentang</a><a href="#panduan">Panduan</a><a href="#faq">FAQ</a>
          <a href={D.linkLogin}>Login</a><a href={D.linkDaftar}>Daftar</a>
        </div>
        <p>&copy; 2026 {D.brand}. Situs resmi &mdash; {D.domain}</p>
      </div></footer>
    </>
  );
}
