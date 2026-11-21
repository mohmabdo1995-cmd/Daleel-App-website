// Auto-curated verified medical terms (NIH NLM MeSH 2026 + verified bilingual medical entries) - Part 4
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

export const MEDICAL_TERMS_PART_4: RawExpandedMedicalTerm[] = [
  {
    "id": "phototropism",
    "term_en": "Phototropism",
    "term_ar": "انتحاء ضوئي",
    "synonyms": [
      "Phototropisms",
      "Heliotropism",
      "Heliotropisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The directional growth of organisms in response to light. In plants, aerial shoots usually grow towards light. The phototropic response is thought to be controlled by auxin (= AUXINS), a plant growth substance. (From Concise Dictionary of Biology, 1990)",
    "arabic_definition": "الانتحاء الضوئي أو التَّأَوُّدُ الضَّوْئِيُّ أو الانتحاء هي حركة نباتية تنتج عن التعرض للإضاءة غير المتساوية على جانبي العضو النباتي، وعادة تنحني السوق باتجاه الضوء الأقوى بسبب وجود الاوكسينات كما أن الأوراق تتخذ وضعاً معيناً بالنسبة لمصدر الضوء وكثيرا ما تتخذ أوراق بعض النباتات مثل الخس أوضاعاً بحيث تواجه أنصالها الشرق والغرب حتى لا تواجه الشدة الكاملة لشمس الظهيرة سوى حواف الأوراق، فتعرف عندئذ تلك النباتات بنباتات البوصلة، تلك الحركات التي تضع الأوراق والسوق في مواضع معينة بالنسبة للضوء ترجع لاختلاف في معدلات النمو في الأجزاء المضاءة عن الأجزاء المظللة في السوق والأعضاء. أشارت تلك التجارب إلى أن قمم الغلاف الورقي للشوفان تمد البادرة بالأكسين ونتيجة توزيعه غير المتساوى نتيجة تعرض الجزء المقابل للضوء والذي يؤثر سلباً على الأكسين حيث يؤدى إلى أكسدته ضوئياً فيقل تركيزه في الجزء المقابل للضوء مقارنة بالجزء المظلل أو البعيد عن الضوء. (Phototropism)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018524.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "necroptosis",
    "term_en": "Necroptosis",
    "term_ar": "نخر مبرمج",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of regulated cell death initiated by perturbations of extracellular or intracellular homeostasis that trigger a specific cell death pathway involving the activation of RIPK3 and MLKL (mixed lineage kinase domain like pseudokinase). Morphological changes include cytoplasmic and organellar swelling, rupture of the PLASMA MEMBRANE, and CHROMATIN CONDENSATION.",
    "arabic_definition": "النخر المبرمج (necroptosis) هو شكل مبرمج من النخر، أو موت الخلايا الالتهابي.تقليديا، يرتبط النخر بموت الخلايا غير المبرمج الناتج عن التلف الخلوي أو التسلل من قبل مسببات الأمراض، على عكس الموت الخلوي المنظم والمبرمج عن طريق الاستماتة. أظهر اكتشاف النخر المبرمج أن الخلايا يمكنها تنفيذ النخر بطريقة مبرمجة وأن موت الخلايا المبرمج ليس دائمًا الشكل المفضل لموت الخلايا.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000079302.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ferroptosis",
    "term_en": "Ferroptosis",
    "term_ar": "استماتة حديدية",
    "synonyms": [
      "Oxytosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of REGULATED CELL DEATH initiated by oxidative perturbations of the intracellular microenvironment that is under constitutive control by glutathione peroxidase 4 and can be inhibited by iron chelators and lipophilic antioxidants.",
    "arabic_definition": "تعتبر الاستماتة الحديدية نوعًا من أنواع موت الخلية المبرمج الذي يعتمد على الحديد ويتميز بتراكم بيروكسيدات الدهون، وهو متميز جينيًا وبيوكيميائيًا عن الأشكال الأخرى لموت الخلايا المبرمج مثل الاستماتة الاعتيادية. تبدأ الاستماتة الحديدية نتيجة لفشل الدفاعات المضادة للأكسدة المعتمدة على الجلوتاثيون، ما يؤدي إلى أكسدة الدهون دون توقف وموت الخلايا في نهاية المطاف. (Ferroptosis)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000079403.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cell-cycle",
    "term_en": "Cell Cycle",
    "term_ar": "دورة الخلية (مجلة)",
    "synonyms": [
      "Cell Cycles",
      "Cycle, Cell",
      "Cycles, Cell",
      "Cell Division Cycle",
      "Cell Division Cycles",
      "Cycle, Cell Division",
      "Cycles, Cell Division",
      "Division Cycle, Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The complex series of phenomena, occurring between the end of one CELL DIVISION and the end of the next, by which cellular material is duplicated and then divided between two daughter cells. The cell cycle includes INTERPHASE, which includes G0 PHASE; G1 PHASE; S PHASE; and G2 PHASE, and CELL DIVISION PHASE.",
    "arabic_definition": "مجلة دورة الخلية Cell Cycle هي مجلة علمية محكمة تصدر كل أسبوعين وتغطي جميع جوانب بيولوجيا الخلية. تأسست عام 2002.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002453.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rem-sleep",
    "term_en": "REM Sleep",
    "term_ar": "نوم حركة العين السريعة",
    "synonyms": [
      "Paradoxical Sleep",
      "Sleep, Paradoxical",
      "Rhombencephalic Sleep",
      "Sleep, Rhombencephalic",
      "Fast-Wave Sleep",
      "Sleep, Fast-Wave",
      "Rapid Eye Movements",
      "Rapid eye movement sleep"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A stage of sleep characterized by rapid movements of the eye and low voltage fast pattern EEG. It is usually associated with dreaming.",
    "arabic_definition": "نوم حركة العين السريعة (اختصارًا REM) هو مرحلة من مراحل النوم تتميز بحركة العين السريعة فيها. يصنف نوم حركة العين السريعة إلى صنفين: التوتري والطوري. (REM Sleep)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012895.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heart-sounds",
    "term_en": "Heart Sounds",
    "term_ar": "أصوات القلب",
    "synonyms": [
      "Heart Sound",
      "Sound, Heart",
      "Sounds, Heart",
      "Cardiac Sounds",
      "Cardiac Sound",
      "Sound, Cardiac",
      "Sounds, Cardiac"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sounds heard over the cardiac region produced by the functioning of the heart. There are four distinct sounds: the first occurs at the beginning of SYSTOLE and is heard as a lubb sound; the second is produced by the closing of the AORTIC VALVE and PULMONARY VALVE and is heard as a dupp sound; the third is produced by vibrations of the ventricular walls when suddenly distended by the rush of blood from the HEART ATRIA; and the fourth is produced by atrial contraction and ventricular filling.",
    "arabic_definition": "أصوات القلب (الإنجليزية: Heart sounds) هي الضوضاء الناتجة عن ضربات القلب وتدفق الدم فيه. على وجه التحديد، والأصوات تعكس الاضطرابات التي تنشأ في صمامات القلب إذا ماأغلقت فجأة.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006347.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hair-color",
    "term_en": "Hair Color",
    "term_ar": "لون شعر الإنسان",
    "synonyms": [
      "Color, Hair",
      "Colors, Hair",
      "Hair Colors",
      "Human hair color"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Color of hair or fur.",
    "arabic_definition": "لون الشعر هو تصبغ بصيلات الشعر بسبب نوعين من الميلانين: السوي (Eumelanin) و(pheomelanin). عموما إذا كان الميلانين أكثر هو الموجود سيكون لون الشعر أغمق اما إذا كانت أقل السوي فإن (Eumelanin) هو الحاضر، ولون الشعر أفتح. (Hair Color)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006200.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "frozen-foods",
    "term_en": "Frozen Foods",
    "term_ar": "تجميد الطعام",
    "synonyms": [
      "Food, Frozen",
      "Foods, Frozen",
      "Frozen Food"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Foods that are preserved by lowering their storage temperature below the freezing point.",
    "arabic_definition": "تقنية التبريد السريع قبل اختراع التبريد، كانت مشكلة حفظ الأطعمة تؤرق الناس. فحفظ الأطعمة لفصل الشتاء كان يعتمد على التمليح أكثر من التبريد نظراً لعدم وجود إمكانيات لذلك. (Frozen Foods)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005628.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "raw-foods",
    "term_en": "Raw Foods",
    "term_ar": "حمية الطعام النيء",
    "synonyms": [
      "Food, Raw",
      "Foods, Raw",
      "Raw Food",
      "Uncooked Foods",
      "Foods, Uncooked",
      "Food, Uncooked",
      "Uncooked Food",
      "Raw foodism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Food prepared for consumption without exposure to heat.",
    "arabic_definition": "حمية الطعام النيء أو ما يعرف بالغذاء الخام هي ممارسة غذائية تتضمن تناول الطعام النيء أو الطعام سهل التحضير فقط . اعتمادا على الفلسفة أو اختلاف أساليب الحياة والنتائج المرغوبة فإنه من الممكن أن يشمل النظام الغذائي بعض الفواكه والخضراوات والمكسرات والبذور والبيض والأسماك واللحوم ومنتجات الألبان, من الممكن أيضا أن يشمل بعض الطعام المعامل بشكل بسيط كبعض أنواع البذور المتبرعمة والأجبان وبعض أنواع الطعام المحضر بواسطة البكتريا(المتخمر) كالزبادي وشاي الكمبوتشا أو الملفوف المخمر . (Raw Foods)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D066256.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "street-food",
    "term_en": "Street Food",
    "term_ar": "أكل الشارع",
    "synonyms": [
      "Street Beverages",
      "Street Drinks",
      "Street-Vended Foods"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Ready-to-eat foods and beverages prepared and/or sold by vendors or hawkers especially in the streets and other similar places. They represent a significant part of urban food consumption for millions of low-and-middle-income consumers, in urban areas on a daily basis. (USDA)",
    "arabic_definition": "طعام الشارع أو الطعام المحضّر في الشوارع، هو عبارة عن غذاء أو وجبات أو مشروبات تُباع في الشارع أو في الأماكن العامة كالأسواق والمعارض من قبل الباعة المتجولين أو من خلال أكشاك مخصصة، أو على عربات أو من خلال مركبات خاصة. بعض الأطعمة التي تباع في الشوارع تكون أطعمة شعبية أو إقليمية وبعضها يكون من خارج المنطقة. (Street Food)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000098355.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "infant-formula",
    "term_en": "Infant Formula",
    "term_ar": "وصفة غذاء الرضع",
    "synonyms": [
      "Formula, Infant",
      "Formulas, Infant",
      "Infant Formulas",
      "Baby Formula",
      "Baby Formulas",
      "Formula, Baby",
      "Formulas, Baby"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Formulations for the nutrition of infants that are substituted for BREAST MILK.",
    "arabic_definition": "وصفة غذاء الرضع والمعروفة شعبيا باسم لبن الأطفال أو حليب الأطفال أو الرضاعة الصناعية (في مقابل الرضاعة الطبيعية) هي غذاء سهل التحضير يتم تصنيعه وتسويقه من أجل تغذية الأطفال الرضع تحت سن 12 شهرا، ويتم تحضيره من مسحوق (يُمزج بالماء) أو سائل (مع أو بدون ماء إضافي) ويُعطى للرضيع عادة من خلال بزازة أو كوب إطعام. وقد عرّف قانون الغذاء والدواء ومواد التجميل الفيدرالي الأمريكي تركيبات الرُضع على أنها «طعام يُزعم أنه ممثل للاستخدام الغذائي الخاص بشكل منفرد كطعام للرضع بسبب محاكاته للحليب البشري أو صلاحيته كبديل كُليّ أو جزئي للحليب البشري». (Infant Formula)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041943.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "quorum-sensing",
    "term_en": "Quorum Sensing",
    "term_ar": "استشعار النصاب",
    "synonyms": [
      "Sensing, Quorum",
      "Quorum Quenching",
      "Quenching, Quorum",
      "Quenchings, Quorum",
      "Quorum Quenchings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A phenomenon where microorganisms communicate and coordinate their behavior by the accumulation of signaling molecules. A reaction occurs when a substance accumulates to a sufficient concentration. This is most commonly seen in bacteria.",
    "arabic_definition": "استشعار النّصاب (بالإنكليزية: Quorum sensing) هو نظام تنبيه واستجابة، مرتبط بالكثافة العددية. هناك أنواع كثيرة من الجراثيم تستخدم قدرتَها على استشعار النّصاب لتنظيم التعبير المورّثي تبعا لكثافتها العددية في حيّز مكاني ما، كما أنّ بعض الحشرات الاجتماعية تستخدم نفس الأسلوب لتحديد المكان الذي ستعشّش فيه.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053038.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "drinking-water",
    "term_en": "Drinking Water",
    "term_ar": "ماء الشرب",
    "synonyms": [
      "Water, Drinking",
      "Potable Water",
      "Water, Potable",
      "Bottled Water",
      "Water, Bottled"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Water that is intended to be ingested.",
    "arabic_definition": "مياه الشرب أو الماء الشَّرُوب أو الماء الشريب هي المياه الصالحة للشرب وإعداد الطعام للبشر من دون إحداث مشاكل صحية، وتتصف بنظافتها وخلوها من مواد ضارة أو ميكروبات. تضع الحكومات مواصفات للمياه التي تقدم إلى السكان للاستخدام في الشرب والاستحمام والغسيل. (Drinking Water)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060766.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glycemic-index",
    "term_en": "Glycemic Index",
    "term_ar": "مؤشر جلايسيمي",
    "synonyms": [
      "Glycemic Indices",
      "Glycemic Index Number",
      "Glycemic Index Numbers"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A numerical system of measuring the rate of BLOOD GLUCOSE generation from a particular food item as compared to a reference item, such as glucose = 100. Foods with higher glycemic index numbers create greater blood sugar swings.",
    "arabic_definition": "المؤشر الجلايسيمي (الإنجليزية: Glycemic index) أو مؤشر نسبة السكر في الدم ويرمز له بالرمز GI، هو تصنيف للكربوهيدرات على مقياس من 0 ل 100 بناء على مدى ارتفاع سكر الدم بعد تناولها. (100 هو مؤشر سكر الجلوكوز)، فالكربوهيدرات التي تتحلل بسرعة أثناء عملية الهضم وتعطي الجلوكوز للدم بشكل سريع لديها مؤشر جلايسيمي مرتفع اما الكربوهيدرات التي تتحلل ببطء وتطلق الجلوكوز بشكل تدريجي للدم تسمى كربوهيدرات ذات مؤشر جلايسيمي منخفض.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D038321.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sexual-arousal",
    "term_en": "Sexual Arousal",
    "term_ar": "إثارة جنسية",
    "synonyms": [
      "Arousal, Sexual",
      "Sexual Excitement",
      "Excitement, Sexual"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Physiological arousal elicited by sexual contact or by other erotic stimulation resulting in impulses being transmitted through the central nervous system.The impulses also trigger the release of sex hormones, dilation of the arteries supplying the genital areas, and inhibition of vasoconstrictor centers of the lumbar nerves.",
    "arabic_definition": "الاستثارة الجنسية أو الإثارة الجنسية (الإنجليزية: sexual arousal) أو التهييج الجنسي (بالإنجليزية: sexual excitement) هي في الأغلب استثارة الرغبة الجنسية أثناء ممارسة النشاط الجنسي أو تمهيدًا له. يحدث عدد من الاستجابات الفسيولوجية في الجسم والدماغ تمهيدًا للإيلاج الجنسي وتستمر أثناءه.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000083942.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "slow-wave-sleep",
    "term_en": "Slow-Wave Sleep",
    "term_ar": "نوم الموجة البطيئة",
    "synonyms": [
      "Sleep, Slow Wave",
      "NREM Stage 3",
      "Stage 3, NREM",
      "Delta Sleep",
      "Sleep, Delta",
      "N3 Sleep",
      "Sleep, N3",
      "Deep Sleep"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A stage of sleep characterized by synchronized wave activity as observed in the ELECTROENCEPHALOGRAM; the waves exhibit a frequency of 0.5 to 2 Hz, and a peak-to-peak amplitude greater than 75 microvolts.",
    "arabic_definition": "نوم الموجة البطيئة (الإنجليزية: Slow-wave sleep) ويشار إليه غالبا بالنوم العميق، يشمل المرحلة الثالثة من نوم حركة العين غير السريعة. ويستغرق في العادة بين 70 و90 دقيقة ويحدث خلال الساعات الأولى من الليل.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077310.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "periodization",
    "term_en": "Periodization",
    "term_ar": "تحقيب",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A systematic training calendar designed to provide variations in performance targeting, while maximizing results and reducing the potential for overtraining. Term only applies to EXERCISE.",
    "arabic_definition": "العصور التاريخية تبدأ مع اختراع الكتابة في سومر (3200 ق.م) تقريباً، شاملة عصر البرونز والعصر الحديدي، وتستمر حتى فترة الإمبراطورية الرومانية زمن ولادة عيسى بن مريم، سنة صفر ميلادية. (Periodization)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000098557.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ice-cream",
    "term_en": "Ice Cream",
    "term_ar": "مثلجات",
    "synonyms": [
      "Cream, Ice",
      "Creams, Ice",
      "Ice Creams"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A frozen dairy food made from cream or butterfat, milk, sugar, and flavorings. Frozen custard and French-type ice creams also contain eggs.",
    "arabic_definition": "المُثلّجات أو المثلوجات هي حلوى مجمدة معدة من الحليب أو من الماء والسكر وقد يضاف إليه الفاكهة، وهي ما يطلق عليها في بعض اللهجات الآيس كريم أو الجيلاتي أو البوظة أو لاباني (المغرب). قد تصنع أيضا من هريس الفاكهة المجمدة أو من عصير الفاكهة. (Ice Cream)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007054.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bioaccumulation",
    "term_en": "Bioaccumulation",
    "term_ar": "تراكم حيوي",
    "synonyms": [
      "Bioconcentration",
      "Bioconcentrations",
      "Bio Accumulation",
      "Bio-accumulations",
      "Bio Concentration",
      "Bio-concentrations",
      "Biomagnification",
      "Biomagnifications"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An increase in the concentration of an exogenous substance in the tissues of organisms higher than surrounding ENVIRONMENT. Accumulation of such XENOBIOTICS at successively higher levels up the FOOD CHAIN is called biomagnification. Bioaccumulation of toxic chemicals (e.g., Lead and DDT) may result in CHEMICALLY-INDUCED DISORDERS.",
    "arabic_definition": "التراكم الحيوي يشير إلى تراكم مواد مثل المبيدات الحشرية أو مواد ومركبات عضوية أخرى في الكائنات الحية. يحدث التراكم الحيوي عندما يمتص كائن حي مادة سامة بمعدل أعلى من تصريفه لهذه السموم. (Bioaccumulation)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000081482.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vernalization",
    "term_en": "Vernalization",
    "term_ar": "ارتباع",
    "synonyms": [
      "Vernalisation",
      "Devernalization",
      "Devernalisation",
      "Seed Stratification",
      "Stratification, Seed",
      "Thermomorphogenesis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of thermal induction in plants in which flowering is promoted by prolonged exposure to COLD TEMPERATURE.",
    "arabic_definition": "الارتباع أو الدِّمَاكة أو التجميد التنشيطي (الإنجليزية: Vernalization)، هو الحاجة إلى فترة تبريد مُفاجئ للبذور والمجاميع الخضرية لكي يَحدُثَ الإزهار، ما يعني تقصير فترة النمو الخضري ودفع النباتات إلى الإزهار المُبكر. الكثير من النباتات التي تُزرع في المناخ المعتدل تحتاج إلى عملية الارتباع ويتطلب ذلك انخفاض درجة الحرارة في فصل الشتاء لبدء أو تسريع الإزهار.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000096384.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "egg-white",
    "term_en": "Egg White",
    "term_ar": "بياض البيض",
    "synonyms": [
      "Egg Whites"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The white of an egg, especially a chicken's egg, used in cooking. It contains albumin. (Random House Unabridged Dictionary, 2d ed)",
    "arabic_definition": "الآح أو آح البيضة أو بياض البيض أو الزلال، أما صفار البيض فيسمى المح. وقد أثبتت عدة دراسات أن بياض البيض يحوي كمية كبيرة جداً من البروتين بيد أن المح الذي هو نواة هذه الخلية الكبيرة إنما هو ألياف دهنية تفيد في تركيب حاثة التوستسترون الذكرية. (Egg White)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004529.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vasoconstriction",
    "term_en": "Vasoconstriction",
    "term_ar": "تضيق الأوعية",
    "synonyms": [
      "Vasoconstrictions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The physiological narrowing of BLOOD VESSELS by contraction of the VASCULAR SMOOTH MUSCLE.",
    "arabic_definition": "تضيق الأوعية هو تضييق الأوعية الدموية الناتجة عن تقلص الألياف العضلية الموجودة في الأوعية الدموية، وخاصة في الشرايين الكبيرة والشرايين الصغيرة (الشُّرينات). هذه العملية هي عكس توسع الأوعية. (Vasoconstriction)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014661.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acclimatization",
    "term_en": "Acclimatization",
    "term_ar": "تأقلم",
    "synonyms": [
      "Acclimation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Adaptation to a new environment or to a change in the old.",
    "arabic_definition": "التأقلم الحيوي (الإنجليزية: acclimatization)، هي العملية التي يتكيف فيها الكائن الحي مع التغير الحاصل في بيئته (مثل التغير في الارتفاع أو درجة الحرارة أو الرطوبة أو التصوير الضوئي أو درجة الحموضة)، مما يسمح له بالحفاظ على التوازن عبر مجموعة من الظروف البيئية. يحدث التأقلم في فترة قصيرة من الزمن (حوالي من ساعات إلى أسابيع)، وضمن حياة الكائن الحي (مقارنة بالتكيف، وهو تطور يحدث على مدى أجيال عديدة).",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000064.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "soy-milk",
    "term_en": "Soy Milk",
    "term_ar": "حليب صويا",
    "synonyms": [
      "Milk, Soy",
      "Soy Beverage",
      "Beverage, Soy",
      "Beverages, Soy",
      "Soy Beverages"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A beverage prepared from GLYCINE MAX.",
    "arabic_definition": "لبن الصويا: أو (لبن فول الصويا) (لا يجوز تسميته حليب الصويا لأنه لا يحلب ولكن يسمى لبن الصويا) هو أحد منتجات فول الصويا، ويحتوي على 3 إلى 4 بالمائة من البروتينات و 2 إلى 3 بالمائة من الغلوسيد. طريقة الاستخراج: يتم عصر فول الصويا بمعاصر خاصة، حيث تستخرج منه عصار تتكون من: زيت، حليب الصويا . (Soy Milk)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041942.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thermogenesis",
    "term_en": "Thermogenesis",
    "term_ar": "توليد الحرارة",
    "synonyms": [
      "Thermogeneses",
      "Heat Production",
      "Production, Heat",
      "Adaptive Thermogenesis",
      "Thermogenesis, Adaptive",
      "Facultative Thermogenesis",
      "Thermogenesis, Facultative",
      "Nonshivering Thermogenesis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The generation of heat in order to maintain body temperature. The uncoupled oxidation of fatty acids contained within brown adipose tissue and SHIVERING are examples of thermogenesis in MAMMALS.",
    "arabic_definition": "التوليد الحراري أو توليد الحرارة thermogenesis ، هو إنتاج الحرارة من خلال النشاط الأيضي للكائنات الحية. يتم إنتاج الحرارة كمنتج ثانوي لا مفر منه لعمليات التمثيل الغذائي مثل التمثيل الغذائي للطاقة و الهضم ونشاط العضلات في الحيوانات.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D022722.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "toxicokinetics",
    "term_en": "Toxicokinetics",
    "term_ar": "حركية السموم",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The quantitation of the body's metabolism of toxic xenobiotic compounds, as measured by the plasma concentration of the toxicant at various time points.",
    "arabic_definition": "تصف حركية السمومعملية الامتصاص والتوزيع والتمثيل الغذائي وإفراز المركبات في الجسم مع مرور الوقت، أي دراسة معدلات أو حركية ADME في ظل ظروف تقييم السمية (معدل دخول المادة إلى النظام البيولوجي وما يحدث للمادة بمجرد دخولها إلى النظام)، مما يسمح للباحثين بتقدير الجرعة الداخلية من تركيز التعرض الخارجي، أو استخدام الحركية السمية العكسية، لحساب تركيز التعرض الخارجي المقدر من الجرعة الداخلية المعروفة. تظهر فائدة الحركية السمية في تقييم السمية وتفسير بيانات السموم الحيوانية كأداة مهمة في اكتشاف المنتجات وتطويرها. (Toxicokinetics)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D066007.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osseointegration",
    "term_en": "Osseointegration",
    "term_ar": "التحام العظم",
    "synonyms": [
      "Peri-implant Endosseous Healing",
      "Endosseous Healing, Peri-implant",
      "Endosseous Healings, Peri-implant",
      "Healing, Peri-implant Endosseous",
      "Healings, Peri-implant Endosseous",
      "Peri-implant Endosseous Healings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The growth action of bone tissue as it assimilates surgically implanted devices or prostheses to be used as either replacement parts (e.g., hip) or as anchors (e.g., endosseous dental implants).",
    "arabic_definition": "الاندماج أو الالتحام العظمي، هو مصطلح مشتق من اللغتين اليونانية واللاتينية. المصطلح يدل على الرابطة البنائية والوظيفية المباشرة الناشئة بين خلايا العظم الحية وسطح الغرسة الصناعية الحاملة. (Osseointegration)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016348.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bronchoconstriction",
    "term_en": "Bronchoconstriction",
    "term_ar": "تضيق قصبي",
    "synonyms": [
      "Bronchoconstrictions",
      "Bronchial Constriction",
      "Bronchial Constrictions",
      "Constriction, Bronchial",
      "Constrictions, Bronchial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Narrowing of the caliber of the BRONCHI, physiologically or as a result of pharmacological intervention.",
    "arabic_definition": "التضيق القصبي هو انقباض (تضيق) القصبات الهوائية الموجودة في الرئتين بسبب انقباض العضلات الملساء المحيطة بجدارها، وهو ما يؤدي إلى السعال والأزيز وضيق في التنفس. (Bronchoconstriction)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016084.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroprotection",
    "term_en": "Neuroprotection",
    "term_ar": "وقاية عصبية",
    "synonyms": [
      "Neuron Protection",
      "Protection, Neuron",
      "Neuronal Protection",
      "Protection, Neuronal",
      "Neural Protection",
      "Protection, Neural"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The physiological processes and techniques used by the body to prevent neuronal injury and degeneration in the central nervous system following acute disorders or as a result of chronic neurodegenerative diseases.",
    "arabic_definition": "يشير مصطلح الوقاية العصبية إلى المحافظة النسبية على البنية و/ أو الوظيفة العصبية. وفي حالة الأذية المستمرة (أذية عصبية تنكسية)، يصف المصطلح انخفاض معدل فقدان الخلايا العصبية بمرور الوقت؛ الأمر الذي يمكن التعبير عنه بمعادلة تفاضلية. (Neuroprotection)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000066829.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cementogenesis",
    "term_en": "Cementogenesis",
    "term_ar": "تولد الملاط",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The formation of DENTAL CEMENTUM, a bone-like material that covers the root of the tooth.",
    "arabic_definition": "تولد المِلاَط (الإنجليزية: Cementogenesis) هو تكوين الملاط، وهو أحد المواد المعدنية الثلاثة في السن. يغطي الملاط جذور الأسنان ويعمل على ربط اللثة وألياف دواعم السن مع ألياف العظم السنخي (قد تتشكل بعض أنواع الملاط أيضًا على سطح ميناء التاج عند الموصّل الملاطي المينائي).",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D025021.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chondrogenesis",
    "term_en": "Chondrogenesis",
    "term_ar": "تكون الغضروف",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The formation of cartilage. This process is directed by CHONDROCYTES which continually divide and lay down matrix during development. It is sometimes a precursor to OSTEOGENESIS.",
    "arabic_definition": "تَكوّن الغُضروف (Chondrogenesis) هي العملية التي ينمو من خلالها الغُضروف.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020219.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "remyelination",
    "term_en": "Remyelination",
    "term_ar": "إعادة تكون الميالين",
    "synonyms": [
      "Remyelinations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The reforming of the MYELIN SHEATH around AXONS following loss due to injury or DEMYELINATING DISEASES.",
    "arabic_definition": "تشير عملية إعادة تكون الميالين إلى العملية التي تتكاثر فيها الخلايا الأرومية للخلايا الدبقية قليلة التغصن، لتعطي خلايا دبقية قليلة التغصن تصنع أغلفة ميالين جديدة تغطي المحاور الفاقدة للميالين في الجهاز العصبي المركزي. تجري هذه العملية بشكل طبيعي في الجسم، وتكون فعالة للغاية في الجهاز العصبي المركزي السليم صحيًا. (Remyelination)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074586.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphopoiesis",
    "term_en": "Lymphopoiesis",
    "term_ar": "تكون الليمفاويات",
    "synonyms": [
      "تكون الليمفاويات (الطب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Formation of LYMPHOCYTES and PLASMA CELLS from the lymphoid stem cells which develop from the pluripotent HEMATOPOIETIC STEM CELLS in the BONE MARROW. These lymphoid stem cells differentiate into T-LYMPHOCYTES; B-LYMPHOCYTES; PLASMA CELLS; or NK-cells (KILLER CELLS, NATURAL) depending on the organ or tissues (LYMPHOID TISSUE) to which they migrate.",
    "arabic_definition": "تكون الليمفاويات أو تكون الأغشية الليمفاوية أو ليمفوبويسيز، (بالإنجليزية:Lymphopoiesis أو lymphocytopoiesis) هو توليد الخلايا الليمفاوية، أحد الأنواع الخمسة لخلايا الدم البيضاء (WBC). ويُعرف أيضاً باسم تكوين الدم الليمفاوي.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D038041.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "biotransformation",
    "term_en": "Biotransformation",
    "term_ar": "تحول بيولوجي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The chemical alteration of an exogenous substance by or in a biological system. The alteration may inactivate the compound or it may result in the production of an active metabolite of an inactive parent compound. The alterations may be divided into METABOLIC DETOXICATION, PHASE I and METABOLIC DETOXICATION, PHASE II.",
    "arabic_definition": "التحول البيولوجي أو التحول الحيوي أو الانتقال الحيوي (الإنجليزية: Biotransformation) هو التعديل الكيميائي الذي يقوم به كائن حي على مركب كيميائي كأن يقوم بتعديل جزيء في المركب. التحول البيولوجي يضم بشكلٍ أكبر التغير الكيميائي للمواد الكيميائية مثل المواد الغذائية والأحماض الأمينية والسموم والأدوية في الجسم.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001711.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurodevelopment",
    "term_en": "Neurodevelopment",
    "term_ar": "نمو الجهاز العصبي عند الإنسان",
    "synonyms": [
      "Neurodevelopment Process",
      "Neurodevelopment Processes",
      "Neurodevelopmental",
      "Development of the nervous system in humans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A developmental process in which NEURONS extend and form SYNAPSES.",
    "arabic_definition": "يشمل نمو الجهاز العصبي عند البشر أو النمو العصبي دراسات علم الأجنة وعلم الأحياء النمائي والعلوم العصبية من أجل وصف الآليات الخلوية والجزيئية التي يتشكل بواسطتها الجهاز العصبي المعقد لدى البشر، بالإضافة إلى نموه خلال مرحلة النماء السابق للولادة واستمرار نموه بعد الولادة. تشمل بعض معالم النمو العصبي لدى الجنين كلًا من توليد العصبونات من طلائع الخلايا الجذعية وتمايزها (تخلق النسيج العصبي)، وهجرة العصبونات غير الناضجة من أماكن نشأتها في الجنين إلى موضعها النهائي، ونمو المحاور من العصبونات وتوجيه مخروط النمو المتحرك خلال الجنين باتجاه النهايات ما بعد المشبك، وتوليد المشابك بين هذه المحاور ومقابلاتها بعد المشبكية، والتقليم المشبكي الذي يحدث في فترة المراهقة، وفي النهاية التغيرات المشبكية التي تحدث مدى الحياة ويُعتقد أنها مسؤولة عن التعلم والذاكرة. (Neurodevelopment)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000099203.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "volatilization",
    "term_en": "Volatilization",
    "term_ar": "انجراف المبيدات الحشرية",
    "synonyms": [
      "Vaporization",
      "Volatility",
      "Pesticide drift"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A phase transition from liquid state to gas state, which is affected by Raoult's law. It can be accomplished by fractional distillation.",
    "arabic_definition": "انجراف المبيدات الحشرية يشار إليه بانتشار المبيدات الحشرية بدون قصد والتأثير السلبي المحتمل من تطبيقه، ويتضمن تلوث إشعاعي خارج المنطقة المراد الرش بها عن طريق انجراف السائل إضافةً إلى جريانه من النباتات أو التربة وهذا قد يؤدي الي تدمير في صحة الإنسان والتلوث البيئي الإشعاعي وتدمير الممتلكات. (Volatilization)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014835.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thrombopoiesis",
    "term_en": "Thrombopoiesis",
    "term_ar": "تكون الصفيحات",
    "synonyms": [
      "Thrombopoieses",
      "Thrombocytopoiesis",
      "Thrombocytopoieses",
      "Megakaryocytopoiesis",
      "Megakaryocytopoieses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of generating thrombocytes (BLOOD PLATELETS) from the pluripotent HEMATOPOIETIC STEM CELLS in the BONE MARROW via the MEGAKARYOCYTES. The humoral factor with thrombopoiesis-stimulating activity is designated THROMBOPOIETIN.",
    "arabic_definition": "تكوُّن الصفيحات (الإنجليزية: thrombopoiesis) يشير تكون الصفيحات إلى عملية توليد الصفيحات. والصفيحة الدموية هي عملية ربط السيتوبلازم من الصفيحات النزفية (ابيضاض النواءات).",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034061.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "emperipolesis",
    "term_en": "Emperipolesis",
    "term_ar": "اختراق خلية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The movement of one cell within another cell (non-phagocytic).",
    "arabic_definition": "في الطب، يشير مصطلح اختراق الخلية (emperipolesis) إلى وجود خلية سليمة في السيتوبلازم الخاص بخلية أخرى. المصطلح مشتق من اليونانية (فالمقطعem تعني بالداخل وكلمة peri تعني حول، وكلمة polemai تعني يتجول حول).",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057687.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytoprotection",
    "term_en": "Cytoprotection",
    "term_ar": "حماية خلوية",
    "synonyms": [
      "Cell Protection",
      "Protection, Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process by which chemical compounds provide protection to cells against harmful agents.",
    "arabic_definition": "الحماية الخلوية (الإنجليزية: Cytoprotection) هي العملية التي تقوم بها المركبات الكيميائيّة بحماية الخلايا ضد العوامل الضارة. على سبيل المثال، الحامي الخلوي في المعدة هو أي دواء يهاجم التقرحات؛ ليس من خلال تقليل حمض المعدة ولكن بزيادة الحماية المخاطيّة.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019610.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dairy-products",
    "term_en": "Dairy Products",
    "term_ar": "منتجات الألبان",
    "synonyms": [
      "Dairy Product",
      "Product, Dairy",
      "Products, Dairy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Raw and processed or manufactured milk and milk-derived products. These are usually from cows (bovine) but are also from goats, sheep, reindeer, and water buffalo.",
    "arabic_definition": "منتجات الألبان ومشتقّاتها هي أغذية مصدرها حليب المواشي من الأبقار أو الغنم أو الماعز أو الإبل أو الجواميس أو غيرها من الثدييات. تشمل منتجات الألبان العديد من الأصناف مثل الأجبان والألبان بالإضافة إلى الزبدة والقشدة. (Dairy Products)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003611.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "night-vision",
    "term_en": "Night Vision",
    "term_ar": "رؤية ليلية",
    "synonyms": [
      "Vision, Night",
      "Scotopic Vision",
      "Vision, Scotopic",
      "Rod Vision",
      "Vision, Rod"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Function of the human eye that is used in dim illumination (scotopic intensities) or at nighttime. Scotopic vision is performed by RETINAL ROD PHOTORECEPTORS with high sensitivity to light and peak absorption wavelength at 507 nm near the blue end of the spectrum.",
    "arabic_definition": "الرؤية الليلية هي القدرة على الإبصار في بيئة مظلمة، إما بطريقة حيوية طبيعية أو بوسائل تقنية، تكون الرؤية الليلية ممكنة عند اجتماع عنصرين، مجال طيف كافي، ومجال كثافة كافٍ. وله استخدامات عسكرية عديدة، كما يستخدم من قبل الباحثين كتصوير الحيوانات ليلاً حيث لا تحيط أي عين بشرية بالبيئة الليلية بكافة تفاصيلها. (Night Vision)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055254.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "color-vision",
    "term_en": "Color Vision",
    "term_ar": "رؤية اللون",
    "synonyms": [
      "Color Visions",
      "Vision, Color",
      "Visions, Color",
      "Photopic Vision",
      "Vision, Photopic",
      "Daylight Vision",
      "Vision, Daylight"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Function of the human eye that is used in bright illumination or in daylight (at photopic intensities). Photopic vision is performed by the three types of RETINAL CONE PHOTORECEPTORS with varied peak absorption wavelengths in the color spectrum (from violet to red, 400 - 700 nm).",
    "arabic_definition": "رؤية اللون أو إبصار الألوان (الإنجليزية: Color vision) هي قدرة الكائنات الحية والآلات على تمييز الأجسام اعتمادا على أطوال موجات (أو ترددات) الضوء المنعكس منها أو الصادر عنها. يميز الجهاز العصبي اللون بمقارنة استجابات الأنواع المختلفة من الخلايا المخروطية في العين للضوء.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055253.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "energy-drinks",
    "term_en": "Energy Drinks",
    "term_ar": "مشروب الطاقة",
    "synonyms": [
      "Drink, Energy",
      "Drinks, Energy",
      "Energy Drink"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Beverages that contain stimulants such as a combination of CAFFEINE with other substances such as VITAMINS; AMINO ACIDS; and sugar or sugar derivatives.",
    "arabic_definition": "مشروب الطاقة هو منتج يسوق على أنه يعمل على رفع مستويات النشاط الذهني والجسدي. ظهرت أول علامة تجارية منه عام 1977 في الولايات المتحدة الأمريكية وازدهرت صناعته واتسع انتشاره حتى وصل إلى أكثر من 500 علامة تجارية مختلفة في عام 2006. (Energy Drinks)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D061215.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glycemic-load",
    "term_en": "Glycemic Load",
    "term_ar": "حمل جلايسيمي",
    "synonyms": [
      "Load, Glycemic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A quantitative value of a measured amount of a specific food that is equal to the GLYCEMIC INDEX of that food multiplied by the carbohydrate content of that food.",
    "arabic_definition": "الحِمل الجلايسيمي (اختصارًا GL) هو رقم يبين مقدار ما سيرفعه الطعام من مستوى السكر في الدم بعد تناوله.ان وحدة واحدة من الحمل الجلايسيمي تعادل تأثير تناول جرام واحد من الجلوكوز. وهذا المصطلح جديد نسبياً يتبع مصطلح المؤشر الجلايسيمي ويستخدم معه لإعطاء صورة أوضح عن تأثير استهلاك النشويات على ارتفاع نسبة السكر في الدم لأن المؤشر الجلايسيمي يدل فقط على سرعة تحوّل طعام نشوي إلى سكر ولا يدل على كمية النشا في ذلك الطعام والتي ستتحول إلى سكر، والمطلوب هو الحصول على المعلومتين لاستيعاب تأثير طعام ما على معدل السكر في الدم. (Glycemic Load)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000067940.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "organic-food",
    "term_en": "Organic Food",
    "term_ar": "طعام عضوي",
    "synonyms": [
      "Foods, Organic",
      "Organic Foods",
      "Organic Produce",
      "Produce, Organic",
      "Natural Food",
      "Food, Natural",
      "Foods, Natural",
      "Natural Foods"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Food that is grown or manufactured in accordance with nationally regulated production standards that include restrictions on the use of pesticides, non-organic fertilizers, genetic engineering, growth hormones, irradiation, antibiotics, and non-organic ingredients.",
    "arabic_definition": "الغذاء العضوي أو الأطعمة العضوية هي الأطعمة المنتجة بأساليب لا تتضمن مدخلات صناعية مستحدثة غير طبيعية، من مبيدات حشرية صناعية وسماد كيماوي، وخلال إنتاجها لا يتم تعديلها بالتعرض للإشعاع أو بالمذيبات الصناعية أو بالمضافات الكيماوية. ولم تُظهر الدراسات العلمية حتى الآن فرقًا واضحًا مهمًا بين الطعام العضوي والطعام المزروع بالأساليب التقليدية من حيث الأمان، والقيمة الغذائية، والمذاق. (Organic Food)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058870.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sleep-latency",
    "term_en": "Sleep Latency",
    "term_ar": "كمون بدء النوم",
    "synonyms": [
      "Latency, Sleep",
      "Sleep Latencies",
      "Sleep Onset Latency",
      "Latency, Sleep Onset",
      "Onset Latencies, Sleep",
      "Sleep Onset Latencies",
      "REM Sleep Latency",
      "Latency, REM Sleep"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The time it takes to reach REM SLEEP. It is typically measured by POLYSOMNOGRAPHY or EEG as a part of various sleep pattern tests (e.g., multiple sleep latency test).",
    "arabic_definition": "في علم النوم، يُعرّف كمون بدء النوم (SOL) بأنه طول الفترة الزمنية اللازمة للانتقال من حالة اليقظة التامة إلى حالة النوم، وعادةً إلى أخف مراحل نوم حركة العين غير السريعة. (Sleep Latency)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074361.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osmotic-pressure",
    "term_en": "Osmotic Pressure",
    "term_ar": "ضغط إسموزي",
    "synonyms": [
      "Osmotic Pressures",
      "Pressure, Osmotic",
      "Pressures, Osmotic",
      "Osmotic Shock",
      "Osmotic Shocks",
      "Shock, Osmotic",
      "Shocks, Osmotic",
      "Hypotonic Shock"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The pressure required to prevent the passage of solvent through a semipermeable membrane that separates a pure solvent from a solution of the solvent and solute or that separates different concentrations of a solution. It is proportional to the osmolality of the solution.",
    "arabic_definition": "الضغط الإسموزي أو الضغط التنافدي هو الحد الأدنى للضغط الذي يحتاج ليتم تطبيقه على السوائل لمنع دخول المياه عبر غشاء نصف نافذ. ويعرف أيضا كمقياس لميل المحلول لسحب المياه عن طريق التناضح. (Osmotic Pressure)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009997.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phase-transition",
    "term_en": "Phase Transition",
    "term_ar": "تحول طوري",
    "synonyms": [
      "Phase Transitions",
      "Sol-Gel Phase Transition",
      "Phase Transition, Sol-Gel",
      "Phase Transitions, Sol-Gel",
      "Sol-Gel Phase Transitions",
      "Transition, Sol-Gel Phase",
      "Transitions, Sol-Gel Phase",
      "Gas-Liquid-Solid Phase Transitions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A change of a substance from one form or state to another.",
    "arabic_definition": "التحول الطوري في الديناميكا الحرارية، التحول الطوري هو تحول النظام الدينامي الحراري من طور إلى آخر. وعند نقطة التحول الطوري، قد تخضع الخواص الفيزيائية إلى تغير تام، ففي لحظة يمكن للحجم في الطورين أن يتغير بشكل كبير. (Phase Transition)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044367.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "circadian-rhythm",
    "term_en": "Circadian Rhythm",
    "term_ar": "نظم يوماوي",
    "synonyms": [
      "Circadian Rhythms",
      "Rhythm, Circadian",
      "Rhythms, Circadian",
      "Nycthemeral Rhythm",
      "Nycthemeral Rhythms",
      "Rhythm, Nycthemeral",
      "Rhythms, Nycthemeral",
      "Nyctohemeral Rhythm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The regular recurrence, in cycles of about 24 hours, of biological processes or activities, such as sensitivity to drugs or environmental and physiological stimuli.",
    "arabic_definition": "نَظْم يوماوي أو نظم ليلي نهاري أو نظم يومي أو الايقاعات اليومية أو الساعة البيولوجية أو تواتر يومي (الإنجليزية: circadian rhythm) هو أي عملية حيوية تتم وفقاً لتردد معين خلال 24 ساعة. هذا الإيقاع الذي يحدث على مدار 24 ساعة يتم تنظيمه بواسطة الساعة اليومية والتي لوحظت على نطاق واسع في النباتات والحيوانات والفطريات والبكتيريا الزرقاء.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002940.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carbonated-water",
    "term_en": "Carbonated Water",
    "term_ar": "ماء مكربن",
    "synonyms": [
      "Carbonated Waters",
      "Water, Carbonated",
      "Waters, Carbonated",
      "Soda Water",
      "Soda Waters",
      "Water, Soda",
      "Waters, Soda",
      "Sparkling Water"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Water naturally or artificially infused with CARBON DIOXIDE.",
    "arabic_definition": "المياه المكربنة (المعروفة أيضاً باسم ماء الصودا والمياه الغازية والماء الفوار) هو الماء الذي تم إذابة غاز ثاني أكسيد الكربون فيه تحت الضغط، وهي العملية التي تؤدي إلى أن تصبح المياه فوارة (تطلق فقاعات من الغاز في الضغط العادي). تدعى هذه العملية باسم عملية الكربنة. (Carbonated Water)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D061545.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bystander-effect",
    "term_en": "Bystander Effect",
    "term_ar": "تأثير المتفرج",
    "synonyms": [
      "Bystander Effects",
      "Effect, Bystander",
      "Effects, Bystander",
      "Bystander Help",
      "Help, Bystander",
      "Bystander Suppression",
      "Suppression, Bystander"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The result of a positive or negative response (to drugs, for example) in one cell being passed onto other cells via the GAP JUNCTIONS or the intracellular milieu.",
    "arabic_definition": "تأثير المتفرج أو لامبالاة المتفرج هي ظاهرة نفسية اجتماعية تشير إلى امتناع الشخص عن تقديم أي مساعدة للضحية إذا كان هناك حاضرون آخرون. احتمال المساعدة يرتبط عكسياً مع عدد المتفرجين. (Bystander Effect)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D024201.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "physical-fitness",
    "term_en": "Physical Fitness",
    "term_ar": "لياقة بدنية",
    "synonyms": [
      "Fitness, Physical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The ability to carry out daily tasks and perform physical activities in a highly functional state, often as a result of physical conditioning.",
    "arabic_definition": "اللياقة البدنية هي مستوى الحالة البدنية التي يعتمد عليها الإنسان الرِياضي في مكونات اللّياقة البدنية الخاصة برياضته والتي تقاس بأجهزة القياس والاختبارات العلمية ومقارنتها بالمستوى الأمثل أو عبارة عن قدرة الفرد وكفاءته البدنية للقيام بدوره في الحياة دون إجهاد أو تعب. تنقسم اللياقة البدنية إلى قسمين: اللياقة العامة (الصحة والرفاهية). (Physical Fitness)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010809.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "basal-metabolism",
    "term_en": "Basal Metabolism",
    "term_ar": "معدل الأيض الأساسي",
    "synonyms": [
      "Metabolism, Basal",
      "Basal Metabolic Rate",
      "Metabolic Rate, Basal",
      "Basal Metabolic Rates",
      "Rate, Basal Metabolic",
      "Resting Metabolic Rate",
      "Metabolic Rate, Resting",
      "Rate, Resting Metabolic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Metabolism (e.g., heat production) of an organism in an inactive, awake, fasting state. It may be determined directly by means of a calorimeter or indirectly by calculating the end products of oxidation within the organism or from the amount of oxygen utilized.",
    "arabic_definition": "معدل الأيض الأساسي أو مردود الطاقة الأساسي (Basal metabolic rate) هو القيمة التي تستخدم لوصف الاستقلاب (الأيض ،أي عملية الهضم) وبالأخص عند البشر، وهي كمية الطاقة التي يتطلبها الجسم خلال يوم واحد لإعادة صيانة وظيفته في حين يكون الجسم في حالة راحة ، أو وفي حال اليقظة صباحاً أو أثناء اليوم . في تلك الحالات لا يقوم الشخص بأي مجمهود ، بالتالي يكون الهضم لديه في تلك الحالات مجرد لإمداد الجسم بالحرارة اللازمة لكي تقوم أعضاء الجسم بوظائفها ، عمل القلب وعمل الدماغ وعمل الكبد وعمل الكليتين ، وغيرها . (Basal Metabolism)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001481.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipid-metabolism",
    "term_en": "Lipid Metabolism",
    "term_ar": "أيض الليبيدات",
    "synonyms": [
      "Metabolism, Lipid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Physiological processes in biosynthesis (anabolism) and degradation (catabolism) of LIPIDS.",
    "arabic_definition": "أيض الليبيدات أو أيض الشحوم أو استقلاب الشحوم هو اصطناع وتكسير الليبيدات في الخلايا بحسب احتياج الجسم. (Lipid Metabolism)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050356.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thermal-comfort",
    "term_en": "Thermal Comfort",
    "term_ar": "ارتياح حراري",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Maintaining comfortable temperature for living in general, and more specifically for patients in hospitals.",
    "arabic_definition": "الارتياح الحراري أو الراحة الحرارية هي الحالة الذهنية (الشعورية) التي تعبر عن الرضى بالبيئة الحرارية وتُقدّر من خلال التقييم الموضوعي (معيار آنسي/آشري 55) الموضوع من قبل «آنسي - إيه إن إس آي» وهو المعهد القومي الأمريكي للقياس و«آشري – إيه إس إتش آر إيه إي» وهي الجمعية الأمريكية لمهندسي التبريد والتدفئة وتكييف الهواء. يمكن اعتبار جسم الإنسان محركًا حراريًّا إذ يشكل الأكل طاقة الدخل (الوقود). (Thermal Comfort)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000099141.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "skin-temperature",
    "term_en": "Skin Temperature",
    "term_ar": "درجة حرارة الجلد",
    "synonyms": [
      "Skin Temperatures",
      "Temperature, Skin",
      "Temperatures, Skin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The TEMPERATURE at the outer surface of the body.",
    "arabic_definition": "تشير درجة حرارة الجلد إلى درجة حرارة السطح الخارجي للجسم. تتراوح درجة حرارة جلد الإنسان الطبيعي على جذع الجسم بين 33.5 و 36.9 درجة مئوية (92.3 و 98.4 فهرنهايت)، على الرغم من أن درجة حرارة الجلد منخفضة على الأطراف البارزة، مثل الأنف، وأعلى على العضلات والأعضاء الحيوية. (Skin Temperature)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012881.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cell-proliferation",
    "term_en": "Cell Proliferation",
    "term_ar": "تكاثر خلوي",
    "synonyms": [
      "Proliferation, Cell",
      "Cell Growth in Number",
      "Cell Number Growth",
      "Growth, Cell Number",
      "Number Growth, Cell",
      "Cell Multiplication",
      "Multiplication, Cell",
      "Cellular Proliferation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "All of the processes involved in increasing CELL NUMBER including CELL DIVISION.",
    "arabic_definition": "تكاثر الخلايا هو العملية التي تنمو بها الخلية وتنقسم لإنتاج خليتين ابنتين. يؤدي تكاثر الخلايا إلى زيادة أسية في عدد الخلايا (أي طبقا لدالة أسية) وبالتالي فهي آلية سريعة لنمو الأنسجة. (Cell Proliferation)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049109.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sound-localization",
    "term_en": "Sound Localization",
    "term_ar": "تحديد مكان الصوت",
    "synonyms": [
      "Localization, Sound",
      "Localizations, Sound",
      "Sound Localizations",
      "Auditory Localization",
      "Auditory Localizations",
      "Localization, Auditory",
      "Localizations, Auditory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Ability to determine the specific location of a sound source.",
    "arabic_definition": "تحديد موقع الصوت أو التوطين السمعي (بالانجليزيه: sound localization)هي قدرة السامع على تحديد موقع أو مصدر الصوت المكتشف من حيث الاتجاه والمسافة بينه وبين الصوت. لقد تمت دراسة آليات تحديد موقع الصوت بالنسبة إلى الصوت والمسافة في الجهاز السمعي للثدييات على نطاق اوسع يستخدم الجهاز السمعي عدة إشارات لتحديد موقع مصدر الصوت، بما في ذلك فرق التوقيت وفرق المستوى (أو فرق الشدة الصوت) بين الأذنين، والمعلومات المتاحة و يمكنها معرفة أن كان الصوت يمين أو يسار أو فوق أو تحت وما شابه.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013017.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cell-communication",
    "term_en": "Cell Communication",
    "term_ar": "تأشير الخلية",
    "synonyms": [
      "Cell Communications",
      "Communication, Cell",
      "Communications, Cell",
      "Cell Interaction",
      "Cell Interactions",
      "Interaction, Cell",
      "Interactions, Cell",
      "Cell-to-Cell Interaction"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any of several ways in which living cells of an organism communicate with one another, whether by direct contact between cells or by means of chemical signals carried by neurotransmitter substances, hormones, and cyclic AMP.",
    "arabic_definition": "تأشير الخلية هي أحد أجزاء نظام معقد للتواصل بين الخلايا يحكم الفعاليات الخلوية الأساسية والأفعال الخلوية الموجهة - فهي عمليا تبادل الإشارات بين الخلايا قابلية الخلايا لتلقي والاستجابة بشكل صحيح لبيئتها المصغرة هو أساس النمو، ترميم الانسجة وإصلاحها، وأيضا المناعة بالإضافة للتوازن النسيجي الداخلي. أي خطأ في إجرائيات المعلومات الخلوية يكون مسؤولا عن أمراض خطيرة مثل السرطان وأمراض المناعة الذاتية وداء السكري. (Cell Communication)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002450.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "liver-regeneration",
    "term_en": "Liver Regeneration",
    "term_ar": "تجدد الكبد",
    "synonyms": [
      "Liver Regenerations",
      "Regeneration, Liver",
      "Regenerations, Liver"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Repair or renewal of hepatic tissue.",
    "arabic_definition": "تجدد الكبد أو تجديد الكبد (الإنجليزية: Liver regeneration) هو العملية التي يستطيع الكبد من خلالها استبدال أنسجة الكبد المفقودة عبر نمو الأنسجة المتبقية.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008115.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "energy-metabolism",
    "term_en": "Energy Metabolism",
    "term_ar": "تنفس خلوي",
    "synonyms": [
      "Energy Metabolisms",
      "Metabolism, Energy",
      "Metabolisms, Energy",
      "Energy Expenditure",
      "Energy Expenditures",
      "Expenditure, Energy",
      "Expenditures, Energy",
      "Bioenergetics"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The chemical reactions involved in the production and utilization of various forms of energy in cells.",
    "arabic_definition": "التنفس الداخلي أو التنفس الخلوي هي مجموعة من التفاعلات الأيضية (الأيض) تحدث في الخلايا الحية لتحويل الطاقة الكيميائية الحيوية (وهي تفاعلات تستعمل الطاقة لتبسيط جزيئات معينة معقدة) تتفاعل مع الأكسجين لإنتاج الطاقة. تحدث عملية التنفس الداخلي للخلايا الحيوانية والخلايا النباتية أيضاً، خلال هذه العملية تستعمل المواد الغذائية لإنتاج مركبات هامة منها الجلوكوز والأحماض الأمينية والدهون. (Energy Metabolism)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004734.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plant-development",
    "term_en": "Plant Development",
    "term_ar": "نمو النبات",
    "synonyms": [
      "Development, Plant",
      "Developments, Plant",
      "Plant Developments",
      "Plant Morphogenesis",
      "Morphogeneses, Plant",
      "Morphogenesis, Plant",
      "Plant Morphogeneses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Processes orchestrated or driven by a plethora of genes, plant hormones, and inherent biological timing mechanisms facilitated by secondary molecules, which result in the systematic transformation of plants and plant parts, from one stage of maturity to another.",
    "arabic_definition": "نمو النبات هي العملية التي تصف نمو النباتات من حيث تشريح وفيزيولوجيا وعلم تشكل النبات. (Plant Development)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063245.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "long-term-potentiation",
    "term_en": "Long-Term Potentiation",
    "term_ar": "تأييد طويل الأمد",
    "synonyms": [
      "Long-Term Potentiations",
      "Potentiation, Long-Term",
      "Potentiations, Long-Term"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A persistent increase in synaptic efficacy, usually induced by appropriate activation of the same synapses. The phenomenological properties of long-term potentiation suggest that it may be a cellular mechanism of learning and memory.",
    "arabic_definition": "في العلوم العصبية، التأييد طويل الأمد (الإنجليزية: long-term potentiation) هو تقوية مُستديمَة للمشابك العصبية بناءً على أنماط النشاط الأخيرة، وهي عبارة عن أنماط من النشاط المشبكي التي تُنتج زيادةً طويلة في انتقال الإشارات بين عصبونين. تنتج أنماط النشاط المشبكي هذه زيادة طويلة الأمد في نقل الإشارات بين عصبونين.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017774.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tumor-microenvironment",
    "term_en": "Tumor Microenvironment",
    "term_ar": "بيئة مكروية للورم",
    "synonyms": [
      "Microenvironments, Tumor",
      "Microenvironment, Tumor",
      "Tumor Microenvironments",
      "Cancer Microenvironment",
      "Cancer Microenvironments",
      "Microenvironment, Cancer",
      "Microenvironments, Cancer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The milieu surrounding neoplasms consisting of cells, vessels, soluble factors, and molecules, that can influence and be influenced by, the neoplasm's growth.",
    "arabic_definition": "البيئة المكروية للورم أو بيئة الورم المكروية (الإنجليزية: Tumor microenvironment) هي البيئة المحيطة بورم، وتشمل: الأوعية الدموية، الخلايا المناعية، الجزيئات المؤشرة والمطرس خارج الخلوي المحيطين بالورم. الورم والبيئة الميكروية المحيطة به متصلان اتصالا وثيقا ويتآثران باستمرار.",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059016.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dietary-supplements",
    "term_en": "Dietary Supplements",
    "term_ar": "مكمل غذائي",
    "synonyms": [
      "Dietary Supplement",
      "Supplements, Dietary",
      "Dietary Supplementations",
      "Supplementations, Dietary",
      "Food Supplementations",
      "Food Supplements",
      "Food Supplement",
      "Supplement, Food"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Products in capsule, tablet or liquid form that provide dietary ingredients, and that are intended to be taken by mouth to increase the intake of nutrients. Dietary supplements can include macronutrients, such as proteins, carbohydrates, and fats; and/or MICRONUTRIENTS, such as VITAMINS; MINERALS; and PHYTOCHEMICALS.",
    "arabic_definition": "المكملات الغذائية، هي مستحضرات هدفها تكملة النظام الغذائي بمواد تغذوية مثل الفيتامين، والمعادن، والألياف، والأحماض الدهنية، والأحماض الامينية والتي قد تكون مفقودة في النظام الغذائي للشخص أو قد تكون لا تستهلك بكميات كافية. تعتبر بعض البلدان المكملات الغذائية كأطعمة، بينما تعتبرها بلدان أخرى على أنها أدوية أو منتجات صحيّة طبيعيّة. (Dietary Supplements)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019587.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prepulse-inhibition",
    "term_en": "Prepulse Inhibition",
    "term_ar": "التثبيط ما قبل النبضي",
    "synonyms": [
      "Inhibition, Prepulse",
      "Prepulse Facilitation",
      "Facilitation, Prepulse"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neurophysiological phenomenon in which the response to a startling stimulus (pulse) is decreased when a weaker prestimulus (prepulse) precedes it closely in time. It is used as an operational measure of sensorimotor gating.",
    "arabic_definition": "التثبيط ما قبل النبضي (بّي بّي آي) هو ظاهرة عصبية منطوية على وجود منبه مسبق (نبضة مسبقة) ضعيف مثبط لردة فعل الكائن الحي على منبه (نبضة) قوي لاحق محرض لمنعكس ما، وعادة ما يحدث ذلك باستخدام منعكس إجفالي. تُعد هذه المنبهات صوتية في معظم الحالات، لكن يمكن استخدام المنبهات اللمسية (على سبيل المثال، نفخ الهواء على الجلد) والمنبهات الضوئية. (Prepulse Inhibition)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065808.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "renin-angiotensin-system",
    "term_en": "Renin-Angiotensin System",
    "term_ar": "نظام الرينين-أنجيوتنسين",
    "synonyms": [
      "System, Renin-Angiotensin",
      "Renin-Angiotensin-Aldosterone System",
      "System, Renin-Angiotensin-Aldosterone",
      "Renin–angiotensin system"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A BLOOD PRESSURE regulating system of interacting components that include RENIN; ANGIOTENSINOGEN; ANGIOTENSIN CONVERTING ENZYME; ANGIOTENSIN I; ANGIOTENSIN II; and angiotensinase. Renin, an enzyme produced in the kidney, acts on angiotensinogen, an alpha-2 globulin produced by the liver, forming ANGIOTENSIN I. Angiotensin-converting enzyme, contained in the lung, acts on angiotensin I in the plasma converting it to ANGIOTENSIN II, an extremely powerful vasoconstrictor. Angiotensin II causes contraction of the arteriolar and renal VASCULAR SMOOTH MUSCLE, leading to retention of salt and water in the KIDNEY and increased arterial blood pressure. In addition, angiotensin II stimulates the release of ALDOSTERONE from the ADRENAL CORTEX, which in turn also increases salt and water retention in the kidney. Angiotensin-converting enzyme also breaks down BRADYKININ, a powerful vasodilator and component of the KALLIKREIN-KININ SYSTEM.",
    "arabic_definition": "نظام الرينين-أنجيوتنسين (الإنجليزية: renin–angiotensin system) يعرف اختصاراً بـ (RAS) ويسمى أيضاً نظام الرينين-أنجيوتنسين-ألدوستيرون (الإنجليزية: renin–angiotensin–aldosterone system) ويعرف اختصاراً (RAAS) هو نظام هرموني ينظم توازن كل من ضغط الدم والماء (أي السائل خارج الخلوي). فعندما يكون حجم الدم منخفض، تتنبه الخلايا المجاورة للكبيبات الموجودة في الكلية، فتفرز أنزيم يسمى الرينين مباشرة إلى الدوران (الدم). (Renin-Angiotensin System)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012084.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "biostatistics",
    "term_en": "Biostatistics",
    "term_ar": "إحصاء حيوي",
    "synonyms": [
      "Biological Statistics",
      "Biological Statistic",
      "Statistic, Biological",
      "Statistics, Biological"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The application of STATISTICS to biological systems and organisms involving the retrieval or collection, analysis, reduction, and interpretation of qualitative and quantitative data.",
    "arabic_definition": "الإحصاء الحيوي أو إحصاء بيولوجي (وهو لفظ مرخم من الأحياء والإحصاء ويرمز إليه أحيانا بعلم الإحصاء الحيوي أو القياسات الحيوية) هو تطبيق الإحصاءات على مجموعة واسعة من المواضيع في علم الأحياء. يشمل علم الإحصاء الحيوي تصميم الاختبارات الحيوية وخصوصا في الطب والزراعة وجمع وتلخيص وتحليل المعلومات من هذه التجارب وتفسير النتائج والاستنباط منها. (Biostatistics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056808.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "condoms",
    "term_en": "Condoms",
    "term_ar": "عازل ذكري",
    "synonyms": [
      "Condom",
      "Condom Manufacture",
      "Manufacture, Condom"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sheath that is worn over the penis during sexual behavior in order to prevent pregnancy or spread of sexually transmitted disease.",
    "arabic_definition": "العازل الذكري (جمع: عوازل ذكرية) (الإنجليزية: Male Condom) المعروف بالكندوم أو الكبوت ويعرف أيضاً بالواقي الذكري. هو مادة مطاطية (Latex) مصنعة على شكل اسطواني ناعمة الملمس وشفافة ورقيقة جدا، قابلة للتمدد ذات ألوان وروائح مختلفة. (Condoms)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017280.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dentistry",
    "term_en": "Dentistry",
    "term_ar": "طب الأسنان",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The profession concerned with the teeth, oral cavity, and associated structures, and the diagnosis and treatment of their diseases including prevention and the restoration of defective and missing tissue.",
    "arabic_definition": "طب الأسنان المعروف أيضًا باسم طب الفم، هو فرع من فروع الطب يتكون من دراسة وتشخيص ووقاية وعلاج أمراض واضطرابات وحالات تجويف الفم، عادةً في الأسنان (تطور وترتيب الأسنان) وكذلك الغشاء المخاطي الفموي والتركيبات والأنسجة المجاورة والمرتبطة بها، خاصة في منطقة الوجه والفكين. يشمل مجال طب الأسنان بالإضافة إلى جوانب أخرى من المركب القحفي الوجهي بما في ذلك المفصل الصدغي الفكي وغيرها من الهياكل الداعمة والعضلية والليمفاوية والعصبية والأوعية الدموية والتشريحية. (Dentistry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003813.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fractals",
    "term_en": "Fractals",
    "term_ar": "كسورية",
    "synonyms": [
      "Fractal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Patterns (real or mathematical) which look similar at different scales, for example the network of airways in the lung which shows similar branching patterns at progressively higher magnifications. Natural fractals are self-similar across a finite range of scales while mathematical fractals are the same across an infinite range. Many natural, including biological, structures are fractal (or fractal-like). Fractals are related to chaos (see NONLINEAR DYNAMICS) in that chaotic processes can produce fractal structures in nature, and appropriate representations of chaotic processes usually reveal self-similarity over time.",
    "arabic_definition": "الكُسوريّات (المفرد: كُسورِيّة) (الإنجليزية: Fractals) هي أشكال هندسية تختلف عن الأشكال الهندسية الأخرى بسبب الطريقة التي تتدرج بها زيادة أو نقصاناً. مضاعفة أطوال حافة مضلع مرتين يضاعف مساحته أربع مرات، أي اثنان (النسبة بين الطول الجديد إلى طول الجانب القديم) مرفوعاً للقوة (أس) اثنين (مساحة المضلع).",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017709.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypnosis",
    "term_en": "Hypnosis",
    "term_ar": "تنويم مغناطيسي",
    "synonyms": [
      "Hypnotism",
      "Mesmerism",
      "Hypnotherapy",
      "Hypnotherapies",
      "Clinical Hypnosis",
      "Hypnosis, Clinical",
      "Hypnoanalysis",
      "Self-Hypnosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A state of increased receptivity to suggestion and direction, initially induced by the influence of another person or oneself.",
    "arabic_definition": "التنويم الإيحائي أو التنويم المغناطيسي (اللاتينية: Hypnosis) هو حالة ذهنية هادئة ومسترخية، يستقبل فيها اللاوعي الايحاءات ويستجيب لها بحالة أوسع وفي هذه الحالة يكون العقل الباطن مستجيب بشكل كبير للإقتراحات والإيحاءات. التنويم الإيحائي هو حالة طبيعية جدا، ويمكن القول بأن كل شخص سبق ومر بتجربة كهذه حتى ولو بحالات جزئية.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006990.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rheology",
    "term_en": "Rheology",
    "term_ar": "علم الجريان",
    "synonyms": [
      "Flowmetry",
      "Velocimetry",
      "Velocimetries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The study of the deformation and flow of matter, usually liquids or fluids, and of the plastic flow of solids. The concept covers consistency, dilatancy, liquefaction, resistance to flow, shearing, thixotrophy, and VISCOSITY.",
    "arabic_definition": "علم الجريان أو الريولوجيا أو علم الصلب سائلية أو إوالة الحالة فرع من علم الإوالة يُعنى بحالات المادة وما يحدث فيها من حيث اللزوجة والتمدد والتلدن بتأثير العوامل الخارجية. وهو ذلك الجزء من الميكانيكا الذي يتناول العلاقة بين القوة والتشوه في الأجسام المادية. (Rheology)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012212.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shamanism",
    "term_en": "Shamanism",
    "term_ar": "شامانية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An intermediate stage between polytheism and monotheism, which assumes a Great Spirit, with lesser deities subordinated. With the beginnings of shamanism there was the advent of the medicine man or witch doctor, who assumed a supervisory relation to disease and its cure. Formally, shamanism is a religion of Ural-Altaic peoples of Northern Asia and Europe, characterized by the belief that the unseen world of gods, demons, ancestral spirits is responsive only to shamans. The Indians of North and South America entertain religious practices similar to the Ural-Altaic shamanism. The word shaman comes from the Tungusic (Manchuria and Siberia) saman, meaning Buddhist monk. The SHAMAN handles disease almost entirely by psychotherapeutic means; he frightens away the demons of disease by assuming a terrifying mien. (From Garrison, An Introduction to the History of Medicine, 4th ed, p22; from Webster, 3d ed)",
    "arabic_definition": "الشامانية ظاهرة دينية تتضمن مجالات الشامان وممارساته (السحر والشعوذة). بالرغم من أن الشامانية موجودة بعدة أشكال حول العالم، قد يكون موطن الشامانية بشكلها النقي سيبيريا وآسيا الوسطى، بالإضافة إلى السكان الأصليين للأمريكتين والذين يبدون من أصول وسط آسيوية. (Shamanism)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019423.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "telemetry",
    "term_en": "Telemetry",
    "term_ar": "قياس عن بعد",
    "synonyms": [
      "Telemetries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Transmission of the readings of instruments to a remote location by means of wires, radio waves, or other means. (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "القياس عن بعد أو القياس البعادي (الإنجليزية: Telemetry) هو العملية لقياس ظاهرة عن بعد باستخدام نظام استشعار، تُحَوَّل نتيجة القياس إلى بيانات رقمية وتنقل إلى مكان التحليل لمعالجتها واستخدامها.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013686.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "placebos",
    "term_en": "Placebos",
    "term_ar": "علاج وهمي",
    "synonyms": [
      "Sham Treatment",
      "Placebo"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any dummy medication or treatment. Although placebos originally were medicinal preparations having no specific pharmacological activity against a targeted condition, the concept has been extended to include treatments or procedures, especially those administered to control groups in clinical trials in order to provide baseline measurements for the experimental protocol.",
    "arabic_definition": "العِلاج الوَهميّ(1) (الإنجليزية: Placebo) وتترجم حرفيًا إلى بلاسيبو وهو مادة تُعطى للمريض بهدف علاجه، ولا يكون لها تأثير حقيقي في علاج المرض بعينه، فبها يتم إيهام المريض نفسيًا بأن هذا العلاج الذي يتناوله يحمل شفاءً لمرضه وأنه علاج فعال في التخلص منه، كما يستخدم هذا العلاج في اختبارات الأدوية الجديدة وفي الأبحاث الطبية، دون معرفة المُتداوي ما إذا كان هذا الدواء فعّالًا أم لا، ويطلق على الحالة التي يرى فيها المتلقي للدواء أنه قد شعر بتحسن فعلًا بسبب توقعاته الشخصية «تأثير الدواء الوهمي» أو «استجابة الوهم». ويؤثر العلاج الوهمي حتى على الأشخاص الذين يعرفون أنهم يتلقون علاجًا وهميًا، وقد يُضاف إلى العلاج الوهمي بعض المواد العلاجية، فحسب دراسة أجريت عام 2010، تم إضافة الألياف إلى الدواء الوهمي الذي أُعطي للمرضى الذين يعانون من القولون العصبي، ولكن لوحظ أن استخدام العلاجات التي لا يعرفها المريض - سواء أكان علاجًا وهميًا أم لا- قد تكون أقل فعالية من العلاجات التي يتم إبلاغ المريض عنها. (Placebos)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010919.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "syringes",
    "term_en": "Syringes",
    "term_ar": "محقنة",
    "synonyms": [
      "Syringe",
      "Syringe, Karman",
      "Karman Syringe",
      "Hypodermic Syringes",
      "Hypodermic Syringe",
      "Syringe, Hypodermic",
      "Syringes, Hypodermic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Instruments used for injecting or withdrawing fluids. (Stedman, 25th ed)",
    "arabic_definition": "المحقنة أو الزرَّاقة أداة طبية تستخدم لحقن السوائل العلاجية بالجسم سواء تحت الجلد في العروق والشرايين أو في العضل. الحقنة في تكوينها شبيه بالمضخة تتكون من أنبوب مستدق في أحد طرفيه، ويمر بداخله مكبس، أو ذراع اسطواني مسمط، ويعمل كل من الكبس والذراع على شفط أو دفع السوائل أو سحبها بوساطة الشفط . (Syringes)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013594.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nomograms",
    "term_en": "Nomograms",
    "term_ar": "مخطط محاذاة",
    "synonyms": [
      "Nomogram",
      "Partin Tables",
      "Partin Table",
      "Table, Partin",
      "Tables, Partin",
      "Partin Nomograms",
      "Nomogram, Partin",
      "Nomograms, Partin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Graphical representation of a statistical model containing scales for calculating the prognostic weight of a value for each individual variable. Nomograms are instruments that can be used to predict outcomes using specific clinical parameters. They use ALGORITHMS that incorporate several variables to calculate the predicted probability that a patient will achieve a particular clinical endpoint.",
    "arabic_definition": "مخطط المحاذاة أو الخَطَط (الإنجليزية: nomogram أو nomograph) هو أداة حسابية بيانية، وهو مخطط ثنائي الأبعاد مصمم للسماح بالحساب البياني التقريبي لدالة رياضية. اخترع المهندس الفرنسي فِلْبَار موريس دوكاني (1862-1938) مجال الحساب بمخطط المحاذاة أو حساب الخطط (nomography) عام 1884، واستُخدم على نطاق واسع لسنوات عديدة لتزويد المهندسين بحسابات بيانية سريعة للصيغ المعقدة بدقة عملية. (Nomograms)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049451.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bandages",
    "term_en": "Bandages",
    "term_ar": "ضمادة",
    "synonyms": [
      "Bandage",
      "Dressings",
      "Dressing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Material used for wrapping or binding any part of the body.",
    "arabic_definition": "العِصَابَة أو العُصْبَة أو الضِّمَادة أو الرباط الطبي (الإنجليزية: bandage) أي مادة تُستعمل للتثبيت أو للضغط على موضع لتمنع تلوث الجرح أو تُستعمل ضاغطًا لوقف النزف أو لرفع وتعليق العِظام المكسورة. تعدّ الضمادة رباطا طبيا وهي أية مادة تُستعمل لتثبيت ضماد أو للضغط على موضع لتمنع تلوث الجرح أو تُستعمل ضاغطًا لوقف النزف أو لرفع وتعليق العِظام المكسورة. (Bandages)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001458.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "catheters",
    "term_en": "Catheters",
    "term_ar": "قسطر",
    "synonyms": [
      "Catheter"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A flexible, tubular device that is used to carry fluids into or from a blood vessel, hollow organ, or body cavity.",
    "arabic_definition": "القسطر (ج.: قساطر) أو القثطار (ج.: قثاطير) هو أنبوب يستخدم في عملية القسطرة، مصنوع من المعدن أو المطاط أو البلاستيك يتفاوت حجمه وليونته حسب استخداماته، فهو يستخدم في العديد من الأغراض الطبية. ومنها القسطرة الخاصة بالقلب والأوعية الدموية، وقسطرة المسالك البولية، وقسطرة الجهاز الهضمي. (Catheters)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057785.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cannula",
    "term_en": "Cannula",
    "term_ar": "قنية",
    "synonyms": [
      "Cannulae",
      "Nasal Cannula",
      "Cannula, Nasal",
      "Nasal Cannulae",
      "Cannulae, Nasal",
      "High Flow Nasal Canula",
      "قنية (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Short, hollow cylinders or tubes for insertion into a canal, vessel, or body cavity.",
    "arabic_definition": "القُنيّة الطبية أو القُصَيبَة أو (نقحرة: كانيولا) (الإنجليزية: Cannula)، والقنية لغويًا هي القناة الصغيرة. والقُنيّة الطبية هي أنبوب دقيق يمكن إدراجه في فتحات أو أوعية أو تجاويف الجسم، لإدخال أو سحب السوائل والغازات.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000072601.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trusses",
    "term_en": "Trusses",
    "term_ar": "جائز شبكي",
    "synonyms": [
      "Truss"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A surgical device designed for retaining a hernia in a reduced state within the abdominal cavity.",
    "arabic_definition": "الجائز الشبكي، يُطلَق عليه أيضًا الجَمَلُون أو الجِمَالُون أو المُسَنّّم (الإنجليزية: Truss)، مجموعةٌ من الروافد مثل الجوائز، متصلة بعقد، مما يصنع هيكل جاسئ (rigid). (Trusses)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014340.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pessaries",
    "term_en": "Pessaries",
    "term_ar": "تحميلة مهبلية",
    "synonyms": [
      "Pessary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Devices worn in the vagina to provide support to displaced uterus or rectum. Pessaries are used in conditions such as UTERINE PROLAPSE; CYSTOCELE; or RECTOCELE.",
    "arabic_definition": "تحميلة مهبليَّة أو الفَرْزَجَة (الجمع: فَرازج) أو أو تحميلة رحميَّة أو ساندة الرحم أو الكَعكة المهبلية (الإنجليزية: Pessary) هي أداةٌ طبيَّة توضع في المهبل لأغراضٍ هيكيلية وصيدلانيَّة. تُستخدم بشكلٍ شائع لعلاج سلس الإجهاد لإيقاف تسرب البول وعلاج تدلي الأعضاء الحوضيَّة للحفاظ على موقع الأعضاء في منطقة الحوض. (Pessaries)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010570.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dentures",
    "term_en": "Dentures",
    "term_ar": "بدلة سنية",
    "synonyms": [
      "Denture"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An appliance used as an artificial or prosthetic replacement for missing teeth and adjacent tissues. It does not include CROWNS; DENTAL ABUTMENTS; nor TOOTH, ARTIFICIAL.",
    "arabic_definition": "البِدْلَة أو البِدلة السنية أو بدلة الأسنان الصنعية أو جهاز الأسنان الصنعي أو مجموعة الأسنان الاصطناعية أو طقم الأسنان أو السَنِينة (الإنجليزية: denture) هو بديل للأسنان المفقودة تدعمه الأنسجة الرخوة والصلبة المحيطة في تجويف الفم. البدلات السنية التقليدية تكون نزوعة (البدلة السنية الكاملة أو البدلة السنية الجزئية النزوعة)، ومع ذلك، هناك العديد من تصميمات البدلات السنية، يعتمد بعضها على الترابط أو التثبيت على الأسنان أو الزرعات السنية (التعويضات السنية الثابتة). (Dentures)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003778.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diathermy",
    "term_en": "Diathermy",
    "term_ar": "استحرار",
    "synonyms": [
      "Diathermies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The induction of local hyperthermia by either short radio waves or high-frequency sound waves.",
    "arabic_definition": "الاستحرار أو الإنفاذ الحراري هو الحرارة المستحثة كهربائياً أو استخدام التيارات الكهرومغنطيسية عالية التردد شكلًا من أشكال العلاج الطبيعي وفي العمليات الجراحية. قام جاك أرسين دَرسُنفال بأول الملاحظات على تفاعلات التيارات الكهرومغنطيسية عالية التردد على الكائن البشري. (Diathermy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003972.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prognosis",
    "term_en": "Prognosis",
    "term_ar": "مآل",
    "synonyms": [
      "Prognoses",
      "Prognostic Factors",
      "Prognostic Factor",
      "Factor, Prognostic",
      "Factors, Prognostic",
      "مآل (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A prediction of the probable outcome of a disease based on a individual's condition and the usual course of the disease as seen in similar situations.",
    "arabic_definition": "المآل (أو التكهّن أو توقّعات سير المرض) هو مصطلح طبي يشير إلى التنبؤ بالنتيجة المستقبلية لحالة المريض بناء على المعطيات الحالية بين يدي الاختصاصي المعالج. يُستخدم هذا المصطلح استخدامًا واسعًا في مجال العلاج النفسي وعلم النفس السريري. (Prognosis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011379.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pacifiers",
    "term_en": "Pacifiers",
    "term_ar": "لهاية",
    "synonyms": [
      "Pacifier"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Devices that babies can suck on when they are not feeding. The extra sucking can be comforting to the babies and pacify them. Pacifiers usually are used as a substitute for the thumb in babies who suck on their thumb or fingers almost constantly.",
    "arabic_definition": "اللَهّاية أو المَصّاصة أو المُسَكِّتة أو البزَّازة أو الحلمة الصناعية هي أداة يمصها الرضيع لإلهائه. يقوم بعض الأطفال بمص أصابعهم حتى قبل أن يولدوا. (Pacifiers)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041361.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "perfusion",
    "term_en": "Perfusion",
    "term_ar": "تروية دموية",
    "synonyms": [
      "Perfusions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Treatment process involving the injection of fluid into an organ or tissue.",
    "arabic_definition": "التروية الدموية أو الإرواء هي عملية تزويد الأنسجة الحيوية والخلايا بالأكسجين والغذاء ومتفاعلات الاستقلاب، وعملية نقل ما تنتجه الخلايا من ثاني أكسيد الكربون ومركبات وفضلات أيضية بعيدا عن الخلية بواسطة الدم. فالإرواء (Perfusion) أساس التبادل الحيوي في الكائنات متعددة الخلايا، حيث لا يكفي الانتشار البسيط في تحقيق تبادل حيوي فعال في متعددة الخلايا.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010477.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tocolysis",
    "term_en": "Tocolysis",
    "term_ar": "مضادات المخاض",
    "synonyms": [
      "Tocolyses",
      "Therapy, Tocolytic",
      "Therapies, Tocolytic",
      "Tocolytic Therapies",
      "Tocolytic Therapy",
      "Tocolytic Treatment",
      "Tocolytic Treatments",
      "Treatments, Tocolytic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any drug treatment modality designed to inhibit UTERINE CONTRACTION. It is used in PREGNANT PEOPLE to arrest PREMATURE LABOR.",
    "arabic_definition": "مضادات المخاض (الإنجليزية: Tocolytics) (وتسمى أيضا الأدوية المضادة للانقباضات (الإنجليزية: anti-contraction medications) أو مثبطات المخاض (الإنجليزية: labor suppressants)) هي أدوية تستخدم لقمع المخاض المبكّر. كما توفر مضادات المخاض أيضًا الوقت اللازم لتعاطي عقار البيتاميثازون، وهو هرمون قشري سكري يسرع بشكل كبير من نضج رئة الجنين، ولكنه يستغرق من يوم إلى يومين. (Tocolysis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015145.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "audiometry",
    "term_en": "Audiometry",
    "term_ar": "قياس السمع",
    "synonyms": [
      "Audiometries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The testing of the acuity of the sense of hearing to determine the thresholds of the lowest intensity levels at which an individual can hear a set of tones. The frequencies between 125 and 8000 Hz are used to test air conduction thresholds and the frequencies between 250 and 4000 Hz are used to test bone conduction thresholds.",
    "arabic_definition": "قياس السمع (الإنجليزية: audiometry) (اللاتينية: audīre)، بمعنى «سماع» و metria، بمعنى «قياس») هو أحد فروع علم السمع وعلم قياس حدة السمع للاختلافات في شدة الصوت ودرجة الصوت والنقاء النغمي، التي تنطوي على عتبات وترددات مختلفة. عادةً ما تحدد الاختبارات السمعية مستويات السمع لدى الشخص بمساعدة مقياس السمع، ولكنها قد تقيس أيضًا القدرة على التمييز بين شدة الصوت المختلفة أو التعرف على درجة الصوت أو التمييز بين الكلام وضجيج الخلفية.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001299.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "palpation",
    "term_en": "Palpation",
    "term_ar": "جس",
    "synonyms": [
      "Palpations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Application of fingers with light pressure to the surface of the body to determine consistence of parts beneath in physical diagnosis; includes palpation for determining the outlines of organs.",
    "arabic_definition": "في الطب، الجس (الإنجليزية: Palpation) هو عملية فحص جسم أحد ما بواسطة اليد، خاصة في حالة تشخيص مرض ما. يقوم بعملية الجس عادة أحد مختصي الرعاية الصحية للشعور بجسم أو شيء داخل الجسم لمعرفة حجمه أو شكله أو صلابته أو موقعه، وكذلك لجس نبض شريان أو وريد ما.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010173.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "crutches",
    "term_en": "Crutches",
    "term_ar": "عكاز",
    "synonyms": [
      "Crutch"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Wooden or metal staffs designed to aid a person in walking. (UMDNS,1999)",
    "arabic_definition": "العكاز هي وسيلة تساعد الإنسان على التنقل في حال ضعف الحركة أو إصابة التي تحد من القدرة على المشي. (Crutches)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003446.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "surrogacy",
    "term_en": "Surrogacy",
    "term_ar": "تأجير الرحم",
    "synonyms": [
      "Gestational Surrogacy",
      "Traditional Surrogacy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A reproductive process where a SURROGATE MOTHER carries and gives birth to a child for another person or couple.",
    "arabic_definition": "تأجير الرحم (الإنجليزية: surrogacy) ويعرف أيضاً بالحمل البديل هو إجراء، غالبًا ما يترافق باتفاق قانوني، توافق بموجبه امرأة (الأم البديلة) على إنجاب طفل لشخص آخر أو أشخاص آخرين، بحيث يصبح/ان والد/ي الطفل بعد الولادة. قد يلجأ الأفراد لهذا الإجراء عندما يكون الحمل غير ممكن طبيًا، أو عندما تكون مخاطر الحمل شديدة الخطورة بالنسبة للأم المقصودة، أو عندما يرغب رجل أعزب أو زوجان مثليان في إنجاب طفل.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000099114.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "balneology",
    "term_en": "Balneology",
    "term_ar": "علاج بالمياه المعدنية",
    "synonyms": [
      "Balneotherapy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Therapy by various hot or warm baths in natural mineral waters, spas, or cures. It includes not only bathing in, but also drinking the waters, but it does not include whirlpool baths (HYDROTHERAPY).",
    "arabic_definition": "العلاج بالمياه المعدنية أو المعالجة بالاستحمام أو المعالجة بالحمام (اللاتينية: balneum) هو حالة الإفادة المفترضة لعلاج مرض عن طريق الاستحمام، وهو تقنية تستخدم في الطب التقليدي تُمارس في الحمامات المعدنية (سبا). والعلاج بالاستحمام يتميز عن العلاج بالماء، إلا أن الممارسات في الحالتين تتشابه، كما تتشابه المبادئ الأساسية. (Balneology)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001452.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "otoscopes",
    "term_en": "Otoscopes",
    "term_ar": "منظار الأذن",
    "synonyms": [
      "Otoscope"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Instruments designed to inspect or auscultate the ear. They are designed primarily to examine the outer ear canal and tympanic membrane by means of light and air under moderate pressure, as with a pneumatic otoscope. (UMDNS, 1999)",
    "arabic_definition": "منظار الأذن (الإنجليزية: Otoscope) هو جهاز طبي يستخدم في النظر إلى داخل الأذن. يستخدم الأطباء منظار الأذن أثناء الفحوصات للكشف عن الأمراض ذات الأعراض المتعلقة بالأذن. (Otoscopes)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019720.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "manometry",
    "term_en": "Manometry",
    "term_ar": "قياس الضغط",
    "synonyms": [
      "Manometries",
      "Tonometry"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Measurement of the pressure or tension of liquids or gases with a manometer.",
    "arabic_definition": "قياس الضغط أو قياس الضغط بالمانومتر (الإنجليزية: Manometry) هو مُصطلح طبي، يُقصد به عملية تقييم الضغط، ومن أشكاله:",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008365.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulpotomy",
    "term_en": "Pulpotomy",
    "term_ar": "بضع اللب",
    "synonyms": [
      "Pulpotomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Dental procedure in which part of the pulp chamber is removed from the crown of a tooth.",
    "arabic_definition": "بضع اللب (الإنجليزية: pulpotomy) ، أو بتر اللُب هي عملية ازالة جزء من لُب السن، بما في ذلك الجانب المصاب من اللب، بهدف الحفاظ على حيوية الأنسجة اللبية المتبقية داخل السِن. السن السليم عادةً لديه مساحة بداخله تُسَمّى «مساحة اللب» وهي مليئة بالأنسجة الرخوة - الأعصاب والأوعية الدموية والأنسجة الضامة وردية اللون.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011672.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rna-seq",
    "term_en": "RNA-Seq",
    "term_ar": "تتابع الحمض النووي الريبي RNA",
    "synonyms": [
      "Whole Transcriptome Shotgun Sequencing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "High-throughput nucleotide sequencing techniques developed for determining and analyzing the composition of the TRANSCRIPTOME of a sample.",
    "arabic_definition": "يستخدم RNA-Seq تسلسل الجيل التالي (NGS) للكشف عن وجود وكمية من الحمض النووي الريبي في عينة بيولوجية في لحظة معينة، وتحليل المتغير الخلوي المستمر. على وجه التحديد، يسهل RNA-Seq القدرة على النظر إلى الجينات البديلة المقسمة، والتعديلات بعد النسخ، والانصهار الجيني، والطفرات / SNPs والتغيرات في التعبير الجيني مع مرور الوقت، أو الاختلافات في التعبير الجيني في مجموعات أو علاجات مختلفة.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000081246.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lasers",
    "term_en": "Lasers",
    "term_ar": "ليزر",
    "synonyms": [
      "Laser",
      "Pulsed Lasers",
      "Laser, Pulsed",
      "Lasers, Pulsed",
      "Pulsed Laser",
      "Continuous Wave Lasers",
      "Continuous Wave Laser",
      "Laser, Continuous Wave"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An optical source that emits photons in a coherent beam. Light Amplification by Stimulated Emission of Radiation (LASER) is brought about using devices that transform light of varying frequencies into a single intense, nearly nondivergent beam of monochromatic radiation. Lasers operate in the infrared, visible, ultraviolet, or X-ray regions of the spectrum.",
    "arabic_definition": "الليزر أو تكثيف الضوء بالانبعاث المحفز للإشعاع (الإنجليزية: Light Amplification by Stimulated Emission of Radiation اختصاراً LASER) هو جهاز ينبعث منه الضوء من خلال عملية تضخيم ضوئي تعتمد على الانبعاث المستحث للإشعاع الكهرومغناطيسي. تكون فوتوناته متساوية في التردد ومتطابقة الطور الموجي حيث تتداخل الموجات وقد تعضدد بعضها البعض مما يُحدث تقوية للشعاع الضوئي. (Lasers)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007834.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lenses",
    "term_en": "Lenses",
    "term_ar": "عدسة (بصريات)",
    "synonyms": [
      "Lens"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pieces of glass or other transparent materials used for magnification or increased visual acuity.",
    "arabic_definition": "العدسة هي جهاز نفاذي بصريات يعمل على تركيز أو تشتيت الأشعة الضوئية بفعل خاصية انكسار الضوء. تتكون العدسة البسيطة من قطعة واحدة شفّافة، بينما تتكون العدسة المركبة من عدة عدسات بسيطة (\"عناصر\")، عادةً ما تكون مرتبة على محور طولي مشترك يعرف بالمحور البصري. (Lenses)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007909.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "yoga",
    "term_en": "Yoga",
    "term_ar": "يوجا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A major orthodox system of Hindu philosophy based on Sankhya (metaphysical dualism) but differing from it in being theistic and characterized by the teaching of raja-yoga as a practical method of liberating the self. It includes a system of exercises for attaining bodily or mental control and well-being with liberation of the self and union with the universal spirit. (From Webster, 3d ed)",
    "arabic_definition": "اليوجا أو اليوغا (بالهندية:योग) هي مجموعة من الطقوس الروحية القديمة أصلها في الهند، كمصطلح عام في الهندوسية، «جافين فلود» يعرف اليوجا بأنها تشير إلى «طريقة فنية أو ضوابط محددة من التصوف والزهد والتأمل، مما يرمي إلى خبرة روحية وفهم عميق جدا أو بصيرة في الخبرات». خارج الهند، أصبحت اليوجا مرتبطة بالممارسة في وضعية من التمارين «هاثا يوجا»، كما أنها أثرت بشكل كامل في عائلات تدين بالبراهمانية وممارسات أخرى روحية حول العالم. (Yoga)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015013.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "massage",
    "term_en": "Massage",
    "term_ar": "تدليك",
    "synonyms": [
      "Zone Therapy",
      "Therapies, Zone",
      "Zone Therapies",
      "Therapy, Zone",
      "Massage Therapy",
      "Massage Therapies",
      "Therapies, Massage",
      "Therapy, Massage"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The systematic and methodical manipulations of body tissues best performed with the hands for the purpose of affecting the nervous and muscular systems and the general circulation.",
    "arabic_definition": "التَّدْلِيكُ هو معالجة الأنسجة الرخوة في الجسد. تُطبق تقنيات التدليك عمومًا باستخدام الأيدي أو الأصابع أو المرافق أو الركب أو السواعد والأقدام أو بجهاز. (Massage)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008405.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gait",
    "term_en": "Gait",
    "term_ar": "مشية",
    "synonyms": [
      "Gaits"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Manner or style of walking.",
    "arabic_definition": "المشية هي نمط حركة الإنسان والحيوانات عند الانتقال على الأطراف من مكان على أرضية صلبة لآخر. بالنسبة للحيوانات فهناك تنوع في أساليب المشية، وذلك وفقاً للسرعة أو التضاريس أو للحاجة للمناورة عند الافتراس؛ كما يعتمد أسلوب المشية أيضاً على التشريح والبناء الجسماني للحيوان. (Gait)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005684.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enema",
    "term_en": "Enema",
    "term_ar": "حقنة شرجية",
    "synonyms": [
      "Enemas",
      "Enemata",
      "Enematas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Insertion of a solution or compound through the RECTUM with the purpose of cleansing the COLON or for diagnostic procedures.",
    "arabic_definition": "الحقنة الشرجية هي حقنة تُضخ للأمعاء الغليظة عن طريق المستقيم. ويمكن أن تشير أيضا إلى السائل الذي يُحقن، بالإضافة إلى الجهاز الذي يُحقن به. (Enema)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004733.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "crowns",
    "term_en": "Crowns",
    "term_ar": "تاج",
    "synonyms": [
      "Crown",
      "Crown, Dental",
      "Crowns, Dental",
      "Dental Crown",
      "Dental Crowns"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A prosthetic restoration that reproduces the entire surface anatomy of the visible natural crown of a tooth. It may be partial (covering three or more surfaces of a tooth) or complete (covering all surfaces). It is made of gold or other metal, porcelain, or resin.",
    "arabic_definition": "«التاج» هو لباس الرأس للملوك. كان استخدام التاج معروفا من أول نشأة اللإنسان وذلك لأن حب الزينة غريزة من غرائزه وقد أشبع «الإنسان» الأقدم هذا الميل فيه بالزهور التي كان يجدها بين يديه وكان أخص أنواع الزينة عند الأقدمين وضع تاج من «الزهور» على الرأس. (Crowns)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003442.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hygiene",
    "term_en": "Hygiene",
    "term_ar": "نظافة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The science dealing with the establishment and maintenance of health in the individual and the group. It includes the conditions and practices conducive to health. (Webster, 3d ed)",
    "arabic_definition": "النظافة وسماها الإغريق فن الصحة (اليونانية: ὑγιεινός) هي مجموعة من الممارسات المترافقة مع حفظ الصحة والمعيشة الصحية. النظافة هي مفهوم طبي، فضلا عن ممارسات العناية الشخصية والمهنية المتصلة بمعظم نواحي الحياة، وإن كانت على الأغلب مرتبطة بالنظافة والمعايير الوقائية. (Hygiene)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006920.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "masks",
    "term_en": "Masks",
    "term_ar": "قناع",
    "synonyms": [
      "Mask"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Devices that cover the nose and mouth to maintain aseptic conditions often for the prevention of the spread of infections (e.g. COVID19) or to administer inhaled anesthetics or other gases.",
    "arabic_definition": "القناع هو رداء يغطي الوجه أو معظمه وله استخدامات عديدة كالتنكر وغيره. فالقناع في المصارعة المكسيكيه من أهم لباس المصارع المكسيكي ونادراً جداً ما تجد أحدهم لا يلبس قناعاً على وجهه. (Masks)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008397.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autopsy",
    "term_en": "Autopsy",
    "term_ar": "تشريح الجثة",
    "synonyms": [
      "Autopsies",
      "Post-Mortem Examination",
      "Examination, Post-Mortem",
      "Examinations, Post-Mortem",
      "Post-Mortem Examinations",
      "Postmortem Examination",
      "Examination, Postmortem",
      "Examinations, Postmortem"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Postmortem examination of the body.",
    "arabic_definition": "تشريح الجثة (الإنجليزية: Autopsy) يسمى أيضاً بـ التشريح الجنائي أو فحص ما بعد الوفاة، هو إجراء طبي يتكون من فحص دقيق للجثة لتحديد سبب وطريقة الوفاة وتقييم أي مرض أو إصابة قد تكون حدثت للجثة. وعادة يقوم بالعملية طبيب متخصص في علم الأمراض.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001344.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "reflex",
    "term_en": "Reflex",
    "term_ar": "منعكس",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An involuntary movement or exercise of function in a part, excited in response to a stimulus applied to the periphery and transmitted to the brain or spinal cord.",
    "arabic_definition": "الفعل المنعكس (الإنجليزية: Reflex) ، والمعروف أيضا بأسم الانعكاس أو المنعكس، هي استجابة فورية لمحفز ما أو حركة لا إرادية، والانعكاس الحقيقي هو السلوك المكتسب من خلال منحنى الانعكاس (أو قوس الانعكاس).",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012018.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "catgut",
    "term_en": "Catgut",
    "term_ar": "خيوط أمعاء القطط",
    "synonyms": [
      "Catguts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Sterile collagen strands obtained from healthy mammals. They are used as absorbable surgical ligatures and are frequently impregnated with chromium or silver for increased strength. They tend to cause tissue reaction.",
    "arabic_definition": "خيوط أمعاء القط هو نوع من أنواع الخيوط التي يتم تحضيرها من الألياف الطبيعية الموجودة في جدران الأمعاء الحيوانية. وعادة ما يستخدم صناع الخيوط الجارحية أمعاء الأغنام أو الماعز، ولكن أحيانًا يستخدمون أمعاء الماشية، الخنازير، والخيول، والبغال، أو الحمير. (Catgut)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002398.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "beds",
    "term_en": "Beds",
    "term_ar": "سرير",
    "synonyms": [
      "Bed",
      "Mattresses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Equipment on which one may lie and sleep, especially as used to care for the hospital patient.",
    "arabic_definition": "السرير (الجمع: أَسِرَّة وسُرُر) هو قطعة من قطع الأثاث تستخدم للنوم أو للراحة. ترواحت السرر عبر التاريخ من مراتب بسيطة محشوة بالقش إلى قطع من الأثاث الثمين بإطارات فاخرة ومزينة بالأقمشة الثمينة. (Beds)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001513.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "apache",
    "term_en": "APACHE",
    "term_ar": "أباشي II",
    "synonyms": [
      "Acute Physiology and Chronic Health Evaluation",
      "APACHE I",
      "APACHE II",
      "APACHE III"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acronym for Acute Physiology and Chronic Health Evaluation, a scoring system using routinely collected data and providing an accurate, objective description for a broad range of intensive care unit admissions, measuring severity of illness in critically ill patients.",
    "arabic_definition": "أباشي II (الإنجليزية: APACHE II) وهو اختصارُ التقييم الحاد للفيزيولوجية والمشكلات الصحيَّة المزمنة II (الإنجليزية: Acute Physiology and Chronic Health Evaluation II)، هو نظام تصنيفٍ لشدة المرض، وهو أحد أنظمة التقييم المتعددة لوحدات العناية المركزة. يُطبّق هذا النظام خلال 24 ساعة من دخول المريض إلى وحدة العناية المركزة، حيث تُحسب درجةٌ صحيحةٌ من 0 إلى 71 بناءً على عدة قياسات، وتشير الدرجات الأعلى إلى شدة المرض وارتفاع خطر الوفاة.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018806.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "inlays",
    "term_en": "Inlays",
    "term_ar": "تطعيم زخرفي",
    "synonyms": [
      "Inlay",
      "Inlay, Dental",
      "Inlays, Dental",
      "Dental Inlays",
      "Onlays",
      "Onlay",
      "Dental Onlay",
      "Onlay, Dental"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Restorations of metal, porcelain, or plastic made to fit a cavity preparation, then cemented into the tooth. Onlays are restorations which fit into cavity preparations and overlay the occlusal surface of a tooth or teeth. Onlays are retained by frictional or mechanical factors.",
    "arabic_definition": "التطعيم الزخرفي هو فن من الفنون الزخرفية يتضمن غرس (تطعيم) مواد ذات تباين لوني مع المادة الأم الأساس بهدف الزخرفة. يعد التطعيم الزخرفي من الحرف اليدوية التي كانت شائعة في العالم العربي والإسلامي، ومثالها تصديف الأثاث. (Inlays)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007284.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "qigong",
    "term_en": "Qigong",
    "term_ar": "تشي كونغ",
    "synonyms": [
      "Ch'i Kung",
      "Qi Gong"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An ancient Chinese system of postures, exercises, breathing techniques, and meditations designed to improve and enhance the body's QI.",
    "arabic_definition": "تشي كونغ أو (تشي غونغ، تشي جونغ وتعني حرفيا: «ثقافة طاقة الحياة») (بالصينية التقليدية:氣功) (بالصينية المبسطة: 气功) (بالإنجليزية: Qigong) هي رياضة تقوم على نظام شامل لتنسيق الجسم بالحركة والتنفس والتأمل كوسيلة فعالة للحفاظ على الصحة الجسدية والنفسية، كما تعتبر وسيلة للتدريب على فنون القتال. ولكونها رياضة متجدرة في الطب والفلسفة وفنون الدفاع عن النفس الصينية، فإن تشي كونغ تعتبر ممارسة تقليدية تسمح بالنمو والتوازن يتكون تعبير تشي كونغ من كلمتين صينيتين: الأولى هو تشي، وتعني الطاقة، التنفس، الهواء، الحيوية، والثانية هي كونغ، وتعني العمل، الجهد، التمرين.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064906.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "risk",
    "term_en": "Risk",
    "term_ar": "مخاطرة",
    "synonyms": [
      "Risks",
      "Relative Risk",
      "Relative Risks",
      "Risk, Relative",
      "Risks, Relative"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The probability that an event will occur. It encompasses a variety of measures of the probability of a generally unfavorable outcome.",
    "arabic_definition": "المخاطرة تعبير يشير إلى خطر مستقبلي محتمل ناجم عن إجراء عمل ما. أي أن مفهوم المخاطرة يركز على النواحي السلبية المترتبة على القيام بذلك الفعل. (Risk)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012306.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "calorimetry",
    "term_en": "Calorimetry",
    "term_ar": "مسعرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The measurement of the quantity of heat involved in various processes, such as chemical reactions, changes of state, and formations of solutions, or in the determination of the heat capacities of substances. The fundamental unit of measurement is the joule or the calorie (4.184 joules). (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "المِسعرية (نسبة للسعرة الحرارية هي أساليب تجريبية لقياس حرارة التفاعل أو التغير الفيزيائي، أو العلم الذي يضع تلك الأساليب. وتسمى أداة القياس المسعرية « المسعر ». (Calorimetry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002151.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "euthanasia",
    "term_en": "Euthanasia",
    "term_ar": "موت رحيم",
    "synonyms": [
      "Mercy Killing",
      "Killing, Mercy",
      "Killings, Mercy",
      "Mercy Killings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The act or practice of killing or allowing death from natural causes, for reasons of mercy, i.e., in order to release a person from incurable disease, intolerable suffering, or undignified death. (from Beauchamp and Walters, Contemporary Issues in Bioethics, 5th ed)",
    "arabic_definition": "القتل الرحيم أو تهوين الموت (من εὐθανασία اليونانية تعني «الموت الجيد»: εὖ، تعني الجيد (حسن أو جيد) وθάνατος، الأصفاد (الموت)) وهو مصطلح يشير إلى ممارسة إنهاء الحياة على نحو يخفف من الألم والمعاناة. وفقا لمجلس اللوردات البريطاني اللجنة الخاصة بآداب مهنة الطب، فإن التعريف الدقيق للقتل الرحيم هو «إجراء تدخل متعمد مع الإعلان عن النية في إنهاء حياة، للتخفيف من معاناة مستعصية على الحل.» يُصنَّف القتل الرحيم بطرق مختلفة، أولهما والتي تشمل الطوعي، غير الطوعي والقسري وثانيهما تشمل الإيجابي أو السلبي. (Euthanasia)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005065.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electrodes",
    "term_en": "Electrodes",
    "term_ar": "قطب كهربائي",
    "synonyms": [
      "Electrode",
      "Anode",
      "Anodes",
      "Anode Materials",
      "Anode Material",
      "Material, Anode",
      "Cathode",
      "Cathodes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Electric conductors through which electric currents enter or leave a medium, whether it be an electrolytic solution, solid, molten mass, gas, or vacuum.",
    "arabic_definition": "القطب الكهربائي أو المسرى الكهربائي أو القضيب الكهربي (الإنجليزية: Electrode) أو نقحرة: الإلكترود، هو موصل كهربائي يستعمل مع جزء آخر غير معدني (مثل نصف الموصلات، أو كهرل (محلول ملحي أو حامضي) أو فراغ (مثل أنبوب نيون) لتكوين دائرة كهربائية. وترجع تلك التسمية إلى فراداي حيث أخذ كلمة electrode عن كلمة electron اليونانية والتي تعني الكهرمان، التي اخذت عنها كلمة كهرباء. (Electrodes)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004566.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "filtration",
    "term_en": "Filtration",
    "term_ar": "ترشيح",
    "synonyms": [
      "Filtrations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A process of separating particulate matter from a fluid, such as air or a liquid, by passing the fluid carrier through a medium that will not pass the particulates. (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "الترشيح أو التصفية في الكيمياء والطب عملية ميكانيكية تفصل مواد صلبة غير ذوابة من الموائع (سوائل أو غازات) وذلك بوضع غشاء مسامي يسمى مرشح يسمح للمائع بالتدفق والمرور خلال مسام الغشاء، ولكن لا تسمح للمواد الصلبة (أو على الأقل جزء من المواد الصلبة) بالمرور، ويجب التأكيد على أن عملية الترشيح ليست كاملة وتعتمد على مقاييس المسام وسمك المرشح فضلاً عن مواصفات المرشح. و يستخدم الترشيح لتنقية الموائع. (Filtration)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005374.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meditation",
    "term_en": "Meditation",
    "term_ar": "تأمل",
    "synonyms": [
      "Transcendental Meditation",
      "Meditation, Transcendental"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A state of consciousness in which the individual eliminates environmental stimuli from awareness so that the mind can focus on a single thing, producing a state of relaxation and relief from stress. A wide variety of techniques are used to clear the mind of stressful outside interferences. It includes meditation therapy. (Mosby's Medical, Nursing, and Allied Health Dictionary, 4th ed)",
    "arabic_definition": "التأمل هو طقس ممارسة يقوم فيها الفرد بتدريب عقله لتحفيز الوعي الداخلي، ويحصل في المقابل على فوائد معنوية وذهنية. (Meditation)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019122.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "percussion",
    "term_en": "Percussion",
    "term_ar": "آلة إيقاعية",
    "synonyms": [
      "Percussions",
      "Percussion instrument"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Act of striking a part with short, sharp blows as an aid in diagnosing the condition beneath the sound obtained.",
    "arabic_definition": "آلة الإيقاع أو آلة النقر أو الآلة الإيقاعية هي التي تصدر الصوت عن طريق الطرق أو الضرب ومثال عليها الطبل والدف والجرس. (Percussion)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010474.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "titrimetry",
    "term_en": "Titrimetry",
    "term_ar": "معايرة",
    "synonyms": [
      "Titration",
      "معايرة (كيمياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The determination of the concentration of a given component in solution (the analyte) by addition of a liquid reagent of known strength (the titrant) until an equivalence point is reached (when the reactants are present in stoichiometric proportions). Often an indicator is added to make the equivalence point visible (e.g., a change in color).",
    "arabic_definition": "في الكيمياء التحليلية المعايرة هي عملية مخبرية شائعة للتحليل الكيميائي الكمي لتحديد تركيز مادة تحليلية محددة (مادة يتعين تحليلها) أو لمعرفة تركيز محلول حمضي مجهول بواسطة إضافة محلول قاعدي تركيزه معروف، أو العكس. يتم تحضير الكاشف المسمى بالمعاير كمحلول قياسي بتركيز وحجم معروفين. (Titrimetry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017186.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "witchcraft",
    "term_en": "Witchcraft",
    "term_ar": "شعوذة",
    "synonyms": [
      "Sorcery",
      "Sorceries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An act of employing sorcery (the use of power gained from the assistance or control of spirits), especially with malevolent intent, and the exercise of supernatural powers and alleged intercourse with the devil or a familiar. (From Webster, 3d ed)",
    "arabic_definition": "الشعوذة أو السحر الأسود، ويمكن اعتباره فرعاً من فروع السحر الذي يستند على استحضار ما يسمى بالقوى الشريرة أو قوى الظلام التي يطلب مساعدتها عادة لإنزال الدمار أو إلحاق الأذى أو تحقيق مكاسب شخصية. هناك جدل حول تقسيم السحر من الأساس إلى سحر أسود وسحر أبيض فكل سحر هو أسود حسب أغلب الأديان مثل: اليهودية والمسيحية والإسلام والبوذية والهندوسية، ولكن هناك انطباعا قديما أن بعض السحر هدفه الخير ويلاحظ هذا الانطباع في كتابات عديدة ومن أحدثها وأكثرها انتشارا قصص هاري بوتر. (Witchcraft)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018599.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radiometry",
    "term_en": "Radiometry",
    "term_ar": "قياسات الإشعاع",
    "synonyms": [
      "Dosimetry, Radiation",
      "Dosimetries, Radiation",
      "Radiation Dosimetries",
      "Radiation Dosimetry",
      "Geiger-Mueller Counters",
      "Counters, Geiger-Mueller",
      "Geiger Counter",
      "Counter, Geiger"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The measurement of radiation by photography, as in x-ray film and film badge, by Geiger-Mueller tube, and by SCINTILLATION COUNTING.",
    "arabic_definition": "في علم البصريات، تُعرَّف قياسات الإشعاع (الإنجليزية: Radiometry) بأنه حقل العلم الذي يدرس قياس الإشعاع الكهرطيسي بما فيها الضوء المرئي. أو هو قياسات طاقة الإشعاع الضوئي للضوء في المدى الطيفي من الأشعة فوق البنفسجية إلى الأشعة تحت الحمراء.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011874.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cyclotrons",
    "term_en": "Cyclotrons",
    "term_ar": "مسرع دوراني",
    "synonyms": [
      "Cyclotron",
      "Synchrocyclotrons",
      "Synchrocyclotron"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Devices for accelerating charged particles in a spiral path by a constant-frequency alternating electric field. This electric field is synchronized with the movement of the particles in a constant magnetic field.",
    "arabic_definition": "المسرّع الدوراني (وينطق: السيكلترون) (Cyclotron) هو جهاز لتسريع الجسيمات المشحونة وذلك بتسليط مجال كهربائي متردد عليها بمساعدة مجال مغناطيسي يعمل عموديا على مستوي دوران الإلكترونات . يعمل المجال الكهربائي على زيادة سرعة الإلكترونات، ويعمل المجال المغناطيسي على إجبار حركة الإلكترونات في دائرة . (Cyclotrons)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017357.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "calibration",
    "term_en": "Calibration",
    "term_ar": "معايرة (قياس)",
    "synonyms": [
      "Calibrations",
      "Sensor Calibration",
      "Calibration, Sensor",
      "Calibrations, Sensor",
      "Sensor Calibrations",
      "Model Calibration",
      "Calibration, Model",
      "Model Calibrations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Determination, by measurement or comparison with a standard, of the correct value of each scale reading on a meter or other measuring instrument; or determination of the settings of a control device that correspond to particular values of voltage, current, frequency or other output.",
    "arabic_definition": "المعايرة هي مجموعة من عمليات القياس التي تجرى تحت ظروف محددة باستخدام أجهزة وأدوات قياس مستندة إلى المعايير القومية أو الدولية التي تحقق وحدات النظام الدولي للقياس SI وتحدد هذه العمليات مدى دقة أجهزة القياس وملائمتها للأغراض المستعملة لأجلها ومدى مطابقتها للنظام الدولي للقياس طبقاً لمعايير دولية محددة وتحدد خصائص أجهزة وأدوات القياس عن طريق إيجاد العلاقة بين القيمة الحقيقية والقيمة المقاسة. ويوجد لكل وحدة من وحدات قياس الكميات الأساسية نموذج معياري يحفظ في معامل خاصة تسمى معامل المعايرة فمثلا تعاير الثانية بوحدة الساعة الذرية وهي ساعة السيزيوم الذرية. (Calibration)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002138.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eyeglasses",
    "term_en": "Eyeglasses",
    "term_ar": "نظارة",
    "synonyms": [
      "Glasses",
      "Spectacles",
      "Sun Glasses, Prescription",
      "Glasses, Prescription Sun",
      "Prescription Sun Glasses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pair of ophthalmic lenses in a frame or mounting which is supported by the nose and ears. The purpose is to aid or improve vision. It does not include goggles or nonprescription sun glasses for which EYE PROTECTIVE DEVICES is available.",
    "arabic_definition": "النظّارة، هي جهاز للرؤية، تتكون من عدسات زجاجية أو بلاستيكية صلبة مثبتة في إطار يحملها أمام أعين الشخص، وعادةً ما تستخدم جسرًا فوق الأنف والذراعين المفصليين التي توضع فوق الأذنين. تُستخدم النظارات عادةً لتصحيح الرؤية، مثل نظارات القراءة والنظارات المستخدمة لقصر النظر، وأحياناً تُستخدم بدون عدسات متخصصة من أجل أغراض تجميلية. (Eyeglasses)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005139.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prevalence",
    "term_en": "Prevalence",
    "term_ar": "انتشار (وبائيات)",
    "synonyms": [
      "Prevalences",
      "Point Prevalence",
      "Point Prevalences",
      "Prevalence, Point",
      "Period Prevalence",
      "Period Prevalences",
      "Prevalence, Period"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The total number of cases of a given disease in a specified population at a designated time. It is differentiated from INCIDENCE, which refers to the number of new cases in the population at a given time.",
    "arabic_definition": "في علم الوبائيات الانتشار (الإنجليزية: prevalence) هو عدد الأشخاص الذين يعانون من حالة طبية معينة وسط تعداد سكاني محدد، عادة ما يعبر عن مرض أو عامل خطر مثل التدخين أو استخدام حزام الأمان. يتم حساب معدل الانتشار بمقارنة عدد الأشخاص المتأثرين بالحالة مع العدد الإجمالي للأشخاص الذين تمت دراستهم أو فحصهم، ويتم التعبير عنها عادة ككسر، أو كنسبة مئوية، أو كعدد الحالات لكل 10000 (عشر آلاف) أو 100000 (مئة ألف) شخص.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015995.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flowmeters",
    "term_en": "Flowmeters",
    "term_ar": "قياس التدفق",
    "synonyms": [
      "Flowmeter",
      "Flow measurement"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Devices used to measure the flow of fluids (see RHEOLOGY) or the AIR to measure RESPIRATION.",
    "arabic_definition": "قياس التدفق (الإنجليزية: Flow measurement)، هو تحديد كمية الموائع المتحركة. ويمكن قياس التدفق بطرق مختلفة. (Flowmeters)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045268.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lubrication",
    "term_en": "Lubrication",
    "term_ar": "تزليق",
    "synonyms": [
      "Lubrications"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The application of LUBRICANTS to diminish FRICTION between two surfaces.",
    "arabic_definition": "التزليق أو التشحيم تقليل الاحتكاك بين سطحين لتيسير الحركة النسبية بينهما، وذلك - عادة - بإضافة مادة سائلة أو لزجة أو غازية. (Lubrication)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008153.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipreading",
    "term_en": "Lipreading",
    "term_ar": "قراءة الشفاه",
    "synonyms": [
      "Lipreadings",
      "Speechreading",
      "Speechreadings",
      "Lip Reading",
      "Lip Readings",
      "Reading, Lip",
      "Readings, Lip"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process by which an observer comprehends speech by watching the movements of the speaker's lips without hearing the speaker's voice.",
    "arabic_definition": "قِراءَة الشِّفَاه (بالإِنجِلِيزِيّة: Lip Reading أو Speechreading) هِي وسِيلَة تواصُل بصرِيَّة؛ تعتمِدُ على مُشاهِدة فَم المُتَحدِّث؛ خُصُوصاً شفتِيّه لِفهِم حُروف وكلِمات المُتكلِّم. وعَبر الصُّورة الفموِيَّة (شَكل تَعبير الفمِ) وحركة الشِّفاه الَّتِي غالِباً ماتكوُّن مرئِيَّة فِي الاِتِّصال وجهاً لِوجه يتِمُّ التَّعرُّف البصريّ على الحُروف والكلِمات والجُمل المنطُوقَة؛ كما تُساعِد إِيماءات وتعابِير الوجه ووضع اللِّسان الَّتِي تُرافق الكلامِ على فهمِ الكلِمات المُشاهِدَة بِشكل أَوضح؛ وهِي إِحدى الوسائِل المرئِيَّة؛ الَّتِي تعتَمِدُ على مُشاهِدَة المُتحدِّث بِشكل مُباشِر لِلوُصُول إِلى الغايَة؛ وهِي فهُم المعنِي الَّذِى يُرِيدُ المُتحدِّث إِيصالُه. (Lipreading)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008085.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colorimetry",
    "term_en": "Colorimetry",
    "term_ar": "قياس الألوان",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any technique by which an unknown color is evaluated in terms of standard colors. The technique may be visual, photoelectric, or indirect by means of spectrophotometry. It is used in chemistry and physics. (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "قياس الألوان هو علم يستخدم لقياس ووصف الإحساس اللوني البشري فيزيائيا. وهو مشابه لقياس الضوء الطيفي، ولكنه يتميز باختزال الطيف إلى متغيرات فيزيائية للإحساس اللوني، والتي تكون غالبا هي قيم الحفز الثلاثي XYZ في الفضاء اللوني سي آي إي 1931. (Colorimetry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003124.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "apitherapy",
    "term_en": "Apitherapy",
    "term_ar": "علاج بالنحل",
    "synonyms": [
      "Apitherapies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The medical use of honey bee products such as BEE VENOM; HONEY; bee pollen; PROPOLIS; and royal jelly.",
    "arabic_definition": "العلاج بالنحل (الإنجليزية: Apitherapy) أو بأشربة ألنحل وهو الاستعمال الطبي لمنتجات عسل النحل. والذي يمكن أن يشمل ذلك استخدام حبوب اللقاح والعسل والعكبر أو يسمى البروبوليس والهلام الملكي، وسم النحل.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056705.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "desiccation",
    "term_en": "Desiccation",
    "term_ar": "تجفف",
    "synonyms": [
      "Dessication",
      "تجفف (كيمياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Removal of moisture from a substance (chemical, food, tissue, etc.).",
    "arabic_definition": "التجفّف (اللاتينية: desiccatio) حالة ناجمة عن إزالة شبه كاملة للمياه، والمُجفِّف مادّة استرطابية تجلب - أو تصون - تلك الحالة في محيطها إذا وضعت في وعاء معزول بشكل كاف. (Desiccation)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003890.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orthoptics",
    "term_en": "Orthoptics",
    "term_ar": "تقويم البصر",
    "synonyms": [
      "Orthoptic",
      "Pleoptics",
      "Pleoptic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The study and treatment of defects in binocular vision resulting from defects in the optic musculature or of faulty visual habits. It involves a technique of eye exercises designed to correct the visual axes of eyes not properly coordinated for binocular vision.",
    "arabic_definition": "تقويم البصر هي مهنة مرتبطة مع مهنة العناية بالعين التي تركز بالأساس على التشخيص والعلاج غير الجراحي للحول (تجول العين)، وكسل العين واضطرابات حركة العين. تتعلق ممارسات تقويم البصر بالانكسار والسيطرة على عضلات العين. (Orthoptics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009988.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fluorometry",
    "term_en": "Fluorometry",
    "term_ar": "مطيافية فلورية",
    "synonyms": [
      "Fluorimetry",
      "Fluorometric Analysis",
      "Analysis, Fluorometric",
      "Fluorescence spectroscopy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An analytical method for detecting and measuring FLUORESCENCE in compounds or targets such as cells, proteins, or nucleotides, or targets previously labeled with FLUORESCENCE AGENTS.",
    "arabic_definition": "التحليل الطيفي للفلورية (الإنجليزية: Fluorescence spectroscopy) ويُعرف أيضًا باسم الفلوريمتري أو التحليل الطيفي الفلوري، هو أحد أنواع التحليل الطيفي الكهرومغناطيسي الذي يُحلل الفلورية المنبعثة من العينة. تعتمد هذه التقنية على تسليط حزمة من الضوء، عادةً من الأشعة فوق البنفسجية، لإثارة الإلكترونات في جزيئات بعض المركبات، مما يؤدي إلى انبعاث ضوء منها، يكون عادةً في الطيف المرئي، ولكن ليس بالضرورة كذلك. (Fluorometry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005470.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stretchers",
    "term_en": "Stretchers",
    "term_ar": "نقالة",
    "synonyms": [
      "Patient Holding Stretchers",
      "Holding Stretcher, Patient",
      "Holding Stretchers, Patient",
      "Patient Holding Stretcher",
      "Stretcher, Patient Holding",
      "Stretchers, Patient Holding",
      "Patient Litters",
      "Litter, Patient"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bed-like structures for transporting or temporarily holding patients.",
    "arabic_definition": "النقّالة أو الحمّالة أو المَحْمِل هي معدة تستخدم لنقل المرضى الذين يحتاجون إلى رعاية طبية. وهناك نوع أساسي (سرير أو حاملة) يجب أن يتم حمله من قبل شخصين أو أكثر. (Stretchers)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058254.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spirometry",
    "term_en": "Spirometry",
    "term_ar": "قياس التنفس",
    "synonyms": [
      "Spirometries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Measurement of volume of air inhaled or exhaled by the lung.",
    "arabic_definition": "قياس التنفس اختبار يستخدم كثيرا لفحص وظائف الرئتين ويفيد في تشخيص أمراض عديدة أهمها الربو الشعبي. (Spirometry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013147.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "biolistics",
    "term_en": "Biolistics",
    "term_ar": "مدفع جيني",
    "synonyms": [
      "Biolistic",
      "Gene-Gun Technique",
      "Gene-Gun Techniques",
      "Particle-Mediated Epidermal Delivery of DNA",
      "Gene Gun DNA Immunization",
      "Gene gun"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Techniques where DNA is delivered directly into organelles at high speed using projectiles coated with nucleic acid, shot from a helium-powered gun (gene gun). One of these techniques involves immunization by DNA VACCINES, which delivers DNA-coated gold beads to the epidermis.",
    "arabic_definition": "المدفع الجيني هو جهاز يستخدم في العلوم الحيوية والهندسة الوراثية لإحداث عملية تحوّل (تغيير في الجينات) عن طريق دنا خارجي (جين منتقل Transgene) إلى الخلايا. تتم العملية عن طريق إكساء جسيمات من عنصر كيميائي، وخاصة من الفلزات الثقيلة مثل جسيمات الذهب، بالبلازميد؛ ثم قذفها على الخلايا المستهدفة. (Biolistics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019470.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endodontics",
    "term_en": "Endodontics",
    "term_ar": "طب لب الأسنان",
    "synonyms": [
      "Endodontology"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dental specialty concerned with the maintenance of the dental pulp in a state of health and the treatment of the pulp cavity (pulp chamber and pulp canal).",
    "arabic_definition": "طب لب الأسنان أو علم أمراض لب الأسنان أو علم مداواة الأسنان اللبية أو مَبْحَثُ اللُّبّ السِّنِّي أو مَبْحَثُ أمراضِ لُبِّ الأَسْنَان أو مَبْحَث عِلَل لُبِّ الأَسْنَان (الإنجليزية: Endodontics) هو اختصاص في علم طب الأسنان يهتم بدراسة وعلاج اللب السني (الحاوي على الأعصاب، والشرينات، والأوردة، والأوعية اللمفية). يحتوي على مجموعة من الإجراءات تتضمن علاج لب الأسنان (المعروفة بعلاج القناة الجذرية)، و إعادة علاج اللب السني، والجراحة، وعلاج الأسنان المتصدعة، وعلاج رضح الأسنان.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004708.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dendrimers",
    "term_en": "Dendrimers",
    "term_ar": "تشعبات",
    "synonyms": [
      "Dendrimer",
      "Dendritic Compounds",
      "Compound, Dendritic",
      "Dendritic Compound",
      "Dendritic Polymers",
      "Dendritic Polymer",
      "Polymer, Dendritic",
      "Polymers, Dendritic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tree-like, highly branched, polymeric compounds. They grow three-dimensionally by the addition of shells of branched molecules to a central core. The overall globular shape and presence of cavities gives potential as drug carriers and CONTRAST AGENTS.",
    "arabic_definition": "التشعب أو التغصن هي جزيئات متفرعة متكررة. يأتي الاسم من الكلمة اليونانية δένδρον (ديندرون) التي تترجم إلى «شجرة». (Dendrimers)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050091.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunoassay",
    "term_en": "Immunoassay",
    "term_ar": "مقايسة مناعية",
    "synonyms": [
      "Immunoassays",
      "Immunochromatographic Assay",
      "Assay, Immunochromatographic",
      "Assays, Immunochromatographic",
      "Immunochromatographic Assays"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A technique using antibodies for identifying or quantifying a substance. Usually the substance being studied serves as antigen both in antibody production and in measurement of antibody by the test substance.",
    "arabic_definition": "مقايسة مناعية وتسمى أيضا تحاليل مناعية (الإنجليزية: Immunoassay) هي اختبارات بيوكيميائية تستخدم لقياس مستوى مواد معينة في السائل الحيوي مثل: المصل والبول والدمع واللعاب. تعتمد المقايسة المناعية على ارتباط المستضد مع الجسم المضاد الذي خصص له في التحليل.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007118.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bariatrics",
    "term_en": "Bariatrics",
    "term_ar": "طب السمنة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Activities related to WEIGHT REDUCTION in patients with OBESITY. Treatment methods include DIET; EXERCISE; BEHAVIOR MODIFICATION; medications; and BARIATRIC SURGERY.",
    "arabic_definition": "طب السمنة (الإنجليزية: Bariatrics) هي فرع من فروع الطب الذي يتعامل مع الأسباب والوقاية والعلاج من السمنة., ويشمل هذا المجال اتباع نظام غذائي وممارسة الرياضة والعلاج السلوكي مؤديا إلى فقدان الوزن، فضلا عن العلاج الدوائي والجراحة.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049088.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kymography",
    "term_en": "Kymography",
    "term_ar": "ممواج",
    "synonyms": [
      "Kymographies",
      "Kymograph"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The recording of wavelike motions or undulations. It is usually used on arteries to detect variations in blood pressure.",
    "arabic_definition": "المِمواج هو جهاز تشابهي يرسم تمثيلًا رسوميًا للموضع المكاني بمرور الوقت حيث يمثل المحور المكاني الوقت، يتكون بشكل عام من أسطوانة دوارة ملفوفة بورقة يتحرك عليها القلم ذهابًا وإيابًا مسجلاً التغييرات الملحوظة في الظواهر مثل الحركة أو الضغط. كان الجهاز في البداية جهازًا حركيًّا وسائليًّا، اخترعه عالم وظائف الأعضاء الألماني كارل لودفيغ في أربعينيات القرن التاسع عشر، ووجد استخدامه أول مرة وسيلةً لمراقبة ضغط الدم، ابتكر الباحثون والفنيون العديد من التحسينات على الجهاز، بالإضافة إلى العديد من المكونات الحسية الجديدة لقياس مجموعة واسعة من الظواهر الفسيولوجية مثل التنفس وحركة العضلات والكلام. (Kymography)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007734.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sonication",
    "term_en": "Sonication",
    "term_ar": "تعريض للموجات الصوتية",
    "synonyms": [
      "Sonications"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The application of high intensity ultrasound to liquids.",
    "arabic_definition": "التعريض للموجات الصوتية (مرادفات) هو إجراء مخبري يهدف إلى تعريض طاقة الموجات الصوتية إلى الأوساط من أجل تحفيز اهتزاز الجسيمات في العينة؛ كما تستخدم في عمليات الاستخلاص والتنقية في مجال علوم الأحياء البحرية. تستخدم في العادة ترددات مرتفعة من أجل إصدار موجات فوق صوتية (> 20 كيلوهرتز kHz)، وتخصص التسمية حينها بالتعريض للأمواج فوق الصوتية. (Sonication)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013010.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "suggestion",
    "term_en": "Suggestion",
    "term_ar": "الإيحاء",
    "synonyms": [
      "Suggestions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The uncritical acceptance of an idea or plan of action.",
    "arabic_definition": "الإيحاء أو الاستهواء أو التلقين هي العملية النفسية التي يوجه من خلالها الشخص أفكاره ومشاعره وسلوكياته المرغوبة أو لشخص آخر من خلال تقديم المحفزات التي قد تثيرها كرد فعل، بدلاً من الاعتماد على الجهد الواعي. استخدم كتّاب القرن التاسع عشر في علم النفس مثل ويليام جيمس كلمتي \"توحي\" و\"الإيحاء\" في سياق فكرة معينة، قيل إنها توحي بفكرة أخرى عندما أتت تلك الفكرة إلى الذهن. (Suggestion)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013404.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pelvimetry",
    "term_en": "Pelvimetry",
    "term_ar": "قياس الحوض",
    "synonyms": [
      "Pelvimetries",
      "Cephalopelvic Proportion",
      "Cephalopelvic Proportions",
      "Proportion, Cephalopelvic",
      "Proportions, Cephalopelvic",
      "Cephalopelvimetry",
      "Cephalopelvimetries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Measurement of the dimensions and capacity of the pelvis. It includes cephalopelvimetry (measurement of fetal head size in relation to maternal pelvic capacity), a prognostic guide to the management of LABOR, OBSTETRIC associated with disproportion.",
    "arabic_definition": "قِياسُ الحَوض لقياس أبعاد الحوض عند الأنثى يتألف من المضيق العلوي والمضيق السفلي والتقعر الحوضي. (Pelvimetry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010387.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ammotherapy",
    "term_en": "Ammotherapy",
    "term_ar": "حمام رملي",
    "synonyms": [
      "Baths, Sand",
      "Bath, Sand",
      "Sand Bath",
      "Sand Baths",
      "Sandbaths",
      "Sandbath"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Treatment by application of hot sand.",
    "arabic_definition": "الحمّام الرملي (الإنجليزية: Sand bath) عبارة عن جزء أو قطعه شائعة من المعدات المخبرية والمصنوعة من حاوية ممتلئة بالرمال الساخنة. فهو يستخدم لتوفير التدفئة حتى بالنسبة للحاويات الأخرى، غالباً يتمّ خلال التفاعل الكيميائي. (Ammotherapy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000646.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "telescopes",
    "term_en": "Telescopes",
    "term_ar": "مقراب",
    "synonyms": [
      "Telescope",
      "Binoculars",
      "Binocular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Instruments used to observe distant objects.",
    "arabic_definition": "المِقْرَاب (الجمع: مقاريب) أو المِرْقَب والرَاصِدَة والرصّادة أو المِرصَد (بكسر الميم) أو المنظار الفلكي (الإنجليزية: Telescope) أو نقحرةً: التلسكوب، جهاز يجمع الضوء لرؤية الكواكب والنجوم البعيدة بوضوح، مكوناً صوراً مُقرَّبةً للأجرام السماوية. عادة تكون المقاريب إما عاكسة أو كاسرة. (Telescopes)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D061351.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "emmetropia",
    "term_en": "Emmetropia",
    "term_ar": "سداد البصر",
    "synonyms": [
      "Emmetropias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The condition of where images are correctly brought to a focus on the retina.",
    "arabic_definition": "سداد البصر أو سوية البصر أو النظر السوي أو سلامة النظر أو سداد النظر أو الرؤية السليمة هي حالة بصرية يكون فيها الجسم البعيد في اللانهاية واضحًا تمامًا مع استرخاء العضلة الهدبية. تتحقق هذه الحالة عندما تتوازن قوة انكسار القرنية وعدسة العين مع طول محور العين، مما يُركز الأشعة بدقة على الشبكية، وينتج عنه رؤية واضحة تمامًا للمسافات البعيدة. (Emmetropia)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058453.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulpectomy",
    "term_en": "Pulpectomy",
    "term_ar": "معالجة لب الأسنان",
    "synonyms": [
      "Pulpectomies",
      "Root canal treatment"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Dental procedure in which the entire pulp chamber is removed from the crown and roots of a tooth.",
    "arabic_definition": "المعالجة اللُّبِّيَّة أو معالجة نَفَقُ جَذْرِ السِّن أو علاج العصب (الإنجليزية: Root canal treatment) عبارة عن سلسلة علاج لـلب السن المصاب بالعَدْوَى مما يؤدي إلى إزالة العدوى وحماية السن المطهر من الإصابة بالعَدْوَى مجدداً. نَفَقُ جَذْرِ السِّن والغرفة اللبية عبارة عن تجويف مادي داخل السِّن تسكنه بطبيعة الحال الأنسجة العصبية، والأوعية الدموية، والخلويات الأخرى التي تشكل معا لُب السِّن. (Pulpectomy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011670.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parabiosis",
    "term_en": "Parabiosis",
    "term_ar": "تعايش التصاقي",
    "synonyms": [
      "Parabioses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The experimental joining of two individuals for the purpose of studying the effects of one on the other.",
    "arabic_definition": "يشير مصطلح تعايش التصاقي إلى العمل الجراحي الذي يقوم بتخليق توائم ملتصقة لاثنين من الكائنات الحية بطريقة صناعية. وغالبًا ما يتم إجراء هذه التجربة على الفئران بهدف القيام بدراسة فسيولوجية حول تأثير إفرازات الجسم الداخلية (مثل الهرمونات) على الكائنات عند مشاركة الدم بدقة. (Parabiosis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010227.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "observation",
    "term_en": "Observation",
    "term_ar": "رصد",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The act of regarding attentively and studying facts and occurrences, gathering data through analyzing, measuring, and drawing conclusions, with the purpose of applying the observed information to theoretical assumptions. Observation as a scientific method in the acquisition of knowledge began in classical antiquity; in modern science and medicine its greatest application is facilitated by modern technology. Observation is one of the components of the research process.",
    "arabic_definition": "الرصد أو الملاحظة العلمية هي كل فعالية لكائن حي عاقل وواع وقادر على الإحساس واستخراج المعرفة من الظواهر الطبيعية الموجودة في محيطه اعتمادا على إطاره الخاص من المعرفة المسبقة والأفكار. يتم من خلال عملية الرصد الحصول على المعلومات من مصدر رئيسي. (Observation)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019370.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "probability",
    "term_en": "Probability",
    "term_ar": "احتمال",
    "synonyms": [
      "Probabilities"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The study of chance processes or the relative frequency characterizing a chance process.",
    "arabic_definition": "الاحتمال هو قياس إمكانية وقوع حدث ما. يُقاس الاحتمال بأنه رقم بين الصفر والواحد حيث يشير الصفر إلى الاستحالة ويشير الواحد إلى التأكيد. (Probability)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011336.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vaccination",
    "term_en": "Vaccination",
    "term_ar": "تلقيح طبي",
    "synonyms": [
      "Vaccinations",
      "Immunization, Active",
      "Active Immunization",
      "Active Immunizations",
      "Immunizations, Active"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Administration of vaccines to stimulate the host's immune response. This includes any preparation intended for active immunological prophylaxis.",
    "arabic_definition": "التلقيح أو التطعيم هو استخدام مواد تثير الاستجابة المناعية (اللقاح) لتحفيز مناعة الشخص لتكوين مناعة متخصصة تجاه مُمرِض ما، مثلا فيروس. وتعد اللقاحات هي أكثر الطرق فعالية لمنع الأمراض المعدية، حيث تمنع أو تقلل نسبة انتشار الأمراض المعدية. (Vaccination)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014611.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electrolysis",
    "term_en": "Electrolysis",
    "term_ar": "تحليل كهربائي",
    "synonyms": [
      "Electrolyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Destruction by passage of a galvanic electric current, as in disintegration of a chemical compound in solution.",
    "arabic_definition": "التحليل الكهربائي أو الكهرلة في الكيمياء والصناعة هي الطريقة التي يُستخدم بها تيار كهربائي لإطلاق تفاعل كيميائي غير ممكن الحدوث بدونه. للتحليل الكهربائي أهمية تجارية عالية كعملية لفصل العناصر من أشكالها الموجودة في الطبيعة مثل الفلزات باستخدام خلية التحليل، كما يستخدم التحليل الكيميائي لتحضير مواد يصعب تحضيرها بالوسائل الكيميائية أو بسبب ارتفاع تكاليف الطرق الكيميائية . (Electrolysis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004572.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acupressure",
    "term_en": "Acupressure",
    "term_ar": "العلاج بالضغط الإبري",
    "synonyms": [
      "Shiatsu",
      "Shiatzu",
      "Zhi Ya",
      "Chih Ya"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of massage in which finger pressure on specific body sites is used to promote healing, relieve fatigue, etc. Although the anatomical locations are the same as the ACUPUNCTURE POINTS used in ACUPUNCTURE THERAPY (hence acu-), no needle or other acupuncture technique is employed in acupressure. (From Random House Unabridged Dictionary, 2d ed). Shiatsu is a modern outgrowth that focuses more on prevention than healing.",
    "arabic_definition": "العلاج بالضغط الإبري هي تقنية طب بديل مشابهة من حيث المبدأ للوخز بالإبر. تقوم على مفهوم طاقة الحياة المتدفقة عبر «خطوط الطول» في الجسم. (Acupressure)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019050.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "uncertainty",
    "term_en": "Uncertainty",
    "term_ar": "ارتياب",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The condition in which reasonable knowledge regarding risks, benefits, or the future is not available.",
    "arabic_definition": "الارتياب هو مصطلح يستخدم في مواضيع كثيرة منها الفلسفة، الفيزياء، الإحصاء، الاقتصاد، التمويل، التأمين، علم النفس، علم الاجتماع، الهندسة والمعلوماتية. يُحسب الارتياب عند القيام بتوقعات لقيم مستقبلية، أو عند قياس أبعاد أو مقادير أو عند تقدير قيمة مجهولة. (Uncertainty)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D035501.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bloodletting",
    "term_en": "Bloodletting",
    "term_ar": "فصد",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Puncture of a vein to draw blood for therapeutic purposes. Bloodletting therapy has been used in Talmudic and Indian medicine since the medieval time, and was still practiced widely in the 18th and 19th centuries. Its modern counterpart is PHLEBOTOMY.",
    "arabic_definition": "الفصد أو الإدماء هو سحب الدماء من المريض لمنع أو علاج العلل والأمراض. كان الفصد، سواء من قبل الطبيب أم العلقيات، يستند على نظام قديم في الطب حيث يُعتبر أنه يجب على الدم وسوائل الجسم الأخرى الموجودة في البلازما أن تبقى في توازن مناسب للحفاظ على الصحة. (Bloodletting)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001815.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transducers",
    "term_en": "Transducers",
    "term_ar": "محوال",
    "synonyms": [
      "Transducer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any device or element which converts an input signal into an output signal of a different form. Examples include the microphone, phonographic pickup, loudspeaker, barometer, photoelectric cell, automobile horn, doorbell, and underwater sound transducer. (McGraw Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "المِحوال (الجمع: مَحَاوِيل) أو محوّل طاقة أو مبدّل طاقة أو المُحوْصِل أو محوّل الإشارة (الإنجليزية: Transducer). تعريفه عام: «وسيلة لتحويل الطاقة من صورة إلى أخرى»، إلا أن المراد غالبا جهاز يحول الطاقة من صورة ميكانيكية إلى كهربية. (Transducers)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014159.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "physiognomy",
    "term_en": "Physiognomy",
    "term_ar": "علم الفراسة",
    "synonyms": [
      "Physiognomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An assessment of a person's personality based on their facial and other external features.",
    "arabic_definition": "الفِراسة أو علم الفِراسة هو نظرية نفسية تستخدم لوصف شخصية الإنسان وعرفت بواسطة معلم القرن العشرين البلجيكي بول بوتس. توافق الفراسة في شكلها الأساسي تعريف العلوم الزائفة، وهذه النظرية تعتبر قائمة على علم الفراسة وتتضمن بعض المبادئ الخاصة بعلم دراسة الرموز وعلم الجرافولوجي. (Physiognomy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010826.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunization",
    "term_en": "Immunization",
    "term_ar": "تمنيع",
    "synonyms": [
      "Immunizations",
      "Immunologic Sensitization",
      "Sensitization, Immunologic",
      "Stimulation, Immunologic",
      "Immunologic Stimulation",
      "Immunostimulation",
      "Immunological Stimulation",
      "Immunological Stimulations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Deliberate stimulation of the host's immune response. ACTIVE IMMUNIZATION involves administration of ANTIGENS or IMMUNOLOGIC ADJUVANTS. PASSIVE IMMUNIZATION involves administration of IMMUNE SERA or LYMPHOCYTES or their extracts (e.g., transfer factor, immune RNA) or transplantation of immunocompetent cell producing tissue (thymus or bone marrow).",
    "arabic_definition": "التمنيع أو التحصين (الإنجليزية: Immunization) هي العملية التي من خلالها يصبح نظام الفرد المناعي محصنة ضد عامل ما يعرف باسم المستمنع (الإنجليزية: Immunogen). عندما يتعرض هذا النظام لجزيئات غريبة على الجسم (ليست من ذات الجسم)، سوف يقوم بتنسيق استجابة مناعية وأيضاً بتطوير القدرة على الاستجابة بسرعة إلى تهديد مماثل مستقبلاً من خلال آلية ذاكرة مناعية (الإنجليزية: Immunological Memory).",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007114.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orthodontics",
    "term_en": "Orthodontics",
    "term_ar": "تقويم الأسنان",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dental specialty concerned with the prevention and correction of dental and oral anomalies (malocclusion).",
    "arabic_definition": "تقويم الأسنان (الإنجليزية: orthodontics) هو إحدى مجالات طب الأسنان التي تهتم بدراسة ومعالجة عيوب إطباق الأسنان ومشاكل الفكين (سوء إطباق الأسنان)، التشخيص والوقاية والتصحيح لأنماط العضة المنحرفة والذي قد يكون نتيجة لعدم انتظام الأسنان، أو لعلاقات الفك غير المتناسبة (بين الفكين العلوي والسفلي)، أو كليهما. يمكن أن يركز أيضًا على تعديل نمو الوجه، المعروف باسم جراحة عظام الوجه والأسنان.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009970.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vivisection",
    "term_en": "Vivisection",
    "term_ar": "تشريح الأحياء",
    "synonyms": [
      "Vivisections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The cutting of or surgical operation on a living animal, usually for physiological or pathological investigation. (from Merriam-Webster's Collegiate Dict, 10th ed)",
    "arabic_definition": "تشريح الأحياء (بالإنجليزية: Vivisection) عملية جراحية تُجرى على الكائن الحي لأهداف تجريبية، وتُجرى عادةً على الحيوانات ذات الجهاز العصبي المركزي لاستعراض البنية الداخلية الحية. تُستخدم الكلمة على نطاق أوسع كمصطلح استهجان جامع للتجريب على الحيوانات الحية من قبل المنظمات المعارضة لإجراء التجارب على الحيوانات، ونادرًا ما يستخدم العلماء الممارسون هذا المصطلح.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014824.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "auscultation",
    "term_en": "Auscultation",
    "term_ar": "تسمع",
    "synonyms": [
      "Auscultations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Act of listening for sounds within the body.",
    "arabic_definition": "التسمُّع في المصطلح الطبي (الإنجليزية: Auscultation) هو الاستماع إلى الأصوات الداخلية للجسم، وعادةً ما يجرى باستخدام سماعة طبية. يُجرى التسمع لأغراض فحص الدورة الدموية والجهاز التنفسي (أصوات القلب والتنفس)، بالإضافة إلى القناة الهضمية.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001314.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mesotherapy",
    "term_en": "Mesotherapy",
    "term_ar": "ميزوثيرابي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The application of medicine, vitamins, extracts, or other bioactive substances for a localized effect via multiple subcutaneous injections or perfusion of substances into the various layers of the skin below the EPIDERMIS.",
    "arabic_definition": "ميزوثيرابي (يعود الاسم إلى مفردتي (اليونانية: mesos) بمعنى متوسط، (اليونانية: therapeia) بمعنى علاج طبي)؛ هو علاج تجميلي طبي غير جراحي. يستخدم في الميزوثيرابي حقنات متعددة من الأدوية الصيدلانية والمتجانسة، المستخلصات النباتية، الفيتامينات، وغيرها من المكونات في الدهون تحت الجلدية. (Mesotherapy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057748.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heliotherapy",
    "term_en": "Heliotherapy",
    "term_ar": "علاج بالضوء",
    "synonyms": [
      "Light therapy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The treatment of disease by exposing the body to SUNLIGHT, a therapeutic use of SUNBATHING.",
    "arabic_definition": "العلاج بالضوء (الإنجليزية: Light therapy أو phototherapy) هو طريقة لعلاج بعض الأمراض عن طريق التعرض لضوء الشمس أو لأطوال موجية معينة من الضوء باستخدام الليزر أو الصمامات الثنائية الباعثة للضوء أو مصابيح الفلورسنت أو المصابيح مزدوجة اللون أو ضوء شديد السطوح وكامل الطيف، وعادة يتم التحكم في هذا الضوء باستخدام أجهزة معينة، ويعرض المريض لهذا الضوء لفترة محسوبة من الوقت، وفي بعض الحالات يكون التعرض في أوقات معينة فقط من اليوم. (Heliotherapy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006370.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydrotherapy",
    "term_en": "Hydrotherapy",
    "term_ar": "علاج بالماء",
    "synonyms": [
      "Whirlpool Baths",
      "Baths, Whirlpool",
      "Bath, Whirlpool",
      "Whirlpool Bath",
      "Watsu Therapy",
      "Therapy, Watsu",
      "WaterShiatsu",
      "Water Shiatsu"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "External application of water for therapeutic purposes, such as whirlpool baths or water shiatsu.",
    "arabic_definition": "العلاج بالماء هي وسيلة تستخدم في علاج ضحايا الحرائق. ويزود خزان الدردور ببطانة بلاستيكية لأغراض صحية. (Hydrotherapy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006875.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bioreactors",
    "term_en": "Bioreactors",
    "term_ar": "مفاعل حيوي",
    "synonyms": [
      "Bioreactor",
      "Fermentors",
      "Fermentor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tools or devices for generating products using the synthetic or chemical conversion capacity of a biological system. They can be classical fermentors, cell culture perfusion systems, or enzyme bioreactors. For production of proteins or enzymes, recombinant microorganisms such as bacteria, mammalian cells, or insect or plant cells are usually chosen.",
    "arabic_definition": "مفاعل حيوي هو أي جهازٍ أو نظامٍ يدعم البيئة النشطة بصورةٍ حيويةٍ. وفي إحدى حالات الأمثلة على المفاعلات الحيوية، نجد أن المفاعل الحيوي هو وعاء يتم إجراء العملية (التفاعلات) الكيميائية التي تشتمل الكائنات الحية أو المواد النشطة الكيميائية الحيوية المشتقة من الكائنات الحية المختلفة. (Bioreactors)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019149.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fluoridation",
    "term_en": "Fluoridation",
    "term_ar": "فلورة الماء",
    "synonyms": [
      "Water Fluoridation",
      "Fluoridation, Water",
      "Salt Fluoridation",
      "Fluoridation, Salt",
      "Milk Fluoridation",
      "Fluoridation, Milk"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Practice of adding fluoride to water, and other food or beverages, for the purpose of preventing DENTAL CARIES.",
    "arabic_definition": "فَلوَرة الماء هي إضافة الفلورايد إلى إمدادات المياه العامة للحد من تسوس الأسنان. ويحتوي الماء المعالج بالفلورايد على مستوى من الفلورايد يمكنه من الحد من تسوس الأسنان، وهذا يمكن أن يحصل طبيعيًا أو بإضافة الفلورايد. (Fluoridation)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005457.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "psychodrama",
    "term_en": "Psychodrama",
    "term_ar": "سيكودراما",
    "synonyms": [
      "Drama Therapy",
      "Therapy, Drama",
      "Dramatherapy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Primarily a technique of group psychotherapy which involves a structured, directed, and dramatized acting out of the patient's personal and emotional problems.",
    "arabic_definition": "السيكودراما (الإنجليزية: Psychodrama) هو مصطلح يُطلق على نوع من أنواع العلاج النفسي الذي يجمع بين الدراما كنوع من أنواع الفنون وعلم النفس.تكمن فعاليتها في مساعدة الشخص على تفريغ مشاعره وانفعالاته من خلال أداء أدوار تمثيلية لها علاقة بالمواقف التي يعايشها حاضراً أو عايشها في الماضي أو من الممكن أن يعايشها في المستقبل. جلسات علاج السايكودراما تتخذ وقتاً من 90 دقيقة إلى ساعتين وهي ليست العلاج الجماعي بل هي جزء منه تشترك فيه في منطق التنفيس الجماعي فقط.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011577.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pleurodesis",
    "term_en": "Pleurodesis",
    "term_ar": "التصاق جنبي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The production of adhesions between the parietal and visceral pleura. The procedure is used in the treatment of bronchopleural fistulas, malignant pleural effusions, and pneumothorax and often involves instillation of chemicals or other agents into the pleural space causing, in effect, a pleuritis that seals the air leak. (From Fishman, Pulmonary Diseases, 2d ed, p2233 &amp; Dorland, 27th ed)",
    "arabic_definition": "الالتصاق الجنبي، يعتبر إجراءً طبيًا يزال من خلاله جزء من الحيز الجنبي بشكل اصطناعي، إذ يتضمن إلصاق الجنبة الحشوية بالضلعية وذلك في سبيل انقاذ الجنبة المنصفية. (Pleurodesis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018700.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cryotherapy",
    "term_en": "Cryotherapy",
    "term_ar": "العلاج بالتبريد",
    "synonyms": [
      "Cryotherapies",
      "Cold Therapy",
      "Cold Therapies",
      "Therapies, Cold",
      "Therapy, Cold"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of therapy consisting in the local or general use of cold. The selective destruction of tissue by extreme cold or freezing is CRYOSURGERY. (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "الاستبراد أو المعالجة بالتبريد أو العلاج بالتبريد (الإنجليزية: Cryotherapy) هو علاج للجلد يستخدم فيه التبريد الذي بواسطته تتجمد إصابات الجلد السطحية. وعادة يستعمل في حالات التبريد النيتروجين السائل أو الكربون الثلجي أو ماكينات التبريد العديدة.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017679.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flocculation",
    "term_en": "Flocculation",
    "term_ar": "ترويب",
    "synonyms": [
      "Flocculations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The aggregation of suspended solids into larger clumps.",
    "arabic_definition": "الترويب عملية صناعية، لها تطبيقات هامة في تنقية المياه، الغرض منها توزيع المروبات ومزجها بالماء كي تخرج الغروانيات من المستعلق. ولأن المروبات موزعة أي أنها ليست منحلة، يختلف الترويب عن الترسيب. (Flocculation)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005427.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "humidifiers",
    "term_en": "Humidifiers",
    "term_ar": "جهاز ترطيب",
    "synonyms": [
      "Humidifier"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Machines that add moisture to the air.",
    "arabic_definition": "المرطب (الجمع: مُرَطِّبَات) أو جهاز الترطيب (الجمع: أَجْهِزَة التَرْطِيْب) هو أحد الأجهزة الكهربائية المنزلية التي تزيد الرطوبة في غرفة واحدة أو في كامل المنزل. هناك أجهزة ترطيب صغيرة تستخدم لترطيب غرفة واحدة، كما أن هناك أجهزة تربط إلى نظام التدفئة والتهوية والتبريد في منزل لتوفير الرطوبة إلى كامل المنزل. (Humidifiers)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000068998.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "capnography",
    "term_en": "Capnography",
    "term_ar": "تخطيط ثاني أكسيد الكربون",
    "synonyms": [
      "Capnographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Continuous recording of the carbon dioxide content of expired air.",
    "arabic_definition": "تخطيط ثاني أكسيد الكربون أو تخطيط السخام هو مراقبة التركيز أو الضغط الجزئي لثاني أكسيد الكربون في غازات التنفس، طُور في الأساس كأداة مراقبة أثناء التخدير والطب الحرج، وعادة ما يُقدم في شكل رسم بياني لثاني أكسيد الكربون الزفيري (ويقاس بالملليمتر) في وقت محدد. جهاز تخطيط ثاني أكسيد الكربون هو جهاز مراقبة مباشر لتركيز الضغط الجزئي لثاني أكسيد الكربون أثناء الشهيق والزفير، وبالتالي المراقبة غير المباشر للضغط الجزئي لثاني أكسيد الكربون في الدم الشرياني. (Capnography)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019296.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "genioplasty",
    "term_en": "Genioplasty",
    "term_ar": "تكبير الذقن",
    "synonyms": [
      "Genioplasties",
      "Chin Repositioning",
      "Chin Repositionings",
      "Repositioning, Chin",
      "Repositionings, Chin",
      "Chin augmentation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A surgical procedure done largely for cosmetic reasons to correct receding chins, chin misalignment, or chin excess.",
    "arabic_definition": "يمكن لعملية تكبير الذقن باستخدام الحشوات الجراحية أن تغير البنية الأساسية للوجه، ما يؤدي لزيادة تناسق ملامح الوجه وتجميلها، وغالبًا ما تُجرى هذه العملية بالمشاركة مع عملية تجميل الأنف للمساعدة على تحقيق توازن بين ملامح الوجه. يمكن إجراء تكبير الذقن عن طريق تغيير حجم عظم الفك (الفك السفلي تحديدًا)، وعادةً ما يوفر التكبير باستخدام هذه التقنية تصحيحًا أكبر من استخدام الحشوات الصناعية. (Genioplasty)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063172.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thermometry",
    "term_en": "Thermometry",
    "term_ar": "قياس درجة الحرارة",
    "synonyms": [
      "Temperature measurement"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Measurement of the temperature of a material, or of the body or an organ by various temperature sensing devices which measure changes in properties of the material that vary with temperature, such as ELASTICITY; MAGNETIC FIELDS; or LUMINESCENCE.",
    "arabic_definition": "قياس درجة الحرارة أو القياس الحراري، يصف عملية قياس درجة الحرارة الموضعية الحالية للتقييم الفوري أو اللاحق. يمكن استخدام مجموعات البيانات التي تتكون من قياسات موحدة متكررة لتقييم درجة الحرارة. (Thermometry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062125.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retinoscopy",
    "term_en": "Retinoscopy",
    "term_ar": "تنظير الشبكية",
    "synonyms": [
      "Retinoscopies",
      "Shadow Test",
      "Shadow Tests",
      "Skiametry",
      "Skiametries",
      "Skiascopy",
      "Skiascopies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An objective determination of the refractive state of the eye (NEARSIGHTEDNESS; FARSIGHTEDNESS; ASTIGMATISM). By using a RETINOSCOPE, the amount of correction and the power of lens needed can be determined.",
    "arabic_definition": "تنظير الشبكية (الإنجليزية: Retinoscopy) أو تنظير الحدقة أو اختبار الظل هو تقنية فحص طبي للحصول على قياس موضوعي لخصائص الانكسارية في عين المريض المصابة. يستخدم الفاحص منظار الشبكية لتسليط الضوء على عين المريض ويلاحظ الانعكاس (المنعكس) خارج الشبكية للمريض.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042262.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microspheres",
    "term_en": "Microspheres",
    "term_ar": "جسيم دقيق",
    "synonyms": [
      "Microsphere",
      "Microbeads",
      "Microbead",
      "Latex Beads",
      "Bead, Latex",
      "Beads, Latex",
      "Latex Bead",
      "Latex Particles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Small uniformly-sized spherical particles, of micrometer dimensions, frequently labeled with radioisotopes or various reagents acting as tags or markers.",
    "arabic_definition": "الجسيمات الدقيقة (الإنجليزية: Microparticles) هي جسيمات يتراوح حجمها بين 0.1 و 100 ميكرومتر. تتوفر الجسيمات الدقيقة المتوفرة تجاريًا في مجموعة متنوعة من المواد، بما في ذلك السيراميك والزجاج والبوليمرات والمعادن. (Microspheres)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008863.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tourniquets",
    "term_en": "Tourniquets",
    "term_ar": "مرقأة",
    "synonyms": [
      "Tourniquet"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Devices for the compression of a blood vessel by application around an extremity to control the circulation and prevent the flow of blood to or from the distal area. (From Dorland, 28th ed)",
    "arabic_definition": "المِرْقَأة أو العاصبة (ويُقال أيضاً مكربة أو مضغطة) ملوى أو ضاغط لوقف النزف من وعاء دموي. (Tourniquets)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014111.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cephalometry",
    "term_en": "Cephalometry",
    "term_ar": "مرآسية",
    "synonyms": [
      "Craniometry"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The measurement of the dimensions of the HEAD.",
    "arabic_definition": "المِرآسية وجهازها هو المِرآس (الإنجليزية: Cephalometric X-Ray)، هي دراسة وقياس الرأس -الرأس البشري عادة- خاصة عند التصوير التشخيصي الطبي الشعاعي. يُعد قياس القحف (الجمجمة) تصنيفًا فرعيًا كبيرًا ضمن المِرآسية. (Cephalometry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002508.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oxygenators",
    "term_en": "Oxygenators",
    "term_ar": "مكساج",
    "synonyms": [
      "Oxygenator"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Devices which mechanically oxygenate venous blood extracorporeally. They are used in combination with one or more pumps for maintaining circulation during open heart surgery and for assisting the circulation in patients seriously ill with some cardiac and pulmonary disorders. (UMDNS, 1999)",
    "arabic_definition": "المِكْسَاج(1) هو جهاز طبي يؤمن تبادل غازي الأكسجين وثاني أكسيد الكربون في دم المريض البشري أثناء العمليات الجراحية التي قد تتطلب انقطاع أو وقف تدفق الدم في الجسم أو عضو أساسي أو وعاء دموي كبير. تشمل هذه الأعضاء القلب والرئتين والكبد، بينما تشمل الأوعية الكبرى الشريان الأبهر أو الشريان الرئوي أو الأوردة الرئوية أو الوريد الأجوف. (Oxygenators)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010106.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wheelchairs",
    "term_en": "Wheelchairs",
    "term_ar": "كرسي متحرك",
    "synonyms": [
      "Wheelchair",
      "Wheel Chairs",
      "Chairs, Wheel",
      "Chair, Wheel",
      "Wheel Chair"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chairs or seating mounted on wheels and designed to be controlled or propelled by the occupant. Medicare Part B (Medical Insurance) covers power-operated vehicles (scooters), walkers, and wheelchairs as durable medical equipment.",
    "arabic_definition": "الكرسي المتحرك وهو كرسي مع عجلات، صمم ليكون بديلا للمشي. لتثبيت وتصحيح وضع الجلوس لجسم المعاق أو المريض في شكل صحي لكي يستخدمه للتنقل من مكان إلى آخر، وهذا النوع من نظام الجلوس يعد على حساب مقاييس خاصة لكل فرد بشكل يوفر الراحة الكاملة له والحد من تطور أعراض الإعاقة. (Wheelchairs)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014910.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bioprinting",
    "term_en": "Bioprinting",
    "term_ar": "طباعة حيوية ثلاثية الأبعاد",
    "synonyms": [
      "3D Bioprinting",
      "3D Bioprintings",
      "Bioprinting, 3D",
      "Three-Dimensional Bioprinting",
      "Bioprinting, Three-Dimensional",
      "Three-Dimensional Bioprintings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A material transfer technique used for assembling biological material or cells into a prescribed organization to create functional structures such as MICROCHIP ANALYTICAL DEVICES, cell microarrays, or three dimensional anatomical structures.",
    "arabic_definition": "الطباعة الحيوية الثلاثية الابعاد (3D) : هي طريقة إنتاج أنماط الخلية في مساحة محددة باستخدام تقنيات الطباعة الثلاثية الأبعاد، مع الحفاظ على وظيفة الخلية وبقاؤها داخل البناء المطبوع. بشكل عام الطباعة الحيوية الثلاثية الأبعاد تستخدم طريقة الطبقة تلو الطبقة لترسب المواد المعروفة باسم مغذيات (bioinks) خلق هياكل تشبه الأنسجة التي تستخدم لاحقا في مجالات الهندسة الطبية والأنسجة. (Bioprinting)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062028.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anthroposophy",
    "term_en": "Anthroposophy",
    "term_ar": "أنثروبوصوفيا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Knowledge of the nature of man. A spiritual and mystical doctrine that grew out of theosophy and derives mainly from the philosophy of Rudolph Steiner, Austrian social philosopher (1861-1925). (Webster, 3d ed)",
    "arabic_definition": "الأنثروبوصوفيا أو العرفان البشري فلسفة بدأها الباطني رودُلف شنَينر في بدايات القرن العشرين و تقضي بوجود عالم روحي موضوعي يمكن للبشر إدراكه و معايشته. يُعنى أتباع هذه الفلسفة بتطوير الملكات العقلية التي تتيح الكشف الروحي بنمط فكري مستقل عن الإدراك الحسي، كما يسعون إلى تقديم أفكارهم بمنهجية يمكن التحقُّق منها بالأساليب العقلانية و التجريب، و إلى الدِّقَّة و الوضوح في دراسة العالم الروحي بما يماثل دقة و وضوح العلماء من دارسي ظواهر العالم المادي. (Anthroposophy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000887.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "distillation",
    "term_en": "Distillation",
    "term_ar": "تقطير",
    "synonyms": [
      "Distillations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chemical process for separating the components of a liquid mixture by boiling and collecting condensed vapors.",
    "arabic_definition": "التقطير تِقْنِيَّة لفصل موادَّ كيميائية بعضِها عن بعض بحسَب اختلاف درجة غليانها فنحصل على قطارة من جهة وحالة من جهة أخرى. تتمثل عملية التقطير المائي في تبخير خليط غير متجانس من الماء ومادة طبيعية، يليه تكثيف البخار بتبريده للحصول على نكهات أو روح عطر. (Distillation)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057168.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stethoscopes",
    "term_en": "Stethoscopes",
    "term_ar": "سماعة طبية",
    "synonyms": [
      "Stethoscope"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Instruments intended to detect and study sound produced by the heart, lungs, or other parts of the body. (from UMDNS, 1999)",
    "arabic_definition": "السماعة الطبية أو المسماع أو مِسْمَع أو ستيتوسكوب وتعني حرفياً جهاز مراقبة الصدر. جهاز طبي يكشف فيه السامع عن أصوات داخلية (لتفحص الأعضاء الداخلية) إن كانت طبيعية أو لا، وقد أصبح الجهاز لا غنى عنه في تشخيص الأمراض حتى أنّه أضحى رمزاً لمهنة الأطباء، وغالباً ما نراهم يعلّقونه حول رقبتهم. (Stethoscopes)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019023.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thermometers",
    "term_en": "Thermometers",
    "term_ar": "مقياس الحرارة",
    "synonyms": [
      "Thermometer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Measuring instruments for determining the temperature of matter. Most thermometers used in the field of medicine are designed for measuring body temperature or for use in the clinical laboratory. (From UMDNS, 1999)",
    "arabic_definition": "مقياس الحرارة هو أداة صغيرة تُستخدم لقياس درجات حرارة (درجة سخونة أو برودة الجسم) الغازات والسّوائل والمواد الصلبة. ويستعمل كثيرا في الطب لقياس درجة حرارة المرضى ومتابعة رعايتهم الصحية، كما تستخدم أنواع أخرى لقياس درجة حرارة الطقس، وتُستخدم أيضا في التكنولوجيا والصناعة والبحث العلمي. (Thermometers)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013821.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pigmentation",
    "term_en": "Pigmentation",
    "term_ar": "خضاب",
    "synonyms": [
      "Pigmentations",
      "Pigment"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Coloration or discoloration of a part by a pigment.",
    "arabic_definition": "الخِضاب (الجمع: أخضاب وخُضُب) مادة كيميائية تُستخدم لإضفاء اللون على المواد المختلفة من خلال امتصاص بعض أطوال الموجات الضوئية وعكس أخرى. ويُخلط أحيانًا بين مصطلحي \"الخِضاب\" و\"الصباغ\"، لكنهما يختلفان في طبيعة ارتباطهما بالمادة الملوّنة. (Pigmentation)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010858.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "magnetometry",
    "term_en": "Magnetometry",
    "term_ar": "مقياس المغناطيسية",
    "synonyms": [
      "Magnetometer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The measurement of various aspects of MAGNETIC FIELDS.",
    "arabic_definition": "مقياس المغناطيسية هو جهاز يقيس المغناطيسية - الاتجاه أو القوة أو التغير النسبي لمجال مغناطيسي في موقع معين. مثال على ذلك قياس مغنطة مادة مغناطيسية (مثل المغناطيس الحديدي). (Magnetometry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060306.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunotherapy",
    "term_en": "Immunotherapy",
    "term_ar": "علاج مناعي",
    "synonyms": [
      "Immunotherapies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Manipulation of the host's immune system in treatment of disease. It includes both active and passive immunization as well as immunosuppressive therapy to prevent graft rejection.",
    "arabic_definition": "العلاج المناعي هو علاج المرض عن طريق تنشيط أو تثبيط الجهاز المناعي، فالعلاج المناعي القائم على إثارة أو تضخيم رد فعل الجهاز المناعي يتم تصنيفه كعلاج مناعي تنشيطي، بينما العلاج المناعي القائم على تقليله أو إخماده يتم تصنيفه كعلاج مناعي تثبيطي. وقد زاد الاهتمام كثيرًا عند الباحثين في السنوات الأخيرة بالعلاج المناعي وخاصةً بإمكانية علاجه لأنواع مختلفة من السرطان. (Immunotherapy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007167.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brachytherapy",
    "term_en": "Brachytherapy",
    "term_ar": "معالجة قريبة (إشعاع)",
    "synonyms": [
      "Brachytherapy, Radioisotope",
      "Radioisotope Brachytherapy",
      "Curietherapy",
      "Radiotherapy, Intracavity",
      "Intracavity Radiotherapy",
      "Plaque Therapy, Radioisotope",
      "Radioisotope Plaque Therapy",
      "Therapy, Radioisotope Plaque"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A collective term for interstitial, intracavity, and surface radiotherapy. It uses small sealed or partly-sealed sources that may be placed on or near the body surface or within a natural body cavity or implanted directly into the tissues.",
    "arabic_definition": "يشير مصطلح المُعَالَجَة الكَثَبِيَّة أو المعالجة الإشعاعية عن قرب (الإنجليزية: Brachytherapy) إلى شكل من أشكال المعالجة الإشعاعية يُزرع من خلالها مصدر الإشعاع المغلق داخل المنطقة المستهدفة أو بشكل ملاصق لها. تُستخدم المعالجة الإشعاعية الداخلية بشكل شائع كعلاج فعال لسرطانات عنق الرحم والبروستات والثدي والمريء والجلد، كما يمكن استخدامها لعلاج الأورام في أماكن أخرى عديدة من الجسم.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001918.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chemometrics",
    "term_en": "Chemometrics",
    "term_ar": "قياس كيميائي",
    "synonyms": [
      "Chemometric Analysis",
      "Analyses, Chemometric",
      "Analysis, Chemometric",
      "Chemometric Analyses",
      "Chemometry"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The use of statistical and mathematical methods to analyze chemical observations and phenomena, such as epidemiological analysis of spectroscopically identified bacteria or QUANTITATIVE STRUCTURE-ACTIVITY RELATIONSHIP.",
    "arabic_definition": "القياس الكيميائي هو علم استحصال واستخراج المعلومات من الأنظمة الكيميائية باستخدام وسائل إحصائية من أجل تحليل البيانات مثل إحصاء متعدد المتغيرات والرياضيات التطبيقية والحوسبة. يهدف القياس الكيميائي إلى حل المشاكل التي تصادف في العلوم الحيوية والتطبيقية. (Chemometrics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000090022.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anthropometry",
    "term_en": "Anthropometry",
    "term_ar": "قياسات بشرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The technique that deals with the measurement of the size, weight, and proportions of the human or other primate body.",
    "arabic_definition": "القياسات البشرية أو الأنثروبومترية (الإنجليزية: anthropometry، وهي كلمة يونانية الأصل تعني حرفيا قياس البشر) مَبْحَث يهتم بقياس الفرد البشري بهدف فهم الاختلافات المادية البشرية. اليوم، الأنثروبومترية تلعب دورا مهما في التصميم الصناعي ، وتصميم الملابس ، وبيئة العمل والهندسة المعمارية التي تستخدم فيها بيانات إحصائية حول مقاسات اجسام السكان بهدف تحسين المنتجات.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000886.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plastination",
    "term_en": "Plastination",
    "term_ar": "تلدين",
    "synonyms": [
      "Plastinations",
      "تلدين (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Preservation technique in which epoxy polymers are used to preserve tissue or an organ resulting in anatomically authentic dry specimens often used in teaching of anatomy.",
    "arabic_definition": "التلدين هو تقنية تستخدم في التشريح للحفاظ على الجثث أو لأجزاء الجسم. يتم استبدال المياه والدهون بمواد بلاستيكية معينة، وذلك للسماح للعينات القابلة للمس بعدم التحلل أو التعفن، وحتى الحفاظ على خصائص الشكل الأصلي. (Plastination)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077780.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "psychophysics",
    "term_en": "Psychophysics",
    "term_ar": "علم الطبيعة النفسية",
    "synonyms": [
      "Psychophysic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The science dealing with the correlation of the physical characteristics of a stimulus, e.g., frequency or intensity, with the response to the stimulus, in order to assess the psychologic factors involved in the relationship.",
    "arabic_definition": "تبحث الفيزياء النفسية أو علم الطبيعة النفسية في العلاقة بين المنبهات الجسدية والأحاسيس والتصورات التي تنتجها كميًا. تُوصف الفيزياء النفسية بأنها «الدراسة العلمية للعلاقة بين التحفيز والإحساس»، أو إكمالًا، أنها «تحليل العمليات الإدراكية من خلال دراسة تأثير التباين الممنهج لخصائص المنبه على مقياس واحد أو أكثر من المقاييس الفيزيائية على تجربة أو سلوك شخص ما». (Psychophysics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011601.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemorheology",
    "term_en": "Hemorheology",
    "term_ar": "لزوجة الدم المطاطية",
    "synonyms": [
      "Hemorrheology"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The deformation and flow behavior of BLOOD and its elements i.e., PLASMA; ERYTHROCYTES; WHITE BLOOD CELLS; and BLOOD PLATELETS.",
    "arabic_definition": "لزوجة الدم المطاطية (ويُعرف أيضًا باسم رِيولوجيا الدم أو انسيابية الدم؛ (Hemorheology) أو (Blood rheology) هي دراسة جريان الدم وسلوك تشوّه مكوّناته، ولا سيما البلازما والعناصر الخلوية، عند تعرضها للإجهادات ومعدلات القص المختلفة. وتشمل الخواص المدروسة لزوجة الدم وسلوكها المعتمد على معدل القص، والهيماتوكريت، وقابلية كريات الدم الحمراء للتشوه وتجمّعها، إضافةً إلى الخواص اللزجة-المرنة للدم ومكوّناته.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018056.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synchrotrons",
    "term_en": "Synchrotrons",
    "term_ar": "مسرع دوراني تزامني",
    "synonyms": [
      "Synchrotron"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Devices for accelerating protons or electrons in closed orbits where the accelerating voltage and magnetic field strength varies (the accelerating voltage is held constant for electrons) in order to keep the orbit radius constant.",
    "arabic_definition": "المسرع الدوراني التزامني (السينكروترون) (الإنجليزية: Synchrotron) نوع خاص من مسرعات الجسيمات التي يطبق فيها كل من الحقل المغناطيسي (من أجل تحريك الجسيمات بحركة دورانية) والحقل الكهربائي (من أجل تسريع الجسيمات) وذلك بشكل متزامن (متوافق) مع حزمة الجسيمات المنتقلة (المتحركة، انظر معجل خطي). تم تطوير هذا النوع من المسرعات بواسطة لويس ولتر ألفاريز لدراسة فيزياء الجسيمات عالية الطاقة. (Synchrotrons)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017356.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "iontophoresis",
    "term_en": "Iontophoresis",
    "term_ar": "إرحال أيوني",
    "synonyms": [
      "Iontophoreses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Therapeutic introduction of ions of soluble salts into tissues by means of electric current. In medical literature it is commonly used to indicate the process of increasing the penetration of drugs into surface tissues by the application of electric current. It has nothing to do with ION EXCHANGE; AIR IONIZATION nor PHONOPHORESIS, none of which requires current.",
    "arabic_definition": "الإرحال الأيوني (الإنجليزية: Ionotophoresis) رحلان الشاردي لماء الصنبور، هو طريقة متميزة لتخفيض التعرق في أجزاء مختلفة من الجسم، الرحلان الشاردي هو طريقة لزيادة نفوذ الدواء الداخل لسطح الجلد بتطبيق التيار كهربائي. جهاز الـ Drionic هو طريقة تعمل بالبطارية لأحداث انحلال شاردي لماء الصنبور. (Iontophoresis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007478.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytapheresis",
    "term_en": "Cytapheresis",
    "term_ar": "فصادة",
    "synonyms": [
      "Cytaphereses",
      "Apheresis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Separation of one or more kinds of cells from whole blood with the return of other blood cell constituents to the patient or donor. This is accomplished with an instrument that uses centrifugation to separate the cells into different layers based on the differences in cell density (displacement) or drag coefficients in a current (elutriation). The procedure is commonly used in adoptive transfer to isolate NK cells, lymphocytes, or monocytes.",
    "arabic_definition": "الفِصادَة (الإنجليزية: Apheresis) هي فصل مكونات الدم. يعود أصل الكلمة الأجنبية إلى الكلمة اليونانية القديمة (اليونانية: ἀφαίρεσις) وتعني إبعاد. (Cytapheresis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016238.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polypharmacy",
    "term_en": "Polypharmacy",
    "term_ar": "تعديد الأدوية",
    "synonyms": [
      "Polymedication"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The use of multiple drugs administered to the same patient, most commonly seen in elderly patients. It includes also the administration of excessive medication. Since in the United States most drugs are dispensed as single-agent formulations, polypharmacy, though using many drugs administered to the same patient, must be differentiated from DRUG COMBINATIONS, single preparations containing two or more drugs as a fixed dose, and from DRUG THERAPY, COMBINATION, two or more drugs administered separately for a combined effect. (From Segen, Dictionary of Modern Medicine, 1992)",
    "arabic_definition": "تعديد الأدوية (الإنجليزية: Polypharmacy) هو استخدام المريض لأربعة أدوية أو أكثر، عادة ما تحصل هذه الحالة عند كبار السن الذين تجاوز سنهم 65 سنة، إذ أن 40% من كبار السن الذين يقيمون في منازلهم هم من أصحاب تعديد الأدوية. كما أن 21% من البالغين الذين يعانون من تخلف عقلي معرضون لتعديد الأدوية.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019338.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "premedication",
    "term_en": "Premedication",
    "term_ar": "تمهيد العلاج",
    "synonyms": [
      "Premedications"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Preliminary administration of a drug preceding a diagnostic, therapeutic, or surgical procedure. The commonest types of premedication are antibiotics (ANTIBIOTIC PROPHYLAXIS) and anti-anxiety agents. It does not include PREANESTHETIC MEDICATION.",
    "arabic_definition": "تمهيد العلاج (الإنجليزية: Premedication) هو الدواء أو العلاج الذي يعطى لمريض قبل عملية جراحية أو تداخل طبي. عادة ما تكون هذه الأدوية مهدئات أو مسكنات.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011292.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "periodontics",
    "term_en": "Periodontics",
    "term_ar": "طب دواعم السن",
    "synonyms": [
      "Periodontic",
      "Periodontal Medicine",
      "Medicine, Periodontal",
      "Medicines, Periodontal",
      "Periodontal Medicines",
      "Periodontology"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dental specialty concerned with the histology, physiology, and pathology of the tissues that support, attach, and surround the teeth.",
    "arabic_definition": "طب اللثة أو طب دواعم السن هو اختصاص في طب الأسنان الذي يدرس دواعم الأسنان وأمراضها والظروف التي تؤثر عليها. والانسجة الداعمة تسمى دواعم السن، التي تتضمن اللثة والعَظْمُ السِّنْخِيّ ومِلاَط ورِباطُ دواعم السن. (Periodontics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010517.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rejuvenation",
    "term_en": "Rejuvenation",
    "term_ar": "تجديد الشباب",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The phenomenon of youthfulness, vitality, and freshness being restored. This can apply to appearance, TISSUES, organ functions, or other areas.",
    "arabic_definition": "تجديد الشباب هو مجال طبي مهتم بدراسة العكس العملي لعملية الشيخوخة. يختلف تجديد الشباب عن مفهوم إطالة الحياة. (Rejuvenation)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012060.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polarography",
    "term_en": "Polarography",
    "term_ar": "قياس الاستقطابية",
    "synonyms": [
      "DC Polarography",
      "Polarography, DC",
      "Pulse Polarography",
      "Polarography, Pulse"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An electrochemical technique for measuring the current that flows in solution as a function of an applied voltage. The observed polarographic wave, resulting from the electrochemical response, depends on the way voltage is applied (linear sweep or differential pulse) and the type of electrode used. Usually a mercury drop electrode is used.",
    "arabic_definition": "قياس الاستقطابية أو التخطيط الاستقطابي هي نوع من أنواع قياس الفولتية حيث يكون القطب العامل قطب الزئبق المتقاطر (DME) أو قطب قطرة الزئبق الساكن (SMDE)، وهي أقطاب مفيدة لخدمتها في مجالات مهبطية واسعة وعلى أسطح قابلة للتجديد. اكتشف مبدأ قياس الاستقطابية سنة 1922 العالم ياروسلاف هايروفسكي، والذي حاز بسببه على جائزة نوبل في الكيمياء سنة 1959. (Polarography)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011048.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bibliotherapy",
    "term_en": "Bibliotherapy",
    "term_ar": "علاج بالقراءة",
    "synonyms": [
      "Bibliotherapies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of supportive psychotherapy in which the patient is given carefully selected material to read.",
    "arabic_definition": "العلاج بالقراءة (أو الببليوثيرابيا Bibliotherapy) هو استخدام مواد قرائية مختارة كوسائل علاجية مساعدة في الطب البدني أو الطب النفسي وكذلك في التوجيه إلى حل المشاكل الشخصية من خلال القراءة الرشيدة.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001638.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "therapeutics",
    "term_en": "Therapeutics",
    "term_ar": "علاج",
    "synonyms": [
      "Therapeutic",
      "Therapy",
      "Therapies",
      "Treatment",
      "Treatments",
      "علاج (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Procedures concerned with the remedial treatment or prevention of diseases.",
    "arabic_definition": "العلاج طبياً هو محاولة السيطرة على المرض والتخلص منه وهو المرحلة التي تلي عملية تشخيص المرض. ويُعد الهدف الرئيسي للعلاج هو إزالة جميع الأعراض والمسببات للمرض والوصول لحالة من الاتزان والاستقرار الوظيفي. (Therapeutics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013812.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "optogenetics",
    "term_en": "Optogenetics",
    "term_ar": "علم البصريات الوراثي",
    "synonyms": [
      "Optogenetic",
      "Optogenetic Techniques",
      "Optogenetic Technique",
      "Technique, Optogenetic",
      "Techniques, Optogenetic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The combination of genetic and optical methods in controlling specific events with temporal precision in targeted cells of a functioning intact biological system.",
    "arabic_definition": "علم البصريات الوراثي (الإنجليزية: Optogenetics) تقنية حيوية للتحكم في نشاط الخلايا العصبية أو أنواع الخلايا الأخرى باستخدام الضوء. يتحقق ذلك عبر التعبير الجيني المتعلق بالقنوات الأيونية الحساسة للضوء أو المضخات أو الإنزيمات بشكل خاص في الخلايا المستهدفة.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062308.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "contraception",
    "term_en": "Contraception",
    "term_ar": "تحديد النسل",
    "synonyms": [
      "Birth Control",
      "Contraceptive Methods",
      "Contraceptive Method",
      "Fertility Control",
      "Inhibition of Fertilization",
      "Fertilization Inhibition",
      "Female Contraception",
      "Contraception, Female"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Prevention of CONCEPTION by blocking fertility temporarily, or permanently (STERILIZATION, REPRODUCTIVE). Common means of reversible contraception include NATURAL FAMILY PLANNING METHODS; CONTRACEPTIVE AGENTS; or CONTRACEPTIVE DEVICES.",
    "arabic_definition": "تحديد النسل أو ضبط النسل ويُعرف أيضاً بـ منع الحمل وتنظيم الخصوبة وتنظيم النسل هي وسائل أو أجهزة تستخدم لمنع الحمل أو تقليل احتمالات الحمل أو الولادة. يُطلق على التخطيط لوسائل تحديد النسل وتوفيرها واستخدامها تنظيم الأسرة. (Contraception)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003267.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "olfactometry",
    "term_en": "Olfactometry",
    "term_ar": "مقياس الشم",
    "synonyms": [
      "Olfactometer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Procedures for measuring a response to odorants.",
    "arabic_definition": "جهاز قياس الشم (الإنجليزية: Olfactometer) هو أداة تُستخدم للكشف عن الروائح وقياس مدى تخفيفها. تُستخدم أجهزة قياس الشم مع متطوعين بشريين في المختبرات، وخاصةً في أبحاث السوق، لتحديد كمية ونوعية حاسة الشم لدى الإنسان. (Olfactometry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064367.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microbubbles",
    "term_en": "Microbubbles",
    "term_ar": "فقاعة دقيقة",
    "synonyms": [
      "Microbubble",
      "Colloidal Gas Aphrons",
      "Aphron, Colloidal Gas",
      "Aphrons, Colloidal Gas",
      "Colloidal Gas Aphron",
      "Gas Aphron, Colloidal",
      "Gas Aphrons, Colloidal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Small encapsulated gas bubbles (diameters of micrometers) that can be used as CONTRAST MEDIA, and in other diagnostic and therapeutic applications. Upon exposure to sufficiently intense ultrasound, microbubbles will cavitate, rupture, disappear, release gas content. Such characteristics of the microbubbles can be used to enhance diagnostic tests, dissolve blood clots, and deliver drugs or genes for therapy.",
    "arabic_definition": "الفقاعات الدقيقة أو الفقاقيع الدقيقة هي فقاعات أصغر من جزء من مائة من المليمتر، ولكنها أكبر من ميكرومتر واحد. على مدى العقد الماضي، كان هناك تقدم كبير نحو تطوير الفقاعات الدقيقة كعلاجات لمجموعة واسعة من التطبيقات الطبية الحيوية. (Microbubbles)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045423.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aromatherapy",
    "term_en": "Aromatherapy",
    "term_ar": "طب الروائح",
    "synonyms": [
      "Aromatherapies",
      "Aroma Therapy",
      "Aroma Therapies",
      "Therapies, Aroma",
      "Therapy, Aroma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The use of fragrances and essences from plants to affect or alter a person's mood or behavior and to facilitate physical, mental, and emotional well-being. The chemicals comprising essential oils in plants has a host of therapeutic properties and has been used historically in Africa, Asia, and India. Its greatest application is in the field of alternative medicine. (From Random House Unabridged Dictionary, 2d ed; from Dr. Atiba Vheir, Dove Center, Washington, D.C.)",
    "arabic_definition": "طب الروائح أو العلاج العطري (الإنجليزية: Aromatherapy) هو علم زائف يعتمد على استخدام المواد النباتية وزيوت النباتات العطرية، مثل الزيوت الأساسية، وغيرها من المكونات العطرية من أجل تحسين مزاج الشخص، والعافية الطبيعية والفسيولوجية الإدراكية يمكن أن يُوفر كعلاج متكامل أو أكثر جداليا كشكل من العلاج البديل. العلاج المتكامل يمكن أن يوفر بجانب العلاج الأساسي، أما مع الدواء البديل يوفر بدلا من العلاج التقليدي، العلاج التقليدي يكون بالعادة مثبت علميا.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019341.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "organotherapy",
    "term_en": "Organotherapy",
    "term_ar": "معالجة بالأعضاء",
    "synonyms": [
      "Organotherapies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Historically, the treatment of disease by the administration of animal organs or their extracts (after Brown-Sequard). At present synthetic preparations substitute for the extracts of a gland. (From Stedman, 26th ed)",
    "arabic_definition": "الاستعضاء أو المعالجة بالأعضاء أو المداواة بالأعضاء أو العلاج العضوي هو أسلوب يستخدم المستخلصات المشتقة من الأنسجة الحيوانية أو البشرية لعلاج الحالات الطبية. كانت ممارسة الاستعضاء بنفس العضو المشتق من مخلوق آخر مألوفة لدى الإغريق والرومان القدماء؛ فقد كان أكل أنسجة المخ الحيواني يعد علاجًا محتملاً لذوي الذكاء المنخفض على سبيل المثال. (Organotherapy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009945.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chromatography",
    "term_en": "Chromatography",
    "term_ar": "استشراب",
    "synonyms": [
      "Chromatographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Techniques used to separate mixtures of substances based on differences in the relative affinities of the substances for mobile and stationary phases. A mobile phase (fluid or gas) passes through a column containing a stationary phase of porous solid or liquid coated on a solid support. Usage is both analytical for small amounts and preparative for bulk amounts.",
    "arabic_definition": "الاستشراب أو الفصل الاستشرابي أو الاستشرابية (الإنجليزية: Chromatography) أو نقحرة: الكروماتوغرافيا أو الكروماتوجرافية أو الكروماتوجرافيا أو الفصل الكروماتوغرافي أو الرِّسامة اللونية طريقة لفصل وتنقية المواد الكيميائية المختلطة. تعتمد الطريقة على توزع مكونات المخلوط بنسب مختلفة بين مكوني نظام ثنائي أحدهما متحرك والآخر ثابت.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002845.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microfluidics",
    "term_en": "Microfluidics",
    "term_ar": "علم الموائع الدقيقة",
    "synonyms": [
      "Microfluidic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The study of fluid channels and chambers of tiny dimensions of tens to hundreds of micrometers and volumes of nanoliters or picoliters. This is of interest in biological MICROCIRCULATION and used in MICROCHEMISTRY and INVESTIGATIVE TECHNIQUES.",
    "arabic_definition": "يختص علم الموائع الدقيقة (الإنجليزية: Microfluidics) بالتعامل مع سلوك، الضبط الدقيق ومعالجة الموائع، المقيدة هندسياً بالأحجام الصغيرة وغالباً ما تكون في نطاق الملليمترات الفرعية. ومن المعروف أن صفة الدقيق (ميكرو) يُعْنَى بها الخصائص التالية: الكميات الصغيرة (nl، pl، fl) الأحجام الصغيرة استهلاك منخفض للطاقة تأثيرات المجال الدقيق هذا ويُعَدٌ علم الموائع الدقيقة مجالاً متعدد التخصصات (Multidisciplinarity)، والذي تتقاطع عنده العديد من العلوم ومنها الهندسة، الفيزياء، الكيمياء، التقانة الدقيقة والتقانة الحيوية، كما أن له تطبيقاتٍ عمليةٍ في مجال تصميم الأنظمة التي يمكن استخدام وتوظيف تلك الكميات الصغيرة من الموائع بها.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044085.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "semiconductors",
    "term_en": "Semiconductors",
    "term_ar": "شبه موصل",
    "synonyms": [
      "Semiconductor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Materials that have a limited and usually variable electrical conductivity. They are particularly useful for the production of solid-state electronic devices.",
    "arabic_definition": "شِبهُ المُوصِل أو نِصفُ الناقِل هو مادة صلبة ينتقل فيها التيار الكهربائي بصعوبة، يجري التحكم في موصليتها الكهربائية بإضافة عناصر أخرى بكميات ضئيلة. شبه الموصل تكون مقاومته الكهربائية ما بين الموصلات والعوازل. (Semiconductors)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012666.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "refrigeration",
    "term_en": "Refrigeration",
    "term_ar": "تثليج",
    "synonyms": [
      "Cold Chain",
      "Chain, Cold",
      "Chains, Cold",
      "Cold Chains"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The mechanical process of cooling.",
    "arabic_definition": "التثليج عملية تستعمل دورة تثلج لتخفيض درجة الحرارة من إحدى الجهتين (بخلاف الهدف النقيض مضخة الحرارة). وأقرب التطبيقات لعامة الناس جهاز الثلاجة، وتتعدد تطبيقاتها. (Refrigeration)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012034.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electroplating",
    "term_en": "Electroplating",
    "term_ar": "طلي كهربائي",
    "synonyms": [
      "Electrodeposition",
      "Metal Plating",
      "Plating, Metal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Coating with a metal or alloy by electrolysis.",
    "arabic_definition": "الطلي الكهربائي أو طلاء كهربائي أو الكهطلة هو عملية التصفيح بطلاء معدني حيث تُنقل الأيونات المعدنية المشحونة بواسطة مجال كهربي إلى قطب كهربائي. تستخدم العملية تيار كهربائي لأعطاء الجسم المراد طلائه شحنه مختلفه عن شحنة الطلاء ثم يوضع الجسم المراد طلائه في حوض مليء بالطلاء المشحون بشحنه مختلفه ومن المعروف ان الشحنات المختلفة تتجاذب وبذلك يطلى كل ملي متر من الجسم.يستخدم الطلاء الكهربائي غالبا لأعطاء الجسم طبقه رقيقه ذات صفات خاصه على سبيل المثال(مقاومة الكشط والتآكل، الحماية من الصدأ، وصفات جمالية، الخ)والتي يفتقر إليها الجسم في حالته الطبيعية.هناك تطبيق آخر وهو أعطاء سماكة للأجزاء النحيلة. (Electroplating)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004595.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bioprospecting",
    "term_en": "Bioprospecting",
    "term_ar": "تنقيب حيوي",
    "synonyms": [
      "Biopanning"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The systematic search and discovery of natural substances which may have potential commercial applications.",
    "arabic_definition": "التنقيب الحيوي أو التنقيب الأحيائي أو التنقيب البيولوجي (الإنجليزية: Bioprospecting)، عملية اكتشاف منتجات جديدة وإدخالها إلى السوق بناءً على موارد حيوية. يمكن أن تكون هذه الموارد أو المركبات مهمة ومفيدة في العديد من المجالات بما فيها الصناعة الدوائية والزراعة والمعالجة الحيوية للبيئة والتقنية النانوية ومجالات أخرى.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065132.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "defibrillators",
    "term_en": "Defibrillators",
    "term_ar": "جهاز الرجة القلبية",
    "synonyms": [
      "Defibrillator",
      "Stimulators, Electrical, Cardiac, Shock",
      "Electric Shock Cardiac Stimulators",
      "Automated External Defibrillators",
      "Automated External Defibrillator",
      "Defibrillator, Automated External",
      "Defibrillators, Automated External",
      "External Defibrillator, Automated"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cardiac electrical stimulators that apply brief high-voltage electroshocks to the HEART. These stimulators are used to restore normal rhythm and contractile function in hearts of patients who are experiencing VENTRICULAR FIBRILLATION or ventricular tachycardia (TACHYCARDIA, VENTRICULAR) that is not accompanied by a palpable PULSE. Some defibrillators may also be used to correct certain noncritical dysrhythmias (called synchronized defibrillation or CARDIOVERSION), using relatively low-level discharges synchronized to the patient's ECG waveform. (UMDNS, 2003)",
    "arabic_definition": "جهاز الرجة القلبية هو جهاز يولد نبضات كهربائية ذات جهد عالي بفولتية مستمرة تصل الى أكثر من الف فولت في الحالات القصوى و ذلك من اجل علاج اضطرابات نظم القلب المهددة للحياة، وتحديدًا الرجفان البطيني (V-Fib) وتسارع القلب البطيني غير المروي (V-Tach). يقوم جهاز الرجة القلبية بتوصيل جرعة من التيار الكهربائي (يُطلق عليها غالبًا صدمة مضادة) إلى القلب. (Defibrillators)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D047548.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interferometry",
    "term_en": "Interferometry",
    "term_ar": "قياس التداخل",
    "synonyms": [
      "Interferometries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Measurement of distances or movements by means of the phenomena caused by the interference of two rays of light (optical interferometry) or of sound (acoustic interferometry).",
    "arabic_definition": "قياس التداخل في الفيزياء (بالإنجليزية: Interferometry) هي تقنية خاصة بدراسة خواص موجة أو موجات عن طريق تعيين التداخل الذي يحدث عند انطباق موجتان أو أكثر على بعضها. ويسمى الجهاز الذي يقوم بتعيين تداخل الموجات بمقياس التداخل interferometer.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007368.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunoblotting",
    "term_en": "Immunoblotting",
    "term_ar": "لطخة ويسترن",
    "synonyms": [
      "Immunoblottings",
      "Dot Immunoblotting",
      "Immunoblotting, Dot",
      "Dot Immunoblottings",
      "Immunoblottings, Dot",
      "Immunoelectroblotting",
      "Immunoelectroblottings",
      "Electroimmunoblotting"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Immunologic method used for detecting or quantifying immunoreactive substances. The substance is identified by first immobilizing it by blotting onto a membrane and then tagging it with labeled antibodies.",
    "arabic_definition": "في التقنيات الحيوية، لطخة ويسترن (الإنجليزية: Western Blot) (تعرف أيضا باللطخة المناعية Immunoblot) هي طريقة اكتشاف بروتين معين في عينة أو مستخلص أنسجة، وهي من التقنيات الحيوية المخبرية. تستخدم الفصل الكهربائي للهلام لفصل البروتينات الطبيعية native proteins أو البروتينات المُتَمَسِّخة denatured proteins حسب طول السلاسل البروتينية (ظروف مفككة) أو حسب الشكل الثلاثي الأبعاد للبروتين (ظروف قومية/غير مفككة). (Immunoblotting)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015151.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "centrifugation",
    "term_en": "Centrifugation",
    "term_ar": "طرد مركزي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Process of using a rotating machine to generate centrifugal force to separate substances of different densities, remove moisture, or simulate gravitational effects. It employs a large motor-driven apparatus with a long arm, at the end of which human and animal subjects, biological specimens, or equipment can be revolved and rotated at various speeds to study gravitational effects. (From Websters, 10th ed; McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "الطرد المركزي أو الإنباذ أو النَبْذ أو التثفيل (الإنجليزية: centrifugation) أسلوب معملي يُستخدم لفحص مكونات الدم وذلك بوضع قطرة دم غير متخثرة أكسلات الأمونيوم أو أي خلية دموية مراد فحصها في جهاز خاص يسمى الطاردة وبفضل سرعتها الدورانية الكبيرة تقوم بفصل مكونات الدم في أنبوب الاختبار حيث تتركز في قاعه جسيمات الدم الأكثر ثقلا (انظر الشكل). جهاز الطرد المركزي هو عبارة عن جهاز يتم فيه توليد قوى الطرد المركزي عن طريق الدوران حيث تتجه الجزيئات الأكثر ثقالة إلى الخارج بعيدا عن محور الدوران، واما الجزيئات الأقل ثقالة فتبقى في مكان وسطي.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002498.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autosuggestion",
    "term_en": "Autosuggestion",
    "term_ar": "إيحاء ذاتي",
    "synonyms": [
      "Autosuggestions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Suggestion coming from the subject himself.",
    "arabic_definition": "الإيحاء الذاتي (بالإنجليزية: Autosuggestion) هو تقنية نفسية تتعلق بتأثير الدواء الوهمي، تم تطويره بواسطة الصيدلي إميل كويل في بداية القرن العشرين. وهو شكل من أشكال الاقتراح الذاتي الذي يوجه فيه الأفراد أفكارهم أو مشاعرهم أو سلوكهم.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001346.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "accelerometry",
    "term_en": "Accelerometry",
    "term_ar": "مقياس تسارع",
    "synonyms": [
      "Accelerometer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Qualitative and quantitative measurement of MOVEMENT patterns.",
    "arabic_definition": "مقياس التسارع هو عداد لقياس التسارع نتيجة نسبية لتجربة السقوط الحر أثر الجاذبية. والنماذح المتاحة بمحور واحد ومتعددة المحاور للكشف عن حجم واتجاه التسارع كقوة موجهة للكمية، ويمكن استخدامها للتوجيه المعني، والاهتزاز والصدمات. (Accelerometry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D061725.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electroosmosis",
    "term_en": "Electroosmosis",
    "term_ar": "تناضح كهربائي",
    "synonyms": [
      "Electroosmotic Flow",
      "Electro-osmosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The motion of a liquid through a membrane (or plug or capillary) consequent upon the application of an electric field across the membrane. (Oxford Dictionary of Biochemistry and Molecular Biology, 2001)",
    "arabic_definition": "التناضح الكهربائي أو تنافذ كهربائي (الإنجليزية: Electro-osmosis) هي خاصية فيزيائية اكتشفت عام 1809 من طرف ف.ف.روس. عندما يتلامس سائل مع صلب، هذا الأخير يحمل شحنة سلبية أو ايجابية حسب طبيعة الصلب و PH السائل مكونا الطبقة الكهربائة المزدوجة. (Electroosmosis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053841.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurofeedback",
    "term_en": "Neurofeedback",
    "term_ar": "ارتجاع عصبي",
    "synonyms": [
      "Neurofeedbacks",
      "Brainwave Biofeedback",
      "Biofeedback, Brainwave",
      "Biofeedbacks, Brainwave",
      "Brainwave Biofeedbacks",
      "Alpha Biofeedback",
      "Alpha Biofeedbacks",
      "Biofeedback, Alpha"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A technique to self-regulate brain activities provided as a feedback in order to better control or enhance one's own performance, control or function. This is done by trying to bring brain activities into a range associated with a desired brain function or status.",
    "arabic_definition": "الارتجاع العصبي أو تلقيم راجع عصبي (الإنجليزية: Neurofeedback) هو تقنية حديثة تستخدم ليس فقط في علاج الكثير من الأمراض النفسية والعصبية وإنما في تحسين القدرات الذهنية والمعرفية، حيث يتم توصيل مجسات إلكترونية لقياس موجات المخ. تثبت المجسات على جهة الرأس الخاصة بالفص المراد تدريبه من الدماغ وتوصل بجهاز لرسم المخ.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058765.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pharmacophore",
    "term_en": "Pharmacophore",
    "term_ar": "فارماكوفور",
    "synonyms": [
      "Pharmacophore Modeling",
      "Modeling, Pharmacophore",
      "Modelings, Pharmacophore"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A three-dimensional representation of a molecule that is used for modeling recognition of ligands and macromolecular targets.",
    "arabic_definition": "الفارمكوفور أو حامل الخاصة الدوائية عبارة عن وصف لجملة الاجزاء من الدواء الحاملة للصفات الدوائية وهذه الاجزاء ضرورية جدًا حتى يتم التعرف عليه بالنسبة للجزيئات الضخمة داخل الجسم الحي. (Pharmacophore)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000092165.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "resuscitation",
    "term_en": "Resuscitation",
    "term_ar": "إنعاش",
    "synonyms": [
      "Resuscitations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The restoration to life or consciousness of one apparently dead. (Dorland, 27th ed)",
    "arabic_definition": "الإِنْعاش (الإنجليزية: Resuscitation) هي عمليةُ تصحيح الاضطرابات الفيزيولوجية (مثل ضعف التنفس أو ضربات القلب) في مريضٍ مصابٍ بمرضٍ حاد. يُعد الإنعاشُ جزءًا هامًا من الطب الحرج وجراحة الرضة وطب الطوارئ.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012151.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ophthalmoscopy",
    "term_en": "Ophthalmoscopy",
    "term_ar": "تنظير قاع العين",
    "synonyms": [
      "Ophthalmoscopies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Examination of the interior of the eye with an ophthalmoscope.",
    "arabic_definition": "تنظير قاع العين (الإنجليزية: Ophthalmoscopy) أو (fundoscopy)، هو فحص طبي يتيح رؤية قاع العين وأجزء أخرى من العين من الداخل باستخدام منظار قاع العين. يجرى كجزء من فحوص العين وقد يجرى أثناء الفحص الطبي الروتيني.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009887.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prosthodontics",
    "term_en": "Prosthodontics",
    "term_ar": "تعويضات سنية",
    "synonyms": [
      "Dentistry, Prosthetic",
      "Prosthetic Dentistry"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dental specialty concerned with the restoration and maintenance of oral function by the replacement of missing TEETH and related structures by artificial devices or DENTAL PROSTHESES.",
    "arabic_definition": "التعويضات السنية هي تعويض الأسنان المفقودة والأنسجة المحيطة بالأسنان بمواد اصطناعية. والتعويضات على نوعين، التعويضات السينة هي القسم العملي والصناعي من المعالجة الطبية لفقد سن في فم المريض وقوم على قسم يممه طبيب الاسنان على فم المريض وآخر يقوم بع في الاسنان بعناية فائقة ودقة. (Prosthodontics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011476.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sclerotherapy",
    "term_en": "Sclerotherapy",
    "term_ar": "المعالجة بالتصليب",
    "synonyms": [
      "Sclerotherapies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Treatment of varicose veins, hemorrhoids, gastric and esophageal varices, and peptic ulcer hemorrhage by injection or infusion of chemical agents which cause localized thrombosis and eventual fibrosis and obliteration of the vessels.",
    "arabic_definition": "المعالجة بالتصليب (الإنجليزية: Sclerotherapy) هو تدخل طبي يُستخدم لعلاج الأوعية الدموية أو تشوهاتها، كذلك تلك الموجودة بالجهاز اللمفاوي. ويتم حقن الأوعية الدموية بمواد طبية تؤدي لانكماشها.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015911.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microdialysis",
    "term_en": "Microdialysis",
    "term_ar": "ديلزة مكروية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A technique for measuring extracellular concentrations of substances in tissues, usually in vivo, by means of a small probe equipped with a semipermeable membrane. Substances may also be introduced into the extracellular space through the membrane.",
    "arabic_definition": "ديلزة مكروية (الإنجليزية: Microdialysis) هي تقنيةٌ غير مُتوغلةٍ لأخذ العينات المُستخدمة للقياس المُستمر الحُر، ولقياس المحاليل ذات التراكيز المُنظمة والتي تكون في السائل خارج الخليةالموجود في الأنسجة. قد تشمل التحاليل الجُزيئات داخلية المنشأ مثل (النواقل العصبية، الهرمونات، الجلوكوز) لتقيم وظائفها الحيوية والكيميائية في الجسم، بالإضافة إلى الجزيئات خارجية المنشأ (مثل الأدوية) لتحديد توزيعها في الجسم.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017551.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "overdiagnosis",
    "term_en": "Overdiagnosis",
    "term_ar": "فرط التشخيص",
    "synonyms": [
      "Overdiagnoses",
      "Pseudodisease, Over-Diagnosed",
      "Over-Diagnosed Pseudodisease",
      "Over-Diagnosed Pseudodiseases",
      "Pseudodiseases, Over-Diagnosed",
      "Over-Diagnosis",
      "Over-Diagnoses",
      "Pseudodisease, Overdiagnosed"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The labeling of a person with a disease or abnormal condition that would not have caused the person harm if left undiscovered, creating new diagnoses by medicalizing ordinary life experiences, or expanding existing diagnoses by lowering thresholds or widening criteria without evidence of improved outcomes. Individuals derive no clinical benefit from overdiagnosis although they may experience physical, psychological or financial harm.",
    "arabic_definition": "فرط التشخيص هو تشخيص المرض الذي لن يسبب أبدًا أعراضًا أو وفاة خلال العمر المتوقع عادة للمريض وبالتالي لا يمثل أي تهديد عملي بغض النظر عن كونه مرضيًا. إن الإفراط في التشخيص هو أحد الآثار الجانبية للكشف عن الأشكال المبكرة من المرض. (Overdiagnosis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000088522.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microchemistry",
    "term_en": "Microchemistry",
    "term_ar": "كيمياء جزئية النطاق",
    "synonyms": [
      "Microscale chemistry"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The development and use of techniques and equipment to study or perform chemical reactions, with small quantities of materials, frequently less than a milligram or a milliliter.",
    "arabic_definition": "لا تعد الكيمياء جزئية النطاق (وغالبًا ما يُطلق عليها الكيمياء صغيرة النطاق، وفي الألمانية :Chemie im Mikromaßstabde:Chemie im Mikromaßstab) طريقة تحليلية فقط، بل هي كذلك طريقة تدريس شائعة الاستخدام على مستوى المدارس والجامعات، التي تتعامل مع كميات صغيرة من المواد الكيميائية. فبينما تعتمد العديد من الوسائل التقليدية لتدريس الكيمياء على التحضيرات المستهلكة لعدد كبير من الجرامات من المواد، تكتفي الكيمياء جزئية النطاق بملليجرامات من المواد الكيميائية. (Microchemistry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008832.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "toothbrushing",
    "term_en": "Toothbrushing",
    "term_ar": "تنظيف الأسنان",
    "synonyms": [
      "Toothbrushings",
      "Tooth brushing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The act of cleaning teeth with a brush to remove plaque and prevent tooth decay. (From Webster, 3d ed)",
    "arabic_definition": "هي وسيلة لإزالة بقايا الطعام عن الأسنان عن طريق استخدام فرشاة الأسنان، المعجون، السواك، وخيط الأسنان.من المهم معرفة الطريقة الصحيحة لتنظيف الأسنان للوقاية من التهاب اللثة والتسوس.إن الاستخدام الخاطئ قد يؤدي أيضاً إلى إزالة الطبقة الخارجية من السن (الميناء) وإلى انحسار اللثة وبالتالي ظهور جزء من جذر السن مما يؤدي إلى ما يسمى بحساسية الأسنان. (Toothbrushing)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014099.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "climatotherapy",
    "term_en": "Climatotherapy",
    "term_ar": "مداواة بالمناخ",
    "synonyms": [
      "Climate Therapy",
      "Therapy, Climate",
      "Thalassotherapy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Relocating a patient to a CLIMATE more suitable for health or for management of a health condition.",
    "arabic_definition": "المداواة بالمناخ أو المداواة المناخية أو الطباب بتغيير المناخ تعني نقل المريض مؤقتًا أو دائمًا إلى منطقة ذات مناخ أكثر ملاءمة للتعافي من حالة مرضية أو السيطرة عليها. ومن الأمثلة على ذلك: يكون الضغط الجزئي للأكسجين أقل في المرتفعات العالية، لذا قد ينتقل الشخص المصاب بمرض فقر الدم المنجلي إلى منطقة منخفضة الارتفاع لتقليل عدد نوبات فقر الدم المنجلي. (Climatotherapy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013790.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chronotherapy",
    "term_en": "Chronotherapy",
    "term_ar": "علاج زمني",
    "synonyms": [
      "Chronotherapies",
      "Chronotherapy (treatment scheduling)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The adaptation of therapeutic approaches such as pharmacological (DRUG CHRONOTHERAPY), surgical, radiological, or physical to the known variations in biological RHYTHMICITY, such as CIRCADIAN RHYTHMS. The treatment is aimed at supporting normal rhythms, or modifying the timing of therapy to achieve maximal efficacy and minimal adverse effect.",
    "arabic_definition": "طريقة العلاج الزمني (الإنجليزية: Chronotherapy) هي تقنية علاجية حديثة، تقوم بالأساس على استخدام علاجات تتوافق مع إيقاع الدورة البيولوجية اليومية الخاصة بجسم المريض بغرض زيادة فعالية العلاج والحد من آثاره الجانبية. يمكن تطبيق هذا النوع من العلاج في في العديد من المجالات العلاجية، على غرار علاجات الأمراض النفسية والجسدية التي تدار وفقا لجدول زمني محدد يتوافق مع الإيقاع الفيزيولوجي لجسم المريض من أجل تحقيق أقصى قدر من الفعالية.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019454.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chemogenetics",
    "term_en": "Chemogenetics",
    "term_ar": "وراثيات كيميائية",
    "synonyms": [
      "Chemogenetic",
      "Chemogenetic Techniques"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The use of engineered small molecules to manipulate the activity of specific cells within living organisms, typically. Chemogenetic techniques are often used to study specific neural activity through genetically engineered receptors that bind specific endogenous or exogenous ligands.",
    "arabic_definition": "الوراثيات الكيميائية هي العملية المستخدمة في هندسة الجزيئات الضخمة بهدف التفاعل مع جزيئات صغيرة غير ممكن التعرف عليها في السابق. صيغ مصطلح الوراثيات الكيميائية في الأصل لوصف التأثيرات الملحوظة للطفرات على نشاط الكالكون إيزوميراز فيما يتعلق بخصائص الركائز في أزهار القرنفل الشائع. (Chemogenetics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000098972.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "crystallography",
    "term_en": "Crystallography",
    "term_ar": "علم البلورات",
    "synonyms": [
      "Crystallographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The branch of science that deals with the geometric description of crystals and their internal arrangement. (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "علم البلورات يختص بدراسة البلورات من حيث شكلها الظاهري أو الخارجي وتركيبها الداخلي والتعرف عليها وعلى الصخور والمعادن التي تحويها. وتوجد أنواع لهذه البلورات فالصلبة منها توجد في بعض المركبات مثل ملح الطعام، ومنها السائلة كما في شاشة البلور السائل. (Crystallography)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003461.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electroporation",
    "term_en": "Electroporation",
    "term_ar": "تثقيب كهربائي",
    "synonyms": [
      "Electric Field-Mediated Cell Permeabilization",
      "Electropermeabilisation",
      "Irreversible Electroporation",
      "Electroporation, Irreversible",
      "Reversible Electroporation",
      "Electroporation, Reversible"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A technique in which electric pulses, in kilovolts per centimeter and of microsecond-to-millisecond duration, cause a loss of the semipermeability of CELL MEMBRANES, thus leading to ion leakage, escape of metabolites, and increased uptake by cells of drugs, molecular probes, and DNA. Depending on the dosage, the formation of openings in the cell membranes caused by the electric pulses may or may not be reversible.",
    "arabic_definition": "التثقيب الكهربائي أو النفاذية الكهربائية (الإنجليزية: Electroporation أو electropermeabilization) هي عملية زيادة كبيرة في توصيل الكهرباء والنفاذية لغشاء البلازما الخارجي للخلية الناجم عن تطبيق مجال كهربائي. ومن عادة ما يستخدم في الأحياء الجزيئي والهندسة الوراثية كوسيلة لإدخال بعض المواد إلى خلية، مثل تحميل جزيئية ما من الدنا مثلا، أو دواء، الذي يمكن أن يغير وظيفة الخلايا، أو قطعة من الترميز للحمض النووي.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018274.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electrocardiography",
    "term_en": "Electrocardiography",
    "term_ar": "تخطيط كهربائية القلب",
    "synonyms": [
      "ECG",
      "EKG",
      "Cardiography",
      "Cardiographies",
      "Electrocardiogram",
      "Electrocardiograms",
      "Electrocardiograph",
      "Electrocardiographs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recording of the moment-to-moment electromotive forces of the HEART as projected onto various sites on the body's surface, delineated as a scalar function of time. The recording is monitored by a tracing on slow moving chart paper or by observing it on a cardioscope, which is a CATHODE RAY TUBE DISPLAY.",
    "arabic_definition": "تخْطِيطُ كهربائية القلب (الإنجليزية: Electrocardiography أو اختصارا ECG) يسجل التخطيط الكهربائي للقلب النشاط الكهربائي للقلب، حيث أن القلب ينتج نبضات كهربائية صغيرة تنتشر من خلال عضلة القلب وتتسبب في حدوث انقباض، ويمكن الكشف عن تلك النبضات من خلال جهاز التخطيط الكهربائي للقلب، ويلجأ الطبيب إلى إجراء اختبار التخطيط الكهربائي عادة ليساعده على معرفة السبب وراء بعض الأعراض مثل الخفقان أو ألم الصدر، وفي بعض الأحيان يجرى هذا الكشف كجزء من الفحوصات الروتينية، قبل إجراء عملية جراحية مثلا. لاتنتج أية أضرار أو أوجاع بسبب اختبار التخطيط الكهربائي للقلب.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004562.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypodermoclysis",
    "term_en": "Hypodermoclysis",
    "term_ar": "حقنة تحت الجلد",
    "synonyms": [
      "Subcutaneous Fluid Administration",
      "Administration, Subcutaneous Fluid",
      "Fluid Administration, Subcutaneous",
      "Subcutaneous Hydration",
      "Hydration, Subcutaneous",
      "Subcutaneous administration"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Technique for treating DEHYDRATION and WATER-ELECTROLYTE IMBALANCE by subcutaneous infusion of REHYDRATION SOLUTIONS.",
    "arabic_definition": "الحقن تحت الجلد هو حقن دفعة في نسيج تحت الجلد وهي طبقة تقع مباشرة تحت الأدمة والبشرة، وهذه الطبقتان تسميان بالجلد في علوم التشريح. الحقن تحت الجلد هو طريقة فعالة لإعطاء اللقاحات والأدوية مثل الإنسولين والمورفين والهيروين وغوسرلين. (Hypodermoclysis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055103.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electrophoresis",
    "term_en": "Electrophoresis",
    "term_ar": "رحلان كهربائي",
    "synonyms": [
      "Electrophoreses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An electrochemical process in which macromolecules or colloidal particles with a net electric charge migrate in a solution under the influence of an electric current.",
    "arabic_definition": "الاستشراد الكهربائي أو الهجرة الكهربائية أو الرحلان الكهربائي أو الهجرة الكهربية للمنطقة الشعرية (الإنجليزية: Electrophoresis) هو حركة الجسيمات المتشتتة بالنسبة لمائع تحت تأثير مجال كهربائي منتظم مكانياً. لوحظت هذه الظاهرة الكهروحركية لأول مرة عام 1807 بواسطة الروسين (جامعة موسكو)، الذي لاحظ أن تطبيق جهد كهربائي ثابت كان ينتج عنه هجرة جسيمات الصلصال المبعثرة في الماء.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004586.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sphygmomanometers",
    "term_en": "Sphygmomanometers",
    "term_ar": "مقياس ضغط الدم",
    "synonyms": [
      "Sphygmomanometer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Instruments for measuring arterial blood pressure consisting of an inflatable cuff, inflating bulb, and a gauge showing the blood pressure. (Stedman, 26th ed)",
    "arabic_definition": "جهاز قياس ضغط الدم جهاز طبي يستخدم لقياس ضغط الدم، يتألف من سوار قابل للنفخ للحد من تدفق الدم، ومقياس ضغط زئبقي ميكانيكي، ومنفاخ، وصمام تحكم. مقاييس ضغط الدم اليدوية تستخدم بالاقتران مع سماعة الطبيب. (Sphygmomanometers)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019722.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photochemotherapy",
    "term_en": "Photochemotherapy",
    "term_ar": "علاج ضوئي ديناميكي",
    "synonyms": [
      "Photochemotherapies",
      "Photodynamic Therapy",
      "Therapy, Photodynamic",
      "Photodynamic Therapies",
      "Therapies, Photodynamic",
      "Blue Light Photodynamic Therapy",
      "Red Light Photodynamic Therapy",
      "Red Light PDT"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Therapy using oral or topical photosensitizing agents with subsequent exposure to light.",
    "arabic_definition": "العلاج الضوئي الديناميكي هو نوع من العلاج بالضوء يتضمن الضوء ومادة كيميائية محسسة للضوء، يُستعمل بالمشاركة مع الأكسجين الجزيئي لانتزاع الموت الخلوي (السمية الضوئية). أثبت العلاج الضوئي الديناميكي قدرته على قتل الخلايا الميكروبية، بما فيها البكتيريا والفطور والفيروسات. (Photochemotherapy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010778.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "contraindications",
    "term_en": "Contraindications",
    "term_ar": "مضاد استطباب",
    "synonyms": [
      "Contraindication",
      "Medical Contraindications",
      "Contraindication, Medical",
      "Contraindications, Medical",
      "Medical Contraindication",
      "Contraindications, Physical Agent",
      "Agent Contraindication, Physical",
      "Agent Contraindications, Physical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition or factor associated with a recipient that makes the use of a drug, procedure, or physical agent improper or inadvisable. Contraindications may be absolute (life threatening) or relative (higher risk of complications in which benefits may outweigh risks).",
    "arabic_definition": "مضاد الاستطباب أو النَّواهي أو ممنوع الاستطباب به (الإنجليزية: Contraindication) هو مصطلح طبي يصف الحالات الطبية التي يُمنع فيها من استخدام علاجٍ أو تشخيصٍ ما. يوصف العلاج أو الدواء في هذه الحالة بأنه ممنوع الاستطباب به، وتوصف الحالة التي يُمنع فيها من استخدام دواءٍ ما بأنه مضادة استطباب لهذا الدواء. (Contraindications)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000075202.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spectrophotometry",
    "term_en": "Spectrophotometry",
    "term_ar": "قياس الضوء الطيفي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The art or process of comparing photometrically the relative intensities of the light in different parts of the spectrum.",
    "arabic_definition": "في الفيزياء، قياس الطيف الضوئي (الإنجليزية: spectrophotometry)، هو دراسة كمية للطيف الكهرومغناطيسي. وهو أكثر تخصصًا من قياس الطيف الكهرومغناطيسي، حيث يتعامل فقط مع الضوء المرئي، وقريب فوق البنفسجي وقريب تحت الأحمر.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013053.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cardiotocography",
    "term_en": "Cardiotocography",
    "term_ar": "مراقبة قلب الجنين",
    "synonyms": [
      "CTG, Antepartum",
      "Antepartum CTG",
      "Electronic Fetal Monitoring",
      "Fetal Monitoring, Electronic",
      "Monitoring, Electronic Fetal",
      "Cardiotocogram",
      "Cardiotocograms",
      "External Cardiotocography"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Monitoring of FETAL HEART frequency before birth in order to assess impending prematurity in relation to the pattern or intensity of antepartum UTERINE CONTRACTION.",
    "arabic_definition": "مراقبة قلب الجنين (الإنجليزية: Cardiotocography) هي وسيلة تقنية لتسجيل ضربات قلب الجنين وتقلصات الرحم خلال الحمل. تُدعَى الآلة التي تُستخدَم لإجراء هذه المراقبة بجهاز مراقبة قلب الجنين، والمعروف أيضًا باسم جهاز مراقبة الجنين الإلكتروني.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015148.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plethysmography",
    "term_en": "Plethysmography",
    "term_ar": "مخطط التحجم",
    "synonyms": [
      "Plethysmographies",
      "Plethysmograph"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recording of change in the size of a part as modified by the circulation in it.",
    "arabic_definition": "مُخطط التحجم يُعد أداة لقياس التغيرات في الحجم داخل العضو أو الجسم كله (عادةً ما ينتج من التقلبات في كمية الدم والهواء). وهذا اللفظ مشتق من اللفظ اليوناني (plethysmos) بمعنى (الزيادة والتوسع والكمال)، ولفظ (graphos) بمعنى (الكتابة). (Plethysmography)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010991.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electromyography",
    "term_en": "Electromyography",
    "term_ar": "تخطيط كهربائية العضل",
    "synonyms": [
      "Electromyographies",
      "Surface Electromyography",
      "Electromyographies, Surface",
      "Electromyography, Surface",
      "Surface Electromyographies",
      "Electromyogram",
      "Electromyograms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recording of the changes in electric potential of muscle by means of surface or needle electrodes.",
    "arabic_definition": "يلتقط تخطيط كهربائية العضل الكمون الكهربائي الذي تنتجه الخلايا العضلية عندما تُفعّل كهربائيًا أو عصبيًا. يمكن تحليل الإشارات المُلتقطة للكشف عن الشذوذات أو مستوى التنشيط أو أمر التوظيف أو لتحليل الميكانيكا الحيوية للحركة عند الإنسان أو الحيوانات. (Electromyography)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004576.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radioimmunoassay",
    "term_en": "Radioimmunoassay",
    "term_ar": "مقايسة مناعية شعاعية",
    "synonyms": [
      "Radioimmunoassays"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Classic quantitative assay for detection of antigen-antibody reactions using a radioactively labeled substance (radioligand) either directly or indirectly to measure the binding of the unlabeled substance to a specific antibody or other receptor system. Non-immunogenic substances (e.g., haptens) can be measured if coupled to larger carrier proteins (e.g., bovine gamma-globulin or human serum albumin) capable of inducing antibody formation.",
    "arabic_definition": "المقايسة المناعية الشعاعية هي تقنية فحص حساسة جداً في المختبر مستخدمة لقياس تراكيز المستضدات (على سبيل المثال، مستويات الهرمون في الدم) عن طريق استخدام أجسام مضادة. على هذا النحو، يمكن النظر إليها على أنها عكس مقايسة الارتباط الإشعاعي التي تقيس مستوى جسم مضاد عن طريق استخدام المستضدات المقابلة. (Radioimmunoassay)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011863.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pharmacovigilance",
    "term_en": "Pharmacovigilance",
    "term_ar": "يقظة دوائية",
    "synonyms": [
      "Pharmacovigilances"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The detection of long and short term side effects of conventional and traditional medicines through research, data mining, monitoring, and evaluation of healthcare information obtained from healthcare providers and patients.",
    "arabic_definition": "اليقظة الدوائية (الإنجليزية: pharmacovigilance) وتدعى اختصارًا PHV، المعروف أيضا باسم سلامة الدواء، هو علم الدواء المتصل بجمع والكشف والتقييم والرصد، والوقاية من الآثار الضارة مع المنتجات الصيدلانية. جذور اشتقاقي لكلمة «الأدوية» هي: pharmakon (اليونانية: أدوية) وvigilare (اللاتينية : الحفاظ على المراقبة).",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060735.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "crystallization",
    "term_en": "Crystallization",
    "term_ar": "تبلور",
    "synonyms": [
      "Polymorphism, Crystallization",
      "Crystallization Polymorphism",
      "Crystallization Polymorphisms",
      "Polymorphisms, Crystallization",
      "Crystalline Polymorphs",
      "Crystalline Polymorph",
      "Polymorph, Crystalline",
      "Polymorphs, Crystalline"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The formation of crystalline substances from solutions or melts. (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "التبلور (أو البَلْوَرَة) عبارة عن عملية تشكيل (طبيعية كانت أم اصطناعية) للبلورات الصلبة من المحلول. تعد عملية التبلور أيضاً من تقنيات الفصل في الأوساط الصلبة-السائلة، حيث تحدث عملية انتقال لجزيئات للمادة من الحالة السائلة إلى الحالة الصلبة. (Crystallization)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003460.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thermogravimetry",
    "term_en": "Thermogravimetry",
    "term_ar": "تحليل وزني حراري",
    "synonyms": [
      "Thermogravimetries",
      "Thermogravimetric analysis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Technique whereby the weight of a sample can be followed over a period of time while its temperature is being changed (usually increased at a constant rate).",
    "arabic_definition": "تحليل وزني حراري (اختصاراً TGA) هي طريقة تحليل حرارية تراقب خلالها تغيرات في الخواص الفيزيائية والكيميائية للمواد وتتم العملية أثناء زيادة درجة الحرارة (مع بقاء معدل زيادة الحرارة ثابتا). أو قد يجرى التفاعل ويراقب زمن التفاعل (مع بقاء درجة الحرارة ثابتة و/أو فقد للوزن ثابتا). (Thermogravimetry)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013818.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polysomnography",
    "term_en": "Polysomnography",
    "term_ar": "تخطيط النوم",
    "synonyms": [
      "Polysomnographies",
      "Monitoring, Sleep",
      "Sleep Monitoring",
      "Somnography",
      "Somnographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Simultaneous and continuous monitoring of several parameters during sleep to study normal and abnormal sleep. The study includes monitoring of brain waves, to assess sleep stages, and other physiological variables such as breathing, eye movements, and blood oxygen levels which exhibit a disrupted pattern with sleep disturbances.",
    "arabic_definition": "تخطيط النوم (PSG) أو اختبار النوم المتعدد (الإنجليزية: polysomnography) هو تسجيل التَّغيُّرات الفيزيائية والحيويّة عند المريض أثناء النوم لتشخيص أمراض النوم. يسجل تخطيط النوم الموجات الدماغية، نسبة الأوكسجين في الدم، ومعدل ضربات القلب والتنفس وحركة العينين والرئتين أثناء النوم.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017286.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plateletpheresis",
    "term_en": "Plateletpheresis",
    "term_ar": "فصادة الصفيحات",
    "synonyms": [
      "Plateletphereses",
      "Blood Plateletpheresis",
      "Blood Plateletphereses",
      "Plateletphereses, Blood",
      "Plateletpheresis, Blood",
      "Thrombocytapheresis",
      "Thrombocytaphereses",
      "Thrombocytopheresis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The preparation of platelet concentrates with the return of red cells and platelet-poor plasma to the donor.",
    "arabic_definition": "فصادة الصفيحات (الإنجليزية: Plateletpheresis أو thrombocytapheresis أو thrombapheresis) هي عملية جمع الصفيحات الدموية التي تعد أحد مكونات الدم وتساهم في عملية وقف نزف الدم. تتم فصادة الصفيحات بواسطة جهاز يستخدم للتبرع بالدم ويقوم بفصل الصفيحات ثم يعيد الجزء المتبقي من الدم إلى الشخص المتبرع.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010983.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electroretinography",
    "term_en": "Electroretinography",
    "term_ar": "تخطيط كهربية الشبكية",
    "synonyms": [
      "Electroretinographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recording of electric potentials in the retina after stimulation by light.",
    "arabic_definition": "يقيس تخطيط كهربيَّة الشَّبكية (اختصارًا ERG) الاستجابات الكهربائية لأنواع مختلفة من الخلايا في شبكية العين، بما في ذلك المستقبلات الضوئية (العصي والمخاريط) وخلايا الشبكية الداخلية (الخلايا ثنائية القطب وخلايا أماكرين) والخلايا العقدية. تتوضع الأقطاب الكهربائية على سطح القرنية (خيط من ألياف النايلون/الفضة DTL أو(ERG Jet) أو على الجلد تحت العين (شرائط الاستشعار) لقياس استجابات الشبكية. (Electroretinography)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004596.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chemoprevention",
    "term_en": "Chemoprevention",
    "term_ar": "وقاية كيميائية",
    "synonyms": [
      "Chemoprophylaxis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The use of chemical compounds to prevent the development of a specific disease.",
    "arabic_definition": "الوِقايَةٌ الكِيمْيائِيَّة (الإنجليزية: Chemoprevention أو Chemoprophylaxis) تشير إلى تناول دواء بغرض الوقاية من مرض أو عدوى، فعلى سبيل المثال يمكن لمرضى اضطرابات الجهاز المناعيّ تناول صاد حيوي لمنع العداوى الجرثوميَّة (تحديدًا العدوى الانتهازية). يمكن أيضا إعطاء الصاد الحيوي للأناس الأصحاء للحد مكن انتشار وباء أو لمن يعانون من عداوى متكررة (مثل عداوى الجهاز البولي) لمنع المعاودة، ويمكن أيضا أن تشير لإعطاء الهيبارين لمنع الخُثار الوريديّ العميق في مرضى المستشفيات.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018890.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radioimmunotherapy",
    "term_en": "Radioimmunotherapy",
    "term_ar": "علاج مناعي مشع",
    "synonyms": [
      "Radioimmunotherapies",
      "Immunoradiotherapy",
      "Immunoradiotherapies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiotherapy where cytotoxic radionuclides are linked to antibodies in order to deliver toxins directly to tumor targets. Therapy with targeted radiation rather than antibody-targeted toxins (IMMUNOTOXINS) has the advantage that adjacent tumor cells, which lack the appropriate antigenic determinants, can be destroyed by radiation cross-fire. Radioimmunotherapy is sometimes called targeted radiotherapy, but this latter term can also refer to radionuclides linked to non-immune molecules (see RADIOTHERAPY).",
    "arabic_definition": "العلاج المناعي المشع (الإنجليزية: Radioimmunotherapy) هو نوع من الأدوية حيث يستخدم جسمًا مضادًا يحمل نويدات مشعة لتوصيل الإشعاع السام للخلايا إلى الخلية المستهدفة. وهو شكل من أشكال العلاج الإشعاعي غير مغلق المصدر.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016499.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microinjections",
    "term_en": "Microinjections",
    "term_ar": "حقن مكروي",
    "synonyms": [
      "Microinjection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The injection of very small amounts of fluid, often with the aid of a microscope and microsyringes.",
    "arabic_definition": "الحقن المِكروي يشير إلى عملية استخدام جهاز الميكروببتيد الزجاجي لإدخال مواد في المستوى المجهري أو الماكروسكوبي إلى خلية حية. وهي عملية ميكانيكية بسيطة يتم فيها إدخال إبرة، يتراوح قطرها بين 0.5 إلى 5 ميكرومتر، إلى غشاء الخلية و/أو الغلاف النووي. (Microinjections)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008845.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dermatoglyphics",
    "term_en": "Dermatoglyphics",
    "term_ar": "دراسة مرتسم الكف",
    "synonyms": [
      "Fingerprints",
      "Fingerprint",
      "Plantar Prints",
      "Plantar Print",
      "Print, Plantar",
      "Prints, Plantar"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The study of the patterns of ridges of the skin of the fingers, palms, toes, and soles.",
    "arabic_definition": "دراسة مرتسم الكف (من اليونانية القديمة \"ديرما\"، والتي تعني \"الجلد\"، والحَز، والتي تعني \"نقش\") هو دراسة علمية لبصمات الأصابع، والخطوط، والتلال، والأشكال على الأيدي، والتي تختلف عن علم التنجيم الزائف والذي يشبهه سطحياً وهو علم الكفّ. يشير علم الجلد أيضا إلى صنع نتوءات تحدث بشكل طبيعي على أجزاء معينة من الجسم، وهي على وجه الخصوص راحة اليد والأصابع والأخمصين وأصابع القدم. (Dermatoglyphics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003878.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photobioreactors",
    "term_en": "Photobioreactors",
    "term_ar": "مفاعل حيوي ضوئي",
    "synonyms": [
      "Photobioreactor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Devices for generating biological products that use light as the energy source. They are used for controlled BIOMASS production such as growing cyanobacteria, mosses, or algae.",
    "arabic_definition": "المفاعل الحيوي الضوئي (أحيانًا يتم اختصاره إلى بي بي آر (PBR)) هو المفاعل الحيوي الذي يشتمل على بعض الأنواع من مصادر الضوء لتوفير مدخلات الطاقة الضوئية للمفاعل. بالإضافة إلى ذلك، يمكن رؤية بركة مفتوحة كمفاعل حيوي ضوئي، ولكن في الغالب يشير مصطلح المفاعل الحيوي الضوئي فقط إلى الأنظمة المغلقة، والأنظمة المغلقة على البيئة هي التي ليس لها تبادل مباشر للغازات والملوثات مع البيئة. (Photobioreactors)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058433.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microelectrodes",
    "term_en": "Microelectrodes",
    "term_ar": "مسرى مكروي",
    "synonyms": [
      "Microelectrode",
      "Electrodes, Miniaturized",
      "Electrode, Miniaturized",
      "Miniaturized Electrode",
      "Miniaturized Electrodes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Electrodes with an extremely small tip, used in a voltage clamp or other apparatus to stimulate or record bioelectric potentials of single cells intracellularly or extracellularly. (Dorland, 28th ed)",
    "arabic_definition": "المسرى المكروي هو مسرى (إلكترود) صغير جدا يُستخدم في الفيزيولوجيا الكهربائية لتسجيل الإشارات العصبية أو للتنبيه الكهربائي للأنسجة العصبية، ابتكره غيلبرت لينغ ورالف جيرارد واستخدماه أول مرة سنة 1949 في تسجيل الجهد الغشائي في الخلايا العضلية للضفدع. تُصنع هذه المساري الميكروية عن طريق تقنيات التصنيع الدقيق. (Microelectrodes)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008839.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mediastinoscopes",
    "term_en": "Mediastinoscopes",
    "term_ar": "منظار المنصف",
    "synonyms": [
      "Mediastinoscope"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endoscopes for examining tissue of the anterior superior mediastinum.",
    "arabic_definition": "منظار المنصف (الإنجليزية: Mediastinoscopy) هو أداة رفيعة تشبه الأنبوب تستخدم لفحص الأنسجة والعقد اللمفاوية في المنطقة بين الرئتين (المنصف) في عملية تسمى تنظير المنصف. هذه الأنسجة تشمل القلب وأوعيته الدموية الكبيرة والقصبة الهوائية والمريء والقصبة الهوائية.منظار المنصف يحتوي على ضوء وعدسة للمشاهدة وقد تحتوي على أداة لإزالة الأنسجة. (Mediastinoscopes)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020707.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hospitalization",
    "term_en": "Hospitalization",
    "term_ar": "مستشفى",
    "synonyms": [
      "Hospitalizations",
      "Hospital"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The confinement of a patient in a hospital.",
    "arabic_definition": "المستشفى (الجمع: مُسْتَشْفَيَات) هو مؤسسة للرعاية الصحية توفر فيها العلاج للمرضى طاقم طبي وتمريض متخصص ومعدات طبية. وأفضل أنواع المستشفيات المعروفة هو المستشفى العام، الذي يوجد به عادة قسم للطوارئ لمعالجة المشاكل الصحية العاجلة التي تتراوح بين ضحايا الحريق والحوادث إلى النوبة القلبية. (Hospitalization)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006760.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phonocardiography",
    "term_en": "Phonocardiography",
    "term_ar": "مخطط أصوات القلب",
    "synonyms": [
      "Phonocardiographies",
      "Phonocardiogram"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Graphic registration of the heart sounds picked up as vibrations and transformed by a piezoelectric crystal microphone into a varying electrical output according to the stresses imposed by the sound waves. The electrical output is amplified by a stethograph amplifier and recorded by a device incorporated into the electrocardiograph or by a multichannel recording machine.",
    "arabic_definition": "مخطط أصوات القلب (الإنجليزية: Phonocardiogram) عملية تهدف لتسجيل الدقة العالية للأصوات والأصوات الغامضة التي يصنعها القلب مثل لغط القلب ويصعب اكتشافها بسماعة الطبيب العادية ويتم ذلك بمساعدة جهاز «مخطط أصوات القلب» وينتج لنا هذا الجهاز تخطيط صوتي كامل لكل أصوات القلب خلال دورة قلبية كاملة. (Phonocardiography)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010701.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chemoradiotherapy",
    "term_en": "Chemoradiotherapy",
    "term_ar": "معالجة كيميائية شعاعية",
    "synonyms": [
      "Chemoradiotherapies",
      "Radiochemotherapy",
      "Radiochemotherapies",
      "Concurrent Chemoradiotherapy",
      "Chemoradiotherapies, Concurrent",
      "Chemoradiotherapy, Concurrent",
      "Concurrent Chemoradiotherapies",
      "Concomitant Chemoradiotherapy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Treatment that combines chemotherapy with radiotherapy.",
    "arabic_definition": "المعالجة الكيميائية الشعاعية (الإنجليزية: Chemoradiotherapy) هي مزيج من العلاج الكيميائي والعلاج الإشعاعي لعلاج السرطان. يمكن أن يكون الإشعاع الكيميائي متزامنًا(معًا)، أو متسلسلًا (واحدًا تلو الآخر).",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059248.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electrodiagnosis",
    "term_en": "Electrodiagnosis",
    "term_ar": "طب التشخيص الكهربائي",
    "synonyms": [
      "Electrodiagnoses",
      "Electrodiagnostic medicine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diagnosis of disease states by recording the spontaneous electrical activity of tissues or organs or by the response to stimulation of electrically excitable tissue.",
    "arabic_definition": "التشخيص الكهربي أو التشخيص الكهربائي (EDX) أسلوب تشخيص طبي يجني معلومات حول المرض عبر تسجيل النشاط الكهربائي اللافاعل لمناطق معينة في الجسم (أي الفيزيولوجيا الكهربية الطبيعية) أو عبر حساب الاستجابة لمحفز خارجي (جهد مستحث). الطرق الأكثر استخدامًا في تسجيل النشاط الكهربائي التلقائي هي أشكال متنوعة من اختبارات التشخيص الكهربي (المخططات الكهربائية)، مثل تخطيط كهربائية القلب (إي سي جي)، وتخطيط أمواج الدماغ (إي إي جي)، وتخطيط كهربائية العضل (إس إم جي). (Electrodiagnosis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004568.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polypharmacology",
    "term_en": "Polypharmacology",
    "term_ar": "علم أدوية متعدد",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The design or use of pharmaceutical agents that act on multiple targets or disease pathways.",
    "arabic_definition": "علم الأدوية المتعدد (بالإنجليزية: Polypharmacology) هو تصميم أو استخدام العوامل الصيدلانية التي تعمل على أهداف متعددة أو مسارات مرضية. على الرغم من التقدم العلمي وزيادة الإنفاق العالمي على البحث والتطوير، كثيرًا ما يتم سحب الأدوية من الأسواق.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064798.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "macrobiotic-diet",
    "term_en": "Macrobiotic Diet",
    "term_ar": "ماكروبايوتيك",
    "synonyms": [
      "Diets, Macrobiotic",
      "Macrobiotic Diets"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An approach to nutrition based on whole cereal grains, beans, cooked vegetables and the Chinese YIN-YANG principle. It advocates a diet consisting of organic and locally grown foods, seasonal vegetables, complex carbohydrates, and fewer fats, sugars, and chemically processed foods.",
    "arabic_definition": "استعملت كلمة ماكروبيوتيك في اليونان القديمة بمعنى فن الصحة وطول العمر من خلال العيش بتناغم مع البيئة. أما في العصور الحديثة، فقد استعملها الفيلسوف الياباني جورج أوشاوا بهدف تصوير طريقة الحياة الصحية مظهرا الحيوية التي يشعر بها الشخص الذي يتمتع بصحة جيدة. (Macrobiotic Diet)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015623.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prisoner-dilemma",
    "term_en": "Prisoner Dilemma",
    "term_ar": "معضلة السجينين",
    "synonyms": [
      "Dilemma, Prisoner",
      "Prisoners Dilemma",
      "Dilemma, Prisoners",
      "Prisoner's Dilemma",
      "Dilemma, Prisoner's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A scenario in decision analysis in which two individuals motivated entirely by self-preservation at the expense of the other, end up in a worse state than if they had cooperated with each other in the decision-making process.",
    "arabic_definition": "معضلة السجينَين هي النواة الأساسية لمشكلة التعاون ضمن نظرية الألعاب. تتضمن اللعبة متهمين، لا يملك المحقق أدلةً كافية على أي منهما لإثبات الجرم. (Prisoner Dilemma)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000068956.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "optical-tweezers",
    "term_en": "Optical Tweezers",
    "term_ar": "الملاقط الضوئية",
    "synonyms": [
      "Optical Tweezer",
      "Tweezer, Optical",
      "Tweezers, Optical",
      "Laser Tweezers",
      "Laser Tweezer",
      "Tweezer, Laser",
      "Tweezers, Laser",
      "Optical Trap"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A technique that uses LASERS to trap, image, and manipulate small objects (biomolecules, supramolecular assembles, DENDRIMERS) in three dimensional space. (From Glossary of Biotechnology and Nanobiotechnology Terms, 4th ed.)",
    "arabic_definition": "الملاقط الضوئية (بالإنجليزية: Optical Tweezers)، وتُعرف أيضًا باسم \"فخ القوة التدرجية بأشعة الليزر أحادية الشعاع\"، هي أدوات علمية تستخدم شعاع ليزر مركزًا للغاية لاحتجاز وتحريك الأجسام المجهرية وتحت المجهرية مثل الذرات والجسيمات النانوية والقطيرات بطريقة تشبه الملاقط. وإذا تم احتجاز الجسم في الهواء أو الفراغ دون دعم إضافي، فإن ذلك يُسمى \"الرفع البصري\" (Optical Levitation).",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052898.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cluster-analysis",
    "term_en": "Cluster Analysis",
    "term_ar": "تحليل عنقودي",
    "synonyms": [
      "Analyses, Cluster",
      "Analysis, Cluster",
      "Cluster Analyses",
      "Clustering",
      "Clusterings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A set of statistical methods used to group variables or observations into strongly inter-related subgroups. In epidemiology, it may be used to analyze a closely grouped series of events or cases of disease or other health-related phenomenon with well-defined distribution patterns in relation to time or place or both.",
    "arabic_definition": "التحليل العنقودي أو تحليل المجموعات (الإنجليزية: Cluster analysis) هو نوع من الأساليب الإحصائية التي يمكن تطبيقها على البيانات. يتولى التحليل العنقودي إفراز البيانات الأولية وتجميعها في مجموعات عنقودية (clusters).",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016000.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spatial-analysis",
    "term_en": "Spatial Analysis",
    "term_ar": "تحليل مكاني",
    "synonyms": [
      "Analyses, Spatial",
      "Analysis, Spatial",
      "Spatial Analyses",
      "Spacial Analysis",
      "Analyses, Spacial",
      "Analysis, Spacial",
      "Spacial Analyses",
      "Spatial Autocorrelation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Investigative techniques which measure the topological, geometric, and or geographic properties of the entities studied.",
    "arabic_definition": "التحليل المكاني أو التحليل الفضائي عدة تقنيات جديدة تستعمل طرق تحليل مختلفة تركز على تحليل البيانات الجغرافية. (Spatial Analysis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062206.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exome-sequencing",
    "term_en": "Exome Sequencing",
    "term_ar": "تسلسل إكسوم",
    "synonyms": [
      "Sequencing, Exome",
      "Whole Exome Sequencing",
      "Exome Sequencing, Whole",
      "Sequencing, Whole Exome",
      "Complete Exome Sequencing",
      "Complete Exome Sequencings",
      "Exome Sequencing, Complete",
      "Exome Sequencings, Complete"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Techniques used to determine the sequences of EXONS of an organism or individual.",
    "arabic_definition": "تسلسل إكسوم، يُعرف أيضًا بتسلسل إكسوم الكامل. تقنية هندسة وراثية تستخدم للتحكم بتسلسل جميع مناطق تشفير البروتين للجينات في الجينوم المعروف باسم الإكسوم، وتتكون هذه التقنية من خطوتين. (Exome Sequencing)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000073359.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fourier-analysis",
    "term_en": "Fourier Analysis",
    "term_ar": "تحليل فورييه",
    "synonyms": [
      "Analysis, Cyclic",
      "Analyses, Cyclic",
      "Cyclic Analyses",
      "Analysis, Fourier",
      "Cyclic Analysis",
      "Fourier Series",
      "Series, Fourier",
      "Fourier Transform"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Analysis based on the mathematical function first formulated by Jean-Baptiste-Joseph Fourier in 1807. The function, known as the Fourier transform, describes the sinusoidal pattern of any fluctuating pattern in the physical world in terms of its amplitude and its phase. It has broad applications in biomedicine, e.g., analysis of the x-ray crystallography data pivotal in identifying the double helical nature of DNA and in analysis of other molecules, including viruses, and the modified back-projection algorithm universally used in computerized tomography imaging, etc. (From Segen, The Dictionary of Modern Medicine, 1992)",
    "arabic_definition": "في الرياضيات، تحليل فورييه هو دراسة الطريقة التي قد تتمثل بها الدوال الرياضية العامة أو يمكن تقريبها من خلال حاصل جمع دوال مثلثية أبسط. ظهر تحليل فورييه نتيجة دراسة متسلسلة فورييه، وسُميَّ على اسم العالم جون باتيست جوزيف فورييه، والذي أظهر أن تمثيل دالة على أنها حاصل جمع دوال مثلثية يبسط بقدر كبير دراسة انتشار الحرارة وتراكب الموجات. (Fourier Analysis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005583.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "infant-mortality",
    "term_en": "Infant Mortality",
    "term_ar": "معدل وفيات الرضع",
    "synonyms": [
      "Infant Mortalities",
      "Mortalities, Infant",
      "Mortality, Infant",
      "Neonatal Mortality",
      "Mortalities, Neonatal",
      "Mortality, Neonatal",
      "Neonatal Mortalities",
      "Postneonatal Mortality"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Postnatal deaths from BIRTH to 365 days after birth in a given population. Postneonatal mortality represents deaths between 28 days and 365 days after birth (as defined by National Center for Health Statistics). Neonatal mortality represents deaths from birth to 27 days after birth.",
    "arabic_definition": "وفيات الرضع هي وفاة الأطفال الصغار تحت سن السنة الواحدة. ويقاس عدد الوفيات هذا بمعدل وفيات الرضع والذي يعرف بعدد وفيات الأطفال تحت سن السنة لكل 1000 حالة حية. (Infant Mortality)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007226.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "artificial-limbs",
    "term_en": "Artificial Limbs",
    "term_ar": "بدلة",
    "synonyms": [
      "Extremities, Artificial",
      "Artificial Extremities",
      "Artificial Extremity",
      "Extremity, Artificial",
      "Limb Prosthesis",
      "Limb Prostheses",
      "Prostheses, Limb",
      "Prosthesis, Limb"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Prosthetic replacements for arms, legs, and parts thereof.",
    "arabic_definition": "الجراحة الترقيعية أو الطرف الصناعي أو البِدْلَة أو البَدِيل أو البَدَل (الإنجليزية: Prosthesis) في الطب جهاز من صنع الإنسان مزروع أو مدمج في الإنسان ليحل محل جهاز طبيعي فُقد نتيجة حادث أو عيب خلقي بغرض استعادة وظيفة محددة أو مجموعة من المهام قد تعود المريض إلى الحياة الطبيعية قدر الإمكان. الوظيفة المستبدلة من الضروري أن تكون متعلقة بدعم الحياة، وقد يكون دائمي الوجود أو مؤقت مثل المرشحات أو وحدات المعالجة الكيميائية كآلة غسيل الكلى. (Artificial Limbs)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001186.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "artificial-heart",
    "term_en": "Artificial Heart",
    "term_ar": "قلب صناعي",
    "synonyms": [
      "Artificial Hearts",
      "Hearts, Artificial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pumping mechanism that duplicates the output, rate, and blood pressure of the natural heart. It may replace the function of the entire heart or a portion of it, and may be an intracorporeal, extracorporeal, or paracorporeal heart. (Dorland, 28th ed)",
    "arabic_definition": "القلب الصناعي هو جهاز يحل مكان القلب. والقلوب الصناعية عادة تستخدم كوسيلة مؤقتة لكسب الوقت أثناء زراعة القلب، أو كوسيلة دائمة لتحل مكان القلب في الحالات التي يستعصي زراعة القلب فيها، بالإضافة لعدة استخدامات أخرى. (Artificial Heart)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006354.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "body-temperature",
    "term_en": "Body Temperature",
    "term_ar": "تنظيم حراري",
    "synonyms": [
      "Body Temperatures",
      "Temperature, Body",
      "Temperatures, Body",
      "Organ Temperature",
      "Organ Temperatures",
      "Temperature, Organ",
      "Temperatures, Organ",
      "Thermoregulation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The measure of the level of heat of a human or animal.",
    "arabic_definition": "التنظيم الحراري وهي قدرة الكائن الحي على الحفاظ على درجة حرارة جسمه ضمن حدود معينة، حتى عندما تكون درجة حرارة البيئة المحيطة مختلفة. وهذه العملية هي أحد جوانب الاستتباب: وهي حالة ديناميكية من الاستقرار بين بيئة الحيوان الداخلية وبيئته الخارجية (يطلق على هذه العمليات في علم الحيوان الفيزيولوجيا البيئية أو الإيكولوجيا الفيزيولوجية). (Body Temperature)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001831.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "language-therapy",
    "term_en": "Language Therapy",
    "term_ar": "علم أمراض النطق واللغة",
    "synonyms": [
      "Therapy, Language",
      "Language Therapies",
      "Therapies, Language",
      "Language Training",
      "Language Trainings",
      "Training, Language",
      "Trainings, Language",
      "Speech–language pathology"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rehabilitation of persons with language disorders or training of children with language development disorders.",
    "arabic_definition": "علم أمراض التخاطب واللغة واضطرابات البلع (الإنجليزية: speech-language pathology and swallowing disorders) هو تخصص صحي تحت مظلة التأهيل الصحي. يُعَرِّف نموذج وطبيعة عمل أجهزة الكلام واللغة والبلع التي تشمل الدماغ والحنجرة وجهاز التنفس والفم والبلعوم إلى المريء، واضطراباتها. (Language Therapy)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007808.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "isoelectric-point",
    "term_en": "Isoelectric Point",
    "term_ar": "نقطة تساوي الكهربائية",
    "synonyms": [
      "Isoelectric Points",
      "Point, Isoelectric",
      "Points, Isoelectric"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The pH in solutions of proteins and related compounds at which the dipolar ions are at a maximum.",
    "arabic_definition": "نُقطة تَساوي الكَهرُبائية أو نُقطه تساوي الكَهربيه (الإنجليزية: Isoelectric point) وَيُرمز له اختصاراً (PI أو IEP) وهيَ درجة الحموضة في أي جزيء معين أو سطح معين أو جزيئة (مثل بروتينات) يحمل صافي الشحنة الكهربائية تساوي صفراً.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007526.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "northern-blotting",
    "term_en": "Northern Blotting",
    "term_ar": "لطخة نورثرن",
    "synonyms": [
      "Blottings, Northern",
      "Northern Blottings",
      "Blot, Northern",
      "Blots, Northern",
      "Northern Blots",
      "Northern Blot"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Detection of RNA that has been electrophoretically separated and immobilized by blotting on nitrocellulose or other type of paper or nylon membrane followed by hybridization with labeled NUCLEIC ACID PROBES.",
    "arabic_definition": "لطخة نورثرن أو لطخة الرنا (الإنجليزية: Northern blot) هي تقنية تُستخدم في علم الأحياء الجزيئي لدراسة التعبير الجيني عبر تحديد الرنا (أو الرنا الرسول المستخلص) في عينة. تُمكِّن تقنية لطخة نورثرن من ملاحظة التنظيم الخلوي للبنى والوظائف بتحديد معدل التعبير الجيني الدقيق أثناء التمايز أو التخلق الحيوي، وكذلك أثناء الاضطرابات والأمراض. (Northern Blotting)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015152.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "southern-blotting",
    "term_en": "Southern Blotting",
    "term_ar": "لطخة ساوثرن",
    "synonyms": [
      "Blot, Southern",
      "Southern Blot"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A method (first developed by E.M. Southern) for detection of DNA that has been electrophoretically separated and immobilized by blotting on nitrocellulose or other type of paper or nylon membrane followed by hybridization with labeled NUCLEIC ACID PROBES.",
    "arabic_definition": "لطخة ساوثرن أو لطخة ساوثيرن (الإنجليزية: Southern blot) هي طريقة تستخدم في البيولوجيا الجزيئية للكشف عن حمض نووي في عينة حمض نووي معينة. وصمه ساذرن تدمج بين عملية نقل جزيئات الحمض النووي المفصول كهربائيا إلى غشاء ويتم الكشف عن هذه الاجزاء من خلالقطعة من الحمض النووي المهجنة (probe). (Southern Blotting)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015139.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blood-transfusion",
    "term_en": "Blood Transfusion",
    "term_ar": "نقل الدم",
    "synonyms": [
      "Blood Transfusions",
      "Transfusion, Blood",
      "Transfusions, Blood"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The introduction of whole blood or blood component directly into the blood stream. (Dorland, 27th ed)",
    "arabic_definition": "نقل الدم أو الصفق أو الإصفاق هي عملية نقل الدم أو مواد أخرى مشتقة من الدم من شخص إلى الدورة الدموية إلى شخص آخر، ويمكن أن ينقذ نقل الدم الحياة في بعض الحالات، مثل فقدان كمية كبيرة من الدم بسبب صدمة، أو يمكن استخدامه لتحل محل الدم المفقود أثناء الجراحة. ويمكن أن يستخدم نقل الدم أيضا لعلاج فقر الدم الحاد أو نقص الصفيحات الدموية الناجمة عن أمراض الدم. (Blood Transfusion)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001803.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "artificial-organs",
    "term_en": "Artificial Organs",
    "term_ar": "عضو صناعي",
    "synonyms": [
      "Artificial Organ",
      "Organ, Artificial",
      "Organs, Artificial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Devices intended to replace non-functioning organs. They may be temporary or permanent. Since they are intended always to function as the natural organs they are replacing, they should be differentiated from PROSTHESES AND IMPLANTS and specific types of prostheses which, though also replacements for body parts, are frequently cosmetic (EYE, ARTIFICIAL) as well as functional (ARTIFICIAL LIMBS).",
    "arabic_definition": "العضو الصناعي جهاز يصنعه الإنسان وتتم زراعته أو دمجه في البشر لكي يحل محل عضو طبيعي، بغرض استعادة وظيفة أو مجموعة من الوظائف الخاصة كي يعود المريض إلى الحياة الطبيعية قدر الإمكان. ولا يجب أن تتعلق الوظيفة التي يتم استبدالها بدعم الحياة، إلا أنها غالبًا ما تكون كذلك. (Artificial Organs)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001187.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mass-spectrometry",
    "term_en": "Mass Spectrometry",
    "term_ar": "مطيافية الكتلة",
    "synonyms": [
      "Spectrometry, Mass",
      "Mass Spectroscopy",
      "Spectroscopy, Mass",
      "Analysis, Mass Spectrum",
      "Analyses, Mass Spectrum",
      "Mass Spectrum Analyses",
      "Spectrum Analyses, Mass",
      "Mass Spectrum Analysis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An analytical method used in determining the identity of a chemical based on its mass using mass analyzers/mass spectrometers.",
    "arabic_definition": "مطياف الكتلة (الإنجليزية: Mass spectrometry) هو تقنية تحليلية لتحديد العناصر المكونة لمادة أو جزيء ما. ويستخدم أيضا لتوضيح البنى الكيميائية للجزيئات، مثل الببتيدات والمركبات الكيميائية الأخرى.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013058.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "valsalva-maneuver",
    "term_en": "Valsalva Maneuver",
    "term_ar": "مناورة فالسالفا",
    "synonyms": [
      "Maneuvers, Valsalva",
      "Maneuver, Valsalva",
      "Valsalva Maneuvers",
      "Valsalva's Maneuver",
      "Maneuver, Valsalva's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Forced expiratory effort against a closed GLOTTIS.",
    "arabic_definition": "مناورة فالسالفا (الإنجليزية: Valsalva maneuver) هي عملية محاولة الزفير عند إغلاق المجرى التنفسي عن طريق إغلاق الفم والضغط على الأنف لإغلاقه ومحاولة إخراج الهواء كما في حالة نفخ البالون. تُستخدم مناورة فالسالفا إما في الفحص الطبي لاختبار وظيفة القلب والتحكم العصبي اللاإرادي في القلب، أو لمعادلة الضغط الخارجي الواقع على الأذنين والجيوب الأنفية عندما يزداد الضغط المحيط كما في الغوص والعلاج بالأكسجين تحت الضغط العالي، أو السفر الجوي.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014636.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spectrum-analysis",
    "term_en": "Spectrum Analysis",
    "term_ar": "تحليل طيفي",
    "synonyms": [
      "Analysis, Spectrum",
      "Spectroscopy",
      "Spectrometry",
      "Spectral analysis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The measurement of the amplitude of the components of a complex waveform throughout the frequency range of the waveform. (McGraw-Hill Dictionary of Scientific and Technical Terms, 6th ed)",
    "arabic_definition": "التحليل الطيفي أو تحليل الطيف هو تحليل للضوء المنبعث أو المنعكس عن أية مادة بواسطة جهاز خاص يطلق عليه اسم المطياف. ولكل مادة طيفها المميز الذي لايطابق أية مادة أخرى. (Spectrum Analysis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013057.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "survival-analysis",
    "term_en": "Survival Analysis",
    "term_ar": "تحليل البقاء",
    "synonyms": [
      "Analysis, Survival",
      "Analyses, Survival",
      "Survival Analyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of statistical procedures for estimating the survival function (function of time, starting with a population 100% well at a given time and providing the percentage of the population still well at later times). The survival analysis is then used for making inferences about the effects of treatments, prognostic factors, exposures, and other covariates on the function.",
    "arabic_definition": "تحليل البقاء هو فرع من الإحصائيات لتحليل المدة الزمنية المتوقعة حتى حدوث حدث أو أكثر، مثل الموت في الكائنات الحية والفشل في الأنظمة الميكانيكية. يسمى هذا الموضوع نظرية الموثوقية أو تحليل الموثوقية في الهندسة، وتحليل المدة أو نمذجة المدة في الاقتصاد، وتحليل تاريخ الأحداث في علم الاجتماع. (Survival Analysis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016019.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chelation-therapy",
    "term_en": "Chelation Therapy",
    "term_ar": "علاج بالاستخلاب",
    "synonyms": [
      "Therapy, Chelation",
      "Chelation Therapies",
      "Therapies, Chelation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Therapy of heavy metal poisoning using agents which sequester the metal from organs or tissues and bind it firmly within the ring structure of a new compound which can be eliminated from the body.",
    "arabic_definition": "العلاج بالاستخلاب (الإنجليزية: Chelation therapy) عبارة عن استخدام عوامل استخلاب من أجل إزالة المعادن الثقيلة من الجسم، وتوصي معايير الرعاية في الولايات المتحدة باستخدام حمض دايمركابتوسكسينك (دمسا DMSA) وذلك في معظم الأشكال المُعتادة من التسمم بالمعادن الثقيلة – تتضمن التسمم بالرصاص، الزرنيخ أو الزئبق. أمَّا بعض عوامل الاستخلاب الأخرى مثل حمض 3،2-ثنائي مركبتو-1-بروبان السلفونيك (DMPS) وحمض ألفاليبويك (ALA)، والتي اُستخدمت في الطب الشعبي والطب البديل.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015913.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "home-hemodialysis",
    "term_en": "Home Hemodialysis",
    "term_ar": "غسيل الكلى المنزلي",
    "synonyms": [
      "Hemodialyses, Home",
      "Home Hemodialyses",
      "Renal Dialysis, Home",
      "Dialyses, Home Renal",
      "Dialysis, Home Renal",
      "Home Renal Dialyses",
      "Home Renal Dialysis",
      "Renal Dialyses, Home"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Long-term maintenance hemodialysis in the home.",
    "arabic_definition": "غسيل الكلى المنزلي (اختصارًا HHD) هو توفير غسيل الكلى لتنقية دم الشخص الذي لا تعمل كليته بشكل طبيعي، في منزله. تتمثل إحدى الميزات في عملية غسيل الكلى المنزلي في أنه يمكن القيام بها بشكل متكرر وببطء، ما يقلل من الشعور الذي يوصف بالمغسول، والأعراض الأخرى الناتجة عن الترشيح الفائق السريع، ويمكن غالبًا القيام به في الليل، أثناء نوم الشخص. (Home Hemodialysis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006437.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enteral-nutrition",
    "term_en": "Enteral Nutrition",
    "term_ar": "إعطاء معوي",
    "synonyms": [
      "Nutrition, Enteral",
      "Tube Feeding",
      "Feeding, Tube",
      "Enteral Feeding",
      "Feeding, Enteral",
      "Gastric Feeding Tubes",
      "Feeding Tube, Gastric",
      "Feeding Tubes, Gastric"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Nutritional support given via the alimentary canal or any route connected to the gastrointestinal system (i.e., the enteral route). This includes oral feeding, sip feeding, and tube feeding using nasogastric, gastrostomy, and jejunostomy tubes.",
    "arabic_definition": "إعطاء الأدوية المِعَوي في الطب العام، هو إعطاء المغذيات أو الأدوية المِعَوي وهو إطعام أو إعطاء الأدوية بواسطة عملية الهضم في القناة الهضمية، مثل القناة الهضمية للانسان. يتناقض مع إعطاء المغذيات أو الأدوية بواسطة الحقن، والتي تحدث من خلال مسارات خارج القناة الهضمية، مثل الحقن الوريدي. (Enteral Nutrition)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004750.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "x-ray-diffraction",
    "term_en": "X-Ray Diffraction",
    "term_ar": "حيود الأشعة السينية",
    "synonyms": [
      "Diffractions, X-Ray",
      "Diffraction, X-Ray",
      "X-Ray Diffractions",
      "Xray Diffraction",
      "Diffractions, Xray",
      "Diffraction, Xray",
      "Xray Diffractions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The scattering of x-rays by matter, especially crystals, with accompanying variation in intensity due to interference effects. Analysis of the crystal structure of materials is performed by passing x-rays through them and registering the diffraction image of the rays (CRYSTALLOGRAPHY, X-RAY). (From McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "تقنيات حيود الأشعة السينية هي عائلة من التقنيات التحليلية اللاتلافية التي تعطي معلومات حول البنية البلورية، والتركيب الكيميائي، والخواص الفيزيائية للمواد والطبقات الرقيقة للمواد البلورية. تعتمد هذه التقنيات على مراقبة تبعثر شدة حزمة من الأشعة السينية الساقطة على العينة كتابع لزاوية السقوط والتبعثر، والاستقطاب، وطول الموجة أو القدرة. (X-Ray Diffraction)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014961.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cellular-automata",
    "term_en": "Cellular Automata",
    "term_ar": "مصفوفة خلايا ذاتية التشغيل",
    "synonyms": [
      "Automata, Cellular",
      "Cellular Automation Model",
      "Cellular Automation Models",
      "Model, Cellular Automation",
      "Models, Cellular Automation",
      "Cellular Automaton",
      "Automaton, Cellular",
      "Cellular Automata Model"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Space-oriented dynamic modeling ALGORITHMS acting in an array of cells, whose temporal states evolve based on the rules (algorithms) of the automata. They are used to model complex dynamic systems for study and analysis in a variety of scientific fields.",
    "arabic_definition": "الاتومات الخلوي (الإنجليزية: Cellular Automaton) هي تعبير (رياضي - برمجي) يدل على مصفوفة من الخلايا يمكن أن تأخذ عدد منته من الحالات حيث كل حالة مستقبلية للخلية تتعلق بحالتها الحاضرة وبحالة الخلايا المجاورة لها. إن التحول من حالة إلى أخرى يحكم بقواعد معرفة مسبقًا. (Cellular Automata)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000089682.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "circular-dichroism",
    "term_en": "Circular Dichroism",
    "term_ar": "تلوانية دائرية",
    "synonyms": [
      "Dichroism, Circular",
      "Circular Dichroism, Vibrational",
      "Vibrational Circular Dichroism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A change from planar to elliptic polarization when an initially plane-polarized light wave traverses an optically active medium. (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "'التلوانية الدائرية (الإنجليزية: Circular dichroism) اختصارًا CD مُصطلح يشير إلى الفرق في امتصاص الضوء اليسار واليمين الاستقطاب. اكتشف جان باتيست بيو Jean-Baptiste Biot هذه الظاهرة مع فريسنل أوغستين، وإيميه كوتن في النصف الأول من القرن 19th.",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002942.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heimlich-maneuver",
    "term_en": "Heimlich Maneuver",
    "term_ar": "ضغطات البطن",
    "synonyms": [
      "Maneuver, Heimlich",
      "Abdominal Thrusts",
      "Abdominal Thrust"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An emergency treatment commonly used to clear food and other foreign objects causing AIRWAY OBSTRUCTION.",
    "arabic_definition": "ضغطات البطن أو مناورة هيمليك أو هيمليخ (النطق الألماني: ) هو إجراء في الإسعاف الأولي يستخدم لعلاج انسداد مجرى الهواء العلوي (أو الشرقة) بواسطة الأجسام الغريبة. ومصطلح مناورة هيمليخ على اسم الدكتور هنري هيمليخ، الذي وصف الإجراء لأول مرة في عام 1974. (Heimlich Maneuver)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059746.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "birth-certificates",
    "term_en": "Birth Certificates",
    "term_ar": "شهادة ميلاد",
    "synonyms": [
      "Birth Certificate",
      "Certificate, Birth",
      "Certificates, Birth",
      "Birth Records",
      "Birth Record",
      "Record, Birth",
      "Records, Birth"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Official certifications by a physician recording the individual's birth date, place of birth, parentage and other required identifying data which are filed with the local registrar of vital statistics.",
    "arabic_definition": "شهادة الميلاد، وهي شهادة يتم إصدارها من قبل الدولة للفرد ويوجد فيها معلومات عن تاريخ وساعة الميلاد واسم المولود ولقبه واسم الأم والأب وجنس المولود ومكان الميلاد. (Birth Certificates)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001719.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autogenic-training",
    "term_en": "Autogenic Training",
    "term_ar": "تدريب التحفيز الذاتي",
    "synonyms": [
      "Training, Autogenic",
      "Progressive Muscle Relaxation",
      "Muscle Relaxation, Progressive",
      "Relaxation, Progressive Muscle",
      "Progressive Relaxation",
      "Relaxation, Progressive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Technique based on muscle relaxation during self-hypnotic exercises. It is used in conjunction with psychotherapy.",
    "arabic_definition": "تدريب التحفيز الذاتي هي أسلوب استرخاء وضعه عالم النفس الألماني يوهانس شولتز (Johannes Heinrich Schultz) ونُشر لأول مرة في عام 1932. ويتضمن هذا الأسلوب ممارسة جلسات يومية تستمر لحوالي 15 دقيقة، وعادة ما تكون في الصباح ووقت الغداء وفي المساء. (Autogenic Training)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001326.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gas-chromatography",
    "term_en": "Gas Chromatography",
    "term_ar": "استشراب غازي",
    "synonyms": [
      "Chromatographies, Gas",
      "Gas Chromatographies",
      "Chromatography, Gas-Liquid",
      "Chromatographies, Gas-Liquid",
      "Gas-Liquid Chromatographies",
      "Gas-Liquid Chromatography"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fractionation of a vaporized sample as a consequence of partition between a mobile gaseous phase and a stationary phase held in a column. Two types are gas-solid chromatography, where the fixed phase is a solid, and gas-liquid, in which the stationary phase is a nonvolatile liquid supported on an inert solid matrix.",
    "arabic_definition": "الاستشراب الغازي أو الكروماتوغرافيا الغازية (GC) أو التفريق اللوني الغازي أحد أنواع الاستشراب وهي وسيلة في الكيمياء التحليلية لفصل وتحليل تركيبة المواد التي لها خاصية التطاير أي يمكن أن تتبخر بدون أن تتحلل، مثل المواد العضوية. والاستشراب الغازي ما هو إلا وسيلة تتيح فصل مواد بعضها عن بعض، ثم يتلو ذلك قياس نسب مكونات تلك المواد المفصولة ومعرفة تركيبتها، وذلك يكون غالبا عبر أي نوع من أنواع الكواشف، المعروفة مثال لذلك كاشف الناقلية الحراري TCD أو كاشف التشرد باللهب FID أو غيرها. (Gas Chromatography)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002849.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "visual-prosthesis",
    "term_en": "Visual Prosthesis",
    "term_ar": "تعويضات بصرية",
    "synonyms": [
      "Prostheses, Visual",
      "Prosthesis, Visual",
      "Visual Prostheses",
      "Retinal Prosthesis",
      "Prostheses, Retinal",
      "Prosthesis, Retinal",
      "Retinal Prostheses",
      "Bionic Eye"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Artificial device such as an externally-worn camera attached to a stimulator on the RETINA, OPTIC NERVE, or VISUAL CORTEX, intended to restore or amplify vision.",
    "arabic_definition": "التعويضات البصرية (الطرف الاصطناعي البصري)، غالبًا ما يشار إليها بالعين الآلية، هي عبارة عن جهاز بصري تجريبي يهدف إلى استعادة الرؤية الوظيفية لمن يعانون من العمى الجزئي أو الكلي. طورت العديد من الأجهزة، وعادةً ما تكون على غرار غرسة القوقعة الصناعية أو أجهزة الأذن الإلكترونية، وهي نوع من التعويضات الاصطناعية المستخدمة منذ منتصف الثمانينيات. (Visual Prosthesis)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057488.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dna-fingerprinting",
    "term_en": "DNA Fingerprinting",
    "term_ar": "بصمة وراثية",
    "synonyms": [
      "DNA Fingerprintings",
      "Fingerprinting, DNA",
      "Fingerprintings, DNA",
      "DNA Profiling",
      "DNA Profilings",
      "Profiling, DNA",
      "DNA Typing",
      "DNA Typings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A technique for identifying individuals of a species that is based on the uniqueness of their DNA sequence. Uniqueness is determined by identifying which combination of allelic variations occur in the individual at a statistically relevant number of different loci. In forensic studies, RESTRICTION FRAGMENT LENGTH POLYMORPHISM of multiple, highly polymorphic VNTR LOCI or MICROSATELLITE REPEAT loci are analyzed. The number of loci used for the profile depends on the ALLELE FREQUENCY in the population.",
    "arabic_definition": "البصمة الوراثية أو الطبعة الوراثية أو بصمة الحمض النووي هي أحد وسائل التعرف على الشخص عن طريق مقارنة مقاطع من الحمض النووي الريبوزي منقوص الأكسجين. وتعتبر البصمة الوراثية أهم تقدم للبشرية ضمن مجال البحث الجنائي من أجل محاربة الجريمة. (DNA Fingerprinting)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016172.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nonlinear-dynamics",
    "term_en": "Nonlinear Dynamics",
    "term_ar": "نظام لاخطي",
    "synonyms": [
      "Dynamics, Nonlinear",
      "Nonlinear Dynamic",
      "Non-linear Dynamics",
      "Dynamics, Non-linear",
      "Non-linear Dynamic",
      "Chaos Theory",
      "Chaos Theories",
      "Theories, Chaos"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The study of systems which respond disproportionately (nonlinearly) to initial conditions or perturbing stimuli. Nonlinear systems may exhibit chaos which is classically characterized as sensitive dependence on initial conditions. Chaotic systems, while distinguished from more ordered periodic systems, are not random. When their behavior over time is appropriately displayed (in phase space), constraints are evident which are described by strange attractors. Phase space representations of chaotic systems, or strange attractors, usually reveal fractal (FRACTALS) self-similarity across time scales. Natural, including biological, systems often display nonlinear dynamics and chaos.",
    "arabic_definition": "في مجال الرياضيات، يعد مصطلح النظام اللاخطي مصطلحًا لا يستوفي شروط مبدأ التراكب، أو مصطلحًا يكون ناتجه غير متناسب مباشرة مع مدخلاته، بينما يحقق النظام الخطي تلك الشروط. وبمعنى آخر، فإن النظام اللاخطي هو أية مشكلة يكون فيها المتغير (المتغيرات) المفترض حلها لا يمكن كتابتها كـتركيبة خطية لمكونات مستقلة. (Nonlinear Dynamics)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017711.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ayurvedic-medicine",
    "term_en": "Ayurvedic Medicine",
    "term_ar": "أيورفيدا",
    "synonyms": [
      "Hindu Medicine",
      "Medicine, Hindu",
      "Siddha Medicine",
      "Medicine, Siddha",
      "Panchakarma",
      "Ayurveda"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The traditional medicine which is based on customs, beliefs, and practices in the subcontinent of India.",
    "arabic_definition": "الأيورَفيدة أو (نقحرة: أيورفيدا) (بالهندية आयुर्वेद، وتعني: «علم الحياة») هي منظومة من تعاليم الطب التقليدي التي نشأت في شبه القارة الهندية وانتشرت إلى مناطق أخرى من العالم كشكل من أشكال الطب البديل. تتكون كلمة «أيُرفيدة» في اللغة السنسكريتية من كلمتي «أيوس» (āyus) وتعني: حياة، و«فيدا» (veda) وتعني: علم أو معرفة. (Ayurvedic Medicine)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008515.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cardiopulmonary-bypass",
    "term_en": "Cardiopulmonary Bypass",
    "term_ar": "مجازة قلبية رئوية",
    "synonyms": [
      "Bypass, Cardiopulmonary",
      "Bypasses, Cardiopulmonary",
      "Cardiopulmonary Bypasses",
      "Heart-Lung Bypass",
      "Bypasses, Heart-Lung",
      "Bypass, Heart-Lung",
      "Heart-Lung Bypasses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diversion of the flow of blood from the entrance of the right atrium directly to the aorta (or femoral artery) via an oxygenator thus bypassing both the heart and lungs.",
    "arabic_definition": "المَجَازَة القَلْبِيَة الرِئَوِيّة هي تقنية تؤدي عمل القلب والرئتين بشكل مؤقت أثناء العملية الجراحية عبر المحافظة على جريان الدم والأكسجين. يُشار غالبًا إلى الجهاز المستخدم في مجازة القلب والرئتين بجهاز القلب والرئتين أو \"المضخة\"، ويُشَغِّل الجهاز عادة اختصاصي إرواء. (Cardiopulmonary Bypass)",
    "specialty": "Surgery",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002315.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "maternal-death",
    "term_en": "Maternal Death",
    "term_ar": "وفيات الأمومة",
    "synonyms": [
      "Death, Maternal",
      "Deaths, Maternal",
      "Maternal Deaths"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The death of the female parent.",
    "arabic_definition": "وفيات الأمومة أو وفاة الأمومة (الإنجليزية: Maternal death) حسب منظمة الصحة العالمية – هي: «وفاة المرأة أثناء الحمل أو بعد نهايته ب 42 يومًا لأي سبب له علاقة بالحمل أو التحكم به، بغض النظر عن مدة ومكان الحمل، وليس لأسباب عرضية.» يوجد مؤشري آداء يمكن إستخدامهما بالتبادل هما: نسبة وفيات الأمهات، ومعدل وفيات الأمهات. بحلول عام 2017 تراجع معدل وفيات الأمهات بنسبة 44% عن عام 1990، اختصارًا \"MMR\"، ولكن ما زالت 850 امراة تموت كل يوم بسبب الحمل.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063130.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "axons",
    "term_en": "Axons",
    "term_ar": "محور عصبي",
    "synonyms": [
      "Axon"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Nerve fibers that are capable of rapidly conducting impulses away from the neuron cell body.",
    "arabic_definition": "المحور العصبي أو محور العَصَب أو محور العَصَبة المِحوار أو ليف العصبون هو امتداد طويل ورفيع للعصبون أو الخلية العصبية عند الفقاريات، ينقل عادةً النبضات الكهربائية التي تُعرف باسم جهود الفعل بعيدًا عن جسم الخلية. تعد وظيفة المحوار نقل المعلومات إلى مختلف العصبونات والعضلات والغدد. (Axons)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001369.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytoplasm",
    "term_en": "Cytoplasm",
    "term_ar": "سيتوبلازم",
    "synonyms": [
      "Cytoplasms",
      "Protoplasm",
      "Protoplasms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The part of a cell that contains the CYTOSOL and small structures excluding the CELL NUCLEUS; MITOCHONDRIA; and large VACUOLES. (Glick, Glossary of Biochemistry and Molecular Biology, 1990)",
    "arabic_definition": "السَّيْتُوبْلَازْمُ أو الْهَيُولَى أو الْحَشْوَةُ أو الْجِبْلَةُ أو السَّايِتُوبْلَازِمُ (الإنجليزية: Cytoplasm) في علم الأحياء هي كلُّ المواد داخل الخلية ويحيط بها الغشاء الخلوي، باستثناء نواة الخلية في خلايا حقيقيات النوى (الإنجليزية: Eukaryotic cells)، أمَّا في الخلايا بدائيات النوى (الإنجليزية: Prokaryotic cells) فلا يوجد نواة مُحدَّدة بغشاء نووي، ولذلك فإنَّ تعريف السيتوبلازم يمتدُّ ليشمل المادة الوراثية للخلية في خلايا بدائيات النوى. تُسمَّى المادة الموجودة داخل النواة والمحتوات ضمن الغشاء النووي بالبلازما النووية (الإنجليزية: Nucleoplasm).",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003593.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytosol",
    "term_en": "Cytosol",
    "term_ar": "عصارة خلوية",
    "synonyms": [
      "Cytosols"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Intracellular fluid from the cytoplasm after removal of ORGANELLES and other insoluble cytoplasmic components.",
    "arabic_definition": "العُصارَة الخَلَوِيَّة أو عُصارة الخَليَّة (الإنجليزية: Cytosol) وتُترجم حرفيًا إلى «السيتوسول»، وتُسمى أيضًا المَصفُوْفَة السيتوبلازمية أو المَطْرِس السيتوبلازمي (الإنجليزية: Cytoplasmic matrix)، هيَ المادة الرئيسية للسيتوبلازم، وهي سائل مُعلق موجود داخل الخلايا، حيثُ تُعلق أو تذوبُ فيه المواد الكيميائية العضوية وغير العضوية والجزيئات والصبغيات والبلورات والعضيات الخَلوية. تشكل العصارة الخلوية مُعظم السائل داخل الخلية، وتقسم إلى أكثر من حيز بواسطة الأغشية، كما هو الحال في المَصفُوفَة الميتوكندرية التي تُقسم الميتوكندريون إلى العديد من الحُجرات.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003600.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chromatin",
    "term_en": "Chromatin",
    "term_ar": "كروماتين",
    "synonyms": [
      "Chromatins"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The material of CHROMOSOMES. It is a complex of DNA; HISTONES; and nonhistone proteins (CHROMOSOMAL PROTEINS, NON-HISTONE) found within the nucleus of a cell.",
    "arabic_definition": "الكروماتين (الإنجليزية: Chromatin) هو مزيج من الحمض النووي والبروتينات التي تشكل محتويات نواة خلية. الوظائف الأساسية للكروماتين هي: حزم الحمض النووي في أصغر حجم لاحتوائه في الخلية ولتعزيز الحمض النووي للسماح للانقسام الخيطي (الانقسام غير المباشر)، ومنع تلف الحمض النووي، والتحكم في التعبير الجيني وتَنَسُّخٌ الحمض النووي.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002843.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dendrites",
    "term_en": "Dendrites",
    "term_ar": "زائدة شجرية",
    "synonyms": [
      "Dendrite"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Extensions of the nerve cell body. They are short and branched and receive stimuli from other NEURONS.",
    "arabic_definition": "التّغصّن أو الزوائد الشجرية أو زائدة عصبونية (بالإنجليزية: Dendrite، وأصلها من الأغريقيّة δένδρον \" وتقرأ دِندرون، بمعنى \"شجرة\") هي تفرّعات في الخلية العصبونية). وهي المسؤولة عن نقل الإشارة الكهركيميائي المتلقاة من عصبونات أخرى إلى جسم الخلية العصبونية. (Dendrites)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003712.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurons",
    "term_en": "Neurons",
    "term_ar": "عصبون",
    "synonyms": [
      "Neuron",
      "Nerve Cells",
      "Cell, Nerve",
      "Cells, Nerve",
      "Nerve Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The basic cellular units of nervous tissue. Each neuron consists of a body, an axon, and dendrites. Their purpose is to receive, conduct, and transmit impulses in the NERVOUS SYSTEM.",
    "arabic_definition": "العَصَبُون (اللاتينية: Neurone أو Neuron) أو الخلية العصبية (الإنجليزية: nerve cell) هو خلية تستثار كهربائياً ولها أن تعالج وتنقل المعلومات بإشارات كهربائية وكيميائية بين العصبونات من المشبك العصبي (الإنجليزية: Synapse)، الذي هو روابط متخصصة تربط العصبون مع الخلايا الأخرى، وتتشابك العصبونات مشكلةً شبكات عصبونية (الإنجليزية: neural networks). والعصبونات هي أُسُ المخ (الدماغ) والنخاع الشوكي (الإنجليزية: Spinal cord) في الجهاز العصبي المركزي، وهي كذلك أس العُقَد العصبية (الإنجليزية: ganglia) في الجهاز العصبي الطرفي. (Neurons)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009474.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vacuoles",
    "term_en": "Vacuoles",
    "term_ar": "فجوة عصارية",
    "synonyms": [
      "Vacuole"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any spaces or cavities within a cell. They may function in digestion, storage, secretion, or excretion.",
    "arabic_definition": "الفجوة أو الفجوة العصارية (الإنجليزية: Vacuole) هي عضية خلوية غشائية تتواجد في جميع الخلايا النباتية والفطرية وبعض الطلائعيات والحيوانات والبكتيريا. الحويصلات هي أحياز مغلقة أساسية مملوؤة بالماء وتحتوي على جزيئات عضوية وغير عضوية منها الإنزيمات، في بعض الأحيان يمكن أن تحتوي على مواد صلبة تم ابتلاعها. (Vacuoles)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014617.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "zygote",
    "term_en": "Zygote",
    "term_ar": "بويضة مخصبة",
    "synonyms": [
      "Zygotes",
      "Fertilized Egg",
      "Egg, Fertilized",
      "Eggs, Fertilized",
      "Fertilized Eggs",
      "Fertilized Ovum",
      "Ovum, Fertilized"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The fertilized OVUM resulting from the fusion of a male and a female gamete.",
    "arabic_definition": "اللاقحة أو البويضة المخصبة أو البيضة المخصبة أو الزيجوت أو البيضة المُلقَحَة أو اللّقيحة أو الزيج (الإنجليزية: Zygote) هي خلية حقيقية النواة تنتج عن عملية الإخصاب (التلقيح) خلال عملية التكاثر الجنسي بين خليتين أحاديتي الصيغة . البويضة الأحادية الصيغة تأتي من الأم عند الإنسان وهي تحتوي نصف عدد الكروموسومات الموجودة في نواة خلية الأم.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015053.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flagella",
    "term_en": "Flagella",
    "term_ar": "سوط",
    "synonyms": [
      "Flagellum",
      "سوط (أحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A whiplike motility appendage present on the surface cells. Prokaryote flagella are composed of a protein called FLAGELLIN. Bacteria can have a single flagellum, a tuft at one pole, or multiple flagella covering the entire surface. In eukaryotes, flagella are threadlike protoplasmic extensions used to propel flagellates and sperm. Flagella have the same basic structure as CILIA but are longer in proportion to the cell bearing them and present in much smaller numbers. (From King &amp; Stansfield, A Dictionary of Genetics, 4th ed)",
    "arabic_definition": "السَّوط (ج.: سياط) (اللاتينية: flagellum) بنية سطحية لخلايا حقيقيات النوى أو بدائيات النوى تساعدها على الحركة في الوسط السائل أو على سطح وسط جامد. توجد فروق هامة بين السياط عند حقيقيات النوى وبدائيات النوى من حيث تركيبها البروتيني وآلية الدفع والبنية، حيث ثخن السوط عند البكتيريا من 10 إلى 20 نانومتر، ولذلك لا يمكن رؤيته بواسطة المجهر الضوئي، وطوله 3-15 ميكرون، بينما قد يصل سُمك السوط عند حقيقيات النوى إلى 200 نم وطوله إلى 200 ميكرون. (Flagella)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005407.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cilia",
    "term_en": "Cilia",
    "term_ar": "هدب",
    "synonyms": [
      "Cilium",
      "Primary Cilia",
      "Cilia, Primary",
      "Primary Cilium",
      "Cilium, Primary",
      "Motile Cilia",
      "Cilia, Motile",
      "Motile Cilium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Populations of thin, motile processes found covering the surface of ciliates (CILIOPHORA) or the free surface of the cells making up ciliated EPITHELIUM. Each cilium arises from a basic granule in the superficial layer of CYTOPLASM. The movement of cilia propels ciliates through the liquid in which they live. The movement of cilia on a ciliated epithelium serves to propel a surface layer of mucus or fluid. (King &amp; Stansfield, A Dictionary of Genetics, 4th ed)",
    "arabic_definition": "الهدب (من اللاتينية رمش؛ الجمع هو أهداب) هو عضية موجودة في الخلايا حقيقية النواة على شكل نتوء نحيف ينطلق من جسم الخلية الأكبر بكثير. هناك نوعان من الأهداب: أهداب متحركة وغير متحركة. (Cilia)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002923.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spores",
    "term_en": "Spores",
    "term_ar": "بوغ",
    "synonyms": [
      "Spore"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The reproductive elements of lower organisms, such as BACTERIA; FUNGI; and cryptogamic plants.",
    "arabic_definition": "البَوغ (وجمعها أبَوْاغ) في علم النبات هو خلية تكاثر لاجنسي، تنقل النبات من حالة الركود إلى حالة النشاط أو العكس، وهي قادرة على تكوين أفراد جديدة مباشرة عكس العِرس (الإنجليزية: Gamete) الذي لا يعطي فرداً جديداً إلاّ إذا لقح بعرس آخر. (Spores)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013170.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "telomere",
    "term_en": "Telomere",
    "term_ar": "قسيم طرفي",
    "synonyms": [
      "Telomeres"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A terminal section of a chromosome which has a specialized structure and which is involved in chromosomal replication and stability. Its length is believed to be a few hundred base pairs.",
    "arabic_definition": "القُسَيْمٌ الطَرَفِيّ أو القطعة النهائية أو التيلومير (الإنجليزية: Telomere) هو منطقة من تسلسل نووي كثير التكرار يتوضع عند نهاية الصبغيات تعمل تماما كنهاية رباط الحذاء النحاسية أو البلاستيكية. الفائدة الرئيسية للقسيم الطرفي تظهر أثناء عملية تضاعف الحمض النووي، ففي كل مرة يتضاعف فيها يتوقف معقد إنزيم بلمرة الحمض النووي قبل النهاية ببضعة مئات من القواعد النووية، فلو كان هذا القسيم الطرفي غير موجود لحدث فقدان لمعلومات وراثية مهمة ونتج عن ذلك خلل كبير في عمل الخلايا الحية ومنتجاتها البروتينية (يمكن تشبيه القسيم الطرفي «برباط حذاء» يربط بين سلسلتي كل كروموسوم).",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016615.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuropil",
    "term_en": "Neuropil",
    "term_ar": "لبد عصبي",
    "synonyms": [
      "Neuropils",
      "Neuropile",
      "Neuropiles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dense intricate feltwork of interwoven fine glial processes, fibrils, synaptic terminals, axons, and dendrites interspersed among the nerve cells in the gray matter of the central nervous system.",
    "arabic_definition": "المادة البيضاء، والتي تتكون في معظمها من المحاور النخاعية (ومن هنا لونها الأبيض) والخلايا الدبقية، لا تعتبر بشكل عام جزءًا من العصبونات. Neuropil (الجمع neuropils) يأتي من الكلمة اليونانية: neuro، وتعني \"وتر، وتر؛ عصب\" و pilos، وتعني \"شعر\".",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019581.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemocytes",
    "term_en": "Hemocytes",
    "term_ar": "خلية دم",
    "synonyms": [
      "Hemocyte",
      "Blood cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any blood or formed element especially in invertebrates.",
    "arabic_definition": "خلية الدم أو كرية الدم هي أي خلية تتكون خلال عملية تكون الدم وتوجد بشكل رئيسي في الدم. تم تقسيمها إلى: خلية الدم الحمراء خلية الدم البيضاء صفيحة دموية تشكل هذه الأنواع الثلاثة معاً 45% من حجم أنسجة الدم (55 % تشكلها بلازما الدم، وهو الجزء السائل من الدم). (Hemocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006434.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plastids",
    "term_en": "Plastids",
    "term_ar": "صانعة",
    "synonyms": [
      "Plastid",
      "Chromoplasts",
      "Chromoplast",
      "Amyloplasts",
      "Amyloplast",
      "Leukoplasts",
      "Leukoplast",
      "Leucoplasts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Self-replicating cytoplasmic organelles of plant and algal cells that contain pigments and may synthesize and accumulate various substances. PLASTID GENOMES are used in phylogenetic studies.",
    "arabic_definition": "الصانعة أو البلاستيد (الاسم العلمي:Plastid) هي عضية بروتوبلازمية حية توجد مغمورة بالسيتوبلازم، لها القدرة على النمو والانقسام سواء في خلايا بارضة أو خلايا بالغة. وتنشأ الصانعات من أجسام صغيرة توجد في خلايا الأنسجة البارضية وتعرف بالصانعات الأولية، أو تنشأ من انقسام الصانعة الخضراء. (Plastids)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018087.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "caveolae",
    "term_en": "Caveolae",
    "term_ar": "كهيفات",
    "synonyms": [
      "Caveola",
      "Caveolas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endocytic/exocytic CELL MEMBRANE STRUCTURES rich in glycosphingolipids, cholesterol, and lipid-anchored membrane proteins that function in ENDOCYTOSIS (potocytosis), transcytosis, and SIGNAL TRANSDUCTION. Caveolae assume various shapes from open pits to closed vesicles. Caveolar coats are composed of CAVEOLINS.",
    "arabic_definition": "في علم الأحياء؛ غطاء الحويصلات أو كهيفات جمع كهيف هي (كلمة لاتينية تعني الكهوف الصغيرة، مفردها، caveola)، وهو نوع خاص من الليبيدات العائمة وهي عبارة عن انبعاجات صغيرة في الغشاء السيتوبلازمي (50-100 نانومتر) توجد في العديد من أنواع الخلايا الفقارية، خاصة في الخلايا البطانية والخلايا الشحمية. توجد هذه الهياكل على شكل وعاء غني بالبروتينات كما أنها غنية بالدهون مثل الكوليسترول والدهون الإسفنجية. (Caveolae)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D021941.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ovum",
    "term_en": "Ovum",
    "term_ar": "بويضة",
    "synonyms": [
      "Egg",
      "Ova",
      "Egg, Unfertilized",
      "Eggs, Unfertilized",
      "Unfertilized Egg",
      "Unfertilized Eggs",
      "Egg cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mature haploid female germ cell extruded from the OVARY at OVULATION.",
    "arabic_definition": "البُييَضَة أو البُويَضَة (الإنجليزية: Egg cell) هي الخلية الجنسية الأنثوية أي المشيج الأنثوي. يتم إنتاج البويضة في المبيض، حيث تمتلك الحيوانات والنباتات البذرية مبيضًا أو أكثر. (Ovum)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010063.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acrosome",
    "term_en": "Acrosome",
    "term_ar": "جسيم قمي",
    "synonyms": [
      "Acrosomes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The cap-like structure covering the anterior portion of SPERM HEAD. Acrosome, derived from LYSOSOMES, is a membrane-bound organelle that contains the required hydrolytic and proteolytic enzymes necessary for sperm penetration of the egg in FERTILIZATION.",
    "arabic_definition": "الجسيم القمي أو الحيمن أو مقدمة الحيوان المنوي هو عضي ينشأ على النصف الأمامي للحيوانات المنوية. وهو عبارة عن تركيب خوذي الشكل (شبيه بالخوذة) مشتق من جهاز غولجي. (Acrosome)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000177.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tissue-engineering",
    "term_en": "Tissue Engineering",
    "term_ar": "هندسة الأنسجة",
    "synonyms": [
      "Engineering, Tissue",
      "Biofabrication",
      "Biofabrications"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Generating tissue in vitro for clinical applications, such as replacing wounded tissues or impaired organs. The use of TISSUE SCAFFOLDING enables the generation of complex multi-layered tissues and tissue structures.",
    "arabic_definition": "هندسة النسج تختص بالاستفادة من علم الخلايا وعلم الهندسة الطبية الحيوية وعلم المواد الحيوية والكيمياء الحيوية يقوم المهندسون الجينيون بإنماء الأنسجة في المخبر بهدف استبدالها بأعضاء وأنسجة متضررة في جسم الإنسان الحيوية للأنسجة الحيوية المختلفة (العظام، الجلد ،الخلايا الجذعية.. إلخ). (Tissue Engineering)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D023822.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "basophils",
    "term_en": "Basophils",
    "term_ar": "كرية بيضاء قاعدية",
    "synonyms": [
      "Basophil"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Granular leukocytes characterized by a relatively pale-staining, lobate nucleus and cytoplasm containing coarse dark-staining granules of variable size and stainable by basic dyes.",
    "arabic_definition": "الخلية القاعدية أو الخلية الأسسة أو خلية محبة للصبغ القاعدي(الإنجليزية: Basophil) هي من أقل المحببات شيوعا، حيث تشكل حوالي من 0.5% إلى 1% من مجموع الكريّات البيض الجوالة ولها دور في إفراز جزيئات محدثة للالتهاب مثلها في ذلك مثل الخلايا الصارية. تحتوي الأسسة على عدد كبير من الحبيبات الهيولية (الهيولية) لذلك فهي تصنف على أنها من خلايا الدم البيضاء ذات الحبيبات (المحببة) والتي -لكثرتها- تغطي نواة الخلية تحت المجهر لكن النواة في الحقيقة تكون على شكل حرف S وعندما تكون غير ملونة بملون فهي تبدو مقسومة فصين (فلقتين). (Basophils)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001491.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mediterranean-diet",
    "term_en": "Mediterranean Diet",
    "term_ar": "حمية البحر الأبيض المتوسط",
    "synonyms": [
      "Diets, Mediterranean",
      "Mediterranean Diets"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A diet typical of the Mediterranean region characterized by a pattern high in fruits and vegetables, EDIBLE GRAIN and bread, potatoes, poultry, beans, nuts, olive oil and fish while low in red meat and dairy and moderate in alcohol consumption.",
    "arabic_definition": "هذه المقالة بشأن توصية غذائية والتي أصبحت شائعة في عام 1990. من أجل الأغذية في المناطق حول البحر الأبيض المتوسط، راجع مطبخ البحر الأبيض المتوسط. (Mediterranean Diet)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D038441.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oocytes",
    "term_en": "Oocytes",
    "term_ar": "خلية بيضية",
    "synonyms": [
      "Oocyte",
      "Ovocytes",
      "Ovocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Female germ cells derived from OOGONIA and termed OOCYTES when they enter MEIOSIS. The primary oocytes begin meiosis but are arrested at the diplotene state until OVULATION at PUBERTY to give rise to haploid secondary oocytes or ova (OVUM).",
    "arabic_definition": "الخلية البيضية (الإنجليزية: oocyte)، هي خلية تناسلية متخصصة بالتكاثر الجنسي، تحمل عدداً فَردانياً من الصبغيات، تتحد وعروساً أخرى لتكوّن بيضة مخصبة ضِعفَانِية العدد الصبغي، ينتهي تقسمها وتناميها إلى فرد كامل. ينتج من الأعراس الأنثوية والذكرية، عامةً، فردان ينتميان إلى النوع نفسه، ونادراً ما تتشكل من الفرد نفسه، الذي يكون عندها خُنثَى hermaphrodite. (Oocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009865.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "axoneme",
    "term_en": "Axoneme",
    "term_ar": "خيط محوري",
    "synonyms": [
      "Axonemes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A bundle of MICROTUBULES and MICROTUBULE-ASSOCIATED PROTEINS forming the core of each CILIUM or FLAGELLUM. In most eukaryotic cilia or flagella, an axoneme shaft has 20 microtubules arranged in nine doublets and two singlets.",
    "arabic_definition": "يتكون الخيط المحوري أو الغمد المركزي أو أنبوبة مركزية (بالإنجليزية: Axoneme) للأهداب الأولية من حلقة مؤلفة من 9 أزواج أنيبيبية خارجية، ولكن الخيط المحوري للأهداب المتحركة يحتوي على أنيبيبين فرديين في المركز بالإضافة إلى التسع أزواج الخارجية.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054468.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oogonia",
    "term_en": "Oogonia",
    "term_ar": "خلية بيضية أولية",
    "synonyms": [
      "Oogonium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Euploid female germ cells of an early stage of OOGENESIS, derived from primordial germ cells during ovarian differentiation. Oogonia undergo MEIOSIS and give rise to haploid OOCYTES",
    "arabic_definition": "خلية بيضية أولية أو بزرة البيضة أو سَليفات البيض هي خلية صغيرة ثنائية الصبغيات، والتي تشكل عند النضج جريبًا بدائيًا في الجنين الأنثوي أو المشيج الأنثوي (أحادي أو ثنائي الصبغيات) لبعض النباتات. (Oogonia)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009867.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "precision-medicine",
    "term_en": "Precision Medicine",
    "term_ar": "طب شخصي",
    "synonyms": [
      "Medicine, Precision",
      "P Health",
      "Individualized Medicine",
      "Medicine, Individualized",
      "Personalized Medicine",
      "Medicine, Personalized",
      "Theranostics",
      "Theranostic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Clinical, therapeutic and diagnostic approaches to optimal disease management based on individual variations in a patient's genetic profile.",
    "arabic_definition": "الطب الشخصي أو الطب الدقيق هو نموذج طبي يفصل الناس إلى مجموعات مختلفة مع القرارات والممارسات والتدخلات و/ أو المنتجات الطبية المصممة خصيصًا للمريض استنادًا إلى الاستجابة المتوقعة أو خطر الإصابة بالمرض. تُستخدم مصطلحات الطب الشخصي، أو الطب الدقيق، أو الطب الطبقي، أو الطب بي 4 بالتبادل لوصف هذا المفهوم على الرغم من أن بعض المؤلفين والمنظمات يستخدمون هذه التعبيرات بشكل منفصل للإشارة إلى فروق معينة. (Precision Medicine)",
    "specialty": "Medical Procedures",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057285.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synapses",
    "term_en": "Synapses",
    "term_ar": "مشبك عصبي",
    "synonyms": [
      "Synapse"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Specialized junctions at which a neuron communicates with a target cell. At classical synapses, a neuron's presynaptic terminal releases a chemical transmitter stored in synaptic vesicles which diffuses across a narrow synaptic cleft and activates receptors on the postsynaptic membrane of the target cell. The target may be a dendrite, cell body, or axon of another neuron, or a specialized region of a muscle or secretory cell. Neurons may also communicate via direct electrical coupling with ELECTRICAL SYNAPSES. Several other non-synaptic chemical or electric signal transmitting processes occur via extracellular mediated interactions.",
    "arabic_definition": "في الجهاز العصبي، المشبك العصبي أو التشابك العصبي (الإنجليزية: synapse)، هو هيكل يسمح لخلية عصبية توصيل شارة كهربائية أو كيميائية لخلية أخرى (عصبية أو غير ذلك). اقترح سانتياغو رامون إي كاخال أن الخلايا العصبية هي ليست مستمرة على مدار الجسم، ولكن تتواصل مع بعضها البعض، وهي فكرة تعرف باسم مبدأ العصبية. (Synapses)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013569.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oocysts",
    "term_en": "Oocysts",
    "term_ar": "دورة حياة معقدات القمة",
    "synonyms": [
      "Oocyst",
      "Sporocysts",
      "Sporocyst",
      "Apicomplexan life cycle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Zygote-containing cysts of sporozoan protozoa. Further development in an oocyst produces small individual infective organisms called SPOROZOITES. Then, depending on the genus, the entire oocyst is called a sporocyst or the oocyst contains multiple sporocysts encapsulating the sporozoites.",
    "arabic_definition": "معقدات القمة هي مجموعة من الطفيليات الجوانية وتمتلك مراحل لدورة الحياة والتي تسمح لها بالعيش في مختلف الظروف البيئية التي تتعرض لها خلال دورة حياتها المعقدة. تتميز كل مرحلة من دورة حياة كائن معقدات القمة بتنوع خلوي وتميز تشكلي وكيميائي حيوي. (Oocysts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D033661.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chloroplasts",
    "term_en": "Chloroplasts",
    "term_ar": "بلاستيدة خضراء",
    "synonyms": [
      "Chloroplast",
      "Etioplasts",
      "Etioplast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Plant cell inclusion bodies that contain the photosynthetic pigment CHLOROPHYLL, which is associated with the membrane of THYLAKOIDS. Chloroplasts occur in cells of leaves and young stems of plants. They are also found in some forms of PHYTOPLANKTON such as HAPTOPHYTA; DINOFLAGELLATES; DIATOMS; and CRYPTOPHYTA.",
    "arabic_definition": "الصانعات الخضراء أو الصانعة الخضراء أو البلاستيدات الخضراء أو كلوروبلاست (الإنجليزية: Chloroplast) هي إحدى أنواع الصانعات الخلوية الموجودة في خلايا النبات، وتتميز بكونها من العضيات الخلوية مزدوجة الغشاء أحدهما داخلي وآخر خارجي ويوجد بينهما فراغ في خلايا النبات ذاتي التغذية. تتميز بكونها ذات لون أخضر لاحتوائها على أصباغ أهمها اليخضور \"أ\" واليخضور \"ب\" وأصباغ الكاروتين واليصفور. (Chloroplasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002736.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mitochondria",
    "term_en": "Mitochondria",
    "term_ar": "ميتوكندريون",
    "synonyms": [
      "Mitochondrion",
      "Mitochondrial Contraction",
      "Contraction, Mitochondrial",
      "Contractions, Mitochondrial",
      "Mitochondrial Contractions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Semiautonomous, self-reproducing organelles that occur in the cytoplasm of all cells of most, but not all, eukaryotes. Each mitochondrion is surrounded by a double limiting membrane. The inner membrane is highly invaginated, and its projections are called cristae. Mitochondria are the sites of the reactions of oxidative phosphorylation, which result in the formation of ATP. They contain distinctive RIBOSOMES, transfer RNAs (RNA, TRANSFER); AMINO ACYL T RNA SYNTHETASES; and elongation and termination factors. Mitochondria depend upon genes within the nucleus of the cells in which they reside for many essential messenger RNAs (RNA, MESSENGER). Mitochondria are believed to have arisen from aerobic bacteria that established a symbiotic relationship with primitive protoeukaryotes. (King &amp; Stansfield, A Dictionary of Genetics, 4th ed)",
    "arabic_definition": "المُتَقَدِّرَةُ أو الميتوكندريون أو المصورة الحيوية أو الحُبَيبَةُ الخَيطِيَّةُ هي عضية خلوية مزدوجة الغشاء تتواجد لدى معظم الكائنات حقيقية النوى. يمكن أن لا تملك بعض الخلايا في بعض الكائنات متعددة الخلايا متقدرات (مثل خلايا الدم الحمراء الناضجة الخاصة بالثدييات). (Mitochondria)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008928.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microtubules",
    "term_en": "Microtubules",
    "term_ar": "أنيبيب دقيق",
    "synonyms": [
      "Microtubule"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Slender, cylindrical filaments found in the cytoskeleton of plant and animal cells. They are composed of the protein TUBULIN and are influenced by TUBULIN MODULATORS.",
    "arabic_definition": "الأنيبيبات الدقيقة (الإنجليزية: Microtubule) أكبر مكونات الهيكل الخلوي توجد في سيتوبلازم الخلايا حقيقية النوى وفي بعض أنواع البكتيريا ، وشكلها أنبوبي دقيق ، ولهذا أسمها. هذه البوليمرات الأنبوبية المكونة من بروتين التيوبيولين (tubulin) تستطيع أن تنمو حتى 50 ميكروميتر، بالإضافة لكونها تتمتع بديناميكية عالية. (Microtubules)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008870.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nucleosomes",
    "term_en": "Nucleosomes",
    "term_ar": "جسيم نووي",
    "synonyms": [
      "Nucleosome",
      "Dinucleosomes",
      "Dinucleosome",
      "Polynucleosomes",
      "Polynucleosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The repeating structural units of chromatin, each consisting of approximately 200 base pairs of DNA wound around a protein core. This core is composed of the histones H2A, H2B, H3, and H4.",
    "arabic_definition": "الجسيم النووي (الإنجليزية: nucleosome) عبارة الوحدة الأساسية المتكررة في بناء الصبغين (الكروماتين) حقيقي النوى والدنا حقيقي النوى وهو عبارة عن بروتينات هستونية مع دنا. تتواجد الجسيمات النووية في جميع خلايا حقيقيات النوى حيث تشكل معظم الكروماتين في هذه الخلايا باستثناء نوى الخلايا المنوية (sperm). (Nucleosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009707.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peroxisomes",
    "term_en": "Peroxisomes",
    "term_ar": "بيروكسيسوم",
    "synonyms": [
      "Peroxisome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Microbodies which occur in animal and plant cells and in certain fungi and protozoa. They contain peroxidase, catalase, and allied enzymes. (From Singleton and Sainsbury, Dictionary of Microbiology and Molecular Biology, 2nd ed)",
    "arabic_definition": "جسيم فوق الأكسيد أو البيروكسيسومات أو الجسيمات التأكسدية هي عضيات خلوية تسبح ضمن السيتوبلازما الخلوي وتتكون في الشبكة البلازمية الخشنة وتطلق إلى العصارة الخلوية (cytosol) تحاط بغشاء 1.5-0.3 µm وهي عبارة عن حويصلات صغيرة، مصفوفات حبيبية، بيضوية أو كروية الشكل. تُنتج بيروكسيد الهيدروجين H2O2. (Peroxisomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020675.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudopodia",
    "term_en": "Pseudopodia",
    "term_ar": "قدم كاذب",
    "synonyms": [
      "Pseudopodium",
      "Axopodia",
      "Filopodia",
      "Lobopodia",
      "Reticulopodia",
      "Lamellipodia",
      "Lamellipodias",
      "Microspikes, Cell Surface"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dynamic actin-rich extension of the surface of an animal cell used for locomotion or prehension of food.",
    "arabic_definition": "قدم كاذب (الإنجليزية: Pseudopod) (الفرنسية: pseudopode) هي بروزات مؤقتة من الخلايا حقيقية النواة. الخلايا التي تحتوي هذه البروزات هي التي يشار إليها عموما الأميبيات، وهي عبارة عن خيوط بالقرب من نهاية الخلية تتفاعل مع الميوسين الذي يؤدي إلى الإنكماش. (Pseudopodia)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011554.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erythrocytes",
    "term_en": "Erythrocytes",
    "term_ar": "خلية دم حمراء",
    "synonyms": [
      "Erythrocyte",
      "Red Blood Cells",
      "Blood Cell, Red",
      "Red Blood Cell",
      "Red Blood Corpuscles",
      "Blood Corpuscle, Red",
      "Red Blood Corpuscle",
      "Blood Cells, Red"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Red blood cells. Mature erythrocytes are non-nucleated, biconcave disks containing HEMOGLOBIN whose function is to transport OXYGEN.",
    "arabic_definition": "خلايا الدم الحمراء أو كريات الدم الحمراء (تُسمى في البشر والحيوانات التي لا تمتلك فيها خلايا الدم الحمراء أنويةً) هي نوع من أنواع خلايا الدم، وهي الأكثر تعدادًا فيه. تشكل هذه الخلايا الوسيلة الرئيسية للفقاريات لتوصيل الأكسجين (O2) إلى أنسجة الجسم بواسطة الجريان الدموي في الجهاز الدوراني. (Erythrocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004912.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytoskeleton",
    "term_en": "Cytoskeleton",
    "term_ar": "هيكل خلوي",
    "synonyms": [
      "Cytoskeletons",
      "Cytoplasmic Filaments",
      "Cytoplasmic Filament",
      "Filament, Cytoplasmic",
      "Filaments, Cytoplasmic",
      "Cytoskeletal Filaments",
      "Cytoskeletal Filament",
      "Filament, Cytoskeletal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The network of filaments, tubules, and interconnecting filamentous bridges which give shape, structure, and organization to the cytoplasm.",
    "arabic_definition": "الهيكل الخلوي أو هيكل الخلية (الإنجليزية: Cytoskeleton) هو عبارة عن دعامة أو هيكل بروتيني موجود مثل جميع العضيات الأخرى ضمن السايتوبلازم. يوجد الهيكل الخلوي في جميع الخلايا الحية النباتية والحيوانية إضافة إلى خلايا طلائعيات النوى وحقيقيات النوى قديما كان يعتقد أنها ليست موجودة إلا في الخلايا حقيقية النواة وبعد دراسات وجد انها متوافرة في الخلايا بدائية النواة حيث تم العثور على بروتينات في بدائيات النواة مماثلة للبروتينات الرئيسية المكونة للهيكل الخلوي في حقيقية النواة.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003599.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "melanophores",
    "term_en": "Melanophores",
    "term_ar": "حامل الصباغ",
    "synonyms": [
      "Melanophore",
      "Chromatophore"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chromatophores (large pigment cells of fish, amphibia, reptiles and many invertebrates) which contain melanin. Short term color changes are brought about by an active redistribution of the melanophores pigment containing organelles (MELANOSOMES). Mammals do not have melanophores; however they have retained smaller pigment cells known as MELANOCYTES.",
    "arabic_definition": "حامِلُ الصِّباغِ أو حامل الصبغة أوالكروماتين أو حَامِلةُ اللَّوْن أو المُلَوِّنَة (الإنجليزية: Chromatophore)، هو خلية أو مجموعة خلايا عاكسة للضوء تحتوي على صبغات توجد في عدد كبير من الحيوانات متغيرة الحرارة مثل البرمائيات والأسماك والزواحف والقشريات ورأسيات القدم. لا تحتوي الثدييات ولا الطيور على هذا النوع من الخلايا، بل إنها تحتوي على خلايا تدعى بالخلايا الميلانينية لغرض تلون الحيوانات. (Melanophores)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008547.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spherocytes",
    "term_en": "Spherocytes",
    "term_ar": "كثرة الكريات الحمر الكروية",
    "synonyms": [
      "Spherocyte",
      "Spherocytosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Small, abnormal spherical red blood cells with more than the normal amount of hemoglobin.",
    "arabic_definition": "كثرة الكريات الحمر الكروية (الإنجليزية: Spherocytosis) هي فقر دم انحلالي ذاتي (مرض دم) يتمثّل بإنتاج خلايا دم حمراء كروية الشكل، وليس على شكلها الطبيعي أي على شكل أقراص مقعّرة السطحين. تظهر كثرة الكريات الحمر الكروية في فقر الدم الانحلالي بالمناعة الذاتية وفي كثرة الكريات الحمر الكروية الموروثة. (Spherocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013102.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spliceosomes",
    "term_en": "Spliceosomes",
    "term_ar": "جسيم تضفير",
    "synonyms": [
      "Spliceosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Organelles in which the splicing and excision reactions that remove introns from precursor messenger RNA molecules occur. One component of a spliceosome is five small nuclear RNA molecules (U1, U2, U4, U5, U6) that, working in conjunction with proteins, help to fold pieces of RNA into the right shapes and later splice them into the message.",
    "arabic_definition": "جسيم التضفير (الإنجليزية: Spliceosome) هي آلة جزيئية كبيرة ومعقدة وجدت في المقام الأول داخل نواة حقيقيات النوى. يتم تجميع جسيم التضفير من عدة رنا صغيرة النووية snRNPs والمجمعات البروتينية. (Spliceosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017381.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neutrophils",
    "term_en": "Neutrophils",
    "term_ar": "خلية متعادلة",
    "synonyms": [
      "Neutrophil",
      "Polymorphonuclear Neutrophils",
      "Neutrophil, Polymorphonuclear",
      "Polymorphonuclear Neutrophil",
      "Leukocytes, Polymorphonuclear",
      "Leukocyte, Polymorphonuclear",
      "Polymorphonuclear Leukocyte",
      "Polymorphonuclear Leukocytes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Granular leukocytes having a nucleus with three to five lobes connected by slender threads of chromatin, and cytoplasm containing fine inconspicuous granules and stainable by neutral dyes.",
    "arabic_definition": "العَدِلَةُ أو الكُرية البيضاء الصيوغة بالأصباغ المتعادلة أو الخلايا المتعادلة (الإنجليزية: Neutrophil) أو العَدِلة المُحَبَّبَة الخلايا الحبيبية المتعادلة (الإنجليزية: Neutrophil granulocytes)، هي أكثر أنواع كريات الدم البيضاء غزارة لدى الإنسان حيث تشكل ما نسبته 60-70% من كريات الدم البيضاء وتكون نواتها متعددة الفصوص وتحتوي النواة عند الإناث على الكروموسوم X الذي يكون على شكل زائدة تشبه عصا الطبل وهي تحتوي على حبيبات متناثرة لذلك فهي تصنف على أنها من خلايا الدم البيضاء ذات الحبيبات (المحببة) وهذه الخلايا تنشأ خارج النسيج الضام ثم تأتي إليه وتبقى فيه لفترة قصيرة وهي تنصبغ بشكل متغير وتشكل قسماً رئيسيا من الجهاز المناعي ولها دور في عملية البلعمة. أتت التسمية من صفات تصبغها -أخذها للون- جراء عملية التحضير النسيجي والخلوي وذلك باستخدام صبغة الهيماتوكسيلين واليوزين. (Neutrophils)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009504.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spheroplasts",
    "term_en": "Spheroplasts",
    "term_ar": "جبلة كرية",
    "synonyms": [
      "Spheroplast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cells, usually bacteria or yeast, which have partially lost their cell wall, lost their characteristic shape and become round.",
    "arabic_definition": "جبلة كروية (بالإنجليزية: Spheroplast) هي خلية أزيل منها غشاء الخلية أو جدارها الخلوي تحت تأثير البنسلين. وتأتي تلك التسمية من أن الميكروب بعد زوال جداره بالإذابة يتكور وتتخذ شكلا كرويا. (Spheroplasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013104.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatocyte",
    "term_en": "Hepatocyte",
    "term_ar": "خلية كبدية",
    "synonyms": [
      "Hepatic Cells",
      "Cell, Hepatic",
      "Cells, Hepatic",
      "Hepatic Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The main structural component of the LIVER. They are specialized EPITHELIAL CELLS that are organized into interconnected plates called lobules.",
    "arabic_definition": "الخلايا الكبدية - خلية متنية في الكبد لدى البشر والحيوانات. تشكل من 60 إلى 80 ٪ من نسيج الكبد. (Hepatocyte)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D022781.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microbodies",
    "term_en": "Microbodies",
    "term_ar": "بدين",
    "synonyms": [
      "Microbody",
      "Glycosomes",
      "Glycosome",
      "بدين (أحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Electron-dense cytoplasmic particles bounded by a single membrane, such as PEROXISOMES; GLYOXYSOMES; and glycosomes.",
    "arabic_definition": "الجسم الميكروبي او بُدَيْن أو السيتوسوم او جُسَيْد (الإنجليزية: Microbody) هو نوع من العضيات المرتبطة بغشاء واحد في خلايا النباتات والبروتوزوا والحيوانات. تضم هذه العضيات عائلة واسعة الأجسام الميكروبية البيروكسيسومات، والجليوكسيسومات، والجليكوسومات، والهيدروجينوسومات. (Microbodies)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008830.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "granulocytes",
    "term_en": "Granulocytes",
    "term_ar": "خلية محببة",
    "synonyms": [
      "Granulocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Leukocytes with abundant granules in the cytoplasm. They are divided into three groups according to the staining properties of the granules: neutrophilic, eosinophilic, and basophilic. Mature granulocytes are the NEUTROPHILS; EOSINOPHILS; and BASOPHILS.",
    "arabic_definition": "الخلية المُحَبَّبَة (الإنجليزية: Granulocyte) أحد التقسيمات الرئيسية للخلايا البيض وهي تشكل معظمها بنسبة 50-70%. تأتي من خط الخلايا الجذعية كباقي مكونات الدم، وتمتاز بأنها كرية الشكل غير مقسمة وقصيرة الحياة حوالي 2-5 أيام ثم تتجدد. (Granulocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006098.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nociceptors",
    "term_en": "Nociceptors",
    "term_ar": "مستقبلات الأذية",
    "synonyms": [
      "Nociceptor",
      "Nociceptive Neurons",
      "Neuron, Nociceptive",
      "Neurons, Nociceptive",
      "Nociceptive Neuron",
      "Pain Receptors",
      "Pain Receptor",
      "Receptors, Pain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Peripheral AFFERENT NEURONS which are sensitive to injuries or pain, usually caused by extreme thermal exposures, mechanical forces, or other noxious stimuli. Their cell bodies reside in the DORSAL ROOT GANGLIA. Their peripheral terminals (NERVE ENDINGS) innervate target tissues and transduce noxious stimuli via axons to the CENTRAL NERVOUS SYSTEM.",
    "arabic_definition": "مستقبلات الأذية أو مستقبلات الألم (الإنجليزية: Nociceptor) هي نوع من المستقبلات الموجودة في نهاية محور الأعصاب الحسية، والتي تستجيب للمؤثرات الضارة الفعلية أو المحتملة عن طريق إرسال إشارات الألم إلى الحبل الشوكي والدماغ. وتسمى هذه العملية بحس الألم. (Nociceptors)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009619.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteoclasts",
    "term_en": "Osteoclasts",
    "term_ar": "ناقضة العظم",
    "synonyms": [
      "Osteoclast",
      "Odontoclasts",
      "Cementoclasts",
      "Cementoclast",
      "Odontoclast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A large multinuclear cell associated with the BONE RESORPTION. An odontoclast, also called cementoclast, is cytomorphologically the same as an osteoclast and is involved in CEMENTUM resorption.",
    "arabic_definition": "الخلية ناقضة العظم أو هادمة العظم (الإنجليزية: Osteoclast) هي إحدى الخلايا الموجودة في العظم، ووظيفتها هضم العظم الزائد وغير المفيد. كما ويوجد في العظم خلايا بنائة وخلايا برعمية. (Osteoclasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010010.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactotrophs",
    "term_en": "Lactotrophs",
    "term_ar": "خلية مفرزة للبرولاكتين",
    "synonyms": [
      "Lactotroph",
      "Pituitary Prolactin-Secreting Cells",
      "Pituitary Prolactin-Secreting Cell",
      "Prolactin-Secreting Cell, Pituitary",
      "Prolactin-Secreting Cells, Pituitary",
      "Pituitary Prolactin Cells",
      "Pituitary Prolactin Cell",
      "Prolactin Cell, Pituitary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anterior pituitary cells that produce PROLACTIN.",
    "arabic_definition": "الخلية المفرزة للبرولاكتين أو خلية البرولاكتين هي خلية في النخامية الأمامية تفرز البرولاكتين استجابة لإشارات هرمونية منها الدوبامين المثبط للإفراز، والهرمون المطلق للثيروتروبين المحفز للإفراز. من المنظمات الهرمونية الأخرى لإفراز هذه الخلايا للبرولاكتين: الأوكسايتوسين، الإستروجين والبروجستيرون. (Lactotrophs)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052682.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gonadotrophs",
    "term_en": "Gonadotrophs",
    "term_ar": "خلية موجهة للغدة التناسلية",
    "synonyms": [
      "Gonadotroph",
      "FSH Cells",
      "FSH Cell",
      "FSH-Producing Cells",
      "FSH-Producing Cell",
      "FSH-Secreting Cells",
      "FSH-Secreting Cell",
      "LH Cells"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anterior pituitary cells that can produce both FOLLICLE STIMULATING HORMONE and LUTEINIZING HORMONE.",
    "arabic_definition": "خلايا موجهة للغدد التناسلية (الإنجليزية: Gonadotropic cells) هي خلايا موجهة للغدد التناسلية وخلايا الغدد الصماء في الغدة النخامية الأمامية التي تنتج هرمون الغونادوتروبينات أو الجونادوتروبين تحتوي الغدد التناسلية على مستقبلات الأنسولين، والتي يمكن المبالغة في تحفيزها بمستويات الأنسولين العالية جدًا. (Gonadotrophs)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052681.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterocytes",
    "term_en": "Enterocytes",
    "term_ar": "خلية معوية",
    "synonyms": [
      "Enterocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Absorptive cells in the lining of the INTESTINAL MUCOSA. They are differentiated EPITHELIAL CELLS with apical MICROVILLI facing the intestinal lumen. Enterocytes are more abundant in the SMALL INTESTINE than in the LARGE INTESTINE. Their microvilli greatly increase the luminal surface area of the cell by 14- to 40 fold.",
    "arabic_definition": "الخلايا الأمعائية، أو الخلايا الماصة الأمعائية، هي خلايا طلائية عمودية بسيطة تبطن السطح الداخلي للأمعاء الدقيقة والغليظة. تحتوي الطبقة السطحية المغطاة بالكأس السكري على إنزيمات هضمية. (Enterocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020895.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trophoblasts",
    "term_en": "Trophoblasts",
    "term_ar": "أرومة مغذية",
    "synonyms": [
      "Trophoblast",
      "Cytotrophoblasts",
      "Cytotrophoblast",
      "Syncytiotrophoblasts",
      "Syncytiotrophoblast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cells lining the outside of the BLASTOCYST. After binding to the ENDOMETRIUM, trophoblasts develop into two distinct layers, an inner layer of mononuclear cytotrophoblasts and an outer layer of continuous multinuclear cytoplasm, the syncytiotrophoblasts, which form the early fetal-maternal interface (PLACENTA).",
    "arabic_definition": "الأرومات المغذية أو الأرومة الغاذية (الإنجليزية: Trophoblast) (باللغة اليونانية trephein: إطعام، وblastos: برعم أو أرومة) هي الخلايا التي تشكل الطبقة الخارجية للكيسة الأريمية، والتي توفر المواد المغذية للجنين، وتتطور بعد ذلك إلى جزء كبير من المشيمة. وهي تتشكل خلال المرحلة الأولى من الحمل، وهي أول خلايا تتمايز من البويضة المخصبة. (Trophoblasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014327.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "protoplasts",
    "term_en": "Protoplasts",
    "term_ar": "جبلة مجردة",
    "synonyms": [
      "Protoplast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The protoplasm and plasma membrane of plant, fungal, bacterial or archaeon cells without the CELL WALL.",
    "arabic_definition": "الجبلة المجردة (بالإنجليزية: Protoplast؛ عن اليونانية القديمة: πρωτόπλαστος) مصطلح يدل على أول الأجسام المتعضية في الأنواع. أي أنه أول شيء تتشكل منه باقي الأعضاء والأشكال (الشكل الأولي). (Protoplasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011523.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "melanosomes",
    "term_en": "Melanosomes",
    "term_ar": "جسيم ميلانيني",
    "synonyms": [
      "Melanosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Melanin-containing organelles found in melanocytes and melanophores.",
    "arabic_definition": "الجسيم الميلانيني أو الميلانوزوم، وهي عضية خلوية موجودة في الخلايا الحيوانية وهي موقع توليف وتخزين ونقل الميلانين، وأكثر الصبغات امتصاصا للضوء شيوعا في المملكة الحيوانية. الجسيم الميلانيني مسؤول عن اللون والحماية الضوئية في الخلايا والأنسجة الحيوانية. (Melanosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020460.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "interneurons",
    "term_en": "Interneurons",
    "term_ar": "عصبون بيني",
    "synonyms": [
      "Interneuron",
      "Intercalated Neurons",
      "Intercalated Neuron",
      "Neuron, Intercalated",
      "Neurons, Intercalated"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Most generally any NEURONS which are not motor or sensory. Interneurons may also refer to neurons whose AXONS remain within a particular brain region in contrast to projection neurons, which have axons projecting to other brain regions.",
    "arabic_definition": "العصبونات البينية (والتي تُسمى أيضًا بالعصبونات المتوسطة، عصبونات الارتباط، العصبونات الواصلة، العصبونات الوسيطة أو عصبونات الدائرة العصبية الموضعية) هي فئة واسعة من العصبونات الموجودة في جسم الإنسان والتي تدخل في تركيب الشكبات أو الدوائر العصبية بشكل يتيح من عملية التواصل بين العصبونات الحسية أو الحركية وبينالجهاز العصبي المركزي، بجانب دورها في المنعكسات، والتذبذب العصبي، والتخليق العصبي في دماغ الثدييات البالغة. يُمكن تقسيم العصبونات البينية إلى مجموعتين: المحلية والترحيلية، حيث تحتوي العصبونات البينية المحلية على محاور قصيرة وتشكل دوائر عصبية مع العصبوانت القريبة لتحليل أجزاء صغيرة من المعلومات. (Interneurons)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007395.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kinetochores",
    "term_en": "Kinetochores",
    "term_ar": "حيز حركي",
    "synonyms": [
      "Kinetochore"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Large multiprotein complexes that bind the centromeres of the chromosomes to the microtubules of the mitotic spindle during metaphase in the cell cycle.",
    "arabic_definition": "الحيز الحركي أو القسيم الحركي، الكينيتيكور (الإنجليزية: Kinetochore) هو تركيبة بروتينية معقدة قُرصية الشكل، تكون مرتبطة بالكروماتيدات المتضاعفة في الخلايا الحقيقية النواة. مهمته الأساسية تأتي عندما تتصل به الأَلْيافٌ المِغْزَلِيَّة أثناء الانقسام المتساوي للنواة لكي تتمكن من سحب الكروماتيدات الشقيقية إلى قطبي الخلية. (Kinetochores)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018386.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trophozoites",
    "term_en": "Trophozoites",
    "term_ar": "أتروفة",
    "synonyms": [
      "Trophozoite"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cells or feeding stage in the life cycle of sporozoan protozoa. In the malarial parasite, the trophozoite develops from the MEROZOITE and then splits into the SCHIZONT. Trophozoites that are left over from cell division can go on to form gametocytes.",
    "arabic_definition": "الأُتْرُوفَة (الجمع: اَتَارِيف) (الإنجليزية: trophozoite) هي الطور النشيط من دورة حياة بعض الطفيليات المنتمية إلى الأوالي مثل المتصورة والجياردية. (Trophozoites)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053058.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurofibrils",
    "term_en": "Neurofibrils",
    "term_ar": "الخيط العصبي",
    "synonyms": [
      "Neurofibril",
      "Neurofilament"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The delicate interlacing threads, formed by aggregations of neurofilaments and neurotubules, coursing through the CYTOPLASM of the body of a NEURON and extending from one DENDRITE into another or into the AXON.",
    "arabic_definition": "تصنيف الخيوط العصبية (NF) على أنها خيوط وسيطة من النوع الرابع توجد في السيتوبلازم للخلايا العصبية . هم بوليمرات البروتين قياس 10 نانومتر في القطر والعديد من ميكرومتر في الطول. (Neurofibrils)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009454.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chondrocytes",
    "term_en": "Chondrocytes",
    "term_ar": "خلية غضروفية",
    "synonyms": [
      "Chondrocyte",
      "Chondroblasts",
      "Chondroblast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Polymorphic cells that form cartilage.",
    "arabic_definition": "الخلية الغضروفية (الإنجليزية: Chondrocyte) وهي الخلية الوحيدة الموجودة في الغضروف السليم. تنتج وتحافظ على المصفوفة الغضروفية التي تتكون أساسا من الكولاجين والبروتين سكري. (Chondrocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019902.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acanthocytes",
    "term_en": "Acanthocytes",
    "term_ar": "كرية شائكة",
    "synonyms": [
      "Acanthocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Erythrocytes with protoplasmic projections giving the cell a thorny appearance.",
    "arabic_definition": "كرية شائكة أو الخلية المهمازية أو الكرية الحمراء المشوَّكة (بالإنجليزية: Acanthocyte) (من الكلمة اليونانية ἄκανθα أكانثا، وتعني 'شوكة')، وتشير في البيولوجيا والطب إلى شكل من أشكال خلايا الدم الحمراء يكون لديه غشاء خلوي شائك، نتيجة بروزات شوكية غير طبيعية. وهناك مصطلح مماثل هو الخلايا المهمازية. (Acanthocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000050.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "odontoblasts",
    "term_en": "Odontoblasts",
    "term_ar": "أرومة سنية",
    "synonyms": [
      "Odontoblast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The mesenchymal cells which line the DENTAL PULP CAVITY and produce DENTIN. They have a columnar morphology in the coronal pulp but are cuboidal in the root pulp, or when adjacent to tertiary dentin.",
    "arabic_definition": "تشتق الأرومة السنية لدى الفقاريات من خلايا العرف العصبي، توجد على السطح الخارجي للب السني، وتتمثل وظيفتها البيولوجية في تكوين العاج، وهو المادة الموجودة أسفل مينا الأسنان فوق التاج والملاط والجذر. (Odontoblasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009804.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spermatozoa",
    "term_en": "Spermatozoa",
    "term_ar": "حيوان منوي",
    "synonyms": [
      "Sperm",
      "Spermatozoon",
      "X-Chromosome-Bearing Sperm",
      "Sperms, X-Chromosome-Bearing",
      "Sperm, X-Chromosome-Bearing",
      "X-Chromosome-Bearing Sperms",
      "X-Bearing Sperm",
      "Sperms, X-Bearing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Mature male germ cells derived from SPERMATIDS. As spermatids move toward the lumen of the SEMINIFEROUS TUBULES, they undergo extensive structural changes including the loss of cytoplasm, condensation of CHROMATIN into the SPERM HEAD, formation of the ACROSOME cap, the SPERM MIDPIECE and the SPERM TAIL that provides motility.",
    "arabic_definition": "الحيوان المنوي أو النُطْفة (الاسم العلمي: Sperm)،(1) هو الخلية التناسلية الذكريّة (الجاميت) في أشكالٍ متفاوتة الجاميتات من التكاثر الجنسي (الأشكال التي تتضمن خليةً تناسليةً أنثويةً أكبر وخلية ذكرية أصغر). تكون الحيوانات المنوية متحركةً مع ذيلٍ يُسمى السوط، حيث تُسمى في هذه المرحلة بالحيوانات المنوية المتحركة (الاسم العلمي: spermatozoa)، ولكنَّ بعض الطحالب الحمراء والفطريات تُنتج خلايًا منوية غير متحركةٍ تُسمى الأبواغ الذكرية (الاسم العلمي: spermatia).",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013094.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glyoxysomes",
    "term_en": "Glyoxysomes",
    "term_ar": "غلايوكسيزوم",
    "synonyms": [
      "Glyoxysome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Microbodies which occur in plant cells, and in some eukaryotic microorganisms, and which contain enzymes of the glyoxylate cycle. (Singleton and Stainsbury, Dictionary of Microbiology and Molecular Biology, 2nd ed)",
    "arabic_definition": "غلايوكسيزوم هي جسيمات تأكسدية متخصصة وجدت بالنباتات (ولا سيما في أنسجة تخزين الدهون في البذور النابتة) وايضا في الفطريات الخيطية. وتلك البذور تحتوي على الدهون وزيت الذرة وفول الصويا وعباد الشمس والفول السوداني واليقطين. (Glyoxysomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020676.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "macronucleus",
    "term_en": "Macronucleus",
    "term_ar": "نواة كبروية",
    "synonyms": [
      "Macronuclei"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The larger of two types of nuclei in ciliate protozoans. It is the transcriptionally active nucleus of the vegetative cells as distinguished from the smaller transcriptionally inert GERMLINE MICRONUCLEUS.",
    "arabic_definition": "النواة الكبروية (الإنجليزية: Macronucleus) أو أيضا النواة الكبيرة، هي أكبر نواة خلوية توجد عند الهدبيات مثل البراميسيوم. تتميز هذه النواة بكونها متعدد الصيغ الصبغية، وعلى عكس النوى الصغيرة، تخضع هذه النوات لانقسام مباشر دون المرور بانقسام متساو أثناء الانقسام الخلوي.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D048648.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "apicoplasts",
    "term_en": "Apicoplasts",
    "term_ar": "صانعة القمة",
    "synonyms": [
      "Apicoplast",
      "Apicomplexan Plastids",
      "Apicomplexan Plastid",
      "Plastid, Apicomplexan",
      "Plastids, Apicomplexan"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Non-photosynthetic plastids derived from RED ALGAE endosymbionts. They are found in species of the phylum APICOMPLEXA including PLASMODIUM MALARAIAE.",
    "arabic_definition": "صانعة القمة (الإنجليزية: Apicoplast) هي صانعة مُشتقة غير ضوئية التخليق، تُوجد عادةً في معقدات القمة، والتي تتضمن طفيليلات الملاريا مثل المتصورة المنجلية، ولا توجد في الأخرى مثل الكريبتوسبوريديوم. تنشئ صانعة القمة من الطحالب (هُناك جدل حول ما إذا كانت هذه الطحالب خضراء أو حمراء) ومن خلال النشوء التعايشي. (Apicoplasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063546.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stereocilia",
    "term_en": "Stereocilia",
    "term_ar": "هدب ساكن",
    "synonyms": [
      "Stereocilium",
      "Stereovilli",
      "Stereovillus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Mechanosensing organelles of hair cells which respond to fluid motion or fluid pressure changes. They have various functions in many different animals, but are primarily used in hearing.",
    "arabic_definition": "الأهداب الساكنة أو الأهداب الفراغية (الإنجليزية: Stereocilia) وتُسمى أيضًا الزغابات الساكنة (الإنجليزية: Stereovilli)، هيَ تحويراتٌ قميةٌ غيرُ متحركةٍ في الخلية، وتختلفُ عن الهدب أو الزغابات، ولكنها قريبةٌ من الزغابات.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059547.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "megaloblasts",
    "term_en": "Megaloblasts",
    "term_ar": "كرية حمراء ذات نوى",
    "synonyms": [
      "Megaloblast",
      "Nucleated red blood cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Red blood cell precursors, corresponding to ERYTHROBLASTS, that are larger than normal, usually resulting from a FOLIC ACID DEFICIENCY or VITAMIN B 12 DEFICIENCY.",
    "arabic_definition": "كريّة حمراء ذات نوى أو خلية دم حمراء ذات نواة أو كريّة حمراء منوّاه أو الحمراوية (الإنجليزية: Nucleated red blood cell) هي أحد خلايا الدم الحمراء لا زالت تحتفض بنواة الخلية. وهي خلية تسبق تكوين الخلية الشبكية وكرة الدم الحمراء. (Megaloblasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008534.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chromosomes",
    "term_en": "Chromosomes",
    "term_ar": "صبغي",
    "synonyms": [
      "Chromosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "In a prokaryotic cell or in the nucleus of a eukaryotic cell, a structure consisting of or containing DNA which carries the genetic information essential to the cell. (From Singleton &amp; Sainsbury, Dictionary of Microbiology and Molecular Biology, 2d ed)",
    "arabic_definition": "الصِبْغِيّ أو الصبغية (الجمع: صبغيات) (الإنجليزية: Chromosome) وتنقحر إلى الكرُومُوسُوم هي حزمة منظمة البناء والتركيب يتكون معظمها من حمض نووي ريبوزي منقوص الأكسجين (DNA) في الكائنات الحية، تقع في نواة الخلية . وهي عادة لا توجد من تلقاء نفسها، وإنما تقترن في العضويات حقيقيات النوى مع العديد من البروتينات الهيكلية تسمى هستون، وتقوم هذه البروتينات إلى جانب بروتينات أخرى مرافقة بعملية توضيب وطي لسلسلة الـ DNA كيلا تبقى مفرودة على شكل خيوط متشابكة. (Chromosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002875.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "centromere",
    "term_en": "Centromere",
    "term_ar": "قسيم مركزي",
    "synonyms": [
      "Centromeres"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The clear constricted portion of the chromosome at which the chromatids are joined and by which the chromosome is attached to the spindle during cell division.",
    "arabic_definition": "القُسَيمُ المَرْكَزِيّ أو الجُدَيْرة أو مركز الصبغي أو القطعة المركزية أو الجزء المركزي أو السنترومير (الإنجليزية: Centromere)، هو قسم الكرموسوم (الصبغي) المركزي يربط الكروماتيدات الأخوات، أولًا وصفه العالم الألماني والثر فليمنيغ بـالمضيق الأساسي. الآن العلماء يعتبرون إنه منطقة صبغية متخصِّصة.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002503.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "centrioles",
    "term_en": "Centrioles",
    "term_ar": "مريكز",
    "synonyms": [
      "Centriole"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Self-replicating, short, fibrous, rod-shaped organelles. Each centriole is a short cylinder containing nine pairs of peripheral microtubules, arranged so as to form the wall of the cylinder.",
    "arabic_definition": "الوَكْتَة أو المُرَيكز أو الرَيْكزان أو سنتريول في علم الأحياء الخلوي هو عُضَية خلوية أسطوانية الشكل تظهر على شكل ازواج، تتكون أساسا من بروتين يسمى تيوبيولين. توجد المريكزات في معظم الخلايا حقيقيات النوى. (Centrioles)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002502.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lysosomes",
    "term_en": "Lysosomes",
    "term_ar": "جسيم حال",
    "synonyms": [
      "Lysosome",
      "Autolysosomes",
      "Autolysosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of morphologically heterogeneous cytoplasmic particles in animal and plant tissues characterized by their content of hydrolytic enzymes and the structure-linked latency of these enzymes. The intracellular functions of lysosomes depend on their lytic potential. The single unit membrane of the lysosome acts as a barrier between the enzymes enclosed in the lysosome and the external substrate. The activity of the enzymes contained in lysosomes is limited or nil unless the vesicle in which they are enclosed is ruptured or undergoes MEMBRANE FUSION. (From Rieger et al., Glossary of Genetics: Classical and Molecular, 5th ed).",
    "arabic_definition": "اليَحْلُول أو الجسم الحال أو المحلل أو الجسيم الحال (الإنجليزية: Lysosome) عبارة عن عضيات موجودة في الخلايا الحيوانية تحتوي على إنزيمات هاضمة تقوم بتفكيك الزائد أو الهالك من العضيات والغذاء والفيروسات والبكتيريا. ويحيط بالجسم الحال غشاء له دور هام جدا في عمل العضيات. (Lysosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008247.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "organelles",
    "term_en": "Organelles",
    "term_ar": "عضية خلوية",
    "synonyms": [
      "Organelle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Specific particles of membrane-bound organized living substances present in eukaryotic cells, such as the MITOCHONDRIA; the GOLGI APPARATUS; ENDOPLASMIC RETICULUM; LYSOSOMES; PLASTIDS; and VACUOLES.",
    "arabic_definition": "العُضَيّة أو العُضَيّ (جمع كلا الكلمتين عُضَيَّات) أو العُضَيات الخَلويّة أو العُضات الغِشائية (الإنجليزية: organelle) هي الأجزاء أو الأجسام الحية الموجودة في سيتوبلازم الخلية حقيقية النواة بشكل عام تشمل كل من الشبكة البلازمية الداخلية وجهاز جولجي، المايتوكندريا، البلاستيدات، الجسيمات الحالة، هيكل الخلية، الجسيم الحركي والفجوات. لا يمكن رؤيتها إلا بالمجهر الإلكتروني. (Organelles)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015388.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ribosomes",
    "term_en": "Ribosomes",
    "term_ar": "ريبوسوم",
    "synonyms": [
      "Ribosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Multicomponent ribonucleoprotein structures found in the CYTOPLASM of all cells, and in MITOCHONDRIA, and PLASTIDS. They function in PROTEIN BIOSYNTHESIS via GENETIC TRANSLATION.",
    "arabic_definition": "الريبوسوم أو الرِّيباسة (الإنجليزية: Ribosome) هو أحد عضيات الخلايا الحية، وهو مؤلف من بروتينات ريبوسومية ورنا ريبوسومي. مهمته الأساسية ترجمة الرنا المرسال إلى سلاسل ببتيدية تترابط فيما بعد لتشكيل البروتينات. (Ribosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012270.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibroblasts",
    "term_en": "Fibroblasts",
    "term_ar": "أرومة ليفية",
    "synonyms": [
      "Fibroblast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Connective tissue cells which secrete an extracellular matrix rich in collagen and other macromolecules.",
    "arabic_definition": "الأرومة الليفية وتسمى أيضًا خلية مولدة ليفية، كما سُميت قديمًا خلية النسيج الضام (الإنجليزية: Fibroblast)، هي نوع من الخلايا الحيويَّة ذات شكل مغزلي عادةً تقوم بتصنيع النسيح البيني خارج الخلية والكولاجين، وتنتج الإطار الهيكلي (اللحمة) للأنسجة الحيوانية، وتلعب دورًا هامًا في التئام الجروح. تُعد الأرومات الليفية أكثر الخلايا شيوعًا في النسيج الضام لدى البشر والحيوانات. (Fibroblasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005347.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "centrosome",
    "term_en": "Centrosome",
    "term_ar": "جسيم مركزي",
    "synonyms": [
      "Centrosomes",
      "Pericentriolar Region",
      "Pericentriolar Regions",
      "Region, Pericentriolar",
      "Pericentriolar Matrix",
      "Matrix, Pericentriolar",
      "Pericentriolar Matrices",
      "Pericentriolar Material"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An organelle near the nucleus of the cell consisting (in animals and organisms that have CILIA) of two CENTRIOLES, and the surrounding pericentriolar material. It functions as the primary MICROTUBULE-ORGANIZING CENTER during the eukaryotic CELL CYCLE (https://doi.org/10.1038/nrm2180).",
    "arabic_definition": "في علم الأحياء الخلوي، الجسيم المركزي (الإنجليزية: Centrosome) هو عضو هيولي صغير موجود في معظم وليس كل الخلايا الحيوانية، وهو في العادة قريب من النواة إلى جانب المركز الهندسي للخلية، ويظهر كمنطقة كروية بهيولي صافية تحتوي في مركزها على نويتين، لها ألفة خاصة هيماتوكسلين الحديد (هايدن هاين) وخلال الانقسام فإن الجسيم المركزي ينقسم إلى جزأين يهاجران إلى الأقطاب المتقابلة للمغزل اللالوني، وهناك يحاط كل جزء بمنطقة واسعة صافية تسمى الكرة المركزية التي بدورها تندمج خارجيا إلى الكرة النجمية، والمعرفة حول التركيب الكيماوي، أو الوظيفة الدقيقة لهذه الهياكل المختلفة ما زالت قليلة. حيث يوجد في الخلية الحيوانية.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018385.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microvilli",
    "term_en": "Microvilli",
    "term_ar": "زغيبة",
    "synonyms": [
      "Microvillus",
      "Brush Border",
      "Border, Brush",
      "Borders, Brush",
      "Brush Borders",
      "Striated Border",
      "Borders, Striated",
      "Border, Striated"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Minute projections of cell membranes which greatly increase the surface area of the cell.",
    "arabic_definition": "الزُّغَيْبَة (الإنجليزية: Microvillus) هي السبب في تمييز السطوح الخارجية للخلايا، وتقدم خدمة تكبير وتضخيم السطح الخارجي للخلية عن طريق النسيج الطلائي الماص (الظهارة). و تتواجد على الجانب القمّي لخلية الظهارة. (Microvilli)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008871.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurilemma",
    "term_en": "Neurilemma",
    "term_ar": "غمد الليف العصبي",
    "synonyms": [
      "Neurolemma",
      "Schwann Sheath",
      "Sheath, Schwann"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The outermost cytoplasmic layer of the SCHWANN CELLS covering NERVE FIBERS.",
    "arabic_definition": "غمد الليف العصبي (الإنجليزية: Neurolemma) أو غلاف الليفة العصبية أو غمد شفان/شوان (الإنجليزية: Sheath of Schwann) هو الطبقة السيتوبلازمية المُنَوَّاة الخارجية من خلايا شوان (وتسمى أيضا neurilemmocytes) والذي يحيط بمحور عصبي من الخلايا العصبية ويشكل الطبقة الخارجية من الألياف العصبية في الجهاز العصبي المحيطي. يقوم غمد الميالين بدعم غمد الليف العصبي من الأسفل. (Neurilemma)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009441.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "macrophages",
    "term_en": "Macrophages",
    "term_ar": "خلية بلعمية كبيرة",
    "synonyms": [
      "Monocyte-Derived Macrophages",
      "Macrophage",
      "Macrophages, Monocyte-Derived",
      "Macrophage, Monocyte-Derived",
      "Monocyte-Derived Macrophage",
      "Bone Marrow-Derived Macrophages",
      "Bone Marrow-Derived Macrophage"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The relatively long-lived phagocytic cell of mammalian tissues that are derived from blood MONOCYTES. Main types are PERITONEAL MACROPHAGES; ALVEOLAR MACROPHAGES; HISTIOCYTES; KUPFFER CELLS of the liver; and OSTEOCLASTS. They may further differentiate within chronic inflammatory lesions to EPITHELIOID CELLS or may fuse to form FOREIGN BODY GIANT CELLS or LANGHANS GIANT CELLS. (from The Dictionary of Cell Biology, Lackie and Dow, 3rd ed.)",
    "arabic_definition": "البَلْعَم أو بَلْعَمٌ كُبْرِيّ أو مُلْتَقِمَةٌ كَبِيرَة أو بَلْعَميَّة أو خَلِيَّةٌ بَلْعَمِيَّة كَبيرة أو الخلايا الأكولة الكبيرة أو الخلايا البلعمية الكبيرة أو الخلايا الأكولة (البالعات الكبيرة، البلعميات الكبرى) (الإنجليزية: Macrophage) خلايا مشتقة من الخلايا الوحيدة تساهم في المناعة اللانوعية والمناعة الخلوية النوعية عند الفقاريات. تنتمي البلاعم والخلايا الوحيدة إلى البلعميات. (Macrophages)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008264.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chromatids",
    "term_en": "Chromatids",
    "term_ar": "كروماتيد",
    "synonyms": [
      "Chromatid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Either of the two longitudinally adjacent threads formed when a eukaryotic chromosome replicates prior to mitosis. The chromatids are held together at the centromere. Sister chromatids are derived from the same chromosome. (Singleton &amp; Sainsbury, Dictionary of Microbiology and Molecular Biology, 2d ed)",
    "arabic_definition": "الكروماتيدي أو شِقُّ الصبغي أو الشِّقُّ الصِّبْغِيّ (بالإنجليزية: Chromatid) وتُنقحر إلى كروماتيد هو نسخة واحدة من صبغي مضاعف في نواة الخلية، يتكون من شريطين مرتبطين ببعضهما عبر منطقة تُدعى الجزء المركزي (Centromere). وتنفصل هذه الكروماتيدات عن بعضهما طوليًا خلال المراحل الاخيرة لانقسام الخلية لتصبح صبغيات فردية. (Chromatids)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002842.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thylakoids",
    "term_en": "Thylakoids",
    "term_ar": "ثايلاكويد",
    "synonyms": [
      "Thylakoid",
      "Grana",
      "Thylakoid Membrane",
      "Membranes, Thylakoid",
      "Membrane, Thylakoid",
      "Thylakoid Membranes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Membranous cisternae of the CHLOROPLAST containing photosynthetic pigments, reaction centers, and the electron-transport chain. Each thylakoid consists of a flattened sac of membrane enclosing a narrow intra-thylakoid space (Lackie and Dow, Dictionary of Cell Biology, 2nd ed). Individual thylakoids are interconnected and tend to stack to form aggregates called grana. They are found in cyanobacteria and all plants.",
    "arabic_definition": "الثايلاكويد أو التيلاكويد (الإنجليزية: Thylakoid) هو مجموعة من الأغشية موجودة عند البكتيريا الزرقاء وفي البلاستيدات الخضراء، وهي المكان الذي تتم فيه التفاعلات الكيميائية الضوئية أثناء عملية التمثيل الضوئي. «الثايلكويد» في الأصل هو اسم مشتق من المصطلح اليوناني ثايلوكيس، الذي يعني حرفيا «الكيس». (Thylakoids)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020524.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eosinophils",
    "term_en": "Eosinophils",
    "term_ar": "خلية حمضية",
    "synonyms": [
      "Eosinophil"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Granular leukocytes with a nucleus that usually has two lobes connected by a slender thread of chromatin, and cytoplasm containing coarse, round granules that are uniform in size and stainable by eosin.",
    "arabic_definition": "الخلايا الحمضية أو اليوزينيات أو أقل شيوعًا الحَمِضات (بالإنجليزية: Eosinophil) أحد أنواع كريات الدم البيضاء وأحد مكونات جهاز المناعة تشكل نسبة 2-4 % من كريات الدم البيضاء و تكون نواتها على شكل فصين صغيرين وتحتوي على حبيبات لذلك فهي تصنف من ضمن خلايا الدم البيضاء ذات الحبيبات (المحببة) و يبرز دورها الدفاعي عند الإصابة بالطفيليات. تسيطر مع الخلايا البدينة والخلايا القاعدية على الآليات المرتبطة بالحساسية والربو فلها دور في إحداث تفاعلات الحساسية. (Eosinophils)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004804.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphocytes",
    "term_en": "Lymphocytes",
    "term_ar": "خلية لمفاوية",
    "synonyms": [
      "Lymphocyte",
      "Lymphoid Cells",
      "Cell, Lymphoid",
      "Cells, Lymphoid",
      "Lymphoid Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "White blood cells formed in the body's lymphoid tissue. The nucleus is round or ovoid with coarse, irregularly clumped chromatin while the cytoplasm is typically pale blue with azurophilic (if any) granules. Most lymphocytes can be classified as either T or B (with subpopulations of each), or NATURAL KILLER CELLS.",
    "arabic_definition": "الخلية اللمفية أو الخلية اللمفاوية هي أحد أنواع الخلايا البيضاء، ويتم تقسيمها إلى لمفاويات كبيرة ولمفاويات صغيرة. تسمى اللمفاويات الكبيرة بالقاتلة الطبيعية وتتلخص وظيفتها في القضاء على الفيروسات والخلايا السرطانية ؛ أما الخلايا اللمفاوية الصغيرة فيتم تقسيمها إلى خلايا تائية و لمفاويات بائية، ومن وظائفها إنتاج الأضداد وتنظيم نمو الخلايا المناعية الأخرى. (Lymphocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008214.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trichomes",
    "term_en": "Trichomes",
    "term_ar": "ترخوم",
    "synonyms": [
      "Trichome",
      "Indumentum",
      "Indumentums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hair-like extensions on specialized epidermal surfaces of plants which protect against damage from insects, animals, light degradation and fungal infection. Trichomes may also occur on certain unicellular EUKARYOTES.",
    "arabic_definition": "التَّرْخُوم أو المراشف الشَّعْريةٌ هي نامية شعرية أدمة النباتات والطحالب والأشنات وبعض الطلائعيات. لها أنواعٌ مختلفة حسب هيكلها ووظيفتها. (Trichomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064201.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myofibrils",
    "term_en": "Myofibrils",
    "term_ar": "لييفة عضلية",
    "synonyms": [
      "Myofibril",
      "Myofilaments",
      "Myofilament"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The long cylindrical contractile organelles of STRIATED MUSCLE cells composed of ACTIN FILAMENTS; MYOSIN filaments; and other proteins organized in arrays of repeating units called SARCOMERES .",
    "arabic_definition": "اللييفة العضلية (الإنجليزية: myofibril) هي وحدة مدورة الشكل من الليف العضلي. تتألف العضلات من الخلايا العضلية التي تعرف باسم الألياف العضلية في نسيج العضلات المخططة وهذه الخلايا تحتوي على اللييفات العضلية. (Myofibrils)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009210.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sarcomeres",
    "term_en": "Sarcomeres",
    "term_ar": "ساركومير",
    "synonyms": [
      "Sarcomere"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The repeating contractile units of the MYOFIBRIL, delimited by Z bands along its length.",
    "arabic_definition": "القُسَيْم العضلي (الإنجليزية: Sarcomere) (نقحرة: ساركومير) هو مصطلح يعود إلى الوحدة الوظيفية للييفة العضلية. ويوجد القُسَيم العضلي في اللييفة العضلية للعضلات الهيكلية المخططة والعضلات القلبية (بينما العضلات الملساء لا تترتب بهذه الطريقة). (Sarcomeres)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012518.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phagocytes",
    "term_en": "Phagocytes",
    "term_ar": "خلية بلعمية",
    "synonyms": [
      "Phagocyte",
      "Phagocytic Cell",
      "Cell, Phagocytic",
      "Cells, Phagocytic",
      "Phagocytic Cells"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cells that can carry out the process of PHAGOCYTOSIS.",
    "arabic_definition": "الخلية البالعة أو الخلية البلعمية أو الخلية الأكولة (الإنجليزية: Phagocyte) هي خلية حية تحمي الجسم عن طريق ابتلاع وتحطيم الجسيمات الدخيلة الغريبة عن الجسم، مثل الكائنات الدقيقة وحطامها بعملية تسمى البلعمة. وهي ضرورية لمكافحة العدوى والمناعة اللاحقة. (Phagocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010586.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "monocytes",
    "term_en": "Monocytes",
    "term_ar": "خلية وحيدة",
    "synonyms": [
      "Monocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Large, phagocytic mononuclear leukocytes produced in the vertebrate BONE MARROW and released into the BLOOD; contain a large, oval or somewhat indented nucleus surrounded by voluminous cytoplasm and numerous organelles.",
    "arabic_definition": "وحيدات النوى (الإنجليزية: Monocyte) هي إحدى أنواع الكريات البيضاء أو خلايا الدم البيضاء. يُعتبر حجمها الأكبر بين أنواع الكريات البيض الأخرى وتتميز بقدرتها على التمايز إلى الخلايا البلعمية الكبيرة والخلايا المتغصنة التقليدية. (Monocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009000.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endosomes",
    "term_en": "Endosomes",
    "term_ar": "جسيم داخلي",
    "synonyms": [
      "Endosome",
      "Receptosomes",
      "Receptosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cytoplasmic vesicles formed when COATED VESICLES shed their CLATHRIN coat. Endosomes internalize macromolecules bound by receptors on the cell surface.",
    "arabic_definition": "الجسيم الداخلي أو جسم داخلي (الاسم العلمي: Endosome) هو حجرة محاطة بغشاء داخل الخلايا حقيقية النوى. وهو عبارة عن عضية ضمن مسار النقل الالتقامي الغشائي الذي ينشأ من شبكة مفروق غولجي. (Endosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011992.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroglia",
    "term_en": "Neuroglia",
    "term_ar": "خلية دبقية",
    "synonyms": [
      "Neuroglias",
      "Glia",
      "Glias",
      "Glial Cells",
      "Cell, Glial",
      "Glial Cell",
      "Neuroglial Cells",
      "Cell, Neuroglial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The non-neuronal cells of the nervous system. They not only provide physical support, but also respond to injury, regulate the ionic and chemical composition of the extracellular milieu, participate in the BLOOD-BRAIN BARRIER and BLOOD-RETINAL BARRIER, form the myelin insulation of nervous pathways, guide neuronal migration during development, and exchange metabolites with neurons. Neuroglia have high-affinity transmitter uptake systems, voltage-dependent and transmitter-gated ion channels, and can release transmitters, but their role in signaling (as in many other functions) is unclear.",
    "arabic_definition": "الخلايا الدبقية، تُدعى أيضًا خلاية عصبية دبقية، هي خلايا غير عصبونية موجودة في الجهاز العصبي المركزي (الدماغ والنخاع الشوكي) والجهاز العصبي المحيطي، إذ لا تمتلك هذه الخلايا القدرة على إنتاج الدفعات الكهربائية. تعمل الخلايا الدبقية على الحفاظ على الاستتباب الداخلي، وتشكيل الميالين في الجهاز العصبي المحيطي وتوفير الدعم والحماية للعصبونات. (Neuroglia)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009457.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "desmosomes",
    "term_en": "Desmosomes",
    "term_ar": "جسيم رابط",
    "synonyms": [
      "Desmosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of junction that attaches one cell to its neighbor. One of a number of differentiated regions which occur, for example, where the cytoplasmic membranes of adjacent epithelial cells are closely apposed. It consists of a circular region of each membrane together with associated intracellular microfilaments and an intercellular material which may include, for example, mucopolysaccharides. (From Glick, Glossary of Biochemistry and Molecular Biology, 1990; Singleton &amp; Sainsbury, Dictionary of Microbiology and Molecular Biology, 2d ed)",
    "arabic_definition": "الجسيم الرابط (الإنجليزية: Desmosome) أو الديزموسوم، (وتنطق ;) والمعروف أيضا باسم البقعة الملتصقة أو دسموسوم، هو بِنية خلوية متخصصة في التصاق الخلايا إلى بعضها. وهو نوع من المركبات الاتصالية، التي تشبه البقع المرتبة عشوائيا على جانبي الغشاء الخلوي من الخارج. (Desmosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003896.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "periplasm",
    "term_en": "Periplasm",
    "term_ar": "الجبلة المحيطية",
    "synonyms": [
      "Periplasms",
      "Periplasmic Space",
      "Periplasmic Spaces",
      "Space, Periplasmic",
      "Spaces, Periplasmic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The space between the inner and outer membranes of a cell that is shared with the cell wall.",
    "arabic_definition": "الجبلة المحيطية هي مادة بيوخلوية تملأ المسافة بين الغشاء الداخلي والغشاء الخارجي للبكتيريا. تسمى المسافة المحيطة بالجبلة المحيطية في البكتيريا سالبة الجرام بمسافة الجبلة. (Periplasm)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019897.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blastomeres",
    "term_en": "Blastomeres",
    "term_ar": "قسيم أريمي",
    "synonyms": [
      "Blastomere",
      "Blastocytes",
      "Blastocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Undifferentiated cells resulting from cleavage of a fertilized egg (ZYGOTE). Inside the intact ZONA PELLUCIDA, each cleavage yields two blastomeres of about half size of the parent cell. Up to the 8-cell stage, all of the blastomeres are totipotent. The 16-cell MORULA contains outer cells and inner cells.",
    "arabic_definition": "القسيم الأريمي أو خلية جنينية أولية أو بلاستومير في علم الأحياء هو نوع الخلية الذي ينتج عن انقسام اللاقحة بعد التخصيب، وهو جزء أساسي من تشكيل الأريمة (المرحلة الأولى لتكوين الجنين). (Blastomeres)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001757.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adipocytes",
    "term_en": "Adipocytes",
    "term_ar": "خلية شحمية",
    "synonyms": [
      "Adipocyte",
      "Fat Cells",
      "Cell, Fat",
      "Cells, Fat",
      "Fat Cell",
      "Lipocytes",
      "Lipocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cells in the body that store FATS, usually in the form of TRIGLYCERIDES. WHITE ADIPOCYTES are the predominant type and found mostly in the abdominal cavity and subcutaneous tissue. BROWN ADIPOCYTES are thermogenic cells that can be found in newborns of some species and hibernating mammals.",
    "arabic_definition": "الخلايا الشحمية (الإنجليزية: lipocytes) والتي تعرف أيضا باسم الخلايا الدهنية هي الخلايا التي تشكل أساسا الأنسجة الدهنية وهي خلايا متخصصة في تخزين الطاقة والدهون. يتم اشتقاق الخلايا الشحمية من الخلايا الجذعية المتعلقة باللحمة المتوسطة التي على تكوين الخلايا الشحمية من خلال عملية تكوين الشحم (الإنجليزية: adipogenesis). (Adipocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017667.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "podocytes",
    "term_en": "Podocytes",
    "term_ar": "خلية رجلاء",
    "synonyms": [
      "Podocyte",
      "Epithelial Cells, Glomerular Visceral",
      "Glomerular Visceral Epithelial Cells",
      "Visceral Epithelial Cells, Glomerular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Highly differentiated epithelial cells of the visceral layer of BOWMAN CAPSULE of the KIDNEY. They are composed of a cell body with major CELL SURFACE EXTENSIONS and secondary fingerlike extensions called pedicels. They enwrap the KIDNEY GLOMERULUS capillaries with their cell surface extensions forming a filtration structure. The pedicels of neighboring podocytes interdigitate with each other leaving between them filtration slits that are bridged by an extracellular structure impermeable to large macromolecules called the slit diaphragm, and provide the last barrier to protein loss in the KIDNEY.",
    "arabic_definition": "الخلية الرجلاء أو (خلية ظهارية باطنية) تكون غطاء غير مكتمل للشعيرات الدموية في كبيبات الكلوة (محفظة بومان). محفظة بومان ترشح الدم، حيث تمنع جزيئات كبيرة مثل البروتينات من الدخول أما الجزيئات الصغيرة مثل الماء، الأملاح (المعادن) والجلوكوز يتم ترشيحها في المرحلة الأولى من تكوين البول. (Podocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050199.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microsomes",
    "term_en": "Microsomes",
    "term_ar": "ميكروسوم",
    "synonyms": [
      "Microsome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Artifactual vesicles formed from the endoplasmic reticulum when cells are disrupted. They are isolated by differential centrifugation and are composed of three structural features: rough vesicles, smooth vesicles, and ribosomes. Numerous enzyme activities are associated with the microsomal fraction. (Glick, Glossary of Biochemistry and Molecular Biology, 1990; from Rieger et al., Glossary of Genetics: Classical and Molecular, 5th ed)",
    "arabic_definition": "في بيولوجيا الخليّة، الميكروسومات عبارة عن قطع غير متجانسة تشبه الحويصلة، يبلغ قطرها (20-200 نانوميتر تقريبًا)، أُعيد تشكيلها من قطع الشبكة الإندوبلازميّة، عندما فُكِّكَت الخلايا حقيقيّة النّوى وفُحصت في المختبر؛ وُجد أنّ الميكروسومات لا تتواجد في الخليّة الحيّة السّليمة. يمكن للميكروسومات أن تتركّز وتفصل عن الحطام الخلوي الآخر عن طريق عملية الطرد المركزي التّفاضليّ.ترسّب الخلايا غير المتكسّرة والنّواة والمايتوكندريا عند g10,000، بينما تظلّ الإنزيمات القابلة للذّوبان والشبكة الإندوبلازمية المجزّأة، التي تحتوي على السيتوكروم بي450، في المحلول (g هي رمز يشير إلى تسارع الجاذبيّة الأرضيّة).عند g100,000، يمكن تحقيقه من خلال دوران أسرع لجهاز الطرد المركزي، وتخرج رواسب الشبكة الإندوبلازميّة من المحلول على شكل حبيبات ولكن تظلّ الإنزيمات القابلة للذوبان في المادّة الطافية. (Microsomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008861.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glycocalyx",
    "term_en": "Glycocalyx",
    "term_ar": "كأس سكري",
    "synonyms": [
      "Cell Coat",
      "Cell Coats",
      "Coat, Cell",
      "Coats, Cell",
      "Glycocalix"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The carbohydrate-rich zone on the cell surface. This zone can be visualized by a variety of stains as well as by its affinity for lectins. Although most of the carbohydrate is attached to intrinsic plasma membrane molecules, the glycocalyx usually also contains both glycoproteins and proteoglycans that have been secreted into the extracellular space and then adsorbed onto the cell surface. (Alberts et al., Molecular Biology of the Cell, 3d ed, p502)",
    "arabic_definition": "الكأس السكري أو الكنان السكري (الإنجليزية: Glycocalyx) ويعرف أيضًا بالنسيج الغشائي المحيط بالخلية، وهو عبارة عن غلاف بروتين سكري وشحم سكري يحيط بأغشية الخلايا لبعض البكتيريا والظهارة والخلايا الأخرى. في عام 1970 اكتشف مارتينيز وبالومو الغلاف الخلوي في الخلايا الحيوانية والذي يُعرف باسم الكأس السكري.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019276.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "astrocytes",
    "term_en": "Astrocytes",
    "term_ar": "خلية نجمية",
    "synonyms": [
      "Astrocyte",
      "Astroglia Cells",
      "Astroglia Cell",
      "Cell, Astroglia",
      "Astroglial Cells",
      "Astroglial Cell",
      "Cell, Astroglial",
      "Astroglia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of large neuroglial (macroglial) cells in the central nervous system - the largest and most numerous neuroglial cells in the brain and spinal cord. Astrocytes (from star cells) are irregularly shaped with many long processes, including those with end feet which form the glial (limiting) membrane and directly and indirectly contribute to the BLOOD-BRAIN BARRIER. They regulate the extracellular ionic and chemical environment, and reactive astrocytes (along with MICROGLIA) respond to injury.",
    "arabic_definition": "تُعد الخلايا النجمية (من اليونانية القديمة ἄστρον، ástron، أي «نجمة» +، kútos، أي «تجويف»، أو «خلية»)، والمعروفة أيضًا إجمالًا باسم الدبق نجمي الخلايا، خلايا دبقية مميزة نجمية الشكل، توجد في الدماغ والحبل الشوكي. تؤدي هذه الخلايا العديد من الوظائف، بما فيها الدعم الكيميائي الحيوي للخلايا البطانية التي تشكل الحاجز الدموي الدماغي، وتوفير العناصر الغذائية للأنسجة العصبية، والحفاظ على توازن الأيونات خارج الخلية، وتنظيم تدفق الدم في المخ، إضافةً إلى دورها في عمليات الإصلاح والتندب في الدماغ والنخاع الشوكي بعد العدوى والإصابات الرضية. (Astrocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001253.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spermatids",
    "term_en": "Spermatids",
    "term_ar": "طليعة منوية",
    "synonyms": [
      "Spermatid",
      "Spermatoblasts",
      "Spermatoblast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Male germ cells derived from the haploid secondary SPERMATOCYTES. Without further division, spermatids undergo structural changes and give rise to SPERMATOZOA.",
    "arabic_definition": "النطفة الأرومية أو الطلائع المنوية أو النطفة البدئية (نطيفة) (الإنجليزية: spermatid) هو مصطلح يشير إلى عروس أرومية gametid مذكرة أحادية الصيغة haploid تنتج من انقسام الخلايا النطفية spermatocyte الثانوية. وكنتيجة للانتصاف meiosis، تصبح كل نطفة أرومية تحوي نصف المادة الوراثية التي تملكها الخلية النطفية الأولية الأصلية. (Spermatids)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013087.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteocytes",
    "term_en": "Osteocytes",
    "term_ar": "خلية عظمية",
    "synonyms": [
      "Osteocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Mature osteoblasts that have become embedded in the BONE MATRIX. They occupy a small cavity, called lacuna, in the matrix and are connected to adjacent osteocytes via protoplasmic projections called canaliculi.",
    "arabic_definition": "الخلية العظمية (الإنجليزية: Osteocyte) هي من نوعية خلايا العظم نجمية الشكل، وهي الخلية الشائعة الأكثر وجوداً في النسيج العظمي مكتمل النمو، ويمكن للخلية العظمية أن تعيش بطول عمر الكائن الحيّ نفسه، حيث أن عمر الخلية المتوسط هو 25 عاماً، ويصل عددها في جسم الإنسان البالغ حوالي 42 مليار خلية عظمية. والخلايا العظمية هي أساساً أرومة ليفية متخصّصة. (Osteocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010011.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hybridomas",
    "term_en": "Hybridomas",
    "term_ar": "ورم هجين",
    "synonyms": [
      "Hybridoma",
      "Hybridoma technology"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cells artificially created by fusion of activated lymphocytes with neoplastic cells. The resulting hybrid cells are cloned and produce pure MONOCLONAL ANTIBODIES or T-cell products, identical to those produced by the immunologically competent parent cell.",
    "arabic_definition": "خلايا الورم الهجين (الإنجليزية: Hybridoma) هي خلايا تم هندستها لإنتاج نوع معين من الأضداد بكميات كبيرة. من أجل الحصول على ضد محدد لحاتمة (epitope) من المستضد، يجب عزل الخلايا اللمفاوية lymphocytes التي تنتج الضد، ويتم تخليدها بدمجها مع خلية سرطانية. (Hybridomas)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006825.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sarcolemma",
    "term_en": "Sarcolemma",
    "term_ar": "غشاء الليف العضلي",
    "synonyms": [
      "Sarcolemmas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The excitable plasma membrane of a muscle cell. (Glick, Glossary of Biochemistry and Molecular Biology, 1990)",
    "arabic_definition": "غشاء الليف العضلي (Sarcolemma) هو غشاء الخلية لخلية الليف العضلي المخططة. وهي تتكون من غشاء بلازمي والمتكون من طبقتين من الدهون وغلاف خارجي يحتوي على طبقة رقيقة من مواد عديدة السكريات (كأس سكري) التي هي باتصال مع الغشاء القاعدي، الذي يحتوي على العديد من ألياف الكولاجين الرقيقة والبروتينات المتخصصة مثل laminin .",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012508.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ameloblasts",
    "term_en": "Ameloblasts",
    "term_ar": "أرومة الميناء",
    "synonyms": [
      "Ameloblast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cylindrical epithelial cells in the innermost layer of the ENAMEL ORGAN. Their functions include contribution to the development of the dentinoenamel junction by the deposition of a layer of the matrix, thus producing the foundation for the prisms (the structural units of the DENTAL ENAMEL), and production of the matrix for the enamel prisms and interprismatic substance. (From Jablonski's Dictionary of Dentistry, 1992)",
    "arabic_definition": "أرومة الميناء (الإنجليزية: Ameloblast، نقحرة: 'أميلوبلاست') هي الخلايا التي تتواجد أثناء نمو الأسنان فقط والتي تتحول فيما بعد إلى طبقة الميناء التي تشكل الطبقة الخارجية الصلبة من تاج السن والتي تُعرف بأقوى نسيج في جسم الإنسان. (Ameloblasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000565.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microglia",
    "term_en": "Microglia",
    "term_ar": "خلية دبقية صغيرة",
    "synonyms": [
      "Microglias",
      "Microglial Cell",
      "Cell, Microglial",
      "Microglial Cells"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The third type of glial cell, along with astrocytes and oligodendrocytes (which together form the macroglia). Microglia vary in appearance depending on developmental stage, functional state, and anatomical location; subtype terms include ramified, perivascular, ameboid, resting, and activated. Microglia clearly are capable of phagocytosis and play an important role in a wide spectrum of neuropathologies. They have also been suggested to act in several other roles including in secretion (e.g., of cytokines and neural growth factors), in immunological processing (e.g., antigen presentation), and in central nervous system development and remodeling.",
    "arabic_definition": "الخَلية الدِبقية الصَغيرة (الإنجليزية: Microglia) هي إحدى أنواع من الخلايا الدبقية الموجودة في الدماغ والحبل الشوكي. تكوِّن الخلايا الدبقية الصغيرة نحو 10 إلى 15% من الخلايا الموجودة في الدماغ.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017628.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "histiocytes",
    "term_en": "Histiocytes",
    "term_ar": "منسجة",
    "synonyms": [
      "Histiocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Macrophages found in the TISSUES, as opposed to those found in the blood (MONOCYTES) or serous cavities (SEROUS MEMBRANE).",
    "arabic_definition": "المُنسِجَة أو البلعم أو ملتقمة كبيرة بالأنسجة أو تكون الأنسجة (بالإنجليزية : Histiocyte) هي نوع من الخلايا الأكولة الكبيرة ،والتي هي خلايا دم بيضاء قادرة على بلع نفايات المواد أو السموم أو الأجسام الغريبة في الجسم وقد تكون خلية متغصنة كخلية لانغرهانس والمنسجات جزء من جملة البلعميات والوحيدات في الجهاز المناعي. تنشأ المنسجات من نخاع العظم من الخلايا الجذعية التي تتمايز وتنضج ومن ثم تهاجر من نخاع العظم إلى الدم كخلايا وحيدة النواة حيث تستمر في الدوران داخل الدم وتدخل الأعضاء المختلفة وهناك تتمايز إلى خلايا منسجة. (Histiocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006644.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pericytes",
    "term_en": "Pericytes",
    "term_ar": "خلايا حولية",
    "synonyms": [
      "Pericyte",
      "Rouget Cells",
      "Cells, Rouget"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Unique slender cells with multiple processes extending along the capillary vessel axis and encircling the vascular wall, also called mural cells. Pericytes are imbedded in the BASEMENT MEMBRANE shared with the ENDOTHELIAL CELLS of the vessel. Pericytes are important in maintaining vessel integrity, angiogenesis, and vascular remodeling.",
    "arabic_definition": "الخلايا الحولية (المعروفة سابقًا باسم خلايا روجيه) هي خلايا جدارية متعددة الوظائف للدورة الدموية الدقيقة تلتف حول الخلايا البطانية التي تبطن الشعيرات الدموية والأوردة في جميع أنحاء الجسم. يتم تضمين الحويصلات في الغشاء القاعدي، حيث تتواصل مع الخلايا البطانية لأصغر الأوعية الدموية في الجسم عن طريق الاتصال الجسدي المباشر وتأشير النظير الصماوي. (Pericytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020286.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phagosomes",
    "term_en": "Phagosomes",
    "term_ar": "جسم بلعمي",
    "synonyms": [
      "Phagosome",
      "Phagolysosomes",
      "Phagolysosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Membrane-bound cytoplasmic vesicles formed by invagination of phagocytized material. They fuse with lysosomes to form phagolysosomes in which the hydrolytic enzymes of the lysosome digest the phagocytized material.",
    "arabic_definition": "في علم الأحياء الخلوي، الجسيم البلعمي أو اليبلوع أو الفجوة الغذائية (الإنجليزية: Phagosome) هي الفجوة الناتجة من عملية إحاطة الجسم المراد ابتلاعه بواسطة الخلايا البلعمية. تتحد الجسيمات الحالة مع اليبلوع لهضم وتحليل الجسم الموجود في الداخل. (Phagosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010588.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microneme",
    "term_en": "Microneme",
    "term_ar": "خيط مكروي",
    "synonyms": [
      "Micronemes",
      "Sarconeme",
      "Sarconemes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Secretory organelle in the apical complex of parasitic phylum APICOMPLEXA (e.g., TOXOPLASMA GONDII). Microneme plays a role in junction formation between the parasite and the host cell by releasing micronemal proteins, which bind to receptors on the host cell surface enabling parasite attachment.",
    "arabic_definition": "الخيوط المِكْرَوِيّة (الإنجليزية: Micronemes) هي عضياتٌ إفرازية، تُوجد في طفيليات معقدات القمة. تقع الخيوط المكروية على الثلث القمي من جسم الأوليات، وهي مُحاطة بوحدة غشائية نموذجية.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000088462.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myoblasts",
    "term_en": "Myoblasts",
    "term_ar": "تكوين العضلات",
    "synonyms": [
      "Myoblast",
      "Muscle Cells, Embryonic",
      "Embryonic Muscle Cell",
      "Embryonic Muscle Cells",
      "Muscle Cell, Embryonic",
      "Muscle Cells, Precursor",
      "Muscle Cell, Precursor",
      "Precursor Muscle Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Embryonic (precursor) cells of the myogenic lineage that develop from the MESODERM. They undergo proliferation, migrate to their various sites, and then differentiate into the appropriate form of myocytes (MYOCYTES, SKELETAL; MYOCYTES, CARDIAC; MYOCYTES, SMOOTH MUSCLE).",
    "arabic_definition": "تكوين العضلات هو تكون الأنسجة العضلية، وخاصة في أثناء مرحلة التخلق المضغي (الجنيني). تتشكل الألياف العضلية بشكل عام من خلال اندماج الخلايا العضلية مع ألياف متعددة النواة تُسمى النبيبات العضلية. (Myoblasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D032446.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thymocytes",
    "term_en": "Thymocytes",
    "term_ar": "خلايا تيموسية",
    "synonyms": [
      "Thymocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "HEMATOPOIETIC PROGENITOR CELLS that have migrated to the THYMUS where they differentiate into T-LYMPHOCYTES. Thymocytes are classified into maturational stages based on the expression of CELL SURFACE ANTIGENS.",
    "arabic_definition": "الخلايا التيموسية، هي خلايا مناعية توجد في غدة التيموس (الغدة الصعترية)، قبل أن تنضج وتتتحول إلى خلية تائية. تنتج الخلايا التيموسية كخلايا جذعية في نقي العظم وتصل إلى الغدة الصعترية عن طريق الدم، وتخضع عملية تحول الخلايا التيموسية إلى خلايا تائية ناضجة إلى اختبارات سلبية وإيجابية. (Thymocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060168.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "costameres",
    "term_en": "Costameres",
    "term_ar": "كوستامير",
    "synonyms": [
      "Costamere"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "STRIATED MUSCLE cell components which anchor the MYOFIBRILS from the Z-bands to the SARCOLEMMA and EXTRACELLULAR MATRIX. Costameric proteins include the proteins of FOCAL ADHESIONS.",
    "arabic_definition": "يعتبر الكوستامير (الإنجليزية: Costamere) مكونًا بنيويًا وظيفيًا لخلايا العضلات المخططة، والذي يربط القُسَيم العضلي للعضلة بغشاء الخلية (أي الغمد الليف العضلي). الكوستاميرات هي تجميعات البروتين التي تتمركز محيطياً حول اللييفات العضلية، تمتد من الغمد الليفي العضلي من الخارج إلى الساركومير من الداخل. (Costameres)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054974.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leukocytes",
    "term_en": "Leukocytes",
    "term_ar": "خلية دم بيضاء",
    "synonyms": [
      "Leukocyte",
      "White Blood Corpuscles",
      "Blood Cells, White",
      "Blood Cell, White",
      "White Blood Cell",
      "Blood Corpuscles, White",
      "Blood Corpuscle, White",
      "Corpuscles, White Blood"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "White blood cells. These include granular leukocytes (BASOPHILS; EOSINOPHILS; and NEUTROPHILS) as well as non-granular leukocytes (LYMPHOCYTES and MONOCYTES).",
    "arabic_definition": "الخلية البيضاء أو خلية الدَّمِ البيضاء أو الكُرَيَّة البيضاء أو كُرَيَّة الدَّمِ البيضاء أو الكُرَيْضَة (لفظٌ منحوتٌ مِن: الكُرَيَّة البيضاء) هي إحدى خلايا الدم الرئيسية بالإضافة للخلية الحمراء والصفائح الدموية. الوظيفة الرئيسية لهذه الخلايا هي الدفاع عن الجسم ضد الأمراض المعدية ومولدات الضد، وهي جزء من الجهاز المناعي. (Leukocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007962.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cell-wall",
    "term_en": "Cell Wall",
    "term_ar": "جدار خلوي",
    "synonyms": [
      "Cell Walls",
      "Wall, Cell",
      "Walls, Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The outermost layer of a cell in most PLANTS; BACTERIA; FUNGI; and ALGAE. The cell wall is usually a rigid structure that lies external to the CELL MEMBRANE, and provides a protective barrier against physical or chemical agents.",
    "arabic_definition": "الجدار الخلوي أو جدار الخلية أو القَيْض هو جدار صلب غير حي لكنه مرن إلى حد ما. ويتكون جدار الخلية في النباتات الراقية من البروتوبلاست والمكون الرئيسي لمادة الجدار الخلوي هو السليلوز وهو هيكل شبكي من سلاسل السيليلوز من الغرويات المحبة للماء المتراصة لها القدرة على التشرب ومنفذ لكل من الماء والذائبات، وترسب مواد أخرى مع السليلوز في تكوين الجدار الخلوي حسب نوع الجدار ونوع وعمر الخلية النباتية فمثلًا في جدر الخلايا الابتدائية يشترك البكتين والهيمي سليلوز ويترسب اللجنين في أوعية الخشب والكيوتين في خلايا البشرة والسيوبرين في خلايا الفلين وتوجد مواد أخرى تدخل في تكوين الجدار مثل البروتينات والمواد الهلامية والصموغ التي تدخل في تكوين الجدار الثانوي، وهو يميز الخلية النباتية عن الخلية الحيوانية.حيث هذه الأخيرة (الحيوانية) لا يوجد بها جدار خلويّ لأن جسم الحيوان يضم عظامًا تقوّي وتبقي بنيته ثابتة ومستقيمة، ووجود الجدار الخلوي في الخلية النباتية لأنها لا تملك عظامًا في الأصل فيعمل الجدار الخلوي المكوّن من جدارين ابتدائي وثانوي على إبقاء النبتة واقفة وصامدة وليحميها بشكل أقوى، إن النباتات معرضة لعدة ظروف طبيعية قاسية فهي بحاجة لحماية موادها الداخلية التي هي أساس عملياتها الحيوية. (Cell Wall)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002473.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stem-cells",
    "term_en": "Stem Cells",
    "term_ar": "خلية جذعية",
    "synonyms": [
      "Cells, Stem",
      "Cell, Stem",
      "Stem Cell",
      "Mother Cells",
      "Cell, Mother",
      "Cells, Mother",
      "Mother Cell",
      "Progenitor Cells"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Relatively undifferentiated cells that retain the ability to divide and proliferate throughout postnatal life to provide progenitor cells that can differentiate into specialized cells.",
    "arabic_definition": "الخلايا الجذعية وتُسمّى أيضًا الخلايا الجذرية (الإنجليزية: Stem Cells) هي خلايا غير متخصصة ولكن يمكنها أن تتمايز إلى خلايا متخصصة، مع تميزها بقدرتها على الانقسام لتجدد نفسها باستمرار. يُعد اكتشاف الخلايا الجذعية من المكتشفات الطبية الحديثة نسبيًا، ويُعول عليها أن تكون مصدرًا مهمًّا في علاج الكثير من الأمراض المزمنة والإصابات الخطيرة، كأمراض الكلى والكبد والبنكرياس وإصابات الجهاز العصبي والجهاز العظمي.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013234.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heterochromatin",
    "term_en": "Heterochromatin",
    "term_ar": "كروماتين مغاير",
    "synonyms": [
      "Heterochromatins"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The portion of chromosome material that remains condensed and is transcriptionally inactive during INTERPHASE.",
    "arabic_definition": "كروماتين مغاير أو كروماتين غير متمائل هو حمض نووي موثق بشكل محكم وله أنواع مختلفة. منها كروماتين متغاير تأسيسي و كروماتين متغاير اختياري. (Heterochromatin)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006570.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pressoreceptors",
    "term_en": "Pressoreceptors",
    "term_ar": "مستقبل الضغط",
    "synonyms": [
      "Pressoreceptor",
      "Baroreceptors",
      "Baroreceptor",
      "Receptors, Stretch, Arterial",
      "Stretch Receptors, Arterial",
      "Arterial Stretch Receptor",
      "Arterial Stretch Receptors",
      "Receptor, Arterial Stretch"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Receptors in the vascular system, particularly the aorta and carotid sinus, which are sensitive to stretch of the vessel walls.",
    "arabic_definition": "مستقبلات الضغط (الإنجليزية: Baroreceptors أو baroceptors) هي أجهزة الاستشعار الموجودة في الأوعية الدموية في العديد من الثدييات. فهي نوع من من أنواع المستقبلات الميكانيكية (الإنجليزية: mechanoreceptor) ويتم من خلالها الكشف عن ضغط الدم المتدفق من خلالها، ويمكن إرسال رسائل إلى الجهاز العصبي المركزي إلى زيادة أو نقصان المقاومة المحيطية الكلية (الإنجليزية: total peripheral resistance) ونتاج القلب (الإنجليزية: Cardiac output) . (Pressoreceptors)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011311.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "reticulocytes",
    "term_en": "Reticulocytes",
    "term_ar": "خلية شبكية",
    "synonyms": [
      "Reticulocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Immature ERYTHROCYTES. In humans, these are ERYTHROID CELLS that have just undergone extrusion of their CELL NUCLEUS. They still contain some organelles that gradually decrease in number as the cells mature. RIBOSOMES are last to disappear. Certain staining techniques cause components of the ribosomes to precipitate into characteristic reticulum (not the same as the ENDOPLASMIC RETICULUM), hence the name reticulocytes.",
    "arabic_definition": "الخلية الشبكية هي خلية دم حمراء غير مكتملة النمو. تتكون الخلايا الشبكية وتنمو في نقي العظم خلال عملية تكوّن الكريات الحمر وتطرح إلى الدوران الدموي لتتم نضجها بعد حوالي اليوم إلى كرية حمراء فعالة وظيفياً. (Reticulocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012156.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "taste-buds",
    "term_en": "Taste Buds",
    "term_ar": "برعم ذوقي",
    "synonyms": [
      "Buds, Taste",
      "Bud, Taste",
      "Taste Bud"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Small sensory organs which contain gustatory receptor cells, basal cells, and supporting cells. Taste buds in humans are found in the epithelia of the tongue, palate, and pharynx. They are innervated by the CHORDA TYMPANI NERVE (a branch of the facial nerve) and the GLOSSOPHARYNGEAL NERVE.",
    "arabic_definition": "براعم التذوق (الإنجليزية: Taste bud) تحتوي على «خلايا مستقبلات الذَوق (الطعم)» (الإنجليزية: taste receptor cells) التي تُعرف أيضا باسم «خلايا التذوق» (الإنجليزية: gustatory cells). تقع «مستقبلات التذوق» حول الهياكل الصغيرة المعروفة باسم «الحليمات» (الإنجليزية: papillae) والموجودة فوق السطح العلوي للسان، الحنك الرخو، الجزء العلوي من المريء، الوجنة ولسان المزمار. (Taste Buds)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013650.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "keratinocytes",
    "term_en": "Keratinocytes",
    "term_ar": "خلية كيراتينية",
    "synonyms": [
      "Keratinocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Epidermal cells which synthesize keratin and undergo characteristic changes as they move upward from the basal layers of the epidermis to the cornified (horny) layer of the skin. Successive stages of differentiation of the keratinocytes forming the epidermal layers are basal cell, spinous or prickle cell, and the granular cell.",
    "arabic_definition": "الخلايا الكيراتينية هي أكثر الخلايا الموجودة في بشرة الجلد، وتمثل حوالي 90% من الخلايا الموجودة هناك. توجد الخلايا الكيراتينية في الطبقة القاعدية من البشرة، تسمى أحيانا بالخلايا القاعدية أو الخلايا الكيراتينية القاعدية. (Keratinocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015603.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polyribosomes",
    "term_en": "Polyribosomes",
    "term_ar": "عديد الريبوسومات",
    "synonyms": [
      "Polyribosome",
      "Polysomes",
      "Polysome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A multiribosomal structure representing a linear array of RIBOSOMES held together by messenger RNA; (RNA, MESSENGER); They represent the active complexes in cellular protein synthesis and are able to incorporate amino acids into polypeptides both in vivo and in vitro. (From Rieger et al., Glossary of Genetics: Classical and Molecular, 5th ed)",
    "arabic_definition": "عديد الريبوسومات (بالإنجليزية: polyribosome) أو عديد الجسيمات (بالإنجليزية: polysome) هو مجموعة من الريبوسومات متصلة بجزيء واحد من الرنا المرسال كالخرز في مسبحة. وهو عبارة عن مركب معقد من رنا مرسال واثنين أو أكثر من الريبوسومات التي تعمل على ترجمة تعليمات الرنا المرسال إلى عديدات الببتيد. (Polyribosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011132.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oligodendroglia",
    "term_en": "Oligodendroglia",
    "term_ar": "خلية دبقية قليلة التغصن",
    "synonyms": [
      "Oligodendrocytes",
      "Oligodendrocyte",
      "Interfascicular Oligodendroglia",
      "Interfascicular Oligodendroglias",
      "Oligodendroglia, Interfascicular",
      "Perivascular Oligodendroglia",
      "Oligodendroglia, Perivascular",
      "Perineuronal Oligodendroglia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A class of large neuroglial (macroglial) cells in the central nervous system. Oligodendroglia may be called interfascicular, perivascular, or perineuronal (not the same as SATELLITE CELLS, PERINEURONAL of GANGLIA) according to their location. They form the insulating MYELIN SHEATH of axons in the central nervous system.",
    "arabic_definition": "خَلية دِبقية قَليلة التَغصن (الإنجليزية: Oligodendrocyte) أو (الإنجليزية: oligodendroglia) هي نوع من الخلايا العصبية تتمثل وظائفها الرئيسية بتوفير الدعم والعزل للمحاوير في الجهاز العصبي المركزي لبعض الفقاريات، وهذا يكافئ وظيفة خلايا شوان في الجهاز العصبي المحيطي. تقوم الخلايا الدبقية قليلة التغصن بوظيفتها عن طريق تكوين غمد الميالين.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009836.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "megakaryocytes",
    "term_en": "Megakaryocytes",
    "term_ar": "خلية كبيرة النواة",
    "synonyms": [
      "Megakaryocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Very large BONE MARROW CELLS which release mature BLOOD PLATELETS.",
    "arabic_definition": "خلية نواء أو خلية كبيرة النواة (الإنجليزية: Megakaryocyte) هي إحدى خلايا نخاع العظم وهي المسؤولة عن إنتاج الصفائح الدموية اللازمة لعملية التخثر. وتشكل الخلية كبيرة النواة ما يقارب 1 لكل 1000 من خلايا نخاع العظم. (Megakaryocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008533.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mechanoreceptors",
    "term_en": "Mechanoreceptors",
    "term_ar": "مستقبل ميكانيكي",
    "synonyms": [
      "Mechanoreceptor",
      "Mechanoreceptor Cell",
      "Cell, Mechanoreceptor",
      "Cells, Mechanoreceptor",
      "Mechanoreceptor Cells",
      "Krause's End Bulbs",
      "Bulbs, Krause's End",
      "End Bulbs, Krause's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cells specialized to transduce mechanical stimuli and relay that information centrally in the nervous system. Mechanoreceptor cells include the INNER EAR hair cells, which mediate hearing and balance, and the various somatosensory receptors, often with non-neural accessory structures.",
    "arabic_definition": "المستقبل الميكانيكي هو عصبون حسي يستجيب للضغط الميكانيكي أو الانفتال. في الحالة الطبيعية، هناك أربعة أنواع رئيسية في جلد الثدييات العارية (الجرداء أو عديمة الشعر): الجسيمات الصفاحية (جسيمات باتشيني)، والجسيمات اللمسية (جسيمات ميسنر)، ونهايات ميركل، والجسيمات المنتفخة (جسيمات روفيني). (Mechanoreceptors)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008465.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "corticotrophs",
    "term_en": "Corticotrophs",
    "term_ar": "الخلايا الموجهة القشرية",
    "synonyms": [
      "Corticotroph",
      "Pituitary ACTH-Secreting Cells",
      "ACTH-Secreting Cell, Pituitary",
      "ACTH-Secreting Cells, Pituitary",
      "Pituitary ACTH-Secreting Cell",
      "Pituitary ACTH-Producing Cells",
      "ACTH-Producing Cell, Pituitary",
      "ACTH-Producing Cells, Pituitary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anterior pituitary cells that produce ADRENOCORTICOTROPHIC HORMONE.",
    "arabic_definition": "الخلايا الموجهة القشرية (أو corticotrophs) هي خلايا قاعدية في الغدة النخامية الأمامية تنتج مركب يدعى برو أبيوميلانوكورتين POMC والذي ينتج عنه الهرمون الموجه لقشر الكظر (ACTH)، وبيتا ليبوتروبين، وهرمون تحفيز الخلايا الصباغية (MSH). تتحفز هذه الخلايا عن طريق إفراز هرمون الكورتيكوتروبين (CRH) وتشكل 15-20% من الخلايا في الغدة النخامية الأمامية.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052680.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemidesmosomes",
    "term_en": "Hemidesmosomes",
    "term_ar": "شق الجسيم الرابط",
    "synonyms": [
      "Hemidesmosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An anchoring junction of the cell to a non-cellular substrate, similar in morphology to halves of DESMOSOMES. They are composed of specialized areas of the plasma membrane where INTERMEDIATE FILAMENTS bind on the cytoplasmic face to the transmembrane linkers, INTEGRINS, via intracellular attachment proteins, while the extracellular domain of the integrins binds to EXTRACELLULAR MATRIX PROTEINS.",
    "arabic_definition": "شِقُّ الجُسَيمِ الرَّابِط وتترجم حرفيًا إلى هيميدزموزوم أو هيميديزموسوم هي بنًى صغيرةٌ جدًا شبيهة بالمسمار موجودة في الخلايا الكيراتينية في البشرة حيث تصلها بالمطرق خارج الخلوي ، تكون مشابهة بنيويا للدزموزومات عندما ترى بالمجهر الإلكتروني ، على الرغم من ذلك فإن الدزموزومات تصل بين الخلايا المتجاورة . الهيميدزموزومات مشابهة أيضا للموصلات البؤرية فكلاهما يصل الخلية بالمطرق خارج الخلوي ، بدلا من الدزموجلينات و الدزموكولينات الموجودة في الحيز خارج الخلوي فإن الهيميدزموزومات تستعمل الإنتغرين . (Hemidesmosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D022002.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spermatocytes",
    "term_en": "Spermatocytes",
    "term_ar": "خلية منوية",
    "synonyms": [
      "Spermatocyte",
      "Spermiocytes",
      "Spermiocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Male germ cells derived from SPERMATOGONIA. The euploid primary spermatocytes undergo MEIOSIS and give rise to the haploid secondary spermatocytes which in turn give rise to SPERMATIDS.",
    "arabic_definition": "الخلايا النطفيَّة أو الخلايا المنوية هي نوع من الخلايا العرسية الذكرية لدى الحيوانات. تُشتق من خلايا جنسية غير ناضجة تسمى بزرات النطاف. (Spermatocytes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013090.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plasmodesmata",
    "term_en": "Plasmodesmata",
    "term_ar": "رابطة بلازمية",
    "synonyms": [
      "Plasmodesma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Membrane-like channels of cytoplasm connecting adjacent plant cells. Plasmodesmata connect through pores in the CELL WALL and associate with the CYTOSKELETON machinery. They are essential for intercellular transport and communication.",
    "arabic_definition": "رابطة بلازمية أو رابطة هيولية (الإنجليزية: plasmodesma) بلازمودسما، وجمعها رابطات هيولية (الإنجليزية: Plasmodesmata) هي قنوات مجهرية تجتاز جدران الخلايا في الخلايا النباتية وبعض خلايا الطحالب لتعمل على تمكين النقل والاتصالات فيما بينها.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D031425.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spermatogonia",
    "term_en": "Spermatogonia",
    "term_ar": "بزرة النطفة",
    "synonyms": [
      "Spermatogonias",
      "Spermatophores",
      "Spermatophore",
      "Spermatogonium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Euploid male germ cells of an early stage of SPERMATOGENESIS, derived from prespermatogonia. With the onset of puberty, spermatogonia at the basement membrane of the seminiferous tubule proliferate by mitotic then meiotic divisions and give rise to the haploid SPERMATOCYTES.",
    "arabic_definition": "بزرة النطفة (الإنجليزية: Spermatogonium) (جمع: بِزْرات النِّطاف) هي خلية جنسية ذُكورية غير متمايزة. تخضع برزات النِطاف لتكوين حيوانات منوية ناضجة في الأنابيب المنوية للخصية. (Spermatogonia)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013093.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phycobilisomes",
    "term_en": "Phycobilisomes",
    "term_ar": "هيكل أصفر طحلبي",
    "synonyms": [
      "Phycobilisome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Light energy harvesting structures attached to the THYLAKOID MEMBRANES of CYANOBACTERIA and RED ALGAE. These multiprotein complexes contain pigments (PHYCOBILIPROTEINS) that transfer light energy to chlorophyll a.",
    "arabic_definition": "الهياكل الصفراء الطحلبية (الإنجليزية: Phycobilisomes) هي قرون استشعار حاصدة للضوء للنظام الضوئي الثاني في البكتيريا الزرقاء والطحالب الحمراء والطحالب الزرقاء.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045524.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "isochromosomes",
    "term_en": "Isochromosomes",
    "term_ar": "صبغي متساوي الأذرع",
    "synonyms": [
      "Isochromosome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Metacentric chromosomes produced during MEIOSIS or MITOSIS when the CENTROMERE splits transversely instead of longitudinally. The chromosomes produced by this abnormal division are one chromosome having the two long arms of the original chromosome, but no short arms, and the other chromosome consisting of the two short arms and no long arms. Each of these isochromosomes constitutes a simultaneous duplication and deletion.",
    "arabic_definition": "صبغي متطابق الذراعين (الإنجليزية: Isochromosome) هو صبغي فقد أحد أذرعه واستبدله بنسخة مطابقة تماماً من الذراع الآخر. يحدث هذا التبدل أثناء أحد أطوار دورة الخلية. (Isochromosomes)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018404.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemangioblasts",
    "term_en": "Hemangioblasts",
    "term_ar": "أروما وعائية",
    "synonyms": [
      "Hemangioblast",
      "Hemogenic Endothelial Cells",
      "Cell, Hemogenic Endothelial",
      "Cells, Hemogenic Endothelial",
      "Endothelial Cell, Hemogenic",
      "Endothelial Cells, Hemogenic",
      "Hemogenic Endothelial Cell",
      "Hemogenic Endothelium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bipotential angio-hematopoietic stem cells that give rise to both HEMATOPOIETIC STEM CELLS and ENDOTHELIAL CELLS.",
    "arabic_definition": "أرومات الأوعية الدموية هي خلايا سليفة متعددة القدرات التي يمكن أن تتمايز إلى كل من الخلايا المكونة للدم وخلايا بطانية. في جنين الفأر، ظهورجزرالدم في الكيس المحي في اليوم الجنيني 7 يمثل بداية تكون الدم. (Hemangioblasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055018.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myofibroblasts",
    "term_en": "Myofibroblasts",
    "term_ar": "أرومة ليفية عضلية",
    "synonyms": [
      "Myofibroblast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Spindle-shaped cells with characteristic CONTRACTILE PROTEINS and structures that contribute to the WOUND HEALING process. They occur in GRANULATION TISSUE and also in pathological processes such as FIBROSIS.",
    "arabic_definition": "الأرومة الليفية العضلية هي خلية تتوسط الخلية الليفية اليافعة وخلية العضلات الملساء في النمط الظاهري. (Myofibroblasts)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058628.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cell-nucleus",
    "term_en": "Cell Nucleus",
    "term_ar": "نواة (خلية)",
    "synonyms": [
      "Cell Nuclei",
      "Nuclei, Cell",
      "Nucleus, Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Within a eukaryotic cell, a membrane-limited body which contains chromosomes and one or more nucleoli (CELL NUCLEOLUS). The nuclear membrane consists of a double unit-type membrane which is perforated by a number of pores; the outermost membrane is continuous with the ENDOPLASMIC RETICULUM. A cell may contain more than one nucleus. (From Singleton &amp; Sainsbury, Dictionary of Microbiology and Molecular Biology, 2d ed)",
    "arabic_definition": "النَّواة (الجمع: نَوَيات ونَوًى) في الخلية عُضَّيةٌ بغشاء مغلق تتواجد في حقيقيات النوى. حقيقيات النوى عادةً تملك نواة واحدة، لكن أنواع قليلة من الخلايا مثل كريات الدم الحمراء عند الثدييات تكون عديمة النوى، بينما تملك أنواعٌ أخرى العديد من النوى. (Cell Nucleus)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002467.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myelin-sheath",
    "term_en": "Myelin Sheath",
    "term_ar": "ميالين",
    "synonyms": [
      "Myelin Sheaths",
      "Sheath, Myelin",
      "Sheaths, Myelin",
      "Myelin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The lipid-rich sheath surrounding AXONS in both the CENTRAL NERVOUS SYSTEMS and PERIPHERAL NERVOUS SYSTEM. The myelin sheath is an electrical insulator and allows faster and more energetically efficient conduction of impulses. The sheath is formed by the cell membranes of glial cells (SCHWANN CELLS in the peripheral and OLIGODENDROGLIA in the central nervous system). Deterioration of the sheath in DEMYELINATING DISEASES is a serious clinical problem.",
    "arabic_definition": "المَيَالين (الإنجليزية: Myelin) أو النخاعين مادة دهنية تحيط بالمحور العصبي لبعض الخلايا العصبية (العصبونات)، مكونة طبقة عازلة كهربائيا هي «غمد المايلين»، عادة حول محور عصبي واحد فقط من الخلايا العصبية. ويعتبر ضروري جداً لحسن سير السيالة في الجهاز العصبي. (Myelin Sheath)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009186.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nuclear-pore",
    "term_en": "Nuclear Pore",
    "term_ar": "مسام نووي",
    "synonyms": [
      "Nuclear Pores",
      "Pore, Nuclear",
      "Pores, Nuclear",
      "Nuclear Pore Complex"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An opening through the NUCLEAR ENVELOPE formed by the nuclear pore complex which transports nuclear proteins or RNA into or out of the CELL NUCLEUS and which, under some conditions, acts as an ion channel.",
    "arabic_definition": "المسام النووية (الإنجليزية: Nuclear Pore) هي الفتحات في الغشاء المغلف للنووية لإحدى الخلايا التي تسمح بتبادل المواد بين النواة والسيتوبلازم.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D022022.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plant-cells",
    "term_en": "Plant Cells",
    "term_ar": "خلية نباتية",
    "synonyms": [
      "Cell, Plant",
      "Cells, Plant",
      "Plant Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Basic functional unit of plants.",
    "arabic_definition": "الخلايا النباتية هي خلايا حقيقية النوى تختلف في عدة جوانب رئيسية عن خلايا الكائنات الحية حقيقية النوى الأخرى. وتشمل خصائصها المميزة: فجوة عصارية مركزية كبيرة، وحدة تخزين مملوءة بالماء مُحاطة بغشاء يعرف باسم تونوبلاست يحافظ على استقرار الخلية، ويتحكم في حركة الجزيئات بين العصارة الخلوية والنسغ، ويخزن مادةً مفيدةً ويساعد على هضم مخلفات البروتينيات والعضيات. (Plant Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059828.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "motor-neurons",
    "term_en": "Motor Neurons",
    "term_ar": "عصبون حركي",
    "synonyms": [
      "Motor Neuron",
      "Neuron, Motor",
      "Motoneurons",
      "Motoneuron",
      "Neurons, Motor",
      "Motor Neurons, Alpha",
      "Alpha Motor Neuron",
      "Alpha Motor Neurons"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Neurons which activate MUSCLE CELLS.",
    "arabic_definition": "العصبون الحركي (الإنجليزية: Motor neuron) أو العصبون المحرك، إن مصطلح العصبون الحركي ينطبق على الخلايا العصبية الموجودة في الجهاز العصبي المركزي ويكون محور هذا العصبون المحرك خارج الجهاز العصبي المركزي، ويسيطر بشكل مباشر أو غير مباشر على العضلات (سواءً الإرادية أو اللاإرادية). وكثيراً ما يرتبط في الخلايا العصبية الحركية مع العصبون الصادر، الخلايا العصبية الأولية، أو الخلايا العصبية الحركية ألفا. (Motor Neurons)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009046.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "schwann-cells",
    "term_en": "Schwann Cells",
    "term_ar": "خلية شوان",
    "synonyms": [
      "Schwann Cell",
      "Cell, Schwann",
      "Cells, Schwann"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Neuroglial cells of the peripheral nervous system which form the insulating myelin sheaths of peripheral axons.",
    "arabic_definition": "خلية شوان هي نوع من الخلية الدبقية الموجودة في الجهاز العصبي الطرفي. وتقوم هذه الخلايا بالعديد من الوظائف الهامة لتتكامل مع دور الأعصاب الطرفية، حيث تقوم بتوصيل النبضات العصبية عبر الألياف العصبية، كما تقوم بتدعيم الخلايا العصبية وتعويض الأجزاء التالفة أو المتآكلة منها؛ لذا يطلق عليها خلايا الغراء العصبي، كما تقوم بتقديم الأجسام الغريبة إلى الخلايا اللمفاوية من نوع (تي) T-lymphocytes . (Schwann Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012583.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "x-chromosome",
    "term_en": "X Chromosome",
    "term_ar": "الصبغي X",
    "synonyms": [
      "Chromosomes, X",
      "Chromosome, X",
      "X Chromosomes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The female sex chromosome, being the differential sex chromosome carried by half the male gametes and all female gametes in human and other male-heterogametic species.",
    "arabic_definition": "الصِّبْغِيُّ X (الإنجليزية: X chromosome) هو واحد من صبغيين لتحديد الجنس في الكثير من أنواع الحيوانات، بما فيها الثدييات (الآخر هو صبغي Y). بل هو جزء من نظام اكس وواي لتحديد الجنس.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014960.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "y-chromosome",
    "term_en": "Y Chromosome",
    "term_ar": "الصبغي Y",
    "synonyms": [
      "Chromosomes, Y",
      "Chromosome, Y",
      "Y Chromosomes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The male sex chromosome, being the differential sex chromosome carried by half the male gametes and none of the female gametes in humans and in some other male-heterogametic species in which the homologue of the X chromosome has been retained.",
    "arabic_definition": "الصبغي واي هو أحد الصبغيين الجنسيين (الصبغيين الجنسيين) لدى الوحشيات التابعة لطائفة الثدييات، بما فيها الإنسان، والعديد من الحيوانات الأخرى. يمثل الصبغي إكس الصبغي الجنسي الآخر. (Y Chromosome)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014998.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kupffer-cells",
    "term_en": "Kupffer Cells",
    "term_ar": "خلية كوبفر",
    "synonyms": [
      "Cells, Kupffer",
      "Kupffer Cell",
      "Cell, Kupffer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Specialized phagocytic cells of the MONONUCLEAR PHAGOCYTE SYSTEM found on the luminal surface of the hepatic sinusoids. They filter bacteria and small foreign proteins out of the blood and dispose of worn out red blood cells.",
    "arabic_definition": "خلايا كوبفر هي خلايا بلعمية متخصصة توجد في الكبد وتبطن جدران جيب الكبد التي تشكل جزءا من الجملة الشبكية البطانية (RES) (المعروف أيضا باسم: جملة البلعميات والوحيدات). (Kupffer Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007728.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "goblet-cells",
    "term_en": "Goblet Cells",
    "term_ar": "خلية كأسية",
    "synonyms": [
      "Cell, Goblet",
      "Cells, Goblet",
      "Goblet Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A glandular epithelial cell or a unicellular gland. Goblet cells secrete MUCUS. They are scattered in the epithelial linings of many organs, especially the SMALL INTESTINE and the RESPIRATORY TRACT.",
    "arabic_definition": "الخَلية الكَأسية (الإنجليزية: Goblet cell) أَو (الإنجليزية: Chalice cell) هيَ خَلية طِلائية عمادية مُعدلة ذات نَشاط غُدي، تَعمل على إفراز الهُلام المُكون للمُوسين، حيثُ يُعتبر المُوسين من أَهم مُكونات المُخاط. وَتُعتبر الخَلية الكَأسية خلية فارِزَة، حيثُ تَستعمل طَريقة الفارِزة في إفراز الحُويصلات الإفرزاية نَحوَ القَناة، ولكن قَد تستعمل طُرق مُفتَرزة تحتَ الضَغط. (Goblet Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020397.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paneth-cells",
    "term_en": "Paneth Cells",
    "term_ar": "خلية بانيت",
    "synonyms": [
      "Cells, Paneth",
      "Paneth Cell",
      "Cell, Paneth"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Differentiated epithelial cells of the INTESTINAL MUCOSA, found in the basal part of the intestinal crypts of Lieberkuhn. Paneth cells secrete GROWTH FACTORS, digestive enzymes such as LYSOZYME and antimicrobial peptides such as cryptdins (ALPHA-DEFENSINS) into the crypt lumen.",
    "arabic_definition": "تعتبر خلايا بانيت أو خلايا بانيث (الإنجليزية: Paneth cell) واحدة من أنواع الخلايا الرئيسية في ظهارة الأمعاء الدقيقة، جنبا إلى جنب مع الخلايا الكأسية، والخلايا المعوية، والخلايا المعوية الصماوية، ويمكن أيضا العثور على عدد قليل منها بشكل متقطع في الأعور والزائدة الدودية، ويتم تحديدها مجهريا من قِبل موقعها أسفل الخلايا الجذعية المعوية في الغدد المعوية (وتسمى أيضا خبايا ليبركون) وحبيبات الانكسار الكبيرة اليوزينية التي تشغل معظم السيتوبلازم. وتتكون هذه الحبيبات من عدة مركبات مضادة للميكروبات ومركبات أخرى معروفة بأنها مهمة في المناعة والدفاع عن العائل. (Paneth Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019879.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cell-membrane",
    "term_en": "Cell Membrane",
    "term_ar": "غشاء خلوي",
    "synonyms": [
      "Cell Membranes",
      "Membrane, Cell",
      "Membranes, Cell",
      "Cytoplasmic Membrane",
      "Cytoplasmic Membranes",
      "Membrane, Cytoplasmic",
      "Membranes, Cytoplasmic",
      "Plasma Membrane"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The lipid- and protein-containing, selectively permeable membrane that surrounds the cytoplasm in prokaryotic and eukaryotic cells.",
    "arabic_definition": "الغشاء الخلوي أو الغشاء البلازمي هو غشاء شفاف ورقيق ويساوي سُمكهُ 100 انكستروم يُحيط بالخلية ويفصلها عن البيئة الخارجية . يتكون الغشاء البلازمي من ليبيد ثنائي الطبقة ذو نفاذية اختيارية . (Cell Membrane)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002462.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "golgi-apparatus",
    "term_en": "Golgi Apparatus",
    "term_ar": "جهاز غولجي",
    "synonyms": [
      "Apparatus, Golgi",
      "Golgi Complex",
      "Complex, Golgi"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A stack of flattened vesicles that functions in posttranslational processing and sorting of proteins, receiving them from the rough ENDOPLASMIC RETICULUM and directing them to secretory vesicles, LYSOSOMES, or the CELL MEMBRANE. The movement of proteins takes place by transfer vesicles that bud off from the rough endoplasmic reticulum or Golgi apparatus and fuse with the Golgi, lysosomes or cell membrane. (From Glick, Glossary of Biochemistry and Molecular Biology, 1990)",
    "arabic_definition": "جهاز غولجي أو جهاز جولجي أو معقد غولجي أو جسيم غولجي أو جسم غولجي أو شبكة غولجي (غولجي تكتب أيضاً جولجي) (الإنجليزية: Golgi apparatus) هي عضية خلوية تتواجد في معظم خلايا حقيقيات النوى، اكتشفها العالم الإيطالي كاميلو غولجي سنة 1897 وسماها باسمه سنة 1898. جهاز غولجي جزء من النظام الغشائي الداخلي في السيتوبلازم، ويتكون من عدة حزمات صهريجية متصلة ببعضها عبر أنيبيبات دقيقة ويقوم بمعالجة وتجميع البروتينات في حويصلات غشائية ناقلة وإرسالها إلى وجهاتها النهائية.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006056.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "renshaw-cells",
    "term_en": "Renshaw Cells",
    "term_ar": "عصبونات رينشو",
    "synonyms": [
      "Cells, Renshaw",
      "Renshaw Interneurons",
      "Interneurons, Renshaw",
      "Spinal Cord Ventral Horn Interneuron Renshaw",
      "Renshaw Cell",
      "Cell, Renshaw",
      "Ia Inhibitory Interneurons",
      "Ia Inhibitory Interneuron"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Ipsilateral glycinergic inhibitory interneurons of the SPINAL CORD VENTRAL HORN which modulate recurrent firing of MOTOR NEURONS. They develop from embryonic progenitor domain V1.Ia inhibitory interneurons which also originate from V1 are responsible for reciprocal inhibition of MOTONEURONS.",
    "arabic_definition": "عصبونات رينشو هي نوع من أنواع العصبونات البينية التثبيطية الموجودة في المادة الرمادية للنخاع الشوكي، وترتبط هذه العصبونات مع عصبونات ألفا الحركية بطريقتين اثنتين. تتلقى عصبونات رينشو الإشارات الاستثارية من محاوير عصبونات ألفا عند خروجها من الجذر الحركي، ما يساهم في «إبقائها على اطلاع» بمدى قوة إطلاق هذه العصبونات. (Renshaw Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D066293.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "zona-pellucida",
    "term_en": "Zona Pellucida",
    "term_ar": "منطقة شفافة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tough transparent membrane surrounding the OVUM. It is penetrated by the sperm during FERTILIZATION.",
    "arabic_definition": "المِنْطَقَة الشَفَّافَة Zona pellucida مادة بروتينية مخاطية تفرزها حوصلة غراف في بويضة الثديات، يقوم الحيوان المنوي باختراق هذه المنطقة للوصول إلى البويضة خلال عملية التلقيح بمساعدة انزيمات يفرزهما الجسم القمي في رأس الحيوان المنوي. تبقى هذه المنطقة موجودة تحيط بالزيجوت لمدة 5 أيام بعد الإخصاب تنقسم خلالها خلية الزيجوت (البويضة المخصبة) عدة انقسامات متساوية حيث تصبح عد الخلايا فيها حوالى 16 خلية لتسمّى التوتة (توتية (جنين)) تنتقل التوتة في اليوم الخامس إلى الرحم وتختفي فيها المنطقة الشفافة.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015044.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "granulosa-cells",
    "term_en": "Granulosa Cells",
    "term_ar": "خلية حبيبية",
    "synonyms": [
      "Cell, Granulosa",
      "Cells, Granulosa",
      "Granulosa Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Supporting cells for the developing female gamete in the OVARY. They are derived from the coelomic epithelial cells of the gonadal ridge. Granulosa cells form a single layer around the OOCYTE in the primordial ovarian follicle and advance to form a multilayered cumulus oophorus surrounding the OVUM in the Graafian follicle. The major functions of granulosa cells include the production of steroids and LH receptors (RECEPTORS, LH).",
    "arabic_definition": "الخلية الحبيبية أو الخلية الجريبية هي خلية جسدية من الحبل الجنسي ترتبط ارتباطًا وثيقًا بتطور ونمو الأمشاج الأنثوية (البويضة أو الخلية البيضية) في مبيض الثدييات. (Granulosa Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006107.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eukaryotic-cells",
    "term_en": "Eukaryotic Cells",
    "term_ar": "حقيقيات النوى",
    "synonyms": [
      "Cell, Eukaryotic",
      "Cells, Eukaryotic",
      "Eukaryotic Cell",
      "Eukaryote"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cells of the higher organisms, containing a true nucleus bounded by a nuclear membrane.",
    "arabic_definition": "حقيقيات النوى (الاسم العلمي: Eukaryote) من اليونانية (ευ = \"eu\" = «جيد») + (κάρυον - \"karyon\" = «نواة»). هي مجموعة من الكائنات الحية ذات بنية خلوية معقدة، تتميز بأن المادة الجينية (الإنجليزية: Genetic material) فيها تكون محصورة ضمن النواة المغلفة بغشاء. (Eukaryotic Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005057.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endoplasmic-reticulum",
    "term_en": "Endoplasmic Reticulum",
    "term_ar": "شبكة إندوبلازمية",
    "synonyms": [
      "Reticulum, Endoplasmic",
      "Ergastoplasm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A system of cisternae in the CYTOPLASM of many cells. In places the endoplasmic reticulum is continuous with the plasma membrane (CELL MEMBRANE) or outer membrane of the nuclear envelope. If the outer surfaces of the endoplasmic reticulum membranes are coated with ribosomes, the endoplasmic reticulum is said to be rough-surfaced (ENDOPLASMIC RETICULUM, ROUGH); otherwise it is said to be smooth-surfaced (ENDOPLASMIC RETICULUM, SMOOTH). (King &amp; Stansfield, A Dictionary of Genetics, 4th ed)",
    "arabic_definition": "الشبكة الهيولية الباطنة أو الداخلية أو الشبكة الإندوبلازمية أو الشبكة البلازمية الداخلية (الإنجليزية: Endoplasmic reticulum) هي عضية خلوية تتواجد في خلايا حقيقيات النوى وتتكون من شبكة مترابطة من النبيبات والحويصلات والأكياس الغشائية المسطحة أو بنيات تشبه الأنابيب تسمى صهاريج. ترتبط في مناطق معينة بالغشاء البلازمي ومع الغشاء النووي في مناطق أخرى، الأغشية في الشبكة الإندوبلازمية امتداد للغشاء النووي الخارجي، وتوجد الشبكة الإندوبلازمية في معظم أنواع خلايا حقيقيات النوى لكنها غائبة في الخلايا الدموية الحمراء والخلايا المنوية.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004721.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "extracellular-matrix",
    "term_en": "Extracellular Matrix",
    "term_ar": "نسيج بيني خارج الخلية",
    "synonyms": [
      "Extracellular Matrices",
      "Matrices, Extracellular",
      "Matrix, Extracellular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A meshwork-like substance found within the extracellular space and in association with the basement membrane of the cell surface. It promotes cellular proliferation and provides a supporting structure to which cells or cell lysates in culture dishes adhere.",
    "arabic_definition": "في علم البيولوجيا، النّسيج خارج الخليّة (الإنجليزية: Extracellular matrix) هو شبكة ثلاثية الأبعاد يقع خارج الخلايا في نسيج حيواني أو مجموعة كائنات مجهريّة. يتكون من جزيئات كبيرة خارج خلوية ومعادن، مثل الكولاجين والإنزيمات والبروتينات السكرية وهيدروكسيل أباتيت وعادة ما يوفر الدعم الهيكلي للخلايا الحيوانية (الهيكل الخلوي)، بالإضافة إلى أداء مختلف الوظائف الهامة الأخرى.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005109.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prokaryotic-cells",
    "term_en": "Prokaryotic Cells",
    "term_ar": "بدائيات النوى",
    "synonyms": [
      "Cell, Prokaryotic",
      "Cells, Prokaryotic",
      "Prokaryotic Cell",
      "Prokaryote"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cells lacking a nuclear membrane so that the nuclear material is either scattered in the cytoplasm or collected in a nucleoid region.",
    "arabic_definition": "طَلِيعيات النَّوَى أو بُدَائِيَّات النَّوَى (بضم الباء، وفتح النون) [خلية بُدائية النَّواة (صفة للمفرد)، خلايا بُدائية النَّوَى (صفة للجمع)، بُدائيات النَّوَى (اسم بصيغة الجمع)] (الإنجليزية: Prokaryotes) تنقسم الخلية البُدائية النَّواة على جزئين رئيسَين، هما: الهَيُولَى وشِبه النَّواة المسماة المِنطقة النووية، يحيط بهما الغشاء الخلوي يُحاط أحيانًا (كما في بعض الجراثيم، وفي الطحالب) بجدار خلوي صُلْب أو شِبه صُلْب يحافظ على الخلية ويؤمن لها الدعم، يسمى الغُلْفَة. يتراوح معدل حجم الخلية البُدائية النَّواة بين 1 - 10 ميكرومتر. (Prokaryotic Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011387.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "philadelphia-chromosome",
    "term_en": "Philadelphia Chromosome",
    "term_ar": "كروموسوم فيلادلفيا",
    "synonyms": [
      "Chromosome, Philadelphia",
      "Ph1 Chromosome",
      "Chromosome, Ph1",
      "Chromosomes, Ph1",
      "Ph1 Chromosomes",
      "Ph 1 Chromosome",
      "1 Chromosomes, Ph",
      "Chromosome, Ph 1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An aberrant form of human CHROMOSOME 22 characterized by translocation of the distal end of chromosome 9 from 9q34, to the long arm of chromosome 22 at 22q11. It is present in the bone marrow cells of 80 to 90 per cent of patients with chronic myelocytic leukemia (LEUKEMIA, MYELOGENOUS, CHRONIC, BCR-ABL POSITIVE).",
    "arabic_definition": "صبغي فيلادلفيا أو تبدل فيلادلفيا هو شذوذ محدد للصبغيات ارتبط حدوثه بمرض أبيضاض الدم النقوي المزمن، يحدث نتيجة إزفاء (انتقال متبادل) بين الصبغيات 9 و22، وتبادلهما للمادة الوراثية. اكتشف عام 1960 من قبل العالمين بيتر نوويل وديفيد هونكرفورد كأول تغير صبغي دائم الوجود لدى الخلايا السرطانية عند مرضى أبيضاض الدم النقوي المزمن، حيث وجد العالمان قصراً في الصبغي رقم 22، سمي الصبغي الناتج عن هذا التغير باسم صبغي فيلادلفيا أو Ph1. (Philadelphia Chromosome)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010677.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuromuscular-junction",
    "term_en": "Neuromuscular Junction",
    "term_ar": "موصل عصبي عضلي",
    "synonyms": [
      "Junction, Neuromuscular",
      "Junctions, Neuromuscular",
      "Neuromuscular Junctions",
      "Myoneural Junction",
      "Junction, Myoneural",
      "Junctions, Myoneural",
      "Myoneural Junctions",
      "Nerve-Muscle Preparation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The synapse between a neuron and a muscle.",
    "arabic_definition": "المَوْصِل العَصَبِي العَضَلِي (الإنجليزية: Neuromuscular junction) هو مشبك كيميائي يتشكّل من الاتصال بين المحطة قبل المشبكية لعصبون حركي والغشاء بعد المشبكي لخلية عضلية. في الموصل العصبي العضلي يستطيع العصبون الحركي توصيل شارة للألياف العضلية، جاعلها تنقبض.",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009469.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "natural-killer-cells",
    "term_en": "Natural Killer Cells",
    "term_ar": "خلية فاتكة طبيعية",
    "synonyms": [
      "Cell, Natural Killer",
      "Cells, Natural Killer",
      "Killer Cell, Natural",
      "Natural Killer Cell",
      "NK Cells",
      "Cell, NK",
      "Cells, NK",
      "NK Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bone marrow-derived lymphocytes that possess cytotoxic properties, classically directed against transformed and virus-infected cells. Unlike T CELLS; and B CELLS; NK CELLS are not antigen specific. The cytotoxicity of natural killer cells is determined by the collective signaling of an array of inhibitory and stimulatory CELL SURFACE RECEPTORS. A subset of T-LYMPHOCYTES referred to as NATURAL KILLER T CELLS shares some of the properties of this cell type.",
    "arabic_definition": "الخلايا الفاتكة الطبيعية أو الخلايا القاتلة الطبيعية (الإنجليزية: Natural killer cell) هي نوع من اللمفاويات السامة للخلايا التي تشكل مكون أساسي في الجهاز المناعي الفطري. دور الخلايا القاتلة الطبيعية هو مشابه لدور الخلايا التائية السامة للخلايا في الاستجابة المناعية التكيفية عند الفقاريات. (Natural Killer Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007694.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "embryonic-stem-cells",
    "term_en": "Embryonic Stem Cells",
    "term_ar": "خلية جذعية جنينية",
    "synonyms": [
      "Stem Cells, Embryonic",
      "Cell, Embryonic Stem",
      "Cells, Embryonic Stem",
      "Embryonic Stem Cell",
      "Stem Cell, Embryonic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cells derived from the BLASTOCYST INNER CELL MASS which forms before implantation in the uterine wall. They retain the ability to divide, proliferate and provide progenitor cells that can differentiate into specialized cells.",
    "arabic_definition": "الخلايا الجذعية الجنينية (الإنجليزية: Embryonic stem cell أو ES) هي الخلايا الجذعية المحفزة المستمدة من الكتلة الخلوية الداخلية من الكيسة الأريمية، وهي الجنين في مراحله المبكرة. الأجنة البشرية تصل إلى مرحلة الكيسة الأريمية بفترة 4 إلى 5 أيام بعد التخصيب، وتتكون في هذا الوقت من 50 إلى 150 خلية. (Embryonic Stem Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053595.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "memory-t-cells",
    "term_en": "Memory T Cells",
    "term_ar": "خلية تائية ذاكرة",
    "synonyms": [
      "Memory T Cell",
      "T Cell, Memory",
      "Memory T Lymphocytes",
      "Lymphocyte, Memory T",
      "Lymphocytes, Memory T",
      "Memory T Lymphocyte",
      "T Lymphocyte, Memory",
      "T Lymphocytes, Memory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A subset of activated T cells generated in response to primary immune challenge or immunization upon re-challenge (see IMMUNOLOGIC MEMORY). Memory T cells feature many discrete properties indicative of various differentiation such as expression pattern of CCR7 RECEPTORS and can be divided into central memory and effector memory T cells.",
    "arabic_definition": "خلايا تي ذاكرة (بالإنجليزية: Memory T cell ) هي خلايا تكافح العدوى وتكافح الخلايا السرطانية، وتسمى أحيانا لمفاويات تائية حيث تكون قد تقابلت واستجابت وتعاملت من قبل مع أنتيجين مسبب للمرض وقضت عليه ; لذلك فهي تسمى أيضا خلية تي مخالطة لأنتيجين . في استطاعة الخلية تي الذاكرة التعرف على جرثوم يغزو الجسم، مثل بكتيريا أو فيروس تكون قد تعاملت معه من قبل، أو التعرف أيضا على خلايا سرطانية. (Memory T Cells)",
    "specialty": "Histology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000091246.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scabies",
    "term_en": "Scabies",
    "term_ar": "جرب",
    "synonyms": [
      "Mange, Sarcoptic",
      "Sarcoptic Mange"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A contagious cutaneous inflammation caused by the bite of the mite SARCOPTES SCABIEI. It is characterized by pruritic papular eruptions and burrows and affects primarily the axillae, elbows, wrists, and genitalia, although it can spread to cover the entire body.",
    "arabic_definition": "الجرب والمعروف باسم «حكة السبع سنوات»، والشديد منه هو الكَلع، وهو مرض جلدي معدي تسببه القارمة الجربية. أكثر الاعراض شيوعا هي الحكة الشديدة وطفح جلدي يشبه البثور، وفي بعض الاحيان يمكن رؤية جحور صغيرة على الجلد، العدوى الأولية تحتاج عادة من 2-6 أسابيع قبل ظهور الأعراض، أما إذا أصيب الشخص بعدوى للمرة الثانية تظهر الأعراض خلال يوم واحد، ويمكن لهذه الأعراض أن تظهر في معظم أنحاء الجسم أو في مناطق معينة فقط، مثل: الرسغين وبين الأصابع أو على طول محيط الخصر. (Scabies)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012532.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "warts",
    "term_en": "Warts",
    "term_ar": "ثؤلول",
    "synonyms": [
      "Wart",
      "Verruca",
      "Verrucas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Benign epidermal proliferations or tumors; some are viral in origin.",
    "arabic_definition": "الثؤلول أو عين السمكة أو السنطة أو تالولة أو ثالول أو سالول حسب العامية العربية هو مرض جلدي عبارة عن أورام جلدية حميدة ومعدية تصيب طبقات الجلد العليا، وهي تحدث بسبب الإصابة بفيروس الورم الحليمي واختصاره فيروس الورم الحليمي البشري وهو فيروس الورم الحليمي البشري، ويوجد من ذلك الفيروس 130 نوعا معروفا معظمهم يسببون ثآليل جلدية شائعة، وهو عبارة عن نتوء خشن الملمس وصلب ينمو على سطح الجلد ويظهر بعدة أشكال وأحجام وأعداد وغالبا ما يكون بنفس لون الجلد، وينمو مرض عين السمكة على شكل كتل تشبه القنبيط الصغير وهو يصيب جميع الأعمار والأجناس وهي شائعة بين طلاب المدارس وتبلغ مدة الحضانة للفيروس ما بين الشهر والسنة بمعدل شهرين أو ثلاثة واسم عين السمكة هو مجرد اسم 'عامى' وهو الأكثر انتشارا لهذا المرض ولكن اسمه العلمى باللغة العربية هو الثآليل واسمه العلمى باللغة الإنجليزية هو Warts، وعين السمكة (الثآليل Warts) لها أنواع كثيرة يمكن أن تصل إلى 70 نوعا.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014860.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dermatitis",
    "term_en": "Dermatitis",
    "term_ar": "التهاب الجلد",
    "synonyms": [
      "Dermatitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any inflammation of the skin.",
    "arabic_definition": "التهاب الجلد هو مصطلح يطلق على عدد من أمراض الجلد المختلفة، الشيء الأساسي، المشترك بينها هو السيرورة المرضية -أي الالتهاب - التي تؤدي إلى ظهور الأعراض والظواهر السريرية الأساسية في المرض. (Dermatitis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003872.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vitiligo",
    "term_en": "Vitiligo",
    "term_ar": "بهاق",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder consisting of areas of macular depigmentation, commonly on extensor aspects of extremities, on the face or neck, and in skin folds. Age of onset is often in young adulthood and the condition tends to progress gradually with lesions enlarging and extending until a quiescent state is reached.",
    "arabic_definition": "البُهَاقُ (الإنجليزية: Vitiligo) أحد الأمراض الجلدية المنتشرة في العالم ويعرف تحديداً بزوال اللون الطبيعي للجلد على شكل بقع بيضاء واضحة في الجلد، وقد يكون شاملاً للجسم كله كما قد يكون في مكان واحد. تتكون البقع التي تشكل مرض البهاق بسبب فقدان الخلايا الملونة التي تنتج مادة الميلانين، والتي توجد طبيعيةً في الجلد وفي حويصلات الشعر والفم(أي الشفاه) والعيون (لون العينين) وبعض من الأجزاء العصبية المركزية، وتعتبر كمية ونوعية خلايا الميلانين هي العنصر المحدد للون الجلد والشعر والعيون التي تميز الناس عن بعضهم البعض.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014820.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "impetigo",
    "term_en": "Impetigo",
    "term_ar": "قوباء",
    "synonyms": [
      "Impetigos",
      "Impetigo Contagiosa",
      "Contagiosa, Impetigo",
      "Contagiosas, Impetigo",
      "Impetigo Contagiosas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A common superficial bacterial infection caused by STAPHYLOCOCCUS AUREUS or group A beta-hemolytic streptococci. Characteristics include pustular lesions that rupture and discharge a thin, amber-colored fluid that dries and forms a crust. This condition is commonly located on the face, especially about the mouth and nose.",
    "arabic_definition": "القوباء أو الحصف (الإنجليزية: Impetigo) هو التهاب جرثومي في الطبقات السطحية من الجلد يصيب في أغلب الأحيان الأطفال من عمر 2 - 6 سنوات. المرض يمكن أن يصيب الأشخاص الذين يمارسون رياضات تتطلب تلامسا مثل الرجبي، كرة القدم الأمريكية والمصارعة بغضّ النظر عن العمر.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007169.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "argyria",
    "term_en": "Argyria",
    "term_ar": "تفضض",
    "synonyms": [
      "Argyrias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A permanent ashen-gray discoloration of the skin, conjunctiva, and internal organs resulting from long-continued use of silver salts. (Dorland, 27th ed)",
    "arabic_definition": "التفضض (باللغة اللاتينية:Argyria) هو حالة مرضية تحدث نتيجة التعرض المزمن لعنصر الفضة، غبار الفضة، أو لأحد مركبات الفضة. ومن أحد العلامات المميزة لهذه المرض هو لون جلد المريض حيث يكون مائلا للزرقة أو الأزرق المخضر.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001129.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "keloid",
    "term_en": "Keloid",
    "term_ar": "جدرة",
    "synonyms": [
      "Keloids"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sharply elevated, irregularly shaped, progressively enlarging scar resulting from formation of excessive amounts of collagen in the dermis during connective tissue repair. It is differentiated from a hypertrophic scar (CICATRIX, HYPERTROPHIC) in that the former does not spread to surrounding tissues.",
    "arabic_definition": "الجُدْرَة هو تكوين نوع من الندبة، تتكون بشكل رئيسي إما من النوع الثالث (مبكرا) أو النوع الأول (متأخرا) من الكولاجين اعتمادا على نضجها، وتنتج عن فرط نمو النسيج الحبيبي (النوع الثالث من الكولاجين) في موقع إصابة الجلد الذي يلتئم ويتم استبداله ببطء بالنوع الأول من الكولاجين. والجدرة هي آفات مطاطية صلبة أو عقيدات ليفية لامعة يمكن أن يختلف لونها من الوردي إلى لون بشرة الشخص أو من الأحمر إلى البني الداكن. (Keloid)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007627.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alopecia",
    "term_en": "Alopecia",
    "term_ar": "صلع",
    "synonyms": [
      "Baldness",
      "Hair Loss",
      "Hair Losses",
      "Losses, Hair",
      "Loss, Hair",
      "Pseudopelade",
      "Alopecia Cicatrisata",
      "Alopecia Cicatrisatas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Absence of hair from areas where it is normally present.",
    "arabic_definition": "الصلع (الإنجليزية: Baldness) هو ظاهرة أو مرض تصيب الذكور عادةً، وقد يصيب بعض الإناث أيضاً، ويتمثّل بفقدان متدرج للشعر. تشير بعض الدراسات إلى أن العامل المسبب لفقدان الشعر هو الإفراز الزائد لهرمون الذكورة (التستسترون: تستوستيرون)، أو بصفةٍ أدق حساسية جذور الشعر المفرطة لمادة الـ DHT التي تدخل في تنظيم إفرازات التستوسترون. (Alopecia)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000505.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blister",
    "term_en": "Blister",
    "term_ar": "تبثر",
    "synonyms": [
      "Blisters",
      "Bleb",
      "Blebs",
      "Bulla",
      "Bullae",
      "Bullous Lesion",
      "Bullous Lesions",
      "Lesion, Bullous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Visible accumulations of fluid within or beneath the epidermis.",
    "arabic_definition": "التنَفُّط أو التبثر أو البطباطة أو البثرة أو النفطة أو الفقفوقة (الإنجليزية: Blister) هو وجود تجمع سائل كالبثرة في جيب في الطبقات العلوية للجلد يحدث عادة بسبب احتكاك أو حرق أو تعرض كيميائي أو التهاب. يكون فيها عادة سائل شفاف هو بلازما الدم وأحيانًا فيها دم أو قيح.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001768.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "yaws",
    "term_en": "Yaws",
    "term_ar": "داء عليقي",
    "synonyms": [
      "Frambesia Tropica",
      "Frambesia Tropicas",
      "Frambesia",
      "Frambesias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A systemic non-venereal infection of the tropics caused by TREPONEMA PALLIDUM subspecies pertenue.",
    "arabic_definition": "الدَّاءُ العُلَّيقِيّ هي عدوى استوائية تصيب الجلد والعظام والمفاصل. تسببها بكتيريا ملتوية (تريبونيما باليدم بيرتينيو) Treponema pallidum pertenue.امراض أخرى تسببها تريبونيما كالبَجَل بجل (اللولبية البجلية) وبنتا زهري مستوطن (اللولبية كاراتم) والزهري (الملتوية اللولبية الشاحبة). (Yaws)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015001.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dandruff",
    "term_en": "Dandruff",
    "term_ar": "قشرة (جلد)",
    "synonyms": [
      "Scurf"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive shedding of dry scaly material from the scalp in humans.",
    "arabic_definition": "قشرة الرأس أو قشرة الشعر أو الهِبْرِيَةُ أو الإِبْرِيَةُ أو الهُبَارِيَةُ أو النُّبَاغة (بالانجليزية:dandruff) هي عبارة عن فتات ينتج بسبب تساقط الخلايا الميتة من فروة الرأس. من الطبيعي أن تنتج كمية معينة من القشرة عندما تموت خلايا فروة الرأس ومن ثم تتساقط ويتم استبدالها بالخلايا الجديدة لكن هذه الكمية قد تزيد عن الحد الطبيعي لدى البعض وتكون هذه الزيادة مزمنة أو مؤقتة وناتجة عن عوامل معينة تسبب ظهور القشرة بكميات كبيرة ويصاحبها احمرار وتهيج الفروة.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063807.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pruritus",
    "term_en": "Pruritus",
    "term_ar": "حكة",
    "synonyms": [
      "Itching",
      "Pruritis",
      "Itch"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An intense itching sensation that produces the urge to rub or scratch the skin to obtain relief.",
    "arabic_definition": "الحِكّة هي شعور يسبّب الرّغبة بالحك، وهي لا تصنّف كنوع من الإحساس. لقد أظهر الطّب الحديث أنّ للحِكّة تشابهات كثيرة للألم، حيث أنّ المعلومات تنتقل لهم من خلال الألياف العصبية العديمة الميالينية الموجودة في الجلد، وأيضًا يتم نقل المعلومات لهم مركزيًّا في نفس النظامين المتميّزين وهما النّخاع الشّوكي وحزمة من الأعصاب، لكنّ أنماط الاستجابة تختلف بينهما، فللألم سحبٌ منعكس، والحِكّة تؤدّي إلى الحَكّ . (Pruritus)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011537.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erythema",
    "term_en": "Erythema",
    "term_ar": "حمامى",
    "synonyms": [
      "Erythemas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Redness of the skin produced by congestion of the capillaries. This condition may result from a variety of disease processes.",
    "arabic_definition": "الحُمَامَى (اللاتينية: Erythema) هو احمرار في الجلد ناتج عن زيادة تدفق الدم إلى الشعيرات الدموية في الطبقات السفلى من النسيج الجلدي. أسباب حصول الحمامى كثيرة منها الإصابة بالجلد، وحدوث عدوى أو التهاب بالمنطقة.أيضا يمكن حصول الحمامى بدون سبب مرضي كاحمرار الوجه عند الخجل أو العصبية.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004890.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myxedema",
    "term_en": "Myxedema",
    "term_ar": "وذمة مخاطية",
    "synonyms": [
      "Myxedemas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by a dry, waxy type of swelling (EDEMA) with abnormal deposits of MUCOPOLYSACCHARIDES in the SKIN and other tissues. It is caused by a deficiency of THYROID HORMONES. The skin becomes puffy around the eyes and on the cheeks. The face is dull and expressionless with thickened nose and lips.",
    "arabic_definition": "يتحدث هذا المقال عن تغيرات الجلد التي تحدث في حالة انخفاض هرمون الثايرويد (قصور الغدة الدرقية), كلمة وذمة مخاطية كانت تستخدم على مرور التاريخ لتشير إلى قصور الغدة الدرقية بشكل عام. للحالات الطبية الطارئة ذات العلاقة انظر إلى الغيبوبة الناتجة عن الوذمة المخاطية. (Myxedema)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009230.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rosacea",
    "term_en": "Rosacea",
    "term_ar": "عد وردي",
    "synonyms": [
      "Acne Rosacea",
      "Erythematotelangiectatic Rosacea",
      "Rosacea, Erythematotelangiectatic",
      "Papulopustular Rosacea",
      "Rosacea, Papulopustular",
      "Phymatous Rosacea",
      "Rosacea, Phymatous",
      "Ocular Rosacea"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cutaneous disorder primarily of convexities of the central part of the FACE, such as FOREHEAD; CHEEK; NOSE; and CHIN. It is characterized by FLUSHING; ERYTHEMA; EDEMA; RHINOPHYMA; papules; and ocular symptoms. It may occur at any age but typically after age 30. There are various subtypes of rosacea: erythematotelangiectatic, papulopustular, phymatous, and ocular (National Rosacea Society's Expert Committee on the Classification and Staging of Rosacea, J Am Acad Dermatol 2002; 46:584-7).",
    "arabic_definition": "العُد الوردي أو وردية الوجه أو حب الشباب الوردي (الإنجليزية: Rosacea)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012393.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "miliaria",
    "term_en": "Miliaria",
    "term_ar": "جاروسية",
    "synonyms": [
      "Miliaria Rubra",
      "Prickly Heat",
      "Heat, Prickly"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome of cutaneous changes associated with sweat retention and extravasation of sweat at different levels in the skin. Miliaria rubra, or prickly heat, results from apocrine duct obstruction. The sweat then seeps into the epidermis, producing pruritic erythematous papulovesicles. (From Dorland, 27th ed)",
    "arabic_definition": "الجاورسية (الإنجليزية: Miliaria) وله أسماء أخرى مثل طفح العرق ، حمو النيل ، الدخنية ، حصف الحر ( الدخنية الحمراء ) أو طفح الحر.هي مرض جلدي يتميز بالحكة والطفح الجلدي . والجاروسية هو مرض شائع في الظروف الحارة والرطبة، كما هو الحال في المناطق الاستوائية خلال موسم الصيف.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008883.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipedema",
    "term_en": "Lipedema",
    "term_ar": "وذمة شحمية",
    "synonyms": [
      "Lipedemas",
      "Lipoedema",
      "Lipoedemas",
      "Lipolymphedema",
      "Lipolymphedemas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorder of adipose tissue characterized by symmetric and bilateral enlargement of the lower extremities due to abnormal deposition of SUBCUTANEOUS FAT often in obese women. It is associated with HEMATOMA, pain and may progress to secondary LYMPHEDEMA which is known as lipolymphedema.",
    "arabic_definition": "الوذمة الشحمية أو الأوذيما الشحمية أو الألم الشحمي أو شُحام مُؤلِم أو داء ديركُم أو داء التكتُّل الشحمي المؤلم أو شَحَامَةٌ مُؤلِمَة أو تضخم شحمي مؤلم (الإنجليزية: Lipedema) هو اضطراب يتمثل في تضخم كلا الساقين بسبب ترسب الدهون تحت الجلد. وعادة ما يزداد سوءا بمرور الوقت، وقد يصاحبه وجود الألم، ويصاب فيه الأشخاص بالرضة بسهولة.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065134.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tinea",
    "term_en": "Tinea",
    "term_ar": "قوباء حلقية",
    "synonyms": [
      "Tineas",
      "Dermatophytoses",
      "Dermatophytosis",
      "Ringworm",
      "Epidermophytosis",
      "Epidermophytoses",
      "Trichophytosis",
      "Trichophytoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fungal infection of keratinized tissues such as hair, skin and nails. The main causative fungi include MICROSPORUM; TRICHOPHYTON; and EPIDERMOPHYTON.",
    "arabic_definition": "القوباء الحلقية (اللاتينية: Dermatophytosis) هي عدوى جلدية تتميز ببقع محمرة أو مائلة للبني على الجلد حيث تكون أقل تلوناً في المركز مما يعطي شكل الخاتم. يمكن لهذه البقع أن تتواجد في أي مكان في الجسم حيث تأخذ مسميات عديدة بناءً على مكان الإصابة. (Tinea)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014005.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exanthema",
    "term_en": "Exanthema",
    "term_ar": "طفح ظاهر",
    "synonyms": [
      "Exanthem",
      "Rash",
      "Skin Rash",
      "Rash, Skin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases in which skin eruptions or rashes are a prominent manifestation. Classically, six such diseases were described with similar rashes; they were numbered in the order in which they were reported. Only the fourth (Duke's disease), fifth (ERYTHEMA INFECTIOSUM), and sixth (EXANTHEMA SUBITUM) numeric designations survive as occasional synonyms in current terminology.",
    "arabic_definition": "الطفح الظاهر أو الطَّفَحِيَّة أو الحُمَّى الطفحية أو النُّفَاط (الإنجليزية: exanthema) وتسمى أيضا الحمى الطفحية.و هو الاسم الطبي المعطى إلى طفح واسع الانتشار. عادة ما تصيب الأطفال، تصاحبه أعراض شاملة مثل الحمى، التوعك والصداع.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005076.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lentigo",
    "term_en": "Lentigo",
    "term_ar": "عديسة",
    "synonyms": [
      "Lentigos",
      "Lentiginosis",
      "Lentiginoses",
      "Lentigines",
      "عديسة (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Small circumscribed melanoses resembling, but differing histologically from, freckles. The concept includes senile lentigo ('liver spots') and nevoid lentigo (nevus spilus, lentigo simplex) and may also occur in association with multiple congenital defects or congenital syndromes (e.g., Peutz-Jeghers syndrome).",
    "arabic_definition": "العديسة هي بقعة صغيرة منصبغة ذات حواف محددة بوضوح ومحاطة بالجلد الطبيعي المظهر. (Lentigo)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007911.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prurigo",
    "term_en": "Prurigo",
    "term_ar": "حكاك",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A name applied to several itchy skin eruptions of unknown cause. The characteristic course is the formation of a dome-shaped papule with a small transient vesicle on top, followed by crusting over or lichenification. (From Dorland, 27th ed)",
    "arabic_definition": "الحُكاك أَو الأُكَال أَو التهرُش (الإنجليزية: Prurigo) هو حكة جلدية شَديدة، ويَشمل أنواع مُحددة: الحكاك العُقيدي. الحكاك السفعي.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011536.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyoderma",
    "term_en": "Pyoderma",
    "term_ar": "تقيح الجلد",
    "synonyms": [
      "Pyodermas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any purulent skin disease (Dorland, 27th ed).",
    "arabic_definition": "تقيح الجلدوهي أي مرض جلدي قيحي (يوجد به صديد). وتشمل هذه الالتهابات البكتيرية سطحية مثل القوباء، قوباء، إكثيمة، التهاب الجريبات، قوباء بوكهارت، دمل، جمرة، القرحة المدارية، الخ تشمل حالات المناعة الذاتية مثل تقيح الجلد الغرغريني. (Pyoderma)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011711.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "piedra",
    "term_en": "Piedra",
    "term_ar": "بيصرة",
    "synonyms": [
      "Piedras",
      "Black Piedra",
      "Black Piedras",
      "Piedra, Black",
      "Piedras, Black",
      "White Piedra",
      "Piedras, White",
      "Piedra, White"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Either of two diseases resulting from fungal infection of the hair shafts. Black piedra occurs mainly in and on the hairs of the scalp and is caused by Piedraia hortae; white piedra occurs in and on the hairs of the scalp, beard, moustache and genital areas and is caused by Trichosporon species.",
    "arabic_definition": "البيصرة (الإنجليزية: Piedra) أو داء شعريات الأبواغ (الإنجليزية: Trichosporosis) هو مرض شعري يسببه نوع من الفطريات.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010854.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ecthyma",
    "term_en": "Ecthyma",
    "term_ar": "إكثيمة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An ulcerative pyoderma usually caused by group A beta-hemolytic streptococcal infection at the site of minor trauma. (Dorland, 27th ed)",
    "arabic_definition": "الإكثيمة هي عدوى بكتيرية في الجلد تبدأ بصورة بثرة يتكون حولها قشرة. وعند سقوط هذه القشرة، قد تتكون قرح واضحة المعالم يصل حجمها إلى 3 سنتيمترات، وقد تتضخم الغدد الليمفاوية كذلك. (Ecthyma)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004473.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sunburn",
    "term_en": "Sunburn",
    "term_ar": "حرق شمسي",
    "synonyms": [
      "Sunburns"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An injury to the skin causing erythema, tenderness, and sometimes blistering and resulting from excessive exposure to the sun. The reaction is produced by the ultraviolet radiation in sunlight.",
    "arabic_definition": "لفح الشمس أو السفعة (الإنجليزية: Sunburn)أو حروق الشمس. هو شكل من أشكال الإشعاع الذي تبثه اشعة الشمس, ويصيب الأنسجة الحية للإنسان، مثل الجلد،بحروق نتيجة للتعرض المفرط للأشعة فوق البنفسجية ،ممايسبب التهاب واحمرار بالجلد.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013471.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycetoma",
    "term_en": "Mycetoma",
    "term_ar": "ورم فطري",
    "synonyms": [
      "Maduromycosis",
      "Eumycetoma",
      "Actinomycetoma",
      "Madura Foot"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic progressive subcutaneous infection caused by species of fungi (eumycetoma), or actinomycetes (actinomycetoma). It is characterized by tumefaction, abscesses, and tumor-like granules representing microcolonies of pathogens, such as MADURELLA fungi and bacteria ACTINOMYCETES, with different grain colors.",
    "arabic_definition": "المايستوما أو الورم الفطري هو مرض التهابي مزمن مدمر تدريجيًا يصيب القدم عادة ولكن يمكن أن يتأثر به أي جزء من الجسم. على الأرجح تنتقل العدوى عن طريق التلقيح الرضحي لبعض الفطريات أو البكتيريا في الأنسجة تحت الجلد. (Mycetoma)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008271.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rheumatoid-arthritis",
    "term_en": "Rheumatoid Arthritis",
    "term_ar": "التهاب المفاصل الروماتويدي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic systemic disease, primarily of the joints, marked by inflammatory changes in the synovial membranes and articular structures, widespread fibrinoid degeneration of the collagen fibers in mesenchymal tissues, and by atrophy and rarefaction of bony structures. Etiology is unknown, but autoimmune mechanisms have been implicated.",
    "arabic_definition": "التهاب المفاصل الرَثَيَانِي أو الداء الرثياني أو الالتهاب المفصلي الروماتويدي (الإنجليزية: Rheumatoid arthritis) هو مرض مزمن، من الأمراض الانضدادية التي تؤدي بالجهاز المناعي لمهاجمة المفاصل، مسببة التهابات وتدميرًا لها. ومن الممكن أيضًا أن يدمر جهاز المناعة أعضاء أخرى في الجسم مثل الرئتين والجلد.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001172.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rheumatic-diseases",
    "term_en": "Rheumatic Diseases",
    "term_ar": "طب الروماتزم",
    "synonyms": [
      "Disease, Rheumatic",
      "Diseases, Rheumatic",
      "Rheumatic Disease",
      "Rheumatism",
      "Rheumatology"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorders of connective tissue, especially the joints and related structures, characterized by inflammation, degeneration, or metabolic derangement.",
    "arabic_definition": "طب الروماتزم أو مبحث الروماتزم أو طب الرثويات أو مبحث الرثويات (الإنجليزية: Rheumatology) هو فرع من فروع الطب الباطني يعنى بدراسة الأمراض التي تصيب الجهاز العضلي الهيكلي بما فيها العظام والمفاصل والأنسجة الرخوة، وهو يختلف عن جراحة العظام من حيث أنه لا يتدخل في العلاجات الجراحية وإنما يسعى لدراسة الآلية الإمراضية وتحديد أسباب المرض ومعالجته بالأدوية، ويعدّ مرض التهاب المفاصل الرثياني أهم الأمراض التي تتم دراستها في هذا الاختصاص، يليه الداء التنكسي أو ما يعرف بالروماتيزم. كما يعدّ مرض هشاشة العظام من الأمراض التي يكثر انتشارها حاليا وبالتالي الاهتمام بها في هذا الفرع من الطب، بالإضافة إلى الذئبة والتهابات الأوعية (اللاتينية: Vasculitis) وهي عموما أمراض قليلة الشيوع. (Rheumatic Diseases)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012216.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tietzes-syndrome",
    "term_en": "Tietze's Syndrome",
    "term_ar": "متلازمة تيتزا",
    "synonyms": [
      "Syndrome, Tietze's",
      "Tietzes Syndrome",
      "Tietze Syndrome",
      "Chondritis, Costal",
      "Chondritides, Costal",
      "Costal Chondritides",
      "Costal Chondritis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Idiopathic painful nonsuppurative swellings of one or more costal cartilages, especially of the second rib. The anterior chest pain may mimic that of coronary artery disease. (Dorland, 27th ed.)",
    "arabic_definition": "متلازمة تيتزا (وتسمى أيضا اعتلال الغضروف المحدب أو متلازمة التقاطع الغضروفي) هو التهاب حميد في واحد أو أكثر من الغضاريف الضلعية. تم وصفه لأول مرة في عام 1921 من قبل الجراح الألماني الكسندر تيتزي (1864-1927). (Tietze's Syndrome)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013991.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "granuloma-inguinale",
    "term_en": "Granuloma Inguinale",
    "term_ar": "داء الدونوفانيات",
    "synonyms": [
      "Donovanosis",
      "Granuloma Venereum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anogenital ulcers caused by Calymmatobacterium granulomatis as distinguished from lymphogranuloma inguinale (see LYMPHOGRANULOMA VENEREUM) caused by CHLAMYDIA TRACHOMATIS. Diagnosis is made by demonstration of typical intracellular Donovan bodies in crushed-tissue smears.",
    "arabic_definition": "داء الدونوفانية (الإنجليزية: Donovanosis) أو الورم البثري الحالبي أو داء الدونوفانيات أو المرض الدونوفاني أو الدونوفانوز أو التورم البثري القرحي للاعضاء الجنسية ومنطقة الحالبين هو وباء معدٍ، يتميز بنشوء تورم تقرحي لنسيج الأعضاء التناسلية والحالبين. اكتشفه للمرة الأولى العالم ماك ليود عام 1882م، أما المسبب فقد اكتشفه العالم (دونوفان) سنة 1905م، لذلك سمي المرض باسمه. (Granuloma Inguinale)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006100.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "psoriatic-arthritis",
    "term_en": "Psoriatic Arthritis",
    "term_ar": "التهاب المفصل في الصدفية",
    "synonyms": [
      "Psoriasis Arthropathica",
      "Psoriasis, Arthritic",
      "Arthritic Psoriasis",
      "Psoriatic Arthropathy",
      "Arthropathies, Psoriatic",
      "Arthropathy, Psoriatic",
      "Psoriatic Arthropathies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of inflammatory arthritis associated with PSORIASIS, often involving the axial joints and the peripheral terminal interphalangeal joints. It is characterized by the presence of HLA-B27-associated SPONDYLARTHROPATHY, and the absence of rheumatoid factor.",
    "arabic_definition": "التهاب المفصل في الصدفية (الإنجليزية: Psoriatic arthritis) التهاب المفاصل الصدافي يصيب 1 من كل 1000 من الناس، كما يصيب 7% من الأشخاص المصابين بالصداف. كما باقي أنواع التهاب المفاصل سلبي المصل (الإنجليزية: seronegative spondyloarthropathy) (مثل التهاب الفقار المقسط) معظم المرضى يحملون جين HLA-B27.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015535.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exfoliative-dermatitis",
    "term_en": "Exfoliative Dermatitis",
    "term_ar": "احمرار الجلد",
    "synonyms": [
      "Exfoliative Dermatitides",
      "Dermatitis Exfoliative Generalized",
      "Exfoliative Generalized, Dermatitis",
      "Dermatitis Exfoliative Generalised",
      "Dermatitis Exfoliative Generaliseds",
      "Exfoliative Generalised, Dermatitis",
      "Generalised, Dermatitis Exfoliative",
      "Dermatitis Exfoliative"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The widespread involvement of the skin by a scaly, erythematous dermatitis occurring either as a secondary or reactive process to an underlying cutaneous disorder (e.g., atopic dermatitis, psoriasis, etc.), or as a primary or idiopathic disease. It is often associated with the loss of hair and nails, hyperkeratosis of the palms and soles, and pruritus. (From Dorland, 27th ed)",
    "arabic_definition": "احمرار الجلد هو مرضٌ جلديٌ التهابيٌ يتميز باحمرارٍ وتقشرٍ يؤثر على كامل سطح الجلد تقريبًا. ينطبق هذا المصطلح عندما يتأثر 90% أو أكثر من الجلد. (Exfoliative Dermatitis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003873.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bullous-pemphigoid",
    "term_en": "Bullous Pemphigoid",
    "term_ar": "فقعان فقاعي",
    "synonyms": [
      "Pemphigoid",
      "Pemphigoids"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic and relatively benign subepidermal blistering disease usually of the elderly and without histopathologic acantholysis.",
    "arabic_definition": "الفقعان الفقاعي حالة مرضية نادرة.تسبب ظهور تقرحات على شكل فقاعات تحتوي سوائل تنتشر على الجلد.ويعتبر الفقعان الفقاعي مرض حويصلي مناعي ذاتي يصيب الكبار المسنين ويتصف بتراكم الـ أضداد IgG في الوصل البشروي. وتنتشر تلك الفقاعات في المساحة التي هي بين طبقات الجلد أي بين البشرة والأدمة. (Bullous Pemphigoid)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010391.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "juvenile-arthritis",
    "term_en": "Juvenile Arthritis",
    "term_ar": "التهاب المفاصل لدى الأطفال",
    "synonyms": [
      "Juvenile Idiopathic Arthritis",
      "Idiopathic Arthritis, Juvenile",
      "Arthritis, Juvenile Idiopathic",
      "Juvenile Chronic Arthritis",
      "Chronic Arthritis, Juvenile",
      "Juvenile Rheumatoid Arthritis",
      "Childhood Arthritis",
      "Arthritides, Childhood"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Arthritis in children, with onset before 16 years of age. The terms juvenile rheumatoid arthritis (JRA) and juvenile idiopathic arthritis (JIA) refer to classification systems for chronic arthritis in children. Only one subtype of juvenile arthritis (polyarticular-onset, rheumatoid factor-positive) clinically resembles adult rheumatoid arthritis and is considered its childhood equivalent.",
    "arabic_definition": "التهاب المفاصل لدى الأطفال أو التهاب المفاصل لدى الأحداث، هو شكل من أشكال التهابات المفاصل المزمنة أو التهاب المفاصل المزمن-المتعلق بالأشخاص تحت سن 16 سنة. وهو أحد أمراض المناعة الذاتية. (Juvenile Arthritis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001171.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "morgellons-disease",
    "term_en": "Morgellons Disease",
    "term_ar": "مورغيلونس",
    "synonyms": [
      "Disease, Morgellons",
      "Morgellon's",
      "Morgellons",
      "Morgellon",
      "Morgellons Syndrome",
      "Syndrome, Morgellons"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An unexplained illness which is characterized by skin manifestations including non-healing lesions, itching, and the appearance of fibers.",
    "arabic_definition": "مورغيلونس (الإنجليزية: Morgellons) هو اسم غير رسمي لحالة جلد مشخصة ذاتيًا والتي لا أساس لها علميًا ويعاني فيها الأفراد من تقرحات يعتقدون أنها تحتوي على مادة ليفية. مورغيلوس ليست مفهومة جيدًا، لكن الإجماع الطبي العام هو أنها شكل من أشكال الطفيليات الوهمية. (Morgellons Disease)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055535.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acne-vulgaris",
    "term_en": "Acne Vulgaris",
    "term_ar": "حب الشباب",
    "synonyms": [
      "Acne"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic disorder of the pilosebaceous apparatus associated with an increase in sebum secretion. It is characterized by open comedones (blackheads), closed comedones (whiteheads), and pustular nodules. The cause is unknown, but heredity and age are predisposing factors.",
    "arabic_definition": "حب الشباب أو العُدّ أو العُدّ الشائع هو مرض جلدي مزمن يحدث عندما تنسد جريب الشعرة بخلايا الجلد الميتة وزيت الجلد. يتميز حب الشباب بوجود الرؤوس السوداء أو الرؤوس البيضاء والبثور والبشرة الدهنية والتندب المحتمل. (Acne Vulgaris)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000152.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rheumatic-fever",
    "term_en": "Rheumatic Fever",
    "term_ar": "حمى الروماتزم",
    "synonyms": [
      "Fever, Rheumatic",
      "Rheumatic Fevers",
      "Acute Rheumatic Fever",
      "Acute Rheumatic Fevers",
      "Fever, Acute Rheumatic",
      "Fevers, Acute Rheumatic",
      "Rheumatic Fever, Acute",
      "Arthritis, Acute Rheumatic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A febrile disease occurring as a delayed sequela of infections with STREPTOCOCCUS PYOGENES. It is characterized by multiple focal inflammatory lesions of the connective tissue structures, such as the heart, blood vessels, and joints (POLYARTHRITIS) and brain, and by the presence of ASCHOFF BODIES in the myocardium and skin.",
    "arabic_definition": "حمى الروماتيزم، أو مايعرف بحمى رماتيزميه حادة، هي مرض التهابي يصيب القلب، المفاصل، الجلد، والمخ. تبدأ علامات المرض عادة بعد اسبوعين إلى اربع اسابيع من التهاب بلعومي. (Rheumatic Fever)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012213.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tinea-versicolor",
    "term_en": "Tinea Versicolor",
    "term_ar": "نخالية مبرقشة",
    "synonyms": [
      "Pityrosporum orbiculare Infection",
      "Infection, Pityrosporum orbiculare",
      "Pityrosporum orbiculare Infections",
      "Malassezia furfur Infection",
      "Infection, Malassezia furfur",
      "Malassezia furfur Infections",
      "Pityriasis Versicolor",
      "Pityriasis Folliculitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A common chronic, noninflammatory and usually symptomless disorder, characterized by the occurrence of multiple macular patches of all sizes and shapes, and varying in pigmentation from fawn-colored to brown. It is seen most frequently in hot, humid, tropical regions and is mostly caused by MALASSEZIA FURFUR (formerly Pityrosporum orbiculare).",
    "arabic_definition": "النُّخَالِيَّة المُبَرْقَشَة وتسمى أيضًا السعفة المُبَرْقَشَة (الإنجليزية: Pityriasis Versicolor) هي مرض فطري يصيب الإنسان. تسببها الفطريات المالاسيزية النخالية Malassezia Furfur. (Tinea Versicolor)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014010.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "skin-diseases",
    "term_en": "Skin Diseases",
    "term_ar": "مرض جلدي",
    "synonyms": [
      "Skin Disease",
      "Dermatosis",
      "Dermatoses",
      "Skin and Subcutaneous Tissue Disorders",
      "Skin condition"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases involving the DERMIS or EPIDERMIS.",
    "arabic_definition": "المرض الجلدي، هو أي حالة طبية تؤثر على الجهاز اللحافي الذي يغطي الجسم. يتضمن النظام الأحيائي آنف الذكر: الجلد والشعر والأظافر وما يرتبط بهم من عضلات وغدد. (Skin Diseases)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012871.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lichen-planus",
    "term_en": "Lichen Planus",
    "term_ar": "حزاز مسطح",
    "synonyms": [
      "Lichen Ruber Planus",
      "Lichen Rubra Planus",
      "Cutaneous Lichen Planus",
      "Lichen Planus, Cutaneous",
      "Mucosal Lichen Planus",
      "Lichen Planus, Mucosal",
      "Lichen Planopilaris",
      "Planopilaris, Lichen"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inflammatory, pruritic disease of the skin and mucous membranes, which can be either generalized or localized. It is characterized by distinctive purplish, flat-topped papules having a predilection for the trunk and flexor surfaces. The lesions may be discrete or coalesce to form plaques. Histologically, there is a saw-tooth pattern of epidermal hyperplasia and vacuolar alteration of the basal layer of the epidermis along with an intense upper dermal inflammatory infiltrate composed predominantly of T-cells. Etiology is unknown.",
    "arabic_definition": "الحزاز المسطح (الإنجليزية: LICHEN PLANUS) هو مرض جلدي أو طفح جلدي مزمن، غير وراثي، وغير معد، وله أشكال عديدة، وهو يصيب الجلد ويسبب تساقط الشعر والصلع الدائم (الصلع الندبي) على فروة الرأس، كما أنه قد يصيب الأظافر والأغشية المخاطية. ويتميز هذا المرض بمناطق محددة مرتفعة عن الجلد بعضها صغير المساحة تسمي حطاطات (papules)، وبعضها أكبر مساحة تسمي لويحات (plaques).",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008010.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "buruli-ulcer",
    "term_en": "Buruli Ulcer",
    "term_ar": "قرحة بورولي",
    "synonyms": [
      "Ulcer, Buruli",
      "Buruli Ulcer Disease",
      "Buruli Ulcer Diseases",
      "Disease, Buruli Ulcer",
      "Diseases, Buruli Ulcer",
      "Ulcer Disease, Buruli",
      "Ulcer Diseases, Buruli",
      "Infections, Mycobacterium ulcerans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A lesion in the skin and subcutaneous tissues due to infections by MYCOBACTERIUM ULCERANS. It was first reported in Uganda, Africa.",
    "arabic_definition": "قرحة بورولي، وتعرف أيضاً باسم «قرحة بيرنسديل» أو «قرحة سيرلز») هي عدوى تنجم عن المتفطرة المقرحة تتميز المرحة المبكرة من العدوى بوجود عُقيدَة (تدرن) أو تورم قد تتحول إلى قرحة. قد تكون القرحة من الداخل أكبر منها على سطح الجلد وقد تحاط القرحة بعُقيدات أو ورم. (Buruli Ulcer)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054312.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperpigmentation",
    "term_en": "Hyperpigmentation",
    "term_ar": "فرط التصبغ",
    "synonyms": [
      "Hypermelanosis",
      "Hypermelanoses",
      "Post-Inflammatory Hyperpigmentation",
      "Hyperpigmentation, Post-Inflammatory",
      "Hyperpigmentations, Post-Inflammatory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive pigmentation of the skin, usually as a result of increased epidermal or dermal melanin pigmentation, hypermelanosis. Hyperpigmentation can be localized or generalized. The condition may arise from exposure to light, chemicals or other substances, or from a primary metabolic imbalance.",
    "arabic_definition": "فَرْطُ التَّصَبُّغ (الإنجليزية: Hyperpigmentation) هو اغمقاق في مناطق من الجلد أو الأظافر ناتج عن زيادة في الميلانين.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017495.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pityriasis-rosea",
    "term_en": "Pityriasis Rosea",
    "term_ar": "نخالية وردية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mild exanthematous inflammation of unknown etiology. It is characterized by the presence of salmon-colored maculopapular lesions. The most striking feature is the arrangement of the lesions such that the long axis is parallel to the lines of cleavage. The eruptions are usually generalized, affecting chiefly the trunk, and the course is often self-limiting.",
    "arabic_definition": "النخالية الوردية (الإنجليزية: Pityriasis rosea) وتُعرف أيضاً باسم النخالية الوردية لجايبرت (pityriasis rosea Gibert) هي طفح جلدي حميد غير مُعدٍ يشفى تلقائياً، يتظاهر بآفة أولية أو تجمع آفات (بقعة الطليعة \"herald patch\") التي هي طبقة أولية يتبعها بعد أسبوع أو أسبوعين طفحٌ جلدي ثانوي مع توزيع نموذجي معمم لنحو 12 اسبوع (عادةً 6-8 أسابيع).",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017515.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chromoblastomycosis",
    "term_en": "Chromoblastomycosis",
    "term_ar": "فطار اصطباغي",
    "synonyms": [
      "Chromoblastomycoses",
      "Chromomycosis",
      "Chromomycoses",
      "Dermatitis Verrucosa"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Scaly papule or warty growth, caused by five fungi, that spreads as a result of satellite lesions affecting the foot or leg. The extremity may become swollen and, at its distal portion, covered with various nodular, tumorous, verrucous lesions that resemble cauliflower. In rare instances, the disease may begin on the hand or wrist and involve the entire upper extremity. (Arnold, Odom, and James, Andrew's Diseases of the Skin, 8th ed, p362)",
    "arabic_definition": "الفطار الاصطباغي، عدوى فطرية طويلة الأمد تصيب الجلد والأنسجة تحت الجلد (فُطار مزمن تحت الجلد). يشيع حدوث العدوى في المناخات المدارية أو شبه الاستوائية، وغالبًا في المناطق الريفية. (Chromoblastomycosis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002862.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "serum-sickness",
    "term_en": "Serum Sickness",
    "term_ar": "داء المصل",
    "synonyms": [
      "Serum Sicknesses",
      "Sicknesses, Serum",
      "Sickness, Serum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Immune complex disease caused by the administration of foreign serum or serum proteins and characterized by fever, lymphadenopathy, arthralgia, and urticaria. When they are complexed to protein carriers, some drugs can also cause serum sickness when they act as haptens inducing antibody responses.",
    "arabic_definition": "داء المصل (بالإنجليزية: Serum Sickness) هو اضطراب مناعي يصيب كامل الجسم بعد تعرضه لمادة غريبة ما والتي غالبا ما تكون دواء ما أو مصل ومن هنا جاءت تسمية المرض. ويستخدم أحيانا مصطلح داء المصل للإشارة إلى الأمراض المشابهة التي تنشا من استخدام مواد غير بروتينية معينة.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012713.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hair-diseases",
    "term_en": "Hair Diseases",
    "term_ar": "مرض شعري",
    "synonyms": [
      "Hair Disease",
      "Plica neuropathica",
      "neuropathica, Plica",
      "neuropathicas, Plica",
      "Plica neuropathicas",
      "Plica polonica"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases affecting the orderly growth and persistence of hair.",
    "arabic_definition": "داء أو مرض الشعر وكذلك الداء أو المرض الشعري هي أوصاف لأي اضطراب أو مرض مرتبط بصورة أساسية ببصيلة الشعرة. من الأمثلة عليه فرط الشعر. (Hair Diseases)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006201.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "herpes-simplex",
    "term_en": "Herpes Simplex",
    "term_ar": "هربس",
    "synonyms": [
      "Herpes Simplex Virus Infection",
      "Herpes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of acute infections caused by herpes simplex virus type 1 or type 2 that is characterized by the development of one or more small fluid-filled vesicles with a raised erythematous base on the skin or mucous membrane. It occurs as a primary infection or recurs due to a reactivation of a latent infection. (Dorland, 27th ed.)",
    "arabic_definition": "الهِرْبِس أو الحَلأ أو لطمة حمى أو العُقْبولة (الإنجليزية: Herpes) هيَ إصابة فيروسية متكررة بسيطة (في العادة) تصيب الجلد، وتنتج عن فيروس الحلأ البسيط، ومعظم الإصابات تمر بدون أن يتم ملاحظتها أو تشخيصها. يقسم الهربس البسيط إلى هربس فموي يؤدي إلى تقرحات حول الفم أو في الوجه، والهربس التناسلي حيث تصاب الأعضاء التناسلية بالتقرحات، أو الأرداف أو منطقة الشرج. (Herpes Simplex)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006561.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erysipelas",
    "term_en": "Erysipelas",
    "term_ar": "حمرة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute infection of the skin caused by species of STREPTOCOCCUS. This disease most frequently affects infants, young children, and the elderly. Characteristics include pink-to-red lesions that spread rapidly and are warm to the touch. The commonest site of involvement is the face.",
    "arabic_definition": "الحُمْرَة مرض جلدي حاد بسبب عدوى على مستوى الجلد والانسجة تحت-الجلدية. تحدث بعد مرض جلدي غير معالج (جرح، حصف، عدوى فطرية في طيات الجسم)، مما يتسبب بالتهاب موضعي يؤدي إلى احمرار وتورم في الجلد. (Erysipelas)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004886.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cholesteatoma",
    "term_en": "Cholesteatoma",
    "term_ar": "ورم كوليسترولي",
    "synonyms": [
      "Cholesteatomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A non-neoplastic mass of keratin-producing squamous EPITHELIUM, frequently occurring in the MENINGES; bones of the skull, and most commonly in the MIDDLE EAR and MASTOID region. Cholesteatoma can be congenital or acquired. Cholesteatoma is not a tumor nor is it associated with high CHOLESTEROL.",
    "arabic_definition": "الورم الكوليسترولي (الإنجليزية: cholesteatoma) هو تجمُّع غير طبيعي لخلايا جلديَّة داخل الأذن، وهو حالةٌ غير شائعة جداً. قد يُؤدي إهمال علاجه إلى استمرار نموُّه مُسبِّباً الضررَ للبُنى الدقيقة داخلَ الأذن، مثل العظام الصغيرة (العُظَيمات) والأعضاء الضروريَّة للسمع والتوازن.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002781.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hirsutism",
    "term_en": "Hirsutism",
    "term_ar": "شعرانية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition observed in WOMEN and CHILDREN when there is excess coarse body hair of an adult male distribution pattern, such as facial and chest areas. It is the result of elevated ANDROGENS from the OVARIES, the ADRENAL GLANDS, or exogenous sources. The concept does not include HYPERTRICHOSIS, which is an androgen-independent excessive hair growth.",
    "arabic_definition": "الشعرانية (الإنجليزية: Hirsutism) وهو ظهور للأِشعار لدى الأناث بتوزع ذكوري أي في مناطق محددة في الجسم بكميات غير طبيعية.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006628.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "psoriasis",
    "term_en": "Psoriasis",
    "term_ar": "صدفية",
    "synonyms": [
      "Psoriases",
      "Pustulosis of Palms and Soles",
      "Pustulosis Palmaris et Plantaris",
      "Palmoplantaris Pustulosis",
      "Pustular Psoriasis of Palms and Soles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A common genetically determined, chronic, inflammatory skin disease characterized by rounded erythematous, dry, scaling patches. The lesions have a predilection for nails, scalp, genitalia, extensor surfaces, and the lumbosacral region. Accelerated epidermopoiesis is considered to be the fundamental pathologic feature in psoriasis.",
    "arabic_definition": "الصدفية (اللاتينية: Psoriasis)، مرض مناعي ذاتي طويل الأمد، يتميّز ببقع غير طبيعية في الجلد. عادةً ما تكون بقع الجلد هذه حمامى أو جفاف في الجلد أو حكة وتقشّر.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011565.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leishmaniasis",
    "term_en": "Leishmaniasis",
    "term_ar": "داء الليشمانيات",
    "synonyms": [
      "Leishmaniases",
      "Leishmania Infection",
      "Infection, Leishmania",
      "Infections, Leishmania",
      "Leishmania Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease caused by any of a number of species of protozoa in the genus LEISHMANIA. There are four major clinical types of this infection: cutaneous (Old and New World) (LEISHMANIASIS, CUTANEOUS), diffuse cutaneous (LEISHMANIASIS, DIFFUSE CUTANEOUS), mucocutaneous (LEISHMANIASIS, MUCOCUTANEOUS), and visceral (LEISHMANIASIS, VISCERAL).",
    "arabic_definition": "داء الليشمانيات (الاسم العلمي: Leishmaniasis)، هي مجموعة من الأمراض الطفيلية يسببها عدد من أنواع الأوالي من جنس الليشمانيا. تتفاوت تظاهرات المرض من آفات جلدية تشفى عفوياً (داء الليشمانيات الجلدي) إلى مرض جهازي فتّاك (داء الليشمانيات الحشوي).",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007896.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipodystrophy",
    "term_en": "Lipodystrophy",
    "term_ar": "حثل شحمي",
    "synonyms": [
      "Lipodystrophies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A collection of heterogenous conditions resulting from defective LIPID METABOLISM and characterized by ADIPOSE TISSUE atrophy. Often there is redistribution of body fat resulting in peripheral fat wasting and central adiposity. They include generalized, localized, congenital, and acquired lipodystrophy.",
    "arabic_definition": "الحثل الشحمي (الإنجليزية: Lipodystrophy) هي حالة مرضية تتصف بنسيج دهني غير طبيعي أو منتكس. يستخدم مصطلح الضمور الشحمي عندما يكون فقدان الشحوم موضعيا (عادة ما يكون في الوجه).",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008060.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "onchocerciasis",
    "term_en": "Onchocerciasis",
    "term_ar": "داء كلابية الذنب",
    "synonyms": [
      "Onchocerciases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with nematodes of the genus ONCHOCERCA. Characteristics include the presence of firm subcutaneous nodules filled with adult worms, PRURITUS, and ocular lesions.",
    "arabic_definition": "داء كلابيات الذنب البشري أو العمى النهري أو عمى النهر (الاسم العلمي: Onchocerciasis)، هو مرض طفيلي تتسبب به الدودة الطفيلية الخيطية المسماة كلابية الذنب المتلوية (Onchocerca Volvulus) ومن أعراضه الحكة الشديدة وكُتَل تحت الجلد والعمى؛ حيث أنه يعدّ ثاني أكبر مسبب للعمى بعد التراخوما. تنتقل الدودة الطفيلية بواسطة اللدغات المتكررة من الذبابة السوداء Blood-Ducking Blackfly من نوع (Simulium Damnosum) الذلفاء؛ عادة يتطلب لدغات متكررة لحدوث العدوى، حيث تعيش وتتكاثر مثل هذه الذبابات في الأنهار والمجاري المائية السريعة الجريان؛ ومن هنا اشتق اسم هذا المرض.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009855.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurodermatitis",
    "term_en": "Neurodermatitis",
    "term_ar": "التهاب الجلد العصبي",
    "synonyms": [
      "Neurodermatitides",
      "Lichen Simplex Chronicus",
      "Neurodermatitis, Circumscribed",
      "Circumscribed Neurodermatitides",
      "Circumscribed Neurodermatitis",
      "Neurodermatitides, Circumscribed",
      "Neurodermatitis, Localized",
      "Localized Neurodermatitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An extremely variable eczematous skin disease that is presumed to be a response to prolonged vigorous scratching, rubbing, or pinching to relieve intense pruritus. It varies in intensity, severity, course, and morphologic expression in different individuals. Neurodermatitis is believed by some to be psychogenic. The circumscribed or localized form is often referred to as lichen simplex chronicus.",
    "arabic_definition": "التهاب الجلد العصبي (بالإنجليزية Neurodermatitis). ويسمى أيضا حزاز بسيط مزمن أو حزاز محصور(Lichen simplex chronicus ).",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009450.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "folliculitis",
    "term_en": "Folliculitis",
    "term_ar": "التهاب جريبي",
    "synonyms": [
      "Folliculitides",
      "Sycosis",
      "Sycoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of follicles, primarily hair follicles.",
    "arabic_definition": "طفح حوض الاستحمام الساخن (الإنجليزية: Folliculitis) هو التهاب الجلد أو مسام الشعر في الجلد (فوليكوليتيس) بسبب الاتصال بالمياه الملوثه. تحدث الإصابة بصورة أكثر شيوعا بعد السباحة في أحواض ساخنة أو منتجعات ملوثة.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005499.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "panniculitis",
    "term_en": "Panniculitis",
    "term_ar": "التهاب السبلة الشحمية",
    "synonyms": [
      "Panniculitides",
      "Cold Panniculitis",
      "Cold Panniculitides",
      "Panniculitides, Cold",
      "Panniculitis, Cold",
      "Panniculitis, Subacute Nodular Migratory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "General term for inflammation of adipose tissue, usually of the skin, characterized by reddened subcutaneous nodules.",
    "arabic_definition": "التهاب السبلة الشحمية هي مجموعة من التهابات التي تصيب الطبقة الداخلية من الجلد (الطبقة الدهنية تحت الجلد - الأنسجة الدهنية). التي تتسبب بظهور بثور متعددة في الوركين، الصدر والثديين. (Panniculitis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015434.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cellulitis",
    "term_en": "Cellulitis",
    "term_ar": "التهاب النسيج الخلوي",
    "synonyms": [
      "Phlegmon"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute, diffuse, and suppurative inflammation of loose connective tissue, particularly the deep subcutaneous tissues, and sometimes muscle, which is most commonly seen as a result of infection of a wound, ulcer, or other skin lesions.",
    "arabic_definition": "التهاب الهلل (التهاب النسيج الخلوي) هو التهاب موضعي أو منتشر في النسيج الضام تسببه الجراثيم، يترافق مع التهاب حاد في الأدمة و الطبقات تحت الجلد. يمكن أن يكون سبب التهاب الهلل هو فلورا الجلد الطبيعية أو عن طريق البكتيريا الخارجية، وغالبا أنه يحدث عندما يكون هناك رضّ سابق للجلد، مثل: تشققات في الجلد، جروح، بثور، والحروق، وعضات ولسعات الحشرات ، والجروح الجراحية، وحقن الأدوية في الوريد أو مواقع إدخال القثطرة الوريدية . (Cellulitis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002481.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chloracne",
    "term_en": "Chloracne",
    "term_ar": "عد كلوري المنشأ",
    "synonyms": [
      "Chloracnes",
      "Chlorine Acne",
      "Acne, Chlorine",
      "Acnes, Chlorine",
      "Chlorine Acnes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "ACNE-like skin eruptions caused by exposure to CHLORINE-containing compounds. Exposure can be by inhalation, ingestion, or through the skin. Chloracne is often seen in people who have occupational contact with chlorinated pesticides, wood preservatives, and sealants.",
    "arabic_definition": "العد كلوري المنشأ (الإنجليزية: Chloracne) هو طفح شبيه بحب الشباب على شكل رؤوس سوداء وكيسات وبثور مرتبط بالتعرض المفرط للمركبات العطرية الهالوجينية مثل مركبات الديوكسين ومركبات ثنائي بنزوفيوران المحتوية على الكلور. تظهر علاماته عادة على الخدين ووراء الأذنين والإبطين ومنطقة أعلى الفخذ.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054506.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperhidrosis",
    "term_en": "Hyperhidrosis",
    "term_ar": "فرط التعرق",
    "synonyms": [
      "Hyperidrosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive sweating. In the localized type, the most frequent sites are the palms, soles, axillae, inguinal folds, and the perineal area. Its chief cause is thought to be emotional. Generalized hyperhidrosis may be induced by a hot, humid environment, by fever, or by vigorous exercise.",
    "arabic_definition": "فرط التعرق الأوّلي (الإنجليزية: Hyperhidrosis) هي حالة تتميز بزيادة إفراز العرق عن الحد الطبيعي المطلوب لتنظيم درجة حرارة الجسم. يشعر المصابون بهذه الحالة بنوع من فقد السيطرة ذلك أن العرق يحدث بشكل مستقل عن درجة الحرارة أو الحالة المزاجية.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006945.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blastomycosis",
    "term_en": "Blastomycosis",
    "term_ar": "داء الفطار البرعمي",
    "synonyms": [
      "Blastomycoses",
      "Blastomyces Infection",
      "Blastomyces Infections",
      "Infection, Blastomyces",
      "Blastomycosis, North American",
      "North American Blastomycosis",
      "Gilchrist's Disease",
      "Gilchrists Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A fungal infection by BLASTOMYCES that may appear in two forms: 1, a primary lesion characterized by the formation of a small cutaneous nodule and small nodules along the lymphatics that may heal within several months; and 2, chronic granulomatous lesions characterized by thick crusts, warty growths, and unusual vascularity and infection in the middle or upper lobes of the lung.",
    "arabic_definition": "داء الفطار البرعمي أو أمراض يسببها فطر البلاستومايسيس Blastomycosis. مرض فطري ينتج عن استنشاق الفطور البرعمية، إذا شملت الإصابة الرئتين فقط فإنه يسمى داء الفطار الرئوي.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001759.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urticaria",
    "term_en": "Urticaria",
    "term_ar": "شرى",
    "synonyms": [
      "Urticarias",
      "Hives",
      "Urticarial Wheals",
      "Urticarial Wheal",
      "Wheals, Urticarial",
      "Wheal, Urticarial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A vascular reaction of the skin characterized by erythema and wheal formation due to localized increase of vascular permeability. The causative mechanism may be allergy, infection, or stress.",
    "arabic_definition": "الشَّرَى أو الشرية (الإنجليزية: Urticaria) هي مرض حساسي جلدي. يحدث عادة نتيجة التعرض لمادة مؤرجة مما بسبب آفة جلدية مميزة تسمى اللحبة أو الانتبار الشروي (تتكون لطخات جلدية حمراء مرتفعة عن سطح الجلد شديدة الحكاكة).",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014581.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "furunculosis",
    "term_en": "Furunculosis",
    "term_ar": "دمل",
    "synonyms": [
      "Boils",
      "Furuncles",
      "Boil (infection)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A persistent skin infection marked by the presence of furuncles, often chronic and recurrent. In humans, the causative agent is various species of STAPHYLOCOCCUS. In salmonid fish (SALMONIDS), the pathogen is AEROMONAS SALMONICIDA.",
    "arabic_definition": "الدُّمَّل أو الخراج هو التهاب جريبي عميق معدي بفروة الرأس (عدوى بصيلات الشعر). وينتج الدمل دائمًا عن الإصابة بنوع من البكتيريا يطلق عليه المكورات العنقودية الذهبية، مما يؤدي إلى تورم مؤلم في المنطقة المصابة بالجلد، وذلك بسبب اختزان الصديد وتراكم الخلايا الميتة. (Furunculosis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005667.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypopigmentation",
    "term_en": "Hypopigmentation",
    "term_ar": "نقص التصبغ",
    "synonyms": [
      "Hypomelanosis",
      "Hypomelanoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by a deficiency or a loss of melanin pigmentation in the epidermis, also known as hypomelanosis. Hypopigmentation can be localized or generalized, and may result from genetic defects, trauma, inflammation, or infections.",
    "arabic_definition": "نقص التصبغ هو نقصان في لون الجلد. تحدث هذه الظاهرة نتيجة استنزاف الخلايا الميلانينية بسب نقص في الحمض الأميني تايروسين والذي يستخدم في صنع الميلانين. (Hypopigmentation)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017496.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pemphigus",
    "term_en": "Pemphigus",
    "term_ar": "فقاع",
    "synonyms": [
      "Pemphigus Vulgaris",
      "Pemphigus Foliaceus",
      "Foliaceus, Pemphigus",
      "فقاع (مرض)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Group of chronic blistering diseases characterized histologically by ACANTHOLYSIS and blister formation within the EPIDERMIS.",
    "arabic_definition": "الفقاع هو مجموعة من أمراض المناعة الذاتية النادرة التي تمتاز بوجود تبثر يؤثر على الجلد والأغشية المخاطية. في الفقاع، تتكون أضداد ذاتية ضد الدزموغلين. (Pemphigus)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010392.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypertrichosis",
    "term_en": "Hypertrichosis",
    "term_ar": "فرط الإشعار",
    "synonyms": [
      "Hypertrichoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive hair growth at inappropriate locations, such as on the extremities, the head, and the back. It is caused by genetic or acquired factors, and is an androgen-independent process. This concept does not include HIRSUTISM which is an androgen-dependent excess hair growth in WOMEN and CHILDREN.",
    "arabic_definition": "فرط الأشعار (المسمى أيضا بمتلازمة أمبراس ) معدل غير طبيعي لنمو الشعر في الجسم. وقد سمّيت الكثير من حالات الإصابة بفرط الشعر بمتلازمة المستئذبين، وهي تسمية غير رسمية، وذلك لأن المظهر الخارجي يشبه أسطورة المستئذبين. (Hypertrichosis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006983.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "intertrigo",
    "term_en": "Intertrigo",
    "term_ar": "التهاب جلدي متقابل",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A superficial dermatitis occurring on skin surfaces in contact with each other, such as the axillae, neck creases, intergluteal fold, between the toes, etc. Obesity is a predisposing factor. The condition is caused by moisture and friction and is characterized by erythema, maceration, burning, and exudation.",
    "arabic_definition": "التهاب جلدي متقابل أو التسميط أو داء الثنيات أو المذح أو التِهاب سطْحَي الجلد المُتَحاكَّين أو الوَذَح (الإنجليزية: Intertrigo) ويسمى أيضاً \"طفح ثنايا الجلد\" هو طفح يصب ثنيات الجسم سببه بكتيرية، فطرية أو فيروسية (الاماكن المتاخمة من الجلد ) أي الأماكن الجلدية التي تتصل ببعضها في أغلب الأوقات وتكون دافئة ورطبة. مثل الابطين، وتحت الثديين، الجانب السفلي من البطن، خلف الأذنين، الفخذين و الأعضاء التناسلية، بين أصابع القدم و أصابع اليدين.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007402.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paronychia",
    "term_en": "Paronychia",
    "term_ar": "التهاب حول الظفر",
    "synonyms": [
      "Paronychias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inflammatory reaction involving the folds of the skin surrounding the fingernail. It is characterized by acute or chronic purulent, tender, and painful swellings of the tissues around the nail, caused by an abscess of the nail fold. The pathogenic yeast causing paronychia is most frequently Candida albicans. Saprophytic fungi may also be involved. The causative bacteria are usually Staphylococcus, Pseudomonas aeruginosa, or Streptococcus. (Andrews' Diseases of the Skin, 8th ed, p271)",
    "arabic_definition": "التهاب حول الظفر أو التهاب حتار الظفر أو داحس (الإنجليزية: Paronychia) هو التهاب يصيب حافة الظفر حيث يصبح الجلد أحمرًا ومنتفخًا وبه ألم أيضًا ثم تسبب البكتيريا وتسمى المكورات العنقودية خراجا مليئا بالقيح مما يستدعي الرعاية السريعة لتجنب تطور الخراج.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010304.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "onychomycosis",
    "term_en": "Onychomycosis",
    "term_ar": "التهاب الظفر الفطري",
    "synonyms": [
      "Onychomycoses",
      "Tinea Unguium",
      "Nail Fungus",
      "Fungus, Nail"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A fungal infection of the nail, usually caused by DERMATOPHYTES; YEASTS; or nondermatophyte MOLDS.",
    "arabic_definition": "التهاب الظفر الفطري (الإنجليزية: Tinea unguium) يُعرف أيضًا باسم سعفة الأظافر، هو عدوى فطرية في الظفر. قد تشمل الأعراض تلون الظفر باللون الأبيض أو الأصفر، وتسمك الظفر وانفصال الظفر عن السرير الظفري. (Onychomycosis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014009.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pityriasis",
    "term_en": "Pityriasis",
    "term_ar": "نخالية",
    "synonyms": [
      "Pityriases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A name originally applied to a group of skin diseases characterized by the formation of fine, branny scales, but now used only with a modifier. (Dorland, 27th ed)",
    "arabic_definition": "النخالية (الإنجليزية: Pityriasis) هو تقشر أو تحرشف يصيب الجلد.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010915.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radiodermatitis",
    "term_en": "Radiodermatitis",
    "term_ar": "حرق إشعاعي",
    "synonyms": [
      "Radiodermatitides",
      "Dermatitis, Radiation-Induced",
      "Dermatitides, Radiation-Induced",
      "Radiation-Induced Dermatitides",
      "Radiation-Induced Dermatitis",
      "Radiation Recall Dermatitis",
      "Dermatitides, Radiation Recall",
      "Dermatitis, Radiation Recall"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cutaneous inflammatory reaction occurring as a result of exposure to ionizing radiation.",
    "arabic_definition": "الحرق الإشعاعي هو الضرر الذي يصيب الجلد أو الأنسجة البيولوجية الأخرى بسبب التعرض للإشعاع. من أنواع الإشعاع الأكثر إثارة للقلق هي الاشعاع الحراري، وطاقة الترددات الراديوية، والأشعة فوق البنفسجية والأشعة المؤينة. (Radiodermatitis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011855.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "melanosis",
    "term_en": "Melanosis",
    "term_ar": "تملن",
    "synonyms": [
      "Melanoses",
      "Melanism",
      "Freckles",
      "Freckle",
      "Chloasma",
      "Chloasmas",
      "Melasma",
      "Melasmas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorders of increased melanin pigmentation that develop without preceding inflammatory disease.",
    "arabic_definition": "التَمَلُّن(1) هو شكلٌ من أشكالِ فرط التصبغ المُرتبطِ بزيادة الميلانين، ومن المُمكن أن يُقصد بها: (Melanosis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008548.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "onycholysis",
    "term_en": "Onycholysis",
    "term_ar": "انفكاك الظفر",
    "synonyms": [
      "Onycholyses",
      "Photo-onycholysis",
      "Photo-onycholyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Separation of nail plate from the underlying nail bed. It can be a sign of skin disease, infection (such as ONYCHOMYCOSIS) or tissue injury.",
    "arabic_definition": "انفكاك الظفر ( بالإنجليزية:Onycholysis ) يشير إلى انفصال الظفر عن سرير الظفر، في الغالب يبدأ من مقدمة الظفر وأو من الجانبين. في اليدين، يُقال أنه يحدث على وجه الخصوص في البنصر ولكنه يمكن أن يحدث في أي ظُفر.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054039.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteochondritis",
    "term_en": "Osteochondritis",
    "term_ar": "التهاب العظم والغضروف",
    "synonyms": [
      "Osteochondritides",
      "Meniscitis",
      "Meniscitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of a bone and its overlaying CARTILAGE.",
    "arabic_definition": "التهاب العظم والغضروف هو أحد الأنواع المؤلمة للداء العظمي الغضروفي \"Osteochondrosis\" حيث يحدث التهاب في كل من العظم والغضروف لمفصل ما. أحيانا يشير الي التهاب العظم والغضروف السالخ حيث يحدث انفصال للأنواع المعروفة الأخرى لالتهاب العظم والغضروف وهي الْتِهابُ العَظْمِ و الغُضْروفِ المُشَوِّهُ اليَفَعِيّ (التهاب في الرأس لعظمة الفخذ) و الْتِهابُ العَظْمِ والغُضْروفِ الظَّهْرِيِّ المُشَوِّهُ اليَفَعِيُّ (التهاب في فقرات العمود الفقري، ويعرف أيضا بمرض شيرمان). (Osteochondritis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010007.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erythrasma",
    "term_en": "Erythrasma",
    "term_ar": "وذح",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic bacterial infection of major folds of the skin, caused by Corynebacterium minutissimum.",
    "arabic_definition": "وذح (بالإنجليزية Erythrasma) هو التهاب بالجلد تسببه بكتيريا الوتدية المستدقة. يكون لونه وردي في البداية على شكل لطخات وردية غير منتظمة، ولكن مع تطور الالتهاب بسرعة تصبح بنية اللون ومتقشرة .يكثر انتشار هذا المرض بين مرضى السكر والمصابين بالسمنة، وفي المناطق ذات المناخ الدافئ، ويتم ذلك من خلال ارتداء الملابس بشكل كثيف .",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004894.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lipomatosis",
    "term_en": "Lipomatosis",
    "term_ar": "داء شحمي",
    "synonyms": [
      "Lipomatoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder characterized by the accumulation of encapsulated or unencapsulated tumor-like fatty tissue resembling LIPOMA.",
    "arabic_definition": "يُعتقد أن الورم الشحمي أو الداء الشحمي (بالإنجليزية: Lipomatosis) هو حالة جسمية سائدة حيث توجد أورام شحمية متعددة على الجسم. تتشكل العديد من الأورام الشحمية المنفصلة والمغلفة على الجذع والأطراف، مع وجود عدد قليل نسبيًا على الرأس والكتفين.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008068.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sporotrichosis",
    "term_en": "Sporotrichosis",
    "term_ar": "داء الشعريات المبوغة",
    "synonyms": [
      "Sporotrichoses",
      "Sporothrix Infection",
      "Infection, Sporothrix",
      "Sporothrix Infections",
      "Sporothrix schenckii Infection",
      "Infection, Sporothrix schenckii",
      "Sporothrix schenckii Infections",
      "Sporothrix brasiliensis Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The commonest and least serious of the deep mycoses, characterized by nodular lesions of the cutaneous and subcutaneous tissues. It is caused by inhalation of contaminated dust or by infection of a wound with SPOROTHRIX.",
    "arabic_definition": "داء الشعريات المبوغة (الإنجليزية: Sporotrichosis) عدوى فطرية تصيب الجلد والرئتين والمفاصل والعظام، وقد تكون واسعة الانتشار. تسبب العدوى ظهور عقيدات ثابتة غير مؤلمة تتقرح لاحقًا، وقد تكون موضعيةً أو منتشرةً.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013174.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "keratoacanthoma",
    "term_en": "Keratoacanthoma",
    "term_ar": "الشوكوم القرني",
    "synonyms": [
      "Keratoacanthomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A benign, non-neoplastic, usually self-limiting epithelial lesion closely resembling squamous cell carcinoma clinically and histopathologically. It occurs in solitary, multiple, and eruptive forms. The solitary and multiple forms occur on sunlight exposed areas and are identical histologically; they affect primarily white males. The eruptive form usually involves both sexes and appears as a generalized papular eruption.",
    "arabic_definition": "ورم شائكي متقرن أو شوكوم قرني أو ورم حسكي قرني (الإنجليزية: Keratoacanthoma) هو درجة منخفضة (من غير المرجح أن تنتقل أو تغزو) من الأورام الجلدية التي يعتقد أن منشأها هو عنق بصيلات الشعر. السمة المميزة للشوكوم القرني هو أنها على شكل قبة، متناظرة، ويحيط بها جدار أملس من الجلد الملتهب، وتمتليء بالكيراتين وحطام الخلايا.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007636.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lobomycosis",
    "term_en": "Lobomycosis",
    "term_ar": "داء لوبو",
    "synonyms": [
      "Lobomycoses",
      "Jorge Lobo Disease",
      "Disease, Jorge Lobo",
      "Jorge Lobo's Disease",
      "Disease, Jorge Lobo's",
      "Jorge Lobos Disease",
      "Keloidal Blastomycosis",
      "Blastomycoses, Keloidal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic, fungal, subcutaneous infection endemic in rural regions in South America and Central America. The causal organism is Lacazia labol.",
    "arabic_definition": "داء لوبو (اللوبومايكوزيس) هو عبارة عن عدوى فطرية تصيب الجلد. وعادة ما تظهر مع نتوءات في الجلد، وتورمات قوية، وآفات جلدية عميقة، أو أورام خبيثة. (Lobomycosis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060368.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhinophyma",
    "term_en": "Rhinophyma",
    "term_ar": "تعجر الأنف",
    "synonyms": [
      "Rhinophymas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A manifestation of severe ROSACEA resulting in significant enlargement of the NOSE and occurring primarily in men. It is caused by hypertrophy of the SEBACEOUS GLANDS and surrounding CONNECTIVE TISSUE. The nose is reddened and marked with TELANGIECTASIS.",
    "arabic_definition": "تعجّر الأنف أو تضخم الأنف أو فِيمة الأنف (الإنجليزية: Rhinophyma) هو مصطلح وصفي لتغير مظهر الأنف، حيث يبدو عريضاً ومنتفخاً وحبيبياًّ ووردي اللون، وهو ناتج عادة لعد وردي غير معالج.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012224.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hidradenitis",
    "term_en": "Hidradenitis",
    "term_ar": "التهاب الغدد العرقية",
    "synonyms": [
      "Hidradenitides",
      "Hidrosadenitis",
      "Hidrosadenitides",
      "Hydradenitis",
      "Hydradenitides",
      "Neutrophilic Eccrine Hidradenitis",
      "Eccrine Hidradenitides, Neutrophilic",
      "Eccrine Hidradenitis, Neutrophilic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inflammation of a sweat gland (usually of the apocrine type). The condition can be idiopathic or occur as a result of or in association with another underlying condition. Neutrophilic eccrine hidradenitis is a relatively rare variant that has been reported in patients undergoing chemotherapy, usually for non-Hodgkin lymphomas or leukemic conditions.",
    "arabic_definition": "التهاب الغدد العرقية هو التهاب مزمن يصيب خلايا البشرة الجريبية الموجودة في الغدة المفرزة للعرق. قد يحدث في عدة مناطق في الجسم. (Hidradenitis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016575.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypohidrosis",
    "term_en": "Hypohidrosis",
    "term_ar": "نقص التعرق",
    "synonyms": [
      "Anhidrosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormally diminished or absent perspiration. Both generalized and segmented (reduced or absent sweating in circumscribed locations) forms of the disease are usually associated with other underlying conditions.",
    "arabic_definition": "نقص التعرق (الإنجليزية: Hypohidrosis) هو تضاؤل كمية التعرق استجابة للمحفزات المُوَائِمة. في حين أن فرط التعرق هو أمر مقلق اجتماعيا ولكنه حميد غير خبيث، ولكن نقص التعرق يمكن أن يؤدي إلى ارتفاع الحرارة، الإنهاك الحراري، ضربة الشمس وربما الموت.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007007.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteopoikilosis",
    "term_en": "Osteopoikilosis",
    "term_ar": "تبكل العظام",
    "synonyms": [
      "Osteopoikiloses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An asymptomatic, autosomal dominant trait in which pea-sized sclerotic spots, prominent in the metaphyseal area, are accompanied by unique cutaneous lesions. These are yellowish papules or plaques with increased elastin content. (From Cecil Textbook of Medicine, 19th ed, pp1434-35)",
    "arabic_definition": "تبكل العظام (الإنجليزية: Osteopoikilosis) هو خلل تنسج متصلب حميد وراثي سائد يصيب العظم، يمتاز بوجود جزر عظمية في الهيكل العظمي في شكل بقع صغيرة مستديرة في العظام، خاصة بالقرب من المفاصل، وهذه البقع هي مناطق من نسيج عظمي لم تتطور بشكل صحيح وكثيف وذلك بشكل استثنائي، وعادة لا تسبب الأعراض ولا تتغير بمرور الوقت. ويمكن تشخيص تبكل العظام في أي عمر، وكثيرا ما يتم اكتشافه عن طريق الصدفة عندما يقوم الفرد بعمل أشعة سينية لسبب ما.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010023.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acantholysis",
    "term_en": "Acantholysis",
    "term_ar": "انحلال الأشواك",
    "synonyms": [
      "Acantholyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Separation of the prickle cells of the stratum spinosum of the epidermis, resulting in atrophy of the prickle cell layer. It is seen in diseases such as pemphigus vulgaris (see PEMPHIGUS) and DARIER DISEASE.",
    "arabic_definition": "انحلال الأشواك (الإنجليزية: Acantholysis) هو فقدان الارتباط بين الخلايا مثل الجسيمات الرابطة مما يتسبب بفقدان الالتصاق بين الخلايا الكيراتينية كما يظهر في مرض الفقاع الشائع. هذه الحالة غير موجودة في الفقعان الفقاعي مما يجعله مفيدا في التشخيص التفريقي.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000051.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parakeratosis",
    "term_en": "Parakeratosis",
    "term_ar": "نظير التقرن",
    "synonyms": [
      "Parakeratoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Persistence of the nuclei of the keratinocytes into the stratum corneum of the skin. This is a normal state only in the epithelium of true mucous membranes in the mouth and vagina. (Dorland, 27th ed)",
    "arabic_definition": "نَظِيْرُ التَّقَرُّنِ أو نَظيرُ التَّقْرَانِ هو نمط من أنماط التقرن يتميز باحتفاظ النوى في الطبقة المتقرنة. حدوث نظير التقرن في الأغشية المخاطية هو أمر طبيعي. (Parakeratosis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010241.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anetoderma",
    "term_en": "Anetoderma",
    "term_ar": "ضمور الجلد البقعي",
    "synonyms": [
      "Anetodermas",
      "Anetoderma, Primary",
      "Anetodermas, Primary",
      "Primary Anetoderma",
      "Primary Anetodermas",
      "Anetoderma, Secondary",
      "Anetodermas, Secondary",
      "Secondary Anetoderma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Benign DERMATOSIS caused by a loss of dermal ELASTIC TISSUE resulting in localized sac-like areas of flaccid skin. It can be either primary (idiopathic) or secondary to other skin conditions, PENICILLAMINE use, or premature birth.",
    "arabic_definition": "ضمور الجلد البقعي(الإنجليزية: Anetoderma) (المعروف أيضا باسم «ضمور الجلد الارتخائي،» الجلد البقعي، \" \" أو «ضمور البقعة الصفراء». .هو مرض يصيب منطقة معينة من الجسم نتيجة لأسباب منها معروف، ومجهول حتى الآن، وكل ما ينتجه المرض في مراحله النهائية هو ضمور في جلد المنطقة المصابة، والأنسجة المطاطية، وما تحتها.حيث يبدأ المرض في مراحله الأولى بتورم والتهاب المنطقة المصابة، ثم يبدأ بالضمور في الأنسجة المطاطية، والدهون وكذلك جلد المنطقة المصابة، ويستقر على هذا الوضع.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057088.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dermatomycoses",
    "term_en": "Dermatomycoses",
    "term_ar": "داء الفطريات",
    "synonyms": [
      "Dermatophyte Infection",
      "Dermatomycosis",
      "Fungal Skin Diseases",
      "Skin Diseases, Fungal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Superficial infections of the skin or its appendages by any of various fungi.",
    "arabic_definition": "الفُطار الجلدي داء (الإنجليزية: dermatomycosis) يصيب الجلد وتكون على شكل بقع صغير غامقه اللوب بعضها يكون بني اللون والبعض الأخر يكون اسود اللون يصيب هذا الداء النساء والرجال من كافه الأعمار. ويكون مستواه على مستوى الجلد لا يسبب احمرار ولا حكه ولا يمكن أن ينتشر بالجسم إذا تمت استشارة الطبيب. (Dermatomycoses)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003881.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucinoses",
    "term_en": "Mucinoses",
    "term_ar": "داء موسيني",
    "synonyms": [
      "Mucinosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Mucoid states characterized by the elevated deposition and accumulation of mucin (mucopolysaccharides) in dermal tissue. The fibroblasts are responsible for the production of acid mucopolysaccharides (GLYCOSAMINOGLYCANS) in the ground substance of the connective tissue system. When fibroblasts produce abnormally large quantities of mucopolysaccharides as hyaluronic acid, chondroitin sulfate, or heparin, they accumulate in large amounts in the dermis.",
    "arabic_definition": "الأمراض الموسينية (الإنجليزية: Mucinoses) هي مجموعة من الحالات الجلدية التي يعود سببها إلى خلايا ليفية يافعة التي تنتج كميات كبيرة غير طبيعية من عديدات السكاريد المخاطية الحمضية أو الميوسين، وغالبا ما يكون حمض الهيالورونيك.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017520.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gynecomastia",
    "term_en": "Gynecomastia",
    "term_ar": "تثدي الرجل",
    "synonyms": [
      "Male Breast Enlargement",
      "Breast Enlargement, Male",
      "Enlargement, Male Breast",
      "Adolescent Gynecomastia",
      "Gynecomastia, Adolescent",
      "Infant Gynecomastia",
      "Gynecomastia, Infant",
      "Newborn Gynecomastia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enlargement of the BREAST in the males, caused by an excess of ESTROGENS. Physiological gynecomastia is normally observed in NEWBORNS; ADOLESCENT; and AGING males.",
    "arabic_definition": "تثدي الرجل (الإنجليزية: Gynecomastia) هو اضطراب شائع في نظام الغدد الصمّاء في الذكور، يكون فيه تضخُّم حميد للثدي ناجم عن تكاثر غير سرطاني في غدد الثدي. ويمكن الكشف عنه سريريًا بظهور كتل مطاطية أو متماسكة تمتد من الحلمة بصورة مركزية.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006177.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stevens-johnson-syndrome",
    "term_en": "Stevens-Johnson Syndrome",
    "term_ar": "متلازمة ستيفنس جونسون",
    "synonyms": [
      "Epidermal Necrolysis, Toxic",
      "Epidermal Necrolyses, Toxic",
      "Necrolyses, Toxic Epidermal",
      "Necrolysis, Toxic Epidermal",
      "Toxic Epidermal Necrolyses",
      "Toxic Epidermal Necrolysis",
      "Lyell's Syndrome",
      "Lyell's Syndromes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare cutaneous eruption characterized by extensive KERATINOCYTE apoptosis resulting in skin detachment with mucosal involvement. It is often provoked by the use of drugs (e.g., antibiotics and anticonvulsants) or associated with PNEUMONIA, MYCOPLASMA. It is considered a continuum of Toxic Epidermal Necrolysis.",
    "arabic_definition": "متلازمة ستيفنس جونسون (الإنجليزية: Stevens–Johnson syndrome)، وتقشر الأنسجة المتموتة البشروية التسممي (الإنجليزية: Toxic epidermal necrolysis)، هي عوارض جلدية نادرة ومهددة للحياة، تظهر نتيجة لتناول الدواء. يتمثل المصطلح تقشر الانسجة المتموتة البشروية التسممي، بتفاعل جلدي مع درجة انفصال كبيرة للجلد، أكثر من %30 من مساحة الجلد؛ بينما متلازمة ستيفن جونسون هي تفاعل جلدي مع درجة انفصال جلدي اقل من %10 من مساحة الجلد. (Stevens-Johnson Syndrome)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013262.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hidradenitis-suppurativa",
    "term_en": "Hidradenitis Suppurativa",
    "term_ar": "التهاب الغدد العرقية القيحي",
    "synonyms": [
      "Suppurative Hidradenitis",
      "Acne Inversa",
      "Acne Inversas",
      "Inversa, Acne",
      "Inversas, Acne",
      "Hidradenitides, Suppurative",
      "Hidradenitis, Suppurative",
      "Suppurative Hidradenitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic suppurative and cicatricial disease of the apocrine glands occurring chiefly in the axillae in women and in the groin and anal regions in men. It is characterized by poral occlusion with secondary bacterial infection, evolving into abscesses which eventually rupture. As the disease becomes chronic, ulcers appear, sinus tracts enlarge, fistulas develop, and fibrosis and scarring become evident.",
    "arabic_definition": "التهاب الغدد العرقية القيحي (الإنجليزية: Hidradenitis suppurativa) حالة من حالات من العد الشديدة (عد جدري)، وهو مرض جلدي مزمن يصيب واحدة من الغدد العرقية. يحدث في منطقة أو عدة مناطق من الجِسم.مثل الإبط،الإرب، المنطقة الشرجية.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017497.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polymyalgia-rheumatica",
    "term_en": "Polymyalgia Rheumatica",
    "term_ar": "ألم العضلات الروماتزمي",
    "synonyms": [
      "Forestier-Certonciny Syndrome",
      "Syndrome, Forestier-Certonciny",
      "Rheumatism, Peri-Extra-Articular",
      "Peri-Extra-Articular Rheumatism",
      "Pseudopolyarthritis, Rhizomelic",
      "Pseudopolyarthritides, Rhizomelic",
      "Rhizomelic Pseudopolyarthritides",
      "Rhizomelic Pseudopolyarthritis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome in the elderly characterized by proximal joint and muscle pain, high erythrocyte sedimentation rate, and a self-limiting course. Pain is usually accompanied by evidence of an inflammatory reaction. Women are affected twice as commonly as men and Caucasians more frequently than other groups. The condition is frequently associated with GIANT CELL ARTERITIS and some theories pose the possibility that the two diseases arise from a single etiology or even that they are the same entity.",
    "arabic_definition": "ألم العضلات الروماتزمي (الإنجليزية: Polymyalgia rheumatica) (اختصارًا PMR) هو عبارة عن خلل التهابي ينتج عنه ألم وتيبّس في العضلات، وعادة في الرقبة والكتفين والذراعين العلويين والوركين، ولكنها قد تحدث في جميع أنحاء الجسم. قد يكون الألم مفاجئًا جدًا، أو يمكن أن يحدث تدريجيًا على مدار فترة.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011111.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chondromalacia-patellae",
    "term_en": "Chondromalacia Patellae",
    "term_ar": "تلين غضروف الرضفة",
    "synonyms": [
      "Patella, Chondromalacia Of"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A degeneration of the ARTICULAR CARTILAGE of the PATELLA, caused by a decrease in sulfated MUCOPOLYSACCHARIDES in the ground substance. When accompanied by pain, it is sometimes considered part of or confused with PATELLOFEMORAL PAIN SYNDROME.",
    "arabic_definition": "تلين غضروف الرضفة أو التلين الغضروفي في الرضفتين (الإنجليزية: Chondromalacia patellae) هو التهاب ما تحت الرّضفة وتليُّن الغضاريف وفي بعض الأحيان يطلق هذا المصطلح على متلازمة الألم الرّضفي الفَخذي \" ومع ذلك هناك إجماع عام على أن مصطلح هذه المتلازمة يطلق على الأشخاص الذين لا يعانون من تلفٍ في الغضاريف، فالطريقة التي يمكن من خلالها التمييز بين تلك المتلازمة وبين مرض \"تلين غضروف الرضفة \" هو وجود تَلَيُّن في غضروف مفصل الرَّضفة. حقيقة ً الغضروف الذي تحت الرّضفة يعمل كماصّ للصدمات، وهناك الكثير من العوامل التي قد تسبب تلف وتدهور هذا الغضروف كالاستخدام المُرهق أو حدوث إصابة بالركبة وغيرها من الأسباب.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046789.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cutaneous-leishmaniasis",
    "term_en": "Cutaneous Leishmaniasis",
    "term_ar": "داء الليشمانيات الجلدي",
    "synonyms": [
      "Cutaneous Leishmaniases",
      "Leishmaniases, Cutaneous",
      "Leishmaniasis, New World",
      "New World Leishmaniasis",
      "Leishmaniasis, American",
      "American Leishmaniasis",
      "Oriental Sore",
      "Sore, Oriental"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An endemic disease that is characterized by the development of single or multiple localized lesions on exposed areas of skin that typically ulcerate. The disease has been divided into Old and New World forms. Old World leishmaniasis is separated into three distinct types according to epidemiology and clinical manifestations and is caused by species of the L. tropica and L. aethiopica complexes as well as by species of the L. major genus. New World leishmaniasis, also called American leishmaniasis, occurs in South and Central America and is caused by species of the L. mexicana or L. braziliensis complexes.",
    "arabic_definition": "داء الليشمانيات الجلدي (يُسَمَّى بِالعَامِّيَّةِ: المُسْتَكْوِيَةُ أو البداة أو الأبدة أو الآكِلَةُ أو المُحْتَفِرَةُ أو الأخت) (الإنجليزية: cutaneous leishmaniasis) أشيع أشكال داء الليشمانيات، وهو مجموعة أمراض يسببها طفيلي وحيد الخلية من جنس الليشمانيا، حيث يمكن لنحو عشرين نوعاً من هذا الطفيلي أن تسبب المرض عند الإنسان، أغلبها، باستثناء المرض الناجم عن الليشمانيا المدارية، أمراض حيوانية المنشأ. ينتقل هذا المرض بواسطة لدغ حشرات من أسرة الفواصد تنتمي إلى جنس الفاصدة في العالم القديم وجنس اللوتزومية في العالم الجديد.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016773.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erythema-ab-igne",
    "term_en": "Erythema Ab Igne",
    "term_ar": "حمامى حرورية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cutaneous finding caused by prolonged heat exposure (e.g., space heater) and local heat injury (e.g., caused by LASER THERAPY). It is characterized by epidermal atrophy, reticular hyperpigmentation, and telangiectatic dermatosis.",
    "arabic_definition": "حُمامَى حَرورِيَّة، المعروفة أيضًا باسم طفح زجاجة الماء الساخن، هو حالة جلدية ناتجة عن التعرض طويل الأمد للحرارة ( الأشعة تحت الحمراء ). يمكن أن يؤدي التعرض للإشعاع الحراري المطول للجلد إلى تطور حمامي شبكي وفرط تصبغ وتقشر وتوسع الشعيرات في المنطقة المصابة. (Erythema Ab Igne)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000089965.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epidermodysplasia-verruciformis",
    "term_en": "Epidermodysplasia Verruciformis",
    "term_ar": "الرجل الشجرة",
    "synonyms": [
      "Lutz-Lewandowsky Disease",
      "Disease, Lutz-Lewandowsky",
      "Lewandowsky-Lutz Disease",
      "Disease, Lewandowsky-Lutz"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive trait with impaired cell-mediated immunity. About 15 human papillomaviruses are implicated in associated infection, four of which lead to skin neoplasms. The disease begins in childhood with red papules and later spreads over the body as gray or yellow scales.",
    "arabic_definition": "الرجل الشجرة (بالإنجليزية: Tree Man) واسمه الحقيقي ديدي (35 سنة)، هو صياد إندونيسي يقيم في إحدي القرى في جنوب جاكارتا، عاش حياته مثل أي شخص في العالم وكانت مهمته صعبة نظراً لأنه يعيل والدته ووالده، ويتجول من نهر إلى آخر بحثاً عن لقمة عيش شريفة من كد يده (Epidermodysplasia Verruciformis)",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004819.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adult-onset-stills-disease",
    "term_en": "Adult-Onset Still's Disease",
    "term_ar": "داء ستيل البادئ في البالغين",
    "synonyms": [
      "Still's Disease, Adult Onset",
      "Stills Disease, Adult-Onset",
      "Adult-Onset Still Disease",
      "Adult-Onset Stills Disease",
      "Still Disease, Adult-Onset"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Systemic-onset rheumatoid arthritis in adults. It differs from classical rheumatoid arthritis in that it is more often marked by acute febrile onset, and generalized lymphadenopathy and hepatosplenomegaly are more prominent.",
    "arabic_definition": "داء ستيل البادئ في البالغين (الإنجليزية: Adult-onset Still's disease ومختصره AOSD) هو مرض التهابي شامل نادر يمتاز بثلاثية من الحمى وألم مفصلي وطفح بقعي حطاطي ذو لون سلموني واضح. يعد المرض مرضا مشخصا بالاستبعاد.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016706.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "systemic-lupus-erythematosus",
    "term_en": "Systemic Lupus Erythematosus",
    "term_ar": "ذئبة حمامية مجموعية",
    "synonyms": [
      "Lupus Erythematosus Disseminatus",
      "Libman-Sacks Disease",
      "Disease, Libman-Sacks",
      "Lupus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic, relapsing, inflammatory, and often febrile multisystemic disorder of connective tissue, characterized principally by involvement of the skin, joints, kidneys, and serosal membranes. It is of unknown etiology, but is thought to represent a failure of the regulatory mechanisms of the autoimmune system. The disease is marked by a wide range of system dysfunctions, an elevated erythrocyte sedimentation rate, and the formation of LE cells in the blood or bone marrow.",
    "arabic_definition": "ذئْبةٌ حُماميَّةٌ مجْموعيَّة أو الذئبة الحمراء أو الذِّئْبَة (الإنجليزية: Systemic lupus erythematosus) المعروفة أيضا باسم الذئبة، هو مرض مناعي ذاتي حيث يقوم الجهاز المناعي بمهاجمة الأنسجة السليمة في أجزاء كثيرة من الجسم عن طريق الخطأ. تختلف الأعراض بين الناس وقد تكون ما بين خفيفة إلى شديدة.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008180.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pancreatitis",
    "term_en": "Pancreatitis",
    "term_ar": "التهاب البنكرياس",
    "synonyms": [
      "Pancreatitis, Acute",
      "Acute Pancreatitis",
      "Acute Pancreatitides",
      "Pancreatitides, Acute",
      "Pancreatitis, Acute Edematous",
      "Acute Edematous Pancreatitides",
      "Edematous Pancreatitides, Acute",
      "Edematous Pancreatitis, Acute"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the PANCREAS. Pancreatitis is classified as acute unless there are computed tomographic or endoscopic retrograde cholangiopancreatographic findings of CHRONIC PANCREATITIS (International Symposium on Acute Pancreatitis, Atlanta, 1992). The two most common forms of acute pancreatitis are ALCOHOLIC PANCREATITIS and gallstone pancreatitis.",
    "arabic_definition": "التهاب البنكرياس هو التهاب غدة البنكرياس. البنكرياس هو عضو كبير يوجد خلف المعدة ويفرز بعض الإنزيمات الهاضمة. (Pancreatitis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010195.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysentery",
    "term_en": "Dysentery",
    "term_ar": "زحار",
    "synonyms": [
      "Infectious Diarrheal Disease",
      "Diarrheal Disease, Infectious",
      "Infectious Diarrheal Diseases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute inflammation of the intestine associated with infectious DIARRHEA of various etiologies, generally acquired by eating contaminated food containing TOXINS, BIOLOGICAL derived from BACTERIA or other microorganisms. Dysentery is characterized initially by watery FECES then by bloody mucoid stools. It is often associated with ABDOMINAL PAIN; FEVER; and DEHYDRATION.",
    "arabic_definition": "الزُّحَار أو الدِّيزَنطَارِيَا (الإنجليزية: Dysentery) (المعروف سابقًا باسم الجريان أو التدفق الدموي) وهو التهاب واضطراب في الأمعاء، وخاصة في القولون، يؤدي إلى إسهال شديد يحتوي على الدم والمخاط في البراز مع حمى، وآلام في البطن، وزحير (شعور بأن التغوط غير مكتمل)، وانخفاض في مدى صلابة البراز، أي يكون البراز رخواً أو مائياً. يحدث الزحار نتيجة تضرر الغشاء المخاطي في الأمعاء، وسببه غالبًا إصابة بعدوى موضعية من جراثيم غازية أو المواد السامة التي تفرزها.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004403.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "appendicitis",
    "term_en": "Appendicitis",
    "term_ar": "التهاب الزائدة الدودية",
    "synonyms": [
      "Ruptured Appendicitis",
      "Appendicitis, Ruptured",
      "Perforated Appendicitis",
      "Appendicitis, Perforated"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute inflammation of the APPENDIX. Acute appendicitis is classified as simple, gangrenous, or perforated.",
    "arabic_definition": "التهاب الزائدة الدودية (الإنجليزية: Appendicitis) هو التهاب يصيب منطقة من المصران الأعور ينتج عن انسداد رأس منطقة الزائدة الدودية ببقايا براز أو أي أجسام غريبة، يعد التهاب الزائدة الدودية حالة إسعافية تستدعي التدخل الجراحي السريع لمنع انفجارها أو تكون الالتصاقات.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001064.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peritonitis",
    "term_en": "Peritonitis",
    "term_ar": "التهاب البريتون",
    "synonyms": [
      "Primary Peritonitis",
      "Peritonitis, Primary",
      "Secondary Peritonitis",
      "Peritonitis, Secondary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the PERITONEUM lining the ABDOMINAL CAVITY as the result of infectious, autoimmune, or chemical processes. Primary peritonitis is due to infection of the PERITONEAL CAVITY via hematogenous or lymphatic spread and without intra-abdominal source. Secondary peritonitis arises from the ABDOMINAL CAVITY itself through RUPTURE or ABSCESS of intra-abdominal organs.",
    "arabic_definition": "التهاب الصِّفاق أو التهاب البريتون (الإنجليزية: Peritonitis) هو التهاب الغشاء البريتوني المبطن لجدار البطن الداخلي والذي يغطي أعضاء البطن، وقد تشمل الأعراض الألم الشديد، أو تورم في البطن، أو الحمى، أو فقدان الوزن، وقد يكون الألم في جزء واحد من البطن أو يشمل البطن بأكملها، وقد تشمل المضاعفات: الصدمة ومتلازمة الضائقة التنفسية الحادة. وتشمل الأسباب انثقاب القناة المعوية، أو التهاب البنكرياس، أو مرض التهاب الحوض، أو قرحة المعدة، أو تليف الكبد أو تمزق الزائدة الدودية، بينما تشمل عوامل الخطر الاستسقاء والغسيل الكلوي البريتوني، ويعتمد التشخيص بشكل عام على الفحص، واختبارات الدم، والتصوير الطبي.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010538.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "esophagitis",
    "term_en": "Esophagitis",
    "term_ar": "التهاب المريء",
    "synonyms": [
      "Esophagitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION, acute or chronic, of the ESOPHAGUS caused by BACTERIA, chemicals, or TRAUMA.",
    "arabic_definition": "التهاب المري (الإنجليزية: Esophagitis) وهو التهاب يصيب أنبوب المري.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004941.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gallstones",
    "term_en": "Gallstones",
    "term_ar": "حصاة صفراوية",
    "synonyms": [
      "Biliary Calculi",
      "Calculi, Biliary",
      "Gall Stone",
      "Gall Stones",
      "Gallstone",
      "Common Bile Duct Calculi",
      "Biliary Calculi, Common Bile Duct",
      "Common Bile Duct Gall Stones"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Solid crystalline precipitates in the BILIARY TRACT, usually formed in the GALLBLADDER, resulting in the condition of CHOLELITHIASIS. Gallstones, derived from the BILE, consist mainly of calcium, cholesterol, or bilirubin.",
    "arabic_definition": "الحصاة الصفراوية أو حصيات المرارة (الإنجليزية: Cholelithiasis) هي حصاة تتشكل داخل المرارة كالتحجير من مكونات الصفراء، التحصي (تشكل الحصاة) الذي يحصل داخل المرارة يسمى بالتحصي الصفراوي. الحصاة الصفراوية تتشكل داخل المرارة، ولكن من الممكن أن تنتقل بعيدا إلى أجزاء أخرى من السبيل الصفراوي، كالقناة المرارية، القناة الصفراوية، القناة البنكرياسية، أو الأمبولة الكبدية البنكرياسية. (Gallstones)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042882.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cholecystitis",
    "term_en": "Cholecystitis",
    "term_ar": "التهاب المرارة",
    "synonyms": [
      "Gallbladder Inflammation",
      "Inflammation, Gallbladder",
      "Empyema, Gallbladder",
      "Gallbladder Empyema",
      "Empyema, Gall Bladder",
      "Gall Bladder Empyema"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the GALLBLADDER; generally caused by impairment of BILE flow, GALLSTONES in the BILIARY TRACT, infections, or other diseases.",
    "arabic_definition": "التهاب المرارة (الإنجليزية: Cholecystitis) هو التهاب الحويصلة الصفراوية.يؤدي التهاب المرارة إلى ألم البطن الأيمن العلوي وأعراض أخرى كالحرارة والقيئ.قد يؤدي التهاب المرارة إلى مضاعفات عديدة مثل ثقب المرارة أو موت الخلايا في جهاز المرارة. يمكن أن يكون التهاب المرارة حاد أو مزمن، وغالبا ما يصيب كبار السن.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002764.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "giardiasis",
    "term_en": "Giardiasis",
    "term_ar": "داء الجيارديات",
    "synonyms": [
      "Giardiases",
      "Giardia Infection",
      "Giardia Infections",
      "Infection, Giardia",
      "Infections, Giardia",
      "Lambliasis",
      "Lambliases",
      "Giardia lamblia Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An infection of the SMALL INTESTINE caused by the flagellated protozoan GIARDIA. It is spread via contaminated food and water and by direct person-to-person contact.",
    "arabic_definition": "داء الجيارديا (تعرف أيضاً باسم \"حمى القندس\") هو مرض طفيلي ذو منشاً حيواني تسببه سوطيات \"جيارديا لامبليا (تسمى أيضاً الجيارديا المعوية والجيارديا الإثنا عشرية. تسكن سوطيات الجيارديا في الجهاز الهضمي للحيوانات الأليفة والبرية والإنسان. (Giardiasis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005873.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enteritis",
    "term_en": "Enteritis",
    "term_ar": "التهاب الأمعاء",
    "synonyms": [
      "Enteritides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of any segment of the SMALL INTESTINE.",
    "arabic_definition": "التهاب الأمعاء (الإنجليزية: Enteritis) هو التهاب في الأمعاء الدقيقة.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004751.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hematemesis",
    "term_en": "Hematemesis",
    "term_ar": "تقيؤ دموي",
    "synonyms": [
      "Hematemeses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Vomiting of blood that is either fresh bright red, or older coffee-ground in character. It generally indicates bleeding of the UPPER GASTROINTESTINAL TRACT.",
    "arabic_definition": "تقيؤ دموي (الإنجليزية: Hematemesis) هو تقيؤ دم أحمر - (بعكس القيء الأسود) - مصدره الجزء العلوي من الجهاز الهضمي. قد يخلط المريض بين القيء الدموي ونفث الدم من الأنف.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006396.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "melena",
    "term_en": "Melena",
    "term_ar": "تغوط أسود",
    "synonyms": [
      "Melenas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The black, tarry, foul-smelling FECES that contain degraded blood.",
    "arabic_definition": "التغوط الأسود يشير إلى البراز الأسود الداكن القطران المرتبط بنزيف الجهاز الهضمي العلوي. يحدث اللون الأسود والرائحة القوية المميزة بسبب تراكم الهيموجلوبين في البراز بواسطة الإنزيمات الهضمية، والبكتيريا المعوية. (Melena)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008551.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rectocele",
    "term_en": "Rectocele",
    "term_ar": "فتق المستقيم",
    "synonyms": [
      "Rectoceles",
      "Proctocele",
      "Proctoceles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Herniation of the RECTUM into the VAGINA.",
    "arabic_definition": "ينتج فتق المستقيم أو القيلة المستقيمية أو العفل (بالإنجليزية: Rectocele) (ريكتسييل ) عن قطع أو تمزق في الحاجز المستقيمي المهبلي (الذي هو عادة حاجز قوي ليفي، يشبه الورقة بين المستقيم والمهبل). وتبرز أنسجة المستقيم من خلال هذا القطع في المهبل كفتق.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020047.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diverticulitis",
    "term_en": "Diverticulitis",
    "term_ar": "التهاب الردب",
    "synonyms": [
      "Diverticulitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of a DIVERTICULUM or diverticula.",
    "arabic_definition": "التهاب الردب أو التهاب الرتج أو التهاب الرتوج (الإنجليزية: Diverticulitis) هو مرض شائع في الجهاز الهضمي يشمل تكوّن انتفاخات مجوّفة كالجيوب في جّدر الأمعاء، هذه العملية تسمّى الرُّتاج أو الرُّتوج. يحدث هذا الدّاء عادةً في الأمعاء الغليظة أو ما يسمى القولون، كما يمكن أن يظهر في الأمعاء الدقيقة في بعض الحالات.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004238.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastritis",
    "term_en": "Gastritis",
    "term_ar": "التهاب المعدة",
    "synonyms": [
      "Gastritides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the GASTRIC MUCOSA, a lesion observed in a number of unrelated disorders.",
    "arabic_definition": "التهاب المعدة (الإنجليزية: Gastritis) هو التهاب أو تهيج في بطانة المعدة. قد يكون قصير الأمد أو قد يحدث لفترات طويلة.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005756.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "achlorhydria",
    "term_en": "Achlorhydria",
    "term_ar": "فقد حمض المعدة",
    "synonyms": [
      "Achylia Gastrica",
      "Hypochlorhydria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A lack of HYDROCHLORIC ACID in GASTRIC JUICE despite stimulation of gastric secretion.",
    "arabic_definition": "فقد حمض المعدة أو غياب حمض المعدة (الإنجليزية: Achlorhydria)، يشير إلى الحالات التي يكون فيها إنتاج حمض الهيدروكلوريك في إفرازات المعدة في المعدة والأعضاء الهضمية الأخرى غائبا أو منخفضا، على التوالي. عادة ما يكون فقد حمض المعدة من مضاعفات بعض الأمراض الأخرى، مثل عدوى الملوية البوابية المزمنة، أو فقر الدم الخبيث المناعي الذاتي، فضلا عن أحد الآثار الجانبية المحتملة للاستخدام طويل الأجل لمثبطات مضخة البروتون.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000126.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "steatorrhea",
    "term_en": "Steatorrhea",
    "term_ar": "إسهال دهني",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition that is characterized by chronic fatty DIARRHEA, a result of abnormal DIGESTION and/or INTESTINAL ABSORPTION of FATS.",
    "arabic_definition": "إسهال دهني هو أحد اضطرابات الجهاز الهضمي التي تتميز مرور البراز الذي يحتوي على كمية عالية من الدهون. ويرافق ذلك مع افرازات زيتية من فتحة الشرج. (Steatorrhea)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045602.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fascioliasis",
    "term_en": "Fascioliasis",
    "term_ar": "داء المتورقات",
    "synonyms": [
      "Fascioliases",
      "Fasciola Infection",
      "Fasciola Infections",
      "Infection, Fasciola",
      "Infections, Fasciola",
      "Fasciola hepatica Infection",
      "Fasciola hepatica Infestation",
      "Fasciola gigantic Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Liver disease caused by infections with parasitic flukes of the genus FASCIOLA, such as FASCIOLA HEPATICA.",
    "arabic_definition": "داء المتورقات (الإنجليزية: fasciolosis) مرض معد، يصيب الإنسان والحيوانات بما فيهما الماشية والغنم. (Fascioliasis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005211.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colitis",
    "term_en": "Colitis",
    "term_ar": "التهاب القولون",
    "synonyms": [
      "Colitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the COLON section of the large intestine (INTESTINE, LARGE), usually with symptoms such as DIARRHEA (often with blood and mucus), ABDOMINAL PAIN, and FEVER.",
    "arabic_definition": "التهاب القولون أو النزف القولوني هوَ مرض مزمن في الجهاز الهضمي يتميز بوجود التهاب في القولون. التهاب القولون هوَ واحد من أمراض الالتهابات وذاتية المناعة، التي تؤثر على الأنسجة التي توصل الجهاز الهضمي (الأمعاء الغليظة والدقيقة). (Colitis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003092.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ileus",
    "term_en": "Ileus",
    "term_ar": "تغلف معوي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by the lack of intestinal PERISTALSIS or INTESTINAL MOTILITY without any mechanical obstruction. This interference of the flow of INTESTINAL CONTENTS often leads to INTESTINAL OBSTRUCTION. Ileus may be classified into postoperative, inflammatory, metabolic, neurogenic, and drug-induced.",
    "arabic_definition": "التغلف المعوي أو الْعِلَّوْص هو الانسداد الميكانيكي أو الوظيفي للأمعاء، مما يمنع مرور محتويات الأمعاء وحركتها بشكل طبيعي. ويمكن أن يحدث هذا الانسداد في أي جزء من الأمعاء، وغالبًا ما يكون في الاثني عشر الموجود في الأمعاء الدقيقة، حيث يعد حالة طبية طارئة تستدعي التدخل العاجل. (Ileus)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045823.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diverticulum",
    "term_en": "Diverticulum",
    "term_ar": "ردب",
    "synonyms": [
      "Diverticula",
      "Diverticulosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pouch or sac developed from a tubular or saccular organ, such as the GASTROINTESTINAL TRACT.",
    "arabic_definition": "الردب أو الرِتج أو الرَتج جمع (الرُتوج) (الإنجليزية: Diverticulum) هو عبارة عن كيس أو جيب صغير، يتشكل في جدار الأعضاء الكبيرة مثل: المريء أو الأمعاء الدقيقة أو الأمعاء الغليظة (هذه الأماكن هي الأشهر لحدوث الرُتوج). في الأمعاء الغليظة، يمكن للبراز أن يندفع إلى جيب أو كيس، مما يؤدي إلى تشكل انتفاخ على جدار القولون، هنالك حالة تعرف ب: داء الرتوج هذه الحالة ليست لديها أعراض.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004240.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatomegaly",
    "term_en": "Hepatomegaly",
    "term_ar": "تضخم الكبد",
    "synonyms": [
      "Enlarged Liver",
      "Liver, Enlarged"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enlargement of the liver.",
    "arabic_definition": "تضخم الكبد هو ظرف يحدث للكبد يؤدي إلى زيادة حجمه. هو ليس علامة سريرية محددة لها عدة أسباب، وممكن أن يسبب بشكل عام تكسر والتهاب، سام بشكل مباشر، سرطان الكبد، أو اضطرابات الاستقلاب. (Hepatomegaly)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006529.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proctitis",
    "term_en": "Proctitis",
    "term_ar": "التهاب المستقيم",
    "synonyms": [
      "Proctitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the MUCOUS MEMBRANE of the RECTUM, the distal end of the large intestine (INTESTINE, LARGE).",
    "arabic_definition": "التهاب المستقيم هو التهاب في فتحة الشرج وبطانة المستقيم يؤثر فقط على البوصات الست الأخيرة للمستقيم. (Proctitis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011349.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "megacolon",
    "term_en": "Megacolon",
    "term_ar": "تضخم القولون",
    "synonyms": [
      "Megacolons"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Dilatation of the COLON, often to alarming dimensions. There are various types of megacolon including congenital megacolon in HIRSCHSPRUNG DISEASE, idiopathic megacolon in CONSTIPATION, and TOXIC MEGACOLON.",
    "arabic_definition": "تضخم القولون (بالإنجليزية: Megacolon) هو تمدد غير طبيعي في القولون (الأمعاء الغليظة). يكون التمدد غالبًا مصحوبًا بشلل في حركات الأمعاء.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008531.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cholestasis",
    "term_en": "Cholestasis",
    "term_ar": "ركود صفراوي",
    "synonyms": [
      "Cholestases",
      "Biliary Stasis",
      "Biliary Stases",
      "Stases, Biliary",
      "Stasis, Biliary",
      "Bile Duct Obstruction",
      "Bile Duct Obstructions",
      "Duct Obstruction, Bile"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Impairment of bile flow due to obstruction in small bile ducts (INTRAHEPATIC CHOLESTASIS) or obstruction in large bile ducts (EXTRAHEPATIC CHOLESTASIS).",
    "arabic_definition": "الرُكود الصَفراوي (الإنجليزية: cholestasis) هو خلل بِإنتاج سائل المَرارة أَو إِفرازه من الكَبد (chole = مَرارة، و stasis = رُكود). يَتم إنتاج سائِل المَرارة داخل خَلايا الكَبد (الإنجليزية: hepatocytes) وَيتم إفرازها عبر جدران خَلايا الكَبد بواسطة انزيمات وَبروتينات مُتعددة، إلى قَنوات المَرارة داخل الكَبد، وَمن هُناك إلى قَنوات المَرارة خارج الكَبد، وإلى كيس المرارة والاثنا عشر.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002779.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pouchitis",
    "term_en": "Pouchitis",
    "term_ar": "التهاب الجيبة",
    "synonyms": [
      "Pouch Ileitis",
      "Ileitis, Pouch"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute INFLAMMATION in the INTESTINAL MUCOSA of the continent ileal reservoir (or pouch) in patients who have undergone ILEOSTOMY and restorative proctocolectomy (PROCTOCOLECTOMY, RESTORATIVE).",
    "arabic_definition": "التهاب الجيبة (pouchitis) وهو التهاب مستقيمة اصطناعية تنشأ جراحيا من نسيج الأمعاء اللفائفية في المرضى الذين خضعوا لعملية استئصال القولون، الذي يتم إنشاؤه لعلاج المرضى الذين يعانون من التهاب القولون التقرحي، والتهاب القولون الغير محدد أو داء السلاسل الغدي (FAB) أو التهاب قولون آخر. تم اقتراح مجموعة متنوعة من الآليات الفيسيولوجية المرضية لالتهاب الجيب، ولكن السبب البيولوجي لا يزال مجهولا.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019449.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "balantidiasis",
    "term_en": "Balantidiasis",
    "term_ar": "داء القربيات",
    "synonyms": [
      "Balantidiases",
      "Balantidium coli Infection",
      "Balantidium coli Infections",
      "B. coli Infection",
      "B. coli Infections",
      "Infection, B. coli",
      "Balantidium Infection",
      "Balantidium Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection by parasites of the genus BALANTIDIUM. The presence of Balantidium in the LARGE INTESTINE leads to DIARRHEA; DYSENTERY; and occasionally ULCER.",
    "arabic_definition": "داء القِربيات أو أمراض تسببها بروتوزوا البالانتيدات هو مرض يسببه الإصابة بالقربية القولونية. (Balantidiasis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001447.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterocolitis",
    "term_en": "Enterocolitis",
    "term_ar": "التهاب معوي قولوني",
    "synonyms": [
      "Enterocolitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the MUCOSA of both the SMALL INTESTINE and the LARGE INTESTINE. Etiology includes ISCHEMIA, infections, allergic, and immune responses.",
    "arabic_definition": "الالتهاب المعوي القولوني (الإنجليزية: Enterocolitis) التهاب القولون والأمعاء (الإنجليزية: coloenteritis) هو التهاب في القناة الهضمية، ويشمل التهاب الأمعاء الذي يصيب الأمعاء الدقيقة والتهاب القولون الذي يصيب الأمعاء الغليظة.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004760.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neutropenic-enterocolitis",
    "term_en": "Neutropenic Enterocolitis",
    "term_ar": "التهاب الأعور",
    "synonyms": [
      "Ileocecal Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterized by inflammation in the ILEUM, the CECUM, and the ASCENDING COLON. It is observed in cancer patients with CHEMOTHERAPY-induced NEUTROPENIA or in other immunocompromised individuals (IMMUNOCOMPROMISED HOST).",
    "arabic_definition": "الالتهاب المعوي القولوني لقلة الخلايا المتعادلة أو التهاب المصران الأعور (الإنجليزية: Neutropenic enterocolitis) (جزء من الأمعاء الغليظة) التي قد تكون مرتبطة مع الإصابة بعدوى. ويرتبط بشكل خاص مع قلة الخلايا الحبيبية المتعادلة (بالإنجليزية: Neutrophil granulocytes)..",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D044504.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dientamoebiasis",
    "term_en": "Dientamoebiasis",
    "term_ar": "داء المتحولات الثنائية",
    "synonyms": [
      "Dientamoebiases",
      "Dientamoeba fragilis Infection",
      "Dientamoeba fragilis Infections",
      "Infection, Dientamoeba fragilis",
      "Infections, Dientamoeba fragilis",
      "Dientamoeba Infection",
      "Dientamoeba Infections",
      "Infection, Dientamoeba"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gastrointestinal infection with organisms of the genus DIENTAMOEBA.",
    "arabic_definition": "داء المتحولات الثنائية حالة طبية تسببها العدوى بطفيلي المتحولة الثنائية الهشة، وهو طفيلي أحادي الخلية يصيب الجهاز الهضمي السفلي للبشر. هذه العدوى من الأسباب المهمة لإسهال المسافرين، وآلام البطن المزمنة، والتعب المزمن، وفشل النمو عند الأطفال. (Dientamoebiasis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004030.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cholangitis",
    "term_en": "Cholangitis",
    "term_ar": "التهاب الأقنية الصفراوية الصاعد",
    "synonyms": [
      "Cholangitides",
      "Ascending cholangitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the biliary ductal system (BILE DUCTS); intrahepatic, extrahepatic, or both.",
    "arabic_definition": "التهاب الأقنية الصفراوية الصاعد ويُسمى اختصارًا التهاب الأقنية الصفراوية،(1) هو التهابٌ في الأقنية الصفراوية، يحدث عادةً بسبب بكتيريا صاعدة من منطقة اتصال قناة الصفراء مع الاثناعشر (الجزء الأول من الأمعاء الدقيقة)، كما يحدث أيضًا إذا كانت القناة الصفراء مسدودةٌ جزئيًا بحصواتٍ صفراوية، أو مسدودةً لأسبابٍ أخرى مثل حدوث تضيقٍ حميد أو تضررٍ بعد الجراحة أو بسبب مجموعةٍ مختلفةٍ من الأورام. يُعتبر التهاب الأقنية الصفراوية من الحالات الطبية الطارئة؛ وذلك لأنهُ قد يُهدد حياة الفرد. (Cholangitis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002761.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mixed-connective-tissue-disease",
    "term_en": "Mixed Connective Tissue Disease",
    "term_ar": "مرض النسيج الضام المختلط",
    "synonyms": [
      "MCTD",
      "Connective Tissue Disease, Mixed",
      "Sharp Syndrome",
      "Syndrome, Sharp"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome with overlapping clinical features of systemic lupus erythematosus, scleroderma, polymyositis, and Raynaud's phenomenon. The disease is differentially characterized by high serum titers of antibodies to ribonuclease-sensitive extractable (saline soluble) nuclear antigen and a speckled epidermal nuclear staining pattern on direct immunofluorescence.",
    "arabic_definition": "مرض النسيج الضام المختلط(الإنجليزية: Mixed connective tissue disease)(المعروف أيضا باسم متلازمة شارب ، عادة يختصر ب (MCTD)، هو مرض المناعة الذاتية، يسبب تداخل ملامح ثلاثة أمراض وهي:مرض النسيج الضام - الذئبة، تصلب الجلد والتهاب العضلات. داء النسيج الضام المختلط قد يكون له أيضا ملامح من التهاب المفاصل الروماتويدي.",
    "specialty": "Dermatology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008947.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucositis",
    "term_en": "Mucositis",
    "term_ar": "التهاب الغشاء المخاطي",
    "synonyms": [
      "Mucositides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An INFLAMMATION of the MUCOSA with burning or tingling sensation. It is characterized by atrophy of the squamous EPITHELIUM, vascular damage, inflammatory infiltration, and ulceration. It usually occurs at the mucous lining of the MOUTH, the GASTROINTESTINAL TRACT or the airway due to chemical irritations, CHEMOTHERAPY, or radiation therapy (RADIOTHERAPY).",
    "arabic_definition": "التهاب الغشاء المخاطي وهوالتهاب مؤلم وتقرحات في الأغشية المخاطية المبطنة للجهاز الهضمي، وعادة ما ينتج كأثر سلبي أو أحد مضاعفات العلاج الكيميائي أو الاشعاعي للسرطان. يمكن أن يحدث التهاب الغشاءالمخاطي في أي مكان على طول الجهاز الهضمي، الا ان التهاب الغشاء المخاطي الفموي يقصد به الالتهاب والتقرح الذي يحدث في الفم. (Mucositis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052016.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemoperitoneum",
    "term_en": "Hemoperitoneum",
    "term_ar": "تدمي الصفاق",
    "synonyms": [
      "Hemoperitoneums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Accumulations of blood in the PERITONEAL CAVITY due to internal HEMORRHAGE.",
    "arabic_definition": "تَدَمِّي الصِّفاق (الإنجليزية: Hemoperitoneum) هو انصباب الدم في التجويف البريتوني.حيث يتراكم الدم في المساحة ما بين البطانة الداخلية لجدار البطن والأعضاء الداخلية في البطن. ويصنف عموما تدمي الصفاق على أنه أحد حالات الطوارئ الجراحية.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006465.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "duodenitis",
    "term_en": "Duodenitis",
    "term_ar": "التهاب الإثنا عشري",
    "synonyms": [
      "Erosive Duodenitis",
      "Duodenitis, Erosive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the DUODENUM section of the small intestine (INTESTINE, SMALL). Erosive duodenitis may cause bleeding in the UPPER GI TRACT and PEPTIC ULCER.",
    "arabic_definition": "التهاب الاثنَي عَشَرَ أو التهاب العَفَج أو العُفَاج التهابٌ من جُرثومة في المَعِدة تسمى البكتريا الحلزونية حيث تعيش تحت الغشاء المخاطي للمعدة وتفرز إنزيمات خاصة تحميها من تامين الحامض المعدي القاتل للجراثيم. (Duodenitis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004382.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastroparesis",
    "term_en": "Gastroparesis",
    "term_ar": "شلل المعدة",
    "synonyms": [
      "Gastropareses",
      "Gastric Stasis",
      "Gastric Stases",
      "Stases, Gastric",
      "Stasis, Gastric"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chronic delayed gastric emptying. Gastroparesis may be caused by motor dysfunction or paralysis of STOMACH muscles or may be associated with other systemic diseases such as DIABETES MELLITUS.",
    "arabic_definition": "معظم العمليات التي تتم داخل جسم الإنسان تحدث دون تدخل أو شعور منه فالقلب ينبض والرئتين تتنفسان والجهاز الهضمي يعمل على تحويل الطعام إلى طاقة دون أن يعطي الإنسان الكثير من التفكير لهذه العمليات وتستمر حالة اللاشعور تلك حتى يحدث خطأ ما. من أمثلة هذا كله المرض المعروف بـشلل المعدة ويتلخص في توقف العضلات الموجودة في جدار المعدة عن العمل بشكل طبيعي أو ان تصاب بالشلل التام. (Gastroparesis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018589.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ileitis",
    "term_en": "Ileitis",
    "term_ar": "التهاب اللفائفي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of any segment of the ILEUM and the ILEOCECAL VALVE.",
    "arabic_definition": "التهاب اللفائفي هو التهاب الجزء الأسفل من الأمعاء الدقيقة المسمى باللفائفي، وعادة ما يترافق مع مرض كرون. ويمكن ان يرافق عادة امراض مثل: الأمراض المعدية، نقص التروية، والأورام، أخذ أدوية معينة، والتهاب الأمعاء اليوزيني. (Ileitis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007079.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystic-fibrosis",
    "term_en": "Cystic Fibrosis",
    "term_ar": "تليف كيسي",
    "synonyms": [
      "Fibrosis, Cystic",
      "Mucoviscidosis",
      "Pancreatic Cystic Fibrosis",
      "Cystic Fibrosis, Pancreatic",
      "Cystic Fibrosis of Pancreas",
      "Fibrocystic Disease of Pancreas",
      "Pancreas Fibrocystic Disease",
      "Pancreas Fibrocystic Diseases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive genetic disease of the EXOCRINE GLANDS. It is caused by mutations in the gene encoding the CYSTIC FIBROSIS TRANSMEMBRANE CONDUCTANCE REGULATOR expressed in several organs including the LUNG, the PANCREAS, the BILIARY SYSTEM, and the SWEAT GLANDS. Cystic fibrosis is characterized by epithelial secretory dysfunction associated with ductal obstruction resulting in AIRWAY OBSTRUCTION; chronic RESPIRATORY INFECTIONS; PANCREATIC INSUFFICIENCY; maldigestion; salt depletion; and HEAT PROSTRATION.",
    "arabic_definition": "التَّلَيُّفُ الكِيسِيُّ أو اللِّيفة الكيسيّة (الإنجليزية: Cystic fibrosis) هو مرض وراثي صبغي جسمي متنحٍّ يحدث بسببه عجز مترقٍّ في عمل الغدد خارجية الإفراز، مما يُؤثر على وظائف متعددة في الجسم. فهو يؤثر بصورة كبيرة على الرئتين، وبنسبة أقل على البنكرياس والكبد والأمعاء، حيث يؤدي إلى تراكم طبقة سميكة ولزجة من المُخاط على تلك الأعضاء.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003550.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "celiac-disease",
    "term_en": "Celiac Disease",
    "term_ar": "داء بطني",
    "synonyms": [
      "Disease, Celiac",
      "Gluten Enteropathy",
      "Enteropathies, Gluten",
      "Enteropathy, Gluten",
      "Gluten Enteropathies",
      "Gluten-Sensitive Enteropathy",
      "Enteropathies, Gluten-Sensitive",
      "Enteropathy, Gluten-Sensitive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malabsorption syndrome that is precipitated by the ingestion of foods containing GLUTEN, such as wheat, rye, and barley. It is characterized by INFLAMMATION of the SMALL INTESTINE, loss of MICROVILLI structure, failed INTESTINAL ABSORPTION, and MALNUTRITION.",
    "arabic_definition": "الداء البطني أو الداء الزلاقي أو السيلياك أو مرض الاضطراب الهضمي المناعي (الإنجليزية: Celiac Disease)، هو اضطراب مناعي ذاتي مكتسب طويل الأمد، يؤثر بشكل رئيسي على الأمعاء الدقيقة، حيث يصاب الأفراد بحساسية للجلوتين الموجود في الأطعمة مثل القمح والشعير. تشمل الأعراض الشائعة مشاكل الجهاز الهضمي مثل الإسهال المزمن، انتفاخ البطن، سوء الامتصاص، فقدان الشهية، وفشل النمو بشكل طبيعي عند الأطفال.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002446.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "duodenal-ulcer",
    "term_en": "Duodenal Ulcer",
    "term_ar": "قرحة هضمية",
    "synonyms": [
      "Duodenal Ulcers",
      "Ulcer, Duodenal",
      "Ulcers, Duodenal",
      "Curling Ulcer",
      "Ulcer, Curling",
      "Curling's Ulcer",
      "Curlings Ulcer",
      "Peptic ulcer disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A PEPTIC ULCER located in the DUODENUM.",
    "arabic_definition": "تعتبر القرحة الهضمية شقًا في الباطن الداخلي للمعدة أو أول جزء من الامعاء الدقيقة أو في بعض الأحيان المرئ الأسفل ، تسمي القرحة التي تصيب المعدة بالقرحة المعدية ويطلق على ما تصيب الجزء الأول من الامعاء بالقرحة الاثنى عشر، ومن الأعراض الشائعة للقرحة الاثنى عشر الاستيقاظ ليلًا بسبب آلام في الجزء الأعلى من البطن أو ألم أعلى بطن يتحسن مع تناول الطعام، أما في حالة القرحة المعدية، قد يزداد الألم سوءًا عند تناول الطعام، غالبًا ما يوصف الألم على أنه عسر هضم أو وجع شديد، وتشمل أعراض أخرى التجشؤ أو الغثيان أو فقدان الوزن أو فقدان الشهية، وما يقارب ثلث كبار السن لا يعانون من أي أعراض، كما قد تشمل المضاعفات النزيف وثقب في المعدة وانسداد بالمعدة، ويحث النزيف في نحو 15% من الناس. القرحة الهضمية هي قرحة تتكون في منطقة القناة المعِدّية المعويّة وتكون غالبا حامضية الوسط مما يجعلها مؤلمة. (Duodenal Ulcer)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004381.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatitis-c",
    "term_en": "Hepatitis C",
    "term_ar": "التهاب الكبد C",
    "synonyms": [
      "Hepatitis, Viral, Non-A, Non-B, Parenterally-Transmitted",
      "Parenterally-Transmitted Non-A, Non-B Hepatitis",
      "PT-NANBH"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the LIVER in humans caused by HEPATITIS C VIRUS, a single-stranded RNA virus. Its incubation period is 30-90 days. Hepatitis C is transmitted primarily by contaminated blood parenterally and is often associated with transfusion and intravenous drug abuse. However, in a significant number of cases, the source of hepatitis C infection is unknown.",
    "arabic_definition": "التهاب الكبد الفيروسي ج (الإنجليزية: Hepatitis C) هو مرض معدٍ يؤثر بشكل رئيسي على الكبد. فيروس الالتهاب الكبدي ج (الإنجليزية: HCV) هو المسبب لهذا المرض.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006526.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatitis-d",
    "term_en": "Hepatitis D",
    "term_ar": "التهاب الكبد د",
    "synonyms": [
      "Delta Hepatitis",
      "Hepatitides, Delta",
      "Delta Infection",
      "Infections, Delta",
      "Hepatitis, Delta",
      "Infection, Delta",
      "Superinfection, Delta",
      "Delta Superinfections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the LIVER in humans caused by HEPATITIS DELTA VIRUS, a defective RNA virus that can only infect HEPATITIS B patients. For its viral coating, hepatitis delta virus requires the HEPATITIS B SURFACE ANTIGENS produced by these patients. Hepatitis D can occur either concomitantly with (coinfection) or subsequent to (superinfection) hepatitis B infection. Similar to hepatitis B, it is primarily transmitted by parenteral exposure, such as transfusion of contaminated blood or blood products, but can also be transmitted via sexual or intimate personal contact.",
    "arabic_definition": "التهاب الكبد الفيروسي د أو فيروس الالتهاب الكبدى الوبائى د (الإنجليزية: Hepatitis D) هو نوع من التهابات الكبد الفيروسية ينتج عن فيروس التهاب الكبد ديلتا (إتش دي في). يعد الفيروس دلتا واحدًا من فيروسات التهاب الكبد الخمس المعروفة وهي: أيه وبي وسي ودي وهـ.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003699.html",
        "accessedAt": "2026-11-21"
      }
    ]
  }
];
