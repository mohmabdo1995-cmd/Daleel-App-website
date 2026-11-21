import { MedicalTerm, MedicalTermSource } from '../types';
import { buildMedicalSearchTokens, slugifyMedicalTermId } from '../services/medicalSearch';
import { EXPANDED_MEDICAL_TERMS } from './medicalTerms';

export const BUILT_IN_MEDICAL_SPECIALTIES: string[] = [
  'Anatomy',
  'Physiology',
  'Histology',
  'Embryology',
  'Biochemistry',
  'Pathology',
  'Microbiology',
  'Pharmacology',
  'Medicine',
  'Surgery',
  'Pediatrics',
  'Obstetrics & Gynecology',
  'Psychiatry',
  'Neurology',
  'Cardiology',
  'Hematology',
  'Immunology',
  'Radiology',
  'Medical Genetics',
  'Clinical Terminology',
  'Medical Procedures',
  'Laboratory Medicine',
  'Oncology',
  'Dermatology',
  'Ophthalmology',
  'ENT',
  'Endocrinology',
  'Gastroenterology',
  'Nephrology',
];

export const MEDICAL_SPECIALTY_AR_LABELS: Record<string, string> = {
  Anatomy: 'علم التشريح',
  Physiology: 'وظائف الأعضاء',
  Histology: 'علم الأنسجة',
  Embryology: 'علم الأجنة',
  Biochemistry: 'الكيمياء الحيوية',
  Pathology: 'علم الأمراض',
  Microbiology: 'الأحياء الدقيقة',
  Pharmacology: 'علم الأدوية',
  Medicine: 'الطب الباطني',
  Surgery: 'الجراحة',
  Pediatrics: 'طب الأطفال',
  'Obstetrics & Gynecology': 'النساء والتوليد',
  Psychiatry: 'الطب النفسي',
  Neurology: 'طب الأعصاب',
  Cardiology: 'أمراض القلب',
  Hematology: 'أمراض الدم',
  Immunology: 'علم المناعة',
  Radiology: 'الأشعة التشخيصية',
  'Medical Genetics': 'الوراثة الطبية',
  'Clinical Terminology': 'المصطلحات السريرية',
  'Medical Procedures': 'الإجراءات الطبية',
  'Laboratory Medicine': 'الطب المخبري',
  Oncology: 'علم الأورام',
  Dermatology: 'الأمراض الجلدية',
  Ophthalmology: 'طب العيون',
  ENT: 'الأنف والأذن والحنجرة',
  Endocrinology: 'الغدد الصماء',
  Gastroenterology: 'أمراض الجهاز الهضمي',
  Nephrology: 'أمراض الكلى',
};

interface RawSeedTerm {
  id?: string;
  term_en: string;
  term_ar: string;
  synonyms: string[];
  pronunciation: string;
  ipa: string;
  english_definition: string;
  arabic_definition: string;
  specialty: string;
  sources: MedicalTermSource[];
}

const VERIFIED_DATE = '2026-11-21';
const VERIFIED_ISO = '2026-11-21T00:00:00.000Z';

