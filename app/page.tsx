'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../images/logo_background_removed.png';
import mainTemple1 from '../images/main_temple_1.jpeg';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<'en' | 'te'>('en');

  // Literary & Scholarly Font Definitions
  const fonts = {
    teHeader: { fontFamily: "'Tiro Telugu', serif" }, 
    teBody: { fontFamily: "'Noto Serif Telugu', serif" },
    enHeader: { fontFamily: "'Varela Round', sans-serif" },
    enBody: { fontFamily: "'Montserrat', sans-serif" }
  };

  const currentBodyFont = lang === 'te' ? fonts.teBody : fonts.enBody;
  const currentHeaderFont = lang === 'te' ? fonts.teHeader : fonts.enHeader;

  const t = {
    en: {
      trustName: "Brahmashri Valiveru VenkataRama Bhotlu Trust",
      motto: "Shiva Anugraha • Guru Krupa • Atmonnati",
      nav: { home: 'Home', about: 'About', programs: 'Programs', events: 'Events', contact: 'Contact', donate: 'Donate' },
      hero: {
        shloka1: "“दुर्लभं त्रयमेवैतद्देवानुग्रहहेतुकम् । मनुष्यत्वं मुमुक्षुत्वं महापुरुषसंश्रयः ॥”",
        shloka1_caption: "— विवेकचूडामणि",
        meaning1: "Three things are rare and due to the grace of God: human birth, longing for liberation, and the refuge of a great soul.",
        welcome: "Welcome to",
        desc1: "Centered around the divine Jeeva Samadhi (Brindavan) of the revered saint Brahmashri Valiveru Venkatarama Bhotlu, this sacred site in Parnapalle is graced by the Sri Omkareswara Swamy Banalinga, established directly upon the saint's eternal presence to bless all devotees and seekers.",
        btnHistory: "Explore Our Sacred History",
        btnLearn: "Learn More"
      },
      about: {
        tag: "Our Foundation",
        title: "A Sacred Legacy of Two Centuries",
        desc: "The Brahmashri Valiveru VenkataRama Bhotulu Trust is dedicated to the care and preservation of the sacred Jeeva Samadhi (Brindavan) at Parnapalle, nurturing its spiritual heritage and fostering the values of Sanatana Dharma. Established and administered by the 6th generation descendants of the revered saint, the Trust serves devotees and seekers with a commitment to continuity, devotion, and service.",
        historyLink: "📜 Read the full history of the Saint and the Temple →",
        heritageTitle: "Sacred Heritage",
        heritageDesc: "More than 200 years ago, Brahmashri Valiveru VenkataRama Bhotlu, a realized spiritual luminary, attained Jeeva Samadhi at this holy site. In reverence to the great saint, Sri Omkareswara Swamy Temple was established above the sacred Brindavan — a powerful centre of Shiva worship, meditation, and living spiritual heritage.",
        visionTitle: "Vision",
        visionDesc: "To develop Sri Omkareswara Swamy Temple into a vibrant spiritual, cultural, and charitable centre serving devotees and seekers at large.",
        missionTitle: "Mission",
        missionList: [
          "Preserve temple sanctity and traditions",
          "Promote Sanatana Dharma and Hindu scriptures",
          "Serve devotees and seekers through spiritual activities",
          "Establish educational and cultural institutions"
        ]
      },
      programs: {
        tag: "What We Do",
        title: "Brindavan & Temple Activities",
        p1: { title: "Spiritual Activities", desc: "Daily sacred rituals and worship conducted in the ancient tradition.", items: ["Daily Pooja & Archana", "Abhishekam & Aarti", "Special Shiva Poojas", "Pradosha Sevas", "Annual rituals"] },
        p2: { title: "Dharmic Programs", desc: "Sacred gatherings and discourses open to all seekers.", items: ["Pravachanams & Bhajans", "Gita & Ramayana discourses", "Yajnas & Havans", "Satsangs"] },
        p3: { title: "Educational (Planned)", desc: "Nurturing knowledge of scriptures and culture.", items: ["Scriptural Library", "Spiritual Education", "Sanskrit Classes", "Yoga & Meditation"] },
        p4: { title: "Charitable Service", desc: "Serving the community as an expression of Dharma.", items: ["Annadanam", "Support to needy", "Gau Seva initiatives", "Environmental drives"] }
      },
      events: {
        tag: "Upcoming",
        title: "Events & Celebrations",
        e1: { name: "Aaradhana Utsavam", date: "ANNUAL", desc: "The sacred Aaradhana in honor of the revered saint is observed annually, propagating his life and teachings." },
        e2: { name: "Maha Shivaratri", date: "FEB / MAR", desc: "Grand celebration with night-long Abhishekam, Poojas, Bhajans, and devotional programs at the temple." },
        e3: { name: "Guru Purnima & Shankara Jayanti", date: "JULY", desc: "Observance with special poojas and pravachanams in reverence of the Guru parampara." },
        e4: { name: "Karthika Masam", date: "NOV", desc: "Month-long sacred observances including daily Deepotsavam and Abhishekams throughout the holy month." }
      },
      contact: {
        tag: "Get in Touch",
        title: "We'd Love to Hear From You",
        office: "Trust Office Address",
        officeAddr: "Door No. 14/65, Kamala Nagar, Beside Raghuveera Towers, Ananthapuramu - 515001",
        temple: "Temple Address",
        templeAddr: "Omkara Kshetram, Paarnapalli Village, Lingala Mandal, Kadapa District, AP - 516396",
        call: "Call Us",
        email: "Email Us",
        btn: "Send Message",
        placeholders: { name: "Name", email: "Email", message: "Message" }
      },
      donate: {
        tag: "Make a Difference",
        title: "Support Our Sacred Mission",
        desc1: "Devotees and seekers who wish to support the Trust may offer voluntary contributions towards temple maintenance and charitable initiatives.",
        desc2: "All donations are utilized solely for the objectives of the Trust in accordance with the Trust Deed.",
        desc3: "The Trust maintains proper records and ensures funds are used for religious and developmental activities."
      },
      footer: {
        aboutTitle: "About Seva Trust",
        aboutDesc: "Dedicated to the sacred service and development of Sri Omkareswara Swamy Temple, Paarnapalli. The Trust preserves temple traditions, promotes Sanatana Dharma, and serves devotees and seekers.",
        regNo: "Reg. No.: 13/2026",
        quickLinksTitle: "Quick Links",
        connectTitle: "Connect With Us",
        copyright: "© 2026 Brahmashri Valiveru VenkataRama Bhotulu Trust. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    },
    te: {
      trustName: "బ్రహ్మశ్రీ వలివేరు వేంకటరామా భొట్లు ట్రస్ట్",
      motto: "శివానుగ్రహం • గురు కృప • ఆత్మోన్నతి",
      nav: { home: 'హోమ్', about: 'మా గురించి', programs: 'కార్యక్రమాలు', events: 'వేడుకలు', contact: 'సంప్రదించండి', donate: 'విరాళాలు' },
      hero: {
        shloka1: "“దుర్లభం త్రయమేవైతద్దేవానుగ్రహహేతుకమ్ । మనుష్యత్వం ముముక్షుత్వం మహాపురుషసంశ్రయః ॥”",
        shloka1_caption: "— వివేకచూడామణి",
        meaning1: "మానవ జన్మ, మోక్షంపై కోరిక, మహాపురుషుల ఆశ్రయం - ఈ మూడూ దైవానుగ్రహం వల్లనే లభిస్తాయి.",
        welcome: "స్వాగతం",
        desc1: "పార్నపల్లిలోని పూజ్యులైన బ్రహ్మశ్రీ వలివేరు వేంకటరామా భొట్లు గారి పవిత్ర జీవ సమాధి (బృందావనం) ఈ క్షేత్రానికి మూలాధారం. ఈ మహనీయుని నిత్య సన్నిధిపైనే శ్రీ ఓంకారేశ్వర స్వామి బాణలింగం ప్రతిష్ఠించబడి, భక్తులకు మరియు ముముక్షువులకు ఆధ్యాత్మిక శక్తిని ప్రసాదిస్తోంది.",
        btnHistory: "చరిత్రను తెలుసుకోండి",
        btnLearn: "మరింత సమాచారం"
      },
      about: {
        tag: "మా పునాది",
        title: "రెండు శతాబ్దాల పవిత్ర వారసత్వం",
        desc: "పార్నపల్లెలోని పవిత్ర జీవ సమాధి (బృందావనం) యొక్క పరిరక్షణ మరియు నిర్వహణకు అంకితమైన బ్రహ్మశ్రీ వలివేరు వెంకటరామ భొట్లుల ట్రస్ట్, ఈ ఆధ్యాత్మిక వారసత్వాన్ని పోషిస్తూ, సనాతన ధర్మ విలువలను అభివృద్ధి చేయడానికి కట్టుబడి ఉంది. ఈ ట్రస్ట్‌ను మహనీయుల 6వ తరపు వారసులు భక్తి మరియు బాధ్యతతో నిర్వహిస్తూ, భక్తులు మరియు ఆధ్యాత్మిక సాధకుల సేవలో నిమగ్నమై ఉన్నారు.",
        historyLink: "📜 సాధువు మరియు ఆలయం యొక్క పూర్తి చరిత్రను చదవండి →",
        heritageTitle: "పవిత్ర వారసత్వం",
        heritageDesc: "200 సంవత్సరాల కంటే పూర్వం, బ్రహ్మశ్రీ వలివేరు వేంకటరామా భొట్లు గారు ఈ పవిత్ర స్థలంలో జీవ సమాధి పొందారు. ఈ మహనీయుని స్మృత్యర్థం, దివ్యమైన బృందావనంపై శ్రీ ఓంకారేశ్వర స్వామి ఆలయం వెలసింది. ఇది నేటికీ భక్తులకు శివారాధనలో మరియు ఆధ్యాత్మిక సాధనలో ఒక శక్తివంతమైన కేంద్రంగా విరాజిల్లుతోంది.",
        visionTitle: "సంకల్పం",
        visionDesc: "శ్రీ ఓంకారేశ్వర స్వామి ఆలయాన్ని ఆధ్యాత్మిక, సాంస్కృతిక మరియు సేవా కేంద్రంగా తీర్చిదిద్దడం.",
        missionTitle: "ధ్వేయం",
        missionList: ["బృందావనం మరియు ఆలయ పవిత్రతను కాపాడటం", "సనాతన ధర్మం మరియు హిందూ ధర్మ గ్రంథాల వ్యాప్తి", "ఆధ్యాత్మిక కార్యక్రమాల ద్వారా ముముక్షువులకు సేవ చేయడం", "విద్యా సంస్థలను స్థాపించడం"]
      },
      programs: {
        tag: "మేము చేసేవి",
        title: "బృందావన & ఆలయ కార్యక్రమాలు",
        p1: { title: "ఆధ్యాత్మిక కార్యక్రమాలు", desc: "పురాతన సంప్రదాయంలో ప్రతిరోజూ నిర్వహించబడే పవిత్ర పూజలు.", items: ["నిత్య పూజ & అర్చన", "అభిషేకం & హారతి", "ప్రత్యేక శివ పూజలు", "ప్రదోష సేవలు", "వార్షిక ఉత్సవాలు"] },
        p2: { title: "ధార్మిక కార్యక్రమాలు", desc: "ముముక్షువులందరికీ అందుబాటులో ఉండే ఆధ్యాత్మిక ప్రసంగాలు.", items: ["ప్రవచనాలు & భజనలు", "గీతా & రామాయణ పారాయణం", "యజ్ఞాలు & హవనాలు", "సత్సంగాలు"] },
        p3: { title: "విద్యా కార్యక్రమాలు", desc: "శాస్త్రాలు మరియు సంస్కృతిపై అవగాహన కల్పించడం.", items: ["ధార్మిక గ్రంథాలయం", "ఆధ్యాత్మిక విద్య", "సంస్కృత తరగతులు", "యోగా & ధ్యానం"] },
        p4: { title: "సేవా కార్యక్రమాలు", desc: "ధర్మం ప్రకారం సమాజానికి సేవ చేయడం.", items: ["అన్నదానం", "పేదలకు సహాయం", "గోసేవ", "పర్యావరణ పరిరక్షణ"] }
      },
      events: {
        tag: "వేడుకలు",
        title: "రాబోయే కార్యక్రమాలు",
        e1: { name: "ఆరాధన ఉత్సవం", date: "వార్షికం", desc: "పూజ్యులైన సిద్ధ పురుషుల గౌరవార్థం ప్రతి ఏటా ఈ ఉత్సవం జరుగుతుంది." },
        e2: { name: "మహా శివరాత్రి", date: "ఫిబ్రవరి / మార్చి", desc: "రాత్రంతా అభిషేకాలు, పూజలు మరియు భజనలతో గొప్ప వేడుక." },
        e3: { name: "గురు పౌర్ణమి & శంకర జయంతి", date: "జూలై", desc: "గురు పరంపరను స్మరించుకుంటూ ప్రత్యేక పూజలు మరియు ప్రవచనాలు." },
        e4: { name: "కార్తీక మాస వేడుకలు", date: "నవంబర్", desc: "దీపోత్సవం మరియు ప్రత్యేక అభిషేకములతో నెలంతా పండుగ వాతావరణం." }
      },
      contact: {
        tag: "సంప్రదించండి",
        title: "మీతో మాట్లాడటానికి మేము సిద్ధంగా ఉన్నాము",
        office: "ట్రస్ట్ కార్యాలయ చిరునామా",
        officeAddr: "కమలా నగర్, అనంతపురము, ఆంధ్రప్రదేశ్ - 515001",
        temple: "ఆలయ చిరునామా",
        templeAddr: "ఓంకార క్షేత్రము, పార్నపల్లి గ్రామము, కడప జిల్లా, ఆంధ్రప్రదేశ్ - 516396",
        call: "ఫోన్ చేయండి",
        email: "ఈమెయిల్",
        btn: "సంప్రదించండి",
        placeholders: { name: "పేరు", email: "ఈమెయిల్", message: "సందేశం" }
      },
      donate: {
        tag: "సహాయం చేయండి",
        title: "మీ సహకారం ఎంతో విలువైనది",
        desc1: "ఆలయ నిర్వహణ మరియు సేవా కార్యక్రమాల కోసం భక్తులు మరియు ముముక్షువులు తమ విరాళాలను అందించవచ్చు.",
        desc2: "అన్ని విరాళాలు ట్రస్ట్ యొక్క నిబంధనల ప్రకారం అభివృద్ధి పనులకే ఉపయోగించబడతాయి.",
        desc3: "ట్రస్ట్ ప్రతి విరాళానికి సంబంధించిన రికార్డులను పారదర్శకంగా నిర్వహిస్తుంది."
      },
      footer: {
        aboutTitle: "సేవా ట్రస్ట్ గురించి",
        aboutDesc: "పార్నపల్లిలోని శ్రీ ఓంకారేశ్వర స్వామి ఆలయ అభివృద్ధికి మరియు పవిత్ర సేవకు అంకితం చేయబడింది. ఈ ట్రస్ట్ ఆలయ సంప్రదాయాలను కాపాడుతూ, సనాతన ధర్మాన్ని ప్రచారం చేస్తూ భక్తులకు మరియు ముముక్షువులకు సేవ చేస్తుంది.",
        regNo: "రిజిస్ట్రేషన్ నెం: 13/2026",
        quickLinksTitle: "త్వరిత లింకులు",
        connectTitle: "మమ్మల్ని అనుసరించండి",
        copyright: "© 2026 బ్రహ్మశ్రీ వలివేరు వేంకటరామా భొట్లు ట్రస్ట్. సర్వ హక్కులు ప్రత్యేకించబడినవి.",
        privacy: "గోప్యతా విధానం",
        terms: "సేవా నిబంధనలు"
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'programs', 'events', 'contact', 'donate'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <main className="main-container" style={currentBodyFont}>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <Image src={logo} alt="Logo" width={60} height={60} className="logo-image" style={{borderRadius: '100%', objectFit: 'cover' ,mixBlendMode: 'multiply'}} />
            <div className="logo-text">
              <span className="logo-main" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.4rem' : '1.3rem' }}>{t[lang].trustName}</span>
              <span className="logo-sub" style={{ fontSize: lang === 'te' ? '1.1rem' : '0.85rem', lineHeight: '1.2' }}>{t[lang].motto}</span>
            </div>
          </div>
          <div className="nav-links">
            {Object.keys(t.en.nav).map((key) => (
              <button key={key} onClick={() => scrollToSection(key)} className={`nav-link ${activeSection === key ? 'active' : ''}`} style={currentHeaderFont}>
                {(t[lang].nav as any)[key]}
              </button>
            ))}
            <button className="lang-toggle-btn" onClick={() => setLang(lang === 'en' ? 'te' : 'en')} style={{ ...currentHeaderFont, marginLeft: '15px', padding: '5px 12px', borderRadius: '20px', border: '2px solid orange', cursor: 'pointer', fontWeight: 'bold', color: 'orange', background: 'white'}}>
              {lang === 'en' ? 'తెలుగు' : 'English'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <blockquote className="hero-shloka">
              <p style={{ fontSize: lang === 'te' ? '1.5rem' : '1.3rem', marginBottom: '10px' }}>{t[lang].hero.shloka1}</p>
              <p style={{ fontSize: lang === 'te' ? '1.5rem' : '1.3rem', marginBottom: '10px' }}>{t[lang].hero.shloka1_caption}</p>
              <cite style={{ fontWeight: 'normal', fontStyle: 'normal', fontSize: '1.1rem', opacity: 0.9 }}>
                {t[lang].hero.meaning1}
                <br />
                </cite>
            </blockquote>

            <h2 className="hero-welcome" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.8rem' : '1.5rem', marginTop: '30px' }}>{t[lang].hero.welcome}</h2>
            <h3 className="hero-trust-name" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '3.2rem' : '2.8rem' }}>{t[lang].trustName}</h3>
            <p className="hero-subtitle" style={{ maxWidth: '900px', margin: '20px auto' }}>{t[lang].hero.desc1}</p>
            <div className="hero-buttons">
              <a href="/history" className="btn btn-primary" style={currentHeaderFont}>{t[lang].hero.btnHistory}</a>
              <button onClick={() => scrollToSection('about')} className="btn btn-secondary" style={currentHeaderFont}>{t[lang].hero.btnLearn}</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag" style={currentHeaderFont}>{t[lang].about.tag}</span>
            <h2 className="section-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.8rem' : '2.5rem' }}>{t[lang].about.title}</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p className="about-intro" style={{textAlign: 'justify', marginBottom: '20px'}}>{t[lang].about.desc}</p>
              <a href="/history" className="history-cta-link" style={{ ...currentHeaderFont, display: 'block', marginBottom: '30px', color: 'orange' }}>{t[lang].about.historyLink}</a>
              <div className="values-list">
                <div className="value-item">
                  <div className="value-icon">🕉️</div>
                  <div className="value-content">
                    <h3 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.6rem' : '1.5rem' }}>{t[lang].about.heritageTitle}</h3>
                    <p style={{textAlign: 'justify'}}>{t[lang].about.heritageDesc}</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🌟</div>
                  <div className="value-content">
                    <h3 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.6rem' : '1.5rem' }}>{t[lang].about.visionTitle}</h3>
                    <p style={{textAlign: 'justify'}}>{t[lang].about.visionDesc}</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🙏</div>
                  <div className="value-content">
                    <h3 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.6rem' : '1.5rem' }}>{t[lang].about.missionTitle}</h3>
                    <ul style={{ paddingLeft: '20px' }}>{t[lang].about.missionList.map((m, i) => <li key={i}>{m}</li>)}</ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
               <div className="temple-slider" style={{ position: 'relative', height: '500px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <Image src={mainTemple1} alt="Sri Omkareswara Swamy" fill style={{ objectFit: 'cover' }} />
                  <p className="image-caption" style={{ position: 'absolute', bottom: '0', width: '100%', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '10px', textAlign: 'center' }}>
                    {lang === 'en' ? 'Sri Omkareswara Swamy Temple, Paarnapalli' : 'శ్రీ ఓంకారేశ్వర స్వామి ఆలయం, పార్నపల్లి'}
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag" style={currentHeaderFont}>{t[lang].programs.tag}</span>
            <h2 className="section-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.8rem' : '2.5rem' }}>{t[lang].programs.title}</h2>
          </div>
          <div className="programs-grid">
            {[t[lang].programs.p1, t[lang].programs.p2, t[lang].programs.p3, t[lang].programs.p4].map((p, i) => (
              <div key={i} className="program-card" style={{ padding: '35px', background: 'white', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                <h3 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.6rem' : '1.5rem', marginBottom: '15px', color: '#8e44ad' }}>{p.title}</h3>
                <p style={{ textAlign: 'justify', marginBottom: '15px' }}>{p.desc}</p>
                <ul className="program-features" style={{ paddingLeft: '20px' }}>{p.items.map((item, j) => <li key={j} style={{marginBottom: '5px'}}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag" style={currentHeaderFont}>{t[lang].events.tag}</span>
            <h2 className="section-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.8rem' : '2.5rem' }}>{t[lang].events.title}</h2>
          </div>
          <div className="events-grid">
            {[t[lang].events.e1, t[lang].events.e2, t[lang].events.e3, t[lang].events.e4].map((e, i) => (
              <div key={i} className="event-card">
                <div className="event-date" style={{ minWidth: '120px', background: 'orange', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <h4 style={{ ...currentHeaderFont, color: 'white', fontSize: lang === 'te' ? '1.2rem' : '1rem' }}>{e.date}</h4>
                </div>
                <div className="event-info" style={{ padding: '25px' }}>
                  <h3 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.5rem' : '1.3rem', marginBottom: '10px' }}>{e.name}</h3>
                  <p style={{ textAlign: 'justify' }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag" style={currentHeaderFont}>{t[lang].contact.tag}</span>
            <h2 className="section-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.8rem' : '2.5rem' }}>{t[lang].contact.title}</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item" style={{marginBottom: '25px'}}>
                <h4 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.4rem' : '1.2rem', marginBottom: '5px' }}>📍 {t[lang].contact.office}</h4>
                <p>{t[lang].contact.officeAddr}</p>
              </div>
              <div className="contact-item" style={{marginBottom: '25px'}}>
                <h4 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.4rem' : '1.2rem', marginBottom: '5px' }}>🛕 {t[lang].contact.temple}</h4>
                <p>{t[lang].contact.templeAddr}</p>
              </div>
              <div className="contact-item" style={{marginBottom: '25px'}}>
                <h4 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.4rem' : '1.2rem', marginBottom: '5px' }}>📞 {t[lang].contact.call}</h4>
                <p>+91 93913 33770</p>
              </div>
              <div className="contact-item">
                <h4 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.4rem' : '1.2rem', marginBottom: '5px' }}>✉️ {t[lang].contact.email}</h4>
                <p>bvvb.trust@outlook.com</p>
              </div>
            </div>
            <form className="contact-form" style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 25px rgba(0,0,0,0.05)' }}>
              <input type="text" placeholder={t[lang].contact.placeholders.name} className="form-input" style={{width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '5px'}} />
              <input type="email" placeholder={t[lang].contact.placeholders.email} className="form-input" style={{width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '5px'}} />
              <textarea placeholder={t[lang].contact.placeholders.message} className="form-input" rows={4} style={{width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px'}}></textarea>
              <button className="btn btn-primary" style={{ ...currentHeaderFont, width: '100%' }}>{t[lang].contact.btn}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="donate" style={{ background: '#fef5e7', paddingBottom: '100px' }}>
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag" style={currentHeaderFont}>{t[lang].donate.tag}</span>
            <h2 className="section-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.8rem' : '2.5rem' }}>{t[lang].donate.title}</h2>
          </div>
          <div className="donate-content" style={{textAlign: 'justify', maxWidth: '850px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8'}}>
            <p style={{marginBottom: '20px'}}>{t[lang].donate.desc1}</p>
            <p style={{marginBottom: '20px'}}>{t[lang].donate.desc2}</p>
            <p>{t[lang].donate.desc3}</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-v2" style={{ background: '#3d2b1f', color: '#f5f5f5', padding: '60px 20px 20px' }}>
        <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          
          {/* About Column */}
          <div className="footer-col">
            <h4 style={{ ...currentHeaderFont, color: 'white', marginBottom: '20px' }}>{t[lang].footer.aboutTitle}</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', textAlign: 'justify' }}>{t[lang].footer.aboutDesc}</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{t[lang].footer.regNo}</p>
          </div>

          {/* Links Column */}
          <div className="footer-col">
            <h4 style={{ ...currentHeaderFont, color: 'white', marginBottom: '20px' }}>{t[lang].footer.quickLinksTitle}</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['about', 'programs', 'donate', 'events'].map((link) => (
                <li key={link} style={{ marginBottom: '10px' }}>
                  <button onClick={() => scrollToSection(link)} style={{ background: 'none', border: 'none', color: '#f5f5f5', cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'none' }}>
                    {(t[lang].nav as any)[link]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect Column */}
          <div className="footer-col">
            <h4 style={{ ...currentHeaderFont, color: 'white', marginBottom: '20px' }}>{t[lang].footer.connectTitle}</h4>
            <div className="social-icons" style={{ display: 'flex', gap: '15px' }}>
               {/* Placeholders for social icons as seen in the image */}
               {['FB', 'IG', 'X', 'YT', 'IN'].map(icon => (
                 <div key={icon} style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', cursor: 'pointer' }}>{icon}</div>
               ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom" style={{ maxWidth: '1200px', margin: '40px auto 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '0.85rem' }}>
          <p style={{ marginBottom: '10px', color: '#bdc3c7' }}>
            {t[lang].footer.copyright} | 
            <button style={{ background: 'none', border: 'none', color: 'orange', cursor: 'pointer', marginLeft: '10px' }}>{t[lang].footer.privacy}</button> | 
            <button style={{ background: 'none', border: 'none', color: 'orange', cursor: 'pointer', marginLeft: '10px' }}>{t[lang].footer.terms}</button>
          </p>
        </div>
      </footer>
    </main>
  );
}
