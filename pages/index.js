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

const features = [
  { icon: '&#9889;', title: 'Akses Super Cepat', desc: 'Server berperforma tinggi memastikan loading dalam hitungan detik.' },
  { icon: '&#128274;', title: 'Keamanan Berlapis', desc: 'Enkripsi SSL 256-bit dan proteksi DDoS tingkat enterprise.' },
  { icon: '&#128242;', title: 'Mobile Responsive', desc: 'Tampilan otomatis menyesuaikan di semua perangkat.' },
  { icon: '&#128279;', title: 'Link Alternatif', desc: 'Banyak link alternatif resmi yang selalu diperbarui.' },
  { icon: '&#127919;', title: 'Tampilan Modern', desc: 'Desain antarmuka clean dan intuitif untuk kemudahan navigasi.' },
  { icon: '&#128172;', title: 'Layanan 24 Jam', desc: 'Tim customer service siap membantu kapan saja.' },
];

const faqs = [
  { q: 'Bagaimana cara login 18TOTO?', a: 'Kunjungi halaman login resmi, masukkan username dan password, lalu klik Login.' },
  { q: 'Apakah 18TOTO aman?', a: 'Ya, kami menggunakan enkripsi SSL 256-bit dan proteksi keamanan berlapis tingkat enterprise.' },
  { q: 'Bisa akses dari smartphone?', a: 'Tentu, 18TOTO dioptimalkan untuk semua perangkat mobile dengan tampilan responsif.' },
  { q: 'Berapa lama proses daftar?', a: 'Proses pendaftaran kurang dari 2 menit, sangat cepat dan mudah.' },
  { q: 'Ada link alternatif?', a: 'Ya, tersedia beberapa link alternatif resmi yang selalu aktif dan diperbarui.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>18TOTO | Link Login Terbaru: Gerbang Utama Menuju Dunia Epik</title>
        <meta name="description" content="18TOTO hadir sebagai link login terbaru - gerbang utama menuju dunia epik. Didukung infrastruktur server premium dengan uptime 99,9%, proteksi data canggih, dan navigasi intuitif." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={D.logo} />
        <link rel="canonical" href={"https://" + D.domain + "/"} />
        <link rel="amphtml" href={"https://" + D.domain + "/amp/"} />
        <meta property="og:title" content="18TOTO | Link Login Terbaru: Gerbang Utama Menuju Dunia Epik" />
        <meta property="og:description" content="18TOTO hadir sebagai link login terbaru - gerbang utama menuju dunia epik. Didukung infrastruktur server premium dengan uptime 99,9%, proteksi data canggih, dan navigasi intuitif." />
        <meta property="og:image" content={D.logo} />
        <meta property="og:url" content={"https://" + D.domain} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="18TOTO | Link Login Terbaru: Gerbang Utama Menuju Dunia Epik" />
        <meta name="twitter:description" content="18TOTO hadir sebagai link login terbaru - gerbang utama menuju dunia epik. Didukung infrastruktur server premium dengan uptime 99,9%, proteksi data canggih, dan navigasi intuitif." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        *{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
        body{font-family:'Inter',sans-serif;background:linear-gradient(180deg,#dce8fc 0%,#e4edfa 40%,#eef4fb 100%);color:#191919;line-height:1.6;overflow-x:hidden}
        a{color:inherit;text-decoration:none}img{max-width:100%;display:block}
        .W{max-width:1240px;margin:0 auto;padding:0 20px}

        /* Top Bar */
        .topbar{background:#333;color:#fff;font-size:12px;padding:6px 0}
        .topbar-inner{display:flex;justify-content:space-between;align-items:center}
        .topbar a{color:#ccc;transition:.2s}
        .topbar a:hover{color:#fff}

        /* Header */
        header{background:#e4edfa;border-bottom:1px solid #cdd9ef;position:sticky;top:0;z-index:50}
        .hd{display:flex;align-items:center;justify-content:space-between;padding:12px 0;gap:16px}
        .logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:22px;color:#0654ba;flex-shrink:0}
        .logo img{width:38px;height:38px;border-radius:50%;border:2px solid #0654ba}
        .search-bar{flex:1;max-width:560px;display:flex;border:2px solid #0654ba;border-radius:24px;overflow:hidden}
        .search-bar input{flex:1;border:none;padding:10px 16px;font-size:14px;outline:none;font-family:inherit;background:#f0f5ff}
        .search-bar button{background:#0654ba;color:#fff;border:none;padding:0 20px;font-weight:700;cursor:pointer;font-family:inherit;font-size:14px}
        .search-bar button:hover{background:#0446a0}
        .hd-btns{display:flex;gap:8px;flex-shrink:0}
        .btn{display:inline-flex;align-items:center;gap:6px;padding:10px 22px;border-radius:24px;font-weight:600;font-size:13px;transition:.2s;border:none;cursor:pointer;font-family:inherit}
        .btn-p{background:#0654ba;color:#fff}
        .btn-p:hover{background:#0446a0}
        .btn-o{border:1.5px solid #0654ba;color:#0654ba;background:#e8f0fe}
        .btn-o:hover{background:#dce8fc}
        .btn-lg{padding:12px 28px;font-size:15px;border-radius:28px}

        /* Category Nav */
        .catnav{background:linear-gradient(90deg,#f0f5ff,#e8f0fe);border-bottom:1px solid #cdd9ef;padding:0}
        .catnav-inner{display:flex;gap:0;overflow-x:auto}
        .catnav a{padding:10px 18px;font-size:13px;color:#555;font-weight:500;white-space:nowrap;border-bottom:2px solid transparent;transition:.2s}
        .catnav a:hover,.catnav a.act{color:#0654ba;border-bottom-color:#0654ba}

        /* Hero Banner */
        .hero-banner{background:linear-gradient(135deg,#0654ba 0%,#1a73e8 50%,#4a90d9 100%);padding:48px 0;position:relative;overflow:hidden}
        .hero-banner::after{content:'';position:absolute;right:-80px;top:-80px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.06)}
        .hero-banner::before{content:'';position:absolute;left:-40px;bottom:-60px;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,.04)}
        .hero-flex{display:flex;align-items:center;gap:40px;position:relative;z-index:1}
        .hero-text{flex:1;color:#fff}
        .hero-text .tag{display:inline-block;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);padding:4px 14px;border-radius:20px;font-size:11px;font-weight:600;margin-bottom:14px;letter-spacing:.5px}
        .hero-text h1{font-size:clamp(24px,3.5vw,38px);font-weight:800;line-height:1.15;margin-bottom:12px}
        .hero-text p{opacity:.9;font-size:15px;line-height:1.65;margin-bottom:22px;max-width:480px}
        .hero-text .hbtns{display:flex;gap:10px;flex-wrap:wrap}
        .hero-text .btn-w{background:#fff;color:#0654ba;font-weight:700;padding:12px 28px;border-radius:28px;border:none;cursor:pointer;font-family:inherit;font-size:14px;transition:.2s}
        .hero-text .btn-w:hover{background:#f0f6ff;transform:translateY(-1px)}
        .hero-text .btn-g{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.5);padding:12px 28px;border-radius:28px;cursor:pointer;font-family:inherit;font-size:14px;font-weight:600;transition:.2s}
        .hero-text .btn-g:hover{background:rgba(255,255,255,.1);border-color:#fff}
        .hero-img{flex-shrink:0;width:340px}
        .hero-img img{border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.3)}
        .trust-bar{display:flex;gap:24px;margin-top:18px;font-size:12px;opacity:.85}
        .trust-bar span{display:flex;align-items:center;gap:4px}

        /* Stats */
        .stats{background:linear-gradient(90deg,#e8f0fe,#dce8fc);border-bottom:1px solid #cdd9ef;padding:20px 0}
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;text-align:center}
        .stat-item .sv{font-size:24px;font-weight:800;color:#0654ba}
        .stat-item .sl{font-size:11px;color:#777;text-transform:uppercase;letter-spacing:1px}

        /* Section */
        .sec{padding:50px 0}
        .sec-alt{background:linear-gradient(135deg,#f0f5ff,#e8f0fe)}
        .sec-head{text-align:center;margin-bottom:36px}
        .sec-head .label{display:inline-block;background:#e8f0fe;color:#0654ba;padding:4px 14px;border-radius:20px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px}
        .sec-head h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin-bottom:6px;color:#191919}
        .sec-head p{color:#666;font-size:14px;max-width:520px;margin:0 auto}

        /* Article with Image */
        .art-row{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
        .art-img{border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;position:sticky;top:80px}
        .art-img img{width:100%;height:auto;display:block}
        .art-content h3{font-size:20px;font-weight:700;margin-bottom:14px;color:#191919}
        .art-content p{color:#555;font-size:14px;line-height:1.85;margin-bottom:16px;text-align:justify}
        .art-content .art-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
        .art-content .art-tag{background:#e8f0fe;color:#0654ba;padding:4px 12px;border-radius:16px;font-size:11px;font-weight:600}

        /* Feature Grid */
        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .feat-card{background:#e8f0fe;border:1px solid #cdd9ef;border-radius:12px;padding:24px;transition:.25s;cursor:default}
        .feat-card:hover{border-color:#0654ba;box-shadow:0 4px 20px rgba(6,84,186,.08);transform:translateY(-3px)}
        .feat-card .fi-icon{width:44px;height:44px;border-radius:10px;background:#e8f0fe;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:14px}
        .feat-card h3{font-size:15px;font-weight:700;margin-bottom:4px}
        .feat-card p{color:#666;font-size:13px;margin:0;line-height:1.6}

        /* CTA */
        .cta-box{background:linear-gradient(135deg,#0654ba,#1a73e8);border-radius:16px;padding:48px 32px;text-align:center;color:#fff}
        .cta-box h2{font-size:clamp(20px,3vw,30px);font-weight:800;margin-bottom:8px}
        .cta-box p{opacity:.9;margin-bottom:20px;font-size:15px}
        .cta-box .btn-w{background:#fff;color:#0654ba;font-weight:700;padding:14px 32px;border-radius:28px;border:none;cursor:pointer;font-family:inherit;font-size:15px;transition:.2s}
        .cta-box .btn-w:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.2)}

        /* Banner Grid */
        .bnr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .bnr-card{border-radius:12px;overflow:hidden;border:1px solid #cdd9ef;transition:.25s}
        .bnr-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.08)}
        .bnr-card img{width:100%;height:auto}

        /* FAQ */
        .faq-list{max-width:720px;margin:0 auto}
        .faq-item{background:#e8f0fe;border:1px solid #cdd9ef;border-radius:10px;padding:16px 20px;margin-bottom:8px;cursor:pointer;transition:.2s}
        .faq-item:hover{border-color:#0654ba}
        .faq-q{font-weight:600;display:flex;justify-content:space-between;align-items:center;font-size:14px}
        .faq-q span{color:#0654ba;font-size:18px;font-weight:700}
        .faq-a{margin-top:10px;color:#666;font-size:13px;line-height:1.7;border-top:1px solid #f0f0f0;padding-top:10px}

        /* Footer */
        footer{background:#333;color:#ccc;padding:32px 0;font-size:12px}
        .ft-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;margin-bottom:20px}
        .ft-col h4{color:#fff;font-size:14px;margin-bottom:12px}
        .ft-col a{display:block;color:#aaa;margin-bottom:6px;transition:.2s}
        .ft-col a:hover{color:#fff}
        .ft-bottom{border-top:1px solid #444;padding-top:16px;text-align:center;color:#888}

        @media(max-width:960px){
          .hero-flex{flex-direction:column;text-align:center}
          .hero-img{width:100%;max-width:400px}
          .hero-text .hbtns{justify-content:center}
          .trust-bar{justify-content:center}
          .art-row{grid-template-columns:1fr}
          .art-img{position:static}
          .feat-grid{grid-template-columns:1fr 1fr}
          .ft-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:640px){
          .search-bar{display:none}
          .feat-grid{grid-template-columns:1fr}
          .stats-grid{grid-template-columns:repeat(2,1fr)}
          .bnr-grid{grid-template-columns:1fr}
          .ft-grid{grid-template-columns:1fr}
          .catnav-inner{gap:0}
        }
      `}</style>

      {/* Top Bar */}
      <div className="topbar"><div className="W topbar-inner">
        <span>Selamat datang di {D.brand} - Platform Resmi 2026</span>
        <div style={{display:'flex',gap:'16px'}}>
          <a href={D.linkLogin}>Login</a>
          <a href={D.linkDaftar}>Daftar</a>
        </div>
      </div></div>

      {/* Header */}
      <header><div className="W hd">
        <a href="#" className="logo"><img src={D.logo} alt={D.brand} />{D.brand}</a>
        <div className="search-bar">
          <input type="text" placeholder="Cari fitur, panduan, atau informasi..." readOnly />
          <button>Cari</button>
        </div>
        <div className="hd-btns">
          <a href={D.linkLogin} className="btn btn-o">Login</a>
          <a href={D.linkDaftar} className="btn btn-p">Daftar</a>
        </div>
      </div></header>

      {/* Category Nav */}
      <nav className="catnav"><div className="W">
        <div className="catnav-inner">
          <a href="#fitur" className="act">Fitur</a>
          <a href="#tentang">Tentang</a>
          <a href="#panduan">Panduan</a>
          <a href="#promo">Promo</a>
          <a href="#faq">FAQ</a>
        </div>
      </div></nav>

      <main>
        {/* Hero Banner */}
        <section className="hero-banner"><div className="W">
          <div className="hero-flex">
            <div className="hero-text">
              <div className="tag">&#11088; Platform Terpercaya 2026</div>
              <h1>18TOTO | Link Login Terbaru: Gerbang Utama Menuju Dunia Epik</h1>
              <p>Didukung infrastruktur server premium dengan uptime 99,9%, proteksi data canggih, dan navigasi intuitif yang memudahkan setiap pengguna.</p>
              <div className="hbtns">
                <a href={D.linkDaftar} className="btn-w">Daftar Sekarang &rarr;</a>
                <a href={D.linkLogin} className="btn-g">Login Akun</a>
              </div>
              <div className="trust-bar">
                <span>&#10003; SSL 256-bit</span>
                <span>&#10003; Uptime 99.9%</span>
                <span>&#10003; Support 24/7</span>
              </div>
            </div>
            <div className="hero-img">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop" alt="18TOTO Platform" />
            </div>
          </div>
        </div></section>

        {/* Stats */}
        <div className="stats"><div className="W">
          <div className="stats-grid">
            <div className="stat-item"><div className="sv">99.9%</div><div className="sl">Uptime Server</div></div>
            <div className="stat-item"><div className="sv">24/7</div><div className="sl">Customer Support</div></div>
            <div className="stat-item"><div className="sv">1M+</div><div className="sl">Pengguna Aktif</div></div>
            <div className="stat-item"><div className="sv">256-bit</div><div className="sl">Enkripsi SSL</div></div>
          </div>
        </div></div>

        {/* Features */}
        <section className="sec" id="fitur"><div className="W">
          <div className="sec-head">
            <span className="label">Fitur Unggulan</span>
            <h2>Kenapa Memilih {D.brand}?</h2>
            <p>Nikmati berbagai fitur modern untuk pengalaman terbaik Anda.</p>
          </div>
          <div className="feat-grid">
            {features.map((f, i) => (
              <div className="feat-card" key={i}>
                <div className="fi-icon" dangerouslySetInnerHTML={{__html: f.icon}} />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        {/* Article with Image - Side by Side */}
        <section className="sec sec-alt" id="tentang"><div className="W">
          <div className="sec-head">
            <span className="label">Tentang Kami</span>
            <h2>Mengenal Lebih Dekat {D.brand}</h2>
          </div>
          <div className="art-row">
            <div className="art-img">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop" alt="18TOTO - Platform Terpercaya" />
            </div>
            <div className="art-content">
              <h3>Gerbang Utama Menuju Dunia Epik di {D.brand}</h3>
              <p>Performa kecepatan 18TOTO secara konsisten mendapat skor tinggi dalam pengujian Core Web Vitals yang menjadi standar industri. Pengalaman pengguna di 18TOTO diperkaya dengan animasi halus dan transisi visual yang membuat setiap interaksi terasa premium. Situs resmi 18TOTO merupakan alamat resmi yang telah dipercaya oleh ratusan ribu pengguna aktif dari berbagai penjuru Indonesia.</p>
              <p>Portal resmi 18TOTO hadir dengan misi menghadirkan ekosistem digital yang ramah, responsif, dan selalu tersedia untuk penggunanya. 18TOTO secara proaktif memperbarui sistem aksesnya untuk merespons perubahan kebijakan jaringan dengan kecepatan dan ketepatan. 18TOTO mendukung semua browser mobile populer dan menjamin kompatibilitas lintas platform untuk jangkauan pengguna yang maksimal.</p>
              <div className="art-tags">
                <span className="art-tag">SSL 256-bit</span>
                <span className="art-tag">Uptime 99.9%</span>
                <span className="art-tag">Anti Blokir</span>
                <span className="art-tag">Multi Platform</span>
              </div>
            </div>
          </div>
        </div></section>

        {/* Promo Banners */}
        <section className="sec" id="promo"><div className="W">
          <div className="sec-head">
            <span className="label">Promo & Event</span>
            <h2>Penawaran Terbaik Hari Ini</h2>
          </div>
          <div className="bnr-grid">
            <a href={D.linkDaftar} className="bnr-card"><img src="https://picsum.photos/id/21/720/280" alt="Promo 18TOTO 1" loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://picsum.photos/id/22/720/280" alt="Promo 18TOTO 2" loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://picsum.photos/id/23/720/280" alt="Promo 18TOTO 3" loading="lazy" /></a>
          </div>
        </div></section>

        {/* CTA */}
        <section className="sec sec-alt"><div className="W">
          <div className="cta-box">
            <h2>Bergabung dengan {D.brand} Sekarang!</h2>
            <p>Daftar gratis dan rasakan layanan premium tanpa batas.</p>
            <a href={D.linkDaftar} className="btn-w">Daftar Gratis &rarr;</a>
          </div>
        </div></section>

        {/* FAQ */}
        <section className="sec" id="faq"><div className="W">
          <div className="sec-head">
            <span className="label">FAQ</span>
            <h2>Pertanyaan Yang Sering Diajukan</h2>
            <p>Temukan jawaban seputar {D.brand}.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">{f.q}<span>{openFaq === i ? '\u2212' : '+'}</span></div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div></section>
      </main>

      {/* Footer */}
      <footer><div className="W">
        <div className="ft-grid">
          <div className="ft-col">
            <h4>{D.brand}</h4>
            <p style={{color:'#aaa',lineHeight:'1.7'}}>Platform digital terpercaya dengan akses cepat, aman, dan tanpa hambatan.</p>
          </div>
          <div className="ft-col">
            <h4>Navigasi</h4>
            <a href="#fitur">Fitur</a>
            <a href="#tentang">Tentang</a>
            <a href="#panduan">Panduan</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="ft-col">
            <h4>Akses</h4>
            <a href={D.linkLogin}>Login Akun</a>
            <a href={D.linkDaftar}>Daftar Baru</a>
            <a href={D.linkDaftar}>Link Alternatif</a>
          </div>
          <div className="ft-col">
            <h4>Keamanan</h4>
            <a href="#">SSL 256-bit</a>
            <a href="#">Proteksi DDoS</a>
            <a href="#">Anti Blokir</a>
          </div>
        </div>
        <div className="ft-bottom">
          &copy; 2026 {D.brand}. Situs resmi &mdash; {D.domain}
        </div>
      </div></footer>
    </>
  );
}