const RAW_MEDICAL_TERMS: RawSeedTerm[] = [
  // ===================== 1. ANATOMY =====================
  {
    term_en: 'Myocardium',
    term_ar: 'عضلة القلب',
    synonyms: ['Cardiac muscle', 'Heart muscle', 'العضلة القلبية'],
    pronunciation: 'my-oh-KAR-dee-um',
    ipa: '/ˌmaɪ.əˈkɑːr.di.əm/',
    english_definition:
      'The thick middle muscular layer of the heart wall composed of specialized involuntary striated cardiac muscle cells responsible for rhythmic contraction and pumping blood.',
    arabic_definition:
      'الطبقة العضلية الوسطى والسميكة في جدار القلب (Myocardium)، وتتكوّن من خلايا عضلية قلبية مخططة لا إرادية تنقبض بانتظام لضخ الدم إلى الرئتين وبقية أنحاء الجسم.',
    specialty: 'Anatomy',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/myocardium',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'MedlinePlus – Heart Anatomy',
        url: 'https://medlineplus.gov/ency/imagepages/19612.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Pericardium',
    term_ar: 'التأمور (غلاف القلب)',
    synonyms: ['Pericardial sac', 'غشاء القلب'],
    pronunciation: 'per-ih-KAR-dee-um',
    ipa: '/ˌpɛr.ɪˈkɑːr.di.əm/',
    english_definition:
      'A double-layered fibroserous sac that surrounds the heart and the roots of the great blood vessels, providing physical protection, lubrication, and anchoring within the mediastinum.',
    arabic_definition:
      'كيس ليفي مصلي مزدوج الطبقات يحيط بالقلب وجذور الأوعية الدموية الكبرى (Pericardium)، ويعمل على حماية القلب وتثبيته داخل المنصف وتقليل الاحتكاك أثناء انقباضه.',
    specialty: 'Anatomy',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/pericardium',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'MedlinePlus – Pericardial Disorders',
        url: 'https://medlineplus.gov/pericardialdisorders.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Diaphragm',
    term_ar: 'الحجاب الحاجز',
    synonyms: ['Thoracic diaphragm', 'الحجاب التنفسي'],
    pronunciation: 'DY-uh-fram',
    ipa: '/ˈdaɪ.ə.fræm/',
    english_definition:
      'A dome-shaped musculotendinous partition separating the thoracic cavity from the abdominal cavity and serving as the primary muscle of inspiration.',
    arabic_definition:
      'حاجز عضلي وتري مقبّب الشكل يفصل التجويف الصدري عن التجويف البطني (Diaphragm)، ويُعدّ العضلة الرئيسية المسؤولة عن عملية الشهيق والتنفس.',
    specialty: 'Anatomy',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/diaphragm',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'MedlinePlus – Diaphragm and Lungs',
        url: 'https://medlineplus.gov/ency/imagepages/19380.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Mediastinum',
    term_ar: 'المنصف (الحيّز الصدري الأوسط)',
    synonyms: ['Mediastinal space', 'الحيز المنصفي'],
    pronunciation: 'mee-dee-uh-STY-num',
    ipa: '/ˌmiː.di.əˈstaɪ.nəm/',
    english_definition:
      'The central compartment of the thoracic cavity situated between the left and right pleural sacs, housing the heart, great vessels, trachea, esophagus, and thymus.',
    arabic_definition:
      'الحيز المركزي في التجويف الصدري الواقع بين كيسَي الجنب الأيمن والأيسر (Mediastinum)، ويضم القلب والأوعية الدموية الكبرى والقصبة الهوائية والمريء والغدة التيموسية.',
    specialty: 'Anatomy',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/mediastinum',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'MedlinePlus – Mediastinal Tumor Overview',
        url: 'https://medlineplus.gov/ency/article/001086.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 2. PHYSIOLOGY =====================
  {
    term_en: 'Homeostasis',
    term_ar: 'الاستتباب (التوازن الداخلي)',
    synonyms: ['Internal equilibrium', 'التوازن الفسيولوجي'],
    pronunciation: 'hoh-mee-oh-STAY-sis',
    ipa: '/ˌhoʊ.mi.oʊˈsteɪ.sɪs/',
    english_definition:
      'The dynamic self-regulating process by which biological systems maintain internal physiological stability, such as temperature, pH, and electrolyte balance, despite external fluctuations.',
    arabic_definition:
      'العملية التنظيمية الذاتية المستمرة التي تحافظ بها الكائنات الحية على ثبات البيئة الداخلية للجسم مثل درجة الحرارة ودرجة الحموضة (pH) وتوازن الأملاح رغم تغير الظروف الخارجية.',
    specialty: 'Physiology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/homeostasis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Action Potential',
    term_ar: 'جهد الفعل العصبي',
    synonyms: ['Nerve impulse', 'السيال العصبي', 'Spike potential'],
    pronunciation: 'AK-shun poh-TEN-shul',
    ipa: '/ˈæk.ʃən pəˈtɛn.ʃəl/',
    english_definition:
      'A rapid, transient, all-or-none reversal of membrane electrical polarity in excitable cells such as neurons and myocytes driven by voltage-gated sodium and potassium channels.',
    arabic_definition:
      'انقلاب كهربائي سريع ومؤقت في فرق الجهد عبر غشاء الخلية القابلة للاستثارة (Action Potential) مثل العصبونات والخلايا العضلية، وينشأ عن فتح قنوات الصوديوم والبوتاسيوم المبوبة بالجهد.',
    specialty: 'Physiology',
    sources: [
      {
        name: 'NCBI Bookshelf – Neurophysiology Action Potential',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK538143/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Cardiac Output',
    term_ar: 'النتاج القلبي',
    synonyms: ['CO', 'حجم الضخ القلبي في الدقيقة'],
    pronunciation: 'KAR-dee-ak OWT-put',
    ipa: '/ˈkɑːr.di.æk ˈaʊt.pʊt/',
    english_definition:
      'The total volume of blood pumped by each ventricle of the heart per minute, mathematically calculated as the product of heart rate and stroke volume (CO = HR × SV).',
    arabic_definition:
      'إجمالي حجم الدم الذي يضخه كل بطين في القلب خلال دقيقة واحدة (Cardiac Output)، ويُحسب بضرب معدل نبض القلب (Heart Rate) في حجم الضربة (Stroke Volume).',
    specialty: 'Physiology',
    sources: [
      {
        name: 'NCBI Bookshelf – Physiology, Cardiac Output',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK470455/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Glomerular Filtration Rate',
    term_ar: 'معدل الترشيح الكبيبي',
    synonyms: ['GFR', 'معدل الرشح الكلوي'],
    pronunciation: 'gloh-MER-yuh-lar fil-TRAY-shun rayt',
    ipa: '/ɡloʊˈmɛr.jə.lər fɪlˈtreɪ.ʃən reɪt/',
    english_definition:
      'The volume of plasma filtered across the renal glomerular capillaries into Bowman capsule per unit time, serving as the primary clinical measure of kidney filtration function.',
    arabic_definition:
      'حجم البلازما المرشّح عبر الشعيرات الدموية الكبيبية في الكلى إلى محفظة بومان في الدقيقة الواحدة (GFR)، ويُعد المؤشر السريري الأساسي لتقييم كفاءة وظائف الكلى.',
    specialty: 'Physiology',
    sources: [
      {
        name: 'MedlinePlus – Glomerular Filtration Rate (GFR) Test',
        url: 'https://medlineplus.gov/lab-tests/glomerular-filtration-rate-gfr-test/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 3. HISTOLOGY =====================
  {
    term_en: 'Epithelium',
    term_ar: 'النسيج الظهاري (الطلائي)',
    synonyms: ['Epithelial tissue', 'الظهارة'],
    pronunciation: 'ep-ih-THEE-lee-um',
    ipa: '/ˌɛp.ɪˈθiː.li.əm/',
    english_definition:
      'A fundamental avascular tissue composed of closely packed sheets of cells resting on a basement membrane that covers body surfaces, lines cavities, and forms glands.',
    arabic_definition:
      'أحد الأنسجة الأساسية الأربعة في الجسم (Epithelium)، يتكوّن من خلايا متراصة تستند على غشاء قاعدي، ويغطي سطوح الجسم ويبطّن التجاويف الداخلية ويكوّن الغدد.',
    specialty: 'Histology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/epithelium',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Sarcomere',
    term_ar: 'القُسيم العضلي (الساركومير)',
    synonyms: ['Contractile unit', 'الوحدة الانقباضية للعضلة'],
    pronunciation: 'SAR-koh-meer',
    ipa: '/ˈsɑːr.koʊ.mɪər/',
    english_definition:
      'The basic repeating functional and structural contractile unit of striated skeletal and cardiac myofibrils extending between two adjacent Z discs containing actin and myosin filaments.',
    arabic_definition:
      'الوحدة البنائية والوظيفية الأساسية المتكررة للانقباض في الألياف العضلية المخططة والقلبية (Sarcomere)، وتمتد بين خطي Z متجاورين وتضم خيوط الأكتين والميوسين.',
    specialty: 'Histology',
    sources: [
      {
        name: 'NCBI Bookshelf – Histology, Sarcomere',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK537139/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Nephron',
    term_ar: 'الوحدة الأنبوبية الكلوية (النفرون)',
    synonyms: ['Renal functional unit', 'الوحدة الكلوية'],
    pronunciation: 'NEF-ron',
    ipa: '/ˈnɛf.rɒn/',
    english_definition:
      'The microscopic structural and functional unit of the kidney consisting of a renal corpuscle and renal tubule responsible for blood filtration, reabsorption, secretion, and urine formation.',
    arabic_definition:
      'الوحدة التركيبية والوظيفية المجهرية في الكلية (Nephron)، وتتكوّن من الكرية الكلوية والأنبوب الكلوي، وتقوم بترشيح الدم وإعادة الامتصاص والإفراز لتكوين البول.',
    specialty: 'Histology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/nephron',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Alveolus',
    term_ar: 'السنخ الرئوي (الحويصلة الهوائية)',
    synonyms: ['Alveoli', 'Pulmonary alveolus', 'الحويصلات الهوائية'],
    pronunciation: 'al-VEE-uh-lus',
    ipa: '/ælˈviː.ə.ləs/',
    english_definition:
      'A tiny thin-walled air sac at the terminal end of the respiratory bronchioles where oxygen and carbon dioxide diffuse across the alveolar-capillary membrane.',
    arabic_definition:
      'كيس هوائي مجهري رقيق الجدار يقع في نهاية القصيبات التنفسية بالرئة (Alveolus)، ويتم فيه تبادل غازي الأكسجين وثاني أكسيد الكربون مع الشعيرات الدموية الرئوية.',
    specialty: 'Histology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/alveolus',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 4. EMBRYOLOGY =====================
  {
    term_en: 'Gastrulation',
    term_ar: 'تكوّن المُعيدة (المُعَيْدَة الجنينية)',
    synonyms: ['Germ layer formation', 'تشكل الطبقات الجرثومية'],
    pronunciation: 'gas-troo-LAY-shun',
    ipa: '/ˌɡæs.trəˈleɪ.ʃən/',
    english_definition:
      'A pivotal phase of early embryonic development in which the bilaminar embryonic disc reorganizes into a trilaminar embryo comprising ectoderm, mesoderm, and endoderm.',
    arabic_definition:
      'مرحلة مبكرة وحاسمة في التطور الجنيني (Gastrulation) تتحوّل فيها الصفيحة الجنينية ثنائية الطبقات إلى جنين ثلاثي الطبقات يتكوّن من الأديم الظاهر والأديم المتوسط والأديم الباطن.',
    specialty: 'Embryology',
    sources: [
      {
        name: 'NCBI Bookshelf – Embryology, Gastrulation',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK554394/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Neural Tube',
    term_ar: 'الأنبوب العصبي',
    synonyms: ['Neurulation structure', 'القناة العصبية الجنينية'],
    pronunciation: 'NOOR-ul toob',
    ipa: '/ˈnjʊər.əl tjuːb/',
    english_definition:
      'The hollow cylindrical embryonic structure derived from neuroectoderm during neurulation that develops into the brain and spinal cord of the central nervous system.',
    arabic_definition:
      'التركيب الأنبوبي الجنيني المجوّف المشتق من الأديم الظاهر العصبي أثناء تكوّن العصبية (Neural Tube)، ويتمايز لاحقاً ليشكّل الدماغ والحبل الشوكي في الجهاز العصبي المركزي.',
    specialty: 'Embryology',
    sources: [
      {
        name: 'MedlinePlus – Neural Tube Defects',
        url: 'https://medlineplus.gov/neuraltubedefects.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Trophoblast',
    term_ar: 'الأرومة المغذية',
    synonyms: ['Outer blastocyst layer', 'الطبقة المغذية للمضغة'],
    pronunciation: 'TROF-oh-blast',
    ipa: '/ˈtrɒf.ə.blæst/',
    english_definition:
      'The specialized outer cellular layer of the mammalian blastocyst that mediates uterine implantation, secretes human chorionic gonadotropin, and forms the embryonic portion of the placenta.',
    arabic_definition:
      'الطبقة الخلوية الخارجية للكيسة الأريمية في الجنين المبكر (Trophoblast)، وتضطلع بعملية الانغراس في بطانة الرحم وإفراز هرمون hCG وتكوين الجزء الجنيني من المشيمة.',
    specialty: 'Embryology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/trophoblast',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Somite',
    term_ar: 'الجُسيْدة الجنينية (السوميت)',
    synonyms: ['Paraxial mesoderm block', 'الكتلة الجسيدية'],
    pronunciation: 'SOH-myte',
    ipa: '/ˈsoʊ.maɪt/',
    english_definition:
      'Paired segmented blocks of paraxial mesoderm along the developing neural tube that differentiate into the dermatome, myotome, and sclerotome (vertebrae, ribs, skeletal muscles, and dermis).',
    arabic_definition:
      'كتل خلوية متزاوجة ومقطّعة تنشأ من الأديم المتوسط المجاور للمحور على جانبي الأنبوب العصبي (Somite)، وتتمايز لتشكّل الفقرات والأضلاع والعضلات الهيكلية وأدمة الجلد.',
    specialty: 'Embryology',
    sources: [
      {
        name: 'NCBI Bookshelf – Embryology, Somites',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK557433/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 5. BIOCHEMISTRY =====================
  {
    term_en: 'Glycolysis',
    term_ar: 'تحلّل السكر (الجليكوليسس)',
    synonyms: ['Embden-Meyerhof pathway', 'تحلل الجلوكوز'],
    pronunciation: 'gly-KOL-ih-sis',
    ipa: '/ɡlaɪˈkɒl.ɪ.sɪs/',
    english_definition:
      'The universal ten-step cytosolic metabolic pathway that converts one molecule of glucose into two molecules of pyruvate while generating net ATP and NADH.',
    arabic_definition:
      'المسار الأيضي الخلوي المكون من عشر خطوات في السيتوبلازم لتحويل جزيء واحد من الجلوكوز إلى جزيئين من البيروفات (Pyruvate) مع إنتاج طاقة صافية على هيئة ATP وNADH.',
    specialty: 'Biochemistry',
    sources: [
      {
        name: 'NCBI Bookshelf – Biochemistry, Glycolysis',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK482303/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Enzyme',
    term_ar: 'الإنزيم (المحفّز الحيوي)',
    synonyms: ['Biological catalyst', 'الخمائر الحيوية'],
    pronunciation: 'EN-zyme',
    ipa: '/ˈɛn.zaɪm/',
    english_definition:
      'A specialized protein (or catalytic RNA) that accelerates the rate of specific biochemical reactions by lowering activation energy without being consumed in the reaction.',
    arabic_definition:
      'جزيء بروتيني متخصص غالباً (أو حمض نووي محفز) يسرّع التفاعلات الكيميائية الحيوية داخل الخلية عن طريق خفض طاقة التنشيط دون أن يُستهلك في التفاعل (Enzyme).',
    specialty: 'Biochemistry',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/enzyme',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Hemoglobin',
    term_ar: 'الهيموغلوبين (خضاب الدم)',
    synonyms: ['Haemoglobin', 'Hb', 'خضاب الدم'],
    pronunciation: 'HEE-moh-gloh-bin',
    ipa: '/ˌhiː.məˈɡloʊ.bɪn/',
    english_definition:
      'An iron-containing tetrameric metalloprotein inside red blood cells that reversibly binds oxygen in the lungs and delivers it to peripheral tissues while assisting carbon dioxide transport.',
    arabic_definition:
      'بروتين معدني رباعي الوحدات يحتوي على الحديد يوجد داخل خلايا الدم الحمراء (Hemoglobin)، ويرتبط بالأكسجين في الرئتين لنقله إلى الأنسجة ويسهم في نقل ثاني أكسيد الكربون.',
    specialty: 'Biochemistry',
    sources: [
      {
        name: 'MedlinePlus – Hemoglobin Test & Function',
        url: 'https://medlineplus.gov/lab-tests/hemoglobin-test/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Oxidative Phosphorylation',
    term_ar: 'الفسفرة التأكسدية',
    synonyms: ['Electron transport ATP synthesis', 'السلسلة التنفسية'],
    pronunciation: 'OK-sih-day-tiv fos-for-ih-LAY-shun',
    ipa: '/ˈɒk.sɪ.deɪ.tɪv ˌfɒs.fɒr.ɪˈleɪ.ʃən/',
    english_definition:
      'The mitochondrial aerobic metabolic process in which electrons from NADH and FADH2 pass through the electron transport chain to oxygen, driving ATP synthase to phosphorylate ADP into ATP.',
    arabic_definition:
      'العملية الأيضية الهوائية في الميتوكوندريا التي تنتقل خلالها الإلكترونات من NADH وFADH2 عبر سلسلة نقل الإلكترون لتوليد تدرج بروتوني يدفع إنزيم ATP synthase لإنتاج معظم طاقة الخلية.',
    specialty: 'Biochemistry',
    sources: [
      {
        name: 'NCBI Bookshelf – Biochemistry, Oxidative Phosphorylation',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK553192/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 6. PATHOLOGY =====================
  {
    term_en: 'Nephritis',
    term_ar: 'التهاب الكلية',
    synonyms: ['Renal inflammation', 'Glomerulonephritis', 'التهاب كلوي'],
    pronunciation: 'neh-FRY-tis',
    ipa: '/nəˈfraɪ.tɪs/',
    english_definition:
      'Inflammation of the kidneys involving the glomeruli, renal tubules, or interstitial tissue, commonly caused by autoimmune reactions, infections, or medication toxicity.',
    arabic_definition:
      'حالة التهابية تصيب أنسجة الكلية (Nephritis)، وقد تشمل الكبيبات الكلوية أو الأنابيب أو النسيج الخلالي، وغالباً ما تنجم عن اضطرابات مناعية ذاتية أو عدوى أو أدوية مؤذية للكلية.',
    specialty: 'Pathology',
    sources: [
      {
        name: 'MedlinePlus – Interstitial Nephritis',
        url: 'https://medlineplus.gov/ency/article/000464.htm',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/nephritis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Hepatitis',
    term_ar: 'التهاب الكبد',
    synonyms: ['Liver inflammation', 'التهاب كبدي'],
    pronunciation: 'hep-uh-TY-tis',
    ipa: '/ˌhɛp.əˈtaɪ.tɪs/',
    english_definition:
      'Inflammation of the liver parenchyma characterized by hepatocellular injury and inflammatory cell infiltration, caused most commonly by hepatotropic viruses (A, B, C, D, E), alcohol, toxins, or autoimmune disease.',
    arabic_definition:
      'التهاب يصيب خلايا وأنسجة الكبد (Hepatitis) ويؤدي إلى أذية كبدية وارتفاع إنزيمات الكبد، ومن أبرز أسبابه الفيروسات الكبدية (A وB وC وD وE) أو السموم والأدوية أو المناعة الذاتية.',
    specialty: 'Pathology',
    sources: [
      {
        name: 'MedlinePlus – Hepatitis',
        url: 'https://medlineplus.gov/hepatitis.html',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'WHO – Hepatitis Overview',
        url: 'https://www.who.int/health-topics/hepatitis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Necrosis',
    term_ar: 'النخر (موت الخلايا المرضي)',
    synonyms: ['Cell necrosis', 'التنخر النسيجي'],
    pronunciation: 'neh-KROH-sis',
    ipa: '/nəˈkroʊ.sɪs/',
    english_definition:
      'Unregulated, premature death of cells in living tissue caused by acute injury, ischemia, or toxins, characterized by cellular swelling, membrane rupture, and local inflammation.',
    arabic_definition:
      'موت مرضي غير مبرمج للخلايا والأنسجة الحية نتيجة إصابة حادة أو نقص التروية الدموية أو السموم (Necrosis)، ويصاحبه انتفاخ الخلية وتمزق غشائها وحدوث استجابة التهابية موضعية.',
    specialty: 'Pathology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/necrosis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Apoptosis',
    term_ar: 'الموت الخلوي المبرمج',
    synonyms: ['Programmed cell death', 'الانتحار الخلوي المبرمج'],
    pronunciation: 'ap-op-TOH-sis',
    ipa: '/ˌæp.ɒpˈtoʊ.sɪs/',
    english_definition:
      'A genetically regulated, energy-dependent form of programmed cell death characterized by chromatin condensation, cell shrinkage, and membrane blebbing without triggering surrounding inflammation.',
    arabic_definition:
      'موت خلوي مبرمج ومنظّم وراثياً يعتمد على الطاقة (Apoptosis)، يتسم بتكثف الكروماتين وانكماش الخلية وتفككها إلى أجسام استماتية تبتلعها البلاعم دون إحداث التهاب في الأنسجة المجاورة.',
    specialty: 'Pathology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/apoptosis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Ischemia',
    term_ar: 'نقص التروية (الإقفار)',
    synonyms: ['Local hypoperfusion', 'القصور التروي الدموي'],
    pronunciation: 'ih-SKEE-mee-uh',
    ipa: '/ɪˈskiː.mi.ə/',
    english_definition:
      'An inadequate blood supply to an organ or tissue resulting in a deficiency of oxygen and metabolic nutrients needed for cellular survival and function.',
    arabic_definition:
      'انخفاض أو انقطاع الإمداد الدموي عن عضو أو نسيج معين (Ischemia)، مما يؤدي إلى نقص الأكسجين والمغذيات الضرورية لبقاء الخلايا وأداء وظيفتها الطبيعية.',
    specialty: 'Pathology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/ischemia',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 7. MICROBIOLOGY =====================
  {
    term_en: 'Sepsis',
    term_ar: 'الإنتان الدموي (تسمم الدم)',
    synonyms: ['Septicemia complication', 'التعفن الدموي'],
    pronunciation: 'SEP-sis',
    ipa: '/ˈsɛp.sɪs/',
    english_definition:
      'A life-threatening medical emergency caused by a dysregulated host immune response to an infection that leads to acute organ dysfunction.',
    arabic_definition:
      'حالة طبية طارئة مهددة للحياة تنشأ عندما تكون استجابة الجهاز المناعي للعدوى غير منتظمة ومفرطة (Sepsis)، مما يؤدي إلى أذية أنسجة الجسم وفشل حاد في الأعضاء.',
    specialty: 'Microbiology',
    sources: [
      {
        name: 'MedlinePlus – Sepsis',
        url: 'https://medlineplus.gov/sepsis.html',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'WHO – Sepsis Fact Sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/sepsis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Bacteremia',
    term_ar: 'تجرثم الدم',
    synonyms: ['Bloodstream bacteria', 'وجود البكتيريا في الدم'],
    pronunciation: 'bak-tih-REE-mee-uh',
    ipa: '/ˌbæk.tɪˈriː.mi.ə/',
    english_definition:
      'The presence of viable bacteria within the circulating bloodstream, which may be transient and asymptomatic or progress to systemic infection and sepsis.',
    arabic_definition:
      'وجود بكتيريا حية في مجرى الدم (Bacteremia)، وقد يكون عابراً دون أعراض أو يتطور إلى عدوى جهازية خطيرة وإنتان دموي إذا لم يُسيطَر عليه.',
    specialty: 'Microbiology',
    sources: [
      {
        name: 'NCBI Bookshelf – Bacteremia',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK441979/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Endotoxin',
    term_ar: 'الذيفان الداخلي (السم الداخلي)',
    synonyms: ['Lipopolysaccharide', 'LPS', 'السموم البكتيرية الداخلية'],
    pronunciation: 'en-doh-TOK-sin',
    ipa: '/ˌɛn.doʊˈtɒk.sɪn/',
    english_definition:
      'A heat-stable lipopolysaccharide (LPS) component of the outer cell membrane of Gram-negative bacteria released upon bacterial lysis that triggers fever and inflammatory shock.',
    arabic_definition:
      'مركب عديد السكاريد الشحمي (LPS) الموجود في الغشاء الخارجي للبكتيريا سالبة الغرام (Endotoxin)، ويتحرر عند انحلال البكتيريا مسبباً الحمى وتنشيط الالتهاب والصدمة الإنتانية.',
    specialty: 'Microbiology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/endotoxin',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Pathogen',
    term_ar: 'العامل الممرض (المُمرِض)',
    synonyms: ['Infectious agent', 'مسبب المرض'],
    pronunciation: 'PATH-uh-jen',
    ipa: '/ˈpæθ.ə.dʒən/',
    english_definition:
      'Any biological microorganism—such as a bacterium, virus, fungus, or parasite—capable of invading a host and causing infectious disease.',
    arabic_definition:
      'أي كائن حي دقيق أو عامل معدٍ مثل البكتيريا أو الفيروسات أو الفطريات أو الطفيليات يمتلك القدرة على غزو العائل وإحداث مرض معدٍ (Pathogen).',
    specialty: 'Microbiology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/pathogen',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 8. PHARMACOLOGY =====================
  {
    term_en: 'Pharmacokinetics',
    term_ar: 'حركية الدواء',
    synonyms: ['ADME', 'مصير الدواء في الجسم'],
    pronunciation: 'far-mah-koh-kih-NET-iks',
    ipa: '/ˌfɑːr.mə.koʊ.kɪˈnɛt.ɪks/',
    english_definition:
      'The branch of pharmacology studying how the body processes a drug over time through four phases: Absorption, Distribution, Metabolism, and Excretion (ADME).',
    arabic_definition:
      'فرع من علم الأدوية يدرس ما يفعله الجسم بالدواء عبر الزمن (Pharmacokinetics)، ويشمل أربع مراحل رئيسية: الامتصاص والتوزيع والأيض والإطراح (ADME).',
    specialty: 'Pharmacology',
    sources: [
      {
        name: 'NCBI Bookshelf – Pharmacokinetics',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK557744/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Bioavailability',
    term_ar: 'التوافر الحيوي للدواء',
    synonyms: ['Systemic availability', 'الإتاحة الحيوية'],
    pronunciation: 'by-oh-uh-vay-luh-BIL-ih-tee',
    ipa: '/ˌbaɪ.oʊ.əˌveɪ.ləˈbɪl.ə.ti/',
    english_definition:
      'The fraction and rate at which an administered dose of unchanged active drug reaches the systemic arterial circulation and becomes available at its site of action.',
    arabic_definition:
      'نسبة وسرعة وصول الجرعة الدوائية الفعالة دون تغير إلى الدورة الدموية الجهازية بعد إعطائها (Bioavailability)، وتساوي 100% عند الحقن الوريدي المباشر.',
    specialty: 'Pharmacology',
    sources: [
      {
        name: 'NCBI Bookshelf – Bioavailability',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK557852/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Half-Life',
    term_ar: 'عمر النصف الدوائي',
    synonyms: ['Elimination half-life', 't1/2', 'نصف العمر'],
    pronunciation: 'HAF-lyfe',
    ipa: '/ˈhæf.laɪf/',
    english_definition:
      'The time required for the plasma concentration or total amount of a drug in the body to decrease by exactly 50 percent during elimination.',
    arabic_definition:
      'الفترة الزمنية اللازمة لانخفاض تركيز الدواء في بلازما الدم أو كميته في الجسم إلى النصف (50%) أثناء عملية الإطراح والأيض (Half-Life).',
    specialty: 'Pharmacology',
    sources: [
      {
        name: 'NCBI Bookshelf – Drug Half-Life',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK554498/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Agonist',
    term_ar: 'ناهض المستقبل (مُنشّط المستقبل)',
    synonyms: ['Receptor activator', 'مماثل المستقبل'],
    pronunciation: 'AG-uh-nist',
    ipa: '/ˈæɡ.ə.nɪst/',
    english_definition:
      'A chemical ligand or drug that binds to a specific cellular receptor and activates it to produce a characteristic biological response.',
    arabic_definition:
      'مادة دوائية أو جزيء حيوي يرتبط بمستقبِل خلوي محدد وينشّطه لإحداث استجابة فسيولوجية أو خلوية مماثلة للوسيط الطبيعي (Agonist).',
    specialty: 'Pharmacology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/agonist',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 9. MEDICINE =====================
  {
    term_en: 'Pneumonia',
    term_ar: 'الالتهاب الرئوي (ذات الرئة)',
    synonyms: ['Pulmonary infection', 'Lung infection', 'التهاب رئوي'],
    pronunciation: 'noo-MOH-nyuh',
    ipa: '/njuːˈmoʊ.ni.ə/',
    english_definition:
      'An acute infection of the lung parenchyma (alveoli and distal airways) caused by bacteria, viruses, or fungi, leading to alveolar exudate, impaired gas exchange, cough, and fever.',
    arabic_definition:
      'عدوى التهابية حادة تصيب نسيج الرئة والحويصلات الهوائية (Pneumonia) بسبب البكتيريا أو الفيروسات أو الفطريات، مما يؤدي إلى امتلاء الأسناخ بالسوائل والقيح وظهور السعال والحمى وضيق التنفس.',
    specialty: 'Medicine',
    sources: [
      {
        name: 'MedlinePlus – Pneumonia',
        url: 'https://medlineplus.gov/pneumonia.html',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'WHO – Pneumonia Fact Sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/pneumonia',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Hypertension',
    term_ar: 'ارتفاع ضغط الدم',
    synonyms: ['High blood pressure', 'HTN', 'فرط التوتر الشرياني'],
    pronunciation: 'hy-per-TEN-shun',
    ipa: '/ˌhaɪ.pərˈtɛn.ʃən/',
    english_definition:
      'A chronic cardiovascular condition in which the systemic arterial blood pressure remains persistently elevated above normal thresholds, increasing workload on the heart and risk of stroke or renal disease.',
    arabic_definition:
      'حالة مزمنة يظل فيها ضغط الدم داخل الشرايين الجهازية مرتفعاً باستمرار فوق المعدلات الطبيعية (Hypertension)، مما يزيد العبء على القلب ويرفع خطر السكتة الدماغية وأمراض الكلى.',
    specialty: 'Medicine',
    sources: [
      {
        name: 'MedlinePlus – High Blood Pressure',
        url: 'https://medlineplus.gov/highbloodpressure.html',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'WHO – Hypertension Fact Sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/hypertension',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Diabetes Mellitus',
    term_ar: 'داء السكري',
    synonyms: ['Diabetes', 'DM', 'السكري'],
    pronunciation: 'dy-uh-BEE-teez MEL-ih-tus',
    ipa: '/ˌdaɪ.əˈbiː.tiːz ˈmɛl.ɪ.təs/',
    english_definition:
      'A group of metabolic disorders characterized by chronic hyperglycemia resulting from defects in insulin secretion, peripheral insulin action, or both.',
    arabic_definition:
      'مجموعة من الاضطرابات الأيضية المزمنة تتسم بارتفاع سكر الدم (Hyperglycemia) نتيجة خلل في إفراز هرمون الإنسولين أو ضعف استجابة الأنسجة له أو كليهما معاً.',
    specialty: 'Medicine',
    sources: [
      {
        name: 'MedlinePlus – Diabetes',
        url: 'https://medlineplus.gov/diabetes.html',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'WHO – Diabetes Fact Sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/diabetes',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Anemia',
    term_ar: 'فقر الدم (الأنيميا)',
    synonyms: ['Anaemia', 'Low hemoglobin', 'نقص خضاب الدم'],
    pronunciation: 'uh-NEE-mee-uh',
    ipa: '/əˈniː.mi.ə/',
    english_definition:
      'A hematologic condition defined by a reduced red blood cell mass or decreased hemoglobin concentration in the blood, impairing oxygen delivery to body tissues.',
    arabic_definition:
      'حالة دموية تنخفض فيها كمية كريات الدم الحمراء السليمة أو تركيز الهيموغلوبين عن الحد الطبيعي (Anemia)، مما يقلل قدرة الدم على توصيل الأكسجين إلى أنسجة الجسم.',
    specialty: 'Medicine',
    sources: [
      {
        name: 'MedlinePlus – Anemia',
        url: 'https://medlineplus.gov/anemia.html',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'WHO – Anaemia',
        url: 'https://www.who.int/health-topics/anaemia',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 10. SURGERY =====================
  {
    term_en: 'Appendectomy',
    term_ar: 'استئصال الزائدة الدودية',
    synonyms: ['Appendicectomy', 'عملية الزائدة'],
    pronunciation: 'ap-en-DEK-tuh-mee',
    ipa: '/ˌæp.ənˈdɛk.tə.mi/',
    english_definition:
      'The surgical excision of the vermiform appendix, performed either laparoscopically or via an open incision, most commonly to treat acute appendicitis.',
    arabic_definition:
      'إجراء جراحي يتم فيه استئصال الزائدة الدودية (Appendectomy) إما بالمنظار البطني أو بالجراحة المفتوحة، ويُجرى غالباً لعلاج التهاب الزائدة الدودية الحاد.',
    specialty: 'Surgery',
    sources: [
      {
        name: 'MedlinePlus – Appendectomy',
        url: 'https://medlineplus.gov/ency/article/002921.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Laparoscopy',
    term_ar: 'تنظير البطن الجراحي',
    synonyms: ['Minimally invasive abdominal surgery', 'جراحة المنظار'],
    pronunciation: 'lap-uh-ROS-kuh-pee',
    ipa: '/ˌlæp.əˈrɒs.kə.pi/',
    english_definition:
      'A minimally invasive diagnostic or therapeutic surgical technique in which a fiber-optic camera (laparoscope) and narrow instruments are inserted through small abdominal incisions.',
    arabic_definition:
      'تقنية جراحية طفيفة التوغل (Laparoscopy) يُدخل فيها منظار مزود بكاميرا وأدوات دقيقة عبر شقوق صغيرة في جدار البطن لفحص الأعضاء الداخلية أو إجراء عمليات جراحية.',
    specialty: 'Surgery',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/laparoscopy',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Anastomosis',
    term_ar: 'المُفاغَرة الجراحية',
    synonyms: ['Surgical connection', 'التوصيل الوعائي أو المعوي'],
    pronunciation: 'uh-nas-tuh-MOH-sis',
    ipa: '/əˌnæs.təˈmoʊ.sɪs/',
    english_definition:
      'A natural or surgically created connection between two tubular structures, such as blood vessels, loops of intestine, or ducts.',
    arabic_definition:
      'وصلة طبيعية أو جراحية تربط بين بنيتين أنبوبيتين في الجسم مثل الأوعية الدموية أو قطعتين من الأمعاء بعد استئصال جزء بينهما (Anastomosis).',
    specialty: 'Surgery',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/anastomosis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Hemostasis',
    term_ar: 'الإرقاء (إيقاف النزيف)',
    synonyms: ['Bleeding control', 'وقف النزف'],
    pronunciation: 'hee-moh-STAY-sis',
    ipa: '/ˌhiː.məˈsteɪ.sɪs/',
    english_definition:
      'The physiological or surgical process of stopping bleeding from a damaged blood vessel via vasoconstriction, platelet plug formation, and fibrin coagulation.',
    arabic_definition:
      'الآلية الفسيولوجية أو الإجراء الجراحي لوقف النزيف من وعاء دموي مصاب (Hemostasis)، وتشمل انقباض الوعاء الدموي وتكوّن السدادة الصفيحية وتخثر الفيبرين.',
    specialty: 'Surgery',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/hemostasis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 11. PEDIATRICS =====================
  {
    term_en: 'Neonatal Jaundice',
    term_ar: 'اليرقان الوليدي (الصفار)',
    synonyms: ['Newborn jaundice', 'Hyperbilirubinemia of newborn', 'صفار المواليد'],
    pronunciation: 'nee-oh-NAY-tul JAWN-dis',
    ipa: '/ˌniː.oʊˈneɪ.təl ˈdʒɔːn.dɪs/',
    english_definition:
      'Yellowish discoloration of the skin and sclera in a newborn infant caused by elevated unconjugated or conjugated bilirubin due to immature hepatic clearance or increased red cell breakdown.',
    arabic_definition:
      'اصفرار الجلد وصلبة العين لدى حديثي الولادة نتيجة ارتفاع مستوى البيليروبين في الدم (Neonatal Jaundice)، وغالباً ما يكون فسيولوجياً بسبب عدم اكتمال نضج إنزيمات الكبد.',
    specialty: 'Pediatrics',
    sources: [
      {
        name: 'MedlinePlus – Newborn Jaundice',
        url: 'https://medlineplus.gov/ency/article/001559.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Bronchiolitis',
    term_ar: 'التهاب القصيبات الهوائية',
    synonyms: ['Infant viral bronchiolitis', 'التهاب الشعيبات'],
    pronunciation: 'brong-kee-oh-LY-tis',
    ipa: '/ˌbrɒŋ.ki.oʊˈlaɪ.tɪs/',
    english_definition:
      'An acute viral lower respiratory tract infection affecting infants and young children, most often caused by respiratory syncytial virus (RSV), causing small airway inflammation and wheezing.',
    arabic_definition:
      'عدوى فيروسية حادة تصيب الممرات التنفسية الدقيقة لدى الرضع وصغار الأطفال (Bronchiolitis)، وأكثر مسبباتها الفيروس المخلوي التنفسي (RSV)، وتؤدي إلى أزيز الصدر وصعوبة التنفس.',
    specialty: 'Pediatrics',
    sources: [
      {
        name: 'MedlinePlus – Bronchiolitis',
        url: 'https://medlineplus.gov/ency/article/000975.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Apgar Score',
    term_ar: 'مقياس أبغار لحديثي الولادة',
    synonyms: ['Newborn assessment score', 'تقييم أبغار'],
    pronunciation: 'AP-gar skor',
    ipa: '/ˈæp.ɡɑːr skɔːr/',
    english_definition:
      'A standardized rapid clinical assessment performed at 1 and 5 minutes after birth scoring Appearance, Pulse, Grimace, Activity, and Respiration (0 to 10 points).',
    arabic_definition:
      'تقييم سريري قياسي وسريع يُجرى للطفل عند الدقيقة الأولى والخامسة بعد الولادة (Apgar Score) لقياس خمس علامات حيوية: لون الجلد، النبض، الاستجابة المنعكسة، التوتر العضلي، والتنفس.',
    specialty: 'Pediatrics',
    sources: [
      {
        name: 'MedlinePlus – Apgar Score',
        url: 'https://medlineplus.gov/ency/article/003402.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Failure to Thrive',
    term_ar: 'فشل النمو (تأخر النمو لدى الأطفال)',
    synonyms: ['FTT', 'Growth faltering', 'تعثر النمو'],
    pronunciation: 'FAYL-yer too thryve',
    ipa: '/ˈfeɪl.jər tuː θraɪv/',
    english_definition:
      'Insufficient physical weight gain or decelerated linear growth in an infant or child compared with standard age- and sex-specific growth charts, due to inadequate nutrition or underlying illness.',
    arabic_definition:
      'بطء أو توقف الزيادة الطبيعية في الوزن والطول لدى الرضيع أو الطفل مقارنة بمنحنيات النمو القياسية لعمره وجنسه (Failure to Thrive)، إما لنقص التغذية أو لمرض عضوي أو امتصاصي.',
    specialty: 'Pediatrics',
    sources: [
      {
        name: 'MedlinePlus – Failure to Thrive',
        url: 'https://medlineplus.gov/ency/article/000991.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 12. OBSTETRICS & GYNECOLOGY =====================
  {
    term_en: 'Preeclampsia',
    term_ar: 'تسمم الحمل (مقدمات الارتعاج)',
    synonyms: ['Gestational hypertension with proteinuria', 'مقدمات تسمم الحمل'],
    pronunciation: 'pree-ih-KLAMP-see-uh',
    ipa: '/ˌpriː.ɪˈklæmp.si.ə/',
    english_definition:
      'A pregnancy-specific hypertensive disorder occurring after 20 weeks of gestation characterized by new-onset elevated blood pressure accompanied by proteinuria or signs of end-organ dysfunction.',
    arabic_definition:
      'اضطراب حملي يحدث بعد الأسبوع العشرين من الحمل يتصف بارتفاع جديد في ضغط الدم مع وجود بروتين في البول أو علامات تأثر أعضاء الأم مثل الكبد والكلى (Preeclampsia).',
    specialty: 'Obstetrics & Gynecology',
    sources: [
      {
        name: 'MedlinePlus – Preeclampsia',
        url: 'https://medlineplus.gov/ency/article/000898.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Placenta Previa',
    term_ar: 'المشيمة المنزاحة (المتقدمة)',
    synonyms: ['Low-lying placenta', 'انزياح المشيمة'],
    pronunciation: 'pluh-SEN-tuh PREE-vee-uh',
    ipa: '/pləˈsɛn.tə ˈpriː.vi.ə/',
    english_definition:
      'An obstetric complication in which the placenta implants in the lower uterine segment, partially or completely covering the internal cervical os and risking painless vaginal bleeding.',
    arabic_definition:
      'مضاعفة حملية تنغرس فيها المشيمة في الجزء السفلي من الرحم بحيث تغطي عنق الرحم الداخلي جزئياً أو كلياً (Placenta Previa)، وتسبب نزيفاً مهبلياً غير مؤلم في الثلث الأخير من الحمل.',
    specialty: 'Obstetrics & Gynecology',
    sources: [
      {
        name: 'MedlinePlus – Placenta Previa',
        url: 'https://medlineplus.gov/ency/article/000900.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Endometriosis',
    term_ar: 'بطانة الرحم المهاجرة (الانتباذ البطاني الرحمي)',
    synonyms: ['Ectopic endometrium', 'الانتباذ الرحمي'],
    pronunciation: 'en-doh-mee-tree-OH-sis',
    ipa: '/ˌɛn.doʊˌmiː.triˈoʊ.sɪs/',
    english_definition:
      'A chronic estrogen-dependent gynecological disorder in which tissue histologically similar to the uterine endometrium grows outside the uterine cavity, causing pelvic pain and subfertility.',
    arabic_definition:
      'حالة نسائية مزمنة ينمو فيها نسيج مشابه لبطانة الرحم خارج تجويف الرحم (Endometriosis) مثل المبيضين أو الحوض، مسبباً ألماً حوضياً دورياً واضطرابات في الخصوبة.',
    specialty: 'Obstetrics & Gynecology',
    sources: [
      {
        name: 'MedlinePlus – Endometriosis',
        url: 'https://medlineplus.gov/endometriosis.html',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'WHO – Endometriosis Fact Sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/endometriosis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Ectopic Pregnancy',
    term_ar: 'الحمل خارج الرحم',
    synonyms: ['Tubal pregnancy', 'Extrauterine pregnancy', 'الحمل المنتبذ'],
    pronunciation: 'ek-TOP-ik PREG-nun-see',
    ipa: '/ɛkˈtɒp.ɪk ˈprɛɡ.nən.si/',
    english_definition:
      'Implantation and development of a fertilized ovum outside the endometrial cavity, most frequently inside a fallopian tube, representing a potentially life-threatening surgical emergency.',
    arabic_definition:
      'انغراس البويضة المخصبة ونموها خارج تجويف الرحم الطبيعي، وغالباً في قناة فالوب (Ectopic Pregnancy)، ويُعد حالة طبية طارئة لاحتمال تمزق القناة وحدوث نزيف داخلي.',
    specialty: 'Obstetrics & Gynecology',
    sources: [
      {
        name: 'MedlinePlus – Ectopic Pregnancy',
        url: 'https://medlineplus.gov/ectopicpregnancy.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 13. PSYCHIATRY =====================
  {
    term_en: 'Delirium',
    term_ar: 'الهذيان الحاد',
    synonyms: ['Acute confusional state', 'الاضطراب الإدراكي الحاد'],
    pronunciation: 'dih-LEER-ee-um',
    ipa: '/dɪˈlɪər.i.əm/',
    english_definition:
      'An acute, fluctuating disturbance in attention, awareness, and cognition that develops over hours to days as a direct physiological consequence of an underlying medical condition, intoxication, or withdrawal.',
    arabic_definition:
      'اضطراب حاد ومتقلب في الانتباه والوعي والإدراك يتطور خلال ساعات أو أيام (Delirium)، وينتج عن سبب عضوي كالعدوى أو اختلال الأملاح أو التسمم الدوائي.',
    specialty: 'Psychiatry',
    sources: [
      {
        name: 'MedlinePlus – Delirium',
        url: 'https://medlineplus.gov/delirium.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Anhedonia',
    term_ar: 'انعدام التلذّذ (فقدان الشغف والمتعة)',
    synonyms: ['Loss of pleasure', 'تبلّد الشعور بالمتعة'],
    pronunciation: 'an-hee-DOH-nee-uh',
    ipa: '/ˌæn.hɪˈdoʊ.ni.ə/',
    english_definition:
      'A core psychiatric symptom marked by a diminished or absent ability to experience pleasure or interest in previously rewarding activities, frequently seen in major depressive disorder.',
    arabic_definition:
      'عرض نفسي أساسي يتمثل في انخفاض أو فقدان القدرة على الشعور بالمتعة والاهتمام بالأنشطة المحببة سابقاً (Anhedonia)، ويُعد من السمات الرئيسية لاضطراب الاكتئاب الشديد.',
    specialty: 'Psychiatry',
    sources: [
      {
        name: 'NCBI Bookshelf – Anhedonia Clinical Overview',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK559078/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Psychosis',
    term_ar: 'الذُهان (فقدان الاتصال بالواقع)',
    synonyms: ['Psychotic episode', 'الاضطراب الذهاني'],
    pronunciation: 'sy-KOH-sis',
    ipa: '/saɪˈkoʊ.sɪs/',
    english_definition:
      'A clinical syndrome characterized by a loss of contact with reality manifesting through hallucinations, fixed false beliefs (delusions), and disorganized thought or behavior.',
    arabic_definition:
      'متلازمة سريرية نفسية تتسم باضطراب إدراك الواقع والانفصال عنه (Psychosis)، وتتجلى في الهلاوس الحسية والأوهام الثابتة واضطراب التفكير أو السلوك.',
    specialty: 'Psychiatry',
    sources: [
      {
        name: 'MedlinePlus – Psychotic Disorders',
        url: 'https://medlineplus.gov/psychoticdisorders.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Cognitive Behavioral Therapy',
    term_ar: 'العلاج المعرفي السلوكي',
    synonyms: ['CBT', 'العلاج السلوكي المعرفي'],
    pronunciation: 'KOG-nih-tiv bih-HAYV-yer-ul THER-uh-pee',
    ipa: '/ˈkɒɡ.nɪ.tɪv bɪˈheɪv.jər.əl ˈθɛr.ə.pi/',
    english_definition:
      'An evidence-based, structured form of psychotherapy focused on identifying and modifying maladaptive thought patterns and behaviors to relieve psychiatric symptoms.',
    arabic_definition:
      'أسلوب علاج نفسي منظّم ومبني على الدليل العلمي يهدف إلى تحديد أنماط التفكير المشوّهة والسلوكيات غير التكيفية وتعديلها (CBT) للتخفيف من القلق والاكتئاب.',
    specialty: 'Psychiatry',
    sources: [
      {
        name: 'NCBI Bookshelf – Cognitive Behavioral Therapy',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK470241/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 14. NEUROLOGY =====================
  {
    term_en: 'Aphasia',
    term_ar: 'الحُبْسة الكلامية (فقدان القدرة اللغوية)',
    synonyms: ['Dysphasia', 'فقدان النطق وفهم اللغة'],
    pronunciation: 'uh-FAY-zhuh',
    ipa: '/əˈfeɪ.ʒə/',
    english_definition:
      'An acquired neurological impairment of language comprehension or production resulting from damage to cortical language areas, most commonly after a left-hemisphere stroke.',
    arabic_definition:
      'اضطراب عصبي مكتسب في القدرة على التعبير اللغوي أو فهم الكلام أو القراءة والكتابة (Aphasia)، وينتج غالباً عن إصابة مراكز اللغة في الدماغ بسبب السكتة الدماغية أو الرضوض.',
    specialty: 'Neurology',
    sources: [
      {
        name: 'MedlinePlus – Aphasia',
        url: 'https://medlineplus.gov/aphasia.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Ataxia',
    term_ar: 'الرَنَح (اختلال التناسق الحركي)',
    synonyms: ['Incoordination', 'فقدان التوازن الحركي'],
    pronunciation: 'uh-TAK-see-uh',
    ipa: '/əˈtæk.si.ə/',
    english_definition:
      'A neurological sign consisting of lack of voluntary coordination of muscle movements that impairs gait, balance, speech, and fine motor control, commonly linked to cerebellar dysfunction.',
    arabic_definition:
      'علامة عصبية تتمثل في فقدان التناسق والاتزان في الحركات العضلية الإرادية (Ataxia) مما يؤثر على المشي والتوازن والنطق، وغالباً ما يرتبط باضطراب المخيخ أو المسارات الحسية العميقة.',
    specialty: 'Neurology',
    sources: [
      {
        name: 'MedlinePlus – Cerebellar Disorders (Ataxia)',
        url: 'https://medlineplus.gov/cerebellardisorders.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Meningitis',
    term_ar: 'التهاب السحايا',
    synonyms: ['Meningeal inflammation', 'التهاب الأغشية السحائية'],
    pronunciation: 'men-in-JY-tis',
    ipa: '/ˌmɛn.ɪnˈdʒaɪ.tɪs/',
    english_definition:
      'Inflammation of the protective membranes (meninges) covering the brain and spinal cord, typically caused by bacterial or viral infection, presenting with fever, headache, and nuchal rigidity.',
    arabic_definition:
      'التهاب يصيب الأغشية الواقية المحيطة بالدماغ والحبل الشوكي المعروفة بالسحايا (Meningitis)، وتسببه غالباً عدوى بكتيرية أو فيروسية ويظهر بحمى وصداع شديد وتيبّس الرقبة.',
    specialty: 'Neurology',
    sources: [
      {
        name: 'MedlinePlus – Meningitis',
        url: 'https://medlineplus.gov/meningitis.html',
        accessedAt: VERIFIED_DATE,
      },
      {
        name: 'WHO – Meningitis Fact Sheet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/meningitis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Synapse',
    term_ar: 'المشبك العصبي',
    synonyms: ['Neural junction', 'نقطة الاشتباك العصبي'],
    pronunciation: 'SIN-aps',
    ipa: '/ˈsɪn.æps/',
    english_definition:
      'A specialized intercellular junction across which a neuron transmits an electrical or chemical neurotransmitter signal to an adjacent neuron, muscle cell, or gland.',
    arabic_definition:
      'وصلة متخصصة تنتقل عبرها الإشارة العصبية كهربائياً أو عبر النواقل الكيميائية (Neurotransmitters) من خلية عصبية إلى أخرى أو إلى خلية عضلية أو غدية (Synapse).',
    specialty: 'Neurology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/synapse',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 15. CARDIOLOGY =====================
  {
    term_en: 'Myocardial Infarction',
    term_ar: 'احتشاء عضلة القلب (الجلطة القلبية)',
    synonyms: ['Heart attack', 'MI', 'الذبحة الصدرية المحتشية'],
    pronunciation: 'my-oh-KAR-dee-ul in-FARK-shun',
    ipa: '/ˌmaɪ.əˈkɑːr.di.əl ɪnˈfɑːrk.ʃən/',
    english_definition:
      'Irreversible necrosis of heart muscle tissue caused by prolonged acute ischemia resulting from sudden occlusion of a coronary artery.',
    arabic_definition:
      'تموّت نسيج عضلة القلب نتيجة انقطاع أو نقص حاد ومطوّل في التروية الدموية عبر أحد الشرايين التاجية المغذية للقلب (Myocardial Infarction)، وهي حالة إسعافية عاجلة.',
    specialty: 'Cardiology',
    sources: [
      {
        name: 'MedlinePlus – Heart Attack',
        url: 'https://medlineplus.gov/heartattack.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Arrhythmia',
    term_ar: 'اضطراب نظم القلب (عدم انتظام النبض)',
    synonyms: ['Dysrhythmia', 'خفقان وعدم انتظام ضربات القلب'],
    pronunciation: 'uh-RITH-mee-uh',
    ipa: '/əˈrɪð.mi.ə/',
    english_definition:
      'Any abnormality in the rate, regularity, origin, or conduction sequence of the heart electrical impulses, resulting in tachycardia, bradycardia, or irregular beats.',
    arabic_definition:
      'أي خلل في سرعة أو انتظام أو مسار الإشارات الكهربائية المنظِّمة لنبض القلب (Arrhythmia)، مما يؤدي إلى تسارع النبض أو تباطئه أو عدم انتظامه.',
    specialty: 'Cardiology',
    sources: [
      {
        name: 'MedlinePlus – Arrhythmia',
        url: 'https://medlineplus.gov/arrhythmia.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Atherosclerosis',
    term_ar: 'تصلّب الشرايين العصيدي',
    synonyms: ['Arterial plaque buildup', 'تصلب الشرايين'],
    pronunciation: 'ath-er-oh-sklih-ROH-sis',
    ipa: '/ˌæθ.ə.roʊ.skləˈroʊ.sɪs/',
    english_definition:
      'A progressive chronic vascular disease marked by lipid-rich, fibrous plaque accumulation within the intima of medium and large arteries, narrowing the lumen and restricting blood flow.',
    arabic_definition:
      'مرض وعائي مزمن تتراكم فيه اللويحات الدهنية والكوليسترول والأنسجة الليفية داخل البطانة الداخلية للشرايين المتوسطة والكبيرة (Atherosclerosis)، مما يضيّق لمعة الشريان ويعيق تدفق الدم.',
    specialty: 'Cardiology',
    sources: [
      {
        name: 'MedlinePlus – Atherosclerosis',
        url: 'https://medlineplus.gov/atherosclerosis.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Bradycardia',
    term_ar: 'بُطء القلب (تباطؤ نبض القلب)',
    synonyms: ['Slow heart rate', 'تباطؤ دقات القلب'],
    pronunciation: 'brad-ih-KAR-dee-uh',
    ipa: '/ˌbræd.ɪˈkɑːr.di.ə/',
    english_definition:
      'An abnormally slow resting heart rate, generally defined in adults as fewer than 60 beats per minute, arising from sinus node dysfunction, AV block, medications, or athletic conditioning.',
    arabic_definition:
      'انخفاض معدل نبض القلب أثناء الراحة عن الحد الطبيعي، ويُعرَّف لدى البالغين بأقل من 60 نبضة في الدقيقة (Bradycardia)، وقد يكون فسيولوجياً عند الرياضيين أو مرضياً لاضطراب التوصيل الكهربائي.',
    specialty: 'Cardiology',
    sources: [
      {
        name: 'NCBI Bookshelf – Sinus Bradycardia',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK493201/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 16. HEMATOLOGY =====================
  {
    term_en: 'Thrombocytopenia',
    term_ar: 'نقص الصفيحات الدموية',
    synonyms: ['Low platelet count', 'قلة الصفائح الدموية'],
    pronunciation: 'throm-boh-sy-toh-PEE-nee-uh',
    ipa: '/ˌθrɒm.boʊˌsaɪ.təˈpiː.ni.ə/',
    english_definition:
      'A hematologic finding characterized by an abnormally low concentration of circulating platelets (typically below 150,000/µL), predisposing patients to mucocutaneous bleeding and bruising.',
    arabic_definition:
      'انخفاض غير طبيعي في عدد الصفائح الدموية في الدم عن الحد الطبيعي (أقل من 150 ألف/ميكروليتر غالباً)، مما يزيد القابلية للكدمات والنزيف السطحي أو العميق (Thrombocytopenia).',
    specialty: 'Hematology',
    sources: [
      {
        name: 'MedlinePlus – Thrombocytopenia',
        url: 'https://medlineplus.gov/ency/article/000586.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Leukocytosis',
    term_ar: 'كثرة كريات الدم البيضاء',
    synonyms: ['Elevated WBC count', 'ارتفاع خلايا الدم البيضاء'],
    pronunciation: 'loo-koh-sy-TOH-sis',
    ipa: '/ˌluː.koʊ.saɪˈtoʊ.sɪs/',
    english_definition:
      'An elevation in the total white blood cell (leukocyte) count above the reference range, commonly reflecting an acute response to infection, inflammation, stress, or hematologic malignancy.',
    arabic_definition:
      'ارتفاع العدد الكلي لكريات الدم البيضاء في الدورة الدموية فوق المعدل المرجعي الطبيعي (Leukocytosis)، وغالباً ما يعكس استجابة الجسم للعدوى أو الالتهاب أو الإجهاد أو بعض اضطرابات نخاع العظم.',
    specialty: 'Hematology',
    sources: [
      {
        name: 'NCBI Bookshelf – Leukocytosis',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK560882/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Erythropoiesis',
    term_ar: 'تكوّن الكريات الحمراء',
    synonyms: ['Red blood cell production', 'إنتاج خلايا الدم الحمراء'],
    pronunciation: 'ih-rith-roh-poy-EE-sis',
    ipa: '/ɪˌrɪθ.roʊ.pɔɪˈiː.sɪs/',
    english_definition:
      'The biological process by which hematopoietic stem cells in the bone marrow proliferate and differentiate into mature red blood cells, primarily stimulated by renal erythropoietin.',
    arabic_definition:
      'العملية الحيوية التي تتكاثر فيها الخلايا الجذعية المكونة للدم في نخاع العظم وتتمايز إلى كريات دم حمراء ناضجة (Erythropoiesis)، ويحفّزها أساساً هرمون الإريثروبويتين المفرز من الكلى.',
    specialty: 'Hematology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/erythropoiesis',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Coagulopathy',
    term_ar: 'اعتلال التخثر الدموي',
    synonyms: ['Clotting disorder', 'اضطراب تجلط الدم'],
    pronunciation: 'koh-ag-yoo-LOP-uh-thee',
    ipa: '/koʊˌæɡ.jʊˈlɒp.ə.θi/',
    english_definition:
      'A pathological impairment of the blood clotting cascade that leads either to excessive bleeding or to inappropriate intravascular thrombosis.',
    arabic_definition:
      'اختلال مرضي في آليات تخثر الدم (Coagulopathy) يؤدي إما إلى سيولة مفرطة ونزيف متكرر أو إلى زيادة القابلية لتكوّن الجلطات الدموية داخل الأوعية.',
    specialty: 'Hematology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/coagulopathy',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 17. IMMUNOLOGY =====================
  {
    term_en: 'Anaphylaxis',
    term_ar: 'التَأَق (الصدمة التحسسية الحادة)',
    synonyms: ['Anaphylactic shock', 'صدمة الحساسية المفرطة'],
    pronunciation: 'an-uh-fuh-LAK-sis',
    ipa: '/ˌæn.ə.fɪˈlæk.sɪs/',
    english_definition:
      'A severe, rapid-onset, systemic hypersensitivity reaction mediated largely by IgE and mast cell degranulation that causes airway edema, bronchospasm, and life-threatening hypotension.',
    arabic_definition:
      'تفاعل تحسسي جهازي حاد وسريع ومهدد للحياة (Anaphylaxis) يتوسطه الغلوبولين المناعي IgE، ويسبب تورّم مجرى التنفس وتشنج القصبات وهبوطاً حاداً في ضغط الدم.',
    specialty: 'Immunology',
    sources: [
      {
        name: 'MedlinePlus – Anaphylaxis',
        url: 'https://medlineplus.gov/anaphylaxis.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Antibody',
    term_ar: 'الجسم المضاد (الغلوبولين المناعي)',
    synonyms: ['Immunoglobulin', 'Ig', 'الأضداد المناعية'],
    pronunciation: 'AN-tih-bod-ee',
    ipa: '/ˈæn.tɪ.bɒd.i/',
    english_definition:
      'A Y-shaped glycoprotein (immunoglobulin) produced by plasma cells derived from B lymphocytes that specifically binds a target antigen to neutralize pathogens or mark them for destruction.',
    arabic_definition:
      'بروتين سكري متخصص على شكل حرف Y يُعرف بالغلوبولين المناعي (Immunoglobulin)، تنتجه الخلايا البلازمية المشتقة من الخلايا البائية لتمييز المستضدات الغريبة ومعادلتها.',
    specialty: 'Immunology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/antibody',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Cytokine',
    term_ar: 'السيتوكين (الوسيط المناعي الخلوي)',
    synonyms: ['Immune signaling protein', 'المحركات الخلوية'],
    pronunciation: 'SY-toh-kyne',
    ipa: '/ˈsaɪ.tə.kaɪn/',
    english_definition:
      'Small secreted signaling proteins—including interleukins, interferons, and tumor necrosis factors—that regulate immune cell communication, inflammation, and hematopoiesis.',
    arabic_definition:
      'بروتينات إشارية دقيقة تفرزها الخلايا المناعية وغيرها لتنظيم التواصل الخلوي والاستجابة المناعية والالتهاب وتكوّن الدم (Cytokine)، وتشمل الإنترلوكينات والإنترفيرونات.',
    specialty: 'Immunology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/cytokine',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Autoimmunity',
    term_ar: 'المناعة الذاتية',
    synonyms: ['Autoimmune response', 'اضطراب المناعة الذاتية'],
    pronunciation: 'aw-toh-ih-MYOO-nih-tee',
    ipa: '/ˌɔː.toʊ.ɪˈmjuː.nə.ti/',
    english_definition:
      'Failure of immune self-tolerance in which humoral antibodies or T lymphocytes mistakenly mount an immune attack against normal host cells and tissues.',
    arabic_definition:
      'فقدان التحمّل المناعي الذاتي بحيث يهاجم الجهاز المناعي عن طريق الأضداد الذاتية أو الخلايا التائية أنسجة وخلايا الجسم السليمة عن طريق الخطأ (Autoimmunity).',
    specialty: 'Immunology',
    sources: [
      {
        name: 'MedlinePlus – Autoimmune Diseases',
        url: 'https://medlineplus.gov/autoimmunediseases.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 18. RADIOLOGY =====================
  {
    term_en: 'Computed Tomography',
    term_ar: 'التصوير المقطعي المحوسب (الأشعة المقطعية)',
    synonyms: ['CT scan', 'CAT scan', 'الأشعة المقطعية'],
    pronunciation: 'kom-PYOO-ted toh-MOG-ruh-fee',
    ipa: '/kəmˈpjuː.tɪd təˈmɒɡ.rə.fi/',
    english_definition:
      'A diagnostic imaging modality that combines rotating X-ray projections with computer reconstruction to generate detailed cross-sectional anatomical slices of internal organs.',
    arabic_definition:
      'تقنية تصوير طبي تشخيصي تجمع بين حزم الأشعة السينية الدوّارة والمعالجة الحاسوبية لإنتاج صور مقطعية دقيقة ثنائية وثلاثية الأبعاد لأعضاء الجسم الداخلية (CT Scan).',
    specialty: 'Radiology',
    sources: [
      {
        name: 'MedlinePlus – CT Scans',
        url: 'https://medlineplus.gov/ctscans.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Magnetic Resonance Imaging',
    term_ar: 'التصوير بالرنين المغناطيسي',
    synonyms: ['MRI', 'الرنين المغناطيسي'],
    pronunciation: 'mag-NET-ik REZ-uh-nuns IM-ij-ing',
    ipa: '/mæɡˈnɛt.ɪk ˈrɛz.ə.nəns ˈɪm.ɪ.dʒɪŋ/',
    english_definition:
      'A non-ionizing medical imaging technique using strong magnetic fields and radiofrequency pulses to generate high-contrast images of soft tissues, brain, spine, and joints.',
    arabic_definition:
      'وسيلة تصوير تشخيصي متقدمة دون أشعة مؤيّنة تعتمد على المجالات المغناطيسية القوية وموجات الراديو لإظهار الأنسجة الرخوة والدماغ والنخاع الشوكي والمفاصل بدقة عالية (MRI).',
    specialty: 'Radiology',
    sources: [
      {
        name: 'MedlinePlus – MRI Scans',
        url: 'https://medlineplus.gov/mriscans.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Ultrasonography',
    term_ar: 'التصوير بالموجات فوق الصوتية (السونار)',
    synonyms: ['Ultrasound', 'Sonography', 'الإيكو'],
    pronunciation: 'ul-truh-suh-NOG-ruh-fee',
    ipa: '/ˌʌl.trə.səˈnɒɡ.rə.fi/',
    english_definition:
      'A safe, real-time diagnostic imaging technique utilizing high-frequency sound waves and tissue echo reflections to visualize internal organs, blood flow, and fetal development.',
    arabic_definition:
      'تقنية تصوير طبي آمنة ومباشرة تستخدم الموجات الصوتية عالية التردد وارتداد صداها لتكوين صور فورية للأعضاء الداخلية وتدفق الدم ومتابعة الجنين (Ultrasonography).',
    specialty: 'Radiology',
    sources: [
      {
        name: 'MedlinePlus – Ultrasound',
        url: 'https://medlineplus.gov/ultrasound.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Radiopaque',
    term_ar: 'ظليل للأشعة (حاجب للأشعة السينية)',
    synonyms: ['Radiodense', 'معتِم إشعاعياً'],
    pronunciation: 'ray-dee-oh-PAYK',
    ipa: '/ˌreɪ.di.oʊˈpeɪk/',
    english_definition:
      'A property of dense anatomical structures (such as cortical bone) or contrast agents (such as barium and iodine) that strongly absorb X-rays and therefore appear bright white on radiographs.',
    arabic_definition:
      'صفة للأنسجة الكثيفة كالعظام أو المواد الظليلة كاليود والباريوم التي تمتص الأشعة السينية ولا تسمح بنفاذها بسهولة، فتظهر باللون الأبيض الساطع في صور الأشعة (Radiopaque).',
    specialty: 'Radiology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/radiopaque',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 19. MEDICAL GENETICS =====================
  {
    term_en: 'Autosomal Dominant',
    term_ar: 'الوراثة الجسدية السائدة',
    synonyms: ['Dominant autosomal inheritance', 'صفة جسمية سائدة'],
    pronunciation: 'aw-tuh-SOH-mul DOM-ih-nunt',
    ipa: '/ˌɔː.təˈsoʊ.məl ˈdɒm.ɪ.nənt/',
    english_definition:
      'A Mendelian pattern of inheritance in which a single copy of a mutated gene located on a non-sex chromosome (autosome) is sufficient to express the trait or genetic disorder.',
    arabic_definition:
      'نمط وراثي مندلِي يكفي فيه وجود نسخة واحدة فقط من الأليل الطافر على أحد الكروموسومات الجسمية (Autosome) لإظهار الصفة أو المرض الوراثي لدى الفرد (Autosomal Dominant).',
    specialty: 'Medical Genetics',
    sources: [
      {
        name: 'MedlinePlus Genetics – Autosomal Dominant',
        url: 'https://medlineplus.gov/genetics/understanding/inheritance/inheritancepatterns/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Karyotype',
    term_ar: 'النمط النووي (الخريطة الصبغية)',
    synonyms: ['Chromosomal profile', 'المخطط الكروموسومي'],
    pronunciation: 'KAIR-ee-oh-type',
    ipa: '/ˈkɛər.i.oʊ.taɪp/',
    english_definition:
      'The complete visual and numerical arrangement of an individual set of chromosomes arranged in homologous pairs by size and centromere position to detect chromosomal abnormalities.',
    arabic_definition:
      'الصورة المرتّبة والشاملة لمجموعة الكروموسومات في خلية الفرد في أزواج متماثلة حسب الطول وموضع السنترومير (Karyotype)، ويُستخدم لكشف الاختلالات الصبغية العددية والتركيبية.',
    specialty: 'Medical Genetics',
    sources: [
      {
        name: 'MedlinePlus – Karyotype Genetic Test',
        url: 'https://medlineplus.gov/lab-tests/karyotype-genetic-test/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Mutation',
    term_ar: 'الطفرة الجينية',
    synonyms: ['Genetic variant', 'تغير الحمض النووي'],
    pronunciation: 'myoo-TAY-shun',
    ipa: '/mjuːˈteɪ.ʃən/',
    english_definition:
      'A permanent alteration in the nucleotide sequence of DNA that may range from a single base-pair substitution to large chromosomal rearrangements and may be benign or pathogenic.',
    arabic_definition:
      'تغيّر دائم في تسلسل النيوكليوتيدات داخل الحمض النووي (DNA)، وقد يشمل قاعدة مفردة أو جزءاً كبيراً من الكروموسوم، وقد يكون محايداً أو مسبباً لأمراض وراثية (Mutation).',
    specialty: 'Medical Genetics',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/mutation',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Phenotype',
    term_ar: 'النمط الظاهري',
    synonyms: ['Observable traits', 'الصفة الظاهرية'],
    pronunciation: 'FEE-noh-type',
    ipa: '/ˈfiː.nə.taɪp/',
    english_definition:
      'The observable physical, biochemical, physiological, and behavioral characteristics of an organism produced by the interaction between its genotype and environmental factors.',
    arabic_definition:
      'مجموع الصفات الشكلية والحيوية والفسيولوجية القابلة للملاحظة لدى الكائن الحي (Phenotype)، والتي تنشأ نتيجة تفاعل تركيبه الوراثي (Genotype) مع العوامل البيئية.',
    specialty: 'Medical Genetics',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/phenotype',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 20. CLINICAL TERMINOLOGY =====================
  {
    term_en: 'Dyspnea',
    term_ar: 'ضيق التنفس (عُسر التنفس)',
    synonyms: ['Shortness of breath', 'SOB', 'زلة تنفسية'],
    pronunciation: 'disp-NEE-uh',
    ipa: '/dɪspˈniː.ə/',
    english_definition:
      'A subjective clinical sensation of uncomfortable, labored, or difficult breathing commonly associated with cardiopulmonary, hematologic, or metabolic disorders.',
    arabic_definition:
      'إحساس ذاتي غير مريح بصعوبة التنفس أو الحاجة لبذل جهد إضافي لإدخال الهواء (Dyspnea)، ويرتبط غالباً بأمراض الجهاز التنفسي أو القلب أو فقر الدم الشديد.',
    specialty: 'Clinical Terminology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/dyspnea',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Tachycardia',
    term_ar: 'تسرّع القلب',
    synonyms: ['Fast heart rate', 'تسارع نبض القلب'],
    pronunciation: 'tak-ih-KAR-dee-uh',
    ipa: '/ˌtæk.ɪˈkɑːr.di.ə/',
    english_definition:
      'An elevated resting heart rate exceeding normal age-specific limits—defined in adults as greater than 100 beats per minute—which may be physiological or arrhythmic.',
    arabic_definition:
      'ارتفاع معدل ضربات القلب أثناء الراحة فوق الحد الطبيعي المرجعي، ويُعرَّف لدى البالغين بأكثر من 100 نبضة في الدقيقة (Tachycardia)، وقد ينجم عن الحمى أو القلق أو اضطراب النظم.',
    specialty: 'Clinical Terminology',
    sources: [
      {
        name: 'NCI Dictionary of Cancer Terms (NIH)',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/tachycardia',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Cyanosis',
    term_ar: 'الزُراق (ازرقاق الجلد والأغشية)',
    synonyms: ['Bluish discoloration', 'الزرقة السريرية'],
    pronunciation: 'sy-uh-NOH-sis',
    ipa: '/ˌsaɪ.əˈnoʊ.sɪs/',
    english_definition:
      'A bluish or purplish discoloration of the skin, nail beds, or mucous membranes resulting from elevated levels of deoxygenated hemoglobin in capillary blood.',
    arabic_definition:
      'تلوّن الجلد أو الشفاه أو الأغشية المخاطية باللون الأزرق أو البنفسجي نتيجة ارتفاع تركيز الهيموغلوبين غير المؤكسج في الشعيرات الدموية (Cyanosis)، ويشير إلى نقص الأكسجة.',
    specialty: 'Clinical Terminology',
    sources: [
      {
        name: 'MedlinePlus – Cyanosis',
        url: 'https://medlineplus.gov/ency/article/003215.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Edema',
    term_ar: 'الوَذَمة (تورّم الأنسجة بالسوائل)',
    synonyms: ['Oedema', 'Fluid retention swelling', 'تجمع السوائل'],
    pronunciation: 'ih-DEE-muh',
    ipa: '/ɪˈdiː.mə/',
    english_definition:
      'Palpable swelling caused by abnormal accumulation of excess fluid within the interstitial spaces of tissues or body cavities.',
    arabic_definition:
      'تورّم محسوس في الأنسجة ناتج عن تراكم غير طبيعي للسوائل في الحيز الخلالي بين الخلايا (Edema)، وقد ينجم عن قصور القلب أو أمراض الكلى أو الكبد أو الانسداد اللمفاوي.',
    specialty: 'Clinical Terminology',
    sources: [
      {
        name: 'MedlinePlus – Edema',
        url: 'https://medlineplus.gov/edema.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 21. MEDICAL PROCEDURES =====================
  {
    term_en: 'Endotracheal Intubation',
    term_ar: 'التنبيب الرغامي (إدخال أنبوب القصبة الهوائية)',
    synonyms: ['Intubation', 'Airway intubation', 'التنبيب التنفسي'],
    pronunciation: 'en-doh-TRAY-kee-ul in-too-BAY-shun',
    ipa: '/ˌɛn.doʊˈtreɪ.ki.əl ˌɪn.tjuːˈbeɪ.ʃən/',
    english_definition:
      'A critical airway management procedure in which a flexible plastic tube is placed through the mouth or nose into the trachea to secure patency and deliver mechanical ventilation.',
    arabic_definition:
      'إجراء طبي طارئ أو جراحي يتم فيه إدخال أنبوب مرن عبر الفم أو الأنف إلى القصبة الهوائية (Endotracheal Intubation) لضمان بقاء مجرى الهواء مفتوحاً وتوصيل التنفس الاصطناعي.',
    specialty: 'Medical Procedures',
    sources: [
      {
        name: 'MedlinePlus – Endotracheal Intubation',
        url: 'https://medlineplus.gov/ency/article/003449.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Lumbar Puncture',
    term_ar: 'البزل القطني (سحب سائل النخاع الشوكي)',
    synonyms: ['Spinal tap', 'LP', 'بزل السائل الدماغي الشوكي'],
    pronunciation: 'LUM-bar PUNK-cher',
    ipa: '/ˈlʌm.bər ˈpʌŋk.tʃər/',
    english_definition:
      'A diagnostic or therapeutic procedure in which a needle is inserted into the lumbar subarachnoid space below the termination of the spinal cord to sample cerebrospinal fluid or measure pressure.',
    arabic_definition:
      'إجراء تشخيصي أو علاجي يتم فيه إدخال إبرة دقيقة في الحيز تحت العنكبوتية بالمنطقة القطنية أسفل نهاية الحبل الشوكي (Lumbar Puncture) لأخذ عينة من السائل الدماغي الشوكي أو قياس ضغطه.',
    specialty: 'Medical Procedures',
    sources: [
      {
        name: 'MedlinePlus – Lumbar Puncture (Spinal Tap)',
        url: 'https://medlineplus.gov/ency/article/003428.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Thoracentesis',
    term_ar: 'بزل الصدر (سحب سائل الجنب)',
    synonyms: ['Pleural tap', 'Thoracocentesis', 'البزل الجنبي'],
    pronunciation: 'thor-uh-sen-TEE-sis',
    ipa: '/ˌθɔːr.ə.sɛnˈtiː.sɪs/',
    english_definition:
      'A percutaneous procedure using a needle or catheter inserted into the pleural space between the lungs and chest wall to remove excess pleural fluid or air for diagnosis or symptom relief.',
    arabic_definition:
      'إجراء طبي يتم فيه إدخال إبرة أو قسطرة عبر جدار الصدر إلى التجويف الجنبي المحيط بالرئة (Thoracentesis) لسحب السوائل أو الهواء المتجمع لأغراض التشخيص أو تخفيف ضيق التنفس.',
    specialty: 'Medical Procedures',
    sources: [
      {
        name: 'MedlinePlus – Thoracentesis',
        url: 'https://medlineplus.gov/ency/article/003420.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Venipuncture',
    term_ar: 'بزل الوريد (سحب الدم الوريدي)',
    synonyms: ['Phlebotomy', 'سحب عينة دم وريدي'],
    pronunciation: 'VEN-ih-punk-cher',
    ipa: '/ˈvɛn.ɪˌpʌŋk.tʃər/',
    english_definition:
      'The surgical or clinical puncture of a peripheral vein using a sterile needle to obtain venous blood samples for laboratory testing or to administer intravenous fluids and medications.',
    arabic_definition:
      'ثقب وريد محيطي بإبرة معقمة (Venipuncture) بغرض سحب عينات الدم لإجراء التحاليل المخبرية أو لتثبيت قسطرة لإعطاء المحاليل والأدوية الوريدية.',
    specialty: 'Medical Procedures',
    sources: [
      {
        name: 'MedlinePlus – Venipuncture',
        url: 'https://medlineplus.gov/ency/article/003423.htm',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },

  // ===================== 22. LABORATORY MEDICINE =====================
  {
    term_en: 'Complete Blood Count',
    term_ar: 'تعداد الدم الكامل (تحليل صورة الدم)',
    synonyms: ['CBC', 'Full blood count', 'صورة الدم الكاملة'],
    pronunciation: 'kum-PLEET blud kownt',
    ipa: '/kəmˈpliːt blʌd kaʊnt/',
    english_definition:
      'A foundational laboratory panel that quantifies red blood cells, white blood cells, platelets, hemoglobin, hematocrit, and red cell indices to screen for anemia, infection, and blood disorders.',
    arabic_definition:
      'تحليل مخبري أساسي يقيس أعداد خلايا الدم الحمراء والبيضاء والصفائح الدموية ومستوى الهيموغلوبين والهيماتوكريت (CBC)، ويُستخدم للكشف عن فقر الدم والالتهابات واضطرابات الدم.',
    specialty: 'Laboratory Medicine',
    sources: [
      {
        name: 'MedlinePlus – Complete Blood Count (CBC)',
        url: 'https://medlineplus.gov/lab-tests/complete-blood-count-cbc/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Polymerase Chain Reaction',
    term_ar: 'تفاعل البوليميراز المتسلسل (PCR)',
    synonyms: ['PCR', 'تضخيم الحمض النووي'],
    pronunciation: 'puh-LIM-er-ayz chayn ree-AK-shun',
    ipa: '/pəˈlɪm.ə.reɪz tʃeɪn riˈæk.ʃən/',
    english_definition:
      'A rapid molecular biology laboratory technique used to amplify millions of copies of a specific DNA or RNA segment for detecting pathogens, genetic mutations, or forensic markers.',
    arabic_definition:
      'تقنية مخبرية جزيئية دقيقة تُستخدم لمضاعفة أجزاء محددة من الحمض النووي DNA أو RNA إلى ملايين النسخ (PCR) لتشخيص العدوى الفيروسية والبكتيرية والكشف عن الطفرات الوراثية.',
    specialty: 'Laboratory Medicine',
    sources: [
      {
        name: 'MedlinePlus – PCR Tests',
        url: 'https://medlineplus.gov/lab-tests/pcr-tests/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Urinalysis',
    term_ar: 'تحليل البول الشامل',
    synonyms: ['Urine test', 'UA', 'فحص البول المخبري'],
    pronunciation: 'yoor-ih-NAL-ih-sis',
    ipa: '/ˌjʊər.ɪˈnæl.ɪ.sɪs/',
    english_definition:
      'A comprehensive physical, chemical, and microscopic laboratory examination of a urine specimen to evaluate renal function, urinary tract infections, diabetes, and metabolic conditions.',
    arabic_definition:
      'فحص مخبري شامل للبول يشمل التقييم الفيزيائي والكيميائي والمجهري (Urinalysis) لتشخيص التهابات المسالك البولية وأمراض الكلى والسكري والاضطرابات الاستقلابية.',
    specialty: 'Laboratory Medicine',
    sources: [
      {
        name: 'MedlinePlus – Urinalysis',
        url: 'https://medlineplus.gov/urinalysis.html',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
  {
    term_en: 'Electrolyte Panel',
    term_ar: 'تحليل شوارد الدم (الأملاح والمعادن)',
    synonyms: ['Serum electrolytes', 'Chem-7 electrolytes', 'فحص أملاح الدم'],
    pronunciation: 'ih-LEK-troh-lyte PAN-ul',
    ipa: '/ɪˈlɛk.trə.laɪt ˈpæn.əl/',
    english_definition:
      'A blood chemistry test measuring essential charged minerals—chiefly sodium, potassium, chloride, and bicarbonate—to assess hydration, acid-base balance, and cardiac or renal status.',
    arabic_definition:
      'فحص مخبري لكيمياء الدم يقيس تراكيز الأيونات الأساسية في البلازما مثل الصوديوم والبوتاسيوم والكلوريد والبيكربونات (Electrolyte Panel) لتقييم توازن السوائل والحموضة ووظائف القلب والكلى.',
    specialty: 'Laboratory Medicine',
    sources: [
      {
        name: 'MedlinePlus – Electrolyte Panel',
        url: 'https://medlineplus.gov/lab-tests/electrolyte-panel/',
        accessedAt: VERIFIED_DATE,
      },
    ],
  },
];

const ALL_RAW_MEDICAL_TERMS: RawSeedTerm[] = [
  ...RAW_MEDICAL_TERMS,
  ...EXPANDED_MEDICAL_TERMS,
];

export const MEDICAL_TERMS_SEED: MedicalTerm[] = ALL_RAW_MEDICAL_TERMS.map((raw) => {
  const id = raw.id || slugifyMedicalTermId(raw.term_en);
  return {
    id,
    term_en: raw.term_en,
    term_en_lower: raw.term_en.toLowerCase(),
    term_ar: raw.term_ar,
    synonyms: raw.synonyms,
    pronunciation: raw.pronunciation,
    ipa: raw.ipa,
    english_definition: raw.english_definition,
    arabic_definition: raw.arabic_definition,
    specialty: raw.specialty,
    sources: raw.sources,
    verification_status: 'verified',
    last_verified: VERIFIED_DATE,
    search_tokens: buildMedicalSearchTokens({
      term_en: raw.term_en,
      term_ar: raw.term_ar,
      synonyms: raw.synonyms,
      specialty: raw.specialty,
    }),
    created_at: VERIFIED_ISO,
    updated_at: VERIFIED_ISO,
  };
});
