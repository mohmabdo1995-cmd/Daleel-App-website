// Auto-curated verified medical terms (NIH NLM MeSH 2026 + verified bilingual medical entries) - Part 3
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

export const MEDICAL_TERMS_PART_3: RawExpandedMedicalTerm[] = [
  {
    "id": "cryosurgery",
    "term_en": "Cryosurgery",
    "term_ar": "جراحة بردية",
    "synonyms": [
      "Cryosurgeries",
      "Cryoablation",
      "Cryoablations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The use of freezing as a special surgical technique to destroy or excise tissue.",
    "arabic_definition": "الجراحة البردية هي عملية استعمال البرد الشديد لتدمير والتخلص من الأنسجة غير السليمة أو المتضررة. يرجع أصل الكلمة إلى الكلمة اليونانية المكونة من cryo والتي تعني (بارد أو مثلج) وsurgery التي تعني (عمل اليد أو العمل اليدوي). (Cryosurgery)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003452.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hysterotomy",
    "term_en": "Hysterotomy",
    "term_ar": "بضع الرحم",
    "synonyms": [
      "Hysterotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An incision in the uterus, performed through either the abdomen or the vagina.",
    "arabic_definition": "بضع الرحم (الإنجليزية: Hysterotomy) هو شق جراحي في الرحم. يتم إجراؤه أثناء عملية الولادة القيصرية.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020883.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thoracotomy",
    "term_en": "Thoracotomy",
    "term_ar": "بضع الصدر",
    "synonyms": [
      "Thoracotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical incision into the chest wall.",
    "arabic_definition": "شق الصدر أو بضع الصدر (الإنجليزية: Thoracotomy) هو شق في تجويف الجنبة من صدر الإنسان المحيط بالرئتين. ويتم تنفيذه بواسِطة الجراحين (أو أطباء الطوارئ في ظل ظروف معينة) للوصول إلى الأجهزة الصدرية، والأجهزة الأكثر شيوعا هي القلب، الرئتين، أو المريء، أو من أجل الوصول إلى الشريان الأورطي الصدري أو الجزء الأمامى من العمود الفقري (وهذا قد يكون ضروريا للوصول إلى الأورام في العمود الفقري).",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013908.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lithotripsy",
    "term_en": "Lithotripsy",
    "term_ar": "تفتيت الحصيات",
    "synonyms": [
      "Lithotripsies",
      "Litholapaxy",
      "Litholapaxies",
      "Extracorporeal Shockwave Lithotripsy",
      "Extracorporeal Shockwave Lithotripsies",
      "Lithotripsies, Extracorporeal Shockwave",
      "Lithotripsy, Extracorporeal Shockwave",
      "Shockwave Lithotripsies, Extracorporeal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The destruction of a calculus of the kidney, ureter, bladder, or gallbladder by physical forces, including crushing with a lithotriptor through a catheter. Focused percutaneous ultrasound and focused hydraulic shock waves may be used without surgery. Lithotripsy does not include the dissolving of stones by acids or litholysis. Lithotripsy by laser is LITHOTRIPSY, LASER.",
    "arabic_definition": "تفتيت الحصيات (الإنجليزية: Lithotripsy) هو إجراء طبي يتمُّ خلاله تحطيم الكتل الصلبة داخل الجسم مثل الحصيات الكلوية والحصيات الصفراوية من خلال تقنيَّات وأجهزة متنوعة، اشتقَّ مصطلح تفتيت الحصيات من الكلمة اليونانية lithotripso والتي تعني تكسير أو تحطيم.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008096.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dermabrasion",
    "term_en": "Dermabrasion",
    "term_ar": "كشط الجلد",
    "synonyms": [
      "Dermabrasions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The mechanical planing of the SKIN with sand paper, emery paper, or wire brushes, to promote reepithelialization and smoothing of skin disfigured by ACNE scars or dermal NEVI.",
    "arabic_definition": "كشط الجلد هو نوع من التخطيط الجراحي للجلد، يتم إجراؤه عادةً في بيئة طبية إحترافية من قبل طبيب أمراض جلدية أو جراح تجميل مدرب خصيصًا على هذا الإجراء. تم إجراء عملية كشط الجلد لسنوات عديدة (قبل ظهور أشعة الليزر) وتتضمن التآكل العميق الخاضع للرقابة (التآكل) للطبقات العليا إلى المتوسطة من الجلد مع أي مجموعة متنوعة من الأجهزة الكاشطة القوية بما في ذلك فرشاة سلكية أو عجلة ماسية أو مثقب، صنفرة معقمة أو بلورات ملح أو أي وسائل ميكانيكية أخرى. (Dermabrasion)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003869.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastrostomy",
    "term_en": "Gastrostomy",
    "term_ar": "فغر المعدة",
    "synonyms": [
      "Gastrostomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Creation of an artificial external opening into the stomach for nutritional support or gastrointestinal compression.",
    "arabic_definition": "تفميم المعدة، (من اللغة الإغريقية: γαστήρ - المعدة و στóμα - فتحة، معبر)، (الإنجليزية: Gastrostomy)، هي عملية جراحية، تتلخص في إنشاء معبر للطعام في المعدة لإطعام المريض عند عدم قدرته من تناول الطعام عن طريق الفم. تعتبر من أكثر الطرق انتشاراً عند حدوث عدم عبور للطعام عبر المريء.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005774.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arthroplasty",
    "term_en": "Arthroplasty",
    "term_ar": "إعادة تشكيل المفصل",
    "synonyms": [
      "Arthroplasties",
      "Bone Tunnel Enlargement",
      "Bone Tunnel Enlargements",
      "Enlargement, Bone Tunnel",
      "Tunnel Enlargement, Bone",
      "Bone Tunnel Widening",
      "Bone Tunnel Widenings",
      "Tunnel Widening, Bone"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical reconstruction of a joint to relieve pain or restore motion.",
    "arabic_definition": "إعادة تشكيل المفصل (ترميم المفصل) (الإنجليزية: Arthroplasty) هو إجراء جراحي تقويمي في مجال جراحة العظام حيث يتم فيه استبدال أو إعادة تشكيل أو إعادة محاذاة السطح المفصلي لمفصل في الجهاز العضلي الهيكلي بواسطة قطع العظم (بغرض تقصيره أو تطويله أو تغيير ارتصافه) أو أي إجراء آخر. إنه إجراء اختياري يتم القيام به لتخفيف الألم واستعادة وظيفة المفصل بعد تعرضه للتلف بسبب التهاب المفاصل أو نوع آخر من الرضح (الأضرار أو الإصابات التي قد تصيب المفصل نتيجة حادث أو إصابة جسدية).",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001178.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arthrodesis",
    "term_en": "Arthrodesis",
    "term_ar": "إيثاق المفصل",
    "synonyms": [
      "Arthrodeses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The surgical fixation of a joint by a procedure designed to accomplish fusion of the joint surfaces by promoting the proliferation of bone cells. (Dorland, 28th ed)",
    "arabic_definition": "إيثاق المفصل (الإنجليزية: Arthrodesis) أو سمكرة المفصل أو لحم المفصل هو خلق التحام بين عظمتين جراحياً بغرض تخفيف الألم الناتج إما عن تنكس المفصل الروماتزمي أو الكسور الممتدة داخل المفصل، وذلك في حالة فشل المسكنات والأساليب العلاجية الأخرى في تخفيفه، ومن أكثر أجزاء الجهاز الهيكلي التي تستخدم فيها هذه التقنية العمود الفقري، ومفاصل اليد والكاحل والقدم، وكان إيثاق مفصلي الركبة والفخذ عمليتين شائعتين في الماضي لتخفيف الألم، غير أن التطور العظيم الذي حققته تقنيات المفاصل الصناعية حدت من استخدام تقنية الإيثاق في هذين المفصلين كعلاج جراحي أولي وصار يستخدم في هذه الحالات فقط في حالة فشل عملية استبدال الفصل. عند الانتهاء من الجراحة والشفاء الذي يتطلب عدة أسابيع إلى غاية السنة، تلتحم العظام المجاورة ولا يحدث أي حركة بينها.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001174.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "apicoectomy",
    "term_en": "Apicoectomy",
    "term_ar": "استئصال قمة الجذر",
    "synonyms": [
      "Apicoectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision of the apical portion of a tooth through an opening made in the overlying labial, buccal, or palatal alveolar bone. (Dorland, 28th ed)",
    "arabic_definition": "استئصال قمة الجذر، أو بتر الجذر أو علاج تراجع نفق الجذر، أو تعبئة تجويف الجذر هو إجراء جراحي لبي يتم بإزالة قمة الجذر للسن، وذلك عبر استئصال قمة الجذر من الخارج من خلال عظمة الفك. غالبًا ما تتم عملية الاستئصال بواسطة عمليات مجهرية لبية. (Apicoectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001047.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatectomy",
    "term_en": "Hepatectomy",
    "term_ar": "استئصال الكبد",
    "synonyms": [
      "Hepatectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision of all or part of the liver. (Dorland, 28th ed)",
    "arabic_definition": "استئصال الكبد هو استئصال جراحي (إزالة كل أو جزء) من الكبد. بينما يستخدم المصطلح غالبًا لإزالة الكبد من متبرع بزراعة الكبد، ستركز هذه المقالة على الاستئصال الجزئي للأنسجة الكبدية واستئصال الكبد الوعائي. (Hepatectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006498.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pallidotomy",
    "term_en": "Pallidotomy",
    "term_ar": "بضع الكرة الشاحبة",
    "synonyms": [
      "Pallidotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Producing a lesion in the posteroventral portion of the medial GLOBUS PALLIDUS to treat PARKINSON DISEASE and other extrapyramidal disorders. The placement of the lesion is aided by STEREOTACTIC TECHNIQUES and imaging procedures.",
    "arabic_definition": "بضع الكرة الشاحبة (الإنجليزية: Pallidotomy) كان يستخدم لعقود لعلاج التصلب الحركي المصاحب لمرض باركنسون، الا أنه عند بدئ استخدام دواء ليفودوبا عام 1960 م، تم الحد من إجراء هذه العملية. لكن على الرغم من التقدم الدوائي الملحوظ، الا أن من المرضى من يعاني من خلل الحركة (بالإنجليزية: Dyskinesia) المصاحب لاستعمال الأدوية أو أعراض حركية متقدمة مصاحبة لمرض باركنسون مما أدى إلى إعادة استخدام هذه العملية على نطاق أوسع.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053860.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proctoscopy",
    "term_en": "Proctoscopy",
    "term_ar": "منظار المستقيم",
    "synonyms": [
      "Proctoscopies",
      "Proctoscopic Surgical Procedures",
      "Procedure, Proctoscopic Surgical",
      "Procedures, Proctoscopic Surgical",
      "Proctoscopic Surgical Procedure",
      "Surgical Procedure, Proctoscopic",
      "Proctoscopic Surgery",
      "Proctoscopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the RECTUM; ANAL CANAL; and ANUS.",
    "arabic_definition": "تنظير المستقيم أو البروكتوسكوبي،. هو إجراء طبي شائع يُستخدم فيه أداة تُسمى البروكتوسكوب (وتعرف أيضاً بالريكتوسكوب، على الرغم من أن الأخير قد يكون أطول قليلاً) لفحص تجويف الشرج، المستقيم، أو القولون السيني. (Proctoscopy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011351.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synovectomy",
    "term_en": "Synovectomy",
    "term_ar": "استئصال الغشاء الزلالي",
    "synonyms": [
      "Synovectomies",
      "Synovium Resection",
      "Resection, Synovium",
      "Synovium Resections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of the SYNOVIAL MEMBRANE.",
    "arabic_definition": "استئصال الغشاء الزلالي أو استئصال الغشاء الزليلي هو عمل جراحي يهدف إلى إزالة الغشاء والأنسجة الزلالية المحيطة بالمفاصل، وذلك في حالات الالتهاب الشديدة بالشكل الذي لا تفيد فيه الأدوية. كان هذا الأسلوب الجراحي مستخدماً في حالات التهاب المفاصل الروماتويدي، ولكن هذا الاستخدام في تضاؤل، بسبب تطور وسائل العلاج باستخدام وسائل العلاج الإشعاعي الداخلي الانتقائي. (Synovectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074402.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gingivectomy",
    "term_en": "Gingivectomy",
    "term_ar": "استئصال اللثة",
    "synonyms": [
      "Gingivectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical excision of the gingiva at the level of its attachment, thus creating new marginal gingiva. This procedure is used to eliminate gingival or periodontal pockets or to provide an approach for extensive surgical interventions, and to gain access necessary to remove calculus within the pocket. (Dorland, 28th ed)",
    "arabic_definition": "استئصال اللثة أو إزالة اللثة هو إجراء سني يجريه طبيب الأسنان أو جراح الفم يقوم على قطع جزء من اللثة. يُعد إجراء إزالة اللثة أقدم نهج جراحي في علاج اللثة ويُجرى عادة من أجل تحسين الناحية الجمالية أو حالة اللثة غير الطبيعية. (Gingivectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005890.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bronchoscopy",
    "term_en": "Bronchoscopy",
    "term_ar": "تنظير القصبات",
    "synonyms": [
      "Bronchoscopies",
      "Bronchoscopic Surgical Procedures",
      "Bronchoscopic Surgical Procedure",
      "Surgical Procedure, Bronchoscopic",
      "Bronchoscopic Surgery",
      "Bronchoscopic Surgeries",
      "Surgeries, Bronchoscopic",
      "Surgery, Bronchoscopic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the bronchi.",
    "arabic_definition": "تنظير القصبات (الإنجليزية: Bronchoscopy) هو أسلوب إجرائي طبي يستخدم فيه المنظارالمُسمَّى هنا المِشعَاب بنوعيه المنظار الصلب ومنظار الألياف العصبية، لرؤية الطرق التنفسية من الداخل، ويشمل ذلك الحنجرة، وهي (حجرة الصوت)، والرغامى ويتم عادة عن طريق الأنف أو الفم، مما يسمح للطبيب بكشف الأجسام الغريبة، النزيف، الأورام. أو الالتهابات، ويمكن أن تأخذ عينية من داخل الرئتين.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001999.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nephrotomy",
    "term_en": "Nephrotomy",
    "term_ar": "بضع الكلية",
    "synonyms": [
      "Nephrotomies",
      "Kidney Incisions",
      "Kidney Incision",
      "Nephrostomy",
      "Nephrostomies",
      "Pyelotomy",
      "Pyelotomies",
      "Pyelostomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical incision into any part of the kidney.",
    "arabic_definition": "بضع الكلية أو شق الكلية (الإنجليزية: Nephrotomy) هو إجراء جراحي يُحدَثُ فيه شقٌ جراحي في الكلية.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074643.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "denervation",
    "term_en": "Denervation",
    "term_ar": "زوال التعصيب",
    "synonyms": [
      "Denervations",
      "Neurectomy",
      "Neurectomies",
      "Peripheral Neurectomy",
      "Neurectomies, Peripheral",
      "Neurectomy, Peripheral",
      "Peripheral Neurectomies",
      "Radiofrequency Neurotomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The resection or removal of the nerve to an organ or part.",
    "arabic_definition": "يعبر مصطلح زوال التعصيب عن فقدان الإمداد العصبي، بغض النظر عن السبب. إذا كانت الأعصاب المفقودة نتيجة زوال التعصيب متصلة بمنظومة عصبية مسؤولة عن وظيفة معينة فقد يحدث تراجع أو خسارة في هذه الوظيفة بعد زوال التعصيب. (Denervation)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003714.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "embolectomy",
    "term_en": "Embolectomy",
    "term_ar": "استئصال الصمة",
    "synonyms": [
      "Embolectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of an obstructing clot or foreign material which has been transported from a distant vessel by the bloodstream. Removal of a clot at its original site is called THROMBECTOMY.",
    "arabic_definition": "استئصال الصمة هو الإزالة الجراحية الإسعافية للصمات التي تعيق الدورة الدموية. عادة ما يتضمن ذلك إزالة الخثرات (الجلطات الدموية)، ويشار إليه عندها باسم استئصال الخثرة. (Embolectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017128.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "jejunostomy",
    "term_en": "Jejunostomy",
    "term_ar": "فغر الصائم",
    "synonyms": [
      "Jejunostomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical formation of an opening through the ABDOMINAL WALL into the JEJUNUM, usually for enteral hyperalimentation.",
    "arabic_definition": "فغر الصائم (الإنجليزية: Jejunostomy) هو عملية جراحية لفتح فغرة أو ناسور في الجلد من أمام البطن إلى الصائم (وهو أحد اجزاء الأمعاء الدقيقة. يمكن إجراء العملية بواسطة التنظير الداخلي أو عملية جراحية عامة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007582.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glossectomy",
    "term_en": "Glossectomy",
    "term_ar": "استئصال اللسان",
    "synonyms": [
      "Glossectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Partial or total surgical excision of the tongue. (Dorland, 28th ed)",
    "arabic_definition": "استئصال اللسان أو قطع اللسان أو بتر اللسان (الإنجليزية: Glossectomy) هي إزالة جراحية لكل أو جُزء من اللسان، وتجرى هذه العملية لإيقاف نمو الخباثة مثل سرطان الفم. عادةً يُزال جزء من اللسان فقط، وفي هذه الحالة تتم إزالة جزئية للسان وتُسمى استئصال شق اللسان أو استئصال نصف اللسان (الإنجليزية: hemiglossectomy).",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005927.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "atherectomy",
    "term_en": "Atherectomy",
    "term_ar": "استئصال العصيدة",
    "synonyms": [
      "Atherectomies",
      "Percutaneous Transluminal Atherectomy",
      "Atherectomies, Percutaneous Transluminal",
      "Atherectomy, Percutaneous Transluminal",
      "Percutaneous Transluminal Atherectomies",
      "Transluminal Atherectomies, Percutaneous",
      "Transluminal Atherectomy, Percutaneous",
      "Transluminal Atherectomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endovascular procedure in which atheromatous plaque is excised by a cutting or rotating catheter. It differs from balloon and laser angioplasty procedures which enlarge vessels by dilation but frequently do not remove much plaque. If the plaque is removed by surgical excision under general anesthesia rather than by an endovascular procedure through a catheter, it is called ENDARTERECTOMY.",
    "arabic_definition": "استئصال اللويحة العصيدية أو استئصال العصيدة أو قطع العصيدة (الإنجليزية: Atherectomy) في علم الأشعة التدخلي هي تقنية جراحة طفيفة التوغل لإزالة التصلب العصيدي للأوعية الدموية داخل الجسم. بل هي بديل لرأب الأوعية الدموية لعلاج مرض الشريان المحيطي، ولكن الدراسات الموجودة ليست كافية لتحديد ما إذا كانت متفوقة على القسطرة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017073.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orchiectomy",
    "term_en": "Orchiectomy",
    "term_ar": "استئصال الخصية",
    "synonyms": [
      "Orchiectomies",
      "Orchidectomy",
      "Orchidectomies",
      "Castration, Male",
      "Castrations, Male",
      "Male Castration",
      "Male Castrations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The surgical removal of one or both testicles.",
    "arabic_definition": "اِسْتِئْصَالُ الخُصْيَّةِ أو المَتْنُ هي العملية الجراحية التي تُزَال فيها إحدى الخصيتين أو كلاهما. وفي حالة إزالة كلتا الخصيتين يطلق عليها اسم الإخصاء. (Orchiectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009919.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterostomy",
    "term_en": "Enterostomy",
    "term_ar": "فغر الأمعاء",
    "synonyms": [
      "Enterostomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Creation of an artificial external opening or fistula in the intestines.",
    "arabic_definition": "فَغْر الأمعاء إجراء جراحة لإنشاء فتحة دائمة (تسمى فغرة ) من خلال جدار البطن إلى الأمعاء ( الأمعاء الدقيقة أو الأمعاء الغليظة ). تتم تسمية الأنواع المختلفة من فغر الأمعاء وفقًا لجزء الأمعاء الذي يُفغر. (Enterostomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004766.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "psychosurgery",
    "term_en": "Psychosurgery",
    "term_ar": "جراحة نفسية",
    "synonyms": [
      "Psychosurgeries",
      "Gyrectomy",
      "Gyrectomies",
      "Leukotomy",
      "Leukotomies",
      "Leucotomy",
      "Leucotomies",
      "Lobotomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Treatment of chronic, severe and intractable psychiatric disorders by surgical removal or interruption of certain areas or pathways in the brain, especially in the prefrontal lobes.",
    "arabic_definition": "جراحة نفسية هي عملية جراحية على الدماغ عادة ما يكون هدفها معالجة اختلالات شديدة واضطرابات في الشخصية مثل الشيزوفرينيا والسلوكت القسرية. كما يمكن القيام بهذه العملية في حالات الباركينزون والتورات والايبليبسي (الصرع). (Psychosurgery)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011612.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thyroidectomy",
    "term_en": "Thyroidectomy",
    "term_ar": "استئصال الدرقية",
    "synonyms": [
      "Thyroidectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of the thyroid gland. (Dorland, 28th ed)",
    "arabic_definition": "استئصال الغدة الدرقية هي عملية جراحية تتضمن الاستئصال الجراحي لجميع أجزاء الغدة أو جزء منها. الجراحون غالبا ما يلجئون إلى استئصال الغدة الدرقية عندما يعاني المريض من سرطان الغدة أو بعض حالات للغدة الدرقية (مثل فرط نشاط الغدة الدرقية) أو تضخم الغدة الدرقية. (Thyroidectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013965.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tonsillectomy",
    "term_en": "Tonsillectomy",
    "term_ar": "استئصال اللوزتين",
    "synonyms": [
      "Tonsillectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of a tonsil or tonsils. (Dorland, 28th ed)",
    "arabic_definition": "استئصال اللوزتين (الإنجليزية: tonsillectomy) هي عملية جراحية لإزالة كلتا اللوزتان من التجويف الذي على جانبي البلعوم والذي يُدعي بالحفرة اللوزية. تُجرى العملية في حالات التهاب اللوزتين الحاد المتكرر، انقطاع النفس الانسدادي النومي، انسداد المجرى التنفسي الانفي، الشخير، الخناق وخراج اللوزة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014068.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laryngoscopy",
    "term_en": "Laryngoscopy",
    "term_ar": "تنظير الحنجرة",
    "synonyms": [
      "Laryngoscopies",
      "Laryngoscopic Surgical Procedures",
      "Laryngoscopic Surgical Procedure",
      "Procedure, Laryngoscopic Surgical",
      "Procedures, Laryngoscopic Surgical",
      "Surgical Procedure, Laryngoscopic",
      "Laryngoscopic Surgery",
      "Laryngoscopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Examination, therapy or surgery of the interior of the larynx performed with a specially designed endoscope.",
    "arabic_definition": "يطلق مصطلح تنظير الحنجرة (الإنجليزية: Laryngoscopy) على العملية التي يتم من خلالها فحص تجويف الحنجرة عن طريق إدخال أداة خاصة تسمَّى مِنظارُ الحنجرة عبر فم المريض. يهدف هذا الإجراء الطبي إلى الحصول على نظرة عامة على الحبال الصوتية ومزمار الحنجرة على سبيل المثال.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007828.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phalloplasty",
    "term_en": "Phalloplasty",
    "term_ar": "رأب القضيب",
    "synonyms": [
      "Phalloplasties",
      "Reconstructive Penile Surgery",
      "Penile Surgeries, Reconstructive",
      "Penile Surgery, Reconstructive",
      "Reconstructive Penile Surgeries",
      "Surgeries, Reconstructive Penile",
      "Surgery, Reconstructive Penile",
      "Reconstructive Penis Surgery"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgery to restore, reconstruct, or improve the shape or appearance of a damaged, misshapen, or missing PENIS due to injury, disease, or developmental abnormalities.",
    "arabic_definition": "رأب القضيب هو بناء أو إعادة بناء القضيب، أو التعديل الاصطناعي للقضيب عبر الجراحة. ويُستخدم المصطلح أحيانًا للإشارة إلى عملية تكبير القضيب. (Phalloplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000093562.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenoidectomy",
    "term_en": "Adenoidectomy",
    "term_ar": "استئصال الغدانيات",
    "synonyms": [
      "Adenoidectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision of the adenoids. (Dorland, 28th ed)",
    "arabic_definition": "استئصال الغدانيات أو قطع الغدانيات أو لحمية الأنف أو خزع الناميات الغدانية (الإنجليزية: Adenoidectomy) هو عبارة عن استئصال جراحي للزائدة الأنفية لعدة أسباب منها صعوبة التنفس عن طريق الأنف، والعدوى المزمنة، وألم الأذن المتكرر. إجراء هذه الجراحة يكون أقل شيوعا بين البالغين، لأن الزائدة الأنفية لديهم تعتبر بلا فائدة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000233.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laryngectomy",
    "term_en": "Laryngectomy",
    "term_ar": "استئصال الحنجرة",
    "synonyms": [
      "Laryngectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Total or partial excision of the larynx.",
    "arabic_definition": "استئصال الحنجرة هو إزالة الحنجرة وفصل مجرى الهواء من الأنف والفم والمريء. والشخص المستأصله حنجرته يتنفس من خلال فتحة في الرقبة تسمى ستوما. (Laryngectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007825.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thrombectomy",
    "term_en": "Thrombectomy",
    "term_ar": "استئصال الخثرة",
    "synonyms": [
      "Thrombectomies",
      "Aspiration Thrombectomy",
      "Aspiration Thrombectomies",
      "Thrombectomies, Aspiration",
      "Thrombectomy, Aspiration",
      "Percutaneous Aspiration Thrombectomy",
      "Aspiration Thrombectomies, Percutaneous",
      "Aspiration Thrombectomy, Percutaneous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of an obstructing clot or foreign material from a blood vessel at the point of its formation. Removal of a clot arising from a distant site is called EMBOLECTOMY.",
    "arabic_definition": "استئصال الخثرة (الجلطة الدموية) (الإنجليزية: Thrombectomy) يعرف استئصال الخثرة بطريقة ميكانيكية على أنه الإجراء الذي يتم من خلاله التدخل لإزالة الجلطة الدموية (الخثرة) من الأوعية الدموية، ويُجرى عادة في الشرايين المخية، ويتفرع هذا الإجراء من علم الأشعة العصبي الجراحي.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017131.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sympathectomy",
    "term_en": "Sympathectomy",
    "term_ar": "قطع الودي",
    "synonyms": [
      "Sympathectomies",
      "Denervation, Sympathetic",
      "Denervations, Sympathetic",
      "Sympathetic Denervations",
      "Sympathetic Denervation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The removal or interruption of some part of the sympathetic nervous system for therapeutic or research purposes.",
    "arabic_definition": "قطع الودي (الإنجليزية: Sympathectomy) هي عملية لا يمكن عكسها تزال فيها عقدة ودية واحدة على الأقل. من أمثلتها قطع الودي الصدري بالتنظير.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013562.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radiosurgery",
    "term_en": "Radiosurgery",
    "term_ar": "جراحة إشعاعية",
    "synonyms": [
      "Gamma Knife Radiosurgery",
      "Radiosurgery, Gamma Knife",
      "Gamma Knife Radiosurgeries",
      "Radiosurgery, Linear Accelerator",
      "Linear Accelerator Radiosurgeries",
      "Linear Accelerator Radiosurgery",
      "LINAC Radiosurgery",
      "LINAC Radiosurgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A radiological stereotactic technique developed for cutting or destroying tissue by high doses of radiation in place of surgical incisions. It was originally developed for neurosurgery on structures in the brain and its use gradually spread to radiation surgery on extracranial structures as well. The usual rigid needles or probes of stereotactic surgery are replaced with beams of ionizing radiation directed toward a target so as to achieve local tissue destruction.",
    "arabic_definition": "الجراحة الإشعاعية (الإنجليزية: Radiosurgery) هي تدمير مناطق مُختارة من الأنسجة الحية بدقة عالية بدلًا من القطع بأداة حادة. كبقية أنواع العلاج بالإشعاع، تُستخدم هذه التقنية غالبًا لعلاج السرطان.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016634.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tympanoplasty",
    "term_en": "Tympanoplasty",
    "term_ar": "رقع الطبلة",
    "synonyms": [
      "Tympanoplasties"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical reconstruction of the hearing mechanism of the middle ear, with restoration of the drum membrane to protect the round window from sound pressure, and establishment of ossicular continuity between the tympanic membrane and the oval window. (Dorland, 28th ed.)",
    "arabic_definition": "رقع الطبلة هي عملية جراحية تُجرى لإعادة بناء طبلة الأذن (الغشاء الطبلي) و/أو العظام الصغيرة في الأذن الوسطى (العظيمات). (Tympanoplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014433.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microsurgery",
    "term_en": "Microsurgery",
    "term_ar": "جراحة مجهرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The performance of surgical procedures with the aid of a microscope.",
    "arabic_definition": "الجراحة المجهرية أو الجراحة الميكروسكوبية هي فرع حديث من فروع الجراحة ظهر في النصف الثاني من القرن العشرين وذلك عندما سمح التطور التقني بتطوير الميكروسكوب الجراحي والآلات والخيوط الجراحية بالغة الصغر. ومع تطور مجال الجراحة الميكروسكوبية صار من الممكن إجراء عمليات إعادة توصيل أو زراعة أو نقل أنسجة أو أجزاء كاملة من الأطراف. (Microsurgery)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008866.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhytidoplasty",
    "term_en": "Rhytidoplasty",
    "term_ar": "شد الوجه",
    "synonyms": [
      "Rhytidoplasties",
      "Face Lift",
      "Face Lifts",
      "Lift, Face",
      "Lifts, Face",
      "Facelift",
      "Facelifts",
      "Rhytidectomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Plastic surgery performed, usually by excision of skin, for the elimination of wrinkles from the skin.",
    "arabic_definition": "شد الوجه، واسمه التقني استئصال التجاعيد، نوع من إجراءات الجراحة التجميلية المستخدمة لإعطاء الوجه مظهر أكثر شبابًا. توجد تقنيات جراحية متعددة وتمارين خاصة لتحقيق ذلك. (Rhytidoplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015361.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hysteroscopy",
    "term_en": "Hysteroscopy",
    "term_ar": "تنظير الرحم",
    "synonyms": [
      "Hysteroscopies",
      "Endoscopy, Uterine",
      "Endoscopies, Uterine",
      "Uterine Endoscopies",
      "Uterine Endoscopy",
      "Uteroscopy",
      "Uteroscopies",
      "Hysteroscopic Surgical Procedures"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the interior of the uterus.",
    "arabic_definition": "تنظير الرحم أو منظار الرحم (الإنجليزية: Hysteroscopy) هو استخدام المناظير الطبية في بعض الأغراض التشخيصية الخاصة بالرحم وذلك عن طريق إدخال المنظار الطبي من المهبل وصولًا إلى الرحم، ويحتوي منظار الرحم على عدسات مثل التلسكوب أو المجهر. هذه العدسات تتيح للطبيب فحص السطح الداخلي للمهبل والرحم.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015907.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salpingectomy",
    "term_en": "Salpingectomy",
    "term_ar": "استئصال قناة فالوب",
    "synonyms": [
      "Salpingectomies",
      "Tubectomy",
      "Tubectomies",
      "Tubal Excision",
      "Tubal Excisions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision of one or both of the FALLOPIAN TUBES.",
    "arabic_definition": "استئصال قناة فالوب أو استئصال البوق (بالإنجليزية: Salpingectomy) هو إجراء يشير إلى إزالة جراحية لأنبوب فالوب. وأحيانا يُفضل هذا الإجراء الآن على نظرائه من الجراحات التي تهدف إلى الحفاظ على الأنبوب؛ وذلك بسبب خطر الحمل المنتبذ.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058994.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "foraminotomy",
    "term_en": "Foraminotomy",
    "term_ar": "بضع الثقبة",
    "synonyms": [
      "Foraminotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical enlargement of the intervertebral foramina to relieve NERVE ROOT COMPRESSION.",
    "arabic_definition": "بضع الثقبة عبارة عن عملية تعمل على تخفيف الضغط الواقع على الأعصاب المضغوطة بواسطة الثقبة الفقرية والممرات عن طريق عظام الشوكة الفقرية والتي تمر بالحزم العصبية إلى الجذع من النخاع الشوكي. يتم إجراء عملية بضع الثقبة للتخفيف من أعراض ضغط الجذور العصبية في الحالات التي تكون فيها الثقبة مضغوطة بواسطة العظم أو الديسك أو النسيج الندبي أو الرباط المفرط النمائي والنتائج في العصب المصاب. (Foraminotomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059526.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ureteroscopy",
    "term_en": "Ureteroscopy",
    "term_ar": "تنظير الحالب",
    "synonyms": [
      "Ureteroscopies",
      "Surgical Procedures, Ureteroscopic",
      "Procedures, Ureteroscopic Surgical",
      "Procedure, Ureteroscopic Surgical",
      "Surgical Procedure, Ureteroscopic",
      "Ureteroscopic Surgical Procedure",
      "Surgery, Ureteroscopic",
      "Surgeries, Ureteroscopic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the ureter.",
    "arabic_definition": "تنظير الحالب هو فحص المسالك البولية العلوية، وعادة ما يتم إجراؤه باستخدام منظار الحالب الذي يمر عبر مجرى البول والمثانة، ثم مباشرة إلى الحالب. الإجراء مفيد في تشخيص وعلاج الاضطرابات مثل حصوات الكلى وسرطانة الخلايا الظهارية في المسالك البولية العلوية. (Ureteroscopy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018666.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prostatectomy",
    "term_en": "Prostatectomy",
    "term_ar": "استئصال البروستات",
    "synonyms": [
      "Prostatectomies",
      "Prostatectomy, Retropubic",
      "Prostatectomies, Retropubic",
      "Retropubic Prostatectomies",
      "Retropubic Prostatectomy",
      "Prostatectomy, Suprapubic",
      "Prostatectomies, Suprapubic",
      "Suprapubic Prostatectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Complete or partial surgical removal of the prostate. Three primary approaches are commonly employed: suprapubic - removal through an incision above the pubis and through the urinary bladder; retropubic - as for suprapubic but without entering the urinary bladder; and transurethral (TRANSURETHRAL RESECTION OF PROSTATE).",
    "arabic_definition": "استئصال البروستات، هو مصطلح طبي يشير إلى عمل جراحي يتمُّ من خلاله استئصال جزء من غدة البروستات أو كاملها، تُجرى هذه العمليَّة في سياق حالات مَرضيَّة متنوعة مثل ضخامة البروستات الحميدة التي تُسبِّب انسداداً بوليَّاً أو حتى لأسباب خبيثة كسرطان البروستات وسرطانات الأعضاء الأخرى في الحوض. هناك نوعان رئيسيَّان من عمليَّات استئصال البروستات: استئصال البروستات البسيط والذي يتمُّ فيه استئصال جزء من غدة البروستات ويجرى فقط في أمراض البروستات السليمة. (Prostatectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011468.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pneumonectomy",
    "term_en": "Pneumonectomy",
    "term_ar": "استئصال الرئة",
    "synonyms": [
      "Pneumonectomies",
      "Lung Volume Reduction",
      "Reduction, Lung Volume",
      "Volume Reduction, Lung",
      "Lung Volume Reduction Surgery",
      "Partial Pneumonectomy",
      "Partial Pneumonectomies",
      "Pneumonectomy, Partial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The excision of lung tissue including partial or total lung lobectomy.",
    "arabic_definition": "اسْتِئْصالُ الرِّئَة (الإنجليزية: Pneumonectomy)، هي عملية جراحية تُجرى لإزالة الرئة. يشار إلى إزالة الفص واحد فقط من الرئة على وجه التحديد باسم استئصال الفص، وإلى إزالة جزء من الرئة بالـالقطع الإسفيني .",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011013.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "esophagectomy",
    "term_en": "Esophagectomy",
    "term_ar": "استئصال المريء",
    "synonyms": [
      "Esophagectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision of part (partial) or all (total) of the esophagus. (Dorland, 28th ed)",
    "arabic_definition": "استئصال المريء هو استئصال جراحي لجميع أو جزء من المريء. (Esophagectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016629.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adrenalectomy",
    "term_en": "Adrenalectomy",
    "term_ar": "استئصال الكظرية",
    "synonyms": [
      "Adrenalectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision of one or both adrenal glands. (From Dorland, 28th ed)",
    "arabic_definition": "استئصال الغدة الكظرية هي عملية جراحية تتضمن الاستئصال الجراحي لواحد أو كلاهما (استئصال الغدة الكظرية الثنائية). ينصح عادة المرضى الذين يعانون من أورام الغدد الكظرية بإجراء الاستئصال. (Adrenalectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000315.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photopheresis",
    "term_en": "Photopheresis",
    "term_ar": "فصادة ضوئية",
    "synonyms": [
      "Extracorporeal Photochemotherapy",
      "Extracorporeal Photochemotherapies",
      "Photochemotherapies, Extracorporeal",
      "Photochemotherapy, Extracorporeal",
      "Extracorporeal Photopheresis",
      "Photopheresis, Extracorporeal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A process in which peripheral blood is exposed in an extracorporeal flow system to photoactivated 8-methoxypsoralen (METHOXSALEN) and ultraviolet light - a procedure known as PUVA THERAPY. Photopheresis is at present a standard therapy for advanced cutaneous T-cell lymphoma; it shows promise in the treatment of autoimmune diseases.",
    "arabic_definition": "في الطب، يشير مصطلح الفصادة الضوئية أو الفصادة الضوئية خارج الجسم إلى أحد أشكال الفصادة والمعالجة الضوئية الديناميكية والتي يُعالج فيها الدم بالأدوية النشطة الضوئية التي يتم تنشيطها بعد ذلك بـ الأشعة فوق البنفسجية. في الوقت الحالي، تعد الفصادة الضوئية علاجًا معتمدًا من إدارة الأغذية والأدوية الأمريكية (FDA) للمفومة الخلايا التائية الجلدية. (Photopheresis)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017893.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thoracoscopy",
    "term_en": "Thoracoscopy",
    "term_ar": "تنظير الصدر",
    "synonyms": [
      "Thoracoscopies",
      "Endoscopy, Pleural",
      "Endoscopies, Pleural",
      "Pleural Endoscopies",
      "Pleural Endoscopy",
      "Pleuroscopy",
      "Pleuroscopies",
      "Surgical Procedures, Thoracoscopic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the pleural cavity.",
    "arabic_definition": "تنظير الصدر (بالإنجليزية: Thoracoscopy) هو إجراء طبي يشمل الفحص الداخلي، أخد عينات و/أو استئصال المرض أو الكتل داخل التجويف الجنبي وتجويف الصدر. يمكن تنفيذ تنظير الصدر إما تحت التخدير العام أو تحت مخدر موضعي.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013906.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "replantation",
    "term_en": "Replantation",
    "term_ar": "إعادة الزرع",
    "synonyms": [
      "Replantations",
      "Reimplantation",
      "Reimplantations",
      "Replantation, Surgical",
      "Replantations, Surgical",
      "Surgical Replantations",
      "Surgical Replantation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Restoration of an organ or other structure to its original site.",
    "arabic_definition": "تم تعريف إعادة الزرع أو تجديد الغرس من قبل الجمعية الأمريكية لجراحة اليد بأنه إعادة اتصال جزء من أجزاء الجسم عن طريق الجراحة، وأغلب هذه الجراحات تكون للأصابع أو اليد أو الزراع، الذي قد تم قطعه بالكامل من جسم الإنسان\". وتم تنفيذ عملية جراحية لزراعة الأجزاء المبتورة من الجسم للأصابع واليدين والساعدين والزراعين وأصابع القدم والرجلين والأذنين والإصابات القلعية لفروة الرأس والوجه والشفاه والقضيب واللسان. (Replantation)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012092.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "symphysiotomy",
    "term_en": "Symphysiotomy",
    "term_ar": "بضع الارتفاق",
    "synonyms": [
      "Symphysiotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical procedure to widen a woman's pelvis during childbirth.",
    "arabic_definition": "بضع الارتفاق هو إجراء جراحي قديم لم يعد يُستخدم واشتمل سابقًا على بضع الارتفاق العاني لتوسيع جوف الحوض وإتمام الولادة الطبيعية في حال وجود خلل ميكانيكي. كان يسمى أيضًا باسم قطع عظام الحوض أو بَضْعُ الالْتِحامِ الغُضْروفِيّ. (Symphysiotomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013567.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laminoplasty",
    "term_en": "Laminoplasty",
    "term_ar": "جراحة التضيق القطني",
    "synonyms": [
      "Laminoplasties",
      "Laminaplasty",
      "Laminaplasties"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A surgical procedure performed on selected pairs of vertebral lamina to relieve pressure on the SPINAL CORD and which also allows for osteoplastic enlargement of the SPINAL CANAL.",
    "arabic_definition": "جراحة التضيق القطني هو إجراء عملية جراحية في العظام وذلك لعلاج تضيق العمود الفقري من خلال تخفيف الضغط على الحبل الشوكي. ويتضمن هذا الإجراء قطع الصفيحة على جانبي الفقرات المصابة ويكون القطع من جانب واحد فقط وقطع الأخدود من جانب آخر، ثم يفتح العظام الرفرفي المتحررالمتأرجح وبالتالي يخف الضغط على الحبل الشوكي. (Laminoplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065406.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thoracostomy",
    "term_en": "Thoracostomy",
    "term_ar": "فغر الصدر",
    "synonyms": [
      "Thoracostomies",
      "Needle Thoracostomy",
      "Needle Thoracostomies",
      "Thoracostomies, Needle",
      "Thoracostomy, Needle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical procedure involving the creation of an opening (stoma) into the chest cavity for drainage; used in the treatment of PLEURAL EFFUSION; PNEUMOTHORAX; HEMOTHORAX; and EMPYEMA.",
    "arabic_definition": "فغر الصدر (الإنجليزية: Thoracostomy) هو إنشاء جرح أو ثقب في جدار الصدر والحفاظ عليه مفتوحا لغرض النزح. تستخدم هذه الطريقة لعلاج استرواح الصدر ويجريها الجراحون أو أطباء الطوارئ بواسطة أبرة أو أنبوب.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013907.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pinealectomy",
    "term_en": "Pinealectomy",
    "term_ar": "استئصال الصنوبرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of the PINEAL GLAND including resection of pineal tumor (PINEALOMA) and CYSTS.",
    "arabic_definition": "استئصال الغدة الصنوبرية هو إجراء جراحي يتم فيه إزالة الغدة الصنوبرية. يتم تنفيذه فقط في حالات نادرة، حيث يصبح ورم الخلايا الصنوبرية أو كيس الغدة الصنوبرية مهددًا للحياة. (Pinealectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000076822.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroendoscopy",
    "term_en": "Neuroendoscopy",
    "term_ar": "جراحة الأعصاب",
    "synonyms": [
      "Neuroendoscopies",
      "Neurosurgery"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "PROCEDURES that use NEUROENDOSCOPES for disease diagnosis and treatment. Neuroendoscopy, generally an integration of the neuroendoscope with a computer-assisted NEURONAVIGATION system, provides guidance in NEUROSURGICAL PROCEDURES.",
    "arabic_definition": "جراحة الأعصاب أو الجراحة العصبية (الإنجليزية: neurosurgery) هو تخصص دقيق من تخصصات الطب. ويُعنى بأمراض الجهاز العصبي المركزي والجهاز العصبي المحيطي وعلاجها بالتدخل الجراحي ويسمى المتخصص بهذا التخصص جراح مخ وأعصاب. (Neuroendoscopy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044583.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemorrhoidectomy",
    "term_en": "Hemorrhoidectomy",
    "term_ar": "بواسير",
    "synonyms": [
      "Hemorrhoidectomies",
      "Hemorrhoid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The surgical removal of HEMORRHOIDS.",
    "arabic_definition": "البَوَاسِير (الإنجليزية: Hemorrhoids) هي أوعية دموية مُنتفخة في القَناةُ الشَّرجِيَّة، والتي في حالتها الطبيعية تُساعد على التحكم في البراز. وتصبح مرضية عندما تتضخم أو تلتهب. (Hemorrhoidectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D061865.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "abdominoplasty",
    "term_en": "Abdominoplasty",
    "term_ar": "شد البطن",
    "synonyms": [
      "Abdominoplasties",
      "Panniculectomy",
      "Panniculectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of excess abdominal skin and fat and tightening of the ABDOMINAL WALL. Abdominoplasty may include LIPECTOMY of INTRA-ABDOMINAL FAT, tightening of the ABDOMINAL MUSCLES, and re-creation of the UMBILICUS.",
    "arabic_definition": "عملية شد البطن أو شد ترهلات البطن هي عملية جراحية تجميلية تعتمد على إزالة الفائض من الدهون و الجلد من منتصف و أسفل منطقة البطن بغرض شد عضلات ولفافة الجدار البطني و إزالة ترهلات الجلد. عادة ما يقوم بهذه العملية المرضى ذوي البطن المترهل أو الرخو بعد الولادة أو النقص الكبير للوزن. (Abdominoplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D061645.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ultrafiltration",
    "term_en": "Ultrafiltration",
    "term_ar": "ترشيح مستدق",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The separation of particles from a suspension by passage through a filter with very fine pores. In ultrafiltration the separation is accomplished by convective transport; in DIALYSIS separation relies instead upon differential diffusion. Ultrafiltration occurs naturally and is a laboratory procedure. Artificial ultrafiltration of the blood is referred to as HEMOFILTRATION or HEMODIAFILTRATION (if combined with HEMODIALYSIS).",
    "arabic_definition": "الترشيح المستدق (1) هي طريقة ترشيح فائق متعلقة بتقنية الأغشية، فهي تعمل على فصل الجزيئات الكبيرة والحبيبات الصغيرة من سائل، كما يمكنها تركيز نوع من تلك الحبيبات. كان الكيميائي الألماني«هانريش بيشهولد» أول من استخدم تعبير الترشيح المستدق في عام 1907. (Ultrafiltration)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014462.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cholecystectomy",
    "term_en": "Cholecystectomy",
    "term_ar": "استئصال المرارة",
    "synonyms": [
      "Cholecystectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of the GALLBLADDER.",
    "arabic_definition": "اسْتِئْصَالُ المَرَارةِ هو الاستئصال الجراحي للمرارة وهو علاج شائع لأعراض حصى المرارة وحالات المرارة الأخرى. والخيار الجراحي الأمثل هو استئصال المرارة بالمنظار، وفي كبار السن، استئصال المرارة الجراحي المفتوح. (Cholecystectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002763.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phacoemulsification",
    "term_en": "Phacoemulsification",
    "term_ar": "جهاز الفاكو",
    "synonyms": [
      "Phacoemulsifications"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A procedure for removal of the crystalline lens in cataract surgery in which an anterior capsulectomy is performed by means of a needle inserted through a small incision at the temporal limbus, allowing the lens contents to fall through the dilated pupil into the anterior chamber where they are broken up by the use of ultrasound and aspirated out of the eye through the incision. (Cline, et al., Dictionary of Visual Science, 4th ed &amp; In Focus 1993;1(1):1)",
    "arabic_definition": "جهاز الفاكو : هو جهاز يستخدم الموجات فوق الصوتية و تجتاح الحرارة التي تولدها هذه الموجات في الجهاز داخل العين إلى تبريد مستمر تجنبا لحدوث الحروق في القرنية حول الجرح ويستخدم هذا الجهاز في معالجة مرضى الساد. (Phacoemulsification)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018918.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fundoplication",
    "term_en": "Fundoplication",
    "term_ar": "تثنية القاع لنيسين",
    "synonyms": [
      "Nissen Operation",
      "Operation, Nissen",
      "Nissen fundoplication"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Mobilization of the lower end of the esophagus and plication of the fundus of the stomach around it (fundic wrapping) in the treatment of GASTROESOPHAGEAL REFLUX that may be associated with various disorders, such as hiatal hernia. (From Dorland, 28th ed)",
    "arabic_definition": "تثنية القاع لنيسين (الإنجليزية: Nissen fundoplication) وتعرف أيضًا باسم تثنية القاع لنيسين بالتنظير البطني، وهي عملية جراحية تهدف إلى علاج الارتجاع المريئي في حالة فشل العلاج الدوائي، وتعد خط العلاج الأول في حالات الفتق الحجابي مجاور المريء.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018662.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plasmapheresis",
    "term_en": "Plasmapheresis",
    "term_ar": "استخراج البلازما",
    "synonyms": [
      "Plasmaphereses",
      "Therapeutic Plasmapheresis",
      "Plasmapheresis, Therapeutic",
      "Therapeutic Plasmaphereses",
      "Double Filtration Plasmapheresis",
      "Double Filtration Plasmaphereses",
      "Filtration Plasmapheresis, Double",
      "Plasmapheresis, Double Filtration"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Procedure whereby plasma is separated and extracted from anticoagulated whole blood and the red cells retransfused to the donor. Plasmapheresis is also employed for therapeutic use.",
    "arabic_definition": "استخراج البلازما أو فصادة البلازما (الإنجليزية: Plasmapheresis) هو تحويل مكونات البلازما خارج الجسم وذلك لعلاج بعض الأمراض وهذا عن طريق تبرع بالدم باستخراج البلازما فقط وترك خلايا الدم الحمراء والصفيحات.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010956.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parathyroidectomy",
    "term_en": "Parathyroidectomy",
    "term_ar": "استئصال الدريقات",
    "synonyms": [
      "Parathyroidectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision of one or more of the parathyroid glands.",
    "arabic_definition": "يشمل الاستئصال الجراحي للدريقات (الإنجليزية: Parathyroidectomy) واحدة أو أكثر من الغدد الدريقية الأربع (عادة)، وتُجرى هذه العملية لاستئصال ورم غدي أو فرط تنسج أصاب هذه الغدد وأدى لإفرازها كميات مفرطة من الهرمون جار الدريقي (باراثورمون)، وهو ما يُعرف بفرط الدريقات. عادةً تكون الغدد الدريقية أربعًا، وتتوضع بالقرب من السطح الخلفي للغدة الدرقية، ولكن موقعها الدقيق متغير.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016105.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemiarthroplasty",
    "term_en": "Hemiarthroplasty",
    "term_ar": "استبدال مفصل الورك",
    "synonyms": [
      "Hemiarthroplasties",
      "Hemi-Arthroplasty",
      "Hemi-Arthroplasties",
      "Hip replacement"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A partial joint replacement in which only one surface of the joint is replaced with a PROSTHESIS.",
    "arabic_definition": "استبدال مفصل الورك هي عملية جراحية يُستبدل خلالها الورك الطبيعي بجهاز مفصلي اصطناعي للسماح للمريض بالمشي وأداء مهماته بشكل طبيعي تقريبا. يمكن أن تجرى عملية استبدال مفصل الورك بشكل نصفي أو كلي. (Hemiarthroplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062785.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemispherectomy",
    "term_en": "Hemispherectomy",
    "term_ar": "استئصال نصف الكرة المخية",
    "synonyms": [
      "Total Hemispherectomy",
      "Hemispherectomy, Total",
      "Partial Hemispherectomy",
      "Hemispherectomy, Partial",
      "Functional Hemispherectomy",
      "Hemispherectomy, Functional"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neurosurgical procedure that removes or disconnects the epileptogenic CEREBRAL CORTEX of a hemisphere. Hemispherectomy is usually performed for patients with intractable unilateral EPILEPSY due to malformations of cortical development or brain lesions. Depending on the epileptogenic area in the hemisphere, cortical removal can be total or partial.",
    "arabic_definition": "استئصال نصف الكرة المخية هو إجراء جراحي عصبي نادر للغاية هادف إلى استئصال نصف الكرة المخية (نصف الدماغ العلوي، أو المخ)، أو فصله أو تعطيله. يُستخدم هذا الإجراء في علاج مجموعة متنوعة من اضطرابات النوبات التي يتوضع فيها مصدر الصرع في منطقة واسعة من أحد نصفي الكرة المخية للدماغ، مثل التهاب راسموسن الدماغي على وجه الخصوص. (Hemispherectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D038421.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemipelvectomy",
    "term_en": "Hemipelvectomy",
    "term_ar": "استئصال حوضي نصفي",
    "synonyms": [
      "Hemipelvectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "AMPUTATION, SURGICAL of a lower limb through the sacroiliac joint.",
    "arabic_definition": "الاستئصال الحوضي النصفيّ أو البتر الحوضي الشِقّي (الإنجليزية: hemipelvectomy) هو عملية «بتر» جراحي يتم عند مستوىً مرتفعٍ من الحوض، أو عملية بتر أحد الطرفين السفليين من الحوض. جراحات الإستئصال الحوضي النصفيّ وخلع مفصل الورك (الإنجليزية: hip disarticulation) هي من أندر جراحات بتر الأطراف السفلية.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006428.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nephroureterectomy",
    "term_en": "Nephroureterectomy",
    "term_ar": "استئصال الكلية",
    "synonyms": [
      "Nephroureterectomies",
      "Ureteronephrectomy",
      "Ureteronephrectomies",
      "Nephro-ureterectomy",
      "Nephro-ureterectomies",
      "Heminephroureterectomy",
      "Heminephroureterectomies",
      "Nephrectomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of a kidney and adjoining ureter.",
    "arabic_definition": "استئصال الكلية (الإنجليزية: Nephrectomy) هو عبارة عن استئصال جراحي للكلية، انظر بالأسفل استئصال الكلى الجزئي. (Nephroureterectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074682.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pancreatectomy",
    "term_en": "Pancreatectomy",
    "term_ar": "استئصال البنكرياس",
    "synonyms": [
      "Pancreatectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of the pancreas. (Dorland, 28th ed)",
    "arabic_definition": "استئصال البنكرياس (الإنجليزية: pancreatectomy) هو مصطلح في المجال الطبي، وهو عبارة عن عملية جراحية لإزالة واستئصال جزء أو جميع البنكرياس، توجد عدة أنواع من استئصال البنكرياس، بما في ذلك استئصال البنكرياس والاثنا عشر (إجراء ويبل)، واستئصال البنكرياس البعيد، واستئصال البنكرياس الجزئي، واستئصال البنكرياس الكلي، تستخدم هذه الإجراءات في إدارة العديد من الحالات التي تنطوي على البنكرياس، مثل أورام البنكرياس الحميدة وسرطان البنكرياس والتهاب البنكرياس.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010180.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "herniorrhaphy",
    "term_en": "Herniorrhaphy",
    "term_ar": "إصلاح الفتق",
    "synonyms": [
      "Herniorrhaphies",
      "Hernia Repair",
      "Hernia Repairs",
      "Repair, Hernia",
      "Repairs, Hernia",
      "Hernioplasty",
      "Hernioplasties"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical procedures undertaken to repair abnormal openings through which tissue or parts of organs can protrude or are already protruding.",
    "arabic_definition": "الفتق هو بروز عضو أو غطاء العضو من خلال جدار التجويف الذي عادة ما يحتويه. والفتق الفجوي يحدث عندما تبرز المعدة في التجويف الصدري من خلال فتحة المريء الموجودة في الحجاب الحاجز. (Herniorrhaphy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059685.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blepharoplasty",
    "term_en": "Blepharoplasty",
    "term_ar": "رأب الجفن",
    "synonyms": [
      "Blepharoplasties"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Plastic surgery of the eyelid. (Cline et al., Dictionary of Visual Science, 4th ed)",
    "arabic_definition": "رأب الجفن أو عملية تجميل الجفن هي عملية جراحية تجميلية لتصحيح عيوب وتشوهات الجفون، ولتحسين مظهر منطقة العين في الوجه. من خلال استئصال وإزالة، أو إعادة تموضع (أو كليهما) الأنسجة الزائدة، مثل الجلد والدهون، وتقوية أنسجة العضلات والأوتار المقابلة، تُعالج عملية تجميل الجفون المشكلات الوظيفية والتجميلية لمنطقة ما حول العين، وهي المنطقة الممتدة من الحاجب إلى الجزء العلوي من الخد. (Blepharoplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019882.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemofiltration",
    "term_en": "Hemofiltration",
    "term_ar": "ترشيح الدم",
    "synonyms": [
      "Hemofiltrations",
      "Arteriovenous Hemofiltration",
      "Arteriovenous Hemofiltrations",
      "Hemofiltration, Arteriovenous",
      "Venovenous Hemofiltration",
      "Hemofiltration, Venovenous",
      "Venovenous Hemofiltrations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Extracorporeal ULTRAFILTRATION technique without HEMODIALYSIS for treatment of fluid overload and electrolyte disturbances affecting renal, cardiac, or pulmonary function.",
    "arabic_definition": "في الطب، ترشيح الدم (haemofiltration)، هو أحد علاجات البدائل الكلوية مماثلة لغسيل الكلى والذي يستخدم بشكل حصري تقريبا في العناية المركزة. وبالتالي، يتم استخدامه دائما تقريبا في القصور الكلوي الحاد. (Hemofiltration)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006440.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mediastinoscopy",
    "term_en": "Mediastinoscopy",
    "term_ar": "تنظير المنصف",
    "synonyms": [
      "Mediastinoscopies",
      "Mediastinoscopic Surgical Procedures",
      "Mediastinoscopic Surgical Procedure",
      "Procedure, Mediastinoscopic Surgical",
      "Procedures, Mediastinoscopic Surgical",
      "Surgical Procedure, Mediastinoscopic",
      "Mediastinoscopic Surgery",
      "Mediastinoscopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the anterior superior mediastinum of the thorax.",
    "arabic_definition": "عنصر قائمة مرقمة تنظير المنصف(الإنجليزية: Mediastinoscopy) عبارة عن إجراء يتيح إظهار محتويات المنصف عادةً بغرض الحصول على خزعة. وغالبًا ما يُستخدَم هذا التنظير في تصنيف العقد الليمفاوية في سرطان الرئة، أو في تشخيص الحالات التي تؤثر على بنية المنصف مثل الساركويد أو لمفومة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008481.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electrosurgery",
    "term_en": "Electrosurgery",
    "term_ar": "جراحة كهربائية",
    "synonyms": [
      "Electrosurgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Division of tissues by a high-frequency current applied locally with a metal instrument or needle. (Stedman, 25th ed)",
    "arabic_definition": "الجراحة الكهربائية (الإنجليزية: Electrosurgery) هي وضع تيار كهربائي عالي التردد ومتناوب القطبية على نسيج حي لأغراض القطع والتخثير والتجفيف وتدمير النسيج. تتضمن فوائدها قدرة الجراح على قطع النسيج بتحديد دقيق مع تقليل خسارة الدم قدر الإمكان.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004598.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chemexfoliation",
    "term_en": "Chemexfoliation",
    "term_ar": "تقشير (تجميل)",
    "synonyms": [
      "Chemexfoliations",
      "Face Peeling, Chemical",
      "Chemical Face Peeling",
      "Exfoliation (cosmetology)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Application of a cauterant to the skin for the purpose of causing a superficial destruction of the epidermis and upper layers of the dermis. After healing, the treated area has new epithelium.",
    "arabic_definition": "يتضمن التقشير إزالة أقدم خلايا الجلد الميتة من سطح الجلد. تأتي الكلمة من الكلمة اللاتينية exfoliare (تجريد الأوراق). (Chemexfoliation)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002615.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ganglionectomy",
    "term_en": "Ganglionectomy",
    "term_ar": "استئصال العقدة",
    "synonyms": [
      "Ganglionectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Removal of an autonomic or sensory ganglion by any means.",
    "arabic_definition": "استئصال العقدة هو عملية إزالة العقد جراحياً. تتطلب عملية إزالة الكيسات العقدية استئصال العقد. (Ganglionectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015171.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pericardiectomy",
    "term_en": "Pericardiectomy",
    "term_ar": "استئصال التامور",
    "synonyms": [
      "Pericardiectomies",
      "Pericardectomy",
      "Pericardectomies",
      "Pericardiotomy",
      "Pericardiotomies",
      "Pericardotomy",
      "Pericardotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical excision (total or partial) of a portion of the pericardium. Pericardiotomy refers to incision of the pericardium.",
    "arabic_definition": "استئصال التامور (الإنجليزية: Pericardiectomy) هو الإزالة الجراحية لقسم من التامور أو أغلبه. تُستخدم هذه العملية عادةً لعلاج التهاب التامور المضيق أو إزالة التامور المتكلس والمتليف، وقد تُجرى أيضًا في الحالات الشديدة أو الناكسة من انصباب التامور.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010492.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trabeculectomy",
    "term_en": "Trabeculectomy",
    "term_ar": "قطع التربيق",
    "synonyms": [
      "Trabeculectomies",
      "Trabeculoplasty",
      "Trabeculoplasties",
      "Goniotomy",
      "Goniotomies",
      "Trabeculotomy",
      "Trabeculotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any surgical procedure for treatment of glaucoma by means of puncture or reshaping of the trabecular meshwork. It includes goniotomy, trabeculectomy, and laser perforation.",
    "arabic_definition": "قطع التربيق (الإنجليزية: Trabeculectomy)، هو إجراء جراحي يُستخدم في علاج الزرق «الماء الأزرق» من أجل تخفيف الضغط داخل العين، وذلك عن طريق إزالة جزء من شبكة التربيق في العين والبنى المجاورة لها. يُعد أكثر عمليات الزرق شيوعًا، التي تسمح بتصريف الخلط المائي من داخل العين إلى أسفل الملتحمة حيث يُمتص.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014130.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypophysectomy",
    "term_en": "Hypophysectomy",
    "term_ar": "استئصال النخامية",
    "synonyms": [
      "Hypophysectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal or destruction of the hypophysis, or pituitary gland. (Dorland, 28th ed)",
    "arabic_definition": "اسْتِئْصالُ النُّخَامِيَّة (الإنجليزية: Hypophysectomy)، هي عملية جراحية لإزالة الغدة النخامية، يتم إجراؤها بشكل شائع لعلاج الأورام؛ خاصةً الأورام القحفية البلعومية. في بعض الأحيان يتم اجراؤها لعلاج متلازمة كوشينغ والتي تحدث بسبب ورم حميد في الغدة النخامية.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007016.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epikeratophakia",
    "term_en": "Epikeratophakia",
    "term_ar": "رأب القرنية الظهاري",
    "synonyms": [
      "Epikeratophakias",
      "Epikeratoplasty",
      "Epikeratoplasties"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A procedure that modifies REFRACTIVE ERRORS by the transplantation of a donor CORNEA to the anterior surface of the patient's cornea.",
    "arabic_definition": "رأب فوق القرنية المصحح للتحدب أو جراحة زرع القرنية الظهارية أو رأب القرنية الظهاري أو رأب القرنية الصفائحي هي إجراء جراحي تصحيحي تزرع فيه صفيحة من قرنية متبرع على السطح الأمامي لقرنية المريض. توضع صفيحة من قرنية المتبرع فوق قرنية المريض بعد إزالة الظهارة منها، وتُخاط في أخدود مُجهز على قرنية المريض. (Epikeratophakia)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017391.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ventriculostomy",
    "term_en": "Ventriculostomy",
    "term_ar": "فغر البطين",
    "synonyms": [
      "Ventriculostomies",
      "Ventriculocisternostomy",
      "Ventriculocisternostomies",
      "Endoscopic Third Ventriculostomy",
      "Endoscopic Third Ventriculostomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical creation of an opening in a cerebral ventricle.",
    "arabic_definition": "فَغْرُ البُطَين (الإنجليزية: ventriculostomy) إجراءٌ جراحيٌّ عصبيٌّ شائعٌ، يتضمَّن إدخال قِثطار في أحد بطينات الدماغ. يُستخدم لتصريف السَّائل الدِّماغيُّ النُّخاعيّ الزائد، ويُعالج مَوَه الدماغ وزيادة الضغط على الدماغ الناتجة عن إصابة رضحِيَّة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014696.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trachelectomy",
    "term_en": "Trachelectomy",
    "term_ar": "قطع عنق الرحم",
    "synonyms": [
      "Trachelectomies",
      "Cervicectomy",
      "Cervicectomies",
      "Vaginal Cervicectomy",
      "Cervicectomies, Vaginal",
      "Cervicectomy, Vaginal",
      "Vaginal Cervicectomies",
      "Vaginal Trachelectomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal or resection of the CERVIX UTERI.",
    "arabic_definition": "قَطْعُ عُنُقِ الرَّحِم (بالإنجليزية:trachelectomy) أو استئصال عنق الرحم Cervicectomy هي عملية جراحية يتم فيها ازالة عنق الرحم. تعتبر هذه العملية البديل الجراحي لاستئصال الرحم الجذري للمحافظة على الخصوبة، حيث يتم المحافظة على جسم الرحم.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069339.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mastoidectomy",
    "term_en": "Mastoidectomy",
    "term_ar": "استئصال النتوء الحلمي",
    "synonyms": [
      "Mastoidectomies",
      "Modified Radical Mastoidectomy",
      "Mastoidectomies, Modified Radical",
      "Mastoidectomy, Modified Radical",
      "Modified Radical Mastoidectomies",
      "Radical Mastoidectomies, Modified",
      "Radical Mastoidectomy, Modified",
      "Radical Mastoidectomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of the diseased cells from the MASTOID PROCESS. It often involves simultaneous resection and/or repair of the MIDDLE EAR and EAR DRUM in MIDDLE EAR CHOLESTEATOMAS and MASTOIDITIS.",
    "arabic_definition": "استئصال النتوء الحلمي أو استئصال الخشاء أو قطع الخشاء هو عبارة عن عملية جراحية يتم إجراؤها لإزالة خلايا الخشاء. (Mastoidectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074406.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyloromyotomy",
    "term_en": "Pyloromyotomy",
    "term_ar": "بضع عضل البواب",
    "synonyms": [
      "Pyloromyotomies",
      "Ramstedt Operation",
      "Fredet-Ramstedt Operation",
      "Gastric Peroral Endoscopic Pyloromyotomy",
      "G-POEM",
      "POEM Procedure",
      "POEM Procedures",
      "Gastric Per-oral Endoscopic Pyloromyotomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical incision of the PYLORUS used to treat pyloric stenoses (e.g. INFANTILE HYPERTROPHIC PYLORIC STENOSIS).",
    "arabic_definition": "بضع عضل البواب هي عملية جراحيةٌ تجرى بإحداث شق في العضلات الطولية والدائرية للبواب وتستخدم لعلاج حالة تضيق البواب الضخامي. ويتم خلال العملية قطع العضلات المتضخمة على طول الجسم بالكامل حتى ينتفخ الغشاء المخاطي، وفي حالة إصابة هذا الأخير، تتم خياطته أفقيًا باستخدام غرز متقطعة أو خيوط من الحرير. (Pyloromyotomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074882.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cholecystostomy",
    "term_en": "Cholecystostomy",
    "term_ar": "فغر المرارة",
    "synonyms": [
      "Cholecystostomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Establishment of an opening into the gallbladder either for drainage or surgical communication with another part of the digestive tract, usually the duodenum or jejunum.",
    "arabic_definition": "فغر المرارة هو عملية صنع فغرة في المرارة لتسهيل وضع أنبوب للنزح. تستعمل هذه الطريقة في حالات التهاب المرارة ويعاني المريض فيها، وهنالك حاجة أو ضرورة لتأجيل عملية استئصال المرارة. (Cholecystostomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002767.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acetabuloplasty",
    "term_en": "Acetabuloplasty",
    "term_ar": "رأب الحق",
    "synonyms": [
      "Acetabuloplasties"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical reconstruction of the ACETABULUM.",
    "arabic_definition": "رأب الحُقّ(الإنجليزية: Acetabuloplasty) هو مجموعة من التقنيات الجراحية تُصنَّف ضمن عمليات قطع عظام الحوض، وتُستخدم لعلاج خلل التنسّج الوركي لدى الأطفال. وتشمل هذه التقنيات عدة إجراءات متشابهة من الناحية التقنية، مثل قطع عظم لانس، وقطع عظم بيمبرتون، وقطع عظم ديغا.أما قطع عظم سالتر، فعلى الرغم من اعتباره على نطاق واسع ضمن هذه المجموعة، فإنه يختلف بشكل ملحوظ في منهجيته.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065526.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "therapeutic-abortion",
    "term_en": "Therapeutic Abortion",
    "term_ar": "إجهاض",
    "synonyms": [
      "Abortions, Therapeutic",
      "Therapeutic Abortions",
      "Abortion"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abortion induced to save the life or health of a pregnant woman. (From Dorland, 28th ed)",
    "arabic_definition": "الإجهاض لغةّ من الجهيض الذي توقف عن النمو قبل الاكتمال، أو الجهيض هو عضو غير مكتمل النمو؛ وفي اللغة إسقاط الجنين؛ إِلْقاءُ الأُمِّ لِوَلَدِهَا قَبْلَ الاكْتِمال؛ فهو جهيض. ويسمى التطريح أيضا بمعنى أن يسبب الإجهاض. (Therapeutic Abortion)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000032.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "female-circumcision",
    "term_en": "Female Circumcision",
    "term_ar": "ختان الإناث",
    "synonyms": [
      "Circumcisions, Female",
      "Female Circumcisions",
      "Clitoridectomy",
      "Clitoridectomies",
      "Clitorectomy",
      "Clitorectomies",
      "Infibulation",
      "Infibulations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A general term encompassing three types of excision of the external female genitalia - Sunna, clitoridectomy, and infibulation. It is associated with severe health risks and has been declared illegal in many places, but continues to be widely practiced in a number of countries, particularly in Africa.",
    "arabic_definition": "ختان الإناث أو تشويه الأعضاء التناسلية الأنثوية أو الخَفْض مصطلحات لها اختلاف بحسب السياق اللغوي المستخدم. أما مصطلح تشويه الأعضاء التناسلية الأنثوية فهو المعتمد من مُنظمة الصحَّة العالميَّة وتُعرفه بأنه «أي عملية تتضمن إزالة جزئية أو كلية للأعضاء التناسلية الأنثوية دون وجود سبب طبي لذلك». (Female Circumcision)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019093.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radial-keratotomy",
    "term_en": "Radial Keratotomy",
    "term_ar": "بضع القرنية التشععي",
    "synonyms": [
      "Keratotomies, Radial",
      "Radial Keratotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A procedure to surgically correct REFRACTIVE ERRORS by cutting radial slits into the CORNEA to change its refractive properties.",
    "arabic_definition": "بضع القرنية التشععي (آر كيه) هو إجراء جراحي انكساري لتصحيح قصر النظر (الحسر)، طوره طبيب العيون الروسي سفياتوسلاف فيودوروف في عام 1974. استُبدل هذا الإجراء لاحقًا بعمليات أحدث، مثل اقتطاع القرنية الضوئي الانكساري، والليزك، والليزك السطحي، وزراعة العدسات داخل العين. (Radial Keratotomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007646.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pelvic-exenteration",
    "term_en": "Pelvic Exenteration",
    "term_ar": "اجتثاث الحوض",
    "synonyms": [
      "Exenteration, Pelvic",
      "Exenterations, Pelvic",
      "Pelvic Exenterations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Removal of all of the organs and adjacent structures of the pelvis. It is usually performed to surgically remove cancer involving the bladder, uterine cervix, or rectum. (Stedman, 25th ed)",
    "arabic_definition": "اجتثاث الحوض هي عملية جراحية جذرية يتم فيها استئصال أعضاء تجويف الحوض كالمثانة والإحليل والمستقيم والشرج، وفي الذكر تُزال البروستاتا أيضاً، وفي الأنثى يتم إزالة الرحم وعنق الرحم وقناة فالوب والمبايض، وربما الفرج. ويتم عمل مفاغرة للقولون وتحويل مجرى البول. (Pelvic Exenteration)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010385.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "male-circumcision",
    "term_en": "Male Circumcision",
    "term_ar": "ختان",
    "synonyms": [
      "Circumcisions, Male",
      "Male Circumcisions",
      "Circumcision"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision of the prepuce of the penis (FORESKIN) or part of it.",
    "arabic_definition": "الخِتان هي عملية خَتن قُلفَة الذَّكَر أي إزالته، وغالبًا ما يستخدم التخدير الموضعي أو المحقون موضعياً لتقليل الألم والإجهاد الفسيولوجي. عادةً ما يكون الإجراء عملية جراحية اختيارية تجرى على الأطفال والرضع كواجب ديني أو تقليد ثقافي، كما هو الحال في إسرائيل والعالم الإسلامي وعدد من الطوائف والمجتمعات المسيحية؛ أو كتدخل صحي وقائي، كما هو معمول به في العديد من دول الأنجلوسفير وأفريقيا. (Male Circumcision)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002944.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bariatric-surgery",
    "term_en": "Bariatric Surgery",
    "term_ar": "جراحات علاج البدانة",
    "synonyms": [
      "Surgeries, Bariatric",
      "Surgery, Bariatric",
      "Bariatric Surgeries",
      "Metabolic Surgery",
      "Metabolic Surgeries",
      "Surgeries, Metabolic",
      "Surgery, Metabolic",
      "Bariatric Surgical Procedures"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical procedures aimed at affecting metabolism and producing major WEIGHT REDUCTION in patients with MORBID OBESITY.",
    "arabic_definition": "طب السمنة الجراحي (جراحة السمنة أو جراحة تخفيف الوزن) (الإنجليزية: Bariatric surgery) يتضمن عددًا من الجراحات التي تجرى على الأشخاص المصابين بالسمنة، فيفقد المرء الوزن عند إجراءها عن طريق تصغير حجم المعدة برباط حولها، أو عن طريق إزالة جزء منها (تكميم المعدة) أو عن طريق تشريح الأمعاء الدقيقة وتحويل مسارها (جراحة تحويل مسار المعدة). أظهرت الدراسات طويلة الأمد أن هذه الجراحات تؤدي إلى نقص ملحوظ في الوزن، وإلى الشفاء من داء السكري (النوع الثاني)، وتحسن في مؤشر قياس خطورة الإصابة بأمراض القلب والأوعية الدموية، وانخفاض في معدل الوفيات من 23٪ إلى 40٪، ولكن يجدر ذكر أن دراسة أجريت على مرضى وزارة شؤون المحاربين القدامى في الولايات الأمريكية المتحدة توصلت إلى عدم وجود فرق في معدل النجاة عند المرضى الأكبر سنًا والمصابين بالسمنة المفرطة عند المقارنة بين الجراحة والعناية الصحية المعتادة على الأقل خلال فترة سبع سنين.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050110.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heller-myotomy",
    "term_en": "Heller Myotomy",
    "term_ar": "قطع عضلة هيلر",
    "synonyms": [
      "Myotomy, Heller",
      "Heller Operation",
      "Heller Groeneweldt Operation",
      "Heller Groeneweldt Surgery",
      "Heller's Myotomy",
      "Myotomy, Heller's",
      "Laparoscopic Heller Myotomy",
      "Heller Myotomy, Laparoscopic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical incision of the lower esophageal sphincter near the CARDIA often used to treat ESOPHAGEAL ACHALASIA.",
    "arabic_definition": "قطع عضلة هيلر أو تعذر ارتخاء المريء هو إجراء جراحي يتم فيه قطع عضلات القلب (العضلة العاصرة للمريء السفلية أو (الإنجليزية: LES))، مما يسمح بمرور الطعام والسوائل إلى المعدة. تُجرى العملية لعلاج تعذر الارتخاء، وهو اضطراب تفشل فيه العضلة العاصرة للمريء السفلي في الاسترخاء بشكل صحيح، مما يجعل وصول الطعام والسوائل إلى المعدة صعباً. (Heller Myotomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074434.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastric-bypass",
    "term_en": "Gastric Bypass",
    "term_ar": "جراحة المجازة المعدية",
    "synonyms": [
      "Bypass, Gastric",
      "Gastroileal Bypass",
      "Bypass, Gastroileal",
      "Greenville Gastric Bypass",
      "Gastric Bypass, Greenville",
      "Roux-en-Y Gastric Bypass",
      "Bypass, Roux-en-Y Gastric",
      "Gastric Bypass, Roux-en-Y"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical procedure in which the STOMACH is transected high on the body. The resulting small proximal gastric pouch is joined to any parts of the SMALL INTESTINE by an end-to-side SURGICAL ANASTOMOSIS, depending on the amounts of intestinal surface being bypasses. This procedure is used frequently in the treatment of MORBID OBESITY by limiting the size of functional STOMACH, food intake, and food absorption.",
    "arabic_definition": "تشير جراحة المجازة المَعِدِيّة (الإنجليزية: Gastric bypass surgery) إلى عملية تقسم فيها المعدة إلى جيب علوي صغير وجيب سفلي أكبر بكثير (بقاوة) ثم يعاد ترتيب الأمعاء الدقيقة لتتصل بكليهما. طور الجرّاحون عدة طرق مختلفة لإعادة توصيل الأمعاء، ما يؤدي إلى العديد من إجراءات المجازات المعدية المختلفة (GBP).",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015390.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pancreaticoduodenectomy",
    "term_en": "Pancreaticoduodenectomy",
    "term_ar": "إجراء ويبل",
    "synonyms": [
      "Pancreaticoduodenectomies",
      "Pancreatoduodenectomy",
      "Pancreatoduodenectomies",
      "Duodenopancreatectomy",
      "Duodenopancreatectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The excision of the head of the pancreas and the encircling loop of the duodenum to which it is connected.",
    "arabic_definition": "إجراء ويبل (الإنجليزية: Whipple procedure) أو استئصال البنكرياس والاثنا عشري Pancreaticoduodenectomy، هي عملية جراحية كبرى تُجرى غالباً لاستئصال الأورام السرطانية في رأس البنكرياس، وقد تستخدم في بعض الحالات الخاصة لعلاج التهاب البنكرياس المزمن أو رضوض الاثنا عشري، بسبب التروية الدموية المشتركة لأعضاء جهاز الهضم فإن الاستئصال الجراحي لرأس البنكرياس يستلزم أيضاً استئصال الاثنا عشري والصائم والمرارة وجزء من المعدة أحياناً.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016577.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salpingo-oophorectomy",
    "term_en": "Salpingo-oophorectomy",
    "term_ar": "استئصال البوق والمبيض",
    "synonyms": [
      "Salpingo-oophorectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Combined surgical resection of the fallopian tube and the ovary.",
    "arabic_definition": "يتم استئصال البوق والمبيض في الطب أي استئصال المبيض وقناة فالوب، هذا الإملاء: \"salpingoophorectomy\" هو إملاء صحيح ومقبول ولكنه أقل شيوعًا بكثير من \"salpingo-oophorectomy\"",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074868.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mohs-surgery",
    "term_en": "Mohs Surgery",
    "term_ar": "جراحة موس",
    "synonyms": [
      "Micrographic Surgery, Moh's",
      "Micrographic Surgery, Moh",
      "Micrographic Surgery, Mohs'",
      "Mohs' Micrographic Surgery",
      "Surgery, Mohs' Micrographic",
      "Moh's Micrographic Surgery",
      "Moh Micrographic Surgery",
      "Surgery, Moh's Micrographic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A surgical technique used primarily in the treatment of skin neoplasms, especially basal cell or squamous cell carcinoma of the skin. This procedure is a microscopically controlled excision of cutaneous tumors either after fixation in vivo or after freezing the tissue. Serial examinations of fresh tissue specimens are most frequently done.",
    "arabic_definition": "عملية جراحية موس، تم تطويرها في عام 1938 من قِبل جراح عام، فريدريك إي. موس، هي عملية جراحية مجهرية تستخدم لعلاج أنواع شائعة من سرطان الجلد. (Mohs Surgery)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015580.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dacryocystorhinostomy",
    "term_en": "Dacryocystorhinostomy",
    "term_ar": "مفاغرة دمعية أنفية",
    "synonyms": [
      "Dacryocystorhinostomies",
      "Dacryocystostomy",
      "Dacryocystostomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical fistulization of the LACRIMAL SAC for external drainage of an obstructed nasolacrimal duct.",
    "arabic_definition": "مفاغرة دمعية أنفية (الإنجليزية: Dacryocystorhinostomy) هي عملية جراحية تتم لإصلاح تدفق الدموع من الكيس الدمعي إلى داخل الأنف وذلك في حال انسداد القناة الأنفية الدمعية.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003608.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pancreaticojejunostomy",
    "term_en": "Pancreaticojejunostomy",
    "term_ar": "إجراء بويستو",
    "synonyms": [
      "Pancreaticojejunostomies",
      "Pancreatojejunostomy",
      "Pancreatojejunostomies",
      "Puestow procedure"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical anastomosis of the pancreatic duct, or the divided end of the transected pancreas, with the jejunum. (Dorland, 28th ed)",
    "arabic_definition": "إجراء بويستو ويُسمى المفاغرة البنكرياسية اللفائفية الوحشية هي تقنيةٌ جراحية تستخدم في علاج التهاب البنكرياس المزمن. وهو ينطوي على مفاغرة الجانب بالجانب لقناة البنكرياس والصائم. (Pancreaticojejunostomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010193.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "body-piercing",
    "term_en": "Body Piercing",
    "term_ar": "ثقب الجسد",
    "synonyms": [
      "Body Piercings",
      "Piercings, Body",
      "Piercing, Body",
      "Tongue Piercing",
      "Piercings, Tongue",
      "Piercing, Tongue",
      "Tongue Piercings",
      "Lip Piercing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The perforation of an anatomical region for the wearing of jewelry.",
    "arabic_definition": "ثقب الجسد هو محاولة لتعديل شكل الجسد وتزيينه، وهو عبارة عن أداء ثقب أو قطع في أحد أجزاء الجسد. وكثيراً ما يتم وضع المجوهرات وأدوات الزينة في ذلك الثقب، وتتنوّع المواد التي تُصنع منها تلك المجوهرات ما بين الفولاذ والذهب والفضة وغيرهم. (Body Piercing)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046288.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "organ-transplantation",
    "term_en": "Organ Transplantation",
    "term_ar": "زراعة الأعضاء",
    "synonyms": [
      "Grafting, Organ",
      "Graftings, Organ",
      "Organ Grafting",
      "Organ Graftings",
      "Transplantation, Organ",
      "Organ Transplantations",
      "Transplantations, Organ",
      "Transplantation (medicine)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Transference of an organ between individuals of the same species or between individuals of different species.",
    "arabic_definition": "زراعة الأعضاء هي نقل عضو من جسم إلى آخر، أو نقل جزء من جسد المريض إلى الجزء المصاب في الجسد نفسه، بهدف استبدال العضو التالف أو الناقص في جسد المتلقي. ويسمح مجال طب التجديد الناشئ للعلماء ومتخصصي الهندسة الوراثية بمحاولة إعادة تكوين أعضاء من الخلايا الخاصة بالمريض نفسه (الخلايا الجذعية، أو الخلايا المستخرجة من الأعضاء المصابة بقصور.) ويُطلق على الأعضاء و/أو الأنسجة التي تُزرع داخل جسم الشخص نفسه مسمى الطعم الذاتي. (Organ Transplantation)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016377.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "liver-transplantation",
    "term_en": "Liver Transplantation",
    "term_ar": "زراعة الكبد",
    "synonyms": [
      "Hepatic Transplantation",
      "Hepatic Transplantations",
      "Transplantation, Hepatic",
      "Transplantation, Liver",
      "Liver Transplantations",
      "Liver Transplant",
      "Liver Transplants",
      "Transplant, Liver"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The transference of a part of or an entire liver from one human or animal to another.",
    "arabic_definition": "زراعة الكبد هي عملية جراحية لنقل جزء من كبد إنسان سليم أو متوفي حديث الوفاة لمريض فشل كبدي، حدثت أول عملية زراعة كبد عند الإنسان عام 1983. في البداية، كانت النتائج سيئة جدا، حيث أن عدداً قليلاً من المرضى نجوا في السنة الأولى. (Liver Transplantation)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016031.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kidney-transplantation",
    "term_en": "Kidney Transplantation",
    "term_ar": "زراعة الكلى",
    "synonyms": [
      "Renal Transplantation",
      "Renal Transplantations",
      "Transplantations, Renal",
      "Transplantation, Kidney",
      "Kidney Transplantations",
      "Transplantations, Kidney",
      "Transplantation, Renal",
      "Grafting, Kidney"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The transference of a kidney from one human or animal to another.",
    "arabic_definition": "زراعة الكلى أو زرع الكلى (الإنجليزية: Kidney transplantation) هو العملية التي يتم من خلالها زراعة كلية أو كليتين لمرضى الكلى المزمنين. يصنف زرع الكلى عادة إلى مانح-متوفى أو مانح-حي وذلك اعتماداً على أصل الجهة المانحة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016030.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carotid-endarterectomy",
    "term_en": "Carotid Endarterectomy",
    "term_ar": "استئصال باطنة الشريان السباتي",
    "synonyms": [
      "Carotid Endarterectomies",
      "Endarterectomies, Carotid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The excision of the thickened, atheromatous tunica intima of a carotid artery.",
    "arabic_definition": "استئصال باطنة الشريان السباتي (سي إي آيه)، إجراء جراحي يستخدم لخفض خطورة السكتة الدماغية الناجمة عن تضيق الشريان السباتي (تضيق الشريان السباتي الباطن). في استئصال باطنة الشريان، يفتح الجراح الشريان ويزيل اللويحة. (Carotid Endarterectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016894.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lung-transplantation",
    "term_en": "Lung Transplantation",
    "term_ar": "زراعة الرئة",
    "synonyms": [
      "Grafting, Lung",
      "Graftings, Lung",
      "Lung Grafting",
      "Lung Graftings",
      "Transplantation, Lung",
      "Lung Transplantations",
      "Transplantations, Lung"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The transference of either one or both of the lungs from one human or animal to another.",
    "arabic_definition": "زراعة الرئة أو زرع الرئة هو إجراء جراحي يتم فيه استبدال رئة المريض جزئيا أو كليا برئه يتم الحصول عليها من المتبرعين. في حين أن عمليات زرع الرئة ترتبط بمخاطر مؤكدة، فإنها أيضاً يمكن أن تزيد من متوسط العمر المتوقع وتحسن نوعية الحياة للمرضى في المرحلة النهائية من أمراض الرئة. (Lung Transplantation)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016040.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "surgical-anastomosis",
    "term_en": "Surgical Anastomosis",
    "term_ar": "مفاغرة جراحية",
    "synonyms": [
      "Anastomoses, Surgical",
      "Surgical Anastomoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical union or shunt between ducts, tubes or vessels. It may be end-to-end, end-to-side, side-to-end, or side-to-side.",
    "arabic_definition": "في المصطلحات الجراحية، تتطلب عملية المفاغرة وصل عضوين (الأحشاء) مجوفين مع بعضهما البعض لإعادة الاستمرارية بعد عملية الاستئصال أو لتجنب استطالة مرض غير قابل للعلاج جراحيًا. كانت إجراءات هذه العملية تحدث قديمًا بواسطة مواد الخياطة، ولكن فيما بعد تم استخدام الدباسة الآلية والغراء البيولوجي. (Surgical Anastomosis)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000714.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fertility-preservation",
    "term_en": "Fertility Preservation",
    "term_ar": "حفظ الخصوبة",
    "synonyms": [
      "Fertility Preservations",
      "Preservation, Fertility",
      "Egg Freezing",
      "Freezing, Egg",
      "Sperm Freezing",
      "Freezing, Sperm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A method of providing future reproductive opportunities. Typically CRYOPRESERVATION of reproductive organs or tissues (e.g., sperm, egg, embryos and ovarian or testicular tissues) are carried out before known risk of loss of fertility (e.g., chemotherapy, radiation or military deployment) begins for future use.",
    "arabic_definition": "يعرف حفظ الخصوبة بأنه محاولة لمساعدة مرضى السرطان على الاحتفاظ بخصوبتهم أو قدرتهم على الإنجاب. ازدادت الأبحاث في كيفية تأثير السرطان والتقدم بالعمر والحالات الصحية الأخرى على الصحة الإنجابية وخيارات الحفظ. (Fertility Preservation)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059247.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heart-transplantation",
    "term_en": "Heart Transplantation",
    "term_ar": "زراعة القلب",
    "synonyms": [
      "Grafting, Heart",
      "Graftings, Heart",
      "Heart Grafting",
      "Heart Graftings",
      "Transplantation, Cardiac",
      "Transplantation, Heart",
      "Heart Transplantations",
      "Transplantations, Heart"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The transference of a heart from one human or animal to another.",
    "arabic_definition": "عملية زرع القلب (الإنجليزية: heart transplant) أو (الإنجليزية: cardiac transplant)، هي إجراء عملية زرع جراحي للمرضى الذين يُعانون من فشل القلب أو من مرض الشريان التاجي الحاد. اعتباراً من عام 2008 أصبح الإجراء الأكثر شيوعاً هو أخذ القلب السليم من المتوفين حديثاً (المتبرع) وزرعه في المريض. (Heart Transplantation)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016027.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pancreas-transplantation",
    "term_en": "Pancreas Transplantation",
    "term_ar": "زراعة البنكرياس",
    "synonyms": [
      "Grafting, Pancreas",
      "Graftings, Pancreas",
      "Pancreas Grafting",
      "Pancreas Graftings",
      "Transplantation, Pancreas",
      "Pancreas Transplantations",
      "Transplantations, Pancreas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The transference of a pancreas from one human or animal to another.",
    "arabic_definition": "زرع البنكرياس (الإنجليزية: Pancreas transplantation) هي زراعة بنكرياس مأخوذ من متبرع سليم وقادر على إنتاج مادة الأنسولين، داخل جسم شخص مصاب بالسكري. لأن البنكرياس هو عنصر حيوي يساهم في عملية الهضم.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016035.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radiofrequency-ablation",
    "term_en": "Radiofrequency Ablation",
    "term_ar": "استئصال راديوي",
    "synonyms": [
      "Ablation, Radiofrequency",
      "Radio-Frequency Ablation",
      "Ablation, Radio-Frequency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Removal of tissue using heat generated from electrodes delivering an alternating electrical current in the frequency of RADIO WAVES.",
    "arabic_definition": "الاستئصال الراديوي (الإنجليزية: Radiofrequency ablation) هو إجراء طبي يحدث فيه اسئصال لجزء من نظام التوصيل الكهربائي للقلب، أو لورم أو غير ذلك من الأنسجة المختلة، وذلك باستخدام الحرارة المتولدة من تيار كهربي ذو تردد متوسط (في نطاق 350-500 كيلو هرتز). ويتم هذا الإجراء عموما في العيادات الخارجة، وذلك باستخدام إما التخدير الموضعي أو التخدير الكلي.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000078703.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plastic-surgery-procedures",
    "term_en": "Plastic Surgery Procedures",
    "term_ar": "جراحة تجميلية",
    "synonyms": [
      "Plastic Surgery Procedure",
      "Procedure, Plastic Surgery",
      "Procedures, Plastic Surgery",
      "Surgery Procedure, Plastic",
      "Surgery Procedures, Plastic",
      "Esthetic Surgical Procedures",
      "Esthetic Surgical Procedure",
      "Procedure, Esthetic Surgical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Procedures used to reconstruct, restore, or improve defective, damaged, or missing structures.",
    "arabic_definition": "جراحة تجميلية أو جراحة التجميل (الإنجليزية: Plastic surgery) هي الجراحات التي تجرى لأغراض وظيفية أو جمالية، هي بالمفهوم البسيط استعادة التناسق والتوازن لجزء من أجزاء الجسم عن طريق أستعادة مقاييس الجمال المناسبة لهذا الجزء. أصل كلمة Plastic أتت من الكلمة اليونانية plastikos وهي فعل «يقولب» أو «يشكل» وبالتالي فهي لا تمت بصلة إلى مادة البلاستيك كما قد يتبادر إلى أذهان البعض. (Plastic Surgery Procedures)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019651.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "deep-brain-stimulation",
    "term_en": "Deep Brain Stimulation",
    "term_ar": "تحفيز عميق للدماغ",
    "synonyms": [
      "Brain Stimulations, Deep",
      "Deep Brain Stimulations",
      "Stimulation, Deep Brain",
      "Stimulations, Deep Brain",
      "Brain Stimulation, Deep",
      "Electrical Stimulation of the Brain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Therapy for MOVEMENT DISORDERS, especially PARKINSON DISEASE, that applies electricity via stereotactic implantation of ELECTRODES in specific areas of the BRAIN such as the THALAMUS. The electrodes are attached to a neurostimulator placed subcutaneously.",
    "arabic_definition": "التحفيز العميق للدماغ (الإنجليزية: Deep brain stimulation) هو علاج جراحي ينطوي على زرع جهاز طبي يسمى جهاز تنظيم الدماغ، الذي يرسل نبضات كهربائية إلى أجزاء معينة من الدماغ.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046690.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hematopoietic-stem-cell-transplantation",
    "term_en": "Hematopoietic Stem Cell Transplantation",
    "term_ar": "زراعة نخاع العظم",
    "synonyms": [
      "Stem Cell Transplantation, Hematopoietic",
      "Transplantation, Hematopoietic Stem Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Transfer of HEMATOPOIETIC STEM CELLS from BONE MARROW or BLOOD between individuals within the same species (TRANSPLANTATION, HOMOLOGOUS) or transfer within the same individual (TRANSPLANTATION, AUTOLOGOUS). Hematopoietic stem cell transplantation has been used as an alternative to BONE MARROW TRANSPLANTATION in the treatment of a variety of neoplasms.",
    "arabic_definition": "زراعة النخاع العظمي (الإنجليزية: Bone Marrow Transplant) أو زراعة الخلايا الجذعية (الموجودة داخل نخاع العظم) (الإنجليزية: Stem Cell Transplantation) هو علاج طبي يتم فيه نقل الخلايا الجذعية إما من نفس المريض أو من متبرع لعلاج عدد من الأمراض مثل سرطان الدم وبعض الأمراض الوراثية أو المناعية وتستخدم أيضا بشكل تجريبي في عدد آخر من الأمراض ولكن لم يثبت فعاليتها لها بعد. وخلافا للانطباع السائد فزراعة النخاع العظمي ليست عملية جراحية بل تتم بطريقة مشابهة لعملية نقل الدم، مع ذلك فهنالك احتمال حدوث مضاعفات خطيرة. (Hematopoietic Stem Cell Transplantation)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018380.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "total-disc-replacement",
    "term_en": "Total Disc Replacement",
    "term_ar": "تقويم مفصل القرص بين الفقرات",
    "synonyms": [
      "Disc Replacements, Total",
      "Disc Replacement, Total",
      "Replacements, Total Disc",
      "Replacement, Total Disc",
      "Total Disc Replacements",
      "Artificial Disc Replacement",
      "Artificial Disc Replacements",
      "Disc Replacement, Artificial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The replacement of intervertebral discs in the spinal column with artificial devices. The procedure is done in the lumbar or cervical spine to relieve severe pain resulting from INTERVERTEBRAL DISC DEGENERATION.",
    "arabic_definition": "استبدال القرص الاصطناعي (ADR) أو استبدال القرص الكلي (TDR) هو أحد أنواع رأب المفصل. وهو إجراء جراحي يتم فيه استبدال الأقراص بين الفقرات في العمود الفقري بزراعات اصطناعية في العمود الفقري القطني (السفلي) أو العمود الفقري العنقي (العلوي). (Total Disc Replacement)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059145.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mitral-valve-annuloplasty",
    "term_en": "Mitral Valve Annuloplasty",
    "term_ar": "رأب الصمام التاجي",
    "synonyms": [
      "Annuloplasties, Mitral Valve",
      "Annuloplasty, Mitral Valve",
      "Mitral Valve Annuloplasties",
      "Valve Annuloplasties, Mitral",
      "Valve Annuloplasty, Mitral",
      "Mitral Annuloplasty",
      "Annuloplasties, Mitral",
      "Annuloplasty, Mitral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of heart valve surgery that involves the repair, replacement, or reconstruction of the annulus of the MITRAL VALVE. It includes shortening the circumference of the annulus to improve valve closing capacity and reinforcing the annulus as a step in more complex valve repairs.",
    "arabic_definition": "رأب الصمام التاجي هي تقنية جراحية لإصلاح تسرب الدم عبر الصمامات التاجية. تتشارك وريقتا الصمام التاجي بشكل طبيعي في إحكام إغلاق الصمام، ولكن قد يضطرب هذا الأمر بسبب عوامل مختلفة. (Mitral Valve Annuloplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058386.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transcatheter-aortic-valve-replacement",
    "term_en": "Transcatheter Aortic Valve Replacement",
    "term_ar": "استبدال الصمام الأبهري عبر الجلد",
    "synonyms": [
      "TAVR",
      "Transcatheter Aortic Valve Implantation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An endovascular procedure for the treatment of severe AORTIC VALVE STENOSIS. Transcatheter aortic valve replacement (TAVR) is used as an alternative option in patients who are deemed at high risk or inoperable for traditional open-heart surgery.",
    "arabic_definition": "استبدال الصمام الأبهري عبر الجلد (PAVR) والمعروف أيضًا باسم زرع الصمام الأبهري عبر الجلد (PAVI) أو زرع الصمام الأبهري بطريق القثطار (TAVI) أو استبدال الصمام الأبهري بطريق القثطار (TAVR)، هي إجراءات تلجأ إلى استبدال الصمام الأبهري للقلب عن طريق الدخول عبر الأوعية الدموية (بدلًا من استبدال الصمام عن طريق جراحة القلب المفتوح). يوضع الصمام البديل عبر إحدى طرق الوصول العديدة: عبر الفخذي (في الجزء العلوي من الطرف السفلي) أو عبر قمة القلب (من خلال جدار القلب) أو بمدخل تحت الترقوة (تحت عظمة الترقوة) أو عبر الأبهر مباشرةً (من خلال إجراء شق جراحي طفيف التوغل في الشريان الأبهر) أو عبر الأجوف (من خلال إحداث ثقب مؤقت في الشريان الأبهري بالقرب من سرة البطن بعد الدخول عبر وريد في الجزء العلوي من الطرف السفلي)، وذلك بالإضافة إلى طرق أخرى عديدة. (Transcatheter Aortic Valve Replacement)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065467.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prions",
    "term_en": "Prions",
    "term_ar": "بريون",
    "synonyms": [
      "Prion",
      "Mink Encephalopathy Virus",
      "Encephalopathy Virus, Mink"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Small proteinaceous infectious particles which resist inactivation by procedures that modify NUCLEIC ACIDS and contain an abnormal isoform of a cellular protein which is a major and necessary component. The abnormal (scrapie) isoform is PrPSc (PRPSC PROTEINS) and the cellular isoform PrPC (PRPC PROTEINS). The primary amino acid sequence of the two isoforms is identical. Human diseases caused by prions include CREUTZFELDT-JAKOB SYNDROME; GERSTMANN-STRAUSSLER SYNDROME; and INSOMNIA, FATAL FAMILIAL.",
    "arabic_definition": "البريون أو الجزيئات البروتينية المسببة للعدوى أو جسيم مُعْدٍ بروتيني (الإنجليزية: Prion) (اختصار للعبارة ((الإنجليزية: proteinaceous infectious particle) ( )) بروتينات معتلة تميّز العديد من الأمراض العصبية المميتة في كلا من الحيوانات والبشر. لا يزال سبب هذا الاعتلال غير معروف؛ ويشتبه في البنية ثلاثية الأبعاد الغير طبيعية بأنها السبب وراء الخصائص المعدية للبريون. (Prions)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011328.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "butter",
    "term_en": "Butter",
    "term_ar": "زبدة",
    "synonyms": [
      "Butters"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The fatty portion of milk, separated as a soft yellowish solid when milk or cream is churned. It is processed for cooking and table use. (Random House Unabridged Dictionary, 2d ed)",
    "arabic_definition": "الزبدة هي المادة الدهنية الموجودة في الحليب، ويتم الحصول عليها من خض اللبن المتخمر أو القشطة المتخمرة أو غير المتخمرة بالأوعية خاصة بعدة طرق. وهي عبارة عن منتج مصنوع من المكونات الصلبة في الحليب (الدهون والبروتين). (Butter)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002079.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "silk",
    "term_en": "Silk",
    "term_ar": "حرير",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A continuous protein fiber consisting primarily of FIBROINS. It is synthesized by a variety of INSECTS and ARACHNIDS.",
    "arabic_definition": "الحرير هو ألياف بروتينية طبيعية قابلة للنسج على شكل منسوجات. ويتم الحصول على الحرير من شرانق دودة القز. (Silk)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D047011.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ricin",
    "term_en": "Ricin",
    "term_ar": "ريسين",
    "synonyms": [
      "Castor Bean Lectin",
      "Lectin, Castor Bean",
      "Lectin, Ricinus",
      "Ricinus Lectin",
      "Ricinus Toxin",
      "Toxin, Ricinus",
      "RCA 60",
      "Ricin Toxin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A protein phytotoxin from the seeds of Ricinus communis, the castor oil plant. It agglutinates cells, is proteolytic, and causes lethal inflammation and hemorrhage if taken internally.",
    "arabic_definition": "الريسين هو بروتين شديد السمية، يستخرج من بذور نبات الخروع والجرعة السامة المتوسطة للإنسان تقدر ب 0. 2 مجم (1 من 5000 من جرام)، ويعتبر أكثر سمية من سم الكوبرا بمرتين. (Ricin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012276.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urease",
    "term_en": "Urease",
    "term_ar": "يورياز",
    "synonyms": [
      "Urea Amidohydrolase",
      "Amidohydrolase, Urea",
      "Phytourease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme that catalyzes the conversion of urea and water to carbon dioxide and ammonia. EC 3.5.1.5.",
    "arabic_definition": "اليورياز هو أنزيم قادر على تكسير اليوريا إلى أمونيا وغاز ثنائي أوكسيد الكربون وفق المعادلة: (Urease)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014510.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ghee",
    "term_en": "Ghee",
    "term_ar": "سمن حيواني",
    "synonyms": [
      "Ghees",
      "Clarified Butter",
      "Butter, Clarified",
      "Butters, Clarified",
      "Clarified Butters",
      "Anhydrous Butterfat",
      "Anhydrous Butterfats",
      "Butterfat, Anhydrous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The clarified portion of milk, cream, or butter obtained by the removal of the nonfat constituents. (from Dictionary of Food Ingredients, 4th ed., 2001)",
    "arabic_definition": "السَّمْنُ الحَيَوانيّ أو الدُّهْن الحُرُّ (السَّمْن البَلَديُّ أو سَمْن البدو أو السَّمْن العَرَبيُّ) هو دُهن مستخرج من لبن الغنم أو البقر بطريقة معينة، ويستخدم في المطبخ في إعداد الأطعمة، ويعد السَّمْن الصناعي أو النباتي أو المهدرج بديلاً رخيصاً له. (Ghee)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000067048.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibrin",
    "term_en": "Fibrin",
    "term_ar": "فبرين",
    "synonyms": [
      "Antithrombin I"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A protein derived from FIBRINOGEN in the presence of THROMBIN, which forms part of the blood clot.",
    "arabic_definition": "اللِّيفين أو الفِبْرِينُ أو الفيبرين أو البُرُوتِينُ اللَّيْفِيُّ الدَّمَوِيُّ (الإنجليزية: Fibrin) بروتين ليفي له دور في تخثر الدم. يَنْتُجُ الليفين عن تَكَوْثُرِ عاملِ التخثر الأول (مُوَلِّدِ الليفين) بفعل عامل التخثر الثاني (بروتين التخثر أو الثُرُمْبِين).",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005337.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "renin",
    "term_en": "Renin",
    "term_ar": "رينين",
    "synonyms": [
      "Angiotensin-Forming Enzyme",
      "Angiotensinogenase",
      "Prorenin",
      "Big Renin",
      "Renin, Big",
      "Cryorenin",
      "Inactive Renin",
      "Renin, Inactive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A highly specific (Leu-Leu) endopeptidase that generates ANGIOTENSIN I from its precursor ANGIOTENSINOGEN, leading to a cascade of reactions which elevate BLOOD PRESSURE and increase sodium retention by the kidney in the RENIN-ANGIOTENSIN SYSTEM. The enzyme was formerly listed as EC 3.4.99.19.",
    "arabic_definition": "الرينين (الإنجليزية: Renin) إنزيم يجري في الدم يُفرز من الكلى (وتحديداً الخلايا المجاورة للكبيبات) يساهم في رفع ضغط الدم وهو جزء من نظام الرينين-أنجيوتنسين الذي يلعب دوراً في تقليص الشرايين واحتباس الماء وايون الصوديوم مما يؤدي إلى رفع الضغط الشرياني. يقوم إنزيم الرنين بشطر (الإنجليزية: Cleavage) إنزيم الأنجيوتنسوجين المفرز من الكبد ليتحول إلى أنجيوتنسين.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012083.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "actins",
    "term_en": "Actins",
    "term_ar": "أكتين",
    "synonyms": [
      "Actin",
      "alpha-Actin",
      "alpha-Isoactin",
      "beta-Actin",
      "G-Actin",
      "gamma-Actin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Filamentous proteins that are the main constituent of the thin filaments of muscle fibers. The filaments (known also as filamentous or F-actin) can be dissociated into their globular subunits; each subunit is composed of a single polypeptide 375 amino acids long. This is known as globular or G-actin. In conjunction with MYOSINS, actin is responsible for the contraction and relaxation of muscle.",
    "arabic_definition": "أكتين (بالإنجليزية:Actin) هو بروتين، الوزن الجزيئي له ما يقارب 42 كيلو دالتون، وهذا البروتين موجود في جميع الخلايا حقيقية النواة (والاستثناء الوحيد المعروف عند الحيوانات المنوية للديدان الخيطية) حيث أنه قد يكون موجودا في تركيزات أكثر من 100 ميكرو مولار. وهو بروتين هيكلي ويشكل جزءا من الهيكل الخلوي وأحد خمسة بروتينات غالبية في حقيقيات النوى؛ يوجد في الخلايا العضلية حيث يكون من كل 10 جزيئات بروتين واحد من الأكتين، أما في الخلايا الأخرى فهو يوجد بنسبة 1 إلى 5% فقط. (Actins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000199.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lamins",
    "term_en": "Lamins",
    "term_ar": "لامين",
    "synonyms": [
      "Lamin",
      "لامين (علم الأحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Nuclear matrix proteins that are structural components of the NUCLEAR LAMINA. They are found in most multicellular organisms.",
    "arabic_definition": "اللامينات النووية (nuclear lamins) هي بروتينات ليفية في الخيوط المتوسطة من النوع الخامس، توفر الوظيفة الهيكلية وتنظيم النسخ في نواة الخلية. تتفاعل مع بروتينات الغشاء النووي الداخلي لتكوين الصفيحة النووية الموجودة داخل الغلاف النووي.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034882.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lyases",
    "term_en": "Lyases",
    "term_ar": "لياز",
    "synonyms": [
      "Lyase",
      "Desmolases",
      "Desmolase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of enzymes that catalyze the cleavage of C-C, C-O, and C-N, and other bonds by other means than by hydrolysis or oxidation. (Enzyme Nomenclature, 1992) EC 4.",
    "arabic_definition": "في الكيمياء الحيوية : اللياز lyase أحد أنواع الإنزيمات التي تحفز كسر روابط كيميائية متنوعة بطرق مختلفة عن طرق الحلمهة hydrolysis والأكسدة، مشكلة غالبا رابطة مزدوجة أو بنية حلقية جديدة. مثلا، الإنزيم الذي يتواسط التفاعل التالي يمكن أن يكون ليازا : أدينوسين ثلاثي الفوسفات → أدينوسين أحادي الفسفات حلقي + PPi الليازات تختلف عن باقي الإنزيمات في أنها تتطلب ركازة substrate واحدة على الأقل للتفاعل في اتجاه واحد، لكنها تتطلب ركازتين من أجل التفاعل العكسي. (Lyases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008190.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "porins",
    "term_en": "Porins",
    "term_ar": "بورين (بروتين)",
    "synonyms": [
      "Porin",
      "Pore Proteins",
      "Proteins, Pore",
      "Pore Protein",
      "Protein, Pore",
      "Porin (protein)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Porins are protein molecules that were originally found in the outer membrane of GRAM-NEGATIVE BACTERIA and that form multi-meric channels for the passive DIFFUSION of WATER; IONS; or other small molecules. Porins are present in bacterial CELL WALLS, as well as in plant, fungal, mammalian and other vertebrate CELL MEMBRANES and MITOCHONDRIAL MEMBRANES.",
    "arabic_definition": "البورينات هي بروتينات برميل بيتا تعبر الغشاء الخلوي وتعمل كمسام ، والتي من خلالها يمكن أن تنتشر الجزيئات . على عكس بروتينات النقل الغشائية الأخرى ، فالخزانات كبيرة بما يكفي للسماح بالانتشار السلبي ، أي أنها تعمل كقنوات خاصة بأنواع مختلفة من الجزيئات. (Porins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018272.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucins",
    "term_en": "Mucins",
    "term_ar": "موسين",
    "synonyms": [
      "Mucin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "High molecular weight mucoproteins that protect the surface of EPITHELIAL CELLS by providing a barrier to particulate matter and microorganisms. Membrane-anchored mucins may have additional roles concerned with protein interactions at the cell surface.",
    "arabic_definition": "الموسين أو المخاطين (الإنجليزية: Mucin) هي عائلةٌ من البروتينات عالية الكتلة الجزيئية وشديدة الغلكزة، تنتج بواسطة النسيج الطلائي في معظم الحيوانات. (Mucins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009077.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "papain",
    "term_en": "Papain",
    "term_ar": "باباين",
    "synonyms": [
      "Tromasin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A proteolytic enzyme obtained from Carica papaya. It is also the name used for a purified mixture of papain and CHYMOPAPAIN that is used as a topical enzymatic debriding agent. EC 3.4.22.2.",
    "arabic_definition": "باباين (بالإنجليزية:papain) هو أنزيم يساعد على إذابة خلايا الجلد الميت ويساعد أيضا على هضم البروتينات. وتوجد كبسولات لهذا الإنزيم papain للمساعدة على الهضم ومن الأفضل الحصول عليه بأخذ فاكهة أو مع السلطة.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010206.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "abrin",
    "term_en": "Abrin",
    "term_ar": "أبرين",
    "synonyms": [
      "Abrin A",
      "Abrin C"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A toxic lectin from the seeds of jequirity, Abrus precatorius L. Very active poison. Five different proteins have so far been isolated: Abrus agglutinin, the component responsible for: hemagglutinating activity, &amp; abrins a-d, the toxic principals each consisting of two peptide chains are held together by disulfide bonds.",
    "arabic_definition": "الأبرين هو سم طبيعي موجود في بذور نبات يسمى عين العفريت. وهي بذور حمراء مع بقعة سوداء تغطي أحد النهايتين. (Abrin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000036.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "furin",
    "term_en": "Furin",
    "term_ar": "فيورين",
    "synonyms": [
      "SPC1 Proteinase",
      "Dibasic Processing Enzyme",
      "Processing Enzyme, Dibasic",
      "Paired Basic Amino Acid Cleaving Enzyme",
      "Furin Protein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A proprotein convertase with specificity for the proproteins of PROALBUMIN; COMPLEMENT 3C; and VON WILLEBRAND FACTOR. It has specificity for cleavage near paired ARGININE residues that are separated by two amino acids.",
    "arabic_definition": "فيورين (الإنجليزية: Furin) هو ببتيداز داخلي ينتمي إلى عائلة كونفيرتاز طليعة الإنزيم المشابه للسبتيليزين وهو بروتياز سيرين ينتمي إلى العائلة S8، ويشفر لدى البشر بواسطة جين FURIN. يُحفز الفيورين المعالجة التحللية لطلائع البروتينات (وهي بروتينات غير نشطة يجب أن يُقص منها جزء أو أجزاء لتصبح نشطة) الخاصة بحقيقيات النوى لتنشيطها. وهو بروتين عبر غشائي من النوع 1 يُعبر عنه بكثرة لدى الفقاريات وبعض اللافقاريات.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045683.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "agrin",
    "term_en": "Agrin",
    "term_ar": "أجرين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A protein component of the synaptic basal lamina. It has been shown to induce clustering of acetylcholine receptors on the surface of muscle fibers and other synaptic molecules in both synapse regeneration and development.",
    "arabic_definition": "الأجرين (الإنجليزية: Agrin) هو بروتيوغليكان كبير يتمثل دوره الأساسي في نمو الموصلات العصبية العضلية أثناء تخلق الجنين. تمت تسمية أجرين بهذا الاسم اعتمادًا على مشاركته في تجميع مستقبلات الأسيتيل كولين أثناء تكون المشابك العصبية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018171.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ancrod",
    "term_en": "Ancrod",
    "term_ar": "أنكرود",
    "synonyms": [
      "Agkistrodon rhodostoma Venom Protease",
      "Agkistrodon Serine Proteinase",
      "Arvin IRC-50",
      "Arvin IRC50",
      "Arvin",
      "Arwin",
      "Venacil"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme fraction from the venom of the Malayan pit viper, Agkistrodon rhodostoma. It catalyzes the hydrolysis of a number of amino acid esters and a limited proteolysis of fibrinogen. It is used clinically to produce controlled defibrination in patients requiring anticoagulant therapy. EC 3.4.21.-.",
    "arabic_definition": "أنكرود (الإنجليزية: Ancrod) هو دواء مضاد للتخثر (مميع للدم) يُستخدم لعلاج الخثرات الدموية والوقاية منها. يُستخدم بشكل محدد لعلاج الخثار الوريدي العميق، والصمات الرئوية، والوقاية من الخثرات الدموية في الرجفان الأذيني، وبعد جراحة الورك أو الركبة.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000721.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipase",
    "term_en": "Lipase",
    "term_ar": "ليباز",
    "synonyms": [
      "Triacylglycerol Hydrolase",
      "Hydrolase, Triacylglycerol",
      "Triacylglycerol Lipase",
      "Tributyrinase",
      "Triglyceridase",
      "Triglyceride Lipase",
      "Lipase, Triglyceride",
      "Triolean Hydrolase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme of the hydrolase class that catalyzes the reaction of triacylglycerol and water to yield diacylglycerol and a fatty acid anion. It is produced by glands on the tongue and by the pancreas and initiates the digestion of dietary fats. (From Dorland, 27th ed) EC 3.1.1.3.",
    "arabic_definition": "ليباز أو اليباسيس (الإنجليزية: Lipase) هو انزيم يحفز انهيار أو تحلل الدهون. يباسيس هي فئة فرعية من الاسترات .",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008049.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endovascular-aneurysm-repair",
    "term_en": "Endovascular Aneurysm Repair",
    "term_ar": "إصلاح أم الدم داخل الوعائي",
    "synonyms": [
      "Aneurysm Repair, Endovascular",
      "Endovascular Aneurysm Repairs",
      "Repair, Endovascular Aneurysm",
      "Endovascular Aortic Repair",
      "Aortic Repair, Endovascular",
      "Endovascular Aortic Repairs",
      "Repair, Endovascular Aortic",
      "Endovascular Stent Grafting"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A minimally invasive surgical technique to repair aneurysms through the lumen of a blood vessel.",
    "arabic_definition": "إصلاح أم الدم داخل الوعائي، هو نوع من الجراحة داخل الوعائية يستخدم لعلاج الآفات المرضية في الشريان الأبهر، وبالأخص أم الدم الأبهرية البطنية (أيه أيه أيه). حين تستخدم لعلاج آفة في الأبهر الصدري، يطلق على هذا الإجراء بالتحديد مصطلح تي إي فّي أيه آر، أي «إصلاح أم دم الأبهر الصدري داخل الوعائي». (Endovascular Aneurysm Repair)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000094682.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enzymes",
    "term_en": "Enzymes",
    "term_ar": "إنزيم",
    "synonyms": [
      "Biocatalyst",
      "Enzyme",
      "Biocatalysts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Biological molecules that possess catalytic activity. They may occur naturally or be synthetically created. Enzymes are usually proteins, however CATALYTIC RNA and CATALYTIC DNA molecules have also been identified.",
    "arabic_definition": "الإنزيمات أو الأنزومات هي محفِّزاتٌ بيولوجية جزيئة بروتينة. تسرِّعُ التفاعلات الكيميائية. (Enzymes)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004798.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glutens",
    "term_en": "Glutens",
    "term_ar": "غلوتين",
    "synonyms": [
      "Gluten Protein",
      "Protein, Gluten",
      "Gluten",
      "Gluten Proteins",
      "Glutelins",
      "Glutelin",
      "Secalins",
      "Secalin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Prolamins in the endosperm of SEEDS from the Triticeae tribe which includes species of WHEAT; BARLEY; and RYE.",
    "arabic_definition": "الغلوتين أو الدابوق أو الزُّلال النباتي أو المعمعون (اللاتينية: gluten، ت.ح.: 'غراء')، هو مركب بروتيني عبارة عن خليط من مادتي الغلوتنين والغليادين، وهي تشكل 80% من البروتين الموجود في بذرة القمح. يتواجد بنسب معينة في دقيق القمح. (Glutens)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005983.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gelatin",
    "term_en": "Gelatin",
    "term_ar": "جيلاتين",
    "synonyms": [
      "Gelafusal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A product formed from skin, white connective tissue, or bone COLLAGEN. It is used as a protein food adjuvant, plasma substitute, hemostatic, suspending agent in pharmaceutical preparations, and in the manufacturing of capsules and suppositories.",
    "arabic_definition": "الجيلاتين (الإنجليزية: Gelatin) من اللاتينية: gelatus = القاسية، أو المجمدة هي مادة هلامية شبه صلبة وشفافة وفي بعض اللأحيان تميل للون الأصفر، عديمة الطعم والرائحة موجودة في الحيوانات خاصة جلد الخنزير، وتتكون مع الغلي المستمر لأنسجة حيوانية أو نباتية. ولهذا نجد جيلاتين حيواني يتكون عادة من غلي سيقان الأبقار والمواشي وجلود الخنازير والجيلاتين النباتي يتكون عن طريق غلي بعض الطحالب البحرية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005780.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ligases",
    "term_en": "Ligases",
    "term_ar": "ليغاز",
    "synonyms": [
      "Ligase",
      "Synthetase",
      "Synthetases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of enzymes that catalyze the formation of a bond between two substrate molecules, coupled with the hydrolysis of a pyrophosphate bond in ATP or a similar energy donor. (Dorland, 28th ed) EC 6.",
    "arabic_definition": "في الكيمياء الحيوية، الليغاز (الاسم العلمي: ligase) أحد أنواع الإنزيمات التي تقوم بإنشاء رابطة كيميائية بين مركبين كيميائيين مشكلةً مركب كيميائي واحد. عادةً ما يحصل أثناء التفاعل حلمهة لأحد المركبين بفصل مجموعة وظيفية عنه. (Ligases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008025.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactase",
    "term_en": "Lactase",
    "term_ar": "لكتاز",
    "synonyms": [
      "Lactose Galactohydrolase",
      "Galactohydrolase, Lactose"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme which catalyzes the hydrolysis of LACTOSE to D-GALACTOSE and D-GLUCOSE. Defects in the enzyme cause LACTOSE INTOLERANCE.",
    "arabic_definition": "اللَّكتاز أو اللَّبنَاز أنزيمة في المعى الدقيق وفي الكبد والكليتين تساعد على تحويل اللَّكتوز إلى غلوكوز. يُفرَز عندما تستهلك الثدييات الحليب، حيث أنه العنصر الرئيس في عملية هضم الحليب لديها. (Lactase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D043322.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trypsin",
    "term_en": "Trypsin",
    "term_ar": "تربسين",
    "synonyms": [
      "Tripcellim",
      "beta-Trypsin",
      "Trypure"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A serine endopeptidase that is formed from TRYPSINOGEN in the pancreas. It is converted into its active form by ENTEROPEPTIDASE in the small intestine. It catalyzes hydrolysis of the carboxyl group of either arginine or lysine. EC 3.4.21.4.",
    "arabic_definition": "التربسين ( ر.ت.إ 3.4.21.4 ) هو بروتييز سيرين من فصيلة عشيرة PA الفائقة، موجود في الجهاز الهضمي للعديد من الفقاريات، حيث يحلل البروتينات. يتشكل التربسين في الأمعاء الدقيقة عندما يتم تنشيط شكل إنزيمه التربسينوجين الذي ينتجه البنكرياس. (Trypsin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014357.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "caseins",
    "term_en": "Caseins",
    "term_ar": "كازين",
    "synonyms": [
      "Casein",
      "alpha(S2)-Casein",
      "alpha-Caseins",
      "alpha-Casein",
      "beta-Caseins",
      "beta-Casein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mixture of related phosphoproteins occurring in milk and cheese. The group is characterized as one of the most nutritive milk proteins, containing all of the common amino acids and rich in the essential ones.",
    "arabic_definition": "الكَازين أو الجُبْنين أو الدَّوْغ (الإنجليزية: Casein)، وهو البروتين الرئيسي الذي يستخرج من اللبن، ويشكل العنصر الأساسي في الجبن. وينفصل الجبنين في شكل لبن رائب لدى تخثر الحليب أو إضافة الحمض إليه. (Caseins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002364.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amyloid",
    "term_en": "Amyloid",
    "term_ar": "نشواني",
    "synonyms": [
      "Amyloid Substance",
      "Substance, Amyloid",
      "Amyloid Fibrils",
      "Fibrils, Amyloid",
      "Amyloid Fibril",
      "Fibril, Amyloid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A fibrous protein complex that consists of proteins folded into a specific cross beta-pleated sheet structure. This fibrillar structure has been found as an alternative folding pattern for a variety of functional proteins. Deposits of amyloid in the form of AMYLOID PLAQUES are associated with a variety of degenerative diseases. The amyloid structure has also been found in a number of functional proteins that are unrelated to disease.",
    "arabic_definition": "النشوانيات هي تجمعات من البروتينات التي تتميز بمورفولوجيا ليفية يبلغ قطرها 7-13 نانومتر، وببنية ثانية من صحيفة بيتا، بالإضافة إلى إمكانية صبغها عبر صبغات محددة، مثل أحمر الكونغو. في جسم الإنسان، ارتبطت النشوانيات بتطور الأمراض المختلفة. (Amyloid)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000682.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lectins",
    "term_en": "Lectins",
    "term_ar": "ليكتين",
    "synonyms": [
      "Lectin",
      "Isolectins",
      "Isolectin",
      "Animal Lectins",
      "Lectins, Animal",
      "Animal Lectin",
      "Lectin, Animal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Proteins that share the common characteristic of binding to carbohydrates. Some ANTIBODIES and carbohydrate-metabolizing proteins (ENZYMES) also bind to carbohydrates, however they are not considered lectins. PLANT LECTINS are carbohydrate-binding proteins that have been primarily identified by their hemagglutinating activity (HEMAGGLUTININS). However, a variety of lectins occur in animal species where they serve diverse array of functions through specific carbohydrate recognition.",
    "arabic_definition": "اللِيكْتِين (ج: اللِيكْتِينات) (الإنجليزية: Lectin) هو بروتين معقد أو بروتين سكري يربط هياكل كربوهيدرات محددة وهذا يعطيه القدرة على ربط خلايا أو أغشية خلوية واحداث التفاعلات الكيميائية الحيوية من هناك. على الرغم من ان هذه البروتينات قادرة على بدأ مجموعة من التفاعلات، الا إنها لا تمارس أي نشاط انزيمي. (Lectins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D037102.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myosins",
    "term_en": "Myosins",
    "term_ar": "ميوسين (بروتين)",
    "synonyms": [
      "Actin-Activated ATPase",
      "Adenosine Triphosphatase, Myosin",
      "Myosin Adenosine Triphosphatase",
      "Adenosinetriphosphatase, Myosin",
      "ATPase, Actin-Activated",
      "ATPase, Myosin",
      "Myosin",
      "Myosin Adenosinetriphosphatase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A diverse superfamily of proteins that function as translocating proteins. They share the common characteristics of being able to bind ACTINS and hydrolyze MgATP. Myosins generally consist of heavy chains which are involved in locomotion, and light chains which are involved in regulation. Within the structure of myosin heavy chain are three domains: the head, the neck and the tail. The head region of the heavy chain contains the actin binding domain and MgATPase domain which provides energy for locomotion. The neck region is involved in binding the light-chains. The tail region provides the anchoring point that maintains the position of the heavy chain. The superfamily of myosins is organized into structural classes based upon the type and arrangement of the subunits they contain.",
    "arabic_definition": "الميوزين أو الميوسين أو العضلين (الإنجليزية: Myosin) هي عائلة كبيرة من البروتينات المحركة الموجودة في أنسجة حقيقيات النوى. هذه العائلة لها وظيفة في تحريك العضلات. (Myosins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009218.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "serpins",
    "term_en": "Serpins",
    "term_ar": "سربين",
    "synonyms": [
      "Serpin",
      "Serpin Protease Inhibitors",
      "Inhibitors, Serpin Protease",
      "Protease Inhibitors, Serpin",
      "Serpin Peptidase Inhibitors",
      "Inhibitors, Serpin Peptidase",
      "Peptidase Inhibitors, Serpin",
      "Serpin Superfamily"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of serine proteinase inhibitors which are similar in amino acid sequence and mechanism of inhibition but differ in their specificity toward proteolytic enzymes. Some members of the serpin family may be substrates rather than inhibitors of SERINE ENDOPEPTIDASES.",
    "arabic_definition": "السربين هي مجموعة من البروتينات ذات الهياكل المتماثلة والتي تم تحديدها أولا أنها مجموعة من البروتينات القادرة على تثبيط البروتياز (البيتيداز)، وقد اُبتكرت ترخيمة السربين لأن العديد من السربينات تثبط الكيموتربسين (أنزيم بيتيدي بنكرياسي) مثل سيرين البورتياز (مثبطات سيرين البورتياز). كانت أول أفراد فصيلة السربين تدرس بشكل واسع هي: بروتينات البلازما البشرية أنتي ثرومبين وأنتي تريبسين، واللتان تلعبان دورا رئيسيا في السيطرة على تخثر الدم والالتهابات على التوالي (مثال: الشكل 1). (Serpins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015843.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tubulin",
    "term_en": "Tubulin",
    "term_ar": "تيوبيولين",
    "synonyms": [
      "alpha-Tubulin",
      "beta-Tubulin",
      "gamma-Tubulin",
      "delta-Tubulin",
      "epsilon-Tubulin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A microtubule subunit protein found in large quantities in mammalian brain. It has also been isolated from SPERM FLAGELLUM; CILIA; and other sources. Structurally, the protein is a dimer with a molecular weight of approximately 120,000 and a sedimentation coefficient of 5.8S. It binds to COLCHICINE; VINCRISTINE; and VINBLASTINE.",
    "arabic_definition": "تيوبيولين أو تويولين (الإنجليزية: Tubulin) هو بروتين ينتمي إلى أسرة صغيرة من البروتينات الكروية. وتشمل فصيلة التويولين عددة أسر متميزة، وهي:توبيولين ألفا، توبيولين بيتا، توبيولين غاما، توبيولين دلتا، توبيولين إبسيلون- والأسرة السادسة (توبيولين زيتا) التي هي موجودة فقط في ذوات منشأ الحركة البروتوزوا.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014404.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dyneins",
    "term_en": "Dyneins",
    "term_ar": "داينين",
    "synonyms": [
      "Dynein",
      "Adenosine Triphosphatase, Dynein",
      "Dynein Adenosine Triphosphatase",
      "Adenosinetriphosphatase, Dynein",
      "Dynein Adenosinetriphosphatase",
      "ATPase, Dynein",
      "Dynein ATPase",
      "Dynein Heavy Chains"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of multi-subunit cytoskeletal motor proteins that use the energy of ATP hydrolysis, generated by a ring of AAA ATPASES in the dynein heavy chain, to power a variety of cellular functions. Dyneins fall into two major classes based upon structural and functional criteria.",
    "arabic_definition": "الداينين (الإنجليزية: Dynein) هي عائلة من بروتينات الهيكل الخلوي المحركة التي تتحرك على طول الأنيبيبات الدقيقة في الخلايا، وتقوم بتحويل الطاقة الكيميائية المخزنة في جزيئات الـATP إلى جهد ميكانيكي. ينقل الداينين مختلف الشحنات الخلوية، ويوفر قوى وإزفاءات مهمة في التفتل وهي مسؤولة عن حركة الأهداب والأسواط الخاصة بحقيقيات النوى. (Dyneins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004398.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cyclins",
    "term_en": "Cyclins",
    "term_ar": "سيكلين",
    "synonyms": [
      "Cyclin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A large family of regulatory proteins that function as accessory subunits to a variety of CYCLIN-DEPENDENT KINASES. They generally function as ENZYME ACTIVATORS that drive the CELL CYCLE through transitions between phases. A subset of cyclins may also function as transcriptional regulators.",
    "arabic_definition": "السيكلين (الإنجليزية: Cyclin) هي عائلة بروتينية مسؤولة عن التحكم في عملية تطور الخلايا خلال الدورة الخلوية عن طريق تنشيط إنزيمات الكيناز المعتمدة على السيكلين (CDK). (Cyclins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016213.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acrosin",
    "term_en": "Acrosin",
    "term_ar": "أكروزين",
    "synonyms": [
      "Acrosomal proteinase",
      "proteinase, Acrosomal",
      "Akrosin",
      "M beta-Acrosin",
      "beta-Acrosin, M"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A trypsin-like enzyme of spermatozoa which is not inhibited by alpha 1 antitrypsin.",
    "arabic_definition": "أكروزين(الإنجليزية: Acrosin) هو إنزيم بروتيني هضمي، ينتمي إلى عائلة البروتيناز يتواجد في رأس النطفة، ويسهام في ادخالها في المنطقة الشفافة للبيضة. يتم تحرير الاكروزين من خلال تفاعل جسيم طرفي في الحيوانات المنوية، مما يساعد في التغلغل المنطقة الشفافة.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000176.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sucrase",
    "term_en": "Sucrase",
    "term_ar": "سكراز",
    "synonyms": [
      "Sucrose alpha-D-Glucohydrolase",
      "alpha-D-Glucohydrolase, Sucrose",
      "Mutansucrase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Digestive enzyme secreted in the INTESTINES. It catalyzes hydrolysis of SUCROSE to FRUCTOSE and GLUCOSE.",
    "arabic_definition": "السكراز هو اسم جامع يطلق على مجموعة من الإنزيمات التي تحفز التحلل المائي للسكروز إلى سكر الفواكه والجلوكوز. والإنفرتاز، والذي يحدث أكثر شيوعا في النباتات، كما في التحلل المائي للسكروز ولكن من خلال آلية مختلفة. (Sucrase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013393.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "opsins",
    "term_en": "Opsins",
    "term_ar": "أوبسين",
    "synonyms": [
      "Opsin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Photosensitive proteins in the membranes of PHOTORECEPTOR CELLS such as the rods and the cones. Opsins have varied light absorption properties and are members of the G-PROTEIN-COUPLED RECEPTORS family. Their ligands are VITAMIN A-based chromophores.",
    "arabic_definition": "أوبسين (بالإنجليزية: Opsine) أو الأوبسينات هي مجموعة من مستقبلات الضوء الموجودة في العين مكونة من بروتينات الشبكية. تتكون تلك البروتينات الحساسة للضوء من نحو 35 - 55 ألف وحدة كتل ذرية وهي تكون مرتبطة في أغشية مستقبلات مقترنة بالبروتين ج. (Opsins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055355.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gliadin",
    "term_en": "Gliadin",
    "term_ar": "غليادين",
    "synonyms": [
      "alpha-Gliadin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Simple protein, one of the prolamines, derived from the gluten of wheat, rye, etc. May be separated into 4 discrete electrophoretic fractions. It is the toxic factor associated with CELIAC DISEASE.",
    "arabic_definition": "الغليادين (Gliadin) هو بروتين سكري من فئة البرولامينات يوجد في الحبوب وخاصة القمح ويساهم في حدوث الالتهابات المعوية لدى المرضى المصابين بداء بطني وتسبب حالة اعتلال معوي بسبب الغليادين. المكون الأساسي له عو البرولامين (prolamins) ويتم فصله على أساس التنقل الكهربي وبأر متساوي التكهرب.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005903.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laccase",
    "term_en": "Laccase",
    "term_ar": "لاكاز",
    "synonyms": [
      "p-Diphenol Oxidase",
      "Oxidase, p-Diphenol",
      "Urishiol Oxidase",
      "Oxidase, Urishiol",
      "Laccase B",
      "Laccase I",
      "Laccase II",
      "Laccase III"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A copper-containing oxidoreductase enzyme that catalyzes the oxidation of 4-benzenediol to 4-benzosemiquinone. It also has activity towards a variety of O-quinols and P-quinols. It primarily found in FUNGI and is involved in LIGNIN degradation, pigment biosynthesis and detoxification of lignin-derived products.",
    "arabic_definition": "إنزيمات لاكاز هي صنف من إنزيمات الأكسيداز التي توجد في النباتات والفطريات والبكتريا، وتقوم بأكسدة عدد من الركازات الفينولية والعديد من تفاعلات الأكسدة أحادية الإلكترون مما يؤدي عموماً إلى التشابك. ويلاحظ ذلك بشكل واضح في تشكل الليغنين من أكسدة أحاديات الليغنول، وهي صنف من الفينولات الطبيعية. (Laccase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042845.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "collagen",
    "term_en": "Collagen",
    "term_ar": "كولاجين",
    "synonyms": [
      "Collagen Felt",
      "Collagen Fleece",
      "Collagenfleece",
      "Microfibril Collagen Hemostat",
      "Collagen Hemostat, Microfibril",
      "Avicon",
      "Avitene",
      "Collastat"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A polypeptide substance comprising about one third of the total protein in mammalian organisms. It is the main constituent of SKIN; CONNECTIVE TISSUE; and the organic substance of bones (BONE AND BONES) and teeth (TOOTH).",
    "arabic_definition": "الكولاجين أو مولد الهلام هو البروتين الرئيسي في الأنسجة الضامة في العضلات والجلد والأربطة والغضاريف والعظام والأنسجة، ويشكل نسبة كبيرة تصل إلى 25% من مجمل البروتينات في الثدييات وبعض الأحياء الأخرى. بروتينات الكولاجين لها تركيب ليفي طويل ووظيفتها تختلف عن البروتينات الكروية والأنزيمات الأخرى. (Collagen)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003094.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "histones",
    "term_en": "Histones",
    "term_ar": "هستون",
    "synonyms": [
      "Histone",
      "Histone H1(s)",
      "Histone H2a",
      "Histone H3",
      "Histone H4",
      "Histone H5",
      "Histone H7",
      "Histone H2b"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Small chromosomal proteins (approx 12-20 kD) possessing an open, unfolded structure and attached to the DNA in cell nuclei by ionic linkages. Classification into the various types (designated histone I, histone II, etc.) is based on the relative amounts of arginine and lysine in each.",
    "arabic_definition": "الهِستونات، في علم الأحياء، هو بروتينات قلويه (قاعدية) تساعد في تنظيم تركيب ال DNA داخل انوية الخلايا حقيقية النواة. تتواجد الهستونات ضمن صبغيات الخلايا حقيقية النوى، ولا تتواجد عند الجراثيم، لكنها مع ذلك تتواجد عند بعض الجراثيم القديمة (عتائق). (Histones)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006657.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "catalase",
    "term_en": "Catalase",
    "term_ar": "كاتالاز",
    "synonyms": [
      "Catalase A",
      "Catalase T",
      "Mn Catalase",
      "Manganese Catalase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An oxidoreductase that catalyzes the conversion of HYDROGEN PEROXIDE to water and oxygen. It is present in many animal cells. A deficiency of this enzyme results in ACATALASIA.",
    "arabic_definition": "كاتالاز أو كاتاليز (الإنجليزية: Catalase) هو إنزيم منتشر في الكائنات الحية. تتضمن وظائفه تحفيز تحلل بيروكسيد الهيدروجين إلى ماء وأكسجين.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002374.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "keratins",
    "term_en": "Keratins",
    "term_ar": "كيراتين",
    "synonyms": [
      "Cytokeratin",
      "Keratin",
      "Keratin-Associated Proteins",
      "Keratin Associated Protein",
      "Associated Protein, Keratin",
      "Protein, Keratin Associated",
      "alpha-Keratin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of fibrous proteins or scleroproteins that represents the principal constituent of EPIDERMIS; HAIR; NAILS; horny tissues, and the organic matrix of tooth ENAMEL. Two major conformational groups have been characterized, alpha-keratin, whose peptide backbone forms a coiled-coil alpha helical structure consisting of TYPE I KERATIN and a TYPE II KERATIN, and beta-keratin, whose backbone forms a zigzag or pleated sheet structure. alpha-Keratins have been classified into at least 20 subtypes. In addition multiple isoforms of subtypes have been found which may be due to GENE DUPLICATION.",
    "arabic_definition": "الكيراتين عائلة من البروتينات الليفية وهي صلبة وعديمة الذوبان موجودة لدى الزواحف والطيور والبرمائيات والثدييات وتدخل بشكل أساسي في تكوين الشعر والصوف والأظافر والمخالب والجلد ومينا الأسنان والحوافر والقرون لا يضاهيها في الصلابة من بين المواد الحيوية سوى الكيتين. (Keratins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007633.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orexins",
    "term_en": "Orexins",
    "term_ar": "أوركسين",
    "synonyms": [
      "Hypocretin",
      "Orexin",
      "Hypocretins",
      "Orexin-A",
      "Hypocretin-1",
      "Orexin-B",
      "Hypocretin-2"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Neuropeptide hormones that play a role in regulating a variety of behavioral and physiological processes in response to motivational stimuli.",
    "arabic_definition": "الأوركسين (الإنجليزية: Orexin) هو ناقل عصبي تنشيطي أو تنبيهي يتم إنتاجه في منطقة الوطاء. الأوركسين له أهمية طبية لأن مرض التغفيق (بالإنجليزية: Narcolepsy) يفسر على أنه نتيجة لنقص إفراز مادة الأوركسين أو نتيجة خلل في المستقبل لمادة الأوركسين ولهذا يصاب الإنسان بحالة نعاس دائمة. (Orexins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000068797.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clathrin",
    "term_en": "Clathrin",
    "term_ar": "كلاثرين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The main structural coat protein of COATED VESICLES which play a key role in the intracellular transport between membranous organelles. Each molecule of clathrin consists of three light chains (CLATHRIN LIGHT CHAINS) and three heavy chains (CLATHRIN HEAVY CHAINS) that form a structure called a triskelion. Clathrin also interacts with cytoskeletal proteins.",
    "arabic_definition": "الكلاثرين (الإنجليزية: Clathrin) هو بروتين يلعب دورًا رئيسيًا في تكون الحويصلات المُغلفة. عُزلَ الكلاثرين لأول مرة في عام 1976 بواسطة باربرا بيرس والتي أطلقت عليه هذا الاسم أيضًا.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002966.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arginase",
    "term_en": "Arginase",
    "term_ar": "أرجيناز",
    "synonyms": [
      "Hepatic Proliferation Inhibitor",
      "Inhibitor, Hepatic Proliferation",
      "Proliferation Inhibitor, Hepatic",
      "Liver Immunoregulatory Protein",
      "Immunoregulatory Protein, Liver",
      "Protein, Liver Immunoregulatory",
      "Liver-Derived Inhibitory Protein",
      "Inhibitory Protein, Liver-Derived"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A ureahydrolase that catalyzes the hydrolysis of arginine or canavanine to yield L-ornithine (ORNITHINE) and urea. Deficiency of this enzyme causes HYPERARGININEMIA. EC 3.5.3.1.",
    "arabic_definition": "الأرجيناز (الأرجنين) أو أرجينيز هو الإنزيم المحتوي على المنغنيز. يتم التفاعل المحفز بواسطة هذا الإنزيم بالشكل التالي: أرجينين + H 2 O ← أورينيثين + يوريا. (Arginase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001119.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "protein-splicing",
    "term_en": "Protein Splicing",
    "term_ar": "تجديل البروتين",
    "synonyms": [
      "Protein Splicings",
      "Splicing, Protein",
      "Splicings, Protein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The excision of in-frame internal protein sequences (INTEINS) of a precursor protein, coupled with ligation of the flanking sequences (EXTEINS). Protein splicing is an autocatalytic reaction and results in the production of two proteins from a single primary translation product: the intein and the mature protein.",
    "arabic_definition": "تجديل البروتين (الإنجليزية: Protein splicing) هي تفاعل داخل جزيئة بروتين معين حيت تزال قطعة بروتين داخلية تدعى إنتئين من بروتين طليعي مع ربط الطرف الكربوكسيلي والطرف الأميني للبروتين الخارجي الذي يدعى إكستئين على الجهتين. غالبا ما يكون رابط تجديل البروتين الطليعي سيستئين أو سيرين، وهي أحماض أمينية تحوي سلسلة جانبية محبة للنواة.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019154.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "albumins",
    "term_en": "Albumins",
    "term_ar": "ألبومين",
    "synonyms": [
      "Albumin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Water-soluble proteins found in egg whites, blood, lymph, and other tissues and fluids. They coagulate upon heating.",
    "arabic_definition": "الألبومين أو الآحين أو الزُّلال (الإنجليزية: Albumin) هي عائلة من البروتينات الكروية، وأشهرها ألبومينات المصل. إن جميع بروتينات عائلة الألبومين تكون منحلة بالماء، وتنحل بشكل معتدل في المحاليل الملحية، وتتمسّخ بالحرارة. (Albumins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000418.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colicins",
    "term_en": "Colicins",
    "term_ar": "كوليسين",
    "synonyms": [
      "Colicines",
      "Colicin",
      "Colicine",
      "Colicin B",
      "Colicin E1",
      "Colicin E2",
      "Colicin E3",
      "Colicin HSC10"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bacteriocins elaborated by strains of Escherichia coli and related species. They are proteins or protein-lipopolysaccharide complexes lethal to other strains of the same species.",
    "arabic_definition": "كُولِيسين (بالانجليزية: colicin) هو نوع من المبيدات الجرثومية والبكتيرية يقتل أو يثبط نمو الجراثيم والبكتيريا التي تنتجها بعض سلالات الإشريكية القولونية. يتم إطلاق كوليسين في البيئة لتقليل تكاثر السلالات البكتيرية الأخرى. (Colicins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003087.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "basigin",
    "term_en": "Basigin",
    "term_ar": "باسيجين",
    "synonyms": [
      "Extracellular Matrix Metalloproteinase Inducer (EMMPRIN)",
      "Emmprin Protein",
      "CD147 Antigen",
      "Antigen, CD147",
      "Emmprin",
      "Basigin Protein",
      "Antigens, CD147",
      "CD147 Antigens"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A widely distributed cell surface transmembrane glycoprotein characterized by extracellular IMMUNOGLOBULIN DOMAINS. It stimulates the synthesis of MATRIX METALLOPROTEINASES and is found at high levels on the surface of malignant NEOPLASMS where it may play a role as a mediator of malignant cell behavior.",
    "arabic_definition": "بروتين باسيجين (بي إس جي) والمعروف أيضًا باسم محفز البروتيناز الفلزي للمطرس خارج الخلوي (إي إم إم بي آر آي إن) أو عنقود التمايز 147 (سي دي 147) هو بروتين بشري يُرمز له بالـمورثة بي إس جي. ويُعد هذا البروتين محددًا لنظام الزُّمَرِة الدموية أوه كيه، وقد اتضح أن بروتين باسيجين مستقبل أساسي في خلايا الدم الحمراء لطفيلي الملاريا البشري (المتصورة المنجلية). (Basigin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051926.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteins",
    "term_en": "Proteins",
    "term_ar": "بروتين",
    "synonyms": [
      "Protein",
      "Gene Products, Protein",
      "Protein Gene Products",
      "Gene Proteins",
      "Proteins, Gene"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Linear POLYPEPTIDES that are synthesized on RIBOSOMES and may be further modified, crosslinked, cleaved, or assembled into complex proteins with several subunits. The specific sequence of AMINO ACIDS determines the shape the polypeptide will take, during PROTEIN FOLDING, and the function of the protein.",
    "arabic_definition": "البروتينات أو بوليمرات حيوية بروتينية هي جزيئات حيوية ضخمة تتكون من سلسلة أو أكثر من الأحماض الأمينية. تتركب كيميائياً من الكربون،الهيدروجين والنتروجين كمكونات أساسية بينما الفسفور والكبريت كمكونات ثانوية. (Proteins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011506.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteome",
    "term_en": "Proteome",
    "term_ar": "بروتيوم",
    "synonyms": [
      "Proteomes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The protein complement of an organism coded for by its genome.",
    "arabic_definition": "يستخدم مصطلح المحتوى البروتيني أو البروتيوم (الإنجليزية: Proteome) للإشارة إلى مجموعة البروتينات التي يتم التعبير عنها في خلية، أو جزء من الخلية (أغشية، عضيات أو غيرها) أو مجموعة من الخلايا (عضو، كائن حي أو مجموعة من الكائنات) في ظروف معينة وفي لحظة معينة.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020543.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peptones",
    "term_en": "Peptones",
    "term_ar": "ببتيد",
    "synonyms": [
      "Peptone",
      "Peptide"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Derived proteins or mixtures of cleavage products produced by the partial hydrolysis of a native protein either by an acid or by an enzyme. Peptones are readily soluble in water, and are not precipitable by heat, by alkalis, or by saturation with ammonium sulfate. (Dorland, 28th ed)",
    "arabic_definition": "الببتيد هو سلسلة أحماض أمينية. الرابطة الببتيدية هي رابطة كيميائية تنشأ بين الأحماض الأمينية لتكوين البروتينات المختلفة وهي من الروابط القوية في البناء البروتيني. (Peptones)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010461.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salinity",
    "term_en": "Salinity",
    "term_ar": "ملوحة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Degree of saltiness, which is largely the OSMOLAR CONCENTRATION of SODIUM CHLORIDE plus any other SALTS present. It is an ecological factor of considerable importance, influencing the types of organisms that live in an ENVIRONMENT.",
    "arabic_definition": "الملوحة هي محتوى الملح الذائب في الماء. وهو مصطلح عام يستخدم لوصف مستويات الأملاح المختلفة مثل كلوريد الصوديوم، وسلفات المغنزيوم، وكبريتات الكالسيوم، وأملاح البيكربونات المختلفة. (Salinity)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054712.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chymosin",
    "term_en": "Chymosin",
    "term_ar": "كيموسين",
    "synonyms": [
      "Rennin",
      "Chymosin A",
      "Chymosin C"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The predominant milk-clotting enzyme from the true stomach or abomasum of the suckling calf. It is secreted as an inactive precursor called prorennin and converted in the acid environment of the stomach to the active enzyme. EC 3.4.23.4.",
    "arabic_definition": "إنزيم الكيموسين (الإنجليزية: Chymosin) يسمى أيضاً الرينين (الإنجليزية: Rennin): هو أحد إنزيمات الهضم الخمسة في المعدة وهي: (الإنجليزية: Rennin)، ببسين (الإنجليزية: Pepsin)، جاستريسين (الإنجليزية: Gastricsin)، كاتبسين D (الإنجليزية: Cathepsin D)، و كاتبسين E(الإنجليزية: Cathepsin E). إنزيم الرينين هاضم للمواد البروتينية ويسمى أيضاً الإنزيم المجبن للحليب، ويفرز من خلايا جدار معدة الأطفال والكبار ويوجد في معدة الحيونات المجترة من الثدييات.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012085.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thrombin",
    "term_en": "Thrombin",
    "term_ar": "ثرومبين",
    "synonyms": [
      "Thrombase",
      "beta,gamma-Thrombin",
      "beta-Thrombin",
      "gamma-Thrombin",
      "Thrombostat",
      "Thrombinar",
      "alpha-Thrombin",
      "Thrombin JMI"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme formed from PROTHROMBIN that converts FIBRINOGEN to FIBRIN.",
    "arabic_definition": "العامل الثاني (الإنجليزية: factor II) أو الثرومبين (الإنجليزية: Thrombin) أو الخثرين، رقمه الكيميائي (EC 3.4.21.5) وهو أحد البروتينات القابلة للذوبان، وهو بروتين مشابه للألبومين، له نشاط خثري قوي، عندما يضاف إلى الدم، أو إلى محاليل مولد الليفين. ويتكون خلال تخثر الدم من طليعة الخثرين، تحت تأثير الثرومبوبلاستين والكالسيوم، وربما عوامل أخرى في الدم.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013917.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "caspases",
    "term_en": "Caspases",
    "term_ar": "كاسبيز",
    "synonyms": [
      "Caspase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of intracellular CYSTEINE ENDOPEPTIDASES that play a role in regulating INFLAMMATION and APOPTOSIS. They specifically cleave peptides at a CYSTEINE amino acid that follows an ASPARTIC ACID residue. Caspases are activated by proteolytic cleavage of a precursor form to yield large and small subunits that form the enzyme. Since the cleavage site within precursors matches the specificity of caspases, sequential activation of precursors by activated caspases can occur.",
    "arabic_definition": "كاسبيز: هي إنزيمات «السيستين اسبارتك بروتييز» وهي تنتمي إلى عائلة الإنزيمات التي تؤدي دورا أساسيا في برمجة موت الخلايا من خلال تحفيز الكاسبيز بشكل مباشر أو نتيجة تحفيز الكاسبيز للاستجابة المناعية أو لعمليات الالتهاب. وقد سميت بالكاسبيز بسبب فعالية السيستين في الموقع النشط الذي يعمل كنيوكليوفيل أي محب للنواة ويعمل على كسر الرابطة الببتيدية بعد «الأسبارتك أسد» في سلسلة الببتيد أو البروتين. (Caspases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020169.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "troponin",
    "term_en": "Troponin",
    "term_ar": "تروبونين",
    "synonyms": [
      "Troponins",
      "Troponin Complex"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of the minor protein components of skeletal and cardiac muscles. It functions as the calcium-binding component in a complex with BETA-TROPOMYOSIN; ACTIN; and MYOSIN and confers calcium sensitivity to the cross-linked actin and myosin filaments. Troponin itself is a complex of three regulatory proteins (TROPONIN C; TROPONIN I; and TROPONIN T).",
    "arabic_definition": "تروبونين (الإنجليزية: Troponin) أو مركب التروبونين (الإنجليزية: troponin complex) هو مركب من ثلاثة بروتينات تنظيمية (تروبونين سي، تروبونين I، وتروبونين تي) تعتبر جزءًا لا يتجزأ من الانقباض العضلي في العضلات الهيكلية والعضلة القلبية، وليس العضلات الملساء. غالبًا ما تتعلق مناقشات التروبونين بخصائصه الوظيفية وفائدته كدلالة تشخيصية أو هدف علاجي لمختلف اضطرابات القلب، وخاصة كعلامة محددة للغاية في حلات احتشاء عضلة القلب أو موت خلايا عضلة القلب.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014336.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kinesins",
    "term_en": "Kinesins",
    "term_ar": "كينيسن",
    "synonyms": [
      "Kinesin Superfamily",
      "Superfamily, Kinesin",
      "Kinesin",
      "Kinesin Light-Chain Proteins",
      "Light-Chain Proteins, Kinesin",
      "Proteins, Kinesin Light-Chain",
      "Kinesin Light-Chain Protein",
      "Light-Chain Protein, Kinesin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of microtubule-associated mechanical adenosine triphosphatases, that uses the energy of ATP hydrolysis to move organelles along microtubules including mitosis, meiosis, and axonal transport.",
    "arabic_definition": "الكينيسن أو الشيّال، هو بروتين ينتمي إلى فئة البروتينات الحركية الموجودة في الخلايا حقيقية النواة. يتحرك الكينسين على الأنيبيبات الدقيقة، ويبدأ عمله بالطاقة الناتجة عن تكسر جزيء أدينوسين ثلاثي الفوسفات، وعليه فإن حركة بروتين الكينيسن النشطة، تدعم العديد من الوظائف الخلوية، بما في ذلك الانقسام المتساوي، والانقسام المنصف، والشحن الخلوي، كنقل السيالات العصبية. (Kinesins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016547.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "perforin",
    "term_en": "Perforin",
    "term_ar": "بيرفورين",
    "synonyms": [
      "Perforin 1",
      "Cytolysin",
      "Lymphocyte Pore-Forming Protein",
      "Pore-Forming Protein, Lymphocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A calcium-dependent pore-forming protein synthesized in cytolytic LYMPHOCYTES and sequestered in secretory granules. Upon immunological reaction between a cytolytic lymphocyte and a target cell, perforin is released at the plasma membrane and polymerizes into transmembrane tubules (forming pores) which lead to death of a target cell.",
    "arabic_definition": "بيرفورين (بالإنجليزية: Perforine أو PRF1 ) هو بروتين يوجد في حويصلات صغيرة جدا توجد في خلايا تي قاتلة من نوع (+ CD 8 ) و الخلايا الفاتكة الطبيعية ، ولها دور في نظام المناعة. عندما تفرز خلية تي قاتلة بيرفورين فهو يثقب غشاء الخلية المستهدفة الفتك وتحدث فيها ثقبا.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054353.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "melitten",
    "term_en": "Melitten",
    "term_ar": "مليتين",
    "synonyms": [
      "Mellitin",
      "Melittin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Basic polypeptide from the venom of the honey bee (Apis mellifera). It contains 26 amino acids, has cytolytic properties, causes contracture of muscle, releases histamine, and disrupts surface tension, probably due to lysis of cell and mitochondrial membranes.",
    "arabic_definition": "المليتين هو المكون الرئيسي (40-60% من الوزن الجاف) والمادة الرئيسية المسببة للألم في سم نحل العسل (Apis mellifera). و الميليتين هو ببتيد أساسي يتكون من 26 حمضًا أمينيًا. (Melitten)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008555.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vimentin",
    "term_en": "Vimentin",
    "term_ar": "فيمنتين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An intermediate filament protein found in most differentiating cells, in cells grown in tissue culture, and in certain fully differentiated cells. Its insolubility suggests that it serves a structural function in the cytoplasm. MW 52,000.",
    "arabic_definition": "الفيمنتين (الإنجليزية: Vimentin) نوع من أنواع البروتينات الخيطية المتوسطية (الإنجليزية: intermediate filament protein) المكونة لهيكل الخلية، وتبلغ الكتلة الجزيئية للفيمنتين البشري 53.689 دالتون، ويوجد الفيمنتين عادةً في سيتوبلازم الخلايا التي تنشأ من اللُّحْمَةُ المُتَوَسِّطَةُ (الإنجليزية: Mesenchym). الفيمنتين هو أكثر البروتينات الخيطية المتوسطية انتشارا.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014746.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "catenins",
    "term_en": "Catenins",
    "term_ar": "كاتينين",
    "synonyms": [
      "Catenin Proteins",
      "Catenin",
      "Catenin Protein",
      "Protein, Catenin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of cytoskeletal proteins that play essential roles in CELL ADHESION at ADHERENS JUNCTIONS by linking CADHERINS to the ACTIN FILAMENTS of the CYTOSKELETON.",
    "arabic_definition": "الكاتنين (الإنجليزية: Catenin) بروتينات سكرية حشوية يتواجد في صورة مركبة مع الكادهيرين، وهنالك منه ثلاثة أنواع: (Catenins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051177.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vinculin",
    "term_en": "Vinculin",
    "term_ar": "فينكولين",
    "synonyms": [
      "alpha-Vinculin",
      "beta-Vinculin",
      "Isovinculin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cytoskeletal protein associated with cell-cell and cell-matrix interactions. The amino acid sequence of human vinculin has been determined. The protein consists of 1066 amino acid residues and its gene has been assigned to chromosome 10.",
    "arabic_definition": "يوجد الفينكولين في خلايا الثدييّات وهو بروتين هيكلي خلوي يتوضّع في لويحات الالتصاق البؤريّة الّتي تكتنِف ارتباط جزيئات الالتصاق الإنتغرين بأكتين الهيكل الخلوي. تمّ اكتشافه بشكل مستقل بواسطة Benny Geiger و كيث بوريدج, سلسلته مشابهة بنسبة 20%-30% للكاتينين-α, الذي يقوم بذات الوظيفة. (Vinculin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016596.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spectrin",
    "term_en": "Spectrin",
    "term_ar": "سبكترين",
    "synonyms": [
      "alpha-Spectrin",
      "beta-Spectrin",
      "alpha-Fodrin",
      "beta-Fodrin",
      "beta1 sigma1-Spectrin",
      "Brain beta Spectrin",
      "Non-Erythroid Beta Spectrin",
      "Fodrin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A high molecular weight (220-250 kDa) water-soluble protein which can be extracted from erythrocyte ghosts in low ionic strength buffers. The protein contains no lipids or carbohydrates, is the predominant species of peripheral erythrocyte membrane proteins, and exists as a fibrous coating on the inner, cytoplasmic surface of the membrane.",
    "arabic_definition": "سبكترين هو بروتين هيكلي خلوي يبطن الجانب داخل الخلايا من غشاء البلازما في الخلايا حقيقية النواة. يشكل السبكترين ترتيبات خماسية أو سداسية، وتشكل سقالة وتلعب دورًا مهمًا في الحفاظ على سلامة غشاء البلازما وهيكل الهيكل الخلوي. (Spectrin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013049.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dynamins",
    "term_en": "Dynamins",
    "term_ar": "دينامين",
    "synonyms": [
      "Dephosphin",
      "Dynamin",
      "GTPase-Deficient Dynamin",
      "Dynamin, GTPase-Deficient",
      "Dynamin K44A",
      "Dynamin, Alanine44 Substituted With Lysine",
      "Dynamin, Mutated Form, K44A"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of high molecular weight GTP phosphohydrolases that play a direct role in vesicle transport. They associate with microtubule bundles (MICROTUBULES) and are believed to produce mechanical force via a process linked to GTP hydrolysis. This enzyme was formerly listed as EC 3.6.1.50.",
    "arabic_definition": "دينامين Dynamin هو GTPase المسؤول عن الالتقام في الخلية حقيقية النواة. الدينامين هو جزء من \" عائلة الدينامين الفائقة \" ، والتي تشمل الدينامينات الكلاسيكية ، والبروتينات الشبيهة بالدينامين ، وبروتينات Mx ، و OPA1 ، والميتوفوسين ، وGBPs . (Dynamins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034281.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sirtuins",
    "term_en": "Sirtuins",
    "term_ar": "سرتوين",
    "synonyms": [
      "SIRT",
      "Sirtuin",
      "SIRTs",
      "Silent Mating Type Information Regulator 2-like Proteins",
      "Sir2-like Proteins"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A homologous family of regulatory enzymes that are structurally related to the protein silent mating type information regulator 2 (Sir2) found in Saccharomyces cerevisiae. Sirtuins contain a central catalytic core region which binds NAD. Several of the sirtuins utilize NAD to deacetylate proteins such as HISTONES and are categorized as GROUP III HISTONE DEACETYLASES. Several other sirtuin members utilize NAD to transfer ADP-RIBOSE to proteins and are categorized as MONO ADP-RIBOSE TRANSFERASES, while a third group of sirtuins appears to have both deacetylase and ADP ribose transferase activities.",
    "arabic_definition": "السرتوينات (الاسم العلمي: Sirtuins) هي عائلة من بروتينات الإشارة تشارك في تنظيم التمثيل الغذائي. إنها قديمة في تطور الحيوانات ويبدو أنها تمتلك بنية محمية للغاية في جميع ممالك الحياة.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D037761.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arrestin",
    "term_en": "Arrestin",
    "term_ar": "أرستين",
    "synonyms": [
      "Retinal S-Antigen",
      "S-Antigen, Retinal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A 48-Kd protein of the outer segment of the retinal rods and a component of the phototransduction cascade. Arrestin quenches G-protein activation by binding to phosphorylated photolyzed rhodopsin. Arrestin causes experimental autoimmune uveitis when injected into laboratory animals.",
    "arabic_definition": "الارستين (اختصار Arr) هي عائلة صغيرة من البروتينات المهمة لتنظيم نقل الإشارة في المستقبلات المقترنة بالبروتين G. تم اكتشاف الارستسن لأول مرة كجزء من آلية محفوظة من خطوتين لتنظيم نشاط المستقبلات المقترنة بالبروتين (G (GPCRs) في نظام رودوبسين البصري بواسطة هيرمان كون وسكوت هول وأورسولا وايلدن وفي β- نظام الأدرينالية بواسطة Martin J. Lohse وزملاؤه. (Arrestin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019393.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myogenin",
    "term_en": "Myogenin",
    "term_ar": "ميوجينين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A myogenic regulatory factor that controls myogenesis. Myogenin is induced during differentiation of every skeletal muscle cell line that has been investigated, in contrast to the other myogenic regulatory factors that only appear in certain cell types.",
    "arabic_definition": "الميوجينين (الإنجليزية: Myogenin) ويعرف كذلك بعامل الميوجينيك 4 واختصارا MYOG هو جين يشفر عامل نسخ متخصص بالعضلات على شكل لولب-حلقة-لولب (bHLH) وله دور في تنسيق نمو العضلات الهيكلية وتكون العضلات وإصلاحها. الميوجينين فرد من عائلة MyoD من عوامل النسخ (en) والتي تشمل كذلك MyoD، MYF5 وMrf4.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018008.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sericins",
    "term_en": "Sericins",
    "term_ar": "سيريسين",
    "synonyms": [
      "Silk Gum Proteins",
      "Proteins, Silk Gum",
      "Sericin",
      "Sericin-1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A serine-rich sticky protein secreted by MOTHS. Generally, the term refers to silkworm silk gum protein secreted in the middle section of silk gland cells of SILKWORMS, Bombyx mori. Sericin acts as a cement and coating for the two fibroin filaments in a silk strand and is readily soluble in mild alkaline solution.",
    "arabic_definition": "السيريسين أو سرسين هو صمغ تفرزه دودة القز خلال إنتاجها للحرير الذي تبني به شرنقتها، ويتكون الحرير من بروتينين إثنين هما الفيبروين والسيريسين، وتبلغ نسبة الفيبروين 70 إلى 80 بالمائة وتتأرجح نسبة السيريسين بين 20 و30 بالمائة. يُشكل الفيبروين هيكل بنية الحرير بينما يشكل السيريسين طلاءً يربط الألياف ويجعلها تلتصق ببعضها. (Sericins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D047030.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "catalysis",
    "term_en": "Catalysis",
    "term_ar": "تحفيز",
    "synonyms": [
      "Catalyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The facilitation of a chemical reaction by material (catalyst) that is not consumed by the reaction.",
    "arabic_definition": "التَّحْفِيزُ أو الحَفْز هو استعمال مادة تسمى حَفَّاز وهي مادة كيميائية تضاف بكميات قليلة للتفاعل الكيميائي بهدف تسريع التفاعل دون أن تتغير خواص المواد الكيميائية بمعنى أنها قادرة على أن تزيد سرعة التفاعل الكيميائي عن طريق خفض طاقة التفاعل أو تنشيطه دون أن يحدث بها تغيير كيميائي دائم. يسمى الحفاز أيضا بالعامل المساعد والمحفز، وهو ذو أهمية في الكيمياء وعلم الأحياء. (Catalysis)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002384.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "corrosion",
    "term_en": "Corrosion",
    "term_ar": "تآكل",
    "synonyms": [
      "Corrosions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The gradual destruction of a metal or alloy due to oxidation or action of a chemical agent. (From McGraw-Hill Dictionary of Scientific and Technical Terms, 6th ed)",
    "arabic_definition": "التآكل، هو عملية طبيعية تقوم بتحويل المعدن المصقول إلى أكسيد أكثر استقرارًا كيميائيًا. وهو التدهور التدريجي للمواد (عادة المعادن) نتيجة تفاعل كيميائي أو كيميائي كهربائي مع البيئة المحيطة بها. (Corrosion)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003343.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cellulase",
    "term_en": "Cellulase",
    "term_ar": "سيللولاز",
    "synonyms": [
      "beta-1,4-Glucan-4-Glucanohydrolase",
      "Cellulysin",
      "Endo-1,4-beta-Glucanase",
      "Endoglucanase",
      "Endoglucanase A",
      "Endoglucanase C",
      "Endoglucanase E",
      "Endoglucanase Y"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An endocellulase with specificity for the hydrolysis of 1,4-beta-glucosidic linkages in CELLULOSE, lichenin, and cereal beta-glucans.",
    "arabic_definition": "السيليولاز أو انزيم سليوليز أو سيلوبيوز هو واحد من الأنزيمات المتعددة التي تولدها أساسًا الفطور والبكتيريا والكائنات الأولية التي تحفز السليولوليس (cellulolysis) الناتج عن تفكك السليولوز وبعض متعددات السكاريد، وخصوصًا تحلمه الرابطة الغلكوسيدية 1، 4-بيتا-D في السليولوز والهيميسليولوز والليكينين وبيتا غلوكان القمح. يفكك السليولاز جزيء السليولوز إلى سكاكر أحادية بسيطة مثل بيتا غلكوز أو إلى متعدد سكاريد أقصر وسكريات قليلة التعدد. (Cellulase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002480.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "globulins",
    "term_en": "Globulins",
    "term_ar": "غلوبيولين",
    "synonyms": [
      "Globulin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of proteins that are salt-soluble and form a large fraction of BLOOD PROTEINS. There are three types of globulins, ALPHA-GLOBULINS, BETA-GLOBULINS, and GAMMA-GLOBULINS, which are distinguished from one another by their degree of electrophoretic mobility.",
    "arabic_definition": "الغلوبيولين أو الجلوبيولين أو الغلوبولين (الإنجليزية: Globulin) هو أحد أنماط بروتينات بلازما الدم، إلى جانب الزلال (الألبومين). هذا النمط العام من البروتينات يتألف من سلسلة غير متجانسة من عائلات البروتينات، بالترافق مع جزيئات أكبر وأقل انحلالية مائية في الماء النقي مقارنة بالألبومين، هذه الخاصية تجعل الكريينات تهاجر بسرعة أقل من الزلاليات في الرحلان الكهربائي. (Globulins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005916.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flagellin",
    "term_en": "Flagellin",
    "term_ar": "فلاجيلين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A protein with a molecular weight of 40,000 isolated from bacterial flagella. At appropriate pH and salt concentration, three flagellin monomers can spontaneously reaggregate to form structures which appear identical to intact flagella.",
    "arabic_definition": "الفلاجيلين هو بروتين كروي يرتب نفسه في اسطوانة جوفاء على شكل خيوط في البكتيرية السوطية. كتلته من حوالي 30000 إلى 60000 دالتون. (Flagellin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005408.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coenzymes",
    "term_en": "Coenzymes",
    "term_ar": "عامل مرافق",
    "synonyms": [
      "Coenzyme",
      "Enzyme Cofactor",
      "Cofactor, Enzyme",
      "Cofactors, Enzyme",
      "Enzyme Cofactors",
      "Cofactor (biochemistry)",
      "عامل مرافق (كيمياء حيوية)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Small molecules that are required for the catalytic function of ENZYMES. Many VITAMINS are coenzymes.",
    "arabic_definition": "العامل المرافق أو تميم العامل أو العامل التميمي هو مركبات غير بروتينية ضرورية للنشاط البيولوجي للبروتينات. وهذه البروتينات هي عادة إنزيمات. (Coenzymes)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003067.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acylation",
    "term_en": "Acylation",
    "term_ar": "أسيلة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The addition of an organic acid radical into a molecule.",
    "arabic_definition": "الأَسْيَلَة (Acylation) في الكيمياء هي عملية إضافة مجموعة أسيل إلى مركب كيميائي. يسمى الكاشف الكيميائي الذي يقوم بهذه العملية باسم العامل المؤسيل.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000215.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coagulase",
    "term_en": "Coagulase",
    "term_ar": "كوأجيوليز",
    "synonyms": [
      "Staphylococcal Clumping Factor",
      "Clumping Factor, Staphylococcal",
      "Factor, Staphylococcal Clumping",
      "Staphylocoagulase",
      "Staphylococcus aureus clone pSCa2 of Coagulase",
      "Staphylococcus aureus strain 213 of Coagulase",
      "Staphylococcus aureus strain 8325-4 of Coagulase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that cause coagulation in plasma by forming a complex with human PROTHROMBIN. Coagulases are produced by certain STAPHYLOCOCCUS and YERSINIA PESTIS. Staphylococci produce two types of coagulase: Staphylocoagulase, a free coagulase that produces true clotting of plasma, and Staphylococcal clumping factor, a bound coagulase in the cell wall that induces clumping of cells in the presence of fibrinogen.",
    "arabic_definition": "كواجيوليز أو الخميرة المخثرة يكون عبارة عن بروتين يفرز من بعض الأحياء الدقيقة التي تكون قادرة على تحويل فايبرينوجين إلى فيبرين. في المختبر، هذا الانزيم يستحدم للتفرقة بين بعض الأنواع من بكتيريا العنقودية. (Coagulase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003030.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amination",
    "term_en": "Amination",
    "term_ar": "إضافة أمين",
    "synonyms": [
      "Aminations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The creation of an amine. It can be produced by the addition of an amino group to an organic compound or reduction of a nitro group.",
    "arabic_definition": "إضافة الأمين (أو الأَمْيَنَة Amination) عبارة عن تفاعل كيميائي يتم فيه إضافة مجموعة الأمين إلى مركب عضوي. لتفاعل إضافة الأمين أهمية حيوية وصناعية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000586.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aromatase",
    "term_en": "Aromatase",
    "term_ar": "أروماتاز",
    "synonyms": [
      "Estrogen Synthetase",
      "Estrogen Synthase",
      "Cytochrome P450 19",
      "CYP19",
      "Cytochrome P-450(AROM)",
      "CYP 19",
      "Cytochrome P-450 CYP19",
      "P450AROM"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme that catalyzes the desaturation (aromatization) of the ring A of C19 androgens and converts them to C18 estrogens. In this process, the 19-methyl is removed. This enzyme is membrane-bound, located in the endoplasmic reticulum of estrogen-producing cells of ovaries, placenta, testes, adipose, and brain tissues. Aromatase is encoded by the CYP19 gene, and functions in complex with NADPH-FERRIHEMOPROTEIN REDUCTASE in the cytochrome P-450 system.",
    "arabic_definition": "أروماتاز (الإنجليزية: Aromatase) وتسمى أيضا مخلقة هرمون الاستروجين أو هرمون الاستروجين سينسيز وهو انزيم موجود في الخلايا المنتجة للاستروجين في المبيض والمشيمة، والخصيتين، وفي الخلايا الدهنية، وأنسجة الدماغ.، يعمل على تحويل هرمونات الأندروجين إلى إستروجين الأندروجينات (التستوستيرون) .",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001141.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "esterases",
    "term_en": "Esterases",
    "term_ar": "إستراز",
    "synonyms": [
      "Esterase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any member of the class of enzymes that catalyze the cleavage of an ester bond and result in the addition of water to the resulting molecules.",
    "arabic_definition": "الإستراز أو الإستيراز هو إنزيم هيدروليز ينقسم الإسترات إلى حمض وكحول في تفاعل كيميائي مع الماء يسمى التحلل المائي. توجد مجموعة كبيرة من الإستريزات المختلفة التي تختلف في خصوصية الركيزة، وهيكل البروتين الخاص بها ووظيفتها البيولوجية. (Esterases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004950.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brevican",
    "term_en": "Brevican",
    "term_ar": "بريفيكان",
    "synonyms": [
      "Chondroitin Sulfate Proteoglycan 7",
      "Brain-Enriched Hyaluronan-Binding Protein",
      "Hyaluronan-Binding Protein, Brain-Enriched"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A BRAIN-specific hyalectin that may play a role in terminally differentiating NEURONS. It is found highly overexpressed in primary BRAIN TUMORS and in experimental models of GLIOMA.",
    "arabic_definition": "بريفيكان‏ (Brevican) هوَ بروتين يُشَفر بواسطة جين بريفيكان في الإنسان.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058581.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurocan",
    "term_en": "Neurocan",
    "term_ar": "نيروكان",
    "synonyms": [
      "Chondroitin Sulfate Proteoglycan 3"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A hyalectin family member that is expressed in neuronal tissue and plays a role in neuronal CELL ADHESION.",
    "arabic_definition": "نيروكان‏ (Neurocan) هوَ بروتين يُشَفر بواسطة جين نيروكان في الإنسان.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058580.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyrolysis",
    "term_en": "Pyrolysis",
    "term_ar": "تحلل حراري",
    "synonyms": [
      "Pyrolyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "High temperature decomposition without addition of extra air or oxygen. It yields syngas, bio-oil and bio-char.",
    "arabic_definition": "الحل الحراري هو تحلل كيميائي للمواد العضوية عند درجات حرارة مرتفعة في غياب الأكسجين أو أي هالوجين، ويتضمن أيضا تغير في التركيب الكيميائي الذي يصاحبه تغير في حالة المادة الفيزيائية وهذا التغير للمادة هو تغير غير منعكس. التحلل الحراري هو إحدى العمليات الملحوظة في تحلل المواد والمنتشر بكثرة في تحلل المواد العضوية وتظهر هذه العملية في حرق الخشب عند تعرضه لدرجة حرارة (200- 300 درجة مئوية) لتحوله للفحم، وهو أيضا يحدث عند احتراق الوقود الصلب أو التقاء الغطاء النباتي مع الحمم البركانية، وبشكل عام التحلل الحراري للمواد العضوية ينتج المواد الغازية السائلة ويترك المواد الصلبة الغنية بوجود الكربون، والفحم، وحدوث التحلل الحراري بشكل قوي وعند درجات حرارة مرتفعة غالبا ما يترك بقايا تحتوي على الكربون بشكل كبير جدا وبعملية تسمى التفحم، وهذه العملية مستخدمة كثيرا في الصناعات الكيميائية، على سبيل المثال: في صناعة الفحم والفحم المنشط والميثانول وصناعات كيميائية أخرى من الخشب مثل: تحويل ثنائي كلورو الايثيلين نسخة محفوظة 2 ديسمبر 2017 على موقع واي باك مشين إلى فينيل كلوريد لصناعة متعدد كلوريد الفينيل، وعملية إنتاج فحم الكوك من الفحم، وتحويل الكتلة الحيوية إلى غاز حيوي وفحم حيوي، وتحويل المخلفات البلاستيكية إلى زيوت قابلة للاستعمال، وتحويل المركبات الهيدروكربونية ذات الوزن الجزيئي المتوسط إلى مركبات ذات وزن جزيئي أخف مثل الجازولين، ومن الممكن أن تسمى هذه الاستعمالات للتحلل الحراري بعدة أسماء مختلفة حسب خصوصية الاستعمال مثل تقطير جاف وتقطير إتلافي. (Pyrolysis)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077319.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myostatin",
    "term_en": "Myostatin",
    "term_ar": "ميوستاتين",
    "synonyms": [
      "GDF-8",
      "Growth Differentiation Factor 8"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A growth differentiation factor that is a potent inhibitor of SKELETAL MUSCLE growth. It may play a role in the regulation of MYOGENESIS and in muscle maintenance during adulthood.",
    "arabic_definition": "الميوستاتين (المعروف أيضًا باسم عامل تمايز النمو 8، الاختصار: GDF8) هو بروتين يرمز في البشر بواسطة جين MSTN. الميوستاتين هو ميوكين ينتج ويطلق بواسطة الخلايا العضلية ويعمل على خلايا العضلات لتثبيط نمو العضلات. الميوستاتين هو عامل تمايز النمو المفرز وهو عضو في عائلة بروتين TGF بيتا. (Myostatin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055435.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "abciximab",
    "term_en": "Abciximab",
    "term_ar": "أبسيكسيماب",
    "synonyms": [
      "Chimeric 7E3 Fab",
      "Fab, Chimeric 7E3",
      "c7E3 Fab",
      "CentoRx",
      "ReoPro",
      "Clotinab"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A Fab fragment of the chimeric monoclonal antibody 7E3 that binds to the glycoprotein IIb-IIIa receptor of human platelets, and blocks PLATELET GLYCOPROTEIN GPIIB-IIIA COMPLEX, potently inhibiting PLATELET AGGREGATION. It is used in treatment of refractory unstable angina, and for prevention of ischemic complications in patients undergoing percutaneous coronary procedures such as ANGIOPLASTY; ATHERECTOMY; or stenting.",
    "arabic_definition": "أبسيكسيماب (الإنجليزية: Abciximab) هو جسم مضاد وحيد النسيلة تسوقه شركة إيلي ليلي للأدوية تحت اسم ريو برو (ReoPro). يستخدم مضاداً لتجمع الصفيحات خاصة بعد عمليات الشرايين التاجية مثل عمليات رأب الوعاء ليمنع التصاق الصفيحات متسببة في خثرة في الشرايين التاجية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077284.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "keratin-7",
    "term_en": "Keratin-7",
    "term_ar": "كيراتين 7",
    "synonyms": [
      "Cytokeratin 7",
      "Keratin CK7"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type II keratin found associated with KERATIN-19 in ductal epithelia and gastrointestinal epithelia.",
    "arabic_definition": "كيراتين 7 أو الكيراتين الخلوي 7 أو ساركولكتين هو بروتين يوجد في الإنسان يُرمَّز عبر جين KRT7. كيرايتن 7 هو كيراتين النوع الثاني. (Keratin-7)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053552.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "granzymes",
    "term_en": "Granzymes",
    "term_ar": "غرانزيم",
    "synonyms": [
      "Granzyme",
      "Granzyme C",
      "Granzyme B",
      "Fragmentin 2",
      "Cytotoxic Serine Protease B",
      "Granzyme-Like Protein III",
      "Cytotoxic T-Lymphocyte Associated 1 Protein",
      "Granzyme K"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of serine endopeptidases found in the SECRETORY GRANULES of LEUKOCYTES such as CYTOTOXIC T-LYMPHOCYTES and NATURAL KILLER CELLS. When secreted into the intercellular space granzymes act to eliminate transformed and virus-infected host cells.",
    "arabic_definition": "غرانزيم (بالإنجليزية: Granzyme ) هي كلمة مركبة من كلمتين Granula و Enzym وتصف عملية ببتيداز تجري في حبيبات داخل خلايا المناعة النشطة وعلى الأخص في خلايا تي القاتلة ، فتحلل ما فيها من مستضد يهدد سلامة الجسم. وهي تعمل سويا مع وبتعضيد من إنزيم بيرفورين . (Granzymes)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053804.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rituximab",
    "term_en": "Rituximab",
    "term_ar": "ريتوكسيماب",
    "synonyms": [
      "CD20 Antibody, Rituximab",
      "Rituximab CD20 Antibody",
      "Rituxan",
      "IDEC-C2B8 Antibody",
      "IDEC-C2B8",
      "Mabthera",
      "GP2013"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A murine-derived monoclonal antibody and ANTINEOPLASTIC AGENT that binds specifically to the CD20 ANTIGEN and is used in the treatment of LEUKEMIA; LYMPHOMA and RHEUMATOID ARTHRITIS.",
    "arabic_definition": "ريتوكسيماب هو جسم مضاد وحيد النسيلة مجانس مضاد للبروتين CD20 الموجود بصورة رئيسية على سطح الخلايا البائية. ريتوكسيماب يدمر الخلايا البائية ولذلك يستخدم في علاج الأمراض التي تتميز بارتفاع عدد الخلايا البائية أو تكون فيها الخلايا البائية مفرطة في الفعالية أو تكون مختلة المفعول، وهذا يشتمل على العديد من الأورام اللمفية وابيضاض الدم ورفض الطعم وأمراض المناعة الذاتية. (Rituximab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069283.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cetuximab",
    "term_en": "Cetuximab",
    "term_ar": "سيتوكسيماب",
    "synonyms": [
      "IMC C225",
      "MAb C225",
      "C225",
      "Erbitux"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chimeric monoclonal antibody that functions as an ANTINEOPLASTIC AGENT through its binding to the EPIDERMAL GROWTH FACTOR RECEPTOR, where it prevents the binding and signaling action of cell growth and survival factors.",
    "arabic_definition": "سيتوكسيماب هو جسم مضاد وحيد النسيلة يثبط عامل نمو مستقبلات البشرة يستخدم في علاج سرطان القولون النقيلي وسرطان الرأس والعنق. ينتج تحت اسم تجاري هو إربيتوكس (Erbitux)، وتسوقه برستول مايرز سكويب وشركة إيلي ليلي. (Cetuximab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000068818.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "connectin",
    "term_en": "Connectin",
    "term_ar": "تيتين",
    "synonyms": [
      "alpha-Connectin",
      "Titin 1",
      "beta-Connectin",
      "Titin 2",
      "Titin Kinase",
      "Kinase, Titin",
      "Titin",
      "Myomesin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A giant elastic protein of molecular mass ranging from 2,993 kDa (cardiac), 3,300 kDa (psoas), to 3,700 kDa (soleus) having a kinase domain. The amino- terminal is involved in a Z line binding, and the carboxy-terminal region is bound to the myosin filament with an overlap between the counter-connectin filaments at the M line.",
    "arabic_definition": "تيتين (الإنجليزية: Titin) ويعرف أيضا باسم «كونيكتن» هو بروتين يتم تصنيعه في البشر من الجين TTN. التيتين هو بروتين عملاق يعمل كجزيء زنبركي (spring) مسؤول عن المرونة المُنفعلة في العضلات. يتألف التيتين من 244 نطاق بروتيني (Protein domain) مطوية بشكل فردي ومتصلة مع بعضها بواسطة سلاسل الببتيد. (Connectin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064211.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepcidins",
    "term_en": "Hepcidins",
    "term_ar": "هيبسيدين",
    "synonyms": [
      "Hepcidin",
      "Liver-Expressed Antimicrobial Peptide",
      "Antimicrobial Peptide, Liver-Expressed",
      "Peptide, Liver-Expressed Antimicrobial",
      "Prohepcidin",
      "Pro-Hepcidin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Forms of hepcidin, a cationic amphipathic peptide synthesized in the liver as a prepropeptide which is first processed into prohepcidin and then into the biologically active hepcidin forms, including in human the 20-, 22-, and 25-amino acid residue peptide forms. Hepcidin acts as a homeostatic regulators of iron metabolism and also possesses antimicrobial activity.",
    "arabic_definition": "الهيبسيدين هو هرمون ببتيدي ينتجه الكبد. اكتشف في سنة 2000 ويبدو أنه المنظم الرئيسي لتوازن الحديد في الإنسان والثدييات الأخرى. (Hepcidins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064451.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alefacept",
    "term_en": "Alefacept",
    "term_ar": "أليفاسبت",
    "synonyms": [
      "LFA-3 IgG(1) Fusion Protein",
      "LFA-3 IgG1 Fusion Protein",
      "Amevive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A recombinant human fusion protein of LFA-3 antigen and immunoglobulin IGG1 that binds to CD2 ANTIGENS on memory T-LYMPHOCYTES, preventing their activation and proliferation. It is used in the management of moderate to severe chronic plaque PSORIASIS.",
    "arabic_definition": "أليفاسبت (الإنجليزية: Alefacept) هو دواء يُستعمل في علاج:",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077944.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prolamins",
    "term_en": "Prolamins",
    "term_ar": "برولامين",
    "synonyms": [
      "Prolamin",
      "Prolamin Protein, Plant",
      "Avenins",
      "Avenin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of seed storage proteins restricted to the POACEAE family. They are rich in GLUTAMINE and PROLINE.",
    "arabic_definition": "البرولامين هو من مجموعة البروتينات التي تكون في الحبوب والتي تحتوي على نسبة عالية من برولين وتوجد في الحبوب بشكل عام مثل: القمح (غليادين)، الشعير (hordein)، الشيلم (secalin) ، الذرة (zein)، السورغم (zein)، و الشوفان (avenin). ويتميز بالمحتوى العالي من جلوتامين و برولين، وهو يذوب فقط في المحاليل الكحولية. (Prolamins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055315.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "denosumab",
    "term_en": "Denosumab",
    "term_ar": "دينوسوماب",
    "synonyms": [
      "AMG 162",
      "Xgeva",
      "Prolia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A humanized monoclonal antibody and an inhibitor of the RANK LIGAND, which regulates OSTEOCLAST differentiation and bone remodeling. It is used as a BONE DENSITY CONSERVATION AGENT in the treatment of OSTEOPOROSIS.",
    "arabic_definition": "دينوسوماب هو جسم مضاد وحيد النسيلة يستخدم لعلاج تخلخل العظم وانبثاث العظام والتهاب المفاصل الروماتويدي وورم الخلايا العملاقة في العظم والورم النقوي المتعدد. طورته آمجن. (Denosumab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069448.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "abatacept",
    "term_en": "Abatacept",
    "term_ar": "أباتاسيبت",
    "synonyms": [
      "Orencia",
      "BMS 188667",
      "BMS188667",
      "Belatacept",
      "BMS224818",
      "BMS-224818",
      "CTLA-4-Ig",
      "CTLA4-Ig Immunoconjugate"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A fusion protein immunoconjugate of the extracellular domain of CTLA4 and the Fc domain of human IgG1. It functions as a T-cell co-stimulation blocker that inhibits TNF-ALPHA and prevents the activation of T-LYMPHOCYTES. It is used in the treatment of RHEUMATOID ARTHRITIS.",
    "arabic_definition": "أباتاسيبت (الإنجليزية: Abatacept) هو دواء يُستعمل في علاج:",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069594.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "syndecans",
    "term_en": "Syndecans",
    "term_ar": "السينديكانات",
    "synonyms": [
      "Syndecan"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of transmembrane glycoproteins that contain a short cytoplasmic domain, a single-span transmembrane domain, and an extracellular domain with heparin sulfate and CHONDROITIN SULFATE chains. Syndecans interact with a variety of heparin-binding INTERCELLULAR SIGNALING PEPTIDES AND PROTEINS and may play a role in modulating cellular signaling during EMBRYONIC DEVELOPMENT, tumorigenesis, and angiogenesis.",
    "arabic_definition": "السينديكانات (بالإنجليزية: Syndecans) هي عائلة من البروتينات الغشائية التي تمتلك نطاقًا غشائيًا واحدًا، وتُعد من المستقبلات المساعدة (coreceptors)، خاصةً للمستقبلات المقترنة بالبروتين ج (G protein-coupled receptors).",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053667.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurexins",
    "term_en": "Neurexins",
    "term_ar": "نيوريكسين",
    "synonyms": [
      "Neurexin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Presynaptic cell-adhesion molecules that bind postsynaptic NEUROLIGINS to form calcium-dependent trans-synaptic adhesions. Neurexins recruit synaptic scaffolding proteins via their PDZ DOMAINS. Distribution and interaction with neuroligins are regulated by ALTERNATIVE SPLICING. Alterations in genes encoding neurexins are associated with cognitive diseases such AUTISM SPECTRUM DISORDER; SCHIZOPHRENIA and Pitt-Hopkins-like syndrome 2.",
    "arabic_definition": "النيوريكسين (NRXN) هو بروتين قبل مشبكي يساعد على لصق العصبون ببعضه في المشبك. وهي بروتينات غشائية من النوع آي (I) ويمكن تصنيفها إلى نوعين هما نيوريكسينات ألفا ونيوريكسينات بيتا. (Neurexins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000096784.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nivolumab",
    "term_en": "Nivolumab",
    "term_ar": "نيفولوماب",
    "synonyms": [
      "MDX-1106",
      "MDX1106",
      "Opdivo",
      "BMS-936558",
      "BMS936558",
      "ONO-4538",
      "ONO4538"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genetically engineered, fully humanized immunoglobulin G4 monoclonal antibody that binds to the PD-1 RECEPTOR, activating an immune response to tumor cells. It is used as monotherapy or in combination with IPILIMUMAB for the treatment of advanced malignant MELANOMA. It is also used in the treatment of advanced or recurring NON-SMALL CELL LUNG CANCER; RENAL CELL CARCINOMA; and HODGKIN'S LYMPHOMA.",
    "arabic_definition": "نيفولوماب هو جسم مضاد وحيد النسيلة بشري محفز للمناعة طورته شركة ميداركس وطورته مع شركة أونو ثم سوقته شركة برستول مايرز سكويب التي استحوذت على الشركتين تحت اسم تجاري هو أوبديفو (الإنجليزية: Opdivo). (Nivolumab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077594.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "integrins",
    "term_en": "Integrins",
    "term_ar": "إنتغرين",
    "synonyms": [
      "Integrin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of transmembrane glycoproteins (MEMBRANE GLYCOPROTEINS) consisting of noncovalent heterodimers. They interact with a wide variety of ligands including EXTRACELLULAR MATRIX PROTEINS; COMPLEMENT, and other cells, while their intracellular domains interact with the CYTOSKELETON. The integrins consist of at least three identified families: the cytoadhesin receptors (RECEPTORS, CYTOADHESIN), the leukocyte adhesion receptors (RECEPTORS, LEUKOCYTE ADHESION), and the VERY LATE ANTIGEN RECEPTORS. Each family contains a common beta-subunit (INTEGRIN BETA CHAINS) combined with one or more distinct alpha-subunits (INTEGRIN ALPHA CHAINS). These receptors participate in cell-matrix and cell-cell adhesion in many physiologically important processes, including embryological development; HEMOSTASIS; THROMBOSIS; WOUND HEALING; immune and nonimmune defense mechanisms; and oncogenic transformation.",
    "arabic_definition": "الإنتغرين integrin أو مستقبلات الإنتغرين integrin receptor، هي عبارة بروتينات غشائية مدمجة في الغشاء البلاسمي للخلايا الحية. يلعب الإنتغرين دورا أساسيا في ارتباط الخلايا ببعضها وبالنسيج الخلالي الخارج خلوي extracellular matrix (خاصة في الدليل المحوري لمخروط النمو) وأيضا في التحاس signal transduction من بالنسيج الخلالي خارج-خلوي إلى الخلية الحية. (Integrins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016023.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ubiquitin",
    "term_en": "Ubiquitin",
    "term_ar": "يوبيكويتين",
    "synonyms": [
      "APF-1",
      "ATP-Dependent Proteolysis Factor 1",
      "High Mobility Protein 20",
      "HMG-20",
      "Ubiquitin, Human",
      "Human Ubiquitin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A highly conserved 76-amino acid peptide universally found in eukaryotic cells that functions as a marker for intracellular PROTEIN TRANSPORT and degradation. Ubiquitin becomes activated through a series of complicated steps and forms an isopeptide bond to lysine residues of specific proteins within the cell. These ubiquitinated proteins can be recognized and degraded by proteosomes or be transported to specific compartments within the cell.",
    "arabic_definition": "اليوبيكويتين بروتين تنظيمي صغير الحجم (8.5 كيلو دالتون)، وموجود تقريبًا في جميع أنسجة حقيقيات النوى، اكتشفه جدعون غولدشتاين عام 1975 وصفاته الأخرى اكتشفت خلال السبعينيات والثمانينات. هناك أربع جينات في الجينوم البشري التي تنتج اليوبيكويتين: B، UBC، UBA52 وRPS27A. اليوبيكويتين هي مركب تحليلي يتواجد في الخلايا الحية ويلعب دورًا مهمًا في تحليل البروتينات المعيبة (الفاسدة) وغير الضرورية، وهو عبارة عن سلسلة بيبتيدية واحدة. (Ubiquitin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D025801.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myoglobin",
    "term_en": "Myoglobin",
    "term_ar": "ميوغلوبين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A conjugated protein which is the oxygen-transporting pigment of muscle. It is made up of one globin polypeptide chain and one heme group.",
    "arabic_definition": "الميوغلوبين Myoglobin (رمز Mb أو MB) هو بروتين يربط الحديد والأوكسجين ويوجد في الأنسجة العضلية للفقاريات بصورةٍ عامّة، وجميع الثديات بصورةٍ خاصّة . ؛ وهو ذو صلة بالهيموغلوبين ( بروتين ربط الحديد والأوكسجين في الدم، وتحديدًا في خلايا الدم الحمراء).",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009211.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytokines",
    "term_en": "Cytokines",
    "term_ar": "سيتوكين",
    "synonyms": [
      "Cytokine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Non-antibody proteins secreted by inflammatory leukocytes and some non-leukocytic cells, that act as intercellular mediators. They differ from classical hormones in that they are produced by a number of tissue or cell types rather than by specialized glands. They generally act locally in a paracrine or autocrine rather than endocrine manner.",
    "arabic_definition": "السيتوكين (الإنجليزية: cytokine) هو بروتين أو عديد ببتيد أو بروتين سكري يستخدم في عمليات نقل الإشارة والتواصل ما بين الخلايا. تكون الخلايا البائية سيتوكينات تنشط الخلايا تي، كما تنتج الخلايا تي أنواعا من السيتوكينات تعمل أيضا على زيادة أعداد الخلايا تي وتنشطها. (Cytokines)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016207.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "margarine",
    "term_en": "Margarine",
    "term_ar": "سمن نباتي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A butterlike product made of refined vegetable oils, sometimes blended with animal fats, and emulsified usually with water or milk. It is used as a butter substitute. (From Random House Unabridged Dictionary, 2d ed)",
    "arabic_definition": "السمن النباتي أو المهدرج أو المَرغرين هو مادة غذائية بديلة للسمن الحيواني يتم تصنيعها من الزيوت النباتية أو من الشحوم الحيوانية بعملية الهدرجة. لا يعد المَرغرين غذاء صحيا وقد تسبب أمراض القلب. (Margarine)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008383.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhodopsin",
    "term_en": "Rhodopsin",
    "term_ar": "رودوبسين",
    "synonyms": [
      "Visual Purple"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A purplish-red, light-sensitive pigment found in RETINAL ROD CELLS of most vertebrates. It is a complex consisting of a molecule of ROD OPSIN and a molecule of 11-cis retinal (RETINALDEHYDE). Rhodopsin exhibits peak absorption wavelength at about 500 nm.",
    "arabic_definition": "رودوبسين أو رودوبسن (Rhodopsin) أو (الصباغ البنفسجي ) هو صباغ موجود في شبكية العين في الخلايا النبوتية (Rod cells ) التي تحتوي على أقراص من مادة بروتينية تسمى رودوبسين . ذلك البروتين هو المسؤول في تكوين خلايا الشبكية للتفرقة بين الفاتح والغامق .",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012243.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipolysis",
    "term_en": "Lipolysis",
    "term_ar": "تحلل الدهن",
    "synonyms": [
      "Lipolyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The metabolic process of breaking down LIPIDS to release FREE FATTY ACIDS, the major oxidative fuel for the body. Lipolysis may involve dietary lipids in the DIGESTIVE TRACT, circulating lipids in the BLOOD, and stored lipids in the ADIPOSE TISSUE or the LIVER. A number of enzymes are involved in such lipid hydrolysis, such as LIPASE and LIPOPROTEIN LIPASE from various tissues.",
    "arabic_definition": "تحلل الدهن أو تحلل الشحم أو تحلل الليبيدات هو عملية حيوية يتم فيها تقويض (أو هدم أو تكسير) الدهون (الليبيدات) في الجسم وذلك يتضمن عملية حلمهة لمركبات الغليسيريدات الثلاثية إلى غليسرول والأحماض الدهنية الحرة. (Lipolysis)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008066.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "integrons",
    "term_en": "Integrons",
    "term_ar": "إنتجرون",
    "synonyms": [
      "Integron"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "DNA elements that include the component genes and insertion site for a site-specific recombination system that enables them to capture mobile gene cassettes.",
    "arabic_definition": "إن الإنتجرون (integron) هو نظام نشر والتقاط جيني يتألف من مكونين، وقد تم اكتشافه لأول مرة في إطار بحث يتعلق بمقاومة المضاد الحيوي، والتي تم اكتشافها في البلازميدات والصبغيات والينقولات. ويتكون المكون الأول من جين يقوم بترميز إنزيم ريكومبينيز (recombinase) محدد الموقع مع موقع آخر محدد لمجموعة جديدة من الجينات، بينما يتألف المكون الثاني من جزيئات حمض نووي ريبوزي منقوص الأكسجين تسمى عليبات جينية (gene cassettes) يمكن دمجها أو خلطها. (Integrons)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D032023.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cadherins",
    "term_en": "Cadherins",
    "term_ar": "كادهيرين",
    "synonyms": [
      "Cadherin",
      "E-Cadherins",
      "Uvomorulin",
      "Cadherin-1",
      "Epithelial-Cadherins",
      "Epithelial-Cadherin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Calcium-dependent cell adhesion proteins. They are important in the formation of ADHERENS JUNCTIONS between cells. Cadherins are classified by their distinct immunological and tissue specificities, either by letters (E- for epithelial, N- for neural, and P- for placental cadherins) or by numbers (cadherin-12 or N-cadherin 2 for brain-cadherin). Cadherins promote cell adhesion via a homophilic mechanism as in the construction of tissues and of the whole animal body.",
    "arabic_definition": "الكادهيرين (الإنجليزية: Cadherins) نوع من البروتينات التي يتم التعبير عنها على سطوح الخلايا الحية. تلعب الكادهيرينات دورا أساسيا في التصاق الخلايا الذي يثبت الخلايا ضمن الأنسجة ويربطها معه.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015820.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ovalbumin",
    "term_en": "Ovalbumin",
    "term_ar": "ألبومين البيض",
    "synonyms": [
      "Serpin B14"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An albumin obtained from the white of eggs. It is a member of the serpin superfamily.",
    "arabic_definition": "ألبومين البيض أو آح البيض أو زُلال البيض (الإنجليزية: Ovalbumin) ويُدعى اختصاراً OVA، هوَ البروتين الرئيسي الموجود في بياض البيض، حيثُ يُشكل حوالي 55% من البروتين الكُلي. يَظهر تسلسل ألبومين البيض والتماثل ثلاثي الأبعاد له بشكل مُشابه لطائفة السربين ولكنه يُخالف معظم السربينات بأنهَ ليسَ مُثبط لبروتييز السيرين.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010047.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synapsins",
    "term_en": "Synapsins",
    "term_ar": "سينابسينات",
    "synonyms": [
      "Synapsin",
      "Synapsin III",
      "Synapsin I",
      "Synapsin II"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of synaptic vesicle-associated proteins involved in the short-term regulation of NEUROTRANSMITTER release. Synapsin I, the predominant member of this family, links SYNAPTIC VESICLES to ACTIN FILAMENTS in the presynaptic nerve terminal. These interactions are modulated by the reversible PHOSPHORYLATION of synapsin I through various signal transduction pathways. The protein is also a substrate for cAMP- and CALCIUM-CALMODULIN-DEPENDENT PROTEIN KINASES. It is believed that these functional properties are also shared by synapsin II.",
    "arabic_definition": "السينابسينات هي عائلة من عائلات البروتين التي تدخل في تنظيم انطلاق الناقل العصبي في الخلايا العصبية. وعلى وجه التخصيص، فإنه من المعتقد أن السينابسينات تشترك في تنظيم أعداد الحويصلات المتشابكة المتاحة للانطلاق بواسطة الإيماس في أي وقت محدد. (Synapsins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016704.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "defensins",
    "term_en": "Defensins",
    "term_ar": "ديفنسين",
    "synonyms": [
      "Defensin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Family of antimicrobial peptides that have been identified in humans, animals, and plants. They are thought to play a role in host defenses against infections, inflammation, wound repair, and acquired immunity.",
    "arabic_definition": "الدیفنسینات (الإنجليزية: Defensins) هي بروتينات كاتيونية صغيرة غنية بالسيستئين تتواجد في مختلف أشكال الحياة بما في ذلك: الحيوانات الفقارية واللافقارية، والنباتات، والفطريات. وهي ببتيدات دفاع ينتجها المضيف، تملك أعضاء منها إما وظيفة مضادة للميكروبات بشكل مباشر أو وظائف تأشير مناعي أو كلاهما.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D023082.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "selectins",
    "term_en": "Selectins",
    "term_ar": "السيليكتين",
    "synonyms": [
      "Selectin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Transmembrane proteins consisting of a lectin-like domain, an epidermal growth factor-like domain, and a variable number of domains that are homologous to complement regulatory proteins. They are important cell adhesion molecules which help LEUKOCYTES attach to VASCULAR ENDOTHELIUM.",
    "arabic_definition": "على selectins (مجموعة من التمايز 62 أو CD62) هي عائلة من خلية التصاق الجزيئات (أو الحدب). كل selectins هي واحدة من سلسلة الغشاء glycoproteins التي تشترك في خصائص مشابهة ج-نوع يكتينس بسبب المتعلقة الأمينية محطة والكالسيوم التي تعتمد على الربط.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019087.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "properdin",
    "term_en": "Properdin",
    "term_ar": "بروبيردين",
    "synonyms": [
      "Complement Factor P",
      "Factor P, Complement"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A 53-kDa protein that is a positive regulator of the alternate pathway of complement activation (COMPLEMENT ACTIVATION PATHWAY, ALTERNATIVE). It stabilizes the ALTERNATIVE PATHWAY C3 CONVERTASE (C3bBb) and protects it from rapid inactivation, thus facilitating the cascade of COMPLEMENT ACTIVATION and the formation of MEMBRANE ATTACK COMPLEX. Individuals with mutation in the PFC gene exhibit properdin deficiency and have a high susceptibility to infections.",
    "arabic_definition": "بروبيردين (الإنجليزية: Properdin) ويُسمى أيضاً العامِل بي (الإنجليزية: Factor P) وهُوَ المُنظم الإيجابي الوَحيد المَعروف والذي يَعمل على تَفعيل النِظام المُتمم الذي يؤدي بدوره إلى استقرار المَسار الثانوي كونفيرتاز. يُوجد البروبيردين في بلازما دَم الحَيوانات المُعقدة.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011414.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "galectins",
    "term_en": "Galectins",
    "term_ar": "جالكتين",
    "synonyms": [
      "beta-D-Galactosyl-Specific Lectin",
      "Lectin, beta-D-Galactosyl-Specific",
      "beta-Galactoside Binding Lectin",
      "Binding Lectin, beta-Galactoside",
      "Lectin, beta-Galactoside Binding",
      "D-Galactoside-Binding Lectin",
      "Lectin, D-Galactoside-Binding",
      "Galectin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of animal lectins that bind specifically to beta-galactoside in a calcium-independent manner. Members of this class are distiguished from other lectins by the presence of a conserved carbohydrate recognition domain. The majority of proteins in this class bind to sugar molecules in a sulfhydryl-dependent manner and are often referred to as S-type lectins, however this property is not required for membership in this class.",
    "arabic_definition": "الجالكتينات هي مجموعة من البروتينات ترتبط بسكريات بيتا غالاكتوزيد، اكتُشِف حتى الآن في البشر 15 جالاكتين، يرمَّزوا بواسطة جينات LGALS. (Galectins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D037161.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "insulysin",
    "term_en": "Insulysin",
    "term_ar": "إنزيم خفض فاعلية االأنسولين",
    "synonyms": [
      "Insulin Proteinase",
      "Proteinase, Insulin",
      "Insulin-Degrading Enzyme",
      "Enzyme, Insulin-Degrading",
      "Insulinase",
      "Insulin Protease",
      "Protease, Insulin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme the catalyzes the degradation of insulin, glucagon and other polypeptides. It is inhibited by bacitracin, chelating agents EDTA and 1,10-phenanthroline, and by thiol-blocking reagents such as N-ethylmaleimide, but not phosphoramidon. (Eur J Biochem 1994;223:1-5) EC 3.4.24.56.",
    "arabic_definition": "إنزيم خفض فاعلية االأنسولين أوإنزيم الأنسولين المهيني(الإنجليزية: Insulin-degrading enzyme)، والمعروف أيضا باسم أي دي إي (IDE) هو انزيم بشري، أكتشفت طريقة تعديله حديثا. حيث أستطاع فريق من عيادة مايو في جامعة فلوريدا من تطوير جزيئات (molecules) فاعلة من شأنها القيام بذلك القيام بمنع تكسر الأنسولين في الجسم.كطريقة واعدة لعلاج مرض السكري اعتمادا على منع تكسر الأنسولين في الجسم، وقد تم اكتشاف هذا الإنزيم في العام 1949. (Insulysin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007339.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ppar-beta",
    "term_en": "PPAR-beta",
    "term_ar": "مستقبل منشط لمكاثر البيروكسيسوم-دلتا",
    "synonyms": [
      "PPARbeta",
      "Peroxisome proliferator-activated receptor delta"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of the PPAR nuclear transcription factors.",
    "arabic_definition": "المستقبلات المنشطة لمكاثر البيروكسيسوم-بيتا ( و تدعى أحياناً بدلتا) (β أو δ)، المعروفة أيضا باسم NR1C2 ، من الفصيلة الفرعية للمستقبلات النووية 1، المجموعة ج، عضو 2. و هي مستقبلات نووية في البشر يتم ترميزها من قبل جين مستقبلات مكاثر البيروكسيسوم المنشطة. (PPAR-beta)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048068.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "viscosity",
    "term_en": "Viscosity",
    "term_ar": "لزوجة",
    "synonyms": [
      "Viscosities"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The resistance that a gaseous or liquid system offers to flow when it is subjected to shear stress. (From McGraw-Hill Dictionary of Scientific and Technical Terms, 6th ed)",
    "arabic_definition": "اللزوجة هي مقاومة مائع ما للجريان، ومقدار مقاومته لضغط يجبره على التحرك والسيلان. كلما زادت لزوجة مائع ما، قلّت قابليته للجريان. (Viscosity)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014783.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "isomerism",
    "term_en": "Isomerism",
    "term_ar": "تصاوغ",
    "synonyms": [
      "Isomerisms",
      "Isomer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The phenomenon whereby certain chemical compounds have structures that are different although the compounds possess the same elemental composition. (From McGraw-Hill Dictionary of Scientific and Technical Terms, 5th ed)",
    "arabic_definition": "التصاوغ أو المتزامرات أو الزميرات أو المتصاوغات (تشابه الصيغ) أو الأيسومر أو المتجازئ ((الإنجليزية: isomers) «الإيزوميرات») في الكيمياء، هي جزيئات لها نفس الصيغة الكيميائية وغالبا بنفس نوع الروابط بين الذرات لكنها تختلف في ترتيب المجموعات الوظيفية المختلفة التي تشكل هذه المركبات. عديد من المتناظرات تتشارك في خواص متشابهة إن لم تكن متطابقة في معظم التفاعلات الكيميائية. (Isomerism)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007536.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vitellins",
    "term_en": "Vitellins",
    "term_ar": "فيتيلين",
    "synonyms": [
      "Vitellin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Major egg yolk proteins from egg-laying animals such as non-mammalian VERTEBRATES; ARTHROPODS; and others. They are high-density lipoglycoproteins derived from circulating precursors, VITELLOGENINS. Vitellins serve as nutrients for the growing non-mammalian embryos (EMBRYO, NONMAMMALIAN).",
    "arabic_definition": "الفيتيلين (الإنجليزية: Vitellin) هو بروتين موجود في مح البيض، وهو بروتين فسفوري. الفيتيلين هو الاسم العام لعديد من بروتينات المح. (Vitellins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D047048.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antibodies",
    "term_en": "Antibodies",
    "term_ar": "جسم مضاد",
    "synonyms": [
      "Antibody"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Immunoglobulin molecules having a specific amino acid sequence by virtue of which they interact only with the ANTIGEN (or a very similar shape) that induced their synthesis in cells of the lymphoid series (especially PLASMA CELLS).",
    "arabic_definition": "في علم المناعة، مضاد مناعي أو جسم مضاد(الإنجليزية: Antibody) أو الغلُوبولين المَناعِيّ (الإنجليزية: immunoglobulin) أو الكُرَيين المناعي (حيث كلمة كُرَيين ترجمة لكلمة globulin المشتقة من الكلمة اللاتينية globus والتي تعني كرة)، هو بروتين على شكل حرف Y الإنكليزي ويتواجد في الدم والسوائل الجسمية الأخرى في الفقاريات، ويتم استخدامه من قبل جهاز المناعة للتعرف على الأجسام الأجنبية وتحييدها مثل البكتيريا والفيروسات. (Antibodies)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000906.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydrolysis",
    "term_en": "Hydrolysis",
    "term_ar": "تحلل مائي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of cleaving a chemical compound by the addition of a molecule of water.",
    "arabic_definition": "التحلل المائي (يُعرف أيضا الحلمهة أو الحلمأة) في الكيمياء العضوية على أنه التفاعل الذي يتم بين مركب كيميائي والماء فيؤدي إلى انكسار الرابطة الكيميائية في جزيء الماء إلى أيون الهيدروجين (بروتون) وأيون الهيدروكسيل. يستعمل هذا التفاعل لتغيير الروابط الكيميائية في البوليميرات. (Hydrolysis)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006868.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chitinases",
    "term_en": "Chitinases",
    "term_ar": "كايتيناز",
    "synonyms": [
      "Chitinase",
      "Endochitinase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Glycoside hydrolases that break down glycosidic bonds in CHITIN. They are important for insect and worm morphogenesis and plant defense against pathogens. Human chitinases may play a role in the etiology of allergies and asthma.",
    "arabic_definition": "الكايتيناز أو كاتينيز أو كيتينيز (الإنجليزية: Chitinase)؛ هو إنزيم حلمهي يقوم بكسر سلسلة سندات الغليكوزيدية في الكيتين. يتواجد في جدران الخلايا من الفطريات وعناصر خارج الهيكل لبعض الحيوانات (ومنها الديدان والمفصليات)،والكايتينيز موجودة أيضا في النباتات (في بذور الشعير) وتم العثور على الكايتينيز عموما في الكائنات الحية التي تحتاج إما إلى إعادة تشكيل الكيتين الخاصة بها أوفي هضم الكيتين في الفطريات أو الحيوانات. (Chitinases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002688.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endorphins",
    "term_en": "Endorphins",
    "term_ar": "إندورفين",
    "synonyms": [
      "Endorphin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of the three major groups of endogenous opioid peptides. They are large peptides derived from the PRO-OPIOMELANOCORTIN precursor. The known members of this group are alpha-, beta-, and gamma-endorphin. The term endorphin is also sometimes used to refer to all opioid peptides, but the narrower sense is used here; OPIOID PEPTIDES is used for the broader group.",
    "arabic_definition": "الإندورفين بالإنجليزية Endorphin ، وهو هرمون يتكون من سلسلة عديد الببتيد. وهو مادة موجودة في الجهاز العصبي للبشر والحيوانات. (Endorphins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004723.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peroxidase",
    "term_en": "Peroxidase",
    "term_ar": "بيروكسيداز",
    "synonyms": [
      "Hemi-Myeloperoxidase",
      "Myeloperoxidase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A hemeprotein from leukocytes. Deficiency of this enzyme leads to a hereditary disorder coupled with disseminated moniliasis. It catalyzes the conversion of a donor and peroxide to an oxidized donor and water. EC 1.11.1.7.",
    "arabic_definition": "إنزيمات البيروكسيداز أو مختزلة البيروكسيد هي مجموعة واسعة من الإنزيمات التي تدخل في عدد كبير من العمليات الحيوية التي تتضمن تفاعلات أكسدة-اختزال. سميت هذه الإنزيمات بهذا الاسم نسبة إلى مركبات البيروكسيد التي تتكسر في العملية. (Peroxidase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009195.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hexokinase",
    "term_en": "Hexokinase",
    "term_ar": "هكسوكيناز",
    "synonyms": [
      "Hexokinase D",
      "Hexokinase A",
      "Hexokinase II"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme that catalyzes the conversion of ATP and a D-hexose to ADP and a D-hexose 6-phosphate. D-Glucose, D-mannose, D-fructose, sorbitol, and D-glucosamine can act as acceptors; ITP and dATP can act as donors. The liver isoenzyme has sometimes been called glucokinase. (From Enzyme Nomenclature, 1992) EC 2.7.1.1.",
    "arabic_definition": "هكسوكيناز أو إنزيمات هكسوكاينيز (الإنجليزية: Hexokinase) هو انزيم ينتمي لعائلة فوسفورياات الهيكسوز (phosphorylates hexoses)(سكريات سداسية الكربون)، وتشكيل فوسفات هيكسوز. في معظم الكائنات الحية، والجلوكوز هو الركيزة الأكثر أهمية في هكسوكيناز، حيث ينتج الجلوكوز 6 فوسفات هامة.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006593.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "calmodulin",
    "term_en": "Calmodulin",
    "term_ar": "كالموديولين",
    "synonyms": [
      "Calcium-Dependent Regulator",
      "Calcium-Dependent Activator Protein",
      "Activator Protein, Calcium-Dependent",
      "Protein, Calcium-Dependent Activator",
      "Regulator, Calcium-Dependent",
      "Phosphodiesterase Activating Factor",
      "Activating Factor, Phosphodiesterase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A heat-stable, low-molecular-weight activator protein found mainly in the brain and heart. The binding of calcium ions to this protein allows this protein to bind to cyclic nucleotide phosphodiesterases and to adenyl cyclase with subsequent activation. Thereby this protein modulates cyclic AMP and cyclic GMP levels.",
    "arabic_definition": "الكالمودولين (الإنجليزية: Calmodulin) ويُدعى اختصارًا CaM (‏CALcium—MODULated proteIN) هو بروتين رابط وناقل للإشارة يعبر عنه في جميع خلايا حقيقيات النوى من الخمائر إلى الإنسان، وهو بروتين متعدد الوظائف يقوم بوظيفة ترجام (transducer) لإشارات الكالسيوم عن طريق الارتباط بأيونات الكالسيوم وتعديل تأثيرها على البروتينات الهدف.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002147.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibrinogen",
    "term_en": "Fibrinogen",
    "term_ar": "فبرينوجين",
    "synonyms": [
      "Coagulation Factor I",
      "Factor I, Coagulation",
      "Factor I",
      "Blood Coagulation Factor I",
      "gamma-Fibrinogen"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Plasma glycoprotein clotted by thrombin, composed of a dimer of three non-identical pairs of polypeptide chains (alpha, beta, gamma) held together by disulfide bonds. Fibrinogen clotting is a sol-gel change involving complex molecular arrangements: whereas fibrinogen is cleaved by thrombin to form polypeptides A and B, the proteolytic action of other enzymes yields different fibrinogen degradation products.",
    "arabic_definition": "مولد الليفين (العامل الأول) (الإنجليزية: Fibrinogen (factor I)) أوالفبرينوجين نوع من بروتينات الدم يلعب دورا هاما في تجلط الدم. وينتمي هذا البروتين إلى عائلة بروتينات بلازما الدم الذائبة ووزنه الجزئي =330.000 دالتون.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005340.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antivenins",
    "term_en": "Antivenins",
    "term_ar": "مضاد السم",
    "synonyms": [
      "Antivenin",
      "Anti-Venin",
      "Antivenom",
      "Anti-Venoms",
      "Antivenoms",
      "Anti-Venom",
      "Anti-Venins"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Antisera used to counteract poisoning by animal VENOMS, especially SNAKE VENOMS.",
    "arabic_definition": "مضاد السم أو مضاد لسم الأفاعى هو المصل أو المضادات (مضاد للسموم) وهو دواء مصنوع من الاجسام المضادة التي تستخدم لعلاج لدغات ولسعات سامة، ويتم استخدامها فقط في حالات السمية العالية ولها اخطار سمية كبيره، وتعتمد هذه الاجسام المضادة على نوع السم (يعني كل سم له جسم مضاد خاص به) وتعطى للمصاب عن طريق الحقن. واعراضها الجانبية تأثيرها شديد مثل: ضيق التنفس أو الحساسية المفرطة أو داء المصل، وتصنع المضادات من الحيوانات التي تحتوي على السم (كالافاعي لانها وسيلة دفاع لها) ويتم حقنها في حيوانات اليفه أخرى دمها يساعد على إنتاج اجسام مضادة يتم جمعها بعد تنقية دم الحيوان، ويتوفر مضادات للدغات الثعابين والعناكب والسمك ولسعات العقرب. (Antivenins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000997.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alkylation",
    "term_en": "Alkylation",
    "term_ar": "ألكلة",
    "synonyms": [
      "Alkylations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The covalent bonding of an alkyl group to an organic compound. It can occur by a simple addition reaction or by substitution of another functional group.",
    "arabic_definition": "الألكلة في الكيمياء العضوية هي عملية نقل لمجموعة ألكيل بواسطة تفاعل كيميائي وذلك من جزيء إلى آخر. يسمى العامل الكيميائي الذي يخصص من أجل منح مجموعة الألكليل باسم العامل المؤلكل. (Alkylation)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000478.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bradykinin",
    "term_en": "Bradykinin",
    "term_ar": "براديكينين",
    "synonyms": [
      "Arg-Pro-Pro-Gly-Phe-Ser-Pro-Phe-Arg",
      "Bradykinin, (6-D-Ser)-Isomer",
      "Bradykinin, (3-D-Pro)-Isomer",
      "Bradykinin, (2-D-Pro-3-D-Pro-7-D-Pro)-Isomer",
      "Bradykinin, (2-D-Pro)-Isomer",
      "Bradykinin, (5-D-Phe)-Isomer",
      "Bradykinin, (8-D-Phe)-Isomer",
      "Bradykinin, (7-D-Pro)-Isomer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nonapeptide messenger that is enzymatically produced from KALLIDIN in the blood where it is a potent but short-lived agent of arteriolar dilation and increased capillary permeability. Bradykinin is also released from MAST CELLS during asthma attacks, from gut walls as a gastrointestinal vasodilator, from damaged tissues as a pain signal, and may be a neurotransmitter.",
    "arabic_definition": "براديكينين أو برادي كينين (الإنجليزية: Bradykinin) هو الببتيد الذي يتكون من تسعة احماض امينية والذي يسبب توسع الأوعية الدموية (تمددها)، ويؤدي بالتالي إلى انخفاض ضغط الدم. هناك فئة من العقاقير تسمى مثبط الإنزيم المحول للأنجيوتنسين، التي تستخدم لخفض ضغط الدم وزيادة البراديكينين (عن طريق تثبيط تحلله) ما يؤدي لمزيد من خفض ضغط الدم.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001920.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "muramidase",
    "term_en": "Muramidase",
    "term_ar": "ليزوزيم",
    "synonyms": [
      "Lysozyme",
      "N-Acetylmuramide Glycanhydrolase",
      "Glycanhydrolase, N-Acetylmuramide",
      "Leftose"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A basic enzyme that is present in saliva, tears, egg white, and many animal fluids. It functions as an antibacterial agent. The enzyme catalyzes the hydrolysis of 1,4-beta-linkages between N-acetylmuramic acid and N-acetyl-D-glucosamine residues in peptidoglycan and between N-acetyl-D-glucosamine residues in chitodextrin. EC 3.2.1.17.",
    "arabic_definition": "ليزوزيم (الإنجليزية: lysozyme) رقمه الكيميائي (EC 3.2.1.17) هو إنزيم يقوم بتسريع هدم جدار الخلايا الخاصة ببعض الجراثيم. (Muramidase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009113.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "isomerases",
    "term_en": "Isomerases",
    "term_ar": "إيزوميراز",
    "synonyms": [
      "Isomerase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of enzymes that catalyze geometric or structural changes within a molecule to form a single product. The reactions do not involve a net change in the concentrations of compounds other than the substrate and the product.(from Dorland, 28th ed) EC 5.",
    "arabic_definition": "في الكيمياء الحيوية : الإيزوميراز أحد أنواع الإنزيمات التي تحفز التحول الداخلي في البوليمرات البروتينية بشكل خاص . (Isomerases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007535.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydrolases",
    "term_en": "Hydrolases",
    "term_ar": "هيدرولاز",
    "synonyms": [
      "Hydrolase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any member of the class of enzymes that catalyze the cleavage of the substrate and the addition of water to the resulting molecules, e.g., ESTERASES, glycosidases (GLYCOSIDE HYDROLASES), lipases, NUCLEOTIDASES, peptidases (PEPTIDE HYDROLASES), and phosphatases (PHOSPHORIC MONOESTER HYDROLASES). EC 3.",
    "arabic_definition": "الهيدرولاز أو الإنزيم المحلمه أو إنزيم الحلمهة أحد أنواع الإنزيمات التي تحفز حلمهة الإستر (استراز)، الروابط الببتيدية (ببتيداز)، والروابط السكرية (أوزيداز). عادة هذه الأنزيمات لا تحتاج لعامل مرافق. (Hydrolases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006867.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bromelains",
    "term_en": "Bromelains",
    "term_ar": "بروميلين",
    "synonyms": [
      "Bromelain",
      "Bromelin",
      "Bromelins",
      "Dayto Anase",
      "Ananase",
      "Traumanase",
      "Bromelain-POS",
      "BromelainPOS"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Protein-digesting and milk-clotting enzymes found in PINEAPPLE fruit juice and stem tissue. Enzymes from the two sources are distinguished as fruit bromelain and stem bromelain. This enzyme was formerly listed as EC 3.4.22.4.",
    "arabic_definition": "بروميلين (الإنجليزية: Bromelain) هو عبارة عن مزيج من الأنزيمات البروتينية (هضم البروتين) مستمد من خلاصة وعصير الاناناس، وقد أستخدم تجاريا كمطري للحوم، ولكن له أيضا مجموعة من الاستخدامات الطبية عندما يؤخذ في شكل مكمل غذائي. (Bromelains)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001963.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dynorphins",
    "term_en": "Dynorphins",
    "term_ar": "دينورفين",
    "synonyms": [
      "Dynorphin",
      "Dynorphin (1-17)",
      "Dynorphin A",
      "Dynorphin A (1-17)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of opioid peptides including dynorphin A, dynorphin B, and smaller fragments of these peptides. Dynorphins prefer kappa-opioid receptors (RECEPTORS, OPIOID, KAPPA) and have been shown to play a role as central nervous system transmitters.",
    "arabic_definition": "الدينورفينات (الإنجليزية: Dynorphins) هي فئة من الببتيدات الأفيونيدية التي تنشأ من البروتين الأولي دينورفين أولي. حين يُقص الدينورفين الأولي أثناء المعالجة بواسطة محولة البروتين الأولي 2 (PC2) تنتج عدة ببتينات نشطة هي: دينورفين أ، دينورفين ب، ألفا-نيوإندورفين وبيتا-نيوإندورفين.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004399.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antitoxins",
    "term_en": "Antitoxins",
    "term_ar": "مضاد ذيفان",
    "synonyms": [
      "Antitoxin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Antisera from immunized animals that is purified and used as a passive immunizing agent against specific BACTERIAL TOXINS.",
    "arabic_definition": "مضاد الزيفان أو مضاد الذيفان أو مضاد السم أو مضاد للتوكسين (الإنجليزية: Antitoxin) هي الأجسام المضادة لديها القدرة على تثبيط سموم (ذيفانات) محددة. هي تنتجها بعض الحيوانات، والنباتات، والبكتيريا. (Antitoxins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000992.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "isoenzymes",
    "term_en": "Isoenzymes",
    "term_ar": "نظير إنزيمي",
    "synonyms": [
      "Isoenzyme",
      "Isozyme",
      "Isozymes",
      "Alloenzymes",
      "Alloenzyme",
      "Allozyme",
      "Allozymes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Structurally related forms of an enzyme. Each isoenzyme has the same mechanism and classification, but differs in its chemical, physical, or immunological characteristics.",
    "arabic_definition": "نَظائر الإِنزيمات أو مُتشابهات الإِنزيم (الإنجليزية: Isoenzyme) أو اختصاراً (الإنجليزية: Isozyme) ويُسمى أيضًا إنْزيم إسْوِيّ أو إِيزوزيم أو إنزيم مِثْلِيّ، وهي أَي مَجموعة مِن الإِنزيمات تتشابه في خَصائصها التَحفيزية بَحيث تُحفز نَفس التَفاعل، وَتُنتج نَفس المُنتج، وَلكنها تَتباين في خَصائصها السيرولوجية وَفي تَسلسل الأَحماض الأمينية وفي الخَواص الفيزيائية مِثل نُقْطَة تَساوِي الكَهْرَبِائيَّة، وعادة ما تَكون قَليلة الوِحدات البِنائية، وَيمكن تمييزها عن طَريق بعض التِقنيات مِثل الهجرة الكهربائية أو البَأر المُتساوي التكَهرُب. تَتواجد نظائِر الإنزيمات بأنسجة الجِسم وَأعضائه المُختلفة، ويكون تواجدها بِنسب مُميزة تَختلف من عضو لآخر ومن نسيج لآخر، كَما يختلف اتجاه التَفاعل من نسيج للآخر. (Isoenzymes)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007527.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pancreatin",
    "term_en": "Pancreatin",
    "term_ar": "إنزيمات البنكرياس",
    "synonyms": [
      "Panzytrat",
      "Panteric",
      "Pancreatic enzymes (medication)",
      "إنزيمات البنكرياس (دواء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mammalian pancreatic extract composed of enzymes with protease, amylase and lipase activities. It is used as a digestant in pancreatic malfunction.",
    "arabic_definition": "إنزيمات البنكرياس والمعروفة أيضًا باسم البنكرييز والبنكرياسين، وهي خليط من الأميلايز، والليبايز، والبروتيايزيتم ، (Pancreatin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010194.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cathepsins",
    "term_en": "Cathepsins",
    "term_ar": "كاتبسين",
    "synonyms": [
      "Cathepsin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of lysosomal proteinases or endopeptidases found in aqueous extracts of a variety of animal tissues. They function optimally within an acidic pH range. The cathepsins occur as a variety of enzyme subtypes including SERINE PROTEASES; ASPARTIC PROTEINASES; and CYSTEINE PROTEASES.",
    "arabic_definition": "الكاتِبْسين أو الكاتِيبْسين أو الكاثبسين (الإنجليزية: Cathepsin) هو ببتيداز داخلي (الببتيداز هو إنزيم يقوم بتفكيك وهدم البروتين) يتواجد لدى جميع الحيونات وبعض الكائنات الأخرى. له دور في عملية هضم الغذاء، ومنه عدة أنواع. (Cathepsins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002403.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oxygenases",
    "term_en": "Oxygenases",
    "term_ar": "أكسجيناز",
    "synonyms": [
      "Oxygenase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Oxidases that specifically introduce DIOXYGEN-derived oxygen atoms into a variety of organic molecules.",
    "arabic_definition": "أكسجيناز (الإنجليزية: oxygenase) هو أي إنزيم يقوم بتفاعل أكسدة ركيزة ما من خلال تحويل الأكسجين الجزيئي O2 إلى بنية الركيزة. تعد إنزيمات الأكسجيناز إحدى أصناف إنزيمات أكسدة-اختزال، ويرمز لها حسب رقم التصنيف الإنزيمي EC 1.13 (أحادي أكسجيناز) أو EC 1.14 (ثنائي أكسجيناز). (Oxygenases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010105.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "actomyosin",
    "term_en": "Actomyosin",
    "term_ar": "خيط عضلي",
    "synonyms": [
      "Myofilament"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A protein complex of actin and MYOSINS occurring in muscle. It is the essential contractile substance of muscle.",
    "arabic_definition": "الخيوط العضلية (بالإنجليزية:Myofilaments) هي خيوط اللييفة العضلية، المؤلفة بشكل أساسي من البروتينات، الميوسين أو الأكتين. أنواع العضلات هي عضلات مخططة بشكل مباشر (مثل عضلات الهيكل العظمي وعضلة القلب)، وعضلات مخططة بشكل غير مباشر (توجد في بعض اللافقاريات)، وعضلات ملساء. (Actomyosin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000205.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "integrases",
    "term_en": "Integrases",
    "term_ar": "إنزيم مدمج",
    "synonyms": [
      "Integrase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recombinases that insert exogenous DNA into the host genome. Examples include proteins encoded by the POL GENE of RETROVIRIDAE and also by temperate BACTERIOPHAGES, the best known being BACTERIOPHAGE LAMBDA.",
    "arabic_definition": "الإنزيم المدمج للفيروسات القهقرية (IN) هو إنزيم يتم إنتاجه بواسطة فيروس قهقري مثل فيروس العوز المناعي البشري) ويمكّن اندماج مواده الجينية في الحمض النووي الخاص بالخلية الموبوءة. ولا يجب الخلط بين الإنزيمات المدمجة للفيروسات القهقرية وبين إنزيمات الفيروس البكتيري، مثل إنزيم الفيروس البكتيري λ (Int) (راجع إعادة التجميع محددة الموقع). (Integrases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019426.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "solubility",
    "term_en": "Solubility",
    "term_ar": "انحلالية",
    "synonyms": [
      "Solubilities"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The ability of a substance to be dissolved, i.e. to form a solution with another substance. (From McGraw-Hill Dictionary of Scientific and Technical Terms, 6th ed)",
    "arabic_definition": "الانحلالية أو الذائبية أو الذوبانية من خصائص المادة وهي معيار تحللها في مذيب وإلى أي درجة. فهي تصف خاصة من خواص المادة في مقدرتها على الامتزاج مع المذيب لتشكيل توزيع متجانس للذرات، أو الجزيئات، أو الشوارد (الأيونات). (Solubility)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012995.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "telomerase",
    "term_en": "Telomerase",
    "term_ar": "تيلوميراز",
    "synonyms": [
      "Telomerase Reverse Transcriptase",
      "Reverse Transcriptase, Telomerase",
      "Transcriptase, Telomerase Reverse",
      "Telomerase Catalytic Subunit",
      "Catalytic Subunit, Telomerase",
      "Subunit, Telomerase Catalytic",
      "Telomerase Reverse Transcriptase Catalytic Subunit"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An essential ribonucleoprotein reverse transcriptase that adds telomeric DNA to the ends of eukaryotic CHROMOSOMES.",
    "arabic_definition": "التيلوميراز (الإنجليزية: Telomerase) هو عبارة عن انزيم يمكن من المحافظة على طول الصبغي أثناء عملية تضاعف الحمض النووي الريبوزي منقوص الأكسجين عند حقيقيات النواة، حيث يعمل هذا الأنزيم على إضافة بنية محددة إلى نهايات الصبغي؛ كل طرف يشكل ما يسمى بالتيلومير (أو قسيم طرفي)، بالرغم من أن هذا الأخير يتألف أيضا من ديوكسي ريبونوكليوتيد شأنه شأن بقية الكروموسوم، إن عملية تصنيع التيلوميرات تتم بطريقة مختلفة تماما عن طريقة مضاعفة الحمض النووي التقليدية. التيلوميرازات هي في الواقع بروتينات نووية ريبوزية (مكونة من حمض نووي ريبوزي وبروتينات)، تتجلى وظيفتها الأساسية في تحفيز إضافة سلسلة بتكرار محدد إلى نهاية الصبغيات.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019098.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aquaporins",
    "term_en": "Aquaporins",
    "term_ar": "أكوابورين",
    "synonyms": [
      "Aquaporin",
      "Water Channel",
      "Channel, Water",
      "Water Channel Protein",
      "Channel Protein, Water",
      "Protein, Water Channel",
      "Water Channel Proteins",
      "Channel Proteins, Water"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of porins that allow the passage of WATER and other small molecules across CELL MEMBRANES.",
    "arabic_definition": "أكوابورين الأكوابورينات (الإنجليزية: Aquaporin)، وتسمى أيضًا قنوات الماء، هي بروتينات من عائلة كبيرة من البروتينات الداخلية الرئيسية التي تشكل مسامًا في غشاء الخلايا الحية، مما يسهل نقل الماء بين الخلايا بشكل أساسي. تحتوي أغشية الخلايا لمجموعة متنوعة من البكتيريا والفطريات والخلايا الحيوانية والنباتية على أكوابورينات يمكن للمياه أن تتدفق من خلالها بسرعة أكبر داخل وخارج الخلية أكثر من الانتشار عبر طبقة ثنائية الفوسفوليبيد (غشاء الخلية). (Aquaporins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020346.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "keratin-20",
    "term_en": "Keratin-20",
    "term_ar": "كيراتين 20",
    "synonyms": [
      "Cytokeratin 20"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type I keratin expressed predominately in gastrointestinal epithelia, MERKEL CELLS, and the TASTE BUDS of the oral mucosa.",
    "arabic_definition": "كيراتين 20 هو بروتين يوجد في الإنسان يُرمَّز عبر جين KRT20. كيرايتن 20 هو كيراتين خلوي من النوع الأول. (Keratin-20)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053554.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "keratin-17",
    "term_en": "Keratin-17",
    "term_ar": "كيراتين 17",
    "synonyms": [
      "Cytokeratin 17"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type I keratin found associated with KERATIN-6 in rapidly proliferating squamous epithelial tissue. Mutations in the gene for keratin-17 have been associated with PACHYONYCHIA CONGENITA, TYPE 2.",
    "arabic_definition": "كيراتين، النوع الأول من الهيكل الخلوي 17، هو بروتين يوجد في البشر، تمّ ترميزه بجين KRT17 . يوجد الكيراتين 17 في جريبات الشعر والأظافر والغدد الدهنية وملحقات الجلد الأخرى. (Keratin-17)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053537.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dystrophin",
    "term_en": "Dystrophin",
    "term_ar": "ديستروفين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A muscle protein localized in surface membranes which is the product of the Duchenne/Becker muscular dystrophy gene. Individuals with Duchenne muscular dystrophy usually lack dystrophin completely while those with Becker muscular dystrophy have dystrophin of an altered size. It shares features with other cytoskeletal proteins such as SPECTRIN and alpha-actinin but the precise function of dystrophin is not clear. One possible role might be to preserve the integrity and alignment of the plasma membrane to the myofibrils during muscle contraction and relaxation. MW 400 kDa.",
    "arabic_definition": "الديستروفين هو بروتين سيتوبلازمي وجزء حيوي من معقد البروتين الذي يربط الهيكل الخلوي للليف العضلي بالمادة الخلالية خارج الخلوية عبر غشاء الخلية. (Dystrophin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016189.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chemokines",
    "term_en": "Chemokines",
    "term_ar": "كيموكين",
    "synonyms": [
      "Chemotactic Cytokine",
      "Cytokine, Chemotactic",
      "Intercrine",
      "Chemotactic Cytokines",
      "Cytokines, Chemotactic",
      "Intercrines",
      "Chemokine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Class of pro-inflammatory cytokines that have the ability to attract and activate leukocytes. They can be divided into at least three structural branches: C; (CHEMOKINES, C); CC; (CHEMOKINES, CC); and CXC; (CHEMOKINES, CXC); according to variations in a shared cysteine motif.",
    "arabic_definition": "كيموكين (الإنجليزية: Chemokine) جاء من الكلمة اليونانية ( اليونانية -كينوس، حركة) هي عائلة من السيتوكينات الصغيرة، أو إشارات البروتينيات التي تفرزها الخلايا . وتستمد اسمها من قدرتها على إحداث تفاعلات كيميائية الموجه في استجابة الخلايا. (Chemokines)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018925.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tuberculin",
    "term_en": "Tuberculin",
    "term_ar": "توبركولين",
    "synonyms": [
      "PPD-B",
      "PPD-CG",
      "PPD-F",
      "PPD-L",
      "Purified Protein Derivative of Tuberculin",
      "PPD-S"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A protein extracted from boiled culture of tubercle bacilli (MYCOBACTERIUM TUBERCULOSIS). It is used in the tuberculin skin test (TUBERCULIN TEST) for the diagnosis of tuberculosis infection in asymptomatic persons.",
    "arabic_definition": "توبركولين هو مستخلص من المتفطرة السلية أو المتفطرة البقرية أو المتفطرة الطيرية يستعمل في تشخيص الإصابة بمرض السل في الحيوانات والبشر. هنالك عدة أنواع من اختبارات توبركولين والذي يعد المشتق البروتيني المنقى أهمها. (Tuberculin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014373.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "protamines",
    "term_en": "Protamines",
    "term_ar": "بروتامين",
    "synonyms": [
      "Protamine",
      "Protamine Chloride",
      "Chloride, Protamine",
      "Protamine Sulfate",
      "Sulfate, Protamine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of simple proteins that yield basic amino acids on hydrolysis and that occur combined with nucleic acid in the sperm of fish. Protamines contain very few kinds of amino acids. Protamine sulfate combines with heparin to form a stable inactive complex; it is used to neutralize the anticoagulant action of heparin in the treatment of heparin overdose. (From Merck Index, 11th ed; Martindale, The Extra Pharmacopoeia, 30th ed, p692)",
    "arabic_definition": "البروتامين عبارة عن بروتينات نووية صغيرة غنية بالأرجينين تحل محل الهستونات في مرحلة متأخرة من مرحلة التكون الأحادي للحيوانات المنوية ويعتقد أنها ضرورية لتكثيف رأس الحيوانات المنوية وتثبيت الحمض النووي. قد تسمح بتعبئة الحمض النووي بكثافة في الحيوانات المنوية أكثر من الهستونات، ولكن يجب فك ضغطها قبل أن يتم استخدام البيانات الجينية لتركيب البروتين. (Protamines)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011479.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amelogenin",
    "term_en": "Amelogenin",
    "term_ar": "أميلوجينين",
    "synonyms": [
      "Amelogenins"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A major dental enamel-forming protein found in mammals. In humans the protein is encoded by GENES found on both the X CHROMOSOME and the Y CHROMOSOME.",
    "arabic_definition": "الأميلوجينين هي مجموعة من النظائر البروتينية التي ينتجها الربط البديل أو التحلل البروتيني من جين أميلوجينين نظير إكس، على كروموسوم إكس، وكذلك جين أميلوجينين نظير واي في الذكور، على كروموسوم واي. يشاركون في تكوين النشوء، وتطوير المينا. (Amelogenin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053523.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photolysis",
    "term_en": "Photolysis",
    "term_ar": "تفكك ضوئي",
    "synonyms": [
      "Photodegradation",
      "Photodissociation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chemical bond cleavage reactions resulting from absorption of radiant energy.",
    "arabic_definition": "التفكك الضوئي هو التفاعل الكيميائي الذي تكسر فيه الروابط في مركب كيميائي بالفوتونات ويعرّف بتفاعل واحدة أو أكثر من الفوتونات مع هدف جزيئي واحد. التفكك الضوئي لا يقتصر على الضوء المرئي.أي فوتون يملك ما يكفي من الطاقة يمكن أن يؤثر على الروابط الكيميائية لمركب كيميائي. (Photolysis)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010782.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "e-selectin",
    "term_en": "E-Selectin",
    "term_ar": "السيليكتين الالتصاقي",
    "synonyms": [
      "Endothelial Leukocyte Adhesion Molecule-1",
      "Selectin, E",
      "ELAM-1",
      "LECAM-2",
      "CD62E Antigen",
      "Antigen, CD62E",
      "Antigens, CD62E",
      "CD62E Antigens"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cell adhesion molecule and CD antigen that mediates neutrophil, monocyte, and memory T-cell adhesion to cytokine-activated endothelial cells. E-selectin recognizes sialylated carbohydrate groups related to the Lewis X or Lewis A family.",
    "arabic_definition": "السيليكتين الالتصاقي (الإنجليزية: E-selectin)، المعروف أيضا باسم CD62 شبيه المستضد (CD62E)، أو جزيئات الكُريَّات البَيضاء البِطانِيَّة الالتصاقية 1 (ELAM-1) (الإنجليزية: endothelial-leukocyte adhesion molecule 1 (ELAM-1))، أو جزيئات الخلايا البِطانِيَّة الالتصاقية 2 (LECAM2) (الإنجليزية: leukocyte-endothelial cell adhesion molecule 2 (LECAM2))، هو سيليكتين خلية التصاق جزيء أعرب فقط على الخلايا البطانية التي تنشطها السيتوكينات. مثل غيره من سيليكتينز، يلعب دورًا مهمًا في الالتهاب.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019040.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synucleins",
    "term_en": "Synucleins",
    "term_ar": "سينوكلين",
    "synonyms": [
      "Synuclein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of homologous proteins of low MOLECULAR WEIGHT that are predominately expressed in the BRAIN and that have been implicated in a variety of human diseases. They were originally isolated from CHOLINERGIC FIBERS of TORPEDO.",
    "arabic_definition": "سينوكلينات عائلة بروتينية قابلة للذوبان شائعة في الفقاريات، وترتبط بالأنسجة العصبية وبعض الأورام. (Synucleins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051843.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytochromes",
    "term_en": "Cytochromes",
    "term_ar": "سيتوكروم",
    "synonyms": [
      "Cytochrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hemeproteins whose characteristic mode of action involves transfer of reducing equivalents which are associated with a reversible change in oxidation state of the prosthetic group. Formally, this redox change involves a single-electron, reversible equilibrium between the Fe(II) and Fe(III) states of the central iron atom (From Enzyme Nomenclature, 1992, p539). The various cytochrome subclasses are organized by the type of HEME and by the wavelength range of their reduced alpha-absorption bands.",
    "arabic_definition": "الصَبِيغات (مفردها:صَبِيغة) أو السيتوكرومات (الإنجليزية: cytochromes) هي بروتينات صبغية موجودة في الخلايا النباتية والحيوانية، تؤدي دوراً رئيسياً في تفاعلات الأكسدة والاختزال، تحتوي على الهيم، في صميمها يوجد ذرة حديد مركزية، كعامل مساعد. كما إنهم يشاركون في سلسلة نقل الإلكترون وحفز الأكسدة والاختزال.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003580.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "infliximab",
    "term_en": "Infliximab",
    "term_ar": "إنفليكسيماب",
    "synonyms": [
      "Monoclonal Antibody cA2",
      "Antibody cA2, Monoclonal",
      "cA2, Monoclonal Antibody",
      "MAb cA2",
      "Remicade",
      "Inflectra",
      "Renflexis",
      "Infliximab-dyyb"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chimeric monoclonal antibody to TNF-ALPHA that is used in the treatment of RHEUMATOID ARTHRITIS; ANKYLOSING SPONDYLITIS; PSORIATIC ARTHRITIS and CROHN'S DISEASE.",
    "arabic_definition": "إنفليكسيماب هو جسم مضاد وحيد النسيلة يستخدم لعلاج أمراض المناعة الذاتية. أول من طور إنفليكسيماب يان فيلتشك وجونمنغ لي في جامعة نيويورك مدرسة الطب ثم طورته سينتوكور (حالياً جانسن بايوتك). (Infliximab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069285.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "daclizumab",
    "term_en": "Daclizumab",
    "term_ar": "داكليزوماب",
    "synonyms": [
      "Dacliximab",
      "Ro 24-7375",
      "Ro 247375",
      "Zenapax",
      "Zinbryta"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An anti-TAC (INTERLEUKIN-2 RECEPTOR ALPHA SUBUNIT) humanized monoclonal antibody (immunoglobulin G1 disulfide with human-mouse monoclonal clone 1H4 light chain, dimer) that is used in the treatment of ACUTE RELAPSING MULTIPLE SCLEROSIS.",
    "arabic_definition": "داكليزوماب هو جسم مضاد وحيد النسيلة يستخدم لمنع رفض الطعم في زراعة الأعضاء مثل حالات زراعة الكلى. سوقته هوفمان-لا روش في أبريل 2008 في أوروبا تحت اسم زيناباكس (Zenapax) لكنه سحب في يناير 2009 بسبب عدم جدواه الاقتصادية بحسب الشركة وبسبب أمان استخدامه. (Daclizumab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077561.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "filgrastim",
    "term_en": "Filgrastim",
    "term_ar": "فيلغراستيم",
    "synonyms": [
      "R-metHuG-CSF",
      "Recombinant-Methionyl Human Granulocyte Colony-Stimulating Factor",
      "G-CSF Recombinant, Human Methionyl",
      "Neupogen",
      "Topneuter",
      "Zarxio",
      "Tbo-Filgrastim"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A recombinant granulocyte colony-stimulating factor (G-CSF) that is used in the treatment and prevention of NEUTROPENIA, preparation and collection of blood progenitor cells, and for use in PERIPHERAL BLOOD STEM CELL TRANSPLANTATION.",
    "arabic_definition": "فيلغراستيم هو عامل تحفيز مستعمرات الكريات البيض المأشوب تستعمل لحفيز تكاثر وتمايز الخلايا المحببة. يعد فيلغراستيم دواء مماثلا لعامل تحفيز مستعمرات الخلايا المحببة الطبيعي، وينتج بواسطة تقنية الحمض النووي معاد التركيب. (Filgrastim)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069585.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "etanercept",
    "term_en": "Etanercept",
    "term_ar": "إيتانرسبت",
    "synonyms": [
      "TNF Receptor Type II-IgG Fusion Protein",
      "Enbrel",
      "TNFR-Fc Fusion Protein",
      "Fusion Protein, TNFR-Fc",
      "TNTR-Fc",
      "TNR 001",
      "TNR001"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A recombinant version of soluble human TNF receptor fused to an IgG FC fragment that binds specifically to TUMOR NECROSIS FACTOR and inhibits its binding with endogenous TNF receptors. It prevents the inflammatory effect of TNF and is used to treat RHEUMATOID ARTHRITIS; PSORIATIC ARTHRITIS and ANKYLOSING SPONDYLITIS.",
    "arabic_definition": "الاسم التجاري: Enbrel وهو عبارة عن بروتين اندماجي محضر بطريقة الدي إن إيه المؤتلف (recombinant DNA). حيث تم دمج مستقبل العامل المنخر للورم TNF مع الجزء الثابت من الضد IgG1. (Etanercept)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000068800.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acetylation",
    "term_en": "Acetylation",
    "term_ar": "أستلة",
    "synonyms": [
      "Acetylations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Formation of an acetyl derivative. (Stedman, 25th ed)",
    "arabic_definition": "الأسْتَلَة (Acetylation) في الكيمياء هي تفاعل كيميائي عضوي يتم فيه إضافة مجموعة أسيتيل إلى مركب كيميائي. لتفاعل الأستلة أهمية في الاصطناع العضوي وفي الكيمياء الحيوية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000107.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "omalizumab",
    "term_en": "Omalizumab",
    "term_ar": "أوماليزوماب",
    "synonyms": [
      "Xolair"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An anti-IgE, recombinant, humanized monoclonal antibody which specifically binds to the C epsilon3 domain of IMMUNOGLOBULIN E, the site of high-affinity IgE receptor binding. It inhibits the binding of IgE to MAST CELLS and BASOPHILS to reduce the severity of the allergic response and is used in the management of persistent allergic ASTHMA.",
    "arabic_definition": "أوماليزوماب هو جسم مضاد وحيد النسيلة طورته روش/جننتك ونوفارتس لعلاج الربو التحسسي المتوسط إلى الحاد غير المستجيب لجرعات عالية من الكورتيزونات. كذلك يستخدم في علاج الشرى المزمن العفوي (أو الشرى المزمن مجهول السبب) الذي لا يمكن علاجه بجرعات عالية من مضاد الهستامين H1. (Omalizumab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069444.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibrillins",
    "term_en": "Fibrillins",
    "term_ar": "فايبريلين",
    "synonyms": [
      "Fibrillin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of extracellular matrix glycoproteins that is structurally similar to LATENT TGF-BETA BINDING PROTEINS, but contain additional TGF-beta binding domains, in addition to unique domains at their N and C-terminals. Fibrillins assemble into 10-12 nm MICROFIBRILS that function in a variety of cell interactions with the EXTRACELLULAR MATRIX and developmental processes such as ELASTIC TISSUE maintenance and assembly, and the targeting of growth factors to the extracellular matrix.",
    "arabic_definition": "فايبريلين (الإنجليزية: Fibrillin) بروتين مرمز بالجين FBN1 على الكرموسوم 15يحرض الخلاية السماة مصورات الليف على إنتاج الألياف المرنة بالنسيج الضام خارج الخلوي التي تعطي النسيج مرونة وقوة الطفرات في هذا الجين تؤدي إلى غياب الألياف المرنة بالنسيج الضام وضعف بمرونته وقوته مما يؤدي إالى اضطراب في وظيفة الأعضاء حسب موقعه مثال عليه متلازمة مورفان. (Fibrillins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071837.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adalimumab",
    "term_en": "Adalimumab",
    "term_ar": "أداليموماب",
    "synonyms": [
      "Humira",
      "Amjevita",
      "Cyltezo",
      "D2E7 Antibody",
      "Antibody, D2E7",
      "Adalimumab-atto",
      "Adalimumab-adbm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A humanized monoclonal antibody that binds specifically to TNF-ALPHA and blocks its interaction with endogenous TNF RECEPTORS to modulate INFLAMMATION. It is used in the treatment of RHEUMATOID ARTHRITIS; PSORIATIC ARTHRITIS; CROHN'S DISEASE and ULCERATIVE COLITIS.",
    "arabic_definition": "أداليموماب (الإنجليزية: Adalimumab) هو جسم مضاد وحيد النسيلة مصدره بشري بالكامل يعد ثالث مثبط عامل نخر الورم يقر استخدامه في الولايات المتحدة بعد إنفلاكسيماب وإيتانرسبت. يستخدم لعلاج التهاب المفاصل الروماتويدي (Rheumatoid arthritis)، والصدفية والتهاب المفاصل الصدفي(psoriasis and psoriatic arthritis )، والتهاب الفقار اللاصق (ankylosing spondylitis ) ، ومرض كرون (Crohn's disease)، وغيرها من الأمراض يوصى بالاستخدام بشكل عام فقط للأشخاص الذين لم يستجيبوا للعلاجات الأخرى.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000068879.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gemtuzumab",
    "term_en": "Gemtuzumab",
    "term_ar": "جيمتوزوماب أوزوغاميسين",
    "synonyms": [
      "CMA 676",
      "CMA676",
      "Mylotarg",
      "Gemtuzumab Ozogamicin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Immunotoxin that consists of an anti-CD33 (CD33 ANTIGEN) monoclonal antibody conjugated to CALICHEAMICIN. It is used for the treatment of ACUTE MYELOID LEUKEMIA.",
    "arabic_definition": "جيمتوزوماب أوزوغاميسين (الإنجليزية: Gemtuzumab ozogamicin) هو جسم مضاد وحيد النسيلة مرتبط بدواء. استخدم لعلاج ابيضاض الدم النقوي الحاد للفترة 2000-2010 لكنه سحب من الاستخدام في حزيران 2010 بعد تقارير تفيد بارتفاع معدلات الوفاة إضافة لعدم وجود فائدة تضاف إلى الأدوية البديلة الأخرى.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000079982.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cyclization",
    "term_en": "Cyclization",
    "term_ar": "مركب حلقي",
    "synonyms": [
      "Cyclizations",
      "Cyclic compound"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Changing an open-chain hydrocarbon to a closed ring. (McGraw-Hill Dictionary of Scientific and Technical Terms, 5th ed)",
    "arabic_definition": "المركب الحلقي في الكيمياء، هو مركب يتكون من سلسلة من الذرات متصلة ببعضها لتشكل حلقة. ومع أن الغالبية العظمى من المركبات الحلقية هي مركبات عضوية، إلا أن يوجد مركبات غير عضوية قليلة تشكل مركبات حلقية أيضًا، تتضمن الكبريت، والسيليكون الذي يشكل مركبات السيلان، و الفوسفور الذي يشكل مركبات الفوسفان. (Cyclization)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003500.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "uromodulin",
    "term_en": "Uromodulin",
    "term_ar": "بروتين تام-هورسفال",
    "synonyms": [
      "Uromucoid",
      "Tamm-Horsfall Glycoprotein",
      "Tamm-Horsfall Protein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A glycosyl-phosphatidyl-inositol (GPI) - anchored membrane protein found on the thick ascending limb of the LOOP OF HENLE. The cleaved form of the protein is found abundantly in URINE.",
    "arabic_definition": "بروتين تام-هورسفال (الإنجليزية: Tamm–Horsfall protein) أو يورومودولين (الإنجليزية: uromodulin) هو بروتين سكري موجود عند الإنسان ومشفر بالجين UMOD. يعد اليورومودولين أكثر بروتين يطرح في البول العادي.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058949.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ipilimumab",
    "term_en": "Ipilimumab",
    "term_ar": "إيبيليموماب",
    "synonyms": [
      "Anti-CTLA-4 MAb Ipilimumab",
      "Ipilimumab, Anti-CTLA-4 MAb",
      "MDX 010",
      "MDX010",
      "MDX-CTLA-4",
      "Yervoy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An anti-CTLA-4 ANTIGEN monoclonal antibody initially indicated for the treatment of certain types of metastatic MELANOMA. Its mode of actions may include blocking of CTLA-4 mediated inhibition of CYTOTOXIC T LYMPHOCYTES, allowing for more efficient destruction of target tumor cells.",
    "arabic_definition": "إيبيليموماب (يسمى أيضاً MDX-010 و MDX-101) هو جسم مضاد وحيد النسيلة بشري تنتجه برستول مايرز سكويب ويسوق تحت اسم تجاري هو يرفوي (Yervoy) وقد حصل في آذار 2011 على موافقة إدارة الغذاء والدواء الأمريكية لاستخدامه في علاج الميلانوما لكونه يحفز الجهاز المناعي. كما حصل على موافقة صحة كندا لاستخدامه في علاج الورم الميلانيني النقيلي في 1 شباط 2012. (Ipilimumab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074324.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mesothelin",
    "term_en": "Mesothelin",
    "term_ar": "ميزوثيلين",
    "synonyms": [
      "Megakaryocyte Potentiating Factor",
      "Factor, Megakaryocyte Potentiating",
      "Potentiating Factor, Megakaryocyte",
      "CAK-1 Antigen",
      "Antigen, CAK-1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An ANTIGEN present on the surface of certain types of normal cells and overexpressed in several human tumors, including OVARIAN CANCER.",
    "arabic_definition": "ميزوثيلين هو بروتين موجود بالإنسان يشفَّر عبر جين MSLN. (Mesothelin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000090204.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epiregulin",
    "term_en": "Epiregulin",
    "term_ar": "إبيرجولين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A member of the epidermal growth factor (EGF) family of peptide growth factors that is synthesized as a transmembrane protein which can be cleaved to release a soluble active form. Epiregulin has specificity for the EGF RECEPTOR and the ERBB-4 RECEPTOR.",
    "arabic_definition": "إبيرجولين‏ (Epiregulin) هوَ بروتين يُشَفر بواسطة جين Epiregulin في الإنسان.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D066260.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteolysis",
    "term_en": "Proteolysis",
    "term_ar": "تحلل بروتيني",
    "synonyms": [
      "Proteolyses",
      "Protein Degradation",
      "Degradation, Protein",
      "Degradations, Protein",
      "Protein Degradations",
      "Protein Digestion",
      "Digestion, Protein",
      "Digestions, Protein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cleavage of proteins into smaller peptides or amino acids either by PROTEASES or non-enzymatically (e.g., Hydrolysis). It does not include Protein Processing, Post-Translational.",
    "arabic_definition": "التحلل البروتيني هي عملية انحلال البروتينات إلى مكوناتها الأولية أي أحماض أمينية عن طريق تفاعلات حلمهة محفزة من الببتيداز أي باختصار عملية هدم البروتين جزئياً أو كلياً. (Proteolysis)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059748.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipoylation",
    "term_en": "Lipoylation",
    "term_ar": "حمض الليبويك",
    "synonyms": [
      "Palmitoylation",
      "Lipoic acid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Covalent attachment of LIPIDS and FATTY ACIDS to other compounds and PROTEINS.",
    "arabic_definition": "حمض ألفا- ليبويك (الإنجليزية: Alpha lipoic acid)اختصارا (ALA)، ويعرف أيضا باسم حمض ليبويك (الإنجليزية: Lipoic acid) اختصارا (LA). هو مركب كبريتي عضوي (Organosulfur compounds)مشتق من حمض الأوكتانويك (Caprylic acid). (Lipoylation)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054878.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trastuzumab",
    "term_en": "Trastuzumab",
    "term_ar": "تراستوزوماب",
    "synonyms": [
      "Trastuzumab beta",
      "beta, Trastuzumab",
      "Herceptin",
      "Trazimera",
      "Trastuzumab-qyyp"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A humanized monoclonal antibody against the ERBB-2 RECEPTOR (HER2). As an ANTINEOPLASTIC AGENT, it is used to treat BREAST CANCER where HER2 is overexpressed.",
    "arabic_definition": "تراستوزوماب أو تراست زوماب (والاسم التجاري هيرسيبتين) هو الأجسام المضادة وحيدة النسيلة تتداخل مع مستقبلات ( HER2/neu ). استخدامه الرئيسي هو لعلاج بعض أنواع سرطان الثدي. (Trastuzumab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000068878.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prenylation",
    "term_en": "Prenylation",
    "term_ar": "برنلة",
    "synonyms": [
      "Farnesylation",
      "Geranylgeranylation",
      "Isoprenylation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Attachment of isoprenoids (TERPENES) to other compounds, especially PROTEINS and FLAVONOIDS.",
    "arabic_definition": "البرنلة (الإنجليزية: Prenylation) هي عملية حيوية تشتمل على إضافة جزيئات كارهة للماء للبروتين أو المركبات الكيميائية الأخرى. يُفترض عادةً أن مجموعة مركبات البرنيل تسهل ارتباط البروتينات بالأغشية الخلوية على غرار المركبات المثبتة للشحوم على الرغم من عدم وجود دليل مباشر يدعم ذلك.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054876.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chaperonins",
    "term_en": "Chaperonins",
    "term_ar": "تشابيرونين",
    "synonyms": [
      "Chaperonin",
      "Chaperonin Family",
      "Chaperonin Complexes",
      "Chaperonin Complex",
      "Complex, Chaperonin",
      "Chaperonin Protein Complex"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of multisubunit protein complexes that form into large cylindrical structures which bind to and encapsulate non-native proteins. Chaperonins utilize the energy of ATP hydrolysis to enhance the efficiency of PROTEIN FOLDING reactions and thereby help proteins reach their functional conformation. The family of chaperonins is split into GROUP I CHAPERONINS, and GROUP II CHAPERONINS, with each group having its own repertoire of protein subunits and subcellular preferences.",
    "arabic_definition": "التشابيروتين أو البروتين المرافق (الإنجليزية: Chaperonin) هي جزيئات بروتينية من عائلة بروتينات الصدمة الحرارية تساعد في التطوي السليم للبروتينات الأخرى، ولكنها لا تحدد الهيكل النهائي لعديد الببتيد، بل إنها تبقي عديد الببتيد الجديد مفصولا عن الظروف الكيميائية المدمرة له في بيئة السيتوبلازم، في حين أنها توفر البيئة المناسبة التي تسمح للبروتينات بانطوائها من تلقاء نفسها. والتشابيرونين كما في بكتيريا إي كولاي هو على شكل اسطوانة جوفاء. (Chaperonins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018833.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bevacizumab",
    "term_en": "Bevacizumab",
    "term_ar": "بيفاسيزوماب",
    "synonyms": [
      "Avastin",
      "Mvasi",
      "Bevacizumab-awwb"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An anti-VEGF humanized murine monoclonal antibody. It inhibits VEGF RECEPTORS and helps to prevent PATHOLOGIC ANGIOGENESIS.",
    "arabic_definition": "بيفاسيزوماب هو جسم مضاد وحيد النسيلة تنتجه هوفمان-لا روش وجينيتك تحت اسم تجاري هو أفاستين (Avastin). يعمل من خلال تأثيره في تثبيط عمل هرمون يزيد من نمو الأوعية الدموية في الأورام. (Bevacizumab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000068258.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wettability",
    "term_en": "Wettability",
    "term_ar": "ترطيب",
    "synonyms": [
      "Wettabilities",
      "Hygroscopicity",
      "Hygroscopicities",
      "Wetability",
      "Wetabilities",
      "Wetting"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The quality or state of being wettable or the degree to which something can be wet. This is also the ability of any solid surface to be wetted when in contact with a liquid whose surface tension is reduced so that the liquid spreads over the surface of the solid.",
    "arabic_definition": "الترطيب أو التبليل وهي قدرة السائل على محافظة الاتصال مع سطح صلب، نتيجة عن تفاعلات بين الجزيئات عندما يتم يتلامس الأثنان معا. يتم تحديد درجة الترطيب (قابلية ترطب) عن طريق توازن القوة بين الالتصاق وقوات التماسك. (Wettability)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017155.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "natalizumab",
    "term_en": "Natalizumab",
    "term_ar": "ناتاليزوماب",
    "synonyms": [
      "Antegren",
      "Tysabri"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A humanized monoclonal immunoglobulin G4 antibody to human INTEGRIN ALPHA4 that binds to the alpha4 subunit of INTEGRIN ALPHA4BETA1 and integrin alpha4beta7. It is used as an IMMUNOLOGIC FACTOR in the treatment of RELAPSING-REMITTING MULTIPLE SCLEROSIS and CROHN'S DISEASE.",
    "arabic_definition": "ناتاليزوماب هو جسم مضاد وحيد النسيلة مأنسن مضاد لجزيء التصاق الخلية α4-إنتغرين. يستخدم ناتاليزوماب في علاج التصلب اللويحي (أو التصلب المتعدد) وداء كرون. (Natalizumab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069442.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endostatins",
    "term_en": "Endostatins",
    "term_ar": "إندوستاتين",
    "synonyms": [
      "Endostatin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Angiostatic proteins that are formed from proteolytic cleavage of COLLAGEN TYPE XVIII.",
    "arabic_definition": "الإندوستاتين هو شظية طبيعية مشتقة من النهاية الكربوكسيلية لكولاجين النوع الثامن عشر، ويبلغ وزنه الجزيئي نحو 20 كيلودالتون. تبين أنه يعمل مثبطًا لتكوّن الأوعية الدموية، على غرار أنجيوستاتين وثرومبوسبوندين. (Endostatins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D043169.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endothelins",
    "term_en": "Endothelins",
    "term_ar": "إندوثيلين",
    "synonyms": [
      "Endothelin",
      "Endothelium-Derived Vasoconstrictor Factors",
      "Vasoconstrictor Factors, Endothelium-Derived"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "21-Amino-acid peptides produced by vascular endothelial cells and functioning as potent vasoconstrictors. The endothelin family consists of three members, ENDOTHELIN-1; ENDOTHELIN-2; and ENDOTHELIN-3. All three peptides contain 21 amino acids, but vary in amino acid composition. The three peptides produce vasoconstrictor and pressor responses in various parts of the body. However, the quantitative profiles of the pharmacological activities are considerably different among the three isopeptides.",
    "arabic_definition": "الإندوثيلين هو ببتيد مقبض وعائي يتألف من 21 حمض أميني، يلعب دورا رئيسيا في التوازن في الأوعية الدموية. يفرز من طليعة الإندوتللين الذي يتحول إلى الإندوتللين بوجود الأنزيم المحول للإندوتلين الموجود داخل وعلى سطح الخلايا المبطنة للأوعية الدموية. (Endothelins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016232.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteopontin",
    "term_en": "Osteopontin",
    "term_ar": "أوستيوبونتين",
    "synonyms": [
      "Bone Sialoprotein 1",
      "Sialoprotein 1, Bone",
      "Bone Sialoprotein I",
      "Sialoprotein I, Bone",
      "Secreted Phosphoprotein 1",
      "Sialoprotein 1",
      "Uropontin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A negatively-charged extracellular matrix protein that plays a role in the regulation of BONE metabolism and a variety of other biological functions. Cell signaling by osteopontin may occur through a cell adhesion sequence that recognizes INTEGRIN ALPHA-V BETA-3.",
    "arabic_definition": "الأوستيوبونتين (الإنجليزية: Osteopontin) ويعرف كذلك بسيالوبروتين العظم 1 (BSP-1 أو BNSP)، منشط اللمفاوية التائية الأولى، البروتين الفوسفوري المفرَز 1 (SPP1). هو بروتين يشفَّر لدى البشر بواسطة الجين SPP1.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053495.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipogenesis",
    "term_en": "Lipogenesis",
    "term_ar": "تكون الشحم",
    "synonyms": [
      "Lipogeneses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "De novo fat synthesis in the body. This includes the synthetic processes of FATTY ACIDS and subsequent TRIGLYCERIDES in the LIVER and the ADIPOSE TISSUE. Lipogenesis is regulated by numerous factors, including nutritional, hormonal, and genetic elements.",
    "arabic_definition": "يشير مصطلح تكون الشحم في الكيمياء الحيوية إلى العملية التي يتم من خلالها تحويل الأحماض الدهنية والجلسرين إلى دهون، أو عملية التمثيل الغذائي التي يتم من خلالها تحويل أسيتيل مرافق الإنزيم-أ إلى دهون ثلاثية لتخزين الدهون. يتم تضمين كل من إنتاج الأحماض الدهنية والدهون الثلاثية في عملية تكوين الدهون، حيث تكون الطريقة الأخيرة هي الطريقة التي يتم من خلالها أسترة الأحماض الدهنية إلى الجلسرين ثم تعبئتها في البروتين الدهني منخفض الكثافة جدًا (VLDL). (Lipogenesis)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050155.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteocalcin",
    "term_en": "Osteocalcin",
    "term_ar": "أوستيوكالسين",
    "synonyms": [
      "4-Carboxyglutamic Protein, Bone",
      "Bone 4-Carboxyglutamic Protein",
      "Protein, Bone 4-Carboxyglutamic",
      "Bone gamma-Carboxyglutamic Acid Protein",
      "Bone Gla Protein",
      "Protein, Bone Gla",
      "Calcium-Binding Protein, Vitamin K-Dependent"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Vitamin K-dependent calcium-binding protein synthesized by OSTEOBLASTS and found primarily in BONES. Serum osteocalcin measurements provide a noninvasive specific marker of bone metabolism. The protein contains three residues of the amino acid gamma-carboxyglutamic acid (Gla), which, in the presence of CALCIUM, promotes binding to HYDROXYAPATITE and subsequent accumulation in BONE MATRIX.",
    "arabic_definition": "أوستيوكالسين (الإنجليزية: Osteocalcin) معروف أيضًا باسم ببروتين العظام المحتوي علي الحمض الأميني جاما كربوكسي جلوتامين (BGLAP)، هو هرمون ببتيدي غير كولاجيني يتواجد في العظام والأسنان، عملية تصنيعه معتمدة علي وجود فيتامين K لاحتوائه علي موقع غلا (gla domains).",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015675.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "desmogleins",
    "term_en": "Desmogleins",
    "term_ar": "ديزموغلين",
    "synonyms": [
      "Desmoglein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of desmosomal cadherins with cytoplasmic tails that resemble those of classical CADHERINS.",
    "arabic_definition": "الدِّيزموغلينات (الاسم العلمي: Desmogleins) هي عائلةٌ من الكادهيرينات الديزموسوميَّة، وتتكون من البروتينات ديزموغلين-1 وديزموغلين-2 وديزموغلين-3 وديزموغلين-4. وتؤدي دورًا في تكوين الجسيمات الرابطة (الديزموسومات) التي تصل الخلايا بعضها ببعض.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051182.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ranibizumab",
    "term_en": "Ranibizumab",
    "term_ar": "رانيبيزوماب",
    "synonyms": [
      "RhuFab V2",
      "V2, RhuFab",
      "Lucentis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A recombinant humanized monoclonal antibody fragment that binds VEGF-A to prevent its binding to VEGFR-1 and VEGFR-2 receptors. This activity reduces vessel permeability and angiogenesis in the treatment of neovascular age-related MACULAR DEGENERATION.",
    "arabic_definition": "رانيبيزوماب(Ranibizumab)، الذي يُباع تحت الإسم التجاري لوسينتيس(Lucentis) من بين أسماء أخرى، هو دواء يستخدم لعلاج النوع \"الرطب\" من التنكس البقعي المرتبط بالعمر (AMD)، و اعتلال الشبكية السكري، و الوذمة البقعية بسبب انسداد الوريد الشبكي، و اعتلال الشبكية الخداجي. و يعطى عن طريق الحقن في العين.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069579.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "palivizumab",
    "term_en": "Palivizumab",
    "term_ar": "باليفيزوماب",
    "synonyms": [
      "MEDI 493",
      "Monoclonal Antibody MEDI-493",
      "Monoclonal Antibody MEDI493",
      "MEDI493",
      "Synagis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A humanized monoclonal antibody and ANTIVIRAL AGENT that is used to prevent RESPIRATORY SYNCYTIAL VIRUS INFECTIONS in high risk pediatric patients.",
    "arabic_definition": "باليفيزوماب (Palivizumab)، الذي يُباع تحت الإسم التجاري سيناجيس( Synagis) هو دواء يستخدم للوقاية من عدوى الفيروس المخلوي التنفسي الحاد (RSV) لدى الأشخاص المعرضين لخطر كبير. وهذا يشمل الأطفال الذين تقل أعمارهم عن 6 أشهر والذين ولدوا قبل الأوان و أولئك الذين تقل أعمارهم عن عامين و الذين يعانون من أمراض معينة في القلب أو الرئة.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069455.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "presenilins",
    "term_en": "Presenilins",
    "term_ar": "بريسنلين",
    "synonyms": [
      "Presenilin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Integral membrane proteins and essential components of the gamma-secretase complex that catalyzes the cleavage of membrane proteins such as NOTCH RECEPTORS and AMYLOID BETA-PEPTIDES precursors. Mutations of presenilins lead to presenile ALZHEIMER DISEASE with onset before age 65 years.",
    "arabic_definition": "البريسنلينات (الإنجليزية: Presenilins) هي عائلة من البروتينات عبر الغشائية متعددة العبور، وتشكل الوحدات الفرعية المحفزة في مركب البروتياز داخل الغشائي غاما سيكريتاز. حُددت لأول مرة في تصويرات لطفرات تسبب البدء المبكر لمرض آلزهايمر العائلي بواسطة بيتر سانت جورج هيسلوب في مركز البحوث في أمراض الأعصاب في جامعة تورنتو، والآن كذلك في جامعة كامبريدج.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053763.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ustekinumab",
    "term_en": "Ustekinumab",
    "term_ar": "أوستيكينوماب",
    "synonyms": [
      "CNTO 1275",
      "Stelara"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A humanized monoclonal antibody that binds to IL-12 and IL-23 and is used as a DERMATOLOGIC AGENT in the treatment of patients with plaque PSORIASIS who have not responded to other therapies.",
    "arabic_definition": "أوستيكينوماب (الإنجليزية: Ustekinumab)، الذي يُباع تحت الاسم التجاري ستيلارا (الإنجليزية: Stelara)، هو دواء يستخدم لعلاج داء كرون، والتهاب القولون التقرحي، والصدفية اللويحية، والتهاب المفاصل الصدفي . يُسْخدم بشكل عام فقط إذا لم تكن العلاجات الأخرى فعالة.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069549.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurogranin",
    "term_en": "Neurogranin",
    "term_ar": "نيوروغرانين",
    "synonyms": [
      "P17 Protein Kinase C Substrate",
      "RC3 Protein (Neurogranin)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A BRAIN-specific substrate for PROTEIN KINASE C that binds CALMODULIN and is involved in regulation of CALCIUM SIGNALING.",
    "arabic_definition": "نيوروغرانين هو بروتين مرتبط بالكالمودولين يُعبر عنه بشكل أساسي في الدماغ، وخاصة في العمود الفقري الشجيري، والمشاركة في مسار إشارات كيناز بروتين C. نيوروغرانين هو البروتين الرئيسي بعد المشبكي الذي ينظم توافر الكالودولين، ويرتبط به في غياب الكالسيوم. الفسفرة بواسطة كيناز بروتين c يقلل من قدرتها على الارتباط. (Neurogranin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051579.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipocalin-2",
    "term_en": "Lipocalin-2",
    "term_ar": "إل سي إن 2",
    "synonyms": [
      "Neutrophil Gelatinase-Associated Lipocalin",
      "Lipocalin-2 Protein",
      "Oncogene 24p3 Protein",
      "Siderocalin Protein",
      "NGAL Protein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A lipocalin of approximately 200 amino acids that functions as an iron transporter and is expressed by cells of BONE MARROW and many other cells with secretory functions. It is involved in APOPTOSIS and may function to limit pathogenic bacterial growth as part of the INNATE IMMUNE RESPONSE.",
    "arabic_definition": "الليبوكالين 2 (LCN2) والمعروف أيضا بالجين الورمي 24p3 أو neutrophil gelatinase-associated lipocalin (NGAL) عبارة عن بروتين تشفره عند البشر جينة LCN2.. يتدخل الNGAL في المناعة الفطرية من خلال حجز الحديد مما يسبب الحد من نمو الجراثيم. (Lipocalin-2)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071068.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interferons",
    "term_en": "Interferons",
    "term_ar": "إنترفيرون",
    "synonyms": [
      "Interferon"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Proteins secreted by vertebrate cells in response to a wide variety of inducers. They confer resistance against many different viruses, inhibit proliferation of normal and malignant cells, impede multiplication of intracellular parasites, enhance macrophage and granulocyte phagocytosis, augment natural killer cell activity, and show several other immunomodulatory functions.",
    "arabic_definition": "إنترفيرون(الإنجليزية: Interferon) يعرف أختصاراً بـ IFN أو المتدخل هي مجموعة من البروتينات تنتجها الخلايا اللمفاوية التائية المنشطة، والخلايا الأكولة الكبيرة، وخلايا الأنسجة المصابة بالفيروسات. تطلقها الخلية المصابة بالفيروس وترتبط على الخلايا السليمة المجاورة وتزيد من تمنعها ضد الاصابة بالفيروس. (Interferons)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007372.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "methylation",
    "term_en": "Methylation",
    "term_ar": "مثيلة",
    "synonyms": [
      "Methylations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Addition of methyl groups. In histo-chemistry methylation is used to esterify carboxyl groups and remove sulfate groups by treating tissue sections with hot methanol in the presence of hydrochloric acid. (From Stedman, 25th ed)",
    "arabic_definition": "المَثْيَلَة في الكيمياء هي عملية إضافة مجموعة ميثيل إلى ركيزة (Substrate)، ومن حيث المبدأ فهي تندرج ضمن عمليات الألكلة، والتي تحل فيها مجموعة ميثيل مكان ذرة هيدروجين في الجزيء الهدف. تصادف حالة المثيلة بشكل شائع في الكيمياء والكيمياء الحيوية وفي علم التربة وفي العلوم الحيوية. (Methylation)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008745.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "deamination",
    "term_en": "Deamination",
    "term_ar": "نزع أمين",
    "synonyms": [
      "Deaminations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The removal of an amino group (NH2) from a chemical compound.",
    "arabic_definition": "نزع الأمين أو النَّزْمَنة في الكيمياء هو تفاعل عضوي يتضمن نزع أو إزالة مجموعة أمين من مركب عضوي. لهذا التفاعل أهمية على الصعيد الحيوي والصناعي. (Deamination)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003641.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemerythrin",
    "term_en": "Hemerythrin",
    "term_ar": "هيميرثرين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A non-heme iron protein consisting of eight apparently identical subunits each containing 2 iron atoms. It binds one molecule of oxygen per pair of iron atoms and functions as a respiratory protein.",
    "arabic_definition": "هيميرثرين أو هيموإرثرين (Hemerythrin تلفظ هيم إِرثرين) هو بروتين قليل الوحدات يعدّ مسؤولاً عن نقل الأكسجين في شعبة اللافقاريات البحرية. يكون الهيميرثرين والميوهيميرثرين عديمة اللون عندما تكون غير مرتبطة بالأكسجين، وتصبح ذات لون زهري-بنفسجي في حالة الارتباط، وتبلغ الكتلة الجزيئية للبروتين 108 كيلو دالتون (kDa).",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006422.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pepsinogens",
    "term_en": "Pepsinogens",
    "term_ar": "ببسين",
    "synonyms": [
      "Pepsinogen B",
      "Pepsin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Proenzymes secreted by chief cells, mucous neck cells, and pyloric gland cells, which are converted into pepsin in the presence of gastric acid or pepsin itself. (Dorland, 28th ed) In humans there are 2 related pepsinogen systems: PEPSINOGEN A (formerly pepsinogen I or pepsinogen) and PEPSINOGEN C (formerly pepsinogen II or progastricsin). Pepsinogen B is the name of a pepsinogen from pigs.",
    "arabic_definition": "بِبْسين أو هَضْمين (الإنجليزية: Pepsin) هو إنزيم هضمي يقوم بهضم البروتينات في المعدة. الدرجة المثلى لعمل هذا الإنزيم هي 1.5 أس هيدروجيني وهو وسط شديد الحموضة. (Pepsinogens)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010435.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "luciferases",
    "term_en": "Luciferases",
    "term_ar": "لوسيفراز",
    "synonyms": [
      "Luciferase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that oxidize certain LUMINESCENT AGENTS to emit light (PHYSICAL LUMINESCENCE). The luciferases from different organisms have evolved differently so have different structures and substrates.",
    "arabic_definition": "لوسيفيراز ( (الإنجليزية: luciferase)) هو مصطلح عام لفئة من الإنزيمات التأكسدية المستخدمة في تلألؤ بيولوجي ومتميزة من الفوتوبروتين ( photoprotein ). الأسم مشتق من لوسيفر، والتي تعني «حامل الضوء» . (Luciferases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008156.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transferrin",
    "term_en": "Transferrin",
    "term_ar": "ناقل الحديد",
    "synonyms": [
      "beta-1 Metal-Binding Globulin",
      "Globulin, beta-1 Metal-Binding",
      "Metal-Binding Globulin, beta-1",
      "Serotransferrin",
      "Siderophilin",
      "Isotransferrin",
      "Monoferric Transferrins",
      "Transferrins, Monoferric"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An iron-binding beta1-globulin that is synthesized in the LIVER and secreted into the blood. It plays a central role in the transport of IRON throughout the circulation. A variety of transferrin isoforms exist in humans, including some that are considered markers for specific disease states.",
    "arabic_definition": "نواقل الحديد (الإنجليزية: Transferrins) هي بروتينات سكرية تربط الحديد في بلازما الدم تضبط مستوى الحديد الحر في السوائل الحيوية. يًرمز هذا البروتين الإنساني بالمورثة TF. ترتبط البروتينات السكرية للترانسفيرين بالحديد بإحكام شديد، لكن هذا الارتباط عكوس.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014168.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transcortin",
    "term_en": "Transcortin",
    "term_ar": "ترانزكورتين",
    "synonyms": [
      "Corticosteroid-Binding Globulin",
      "Serpin A6"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A serpin family member that binds to and transports GLUCOCORTICOIDS in the BLOOD.",
    "arabic_definition": "ترانزكورتين أو ترانسكورتين (الإنجليزية: Transcortin) أو سربين A6 (الإنجليزية: serpin A6) أو الغلوبولين المرتبط بالهرمونات القشرية أو الغلوبولين المرتبط بالستيرويد القشري (الإنجليزية: Corticosteroid-binding globulin) وهوَ بروتين مُشفر في جسم الإنسان عن طريق جين سربين A6 ‏\"SERPINA6\"، وهوَ غلوبولين ألفا. يُعَرَف الترانزكورتين بشكلٍ مُبسط على أنهُ ألفا بروتين يعمل على نَقل الكورتيزول في البلازما.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014156.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glucokinase",
    "term_en": "Glucokinase",
    "term_ar": "غلوكوكيناز",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of enzymes that catalyzes the conversion of ATP and D-glucose to ADP and D-glucose 6-phosphate. They are found in invertebrates and microorganisms, and are highly specific for glucose. (Enzyme Nomenclature, 1992) EC 2.7.1.2.",
    "arabic_definition": "غلوكوكينازأو جلوكوكيناز(الإنجليزية: Glucokinase) ويسمى أيضا (هكسوكيناز IV) شيفرته الكيميائية (EC 2.7.1.2)، وهو أحد انزيمات الكبد، يسرع ويسهل عملية تحويل الغلوكوز إلى غلوكوز -6- فوسفات. وهي المرحلة الأولى من تحلل السكر (Glycolysis).",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005941.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phytochrome",
    "term_en": "Phytochrome",
    "term_ar": "صبغة نباتية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A blue-green biliprotein widely distributed in the plant kingdom.",
    "arabic_definition": "الصبغة النباتية (الاسم العلمي Phytochrome)، صبغة توجد في سيتوبلازم النباتات الخضراء، وقد تتواجد في شكلين: الأول، الشكل (pr): وهو خامل بيولوجيًا. والثاني، الشكل (pfr) وهو نشط بيولوجيًا.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010834.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactoferrin",
    "term_en": "Lactoferrin",
    "term_ar": "لاكتوفيرين",
    "synonyms": [
      "Lactotransferrin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An iron-binding protein that was originally characterized as a milk protein. It is widely distributed in secretory fluids and is found in the neutrophilic granules of LEUKOCYTES. The N-terminal part of lactoferrin possesses a serine protease which functions to inactivate the TYPE III SECRETION SYSTEM used by bacteria to export virulence proteins for host cell invasion.",
    "arabic_definition": "اللاكتوفيرين بروتين متعدد الوظائف من نواقل الحديد. هو بروتين سكري كروي تبلغ كتلته الجزيئية نحو 80 كيلو دالتون، ويوجد في العديد من الإفرازات السائلة مثل الحليب واللعاب والدموع ومخاط الأنف. (Lactoferrin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007781.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plasminogen",
    "term_en": "Plasminogen",
    "term_ar": "بلازمين",
    "synonyms": [
      "Profibrinolysin",
      "Glu-Plasminogen",
      "Glutamic Acid 1-Plasminogen",
      "1-Plasminogen, Glutamic Acid",
      "Glutamyl Plasminogen",
      "Plasminogen, Glutamyl",
      "Plasmin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Precursor of plasmin (FIBRINOLYSIN). It is a single-chain beta-globulin of molecular weight 80-90,000 found mostly in association with fibrinogen in plasma; plasminogen activators change it to fibrinolysin. It is used in wound debriding and has been investigated as a thrombolytic agent.",
    "arabic_definition": "بلازمين هو إنزيم متواجد في الدم ويقوم بتكسير بروتينات الدم، خصوصا تجمع الفايبرين. تكسير الفيبرين يسمى بانحلال الفبرين. (Plasminogen)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010958.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nitrogenase",
    "term_en": "Nitrogenase",
    "term_ar": "نيتروجيناز",
    "synonyms": [
      "Dinitrogenase",
      "Vanadium Nitrogenase",
      "Nitrogenase, Vanadium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme system that catalyzes the fixing of nitrogen in soil bacteria and blue-green algae (CYANOBACTERIA). EC 1.18.6.1.",
    "arabic_definition": "نيتروجيناز (الإنجليزية: Nitrogenase) لديه نوعان من الشيفرات وهي ( EC 1.18.6.1- EC 1.19.6.1 ) وهو مجموعة من الإنزيمات التي تستخدمها بعض الكائنات الحية لإصلاح غاز النيتروجين في الغلاف الجوي والذي يستنشقه الإنسان في عملية التنفس (N2). هناك عائلة واحدة فقط من الانزيمات التي تقوم بهذه العملية وهي ثنائي النتروجين الخاملة تماما بسبب قوتها في كسر ذرة النيتروجين .",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009591.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trypsinogen",
    "term_en": "Trypsinogen",
    "term_ar": "مولد التربسين",
    "synonyms": [
      "Trypsinogen 1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inactive proenzyme of trypsin secreted by the pancreas, activated in the duodenum via cleavage by enteropeptidase. (Stedman, 25th ed)",
    "arabic_definition": "مُوَلِّدُ الترِبْسِين أو مولد التريبسين أو تربسينوجن أو تربسينوجين (الإنجليزية: Trypsinogen) هي الصيغة غير النشطة من إنزيم التربسن أو ما يسمى زيموجين أو مولد للإنزيم الذي يتم إنتاجها في البنكرياس ضمن العصارة البنكرياسية إلى جانب كيموتريبسينوجن وأميلاز و الليباز ثم تنقل إلى الإثنا عشر في الأمعاء الدقيقة حيث يتم تفعيلها لتصبح إنزيم التربسن الذي يساهم في هضم البروتينات التي يكتسبها الجسم من خلال الطعام.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014362.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ferredoxins",
    "term_en": "Ferredoxins",
    "term_ar": "فيريدوكسين",
    "synonyms": [
      "Ferredoxin",
      "Ferredoxin I",
      "Ferredoxin II",
      "Ferredoxin III"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Iron-containing proteins that transfer electrons, usually at a low potential, to flavoproteins; the iron is not present as in heme. (McGraw-Hill Dictionary of Scientific and Technical Terms, 5th ed)",
    "arabic_definition": "فيريدوكسين هو بروتين حديدي-كبريتي يدخل في عمليات انتقال الإلكترون ضمن نطاق واسع من العمليات الاستقلابية. اكتشف الفيريدوكسين أول مرة سنة 1962. (Ferredoxins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005288.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enkephalins",
    "term_en": "Enkephalins",
    "term_ar": "إنكيفالين",
    "synonyms": [
      "Enkephalin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of the three major families of endogenous opioid peptides. The enkephalins are pentapeptides that are widespread in the central and peripheral nervous systems and in the adrenal medulla.",
    "arabic_definition": "إنكيفالين (الإنجليزية: enkephalin) هو خماسي الببتيد تشارك في تنظيم حس الألم في الجسم من خلال تأثيره في رفع المُسْتَوى العَتَبيّ للأَلَم وتَسْكينه، وينتج في الدماغ وهو من اللَجائِن (اللَجين جزيء يلتحم بجزيء آخر) الدَاخِلِيّة المَنْشَأ، أو على وجه التحديد بالإِنْدُورْفِينات، كونها دَاخِلِيّة المَنْشَأ وترتبط بمستقبلات الجسم الأفيونية، وفي عام 1975 تم اكتشاف اثنين منها، واحد يحتوي على اللوسين(لو-إنكِيفالِين) والأخر يحتوي على المِثيونين (ميت-إنكِيفالِين)، كلاهما من نتاج جين الإنكِيفالِين الطَليعي. (Enkephalins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004745.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydrogenase",
    "term_en": "Hydrogenase",
    "term_ar": "هيدروجيناز",
    "synonyms": [
      "Ferredoxin Hydrogenase",
      "Hydrogenase, Ferredoxin",
      "H2-Oxidizing Hydrogenase",
      "Hydrogenase, H2-Oxidizing",
      "Hydrogenlyase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme found in bacteria. It catalyzes the reduction of FERREDOXIN and other substances in the presence of molecular hydrogen and is involved in the electron transport of bacterial photosynthesis.",
    "arabic_definition": "هيدروجيناز هو أنزيم يحفز تفاعل أكسدة-اختزال للهيدروجين الجزيئي كما يظهر التفاعل العام التالي: H2⇄2 H++2 e− في تفاعل الأكسدة يعطي جزيء الهيدروجين بروتونين اثنين بالإضافة إلى إلكترونين اثنين. ويمكن أن يسمّى التفاعل حينئذ بتفاعل اكتساب الهيدروجين، حيث يجري في الوقت نفسه تفاعل اختزال لمستقبل إلكتروني مثل الأكسجين والنترات والكبريتات وثنائي أكسيد الكربون والفومارات. (Hydrogenase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006864.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rubredoxins",
    "term_en": "Rubredoxins",
    "term_ar": "روبردوكسين",
    "synonyms": [
      "Rubredoxin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of iron-sulfur proteins that contains one iron coordinated to the sulfur atom of four cysteine residues. (McGraw-Hill Dictionary of Scientific and Technical Terms, 5th ed)",
    "arabic_definition": "الروبردوكسينات هي نوع من البروتينات منخفضة الوزن الجزيئي الحاوية على الحديد، والتي يعثر عليها في البكتريا والعتائق المستقلبة للكبريت. تصنف الروبردوكسينات أحياناً ضمن البروتينات الحديدية-الكبريتية، ولكن على العكس من الأخيرة فإن الروبردوكسينات لا تحوي على روابط كبريتيد لاعضوية. (Rubredoxins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012416.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kallikreins",
    "term_en": "Kallikreins",
    "term_ar": "كاليكريين",
    "synonyms": [
      "Kalliginogenase",
      "Kallikrein",
      "Kallidinogenase",
      "Kininogenase",
      "Callicrein",
      "Kinin-Forming Enzyme",
      "Enzyme, Kinin-Forming",
      "beta-Kallikrein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Proteolytic enzymes from the serine endopeptidase family found in normal blood and urine. Specifically, Kallikreins are potent vasodilators and hypotensives and increase vascular permeability and affect smooth muscle. They act as infertility agents in men. Three forms are recognized, PLASMA KALLIKREIN (EC 3.4.21.34), TISSUE KALLIKREIN (EC 3.4.21.35), and PROSTATE-SPECIFIC ANTIGEN (EC 3.4.21.77).",
    "arabic_definition": "كاليكريين (الإنجليزية: Kallikrein) عبارة عن مجموعة فرعية من أنزيمات البروتياز سيرين، وهذه الأنزيمات قادرة على شق سندات الببتيد في البروتينات البشرية . (Kallikreins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007610.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurotensin",
    "term_en": "Neurotensin",
    "term_ar": "موتر عصبي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A biologically active tridecapeptide isolated from the hypothalamus. It has been shown to induce hypotension in the rat, to stimulate contraction of guinea pig ileum and rat uterus, and to cause relaxation of rat duodenum. There is also evidence that it acts as both a peripheral and a central nervous system neurotransmitter.",
    "arabic_definition": "الموتر العصبي هو ببتيد عصبي مكون من 13 حمض أميني مسؤول عن تنظيم إفراز الهرمون المنشط للجسم الأصفر والبرولاكتين بالإضافة إلى دوره التفاعلي الكبير مع النظام دوباميني الفعل. أمكن عزل الموتر العصبي بنجاح للمرة الأولى من مستخلصات تحت المهاد البقري بالاستناد إلى قدرته على إحداث توسيع وعائي مرئي في المناطق الجلدية المكشوفة لدى الجرذان المخدرة. (Neurotensin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009496.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "iduronidase",
    "term_en": "Iduronidase",
    "term_ar": "ايدورونيداز",
    "synonyms": [
      "alpha-L-Idosiduronase",
      "alpha-L-Iduronidase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme that hydrolyzes iduronosidic linkages in desulfated dermatan. Deficiency of this enzyme produces Hurler's syndrome. EC 3.2.1.76.",
    "arabic_definition": "الإيدورونيداز (الإنجليزية: Iduronidase) وبشكل أكثر تحديدا ألفا إل-ايدرونايز (IDUA) هو اسم الإنزيم الذي يقوم بفصل حمض ايديورونيك من كبريتات الهيباران ومن كبريتات الدرماتان في العديد من الثدييات، والتي هي مكونات رئيسية في الألياف والأنسجة الغضروفية في الجسم. ولذلك فالإنزيم جزء لا يتجزأ من التفاعلات التي تعمل على انحلال هذه الجزيئات في الجسم.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007068.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactalbumin",
    "term_en": "Lactalbumin",
    "term_ar": "ألبيومين اللبن",
    "synonyms": [
      "alpha-Lactalbumin",
      "alpha-Lactalbumin A",
      "alpha-Lactalbumin B",
      "alpha-Lactalbumin C"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A major protein fraction of milk obtained from the WHEY.",
    "arabic_definition": "ألبيومين اللبن ويُعرف أيضًا ببروتين مصل اللبن هو الألبيومين الذي يوجد في الحليب ويُستخلص من مصل اللبن وقد وُجد في ألبان كثيرٍ من الثدييات، وينقسم إلى نوعين وهما ألفا وبيتا وكلاهما متواجد في اللبن. تشير بعض الدراسات العلمية الصغيرة إلى أن بعض أنواع ألبيومين اللبن قد تحسن الاستجابة المناعية وتزيد مستوى الجلوتاثيون في الحيوانات والتي تمتلك مضادات للفيروسات ومضادات موت الخلايا المبرمج (أي التي تعيق وتبطئ من عملية موت الخلايا) كما أنها مضادة للأورام والسرطانات في البشر، ولكن هناك حاجة لإجراء دراسات أكبر لتأكيد هذه الصفات. (Lactalbumin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007768.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leukocidins",
    "term_en": "Leukocidins",
    "term_ar": "لوكوسيدين",
    "synonyms": [
      "Leukocidin Proteins",
      "Proteins, Leukocidin",
      "Leukocidin",
      "Leucocidin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pore forming proteins originally discovered for toxic activity to LEUKOCYTES. They are EXOTOXINS produced by some pathogenic STAPHYLOCOCCUS and STREPTOCOCCUS that destroy leukocytes by lysis of the cytoplasmic granules and are partially responsible for the pathogenicity of the organisms.",
    "arabic_definition": "لوكوسيدين أو مُبِيْدَة الكُرَيَّات البِيْض (الإنجليزية: Leukocidin) هي نوع من سُمّ الخلايا، وتُنتجها بعضُ أنواع البكتيريا (المكورة العنقودية)، وهي نوع من السُمّ المُشكل للمسام، وتقع ضمن فئة الإنفازين البكتيري، والإنفازينات هي إفرازاتٌ إنزيمية تُساعد البكتيريا على غزو أنسجة المُضيف المُرتبطة به، وعلى الرغم من أنَّ الإنفازين تُشبه السموم الخارجية، إلا أنها تختلف بناحيتين: حيثُ تعمل عبر آلياتٍ أقل خصوصية بكثير من آليات السموم الخارجية، وأيضًا آثارها تكون عمومًا أكثر موضعية (محلية). يُعتبر لوكوسيدين بانتون-فالانتين من أنواع اللوكسيدين. (Leukocidins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007956.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plastocyanin",
    "term_en": "Plastocyanin",
    "term_ar": "بلاستوسيانين",
    "synonyms": [
      "Plastocyanine",
      "Silver Plastocyanin",
      "Plastocyanin, Silver"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A copper-containing plant protein that is a fundamental link in the electron transport chain of green plants during the photosynthetic conversion of light energy by photophosphorylation into the potential energy of chemical bonds.",
    "arabic_definition": "بلاستوسيانين هو بروتين فلزي حاوٍ على النحاس ويقوم بالتوسط في تفاعلات انتقال الإلكترون داخل الخلية. عثر عليه في عدد من النباتات، حيث يساهم في التركيب الضوئي. (Plastocyanin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010970.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angiostatins",
    "term_en": "Angiostatins",
    "term_ar": "أنجيوستاتين",
    "synonyms": [
      "Angiostatin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Circulating 38-kDa proteins that are internal peptide fragments of PLASMINOGEN. The name derives from the fact that they are potent ANGIOGENESIS INHIBITORS. Angiostatins contain four KRINGLE DOMAINS which are associated with their potent angiostatic activity.",
    "arabic_definition": "الأنجيوستاتين هو بروتين طبيعي يوجد في العديد من أنواع الحيوانات، بما في ذلك البشر. وهو مثبط لتكوين الأوعية الدموية الداخلية (أي أنه يمنع نمو الأوعية الدموية الجديدة). (Angiostatins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D043168.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transferases",
    "term_en": "Transferases",
    "term_ar": "ناقلة (إنزيم)",
    "synonyms": [
      "Transferase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Transferases are enzymes transferring a group, for example, the methyl group or a glycosyl group, from one compound (generally regarded as donor) to another compound (generally regarded as acceptor). The classification is based on the scheme donor:acceptor group transferase. (Enzyme Nomenclature, 1992) EC 2.",
    "arabic_definition": "في الكيمياء الحيوية:الناقلة (أو حرفياً الترانسفيراز) أحد أنواع الإنزيمات التي تحفز نقل مجموعة وظيفية (مثل ميثيل أو فوسفات) من جزيئة (تدعى المناح) إلى جزيئة تدعى القابل أو المتقبل. مثلا الإنزيم الذي يتوسط هذا التفاعل يمكن أن يكون ترانسفيرازا: A–X + B → A + B–X في هذا المثال، A يمكن أن يكون المانح، and B يمكن أن يكون القابل. (Transferases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014166.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tropoelastin",
    "term_en": "Tropoelastin",
    "term_ar": "إيلاستين",
    "synonyms": [
      "Tropoelastin b",
      "Elastin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A salt-soluble precursor of elastin. Lysyl oxidase is instrumental in converting it to elastin in connective tissue.",
    "arabic_definition": "إيلاستين (الإنجليزية: Elastin) هو بروتين يقع في الأنسجة الضامة التي هي مرنة أساسا، ويسمح للعديد من الأنسجة في الجسم باستعادة شكلها بعد تمتدها أو تلفها. والإيلاستين يساعد الجلد على العودة إلى وضعه الأصلي عندما يتعرض لتلف أو تغير عرضي. (Tropoelastin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014333.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thioredoxins",
    "term_en": "Thioredoxins",
    "term_ar": "ثيوريدوكسين",
    "synonyms": [
      "Thioredoxin",
      "Thioredoxin 2",
      "Thioredoxin 1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hydrogen-donating proteins that participates in a variety of biochemical reactions including ribonucleotide reduction and reduction of PEROXIREDOXINS. Thioredoxin is oxidized from a dithiol to a disulfide when acting as a reducing cofactor. The disulfide form is then reduced by NADPH in a reaction catalyzed by THIOREDOXIN REDUCTASE.",
    "arabic_definition": "الثيوريدوكسينات هي صنف من البروتينات المساهمة في عمليات الأكسدة والاختزال ذات الأهمية الحيوية عند عدد كبير من الكائنات الحية. تعد هذه البروتينات صغيرة نسبياً، فهي تتألف من حوالي 100 حمض أميني كما تحوي على رابطة ثنائي الكبريتيد في تركيبها. (Thioredoxins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013879.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transposases",
    "term_en": "Transposases",
    "term_ar": "ترانسبوزاز",
    "synonyms": [
      "Transposase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that recombine DNA segments by a process which involves the formation of a synapse between two DNA helices, the cleavage of single strands from each DNA helix and the ligation of a DNA strand from one DNA helix to the other. The resulting DNA structure is called a Holliday junction which can be resolved by DNA REPLICATION or by HOLLIDAY JUNCTION RESOLVASES.",
    "arabic_definition": "ترانسبوزاز (الإنجليزية: Transposase)انزيم مسؤول عن نقل أجزاء الحمض النووي داخل نواة الخلايا الحية . حيث يربط إلى نهايات المنقول ويحفز حركة المنقول إلى جزء آخر من الجينوم من خلال آلية قص ولصق أو آلية تبديل تنسخي. (Transposases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019895.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptavidin",
    "term_en": "Streptavidin",
    "term_ar": "ستربتافيدين",
    "synonyms": [
      "Strepavidin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A 60-kDa extracellular protein of Streptomyces avidinii with four high-affinity biotin binding sites. Unlike AVIDIN, streptavidin has a near neutral isoelectric point and is free of carbohydrate side chains.",
    "arabic_definition": "الستربتافيدين هو بروتين يزن 52.8 كيلو دالتون ويُستخلص من بكتيريا المتسلسلة أفيديني. لدى الستربتافيدينات رباعية القسيمات المتجانسة ألفة عالية نحو البيوتين (يعرف كذلك بفيتامين بي7 أو أو فيتامين H) وثابت انحلال مقداره 10−14 مول/ل ، ارتباط البيوتين بالستربتافيدين هو أحد أقوى الارتباطات غير التكتفؤية المعروفة في الطبيعة. (Streptavidin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019809.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipoxygenase",
    "term_en": "Lipoxygenase",
    "term_ar": "أكسيجيناز شحمية",
    "synonyms": [
      "Linoleate-Oxygen Oxidoreductase",
      "Oxidoreductase, Linoleate-Oxygen",
      "Lipoxidase",
      "Lipoxygenase-1",
      "Lipoxygenase-2"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme of the oxidoreductase class primarily found in PLANTS. It catalyzes reactions between linoleate and other fatty acids and oxygen to form hydroperoxy-fatty acid derivatives.",
    "arabic_definition": "إنزيمات الأوكسيجيناز الشحمية أو الليبوكسيجيناز هي عائلة من الإنزيمات الحاوية على الحديد، والتي لا تحوي على الهيم، والتي تقوم بتحفيز تفاعل إضافة الأكسجين الجزيئي (أكسدة) إلى الأحماض الدهنية المتعددة غير المشبعة في الليبيدات إلى عوامل مساهمة في تأشير الخلية، مثل عمليات التأشير نظير الصماوي. توجد هذه الإنزيمات في حقيقيات النوى، لكنها لا توجد في العتائق، والتي تحوي على إنزيمات مشابهة ولكن السلسلة الببتيدية المكونة للأحماض الأمينية تفتقد إلى الأطراف الرابطة للحديد. (Lipoxygenase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008084.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurophysins",
    "term_en": "Neurophysins",
    "term_ar": "نيوروفيزينز",
    "synonyms": [
      "Neurophysin",
      "Neurophysin I",
      "Oxytocin-Associated Neurophysin",
      "Neurophysin, Oxytocin-Associated",
      "Neurophysin II",
      "Vasopressin-Associated Neurophysin",
      "Neurophysin, Vasopressin-Associated",
      "Neurophysin III"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Carrier proteins for OXYTOCIN and VASOPRESSIN. They are polypeptides of about 10-kDa, synthesized in the HYPOTHALAMUS. Neurophysin I is associated with oxytocin and neurophysin II is associated with vasopressin in their respective precursors and during transportation down the axons to the neurohypophysis (PITUITARY GLAND, POSTERIOR).",
    "arabic_definition": "النيوروفيزينات هي بروتينات ناقلة تنقل هرموني الأوكسيتوسين والفازوبريسين إلى الفص الخلفي للغدة النخامية من النواة المجاورة للبطين والنواة فوق البصرية في منطقة ما تحت المهاد ، على التوالي. داخل الحبيبات الإفرازية العصبية ، يشكل النيوروفيزين الأول والثاني مركبات مُثبِّتة عبر روابط تساهمية . (Neurophysins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009481.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "recombinases",
    "term_en": "Recombinases",
    "term_ar": "ريكومبيناز",
    "synonyms": [
      "Recombinase",
      "Resolvases",
      "Resolvase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A broad category of enzymes that are involved in the process of GENETIC RECOMBINATION.",
    "arabic_definition": "الريكومبينازات هي إنزيماتُ إعادة التركيب الجيني. ريكومبينازات الدنا تستخدم بشكل واسع في الكائنات متعددة الخلايا للتعديل والتلاعب ببنية الجينوم، وللتحكم في التعبير الجيني. (Recombinases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045522.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "collagenases",
    "term_en": "Collagenases",
    "term_ar": "كولاجيناز",
    "synonyms": [
      "Collagenase",
      "Collagen Peptidase",
      "Peptidase, Collagen",
      "Collagen-Degrading Enzyme"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that catalyze the degradation of collagen by acting on the peptide bonds.",
    "arabic_definition": "الكولاجيناز أو انزيم الكولاجينيز (الإنجليزية: Collagenase) هو إنزيم يكسر الروابط الببتيدية للكولاجين، وتساعد في تدمير الهياكل خارج الخلية في البكتيريا المرضية مثل الكلوستريديوم، وتسهيل انتشار الغرغرينا الغازية. وهي تستهدف عادة النسيج الضام في خلايا العضلات وأعضاء الجسم الأخرى. (Collagenases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017364.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "karyopherins",
    "term_en": "Karyopherins",
    "term_ar": "كاريوفرين",
    "synonyms": [
      "Karyopherin",
      "Transportin",
      "Transportins",
      "Importins",
      "Importin",
      "Exportins",
      "Exportin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of proteins involved in NUCLEOCYTOPLASMIC TRANSPORT. Karyopherins are heteromeric molecules composed of two major types of components, ALPHA KARYOPHERINS and BETA KARYOPHERINS, that function together to transport molecules through the NUCLEAR PORE COMPLEX. Several other proteins such as RAN GTP BINDING PROTEIN and CELLULAR APOPTOSIS SUSCEPTIBILITY PROTEIN bind to karyopherins and participate in the transport process.",
    "arabic_definition": "الكاريوفيرينات (Karyopherin ) : هي مجموعة من البروتينات التي تعمل في نقل البروتين بين النواة والسيتوبلاسم في خلايا الأوكاريوت. يُطلق على الجزء الداخلي من النواة اسم كاريوبلازم (أو نوكليوبلازما) وبشكل عام يتم نقل بواسطة الحركة المتعلقة بالكاريوفرينت عبر المسام النووية التي تعمل كبوابات لدخول وخروج البروتينات من النواة وتحتاج البروتينات الجزيئية الكبيرة إلى الكاريوفيرين لعبور المسام النووية. (Karyopherins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D028884.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucoproteins",
    "term_en": "Mucoproteins",
    "term_ar": "بروتين مخاطي",
    "synonyms": [
      "Mucoprotein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Conjugated proteins in which mucopolysaccharides are combined with proteins. The mucopolysaccharide moiety is the predominant group with the protein making up only a small percentage of the total weight.",
    "arabic_definition": "البروتين المخاطي (الإنجليزية: Mucoprotein) هو بروتين سكري يتكون بشكل أساسي من عديد سكاريد مخاطي. يوجد البروتين المخاطي في أماكن مختلفة من الجسم بضمنها الجهاز الهضمي والأعضاء التناسلية والشعب الهوائية والسائل الزلالي في الركبتين. (Mucoproteins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009088.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paraproteins",
    "term_en": "Paraproteins",
    "term_ar": "بروتين الورم النقيي",
    "synonyms": [
      "Paraprotein",
      "Myeloma protein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal immunoglobulins synthesized by atypical cells of the MONONUCLEAR PHAGOCYTE SYSTEM. Paraproteins containing only light chains lead to Bence Jones paraproteinemia, while the presence of only atypical heavy chains leads to heavy chain disease. Most of the paraproteins show themselves as an M-component (monoclonal gammopathy) in electrophoresis. Diclonal and polyclonal paraproteins are much less frequently encountered.",
    "arabic_definition": "بروتين الورم النقيي أو بروتين الورم النقوي هو عبارة عن جسم مضاد غير طبيعي (جلوبيولين مناعي) أو -في أغلب الأحيان- جزء منه مثل سلسلة الجلوبيولين المناعي الخفيفة، يتم إنتاجه بشكل مفرط من خلال تكاثر أحادي النسيلة الغير طبيعي لخلايا البلازما عادةً في الورم النخاعي المتعدد، هناك مصطلحات أخرى لمثل هذا البروتين هي بروتين M أو مركب M أو حسكة M أو بروتين حسكة أو بارابروتين، تكاثر بروتين الورم النقيي له تأثيرات ضارة على الجسم، حيث يتسبب في ضعف وظائف المناعة ولزوجة الدم العالية («سمك» الدم)بشكل غير طبيعى واعتلال الكلى. (Paraproteins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010266.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dioxygenases",
    "term_en": "Dioxygenases",
    "term_ar": "دي أكسيجيناز",
    "synonyms": [
      "Dioxygenase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Non-heme iron-containing enzymes that incorporate two atoms of OXYGEN into the substrate. They are important in biosynthesis of FLAVONOIDS; GIBBERELLINS; and HYOSCYAMINE; and for degradation of AROMATIC HYDROCARBONS.",
    "arabic_definition": "دي أكسيجيناز أو أكسجيناز ثنائية (الإنجليزية: Dioxygenase) هو إنزيم ينتمي إلى عائلة إنزيم أكسدة-اختزال وهو إنزيم هوائي. (Dioxygenases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049308.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteolipids",
    "term_en": "Proteolipids",
    "term_ar": "بروتيوليبيد",
    "synonyms": [
      "Proteolipid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Protein-lipid combinations abundant in brain tissue, but also present in a wide variety of animal and plant tissues. In contrast to lipoproteins, they are insoluble in water, but soluble in a chloroform-methanol mixture. The protein moiety has a high content of hydrophobic amino acids. The associated lipids consist of a mixture of GLYCEROPHOSPHATES; CEREBROSIDES; and SULFOGLYCOSPHINGOLIPIDS; while lipoproteins contain PHOSPHOLIPIDS; CHOLESTEROL; and TRIGLYCERIDES.",
    "arabic_definition": "البروتيوليبيد هي بروتينات مرتبطة تساهميًا بجزيئات الدهون، والتي يمكن أن تكون أحماض دهنية أو إيزوبرينويدات أو ستيرولات. تُعرف مثل عملية الارتباط هذه باسم دهون البروتين، وتقع في فئة أوسع من الأسيلة وتعديل ما بعد الترجمة. (Proteolipids)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011510.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adhesiveness",
    "term_en": "Adhesiveness",
    "term_ar": "لاصق",
    "synonyms": [
      "Adhesivenesses",
      "Adhesive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A property of the surface of an object that makes it stick to another surface.",
    "arabic_definition": "اللاصق مادة تربط الأسطح بعضها مع بعض، وتستعمل المواد اللاصقة التي تشمل مواد مثل الاسمنت والإبوكسي والغراء والمعجون على نطاق واسع في الصناعة وفي الأغراض المنزلية. كما أنها تؤدي دورًا مهما في صناعة الطائرات والسيارات وتجليد الكتب، وكذلك الأثاث وإنشاء المباني والطرق. (Adhesiveness)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000268.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chymotrypsin",
    "term_en": "Chymotrypsin",
    "term_ar": "كيموتربسين",
    "synonyms": [
      "Avazyme",
      "Alphacutanée",
      "Alpha-Chymotrypsin Choay"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A serine endopeptidase secreted by the pancreas as its zymogen, CHYMOTRYPSINOGEN and carried in the pancreatic juice to the duodenum where it is activated by TRYPSIN. It selectively cleaves aromatic amino acids on the carboxyl side.",
    "arabic_definition": "كيموتربسين أو التربسين الكيموسي أو الكايموتريبسين (الإنجليزية: Chymotrypsin). تركيبه الكيميائي (EC 3.4.21.1).",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002918.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacteriocins",
    "term_en": "Bacteriocins",
    "term_ar": "مبيد جرثومي",
    "synonyms": [
      "Bacteriocin",
      "Lantibiotics",
      "Lantibiotic",
      "Lanthipeptides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Substances elaborated by specific strains of bacteria that are lethal against other strains of the same or related species. They are protein or lipopolysaccharide-protein complexes used in taxonomy studies of bacteria.",
    "arabic_definition": "المُبيدات الجُرثومية أو بكتريوسينات (الإنجليزية: Bacteriocin) هي ذيفانات بروتينية تُنتِجُها البكتيريا لتمنع نُمو أي سُلالة بكتيرية مُماثلة أو شبيهة بِها. اكتُشِفت المبيدات الجرثومية عام 1925 من قبل أندريه جراتيا. (Bacteriocins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001430.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipoproteins",
    "term_en": "Lipoproteins",
    "term_ar": "بروتين شحمي",
    "synonyms": [
      "Circulating Lipoproteins",
      "Lipoproteins, Circulating",
      "Lipoprotein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Lipid-protein complexes involved in the transportation and metabolism of lipids in the body. They are spherical particles consisting of a hydrophobic core of TRIGLYCERIDES and CHOLESTEROL ESTERS surrounded by a layer of hydrophilic free CHOLESTEROL; PHOSPHOLIPIDS; and APOLIPOPROTEINS. Lipoproteins are classified by their varying buoyant density and sizes.",
    "arabic_definition": "البروتينات الشحمية أو البروتينات الدهنية (الإنجليزية: Lipoproteins) هي بنيات كيميائية حيوية ذات شكل كروي تنتج عن اندماج الدهون والبروتينات. تقوم البروتينات الدهنية بدور رئيسي في نقل الدهون ثلاثية الجليسريد والكولسترول في بلازما الدم.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008074.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemeproteins",
    "term_en": "Hemeproteins",
    "term_ar": "بروتين الهيم",
    "synonyms": [
      "Hemeprotein",
      "Heme Protein",
      "Protein, Heme",
      "Heme Proteins",
      "Proteins, Heme",
      "Hemoprotein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Proteins that contain an iron-porphyrin, or heme, prosthetic group resembling that of hemoglobin. (From Lehninger, Principles of Biochemistry, 1982, p480)",
    "arabic_definition": "بروتين الهيم أو هيموبروتين هي بروتينات حاوية على الهيم، وهو مركب كيميائي يحتوي على الحديد. وهو ما يعطي الدم لونه الأحمر. (Hemeproteins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006420.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anaerobiosis",
    "term_en": "Anaerobiosis",
    "term_ar": "كائن لاهوائي",
    "synonyms": [
      "Anaerobioses",
      "Anaerobic Metabolism",
      "Anaerobic Metabolisms",
      "Metabolism, Anaerobic",
      "Metabolisms, Anaerobic",
      "Anaerobic organism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The complete absence, or (loosely) the paucity, of gaseous or dissolved elemental oxygen in a given place or environment. (From Singleton &amp; Sainsbury, Dictionary of Microbiology and Molecular Biology, 2d ed)",
    "arabic_definition": "الكائن اللاهوائي أو بكتيريا لاهوائية أو الدَّنْكَسِيّ أو حي لا هوائي هو الكائن الذي لا يستخدم الأوكسجين للنمو. وهناك ثلاث أنواع:- بكتيريا لاهوائية إجبارية ,التي لايمكن أن تستخدم الاوكسيجن للنمو ويكون ضاراً لها. (Anaerobiosis)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000693.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enfuvirtide",
    "term_en": "Enfuvirtide",
    "term_ar": "انفوفيرتيد",
    "synonyms": [
      "Pentafuside",
      "Fuzeon",
      "DP 178",
      "DP178",
      "T20 Peptide",
      "Peptide T20"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A synthetic 36-amino acid peptide that corresponds to the heptad repeat sequence of HIV-1 gp41. It blocks HIV cell fusion and viral entry and is used with other anti-retrovirals for combination therapy of HIV INFECTIONS and AIDS.",
    "arabic_definition": "انفوفيرتيد (الإنجليزية: Enfuvirtide) هو مركب كيميائي يستخدم كدواء من فئة الأدوية المثبطة لاندماج وإدخال فيروس نقص المناعة البشرية الإيدز",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077560.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "haptoglobins",
    "term_en": "Haptoglobins",
    "term_ar": "هابتوغلوبين",
    "synonyms": [
      "Haptoglobin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Plasma glycoproteins that form a stable complex with hemoglobin to aid the recycling of heme iron. They are encoded in man by a gene on the short arm of chromosome 16.",
    "arabic_definition": "الهابتوغلوبين (يُختصر إلى Hp) هو البروتين الذي يُشفّر عند البشر بواسطة جين الهابتوغلوبين. في بلازما الدم، يرتبط الهابتوغلوبين بقوة بالهيموغلوبين الحر الذي يُطلق من كريات الدم الحمراء، وبالتالي يمنع نشاطه المؤذي الناتج عن الأكسدة. (Haptoglobins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006242.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "basiliximab",
    "term_en": "Basiliximab",
    "term_ar": "باسيليكسيماب",
    "synonyms": [
      "Simulect",
      "CHI 621",
      "SDZ CHI 621"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chimeric murine-human monoclonal antibody that functions as an INTERLEUKIN 2 RECEPTOR antagonist by binding to the alpha chain (CD25 ANTIGEN) of the interleukin-2 receptor on the surface of activated T-LYMPHOCYTES. It is used in the prevention of acute graft rejection episodes in patients undergoing renal transplantation.",
    "arabic_definition": "باسيليكسيماب هو جسم مضاد وحيد النسيلة يستخدم لمنع رفض الطعم في حالات زراعة الأعضاء، الكلى خصوصاً، تنتجه نوفارتس. وقد أقرت إدارة الأغذية والأدوية استخدامه عام 1998. (Basiliximab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077552.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukins",
    "term_en": "Interleukins",
    "term_ar": "إنترلوكين",
    "synonyms": [
      "Interleukin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Soluble factors which stimulate growth-related activities of leukocytes as well as other cell types. They enhance cell proliferation and differentiation, DNA synthesis, secretion of other biologically active molecules and responses to immune and inflammatory stimuli.",
    "arabic_definition": "إنترلوكن Interleukin هي مجموعة من السايتوكينات (پروتينات/جزيئات إشارة مـُـفرَزة) شوهدت لأول مرة في خلايا الدم البيضاء. يحفز جهاز المناعة في الجسم ليقاوم الاحتقان والمرض. (Interleukins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007378.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chylomicrons",
    "term_en": "Chylomicrons",
    "term_ar": "كيلومكرون",
    "synonyms": [
      "Chylomicron"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of lipoproteins that carry dietary CHOLESTEROL and TRIGLYCERIDES from the SMALL INTESTINE to the tissues. Their density (0.93-1.006 g/ml) is the same as that of VERY-LOW-DENSITY LIPOPROTEINS.",
    "arabic_definition": "كيلومكرونات (الإنجليزية: Chylomicrons) هي بروتينات دُهنية تتكون مِن ثلاثيات الغليسريد (85-92%) وَدهون فسفورية (6–12%) وَكولسترول (1–3%) وَبروتينات (1–2%). تُساعد الكِيلومكرونات في نَقل الليبيدات الغِذائية مِن الأَمعاء إِلى مواقع أُخرى من الجِسم، وَتُعتبر الكيلومكرونات واحدةً من مَجموعات البروتينات الدُهنية الخَمس الكُبرى وهيَ:الكيلومكرونات Chylomicrons والبروتينات الدُهنية وضيعة الكثافة VLDL وَالبروتينات الدُهنية مُنخفضة الكَثافة LDL وَالبروتينات الدُهنية متوسطة الكَثافة IDL وَالبروتينات الدُهنية مُرتفعة الكثافة HDL، حيثُ تساعد هذه المَجموعات على نَقل الدُهون وَالكولسترول ضِمن مَجرى الدَم.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002914.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coccidioidin",
    "term_en": "Coccidioidin",
    "term_ar": "كروانية لدودة",
    "synonyms": [
      "Coccidioides immitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sterile solution containing the by-products of growth products of COCCIDIOIDES IMMITIS, injected intracutaneously as a test for COCCIDIOIDOMYCOSIS.",
    "arabic_definition": "الكروانية اللدودة (اللاتينية: Coccidioides immitis) هي فطر ممراض يتواجد في تربة جنوب غرب الولايات المتحدة وشمال المكسيك ومناطق أخرى في نصف الأرض الغربي. الكروانية اللدودة مع الكروانية البوساداسية تسببان الفطار الكرواني. (Coccidioidin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003046.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunotoxins",
    "term_en": "Immunotoxins",
    "term_ar": "ذيفان مناعي",
    "synonyms": [
      "Antibody-Toxin Hybrid",
      "Hybrid, Antibody-Toxin",
      "Affinotoxin",
      "Antibody-Toxin Conjugate",
      "Conjugate, Antibody-Toxin",
      "Cytotoxin-Antibody Conjugate",
      "Conjugate, Cytotoxin-Antibody",
      "Immunotoxin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Semisynthetic conjugates of various toxic molecules, including RADIOACTIVE ISOTOPES and bacterial or plant toxins, with specific immune substances such as IMMUNOGLOBULINS; MONOCLONAL ANTIBODIES; and ANTIGENS. The antitumor or antiviral immune substance carries the toxin to the tumor or infected cell where the toxin exerts its poisonous effect.",
    "arabic_definition": "ذيفان مناعي (الإنجليزية: immunotoxin): لهذا المصطلح معنيان: الأول: هو المادة (التي عادة ما تكون كيماوية) التي تثبط أو تعطل الجهاز المناعي عند التعرض لها، مما يؤدي إلى حالة تسمى التثبيط المناعي (الإنجليزية: immunosuppression) مما يؤدي إلى زيادة التعرض للإصابة بالعدوى أو السرطان. ومن المواد التي تسبب تسمم المناعة -ثنائي الفينيل متعدد الكلور، والأسبستوس والمبيدات مثل مادة ال دي دي تي (DDT). (Immunotoxins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000922.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exonucleases",
    "term_en": "Exonucleases",
    "term_ar": "نوكلياز خارجية",
    "synonyms": [
      "Exonuclease",
      "3'-5'-Exonucleases",
      "3'-5'-Exonuclease",
      "5'-3'-Exonucleases",
      "5'-3'-Exonuclease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that catalyze the release of mononucleotides by the hydrolysis of the terminal bond of deoxyribonucleotide or ribonucleotide chains.",
    "arabic_definition": "نوكلياز خارجية(الإنجليزية: Exonuclease) وهي مجموعة من الانزيمات التي تشق النيوكليوتيدات بشكل تسلسلي من النهايات الحرة من خطي ركيزة الحمض النووي . تعمل هذه الانزيمات عن طريق شق النيوكليوتيدات واحدة في وقت واحد من نهاية (EXO) من سلسلة عديد النوكليوتيد. (Exonucleases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005092.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alemtuzumab",
    "term_en": "Alemtuzumab",
    "term_ar": "أليمتوزوماب",
    "synonyms": [
      "Campath 1M",
      "Campath 1G",
      "Campath-1-G",
      "Campath1G",
      "Campath",
      "MabCambath",
      "Lemtrada"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An anti-CD52 ANTIGEN monoclonal antibody used for the treatment of certain types of CD52-positive lymphomas (e.g., CHRONIC LYMPHOCYTIC LEUKEMIA; CUTANEOUS T-CELL LYMPHOMA; and T-CELL LYMPHOMA). Its mode of actions include ANTIBODY-DEPENDENT CELL CYTOTOXICITY.",
    "arabic_definition": "أليمتوزوماب هو جسم مضاد وحيد النسيلة يستخدم في حالات ابيضاض الدم الليمفاوي المزمن ولمفوما جلدية تائية الخلايا. يستخدم أيضاً في بعض علاجات اللمفومة لاهودجكينية وزراعة النخاع العظمي وزرع الكلى وزرع أنسجة خلايا الجزيرة. (Alemtuzumab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074323.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asparaginase",
    "term_en": "Asparaginase",
    "term_ar": "أسباراجينيز",
    "synonyms": [
      "Asparaginase II",
      "Asparagine Deaminase",
      "Deaminase, Asparagine",
      "Colaspase",
      "Erwinase",
      "Elspar",
      "Asparaginase medac",
      "medac, Asparaginase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A hydrolase enzyme that converts L-asparagine and water to L-aspartate and NH3. EC 3.5.1.1.",
    "arabic_definition": "أسباراجينيز (الإنجليزية: Asparaginase) هو إنزيم يستخدم في الأدوية وصناعة الطعام. من حيث استخدامه كدواء، فهو يستخدم لعلاج سرطان ابيضاض الدم الأرومي الليمفاوي الحاد، وسرطان ابيضاض الدم الحاد المتعلق بالنخاع الشوكي وأيضاً لعلاج لمفومة اللاهودجكينية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001215.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ferroportin",
    "term_en": "Ferroportin",
    "term_ar": "فيروبورتين",
    "synonyms": [
      "SLC40A1 Protein",
      "Solute Carrier Family 40 (iron-regulated transporter), Member 1",
      "Ferroportin Protein 1",
      "1, Ferroportin Protein",
      "Protein 1, Ferroportin",
      "Ferroportin1 Protein",
      "Protein, Ferroportin1",
      "Metal Transporting Protein 1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An iron exporter protein that transports iron from inside of a cell to the outside.",
    "arabic_definition": "الفيروبورتين(Ferroportin) هو بروتين ناقل للحديد، ويُعد الناقل الوحيد المعروف المسؤول عن إخراج الحديد من الخلايا إلى مجرى الدم. يُعرف أيضًا باسم SLC40A1.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000098742.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fermentation",
    "term_en": "Fermentation",
    "term_ar": "تخمر",
    "synonyms": [
      "Fermentations",
      "تخمر (كيمياء حيوية)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anaerobic degradation of GLUCOSE or other organic nutrients to gain energy in the form of ATP. End products vary depending on organisms, substrates, and enzymatic pathways. Common fermentation products include ETHANOL and LACTIC ACID.",
    "arabic_definition": "التخمر والتخمير، عملية استخلاص الطاقة من تفاعلات الأكسدة- الاختزال للمركبات الكيميائية، والتي منها الكربوهيدرات، وباستخدام قابل إلكترون ذاتي، والذي غالباً ما يكون مركب عضوي. على النقيض، تُمنح الإلكترونات في عملية التنفس لقابل إلكترون خارجي، ومثل الأكسجين، وذلك من خلال سلسلة نقل الإلكترون. (Fermentation)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005285.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "panitumumab",
    "term_en": "Panitumumab",
    "term_ar": "بانيتوموماب",
    "synonyms": [
      "ABX-EGF MAb",
      "ABX-EGF Monoclonal Antibody",
      "Monoclonal Antibody, ABX-EGF",
      "Panitumumab Antibody, Human",
      "Human Panitumumab Antibody",
      "Vectibix"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recombinant human monoclonal antibody that binds to and inhibits the function of the EPIDERMAL GROWTH FACTOR RECEPTOR. It is used in the treatment of EGFR-expressing metastatic colorectal cancer that expresses wild-type ras gene (see GENES, RAS).",
    "arabic_definition": "بانيتوموماب هو ضد وحيد النسيلة خاص بمستقبل عامل نمو البشرة (أو مستقبل EGF أو EGFR أو ErbB-1 أو HER1). (Panitumumab)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077544.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "becaplermin",
    "term_en": "Becaplermin",
    "term_ar": "بيكابليرمين",
    "synonyms": [
      "Platelet-Derived Growth Factor BB",
      "Platelet-Derived Growth Factor BB, Recombinant",
      "Recombinant Platelet-Derived Growth Factor BB",
      "PDGF-BB",
      "rhPDGF-BB",
      "rPDGF-BB",
      "Regranex"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A recombinant human platelet-derived growth factor B-chain dimer used to promote WOUND HEALING by stimulating PHYSIOLOGIC ANGIOGENESIS.",
    "arabic_definition": "بيكابليرمين (الاسم التجاري Regranex ) وهو دواء للندوب ، على شكل جل موضعي .Regranex عامل نمو مشتق من الصفيحات البشرية يوصف لعلاج التقرحات العصبية في الأطراف السفلية لمرضى السكري. يُعرف أيضا ب «عامل نمو المشتق من الصفيحات BB» . (Becaplermin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077214.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lenograstim",
    "term_en": "Lenograstim",
    "term_ar": "لينوغراستيم",
    "synonyms": [
      "Lenograstim, Component 2",
      "Lenograstim, Component 1",
      "Euprotin",
      "Granocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A recombinant granulocyte colony-stimulating factor that is used to treat or prevent NEUTROPENIA in patients receiving myelosuppressive cancer chemotherapy, for the preparation and collection of blood progenitor cells in PERIPHERAL BLOOD STEM CELL TRANSPLANTATION; and in the treatment of severe congenital neutropenia. Component 1 and Component 2 differ by absence or presence of Neu5Ac in 2-6 linkage to GalNAc side chain.",
    "arabic_definition": "لينوغراستيم هو عامل تحفيز مستعمرات الكريات البيض المأشوبوالذي يقوم بدور منشط مناعي. طورته شركة تشوغاي الصيدلانية تحت اسم تجاري هو Granocyte والذي تسوقه شركة سانوفي في البلدان العربية. (Lenograstim)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000078224.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glucosidases",
    "term_en": "Glucosidases",
    "term_ar": "غلوكوسيديزات",
    "synonyms": [
      "Glucosidase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that hydrolyze O-glucosyl-compounds. (Enzyme Nomenclature, 1992) EC 3.2.1.-.",
    "arabic_definition": "الغلوكوسيديزات أو أنزيمات محللة للسكريات (الإنجليزية: Glucosidases) هي إنزيمات من عائلة هيدروليزات الغلايكوسيد ويصنف تحت رقم التصنيف الإنزيمي 3.2.1.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005959.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ramucirumab",
    "term_en": "Ramucirumab",
    "term_ar": "راموسيروماب",
    "synonyms": [
      "IMC 1121B",
      "1121B",
      "IMC1121B",
      "Cyramza",
      "LY3009806"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A humanized monoclonal antibody and antagonist of VASCULAR ENDOTHELIAL GROWTH FACTOR RECEPTOR-2 (VEGFR2).",
    "arabic_definition": "راموسيروماب (Ramucirumab ) الذي يُباع تحت الإسم التجاري سيرامزا( Cyramza)، هو دواء يستخدم لعلاج سرطان المعدة، وسرطان القولون و المستقيم، و سرطان الرئة ذو الخلايا غير الصغيرة، وسرطان الخلايا الكبدية. يوصف فقط في بعض الحالات المتقدمة.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000096662.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "penicillinase",
    "term_en": "Penicillinase",
    "term_ar": "بيتا لاكتاماز",
    "synonyms": [
      "Benzylpenicillinase",
      "beta Lactamase III",
      "beta Lactamase RP4",
      "Lactamase RP4, beta",
      "AER-I beta-Lactamase",
      "beta-Lactamase, AER-I",
      "Carbenicillinase",
      "Exopenicillinase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A beta-lactamase preferentially cleaving penicillins. (Dorland, 28th ed) EC 3.5.2.-.",
    "arabic_definition": "البيتا لاكتاماز أو بيتا لاكتاميز أو بنسلينيز هي انزيمات تنتج بواسطة بعض البكتيريا أو الجراثيم سلبيات غرام وإيجابيات غرام وهي المسؤولة عن المقاومة لصف واسع من المضادات الحيوية المتعلقة بالبيتا لاكتام، والتي منها البنسلين. وتوجد مجموعات وصنوف عديدة من هذه الأنزيمات التي تقاوم المضاد الحيوي. (Penicillinase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010405.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peptidoglycan",
    "term_en": "Peptidoglycan",
    "term_ar": "ببتيدوجليكان",
    "synonyms": [
      "Murein",
      "Pseudomurein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A structural polymer of the bacterial cell envelope consisting of sugars and amino acids which is responsible for both shape determination and cellular integrity under osmotic stress in virtually all bacteria.",
    "arabic_definition": "الببتيدوجلايكان وتعرف أيضا بالميريين أو الميورامين وتكون هذه الطبقة الجدر الخلوية للبكتيريا الحقيقية وتتركب من: بتيدات مكونة من 3-8 أحماض أمينية (تختلف حسب نوع البكتيريا ) بالميريات متبادلة من حمض أستيل الميوراميك ذو صيغة C9H17NO7- CH3 ,ويعتبر من السكريات الأمينية ذات الطابع الحمضي + أستيل جلوكوز أمين وهو جزيء جلوكوز متحد مع مجموعة الأمين (NH2) والميثيل (أستيل) وتحدد طبقة الميوريين أو بالأصح الميورامين نوع البكتيريا بالنسبة لصبغة غرام ففي البكتيريا سالبة غرام تكون الطبقة رقيقة وفوقها طبقة من (الليبيدات عديدة التسكر) أما بالنسبة للبكتيريا موجبة غرام فتكون الطبقة سميكة وغير قابلة لفقد الأصباغ القاعدية. (Peptidoglycan)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010457.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leghemoglobin",
    "term_en": "Leghemoglobin",
    "term_ar": "ليغيموغلوبين",
    "synonyms": [
      "Leghemoglobin A"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A hemoglobin-like oxygen-binding hemeprotein present in the nitrogen-fixing root nodules of leguminous plants. The red pigment has a molecular weight approximately 1/4 that of hemoglobin and has been suggested to act as an oxido-reduction catalyst in symbiotic nitrogen fixation.",
    "arabic_definition": "ليغيموغلوبين أو ليغوغلوبين (الإنجليزية: Leghemoglobin) هو حامل للأوكسيجين أو النيتروجين، لأن النيتروجين والأوكسيجين الناتج طبيعياً يتفاعل مع هذا البروتين. تنتجه البقوليات كنتيجة لاستعمار جذورها من قبل بكتيريا مثبتة للنيتروجين، تدعى ريزوبيا، كجزء من العلاقة التعايشية بين النبات والبكتيريا: الجذور غير المستعمرة من قبل الريزوبيا لا تنتج الليغيموغلوبين.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007874.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glycoproteins",
    "term_en": "Glycoproteins",
    "term_ar": "بروتين سكري",
    "synonyms": [
      "Glycoprotein",
      "Neoglycoproteins",
      "Glycosylated Proteins",
      "Proteins, Glycosylated",
      "Glycosylated Protein",
      "Protein, Glycosylated",
      "C-Glycosylated Proteins",
      "Proteins, C-Glycosylated"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Conjugated protein-carbohydrate compounds including MUCINS; mucoid, and AMYLOID glycoproteins.",
    "arabic_definition": "البروتينات السكرية أو جليكوبروتين هي بروتينات تحتوي على سلاسل سكريات قليلة التعدد مرتبطة بالسلاسل الجانبية للأحماض الأمينية بروابط تساهمية. ترتبط الكربوهيدرات بالبروتين في التعديل أثناء الترجمة أو التعديل ما بعد الترجمة. (Glycoproteins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006023.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydrogenation",
    "term_en": "Hydrogenation",
    "term_ar": "هدرجة",
    "synonyms": [
      "Hydrogenations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Addition of hydrogen to a compound, especially to an unsaturated fat or fatty acid. (From Stedman, 26th ed)",
    "arabic_definition": "الهدرجة هي تفاعل كيميائي يتم من خلاله إضافة الهيدروجين إلى مركب آخر. عادة ما يستخدم هذا التفاعل لتقليل أو تشبيع المركبات العضوية. (Hydrogenation)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006865.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydroxylation",
    "term_en": "Hydroxylation",
    "term_ar": "إضافة هيدروكسيل",
    "synonyms": [
      "Hydroxylations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Placing of a hydroxyl group on a compound in a position where one did not exist before. (Stedman, 26th ed)",
    "arabic_definition": "إضافة هيدروكسيل أو الهدرلة هو تفاعل كيميائي يتضمن إضافة مجموعة هيدروكسيل (OH-) إلى مركب عضوي. يتم تحفيز هذا التفاعل في الأوساط الحيوية بواسطة الإنزيمات التي تدعى هيدروكسيلاز. (Hydroxylation)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006900.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glycosylation",
    "term_en": "Glycosylation",
    "term_ar": "غلكزة",
    "synonyms": [
      "Glycosylations",
      "Protein Glycosylation",
      "Glycosylation, Protein",
      "Protein Glycosylations",
      "Sialylation",
      "Sialylations",
      "GlcNAcylation",
      "GlcNAcylations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The synthetic chemistry reaction or enzymatic reaction of adding carbohydrate or glycosyl groups. GLYCOSYLTRANSFERASES carry out the enzymatic glycosylation reactions. The spontaneous, non-enzymatic attachment of reducing sugars to free amino groups in proteins, lipids, or nucleic acids is called GLYCATION (see MAILLARD REACTION).",
    "arabic_definition": "الغلكزة أو الارتباط بالغليكوزيل (الإنجليزية: Glycosylation) هي تفاعل تُرتبَط فيه كربوهيدرات (مانح غليكوزيل) بهيدروكسيل أو مجموعة وظيفية أخرى لجزيء آخر (مستقبِل غليكوزيل). في علم الأحياء تشير الغلكزة أساسا إلى عملية يتم فيها ربط جزيئات غليكان مع بروتينات، وتُنتج هذه العملية الإنزيمية أحد البوليمرات الحيوية الأساسية الموجودة في الخلايا (فضلا عن الدنا والرنا والبروتينات).",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006031.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "halogenation",
    "term_en": "Halogenation",
    "term_ar": "هلجنة",
    "synonyms": [
      "Bromination",
      "Chlorination",
      "Fluorination",
      "Iodination",
      "Iodation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Covalent attachment of HALOGENS to other compounds.",
    "arabic_definition": "الهلجنة: هي تفاعل كيميائي يتضمن إضافة واحد أو أكثر من الهالوجين إلى مركب أو مادة. يعتمد مسار الهلجنة والخاصية الديناميكية (قياس اتحادية العناصر) للهالوجين على السمات الهيكلية والمجموعات الوظيفية (وهي مجموعات محددة من الذرات ضمن الجزيئات، مسؤولة عن خواص الجزيئات وعن سلوكها في التفاعلات الكيميائية مع غيرها من الجزيئات) وأيضا يعتمد على الهالوجين المحدد. (Halogenation)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054879.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteoglycans",
    "term_en": "Proteoglycans",
    "term_ar": "بروتيوغليكان",
    "synonyms": [
      "Proteoglycan",
      "Proteoglycan Type H"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Glycoproteins which have a very high polysaccharide content of which one or more are GLYCOSAMINOGLYCANS.",
    "arabic_definition": "البروتيوغليكانات (الإنجليزية: Proteoglycans) هي بروتينات مرتبطة بالغليكوزيل. وحدة البروتيوغليكان الأساسية تتكون من بروتين محوري مرتبط بروابط تساهمية مع سلاسل غليكوز أمينوغليكان.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011509.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuropeptides",
    "term_en": "Neuropeptides",
    "term_ar": "ببتيد عصبي",
    "synonyms": [
      "Neuropeptide"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Peptides released by NEURONS as intercellular messengers. Many neuropeptides are also hormones released by non-neuronal cells.",
    "arabic_definition": "الببتيدات العصبية هي نواقل كيميائية مؤلفة من سلاسل صغيرة من الأحماض الأمينية التي تصنعها العصبونات وتحررها. ترتبط الببتيدات العصبية بشكل نموذجي مع المستقبلات المقترنة بالبروتين ج (جي بّي سي آر إس) من أجل تعديل النشاط العصبي والنسج الأخرى مثل الأمعاء، والعضلات والقلب. (Neuropeptides)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009479.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ceruloplasmin",
    "term_en": "Ceruloplasmin",
    "term_ar": "سيرولوبلازمين",
    "synonyms": [
      "alpha(2)-Ceruloplasmin",
      "Ceruloplasmin Ferroxidase",
      "Ferroxidase, Ceruloplasmin",
      "Ceruloplasmin Oxidase",
      "Oxidase, Ceruloplasmin",
      "Ferroxidase",
      "Caeruloplasmin",
      "Ferroxidase I"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A multi-copper blood FERROXIDASE involved in iron and copper homeostasis and inflammation.",
    "arabic_definition": "سيرولوبلاسمين (شيفرته (EC 1.16.3.1)) هو إنزيم يقوم بدور حمل ذرات النحاس في بلازما الدم. (Ceruloplasmin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002570.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-2",
    "term_en": "Interleukin-2",
    "term_ar": "إنترلوكين 2",
    "synonyms": [
      "IL2",
      "Interleukin II",
      "Interleukine 2",
      "Lymphocyte Mitogenic Factor",
      "Mitogenic Factor, Lymphocyte",
      "T-Cell Growth Factor",
      "T-Cell Stimulating Factor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A soluble substance elaborated by antigen- or mitogen-stimulated T-LYMPHOCYTES which induces DNA synthesis in naive lymphocytes.",
    "arabic_definition": "الانترلوكين-2: يعرف باسم عامل نمو الخلايا التائية، و ينتج بشكل خاص من قبل الخلايا التائية وخاصة الخلايا التائية المساعدة. هو عبارة عن بروتين سكري، قسمه البروتيني مكون من سلسلة بولي ببتيد واحدة. (Interleukin-2)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007376.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endonucleases",
    "term_en": "Endonucleases",
    "term_ar": "نوكلياز داخلي",
    "synonyms": [
      "Endonuclease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that catalyze the hydrolysis of the internal bonds and thereby the formation of polynucleotides or oligonucleotides from ribo- or deoxyribonucleotide chains. EC 3.1.-.",
    "arabic_definition": "نوكلياز داخلي أو إندونيوكلييز (الإنجليزية: Endonuclease) هي مجموعة من الانزيمات التي تلتصق مع اجزاءمن سلسلة الفسفودیستر ضمن سلسلة النوكليوتيد . هناك عدد قليل من الطبقات الكبيرة من النوكلياز الداخلية تلتصق فقط في تسلسل النوكليوتيدات المحددة (مثل نوكليازات الاقتطاع الداخلية التي تعتبر حيوية في مجال التكنولوجيا الحيوية). (Endonucleases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004720.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuraminidase",
    "term_en": "Neuraminidase",
    "term_ar": "نورامينيداز",
    "synonyms": [
      "N-Acylneuraminate Glycohydrolases",
      "Glycohydrolases, N-Acylneuraminate",
      "Oligosaccharide Sialidase",
      "Sialidase, Oligosaccharide",
      "Sialidase",
      "Exo-alpha-Sialidase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme that catalyzes the hydrolysis of alpha-2,3, alpha-2,6-, and alpha-2,8-glycosidic linkages (at a decreasing rate, respectively) of terminal sialic residues in oligosaccharides, glycoproteins, glycolipids, colominic acid, and synthetic substrate. (From Enzyme Nomenclature, 1992)",
    "arabic_definition": "نورامينيداز (الإنجليزية: Neuraminidase) (سياليداز) وتنشق عائلة من الإنزيمات، والأحماض الأمينية اللعابية وتتألف من بروتينات سكرية وهذه المواد قابلة للهضم. تم العُثور على هذه الإنزيمات عادة في الفيروسات والبكتيريا وغيرها من الطفيليات وحيدة الخلية مثل الكلب والفطريات، ولكن توجد أيضًا في الجسيمات الحالة «ليزوزومن» وأغشية الخلايا في الحيوانات والبشر.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009439.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-3",
    "term_en": "Interleukin-3",
    "term_ar": "إنترلوكين 3",
    "synonyms": [
      "Erythrocyte Burst-Promoting Factor",
      "Colony-Stimulating Factor 2 Alpha",
      "Colony-Stimulating Factor, Mast-Cell",
      "Mast-Cell Colony-Stimulating Factor",
      "Colony-Stimulating Factor, Multipotential",
      "Multipotential Colony-Stimulating Factor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A multilineage cell growth factor secreted by LYMPHOCYTES; EPITHELIAL CELLS; and ASTROCYTES which stimulates clonal proliferation and differentiation of various types of blood and tissue cells.",
    "arabic_definition": "إنترلوكين 3 (IL-3) هو بروتين موجود في الإنسان ومشفر بالمورثة IL3. إنترلوكين 3 هو أحد السيتوكينات المصنفة ضمن مجموعة الإنترلوكين والتي تؤدي دورا مهما في الجهاز المناعي. (Interleukin-3)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007377.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transaminases",
    "term_en": "Transaminases",
    "term_ar": "إنزيم ناقل للأمين",
    "synonyms": [
      "Transaminase",
      "Aminotransferase",
      "Aminotransferases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A subclass of enzymes of the transferase class that catalyze the transfer of an amino group from a donor (generally an amino acid) to an acceptor (generally a 2-keto acid). Most of these enzymes are pyridoxyl phosphate proteins. (Dorland, 28th ed) EC 2.6.1.",
    "arabic_definition": "الإنزيم الناقل للأمين هو انزيم وظيفته نقل زمرة الأمين من الاحماض الأمينية إلى أحماض ألفا - كيتونية وتوجد في جميع الأنسجة وفي مصل دم. تكمن اهمية نقل الأمين بانه يقوم بعملية أساسية لاستقلاب الأحماضالأمينية وتتوسط عملية النقل هذه مجموعة من الخمائر عديدة \"ALAT,ASAT\". (Transaminases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000637.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "biocatalysis",
    "term_en": "Biocatalysis",
    "term_ar": "تحفيز حيوي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The facilitation of biochemical reactions with the aid of naturally occurring catalysts such as ENZYMES.",
    "arabic_definition": "التحفيز الحيوي (الإنجليزية: Biocatalysis) هو استخدام أنظمة حية (حيوية) أو والأجزاء التي تعمل على تسريع (تحفيز) التفاعلات الكيميائية. في عمليات التحفيز الحيويية، تقوم المحفزات الطبيعية، مثل الإنزيمات، بإجراء تحويلات كيميائية على المركبات العضوية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055162.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tenecteplase",
    "term_en": "Tenecteplase",
    "term_ar": "تينيكتيبلاز",
    "synonyms": [
      "Metalyse",
      "TNKase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tissue plasminogen activator enzyme that acts as a fibrinolytic agent; it is used for the dissolution of blood clots, such as those that occur in acute MYOCARDIAL INFARCTION.",
    "arabic_definition": "تينيكتيبلاز (الإنجليزية: Tenecteplase) هو دواء يُستعمل في علاج:",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077785.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chromogranins",
    "term_en": "Chromogranins",
    "term_ar": "غرانين",
    "synonyms": [
      "Secretogranin",
      "Chromogranin",
      "Granin",
      "Secretogranins",
      "Granins"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of acidic proteins that are major components of SECRETORY GRANULES in the endocrine and neuroendocrine cells. They play important roles in the aggregation, packaging, sorting, and processing of secretory protein prior to secretion. They are cleaved to release biologically active peptides. There are various types of granins, usually classified by their sources.",
    "arabic_definition": "غرانين (كروموغرانين، وسيكريتوغرانين) هي عائلة بروتينية من البروتينات المنظمة الإفراز الموجودة في لب الهرمونات الأمينية والببتيدية، كما توجد في الحويصلات الإفرازية للنواقل العصبية. (Chromogranins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002864.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "methemalbumin",
    "term_en": "Methemalbumin",
    "term_ar": "ميتهيمالبيومين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A 1:1 molar complex of heme or hematin and albumin formed after the dissociation of methemoglobin into heme or hematin and globin in plasma. This complex, which imparts a coffee-brown color to plasma, occurs in hemolytic and hemorrhagic disorders. Its presence in plasma is used as a test to differentiate between hemorrhagic and edematous pancreatitis.",
    "arabic_definition": "ميتهيمالبيومين (الإنجليزية: Methemalbumin) ويُدعى اختصارًا MHA، هو عبارة عن مركب معقد من مادة الزلال والحديد المكون للدم. هذا التركيب المعقد يعطي بلازما الدم اللون البني وهذا يظهر عند وجود اضطرابات الانحلال والنزف.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008705.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteostasis",
    "term_en": "Proteostasis",
    "term_ar": "استتباب بروتيني",
    "synonyms": [
      "Proteostases",
      "Protein Homeostasis",
      "Homeostases, Protein",
      "Homeostasis, Protein",
      "Protein Homeostases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Regulation of the concentration, folding, interactions, and cellular localization of each of the proteins that comprise the PROTEOME.",
    "arabic_definition": "الاستتباب البروتيني (بالإنجليزية: Proteostasis) هذا المصطلح يتكون من دمج الكلمتين «البروتين» و «الاستتباب»، وهو يشير إلى مجموعة من العمليات البيولوجية التي تتحكم في تركيز البروتينات المختلفة الموجودة في الخلية. وهذا يتضمن ضبط تركيز البروتين، تشكله، تفاعلات الارتباط، والتمركز التحت خلوي، غالباً من خلال التغيرات النسخية (بالإنجليزية: transcriptional) والترجمة الوراثية (بالإنجليزية: translational) في التفاعلات مع التغيرات البيئية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074702.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-1",
    "term_en": "Interleukin-1",
    "term_ar": "إنترلوكين 1",
    "synonyms": [
      "Epidermal Cell Derived Thymocyte-Activating Factor",
      "IL-1",
      "Interleukin I",
      "Lymphocyte-Activating Factor",
      "Macrophage Cell Factor",
      "T Helper Factor",
      "Interleukin-1 family"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A soluble factor produced by MONOCYTES; MACROPHAGES, and other cells which activates T-lymphocytes and potentiates their response to mitogens or antigens. Interleukin-1 is a general term refers to either of the two distinct proteins, INTERLEUKIN-1ALPHA and INTERLEUKIN-1BETA. The biological effects of IL-1 include the ability to replace macrophage requirements for T-cell activation.",
    "arabic_definition": "إنترلوكين- 1 هو مجموعة من 11 سيتوكين. يحدث الانترلوكين-1 تأثيراته الحيوية بارتباطه مع مستقبل خاص على سطح الخلايا الحساسة، وقد تم التعرف على مستقبلين مختلفين: النمط Ι و النمط ΙΙ، حيث يرتبط كل من IL-1α و IL-1β بهذين المستقبلين، ولكن تقول بعض الدراسات أن الانترلوكين-1 يحدث تأثيراته الحيوية فقط بعد الارتباط مع مستقبل النمط Ι. انترلوكين 1 (A) IL-1، والطابع العام 1. (Interleukin-1)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007375.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cryoglobulins",
    "term_en": "Cryoglobulins",
    "term_ar": "الأجسام المضادة الحساسة للبرودة",
    "synonyms": [
      "Cryoglobulin",
      "Cryoproteins",
      "Cryoprotein",
      "Cold sensitive antibodies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal immunoglobulins, especially IGG or IGM, that precipitate spontaneously when SERUM is cooled below 37 degrees Celsius. It is characteristic of CRYOGLOBULINEMIA.",
    "arabic_definition": "الأجسام المضادة الحساسة للبرودة هي أجسام مضادة حساسة لدرجة الحرارة الباردة. بعض الأجسام المضادة الحساسة للبرد مرضية ويمكن أن تؤدي إلى إضطراب الدم. (Cryoglobulins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003450.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "melanogenesis",
    "term_en": "Melanogenesis",
    "term_ar": "خلية ميلانينية",
    "synonyms": [
      "Eumelanogenesis",
      "Phaeomelanogenesis",
      "Melanocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The biosynthesis of MELANINS in insects and higher animals. The key chemical step of melanogenesis is the initial conversion of TYROSINE to DOPAQUINONE by TYROSINASE, distinguishing melanogenesis from pathways for melanin synthesis in plants. Melanogenesis is complex process involving several stages from the formation of MELANOCYTES during EMBRYONIC DEVELOPMENT to the synthesis of MELANINS in the MELANOSOMES and their distribution via transport of the melanosomes to surrounding KERATINOCYTES.",
    "arabic_definition": "الخلية الميلانينية (الإنجليزية: Melanocyte) هي الخلايا المنتجة للميلانين وتوجد في الطبقة القاعدية من البشرة والطبقة الوسطى من العين (أو العنبية) والأذن الداخلية والسحايا والعظام والقلب. الميلانين هي الصبغة الأساسية المسؤولة عن لون جلد الإنسان. (Melanogenesis)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000095868.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "demethylation",
    "term_en": "Demethylation",
    "term_ar": "نزع الميثيل",
    "synonyms": [
      "Demethylations",
      "Oxidative Demethylation",
      "Demethylation, Oxidative",
      "Demethylations, Oxidative",
      "Oxidative Demethylations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Removal of one or more methyl groups from a chemical compound.",
    "arabic_definition": "نزع الميثيل هو تفاعل كيميائي يتضمن إزالة مجموعة ميثيل (CH3) من جزيء ما. تعاكس عملية نزع الميثيل عملية المّثْيَلَة. (Demethylation)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000073398.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nitrification",
    "term_en": "Nitrification",
    "term_ar": "نترجة",
    "synonyms": [
      "Nitrifications",
      "Aerobic Ammonia Oxidation",
      "Aerobic Ammonia Oxidations",
      "Ammonia Oxidation, Aerobic",
      "Oxidation, Aerobic Ammonia",
      "Nitrite Oxidation",
      "Nitrite Oxidations",
      "Oxidation, Nitrite"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A process facilitated by specialized bacteria involving the oxidations of ammonium to nitrite and nitrite to nitrate.",
    "arabic_definition": "نترجة في الكيمياء وعلم الأحياء (الإنجليزية: Nitrification) هي عملية أكسدة الأمونيا NH3وتحويلها إلى نترات (NO3−) عن طريق نوع من البكتيريا. وهذا التفاعل يتم على مرحلتين: في العملية الأولى يتأكسد الأمونيا إلى نتريت، ثم يتأكسد النتريت الناتج إلى نترات.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058465.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ribonucleases",
    "term_en": "Ribonucleases",
    "term_ar": "ريبونوكلياز",
    "synonyms": [
      "Nucleases, RNA",
      "RNA Nucleases",
      "Ribonuclease",
      "RNase",
      "Acid Ribonuclease",
      "Ribonuclease, Acid",
      "Alkaline Ribonuclease",
      "Ribonuclease, Alkaline"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that catalyze the hydrolysis of ester bonds within RNA. EC 3.1.-.",
    "arabic_definition": "ريبونوكلياز(الإنجليزية: Ribonuclease) عبارة عن مجموعة من الإنزيمات المنتشرة في الطبيعة، تحفز حلمهة روابط الفوسفات ثنائي الأستر بين النوكليوتيدات في الأحماض النووية. وقد تختلف أمكنة الحلمهة معتمدة على نوعية الإنزيم المعين. (Ribonucleases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012260.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptokinase",
    "term_en": "Streptokinase",
    "term_ar": "ستربتوكاينيز",
    "synonyms": [
      "Kabikinase",
      "Streptase",
      "Avelizin",
      "Awelysin",
      "Celiase",
      "Distreptase",
      "Kabivitrum",
      "Streptodecase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Streptococcal fibrinolysin . An enzyme produced by hemolytic streptococci. It hydrolyzes amide linkages and serves as an activator of plasminogen. It is used in thrombolytic therapy and is used also in mixtures with streptodornase (STREPTODORNASE AND STREPTOKINASE). EC 3.4.-.",
    "arabic_definition": "ستربتوكاينيز هو دواء التخثر وانزيم ، يتم استخدامه لكسر الجلطات في بعض حالات احتشاء عضلة القلب (نوبة قلبية) ، الانسداد الرئوي، والجلطات الدموية الشريانية. نوع النوبة القلبية التي يستخدم فيها هو احتشاء عضلة القلب من ارتفاع ST STEMI. يتم استخدامه عن طريق الحقن في الوريد. (Streptokinase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013300.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anaphylatoxins",
    "term_en": "Anaphylatoxins",
    "term_ar": "ذيفان تأقي",
    "synonyms": [
      "Anaphylatoxin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Serum peptides derived from certain cleaved COMPLEMENT PROTEINS during COMPLEMENT ACTIVATION. They induce smooth MUSCLE CONTRACTION; mast cell HISTAMINE RELEASE; PLATELET AGGREGATION; and act as mediators of the local inflammatory process. The order of anaphylatoxin activity from the strongest to the weakest is C5a, C3a, C4a, and C5a des-arginine.",
    "arabic_definition": "ذيفانٌ تَأَقِيّ أو مُكمِّل الببتيدات أو مُتمم الببتيدات أو السَّم التَأَقي(الإنجليزية: anaphylatoxin) وَهو عِبارة عن قِطعة مُكونة من العنصر المكمل 3 (C3a)، والعنصر المكمل 4 (C4a)، والعنصر المكمل 5 (C5a) التي يتم إنتاجها كَجُزء مِن تفعيل النظام المُكَمل. مُكونات المكمِّل C5، C4، C3 هي عِبارة عن بروتينات سكَّرِيّة كَبيرة لها وَظائف مُهمة في الإِستجابة المناعية وَالدفاع ضد العائِل، تَمتلك هذه المُكونات تَنَوّع وَاسع في النَشاطات البيولوجية وَيَتِم تَنشيط التّحلّل البروتينيّ بِواسطة الشَّق في موقع خاصّ، فَتَتَكوَّن قطعة a- و b-. (Anaphylatoxins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000706.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-6",
    "term_en": "Interleukin-6",
    "term_ar": "إنترلوكين 6",
    "synonyms": [
      "B Cell Stimulatory Factor-2",
      "B-Cell Differentiation Factor",
      "B-Cell Differentiation Factor-2",
      "BSF-2"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cytokine that stimulates the growth and differentiation of B-LYMPHOCYTES and is also a growth factor for HYBRIDOMAS and plasmacytomas. It is produced by many different cells including T-LYMPHOCYTES; MONOCYTES; and FIBROBLASTS.",
    "arabic_definition": "إنترلوكين 6 هو أحد أنواع الإنترلوكين وهو سيتوكين بادئ للالتهاب وميوكين مضاد للالتهاب. (Interleukin-6)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015850.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cryptochromes",
    "term_en": "Cryptochromes",
    "term_ar": "الكريبتوكرومات",
    "synonyms": [
      "Cryptochrome Proteins",
      "Cryptochrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Flavoproteins that function as circadian rhythm signaling proteins in ANIMALS and as blue-light photoreceptors in PLANTS. They are structurally-related to DNA PHOTOLYASES and it is believed that both classes of proteins may have originated from an earlier protein that played a role in protecting primitive organisms from the cyclical exposure to UV LIGHT.",
    "arabic_definition": "الكريبتوكرومات فلافوبروتينات، وهي بروتينات منتشرة في كل مكان، وتشارك بنحو خاص في النظام اليومي للنباتات والحيوانات، وفي اكتشاف المجال المغناطيسي عند بعض الأنواع الحية. (Cryptochromes)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056931.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autoreceptors",
    "term_en": "Autoreceptors",
    "term_ar": "مستقبل ذاتي",
    "synonyms": [
      "Autoreceptor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Transmitter receptors on or near presynaptic terminals (or varicosities) which are sensitive to the transmitter(s) released by the terminal itself. Receptors for the hormones released by hormone-releasing cells are also included.",
    "arabic_definition": "المستقبل الذاتي هو نوع من المستقبلات يتواجد في أغشية العصبونات قبل المشبكية. ويعمل كجزء من حلقة تغذية راجعة سلبية في توصيل الإشارة. (Autoreceptors)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017660.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-8",
    "term_en": "Interleukin-8",
    "term_ar": "إنترلوكين 8",
    "synonyms": [
      "IL-8",
      "IL8",
      "Monocyte-Derived Neutrophil Chemotactic Factor",
      "Neutrophil Activation Factor",
      "Neutrophil-Activating Peptide, Lymphocyte-Derived",
      "Lymphocyte-Derived Neutrophil-Activating Peptide",
      "Neutrophil-Activating Peptide, Monocyte-Derived",
      "Monocyte-Derived Neutrophil-Activating Peptide"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A member of the CXC chemokine family that plays a role in the regulation of the acute inflammatory response. It is secreted by variety of cell types and induces CHEMOTAXIS of NEUTROPHILS and other inflammatory cells.",
    "arabic_definition": "إنترلوكين 8 (الإنجليزية: Interleukin 8) هو أحد أنواع الإنترلوكين وهو كيموكين تنتجه الخلايا الأكولة الكبيرة وأنواع أخرى من الخلايا مثل الخلايا الطلائية وخلايا العضلات الملساء في المجاري التنفسية والخلايا البطانية. الخلايا البطانية تختزن إنترلوكين 8 في أجسام فايبل بالاده. (Interleukin-8)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016209.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-7",
    "term_en": "Interleukin-7",
    "term_ar": "انترلوكين 7",
    "synonyms": [
      "IL-7",
      "IL7",
      "Lymphopoietin-1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cytokine produced by bone marrow stromal cells that promotes the growth of B-LYMPHOCYTE precursors and is co-mitogenic with INTERLEUKIN-2 for mature T-LYMPHOCYTE activation.",
    "arabic_definition": "انترلوكين 7 ( IL-7 ) هو بروتين يتم ترميزه في البشر بواسطة جين IL7 . IL-7 هو عامل نمو مكون للدم تفرزه الخلايا اللحمية في نخاع العظم والغدة الصعترية. (Interleukin-7)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015851.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "muromonab-cd3",
    "term_en": "Muromonab-CD3",
    "term_ar": "موروموناب - سي دي 3",
    "synonyms": [
      "Monoclonal Antibody OKT3",
      "OKT3",
      "Orthoclone OKT3"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anti-CD3 monoclonal antibody that exerts immunosuppressive effects by inducing peripheral T-cell depletion and modulation of the T-cell receptor complex (CD3/Ti).",
    "arabic_definition": "موروموناب - سي دي 3 (الاسم التجاري: Orthoclone OKT3) هو جسم مضاد وحيد النسيلة مثبط للمناعة تسوقه جانسن سيلاج. يعد أول جسم مضاد وحيد النسيلة حصل على موافقة إدارة الغذاء والدواء لاستخدامه، وكان ذلك عام 1986. (Muromonab-CD3)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016853.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cathelicidins",
    "term_en": "Cathelicidins",
    "term_ar": "كاثليسدسن",
    "synonyms": [
      "Cathelicidin Antimicrobial Peptide",
      "Cathelicidin",
      "Bac4 Protein, Bos taurus",
      "eCATH-1 protein, Equus caballus",
      "CATH-1 Protein",
      "Protein, CATH-1",
      "Myeloid Cathelicidin 1 Protein, Equus caballus",
      "ALL-38 Peptide"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Antimicrobial cationic peptides with a highly conserved amino terminal cathelin-like domain and a more variable carboxy terminal domain. They are initially synthesized as preproproteins and then cleaved. They are expressed in many tissues of humans and localized to EPITHELIAL CELLS. They kill nonviral pathogens by forming pores in membranes.",
    "arabic_definition": "كاثليسدسن تعتبر من الببتيدات وتصنف على أنها ببتيدات مضادة للميكروبات ،موجودة في الجسيمات الحالة الضامة والخلايا الكيراتينية والكريات البيض النوى. وتلعب دورا حاسما في الثدييات في الدفاع المناعي الفطري ضد العدوى البكتيرية الغازية وهي غير متجانسة إلى حد كبير ومتغيرة بدرجة كبيرة، وتم عزلها من العديد من أنواع الثدييات . (Cathelicidins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054804.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nucleophosmin",
    "term_en": "Nucleophosmin",
    "term_ar": "نيوكليوفوسمين",
    "synonyms": [
      "Nucleolar Phosphoprotein B23",
      "B23, Nucleolar Phosphoprotein",
      "Phosphoprotein B23, Nucleolar",
      "Nucleolar Protein B23",
      "B23, Nucleolar Protein",
      "Protein B23, Nucleolar",
      "Numatrin",
      "Nucleophosmid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Predominantly localized in the CELL NUCLEOLUS, involved in diverse cellular processes such as ribosome biogenesis, cytoplasmic-nuclear trafficking, centrosome duplication, and regulation of p53.",
    "arabic_definition": "نيوكليوفوسمين المعروف أيضًا باسم البروتين الفسفوري النووي B23 أو النماترين ، هو بروتين يتم ترميزه في البشر بواسطة جين NPM1. (Nucleophosmin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000090243.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptolysins",
    "term_en": "Streptolysins",
    "term_ar": "ستريبتوليسين",
    "synonyms": [
      "Streptolysin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Exotoxins produced by certain strains of streptococci, particularly those of group A (STREPTOCOCCUS PYOGENES), that cause HEMOLYSIS.",
    "arabic_definition": "ستريبتوليسين (الإنجليزية: Streptolysin) هما نوعان من السموم الخارجية الحالة للدم من البكتريا العقدية. (Streptolysins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013301.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polymerization",
    "term_en": "Polymerization",
    "term_ar": "بلمرة",
    "synonyms": [
      "Polymerizations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chemical reaction in which monomeric components are combined to form POLYMERS (e.g., POLYMETHYLMETHACRYLATE).",
    "arabic_definition": "إن البلمرة أو التَّبَلمُر أو الكَوْثَرَة في كيمياء البوليمرات هي عملية تفاعل جزيئات المونومر(أحادي الحد) مع بعضها وفق تفاعل كيميائي لتُشكِّل شبكات ثلاثية الأبعاد أو سلاسل بوليمرية. يوجد عدة أشكال للبلمرة وأنظمة مختلفة لتصنيفها. (Polymerization)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058105.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stereoisomerism",
    "term_en": "Stereoisomerism",
    "term_ar": "تصاوغ فراغي",
    "synonyms": [
      "Stereoisomers",
      "Stereoisomer",
      "Molecular Stereochemistry",
      "Stereochemistry, Molecular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The phenomenon whereby compounds whose molecules have the same number and kind of atoms and the same atomic arrangement, but differ in their spatial relationships. (From McGraw-Hill Dictionary of Scientific and Technical Terms, 5th ed)",
    "arabic_definition": "التصاوغ الفراغي أو التماكب الفراغي (الإنجليزية: Stereoisomerism) أو التماكب المجسم هو ترتيب الذرات في الجزيء بنفس الوصلات ولكن بإتجاه مختلف في الفراغ في كل متماكب. فمثلا «المصاوغ الفراغي» (الإنجليزية: Stereoisomer) يمكن أن يحدث عند وجود رابطة ثنائية أو ثلاثية، لأن وجود الرابطة باي يمنع تلك الرابطة من الدوران بنفس الطريقة التي تحدث في الرابطة الأحادية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013237.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phosphorylation",
    "term_en": "Phosphorylation",
    "term_ar": "فسفرة",
    "synonyms": [
      "Phosphorylations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The introduction of a phosphoryl group into a compound through the formation of an ester bond between the compound and a phosphorus moiety.",
    "arabic_definition": "الفسفرة أو الفسفتة في الكيمياء الحيوية هي عملية يتم فيها إضافة مجموعة فوسفات إلى جزيء بروتين أو جزيء صغير، أو هو إدخال مجموعة فوسفات إلى جزيء عضوي بشكل عام. تتم العملية بواسطة إنزيمات الكيناز والتي تنقل الفوسفات. (Phosphorylation)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010766.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metalloproteins",
    "term_en": "Metalloproteins",
    "term_ar": "بروتين فلزي",
    "synonyms": [
      "Metalloprotein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Proteins that have one or more tightly bound metal ions forming part of their structure. (Dorland, 28th ed)",
    "arabic_definition": "البروتين الفلزي هو مصطلح عام شامل في الكيمياء الحيوية للبروتينات الحاوية عامل مرافق يدخل في تركيبه أيون فلزي. تعد هذه البروتينات وفيرة في الجسم نسبياً، فهناك تقديرياً 1000-3000 بروتين بشري من حوالي 20 ألف في الجسم، والتي تحوي على نطاق بروتين رابط للزنك. (Metalloproteins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008667.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "decarboxylation",
    "term_en": "Decarboxylation",
    "term_ar": "نزع الكربوكسيل",
    "synonyms": [
      "Decarboxylations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The removal of a carboxyl group, usually in the form of carbon dioxide, from a chemical compound.",
    "arabic_definition": "نزع الكربوكسيل(الإنجليزية: Decarboxylation)هو تفاعل كيميائي يتم فيه نزع مجموعة كربوكسيلية وينتج عن هذا التفاعل ثنائي أكسيد الكربون CO2. عادةً، نزع الكربوكسيل يُشير إلى التفاعل الذي يتم فيه نزع الأحماض الكربوكسيلية عن طريق نزع ذرة كربون من سلسلة كربونية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003653.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gluconeogenesis",
    "term_en": "Gluconeogenesis",
    "term_ar": "استحداث الجلوكوز",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Biosynthesis of GLUCOSE from nonhexose or non-carbohydrate precursors, such as LACTATE; PYRUVATE; ALANINE; and GLYCEROL.",
    "arabic_definition": "استحداث الغلوكوز أو دورة تخليق الجلوكوز أو استحداث السكر (الإنجليزية: Gluconeogenesis) هي الدورة التي يتم فيها تخليق الجلوكوز من مواد كربونية غير سكرية مثل البيروفات والاكتات والجليسرول والأحماض الأمينية الجلوكوجينية. تتم غالبية الدورة في الكبد وإلى حد بسيط في قشرة الكليتين.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005943.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angiotensinogen",
    "term_en": "Angiotensinogen",
    "term_ar": "أنجيوتنسين",
    "synonyms": [
      "Hypertensinogen",
      "Proangiotensin",
      "Renin-Substrate",
      "Serpin A8",
      "SERPINA8",
      "Renin Substrate Tetradecapeptide",
      "Tetradecapeptide, Renin Substrate",
      "Angiotensin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An alpha-globulin of about 453 amino acids, depending on the species. It is produced by the liver in response to lowered blood pressure and secreted into blood circulation. Angiotensinogen is the inactive precursor of the ANGIOTENSINS produced in the body by successive enzyme cleavages. Cleavage of angiotensinogen by RENIN yields the decapeptide ANGIOTENSIN I. Further cleavage of angiotensin I (by ANGIOTENSIN CONVERTING ENZYME) yields the potent vasoconstrictor octapeptide ANGIOTENSIN II; and then, via other enzymes, other angiotensins also involved in the hemodynamic-regulating RENIN-ANGIOTENSIN SYSTEM.",
    "arabic_definition": "الأنجيوتنسين (الإنجليزية: Angiotensin) هو هرمون ببتيدي الذي يسبب تضيق الأوعية، وزيادة لاحقة في ضغط الدم. وهو جزء من نظام الرينين-أنجيوتنسين-ألدوستيرون، والذي هو الهدف الرئيسي للأدوية التي تقوم بخفض ضغط الدم. (Angiotensinogen)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000808.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metallothionein",
    "term_en": "Metallothionein",
    "term_ar": "ميتالوثيونين",
    "synonyms": [
      "Metallothionein A",
      "Isometallothionein",
      "Metallothionein I",
      "Metallothionein II",
      "Metallothionein IIA",
      "Metallothionein B"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A low-molecular-weight (approx. 10 kD) protein occurring in the cytoplasm of kidney cortex and liver. It is rich in cysteinyl residues and contains no aromatic amino acids. Metallothionein shows high affinity for bivalent heavy metals.",
    "arabic_definition": "ميتالوثيونين (Metallothionein يرمز له اختصاراً MT) هو نوع من أنواع عائلات البروتينات الغنية بالحمض الأميني سيستئين وذات كتلة جزيئية منخفضة نسبياً (تتراوح بين 500 إلى 14000 دالتون) وتتوضع في غشاء جهاز غولجي. لبروتينات الميتالوثيونين المقدرة على الارتباط مع الفلزات الثقيلة، سواء أكانت لها وظيفة فيزيولوجية مثل الزنك أو النحاس أو السيلينيوم، أو كانت دخيلة مثل الكادميوم أو الرصاص أو الزئبق أو الفضة أو الزرنيخ؛ وذلك عن طريق الارتباط مع مجموعات الثيول في وحدات السيستئين الطرفية، واتي تمثل حوالي 30% من وحدات الأحماض الأمينية في البروتين.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008668.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oxidoreductases",
    "term_en": "Oxidoreductases",
    "term_ar": "إنزيم أكسدة واختزال",
    "synonyms": [
      "Oxidoreductase",
      "Dehydrogenase",
      "Dehydrogenases",
      "Reductase",
      "Reductases",
      "Oxidase",
      "Oxidases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The class of all enzymes catalyzing oxidoreduction reactions. The substrate that is oxidized is regarded as a hydrogen donor. The systematic name is based on donor:acceptor oxidoreductase. The recommended name will be dehydrogenase, wherever this is possible; as an alternative, reductase can be used. Oxidase is only used in cases where O2 is the acceptor. (Enzyme Nomenclature, 1992, p9)",
    "arabic_definition": "في الكيمياء الحيوية، إنزيم أكسدة-اختزال (أو حرفيًا الأوكسيدوريدوكتاز) (الإنجليزية: oxidoreductase) أحد أنواع الإنزيمات التي تحفز نقل إلكترون من جزيئة (تدعى مرجع)، أو تدعى أيضا قابل الهيدروجين (hydrogen acceptor) أو مانح الإلكترون (electron donor) إلى جزيئة أخرى تدعى مؤكسد، أيضا مانح الهيدروجبن أو قابل الإلكترون. مثلا : الإنزيم الذي يتواسط التفاعل التالي يمكن أن يكون أوكسيدوريدوكتاز : A– + B → A + B– في هذا المثال, A هو المرجع (مانح الإلكترون) و B هو المؤكسد (قابل الإلكترون). (Oxidoreductases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010088.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "apolipoproteins",
    "term_en": "Apolipoproteins",
    "term_ar": "صميم البروتين الشحمي",
    "synonyms": [
      "Apolipoprotein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Protein components on the surface of LIPOPROTEINS. They form a layer surrounding the hydrophobic lipid core. There are several classes of apolipoproteins with each playing a different role in lipid transport and LIPID METABOLISM. These proteins are synthesized mainly in the LIVER and the INTESTINES.",
    "arabic_definition": "صميم البروتين الشحمي (بالأنجليزية: Apolipoprotein، واختصارها Apo) هو البروتين الذي يرتبط بالليبيدات (المواد القابلة للذوبان في الدهون مثل الشحوم والكوليسترول وبعض الفيتامينات) لتشكيل البروتينات الشحمية، كما ينقل الدهون من خلال النظم اللمفاوية والدورة الدموية. المكونات الدهنية للبروتينات الشحمية تكون غير قابلة للذوبان في الماء. (Apolipoproteins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001053.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "disaccharidases",
    "term_en": "Disaccharidases",
    "term_ar": "ديسكاريداز",
    "synonyms": [
      "Disaccharidase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes belonging to the class of GLYCOSIDE HYDROLASES which break down DISACCHARIDES into simpler sugars, MONOSACCHARIDES.",
    "arabic_definition": "الداي سكاريدازات عبارة عن هيدرولازات جليكوسيد، وهي إنزيمات تقوم بتكسير أنواع معينة من السكريات تسمى السكريات الثنائية إلى سكريات أبسط تسمى السكريات الأحادية. في جسم الإنسان، يتم تصنيع الداي سكاريدازات في الغالب في منطقة من جدار الأمعاء الدقيقة تسمى الحافة الفرشاتية ، مما يجعلهم جزء من مجموعة \"إنزيمات الحافة الفرشاتية\". (Disaccharidases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004186.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aminopeptidases",
    "term_en": "Aminopeptidases",
    "term_ar": "أمينوببتيداز",
    "synonyms": [
      "Aminopeptidase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A subclass of EXOPEPTIDASES that act on the free N terminus end of a polypeptide liberating a single amino acid residue. EC 3.4.11.",
    "arabic_definition": "أمينوببتيداز (بالإنجليزية: Aminopeptidase) هي إنزيمات تساعد على تكسير (فصم) حمض أميني من النهاية الأمينية. وتوجد إنزيمات أمينوببتيداز في جميع الكائنات الحية . (Aminopeptidases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000626.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-22",
    "term_en": "Interleukin-22",
    "term_ar": "إنترلوكين-22",
    "synonyms": [
      "ILTIF",
      "IL-22",
      "IL-10-Related T-Cell-Derived-Inducible Factor",
      "Factor, IL-10-Related T-Cell-Derived-Inducible",
      "T-Cell-Derived-Inducible Factor, IL-10-Related",
      "Cytokine Zcyto18",
      "Zcyto18, Cytokine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An interleukin that plays a critical role in modulating tissue responses during inflammation, and in WOUND HEALING.",
    "arabic_definition": "إنترلوكين-22 (الإنجليزية: Interleukin 22) ويُدعى اختصارًا IL-22، هو بروتين يُشفر بجين IL22 في الإنسان. (Interleukin-22)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000097043.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interferon-beta",
    "term_en": "Interferon-beta",
    "term_ar": "إنترفيرون نوع 1",
    "synonyms": [
      "beta Interferon",
      "Interferon, Fibroblast",
      "Fibroblast Interferon",
      "beta-1 Interferon",
      "Interferon, beta-1",
      "Interferon type I"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of the type I interferons produced by fibroblasts in response to stimulation by live or inactivated virus or by double-stranded RNA. It is a cytokine with antiviral, antiproliferative, and immunomodulating activity.",
    "arabic_definition": "النوع الإنساني من الإنترفيون هو مجموعة جزئية كبيرة من بروتينات الإنترفيرون التي تساعد على تنظيم الجهاز المناعي. يتحد الانترفيرون من مستقبل الانترفيرون، جميع الانترفيرون نوع1 يتحد مع مستقبل سطح خليه معقد معين والذي يطلق علية اسم مستقبل انترفيرون الفا IFNAR والذي بدورة يتكون من سلاسل مستقبل انترفيرون الفا 1 IFNAR1 ومستقبل انترفيرون الفا2 INFAR2 يوجد النوع1 من الانترفيرون في جميع الثدييات، ووجدت أيضا جزيئات مشابة في أنواع الطيور، الزواحف، البرمائيات والأسماك. (Interferon-beta)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016899.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osmoregulation",
    "term_en": "Osmoregulation",
    "term_ar": "تنظيم أسموزي",
    "synonyms": [
      "Osmotic Stress Response",
      "Osmotic Stress Responses",
      "Response, Osmotic Stress",
      "Responses, Osmotic Stress",
      "Stress Response, Osmotic",
      "Stress Responses, Osmotic",
      "Osmotic Stress Regulating Pathway"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The response of cells in sensing a difference in OSMOTIC PRESSURE between the inside and outside of the cell. This response includes signaling from osmotic sensors to activate transcription factors, which in turn regulate the expression of osmocompensatory genes, all functioning to maintain CELL VOLUME and the water concentration inside the cells.",
    "arabic_definition": "تنظيم التناضح (الإنجليزية: Osmoregulation) هو تنظيم فاعل للضغط الأسموزي للسوائل الجسمية لدى الكائن الحي، ويتم كشفه بوساطة مستقبلات أسموزية، للمحافظة على الاتزان الداخلي للمحتوى المائي للكائن الحي; وهذا يعني أنه, يحافظ على اتزان السوائل والتركيز في المحاليل الكهرلية (الأملاح في المحلول) للحفاظ على السوائل من أن تصبح مخففة أو مركزة أكثر مما ينبغي. الضغط الاسموزي هو مقياس لميل (نزعة) الماء للتحرك والانتقال إلى محلول ما من محلول آخر بوساطة الخاصية الأسموزية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064587.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "esterification",
    "term_en": "Esterification",
    "term_ar": "إستر",
    "synonyms": [
      "Esterifications",
      "Ester"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of converting an acid into an alkyl or aryl derivative. Most frequently the process consists of the reaction of an acid with an alcohol in the presence of a trace of mineral acid as catalyst or the reaction of an acyl chloride with an alcohol. Esterification can also be accomplished by enzymatic processes.",
    "arabic_definition": "الإسترات هي صنف من المركبات الكيميائية العضوية لأنها تحتوي على الكربون العضوي، والصيغة العامة لها كالتالي ´R-COO-R تتشكل الإسترات بتفاعل حمض أكسيدي مع مركب هيدروكسيل مثل الكحول أو الفينول. تتشكل الاسترات عادة من الأحماض العضوية مثل الأحماض الكربوكسيلية بتفاعلها مع الكحولات أو الفينولات. (Esterification)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004951.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photosynthesis",
    "term_en": "Photosynthesis",
    "term_ar": "تركيب ضوئي",
    "synonyms": [
      "Reductive Pentose Phosphate Cycle",
      "Calvin Cycle",
      "Cycle, Calvin",
      "Calvin-Benson Cycle",
      "Cycle, Calvin-Benson",
      "Calvin-Benson-Bassham Cycle",
      "Cycle, Calvin-Benson-Bassham",
      "Dark Reactions of Photosynthesis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The synthesis by organisms of organic chemical compounds, especially carbohydrates, from carbon dioxide using energy obtained from light rather than from the oxidation of chemical compounds. Photosynthesis comprises two separate processes: the light reactions and the dark reactions. In higher plants; GREEN ALGAE; and CYANOBACTERIA; NADPH and ATP formed by the light reactions drive the dark reactions which result in the fixation of carbon dioxide. (from Oxford Dictionary of Biochemistry and Molecular Biology, 2001)",
    "arabic_definition": "التركيب الضوئي أو الاصطناع الضوئي أو التخليق الضوئي أو البناء الضوئي (الإنجليزية: Photosynthesis) هو عملية تستخدمها النباتات وبعض الكائنات الحية الأخرى لتحويل الطاقة الضوئية إلى طاقة كيميائية يمكن من خلال التنفس الخلوي، تحريرها لاحقًا لتغذية أنشطة الكائن الحي. تُخزن هذه الطاقة الكيميائية في جزيئات الكربوهيدرات، مثل السكريات والنشويات، والتي تُصنع من ثاني أكسيد الكربون والماء - ومن هنا جاء اسم التركيب الضوئي.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010788.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phospholipases",
    "term_en": "Phospholipases",
    "term_ar": "فوسفوليباز",
    "synonyms": [
      "Lecithinase",
      "Lecithinases",
      "Phospholipase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of enzymes that catalyze the hydrolysis of phosphoglycerides or glycerophosphatidates. EC 3.1.-.",
    "arabic_definition": "فوسفوليباز هو إنزيم يقوم بحلمهة الدهون الفوسفورية، وذلك إلى الأحماض الدهنية وغيرها من مواد محب للدهن. (Phospholipases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010740.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erythropoietin",
    "term_en": "Erythropoietin",
    "term_ar": "إريثروبويتين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Glycoprotein hormone, secreted chiefly by the KIDNEY in the adult and the LIVER in the FETUS, that acts on erythroid stem cells of the BONE MARROW to stimulate proliferation and differentiation.",
    "arabic_definition": "الإريثروبويتين أو مكون الكريات الحمر (الإنجليزية: Erythropoietin)، هو هرمون بروتيني سكري ( 46 كدٍا). تنتجه الكلية بنسبة 85% والكبد بنسبة 15% في حالات نقص التأكسج وفي غيرها من الحالات، يتحكّم في عملية تكوين كريات الدم الحمراء التي تدعى المـَدْمـِيـَة (بالإنج.Erythropoiesis)، إنه السيتوكين الذي يعمل على نمو بوادر الخلايا الحمراء في نقي العظم.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004921.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glycogenolysis",
    "term_en": "Glycogenolysis",
    "term_ar": "تحلل الغليكوجين",
    "synonyms": [
      "Glycogenolyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The release of GLUCOSE from GLYCOGEN by GLYCOGEN PHOSPHORYLASE (phosphorolysis). The released glucose-1-phosphate is then converted to GLUCOSE-6-PHOSPHATE by PHOSPHOGLUCOMUTASE before entering GLYCOLYSIS. Glycogenolysis is stimulated by GLUCAGON or EPINEPHRINE via the activation of PHOSPHORYLASE KINASE.",
    "arabic_definition": "تحلل الغلايكوجين هو سلاسل معقدة من الجلوكوز تختزن في الكبد والعضلات بالنسبة للإنسان وفي الاوراق بالنسبة للنبات على شكل نشا. يتم تحليل هذه المادة عندما يصبح الجسم بحاجة إلى الجلوكوز اللازم للاحتراق وإنتاج الطاقة اللازمة للقيام بأنشطة حيوية. (Glycogenolysis)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thrombopoietin",
    "term_en": "Thrombopoietin",
    "term_ar": "ثرومبوبويتين",
    "synonyms": [
      "Thrombocytopoiesis-Stimulating Factor",
      "MGDF Factor",
      "mpl Ligand",
      "Ligand, mpl",
      "c-mpl Ligand",
      "Ligand, c-mpl",
      "Megakaryocyte Growth and Development Factor",
      "Myeloproliferative Leukemia Virus Oncogene Ligand"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A humoral factor that stimulates the production of thrombocytes (BLOOD PLATELETS). Thrombopoietin stimulates the proliferation of bone marrow MEGAKARYOCYTES and their release of blood platelets. The process is called THROMBOPOIESIS.",
    "arabic_definition": "الثرومبوبويتين (الإنجليزية: Thrombopoietin ومختصرها THPO) أو عامل نمو وتطوير الخلية النوّاء (الإنجليزية: megakaryocyte growth and development factor ومختصرها MGDF) هو بروتين موجود عند الإنسان ومشفر بالمورثة THPO. الثرومبوبويتين هرمون بروتين سكري ينتجه الكبد والكلية وينظم إنتاج الصفيحات الدموية. يقوم بتحفيز إنتاج وتمايز الخلايا النواء الموجودة في نخاع العظم والتي تمثل الخلايا الأولية لإنتاج الصفيحات الدموية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013926.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scleroproteins",
    "term_en": "Scleroproteins",
    "term_ar": "سكليروبروتين",
    "synonyms": [
      "Fibrous Protein",
      "Protein, Fibrous",
      "Scleroprotein",
      "Fibrous Proteins"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Simple proteins characterized by their insolubility and fibrous structure. Within the body, they perform a supportive or protective function.",
    "arabic_definition": "تشكل سكليروبروتين أو البروتين الصلب أو البروتين الليفي (الإنجليزية: Scleroprotein) واحدة من ثلاثة أنواع رئيسية من البروتينات (إلى جانب بروتينات الغشاء وبروتين كريوي). هناك العديد من فائض فرط السكليروبروتين بما في ذلك الكيراتين والكولاجين والإيلاستين، والفبروين. (Scleroproteins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012596.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-10",
    "term_en": "Interleukin-10",
    "term_ar": "إنترلوكين-10",
    "synonyms": [
      "CSIF-10",
      "Cytokine Synthesis Inhibitory Factor",
      "IL-10",
      "IL10"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cytokine produced by a variety of cell types, including T-LYMPHOCYTES; MONOCYTES; DENDRITIC CELLS; and EPITHELIAL CELLS that exerts a variety of effects on immunoregulation and INFLAMMATION. Interleukin-10 combines with itself to form a homodimeric molecule that is the biologically active form of the protein.",
    "arabic_definition": "إنترلوكين-10 (الإنجليزية: Interleukin 10) ويُدعى اختصارًا IL-10، هو سيتوكين مُضاد للالتهاب. يُشفر بجين IL10 في الإنسان. (Interleukin-10)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016753.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-12",
    "term_en": "Interleukin-12",
    "term_ar": "إنترلوكين 12",
    "synonyms": [
      "Natural Killer Cell Stimulatory Factor",
      "IL12",
      "IL 12",
      "IL-12 p70",
      "Interleukin-12 p70",
      "Cytotoxic Lymphocyte Maturation Factor",
      "Edodekin Alfa"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A heterodimeric cytokine that plays a role in innate and adaptive immune responses. Interleukin-12 is a 70 kDa protein that is composed of covalently linked 40 kDa and 35 kDa subunits. It is produced by DENDRITIC CELLS; MACROPHAGES and a variety of other immune cells and plays a role in the stimulation of INTERFERON-GAMMA production by T-LYMPHOCYTES and NATURAL KILLER CELLS.",
    "arabic_definition": "الإنترلوكين 12 (الإنجليزية: Interleukin 12) واختصارا (إل-12، IL-12) هو إنترلوكين يُنتج طبيعيا بواسطة الخلايا المتغصنة، البلعميات الكبيرة، والخلايا المتعادلة، والأرومة المفاوية-B‏ (NC-37) استجابة لتحفيز بواسطة مستضد. ينتمي الإنترلوكين 12 إلى عائلة الإنترلوكينات 12، وهي عائلة فريدة تتكون من السيتوكينات المثنوية المتغايرة وتشمل: إل-12، إل-23، إل-27 وإل-35. (Interleukin-12)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018664.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autoantibodies",
    "term_en": "Autoantibodies",
    "term_ar": "ضد ذاتي",
    "synonyms": [
      "Autoantibody"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Antibodies that react with self-antigens (AUTOANTIGENS) of the organism that produced them.",
    "arabic_definition": "الضد الذاتي أو الجسم المضاد الذاتي (الإنجليزية: Autoantibody) هو جسم مضاد (وهو نوع من البروتين) التي ينتجها الجهاز المناعي الموجه ضد واحد أو أكثر من البروتينات الفرد الخاصة. العديد من أمراض المناعة الذاتية (وخاصة الذئبة الحمامية) تكون ناجمة عن مثل هذه الأجسام المضادة. (Autoantibodies)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001323.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nucleoproteins",
    "term_en": "Nucleoproteins",
    "term_ar": "بروتين نووي",
    "synonyms": [
      "Nucleoprotein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Proteins conjugated with nucleic acids.",
    "arabic_definition": "البروتين النووي (الإنجليزية: Nucleoprotein) هو أي بروتين يرتبط هيكليا مع الحمض النووي (إما دنا أو رنا). العديد من الفيروسات تستخدم هذا البروتين وهي معروفة بكونها مضيفة له، أي أنها تجد صعوبة في نقل العدوى للأنواع التي تصيبها عادة. (Nucleoproteins)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009698.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photobleaching",
    "term_en": "Photobleaching",
    "term_ar": "ابيضاض ضوئي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Light-induced change in a chromophore, resulting in the loss of its absorption of light of a particular wave length. The photon energy causes a conformational change in the photoreceptor proteins affecting PHOTOTRANSDUCTION. This occurs naturally in the retina (ADAPTATION, OCULAR) on long exposure to bright light. Photobleaching presents problems when occurring in PHOTODYNAMIC THERAPY, and in FLUORESCENCE MICROSCOPY. On the other hand, this phenomenon is exploited in the technique, FLUORESCENCE RECOVERY AFTER PHOTOBLEACHING, allowing measurement of the movements of proteins and LIPIDS in the CELL MEMBRANE.",
    "arabic_definition": "الابيضاض الضوئي للجزيئات ضمن علم البصريات هو تغير كيميائي ضوئي لصبغة أو جزيء فلورفور بجعله غير قادراً على الاشعاع الضوئي بشكل دائم؛ ويعود ذلك هو إلى فصم الروابط التساهمية أو تفاعلات الجزيء الحامل للخاصة الفلورية (فلوروفور) مع الجزيئات المحيطة به. هذه التعديلات غير قابلة للرجوع في الروابط التساهمية سببها الانتقال من حالة الطاقية الأولية إلى الحالة الطاقية الثالثية في الجزيء الحامل للخاصة الفلورية. (Photobleaching)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D038761.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-13",
    "term_en": "Interleukin-13",
    "term_ar": "إنترلوكين 13",
    "synonyms": [
      "IL 13",
      "IL13"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cytokine synthesized by T-LYMPHOCYTES that produces proliferation, immunoglobulin isotype switching, and immunoglobulin production by immature B-LYMPHOCYTES. It appears to play a role in regulating inflammatory and immune responses.",
    "arabic_definition": "إنترلوكين 13 (بالإنجليزية: Interleukin 13، ويُختصر IL-13) ونظيره إنترلوكين-4 هما بروتينات إشارة لأنظمة المناعة التكيفية للفقاريات. هي سيتوكينات منظمة للمناعة تنتمي إلى عائلة السيتوكينات من النوع 2، ويتم إنتاجها بشكل أساسي بواسطة الخلايا التائية المساعدة 2 المنشطة (Th2)، بالإضافة إلى الخلايا اللمفاوية الفطرية من النوع 2 (ILC2s)، والخلايا التائية القاتلة الطبيعية، والخلايا البدينة، والخلايا القاعدية، والخلايا الحمضية، والخلايا الجديدة أثناء الاستجابات المناعية من النوع 2. (Interleukin-13)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018793.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carboxy-lyases",
    "term_en": "Carboxy-Lyases",
    "term_ar": "كربوكسي لياز",
    "synonyms": [
      "Decarboxylase",
      "Carboxy-Lyase",
      "Decarboxylases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that catalyze the addition of a carboxyl group to a compound (carboxylases) or the removal of a carboxyl group from a compound (decarboxylases). EC 4.1.1.",
    "arabic_definition": "كربوكسي لياز (الإنجليزية: Carboxy-lyases) ويُسمى أيضاً نازعة الكربوكسيل (الإنجليزية: Decarboxylases) هوَ إنزيم لياز يَعمل على إضافة أو إزالة حمض كربوكسيلي من مركب عضوي، حيثُ يُحفز هذا الإنزيم نَزع الكربوكسيل من الأحماض الأمينية وأحماض بيتا وألفا الكيتونية.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002262.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ferrochelatase",
    "term_en": "Ferrochelatase",
    "term_ar": "فيروكيلاتاز",
    "synonyms": [
      "Heme Synthetase",
      "Synthetase, Heme",
      "Porphyrin-Metal Chelatase",
      "Chelatase, Porphyrin-Metal",
      "Protoheme Ferro-Lyase",
      "Ferro-Lyase, Protoheme",
      "Zinc Chelatase",
      "Chelatase, Zinc"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mitochondrial enzyme found in a wide variety of cells and tissues. It is the final enzyme in the 8-enzyme biosynthetic pathway of HEME. Ferrochelatase catalyzes ferrous insertion into protoporphyrin IX to form protoheme or heme. Deficiency in this enzyme results in ERYTHROPOIETIC PROTOPORPHYRIA.",
    "arabic_definition": "فيروكيلاتاز (ممخلبة الحديد) هو إنزيم يُشفَّر من جين FECH عند البشر. (Ferrochelatase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005294.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-11",
    "term_en": "Interleukin-11",
    "term_ar": "إنترلوكين 11",
    "synonyms": [
      "Adipogenesis Inhibitory Factor",
      "Factor, Adipogenesis Inhibitory",
      "Inhibitory Factor, Adipogenesis",
      "IL-11",
      "IL11"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A lymphohematopoietic cytokine that plays a role in regulating the proliferation of ERYTHROID PRECURSOR CELLS. It induces maturation of MEGAKARYOCYTES which results in increased production of BLOOD PLATELETS. Interleukin-11 was also initially described as an inhibitor of ADIPOGENESIS of cultured preadipocytes.",
    "arabic_definition": "إنترلوكين 11 ينتج بشكل كبير من خلايا نقي العظم و الأرومات الليفية و يعمل كعامل نمو للخلايا الدموية، حيث يحرض إنتاج الصفيحات و نمو وتمايز خلايا نقي العظم إلى بالعات كبيرة. يعتبر السبب الأساسي لاستخدام IL-11 علاجيا ً هو قدرته على تحريض اصطناع الصفيحات، حيث يمكن لتعداد الصفيحات أن ينخفض بشدة في بعض الحالات المرضية وعند المرضى الذين يتلقون علاجا ً كيماويا ً للسرطان. (Interleukin-11)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017370.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-18",
    "term_en": "Interleukin-18",
    "term_ar": "إنترلوكين 18",
    "synonyms": [
      "IFN-gamma Inducing Factor",
      "Inducing Factor, IFN-gamma",
      "IL-18",
      "IL18",
      "Interferon-gamma Inducing Factor",
      "Inducing Factor, Interferon-gamma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cytokine which resembles IL-1 structurally and IL-12 functionally. It enhances the cytotoxic activity of NK CELLS and CYTOTOXIC T-LYMPHOCYTES, and appears to play a role both as neuroimmunomodulator and in the induction of mucosal immunity.",
    "arabic_definition": "إنترلوكين 18 (الإنجليزية: Interleukin 18 ومختصره IL18) ويسمى كذلك العامل المحفز لإنترفيرون غاما (الإنجليزية: interferon-gamma inducing factor) هو بروتين مشفر بالمورثة IL18 وموجود في الإنسان، وهو سيتوكين منشط للالتهاب. (Interleukin-18)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020382.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interleukin-17",
    "term_en": "Interleukin-17",
    "term_ar": "إنترلوكين 17",
    "synonyms": [
      "CTLA-8",
      "IL-17",
      "Interleukin-17B",
      "IL-17B",
      "Interleukin-17A",
      "CTLA8",
      "Cytotoxic T lymphocyte-Associated Antigen 8"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A proinflammatory cytokine produced primarily by T-LYMPHOCYTES or their precursors. Several subtypes of interleukin-17 have been identified, each of which is a product of a unique gene.",
    "arabic_definition": "إنترلوكين 17 (الإنجليزية: Interleukin 17) ومختصره (IL-17) هي مجموعة سيتوكين تعرف بعائلة إنترلوكين 17 عرفت أول مرة عام 1993 على أنها نسخ من ورم هجين لخلية تائية لقارض. إنترلوكين 17 هي سيتوكينات وسيطة قوية في تفاعلات النوع المتأخر من خلال زيادة إنتاج كيموكين في الأنسجة المختلفة لتجنيد الوحيدات والعدلات إلى موقع الالتهاب. (Interleukin-17)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020381.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "denitrification",
    "term_en": "Denitrification",
    "term_ar": "نزع النيتروجين",
    "synonyms": [
      "Denitrifications"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Nitrate reduction process generally mediated by anaerobic bacteria by which nitrogen available to plants is converted to a gaseous form and lost from the soil or water column. It is a part of the nitrogen cycle.",
    "arabic_definition": "نزع النيتروجين أو سَلْم النترجة أو عكس النترجة هو عملية إرجاع النترات بمساعدة الميكروبات (تؤديها مجموعة كبيرة من البكتيريا اللاهوائية الاختيارية غيرية التغذية) والتي يمكنها أن تنتج في النهاية نيتروجين جزيئي (N2) عن طريق سلسلة وسيطة من النواتج الغازية من أكاسيد الآزوت. ترجع هذه العملية التنفسية أكاسيد الآزوت كنتيجة لأكسدة مانح إلكترون مثل مادة عضوية. (Denitrification)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058440.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transglutaminases",
    "term_en": "Transglutaminases",
    "term_ar": "ناقلة الغلوتامين",
    "synonyms": [
      "Transglutaminase",
      "Glutaminyl-Peptide Gamma-Glutamyltransferases",
      "Gamma-Glutamyltransferases, Glutaminyl-Peptide",
      "Protein-Glutamine gamma-Glutamyltransferases",
      "gamma-Glutamyltransferases, Protein-Glutamine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Transglutaminases catalyze cross-linking of proteins at a GLUTAMINE in one chain with LYSINE in another chain. They include keratinocyte transglutaminase (TGM1 or TGK), tissue transglutaminase (TGM2 or TGC), plasma transglutaminase involved with coagulation (FACTOR XIII and FACTOR XIIIa), hair follicle transglutaminase, and prostate transglutaminase. Although structures differ, they share an active site (YGQCW) and strict CALCIUM dependence.",
    "arabic_definition": "ناقلة الغلوتامين وتترجم حرفيًا إلى ترانسغلوتاميناز (الإنجليزية: Transglutaminase) (تصنيف شيفرته EC 2.3.2.13) هو إنزيم يُحفز تشكيل الرابطة التساهمية بين مجموعة الأمين الحرة (على سبيل المثال، البروتين أو الببتيد ليسين), ويعتبر معقد الغليادين. ومجموعة الأسيل تقع في نهاية سلسلة من جوانب البروتين أو الببتيد الجلوتامين. (Transglutaminases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011503.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "biomineralization",
    "term_en": "Biomineralization",
    "term_ar": "تمعدن حيوي",
    "synonyms": [
      "Biomineralizations",
      "Bioprecipitation",
      "Bioprecipitations",
      "Biocrystallization",
      "Biocrystallizations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Process by which living organisms produce MINERALS that accumulate into hardened tissues (e.g., bones, teeth and shells), and cellular nanostructures that sequester away into macromolecules. Biosynthesized minerals include CALCIUM CARBONATE; FLUOROAPATITE; HYDROXYAPATITE; and MAGNETITE.",
    "arabic_definition": "التمعدن الحيوي أو التعدن الحيوي (بالانجليزية: Biomineralization) هي إحدى طُرق التمعدن في علم الأحياء، وهي العملية التي تنتج فيها العضويات الحية المعادن غالباً يكون هدفها تقسية وتصليب نسج موجودة. مثل هذه الأنسجة تسمّى بالنسج المتمعدنة وتعد ظاهرة واسعة الانتشار إلى حد كبير، تتضمن جميع الممالك التصنيفية أعداداً قادرة على تشكيل المعادن، وقد حُدد أكثر من 60 معدن مختلف في العضويات.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077320.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interferon-gamma",
    "term_en": "Interferon-gamma",
    "term_ar": "إنترفيرون غاما",
    "synonyms": [
      "Interferon Type II",
      "Interferon, Immune",
      "Immune Interferon",
      "Type II Interferon",
      "gamma-Interferon"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The major interferon produced by mitogenically or antigenically stimulated LYMPHOCYTES. It is structurally different from TYPE I INTERFERON and its major activity is immunoregulation. It has been implicated in the expression of CLASS II HISTOCOMPATIBILITY ANTIGENS in cells that do not normally produce them, leading to AUTOIMMUNE DISEASES.",
    "arabic_definition": "الإنترفيرون غاما (الإنجليزية: IFNγ) هو سايتوكين ذائب ثنائي الوحدات وهو العضو الوحيد في الإنترفيرونات من النوع الثاني. (Interferon-gamma)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007371.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carboxypeptidases",
    "term_en": "Carboxypeptidases",
    "term_ar": "كربوكسي ببتيداز",
    "synonyms": [
      "Carboxypeptidase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that act at a free C-terminus of a polypeptide to liberate a single amino acid residue.",
    "arabic_definition": "كربوكسي ببتيداز (الاسم العلمي: Carboxypeptidase) هو إنزيم من إنزيمات الببتيداز، وهي إنزيمات تقوم بتكسير (فصم) الرابطة الببتيدية عبر التحلل المائي (حلمهة) النهاية الكربوكسيلية لبروتين أو ببتيد، وذلك على العكس من إنزيمات أمينوببتيداز التي تعتني بتكسير الروابط الببنيدية على النهاية الأمينية توجد إنزيمات كربوكسي ببتيداز في عدد كبير من الكائنات الحية، وتقوم بوظائف حيوية مهمة. (Carboxypeptidases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002268.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunoconjugates",
    "term_en": "Immunoconjugates",
    "term_ar": "قرين مناعي",
    "synonyms": [
      "Immunoconjugate",
      "Radioimmunoconjugates",
      "Radioimmunoconjugate",
      "Antibody-Drug Conjugates",
      "Conjugates, Antibody-Drug",
      "Antibody Drug Conjugate",
      "Conjugate, Antibody Drug",
      "Drug Conjugate, Antibody"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Combinations of diagnostic or therapeutic substances linked with specific immune substances such as IMMUNOGLOBULINS; MONOCLONAL ANTIBODIES; or ANTIGENS. Often the diagnostic or therapeutic substance is a radionuclide. These conjugates are useful tools for specific targeting of DRUGS and RADIOISOTOPES in the CHEMOTHERAPY and RADIOIMMUNOTHERAPY of certain cancers.",
    "arabic_definition": "القرين المناعي (الإنجليزية: Immunoconjugate) هو جسم مضاد مترتبط بجزيئة أخرى قد تكون ذيفان أو نويدة مشعة أو وسما. تستعمل هذه القرائن في العلاج المناعي لتطوير العلاج بالأضداد وحيدة النسيلة لتكون نوعا من علاجات السرطان، وحينها تسمى بقرائن الأجسام المضادة والأدوية. (Immunoconjugates)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018796.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antistreptolysin",
    "term_en": "Antistreptolysin",
    "term_ar": "مضاد ستربتوليزين O",
    "synonyms": [
      "Antistreptolysin O",
      "Anti-streptolysin O"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Antibodies specific to STREPTOLYSINS which indicate STREPTOCOCCAL INFECTIONS.",
    "arabic_definition": "مضاد الحالة العقدية O هو الجسم المضاد الذي هو موجه ضد ستربتوليزين o، وهو ذيفان خارجي مناعي، الأكسجين قابل للتغير عقدية مقيحة التي تنتجها معظم سلالات المجموعة (A) والعديد من السلالات من مجموعة C و G البكتيريا العقدية . و\"O\" في الاسم تشير إلى الأكسجين القابل للتبدل ; التوكسينات الأخرى ذات الصلة كونها ذات الأكسجين المستقر ستربتوليزين-S. وتتمثل المهمة الرئيسية للستربتوليزين o هي أن تسبب انحلال الدم (وهو, تكسير مفتوح لخلايا الدم الحمراء) - على وجه الخصوص ، بيتا انحلال الدم. (Antistreptolysin)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000989.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oxidation-reduction",
    "term_en": "Oxidation-Reduction",
    "term_ar": "أكسدة واختزال",
    "synonyms": [
      "Redox"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chemical reaction in which an electron is transferred from one molecule to another. The electron-donating molecule is the reducing agent or reductant; the electron-accepting molecule is the oxidizing agent or oxidant. Reducing and oxidizing agents function as conjugate reductant-oxidant pairs or redox pairs (Lehninger, Principles of Biochemistry, 1982, p471).",
    "arabic_definition": "تفاعلات الأكسدة والاختزال أو الأكسدة والإرجاع هي تفاعلات كيميائية يحدث فيها تغير في عدد أكسدة ذرات المواد المتفاعلة نتيجة انتقال الإلكترونات فيما بينها. الأكسدة هي عملية فقدان للإلكترونات من قبل الذرات أو الجزيئات أو الأيونات ينتج عنها زيادة في الشحنة الموجبة أو نقصان في الشحنة السالبة. (Oxidation-Reduction)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010084.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "deoxyribonucleases",
    "term_en": "Deoxyribonucleases",
    "term_ar": "ديوكسي ريبو نوكلياز",
    "synonyms": [
      "Desoxyribonuclease",
      "Deoxyribonuclease",
      "Nucleases, DNA",
      "DNA Nucleases",
      "Desoxyribonucleases",
      "DNase",
      "DNAase",
      "Acid DNase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes which catalyze the hydrolases of ester bonds within DNA. EC 3.1.-.",
    "arabic_definition": "ديوكسي ريبو نوكلياز Deoxyribonuclease (باختصار DNase) خاصيته الكيميائية (EC 3.1.21). وهو إنزيم يعمل على تحفيز الحلمهة في عملية (إِزالة البلمرة) من ديوكسي ريبونوكليوتيد (الدنا), والذي يختصر بصيغة دناز أو (ديوكسي ريبو نوكلياز). (Deoxyribonucleases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003851.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phosphoglucomutase",
    "term_en": "Phosphoglucomutase",
    "term_ar": "فسفوجلوكوميوتاز (إنزيم)",
    "synonyms": [
      "Glucose Phosphomutase",
      "Phosphomutase, Glucose"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme that catalyzes the conversion of alpha D-glucose 1-phosphate to alpha D-glucose 6-phosphate. EC 5.4.2.2.",
    "arabic_definition": "فسفوجلوكوموتاز ( ر.ت.إ 5.4.2.2 ) هو إنزيم ينقل مجموعة الفوسفات على مونومر الجلوكوز α-D- من الموضع 1 'إلى 6' في الاتجاه الأمامي أو 6 'إلى 1' في الاتجاه العكسي. بأكثر دقة، انه يسهل عملية التحويل المتبادل بين الجلوكوز 1- فوسفات و الجلوكوز6 فوسفات. (Phosphoglucomutase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010733.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photophosphorylation",
    "term_en": "Photophosphorylation",
    "term_ar": "فسفرة ضوئية",
    "synonyms": [
      "Photophosphorylations",
      "Photosynthetic Phosphorylation",
      "Phosphorylation, Photosynthetic",
      "Phosphorylations, Photosynthetic",
      "Photosynthetic Phosphorylations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The use of light to convert ADP to ATP without the concomitant reduction of dioxygen to water as occurs during OXIDATIVE PHOSPHORYLATION in MITOCHONDRIA.",
    "arabic_definition": "الفسفرة الضوئية أو الفسفتة الضوئية هي عملية فسفرة تحدث في عملية التركيب الضوئي يتم فيها إدخال وحدة فوسفات إلى جزيء أدينوسين ثنائي الفوسفات ADP ليصبح أدينوسين ثلاثي الفوسفات ATP، وذلك باستخدام طاقة الشمس. يعد هذا التفاعل أساسي لاستمرار الحياة، إذ أن جزيء ATP هو الحامل للطاقة في العديد من المتعضيات الحية. (Photophosphorylation)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010785.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "methyltransferases",
    "term_en": "Methyltransferases",
    "term_ar": "ناقلة الميثيل",
    "synonyms": [
      "Methyltransferase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A subclass of enzymes of the transferase class that catalyze the transfer of a methyl group from one compound to another. (Dorland, 28th ed) EC 2.1.1.",
    "arabic_definition": "ناقلة الميثيل (الإنجليزية: Methyltransferase) هي عائلة كبيرة من الإنزيمات تقوم بمثيلة ركائزها، ويمكن تقسيمها إلى أقسام فرعية عديدة حسب خصائصها البنيوية. أشهر أقسام ناقلات الميثيل هو القسم 1 الذي تحتوي جميع الإنزيمات فيه على تطوي روسمان للارتباط بـ S-أدينوزيل ميثيونين (SAM، سام). (Methyltransferases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008780.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glycosyltransferases",
    "term_en": "Glycosyltransferases",
    "term_ar": "ناقلة الغليكوزيل",
    "synonyms": [
      "Glycosyltransferase",
      "Glycoside Transferases",
      "Transferases, Glycoside"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enzymes that catalyze the transfer of glycosyl groups to an acceptor. Most often another carbohydrate molecule acts as an acceptor, but inorganic phosphate can also act as an acceptor, such as in the case of PHOSPHORYLASES. Some of the enzymes in this group also catalyze hydrolysis, which can be regarded as transfer of a glycosyl group from the donor to water. Subclasses include the HEXOSYLTRANSFERASES; PENTOSYLTRANSFERASES; SIALYLTRANSFERASES; and those transferring other glycosyl groups. EC 2.4.",
    "arabic_definition": "ناقلة الغليكوزيل هو إنزيم من الإنزيمات الناقلة المسؤولة عن تشكيل الرابطة الغليكوسيدية؛ فهو يحفّز انتقال جزء السكاريد من السكر النكليوتيدي المنشط إلى جزيء مستقبل للغليكوزيل وفق مبدأ المانح والمستقبل. يحدث هذا التفاعل عادة أثناء تعديل ما بعد الترجمة أثناء الاصطناع الحيوي للبروتين السكّرية إما عند الغلكزة (إضافة الغليكوزيل) في الشبكة الإندوبلازمية؛ أو الغلكزة (إضافة الغليكوزيل) في جهاز غولجي. (Glycosyltransferases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016695.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acetylcholinesterase",
    "term_en": "Acetylcholinesterase",
    "term_ar": "إستيراز الأسيتيل كولين",
    "synonyms": [
      "Acetylcholine Hydrolase",
      "Hydrolase, Acetylcholine",
      "Acetylthiocholinesterase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An enzyme that catalyzes the hydrolysis of ACETYLCHOLINE to CHOLINE and acetate. In the CNS, this enzyme plays a role in the function of peripheral neuromuscular junctions. EC 3.1.1.7.",
    "arabic_definition": "إستيراز الأسيتيل كولين (اختصارًا ACHE) هو إستيراز الكولين الأساسي في الجسم. هو إنزيمٌ يُحفز تفكك الأسيتيل كولين وبعض إستيرازات الكولين الأخرى والتي تعمل نواقل عصبية: الأسيتيل كولين + H2O = كولين + أسيتيت توجد بشكلٍ رئيسي في الموصلات العصبية العضليَّة وفي المشابك الكيميائيَّة من النوع الكوليني، حيث يعمل نشاطه على إنهاء الانتقال المشبكي. (Acetylcholinesterase)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000110.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sinusitis",
    "term_en": "Sinusitis",
    "term_ar": "التهاب الجيوب",
    "synonyms": [
      "Sinusitides",
      "Sinus Infections",
      "Infection, Sinus",
      "Infections, Sinus",
      "Sinus Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the NASAL MUCOSA in one or more of the PARANASAL SINUSES.",
    "arabic_definition": "التهاب الجيوب (الإنجليزية: Sinusitis) هو التهاب الجيوب المجاورة للأنف مما يؤدي إلى أعراض. وتشمل الأعراض والعلامات الشائعة مخاط الانف السميك، والأنف المسدود، وآلام الوجه.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012852.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hearing-loss",
    "term_en": "Hearing Loss",
    "term_ar": "فقدان السمع",
    "synonyms": [
      "Loss, Hearing",
      "Hearing Impairment",
      "Hypoacusis",
      "Hypoacuses",
      "Deafness, Transitory",
      "Deafnesses, Transitory",
      "Transitory Deafness",
      "Transitory Deafnesses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A general term for the complete or partial loss of the ability to hear from one or both ears.",
    "arabic_definition": "فقد السمع هو العجز الجزئي أو الكلي في حاسة السمع. يمكن أن يظهر فقد السمع منذ الولادة أو يُكتسب في أي وقت خلال الحياة، ويمكن أن يصيب أذنًا واحدة أو أذنين. (Hearing Loss)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034381.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meniere-disease",
    "term_en": "Meniere Disease",
    "term_ar": "مرض منيير",
    "synonyms": [
      "Disease, Meniere",
      "Ménière Disease",
      "Disease, Ménière",
      "Diseases, Ménière",
      "Ménière Diseases",
      "Ménière's Disease",
      "Disease, Ménière's",
      "Diseases, Ménière's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease of the inner ear (LABYRINTH) that is characterized by fluctuating SENSORINEURAL HEARING LOSS; TINNITUS; episodic VERTIGO; and aural fullness. It is the most common form of endolymphatic hydrops.",
    "arabic_definition": "داء مينيير (الإنجليزية: Ménière's disease) هو اضطراب في الأذن الداخلية قد يؤثر على السمع والتوازن بدرجات متفاوتة. يتميز المرض بحدوث نوبات من الدوار والطنين وفقدان تصاعدي في حاسة السمع، وعادة ما يحدث في أذنٍ واحدة. (Meniere Disease)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008575.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nasopharyngitis",
    "term_en": "Nasopharyngitis",
    "term_ar": "زكام",
    "synonyms": [
      "Nasopharyngitides",
      "Common cold"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the NASOPHARYNX, usually including its mucosa, related lymphoid structure, and glands.",
    "arabic_definition": "الزُّكام أو الرَّشح أو نَزْلَة البَرد أو الضُّنَاك أو الضُّؤْد ويُسمى اختصاراً البَرد هوَ مَرض فيروسي مُعدٍ يُصيب السبيل التنفسي العُلوي، ويؤثر على الأنف خصوصًا، كما يؤثر على الحلق وَالحُنجرة وَالجيوب المجاوِرة للأنف. تبدأ علامات وأعراض المرض بالظُّهور بعدَ أقل من يومين من التَّعرُّض للفيروس، وتشمل هذه الأعراض السعال والتهاب الحلق وسيلان الأنف والعطاس والصّداع والحمّى. (Nasopharyngitis)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009304.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tinnitus",
    "term_en": "Tinnitus",
    "term_ar": "طنين",
    "synonyms": [
      "Ringing-Buzzing-Tinnitus",
      "Pulsatile Tinnitus",
      "Tinnitus, Pulsatile",
      "Tinnitus of Vascular Origin",
      "Vascular Origin Tinnitus",
      "Tinnitus, Vascular Origin",
      "Tinnitus, Clicking",
      "Clicking Tinnitus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nonspecific symptom of hearing disorder characterized by the sensation of buzzing, ringing, clicking, pulsations, and other noises in the ear. Objective tinnitus refers to noises generated from within the ear or adjacent structures that can be heard by other individuals. The term subjective tinnitus is used when the sound is audible only to the affected individual. Tinnitus may occur as a manifestation of COCHLEAR DISEASES; VESTIBULOCOCHLEAR NERVE DISEASES; INTRACRANIAL HYPERTENSION; CRANIOCEREBRAL TRAUMA; and other conditions.",
    "arabic_definition": "الطنين (الإنجليزية: Tinnitus) هو إدراك الصوت في حالة عدم وجود صوت خارجي مطابق. سيواجه الجميع تقريبًا «طنينًا طبيعيًا» خافتًا في غرفة هادئة تمامًا، لكن لا داعي للقلق إلا إذا كان مزعجًا أو يتداخل مع السمع الطبيعي أو مرتبطًا بمشاكل أخرى.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014012.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pharyngitis",
    "term_en": "Pharyngitis",
    "term_ar": "التهاب البلعوم",
    "synonyms": [
      "Pharyngitides",
      "Sore Throat",
      "Sore Throats",
      "Throat, Sore"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the throat (PHARYNX).",
    "arabic_definition": "يشير التهاب البلعوم (الإنجليزية: Pharyngitis) إلى التهاب في الجزء الخلفي من الحلق، المُسمّى البلعوم. ويؤدي إلى ألم في الحلق وحمى.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010612.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "otosclerosis",
    "term_en": "Otosclerosis",
    "term_ar": "تصلب الأذن الوسطى",
    "synonyms": [
      "Otoscleroses",
      "Otospongiosis",
      "Otospongioses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Formation of spongy bone in the labyrinth capsule which can progress toward the STAPES (stapedial fixation) or anteriorly toward the COCHLEA leading to conductive, sensorineural, or mixed HEARING LOSS. Several genes are associated with familial otosclerosis with varied clinical signs.",
    "arabic_definition": "تصلب الأذن الوسطى (الإنجليزية: Otosclerosis) ويسمى أيضا بتصلب (تكلس) عظام الأذن الوسطى. هو مرض وراثي ينتقل بشكل جسمي سائد، أي أنه ينتقل على كروموسوم جسمي ويكون من النوع السائد على غيره من أنواع الوراثة، مع ذلك تظهر شكوى في 90 % من المصابين.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010040.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "croup",
    "term_en": "Croup",
    "term_ar": "خانوق",
    "synonyms": [
      "Viral Croup",
      "Croup, Viral",
      "Spasmodic Croup",
      "Croup, Spasmodic",
      "Postintubation Croup",
      "Croup, Postintubation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation involving the GLOTTIS or VOCAL CORDS and the subglottic larynx. Croup is characterized by a barking cough, HOARSENESS, and persistent inspiratory STRIDOR (a high-pitched breathing sound). It occurs chiefly in infants and children.",
    "arabic_definition": "الخانوق (الإنجليزية: croup) أو التهابُ الحَنْجَرَةِ والرُّغامَى والقَصَبات (اللاتينية: laryngotracheobronchitis) هو حالة تصيب الجهاز التنفسي تحدث عادةً بعد تأثر الجهاز التنفسي العلوي بإصابة فيروسية حادة. الإصابة تؤدي إلى تورم داخل الحلق مما يتعارض مع التنفس الطبيعي وينتُج عنه الأعراض المعتادة للسعال النباحي، الصرير، والبحة في الصوت.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003440.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laryngitis",
    "term_en": "Laryngitis",
    "term_ar": "التهاب الحنجرة",
    "synonyms": [
      "Laryngitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the LARYNGEAL MUCOSA, including the VOCAL CORDS. Laryngitis is characterized by irritation, edema, and reduced pliability of the mucosa leading to VOICE DISORDERS such as APHONIA and HOARSENESS.",
    "arabic_definition": "التهاب الحنجرة (الإنجليزية: Laryngitis) يسبب تغيير أو فقدان الصوت نتيجة تهييج قي ثنايا الصوت (الأحبال صوتية) يسمى التهاب حاد إذا استمر لمدة أقل من بضعة أيام وغير ذلك يسمى التهاب مزمن ويمكن أن تستمر لمدة تزيد عن الثلاث أسابيع.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007827.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhinitis",
    "term_en": "Rhinitis",
    "term_ar": "التهاب الأنف",
    "synonyms": [
      "Rhinitides",
      "Nasal Catarrh",
      "Catarrh, Nasal",
      "Catarrhs, Nasal",
      "Nasal Catarrhs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the NASAL MUCOSA, the mucous membrane lining the NASAL CAVITIES.",
    "arabic_definition": "التهاب الأنف (بالإنجليزية:Rhinitis, coryza) هو تهيج والتهاب الغشاء المخاطي داخل الأنف. وتتضمن أعراضه الشائعة انسداد الأنف، وسيلان الأنف، والعطاس، وتنقيط أنفي خلفي.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012220.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ototoxicity",
    "term_en": "Ototoxicity",
    "term_ar": "تسميم أذني",
    "synonyms": [
      "Ototoxicities",
      "Otological Toxicity",
      "Toxicity, Otological",
      "Drug-Induced Ototoxicity",
      "Drug-Induced Ototoxicities",
      "Ototoxicities, Drug-Induced",
      "Ototoxicity, Drug-Induced",
      "Drug-Induced Otological Toxicity"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Damage to the EAR or its function secondary to exposure to toxic substances such as drugs used in CHEMOTHERAPY; IMMUNOTHERAPY; or RADIATION.",
    "arabic_definition": "تسميم أذني (الإنجليزية: Ototoxicity) هو وجود تأثير سام على الأذن، وتحديداً القوقعة والعصب السمعي وأحياناً الجهاز الدهليزي كأثر جانبي للدواء. آثار التسمم الأذني قد تكون قابلة للإصلاح ومؤقتة، أو لا انعكاسية ودائمة.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000081015.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epistaxis",
    "term_en": "Epistaxis",
    "term_ar": "رعاف",
    "synonyms": [
      "Nosebleeds",
      "Nosebleed",
      "Nose Bleed",
      "Nose Bleeds",
      "Nasal Bleeding",
      "Bleeding, Nasal",
      "Bleedings, Nasal",
      "Nasal Bleedings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bleeding from the nose.",
    "arabic_definition": "الرُّعاف (الإنجليزية: Nosebleed) ويُسمى أيضًا النزف الأنفي (الإنجليزية: Epistaxis) هو نزيف دم من الأنف، يدرك عند خروج الدم من مناخر الانف، يوجد منه نوعان: نزيف أمامي، ونزيف خلفي (عادةً ما يستوجب اهتمامًا طبيًا).",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004844.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "labyrinthitis",
    "term_en": "Labyrinthitis",
    "term_ar": "التهاب الأذن الداخلية",
    "synonyms": [
      "Labyrinthitides",
      "Otitis Interna"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the inner ear (LABYRINTH).",
    "arabic_definition": "يحدث التهاب الأذن الداخلية في الكثير من الحالات بفعل الكائنات الحية الدقيقة التي تتسلل إلى متاهة الأذن الداخلية وتسبب تلوث القناة السمعية أو المتاهة الدهليزية (vestibular). ومن الممكن أن تكون الأذن الداخلية واحدا من عدة أعضاء مصابة بتلوث منتشر في الجسم، أو انها قد تكون «الضحية» الوحيدة لهذا التلوث الذي قد يصيبها بشكل عيني. (Labyrinthitis)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007762.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tonsillitis",
    "term_en": "Tonsillitis",
    "term_ar": "التهاب اللوزتين",
    "synonyms": [
      "Tonsillitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the tonsils, especially the PALATINE TONSILS but the ADENOIDS (pharyngeal tonsils) and lingual tonsils may also be involved. Tonsillitis usually is caused by bacterial infection. Tonsillitis may be acute, chronic, or recurrent.",
    "arabic_definition": "التهاب اللوزتين (بالإنكليزية: tonsillitis) هو التهاب يصيب اللوزتين ينتج غالبًا عن عدوى فيروسية، لكنه قد يكون أيضًا بكتيريًا، كما هو الحال في التهاب الحلق العقدي الناجم عن المكورات العقدية المجموعة A. تشمل الأعراض الشائعة التهاب الحلق، صعوبة البلع، الحمى، وتضخم العقد اللمفاوية في الرقبة. في بعض الحالات، قد تصاحب الالتهاب مضاعفات مثل الخراج حول اللوزتين، التهاب الأذن الوسطى، أو التهاب الجيوب الأنفية أو أمراض مناعية أخرى مثل الحمة الروماتيزمية، مرض القلب الروماتيزمي والتهاب الكلى الحاد.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014069.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhinoscleroma",
    "term_en": "Rhinoscleroma",
    "term_ar": "ورم صلب أنفي",
    "synonyms": [
      "Scleroma, Nasal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A granulomatous disease caused by KLEBSIELLA RHINOSCLEROMATIS infection. Despite its name, this disease is not limited to the nose and NASOPHARYNX but may affect any part of the RESPIRATORY TRACT, sometimes with extension to the lip and the skin.",
    "arabic_definition": "الورم الصلب الأنفي أو الصلبوم الأنفي هو مرض حبيبي بكتيري مزمن يصيب الأنف وفي بعض الأحيان يصيب السبيل التنفسي العلوي. في الغالب يصيب التجويف الأنفي -تصاب الأنف بنسبة 95 - 100% من الحالات- ومع ذلك، يمكن أن يؤثر أيضا على البلعوم الأنفي، الحنجرة، القصبة الهوائية، والشعب الهوائية. (Rhinoscleroma)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012226.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "supraglottitis",
    "term_en": "Supraglottitis",
    "term_ar": "التهاب لسان المزمار",
    "synonyms": [
      "Supraglottitides",
      "Epiglottitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the EPIGLOTTIS and supraglottic structures including the PHARYNX; UVULA; base of tongue; and aryepiglottic folds. It is usually caused by HAEMOPHILUS INFLUENZAE in children but often by different organisms in adults.",
    "arabic_definition": "التهاب لسان المزمار (الإنجليزية: Epiglottitis) هو التهاب ناتج عن عدوى بكتيرية شبيهة بالانفلونزا، تسبب التهاب البلعوم و يمكن أن يحدث التهاب لسان المزمار عند جميع الأعمار ولكن نسبة إصابة الأطفال أكبر بسبب حساسية البلعوم لديهم. وغالباً ما تصيب الأطفال بين سن 2 إلى 7 سنوات ونسبة إصابة فيها من الذكور أكثر من الإناث. (Supraglottitis)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059525.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperacusis",
    "term_en": "Hyperacusis",
    "term_ar": "احتداد السمع",
    "synonyms": [
      "Hyperacuses",
      "Loudness Perception Disturbances",
      "Disturbance, Loudness Perception",
      "Disturbances, Loudness Perception",
      "Loudness Perception Disturbance",
      "Perception Disturbance, Loudness",
      "Perception Disturbances, Loudness",
      "Recruitment, Loudness"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormally disproportionate increase in the sensation of loudness in response to auditory stimuli of normal volume. COCHLEAR DISEASES; VESTIBULOCOCHLEAR NERVE DISEASES; FACIAL NERVE DISEASES; STAPES SURGERY; and other disorders may be associated with this condition.",
    "arabic_definition": "احتداد السمع (الإنجليزية: Hyperacusis) هو أحد الاضطرابات السمعية. التي تتميز بحساسية شديدة تجاه بعض الترددات الصوتية، والتي تشمل الأصوات اليومية الطبيعية، تختلف درجة ونوع الإصابة كثيرًا من مصاب إلى آخر؛ فالبعض يجد الأصوات المرتفعة بشكل عام غير مريحة للغاية، بينما يعاني البعض عند سماع صوت معين، وقد يتألم البعض عند سماع الأصوات العادية؛ وبالتالي فاحتداد السمع قد لا يسبب إزعاجًا كبيرًا لدى البعض بينما يحدث تأثيرًا كبيرًا على حياة البعض.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012001.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "presbycusis",
    "term_en": "Presbycusis",
    "term_ar": "صمم شيخوخي",
    "synonyms": [
      "Presbycuses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gradual bilateral hearing loss associated with aging that is due to progressive degeneration of cochlear structures and central auditory pathways. Hearing loss usually begins with the high frequencies then progresses to sounds of middle and low frequencies.",
    "arabic_definition": "الصمم الشيخوخي أو فقدان السمع المرتبط بالسن هو نوع من أنواع الصمم الحسي العصبي المتزايد، يحدث بسبب تأثير الشيخوخة التنكسي على قوقعة الأذن أو التراكيب المرتبطة بالأذن الداخلية أو الأعصاب السمعية، ويظهر هذا الصمم بوضوح تجاه الترددات العالية. يتسبب في حدوث الصمم الشيخوخي مزيجا من العوامل الوراثية، والتعرض البيئي المتراكم، والتغيرات الفسيولوجية المرضية المتعلقة بالشيخوخة. (Presbycusis)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011304.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aphonia",
    "term_en": "Aphonia",
    "term_ar": "أفونيا",
    "synonyms": [
      "Absence of Voice",
      "Voice Absence",
      "Voice Absences",
      "Spastic Aphonia",
      "Aphonia, Spastic",
      "Aphonias, Spastic",
      "Spastic Aphonias",
      "Functional Aphonia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Complete loss of phonation due to organic disease of the larynx or to nonorganic (i.e., psychogenic) causes.",
    "arabic_definition": "الأفونيا (الإنجليزية: Aphonia) هو عدم القدرة على إصدار صوت مسموع. السبب الرئيسي لفقدان هذه القدرة هو الانقطاع الثنائي للعصب الحنجري المتكرر، والذي يدعم تقريبًا جميع العضلات في الحنجرة.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001044.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mastoiditis",
    "term_en": "Mastoiditis",
    "term_ar": "التهاب النتوء الحلمي",
    "synonyms": [
      "Mastoiditides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the honeycomb-like MASTOID BONE in the skull just behind the ear. It is usually a complication of OTITIS MEDIA.",
    "arabic_definition": "التهاب النتوء الحلمي أو التهاب الخُـشَّاء (الإنجليزية: Mastoiditis) هو عدوى يصيب الناتئ الخـشائي، الذي هو عبارة عن جزء من العظم الصدغي أحد عظام الجمجمة. ويقع الناتئ الخُـشَّائي خلف الأذن مباشرة، وهو يحتوي فراغات هوائية يطلق عليها اسم الخلايا الخُـشَّائية.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008417.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "otitis",
    "term_en": "Otitis",
    "term_ar": "التهاب الأذن",
    "synonyms": [
      "Otitides",
      "Ear Inflammation",
      "Ear Inflammations",
      "Inflammation, Ear",
      "Inflammations, Ear",
      "Ear Infection",
      "Ear Infections",
      "Infection, Ear"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the ear, which may be marked by pain (EARACHE), fever, HEARING DISORDERS, and VERTIGO. Inflammation of the external ear is OTITIS EXTERNA; of the middle ear, OTITIS MEDIA; of the inner ear, LABYRINTHITIS.",
    "arabic_definition": "التهاب الأذن (بالانجليزية: Otitis)، هو المصطلح العام لالتهاب أو إصابة الأذن، ويشمل المصطلح التهاب الأذن في كلٍ من البشر والحيوانات. وتنقسم أنواع الالتهابات إلى ثلاثة أنواع: التهاب الأذن الخارجية (الإنجليزية: Otitis externa) أو ما يسمى ب«أذن السباح» ويشمل التهاب الجزء الخارجي للأذن وقناة الأذن.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010031.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vertigo",
    "term_en": "Vertigo",
    "term_ar": "دوار (عرض)",
    "synonyms": [
      "Vertigos",
      "Spinning Sensation",
      "Sensation, Spinning",
      "Sensations, Spinning",
      "Spinning Sensations",
      "Vertigo, Subjective",
      "Subjective Vertigo",
      "Subjective Vertigos"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An illusion of movement, either of the external world revolving around the individual or of the individual revolving in space. Vertigo may be associated with disorders of the inner ear (EAR, INNER); VESTIBULAR NERVE; BRAINSTEM; or CEREBRAL CORTEX. Lesions in the TEMPORAL LOBE and PARIETAL LOBE may be associated with FOCAL SEIZURES that may feature vertigo as an ictal manifestation. (From Adams et al., Principles of Neurology, 6th ed, pp300-1)",
    "arabic_definition": "الدوار (الإنجليزية: Vertigo) هو حالة يكون فيها لدى الشخص إحساس بالحركة أو أن الأجسام المحيطة به تتحرك عندما لا تكون كذلك. غالبًا ما يبدو وكأنها حركة دوارة أو تمايلية.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014717.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysphonia",
    "term_en": "Dysphonia",
    "term_ar": "بحة",
    "synonyms": [
      "Phonation Disorders",
      "Phonation Disorder",
      "Spastic Dysphonia",
      "Dysphonia, Spastic",
      "Hyperkinetic Dysphonia",
      "Dysphonia, Hyperkinetic",
      "Organic Tremor Dysphonia",
      "Dysphonia, Organic Tremor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Difficulty and/or pain in PHONATION or speaking.",
    "arabic_definition": "البُحَّةُ (الإنجليزية: Hoarseness أو Dysphonia) وقد تسمى خلل التصويت أو الجَشَر ، وتعد البُحَّة العرض الأساس في أمراض الحنجرة.البحة هو مصطلح طبي يطلق على الاضطرابات الصوتية: أي وجود ضعف في القدرة على إنتاج الأصوات باستخدام الأعضاء الصوتية (وهو يختلف عن عسر التلفظ الذي يدل على ضعف في العضلات اللازمة لإنتاج الكلام). وبالتالي، فإن البُحَّة هو اضطراب بإخراج الصوت.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055154.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laryngismus",
    "term_en": "Laryngismus",
    "term_ar": "تشنج الحنجرة",
    "synonyms": [
      "Laryngeal Spasm",
      "Laryngeal Spasms",
      "Spasm, Laryngeal",
      "Spasms, Laryngeal",
      "Laryngospasm",
      "Laryngospasms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder in which the adductor muscles of the VOCAL CORDS exhibit increased activity leading to laryngeal spasm. Laryngismus causes closure of the VOCAL FOLDS and airflow obstruction during inspiration.",
    "arabic_definition": "في الطب، تشنج الحنجرة هو انقباض عضلي لا إرادي (تشنج) للأحبال الصوتية. تستمر تلك الحالة غالبا لأقل من 60 ثانية، ولكنها قد تمتد لـ20-30 دقيقة في بعض الحالات، متسببة في انسداد جزئي في الشهيق، فيما يظل الزفير أسهل. (Laryngismus)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007826.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laryngomalacia",
    "term_en": "Laryngomalacia",
    "term_ar": "تلين الحنجرة",
    "synonyms": [
      "Laryngomalacias",
      "Chondromalacia of Larynx",
      "Larynx Chondromalacia",
      "Larynx Chondromalacias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital or acquired condition of underdeveloped or degeneration of CARTILAGE in the LARYNX. This results in a floppy laryngeal wall making patency difficult to maintain.",
    "arabic_definition": "تلين الحنجرة (الإنجليزية: laryngomalacia) هو أكثر الأسباب شيوعاً في حدوث الصرير في الأطفال، حيث ينكمش الغضروف اللين والغير مكتمل النمو للداخل أثناء الشهيق مؤدياً إلى انسداد مجرى الهواء. يمكن أن يحدث في مرضى أكبر سناً خاصة المصابون بأمراض عصبية عضلية مما يؤدي إلى ضعف في عضلات الحلق، ولكن نسبة حدوثه في الأطفال أكبر بكثير.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055092.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "otomycosis",
    "term_en": "Otomycosis",
    "term_ar": "فطار أذني",
    "synonyms": [
      "Otomycoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fungus infection of the external ear, usually by ASPERGILLUS species",
    "arabic_definition": "فطار أذني (الإنجليزية: Otomycosis) التهاب فطري في الأذن، هو عبارة عن عدوى فطرية سطحية لقناة الأذن الخارجية. وهو أكثر شيوعًا في البلدان الاستوائية.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059249.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laryngocele",
    "term_en": "Laryngocele",
    "term_ar": "قيلة حنجرية",
    "synonyms": [
      "Laryngoceles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital anomalous dilitation of the laryngeal saccule that may extend internally into the airway or externally through the thyrohyoid membrane.",
    "arabic_definition": "القيلة الحنجرية (الإنجليزية: Laryngocele) عيب خلقي على صورة «كيس حنجري» (الإنجليزية: Laryngeal saccules) شاذ، مفتوح على تجويف الحنجرة، ويمكن أن يبرز منتفخاً إلى الخارج على الرقبة. يمكن للقيلة الحنجرية أيضا أن تكون مُكتسبة في وقت لاحق بعد الولادة بدلا من أن تكون عيب خلقياً، كما يحدث للعاملين في صناعة «نفخ الزجاج» بسبب إخراج الزفير قسرياً لمدد طويلة مُسبباً ضغطاً زائداً على الحنجرة مما يؤدي إلى توسع الحنجرة (الإنجليزية: Sinus of Morgagni).",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059608.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phosphofructokinases",
    "term_en": "Phosphofructokinases",
    "term_ar": "فوسفوفركتوكيناز",
    "synonyms": [
      "Phosphofructokinase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Allosteric enzymes that regulate glycolysis and gluconeogenesis. These enzymes catalyze phosphorylation of fructose-6-phosphate to either fructose-1,6-bisphosphate (PHOSPHOFRUCTOKINASE-1 reaction), or to fructose-2,6-bisphosphate (PHOSPHOFRUCTOKINASE-2 reaction).",
    "arabic_definition": "فوسفوفركتوكيناز (الإنجليزية: Phosphofructokinase) هو انزيم يتبع عائلة انزيمات الكيناز وهو المسؤول عن استقلاب الغليكوز وإنتاج الطاقة في عملية الفسفرة حيث يقوم بتحلل الفركتوز 6 فوسفات. (Phosphofructokinases)",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D025221.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "butyrylcholinesterase",
    "term_en": "Butyrylcholinesterase",
    "term_ar": "كولين استراز كاذب",
    "synonyms": [
      "Benzoylcholinesterase",
      "Pseudocholinesterase",
      "Butyrylthiocholinesterase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An aspect of cholinesterase (EC 3.1.1.8).",
    "arabic_definition": "إنزيم الكولين استراز الكاذب (الإنجليزية: pseudocholinesterase) ويعرف أيضا باسم بوتريل كولين استراز (الإنجليزية: Butyrylcholinesterase) وكولين استراز البلازما (الإنجليزية: plasma cholinesterase) هو إنزيم كولين استراز غير نوعي يحلل العديد من الاسترات المختلفة المستندة إلى الكولين. في البشر يتم تصنيعه في الكبد، ويوجد بشكل أساسي في بلازما الدم.",
    "specialty": "Biochemistry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002091.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tympanosclerosis",
    "term_en": "Tympanosclerosis",
    "term_ar": "تصلب الطبل",
    "synonyms": [
      "Tympanoscleroses",
      "Tympanic Calcification",
      "Calcification, Tympanic",
      "Intratympanic Tympanosclerosis",
      "Tympanosclerosis, Intratympanic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Calcification of the TYMPANIC MEMBRANE and MIDDLE EAR most often associated with chronic OTITIS MEDIA.",
    "arabic_definition": "تصلب الطبل أو تصلب عظام الأذن الوسطى (بالإنجليزية myringosclerosis أو tympanosclerosis أو intratympanic tympanosclerosis) هي حالة مرضية يحدث فيها تنكس زجاجي يتبعه تكلُّس للنسيج الضام تحت ظهارة طبلة الأذن والأذن الوسطى، وغالباً ما تؤثر بالسلب على السمع.",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000092163.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "otitis-externa",
    "term_en": "Otitis Externa",
    "term_ar": "التهاب الأذن الخارجية",
    "synonyms": [
      "Externa, Otitis",
      "External Ear Inflammation",
      "Ear Inflammation, External",
      "External Ear Inflammations",
      "Inflammation, External Ear",
      "External Otitis",
      "External Otitides",
      "Otitides, External"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the OUTER EAR including the external EAR CANAL, cartilages of the auricle (EAR CARTILAGE), and the TYMPANIC MEMBRANE.",
    "arabic_definition": "التهاب الأذن الخارجية هو التهاب بالأذن الخارجية وقناة الأذن ويسمى أحياناً أذن السباح. تتعدد أسباب الإصابة بالتهاب الأذن الخارجية فقد تكون بكتيريا في الغالب أو فطريات أو أكزيما الجلد. (Otitis Externa)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010032.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "deafness",
    "term_en": "Deafness",
    "term_ar": "صمم",
    "synonyms": [
      "Hearing Loss, Extreme",
      "Extreme Hearing Loss",
      "Prelingual Deafness",
      "Deafness, Prelingual",
      "Hearing Loss, Complete",
      "Complete Hearing Loss",
      "Deaf Mutism",
      "Deafness Permanent"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A general term for the complete loss of the ability to hear from both ears.",
    "arabic_definition": "الصمم أو فقد السمع هو عدم القدرة على السمع جزئيًا أو كليًا. قد يكون الصمم خلقيًا يولد به الشخص أو مكتسبًا في أي وقت بالعمر، وقد يحدث في إحدى الأذنين أو كلتيهما، لذلك عادة ما يعاني الصُّم من ضعف السمع أو انعدامه، لكن كثيرًا ما يؤثر فقد السمع المرتبط بالعمر على كلا الأذنين بسبب فقدان الخلايا الشعرية القوقعية، وقد يكون الصمم مؤقتًا أو دائمًا. (Deafness)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003638.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nasal-obstruction",
    "term_en": "Nasal Obstruction",
    "term_ar": "احتقان الأنف",
    "synonyms": [
      "Obstruction, Nasal",
      "Obstructions, Nasal",
      "Nasal Airway Obstruction",
      "Airway Obstruction, Nasal",
      "Obstruction, Nasal Airway",
      "Nasal Blockage",
      "Blockage, Nasal",
      "Blockages, Nasal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any hindrance to the passage of air into and out of the nose. The obstruction may be unilateral or bilateral, and may involve any part of the NASAL CAVITY.",
    "arabic_definition": "احتقان الأنف (الإنجليزية: Nasal Congestion) هو انسداد الممرات الأنفية مما يؤدي إلى تدفق غير كافي للهواء خلال الأنف ذلك بسبب انتفاخ الأغشية المبطنة الناتج عن التهاب الأوعية الدموية الموجودة فيها. ويعرف أيضا ب انسداد الانف، وتستهدف مضادات الاحتقان مباشرةً الضيق الناتج عن الانسداد بشكل أساسي، وتكون على شكل قطرات أنفية، أدوية مستنشقة، وعلى شكل حبوب تؤخد من خلال الفم. (Nasal Obstruction)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015508.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vocal-cord-dysfunction",
    "term_en": "Vocal Cord Dysfunction",
    "term_ar": "خلل الأحبال الصوتية",
    "synonyms": [
      "Dysfunctions, Vocal Cord",
      "Dysfunction, Vocal Cord",
      "Vocal Cord Dysfunctions",
      "Paradoxical Vocal Fold Motion",
      "Paradoxical Vocal Fold Motion Disorder",
      "Exercise-Induced Vocal Cord Dysfunction"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder characterized by an intermittent abnormal VOCAL CORDS movement toward the midline during inspiration or expiration resulting in upper AIRWAY OBSTRUCTION.",
    "arabic_definition": "خلل الأحبال الصوتية (VCD) هي حالة تؤثر على الأحبال الصوتية، تتميز بإغلاق غير طبيعي للأحبال الصوتية، مما يؤدي إلى صعوبات كبيرة واضطرابات أثناء التنفس وخاصة أثناء الشهيق. بسبب التشابه في الأعراض، غالبًا ما يتم الخلط بين نوبات خلل الأحبال الصوتية ونوبات الربو أو تشنج الحنجرة. (Vocal Cord Dysfunction)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064706.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vasomotor-rhinitis",
    "term_en": "Vasomotor Rhinitis",
    "term_ar": "التهاب الأنف الأرجي",
    "synonyms": [
      "Rhinitides, Vasomotor",
      "Vasomotor Rhinitides",
      "Nonallergic rhinitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of non-allergic rhinitis that is characterized by nasal congestion and posterior pharyngeal drainage.",
    "arabic_definition": "التهاب الأنف الأرجي أو حمى الكلأ. وهو عبارة عن التهاب الجيوب هو في البطانة التي في داخل الجيوب، ويمكن أن يكون حاداًأو مزمناً. (Vasomotor Rhinitis)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012223.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "beer",
    "term_en": "Beer",
    "term_ar": "جعة",
    "synonyms": [
      "Beers"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An alcoholic beverage usually made from malted cereal grain (as barley), flavored with hops, and brewed by slow fermentation.",
    "arabic_definition": "الجِعَة أو البيرة كما يعرف بالاسم الأقل شيوعا الفُقَّاعُ هو مشروب كحولي يُصنَع بحلمهة النشا وتخمير السُّكَّر الناتج عن العمليَّة. عادةً ما يُصنَع النشا وإنزيمات الحلمهة المستعملة في صناعة الجعة من حبوبٍ ممزوجة بالملت، ومن أهم أنواع الحبوب المستعملة لهذا الغرض القمح. (Beer)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001515.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "food",
    "term_en": "Food",
    "term_ar": "طعام",
    "synonyms": [
      "Foods"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Substances taken in by the body to provide nourishment.",
    "arabic_definition": "الغذاء هو أي مادة يتم استهلاكها لتوفير الدعم الغذائي للكائن الحي. عادة ما يكون الطعام من أصل نباتي أو حيواني أو فطري، ويحتوي على العناصر الغذائية الأساسية، مثل الكربوهيدرات أو الدهون أو البروتينات أو الفيتامينات أو المعادن. (Food)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005502.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fruit",
    "term_en": "Fruit",
    "term_ar": "فاكهة",
    "synonyms": [
      "Fruits",
      "Berries",
      "Berry",
      "Plant Capsule",
      "Capsule, Plant",
      "Capsules, Plant",
      "Plant Capsules",
      "Legume Pod"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The fleshy or dry ripened ovary of a plant, enclosing the seed or seeds.",
    "arabic_definition": "الفواكه هي الثمار النباتية التي تحملها النباتات كغطاء لبذورها. تتميز عادة بأنها حلوة أو حامضة الطعم ومكتنزة بالمياه. (Fruit)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005638.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "honey",
    "term_en": "Honey",
    "term_ar": "عسل",
    "synonyms": [
      "Honeys"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sweet viscous liquid food, produced in the honey sacs of various bees from nectar collected from flowers. The nectar is ripened into honey by inversion of its sucrose sugar into fructose and glucose. It is somewhat acidic and has mild antiseptic properties, being sometimes used in the treatment of burns and lacerations.",
    "arabic_definition": "العسل مادة غذائية حلوة المذاق ولزجة القوام تخرج من بطون وأجواف أنواع مختلفة من النحل، ولكن أجودها ما يخرج من نحل العسل. ينتج النحل العسل مما يجمعه من الإفرازات السكرية من النباتات من رحيق الأزهار أو من الحشرات، ثم بإجراء تكرير ومعالجة لهذا الرحيق داخل أجسامه عبر القلس والنشاط الإنزيمي، ثم من خلال التخزين في الخلايا وعبر تبخر الماء، مما يؤدي إلى تركّز السكر حتى يصبح العسل لزجاً وسميكاً. (Honey)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006722.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meat",
    "term_en": "Meat",
    "term_ar": "لحم",
    "synonyms": [
      "Meats"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The edible portions of any animal used for food including cattle, swine, goats/sheep, poultry, fish, shellfish, and game.",
    "arabic_definition": "اللحم نسيج حيواني يشكل أحد أغذية الإنسان، وفي معظم الأحيان يقصد به النسيج العضلي الحيواني والدهن المتعلق به، ولكن أحيانا يقصد به الأعضاء غير العضلية مثل الرئة، والكبد، والجلد، والمخ، ونخاع العظم والكلى، وتسمى اللحوم المجردة عن العظام هبرة. وتعتبر اللحوم من الأغذية الأساسية لتكوين خلايا الجسم وأنسجته ولترميم ما تهدم من هذه الخلايا والأنسجة وهي تعمل على تنشيط الوظائف الهضمية والدموية والدماغية. (Meat)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008460.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tea",
    "term_en": "Tea",
    "term_ar": "شاي",
    "synonyms": [
      "Green Tea",
      "Green Teas",
      "Tea, Green",
      "Teas, Green",
      "Black Tea",
      "Black Teas",
      "Tea, Black",
      "Teas, Black"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The infusion of leaves of CAMELLIA SINENSIS (formerly Thea sinensis) as a beverage, the familiar Asian tea, which contains CATECHIN (especially epigallocatechin gallate) and CAFFEINE.",
    "arabic_definition": "الشَّاي في الصين أو الشَّاهِيّ في دول الخليج العربي هو اسم يطلق على شجرة أو شجيرة وعلى أوراقها وعلى المشروب الذي يصنع من الأوراق، ونباته دائم الخضرة. ينسب إلى نبتة الكاميليا الصينية، وموطنه الأصلي شرقي آسيا. (Tea)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013662.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wine",
    "term_en": "Wine",
    "term_ar": "نبيذ",
    "synonyms": [
      "Wines"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fermented juice of fresh grapes or of other fruit or plant products used as a beverage.",
    "arabic_definition": "النبيذ هو مشروب كحولي يتم إنتاجه بتخمير العنب. وعلى الرغم من أنه يمكن إنتاج النبيذ بتخمير الفواكه الأخرى، إلا أن أشهر أنواعه تكون من العنب. (Wine)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014920.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bread",
    "term_en": "Bread",
    "term_ar": "خبز",
    "synonyms": [
      "Breads"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented. A major food since prehistoric times, it has been made in various forms using a variety of ingredients and methods.",
    "arabic_definition": "الخُبْز هو الغذاء الرئيسي في الشرق الأوسط وأوروبا والهند وشمال إفريقيا. الخبز دائما يتكون من طحين (القمح أو الذرة أو الشعير) والماء، والملح والخميرة غالباً. (Bread)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001939.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flour",
    "term_en": "Flour",
    "term_ar": "طحين",
    "synonyms": [
      "Flours",
      "Semolina Flour",
      "Flour, Semolina",
      "Flours, Semolina",
      "Semolina Flours",
      "Wheat Flour",
      "Flours, Wheat",
      "Flour, Wheat"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A powdery meal obtained from ground up starchy foodstuff, such as seeds of WHEAT; RICE and other EDIBLE GRAIN; LEGUMES; and NUTS; or ground up PLANT TUBERS.",
    "arabic_definition": "الطحين أو الدقيق (الإنجليزية: Flour) هو مسحوق يصنع عادة من الحبوب مثل القمح، الشعير، الذرة إلى آخره، وفي بعض الأحيان يصنع كذلك من البطاطس، الرز أو أي محصول غني بالنشا. والطحين هو المادة الخام الرئيسية في صناعة المأكولات الأساسية مثل الخبز، الكعك، المعكرونة وغيرها من المأكولات.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005433.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "candy",
    "term_en": "Candy",
    "term_ar": "حلوى سكرية",
    "synonyms": [
      "Candies",
      "Confection",
      "Confections",
      "Caramel Candy",
      "Candies, Caramel",
      "Candy, Caramel",
      "Caramel Candies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Sweet food products combining cane or beet sugars with other carbohydrates and chocolate, milk, eggs, and various flavorings. In the United States, candy refers to both sugar- and cocoa-based confections and is differentiated from sweetened baked goods; elsewhere the terms sugar confectionary, chocolate confectionary, and flour confectionary (meaning goods such as cakes and pastries) are used.",
    "arabic_definition": "القَنْد أو حلوى السكر هي حلوى مصنوعة من محلول السكر في الماء، بإضافة النكهات والصبغات. وتأتي الحلوى السكرية في ألوان وأصناف عديدة ولها تاريخ طويل في الثقافة الشعبية. (Candy)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002182.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pupa",
    "term_en": "Pupa",
    "term_ar": "خادرة",
    "synonyms": [
      "Pupae",
      "Chrysalis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inactive stage between the larval and adult stages in the life cycle of INSECTA.",
    "arabic_definition": "الخَادِرَةُ أو العَذْرَاءُ أو النَّغَفَة (اللاتينية: pupa) أو المومياء (الإنجليزية: Mumia) هي الحشرة في طور يعقب اليرقة و هذا الطور يخص الحشرات ذات التطور الكامل و هو المدرج الثالث في مدراج نشوء الحشرة، ويتقدم طور اليافعة أو الحشرة البالغة. وتكون الحشرة في طور العذراء في همود غالباً، وإن كان بعضها يتحرك، وبعضها يظل ساكناً.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011679.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "benign-paroxysmal-positional-vertigo",
    "term_en": "Benign Paroxysmal Positional Vertigo",
    "term_ar": "دوار الوضعة الانتيابي الحميد",
    "synonyms": [
      "Benign Recurrent Vertigo",
      "Familial Benign Recurrent Vertigo",
      "Familial Vestibulopathy",
      "Vertigo, Benign Paroxysmal Positional",
      "Vertigo, Benign Recurrent",
      "Benign Recurrent Vertigos",
      "Recurrent Vertigo, Benign",
      "Recurrent Vertigos, Benign"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Idiopathic recurrent VERTIGO associated with POSITIONAL NYSTAGMUS. It is associated with a vestibular loss most often with OTOCONIA dislodge but without other neurological or auditory signs. Unlike in LABYRINTHITIS and VESTIBULAR NEURONITIS, inflammation in the ear is not observed.",
    "arabic_definition": "دوار الوضعة الانتيابي الحميد هو مرض ينشأ من الأذن الداخلية. أعراضه نوبات متكررة من الدوار الوضعي، والذي يكون على شكل شعور بالالتفاف بسبب تغير موضع الرأس. (Benign Paroxysmal Positional Vertigo)",
    "specialty": "ENT",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065635.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aging",
    "term_en": "Aging",
    "term_ar": "شيخوخة",
    "synonyms": [
      "Biological Aging",
      "Aging, Biological",
      "Senescence",
      "Ageing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The gradual irreversible changes in structure and function of an organism that occur as a result of the passage of time.",
    "arabic_definition": "الشيخوخة أو التعمّر هي عملية الهرم والتقدم بالعمر التي تصيب الكائنات الحية نتيجة تناميها. التعريفات المؤخرة لعملية الشيخوخة تعتبرها عبارة عن خلل وتلف في عمليات النظام مع مرور الوقت والزمن، هذا التعريف يسمح بظهور ووجود أنظمة لا تهرم (لا تشيخ)، نتيجة تداخلات مضادة للشيخوخة (عندما يمكن إصلاح الخلل المتراكم). (Aging)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000375.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nymph",
    "term_en": "Nymph",
    "term_ar": "حورية",
    "synonyms": [
      "Nymphs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The immature stage in the life cycle of those orders of insects characterized by gradual metamorphosis, in which the young resemble the imago in general form of body, including compound eyes and external wings; also the 8-legged stage of mites and ticks that follows the first moult.",
    "arabic_definition": "الحُوْرِيّة (اليونانية: νύμφη) بحسب الأساطير الإغريقية القديمة، هي إحدى المخلوقات الأنثوية الشبه إلهية، التي تتخذ أشكالاً شبيهة بالإنسان، وتكون عادة محصورة في مكان معين، أو جزء من حاشية إحدى الآلهة، مثل آرتميس. كانت الحوريات تعتبر رموزاً لظواهر الطبيعة، وعلى هذا الأساس، فقد قسمت الحوريات إلى عدة أنواع، بحسب المنطقة التي حضرت فيها. (Nymph)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009758.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spices",
    "term_en": "Spices",
    "term_ar": "بهار",
    "synonyms": [
      "Spice"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The dried seeds, bark, root, stems, buds, leaves, or fruit of aromatic plants used to season food.",
    "arabic_definition": "البهارات هي مادة أو مجموعة مواد تضاف عادة إلى الطعام بكميات قليلة وتستعمل لإعطاء نكهة للأطعمة المختلفة، وتصنع البهارات من كافة أجزاء النباتات كالبذور والثمرات والأوراق واللحاء والجذور. وتستعمل البهارات في مجالات أخرى غير الطعام كحفظِ الغذاءِ في الطب، وفي بعض الطقوس الدينية، وفي مستحضرات التجميل، والعطارة وقد تستخدم كمجرد خضار. (Spices)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017365.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sleep",
    "term_en": "Sleep",
    "term_ar": "نوم",
    "synonyms": [
      "Napping",
      "Nighttime Sleep"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A readily reversible suspension of sensorimotor interaction with the environment, usually associated with recumbency and immobility.",
    "arabic_definition": "النَّوم هو حالة طبيعية من الاسترخاء العضلي عند الكائنات الحية، وانخفاض الاستجابة للمحفزات الخارجية، تقل خلاله الحركات الإرادية والشعور بما يحدث في المحيط. ولا يمكن اعتبار النوم فقدانًا للوعي، بل تغيرًا لحالة الوعي. (Sleep)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012890.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "seeds",
    "term_en": "Seeds",
    "term_ar": "بذرة",
    "synonyms": [
      "Seed",
      "Embryos, Plant",
      "Embryo, Plant",
      "Plant Embryo",
      "Plant Embryos",
      "Plant Zygotes",
      "Plant Zygote",
      "Zygote, Plant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The encapsulated embryos of flowering plants. They are used as is or for animal feed because of the high content of concentrated nutrients like starches, proteins, and fats. Rapeseed, cottonseed, and sunflower seed are also produced for the oils (fats) they yield.",
    "arabic_definition": "البَذْرَة (بفتح الباء) في علم النبات هي وسيلة تكاثر النبات وانتشاره بالإضافة لكونها مخزنًا للطاقة والغذاء. البذرة هي بويضة مخصبة تكونت من مبيض الزهرة، وهي أساس التكاثر في النباتات الراقية وتبدأ منها حياة جيل جديد من النباتات. (Seeds)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012639.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "voice",
    "term_en": "Voice",
    "term_ar": "صوت الإنسان",
    "synonyms": [
      "Voices",
      "Human voice"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sounds produced by humans by the passage of air through the LARYNX and over the VOCAL CORDS, and then modified by the resonance organs, the NASOPHARYNX, and the MOUTH.",
    "arabic_definition": "صوت الإنسان وهو صوت ينشأ من إنسان ويستعمله في حديث وغناء وضحك وبكاء والصراخ وذلك للتعبير عن مشاعره وللتواصل مع مجتمعه، ويكون صوته ناتج من الحبال الصوتية وألتي تلعب الحنجرة والرئتين واللسان والشفتين دور في ذلك. (Voice)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014831.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulse",
    "term_en": "Pulse",
    "term_ar": "نبض",
    "synonyms": [
      "Pulses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The rhythmical expansion and contraction of an ARTERY produced by waves of pressure caused by the ejection of BLOOD from the left ventricle of the HEART as it contracts.",
    "arabic_definition": "نبض القلب هو الموجة المتولدة في الشرايين نتيجة انقباض القلب، وهو ما يُدعى دقات القلب. يمكن إحساس النبض عبر تحسس الشرايين الكبيرة في جسم الإنسان في مناطق قربها من سطح جسم الإنسان مثل العنق والمعصم. (Pulse)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011674.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "larva",
    "term_en": "Larva",
    "term_ar": "يرقة",
    "synonyms": [
      "Larvae",
      "Maggots",
      "Maggot",
      "Tadpole",
      "Tadpoles",
      "Caterpillars",
      "Caterpillar"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Wormlike or grublike stage, following the egg in the life cycle of insects, worms, and other metamorphosing animals.",
    "arabic_definition": "اليرقة أو اليرقانة هو أول طور من نمو الفرد بعد تفقع البيضة، أو الولادة عند عدد كبير من الأنواع الحيوانية، ذات نمو غير مباشر. نصادف هذا النوع من النمو في معظم الشعب، خاصة المفصليات (الحشرات، القشريات...) والرخويات والحلقيات والحبليات (أسماك، برمائيات...). (Larva)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007814.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salads",
    "term_en": "Salads",
    "term_ar": "سلطة (طعام)",
    "synonyms": [
      "Salad"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A prepared mixture of cooked and/or raw vegetables, FRUIT, or other foods, garnished with a dressing CONDIMENT, and eaten as a MEAL or side dish.",
    "arabic_definition": "السَلَطة من أنواع المقبلات، تتألف غالباً من خضراوات مقطّعة مع إضافة ملح و/أو زيت و/أو خل وأعشاب وتوابل وجبن وغيرها. كما يمكن أن تُصنع السلطة من الفواكه، وفي هذه الحالة قد يضاف إليها السكر. (Salads)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000080682.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "yogurt",
    "term_en": "Yogurt",
    "term_ar": "زبادي",
    "synonyms": [
      "Yoghurt"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A slightly acid milk food produced by fermentation due to the combined action of Lactobacillus acidophilus and Streptococcus thermophilus.",
    "arabic_definition": "الزَّبَادِيُّ أو الرَّوْب أو اللبن الرائب: حليبٌ خمَّرتْه أنواع من بكتيريا حَمْض اللبن (البادئ-Starter)، لتُحوِّل سكر اللاكتوز إلى حامض اللاكتيك؛ فيكون طعم المنتج حامضاً، متماسك القوام، وهو من الأغذية الغنية جدًا بالعناصر الغذائية: كالكالسيوم، والمنغنيز، والزِنْك، والفسفور، ومجموعة فيتامينات ب: كالريبوفلافين، والنياسين، والبروتين الكامل. وهو مشهور في دول العالم العربي الذي انتشر في العالم. (Yogurt)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015014.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eating",
    "term_en": "Eating",
    "term_ar": "أكل",
    "synonyms": [
      "Food Intake",
      "Intake, Food",
      "Ingestion",
      "Dietary Intake",
      "Dietary Intakes",
      "Intake, Dietary",
      "Nutrient Intake",
      "Intake, Nutrient"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The consumption of edible substances.",
    "arabic_definition": "الأَكْلُ هو ابتلاع الطعام لتوفير جميع الاحتياجات الغذائية أو الدوائية للكائنات الحية، لا سيما الطاقة والنمو. ينبغي أن تأكل الحيوانات والكائنات غيرية التغذية لتبقى على قيد الحياة: فتأكل آكلات اللحوم حيوانات أخرى، وتأكل العواشب النباتات، بينما تأكل القوارت مزيجًا من النباتات والحيوانات على حد سواء وتأكل الكائنات المحللة الفتات. (Eating)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004435.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "silage",
    "term_en": "Silage",
    "term_ar": "سيلاج",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fodder converted into succulent feed for livestock through processes of anaerobic fermentation (as in a silo).",
    "arabic_definition": "السيلاج أو السَولَجَة (بالانكليزية:Silage) هو علف أخضر يُحفظ بعملية التخمير في السلوة. يستخدم للمواشي علفًا سهل الهضم ومرتفع القيمة الغذائية.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012820.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "jogging",
    "term_en": "Jogging",
    "term_ar": "هرولة",
    "synonyms": [
      "Joggings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Running at a low rate of speed. It can be done as a means of conditioning or for general health and well being.",
    "arabic_definition": "الهرولة أحد أشكال الركض أو الجري بسرعة بطيئة أو متمهّلة. والغرض الرئيسي منه هو رفع مستوى اللياقة البدنية مع تقليل الضغط على الجسم بشكل أكبر من الجري بسرعة. (Jogging)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007590.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "torpor",
    "term_en": "Torpor",
    "term_ar": "سبات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A state of decreased activity in animals characterized by depressed metabolism, reduced body temperature, and low sensitivity to external stimuli.",
    "arabic_definition": "السبات (الإنجليزية: Torpor) هو حالة من انخفاض النشاط الفسيولوجي في الحيوان، وعادة عن طريق انخفاض درجة حرارة الجسم ومعدل الأيض. يمكّن السبات الحيوانات من البقاء على قيد الحياة فترات عدم توافر الغذاء.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064348.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arousal",
    "term_en": "Arousal",
    "term_ar": "تيقظ",
    "synonyms": [
      "Arousals",
      "Vigilance, Cortical",
      "Cortical Vigilance"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cortical vigilance or readiness of tone, presumed to be in response to sensory stimulation via the reticular activating system.",
    "arabic_definition": "التيقظ (الإنجليزية: Arousal) هي الحالة الفسيولوجية والنفسية للاستيقاظ أو تحفيز أعضاء الحس إلى حد الإدراك. يشتمل التيقظ على تفعيل الجهاز التنشيطي الشبكي في جذع الدماغ والجهاز العصبي اللاإرادي وجهاز الغدد الصماء، مما يؤدي لزيادة في معدل ضربات القلب وزيادة في ضغط الدم وحالة من اليقظة الحسية والرغبة والحركة والاستعداد للاستجابة لأي مؤثر.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001143.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coffee",
    "term_en": "Coffee",
    "term_ar": "قهوة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A beverage made from ground COFFEA beans (SEEDS) infused in hot water. It generally contains CAFFEINE and THEOPHYLLINE unless it is decaffeinated.",
    "arabic_definition": "القهوة هو مشروب يُحضر من بذور نبات البن المحمصة والمطحونة. تعد القهوة واحدة من أكثر ثلاثة مشروبات شعبية في العالم. (Coffee)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003069.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cheese",
    "term_en": "Cheese",
    "term_ar": "جبن",
    "synonyms": [
      "Cheeses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nutritious food consisting primarily of the curd or the semisolid substance formed when milk coagulates.",
    "arabic_definition": "الجُبنَةُ غذاء معروف مصنوع من الحليب. يصنع الجبن في بعض الدول من حليب الماعز أو حليب الغنم أو حليب البقر أو من أي نوع من أنواع حليب الحيوانات الأليفة اللبونة. (Cheese)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002611.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lunch",
    "term_en": "Lunch",
    "term_ar": "غداء",
    "synonyms": [
      "Lunchtime",
      "Lunchtimes",
      "Lunch Time",
      "Lunch Times",
      "Time, Lunch",
      "Times, Lunch"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The meal taken at midday.",
    "arabic_definition": "الغَدَاء هو ما يأكله الناس عادة في مناطق الجزيرة العربية وجنوبها ما بعد صلاة الظهر، وهي الوجبة الثانية في اليوم، وتعتبر من أدسم الوجبات وأكثرها كماً، ويركز عليها الناس بشكل كبير لدرجة أن بعض الناس لا يفطرون ولا يتناولون وجبة العشاء؛ لأنهم فقط يتناولون وجبة الغداء. وفي باقي مناطق العالم فيختلف زمن الغداء فيكون في أفريقيا بعد صلاة العصر وهكذا. (Lunch)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062409.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "touch",
    "term_en": "Touch",
    "term_ar": "جهاز حسي جسدي",
    "synonyms": [
      "Taction",
      "Tactions",
      "Tactile Sense",
      "Senses, Tactile",
      "Sense, Tactile",
      "Tactile Senses",
      "Sense of Touch",
      "Touch Sense"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Sensation of making physical contact with objects, animate or inanimate. Tactile stimuli are detected by MECHANORECEPTORS in the skin and mucous membranes.",
    "arabic_definition": "هي الحاسة التي يتم من خلالها الإحساس بلمس الأشياء يعطي معلومات حول الجو المحيط بالجسم وذلك من خلال ملامسة أي شيء و الإحساس به وتعدّ حاسة اللمس عامة لأن أعضاء اللمس توجد في جميع أجزاء الجسم وذلك من خلال حساسية الجلد لمختلف أنواع المثيرات عن طريق أعضاء الاستقبال الجلدية وو يمكن تمييز سبعة أنواع مختلفة منها على الأقل ويعتقد أن كل نوع منها حساس لأحد أنواع الإثارة فقط وهي: 1. اللمس : هناك نوعان من أعضاء الاستقبال معنيان باللمس وهما بصيلة مايسنرMeissnersCorpuscles اللماسة وقرص مركلو كلاهما يوجد قريبا من الجلد تحت طبقة الإنبات الموجودة في بشرة الجلد مباشرة. (Touch)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014110.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hearing",
    "term_en": "Hearing",
    "term_ar": "سمع",
    "synonyms": [
      "Audition"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The ability or act of sensing and transducing ACOUSTIC STIMULATION to the CENTRAL NERVOUS SYSTEM. It is also called audition.",
    "arabic_definition": "السمع هي واحدة من الحواس الخمس التقليدية، وهي القدرة على الإحساس بالاهتزازات عن طريق جهاز مثل الأذن. عدم القدرة على السماع هو ما يسمى بالصمم في البشر والفقاريات الأخرى والسمع عمليةً تبدأ بالصوت المنبعث الذي يُعد المصدر ويمر بالأذن التي تستشعر الصوت وتلتقطه، وتنتهي بمركز السمع بالمخ. (Hearing)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006309.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "taste",
    "term_en": "Taste",
    "term_ar": "تذوق",
    "synonyms": [
      "Tastes",
      "Gustation",
      "Gustations",
      "Taste Sense",
      "Senses, Taste",
      "Sense, Taste",
      "Taste Senses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The ability to detect chemicals through gustatory receptors in the mouth, including those on the TONGUE; the PALATE; the PHARYNX; and the EPIGLOTTIS.",
    "arabic_definition": "التذوق هو واحد من الحواس التقليدية الخمس، وينتمي إلى الجهاز الهضمي. وهو الإحساس الناتج أو المُثار عندما تتفاعل مادة في الفم كيميائيًا مع خلايا مستقبلات التذوق الموجودة على براعم التذوق في تجويف الفم ومعظمها موجود على اللسان. (Taste)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013649.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "snacks",
    "term_en": "Snacks",
    "term_ar": "وجبة خفيفة",
    "synonyms": [
      "Snack",
      "Snack Food",
      "Food, Snack",
      "Foods, Snack",
      "Snack Foods",
      "Snacking",
      "Snacktime",
      "Snacktimes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Foods eaten between MEALTIMES.",
    "arabic_definition": "التصبيرة أو النقنقة أو الوجبة الخفيفة تناول طعام لغرض التسلية، قد يؤدي تناولها بإفراط إلى زيادة الوزن وحرمان الأعضاء المختصة بالهضم من الراحة، لكن إذا أخذت الوجبات الخفيفة بكمية صغيرة وفقيرة بالمواد الدسمة وقليلة السعرات الحرارية وكانت مكملة في محتوياتها وعناصرها للوجبات الرئيسة فهي إيجابية للجسم. (Snacks)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062410.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meals",
    "term_en": "Meals",
    "term_ar": "وجبة",
    "synonyms": [
      "Meal",
      "Mealtimes",
      "Mealtime",
      "Meal Times",
      "Time, Meal",
      "Times, Meal",
      "Meal Time",
      "Dinner Time"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A portion of the food eaten for the day, usually at regular occasions during the day.",
    "arabic_definition": "للمزيد حول الدقيق المطحون طحنًا خشنًا، انظر الطحين. الوجبة هي حالة من حالات الأكل خصوصًا تلك الأكلات التي تكون في زمان محدد ويتناول الناس فيها أغذية معينة يتم إعدادها وتجهيزها. (Meals)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062407.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chocolate",
    "term_en": "Chocolate",
    "term_ar": "شوكولاتة",
    "synonyms": [
      "Chocolates",
      "Cocoa Powder",
      "Cocoa Powders",
      "Powder, Cocoa",
      "Powders, Cocoa"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Food product prepared from fermenting, roasting, and grinding seeds of the COCOA plant.",
    "arabic_definition": "الشُوكُولاَتَةُ هي مادة غذائية للتلذّذ، أبرز مكوّناتها هي مشتقّات الكاكاو، ويمكن أن يضاف إليها أنواع من المحلّيات مثل السكّر، ويمكن أن يضاف إليها الحليب. عادةً ما يتمّ تناول الشوكولاتة والاستمتاع بها كمنتج نهائي، ولكن بالمقابل قد تكون مادّة أوليّة لتحضير مأكولات أخرى. (Chocolate)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069956.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "beverages",
    "term_en": "Beverages",
    "term_ar": "مشروب",
    "synonyms": [
      "Beverage",
      "Drink"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Liquids that are suitable for drinking. (From Merriam Webster Collegiate Dictionary, 10th ed)",
    "arabic_definition": "الشراب أو المشروب هو سائل يُعَد للاستهلاك البشري. بالإضافة إلى تلبية حاجة الإنسان الأساسية، والمشروبات تشكل جزءا من ثقافة المجتمع البشري. (Beverages)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001628.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phonation",
    "term_en": "Phonation",
    "term_ar": "تصويت الكلام",
    "synonyms": [
      "Phonations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of producing vocal sounds by means of VOCAL CORDS vibrating in an expiratory blast of air.",
    "arabic_definition": "تصويت الكلام أو النطق أو اصدار الكلام (الإنجليزية: Phonation) هو مصطلح له معاني مختلفة اعتمادا على مجالات فرعية من الصوتيات. لدى بعض علماء الكلام واللغة، النطق الصوتي هو العملية التي تنتج من خلالها الطيات الصوتية أصواتًا معينة عن طريق الاهتزاز الشبه دوري المتتابع لمزمار الحنجرة.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010699.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "symbiosis",
    "term_en": "Symbiosis",
    "term_ar": "تكافل",
    "synonyms": [
      "Endosymbiosis",
      "Commensalism",
      "Mutualism",
      "تكافل (أحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The relationship between two different species of organisms that are interdependent; each gains benefits from the other or a relationship between different species where both of the organisms in question benefit from the presence of the other.",
    "arabic_definition": "التكافل أو التعايش هو أي نوع من أنواع العلاقات الحيوية أو التفاعل البيولوجي الوثيق وطويل الأمد بين كائنين حيويين مختلفين، سواء كان تقايضيًا أو تعايشيًا أو تطفليًا. العضويات الحية التي يطلق عليها متكافلات، قد تكون من نفس النوع أو من أنواع مختلفة. (Symbiosis)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013559.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "biofilms",
    "term_en": "Biofilms",
    "term_ar": "غشاء حيوي رقيق",
    "synonyms": [
      "Biofilm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Encrustations formed from microbes (bacteria, algae, fungi, plankton, or protozoa) embedded in an EXTRACELLULAR POLYMERIC SUBSTANCE MATRIX that is secreted by the microbes. They occur on body surfaces such as teeth (DENTAL DEPOSITS); inanimate objects, and bodies of water. Biofilms are prevented from forming by treating surfaces with DENTIFRICES; DISINFECTANTS; ANTI-INFECTIVE AGENTS; and anti-fouling agents.",
    "arabic_definition": "البيوفيلم (بالإنجليزية Biofilm) هو تكدّس معقّد للكائنات المجهريّة، يتّسم بإفراز نسيج خارج الخليّة محصّن ولاصق. تتميّز البيوفيلمات بخصائص منها :الارتكاز على سطح، التّغايريّة البنياويّة، التّنوّع الوراثي، التّفاعل المعقّد بين الخلايا، EPS نسيج خارج الخليّة متكوّن من موادّ مبلمرة/متماثرة. (Biofilms)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018441.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shellfish",
    "term_en": "Shellfish",
    "term_ar": "بكلويز",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Aquatic invertebrates belonging to the phylum MOLLUSCA or the subphylum CRUSTACEA, and used as food.",
    "arabic_definition": "البكلويز أو المحاريات هو مصطلح يُطلق على نوع من الطعام البحري الذي تؤكل فيه الحيوانات البحرية ذات الأصداف من اللافقاريات والثروات السمكية، بما في ذلك، الأنواع المختلفة من الرخويات والقشريات وشوكيات الجلد وبعض أنواع السرطانات وغيرها. (Shellfish)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012758.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nutrients",
    "term_en": "Nutrients",
    "term_ar": "مغذ",
    "synonyms": [
      "Nutrient",
      "Macronutrients",
      "Macronutrient"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Various components of food that are required for nourishment.",
    "arabic_definition": "المغذّيات هي مواد كيميائية يحتاجها الكائن الحي لكي يحيا وينمو، وتلعب دورا في تمثيل الجسم الغذائي ويحصل عليها الكائن الحي غذاءً من الوسط الذي يعيش فيه. تقوم المغذيات ببناء وترميم أنسجة الجسم، وتنظم العمليات الحيوية في الجسم، وتتحول إلى طاقة (حرارة) وتمد الجسم بالطاقة. (Nutrients)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000078622.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "breakfast",
    "term_en": "Breakfast",
    "term_ar": "إفطار",
    "synonyms": [
      "Breakfasts",
      "Morning Meal",
      "Meal, Morning",
      "Meals, Morning",
      "Morning Meals",
      "Breakfast Time",
      "Breakfast Times",
      "Time, Breakfast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The first meal of the day.",
    "arabic_definition": "الإِفْطَار (أو الفُطُور) هو أوَّل وجبة في اليوم. عادة ما يتناول المرء وجبة الإفطار بعد ساعة أو ساعتين من استيقاظه. (Breakfast)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062408.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urination",
    "term_en": "Urination",
    "term_ar": "تبول",
    "synonyms": [
      "Micturition"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Discharge of URINE, liquid waste processed by the KIDNEY, from the body.",
    "arabic_definition": "التبول (الإنجليزية: Urination) هو قذف البول من المثانة من خلال الإحليل إلى خارج الجسم. وفي البشر الأصحاء تَخْضَع عملية التبول للتحكم الإرادي.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014554.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "longevity",
    "term_en": "Longevity",
    "term_ar": "طول العمر",
    "synonyms": [
      "Length of Life",
      "Life Span",
      "Life Spans",
      "Lifespan",
      "Lifespans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The normal length of time of an organism's life.",
    "arabic_definition": "يتم استخدام الكلمة «طول العمر» في بعض الأحيان كمرادف لكلمة «توقعات العمر» في الديموغرافيا - خصوصًا عندما يتعلق الأمر بشخص أو شيء يستمر لفترة أطول من المتوقع (شجرة قديمة للغاية على سبيل المثال) - ومع ذلك، فإن الكلمتين لهما تعريفان مختلفان قليلاً. وفي تفرع مشابه لما هو الحال في «الانضباط» و«الدقة»، يشير «طول العمر» إلى متوسط عدد السنوات التي يعيشها الإنسان، في حين أن «توقع العمر» يشير إلى عدد السنوات التي يعيشها متوسط عدد السكان. (Longevity)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008136.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adsorption",
    "term_en": "Adsorption",
    "term_ar": "امتزاز",
    "synonyms": [
      "Adsorptions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The adhesion of gases, liquids, or dissolved solids onto a surface. It includes adsorptive phenomena of bacteria and viruses onto surfaces as well. ABSORPTION into the substance may follow but not necessarily.",
    "arabic_definition": "الامتزاز تراكم ذرات أو جزيئات مائعة (يسمى المُمتَز) على سطح مادة صلبة (تسمى الماز). وتخلق هذه العملية طبقة من الجزيئات أو الذرات التي تراكمت بكثافة على سطح المازات. (Adsorption)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000327.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "virulence",
    "term_en": "Virulence",
    "term_ar": "فوعة",
    "synonyms": [
      "Pathogenicity",
      "فوعة (مرضيات)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The degree of pathogenicity within a group or species of microorganisms or viruses as indicated by case fatality rates and/or the ability of the organism to invade the tissues of the host. The pathogenic capacity of an organism is determined by its VIRULENCE FACTORS.",
    "arabic_definition": "الفَوْعَة (الإنجليزية: Virulence) تصف السِمة المؤذية والضارة للجراثيم ومدى خبثها، وتصف قدرة الجراثيم في إحداث المرض. وتتحدد الفوعة بعدد الجراثيم وطريق دخولها إلى الجسم وبآليات دفاع الجسم وبالخصائص الداخلية التي تمتلكها الجراثيم والتي تُدعى بعوامل الضراوة.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014774.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "inhalation",
    "term_en": "Inhalation",
    "term_ar": "شهيق",
    "synonyms": [
      "Inhaling",
      "Inspiration, Respiratory",
      "Respiratory Inspiration"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The act of BREATHING in.",
    "arabic_definition": "الشهيق هو عملية دخول الهواء من الجو الخارجي ثم يمر عبر القنوات الهوائية في الجهاز التنفسي حتى يصل إلى الأسناخ الرئوية (الحويصلات الهوائية) الموجودة في الرئتين. يمتاز هواء الشهيق بأنه غني بغاز الأكسجين، علماً أن هذا الغاز تحتاجه الخلايا في التنفس الداخلي لإنتاج أدينوسين ثلاثي الفوسفات. (Inhalation)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001239.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "afterimage",
    "term_en": "Afterimage",
    "term_ar": "صورة تلوية",
    "synonyms": [
      "Afterimages",
      "صورة تلوية (طب العيون)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Continuation of visual impression after cessation of stimuli causing the original image.",
    "arabic_definition": "الصورة التلوية أو الصورة اللاحقة هي ظاهرة تحدث عندما ينظر الرائي لصورة معينة لفترة ثم يتوقف عن النظر لها، فإنه يظهر أمام عينه صورة تشبه الصورة التي كان ينظر إليها، وهذه الظاهرة قد تكون طبيعية (فسيولوجية) وقد تكون مَرضية (وتسمى التكرر المرئي)، وتحدث هذه الظاهرة نتيجة استمرار النشاط الكيميائي الضوئي في شبكية العين حتى بعد زوال المحفز الأصلي بتوقف الرائي عن النظر إلى الصورة الأصلية. من الأمثلة الشهيرة على ظاهرة الصورة التلوية هو ظهور منطقة معتمة في نظر الرائي بعد النظر لفترة وجيزة إلى مصدر للضوء، مثل فلاش الكاميرا أو الشمس أو المصباح. (Afterimage)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000360.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hormesis",
    "term_en": "Hormesis",
    "term_ar": "إنهاض",
    "synonyms": [
      "Hormeses",
      "Hormetic Dose-Response",
      "Dose-Response, Hormetic",
      "Dose-Responses, Hormetic",
      "Hormetic Dose-Responses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Biphasic dose responses of cells or organisms (including microorganisms) to an exogenous or intrinsic factor, in which the factor induces stimulatory or beneficial effects at low doses and inhibitory or adverse effects at high doses.",
    "arabic_definition": "الإنهاض أو إستجابة للحافز (Hormesis) (من اليونانيةإنهاض (hórmēsis) «الحركة السريعة، أو الحماس،» ومن اليونانية القديمة إنهاض (hormáein) «الوضع في الحركة، والدفع، والحث على») هو عبارة عن الاستجابات البيولوجية المواتية بشكلٍ عام للتعرضات الخفيفة من السموم وعوامل الإجهاد الأخرى. من ثم يكون للملوث أو السم المسبب للإنهاض تأثير معاكس في حالة تناول الجرعات المنخفضة يشبه آثار تناول الجرعات الكبيرة.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059165.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autophagy",
    "term_en": "Autophagy",
    "term_ar": "التهام ذاتي",
    "synonyms": [
      "Autophagocytosis",
      "Autophagy, Cellular",
      "Cellular Autophagy",
      "Lipophagy",
      "Ribophagy",
      "Reticulophagy",
      "ER-Phagy",
      "Nucleophagy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The segregation and degradation of various cytoplasmic constituents via engulfment by MULTIVESICULAR BODIES; VACUOLES; or AUTOPHAGOSOMES and their digestion by LYSOSOMES. It plays an important role in BIOLOGICAL METAMORPHOSIS and in the removal of bone by OSTEOCLASTS. Defective autophagy is associated with various diseases, including NEURODEGENERATIVE DISEASES and cancer.",
    "arabic_definition": "الالتهام الذاتي (الإنجليزية: Autophagocytosis أو Autophagy) (من الكلمة اليونانية auto-:«ذاتي» و phagein «يلتهم») هي آلية تدمير طبيعية تُفكّك، بصورة منظّمة، المكوّنات الخلوية غير الضرورية أو المعطوبة تكون مركونة في الخلية. تسمح عملية الالتهام الذاتي بالتقويض المُنظّم وإعادة التدوير للمكونات الخلوية.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001343.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shivering",
    "term_en": "Shivering",
    "term_ar": "ارتعاد",
    "synonyms": [
      "Shiverings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Involuntary contraction or twitching of the muscles. It is a physiologic method of heat production in man and other mammals.",
    "arabic_definition": "الارتعاد (الإنجليزية: shivering)، أو ما يسمى بالرعشة (الإنجليزية: Rigors) أو الارتجاف (الإنجليزية: Shuddering)، هي وظيفة جسدية تحدث كاستجابة لانخفاض درجة الحرارة الجسم في وقت مبكر أو لمجرد الشعور بالبرد لدى الحيوانات ذوات الدم الحار. عندما تنخفض درجة حرارة الجسم المركزية، فإن منعكس الارتعاد اوالرعشة (الإنجليزية: Shivering Reflex) ينطلق بالعمل للحفاظ على الاستتباب، اذ تبدأ المجموعات العضلية المحيطة بالأعضاء الحيوية في الجسم بالاهتزاز بحركات صغيرة خالقة بذلك الدفء من خلال إستهلاكها للطاقة.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012768.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diapause",
    "term_en": "Diapause",
    "term_ar": "استكنان",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A period of arrested growth or development in animals that is triggered by external conditions, such as length of day, extreme temperatures, or reduced food availability. It can occur at the embryonic, larval, pupal, or adult stage, depending on the species.",
    "arabic_definition": "الاسْتِكْنَان أو السكون الفيزيولوجي هو وقوف كل نشاط أو نمو أو تحوير استجابة للظروف البيئية المنتظمة والمتكررة. فهو حالة فسيولوجية ذات ظروف بدء وتثبيط محددة للغاية. (Diapause)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074767.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cercaria",
    "term_en": "Cercaria",
    "term_ar": "ذانبة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The free-swimming larval forms of parasites found in an intermediate host.",
    "arabic_definition": "الذانبة (الجمع: ذوانب) أو المُذَنَّبَة أو سركاريا هي الشكل اليرقي لطائفة المثقوبات الطفيلية. تتطور داخل الخلايا الجرثومية للكيسة البوغية أو الريدية. (Cercaria)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058487.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "absinthe",
    "term_en": "Absinthe",
    "term_ar": "أفسنتين (مشروب)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An extract of absinthium and other bitter herbs, containing 60% alcohol. Prolonged ingestion causes nervousness, convulsions, trismus, amblyopia, optic neuritis, and mental deterioration. (Dorland, 27th ed)",
    "arabic_definition": "وصف الأفسنتين تاريخيا بأنه من المشروبات المقطرة، والكحولية بدرجة عالية (45 ٪ -74 ٪ حجم الكحول في المحلول). وهو كحول بنكهة اليانسون مستمدة من الأعشاب الطبية، بما فيها زهور وأوراق عشبة الأفسنتين ، يُشار إليها عادة بأنها «الأفسنتين المُرّ». (Absinthe)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018646.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diffusion",
    "term_en": "Diffusion",
    "term_ar": "انتشار",
    "synonyms": [
      "Diffusions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The tendency of a gas or solute to pass from a point of higher pressure or concentration to a point of lower pressure or concentration and to distribute itself throughout the available space. Diffusion, especially FACILITATED DIFFUSION, is a major mechanism of BIOLOGICAL TRANSPORT.",
    "arabic_definition": "الانتشار هي عملية توزيع جزيئات أو ذرات أو حبيبات بشكل متساوٍ في فراغ أو في حيّز متاح أو تخللها خلال حاجز غشائي. ويتم الانتشار بانتقال الجزيئات أو الذرات من منطقة ذات تركيز عالي إلى منطقة ذات تركيز أقل حتى يتساوى تركيز الجزيئات في المنطقتين. (Diffusion)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004058.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "running",
    "term_en": "Running",
    "term_ar": "ركض",
    "synonyms": [
      "Runnings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An activity in which the body is propelled by moving the legs rapidly. Running is performed at a moderate to rapid pace and should be differentiated from JOGGING, which is performed at a much slower pace.",
    "arabic_definition": "الركض أو الجري أو العدو هو عملية مستمرة ومنتظمة من حركة الأقدام على الأرض اندفاعيّاً تسمح للإنسان وبقية الحيوانات بالتنقل البري سريعاً. الجري نوع من الخطو الذي يختص بوضعه الهوائي التي تكون فيه الأقدام فوق الأرض. (Running)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012420.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "seafood",
    "term_en": "Seafood",
    "term_ar": "مأكولات بحرية",
    "synonyms": [
      "Seafoods",
      "Sea-Food",
      "Sea-Foods"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Marine fish and shellfish used as food or suitable for food. (Webster, 3d ed) SHELLFISH and FISH PRODUCTS are more specific types of SEAFOOD.",
    "arabic_definition": "المأكولات البحرية أو الأغذية البحرية أو غلال البحر في فن الأكل، هي حيوانات بحرية للافقارية مأكولة. هذا التعريف يشمل عادة القشريات (الروبيان، سرطان البحر، البرنقيل، الخ.)، رخويات (بلح البحر، البطلينوس، القواقع أو المحار، والحبار، الخ.) وغيرها من الحيوانات البحرية مثل بعض قنفذيات الجلد (قنفذ البحر). (Seafood)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017747.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "swimming",
    "term_en": "Swimming",
    "term_ar": "سباحة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An activity in which the body is propelled through water by specific movement of the arms and/or the legs. Swimming as propulsion through water by the movement of limbs, tail, or fins of animals is often studied as a form of PHYSICAL EXERTION or endurance.",
    "arabic_definition": "السباحة واحدةٌ من أشهر الرياضات وأكثرها ممارسةً من قبل الرياضيين، فالبعض منهم يعتبرها قمّة المتعة، والرياضة التي تمدّهم بالنشاط والحيوية على الدوام. السباحة أساساً هي الحركة التي تتحرّكها الكائنات الحية في الماء دون أن تسير في قاع المسطّح المائي أو البركة المائية. (Swimming)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013550.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "walking",
    "term_en": "Walking",
    "term_ar": "مشي",
    "synonyms": [
      "Ambulation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An activity in which the body advances at a slow to moderate pace by moving the feet in a coordinated fashion. This includes recreational walking, walking for fitness, and competitive race-walking.",
    "arabic_definition": "المشي هو حركة الاقدام لتحريك الجسم والانتقال من مكان إلى آخر. وهو أحد أهم طرق الحركة على الأرض بين الحيوانات ذات الأرجل. (Walking)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016138.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "molasses",
    "term_en": "Molasses",
    "term_ar": "دبس السكر",
    "synonyms": [
      "Molasse"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The syrup remaining after sugar is crystallized out of SUGARCANE or sugar beet juice. It is also used in ANIMAL FEED, and in a fermented form, is used to make industrial ETHYL ALCOHOL and ALCOHOLIC BEVERAGES.",
    "arabic_definition": "دبس السكر أو العسل الأسود أو المولاس أو مولاس القصب سائل بني لزج غامق كثافته في حدود 1.4جم /سم3 وهو الناتج الثانوي من عملية البلورة النهائية لتصنيع السكر. أي انه مادة لزجة ناتجة عن تكرير قصب السكر أو بنجر السكر إلى سكر. (Molasses)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008965.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "drinking",
    "term_en": "Drinking",
    "term_ar": "شرب",
    "synonyms": [
      "Drinkings",
      "Water Consumption",
      "Water Intake"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The consumption of liquids.",
    "arabic_definition": "الشرب هو تناول السوائل عبر الفم خصوصا الماء. فعند شعور الكائن الحي من إنسان أو حيوان بالعطش يشرب الماء، ذلك أن الماء يشكل النسبة العظمى من تكوين الكائن الحي. (Drinking)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004326.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "saccades",
    "term_en": "Saccades",
    "term_ar": "حركة العين الرمشية",
    "synonyms": [
      "Saccade",
      "Pursuit, Saccadic",
      "Pursuits, Saccadic",
      "Saccadic Pursuit",
      "Saccadic Pursuits",
      "Saccadic Eye Movements",
      "Eye Movement, Saccadic",
      "Eye Movements, Saccadic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abrupt voluntary shift in ocular fixation from one point to another, as occurs in reading.",
    "arabic_definition": "حركة العين الرمشية أو الحركة السكادية (سكادية اصلها كلمة فرنسية تعني الارتعاش) هي حركة سريعة متزامنة لكلتا العينين أثناء التحديق لصورة أو جسم معين حتى وان كانت هذه الصورة ثابتة، حيث تقوم العينين بحركة مسحية مستمرة للجسم أو الصورة التي تحدق إليها، أثناءها يتنقل التركيز بين نقاط الصورة البارزة. يتم التحكم بهذه الحركة عبر الجهاز العصبي المركزي تحديدا في منطقة ما يسمى حقول العين الجبهية (FEF: frontal eye fields) في قشرة المخ، وايضا في مناطق تحت القشرة مثل منطقة منطقة الاكيمة العليا (superior colliculus). (Saccades)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012438.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "singing",
    "term_en": "Singing",
    "term_ar": "غناء",
    "synonyms": [
      "Chant",
      "Chants",
      "Whistling",
      "Whistlings",
      "Vocalization, Rhythmic",
      "Rhythmic Vocalization",
      "Rhythmic Vocalizations",
      "Vocalizations, Rhythmic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Modulation of human voice to produce sounds augmented by musical tonality and rhythm.",
    "arabic_definition": "الغناء هو إصدار صوت فن يدمج بين 3 عناصر أساسية هي الموسيقى والكلمة والصوت. والغناء شكل من الأشكال الطبيعية في التعبير، ويوجد في كافة المجتمعات والثقافات في كل أنحاء العالم. (Singing)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063346.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exercise",
    "term_en": "Exercise",
    "term_ar": "تدريب بدني",
    "synonyms": [
      "Exercises",
      "Exercise, Physical",
      "Exercises, Physical",
      "Physical Exercise",
      "Physical Exercises",
      "Exercise, Isometric",
      "Exercises, Isometric",
      "Isometric Exercises"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Physical activity which is usually regular and done with the intention of improving or maintaining PHYSICAL FITNESS or HEALTH. Contrast with PHYSICAL EXERTION which is concerned largely with the physiologic and metabolic response to energy expenditure.",
    "arabic_definition": "التمارين الرياضية أي نشاط بدني يقوم به الفرد للمحافظة على لياقة وصحة جسده بشكل عام. ولممارسة الرياضة العديد من الأسباب الداعية لها، منها: تقوية عضلات القلب والأوعية الدموية، وتعزيز اللياقة البدنية، وفقدان الوزن والمحافظة عليه، أو لمجرد الاستمتاع فقط. (Exercise)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015444.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "freezing",
    "term_en": "Freezing",
    "term_ar": "تجمد",
    "synonyms": [
      "Melting"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Liquids transforming into solids by the removal of heat.",
    "arabic_definition": "مصطلح فيزيائي، التجمد أو التصلب هي عملية التي يتحول فيها سائل إلى صلب حين تصل درجة حرارته إلى درجة التجمد. كما تعتبر عملية الذوبان العملية المضادة (تقريباً) لعملية التجمد، بمعنى أنها عملية تحول الصلب إلى سائل. (Freezing)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005615.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "yawning",
    "term_en": "Yawning",
    "term_ar": "تثاؤب",
    "synonyms": [
      "Yawnings",
      "Yawn"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An involuntary deep INHALATION with the MOUTH open, often accompanied by the act of stretching.",
    "arabic_definition": "التثاؤب عمل لا إرادي الهدف منه ملء الرئتين بالهواء إلى أقصى حد. للقيام به يفتح الشخص فمه بشدة لدرجة يكون فيها حجم فتحة البلعوم أكبر بأربع مرات من حجمها في الأوقات العادية، ويستمر التثاؤب لحوالي 6 ثوان تتقلص فيهما عضلات الوجه والرقبة، ويصاحبهما إغلاق للعينين. (Yawning)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015000.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "appetite",
    "term_en": "Appetite",
    "term_ar": "شهية",
    "synonyms": [
      "Appetites",
      "Appetite Alterations",
      "Alteration, Appetite",
      "Alterations, Appetite",
      "Appetite Alteration"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Natural recurring desire for food. Alterations may be induced by APPETITE DEPRESSANTS or APPETITE STIMULANTS.",
    "arabic_definition": "الشهية أو الشاهية هي رغبة وحالة نفسية تدفع إلى تناول الطعام، عادةً بسبب الجوع، على الرغم من أن وجود الأطباق المشهية يدفع أحياناً عند البعض إلى تناول الطعام رغم عدم وجود شعور بالجوع. يهدف وجود الشهية إلى تأمين كمية كافية من الطاقة للحفاظ على حاجات الاستقلاب في الجسم؛ ويتم التحكم بشعور الشهية عبر نظام متناسق بين الجهاز الهضمي والدماغ. (Appetite)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001066.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "systole",
    "term_en": "Systole",
    "term_ar": "انقباض القلب",
    "synonyms": [
      "Systoles",
      "Systolic Time Interval",
      "Intervals, Systolic Time",
      "Interval, Systolic Time",
      "Systolic Time Intervals",
      "Time Intervals, Systolic",
      "Time Interval, Systolic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Period of contraction of the HEART, especially of the HEART VENTRICLES.",
    "arabic_definition": "انقباض القلب (الإنجليزية: Systole) هو جزء من دورة القلب التي تتعايش فيها بعض غرف عضلة القلب بعد إعادة تعبئتها بالدم. نشأ مصطلح \"انقباض\" من اللاتينية الجديدة عبر اليونانية القديمة \".",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013599.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diuresis",
    "term_en": "Diuresis",
    "term_ar": "إدرار البول",
    "synonyms": [
      "Diureses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An increase in the excretion of URINE. (McGraw-Hill Dictionary of Scientific and Technical Terms, 6th ed)",
    "arabic_definition": "إدرار البول أو الإِبَالَة أو غَزارة البول أو درور البول هو زيادة التبول وأي عملية فيزيولوجية ينتج عنها مثل هذه الزيادة، وهذا بدوره يتضمن فرط إنتاج البول في الكلى كجزء من الحفاظ على التوازن الداخلي لتوازن السوائل في الجسم. في الأشخاص الأصحاء، يؤدي شرب المزيد من الماء إلى إدرار البول الخفيف للحفاظ على توازن الماء في الجسم. (Diuresis)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004231.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "molting",
    "term_en": "Molting",
    "term_ar": "انسلاخ",
    "synonyms": [
      "Moltings",
      "Ecdysis",
      "Ecdyses",
      "Moulting",
      "Moultings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Periodic casting off FEATHERS; HAIR; or cuticle. Molting is a process of sloughing or desquamation, especially the shedding of an outer covering and the development of a new one. This phenomenon permits growth in ARTHROPODS, skin renewal in AMPHIBIANS and REPTILES, and the shedding of winter coats in BIRDS and MAMMALS.",
    "arabic_definition": "الانسلاخ في علم الأحياء هي العملية التي يَطرح فيها حيوان ما قشرته الخارجية أو جزءاً من جسده، أحياناً بصورة دورية خلال أوقات معيَّنة بالسنة، أو خلال مرحلة معينة من حياة الكائن. يمكن أن تشمل عملية الانسلاخ البشرة أو الكساء الخارجي، كالشعر والفرو والصوف، أو طبقات خارجية أخرى من جسد الكائن الحيّ. (Molting)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018978.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "weaning",
    "term_en": "Weaning",
    "term_ar": "فطام",
    "synonyms": [
      "Weanings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Permanent deprivation of breast milk and commencement of nourishment with other food. (From Stedman, 25th ed)",
    "arabic_definition": "فطام الرضيع هي تلك المرحلة التي يبدأ فيها بتنويع مصادر تغذيته بدلاً من الاعتماد الكلي على الرضاعة الطبيعية، والتي يتم قطعها تدريجياً. ويعتبر الصغير مفطوما متى ما أدرك ذلك. (Weaning)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014886.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tropism",
    "term_en": "Tropism",
    "term_ar": "انتحاء",
    "synonyms": [
      "Tropisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The directional growth of an organism in response to an external stimulus such as light, touch, or gravity. Growth towards the stimulus is a positive tropism; growth away from the stimulus is a negative tropism. (From Concise Dictionary of Biology, 1990)",
    "arabic_definition": "الانتحاء (الإنجليزية: Tropism) مصطلح يشير إلى حركة النبات أو بعض أجزائه حسب المؤثرات البيئية من حوله. تحدث الحركة الانتحائية في العضو نتيجة تساوي العامل المؤثر على العضو من جميع الاتجاهات بالتساوي، فحركة الأوراق الحديثة أثناء النمو وحركة حراشيف البراعم وبتلات الأزهار عند التفتح أمثلة للحركات الانتحائية وتنتج من نمو السطح السفلي للعضو أسرع من السطح العلوي مما يجعلها تنتحي إلى أعلى مثلا لتغليف قمة الساق أو حدوث زيادة النمو في السطح العلوي أكبر فيحدث تفتح البراعم.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018523.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diastole",
    "term_en": "Diastole",
    "term_ar": "انبساطة (قلب)",
    "synonyms": [
      "Diastoles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Post-systolic relaxation of the HEART, especially the HEART VENTRICLES.",
    "arabic_definition": "انبساط العضلة القلبية أو ارتخاء عضلة القلب (الإنجليزية: Diastole) يمثل المرحلة التي ترتخي فيها العضلة القلبية وبالتالي تسمح للدم بالدخول، فهي فترة امتلاء حجرات القلب بالدم. تماثل هذه الفترة في مخطط القلب الكهربائي الفترة ما بين نهاية موجة T إلى بداية موجة P. انبساط العضلة القلبية بعد نهاية مرحلة انقباض فائتة، يعني هبوط الضغط في حجرات القلب وإلى توسع هذه الحجرات (الأذينين والبطينين)؛ في الأذينين فإن الانبساط يؤدي إلى حدوث سحب (الإنجليزية: Wake) لمزيد من الدم من الوريدين الأجوفين إلى الأذينين.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003971.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blinking",
    "term_en": "Blinking",
    "term_ar": "طرف (حركة العين)",
    "synonyms": [
      "Reflex, Orbicularis Oculi",
      "Orbicularis Oculi Reflexes",
      "Reflexes, Orbicularis Oculi",
      "Orbicularis Oculi Reflex",
      "Winking",
      "Blink Reflexes",
      "Reflexes, Blink",
      "Reflex, Blink"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Brief closing of the eyelids by involuntary normal periodic closing, as a protective measure, or by voluntary action.",
    "arabic_definition": "الطَرْف هو عملية نصف لا إرادية تظهر في صورة إغلاق جفن العين بسرعة، وهي تتم عن طريق تثبيط عمل عضلة رافعة الجفن العلوية مع تنشيط عمل العضلة الدائرية حول العين. وهي تعتبر عملية هامة للعين حيث تساعد على انتشار الدموع عبر العين، وإزالة المواد المهيجة من على سطح القرنية والشبكية. (Blinking)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001767.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "h-reflex",
    "term_en": "H-Reflex",
    "term_ar": "منعكس H",
    "synonyms": [
      "Reflex, H",
      "H-Reflexes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A monosynaptic reflex elicited by stimulating a nerve, particularly the tibial nerve, with an electric shock.",
    "arabic_definition": "منعكس H هو رد فعلٍ انعكاسي في العضلات بعد تحفيزٍ كهربائي للألياف الحسية في الأعصاب التي تُعصبها (مثلًا، الموجودة خلف الركبة). وُصف هذا المنعكس للمرة الأولى بواسطة باول هوفمان عام 1910. (H-Reflex)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006181.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osmosis",
    "term_en": "Osmosis",
    "term_ar": "تناضح",
    "synonyms": [
      "Osmoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tendency of fluids (e.g., water) to move from the less concentrated to the more concentrated side of a semipermeable membrane.",
    "arabic_definition": "التناضح أو الخاصية الأسموزية أو الحلول أو التنافذ أو الأزموزية أو التنافذ الغشائي أو الأسموزية أو الانتضاح أو الانتشار الغشائي (اليونانية: ὠσμός «دفع») (الإنجليزية: Osmosis)، هي صافي حركة انتقال جزيئات الماء عبر غشاء نصف نافذ من منطقة ذات نسبة ذوائب منخفضة (مثل ماء عذب) إلى منطقة ذات كثافة ذوائب مرتفعة (تركيز أعلى للذوائب، أي ماء بحر مالح مثلا) دون الحاجة لاستهلاك طاقة. الغشاء النصف نافذ يسمح بنفوذ الماء (المذيب) ولا يسمح بنفوذ الذوائب (solute) مما يؤدي إلى تدرج في الضغط عبر الغشاء.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009995.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anisotropy",
    "term_en": "Anisotropy",
    "term_ar": "تباين الخواص",
    "synonyms": [
      "Anisotropies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A physical property showing different values in relation to the direction in or along which the measurement is made. The physical property may be with regard to thermal or electric conductivity or light refraction. In crystallography, it describes crystals whose index of refraction varies with the direction of the incident light. It is also called acolotropy and colotropy. The opposite of anisotropy is isotropy wherein the same values characterize the object when measured along axes in all directions.",
    "arabic_definition": "تباين الخواص أو اللاتناحي أو تباين المناحي (الإنجليزية: Anisotropy) هو ظاهرة تعلق الخواص بالمنحى أو الجهة، أي أن اختلاف الجهة يؤدي إلى اختلاف الخواص، وذلك على العكس من ظاهرة توحد الخواص. يستخدم هذا المصطلح في عدة علوم أساسية وتطبيقية مثل الفيزياء والرياضيات وعلم المواد وعلم البلورات، كما يمكن وصف الأشياء به، فعلى سبيل المثال، يعد الخشب متباين الخواص من حيث سهولة القطع، إذ يسهل نشره على طول الليف الخشبي مقابل عرضه.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016880.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endocytosis",
    "term_en": "Endocytosis",
    "term_ar": "إدخال خلوي",
    "synonyms": [
      "Endocytoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cellular uptake of extracellular materials within membrane-limited vacuoles or microvesicles. ENDOSOMES play a central role in endocytosis.",
    "arabic_definition": "الإدخال الخلوي أو الالتقام الخلوي أو الالتقام (الاسم العلمي: Endocytosis) هي العملية التي من خلالها تقوم الخلايا بامتصاص الجزيئات (مثل البروتينات) التي تحتاج إليها. يتم استخدامه من قبل جميع خلايا الجسم، لأن معظم المواد ذات الأهمية بالنسبة لهم هي عبارة عن جزيئات بقطبية كبيرة التي لا يمكن ان تمر من خلال البلازما الكارهة للماء أو غشاء الخلية.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004705.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gymnastics",
    "term_en": "Gymnastics",
    "term_ar": "جمباز",
    "synonyms": [
      "Calisthenics"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A system of exercise using the weight of the body and specific apparatus to promote strength and grace of carriage.",
    "arabic_definition": "الجمباز (الإنجليزية: Gymnastics) رياضة تتضمن أداء سلاسل من الحركات في أجهزة مختلفة ففي كل جهاز سلسلة من الحركات المختلفة. يجمع الجمباز بين القوة والمرونة والسرعة والبراعة.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006173.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metabolism",
    "term_en": "Metabolism",
    "term_ar": "أيض",
    "synonyms": [
      "Metabolic Process",
      "Process, Metabolic",
      "Processes, Metabolic",
      "Metabolic Processes",
      "Anabolism",
      "Catabolism",
      "Metabolic Phenomena",
      "Phenomena, Metabolic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The chemical reactions in living organisms by which energy is provided for vital processes and activities and new material is assimilated.",
    "arabic_definition": "الأيض أو الاستقلاب (الإنجليزية: Metabolism) هو مجموعة من التفاعلات الكيميائية تحدث في خلايا الكائن لتحافظ على الحياة. الأهداف الرئيسية الثلاث للأيض هي تحويل الغذاء/الوقود إلى طاقة لتشغيل العمليات الخلوية، وتحويل الغذاء/الوقود إلى وحدات بناء للبروتينات، والدهون، والأحماض النووية، وبعض السكريات، وإزالة الفضلات الأيضية النيتروجينية.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008660.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "condiments",
    "term_en": "Condiments",
    "term_ar": "توابل",
    "synonyms": [
      "Condiment",
      "Salad Dressing",
      "Dressing, Salad",
      "Dressings, Salad",
      "Salad Dressings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Aromatic substances added to food before or after cooking to enhance its flavor. These are usually of vegetable origin.",
    "arabic_definition": "التَّوابِل أو الإدَام أو الأُدْم هي نكهة أطعمة مطبوخة أو صلصة أو مجففات تضيف للأطعمة نكهة خاصة أو تكون مكملة للطبق. وتعطي نكهة لاذعة في كثير من الأحيان، ولذلك تضاف بكميات صغيرة نسبياً، وتشمل التوابل الملح والفلفل، والكتشب، والخردل، وزيت الزيتون والخل والسكر. (Condiments)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003212.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hibernation",
    "term_en": "Hibernation",
    "term_ar": "سبات شتوي",
    "synonyms": [
      "Hibernations",
      "Hibernation, Artificial",
      "Artificial Hibernation",
      "Artificial Hibernations",
      "Induced Hibernation",
      "Hibernation, Induced",
      "Induced Hibernations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The dormant state in which some warm-blooded animal species pass the winter. It is characterized by narcosis and by sharp reduction in body temperature and metabolic activity and by a depression of vital signs.",
    "arabic_definition": "سبات الشتاء أو رُقاد الشتاء أو الإسبات أو البَيَات السبات الشتوي (الإنجليزية: Hibernation)‏ وهو نقيض السبات الصيفي عند بعض الكائنات الحية، وهو مصطلح يعبر عن كيفية قضاء فصل الشتاء أو الانتظار حتى مرور هذا الفصل من العام؛ حيث تتميز هذه الفترة بعدة ظروف منها (البرودة الشديدة أو درجات الحرارة التي قد تصل إلى تحت الصفر، الجليد، هطول الثلوج، بالإضافة إلى قلة إمدادات الطعام)، ففي ظل هذه الظروف، تصبح الأنشطة اليومية أو البقاء على قيد الحياة إذا جاز التعبير شيئًا في غاية الصعوبة ويكاد يكون مستحيلاً.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006605.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exocytosis",
    "term_en": "Exocytosis",
    "term_ar": "إخراج خلوي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cellular release of material within membrane-limited vesicles by fusion of the vesicles with the CELL MEMBRANE.",
    "arabic_definition": "الإخراج الخلوي (الإنجليزية: exocytosis) أو الإيماس هي عملية مستهلكة للطاقة تقوم الخلية بواسطتها بتوجيه محتويات الحويصلة الإفرازية إلى خارج غشاء الخلية وإلى الفراغ خارج الخلوي.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005089.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "defecation",
    "term_en": "Defecation",
    "term_ar": "تبرز",
    "synonyms": [
      "Defecations",
      "Bowel Movement",
      "Bowel Movements",
      "Bowel Function",
      "Bowel Functions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The normal process of elimination of fecal material from the RECTUM.",
    "arabic_definition": "التبرز هي التي تقوم فيها الكائنات الحية بالتخلص من المخلفات الصلبة أو شبه الصلبة أو السائلة (البراز) عن طريق جهاز الهضم بواسطة فتحة الشرج. تحرك موجات من العضلات جدران القولون فيما يعرف بالتمعج لنقل البراز خلال القناة الهضمية نحو المستقيم. (Defecation)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003672.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "estivation",
    "term_en": "Estivation",
    "term_ar": "سبات صيفي",
    "synonyms": [
      "Aestivation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "In certain living species, a period of dormancy during the summer months marked by decreased metabolism.",
    "arabic_definition": "السبات الصيفي أو (خُمُود أو رُقَاد صيفي) أو البيات الصيفي هو شكلٌ من أشكال طور السكون عند الحيوانات، يشبه إلى حدٍّ كبير البيات الشتوي، إلا أنَّه - على العكس من ذاك الأخير - يحدث عند ارتفاع درجات الحرارة لا انخفاضها، ويتمثَّل بانعدام نشاط الحيوان وقلَّة تمثيله الغذائي. يحدث السُّبات الصيفي في ظروف الحرارة والجفاف، وذلك غالباً في فصل الصيف. (Estivation)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004956.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "deglutition",
    "term_en": "Deglutition",
    "term_ar": "بلع",
    "synonyms": [
      "Deglutitions",
      "Swallowing",
      "Swallowings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The act of taking solids and liquids into the GASTROINTESTINAL TRACT through the mouth and throat.",
    "arabic_definition": "البلع أو الابتلاع أو الازدراد هو عملية يتم من خلالها انتقال الطعام أو الشراب من الفم ،إلى البلعوم، ثم المريء وتكون مصحوبة بغلق لسان المزمار. إذا فشل لسان المزمار في الغلق أثناء عملية البلع، قد يحدث اختناق. (Deglutition)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003679.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interphase",
    "term_en": "Interphase",
    "term_ar": "طور بيني",
    "synonyms": [
      "Interphases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The interval between two successive CELL DIVISIONS during which the CHROMOSOMES are not individually distinguishable. It is composed of the G phases (G1 PHASE; G0 PHASE; G2 PHASE) and S PHASE (when DNA replication occurs).",
    "arabic_definition": "تمر الخلية في المرحلة البينية بثلاثة أطوار متتابعة هي: طور النمو الأول(Growth phase G1): تتضاعف في هذا الطور أعداد العضيات السيتوبلازمية مثل الرايبوسومات، والميتوكندريا، ويتم فيه إنتاج إنزيم اللازمة لتضاعف المادة الوراثية. طور تضاعف المادة الوراثية (DNA Synthesis): تتضاعف المادة الوراثية داخل الخلية لتمهيدها للانقسام. (Interphase)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007399.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exhalation",
    "term_en": "Exhalation",
    "term_ar": "زفير",
    "synonyms": [
      "Exhalations",
      "Exhaling",
      "Expiration, Respiratory",
      "Expirations, Respiratory",
      "Respiratory Expiration",
      "Respiratory Expirations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The act of BREATHING out.",
    "arabic_definition": "الزفير عملية خروج الهواء من الأسناخ الرئوية (الحويصلات الهوائية) الموجودة في الرئتين ثم يمر بالقنوات الهوائية الموجودة في الجهاز التنفسي وأخيراً إلى الجو الخارجي. يمتاز هواء الزفير بأنه غني بغاز ثاني أكسيد الكربون، علماً أن هذا الغاز ينتج بعد أن تطرده الخلايا في عملية التنفس الداخلي لإنتاج أدينوسين ثلاثي الفوسفات. (Exhalation)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045853.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "probiotics",
    "term_en": "Probiotics",
    "term_ar": "معزز حيوي",
    "synonyms": [
      "Probiotic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Live microbial DIETARY SUPPLEMENTS which beneficially affect the host animal by improving its intestinal microbial balance. Antibiotics and other related compounds are not included in this definition. In humans, lactobacilli are commonly used as probiotics, either as single species or in mixed culture with other bacteria. Other genera that have been used are bifidobacteria and streptococci. (J. Nutr. 1995;125:1401-12)",
    "arabic_definition": "المُعززات الحيوية أو المؤيِّدات الحيوية (الإنجليزية: Probiotics) وتنقحر إلى البروبيوتيك، هي كائناتٌ دقيقة حية موجودةٌ في الأطعمة، تهدف إلى تحسين أو استعادة مجهريات البقعة في المِعَى. تشمل المُعززات الحيوية الزبادي والجبن وبعض الأطعمة المتخمرة، مثل خبز العجينة المتخمرة والناتو والمكملات الغذائية والكبسولات الطبية التي تحتوي على سلالةٍ محددةٍ من هذه المعززات.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019936.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phosphenes",
    "term_en": "Phosphenes",
    "term_ar": "وبصة",
    "synonyms": [
      "Phosphene"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A subjective visual sensation with the eyes closed and in the absence of light. Phosphenes can be spontaneous, or induced by chemical, electrical, or mechanical (pressure) stimuli which cause the visual field to light up without optical inputs.",
    "arabic_definition": "الوَبْصَةأو الفوسفين (الإنجليزية: Phosphene)، هي ظاهرة تحدث داخل العين يحدث بها إحساس إبصاري موضوعي بإثارة الشبكية والعين مغلقة. وتتمثل بظهور نقاط أضواء وهمية ونقاط على شكل نجوم صغيرة عند فرك العين أو الضغط عليها. (Phosphenes)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010719.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mastication",
    "term_en": "Mastication",
    "term_ar": "مضغ",
    "synonyms": [
      "Chewing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The act and process of chewing and grinding food in the mouth.",
    "arabic_definition": "المضغ (الإنجليزية: Mastication) هو عملية تفتيت الطعام داخل الفم عن طريق الأسنان، وهو الخطوة الأولى في عملية الهضم. يقوم اللسان بتقليب الطعام داخل فم ثم تقطعه الأنياب ثم تطحنها الضروس ثم يبلع الطعام ويمر في البلعوم ثم إلى المرئ ثم إلى المعدة وتقوم بهضمه فإذا مضغ جيدًا سيهضم الطعام بسرعة وإذا لم يمضغ جيدًا سيبدأ عسر الهضم وبعدها يمر الطعام بالإثنا عشر ومن ثم إلى الأمعاء الدقيقة ثم إلى الإمعاء الغليظة ومن ثم إلى فتحة الشرج.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008409.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metabolome",
    "term_en": "Metabolome",
    "term_ar": "ميتابولوم",
    "synonyms": [
      "Metabolomes",
      "Metabolic Profile",
      "Metabolic Profiles",
      "Profile, Metabolic",
      "Profiles, Metabolic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The dynamic collection of metabolites which represent a cell's or organism's net metabolic response to current conditions.",
    "arabic_definition": "الميتابولوم أو المجموع الأيضي يشير إلى المجموعة الكاملة من الجزيئات الكيميائية الصغيرة الموجودة ضمن العينة الأحيائية (البيولوجية). (Metabolome)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055442.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "baroreflex",
    "term_en": "Baroreflex",
    "term_ar": "منعكس الضغط",
    "synonyms": [
      "Baroreceptor Reflex",
      "Baroreceptor Reflexes",
      "Reflexes, Baroreceptor",
      "Reflex, Baroreceptor",
      "Baroreflexes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A response by the BARORECEPTORS to increased BLOOD PRESSURE. Increased pressure stretches BLOOD VESSELS which activates the baroreceptors in the vessel walls. The net response of the CENTRAL NERVOUS SYSTEM is a reduction of central sympathetic outflow. This reduces blood pressure both by decreasing peripheral VASCULAR RESISTANCE and by lowering CARDIAC OUTPUT. Because the baroreceptors are tonically active, the baroreflex can compensate rapidly for both increases and decreases in blood pressure.",
    "arabic_definition": "منعكس الضغط أو منعكس مستقبلة الضغط أحد آليات الاستتباب في الجسم التي تساعد في الحفاظ على ضغط الدم ضمن مستويات ثابتة تقريبًا. يوفر منعكس الضغط حلقة ارتجاع سلبي سريعة يؤدي فيها ارتفاع ضغط الدم إلى انخفاض سرعة القلب. (Baroreflex)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017704.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "natriuresis",
    "term_en": "Natriuresis",
    "term_ar": "بيلة الصوديوم",
    "synonyms": [
      "Natriureses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Sodium excretion by URINATION.",
    "arabic_definition": "بيلة الصوديوم هي عملية إفراز الصوديوم في البول من خلال الكلى. يُحَثّ ذلك بواسطة الببتيدات المدرة للصوديوم الدماغية والأذينية وكذلك الكالسيتونين، بينما يُثَبَّط بواسطة مواد كيميائية مثل الألدوستيرون. (Natriuresis)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009318.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyroptosis",
    "term_en": "Pyroptosis",
    "term_ar": "موت خلوي حمي مبرمج",
    "synonyms": [
      "Pyroptoses",
      "Inflammatory Apoptosis",
      "Apoptoses, Inflammatory",
      "Apoptosis, Inflammatory",
      "Inflammatory Apoptoses",
      "Pyroptotic Cell Death",
      "Cell Death, Pyroptotic",
      "Cell Deaths, Pyroptotic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Type of programmed cell death associated with infection by intracellular pathogens. It is characterized by INFLAMMASOME formation; activation of CASPASE 1; and CYTOKINES mediated inflammation.",
    "arabic_definition": "يصف الموت الخلوي الحُمِّي المبرمج أحد الأشكال الالتهابية الشديدة للموت الخلوي المبرمج الانحلالي الذي يحدث عادةً عند الإصابة بعوامل ممرضة داخل خلوية، وقد يشكل جزءًا من الاستجابة المضادة للميكروبات. تعزز هذه العملية الإزالة السريعة لمختلف العداوى البكتيرية والفيروسية والفطرية والأولية عن طريق القضاء على البيئة الملائمة للتكاثر داخل الخلوي ودعم الاستجابات الدفاعية للمضيف. (Pyroptosis)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069292.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microbiota",
    "term_en": "Microbiota",
    "term_ar": "مجهريات البقعة",
    "synonyms": [
      "Microbiotas",
      "Microbial Community",
      "Community, Microbial",
      "Microbial Communities",
      "Microbial Community Composition",
      "Community Composition, Microbial",
      "Composition, Microbial Community",
      "Microbial Community Compositions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The full collection of microbes (bacteria, fungi, virus, etc.) that naturally exist within a particular biological niche such as an organism, soil, a body of water, etc.",
    "arabic_definition": "مِجْهَرِيَّاتُ البُقْعَة هي مجموعة من الكائنات الحية الدقيقة التي قد تكون متكافلة أو متبادلة أو مسببة للأمراض الموجودة في جميع الكائنات متعددة الخلايا، بما في ذلك النباتات. تشمل الكائنات الحية الدقيقة على البكتيريا، والعتائق، والطلائعيات، والفطريات، والفيروسات، وقد وجد أنها ضرورية للتوازن المناعي والهرموني والاستتباب لمضيفها. (Microbiota)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064307.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proprioception",
    "term_en": "Proprioception",
    "term_ar": "استقبال الحس العميق",
    "synonyms": [
      "Position Sense",
      "Sense, Position",
      "Posture Sense",
      "Sense, Posture",
      "Sense of Position",
      "Vestibular Sense",
      "Sense, Vestibular",
      "Labyrinthine Sense"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Sensory functions that transduce stimuli received by proprioceptive receptors in joints, tendons, muscles, and the INNER EAR into neural impulses to be transmitted to the CENTRAL NERVOUS SYSTEM. Proprioception provides sense of stationary positions and movements of one's body parts, and is important in maintaining KINESTHESIA and POSTURAL BALANCE.",
    "arabic_definition": "استقبال الحس العميق، يُشار إليه أيضًا باسم حاسة إدراك الحركة، هو حاسة الحركة الذاتية وقوى الضغط على الجسم وموضعه. يُوصف استقبال الحس العميق في بعض الأحيان بأنه «الحاسة السادسة». (Proprioception)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011434.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hematopoiesis",
    "term_en": "Hematopoiesis",
    "term_ar": "تكون الدم",
    "synonyms": [
      "Haematopoiesis",
      "Hematopoiesis, Medullary",
      "Medullary Hematopoiesis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The development and formation of various types of BLOOD CELLS. Hematopoiesis can take place in the BONE MARROW (medullary) or outside the bone marrow (HEMATOPOIESIS, EXTRAMEDULLARY).",
    "arabic_definition": "تكون الدم أو مكوّن الدم (اللاتينية: Haematopoiesis) هي عملية يتم من خلالها إنتاج كريات الدم البيضاء والصفائح الدموية،تبدأ هذه العملية في الكيس المحي و مع تطور الجنين تنتقل إلى كبد الجنين وطحاله حتى الأشهر الخمسة الأولى من حياته. ومن ثم تصبح هذه العملية من تخصص النخاع العظمي و عند وصول الشخص سن البلوغ تنحصر في العظام المسطحة ورؤوس العظام الطويلة. (Hematopoiesis)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006410.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "morphogenesis",
    "term_en": "Morphogenesis",
    "term_ar": "تشكل حيوي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The development of anatomical structures to create the form of a single- or multi-cell organism. Morphogenesis provides form changes of a part, parts, or the whole organism.",
    "arabic_definition": "التكون التشكلي أو التشكل الحيوي أو التخلق الحيوي هي العملية الحيوية التي تسبب تطور شكل المتعضية. يعتبر التخلق الحيوي أحد الفروع الثلاثة الرئيسية لعمل الأحياء التنموي إضافة للتحكم بالنمو الخلوي والتمايز الخلوي. (Morphogenesis)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009024.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angiogenesis",
    "term_en": "Angiogenesis",
    "term_ar": "تولد الأوعية",
    "synonyms": [
      "Angiogeneses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Formation of new blood vessels, which is controlled by chemical signals in the body, such as VASCULAR ENDOTHELIAL GROWTH FACTOR (VEGF). This process involves the migration, growth, and differentiation of ENDOTHELIAL CELLS, which line the inside wall of blood vessels.",
    "arabic_definition": "تولد الأوعية أو تكوّن الأوعية الدموية الجديدة (الإنجليزية: Angiogenesis) هي عملية فيزيولوجية تتشكل من خلالها أوعية دموية جديدة تتفرع عن أوعية موجودة مسبقًا. بينما تحدث عملية تكوّن الأوعية أثناء تكوّن الجنين، وبعدها تبدأ عملية تولد الأوعية لمعظم -إذا لم نقل للكل- وذلك بنمو الأوعية الدموية خلال النمو أو خلال المرض.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000096482.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peristalsis",
    "term_en": "Peristalsis",
    "term_ar": "حركة دودية",
    "synonyms": [
      "Peristalses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A movement, caused by sequential muscle contraction, that pushes the contents of the intestines or other tubular organs in one direction.",
    "arabic_definition": "الحركة الدودية أو التمعج (الإنجليزية: peristalsis) هي مجموعة من الانقباضات والانبساطات والتي تحدث على طول القناة الهضمية من المريء حتى الأمعاء الغليظة وتتميز هذه الحركة بأنها مستمرة على طول القناة الهضمية ووظيفتها أنها تقوم بدفع الطعام داخل القناة الهضمية وخضه وعجنه مع العصارات الهاضمة. تستخدم ديدان الأرض آلية مشابهة لدفع حركتها، وبعض الآلات الحديثة تقلد هذا التصميم أيضًا.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010528.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytokinesis",
    "term_en": "Cytokinesis",
    "term_ar": "انقسام السيتوبلازم",
    "synonyms": [
      "Cytokineses",
      "Cytoplasmic Division",
      "Cytoplasmic Divisions",
      "Division, Cytoplasmic",
      "Divisions, Cytoplasmic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process by which the CYTOPLASM of a cell is divided.",
    "arabic_definition": "انقسام السيتوبلازم أو حركيات الخلية (الإنجليزية: cytokinesis) هي عملية تحدث في الخلايا حقيقية النوى، حيث ينقسم فيها سيتوبلازم الخلية لتكوين خليتان وليدتان. وهي عادة ما تحدث في المراحل المتأخرة من الانقسام المتساوي، وأحيانا المنصف، حيث تنفصل الخلية في الانقسام المتساوي إلى خليتين لكي تضمن أن عدد كروموسومات سيتم الحفاظ عليه من جيل إلى الجيل الذي يليه.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048749.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "germination",
    "term_en": "Germination",
    "term_ar": "إنبات",
    "synonyms": [
      "Germinations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The initial stages of the growth of SEEDS into a SEEDLINGS. The embryonic shoot (plumule) and embryonic PLANT ROOTS (radicle) emerge and grow upwards and downwards respectively. Food reserves for germination come from endosperm tissue within the seed and/or from the seed leaves (COTYLEDON). (Concise Dictionary of Biology, 1990)",
    "arabic_definition": "الإنبات أو الإنتاش بداية نمو ساق النبات وأوراقها (الأجزاء الخضراء) فوق الأرض، وخروج جنين البذرة من فترة السبات إلى فترة النشاط تعطي البادرة التي تُنْتج النبات الفتيّ. ومن هذه الظواهر ما يرتبط بعوامل داخلية خاصة بالبذور، ومنها ما يرتبط بعوامل خارجية، ومنها ما هو مصحوب بمظاهر شكليّة، ومنها ما هو مصحوب بمظاهر فيزيولوجية. (Germination)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018525.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibrinolysis",
    "term_en": "Fibrinolysis",
    "term_ar": "انحلال الفبرين",
    "synonyms": [
      "Fibrinolyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The natural enzymatic dissolution of FIBRIN.",
    "arabic_definition": "انحلال الفبرين (أو الفايبرين) (الإنجليزية: Fibrinolysis) هي العملية التي تمنع تطور الخثرة وحدوث مشاكل في مجرى الأوعية الدموية. هنالك نوعان من انحلال الدم: انحلال الدم الأساسي أو الأولي، وهي العملية الطبيعية التي تحدث داخل الجسم، انحلال الدم الثانوي، وتحدث بسبب دواء أو مرض أو أي سبب آخر.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005342.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemodynamics",
    "term_en": "Hemodynamics",
    "term_ar": "ديناميكا الدم",
    "synonyms": [
      "Hemodynamic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The movement and the forces involved in the movement of the blood through the CARDIOVASCULAR SYSTEM.",
    "arabic_definition": "ديناميكا الدم (الإنجليزية: Hemodynamics) هي حركة تدفق الدم. يتم التحكم في نظام الدورة الدموية عن طريق آليات تحافظ على الدم، حيث تُراقَب استجابة الدورة الدموية باستمرار وتتكيف مع ظروف الجسم وبيئته.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006439.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteogenesis",
    "term_en": "Osteogenesis",
    "term_ar": "بانية العظم",
    "synonyms": [
      "Ossification",
      "Ossifications",
      "Bone Formation",
      "Physiologic Ossification",
      "Ossification, Physiologic",
      "Ossification, Physiological",
      "Physiological Ossification",
      "Endochondral Ossification"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of bone formation. Histogenesis of bone including ossification.",
    "arabic_definition": "الخلية بانية العظم (الإنجليزية: Osteoblast) هي خلية ذات نواة واحدة تُصنّع العظم. لكن عند تكوين العظام تعمل بانية العظم على هيئة مجموعة خلايا متصلة، حيث لا تستطيع الخلية الواحدة تكوين عظم. (Osteogenesis)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010012.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vasodilation",
    "term_en": "Vasodilation",
    "term_ar": "توسع الأوعية",
    "synonyms": [
      "Vasodilatation",
      "Vasorelaxation",
      "Vascular Endothelium-Dependent Relaxation",
      "Endothelium-Dependent Relaxation, Vascular",
      "Relaxation, Vascular Endothelium-Dependent"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The physiological widening of BLOOD VESSELS by relaxing the underlying VASCULAR SMOOTH MUSCLE.",
    "arabic_definition": "ينتج توسع الأوعية عن استرخاء خلايا العضلات الملساء ضمن جدران الأوعية وبالأخص الأوردة والشرايين الكبيرة والشرايين الصغيرة، وهذه العملية عكس عملية تضيق الأوعية أساسًا أي تضيق الأوعية الدموية. عندما تتوسع الأوعية الدموية يزداد جريان الدم نتيجة انخفاض المقاومة الوعائيَّة وبالتالي يؤدي توسع الأوعية وبالأخص الشرايين إلى انخفاض ضغط الدم، قد يكون التوسع نتيحة عامل داخلي كعمليات تتم في الأنسجة القريبة من الأوعية أو عامل خارجي كالهرمونات أو الجهاز العصبي، وقد يكون التوسع موضعيًا في أحد الأعضاء وقد يكون مجموعيًا عامًا يشمل جهاز الدوران، وتسمى الأدوية التي تحدث التوسيع الوعائي بموسعات الأوعية. (Vasodilation)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014664.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wakefulness",
    "term_en": "Wakefulness",
    "term_ar": "يقظة",
    "synonyms": [
      "Wakefulnesses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A state in which there is an enhanced potential for sensitivity and an efficient responsiveness to external stimuli.",
    "arabic_definition": "اليَقَظَة (الإنجليزية: Wakefulness) هي حالة دماغية متكررة يوميا، يكون فيها الفرد واعيًا ومشاركا في الاستجابات المعرفية والسلوكية تجاه العالم الخارجي مثل الاتصال والتأمل والأكل وغيرها. واليَقَظَة هو عكس حالة النوم، والتي تُسْتَبْعَد فيها معظم المدخلات الحسية من المعالجة العصبية.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014851.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "piloerection",
    "term_en": "Piloerection",
    "term_ar": "قشعريرة الجلد",
    "synonyms": [
      "Piloerections",
      "Goose bumps"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Involuntary erection or bristling of hairs.",
    "arabic_definition": "القُشَعْريرة أو انكماش الجلد أو قفوف الجلد أو اقشعرار الجلد أو الاقشعرار أو جلد الوز أو لحم الوز أو تحاديب الوز نتوء يظهر في جلد الإنسان، وينشأ لا إرادياً عندما يتعرض الإنسان لدرجات حرارة منخفضة أو يختبر مشاعر قوية مثل: الخوف أو الحنين أو السعادة أو الرعب أو الإعجاب أو أن يتعرض للإثارة الجنسية. انعكاس تأثير القشعريرة يظهر واضحًا على الجسم عند وقوف الشعر أو انتصابه على الجلد. (Piloerection)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010863.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pinocytosis",
    "term_en": "Pinocytosis",
    "term_ar": "شرب خلوي",
    "synonyms": [
      "Pinocytoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The engulfing of liquids by cells by a process of invagination and closure of the cell membrane to form fluid-filled vacuoles.",
    "arabic_definition": "الشرب الخلوي أو الاحتساء أو امتصاص السوائل الخلوي (الإنجليزية: pinocytosis) في البيولوجيا الخلوية، («شرب الخلية»، «معظم مراحل الاحتساء»، «احتساء غير محدد وغير امتصاصي»، «التقام السائل») هو شكل من أشكال الالتقام (الإنجليزية: endocytosis) الذي يتم فيه جلب جزيئات صغيرة إلى داخل الخلية والتب تشكل انغلاف ثم تعلق بعد ذلك داخل حويصلات صغيرة (الحويصلات الاحتسائية) على أن تندمج في وقت لاحق مع اليحلولات (الإنجليزية: lysosomes) لتتحلل. هذه العملية تتطلب الكثير من الطاقة في شكل أدينوسين ثلاثي الفوسفات، مركب كيميائي يستخدم كمصدر من مصادر الطاقة في معظم الخلايا.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010873.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurulation",
    "term_en": "Neurulation",
    "term_ar": "تكون الأنبوب العصبي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An early embryonic developmental process of CHORDATES that is characterized by morphogenic movements of ECTODERM resulting in the formation of the NEURAL PLATE; the NEURAL CREST; and the NEURAL TUBE. Improper closure of the NEURAL GROOVE results in congenital NEURAL TUBE DEFECTS.",
    "arabic_definition": "تكون العُصيبة أو تكون الأنبوب العصبي يشير إلى عملية الطي في جنين الفقاريات، التي تشمل تحول الصفيحة العصبية إلى الأنبوبة العصبية. يُطلق على الجنين في هذه المرحلة مصطلح العُصيبة. (Neurulation)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gravitropism",
    "term_en": "Gravitropism",
    "term_ar": "انتحاء أرضي",
    "synonyms": [
      "Gravitropisms",
      "Geotropism",
      "Geotropisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The directional growth of organisms in response to gravity. In plants, the main root is positively gravitropic (growing downwards) and a main stem is negatively gravitropic (growing upwards), irrespective of the positions in which they are placed. Plant gravitropism is thought to be controlled by auxin (AUXINS), a plant growth substance. (From Concise Dictionary of Biology, 1990)",
    "arabic_definition": "الانتحاء الأرضي أو التَّأوُّدُ الأَرْضِيُّ أو الاستئراض أو الاستئراضية حركة جذر النبات باتجاه الجاذبية الأرضية. يتم الاستدلال على الانتحاء الأرضي بتجربة بسيطة، فإذا وضع نبات أصيص في وضع أفقي بضعة أيام فإن قمم الجذور الابتدائية تغير وضعها متجهة إلى مركز الأرض، أما السوق فتبدأ بالانتحاء إلى أعلى بعيداً عن الجاذبية الأرضية، وهذا ما يسمى الانتحاء الضوئي. (Gravitropism)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018522.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transcytosis",
    "term_en": "Transcytosis",
    "term_ar": "عبر الخلايا",
    "synonyms": [
      "Transcellular Transport",
      "Transport, Transcellular",
      "Transcytotic Pathways",
      "Pathways, Transcytotic",
      "Pathway, Transcytotic",
      "Transcytotic Pathway",
      "Transcellular Pathways",
      "Pathways, Transcellular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The transport of materials through a cell. It includes the uptake of materials by the cell (ENDOCYTOSIS), the movement of those materials through the cell, and the subsequent secretion of those materials (EXOCYTOSIS).",
    "arabic_definition": "يعد عبر الخلايا(المعروف أيضًا باسم cytopempsis) نوعًا من النقل عبر الخلايا حيث يتم نقل الجزيئات الكبيرة المختلفة عبر الجزء الداخلي من الخلية. يتم التقاط الجزيئات الكبيرة في حويصلات على جانب واحد من الخلية، ويتم رسمها عبر الخلية، ويتم إخراجها على الجانب الآخر. (Transcytosis)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057900.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urodynamics",
    "term_en": "Urodynamics",
    "term_ar": "اختبار ديناميكا البول",
    "synonyms": [
      "Urodynamic",
      "Urodynamic testing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The mechanical laws of fluid dynamics as they apply to urine transport.",
    "arabic_definition": "اختبار ديناميكا البول أو فقط: ديناميكا البول هو دراسة تقيم كيفية أداء المثانة والإحليل لوظيفتهما في تخزين وطرح البول. يمكن أن تساعد اختبارات ديناميكا البول في تفسير أعراض مثل: سلس البول كثرة التبول يحاول الشخص التبول بشكل مفاجئ وقوي ولكن دون إدرار للبول مشاكل في بدء إدرار البول عسر التبول مشاكل في إفراغ المثانة بالكامل (Vesical tenesmus، detrusor failure) التهابات المسالك البولية المتكررة تُجرى اختبارات ديناميكا البول عادةً عند الاختصاصيين في طب المسالك البولية، وأمراض النساء، والتوليد / النسائية، والطب الباطني، وعيادات الرعاية الأولية. (Urodynamics)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014563.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adipogenesis",
    "term_en": "Adipogenesis",
    "term_ar": "تكوين الشحم",
    "synonyms": [
      "Adipogeneses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The differentiation of pre-adipocytes into mature ADIPOCYTES.",
    "arabic_definition": "تكوين الشحم (الإنجليزية: adipogenesis) هي عملية تمايز الخلية الميلانية إلى خلية شحمية. تكوين الشحم سوف يصبح النموذج الذي يدرس بشكل مكثف لتمايز الخلية الخلية الشحمية تلعب دور حيوي في الطاقة الداخلة لتكون مستقرة في حال تغير الظروف البيئية.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050156.html",
        "accessedAt": "2026-11-21"
      }
    ]
  }
];
