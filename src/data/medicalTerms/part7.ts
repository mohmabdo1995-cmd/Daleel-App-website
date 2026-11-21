// Auto-curated verified medical terms (NIH NLM MeSH 2026 + verified bilingual medical entries) - Part 7
import type { MedicalTermSource } from '../../types';

export interface RawExpandedMedicalTerm {
  id: string;
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

export const MEDICAL_TERMS_PART_7: RawExpandedMedicalTerm[] = [
  {
    "id": "tuberculoma",
    "term_en": "Tuberculoma",
    "term_ar": "تورم سلي",
    "synonyms": [
      "Tuberculomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tumor-like mass resulting from the enlargement of a tuberculous lesion.",
    "arabic_definition": "التورم السلي هو مظهر من المظاهر السريرية لمرض السل، وهو عبارة عن جمع الدرنات في كتلة واحدة، وهكذا يمكن أن يحاكي الأورام السرطانية من أنواع عديدة في دراسات التصوير الطبي. وبما أن هذه تطورات معقدة، قد يحتوي السل السلبي بداخله تكلسات. (Tuberculoma)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014375.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trombiculiasis",
    "term_en": "Trombiculiasis",
    "term_ar": "داء الخطماوات",
    "synonyms": [
      "Trombiculiases",
      "Trombiculosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infestation with mites of the genus Trombicula, whose larvae carry the rickettsial agent of scrub typhus.",
    "arabic_definition": "داء الخطماوات (الإنجليزية: Trombiculosis أو trombiculiasis أو trombiculidiasis) هو طفح تسببه لدغات سوس من الخطماوات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014323.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bordetella-bronchiseptica",
    "term_en": "Bordetella bronchiseptica",
    "term_ar": "بورديتيلا منتنة للقصبات",
    "synonyms": [
      "Bacillus bronchisepticus",
      "Alcaligenes bronchisepticus",
      "Bacillus bronchicanis",
      "Haemophilus bronchisepticus",
      "Alcaligenes bronchicanis",
      "Bacterium bronchisepticus",
      "Brucella bronchiseptica"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of BORDETELLA that is parasitic and pathogenic. It is found in the respiratory tract of domestic and wild mammalian animals and can be transmitted from animals to man. It is a common cause of bronchopneumonia in lower animals.",
    "arabic_definition": "بورديتيلا منتنة للقصبات (الاسم العلمي: Bordetella bronchiseptica) هي نوع من البكتيريا، سلبية الغرام، تتبع البورديتيلا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016950.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acetobacteraceae",
    "term_en": "Acetobacteraceae",
    "term_ar": "خلالية (بكتيريا)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative aerobic bacteria consisting of ellipsoidal to rod-shaped cells that occur singly, in pairs, or in chains.",
    "arabic_definition": "الخلالية (الاسم العلمي: Acetobacteraceae) هي فصيلة من البكتيريا تتبع رتبة الوردانيات من طائفة متقلبات ألفا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016947.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "legionella-pneumophila",
    "term_en": "Legionella pneumophila",
    "term_ar": "فيلقية مستروحة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria that is the causative agent of LEGIONNAIRES' DISEASE. It has been isolated from numerous environmental sites as well as from human lung tissue, respiratory secretions, and blood.",
    "arabic_definition": "الفيلقية المستروحة (الاسم العلمي: Legionella pneumophila) هي نوع من البكتيريا يتبع جنس الفيلقية. وهذه البكتيريا من المسببات الأساسية للأمراض البشرية، وهي العامل المسبب لداء الفيلقيات أو مرض الفيالقة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016952.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudomonas-putida",
    "term_en": "Pseudomonas putida",
    "term_ar": "زائفة كريهة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria isolated from soil and water as well as clinical specimens. Occasionally it is an opportunistic pathogen.",
    "arabic_definition": "زائفة كريهة (الاسم العلمي: Pseudomonas putida) هي نوع من البكتيريا تتبع جنس الزائفة من فصيلة الزوائف.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016958.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leptospiraceae",
    "term_en": "Leptospiraceae",
    "term_ar": "نظيرات البريمية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bacteria consisting of flexible helical cells exhibiting a right-handed conformation. It consists of a single genus, LEPTOSPIRA.",
    "arabic_definition": "نظيرات البريمية (الاسم العلمي: Leptospiraceae) هي فصيلة من البكتيريا تتبع رتبة البريميات من طائفة الملتويانية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016953.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microsporidiosis",
    "term_en": "Microsporidiosis",
    "term_ar": "داء البوغيات الخفية",
    "synonyms": [
      "Microsporidioses",
      "Microsporidia Infection",
      "Infection, Microsporidia",
      "Infections, Microsporidia",
      "Microsporidia Infections",
      "Infections, Microspora",
      "Infection, Microspora",
      "Microspora Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with FUNGI of the phylum MICROSPORIDIA.",
    "arabic_definition": "داء البوغيات الخفية (الإنجليزية: Microsporidiosis) هو مرض بكتيري يصاب به الحيوانات والبشر ولكن أول حالة كشفت عند الإنسان كانت عام 1976 ومنذ ذلك الوقت تزايد عدد الحالات حتى أصبح معروفا في كل بلاد العالم وخاصة عند ناقصي المناعة المكتسبة (الإيدز).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016881.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "burkholderia-pseudomallei",
    "term_en": "Burkholderia pseudomallei",
    "term_ar": "بيركهولدرية راعومية",
    "synonyms": [
      "Pseudomonas pseudomallei"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria that causes MELIOIDOSIS. It has been isolated from soil and water in tropical regions, particularly Southeast Asia.",
    "arabic_definition": "بيركهولدرية راعومية (الاسم العلمي: Burkholderia pseudomallei) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس البيركهولدرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016957.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myxococcus-xanthus",
    "term_en": "Myxococcus xanthus",
    "term_ar": "مكورة مخاطية صفراء",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gliding bacteria found on soil as well as in surface fresh water and coastal seawater.",
    "arabic_definition": "مكورة مخاطية صفراء (الاسم العلمي: Myxococcus xanthus) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس مكورة مخاطية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016941.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acinetobacter-calcoaceticus",
    "term_en": "Acinetobacter calcoaceticus",
    "term_ar": "راكدة خلات الكالسيوم",
    "synonyms": [
      "Neisseria winogradskyi",
      "Micrococcus calcoaceticus",
      "Moraxella calcoacetica"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria found in soil and water. Although considered to be normally nonpathogenic, this bacterium is a causative agent of nosocomial infections, particularly in debilitated individuals.",
    "arabic_definition": "راكدة خلات الكالسيوم (الاسم العلمي: Acinetobacter calcoaceticus) هي نوع من البكتيريا يتبع جنس الراكدة من الفصيلة الموراكسيلية. وهي بكتيريا عصوية مكورة غير متحركة سلبية الغرام، تنمو في ظل الظروف الهوائية، كما أنها إيجابية الكاتالاز وسلبية الأكسيداز.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016954.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ehrlichiosis",
    "term_en": "Ehrlichiosis",
    "term_ar": "داء إيرليخ",
    "synonyms": [
      "Ehrlichioses",
      "Ehrlichia Infection",
      "Ehrlichia Infections",
      "Ehrlichia ewingii Infection",
      "Ehrlichia ewingii Infections",
      "E. ewingii Infection",
      "E. ewingii Infections",
      "Human Ehrlichiosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tick-borne disease characterized by FEVER; HEADACHE; myalgias; ANOREXIA; and occasionally RASH. It is caused by several bacterial species and can produce disease in DOGS; CATTLE; SHEEP; GOATS; HORSES; and humans. The primary species causing human disease are EHRLICHIA CHAFFEENSIS; ANAPLASMA PHAGOCYTOPHILUM; and Ehrlichia ewingii.",
    "arabic_definition": "داء إيرليخ أو الداء الإيرليخي (الإنجليزية: Ehrlichiosis) هو مرض بكتيري من الأمراض المنقولة بالقراد، والذي يسبب أعراضاً شبيهة بأعراض الانفلونزا. تتراوح أعراض داء ايرليخ من آلام خفيفة بالجسم وحتى الحمى الشديدة والتي تظهر غالباً في خلال أسبوع إلى أسبوعين منذ لسعة القرادة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016873.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xanthomonas-campestris",
    "term_en": "Xanthomonas campestris",
    "term_ar": "مستصفرة مرجية",
    "synonyms": [
      "Achromobacter lunatus",
      "Bacillus campestris",
      "Bacterium campestre",
      "Phytomonas campestris",
      "Pseudomonas campestris"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria that is pathogenic for plants.",
    "arabic_definition": "مستصفرة مرجية أو مستصفرة الخردل المرجي (الاسم العلمي: Xanthomonas campestris) هي نوع من البكتيريا يتبع جنس المستصفرة من الفصيلة المستصفرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016959.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fusobacterium-nucleatum",
    "term_en": "Fusobacterium nucleatum",
    "term_ar": "مغزلية منواة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, anaerobic, rod-shaped bacteria isolated from the gingival margin and sulcus and from infections of the upper respiratory tract and pleural cavity.",
    "arabic_definition": "مغزلية منواة (الاسم العلمي: Fusobacterium nucleatum) هي نوع من البكتيريا يتبع جنس المغزلية من الفصيلة المغزلية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016967.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "porphyromonas-gingivalis",
    "term_en": "Porphyromonas gingivalis",
    "term_ar": "وحيدات الخلية البورفيرينية اللثوية",
    "synonyms": [
      "Bacteroides gingivalis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, anaerobic, rod-shaped bacteria originally classified within the BACTEROIDES genus. This bacterium produces a cell-bound, oxygen-sensitive collagenase and is isolated from the human mouth.",
    "arabic_definition": "وحيدات الخلية البورفيرينية اللثوية (الاسم العلمي: Porphyromonas gingivalis) هي جراثيم خيطية، ممرضة ولاهوئية. توجد هذه النوعية من البكتريا في تجويف الفم، حيث تتسبب في الإصابة ببعض إلتهابات دواعم الأسنان، كما تتواجد في القناة الهضمية العلوية، السبيل التنفسي، والقولون.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016966.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "moraxella-bovis",
    "term_en": "Moraxella bovis",
    "term_ar": "موراكسيلة بقرية",
    "synonyms": [
      "Moraxella (Moraxella) bovis",
      "Haemophilus bovis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria that is most frequently isolated from bovine eyes in cases of infectious keratoconjunctivitis (KERATOCONJUNCTIVITIS, INFECTIOUS), but also occurs in unaffected eyes and the nasal cavity of cattle.",
    "arabic_definition": "موراكسيلة بقرية (الاسم العلمي: Moraxella bovis) هي نوع من البكتيريا يتبع جنس الموراكسيلة من الفصيلة الموراكسيلية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016955.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myxococcus",
    "term_en": "Myxococcus",
    "term_ar": "مكورة مخاطية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gliding bacteria that are common inhabitants on tree bark and decomposing vegetation. The cells are slender rods with tapering ends.",
    "arabic_definition": "مكورة مخاطية (الاسم العلمي: Myxococcus) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة مكورات مخاطية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016940.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "actinomyces-viscosus",
    "term_en": "Actinomyces viscosus",
    "term_ar": "شعية لزجة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of ACTINOMYCES found in the oral cavity of man and hamsters. It has been isolated from actinomycotic lesions in swine, cats, and dogs and has been identified as a causative agent of animal diseases.",
    "arabic_definition": "شعية لزجة (الاسم العلمي:Actinomyces viscosus) هي نوع من البكتيريا يتبع جنس الشعية الفطرية من فصيلة شعاوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016924.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "corynebacterium-pseudotuberculosis",
    "term_en": "Corynebacterium pseudotuberculosis",
    "term_ar": "وتدية سلية كاذبة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, asporogenous bacteria that was originally isolated from necrotic areas in the kidney of a sheep. It may cause ulcerative lymphangitis, abscesses, and other chronic purulent infections in sheep, horses, and other warm-blooded animals. Human disease may form from contact with infected animals.",
    "arabic_definition": "وتدية سلية كاذبة (الاسم العلمي: Corynebacterium pseudotuberculosis) هي نوع من البكتيريا تتبع جنس الوتدية من فصيلة الوتديات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016925.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhabditida-infections",
    "term_en": "Rhabditida Infections",
    "term_ar": "ديدان عصوية",
    "synonyms": [
      "Infections, Rhabditida",
      "Infection, Rhabditida",
      "Rhabditida Infection",
      "Rhabditida"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with nematodes of the order RHABDITIDA.",
    "arabic_definition": "الديدان العصوية أو الربديات (الإنجليزية: Rhabditida) هي رتبة من الديدان الأسطوانية. (Rhabditida Infections)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017196.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacteriophage-t4",
    "term_en": "Bacteriophage T4",
    "term_ar": "عاثية الأمعاء T4",
    "synonyms": [
      "Enterobacteria phage T4",
      "Phage T4",
      "T4 Phage",
      "Phages, T4",
      "T4 Phages",
      "Coliphage T4",
      "Bacteriophage T2",
      "Phage T2"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Virulent bacteriophage and type species of the genus T4-like phages, in the family MYOVIRIDAE. It infects E. coli and is the best known of the T-even phages. Its virion contains linear double-stranded DNA, terminally redundant and circularly permuted.",
    "arabic_definition": "عاثية الأمعاء T4 (الإنجليزية: Enterobacteria phage T4) هي عاثية تصيب بكتيريا إشريكية القولونية، جينومها دنا ثنائي السلسلة يبلغ طوله 169 ألف زوج قاعدي عاثية الأمعاء T4 عاثية كبير نسبيا ذات رأس عشروني الوجوه. (Bacteriophage T4)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017122.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "siderophores",
    "term_en": "Siderophores",
    "term_ar": "حاملة الحديد",
    "synonyms": [
      "Siderophore",
      "Siderochromes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Low-molecular-weight compounds produced by microorganisms that aid in the transport and sequestration of ferric iron. (The Encyclopedia of Molecular Biology, 1994)",
    "arabic_definition": "حاملات الحديد هي مركبات منخفضة الوزن الجزيئي قادرة على تشكيل معقدات تناسقية مع الحديد عن طريق التمخلب؛ وتفرز تلك المركبات حيوياً من الأحياء الدقيقة مثل البكتريا والفطريات. تساعد هذه المركبات تلك الكائنات الحية على نقل وتخزين الحديد. (Siderophores)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017262.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anisakiasis",
    "term_en": "Anisakiasis",
    "term_ar": "متشاخسة",
    "synonyms": [
      "Anisakiases",
      "Anisakis Infection",
      "Anisakis Infections",
      "Infection, Anisakis",
      "Infections, Anisakis",
      "Anisakis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with roundworms of the genus ANISAKIS. Human infection results from the consumption of fish harboring roundworm larvae. The worms may cause acute NAUSEA; VOMITING; or penetrate into the wall of the DIGESTIVE TRACT where they give rise to EOSINOPHILIC GRANULOMA in the STOMACH; INTESTINES; or the OMENTUM.",
    "arabic_definition": "المتشاخسة (الإنجليزية: Anisakis) هو جنس من الديدان الأسطوانية لها دورة حياة تنطوي على الأسماك والثدييات البحرية، وهي معدية للإنسان وتسبب داء المتشاخسات. والأشخاص الذين ينتجون الجلوبيولين المناعي هـ ردا على هذا الطفيلي قد يحدث لديهم في وقت لاحق رد فعل تحسسي، بما في ذلك الحساسية المفرطة، وذلك بعد تناول الأسماك المصابة بأنواع المتشاخسة. (Anisakiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017129.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "secernentea-infections",
    "term_en": "Secernentea Infections",
    "term_ar": "فصيميات",
    "synonyms": [
      "Infections, Phasmidia",
      "Infection, Phasmidia",
      "Phasmidia Infection",
      "Phasmidia Infections",
      "Infections, Secernentea",
      "Infection, Secernentea",
      "Secernentea Infection",
      "Secernentea"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with nematodes of the subclass SECERNENTEA.",
    "arabic_definition": "المُفرِزات أو الفَصيمِيَّات (الاسم العلمي: Secernentea) هي الصف الرئيسي للديدان الأسطوانية، تتميز بالعديد من الحليمات الذيلية ونظام مطرح يمتلك قنوات جانبية. (Secernentea Infections)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017190.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spirurida-infections",
    "term_en": "Spirurida Infections",
    "term_ar": "حجناوات",
    "synonyms": [
      "Infections, Spirurida",
      "Infection, Spirurida",
      "Spirurida Infection",
      "Habronemiasis",
      "Habronemiases",
      "Spirurida"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with nematodes of the order SPIRURIDA.",
    "arabic_definition": "الحجناوات الملتويات (الإنجليزية: Spiruria) هي رتبة من الديدان الأسطوانية . ككل الديدان الأسطوانية ليس للحجناوات لا جهاز دوران ولا جهاز تنفس. (Spirurida Infections)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017205.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chronic-progressive-external-ophthalmoplegia",
    "term_en": "Chronic Progressive External Ophthalmoplegia",
    "term_ar": "شلل العين التقدمي الخارجي المزمن",
    "synonyms": [
      "CPEO",
      "Graefe Disease",
      "Disease, Graefe",
      "Mitochondrial Ocular Myopathy",
      "Myopathy, Mitochondrial Ocular",
      "Ocular Myopathy, Mitochondrial",
      "Ocular Muscular Dystrophy",
      "Dystrophy, Ocular Muscular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mitochondrial myopathy characterized by slowly progressive paralysis of the levator palpebrae, orbicularis oculi, and extraocular muscles. Ragged-red fibers and atrophy are found on muscle biopsy. Familial and sporadic forms may occur. Disease onset is usually in the first or second decade of life, and the illness slowly progresses until usually all ocular motility is lost. (From Adams et al., Principles of Neurology, 6th ed, p1422)",
    "arabic_definition": "شلل العين التقدمي الخارجي المزمن (CPEO)، والمعروف أيضا باسم شلل العين الخارجية التقدمي (PEO)، هو نوع من اضطرابات حركة العين. وغالبا ما تكون السمة الوحيدة للأمراض المتقدرة، وفي هذه الحالة يجوز أن يقدم مصطلح CPEO على نحو التشخيص. (Chronic Progressive External Ophthalmoplegia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017246.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "porokeratosis",
    "term_en": "Porokeratosis",
    "term_ar": "تقران منخرب",
    "synonyms": [
      "Porokeratosis, Mibelli",
      "Mibelli Porokeratosis",
      "Porokeratosis of Mibelli",
      "Porokeratosis, Palmoplantar",
      "Palmoplantar Porokeratosis",
      "Keratoderma Palmoplantar, Punctate Type 2",
      "Porokeratosis Palmaris et Plantaris Disseminata",
      "Porokeratosis Plantaris Palmaris et Disseminata"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A heritable disorder of faulty keratinization characterized by the proliferation of abnormal clones of KERATINOCYTES and lesions showing varying atrophic patches surrounded by an elevated, keratotic border. These keratotic lesions can progress to overt cutaneous neoplasm. Several clinical variants are recognized, including porokeratosis of Mibelli, linear porokeratosis, disseminated superficial actinic porokeratosis, palmoplantar porokeratosis, and punctate porokeratosis.",
    "arabic_definition": "التقران المنخرب (الإنجليزية: Porokeratosis أو parakeratosis) هو اضطراب من نوع خاص يمتاز نسيجيا بوجود صفاحة قرنية، وهي عمود مكدس بشكل وثيق، وتمتد خلايا نظير التقرن خلال الطبقة المتقرنة مع وجود طبقة حبيبية رقيقة أو أنها غير موجودة.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017499.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brachyspira",
    "term_en": "Brachyspira",
    "term_ar": "براكيسبيرا",
    "synonyms": [
      "Serpulina",
      "Brachyspira innocens",
      "Serpula innocens",
      "Serpulina innocens",
      "Treponema innocens"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of spiral bacteria of the family Brachyspiraceae.",
    "arabic_definition": "براكيسبيرا (Brachyspira) هو جنس من البكتيريا ينتمي إلى شعبة اللوبيات، وقد وُصف أول مرة عام 1983 على يد Hovind-Hougen وزملائه، ويُعد Brachyspira aalborgi نوعه النمطي. تُصنَّف هذه البكتيريا ضمن الطائفة Spirochaetia والرتبة Brachyspirales والفصيلة Brachyspiraceae، وهي بكتيريا حلزونية الشكل سالبة الغرام، تتسم بمتطلبات نمو مخبرية شديدة، ولا تنمو على الأوساط الزرعية التقليدية، مما يجعل تشخيصها السريري والبيطري معتمدًا بشكل متزايد على التقنيات الجزيئية مثل تفاعل البوليميراز المتسلسل الكمي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017400.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepadnaviridae",
    "term_en": "Hepadnaviridae",
    "term_ar": "فيروسات كبدية",
    "synonyms": [
      "Hepadnaviruses",
      "Hepadnavirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of hepatotropic DNA viruses which contains double-stranded DNA genomes and causes hepatitis in humans and animals. There are two genera: AVIHEPADNAVIRUS and ORTHOHEPADNAVIRUS. Hepadnaviruses include HEPATITIS B VIRUS, duck hepatitis B virus (HEPATITIS B VIRUS, DUCK), heron hepatitis B virus, ground squirrel hepatitis virus, and woodchuck hepatitis B virus (HEPATITIS B VIRUS, WOODCHUCK).",
    "arabic_definition": "الفيروسات الكبدية (الإنجليزية: Hepadnaviridae) هي عائلة من فيروسات النسخ العكسي ذات الدنا ثنائي السلسلة. الفيروسات الكبدية هي فصيلة من الفيروسات، يؤدّي البشر والقرود والطيور دور مضيفين طبيعيين لها.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015613.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "feline-immunodeficiency-virus",
    "term_en": "Feline Immunodeficiency Virus",
    "term_ar": "فيروس نقص المناعة لدى القطط",
    "synonyms": [
      "Feline Immunodeficiency Viruses",
      "Feline T-Lymphotropic Lentivirus",
      "Lentivirus, Feline T-Lymphotropic",
      "T-Lymphotropic Lentivirus, Feline",
      "Feline T-Lymphotropic Virus",
      "T-Lymphotropic Virus, Feline",
      "FIV"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of LENTIVIRUS, subgenus feline lentiviruses (LENTIVIRUSES, FELINE) isolated from cats with a chronic wasting syndrome, presumed to be immune deficiency. There are 3 strains: Petaluma (FIP-P), Oma (FIP-O) and Puma lentivirus (PLV). There is no antigenic relationship between FIV and HIV, nor does FIV grow in human T-cells.",
    "arabic_definition": "فيروس نقص المناعة لدى القطط ( FIV ) هو فيروس Lentivirus يصيب القطط في جميع أنحاء العالم ، حيث يصاب 2.5٪ إلى 4.4٪ من القطط . تم عزل FIV لأول مرة في عام 1986 ، بواسطة Niels C Pedersen و Janet K. ومنذ ذلك الحين تم التعرف عليه في القطط المنزلية . (Feline Immunodeficiency Virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016089.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pasteurellaceae",
    "term_en": "Pasteurellaceae",
    "term_ar": "باستوريلات",
    "synonyms": [
      "Histophilus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of coccoid to rod-shaped nonsporeforming, gram-negative, nonmotile, facultatively anaerobic bacteria that includes the genera ACTINOBACILLUS; HAEMOPHILUS; MANNHEIMIA; and PASTEURELLA.",
    "arabic_definition": "الباستوريلات (اللاتينية: Pasteurellaceae) عائلة كبيرة ومتنوعة من المتقلبات سلبية الغرام، وهي العائلة الوحيدة في رتبة الباستوريلاويات. تشمل عوامل ممرضة هامة مثل المستدمية النزلية ولكن أغلبها بكتيريا مطاعمة تقطن في مخاطيات الثدييات والطيور.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015661.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "human-herpesvirus-6",
    "term_en": "Human Herpesvirus 6",
    "term_ar": "فيروس هربسي بشري 6",
    "synonyms": [
      "HBLV",
      "HHV-6",
      "Human B-Lymphotropic Virus",
      "B-Lymphotropic Viruses, Human",
      "B-Lymphotropic Virus, Human",
      "Human B-Lymphotropic Viruses",
      "HHV6",
      "Human betaherpesvirus 6"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Members of the ROSEOLOVIRUS genus of the Betaherpesvirales subfamily isolated from patients with AIDS and other LYMPHOPROLIFERATIVE DISORDERS. It infects and replicates in fresh and established lines of hematopoietic cells and cells of neural origin. It also appears to alter the activity of NK CELLS. HHV-6; (HBLV) antibodies are elevated in patients with AIDS; SJOGREN'S SYNDROME; SARCOIDOSIS; CHRONIC FATIGUE SYNDROME, and certain malignancies. HHV-6A is the most common cause of EXANTHEMA SUBITUM and has been implicated in encephalitis. When HHV-6 integrates into the host genome it is referred to as ciHVH-6. When such VIRUS INTEGRATION occurs into the germline it is referred to as iciHHV-6.",
    "arabic_definition": "الفيروس الهربسي البشري 6 (الإنجليزية: Human herpesvirus 6 or HHV-6) هو الاسم الجامع الشائع للفيروس الهربسي البشري 6 أ والفيروس الهربسي البشري 6 ب، هذه الفيروسات تربطها صلة وثيقة وهما من أنواع الهربس التسعة المعروف أن مضيفها الابتدائي هو البشر.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015654.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polydactyly",
    "term_en": "Polydactyly",
    "term_ar": "كثرة الأصابع",
    "synonyms": [
      "Polydactylies",
      "Hyperdactyly",
      "Hyperdactylies",
      "Polydactylia",
      "Polydactylias",
      "Polydactylism",
      "Polydactylisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital anomaly of the hand or foot, marked by the presence of supernumerary digits.",
    "arabic_definition": "العَنَش أو كثرة الأصابع (الإنجليزية: Polydactyly) هو تشوه خِلقي جسدي في البشر والكلاب والقطط ذات أصابع القدم أو اليد الزائدة. عديد الأصابع هو معاكس لقلة الأصابع (عدد أقل من أصابع القدم أو اليد).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017689.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "siphoviridae",
    "term_en": "Siphoviridae",
    "term_ar": "فيروسات سيفاوية",
    "synonyms": [
      "Syphoviridae",
      "lambda-like viruses",
      "Phages, lambda-Like",
      "lambda-Like Phages",
      "T5-like viruses",
      "Phages, T5-like"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of BACTERIOPHAGES and ARCHAEAL VIRUSES which are characterized by long, non-contractile tails.",
    "arabic_definition": "الفيروسات السيفاوية (الإنجليزية: Siphoviridae) هي عائلة من الفيروسات ذات الدنا ثنائي السلسلة يصيب فقط البكتيريا المتميزة بذيل طويل غير-المتقلص و قفيصة مكعبة الشكل (النمط شكلي ب1) أو بيضوية (النمط الشكلي ب2). لهذه الفيروسات قفيصة يتراوح قطرها بين 55 و 60 نم وذيل طويل يمكن أن يصل حتى 570 نم، سلسلتا الدنا خطيتان وتظم هذه العائلة العاثية λ والعاثية x والعاثية φ80.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017906.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myoviridae",
    "term_en": "Myoviridae",
    "term_ar": "فيروسات عضلية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of BACTERIOPHAGES and ARCHAEAL VIRUSES which are characterized by complex contractile tails.",
    "arabic_definition": "الفيروسات العضلية (الإنجليزية: Myoviridae) هي فصيلة من العاثيات، تضم الأجناس التالية:",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017900.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "podoviridae",
    "term_en": "Podoviridae",
    "term_ar": "فيروسات قدمية",
    "synonyms": [
      "T7-like viruses",
      "T7-like Phages",
      "Phages, T7-like",
      "Phikmvvirus",
      "Phikmvviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bacteriophages which are characterized by short, non-contractile tails.",
    "arabic_definition": "الفيروسات القدمية هي عائلة من العاثيات وتضم الأجناس التالية: (Podoviridae)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017902.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "geminiviridae",
    "term_en": "Geminiviridae",
    "term_ar": "فيروسات توأمية",
    "synonyms": [
      "Geminivirus",
      "Geminiviruses",
      "Mastrevirus",
      "Mastreviruses",
      "Curtovirus",
      "Curtoviruses",
      "Topocuvirus",
      "Topocuviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of plant viruses where the VIRION possesses an unusual morphology consisting of a pair of isometric particles. Transmission occurs via leafhoppers or whitefly. Some viruses cause economically important diseases in cultivated plants. There are four genera: Mastrevirus, Curtovirus, Topocuvirus, and BEGOMOVIRUS.",
    "arabic_definition": "الفيروسات التوأمية (الإنجليزية: Geminiviridae)هي فيروسات نباتية بجينوم حلقي أحادي سلسلة الدي أن إيه وهي بذلك ضمن المجموعة الثانية من تصنيف بلتيمور للفيروسات .",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017791.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystoviridae",
    "term_en": "Cystoviridae",
    "term_ar": "فيروسات كيسية",
    "synonyms": [
      "Cystovirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bacteriophages containing one genus (Cystovirus) with one member (BACTERIOPHAGE PHI 6).",
    "arabic_definition": "الفيروسات الكيسية (الإنجليزية: Cystoviridae) هو جنس من الفيروسات 'ثنائية سلسلة الرنا' و التي تصيب بعض البكتيريا سلبية الغرام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017910.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leviviridae",
    "term_en": "Leviviridae",
    "term_ar": "فيروسات لافي",
    "synonyms": [
      "Caulobacter phage phi Cb5",
      "Phage Mu 2",
      "Mu 2, Phage",
      "Enterobacteria phage Mu 2",
      "Caulobacter phage phi Cb8r",
      "Caulobacter phage phi Cb23r",
      "Pseudomonas phage 7s",
      "Caulobacter phage phi Cb12r"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bacteriophages that infects enterobacteria, CAULOBACTER, and PSEUDOMONAS. The genome consists of linear, positive-sense single-stranded RNA.",
    "arabic_definition": "فيروسات لافي (الإنجليزية: Leviviridae) هي عائلة من الفيروسات تضم الأجناس التالية:",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017907.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phycodnaviridae",
    "term_en": "Phycodnaviridae",
    "term_ar": "فيروسات الطحالب حقيقية النواة",
    "synonyms": [
      "Algal Viruses",
      "Algal Virus",
      "Virus, Algal",
      "Viruses, Algal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of DNA plant viruses that infect eukaryotic algae.",
    "arabic_definition": "فيروسات الطحالب حقيقية النواة (الإنجليزية: Phycodnaviridae) عائلة من الفيروسات (160 اٍلى 560 ألف زوج من القواعد ) وهي من الفيروسات ثنائية سلسلة الدنا. تصيب أفراد هذه العائلة الطحالب حقيقية النواة البحرية وتلك الخاصة بالمياه العذبة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017862.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacteriophage-p2",
    "term_en": "Bacteriophage P2",
    "term_ar": "عاثية الأمعاء P2",
    "synonyms": [
      "P2, Bacteriophage",
      "Coliphage P2",
      "P2, Coliphage",
      "Enterobacteria phage P2",
      "P2 Phage",
      "P2 Phages",
      "Phage, P2",
      "Phages, P2"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of temperate bacteriophage in the genus P2-like viruses, family MYOVIRIDAE, which infects E. coli. It consists of linear double-stranded DNA with 19-base sticky ends.",
    "arabic_definition": "عاثية الأمعاء P2 (الإنجليزية: Enterobacteria phage P2) هي عاثية من جنس الفيروسات الشبيهة-P2 من فصيلة الفيروسات العضلية ضمن رتبة الفيروسات الذنبية. (Bacteriophage P2)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017901.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "caulimovirus",
    "term_en": "Caulimovirus",
    "term_ar": "فيروس القنبيط",
    "synonyms": [
      "Caulimoviruses",
      "Cauliflower Mosaic Virus",
      "Cauliflower Mosaic Viruses",
      "Mosaic Virus, Cauliflower",
      "Mosaic Viruses, Cauliflower",
      "Virus, Cauliflower Mosaic",
      "Viruses, Cauliflower Mosaic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of PLANT VIRUSES, in the family CAULIMOVIRIDAE, that are transmitted by APHIDS in a semipersistent manner. Aphid-borne transmission of some caulimoviruses requires certain virus-coded proteins termed transmission factors.",
    "arabic_definition": "فيروس القنبيط (الإنجليزية: Caulimovirus) هو جنس فيروسات ينتمي لفصيلة فيروسات القنبيط، هناك حاليا عشرة أنواع في هذا الجنس منها فيروس تبرقش القنبيط وتشمل الأمراض المرتبطة بهذا الجنس شفافية العروق (الإنجليزية: Vein clearing).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017796.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flaviviridae",
    "term_en": "Flaviviridae",
    "term_ar": "فيروسات مصفرة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of RNA viruses, many of which cause disease in humans and domestic animals. There are three genera FLAVIVIRUS; PESTIVIRUS; and HEPACIVIRUS, as well as several unassigned species.",
    "arabic_definition": "الفيروسات المصفرة أو الحمات الصفراء (الإنجليزية: Flaviviridae) هي عائلة من الفيروسات تنقلها عادتا مفصليات الأرجل (غالبا القراد والبعوض). تأخد العائلة اٍسمها من فيروس الحمى الصفراء.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018067.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coronavirus",
    "term_en": "Coronavirus",
    "term_ar": "فيروس كورونا",
    "synonyms": [
      "Coronaviruses",
      "Coronavirus, Rabbit",
      "Rabbit Coronavirus",
      "Coronaviruses, Rabbit",
      "Rabbit Coronaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A member of CORONAVIRIDAE which causes respiratory or gastrointestinal disease in a variety of vertebrates.",
    "arabic_definition": "فيروسات كورونا أو الكورونافيرينات المستقيمة (الاسم العلمي: Orthocoronavirinae) هي عائلة فرعية من فيروسات الرنا مفردة السلسلة موجبة الدلالة المغلفة التي تصيب الثدييات والطيور، وتنتمي إلى عائلة الفيروسات التاجية من رتبة الفيروسات العشية. أول فيروس كورونا تم تحديده هو فيروس التهاب الشعب الهوائية المعدي الذي يصيب الدجاج في عقد 1920، واكتُشفت فيروسات كورونا التي تسبب الزكام للبشر في عقد 1960. (Coronavirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017934.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "poliovirus",
    "term_en": "Poliovirus",
    "term_ar": "فيروسة سنجابية",
    "synonyms": [
      "Polioviruses",
      "Human poliovirus 1",
      "Brunhilde Virus",
      "Poliovirus Type 1",
      "Human poliovirus 2",
      "Lansing Virus",
      "Poliovirus Type 2",
      "Human poliovirus 3"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of ENTEROVIRUS which is the causal agent of POLIOMYELITIS in humans. Three serotypes (strains) exist. Transmission is by the fecal-oral route, pharyngeal secretions, or mechanical vector (flies). Vaccines with both inactivated and live attenuated virus have proven effective in immunizing against the infection.",
    "arabic_definition": "الفيروسة السنجابية أو فيروس شلل الأطفال (الإنجليزية: Poliovirus) هو العامل المسبب لشلل الأطفال، هو فيروس معوي بشري وأحد أعضاء عائلة الفيروسات البيكورناوية. يتكون فيروس شلل الأطفال poliovirus من حمض نووي ريبوزي RNA genome وقفيصة بروتين protein capsid.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017955.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "la-crosse-virus",
    "term_en": "La Crosse virus",
    "term_ar": "التهاب لاكروس الدماغي",
    "synonyms": [
      "LaCrosse Virus",
      "La Crosse encephalitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A serotype of the species California encephalitis virus (ENCEPHALITIS VIRUS, CALIFORNIA), in the genus ORTHOBUNYAVIRUS, causing human MENINGOENCEPHALITIS. This is the agent most responsible for California encephalitis (ENCEPHALITIS, CALIFORNIA), the most prevalent mosquito-borne disease recognized in the United States.",
    "arabic_definition": "التهاب لاكروس الدماغي أو التهاب الدماغ بحسب لاكروس أو التهاب الدماغ لاكروس (الإنجليزية: La Crosse encephalitis) ويُدعى اختصاراً LACV هو التهاب دماغي ناجم عن فايروس منقول عن طريق المفصليات يُسمى فايروس لاكروس، والذي ينتقل بواسطة بعوض ناقل تُسمى تريسيرياتوس الزاعجة. يعتبر التهاب لاكروس الدماغي من الأمراض نادرة الحدوث، حيثُ عادةً ما يتم سنوياً تشخيص بين 80-100 حالة مصابة به في الولايات المتحدة. (La Crosse virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018062.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "birnaviridae",
    "term_en": "Birnaviridae",
    "term_ar": "فيروسات بيرنوية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bisegmented, double-stranded RNA viruses causing infection in fish, mollusks, fowl, and Drosophila. There are three genera: AQUABIRNAVIRUS; AVIBIRNAVIRUS; and ENTOMOBIRNAVIRUS. Horizontal and vertical transmission occurs for all viruses.",
    "arabic_definition": "الفيروسات البيرنوية أو عائلة بيرنافيريدي (الإنجليزية: Birnaviridae) هي عائلة الفيروسات التي تضم الأجناس التالية: جنس فيروس بيرنوي بحري;الأنواع: فيروس عدوى نخر البنكرياس جنس فيروس بيرنوي طيري;الأنواع: داء الغومبورو جنس فيروس مبقع; الأنواع: فيروس رأس الأفعى المبقع جنس فيروس بيرنوي حشري;الأنواع: فيروس ذبابة الخل العاشر تتوضع الفيروسات البيرنوية مع المجموعة الثالثة في تصنيف بلتيمور، ما يعني أن لها جينوم ثنائي سلسلة الرنا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018059.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arteriviridae",
    "term_en": "Arteriviridae",
    "term_ar": "فيروسات شريانية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of viruses, of the order NIDOVIRALES, containing spherical virions. In contrast to CORONAVIRIDAE, no protruding spikes are obvious on the surface.",
    "arabic_definition": "فيروسات شريانية (الإنجليزية: Arteriviridae) هي عائلة من الفيروسات تضم جنس: فيروس شرياني وهو جنس فيروسات يضم نوع الفيروس الشرياني الخيلي. الفيروسات الشريانية صغيرة، مغلفة، تصيب الحيوانات وهي فيروسات اٍيجابية ذات الرنا أحادي السلسلة مع جسم عشروني الوجوه.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D028382.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tectiviridae",
    "term_en": "Tectiviridae",
    "term_ar": "فيروس سقفي",
    "synonyms": [
      "Tectivirus",
      "Tectiviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of lipid-containing bacteriophages with double capsids which infect both gram-negative and gram-positive bacteria. It has one genus, Tectivirus.",
    "arabic_definition": "الفيروسات السقفية (الإنجليزية: Tectiviridae) مصنفة مع المجموعة الأولى في تصنيف بلتيمور، هذه العائلة من الفيروسات تصيب البكتيريا سلبية الغرام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017916.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prevotella",
    "term_en": "Prevotella",
    "term_ar": "بريفوتيلا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, anaerobic, nonsporeforming, nonmotile rods. Organisms of this genus had originally been classified as members of the BACTEROIDES genus but overwhelming biochemical and chemical findings in 1990 indicated the need to separate them from other Bacteroides species, and hence, this new genus was established.",
    "arabic_definition": "بريفوتيلا (اللاتينية: Prevotella) هي جنس من البكتيريا سلبية الغرام. العصوانية الميلانينية (اللاتينية: Bacteroides melaninogenicus) أعيد تصنيفها وقسمت إلى البريفوتيلا الميلانينية (اللاتينية: Prevotella melaninogenica) والبريفوتيلا المتوسطة (اللاتينية: Prevotella intermedia).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018720.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prevotella-intermedia",
    "term_en": "Prevotella intermedia",
    "term_ar": "بريفوتيلا متوسطة",
    "synonyms": [
      "Bacteroides intermedius"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, anaerobic, rod-shaped bacteria originally classified within the BACTEROIDES genus. This bacterium is a common commensal in the gingival crevice and is often isolated from cases of gingivitis and other purulent lesions related to the mouth.",
    "arabic_definition": "البريفوتيلا المتوسطة (الاسم العلمي: Prevotella intermedia)، وكانت تعرف سابقًا باسم العصوانيَّة المتوسطة (الاسم العلمي: Bacteroides intermedius)، هي بكتيريا سلبية الغرام، لاهوائية إجبارية وممرِضة، ترتبط بالتهابات دواعم السن، بما في ذلك التهاب اللثة والتهاب دواعم السن، وغالبًا ما توجد في التهاب اللثة التقرحي الناخر الحاد. كما تُعزل عادةً من الخُراجات السنيَّة، حيث تسود البكتيريا اللاهوائية الإجبارية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018713.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "morbillivirus",
    "term_en": "Morbillivirus",
    "term_ar": "فيروسة حصبية",
    "synonyms": [
      "Morbilliviruses",
      "Morbilli Virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family PARAMYXOVIRIDAE (subfamily PARAMYXOVIRINAE) where the virions of most members have hemagglutinin but not neuraminidase activity. All members produce both cytoplasmic and intranuclear inclusion bodies. MEASLES VIRUS is the type species.",
    "arabic_definition": "فيروسة حصبية (الاسم العلمي:Morbillivirus) هي جنس من الفيروسات فصيلة الفيروسات المخاطية من رتبة الفيروسات السلبية الأحادية. وتشمل الأنواع المعروفة حالياً فيروس مراض الكلاب وحصبية الحيتان وحصبية القطط وفيروس الحصبة وطاعون المجترات الصغيرة وفيروس مراض الفقمات وطاعون المواشي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018103.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mononegavirales",
    "term_en": "Mononegavirales",
    "term_ar": "فيروسات سلبية أحادية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An order comprising four families of eukaryotic viruses possessing linear, non-segmented, negative-strand RNA genomes. The families are BORNAVIRIDAE; FILOVIRIDAE; PARAMYXOVIRIDAE; and RHABDOVIRIDAE.",
    "arabic_definition": "الفيروسات السلبية الأحادية (الإنجليزية: Mononegavirales) هي رتبة من الفيروسات تظم أربع عائلات :",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018096.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "circoviridae",
    "term_en": "Circoviridae",
    "term_ar": "فيروسات حلقية",
    "synonyms": [
      "Cyclovirus",
      "Cycloviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of very small viruses containing circular, single-stranded DNA and possessing no envelope. The modes of transmission are not known.",
    "arabic_definition": "الفيروسات الحلقية (الإنجليزية: Circoviridae) هي عائلة من الفيروسات فيروسات، صغيرة مكتشفة حديثا وغير مدروسة بشكل موسع. جينوم أحادي سلسلة الدنا مكونة من واحد اٍلى أربعة كيلو قاعدة وتضم العائلة الأجناس التالية : فيروس حلقي; أنواعها : فيروس حلقي خنزيري فيروس جيروسكوبي; أنواعها: فيروس فقر دم الدجاجي فيروس شريجي; أنواعها: فيروس منتقل بنقل الدم وهناك من يقول إن الفيروس الشريجي أصبح يصنف كعائلة بحد ذاتها.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018136.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orthopoxvirus",
    "term_en": "Orthopoxvirus",
    "term_ar": "أرثوبوكس",
    "synonyms": [
      "Orthopoxviruses",
      "Camelpox virus",
      "Camelpox viruses",
      "virus, Camelpox",
      "Horsepox virus",
      "Horsepox viruses",
      "virus, Horsepox",
      "Raccoonpox virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family POXVIRIDAE, subfamily CHORDOPOXVIRINAE, comprising many species infecting mammals. Viruses of this genus cause generalized infections and a rash in some hosts. The type species is VACCINIA VIRUS.",
    "arabic_definition": "أرثوبوكس (الإنجليزية: Orthopoxvirus) هو جنس من الفيروسات تتطفل على الفقاريات، بما في ذلك الثدييات والبشر، والمفصليات كمضيفات طبيعية. هناك 12 نوعًا في هذا الجنس.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018155.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thogotovirus",
    "term_en": "Thogotovirus",
    "term_ar": "فيروس ثوقوتو",
    "synonyms": [
      "Thogotoviruses",
      "Thogoto-Like Viruses",
      "Thogoto-Like Virus",
      "Dhori virus",
      "Thogoto virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family ORTHOMYXOVIRIDAE comprising tick-borne viruses occasionally infecting humans. Dhori and Thogoto viruses were formerly thought to be members of BUNYAVIRIDAE. Thogoto virus is the type species.",
    "arabic_definition": "فيروس ثوقوتو (اللاتينية: Thogotovirus) هي جنس من الفيروسات ذات الحمض النووي الريبي المغلفة، وهي واحدة من سبعة أجناس في عائلة الفيروسات المخاطية القويمة/الأورثوميكسوفيريدي (اللاتينية: Orthomyxoviridae).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018117.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peste-des-petits-ruminants-virus",
    "term_en": "Peste-des-petits-ruminants virus",
    "term_ar": "طاعون المجترات الصغيرة",
    "synonyms": [
      "Ovine rinderpest"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of MORBILLIVIRUS causing a severe, often fatal enteritis and pneumonia (PESTE-DES-PETITS-RUMINANTS) in sheep and goats.",
    "arabic_definition": "طاعون المجترات الصغيرة (الفرنسية: Peste des Petits Ruminants) أو طاعون الغنم (أي الضأن والمَعْز؛ الإنجليزية: Ovine rinderpest) مرض فيروسي يصيب أساسا الضأن والمعز. السبب الأساسي لهذا المرض هو فيروس طاعون المواشي الصغيرة الذي ينتمي إلى عائلة الفيرسات الحصبية رتبة الفيروسات السلبية الأحادية. (Peste-des-petits-ruminants virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018107.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gammaherpesvirinae",
    "term_en": "Gammaherpesvirinae",
    "term_ar": "غاماهربس",
    "synonyms": [
      "Lymphoproliferative Viruses",
      "Lymphoproliferative Virus",
      "Viruses, Lymphoproliferative",
      "Virus, Lymphoproliferative",
      "Macavirus",
      "Macaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A subfamily of HERPESVIRIDAE characterized by variable reproductive cycles. The genera include: LYMPHOCRYPTOVIRUS and RHADINOVIRUS.",
    "arabic_definition": "غاماهربس (الإنجليزية: Gammaherpesvirinae) هو فيروس ينتمي إلى سلالة فرعية من عائلة الفيروسات المعروفة باسم الهربس وهي عائلة كبيرة من فيروسات الدنا المعروف باسم فيروس الهربس المرتبط بساركوما كابوزي أو (فيروس الهربس المصاحب لسرطان كابوزي)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018142.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kings-evil",
    "term_en": "King's Evil",
    "term_ar": "داء الخنازير",
    "synonyms": [
      "Evil, King's",
      "Kings Evil",
      "Evil, Kings",
      "Evils, Kings",
      "Kings Evils",
      "Mycobacterial cervical lymphadenitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The historic designation for scrofula (TUBERCULOSIS, LYMPH NODE). The disease is so called from the belief that it could be healed by the touch of a king. This term is used only for historical articles using the name king's evil, and is to be differentiated from scrofula as lymph node tuberculosis in modern clinical medicine. (From Webster, 3d ed)",
    "arabic_definition": "الغُدَب أو الخنازيريّ أو داء المِلك (الإنجليزية: king's evil) أو داء الخنازير (الإنجليزية: Scrofula) أو التهاب العقد اللمفاوية العنقية السلي (الإنجليزية: Tuberculous cervical lymphadenitis) أو السَّلَعة أو العقدة الدرنية أو العقدة الخنازيرية أو سلعة عقدة درنية هو نوع من السل يهاجم الغدد اللمفاوية للعنق بصفة خاصة. هذه الأنسجة اللمفاوية تساعد الجسم على مقاومة المرض عن طريق ترشيح البكتيريا والميكروبات الأخرى من الحلق.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018601.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bartonella-henselae",
    "term_en": "Bartonella henselae",
    "term_ar": "برتونيلة هنسيلية",
    "synonyms": [
      "Rochalimaea henselae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria that is the etiologic agent of bacillary angiomatosis (ANGIOMATOSIS, BACILLARY). This organism can also be a cause of CAT-SCRATCH DISEASE in immunocompetent patients.",
    "arabic_definition": "البرتونيلة الهنسيلية (الإنجليزية: Bartonella henselae) وكانت تُسمى سابقاً الروكاليمية أو الروشاليميا (الإنجليزية: Rochalimaea) هي من المتقلبات وتُعتبر العامل المُسبب لمرض خدش القطة (داء البرتونيلات). تنتمي البرتونيلة الهنسيلية إلى جنس البرتونيلات الذي يُعتبر أكثر أنواع البكتيريا شيوعاً في العالم.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018416.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parasitemia",
    "term_en": "Parasitemia",
    "term_ar": "وجود الطفيليات في الدم",
    "synonyms": [
      "Parasitemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of parasites (especially malarial parasites) in the blood. (Dorland, 27th ed)",
    "arabic_definition": "وجود الطفيليات في الدم هو وجود محتوى كمي من الطفيليات في الدم. وهو يستخدم كمقياس للحِمل الطفيلي في الكائن الحي وكعلامة على درجة ومدى العدوى الطفيلية النشطة. (Parasitemia)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018512.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptococcus-equi",
    "term_en": "Streptococcus equi",
    "term_ar": "خنان",
    "synonyms": [
      "Streptococcus zooepidemicus",
      "Strangles",
      "خنان (مرض)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, coccoid bacteria isolated from abscesses in submaxillary glands and mucopurulent discharges of the upper respiratory tract of horses. This organism belongs to Group C streptococci with regards to antigen response and is known to cause strangles. The subspecies S. zooepidemicus is also considered a pathogen of horses.",
    "arabic_definition": "الخُنان أو خُنَاق الخيل عدوى معدية في الجهاز التنفسي العلوي للخيول تسببها بكتيريا موجبة الجرام، عقدية الخيل. ينتج من ذلك أن الغدد الليمفاوية تتضخم وتضغط على البلعوم والحنجرة والقصبة الهوائية، ويمكن أن تسبب انسداد مجرى الهواء مما يؤدي إلى الوفاة، ومن هنا يأتي الاسم. (Streptococcus equi)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018502.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bartonella-quintana",
    "term_en": "Bartonella quintana",
    "term_ar": "برتونيلة خماسية",
    "synonyms": [
      "Rochalimaea quintana",
      "Rickettsia quintana"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria in which man is the primary host and the human body louse, Pediculus humanus, the principal vector. It is the etiological agent of TRENCH FEVER.",
    "arabic_definition": "برتونيلة خماسية (الاسم العلمي: Bartonella quintana) هي نوع من البكتيريا تتبع جنس البرتونيلة من فصيلة البارتونيلات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018413.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-penetrans",
    "term_en": "Mycoplasma penetrans",
    "term_ar": "مفطورة ثاقبة",
    "synonyms": [
      "Malacoplasma penetrans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, facultatively anaerobic bacteria. This organism shows remarkable pathobiologic properties: it adheres to cell surfaces, deeply penetrates into the cell, and strongly adsorbs human red blood cells and human CD4+ lymphocytes and monocytes. M. penetrans was first isolated from the urogenital tract of patients with AIDS and high frequencies of antibodies to it are seen in HIV-infected patients.",
    "arabic_definition": "مفطورة ثاقبة أو مفطورة والجة (الإنجليزية: Mycoplasma penetrans) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018661.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "roseolovirus",
    "term_en": "Roseolovirus",
    "term_ar": "فيروس وردي",
    "synonyms": [
      "Roseoloviruses",
      "Caviid herpesvirus 2",
      "Guinea pig cytomegalovirus",
      "cytomegaloviruses, Guinea pig",
      "Guinea pig cytomegaloviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family HERPESVIRIDAE, subfamily BETAHERPESVIRINAE, whose viruses have been isolated from lymphocytes. HERPESVIRUS 6, HUMAN is the type species.",
    "arabic_definition": "الفيروس الوردي (الإنجليزية: Roseolovirus) هو كائن من جنس الفيروسات من عائلة الفيروسات الهربسية ومن فصيلة الفيروسات الهربسية البيتاوية. تعتبر خلايا الإنسان العائل الطبيعي لهذا الفيروس.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019211.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "micronutrients",
    "term_en": "Micronutrients",
    "term_ar": "مغذي أصغر",
    "synonyms": [
      "Micronutrient"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Essential dietary elements or organic compounds that are required in only small quantities for normal physiologic processes to occur.",
    "arabic_definition": "المغذي الأصغر أو المغذيات الدقيقة أو المغذي زهيد المقدار (الإنجليزية: Micronutrient) هو عنصر كيميائي يحتاجه الكائن الحي بكميات قليلة لتغذيته خلال حياته. المغذيات الصغرى أو الطفيفة ضرورية لعمل الأجهزة الحيوية ونقصها يضر بالكائن الحي سواء كان إنساناً، أو حيواناً أو نباتاً. (Micronutrients)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018977.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "burkholderia",
    "term_en": "Burkholderia",
    "term_ar": "بيركهولدرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic, rod-shaped bacteria originally classified as members of the PSEUDOMONADACEAE.",
    "arabic_definition": "البيركهولدرية (الاسم العلمي: Burkholderia) هي جنس من البكتيريا تتبع الفصيلة البيركهولدرات من رتبة البيركهولدريات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019117.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bromoviridae",
    "term_en": "Bromoviridae",
    "term_ar": "فيروسات منتنة",
    "synonyms": [
      "Anulavirus",
      "Anulaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of RNA plant viruses with a wide host range in crops and horticultural species. All viruses are readily transmitted by mechanical means and some by insects and pollen. The genera include: ALFAMOVIRUS; BROMOVIRUS; CUCUMOVIRUS; ILARVIRUS; and OLEAVIRUS.",
    "arabic_definition": "الفيروسات البرومية (الإنجليزية: Bromoviridae) هي عائلة من فيروسات النباتات، وتضم الأجناس التالية:",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019177.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "potyviridae",
    "term_en": "Potyviridae",
    "term_ar": "فيروسات البطاطا",
    "synonyms": [
      "Bymovirus",
      "Bymoviruses",
      "Ipomovirus",
      "Ipomoviruses",
      "Macluravirus",
      "Macluraviruses",
      "Rymovirus",
      "Rymoviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of RNA plant viruses with flexuous, filamentous particles and consisting of six genera: POTYVIRUS; Ipomovirus; Macluravirus; Rymovirus; Tritimovirus; and Bymovirus. All members of the family form cytoplasmic cylindrical inclusion bodies during infection.",
    "arabic_definition": "فيروسات البطاطا (الإنجليزية: Potyviridae) هي عائلة من فيروسات النبات، عبارة عن جسيمات قضيبية خيطية مرنة. تصنف ضمن الفيروسات الاٍيجابية ذات الرنا أحادي السلسلة في تصنيف بلتيمور.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019176.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sequivirus",
    "term_en": "Sequivirus",
    "term_ar": "فيروسات متعقبة",
    "synonyms": [
      "Parsnip yellow fleck virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of plant viruses in the family SEQUIVIRIDAE. Transmission is by APHIDS but depends on the presence of a helper protein encoded by the Anthriscus yellow virus, a WAIKAVIRUS. The type species is Parsnip yellow fleck virus (parsnip serotype).",
    "arabic_definition": "فيروسات متعقبة (الإنجليزية: Sequiviridae) هي عائلة من الفيروسات، تضم الأجناس التالية: جنس فيروس متعقب: يضم نوع فيروس البقع الصفراء في الجزر الأبيض. (Sequivirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019192.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tombusviridae",
    "term_en": "Tombusviridae",
    "term_ar": "فيروسات الطماطم",
    "synonyms": [
      "Aureusvirus",
      "Aureusviruses",
      "Avenavirus",
      "Avenaviruses",
      "Dianthovirus",
      "Dianthoviruses",
      "Machlomovirus",
      "Machlomoviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of RNA plant viruses infecting dicotyledons. Transmission is mainly by mechanical inoculation and through propagative plant material. All species elicit formation of multivesicular inclusion bodies. There are at least eight genera: Aureusvirus, Avenavirus, CARMOVIRUS, Dianthovirus, Machlomovirus, Necrovirus, Panicovirus, and TOMBUSVIRUS.",
    "arabic_definition": "فيروسات الطماطم (الإنجليزية: Tombusviridae) هي فصيلة (عائلة) من الفيروسات الإيجابية ذات الرنا أحادي السلسلة وتأخذ العائلة اسمها من النوع النموذجي فيروس تقزم الطماطم (فيروس تقزم البندورة).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019183.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "smith-lemli-opitz-syndrome",
    "term_en": "Smith-Lemli-Opitz Syndrome",
    "term_ar": "متلازمة سميث-ليملي-أوبيتز",
    "synonyms": [
      "RSH-SLO Syndrome",
      "RSH-SLO Syndromes",
      "Polydactyly, Sex Reversal, Renal Hypoplasia, And Unilobar Lung",
      "Hyperotosis Corticalis Generalisata Familiaris",
      "RSH Syndrome",
      "RSH Syndromes",
      "Syndrome, RSH",
      "Syndromes, RSH"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive disorder of CHOLESTEROL metabolism. It is caused by a deficiency of 7-dehydrocholesterol reductase, the enzyme that converts 7-dehydrocholesterol to cholesterol, leading to an abnormally low plasma cholesterol. This syndrome is characterized by multiple CONGENITAL ABNORMALITIES, growth deficiency, and INTELLECTUAL DISABILITY.",
    "arabic_definition": "متلازمة سميث-ليملي-أوبيتز (بالإنجليزية Smith-Lemli-Opitz syndrome) وتعرف أيضا بSLOS، أو 7-ديهيدروكوليستيرول نقص اختزال) وهو اضطراب تنموي يؤثر على أجزاء كثيرة من الجسم. ويتميز هذا الشرط من ملامح الوجه مميزة، صغيرة حجم الرأس (صغر الرأس)، أو الإعاقة الفكرية مشاكل التعلم، ومشاكل سلوكية.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019082.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "essential-drugs",
    "term_en": "Essential Drugs",
    "term_ar": "الأدوية الأساسية",
    "synonyms": [
      "Essential medicines"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs considered essential to meet the health needs of a population as well as to control drug costs.",
    "arabic_definition": "الأدوية الأساسية، كما تم تعريفها من قبل منظمة الصحة العالمية، هي الأدوية التي تلبي الاحتياجات الصحية ذات الأولوية للسكان. كما يجب أن تكون هذه الادوية بأسعار معقولة بشكل عام ويستطيع الناس الوصول إليها في جميع الأوقات بكميات كافية. (Essential Drugs)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018954.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "astroviridae",
    "term_en": "Astroviridae",
    "term_ar": "فيروسات نجمية",
    "synonyms": [
      "Astrovirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of RNA viruses with two genera: MAMASTROVIRUS and AVASTROVIRUS. They cause GASTROENTERITIS in humans and also infect other vertebrates.",
    "arabic_definition": "الفيروسات النجمية (الإنجليزية: Astroviridae) هي عائلة من الفيروسات اٍيجابية ذات رنا أحادي السلسلة. تضم هذه العائلة جنس: فيروس نجمي اٍكتشف عام 1975 م باٍستعمال المجهر الاٍلكتروني عقب وباء إسهال تفشي لدى البشر.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019200.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "corticoviridae",
    "term_en": "Corticoviridae",
    "term_ar": "فيروسات قشرية",
    "synonyms": [
      "Alteromonas phage PM2",
      "Bacteriophage PM2",
      "PM2 Bacteriophage",
      "Bacteriophages, PM2",
      "PM2 Bacteriophages",
      "Corticovirus",
      "Merivirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of icosahedral, lipid-containing, non-enveloped bacteriophages containing one genus (Corticovirus).",
    "arabic_definition": "الفيروسات القشرية (الإنجليزية: Corticoviridae) هي عائلة من العاثيات ، عشرونية الوجوه، قفيصة غير مغلفة بقطر 60 نم وغشاء دهني داخلي متوضع بين قشرتين بروتينيتين داخلية وخارجية. القشور تتألف من ثلاث طبقات والأسطح لها نمط سمات مميزة،.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019240.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fuselloviridae",
    "term_en": "Fuselloviridae",
    "term_ar": "فيروسات مستدقة",
    "synonyms": [
      "Fusellovirus",
      "Sulfolobus virus 1",
      "SSV1",
      "Alphafusellovirus",
      "Alphafuselloviruses",
      "Betafusellovirus",
      "Betafuselloviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of lemon-shaped DNA viruses infecting ARCHAEA.",
    "arabic_definition": "الفيروسات المستدقة (الإنجليزية: Fuselloviridae) هي عائلة من الفيروسات وتضم: جنس فيروس مستدق وهو جنس فيروسات ثنائي سلسلة الدنا والذي يصيب العتائق من جنس فص سلفو.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019241.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leishmaniavirus",
    "term_en": "Leishmaniavirus",
    "term_ar": "فيروس الليشمانيا",
    "synonyms": [
      "Leishmaniaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of RNA protozoan viruses of the family TOTIVIRIDAE. Several different strains of Leishmania are infected by a variety of viral species. The type species is Leishmania RNA virus 1-1.",
    "arabic_definition": "فيروس الليشمانيا (الإنجليزية: Leishmaniavirus) جنس من عائلة الفيروسات الخمرية تم اكتشافه في بضعة ذراري الليشمانيا، أغلبها من العالم الجديد مثل الليشمانيا البرازيلية والليشمانية الغيانية، وفي ذرية واحدة من الليشمانيا الكبيرة. جينوم الفيروس عبارة عن حمض نووي ريبوزي ذي طاقين بطول نحو 5300 نوكليوتيد.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019199.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ornithine-carbamoyltransferase-deficiency-disease",
    "term_en": "Ornithine Carbamoyltransferase Deficiency Disease",
    "term_ar": "عوز الأورنيثين ناقل الكربامويل",
    "synonyms": [
      "Ornithine Transcarbamylase Deficiency, Hyperammonemia Due To",
      "Ornithine Carbamoyltransferase Deficiency",
      "OTC Deficiency",
      "Deficiencies, OTC",
      "Deficiency, OTC",
      "OTC Deficiencies",
      "Deficiency Disease, Ornithine Carbamoyltransferase",
      "Deficiency Disease, Ornithine Transcarbamylase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inherited urea cycle disorder associated with deficiency of the enzyme ORNITHINE CARBAMOYLTRANSFERASE, transmitted as an X-linked trait and featuring elevations of amino acids and ammonia in the serum. Clinical features, which are more prominent in males, include seizures, behavioral alterations, episodic vomiting, lethargy, and coma. (Menkes, Textbook of Child Neurology, 5th ed, pp49-50)",
    "arabic_definition": "يُمثل عوز الأورنيثين ناقل الكربامويل (الإنجليزية: Ornithine transcarbamylase deficiency) أشيع اضطرابات دورة اليوريا عند البشر، وهو اضطراب موروث يسبب ارتفاع تراكيز الأمونيا إلى مستويات سامة تتراكم في الدم. يُعد الأورنيثين ناقل الكربامويل -الإنزيم المعيب في هذا الاضطراب- آخر الإنزيمات في القسم القريب من دورة اليوريا، وهو مسؤول عن تحويل الكاربامويل فوسفات والأورنيثين إلى الحمض الأميني سيترولين. (Ornithine Carbamoyltransferase Deficiency Disease)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020163.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastroschisis",
    "term_en": "Gastroschisis",
    "term_ar": "انشقاق البطن الخلقي",
    "synonyms": [
      "Gastroschises",
      "Congenital Fissure of the Abdominal Cavity"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital defect with major fissure in the ABDOMINAL WALL lateral to, but not at, the UMBILICUS. This results in the extrusion of VISCERA. Unlike OMPHALOCELE, herniated structures in gastroschisis are not covered by a sac or PERITONEUM.",
    "arabic_definition": "انشقاق البطن الخلقي (الإنجليزية: Gastroschisis) هو عيب خلقي، تتمدد فيه امعاء الأطفال خارج الجسم خلال فجوة بالقرب من سرة البطن ويتغير حجم هذه الفجوة كما هو الحال لبعض أعضاء الجسم كالكبد والمعدة. ويمكن ان تشمل المضاعفات مشاكل في التغذية وابتسار (خداج) ورتق معوي أو تأخر في النمو داخل الرحم السبب غير معروف عادة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020139.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "zygomycosis",
    "term_en": "Zygomycosis",
    "term_ar": "فطار اقتراني",
    "synonyms": [
      "Zygomycoses",
      "Phycomycosis",
      "Phycomycoses",
      "Entomophthoramycosis",
      "Entomophthoramycoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection in humans and animals caused by fungi in the class Zygomycetes. It includes MUCORMYCOSIS and entomophthoramycosis. The latter is a tropical infection of subcutaneous tissue or paranasal sinuses caused by fungi in the order Entomophthorales. Phycomycosis, closely related to zygomycosis, describes infection with members of Phycomycetes, an obsolete classification.",
    "arabic_definition": "داء الفطار الاقتراني هو أوسع مصطلح يشير إلى العدوى التي تسببها فطريات العفن الخبز من شعبة الزيجوتيكوتا. ومع ذلك، ولأن الزيجوتيكوتا قد تم تحديده على أنه متعدد الاهداب، ولم يتم تضمينه في أنظمة تصنيف الفطريات الحديثة، هذه العدوى الفطرية النادرة والخطيرة والتي تهدد الحياة عادة ما تؤثر على تجويف الفم. (Zygomycosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020096.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperhomocysteinemia",
    "term_en": "Hyperhomocysteinemia",
    "term_ar": "فرط هوموسيستين الدم",
    "synonyms": [
      "Hyperhomocysteinemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Condition in which the plasma levels of homocysteine and related metabolites are elevated (&gt;13.9 μmol/l). Hyperhomocysteinemia can be familial or acquired. Development of the acquired hyperhomocysteinemia is mostly associated with vitamins B and/or folate deficiency (e.g., PERNICIOUS ANEMIA, vitamin malabsorption). Familial hyperhomocysteinemia often results in a more severe elevation of total homocysteine and excretion into the urine, resulting in HOMOCYSTINURIA. Hyperhomocysteinemia is a risk factor for cardiovascular and neurodegenerative diseases, osteoporotic fractures and complications during pregnancy.",
    "arabic_definition": "فرط هوموسيستين الدم، هو حالة طبية تتميز بارتفاع مستوى الهوموسيستين في الدم، ويكون عادةً أكثر من 15 ميكرولتر/ لتر. قد يؤدي عوز فيتامين ب 6 وحمض الفوليك (فيتامين ب 9) وفيتامين ب 12 إلى ارتفاع مستويات الهوموسيستين نتيجة التفاعلات الكيميائية الحيوية التي يشارك فيها. (Hyperhomocysteinemia)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020138.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cupriavidus-necator",
    "term_en": "Cupriavidus necator",
    "term_ar": "محبة النحاس الفتاكة",
    "synonyms": [
      "Wautersia eutropha",
      "Alcaligenes eutropha",
      "Ralstonia eutropha"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A gram-negative, facultatively chemoautotrophic bacterium, formerly called Wautersia eutropha, found in water and soil.",
    "arabic_definition": "محبة النحاس الفتاكة (الاسم العلمي: Cupriavidus necator) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس محبة النحاس.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020118.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycobacterium-kansasii",
    "term_en": "Mycobacterium kansasii",
    "term_ar": "متفطرة كنساس",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A slow-growing, photochromogenic species that is the etiologic agent of a tuberculosis-like disease in humans and is frequently isolated from human pulmonary secretions or tubercles. The incidence of infection is sharply increased among immunocompromised individuals. (Dorland, 28th ed)",
    "arabic_definition": "المتفطرة الكنزاسية أو متفطرة كنساس هي بكتيريا من فصيلة المتفطرات، وهي كائنات تتسبب بأمراض خطيرة في الثدييات مثل السل والجذام، لكن هذا النوع بالتحديد لا يعد خطرا على البشر. (Mycobacterium kansasii)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019909.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rickettsia-conorii",
    "term_en": "Rickettsia conorii",
    "term_ar": "ريكتسيا كونورية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria that is the etiologic agent of BOUTONNEUSE FEVER. It resembles RICKETTSIA RICKETTSII but is antigenically distinct and less virulent for animals and man. (From Bergey's Manual of Systematic Bacteriology, vol 1)",
    "arabic_definition": "الريكتسيا الكونورية (الإنجليزية: Rickettsia conorii) وهي نوع من البكتيريا سالبة الغرام، طفيلي داخل الخلية، تتبع جنس الريكتسيا من الفصيلة الريكتسية. تسبب الريكتسيا الكونورية مرضًا بشريًا يسمى الحمى البرعمية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020114.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycobacterium-ulcerans",
    "term_en": "Mycobacterium ulcerans",
    "term_ar": "القرحة المتفطرة",
    "synonyms": [
      "Mycobacterium buruli"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A slow-growing mycobacterium that infects the skin and subcutaneous tissues, giving rise to indolent BURULI ULCER.",
    "arabic_definition": "القرحة الفطرية هي بكتريا بطيئة النمو تصيب الجلد والأنسجة تحت الجلد بشكل اعتيادي، مما يؤدي إلى ظهور (عقد، صفائح) غير متقرحة ومتراخية وأضرار متقرحة. تعد قرحة بورولي ثالث أكثر أنواع الفطريات شيوعًا بين البشر بعد السل والجذام. (Mycobacterium ulcerans)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019911.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteobacteria",
    "term_en": "Proteobacteria",
    "term_ar": "زائفات",
    "synonyms": [
      "Purple Bacteria",
      "Bacteria, Purple",
      "Pseudomonadota"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A phylum of bacteria consisting of the purple bacteria and their relatives which form a branch of the eubacterial tree. This group of predominantly gram-negative bacteria is classified based on homology of equivalent nucleotide sequences of 16S ribosomal RNA or by hybridization of ribosomal RNA or DNA with 16S and 23S ribosomal RNA.",
    "arabic_definition": "الزائفات أو المتقلبات (البكتيريا البروتينية) (الاسم العلمي: Pseudomonadota)، هي شعبة رئيسية من البكتيريا سالبة الغرام. حاليًا، تعتبر هذه الشعبة هي الشعبة السائدة في عالم البكتيريا. (Proteobacteria)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020560.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "facioscapulohumeral-muscular-dystrophy",
    "term_en": "Facioscapulohumeral Muscular Dystrophy",
    "term_ar": "حثل عضلي وجهي كتفي عضدي",
    "synonyms": [
      "Dystrophies, Facioscapulohumeral Muscular",
      "Dystrophy, Facioscapulohumeral Muscular",
      "Facioscapulohumeral Muscular Dystrophies",
      "Muscular Dystrophies, Facioscapulohumeral",
      "Facioscapulohumeral Atrophy",
      "Atrophies, Facioscapulohumeral",
      "Atrophy, Facioscapulohumeral",
      "Facioscapulohumeral Atrophies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant degenerative muscle disease characterized by slowly progressive weakness of the muscles of the face, upper-arm, and shoulder girdle. The onset of symptoms usually occurs in the first or second decade of life. Affected individuals usually present with impairment of upper extremity elevation. This tends to be followed by facial weakness, primarily involving the orbicularis oris and orbicularis oculi muscles. (Neuromuscul Disord 1997;7(1):55-62; Adams et al., Principles of Neurology, 6th ed, p1420)",
    "arabic_definition": "الحَثَل العضلي الوجهي الكتفي العضُدي واسمه أيضًا حَثَل الضمور العضلي الوجهي الكتفي العضُدي أو حثل لاندوزي ديجرين هو أحد أشكال الحثل العضلي ينتقل وراثيًا بوارثة جسمية قاهرة يصيب أولًا العضلات الهيكلية في الوجه ولوح الكتف والعَضُد (القسم العلوي من الذراع) وهو المرض الثالث الأكثر شيوعًا بين أمراض العضلات الهيكلية المنتقلة بالوراثة. معدل انتشار المرض وفقًا لموقع Orpha.net هو 4 / 100,000 شخص في حين أفادت دراسة سكانية في هولندا عام 2014 أن معدل انتشاره هو 12 لكل 100,000 شخص. (Facioscapulohumeral Muscular Dystrophy)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020391.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "deltaproteobacteria",
    "term_en": "Deltaproteobacteria",
    "term_ar": "متقلبات دلتا",
    "synonyms": [
      "delta Proteobacteria",
      "Proteobacteria delta",
      "Myxococcota"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of PROTEOBACTERIA represented by morphologically diverse, anaerobic sulfidogens. Some members of this group are considered bacterial predators, having bacteriolytic properties.",
    "arabic_definition": "متقلبات دلتا (الإنجليزية: Deltaproteobacteria) هي طائفة من البكتيريا البروتينية (بروتيوباكتريا)، كباقي البكتيريا البروتينية هي سلبية الغرام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020564.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "betaproteobacteria",
    "term_en": "Betaproteobacteria",
    "term_ar": "متقلبات بيتا",
    "synonyms": [
      "beta Proteobacteria",
      "Proteobacteria beta"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class in the phylum PROTEOBACTERIA comprised of chemoheterotrophs and chemoautotrophs which derive nutrients from decomposition of organic material.",
    "arabic_definition": "المتقلبات البيتا (الاسم العلمي:Betaproteobacteria) هي طائفة من البكتيريا تتبع شعبة المتقلبات. كباقي البكتيريا البروتينية هي سلبية الغرام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020562.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alphaproteobacteria",
    "term_en": "Alphaproteobacteria",
    "term_ar": "متقلبات ألفا",
    "synonyms": [
      "alpha Proteobacteria",
      "Proteobacteria alpha"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class in the phylum PROTEOBACTERIA comprised mostly of two major phenotypes: purple non-sulfur bacteria and aerobic bacteriochlorophyll-containing bacteria.",
    "arabic_definition": "متقلبات ألفا أو بكتريا ممثلة للضوء غير منتجة للأكسجين (الاسم العلمي: Alphaproteobacteria) هي طائفة من البكتيريا تتبع شعبة المتقلبات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020561.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gammaproteobacteria",
    "term_en": "Gammaproteobacteria",
    "term_ar": "متقلبات غاما",
    "synonyms": [
      "gamma Proteobacteria",
      "Proteobacteria gamma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of the proteobacteria comprised of facultatively anaerobic and fermentative gram-negative bacteria.",
    "arabic_definition": "متقلبات غاما (الاسم العلمي: Gammaproteobacteria) هي طائفة من البكتيريا تنتمي إلى شعبة المتقلبات، تضم حوالي 250 جنسًا، مما يجعلها الطائفة الأكثر غنىً بالأجناس بين بدائيات النوى. تنتمي العديد من المجموعات البكتيرية ذات الأهمية الطبية والبيئية والعلمية إلى هذه الطائفة، وجميع أعضائها سالبة الجرام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020563.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bradyrhizobium",
    "term_en": "Bradyrhizobium",
    "term_ar": "مجتذرة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic, rod-shaped bacteria usually containing granules of poly-beta-hydroxybutyrate. They characteristically invade the root hairs of leguminous plants and act as intracellular symbionts.",
    "arabic_definition": "مجتذرة أو برادي رايزوبيوم (الاسم العلمي: Bradyrhizobium) هي جنس من بكتيريا التربة، سلبية الغرام، تتبع فصيلة المجتذرات. العديد منها تثبت النيتروجين، والذي يُعد جزءًا مهمًا من دورة النيتروجين.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020369.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gluconobacter",
    "term_en": "Gluconobacter",
    "term_ar": "بكتيريا غلوكونية",
    "synonyms": [
      "Gluconobacter suboxydans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, rod-shaped to ellipsoidal bacteria occurring singly or in pairs and found in flowers, soil, honey bees, fruits, cider, beer, wine, and vinegar. (From Bergey's Manual of Determinative Bacteriology, 9th ed)",
    "arabic_definition": "البكتيريا الغلُوكُونيَّة أو الجُرثومة الغلُوكُونيَّة (الإنجليزية: Gluconobacter) هي جنس من الجراثيم في فصيلة جراثيم حَمْض الخَلّيك. تُفَضِّل البيئات الغنيَّة بالسُّكَّر، لذلك تنوجِد كمُتَعَضِّية (كائِن حَيّ) مُتلِفة في الجِعَة (البِيْرَة).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020576.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epsilonproteobacteria",
    "term_en": "Epsilonproteobacteria",
    "term_ar": "متقلبات إيبسيلونية",
    "synonyms": [
      "epsilon Proteobacteria",
      "Proteobacteria epsilon",
      "Campylobacteria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of proteobacteria consisting of chemoorganotrophs usually associated with the DIGESTIVE SYSTEM of humans and animals.",
    "arabic_definition": "المتقلبات الإيبسيلونية (الاسم العلمي: Epsilonproteobacteria) هي طائفة من البكتيريا تتبع صف المتقلبات.، كباقي البكتيريا البروتينية هي سالبة الغرام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020565.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oxalobacter-formigenes",
    "term_en": "Oxalobacter formigenes",
    "term_ar": "قضيبية الحميض الفورميكية",
    "synonyms": [
      "Oxalobacter"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sole species of the genus Oxalobacter consisting of straight or curved gram-negative rods with rounded ends. Cells are nonmotile, nonsporing, and use oxylates as the only source of CARBON and energy, with formate and CARBON DIOXIDE as end products. They are isolated from lake sediments and from the rumen or large bowel of humans and animals. (From Bergey's Manual of Determinative Bacteriology, 9th ed)",
    "arabic_definition": "قضيبية الحميض الفورميكية (الاسم العلمي: Oxalobacter formigenes) هي نوع من البكتيريا، سلبية الغرام، تتبع القضيبيات الحميض.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020624.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "delftia-acidovorans",
    "term_en": "Delftia acidovorans",
    "term_ar": "دلفتية ملتهمة الحمض",
    "synonyms": [
      "Comamonas acidovorans",
      "Pseudomonas acidovorans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative rod-shaped bacteria found ubiquitously and formerly called Comamonas acidovorans and Pseudomonas acidovorans. It is the type species of the genus DELFTIA.",
    "arabic_definition": "دلفتية ملتهمة الحمض (الاسم العلمي: Delftia acidovorans) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس الدلفتية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020605.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "comamonas-testosteroni",
    "term_en": "Comamonas testosteroni",
    "term_ar": "كوماموناسية تستوستيرونية",
    "synonyms": [
      "Pseudomonas testosteroni"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic rods formerly called Pseudomonas testosteroni. It is differentiated from other Comamonas species by its ability to assimilate testosterone and to utilize phenylacetate or maleate as carbon sources.",
    "arabic_definition": "كوماموناسية تستوستيرونية (الاسم العلمي: Comamonas testosteroni) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس الكوماموناسية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020604.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "taylorella-equigenitalis",
    "term_en": "Taylorella equigenitalis",
    "term_ar": "تايلورية حصانية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of bacteria which is comprised of gram-negative rods which often approach a spherical shape. They are nonmotile and microaerophilic. They are considered parasites of horses and are pathogenic for mares. (From Bergey's Manual of Determinative Bacteriology, 9th ed)",
    "arabic_definition": "تايلورية حصانية (الاسم العلمي: Taylorella equigenitalis) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس التايلوريات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020625.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "morganella-morganii",
    "term_en": "Morganella morganii",
    "term_ar": "مورغانيلة مورغانية",
    "synonyms": [
      "Bacillus morgani",
      "Proteus morganii",
      "Salmonella morgani"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of MORGANELLA formerly classified as a Proteus species. It is found in the feces of humans, dogs, other mammals, and reptiles. (From Bergey's Manual of Determinative Bacteriology, 9th ed)",
    "arabic_definition": "مورغانيلا مورغاني (الاسم العلمي: Morganella morganii) هي نوع من البكتيريا تتبع جنس المورغانيلة من الفصيلة المورغانيلية. مورغانيلّا مورغانِي (Morganella morganii) تنتمي إلى قبيلة البروتياء (Proteeae) من فصيلة المعويات (Enterobacteriaceae).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020613.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyphomicrobium",
    "term_en": "Hyphomicrobium",
    "term_ar": "خيطبية",
    "synonyms": [
      "Hyphomicrobium methylovorum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of rod-shaped, oval, or bean-shaped bacteria found in soil and fresh water. Polar prosthecae are present and cells reproduce by budding at the tips of the prosthecae. Cells of this genus are aerobic and grow best with one-carbon compounds. (From Bergey's Manual of Determinative Bacteriology, 9th ed)",
    "arabic_definition": "الخيطبية (الاسم العلمي: Hyphomicrobium) هي جنس من البكتيريا يتبع الفصيلة الخيطبيات من رتبة المستجذريات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020582.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhodomicrobium",
    "term_en": "Rhodomicrobium",
    "term_ar": "وردانية (بكتيريا)",
    "synonyms": [
      "Rhodomicrobium vannielii"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus, in the family HYPHOMICROBIACEAE, comprised of ovoid-shaped bacteria with polar growth and a characteristic vegetative growth cycle. Cells grow preferably photoheterotrophically under anaerobic conditions in the light, but will also grow under microaerobic or aerobic conditions in the dark. (From Bergey's Manual of Determinative Bacteriology, 9th ed)",
    "arabic_definition": "الوردانية (الاسم العلمي:Rhodomicrobium) هي جنس من البكتيريا تتبع الفصيلة الخيطبيات من رتبة المستجذريات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020623.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "isosporiasis",
    "term_en": "Isosporiasis",
    "term_ar": "داء متماثلات البوائغ",
    "synonyms": [
      "Isosporiases",
      "Isospora Infection",
      "Infection, Isospora",
      "Isospora Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with parasitic protozoa of the genus ISOSPORA, producing intestinal disease. It is caused by ingestion of oocysts and can produce tissue cysts.",
    "arabic_definition": "داء متماثلات البوائغ هو مرض معوي يصيب الإنسان سببه طفيلي يدعى بمتماثلة البوائغ البديعة (Isospora belli). يوجد هذا الداء في كل العالم وخصوصا في المناطق المدارية وشبه المدارية. (Isosporiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D021865.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cyclosporiasis",
    "term_en": "Cyclosporiasis",
    "term_ar": "داء حلقيات الأبواغ",
    "synonyms": [
      "Cyclosporiases",
      "Cyclospora Infection",
      "Cyclospora Infections",
      "Infection, Cyclospora",
      "Infections, Cyclospora"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with parasitic protozoa of the genus CYCLOSPORA. It is distributed globally and causes a diarrheal illness. Transmission is waterborne.",
    "arabic_definition": "داء حلقيات الأبواغ هو مرض ناجم عن عدوى حلقية الأبواغ، وهي من الأوالي الممرضة التي تنتقل عن طريق البراز أو الطعام والمياه الملوثين بالبراز. أُبلغ عن حالات تفشي المرض بسبب الفواكه والخضروات الملوثة. (Cyclosporiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D021866.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acatalasia",
    "term_en": "Acatalasia",
    "term_ar": "انعدام الكاتالاز",
    "synonyms": [
      "Acatalasemia",
      "Takahara Disease",
      "Disease, Takahara",
      "Takahara's Disease",
      "Disease, Takahara's",
      "Takaharas Disease",
      "Hypocatalasemia",
      "Hypocatalasia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare autosomal recessive disorder resulting from the absence of CATALASE activity. Though usually asymptomatic, a syndrome of oral ulcerations and gangrene may be present.",
    "arabic_definition": "انعدام الكاتالاز (الإنجليزية: Acatalasia أو acatalasemia) أو داء تاكاهارا (الإنجليزية: Takahara's disease) هو اضطراب جسيم تأكسدي متنحي سببه فقدان تام لإنزيم الكاتالاز.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020642.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterobacter-aerogenes",
    "term_en": "Enterobacter aerogenes",
    "term_ar": "أمعائية مرياحة",
    "synonyms": [
      "Klebsiella aerogenes",
      "Klebsiella mobilis",
      "Klebsiella mobilus",
      "Aerobacter aerogenes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gram-negative, capsulated, gas-producing rods found widely in nature. Both motile and non-motile strains exist. The species is closely related to KLEBSIELLA PNEUMONIAE and is frequently associated with nosocomial infections",
    "arabic_definition": "أمعائية مرياحة أو إيروباكتر ايروجينس (الاسم العلمي: Enterobacter aerogenes) هي نوع من البكتيريا يتبع جنس الأمعائية من الفصيلة الأمعائيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D021902.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arcobacter",
    "term_en": "Arcobacter",
    "term_ar": "عصوية مقوسة",
    "synonyms": [
      "Arcobacter butzleri"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerotolerant, spiral-shaped bacteria isolated from water and associated with diarrhea in humans and animals.",
    "arabic_definition": "عصوية مقوسة (الإنجليزية: Arcobacter) هي جنس من البكتيريا، سلبية الغرام، تتبع العطيفات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020640.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "papillomaviridae",
    "term_en": "Papillomaviridae",
    "term_ar": "فيروسات الأورام الحليمية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of small, non-enveloped DNA viruses infecting birds and most mammals, especially humans. They are grouped into multiple genera, but the viruses are highly host-species specific and tissue-restricted. They are commonly divided into hundreds of papillomavirus types, each with specific gene function and gene control regions, despite sequence homology. Human papillomaviruses are found in the genera ALPHAPAPILLOMAVIRUS; BETAPAPILLOMAVIRUS; GAMMAPAPILLOMAVIRUS; and MUPAPILLOMAVIRUS.",
    "arabic_definition": "فيروسات الأورام الحليمية (الاسم العلمي: Papillomaviridae) عائلةٌ من فيروسات الدنا غير المغلفة. عُرفت مئات الأنواع من هذه الفيروسات التي يُشار إليها عادةً بكلمة «أنماط»، ووُجد أنها تصيب جميع الثدييات المدروسة بدقة، إضافةً إلى الفقاريات الأخرى مثل الطيور والأفاعي والسلاحف والأسماك.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D027383.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nidovirales",
    "term_en": "Nidovirales",
    "term_ar": "فيروسات عشية",
    "synonyms": [
      "Nidoviruses",
      "Nidovirus",
      "Mesoniviridae",
      "Alphamesoniviruses",
      "Alphamesonivirus",
      "Mesoniviruses",
      "Mesonivirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An order comprising three families of eukaryotic viruses possessing linear, nonsegmented, positive sense RNA genomes. The families are Mesoniviridae; CORONAVIRIDAE; ARTERIVIRIDAE; and RONIVIRIDAE.",
    "arabic_definition": "الفيروسات العشية (الإنجليزية: Nidovirales)هي رتبة لفيروسات ذات عوائل حيوانية وبشرية (مثال: فيروس كورونا المرتبط بمتلازمة الشرق الأوسط التنفسية (ميرس كوف) أو فيروس كورونا المرتبط بالمتلازمة التنفسية الحادة الوخيمة (سارس كوف). وتشمل فصائل الفيروسات التاجية (Coronaviridae)، والفيروسات الشريانية (Arteriviridae)، والفيروسات الرونية (Roniviridae)، والفيروسات العشية المتوسطة (Mesoniviridae).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D028381.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "borrelia-burgdorferi",
    "term_en": "Borrelia burgdorferi",
    "term_ar": "بوريليا برغدورفيرية",
    "synonyms": [
      "Borrelia burgdorferi sensu stricto",
      "Lyme Disease Spirochete"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A specific species of bacteria, part of the BORRELIA BURGDORFERI GROUP, whose common name is Lyme disease spirochete.",
    "arabic_definition": "بوريليا برغدورفيرية (الاسم العلمي: Borrelia burgdorferi) هي نوع من البكتيريا تتبع جنس البوريليا من الفصيلة البوريلية. وهي متواجدة بشكل كبير في شمال أمريكا، ولكنها أيضا تتواجد في أوروبا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D025065.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chlamydia-muridarum",
    "term_en": "Chlamydia muridarum",
    "term_ar": "متدثرة فأرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Species of CHLAMYDIA causing pneumonitis in mice and hamsters. These isolates formerly belonged to CHLAMYDIA TRACHOMATIS.",
    "arabic_definition": "متدثرة فأرية (الاسم العلمي: Chlamydia muridarum) هي نوع من البكتيريا يتبع جنس المتدثرة من الفصيلة المتدثرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D023502.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "canarypox-virus",
    "term_en": "Canarypox virus",
    "term_ar": "جدري الكناري",
    "synonyms": [
      "Canarypox viruses",
      "Canarypox"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of AVIPOXVIRUS, subfamily CHORDOPOXVIRINAE. Canarypox virus vectors are used in vaccine and immunotherapy research.",
    "arabic_definition": "جدري الكناري (الإنجليزية: Canarypox) وهو مرض يسببه فيروس الوقس الطيري يصيب الطيور البرية والأسيرة ويمكن أن يسبب خسائر كبيرة. يمكن لجدري الكناري دخول الخلايا البشرية ولكن لا يمكنه البقاء على قيد الحياة ولا التكاثر فيها. (Canarypox virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D028121.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chlamydophila",
    "term_en": "Chlamydophila",
    "term_ar": "متدثرة",
    "synonyms": [
      "Chlamydia (bacterium)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family CHLAMYDIACEAE comprising gram-negative non CHLAMYDIA TRACHOMATIS-like species infecting vertebrates. Chlamydophila do not produce detectable quantities of glycogen. The type species is CHLAMYDOPHILA PSITTACI.",
    "arabic_definition": "المتدثرة أو الكلاميديا (الاسم العلمي: Chlamydia) هي جنس من البكتيريا يتبع الفصيلة المتدثرية من رتبة المتدثريات. عدوى الكلاميديا هي العدوى الجرثومية المنقولة جنسيا الأكثر شيوعا بين البشر تصيب كلا الجنسين ويمكن أن تسبب أذية دائمة في الجهاز التناسلي الانثوي، وهي السبب الرئيسي لعدوى العمى في جميع أنحاء العالم. (Chlamydophila)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D023501.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asfarviridae",
    "term_en": "Asfarviridae",
    "term_ar": "فيروسات حمى الخنازير الإفريقية وما يتصل بها",
    "synonyms": [
      "Asfivirus",
      "Asfiviruses",
      "African Swine Fever-Like Viruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of double-stranded DNA viruses containing one genus Asfivirus. It is the source of AFRICAN SWINE FEVER.",
    "arabic_definition": "فيروسات حمى الخنازير الأفريقية وما يتصل بها أو الفيروسات الأصفارية (الإنجليزية: Asfarviridae) هي عائلة من الفيروسات و التي تصيب بالدرجة الأولى الخنازير، مما أدى اٍلى ظهور حمى الخنزير الأفريقي، وكل فيروسات هذه العائلة مغلفة وبجينوم ثنائي سلسلة الدنا. توجد عدة أنواع، البعض منها قادر على اٍصابة الاٍنسان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D025701.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipothrixviridae",
    "term_en": "Lipothrixviridae",
    "term_ar": "فيروسات شحمي الشعر",
    "synonyms": [
      "Alphalipothrixvirus",
      "Alphalipothrixviruses",
      "Betaliphothrixvirus",
      "Betaliphothrixviruses",
      "Gammalipothrixvirus",
      "Gammalipothrixviruses",
      "Deltalipothrixvirus",
      "Deltalipothrixviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Family of enveloped, lipid-containing, filamentous DNA viruses that infect ARCHAEA.",
    "arabic_definition": "فيروسات شحمي الشعر (الإنجليزية: Lipothrixviridae) هي عائلة من الفيروسات التي تصيب العتائق. ويتشاركون الخصائص مع عائلة Rudiviridae وكلاهما من الفيروسات الخيطية بجينوم \"ثنائي سلسلة الدنا\" والتي تصيب العتائق أليفة الحرارة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D023643.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "guttaviridae",
    "term_en": "Guttaviridae",
    "term_ar": "فيروسات قطرة",
    "synonyms": [
      "Sulfolobus virus SNDV",
      "SNDV, Sulfolobus virus",
      "SNDV",
      "Sulfolobus SNDV-like Viruses",
      "Viruses, Sulfolobus SNDV-like"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Family of archaeal viruses with a single genus: Sulfolobus SNDV-like Viruses.",
    "arabic_definition": "الفيروسات القطرة (الإنجليزية: Guttaviridae) هو جنس من الفيروسات ثنائية سلسلة الدنا، والتي تصيب أحد أجناس العتائق",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D023644.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bornaviridae",
    "term_en": "Bornaviridae",
    "term_ar": "فيروسات بورنوية",
    "synonyms": [
      "Bornavirus",
      "Bornaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family in the order MONONEGAVIRALES comprising one genus Bornavirus. This family has a unique form of mRNA processing: replication and transcription takes place in the nucleus.",
    "arabic_definition": "فيروس بورنا هو جنس الفيروس الوحيد من الفيروسات البورنوية في رتبة الفيروسات السلبية الأحادية، ولها أصغر جينوم (8.9 كيلو قاعدة) من بين كل الفيروسات السلبية الأحادية وهو الوحيد في هذه الرتبة الذي له القدرة على التنسخ داخل نواة الخلية. مع أن الفيروس اٍشتهر بتسببه في مرض بورنا لدى الأحصنة، أظهرت الاكتشافات الحديثة أن الفيروس البورناوي يمكن أن يلعب دورا لدى الاٍنسان في بعض الاٍضطرابات العصبية والعقلية، بما في ذلك الاكتئاب وتعكر المزاج ثنائي القطب. (Bornaviridae)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D028981.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sin-nombre-virus",
    "term_en": "Sin Nombre virus",
    "term_ar": "فيروس لااسم له",
    "synonyms": [
      "Muerto Canyon Virus",
      "Four Corners Virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of ORTHOHANTAVIRUS which emerged in the Four Corners area of the United States in 1993. It causes a serious, often fatal pulmonary illness (HANTAVIRUS PULMONARY SYNDROME) in humans. Transmission is by inhaling aerosolized rodent secretions that contain virus particles, carried especially by deer mice (PEROMYSCUS maniculatus) and pinyon mice (P. truei).",
    "arabic_definition": "فيروس لااسم له (الإنجليزية: Sin Nombre orthohantavirus) اختصاراً (SNV) (بالإسبانية تعني «بدون اسم») هو جنس من الفيروسات التي تنتمي لعائلة فيروسات بنياوية و هو العامل المسبب لمرض متلازمة فيروس هانتا الرئوية (HCPS). تم اكتشاف هذا الفيروس من جنس فيروسات هانتا في عام 1993 على القوارض التي تم العثور عليها في ممتلكات أحد المرضى الأوائل الذين يعانون من متلازمة هانتافيروس الرئوية، في منطقة فور كورنرز بالولايات المتحدة. (Sin Nombre virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D029261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ebolavirus",
    "term_en": "Ebolavirus",
    "term_ar": "فيروس الإيبولا",
    "synonyms": [
      "Ebolaviruses",
      "Ebola Virus",
      "Ebola Viruses",
      "Virus, Ebola",
      "Viruses, Ebola",
      "Ebola-like Viruses",
      "Ebola-like Virus",
      "Ebola Virus, Cote d'Ivoire"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus in the family FILOVIRIDAE consisting of several distinct species of Ebolavirus, each containing separate strains. These viruses cause outbreaks of a contagious, hemorrhagic disease (HEMORRHAGIC FEVER, EBOLA) in humans, usually with high mortality.",
    "arabic_definition": "يعتبر جنس فيروسات الإيبولا أصنوفة فيروسية ضمن عائلة الفيروسات الخيطية (فيروسات على شكل خيوط) ورتبة الفيروسات السلبية الأحادية. يسمى أعضاء هذا الجنس بفيروسات الإيبولا، ويرمز الجينوم الخاص بهم على شكل حمض نووي ريبوزي أحادي السلسلة سلبي الاتجاه. (Ebolavirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D029043.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "closteroviridae",
    "term_en": "Closteroviridae",
    "term_ar": "فيروسات اصفرار البنجر",
    "synonyms": [
      "Ampelovirus",
      "Ampeloviruses",
      "Velarivirus",
      "Velariviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of plant viruses containing the largest single-stranded RNA genomes. Infections typically involve yellowing and necrosis, particularly affecting the phloem.",
    "arabic_definition": "فيروسات إصفرار البنجر (الإنجليزية: Closteroviridae) هي فصيلة من الفيروسات تضم الأجناس التالية: فيروس إصفرار البنجر: يضم نوع فيروس إصفرار البنجر وفيروس تريستيزا الحمضيات. فيروس مصفر الخس: يضم نوع فيروس مصفر الخس المعدي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D029381.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gb-virus-c",
    "term_en": "GB virus C",
    "term_ar": "التهاب الكبد G",
    "synonyms": [
      "Pegivirus C",
      "GBV-C",
      "Hepatitis G virus",
      "Human Pegivirus-1",
      "Pegivirus-1, Human",
      "Human Pegivirus Genotype 1",
      "HPgV1",
      "HPgV-1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of virus in the family FLAVIVIRIDAE. It is genetically heterogeneous, of human origin, and transmitted by blood or blood products. Despite its alternate name (Hepatitis G virus), its pathogenicity remains controversial.",
    "arabic_definition": "التهاب الكبد الفيروسي G (الإنجليزية: Hepatitis G) أو (الإنجليزية: GB virus C) هو أحد الأمراض الفيروسية المعدية التي تصيب الإنسان، اكتشف الفيروس عام 1996 ولكن المعلومات المتوفرة عنه ما زالت قليلة وهي قيد البحث والدراسة. كان يعتقد سابقاً أنها تصيب الكبد مسببة التهاباً كبدياً فيروسياً إلا أن الدراسات اللاحقة لم تستطع ربطها بالمرض بشكل قاطع والمعلومات المتوفرة حاليا عن هذا الفيروس ربما تتغير في المستقبل مع ظهور نتائج الأبحاث المنتظرة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D029407.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ascoviridae",
    "term_en": "Ascoviridae",
    "term_ar": "فيروسات الزق",
    "synonyms": [
      "Ascovirus",
      "Toursvirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of insect viruses causing disease in lepidopterous larvae, most commonly from species of the owlet moth family Noctuidae.",
    "arabic_definition": "فيروسات الزق أو عائلة اسكوفيريدي (الإنجليزية: Ascoviridae) هي عائلة من الفيريونات مكونة من غلاف، نواة، غشاء شحمي مرتبط بالجسيم الداخلي. قفيصة الفيروس مغلفة بقطر يقدر ب 130 نم وبطول يتراوح بين 200 و 240 نم الفيريونات عصوية الشكل، بيضوية، سجقية الشكل (سقائي الشكل).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D029223.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prophages",
    "term_en": "Prophages",
    "term_ar": "طليعة العاثية",
    "synonyms": [
      "Prophage"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Genomes of temperate BACTERIOPHAGES integrated into the DNA of their bacterial host cell. The prophages can be duplicated for many cell generations until some stimulus induces its activation and virulence.",
    "arabic_definition": "طليعة العاثية هي جينوم عاثية يندمج كجزء من السلسلة الخطية لدنا الصبغي الخاص بالبكتيريا. (Prophages)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D039002.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alteromonadaceae",
    "term_en": "Alteromonadaceae",
    "term_ar": "آخريات",
    "synonyms": [
      "Colwellia",
      "Idiomarina"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of marine, gram-negative PROTEOBACTERIA including the genera ALTEROMONAS; Colwellia; Idiomarina; MARINOBACTER; MORITELLA; PSEUDOALTEROMONAS; and SHEWANELLA.",
    "arabic_definition": "آخريات (الإنجليزية: Alteromonadaceae) هي عائلة بكتيريا من المتقلبات وهي الآن واحدة من عدة عائلات ضمن رتبة آخراوات التي تضم جنس الآخرية. أنواع هذه العائلة في الغالب على شكل قضيب وتتحرك باستخدام سوط قطبي واحد.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034241.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nodaviridae",
    "term_en": "Nodaviridae",
    "term_ar": "فيروسات عقدية",
    "synonyms": [
      "Alphanodavirus",
      "Betanodavirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of RNA viruses infecting INSECTA and fish. There are two genera: Alphanodavirus and Betanodavirus.",
    "arabic_definition": "فيروسات عقدية (الإنجليزية: Nodaviridae) هي فصيلة من الفيروسات الاٍيجابية ذات الرنا أحادي السلسلة المكون من 4500 نوكليوتيد، تضم هذه الفصيلة جنسين:",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D030381.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "deinococcus",
    "term_en": "Deinococcus",
    "term_ar": "مكورة غريبة",
    "synonyms": [
      "Deinococcus radiodurans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive aerobic cocci found in the soil, that is highly resistant to radiation, especially ionizing radiation (RADIATION, IONIZING). Deinococcus radiodurans is the type species.",
    "arabic_definition": "المكورة الغريبة (الاسم العلمي:Deinococcus) هي جنس من البكتيريا تتبع فصيلة المكورات الغريبة من رتبة المكوريات الغريبة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034301.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "actinobacteria",
    "term_en": "Actinobacteria",
    "term_ar": "الشعيات (شعبة)",
    "synonyms": [
      "Actinomycete",
      "Actinomycetes",
      "Gram-Positive Bacteria, High G+C",
      "High G+C Gram-Positive Bacteria",
      "Actinomycetota"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Class of BACTERIA with diverse morphological properties. Strains of Actinobacteria show greater than 80% 16S rDNA/rRNA sequence similarity among each other and also the presence of certain signature nucleotides. (Stackebrandt E. et al, Int. J. Syst. Bacteriol. (1997) 47:479-491)",
    "arabic_definition": "تعد الشعيات (باللاتينية: Actinomycetota، والمعروفة سابقًا باسم \"Actinobacteria\") شعبة متنوعة من البكتيريا إيجابية الغرام ذات محتوى مرتفع من القواعد النيتروجينية غوانين وسيتوزين (GC content) في حمضها النووي. يمكن أن تكون هذه البكتيريا برية أو مائية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D039903.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacteroidetes",
    "term_en": "Bacteroidetes",
    "term_ar": "عصوانيات (شعبة)",
    "synonyms": [
      "Cytophaga-Flavobacteria-Bacteroides Group Bacteria",
      "CFB Group Bacteria",
      "Cytophagales",
      "Bacteroidota"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A phylum of bacteria comprising four classes; Bacteroidia, Cytophagia, Flavobacteriia, and Sphingobacteriia.",
    "arabic_definition": "تعد العصوانيات (باللاتينية: Bacteroidota، والمعروفة سابقاً باسم \"Bacteroidetes\") شعبة من البكتيريا سالبة الغرام، غير مكوّنة للأبواغ، وتشمل أنواعاً لاهوائية أو هوائية ذات شكل عصوي أو أسطواني. تنتشر على نطاق واسع في البيئة، بما في ذلك التربة، والرواسب، ومياه البحر، وكذلك في الأمعاء وعلى أجسام الحيوانات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041963.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vibrio-vulnificus",
    "term_en": "Vibrio vulnificus",
    "term_ar": "ضمة فولنيفيكوس",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of halophilic bacteria in the genus VIBRIO, which lives in warm SEAWATER. It can cause infections in those who eat raw contaminated seafood or have open wounds exposed to seawater.",
    "arabic_definition": "ضمة فولنيفيكوس ( الإسم العلمي: Vibrio vulnificus) هي نوع من البكتيريا من جنس بكتيريا الضمة السلبية الغرام، و مرتبطة ارتباطا وثيقا بضمة الكوليرا. و هي تتواجد في البيئات البحرية، خاصة في خليج المكسيك.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyphomicrobiaceae",
    "term_en": "Hyphomicrobiaceae",
    "term_ar": "خيطبيات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family in the order Rhizobiales, class ALPHAPROTEOBACTERIA comprised of many genera of budding or appendaged bacteria.",
    "arabic_definition": "الخيطبيات (الاسم العلمي: Hyphomicrobiaceae) هي فصيلة من البكتيريا تتبع رتبة المستجذريات من طائفة متقلبات ألفا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041921.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brucellaceae",
    "term_en": "Brucellaceae",
    "term_ar": "بروسيلات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative coccoid to rod-shaped bacteria in the order Rhizobiales. They are obligate parasites chiefly of warm-blooded VERTEBRATES. Many are pathogenic.",
    "arabic_definition": "البروسيلات (الإنجليزية: Brucellaceae) هي فصيلة من المستجذريات سلبية الغرام هوائية. قد تم تسميتها على اسم السير ديفيد بروس، عالم الميكروبيولوجيا الاسكتلندي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042021.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thiotrichaceae",
    "term_en": "Thiotrichaceae",
    "term_ar": "هلبات الكبريت",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of colorless sulfur bacteria in the order Thiotrichales, class GAMMAPROTEOBACTERIA.",
    "arabic_definition": "هلبات الكبريت (الاسم العلمي: Thiotrichaceae) هي فصيلة من البكتيريا تتبع رتبة هلبيات الكبريت من طائفة المتقلبات الغاما.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041962.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "staphylococcus-haemolyticus",
    "term_en": "Staphylococcus haemolyticus",
    "term_ar": "عنقودية حالة للدم",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of STAPHYLOCOCCUS found on the skin of humans (and non-human primates), often causing hospital-acquired infections (CROSS INFECTION).",
    "arabic_definition": "عنقودية حالة للدم (الاسم العلمي:Staphylococcus haemolyticus) هي نوع من بكتيريا المخثرة سلبياً تتبع جنس العنقودية من فصيلة المكورات العنقودية. وهي تعتبر جزء من النبيت الجرثومي الجلدي البشري وتوجد أكبر تجمهر لها عادةً على الإبطين والعجان والمناطق الأربية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041162.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "staphylococcus-hominis",
    "term_en": "Staphylococcus hominis",
    "term_ar": "عنقودية بشرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of STAPHYLOCOCCUS similar to STAPHYLOCOCCUS HAEMOLYTICUS, but containing different esterases. The subspecies Staphylococcus hominis novobiosepticus is highly virulent and novobiocin resistant.",
    "arabic_definition": "عنقودية بشرية (الاسم العلمي: Staphylococcus hominis) هي نوع مخثر سلبي من البكتيريا تتبع جنس العنقودية من فصيلة المكورات العنقودية. وتتواجد عادةً باعتبارها بكتيريا متعايشة غير ضارة على الجلد البشري والحيواني وكما هو معروف فأنها تتسبب بإنتاج كحول ثيولي المركب والذي يساهم في رائحة الجسم.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041181.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chlorobium",
    "term_en": "Chlorobium",
    "term_ar": "خضربية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of phototrophic, obligately anaerobic bacteria in the family Chlorobiaceae. They are found in hydrogen sulfide-containing mud and water environments.",
    "arabic_definition": "خضربية أو بكتريا الكبريت الخضراء أو كلوروبيام (الإنجليزية: Chlorobium) هي جنس من البكتيريا، سلبية الغرام، تتبع الخضربيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041883.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "staphylococcaceae",
    "term_en": "Staphylococcaceae",
    "term_ar": "مكورات عنقودية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Family of gram-positive, facultatively anaerobic bacteria, in the order Bacillales. Genera include Gemella, Macrococcus, Salinicoccus, and STAPHYLOCOCCUS.",
    "arabic_definition": "المكورات العنقودية أو العُنْقُوديّات (اللاتينية: Staphylococcaceae) فصيلة (عائلة) من البكتيريا إيجابية الغرام تشمل عدة أجناس، منها العنقودية التي تشمل عدداً من الأنواع الممرضة. يعزى اكتشاف المكورات العنقودية إلى الجراح الإسكتلندي السير ألكسندر أوغستون.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D040141.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acinetobacter-baumannii",
    "term_en": "Acinetobacter baumannii",
    "term_ar": "راكدة بومانية",
    "synonyms": [
      "Bacterium anitratum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria, commonly found in the clinical laboratory, and frequently resistant to common antibiotics.",
    "arabic_definition": "راكدة بومانية (الاسم العلمي: Acinetobacter baumannii) هي نوع من البكتيريا يتبع جنس الراكدة من الفصيلة الموراكسيلية. وهي بكتيريا لا هوائية سلبية الغرام على شكل قضيب مستدير تقريبا، ويمكن أن تكون مُمْرِضًا انتهازيًا للبشر، مما يؤثر على الأشخاص الذين يعانون من ضعف المناعة، كما أنها مقاومة للعديد من المضادات الحيوية ولذا فهي من الإصابات البكتيرية القاتلة وخصوصا في إصابات المشافي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D040981.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flavobacteriaceae",
    "term_en": "Flavobacteriaceae",
    "term_ar": "نظيرات الصيفرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bacteria in the order Sphingobacteriales, class Sphingobacteria. They are gram-negative rods, mostly saprophytic in terrestrial and aquatic habitats.",
    "arabic_definition": "نظيرات الصيفرية (الاسم العلمي: Flavobacteriaceae) هي فصيلة من البكتيريا تتبع رتبة الصيفريات من طائفة الصيفرانية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041965.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytophagaceae",
    "term_en": "Cytophagaceae",
    "term_ar": "لاغفات",
    "synonyms": [
      "Flexibacteraceae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative, gliding bacteria in the order Cytophagales, class Cytophagia. They are found in SOIL and SEA WATER.",
    "arabic_definition": "اللاغفات (الإنجليزية: Cytophagaceae) فصيلة من البكتيريا البيئية تتكون من 11 جنسا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041964.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rickettsia-akari",
    "term_en": "Rickettsia akari",
    "term_ar": "ريكتسيا قرادية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria that causes rickettsialpox. The vector is a mouse mite and the reservoirs are mites and mice.",
    "arabic_definition": "ريكتسيا قرادية (الاسم العلمي: Rickettsia akari) هي نوع من البكتيريا تتبع جنس الريكتسيا من الفصيلة الريكتسية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041141.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bradyrhizobiaceae",
    "term_en": "Bradyrhizobiaceae",
    "term_ar": "نتريات",
    "synonyms": [
      "Nitrobacteraceae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A proposed family of bacteria belonging to the alpha-2 subgroup of PROTEOBACTERIA.",
    "arabic_definition": "نتريات (الاسم العلمي: Nitrobacteraceae) هي فصيلة من بكتيريا متقلبات ألفا، هوائية سلبية الغرام، تتبع رتبة المستجذريات. تستمد بكتيريا هذه الفصيلة طاقتها من أكسدة الأمونيا إلى نتريت، أو عن طريق أكسدة النتريت إلى نترات. (Bradyrhizobiaceae)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041841.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rickettsia-felis",
    "term_en": "Rickettsia felis",
    "term_ar": "ريكتسيا قطية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria transmitted by the flea Ctenocephalides felis, and known to infect CATS, oppossums, and humans.",
    "arabic_definition": "ريكتسيا قطية (الاسم العلمي:Rickettsia felis) هي نوع من البكتيريا تتبع جنس الريكتسيا من الفصيلة الريكتسية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041161.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brucella-ovis",
    "term_en": "Brucella ovis",
    "term_ar": "بروسيلة غنمية",
    "synonyms": [
      "Brucella melitensis biovar ovis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of the genus BRUCELLA which are pathogenic to SHEEP.",
    "arabic_definition": "البروسيلَة الغَنَمِيَّة(1) (الاسم العلمي: Brucella ovis) هي بكتيريا عصوية مكورة سلبية الغرام تتبع فصيلة البروسيلات. تُعد مع البروسيلة المالطية مسؤولةً عن إحداث داء البروسيلات الضأني، وهو مرضٌ يجب الإبلاغ عنه.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042061.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sphaerotilus",
    "term_en": "Sphaerotilus",
    "term_ar": "بيركهولدريات",
    "synonyms": [
      "Burkholderiales"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, sheathed, rod-shaped bacteria in the family COMAMONADACEAE. They are closely related to LEPTOTHRIX.",
    "arabic_definition": "البيركهولدريات (الاسم العلمي: Burkholderiales) هي رتبة من البكتيريا تتبع الطبقة من طائفة المتقلبات البيتا. وهي جراثيم سلبية الغرام. (Sphaerotilus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042744.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "comamonadaceae",
    "term_en": "Comamonadaceae",
    "term_ar": "كوماموناسيات",
    "synonyms": [
      "Acidovorax",
      "Hydrogenophaga"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative aerobic bacteria in the order BURKHOLDERIALES, encompassing the acidovorans rRNA complex. Some species are pathogenic to PLANTS.",
    "arabic_definition": "كوماموناسيات (الاسم العلمي: Comamonadaceae) هي فصيلة من البكتيريا، سلبية الغرام، تتبع البيركهولدريات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042621.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "burkholderiaceae",
    "term_en": "Burkholderiaceae",
    "term_ar": "بيركهولدرات",
    "synonyms": [
      "Ralstoniaceae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram negative, aerobic, non-sporeforming, rod-shaped bacteria.",
    "arabic_definition": "البيركهولدرات (الاسم العلمي: Burkholderiaceae) هي فصيلة من البكتيريا تتبع رتبة البيركهولدريات من طائفة المتقلبات البيتا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042521.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alcaligenaceae",
    "term_en": "Alcaligenaceae",
    "term_ar": "مقليات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative, aerobic, non-spore forming rods or cocci of the order BURKHOLDERIALES, which include . A well-known genera which includes ACHROMOBACTER; ALCALIGENES; and BORDETELLA.",
    "arabic_definition": "مُقليات (الإنجليزية: Alcaligenaceae) هي فصيلة من البكتيريا، سلبية الغرام، تتبع البيركهولدريات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042401.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oxalobacteraceae",
    "term_en": "Oxalobacteraceae",
    "term_ar": "جرثوميات حامضية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative bacteria in the order BURKHOLDERIALES, class BETAPROTEOBACTERIA.",
    "arabic_definition": "جرثوميات حامضية (الاسم العلمي: Oxalobacteraceae) هي فصيلة من البكتيريا، سلبية الغرام، تتبع البيركهولدريات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042802.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alcaligenes-faecalis",
    "term_en": "Alcaligenes faecalis",
    "term_ar": "مقلية برازية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of gram negative bacteria in the genus ALCALIGENES, found in soil. It is non-pathogenic, non-pigmented, and used for the production of amino acids.",
    "arabic_definition": "مقلية برازية (الاسم العلمي: Alcaligenes faecalis) هي نوع من البكتيريا، سلبية الغرام، تتبع المقلية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042481.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "burkholderia-mallei",
    "term_en": "Burkholderia mallei",
    "term_ar": "بيركهولدرية رعامية",
    "synonyms": [
      "Pseudomonas mallei"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria parasitic on HORSES and DONKEYS causing GLANDERS, which can be transmitted to humans.",
    "arabic_definition": "بيركهولدرية رعامية (الاسم العلمي: Burkholderia mallei) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس البيركهولدرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042726.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bordetella-parapertussis",
    "term_en": "Bordetella parapertussis",
    "term_ar": "بورديتيلا نظيرة الشاهوقية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of BORDETELLA with similar morphology to BORDETELLA PERTUSSIS, but growth is more rapid. It is found only in the RESPIRATORY TRACT of humans.",
    "arabic_definition": "بورديتيلا نظيرة الشاهوقية (الاسم العلمي: Bordetella parapertussis) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس البورديتيلا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042483.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "burkholderia-gladioli",
    "term_en": "Burkholderia gladioli",
    "term_ar": "بيركهولدرية دلبوثية",
    "synonyms": [
      "Burkholderia cocovenenans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria that acts as both a human and plant pathogen.",
    "arabic_definition": "بيركهولدرية دلبوثية (الاسم العلمي: Burkholderia gladioli) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس البيركهولدرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042725.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ralstonia",
    "term_en": "Ralstonia",
    "term_ar": "رالستونيا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus in the family BURKHOLDERIACEAE, comprised of many species. They are associated with a variety of infections including MENINGITIS; PERITONITIS; and URINARY TRACT INFECTIONS.",
    "arabic_definition": "بكتيريا رالستونيا ، تنتمي لطائفة متقلبات بيتا وقد تم تصنيفها كزائفة. تم إعادة تصنيف بعض أنواع رالستونيا في طائفة كوبريافيديوس : كوبريافيديوس باسيلنسيس (ستينل و إل. (Ralstonia)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D043367.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ralstonia-solanacearum",
    "term_en": "Ralstonia solanacearum",
    "term_ar": "رالستونية باذنجانية",
    "synonyms": [
      "Burkholderia solanacearum",
      "Pseudomonas solanacearum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of Ralstonia previously classed in the genera PSEUDOMONAS and BURKHOLDERIA. It is an important plant pathogen.",
    "arabic_definition": "رالستونية باذنجانية (الاسم العلمي: Ralstonia solanacearum) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس الرالستونيا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D043368.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "herbaspirillum",
    "term_en": "Herbaspirillum",
    "term_ar": "عشبية حليزنية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative bacteria in the family OXALOBACTERACEAE, which comprises vibrioid or sometimes helical cells. They are chemoorganotrophic nitrogen fixers and are found free-living in the soil or in association with the roots of members of the GRAMINEAE. (From Bergey's Manual of Determinative Bacteriology, 9th ed)",
    "arabic_definition": "عشبية حليزنية (الاسم العلمي: Herbaspirillum) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة الجرثوميات حامضية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042803.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "achromobacter",
    "term_en": "Achromobacter",
    "term_ar": "منتصلة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, strictly aerobic, non-spore forming rods. Soil and water are regarded as the natural habitat. They are sometimes isolated from a hospital environment and humans.",
    "arabic_definition": "مُنْتَصِلَة أو أكروموباكتر(الإنجليزية: Achromobacter) هي جنس من البكتيريا، سلبية الغرام، تتبع المقليات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042402.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "taylorella",
    "term_en": "Taylorella",
    "term_ar": "تايلوريات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of chemoorganotrophic, gram negative rods, in the family ALCALIGENACEAE. They are pathogenic parasites of HORSES.",
    "arabic_definition": "تايلوريات (الاسم العلمي: Taylorella) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة المقليات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042502.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neisseria-lactamica",
    "term_en": "Neisseria lactamica",
    "term_ar": "نيسرية محبة لللبن",
    "synonyms": [
      "Neisseria lactamicus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic BACTERIA commonly found in the NASOPHARYNX of infants and children, but rarely pathogenic. It is the only species to produce acid from LACTOSE.",
    "arabic_definition": "نيسرية محبة لللبن (الاسم العلمي:Neisseria lactamica) هي نوع من البكتيريا تتبع جنس النيسرية من فصيلة نظيرات النيسرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042806.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neisseria-mucosa",
    "term_en": "Neisseria mucosa",
    "term_ar": "نيسرية مخاطية",
    "synonyms": [
      "Diplococcus mucosus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic BACTERIA, found in the human NASOPHARYNX and in the normal flora of the respiratory tissues in DOLPHINS. It is occasionally pathogenic for humans and pathogenic for MICE. (Bergey's Manual of Systemic Bacteriology, 1st edition, p295)",
    "arabic_definition": "نيسرية مخاطية (الاسم العلمي:Neisseria mucosa) هي نوع من البكتيريا تتبع جنس النيسرية من فصيلة نظيرات النيسرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042807.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neisseria-elongata",
    "term_en": "Neisseria elongata",
    "term_ar": "نيسرية متطاولة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic BACTERIA consisting of short chains of rods. It has been isolated from the PHARYNX of healthy individuals and patients with ENDOCARDITIS. There are several recognized subspecies.",
    "arabic_definition": "نيسرية متطاولة (الاسم العلمي:Neisseria elongata) هي نوع من البكتيريا تتبع جنس النيسرية من فصيلة نظيرات النيسرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042805.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spirillaceae",
    "term_en": "Spirillaceae",
    "term_ar": "حليزنيات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative bacteria in the order Nitrosomonadales. It formerly included the genera CAMPYLOBACTER and SPIRILLUM, then was abandoned, and is now reinstated as a family with a single genus SPIRILLUM.",
    "arabic_definition": "حليزنيات (الاسم العلمي: Spirillaceae) هي فصيلة من البكتيريا، سلبية الغرام، تتبع رتبة وحيدات الخلية منتجة النيتريت.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D043167.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neisseria-sicca",
    "term_en": "Neisseria sicca",
    "term_ar": "نيسرية جافة",
    "synonyms": [
      "Diplococcos pharyngis siccus",
      "Diplococcus siccus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic BACTERIA found in the human NASOPHARYNX; SALIVA; and SPUTUM.",
    "arabic_definition": "نيسرية جافة (الاسم العلمي:Neisseria sicca) هي نوع من البكتيريا تتبع جنس النيسرية من فصيلة نظيرات النيسرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042808.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "achromobacter-denitrificans",
    "term_en": "Achromobacter denitrificans",
    "term_ar": "منتصلة نازعة للنترات",
    "synonyms": [
      "Achromobacter xylosoxidans",
      "Achromobacter xylosoxidans subsp. denitrificans",
      "Alcaligenes denitrificans subsp. xylosoxidans",
      "Alcaligenes denitrificans subsp. xylosoxydans",
      "Achromobacter xylosoxidans subsp. xylosoxidans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of gram negative, aerobic bacteria in the genus ACHROMOBACTER. Previously in the genus ALCALIGENES, the classification and nomenclature of this species has been frequently emended. The two subspecies, Achromobacter xylosoxidans subsp. denitrificans and Achromobacter xylosoxidans subsp. xylosoxidans are associated with infections.",
    "arabic_definition": "منتصلة نازعة للنترات (الاسم العلمي: Achromobacter denitrificans) هي نوع من البكتيريا، سلبية الغرام، تتبع المنتصلة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042441.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "achromobacter-cycloclastes",
    "term_en": "Achromobacter cycloclastes",
    "term_ar": "منتصلة رضيخية حلقية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram negative, aerobic, denitrifying bacteria in the genus ACHROMOBACTER.",
    "arabic_definition": "منتصلة رضيخية حلقية (الاسم العلمي: Achromobacter cycloclastes) هي نوع من البكتيريا، سلبية الغرام، تتبع المنتصلة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042422.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bordetella-avium",
    "term_en": "Bordetella avium",
    "term_ar": "بورديتيلا طيرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of BORDETELLA isolated from the respiratory tracts of TURKEYS and other BIRDS. It causes a highly contagious bordetellosis.",
    "arabic_definition": "بورديتيلا طيرية (الاسم العلمي: Bordetella avium) هي نوع من البكتيريا، سلبية الغرام، تتبع البورديتيلا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042482.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neisseria-cinerea",
    "term_en": "Neisseria cinerea",
    "term_ar": "نيسرية رمادية",
    "synonyms": [
      "Micrococcus cinereus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria found in the human NASOPHARYNX.",
    "arabic_definition": "نيسرية رمادية (الاسم العلمي: Neisseria cinerea) هي نوع من البكتيريا تتبع جنس النيسرية من فصيلة نظيرات النيسرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042804.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endotoxemia",
    "term_en": "Endotoxemia",
    "term_ar": "عديد السكاريد الشحمي",
    "synonyms": [
      "Endotoxemias",
      "Lipopolysaccharide"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by the presence of ENDOTOXINS in the blood. On lysis, the outer cell wall of gram-negative bacteria enters the systemic circulation and initiates a pathophysiologic cascade of pro-inflammatory mediators.",
    "arabic_definition": "عديد السكاريد الشحمي (الإنجليزية: Lipopolysaccharide) التي تُعرف اختصاراً بـ LPS وكذلك تُعرف باسم السموم الداخلية (الإنجليزية: endotoxins)، هي جزيئات كبيرة تتكون من الشحوم وعديد السكاريد تتألف من مُستضدات-أو (الإنجليزية: O-antigen)، تتواجد في الغشاء الخارجية لبكتيريا سلبية الغرام. وعديدات السكاريدات الشحميّة هي ذيفانات داخِلِيّة ومُسْتَضّدات مهمة. (Endotoxemia)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019446.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-hominis",
    "term_en": "Mycoplasma hominis",
    "term_ar": "مفطورة بشرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A common inhabitant of the vagina and cervix and a potential human pathogen, causing infections of the male and female reproductive tracts. It has also been associated with respiratory disease and pharyngitis. (From Dorland, 28th ed)",
    "arabic_definition": "المفطورة البشرية (الاسم العلمي: Mycoplasma hominis) هي نوع من البكتيريا تتبع جنس المفطورة من فصيلة المفطورات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019535.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salmonella-enterica",
    "term_en": "Salmonella enterica",
    "term_ar": "سلمونيلا معوية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A subgenus of Salmonella containing several medically important serotypes. The habitat for the majority of strains is warm-blooded animals.",
    "arabic_definition": "السلمونيلا المعوية (اللاتينية: Salmonella enterica)، الاسم السابق «سلمونيلا كوليرا الخنازير» (اللاتينية: Salmonella choleraesuis) هي أحد أنواع البكتيريا التابع لجنس السلمونيلا ضمن شعبة المتقلبات. هي بكتيريا سلبية الغرام لها شكل عصيات مسوطة، لاهوائية اختيارية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019779.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "human-herpesvirus-8",
    "term_en": "Human Herpesvirus 8",
    "term_ar": "فيروس الهربس المرتبط بساركوما كابوزي",
    "synonyms": [
      "HHV-8",
      "Herpesvirus, Kaposi's Sarcoma-Associated",
      "Herpesviruses, Kaposi's Sarcoma-Associated",
      "Herpesvirus, Kaposis Sarcoma-Associated",
      "Kaposi's Sarcoma-Associated Herpesviruses",
      "Sarcoma-Associated Herpesviruses, Kaposi's",
      "Kaposi's Sarcoma-Associated Herpesvirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species in the genus RHADINOVIRUS, subfamily GAMMAHERPESVIRINAE, isolated from patients with AIDS-related and classical Kaposi sarcoma.",
    "arabic_definition": "فيروس الهربس المرتبط بساركوما كابوزي (الإنجليزية: Kaposi's sarcoma-associated herpesvirus) هو تاسع فيروس من فيروسات الهربس البشرية المعروفة، واسمه الرسمي وفقًا للجنة الدولية لتصنيف الفيروسات: فيروس غاما هربس 8. يتسبب هذا الفيروس في حدوث ساركوما كابوزي، وهو أحد أنواع الأورام الخبيثة التي تحدث بشكل شائع عند مرضى الإيدز، وقد يؤهب هذا الفيروس أيضًا لحدوث حالات مرضية أخرى مثل سرطان العقد اللمفاوية، داء كاسلمان متعدد المراكز، ومتلازمة السيتوكينات الالتهابية. (Human Herpesvirus 8)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019288.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerebrotendinous-xanthomatosis",
    "term_en": "Cerebrotendinous Xanthomatosis",
    "term_ar": "داء الأورام الصفر المنتشرة الدماغية الوترية",
    "synonyms": [
      "Cerebrotendinous Xanthomatoses",
      "Xanthomatoses, Cerebrotendinous",
      "Van Bogaert-Scherer-Epstein Disease",
      "Bogaert-Scherer-Epstein Disease, Van",
      "Disease, Van Bogaert-Scherer-Epstein",
      "Cerebral Cholesterinosis",
      "Cerebral Cholesterinoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive lipid storage disorder due to mutation of the gene CYP27A1 encoding a CHOLESTANETRIOL 26-MONOOXYGENASE. It is characterized by large deposits of CHOLESTEROL and CHOLESTANOL in various tissues resulting in xanthomatous swelling of tendons, early CATARACT, and progressive neurological symptoms.",
    "arabic_definition": "يُطلق على داء الاورام الصفر المنتشرة الدماغية الوترية أيضًا داء الكوليسترول الدماغي، وهو نمط صبغي جسمي وراثي متنحي للورم الأصفر. يقع ضمن مجموعة من الاضطرابات الوراثية تسمى حثل المادة البيضاء. (Cerebrotendinous Xanthomatosis)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019294.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "branchio-oto-renal-syndrome",
    "term_en": "Branchio-Oto-Renal Syndrome",
    "term_ar": "المتلازمة الغلصمية الأذنية الكلوية",
    "synonyms": [
      "BOR Syndrome",
      "Branchio-Otorenal Dysplasia",
      "Branchio-Otorenal Syndrome",
      "Branchiootorenal Dysplasia",
      "Dysplasia, Branchiootorenal",
      "Melnick-Fraser Syndrome",
      "Branchio-Oculo-Facial Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant disorder manifested by various combinations of preauricular pits, branchial fistulae or cysts, lacrimal duct stenosis, hearing loss, structural defects of the outer, middle, or inner ear, and renal dysplasia. Associated defects include asthenic habitus, long narrow facies, constricted palate, deep overbite, and myopia. Hearing loss may be due to Mondini type cochlear defect and stapes fixation. (Jablonski's Dictionary of Syndromes &amp; Eponymic Diseases, 2d ed)",
    "arabic_definition": "المتلازمة الخيشوميَّة الأذنية الكلوية هي اضطراب جيني بوراثة جسدية سائدة يصيب الكليتين والأذنين والعنق. يشار إلى هذا المرض أيضًا باسم متلازمة ميلنيك فريزر. (Branchio-Oto-Renal Syndrome)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019280.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptococcus-oralis",
    "term_en": "Streptococcus oralis",
    "term_ar": "عقدية فموية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, coccoid bacteria that is numerous in the mouth and throat. It is a common cause of endocarditis and is also implicated in dental plaque formation.",
    "arabic_definition": "العقدية الفموية (اللاتينية: Streptococcus oralis) هي بكتيريا إيجابية الغرام من رتبة الملبِّنيات تنمو بشكل مميّز على صورة سلاسل. تشكّل العقديات الفموية مستعمرات صغيرة بيضاء عندما يتمّ زرعها على أغار ويلكن شالغرن.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019533.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radiopharmaceuticals",
    "term_en": "Radiopharmaceuticals",
    "term_ar": "دواء مشع",
    "synonyms": [
      "Radiopharmaceutical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compounds that are used in medicine as sources of radiation for radiotherapy and for diagnostic purposes. They have numerous uses in research and industry. (Martindale, The Extra Pharmacopoeia, 30th ed, p1161)",
    "arabic_definition": "هو دراسة وإعداد المواد المشعة، والتي هي الصيدلية المشعة. الصيدلية المشعة التي تستخدم في مجال الطب النووي كأثر في تشخيص وعلاج الكثير من الأمراض. (Radiopharmaceuticals)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019275.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erwinia-amylovora",
    "term_en": "Erwinia amylovora",
    "term_ar": "اللفحة النارية في الأشجار",
    "synonyms": [
      "Bacterium amylovorus",
      "Micrococcus amylovorus",
      "Bacillus amylovorus",
      "Fire blight"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria, in the genus ERWINIA, causing a necrotic disease of plants.",
    "arabic_definition": "اللفحة النارية، هو مرض فطري تسببه البكتيريا، يصيب بعض أشجار المجموعة الوردية، وخاصة التفاح واللوز والكرز والكمثرى، المرض ناجم عن فطر Erwinia amylovora، وهو معدٍ يؤثر على الأشجار ومصدر قلق خطير لمنتجي التفاح والكمثرى واللوزيات في العالم.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044084.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nitrosomonadaceae",
    "term_en": "Nitrosomonadaceae",
    "term_ar": "وحيدات الخلية منتجة النيتريت (رتبة)",
    "synonyms": [
      "Nitrosomonadales"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative nitrifying bacteria, in the order Nitrosomonadales, class BETAPROTEOBACTERIA.",
    "arabic_definition": "وحيدات الخلية منتجة النيتريت (الاسم العلمي: Nitrosomonadales) هي رتبة من البكتيريا، سلبية الغرام، تتبع طائفة المتقلبات بيتا. (Nitrosomonadaceae)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D043369.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "legionella-longbeachae",
    "term_en": "Legionella longbeachae",
    "term_ar": "فيلقية لونغبيتشية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria in the genus LEGIONELLA, first isolated in Long Beach, California. Infection is associated with the use of contaminated potting SOIL.",
    "arabic_definition": "فيلقية لونغبيتشية (الاسم العلمي: Legionella longbeachae) هي نوع من البكتيريا يتبع جنس الفيلقية من الفصيلة الفيالقية. تم عزل هذه البكتريا لأول مرة من مريض في لونغ بيتش، كاليفورنيا وتتواجد في التربة والسماد في الغالب.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044128.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "moraxellaceae",
    "term_en": "Moraxellaceae",
    "term_ar": "موراكسيلية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative, aerobic bacteria in the order Pseudomonadales. Some strains are parasites of the mucosal membranes of animals and humans; others are found in association with food products or in the environment.",
    "arabic_definition": "الموراكسيلية (الاسم العلمي: Moraxellaceae) هي فصيلة من البكتيريا تتبع رتبة الزوافات من طائفة متقلبات غاما.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044007.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oceanospirillaceae",
    "term_en": "Oceanospirillaceae",
    "term_ar": "حليزنيات محيطية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative bacteria in the order Oceanospirillales.",
    "arabic_definition": "الحليزنيات المحيطية (الإنجليزية: Oceanospirillaceae) هي عائلة بكتيريا، تعيش معظم أجناس هذه العائلة في بيئات ذات تراكيز عالية الملوحة، هي أليفة الملح أو متعايشة مع الملوحة وهي جميعاً بحرية باستثناء جنس \"Balneatrix\" الذي يتوجد في المياه العذبة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044130.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coxiellaceae",
    "term_en": "Coxiellaceae",
    "term_ar": "كوكسيلات",
    "synonyms": [
      "Rickettsiella"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative bacteria in the order Legionellales. It includes genera COXIELLA and Rickettsiella.",
    "arabic_definition": "الكوكسيلات هي عائلة في رتبة الفيلقيات. الكوكسيلا البورنيتية هي نوع ضمن هذه الرتبة. (Coxiellaceae)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044125.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudomonas-alcaligenes",
    "term_en": "Pseudomonas alcaligenes",
    "term_ar": "زائفة مقلية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria in the genus PSEUDOMONAS. It cannot utilize FRUCTOSE; GLUCOSE; or MALTOSE for energy.",
    "arabic_definition": "زائفة مقلية (الاسم العلمي: Pseudomonas alcaligenes) هي نوع من البكتيريا تتبع جنس الزائفة من فصيلة الزوائف.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044202.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudomonas-mendocina",
    "term_en": "Pseudomonas mendocina",
    "term_ar": "زائفة مندوزية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria in the genus PSEUDOMONAS, which is found in SOIL and WATER.",
    "arabic_definition": "زائفة مندوزية (الاسم العلمي: Pseudomonas mendocina) هي نوع من البكتيريا تتبع جنس الزائفة من فصيلة الزوائف.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044203.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudomonas-stutzeri",
    "term_en": "Pseudomonas stutzeri",
    "term_ar": "زائفة شتوتزرية",
    "synonyms": [
      "Bacillus nitrogenes",
      "Bacillus stutzeri",
      "Bacterium stutzeri",
      "Pseudomonas perfectimarina",
      "Pseudomonas perfectomarina",
      "Pseudomonas perfectomarinus",
      "Achromobacter sewerinii",
      "Achromobacter stutzeri"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria in the genus PSEUDOMONAS, containing multiple genomovars. It is distinguishable from other pseudomonad species by its ability to use MALTOSE and STARCH as sole carbon and energy sources. It can degrade ENVIRONMENTAL POLLUTANTS and has been used as a model organism to study denitrification.",
    "arabic_definition": "زائفة شتوتزرية (الاسم العلمي: Pseudomonas stutzeri) هي نوع من البكتيريا تتبع جنس الزائفة من فصيلة الزوائف.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044223.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "haemophilus-parainfluenzae",
    "term_en": "Haemophilus parainfluenzae",
    "term_ar": "مستدمية نظيرة النزلية",
    "synonyms": [
      "Hemophilius parainfluenzae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria in the genus HAEMOPHILUS, ubiquitous in the human ORAL CAVITY and PHARYNX. It has low pathogenicity but is occasionally implicated in ENDOCARDITIS in humans.",
    "arabic_definition": "مستدمية نظيرة النزلية (الاسم العلمي: Haemophilus parainfluenzae) هي نوع من البكتيريا تتبع جنس المستدمية من فصيلة الباستوريلات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044135.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteus-penneri",
    "term_en": "Proteus penneri",
    "term_ar": "متقلبة بنرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative bacteria isolated from individuals in LONG-TERM CARE facilities and HOSPITALS.",
    "arabic_definition": "متقلبة بنرية (الاسم العلمي: Proteus penneri) هي نوع من البكتيريا تتبع جنس المتقلبة من الفصيلة المورغانيلية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044095.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "yersinia-ruckeri",
    "term_en": "Yersinia ruckeri",
    "term_ar": "يرسينية ركيرية",
    "synonyms": [
      "Yersinia rucker"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria responsible for red mouth disease in rainbow trout (ONCORHYNCHUS MYKISS). The bacteria is a natural component of fresh water ecosystems in the United States and Canada.",
    "arabic_definition": "يرسينية ركيرية (الاسم العلمي:Yersinia ruckeri) هي نوع من البكتيريا تتبع جنس اليرسينية من فصيلة الأمعائيات. المعروف عنها التسبب في مرض الفم الأحمر المعوي في بعض الأنواع من الأسماك.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044124.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phytoestrogens",
    "term_en": "Phytoestrogens",
    "term_ar": "إستروجين نباتي",
    "synonyms": [
      "Plant Estrogens",
      "Estrogens, Plant",
      "Plant Estrogen",
      "Estrogen, Plant",
      "Phyto-Estrogen",
      "Phytoestrogen",
      "Estrogen-Like Plant Extracts",
      "Extracts, Estrogen-Like Plant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compounds derived from plants, primarily ISOFLAVONES that mimic or modulate endogenous estrogens, usually by binding to ESTROGEN RECEPTORS.",
    "arabic_definition": "الإستروجين النباتي أو المُودِق النباتي هو إستروجين يتم استخلاصه من النباتات، حيث لا يتم إنتاجه بواسطة الغدد الصماء، ولكن يحصل عليه الجسم عن طريق تناول نباتات منتِجة للإستروجين. يسمى أيضاً «الإستروجين الغذائي» فهو مجموعة متنوعة من المركبات النباتية غير الستروئيدية والتي تتكون بشكل طبيعي. (Phytoestrogens)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048789.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aliivibrio-fischeri",
    "term_en": "Aliivibrio fischeri",
    "term_ar": "ضمة فشيري",
    "synonyms": [
      "Vibrio fischeri",
      "Achromobacter fischeri",
      "Bacillus fischeri",
      "Bacillus phosphorescens indigenus",
      "Einheimischer Leuchtbacillus",
      "Microspira fischeri",
      "Microspira marina",
      "Photobacterium fischeri"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria in the genus ALIIVIBRIO, which exhibits LUMINESCENCE. A. fischeri is found in a symbiotic relationship with the SQUID Euprymna scolopes.",
    "arabic_definition": "ضمة فشيري (بالإنجليزية؛Aliivibrio fischeri/ Vibrio fischeri ) هي بكتيريا سلبية الغرام من فصيلة الضماواتو عصوية الشكل تتواجد في البيئات البحرية . تم تسميتها على إسم برنهارد فيشر ، عالم الأحياء الدقيقة الألماني.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048908.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactiplantibacillus-plantarum",
    "term_en": "Lactiplantibacillus plantarum",
    "term_ar": "ملبنة أخمصية",
    "synonyms": [
      "Lactobacillus plantarum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of rod-shaped, LACTIC ACID bacteria used in PROBIOTICS and SILAGE production.",
    "arabic_definition": "المُلَبِّنَة الأَخْمَصِيَّة (اللاتينية: Lactobacillus plantarum) نوع من بكتيريا حمض اللبن موجود في العديد من المنتجات الغذائية المخمرة. تُصنّف هذه البكتيريا ضمن مجموعة \"الملبّنات\"، وهي بكتيريا موجبة الغرام وعصويّة الشكل. (Lactiplantibacillus plantarum)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048191.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptococcus-thermophilus",
    "term_en": "Streptococcus thermophilus",
    "term_ar": "عقدية حرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of thermophilic, gram-positive bacteria found in MILK and milk products.",
    "arabic_definition": "العِقْدِيَّةُ الحَرِّيَّةُ (اللاتينية: Streptococcus thermophilus) بكتيريا موجبة الغرام لاهوائية تخمرية مخيرة من المخضرات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048249.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cupriavidus",
    "term_en": "Cupriavidus",
    "term_ar": "محبة النحاس",
    "synonyms": [
      "Wautersia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic, rod-shaped bacteria, in the family BURKHOLDERIACEAE, that are mobile by means of peritrichous FLAGELLA. The genus was formerly called Wautersia and species in this genus were formerly in the genus RALSTONIA.",
    "arabic_definition": "محبة النحاس (الاسم العلمي: Cupriavidus) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة البيركهولدرات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049921.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ralstonia-pickettii",
    "term_en": "Ralstonia pickettii",
    "term_ar": "رالستونية بيكتية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species in the genus RALSTONIA. It is often found in the hospital ward as a contaminant of antiseptic and disinfectant solutions.",
    "arabic_definition": "رالستونية بيكتية (الاسم العلمي: Ralstonia pickettii) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس الرالستونيا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049920.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "treponema-denticola",
    "term_en": "Treponema denticola",
    "term_ar": "لولبية سنية",
    "synonyms": [
      "Spirillum dentium",
      "Spirochaeta ambigua",
      "Spirochaeta comandonii",
      "Spirochaeta dentium",
      "Spirochaeta microdentium",
      "Spirochaeta orthodonta",
      "Spirochaete denticola",
      "Spirochaete dentium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of bacteria in the family SPIROCHAETACEAE, frequently isolated from periodontal pockets (PERIODONTAL POCKET).",
    "arabic_definition": "لولبية سنية (الإنجليزية: Treponema denticola) هي نوع من البكتيريا، سلبية الغرام، تتبع اللولبية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048373.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nostoc-commune",
    "term_en": "Nostoc commune",
    "term_ar": "نوستك كوميون",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form species of spore-producing CYANOBACTERIA, in the family Nostocaceae, order Nostocales. It is an important source of fixed NITROGEN in nutrient-depleted soils. When wet, it appears as a jelly-like mass.",
    "arabic_definition": "نوستك كوميون (الإنجليزية: Nostoc commune) هي نوع من البكتيريا، سلبية الغرام، تتبع النوستك.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050501.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactobacillus-delbrueckii",
    "term_en": "Lactobacillus delbrueckii",
    "term_ar": "ملبنة دلبروكية",
    "synonyms": [
      "Lactobacillus bulgaricus",
      "Lactobacillus delbrueckii subsp. bulgaricus",
      "Lactobacillus delbrueckii subspecies bulgaricus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, rod-shaped, facultatively anaerobic bacteria. capable of producing LACTIC ACID. It is important in the manufacture of FERMENTED DAIRY PRODUCTS.",
    "arabic_definition": "المُلَبِّنَة الدلبروكيَّة (اللاتينية: Lactobacillus delbrueckii) نوع بكتيري من فصيلة الملبنات. هي من الكائنات الحية الدقيقة في الجهاز التناسلي السفلي للمرأة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048668.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "severe-acute-respiratory-syndrome",
    "term_en": "Severe Acute Respiratory Syndrome",
    "term_ar": "متلازمة تنفسية حادة وخيمة",
    "synonyms": [
      "Respiratory Syndrome, Acute, Severe",
      "Respiratory Syndrome, Severe Acute",
      "SARS (Severe Acute Respiratory Syndrome)",
      "SARS"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A viral disorder characterized by high FEVER, dry COUGH, shortness of breath (DYSPNEA) or breathing difficulties, and atypical PNEUMONIA. A virus in the genus CORONAVIRUS is the suspected agent.",
    "arabic_definition": "المتلازمة التنفسية الحادة الوخيمة هو مرض تنفسي فيروسي (فيروس سارس) من أصل حيواني المنشأ. بدأ ظهوره في الصين وأخذ ينتشر في بلدان العالم ولاسيما في دول جنوب شرقي آسيا ليصيب ضحاياه بصعوبة التنفس والتهاب رئوي غامض. (Severe Acute Respiratory Syndrome)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045169.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "henipavirus",
    "term_en": "Henipavirus",
    "term_ar": "فيروس هينيبا",
    "synonyms": [
      "Henipaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus in the subfamily PARAMYXOVIRINAE, family PARAMYXOVIRIDAE. It contains species that infect and cause potentially fatal disease in a number of host species, including humans.",
    "arabic_definition": "فيروس هينيبا (الإنجليزية: Henipavirus) هو جنس من الفيروسات التي تنتمي لعائلة الفيروسات المخاطية، رتبة الفيروسات السلبية الأحادية. يتميز فيروس هينيبا بشكله المتغير (يغير شكله وفقا للظروف)، ويتراوح قطره ما بين 40 إلى 600 نانومتر.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045403.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fusobacteria",
    "term_en": "Fusobacteria",
    "term_ar": "بكتيريا مغزلية",
    "synonyms": [
      "Fusobacteriota"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A phylum of anaerobic, gram-negative bacteria with a chemoorganotrophic heterotrophic metabolism. They are resident flora of the OROPHARYNX.",
    "arabic_definition": "البكتيريا المغزلية (الإنجليزية: Fusobacteria) هي عصيات سالبة الغرام لاهوائية إجبارية. منذ التقارير الأولى في أواخر القرن التاسع عشر أطلقت أسماء مختلفة على هذه الكائنات، في بعض الأحيان يتم إطلاق نفس الاسم على أنواع مختلفة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045182.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bartonella-bacilliformis",
    "term_en": "Bartonella bacilliformis",
    "term_ar": "برتونيلة عصوية الشكل",
    "synonyms": [
      "Bartonia bacilliformis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of the genus BARTONELLA, a gram-negative bacteria found in humans. It is found in the mountain valleys of Peru, Ecuador, and Southwest Columbia where the sandfly (see PHLEBOTOMUS) vector is present. It causes OROYA FEVER and VERRUGA PERUANA.",
    "arabic_definition": "برتونيلة عصوية الشكل (الاسم العلمي:Bartonella bacilliformis) هي نوع من البكتيريا تتبع جنس البرتونيلة من فصيلة البارتونيلات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045503.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "campylobacter-upsaliensis",
    "term_en": "Campylobacter upsaliensis",
    "term_ar": "عطيفة أوبسالاية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of CAMPYLOBACTER isolated from DOGS; CATS; and humans.",
    "arabic_definition": "عطيفة أوبسالاية (الإنجليزية: Campylobacter upsaliensis) هي نوع من البكتيريا، سلبية الغرام، تتبع العطيفة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044885.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chryseobacterium",
    "term_en": "Chryseobacterium",
    "term_ar": "عصوية ذهبية",
    "synonyms": [
      "Chryseobacterium meningosepticum",
      "Flavobacterium meningosepticum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of aerobic, gram-negative bacteria in the family FLAVOBACTERIACEAE. Many of its species were formerly in the genus FLAVOBACTERIUM.",
    "arabic_definition": "بكتيريا ذهبية (الاسم العلمي: Chryseobacterium) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة نظيرات الصيفرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045247.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "campylobacter-rectus",
    "term_en": "Campylobacter rectus",
    "term_ar": "عطيفة مستقيمة",
    "synonyms": [
      "Wolinella recta"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of CAMPYLOBACTER isolated from cases of human PERIODONTITIS. It is a microaerophile, capable of respiring with OXYGEN.",
    "arabic_definition": "عطيفة مستقيمة (الإنجليزية: Campylobacter rectus) هي نوع من البكتيريا، سلبية الغرام، تتبع العطيفة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044883.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-capricolum",
    "term_en": "Mycoplasma capricolum",
    "term_ar": "مفطورة عنزية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus in the family ENTOMOPLASMATACEAE, order Entomoplasmatales. It is pathogenic to GOATS, causing caprine pleuropneumonia (PLEUROPNEUMONIA, CONTAGIOUS).",
    "arabic_definition": "مفطورة عنزية (الإنجليزية: Mycoplasma capricolum) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045623.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "campylobacter-hyointestinalis",
    "term_en": "Campylobacter hyointestinalis",
    "term_ar": "عطيفة معوية خنزيرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of CAMPYLOBACTER isolated from the INTESTINES of PIGS with proliferative ENTERITIS. It is also found in CATTLE and in CRICETINAE and can cause enteritis in humans.",
    "arabic_definition": "عطيفة معوية خنزيرية (الإنجليزية: Campylobacter hyointestinalis) هي نوع من البكتيريا، سلبية الغرام، تتبع العطيفة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044862.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "campylobacter-lari",
    "term_en": "Campylobacter lari",
    "term_ar": "عطيفة نورسية",
    "synonyms": [
      "Campylobacter laridis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of thermophilic CAMPYLOBACTER found in healthy seagulls and causing ENTERITIS in humans.",
    "arabic_definition": "عطيفة نورسية (الاسم العلمي: Campylobacter lari) هي نوع من البكتيريا تتبع جنس العطيفة من فصيلة العطيفات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044863.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "helicobacter-hepaticus",
    "term_en": "Helicobacter hepaticus",
    "term_ar": "ملوية كبدية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of HELICOBACTER that colonizes the CECUM and COLON of several strains of MICE, and is associated with HEPATITIS and carcinogenesis.",
    "arabic_definition": "ملوية كبدية (الإنجليزية: Helicobacter hepaticus) هي نوع من البكتيريا، سلبية الغرام، تتبع الملوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044923.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "helicobacter-felis",
    "term_en": "Helicobacter felis",
    "term_ar": "ملوية هرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of HELICOBACTER that colonizes in the STOMACH of laboratory MICE; CATS; and DOGS. It is associated with lymphoid follicular hyperplasia and mild GASTRITIS in CATS.",
    "arabic_definition": "ملوية هرية (الإنجليزية: Helicobacter felis) هي نوع من البكتيريا، سلبية الغرام، تتبع الملوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044922.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-agalactiae",
    "term_en": "Mycoplasma agalactiae",
    "term_ar": "مفطورة قاطعة للدر",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria causing contagious agalactia of SHEEP and GOATS.",
    "arabic_definition": "مفطورة قاطعة للدر (الاسم العلمي: Mycoplasma agalactiae) هي نوع من البكتيريا تتبع جنس المفطورة من فصيلة المفطورات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045644.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "desulfovibrio-desulfuricans",
    "term_en": "Desulfovibrio desulfuricans",
    "term_ar": "منتزعة الكبريت منتزعة السلفاركانز",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of gram-negative, anaerobic bacteria of the genus DESULFOVIBRIO. It is found in FRESHWATER; SOIL, and in marine or brackish water.",
    "arabic_definition": "منتزعة الكبريت منتزعة السلفاركانز (الاسم العلمي: Desulfovibrio desulfuricans) هي نوع من البكتيريا، سلبية الغرام، تتبع جنس منتزعة الكبريت.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045285.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "human-papillomavirus-16",
    "term_en": "Human papillomavirus 16",
    "term_ar": "فيروس الورم الحليمي البشري",
    "synonyms": [
      "HPV-16",
      "HPV16",
      "HPV16s",
      "HPV 16s",
      "Human papillomavirus type 16",
      "human papillomavirus type 16 HPV 16",
      "human papillomavirus type 16 HPV16",
      "Human papillomavirus infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of ALPHAPAPILLOMAVIRUS especially associated with malignant tumors of the CERVIX and the RESPIRATORY MUCOSA.",
    "arabic_definition": "فيروسة الورم الحُلَيمي البشري (ف.و.ح.ب.) (الإنجليزية: Human papillomavirus) ويُدعى اختصاراً (HPV) وَهيَ مجموعة متنوعة من الفيروسات التي تلحق بالـ(DNA)، والتي تعدي الجلد والأغشية المخاطية للإنسان ومجموعة من الحيوانات. وهناك أكثر من 100 نوع من فيروس الورم الحليمي البشري. (Human papillomavirus 16)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052162.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endocrine-disruptors",
    "term_en": "Endocrine Disruptors",
    "term_ar": "مسببات اضطراب الغدد الصماء",
    "synonyms": [
      "Disruptors, Endocrine",
      "Endocrine Disruptor",
      "Disruptor, Endocrine",
      "Endocrine Disrupting Chemical",
      "Chemical, Endocrine Disrupting",
      "Disrupting Chemical, Endocrine",
      "Endocrine Disrupting Chemicals",
      "Chemicals, Endocrine Disrupting"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Exogenous agents, synthetic and naturally occurring, which are capable of disrupting the functions of the ENDOCRINE SYSTEM including the maintenance of HOMEOSTASIS and the regulation of developmental processes. Endocrine disruptors are compounds that can mimic HORMONES, or enhance or block the binding of hormones to their receptors, or otherwise lead to activating or inhibiting the endocrine signaling pathways and hormone metabolism.",
    "arabic_definition": "مسببات اضطراب الغدد الصماء هي مواد كيميائية تتداخل مع عمل أنظمة الغدد الصماء (أو الهرمونات) في جرعات معينة. ويمكن أن تسبب هذه المواد الأورام السرطانية، والعيوب الخلقية، واضطرابات النمو الأخرى. (Endocrine Disruptors)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052244.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nanoviridae",
    "term_en": "Nanoviridae",
    "term_ar": "فيروسات قزامة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of DNA viruses infecting plants and transmitted by APHIDS. Genera include NANOVIRUS and BABUVIRUS.",
    "arabic_definition": "الفيروسات القزامة (الإنجليزية: Nanoviridae) هي عائلة فيروسية تضم الأجناس التالية:",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052657.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "caulimoviridae",
    "term_en": "Caulimoviridae",
    "term_ar": "فيروسات القنبيط",
    "synonyms": [
      "Cavemovirus",
      "Cavemoviruses",
      "Soymovirus",
      "Soymoviruses",
      "Petuvirus",
      "Petuviruses",
      "Rosadnavirus",
      "Rosadnaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of DNA plant viruses with isometric or bacilliform virions and no envelope. The host ranges of most species are narrow. There are six genera: CAULIMOVIRUS; BADNAVIRUS; Cavemovirus; Soymovirus; Petuvirus; and TUNGROVIRUS.",
    "arabic_definition": "فيروسات القنبيط (الإنجليزية: Caulimoviridae) هي فصيلة من الفيروسات تضم الأجناس التالية: فيروس تجعد الأوراق: يضم نوع فيروس البرقشة الصفراء لزهور اليوم. فيروس القنبيط: يضم نوع فيروس تبرقش القنبيط.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052639.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flexiviridae",
    "term_en": "Flexiviridae",
    "term_ar": "فيروسات طيعة",
    "synonyms": [
      "Allexivirus",
      "Allexiviruses",
      "Capillovirus",
      "Capilloviruses",
      "Foveavirus",
      "Foveaviruses",
      "Mandarivirus",
      "Mandariviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of RNA plant viruses that infect a wide range of herbaceous and woody plant species. There are at least eight genera including POTEXVIRUS and CARLAVIRUS, both of which are highly immunogenic.",
    "arabic_definition": "الفيروسات الطيعة (الإنجليزية: Flexiviridae) هي فصيلة جديدة من الفيروسات تم إضافتها في تصنيف الفيروسات لسنة 2004، لكن منذ تصنيف 2009 تم تقسيمها إلى ثلاث فصائل جديدة فيروسات طيعة ألفا، فيروسات طيعة بيتا وفيروسات طيعة جاما وهي بدورها (الثلاث فصائل الجديدة) تم إدراجها في رتبة الفيروسات اللفتية من قبل اللجنة الدولية لتصنيف الفيروسات اعتماداً على علم الوراثة العرقي الجزيئي للبروتينات (الرنا بوليميراز والقفيصة). هذه الفيروسات اٍيجابية ذات الرنا أحادي السلسلة وبذلك فهي ضمن المجموعة IV في تصنيف بلتيمور، هذه الفيروسات خيطية وسمية طيعة لكونها مرنة للغاية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052677.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "limosilactobacillus-reuteri",
    "term_en": "Limosilactobacillus reuteri",
    "term_ar": "ملبنة مخاطية رويترية",
    "synonyms": [
      "Lactobacillus reuteri"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, rod-shaped LACTIC ACID bacteria found naturally in the human intestinal flora and BREAST MILK.",
    "arabic_definition": "المُلَبِّنَة المخاطية الرويترية أو العُصَيَّة اللبنية المُخاطية الرويترية (الاسم العلمي: Limosilactobacillus reuteri) هي أحدى أنواع بكتيريا حمض اللبن الموجودة في القناة الهضمية للبشر والحيوانات. ولا يبدو أن للكبتيريا تأثير ممرض وقد تكون لها فوائد صحية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052200.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactobacillus-helveticus",
    "term_en": "Lactobacillus helveticus",
    "term_ar": "ملبنة سويسرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria isolated from MILK and cheese-starter cultures.",
    "arabic_definition": "المُلَبِّنَة السويسرية (اللاتينية: Lactobacillus helveticus) بكتيريا موجبة الغرام منتجة لحمض اللبن عصوية من جنس المُلَبِّنَات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052198.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-septicum",
    "term_en": "Clostridium septicum",
    "term_ar": "مطثية منتنة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria in the family Clostridiaceae. Infections have a strong association with malignancies and also with GAS GANGRENE.",
    "arabic_definition": "مطثية إنتانية أو المطثية المنتنة أو كلوستريديوم المنتن (الاسم العلمي: Clostridium septicum) هي نوع من البكتيريا يتبع جنس المطثية من الفصيلة المطثاوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052557.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "roniviridae",
    "term_en": "Roniviridae",
    "term_ar": "فيروسات رونية",
    "synonyms": [
      "Okavirus",
      "Okaviruses",
      "Gill-associated virus",
      "Gill-associated viruses",
      "Yellow-head virus",
      "Yellow-head viruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of rod-shaped viruses, in the order NIDOVIRALES. It includes one genus: Okavirus.",
    "arabic_definition": "فيروسات رونية (الإنجليزية: Roniviridae) هي عائلة من الفيروسات تضم الجنس:",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046828.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tymoviridae",
    "term_en": "Tymoviridae",
    "term_ar": "فيروسات اللفت",
    "synonyms": [
      "Marafivirus",
      "Marafiviruses",
      "Maculavirus",
      "Maculaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of icosahedral, non-enveloped, RNA plant viruses comprised of three genera: TYMOVIRUS, Marafivirus and Maculavirus.",
    "arabic_definition": "فيروسات اللفت (الإنجليزية: Tymoviridae) هي عائلة من الفيروسات الاٍيجابية ذات الرنا أحادي السلسلة تصنف ضمن المجموعة IV في تصنيف بلتيمور. وهي عائلة جديدة نسبياً تم التوافق عليها فقط في عام 2002 وتضم ثلاث أجناس أهمها جنس فيروس اللفت الذي يضم نوع فيروس تيرقش اللفت المصفر وهو أكبر أجناسها بحوالي 25 نوعاً.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046830.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-acetobutylicum",
    "term_en": "Clostridium acetobutylicum",
    "term_ar": "مطثية منتجة للخلون والبوتيل",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria in the family Clostridiaceae, used for the industrial production of SOLVENTS.",
    "arabic_definition": "المطثية الأسيتوبوتيلية أو مطثية منتجة للخلون والبوتيل (الاسم العلمي: Clostridium acetobutylicum) هي نوع من البكتيريا يتبع جنس المطثية من الفصيلة المطثاوية. تسمى بكتيريا الكلوستريديوم الأسيتوبوتيلي أيضا بكائن وايزمان نسبة إلى اليهودي الروسي المولد حاييم وايزمان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046969.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nimaviridae",
    "term_en": "Nimaviridae",
    "term_ar": "متلازمة البقع البيضاء",
    "synonyms": [
      "Whispovirus",
      "Whispoviruses",
      "White spot syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of DNA invertebrate viruses with one genus: Whispovirus.",
    "arabic_definition": "متلازمة البقع البيضاء (الإنجليزية: White spot syndrome) هي عدوى فيروسية تصيب روبيان البينيدي. هذا المرض معدي وقاتل بدرجة كبيرة. (Nimaviridae)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046849.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paraclostridium-sordellii",
    "term_en": "Paraclostridium sordellii",
    "term_ar": "مطثية سورديلية",
    "synonyms": [
      "Clostridium sordelli",
      "Clostridium sordellii",
      "Paeniclostridium sordellii"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria in the family Peptostreptococcaceae, found in INTESTINES and SOIL.",
    "arabic_definition": "مطثية سورديلية أو الكلوستريديوم سورديلي (الاسم العلمي: Clostridium sordellii) هي نوع من البكتيريا يتبع جنس المطثية من الفصيلة المطثاوية. (Paraclostridium sordellii)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D047989.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synechococcus",
    "term_en": "Synechococcus",
    "term_ar": "متعاقبة حبيبية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form-genus of spherical to rod-shaped CYANOBACTERIA in the order Chroococcales. They contain THYLAKOIDS and are found in a wide range of habitats.",
    "arabic_definition": "المتعاقبة الحبيبية (الاسم العلمي: Synechococcus) هي جنس من البكتيريا يتبع فصيلة المتعاقبات الحبيبية من رتبة المتعاقبيات الحبيبية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046940.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acetivibrio-thermocellus",
    "term_en": "Acetivibrio thermocellus",
    "term_ar": "كلوستريديوم حراري سليولوزي",
    "synonyms": [
      "Clostridium thermocellum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, thermophilic, cellulolytic bacteria in the family Clostridaceae. It degrades and ferments CELLOBIOSE and CELLULOSE to ETHANOL in the CELLULOSOME.",
    "arabic_definition": "المطثية الحرارية السليولوزية أو كلوستريديوم حراري سليولوزي (الاسم العلمي: Clostridium thermocellum) هي نوع من البكتيريا تتبع جنس المطثية من فصيلة نظيرات المطثية. نسبة إلى قدرة هذا الكائن الحي على هضم السليولوز. (Acetivibrio thermocellus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048013.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-tyrobutyricum",
    "term_en": "Clostridium tyrobutyricum",
    "term_ar": "كلوستريديوم منتج لحمض بيوتيريك الجبن",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria in the family Clostridiaceae responsible for spoilage of some CHEESE via FERMENTATION of BUTYRIC ACID.",
    "arabic_definition": "كلوستريديوم تايروبيوتيريكام أو كلوستريديوم منتج لحمض بيوتيريك الجبن هي بكتيريا عصوية الشكل موجبة غرام تنمو في ظل الظروف اللاهوائية وتنتج, حمض البوتيريك, وحمض الخليك وغاز الهيدروجين كنواتج تخمر أساسية من الغلوكوز والزايلوز. (Clostridium tyrobutyricum)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048014.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aphanizomenon",
    "term_en": "Aphanizomenon",
    "term_ar": "أفانيزومينون",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form-genus of planktonic CYANOBACTERIA in the order Nostocales.",
    "arabic_definition": "أفانيزومينون (الإنجليزية: Aphanizomenon) هي جنس من البكتيريا، سلبية الغرام، تتبع النوستكية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046890.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-beijerinckii",
    "term_en": "Clostridium beijerinckii",
    "term_ar": "مطثية بيجرينكية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria in the family Clostridiaceae, capable of solventogenesis, and isolated from SOIL, infected WOUNDS, fermenting OLIVES, and spoiled CANDY.",
    "arabic_definition": "مطثية بيجرينكية (الاسم العلمي: Clostridium beijerinckii) هي نوع من البكتيريا يتبع جنس المطثية من الفصيلة المطثاوية. سميت نسبة إلى مارتينوس بايرينك وهو عالم بكتيريا ألماني.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046970.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "atadenovirus",
    "term_en": "Atadenovirus",
    "term_ar": "فيروس أتا الغداني",
    "synonyms": [
      "Atadenoviruses",
      "Ovine adenovirus D",
      "Ovine adenovirus 7",
      "Bovine adenovirus D",
      "Duck adenovirus A",
      "Egg drop syndrome virus",
      "Deer adenovirus",
      "adenoviruses, Deer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of ADENOVIRIDAE that comprises viruses of several species of MAMMALS and BIRDS. The type species is Ovine adenovirus D.",
    "arabic_definition": "فيروس أتا الغداني (الإنجليزية: Atadenovirus) هو جنس من فيروسات غدانية يصيب شريحة واسعة من الحيوانات الفقارية ومن عدة صفوف (طيور ، ثدييات ، و زواحف).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046808.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-butyricum",
    "term_en": "Clostridium butyricum",
    "term_ar": "مطثية زبدية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Type species of the genus CLOSTRIDIUM, a gram-positive bacteria in the family Clostridiaceae. It is used as a source of PROBIOTICS.",
    "arabic_definition": "مطثية زبدية (الاسم العلمي: Clostridium butyricum) هي نوع من البكتيريا يتبع جنس المطثية من الفصيلة المطثاوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046972.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hathewaya-histolytica",
    "term_en": "Hathewaya histolytica",
    "term_ar": "مطثية حالة للنسج",
    "synonyms": [
      "Clostridium histolyticum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, strongly proteolytic bacteria in the family Clostridiaceae. It contains several forms of COLLAGENASE whose action can lead to GAS GANGRENE in humans and HORSES.",
    "arabic_definition": "مطثية حالة للنسج (الاسم العلمي: Clostridium histolyticum) هي نوع من البكتيريا يتبع جنس المطثية من الفصيلة المطثاوية. (Hathewaya histolytica)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D047009.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-chauvoei",
    "term_en": "Clostridium chauvoei",
    "term_ar": "كلوستريديوم شوفوي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria in the family Clostridiaceae isolated from infected CATTLE; SHEEP; and other animals. It causes blackleg in cattle and sheep and is transmitted through soil-borne spores.",
    "arabic_definition": "المطثية الشوفوية أو مغزلي الماشية (الاسم العلمي: Clostridium chauvoei) هي نوع من البكتيريا تتبع جنس المطثية من فصيلة نظيرات المطثية. هي بكتيريا موجبة غرام لا هوائية متحركة وتسبب العدوى الشديدة بها في الماشية والأغنام مرض الجمرة النفاخية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046975.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ruminiclostridium-cellulolyticum",
    "term_en": "Ruminiclostridium cellulolyticum",
    "term_ar": "مطثية حالة للسليولوز",
    "synonyms": [
      "Clostridium cellulolyticum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria in the order Eubacteriales. It is a cellulolytic, mesophilic species isolated from decayed GRASS.",
    "arabic_definition": "مطثية حالة للسليولوز (الاسم العلمي: Clostridium cellulolyticum) هي نوع من البكتيريا تتبع جنس المطثية من فصيلة نظيرات المطثية. (Ruminiclostridium cellulolyticum)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046973.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-kluyveri",
    "term_en": "Clostridium kluyveri",
    "term_ar": "كلوستريديوم كلويفيري",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria in the family Clostridiaceae. It is distinctive for its ability to ferment ETHANOL to caproic acid.",
    "arabic_definition": "المطثية الكلايفرية أو الكلوستريديوم الكلايفري (الاسم العلمي: Clostridium kluyveri) هي نوع من البكتيريا اللاهوائية المتحركة موجبة غرام تتبع جنس المطثية من فصيلة نظيرات المطثية. سميت نسبة لعالم الأحياء الدقيقة الألماني ألبرت كلايفر.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D047010.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acetoanaerobium-sticklandii",
    "term_en": "Acetoanaerobium sticklandii",
    "term_ar": "كلوستريديوم ستكلاندي",
    "synonyms": [
      "Clostridium sticklandii"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, anaerobic bacteria in the family Filifactoraceae frequently used for the study of ENZYMES.",
    "arabic_definition": "كلوستريديوم ستكلاندي (نسبة لعالم البكتيريا البريطاني L. H. ستكلاند) هي بكتيريا موجبة غرام لاهوائية، متحركة. تم عزلها لأول مرة عام 1954 من الطين الأسود لمنطقة خليج سان فرانسيسكو بوساطة T.C. ستادمان، الذي قام بتسمية هذا النوع من البكتيريا. (Acetoanaerobium sticklandii)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D047991.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-tertium",
    "term_en": "Clostridium tertium",
    "term_ar": "مطثية ثلثية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria in the family Clostridiaceae, causing BACTEREMIA in humans and ANIMALS.",
    "arabic_definition": "مطثية ثلثية (الاسم العلمي: Clostridium tertium) هي نوع من البكتيريا يتبع جنس المطثية من الفصيلة المطثاوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048010.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-cellulovorans",
    "term_en": "Clostridium cellulovorans",
    "term_ar": "مطثية آكلة للسليولوز",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, cellulolytic bacteria in the family Clostridiaceae. It produces CELLULOSOMES which are involved in plant CELL WALL degradation.",
    "arabic_definition": "مطثية آكلة للسليولوز (الاسم العلمي: Clostridium cellulovorans) هي نوع من البكتيريا تتبع جنس المطثية من فصيلة نظيرات المطثية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046974.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thiothrix",
    "term_en": "Thiothrix",
    "term_ar": "هلبة الكبريت",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of colorless, filamentous, rod-shaped bacteria in the family THIOTRICHACEAE, containing sulfur globules. Thiothrix species are found as components of BIOFILMS in irrigation systems and wastewater treatment plants, and in marine environments as endosymbionts.",
    "arabic_definition": "هلبة الكبريت (الاسم العلمي: Thiothrix) هي جنس من البكتيريا تتبع فصيلة هلبات الكبريت من رتبة هلبيات الكبريت.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053525.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proton-pump-inhibitors",
    "term_en": "Proton Pump Inhibitors",
    "term_ar": "مثبط مضخة البروتون",
    "synonyms": [
      "Inhibitors, Proton Pump",
      "Proton Pump Inhibitor",
      "Inhibitor, Proton Pump",
      "Pump Inhibitor, Proton"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compounds that inhibit H(+)-K(+)-EXCHANGING ATPASE. They are used as ANTI-ULCER AGENTS and sometimes in place of HISTAMINE H2 ANTAGONISTS for GASTROESOPHAGEAL REFLUX.",
    "arabic_definition": "مثبطات مضخة البروتون مجموعة من الأدوية التي تثبط إنتاج الحمض المعدي، وهي أقوى مثبطات إفرازات المعدة في الوقت الحاضر. ظهرت هذه المجموعة بعد مثبطات مستقبلات الهيستامين من النمط الثاني وحلت محلها إلى حد كبير. (Proton Pump Inhibitors)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054328.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arachnodactyly",
    "term_en": "Arachnodactyly",
    "term_ar": "عنكبوتية الأصابع",
    "synonyms": [
      "Arachnodactylies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormal bone development that is characterized by extra long and slender hands and fingers, such that the clenched thumb extends beyond the ulnar side of the hand. Arachnodactyly can include feet and toes. Arachnodactyly has been associated with several gene mutations and syndromes.",
    "arabic_definition": "تطاول الأصابع (الإنجليزية: Arachnodactyly)، المعروف أيضًا باسم عنكبوتية الأصابع، حالةً طبية تتميز بأصابع طويلة ونحيلة على نحو غير طبيعي مقارنة براحة اليد وقوس القدم. وفي بعض الحالات، يكون إبهام المصاب مثنيًا نحو الداخل باتجاه راحة اليد.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054119.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "galactogogues",
    "term_en": "Galactogogues",
    "term_ar": "مدر اللبن",
    "synonyms": [
      "Galactagogues",
      "Galactagogue"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Substances that induce LACTATION.",
    "arabic_definition": "مُدِرُّ اللَّبَن (بالإنجليزية: galactagogue أو galactogogue) (باليونانية: γαλακταγωγό)، هي عبارة عن مادة تعزز الرضاعة لدى البشر أو الحيوانات الأخرى. وهذه المادة قد تكون اصطناعية، أو مشتقة من النباتات، أو قد تكون ذاتية التنشاً داخل الكائن الحي. (Galactogogues)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056669.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dicistroviridae",
    "term_en": "Dicistroviridae",
    "term_ar": "فيروسات ثنائية مقرونة",
    "synonyms": [
      "Cripavirus",
      "Cripaviruses",
      "Israeli acute paralysis virus of bees",
      "IAPVOB",
      "Israeli acute paralysis virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of invertebrate RNA viruses in the order Picornavirales.",
    "arabic_definition": "فيروسات ثنائية مقرونة (الإنجليزية: Dicistroviridae) هي عائلة من الفيروسات الاٍيجابية ذات الرنا أحادي السلسلة المصيبة للحشرات، ومن بين الحشرات التي تصيبها الفيروسات الثنائية المقرونة: المن، الذباب، النحل، دود القز، النمل و النطاط",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056629.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacillales",
    "term_en": "Bacillales",
    "term_ar": "رتبة العصويات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An order of gram-positive bacteria in the class Bacilli, phylum BACILLOTA.",
    "arabic_definition": "رتبة العصويات هي رتبة من البكتيريا موجبة غرام تقع ضمن متينات الجدار. وتشمل الأجناس الممثلة العصوية واللستيريا والمكورة العنقودية. (Bacillales)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056449.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactobacillales",
    "term_en": "Lactobacillales",
    "term_ar": "بكتيريا حمض اللبن",
    "synonyms": [
      "Lactic Acid Bacteria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An order of gram-positive bacteria in the class Bacilli, that have the ability to ferment sugars to lactic acid. They are widespread in nature and commonly used to produce FERMENTED FOODS.",
    "arabic_definition": "بكتيريا حَمْض اللبن (الإنجليزية: Lactic acid bacteria) بكتيريا موجبة الغرام مُتحمِّلة للأحماض ذات غوانين وسايتوسين غير متبوغة لاتنفسية لها نوعان - بكتيريا عصية وبكتيريا كروية (مكورات) تشترك في خصائص أيضية وفسيولوجية مشتركة. تنتج هذه البكتيريا حمض اللبن المنتج النهائي الأيضي الرئيس لتخمير الكربوهيدرات، فتسمى بكتيريا حمض اللبن. (Lactobacillales)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056546.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterococcaceae",
    "term_en": "Enterococcaceae",
    "term_ar": "مكورات معوية",
    "synonyms": [
      "Tetragenococcus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-positive bacteria in the order Lactobacillales, phylum BACILLOTA.",
    "arabic_definition": "المكورات المعوية (الاسم العلمي: Enterococcaceae) هي فصيلة من البكتيريا تتبع رتبة الملبنيات من طائفة البكتيريا العصوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056569.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "human-bocavirus",
    "term_en": "Human bocavirus",
    "term_ar": "فيروس بوكا البشري",
    "synonyms": [
      "bocavirus, Human",
      "Human bocaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A member of the family PARVOVIRIDAE, subfamily PARVOVIRINAE, originally isolated from human nasopharyngeal aspirates in patients with respiratory disease.",
    "arabic_definition": "فيروس بوكا البشري (HBoV) هو الاسم الذي يطلق على جميع الفيروسات من جنس فيروسات البوكابا من عائلة الفيروسات الصغيرة المعروف أنها تصيب البشر. كل من فيروس بوكا 1 وبوكا 3 هما أحد أنواع فيروسات البوكابا البدائية 1، بينما تنتمي فيروسات بوكا 2 وبوكا 4 إلى فيروسات البوكابا البدائية 2 بعض هذه الفيروسات تسبب أمراضًا للإنسان. (Human bocavirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056661.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "donohue-syndrome",
    "term_en": "Donohue Syndrome",
    "term_ar": "متلازمة دونوهيو",
    "synonyms": [
      "Syndrome, Donohue",
      "Leprechaunism",
      "Leprechaunisms",
      "Rabson-Mendenhall Syndrome",
      "Syndrome, Rabson-Mendenhall",
      "Pineal Hyperplasia, Insulin-Resistant Diabetes Mellitus, And Somatic Abnormalities",
      "Mendenhall Syndrome",
      "Syndrome, Mendenhall"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare autosomal recessive syndrome of extreme insulin resistance due to mutations in the binding domain of INSULIN RECEPTOR. Clinical features include severe intrauterine and postnatal growth restriction, characteristic dysmorphic FACIES; HIRSUTISM; VIRILIZATION; multiple endocrine abnormalities, and early death.",
    "arabic_definition": "متلازمة دونوهيو (الإنجليزية: Donohue syndrome) هو اضطراب وراثي شديد ونادر جدًا. يُعاني المُصابون بهذه المُتلازمة من إعاقة كبيرة في مُستفبلات الإنسولين.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056731.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tracheomalacia",
    "term_en": "Tracheomalacia",
    "term_ar": "التلين الرغامى",
    "synonyms": [
      "Tracheomalacias",
      "Chondromalacia of Trachea",
      "Trachea Chondromalacia",
      "Trachea Chondromalacias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital or acquired condition of underdeveloped or degeneration of CARTILAGE in the TRACHEA. This results in a floppy tracheal wall making patency difficult to maintain. It is characterized by wheezing and difficult breathing.",
    "arabic_definition": "التلين الرغامي (الإنجليزية: Tracheomalacia) هي حالة يكون فيها الغضروف الذي يحافظ على القصبة الهوائية مفتوحًا رخوًا بحيث تنهار القصبة الهوائية جزئيًا خاصة أثناء زيادة تدفق الهواء. العَرَض المعتاد هو الصرير عندما يتنفس الشخص زفيرًا.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055090.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wolf-hirschhorn-syndrome",
    "term_en": "Wolf-Hirschhorn Syndrome",
    "term_ar": "متلازمة وولف - هيرشيرون",
    "synonyms": [
      "Syndrome, Wolf-Hirschhorn",
      "Chromosome 4p Syndrome",
      "4p Syndrome, Chromosome",
      "4p Syndromes, Chromosome",
      "Chromosome 4p Syndromes",
      "Syndrome, Chromosome 4p",
      "Syndromes, Chromosome 4p",
      "Wolf Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome caused by large deletions of the telomereic end of the short arm of CHROMOSOME 4 (4p) in Wolf-Hirchhorn syndrome critial regions (WHSCRs). Several candidate genes have been identified including WHSC1 and WHSCH2 which appear to be responsible for the core phenotype and in combination with other linked and unlinked genes determine the severity and inclusion of rarer phenotypes. Most cases have a characteristic cranio-facial defect often referred to as Greek helmet face - a combined result of MICROCEPHALY, broad forehead, prominent glabella, HYPERTELORISM, high arched eyebrows, short philtrum and micrognathia. In addition there is mental retardation, growth delays, EPILEPSY, and frequently a wide range of midline and skeletal defects, including HYPOSPADIAS; CONGENITAL HEART DEFECTS; CLEFT LIP; CLEFT PALATE; colobomata; CLUBFOOT; clinodactyly; SCOLIOSIS; and KYPHOSIS.",
    "arabic_definition": "متلازمة وولف - هيرشيرونوتسمى أيضا متلازمة الكروموسوم الرابع الناقص (Chromosome 4p syndrome)، وكان أول وصف في عام 1961 من قبل الأميركيين كيرت هيرشينون Kurt Hirschhorn وهيربيرت كوبر Herbert Cooper ,وعندما قاما بنشر دراستهم، حيث وصفوا حالة طفل لديه فشل في الالتحام في منطقة منتصف الجسم مع وجود عيب في تركيب كروموسوم الخلية المتمثل في نقص الذراع القصير للكروموسوم 4 deletion ، وفي عام 1965 نشر بحث هيرشينون - وولف Wolf-Hirschhorn سلط الضوء فيه على هذه المتلازمة، ومن ثم تمت تسمية الحالة بإسميهما. (Wolf-Hirschhorn Syndrome)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054877.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aspartylglucosaminuria",
    "term_en": "Aspartylglucosaminuria",
    "term_ar": "أسبارتيل جلوكوزامين يوريا",
    "synonyms": [
      "Aspartylglucosaminurias",
      "Aspartylglycosaminuria",
      "Aspartylglycosaminurias",
      "Aspartylglucosamidase Deficiency",
      "Aspartylglucosamidase Deficiencies",
      "Deficiencies, Aspartylglucosamidase",
      "Deficiency, Aspartylglucosamidase",
      "AGA Deficiency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A recessively inherited, progressive lysosomal storage disease caused by a deficiency of GLYCOSYLASPARAGINASE activity. The lack of this enzyme activity results in the accumulation of N-acetylglucosaminylasparagine (the linkage unit of asparagine-linked glycoproteins) in LYSOSOMES.",
    "arabic_definition": "أسبارتيل جلوكوزامين يوريا، أو بيلة أسبارتيل جلوكوزامين (بالإنجليزية Aspartylglucosaminuria، ورمزه «إيه جي يو») مرض وراثي يمتاز بتدهور الأداء العقلي المصحوب بزيادة في اضطرابات الجلد والعظام والمفاصل. ينجم المرض عن عيب في إنزيم يُعرف «بأسبارتيل جلوكوزامينيداز» يؤدي دورًا مهمًا في أجسامنا لأنه يساعد على تحطيم بنى بعض السكريات (مثل السكريات قليلة التعدد) التي ترتبط ببعض الببروتينات (مثل البروتينات السكرية).",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054880.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tracheobronchomalacia",
    "term_en": "Tracheobronchomalacia",
    "term_ar": "تلين الرغامى والقصبات",
    "synonyms": [
      "Tracheobronchomalacias",
      "Chondromalacia of Trachea and Bronchi",
      "Williams-Campbell Syndrome",
      "Syndrome, Williams-Campbell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital or acquired condition of underdeveloped or degeneration of CARTILAGE in the TRACHEA and the BRONCHI. This results in a floppy non-rigid airway making patency difficult to maintain.",
    "arabic_definition": "تلين الرغامى والقصبات أو تلين القصبة والشعب الهوائية، هو حالة تتسم بليونة الدعم الغضروفي للرغامى (القصبة الهوائية) ما يؤدي إلى انخماصها. تؤثر تلك الحالة أيضًا على القصبات (الشعب الهوائية). (Tracheobronchomalacia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055089.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-genitalium",
    "term_en": "Mycoplasma genitalium",
    "term_ar": "مفطورة تناسلية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria originally isolated from urethral specimens of patients with non-gonoccocal URETHRITIS. In primates it exists in parasitic association with ciliated EPITHELIAL CELLS in the genital and respiratory tracts.",
    "arabic_definition": "المفطورة التناسلية (الاسم العلمي: Mycoplasma genitalium) هو نوع من البكتيريا الممراض الصغيرة التي تعيش على الخلايا الظهارية المهدبة (نسيج طلائي) في المسالك البولية والتناسلية في الإنسان. وتأكد وجودها لأول مرة في عام 1981، وحددت في نهاية المطاف كنوع جديد من الميكوبلازما في عام 1983.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045704.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-hyopneumoniae",
    "term_en": "Mycoplasma hyopneumoniae",
    "term_ar": "مفطورة رئوية خنزيرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria that causes MYCOPLASMA PNEUMONIA OF SWINE. The organism damages the CILIA in the airways of the pig, and thus compromises one of the most effective mechanical barriers against invading pathogens. The resulting weakening of the IMMUNE SYSTEM can encourage secondary infections, leading to porcine respiratory disease complex.",
    "arabic_definition": "مفطورة رئوية خنزيرية (الإنجليزية: Mycoplasma hyopneumoniae) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045705.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibrobacter",
    "term_en": "Fibrobacter",
    "term_ar": "ليفيات",
    "synonyms": [
      "Fibrobacterota"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, anaerobic bacteria in the family Fibrobacteraceae, isolated from the human GASTROINTESTINAL TRACT.",
    "arabic_definition": "الليفيات (الإنجليزية: Fibrobacteres) هي شعبة صغيرة من البكتيريا وتتضمن العديد من بكتيريا الكرش الرئيسية المساهمة في تحليل السليلوز ذو الأصل النباتي في الحيوانات المجترة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045848.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laron-syndrome",
    "term_en": "Laron Syndrome",
    "term_ar": "متلازمة لارون",
    "synonyms": [
      "Syndrome, Laron",
      "Growth Hormone Receptor Defect",
      "Growth Hormone Receptor Deficiency",
      "Laron Dwarfism",
      "Dwarfism, Laron",
      "Laron Type Dwarfism I",
      "Growth Hormone Insensitivity Syndrome",
      "Primary Growth Hormone Resistance"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive disorder characterized by short stature, defective GROWTH HORMONE RECEPTOR, and failure to generate INSULIN-LIKE GROWTH FACTOR I by GROWTH HORMONE. Laron syndrome is not a form of primary pituitary dwarfism (GROWTH HORMONE DEFICIENCY DWARFISM) but the result of mutation of the human GHR gene on chromosome 5.",
    "arabic_definition": "متلازمة لارون (الإنجليزية: Laron syndrome) وتسمى أيضًا قزامة لارون (الإنجليزية: Laron dwarfism) هي مرض نادر سببه خلل جيني يسبب عجز الجسم عن الاستجابة لهرمون النمو المُفرز من الغدة النخامية وتظهر علاماته الأولية على شكل فشل نمو الطفل بعد الولادة. يعود تسميتها بمتلازمة لارون إلى طبيب أمراض الغدد الصماء الإسرائيلي زلي لارون عام 1966، حيث وصف المرض لدى أطفال لديهم قصر شديد في القامة مع ارتفاع في مستوى هرمون النمو، ولهذا أطلق اسم الطبيب على ذلك المرض.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046150.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-ovipneumoniae",
    "term_en": "Mycoplasma ovipneumoniae",
    "term_ar": "مفطورة رئوية بيضية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria originally isolated from the LUNGS; TRACHEA; and NASAL CAVITY of SHEEP. It causes chronic interstitial pneumonia (PNEUMONIA, MYCOPLASMA) in both SHEEP and GOATS.",
    "arabic_definition": "مفطورة رئوية بيضية (الإنجليزية: Mycoplasma ovipneumoniae) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045802.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-gallisepticum",
    "term_en": "Mycoplasma gallisepticum",
    "term_ar": "مفطورة منتنة للدجاج",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria causing chronic respiratory disease in POULTRY.",
    "arabic_definition": "مفطورة منتنة للدجاج (الاسم العلمي: Mycoplasma gallisepticum) هي نوع من البكتيريا تتبع جنس المفطورة من فصيلة المفطورات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045686.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ruminococcus",
    "term_en": "Ruminococcus",
    "term_ar": "رومينوكوكوس",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive bacteria in the family Lachnospiraceae that inhabits the RUMEN; LARGE INTESTINE; and CECUM of MAMMALS.",
    "arabic_definition": "رومينوكوكوس هو جنس من البكتيريا ضمن فئة مطثيات. هذه البكتيريا لاهوائية وموجبة الجرام، وتعيش في أمعاء الإنسان. (Ruminococcus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045857.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-hyorhinis",
    "term_en": "Mycoplasma hyorhinis",
    "term_ar": "مفطورة أنافية خنزيرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria and a common inhabitant of the NASAL CAVITY of both healthy and diseased PIGS. It is a common secondary invader in MYCOPLASMAL PNEUMONIA OF SWINE.",
    "arabic_definition": "مفطورة أنافية خنزيرية (الإنجليزية: Mycoplasma hyorhinis) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045790.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-synoviae",
    "term_en": "Mycoplasma synoviae",
    "term_ar": "مفطورة زلالية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria pathogenic to CHICKENS; TURKEYS, and guinea fowls. It causes disease in a wide variety of organs and tissues including JOINTS, tendon sheaths and the RESPIRATORY TRACT.",
    "arabic_definition": "مفطورة زلالية (الإنجليزية: Mycoplasma synoviae) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045805.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-meleagridis",
    "term_en": "Mycoplasma meleagridis",
    "term_ar": "مفطورة رومية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria producing air sacculitis and skeletal abnormalities in TURKEYS.",
    "arabic_definition": "مفطورة رومية (الإنجليزية: Mycoplasma meleagridis) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045794.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-orale",
    "term_en": "Mycoplasma orale",
    "term_ar": "مفطورة فويهية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria that is a common inhabitant of the human OROPHARYNX and also cell culture contaminant. It is usually non-pathogenic but it can cause infections in leukemic or immunosuppressed patients.",
    "arabic_definition": "مفطورة فويهية (الإنجليزية: Mycoplasma orale) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045795.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-salivarium",
    "term_en": "Mycoplasma salivarium",
    "term_ar": "مفطورة لعابية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria strongly implicated in oral infection, PERIODONTAL DISEASES, eye and ear disorders, and SEPTIC ARTHRITIS.",
    "arabic_definition": "مفطورة لعابية (الإنجليزية: Mycoplasma salivarium) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045804.html",
        "accessedAt": "2026-11-21"
      }
    ]
  }
];
