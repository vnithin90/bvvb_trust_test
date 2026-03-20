'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function History() {
  const [activeChapter, setActiveChapter] = useState('');
  const [lang, setLang] = useState<'en' | 'te'>('en');

  useEffect(() => {
    const handleScroll = () => {
      const chaptersList = document.querySelectorAll('.history-chapter');
      let current = '';
      chaptersList.forEach((ch) => {
        const rect = ch.getBoundingClientRect();
        if (rect.top <= 120) current = ch.id;
      });
      setActiveChapter(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  // Literary & Scholarly Font Definitions
  const fonts = {
    teHeader: { fontFamily: "'Tiro Telugu', serif" }, 
    teBody: { fontFamily: "'Noto Serif Telugu', serif" },
    enHeader: { fontFamily: "'Varela Round', sans-serif" },
    enBody: { fontFamily: "'Montserrat', sans-serif" }
  };

  const currentBodyStyle = lang === 'te' ? { ...fonts.teBody, textAlign: 'justify' as const } : { ...fonts.enBody, textAlign: 'justify' as const };
  const currentHeaderFont = lang === 'te' ? fonts.teHeader : fonts.enHeader;

  const chapters = [
    { id: 'invocation', en: 'Invocation', te: 'ప్రార్థన' },
    { id: 'roots', en: 'The Roots of the Valiveru Lineage', te: 'వలివేరు వంశ మూలాలు' },
    { id: 'acharana', en: 'A Life that Embodied Truth', te: 'ఆచరణాత్మక వేదాంతం' },
    { id: 'gurukrpa', en: 'Grace of the Kanchi Paramacharya', te: 'కాంచీ పరమాచార్యుల అనుగ్రహం' },
    { id: 'siblings', en: 'The Lives of His Siblings', te: 'తోబుట్టువుల విశేషాలు' },
    { id: 'jivanmukta', en: 'The Great Ancestor', te: 'వలివేరు వంశ జీవన్ముక్తుడు' },
    { id: 'temple', en: 'From Samadhi to Temple', te: 'సమాధి నుండి దేవాలయం వరకు' },
    { id: 'vision', en: 'The Vision Ahead', te: 'భవిష్యత్ సంకల్పం' },
  ];

  return (
    <main className="history-page" style={currentBodyStyle}>
      {/* Hero Section */}
      <div className="history-hero">
        <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 100 }}>
          <button 
            onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
            style={{ 
              padding: '8px 16px', 
              borderRadius: '20px', 
              border: '2px solid white', 
              background: 'rgba(255,255,255,0.1)', 
              color: 'white', 
              cursor: 'pointer', 
              fontWeight: 'bold',
              backdropFilter: 'blur(5px)'
            }}
          >
            {lang === 'en' ? 'తెలుగు' : 'English'}
          </button>
        </div>
        
        <Link href="/" className="legal-back-btn">
          {lang === 'en' ? '← Back to Home' : '← తిరిగి హోమ్‌ పేజీకి'}
        </Link>
        
        <div className="history-hero-content">
          <p className="history-sanskrit">{lang === 'en' ? 'oṁ śrī gurubhyo namaḥ' : 'ఓం శ్రీ గురుభ్యోనమః'}</p>
          <h1 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '3.0rem' : '2.5rem' }}>
            {lang === 'en' ? 'Brahmashri Valiveru Venkatarama Bhotlu' : 'బ్రహ్మశ్రీ వలివేరు వేంకటరామా భొట్లు'}
          </h1>
          <p className="history-epithet">
            {lang === 'en' ? 'The Jivanmukta of the Valiveru Lineage' : '"వలివేరు వంశాన జీవన్ముక్తుడు - బ్రహ్మశ్రీ వలివేరు వేంకటరామా భొట్లు"'}
          </p>
        </div>
      </div>

      <div className="history-layout">
        <aside className="history-sidebar">
          <nav className="history-nav">
            <h4 style={currentHeaderFont}>{lang === 'en' ? 'Chapters' : 'విషయ సూచిక'}</h4>
            <ul>
              {chapters.map((ch, index) => (
                <li key={ch.id}>
                  <button
                    className={activeChapter === ch.id ? 'active' : ''}
                    onClick={() => scrollTo(ch.id)}
                    style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.2rem' : '1rem' }}
                  >
                    {index === 0 ? "" : (index === 1 ? "I. " : index === 2 ? "II. " : index === 3 ? "III. " : index === 4 ? "IV. " : index === 5 ? "V. " : index === 6 ? "VI. " : "VII. ")}
                    {lang === 'en' ? ch.en : ch.te}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="history-content">
          {/* Invocation */}
          <section id="invocation" className="history-chapter">
            <div className="invocation-block">
              {lang === 'en' ? (
                <>
                  <p className="sanskrit-verse">oṁ śrī gurubhyo namaḥ | oṁ śrī mahāgaṇādhipataye namaḥ | oṁ śrī sarasvatyai namaḥ | oṁ śrī sadguru sāyināthāya namaḥ ||</p>
                  <p className="sanskrit-verse">sadāśiva samārambhāṁ śaṅkarācārya madhyamām |<br />asmadācāryaparyantāṁ vande guruparamparām ||</p>
                  <p className="sanskrit-verse">īśvaro gururātmeti mūrtibheda vibhāgine |<br />vyomavatvyāpta dehāya śrī dakṣiṇāmūrtaye namaḥ ||</p>
                </>
              ) : (
                <>
                  <p className="sanskrit-verse">ఓం శ్రీ గురుభ్యోనమః. ఓం శ్రీ మహాగణాధిపతయే నమః. ఓం. శ్రీ సరస్వత్యై నమః. ఓం శ్రీ సద్గురు సాయినాధాయ నమః.</p>
                  <p className="sanskrit-verse">సదాశివ సమారంభాం శంకరాచార్య మధ్యమామ్ |<br />అస్మదాచార్యపర్యంతాం వందే గురుపరంపరాం ||</p>
                  <p className="sanskrit-verse">ఈశ్వరో గురురాత్మేతి మూర్తిభేద విభాగినే |<br />వ్యోమవత్వ్యాప్త దేహాయ శ్రీ దక్షిణామూర్తయే నమః ||</p>
                </>
              )}
            </div>
          </section>

          {/* Chapter I - Roots */}
          <section id="roots" className="history-chapter">
            <h2 className="chapter-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.4rem' : '2rem' }}>
              <span className="chapter-num">I</span>{lang === 'en' ? chapters[1].en : chapters[1].te}
            </h2>
            {lang === 'en' ? (
              <div>
                <p>Parnapalli is a village situated on the banks of the Chitravati River in Pulivendula taluk of Kadapa district, Andhra Pradesh. In this village lived the late Sri Venkataramayya, a Brahmin of the Velanadu tradition belonging to the Gautama Gotra, bearing the family name Valiveru. A learned Vedic scholar and ritual practitioner, he sustained his family through traditional village priesthood.</p>
                <p>The family deity (Gṛha Daiva) of the Valiveru household is Sri Lakshmi Narasimha Swamy of Doddadalavatam (Madhugiri taluk, Karnataka). At the same time, the worship of Sri Ramachandra Murthy as the cherished Iṣṭa Daiva has long been a continuing tradition within the family.</p>
                <p>Sri Venkataramayya and his dharmapatni Smt. Chayamma were blessed with five sons and no daughters. He had two sisters — Smt. Kamakshamma and Smt. Sheshamma — and a younger brother Sri Narasayya.</p>
              </div>
            ) : (
              <div>
                <p>అది ఆంధ్ర ప్రదేశ్ లోని కడపజిల్లా పులివెందుల తాలూకాలోని చిత్రావతి నది ఏటి ఒడ్డున పార్నపల్లి గ్రామం. అందు కీ.శే. వేంకటరామయ్య గారు అను శ్రోత్రియ, వైదిక, వెలనాటి వారు, గౌతమస గోత్రీకులు, వలివేరు ఇంటిపేరుగా గల బ్రాహ్మణుడు. వారి ఇంటి దేవుడు శ్రీ లక్ష్మీనరసింహస్వామి (దొడ్డదాళవటము, మధుగిరి తాలూకా, కర్ణాటక రాష్ట్రము). వలివేరు వంశమునకు ఇష్టదైవముగా శ్రీరామచంద్రమూర్తిని కొలుచుకొనుట ఇప్పటికినీ పరిపాటి.</p>
                <p>కీ.శే. వేంకటరామయ్య, ధర్మపత్ని కీ.శే. కుం.సౌ. ఛాయమ్మ దంపతులకు ఐదు మంది కుమారులు. కుమార్తెలు లేరు. ఆయనకు ఇద్దరు అక్కగారు కీ.శే. కుం.సౌ చెన్నకిష్టమ్మ, కీ.శే. శేషమ్మ, మరియు కీ.శే. నరసయ్యగారు తమ్ముడు.</p>
                <p>కీ.శే. నరసయ్య గారు కాలాంతరమున తన పినతండ్రి సీతారామయ్య గారికి దత్తపుత్రుడైనారు.</p>
              </div>
            )}
          </section>

          {/* Chapter II - Acharana */}
          <section id="acharana" className="history-chapter">
            <h2 className="chapter-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.4rem' : '2rem' }}>
              <span className="chapter-num">II</span>{lang === 'en' ? chapters[2].en : chapters[2].te}
            </h2>
            {lang === 'en' ? (
              <div>
                <p>Sri Venkataramayya lived a life of simplicity and contentment despite material poverty. Having studied the Vedas thoroughly, he upheld the principles of Sanatana Dharma with sincerity and discipline.</p>
                <p>His daily life followed a sacred rhythm. He performed Trikala Sandhya, morning Pañcāyatana Puja, and Abhiṣeka. During the afternoons, he would sit on the front verandah of his home and recite the Mahabharata, Bhagavata, Rāmāyaṇa, and other sacred texts, explaining their teachings to the villagers and guiding them in the Dharmic way of life.</p>
                <p className="highlight-quote">Those who knew him often remarked — for him, Vedanta was not merely spoken but is a lived reality — his life itself was the teaching.</p>
              </div>
            ) : (
              <div>
                <p>కీ.శే. వేంకటరామయ్యగారు సాంగోపాంగముగా వేదమునభ్యసించియు, గ్రామ పౌరోహిత్యము చేతనే పేదరికంలో తృప్తిగా జీవనమును కొనసాగించుచుండెడివారు. సనాతన ధర్మమును భక్తి శ్రద్ధలతో అనుసరించి సంపూర్ణ ఆచార వ్యవహారములతో జీవించారు. త్రికాల సంధ్య, ఉదయాన పంచాయతన పూజ అభిషేకాదులు, మధ్యాహ్న సమయంలో భారత, భాగవత, రామాయణాదులను ఇంటి బయట అరుగు మీద కూర్చుని గ్రామ ప్రజలకు అందున్న ధర్మములను, సనాతన జీవన విధానమును వివరించి చెప్పుచుండడివారు. అతిథులకు అభ్యాగతులకు కొరవ ఉండేది కాదు. ఆ కాలములో ఎంతోమంది మహనీయులు కాలినడకన ఆ గ్రామ మీదుగా వెళుతూ వీరి ఇంటిలో కొన్ని రోజులు ఆథిత్యమును పొందెడివారు.</p>
                <p className="highlight-quote">కాలమునంతయు వేదాంత చింతన యందే ఉండి ఆచరణాత్మక బుద్ధితో వ్యవహరించడివారు. ఆయన దగ్గర ఆచరణ లేని వేదాంతము ఉండేది కాదు అని చెప్పడంలో అతిశయోక్తి ఎంత మాత్రమూ లేదు అని తెలిసిన వారందరూ ప్రశంసించెడి వారు.</p>
              </div>
            )}
          </section>

          {/* Chapter III - Gurukrpa */}
          <section id="gurukrpa" className="history-chapter">
            <h2 className="chapter-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.4rem' : '2rem' }}>
              <span className="chapter-num">III</span>{lang === 'en' ? chapters[3].en : chapters[3].te}
            </h2>
            {lang === 'en' ? (
              <div>
                <p>Smt. Chayamma passed away as a Sumaṅgali at Tadimarri village. Following her departure, Sri Venkataramayya increasingly immersed himself in spiritual contemplation.</p>
                <p>During this time, he was blessed with the grace of the revered Jagadguru of the Kanchi Kamakoti Peetham, Sri Sri Sri Chandrasekharendra Saraswati Swamigal (Paramacharya), regarded as a living embodiment of Adi Shankara. He had the rare fortune of serving at the Acharya's feet and receiving the Padukas used by him as sacred Prasada.</p>
                <p>When the Paramacharya gently suggested that he accept Sannyasa, Sri Venkataramayya humbly replied that his youngest son was yet to be married and therefore he could not abandon his responsibilities as a householder.</p>
              </div>
            ) : (
              <div>
                <p>కీ.శే. కుం.సౌ. ఛాయమ్మ గారు ఐదు మంది మగసంతానమును పొంది తరువాత కొలది సంవత్సరములలోనే పసుపు కుంకుమలను వెంటనిడుకొని తాడిమర్రి గ్రామము ( ధర్మవరం తాలూకా, పుట్టపర్తి జిల్లా) నందు చివరి శ్వాసను వదిలిరి. తదనంతరము కీ.శే వేంకటరామయ్య గారు మిగిలిన శేష జీవితమును ఆధ్యాత్మిక సాధనలో కొనసాగించిరి.</p>
                <p>ఈ కాలమందే శ్రీ కాంచీపుర పీఠాధీశ్వరులు, ఆది శంకర స్వరూపులు, నడిచే దేవుడు అని పేరుగాంచిన శ్రీశ్రీశ్రీ చంద్రశేఖరేంద్ర సరస్వతి (పెరియావ) యాతీంద్రుల పాదసేవయు, ఆనందపంక్తి భోజనము, ప్రసాదముగా ఆయన శేష వస్త్రము, ఆయన ధరించిన పాదుకలను పొందిరి. శ్రీ స్వామి వారు కీ.శే. వేంకటరామయ్య గారిని సన్యాశాశ్రమమును గైకొనుమని అడుగగా ఆయన తన ఐదవ కొడుకు వివాహము కాలేదనియు అందువలన సన్యసించుట విలుకాదనియు సుతిమెత్తగా సమాధానమిడిరి. ఈ విధముగా ఆయన తన జన్మను సార్థకము కావించుకున్నారు అని చెప్పడం నిర్వివాదాంశము.</p>
                <p>కీ.శే. వేంకటరామయ్య గారు తన నలుగురు కొడుకులు హైదరాబాదులో స్థిర నివాసములు ఏర్పరచుకున్నప్పటికీ ఆయన సనాతన ధర్మ ఆచార వ్యవహారములను విడిచి వెళ్లక పోవడం గమనార్హం. అందువలన ఆయన నాలుగవ కుమారుడు తండ్రి, మేనత్తల సేవార్థము బడిపంతులు వృత్తిని చేపట్టి పార్లపల్లె కుగ్రామమునందే ఉండి వారి ఆచార వ్యవహారములకు భంగము కలగకుండునట్లు చివరి వరకు ఆ భార్యాభర్తలు సేవించి ధన్యులైనారు.</p>
                <p className="highlight-quote">ఆయన తన చివరి ఘడియలలో అస్వస్థతకు గురి అయ్యి... "శ్రీరామ" నామము జపిస్తూ ప్రమాదీచ నామ సంవత్సర కార్తీక శుద్ధ ఏకాదశి సోమవారము పర్వదినమున అనగా 1973 నవంబరు 5 వ తారీకు శ్రీరామచంద్రుని పాదపద్మములకు తనను తాను సమర్పణము చేసుకొన్నారు.</p>
              </div>
            )}
          </section>

          {/* Chapter IV - Siblings */}
          <section id="siblings" className="history-chapter">
            <h2 className="chapter-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.4rem' : '2rem' }}>
              <span className="chapter-num">IV</span>{lang === 'en' ? chapters[4].en : chapters[4].te}
            </h2>
            <div className="sibling-cards">
              <div className="sibling-card">
                <h4 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.4rem' : '1.2rem' }}>{lang === 'en' ? "Smt. Sheshamma" : "కీ.శే. శేషమ్మ"}</h4>
                <p>{lang === 'en' ? "Widowed young, she spent her life in her brother's home immersed in the remembrance of Sri Rama, attaining Sivaikya one week before Venkataramayya." : "బాల్య వివాహము కాగా చిన్న వయసులోనే వైధవ్యమును పొంది కీ.శే. వేంకటరామయ్య గారి ఇంటియందే చివరి క్షణంవరకు శ్రీరామ చంద్రుల వారి స్మరణ యందే గడిపి కీ.శే. వేంకటరామయ్యగారి కంటే వారం రోజులు ముందు ప్రమాదీచ నామ సంవత్సర కార్తీక శుద్ధ తదియ సోమవారము 1973 అక్టోబరు 23వ తారీకున శివైక్యము చెంది ఉన్నారు."}</p>
              </div>
              <div className="sibling-card">
                <h4 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.4rem' : '1.2rem' }}>{lang === 'en' ? "Smt. Kamakshamma" : "కీ.శే. కుం.సౌ. కామాక్షమ్మ"}</h4>
                <p>{lang === 'en' ? "Married Sri Pedda Vishwanatha Sharma; mother of Sri Bala Vishwanatha Sharma, a Sanskrit scholar at Sri Sathya Sai College." : "అనంతపూర్ వాస్తవ్యుడు కీ.శే. మొదలి. విశ్వనాథ శర్మ గారిని వివాహము చేసుకొని కీ.శే. బాల విశ్వనాథ శర్మ (సంస్కృత పండితులు, సత్య సాయి కాలేజ్, అనంతపురం) గారికి జన్మనిచ్చి కాలాంతరమున సుమంగళిగా జీవితమును చాలించినారు."}</p>
              </div>
              <div className="sibling-card">
                <h4 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.4rem' : '1.2rem' }}>{lang === 'en' ? "Sri Narasayya" : "కీ.శే. నรసయ్యగారు"}</h4>
                <p>{lang === 'en' ? "The younger brother of Venkataramayya, he pursued a teaching career and eventually settled in Bengaluru." : "వైదిక సనాతన ధర్మములు విడువక నే లౌకికమునందు అధ్యాపక వృత్తిని చేపట్టి అనంతపురం జిల్లా, ధర్మవరం పట్టణమున ప్రభుత్వ పాఠశాలలో పనిచేసి పదవీ విరమణ చేశాక వారి పిల్లలతో బెంగుళూరులో స్థిరనివాసము ఏర్పరచుకొని సనాతన ధర్మ జీవితమును సాగించి కాలాంతరమున అక్షయ నామ సంవత్సర ఆశ్వీజ బహుళ పాడ్యమి అనగా 1986 అక్టోబరు 18వ తారీకున శివైక్యము చెంది ఉన్నారు."}</p>
              </div>
            </div>
          </section>

          {/* Chapter V - Jivanmukta */}
          <section id="jivanmukta" className="history-chapter">
            <h2 className="chapter-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.4rem' : '2rem' }}>
              <span className="chapter-num">V</span>{lang === 'en' ? chapters[5].en : chapters[5].te}
            </h2>
            {lang === 'en' ? (
              <div>
                <p>The lineage traces back to Brahmashri Valiveru Venkatarama Bhotlu. Although he lived as a householder, Venkatarama Bhotlu attained deep detachment (Vairāgya) and became firmly established in the realization of Brahman.</p>
                <p className="highlight-quote">Venkatarama Bhotlu entered Sajīva Samādhi on the banks of the Chitravati River on the sacred day of Mārgaśīrṣa Śuddha Vidiyā.</p>
                <p>Since he had no children, he adopted Chinna Narasayya, thereby continuing the lineage. From that time onward, the study of the Vedas and Vedāṅgas continued as a living tradition within the family.</p>
              </div>
            ) : (
              <div>
                <p>కీ.శే. వేంకటరామయ్య గారి తండ్రి కీ.శే.లక్ష్మీ నరసయ్య గారు. వీరు ముగ్గురు అన్నదమ్ములు. కీ.శే. లక్ష్మీ నరసయ్య గారి తండ్రి గారు కీ.శే. చిన్న నరసయ్య గారు. బ్రహ్మశ్రీ. వలివేరు వేంకటరామా బొట్లు గారు తనకు సంతానము లేకపోవడం వలన తన సోదరుడు కీ.శే. అశ్వత్థమయ్య గారి చిన్న కుమారుడు అయిన కీ.శే. చిన్న నరసయ్య గారిని దత్తు తీసుకున్నారు.</p>
                <p className="highlight-quote">బ్రహ్మశ్రీ వలివేరు వేంకటరామా బొట్లు గారు గృహస్థు అయినప్పటికీ తీవ్ర వైరాగ్యమును పొంది, బ్రహ్మనిష్ఠుడై జీవన్ముక్త స్థితిని పొంది పార్లపల్లె గ్రామ చిత్రావతి నది ఆవలి ఒడ్డున మార్గశీర్ష శుద్ధ విదియ నాడు సజీవ సమాధిని పొంది ఉన్నారు.</p>
                <p>ఆ తర్వాత కాలమున వలివేరు వంశమున ప్రతి తరమునందును వేదవేదాంగముల అధ్యయనము అధ్యాపనము చేయుట పరిపాటిగా ఉండినది.</p>
              </div>
            )}
          </section>

          {/* Chapter VI - Temple */}
          <section id="temple" className="history-chapter">
            <h2 className="chapter-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.4rem' : '2rem' }}>
              <span className="chapter-num">VI</span>{lang === 'en' ? chapters[6].en : chapters[6].te}
            </h2>
            {lang === 'en' ? (
              <div>
                <p>In 2019, the present generation constructed a temple at the samadhi site and installed a Narmada Bāṇaliṅgam as Sri Omkareshwara Swamy on Kārtika Śuddha Saptami.</p>
                <p>Since then, the temple has become a center of spiritual activity, with regular worship and Anna Santarpaṇa. Situated on the Anantapur-Kadapa highway, the shrine has gained great prominence.</p>
              </div>
            ) : (
              <div>
                <p>విశేషం ఏమిటంటే కీ.శే. వేంకటరామయ్య గారి నాలుగవ కుమారుడు కీ.శే. లక్ష్మీ నరసయ్య గారు మార్గశిర శుద్ధ విదియ నాడు జన్మించడమే.</p>
                <p>ఐదవ తరము వారు గుర్తించునప్పటికి జీవ సమాధిని పొందిన చోట ఎత్తుగా ఒక అరుగు నిర్మించబడి ఉండినది. కీ.శే. వేంకటరామయ్య గారి 4వ కుమారుడు కీ.శే. లక్ష్మీ నరసయ్య గారి కాలమున వారు కొంత రొక్కమును వెచ్చించి ఆ సమాధి అరుగును బాగు చేయించి నారు.</p>
                <p>నూతనముగా ఆలయమును నిర్మించి, అందు ఓంకారేశ్వర స్వామిని (నర్మదా బాణలింగమును) స్వస్తిశ్రీ వికారినామ సంవత్సర కార్తీక శుద్ధ సప్తమి అనగా 03.11.2019 భానువారము ప్రతిష్టను చేసి, ఇప్పటికీ పూజాదికములు నిర్వహించడం జరుగుతున్నది.</p>
                <p>ఈ దేవాలయము అనంతపురం కడప హైవే మీద ఉండడం వలన బహుళ ప్రాచుర్యమును పొంది, ఎంతోమంది దేవాలయమును సందర్శించి, ఎన్నో రకములైన కోర్కెలను ఈడేర్చుకొనుచున్నారు.</p>
              </div>
            )}
          </section>

          {/* Chapter VII - Vision */}
          <section id="vision" className="history-chapter">
            <h2 className="chapter-title" style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '2.4rem' : '2rem' }}>
              <span className="chapter-num">VII</span>{lang === 'en' ? chapters[7].en : chapters[7].te}
            </h2>
            {lang === 'en' ? (
              <div>
                <p>In 2025, following the instructions of the current Acharya of the Kanchi Kamakoti Peetham, Sri Sri Sri Vijayendra Saraswati Swamigal (Bala Periyava), the Aradhana began to be conducted strictly according to scriptural tradition.</p>
                <p>In 2026, we resolve to expand the temple facilities, including a Yajñaśālā and residential quarters for the priest.</p>
                <p className="highlight-quote">Seeking his Anugraha so that our lives may find fulfillment at his sacred feet.</p>
                
                {/* Final Shloka Block */}
                <div style={{ marginTop: '40px', padding: '30px', background: '#fff9e6', border: '2px solid #f1c40f', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                  <p style={{ fontSize: '1.4rem', color: '#3d2b1f', fontWeight: 'bold', marginBottom: '10px' }}>
                    “यत्र समाधिस्थो महायोगी, तत्र शिवानुग्रहः नित्यः प्रवहति ॥”
                  </p>
                  <p style={{ fontSize: '1.1rem', color: '#555', fontStyle: 'italic' }}>
                    Where the great yogi abides in Jeeva Samadhi, there the grace of Lord Shiva flows eternally.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <p>2025 లో శ్రీ కాంచీపుర పీఠాధీశ్వరులు శ్రీశ్రీశ్రీ విజయేంద్ర సరస్వతి (బాల పెరియావ) యాతీంద్రుల సూచనలను అనుసరించి వారు సెలవిచ్చిన విధముగా ఆరాధనను జీవ సమాధి వద్ద శాస్త్రోక్తముగా, శ్రద్ధతో నిర్వహించగలగడము యెల్లరకు ముదావహము.</p>
                <p>బ్రహ్మశ్రీ వలివేరు వేంకటరామా బొట్లు గారి ఆరవ తరమువారైన మేము 2026 సంవత్సరమున భక్తులకు సదుపాయములు కల్పించ వలెనని నిశ్చయించి ఆలయము ప్రక్కనే ఒక పెద్ద యజ్ఞశాల, వస్తువులను భద్రపరచే గది, ఆలయ పూజారికి వసతి గృహము, స్నానగదులు నిర్మించ తలపెట్టి కార్యక్రమమునకు పూనుకొనుచున్నాము.</p>
                <p className="highlight-quote">ఈ కార్యక్రమమునకు బ్రహ్మశ్రీ వలివేరు వేంకటరామా బొట్లు గారు సకలవిధముల మావెంటఉండి, మమ్మల్ని నడిపించాలని సదా ఆయన పాద పద్మములను కృతజ్ఞతా భావముతో ఆశ్రయించుచున్నాము.</p>
                
                {/* Final Shloka Block (Telugu) */}
                <div style={{ marginTop: '40px', padding: '30px', background: '#fff9e6', border: '2px solid #f1c40f', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                  <p style={{ fontSize: '1.5rem', color: '#3d2b1f', fontWeight: 'bold', marginBottom: '10px' }}>
                    “యత్ర సమాధిస్థో మహాయోగీ, తత్ర శివానుగ్రహః నిత్యః ప్రవహతి ॥”
                  </p>
                  <p style={{ fontSize: '1.2rem', color: '#555' }}>
                    మహాయోగి జీవసమాధిలో ఉన్నచోట, శివుని అనుగ్రహం నిత్యం ప్రవహిస్తుంది.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Footer / Address Block */}
          <div className="history-footer-block">
            <p className="history-temple-name" style={currentHeaderFont}>
              {lang === 'en' ? 'Sri Omkareshwara Swamy Devasthanam' : 'శ్రీ ఓంకారేశ్వర స్వామి దేవస్థానము'}
            </p>
            <p>
              {lang === 'en' 
                ? 'Omkara Kshetram, Paarnapalli Village, Kadapa District, Andhra Pradesh — 516396' 
                : 'ఓంకార క్షేత్రము, పార్నపల్లి గ్రామము, లింగాల మండలము, కడప జిల్లా, ఆంధ్రప్రదేశ్, పిన్ కోడ్: 516396'}
            </p>
          </div>
        </div>
      </div>

      {/* Comprehensive Footer Addition */}
      <footer style={{ background: '#3d2b1f', color: '#f5f5f5', padding: '60px 20px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div className="footer-col">
            <h4 style={{ ...currentHeaderFont, color: 'white', marginBottom: '20px' }}>{lang === 'en' ? 'About Seva Trust' : 'సేవా ట్రస్ట్ గురించి'}</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'justify' }}>
              {lang === 'en' 
                ? 'Dedicated to the sacred service of Sri Omkareswara Swamy Temple, Paarnapalli. The Trust preserves temple traditions, promotes Sanatana Dharma, and serves devotees and seekers.' 
                : 'పార్నపల్లిలోని శ్రీ ఓంకారేశ్వర స్వామి ఆలయ అభివృద్ధికి మరియు పవిత్ర సేవకు అంకితం చేయబడింది. సనాతన ధర్మ ప్రచారానికి మరియు ముముక్షువుల శ్రేయస్సుకు ఈ సంస్థ కృషి చేస్తుంది.'}
            </p>
            <p style={{ fontSize: '0.9rem', fontWeight: 'bold', marginTop: '15px' }}>Reg. No.: 13/2026</p>
          </div>
          <div className="footer-col">
            <h4 style={{ ...currentHeaderFont, color: 'white', marginBottom: '20px' }}>{lang === 'en' ? 'Quick Links' : 'త్వరిత లింకులు'}</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              {['Invocation', 'Roots', 'Vision'].map((link, idx) => (
                <li key={idx} style={{marginBottom: '8px'}}><button onClick={() => scrollTo(link.toLowerCase())} style={{background: 'none', border: 'none', color: '#f5f5f5', cursor: 'pointer'}}>{link}</button></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ ...currentHeaderFont, color: 'white', marginBottom: '20px' }}>{lang === 'en' ? 'Connect With Us' : 'మమ్మల్ని అనుసరించండి'}</h4>
            <div style={{ display: 'flex', gap: '15px' }}>
               {['FB', 'IG', 'X', 'YT', 'IN'].map(icon => (
                 <div key={icon} style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>{icon}</div>
               ))}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '40px auto 0', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '0.85rem', color: '#bdc3c7' }}>
          <p>© 2026 Brahmashri Valiveru VenkataRama Bhotulu Trust. {lang === 'en' ? 'All rights reserved.' : 'సర్వ హక్కులు ప్రత్యేకించబడినవి.'}</p>
          <p style={{marginTop: '10px'}}><span style={{color: 'orange', cursor: 'pointer'}}>Privacy Policy</span> | <span style={{color: 'orange', cursor: 'pointer'}}>Terms of Service</span></p>
        </div>
      </footer>
    </main>
  );
}