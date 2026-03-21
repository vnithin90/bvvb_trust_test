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
    { id: 'roots', en: 'Roots of the Lineage', te: 'వలివేరు వంశ మూలాలు' },
    { id: 'acharana', en: 'A Life of Truth', te: 'ఆచరణాత్మక వేదాంతం' },
    { id: 'gurukrpa', en: 'Grace of the Acharya', te: 'కాంచీ పరమాచార్యుల అనుగ్రహం' },
    { id: 'siblings', en: 'Family Details', te: 'తోబుట్టువుల విశేషాలు' },
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
                <p>Parnapalli is a village situated on the banks of the Chitravati River in Pulivendula taluk of Kadapa district, Andhra Pradesh. In this village lived the late Sri Venkataramayya, a brāhmaṇa of the śrotriya, vaidika, and velanāṭi tradition belonging to the gautama-gotra, bearing the family name Valiveru. A learned Vedic scholar and ritual practitioner, he sustained his family through traditional village priesthood.</p>
                <p>The family deity (gṛha-daiva) of the Valiveru household is Sri Lakshmi Narasimha Swamy of Doddadalavatam (Madhugiri taluk, Karnataka). At the same time, the worship of Sri Ramachandra Murthy as the cherished iṣṭa-daiva has long been a continuing tradition within the family.</p>
                <p>Sri Venkataramayya and his dharmapatni Smt. Chayamma were blessed with five sons and no daughters. He had two elder sisters — Smt. Chennakishtamma and Smt. Sheshamma — and a younger brother, Sri Narasayya. In the course of time, Sri Narasayya was adopted as the son of his paternal uncle, Sri Sitaramayya.</p>
              </div>
            ) : (
              <div>
                <p>అది ఆంధ్ర ప్రదేశ్ లోని కడపజిల్లా పులివెందుల తాలూకాలోని చిత్రావతి నది ఏటి ఒడ్డున పార్నపల్లి గ్రామం. అందు కీ.శే. వేంకటరామయ్య గారు అను శ్రోత్రియ, వైదిక, వెలనాటి వారు, గౌతమస గోత్రీకులు, వలివేరు ఇంటిపేరుగా గల బ్రాహ్మణుడు. వారి ఇంటి దేవుడు శ్రీ లక్ష్మీనరసింహస్వామి (దొడ్డదాళవటము, మధుగిరి తాలూకా, కర్ణాటక రాష్ట్రము). వలివేరు వంశమునకు ఇష్టదైవముగా శ్రీరామచంద్రమూర్తిని కొలుచుకొనుట ఇప్పటికినీ పరిపాటి.</p>
                <p>కీ.శే. వేంకటరామయ్య, ధర్మపత్ని కీ.శే. కుం.సౌ. ఛాయమ్మ దంపతులకు ఐదు మంది కుమారులు. కుమార్తెలు లేరు. ఆయనకు ఇద్దరు అక్కగారు కీ.శే. కుం.సౌ చెన్నకిష్టమ్మ, కీ.శే. శేషమ్మ, మరియు కీ.శే. నరసయ్యగారు తమ్ముడు. కీ.శే. నరసయ్య గారు కాలాంతరమున తన పినతండ్రి సీతారామయ్య గారికి దత్తపుత్రుడైనారు.</p>
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
                <p>Sri Venkataramayya lived a life of simplicity and contentment despite material poverty. Having studied the vedās thoroughly, he upheld the principles of sanātana-dharma with sincerity and discipline. He performed trikāla-sandhyā, morning pañcāyatana-pūjā, and abhiṣeka with total devotion.</p>
                <p>During the afternoons, he would sit on the front verandah of his home and recite the Mahābhārata, Bhāgavata, Rāmāyaṇa, and other sacred texts, explaining their teachings to the villagers. His home was always open to guests; in those days, many wandering monks and holy men travelled on foot through the region, and several among them would stay for days in his home and receive his hospitality.</p>
                <p className="highlight-quote">Those who knew him often remarked that there was no vedānta in him that was not lived in practice; his life itself was the teaching.</p>
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
                <p>Smt. Chayamma passed away on Monday, April 9, 1951, taking her pasupu-kuṅkuma with her. Following her departure, Sri Venkataramayya increasingly immersed himself in spiritual contemplation.</p>
                <p>During this time, he was blessed with the grace of the revered jagadguru of the Kanchi Kamakoti Peetham, Sri Sri Sri Chandrasekharendra Saraswati (Periyava), regarded as a living embodiment of Adi Shankara. He had the rare fortune of serving at the ācārya’s feet, partaking in meals in his presence (ānanda-paṅkti-bhojana), and receiving the śeṣa-vastra (the cloth worn by the Acharya) and the pādukās (sanctified sandals) used by him as sacred Prasāda.</p>
                <p>When the ācārya suggested that he accept Sannyāsa, he humbly declined to fulfill his responsibilities as a householder (gṛhastha). While his four sons settled in Hyderabad, he remained in Parnapalli to uphold his dhārmic customs. His fourth son and daughter-in-law remained to serve him until the end.</p>
                <p className="highlight-quote">At the age of 81, while chanting "Sri Rama," he offered himself to the feet of the Lord on Monday, November 5, 1973.</p>
              </div>
            ) : (
              <div>
                <p>కీ.శే. కుం.సౌ. ఛాయమ్మ గారు ఐదు మంది మగసంతానమును పొంది తరువాత కొలది సంవత్సరములలోనే పసుపు కుంకుమలను వెంటనిడుకొని తాడిమర్రి గ్రామమునందు ఖర నామ సంవత్సర చైత్ర శుద్ధ తదియ సోమవారము అనగా 1951 ఏప్రిల్ 9 తారీకు చివరి శ్వాసను వదిలిరి. తదనంతరము కీ.శే వేంకటరామయ్య గారు ఆధ్యాత్మిక సాధనలో కొనసాగించిరి.</p>
                <p>ఈ కాలమందే శ్రీ కాంచీపుర పీఠాధీశ్వరులు శ్రీశ్రీశ్రీ చంద్రశేఖరేంద్ర సరస్వతి (పెరియావ) యాతీంద్రుల పాదసేవయు, ఆనందపంక్తి భోజనము, ప్రసాదముగా ఆయన ధరించిన పాదుకలను పొందిరి. శ్రీ స్వామి వారు సన్యాశాశ్రమమును గైకొనుమని అడుగగా తన ఐదవ కొడుకు వివాహము కాలేదని సుతిమెత్తగా సమాధానమిడిరి.</p>
                <p>ఆయన నాలుగవ కుమారుడు తండ్రి, మేనత్తల సేవార్థము బడిపంతులు వృత్తిని చేపట్టి పార్లపల్లె కుగ్రామమునందే ఉండి చివరి వరకు ఆ భార్యాభర్తలు సేవించి ధన్యులైనారు. ఆయన తన 81 సంవత్సరముల వయస్సులో "శ్రీరామ" నామము జపిస్తూ ప్రమాదీచ నామ సంవత్సర కార్తీక శుద్ధ ఏకాదశి సోమవారము అనగా 1973 నవంబరు 5 వ తారీకు శ్రీరామచంద్రుని పాదపద్మములకు తనను తాను సమర్పణము చేసుకొన్నారు.</p>
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
                <p>{lang === 'en' ? "Widowed young, she spent her life in her brother's home immersed in the remembrance of Sri Rama. She attained śivaikya (merger with the Divine) on Monday, October 23, 1973, one week before Venkataramayya." : "చిన్న వయసులోనే వైధవ్యమును పొంది కీ.శే. వేంకటరామయ్య గారి ఇంటియందే చివరి క్షణంవరకు శ్రీరామ చంద్రుల వారి స్మరణ యందే గడిపి కీ.శే. వేంకటరామయ్యగారి కంటే వారం రోజులు ముందు ప్రమాదీచ నామ సంవత్సర కార్తీక శుద్ధ తదియ సోమవారము 1973 అక్టోబరు 23వ తారీకున శివైక్యము చెంది ఉన్నారు."}</p>
              </div>
              <div className="sibling-card">
                <h4 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.4rem' : '1.2rem' }}>{lang === 'en' ? "Smt. Kamakshamma" : "కీ.శే. కుం.సౌ. కామాక్షమ్మ"}</h4>
                <p>{lang === 'en' ? "Married Sri Modali Vishwanatha Sharma of Anantapur; mother of Sri Bala Vishwanatha Sharma, a renowned Sanskrit scholar at Sri Sathya Sai College. She concluded her life as a sumaṅgalī." : "అనంతపూర్ వాస్తవ్యుడు కీ.శే. మొదలి. విశ్వనాథ శర్మ గారిని వివాహము చేసుకొని కీ.శే. బాల విశ్వనాథ శర్మ (సంస్కృత పండితులు, సత్య సాయి కాలేజ్, అనంతపురం) గారికి జన్మనిచ్చి కాలాంతరమున సుమంగళిగా జీవితమును చాలించినారు."}</p>
              </div>
              <div className="sibling-card">
                <h4 style={{ ...currentHeaderFont, fontSize: lang === 'te' ? '1.4rem' : '1.2rem' }}>{lang === 'en' ? "Sri Narasayya" : "కీ.శే. నరసయ్యగారు"}</h4>
                <p>{lang === 'en' ? "Serving as a government teacher in Dharmavaram, he later settled in Bengaluru. He attained śivaikya on Saturday, October 18, 1986." : "లౌకికమునందు అధ్యాపక వృత్తిని చేపట్టి అనంతపురం జిల్లా, ధర్మవరం ప్రభుత్వ పాఠశాలలో పనిచేసి పదవీ విరమణ చేశాక బెంగుళూరులో స్థిరనివాసము ఏర్పరచుకొని 1986 అక్టోబరు 18వ తారీకున శివైక్యము చెంది ఉన్నారు."}</p>
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
                <p>The lineage traces back to Brahmashri Valiveru Venkatarama Bhotlu, son of late Sri Chinna Narasayya. Since he had no children, he adopted Chinna Narasayya (the son of his brother Sri Ashwatthamayya). Although he lived as a householder, Venkatarama Bhotlu attained deep detachment (vairāgya) and became a brahma-niṣṭha.</p>
                <p className="highlight-quote">Venkatarama Bhotlu entered sajīva-samādhi on the opposite bank of the Chitravati River on the sacred day of mārgaśīrṣa-śuddha-vidiyā.</p>
                <p>From the family genealogy (vaṃśavṛkṣa) documented by Sri Lakshmi Narasayya, we are known as the fifth and sixth generations. Since then, the study and teaching of the vedās and vedāṅgās has continued as a living tradition within the family.</p>
              </div>
            ) : (
              <div>
                <p>కీ.శే. వేంకటరామయ్య గారి తండ్రి కీ.శే.లక్ష్మీ నరసయ్య గారు. కీ.శే. లక్ష్మీ నరసయ్య గారి తండ్రి గారు కీ.శే. చిన్న నరసయ్య గారు. బ్రహ్మశ్రీ. వలివేరు వేంకటరామా బొట్లు గారు తన సోదరుడు కీ.శే. అశ్వత్థమయ్య గారి చిన్న కుమారుడు అయిన కీ.శే. చిన్న నరసయ్య గారిని దత్తు తీసుకున్నారు.</p>
                <p className="highlight-quote">బ్రహ్మశ్రీ వలివేరు వేంకటరామా బొట్లు గారు తీవ్ర వైరాగ్యమును పొంది, బ్రహ్మనిష్ఠుడై జీవన్ముక్త స్థితిని పొంది పార్లపల్లె గ్రామ చిత్రావతి నది ఆవలి ఒడ్డున మార్గశీర్ష శుద్ధ విదియ నాడు సజీవ సమాధిని పొంది ఉన్నారు.</p>
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
                <p>Sri Lakshmi Narasayya (the fourth son of Sri Venkataramayya) was born on the same sacred day of mārgaśīrṣa-śuddha-vidiyā. During his time, he used his own resources to repair the stone platform at the samādhi site where farmers would often rest.</p>
                <p>In 2019, the present generation constructed a new temple and consecrated a narmada-bāṇaliṅgam as Sri Omkareshwara Swamy on Sunday, November 3, 2019. Since then, it has become a center for anna-santarpaṇa and annual brahmotsavams conducted grandly every year up to 2024.</p>
              </div>
            ) : (
              <div>
                <p>విశేషం ఏమిటంటే కీ.శే. వేంకటరామయ్య గారి నాలుగవ కుమారుడు కీ.శే. లక్ష్మీ నరసయ్య గారు మార్గశిర శుద్ధ విదియ నాడు జన్మించడమే. వారు కొంత రొక్కమును వెచ్చించి ఆ సమాధి అరుగును బాగు చేయించి నారు.</p>
                <p>నూతనముగా ఆలయమును నిర్మించి, అందు ఓంకారేశ్వర స్వామిని (నర్మదా బాణలింగమును) స్వస్తిశ్రీ వికారినామ సంవత్సర కార్తీక శుద్ధ సప్తమి అనగా 03.11.2019 భానువారము ప్రతిష్టను చేసి, ఇప్పటికీ పూజాదికములు నిర్వహించడం జరుగుతున్నది.</p>
                <p>స్వస్తిశ్రీ క్రోధి నామ సంవత్సరము వరకు అనగా క్రి.శ. 2024 వరకు ప్రతి సంవత్సరము మార్గశిర శుద్ధ విదియ నాడు ఆలయ బ్రహ్మోత్సవములు గా గొప్పగా నిర్వహింపబడుచుండెడివి.</p>
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
                <p>In 2025, following the instructions of the current ācārya of Kanchi, Sri Sri Sri Vijayendra Saraswati (Bala Periyava), the ārādhana was established at the jīva-samādhi according to the śāstras. Since the consecration, the Saint has expressed himself through many divine plays (līlās) and is leading many devotees.</p>
                <p>In 2026, we resolve to expand the temple facilities, including a large yajñaśālā, a storage room, a residence for the temple priest, and bathrooms.</p>
                <p className="highlight-quote">We seek the shelter of his lotus feet with gratitude, praying that Brahmashri Valiveru Venkatarama Bhotlu provides his special grace (anugraha) and makes our lives fulfilled.</p>
                
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
                <p>2025 లో శ్రీ కాంచీపుర పీఠాధీశ్వరులు శ్రీశ్రీశ్రీ విజయేంద్ర సరస్వతి (బాల పెరియావ) యాతీంద్రుల సూచనలను అనుసరించి ఆరాధనను జీవ సమాధి వద్ద శాస్త్రోక్తముగా నిర్వహించగలగడము యెల్లరకు ముదావహము.</p>
                <p>ఆరవ తరమువారైన మేము 2026 సంవత్సరమున ఒక పెద్ద యజ్ఞశాల, వసతి గృహము, స్నానగదులు నిర్మించ తలపెట్టి కార్యక్రమమునకు పూనుకొనుచున్నాము.</p>
                <p className="highlight-quote">ఈ కార్యక్రమమునకు బ్రహ్మశ్రీ వలివేరు వేంకటరామా బొట్లు గారు సకలవిధముల మావెంటఉండి, విశేష అనుగ్రహము అందించి, మా జన్మలు కృతార్థమొనరింప వలెనని సదా ఆయన పాద పద్మములను ఆశ్రయించుచున్నాము.</p>
                
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
                ? 'Omkara Kshetram, Parnapalli Village, Kadapa District, Andhra Pradesh — 516396' 
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
                ? 'Dedicated to the sacred service of Sri Omkareswara Swamy Temple, Parnapalli. The Trust preserves temple traditions, promotes Sanatana Dharma, and serves devotees.' 
                : 'పార్నపల్లిలోని శ్రీ ఓంకారేశ్వర స్వామి ఆలయ అభివృద్ధికి మరియు పవిత్ర సేవకు అంకితం చేయబడింది. సనాతన ధర్మ ప్రచారానికి మరియు ముముక్షువుల శ్రేయస్సుకు ఈ సంస్థ కృషి చేస్తుంది.'}
            </p>
            <p style={{ fontSize: '0.9rem', fontWeight: 'bold', marginTop: '15px' }}>Reg. No.: 13/2026</p>
          </div>
          <div className="footer-col">
            <h4 style={{ ...currentHeaderFont, color: 'white', marginBottom: '20px' }}>{lang === 'en' ? 'Quick Links' : 'త్వరిత లింకులు'}</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              {['Invocation', 'Roots', 'Vision'].map((link, idx) => (
                <li key={idx} style={{marginBottom: '8px'}}><button onClick={() => scrollTo(link.toLowerCase())} style={{background: 'none', border: 'none', color: '#f5f5f5', cursor: 'pointer', textDecoration: 'underline'}}>{link}</button></li>
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
          <p>© 2026 Brahmashri Valiveru VenkataRama Bhotlu Trust. {lang === 'en' ? 'All rights reserved.' : 'సర్వ హక్కులు ప్రత్యేకించబడినవి.'}</p>
        </div>
      </footer>
    </main>
  );
}
