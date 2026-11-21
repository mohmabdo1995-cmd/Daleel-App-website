// Auto-curated verified medical terms (NIH NLM MeSH 2026 + verified bilingual medical entries) - Part 2
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

export const MEDICAL_TERMS_PART_2: RawExpandedMedicalTerm[] = [
  {
    "id": "barotrauma",
    "term_en": "Barotrauma",
    "term_ar": "رضح ضغطي",
    "synonyms": [
      "Barotraumas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Injury following pressure changes; includes injury to the eustachian tube, ear drum, lung and stomach.",
    "arabic_definition": "الرضح الضغطي (الإنجليزية: Barotrauma) هو التأذّي الجسدي لأنسجة الكائنات الحية نتيجة حدوث فرق في الضغط بين فراغ غازي داخل أو على تماس مع الجسم وسائل محيط. يحدث الرضح الضغطي لدى البشر عادةً عند يتعرض الجسم إلى تغير ملحوظ في ضغط الوسط المحيط مثل الغوص المجهز بمعدات أو الغوص الحر، أو عند صعود أو هبوط الطائرة، أو عند اختلال في الضغط داخل الطائرة أو أي وعاء ضغط.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001469.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epididymitis",
    "term_en": "Epididymitis",
    "term_ar": "التهاب البربخ",
    "synonyms": [
      "Epididymitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the EPIDIDYMIS. Its clinical features include enlarged epididymis, a swollen SCROTUM; PAIN; PYURIA; and FEVER. It is usually related to infections in the URINARY TRACT, which likely spread to the EPIDIDYMIS through either the VAS DEFERENS or the lymphatics of the SPERMATIC CORD.",
    "arabic_definition": "التهاب البربخ (الإنجليزية: Epididymitis) هو التهاب البربخ (هيكل منحني خلف الخصية يتم فيه نضوج وتخزين الحيوانات المنوية) أقل ما يقال عنه أنه مؤلم جداً، يمكن أن يصبح الصفن (الكيس الدي يضم الخصيتين) بلون أحمر، ساخن ومتورم. يمكن أن يكون التهاب البربخ حاداً ولكن نادرا ما يكون مزمن.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004823.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypocalcemia",
    "term_en": "Hypocalcemia",
    "term_ar": "نقص كالسيوم الدم",
    "synonyms": [
      "Hypocalcemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Reduction of the blood calcium below normal. Manifestations include hyperactive deep tendon reflexes, Chvostek's sign, muscle and abdominal cramps, and carpopedal spasm. (Dorland, 27th ed)",
    "arabic_definition": "نقص كالسيوم الدم هو انخفاض مستويات الكالسيوم في مصل الدم. المعدل الطبيعي هو 2.1-2.6 مليمول/لتر (8.8-10.7 ملغ/ديسيلتر، 4.3-5.2 مكافئ/لتر) مع مستويات أقل من 2.1 مليمول / لتر تعرف بأنها نقص كالسيوم الدم. (Hypocalcemia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006996.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chilblains",
    "term_en": "Chilblains",
    "term_ar": "شرث",
    "synonyms": [
      "Chilblain",
      "Idiopathic Perniosis",
      "Idiopathic Pernioses",
      "Pernioses, Idiopathic",
      "Perniosis, Idiopathic",
      "Pernio",
      "Pernios",
      "Perniosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recurrent localized itching, swelling and painful erythema on the fingers, toes or ears, produced by exposure to cold.",
    "arabic_definition": "الشَّرَثُ أو تثليج الأطراف هو حالة طبية تحدث عندما يتعرض فرد مؤهب للبرد والرطوبة، مما يتسبب في تلف الأنسجة. غالبا ما يتم خلطها مع قضمة الصقيع وقدم الخندق. (Chilblains)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002647.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amyloidosis",
    "term_en": "Amyloidosis",
    "term_ar": "داء نشواني",
    "synonyms": [
      "Amyloidoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of sporadic, familial and/or inherited, degenerative, and infectious disease processes, linked by the common theme of abnormal protein folding and deposition of AMYLOID. As the amyloid deposits enlarge they displace normal tissue structures, causing disruption of function. Various signs and symptoms depend on the location and size of the deposits.",
    "arabic_definition": "الداء النشواني (الإنجليزية: Amyloidosis) هو تشخيص نسيجي تندرج ضمنه عدة أمراض مختلفة. يكمن المنشأ المرضي فيه من خلال ترسب البروتين النشواني في الأنسجة الحية والأعضاء؛ مما يؤدي لنشوء المرض.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000686.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "silicosis",
    "term_en": "Silicosis",
    "term_ar": "سحار سيليسي",
    "synonyms": [
      "Silicoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of pneumoconiosis resulting from inhalation of dust containing crystalline form of SILICON DIOXIDE, usually in the form of quartz. Amorphous silica is relatively nontoxic.",
    "arabic_definition": "السحار السيليسي أو مرض تحجر الرئة أو السيليكوسيس (الإنجليزية: Silicosis) () شكل من أشكال أمراض الرئة المهنية الناجمة عن استنشاق غبار السيليكا البلورية. يتميز بالتهاب وتندب يأخذ شكل آفات عقيدية في الفصوص العليا للرئتين.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012829.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "contusions",
    "term_en": "Contusions",
    "term_ar": "رضة",
    "synonyms": [
      "Contusion",
      "Bruise",
      "Bruises"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Injuries resulting in hemorrhage, usually manifested in the skin.",
    "arabic_definition": "إن الرَّضة (الإنجليزية: bruise أو contusion) هي نَوع ورم دموي في الأنسجة تتمزق الشعيرات الدموية وتتمزق الأوردة أحيانًا) بسبب إصابة، ما يتيح للدم إمكانية التسرب إلى الأنسجة الداخلية المحيطة. يمكن للرضوض أن تشمل شعيرات دموية بمستوى الجلد أو نسيج تحت الجلد أو عضلات أو عظام. (Contusions)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003288.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperkalemia",
    "term_en": "Hyperkalemia",
    "term_ar": "فرط بوتاسيوم الدم",
    "synonyms": [
      "Hyperkalemias",
      "Hyperpotassemia",
      "Hyperpotassemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormally high potassium concentration in the blood, most often due to defective renal excretion. It is characterized clinically by electrocardiographic abnormalities (elevated T waves and depressed P waves, and eventually by atrial asystole). In severe cases, weakness and flaccid paralysis may occur. (Dorland, 27th ed)",
    "arabic_definition": "فَرْطُ بوتاسيومِ الدَّم هو زيادة نسبة البوتاسيوم بالدم نتيجة الزيادة الإجماليّة لبوتاسيوم الجسم أو التنقّل من خلايا إلى أخرىّ. وعلى سبيل المثال، يُمكن أن يحدث فَرْط بوتاسيوم الدَّم نتيجة الإطلاق المفاجئ لآيوناتِ البوتاسيوم مِنْ العضل إلى السوائل المحيطة. (Hyperkalemia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006947.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteophyte",
    "term_en": "Osteophyte",
    "term_ar": "نابتة عظمية",
    "synonyms": [
      "Osteophytes",
      "Bone Spur",
      "Bone Spurs",
      "Spur, Bone",
      "Spurs, Bone"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bony outgrowth usually found around joints and often seen in conditions such as ARTHRITIS.",
    "arabic_definition": "النابتة العظمية تغير تنكسي على شكل نتوء عظمي ينمو عند المفاصل نتيجة زيادة الحمل على المفصل. النوابت العظمية هي البداية الأكثر شيوعاً للفصال، وهي قد تكون مؤلمة وتحدد حركة المفصل. (Osteophyte)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054850.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypokalemia",
    "term_en": "Hypokalemia",
    "term_ar": "نقص بوتاسيوم الدم",
    "synonyms": [
      "Hypokalemias",
      "Hypopotassemia",
      "Hypopotassemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormally low potassium concentration in the blood. It may result from potassium loss by renal secretion or by the gastrointestinal route, as by vomiting or diarrhea. It may be manifested clinically by neuromuscular disorders ranging from weakness to paralysis, by electrocardiographic abnormalities (depression of the T wave and elevation of the U wave), by renal disease, and by gastrointestinal disorders. (Dorland, 27th ed)",
    "arabic_definition": "نقص بوتاسيوم الدم (الإنجليزية: Hypokalemia) هو انخفاض مستوى البوتاسيوم (+K) في مصل الدم. البوتاسيوم المنخفض الخفيف لا يسبب عادة أعراضًا.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007008.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spondylosis",
    "term_en": "Spondylosis",
    "term_ar": "داء الفقار",
    "synonyms": [
      "Spondylosis Deformans",
      "Cervical Spondylosis",
      "Spondylosis, Cervical",
      "Lumbarsacral Spondylosis",
      "Spondylosis, Lumbarsacral",
      "Thoracic Spondylosis",
      "Spondylosis, Thoracic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A degenerative spinal disease that can involve any part of the VERTEBRA, the INTERVERTEBRAL DISK, and the surrounding soft tissue.",
    "arabic_definition": "دَاء الفَقَار أو تَنَكُّس الفَقار هو انتكاس العمود الفقري لأي سبب. بالمعنى الدقيق، يشير إلى هشاشة العظام في العمود الفقري، وهو تآكل وتمزق العمود الفقري المرتبط بتقدم العمر، وهو السبب الأكثر شيوعًا للإصابة بداء الفقار. (Spondylosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055009.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "calcinosis",
    "term_en": "Calcinosis",
    "term_ar": "كلاس",
    "synonyms": [
      "Calcinoses",
      "Pathologic Calcification",
      "Calcification, Pathologic",
      "Calcinosis, Tumoral",
      "Calcinoses, Tumoral",
      "Tumoral Calcinoses",
      "Tumoral Calcinosis",
      "Microcalcification"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pathologic deposition of calcium salts in tissues.",
    "arabic_definition": "كُلَاس أو الداء الكلسي أو داء التكلس (الإنجليزية: Calcinosis) هو تَشَكُل ترسبات الكالسيوم في الأنسجة اللينة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002114.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "toothache",
    "term_en": "Toothache",
    "term_ar": "ألم الأسنان",
    "synonyms": [
      "Toothaches",
      "Odontalgia",
      "Odontalgias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pain in the adjacent areas of the teeth.",
    "arabic_definition": "ألم الأسنان (toothache) يُعرف أيضًا باسم الألم السني (odontalgia) أو (odontalgy)، هو ألم يصيب الأسنان أو التراكيب الداعمة لها بسبب بعض الأمراض السنية أو الألم الذي قد يصيب الأسنان عن طريق الأمراض غير السنية. الأسباب المشهورة المسببة لألم الأسنان تتضمن: الالتهابات اللُّبيّة (التهابات في لب السن، والتي تحدث استجابة لتسوس الأسنان، وصدمة الأسنان وعوامل عديدة أخرى)، والحساسية العالية للعاج السني (ألم قصير وحاد، مرتبط عادة مع سطوح الجذور المعرضة والمكشوفة)، والتهابات دواعم السن (التهابات تحدث لرباط دواعم الأسنان، والعظم السنخي حول قمة جذور الأسنان)، وخراجات الأسنان (مجموعات متمركزة من القيح مثل: الخراجات القمية، والخراجات التاجية، وخراجات اللثة)، والتهابات العظم السنخي («السنخ الجاف» من المضاعفات المحتملة لقلع الأسنان، مع خسارة الجلطات الدموية وتكشف العظم)، والتهاب اللثة الناخر الحاد، وأسباب أخرى.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014098.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xerostomia",
    "term_en": "Xerostomia",
    "term_ar": "جفاف الحلق",
    "synonyms": [
      "Xerostomias",
      "Asialia",
      "Asialias",
      "Mouth Dryness",
      "Dryness, Mouth",
      "Hyposalivation",
      "Hyposalivations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Decreased salivary flow.",
    "arabic_definition": "جفاف الفم أو متلازمة الفم الجاف (الإنجليزية: Xerostomia) هي حالة تنتج من تغير في تركيب اللعاب، أو انخفاض في إنتاجه، وقد لا يكون لها سبب واضح. يختلف معدل حدوث جفاف الفم بين السكان، ولكن تم تسجيله في أكثر من 20% من الأفراد الذين تخطوا السبعين عاماً.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014987.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parotitis",
    "term_en": "Parotitis",
    "term_ar": "التهاب النكفية",
    "synonyms": [
      "Parotitides",
      "Parotiditis",
      "Parotiditides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the PAROTID GLAND.",
    "arabic_definition": "اِلْتِهَابُ النَّكَفِيَّةِ أو النُّكَافُ أو اِلْتِهَابُ الغُدَّةِ النَّكَفِيَّةِ أو اِلْتِهَابُ النَّكَفَةِ هو التهاب أحد أو كلا الغدتين النكفيتين، الغدد اللعابية الرئيسية تقع على جانبي الوجه، في البشر. الغدة النكفية هي الغدة اللعابية الأكثر شيوعا من الالتهاب. (Parotitis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010309.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hematocele",
    "term_en": "Hematocele",
    "term_ar": "قيلة دموية",
    "synonyms": [
      "Hematoceles",
      "Testicular Hematocele",
      "Hematoceles, Testicular",
      "Hematocele, Testicular",
      "Testicular Hematoceles",
      "Scrotal Hematocele",
      "Hematocele, Scrotal",
      "Hematoceles, Scrotal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hemorrhage into a canal or cavity of the body, such as the space covered by the serous membrane (tunica vaginalis) around the TESTIS leading to testicular hematocele or scrotal hematocele.",
    "arabic_definition": "القيلة الدموية عبارة عن تجمع للدم في تجويف الجسم. يشير المصطلح الأكثر شيوعًا إلى تجمع الدم في الغلالة الغمدية حول الخصية. (Hematocele)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006398.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "azoospermia",
    "term_en": "Azoospermia",
    "term_ar": "فقد النطاف",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of having no sperm present in the ejaculate (SEMEN).",
    "arabic_definition": "فقد النطاف أو أَرَاط أو انعدام الحيامن (الإنجليزية: Azoospermia) هي حالة طبية تمتاز بأن الرجل ليس لديه كميات معتبرة من النطاف في المني. فقد النطاف مرتبط بانخفاض الخصوبة أو حتى العقم، لكنه قابل للعلاج.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053713.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteolysis",
    "term_en": "Osteolysis",
    "term_ar": "انحلال العظم",
    "synonyms": [
      "Osteolyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Dissolution of bone that particularly involves the removal or loss of calcium.",
    "arabic_definition": "انحلال العظم (الإنجليزية: Osteolysis) هو تحلُّل نشط لقالب العظم من قبل ناقضة العظم (أوستيوكلاست أو هادمة العظم) أثناء التكوُّن الطبيعي لعظام صحية. يمكن اعتبار انحلال العظم كعملية منعكسة لتكوينه.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010014.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stomatitis",
    "term_en": "Stomatitis",
    "term_ar": "التهاب الفم",
    "synonyms": [
      "Stomatitides",
      "Oral Mucositis",
      "Mucositides, Oral",
      "Oral Mucositides",
      "Mucositis, Oral",
      "Oromucositis",
      "Oromucositides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the soft tissues of the MOUTH, such as MUCOSA; PALATE; GINGIVA; and LIP.",
    "arabic_definition": "التهاب الفم أو الحُنَاك (بالإنجليزية: Stomatitis) هو التهاب في الفم والشفتين. وهو يشير إلى العملية الالتهابية التي تؤثر على الأغشية المخاطية للفم والشفتين مع أو بدون تقرح الفم.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013280.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemothorax",
    "term_en": "Hemothorax",
    "term_ar": "تدمي الصدر",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hemorrhage within the pleural cavity.",
    "arabic_definition": "تدَمّي الصدر(1) هي حالةٌ طبية يحدث فيها تجمعٌ للدم في التجويف الجنبي. ينتجُ عنها عددٌ من الأعراض والتي قد تشمل ألمًا صدريًا وصعوبةً في التنفس، كما قد ينتجُ عنها علاماتٌ سريرية تتضمن تسرعَ نبضاتِ القلب وانخفاضَ أصواتِ التنفس على الجانب المُصاب. (Hemothorax)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006491.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chylothorax",
    "term_en": "Chylothorax",
    "term_ar": "تسرب الكيلوس",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of chyle in the thoracic cavity. (Dorland, 27th ed)",
    "arabic_definition": "تسرب الكيلوس (بالانجليزية: Chylothorax) هو تراكم غير طبيعي للكيلوس، وهو سائل لمفي غني بالليبيدات (الدهون)، في الفراغ المحيط بالرئة (التجويف الجنبي). عادةً ما تُعيد الأوعية اللمفاوية للجهاز الهضمي الدهون الممتصة من الأمعاء الدقيقة عبر القناة الصدرية، والتي تصعد خلف المريء لتصريفها إلى الوريد العضدي الرأسي الأيسر.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002916.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "byssinosis",
    "term_en": "Byssinosis",
    "term_ar": "سحار قطني",
    "synonyms": [
      "Byssinoses",
      "Brown Lung Disease",
      "Brown Lung Diseases",
      "Brown Lung",
      "Brown Lungs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of BRONCHOCONSTRICTION resulting from hypersensitive reaction to inhaled dust during the initial processing of cotton, flax, or hemp in the textile industry. Symptoms include wheezing and tightness in the chest.",
    "arabic_definition": "السحار القطني ويُسمى أيضًا مَرض الرئة البنية، هو مرض رئوي مهني يصيب في الأغلب العاملين في مصانع نسيج الأقطان. هو مرض انسدادي مزمن في المسالك الهوائية التنفسية، قد يتولد ويتطور لدى العمال المعرضين لغبار القطن، مثل الكتان وأنواع أخرى من النسيج. (Byssinosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002095.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "siderosis",
    "term_en": "Siderosis",
    "term_ar": "سحار حديدي",
    "synonyms": [
      "Sideroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of pneumoconiosis resulting from inhalation of iron in the mining dust or welding fumes.",
    "arabic_definition": "السحار الحديدي (سيدروسيس) هو ترسب الحديد الزائد في أنسجة الجسم. عند استخدام المصطلح دون مؤهلات، يشير عادةً إلى مرض بيئي في الرئة، يُعرف أيضًا باسم السحار الحديدي الرئوي أو مرض اللّحام، وهو أحد أشكال تغبر الرئة. (Siderosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012806.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synovitis",
    "term_en": "Synovitis",
    "term_ar": "التهاب الزليلي",
    "synonyms": [
      "Synovitides",
      "Synovial Hypertrophy",
      "Hypertrophies, Synovial",
      "Hypertrophy, Synovial",
      "Synovial Hypertrophies",
      "Synovial Thickening",
      "Synovial Thickenings",
      "Thickenings, Synovial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the SYNOVIAL MEMBRANE.",
    "arabic_definition": "التهاب الغشاء الزلالي أو التهاب الغشاء الزليلي (الإنجليزية: Synovitis) هو التهاب الغشاء الذي يبطن المفاصل الزلالية وعادة تكون الحالة مؤلمة خاصة عند تحريك المفصل الذي يتورم بسبب تجمع السوائل. تقترن الإصابة بالتهاب السائل الزليلي بعدد من الاضطرابات الصحية كالتهاب المفاصل (الروماتيدي خاصة)، الذئبة الحمامية والنقرس.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013585.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anthracosis",
    "term_en": "Anthracosis",
    "term_ar": "سحار عمال الفحم",
    "synonyms": [
      "Anthracoses",
      "Pneumoconiosis, Coal Worker's",
      "Coal Worker's Pneumoconioses",
      "Pneumoconioses, Coal Worker's",
      "Pneumoconiosis, Coal Worker",
      "Pneumoconiosis, Coal Workers",
      "Black Lung Disease",
      "Black Lung Diseases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A diffuse parenchymal lung disease caused by accumulation of inhaled CARBON or coal dust. The disease can progress from asymptomatic anthracosis to massive lung fibrosis. This lung lesion usually occurs in coal MINERS, but can be seen in urban dwellers and tobacco smokers.",
    "arabic_definition": "سحار فحمي أو مرض الرئة السوداء (الاسم العلمي: anthracosis) مرض رئوي مهني يصيب على الأغلب عمال مناجم الفحم، نتيجة استنشاقهم للهواء المليء بالكربون وتجمع الكربون داخل العقد اللمفاوية.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055008.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemarthrosis",
    "term_en": "Hemarthrosis",
    "term_ar": "تدمي المفصل",
    "synonyms": [
      "Hemarthroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bleeding into the joints. It may arise from trauma or spontaneously in patients with hemophilia.",
    "arabic_definition": "تدمي المفصل (تكتب بالإنجليزية الأمريكية: Hemarthrosis، وبالإنجليزية البريطانية: Haemarthrosis) هو نزيف يحدث داخل المفصل.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006395.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemospermia",
    "term_en": "Hemospermia",
    "term_ar": "تدمي المني",
    "synonyms": [
      "Hematospermia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Blood in the SEMEN, usually due to INFLAMMATION of the PROSTATE, the SEMINAL VESICLES, or both.",
    "arabic_definition": "هيماتوسبيرميا أو تدمم المني ويكون مصحوبًا بدم شديد وتعرف أيضًا بتدمم المني (بالإنجليزية: Hematospermia ) وهو تواجد الدم في السائل المنوي ويكون في معظم الأحيان من الأعراض الحميدة. ظهوره عند الرجال مابين سن الأربعين أو أكثر، ينبئ تدمي المني بوجود سرطان البروستاتا عادةً. (Hemospermia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051516.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "burning-mouth-syndrome",
    "term_en": "Burning Mouth Syndrome",
    "term_ar": "متلازمة الفم الحارق",
    "synonyms": [
      "Burning Mouth Syndromes",
      "Mouth Syndrome, Burning",
      "Mouth Syndromes, Burning",
      "Syndrome, Burning Mouth",
      "Syndromes, Burning Mouth"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of painful oral symptoms associated with a burning or similar sensation. There is usually a significant organic component with a degree of functional overlay; it is not limited to the psychophysiologic group of disorders.",
    "arabic_definition": "متلازمة الفم الحارق (المسمًّية أيضاً بألم اللسان، أو ألم الفم، أو تَنمُّل الفم، أو حُرّاق اللسان، أو وجع الفم، أو اللسان المحروق، أو حُرّاق الحُفرة الفَميَّة، أو اللسان القارِح، أو متلازمة الفم الحارِق، أو الفم الحارِق، أو الفم القارِح هي الشٌّعور بحُرقة بالفم بدون سبب طبّي مُحدَّد أو معروف وبدون وجود عَلامات لأمراض بالفم. قد يُلازم متلازمة الفم الحارِق جَفاف الفم (جفاف للفم بدون سبب واضِح مثل تَدَفُّق لُعابي مُخَفَّض) وتَنَمُّل بالفم (شعور بالنَّخز) وتَغيُّر في حاسَّة الشَّم أو التَّذوُّق (خَلَل الذَّوق وخَلَل الشَّم). (Burning Mouth Syndrome)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002054.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysostoses",
    "term_en": "Dysostoses",
    "term_ar": "خلل التعظم",
    "synonyms": [
      "Dysostosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Defective bone formation involving individual bones, singly or in combination.",
    "arabic_definition": "خَلَلُ التَّعَظُّم أو سُوءُ التَّعَظُّم أو خَلَلُ تَكْوين العِظام أو عُسر التَعظم (الإنجليزية: Dysostosis) هوَ اضطراب في تطور العَظم وخصوصاً يؤثر على عملية التعظم. من الأمثلة على هذه الحالة متلازمة كروزن ومتلازمة كليبل فيل ومتلازمة روبينشتاين - تايبي، ويُعتبر هذا الخَلل واحد من التصنيفين الخاصين باضطرابات بنيوية العَظم (الاضطراب الآخر هوَ خلل التنسج العظمي الغضروفي. (Dysostoses)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004413.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "contracture",
    "term_en": "Contracture",
    "term_ar": "تقفع",
    "synonyms": [
      "Contractures",
      "تقفع (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Prolonged shortening of the muscle or other soft tissue around a joint, preventing movement of the joint.",
    "arabic_definition": "التقفع (الإنجليزية: Contracture) هو قصر أو انكماش دائم في العضلات أو المفاصل. يؤدي إلى ثبات طرف من الأطراف الأربعة على وضعية معينة بصورة دائمة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003286.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sialorrhea",
    "term_en": "Sialorrhea",
    "term_ar": "فرط الإلعاب",
    "synonyms": [
      "Hypersalivation",
      "Drooling"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Increased salivary flow.",
    "arabic_definition": "فَرْطُ الإِلْعاب هو زيادة في كمية إفراز اللعاب من الفم. والتي قد تكون ناجمة أيضًا عن انخفاض تصريف اللعاب. (Sialorrhea)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012798.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "overweight",
    "term_en": "Overweight",
    "term_ar": "فرط الوزن",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A status with BODY WEIGHT that is above certain standards. In the scale of BODY MASS INDEX, overweight is defined as having a BMI of 25.0-29.9 kg/m2. Overweight may or may not be due to increases in body fat (ADIPOSE TISSUE), hence overweight does not equal over fat.",
    "arabic_definition": "تعتبر الصحة العالمية فرط الوزن (الإنجليزية: overweight) وباء يجتاح العالم.لأن الملايين سوف يعانون من أمراض خطيرة لها صلة بفرط الوزن التي تعد حالة معقدة لها أبعادها الاجتماعية والنفسية بين كل الأعمار. وتصيب 300 مليون في العالم من بينهم 20 مليون تحت سن 18 سنة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050177.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heat-stroke",
    "term_en": "Heat Stroke",
    "term_ar": "ضربة الشمس",
    "synonyms": [
      "Heat Strokes",
      "Stroke, Heat",
      "Heatstroke",
      "Heatstrokes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by the failure of body to dissipate heat in an excessively hot environment or during PHYSICAL EXERTION in a hot environment. Contrast to HEAT EXHAUSTION, the body temperature in heat stroke patient is dangerously high with red, hot skin accompanied by DELUSIONS; CONVULSIONS; or COMA. It can be a life-threatening emergency and is most common in infants and the elderly.",
    "arabic_definition": "الرَّعْن أو ضربة الشمس أو ضربة الحر، هو نوع من أمراض الحرارة الشديدة والتي تؤدي إلى ارتفاع درجة حرارة الجسم لأكثر من 40.0 درجة مئوية (104.0 درجة فهرنهايت)، يعرف باسم فرط الحرارة، إلى جانب أحمرار الجلد، صداع، دوخة، وارتباك. التعرق موجود بشكل عام في ضربة الشمس المُجهدة، ولكن ليس في ضربة الشمس الكلاسيكية. (Heat Stroke)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018883.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "poisoning",
    "term_en": "Poisoning",
    "term_ar": "تسمم",
    "synonyms": [
      "Poisonings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition or physical state produced by the ingestion, injection, inhalation of or exposure to a deleterious agent.",
    "arabic_definition": "التَسمُم هو دخول أي مادة ضارة (طبيعية أو مصنعة) أو ملوثة إلى الجسم بكمية معينة فتحدث أضراراً داخل الجسم. ويمكن أن يكون: عن طريق الاٍستنشاق عن طريق الأكل عن طريق اللمس (الجلد) عن طريق الحقن المباشر في الدم الجاري في الأوعية الدموية تسمم الاٍختناق التسممات الغذائية التسممات الدوائية الاٍدمان التسميم الاٍجرامي و السـم هو مـادة تدخـل الجسـم بكميات كافيـة لأحداث ضـرر مؤقت أو دائـم. (Poisoning)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011041.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lead-poisoning",
    "term_en": "Lead Poisoning",
    "term_ar": "تسمم بالرصاص",
    "synonyms": [
      "Poisoning, Lead",
      "Lead Poisonings",
      "Poisonings, Lead"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Poisoning that results from chronic or acute ingestion, injection, inhalation, or skin absorption of LEAD or lead compounds.",
    "arabic_definition": "التسمم بالرصاص هو نوع من أنواع التسمم المعدني الناجم عن تراكم الرصاص في الجسم. يعتبر الدماغ هو أكثر الأعضاء حساسية للرصاص. (Lead Poisoning)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007855.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tennis-elbow",
    "term_en": "Tennis Elbow",
    "term_ar": "مرفق لاعب التنس",
    "synonyms": [
      "Elbow, Tennis",
      "Tennis Elbows",
      "Lateral Epicondylitis",
      "Epicondylitides, Lateral",
      "Epicondylitis, Lateral",
      "Lateral Epicondylitides",
      "Epicondylitis, Lateral Humeral",
      "Epicondylitides, Lateral Humeral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by pain in or near the lateral humeral epicondyle or in the forearm extensor muscle mass as a result of unusual strain. It occurs due repetitive stresses on the elbow from activities such as tennis playing.",
    "arabic_definition": "مرفق لاعب التنس أو التهاب لقيمة العضد الوحشية (الجانبية) (الإنجليزية: Tennis elbow أو lateral epicondylitis) هي حالة مرضية يكون فيها الجزء الخارجي من المرفق ملتهب ومؤلم. مرفق لاعب التنس هو التهاب حاد أو مزمن في الأوتار التي تربط عضلات الساعد على الجزء الخارجي من المرفق (لقيمة العضد الوحشية).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013716.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tick-bites",
    "term_en": "Tick Bites",
    "term_ar": "لبوديات الشكل",
    "synonyms": [
      "Bites, Tick",
      "Bite, Tick",
      "Tick Bite",
      "Tick"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The effects, both local and systemic, caused by the bites of TICKS.",
    "arabic_definition": "القُرَاد وتُسمَّى الحَلَم واحدتها حلمة اسم شائع لكائنات مفصلية الأرجل صغيرة الحجم تعود لصف العنكبيات فهي ذات ثمانية أرجل وتنتمي لفصيلة ال «لوكسويد» والتي تقسّم لمئات الأنواع. (Tick Bites)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064927.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactic-acidosis",
    "term_en": "Lactic Acidosis",
    "term_ar": "حماض لاكتيكي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acidosis caused by accumulation of lactic acid more rapidly than it can be metabolized. It may occur spontaneously or in association with diseases such as DIABETES MELLITUS; LEUKEMIA; or LIVER FAILURE.",
    "arabic_definition": "الحماض اللاكتيكي (الإنجليزية: Lactic acidosis) هو حالة طبية تتميز بتراكم حمض اللاكتيك (خاصة النوع L) في الجسم، مما يؤدي إلى انخفاض درجة الأس الهيدروجيني بشكل مفرط في مجرى الدم مسببا الحماض. يُمثل الحماض اللاكتيكي شكل من أشكال الحماض الأيضي، الناتج عن التراكم المفرط لحمض اللاكتيك بسبب مشكلة في أيض حمض اللاكتيك.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000140.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperventilation",
    "term_en": "Hyperventilation",
    "term_ar": "فرط تنفس",
    "synonyms": [
      "Hyperventilations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pulmonary ventilation rate faster than is metabolically necessary for the exchange of gases. It is the result of an increased frequency of breathing, an increased tidal volume, or a combination of both. It causes an excess intake of oxygen and the blowing off of carbon dioxide.",
    "arabic_definition": "فرط التنفس (الإنجليزية: Hyperventilation) (تترجم حرفيًا بفرط التهوية) هو زيادة وتيرة التنفس عن الحاجة العضوية. يرافق هذه الزيادة نقص في الضغط الجزئي لثاني أكسيد الكربون المُذاب في الدم، مما يرفع من قلوية (يقلل من حموضة الدم) ويدعى ذلك بالقلو التنفسي، وقد يؤدي إلى التكزز.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006985.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperferritinemia",
    "term_en": "Hyperferritinemia",
    "term_ar": "فيريتين",
    "synonyms": [
      "Hyperferritinemias",
      "Elevated Serum Ferritin",
      "Serum Ferritin, Elevated",
      "Raised Serum Ferritin",
      "Serum Ferritin, Raised",
      "Ultrahyperferritinemia",
      "Ultrahyperferritinemias",
      "Dysmetabolic Hyperferritinemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A finding of elevated serum level of FERRITIN. It is often associated with IRON OVERLOAD, repeated blood transfusions, malignancy, iron metabolic syndromes, virus infection, liver injury or dysfunction, and renal failure. Hyperferritinemia in iron metabolic syndromes (e.g., Still's diseases, and HEMOPHAGOCYTIC SYNDROME) is referred to as dysmetabolic hyperferritinemia.",
    "arabic_definition": "فيريتين (الإنجليزية: Ferritin) هو بروتين يوجد داخل الخلايا، يتحكم في تخزين وإطلاق الحديد، يعكس الفيريتين حالة الحديد في الجسم، فكلما زادت نسبته في المصل، دل ذلك على زيادة الحديد في الجسم والعكس. تُنْتج جميع الكائنات الحية -تقريبا- الفيريتين، بما في ذلك الطحالب، البكتريا، النباتات الوعائية، الحيوانات. (Hyperferritinemia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000085583.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypercholesterolemia",
    "term_en": "Hypercholesterolemia",
    "term_ar": "فرط كولسترول الدم",
    "synonyms": [
      "Hypercholesterolemias",
      "Hypercholesteremia",
      "Hypercholesteremias",
      "Elevated Cholesterol",
      "Cholesterol, Elevated",
      "Cholesterols, Elevated",
      "Elevated Cholesterols",
      "High Cholesterol Levels"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition with abnormally high levels of CHOLESTEROL in the blood. It is defined as a cholesterol value exceeding the 95th percentile for the population.",
    "arabic_definition": "فرط كولسترول الدم (الإنجليزية: Hypercholesterolemia) (ارتفاع كولسترول الدم أو اضطراب الدهون في الدم) وهو ارتفاع نسبة الكولسترول الموجودة في الدم، وهو نوع من أنواع فرط دهون الدم «ارتفاع مستوى الدهون في الدم» وفرط بروتينات الدم الدهنية «ارتفاع نسبة بروتينات الدم الدهنية». فرط شحميات الدم هو أحد أشكاله والتي يحصل فيها زيادة الدهون في الدم، وفرط بروتينات الدم الشحمية وهو الزيادة في البروتينات الدهنية.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006937.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spondylarthritis",
    "term_en": "Spondylarthritis",
    "term_ar": "التهاب فقاري مفصلي لاصق",
    "synonyms": [
      "Spondylarthritides",
      "Arthritis, Spinal",
      "Spinal Arthritis",
      "Spinal Arthritides",
      "Spondyloarthritis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the joints of the SPINE, the intervertebral articulations.",
    "arabic_definition": "الالتهاب الفقاري المفصلي اللاصق (بالإنجليزية spondyloarthropathy أو spondyloarthrosis) مصطلح يشير إلى داء مفصلي يصيب العمود الفقري، وهو صنف أو فئة من الأمراض وليس مرضًا منفردًا محددًا بذاته. يختلف هذا الداء عن اعتلال الفقار الذي يصيب الفقرة بحد ذاتها، لكن العديد من الحالات تصاب بكلا المرضين معًا. (Spondylarthritis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D025241.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypertriglyceridemia",
    "term_en": "Hypertriglyceridemia",
    "term_ar": "فرط ثلاثي غليسيريد الدم",
    "synonyms": [
      "Hypertriglyceridemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of elevated levels of TRIGLYCERIDES in the blood.",
    "arabic_definition": "فَرْطُ ثُلاثِيِّ غليسيريدِ الدَّم أو فرط ثلاثي غليسريدات الدم (الإنجليزية: Hypertriglyceridemia) يدل على ارتفاع (هايبر) مستويات الدم (-دميا) من الدهون الثلاثية، و الجزيء الدهني الأكثر وفرة في معظم الكائنات الحية. وترتبط مستويات مرتفعة من الدهون الثلاثية مع تصلب الشرايين، حتى في غياب ارتفاع الكولسترول (ارتفاع مستويات الكوليسترول في الدم)، وتهيئ لأمراض القلب والأوعية الدموية.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015228.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperphosphatemia",
    "term_en": "Hyperphosphatemia",
    "term_ar": "فرط فوسفاتات الدم",
    "synonyms": [
      "Hyperphosphatemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of abnormally high level of PHOSPHATES in the blood, usually significantly above the normal range of 0.84-1.58 mmol per liter of serum.",
    "arabic_definition": "فَرط فُوسفاتات الدَّم (الإنجليزية: Hyperphosphatemia)، هوَ اضطراب كَهرلي مَصحوب بارتفاع غير طَبيعي في مستوى فوسفات الدَم، وغالباً ما يُرافق ذلك نَقص في كالسيوم الدَم نتيجة لِترسب الفُوسفات مع الكاسيوم في أنسجة الجِسم المُختلفة. المستوى الطبيعي للفوسفات في الدَم يتراوح ما بين 0.81 مل مول/لتر وَ1.45 مل مول/لتر.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054559.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypophosphatemia",
    "term_en": "Hypophosphatemia",
    "term_ar": "نقص فوسفات الدم",
    "synonyms": [
      "Hypophosphatemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of an abnormally low level of PHOSPHATES in the blood.",
    "arabic_definition": "نقص فوسفات الدم (الإنجليزية: Hypophosphatemia) هو اضطراب في كهارل الدم حيث يصبح مستوى الفوسفات منخفض بشكل غير طبيعي في الدم. يحدث عندما يصبح مستوى الفوسفات أقل من 2.5 ملغ / ديسيلتر (0.8 مليمول / لتر).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017674.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dry-socket",
    "term_en": "Dry Socket",
    "term_ar": "التهاب العظم السنخي",
    "synonyms": [
      "Dry Sockets",
      "Socket, Dry",
      "Sockets, Dry",
      "Alveolar Osteitis",
      "Alveolar Osteitides",
      "Osteitides, Alveolar",
      "Osteitis, Alveolar",
      "Alveolar Periostitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition sometimes occurring after tooth extraction, particularly after traumatic extraction, resulting in a dry appearance of the exposed bone in the socket, due to disintegration or loss of the blood clot. It is basically a focal osteomyelitis without suppuration and is accompanied by severe pain (alveolalgia) and foul odor. (Dorland, 28th ed)",
    "arabic_definition": "التهاب العَظْمِ السِّنْخِيّ هو التهاب العظم السنخي (أي النتوء السنخيّ للفك السفلي أو العلوي). وبالعادة يحدث الالتهاب كمضاعفات ما بعد اقتلاع الأسنان. (Dry Socket)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004368.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spondylolisthesis",
    "term_en": "Spondylolisthesis",
    "term_ar": "انزلاق الفقار",
    "synonyms": [
      "Spondylolistheses",
      "Spondylisthesis",
      "Spondylistheses",
      "Olisthesis",
      "Olistheses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Forward displacement of a superior vertebral body over the vertebral body below.",
    "arabic_definition": "انزلاق الفقار (الإنجليزية: Spondylolisthesis) هي حالة تنزلق فيها الفقرة العليا إلى الأمام على الفقرة التي تحتها ويتواجد في كثير من الأحوال في مستوى الفقرة القطنية الخامسة والعجزية الأولى. انحلال الفقار هو المسبب الشائع لهذة الحالة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013168.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperlipoproteinemias",
    "term_en": "Hyperlipoproteinemias",
    "term_ar": "فرط شحميات الدم",
    "synonyms": [
      "Hyperlipoproteinemia",
      "Hyperlipidemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Conditions with abnormally elevated levels of LIPOPROTEINS in the blood. They may be inherited, acquired, primary, or secondary. Hyperlipoproteinemias are classified according to the pattern of lipoproteins on electrophoresis or ultracentrifugation.",
    "arabic_definition": "فرط شحميات الدم أو فرط بروتينات الدم الشحمية هو حالة ارتفاع مستويات أي أو كل من الدهون بشكل غير طبيعي أو البروتين الدهني في الدم وهو الشكل الأكثر شيوعا من ارتفاع مستويات الدهون في الدم، (الذي أيضا يتضمن أي انخفاض مستويات الدهون). تنقل الدهون (جزيئيات الدهون القابلة للذوبان) في غشاء البروتين ويحدد كثافته حجم تلك الكبسولة أو البروتين الدهني. (Hyperlipoproteinemias)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006951.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteochondrosis",
    "term_en": "Osteochondrosis",
    "term_ar": "داء عظمي غضروفي",
    "synonyms": [
      "Osteochondroses",
      "Koehler Disease",
      "Koehler's Disease",
      "Koehlers Disease",
      "Navicular Osteochondrosis",
      "Navicular Osteochondroses",
      "Osteochondroses, Navicular",
      "Osteochondrosis, Navicular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any of a group of bone disorders involving one or more ossification centers (EPIPHYSES). It is characterized by degeneration or NECROSIS followed by revascularization and reossification. Osteochondrosis often occurs in children causing varying degrees of discomfort or pain. There are many eponymic types for specific affected areas, such as tarsal navicular (Kohler disease) and tibial tuberosity (Osgood-Schlatter disease).",
    "arabic_definition": "داء عظمي غضروفي (الإنجليزية: Osteochondrosis) هي مجموعة من أمراض العظام التي تصيب المفصل الذي يحدث عند الأطفال والمراهقين والحيوانات الأخرى سريعة النمو، وخاصة الخنازير والخيول والكلاب والدجاج اللاحم، وهي تتميز بانقطاع الإمداد الدموي للعظام، وخاصةً للكردوس، تليها نخر عظمي موضعي، وفيما بعد، نمو العظم، يُعرّف هذا الاضطراب بأنه اضطراب محوري في تعظّم داخل الغضروف ويُعتبر سببًا متعدد العوامل، لذلك لا يوجد شيء واحد يفسر جميع جوانب هذا المرض.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055034.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemopneumothorax",
    "term_en": "Hemopneumothorax",
    "term_ar": "استرواح صدري دموي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Collection of air and blood in the pleural cavity.",
    "arabic_definition": "الاسترواح الصدري الدموي (الإنجليزية: Hemopneumothorax) هي حالةٌ يتواجد فيها هواءٌ في جوف الصدر (استرواح الصدر) مع دمٍ في التجويف الصدري (تدمي الصدر). قد يحدث استرواح الصدر أو تدمي الصدر أو كلاهما نتيجةً لإصابةٍ في الرئة أو الصدر.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006468.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asthenozoospermia",
    "term_en": "Asthenozoospermia",
    "term_ar": "وهن النطاف",
    "synonyms": [
      "Astheno Teratozoospermia",
      "Astheno Teratozoospermias",
      "Teratozoospermia, Astheno",
      "Teratozoospermias, Astheno",
      "Asthenoteratozoospermia",
      "Asthenoteratozoospermias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition in which the percentage of motile sperm is abnormally low.",
    "arabic_definition": "وهن النطاف (الإنجليزية: Asthenozoospermia) هو مصطلح طبي يشير إلى نقص في قابلية حركة النطف. وهن النطاف التام هو قذف نطف غير متحركة نسبتها 100٪ في السائل المقذوف، وتحدث هذه الحالة بنسبة رجل من كل 5000 رجل.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053627.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heel-spur",
    "term_en": "Heel Spur",
    "term_ar": "مهماز العقب",
    "synonyms": [
      "Heel Spurs",
      "Spur, Heel",
      "Spurs, Heel",
      "Calcaneal Spur",
      "Calcaneal Spurs",
      "Spur, Calcaneal",
      "Spurs, Calcaneal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A bony outgrowth on the lower surface of the CALCANEUS. Though often presenting along with plantar fasciitis (FASCIITIS, PLANTAR), they are not considered causally related.",
    "arabic_definition": "يُعد مِهْمازُ العَقِب أو المهماز العقبي (المعروف خطأً أيضًا باسم مهماز الكعب، انظر الكعب) انتباتًا عظميًا من الأحدوبة العقبية (عظم العقب). تُكشف المهاميز العقبية عادةً من طريق الفحص بالأشعة السينية، وتمثل شكلًا من أشكال العرن. (Heel Spur)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D036982.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydropneumothorax",
    "term_en": "Hydropneumothorax",
    "term_ar": "استرواح الصدر الموهي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A collection of fluid and gas within the pleural cavity. (Dorland, 27th ed)",
    "arabic_definition": "استرواح الصدر الموهي (الإنجليزية: Hydropneumothorax) هو وجود هواء وسائل في تجويف الجنبة المحيط بالرئة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006872.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enchondromatosis",
    "term_en": "Enchondromatosis",
    "term_ar": "ورام غضروفي باطن",
    "synonyms": [
      "Enchondromatoses",
      "Enchondroma, Multiple",
      "Enchondromas, Multiple",
      "Multiple Enchondroma",
      "Multiple Enchondromas",
      "Enchondromatosis, Multiple",
      "Enchondrosis, Multiple",
      "Enchondroses, Multiple"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Benign growths of cartilage in the metaphyses of several bones.",
    "arabic_definition": "ورام غضروفي باطن أو ورام غضروفي داخلي (الإنجليزية: Enchondromatosis) هو شكل من أشكال خلل التنسج العظمي الغضروفي ويتميز بتكاثر الورم الغضروفي الباطن. يُمكن اعتبار داء أوليير مُرادف للورام الغضروفي الباطن.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004687.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "teratozoospermia",
    "term_en": "Teratozoospermia",
    "term_ar": "إمساخ نطفي",
    "synonyms": [
      "Teratozoospermias",
      "Teratospermia",
      "Teratospermias",
      "Abnormal Spermatozoa",
      "Abnormal Spermatozoas",
      "Spermatozoa, Abnormal",
      "Spermatozoas, Abnormal",
      "Globozoospermia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Conditions in which sperm show abnormal morphology.",
    "arabic_definition": "الإمساخ النطفي (الإنجليزية: Teratospermia أو teratozoospermia) هي حالة تمتاز بوجود نطف ذات تشكل شاذ مما يؤثر على خصوبة الرجل.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000072660.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteoradionecrosis",
    "term_en": "Osteoradionecrosis",
    "term_ar": "النخر العظمي إشعاعي المنشأ",
    "synonyms": [
      "Osteoradionecroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Necrosis of bone following radiation injury.",
    "arabic_definition": "يعتبر النخر العظمي إشعاعي المنشأ (ORN) من المضاعفات الخطيرة للعلاج الإشعاعي للسرطان، إذ تصبح العظام المعرضة للأشعة متنخرة ومكشوفة. يحدث النخر العظمي إشعاعي المنشأ بشكل شائع في الفم أثناء علاج سرطان الرأس والرقبة، ويمكن أن يظهر خلال 5 سنوات بعد الإشعاع. (Osteoradionecrosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010025.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chondrocalcinosis",
    "term_en": "Chondrocalcinosis",
    "term_ar": "نقرس كاذب",
    "synonyms": [
      "Chondrocalcinoses",
      "Calcium Pyrophosphate Deposition Disease",
      "Pseudogout",
      "Calcium Pyrophosphate Dihydrate Deposition"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Presence of CALCIUM PYROPHOSPHATE in the connective tissues such as the cartilaginous structures of joints. When accompanied by GOUT-like symptoms, it is referred to as pseudogout.",
    "arabic_definition": "كُلاَسُ الغَضاريف (الإنجليزية: Chondrocalcinosis) ويسمى أيضاً النِقْرِسٌ الكاذِب (الإنجليزية: Pseudogout) هو أحد الأمراض الروماتيزمية والذي ينشأ نتيجة توضّع حبيبات بيروفيت الكالسيوم داخل الأنسجة الضامة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002805.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypoglycemia",
    "term_en": "Hypoglycemia",
    "term_ar": "نقص سكر الدم",
    "synonyms": [
      "Fasting Hypoglycemia",
      "Hypoglycemia, Fasting",
      "Postabsorptive Hypoglycemia",
      "Hypoglycemia, Postabsorptive",
      "Postprandial Hypoglycemia",
      "Hypoglycemia, Postprandial",
      "Reactive Hypoglycemia",
      "Hypoglycemia, Reactive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome of abnormally low BLOOD GLUCOSE level. Clinical hypoglycemia has diverse etiologies. Severe hypoglycemia eventually lead to glucose deprivation of the CENTRAL NERVOUS SYSTEM resulting in HUNGER; SWEATING; PARESTHESIA; impaired mental function; SEIZURES; COMA; and even DEATH.",
    "arabic_definition": "نقص سكر الدم ويسمى أيضًا هبوط سكر الدم، هو انخفاض في نسبة السكر في الدم إلى مستويات أقل من المعتاد، عادة ما تكون أقل من 70 ملغ/ديسيلتر (3.9 مليمول/لتر). يستخدم ثالوث ويبل لتحديد نوبات نقص السكر في الدم بشكل صحيح. (Hypoglycemia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007003.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteoporosis",
    "term_en": "Osteoporosis",
    "term_ar": "هشاشة العظام",
    "synonyms": [
      "Osteoporoses",
      "Osteoporosis, Age-Related",
      "Age-Related Osteoporosis",
      "Age-Related Osteoporoses",
      "Osteoporoses, Age-Related",
      "Bone Loss, Age-Related",
      "Age-Related Bone Loss",
      "Age-Related Bone Losses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Reduction of bone mass without alteration in the composition of bone, leading to fractures. Primary osteoporosis can be of two major types: postmenopausal osteoporosis (OSTEOPOROSIS, POSTMENOPAUSAL) and age-related or senile osteoporosis.",
    "arabic_definition": "هشاشة العظام أو تخلخل العظم هو مرض روماتيزمي سببه انخفاض في كثافة العظام أو رقاقتها بالهيكل العظمي. وهي حالة تصيب نصف السيدات وثلث الرجال فوق سن السبعين، تكون مصحوبة لآلام شديدة، وتجعلهم معرضين للكسور. (Osteoporosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010024.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "decapitation",
    "term_en": "Decapitation",
    "term_ar": "قطع الرأس",
    "synonyms": [
      "Decapitations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Traumatic or experimentally induced separation of the head from the body in an animal or human.",
    "arabic_definition": "القطع الكامل للرأس أو الفصل الكامل للرأس (بالإنجليزية: Decapitation)، هي عملية فصل الرأس تمامًا عن الجسد، وهي إصابة قاتلة بشكل حتمي لدى البشر وجميع الفقاريات. يؤدي هذا الفصل إلى انقطاع تدفق الدم إلى الدماغ عبر قطع الوريد الوداجي والشريان السُّباتي العام، كما تُحرَم باقي الأعضاء من الوظائف اللاإرادية الضرورية لاستمرار عمل الجسم.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049248.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperglycemia",
    "term_en": "Hyperglycemia",
    "term_ar": "فرط سكر الدم",
    "synonyms": [
      "Hyperglycemias",
      "Hyperglycemia, Postprandial",
      "Hyperglycemias, Postprandial",
      "Postprandial Hyperglycemias",
      "Postprandial Hyperglycemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormally high BLOOD GLUCOSE level.",
    "arabic_definition": "فرط سكر الدم (الإنجليزية: Hyperglycemia) هو الحالة التي تتواجد فيها كمية كبيرة من الجلوكوز في بلازما الدم. وذلك عندما يكون مستوى السكر في الدم أعلى من 11.1 مل مول/لتر (200 ملغ/ ديسيلتر)، ولكن قد لا تبدأ الأعراض لتصبح ملحوظة حتى يصل لقيم أعلى مثل 15-20 مل مول/لتر (~250-300 ملغ/ ديسيلتر).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006943.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "periodontitis",
    "term_en": "Periodontitis",
    "term_ar": "التهاب دواعم السن",
    "synonyms": [
      "Periodontitides",
      "Pericementitis",
      "Pericementitides",
      "Periodontal disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation and loss of connective tissues supporting or surrounding the teeth. This may involve any part of the PERIODONTIUM. Periodontitis is currently classified by disease progression (CHRONIC PERIODONTITIS; AGGRESSIVE PERIODONTITIS) instead of age of onset. (From 1999 International Workshop for a Classification of Periodontal Diseases and Conditions, American Academy of Periodontology)",
    "arabic_definition": "التهاب دواعم السن (الإنجليزية: Periodontal diseases) أو أمراض دواعم السن (الإنجليزية: Periodontal diseases) مجموعة من الالتهابات التي تؤثر على دواعم السن؛ النسيج الداعم المحيط بالأسنان. تتضمن هذه الالتهابات خسارة تدريجية في العظم السنخي المحيط بالأسنان، وإذا لم تُعالج قد تؤدي إلى تساقط الأسنان المتلاحق. (Periodontitis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010518.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyponatremia",
    "term_en": "Hyponatremia",
    "term_ar": "نقص صوديوم الدم",
    "synonyms": [
      "Hyponatremias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Deficiency of sodium in the blood; salt depletion. (Dorland, 27th ed)",
    "arabic_definition": "نقص صوديوم الدم (بالإنجليزية: Hyponatremia)، هو تركيز منخفض الصوديوم في الدم. يتم تعريفه بشكل عام على أنه تركيز الصوديوم أقل من 135 مليمول/لتر، مع نقص صوديوم الدم الشديد أقل من 120 مليمول/لتر.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007010.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paraphimosis",
    "term_en": "Paraphimosis",
    "term_ar": "اختناق القلفة الخلفي",
    "synonyms": [
      "Paraphimoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition in which the FORESKIN, once retracted, cannot return to its original position. If this condition persists, it can lead to painful constriction of GLANS PENIS, swelling, and impaired blood flow to the penis.",
    "arabic_definition": "اختناق القلفة الخلفي أو الجُلاع أو جُلاع القلفة (الإنجليزية: Paraphimosis) هو حالة طبية غير شائعة حيث تكون الغُرْلة (جلدة الذكر) محصورة خلف حشفة القضيب، ولا يمكن إعادتها لوضعها الطبيعي. إذا استمرت هذه الحالة لعدة ساعات أو كانت هناك أي علامة على نقص تدفق الدم، فيجب التعامل معها كحالة طبية طارئة، حيث يمكن أن تؤدي إلى الغرغرينا.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010263.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhabdomyolysis",
    "term_en": "Rhabdomyolysis",
    "term_ar": "انحلال الربيدات",
    "synonyms": [
      "Rhabdomyolyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Necrosis or disintegration of skeletal muscle often followed by myoglobinuria.",
    "arabic_definition": "انحلال الرُّبَيْدَات Rhabdomyolysis هي متلازمة سريرية حيويَّة ناجمة عن انحلال العضلات المخططة أو الربيدات، وما ينتج عن ذلك من تحرر المواد الموجودة بداخلها وانتشارها في الدم والسائل خارج الخلوي. تتفاوت الخطورة بين حالة وأخرى، بين الارتفاع المعزول للكرياتين فوسفوكيناز (Creatine Phosphokinase -CPK) إلى ما قد يهدد الحياة بسبب فرط بوتاسيوم الدم والقصور الكلوي الحاد والتخثر المنتشر داخل الأوعية الدموية والاضطرابات الهامة لكهارل الدم.أكثر الأسباب المعروفة هي الانضغاط المديد للأطراف، إلا أنه يجب ألا يغيب عن البال الأسباب الأخرى المتنوعة كعوز بعض الأنزيمات، والأخماج الشديدة، والتسممات، وبعض الأدوية الخافضة للكوليسترول.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012206.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tendinopathy",
    "term_en": "Tendinopathy",
    "term_ar": "التهاب الأوتار",
    "synonyms": [
      "Tendinopathies",
      "Tendonopathy",
      "Tendonopathies",
      "Tendinitis",
      "Tendinitides",
      "Tendonitis",
      "Tendonitides",
      "Tendinosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Clinical syndrome describing overuse tendon injuries characterized by a combination of PAIN, diffuse or localized swelling, and impaired performance.",
    "arabic_definition": "التهاب الأوتار (الإنجليزية: tendonitis) هو نوع من اضطرابات الأوتار يؤدي إلى الألم والتورم وضعف الوظيفة. الألم عادة ما يكون أسوأ مع الحركة. (Tendinopathy)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052256.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "malnutrition",
    "term_en": "Malnutrition",
    "term_ar": "سوء التغذية",
    "synonyms": [
      "Malnourishment",
      "Malnourishments",
      "Undernutrition",
      "Nutritional Deficiency",
      "Nutritional Deficiencies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An imbalanced nutritional status resulting from insufficient intake of nutrients to meet normal physiological requirement.",
    "arabic_definition": "سوء التغذية أو الصَّغَل يحدث عندما يحصل الفرد على عدد قليل جدا أو الكثير من العناصر الغذائية، مما يؤدي إلى مشاكل صحية. على وجه التحديد، «نقص أو زيادة أو اختلال توازن الطاقة، البروتين والمواد المغذية الأخرى» هو الذي يؤثر سلبا على أنسجة الجسم وشكله. (Malnutrition)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044342.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tenosynovitis",
    "term_en": "Tenosynovitis",
    "term_ar": "التهاب زليل الوتر",
    "synonyms": [
      "Tenosynovitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the synovial lining of a tendon sheath. Causes include trauma, tendon stress, bacterial disease (gonorrhea, tuberculosis), rheumatic disease, and gout. Common sites are the hand, wrist, shoulder capsule, hip capsule, hamstring muscles, and Achilles tendon. The tendon sheaths become inflamed and painful, and accumulate fluid. Joint mobility is usually reduced.",
    "arabic_definition": "التهاب زليل الوتر هو التهاب الوتر المتميز بالتهاب في الوتر وغِشاءُه الزَّليلِيّ. هذا المرض الروماتيزمي يمكن أن يؤثر على جميع المناطق الوترية (القدم، الكتف واليد). (Tenosynovitis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013717.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pneumothorax",
    "term_en": "Pneumothorax",
    "term_ar": "استرواح الصدر",
    "synonyms": [
      "Pneumothorax, Primary Spontaneous",
      "Primary Spontaneous Pneumothorax",
      "Spontaneous Pneumothorax, Primary",
      "Tension Pneumothorax",
      "Pneumothorax, Tension",
      "Pressure Pneumothorax",
      "Pneumothorax, Pressure",
      "Spontaneous Pneumothorax"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An accumulation of air or gas in the PLEURAL CAVITY, which may occur spontaneously or as a result of trauma or a pathological process. The gas may also be introduced deliberately during PNEUMOTHORAX, ARTIFICIAL.",
    "arabic_definition": "استرواح الصدر أو الاسترواح الصدري أو انكماش الرئتين أو الصدر المثقوب (الإنجليزية: Pneumothorax) هو تجمع غير طبيعي من الهواء في الحيز الجنبي يفصل الرئة عن جدار الصدر. وعادة ما تتضمن الأعراض الإحساس بألم مفاجئ حاد على جانب واحد من الصدر، وضيق في التنفس.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011030.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bronchiectasis",
    "term_en": "Bronchiectasis",
    "term_ar": "توسع القصبات",
    "synonyms": [
      "Bronchiectases",
      "Cylindrical Bronchiectasis",
      "Bronchiectasis, Cylindrical",
      "Cylindrical Bronchiectases",
      "Varicose Bronchiectasis",
      "Bronchiectasis, Varicose",
      "Varicose Bronchiectases",
      "Saccular Bronchiectasis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Persistent abnormal dilatation of the bronchi.",
    "arabic_definition": "توسع القصبات أو توسع الشُّعَب هو مرض تظهر فيه زيادة واضحة في حجم الشعب الهوائية في الرئة. عادة ما تكون الأعراض سعال مزمن رطب ذو قشع. (Bronchiectasis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001987.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pneumoconiosis",
    "term_en": "Pneumoconiosis",
    "term_ar": "تغبر الرئة",
    "synonyms": [
      "Pneumoconioses",
      "Bagassosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A diffuse parenchymal lung disease caused by inhalation of dust and by tissue reaction to their presence. These inorganic, organic, particulate, or vaporized matters usually are inhaled by workers in their occupational environment, leading to the various forms (ASBESTOSIS; BYSSINOSIS; and others). Similar air pollution can also have deleterious effects on the general population.",
    "arabic_definition": "تغبُّر الرئة أو تَتَرُّب الرئة أو الغُباريّة هو دار رئويّ ينشأ عن فَرط استنشاق دقائق الغبار والمعادن. تغبر الرئة هو مرض رئوي مهني ومرض رئوي مقيد يحدث بسبب استنشاق الغبار، غالبا في المناجم. (Pneumoconiosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011009.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypoventilation",
    "term_en": "Hypoventilation",
    "term_ar": "نقص التهوية",
    "synonyms": [
      "Hypoventilations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A reduction in the amount of air entering the pulmonary alveoli.",
    "arabic_definition": "نقص التهوية (الإنجليزية: Hypoventilation) ويعرف أيضًا باسم تدهور الجهاز التنفسي (الإنجليزية: Respiratory depression) يكون نتيجة نقص في كمية الأوكسجين وارتفاع في كمية ثاني أكسيد الكربون في الدم، ويصيب المريض بتهوية رئوية أقل من المطلوب للجسم.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007040.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xanthomatosis",
    "term_en": "Xanthomatosis",
    "term_ar": "ورم أصفر",
    "synonyms": [
      "Xanthomatoses",
      "Xanthoma",
      "Xanthomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition marked by the development of widespread xanthomas, yellow tumor-like structures filled with lipid deposits. Xanthomas can be found in a variety of tissues including the SKIN; TENDONS; joints of KNEES and ELBOWS. Xanthomatosis is associated with disturbance of LIPID METABOLISM and formation of FOAM CELLS.",
    "arabic_definition": "الورم الأصفر أو الصفرومات (الإنجليزية: Xanthomas) هي أورام تفاعلية مصفرة تنجم عن تسرب بروتينات المصل الشحمية عبر جدران الأوعية الدموية إلى الجلد، حيث تبتلعها البلاعم مشكلة خلايا رغوية متفجية بغزارة تدعى خلايا توتون العملاقة. (Xanthomatosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014973.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteoarthritis",
    "term_en": "Osteoarthritis",
    "term_ar": "فصال عظمي",
    "synonyms": [
      "Osteoarthritides",
      "Arthritis, Degenerative",
      "Arthritides, Degenerative",
      "Degenerative Arthritides",
      "Degenerative Arthritis",
      "Osteoarthrosis",
      "Osteoarthroses",
      "Osteoarthrosis Deformans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A progressive, degenerative joint disease, the most common form of arthritis, especially in older persons. The disease is thought to result not from the aging process but from biochemical changes and biomechanical stresses affecting articular cartilage. In the foreign literature it is often called osteoarthrosis deformans.",
    "arabic_definition": "التهاب المفصل التنكسي أو الداء المفصلي التنكسي أو الفُصال أو الفصال العظمي (الإنجليزية: Osteoarthritis) يعتبر من أكثر أمراض العظام انتشاراً، وهو عبارة عن تلف غير قابل للتجدد يصيب الأنسجة الغضروفية المفصلية التي تعمل على تقليل الاحتكاك الناتج من حركة المفاصل الدائمة، وتعمل كوسادة لحماية العظام. تآكل هذه الطبقة الواقية بسبب المرض يؤدي إلى احتكاك الأنسجة العظمية، ويصحب الاحتكاك التهابات تصيب جوف المفصل وتتسبب في الآلام.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010003.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypercalcemia",
    "term_en": "Hypercalcemia",
    "term_ar": "فرط كالسيوم الدم",
    "synonyms": [
      "Hypercalcemias",
      "Milk-Alkali Syndrome",
      "Syndrome, Milk-Alkali",
      "Hypercalcaemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormally high level of calcium in the blood.",
    "arabic_definition": "فرط كالسيوم الدم (الإنجليزية: hypercalcemia) عندما يكون مستوى الكالسيوم في سوائل الجسم عال فإن الجهاز العصبي ينحط وردود الأفعال تصبح بطيئة جدا في الجهاز العصبي. وزيادة معدل الكالسيوم في الدم (المعدل الطبيعي: 8- 10.5 mg/dl).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006934.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dyslipidemias",
    "term_en": "Dyslipidemias",
    "term_ar": "عسر شحميات الدم",
    "synonyms": [
      "Dyslipidemia",
      "Dyslipoproteinemias",
      "Dyslipoproteinemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormalities in the serum levels of LIPIDS, including overproduction or deficiency. Abnormal serum lipid profiles may include high total CHOLESTEROL, high TRIGLYCERIDES, low HIGH DENSITY LIPOPROTEIN CHOLESTEROL, and elevated LOW DENSITY LIPOPROTEIN CHOLESTEROL.",
    "arabic_definition": "عسر شحميات الدم أو اضطراب شحميات الدم (الإنجليزية: Dyslipidemia) هو وجود كميات غير طبيعية من الكوليسترول أو الدهنيات في الدم بسبب الغذاء و نمط الحياة. يعد فرط شحميات الدم أبرز أنواع عسر شحميات الدم في الدول المتقدمة. (Dyslipidemias)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050171.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteosclerosis",
    "term_en": "Osteosclerosis",
    "term_ar": "تصلب العظم",
    "synonyms": [
      "Osteoscleroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormal hardening or increased density of bone tissue.",
    "arabic_definition": "تصلب العظم (الإنجليزية: Osteosclerosis) هو الزيادة في تركيز العظم. يمكن الكشف عنه بواسطة التصوير الشعاعي حيث تظهر المنطقة أشد ظلمة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010026.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteopetrosis",
    "term_en": "Osteopetrosis",
    "term_ar": "تصخر العظم",
    "synonyms": [
      "Osteopetroses",
      "Albers-Schonberg Disease",
      "Disease, Albers-Schonberg",
      "Albers-Schönberg Disease",
      "Disease, Albers-Schönberg",
      "Albers-Schoenberg Disease",
      "Disease, Albers-Schoenberg"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive formation of dense trabecular bone leading to pathological fractures; OSTEITIS; SPLENOMEGALY with infarct; ANEMIA; and extramedullary hemopoiesis (HEMATOPOIESIS, EXTRAMEDULLARY).",
    "arabic_definition": "تصخر العظم (الإنجليزية: Osteopetrosis) ويسمى أيضا مرض العظم الرخامي (الإنجليزية: marble bone disease) أو داء ألبرس شونبرغ (الإنجليزية: Albers-Schonberg disease) هو مرض وراثي نادر يتميز بكثافة كالسيوم عالية ولكن هذه الزيادة الشديدة تجعل العظم هشا للغاية وأكثر عرضه للكسور .",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010022.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteomalacia",
    "term_en": "Osteomalacia",
    "term_ar": "تلين العظام",
    "synonyms": [
      "Adult Rickets",
      "Rickets, Adult"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorder caused by an interruption of the mineralization of organic bone matrix leading to bone softening, bone pain, and weakness. It is the adult form of rickets resulting from disruption of VITAMIN D; PHOSPHORUS; or CALCIUM homeostasis.",
    "arabic_definition": "تلين العظام (الإنجليزية: Osteomalacia) هو مرض يصيب الكبار، وعندما يصيب الأطفال يسمى بالرخد (أو الكساح)، يحدث نتيجة نقص في كمية الفيتامين \"د\" المتناول مع الغذاء، وكذلك الكالسيوم. ويؤدي نقص الفيتامين «د» إلى نقص في كمية الكالسيوم والفوسفور الممتصين من الأمعاء، وبالتالي يضطر الجسم لسحب كميات من الكلس من الهيكل العظمي، للمحافظة على مستوى طبيعي لكلس الدم.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010018.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycotoxicosis",
    "term_en": "Mycotoxicosis",
    "term_ar": "السموم الفطرية",
    "synonyms": [
      "Mycotoxicoses",
      "Poisoning, Fungus",
      "Fungus Poisonings",
      "Poisonings, Fungus",
      "Fungus Poisoning",
      "Mycotoxin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Poisoning caused by the ingestion of mycotoxins (toxins of fungal origin).",
    "arabic_definition": "السموم الفطرية (باليوناني μύκης mykes، «الفطر» و τοξικόν toxikon، «السم») هو مستقلب ثانوي سامة تنتجها الكائنات الحية للمملكة الفطريات وقادرة على التسبب في المرض والموت في كل من البشر والحيوانات الأخرى. عادة ما يتم حجز مصطلح «السموم الفطرية» للمنتجات الكيميائية السامة التي تنتجها الفطريات التي تستعمر المحاصيل بسهولة. (Mycotoxicosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015651.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypernatremia",
    "term_en": "Hypernatremia",
    "term_ar": "فرط صوديوم الدم",
    "synonyms": [
      "Hypernatremias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive amount of sodium in the blood. (Dorland, 27th ed)",
    "arabic_definition": "فرط صوديوم الدم (الإنجليزية: Hypernatremia) هو اضطراب في شوارد الدم ينتج من جراء ارتفاع تركيز الصوديوم في مصل الدم، إن التركيز الطبيعي لشوارد الصوديوم في مصل الدم هو 140 م مول/ل، ويعتبر طبيعياً ما بقي بين 135 و 145 ميللي مول/ليتر. وهو نفس تركيزه في السائل الخلالي.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006955.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperinsulinism",
    "term_en": "Hyperinsulinism",
    "term_ar": "فرط الإنسولينية",
    "synonyms": [
      "Hyperinsulinemia",
      "Endogenous Hyperinsulinism",
      "Hyperinsulinism, Endogenous",
      "Exogenous Hyperinsulinism",
      "Hyperinsulinism, Exogenous",
      "Compensatory Hyperinsulinemia",
      "Hyperinsulinemia, Compensatory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome with excessively high INSULIN levels in the BLOOD. It may cause HYPOGLYCEMIA. Etiology of hyperinsulinism varies, including hypersecretion of a beta cell tumor (INSULINOMA); autoantibodies against insulin (INSULIN ANTIBODIES); defective insulin receptor (INSULIN RESISTANCE); or overuse of exogenous insulin or HYPOGLYCEMIC AGENTS.",
    "arabic_definition": "فرط الإنسولينية (الإنجليزية: Hyperinsulinism) يشير إلى وجود الإنسولين في دم شخص أو حيوان بمعدل فوق الطبيعي، إفراز الإنسولين ومستواه في الدم هما أمران مرتبطان جدا بمستوى الجلوكوز في الدم ولذلك كمية معينة من الإنسولين قد تكون مناسبة لمستوى الجلوكوز في الدم لشخص ما لكنها قد تكون أعلى أو أقل من الطبيعي لشخص آخر، فرط الإنسولينية قد يرتبط بالعديد من الأمراض والمشكلات الطبية والتي يمكن تقسيمها لقسمين كبيرين: القسم الأول هو ما يسبب تقليل حساسية الخلايا للإنسولين وبالتالي يرتفع مستوى الجلوكوز في الدم (Hyperglycemia)، والقسم الثاني يسبب زيادة إفراز الإنسولين مما يؤدي لانخفاض مستوى الجلوكوز في الدم (Hypoglycemia).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006946.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spermatocele",
    "term_en": "Spermatocele",
    "term_ar": "قيلة منوية",
    "synonyms": [
      "Spermatoceles",
      "Epididymal Cyst",
      "Cyst, Epididymal",
      "Cysts, Epididymal",
      "Epididymal Cysts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cystic dilation of the EPIDIDYMIS, usually in the head portion (caput epididymis). The cyst fluid contains dead SPERMATOZOA and can be easily differentiated from TESTICULAR HYDROCELE and other testicular lesions.",
    "arabic_definition": "القِيْلَةٌ المَنَوِيَّة أو القيلة النطفية (الإنجليزية: spermatocele)، هي كيسة احتباسية في قنوات الشبكة الخصوية، أو رأس البربخ، منتفخ بسائل مائي ويحتوي على بعض الحيوانات المنوية. القيلة المنوية شائعة نسبياً، وتحدث في ما يقدر بنحو 30 في المئة من جميع الرجال.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013088.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteonecrosis",
    "term_en": "Osteonecrosis",
    "term_ar": "نخر لاوعائي",
    "synonyms": [
      "Osteonecroses",
      "Bone Necrosis",
      "Bone Necroses",
      "Necroses, Bone",
      "Necrosis, Bone",
      "Kienbock Disease",
      "Kienboeck Disease",
      "Kienboeck's Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Death of a bone or part of a bone, either atraumatic or posttraumatic.",
    "arabic_definition": "النخر اللاوعائي (الإنجليزية: Avascular necrosis) ويختصر إلى AVN، ويُسمى أيضا هشاشة العظام أو احتشاء العظام، النخر غير الملوث، نخر العظام الإسكيمي. هو موت الأنسجة العظمية بسبب نقص الإمداد الدموي. (Osteonecrosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010020.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "macroglossia",
    "term_en": "Macroglossia",
    "term_ar": "ضخامة اللسان",
    "synonyms": [
      "Macroglossias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of an excessively large tongue, which may be congenital or may develop as a result of a tumor or edema due to obstruction of lymphatic vessels, or it may occur in association with hyperpituitarism or acromegaly. It also may be associated with malocclusion because of pressure of the tongue on the teeth. (From Jablonski, Dictionary of Dentistry, 1992)",
    "arabic_definition": "ضخامة اللسان أو تضخم اللسان هو اضطرابٌ في حجم اللسان حيث يتضخم ويصبح حجمه أكبر من المعتاد وذلك بسبب زياده كمية الأنسجة في اللسان وليس بسبب ورمٍ، وهو إما تضخم عضلي، أو تضخم لمفي. كما أنها حالةٌ وراثيةٌ وخلقيةٌ وتكون شائعةً في بعض الأضطرابات مثل: ضخامه النهايات، متلازمه بيكويث-فيدمان. (Macroglossia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008260.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "malocclusion",
    "term_en": "Malocclusion",
    "term_ar": "سوء الإطباق",
    "synonyms": [
      "Malocclusions",
      "Tooth Crowding",
      "Crowdings, Tooth",
      "Crowding, Tooth",
      "Crossbite",
      "Crossbites",
      "Cross Bite",
      "Bite, Cross"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Such malposition and contact of the maxillary and mandibular teeth as to interfere with the highest efficiency during the excursive movements of the jaw that are essential for mastication. (Jablonski, Illustrated Dictionary of Dentistry, 1982)",
    "arabic_definition": "سوء الإطباق أو سوء انغلاق الفكين (الإنجليزية: malocclusion) هو مصطلح يطلق على كل حالة إطباق سنية في غير موضعها الطبيعي.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008310.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oligospermia",
    "term_en": "Oligospermia",
    "term_ar": "قلة النطاف",
    "synonyms": [
      "Oligoasthenoteratozoospermia",
      "Oligoasthenoteratozoospermias",
      "Oligozoospermia",
      "Low Sperm Count",
      "Low Sperm Counts",
      "Sperm Count, Low",
      "Sperm Counts, Low",
      "Hypospermatogenesis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of suboptimal concentration of SPERMATOZOA in the ejaculated SEMEN to ensure successful FERTILIZATION of an OVUM. In humans, oligospermia is defined as a sperm count below 20 million per milliliter semen.",
    "arabic_definition": "قلة النطاف (الإنجليزية: Oligospermia أو Oligozoospermia) هي حالة تشير إلى مني منخفض تركيز النطف، وهو حالة شائعة في العقم عند الرجل. أما عندما يحتوي المني على نسبة قليلة من النطف بالإضافة لشذوذ واضح في تركيبها وحركتها فتسمى الحالة «إمساخ ووهن وقلة النطاف» (الإنجليزية: oligoasthenoteratozoospermia).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009845.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metatarsalgia",
    "term_en": "Metatarsalgia",
    "term_ar": "ألم مشط القدم",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pain in the region of the METATARSUS. It can include pain in the METATARSAL BONES; METATARSOPHALANGEAL JOINT; and/or intermetatarsal joints (TARSAL JOINTS).",
    "arabic_definition": "ألم مشط القدم هو ألم في مقدمة القدم أو كرة القدم. يشمل البعض الألم عند قاعدة إصبع القدم الكبير، بينما لا يشمله آخرون. (Metatarsalgia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D037061.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ankyloglossia",
    "term_en": "Ankyloglossia",
    "term_ar": "التصاق اللسان",
    "synonyms": [
      "Ankyloglossias",
      "Tongue Tie",
      "Tongue Ties",
      "Partial Ankyloglossia",
      "Ankyloglossia, Partial",
      "Ankyloglossias, Partial",
      "Partial Ankyloglossias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A severe congenital restriction of TONGUE movement, resulting from fusion or adherence of the tongue to the floor of the mouth. In partial ankyloglossia (tongue-tie) the LINGUAL FRENUM is abnormally short, or is attached too close to the tip of the tongue. OMIM: 106280",
    "arabic_definition": "يعد التصاق اللسان أو اللسان المربوط مشكلة تظهر بعد الولادة وتحدث حينما تصبح الأنسجة الملاصقة للسان والمتصلة بأسفل الفم قصيرة جداً اومتصله بمقدمة اللسان بما يعيق قدرة اللسان على الحركة بحريه. نجد أن نسبة وجود التصاق اللسان تظهر في نحو 5 إلى 10 % من الأطفال حديثي الولادة ويصيب الذكور أكثر من الإناث. (Ankyloglossia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000072676.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "overnutrition",
    "term_en": "Overnutrition",
    "term_ar": "تغذية مفرطة",
    "synonyms": [
      "Hypernutrition"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An imbalanced NUTRITIONAL STATUS resulting from excessive intake of nutrients. Generally, overnutrition generates an energy imbalance between food consumption and energy expenditure leading to disorders such as OBESITY.",
    "arabic_definition": "التغذية المفرطة أو التخمة الغذائية هي شكل من أشكال سوء التغذية الذي يكون فيه تناول العناصر الغذائية بشكل يفوق عن الحاجة. بحيث أنّ كمية العناصر تفوق الكمية المطلوبة للنمو الطبيعي، التطور، والأيض. (Overnutrition)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044343.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudarthrosis",
    "term_en": "Pseudarthrosis",
    "term_ar": "عدم الانجبار",
    "synonyms": [
      "Pseudarthroses",
      "Pseudoarthrosis",
      "Pseudoarthroses",
      "Nonunion"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pathologic entity characterized by deossification of a weight-bearing long bone, followed by bending and pathologic fracture, with inability to form normal BONY CALLUS leading to existence of the false joint that gives the condition its name. (Dorland, 27th ed)",
    "arabic_definition": "عدم الانجبار هو فشل دائم لعملية الالتئام بعد كسر العظم، ومضاعفات خطيره للكسر ومن الممكن حدوثها إذا تحرك الكسر كثيرا. المدمنون على التدخين لديهم معدل اعلي لعدم الانجبار. (Pseudarthrosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011542.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enthesopathy",
    "term_en": "Enthesopathy",
    "term_ar": "اعتلال مرتكز العظم",
    "synonyms": [
      "Enthesopathies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder occurring at the site of insertion of TENDONS or LIGAMENTS into bones or JOINT CAPSULES.",
    "arabic_definition": "اعتلال مرتكز العظم (الإنجليزية: Enthesopathy) هو اضطراب يُصيب ارتباط الوتر أو الرباط مع العظم. موقع الارتباط يُعرف باسم الارتكاز.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000070676.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sacroiliitis",
    "term_en": "Sacroiliitis",
    "term_ar": "التهاب المفصل العجزي الحرقفي",
    "synonyms": [
      "Sacroiliitides",
      "Septic Sacroiliitis",
      "Sacroiliitides, Septic",
      "Sacroiliitis, Septic",
      "Septic Sacroiliitides",
      "Pyogenic Sacroiliitis",
      "Pyogenic Sacroiliitides",
      "Sacroiliitides, Pyogenic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the SACROILIAC JOINT. It is characterized by lower back pain, especially upon walking, fever, UVEITIS; PSORIASIS; and decreased range of motion. Many factors are associated with and cause sacroiliitis including infection; injury to spine, lower back, and pelvis; DEGENERATIVE ARTHRITIS; and pregnancy.",
    "arabic_definition": "التهاب المفصل العجزي الحرقفي هو التهاب داخل المفصل العجزي الحرقفي. وهي سمة من سمات اعتلال المفاصل الفقاري، مثل التهاب المفاصل الفقاري المحوري (بما في ذلك التهاب الفقار اللاصق)، والتهاب المفاصل الصدفي، والتهاب المفاصل التفاعلي أو التهاب المفاصل المرتبط بأمراض الأمعاء الالتهابية، بما في ذلك التهاب القولون التقرحي أو مرض كرون، وهو أيضًا أكثر أعراض داء البروسيلات شيوعًا. (Sacroiliitis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058566.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mediastinitis",
    "term_en": "Mediastinitis",
    "term_ar": "التهاب المنصف",
    "synonyms": [
      "Mediastinitides",
      "Mediastinum Inflammation",
      "Inflammation, Mediastinum",
      "Inflammations, Mediastinum",
      "Mediastinum Inflammations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the mediastinum, the area between the pleural sacs.",
    "arabic_definition": "التهاب المنصف (الإنجليزية: Mediastinitis) هو التهاب الأنسجة في منتصف الصدر، ويمكن أن تكون إما حادة أو مزمنة (Chronic fibrosing mediastinitis).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008480.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pericoronitis",
    "term_en": "Pericoronitis",
    "term_ar": "التهاب ما حول التاج",
    "synonyms": [
      "Pericoronitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the gingiva surrounding the crown of a tooth.",
    "arabic_definition": "التهاب ما حول التاج أو التهاب حوائط التاج أو التهاب محيط التاج (الإنجليزية: Pericoronitis) هو حالة التهاب شائعة في الأعمار بين 17-24 تحدث عندما تحاول الأسنان البزوغ وبخاصة الأرحاء الثالثة (أضراس العقل). وذلك بسبب تجرثم النسج حول السن.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010497.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spondylolysis",
    "term_en": "Spondylolysis",
    "term_ar": "انحلال الفقار",
    "synonyms": [
      "Spondylolyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Deficient development or degeneration of a portion of the VERTEBRA, usually in the pars interarticularis (the bone bridge between the superior and inferior facet joints of the LUMBAR VERTEBRAE) leading to SPONDYLOLISTHESIS.",
    "arabic_definition": "انحلال الفقار (الإنجليزية: Spondylolysis) هو عيب الفقرة، وتحديدًا كما يعرّف فهو عيب في القوس الفقرية. تحدث معظم حالات انحلال الفقار في أدنى مستوى في الفقرة القطنية (L5)، ولكن قد يحدث انحلال الفقار في فقرات قطنية أخرى، وكذلك في الفقرات الصدرية.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013169.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "calciphylaxis",
    "term_en": "Calciphylaxis",
    "term_ar": "التأق التكلسي",
    "synonyms": [
      "Calciphylaxes",
      "Idiopathic Calciphylaxis",
      "Calciphylaxis, Idiopathic",
      "Calcific Uraemic Arteriolopathy",
      "Arteriolopathy, Calcific Uraemic",
      "Calcific Uraemic Arteriolopathies",
      "Uraemic Arteriolopathy, Calcific"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Condition of induced systemic hypersensitivity in which tissues respond to appropriate challenging agents with a sudden local calcification.",
    "arabic_definition": "التأق التكلسي (المعروفة أيضًا باسم اعتلال الشرايين اليوريمي الكلسي أو التدرج الرمادي)، هي متلازمة مؤلمة نادرة لتكلس الأوعية الدموية الصغيرة الموجودة داخل الأنسجة الدهنية، والطبقات العميقة من الجلد والجلطات الدموية وموت خلايا الجلد بسبب نقص في تدفق الدم. يظهر هذا المرض غالبًا عند الأشخاص المصابين بالمرحلة النهائية من أمراض الكلى، ولكن يمكن أن يحدث في المراحل المبكرة من مرض الكلى المزمن، ونادراً ما يُصاب به الأشخاص الذين لا يعانون من أمراض الكلى. (Calciphylaxis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002115.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sialadenitis",
    "term_en": "Sialadenitis",
    "term_ar": "التهاب الغدة اللعابية",
    "synonyms": [
      "Sialadenitides",
      "Adenitis, Salivary Gland",
      "Adenitides, Salivary Gland",
      "Salivary Gland Adenitides",
      "Salivary Gland Adenitis",
      "Chronic Sialadenitis",
      "Chronic Sialadenitides",
      "Sialadenitides, Chronic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of salivary tissue (SALIVARY GLANDS), usually due to INFECTION or injuries.",
    "arabic_definition": "الغدد اللعابية تنقسم إلى مجموعتين : الغدد الكبيرة وهي الغدة النكافية، والغدة تحت الفك، والغدة تحت اللسان، والمجموعة الأخرى هي الغدد اللعابية الصغيرة وتشكل حوالي 600- 1000 غدة صغيرة موزعة في الطريق الهضمي التنفسي العلوي. أما بالنسبة للوظيفة فهي إنتاج كمية كافية من اللعاب الذي يفيد في الحفاظ على صحة الأسنان والفم، وإعادة الطعام للهضم والمساهمة في حاسة الذوق وفي البلع، والبدء في هضم السكريات كما تلعب دورا ً محدودا ً في الحفاظ على توازن الماء في الجسم بتأثيرها غير المباشر في الإحساس بالعطش . (Sialadenitis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012793.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperostosis",
    "term_en": "Hyperostosis",
    "term_ar": "فرط التعظم",
    "synonyms": [
      "Hyperostoses",
      "Bone Hypertrophy",
      "Bone Hypertrophies",
      "Hypertrophies, Bone",
      "Hypertrophy, Bone"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Increase in the mass of bone per unit volume.",
    "arabic_definition": "فرط التعظم هو النمو المفرط لعظم ما. قد يؤدي إلى عرن، وهو يحصل في كثير من الإضطرابات العضلية الهيكلية. (Hyperostosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015576.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glossoptosis",
    "term_en": "Glossoptosis",
    "term_ar": "تدلي اللسان",
    "synonyms": [
      "Glossoptoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Posterior displacement of the TONGUE toward the PHARYNX. It is often a feature in syndromes such as in PIERRE ROBIN SYNDROME and DOWN SYNDROME and associated with AIRWAY OBSTRUCTION during sleep (OBSTRUCTIVE SLEEP APNEAS).",
    "arabic_definition": "تدلي اللسان أو سقوط اللسان (الإنجليزية: Glossoptosis) هي حالةٌ طبية وشذوذٌ يحدثُ فيه تدلٍ سفلي أو تراجعٍ في اللسان. قد يسبب عدم اندماجٍ في الحنك الصلب؛ مما يؤدي لحدوث حنك مشقوق.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065710.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "melorheostosis",
    "term_en": "Melorheostosis",
    "term_ar": "تعظم شبيه بالشمعة الذائبة",
    "synonyms": [
      "Melorheostoses",
      "Melorheostosis of Leri"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of osteosclerosis extending in a linear track mainly through one of the long bones of the upper and lower limbs.",
    "arabic_definition": "التعظم الشبيه بالشمعة الذائبة (الإنجليزية: Melorheostosis) هو مرض نمائي وخلل تنسج في اللحمة المتوسطة تعرض فيه القشرة العظمية وتصبح مفرطة في الكثافة في التوزيع البضعة العظمية. هذه الحالة تبدأ في مرحلة الطفولة وتتميز بتثخن العظام.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008557.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemosiderosis",
    "term_en": "Hemosiderosis",
    "term_ar": "داء هيموسيديريني",
    "synonyms": [
      "Hemosideroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Conditions in which there is a generalized increase in the iron stores of body tissues, particularly of liver and the MONONUCLEAR PHAGOCYTE SYSTEM, without demonstrable tissue damage. The name refers to the presence of stainable iron in the tissue in the form of hemosiderin.",
    "arabic_definition": "الداء الهيموسيديريني هو شكل من أشكال فرط حمل الحديد مما يؤدي إلى تراكم بروتين الهيموسيديرين في الجسم. تشمل الأنواع: الداء الهيموسيديريني الناتج عن نقل الدم الداء الهيموسيديريني الرئوي مجهول السبب السكري الناتج عن نقل الدم الأعضاء المتأثرة: يُلاحظ ترسب الهيموسيديرين في الرئتين غالبًا بعد النزف السنخي المنتشر، والذي يحدث في أمراض مثل متلازمة غودباستشر، والورم الحبيبي المصحوب بالتهاب الأوعية، و الداء الهيموسيديريني الرئوي مجهول السبب. (Hemosiderosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006486.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypercementosis",
    "term_en": "Hypercementosis",
    "term_ar": "فرط تكون الملاط",
    "synonyms": [
      "Hypercementoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A regressive change of teeth characterized by excessive development of secondary cementum on the tooth surface. It may occur on any part of the root, but the apical two-thirds are most commonly affected. (Dorland, 27th ed)",
    "arabic_definition": "فَرطُ تَكوّن المِلاط هي حالة غَيرُ ورَميّة، مَجهولةُ السَّبَب، تتميّز بالتَّراكم المُفرِط للمِلاط العادي (المِلاط هو نَسيجٌ متكلِّس) على جذور سنٍ واحدةٍ أو عدّة أسنان. طبقةُ المِلاط هذه تتميز بأنها أكثر سماكةً، وتتكوَّن بشكلٍ رئيسيّ على قمّة السن، فتُعطي الأسنان مظهراً بصليّ الشّكل أكبر من الحجم الطّبيعيّ للسن. (Hypercementosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006936.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydrarthrosis",
    "term_en": "Hydrarthrosis",
    "term_ar": "الفصال المائي المتقطع",
    "synonyms": [
      "Hydrarthroses",
      "Intermittent hydrarthrosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Accumulation of watery fluid in the cavity of a joint. (Dorland, 27th ed)",
    "arabic_definition": "الفصال المائي المتقطع، المعروف أيضًا باسم التهاب الغشاء الزلالي الدوري أو التهاب الغشاء الزلالي الحميد الدوري أو التهاب المفاصل المائي الدوري، حالة مزمنة سببها مجهول وتتميز بنوبات متكررة ومؤقتة من تراكم السوائل (الانصباب) في الركبة. تُصاب الركبة بشكل أساسي، ولكن يمكن أن تتأثر مفاصل أخرى مثل المرفق أو الكاحل. (Hydrarthrosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006833.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mikulicz-disease",
    "term_en": "Mikulicz' Disease",
    "term_ar": "متلازمة شوغرن",
    "synonyms": [
      "Mikulicz's Disease",
      "Mikuliczs Disease",
      "Sjögren's disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic, benign, and usually painless inflammatory swelling of the lacrimal and salivary glands. It is considered by some to include the glandular enlargement associated with other diseases, such as Sjogren's syndrome, sarcoidosis, lupus erythematosus, etc.",
    "arabic_definition": "متلازمة شوغرن (الإنجليزية: Sjögren's syndrome) مرض روماتزمي مزمن يؤثر على أجهزة الجسم المختلفة فيصيب الغدد اللعابية والدمعية والمخاطية في الجسم فيسبّب جفاف في الفم والعيون. يمكن أن يؤثّر على الأجزاء الأخرى من الجسم متضمّنًا المفاصل العضلات، الأعصاب والرئة، الكلى، الكبد، البنكرياس، المعدة والمخ. (Mikulicz' Disease)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008882.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "altitude-sickness",
    "term_en": "Altitude Sickness",
    "term_ar": "داء المرتفعات",
    "synonyms": [
      "Sickness, Altitude",
      "Altitude Hypoxia",
      "Altitude Hypoxias",
      "Hypoxia, Altitude",
      "Mountain Sickness",
      "Sickness, Mountain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Multiple symptoms associated with reduced oxygen at high ALTITUDE.",
    "arabic_definition": "داء المرتفعات والمعروف أيضا باسم مرض الارتفاع (الإنجليزية: Altitude sickness) تأثير مرضي للعلو الشاهق على البشر، والناجم عن التعرض الحاد للضغط الجزئي المنخفض للأوكسجين على علوٍّ شاهق. ويحدث ذلك عادة فوق 2400 متر (8000 قدما).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000532.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cadmium-poisoning",
    "term_en": "Cadmium Poisoning",
    "term_ar": "تسمم بالكادميوم",
    "synonyms": [
      "Itai-Itai",
      "Poisoning, Cadmium",
      "Cadmium Poisonings",
      "Poisonings, Cadmium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Poisoning occurring after exposure to cadmium compounds or fumes. It may cause gastrointestinal syndromes, anemia, or pneumonitis.",
    "arabic_definition": "ليس للكادميوم أي دور بنائي في جسم الإنسان ويعتبر الكادميوم ومركباته من المواد السامّة حتى وإن كان بتراكيز منخفضة، حيث غالباً ما يتحد الكادميوم مع المركبات الحيوية للأحياء والنظم البيئية. يؤدي التسمم بالكادميوم عند الإنسان إلى وهن العظام والفشل الكلوي. (Cadmium Poisoning)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002105.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "male-infertility",
    "term_en": "Male Infertility",
    "term_ar": "العقم عند الرجل",
    "synonyms": [
      "Sterility, Male",
      "Male Sterility",
      "Subfertility, Male",
      "Male Subfertility",
      "Sub-Fertility, Male",
      "Male Sub-Fertility"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inability of the male to effect FERTILIZATION of an OVUM after a specified period of unprotected intercourse. Male sterility is permanent infertility.",
    "arabic_definition": "العقم عند الرجل حالة مرضية تعني عدم قدرة الرجل على إحداث الحمل لدى المرأة. وفي حالات البشر تشير التقارير إلى ان هذه الحالة تشكل بين 40- 50% من حالات العقم. (Male Infertility)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007248.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tooth-resorption",
    "term_en": "Tooth Resorption",
    "term_ar": "امتصاص الأسنان",
    "synonyms": [
      "Resorptions, Tooth",
      "Resorption, Tooth",
      "Tooth Resorptions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Resorption of calcified dental tissue, involving demineralization due to reversal of the cation exchange and lacunar resorption by osteoclasts. There are two types: external (as a result of tooth pathology) and internal (apparently initiated by a peculiar inflammatory hyperplasia of the pulp). (From Jablonski, Dictionary of Dentistry, 1992, p676)",
    "arabic_definition": "امتصاص الأسنان امتصاص الأسنان هي العملية التي يتم من خلالها فقد كل أو جزء من بنيَّة الأسنان، بسبب تنشيط قدرة الجسم الخلقيَّة لإزالة الأنسجة المعدنيَّة، كما تتم بوساطة خلايا مثل الخلايا الآكلة، وتشمل أنواع الامتصاص؛ الامتصاص الداخلي والامتصاص الخارجي، ويمكن أن تكون بسبب الرضح (صدمة)، عدوى، أو بسبب فرط التَّنْسُج. (Tooth Resorption)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014091.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-edema",
    "term_en": "Pulmonary Edema",
    "term_ar": "وذمة الرئة",
    "synonyms": [
      "Edema, Pulmonary",
      "Edemas, Pulmonary",
      "Pulmonary Edemas",
      "Wet Lung",
      "Lungs, Wet",
      "Lung, Wet",
      "Wet Lungs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive accumulation of extravascular fluid in the lung, an indication of a serious underlying disease or disorder. Pulmonary edema prevents efficient PULMONARY GAS EXCHANGE in the PULMONARY ALVEOLI, and can be life-threatening.",
    "arabic_definition": "وَذَمَةُ الرِّئَة أو الوَذَمَةٌ الرِئَوِيَّة والمعروفة أيضًا باسم الاحتقان الرئوي هي تراكم للسوائل بشكل مفرط في الأنسجة والفراغات الهوائية (الحويصلات الهوائية عادةً) في الرئتين. مما يؤدي إلى ضعف تبادل الغازات وقد يسبب نقص الأكسجة في الدم وفشل الجهاز التنفسي. (Pulmonary Edema)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011654.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "serotonin-syndrome",
    "term_en": "Serotonin Syndrome",
    "term_ar": "متلازمة السيروتونين",
    "synonyms": [
      "Serotonin Syndromes",
      "Syndrome, Serotonin",
      "Syndromes, Serotonin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An adverse drug interaction characterized by altered mental status, autonomic dysfunction, and neuromuscular abnormalities. It is most frequently caused by use of both serotonin reuptake inhibitors and monoamine oxidase inhibitors, leading to excess serotonin availability in the CNS at the serotonin 1A receptor.",
    "arabic_definition": "متلازمة السيروتونين هي مجموعة من الأعراض التي تحدث عقب استخدام بعض العقاقير أو الأدوية التي تزيد من مستوى السيروتونين بالجسم. تترواح خطورة الأعراض من البسيطة إلى الخطيرة. (Serotonin Syndrome)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020230.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metabolic-syndrome",
    "term_en": "Metabolic Syndrome",
    "term_ar": "متلازمة أيضية",
    "synonyms": [
      "Metabolic Syndromes",
      "Syndrome, Metabolic",
      "Syndromes, Metabolic",
      "Dysmetabolic Syndrome X",
      "Syndrome X, Dysmetabolic",
      "Insulin Resistance Syndrome X",
      "Metabolic Cardiovascular Syndrome",
      "Cardiovascular Syndrome, Metabolic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cluster of symptoms that are risk factors for CARDIOVASCULAR DISEASES and TYPE 2 DIABETES MELLITUS. The major components of metabolic syndrome include ABDOMINAL OBESITY; atherogenic DYSLIPIDEMIA; HYPERTENSION; HYPERGLYCEMIA; INSULIN RESISTANCE; a proinflammatory state; and a prothrombotic (THROMBOSIS) state.",
    "arabic_definition": "المتلازمة الأيضية أو متلازمة الأيض (الإنجليزية: Metabolic syndrome) هي مزيج من الاضطرابات الصحية تنتج بصفة رئيسية عن زيادة الوزن والسمنة. وهي تزيد من خطر الإصابة بامراض القلب والشرايين وداء السكري.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D024821.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "insulin-resistance",
    "term_en": "Insulin Resistance",
    "term_ar": "مقاومة الإنسولين",
    "synonyms": [
      "Resistance, Insulin",
      "Insulin Sensitivity",
      "Sensitivity, Insulin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diminished effectiveness of INSULIN in lowering blood sugar levels: requiring the use of 200 units or more of insulin per day to prevent HYPERGLYCEMIA or KETOSIS.",
    "arabic_definition": "مقاومة الإنسولين هي حالة فيزيولوجية يصبح فيها الإنسولين أقل فاعلية في خفض مستوى السكر في الدم ونتيجة لذلك يمكن أن يرتفع السكر إلى مستويات قد تؤدي إلى مضاعفات خطيرة. بعض أنواع الخلايا مثل الخلايا العضلية، والخلايا الدهنية تحتاج إلى الإنسولين لامتصاص الجلوكوز، وسوف ترتفع مستويات الجلوكوز في الدم عندما تفشل هذه الخلايا في الاستجابة بشكل مناسب للإنسولين. (Insulin Resistance)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007333.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plantar-fasciitis",
    "term_en": "Plantar Fasciitis",
    "term_ar": "التهاب اللفافة الأخمصية",
    "synonyms": [
      "Policeman's Heel",
      "Heel, Policeman's",
      "Heels, Policeman's",
      "Policeman Heel",
      "Policemans Heel",
      "Policeman's Heels",
      "Heel Spur Syndrome",
      "Fasciitis, Plantar, Chronic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the plantar fascia (APONEUROSIS) on the bottom of the foot causing heel pain. The etiology of plantar fasciitis remains controversial but is likely to involve a biomechanical imbalance. Though often presenting along with HEEL SPUR, they do not appear to be causally related.",
    "arabic_definition": "التهاب اللفافة الأخمصية هو اضطرابٌ في النسيج الضام الداعِم لقوس القدم، حيثُ يؤدي إلى ألمٍ في العَقِب(1) وأسفلِ القدم، ويكون الألم عادةً شديدًا مع الخطوات الأولى في اليوم أو بعد الحصول على فترةٍ من الراحة، كما يحصل الألم أيضًا عند ثني القدم وأصابع القدم نحو قصبة الساق. يحدث الألمُ تدريجيًا، ويؤثر على كلتا القَدمين في حوالي ثُلث الحالات. (Plantar Fasciitis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D036981.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metabolic-diseases",
    "term_en": "Metabolic Diseases",
    "term_ar": "خطأ أيضي خلقي",
    "synonyms": [
      "Disease, Metabolic",
      "Metabolic Disease",
      "Diseases, Metabolic",
      "Thesaurismosis",
      "Thesaurismoses",
      "Inborn errors of metabolism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Generic term for diseases caused by an abnormal metabolic process. It can be congenital due to inherited enzyme abnormality (METABOLISM, INBORN ERRORS) or acquired due to disease of an endocrine organ or failure of a metabolically important organ such as the liver. (Stedman, 26th ed)",
    "arabic_definition": "يشكل الخطأ الأيضي الخلقي أو الخطأ الاستقلابي الخلقي فئةً كبيرة من الأمراض الوراثية التي تنطوي على اضطرابات خلقية في عملية التمثيل الغذائي. وتعود الغالبية إلى عيوب الجينات الوحيدة التي تشفر الإنزيمات التي تسهل تحويل مواد مختلفة (ركائز) إلى مواد أخرى (منتجات). (Metabolic Diseases)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008659.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "water-intoxication",
    "term_en": "Water Intoxication",
    "term_ar": "تسمم مائي",
    "synonyms": [
      "Overhydration",
      "Hyperhydration"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition resulting from the excessive retention of water with sodium depletion.",
    "arabic_definition": "التسمم المائي (الإنجليزية: Water intoxication) المعروف أيضًا باسم تسمم الماء، أو فرط السوائل، أو الإفراط في الماء، هو اضطراب قاتل محتمل في وظائف المخ ينتج عندما يتم دفع التوازن الطبيعي للكهارل في الجسم إلى خارج الحدود الآمنة بسبب الإفراط في تناول الماء. في ظل الظروف العادية، يعد استهلاك الكثير من الماء عن طريق الخطأ أمرا نادرا بشكل استثنائي.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014869.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-fibrosis",
    "term_en": "Pulmonary Fibrosis",
    "term_ar": "تليف رئوي",
    "synonyms": [
      "Fibroses, Pulmonary",
      "Fibrosis, Pulmonary",
      "Pulmonary Fibroses",
      "Alveolitis, Fibrosing",
      "Alveolitides, Fibrosing",
      "Fibrosing Alveolitides",
      "Fibrosing Alveolitis",
      "Idiopathic Diffuse Interstitial Pulmonary Fibrosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A process in which normal lung tissues are progressively replaced by FIBROBLASTS and COLLAGEN causing an irreversible loss of the ability to transfer oxygen into the bloodstream via PULMONARY ALVEOLI. Patients show progressive DYSPNEA finally resulting in death.",
    "arabic_definition": "التليف الرئوي (الإنجليزية: Pulmonary fibrosis) هو مرض تنفسي تتشكل فيه ندبات في أنسجة الرئة، مما يؤدي إلى مشاكل خطيرة في التنفس. إن تكوين هذه الندبة عن طريق تراكم النسيج الضام الليفي الزائد (فيما يُسمى بالتليف) يؤدي إلى سماكة الجدران وانخفاض كمية الأكسجين في الدم، ونتيجة لذلك يعاني المرضى من ضيق دائم في التنفس.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011658.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypervitaminosis-a",
    "term_en": "Hypervitaminosis A",
    "term_ar": "فرط فيتامين أ",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A symptom complex resulting from ingesting excessive amounts of VITAMIN A.",
    "arabic_definition": "فرط الفيتامين أ (بالأنجليزية:Hypervitaminosis A) يشير إلى الآثار السامة نتيجة تناول جرعة زائدة من فيتامين أ. تظهر الأعراض نتيجة لتغيير التمثيل الغذائي للعظم وتغيير التمثيل الغذائي للفيتامينات الأخرى القابلة للذوبان في الدهون.ويعتقد أن فرط الفيتامين A حدث في البشر في وقت مبكر، واستمرت المشكلة طوال تاريخ البشرية.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006986.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "airway-obstruction",
    "term_en": "Airway Obstruction",
    "term_ar": "انسداد مجرى الهواء",
    "synonyms": [
      "Airway Obstructions",
      "Obstruction, Airway",
      "Obstructions, Airway",
      "Choking"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any hindrance to the passage of air into and out of the lungs.",
    "arabic_definition": "انسداد مجرى الهواء هو انسداد النَفس في مجرى الهواء. يمكن تصنيف الانسداد إلى كونه إما في مجرى الهواء العلوي أو مجرى الهواء السفلي. (Airway Obstruction)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000402.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "legg-calve-perthes-disease",
    "term_en": "Legg-Calve-Perthes Disease",
    "term_ar": "متلازمة ليغ -كالفيه- بيرثيز",
    "synonyms": [
      "Disease, Legg-Calve-Perthes",
      "Coxa Plana",
      "Legg-Calve-Perthes Syndrome",
      "Syndrome, Legg-Calve-Perthes",
      "Legg-Calvé-Perthes Disease",
      "Disease, Legg-Calvé-Perthes",
      "Legg-Calvé-Perthes Syndrome",
      "Legg–Calvé–Perthes disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A particular type of FEMUR HEAD NECROSIS occurring in children, mainly male, with a course of four years or so.",
    "arabic_definition": "متلازمة ليغ كالفيه بيرتيز (الإنجليزية: Legg–Calvé–Perthes syndrome) (ويعرف أيضًا باسم الداء العظمي الغضروفي في مشاشة رأس الفخذ أو داء بيرتس). وهو شكل من أشكال التهاب العظم والغضروف في الورك المشترك عند الأطفال تترافق مع خسارة مؤقتة في التروية الدموية لجزء من مفصل الورك. (Legg-Calve-Perthes Disease)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007873.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acute-lung-injury",
    "term_en": "Acute Lung Injury",
    "term_ar": "متلازمة الضائقة التنفسية الحادة",
    "synonyms": [
      "Acute Lung Injuries",
      "Lung Injuries, Acute",
      "Lung Injury, Acute",
      "Acute respiratory distress syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of lung damage that is characterized by bilateral pulmonary infiltrates (PULMONARY EDEMA) rich in NEUTROPHILS, and in the absence of clinical HEART FAILURE. This can represent a spectrum of pulmonary lesions, endothelial and epithelial, due to numerous factors (physical, chemical, or biological).",
    "arabic_definition": "متلازمة الضائقة التنفسية الحادة هي نوع من أنواع فشل الجهاز التنفسي يتميز بحدوث التهاب في الرئتين سريع الانتشار، وتشمل أعراضه ضيق التنفس، تسارع التنفس، تزرق الجلد. وانخفاض جودة الحياة في المرضى الباقين على قيد الحياة. (Acute Lung Injury)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055371.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vitamin-e-deficiency",
    "term_en": "Vitamin E Deficiency",
    "term_ar": "نقص فيتامين إي",
    "synonyms": [
      "Deficiency, Vitamin E",
      "Deficiencies, Vitamin E",
      "Vitamin E Deficiencies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nutritional condition produced by a deficiency of VITAMIN E in the diet, characterized by posterior column and spinocerebellar tract abnormalities, areflexia, ophthalmoplegia, and disturbances of gait, proprioception, and vibration. In premature infants vitamin E deficiency is associated with hemolytic anemia, thrombocytosis, edema, intraventricular hemorrhage, and increasing risk of retrolental fibroplasia and bronchopulmonary dysplasia. An apparent inborn error of vitamin E metabolism, named familial isolated vitamin E deficiency, has recently been identified. (Cecil Textbook of Medicine, 19th ed, p1181)",
    "arabic_definition": "نقص فيتامين إي (بالإنجليزية: Vitamin E deficiency) هو نقص فيتامين إي. هذا النقص يسبب مشاكل في الأعصاب بسبب ضعف التوصيل من النبضات الكهربائية على طول الأعصاب بسبب التغيرات في بنية الغشاء العصبي ووظيفته.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014811.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vitamin-a-deficiency",
    "term_en": "Vitamin A Deficiency",
    "term_ar": "نقص فيتامين أ",
    "synonyms": [
      "Deficiency, Vitamin A",
      "Deficiencies, Vitamin A",
      "Vitamin A Deficiencies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nutritional condition produced by a deficiency of VITAMIN A in the diet, characterized by NIGHT BLINDNESS and other ocular manifestations such as dryness of the conjunctiva and later of the cornea (XEROPHTHALMIA). Vitamin A deficiency is a very common problem worldwide, particularly in developing countries as a consequence of famine or shortages of vitamin A-rich foods. In the United States it is found among the urban poor, the elderly, alcoholics, and patients with malabsorption. (From Cecil Textbook of Medicine, 19th ed, p1179)",
    "arabic_definition": "نقص فيتامين أ (ن ف أ) هو نقص فيتامين أ في البشر. وهو شائع في البلدان الأكثر فقرا ولكن نادرا ما يشاهد في البلدان الأكثر تقدما. (Vitamin A Deficiency)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014802.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "traumatic-amputation",
    "term_en": "Traumatic Amputation",
    "term_ar": "بتر",
    "synonyms": [
      "Amputations, Traumatic",
      "Traumatic Amputations",
      "Amputation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Loss of a limb or other bodily appendage by accidental injury.",
    "arabic_definition": "البتر هو إزالة أحد أطراف الجسم ('إزالة' العضو كاملا أو جزء منه) بعد إصابة جسدية أو جراحة. وهي وسيلة لمكافحة ألم أو مرض في الطرف المصاب بسبب سرطان أو غرغرينا. (Traumatic Amputation)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000673.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-atelectasis",
    "term_en": "Pulmonary Atelectasis",
    "term_ar": "همود الرئة",
    "synonyms": [
      "Atelectases, Pulmonary",
      "Atelectasis, Pulmonary",
      "Pulmonary Atelectases",
      "Atelectasis",
      "Atelectases",
      "Lung Collapse",
      "Collapse, Lung",
      "Congestive Pulmonary Atelectasis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Absence of air in the entire or part of a lung, such as an incompletely inflated neonate lung or a collapsed adult lung. Pulmonary atelectasis can be caused by airway obstruction, lung compression, fibrotic contraction, or other factors.",
    "arabic_definition": "الانخماص الرئوي أو همود الرئة أو اللاتوسع الرئوي من الكلمتين اليونانيتين (غير كامل: ἀτελής) و (امتداد: ἔκτασις) هو انهيار الحويصلات الهوائية في الرئة مما يؤدي إلى نقص أو غياب عملية تبادل الغازات. قد يحدث الانخماص لجزء من الرئة أو رئة كاملة. (Pulmonary Atelectasis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myositis-ossificans",
    "term_en": "Myositis Ossificans",
    "term_ar": "التهاب العضلات التعظمي",
    "synonyms": [
      "Fibrodysplasia Ossificans Progressiva",
      "Myositis Ossificans Progressiva",
      "Progressive Myositis Ossificans",
      "Progressive Ossifying Myositis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease characterized by bony deposits or the ossification of muscle tissue.",
    "arabic_definition": "التهاب العضلات التعظمي يتألف التهاب العضلات التعظمي من متلازمتين تتميزان بالتعظم المتزايد (تكلس) للعضلات. (Myositis Ossificans)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009221.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kashin-beck-disease",
    "term_en": "Kashin-Beck Disease",
    "term_ar": "داء كاشين بيك",
    "synonyms": [
      "Disease, Kashin-Beck",
      "Kashin–Beck disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disabling osteochondrodysplasia with OSTEOSCLEROSIS, cone-shaped METAPHYSIS, and shortening of the DIAPHYSIS. It is endemic in parts of Siberia and northern China. Mineral deficiencies (e.g., selenium, iodine), fungal cereal contamination, and water contamination may be contributing factors in its etiology.",
    "arabic_definition": "داء كاشين بيك هو اعتلال عظمي غضروفي مزمن ومتوطن. تتضمن أعراض هذا المرض آلاماً في المفاصل، وغياب الليونة فيها، مع حدوث تضخم في المفاصل بين السلاميات، بالإضافة إلى محدودية الحركة المصاحبة لهذا المرض في البدن. (Kashin-Beck Disease)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057767.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "periapical-granuloma",
    "term_en": "Periapical Granuloma",
    "term_ar": "الورم الحبيبي حول الذروي",
    "synonyms": [
      "Granuloma, Periapical",
      "Granulomas, Periapical",
      "Periapical Granulomas",
      "Periapical Periodontitis, Chronic Nonsuppurative",
      "Periodontitis, Apical, Chronic Nonsuppurative",
      "Dental Granulomas",
      "Granuloma, Dental",
      "Granulomas, Dental"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chronic nonsuppurative inflammation of periapical tissue resulting from irritation following pulp disease or endodontic treatment.",
    "arabic_definition": "الورم الحبيبي حول الذروي والذي يُشار إليه أحيانًا بالورم الحبيبي الجذري أو الورم الحبيبي الذروي، هو التهاب في طرف السن الميت (غير الحيوي). وهو عبارة عن آفة أو كتلة تبدأ عادةً على شكل كيسة مبطنة بظهارة، ثم تنحني للداخل مما يؤدي إلى التهاب النسيج الحبيبي في أطراف جذور السن الميت. (Periapical Granuloma)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010484.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "decompression-sickness",
    "term_en": "Decompression Sickness",
    "term_ar": "مرض تخفيف الضغط",
    "synonyms": [
      "Sickness, Decompression",
      "Bends",
      "Caisson Disease",
      "Caisson Diseases",
      "Disease, Caisson",
      "Diseases, Caisson"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition occurring as a result of exposure to a rapid fall in ambient pressure. Gases, nitrogen in particular, come out of solution and form bubbles in body fluid and blood. These gas bubbles accumulate in joint spaces and the peripheral circulation impairing tissue oxygenation causing disorientation, severe pain, and potentially death.",
    "arabic_definition": "مرض تخفيف الضغط (الإنجليزية: decompression sickness) ويعرف أيضاً باسم داء الغوّاص و تفقع الدم (الإنجليزية: aerobullosis) حالة مؤلمة وخطيرة تنتج عن تكون فقاعات غازية في مجرى الدم وأنسجة الجسم. وتحدث الحالة عندما ينخفض الضغط الجوي المحيط بالجسم بسرعة فائقة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003665.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mitochondrial-diseases",
    "term_en": "Mitochondrial Diseases",
    "term_ar": "أمراض متقدرية",
    "synonyms": [
      "Disease, Mitochondrial",
      "Mitochondrial Disease",
      "Mitochondrial Disorders",
      "Disorder, Mitochondrial",
      "Mitochondrial Disorder",
      "Respiratory Chain Deficiencies, Mitochondrial",
      "Mitochondrial Respiratory Chain Deficiencies",
      "Oxidative Phosphorylation Deficiencies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases caused by abnormal function of the MITOCHONDRIA. They may be caused by mutations, acquired or inherited, in mitochondrial DNA or in nuclear genes that code for mitochondrial components. They may also be the result of acquired mitochondria dysfunction due to adverse effects of drugs, infections, or other environmental causes.",
    "arabic_definition": "أمراض متقدرية (الإنجليزية: Mitochondrial diseases) أو أمراض الميتوكندريا هي مجموعة من الاضطرابات الناتجة عن خلل في وظيفة الميتوكندريون (كما تسمى أيضا المتقدرة) وهي عضية تنتج الطاقة للخلية. توجد المتقدرات في كل خلايا جسم الإنسان باستثناء خلايا الدم الحمراء وتعمل على تحويل جزيئات الطعام إلى طاقة آي تي بي تغذي الخلية.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D028361.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "necrotizing-fasciitis",
    "term_en": "Necrotizing Fasciitis",
    "term_ar": "التهاب لفافي ناخر",
    "synonyms": [
      "Fasciitides, Necrotizing",
      "Necrotizing Fasciitides",
      "Fascitis, Necrotizing",
      "Fascitides, Necrotizing",
      "Necrotizing Fascitides",
      "Necrotizing Fascitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A fulminating bacterial infection of the deep layers of the skin and FASCIA. It can be caused by many different organisms, with STREPTOCOCCUS PYOGENES being the most common.",
    "arabic_definition": "التهاب اللفافة النخار اختصارًا NF، المعروف باسم مرض آكل اللحم ٱوالبكتيريا آكلة اللحم أو متلازمة البكتيريا آكلة اللحم، هو عدوى نادرة للطبقات العميقة من الجلد وتحت أنسجة الجلد، وتنتشر بسهولة في جميع أنحاء المستوى اللفافي داخل الأنسجة تحت الجلد. وكان أول وصف لخصائص المرض في عام 1952 هو موت أنسجة تحت الجلد واللفافة العضلية ولكن دون تأثير على العضلات الواقعة أسفلهما. (Necrotizing Fasciitis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019115.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ankylosing-spondylitis",
    "term_en": "Ankylosing Spondylitis",
    "term_ar": "التهاب الفقار المقسط",
    "synonyms": [
      "Bechterew's Disease",
      "Bechterews Disease",
      "Marie-Struempell Disease",
      "Spondylarthritis Ankylopoietica",
      "Rheumatoid Spondylitis",
      "Spondylitis, Rheumatoid",
      "Ankylosing Spondylarthritis",
      "Ankylosing Spondylarthritides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic inflammatory condition affecting the axial joints, such as the SACROILIAC JOINT and other intervertebral or costovertebral joints. It occurs predominantly in young males and is characterized by pain and stiffness of joints (ANKYLOSIS) with inflammation at tendon insertions.",
    "arabic_definition": "التهاب الفقار المُقّسِّط (اختصارًا AS) هو نوعٌ من التهاب المفاصل، ويكون التهابًا طويل الأمد لمفاصل العمود الفقري (الفقار)، وعادةً ما يكون حيث يلتقي العمود الفقري بالحوض. قد يشمل أحيانًا المناطق المُصابة مفاصل أخرى مثل الكتفين أو الوركين. (Ankylosing Spondylitis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013167.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteochondritis-dissecans",
    "term_en": "Osteochondritis Dissecans",
    "term_ar": "التهاب العظم والغضروف السالخ",
    "synonyms": [
      "Dissecans, Osteochondritis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of osteochondritis in which articular cartilage and associated bone becomes partially or totally detached to form joint loose bodies. Affects mainly the knee, ankle, and elbow joints.",
    "arabic_definition": "التهاب العظم والغضروف السالخ (التهاب عظمي غضروفي) التهاب العظم والغضروف السالخ هو اضطراب المفصل الذي يشكل الشقوق في الغضروف المفصلي والعظام تحت الغضروف الأساسي، وعادة ما يسبب التهاب العظم والغضروف السالخ الألم وتورم في المفصل المصاب الذي يمسك والأقفال أثناء الحركة. والفحص البدني عادة ما يكشف عن الانصباب، والطراوة، وصوت طقطقة مع حركة المفاصل. (Osteochondritis Dissecans)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010008.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mediastinal-emphysema",
    "term_en": "Mediastinal Emphysema",
    "term_ar": "استرواح المنصف",
    "synonyms": [
      "Mediastinal Emphysemas",
      "Emphysema, Mediastinal",
      "Pneumomediastinum",
      "Pneumomediastinums",
      "Pulmonary Interstitial Emphysema",
      "Emphysema, Pulmonary Interstitial",
      "Emphysemas, Pulmonary Interstitial",
      "Interstitial Emphysema, Pulmonary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Presence of air in the mediastinal tissues due to leakage of air from the tracheobronchial tree, usually as a result of trauma.",
    "arabic_definition": "اسْتِرْواحُ المَنْصِف (الإنجليزية: Pneumomediastinum) هو استرواح (وجود غير طبيعي من الهواء أو الغازات الأخرى) في المنصف. تم وصفها لأول مرة في عام 1819 من قبل رينيه لاينك، يمكن أن تنجم الحالة عن صدمة جسدية أو حالات أخرى تؤدي إلى هروب الهواء من الرئتين أو الشُعَب الهوائية أو الأمعاء إلى تجويف الصدر. (Mediastinal Emphysema)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008478.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salter-harris-fractures",
    "term_en": "Salter-Harris Fractures",
    "term_ar": "كسور سالتر هاريس",
    "synonyms": [
      "Fractures, Salter-Harris",
      "Growth Plate Fractures",
      "Fracture, Growth Plate",
      "Fractures, Growth Plate",
      "Growth Plate Fracture",
      "Growth Plate Injuries",
      "Growth Plate Injury",
      "Salter–Harris fracture"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fractures involving a GROWTH PLATE.",
    "arabic_definition": "كسور سالتر هاريس هي كسور تتضمن صفيحة المشاشة أو لوحة نمو العظام. يعتبر سبب شائع للإصابة عند الأطفال، حيث يحدث في حوالي 15% من كسور العظام الطويلة في مرحلة الطفولة. (Salter-Harris Fractures)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000072042.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vitamin-b-6-deficiency",
    "term_en": "Vitamin B 6 Deficiency",
    "term_ar": "فيتامين ب6",
    "synonyms": [
      "Deficiency, Vitamin B 6",
      "Deficiency, Vitamin B6",
      "B6 Deficiencies, Vitamin",
      "B6 Deficiency, Vitamin",
      "Deficiencies, Vitamin B6",
      "Vitamin B6 Deficiencies",
      "Vitamin B6 Deficiency",
      "Vitamin Deficiency, B6"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nutritional condition produced by a deficiency of VITAMIN B 6 in the diet, characterized by dermatitis, glossitis, cheilosis, and stomatitis. Marked deficiency causes irritability, weakness, depression, dizziness, peripheral neuropathy, and seizures. In infants and children typical manifestations are diarrhea, anemia, and seizures. Deficiency can be caused by certain medications, such as isoniazid.",
    "arabic_definition": "فيتامين بي6 (الإنجليزية: Vitamin B6)، هو أحد فيتامينات بي، وبالتالي فهو عنصر غذائي أساسي. يشير المصطلح إلى مجموعة من ستة مركبات متشابهة كيميائيا، أي «أشباه الفيتامينات»، والتي يمكن تحويلها في النظم البيولوجية. (Vitamin B 6 Deficiency)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D026681.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-hypertension",
    "term_en": "Pulmonary Hypertension",
    "term_ar": "فرط ضغط الدم الرئوي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Increased VASCULAR RESISTANCE in the PULMONARY CIRCULATION, usually secondary to HEART DISEASES or LUNG DISEASES.",
    "arabic_definition": "فرط ضغط الدم الرئوي (الإنجليزية: Pulmonary Hypertension) هو زيادة ضغط الدم داخل الشريان الرئوي أو الوريد الرئوي أو الشعيرات الدموية الرئوية (جميعها تعرف بالأوعية الرئوية أو أوعية الدورة الدموية الصغرى)، وزيادة الضغط في هذه الأوعية يؤدي إلى ظهور بعض الأعراض كضيق النّفس، الدوار، الإغماء، تورّم القدم والعديد من الأعراض الأخرى، التي تتفاقم جميعها مع ازدياد المجهود الجسدي. من الممكن أن يكون فرط ضغط الدّم الرئوي شديد جداً، مما يؤدي إلى قلة تحمل الجسم للتمارين الرياضيّة، تماماً كما يحدث في حالات الفشل القلبي.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006976.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "respiratory-distress-syndrome",
    "term_en": "Respiratory Distress Syndrome",
    "term_ar": "متلازمة الضائقة التنفسية لدى الرضع",
    "synonyms": [
      "Distress Syndrome, Respiratory",
      "Distress Syndromes, Respiratory",
      "Respiratory Distress Syndromes",
      "Syndrome, Respiratory Distress",
      "Shock Lung",
      "Lung, Shock",
      "Respiratory Distress Syndrome, Adult",
      "Adult Respiratory Distress Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterized by progressive life-threatening RESPIRATORY INSUFFICIENCY in the absence of known LUNG DISEASES, usually following a systemic insult such as surgery or major TRAUMA.",
    "arabic_definition": "متلازمة الضائقة التنفسية لدى حديثي الولادة (الإنجليزية: Infant respiratory distress syndrome أو neonatal respiratory distress syndrome أو respiratory distress syndrome of newborn) (مختصرها IRDS) والمعروفة ايضًا باضطراب نقص خافض التوتر السطحي (الإنجليزية: surfactant deficiency disorder) ومختصره (SDD) وكانت تسمى سابقا بمرض الغشاء الزجاجي (الإنجليزية: hyaline membrane disease) ومختصره (HMD) هي متلازمة تصيب الأطفال حديثي الولادة والذين يولدون ولادة مبكرة، وسببها قصور نمائي في إنتاج خافض التوتر السطحي الرئوي وعدم نضوج بنية الرئتين. يمكن أن تكون أيضًا نتيجة لعدوى تصيب حديثي الولادة، كما يمكن أن تكون نتيجة لخلل جيني في البروتينات المرتبطة بتكوين خافض التوتر السطحي الرئوي.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012128.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "idiopathic-pulmonary-fibrosis",
    "term_en": "Idiopathic Pulmonary Fibrosis",
    "term_ar": "تليف رئوي مجهول السبب",
    "synonyms": [
      "Idiopathic Pulmonary Fibroses",
      "Pulmonary Fibroses, Idiopathic",
      "Cryptogenic Fibrosing Alveolitis",
      "Cryptogenic Fibrosing Alveolitides",
      "Fibrosing Alveolitides, Cryptogenic",
      "Pulmonary Fibrosis, Idiopathic",
      "Fibrosing Alveolitis, Cryptogenic",
      "Fibrocystic Pulmonary Dysplasia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A common interstitial lung disease of unknown etiology, usually occurring between 50-70 years of age. Clinically, it is characterized by an insidious onset of breathlessness with exertion and a nonproductive cough, leading to progressive DYSPNEA. Pathological features show scant interstitial inflammation, patchy collagen fibrosis, prominent fibroblast proliferation foci, and microscopic honeycomb change.",
    "arabic_definition": "التليف الرئوي مجهول السبب هو مرض نادر مترقٍ يصيب الجهاز التنفسي، يتميز بزيادة سماكة أنسجة الرئة وتيبسها، ويسبب تكون نسيج متندب. يعد أحد أمراض الرئة التندبية المزمنة التي تتميز بتدهور تدريجي غير عكوس في وظائف الرئة. (Idiopathic Pulmonary Fibrosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054990.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "patellofemoral-pain-syndrome",
    "term_en": "Patellofemoral Pain Syndrome",
    "term_ar": "متلازمة الألم الفخذي الرضفي",
    "synonyms": [
      "Pain Syndrome, Patellofemoral",
      "Anterior Knee Pain Syndrome",
      "Patellofemoral Syndrome",
      "Patellofemoral Pain",
      "Pain, Patellofemoral",
      "Patellofemoral Pains"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterized by retropatellar or peripatellar PAIN resulting from physical and biochemical changes in the patellofemoral joint. The pain is most prominent when ascending or descending stairs, squatting, or sitting with flexed knees. There is a lack of consensus on the etiology and treatment. The syndrome is often confused with (or accompanied by) CHONDROMALACIA PATELLAE, the latter describing a pathological condition of the CARTILAGE and not a syndrome.",
    "arabic_definition": "متلازمة الألم الفخذي الرضفي والمعروفة أيضًا باسم رُكبة العداء هي حالة طبية تتضمن وجود ألم في الركبة يتراوح من مجرد الشعور بعدم الراحة إلى الإحساس بألم شديد، ينشأ بسبب ملامسة السطح الخلفي للرضفة (صابونة الركبة) مع عظم الفخذ، ويتم تشخيص المتلازمة عند وجود ألم أمامي في الركبة يشمل الرضفة بشرط استبعاد الأمراض الأخرى سواء داخل أو حول المفصل الرضفة\". يُعتبر العدائون ومن في حكمهم (كراكبوا الدراجات) أكثر الفئات المعرضة لخطر الإصابة بهذه المتلازمة، والتي يمكنها أن تحدث بشكل تدريجي أو بشكل فجائي نتيجة إصابات، وغالبًا ما يكون ذلك بسبب تغيير في نظام التدريب بالزيادة المفرطة في وقت أو شدة التدريب أو بسبب ارتداء أحذية غير مناسبة. (Patellofemoral Pain Syndrome)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046788.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "posterior-tibial-tendon-dysfunction",
    "term_en": "Posterior Tibial Tendon Dysfunction",
    "term_ar": "خلل وظيفة وتر الظنبوب الخلفي",
    "synonyms": [
      "Tibial Tendon Dysfunction, Posterior",
      "Tibialis Posterior Dysfunction",
      "Dysfunction, Tibialis Posterior",
      "Posterior Tibial Tendon Insufficiency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by a broad range of progressive disorders ranging from TENOSYNOVITIS to tendon rupture with or without hindfoot collapse to a fixed, rigid, FLATFOOT deformity. Pathologic changes can involve associated tendons, ligaments, joint structures of the ANKLE, hindfoot, and midfoot. Posterior tibial tendon dysfunction is the most common cause of acquired flatfoot deformity in adults.",
    "arabic_definition": "خلل وظيفة وتر الظنبوب الخلفي (الإنجليزية: Posterior tibial tendon dysfunction) هو اضطراب يصيب وتر الظنبوب الخلفي. وهو مرض متصاعد يمر عبر أربعة مراحل، ويُعد السبب الأكثر شيوعًا للقدم المسطحة لدى البالغين.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D037081.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acute-radiation-syndrome",
    "term_en": "Acute Radiation Syndrome",
    "term_ar": "متلازمة الإشعاع الحادة",
    "synonyms": [
      "Acute Radiation Syndromes",
      "Radiation Syndrome, Acute",
      "Radiation Syndromes, Acute"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by a brief whole body exposure to more than one sievert dose equivalent of radiation. Acute radiation syndrome is initially characterized by ANOREXIA; NAUSEA; VOMITING; but can progress to hematological, gastrointestinal, neurological, pulmonary, and other major organ dysfunction.",
    "arabic_definition": "متلازمة الإشعاع الحادة أو مرض الإشعاع أو التسمم الإشعاعي أو تناذر إشعاعي حاد (الإنجليزية: Acute radiation syndrome) هي مجموعة من الآثار الصحية التي تنتج عن التعرض لقدر كبير من الإشعاعات المُؤَيِّنة خلال فترة زمنية قصيرة. قد تبدأ الأعراض بعد ساعة من التعرض وقد تدوم أشهرًا.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054508.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carbon-monoxide-poisoning",
    "term_en": "Carbon Monoxide Poisoning",
    "term_ar": "تسمم بأحادي أكسيد الكربون",
    "synonyms": [
      "Poisoning, Carbon Monoxide",
      "Carbon Monoxide Poisonings",
      "Monoxide Poisoning, Carbon",
      "Monoxide Poisonings, Carbon",
      "Poisonings, Carbon Monoxide",
      "Poisoning, Illuminating Gas",
      "Gas Poisoning, Illuminating",
      "Gas Poisonings, Illuminating"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Toxic asphyxiation due to the displacement of oxygen from oxyhemoglobin by carbon monoxide.",
    "arabic_definition": "تسمم بأحادي أكسيد الكربون (أو التسمم بأول أكسيد الكربون) هي حالةُ تسمم تحدث عادةً من استنشاق أحادي أكسيد الكربون (CO) بكميات مفرطة. غالبًا ما تٌوصف الأعراض بأنها «شبيهة بالإنفلونزا» وعادة ما تشمل الصداع والدوار والضعف والقيء وألم الصدر والارتباك. (Carbon Monoxide Poisoning)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002249.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nijmegen-breakage-syndrome",
    "term_en": "Nijmegen Breakage Syndrome",
    "term_ar": "متلازمة انكسار نايميخن",
    "synonyms": [
      "Breakage Syndrome, Nijmegen",
      "Syndrome, Nijmegen Breakage",
      "Ataxia-Telangiectasia Variant V1",
      "Ataxia-Telangiectasia Variant V1s",
      "Variant V1, Ataxia-Telangiectasia",
      "Variant V1s, Ataxia-Telangiectasia",
      "Berlin Breakage Syndrome",
      "Breakage Syndrome, Berlin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chromosome instability syndrome resulting from a defective response to DNA double-strand breaks. In addition to characteristic FACIES and MICROCEPHALY, patients have a range of findings including RADIOSENSITIVITY, immunodeficiency, increased cancer risk, and growth retardation. Causative mutations occur in the NBS1 gene, located on human chromosome 8q21. NBS1 codes for nibrin, the key regulator protein of the R/M/N (RAD50/MRE11/NBS1) protein complex which senses and mediates cellular response to DNA DAMAGE caused by IONIZING RADIATION.",
    "arabic_definition": "متلازمة انكسار نايميخن هي اضطراب خلقي وراثي جسمي نادر يسبب عدم الاستقرار الصبغي (الكروموسومي)، ربما نتيجةً لعيب في ترميم الدنا المزدوج لموصل هوليداي و/أو آلية الالتحام المعتمدة على الاصطناع لترميم كسر السلاسل المزدوجة في الدنا. يشفر جين إن بي إس 1 لبروتين (نيفرين) له وظيفتان رئيسيتان: (1) إيقاف دورة الخلية في طور التركيب، عندما تكون هناك أخطاء في دنا الخلية (2) التفاعل مع جين إف إيه إن سي دي 2 الذي ينشّط مسار بي آر سي إيه 1/بي آر سي إيه 2 لترميم الدنا. (Nijmegen Breakage Syndrome)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049932.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "severe-acute-malnutrition",
    "term_en": "Severe Acute Malnutrition",
    "term_ar": "سوء التغذية الحاد العالمي",
    "synonyms": [
      "Acute Malnutrition, Severe",
      "Malnutrition, Severe Acute",
      "Global acute malnutrition"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute form of MALNUTRITION which usually affects children, characterized by a very low weight for height (below -3z scores of the median World Health Organization standards), visible severe wasting, or occurrence of nutritional EDEMA. It can be a direct or indirect cause of fatality in children suffering from DIARRHEA and PNEUMONIA. Do not confuse with starvation, a condition in which the body is not getting enough food, usually for extended periods of time.",
    "arabic_definition": "سوء التغذية الحاد العالمي هو مقياس لحالة الغذائية للسكان غالباً ما يستخدم في حالات اللجوء التي طال أمدها. جنبا إلى جنب مع معدل الوفيات الخام، هو واحد من المؤشرات الأساسية لتقييم شدة أزمة إنسانية. (Severe Acute Malnutrition)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000067011.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leukemia",
    "term_en": "Leukemia",
    "term_ar": "ابيضاض الدم",
    "synonyms": [
      "Leukemias",
      "Leucocythaemia",
      "Leucocythaemias",
      "Leucocythemia",
      "Leucocythemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A progressive, malignant disease of the blood-forming organs, characterized by distorted proliferation and development of leukocytes and their precursors in the blood and bone marrow. Leukemias were originally termed acute or chronic based on life expectancy but now are classified according to cellular maturity. Acute leukemias consist of predominately immature cells; chronic leukemias are composed of more mature cells. (From The Merck Manual, 2006)",
    "arabic_definition": "ابيضاض الدَّم أو اللوكيميا (الإنجليزية: Leukemia) هو مرض سرطان يُصيب الأنسجة التي تشكِّل الدم في الجسم، بما في ذلك نخاع العظم والجهاز اللِّمفي. واللوكيميا ضمن مجموعة من سرطانات أورام الأنسجة المولدة للدم والأنسجة اللمفاوية التي تبدأ عادةً في نخاع العظام وتؤدي إلى ارتفاع عدد خلايا الدم غير الطبيعية.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007938.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphoma",
    "term_en": "Lymphoma",
    "term_ar": "لمفوما",
    "synonyms": [
      "Lymphomas",
      "Germinoblastoma",
      "Germinoblastomas",
      "Lymphoma, Malignant",
      "Lymphomas, Malignant",
      "Malignant Lymphoma",
      "Malignant Lymphomas",
      "Reticulolymphosarcoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A general term for various neoplastic diseases of the lymphoid tissue.",
    "arabic_definition": "اللمفوما أو اللِّمفُومة أو اللمفوم أو الورم اللِمفي أو الورم الليمفي (الإنجليزية: Lymphoma) هو مجموعة أورام خلايا الدم التي تنشأ من الخلايا اللمفاوية الموجودة في الجهاز اللمفاوي، حيث تشكل هذه الخلايا ما يعرف بالشبكة البطانية. وكثيرًا ما يشير هذا الاسم إلى الأنواع السرطانية من هذه الأورام.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008223.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cysts",
    "term_en": "Cysts",
    "term_ar": "كيسة",
    "synonyms": [
      "Cyst"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any fluid-filled closed cavity or sac that is lined by an EPITHELIUM. Cysts can be of normal, abnormal, non-neoplastic, or neoplastic tissues.",
    "arabic_definition": "الكِيسَة (الإنجليزية: Cyst) ويعرف أيضًا بالكيس المائي. هي كيس صغير له غشاء وحدود ويختلف عن النسيج المجاور، وقد يحوي هواءً أو سوائل أو شبه سائل. (Cysts)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003560.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "teratoma",
    "term_en": "Teratoma",
    "term_ar": "ورم مسخي",
    "synonyms": [
      "Teratomas",
      "Dysembryoma",
      "Dysembryomas",
      "Teratoid Tumor",
      "Teratoid Tumors",
      "Tumors, Teratoid",
      "Tumor, Teratoid",
      "Teratoma, Benign"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A true neoplasm composed of a number of different types of tissue, none of which is native to the area in which it occurs. It is composed of tissues that are derived from three germinal layers, the endoderm, mesoderm, and ectoderm. They are classified histologically as mature (benign) or immature (malignant). (From DeVita Jr et al., Cancer: Principles &amp; Practice of Oncology, 3d ed, p1642)",
    "arabic_definition": "ورم مسخي أو تراتومة (الإنجليزية: Teratoma) هو ورم يتكون من عدة أنواع مختلفة من الأنسجة، مثل الشعر، والعضلات، والعظام. وعادة ما يتكون في المبيض، أو الخصيتين، أو عظام العجز والعصعص، ويكون أقل شيوعا في مناطق أخرى.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013724.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipoma",
    "term_en": "Lipoma",
    "term_ar": "ورم شحمي",
    "synonyms": [
      "Lipomas",
      "Fatty Tumor",
      "Fatty Tumors",
      "Tumor, Fatty",
      "Tumors, Fatty",
      "Lipomata",
      "Lipomatas",
      "Hibernoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor composed of fat cells (ADIPOCYTES). It can be surrounded by a thin layer of connective tissue (encapsulated), or diffuse without the capsule.",
    "arabic_definition": "الورم الشحمي هو كتلةٌ تظهر أسفل الجلد نتيجة نمو غير طبيعي للخلايا الدهنية في الجسم. فهي عمومًا ناعمة الملمس ومتحركة وغير مؤلمة. (Lipoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008067.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sarcoma",
    "term_en": "Sarcoma",
    "term_ar": "ساركومة",
    "synonyms": [
      "Sarcomas",
      "Sarcoma, Soft Tissue",
      "Sarcomas, Soft Tissue",
      "Soft Tissue Sarcoma",
      "Soft Tissue Sarcomas",
      "Sarcoma, Epithelioid",
      "Epithelioid Sarcoma",
      "Epithelioid Sarcomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A connective tissue neoplasm formed by proliferation of mesodermal cells; it is usually highly malignant.",
    "arabic_definition": "الساركومة أو الغَرَن أو سرطانة النسيج الضام أو الورم اللحمي أو السَّرقوم أو السَّركُوْمَا أو الورم العضلي الخبيث أو الورم اللحمي خبيث أو الورم الليفي أو السركومة أو الورم الغرني (الإنجليزية: sarcoma)، هو ورم خبيث ينمو من الأنسجة الضامة مثل العظام والأنسجة الرخوة (مثل العضلات والأنسجة الضامة كالأوتار التي تربط العضلات بالعظام، والأنسجة الليفية والغضاريف، والأنسجة الزلالية المحيطة بالمفاصل)، إضافة إلى الشحوم والأوعية الدموية والأنسجة العصبية.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012509.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carcinoma",
    "term_en": "Carcinoma",
    "term_ar": "سرطانة",
    "synonyms": [
      "Carcinomas",
      "Epithelioma",
      "Epitheliomas",
      "Malignant Epithelial Neoplasms",
      "Epithelial Neoplasm, Malignant",
      "Malignant Epithelial Neoplasm",
      "Neoplasm, Malignant Epithelial",
      "Neoplasms, Malignant Epithelial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant neoplasm made up of epithelial cells tending to infiltrate the surrounding tissues and give rise to metastases. It is a histological type of neoplasm and not a synonym for cancer.",
    "arabic_definition": "السرطانة أو الورم السرطاني أو ورم الأنسجة الطلائية (الإنجليزية: Carcinoma) هو مصطلح طبي يشير إلى ورم خبيث وغازي والتي تتكون من الخلايا الظهارية متحولة. بدلا من ذلك، فإنه يشير إلى وجود ورم خبيث يتألف من خلايا تتحول من تكون الأنسجة غير معروف، ولكن تمتلك خصائص محددة جزيئية أو نسيجية ترتبط مع الخلايا الظهارية، مثل إنتاج كيراتينات خلوية أو الجسور بين الخلايا.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002277.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenoma",
    "term_en": "Adenoma",
    "term_ar": "ورم غدي",
    "synonyms": [
      "Adenomas",
      "Adenoma, Basal Cell",
      "Adenomas, Basal Cell",
      "Basal Cell Adenoma",
      "Basal Cell Adenomas",
      "Adenoma, Follicular",
      "Adenomas, Follicular",
      "Follicular Adenoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign epithelial tumor with a glandular organization.",
    "arabic_definition": "الورم الغدي قد يكون ورما حميدا من نسيج طلائي (ظهاري) من أصل غدي، أو ورمًا له خصائص غدية، أو كليهما. يمكن لهذه الأورام أن تنمو منه العديد من الأعضاء الغدية، بما في ذلك الغدد الكظرية، الغدة النخامية، الدرقية ،البرُوسْتاتَة وغيرها. (Adenoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000236.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glioma",
    "term_en": "Glioma",
    "term_ar": "ورم دبقي",
    "synonyms": [
      "Gliomas",
      "Glial Cell Tumors",
      "Glial Cell Tumor",
      "Tumor, Glial Cell",
      "Tumors, Glial Cell",
      "Mixed Glioma",
      "Glioma, Mixed",
      "Gliomas, Mixed"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Benign and malignant central nervous system neoplasms derived from glial cells (i.e., astrocytes, oligodendrocytes, and ependymocytes). Astrocytes may give rise to astrocytomas (ASTROCYTOMA) or glioblastoma multiforme (see GLIOBLASTOMA). Oligodendrocytes give rise to oligodendrogliomas (OLIGODENDROGLIOMA) and ependymocytes may undergo transformation to become EPENDYMOMA; CHOROID PLEXUS NEOPLASMS; or colloid cysts of the third ventricle. (From Escourolle et al., Manual of Basic Neuropathology, 2nd ed, p21)",
    "arabic_definition": "الوَرَم الدِبْقِيّ (الإنجليزية: glioma) هو نوع من الأورام التي تبدأ في المخ أو العمود الفقري. ويطلق عليه دبقي لأنه ينشأ من الخلايا الدبقية.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005910.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "melanoma",
    "term_en": "Melanoma",
    "term_ar": "ورم ميلانيني",
    "synonyms": [
      "Melanomas",
      "Malignant Melanoma",
      "Malignant Melanomas",
      "Melanoma, Malignant",
      "Melanomas, Malignant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant neoplasm derived from cells that are capable of forming melanin, which may occur in the skin of any part of the body, in the eye, or, rarely, in the mucous membranes of the genitalia, anus, oral cavity, or other sites. It occurs mostly in adults and may originate de novo or from a pigmented nevus or malignant lentigo. Melanomas frequently metastasize widely, and the regional lymph nodes, liver, lungs, and brain are likely to be involved. The incidence of malignant skin melanomas is rising rapidly in all parts of the world. (Stedman, 25th ed; from Rook et al., Textbook of Dermatology, 4th ed, p2445)",
    "arabic_definition": "الورم الميلانيني أو الميلانوم أو المِلانونم أو سرطان الخلايا الصبغية (الإنجليزية: Melanoma)، هو نوع من أنواع السرطانات الذي يتطور من الخلايا التي تحتوي على الصبغة الغامقة «الميلانين المسؤولة عن لون البشرة»-المعروفة باسم الخلية الميلانينية. عادة ما يحدث الورم الميلانيني في الجلد، ولكن نادرا ما يحدث في الفم والأمعاء والعين أو أي أجزاء أخرى من الجسم.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008545.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thymoma",
    "term_en": "Thymoma",
    "term_ar": "ورم الغدة الزعترية",
    "synonyms": [
      "Thymomas",
      "Carcinoma, Thymic",
      "Carcinomas, Thymic",
      "Thymic Carcinoma",
      "Thymic Carcinomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neoplasm originating from thymic tissue, usually benign, and frequently encapsulated. Although it is occasionally invasive, metastases are extremely rare. It consists of any type of thymic epithelial cell as well as lymphocytes that are usually abundant. Malignant lymphomas that involve the thymus, e.g., lymphosarcoma, Hodgkin's disease (previously termed granulomatous thymoma), should not be regarded as thymoma. (From Stedman, 25th ed)",
    "arabic_definition": "ورم الغدة الزعترية (الإنجليزية: Thymoma) هو ورم ينشأ من الخلايا الطلائية في الغدة الزعترية (التوتة)، ويُعد من الأورام النادرة. غالباً ما ترتبط هذه الأورام باضطرابات الأعصاب والعضلات مثل الوهن العضلي الوبيل؛ حيث يُعثر على ورم الغدة الزعترية لدى 20% من المرضى المصابين بالوهن العضلي الوبيل.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013945.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chalazion",
    "term_en": "Chalazion",
    "term_ar": "بردة",
    "synonyms": [
      "Meibomian Cyst",
      "Cyst, Meibomian",
      "Chalazia",
      "بردة (مرض)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A non-neoplastic cyst of the MEIBOMIAN GLANDS of the eyelid.",
    "arabic_definition": "البَرَدَة أو الكالازيون (Chalazion) جفن العين مصاب بالبردة. يعرف أيضا باسم الورم الحُبيبي الشحمي لغدة ميبوميوس في العين (Meibomian Gland Lipogranuloma) ،وهو عبارة عن كيس في جفن العين العلوي غالبا، يتكون نتيجة حدوث التهاب مع انسداد الأقنية المفرغة في هذه الغدد مما يؤدّي إلى تراكم مفرزاتها.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017043.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nevus",
    "term_en": "Nevus",
    "term_ar": "وحمة",
    "synonyms": [
      "Mole, Skin",
      "Moles, Skin",
      "Nevi",
      "Skin Mole",
      "Skin Moles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A circumscribed stable malformation of the skin and occasionally of the oral mucosa, which is not due to external causes and therefore presumed to be of hereditary origin.",
    "arabic_definition": "الوَحْمة أو الشامَة أو الخَال (الإنجليزية: Nevus) هو مصطلح طبي لعلامة خِلقية مرئية على الجلد أو الغشاء المخاطي. يرجِع أصل التسمية الإنجليزية إلى الكلمة اللاتينية nævus، والتي تعني «علامة الولادة».",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009506.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myxoma",
    "term_en": "Myxoma",
    "term_ar": "ورم مخاطي",
    "synonyms": [
      "Myxomas",
      "Angiomyxoma",
      "Angiomyxomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign neoplasm derived from connective tissue, consisting chiefly of polyhedral and stellate cells that are loosely embedded in a soft mucoid matrix, thereby resembling primitive mesenchymal tissue. It occurs frequently intramuscularly where it may be mistaken for a sarcoma. It appears also in the jaws and the skin. (From Stedman, 25th ed)",
    "arabic_definition": "الورم المخاطي (الإنجليزية: Myxoma، وهي كلمة يونانية من 'muxa' التي تعني مخاط) هو أحد الأورام القلبية يتميز بشكله الدائري. ويعد من الأورام الحميدية على الأغلب يظهر هذا الورم في جدار عضلة القلب ويمتد إلى جوف القلب.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009232.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leiomyoma",
    "term_en": "Leiomyoma",
    "term_ar": "ورم عضلي أملس",
    "synonyms": [
      "Leiomyomas",
      "Fibroid",
      "Fibroids",
      "Fibroid Tumor",
      "Fibroid Tumors",
      "Tumor, Fibroid",
      "Tumors, Fibroid",
      "Fibromyoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor derived from smooth muscle tissue, also known as a fibroid tumor. They rarely occur outside of the UTERUS and the GASTROINTESTINAL TRACT but can occur in the SKIN and SUBCUTANEOUS TISSUE, probably arising from the smooth muscle of small blood vessels in these tissues.",
    "arabic_definition": "الورم العضلي الأملس أو ورم العضلات الملساء (الإنجليزية: leiomyoma) وهو ورم حميد نادرًا ما يتحول إلى ورم خبيث (نسبة أقل من 0.1%) .من الممكن ان يتكوّن في أي عضو، ولكن غالباً ما يظهر في الرحم والأمعاء الدقيقة والمريء.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007889.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibroma",
    "term_en": "Fibroma",
    "term_ar": "ورم ليفي",
    "synonyms": [
      "Fibromas",
      "Fibromatosis",
      "Fibromatoses",
      "Myxofibroma",
      "Myxofibromas",
      "Fibromyxoma",
      "Fibromyxomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor of fibrous or fully developed connective tissue.",
    "arabic_definition": "الليفوم أو الورم الليفي (الإنجليزية: Fibroma) من الأورام الحميدة التي تتألف من النسيج الليفي أو الضام. يمكن أن ينمو الليفوم في جميع الأجهزة، وينشأ من نسيج اللحمة المتوسطة.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005350.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thecoma",
    "term_en": "Thecoma",
    "term_ar": "ورم قرابي",
    "synonyms": [
      "Thecomas",
      "Theca Cell Tumor",
      "Theca Cell Tumors",
      "Tumors, Theca Cell",
      "Tumor, Theca Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A gonadal stromal neoplasm composed only of THECA CELLS, occurring mostly in the postmenopausal OVARY. It is filled with lipid-containing spindle cells and produces ESTROGENS that can lead to ENDOMETRIAL HYPERPLASIA; UTERINE HEMORRHAGE; or other malignancies in postmenopausal women and sexual precocity in girls. When tumors containing theca cells also contain FIBROBLASTS, they are identified as thecoma-fibroma tumors with less active hormone production.",
    "arabic_definition": "الورم القرابي هو أحد أورام الخلايا القرابية الحميدة، يصيب المبيض، ويتكون من خلايا قرابية فقط. يظهر في النساء في سن كبيرة (متوسط سن الإصابة 59 عاماً) وبنسبة 84% يظهر بعد سن اليأس، لكنه قد بظهر قبله. (Thecoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013798.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neoplasms",
    "term_en": "Neoplasms",
    "term_ar": "ورم",
    "synonyms": [
      "Tumors",
      "Neoplasia",
      "Neoplasias",
      "Neoplasm",
      "Tumor",
      "Cancer",
      "Cancers",
      "Malignant Neoplasm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "New abnormal growth of tissue. Malignant neoplasms show a greater degree of anaplasia and have the properties of invasion and metastasis, compared to benign neoplasms.",
    "arabic_definition": "الورم أو الدُّبْلَة هو (اللاتينية: Neoplasma) نوعٌ من النمو غير الطبيعي والمفرط، والذي يسمى تورم الأنسجة. لا ينسجم النمو الورمي مع نمو الأنسجة الطبيعية المجاورة، ويستمر في النمو بشكل غير طبيعي، حتى إذا أُزيل العامل الأصلي الذي أدى إلى بدايته. (Neoplasms)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009369.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chondroma",
    "term_en": "Chondroma",
    "term_ar": "ورم غضروفي",
    "synonyms": [
      "Chondromas",
      "Enchondroma",
      "Enchondromas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign neoplasm derived from mesodermal cells that form cartilage. It may remain within the substance of a cartilage or bone (true chondroma or enchondroma) or may develop on the surface of a cartilage (ecchondroma or ecchondrosis). (Dorland, 27th ed; Stedman, 25th ed)",
    "arabic_definition": "الغُضروم أو الورم الغضروفي هو سرطان يتألف من خلايا مشتقة من خلايا وظيفتها إنتاج الغضروف متحولة. ورم غضروفي عضو في فئة من أورام العظام والأنسجة اللينة تعرف باسم ساركوما. (Chondroma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002812.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "seminoma",
    "term_en": "Seminoma",
    "term_ar": "ورم منوي",
    "synonyms": [
      "Seminomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A radiosensitive, malignant neoplasm of the testis, thought to be derived from primordial germ cells of the sexually undifferentiated embryonic gonad. There are three variants: classical (typical), the most common type; anaplastic; and spermatocytic. The classical seminoma is composed of fairly well differentiated sheets or cords of uniform polygonal or round cells (seminoma cells), each cell having abundant clear cytoplasm, distinct cell membranes, a centrally placed round nucleus, and one or more nucleoli. In the female, a grossly and histologically identical neoplasm, known as dysgerminoma, occurs. (Dorland, 27th ed)",
    "arabic_definition": "الورم المنوي (الإنجليزية: Seminoma)، هو ورم خلوي جنسي للخصية أو نادراً ممكن يتكون الورم في الحيز الصدري. وهو ورم خبيث، ويعتبر من أكثر السرطانات التي يمكن شفاؤها وعلاجها؛ حيث ان معدل البقاء يمكن ان يكون أكثر من 95% إذا اكتشف الورم مبكراً.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018239.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myoma",
    "term_en": "Myoma",
    "term_ar": "ورم عضلي",
    "synonyms": [
      "Myomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign neoplasm of muscular tissue. (Stedman, 25th ed)",
    "arabic_definition": "الورم العضلي هو ورم عضلي حميد في الرحم، معظم النساء لا يشكين من أعراض، بينما البعض منهن قد يشكي من الألم أو الدورة الشهرية الغزيرة. إذا ضغط الورم على المثانة، فإن ذلك يؤدي للشعور بالحاجة للتبول باستمرار؛ أيضا، قد يسبب الورم ألماً أثناء ممارسة الجنس، أو ألم أسفل الظهر. (Myoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009214.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "papilloma",
    "term_en": "Papilloma",
    "term_ar": "ورم حليمي",
    "synonyms": [
      "Papillomas",
      "Papilloma, Squamous Cell",
      "Papillomas, Squamous Cell",
      "Squamous Cell Papilloma",
      "Squamous Cell Papillomas",
      "Papillomatosis",
      "Papillomatoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A circumscribed benign epithelial tumor projecting from the surrounding surface; more precisely, a benign epithelial neoplasm consisting of villous or arborescent outgrowths of fibrovascular stroma covered by neoplastic cells. (Stedman, 25th ed)",
    "arabic_definition": "وَرَمٌ حُلَيمِيّ (الإنجليزية: Papilloma)، يشير إلى حدوث ورم حميد في الخلايا الطلائية النامية بشكل بروزات (زيادة ظاهرية أو خارجية) بشكل يشبه سعف الإصبع. وفي هذا السياق حليمة papilla تشير إلى الزائدة التي أنشأها الورم، وليس على الورم الحليمة القائمة بالفعل (مثل الحلمة).",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010212.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hamartoma",
    "term_en": "Hamartoma",
    "term_ar": "ورم عيبي",
    "synonyms": [
      "Hamartomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A focal malformation resembling a neoplasm, composed of an overgrowth of mature cells and tissues that normally occur in the affected area.",
    "arabic_definition": "الورم العيبي أو الورم المَشُوب أو الورم خللي النسيج أو الهامارتوما أو الورم العابي (الإنجليزية: hamartoma) هو ورم حميد على شكل تكتل (من الخلايا ناشئة من خلايا النسيج الاصلية بدون عيوب جينية لكنها مرتبة بطريقة غير طبيعية في النسيج فتسبب الورم - tumor - هي نوع من أنواع الاورام الحميدة وليس ورم خبيث، وتكون مركزة محليا وتشبة الاورام السرطانية - neoplasm - في طبيعتها لكنها ليست كذلك مثال الهيماتوما في الرئة يكون هناك كتلة غير طبيعية من الخلايا لكنها كلها عبارة عن نسيج طلائي وغضاريف وليست خلايا دخيلة على النسيج. عادةً ما يكون الورم العيبي نتيجةً لمتلازمة وراثية تؤثر على دورة نمو جميع الخلايا أو على الأقل مجموعة منها.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006222.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteoma",
    "term_en": "Osteoma",
    "term_ar": "ورم عظمي",
    "synonyms": [
      "Osteomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor composed of bone tissue or a hard tumor of bonelike structure developing on a bone (homoplastic osteoma) or on other structures (heteroplastic osteoma). (From Dorland, 27th ed)",
    "arabic_definition": "الورم العظمي (الإنجليزية: Osteoma) هو قطعة جديدة من عظم تنمو على قطعة من عظم آخر، عادة ما تحدث على الجمجمة، وهو ورم حميد. عندما ينمو الورم العظمي على عظام أخرى، يعرف ذلك باسم «الورم العظمي المثلي»؛ أما عندما ينمو على أنسجة أخرى، يسمى «ورم عظمي متغاير».",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010016.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroma",
    "term_en": "Neuroma",
    "term_ar": "ورم عصبي",
    "synonyms": [
      "Neuromas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tumor made up of nerve cells and nerve fibers. (Dorland, 27th ed)",
    "arabic_definition": "الورم العصبي (الإنجليزية: Neuroma)، هو نمو ورم أو تورم الأنسجة العصبية، تميل الأورام العصبية إلى أن تكون حميدة (أي ليست خبيثة). العديد من الأورام العصبية، بما فيها الأورام الخبيثة الشائعة يشار إليها بمصطلحات أخرى في الوقت الحاضر.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009463.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vipoma",
    "term_en": "Vipoma",
    "term_ar": "فيبوما",
    "synonyms": [
      "Vipomas",
      "Diarrheogenic Tumor",
      "Diarrheogenic Tumors",
      "Tumor, Diarrheogenic",
      "Tumors, Diarrheogenic",
      "Pancreatic VIPoma",
      "Pancreatic VIPomas",
      "VIPoma, Pancreatic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tumor that secretes VASOACTIVE INTESTINAL PEPTIDE, a neuropeptide that causes VASODILATION; relaxation of smooth muscles; watery DIARRHEA; HYPOKALEMIA; and HYPOCHLORHYDRIA. Vipomas, derived from the pancreatic ISLET CELLS, generally are malignant and can secrete other hormones. In most cases, Vipomas are located in the PANCREAS but can be found in extrapancreatic sites.",
    "arabic_definition": "فيبوما أو الورم المفرز لعديدات الببتيد المعوية المنشأ الفعالة وعائياً، سرطان نادر يصيب الغدد الصماء للبنكرياس، بالتحديد خلايا دلتا Δ، التي بدورها تفرز هرمونات فيب vip (الببتيدات المعوية الفعالة وعائياً). حوالي 4% من الحالات تكون مرتبطة بدايةً بِـMEN1. (Vipoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003969.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anaplasia",
    "term_en": "Anaplasia",
    "term_ar": "فقد التمايز الخلوي",
    "synonyms": [
      "Anaplasias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Loss of structural differentiation and useful function of neoplastic cells.",
    "arabic_definition": "فقد التمايز الخلوي أو التحول الراجع أو الكَشَم أو إرتداد هو حالة للخلايا تتميز بفقر التمايز الخلوي، وهي حالة تعرض خاصة في السرطانات. (Anaplasia)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000708.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ranula",
    "term_en": "Ranula",
    "term_ar": "كيس ضفدعي",
    "synonyms": [
      "Ranulas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of retention cyst of the floor of the mouth, usually due to obstruction of the ducts of the submaxillary or sublingual glands, presenting a slowly enlarging painless deep burrowing mucocele of one side of the mouth. It is also called sublingual cyst and sublingual ptyalocele.",
    "arabic_definition": "الكيس الضفدعي أو الضفيدعة (الإنجليزية: Ranula) الضفيدعة تعني الضفدع الصغير، تطلق هذه التسمية على مرض فموي وهي كيسة احتباسية متشكلة في أرضية الفم تحت اللسان تتطور من أقنية الغدة تحت الفك أو الغدة تحت اللسان تكبر تدريجياً ثم تصغر",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011900.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "syringoma",
    "term_en": "Syringoma",
    "term_ar": "ورم غدي عرقي",
    "synonyms": [
      "Syringomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor of the sweat glands which is usually multiple and results from malformation of sweat ducts. It is uncommon and more common in females than in males. It is most likely to appear at adolescence, and further lesions may develop during adult life. It does not appear to be hereditary. (Rook et al., Textbook of Dermatology, 4th ed, pp2407-8)",
    "arabic_definition": "الورم الغدي العرقي هو ورم غير مضر من الغدد العرقية الناتِحة. توجد عادة متجمعة على الجفون، على الرغم من أنها يمكن أيضا أن تكون موجودة في الإبطين، والبطن، والصدر، والرقبة، وفروة الرأس أو منطقة الفخذ بما في ذلك الأعضاء التناسلية في نمط متماثل. (Syringoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018252.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pinealoma",
    "term_en": "Pinealoma",
    "term_ar": "ورم الغدة الصنوبرية",
    "synonyms": [
      "Pinealomas",
      "Neoplasms, Pineal",
      "Neoplasm, Pineal",
      "Pineal Neoplasm",
      "Pineal Neoplasms",
      "Pineal Parenchymal Tumors",
      "Pineal Parenchymal Tumor",
      "Tumor, Pineal Parenchymal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Neoplasms which originate from pineal parenchymal cells that tend to enlarge the gland and be locally invasive. The two major forms are pineocytoma and the more malignant pineoblastoma. Pineocytomas have moderate cellularity and tend to form rosette patterns. Pineoblastomas are highly cellular tumors containing small, poorly differentiated cells. These tumors occasionally seed the neuroaxis or cause obstructive HYDROCEPHALUS or Parinaud's syndrome. GERMINOMA; CARCINOMA, EMBRYONAL; GLIOMA; and other neoplasms may arise in the pineal region with germinoma being the most common pineal region tumor. (From DeVita et al., Cancer: Principles and Practice of Oncology, 5th ed, p2064; Adams et al., Principles of Neurology, 6th ed, p670)",
    "arabic_definition": "ورم الغدة الصنوبرية هو ورم حميد عادة في الغدة الصنوبرية. تنتج الغدة الصنوبرية هرمون الميلاتونين الذي يلعب دوراً في تنظيم إيقاع الحياة اليومي. (Pinealoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010871.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chordoma",
    "term_en": "Chordoma",
    "term_ar": "ورم حبلي",
    "synonyms": [
      "Chordomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant tumor arising from the embryonic remains of the notochord. It is also called chordocarcinoma, chordoepithelioma, and notochordoma. (Dorland, 27th ed)",
    "arabic_definition": "ورم حبلي (الإنجليزية: Chordoma) هو ورم نادر يحدث عادة في العمود الفقري وقاعدة الجمجمة، وهو ورم خبيث ينمو ببطء، ويمكن أن ينتشر إلى الأعضاء الأخرى وعادة الرئتين، لكنه لا يمثل سوى حوالي 1٪ من جميع أورام العظام الخبيثة.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002817.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "germinoma",
    "term_en": "Germinoma",
    "term_ar": "ورم إنتاشي",
    "synonyms": [
      "Germinomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant neoplasm of the germinal tissue of the GONADS; MEDIASTINUM; or pineal region. Germinomas are uniform in appearance, consisting of large, round cells with vesicular nuclei and clear or finely granular eosinophilic-staining cytoplasm. (Stedman, 265th ed; from DeVita Jr et al., Cancer: Principles &amp; Practice of Oncology, 3d ed, pp1642-3)",
    "arabic_definition": "الورم إنتاشي أو الورم الجرثومي (الإنجليزية: Germinoma) هو نوع من أنواع أورام الخلايا الجرثومية، ولا يختلف عند الفحص، وقد يكون حميدا أو خبيثا.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018237.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "odontoma",
    "term_en": "Odontoma",
    "term_ar": "ورم سني",
    "synonyms": [
      "Odontomas",
      "Fibro-Odontoma",
      "Fibro-Odontomas",
      "Fibroodontoma",
      "Fibroodontomas",
      "Fibro-odontoma, Ameloblastic",
      "Ameloblastic Fibro-odontoma",
      "Ameloblastic Fibro-odontomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mixed tumor of odontogenic origin, in which both the epithelial and mesenchymal cells exhibit complete differentiation, resulting in the formation of tooth structures. (Jablonski, Illustrated Dictionary of Dentistry, 1982)",
    "arabic_definition": "الورم السني أو السِنُّوم أو عرن السن (الإنجليزية: odontoma) هو ورم حميد مرتبط بتطور الأسنان، يظهر غالبًا بشكل ورم عيبي سني، وهذا يعني اشتماله على نسيج سني طبيعي ينمو بطريقة شاذة. يشمل الورم كلا من النسيجين السنيين القاسي والرخو.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009810.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "luteoma",
    "term_en": "Luteoma",
    "term_ar": "الورم الأصفر",
    "synonyms": [
      "Luteomas",
      "Luteinoma",
      "Pregnancy Luteoma",
      "Luteoma, Pregnancy",
      "Luteomas, Pregnancy",
      "Pregnancy Luteomas",
      "Luteoma of Pregnancy",
      "Gestational Luteoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An ovarian neoplasm composed of LUTEAL CELLS derived from luteinized GRANULOSA CELLS and THECA CELLS. Luteomas respond to GONADOTROPINS, and vary in their hormone production (PROGESTERONE; ESTROGENS; or ANDROGENS). During PREGNANCY, a transient type of luteoma may develop due to an exaggerated LUTEINIZATION of the OVARY.",
    "arabic_definition": "الورم الأصفر هو ورم يحدث في المبايض أثناء الحمل. يرتبط بزيادة الهرمونات الجنسية ، وخاصة البروجسترون والتستوستيرون. (Luteoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018311.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cementoma",
    "term_en": "Cementoma",
    "term_ar": "ورم ملاطي",
    "synonyms": [
      "Cementomas",
      "Periapical Fibrous Dysplasia",
      "Dysplasia, Periapical Fibrous",
      "Fibrous Dysplasia, Periapical",
      "Fibrous Dysplasias, Periapical",
      "Periapical Fibrous Dysplasias",
      "Cemento-Ossifying Fibroma",
      "Cemento-Ossifying Fibromas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An odontogenic fibroma in which cells have developed into cementoblasts and which consists largely of cementum.",
    "arabic_definition": "الورم الملاطي (الإنجليزية: cementoma) هو ورم سني يصاب به الملاط، وهو ورم حميد عادةً ما يلاحظ ككتلة دائرية من الأنسجة الصلبة ملتحمة بجذر السن. يتواجد عامةً بالفك السفلي في منطقة الأرحاء السفلية، حيث يصاب به الأفراد بين عمر 8 إلى 30 من الجنسين بتواتر متساوٍ، وبالرغم من أنه يسبب تشوه للمناطق المحيطة، لكن عادةً ما يكون نموه غير مؤلم على الأقل في البداية.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002485.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "poroma",
    "term_en": "Poroma",
    "term_ar": "شزن",
    "synonyms": [
      "Poromas",
      "Poromatosis",
      "Poromatoses",
      "Hidracanthoma Simplex",
      "Intraepidermal Poroma",
      "Intraepidermal Poromas",
      "Poroma, Intraepidermal",
      "Eccrine Poroma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign adnexal neoplasm derived from cells of the terminal duct of eccrine or apocrine SWEAT GLAND lineage. They typically manifest as solitary papules and occur only in the skin but unlike in ACROSPIROMA involves the epidermis.",
    "arabic_definition": "الشَزَن أو التصلب الالتهابي ( بالإنجليزية: Poroma ) عبارة عن ورم جلدي حميد ينشأ من الغدد العرقية.على الرغم من أن الاسم الأصلي أُطلِق في الأساس على الأورام التي تنشأ من ظهارة قنوات الغدد العرقية الناتحة، إلا أنه يستخدم كإشارة عامة للأورام المشتقة من الأجزاء القنوية لكل من الغدد العرقية الناتحة والمفترزة.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057091.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diffuse-idiopathic-skeletal-hyperostosis",
    "term_en": "Diffuse Idiopathic Skeletal Hyperostosis",
    "term_ar": "فرط التعظم الهيكلي المنتشر مجهول السبب",
    "synonyms": [
      "Ankylosing Vertebral Hyperostosis with Tylosis",
      "Forestier Disease",
      "Disease, Forestier",
      "Forestier's Disease",
      "Disease, Forestier's",
      "Forestiers Disease",
      "Forestier-Rotes Disease",
      "Disease, Forestier-Rotes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease of elderly men characterized by large osteophytes that bridge vertebrae and ossification of ligaments and tendon insertions.",
    "arabic_definition": "فرط التعظم الهيكلي المنتشر مجهول السبب (دي آي إس إتش) هو حالة تتميز بالتكلس غير الطبيعي/ تكوين العظام (فرط التعظم) للأنسجة الرخوة المحيطة بمفاصل العمود الفقري، وكذلك الهيكل العظمي المحيطي. يوجد في العمود الفقري تكوين عظمي على طول الرباط الطولي الأمامي وأحيانًا الرباط الطولي الخلفي، ما قد يؤدي إلى اندماج جزئي أو كامل لمستويات العمود الفقري المجاورة. (Diffuse Idiopathic Skeletal Hyperostosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004057.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucocele",
    "term_en": "Mucocele",
    "term_ar": "سليلة مخاطية",
    "synonyms": [
      "Mucoceles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A retention cyst of the salivary gland, lacrimal sac, paranasal sinuses, appendix, or gallbladder. (Stedman, 26th ed)",
    "arabic_definition": "السليلة المخاطية أو القيلة المخاطية (الإنجليزية: Mucocele) هي أي توسع والذي يكون عادة مرضيا مع تجمع مخاط.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009078.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chronic-obstructive-pulmonary-disease",
    "term_en": "Chronic Obstructive Pulmonary Disease",
    "term_ar": "داء الانسداد الرئوي المزمن",
    "synonyms": [
      "Chronic Obstructive Pulmonary Diseases",
      "COPD",
      "Chronic Obstructive Lung Disease",
      "COAD",
      "Chronic Obstructive Airway Disease",
      "Airflow Obstruction, Chronic",
      "Airflow Obstructions, Chronic",
      "Chronic Airflow Obstructions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease of chronic diffuse irreversible airflow obstruction. Subcategories of COPD include CHRONIC BRONCHITIS and PULMONARY EMPHYSEMA.",
    "arabic_definition": "مرض الانسداد الرئوي المزمن (مرض إ. ر. (Chronic Obstructive Pulmonary Disease)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D029424.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurofibromatoses",
    "term_en": "Neurofibromatoses",
    "term_ar": "ورام ليفي عصبي",
    "synonyms": [
      "Multiple Neurofibromas",
      "Multiple Neurofibroma",
      "Neurofibroma, Multiple",
      "Neurofibromas, Multiple",
      "Neurofibromatosis",
      "Neurofibromatosis Syndrome",
      "Neurofibromatosis Syndromes",
      "Syndrome, Neurofibromatosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of disorders characterized by an autosomal dominant pattern of inheritance with high rates of spontaneous mutation and multiple neurofibromas or neurilemmomas. NEUROFIBROMATOSIS 1 (generalized neurofibromatosis) accounts for approximately 95% of cases, although multiple additional subtypes (e.g., NEUROFIBROMATOSIS 2, neurofibromatosis 3, etc.) have been described. (From Neurochirurgie 1998 Nov;44(4):267-72)",
    "arabic_definition": "الورام الليفي العصبي (الإنجليزية: Neurofibromatosis) هو مجموعة مكونة من ثلاثة حالات تنمو فيها الأورام خلال الجهاز العصبي، والأنواع الثلاثة هي الورم العصبي الليفي من النوع الأول (NF1)، والورم العصبي الليفي من النوع الثاني (NF2)، والورام الشفاني. وتشمل أعراض NF1 ظهور بقع بنية فاتحة على الجلد، والنمش في الإبط والفخذ، ونتوءات صغيرة في الأعصاب، وانحراف العمود الفقري جانبيا، بينما قد يكون هناك فقدان للسمع، وإعتام عدسة العين في سن مبكرة، ومشاكل في التوازن، وضمور العضلات في NF2. (Neurofibromatoses)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017253.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenocarcinoma",
    "term_en": "Adenocarcinoma",
    "term_ar": "سرطانة غدية",
    "synonyms": [
      "Adenocarcinomas",
      "Adenoma, Malignant",
      "Adenomas, Malignant",
      "Malignant Adenoma",
      "Malignant Adenomas",
      "Adenocarcinoma, Basal Cell",
      "Adenocarcinomas, Basal Cell",
      "Basal Cell Adenocarcinoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant epithelial tumor with a glandular organization.",
    "arabic_definition": "السرطانة الغدية أو أدينو كارسينوما (بالانجليزية:Adenocarcinoma) هو أحد أنواع الاورام السرطانية التي يمكن أن تحدث في اماكن عديدة في الجسم. يعرف بورم النسيج الطلائي الذي له أصل غدي، أو خصائص غدية، أو كلاهما.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000230.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pheochromocytoma",
    "term_en": "Pheochromocytoma",
    "term_ar": "ورم القواتم",
    "synonyms": [
      "Pheochromocytomas",
      "Pheochromocytoma, Extra-Adrenal",
      "Extra-Adrenal Pheochromocytoma",
      "Extra-Adrenal Pheochromocytomas",
      "Pheochromocytomas, Extra-Adrenal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A usually benign, well-encapsulated, lobular, vascular tumor of chromaffin tissue of the ADRENAL MEDULLA or sympathetic paraganglia. The cardinal symptom, reflecting the increased secretion of EPINEPHRINE and NOREPINEPHRINE, is HYPERTENSION, which may be persistent or intermittent. During severe attacks, there may be HEADACHE; SWEATING, palpitation, apprehension, TREMOR; PALLOR or FLUSHING of the face, NAUSEA and VOMITING, pain in the CHEST and ABDOMEN, and paresthesias of the extremities. The incidence of malignancy is as low as 5% but the pathologic distinction between benign and malignant pheochromocytomas is not clear. (Dorland, 27th ed; DeVita Jr et al., Cancer: Principles &amp; Practice of Oncology, 3d ed, p1298)",
    "arabic_definition": "ورم القواتم (بالانجليزية:pheochromocytoma) هو أحد أورام الغدد الصم العصبية ينشأ من نخاع الغدد الكظرية (في الخلايا أليفة الكروم)، أو من الأنسجة أليفة الكروم خارج الغدة الكظرية. يفرز الورم كميات عالية من الكاتيكولامينات، معظمهم من النورأدرينالين وبشكل أقل الأدرينالين.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010673.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retinoblastoma",
    "term_en": "Retinoblastoma",
    "term_ar": "ورم أرومة الشبكية",
    "synonyms": [
      "Retinoblastomas",
      "Eye Cancer, Retinoblastoma",
      "Cancer, Retinoblastoma Eye",
      "Cancers, Retinoblastoma Eye",
      "Eye Cancers, Retinoblastoma",
      "Retinoblastoma Eye Cancer",
      "Retinoblastoma Eye Cancers",
      "Familial Retinoblastoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant tumor arising from the nuclear layer of the retina that is the most common primary tumor of the eye in children. The tumor tends to occur in early childhood or infancy and may be present at birth. The majority are sporadic, but the condition may be transmitted as an autosomal dominant trait. Histologic features include dense cellularity, small round polygonal cells, and areas of calcification and necrosis. An abnormal pupil reflex (leukokoria); NYSTAGMUS, PATHOLOGIC; STRABISMUS; and visual loss represent common clinical characteristics of this condition. (From DeVita et al., Cancer: Principles and Practice of Oncology, 5th ed, p2104)",
    "arabic_definition": "ورم أرومة الشبكية أو ورم الجذيعات الشبكية (الإنجليزية: Retinoblastoma) هو ورم سرطاني سريع النمو يصيب خلايا شبكية العين. يعد ورم أرومة الشبكية ـ في الدول المتقدمة ـ أحد أعلى الأورام السرطانية في الأطفال من حيث ارتفاع نسبة الشفاء (95 ـ 98%)، وتبلغ نسبة الأطفال الذين يصلون إلى سن البلوغ بعد علاجهم من هذا الورم حوالي 90%.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012175.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhabdomyosarcoma",
    "term_en": "Rhabdomyosarcoma",
    "term_ar": "الساركومة العضلية المخططة",
    "synonyms": [
      "Rhabdomyosarcomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant solid tumor arising from mesenchymal tissues which normally differentiate to form striated muscle. It can occur in a wide variety of sites. It is divided into four distinct types: pleomorphic, predominantly in male adults; alveolar (RHABDOMYOSARCOMA, ALVEOLAR), mainly in adolescents and young adults; embryonal (RHABDOMYOSARCOMA, EMBRYONAL), predominantly in infants and children; and botryoidal, also in young children. It is one of the most frequently occurring soft tissue sarcomas and the most common in children under 15. (From Dorland, 27th ed; Holland et al., Cancer Medicine, 3d ed, p2186; DeVita Jr et al., Cancer: Principles &amp; Practice of Oncology, 3d ed, pp1647-9)",
    "arabic_definition": "السَّاركومةُ العَضَلِيَّةُ المُخَطَّطَة (الإنجليزية: Rhabdomyosarcoma)، هو شكل من أشكال السرطان السريع النمو، يتطور من الخلايا العضلية الهيكلية (المخططة) التي فشلت في التشكل التام. ويعتبر بشكل عام مرضًا من أمراض الطفولة، حيث تحدث الغالبية العظمى من الحالات عند هؤلاء الذين تقل أعمارهم عن 18 عامًا.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012208.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cholangiocarcinoma",
    "term_en": "Cholangiocarcinoma",
    "term_ar": "سرطانة الأقنية الصفراوية",
    "synonyms": [
      "Cholangiocarcinomas",
      "Cholangiocellular Carcinoma",
      "Carcinoma, Cholangiocellular",
      "Carcinomas, Cholangiocellular",
      "Cholangiocellular Carcinomas",
      "Extrahepatic Cholangiocarcinoma",
      "Cholangiocarcinoma, Extrahepatic",
      "Cholangiocarcinomas, Extrahepatic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant tumor arising from the epithelium of the BILE DUCTS.",
    "arabic_definition": "سرطانة الأقنية الصفراوية (1) هو نوعٌ من السرطان المُتكون في الأقنية الصفراوية. ينتجُ عنه عددٌ من الأعراض والتي قد تشمل ألمًا بطنيًا واصفرارًا جلديًا وفقدانًا في الوزن وحكةً عامة وحمّى، كما قد يُصبح البُراز فاتحًا أو يُصبح البول غامقًا في اللون. (Cholangiocarcinoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018281.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "choriocarcinoma",
    "term_en": "Choriocarcinoma",
    "term_ar": "سرطانة مشيمائية",
    "synonyms": [
      "Choriocarcinomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant metastatic form of trophoblastic tumors. Unlike the HYDATIDIFORM MOLE, choriocarcinoma contains no CHORIONIC VILLI but rather sheets of undifferentiated cytotrophoblasts and syncytiotrophoblasts (TROPHOBLASTS). It is characterized by the large amounts of CHORIONIC GONADOTROPIN produced. Tissue origins can be determined by DNA analyses: placental (fetal) origin or non-placental origin (CHORIOCARCINOMA, NON-GESTATIONAL).",
    "arabic_definition": "السرطانة المشيمائية (الإنجليزية: Choriocarcinoma) هي ورم خبيث أرومي غاذي ينشأ عادةً في المشيمة. يعد نوعًا من أورام الخلايا الجرثومية، وقد ينشأ في المبيض أو الخصية.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002822.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oligodendroglioma",
    "term_en": "Oligodendroglioma",
    "term_ar": "ورم الدبقيات القليلة التغصن",
    "synonyms": [
      "Oligodendrogliomas",
      "Oligodendroblastoma",
      "Oligodendroblastomas",
      "Anaplastic Oligodendroglioma",
      "Anaplastic Oligodendrogliomas",
      "Oligodendroglioma, Anaplastic",
      "Oligodendrogliomas, Anaplastic",
      "Mixed Oligodendroglioma-Astrocytoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A relatively slow-growing glioma that is derived from oligodendrocytes and tends to occur in the cerebral hemispheres, thalamus, or lateral ventricle. They may present at any age, but are most frequent in the third to fifth decades, with an earlier incidence peak in the first decade. Histologically, these tumors are encapsulated, relatively avascular, and tend to form cysts and microcalcifications. Neoplastic cells tend to have small round nuclei surrounded by unstained nuclei. The tumors may vary from well-differentiated to highly anaplastic forms. (From DeVita et al., Cancer: Principles and Practice of Oncology, 5th ed, p2052; Adams et al., Principles of Neurology, 6th ed, p655)",
    "arabic_definition": "أورام الدبقيات القليلة التغصن (الإنجليزية: Oligodendrogliomas) هي أحد أنواع الأورام الدبقية التي يعتقد أنها تنشأ من الخلايا الدبقية القليلة التغصن في الدماغ وهي نوع من خلايا الدماغ التي تدعم وتعزل الألياف العصبية في الجهاز العصبي المركزي، أو قد تنشأ من الخلايا الأرومية الدبقية. هذا النوع من الأورام يصيب الجهاز العصبي المركزي (CNS)، مما يعني أنه يبدأ في الدماغ أو النخاع الشوكي.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009837.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "teratocarcinoma",
    "term_en": "Teratocarcinoma",
    "term_ar": "ورم الخلية الجنسية",
    "synonyms": [
      "Teratocarcinomas",
      "Germ cell tumor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant neoplasm consisting of elements of teratoma with those of embryonal carcinoma or choriocarcinoma, or both. It occurs most often in the testis. (Dorland, 27th ed)",
    "arabic_definition": "ورم الخلية الجنسية (اختصارًا GCT) هو ورم مشتق من الخلايا الجنسية. فأورام الخلية الجنسية يمكن أن تكون أورام سرطانية أو حميدة. (Teratocarcinoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018243.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dermatofibrosarcoma",
    "term_en": "Dermatofibrosarcoma",
    "term_ar": "ساركومة ليفية جلدية حدبية",
    "synonyms": [
      "Dermatofibrosarcomas",
      "Darier-Ferrand Tumor",
      "Tumor, Darier-Ferrand",
      "Darier-Hoffmann Tumor",
      "Tumor, Darier-Hoffmann",
      "Dermatofibrosarcoma Protuberan",
      "Dermatofibrosarcoma Protuberans",
      "Protuberan, Dermatofibrosarcoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sarcoma of the deep layers of the skin. The tumors are locally aggressive tends to recur but rarely metastatic. It can be classified into variants depending on the cell type tumors are derived from or by its characteristics: Pigmented variant from MELANIN-containing DERMAL DENDRITIC CELLS; Myxoid variant, myxoid STROMAL CELLS; Giant cell variant characterized by GIANT CELLS in the tumors; and Fibrosarcomatous variant chracterized by tumor areas histologically indistinguishable from FIBROSARCOMA.",
    "arabic_definition": "الساركومة الليفية الجلدية الحدبية(English: DFSP) هو ورم سرطانى نادر جدًّا ينشأ في طبقة الأدمة في الجلد، ويُصنَّف ضمن أنواع الساركومة؛ ساركومة ليفية بالتحديد. يصيب واحدًا من كل مليون شخص كل عام. (Dermatofibrosarcoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018223.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chondrosarcoma",
    "term_en": "Chondrosarcoma",
    "term_ar": "ساركومة غضروفية",
    "synonyms": [
      "Chondrosarcomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A slowly growing malignant neoplasm derived from cartilage cells, occurring most frequently in pelvic bones or near the ends of long bones, in middle-aged and old people. Most chondrosarcomas arise de novo, but some may develop in a preexisting benign cartilaginous lesion or in patients with ENCHONDROMATOSIS. (Stedman, 25th ed)",
    "arabic_definition": "الساركومة الغضروفِيّة هي أحد أنواع سرطانات العظم التي تتطور في خلايا الغضروف. الغضروف هو النسيج الضام الموجود في البالغين والمسؤول عن حماية العظام وجعلها تتحرك بسلاسة في المفصل وبالتالي منع تلفها. (Chondrosarcoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002813.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paraganglioma",
    "term_en": "Paraganglioma",
    "term_ar": "ورم جنيب العقدة العصبية",
    "synonyms": [
      "Paragangliomas",
      "Paragangliomata",
      "Paragangliomatas",
      "Paraganglioma, Gangliocytic",
      "Gangliocytic Paraganglioma",
      "Gangliocytic Paragangliomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neural crest tumor usually derived from the chromoreceptor tissue of a paraganglion, such as the carotid body, or medulla of the adrenal gland (usually called a chromaffinoma or pheochromocytoma). It is more common in women than in men. (Stedman, 25th ed; from Segen, Dictionary of Modern Medicine, 1992)",
    "arabic_definition": "ورم جنيب العقدة العصبية أو ورم المستقتمات هو ورمٌ عصبيٌ هرمونيٌ نادر قد ينشأ في مواضع مختلفة من الجسم (بما في ذلك الرأس والعنق والصدر والبطن). يعتبر نحو 97% من هذا الورم خراجا حميدا ويمكن معالجته عن طريق الاستئصال الجراحي، بينما ال 3% الباقية هي ورم خبيث بسبب قدرته على إنتاج النقائل البعيدة. (Paraganglioma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010235.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroblastoma",
    "term_en": "Neuroblastoma",
    "term_ar": "ورم الخلايا البدائية العصبية",
    "synonyms": [
      "Neuroblastomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A common neoplasm of early childhood arising from neural crest cells in the sympathetic nervous system, and characterized by diverse clinical behavior, ranging from spontaneous remission to rapid metastatic progression and death. This tumor is the most common intraabdominal malignancy of childhood, but it may also arise from thorax, neck, or rarely occur in the central nervous system. Histologic features include uniform round cells with hyperchromatic nuclei arranged in nests and separated by fibrovascular septa. Neuroblastomas may be associated with the opsoclonus-myoclonus syndrome. (From DeVita et al., Cancer: Principles and Practice of Oncology, 5th ed, pp2099-2101; Curr Opin Oncol 1998 Jan;10(1):43-51)",
    "arabic_definition": "ورمٌ أروميٌّ عصبي أو ورم الخلايا البدائية العصبية (الإنجليزية: neuroblastoma) هو الورم الصلب الأكثر شيوعا خارج القحف في مرحلة الطفولة وأكثر أنواع السرطان شيوعا في مرحلة الرضاعة، مع معدل حدوث سنوي يبلغ نحو 650 حالة جديدة سنويا في الولايات المتحدة. ما يقرب من 50 في المئة من حالات ورم الخلايا البدائية العصبية تصيب الأطفال الذين تقل أعمارهم عن سنتين.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009447.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphangioleiomyomatosis",
    "term_en": "Lymphangioleiomyomatosis",
    "term_ar": "ورام عضلي أملس وعائي لمفي",
    "synonyms": [
      "Lymphangioleiomyomatoses",
      "Lymphangiomyomatosis",
      "Lymphangiomyomatoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease characterized by the progressive invasion of SMOOTH MUSCLE CELLS into the LYMPHATIC VESSELS, and the BLOOD VESSELS. The majority of the cases occur in the LUNGS of women of child-bearing age, eventually blocking the flow of air, blood, and lymph. The common symptom is shortness of breath (DYSPNEA).",
    "arabic_definition": "الورام العضلي الأملس الوعائي اللمفي هو مرض نادر مترق يصيب أجهزة الجسم ينتج عنه تدمير الرئة الكيسي. يصيب النساء عادة ويظهر غالبا في عمر الإنجاب. (Lymphangioleiomyomatosis)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018192.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leiomyosarcoma",
    "term_en": "Leiomyosarcoma",
    "term_ar": "ساركومة عضلية ملساء",
    "synonyms": [
      "Leiomyosarcomas",
      "Leiomyosarcoma, Epithelioid",
      "Epithelioid Leiomyosarcoma",
      "Epithelioid Leiomyosarcomas",
      "Leiomyosarcomas, Epithelioid",
      "Leiomyosarcoma, Myxoid",
      "Leiomyosarcomas, Myxoid",
      "Myxoid Leiomyosarcoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sarcoma containing large spindle cells of smooth muscle. Although it rarely occurs in soft tissue, it is common in the viscera. It is the most common soft tissue sarcoma of the gastrointestinal tract and uterus. The median age of patients is 60 years. (From Dorland, 27th ed; Holland et al., Cancer Medicine, 3d ed, p1865)",
    "arabic_definition": "الساركومة العضلية الملساء (بالإنجليزية: Leiomyosarcoma، واختصارها LMS)، هي ورم سرطاني ينمو في العضلات الملساء. ويسمى الورم الحميد التي ينشأ من نفس النسيج ورم عضلي أملس (بالإنجليزية: leiomyoma).",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007890.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carcinogenesis",
    "term_en": "Carcinogenesis",
    "term_ar": "تسرطن",
    "synonyms": [
      "Carcinogeneses",
      "Oncogenesis",
      "Oncogeneses",
      "Tumorigenesis",
      "Tumorigeneses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The origin, production or development of cancer through genotypic and phenotypic changes which upset the normal balance between cell proliferation and cell death. Carcinogenesis generally requires a constellation of steps, which may occur quickly or over a period of many years.",
    "arabic_definition": "التَّسَرْطُن (بالإنجليزية: Carcinogenesis أو oncogenesis أو tumorigenesis)، هو تشكل السرطان نتيجة تحول الخلايا الطبيعية إلى خلايا سرطانية. تتصف هذه العملية بتغيرات على المستويات الخلوية والجينية وفوق الجينية (التخلقية) وشذوذ في انقسام الخلايا.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063646.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteochondroma",
    "term_en": "Osteochondroma",
    "term_ar": "ورم عظمي غضروفي",
    "synonyms": [
      "Osteochondromas",
      "Exostosis, Cartilaginous",
      "Cartilaginous Exostoses",
      "Cartilaginous Exostosis",
      "Exostoses, Cartilaginous",
      "Exostosis, Osteocartilaginous",
      "Exostoses, Osteocartilaginous",
      "Osteocartilaginous Exostoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cartilage-capped benign tumor that often appears as a stalk on the surface of bone. It is probably a developmental malformation rather than a true neoplasm and is usually found in the metaphysis of the distal femur, proximal tibia, or proximal humerus. Osteochondroma is the most common of benign bone tumors.",
    "arabic_definition": "الورم العظمي الغضروفي هو أكثر أورام العظام الحميدة شيوعًا. تأخذ الأورام شكل إسقاطات عظمية مغطاة بالغضروف أو ثمرة على سطح أعران العظام. (Osteochondroma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015831.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatoblastoma",
    "term_en": "Hepatoblastoma",
    "term_ar": "ورم أرومي كبدي",
    "synonyms": [
      "Hepatoblastomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant neoplasm occurring in young children, primarily in the liver, composed of tissue resembling embryonal or fetal hepatic epithelium, or mixed epithelial and mesenchymal tissues. (Stedman, 25th ed)",
    "arabic_definition": "ورم أرومي كبدي (الإنجليزية: Hepatoblastoma) هو سرطان خبيث غير شائع يصيب الأطفال والرضّع، يتكون نسيجيًا من خلايا مشابهة للخلايا الكبدية الجنينية والناضجة وخلايا القناة الصفراوية، يتظاهرعادًة على شكل كتلة في البطن، وغالبًا ما يُشخص خلال السنوات الثلاث الأولى من عمر الطفل. يترافق الورم بارتفاع مستويات إلفا فيتو بروتين، ويسوء الإنذار في حال عدم ارتفاع مستوياته عند التشخيص.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018197.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "craniopharyngioma",
    "term_en": "Craniopharyngioma",
    "term_ar": "ورم قحفي بلعومي",
    "synonyms": [
      "Craniopharyngiomas",
      "Neoplasm, Rathke Cleft",
      "Neoplasm, Rathke's Cleft",
      "Neoplasm, Rathkes Cleft",
      "Rathke Cleft Neoplasm",
      "Rathke Pouch Tumor",
      "Tumor, Rathke Pouch",
      "Rathke's Cleft Neoplasm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign pituitary-region neoplasm that originates from Rathke's pouch. The two major histologic and clinical subtypes are adamantinous (or classical) craniopharyngioma and papillary craniopharyngioma. The adamantinous form presents in children and adolescents as an expanding cystic lesion in the pituitary region. The cystic cavity is filled with a black viscous substance and histologically the tumor is composed of adamantinomatous epithelium and areas of calcification and necrosis. Papillary craniopharyngiomas occur in adults, and histologically feature a squamous epithelium with papillations. (From Joynt, Clinical Neurology, 1998, Ch14, p50)",
    "arabic_definition": "الورم القحفي البلعومي أو الورم الجمجمي البلعومي (الإنجليزية: Craniopharyngioma) هو نوع نادر من أورام المخ المشتقة من الأنسجة الجنينية للغدة النخامية التي تحدث بشكل شائع عند الأطفال ولكنها تؤثر أيضًا على البالغين، قد تظهر في أي عمر حتى في الفترة السابقة للولادة وفترة حديثي الولادة، لكن معدلات الإصابة العليا تبدأ في مرحلة الطفولة من 5 إلى 14 عامًا وتبدأ من سن 50 إلى 74 عامًا، قد يصاب الأشخاص بعمى ربعي ساقي باطني يؤدي إلى عمى نصفي صدغي مزدوج حيث أن الورم قد يضغط على تصالبة بصرية، تختلف الأورام القحفية عن أورام فلح الراتكة والأكياس العنكبوتية داخل الخلايا.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003397.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphangiosarcoma",
    "term_en": "Lymphangiosarcoma",
    "term_ar": "ساركومة وعائية لمفية",
    "synonyms": [
      "Lymphangiosarcomas",
      "Lymphangioendothelioma, Malignant",
      "Lymphangioendotheliomas, Malignant",
      "Malignant Lymphangioendothelioma",
      "Malignant Lymphangioendotheliomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant tumor originating from the endothelial cells of lymphatic vessels. Most lymphangiosarcomas arise in an arm secondary to radical mastectomy but they sometimes complicate idiopathic lymphedema. The lymphedema has usually been present for 6 to 10 years before malignant changes develop. (From Dorland, 27th ed; Holland et al., Cancer Medicine, 3d ed, p1866)",
    "arabic_definition": "الساركومةُ الوِعَائِيَّةُ اللِّمْفِيَّة (الإنجليزية: Lymphangiosarcoma) هو ورم خبيث نادر يحدث في الحالات الطويلة الأمد من الوذمة اللمفية الأولية أو الثانوية. وهو يشمل إما الأطراف الليمفاوية العلوية أو السفلية ولكنه أكثر شيوعًا في الأطراف العلوية.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008204.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "medulloblastoma",
    "term_en": "Medulloblastoma",
    "term_ar": "ورم أرومي نخاعي",
    "synonyms": [
      "Medulloblastomas",
      "Medullomyoblastoma",
      "Medullomyoblastomas",
      "Arachnoidal Cerebellar Sarcoma, Circumscribed",
      "Medulloblastoma, Desmoplastic",
      "Desmoplastic Medulloblastoma",
      "Desmoplastic Medulloblastomas",
      "Medulloblastomas, Desmoplastic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant neoplasm that may be classified either as a glioma or as a primitive neuroectodermal tumor of childhood (see NEUROECTODERMAL TUMOR, PRIMITIVE). The tumor occurs most frequently in the first decade of life with the most typical location being the cerebellar vermis. Histologic features include a high degree of cellularity, frequent mitotic figures, and a tendency for the cells to organize into sheets or form rosettes. Medulloblastoma have a high propensity to spread throughout the craniospinal intradural axis. (From DeVita et al., Cancer: Principles and Practice of Oncology, 5th ed, pp2060-1)",
    "arabic_definition": "الورم الأرومي النخاعي هو نوع من أورام الدماغ .يبدأ بالتكون عندما تبدأ الخلايا الطبيعية في الدماغ بالتغيّر وتنمو دون حسيب ولا رقيب، وتشكيل كتلة. ويمكن للورم أن يكون حميدا (ليس سرطانيا) أو سرطان (سرطانيا، مما يعني أنه يمكن أن ينتشر إلى أجزاء أخرى من الجسم). (Medulloblastoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008527.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ganglioneuroma",
    "term_en": "Ganglioneuroma",
    "term_ar": "ورم عصبي عقدي",
    "synonyms": [
      "Ganglioneuromas",
      "Gangliocytoma",
      "Gangliocytomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign neoplasm that usually arises from the sympathetic trunk in the mediastinum. Histologic features include spindle cell proliferation (resembling a neurofibroma) and the presence of large ganglion cells. The tumor may present clinically with HORNER SYNDROME or diarrhea due to ectopic production of vasoactive intestinal peptide. (From DeVita et al., Cancer: Principles and Practice of Oncology, 5th ed, p966)",
    "arabic_definition": "الورم العصبي العقدي هو ورم نادر وحميد من الألياف العصبية الودية ينشأ من خلايا السليفة الودية للعرف العصبي وهي خلايا لا متمايزة للجهاز العصبي الودي. على الرغم من أن الأورام العصبية العقدية ذات نفسها تتكون من خلايا ناضجة ومتمايزة ولا تحتوي على أية خلايا غير ناضجة. (Ganglioneuroma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005729.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ganglioglioma",
    "term_en": "Ganglioglioma",
    "term_ar": "ورم دبقي عقدي",
    "synonyms": [
      "Gangliogliomas",
      "Ganglioglioma, Benign",
      "Benign Ganglioglioma",
      "Benign Gangliogliomas",
      "Gangliogliomas, Benign",
      "Ganglioglioma, Malignant",
      "Gangliogliomas, Malignant",
      "Malignant Ganglioglioma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare indolent tumors comprised of neoplastic glial and neuronal cells which occur primarily in children and young adults. Benign lesions tend to be associated with long survival unless the tumor degenerates into a histologically malignant form. They tend to occur in the optic nerve and white matter of the brain and spinal cord.",
    "arabic_definition": "الورم الدبقي العقدي ورم بدئي نادر في الجهاز العصبي المركزي، بطيء النمو، يظهر في معظم الأحيان في الفص الصدغي عند الأطفال والشباب. (Ganglioglioma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018303.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angiomyolipoma",
    "term_en": "Angiomyolipoma",
    "term_ar": "ورم شحمي عضلي وعائي",
    "synonyms": [
      "Angiomyolipomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor containing vascular, adipose, and muscle elements. It occurs most often in the kidney with smooth muscle elements (angiolipoleiomyoma) in association with tuberous sclerosis. (Dorland, 27th ed)",
    "arabic_definition": "الأورام الشحمية العضلية الوعائية (الإنجليزية: Angiomyolipomas) هي أكثر الأورام الحميدة شيوعًا في الكلية، وعلى الرغم من أنها تُعتبر حميدة إلا أنها قد تتطور لتُسبب ضعف وظائف الكلى أو قد تتوسع الأوعية الدموية وتنفجر مُسببةً نزيف. الأورام الشحمية العضلية الوعائية الكبيرة يُمكن معالجتها بإحداث الانسداد.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018207.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemangioblastoma",
    "term_en": "Hemangioblastoma",
    "term_ar": "الورم الأرومي الوعائي",
    "synonyms": [
      "Hemangioblastomas",
      "Multiple Hemangioblastomas",
      "Hemangioblastoma, Multiple",
      "Hemangioblastomas, Multiple",
      "Multiple Hemangioblastoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor of the nervous system that may occur sporadically or in association with VON HIPPEL-LINDAU DISEASE. It accounts for approximately 2% of intracranial tumors, arising most frequently in the cerebellar hemispheres and vermis. Histologically, the tumors are composed of multiple capillary and sinusoidal channels lined with endothelial cells and clusters of lipid-laden pseudoxanthoma cells. Usually solitary, these tumors can be multiple and may also occur in the brain stem, spinal cord, retina, and supratentorial compartment. Cerebellar hemangioblastomas usually present in the third decade with INTRACRANIAL HYPERTENSION, and ataxia. (From DeVita et al., Cancer: Principles and Practice of Oncology, 5th ed, pp2071-2)",
    "arabic_definition": "الأورام الأرومية الوعائية، أو الورم الأرومي الوعائي الدموي، هي أورام وعائية في الجهاز العصبي المركزي تنشأ من جهاز الدوران، وتحدث عادة خلال منتصف العمر. قد تظهر هذه الأورام في مواقع أخرى مثل الحبل الشوكي وشبكية العين. (Hemangioblastoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018325.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synovial-chondromatosis",
    "term_en": "Synovial Chondromatosis",
    "term_ar": "ورام غضروفي زليلي",
    "synonyms": [
      "Chondromatoses, Synovial",
      "Synovial Chondromatoses",
      "Henderson-Jones Syndrome",
      "Syndrome, Henderson-Jones",
      "Reichel's Syndrome",
      "Reichels Syndrome",
      "Reichel Syndrome",
      "Syndrome, Reichel's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare, benign, chronic, progressive metaplasia in which cartilage is formed in the synovial membranes of joints, tendon sheaths, or bursae. Some of the metaplastic foci can become detached producing loose bodies. When the loose bodies undergo secondary calcification, the condition is called synovial osteochondromatosis.",
    "arabic_definition": "داء الغضروف الزليلي هو مرض يصيب الغشاء الزليلي، وهو غشاء مرن رقيق حول المفصل. (Synovial Chondromatosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015838.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "somatostatinoma",
    "term_en": "Somatostatinoma",
    "term_ar": "ورم سوماتوستاتيني",
    "synonyms": [
      "Somatostatinomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A SOMATOSTATIN-secreting tumor derived from the pancreatic delta cells (SOMATOSTATIN-SECRETING CELLS). It is also found in the INTESTINE. Somatostatinomas are associated with DIABETES MELLITUS; CHOLELITHIASIS; STEATORRHEA; and HYPOCHLORHYDRIA. The majority of somatostatinomas have the potential for METASTASIS.",
    "arabic_definition": "الأورام السوماتوستاتينية هي ورم صماوي نادر يصيب خلايا دلتا في البنكرياس الصماوية التي تنتج السوماتوستاتين. تؤدي زيادة مستويات السوماتوستاتين إلى تثبيط إفراز هرمونات البنكرياس وهرمونات الجهاز الهضمي. (Somatostatinoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013005.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteochondromatosis",
    "term_en": "Osteochondromatosis",
    "term_ar": "ورام عظمي غضروفي",
    "synonyms": [
      "Osteochondromatoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition marked by the presence of multiple osteochondromas. (Dorland, 27th ed)",
    "arabic_definition": "ورام عظمي غضروفي أو ورام غضروفي عظمي أو داء الأورام العظمية الغضروفية (الإنجليزية: Osteochondromatosis) هي حالة تتضمن حدوث نمو في ورم عظمي غضروفي، ومن أنواعها:",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018216.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chondroblastoma",
    "term_en": "Chondroblastoma",
    "term_ar": "ورم أرومي غضروفي",
    "synonyms": [
      "Chondroblastomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A usually benign tumor composed of cells which arise from chondroblasts or their precursors and which tend to differentiate into cartilage cells. It occurs primarily in the epiphyses of adolescents. It is relatively rare and represents less than 2% of all primary bone tumors. The peak incidence is in the second decade of life; it is about twice as common in males as in females. (From Dorland, 27th ed; Holland et al., Cancer Medicine, 3d ed, p1846)",
    "arabic_definition": "الورم الأرومي الغضروفي ورم عظمي نادر وحميد وعدواني موضعيًا ويؤثر عادة في مشاشات أو نواتئ العظام الطويلة. يُعتقد أنه ينشأ من نمو الخلايا الغضروفية غير الناضجة (الأرومات الغضروفية) في مراكز التعظم الثانوية، والتي تنشأ من الصفيحة المشاشية أو بعض بقاياها. (Chondroblastoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002804.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteoblastoma",
    "term_en": "Osteoblastoma",
    "term_ar": "ورم بانيات العظم",
    "synonyms": [
      "Osteoblastomas",
      "Giant Osteoid Osteoma",
      "Giant Osteoid Osteomas",
      "Osteoid Osteoma, Giant",
      "Osteoid Osteomas, Giant",
      "Osteomas, Giant Osteoid",
      "Osteoma, Giant Osteoid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign, painful, tumor of bone characterized by the formation of osteoid tissue, primitive bone and calcified tissue. It occurs frequently in the spine of young persons. (From Dorland, 27th ed; Stedman, 25th ed)",
    "arabic_definition": "ورم بانيات العظم هو ورم عظمي عظماني حميد نادر، يصيب بانيات العظم ويحدث غالبًا في عظام العمود الفقري، وكذلك في العجز والعظام الطويلة والمسطحة والساقين واليدين والقدمين. لا تنتشر الأورام الحميدة إلى مواقع أو أعضاء مختلفة من الجسم. (Osteoblastoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018215.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystadenocarcinoma",
    "term_en": "Cystadenocarcinoma",
    "term_ar": "سرطانة غدية كيسية",
    "synonyms": [
      "Cystadenocarcinomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant neoplasm derived from glandular epithelium, in which cystic accumulations of retained secretions are formed. The neoplastic cells manifest varying degrees of anaplasia and invasiveness, and local extension and metastases occur. Cystadenocarcinomas develop frequently in the ovaries, where pseudomucinous and serous types are recognized. (Stedman, 25th ed)",
    "arabic_definition": "السرطان الغدي الكيسي (الإنجليزية: Cystadenocarcinoma) هو شكل خبيث من الورم الغدي الكيسي، وهو سرطان مشتق من النسيج الطلائي الغدي؛ حيث تتشكل التراكمات الكيسية من الإفرازات المحتجزة. تُظهر الخلايا الورمية درجات متفاوتة من التضيق والغزو، كما أنها تقوم بالامتداد والانتشار المحلي.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003536.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gonadoblastoma",
    "term_en": "Gonadoblastoma",
    "term_ar": "ورم أرومي بالغدة التناسلية",
    "synonyms": [
      "Gonadoblastomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A complex neoplasm composed of a mixture of gonadal elements, such as large primordial GERM CELLS, immature SERTOLI CELLS or GRANULOSA CELLS of the sex cord, and gonadal stromal cells. Gonadoblastomas are most often associated with gonadal dysgenesis, 46, XY.",
    "arabic_definition": "الورم الأرومي بالغدة التناسلية هو ورم يحتوي على مكونات غدية متعددة، كالخلايا الجرثومية الابتدائية الكبيرة، وخلايا سرتولي غير الناضجة، والخلايا المحببة وخلية سدوية. (Gonadoblastoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018238.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carcinosarcoma",
    "term_en": "Carcinosarcoma",
    "term_ar": "ساركومة سرطانية",
    "synonyms": [
      "Carcinosarcomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant neoplasm that contains elements of carcinoma and sarcoma so extensively intermixed as to indicate neoplasia of epithelial and mesenchymal tissue. (Stedman, 25th ed)",
    "arabic_definition": "ساركومة سرطانية وتنطق حرفيًا كارسينوساركوما، هي نوعٌ من الأورام السرطانية الذي يتكون من خليط من الكارسينوما (أو سرطان الخلايا الطلائية) والساركوما (أو سرطان الأنسجة الرخوة). اوهو من أنواع الأورام النادرة، ويمكن أن ينشأ من أعضاء متنوعة، مثل الجلد، والغدد اللعابية، والرئتين، والمريء، والبنكرياس، والقولون، والرحم والمبيض والغدد الرحمية. (Carcinosarcoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002296.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myofibromatosis",
    "term_en": "Myofibromatosis",
    "term_ar": "ورم ليفي عضلي وليدي",
    "synonyms": [
      "Myofibromatoses",
      "Infantile myofibromatosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by multiple formations of myofibromas (LEIOMYOMA).",
    "arabic_definition": "الورم الليفي العضلي الوليدي ورم نادر يصيب 1 من كل 150,000 إلى 1 من كل 400,000 مولود حي. مع ذلك، يعد الورم الأكثر شيوعًا المشتق من النسيج الضام الليفي الذي يحدث بشكل أساسي لدى الرضع والأطفال الصغار. (Myofibromatosis)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018224.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cocarcinogenesis",
    "term_en": "Cocarcinogenesis",
    "term_ar": "عون المسرطن",
    "synonyms": [
      "Cocarcinogeneses",
      "Co-carcinogen"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The combination of two or more different factors in the production of cancer.",
    "arabic_definition": "عون المسرطن (الإنجليزية: Co-carcinogen) هي مادة كيميائية تعزز تأثيرات المسرطن في إنتاج السرطان، عادة يتم استخدام المصطلح للإشارة إلى المواد الكيميائية غير المسببة للسرطان من تلقاء نفسها، بحيث أن كمية مكافئة من المادة الكيميائية غير كافية لبدء عملية التسرطن. يمكن أن تكون المادة الكيميائية مسببة للسرطان مع مواد كيميائية أخرى أو مع مواد مسرطنة غير كيميائية مثل الأشعة فوق البنفسجية. (Cocarcinogenesis)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003043.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ganglioneuroblastoma",
    "term_en": "Ganglioneuroblastoma",
    "term_ar": "ورم أرومي عصبي عقدي",
    "synonyms": [
      "Ganglioneuroblastomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A moderately malignant neoplasm composed of primitive neuroectodermal cells dispersed in myxomatous or fibrous stroma intermixed with mature ganglion cells. It may undergo transformation into a neuroblastoma. It arises from the sympathetic trunk or less frequently from the adrenal medulla, cerebral cortex, and other locations. Cervical ganglioneuroblastomas may be associated with HORNER SYNDROME and the tumor may occasionally secrete vasoactive intestinal peptide, resulting in chronic diarrhea.",
    "arabic_definition": "الورم الأروميّ العصبيّ العُقْدي هو نوعٌ من الأورام الأروميَّة العصبيَّة، يكون محاطًا بخلايًا عُقديَّة. عادةً ما يكون تشخيصه صعبًا. (Ganglioneuroblastoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018305.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenomyoepithelioma",
    "term_en": "Adenomyoepithelioma",
    "term_ar": "ورم ظهاري عضلي غدي في الثدي",
    "synonyms": [
      "Adenomyoepitheliomas",
      "Adenomyoepithelioma of the breast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mixed epithelial and myoepithelial neoplasm usually encountered within the breast. It is a multinodular lesion presenting with a bicellular pattern of proliferating epithelial and myoepithelial cells, which are regularly distributed in the glandular structures.",
    "arabic_definition": "الْورم الظهاري العضلي الغدي في الثدي هُوَ وَرَمُ نَادِرُ فِي الثَّدْي يَتَكَوَّنُ مِنْ عَنَاصِرِ غَدِيَّةٍ وَخَلَاَيَا ظِهَارِيَّةِ عَضَلِيَّةِ. عَادَةٌ مَا يَكُونُ حميدًا؛ وَمَعَ ذَلِكَ، هُنَاكَ تقَاريرِ عَنْ سُلُوكِ خَبِيثِ. (Adenomyoepithelioma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055331.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myoepithelioma",
    "term_en": "Myoepithelioma",
    "term_ar": "ورم ظهاري عضلي",
    "synonyms": [
      "Myoepitheliomas",
      "Myoepithelial Tumor",
      "Myoepithelial Tumors",
      "Tumor, Myoepithelial",
      "Tumors, Myoepithelial",
      "Myoepithelioma of the head and neck"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A usually benign tumor made up predominantly of myoepithelial cells.",
    "arabic_definition": "الورم الظهاري العضلي (الإنجليزية: myoepithelioma) ورم ينشأ من الغدد اللعابية في الرأس والرقبة ويكون في الغالب حميد. كما في الاسم فإنه يتكون من الخلايا الظهارية العضلية التي توجد في الغدة النكافية وفي الحلق.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009208.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mastocytosis",
    "term_en": "Mastocytosis",
    "term_ar": "كثرة الخلايا البدينة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare neoplastic disorder characterized by a clonal proliferation of MAST CELLS, associated with KIT-D816 mutations, and accompanied by aberrant mast cell activation. The abnormal increase of MAST CELLS may occur in only the skin (MASTOCYTOSIS, CUTANEOUS), in extracutaneous tissues involving multiple organs (MASTOCYTOSIS, SYSTEMIC), or in solid tumors (MASTOCYTOMA).",
    "arabic_definition": "كثرة الخلايا البدينة هي مجموعةٌ من الاضطرابات النادرة عند الأطفال والبالغين تنتج عن وجود عدد كبير من الخلايا البدينة المعتلّة و سلائفها. (Mastocytosis)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008415.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "preleukemia",
    "term_en": "Preleukemia",
    "term_ar": "متلازمة خلل التنسج النخاعي",
    "synonyms": [
      "Preleukemias",
      "Myelodysplastic syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Conditions in which the abnormalities in the peripheral blood or bone marrow represent the early manifestations of acute leukemia, but in which the changes are not of sufficient magnitude or specificity to permit a diagnosis of acute leukemia by the usual clinical criteria.",
    "arabic_definition": "متلازمة خلل التنسج النقوي أو متلازمة خَلَلُ التَّنَسُّجِ النُّخاعِيّ أو متلازمة الثدن النقوي هو نمو غير طبيعي لخلايا الدم في مرحلة التكون النخعي. كانت تعرف في الماضي باسم -مُقَدِّماتُ الابْيِضاض- وهي حالة طبية تنطوي على إنتاج خلايا دم نقويه غير فعالة. (Preleukemia)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011289.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mesothelioma",
    "term_en": "Mesothelioma",
    "term_ar": "ورم المتوسطة",
    "synonyms": [
      "Mesotheliomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tumor derived from mesothelial tissue (peritoneum, pleura, pericardium). It appears as broad sheets of cells, with some regions containing spindle-shaped, sarcoma-like cells and other regions showing adenomatous patterns. Pleural mesotheliomas have been linked to exposure to asbestos. (Dorland, 27th ed)",
    "arabic_definition": "ورم المتوسطة (الإنجليزية: Mesothelioma) هو ورم يتطور من الطبقة الرقيقة من الأنسجة التي تغطي العديد من الأعضاء الداخلية (المعروفة باسم الظهارة المتوسطة). تعد المنطقة الأكثر إصابة هي بطانة الرئتين وجدار الصدر، ويكون أقل شيوعًا في الغشاء المصلي البطني ونادرًا ما يتأثر التامور.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008654.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteosarcoma",
    "term_en": "Osteosarcoma",
    "term_ar": "ساركوما عظمية",
    "synonyms": [
      "Osteosarcomas",
      "Osteogenic Sarcoma",
      "Osteosarcoma Tumor",
      "Osteosarcoma Tumors",
      "Tumor, Osteosarcoma",
      "Tumors, Osteosarcoma",
      "Sarcoma, Osteogenic",
      "Osteogenic Sarcomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sarcoma originating in bone-forming cells, affecting the ends of long bones. It is the most common and most malignant of sarcomas of the bones, and occurs chiefly among 10- to 25-year-old youths. (From Stedman, 25th ed)",
    "arabic_definition": "الساركوما العظمية أو الورم الغرني العظمي (الإنجليزية: Osteosarcoma) هو ورم سرطاني غرني sarcoma ينشأ في العظام، ويعد من أكثر سرطانات العظام شيوعاً وأكثرها انتشاراً لدى الأطفال، ويظهر عادةً قبيل سن العاشرة وعند المراهقين واليافعين. ويزيد معدله بنسبة تصل إلى الضعف عند الذكور عنه لدى الإناث.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012516.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glucagonoma",
    "term_en": "Glucagonoma",
    "term_ar": "ورم غلوكاغوني",
    "synonyms": [
      "Glucagonomas",
      "Adenoma, alpha-Cell",
      "Adenomas, alpha-Cell",
      "alpha-Cell Adenoma",
      "alpha-Cell Adenomas",
      "alpha-Cell Tumor",
      "alpha-Cell Tumors",
      "Tumor, alpha-Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An almost always malignant GLUCAGON-secreting tumor derived from the PANCREATIC ALPHA CELLS. It is characterized by a distinctive migratory ERYTHEMA; WEIGHT LOSS; STOMATITIS; GLOSSITIS; DIABETES MELLITUS; hypoaminoacidemia; and normochromic normocytic ANEMIA.",
    "arabic_definition": "ورم غلوكاغوني (الإنجليزية: Glucagonoma) هو نوع من أنواع الأورام ويُعد نادر الوجود يُصيب خلية ألفا في البنكرياس مؤديًا بذلك إلى زيادة كمية المُنتجة من هرمون الغلوكاغون.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005935.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "insulinoma",
    "term_en": "Insulinoma",
    "term_ar": "ورم جزيري",
    "synonyms": [
      "Insulinomas",
      "beta-Cell Tumor",
      "beta-Cell Tumors",
      "Tumor, beta-Cell",
      "Tumors, beta-Cell",
      "Adenoma, beta-Cell",
      "Adenomas, beta-Cell",
      "beta-Cell Adenoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor of the PANCREATIC BETA CELLS. Insulinoma secretes excess INSULIN resulting in HYPOGLYCEMIA.",
    "arabic_definition": "وَرَمٌ جَزيرِيّ أو يُسمّى أيضًا وَرَمٌ إِنسولينيّ (الإنجليزية: Insulinoma) هو ورم في البنكرياس ينشأ من خلايا بيتا ويُفرز الإنسولين. وهو شكل نادر من أورام الغدد الصم العصبية.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007340.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leukoplakia",
    "term_en": "Leukoplakia",
    "term_ar": "صداف",
    "synonyms": [
      "Leukoplakias",
      "Leukoplakic Lesions",
      "Lesion, Leukoplakic",
      "Lesions, Leukoplakic",
      "Leukoplakic Lesion",
      "Leukokeratosis",
      "Leukokeratoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A white patch lesion found on a MUCOUS MEMBRANE that cannot be scraped off. Leukoplakia is generally considered a precancerous condition, however its appearance may also result from a variety of HEREDITARY DISEASES.",
    "arabic_definition": "اللطاخ الأبيض أو الطَلَوان أو الصداف أو اللطخة البيضاء مجهولة السبب (Leukoplakia) بقعٌ بيضاء تظهر في الغشاء المُخاطِي للفم. ويكون الرجال هم أكثر عرضة للإصابة بهذا المرض أكثر من النساء بما يقارب الثلاثة أضعاف.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007971.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhabdomyoma",
    "term_en": "Rhabdomyoma",
    "term_ar": "ورم عضلي مخطط",
    "synonyms": [
      "Rhabdomyomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor derived from striated muscle. It is extremely rare, generally occurring in the tongue, neck muscles, larynx, uvula, nasal cavity, axilla, vulva, and heart. These tumors are treated by simple excision. (Dorland, 27th ed; DeVita Jr et al., Cancer: Principles &amp; Practice of Oncology, 3d ed, p1354)",
    "arabic_definition": "الورم العضلي المخطط (الإنجليزية: Rhabdomyoma) ورم حميد ينشأ من العضلات المخططة. قد يكون قلبي أو خارج القلب أي يحدث في أماكن أخرى غير القلب.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012207.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prolactinoma",
    "term_en": "Prolactinoma",
    "term_ar": "ورم برولاكتيني",
    "synonyms": [
      "Prolactinomas",
      "Prolactin-Producing Pituitary Adenoma",
      "Pituitary Adenoma, Prolactin-Producing",
      "Pituitary Adenomas, Prolactin-Producing",
      "Prolactin-Producing Pituitary Adenomas",
      "Prolactin-Secreting Pituitary Adenoma",
      "Prolactinoma, Familial",
      "Lactotroph Adenoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pituitary adenoma which secretes PROLACTIN, leading to HYPERPROLACTINEMIA. Clinical manifestations include AMENORRHEA; GALACTORRHEA; IMPOTENCE; HEADACHE; visual disturbances; and CEREBROSPINAL FLUID RHINORRHEA.",
    "arabic_definition": "الورم البرولاكتيني أو البرولاكتينوما ورم غدي حميد يصيب الغدة النخامية التي تنتج هرمون البرولاكتين. وهو أكثر اورام الغدة النخامية شيوعا وتظهر اعراض المرض عندما يزداد معدل افراز البرولاكتين في الدم أو عن طريق ضغط الورم على الأنسجة المحيطة به. (Prolactinoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015175.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ependymoma",
    "term_en": "Ependymoma",
    "term_ar": "ورم بطاني عصبي",
    "synonyms": [
      "Ependymomas",
      "Ependymoma, Myxopapillary",
      "Ependymomas, Myxopapillary",
      "Myxopapillary Ependymoma",
      "Myxopapillary Ependymomas",
      "Ependymoma, Papillary",
      "Ependymomas, Papillary",
      "Papillary Ependymomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Glioma derived from EPENDYMOGLIAL CELLS that tend to present as malignant intracranial tumors in children and as benign intraspinal neoplasms in adults. It may arise from any level of the ventricular system or central canal of the spinal cord. Intracranial ependymomas most frequently originate in the FOURTH VENTRICLE and histologically are densely cellular tumors which may contain ependymal tubules and perivascular pseudorosettes. Spinal ependymomas are usually benign papillary or myxopapillary tumors. (From DeVita et al., Principles and Practice of Oncology, 5th ed, p2018; Escourolle et al., Manual of Basic Neuropathology, 2nd ed, pp28-9)",
    "arabic_definition": "ورم بطاني عصبي هو أحد الأورام الدبقية في الجهاز العصبي المركزي. ورم بطيء النمو عموماً، يصيب غالباً صغار السن والشباب، وينشأ من جدار البطينات في الدماغ وفي النخاع الشوكي. (Ependymoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004806.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meningioma",
    "term_en": "Meningioma",
    "term_ar": "ورم سحائي",
    "synonyms": [
      "Meningiomas",
      "Meningiomas, Multiple",
      "Meningioma, Multiple",
      "Multiple Meningioma",
      "Multiple Meningiomas",
      "Meningiomatosis",
      "Meningiomatoses",
      "Benign Meningioma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A relatively common neoplasm of the CENTRAL NERVOUS SYSTEM that arises from arachnoidal cells. The majority are well differentiated vascular tumors which grow slowly and have a low potential to be invasive, although malignant subtypes occur. Meningiomas have a predilection to arise from the parasagittal region, cerebral convexity, sphenoidal ridge, olfactory groove, and SPINAL CANAL. (From DeVita et al., Cancer: Principles and Practice of Oncology, 5th ed, pp2056-7)",
    "arabic_definition": "الأورام السحائية هي مجموعة متنوعة من الأورام التي تتكون في طبقة السحايا، التي تمثل مجموعة من الأغشية المحيطة بالجهاز العصبي المركزي. تنشأ هذه الأورام من خلايا عنكبوتية في الزغبات العنكبوتية في طبقة السحايا. (Meningioma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008579.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glioblastoma",
    "term_en": "Glioblastoma",
    "term_ar": "ورم أرومي دبقي",
    "synonyms": [
      "Glioblastomas",
      "Astrocytoma, Grade IV",
      "Astrocytomas, Grade IV",
      "Grade IV Astrocytoma",
      "Grade IV Astrocytomas",
      "Glioblastoma Multiforme",
      "Giant Cell Glioblastoma",
      "Giant Cell Glioblastomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant form of astrocytoma histologically characterized by pleomorphism of cells, nuclear atypia, microhemorrhage, and necrosis. They may arise in any region of the central nervous system, with a predilection for the cerebral hemispheres, basal ganglia, and commissural pathways. Clinical presentation most frequently occurs in the fifth or sixth decade of life with focal neurologic signs or seizures.",
    "arabic_definition": "الورم الأرومي الدِبْقي وعُرف سابقًا باسم الورم الأرومي الدِبْقي متعدَّد الأشكال (اختصارًا GBM)، هو أكثر أنواع الأورام التي تنشأ في الدماغ عدوانيةً وشيوعًا، ويكون مآل المريض للبقاء على قيد الحياة سيئًا جدًا. العلامات والأعراض الأوليَّة لهذا الورم عامةٌ وغير مخصصةٌ له فقط، وتشمل الصداع وتغيراتٍ في الشخصيَّة والغثيان، إضافةً لأعراضٍ تشبه أعراض السكتة الدماغيَّة. (Glioblastoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005909.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "astrocytoma",
    "term_en": "Astrocytoma",
    "term_ar": "ورم نجمي",
    "synonyms": [
      "Astrocytomas",
      "Glioma, Astrocytic",
      "Astrocytic Glioma",
      "Astrocytic Gliomas",
      "Gliomas, Astrocytic",
      "Astroglioma",
      "Astrogliomas",
      "Astrocytoma, Subependymal Giant Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Neoplasms of the brain and spinal cord derived from glial cells which vary from histologically benign forms to highly anaplastic and malignant tumors. Fibrillary astrocytomas are the most common type and may be classified in order of increasing malignancy (grades I through IV). In the first two decades of life, astrocytomas tend to originate in the cerebellar hemispheres; in adults, they most frequently arise in the cerebrum and frequently undergo malignant transformation. (From Devita et al., Cancer: Principles and Practice of Oncology, 5th ed, pp2013-7; Holland et al., Cancer Medicine, 3d ed, p1082)",
    "arabic_definition": "الورم النجمي (الإنجليزية: Astrocytomas) هو نوع من سرطان الدماغ. ويأتي في نوع معين من الخلايا الدبقية، وخلايا الدماغ، على شكل «نجمة» في المخ.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001254.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysgerminoma",
    "term_en": "Dysgerminoma",
    "term_ar": "ورم خللي إنتاشي",
    "synonyms": [
      "Dysgerminomas",
      "Disgerminoma",
      "Disgerminomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant ovarian neoplasm, thought to be derived from primordial germ cells of the sexually undifferentiated embryonic gonad. It is the counterpart of the classical seminoma of the testis, to which it is both grossly and histologically identical. Dysgerminomas comprise 16% of all germ cell tumors but are rare before the age of 10, although nearly 50% occur before the age of 20. They are generally considered of low-grade malignancy but may spread if the tumor extends through its capsule and involves lymph nodes or blood vessels. (Dorland, 27th ed; DeVita Jr et al., Cancer: Principles &amp; Practice of Oncology, 3d ed, p1646)",
    "arabic_definition": "الوَرم الالخللي الإِنتاشِي أو ورم المبيض الاختلالي (الإنجليزية: Dysgerminoma) هو نوع من أورام الخلايا الجرثومية، عادةً ما يكون خبيثاً ويظهر في المبيض، ونسيجياً يشبه الورم المنوي في الخصية، وأورام مماثلة في الجهاز العصبي المركزي، تمثل أورام الخلايا الجرثومية 20% من كل أورام المبيض، و3-5% منها خبيثة، وأكثر أورام الخلايا الجرثومية شيوعاً هو الورم الإنتاشي؛ حيث يمثل 2% من كل سرطانات المبيض. وعلى الرغم من ندرته يحتل أهمية لأنه غالباً ما يصيب النساء في سن الإنجاب (< 30 عاماً)، ويمثل ثلثي سرطانات المبيض في الإناث الأقل من 20 عاماً، لكنه بمجرد تشخيصه يستجيب جيداً للعلاج، فلا يشكل خطراً على خصوبة وصحة المريضة.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004407.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erythroplasia",
    "term_en": "Erythroplasia",
    "term_ar": "تنسج أحمر",
    "synonyms": [
      "Erythroplasias",
      "Erythroplakia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of the mucous membrane characterized by erythematous papular lesions.",
    "arabic_definition": "التنسج الأحمر أو الطلاوة الحمراء: مصطلح يطلق على البقع الحُمَامَوِيّة (الحمراء) على الأنسجة المخاطية والتي لا يمكن أن تعزى إلى أي مرض. وقد صاغ هذا المصطلح من قبل لويس كيرات لوصف آفَةٌ حمراء سابِقَةٌ للتَّسَرْطُن في القضيب. (Erythroplasia)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004919.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "liposarcoma",
    "term_en": "Liposarcoma",
    "term_ar": "ساركومة شحمية",
    "synonyms": [
      "Liposarcomas",
      "Liposarcoma, Dedifferentiated",
      "Dedifferentiated Liposarcoma",
      "Dedifferentiated Liposarcomas",
      "Liposarcoma, Pleomorphic",
      "Pleomorphic Liposarcoma",
      "Pleomorphic Liposarcomas",
      "Well Differentiated Liposarcoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant tumor derived from primitive or embryonal lipoblastic cells. It may be composed of well-differentiated fat cells or may be dedifferentiated: myxoid (LIPOSARCOMA, MYXOID), round-celled, or pleomorphic, usually in association with a rich network of capillaries. Recurrences are common and dedifferentiated liposarcomas metastasize to the lungs or serosal surfaces. (From Dorland, 27th ed; Stedman, 25th ed)",
    "arabic_definition": "ساركومةٌ شَحْمِيَّةٌ أو غرن شحمي (الإنجليزية: Liposarcoma) هي سرطان ينشأ من الخلايا الدهنية الموجودة في الأنسجة الرخوة العميقة مثل تلك الموجودة في الفخذ والتجويف خلف الصفاق. الساركومة الشحمية هي من السرطانات النادرة والتي تشبه إلى حد كبير الخلايا الدهنية أثناء فحصها تحت المجهر.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008080.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibrosarcoma",
    "term_en": "Fibrosarcoma",
    "term_ar": "ساركومة ليفية",
    "synonyms": [
      "Fibrosarcomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sarcoma derived from deep fibrous tissue, characterized by bundles of immature proliferating fibroblasts with variable collagen formation, which tends to invade locally and metastasize by the bloodstream. (Stedman, 25th ed)",
    "arabic_definition": "الساركومة الليفية (الإنجليزية: Fibrosarcoma) هي ورم خبيث في اللحمة المتوسطة مستمد من نسيج ضام ليفي، ويتميز بوجود خلايا ليفية تكاثرية غير ناضجة أو خلايا مغزلية غير متمايزة في نمط رسومي، وعادة ما توجد في الذكور الذين تتراوح أعمارهم بين 30 إلى 40 عام، حيث ينشأ في الأنسجة الليفية من العظام، ويغزو العظام الطويلة أو المسطحة، مثل عظم الفخذ، والساق، والفك السفلي، ويشمل أيضا السمحاق والعضلات الموجودة فوقه.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005354.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibroadenoma",
    "term_en": "Fibroadenoma",
    "term_ar": "ورم غدي ليفي",
    "synonyms": [
      "Fibroadenomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An adenoma containing fibrous tissue. It should be differentiated from ADENOFIBROMA which is a tumor composed of connective tissue (fibroma) containing glandular (adeno-) structures. (From Dorland, 27th ed)",
    "arabic_definition": "يتكون الثدي من غدد مفرزة للبن وقنوات ناقلة للبن يحيط بها نسيج ليفي ونسيج غدي ونسيج دهني، والورم الغدي الليفي هو كتلة غير سرطانية تنشأ من النسيج الغدي والليفي بدون سبب معروف. ويعد الورم الغدي الليفي أكثر أورام الثدي شيوعا في النساء تحت سن 30. (Fibroadenoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018226.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ameloblastoma",
    "term_en": "Ameloblastoma",
    "term_ar": "ورم أرومي مينائي",
    "synonyms": [
      "Ameloblastomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An immature epithelial tumor of the JAW originating from the epithelial rests of Malassez or from other epithelial remnants of the ENAMEL from the developmental period. It is a slowly growing tumor, usually benign, but displays a marked propensity for invasive growth.",
    "arabic_definition": "الورم الأرومي المينائي أو ورم أرومات الميناء (الإنجليزية: ameloblastoma) هو ورمٌ نادرٌ، حميدٌ أو خبيث، يُصيب الظهارة سنيَّة المنشأ (أرومات الميناء، أو الجزء الخارجي من الأسنان أثناء النمو)، ويشيعُ حدوثه في الفك السفلي أكثر من الفك العلوي. حُدد بواسطة كوزاك عام 1827.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000564.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myosarcoma",
    "term_en": "Myosarcoma",
    "term_ar": "ساركومة عضلية",
    "synonyms": [
      "Myosarcomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A general term for a malignant neoplasm derived from muscular tissue. (Stedman, 25th ed)",
    "arabic_definition": "الساركومة العَضَلِيَّة أو السَرْكومة العَضَليَّة أو الغَرَن العَضَلي أو الوَرَم العَضَلي السَرْكومي (الإنجليزية: Myosarcoma) هوَ ورم خبيث في العضلات. يستيقظ الأشخاص المُصابين بالساركومة العَضلية بوجود إحساس بأنَّ لديهم شد عضلي أثناء النوم.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009217.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurofibroma",
    "term_en": "Neurofibroma",
    "term_ar": "ورم ليفي عصبي",
    "synonyms": [
      "Neurofibromas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A moderately firm, benign, encapsulated tumor resulting from proliferation of SCHWANN CELLS and FIBROBLASTS that includes portions of nerve fibers. The tumors usually develop along peripheral or cranial nerves and are a central feature of NEUROFIBROMATOSIS 1, where they may occur intracranially or involve spinal roots. Pathologic features include fusiform enlargement of the involved nerve. Microscopic examination reveals a disorganized and loose cellular pattern with elongated nuclei intermixed with fibrous strands. (From Adams et al., Principles of Neurology, 6th ed, p1016)",
    "arabic_definition": "الورم الليفي العصبي (الإنجليزية: neurofibroma) ورم حميد صبغي جسدي سائد الوراثة ينشأ من غلاف الأعصاب في الجهاز العصبي الطرفي. في 90% من الحالات وجد أنها أورام قائمة بذاتها في حين أن الباقي كانت في الأشخاص الذين يعانون من الورم الليفي العصبي من النوع الأول.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009455.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plasmacytoma",
    "term_en": "Plasmacytoma",
    "term_ar": "ورم البلازماويات",
    "synonyms": [
      "Plasmacytomas",
      "Plasma Cell Tumor",
      "Plasma Cell Tumors",
      "Tumor, Plasma Cell",
      "Tumors, Plasma Cell",
      "Plasmocytoma",
      "Plasmocytomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any discrete, presumably solitary, mass of neoplastic PLASMA CELLS either in BONE MARROW or various extramedullary sites.",
    "arabic_definition": "الورم البلازمي هو عسر نمو لخلايا البلازما ينمو فيه ورم خلايا البلازما داخل الأنسجة الرخوة أو داخل الهيكل العظمي المحوري. تسرد مجموعة عمل المايلوما الدولية ثلاثة أنواع: ورم بلازما العظم الانفرادي (SPB)؛ ورم البلازما خارج النخاع (EP)، وأورام البلازما المتعددة التي تكون إما أولية أو متكررة. (Plasmacytoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010954.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphangioma",
    "term_en": "Lymphangioma",
    "term_ar": "ورم وعائي لمفي",
    "synonyms": [
      "Lymphangiomas",
      "Lymphangioendothelioma",
      "Lymphangioendotheliomas",
      "Endothelioma, Lymphatic",
      "Endotheliomas, Lymphatic",
      "Lymphatic Endothelioma",
      "Lymphatic Endotheliomas",
      "Lymphangioma, Cavernous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor resulting from a congenital malformation of the lymphatic system. Lymphangioendothelioma is a type of lymphangioma in which endothelial cells are the dominant component.",
    "arabic_definition": "{{معلومات مرض | الاسم = وَرَمٌ وِعائِيٌّ لِمْفِيّ|صورة=Lymphangioma.jpg|تعليق=ورم وعائي لمفي (ورم رطب كيسي)}}وَرَمٌ وِعائِيٌّ لِمْفِيّ (بالإنجليزية: Lymphangioma) هو عبارة عن تشوهات في الجهاز اللمفاوي تتميز بكيسات رقيقة الجدران؛ يمكن أن تكون هذه الخراجات عيانية، كما في الورم الكيسي الرطب، أو مِجْهريّة. الجهاز الليمفاوي هو شبكة من الأوعية الدموية المسؤولة عن عودة السوائل الوريدية الزائدة من الأنسجة وكذلك الغدد الليمفاوية التي تقوم بتصفية هذا السائل من مسببات الأمراض.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008202.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastrinoma",
    "term_en": "Gastrinoma",
    "term_ar": "ورم غاستريني",
    "synonyms": [
      "Gastrinomas",
      "Gastrin-Producing Tumor",
      "Gastrin-Producing Tumors",
      "Tumor, Gastrin-Producing",
      "Tumors, Gastrin-Producing",
      "Islet Cell Tumor, Ulcerogenic",
      "Ulcerogenic Islet Cell Tumor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A GASTRIN-secreting neuroendocrine tumor of the non-beta ISLET CELLS, the GASTRIN-SECRETING CELLS. This type of tumor is primarily located in the PANCREAS or the DUODENUM. Majority of gastrinomas are malignant. They metastasize to the LIVER; LYMPH NODES; and BONE but rarely elsewhere. The presence of gastrinoma is one of three requirements to be met for identification of ZOLLINGER-ELLISON SYNDROME, which sometimes occurs in families with MULTIPLE ENDOCRINE NEOPLASIA TYPE 1; (MEN 1).",
    "arabic_definition": "الورم الغاستريني (الإنجليزية: Gastrinoma) هو من الأورام المرتبطة باضطراب الجِهازِ المعوي النادر المعروف متلازمة زولينجَر-إيليسون. يحدث عادة في البنكرياس والاثني عشر وتفرز كميات كبيرة من هرمون الغاسترين مسبباً لأرتفاع حموضة المعدة، قد تكون خبيثة أو حميدة (القرحة)، يكون في الجزء العلوى من القناة الهضميه، يحدث زيادات كبيرة في افراز المعدة للحمض فيها، والأورام للجزيرة في خلايا المعثكلة.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015408.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenolymphoma",
    "term_en": "Adenolymphoma",
    "term_ar": "ورم وارثين",
    "synonyms": [
      "Adenolymphomas",
      "Cystadenoma Lymphomatosum, Papillary",
      "Papillary Cystadenoma Lymphomatosum",
      "Warthin Tumor",
      "Tumor, Warthin",
      "Warthin's tumor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor characterized histologically by tall columnar epithelium within a lymphoid tissue stroma. It is usually found in the salivary glands, especially the parotid.",
    "arabic_definition": "ورم وارثين ، حيث يعرف أيضا باسم ورم غدي كيسي حليمي ليمفي أو ورم غدي آحادي الشكل، هو ورم كيسي حميد من الغدد اللعابية التي تحتوي على الخلايا الليمفاوية الوفيرة ومراكز جرثومية (الليمفاوية التي تشبه عقدة سدى) والذي سمي نسبة لعالم الأمراض ألدريد سكوت ارثن، الذي وصف حالتين من ورم وارثين في عام 1929. (Adenolymphoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000235.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenomyoma",
    "term_en": "Adenomyoma",
    "term_ar": "ورم عضلي غدي",
    "synonyms": [
      "Adenomyomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign neoplasm of muscle (usually smooth muscle) with glandular elements. It occurs most frequently in the uterus and uterine ligaments. (Stedman, 25th ed)",
    "arabic_definition": "الورم العضلي الغدي هو أحد الأورام المعقدة المختلطة، يتكون من أنسجة غدية وعضلات، وهو ورم حميد. (Adenomyoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018194.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystadenoma",
    "term_en": "Cystadenoma",
    "term_ar": "ورم غدي كيسي",
    "synonyms": [
      "Cystadenomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign neoplasm derived from glandular epithelium, in which cystic accumulations of retained secretions are formed. In some instances, considerable portions of the neoplasm, or even the entire mass, may be cystic. (Stedman, 25th ed)",
    "arabic_definition": "الوَرَمٌ الغُدِّيٌّ الكيسِيّ (الإنجليزية: Cystadenoma) هو أحد أنواع الأورام الكيسية، وفي حالة تحوله إلى ورم مسرطن فإنه يسمي بالسرطانة الغدية الكيسية.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003537.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "histiocytoma",
    "term_en": "Histiocytoma",
    "term_ar": "ورم المنسجات",
    "synonyms": [
      "Histiocytomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neoplasm containing HISTIOCYTES. Important forms include BENIGN FIBROUS HISTIOCYTOMA; and MALIGNANT FIBROUS HISTIOCYTOMA.",
    "arabic_definition": "ورم المنسجات (الإنجليزية: histiocytoma)؛ هو ورم يتكون من كثرة المنسجات . وهو المصطلح الطبي الذي يطلق على نوع من الخلايا التي تشكل جزءًا من نظام البلعمة أحادي النواة، وهو جزء من الجهاز المناعي للجسم يتكون من خلايا بلعمية ، تعتبر المسؤولة عن ابتلاع جزيئات صلبة بواسطة غشاء الخلية لتكوين بلعوم داخلي بواسطة البلعمة والبروتستات .",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051642.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angiokeratoma",
    "term_en": "Angiokeratoma",
    "term_ar": "ورم وعائي قرني",
    "synonyms": [
      "Angiokeratomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A vascular, horny neoplasm of the skin characterized by TELANGIECTASIS and secondary epithelial changes including acanthosis and hyperkeratosis.",
    "arabic_definition": "وَرَمٌ وِعَائيٌّ قَرْنِيٌّ(بالإنجليزية: Angiokeratoma)، المَعروف أيضًا باسم ورم وعائي جلدي مع تقرّن هو نوع من الأمراض الجلدية التي تظهر على شكل علامات أو حطاطات صغيرة حمراء أو أرجوانية أو سوداء، تتكون من أوعية دموية متوسعة مغطاة بمنطقة من فرط التقرن، مما يمنحها مظهرًا مشابها للثؤلول. بعتبر هذا الورم من أعراض مرض فابري.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000794.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mesonephroma",
    "term_en": "Mesonephroma",
    "term_ar": "سرطانة الخلايا الصافية",
    "synonyms": [
      "Mesonephromas",
      "Clear-cell carcinoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare tumor of the female genital tract, most often the ovary, formerly considered to be derived from mesonephric rests. Two varieties are recognized: (1) clear cell carcinoma, so called because of its histologic resemblance to renal cell carcinoma, and now considered to be of muellerian duct derivation and (2) an embryonal tumor (called also ENDODERMAL SINUS TUMOR and yolk sac tumor), occurring chiefly in children. The latter variety may also arise in the testis. (Dorland, 27th ed)",
    "arabic_definition": "سرطانة الخلايا الصافية (الإنجليزية: Clear cell carcinoma) هو سرطان (ليس ساركومة يظهر خلايا صافية، وهو نوع نادر من الأورام غالبا في المسلك التناسلي للإناث حيث تظهر الخلايا بداخلة كخلايا صافية تحت المجهر، ويطلق عليه أيضا سرطانة غدية في الخلايا الصافية أو سرطان المهبل الغدي ذو الخلايا الصافية. (Mesonephroma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008649.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurilemmoma",
    "term_en": "Neurilemmoma",
    "term_ar": "شفاني",
    "synonyms": [
      "Neurilemmomas",
      "Neurinoma",
      "Neurinomas",
      "Schwannoma",
      "Schwannomas",
      "Neurilemoma",
      "Neurilemomas",
      "Schwannomatosis, Plexiform"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neoplasm that arises from SCHWANN CELLS of the cranial, peripheral, and autonomic nerves. Clinically, these tumors may present as a cranial neuropathy, abdominal or soft tissue mass, intracranial lesion, or with spinal cord compression. Histologically, these tumors are encapsulated, highly vascular, and composed of a homogenous pattern of biphasic fusiform-shaped cells that may have a palisaded appearance. (From DeVita Jr et al., Cancer: Principles and Practice of Oncology, 5th ed, pp964-5)",
    "arabic_definition": "شفاني أو ورم شوان ويعرف أيضًا بعدة أسماء هي ورم المحاوير أو ورم غمد الليف العصبي أو شوان ورم الخلايا. هو تكاثر خلوي حميد ينشأ من غلاف الخلية العصبية ويتواجد غالباً في النسج الرخوة في منطقة الرأس والعنق. (Neurilemmoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009442.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adamantinoma",
    "term_en": "Adamantinoma",
    "term_ar": "ورم مينائي",
    "synonyms": [
      "Adamantinomas",
      "Adamantinoma of Long Bones",
      "Long Bones Adamantinoma",
      "Long Bones Adamantinomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A locally aggressive, osteolytic neoplasm of the long bones, probably of epithelial origin and most often involving the TIBIA.",
    "arabic_definition": "الورم المينائي (الإنجليزية: Adamantinoma) (مأخوذ من الكلمة اليونانية adamantinos، والتي تعني \"شديد الصعوبة\") هو سرطان نادر في العظام، ويشكل أقل من 1% من جميع سرطانات العظام. يحدث غالبًا في عظام أسفل الساق ويشمل النسيج الظهاري والنسيج الليفي العظمي.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050398.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gliosarcoma",
    "term_en": "Gliosarcoma",
    "term_ar": "ساركوما دبقية",
    "synonyms": [
      "Gliosarcomas",
      "Glioblastoma with Sarcomatous Component",
      "Sarcomatous Glioma",
      "Glioma, Sarcomatous",
      "Gliomas, Sarcomatous",
      "Sarcomatous Gliomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare mixed tumors of the brain and rarely the spinal cord which contain malignant neuroectodermal (glial) and mesenchymal components, including spindle-shaped fibrosarcoma cells. These tumors are highly aggressive and present primarily in adults as rapidly expanding mass lesions. They may arise in tissue that has been previously irradiated. (From Br J Neurosurg 1995 Apr;9(2):171-8)",
    "arabic_definition": "الساركوما الدبقية نوع نادر من الورم الدبقي، وهي سرطان دماغي ينشأ من خلايا الدماغ الدبقية (الداعمة)، التي تدعم وظيفة العصبونات. الساركوما الدبقية سرطان خبيث، وتعرف بأنها ورم أرومي دبقي يتكون من مكونات دبقية وساركومية. (Gliosarcoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018316.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angiofibroma",
    "term_en": "Angiofibroma",
    "term_ar": "ورم وعائي ليفي",
    "synonyms": [
      "Angiofibromas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign neoplasm of fibrous tissue in which there are numerous small and large, frequently dilated, vascular channels. (Stedman, 25th ed)",
    "arabic_definition": "وَرَم وِعائي لِيفيّ أو وَرَم لِيفي وِعائي أو لِيفُوم وِعائِي (الإنجليزية: Angiofibroma) هيَ حطاطات صَغيرة ملساء لامعة، بُنية مُحمرة اللون أو لحمية اللون، طولها من 0.1 حتى 0.3 سم، تُوجد على جانبي الأنف وفي الجزء الأوسط من الوجنتين. يحتوي هذا الورم على نسيج ليفي.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018322.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myxosarcoma",
    "term_en": "Myxosarcoma",
    "term_ar": "ساركومة مخاطية",
    "synonyms": [
      "Myxosarcomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sarcoma, usually a liposarcoma or malignant fibrous histiocytoma, with an abundant component of myxoid tissue resembling primitive mesenchyme containing connective tissue mucin. (Stedman, 25th ed)",
    "arabic_definition": "ساركومة مخاطية أو غرن مخاطي أو مكسوسركومة (الإنجليزية: Myxosarcoma) هو ورم قلبي خبيث نادر.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009236.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angiomyoma",
    "term_en": "Angiomyoma",
    "term_ar": "ورم عضلي أملس وعائي",
    "synonyms": [
      "Angiomyomas",
      "Angioleiomyoma",
      "Angioleiomyomas",
      "Leiomyoma, Vascular",
      "Leiomyomas, Vascular",
      "Vascular Leiomyoma",
      "Vascular Leiomyomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign tumor consisting of vascular and smooth muscle elements.",
    "arabic_definition": "ورم عضلي أملس وعائي أو عضلوم ليفي وعائي (الإنجليزية: Angioleiomyoma) ويحدث هذا الورم في الجلد ويعتقد أنهُ ينشأ من العضلة الملساء الوعائية، وعادةً ما يكون مُكتسبًا. (Angiomyoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018229.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myelolipoma",
    "term_en": "Myelolipoma",
    "term_ar": "ورم شحمي نقوي",
    "synonyms": [
      "Myelolipomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare benign tumor of the adrenal gland, several centimeters in diameter, composed in varying proportions of adipose tissue, lymphocytes, and primitive myeloid cells, probably a developmental abnormality. (Dorland, 27th ed)",
    "arabic_definition": "الورم الشحمي النقوي (الإنجليزية: Myelolipoma) هو ورم حميد يتكون من نسيج دهني والخلايا المكوِّنة للدم بنسب مختلفة. قد يظهر في الغدة الكظرية أو خارجها.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018209.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurocytoma",
    "term_en": "Neurocytoma",
    "term_ar": "ورم الخلايا العصبية المركزية",
    "synonyms": [
      "Neurocytomas",
      "Neurocytoma, Central",
      "Central Neurocytoma",
      "Central Neurocytomas",
      "Neurocytomas, Central"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign brain tumor composed of neural elements which most often arise from the SEPTUM PELLUCIDUM and the walls of the lateral ventricles. Immunohistochemistry and electron microscopy evaluations may reveal expression of neuron specific enolase and synaptophysin and cells containing microtubuli, neurosecretory granules, and presynaptic vesicles. (From Acta Med Port 1994 Feb;7(2):113-9)",
    "arabic_definition": "ورم الخلايا العصبية المركزية (CNC) هو ورم نادر جدًا، وعادةً ما يكون ورمًا حميدًا داخل البطينات، يتشكل عادةً من الخلايا العصبية للحاجز الشفيف. تنمو غالبية الأورام العصبية المركزية إلى الداخل تجاه الجهاز البطيني وتشكل ورمًا عصبيًا بين البطينين. (Neurocytoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018306.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenosarcoma",
    "term_en": "Adenosarcoma",
    "term_ar": "ساركومة غدية",
    "synonyms": [
      "Adenosarcomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant neoplasm arising simultaneously or consecutively in mesodermal tissue and glandular epithelium of the same part. (Stedman, 25th ed)",
    "arabic_definition": "ساركومة غدية أو سركومة غدية أو غرن غدي (الإنجليزية: Adenosarcoma) هوَ شكل غير شائِع من السرطان ينشأ مِن نسيج اللحمة المتوسطة، وَيمتلك مكونات غدية حميدة. من الممكن أن ينشأ أيضاً في الرحم وَالمبيض وَقناة فالوب.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018195.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphocele",
    "term_en": "Lymphocele",
    "term_ar": "قيلة لمفية",
    "synonyms": [
      "Lymphoceles",
      "Cyst, Lymphatic",
      "Cysts, Lymphatic",
      "Lymphatic Cysts",
      "Lymphatic Cyst",
      "Lymphocoele",
      "Lymphocoeles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cystic mass containing lymph from diseased lymphatic channels or following surgical trauma or other injury.",
    "arabic_definition": "تُمَثِّل الْقيلَة اللّمفيّة تجمُعاً للسائل اللّمفي في الجسْمِ غير محاطٍ بنسيج من الخلايا الظّهاريّة (الطلائيّة). عادةً ما تظهرُ الْقيلَة اللّمفيّة كإحدى مُضاعفات عمليّات الحوضِ الشديدة كما في جِراحاتِ إزالة الأورام السَرَطانيّة ويندُرُ أن تتكوّن بشكلٍ تلقائيّ وكما أنها غاليا ما تتواجدُ في الحيّزِ خلفَ الصِّفَاق. (Lymphocele)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008210.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemangioma",
    "term_en": "Hemangioma",
    "term_ar": "ورم وعائي دموي",
    "synonyms": [
      "Hemangiomas",
      "Hemangioma, Histiocytoid",
      "Hemangiomas, Histiocytoid",
      "Histiocytoid Hemangioma",
      "Histiocytoid Hemangiomas",
      "Hemangioma, Intramuscular",
      "Hemangiomas, Intramuscular",
      "Intramuscular Hemangioma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A vascular anomaly due to proliferation of BLOOD VESSELS that forms a tumor-like mass. The common types involve CAPILLARIES and VEINS. It can occur anywhere in the body but is most frequently noticed in the SKIN and SUBCUTANEOUS TISSUE. (from Stedman, 27th ed, 2000)",
    "arabic_definition": "ورم وعائي دموي أو ورم عرقي دموي أو ورم وعائي أو ورم دموي (الإنجليزية: Hemangioma) هي ورم خلقي حميد، تتكون من مجموعة كثيفة من الأوعية الدموية.وهي من الأورام التي تتلاشى مع مرور الزمن وحدها، 10 % من هذه الأورام مرتبطة بالعرق القوقازي، تتواجد هذه الاروام على شكلين شكل سطحي يظهر على الجلد والأخر داخلي في الأعضاء الداخلية وأحيانا الشكلين في آن واحد، 80% منها تصيب الوجه والرقبة والنسبة الأكبر التي تليها للكبد مع انها حميدة إلا انها لها مضاعفات خطيرة.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006391.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brain-neoplasms",
    "term_en": "Brain Neoplasms",
    "term_ar": "ورم الدماغ",
    "synonyms": [
      "Brain Neoplasm",
      "Neoplasm, Brain",
      "Brain Tumors",
      "Brain Tumor",
      "Tumor, Brain",
      "Neoplasms, Brain",
      "Brain Cancer",
      "Brain Cancers"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Neoplasms of the intracranial components of the central nervous system, including the cerebral hemispheres, basal ganglia, hypothalamus, thalamus, brain stem, and cerebellum. Brain neoplasms are subdivided into primary (originating from brain tissue) and secondary (i.e., metastatic) forms. Primary neoplasms are subdivided into benign and malignant forms. In general, brain tumors may also be classified by age of onset, histologic type, or presenting location in the brain.",
    "arabic_definition": "تشمل عموما أورام الدماغ كل أنواع الأورام التي تظهر داخل القحف أو في قناة العمود الفقري المركزية. وهي تنجم عن انقسام غير طبيعي للخلايا ولا يمكن السيطرة عليه، غالبًا ما يكون ذلك في المخ نفسه، لكنه يحدث أيضاً في النسيج الليمفاوي، وفي الأوعية الدموية، وفي الأعصاب القحفية أو في أغلفة المخ (السحايا)، أوالجمجمة، أو الغدة النخامية، أو في الغدة الصنوبرية. (Brain Neoplasms)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001932.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ovarian-cysts",
    "term_en": "Ovarian Cysts",
    "term_ar": "كيسة مبيضية",
    "synonyms": [
      "Cyst, Ovarian",
      "Cysts, Ovarian",
      "Ovarian Cyst",
      "Corpus Luteum Cyst",
      "Corpus Luteum Cysts",
      "Cyst, Corpus Luteum",
      "Cysts, Corpus Luteum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "General term for CYSTS and cystic diseases of the OVARY.",
    "arabic_definition": "الكيسة المبيضية (الإنجليزية: Ovarian cyst) هو كيس مليء بالسوائل داخل المبيض. غالباً يأتي بدون أعراض. (Ovarian Cysts)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010048.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bowens-disease",
    "term_en": "Bowen's Disease",
    "term_ar": "سرطان الجلد حرشفي الخلايا",
    "synonyms": [
      "Bowen Disease",
      "Intraepithelial Squamous Cell Carcinoma",
      "Squamous Cell Carcinoma in Situ",
      "Cutaneous squamous-cell carcinoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A persistent progressive non-elevated red scaly or crusted plaque which is due to an intradermal carcinoma and is potentially malignant. Atypical squamous cells proliferate through the whole thickness of the epidermis. The lesions may occur anywhere on the skin surface or on mucosal surfaces. The cause most frequently found is trivalent arsenic compounds. Freezing, cauterization or diathermy coagulation is often effective. (From Rook et al., Textbook of Dermatology, 4th ed, pp2428-9)",
    "arabic_definition": "سرطان الجلد حرشفي الخلايا هو أحد أنواع سرطان الجلد الرئيسية إلى جانب سرطان الخلايا القاعدية وسرطان الجلد. يظهر عادةً ككتلة صلبة ذات سطح متقشر ولكن يمكن أن يشكل قرحة أيضًا. (Bowen's Disease)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001913.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wilms-tumor",
    "term_en": "Wilms Tumor",
    "term_ar": "ورم ويلمز",
    "synonyms": [
      "Tumor, Wilms",
      "Nephroblastoma",
      "Nephroblastomas",
      "Wilm's Tumor",
      "Wilm Tumor",
      "Wilms Tumor 1",
      "Bilateral Wilms Tumor",
      "Tumor, Bilateral Wilms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant kidney tumor, caused by the uncontrolled multiplication of renal stem (blastemal), stromal (STROMAL CELLS), and epithelial (EPITHELIAL CELLS) elements. However, not all three are present in every case. Several genes or chromosomal areas have been associated with Wilms tumor which is usually found in childhood as a firm lump in a child's side or ABDOMEN.",
    "arabic_definition": "ورم ويلمز أو الورم الأرومي الكلوي هو ورمٌ سرطاني يصيب خلايا الكلية، وهو من أكثر الأورام التي تصيب الكلية انتشاراً عند الأطفال . (Wilms Tumor)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009396.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mongolian-spot",
    "term_en": "Mongolian Spot",
    "term_ar": "بقعة منغولية",
    "synonyms": [
      "Spot, Mongolian",
      "Mongolian Blue Spot",
      "Blue Spot, Mongolian"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A bluish-gray to gray-brown benign, melanocytic nevus found usually in the LUMBOSACRAL REGION of dark-skinned people, especially those of East Asian ancestry. It is usually congenital or appears shortly after birth, and disappears in childhood.",
    "arabic_definition": "البقعة المنغولية (الإنجليزية: Mongolian Spot) تعرف أيضا بالبقعة المنغولية الزرقاء وهي وحمة خلقية حميدة ومسطحة ذات حواف متعرجة وشكل غير منتظم . تم وصفهاو تسميتها تيمنا بالمنغولية في عام 1883 من قبل عالم الأنثربولوجيا الألماني («أروين بالز» Erwin Bälz).",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049328.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carney-complex",
    "term_en": "Carney Complex",
    "term_ar": "متلازمة كارني",
    "synonyms": [
      "Complex, Carney",
      "Carney Syndrome",
      "Syndrome, Carney",
      "LAMB Syndrome",
      "LAMB Syndromes",
      "Syndrome, LAMB",
      "Syndromes, LAMB",
      "Myxoma, Spotty Pigmentation, and Endocrine Overactivity"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Autosomal dominant syndrome characterized by cardiac and cutaneous MYXOMAS; LENTIGINOSIS (spotty pigmentation of the skin), and endocrinopathy and its associated endocrine tumors. The cardiac myxomas may lead to SUDDEN CARDIAC DEATH and other complications in Carney complex patients. The gene coding for the PRKAR1A protein is one of the causative genetic loci (type 1). A second locus is at chromosome 2p16 (type 2).",
    "arabic_definition": "متلازمة كارني المعقدة (Carney complex) وشعبتيها؛ متلازمة لامب (LAMB syndrome) ومتلازمة نيم (NAME syndrome) هي صفات سائدة تشمل الأورام المخاطية التي تحدث في القلب والجلد وزيادة تصبغ الجلد (النمش) وزيادة نشاط جهاز الغدد الصماء. وتختلف هذه المتلازمة تمامًا عن ثلاثي كارني (Carney's triad).",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056733.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ewing-sarcoma",
    "term_en": "Ewing Sarcoma",
    "term_ar": "ساركومة يوينغ",
    "synonyms": [
      "Ewing Tumor",
      "Tumor, Ewing",
      "Ewing's Sarcoma",
      "Ewings Sarcoma",
      "Ewing's Tumor",
      "Ewings Tumor",
      "Tumor, Ewing's",
      "Sarcoma, Ewing's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant tumor of the bone which always arises in the medullary tissue, occurring more often in cylindrical bones. The tumor occurs usually before the age of 20, about twice as frequently in males as in females.",
    "arabic_definition": "ساركومة يوينغ أو ساركوما إيوينغ هو أحد الأورام الخبيثة ذات الخلايا المستديرة الزرقاء الصغيرة، وهو مرض نادر توجد فيه الخلايا السرطانية في العظام أو في الأنسجة الرخوة. مناطق الجسم الأكثر شيوعًا لحدوثه هي الحوض وعظم الفخذ والعضد والأضلاع والترقوة. (Ewing Sarcoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012512.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "halo-nevus",
    "term_en": "Halo Nevus",
    "term_ar": "وحمة هالية",
    "synonyms": [
      "Halo Nevi",
      "Leukoderma Acquisitum Centrifugum of Sutton",
      "Nevi, Halo"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign skin lesion characterized by a zone of depigmentation surrounding the nevus.",
    "arabic_definition": "وحمة هالية أو شامة ذو هالة (بالإنجليزية halo naevus). هي شامة يحيطها حلقة بيضاء، أو هالة، وتعرف أحيانا بوحمة «سوتون» (Sutton’s naevus)أو البهق (الوضح المكتسب النابذى)الهالة غير قليلة الحدوث وتشاهد عادة عندالأطفال أو البالغين الصغار من كلا الجنسين.وقد تزول في اغلب الأحيان مع مرور الوقت، وقد تمتد لعدة سنوات. (Halo Nevus)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055882.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kaposi-sarcoma",
    "term_en": "Kaposi Sarcoma",
    "term_ar": "ساركوما كابوزي",
    "synonyms": [
      "Kaposi's Sarcoma",
      "Kaposis Sarcoma",
      "Sarcoma, Kaposi's",
      "Multiple Idiopathic Pigmented Hemangiosarcoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A multicentric, malignant neoplastic vascular proliferation characterized by the development of bluish-red cutaneous nodules, usually on the lower extremities, most often on the toes or feet, and slowly increasing in size and number and spreading to more proximal areas. The tumors have endothelium-lined channels and vascular spaces admixed with variably sized aggregates of spindle-shaped cells, and often remain confined to the skin and subcutaneous tissue, but widespread visceral involvement may occur. Kaposi's sarcoma occurs spontaneously in Jewish and Italian males in Europe and the United States. An aggressive variant in young children is endemic in some areas of Africa. A third form occurs in about 0.04% of kidney transplant patients. There is also a high incidence in AIDS patients. (From Dorland, 27th ed &amp; Holland et al., Cancer Medicine, 3d ed, pp2105-7) HHV-8 is the suspected cause.",
    "arabic_definition": "ساركوما كابوسي هو الورم الناجم عن الإصابة بفيروس هربس الإنسان 8. المعروف أيضاً باسم المرتبطة كابوزي ساركوما هربس، وقد وصفت في الأصل من قبل موريتز كابوسي، وهو طبيب أمراض جلدية ممارس في جامعة فيينا في 1872. (Kaposi Sarcoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012514.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "multiple-myeloma",
    "term_en": "Multiple Myeloma",
    "term_ar": "ورم نخاعي متعدد",
    "synonyms": [
      "Multiple Myelomas",
      "Myelomas, Multiple",
      "Myeloma, Plasma-Cell",
      "Myelomas, Plasma-Cell",
      "Plasma-Cell Myeloma",
      "Plasma-Cell Myelomas",
      "Myeloma-Multiple",
      "Myeloma-Multiples"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignancy of mature PLASMA CELLS engaging in monoclonal immunoglobulin production. It is characterized by hyperglobulinemia, excess Bence-Jones proteins (free monoclonal IMMUNOGLOBULIN LIGHT CHAINS) in the urine, skeletal destruction, bone pain, and fractures. Other features include ANEMIA; HYPERCALCEMIA; and RENAL INSUFFICIENCY.",
    "arabic_definition": "الورم النقوي المتعدد أو الورم النقيي المتعدد أو السرطان النخاعي المتعدد أو الورم النخاعي المتعدد (الإنجليزية: Multiple Myeloma) أو الورم النقيي بلازماوي الخلايا (الإنجليزية: plasma cell myeloma) هو مرض سرطاني يصيب الخلايا البلازمية من نوع B مما يؤدي إلى تكاثر هذه الخلايا بشكل غير طبيعي وتكدسها في نخاع العظم. يشكل ما نسبته 1% من الأمراض السرطانية بشكل عام و10% من الأصابات بسرطان الدم.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009101.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "burkitt-lymphoma",
    "term_en": "Burkitt Lymphoma",
    "term_ar": "لمفوما بيركت",
    "synonyms": [
      "Burkitt's Lymphoma",
      "Burkitts Lymphoma",
      "Lymphoma, Burkitt's",
      "Lymphoma, Burkitt",
      "Burkitt's Tumor",
      "Burkitts Tumor",
      "Tumor, Burkitt's",
      "Burkitt Tumor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of undifferentiated malignant LYMPHOMA usually found in central Africa, but also reported in other parts of the world. It is commonly manifested as a large osteolytic lesion in the jaw or as an abdominal mass. B-cell antigens are expressed on the immature cells that make up the tumor in virtually all cases of Burkitt lymphoma. The Epstein-Barr virus (HERPESVIRUS 4, HUMAN) has been isolated from Burkitt lymphoma cases in Africa and it is implicated as the causative agent in these cases; however, most non-African cases are EBV-negative.",
    "arabic_definition": "لمفومة بيركت (الإنجليزية: Burkitt's lymphoma) (أو ورم بيركت أو لمفومة خبيثة من نمط بيركت) هو سرطان في الجهاز اللمفي (بالتحديد، اللمفاويات البائية). سميت هذه اللمفومة تبعًا لدنيس بارسونس بيركت، الجراح الإيرلندي الذي وصف هذا المرض للمرة الأولى عام 1956 خلال عمله في أفريقيا الاستوائية. (Burkitt Lymphoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002051.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gardner-syndrome",
    "term_en": "Gardner Syndrome",
    "term_ar": "متلازمة غاردنر",
    "synonyms": [
      "Gardner Syndromes",
      "Syndrome, Gardner",
      "Syndromes, Gardner",
      "Gardner's Syndrome",
      "Gardners Syndrome",
      "Gardner's Syndromes",
      "Syndrome, Gardner's",
      "Syndromes, Gardner's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A variant of ADENOMATOUS POLYPOSIS COLI caused by mutation in the APC gene (GENES, APC) on CHROMOSOME 5. It is characterized by not only the presence of multiple colonic polyposis but also extracolonic ADENOMATOUS POLYPS in the UPPER GASTROINTESTINAL TRACT; the EYE; the SKIN; the SKULL; and the FACIAL BONES; as well as malignancy in organs other than the GI tract.",
    "arabic_definition": "متلازمة غاردنر، المعروفة أيضا باسم داء سلائل القولون والمستقيم العائلي، هو نوع وراثي صبغي جسدي سائد من داء السلائل التي تتميز بوجود زوائد متعددة في القولون مع أورام خارج القولون. الأورام التي تحدث خارج القولون يمكن أن تشمل: الأورام العظمية للجمجمة، سرطان الغدة الدرقية، الأكياس البَشَرانِيَّة والأورام الليفية. (Gardner Syndrome)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005736.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acoustic-neuroma",
    "term_en": "Acoustic Neuroma",
    "term_ar": "ورم العصب السمعي",
    "synonyms": [
      "Acoustic Neuromas",
      "Neuromas, Acoustic",
      "Schwannoma, Acoustic",
      "Acoustic Schwannoma",
      "Acoustic Schwannomas",
      "Schwannomas, Acoustic",
      "Neurinoma, Acoustic",
      "Acoustic Neurinoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign SCHWANNOMA of the eighth cranial nerve (VESTIBULOCOCHLEAR NERVE), mostly arising from the vestibular branch (VESTIBULAR NERVE) during the fifth or sixth decade of life. Clinical manifestations include HEARING LOSS; HEADACHE; VERTIGO; TINNITUS; and FACIAL PAIN. Bilateral acoustic neuromas are associated with NEUROFIBROMATOSIS 2. (From Adams et al., Principles of Neurology, 6th ed, p673)",
    "arabic_definition": "ورم العصب السمعي (الإنجليزية: Acoustic neuroma) هو ورمُ حميد داخل قحفي (داخل جمجمة الرأس) ينشأ من الخلايا المكونة لمادة (الميالين) –مادة مغلفة للخلايا العصبية- المحيطة بالعصب الدهليزي القوقعي (العصب القحفي الثامن). هو نوع من أنواع الأورام الشفانية الناشئة عن خلايا (شوان) المنتجة لمادة الميالين التي تحافظ على العزل الكهربائي للخلايا العصبية الطرفية.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009464.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dentigerous-cyst",
    "term_en": "Dentigerous Cyst",
    "term_ar": "كيسة سنية",
    "synonyms": [
      "Cyst, Dentigerous",
      "Cysts, Dentigerous",
      "Dentigerous Cysts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Most common follicular odontogenic cyst. Occurs in relation to a partially erupted or unerupted tooth with at least the crown of the tooth to which the cyst is attached protruding into the cystic cavity. May give rise to an ameloblastoma and, in rare instances, undergo malignant transformation.",
    "arabic_definition": "الكيسة السنية أو الكيسة التاجية أو الكيسة الحاوية على السن أو الكيسة الجريبية هي كيسة سنية المنشأ، يعتقد أنها من أصل تطوري، مرتبطة مع تاج السن المنطمر كليا أو جزئيا. ويكون تجويف هذه الكيسة مبطن بخلايا ظهارية مشتقة من خلايا الميناء الظهارية المنضمرة للسن مشكلة عضو. (Dentigerous Cyst)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003803.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hodgkin-disease",
    "term_en": "Hodgkin Disease",
    "term_ar": "لمفوما هودجكين",
    "synonyms": [
      "Disease, Hodgkin",
      "Granuloma, Hodgkin",
      "Hodgkin Granuloma",
      "Granuloma, Hodgkin's",
      "Hodgkin's Granuloma",
      "Granuloma, Hodgkins",
      "Hodgkins Granuloma",
      "Granuloma, Malignant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant disease characterized by progressive enlargement of the lymph nodes, spleen, and general lymphoid tissue. In the classical variant, giant usually multinucleate Hodgkin's and REED-STERNBERG CELLS are present; in the nodular lymphocyte predominant variant, lymphocytic and histiocytic cells are seen.",
    "arabic_definition": "لِمْفُومةُ هودجكيِن (الإنجليزية: Hodgkin's lymphoma)، المعروفة أيضا باسم داءُ هودجكن هو نوع من الأورام اللمفاوية (سرطان ناشئ ضمن نوع من خلايا الدم البيضاء تسمى الخلايا اللمفاوية). أطلقت التسمية على هذا المرض نسبة إلى توماس هودجكن، والذي كان أول من وصف شذوذ النظام الليمفاوي في عام 1832. (Hodgkin Disease)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006689.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kidney-neoplasms",
    "term_en": "Kidney Neoplasms",
    "term_ar": "ورم كلوي",
    "synonyms": [
      "Kidney Neoplasm",
      "Neoplasm, Kidney",
      "Neoplasms, Kidney",
      "Renal Neoplasms",
      "Neoplasm, Renal",
      "Neoplasms, Renal",
      "Renal Neoplasm",
      "Cancer of Kidney"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tumors or cancers of the KIDNEY.",
    "arabic_definition": "أورام الكلى (الإنجليزية: Kidney tumours) هي أورام تنمو على الكلى أو بداخلها، ويمكن أن تكون حميدة أو خبيثة (سرطان الكلية). (Kidney Neoplasms)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007680.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myasthenia-gravis",
    "term_en": "Myasthenia Gravis",
    "term_ar": "وهن عضلي وبيل",
    "synonyms": [
      "Myasthenia Gravis, Generalized",
      "Generalized Myasthenia Gravis",
      "Myasthenia Gravis, Ocular",
      "Ocular Myasthenia Gravis",
      "Muscle-Specific Receptor Tyrosine Kinase Myasthenia Gravis",
      "MuSK Myasthenia Gravis",
      "Myasthenia Gravis, MuSK",
      "Anti-MuSK Myasthenia Gravis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder of neuromuscular transmission characterized by fatigable weakness of cranial and skeletal muscles with elevated titers of ACETYLCHOLINE RECEPTORS or muscle-specific receptor tyrosine kinase (MuSK) autoantibodies. Clinical manifestations may include ocular muscle weakness (fluctuating, asymmetric, external ophthalmoplegia; diplopia; ptosis; and weakness of eye closure) and extraocular fatigable weakness of facial, bulbar, respiratory, and proximal limb muscles. The disease may remain limited to the ocular muscles (ocular myasthenia). THYMOMA is commonly associated with this condition.",
    "arabic_definition": "الوهن العضلي الوبيل هو مرض مزمن يصيب الوصلة العصبية العضلية، ويؤدي إلى درجات متفاوتة من ضعف العضلات الهيكلية. غالبًا ما تتأثر عضلات العينين والوجه والبلع، مما قد يؤدي إلى ازدواجية في الرؤية، وارتخاء الجفون، وصعوبات في الكلام والمشي. (Myasthenia Gravis)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009157.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polycythemia-vera",
    "term_en": "Polycythemia Vera",
    "term_ar": "كثرة الحمر الحقيقية",
    "synonyms": [
      "Osler-Vaquez Disease",
      "Disease, Osler-Vaquez",
      "Erythremia",
      "Erythremias",
      "Polycythemia Rubra Vera",
      "Polycythemia Rubra Veras",
      "Vera, Polycythemia Rubra",
      "Veras, Polycythemia Rubra"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A myeloproliferative disorder of unknown etiology, characterized by abnormal proliferation of all hematopoietic bone marrow elements and an absolute increase in red cell mass and total blood volume, associated frequently with splenomegaly, leukocytosis, and thrombocythemia. Hematopoiesis is also reactive in extramedullary sites (liver and spleen). In time myelofibrosis occurs.",
    "arabic_definition": "كثرة الحمر الحقيقية (اللاتينية: polycythaemia vera أو polycythaemia rubra vera) أو كثرة الحمر الأولية من أمراض التكاثر النقوي، وينتج عنه زيادة في تصنيع جميع أنواع خلايا الدم: الحمراء، البيضاء غير اللمفاوية، والصفيحات. وتؤدي الإصابة إلى الزيادة في عدد الكريات الحمراء وإلى انخفاض مرافق في الإريثروبويتين. (Polycythemia Vera)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011087.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteus-syndrome",
    "term_en": "Proteus Syndrome",
    "term_ar": "متلازمة بروتيوس",
    "synonyms": [
      "Elephant Man Disease",
      "Proteus-Like Syndrome",
      "Syndrome, Proteus-Like"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hamartoneoplastic malformation syndrome of uncertain etiology characterized by partial GIGANTISM of the hands and/or feet, asymmetry of the limbs, plantar hyperplasia, hemangiomas (HEMANGIOMA), lipomas (LIPOMA), lymphangiomas (LYMPHANGIOMA), epidermal NEVI; MACROCEPHALY; cranial HYPEROSTOSIS, and long-bone overgrowth. Joseph Merrick, the so-called elephant man, apparently suffered from Proteus syndrome and not NEUROFIBROMATOSIS, a disorder with similar characteristics.",
    "arabic_definition": "متلازمة بروتيوس أو متلازمة وايدمان (سميت نسبة إلى طبيب الأطفال الألماني هانز-رودولف وايدمان) أو متلازمة المتقلبة أو ظاهرة أعراض البروتيوس (بالإنجليزية: Proteus Syndrome), ويطلق عليه أيضا اسم مرض فيدمان. هو مرض جيني جد معقد يصيب واحد أو عدة مناطق من الجسم كالبشرة, العظام, النخاع الشوكي.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016715.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tuberous-sclerosis",
    "term_en": "Tuberous Sclerosis",
    "term_ar": "تصلب حدبي",
    "synonyms": [
      "Sclerosis, Tuberous",
      "Bourneville Disease",
      "Bourneville Phakomatosis",
      "Bourneville Syndrome",
      "Syndrome, Bourneville",
      "Bourneville's Disease",
      "Bourneville's Syndrome",
      "Syndrome, Bourneville's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Autosomal dominant neurocutaneous syndrome classically characterized by MENTAL RETARDATION; EPILEPSY; and skin lesions (e.g., adenoma sebaceum and hypomelanotic macules). There is, however, considerable heterogeneity in the neurologic manifestations. It is also associated with cortical tuber and HAMARTOMAS formation throughout the body, especially the heart, kidneys, and eyes. Mutations in two loci TSC1 and TSC2 that encode hamartin and tuberin, respectively, are associated with the disease.",
    "arabic_definition": "التصلب الحدبي (اللاتينية: sclerosis tuberosa) هو مرض وراثي نادر الحدوث، وقد يصيب عدة أجهزة في جسم الإنسان كما يسبب نمو أنواع مختلفة من الأورام الحميدة في الدماغ والقلب والكلية وغيرها. يحدث المرض بسبب طفرة في إحدى المورثتين: TSC1 أو TSC2 وهما مورثتان كابتتان للورم ترمزان للبروتينين هامارتين وتوبرين على التوالي. (Tuberous Sclerosis)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014402.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydatidiform-mole",
    "term_en": "Hydatidiform Mole",
    "term_ar": "حمل عنقودي",
    "synonyms": [
      "Hydatidiform Moles",
      "Mole, Hydatidiform",
      "Moles, Hydatidiform",
      "Hydatid Mole",
      "Hydatid Moles",
      "Mole, Hydatid",
      "Moles, Hydatid",
      "Pregnancy, Molar"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Trophoblastic hyperplasia associated with normal gestation, or molar pregnancy. It is characterized by the swelling of the CHORIONIC VILLI and elevated human CHORIONIC GONADOTROPIN. Hydatidiform moles or molar pregnancy may be categorized as complete or partial based on their gross morphology, histopathology, and karyotype.",
    "arabic_definition": "الرحاء العدارية أو الحمل الرحائي أو الحمل الرحوي أو الرحى العدارية أو الرحى الحويصلية أو الحمل العنقودي Molar pregnency يعتبر من الأمراض الشائعة في مجتمعنا وهو ليس بالمرض الخطير بحيث من الممكن علاجه بسهولة، لكنه يحتاج بشكل كبير إلى تعاون المريضة وتفهمها للحالة وعدم الاستعجال في الحمل مرة أخرى إلا بعد مرور 9 أشهر. (Hydatidiform Mole)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006828.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycosis-fungoides",
    "term_en": "Mycosis Fungoides",
    "term_ar": "فطار فطراني",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic, malignant T-cell lymphoma of the skin. In the late stages, the LYMPH NODES and viscera are affected.",
    "arabic_definition": "الفُطار الفُطْراني (والمعروف أيضا بمتلازمة اليبير بازين أو الورم الحبيبي الفطراني)، هو الشكل الأكثر شيوعا الورم اللمفي الجلدي للكريات الليمفاوية التائية. فهو يؤثر على الجلد بشكل عام، ولكن قد يتقدم إلى الداخل مع مرور الوقت. (Mycosis Fungoides)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009182.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transverse-myelitis",
    "term_en": "Transverse Myelitis",
    "term_ar": "التهاب النخاع المستعرض",
    "synonyms": [
      "Transverse Myelopathy Syndrome",
      "Transverse Myelopathy Syndromes",
      "Demyelinative Myelitis",
      "Myelitis, Demyelinative",
      "Myelitis, Acute Transverse",
      "Acute Transverse Myelitis",
      "Transverse Myelitis, Acute",
      "Myelitis, Necrotizing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of a transverse portion of the spinal cord characterized by acute or subacute segmental demyelination or necrosis. The condition may occur sporadically, follow an infection or vaccination, or present as a paraneoplastic syndrome Clinical manifestations include motor weakness, sensory loss, and incontinence. (Adams et al., Principles of Neurology, 6th ed, pp1242-6)",
    "arabic_definition": "التهاب النخاع المُستَعْرِض هو اضطراب عصبي ناتج عن التهاب في النخاع الشوكي هذا الالتهاب يؤدي إلى إتلاف الألياف العصبية أوإلى زوال الميالين المحواري. كلمة مستعرض يرمى بها أن الالتهاب يكون في كل عرض النخاع الشوكي. (Transverse Myelitis)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009188.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "non-hodgkin-lymphoma",
    "term_en": "Non-Hodgkin Lymphoma",
    "term_ar": "لمفوما لاهودجكينية",
    "synonyms": [
      "Lymphoma, Non Hodgkin",
      "Lymphoma, Small Cleaved-Cell, Diffuse",
      "Lymphoma, Atypical Diffuse Small Lymphoid",
      "Diffuse Small Cleaved-Cell Lymphoma",
      "Lymphoma, Non-Hodgkin's",
      "Lymphoma, Non-Hodgkins"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any of a group of malignant tumors of lymphoid tissue that differ from HODGKIN DISEASE, being more heterogeneous with respect to malignant cell lineage, clinical course, prognosis, and therapy. The only common feature among these tumors is the absence of giant REED-STERNBERG CELLS, a characteristic of Hodgkin's disease.",
    "arabic_definition": "لِمْفُومةٌ لَاهودجكينيَّة هي مجموعةٌ من سرطانات الدم التي تتضمن أي نوع من الورم اللمفوما عدا لمفومة هودجكين. أنواع اللمفومة اللاهودجيكينية تكون مختلفة في الأهمية ومن ناحية الضراوة. (Non-Hodgkin Lymphoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008228.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurofibromatosis-1",
    "term_en": "Neurofibromatosis 1",
    "term_ar": "ورم عصبي ليفي من النوع الأول",
    "synonyms": [
      "Recklinghausen Disease, Nerve",
      "Neurofibromatosis, Peripheral, NF1",
      "Recklinghausen Disease of Nerve",
      "Recklinghausens Disease of Nerve",
      "Recklinghausen's Disease of Nerve",
      "von Recklinghausen Disease",
      "von Recklinghausen's Disease",
      "von Recklinghausens Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant inherited disorder (with a high frequency of spontaneous mutations) that features developmental changes in the nervous system, muscles, bones, and skin, most notably in tissue derived from the embryonic NEURAL CREST. Multiple hyperpigmented skin lesions and subcutaneous tumors are the hallmark of this disease. Peripheral and central nervous system neoplasms occur frequently, especially OPTIC NERVE GLIOMA and NEUROFIBROSARCOMA. NF1 is caused by mutations which inactivate the NF1 gene (GENES, NEUROFIBROMATOSIS 1) on chromosome 17q. The incidence of learning disabilities is also elevated in this condition. (From Adams et al., Principles of Neurology, 6th ed, pp1014-18) There is overlap of clinical features with NOONAN SYNDROME in a syndrome called neurofibromatosis-Noonan syndrome. Both the PTPN11 and NF1 gene products are involved in the SIGNAL TRANSDUCTION pathway of Ras (RAS PROTEINS).",
    "arabic_definition": "الورم العصبي الليفي من النوع الأول (الإنجليزية: Neurofibromatosis type I)أو ما يعرف أيضا بمرض فون ريكلنغهاوزن (von Recklinghausen disease ) وهو مرض وراثي يصيب شخص واحد من بين 3000 شخص . وأول من شرح هذه الحالة هو الطبيب الألماني فريدرش دانيل فون ركلينغهاوزن في عام 1882. (Neurofibromatosis 1)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009456.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurofibromatosis-2",
    "term_en": "Neurofibromatosis 2",
    "term_ar": "الورم العصبي الليفي من النوع الثاني",
    "synonyms": [
      "Neurofibromatosis, Acoustic, Bilateral",
      "Neurofibromatosis, Central, NF2",
      "Neurofibromatosis, Central, NF 2",
      "Neurofibromatosis, Type 2",
      "Neurofibromatoses, Type 2",
      "Type 2 Neurofibromatoses",
      "Type 2 Neurofibromatosis",
      "NF2 (Neurofibromatosis 2)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant disorder characterized by a high incidence of bilateral acoustic neuromas as well as schwannomas (NEURILEMMOMA) of other cranial and peripheral nerves, and other benign intracranial tumors including meningiomas, ependymomas, spinal neurofibromas, and gliomas. The disease has been linked to mutations of the NF2 gene (GENES, NEUROFIBROMATOSIS 2) on chromosome 22 (22q12) and usually presents clinically in the first or second decade of life.",
    "arabic_definition": "الورم العصبي الليفي من النوع الثاني (الإنجليزية: Neurofibromatosis type II (NF-2)) أو يسمى أيضا متلازمة ميسم (MISME Syndrome).هو مرض وراثي. والمظهر الرئيسي لهذا المرض هو تطوير متماثل، وأورام غير خبيثة في الدماغ في منطقة العصب القحفي الثامن، والذي هو «العصب السمعي-الدهليزي» الذي ينقل المعلومات الحسية من الأذن الداخلية إلى الدماغ. (Neurofibromatosis 2)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016518.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "follicular-lymphoma",
    "term_en": "Follicular Lymphoma",
    "term_ar": "لمفوما جريبية",
    "synonyms": [
      "Follicular Lymphomas",
      "Lymphomas, Follicular",
      "Brill-Symmers Disease",
      "Disease, Brill-Symmers",
      "Follicular Lymphoma, Giant",
      "Follicular Lymphomas, Giant",
      "Giant Follicular Lymphomas",
      "Lymphomas, Giant Follicular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Malignant lymphoma in which the lymphomatous cells are clustered into identifiable nodules within the LYMPH NODES. The nodules resemble to some extent the GERMINAL CENTER of lymph node follicles and most likely represent neoplastic proliferation of lymph node-derived follicular center B-LYMPHOCYTES.",
    "arabic_definition": "لمفومة جريبية (الإنجليزية: Follicular lymphoma) هي اللمفومة الأكثر انتشارًا ضمن مجموعة اللمفومات اللاهودجكينية بطيئة التنامي، والثاني أكثر انتشارًا ضمن مجموعة اللمفومات اللاهودجكينية بشكل عام. وتعرّف اللمفومة الجريبية على أنها اللمفومة في خلايا B المتواجدة في مركز الجريب (خلايا مركزية والأرومات المركزية) صاحبة النمط الجريبي بشكل جزئي.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008224.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "muir-torre-syndrome",
    "term_en": "Muir-Torre Syndrome",
    "term_ar": "متلازمة موير توري",
    "synonyms": [
      "Syndrome, Muir-Torre",
      "Muir–Torre syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of LYNCH SYNDROME II associated with cutaneous SEBACEOUS GLAND NEOPLASMS. Muir-Torre syndrome is also associated with other visceral malignant diseases include colorectal, endometrial, urological, and upper gastrointestinal neoplasms.",
    "arabic_definition": "متلازمة موير توري (الإنجليزية: Muir-Torre syndrome)، هي متلازمة وراثية سرطانية نادرة موروثة بنمط صبغي جسدي سائد، ويُعتقد أنها نوع فرعي من السرطان القولوني المستقيمي اللاسليلي الوراثي (يُعرف أيضًا بمتلازمة لينش). يكون الأشخاص المصابون بهذه المتلازمة عُرضة للإصابة بسرطانات القولون والقناة البولية التناسلية وآفات جلدية مثل الأورام الشائكية المتقرنة والأورام الزهمية.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055653.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "zollinger-ellison-syndrome",
    "term_en": "Zollinger-Ellison Syndrome",
    "term_ar": "متلازمة زولينجر إيليسون",
    "synonyms": [
      "Syndrome, Zollinger-Ellison",
      "Zollinger–Ellison syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome that is characterized by the triad of severe PEPTIC ULCER, hypersecretion of GASTRIC ACID, and GASTRIN-producing tumors of the PANCREAS or other tissue (GASTRINOMA). This syndrome may be sporadic or be associated with MULTIPLE ENDOCRINE NEOPLASIA TYPE 1.",
    "arabic_definition": "متلازمة زولينجر-إيليسون (الإنجليزية: Zollinger-Ellison syndrome) هي مرض تسبب فيه الأورام زيادة إنتاج الحمض في المعدة، ما يؤدي إلى تشكل القرحات الهضمية. تشمل الأعراض الألم البطني والإسهال.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015043.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endometrioid-carcinoma",
    "term_en": "Endometrioid Carcinoma",
    "term_ar": "ورم بطانة الرحم",
    "synonyms": [
      "Carcinomas, Endometrioid",
      "Endometrioid Carcinomas",
      "Adenocarcinoma, Endometrioid",
      "Adenocarcinomas, Endometrioid",
      "Endometrioid Adenocarcinomas",
      "Endometrioid Adenocarcinoma",
      "Endometrioid tumor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An adenocarcinoma characterized by the presence of cells resembling the glandular cells of the ENDOMETRIUM. It is a common histological type of ovarian CARCINOMA and ENDOMETRIAL CARCINOMA. There is a high frequency of co-occurrence of this form of adenocarcinoma in both tissues.",
    "arabic_definition": "ورم بطانة الرحم هو نوع من الأورام التي تنشأ في الرحم أو المبايض وتشبه الغدد البطانية في علم الأنسجة. إنها تشكل 80% من سرطانات بطانة الرحم و20% من أورام المبيض الخبيثة. (Endometrioid Carcinoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018269.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kasabach-merritt-syndrome",
    "term_en": "Kasabach-Merritt Syndrome",
    "term_ar": "متلازمة كاساباك ميريت",
    "synonyms": [
      "Syndrome, Kasabach-Merritt",
      "Kasabach-Merritt Phenomenon",
      "Phenomenon, Kasabach-Merritt",
      "Hemangioma Thrombocytopenia Syndrome",
      "Hemangioma Thrombocytopenia Syndromes",
      "Syndrome, Hemangioma Thrombocytopenia",
      "Syndromes, Hemangioma Thrombocytopenia",
      "Thrombocytopenia-Hemangioma Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rapidly growing vascular lesion along the midline axis of the neck, upper trunk, and extremities that is characterized by CONSUMPTION COAGULOPATHY; THROMBOCYTOPENIA; and HEMOLYTIC ANEMIA. It is often associated with infantile Kaposiform HEMANGIOENDOTHELIOMA and other vascular tumors such as tufted ANGIOMA.",
    "arabic_definition": "متلازمة كاساباك ميريت، والمعروفة أيضًا بالورم الوعائي مع نقص الصفيحات (أو أورام وعائية دموية ضخمة مع خلل تخثر منتشر داخل الأوعية) هي مرض نادر، يصيب الأطفال عادة، إذ تؤدي الأورام الوعائية المتشكلة إلى انخفاض عدد الصفيحات الدموية، وعند البعض قد تسبب أيضًا مشاكل نزفية أخرى، ما قد يكون مهدّدًا للحياة، وتُعرَف أيضًا باسم متلازمة نقص صفيحات الأورام الوعائية. سميت على اسم هيج هيجوني كاساباك، وكاترين كروم ميريت، وهما طبيبا أطفال، وأوّل من وصف الحالة في عام 1940. (Kasabach-Merritt Syndrome)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059885.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphomatoid-granulomatosis",
    "term_en": "Lymphomatoid Granulomatosis",
    "term_ar": "ورم حبيبي لمفاوي",
    "synonyms": [
      "Granulomatoses, Lymphomatoid",
      "Lymphomatoid Granulomatoses",
      "Granulomatosis, Lymphomatoid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An angiocentric and angiodestructive lymphoproliferative disorder primarily involving the lungs. It is caused by an Epstein-Barr virus-induced transformation of the B-cells, in a T-cell rich environment. Clinically and pathologically it resembles EXTRANODAL NK-T-CELL LYMPHOMA.",
    "arabic_definition": "الورم الحبيبي اللمفاوي (LYG أو LG) هو اضطراب تكاثر لمفاوي نادر جدًا وُصف لأول مرة في عام 1972. الورم الحبيبي اللمفاوي هو ليمفوما شبيهة بالورم الحبيبي يُلاحظ مجهريًا فيها وجود أورام حبيبية مع ارتشاح ليمفاوي متعدد الأشكال ونخر بؤري. (Lymphomatoid Granulomatosis)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008230.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bronchogenic-carcinoma",
    "term_en": "Bronchogenic Carcinoma",
    "term_ar": "سرطان الرئة",
    "synonyms": [
      "Bronchogenic Carcinomas",
      "Carcinomas, Bronchogenic",
      "Carcinoma, Bronchial",
      "Bronchial Carcinoma",
      "Bronchial Carcinomas",
      "Carcinomas, Bronchial",
      "Lung cancer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Malignant neoplasm arising from the epithelium of the BRONCHI. It represents a large group of epithelial lung malignancies which can be divided into two clinical groups: SMALL CELL LUNG CANCER and NON-SMALL-CELL LUNG CARCINOMA.",
    "arabic_definition": "سرطان الرئة (الإنجليزية: Lung cancer) هو ورم خبيث ينشأ في الرئة بسبب تلف جيني في الحمض النووي لخلايا مجرى الهواء. غالبًا ما يرتبط سرطان الرئة بتدخين التبغ أو استنشاق المواد الكيمائية الضارة. (Bronchogenic Carcinoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002283.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aids-related-lymphoma",
    "term_en": "AIDS-Related Lymphoma",
    "term_ar": "لمفومة متعلقة بالإيدز",
    "synonyms": [
      "Lymphoma, AIDS Related",
      "Lymphoma, AIDS-Associated",
      "AIDS-Associated Lymphomas",
      "Lymphomas, AIDS-Associated",
      "Lymphoma, HIV-Related",
      "AIDS-Associated Lymphoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "B-cell lymphoid tumors that occur in association with AIDS. Patients often present with an advanced stage of disease and highly malignant subtypes including BURKITT LYMPHOMA; IMMUNOBLASTIC LARGE-CELL LYMPHOMA; PRIMARY EFFUSION LYMPHOMA; and DIFFUSE, LARGE B-CELL, LYMPHOMA. The tumors are often disseminated in unusual extranodal sites and chromosomal abnormalities are frequently present. It is likely that polyclonal B-cell lymphoproliferation in AIDS is a complex result of EBV infection, HIV antigenic stimulation, and T-cell-dependent HIV activation.",
    "arabic_definition": "اللمفومة المتعلقة بالإيدز (الإنجليزية: AIDS-related lymphoma) هي نوع من الأورام يصف اللمفوما التي تحدث في المرضى الذين يعانون من متلازمة نقص المناعة المكتسبة (الإيدز). تُعد اللمفوما نوعًا من السرطان ينشأ من الخلايا اللمفاوية، وفي الإيدز تزداد نسب حدوث اللمفوما اللاهودجكينية ولمفوما المخ الأولية ولمفوما هودجكين، هناك ثلاثة أنواع مختلفة من اللمفومة المتعلقة بالإيدز: لمفوما الخلايا البائية الكبيرة المنتشرة ولمفومة الخلية البائية الأرومية المناعية ولمفوما بيركت (لمفوما خلايا غير منشطرة صغيرة).",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016483.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "li-fraumeni-syndrome",
    "term_en": "Li-Fraumeni Syndrome",
    "term_ar": "متلازمة لي-فراوميني",
    "synonyms": [
      "Li–Fraumeni syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare autosomal dominant syndrome characterized by mesenchymal and epithelial neoplasms at multiple sites. MUTATION of the p53 tumor suppressor gene, a component of the DNA DAMAGE response pathway, apparently predisposes family members who inherit it to develop certain cancers. The spectrum of cancers in the syndrome was shown to include, in addition to BREAST CANCER and soft tissue sarcomas (SARCOMA); BRAIN TUMORS; OSTEOSARCOMA; LEUKEMIA; and ADRENOCORTICAL CARCINOMA.",
    "arabic_definition": "متلازمة لي فراوميني (الإنجليزية: Li-Fraumeni syndrome) هي إحدى الاضطرابات الجينية النادرة التي تنتقل بالوراثة الصبغية الجسدية السائدة وتعرّض حامليها لخطر تطور السرطانات. سُميت المتلازمة بهذا الاسم نسبة إلى الطبيبين الأمريكيين، فريدريك باي لي وجوزيف ف.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016864.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xeroderma-pigmentosum",
    "term_en": "Xeroderma Pigmentosum",
    "term_ar": "جفاف الجلد التصبغي",
    "synonyms": [
      "Kaposi's Disease",
      "Kaposis Disease",
      "Kaposi Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare, pigmentary, and atrophic autosomal recessive disease. It is manifested as an extreme photosensitivity to ULTRAVIOLET RAYS as the result of a deficiency in the enzyme that permits excisional repair of ultraviolet-damaged DNA.",
    "arabic_definition": "جفاف الجلد التصبغي أو زيروديرما (الإنجليزية: Xeroderma pigmentosum) أو مرض أطفال القمر هو مرض وراثي بالأساس تم اكتشافه لأول مرة سنة 1870 من طرف الدكتور موريتز كابوزيس Moritz Kaposi وهو ناتج من فقدان حمض نووي ريبوزي منقوص الأكسجين لخاصيته في معالجة الطفرات الناتجة من اختراق الأشعة فوق البنفسجية للجلد نظرا لغياب إنزيم DNA بوليميراز 1 و 3 ما يتسبب في احتراق الجلد وتقرّحه التام ومن ثمة الإصابة الحتمية بالسرطان.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014983.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroectodermal-tumors",
    "term_en": "Neuroectodermal Tumors",
    "term_ar": "ورم أديمي عصبي ظاهري",
    "synonyms": [
      "Neuroectodermal Tumor",
      "Tumor, Neuroectodermal",
      "Tumors, Neuroectodermal",
      "Neuroectodermal neoplasm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Malignant neoplasms arising in the neuroectoderm, the portion of the ectoderm of the early embryo that gives rise to the central and peripheral nervous systems, including some glial cells.",
    "arabic_definition": "ورم أديمي عصبي ظاهري أو ورم الأديم العصبي الظاهر (الإنجليزية: Neuroectodermal tumor) هو ورم في الجهاز العصبي المركزي أو الطرفي. (Neuroectodermal Tumors)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017599.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "renal-cell-carcinoma",
    "term_en": "Renal Cell Carcinoma",
    "term_ar": "سرطانة الخلية الكلوية",
    "synonyms": [
      "Carcinomas, Renal Cell",
      "Renal Cell Carcinomas",
      "Renal Carcinoma",
      "Carcinoma, Renal",
      "Renal Carcinomas",
      "Nephroid Carcinoma",
      "Carcinoma, Nephroid",
      "Nephroid Carcinomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A heterogeneous group of sporadic or hereditary carcinoma derived from cells of the KIDNEYS. There are several subtypes including the clear cells, the papillary, the chromophobe, the collecting duct, the spindle cells (sarcomatoid), or mixed cell-type carcinoma.",
    "arabic_definition": "سرطانة الخلية الكلوية أو السرطانة الخلوية الكلوية (بالإنجليزية: Renal cell carcinoma) هو سرطان الكلية الذي ينشأ في بطانة النبيب الملتوية القريبة، وهي جزء من أنابيب صغيرة جدا في الكلى، تنقل جزيئات الفضلات من الدم إلى البول. سرطان الخلايا الكلوية هو النوع الأكثر شيوعا من سرطان الكلى لدى البالغين، والمسؤول عن ما يقرب من 90-95٪ من الحالات.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002292.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "basal-cell-carcinoma",
    "term_en": "Basal Cell Carcinoma",
    "term_ar": "سرطان الخلايا القاعدية",
    "synonyms": [
      "Basal Cell Epithelioma",
      "Rodent Ulcer",
      "Rodent Ulcers",
      "Ulcers, Rodent",
      "Carcinoma, Basal Cell",
      "Pigmented Basal Cell Carcinoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant skin neoplasm that seldom metastasizes but has potentialities for local invasion and destruction. Clinically it is divided into types: nodular, cicatricial, morphaic, and erythematoid (pagetoid). They develop on hair-bearing skin, most commonly on sun-exposed areas. Approximately 85% are found on the head and neck area and the remaining 15% on the trunk and limbs. (From DeVita Jr et al., Cancer: Principles &amp; Practice of Oncology, 3d ed, p1471)",
    "arabic_definition": "سرطان الخلايا القاعديّة(Basal-cell carcinoma) ، هو أحد أنواع سرطان الجلد، ويعد من أكثر أنواع مرض السّرطان شيوعاً في الولايات المتّحدة الأمريكيّة. نادراً ما ينتشر إلى باقي الجسم أو يؤدّي إلى الموت. (Basal Cell Carcinoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002280.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lynch-syndrome-ii",
    "term_en": "Lynch Syndrome II",
    "term_ar": "سرطان قولوني مستقيمي لاسليلي وراثي",
    "synonyms": [
      "Colon Cancer, Familial Nonpolyposis, Type 2",
      "Colorectal Cancer, Hereditary Nonpolyposis, Type 2",
      "Lynch Cancer Family Syndrome II",
      "Lynch cancer family syndrome 2",
      "Hereditary nonpolyposis colorectal cancer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hereditary nonpolyposis colorectal neoplasms associated with other malignancies, more commonly of ovarian or uterine origin. When also associated with SEBACEOUS GLAND NEOPLASMS, it is called MUIR-TORRE SYNDROME.",
    "arabic_definition": "السرطان القولوني المستقيمي اللاسليلي الوراثي (الإنجليزية: Hereditary nonpolyposis colorectal cancer) أو متلازمة لينش (الإنجليزية: Lynch syndrome)، هو حالةٌ جينية سائدة جسدية ترتبط مع ارتفاع خطر حدوث سرطان القولون، بالإضافة إلى سرطانات أُخرى وتتضمن سرطان بطانة الرحم، وسرطان المبيض، وسرطان المعدة، وسرطان الجهاز الهضمي، وسرطان الحويصلة الصفراوية والمسلك البولي العلوي، وورم الدماغ، وسرطان الجلد. حيثُ تُعزى زيادة خطر حدوث هذه السرطانات إلى طفراتٍ وراثية تُضعف ترميم الدنا غير المتطابق. (Lynch Syndrome II)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055847.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "waldenstrom-macroglobulinemia",
    "term_en": "Waldenstrom Macroglobulinemia",
    "term_ar": "وجود الغلوبيولين الكبروي في الدم المنسوب لفالدنشتروم",
    "synonyms": [
      "Macroglobulinemia, Waldenstrom",
      "Lymphoma, Lymphocytic, Plasmacytoid",
      "Lymphoma, Lymphoplasmacytoid",
      "Lymphomas, Lymphoplasmacytoid",
      "Lymphoplasmacytoid Lymphoma",
      "Lymphoplasmacytoid Lymphomas",
      "Macroglobulinemia",
      "Primary Macroglobulinemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A lymphoproliferative disorder characterized by pleomorphic B-LYMPHOCYTES including PLASMA CELLS, with increased levels of monoclonal serum IMMUNOGLOBULIN M. There is lymphoplasmacytic cells infiltration into bone marrow and often other tissues, also known as lymphoplasmacytic lymphoma. Clinical features include ANEMIA; HEMORRHAGES; and hyperviscosity.",
    "arabic_definition": "مرض فالدنشتروم أو الداء العظمي الغضروفي لكردوس الفخذ (الإنجليزية: Waldenstrom disease)، والذي يطلق عليه أيضا اسم «وجود الغلوبيولين الكبروي في الدم المنسوب لفالدنشتروم» أو اللمفوما الليمفية والبلازمية الخلايا (الإنجليزية: lymphoplasmacytic lymphoma) هو مرض ورمي في الخلايا اللمفاوية من نوع B تكون قد نضجت ووصلت إلى المرحلة الأخيرة قبل تحولها إلى خلايا بلازما. وهي تسمى خلايا جبلة لمفية (lymphoplasm) وتنتج كمية كبيرة من الغلوبيولين المناعي الاحادي النسيلة من نوع غلوبيولين مناعي م (جلوبيولينات مناعية واعتلال غامائي احادي النسيلة). (Waldenstrom Macroglobulinemia)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008258.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nevus-of-ota",
    "term_en": "Nevus of Ota",
    "term_ar": "وحمة أوتا",
    "synonyms": [
      "Ota's Nevus",
      "Nevus, Ota's",
      "Ota Nevus",
      "Otas Nevus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A macular lesion on the side of the FACE, involving the CONJUNCTIVA and EYELIDS, as well as the adjacent facial skin, SCLERA; OCULOMOTOR MUSCLES; and PERIOSTEUM. Histological features vary from those of a MONGOLIAN SPOT to those of a BLUE NEVUS.",
    "arabic_definition": "وحمة أوتا (الإنجليزية: Nevus of Ota) أو تَمَلُّن المُقْلَة الخلقي (الإنجليزية: Congenital melanosis bulbi) أو وحمة مغزلية زرقاء عينية فك-علوية (الإنجليزية: Nevus fuscoceruleus ophthalmomaxillaris) أو كثرة الخلايا الميلانينية العينية الجلدية (الإنجليزية: Oculodermal melanocytosis) أو كثرة الخلايا الميلانينية العينية الأدمية المخاطية (الإنجليزية: Oculomucodermal melanocytosis)، هي فرط التصبغ الأزرق الذي يحدث في الوجه. ذُكرت هذه الوحمة لأول مرة بواسطة الطَبيب موكوتارو كينوشيتا أوتا في اليابان عام 1939.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009507.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brain-stem-neoplasms",
    "term_en": "Brain Stem Neoplasms",
    "term_ar": "ورم جذع الدماغ الدبقي",
    "synonyms": [
      "Brain Stem Neoplasm",
      "Neoplasm, Brain Stem",
      "Brain Stem Tumors",
      "Brain Stem Tumor",
      "Tumor, Brain Stem",
      "Brainstem Neoplasms",
      "Brainstem Neoplasm",
      "Neoplasm, Brainstem"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Benign and malignant intra-axial tumors of the MESENCEPHALON; PONS; or MEDULLA OBLONGATA of the BRAIN STEM. Primary and metastatic neoplasms may occur in this location. Clinical features include ATAXIA, cranial neuropathies (see CRANIAL NERVE DISEASES), NAUSEA, hemiparesis (see HEMIPLEGIA), and quadriparesis. Primary brain stem neoplasms are more frequent in children. Histologic subtypes include GLIOMA; HEMANGIOBLASTOMA; GANGLIOGLIOMA; and EPENDYMOMA.",
    "arabic_definition": "ورم دبقي في جذع الدماغ أو ورم جذع الدماغ الدبقي (الإنجليزية: Brainstem glioma) هو ورم دبقي سرطاني في جذع الدماغ، ويُشخص عادةً 75% بالأطفال والبالغين دون سن العشرين، ولكن وُجد أنه يؤثر على كبار السن أيضًا. يبدأ هذا الورم من أنسجة الدماغ أو الحبل الشوكي، ثم يمتد عادةً في جميع أنحاء الجهاز العصبي. (Brain Stem Neoplasms)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020295.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "islet-cell-carcinoma",
    "term_en": "Islet Cell Carcinoma",
    "term_ar": "ورم خلايا الجزيرة",
    "synonyms": [
      "Carcinomas, Islet Cell",
      "Islet Cell Carcinomas",
      "Islet Cell Tumor, Malignant",
      "Pancreatic neuroendocrine tumor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A primary malignant neoplasm of the pancreatic ISLET CELLS. Usually it involves the non-INSULIN-producing cell types, the PANCREATIC ALPHA CELLS and the pancreatic delta cells (SOMATOSTATIN-SECRETING CELLS) in GLUCAGONOMA and SOMATOSTATINOMA, respectively.",
    "arabic_definition": "ورم خلايا الجزيرة أو ورم عصبي-صماوي بنكرياسي أو ورم صماوي بنكرياسي هو نوع سرطاني غير شائع يصيب الغدد الصماء في البنكرياس. تشكل تقريبًا 1.3% من سرطان البنكرياس. (Islet Cell Carcinoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018273.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "merkel-cell-carcinoma",
    "term_en": "Merkel Cell Carcinoma",
    "term_ar": "سرطانة خلية مركل",
    "synonyms": [
      "Merkel Cell Cancer",
      "Cancer, Merkel Cell",
      "Cell Cancer, Merkel",
      "Merkel Cell Tumor",
      "Tumor, Merkel Cell",
      "Merkle Tumors",
      "Tumors, Merkle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A carcinoma arising from MERKEL CELLS located in the basal layer of the epidermis and occurring most commonly as a primary neuroendocrine carcinoma of the skin. Merkel cells are tactile cells of neuroectodermal origin and histologically show neurosecretory granules. The skin of the head and neck are a common site of Merkel cell carcinoma, occurring generally in elderly patients. (Holland et al., Cancer Medicine, 3d ed, p1245)",
    "arabic_definition": "سرطان خلايا ميركل (الإنجليزية: Merkel-cell carcinoma) هو نوع من سرطان الجلد وهو نادر وشديدة العدوانية، والذي، في معظم الحالات، يكون سببه فيروس خلية ميركل التورامي الذي اكتشفه العلماء في جامعة بيتسبرغ في عام 2008. كما يعرف أيضا باسم ورم جهاز الغدد الصماء وسرطان الغدد الصم العصبية الأولية من الجلد، وسرطان الخلايا الصغيرة الأساسي من الجلد، وتربيقية سرطان الجلد. (Merkel Cell Carcinoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015266.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "squamous-cell-carcinoma",
    "term_en": "Squamous Cell Carcinoma",
    "term_ar": "سرطانة حرشفية الخلايا",
    "synonyms": [
      "Carcinomas, Squamous Cell",
      "Squamous Cell Carcinomas",
      "Carcinoma, Epidermoid",
      "Carcinomas, Epidermoid",
      "Epidermoid Carcinoma",
      "Epidermoid Carcinomas",
      "Carcinoma, Planocellular",
      "Carcinomas, Planocellular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A carcinoma derived from stratified SQUAMOUS EPITHELIAL CELLS. It may also occur in sites where glandular or columnar epithelium is normally present. (From Stedman, 25th ed)",
    "arabic_definition": "سرطانة الخلية الحرشفية (اختصارًا SCC) هو أحد أنواع سرطانات الجلد. ينشأ من نمو جلدي سرطاني يسمى «التقرن الاكتيني».وتكون المخاطرة على أشدها بين أصحاب البشرة الفاتحة وشعر أشقر الذين يتعرضون بشكل متكرر لأشعة الشمس القوية. (Squamous Cell Carcinoma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002294.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polycystic-ovary-syndrome",
    "term_en": "Polycystic Ovary Syndrome",
    "term_ar": "متلازمة المبيض الأيضية متعددة الغدد الصم",
    "synonyms": [
      "Ovary Syndrome, Polycystic",
      "Syndrome, Polycystic Ovary",
      "Polycystic Ovarian Syndrome",
      "Ovarian Syndrome, Polycystic",
      "Polycystic Ovary Syndrome 1",
      "Sclerocystic Ovarian Degeneration",
      "Ovarian Degeneration, Sclerocystic",
      "Sclerocystic Ovary Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A complex disorder characterized by infertility, HIRSUTISM; OBESITY; and various menstrual disturbances such as OLIGOMENORRHEA; AMENORRHEA; ANOVULATION. Polycystic ovary syndrome is usually associated with bilateral enlarged ovaries studded with atretic follicles, not with cysts. The term, polycystic ovary, is misleading.",
    "arabic_definition": "مُتَلازِمَة المَبيضِ الأيْضِيِّة مُتَعَدِّدَةِ الغُدَدِ الصَمَّاء (الإنجليزية: Polyendocrine Metabolic Ovarian Syndrome)، المعروفة سابقًا مُتَلاَزِمَة المَبيضِ مُتَعَدِّدِ الكيسات (الإنجليزية: Polycystic ovary syndrome) هي مجموعة من الأعراض التي تنتج بسبب ارتفاع نسبة الأندروجين (هرمون الذكورة) في المرأة، وتشمل هذه الأعراض عدم انتظام أو انعدام الطمث، غزارة الطمث، زيادة في نمو الشعر في أنحاء الجسد، حب الشباب، والشواك الأسود، وآلام في منطقة الحوض، والعقم، وقد يصاحبها أمراض أخرى مثل مرض السكري النوع الثاني، أمراض القلب، اضطرابات المزاج، وسرطان الرحم. متلازمة تكيس المبايض تنتج بسبب مجموعة من العوامل الوراثية والبيئية، وتمثل السمنة أحد عوامل خطر الإصابة بها، بجانب نقص الحركة الرياضية ووجود حالات مماثلة في العائلة.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011085.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenomatous-polyposis-coli",
    "term_en": "Adenomatous Polyposis Coli",
    "term_ar": "داء السلائل الورمي الغدي العائلي",
    "synonyms": [
      "Adenomatous Polyposis Colus",
      "Coli, Adenomatous Polyposis",
      "Colus, Adenomatous Polyposis",
      "Polyposis Coli, Adenomatous",
      "Polyposis Colus, Adenomatous",
      "Polyposis Coli, Familial",
      "Coli, Familial Polyposis",
      "Colus, Familial Polyposis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A polyposis syndrome due to an autosomal dominant mutation of the APC genes (GENES, APC) on CHROMOSOME 5. The syndrome is characterized by the development of hundreds of ADENOMATOUS POLYPS in the COLON and RECTUM of affected individuals by early adulthood.",
    "arabic_definition": "داء السلائل أو داء البوليبات العائلي (الإنجليزية: Familial Adenomatous Polyposis) هو مرض وراثي نادر يتشكل بنمط جسدي قاهر تتوضع الطفرة على الذراع الطويل للصبغي الجسدي الخامس، يتصف بوجود أكثر من 100 بوليب في القولون والمستقيم، يتحول إلى سرطان قولون في حال عدم العلاج، يتوضع غالبا في القولون السيني والمستقيم، إصابة الذكور أكثر من الإناث ونادرة قبل البلوغ. (Adenomatous Polyposis Coli)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011125.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysplastic-nevus-syndrome",
    "term_en": "Dysplastic Nevus Syndrome",
    "term_ar": "متلازمة وحمة خلل التنسج",
    "synonyms": [
      "B-K Mole Syndrome",
      "Syndrome, B-K Mole",
      "Nevus Syndrome, Dysplastic",
      "Syndrome, Dysplastic Nevus",
      "Familial Atypical Multiple Mole-Melanoma",
      "FAMMM Syndrome",
      "Dysplastic Nevi",
      "Dysplastic Nevus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Clinically atypical nevi (usually exceeding 5 mm in diameter and having variable pigmentation and ill defined borders) with an increased risk for development of non-familial cutaneous malignant melanoma. Biopsies show melanocytic dysplasia. Nevi are clinically and histologically identical to the precursor lesions for melanoma in the B-K mole syndrome. (Stedman, 25th ed)",
    "arabic_definition": "متلازمة وحمة خلل التنسج، وتعرف أيضاً باسم متلازمة الورم الميلانيني المتعدد غير النمطية العائلية هي مرض جلدي وراثي يظهر في عائلات معينة. يتميز بوحمات غير طبيعية وأورام ميلانينية متعددة وراثية. (Dysplastic Nevus Syndrome)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004416.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lambert-eaton-myasthenic-syndrome",
    "term_en": "Lambert-Eaton Myasthenic Syndrome",
    "term_ar": "متلازمة لامبرت-إيتون",
    "synonyms": [
      "Myopathic-Myasthenic Syndrome of Eaton-Lambert",
      "Eaton-Lambert Myopathic-Myasthenic Syndrome",
      "Eaton-Lambert Myopathic-Myasthenic Syndromes",
      "Myopathic-Myasthenic Syndrome of Lambert-Eaton",
      "Lambert-Eaton Myopathic-Myasthenic Syndrome",
      "Lambert-Eaton Myopathic-Myasthenic Syndromes",
      "Lambert-Eaton Syndrome",
      "Lambert–Eaton myasthenic syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autoimmune disease characterized by weakness and fatigability of proximal muscles, particularly of the pelvic girdle, lower extremities, trunk, and shoulder girdle. There is relative sparing of extraocular and bulbar muscles. CARCINOMA, SMALL CELL of the lung is a frequently associated condition, although other malignancies and autoimmune diseases may be associated. Muscular weakness results from impaired impulse transmission at the NEUROMUSCULAR JUNCTION. Presynaptic calcium channel dysfunction leads to a reduced amount of acetylcholine being released in response to stimulation of the nerve. (From Adams et al., Principles of Neurology, 6th ed, pp 1471)",
    "arabic_definition": "متلازمة لامبرت-إيتون الوهنية العضلية أو متلازمة لامبرت-إيتون (الإنجليزية: Lambert-Eaton Myasthenic Syndrome) (LEMS) هي اضطراب مناعي ذاتي نادر يتميز بضعف عضلات الأطراف. يعاني نحو 60% من المصابين بمتلازمة لامبرت إيتون الوهنية العضلية من ورم خبيث أساسي، والأكثر شيوعًا هو سرطان الرئة ذو الخلايا الصغيرة.",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015624.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "castration-resistant-prostatic-neoplasms",
    "term_en": "Castration-Resistant Prostatic Neoplasms",
    "term_ar": "سرطان البروستات",
    "synonyms": [
      "Castration-Resistant Prostatic Neoplasm",
      "Neoplasm, Castration-Resistant Prostatic",
      "Neoplasms, Castration-Resistant Prostatic",
      "Prostatic Neoplasm, Castration-Resistant",
      "Prostatic Neoplasms, Castration Resistant",
      "Androgen-Independent Prostatic Neoplasms",
      "Androgen-Insensitive Prostatic Neoplasms",
      "Androgen-Resistant Prostatic Neoplasms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tumors or cancer of the PROSTATE which can grow in the presence of low or residual amount of androgen hormones such as TESTOSTERONE.",
    "arabic_definition": "سرطان البروستات أو سرطان الموثة هو شكل من أشكال السرطان الذي يتطور في البروستات، وهي غدة في الجهاز التناسلي الذكري. معظم سرطانات البروستاتة غالبًا ما تكون بطيئة النمو، غير أن هناك بعض الحالات التي تتميز بكونها أكثر شراسة وخطورة. (Castration-Resistant Prostatic Neoplasms)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064129.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "multiple-hereditary-exostoses",
    "term_en": "Multiple Hereditary Exostoses",
    "term_ar": "أعران وراثية متعددة",
    "synonyms": [
      "Hereditary Exostoses, Multiple",
      "Exostoses, Multiple, Type I",
      "Exostosis, Familial",
      "Familial Exostosis",
      "Exostosis, Hereditary Multiple",
      "Multiple Exostosis, Hereditary",
      "Exostosis, Multiple",
      "Multiple Exostosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hereditary disorder transmitted by an autosomal dominant gene and characterized by multiple exostoses (multiple osteochondromas) near the ends of long bones. The genetic abnormality results in a defect in the osteoclastic activity at the metaphyseal ends of the bone during the remodeling process in childhood or early adolescence. The metaphyses develop benign, bony outgrowths often capped by cartilage. A small number undergo neoplastic transformation.",
    "arabic_definition": "الأورام العظمية الغضروفية الوراثية المتعددة (الإنجليزية: Hereditary multiple osteochondromas) المعروفة أيضًا باسم الأعران الوراثية المتعددة، هو اضطراب يتميز بتكون كتل أو أورام عظمية متعددة حميدة (أعران) في نهايات العظام الطويلة للأطراف السفلية مثل عظم الفخذ وعظام الظنبوب (قصبة الساق) والأطراف العلوية مثل عظام العضد والساعد. تعرف أيضًا كورم عظمي غضروفي. (Multiple Hereditary Exostoses)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005097.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anti-n-methyl-d-aspartate-receptor-encephalitis",
    "term_en": "Anti-N-Methyl-D-Aspartate Receptor Encephalitis",
    "term_ar": "التهاب دماغ مضاد مستقبل نمدا",
    "synonyms": [
      "Anti-N-Methyl-D-Aspartate Receptor Encephalitides",
      "Encephalitides, Anti-N-Methyl-D-Aspartate Receptor",
      "Encephalitis, Anti-N-Methyl-D-Aspartate Receptor",
      "Anti-NMDAR Encephalitis",
      "Anti-NMDAR Encephalitides",
      "Encephalitides, Anti-NMDAR",
      "Encephalitis, Anti-NMDAR",
      "Anti-NMDA Receptor Encephalitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorder characterized by symptoms of CATATONIA; HYPOVENTILATION; DYSKINESIAS; ENCEPHALITIS; and SEIZURES followed by a reduced CONSCIOUSNESS. It is often followed by a viral-like prodrome. Many cases are self-limiting and respond well to IMMUNOMODULATORY THERAPIES against the NMDA RECEPTORS antibodies.",
    "arabic_definition": "التهاب دماغ بأضداد المستقبلات نمدا NMDA أو التهاب دماغ بأضداد المستقبل ن-مثيل-د-أسبارتات (الإنجليزية: Anti-NMDA receptor encephalitis) هو من أنواع التهاب الدماغ بسبب الأجسام المضادة. تُعتبر الحمى من الأعراض المُبكرة للمرض، بالإضافة إلى الصداع والشعور بالتعب، وتُتْبَع عادةً بذهان والذي يظهر على شكل أوهام (رؤية أو سماع أشياء لا يراها أو يسمعها الآخرون) وهلوسة، وغالبًا ما يكون المصابون لديهم هياج أو تشويش، ومع مرور الوقت تظهر نوبات صرع ونقص التهوية وخلل الوظائف المستقلة (اضطراب في ضغط الدم ومعدل ضربات القلب). (Anti-N-Methyl-D-Aspartate Receptor Encephalitis)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060426.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pigmented-villonodular-synovitis",
    "term_en": "Pigmented Villonodular Synovitis",
    "term_ar": "ورم الخلايا العملاقة الوتري الزليلي",
    "synonyms": [
      "Pigmented Villonodular Synovitides",
      "Synovitides, Pigmented Villonodular",
      "Villonodular Synovitides, Pigmented",
      "Villonodular Synovitis, Pigmented",
      "Diffuse Tenosynovial Giant Cell Tumor",
      "Tenosynovial giant cell tumor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diffuse outgrowth arising from the SYNOVIAL MEMBRANE; SYNOVIAL BURSA; or TENDON sheath around the joint cavity, with extension to surrounding soft tissue. It is characterized by pigmented HEMOSIDERIN-containing MACROPHAGES; FOAM CELLS; and multinucleated GIANT CELLS. It usually occurs in the hands and feet, and around large joints, such as in the ankle and knee joints.",
    "arabic_definition": "يشير مصطلح ورم الخلايا العملاقة الوتري الزليلي إلى مجموعة من أورام المفاصل النادرة السليمة عادة. تتطور هذه الأورام غالبًا من بطانة المفاصل (المعروفة أيضًا باسم النسيج الزليلي). (Pigmented Villonodular Synovitis)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013586.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "basal-cell-nevus-syndrome",
    "term_en": "Basal Cell Nevus Syndrome",
    "term_ar": "متلازمة سرطانة الخلية القاعدية الوحمانية",
    "synonyms": [
      "Fifth Phacomatosis",
      "Fifth Phacomatoses",
      "Gorlin Syndrome",
      "Syndrome, Gorlin",
      "Gorlin-Goltz Syndrome",
      "Syndrome, Gorlin-Goltz",
      "Multiple Basal Cell Nevi, Odontogenic Keratocysts, and Skeletal Anomalies",
      "NBCCS"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hereditary disorder consisting of multiple basal cell carcinomas, odontogenic keratocysts, and multiple skeletal defects, e.g., frontal and temporoparietal bossing, bifurcated and splayed ribs, kyphoscoliosis, fusion of vertebrae, and cervicothoracic spina bifida. Genetic transmission is autosomal dominant.",
    "arabic_definition": "متلازمة سرطانة الخلية القاعدية الوحمانية (اختصارًا NBCCS) هي حالةٌ طبية وراثية تتضمن عيوبًا في عدة أجهزة من الجسم، وتتضمن الجلد والجهاز العصبي والعيون وجهاز الغدد الصماء والعظم. (Basal Cell Nevus Syndrome)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001478.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diffuse-intrinsic-pontine-glioma",
    "term_en": "Diffuse Intrinsic Pontine Glioma",
    "term_ar": "ورم دبقي جسري داخلي منتشر",
    "synonyms": [
      "DIPG, Diffuse Intrinsic Pontine Glioma",
      "DIPG Brain Tumors",
      "Brain Tumor, DIPG",
      "DIPG Brain Tumor",
      "Diffuse midline glioma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare, aggressive brain tumor that forms in the GLIAL CELLS in the PONS.",
    "arabic_definition": "الورم الدبقي الجسري الداخلي المنتشر (DIPG) هو ورم موجود في جسر (وسط) جذع الدماغ. الورم الدبقي هو اسم عام يصف أي ورم ينشأ من الأنسجة الداعمة التي تدعى الخلايا الدبقية، والتي تساعد في إبقاء الخلايا العصبية في مكانها والحفاظ على عملها. (Diffuse Intrinsic Pontine Glioma)",
    "specialty": "Oncology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000080443.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hiv",
    "term_en": "HIV",
    "term_ar": "فيروس العوز المناعي البشري",
    "synonyms": [
      "HTLV-III",
      "Human Immunodeficiency Virus",
      "Immunodeficiency Virus, Human",
      "Immunodeficiency Viruses, Human",
      "Virus, Human Immunodeficiency",
      "Viruses, Human Immunodeficiency",
      "Human Immunodeficiency Viruses",
      "Human T Cell Lymphotropic Virus Type III"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Human immunodeficiency virus. A non-taxonomic and historical term referring to any of two species, specifically HIV-1 and/or HIV-2. Prior to 1986, this was called human T-lymphotropic virus type III/lymphadenopathy-associated virus (HTLV-III/LAV). From 1986-1990, it was an official species called HIV. Since 1991, HIV was no longer considered an official species name; the two species were designated HIV-1 and HIV-2.",
    "arabic_definition": "فيروس عوز المناعة البشري (الإنجليزية: Human Immunodeficiency Virus، يعرف اختصاراً: HIV) هو أحد نوعين من الفيروسات البطيئة (مجموعة فرعية من الفيروسات الراجعة) التي تصيب البشر وتُسبِب بمرور الوقت متلازمة العوز المناعي المكتسب (إيدز)، وهي حالة مرضية يسمح فيها فشل الجهاز المناعي المتزايد للعداوى الانتهازية والسرطانات المهدِدة للحياة بإصابة الجسم والتمكن منه. من دون علاج، يُقدر معدل البقاء على قيد الحياة بعد الإصابة حوالي 9 إلى 11 سنة، وذلك حسب نوع الفيروس الفرعي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006678.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mumps",
    "term_en": "Mumps",
    "term_ar": "نكاف",
    "synonyms": [
      "Parotitis, Epidemic",
      "Epidemic Parotitides",
      "Epidemic Parotitis",
      "Parotitides, Epidemic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute infectious disease caused by RUBULAVIRUS, spread by direct contact, airborne droplet nuclei, fomites contaminated by infectious saliva, and perhaps urine, and usually seen in children under the age of 15, although adults may also be affected. (From Dorland, 28th ed)",
    "arabic_definition": "النُّكَاف، المعروف أيضا بالْتِهابُ النَّكَفِيَّةِ الوَبائِيّ, هو مرضٌ فيروسيٌّ يسبِّبُهُ فيروسُ النُّكافِ . قد يُسبِّبُ انتفاخاً وأوجاعاً في الغُددِ اللُّعابيَّةِ (Salivary glands)، وخاصةً في الغُددِ النَّكفيَّةِ (Parotid glands) الموجودةِ بينَ الأُذُنِ والفكِّ. (Mumps)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009107.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hiv-2",
    "term_en": "HIV-2",
    "term_ar": "الأنواع الفرعية لفيروس العوز المناعي البشري",
    "synonyms": [
      "HTLV-IV",
      "Immunodeficiency Virus Type 2, Human",
      "Human Immunodeficiency Virus Type 2",
      "Human T Lymphotropic Virus Type IV",
      "LAV-2",
      "HIV-II",
      "Human immunodeficiency virus 2",
      "SBL-6669"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An HIV species related to HIV-1 but carrying different antigenic components and with differing nucleic acid composition. It shares serologic reactivity and sequence homology with the simian Lentivirus SIMIAN IMMUNODEFICIENCY VIRUS and infects only T4-lymphocytes expressing the CD4 phenotypic marker.",
    "arabic_definition": "يشكّل التنوع الجيني الكبير لفيروس العوز المناعي البشري عقبة في علاجه. يمكن تقسيم الفيروس إلى نوعين رئيسيّين، إتش آي في النوع الأوّل (إتش آي في 1) وإتش آي في النوع الثاني (إتش آي في 2). (HIV-2)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015498.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dengue",
    "term_en": "Dengue",
    "term_ar": "حمى الضنك",
    "synonyms": [
      "Dengue Fever",
      "Fever, Dengue",
      "Classical Dengue",
      "Classical Dengues",
      "Dengue, Classical",
      "Classical Dengue Fever",
      "Classical Dengue Fevers",
      "Dengue Fever, Classical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute febrile disease transmitted by the bite of AEDES mosquitoes infected with DENGUE VIRUS. It is self-limiting and characterized by fever, myalgia, headache, and rash. SEVERE DENGUE is a more virulent form of dengue.",
    "arabic_definition": "حمى الضنك (1) هو مرض مداري منقول بالبعوض يحدث بسبب فيروس الضنك. تشمل الأعراض الحمى، والصداع، وآلام العضلات، والمفاصل، وطفحا جلديًا متميزًا شبيهًا بطفح الحصبة. (Dengue)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003715.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cowpox",
    "term_en": "Cowpox",
    "term_ar": "جدري البقر",
    "synonyms": [
      "Cow Pox",
      "Pox, Cow"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mild, eruptive skin disease of milk cows caused by COWPOX VIRUS, with lesions occurring principally on the udder and teats. Human infection may occur while milking an infected animal.",
    "arabic_definition": "جدري البقر هو مرض معد يسببه فيروس جدري البقر. الفيروس، وهي جزء من عائلة النفاطية السوية، يرتبط ارتباطا وثيقا بفيروس الجدري. (Cowpox)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015605.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vibrio",
    "term_en": "Vibrio",
    "term_ar": "ضمة (بكتيريا)",
    "synonyms": [
      "Beneckea"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of VIBRIONACEAE, made up of short, slightly curved, motile, gram-negative rods. Various species produce cholera and other gastrointestinal disorders as well as abortion in sheep and cattle.",
    "arabic_definition": "بكتيريا الضمة أو ضمات (فيبريو) هو أحد أجناس البكتيريا السالبة لصبغة جرام، وتتخذ شكلاً مميزاً وهو شكل القضيب المنحني أو الفاصلة ولذلك تعرف ببكتيريا الضمة ( ُ). > تستطيع أنواع عديدة من هذه البكتيريا أن تسبب عدوى عن طريق الغذاء والذي يكون عادةً مأكولات بحرية نصف نيئة أو نيئة تماماً حيث توجد غالباً في المياه المالحة، تعد بكتيريا الضمة من البكتيريا اللاهوائية والتي تعطي نتيجة موجبة لاختبار إنزيم الأوكسيديز ولا تقوم بصناعة الأبواغ ولكن الصفة المشتركة بين كل أنواع هذا الجنس أنها متحركة بواسطة سوط قطبي ولها أغطية، وعلى عكس أنواع البكتيريا الأخرى فإن جنس الضمة يتمتع بزوج من الكروموسومات وهذا أمر غير شائع في البكتيريا، كما أن كل كروموسوم له منطقة مخصصة ومتميزة للانقسام والتكاثر ويتم حفظهم جميعاً معاً على مرور الزمن في جنس الضمة. (Vibrio)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014733.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rabies",
    "term_en": "Rabies",
    "term_ar": "داء الكلب",
    "synonyms": [
      "Hydrophobia",
      "Lyssa",
      "Lyssas",
      "Paralytic Rabies",
      "Encephalitic Rabies",
      "Rabies, Encephalitic",
      "Furious Rabies",
      "Furious Raby"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute VIRAL CNS INFECTION affecting mammals, including humans. It is caused by RABIES VIRUS and usually spread by contamination with virus-laden saliva of bites inflicted by rabid animals. Important animal vectors include the dog, cat, bat, fox, raccoon, skunk, and wolf.",
    "arabic_definition": "داء الكَلَب أو داء السّعَر أو السُّعار (الإنجليزية: Rabies) مرض فيروسي قاتل يصيب الدماغ منتقلا له عبر الجهاز العصبي المركزي ويسبب الوفاة الأكيدة في حالة عدم العلاج المباشر، ينتقل الفيروس باللعاب عبر عض أو خربشة من الحيوانات المصابة او عبر انتقال اللعاب المصاب طواعية الي الاغشية المخاطية التي تعرضت للفيروس مثل العين والانف أو الفم. وخطورته تكمن في عدم وجود علاج له في حالة انتشاره بالفعل و في حالة ظهور الأعراض بالفعل والتي قد يتأخر ظهورها لأشهر حسب طبيعة الإصابة تعتبر الوفاة حتمية ، العلاج الوحيد هو بداية التطعيم فوراً بعد التعرض للعض او الخدش من أي حيوان لا يمكن التأكد منه ككلاب الشوارع.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011818.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "malaria",
    "term_en": "Malaria",
    "term_ar": "ملاريا",
    "synonyms": [
      "Infections, Plasmodium",
      "Infection, Plasmodium",
      "Plasmodium Infection",
      "Plasmodium Infections",
      "Paludism",
      "Remittent Fever",
      "Fever, Remittent",
      "Marsh Fever"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A protozoan disease caused in humans by four species of the PLASMODIUM genus: PLASMODIUM FALCIPARUM; PLASMODIUM VIVAX; PLASMODIUM OVALE; and PLASMODIUM MALARIAE; and transmitted by the bite of an infected female mosquito of the genus ANOPHELES. Malaria is endemic in parts of Asia, Africa, Central and South America, Oceania, and certain Caribbean islands. It is characterized by extreme exhaustion associated with paroxysms of high FEVER; SWEATING; shaking CHILLS; and ANEMIA. Malaria in ANIMALS is caused by other species of plasmodia.",
    "arabic_definition": "المَلَارْيَا أو البُرَداء أو الأَجَمِيَّة هو مرض طفيلي معدي يسببه طفيلي المتصورة (أو بلازموديوم)، ينتقل عن طريق لعاب أنثى بعوض الأنفوليس، ينتقل إلى الكبد ويتكاثر ثم يطلق إلى الدم ويهاجم خلايا الدم الحمراء ويدمرها، يترافق ذلك مع مجموعة من الأعراض أهمها الحمى، فقر الدم، وتضخم الطحال. اُكْتُشِف الطفيلي المسبب لمرض الملاريا في 6 نوفمبر 1880 في المستشفى العسكري بقسنطينة في الجزائر من قبل طبيب في الجيش الفرنسي يدعى ألفونس لافيران والذي حاز على جائرة نوبل في الطب والفزيولوجيا لعام 1907 عن اكتشافه هذا. (Malaria)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008288.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "poultry",
    "term_en": "Poultry",
    "term_ar": "دواجن",
    "synonyms": [
      "Poultries",
      "Fowls, Domestic",
      "Domestic Fowl",
      "Domestic Fowls",
      "Fowl, Domestic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Domesticated birds raised for food. It typically includes CHICKENS; TURKEYS, DUCKS; GEESE; and others.",
    "arabic_definition": "الدواجن أو الطيور الداجنة في (الإنجليزية: Poultry) هي الطيور التي تُربى عند البشر ويُستفاد من بيضها ولحمها وريشها وهي طيور أليفة ومستأنسة. هذه الطيور تكون فوق رتبة دجاوزيات وهي من ضمن رتبة الدجاجيات (والذي يتضمن الدجاج، السمان، والديك الرومي) وتصنف لحومها من صنف اللحوم البيضاء.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011200.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteus",
    "term_en": "Proteus",
    "term_ar": "بروتوس",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, facultatively anaerobic, rod-shaped bacteria that occurs in the intestines of humans and a wide variety of animals, as well as in manure, soil, and polluted waters. Its species are pathogenic, causing urinary tract infections and are also considered secondary invaders, causing septic lesions at other sites of the body.",
    "arabic_definition": "بروتوس (الإنجليزية: Proteus) هو ربُّ بحرٍ بدائيٍّ في الأساطير اليونانية أو إله للأنهار والمسطحات المائية المُحيطيَّة، كان يمتلك موهبة التنبؤ (النبوءة). وهو أحد الآلهة الذين يكنيهم هوميروس بـ«عجوز البحر».",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011511.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leprosy",
    "term_en": "Leprosy",
    "term_ar": "جذام",
    "synonyms": [
      "Hansen Disease",
      "Hansen's Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic granulomatous infection caused by MYCOBACTERIUM LEPRAE. The granulomatous lesions are manifested in the skin, the mucous membranes, and the peripheral nerves. Two polar or principal types are lepromatous and tuberculoid.",
    "arabic_definition": "الجذام أو داء الأسد (الاسم العلمي: Leprosy) المعروف أيضاً باسم مرض هانسن (HD) هو عدوى مزمنة تنجم عن البكتيريا الفُطْرية الجذامية والفُطْرية الجذامية الورمية. في البداية، لا تترافق العدوى بأعراض وتبقى عادة هكذا لمدة تستمر من 5 سنوات حتى 20 سنة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007918.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tetanus",
    "term_en": "Tetanus",
    "term_ar": "كزاز",
    "synonyms": [
      "Clostridium tetani Infection",
      "Clostridium tetani Infections",
      "Infection, Clostridium tetani",
      "Infections, Clostridium tetani"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease caused by tetanospasmin, a powerful protein toxin produced by CLOSTRIDIUM TETANI. Tetanus usually occurs after an acute injury, such as a puncture wound or laceration. Generalized tetanus, the most common form, is characterized by tetanic muscular contractions and hyperreflexia. Localized tetanus presents itself as a mild condition with manifestations restricted to muscles near the wound. It may progress to the generalized form.",
    "arabic_definition": "الكزاز أو التيتانوس (الإنجليزية: Tetanus) هو مرض حاد ينتج عن تلوث الجروح بالجراثيم التي تحمل بداخل الأبواغ. والأبواغ تحمل بداخلها البكتيريا التي تبدأ بالنمو موضعيًا في الجرح نفسه، وتنتج سمًا قويًا يمتصه الجسم ويؤدي إلى تقلصات مؤلمة في العضلات وتقلص في عضلات الحنك وتشنجات متوترة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013742.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "measles",
    "term_en": "Measles",
    "term_ar": "حصبة",
    "synonyms": [
      "Rubeola"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A highly contagious infectious disease caused by MORBILLIVIRUS, common among children but also seen in the nonimmune of any age, in which the virus enters the respiratory tract via droplet nuclei and multiplies in the epithelial cells, spreading throughout the MONONUCLEAR PHAGOCYTE SYSTEM.",
    "arabic_definition": "الحصبة هو مرض فيروسي حاد ومعدي يصيب الأطفال، ويسبب لهم بعض المضاعفات التي تكون خطيرة في بعض الأحيان. ويعتبر مرض الحصبة من أكثر الأمراض انتشارا في سن الطفولة بصفه خاصة، ولكنه قد يصيب الكبار أيضاً. (Measles)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008457.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rubella",
    "term_en": "Rubella",
    "term_ar": "حصبة ألمانية",
    "synonyms": [
      "Rubellas",
      "Measles, German",
      "German Measles",
      "Three Day Measles",
      "Measles, Three Day",
      "Measle, Three Day",
      "Three Day Measle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute infectious disease caused by the RUBELLA VIRUS. The virus enters the respiratory tract via airborne droplet and spreads to the LYMPHATIC SYSTEM.",
    "arabic_definition": "الحصبة الألمانية أو الحميراء (الإنجليزية: Rubella) هي مرض مُعدي يسببه فيروس الحصبة الألمانية ولا يسبب للطفل إزعاجا أكثر من إزعاج الزكام، وتستمر فترة حضانة الفيروس بعد أن يدخل الجسم من 14 إلى 21 يوماً وعادة يكون 18 يوما ثم تبدأ أعراض المرض في الظهور مثل ارتفاع درجة حرارة الجسم خلال يومين الأولين وقد تنتفخ الغدد الواقعة خلف الأذنين وحول العنق ويظهر الطفح في اليوم الأول أو الثاني ويتكون من بقع مسطحة حمراء قانية في منطقة الوجه، ثم ينتشر بسرعة إلى كافة أنحاء الجسم وتزول كل الأعراض في اليوم الرابع والخامس. ويكون المصاب معديا في الفترة من أسبوع قبل ظهور الطفح إلى مدة أربع أيام بعد ظهوره، ويكتسب الشخص مناعة دائمة بعد شفائه من المرض.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012409.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "loiasis",
    "term_en": "Loiasis",
    "term_ar": "داء اللوائيات",
    "synonyms": [
      "Loiases",
      "Loa loa Infection",
      "Infection, Loa loa",
      "Loa loa Infections",
      "Loaiasis",
      "Loaiases",
      "Loa loa Filariasis",
      "Filariasis, Loa loa"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A parasitic infection caused by the nematode Loa loa. The vector in the transmission of this infection is the horsefly (Tabanus) or the deerfly or mango fly (Chrysops). The larvae may be seen just beneath the skin or passing through the conjunctiva. Eye lesions are not uncommon. The disease is generally mild and painless.",
    "arabic_definition": "داء اللوائيات (اللاتينية: loaiasis) (تسمى أيضا دودة العين الاٍفريقية، التورم الهارب، التورم الاستوائي) هو مرض جلد وأعين تسببه دودة اللوا اللوائية. يصاب الاٍنسان بالعدوى بعد تعرضه لعضات ذباب الخيل (Tabanidae) معروفة أيضا باٍسم (ذبابة المانغو). (Loiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008118.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myiasis",
    "term_en": "Myiasis",
    "term_ar": "داء النغف",
    "synonyms": [
      "Myiases",
      "Maggot Infestations",
      "Infestation, Maggot",
      "Infestations, Maggot",
      "Maggot Infestation",
      "Fly Strike",
      "Fly Strikes",
      "Flystrike"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The invasion of living tissues of man and other mammals by dipterous larvae.",
    "arabic_definition": "داء النَّغَف أو داء الدودة الحلزونية (اللاتينية: Myiasis) هو مرض يصيب الحيوان أو الإنسان وتسببه يرقات بعض ثنائيات الأجنحة الطفيلية التي تتغذى على الأنسجة أو الأعضاء الحية للجسم.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009198.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoses",
    "term_en": "Mycoses",
    "term_ar": "عدوى فطرية",
    "synonyms": [
      "Fungal Infections",
      "Fungal Infection",
      "Infection, Fungal",
      "Infections, Fungal",
      "Fungal Diseases",
      "Disease, Fungal",
      "Diseases, Fungal",
      "Fungal Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases caused by FUNGI.",
    "arabic_definition": "العدوى الفطرية، (اللاتينية: Mycosis) والمعروفة أيضًا باسم الفُطَار (Mycosis)، هو مرض تسببه الفطريات. وتُصنَّف الأنواع المختلفة تقليديًا حسب الجزء المتأثر من الجسم إلى: سطحية، تحت الجلد، وجهازية. (Mycoses)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009181.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "empyema",
    "term_en": "Empyema",
    "term_ar": "دبيلة",
    "synonyms": [
      "دبيلة (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Presence of pus in a hollow organ or body cavity.",
    "arabic_definition": "الدُّبَيلَة (الإنجليزية: Empyema) تجمُّع قَيحي في أحد تجاويف الجِسم الطبيعية، فمثلًا الدُّبَيلة الجَنبية هي أحد أنواع الدُّبَيلة التي تَحدُث في التجويف الجَنبي. من الضروري تمييز الدُّبيلة من الخُرَاج الذي يُعرَّف بأنه تجمُّع قيحي في تجويفٍ حديث المَنشأ.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004653.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "abscess",
    "term_en": "Abscess",
    "term_ar": "خراج",
    "synonyms": [
      "Abscesses",
      "خراج (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Accumulation of purulent material in tissues, organs, or circumscribed spaces, usually associated with signs of infection.",
    "arabic_definition": "الخُرَاجُ أو الخُرَاجَةُ أو الدُّمَّلُ (الإنجليزية: Abscess) هو تجويف قيحي داخل تجويف ناتج عن التهاب صديدي حاد بالأنسجة مع وجود تموت ونخر للخلايا النسيجية. تتضمن أعراض الخراج الاحمرار، و الألم، والحرارة، والتورم.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000038.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cholera",
    "term_en": "Cholera",
    "term_ar": "كوليرا",
    "synonyms": [
      "Choleras",
      "Vibrio cholerae Infection",
      "Infections, Vibrio cholerae",
      "Infection, Vibrio cholerae",
      "Vibrio cholerae Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute diarrheal disease endemic in India and Southeast Asia whose causative agent is VIBRIO CHOLERAE. This condition can lead to severe dehydration in a matter of hours unless quickly treated.",
    "arabic_definition": "مرض الكوليرا أو الكُلِرَة أو الهَيْضَة، والتي تعرف أحيانا باسم الكوليرا الآسيوية أو الكوليرا الوبائية، هي الأمراض المعوية المُعدية التي تُسببها سلالات جرثوم ضمة الكوليرا المنتجة للذيفان المعوي. وتنتقل الجرثومة إلى البشر عن طريق تناول طعام أو شرب مياه ملوثة ببكتيريا ضمة الكوليرا من مرضى كوليرا آخرين. (Cholera)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002771.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anthrax",
    "term_en": "Anthrax",
    "term_ar": "جمرة خبيثة",
    "synonyms": [
      "Bacillus anthracis Infection",
      "Bacillus anthracis Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute infection caused by the spore-forming bacteria BACILLUS ANTHRACIS. It commonly affects hoofed animals such as sheep and goats. Infection in humans often involves the skin (cutaneous anthrax), the lungs (inhalation anthrax), or the gastrointestinal tract. Anthrax is not contagious and can be treated with antibiotics.",
    "arabic_definition": "الجمرة الخبيثة أو حمى تفحمية أو مرض الجمرة ٲو ٲنثراكس هو مرض حاد تسببه بكتيريا الجمرة الخبيثة. والتي تصيب الحيوانات. (Anthrax)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000881.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chancre",
    "term_en": "Chancre",
    "term_ar": "قرحة صلبة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The primary sore of syphilis, a painless indurated, eroded papule, occurring at the site of entry of the infection.",
    "arabic_definition": "القرحة الصلبة (الإنجليزية: Chancre) هي قرحة تناسلية غير مؤلمة تحدث غالبا خلال المرحلة الأولية من مرض الزهري. وتتشكل هذه الآفة المعدية بعد 21 يومًا تقريبًا من التعرض الأولي لجرثومة اللولبية الشاحبة، وهي بكتيريا ملتوية سلبية الغرام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002601.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nostoc",
    "term_en": "Nostoc",
    "term_ar": "نوستك",
    "synonyms": [
      "Nostoc punctiforme",
      "Nostoc ellipsosporum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form-genus of CYANOBACTERIA in the order Nostocales. Trichomes composed of spherical or ovoid vegetative cells along with heterocysts and akinetes. The species form symbiotic associations with a wide range of eukaryotes.",
    "arabic_definition": "بَزْقَة القمر أو النوستك (الاسم العلمي: Nostoc) هو جنس من البكتيريا الزرقاء يتبع الفصيلة النوستكية من رتبة النوستكيات. يوجد في شكل مستعمرات تتألف من خيوط مكونة من خلايا عقدية الشكل في غمد هلامي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046937.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pannus",
    "term_en": "Pannus",
    "term_ar": "سبل",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of CYANOBACTERIA in the family Synechococcaceae that is free-floating and occurs in various water environments attaching to algae and submersed plants.",
    "arabic_definition": "السَبَل هو مصطلح طبي يشير إلى طبقة غير طبيعية من نسيج ليفي وعائي أو نسيج حبيبي. وتشتمل الأماكن الأكثر شيوعًا لتكوين السبل على المنطقة الموجودة فوق القرنية، أو على سطح مفصل (كما في التهاب المفاصل الروماتويدي)، أو على صمام القلب الاصطناعي. (Pannus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000086282.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "viroids",
    "term_en": "Viroids",
    "term_ar": "فيروسي الشكل",
    "synonyms": [
      "Viroid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of pathogens comprising the smallest known agents of infectious disease. They are unencapsulated and are capable of replicating autonomously in susceptible cells. Positively identified viroids composed of single-stranded RNA have been isolated from higher plants, but the existence of DNA viroids pathogenic to animals is suspected.",
    "arabic_definition": "أشباه الفيروسات أو فيرويد Viroids هي ممرضات نباتية تتكون من قطعة قصيرة (بضع مئات من القواعد النيتروجينية) من الحمض النووي الريبوزي الحلقي وحيد السلسلة المتكامل بدرجة عالية من دون الغلاف البروتيني المميز للفيروسات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014772.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thermus",
    "term_en": "Thermus",
    "term_ar": "مستحرات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gram-negative aerobic rods found in warm water (40-79 degrees C) such as hot springs, hot water tanks, and thermally polluted rivers.",
    "arabic_definition": "مستحرات (الإنجليزية: Thermus) هي جنس من البكتيريا، سلبية الغرام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013824.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "viremia",
    "term_en": "Viremia",
    "term_ar": "تفيرس الدم",
    "synonyms": [
      "Viremias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of viruses in the blood.",
    "arabic_definition": "تفيرس الدم أو وجود الفيروسات في الدم أو حماتمية (الإنجليزية: Viremia) هي حالة طبية حيث تدخل الفيروسات إلى مجرى الدم ومن ثم تصل إلى باقي الجسم. وهي تشبه تجرثم الدم.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014766.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "viruses",
    "term_en": "Viruses",
    "term_ar": "فيروس",
    "synonyms": [
      "Virus",
      "Animal Viruses",
      "Animal Virus",
      "Virus, Animal",
      "Viruses, Animal",
      "Zoophaginae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Minute infectious agents whose genomes are composed of DNA or RNA, but not both. They are characterized by a lack of independent metabolism and the inability to replicate outside living host cells.",
    "arabic_definition": "الفيروسات أو الحُمَات، مفردها فيروس أو الحُمَة (اللاتينية: Virus) وتعني فيروس في اليونانية «ذيفان» أو «سم»، وهو عامل ممرض صغير لا يمكنه التكاثر إلا داخل خلايا كائن حي آخر. الفيروسات صغيرة جدًا ولا يمكن مشاهدتها بالمجهر الضوئي. (Viruses)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014780.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "delftia",
    "term_en": "Delftia",
    "term_ar": "دلفتية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, strictly aerobic chemoorganotrophic bacteria, in the family COMAMONADACEAE.",
    "arabic_definition": "دلفتية (الاسم العلمي: Delftia) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة الكوماموناسيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042742.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "syphilis",
    "term_en": "Syphilis",
    "term_ar": "زهري",
    "synonyms": [
      "Great Pox",
      "زهري (مرض)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A contagious venereal disease caused by the spirochete TREPONEMA PALLIDUM.",
    "arabic_definition": "الزُّهري أو الإفرنجي (الإنجليزية: Syphilis)، ويسمى أيضاً تعريبًا بالسِّفْلِس، مرض من الأمراض المنقولة جنسيا التي تسببها الجرثومة الملتوية اللولبية الشاحبة (Treponema pallidum) من سلالة البكتيريا الشاحبة. طريق انتقال مرض الزهري هو غالبا عن طريق الاتصال الجنسي، وإن كانت هناك أمثلة من الزهري الخلقي عن طريق انتقال العدوى من الأم إلى الجنين داخل الرحم، أو عن طريق انتقال العدوى عند عبور الطفل في قناة الولادة أثناء عملية الولادة، كما يحصل أيضًا في فيروس نقص المناعة البشرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013587.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "yersinia",
    "term_en": "Yersinia",
    "term_ar": "يرسينية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, facultatively anaerobic rod- to coccobacillus-shaped bacteria that occurs in a broad spectrum of habitats.",
    "arabic_definition": "اليرسينية أو اليرسنية (الاسم العلمي: Yersinia) هي جنس من البكتيريا تتبع الفصيلة الأمعائيات من رتبة المعويات. سمي هذا الجنس من البكتيريا تكريماً لعالم البكتيريات الفرنسي ألكسندر اميل جان يرسن لكونه أول من قام بعزل العامل المسبب للطاعون عام 1894.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015007.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shigella",
    "term_en": "Shigella",
    "term_ar": "شيغيلا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, facultatively anaerobic, rod-shaped bacteria that ferments sugar without gas production. Its organisms are intestinal pathogens of man and other primates and cause bacillary dysentery (DYSENTERY, BACILLARY).",
    "arabic_definition": "الشيغلا أو شيغيلة أو شيغيلا (الإنجليزية: Shigella) هي جنس من البكتيريا سالبة الغرام، لاهوائية اختيارية، غير متجرثمة، غير متحركة، عصوية الشكل على شكل قضيب وترتبط ارتباطًا وثيقًا بالبكتيريا الإشريكية القولونية. تمت تسمية الجنس على اسم كيوشي شيغا، الذي اكتشفه لأول مرة في عام 1897.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012760.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pleurisy",
    "term_en": "Pleurisy",
    "term_ar": "التهاب الجنبة",
    "synonyms": [
      "Pleurisies",
      "Pleuritis",
      "Pleuritides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of PLEURA, the lining of the LUNG. When PARIETAL PLEURA is involved, there is pleuritic CHEST PAIN.",
    "arabic_definition": "التهاب الجنبة أو ذات الجنب أو الشوصة أو الكَشَح أو البرسام (الإنجليزية: pleurisy أوpleuritis) يعرف بأنه التهاب الجنبة، والجنبة هي البطانة المحيطة بالرئتين. توجد العديد من الأسباب المحتملة لالتهاب الجنبة ولكن الأخماج الفيروسية (حالات العدوى الفيروسية) المنتشرة من الرئتين إلى الجوف الجنبي تعد السبب الأكثر شيوعًا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010998.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vaccinia",
    "term_en": "Vaccinia",
    "term_ar": "وقس",
    "synonyms": [
      "Vaccinias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The cutaneous and occasional systemic reactions associated with vaccination using smallpox (variola) vaccine.",
    "arabic_definition": "وقس (الإنجليزية: Vaccinia or VACV or VV) هي فيروسات معقدة مغلفة تنتمي لعائلة الفيروسات الجدرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014615.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glanders",
    "term_en": "Glanders",
    "term_ar": "رعام",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A contagious disease of horses that can be transmitted to humans. It is caused by BURKHOLDERIA MALLEI and characterized by ulceration of the respiratory mucosa and an eruption of nodules on the skin.",
    "arabic_definition": "الرُّعَامُ أو السقاوة أو الرُّعَال أو داء الخيل (الإنجليزية: Glanders) وهو مرض معدي يصيب الخيل والبغال والحمير. ويحمل المرض جرثومة تدعى (Burkholderia mallei) تنقله عبر الأغذية والمياه الملوثة ويمكن لهذه الجرثومة أن تصيب الإنسان ولذا تصنف على أنها ناقل لمرض حيواني المنشأ.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005896.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "serratia",
    "term_en": "Serratia",
    "term_ar": "سراتية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, facultatively anaerobic, rod-shaped bacteria that occurs in the natural environment (soil, water, and plant surfaces) or as an opportunistic human pathogen.",
    "arabic_definition": "السِّرَّاتِيَّةُ (الاسم العلمي: Serratia)، جنس بكتيريا سلبية الغرام اللاهوائية على شكل قضيب من فصيلة اليرسنيات. وفقًا لقائمة أسماء بدائيات النوى مع التسمية الدائمة (LPSN)، يوجد حاليًا 19 نوعًا من السراتية نُشرت بشكل موثوق بأسماء دقيقة اعتبارًا من عام 2020: S. aquatilis ، S. entomophila ، S. ficaria ، S. fonticola ، S. grimesii، S.Liquefaciens، S. marcescens، S. microhaemolytica، S. myotis، S. nematodiphila، S. odoriferae، S. oryzae، S. plymuthica، S. proteamaculans، S. quinivorans corrig، S. rubidaea، S. symbiotica ،S. ureilytica ، S. vespertilionis.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012705.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "listeria",
    "term_en": "Listeria",
    "term_ar": "ليسترية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of bacteria which may be found in the feces of animals and man, on vegetation, and in silage. Its species are parasitic on cold-blooded and warm-blooded animals, including man.",
    "arabic_definition": "اللستيريا هي جنس من البكتيريا وتضم 10 أنواع كل منها يحتوي على نويعين (تحت نوع). سميت نسبة إلى الجراح جوزف ليستر وقد اكتسب الجنس اسمه الحالي عام 1940. (Listeria)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008087.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nocardia",
    "term_en": "Nocardia",
    "term_ar": "نوكاردية",
    "synonyms": [
      "Micropolyspora"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, aerobic bacteria whose species are widely distributed and are abundant in soil. Some strains are pathogenic opportunists for humans and animals.",
    "arabic_definition": "النوكاردية (الاسم العلمي:Nocardia) هي جنس من البكتيريا تتبع الفصيلة النوكارديات من رتبة الشعيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009615.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "smallpox",
    "term_en": "Smallpox",
    "term_ar": "جدري",
    "synonyms": [
      "Variola",
      "Variolas",
      "Variola Minor",
      "Minors, Variola",
      "Minor, Variola",
      "Variola Minors",
      "Alastrim"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute, highly contagious, often fatal infectious disease caused by an orthopoxvirus characterized by a biphasic febrile course and distinctive progressive skin eruptions. Vaccination has succeeded in eradicating smallpox worldwide. (Dorland, 28th ed)",
    "arabic_definition": "الجُدَرِيّ أو الجَدَرِيّ أو الجدري الكبير (الإنجليزية: Smallpox) والمُصاب به مَجْدُور، هو مرض معدي ذو أصل فيروسي وبائيًا وشديد العدوى بسبب فيروس الجُدَرِيُّ الكبير (كان الأكثر شيوعًا والأكثر شدة) ويختلف الجدري الكبير عن الجدري الصغير (بالإنجليزية: Chickenpox) الذي قد يصيب الأطفال، وتشمل الأعراض الأولية للمرض الحمى والقيء. ويتبعها تكوين تقرحات على مستوى الفم وطفح جلدي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012899.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacillus",
    "term_en": "Bacillus",
    "term_ar": "عصوية",
    "synonyms": [
      "Bacillus bacterium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of BACILLACEAE that are spore-forming, rod-shaped cells. Most species are saprophytic soil forms with only a few species being pathogenic.",
    "arabic_definition": "العصوية أو القَصِيمَة أو باسلس (الإنجليزية: Bacillus) هي جنس بكتيريا موجبة غرام وعضو بشعبة متينات الجدار، هي بكتيريا عصوية تتراوح بين (0. 5 × 1.2 ميكرون) إلى (2.5 × 10 ميكرون)، هوائية أو هوائي-لاهوائية اختيارياً وتستمد طاقتها من التنفس أو التخمر، هذه البكتيريا قادرة على إنتاج حويصلات يسمح لها بتحمل الظروف البيئية غير الملائمة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001407.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aquifex",
    "term_en": "Aquifex",
    "term_ar": "صانعة الماء",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A thermophilic, gram-negative genus of bacteria in the phylum Aquificae and the family Aquificaceae. Rod-shaped and non-spore forming, this genus is known to grow near underwater volcanoes or hot springs.",
    "arabic_definition": "صانعة الماء (الإنجليزية: Aquifex) هي جنس من البكتيريا وواحد من القلائل في شعبة البكتيريا صانعة الماء، هناك نوع واحد من صانعة الماء يحمل اسمًا منشورًا بشكل صحيح هو صانعة الماء محبة النار (الإنجليزية: Aquifex pyrophilus) لكن صانعة الماء الأيولية (اللاتينية: Aquifex aeolicus) يُعتبر في بعض الأحيان نوع على الرغم من عدم وجود مكانة له كإسم معين نظرًا لأنه لم يتم نشره علمياً بشكل صحيح أو فعال، أنواع صانعة الماء تألف الحرارة بشكل متطرف إذ تنمو أفضل في درجة حرارة بين 85 د م إلى 95 د م، وهي تعتبر من البكتيريا على عكس الكائنات الأخرى أليفة البيئات القاسية مثل العتائق. أنواع صانعة الماء هي بكتيريا سلبية الغرام على شكل قضيب بطول 2 إلى 6 ميكرومتر وقطرها حوالي 0.5 ميكرومتر، غير مبوغة وذاتية التغذية، تميل إلى تشكيل مجاميع خلايا تتكون من ما يصل إلى 100 خلية فردية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000086142.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brucella",
    "term_en": "Brucella",
    "term_ar": "بروسيلا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic bacteria that causes BRUCELLOSIS. Its cells are nonmotile coccobacilli and are animal parasites and pathogens. The bacterium is transmissible to humans through contact with infected dairy products or tissue.",
    "arabic_definition": "البروسيلا أو عصّية بروس جنس من البكتيريا سالبة غرام سميت بهذا الاسم نسبة ل ديفد بروس (1855-1931) ز هي جراثيم صغيرة أبعادها ( 0,5 – 0,7 ب 0,6 – 1,5 ). غير ممحفظة، ذات سياط، و هي عصورات مجبرة داخل خلوية. (Brucella)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002002.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "borrelia",
    "term_en": "Borrelia",
    "term_ar": "بوريليا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, anaerobic, helical bacteria, various species of which produce RELAPSING FEVER in humans and other animals.",
    "arabic_definition": "البوريليا (الاسم العلمي: Borrelia) (الإنجليزية: Thicklip pupfish) هي جنس من البكتيريا تتبع الفصيلة البوريلية من رتبة الملتويات. البوريليا تسبب داء لايم وهو مرض منقول عن طريق الناقلات وهي هنا منقولة في المقام الأول عن طريق القراد وبعض القمل بالاعتماد على النوع.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001898.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacteria",
    "term_en": "Bacteria",
    "term_ar": "بكتيريا",
    "synonyms": [
      "Eubacteria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of the three domains of life (the others being Eukarya and ARCHAEA), also called Eubacteria. They are unicellular prokaryotic microorganisms which generally possess rigid cell walls, multiply by cell division, and exhibit three principal forms: round or coccal, rodlike or bacillary, and spiral or spirochetal. Bacteria can be classified by their response to OXYGEN: aerobic, anaerobic, or facultatively anaerobic; by the mode by which they obtain their energy: chemotrophy (via chemical reaction) or PHOTOTROPHY (via light reaction); for chemotrophs by their source of chemical energy: CHEMOLITHOTROPHY (from inorganic compounds) or chemoorganotrophy (from organic compounds); and by their source for CARBON; NITROGEN; etc.; HETEROTROPHY (from organic sources) or AUTOTROPHY (from CARBON DIOXIDE). They can also be classified by whether or not they stain (based on the structure of their CELL WALLS) with CRYSTAL VIOLET dye: gram-negative or gram-positive.",
    "arabic_definition": "البكتيريا أو الجُرْثُومَة أو الجُرْثُوم (Bacteria وباليونانية القديمة: bakterion عصيات) كائنات حية دقيقة وحيدة الخلية منها المكورات والعصيات والحلزونية، وهي تتجمع مع بعضها وتأخذ أشكالاً متعددة مثل عقد أو سبحة فتسمى مكورات عقدية أو على شكل عنقود فتسمى مكورات عنقودية. تتراوح أبعاد البكتريا بين 0.5-5 ميكرومتر مع أن التنوع الواسع للبكتريا يمكن أن يظهر تعدد أشكال كبير جداً.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001419.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "zoonoses",
    "term_en": "Zoonoses",
    "term_ar": "مرض حيواني المنشأ",
    "synonyms": [
      "Zoonotic Diseases",
      "Diseases, Zoonotic",
      "Disease, Zoonotic",
      "Zoonotic Disease",
      "Zoonotic Infections",
      "Infections, Zoonotic",
      "Infection, Zoonotic",
      "Zoonotic Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases of non-human animals that may be transmitted to HUMANS or may be transmitted from humans to non-human animals.",
    "arabic_definition": "المرض حيواني المنشأ أو مرض حيواني المصدر أو مرض مشترك أو ممرض حيواني (الإنجليزية: zoonosis) هو المرض المعدي الذي يسري في الحالة الطبيعية بين الحيوانات الفقارية البرية أو الأليفة ويمكن أن ينتقل منها إلى الإنسان. ويمكن أن يكون الإنسان المصاب مصدراً لعدوى الناس الآخرين في بعض الأمراض مثل الطاعون، أما في بعضها الآخر فلا ينتقل المرض من الإنسان المصاب، كما في داء البروسيلات. (Zoonoses)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015047.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anabaena",
    "term_en": "Anabaena",
    "term_ar": "أنابينا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of CYANOBACTERIA consisting of trichomes that are untapered with conspicuous constrictions at cross-walls. A firm individual sheath is absent, but a soft covering is often present. Many species are known worldwide as major components of freshwater PLANKTON and also of many saline lakes. The species DOLICHOSPERMUM FLOS-AQUAE is responsible for acute poisonings of various animals.",
    "arabic_definition": "الأنابينا (الاسم العلمي: Anabaena) هي جنس من البكتيريا تتبع الفصيلة النوستكية من رتبة النوستكيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017033.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fungemia",
    "term_en": "Fungemia",
    "term_ar": "وجود الفطريات في الدم",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of fungi circulating in the blood. Opportunistic fungal sepsis is seen most often in immunosuppressed patients with severe neutropenia or in postoperative patients with intravenous catheters and usually follows prolonged antibiotic therapy.",
    "arabic_definition": "وجود الفطريات في الدم هو وجود الفطريات أو الخميرة في الدم. النوع الأكثر شيوعًا، والمعروف أيضًا باسم داء المبيضات أو داء المبيضات الجهازي، يحدث بسبب أنواع المبيضات. (Fungemia)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016469.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "discitis",
    "term_en": "Discitis",
    "term_ar": "التهاب القرص",
    "synonyms": [
      "Discitides",
      "Spondylodiscitis",
      "Spondylodiscitides",
      "Diskitis",
      "Diskitides",
      "Spondylodiskitis",
      "Spondylodiskitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of an INTERVERTEBRAL DISC or disk space which may lead to disk erosion. Until recently, discitis has been defined as a nonbacterial inflammation and has been attributed to aseptic processes (e.g., chemical reaction to an injected substance). However, recent studies provide evidence that infection may be the initial cause, but perhaps not the promoter, of most cases of discitis. Discitis has been diagnosed in patients following discography, myelography, lumbar puncture, paravertebral injection, and obstetrical epidural anesthesia. Discitis following chemonucleolysis (especially with chymopapain) is attributed to chemical reaction by some and to introduction of microorganisms by others.",
    "arabic_definition": "التهاب القرص هي عدوى في حيز القرص بين الفقرات والتي تؤثر مختلف الاعمار. حيث انها قد تؤدي عند البالغين لمضاعفات مختلفة مثل تسمم الدم ، أو الخراج فوق الجافية، ولكن يمكنها أيضا التجدد تلقائيا وخاصة لدى الأطفال ممن هم اصغر من سن الثامنة. (Discitis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015299.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aeromonas",
    "term_en": "Aeromonas",
    "term_ar": "غازية (بكتيريا)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, facultatively anaerobic, rod-shaped bacteria that occurs singly, in pairs, or in short chains. Its organisms are found in fresh water and sewage and are pathogenic to humans, frogs, and fish.",
    "arabic_definition": "الغازِيَّة أو الهوائية أو إيروموناس (الاسم العلمي: Aeromonas)، جنس من البكتيريا سالبة الجرام، لاهوائية اختيارية، عصوية الشكل، تشبه من الناحية الشكلية أفراد فصيلة البكتيريا المعوية. ارتبطت معظم الأنواع الموصوفة البالغ عددها 14 نوعًا بأمراض بشرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000333.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amebiasis",
    "term_en": "Amebiasis",
    "term_ar": "داء الأميبات",
    "synonyms": [
      "Amebiases",
      "Amoebiasis",
      "Amoebiases",
      "Ameboma",
      "Iodamoebiasis",
      "Iodamoebiases",
      "Abscess, Amebic",
      "Abscesses, Amebic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with any of various amebae. It is an asymptomatic carrier state in most individuals, but diseases ranging from chronic, mild diarrhea to fulminant dysentery may occur.",
    "arabic_definition": "مرض الأميبات أو دوسنتاريا أميبية (الإنجليزية: Amoebiasis) والمعروف عند العوام باسم الزنطارية تسببه طفيلية المتحولة الحالة للنسج، تعيش إنتاميبا هستوليتيكا متطفلة في تجويف الأمعاء الغليظة للعائل وتتغذى على الغشاء المخاطي للأمعاء الغليظة وخلايا الدم الحمراء، وتفرز الانتاميبا أنزيمات تحلل الغشاء المخاطي للأمعاء الغليظة، وتتعمق داخل جدار الأمعاء فتتلف خلاياها وتكون قروحاً مؤلمة، وبذلك يحدث مرض الزحار حيث تتحوصل الانتاميبا داخل الأمعاء، وتصبح كبيرة الحجم يترواح قطرها من 30- 40 ميكرون وبداخل كل حوصلة أربع أنوية تتحول إلى أنتاميبات صغيرة وحويصلات الأنتاميبا التي تخرج مع براز الشخص المريض، وتنتقل إلى الطعام والشراب بواسطة الذباب والصراصير، وعندما يبتلعها شخص سليم تحدث العدوى وينتشر المرض. صحيح أن هذا المرض غير معروف، لكن التقديرات تشير إلى أن نحو 1% من مجمل سكان العالم مصابون به حيث يسبب نحو 50,000 حالة وفاة سنويا حول العالم. (Amebiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000562.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "covid-19",
    "term_en": "COVID-19",
    "term_ar": "مرض فيروس كورونا 2019",
    "synonyms": [
      "SARS Coronavirus 2 Infection",
      "2019-nCoV Infection",
      "2019-nCoV Infections",
      "Infection, 2019-nCoV",
      "SARS-CoV-2 Infection",
      "Infection, SARS-CoV-2",
      "SARS-CoV-2 Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A viral disorder generally characterized by high FEVER; COUGH; DYSPNEA; CHILLS; PERSISTENT TREMOR; MUSCLE PAIN; HEADACHE; SORE THROAT; a new loss of taste and/or smell (see AGEUSIA and ANOSMIA) and other symptoms of a VIRAL PNEUMONIA. A coronavirus, SARS-CoV-2 VIRUS, in the genus BETACORONAVIRUS is the causative agent.",
    "arabic_definition": "مرض فيروس كورونا 2019 (الإنجليزية: Coronavirus disease 2019)، أو كوفيد-19 (COVID-19) باختصار، ويُعرف أيضًا باسم المرض التنفسي الحاد المرتبط بفيروس كورونا المستجد 2019، هو مرضٌ تنفسي إنتاني حيواني المنشأ، يُسببه فيروس كورونا المرتبط بالمتلازمة التنفسية الحادة الشديدة النوع 2 (سارس كوف 2). هذا الفيروس قريبٌ جدًا من فيروس سارس.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000086382.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chlamydia",
    "term_en": "Chlamydia",
    "term_ar": "داء المتدثرات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family CHLAMYDIACEAE whose species cause a variety of diseases in vertebrates including humans, mice, and swine. Chlamydia species are gram-negative and produce glycogen. The type species is CHLAMYDIA TRACHOMATIS.",
    "arabic_definition": "داء المُتَدَثِّرات (الإنجليزية: chlamydiosis) أو الكلاميديا (الإنجليزية: Chlamydia) هو مرض منقول جنسيا سبب نوع من المتدثرات يدعى بالمتدثرة الحثرية Chlamydia trachomatis وهي بكتيريا سلبية الغرام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002689.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neisseria",
    "term_en": "Neisseria",
    "term_ar": "نيسرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic, coccoid bacteria whose organisms are part of the normal flora of the oropharynx, nasopharynx, and genitourinary tract. Some species are primary pathogens for humans.",
    "arabic_definition": "النَّيْسَرِيَّة (الاسم العلمي: Neisseria) هي جنس من البكتيريا السالبة الغرام تتبع فصيلة نظيرات النيسرية من رتبة النيسريات. والتي تستوطن الأسطح المخاطية للكثير من الحيوانات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009343.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chancroid",
    "term_en": "Chancroid",
    "term_ar": "قريح",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute, localized autoinoculable infectious disease usually acquired through sexual contact. Caused by HAEMOPHILUS DUCREYI, it occurs endemically almost worldwide, especially in tropical and subtropical countries and more commonly in seaports and urban areas than in rural areas.",
    "arabic_definition": "القَُرَيْح أو القرح اللين أو القرحة اللينة (بالإنكليزية Chancroid) تسمى أيضا القرحة الرخوة أو القرحة الآكلة. وهي مرض بكتيري يصيب الجهاز التناسلي، وينتقل عن طريق الاتصال الجنسي أو التلامس المباشر للمنطقة المصابة، والعامل المسبب له هو المستدمية الدوكرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002602.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "moraxella",
    "term_en": "Moraxella",
    "term_ar": "موراكسيلة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic bacteria occurring as rods (subgenus Moraxella) or cocci (subgenus Branhamella). Its organisms are parasitic on the mucous membranes of humans and other warm-blooded animals.",
    "arabic_definition": "الموراكسيلة (الاسم العلمي: Moraxella) هي جنس من البكتيريا يتبع الفصيلة الموراكسيلية من رتبة الزوافات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009016.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ehrlichia",
    "term_en": "Ehrlichia",
    "term_ar": "إيرليخية",
    "synonyms": [
      "Cowdria",
      "Ehrlichia ewingii"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Small, often pleomorphic, coccoid to ellipsoidal organisms occurring intracytoplasmically in circulating LYMPHOCYTES. They are the etiologic agents of tick-borne diseases of humans; DOGS; CATTLE; SHEEP; GOATS; and HORSES.",
    "arabic_definition": "الإيرْليخيَّة أو الإرْليخيَّة (الاسم العلمي: Ehrlichia) هي جنسٌ من البكتيريا الريكتسيَّة التي تنتقل إلى الفقاريات عبر القراد. تُسبب هذه البكتيريا داء إيرليخ، والذي يُعد مرضًا حيواني المنشأ؛ لأنَّ المضيف الرئيسي له هو الحيوانات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004536.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gonorrhea",
    "term_en": "Gonorrhea",
    "term_ar": "سيلان",
    "synonyms": [
      "Neisseria gonorrhoeae Infection",
      "سيلان (مرض)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute infectious disease characterized by primary invasion of the urogenital tract. The etiologic agent, NEISSERIA GONORRHOEAE, was isolated by Neisser in 1879.",
    "arabic_definition": "السيلان (اللاتينية: Gonorrhea) وهو المرض الذي يُشار إليه أحياناً باسم 'قرقعة' وهو عدوى شائعة تنتقل جنسيا وتسببها بكتيريا النيسرية البنية (وتسمى أيضا البكتريا المكورة، التي غالبا ما تختصر باسم \"GC\" من قبل الأطباء). في الولايات المتحدة، يأتي حدوثه في المركز الثاني بالنسبة للكلاميديا بين الأمراض الجرثومية المنقولة جنسيا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006069.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rotavirus",
    "term_en": "Rotavirus",
    "term_ar": "فيروس عجلي",
    "synonyms": [
      "Rotaviruses",
      "Neonatal Calf Diarrhea Virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of REOVIRIDAE, causing acute gastroenteritis in BIRDS and MAMMALS, including humans. Transmission is horizontal and by environmental contamination. Seven species (Rotaviruses A thru G) are recognized.",
    "arabic_definition": "الفيروس العجلي (الإنجليزية: Rotavirus) جنس من الفيروسات التي تنتمي إلى أسرة فيروسات جرمية. وقد حدد منها سبع مجموعات رئيسية، ثلاثة منها (المجموعات أ، ب، جـ) يُعدي البشر، تعتبر المجموعة (أ) المجموعة الأكثر شيوعا وانتشارا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012401.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tularemia",
    "term_en": "Tularemia",
    "term_ar": "تولاريميا",
    "synonyms": [
      "Tularemias",
      "Francisella tularensis Infection",
      "Francisella tularensis Infections",
      "Infection, Francisella tularensis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A plague-like disease of rodents, transmissible to man. It is caused by FRANCISELLA TULARENSIS and is characterized by fever, chills, headache, backache, and weakness.",
    "arabic_definition": "التولاريميا أو تولارمية هو داءٌ مُعْدٍ تسببه بكتيريا الفرنسيسيلة التولارية، اكتُشِف عام 1911 بين السناجب الأرضية. تشمل الأعراض الحمى وقرحة الجلد وتضخم الغدد الليمفاوية. (Tularemia)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014406.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhizobium",
    "term_en": "Rhizobium",
    "term_ar": "مستجذرة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic, rod-shaped bacteria that activate PLANT ROOT NODULATION in leguminous plants. Members of this genus are nitrogen-fixing and common soil inhabitants.",
    "arabic_definition": "المُسْتَجْذِرة (الاسم العلمي: Rhizobium) هي جنس من البكتيريا يتبع فصيلة المستجذرات من رتبة المستجذريات. تتواجد بشكل تعايشي مع نباتات الفصيلة البقولية وتقوم بتثبيت النيتروجين الجوي وتزويده للنبات مقابل الحصول على الكربوهيدرات كمصدر لبقائها ونشاطها.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012231.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "treponema",
    "term_en": "Treponema",
    "term_ar": "لولبية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of microorganisms of the order SPIROCHAETALES, many of which are pathogenic and parasitic for man and animals.",
    "arabic_definition": "اللولبية (الإنجليزية: Treponema) هي جنس بكتيري لولبي الشكل، وتُعتبر اللولبية الشاحبة من أنواع اللولبية الرئيسية في تسبيب الأمراض للإنسان مثل الزهري والبجل والداء العليقي، أما الزهري المستوطن فتُسببه اللولبية البقعية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014208.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "taeniasis",
    "term_en": "Taeniasis",
    "term_ar": "داء الشريطيات",
    "synonyms": [
      "Taeniases",
      "Infections, Taenia",
      "Infection, Taenia",
      "Taenia Infection",
      "Taenia Infections",
      "Taenia glomeratus Infection",
      "Infection, Taenia glomeratus",
      "Taenia glomeratus Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with tapeworms of the genus Taenia.",
    "arabic_definition": "داء الشريطيات(الإنجليزية: Taeniasis) هو من الاٍصابات الدودية المعدية وتسببه دودة من جنس الديدان الشريطية. كما تسببه شريطية الخنزير التي تعيش في أمعاء الإنسان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013622.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orbivirus",
    "term_en": "Orbivirus",
    "term_ar": "فيروس وقبي",
    "synonyms": [
      "Orbiviruses",
      "Chenuda Virus",
      "Kemerovo Virus",
      "Changuinola Virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of REOVIRIDAE infecting a wide range of arthropods and vertebrates including humans. It comprises at least 21 serological subgroups. Transmission is by vectors such as midges, mosquitoes, sandflies, and ticks.",
    "arabic_definition": "الفيروس الوقبي (الإنجليزية: Orbivirus) هو جنس من الفيروسات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018163.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spirillum",
    "term_en": "Spirillum",
    "term_ar": "حليزين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, curved and spiral-shaped bacteria found in stagnant, freshwater environments. These organisms are motile by bipolar tufts of flagella having a long wavelength and about one helical turn. Some species of Spirillum cause a form of RAT-BITE FEVER.",
    "arabic_definition": "الحُلَيْزِين (الاسم العلمي: Spirillum) هو جنس من الجراثيم سلبية الغرام من فصيلة الحليزنيات من رتبة وحيدات الخلية منتجة النيتريت من طائفة متقلبات بيتا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013139.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "torovirus",
    "term_en": "Torovirus",
    "term_ar": "فيروس تورو",
    "synonyms": [
      "Toroviruses",
      "Toroviridae",
      "Equine torovirus",
      "Equine toroviruses",
      "Berne Virus",
      "Bovine torovirus",
      "Bovine toroviruses",
      "Breda Virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family CORONAVIRIDAE characterized by enveloped, peplomer-bearing particles containing an elongated tubular nucleocapsid with helical symmetry. Toroviruses have been found in association with enteric infections in horses (Berne virus), cattle (Breda virus), swine, and humans. Transmission probably takes place via the fecal-oral route.",
    "arabic_definition": "فيروس تورو (الإنجليزية: Torovirus) هو جنس من فيروسات الرنا مفرد السلسلة موجبة الدلالة المغلفة ينتمي إلى عائلة التوبانفيريدات ورتبة الفيروسات العشية. ويصيب الفقاريات بشكل رئيسي وخاصة الأبقار والخنازير والخيول.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017003.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wolinella",
    "term_en": "Wolinella",
    "term_ar": "ولينية",
    "synonyms": [
      "Wolinella succinogenes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, anaerobic, rod-shaped bacteria isolated from the bovine RUMEN, the human gingival sulcus, and dental PULPITIS infections.",
    "arabic_definition": "ولينية (الإنجليزية: Wolinella) هي جنس من البكتيريا، سلبية الغرام، تتبع الملويات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016968.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wolbachia",
    "term_en": "Wolbachia",
    "term_ar": "ولبخية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of bacteria which comprises a heterogenous group of gram-negative small rods and coccoid forms associated with arthropods. (From Bergey's Manual of Systematic Bacteriology, vol 1, 1984)",
    "arabic_definition": "الولبخية هي جنس من البكتيريا تصيب مفصليات الأرجل وبضمنها نسبة عالية من الحشرات بالإضافة لبعض الديدان الأسطوانية. (Wolbachia)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020577.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "comamonas",
    "term_en": "Comamonas",
    "term_ar": "كوماموناسية",
    "synonyms": [
      "Comamonas terrigena"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, straight or slightly curved rods which are motile by polar flagella and which accumulate poly-beta-hydroxybutyrate within the cells.",
    "arabic_definition": "كوماموناسية (الاسم العلمي: Comamonas) هي جنس من البكتيريا، سلبية الغرام، تتبع الكوماموناسيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020585.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "norovirus",
    "term_en": "Norovirus",
    "term_ar": "نوروفيروس",
    "synonyms": [
      "Noroviruses",
      "Norwalk-like Viruses",
      "Small Round-Structured Viruses",
      "Round-Structured Viruses, Small"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus in the family CALICIVIRIDAE, associated with epidemic GASTROENTERITIS in humans. The type species, NORWALK VIRUS, contains multiple strains.",
    "arabic_definition": "نوروفيروس (الإنجليزية: Norovirus) هو جنس فيروسات يكون مجموعة متنوعة وراثيا من فيروسات الرنا أحادي السلسلة غير المغلفة ضمن عائلة الفيروسات الكأسية. يصيب الإنسان والأبقار والخنازير والفئران.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D029322.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sapovirus",
    "term_en": "Sapovirus",
    "term_ar": "فيروس سابو",
    "synonyms": [
      "Sapoviruses",
      "Sapporo-like Viruses",
      "Sapporo virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family CALICIVIRIDAE associated with worldwide sporadic outbreaks of GASTROENTERITIS in humans. The first recorded outbreak was in human infants in Sapporo, Japan in 1977. The genus is comprised of a single species, Sapporo virus, containing multiple strains.",
    "arabic_definition": "فيروس سابو هو جنس من الفيروسات ضمن عائلة فيروسات كاليسي حيث يعمل كل من الخنازير والبشر بمثابة مضيف طبيعي لهذه الفيروسات. ويوجد حالياً فصيلة واحدة من هذا الجنس وهي فيروس سابو. (Sapovirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D029341.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gels",
    "term_en": "Gels",
    "term_ar": "هلام",
    "synonyms": [
      "Gel"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Colloids with a solid continuous phase and liquid as the dispersed phase; gels may be unstable when, due to temperature or other cause, the solid phase liquefies; the resulting colloid is called a sol.",
    "arabic_definition": "الهلام (أو الجَلّ) هو مادة صلبة هلامية جيلاتينية تتراوح خصائصها من الطراوة والضعف إلى القساوة والمتانة. تعرف الهلاميات بأنها أنظمة متشابكة مخففة، لا تجري أو تسيل عندما تكون في حالة استقرار. (Gels)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005782.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "powders",
    "term_en": "Powders",
    "term_ar": "مسحوق",
    "synonyms": [
      "Powder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Substances made up of an aggregation of small particles, as that obtained by grinding or trituration of a solid drug. In pharmacy it is a form in which substances are administered. (From Dorland, 28th ed)",
    "arabic_definition": "المسْحُوقُ (الجمع: مَسَاحِيْق) أو الدُّقاق أو الدُّقَّة في الكيمياء، صفة للمادة الصلبة عندما توجد على شكل دقائق صَغيرة. المسحوق مادة جافة، ومعظمها صلبة تتألف من عدد كبير من الجسيمات الدقيقة جدا التي قد تتدفق بحرية عندما تهتز أو تكون مائلة. (Powders)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011208.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colloids",
    "term_en": "Colloids",
    "term_ar": "غرواني",
    "synonyms": [
      "Colloid",
      "Hydrocolloids",
      "Hydrocolloid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Two-phase systems in which one is uniformly dispersed in another as particles small enough so they cannot be filtered or will not settle out. The dispersing or continuous phase or medium envelops the particles of the discontinuous phase. All three states of matter can form colloids among each other.",
    "arabic_definition": "المادة الغروانية أو الغراوانيات هي مزيج منفصل طورياً بحيث أن إحدى المادتين ذات الجزيئات المبعثرة مجهرياً (سواء تذوب أم لا) تستعلق خلال مادة أخرى (مادة منتشرة أو موزعة بالتساوي عبر مادة أخرى على المستوى المجهري). يتكون النظام الغروي من وسطين أو طورين منفصلين: طور مبعثر (وهي الجزيئات المستعلقة) وطور مستمر (أو وسط الانتشار أو الاستعلاق) وقد يكون النظام الغروي صلب أو سائل أو غازي. (Colloids)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003102.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aerosols",
    "term_en": "Aerosols",
    "term_ar": "هباء جوي",
    "synonyms": [
      "Aerosol"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Colloids with a gaseous dispersing phase and either liquid (fog) or solid (smoke) dispersed phase; used in fumigation or in inhalation therapy; may contain propellant agents.",
    "arabic_definition": "الضَبُوب (الجمع ضبائب) أو الضبابة أو الهباء الجوي (الجمع: أهباء جوية) أو الصُّل الهوائي (الإنجليزية: Aerosols) جزيئات عالقة في الهواء، والإيروسول قد يقصد به أيضاً - خطأً - داسر بخاخات الهواء المضغوط. يحتوي الغلاف الجوي كميات ضخمة من ذرات الغبار الدقيقة جداً والتي تسمى ضبائب أو ذريرات مادية معلقة مكونة من مواد صلبة غير غازية عضوية ولا عضوية ومن العناصر المعدنية ومن قطيرات وخثرات حمضية وهيدروكاربونية ودخان من مختلف الأصناف والأحجام تقل أقطارها كثيراً عن 100 ميكرومتر (μm).",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000336.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "micelles",
    "term_en": "Micelles",
    "term_ar": "مذيلة",
    "synonyms": [
      "Micelle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Particles consisting of aggregates of molecules held loosely together by secondary bonds. The surface of micelles are usually comprised of amphiphatic compounds that are oriented in a way that minimizes the energy of interaction between the micelle and its environment. Liquids that contain large numbers of suspended micelles are referred to as EMULSIONS.",
    "arabic_definition": "المُذَيْلَة أو الفُتَيتَة أو الأيون الغروي (الإنجليزية: micelle) هي جسيم مكهرب من مادة شبه غروية. (Micelles)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008823.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pain-management",
    "term_en": "Pain Management",
    "term_ar": "إدارة الألم",
    "synonyms": [
      "Management, Pain",
      "Managements, Pain",
      "Pain Managements"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of therapy that employs a coordinated and interdisciplinary approach for easing the suffering and improving the quality of life of those experiencing pain.",
    "arabic_definition": "يشمل فريق إدارة الألم النموذجي ممارسين طبيين، وصيادلة، وعلماء نفس سريريين، ومعالجين نفسيين، ومعالجين مهنيين، ومساعدي أطباء، وممرضات. قد يضم الفريق أيضًا اختصاصيين آخرين في الصحة العقلية، ومعالجين بالتدليك. (Pain Management)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059408.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prodrugs",
    "term_en": "Prodrugs",
    "term_ar": "دواء أولي",
    "synonyms": [
      "Pro-Drug",
      "Drug Precursor",
      "Precursor, Drug",
      "Prodrug",
      "Drug Precursors",
      "Precursors, Drug",
      "Pro-Drugs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A compound that, on administration, must undergo chemical conversion by metabolic processes before becoming the pharmacologically active drug for which it is a prodrug.",
    "arabic_definition": "الدواء الأولي (الإنجليزية: Prodrug) هو دواء أو مركب يُستقلب بعد تناوله (أي يتحول داخل الجسم) إلى دواء فعال حيويًا. الأدوية الأولية غير النشطة هي أدوية غير نشطة حيويًا تُستقلب إلى شكل فعال داخل الجسم. (Prodrugs)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011355.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "emulsions",
    "term_en": "Emulsions",
    "term_ar": "مستحلب",
    "synonyms": [
      "Emulsion"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Colloids formed by the combination of two immiscible liquids such as oil and water. Lipid-in-water emulsions are usually liquid, like milk or lotion. Water-in-lipid emulsions tend to be creams. The formation of emulsions may be aided by amphiphatic molecules that surround one component of the system to form MICELLES.",
    "arabic_definition": "المستحلب هو خليط من مادتين سائلتين أو أكثر عادةً ما يتعذر مزجهم، مثل الدهون والماء. المستحلبات جزء من فئة عامة من نظام الطورين للمادة يسمى بالغروانيات. (Emulsions)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004655.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "liposomes",
    "term_en": "Liposomes",
    "term_ar": "جسيم شحمي",
    "synonyms": [
      "Liposome",
      "Niosomes",
      "Niosome",
      "Transferosomes",
      "Transferosome",
      "Liposomes, Ultra-deformable",
      "Liposome, Ultra-deformable",
      "Ultra-deformable Liposome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Artificial, single or multilaminar vesicles (made from lecithins or other lipids) that are used for the delivery of a variety of biological molecules or molecular complexes to cells, for example, drug delivery and gene transfer. They are also used to study membranes and membrane proteins.",
    "arabic_definition": "الجسيم الشحمي أو الجسيم اللبيدي (الإنجليزية: Liposome) هي حويصلات كروية تملك على الأقل طبقة لبيدية مزدوجة واحدة. يمكن استخدام الجسيم الشحمي كمركبة لإدارة المغذيات والأدوية الصيدلية. (Liposomes)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008081.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ointments",
    "term_en": "Ointments",
    "term_ar": "دواء موضعي",
    "synonyms": [
      "Ointment",
      "Salve",
      "Salves",
      "Unguents",
      "Unguent",
      "Pastes",
      "Paste",
      "Skin Ointment"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Semisolid preparations used topically for protective emollient effects or as a vehicle for local administration of medications. Ointment bases are various mixtures of fats, waxes, animal and plant oils and solid and liquid hydrocarbons.",
    "arabic_definition": "الدواء الموضعي هو الدواء الذي يتم وضعه على الجلد أو الأغشية المخاطية لعلاج الأمراض باستخدام مجموعة واسعة من المواد التي تتضمن الكريمات، والمواد الرغوية، والمواد الهلامية، والمستحضرات، والمراهم. الأدوية الموضعية تختلف عن العديد من الأنواع الأخرى من الأدوية لأن سوء استخدامها يمكن أن يؤدي إلى بعض الآثار الجانبية على المريض أو المعالج. (Ointments)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009824.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "liniments",
    "term_en": "Liniments",
    "term_ar": "مروخ",
    "synonyms": [
      "Liniment"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Heat-generating liquids that are thinner than ointments and are applied to the skin with friction. (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "مروخ (الإنجليزية: Liniment) ويعرف أيضًا باسم مرهم دواء موضعي يستخدم على الجلد وهو ذو قوام لزج، ويكون قوامه بالعادة شبيه أو أكثر لزوجه من المستحضرات التي يتم فركها على الجلد مثل: الزيوت والكريمات، ويتوافر بعدة أشكال كاللاصقات وفي الأنابيب أو على شكل بخاخ. يُباع المروخ في العادة لتخفيف أعراض الألم والتصلب مثل تلك التي تصيب العضلات والتوائها أو التهاب المفاصل. (Liniments)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008038.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "virosomes",
    "term_en": "Virosomes",
    "term_ar": "فيروسوم",
    "synonyms": [
      "Virosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Semi-synthetic complex derived from nucleic-acid free viral particles. They are essentially reconstituted viral coats, where the infectious nucleocapsid is replaced by a compound of choice. Virosomes retain their fusogenic activity and thus deliver the incorporated compound (antigens, drugs, genes) inside the target cell. They can be used for vaccines (VACCINES, VIROSOME), drug delivery, or gene transfer.",
    "arabic_definition": "الفيروسوم هو آلية تستخدم لإيصال الدواء أو اللقاح، يتألف من حويصل ذي غشاء فوسفولبيدي أحادي أو ثنائي الطبقة، يحتوي على بروتينات فيروسية تسمح للفيرسومات بالاندماج مع الخلايا الهدف. الفيروسات عوامل ممرضة قادرة على التضاعف ضمن العضوية المضيفة، أما الفيرسومات فهي غير قادرة على التضاعف. (Virosomes)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D022701.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "suspensions",
    "term_en": "Suspensions",
    "term_ar": "مستعلق",
    "synonyms": [
      "Suspension",
      "Suspension (chemistry)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Colloids with liquid continuous phase and solid dispersed phase; the term is used loosely also for solid-in-gas (AEROSOLS) and other colloidal systems; water-insoluble drugs may be given as suspensions.",
    "arabic_definition": "المستعلق في الكيمياء هو خليط غير متجانس يحتوي على مادة صلبة غير ذائبة وإنما معلقة في السائل. أي أننا في حالة طور غير متجانس. (Suspensions)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013535.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xenobiotics",
    "term_en": "Xenobiotics",
    "term_ar": "غريب حيوي",
    "synonyms": [
      "Xenobiotic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chemical substances that are foreign to the biological system. They include naturally occurring compounds, drugs, environmental agents, carcinogens, insecticides, etc.",
    "arabic_definition": "الغريب الحيوي أو الدخيل الحيوي أو مواد دخيلة على المواد الحيوية هي المادة الكيميائية التي توجد في الكائن الحي ولكنّها لا تنتج عادةً أو يتوقّع أن تكون موجودة فيه. يمكنها أيضاً أن تغطّي المواد التي توجد في تراكيز أعلى بكثير من المعتاد. (Xenobiotics)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015262.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anesthesia",
    "term_en": "Anesthesia",
    "term_ar": "تخدير",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A state characterized by loss of feeling or sensation. This depression of nerve function is usually the result of pharmacologic action and is induced to allow performance of surgery or other painful procedures.",
    "arabic_definition": "التخدير هي عملية استخدام الأدوية القادرة على محاصرة الإحساس بالألم بصورة أساسية، وبعض الاحاسيس الأخرى في مجال الطب (خاصة الجراحة، وطب الأسنان). ويشمل: المسكنات (التي تخفف، أو تمنع الألم)، والشلل المؤقت لعضلات الجسم (ارتخاء العضلات)، وفقدان الذاكرة، وفقدان الوعي المؤقت. (Anesthesia)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000758.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "suppositories",
    "term_en": "Suppositories",
    "term_ar": "تحميلة",
    "synonyms": [
      "Vaginal Suppositories",
      "Suppositories, Vaginal",
      "Vaginal Suppository",
      "Suppository, Vaginal",
      "Rectal Suppositories",
      "Suppositories, Rectal",
      "Suppository",
      "تحميلة (دواء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Medicated dosage forms that are designed to be inserted into the rectal, vaginal, or urethral orifice of the body for absorption. Generally, the active ingredients are packaged in dosage forms containing fatty bases such as cocoa butter, hydrogenated oil, or glycerogelatin that are solid at room temperature but melt or dissolve at body temperature.",
    "arabic_definition": "التحاميل هي إحدى أشكال إعطاء العلاج للمريض التي تشمل إضافة لها: الإعطاء الفموي والإعطاء عبر الإستنشاق، تستخدم هذه الطريقة من العلاج عندما يصبح العلاج بالطرق الأخرى غير ممكن كما في حالات التخدير والتقيؤ أو للأطفال الذين تمنع حركتهم المستمرة اعطاء العلاج بالطرق الأخرى. التحميلة هي شكل صلب أو شبه صلب من الدواء يستخدم للإدخال في فتحات الجسم حيث تنصهر أو تتلين أو تذوب و تمارس تأثيرات موضعية أو تأثيرات جهازية. (Suppositories)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013488.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "audioanalgesia",
    "term_en": "Audioanalgesia",
    "term_ar": "تسكين سمعي",
    "synonyms": [
      "Audioanalgesias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Method of pain control in which auditory stimulation including music, white noise, and environmental sounds are used.",
    "arabic_definition": "التسكين السمعي أو التسكين بالسماع (الإنجليزية: Audioanalgesia) هو تخفيف الألم باستخدام الضجيج الأبيض أو الموسيقى دون استخدام الأدوية أثناء القيام بإجراءات طبية مؤلمة مثل علاجات الأسنان. قدمها غادرنر وليكليدر لأول مرة في عام 1959.",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001297.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "silica-gel",
    "term_en": "Silica Gel",
    "term_ar": "هلام السيليكا",
    "synonyms": [
      "Gel, Silica",
      "Silochrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A non-crystalline form of silicon oxide that has absorptive properties. It is commonly used as a desiccating agent and as a stationary phase for CHROMATOGRAPHY. The fully hydrated form of silica gel has distinct properties and is referred to as SILICIC ACID.",
    "arabic_definition": "هلام السيليكا هي مادة حبيبية، لها بريق زجاجي، مسامية وهي شكل من أشكال ثاني أكسيد السيليكون تخلق اصطناعيا من سيليكات الصوديوم. هلام السيليكا صعب وقاسي. (Silica Gel)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058428.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polyadenylation",
    "term_en": "Polyadenylation",
    "term_ar": "تذييل بعديد الأدينيلات",
    "synonyms": [
      "Polyadenylations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The addition of a tail of polyadenylic acid (POLY A) to the 3' end of mRNA (RNA, MESSENGER). Polyadenylation involves recognizing the processing site signal, (AAUAAA), and cleaving of the mRNA to create a 3' OH terminal end to which poly A polymerase (POLYNUCLEOTIDE ADENYLYLTRANSFERASE) adds 60-200 adenylate residues. The 3' end processing of some messenger RNAs, such as histone mRNA, is carried out by a different process that does not include the addition of poly A as described here.",
    "arabic_definition": "التذييل بعديد الأدينيلات (الإنجليزية: Polyadenylation) هو إضافة ذيل عديد الأدينين (A) للنهاية 3' لرنا رسول غير ناضج أثناء عملية تعديل ما بعد النسخ. يتكون ذيل عديد الأدينين (A) من العديد من نوكليوتيدات الأدينوسين أحادي الفوسفات، بعبارة أخرى التذييل بعديد الأدينلات هو امتداد للرنا الرسول يحتوي على قواعد الأدينين فقط، وهو لدى حقيقيات النوى جزءٌ من عملية إنتاج رنا رسول ناضج ومنه جزء من العملية الأكبر: التعبير الجيني.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D026723.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "materia-medica",
    "term_en": "Materia Medica",
    "term_ar": "مواد طبية",
    "synonyms": [
      "Medica, Materia",
      "Homeopathic Remedies",
      "Remedies, Homeopathic",
      "Nosodes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Materials or substances used in the composition of traditional medical remedies. The use of this term in MeSH was formerly restricted to historical articles or those concerned with traditional medicine, but it can also refer to homeopathic remedies. Nosodes are specific types of homeopathic remedies prepared from causal agents or disease products.",
    "arabic_definition": "مواد طبية (الإنجليزية: Materia medica) هو مصطلح لاتيني من تاريخ الصيدلة لمجموعة المعرفة المجمّعة حول الخصائص العلاجية لأي مادة تستخدم للشفاء (مثل الأدوية). المصطلح مشتق من عنوان عمل الطبيب اليوناني القديم بيدانيوس ديوسقوريدس في القرن الأول الميلادي.",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008419.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystitis",
    "term_en": "Cystitis",
    "term_ar": "عدوى الجهاز البولي",
    "synonyms": [
      "Cystitides",
      "Urinary tract infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the URINARY BLADDER, either from bacterial or non-bacterial causes. Cystitis is usually associated with painful urination (dysuria), increased frequency, urgency, and suprapubic pain.",
    "arabic_definition": "عدوى الجهاز البولي (الإنجليزية: Urinary tract infection)، هي عدوى تُصيب جزءًا من المسالك البولية، التي تشمل المثانة والإحليل والكليتين. تُصيب عدوى الجهاز البولي السفلية المثانة (التهاب المثانة) أو الإحليل، بينما تُصيب عدوى الجهاز البولي العلوية الكلى (التهاب الحويضة والكلية). (Cystitis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003556.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "menarche",
    "term_en": "Menarche",
    "term_ar": "بدء الإحاضة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The first MENSTRUAL CYCLE marked by the initiation of MENSTRUATION.",
    "arabic_definition": "بَدْءُ الإِحاضَة (الإنجليزية: Menarche) الدورة الشهرية الأولى لدى الإناث، ويٌعد الحدث الأهم الذي يدل على بداية البلوغ وخصوبة الأنثى. يختلف سن بدء الإحاضة من منطقة إلى أخرى، يبدأ وسطياً في سن الثاني عشر.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008572.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polyuria",
    "term_en": "Polyuria",
    "term_ar": "بوال",
    "synonyms": [
      "Polyurias",
      "بوال (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Urination of a large volume of urine with an increase in urinary frequency, commonly seen in diabetes (DIABETES MELLITUS; DIABETES INSIPIDUS).",
    "arabic_definition": "البُوال (الإنجليزية: Polyuria) أو تعدد البيلات، وهي حالة تصف زيادة كمية البول المطروحة لأكثر من 2.5ليتر خلال 24 ساعة لدى البالغ.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011141.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enuresis",
    "term_en": "Enuresis",
    "term_ar": "سلس البول لدى الأطفال",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Involuntary discharge of URINE after expected age of completed development of urinary control. This can happen during the daytime (DIURNAL ENURESIS) while one is awake or during sleep (NOCTURNAL ENURESIS). Enuresis can be in children or in adults (as persistent primary enuresis and secondary adult-onset enuresis).",
    "arabic_definition": "في مرحلة الطفولة قد يمر الطفل بمشكلة أو عدة مشاكل تؤثر سلباً على حياته النفسية والاجتماعية، وتنعكس آثارها على المحيطين به من الوالدين والإخوة والأقران ومن ثَم وجب تحديد بعض هذه المشكلات التي تواجه الأسرة، والعمل من أجل التعامل معها بالأسلوب المناسب وإزالة المشكلة أو الحد من آثارها ومنها التبول اللاإرادي، وهو من المشاكل التي تسبب انزعاجاً وقلقاً للأطفال ولوالديهم خاصة بعد بلوغ الطفل سن الخامسة من عمره، ويترتب عليها مشكلات منها العزلة والخجل والخوف من الآخرين وقلة الثقة بالنفس والشعور بالنقص مما قد يؤثر على طفل صحياً ونفسياً. يُعرف التبول اللاإرادي على أنه الإفراغ المتكرر للبول في سرير أو ملابس بشكل لا إرادي، وهو نوعان: تبول ليلي يحدث أثناء نوم الطفل، وتبول نهاري يحدث أثناء يقظة الطفل، هناك من قسّم التبول إلى تبول أوّلي، وفيه لم يمر الطفل بفترة تحكم للبول بعد، وتبول ثانوي يكون الطفل قد تحكم في بوله فترة ثم حدث له نكوص بعد ذلك. (Enuresis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004775.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mastitis",
    "term_en": "Mastitis",
    "term_ar": "التهاب الثدي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the BREAST, or MAMMARY GLAND.",
    "arabic_definition": "الْتِهابُ الثَّديِ أو التهاب الضَّرع (بالإنجليزية: Mastitis) هو التهاب أنسجة الثدي عادةً بسبب العدوى. المكورات العنقودية الذهبية هي العامل المسبب الأكثر شيوعًا، ولكن قد تكون العنقودية البشروية والعقديات سببًا كذلك.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008413.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "uremia",
    "term_en": "Uremia",
    "term_ar": "يوريمية",
    "synonyms": [
      "Uremias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clinical syndrome associated with the retention of renal waste products or uremic toxins in the blood. It is usually the result of RENAL INSUFFICIENCY. Most uremic toxins are end products of protein or nitrogen CATABOLISM, such as UREA or CREATININE. Severe uremia can lead to multiple organ dysfunctions with a constellation of symptoms.",
    "arabic_definition": "اليوريميا أو اليوريمية أو بولينا أو تبولن الدم أو يوريمية هي حالة وجود مستويات عالية من اليوريا في الدم. واليوريا هي واحدة من المكونات الأساسية للبول، ويمكن تعريفها بأنها فائض المنتجات النهائية لأيض الحمض الأميني والبروتين في الدم، والذي يفرز عادة في البول. (Uremia)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014511.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "designer-drugs",
    "term_en": "Designer Drugs",
    "term_ar": "مخدرات مصممة",
    "synonyms": [
      "Drugs, Designer",
      "Customized Drugs",
      "Drugs, Customized",
      "Designer Drug",
      "Drug, Designer",
      "Customized Drug",
      "Drug, Customized"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs designed and synthesized, often for illegal street use, by modification of existing drug structures (e.g., amphetamines). Of special interest are MPTP (a reverse ester of meperidine), MDA (3,4-methylenedioxyamphetamine), and MDMA (3,4-methylenedioxymethamphetamine). Many drugs act on the aminergic system, the physiologically active biogenic amines.",
    "arabic_definition": "المخدرات المصممة هي نظائر هيكلية أو وظيفية للمواد المخدرة الخاضعة للرقابة، صُممت لمحاكاة التأثيرات الفارماكولوجية للمخدر الأصلي، مع تجنب تصنيفها مخدرات غير قانونية و/أو اكتشافها في اختبارات المخدرات القياسية. تشمل المخدرات المصممة المواد النفسية النشطة التي حددها الاتحاد الأوروبي وأستراليا ونيوزيلندا بوصفها مواد نفسية نشطة جديدة(NPS) ، إضافةً إلى نظائر للمخدرات المحسنة للأداء مثل الستيرويدات المصممة. (Designer Drugs)",
    "specialty": "Clinical Terminology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015198.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oliguria",
    "term_en": "Oliguria",
    "term_ar": "قلة البول",
    "synonyms": [
      "Oligurias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Decreased URINE output that is below the normal range. Oliguria can be defined as urine output of less than or equal to 0.5 or 1 ml/kg/hr depending on the age.",
    "arabic_definition": "قلة البول (الإنجليزية: Oliguria) أو نقص البول (الإنجليزية: Hypouresis) هي حالة مرضية يُلاحظ فيها انخفاض إنتاج البول، بحيث يتراوح حجم البول المطروح من 80 ملليلتراً يومياً إلى 400 ملليلتراً يومياً. يُعد انخفاض إنتاج البول علامة على حالات مرضية متعددة، منها: الجفاف، الفشل الكلوي، صدمة نقص حجم الدم، حالة فرط الأسمولية المرتطبة بفرط سكر الدم، متلازمة الاختلال العضوي المتعدد، الانسداد البولي/احتباس البول، الحماض الكيتوني السكري، مقدمات الارتعاج، وعدوى الجهاز البولي، بالإضافة إلى حالات أخرى.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009846.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyelonephritis",
    "term_en": "Pyelonephritis",
    "term_ar": "التهاب الحويضة والكلية",
    "synonyms": [
      "Pyelonephritides",
      "Pyelonephritis, Acute Necrotizing",
      "Necrotizing Pyelonephritis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the KIDNEY involving the renal parenchyma (the NEPHRONS); KIDNEY PELVIS; and KIDNEY CALICES. It is characterized by ABDOMINAL PAIN; FEVER; NAUSEA; VOMITING; and occasionally DIARRHEA.",
    "arabic_definition": "التهاب الحويضة والكلية (الإنجليزية: Pyelonephritis) هي التهاب إنتاني في المسالك البولية العلوية. أهم أعراضه الحمى والعرواءات وألم شديد في الخاصرة ورج قطني إيجابي مع ارتفاع الكريات البيض في البول ويفيد الإيكو في تأكيد التشخيص.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011704.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dystocia",
    "term_en": "Dystocia",
    "term_ar": "عسر الولادة",
    "synonyms": [
      "Dystocias",
      "Obstructed labour"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Slow or difficult OBSTETRIC LABOR or CHILDBIRTH.",
    "arabic_definition": "عُسر الوِلادة (بالإنجليزية:Dystocia) هِيَ الوِلادة غير الطبيعية، وَقد تَكون مرضية في أَي مَرحلة من مَراحِلها، وَيُعرف أيضاً باسم الولادة المتعسرة وهيَ الحالة التي لا يخرج فيها الجنين من الحوض بالرغم من انقباض الرحم بشكل طبيعي أثناء عملية الولادة; بسبب انسدادها جسديا. تشمل مضاعفات عسر الولادة بالنسبة للطفل عدم حصول الطفل على ما يكفي من الأوكسجين مما قد يؤدي إلى موت الجنين، كما أن عسر الولادة يزيد من خطر حدوث عدوى لدى الأم، بالإضافة إلى تمزق الرحم، ونزيف ما بعد الولادة.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004420.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "estrous-cycle",
    "term_en": "Estrous Cycle",
    "term_ar": "دورة وداقية",
    "synonyms": [
      "Cycle, Estrous",
      "Cycles, Estrous",
      "Estrous Cycles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The period of cyclic physiological and behavior changes in non-primate female mammals that exhibit ESTRUS. The estrous cycle generally consists of 4 or 5 distinct periods corresponding to the endocrine status (PROESTRUS; ESTRUS; METESTRUS; DIESTRUS; and ANESTRUS).",
    "arabic_definition": "دورة وداقية أو دورة ودقة أو دورة ودوق هي فترة هياج جنسي تعتري الإناث من الثدييات. وفي هذه الفترة تكون الأنثى جاهزة لعملية الجماع والتزاوج مع الذكر. (Estrous Cycle)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D030762.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vulvitis",
    "term_en": "Vulvitis",
    "term_ar": "التهاب الفرج",
    "synonyms": [
      "Vulvitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the VULVA. It is characterized by PRURITUS and painful urination.",
    "arabic_definition": "التهاب الفرج (الإنجليزية: Vulvitis) هو التهاب الجهاز التناسلي الخارجي للإناث (الأشفار، البظر ومدخل المهبل). قد يكون الالتهاب ناجما عن عدد من الاصابات المختلفة لأن الفرج يصاب بالالتهاب في كثير من الأحيان عند وجود التهاب في المهبل، ويشار في بعض الأحيان إلى التهاب المهبل بالتهاب المهبل والفرج.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014847.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anuria",
    "term_en": "Anuria",
    "term_ar": "انقطاع البول",
    "synonyms": [
      "Anurias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Absence of urine formation. It is usually associated with complete bilateral ureteral (URETER) obstruction, complete lower urinary tract obstruction, or unilateral ureteral obstruction when a solitary kidney is present.",
    "arabic_definition": "انقطاع البول أو الزرام أو انحباس البول أو توقف الإفراغ البولي هو عدم مرور البول، أو مرور أقل من 100 ملليلتر من البول في اليوم؛ و هو ناتج عن فشل في وظائف الكلى، أو انسداد المجرى البولي بواسطة ورم أو حصوات كلوية، و قد يحدث في المراحل الأخيرة من مرض الكلى المزمن. (Anuria)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001002.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyuria",
    "term_en": "Pyuria",
    "term_ar": "بيلة قيحية",
    "synonyms": [
      "Pyurias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of white blood cells (LEUKOCYTES) in the urine. It is often associated with bacterial infections of the urinary tract. Pyuria without BACTERIURIA can be caused by TUBERCULOSIS, stones, or cancer.",
    "arabic_definition": "في الطب، بيلة قيحية / paɪjʊəriːə / هي حالة البول الذي يحتوي على صديد. يعرف بأنه وجود 6-10 أو أكثر من الكريات البيض في ساحة مكبرة بالمجهر الضوئي وتكون العينة مأخوذة من منتصف التبول. (Pyuria)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011776.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "puberty",
    "term_en": "Puberty",
    "term_ar": "بلوغ (إنسان)",
    "synonyms": [
      "Puberties"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A period in the human life in which the development of the hypothalamic-pituitary-gonadal system takes place and reaches full maturity. The onset of synchronized endocrine events in puberty lead to the capacity for reproduction (FERTILITY), development of secondary SEX CHARACTERISTICS, and other changes seen in ADOLESCENT DEVELOPMENT.",
    "arabic_definition": "البلوغ هو مجموعة من التغيرات الجسدية ينضج فيها جسم الطفل ليصبح بالغاً قادراً على التكاثر الجنسي. تبدأ هذه العملية بفعل إشارات هرمونية من الدماغ إلى الغدد التناسلية، وهي الخصيتان في الذكر والمبيض في الأنثى. (Puberty)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011627.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "turner-syndrome",
    "term_en": "Turner Syndrome",
    "term_ar": "متلازمة تيرنر",
    "synonyms": [
      "Turner's Syndrome",
      "Turners Syndrome",
      "Ullrich-Turner Syndrome",
      "Syndrome, Ullrich-Turner",
      "Bonnevie-Ullrich Syndrome",
      "Status Bonnevie-Ullrich",
      "Gonadal Dysgenesis, 45,X"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome of defective gonadal development in phenotypic females associated with the karyotype 45,X (or 45,XO). Patients generally are of short stature with undifferentiated GONADS (streak gonads), SEXUAL INFANTILISM, HYPOGONADISM, webbing of the neck, cubitus valgus, elevated GONADOTROPINS, decreased ESTRADIOL level in blood, and CONGENITAL HEART DEFECTS. NOONAN SYNDROME (also called Pseudo-Turner Syndrome and Male Turner Syndrome) resembles this disorder; however, it occurs in males and females with a normal karyotype and is inherited as an autosomal dominant.",
    "arabic_definition": "متلازمة تيرنر (الإنجليزية: Turner syndrome) هي متلازمة توجد في الإناث الذين يمتلكون نسخة واحدة فقط من الصبغ (خ)(الإنجليزية: X chromosome) في خلاياهم. متلازمةُ تيرنر هي اضطرابٌ يؤثِّر في تطوُّر الفتيات؛ والسببُ هو نقص الصبغي X أو انعدامه عند الإناث.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014424.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "menstrual-cycle",
    "term_en": "Menstrual Cycle",
    "term_ar": "دورة شهرية",
    "synonyms": [
      "Cycle, Menstrual",
      "Cycles, Menstrual",
      "Menstrual Cycles",
      "Endometrial Cycle",
      "Cycle, Endometrial",
      "Cycles, Endometrial",
      "Endometrial Cycles",
      "Ovarian Cycle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The period from onset of one menstrual bleeding (MENSTRUATION) to the next in an ovulating woman or female primate. The menstrual cycle is regulated by endocrine interactions of the HYPOTHALAMUS; the PITUITARY GLAND; the ovaries; and the genital tract. The menstrual cycle is divided by OVULATION into two phases. Based on the endocrine status of the OVARY, there is a FOLLICULAR PHASE and a LUTEAL PHASE. Based on the response in the ENDOMETRIUM, the menstrual cycle is divided into a proliferative and a secretory phase.",
    "arabic_definition": "الدَّورَةُ الشَّهرِيَّةُ هي سلسلَةٌ من التغيُّرات الطبيعيَّة التي تُصيبُ عملية إِنتاج الهُرموناتِ، وبنية الرَّحم، والمَبِيضِ في الجهازِ التَّنَاسُليِّ الأنثَويِّ؛ لِتهيئة الرَّحِم للحمل المُحتمل. تتحكّم دورة المبيضِ في إنتاج البويضات، وإطلاقها، والإطلاق الدوري للإستروجين والبروجستيرون. (Menstrual Cycle)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008597.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "premature-birth",
    "term_en": "Premature Birth",
    "term_ar": "ولادة مبكرة",
    "synonyms": [
      "Birth, Premature",
      "Births, Premature",
      "Premature Births",
      "Preterm Birth",
      "Birth, Preterm",
      "Births, Preterm",
      "Preterm Births"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "CHILDBIRTH before 37 weeks of PREGNANCY (259 days from the first day of the mother's last menstrual period, or 245 days after FERTILIZATION).",
    "arabic_definition": "الولادة المبكرة والمعروفة أيضًا باسم الولادة المبتسرة (الإنجليزية: preterm birth) هي ولادة طفل في عمر حملي أقل من 37 أسبوعًا. ويُعرف هؤلاء الأطفال بالمبتسرين أو الخُدّج (المفرد: خَديج). (Premature Birth)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D047928.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hellp-syndrome",
    "term_en": "HELLP Syndrome",
    "term_ar": "متلازمة هيلب",
    "synonyms": [
      "Syndrome, HELLP",
      "Hemolysis, Elevated Liver Enzymes, Lowered Platelets"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome of HEMOLYSIS, elevated liver ENZYMES, and low blood platelets count (THROMBOCYTOPENIA). HELLP syndrome is observed in PREGNANT PEOPLE with PRE-ECLAMPSIA or ECLAMPSIA who also exhibit LIVER damage and abnormalities in BLOOD COAGULATION.",
    "arabic_definition": "متلازمة هيلب (الإنجليزية: HELLP syndrome) هي أحد مضاعفات الحمل، تعد نوعاً من تسمم الحمل أو أحد مضاعفاته، تحدث في المراحل الأخيرة من الحمل أو بعد الولادة، وتشمل:",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017359.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gestational-age",
    "term_en": "Gestational Age",
    "term_ar": "عمر حملي",
    "synonyms": [
      "Age, Gestational",
      "Ages, Gestational",
      "Gestational Ages",
      "Embryologic Age",
      "Age, Embryologic",
      "Ages, Embryologic",
      "Embryologic Ages",
      "Chronologic Fetal Maturity"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The age of the conceptus, beginning from the time of FERTILIZATION. In clinical obstetrics, the gestational age is often estimated from the onset of the last MENSTRUATION which is about 2 weeks before OVULATION and fertilization. It is also estimated to begin from fertilization, estrus, coitus, or artificial insemination.",
    "arabic_definition": "العمر الحملي (الإنجليزية: Gestational age) هو مقياس لعمر حمل مركزه آخر دورة شهرية طبيعية أو حساب العمر بحسب ما مقدر بحسب الطريقة، كما في حالة إضافة 14 يوما بعد التخصيب (في حالة طفل الأنابيب) أو بواسطة تخطيط صدى التوليد. أكثر طريقة شائعة لتحديد العمر الحملي هو الاعتماد على آخر دورة شهرية قدر الإمكان، أما إذا لم يمكن الاعتماد عليها فيمكن الحساب منذ تاريخ التخصيب.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005865.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lupus-nephritis",
    "term_en": "Lupus Nephritis",
    "term_ar": "ذئبة التهاب الكلى",
    "synonyms": [
      "Glomerulonephritis, Lupus",
      "Glomerulonephritides, Lupus",
      "Lupus Glomerulonephritides",
      "Lupus Glomerulonephritis",
      "Nephritis, Lupus",
      "Lupus Nephritides",
      "Nephritides, Lupus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Glomerulonephritis associated with autoimmune disease SYSTEMIC LUPUS ERYTHEMATOSUS. Lupus nephritis is histologically classified into 6 classes: class I - normal glomeruli, class II - pure mesangial alterations, class III - focal segmental glomerulonephritis, class IV - diffuse glomerulonephritis, class V - diffuse membranous glomerulonephritis, and class VI - advanced sclerosing glomerulonephritis (The World Health Organization classification 1982).",
    "arabic_definition": "ذئبة التهاب الكلى أو التهاب الكلية الذئبي(Lupus nephritis) هو التهاب في الكلية بسبب الذئبة الحُمامية المجموعية (Systemic lupus erythematosus, SLE)، وهو مرض في الجهاز المناعيّ. على خلاف ضرر الكلية، من الممكن أن يسبب هذا المرض ضرراً للجلد والمفاصل والجهاز العصبي، وبدرجة أقل، أي عضو أو جهاز آخر في الجسم.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008181.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydrops-fetalis",
    "term_en": "Hydrops Fetalis",
    "term_ar": "استسقاء جنيني",
    "synonyms": [
      "Fetal Hydrops",
      "Hydrops, Fetal",
      "Edema, Fetal",
      "Fetal Edema",
      "Immune Hydrops Fetalis",
      "Hydrops Fetalis, Immune",
      "Hydrops Fetalis, Non-Immune",
      "Non-Immune Hydrops Fetalis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal accumulation of serous fluid in two or more fetal compartments, such as SKIN; PLEURA; PERICARDIUM; PLACENTA; PERITONEUM; AMNIOTIC FLUID. General fetal EDEMA may be of non-immunologic origin, or of immunologic origin as in the case of ERYTHROBLASTOSIS FETALIS.",
    "arabic_definition": "الاستسقاء الجنيني أو موه الجنين أو الخزب الجنيني (الإنجليزية: Hydrops fetalis) هو التجمع المفرط للسوائل ضمن الأنسجة الرخوة للجنين (وذمة نسيجية) وأجواف جسمه (انصبابات). وهو يختلف عن الموه السلوي والذي هو زيادة تجمع سائل السلى حول الجنين (بداخل الكيس السلوي).",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015160.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urethritis",
    "term_en": "Urethritis",
    "term_ar": "التهاب الإحليل",
    "synonyms": [
      "Urethritides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation involving the URETHRA. Similar to CYSTITIS, clinical symptoms range from vague discomfort to painful urination (DYSURIA), urethral discharge, or both.",
    "arabic_definition": "التهاب الإحليل (الإنجليزية: Urethritis) هو الالتهاب الذي يصيب الإحليل والعرض الرئيسي له هو عسر التبول وهو تبول مؤلم أو صعب.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014526.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vulvodynia",
    "term_en": "Vulvodynia",
    "term_ar": "ألم الفرج",
    "synonyms": [
      "Vestibulodynia",
      "Generalized Vulvodynia",
      "Vulvodynia, Generalized",
      "Vulva Pain",
      "Pain, Vulva"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Complex pain syndrome with unknown etiology, characterized by constant or intermittent generalized vulva pain (Generalized vulvodynia) or localized burning sensations in the VESTIBULE area when pressure is applied (Vestibulodynia, or Vulvar Vestibulitis Syndrome). Typically, vulvar tissue with vulvodynia appears normal without infection or skin disease. Vulvodynia impacts negatively on a woman's quality of life as it interferes with sexual and daily activities.",
    "arabic_definition": "ألم الفرج (الإنجليزية: Vulvodynia) هو متلازمةٌ من الألم المزمن والتي تُصيب منطقة الفرج، وتحدث دون سببٍ واضح. تتضمن أعراضهُ شعورٌ بالحرق أو التهيج.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056650.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oviposition",
    "term_en": "Oviposition",
    "term_ar": "مسرأ",
    "synonyms": [
      "Ovipositions",
      "Larviposition",
      "Larvipositions",
      "Ovipositor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of laying or shedding fully developed eggs (OVA) from the female body. The term is usually used for certain INSECTS or FISHES with an organ called ovipositor where eggs are stored or deposited before expulsion from the body.",
    "arabic_definition": "المَسْرَأ أو أنبوب وضع البيض هو مُوْضِعُ البَيْض عند إناث الحشرات، كما تعرف بآلة وضع البيض. يختلف شكلها حسب طريقة وضع البيض عند كل حشرة. (Oviposition)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010058.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "menopause",
    "term_en": "Menopause",
    "term_ar": "سن اليأس",
    "synonyms": [
      "Change of Life, Female"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The last menstrual period. Permanent cessation of menses (MENSTRUATION) is usually defined after 6 to 12 months of AMENORRHEA in a woman over 45 years of age. In the United States, menopause generally occurs in women between 48 and 55 years of age.",
    "arabic_definition": "الإياس أو انقطاع الطمث أو سن اليأس (الإنجليزية: Menopause) هو انقطاع دائم للخصوبة الإنجابية لدى النساء قبل نهاية العمر الطبيعي بقليل. وهذا المصطلح كان يستخدم في الأصل لوصف التغييرات التناسلية في إناث البشر، حيث تنتهي الخصوبة تقليديًا ويدل عليها الانقطاع الدائم في الحيض، أو الطمث.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008593.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "azotemia",
    "term_en": "Azotemia",
    "term_ar": "تنترج الدم",
    "synonyms": [
      "Azotaemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A biochemical abnormality referring to an elevation of BLOOD UREA NITROGEN and CREATININE. Azotemia can be produced by KIDNEY DISEASES or other extrarenal disorders. When azotemia becomes associated with a constellation of clinical signs, it is termed UREMIA.",
    "arabic_definition": "الأزوتيمية أو الآزوتيميا أو تنترج الدم (الإنجليزية: Azotemia) هي حالة طبية تتميز بوجود معدلات عالية من مركبات النيتروجين مثل اليوريا والكرياتينين والمركبات الأخرى الغنية بالنيتروجين في الدم.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053099.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "albuminuria",
    "term_en": "Albuminuria",
    "term_ar": "بيلة الألبومين",
    "synonyms": [
      "Albuminurias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of albumin in the urine, an indicator of KIDNEY DISEASES.",
    "arabic_definition": "بيلة الألبومين (الإنجليزية: Albuminuria) هي حالة مرضية يتواجد فيها ألبومين المصل في البول وتعد نوع من البيلة البروتينية. تحدث بيلة الألبومين في المتلازمة الكلوية.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000419.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "apomixis",
    "term_en": "Apomixis",
    "term_ar": "تكاثر لاإخصابي",
    "synonyms": [
      "Male Apomixis",
      "Apomixis, Male"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Asexual reproduction resulting in the formation of viable seeds from FLOWERS without fertlization (i.e. use of POLLEN). Progeny plants produced from apomictic seeds are perfect clones of the parent.",
    "arabic_definition": "التكاثر اللاإخصابي أو التكاثر البكري أو التكاثر العذري أو لا خلطي أو تكاثر لاجنسي أو عذري التكاثر (الإنجليزية: Apomixis)، في علم النبات هو طريقة التكاثر البديلة عن التكاثر الجنسي في النباتات، وهي تكاثر لاجنسي، أو بعبارة أصح هي عبارة عن الطريقة أو الوسيلة التي تتكون بها الأجنة دون اندماج محتويات الخلايا الجنسية المذكرة و المؤنثة. وحالات التكاثر اللاإخصابي هذه شائعة الوجود في الكثير من النباتات.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060832.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parturition",
    "term_en": "Parturition",
    "term_ar": "ولادة",
    "synonyms": [
      "Parturitions",
      "Birth",
      "Births",
      "Childbirth",
      "Childbirths"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of giving birth to one or more offspring.",
    "arabic_definition": "الولادة هي عملية جلب الذُرية. تبدأ هذه العملية في الثدييات عن طريق الهرمونات التي تسبب انقباض عضلات جدار الرحم مخرجة الجنين في مرحلة من النمو أصبح فيها قابلًا للتغذية والتنفس. (Parturition)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D036801.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteinuria",
    "term_en": "Proteinuria",
    "term_ar": "بيلة بروتينية",
    "synonyms": [
      "Proteinurias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of proteins in the urine, an indicator of KIDNEY DISEASES.",
    "arabic_definition": "بيلة بروتينية(الإنجليزية: Proteinuria) وتسمى أيضًا بيلة البومينية (الإنجليزية: Albumin - uria) تعني وجود فائض من بروتينات الدم في البول. البروتين الزائدة في البول غالبا ما يتميز بشكل البول الرغوي، على الرغم من أن رغاوة البول يمكن أن يكون سببه البيلة البروتينية ولكن أيضًا يمكن أن يتشكل بسبب البيليروبين في البول (بيلة بيليروبينية)، القذف إلى الوراء، بيلة غازية التي تحدث بسبب ناسور، أو بسبب الأدوية مثل البيريديوم.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011507.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ovulation",
    "term_en": "Ovulation",
    "term_ar": "إباضة",
    "synonyms": [
      "Ovulations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The discharge of an OVUM from a rupturing follicle in the OVARY.",
    "arabic_definition": "الإباضة (الإنجليزية: Ovulation) أو التبويض هي مرحلة من مراحل الدورة الشهرية ويتم خلالها إنتاج وطرح البييضة من المبيض في الرحم، عبر القناة المبيضية، تتم هذه العملية في منتصف الدورة الشهرية ما بين طور جريبي وطور اصفري (عادةً ما بين اليوم العاشر والثامن عشر في دورة شهرية مدتها 28 يوماً) عندما يصل الهرمون الملوتن إلى قمة إنتاجه. يتحكم الوطاء في المخ في عملية الإباضة وذلك عن طريق التأثير على إفراز كل من الهرمون الملوتن وهرمون منبه للجريب من الفص الأمامي للغدة نخامية.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010060.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stillbirth",
    "term_en": "Stillbirth",
    "term_ar": "إملاص",
    "synonyms": [
      "Stillbirths"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The event that a FETUS is born dead or stillborn.",
    "arabic_definition": "إملاص أو ولادة الجَنين المَيِّت موت الجنين بعمر 20 أو 28 أسبوعًا حمليًا أو بعد هذين الأسبوعين، اعتمادًا على المصدر. يُولد الطفل دون علامات الحياة. (Stillbirth)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050497.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pollination",
    "term_en": "Pollination",
    "term_ar": "تأبير",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The transfer of POLLEN grains (male gametes) to the plant ovule (female gamete).",
    "arabic_definition": "التأبير أو التلقيح أو أنبوب التأبير (الإنجليزية: Pollination)، في عاريات البذور ومغطاة البذور، هو عملية انتقال حبوب اللقاح التي تحتوي على خلية عروسية مذكرة إلى خلية عروسية مؤنثة لتكوين بيضة مخصبة أو كائن حي جديد تابع لنفس النوع. ودراسة التلقيح هي جزء من دراسة علم النبات وعلم البيئة.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054817.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fertility",
    "term_en": "Fertility",
    "term_ar": "خصوبة",
    "synonyms": [
      "Fecundability",
      "Fecundity",
      "Fertility Incentives",
      "Fertility Incentive",
      "Marital Fertility",
      "Fertility, Marital",
      "Natural Fertility",
      "Fertility, Natural"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The capacity to conceive or to induce conception. It may refer to either the male or female.",
    "arabic_definition": "الخصوبة هي القدرة الطبيعية على إنتاج النسل. وكمقياس، فإن «نسبة الخصوبة» هي عدد الأطفال الذين ينجبهم كل زوج أو شخص أو السكان. (Fertility)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005298.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vaginismus",
    "term_en": "Vaginismus",
    "term_ar": "تشنج المهبل",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recurrent or persistent involuntary SPASM of the outer muscles of the VAGINA, occurring during vaginal penetration.",
    "arabic_definition": "العقد أو تشنج مهبلي هي حالة تؤثر في قدرة المرأة على اتمام الجماع بسبب حدوث تقلصات لا إرادية للعضلة الدائرية المحيطة بفتحة المهبل مما يتسبب في انغلاق فتحة المهبل وعدم قدرتها علي الاتساع اللازم لإتمام الإيلاج (Vaginismus)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052065.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eclampsia",
    "term_en": "Eclampsia",
    "term_ar": "إرجاج",
    "synonyms": [
      "Eclampsias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Onset of HYPERREFLEXIA; SEIZURES; or COMA in a previously diagnosed pre-eclamptic patient (PRE-ECLAMPSIA).",
    "arabic_definition": "الإرجاج أو الإكلمسية أو الشنج النفاسي ويسمى أحياناً تسمم الحمل هو بدء نوبات (اختلاجات) عند المرأة التي تعاني من حالة ما قبل الإرجاج أو ما قبل الشنج. ما قبل الإرجاج هو اضطراب في الحمل يتميز بارتفاع ضغط الدم وبوجود إما كميات كبيرة من البروتين في البول أو باختلال وظيفي في أعضاء أخرى. (Eclampsia)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004461.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dyspareunia",
    "term_en": "Dyspareunia",
    "term_ar": "عسر الجماع",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recurrent genital pain occurring during, before, or after SEXUAL INTERCOURSE in either the male or the female.",
    "arabic_definition": "عسر الجماع (الإنجليزية: Dyspareunia) صعوبة، أو ألم واضطرابات الجنسية التي يكون منشؤها في معظم الأحيان هو تشنج المهبل. الالتهابات المهبلية المعدية, ذات المنشأ الطفيلي أو الفطري مثل داء المبيضات، وداء المشعرات والمتدثرات، تسبب ألما عند المجامعة، ويكون هذا الألم مصحوباً بسيلان مهبلي مثير للحكة في معظم الأحيان، ولكنه سريع الشفاء عند معالجة أسبابه.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004414.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vaginitis",
    "term_en": "Vaginitis",
    "term_ar": "التهاب مهبلي",
    "synonyms": [
      "Vaginitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the vagina characterized by pain and a purulent discharge.",
    "arabic_definition": "التهاب المَهْبِل (الإنجليزية: Vaginitis) هو مصطلح يشير إلى أي التهاب أو إنتان يصيب المَهْبِل، يعتبر داء المبيضات (الذي هو مرض فطري) السبب الأشيع لالتهاب المهبل، تعتبر الحكة والتهيج والافرازات المهبلية أكثر الأعراض المشاهدة لدى المريضات المصابات بالتهاب المهبل.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014627.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypospadias",
    "term_en": "Hypospadias",
    "term_ar": "إحليل تحتي",
    "synonyms": [
      "Hypospadia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A birth defect due to malformation of the URETHRA in which the urethral opening is below its normal location. In the male, the malformed urethra generally opens on the ventral surface of the PENIS or on the PERINEUM. In the female, the malformed urethral opening is in the VAGINA.",
    "arabic_definition": "الإحليل التحتي هو عيب خلقي في مجرى البول عند الذكور يتضمن فتحات بولية غير طبيعية. بدلا من الفتحة في غيض من الحشفة من القضيب ومجرى البول hypospadic يفتح في أي مكان على طول خط (الإخدود الإحليلي) يمتد من الحافة على طول الجانب السفلي (الجانب البطني) من العمود إلى تقاطع القضيب والصفن أو العجان. (Hypospadias)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007021.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epispadias",
    "term_en": "Epispadias",
    "term_ar": "مبال فوقاني",
    "synonyms": [
      "Epispadia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A birth defect due to malformation of the URETHRA in which the urethral opening is above its normal location. In the male, the malformed urethra generally opens on the top or the side of the PENIS, but the urethra can also be open the entire length of the penis. In the female, the malformed urethral opening is often between the CLITORIS and the labia, or in the ABDOMEN.",
    "arabic_definition": "المَبال الفَوقاني (الإنجليزية: Epispadias) هو عيب خلقي في القضيب؛ إذ تكون فتحةُ الإحليل في القضيب من الأعلَى.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004842.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nephrosis",
    "term_en": "Nephrosis",
    "term_ar": "كلاء",
    "synonyms": [
      "Nephroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pathological processes of the KIDNEY without inflammatory or neoplastic components. Nephrosis may be a primary disorder or secondary complication of other diseases. It is characterized by the NEPHROTIC SYNDROME indicating the presence of PROTEINURIA and HYPOALBUMINEMIA with accompanying EDEMA.",
    "arabic_definition": "الكُلاء (الإنجليزية: Nephrosis) هو اعتلال كلوي غير التهابي. كما قد تسمى هذه الحالة بالمتلازمة الكلوية.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009401.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oogenesis",
    "term_en": "Oogenesis",
    "term_ar": "تكون البويضة",
    "synonyms": [
      "Oogeneses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of germ cell development in the female from the primordial germ cells through OOGONIA to the mature haploid ova (OVUM).",
    "arabic_definition": "تكون البويضة أو تكوين البويضة أو التبويض هو تخلق البويضة (الخلية البيضية). وهو النمط الأنثوي من عملية تكوين الجاميتات، والتي يعادلها في الذكر تكوين الحيوانات المنوية. (Oogenesis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009866.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hematuria",
    "term_en": "Hematuria",
    "term_ar": "بول دموي",
    "synonyms": [
      "Hematurias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Presence of blood in the urine.",
    "arabic_definition": "البيلة الدّموية أو البول الدموي أو هيماتوريا (الإنجليزية: hematuria) هو مصطلح طبي ويعني وجود دم (خلايا دم حمراء) في البول. يتراوح الأمر بين طبيعي إلى قاتل، فقد لا يكون ذلك معبراً عن حالة مرضية أو مرض مقلق وقد يكون علامة على وجود حصوة في الكلى أو التهاب في المسالك البولية (الكلى أو الحالبين أو البروستاتا أو المثانة البولية)، إذا تم العثور على كريات الدم البيضاء بالإضافة إلى الحمراء في البول فقد تكون إشارة على وجود عدوي التهاب المسالك البولية، في بعض الأحيان يتم استخدام مصطلح الإنجليزي (hemoglobinuria) كبديل عن (hematuria)، على الرغم من أنه يشير إلى وجود بروتين الهيموجلوبين في البول بتركيز عالٍ.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006417.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "menorrhagia",
    "term_en": "Menorrhagia",
    "term_ar": "غزارة الطمث",
    "synonyms": [
      "Heavy Periods",
      "Heavy Period",
      "Heavy Menstrual Bleeding",
      "Menstrual Bleeding, Heavy",
      "Hypermenorrhea"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive uterine bleeding during MENSTRUATION.",
    "arabic_definition": "غزارة الطمث هو نزيف شديد وغزير يمتد لفترة طويلة خلال فترة الدورة الشهرية ويصيب حوالي واحدة من كل ثلاث نساء، غالباً ما تكون مصحوبة بنوبات شديدة من الألم. عادة ما تحدث غزارة الطمث بعد سن الخامسة والثلاثين، وهي تؤدي إلى نقص في حديد الدم. (Menorrhagia)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008595.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anovulation",
    "term_en": "Anovulation",
    "term_ar": "انقطاع الإباضة",
    "synonyms": [
      "Anovulations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Suspension or cessation of OVULATION in animals or humans with follicle-containing ovaries (OVARIAN FOLLICLE). Depending on the etiology, OVULATION may be induced with appropriate therapy.",
    "arabic_definition": "انقطاع الإباضة أو انقطاع التبويض أو توقف الإباضة أو اللا إباضة (الإنجليزية: Anovulation) كلها مصطلحات تُشير لحالة تتوقف فيها المبايض عن إطلاق البويضات خلال دورة الطمث. ومن ثم فلا تحدث الإباضة أو التبويض.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000858.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adrenarche",
    "term_en": "Adrenarche",
    "term_ar": "عنفوان التكظر",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A stage of development at which the ADRENAL GLANDS undergo maturation leading to the capability of producing increasing amounts of adrenal androgens, DEHYDROEPIANDROSTERONE and ANDROSTENEDIONE. Adrenarche usually begins at about 7 or 8 years of age before the signs of PUBERTY and continues throughout puberty.",
    "arabic_definition": "عُنْفُوانُ التَّكَظُّر (الإنجليزية: Adrenarche) هي مرحلةٌ مبكرة من النضج الجنسي في بعض المقدمات العالية، وهذا يحدث عند البشر عادة بين 10و11 سنة من العمر.خلال هذه المرحلة، تفرز قشرة الغدة الكظرية مستويات عالية من الاندروجينات DHEA,DHEAS لكن دون زيادة مستويات الكورتيزون.عنفوان التكظر نتيحة لظهور طبقة جديدة في قشرة الغدة الكظرية تسمي الطبقة الشبكية.عملية عنفوان التكظر تتعلق بالنضوج، ولكنها تختلف عن النضج الوظيفي للغدة النخامية،والغدد التناسلية.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050499.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyometra",
    "term_en": "Pyometra",
    "term_ar": "التهاب الرحم القيحي",
    "synonyms": [
      "Pyometras"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An accumulation of PUS in the uterine cavity (UTERUS). Pyometra generally indicates the presence of infections.",
    "arabic_definition": "التهاب الرحم القيحي مرض في الرحم أكثر شيوعا بين الكلاب من الإناث، لكنه أيضا منتشر بين القطط الإناث، الأرانب، القوارض والفئران. يعتبر تقيح الرحم مرض خطير لذا وجبت التوعية أصحاب الكلاب لأنه مرض ذو طبيعة مفاجئة وعواقب مميتة إذا لم تتم معالجته. (Pyometra)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055112.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ureterocele",
    "term_en": "Ureterocele",
    "term_ar": "قيلة حالبية",
    "synonyms": [
      "Ureteroceles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cystic dilatation of the end of a URETER as it enters into the URINARY BLADDER. It is characterized by the ballooning of the ureteral orifice into the lumen of the bladder and may obstruct urine flow.",
    "arabic_definition": "القيلة الحالبية (بالإنجليزية: Ureterocele) هي عبارة عن خلل خِلقي يحدث في الحالب، حيث ينتفخ الجزء البعيد من الحالب عند موضع فتحته في المثانة، فيما يشبه الكيس. وغالبا ما ترتبط هذه الحالة مع تضاعف نظام الجمع، الذي يكون فيه حالبان مسئولان عن صرف الكلية الخاصة بهما بدلا من حالب واحد.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014518.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystinuria",
    "term_en": "Cystinuria",
    "term_ar": "بيلة سيستينية",
    "synonyms": [
      "Cystinurias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inherited disorder due to defective reabsorption of CYSTINE and other BASIC AMINO ACIDS by the PROXIMAL RENAL TUBULES. This form of aminoaciduria is characterized by the abnormally high urinary levels of cystine; LYSINE; ARGININE; and ORNITHINE. Mutations involve the amino acid transport protein gene SLC3A1.",
    "arabic_definition": "البيلة السيستينية (الإنجليزية: cystinuria) هي مرض وراثي مُتنحٍ يتميز بزيادة تركيز الحمض الأميني السيستين في البول مما يؤدي إلى تكوُّن حصوات السيستين في الكلية والحالب والمثانة. وهي إحدى أنواع البيلة الحمضمينية.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003555.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenomyosis",
    "term_en": "Adenomyosis",
    "term_ar": "عضال غدي رحمي",
    "synonyms": [
      "Adenomyoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The extension of endometrial tissue (ENDOMETRIUM) into the MYOMETRIUM. It usually occurs in women in their reproductive years and may result in a diffusely enlarged uterus with ectopic and benign endometrial glands and stroma.",
    "arabic_definition": "عُضال غُدّيّ رحميّ هو حالة طبية تتميّز بوجود أنسجة الغدية الرحمية منتبذة في الجدار العضلي للرحم. كان يُسمى سابقًا انتباذ بطاني رحمي داخلي، ولكن العضال الغذي الرحمي يختلف عن الانتباذ البطاني الرحمي وهذين المرضين يشكلان كيانين منفصلين، يتواجدان جنبًا إلى جنب في كثير من الحالات. (Adenomyosis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062788.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "andropause",
    "term_en": "Andropause",
    "term_ar": "قصور الغدد التناسلية متأخر البدء",
    "synonyms": [
      "Change of Life, Male",
      "Late-onset hypogonadism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An endocrine state in men, characterized by a significant decline in the production of TESTOSTERONE; DEHYDROEPIANDROSTERONE; and other hormones such as HUMAN GROWTH HORMONE. Andropause symptoms are related to the lack of androgens including DEPRESSION, sexual dysfunction, and OSTEOPOROSIS. Andropause may also result from hormonal ablation therapy for malignant diseases.",
    "arabic_definition": "قصور الغدد التناسلية متأخر البدء أو متلازمة نقص التستوستيرون هو حالة تصيب كبار السن من الرجال وتوصف بانخفاض مستويات هرمون التستوستيرون بشكل ملحوظ وظهور أعراض سريرية تكون غالباً ذات طبيعة جنسية، مثل: تناقص الرغبة في ممارسة الجنس، وقلة الإنتصاب التلقائي، وخلل وظيفي في الإنتصاب. هذه الحالة هي نتيجة لانخفاض تدريجي في هرمون التستوستيرون، حيث يمكن حدوث انخفاض مستمر في مستوياته بنسبة 1% سنويًا، وهذا الانخفاض موثق جيداً في كل من الرجال والنساء. (Andropause)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D047649.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glycosuria",
    "term_en": "Glycosuria",
    "term_ar": "بيلة سكرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The appearance of an abnormally large amount of GLUCOSE in the urine, such as more than 500 mg/day in adults. It can be due to HYPERGLYCEMIA or genetic defects in renal reabsorption (RENAL GLYCOSURIA).",
    "arabic_definition": "بيلة سُكرية أو بول سُكري أو بيلة غلوكوزية أو تَحَلوُن البَول (الإنجليزية: Glycosuria) أو (الإنجليزية: glucosuria) هوَ طَرح (إخراج) الجلوكوز في البول. عادةً لا يحتوي البول على جلوكوز؛ وذلك لأنَّ الكلى تعمل على إعادة امتصاص جميع الجلوكوز الذي تمت تصفيته في الوحدة الأنبوبية الكلوية إلى مجرى الدم، وغالباً ما تحدث البيلة السُكرية نتيجة ارتفاع مستوى سكر الدم بشكل غير طبيعي، والذي يحدث غالباً نتيجةً لِمرض السُكري غير المُعالج.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006029.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pregnancy",
    "term_en": "Pregnancy",
    "term_ar": "حمل المرأة",
    "synonyms": [
      "Pregnancies",
      "Gestation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The status during which female mammals carry their developing young (EMBRYOS or FETUSES) in utero before birth, beginning from FERTILIZATION to BIRTH.",
    "arabic_definition": "الحَمْل هو الوقت الذي يتطور فيه جنين واحد أو أكثر داخل رحم المرأة. يشمل الحمل المتعدد أكثر من جنين واحد، كما هو الحال مع التوائم. (Pregnancy)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011247.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystocele",
    "term_en": "Cystocele",
    "term_ar": "فتق مثاني",
    "synonyms": [
      "Fallen Urinary Bladder",
      "Urinary Bladder Prolapse",
      "Prolapse, Urinary Bladder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A HERNIA-like condition in which the weakened pelvic muscles cause the URINARY BLADDER to drop from its normal position. Fallen urinary bladder is more common in females with the bladder dropping into the VAGINA and less common in males with the bladder dropping into the SCROTUM.",
    "arabic_definition": "الفتق المثاني أو فتق المثانة أو العفل أو القيلة المثانية (الإنجليزية: Cystocele) حالة مرضية تحدث عند المرأة عندما تبدأ المثانة بالميلان نحو الخلف والضغط على الجدار الأمامي للمهبل. حيث ينحشر الجهاز التناسلي الأنثوي بين الجهازين البولي والمعوي.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052858.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leukorrhea",
    "term_en": "Leukorrhea",
    "term_ar": "ثر أبيض",
    "synonyms": [
      "Leukorrheas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clear or white discharge from the VAGINA, consisting mainly of MUCUS.",
    "arabic_definition": "الثر الأبيض (الإنجليزية: Leukorrhea)، هو إفراز مهبلي سميك أبيض أو أصفر اللون، قد تزداد كميته نتيجة للإصابة بعدوى في المهبل أو مرض منقول جنسيًّا. وقد يصبح أكثر اصفرارًا ويكتسب رائحة كريهة نتيجة لحدوث التهاب في المهبل أو عنق الرحم.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007973.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oviparity",
    "term_en": "Oviparity",
    "term_ar": "بيوضية",
    "synonyms": [
      "Oviparous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The capability of producing eggs (OVA) from which young are hatched outside the body. While mostly referring to nonmammalian species, this does include MAMMALS of the order MONOTREMATA.",
    "arabic_definition": "البيوضية أو السَّروء (الإنجليزية: Ovoviviparity)، هو نمط تكاثر في الحيوانات حيث تضع الأمهات البالغات البيض المخصب محفوظاً في الغشاء في قاع البحر أو في اليابسة. ويفقس البيض في وقت لاحق لإنتاج الصغار. (Oviparity)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052287.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gravidity",
    "term_en": "Gravidity",
    "term_ar": "الحمل ورقم الولادة",
    "synonyms": [
      "Gravidities",
      "Multigravidity",
      "Multigravidities",
      "Nulligravidity",
      "Nulligravidities",
      "Primigravidity",
      "Primigravidities",
      "Gravidity and parity"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The number of pregnancies, complete or incomplete, experienced by a female. It is different from PARITY, which is the number of offspring borne. (From Stedman, 26th ed)",
    "arabic_definition": "يُعرّف مصطلح «الحمل ورقم الولادة» في علم الأحياء والطب البشري بأنه عدد المرات التي تصبح فيها الأنثى حاملًا وتحمل الجنين حتى عمر الحمل القابل للولادة (رقم الولادة). عادة ما تكون هذه المصطلحات مقترنة ببعضها، وأحيانًا بشروط إضافية من أجل الإشارة إلى مزيد من التفاصيل عن تاريخ التوليد للمرأة. (Gravidity)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020073.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salpingitis",
    "term_en": "Salpingitis",
    "term_ar": "التهاب البوق",
    "synonyms": [
      "Salpingitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the uterine salpinx, the trumpet-shaped FALLOPIAN TUBES, usually caused by ascending infections of organisms from the lower reproductive tract. Salpingitis can lead to tubal scarring, hydrosalpinx, tubal occlusion, INFERTILITY, and ectopic pregnancy (PREGNANCY, ECTOPIC)",
    "arabic_definition": "التهاب البوق (الإنجليزية: Salpingitis) هو إصابة والتهاب قنوات فالوب. وكثيرا ما يستخدم كمرادف لمرض التهاب الحوض رغم أن مرض التهاب الحوض يفتقر إلى تحديد دقيق، ويمكن أن يشير إلى العديد من أمراض المسالك التناسلية العليا للإناث، مثل التهاب بطانة الرحم، والتهاب المبيض، والتهاب مجاورات الرحم وصفاق الحوض.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012488.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oophoritis",
    "term_en": "Oophoritis",
    "term_ar": "التهاب المبيض",
    "synonyms": [
      "Oophoritides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the OVARY, generally caused by an ascending infection of organisms from the endocervix.",
    "arabic_definition": "التهاب المبيض (الإنجليزية: Oophoritis) هو التهاب مبيضي الأنثى، غالبا ما يكون إلى جانب التهاب البوق (التهاب قنوات فالوب).",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009869.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyelectasis",
    "term_en": "Pyelectasis",
    "term_ar": "توسع الحويضة",
    "synonyms": [
      "Pyelectases",
      "Fetal Pyelectasis",
      "Fetal Pyelectases",
      "Pyelectases, Fetal",
      "Pyelectasis, Fetal",
      "Prenatal Fetal Pyelectasis",
      "Prenatal Fetal Pyelectases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Dilation of fetal KIDNEY PELVIS. It is a common PRENATAL ULTRASONOGRAPHY finding with no significant long-term sequelae.",
    "arabic_definition": "توسع الحويضة أو توسع حوض الكلوة (الإنجليزية: Pyelectasis) هو تمدد الحوض الكلوي. وهو نتيجة موجات شائعة نسبيا في الأجنة، وهو أكثر شيوعا بنسبة ثلاث مرات في الأجنة الذكورية.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058536.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydrocolpos",
    "term_en": "Hydrocolpos",
    "term_ar": "استسقاء المهبل",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A fluid-filled VAGINA that is obstructed.",
    "arabic_definition": "استسقاء المهبل هو انتفاخ المهبل الناتج عن تراكم السوائل بسبب انسداد المهبل الخلقي منذ الولادة. غالبًا ما يحدث الانسداد بسبب غشاء البكارة غير مثقوب أو أقل شيوعًا في الحاجز المهبلي المستعرض. (Hydrocolpos)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052202.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hematometra",
    "term_en": "Hematometra",
    "term_ar": "تدمي الرحم",
    "synonyms": [
      "Hematometras"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Blood-filled UTERUS.",
    "arabic_definition": "تدمي الرحم هي حالة مرضية يمتلئ فيها الرحم بدم الطمث، تنشأ غالباً بسبب البكارة الرتقاء أو الحاجز المهبلي العرضي. (Hematometra)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006409.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacteriuria",
    "term_en": "Bacteriuria",
    "term_ar": "بيلة جرثومية",
    "synonyms": [
      "Bacteriurias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of bacteria in the urine which is normally bacteria-free. These bacteria are from the URINARY TRACT and are not contaminants of the surrounding tissues. Bacteriuria can be symptomatic or asymptomatic. Significant bacteriuria is an indicator of urinary tract infection.",
    "arabic_definition": "تجرثم البول (بالإنجليزية: Bacteriuria) هو عبارة عن وجود بكتيريا في البول. يقسم إلى نوعين رئيسيين، بوجود أعراض ( التهاب المسالك البولية ) ودون تواجد اعراض.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001437.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ejaculation",
    "term_en": "Ejaculation",
    "term_ar": "قذف",
    "synonyms": [
      "Ejaculations",
      "قذف (أحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The emission of SEMEN to the exterior, resulting from the contraction of muscles surrounding the male internal urogenital ducts.",
    "arabic_definition": "القذف أو الدفق (الإنجليزية: Ejaculation) هو عملية اندفاع السائل المنوي من القضيب الذكري بقوة، والتي تكون مصحوبة بإرجاز (هِزَّةُ الجِماع)، بسبب ثوران جنسي ويعقبها خمول وفتور. وتوصف في الإسلام بخروج المني ومن المهم تمييزها عن غيرها من الأنواع الأخرى من السوائل مثل المذي أو الودي.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004542.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactation",
    "term_en": "Lactation",
    "term_ar": "رضاعة",
    "synonyms": [
      "Milk Secretion",
      "Milk Secretions",
      "Lactation, Prolonged",
      "Lactations, Prolonged",
      "Prolonged Lactation",
      "Prolonged Lactations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The processes of milk secretion by the maternal MAMMARY GLANDS after PARTURITION. The proliferation of the mammary glandular tissue, milk synthesis, and milk expulsion or let down are regulated by the interactions of several hormones including ESTRADIOL; PROGESTERONE; PROLACTIN; and OXYTOCIN.",
    "arabic_definition": "الإلبان أو الدَرّ أو الإِرْضَاع أو الرضاعة هي عملية إفراز الحليب من الغدد الثديية في فم الرضيع والمدة التي تُرضّع فيها الأم لتغذية صغارها تُسمَّى مدة الدرّ. وهي عملية تحدث في جميع إناث الثدييات وتسمى عند البشر بعملية الرضاعة الطبيعية. (Lactation)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007774.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gynatresia",
    "term_en": "Gynatresia",
    "term_ar": "ضيق المهبل",
    "synonyms": [
      "Gynatresias",
      "Asherman Syndrome",
      "Syndrome, Asherman",
      "Asherman's Syndrome",
      "Ashermans Syndrome",
      "Syndrome, Asherman's",
      "Intrauterine Synechiae",
      "Synechiae, Intrauterine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Absence of a normal opening in the lumen of the female genital tract, from the FALLOPIAN TUBES to the VAGINA. This anomaly may be congenital or acquired due to injuries, diseases, or TISSUE ADHESIONS.",
    "arabic_definition": "الضيق المهبلي هو حالة غير طبيعية يصبح فيها المهبل أضيق وأقصر بسبب تكون الأنسجة الليمفية. ضيق المهبل يمكن أن يكون له تأثير سلبي على الخلل الوظيفي الجنسي، ويسبب عسر الجماع، ويجعل فحوصات الحوض صعبة ومؤلمة. (Gynatresia)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006175.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "reproduction",
    "term_en": "Reproduction",
    "term_ar": "تكاثر",
    "synonyms": [
      "Human Reproductive Indexes",
      "Indexes, Human Reproductive",
      "Human Reproductive Index",
      "Human Reproductive Indices",
      "Index, Human Reproductive",
      "Indices, Human Reproductive",
      "Reproductive Index, Human",
      "Reproductive Indices, Human"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The total process by which organisms produce offspring. (Stedman, 25th ed)",
    "arabic_definition": "التكاثر أو إنجاب أو انسال أو ولادة أو توالد هو إحدى العمليات الحيوية التي تؤمن إنتاج متعضيات جديدة تؤمن استمرار النوع الحي. التكاثر إحدى الصفات الأساسية التي تترافق مع الحياة فكل كائن حي يجب أن يتكاثر بطريقة أو أخرى. (Reproduction)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012098.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "superfetation",
    "term_en": "Superfetation",
    "term_ar": "حمل إضافي",
    "synonyms": [
      "Superfetations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The FERTILIZATION of an OVUM that takes place when a FETUS is already present in the UTERUS. Superfetation results in an unusual PREGNANCY with fetuses of different ages and sizes developing in utero simultaneously.",
    "arabic_definition": "الحمل الإضافي أو إسْتلْعَاب أو نَفَل (أو حمل على حمل) هو الحدوث المتزامن لأكثر من مرحلة تطورية للأجنة داخل نفس الحيوان. في الثدييات، يمكن وصفه بتكوين جنين من دورة شبق مختلفة بينما يكون جنين آخر موجود داخل الرحم بالفعل. (Superfetation)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013476.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urolithiasis",
    "term_en": "Urolithiasis",
    "term_ar": "حصاة كلوية",
    "synonyms": [
      "Urinary Lithiasis",
      "Lithiasis, Urinary",
      "Kidney stone disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Formation of stones in any part of the URINARY TRACT, usually in the KIDNEY; URINARY BLADDER; or the URETER.",
    "arabic_definition": "الحصاة الكلوية أو التحصي البولي (الإنجليزية: Urolithiasis)، هي كتلة من مواد صلبة تتجمع في مجرى البول. تتشكل حصى الكلى عادة في الكلى، وتترك الجسم خلال تيار البول.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052878.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "menstruation",
    "term_en": "Menstruation",
    "term_ar": "حيض",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The periodic shedding of the ENDOMETRIUM and associated menstrual bleeding in the MENSTRUAL CYCLE of humans and primates. Menstruation is due to the decline in circulating PROGESTERONE, and occurs at the late LUTEAL PHASE when LUTEOLYSIS of the CORPUS LUTEUM takes place.",
    "arabic_definition": "الحَيْض في اللغة هو السيلان، يقال حاضت الشجرة إذا سال منها الصمغ. ويصف الحيض في علم الأحياء نزول الدم من رحم أنثى الإنسان وبعض الثدييات الأخرى في فترة الخصوبة. (Menstruation)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008598.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fertilization",
    "term_en": "Fertilization",
    "term_ar": "تخصيب",
    "synonyms": [
      "Fertilizations",
      "Conception",
      "Conceptions",
      "Fertilization, Delayed",
      "Delayed Fertilization",
      "Delayed Fertilizations",
      "Fertilizations, Delayed",
      "Fertilization, Polyspermic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The fusion of a spermatozoon (SPERMATOZOA) with an OVUM thus resulting in the formation of a ZYGOTE.",
    "arabic_definition": "التخصيب أو الإخصاب هي مجموعة من العمليات المتلاحقة التي تؤدي بالنهاية إلى تلاحم العروسين لتشكيل العضوية الحية. عند الحيوانات تكون هذه العملية بتلاحم النطفة مع البويضة والتي تؤدي في النتيجة إلى تشكل الجنين، واعتماداً على نوع الحيوان قد تحصل هذه العملية داخل جسم الأنثى فتسمى عملية تخصيب داخلي، وقد تحصل خارج الجسم الحي فتسمى عملية تخصيب خارجي. (Fertilization)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005306.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gametogenesis",
    "term_en": "Gametogenesis",
    "term_ar": "تكوين الجاميتات",
    "synonyms": [
      "Gametogeneses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of germ cell development from the primordial GERM CELLS to the mature haploid GAMETES: ova in the female (OOGENESIS) or sperm in the male (SPERMATOGENESIS).",
    "arabic_definition": "تكوين الجاميتات أو تكوين الأمشاج (الإنجليزية: Gametogenesis) هي الخطوة الأولى في التكاثر الجنسي. تحتوي هذه الخلايا على نصف عدد الكروموسومات المميز للنوع فهي أحادية المجموعة الكروموسومية، وتعرف الخلايا الجرثومية الانثوية الناضجة بالبيوض، بينما تعرف الذكرية منها بالنطف أو الحيامن.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005718.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ovoviviparity",
    "term_en": "Ovoviviparity",
    "term_ar": "بيوضية ولودية",
    "synonyms": [
      "Ovoviviparous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The capability of producing yolk-filled eggs that hatch within the body, so that the young are born alive, but without placental attachment. This applies to certain species of REPTILES and FISHES.",
    "arabic_definition": "البيوضية الولودية أو السَّرْلُود أو شبه الولود (الإنجليزية: Ovoviviparity)، هو نظام تكاثر في الحيوانات حيث يتم احتضان وتفقيس البيض في بطن الأم، ولكن دون تغذيتها من طرف الأم. وهي إستراتيجية أقل تقدماً من الولادة.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052285.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pre-eclampsia",
    "term_en": "Pre-Eclampsia",
    "term_ar": "مقدمة الارتعاج",
    "synonyms": [
      "Preeclampsia",
      "Pregnancy Toxemias",
      "Pregnancy Toxemia",
      "Toxemia, Pregnancy",
      "Edema-Proteinuria-Hypertension Gestosis",
      "Gestosis, Edema-Proteinuria-Hypertension",
      "Hypertension-Edema-Proteinuria Gestosis",
      "Gestosis, Hypertension-Edema-Proteinuria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A complication of PREGNANCY, characterized by a complex of symptoms including maternal HYPERTENSION and PROTEINURIA with or without pathological EDEMA. Symptoms may range between mild and severe. Pre-eclampsia usually occurs after the 20th week of gestation, but may develop before this time in the presence of trophoblastic disease.",
    "arabic_definition": "مُقَدِّمَةُ الارْتِعاج (الإنجليزية: Preeclampsia) حالة طبية يصاحب الحمل فيها ارتفاع ضغط الدم (وهي الحالة المعروفة باسم ارتفاع ضغط الدم الحملي)، ويصاحب هذه الحالة ظهور كميات ملحوظة من البروتين في البول. ويشير مصطلح ما قبل تسمم الحمل إلى مجموعة من الأعراض، وليس إلى أي عامل مسبب لهذه الحالة. (Pre-Eclampsia)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011225.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spermatogenesis",
    "term_en": "Spermatogenesis",
    "term_ar": "تكون الحيوانات المنوية",
    "synonyms": [
      "Spermatocytogenesis",
      "Spermiogenesis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of germ cell development in the male from the primordial germ cells, through SPERMATOGONIA; SPERMATOCYTES; SPERMATIDS; to the mature haploid SPERMATOZOA.",
    "arabic_definition": "الإنطاف أو تكوُّنُ الحيوانات المنويّة أو تكون المني أو عمليّة يتطوَّر فيها الحيوان المنويّ الحيّ (أو السبيرماتوزون) أحاديّ الصيغة الصبغيّة من خليّة جنسيّة (أو عروسيّة أو منتشة) في الأنابيب المنويّة للخصية. تبدأ هذه العمليّة بالانقسام التفتليّ لخلايا جذعيّة تقع بالقرب من الغشاء القاعديّ للأنابيب، وتُدعى هذه الخلايا بالخلايا الجذعيّة بزرة النطاف. (Spermatogenesis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013091.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemoglobinuria",
    "term_en": "Hemoglobinuria",
    "term_ar": "بيلة هيموغلوبينية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of free HEMOGLOBIN in the URINE, indicating hemolysis of ERYTHROCYTES within the vascular system. After saturating the hemoglobin-binding proteins (HAPTOGLOBINS), free hemoglobin begins to appear in the urine.",
    "arabic_definition": "بيلة هيموغلوبينية أو مرض البول الهيموجلوبينى (الإنجليزية: Hemoglobinuria) هي حالة يوجد فيها هيموجلوبين بروتين نقل الأكسجين في تركيزات عالية بشكل غير طبيعي في البول. وغالباً ما ترتبط الحالة مع أي فقر دم انحلالي مع انحلال الدم داخل الأوعية الدموية أساساً، حيث يتم تدمير خلايا الدم الحمراء (RBCs)، وبالتالي إطلاق الهيموغلوبين الحر في البلازما.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006456.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "insemination",
    "term_en": "Insemination",
    "term_ar": "تلقيح",
    "synonyms": [
      "Inseminations",
      "تلقيح (أحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The deposit of SEMEN or SPERMATOZOA into the VAGINA to facilitate FERTILIZATION.",
    "arabic_definition": "الإمناء أو التلقيح، أو التحبيل أو التخصيب (بالإنجليزية:Insemination) هو إدخال الحيوانات المنوية في الجهاز التناسلي للأنثى لغرض إخصاب الأنثى أو تخصيبها للتكاثر الجنسي. يتم إدخال الحيوانات المنوية في رحم حيوان ثديي أو قناة البيض لحيوان بيوض (البويضات).",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007314.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polyhydramnios",
    "term_en": "Polyhydramnios",
    "term_ar": "استسقاء سلوي",
    "synonyms": [
      "Hydramnios"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of abnormally high AMNIOTIC FLUID volume, such as greater than 2,000 ml in the LAST TRIMESTER and usually diagnosed by ultrasonographic criteria (AMNIOTIC FLUID INDEX). It is associated with maternal DIABETES MELLITUS; MULTIPLE PREGNANCY; CHROMOSOMAL DISORDERS; and congenital abnormalities.",
    "arabic_definition": "الاستسقاء السلوي (الإنجليزية: Polyhydramnios) هو زيادة السائل السلوي أو الأمينوسي المحيط بالجنين و يحدث في 1% من الحوامل ، و قد يكون حاداً أو مزمناً، و هو عكس قلة السائل السلوي.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006831.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oligohydramnios",
    "term_en": "Oligohydramnios",
    "term_ar": "قلة السائل السلوي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of abnormally low AMNIOTIC FLUID volume. Principal causes include malformations of fetal URINARY TRACT; FETAL GROWTH RETARDATION; GESTATIONAL HYPERTENSION; nicotine poisoning; and PROLONGED PREGNANCY.",
    "arabic_definition": "قلة السائل السلوي هي حالة يقل فيها السائل الأمنيوسي حول الجنين، فيكون مشعر السائل السلوي أقل من 5 سم، ويحدث في 4% من النساء في أي وقت من الحمل وخصوصاً الثلث الأخير، وهو عكس الاستسقاء السلوي. (Oligohydramnios)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016104.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "galactorrhea",
    "term_en": "Galactorrhea",
    "term_ar": "ثر اللبن",
    "synonyms": [
      "Galactorrheas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive or inappropriate LACTATION in females or males, and not necessarily related to PREGNANCY. Galactorrhea can occur either unilaterally or bilaterally, and be profuse or sparse. Its most common cause is HYPERPROLACTINEMIA.",
    "arabic_definition": "ثر اللبن (بالإنجليزية: Galactorrhea) وهو التدفق التلقائي للحليب من الثدي، غير المرتبط بالولادة أو الترضيع.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005687.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "organogenesis",
    "term_en": "Organogenesis",
    "term_ar": "تخلق الأعضاء",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Formation of differentiated cells and complicated tissue organization to provide specialized functions.",
    "arabic_definition": "عملية تخلق الأعضاء أو تكوينها أو نشوؤها أو الحِنَاجَة (الإنجليزية: Organogenesis) في التطور الحيواني هي مرحلة التطور الجنيني التي تبدأ في نهاية المُعيْدة وتستمر حتى الولادة، ومن خلالها تتطور الطبقات المنتشة الثلاثة: الأديم الظاهر والأديم الباطن والأديم المتوسط إلى أعضاء داخلية للكائن الحي. وتخضع خلايا كل طبقة من الطبقات الجرثومية الثلاثة للتمايز، وهي عملية تصبح فيها الخلايا الأقل تخصصًا أكثر تخصصًا من خلال التعبير عن مجموعة محددة من الجينات، وذلك عن طريق شلالات من إشارات الخلية.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D038081.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperandrogenism",
    "term_en": "Hyperandrogenism",
    "term_ar": "فرط الأندروجين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by the excessive secretion of ANDROGENS from the ADRENAL CORTEX; the OVARIES; or the TESTES. The clinical significance in males is negligible. In women, the common manifestations are HIRSUTISM and VIRILISM as seen in patients with POLYCYSTIC OVARY SYNDROME and ADRENOCORTICAL HYPERFUNCTION.",
    "arabic_definition": "فرط الأندروجين أو زيادة الأندروجين (الإنجليزية: Hyperandrogenism) وصف يشير لحالة طبية تتميز بزيادة في إفراز الأندروجينات (الهرمونات المذكرة) في الأنثى وما يصاحب هذه الزيادة من آثار على الجسم. ويعتبر فرط الاندروجين اضطراباً في الغدد الصماء شبيها بفرط الإستروجينية، وأحد أشهر أسبابها هو متلازمة المبيض المتعدد الكيسات (متلازمة تكيس المبايض).",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017588.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nephrosclerosis",
    "term_en": "Nephrosclerosis",
    "term_ar": "داء كلوي بفرط ضغط الدم",
    "synonyms": [
      "Nephroscleroses",
      "Hypertensive kidney disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hardening of the KIDNEY due to infiltration by fibrous connective tissue (FIBROSIS), usually caused by renovascular diseases or chronic HYPERTENSION. Nephrosclerosis leads to renal ISCHEMIA.",
    "arabic_definition": "اعتلال الكلية بفرط ضغط الدم أو الداء الكلوي بفرط ضغط الدم (الإنجليزية: Hypertensive nephropathy أو Hypertensive nephrosclerosis أو Hypertensive kidney disease أو Hypertensive renal disease) هو حالة طبية تشير إلى خلل الكلية الناتج عن ارتفاع ضغط الدم المزمن. يجب تمييز الداء الكلوي بفرط ضغط الدم عن فرط الضغط الناجم عن الأوعية الدموية، وهو أحد أنواع فرط ضغط الدم الثانوي.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009400.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydronephrosis",
    "term_en": "Hydronephrosis",
    "term_ar": "موه الكلية",
    "synonyms": [
      "Hydronephroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal enlargement or swelling of a KIDNEY due to dilation of the KIDNEY CALICES and the KIDNEY PELVIS. It is often associated with obstruction of the URETER or chronic kidney diseases that prevents normal drainage of urine into the URINARY BLADDER.",
    "arabic_definition": "موه الكلية (حرفيًا ماء داخل الكلية) هو تمدد وتوسع حوض وحويضات الكلية نتيجة لاحتباس البول، وإذا لم يتم علاجه يحدث ضمور للكلية، وقد يمتد ليصل إلى الحالب أيضاً، ويحدث في أي سن، ويمكن أن يصيب الجنين قبل الولادة. (Hydronephrosis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006869.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endometritis",
    "term_en": "Endometritis",
    "term_ar": "التهاب بطانة الرحم",
    "synonyms": [
      "Endomyometritis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the ENDOMETRIUM, usually caused by intrauterine infections. Endometritis is the most common cause of postpartum fever.",
    "arabic_definition": "التهاب بطانة الرحم هو التهابٌ في البطانة الداخلية للرحم (بطانة الرحم). تحدثُ عددٌ من الأعراض وتتضمن حمًى وألمًا بطنيًا سفليًا ونزيفًا أو إفرازًا مهبليًا غيرُ طبيعي. (Endometritis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004716.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "luteal-phase",
    "term_en": "Luteal Phase",
    "term_ar": "طور أصفري",
    "synonyms": [
      "Phase, Luteal",
      "Menstrual Cycle, Luteal Phase",
      "Postovulatory Phase",
      "Phase, Postovulatory",
      "Menstrual Secretory Phase",
      "Secretory Phase, Menstrual",
      "Menstrual Cycle, Secretory Phase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The period in the MENSTRUAL CYCLE that follows OVULATION, characterized by the development of CORPUS LUTEUM, increase in PROGESTERONE production by the OVARY and secretion by the glandular epithelium of the ENDOMETRIUM. The luteal phase begins with ovulation and ends with the onset of MENSTRUATION.",
    "arabic_definition": "المرحلة الاصفرية أو الطور الاصفري (الاسم العلمي: Luteal phase) وهي المرحلة المتأخرة من الدورة الشهرية وتبدأ بتكوين الجسم الأصفر، وتنتهي إما بالحمل أو بتحلل الجسم الأصفر. الهرمون الرئيس المتصل بهذه المرحلة هو هرمون البروجسترون الذي يكون مرتفعاً في هذه المرحلة أكثر من المراحل الأخرى من الدورة الشهرية.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008183.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyonephrosis",
    "term_en": "Pyonephrosis",
    "term_ar": "تقيح الكلية",
    "synonyms": [
      "Hydronephrosis, Infected",
      "Infected Hydronephrosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Distention of KIDNEY with the presence of PUS and suppurative destruction of the renal parenchyma. It is often associated with renal obstruction and can lead to total or nearly total loss of renal function.",
    "arabic_definition": "تقيح الكلية (الإنجليزية: Pyonephrosis) هو عدوى في الجهاز الكلوي الجامع، بحيث يتجمع القيح في حويضة الكلية مُسبباً تمدد وانتفاخ الكلية، ومن الممكن أن يؤدي إلى حدوث فشل كلوي.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053018.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "placentation",
    "term_en": "Placentation",
    "term_ar": "تكون المشيمة",
    "synonyms": [
      "Placental Development",
      "Hemochorial Placentation",
      "Placentation, Hemochorial",
      "Hemochorial Placental Development",
      "Placental Development, Hemochorial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The development of the PLACENTA, a highly vascularized mammalian fetal-maternal organ and major site of transport of oxygen, nutrients, and fetal waste products between mother and FETUS. The process begins at FERTILIZATION, through the development of CYTOTROPHOBLASTS and SYNCYTIOTROPHOBLASTS, the formation of CHORIONIC VILLI, to the progressive increase in BLOOD VESSELS to support the growing fetus.",
    "arabic_definition": "يشير مصطلح تكون المشيمة في علم الأحياءإلى تكوُّن المشيمات، من حيث النوع والبنية، أو ترتيبها. وتكمن وظيفة تكوُّن المشيمة في نقل العناصر الغذائية من أنسجة الأمهات للـجنين المتنامي. (Placentation)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010929.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chorioamnionitis",
    "term_en": "Chorioamnionitis",
    "term_ar": "التهاب المشيماء والسلى",
    "synonyms": [
      "Chorioamnionitides",
      "Amnionitis",
      "Amnionitides",
      "Funisitis",
      "Funisitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the placental membranes (CHORION; AMNION) and connected tissues such as fetal BLOOD VESSELS and UMBILICAL CORD. It is often associated with intrauterine ascending infections during PREGNANCY.",
    "arabic_definition": "التهاب المشيماء والسلى (الإنجليزية: Chorioamnionitis) هو التهاب الأغشية الجنينية (الغشاء السلوي والكوريون) يسببه عدوى بكتيرية، تنجم عادة عن البكتيريا الصاعدة إلى الرحم من المهبل خصوصاً أثناء فترات الولادة المطولة. خطر نشوء التهاب المشيماء والسلى يزداد مع كل فحص للمهبل خلال الشهر الاخير للحمل وأثناء الولادة.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002821.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudohypoaldosteronism",
    "term_en": "Pseudohypoaldosteronism",
    "term_ar": "نقص الألدوستيرونية الكاذب",
    "synonyms": [
      "Pseudohypoaldosteronisms",
      "Pseudohypoaldosteronism, Type I, Autosomal Dominant",
      "Pseudohypoaldosteronism Type 1, Autosomal Dominant",
      "Pseudohypoaldosteronism, Type I, Autosomal Recessive",
      "Pseudohypoaldosteronism Type 1, Autosomal Recessive",
      "Pseudohypoaldosteronism, Type II",
      "Pseudohypoaldosteronisms, Type II",
      "Type II Pseudohypoaldosteronism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A heterogeneous group of disorders characterized by renal electrolyte transport dysfunctions. Congenital forms are rare autosomal disorders characterized by neonatal hypertension, HYPERKALEMIA, increased RENIN activity and ALDOSTERONE concentration. The Type I features HYPERKALEMIA with sodium wasting; Type II, HYPERKALEMIA without sodium wasting. Pseudohypoaldosteronism can be the result of a defective renal electrolyte transport protein or acquired after KIDNEY TRANSPLANTATION.",
    "arabic_definition": "نقص الألدوستيرونية الكاذب هي حالة طبية مقلدة لنقص الألدوستيرونية لكن الحالة تحدث بسبب عدم قدرة الجسم على الاستجابة للألدوستيرون الذي يتكون مستوياته مرتفعة بسبب غياب التثبيط الارتجاعي. (Pseudohypoaldosteronism)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011546.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parthenogenesis",
    "term_en": "Parthenogenesis",
    "term_ar": "توالد بكري",
    "synonyms": [
      "Parthenogeneses",
      "Thelytoky",
      "Automixis",
      "Arrhenotoky"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A unisexual reproduction without the fusion of a male and a female gamete (FERTILIZATION). In parthenogenesis, an individual is formed from an unfertilized OVUM that did not complete MEIOSIS. Parthenogenesis occurs in nature and can be artificially induced.",
    "arabic_definition": "التوالد البِكري أو التوالد العذري أو الإنسال العُذري أو البِکري أو الإِينَاث أو الإثمار العُذري (الإنجليزية: Parthenogenesis)، هو شكل من أشكال التكاثر اللاجنسي يوجد في الإناث يتطور فيها الجنين في الحيوانات.) التوالد البكري يحصل طبيعيًا في بعض الأنواع، بما في ذلك معظم النباتات الدنيا واللافقاريات (مثل متفرعات القرون وبعض النحل وبعض أنواع العقرب، والزنابير الطفيلية) والفقاريات (مثل بعض الزواحف والسمك، ونادرا جدا عند الطيور وأسماك القرش وهذا النوع من الاستنساخ قد يحرض بشكل مصطنع في الأنواع الحية الأخرى. يجب تفريق هذا عن التوالد الخنثوي في بعض الأنواع التي تحوي الجهاز التناسلي للجنسين.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010312.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hematocolpos",
    "term_en": "Hematocolpos",
    "term_ar": "تدمي المهبل",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A blood-filled VAGINA that is obstructed.",
    "arabic_definition": "تدمي المهبل هي حالة مرضية يمتلئ فيها المهبل بدم الطمث، تحدث عادةً في حالة البكارة الرتقاء، و قد تحدث في متلازمة روبينوف و الرحم المزدوج و غيرهما من العيوب الخلقية. (Hematocolpos)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006399.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nephrocalcinosis",
    "term_en": "Nephrocalcinosis",
    "term_ar": "كلاس كلوي",
    "synonyms": [
      "Nephrocalcinoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by calcification of the renal tissue itself. It is usually seen in distal RENAL TUBULAR ACIDOSIS with calcium deposition in the DISTAL KIDNEY TUBULES and the surrounding interstitium. Nephrocalcinosis causes RENAL INSUFFICIENCY.",
    "arabic_definition": "الكلاس الكلوي، المعروف سابقًا باسم كلاس أولبرايت نسبةً لفولر أولبرايت، مصطلح استُخدم في الأصل لوصف ترسب أملاح الكالسيوم في الكلية بسبب فرط نشاط جارات الدرق. يُستخدم مصطلح التهاب الكلية لوصف ترسب كل من أوكزالات وفوسفات الكالسيوم الذي قد يسبب إصابة حادة في الكلى. (Nephrocalcinosis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009397.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parametritis",
    "term_en": "Parametritis",
    "term_ar": "التهاب مجاورات الرحم",
    "synonyms": [
      "Parametritides",
      "Cellulitis, Pelvic",
      "Cellulitides, Pelvic",
      "Pelvic Cellulitides",
      "Pelvic Cellulitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the parametrium, the connective tissue of the pelvic floor, extending from the subserous coat of the uterus laterally between the layers of the BROAD LIGAMENT.",
    "arabic_definition": "التهاب مجاورات الرحم (الإنجليزية: Parametritis) (هو التهاب الأنسجة الضامة المتاخمة للرحم). يعدّ شكلا من أشكال مرض التهاب الحوض.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010249.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "superovulation",
    "term_en": "Superovulation",
    "term_ar": "فرط تحفيز المبيض المنضبط",
    "synonyms": [
      "Superovulations",
      "Controlled ovarian hyperstimulation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Occurrence or induction of release of more ova than are normally released at the same time in a given species. The term applies to both animals and humans.",
    "arabic_definition": "يُعدّ فرطُ تحفيز المبيض المُنضبط تقنيةً تُستخدم في مجال الإخصاب المُساعَد، وتتضمن استعمال أدوية مُحفِّزة للخصوبة بهدف إحداث الإباضة من خلال تنشيط عددٍ من الجريبات المبيضية في آنٍ واحد. ويمكن سحب هذه الجريبات المتعددة عبر إجراء استرجاع البويضات لاستخدامها في الإخصاب خارج الجسم، أو تُترك لتحدث لها الإباضة بشكل طبيعي، مما يؤدي إلى ما يُعرف بفرط الإباضة، أي إطلاق عددٍ أكبر من المعتاد من البويضات، وغالبًا ما يكون ذلك بحدٍّ أدنى بويضتين. (Superovulation)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013480.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurogenesis",
    "term_en": "Neurogenesis",
    "term_ar": "تخلق النسيج العصبي",
    "synonyms": [
      "Neurogeneses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Formation of NEURONS which involves the differentiation and division of STEM CELLS in which one or both of the daughter cells become neurons.",
    "arabic_definition": "تخلق النسيج العصبي هو العملية التي تستخدمها الخلايا الجذعية العصبية (إن إس سي إس) لإنتاج خلايا الجهاز العصبي، أي العصبونات. تحدث هذه العملية لدى جميع الأنواع الحيوانية ما عدا المساميات (الإسفنجيات) والصفيحيات. (Neurogenesis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055495.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "perinephritis",
    "term_en": "Perinephritis",
    "term_ar": "التهاب العجان الكلوي",
    "synonyms": [
      "Perinephritides",
      "Inflammation, Perinephrium",
      "Inflammations, Perinephrium",
      "Perinephrium Inflammation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the connective and adipose tissues surrounding the KIDNEY.",
    "arabic_definition": "التهاب العجان الكلوي هو عدوى في محيط الكلية إما يمينًا أو يسارًا. يمكن أن يكون ناتجًا عن تسلل البكتيريا خارج الحوض الكلوي (التهاب الحويضة والكلية) أو نتيجة عدوى أخرى في الكلى. (Perinephritis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010501.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kallmann-syndrome",
    "term_en": "Kallmann Syndrome",
    "term_ar": "متلازمة كالمان",
    "synonyms": [
      "Syndrome, Kallmann",
      "Anosmic Hypogonadism",
      "Anosmic Hypogonadisms",
      "Hypogonadism, Anosmic",
      "Hypogonadisms, Anosmic",
      "Anosmic Idiopathic Hypogonadotropic Hypogonadism",
      "Dysplasia Olfactogenitalis of De Morsier",
      "Hypogonadotropic Hypogonadism and Anosmia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genetically heterogeneous disorder caused by hypothalamic GNRH deficiency and OLFACTORY NERVE defects. It is characterized by congenital HYPOGONADOTROPIC HYPOGONADISM and ANOSMIA, possibly with additional midline defects. It can be transmitted as an X-linked (GENETIC DISEASES, X-LINKED), an autosomal dominant, or an autosomal recessive trait.",
    "arabic_definition": "متلازمة كالمان (الإنجليزية: Kallmann syndrome) هي حالة وراثية تتمثّل بفشل بداية البلوغ أو فشل في إتمام البلوغ بشكل كامل. تحدث هذه المتلازمة في الذكور والإناث ولها أعراض إضافية قصور الغدد التناسلية (نقص وظيفة الغدد التي تفرز هرمونات الجنس) التي تؤدي في معظم الحالات للعقم.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017436.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "placenta-accreta",
    "term_en": "Placenta Accreta",
    "term_ar": "مشيمة ملتصقة",
    "synonyms": [
      "Accreta, Placenta",
      "Placenta Percreta",
      "Percreta, Placenta",
      "Placenta Increta",
      "Increta, Placenta",
      "Placenta Accreta Spectrum",
      "Accreta Spectrum, Placenta",
      "Morbidly Adherent Placenta"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal placentation in which all or parts of the PLACENTA are attached directly to the MYOMETRIUM due to a complete or partial absence of DECIDUA. It is associated with POSTPARTUM HEMORRHAGE because of the failure of placental separation.",
    "arabic_definition": "المشيمة الملتصقة ( بالإنكليزية Placenta accreta) هي اختلاط حاد ولادي تنطوي على ارتباط عميق شاذ للمشيمة يبطانة الرحم وإلى عضل الرحم (الطبقة المتوسطة لجدار الرحم). وهناك ثلاثة أشكال للمشيمة الملتصقة يمكن تمييزها بواسطة عمق الاختراق.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010921.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retained-placenta",
    "term_en": "Retained Placenta",
    "term_ar": "مشيمة محتبسة",
    "synonyms": [
      "Placentas, Retained",
      "Retained Placentas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A placenta that fails to be expelled after BIRTH of the FETUS. A PLACENTA is retained when the UTERUS fails to contract after the delivery of its content, or when the placenta is abnormally attached to the MYOMETRIUM.",
    "arabic_definition": "المشيمة المحتبسة أو العالقة أو احتباس مشيمي (الإنجليزية: Retained placenta)، هي حالة تبقى فيها كل المشيمة أو جزء منها أو من الأغشية في الرحم خلال المرحلة الثالثة من المخاض. يمكن تقسيم المشيمة المحتبسة على نطاق واسع إلى: 1-فشل فصل المشيمة عن بطانة الرحم.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018457.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fanconi-syndrome",
    "term_en": "Fanconi Syndrome",
    "term_ar": "متلازمة فانكوني",
    "synonyms": [
      "Syndrome, Fanconi",
      "Proximal Renal Tubular Dysfunction",
      "Fanconi Syndrome without Cystinosis",
      "Fanconi Renotubular Syndrome",
      "Renotubular Syndrome, Fanconi",
      "Syndrome, Fanconi Renotubular",
      "Renal Fanconi Syndrome",
      "Fanconi Syndrome, Renal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A hereditary or acquired form of generalized dysfunction of the PROXIMAL KIDNEY TUBULE without primary involvement of the KIDNEY GLOMERULUS. It is usually characterized by the tubular wasting of nutrients and salts (GLUCOSE; AMINO ACIDS; PHOSPHATES; and BICARBONATES) resulting in HYPOKALEMIA; ACIDOSIS; HYPERCALCIURIA; and PROTEINURIA.",
    "arabic_definition": "متلازمة فانكوني هوَ عبارة عن مرض يصيب الأنابيب الملتوية القريبة في كلى الإنسان ؛ حيث لا يتم امتصاص كلا من الجلوكوز و‌مجموعة الفوسفات و‌الأحماض الأمينية و‌حمض اليوريك و‌مجموعة كربونات الهيدروجين، وإنما تتسرب هذه المجموعات إلى البول. تؤثر متلازمة فانكوني على الأنابيب الملتوية القريبة ؛ والتي تعد الجزء الأول من الوحدات الأنبوبية الكلوية وتعمل على ترشيح البلازما ومن ثم معالجته عن طريق كبة الوحدة الأنبوبية الكلوية. (Fanconi Syndrome)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005198.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacterial-vaginosis",
    "term_en": "Bacterial Vaginosis",
    "term_ar": "التهاب المهبل البكتيري",
    "synonyms": [
      "Bacterial Vaginitis",
      "Bacterial Vaginitides",
      "Vaginitides, Bacterial",
      "Vaginitis, Bacterial",
      "Vaginitis, Nonspecific",
      "Nonspecific Vaginitis",
      "Bacterial Vaginoses",
      "Vaginoses, Bacterial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Polymicrobial, nonspecific vaginitis associated with positive cultures of Gardnerella vaginalis and other anaerobic organisms and a decrease in lactobacilli. It remains unclear whether the initial pathogenic event is caused by the growth of anaerobes or a primary decrease in lactobacilli.",
    "arabic_definition": "البكتيريا المهبلية هي السبب الأكثر شيوعاً للعدوى المهبلية. ولا تعتبر من الأمراض المنقولة جنسياً حيث لا تنتقل بالاتصال الجنسي؛ على الرغم من ذلك فهي أكثر شيوعاً بين النساء النشطات جنسياً. (Bacterial Vaginosis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016585.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "natural-childbirth",
    "term_en": "Natural Childbirth",
    "term_ar": "ولادة طبيعية",
    "synonyms": [
      "Childbirth, Natural",
      "Water Birth",
      "Water Births",
      "Waterbirth",
      "Lamaze Technique",
      "Technique, Lamaze"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Labor and delivery without medical intervention, usually involving RELAXATION THERAPY.",
    "arabic_definition": "الولادة الطبيعية هي الولادة بدون التدخلات الطبية الروتينية، وخاصة التخدير. الولادة الطبيعية نشأت في المعارضة للنموذج التكنو-طبي للولادة التي اكتسبت مؤخرا شعبية في المجتمعات الصناعية. (Natural Childbirth)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009321.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "female-infertility",
    "term_en": "Female Infertility",
    "term_ar": "العقم عند المرأة",
    "synonyms": [
      "Sterility, Postpartum",
      "Postpartum Sterility",
      "Sterility, Female",
      "Female Sterility",
      "Subfertility, Female",
      "Female Subfertility",
      "Sub-Fertility, Female",
      "Female Sub-Fertility"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diminished or absent ability of a female to achieve conception.",
    "arabic_definition": "يُشير مصطلح العقم عند النساء (الإنجليزية: Female infertility) إلى عدم القدرة على الحمل بعد الجماع. ويُقدر أنه يؤثر على حوالي 48 مليون امرأة على مستوى العالم.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007247.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "uterine-didelphys",
    "term_en": "Uterine Didelphys",
    "term_ar": "رحم مزدوجة",
    "synonyms": [
      "Didelphic Uteri",
      "Didelphic Uterus",
      "Uterus, Didelphic",
      "Double Uterus with Imperforated Vagina",
      "Uterus Didelphys with Imperforate Vagina",
      "Uterus Didelphys with Imperforated Vagina",
      "Uterus didelphys"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormality in which the MULLERIAN DUCTS do not properly join to form a single uterus during embryological development instead resulting in complete duplication of uterine horns and duplication of the cervix. Double uterus is associated with double cervix and vagina and sometimes renal agenesis.",
    "arabic_definition": "ازدواجية الرحم (وأحيانا يُشار إليه أيضًا باسم الرحم المُزدوجة) يمثل تشوه خلقي للرحم حيث يوجد الرحم كعضو زوجي عند فشل الانصهار الجنيني لقناة مولريان. ونتيجةُ لذلك، يُخلّق رحم مزدوج مع اثنين منفصلين من عنق الرحم، ونادرا ما يكون المهبل مزدوج أيضًا. (Uterine Didelphys)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000093642.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asexual-reproduction",
    "term_en": "Asexual Reproduction",
    "term_ar": "تكاثر لاجنسي",
    "synonyms": [
      "Asexual Reproductions",
      "Reproductions, Asexual"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Reproduction without fusion of two types of cells, mostly found in ALGAE; FUNGI; and PLANTS. Asexual reproduction occurs in several ways, such as budding, fission, or splitting from parent cells. Only few groups of ANIMALS reproduce asexually or unisexually (PARTHENOGENESIS).",
    "arabic_definition": "التكاثر اللاجنسي أو الخضري هو شكل من أشكال تكاثر النبات التي لا تنطوي على انقسام ميوزي أو إخصاب. يتم التكاثر الخضري تلقائياً عن طريق أجزاء مثل الرئد أو الجذمور، أو عن طريق الإنسان فيما يسمى بالإكثار الخضري. (Asexual Reproduction)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012100.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interstitial-cystitis",
    "term_en": "Interstitial Cystitis",
    "term_ar": "متلازمة المثانة المؤلمة",
    "synonyms": [
      "Cystitides, Interstitial",
      "Interstitial Cystitides",
      "Cystitis, Chronic Interstitial",
      "Chronic Interstitial Cystitides",
      "Cystitides, Chronic Interstitial",
      "Interstitial Cystitides, Chronic",
      "Interstitial Cystitis, Chronic",
      "Chronic Interstitial Cystitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition with recurring discomfort or pain in the URINARY BLADDER and the surrounding pelvic region without an identifiable disease. Severity of pain in interstitial cystitis varies greatly and often is accompanied by increased urination frequency and urgency.",
    "arabic_definition": "التهاب المثانة الخلالي (الإنجليزية: Interstitial cystitis) أو متلازمة المثانة المؤلمة (الإنجليزية: painful bladder syndrome) (والذي يتم اختصاره عادةً إلى \"BPS/IC\") هو أحد أمراض المثانة البولية غير معروفة السبب، يتميز بألم يصاحب التبول (عسر البول)، تكرار البول (في كثير من الأحيان كل 10 دقائق)، والإلحاح البولي، والضغط في المثانة و/ أو الحوض. يزداد الألم المتسبب من هذا المرض مع تناول بعض الأطعمة أو المشروبات و/ أو مع امتلاء المثانة و/أو قد يخف مع التبول حسب الإحصائيات لدى 97 ٪ من المرضى.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018856.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "postpartum-depression",
    "term_en": "Postpartum Depression",
    "term_ar": "اكتئاب ما بعد الولادة",
    "synonyms": [
      "Post-Natal Depression",
      "Depression, Post-Natal",
      "Post-Partum Depression",
      "Depression, Post-Partum",
      "Postnatal Depression",
      "Depression, Postnatal",
      "Postnatal Dysphoria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Depression in POSTPARTUM WOMEN, usually within four weeks after giving birth (PARTURITION). The degree of depression ranges from mild transient depression to neurotic or psychotic depressive disorders. (From DSM-IV, p386)",
    "arabic_definition": "اكتئاب ما بعد الولادة أو اكتئاب بعد الولادة هو اضطراب مزاجي مرتبط بولادة الطفل ومن شأنه أن يؤثر على كلا الجنسين. تشتمل الأعراض على الحزن الشديد، إعياء، قلق، نوبات من البكاء، هياج وتغيرات في نمط النوم وتناول الطعام. (Postpartum Depression)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019052.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urinary-incontinence",
    "term_en": "Urinary Incontinence",
    "term_ar": "تبول لاإرادي",
    "synonyms": [
      "Incontinence, Urinary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Involuntary loss of URINE, such as leaking of urine. It is a symptom of various underlying pathological processes. Major types of incontinence include URINARY URGE INCONTINENCE and URINARY STRESS INCONTINENCE.",
    "arabic_definition": "المَثَن أو سَلَس البَوْل أو السَلَس البَوْلِي (الإنجليزية: Urinary incontinence) هو خروج البول من الجسم لا إرادياً. هذه الحالة شائعة جداً وتسبب الكثير من الإحراج للمصابين، مؤثرةً بذلك على نوعية حياتهم.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014549.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "artificial-insemination",
    "term_en": "Artificial Insemination",
    "term_ar": "إمناء اصطناعي",
    "synonyms": [
      "Eutelegenesis",
      "Eutelegeneses",
      "Artificial Inseminations",
      "Inseminations, Artificial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Artificial introduction of SEMEN or SPERMATOZOA into the VAGINA to facilitate FERTILIZATION.",
    "arabic_definition": "الإمناء الاصطناعي أو التلقيح الصناعي(الإنجليزية: Artificial insemination) هو الإدخال المتعمد للسائل المنوي إلى رحم الأنثى لغرض الإخصاب. ويتم ذلك بضخ السائل المنوي بشكل مباشر في داخل المهبل أو قناة المبيض.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007315.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chiari-frommel-syndrome",
    "term_en": "Chiari-Frommel Syndrome",
    "term_ar": "فرط برولاكتين الدم",
    "synonyms": [
      "Syndrome, Chiari-Frommel",
      "Frommel Disease",
      "Disease, Frommel",
      "Frommel's Disease",
      "Disease, Frommel's",
      "Hyperprolactinaemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A POSTPARTUM condition consists of persistent lactation (GALACTORRHEA) and AMENORRHEA in patients not BREAST FEEDING.",
    "arabic_definition": "فرط البرولاكتين ( HP )، أو فرط برولاكتين الدم هو وجود مستويات غير طبيعية عالية من البرولاكتين في الدم. المستويات العادية أقل من 580 ميكرو وحدة / لتر بالنسبة للنساء، وأقل من 450 ميكرو وحدة / لتر بالنسبة للرجال. (Chiari-Frommel Syndrome)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002640.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "congenital-adrenal-hyperplasia",
    "term_en": "Congenital Adrenal Hyperplasia",
    "term_ar": "فرط تنسج الكظرية الخلقي",
    "synonyms": [
      "Adrenal Hyperplasias, Congenital",
      "Congenital Adrenal Hyperplasias",
      "Hyperplasias, Congenital Adrenal",
      "Hyperplasia, Congenital Adrenal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of inherited disorders of the ADRENAL GLANDS, caused by enzyme defects in the synthesis of cortisol (HYDROCORTISONE) and/or ALDOSTERONE leading to accumulation of precursors for ANDROGENS. Depending on the hormone imbalance, congenital adrenal hyperplasia can be classified as salt-wasting, hypertensive, virilizing, or feminizing. Defects in STEROID 21-HYDROXYLASE; STEROID 11-BETA-HYDROXYLASE; STEROID 17-ALPHA-HYDROXYLASE; 3-beta-hydroxysteroid dehydrogenase (3-HYDROXYSTEROID DEHYDROGENASES); TESTOSTERONE 5-ALPHA-REDUCTASE; or steroidogenic acute regulatory protein; among others, underlie these disorders.",
    "arabic_definition": "فرط تنسج الكظرية الخلقي هو مرض وراثي يؤثر على وظائف الغدة الكظرية في إفرازها لهرموناتها بدرجات متفاوتة. وفي أغلب الحالات يصاب الطفل المريض بهبوط حاد في الضغط وجفاف وضعف واضطراب في ضربات القلب ولربما توقف عمل القلب والوفاة. (Congenital Adrenal Hyperplasia)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000312.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gestational-diabetes",
    "term_en": "Gestational Diabetes",
    "term_ar": "سكري حملي",
    "synonyms": [
      "Diabetes Mellitus, Gestational",
      "Gestational Diabetes Mellitus",
      "Diabetes, Pregnancy-Induced",
      "Pregnancy-Induced Diabetes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diabetes mellitus induced by PREGNANCY but resolved at the end of pregnancy. It does not include previously diagnosed diabetics who become pregnant (PREGNANCY IN DIABETICS). Gestational diabetes usually develops in late pregnancy when insulin antagonistic hormones peaks leading to INSULIN RESISTANCE; GLUCOSE INTOLERANCE; and HYPERGLYCEMIA.",
    "arabic_definition": "السُّكَّرِيُّ الحَمْلِيّ (الإنجليزية: Gestational diabetes) هي حالة يُصاب فيها الشخص غير المصاب بالسكري بارتفاع في مستوى سكر الدم أثناء الحمل. وعادةً ما يترافق سكري الحمل مع أعراض قليلة.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016640.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperemesis-gravidarum",
    "term_en": "Hyperemesis Gravidarum",
    "term_ar": "قيء مفرط حملي",
    "synonyms": [
      "Pernicious Vomiting of Pregnancy",
      "Pregnancy Pernicious Vomiting"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Intractable VOMITING that develops in early PREGNANCY and persists. This can lead to DEHYDRATION and WEIGHT LOSS.",
    "arabic_definition": "القيء المفرط الحملي (الإنجليزية: Hyperemesis gravidarum) هو شكل حاد من الغثيان والقيء خلال فترة الحمل، ويتميز بالتقيؤ المتكرر الذي يؤدي إلى تحدد كبير في القدرة على الأكل والشرب وإلى المضاعفات الناجمة من ذلك مثل التجفاف وسوء التغذية. من الطبيعي جدا في النصف الأول من الحمل الشعور بالغثيان المترافق أحيانا بالتقيؤ، ولكن يجب التمييز بين هذه الظواهر الشائعة مثل غثيان الصباح وبين ظاهرة القيء المفرط الحملي الأكثر ندرة.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006939.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interstitial-nephritis",
    "term_en": "Interstitial Nephritis",
    "term_ar": "التهاب الكلية الخلالي",
    "synonyms": [
      "Interstitial Nephritides",
      "Nephritides, Interstitial",
      "Nephritis, Tubulointerstitial",
      "Nephritides, Tubulointerstitial",
      "Tubulointerstitial Nephritides",
      "Tubulointerstitial Nephritis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the interstitial tissue of the kidney. This term is generally used for primary inflammation of KIDNEY TUBULES and/or surrounding interstitium. For primary inflammation of glomerular interstitium, see GLOMERULONEPHRITIS. Infiltration of the inflammatory cells into the interstitial compartment results in EDEMA, increased spaces between the tubules, and tubular renal dysfunction.",
    "arabic_definition": "التهاب الكلية الخلالي (أو التهاب الكلية الخلالي الانبوبي) هو شكل من أشكال التهاب الكلى، الذي يؤثر على النسيج الخلالي المحيط بالكلى. هذا المرض يمكن أن يكون إما حاد، وهذا يعني أنه يحدث فجأة، أو مزمن، وهذا يعني أنه دائم وينتهي في الفشل الكلوي في نهاية المطاف. (Interstitial Nephritis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009395.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "klinefelter-syndrome",
    "term_en": "Klinefelter Syndrome",
    "term_ar": "متلازمة كلاينفيلتر",
    "synonyms": [
      "Klinefelter Syndromes",
      "Syndrome, Klinefelter",
      "Syndromes, Klinefelter",
      "Klinefelter's Syndrome",
      "Klinefelters Syndrome",
      "Syndrome, Klinefelter's",
      "XXY Syndrome",
      "Syndromes, XXY"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of male HYPOGONADISM, characterized by the presence of an extra X CHROMOSOME, small TESTES, seminiferous tubule dysgenesis, elevated levels of GONADOTROPINS, low serum TESTOSTERONE, underdeveloped secondary sex characteristics, and male infertility (INFERTILITY, MALE). Patients tend to have long legs and a slim, tall stature. GYNECOMASTIA is present in many of the patients. The classic form has the karyotype 47,XXY. Several karyotype variants include 48,XXYY; 48,XXXY; 49,XXXXY, and mosaic patterns ( 46,XY/47,XXY; 47,XXY/48,XXXY, etc.).",
    "arabic_definition": "متلازمة كلاينفيلتر أو متلازمة كلاينفلتر (الإنجليزية: Klinefelter's syndrome) هي متلازمة توجد في الذكور الذين يمتلكون صبغ (X) (الإنجليزية: X chromosome) زائد في خلاياهم، ليصبح العدد 44+XXY بدلا من 44+XY. وسميت على اسم الدكتور هاري كلاينفلتر الذي وصفها لأول مرة عام 1942، وتحدث نتيجة عدم انتظام في توزيع الصبغيات أثناء عملية الانقسام الميوزي للبويضات في الأنثى حيث في بعض الحالات النادرة جدا يحدث ان تلتصق أصباغ (X) ببعضها أثناء الانقسام الميوزي بالتحديد عند الطور الاستوائي حيث بعدها لا تستطيع أزواج الكروموسومات أن تنفصل عن بعضها مما ينتج عنه بويضات تركيبها (22+xx)، وأخرى (22+0) فينتج عن اخصاب الأولى بحيوان منوي تركيبه (22+y) ذكر كلاينفلتر، أما إن كان تركيب الحيوان المنوي (22+x) فإن النتاج سيكون أنثى عادية لديها حالة تضاعف جنسي. متلازمة كلاينفيلتر{47، XXY } أو متلازمة XXY هي الحالة التي يكون لدى الإنسان الذكر فيها كروموسوم الجنس X زائدا. (Klinefelter Syndrome)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007713.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "androgen-insensitivity-syndrome",
    "term_en": "Androgen-Insensitivity Syndrome",
    "term_ar": "متلازمة عدم الحساسية للأندروجين",
    "synonyms": [
      "Androgen-Insensitivity Syndromes",
      "Insensitivity Syndrome, Androgen",
      "Insensitivity Syndromes, Androgen",
      "Androgen Resistance Syndrome",
      "Androgen Resistance Syndromes",
      "Resistance Syndrome, Androgen",
      "Resistance Syndromes, Androgen",
      "Male Pseudohermaphroditism Due to Androgen Insensitivity"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder of sexual development transmitted as an X-linked recessive trait. These patients have a karyotype of 46,XY with end-organ resistance to androgen due to mutations in the androgen receptor (RECEPTORS, ANDROGEN) gene. Severity of the defect in receptor quantity or quality correlates with their phenotypes. In these genetic males, the phenotypic spectrum ranges from those with normal female external genitalia, through those with genital ambiguity as in Reifenstein Syndrome, to that of a normal male with INFERTILITY.",
    "arabic_definition": "متلازمة عدم الحساسيّة للأندروجين (AIS) هي مجموعة من الاضطرابات الخاصة بتنمية الجنس الناجمة عن طفرة في ترميز (تشفير) الجينات مستقبلات الاندروجين.(3) تتفاوت مجموعة الاضطرابات الناتجة طبقا لتركيب وحساسية المستقبل الشاذ. تنطوي معظم أنواع متلازمة حساسية الاندروجين (متلازمة هرمون التذكير) على درجات مختلفة من قصور التذكير و/ أو العقم في الأشخاص (س ص) من أي نوع من أنوع الجنس. (Androgen-Insensitivity Syndrome)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013734.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pelvic-floor-disorders",
    "term_en": "Pelvic Floor Disorders",
    "term_ar": "ضعف قاع الحوض",
    "synonyms": [
      "Disorder, Pelvic Floor",
      "Disorders, Pelvic Floor",
      "Pelvic Floor Disorder",
      "Pelvic Floor Diseases",
      "Disease, Pelvic Floor",
      "Diseases, Pelvic Floor",
      "Pelvic Floor Disease",
      "Pelvic floor dysfunction"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Injury, weakening, or PROLAPSE of the pelvic muscles, surrounding connective tissues or ligaments (PELVIC FLOOR).",
    "arabic_definition": "اضطرابات قاع الحوض، والمعروفة أيضًا باسم ضعف قاع الحوض، هي مجموعة من الحالات التي يُعتقد أنها تحدث عندما لا تعمل عضلات قاع الحوض بشكل صحيح. قد تشمل الأعراض ألمًا في الحوض أو ضغطًا أو ألمًا أثناء ممارسة الجنس أو سلس البول أو البراز أو الإمساك أو تدلي أعضاء الحوض. (Pelvic Floor Disorders)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059952.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "membranous-glomerulonephritis",
    "term_en": "Membranous Glomerulonephritis",
    "term_ar": "التهاب كبيبات الكلى الغشائي",
    "synonyms": [
      "Glomerulonephritides, Membranous",
      "Membranous Glomerulonephritides",
      "Extramembranous Glomerulopathy",
      "Glomerulopathy, Extramembranous",
      "Membranous Glomerulonephropathy",
      "Glomerulonephropathy, Membranous",
      "Membranous Glomerulopathy",
      "Glomerulopathy, Membranous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of glomerulonephritis that is characterized by the accumulation of immune deposits (COMPLEMENT MEMBRANE ATTACK COMPLEX) on the outer aspect of the GLOMERULAR BASEMENT MEMBRANE. It progresses from subepithelial dense deposits, to basement membrane reaction and eventual thickening of the basement membrane.",
    "arabic_definition": "التهاب كبيبات الكلى الغشائي هو مرض كلوي مترقٍّ ببطء، يصيب بشكل أساسي الأشخاص الذين تتراوح أعمارهم ما بين الثلاثين والخمسين عامًا، القوقازيين عادةً. هو السبب الثاني الأكثر شيوعًا للمتلازمة الكلوية (النفروزية أو الكلائية) لدى البالغين بعد تصلّب الكُبيبات القطعي البؤري (FSGC). (Membranous Glomerulonephritis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015433.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "schistosomiasis-haematobia",
    "term_en": "Schistosomiasis haematobia",
    "term_ar": "بلهارسية دموية",
    "synonyms": [
      "Schistosoma haematobia Infection",
      "Infection, Schistosoma haematobia",
      "Infections, Schistosoma haematobia",
      "Schistosoma haematobia Infections",
      "Schistosomiasis haematobium",
      "Schistosomiasis, Urinary",
      "Schistosomiases, Urinary",
      "Urinary Schistosomiases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A human disease caused by the infection of parasitic worms SCHISTOSOMA HAEMATOBIUM. It is endemic in AFRICA and parts of the MIDDLE EAST. Tissue damages most often occur in the URINARY TRACT, specifically the URINARY BLADDER.",
    "arabic_definition": "بلهارسية دموية (الإنجليزية: Schistosoma haematobium) ينتشر الداء في الشرق الأوسط و الهند ، البرتغال و أفريقيا. (Schistosomiasis haematobia)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012553.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "renal-tubular-acidosis",
    "term_en": "Renal Tubular Acidosis",
    "term_ar": "حماض نبيبي كلوي",
    "synonyms": [
      "Renal Tubular Acidosis, Type I",
      "Acidosis, Renal Tubular, Type I",
      "Type I Renal Tubular Acidosis",
      "Classic Distal Renal Tubular Acidosis",
      "Renal Tubular Acidosis, Distal, Autosomal Dominant",
      "Renal Tubular Acidosis I",
      "Autosomal Dominant Distal Renal Tubular Acidosis",
      "Renal Tubular Acidosis 1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of genetic disorders of the KIDNEY TUBULES characterized by the accumulation of metabolically produced acids with elevated plasma chloride, hyperchloremic metabolic ACIDOSIS. Defective renal acidification of URINE (proximal tubules) or low renal acid excretion (distal tubules) can lead to complications such as HYPOKALEMIA, hypercalcinuria with NEPHROLITHIASIS and NEPHROCALCINOSIS, and RICKETS.",
    "arabic_definition": "الحماض النُّبَيبي الكُلوي (الإنجليزية: Renal Tubular Acidosis) أو (RTA) هو حالة مرضية تنشأ عن خلل في عملية امتصاص النبيبات للبيكربونات أو خلل في إفراز النبيبات للهيدروجين، ويشمل عدة متلازمات، تتميز كلها بحماض أيضي،.في فسيولوجية الكلى، عندما يتم ترشيح الدم بواسطة الكلى، يمرر المرشح عبر أنابيب الكليون، مما يسمح بتبادل الأملاح، والمعادلات الحمضية، والمذيبات الأخرى قبل أن تصرف في المثانة كبول. قد يحدث الحماض الأيضي الناتج من الحماض النبيبي الكلوي إما بسبب الفشل في إعادة امتصاص أيونات بيكربونات كافية (والتي تكون قلوية) من المرشح في الجزء الأول من الكليون (النبيب القريب) أو عن طريق إفراز كمية غير كافية من أيونات الهيدروجين (التي تكون حمضية).",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000141.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "membranoproliferative-glomerulonephritis",
    "term_en": "Membranoproliferative Glomerulonephritis",
    "term_ar": "التهاب كبيبات كلى غشائي تكاثري",
    "synonyms": [
      "Glomerulonephritides, Membranoproliferative",
      "Membranoproliferative Glomerulonephritides",
      "Glomerulonephritis, Mesangiocapillary",
      "Mesangiocapillary Glomerulonephritides",
      "Mesangiocapillary Glomerulonephritis",
      "MPGN Membranoproliferative Glomerulonephritis",
      "Glomerulonephritides, MPGN Membranoproliferative",
      "Glomerulonephritis, MPGN Membranoproliferative"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chronic glomerulonephritis characterized histologically by proliferation of MESANGIAL CELLS, increase in the MESANGIAL EXTRACELLULAR MATRIX, and a thickening of the glomerular capillary walls. This may appear as a primary disorder or secondary to other diseases including infections and autoimmune disease SYSTEMIC LUPUS ERYTHEMATOSUS. Various subtypes are classified by their abnormal ultrastructures and immune deposits. Hypocomplementemia is a characteristic feature of all types of MPGN.",
    "arabic_definition": "التهاب كبيبات الكلى الغشائي التكاثري هو التهاب كبيبات الكلى الناجم عن ترسبات في ثخانات المسراق الكبيبي والغشاء القاعدي، ما يؤدي إلى تفعيل المتممة وإتلاف الكبيبات. يشكل التهاب كبيبات الكلى الغشائي التكاثري نحو 4% من الأسباب الكلوية الأولية للمتلازمة الكلوية عند الأطفال و7%عند البالغين. (Membranoproliferative Glomerulonephritis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015432.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meconium-aspiration-syndrome",
    "term_en": "Meconium Aspiration Syndrome",
    "term_ar": "متلازمة شفط العقي",
    "synonyms": [
      "Aspiration Syndrome, Meconium",
      "Syndrome, Meconium Aspiration",
      "Aspiration, Meconium",
      "Meconium Aspiration",
      "Meconium Inhalation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by inhalation of MECONIUM into the LUNG of FETUS or NEWBORN, usually due to vigorous respiratory movements during difficult PARTURITION or respiratory system abnormalities. Meconium aspirate may block small airways leading to difficulties in PULMONARY GAS EXCHANGE and ASPIRATION PNEUMONIA.",
    "arabic_definition": "متلازمة شفط العقي (الإنجليزية: Meconium aspiration syndrome) تعرف أيضا بالشفط الوليدي للعقي وهي حالة طبية تصيب الرضع الوليدين. تحدث هذه المتلازمة عند وجود مادة العقي في رئتي هؤلاء الأطفال قبل أو بعد الولادة.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008471.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pelvic-inflammatory-disease",
    "term_en": "Pelvic Inflammatory Disease",
    "term_ar": "مرض التهاب الحوض",
    "synonyms": [
      "Disease, Pelvic Inflammatory",
      "Diseases, Pelvic Inflammatory",
      "Inflammatory Diseases, Pelvic",
      "Pelvic Inflammatory Diseases",
      "Inflammatory Disease, Pelvic",
      "Inflammatory Pelvic Disease",
      "Disease, Inflammatory Pelvic",
      "Diseases, Inflammatory Pelvic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A spectrum of inflammation involving the female upper genital tract and the supporting tissues. It is usually caused by an ascending infection of organisms from the endocervix. Infection may be confined to the uterus (ENDOMETRITIS), the FALLOPIAN TUBES; (SALPINGITIS); the ovaries (OOPHORITIS), the supporting ligaments (PARAMETRITIS), or may involve several of the above uterine appendages. Such inflammation can lead to functional impairment and infertility.",
    "arabic_definition": "مرض التهاب الحوض (بالإنجليزية pelvic inflammatory disease) هي تلك الالتهابات التي تشمل الرحم وقناتي فالوب (أو البوقين) والمبيضين والأنسجة المحيطة بها والغشاء البريتوني المبطن لها والحوض. قد لا يُعاني المريض أيا من الأعراض في كثير من الأحيان.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000292.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chronic-renal-insufficiency",
    "term_en": "Chronic Renal Insufficiency",
    "term_ar": "مرض الكلى المزمن",
    "synonyms": [
      "Chronic Renal Insufficiencies",
      "Renal Insufficiencies, Chronic",
      "Chronic Kidney Insufficiency",
      "Chronic Kidney Insufficiencies",
      "Kidney Insufficiencies, Chronic",
      "Kidney Insufficiency, Chronic",
      "Chronic Kidney Diseases",
      "Chronic Kidney Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Conditions in which the KIDNEYS perform below the normal level for more than three months. Chronic kidney insufficiency is classified by five stages according to the decline in GLOMERULAR FILTRATION RATE and the degree of kidney damage (as measured by the level of PROTEINURIA). The most severe form is the end-stage renal disease (CHRONIC KIDNEY FAILURE). (Kidney Foundation: Kidney Disease Outcome Quality Initiative, 2002)",
    "arabic_definition": "مرض الكلى المزمن هو نوع من أمراض الكلى يحدث فيه فقدان تدريجي لوظائف الكلى على مدى أشهر إلى سنوات. في البداية لا توجد أعراض بشكل عام؛ في وقت لاحق، قد تشمل الأعراض تورم الساق والشعور بالتعب والقيء وفقدان الشهية والارتباك. (Chronic Renal Insufficiency)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051436.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fetal-alcohol-spectrum-disorders",
    "term_en": "Fetal Alcohol Spectrum Disorders",
    "term_ar": "متلازمة الجنين الكحولي",
    "synonyms": [
      "FASD",
      "FASDs",
      "Fetal Alcohol Spectrum Disorder",
      "Fetal Alcohol Syndrome",
      "Syndrome, Fetal Alcohol",
      "Alcohol Related Neurodevelopmental Disorder",
      "FAE (Fetal Alcohol Effects)",
      "FAEs (Fetal Alcohol Effects)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An umbrella term used to describe a pattern of disabilities and abnormalities that result from fetal exposure to ETHANOL during pregnancy. It encompasses a phenotypic range that can vary greatly between individuals, but reliably includes one or more of the following: characteristic facial dysmorphism, FETAL GROWTH RETARDATION, central nervous system abnormalities, cognitive and/or behavioral dysfunction, BIRTH DEFECTS. The level of maternal alcohol consumption does not necessarily correlate directly with disease severity.",
    "arabic_definition": "اضطرابات طيف الكحول الجنينية (اختصارًا FASDs) هي مجموعة من المشاكل التي قد تحدث للطفل إذا كانت والدته تشرب الكحول اثناء حملها أو في الفترة التي تسبق الحمل. هذه المشكلات تظهر على شكل اعراض وعلامات تتضمن المظهر غير الطبيعي، قصر القامة، الوزن القليل للجسم، حجم الراس الصغير، عدم تناسق المظهر، انخفاض مستوى الذكاء، مشاكل سلوكية، ومشاكل في السمع والرؤية. (Fetal Alcohol Spectrum Disorders)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063647.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ovarian-hyperstimulation-syndrome",
    "term_en": "Ovarian Hyperstimulation Syndrome",
    "term_ar": "متلازمة فرط التنبيه المبيضي",
    "synonyms": [
      "Hyperstimulation Syndrome, Ovarian",
      "Hyperstimulation Syndromes, Ovarian",
      "Ovarian Hyperstimulation Syndromes",
      "Ovarian Hyperstimulation Syndrome, Familial Gestational Spontaneous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A complication of OVULATION INDUCTION in infertility treatment. It is graded by the severity of symptoms which include OVARY enlargement, multiple OVARIAN FOLLICLES; OVARIAN CYSTS; ASCITES; and generalized EDEMA. The full-blown syndrome may lead to RENAL FAILURE, respiratory distress, and even DEATH. Increased capillary permeability is caused by the vasoactive substances, such as VASCULAR ENDOTHELIAL GROWTH FACTORS, secreted by the overly-stimulated OVARIES.",
    "arabic_definition": "متلازمة فرط تنبيه المبيضي هي متلازمة طبية تحدث لبعض النساء اللواتي يتناولن أدوية الخصوبة التي تعمل على تنبيه المبيض لتحسين عملية التبويض، كما قد تحدث في حالات نادرة جدًا لبعض النساء دون تناول أدوية، وتظهر معظم الحالات بشكل بسيط، ونادرًا ما تكون الحالة شديدة بشكل يمكن أن يؤدي إلى مرض خطير أو حتى حدوث وفاة. (Ovarian Hyperstimulation Syndrome)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016471.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "focal-segmental-glomerulosclerosis",
    "term_en": "Focal Segmental Glomerulosclerosis",
    "term_ar": "تصلب الكبب الكلوية القطاعي البؤري",
    "synonyms": [
      "Segmental Glomerulosclerosis, Focal",
      "Glomerulonephritis, Focal Sclerosing",
      "Focal Sclerosing Glomerulonephritides",
      "Focal Sclerosing Glomerulonephritis",
      "Glomerulonephritides, Focal Sclerosing",
      "Sclerosing Glomerulonephritides, Focal",
      "Sclerosing Glomerulonephritis, Focal",
      "Glomerulosclerosis, Focal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clinicopathological syndrome or diagnostic term for a type of glomerular injury that has multiple causes, primary or secondary. Clinical features include PROTEINURIA, reduced GLOMERULAR FILTRATION RATE, and EDEMA. Kidney biopsy initially indicates focal segmental glomerular consolidation (hyalinosis) or scarring which can progress to globally sclerotic glomeruli leading to eventual KIDNEY FAILURE.",
    "arabic_definition": "تصلب الكبب الكلوية القطاعي البؤري (اختصارًا FSGS) هو أحد أسباب المتلازمة الكلوية عند الأطفال والمراهقين فضلًا عن كونه السبب الرئيسي لفشل الكلى عند البالغين. يُعرف تصلب الكبب الكلوية القطاعي البؤري أيضًا باسم التصلب الكبي البؤري أو التصلب الكبي العقدي البؤري، وهو يمثل نحو سدس حالات المتلازمة الكلوية. (Focal Segmental Glomerulosclerosis)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005923.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nephrogenic-diabetes-insipidus",
    "term_en": "Nephrogenic Diabetes Insipidus",
    "term_ar": "مرض السكري الكاذب كلوي المنشأ",
    "synonyms": [
      "Congenital Nephrogenic Diabetes Insipidus",
      "Acquired Nephrogenic Diabetes Insipidus",
      "Nephrogenic Diabetes Insipidus, Type I",
      "Diabetes Insipidus, Nephrogenic, Type I",
      "Diabetes Insipidus, Nephrogenic, X-Linked",
      "Diabetes Insipidus, Nephrogenic, Type 1",
      "Nephrogenic Diabetes Insipidus, Type II",
      "Diabetes Insipidus, Nephrogenic, Autosomal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genetic or acquired polyuric disorder characterized by persistent hypotonic urine and HYPOKALEMIA. This condition is due to renal tubular insensitivity to VASOPRESSIN and failure to reduce urine volume. It may be the result of mutations of genes encoding VASOPRESSIN RECEPTORS or AQUAPORIN-2; KIDNEY DISEASES; adverse drug effects; or complications from PREGNANCY.",
    "arabic_definition": "مرض السكري الكاذب كلوي المنشأ (المعروف كذلك باسم مرض السكري الكاذب الكلوي) (بالإنجليزية: Nephrogenic Diabetes Insipidus = NDI) هو أحد أنواع مرض السكري الكاذب يرجع بشكل أساسي لخلل في الكلية. وهو يختلف عن مرض السكري الكاذب عصبي المنشأ، الذي ينتج عن نقص مستوى هرمون فازوبرسين (الهرمون المضاد للتبول).",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018500.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pubic-symphysis-diastasis",
    "term_en": "Pubic Symphysis Diastasis",
    "term_ar": "انبساط ارتفاق العانة",
    "synonyms": [
      "Diastases, Pubic Symphysis",
      "Diastasis, Pubic Symphysis",
      "Pubic Symphysis Diastases",
      "Symphysis Pubis Diastasis",
      "Diastases, Symphysis Pubis",
      "Diastasis, Symphysis Pubis",
      "Symphysis Pubis Diastases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Separation of the PUBIC SYMPHYSIS. It is an uncommon complication of CHILDBIRTH causing postpartum PAIN, but it can also arise from other causes.",
    "arabic_definition": "انبساط ارتفاق العانة (الإنجليزية: Pubic symphysis diastasis) (المعروف أيضًا باسم الانفصال المفصلي العاني) هو انفصال العظام العانيتين المتصلة عادة، كما يحدث في خلع العظام، دون حدوث كسر، ويقاس شعاعيًا بأكثر من 10 ملم. يُعد انبساط ارتفاق العانة من الحالات النادرة المرتبطة بالولادة، ويحدث بمعدل 1 حالة لكل 300 إلى 30,000 ولادة.",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046548.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "disorders-of-sex-development",
    "term_en": "Disorders of Sex Development",
    "term_ar": "اضطرابات التطور الجنسي",
    "synonyms": [
      "Sex Development Disorders",
      "Sex Development Disorder",
      "Sexual Development Disorders",
      "Sexual Development Disorder",
      "Disorders of Sexual Development",
      "Pseudohermaphroditism",
      "Hermaphroditism",
      "Intersexuality"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "In gonochoristic organisms, congenital conditions in which development of chromosomal, gonadal, or anatomical sex is atypical. Effects from exposure to abnormal levels of GONADAL HORMONES in the maternal environment, or disruption of the function of those hormones by ENDOCRINE DISRUPTORS are included.",
    "arabic_definition": "اضطرابات التطور الجنسي (اختصارًا DSDs) هي الحالات الطبية التي تنطوي على الجهاز التناسلي. وبشكل أكثر تحديدًا، تشير هذه المصطلحات إلى «الظروف الخلقية التي يكون فيها تطور الجنس الكروموسومي أو التناسلي أو التشريحي غير نمطي.» («الخلقية» تعني المكتسبة قبل الولادة أثناء تطور الجنين داخل رحم الأمّ). (Disorders of Sex Development)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012734.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "atypical-hemolytic-uremic-syndrome",
    "term_en": "Atypical Hemolytic Uremic Syndrome",
    "term_ar": "متلازمة انحلال الدم اليوريمي اللانمطي",
    "synonyms": [
      "Atypical Hemolytic-Uremic Syndromes",
      "Hemolytic-Uremic Syndrome, Atypical",
      "Hemolytic-Uremic Syndromes, Atypical",
      "Syndrome, Atypical Hemolytic-Uremic",
      "Syndromes, Atypical Hemolytic-Uremic",
      "Non-Stx-Hus",
      "Nonenteropathic HUS"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An hereditary hemolytic uremic syndrome associated with variations in the gene that encodes COMPLEMENT FACTOR H, or the related proteins CFHR1 and CFHR3. Disease often progresses to CHRONIC KIDNEY FAILURE without the prodromal symptoms of ENTEROCOLITIS and DIARRHEA that characterize typical hemolytic uremic syndrome.",
    "arabic_definition": "متلازمة انحلال الدم اليوريمي اللانمطي هو مرض نادر للغاية يشكل تهديداً على الحياة، غالباً ما يكون وراثي المنشأ، وفي معظم الحالات تتم السيطرة عليه بشكل كبير عن طريق دواء إيكوليزوماب، الذي يسمح بنسبة تعافٍ كبيرة. (Atypical Hemolytic Uremic Syndrome)",
    "specialty": "Obstetrics & Gynecology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065766.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tattooing",
    "term_en": "Tattooing",
    "term_ar": "وشم",
    "synonyms": [
      "Tattoo",
      "Tattoos"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The indelible marking of TISSUES, primarily SKIN, by pricking it with NEEDLES to imbed various COLORING AGENTS. Tattooing of the CORNEA is done to colorize LEUKOMA spots.",
    "arabic_definition": "الوشم هو شكل من أشكال التعديل الجسدي ويتم بوضع علامة ثابتة في الجسم وذلك بغرز الجلد بالابرة ثم وضع الصبغ عن طريق هذه الفتحات والجروح ليبقى داخل الجلد ولا يزول. يعتبر الوشم على جسم الإنسان كنوع من التعديل الجسماني والزخرفة، بينما على الحيوان فهو أكثر شيوعاً ويكون لأغراض تحديد الهوية أو المالك لهذا الحيوان. (Tattooing)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013653.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mastectomy",
    "term_en": "Mastectomy",
    "term_ar": "استئصال الثدي",
    "synonyms": [
      "Mastectomies",
      "Mammectomy",
      "Mammectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical procedure to remove one or both breasts.",
    "arabic_definition": "استِئْصَالُ الثَّدي (الإنجليزية: Mastectomy) عملية جراحية لإزالة الثدي، وفي بعض الحالات تزال أيضًا الأنسجة المحيطة بالثدي للتخلص من ورم سرطاني ومنع انتشاره. وهناك ثلاثة أنواع من عمليات استئصال الثدي: 1- جذري 2- بسيط 3-جذري معدل.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008408.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "drainage",
    "term_en": "Drainage",
    "term_ar": "تصريف المياه",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The removal of fluids or discharges from the body, such as from a wound, sore, or cavity.",
    "arabic_definition": "التصريف هو الاستنضاب التخلص من المياه السطحية بشكل طبيعي أو بفعل الإنسان. ومعناها لغة صرف الشيء أي أبعده، وتصريف الماء لغة انصرافه. (Drainage)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004322.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "castration",
    "term_en": "Castration",
    "term_ar": "إخصاء",
    "synonyms": [
      "Castrations",
      "Gonadectomy",
      "Gonadectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal or artificial destruction of gonads.",
    "arabic_definition": "الإخْصَاء أو الخَصْيُ أو الخِصَاء أو الضمور (الإنجليزية: Castration) هي أي عملية سواء جراحية أو كيميائية أو غيرها والتي ينتج عنها فقدان الذكر لوظائف خصيتيه: الغدد التناسلية الذكرية. الإخصاء الجراحي هو استئصال ثنائي (استئصال كلا الخصيتين)، بينما يستخدم الإخصاء الكيميائي الأدوية الصيدلانية لتعطيل الخصيتين.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002369.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vasectomy",
    "term_en": "Vasectomy",
    "term_ar": "استئصال الأسهر",
    "synonyms": [
      "Vasectomies",
      "Vas Ligation",
      "Ligations, Vas",
      "Ligation, Vas",
      "Vas Ligations",
      "Vas Occlusion",
      "Occlusions, Vas",
      "Occlusion, Vas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of the ductus deferens, or a portion of it. It is done in association with prostatectomy, or to induce infertility. (Dorland, 28th ed)",
    "arabic_definition": "استئصال الأسهر أو قطع القناة المنوية (الإنجليزية: Vasectomy) إجراء جراحي لتعقيم الذكور أو لمنع الحمل الدائم. في هذه العملية، يُقطع الأسهر الذكري ويُربط أو يُغلق لمنع الحيوانات المنوية من الدخول إلى الإحليل وبالتالي منع إخصاب الأنثى خلال الجماع.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014659.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystoscopy",
    "term_en": "Cystoscopy",
    "term_ar": "تنظير المثانة",
    "synonyms": [
      "Cystoscopies",
      "Cystoscopic Surgical Procedures",
      "Cystoscopic Surgical Procedure",
      "Procedure, Cystoscopic Surgical",
      "Procedures, Cystoscopic Surgical",
      "Surgical Procedure, Cystoscopic",
      "Cystoscopic Surgery",
      "Cystoscopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the urinary bladder.",
    "arabic_definition": "تنظير المثانة أو منظار المثانة (الإنجليزية: Cystoscopy) هو استخدام المناظير الطبية في بعض الأغراض التشخيصية والعلاجية الخاصة بالمثانة وذلك عن طريق إدخال المنظار الطبي من الإحليل (مجرى البول) وصولًا إلى المثانة، ويحتوي منظار المثانة على عدسات مثل التلسكوب أو المجهر. هذه العدسات تتيح للطبيب فحص السطح الداخلي للإحليل والمثانة البولية.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003558.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trephining",
    "term_en": "Trephining",
    "term_ar": "نقب الجمجمة",
    "synonyms": [
      "Trepanation",
      "Trepanations",
      "Trepanning",
      "Trepannings",
      "Trephination"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The removal of a circular disk of the cranium.",
    "arabic_definition": "ثقب الجمجمة أو نقب الجمجمة هي عملية جراحية أو تدخل جراحي لثقب وإحداث حفرة في جمجمة الإنسان لتعريض الأم الجافية (منطقة في الدماغ) للعلاج وكشف المشاكل الصحية المرتبطة بقحفية الدماغ. وقد تعني أيضًا إحداث أي ثقب في أي طبقة من طبقات جسم الإنسان بما فيها طبقة الأظافر ((أي الطبقة الواقعة تحت (الظفر). (Trephining)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014207.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endoscopy",
    "term_en": "Endoscopy",
    "term_ar": "تنظير داخلي",
    "synonyms": [
      "Surgical Procedures, Endoscopic",
      "Procedure, Endoscopic Surgical",
      "Procedures, Endoscopic Surgical",
      "Endoscopic Surgical Procedure",
      "Endoscopic Surgical Procedures",
      "Endoscopy, Surgical",
      "Surgical Endoscopy",
      "Surgical Procedure, Endoscopic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Procedures of applying ENDOSCOPES for disease diagnosis and treatment. Endoscopy involves passing an optical instrument through a small incision in the skin i.e., percutaneous; or through a natural orifice and along natural body pathways such as the digestive tract; and/or through an incision in the wall of a tubular structure or organ, i.e. transluminal, to examine or perform surgery on the interior parts of the body.",
    "arabic_definition": "التنظير الداخلي أو التنظير الباطني أو المِجوافيّة (الإنجليزية: Endoscopy) تقنية النظر إلى داخل الجسم لأسباب طبية باستخدام المنظار الداخلي (الإنجليزية: endoscope)\". وخلافا لمعظم أجهزة التصوير الطبية، يتم إدخال المناظير مباشرة في العضو المراد فحصه.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004724.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "suction",
    "term_en": "Suction",
    "term_ar": "شفط",
    "synonyms": [
      "Suctions",
      "Aspiration, Mechanical",
      "Aspirations, Mechanical",
      "Mechanical Aspiration",
      "Mechanical Aspirations",
      "Drainage, Suction",
      "Drainages, Suction",
      "Suction Drainage"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The removal of secretions, gas or fluid from hollow or tubular organs or cavities by means of a tube and a device that acts on negative pressure.",
    "arabic_definition": "الشفط أو المص أو السحب هو سريان سائل إلى فراغ جزئى، أو منطقة ضغط منخفض. الضغط المنحدر بين هذه المنطقة والضغط المحيط سيدفع المادة إلى ناحية منطقة الضغط المنخفض. (Suction)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013396.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myotomy",
    "term_en": "Myotomy",
    "term_ar": "قطع العضلة",
    "synonyms": [
      "Myotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical incision of the muscle.",
    "arabic_definition": "قطع العضلة أو بضع العضل أو سلخ العضلة (الإنجليزية: Myotomy) هو مُصطلح يصف إجراء جراحي يتم فيه قطع عضلة ما، ومن أكثر الأمثلة شيوعاً عليها قطع عضلة هيلر.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074433.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colposcopy",
    "term_en": "Colposcopy",
    "term_ar": "تنظير المهبل",
    "synonyms": [
      "Colposcopies",
      "Colposcopic Surgical Procedures",
      "Colposcopic Surgical Procedure",
      "Procedure, Colposcopic Surgical",
      "Procedures, Colposcopic Surgical",
      "Surgical Procedure, Colposcopic",
      "Colposcopic Surgery",
      "Colposcopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The examination, therapy or surgery of the cervix and vagina by means of a specially designed endoscope introduced vaginally.",
    "arabic_definition": "عملية منظار المهبل هي إجراء تشخيصي طبي لفحص صورة مكبرة ومضاءة لعنق الرحم وأنسجة المهبل والفرج. يمكن من خلال فحص هذه المنطقة اكتشاف العديد من الآفات السرطانية الخبيثة وقبل السرطانية والتي يكون لها خصائص ملموسة تتم العملية عن طريق استخدام المنظار المهبلي، والذي يتيح صورة مكبرة لهذه المنطقة، مما يسمح لأخصائي المناظير تمييز الأنسجة الطبيعية من غير الطبيعية بصريا وأخذ العينات الموجهة لإجراء فحوصات مرضية أخرى. (Colposcopy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003127.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "episiotomy",
    "term_en": "Episiotomy",
    "term_ar": "بضع الفرج",
    "synonyms": [
      "Episiotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An incision of the posterior vaginal wall and a portion of the pudenda which enlarges the vaginal introitus to facilitate delivery and prevent lacerations.",
    "arabic_definition": "بضع الفرج أو شق العجان أو قصه أو بضعه (الإنجليزية: episiotomy) هو شق جراحي مخطط على العِجان وجدار المهبل الخلفي خلال المرحلة الثانية من المخاض. ويتم عمل الشق الذي يمكن القيام به بزاوية 90 درجة من الفرج باتجاه فتحة الشرج أو في زاوية جانبية تحت مخدر موضعي (التخدير الفرجي)، ويتم تخييطها بعد الولادة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004841.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cautery",
    "term_en": "Cautery",
    "term_ar": "كي",
    "synonyms": [
      "Cauterization",
      "Cauterizations",
      "كي (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The application of a caustic substance, a hot instrument, an electric current, or other agent to control bleeding while removing or destroying tissue.",
    "arabic_definition": "الكيّ هو ممارسة أو تقنية طبية تعتمد على حرق جزء من الجسم بهدف إزالة جزء منه أو إغلاقه. ويؤدي ذلك إلى تدمير بعض الأنسجة في محاولة للحد من النزيف أو التلف، أو إزالة نمو غير مرغوب فيه، أو تقليل أضرار طبية محتملة أخرى، مثل العدوى في حال عدم توفر المضادات الحيوية. (Cautery)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002425.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vitrectomy",
    "term_en": "Vitrectomy",
    "term_ar": "استئصال الزجاجية",
    "synonyms": [
      "Vitrectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Removal of the whole or part of the vitreous body in treating endophthalmitis, diabetic retinopathy, retinal detachment, intraocular foreign bodies, and some types of glaucoma.",
    "arabic_definition": "استئصال الزجاجية هي عملية جراحية لإزالة بعض أو كُلّ الخِلط الزجاجي من العين، استئصال الزجاجية الأمامي يتضمن إزالة أجزاء صغيرة من الخلط الزجاجي من التركيبات الأمامية للعينفي العادة لأنها متشابكة في عدسة العين أو أجزاء أخرى. استئصال الزجاجية للجزء المسطح هو مصطلح عام يشير إلى مجموعة من العمليات يتم إنجازها في جزء أعمق من العين. (Vitrectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014821.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laparotomy",
    "term_en": "Laparotomy",
    "term_ar": "استكشاف بطني",
    "synonyms": [
      "Laparotomies",
      "Minilaparotomy",
      "Minilaparotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Incision into the side of the abdomen between the ribs and pelvis.",
    "arabic_definition": "الاستكشاف البطني (الإنجليزية: Abdominal exploration) هو إجراء جراحي يجرى لفحص البطن. بشكل عام الجراحة التي تختص بفتح البطن يطلق عليها علميا اسم laparotomy.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007813.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diskectomy",
    "term_en": "Diskectomy",
    "term_ar": "استئصال القرص",
    "synonyms": [
      "Diskectomies",
      "Discectomy",
      "Discectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision, in part or whole, of an INTERVERTEBRAL DISC. The most common indication is disk displacement or herniation. In addition to standard surgical removal, it can be performed by percutaneous diskectomy (DISKECTOMY, PERCUTANEOUS) or by laparoscopic diskectomy, the former being the more common.",
    "arabic_definition": "استئصال القرص (الإنجليزية: Discectomy)، هو الإزالة الجراحية لأجزاء القرص الشاذة الضاغطة على الجذور العصبية أو النخاع الشوكي، ويسمى الاستئصال المفتوح للقرص عند إجراء العملية من خلال شق جلدي يقيس 1/2 بوصة أو أكثر. يتضمن الإجراء إزالة الجزء الذي يسبب الألم أو الضعف أو التنميل، نتيجة ضغطه على الحبل الشوكي أو الأعصاب المتصلة به. (Diskectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017586.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteotomy",
    "term_en": "Osteotomy",
    "term_ar": "قطع العظم",
    "synonyms": [
      "Osteotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The surgical cutting of a bone. (Dorland, 28th ed)",
    "arabic_definition": "قَطْعُ العَظْم (الإنجليزية: Osteotomy)هو عملية جراحية يجري فيها قطع جزء من العظم بغرض تقصيره أو تطويله أو تغيير ارتصافه. قد يجرى القطع العظمي لإصلاح إبهام القدم الأروح (الإنجليزية: hallux valgus) أو لتقويم عظم معيب الالتئام بعد حادثة كسر عظم، كما يُستخدم في تصحيح حالات الورك الفحجاء (الإنجليزية: coxa vara) والركبة الروحاء (الإنجليزية: genu valgum) والركبة الفحجاء (الإنجليزية: genu varum) وتجرى العملية عادة تحت تأثير تخدير عام.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010027.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cordotomy",
    "term_en": "Cordotomy",
    "term_ar": "قطع الحبل الشوكي",
    "synonyms": [
      "Cordotomies",
      "Chordotomy",
      "Chordotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any operation on the spinal cord. (Stedman, 26th ed)",
    "arabic_definition": "قطع الحبل الشوكي (أواستئصال الحبل الشوكي ) هو إجراء جراحي يعمل على تعطيل مسارات محددة موصلة للألم في النخاع الشوكي، وذلك لتحقيق فقدان الإحساس بالألم ودرجة الحرارة. يتم إجراء هذا الإجراء عادة على المرضى الذين يعانون من آلام شديدة بسبب السرطان أو أمراض أخرى غير قابلة للشفاء. (Cordotomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002818.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orchiopexy",
    "term_en": "Orchiopexy",
    "term_ar": "تثبيت الخصية",
    "synonyms": [
      "Orchiopexies",
      "Orchidopexy",
      "Orchidopexies",
      "Laparoscopic Orchiopexy",
      "Laparoscopic Orchiopexies",
      "Orchiopexies, Laparoscopic",
      "Orchiopexy, Laparoscopic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A surgical procedure in which an undescended testicle is sutured inside the SCROTUM in male infants or children to correct CRYPTORCHIDISM. Orchiopexy is also performed to treat TESTICULAR TORSION in adults and adolescents.",
    "arabic_definition": "تثبيت الخصية أو إنزال الخصية هي عملية جراحية لمعالجة حالة الخصية المعلقة ووضعها في موضعها الصحيح وهو كيس الصفن. وتُجرى هذه العملية أيضاً في حالات انفتال الخصية . (Orchiopexy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056126.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thymectomy",
    "term_en": "Thymectomy",
    "term_ar": "استئصال الغدة الزعترية",
    "synonyms": [
      "Thymectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of the thymus gland. (Dorland, 28th ed)",
    "arabic_definition": "استئصال التوتة أو استئصال الغدة الزعترية أو خزع التيموس هي عملية لإزالة الغدة الزعترية. عادة ما تؤدي إلى علاج الوهن العضلي الوبيل بمساعدة الأدوية بما في ذلك الستيرويد. (Thymectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013934.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colostomy",
    "term_en": "Colostomy",
    "term_ar": "فغر القولون",
    "synonyms": [
      "Colostomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The surgical construction of an opening between the colon and the surface of the body.",
    "arabic_definition": "فَغْر القولون أو تفويه القولون أو تفميم القولون (الإنجليزية: Colostomy) هي عملية جراحية تشمل توصيل جزء من القولون بجدار البطن الأمامي، تاركا للمريض فتحة بالبطن تسمى فغرة. تتكون هذه الفتحة من نهاية الجزء المسحوب من القولون من خلال الجرح القطعي في البطن، بعد أن تتم خياطته في الجلد عند أحرف هذا القطع.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003125.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "curettage",
    "term_en": "Curettage",
    "term_ar": "كشط",
    "synonyms": [
      "Curettages",
      "كشط (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A scraping, usually of the interior of a cavity or tract, for removal of new growth or other abnormal tissue, or to obtain material for tissue diagnosis. It is performed with a curet (curette), a spoon-shaped instrument designed for that purpose. (From Stedman, 25th ed &amp; Dorland, 27th ed)",
    "arabic_definition": "تشير كلمة التوسيع إلى توسيع عنق الرحم أما الكحت فهو إجراء جراحى يقوم فيه الجراح بإزالة جزء من بطانة الرحم و\\ أو محتويات الرحم سواء عن طريق الكشط أو الشفط. ويعتبر التوسيع والكحت إجراء تشخيصي لبعض أمراض الرحم وكذلك يستخدم في علاج حالات أخرى منها الإجهاض في الثلاث شهور الأولى من الحمل. (Curettage)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003475.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "craniotomy",
    "term_en": "Craniotomy",
    "term_ar": "حج القحف",
    "synonyms": [
      "Craniotomies",
      "Craniectomy",
      "Craniectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical incision into the cranium.",
    "arabic_definition": "حَجُّ القِحْف هو عملية جراحية يُزال فيها جزء من الجمجمة مؤقتاً للوصول إلى المخ، ويجب التفرقة بينها وبين عملية نقب الجمجمة، وقطع القحف (والتي لا يعاد فيها الجزء المستأصل من الجمجمة فوراً لينتفخ المخ مما يقلل الضغط داخل الجمجمة). (Craniotomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003399.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ostomy",
    "term_en": "Ostomy",
    "term_ar": "فغرة",
    "synonyms": [
      "Ostomies",
      "Stoma (medicine)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical construction of an artificial opening (stoma) for external fistulization of a duct or vessel by insertion of a tube with or without a supportive stent.",
    "arabic_definition": "الفغرة (الجمع فغرات، مشتقة من الكلمة اللاتينية στόμα \"mouth\") هي عبارة عن فتحة طبيعية أو جراحية تقوم بربط جزء من جوف الجسم بالبيئة الخارجية. ويتم استخدام لاحقة الفغر للإشارة إلى الإجراء الجراحي لإنشاء الفغرات، بينما يتم استخدام بادئة تشير إلى أن العضو أو المنطقة الخاصة بالعملية الجراحية. (Ostomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010030.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ileostomy",
    "term_en": "Ileostomy",
    "term_ar": "فغر اللفائفي",
    "synonyms": [
      "Ileostomies",
      "Loop Ileostomy",
      "Ileostomies, Loop",
      "Ileostomy, Loop",
      "Loop Ileostomies",
      "Continent Ileostomy",
      "Continent Ileostomies",
      "Ileostomies, Continent"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical creation of an external opening into the ILEUM for fecal diversion or drainage. This replacement for the RECTUM is usually created in patients with severe INFLAMMATORY BOWEL DISEASES. Loop (continent) or tube (incontinent) procedures are most often employed.",
    "arabic_definition": "فغر اللفائفي (الإنجليزية: Ileostomy) هي فغرة (أو فتحة جراحية) تجلب طرفًا أو جزءًا من الأمعاء الدقيقة (وبالتحديد اللفائفي) إلى سطح الجلد أو يمكن عمل الفتحة جراحيا. تطرح فضلات الأمعاء خارجا من خلال فغر اللفائفي إلى وسيلة جمع خارجية صناعية ملتصقة بالجلد.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007081.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fetoscopy",
    "term_en": "Fetoscopy",
    "term_ar": "تنظير الجنين",
    "synonyms": [
      "Fetoscopies",
      "Amnioscopic Surgical Procedures",
      "Amnioscopic Surgical Procedure",
      "Procedure, Amnioscopic Surgical",
      "Procedures, Amnioscopic Surgical",
      "Surgical Procedure, Amnioscopic",
      "Amnioscopic Surgery",
      "Amnioscopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the fetus and amniotic cavity through abdominal or uterine entry.",
    "arabic_definition": "تنظير الجنين هو إجراء تنظيري أثناء الحمل للسماح بالوصول الجراحي للجنين والتجويف السلوي (الأمنيوسي) والحبل السري وجانب الجنين من المشيمة. تُشق فتحة صغيرة (3-4 مم) في البطن، ويتم إدخال منظار داخلي من خلال جدار البطن والرحم في التجويف الأمنيوسي. (Fetoscopy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005332.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colectomy",
    "term_en": "Colectomy",
    "term_ar": "استئصال القولون",
    "synonyms": [
      "Colectomies",
      "Large Bowel Resection",
      "Large Bowel Resections",
      "Resection, Large Bowel",
      "Resections, Large Bowel",
      "Hemicolectomy",
      "Hemicolectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical resection of a portion of or the entire COLON.",
    "arabic_definition": "استئصال القولون (الإنجليزية: Colectomy) هو عملية جراحية لاستئصال الأمعاء الغليظة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003082.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "axotomy",
    "term_en": "Axotomy",
    "term_ar": "قطع المحور العصبي",
    "synonyms": [
      "Axotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Transection or severing of an axon. This type of denervation is used often in experimental studies on neuronal physiology and neuronal death or survival, toward an understanding of nervous system disease.",
    "arabic_definition": "قطع المحور العصبي أو قطع المحور العصبي هو عملية قطع أو قص محور الخلية العصبية. يُستخدم هذا النوع من إزالة التعصيب في الدراسات التجريبية التي تتقصى فيزيولوجيا الخلايا العصبية وموت الخلايا العصبية وبقائها لفهم أمراض الجهاز العصبي بشكل أفضل. (Axotomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019771.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystectomy",
    "term_en": "Cystectomy",
    "term_ar": "استئصال المثانة",
    "synonyms": [
      "Cystectomies",
      "Radical Cystectomy",
      "Cystectomy, Radical",
      "Radical Cystectomies",
      "Partial Cystectomy",
      "Cystectomy, Partial",
      "Partial Cystectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of the full or partial removal of the URINARY BLADDER.",
    "arabic_definition": "استئصال المثانة هو مصطلح طبي يعبّر عن إزالة كامل المثانة أو أجزاء منها جراحيًا. قد يُستخدَم أيضًا بشكل نادر ليعبّر عن إزالة كيسة. (Cystectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015653.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sternotomy",
    "term_en": "Sternotomy",
    "term_ar": "بضع القص الناصف",
    "synonyms": [
      "Sternotomies",
      "Median Sternotomy",
      "Median Sternotomies",
      "Sternotomies, Median",
      "Sternotomy, Median"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Making an incision in the STERNUM.",
    "arabic_definition": "بضع القص الناصف أو بضع القص المتوسط (الإنجليزية: Median sternotomy) هو عملية جراحية تهدف إلى شق القص كله، أو جزء منه.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056346.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystostomy",
    "term_en": "Cystostomy",
    "term_ar": "قسطرة فوق العانة",
    "synonyms": [
      "Cystostomies",
      "Vesicostomy",
      "Vesicostomies",
      "Suprapubic Cystostomy",
      "Cystostomies, Suprapubic",
      "Cystostomy, Suprapubic",
      "Suprapubic Cystostomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical creation of an opening (stoma) in the URINARY BLADDER for drainage.",
    "arabic_definition": "قسطرة فوق العانة أو فغر المثانة فوق العانة أو فغر المثانة (الإنجليزية: Suprapubic cystostomy) هو أنبوب يتم توصيله جراحيًا ما بين المثانة البولية والجلد. ويستخدم لتصريف البول من المثانة في حالات المرضى الذين يعانون من انسداد مجرى البول الطبيعي.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003559.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "iridectomy",
    "term_en": "Iridectomy",
    "term_ar": "قطع القزحية",
    "synonyms": [
      "Iridectomies",
      "Corectomy",
      "Corectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical removal of a section of the iris.",
    "arabic_definition": "قطع القزحية (الإنجليزية: Iridectomy) أو قطع قزحي أو خزع القزحية أو استئصال القزحية هو عمل جراحي يتم فيه استئصال جزء من القزحية. يتم تنفيذ هذا اللإجراء في علاج الجلوكوما والميلانوما.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D032801.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vagotomy",
    "term_en": "Vagotomy",
    "term_ar": "قطع المبهم",
    "synonyms": [
      "Vagotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The interruption or removal of any part of the vagus (10th cranial) nerve. Vagotomy may be performed for research or for therapeutic purposes.",
    "arabic_definition": "قطع المبهم هو استئصال كلي أو جزئي للعصب المبهم. (Vagotomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014628.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colpotomy",
    "term_en": "Colpotomy",
    "term_ar": "بزل الردبة المستقيمية الرحمية",
    "synonyms": [
      "Colpotomies",
      "Vaginotomy",
      "Vaginotomies",
      "Culdocentesis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An incision in the vagina.",
    "arabic_definition": "بزل الردبة المستقيمية الرحمية (الإنجليزية: Culdocentesis) هو إجراء طبي يتضمن عملية استخراج السوائل من كيس دوغلاس بواسطة إبرة. (Colpotomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020884.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhizotomy",
    "term_en": "Rhizotomy",
    "term_ar": "بضع الجذر",
    "synonyms": [
      "Rhizotomies",
      "Selective dorsal rhizotomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical interruption of a spinal or cranial nerve root. (From Dorland, 28th ed)",
    "arabic_definition": "بضع الجذر الانتقائي الظهري (إس دي آر)، والمعروف أيضًا باسم بضع الجذر (باللغة الإنجليزية: Rhizotomy)، بضع الجذر الظهري، أو بضع الجذر الخلفي الانتقائي، عملية جراحية عصبية تخرّب جذور الأعصاب المسببة للمشاكل في النخاع الشوكي بشكل انتقائي. ثبت هذا الإجراء جيدًا في الأدبيات بمثابة تدخل جراحي، ويستخدم لتخفيف الأعراض السلبية للحالات العصبية العضلية مثل الشلل المزدوج التشنجي وأشكال أخرى من الشلل الدماغي التشنجي.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019051.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastropexy",
    "term_en": "Gastropexy",
    "term_ar": "تثبيت المعدة",
    "synonyms": [
      "Gastropexis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical fixation of the stomach to the abdominal wall.",
    "arabic_definition": "تَثْبيتُ المَعِدَة (الإنجليزية: Gastropexy) هيَ عملية جراحية يتم فيها خياطة المعدة بجدار البطن أو بالحجاب الحاجز، وفي الأغلب تتم خياطة المعدة بالحجاب الحاجز كعلاج للارتجاع المعدي المريئي وذلك بهدف منع تحرك المَعدة إلى الأعلى نحو الصدر.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059485.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tenotomy",
    "term_en": "Tenotomy",
    "term_ar": "بضع الوتر",
    "synonyms": [
      "Tenotomies",
      "Tendon Lengthening",
      "Lengthenings, Tendon",
      "Lengthening, Tendon",
      "Tendon Lengthenings",
      "Tendon Release",
      "Releases, Tendon",
      "Release, Tendon"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical division of a tendon for relief of a deformity that is caused by congenital or acquired shortening of a muscle (Stedman, 27th ed). Tenotomy is performed in order to lengthen a muscle that has developed improperly, or become shortened and is resistant to stretching.",
    "arabic_definition": "بضع الوتر أو قطع الوتر (الإنجليزية: Tenotomy) هو إجراء جراحي يتضمن قطع الوتر. عندما يتضمن وتر أخيل يُسمى الإجراء \"بضع العرقوب\"، ويستخدم بضع العرقوب كجزء من طريقة بونسيتي لعلاج حنف القدم.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058971.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipectomy",
    "term_en": "Lipectomy",
    "term_ar": "مص الشحم",
    "synonyms": [
      "Lipectomies",
      "Lipoplasty",
      "Lipoplasties",
      "Aspiration Lipectomy",
      "Aspiration Lipectomies",
      "Lipectomies, Aspiration",
      "Lipectomy, Aspiration",
      "Lipolysis, Suction"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Removal of localized SUBCUTANEOUS FAT deposits by SUCTION CURETTAGE or blunt CANNULATION in the cosmetic correction of OBESITY and other esthetic contour defects.",
    "arabic_definition": "مَص الشَّحم أو شفط الدُهون أو نحت الشحم أو استئصال الشحم بالمص أو التقام الشحم (الإنجليزية: Liposuction) هي إحدى الجراحات التجميلية التي تهدف إلى إزالة التراكمات الدهنية غير المرغوب فيها من جسم الإنسان بهدف تغيير شكله بشكلٍ عام، وحتى الآن لا توجد براهين علمية تثبت تأثير هذه العملية على الوزن، حيثُ يستمر الأثر لبضعة أشهر فقط، وأيضاً لا تؤثر هذه العملية على المشاكل المُتعلقة بالسمنة. (Lipectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015187.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "culdoscopy",
    "term_en": "Culdoscopy",
    "term_ar": "تنظير جوف الحوض",
    "synonyms": [
      "Culdoscopies",
      "Culdoscopic Surgical Procedures",
      "Culdoscopic Surgical Procedure",
      "Procedure, Culdoscopic Surgical",
      "Procedures, Culdoscopic Surgical",
      "Surgical Procedure, Culdoscopic",
      "Culdoscopic Surgery",
      "Culdoscopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the female pelvic viscera by means of an endoscope introduced into the pelvic cavity through the posterior vaginal fornix.",
    "arabic_definition": "تنظير جوف الحوض (الإنجليزية: Culdoscopy) هو عبارة عن جراحة بالتنظير الداخلي قصد إجراء دراسة معمقة نوعا ما على أحشاء الحوض وذلك عن طريق ما يُعرف بتنظير جدار المهبل. عموما، فكلمة تنظير جوف الحوض (بالإنجليزية culdoscopy) (بالفرنسية culdoscope) هي مشتقة من مصطلح طريق مسدود (بالفرنسية cul-de-sac) والذي يعني حرفيا في الفرنسية «أسفل الكيس» ، ويشير إلى تنظير الردبة (أو ما يسمى ردبة دوغلاس).",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003464.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amniotomy",
    "term_en": "Amniotomy",
    "term_ar": "تمزق الأغشية الاصطناعي",
    "synonyms": [
      "Artificial Rupture of Membranes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A method of inducing labor by deliberate rupture of the AMNION to cause the release of amniotic fluid.",
    "arabic_definition": "تمزق الأغشية الاصطناعي أو التمزق الاصطناعي للأغشية (الإنجليزية: Artificial rupture of membranes) والمعروف أيضا باسم قطع السلى (الإنجليزية: amniotomy) إجراء قد يقوم به طبيب التوليد بغرض بدأ (حث) المخاض أو تسريعه وذلك من خلال إحداث تمزق في غشاء السلي. ويحدث تمزق الأغشية باستخدام أداة متخصصة، مثل خطاف السلي، أو قد يحدث هذا التمزق باستخدام الإصبع.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074885.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angioscopy",
    "term_en": "Angioscopy",
    "term_ar": "تنظير الشعيرات",
    "synonyms": [
      "Angioscopies",
      "Angioscopic Surgical Procedures",
      "Angioscopic Surgical Procedure",
      "Procedure, Angioscopic Surgical",
      "Procedures, Angioscopic Surgical",
      "Surgical Procedure, Angioscopic",
      "Angioscopic Surgery",
      "Angioscopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery performed on the interior of blood vessels.",
    "arabic_definition": "تَنظير الشُّعَيرات (الإنجليزية: Angioscopy) هي تَقنية طبية تَسمح بِمشاهدة الأَوعية الدموية مِن الداخِل، حيثُ يَتم حَقن قسطرة ليفية مَرنة في الشِريان بِشكل مُباشر، وَتُساعد هذه التقنية في تشخيص الانصمام الشِرياني، كَما تُستخدم كإجراء مُرافق أثناء تخطي الأوعية الدموية بِغرض مُشاهدة الصمامات داخل الأوردة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017546.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angioplasty",
    "term_en": "Angioplasty",
    "term_ar": "رأب الوعاء",
    "synonyms": [
      "Angioplasties",
      "Endoluminal Repair",
      "Endoluminal Repairs",
      "Repair, Endoluminal",
      "Repairs, Endoluminal",
      "Angioplasty, Transluminal",
      "Transluminal Angioplasty",
      "Percutaneous Transluminal Angioplasty"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Reconstruction or repair of a blood vessel, which includes the widening of a pathological narrowing of an artery or vein by the removal of atheromatous plaque material and/or the endothelial lining as well, or by dilatation (BALLOON ANGIOPLASTY) to compress an ATHEROMA. Except for ENDARTERECTOMY, usually these procedures are performed via catheterization as minimally invasive ENDOVASCULAR PROCEDURES.",
    "arabic_definition": "رأب الوعاء هي تقنية لتوسعة وعاء دموي الضيق أو المسدود ميكانيكيا، ويكون غالبًا سبب الانسداد التصلب العصيدي. يمرر بالون فارغ ومُنْخَمِصٌ على سلك، يعرف بالقِثْطارِ البالوني ثم تُنفخ لحجم محدد باستخدام ضغط هواء يتراوح من 75 إلى 500 مرة ضعف ضغط الدم الطبيعي (6إلى 20 وحدة ضغط جوي). (Angioplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017130.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arthroscopy",
    "term_en": "Arthroscopy",
    "term_ar": "تنظير المفصل",
    "synonyms": [
      "Arthroscopies",
      "Arthroscopic Surgical Procedures",
      "Arthroscopic Surgical Procedure",
      "Procedure, Arthroscopic Surgical",
      "Procedures, Arthroscopic Surgical",
      "Surgical Procedure, Arthroscopic",
      "Arthroscopic Surgery",
      "Arthroscopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy and surgery of the joint.",
    "arabic_definition": "تنظير المفصل (الإنجليزية: Arthroscopy) (الذي يسمى أيضا جراحة التنظير المفصلي أو جراحة ثقب المفتاح) هو إجراء جراحي بسيط في المفصل ويتم فيه إجراء الفحص وأحيانًا معالجة الضرر باستخدام منظار المفصل، وهو منظار داخلي يتم إدخاله في المفصل من خلال شق صغير. ويمكن استخدام المنظار الداخلي أثناء إعادة بناء الرباط الصليبي الأمامي.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001182.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhinoplasty",
    "term_en": "Rhinoplasty",
    "term_ar": "عملية تجميل الأنف",
    "synonyms": [
      "Rhinoplasties"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A plastic surgical operation on the nose, either reconstructive, restorative, or cosmetic. (Dorland, 28th ed)",
    "arabic_definition": "تجميل الأنف والمعروف باسم عملية الأنف، هو إجراء جراحة تجميلية لتعديل الأنف وإعادة بنائه. هناك نوعان من الجراحة التجميلية المستخدمة - الجراحة الترميمية التي تعيد شكل ووظائف الأنف والجراحة التجميلية التي تغير مظهر الأنف. (Rhinoplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012225.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mammaplasty",
    "term_en": "Mammaplasty",
    "term_ar": "رأب الثدي",
    "synonyms": [
      "Mammaplasties",
      "Breast Reconstruction",
      "Breast Reconstructions",
      "Reconstruction, Breast",
      "Reconstructions, Breast",
      "Mammoplasty",
      "Mammoplasties"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical reconstruction of the breast including both augmentation and reduction.",
    "arabic_definition": "تُشير عمليّة رأب الثدي والتي تُعرَف في بعض المصادر باسمِ تجميل الثدي إلى مجموعةٍ من الإجراءات الجراحيّة التي تهدفُ إلى إعادة تشكيل أو تعديل مظهر الثدي. لعمليات رأب أو تجميل الثدي نوعان رئيسان: عادةً ما تجرى عملية تكبير الثدي لزيادة حجم الثدي و/أو شكله و/أو تغيير قوامه. (Mammaplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016462.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tracheotomy",
    "term_en": "Tracheotomy",
    "term_ar": "ثقب القصبة الهوائية",
    "synonyms": [
      "Tracheotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical incision of the trachea.",
    "arabic_definition": "ثقب القصبة الهوائية أو فتح القصبة الهوائية (الإنجليزية: Tracheotomy) (يُطلق عليها أحيانا اسم شق حنجري وهى تسمية غير دقيقة)، وهي عملية جراحية لعمل ثقب في الرقبة ينفذ إلى القصبة الهوائية ليسمح بدخول وخروج الهواء إلى داخل الرئتين لمواصلة عملية التنفس، في حالة عدم القدرة على مواصلة التنفس من خلال المسارات الهوائية الطبيعية.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014140.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colonoscopy",
    "term_en": "Colonoscopy",
    "term_ar": "تنظير القولون",
    "synonyms": [
      "Colonoscopies",
      "Colonoscopic Surgical Procedures",
      "Colonoscopic Surgical Procedure",
      "Procedure, Colonoscopic Surgical",
      "Procedures, Colonoscopic Surgical",
      "Surgical Procedure, Colonoscopic",
      "Colonoscopic Surgery",
      "Colonoscopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the luminal surface of the colon.",
    "arabic_definition": "تَنْظيرُ القولون (الإنجليزية: Colonoscopy) هو فحص منظاري للقولون والجزء الأعلى من الأمعاء الدقيقة بواسطة كاميرا فحص القولون أو كاميرا الألياف البصرية المثبتة على أنبوب مرن يمرر من خلال فتحة الشرج. فإنه قد تقدم تشخيصا بصريا (مثل التقرح، الأورام الحميدة)، وتضمن فرصة لفحص أو ازالة الآفات المشتبه بها.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003113.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hysterectomy",
    "term_en": "Hysterectomy",
    "term_ar": "استئصال الرحم",
    "synonyms": [
      "Hysterectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision of the uterus.",
    "arabic_definition": "استئصال الرحم (الإنجليزية: Hysterectomy) هو إجراء جراحي يتم فيه عملية جراحية لإزالة الرحم، تُجرى عادة على يد طبيب نساء. وقد تشمل إزالة الرحم في العديد من الأحيان إزالة عنق الرحم، المبيضان، قناتا فالوب، وبعض المباني المُحيطة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007044.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ovariectomy",
    "term_en": "Ovariectomy",
    "term_ar": "استئصال المبيض",
    "synonyms": [
      "Ovariectomies",
      "Oophorectomy",
      "Oophorectomies",
      "Castration, Female",
      "Castrations, Female",
      "Female Castration",
      "Female Castrations",
      "Bilateral Ovariectomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The surgical removal of one or both ovaries.",
    "arabic_definition": "استئصال المَبيض أو استئصال المبيضين أو خَزع المَبيض (الإنجليزية: Oophorectomy) هو عملية جراحية هدفها إزالة المبيض أو المبيضين. إزالة المبيضين في المرأة هو المعادل البيولوجى للخصي في الذكور؛ الإخصاء هو فقط في بعض الأحيان يستخدم في الأدب الطبي إلى إشارة إلى استئصال المبيض في البشر.أما في العلوم البيطرية، الإزالة الكاملة للمبايض،قناة البيض، قرون الرحم والرحم وهو شكل من التعقيم. (Ovariectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010052.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "splenectomy",
    "term_en": "Splenectomy",
    "term_ar": "استئصال الطحال",
    "synonyms": [
      "Splenectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical procedure involving either partial or entire removal of the spleen.",
    "arabic_definition": "استئصال الطحال (الإنجليزية: Splenectomy) هي عملية جراحية تؤدي لإزالة كل أو جزء من الطحال.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013156.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kyphoplasty",
    "term_en": "Kyphoplasty",
    "term_ar": "رأب الفقرة عن طريق الجلد",
    "synonyms": [
      "Balloon Vertebroplasty",
      "Vertebroplasty, Balloon",
      "Vertebral augmentation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Procedures to restore vertebrae to their original shape following vertebral compression fractures by inflating a balloon inserted into the vertebrae, followed by removal of the balloon and injection of BONE CEMENTS to fill the cavity.",
    "arabic_definition": "رأبُ الفقرة عن طريق الجلد رأبُ الفقرة ورأبُ الحدبة هما إجراءان مشابهان لإجراءات العمود الفقري الطبية، التي يتم فيها حقن ملاط العظم في الفقرة المكسورة من خلال تجويف صغير في الجلد (عن طريق الجلد) بهدف تخفيف الألم الناجم عن كسور الفقرات الإنضغاطية، ولم يتم إيجاد هذا الإجراء ليكون فعال في علاج هشاشة العظام المتعلقة بكسور الفقرات الانضغاطية للعمود الفقري التي تم إجرائها على مجموعتين مراقبة بغفال والتجربة المنضبطة المغشاة، أفاد الناس في كلا المجموعتين التجريبية وغافل لدراسة العمياء بتحسن الألم، مما يشير إلى فائدة تجربة الملاحظة الغير عمياء المرتبطة بتأثير بغفال. خلال عام 2010 بلغت تكلفة رأبُ الفقرة في أوروبا 2,500 يورو، وبلغت تكلفة رأبُ الفقرة خلال عام 2010في الولايات المتحدة ما يقارب 3300 دولار بينما بلغت تكلفة رأبُ الحدبة عند إجرائها في العيادات الخارجية ما يقارب 8100 دولار، وبلغت تكلفة رأبُ الفقرة ما يقارب 11,000 دولار وبلغت تكلفة رأبُ الحدبة ما يقارب 16,000 دولار عندما يتم إجرائهما في العيادات الداخلية. (Kyphoplasty)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058498.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photorefractive-keratectomy",
    "term_en": "Photorefractive Keratectomy",
    "term_ar": "اقتطاع القرنية الضوئي الانكساري",
    "synonyms": [
      "Keratectomies, Photorefractive",
      "Keratectomy, Photorefractive",
      "Photorefractive Keratectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of refractive surgery of the CORNEA to correct MYOPIA and ASTIGMATISM. An EXCIMER LASER is used directly on the surface of the EYE to remove some of the CORNEAL EPITHELIUM thus reshaping the anterior curvature of the cornea.",
    "arabic_definition": "اقتطاع القرنية الضوئي الانكساري (PRK) واقتطاع القرنية تحت الظهارة بمساعدة الليزر (ليزك) هما تقنيتان من جراحة الليزر العينية المستخدمة لتصحيح القدرة البصرية، ما يقلل اعتماد المريض على النظارات الطبية أو العدسات اللاصقة. تغير هاتان العمليتان من شكل الوجه الأمامي المركزي من القرنية بشكل دائم باستخدام ليزر إكسيمر يعمل على استئصال جزء صغير من النسيج من سدى القرنية في الجزء الأمامي من العين تحت ظهارة القرنية مباشرة. (Photorefractive Keratectomy)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018903.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laminectomy",
    "term_en": "Laminectomy",
    "term_ar": "استئصال الصفيحة",
    "synonyms": [
      "Laminectomies",
      "Laminotomy",
      "Laminotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A surgical procedure that entails removing all (laminectomy) or part (laminotomy) of selected vertebral lamina to relieve pressure on the SPINAL CORD and/or SPINAL NERVE ROOTS. Vertebral lamina is the thin flattened posterior wall of vertebral arch that forms the vertebral foramen through which pass the spinal cord and nerve roots.",
    "arabic_definition": "استئصال الصفيحة(الإنجليزية: Laminectomy) هو إجراء جراحي يتم فيه إزالة جزء من الفقرة يُعرف باسم الصفيحة، وهي السقف الذي يغطي القناة الشوكية. يُعد هذا الإجراء عملية كبرى للعمود الفقري، وقد يترك نسيجًا ندبيًا متبقيًا، كما يمكن أن يؤدي إلى ما يُعرف بـ متلازمة ما بعد استئصال الصفيحة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007796.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "duodenoscopy",
    "term_en": "Duodenoscopy",
    "term_ar": "تنظير هضمي علوي",
    "synonyms": [
      "Duodenoscopies",
      "Duodenoscopic Surgical Procedures",
      "Duodenoscopic Surgical Procedure",
      "Procedure, Duodenoscopic Surgical",
      "Procedures, Duodenoscopic Surgical",
      "Surgical Procedure, Duodenoscopic",
      "Duodenoscopic Surgery",
      "Duodenoscopic Surgeries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopic examination, therapy or surgery of the luminal surface of the duodenum.",
    "arabic_definition": "التنظير الهضمي العلوي أو تنظير المريء والمعدة والعفج (الإنجليزية: Esophagogastroduodenoscopy) هو إجراء يتم من خلاله إدخال منظار داخلي مرن صغير عبر الفم (أو إدخال منظار داخلي ذو عيار أصغر عبر الأنف) ويتقدم عبر البلعوم، والمريء، والمعدة، والعفج. يمكن إدخال منظار الأمعاء، وهو منظار داخلي أطول، يصل إلى ما بعد رباط ترايتز.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004384.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "debridement",
    "term_en": "Debridement",
    "term_ar": "إنضار",
    "synonyms": [
      "Debridements"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The removal of foreign material and devitalized or contaminated tissue from or adjacent to a traumatic or infected lesion until surrounding healthy tissue is exposed. (Dorland, 27th ed)",
    "arabic_definition": "الإنضار (الإنجليزية: Debridement) هو إزالة المواد الغريبة والأنسجة الميتة أو الأنسجة المصابة بالعدوى لتحسين احتمال شفاء الجزء المتبقي من الأنسجة غير المصابة أو الصحية. هذه الإزالة قد تكون جراحية أو كيميائية أو ميكانيكية أو بالتحلل الذاتي أو العلاج باليرقات باستخدام بعض أنواع النغف التي تأكل الأنسجة المصابة بالنخر انتقائيا.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003646.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fasciotomy",
    "term_en": "Fasciotomy",
    "term_ar": "بضع اللفافة",
    "synonyms": [
      "Fasciectomy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical incision on the FASCIA. It is used to decompress compartment pressure (e.g. in COMPARTMENT SYNDROMES; circumferential burns and extremity injuries) or to release contractures (e.g. in DUPUYTREN'S CONTRACTURE).",
    "arabic_definition": "بَضْعُ اللُّفافةِ (بالإنجليزية: Fasciotomy) هو إجراء جراحي لقطع اللفافة بهدف تخفيف الضغط لعلاج الخسارة الناتجة من نقص الدورة الدموية إلى منطقة من الأنسجة أو العضلات. فبضع اللفافة هو عملية إنقاذ للطرف عندما تُستخدم لعلاج متلازمة المقصورة الحادة بمجردالتشخيص السريري لها.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071938.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastrectomy",
    "term_en": "Gastrectomy",
    "term_ar": "استئصال معدي",
    "synonyms": [
      "Gastrectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excision of the whole (total gastrectomy) or part (subtotal gastrectomy, partial gastrectomy, gastric resection) of the stomach. (Dorland, 28th ed)",
    "arabic_definition": "الاستئصال المعدي (الإنجليزية: gastrectomy) هو الإزالة الجراحية الجزئية أو الكاملة للمعدة. أول استئصال معدي ناجح أدّاه ثيودور بيلروث في 1881 لسرطان المعدة.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005743.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vulvectomy",
    "term_en": "Vulvectomy",
    "term_ar": "استئصال الفرج",
    "synonyms": [
      "Vulvectomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Surgical resection of the VULVA.",
    "arabic_definition": "استئصال الفرج (الاسم العلمي: Vulvectomy) يشير في طب النساء إلى الإجراء الذي يتم فيه الإزالة الجزئية أو التامة للفرج، وعادة ما يتم تنفيذ هذا الإجراء كحل أخير في حالات معينة من السرطان، الخلل التنسجي، الأورام داخل الفرج، أو ختان الإناث، وعلى الرغم من أنه قد يكون هناك ألم شديد في منطقة الفخذ وذلك لعدد من الأسابيع بعد العملية إلا أن هذا النوع من العمليات لا يزال ممكنا ولكن بشكل محدود نوعا ما.",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074883.html",
        "accessedAt": "2026-11-21"
      }
    ]
  }
];
