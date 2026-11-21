// Auto-curated verified medical terms (NIH NLM MeSH 2026 + verified bilingual medical entries) - Part 5
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

export const MEDICAL_TERMS_PART_5: RawExpandedMedicalTerm[] = [
  {
    "id": "caroli-disease",
    "term_en": "Caroli Disease",
    "term_ar": "مرض كارولي",
    "synonyms": [
      "Disease, Caroli",
      "Caroli's Disease",
      "Carolis Disease",
      "Disease, Caroli's",
      "Caroli's Syndrome",
      "Caroli Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital cystic dilatation of the intrahepatic bile ducts (BILE DUCTS, INTRAHEPATIC). It consists of 2 types: simple Caroli disease is characterized by bile duct dilatation (ectasia) alone; and complex Caroli disease is characterized by bile duct dilatation with extensive hepatic fibrosis and portal hypertension (HYPERTENSION, PORTAL). Benign renal tubular ectasia is associated with both types of Caroli disease.",
    "arabic_definition": "مرض كارولي (الإنجليزية: Caroli disease) (توسع كهفي متصل، أو توسع كيسي خلقي للأقنية الصفراوية داخل الكبد) هو اضطراب وراثي نادر يتميز بالتوسع الكيسي، أو توسع القنوات الصفراوية داخل الكبد. يوجد نمطان لمرض كارولي: يتكون داء كارولي البؤري أو مرض كارولي البسيط من قنوات صفراوية متسعة بشكل غير طبيعي تؤثر على جزء معزول من الكبد.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016767.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cryptosporidiosis",
    "term_en": "Cryptosporidiosis",
    "term_ar": "داء خفيات الأبواغ",
    "synonyms": [
      "Cryptosporidioses",
      "Cryptosporidium Infection",
      "Cryptosporidium Infections",
      "Infection, Cryptosporidium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Intestinal infection with organisms of the genus CRYPTOSPORIDIUM. It occurs in both animals and humans. Symptoms include severe DIARRHEA.",
    "arabic_definition": "داء خفيات الأبواغ، المعروف أيضا كريبتو، من الأمراض الطفيلية الناجمة عن كريبتوسبوريديوم، وهي عباره عن الطفيليات في شعبة أبيكومبليكسا. يؤثر على أمعاء الثدييات، وهو عادة مايكون أصابة حادة قصيرة الأجل. (Cryptosporidiosis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003457.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatitis-a",
    "term_en": "Hepatitis A",
    "term_ar": "التهاب الكبد أ",
    "synonyms": [
      "Hepatitis, Infectious",
      "Infectious Hepatitis",
      "Hepatitides, Infectious",
      "Infectious Hepatitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the LIVER in humans caused by a member of the HEPATOVIRUS genus, HUMAN HEPATITIS A VIRUS. It can be transmitted through fecal contamination of food or water.",
    "arabic_definition": "الالتهاب الكبدي أ (عرف سابقاً باسم الالتهاب الكبدي الوبائي) (الإنجليزية: Hepatitis A) هو التهاب كبدي حاد يُصيب الكبد نتيجة الإصابة بفيروس الالتهاب الكبدي (HAV). كثير من الحالات لديهم أعراض قليلة أو معدومة خصوصًا في السن الصغيرة.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006506.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "reye-syndrome",
    "term_en": "Reye Syndrome",
    "term_ar": "متلازمة راي",
    "synonyms": [
      "Fatty Liver with Encephalopathy",
      "Reye's Syndrome",
      "Reye-Johnson Syndrome",
      "Reye Syndrome, Adult",
      "Adult Reye Syndrome",
      "Reye's Syndrome, Adult",
      "Adult Reye's Syndrome",
      "Reye-Like Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of encephalopathy with fatty infiltration of the LIVER, characterized by brain EDEMA and VOMITING that may rapidly progress to SEIZURES; COMA; and DEATH. It is caused by a generalized loss of mitochondrial function leading to disturbances in fatty acid and CARNITINE metabolism.",
    "arabic_definition": "متلازمة راي (الإنجليزية: Reye's Syndrome) مرض عصبي حاد يتطور بشكل أساسي عند الأطفال بعد الإصابة بالإنفلونزا، الجدري أو أي عدوى فيروسية أخرى. يمكن أن يؤدي إلى تجمع الدهون في الكبد وورم في الدماغ. (Reye Syndrome)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012202.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatitis-e",
    "term_en": "Hepatitis E",
    "term_ar": "التهاب الكبد هـ",
    "synonyms": [
      "Hepatitis, Water-Borne",
      "Hepatitides, Water-Borne",
      "Water-Borne Hepatitides",
      "Water-Borne Hepatitis",
      "Enterically-Transmitted Non-A, Non-B Hepatitis",
      "Epidemic Non-A, Non-B Hepatitis",
      "ET-NANBH"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute INFLAMMATION of the LIVER in humans; caused by HEPATITIS E VIRUS, a non-enveloped single-stranded RNA virus. Similar to HEPATITIS A, its incubation period is 15-60 days and is enterically transmitted, usually by fecal-oral transmission.",
    "arabic_definition": "التهاب الكبد الوبائي هـ أو فيروس الالتهاب الكبدى الوبائى ئی (الإنجليزية: Hepatitis E) هو التهاب في الكبد ينتج عن عدوى بفيروس التهاب الكبد الوبائي هـ (إتش إي في)، ويعد نوعًا من التهابات الكبد الفيروسية. يتنقل التهاب الكبد الوبائي هـ بصورة رئيسية عبر الطريق الفموي الشرجي حاله حال التهاب الكبد أيه، على الرغم من أن الفيروسان غير مرتبطين ببعضهما.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016751.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rectal-prolapse",
    "term_en": "Rectal Prolapse",
    "term_ar": "تدلي المستقيم",
    "synonyms": [
      "Prolapse, Rectal",
      "Prolapses, Rectal",
      "Rectal Prolapses",
      "Anus Prolapse",
      "Anus Prolapses",
      "Prolapse, Anus",
      "Prolapses, Anus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Protrusion of the rectal mucous membrane through the anus. There are various degrees: incomplete with no displacement of the anal sphincter muscle; complete with displacement of the anal sphincter muscle; complete with no displacement of the anal sphincter muscle but with herniation of the bowel; and internal complete with rectosigmoid or upper rectum intussusception into the lower rectum.",
    "arabic_definition": "يحدث تدلي المستقيم (الإنجليزية: Rectal prolapse) عندما تتدلى جدرانه حتى تبرز من فتحة الشرج وتصبح مرئية خارج الجسم. على أي حال، يتفق معظم الباحثين على وجود 3-5 أنواع مختلفة من تدلي المستقيم، اعتمادًا على مرئية الجزء المتدلي خارج الجسم، وسماكة جدران المستقيم المصابة إما بصورة كاملة أو جزئية.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012005.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastroenteritis",
    "term_en": "Gastroenteritis",
    "term_ar": "التهاب المعدة والأمعاء",
    "synonyms": [
      "Gastroenteritides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of any segment of the GASTROINTESTINAL TRACT from ESOPHAGUS to RECTUM. Causes of gastroenteritis are many including genetic, infection, HYPERSENSITIVITY, drug effects, and CANCER.",
    "arabic_definition": "التهاب المعدة والأمعاء ويُسمى أيضًا الإسهال المُعدِ أو النزلة المعوية،(1) هو التهابٌ في القناة الهضمية (المعدة والأمعاء الدقيقة)، يترافقُ مع أعراضٍ مُتعددةٍ تتضمن الإسهال والتقيؤ والألم البطني، كَما قَد يُرافقها حمى وتعبٌ عام وجفاف. تستمر هذه الأعراض عادةً أقل من أسبوعين. (Gastroenteritis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005759.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tropical-sprue",
    "term_en": "Tropical Sprue",
    "term_ar": "ذرب مداري",
    "synonyms": [
      "Idiopathic Tropical Malabsorption Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic malabsorption syndrome, occurring mainly in residents of or visitors to the tropics or subtropics. The failed INTESTINAL ABSORPTION of nutrients from the SMALL INTESTINE results in MALNUTRITION and ANEMIA that is due to FOLIC ACID deficiency.",
    "arabic_definition": "الذرب المداري (الإنجليزية: Tropical sprue) هو مرض سوء الامتصاص الذي يوجد عادة في المناطق الاستوائية، أهم ما يميزه هو تسطيح غير طبيعي ل الزغابات المعوية والتهاب بطانة الأمعاء الدقيقة. وهو يختلف بشكل كبير عن ذرب البطريق.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013182.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "choledocholithiasis",
    "term_en": "Choledocholithiasis",
    "term_ar": "حصيات القناة الصفراوية المشتركة",
    "synonyms": [
      "Cholelithiasis, Common Bile Duct",
      "Common bile duct stone"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Presence or formation of GALLSTONES in the COMMON BILE DUCT.",
    "arabic_definition": "حصيات القناة الصفراوية المشتركة، والمعروفة أيضًا باسم تحصي القناة الصفراوية المشتركة، هي وجود حصيات في القناة الصفراوية المشتركة (CBD). يمكن أن تسبب هذه الحالة اليرقان وتلف خلايا الكبد. (Choledocholithiasis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042883.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dumping-syndrome",
    "term_en": "Dumping Syndrome",
    "term_ar": "متلازمة الإغراق",
    "synonyms": [
      "Dumping Syndromes",
      "Syndrome, Dumping",
      "Syndromes, Dumping"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gastrointestinal symptoms resulting from an absent or nonfunctioning pylorus.",
    "arabic_definition": "متلازمة الإغراق أو متلازمة الإفراغ السريع (الإنجليزية: dumping syndrom) هي مجموعة من الأعراض تحدث احيانا نتيجة إجراء عمليات جراحية في المعدة مثل إزالة المعدة كلياً أو جزء منها، أو عند تجاوز المعدة جراحيا للمساعدة على انقاص الوزن. مما يادي إلى إفراغ المعدة السريع، ويوجد نوعان من متلازمة الإغراق هما: الإغراق المبكر والإغراق المتاخر.وايضا تحدث متلازمة الإغراق عندما يتم نقل محتويات عسر الهضم في المعدة أو «تفريغ» في الأمعاء الصغيرة بسرعة كبيرة. (Dumping Syndrome)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004377.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pneumoperitoneum",
    "term_en": "Pneumoperitoneum",
    "term_ar": "استرواح الصفاق",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition with trapped gas or air in the PERITONEAL CAVITY, usually secondary to perforation of the internal organs such as the LUNG and the GASTROINTESTINAL TRACT, or to recent surgery. Pneumoperitoneum may be purposely introduced to aid radiological examination.",
    "arabic_definition": "استرواح الصفاق (الإنجليزية: Pneumoperitoneum) هو وجود الهواء أو غاز في التجويف البطني (البريتواني). في الحالة الطبيعية لا يوجد غاز في تجويف البطن، ولكن انثقاب المعدة أو الأمعاء يؤدي إلى خروج الغازات إلى تجويف البطن.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011027.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "liver-failure",
    "term_en": "Liver Failure",
    "term_ar": "فشل الكبد",
    "synonyms": [
      "Hepatic Failure"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Severe inability of the LIVER to perform its normal metabolic functions, as evidenced by severe JAUNDICE and abnormal serum levels of AMMONIA; BILIRUBIN; ALKALINE PHOSPHATASE; ASPARTATE AMINOTRANSFERASE; LACTATE DEHYDROGENASES; and albumin/globulin ratio. (Blakiston's Gould Medical Dictionary, 4th ed)",
    "arabic_definition": "فشل الكَبد أو الفشل الكبدي (الإنجليزية: Liver failure) أو قصور كبدي أو قُصور الكبد (الإنجليزية: Hepatic insufficiency)، وهوَ عدم قُدرة الكَبد على أداء وظائفه البنائية وَالأيضية بشكل طبيعي، وقد تم التعرف على شَكلين: حاد وَمُزمن، وفي الآونة الأخيرة وُجد أنَّ ثُلث حالات فشل الكَبد تُعرف بفشل الكبد الحاد على أساس المزمن.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017093.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatitis-b",
    "term_en": "Hepatitis B",
    "term_ar": "التهاب الكبد ب",
    "synonyms": [
      "Hepatitis B Virus Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the LIVER in humans caused by a member of the ORTHOHEPADNAVIRUS genus, HEPATITIS B VIRUS. It is primarily transmitted by parenteral exposure, such as transfusion of contaminated blood or blood products, but can also be transmitted via sexual or intimate personal contact.",
    "arabic_definition": "التهاب الكبد ب هو مرض معد يسببه فيروس التهاب الكبد (الإنجليزية: HBV)، ما يسبب التهابات حادة ومزمنة. هنالك الكثير من الناس الذين ليس لديهم أي أعراض خلال العدوى الأولية للمرض. (Hepatitis B)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006509.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "liver-cirrhosis",
    "term_en": "Liver Cirrhosis",
    "term_ar": "تشمع الكبد",
    "synonyms": [
      "Hepatic Cirrhosis",
      "Cirrhosis, Hepatic",
      "Cirrhosis, Liver",
      "Fibrosis, Liver",
      "Liver Fibrosis",
      "Cirrhosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Liver disease in which the normal microcirculation, the gross vascular anatomy, and the hepatic architecture have been variably destroyed and altered with fibrous septa surrounding regenerated or regenerating parenchymal nodules.",
    "arabic_definition": "تشمع الكبد (أو التليف الكبدي أو التليف فحسب) يحدث نتيجة الإصابة بمرض كبدي مزمن؛ حيث يُستبدل نسيج الكبد السليم بنسيج ليفي (ندبة) وعُقيدات متجددة (كتل تنشأ نتيجة عملية تجدد النسيج التالف)، مما يؤدي إلى توقف الكبد عن أداء وظائفه. ومن أكثر الأسباب شيوعًا للإصابة بتشمع الكبد هي إدمان الكحول والالتهاب الكبدي الوبائي B وC ومرض الكبد الدهني، ولكن هناك العديد من الأسباب الأخرى التي يمكن أن تؤدي إلى تشمع الكبد. (Liver Cirrhosis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008103.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "intestinal-obstruction",
    "term_en": "Intestinal Obstruction",
    "term_ar": "انسداد معوي",
    "synonyms": [
      "Intestinal Obstructions",
      "Obstruction, Intestinal",
      "Bowel obstruction"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any impairment, arrest, or reversal of the normal flow of INTESTINAL CONTENTS toward the ANAL CANAL.",
    "arabic_definition": "الانسداد المعوي، ويُعرف أيضًا باسم انسداد الأمعاء (الإنجليزية: Bowel obstruction)، هو انسداد وظيفي أو ميكانيكي في الأمعاء يمنع الحركة الطبيعية لمنتجات الهضم. قد تُصاب الأمعاء الدقيقة أو الغليظة على حد سواء. (Intestinal Obstruction)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007415.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "budd-chiari-syndrome",
    "term_en": "Budd-Chiari Syndrome",
    "term_ar": "متلازمة بود كياري",
    "synonyms": [
      "Chiari's Syndrome",
      "Chiaris Syndrome",
      "Chiari Syndrome",
      "Hepatic Venous Outflow Obstruction",
      "Hepatic Vein Thrombosis",
      "Hepatic Vein Thromboses",
      "Thromboses, Hepatic Vein",
      "Thrombosis, Hepatic Vein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition in which the hepatic venous outflow is obstructed anywhere from the small HEPATIC VEINS to the junction of the INFERIOR VENA CAVA and the RIGHT ATRIUM. Usually the blockage is extrahepatic and caused by blood clots (THROMBUS) or fibrous webs. Parenchymal FIBROSIS is uncommon.",
    "arabic_definition": "متلازمة بود كياري أو بود شياري (الإنجليزية: budd chiary Syndrome) هي حالة نادرة تصيب 1 من كل مليون من البالغين. (Budd-Chiari Syndrome)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006502.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mallory-weiss-syndrome",
    "term_en": "Mallory-Weiss Syndrome",
    "term_ar": "متلازمة مالوري فايس",
    "synonyms": [
      "Syndrome, Mallory-Weiss",
      "Gastroesophageal Laceration-Hemorrhage",
      "Gastroesophageal Laceration-Hemorrhages",
      "Laceration-Hemorrhage, Gastroesophageal",
      "Laceration-Hemorrhages, Gastroesophageal",
      "Mucosal Lacerations-Gastroesophageal Junction",
      "Junction, Mucosal Lacerations-Gastroesophageal",
      "Junctions, Mucosal Lacerations-Gastroesophageal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by mucosal tears at the ESOPHAGOGASTRIC JUNCTION, sometimes with HEMATEMESIS. Typically it is caused by forceful bouts of retching or VOMITING.",
    "arabic_definition": "متلازمة مالوري فايس (الإنجليزية: Mallory Weiss) نزف هضمي علوي ناتج عن تمزق مخاطية المريء في منطقة الفؤاد عند الوصل بين المخاطية المالبيكية والمخاطية الأسطوانية يمتد التمزق ياتجاه مخاطية المعدة، التمزق سطحي لا يتجاوز الطبقة تحت المخاطية، يحدث النزف بسبب جهد الاقياء المتكرر ويحدث مباشرة بعد الإقياء أو بعد فترة قصيرة، يظهر التمزق بالتنظير فقط. (Mallory-Weiss Syndrome)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008309.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatorenal-syndrome",
    "term_en": "Hepatorenal Syndrome",
    "term_ar": "متلازمة كبدية كلوية",
    "synonyms": [
      "Syndrome, Hepatorenal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Functional KIDNEY FAILURE in patients with liver disease, usually LIVER CIRRHOSIS or portal hypertension (HYPERTENSION, PORTAL), and in the absence of intrinsic renal disease or kidney abnormality. It is characterized by intense renal vasculature constriction, reduced renal blood flow, OLIGURIA, and sodium retention.",
    "arabic_definition": "المتَلازِمَةٌ الكَبِدِيّةٌ الكُلْوِيةّ (الإنجليزية: Hepatorenal Syndrome)، تعرف اختصاراً م.ك.ك (الإنجليزية: HRS) وهو الاسم الأكثر شيوعاً، هي شكل فريد من إصابات الفشل الكلوي تظهر لدى مصابي المراحل المتطورة من تليف الكبد، وهي تنجم عن تضيق الأوعية الدموية المغذية للكلى وتوسع الأوعية الدموية المغذية لكل من الجهاز الهضمي والكبد والبنكرياس (الإنجليزية: Splanchnic Circulation) وتحدث هذه الإصابة في غياب شذوذ نسيجي حقيقي ومؤثر ضمن الكلى. فتوسع الأوعية المغذية للجهاز الهضمي يؤدي إلى نقص في انسياب الدم ضمن الكلى وهو ما يتمظهر بحده الأقصى على شكل تضيق في الشريان المغذي للكلى.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006530.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rumination-syndrome",
    "term_en": "Rumination Syndrome",
    "term_ar": "متلازمة الاجترار",
    "synonyms": [
      "Rumination Syndromes",
      "Rumination Disorders",
      "Rumination Disorder",
      "Merycism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A gastrointestinal disorder characterized by repetitive and effortless regurgitation of ingested food from the stomach to the oral cavity in the early POSTPRANDIAL PERIOD. It is associated with functional gastrointestinal pathology (e.g., increased intra-gastric pressure) and psychiatric disorders (e.g., anxiety, depression). It is not limited to infants and distinct from GERD and VOMITING.",
    "arabic_definition": "متلازمة الاجترار أو بالإنجليزية (merycism)، هو اضطراب حركي مزمن يتميز بقلس بدون مجهود لمعظم الوجبات بعد تناول الطعام، بسبب الانقباض اللاإرادي للعضلات حول البطن. لا يوجد تهوع أو غثيان أو حرقة في المعدة أو رائحة أو ألم في البطن مصاحب للقلس ، كما هو الحال مع القيء المعتاد والطعام المتقيأ غير مهضوم. (Rumination Syndrome)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000079562.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laryngopharyngeal-reflux",
    "term_en": "Laryngopharyngeal Reflux",
    "term_ar": "ارتجاع حنجري",
    "synonyms": [
      "Reflux, Laryngopharyngeal",
      "Regurgitation, Gastric",
      "Gastric Regurgitation",
      "Supraesophageal Gastric Reflux (SEGR)",
      "Gastric Reflux, Supraesophageal (SEGR)",
      "Reflux, Supraesophageal Gastric (SEGR)",
      "Supraesophageal Gastric Reflux",
      "Gastric Reflux, Supraesophageal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Back flow of gastric contents to the LARYNGOPHARYNX where it comes in contact with tissues of the upper aerodigestive tract. Laryngopharyngeal reflux is an extraesophageal manifestation of GASTROESOPHAGEAL REFLUX.",
    "arabic_definition": "مرض الارتجاع الحنجري البلعومي (الإنجليزية: Laryngopharyngeal reflux)، ويسمى أحيانا الارتجاع الصامت. هو التدفق الرجعي لمحتويات المعدة إلى الحنجرة والبلعوم الفموي و/أو البلعوم الأنفي.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057045.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rift-valley-fever",
    "term_en": "Rift Valley Fever",
    "term_ar": "حمى الوادي المتصدع",
    "synonyms": [
      "Fever, Rift Valley"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute infection caused by the RIFT VALLEY FEVER VIRUS, an RNA arthropod-borne virus, affecting domestic animals and humans. In animals, symptoms include HEPATITIS; abortion (ABORTION, VETERINARY); and DEATH. In humans, symptoms range from those of a flu-like disease to hemorrhagic fever, ENCEPHALITIS, or BLINDNESS.",
    "arabic_definition": "حمى الوادي المتصدِّع (الإنجليزية: Rift Valley fever) مرض فيروسي حيواني المنشأ يصيب الحيوانات (الأغنام والماعز) في المقام الأول، كما يصيب البشر. ويمكن للعدوى أن تسبِّب مرضاً وخيماً لكلٍّ من الحيوانات والبشر.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012295.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "irritable-bowel-syndrome",
    "term_en": "Irritable Bowel Syndrome",
    "term_ar": "متلازمة القولون المتهيج",
    "synonyms": [
      "Irritable Bowel Syndromes",
      "Syndrome, Irritable Bowel",
      "Syndromes, Irritable Bowel",
      "Colitis, Mucous",
      "Colitides, Mucous",
      "Mucous Colitides",
      "Mucous Colitis",
      "Colon, Irritable"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder with chronic or recurrent colonic symptoms without a clearcut etiology. This condition is characterized by chronic or recurrent ABDOMINAL PAIN, bloating, MUCUS in FECES, and an erratic disturbance of DEFECATION.",
    "arabic_definition": "متلازمة القولون المتهيج (اختصارًا IBS) هي اضطراب وظيفي في الجهاز الهضمي تحدث فيه مجموعة من الأعراض التي تشمل عادة ألما وانتفاخا في البطن، وتغيرات في اتساق حركات الأمعاء. قد تحدث هذه الأعراض على مدى فترة طويلة، وأحيانا لسنوات. (Irritable Bowel Syndrome)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D043183.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erythropoietic-protoporphyria",
    "term_en": "Erythropoietic Protoporphyria",
    "term_ar": "بروتوبرفيرية مكونة للحمر",
    "synonyms": [
      "Erythropoietic Protoporphyrias",
      "Protoporphyrias, Erythropoietic",
      "Erythrohepatic Protoporphyria",
      "Ferrochelatase Deficiency",
      "Deficiencies, Ferrochelatase",
      "Deficiency, Ferrochelatase",
      "Ferrochelatase Deficiencies",
      "Heme Synthetase Deficiency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant porphyria that is due to a deficiency of FERROCHELATASE (heme synthetase) in both the LIVER and the BONE MARROW, the last enzyme in the 8-enzyme biosynthetic pathway of HEME. Clinical features include mainly neurological symptoms, rarely cutaneous lesions, and elevated levels of protoporphyrin and COPROPORPHYRINS in the feces.",
    "arabic_definition": "بروتوبرفيرية مكونة للحمر (الإنجليزية: Erythropoietic protoporphyria) وتُعرف اختصارًا EPP، هي شكلٌ من البرفيريا، والتي تختلف في شدتها وقد تكون مؤلمة جدًا. تحدث بسبب نقص إنزيم الفيروكيلاتاز، والذي يؤدي إلى مستوياتٍ مرتفعة غير طبيعية من بروتوبرفيرين في كريات الدم الحمراء والبلازما والجلد والكبد.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046351.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tracheoesophageal-fistula",
    "term_en": "Tracheoesophageal Fistula",
    "term_ar": "ناسور مريئي قصبي",
    "synonyms": [
      "Fistulas, Tracheoesophageal",
      "Fistula, Tracheoesophageal",
      "Tracheoesophageal Fistulas",
      "Esophagotracheal Fistula",
      "Esophagotracheal Fistulas",
      "Fistula, Esophagotracheal",
      "Fistulas, Esophagotracheal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal passage between the ESOPHAGUS and the TRACHEA, acquired or congenital, often associated with ESOPHAGEAL ATRESIA.",
    "arabic_definition": "الناسور المريئي القصبي (الإنجليزية: bronchoesophageal fistula) هو قناة غير طبيعية تصل المريء بإحدى القصبات، وأهم اسبابها المكتسبة سرطان المريء أو تدرن العقد المنصفية التي تتنوسر على المريء. (Tracheoesophageal Fistula)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014138.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "necrotizing-enterocolitis",
    "term_en": "Necrotizing Enterocolitis",
    "term_ar": "التهاب معوي قولوني ناخر",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "ENTEROCOLITIS with extensive ulceration (ULCER) and NECROSIS. It is observed primarily in LOW BIRTH WEIGHT INFANT.",
    "arabic_definition": "الالتهاب المعوي القولوني الناخر (ان أي سي) هي حالة طبية يموت فيها جزء من الامعاء. تحدث عند حديثي الولادة سواء أكانوا في الخداج أو على غير ما يرام. (Necrotizing Enterocolitis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020345.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shwachman-diamond-syndrome",
    "term_en": "Shwachman-Diamond Syndrome",
    "term_ar": "متلازمة شواخمان دايموند",
    "synonyms": [
      "Shwachman Syndrome",
      "Pancreatic Insufficiency and Bone Marrow Dysfunction",
      "Shwachman-Bodian Syndrome",
      "Congenital Lipomatosis of Pancreas",
      "Pancreas Congenital Lipomatoses",
      "Pancreas Congenital Lipomatosis",
      "Metaphyseal Chondrodysplasia, Shwachman Type",
      "Shwachman-Bodian-Diamond Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inherited syndrome characterized by EXOCRINE PANCREATIC INSUFFICIENCY; hematologic abnormalities (e.g., bone marrow hypoplasia), and skeletal abnormalities (e.g., metaphyseal chondroplasia). GERMLINE MUTATIONS in the SBDS gene are associated with Shwachman-Diamond Syndrome.",
    "arabic_definition": "متلازمة شواخمان دايموند {(الإنجليزية: Shwachman Diamond syndrome) اضطراب خلقي نادر يتميز بقصور إفرازات البنكرياس، ضعف نخاع العظام، تشوهات الهيكل العظمي، وقصر القامة. يعتبر ثاني أكثر سبب انتشارا لقصور إفرازات البنكرياس في الأطفال، بعد مرض التليف الكيسي . (Shwachman-Diamond Syndrome)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000081003.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactose-intolerance",
    "term_en": "Lactose Intolerance",
    "term_ar": "عدم تحمل اللاكتوز",
    "synonyms": [
      "Intolerance, Lactose",
      "Lactose Malabsorption",
      "Malabsorption, Lactose",
      "Alactasia",
      "Dairy Product Intolerance",
      "Hypolactasia",
      "Milk Sugar Intolerance"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The condition resulting from the absence or deficiency of LACTASE in the MUCOSA cells of the GASTROINTESTINAL TRACT, and the inability to break down LACTOSE in milk for ABSORPTION. Bacterial fermentation of the unabsorbed lactose leads to symptoms that range from a mild indigestion (DYSPEPSIA) to severe DIARRHEA. Lactose intolerance may be an inborn error or acquired.",
    "arabic_definition": "عدم تحمل اللاكتوز (الإنجليزية: Lactose intolerance) هو انخفاض القدرة أو عدم القدرة الكاملة على هضم اللاكتوز، السكر الموجود في الحليب ومنتجات الألبان. يختلف البشر في كمية اللاكتوز التي يمكنهم تحملها قبل ظهور الأعراض.",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007787.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ulcerative-colitis",
    "term_en": "Ulcerative Colitis",
    "term_ar": "التهاب القولون التقرحي",
    "synonyms": [
      "Colitis Gravis",
      "Idiopathic Proctocolitis",
      "Inflammatory Bowel Disease, Ulcerative Colitis Type"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the COLON that is predominantly confined to the MUCOSA. Its major symptoms include DIARRHEA, rectal BLEEDING, the passage of MUCUS, and ABDOMINAL PAIN.",
    "arabic_definition": "التهاب القولون التقرحي أو اختصارًا القولون التقرحي، هوَ نوع من أنواع أمراض الأمعاء الالتهابية، وهوَ مرض مزمن يتميز بالتهاب متواصل للطبقة السطحية (المخاطية، تحت المخاطية) من الغشاء المخاطي للقولون والمستقيم مع تشكل تقرحات في هذه الطبقة. العَرَض الأساسي للمرض النشط هو ألم البطن والإسهال المختلط بالدم، كما يمكن أن يحدث فقدان الوزن، والحمى، وفقر الدم. (Ulcerative Colitis)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003093.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "zellweger-syndrome",
    "term_en": "Zellweger Syndrome",
    "term_ar": "متلازمة زيلويغر",
    "synonyms": [
      "Cerebro-Hepato-Renal Syndrome",
      "Cerebrohepatorenal Syndrome",
      "Zellweger Disease",
      "Zellweger's Syndrome",
      "Zellweger-Like Syndrome",
      "Zellweger Spectrum",
      "Spectrum, Zellweger",
      "PBD, ZSS"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive disorder due to defects in PEROXISOME biogenesis which involves more than 13 genes encoding peroxin proteins of the peroxisomal membrane and matrix. Zellweger syndrome is typically seen in the neonatal period with features such as dysmorphic skull; MUSCLE HYPOTONIA; SENSORINEURAL HEARING LOSS; visual compromise; SEIZURES; progressive degeneration of the KIDNEYS and the LIVER. Zellweger-like syndrome refers to phenotypes resembling the neonatal Zellweger syndrome but seen in children or adults with apparently intact peroxisome biogenesis.",
    "arabic_definition": "متلازمة زيلويغر (أو المتلازمة المخية الكبدية الكلوية) هو اضطراب خلقي نادر يتميز بنقص في أو غياب كامل للبيروكسيسومات الفعالة في خلايا المريض. يعد أحد الاضطرابات من عائلة اضطرابات طيف زلويغر، والتي تعد أمراض مسببة لحثل المادة البيضاء في الدماغ. (Zellweger Syndrome)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015211.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asthma",
    "term_en": "Asthma",
    "term_ar": "ربو",
    "synonyms": [
      "Asthmas",
      "Asthma, Bronchial",
      "Bronchial Asthma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of bronchial disorder with three distinct components: airway hyper-responsiveness (RESPIRATORY HYPERSENSITIVITY), airway INFLAMMATION, and intermittent AIRWAY OBSTRUCTION. It is characterized by spasmodic contraction of airway smooth muscle, WHEEZING, and dyspnea (DYSPNEA, PAROXYSMAL).",
    "arabic_definition": "الرَّبْو هو مرض التهابي مُزمن شائِع، يُصيب الشُعب الهوائية في الرئتين. يَتميز بحدوثِ أعراضٍ مُتغيرةٍ مُتكررة، مع حدوثِ تشنجٍ قصبي وانسدادٍ في المسلك الهوائي قابلٍ للانعكاس، كما تشمل الأعراض نوباتٍ من الأزيز والسُعال وضيق النفس والصدر، وقد تحدثُ هذه النوبات عدةَ مراتٍ في اليوم أو في الأسبوع، وقد تَزدادُ سواءً في الليل أو مع ممارسةِ الرياضة، وهذا كُله يعتمد على الشَخص المُصاب. (Asthma)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001249.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemolysis",
    "term_en": "Hemolysis",
    "term_ar": "انحلال الدم",
    "synonyms": [
      "Haemolysis",
      "Haemolyses",
      "Intravascular Hemolysis",
      "Hemolyses, Intravascular",
      "Hemolysis, Intravascular",
      "Intravascular Hemolyses",
      "Extravascular Hemolysis",
      "Extravascular Hemolyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The destruction of ERYTHROCYTES by many different causal agents such as antibodies, bacteria, chemicals, temperature, and changes in tonicity.",
    "arabic_definition": "انحلال الدم أو تحلل كرات الدم الحمراء (الإنجليزية: Hemolysis) وتعني (Hemo:دم) و(Lyses:فقدان، خسارة)، وهو تمزق كريات الدم الحمراء وإطلاق محتوياتها (السيتوبلازم) من بلازما الدم، وتحدث داخل الجسم الحي أو خارجه (بالمختبر).",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006461.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phagocytosis",
    "term_en": "Phagocytosis",
    "term_ar": "بلعمة",
    "synonyms": [
      "Phagocytoses",
      "بلعمة (أحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The engulfing and degradation of microorganisms; other cells that are dead, dying, or pathogenic; and foreign particles by phagocytic cells (PHAGOCYTES).",
    "arabic_definition": "البلعمة (الإنجليزية: Phagocytosis) هي عملية حيوية تجريها بالخلايا البلعمية وبعض الخلايا البيضاء مثل الخلايا العدلة. تعتبر هذه العملية من الأوليات الدفاعية لجسم الإنسان، وبإمكان هذه الخلايا ابتلاع أي جسم غريب مثل البكتيريا أو الخلايا للميتة.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010587.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "agglutination",
    "term_en": "Agglutination",
    "term_ar": "تراص (علم اللغة)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The clumping together of suspended material resulting from the action of AGGLUTININS.",
    "arabic_definition": "التراص أو التجميع في علم اللغة هو عبارة عن عملية لغوية تتعلق بعلم الصرف والتي تتشكل فيها الكلمات المعقدة عن طريق توحيد المقاطع الصرفية دون تغييرها في الهجاء أو الصوتيات. تسمى اللغات التي تستخدم التراص على نطاق واسع اللغات التراصية. (Agglutination)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000371.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synaptophysin",
    "term_en": "Synaptophysin",
    "term_ar": "سينابتوفيزين",
    "synonyms": [
      "p38 Membrane Protein, Synaptic Vesicle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A MARVEL domain-containing protein found in the presynaptic vesicles of NEURONS and NEUROENDOCRINE CELLS. It is commonly used as an immunocytochemical marker for neuroendocrine differentiation.",
    "arabic_definition": "سينابتوفيزين أو بروتين الحويصلة المشبكية الرئيسي p38 هو بروتين يوجد في الإنسان، يشفَّر عبر جين SYP. (Synaptophysin)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016708.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "opsonization",
    "term_en": "Opsonization",
    "term_ar": "أبسونين",
    "synonyms": [
      "Opsonophagocytosis",
      "Opsonophagocytoses",
      "Opsonin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of recognizing and targeting particles by binding with OPSONINS (e.g., IgM, C1 and IgG) for phagocytosis or for antibody-dependent cell cytotoxicity.",
    "arabic_definition": "الأبسونين أو الهاضمة أو قد تسمى «طاهية» (من الإغريقية opsōneîn وتعني يحضر شيئا من أجل الطعام) هي أي مادة تحسن من عملية البلعمة عن طريق التأشير على مولد الضد ووضع علامة عليه لتحفيز الاستجابة المناعية (أي أنها تجعل الخلية البلعمية تميز الخلية المعلمة بواسطتها). (Opsonization)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000088362.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tachyphylaxis",
    "term_en": "Tachyphylaxis",
    "term_ar": "تسرع المناعة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rapidly decreasing response to a drug or physiologically active agent after administration of a few doses. In immunology, it is the rapid immunization against the effect of toxic doses of an extract or serum by previous injection of small doses. (Dorland, 28th ed)",
    "arabic_definition": "تسّرع المناعة هو مصطلح طبي يصف انخفاضًا حادًا ومفاجئًا في الاستجابة للدواء بعد تناوله؛ أي بداية سريعة وقصيرة المدى لتحمل الدواء. ويمكن لهذا أن يحدث بعد جرعة أولية أو بعد سلسلة من الجرعات الصغيرة. (Tachyphylaxis)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013618.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acute-intermittent-porphyria",
    "term_en": "Acute Intermittent Porphyria",
    "term_ar": "برفريا متقطعة حادة",
    "synonyms": [
      "Acute Intermittent Porphyrias",
      "Intermittent Porphyria, Acute",
      "Intermittent Porphyrias, Acute",
      "Porphyrias, Acute Intermittent",
      "Acute Porphyria",
      "Acute Porphyrias",
      "Porphyria, Acute",
      "Porphyrias, Acute"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant porphyria that is due to a deficiency of HYDROXYMETHYLBILANE SYNTHASE in the LIVER, the third enzyme in the 8-enzyme biosynthetic pathway of HEME. Clinical features are recurrent and life-threatening neurologic disturbances, ABDOMINAL PAIN, and elevated level of AMINOLEVULINIC ACID and PORPHOBILINOGEN in the urine.",
    "arabic_definition": "البرفريا المتقطعة الحادة (اختصارًا AIP) هي اضطراب استقلابي نادر يؤثر على إنتاج الهيم بسبب نقص مادة البرفو بيلينوجين ديميناز. وهي أكثر أنواع البرفريات الحادة شيوعًا. (Acute Intermittent Porphyria)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017118.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastric-outlet-obstruction",
    "term_en": "Gastric Outlet Obstruction",
    "term_ar": "انسداد مخرج المعدة",
    "synonyms": [
      "Gastric Outlet Obstructions",
      "Obstruction, Gastric Outlet",
      "Obstructions, Gastric Outlet",
      "Outlet Obstruction, Gastric",
      "Outlet Obstructions, Gastric"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The hindering of output from the STOMACH into the SMALL INTESTINE. This obstruction may be of mechanical or functional origin such as EDEMA from PEPTIC ULCER; NEOPLASMS; FOREIGN BODIES; or AGING.",
    "arabic_definition": "انسداد مخرج المعدة أو GOO هي حالة طبية حيث يوجد انسداد على مستوى البواب المعدي، وهو مخرج المعدة. غالبًا ما يعاني الأفراد المصابون بانسداد مخرج المعدة من القيء المتكرر للطعام المتراكم في المعدة، ولكن لا يمكن أن يمر عبر الأمعاء الدقيقة بسبب الانسداد. (Gastric Outlet Obstruction)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017219.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "superior-mesenteric-artery-syndrome",
    "term_en": "Superior Mesenteric Artery Syndrome",
    "term_ar": "متلازمة الشريان المساريقي العلوي",
    "synonyms": [
      "Cast Syndrome",
      "Syndrome, Cast",
      "Duodenal Compression Syndrome, Mesenteric",
      "Mesenteric Duodenal Compression Syndrome",
      "Wilkie Syndrome",
      "Syndrome, Wilkie"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "DUODENAL OBSTRUCTION by the superior mesenteric artery (MESENTERIC ARTERY, SUPERIOR) which travels in the root of the MESENTERY and crosses over the DUODENUM. The syndrome is characterized by the dilated proximal duodenum and STOMACH, bloating, ABDOMINAL CRAMPS, and VOMITING. Often it is observed in patient with body casts after spinal surgery.",
    "arabic_definition": "متلازمة الشريان المساريقي العلوي (بالإنجليزي: Superior mesenteric artery (SMA) syndrome) هي حالة طبية نادرة وقد تكون مهددة للحياة، تحدث عندما يضغط الشريان المساريقي العلوي على الجزء الثالث من الاثني عشر، حيث يؤدي هذا الضغط إلى انسداد جزئي أو كلّي للاثني عشر مما يعيق مرور الطعام إلى باقي الأمعاء الدقيقة. وقد ينتج عن ذلك مجموعة من الأعراض مثل: الغثيان، والقيء، انتفاخ البطن، فقدان الوزن، الشبع المبكر وألم في المنطقة الواقعة أعلى المعدة بعد تناول الطعام والذي يزداد سوءًا في وضعية الاستلقاء. (Superior Mesenteric Artery Syndrome)",
    "specialty": "Gastroenterology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013478.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "histocompatibility",
    "term_en": "Histocompatibility",
    "term_ar": "توافق نسيجي",
    "synonyms": [
      "Histocompatibilities",
      "Tissue Compatibility",
      "Compatibility, Tissue",
      "Tissue Compatibilities",
      "Immunocompatibility",
      "Immunocompatibilities",
      "Histoincompatibility",
      "Histoincompatibilities"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The degree of antigenic similarity between the tissues of different individuals, which determines the acceptance or rejection of allografts.",
    "arabic_definition": "التوافق النسيجي، أو توافق الأنسجة، أو عدم توافق نسيجى أو تنافر نسيجى، هو خاصية وجود نفس الأليلات أو تشابهها بشكل كافٍ، لمجموعة من الجينات تسمى مستضدات كريات الدم البيضاء البشرية (إتش إل إيه)، أو معقد التوافق النسيجي الكبير (إم إتش سي). يعبر كل فرد عن العديد من بروتينات مستضدات كريات الدم البيضاء البشرية الفريدة على سطح خلاياه، والتي ترسل إشارة إلى الجهاز المناعي لمعرفة ما إذا كانت الخلية جزءًا ذاتيًا أو كائنًا غازيًا. (Histocompatibility)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006648.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypersensitivity",
    "term_en": "Hypersensitivity",
    "term_ar": "فرط التحسس",
    "synonyms": [
      "Hypersensitivities",
      "Allergy",
      "Allergies",
      "Allergic Reaction",
      "Allergic Reactions",
      "Reaction, Allergic",
      "Reactions, Allergic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Altered reactivity to an antigen, which can result in pathologic reactions upon subsequent exposure to that particular antigen.",
    "arabic_definition": "فرط التحسس (الإنجليزية: Hypersensitivity) (ويطلق عليه أيضاً تفاعل فرط التحسس) وتشير هذه الحالة إلى تفاعل غير مرغوب فيه من الجهاز المناعي بحيث يهاجم خلايا ومكونات طبيعية من المفترض أن لا يهاجمها ومن أبرز الأمثلة عليها هي الحساسية وأمراض المناعة الذاتية. قد يؤدي فرط التحسس إلى عدم راحة المريض وربما تلف بعض خلايا وانسجة الجسم وقد يصل إلى الوفاة في الحالات الحادة.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006967.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunocompetence",
    "term_en": "Immunocompetence",
    "term_ar": "أهلية مناعية",
    "synonyms": [
      "Competence, Immunologic",
      "Immunologic Competence",
      "Immunological Competence",
      "Competence, Immunological"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The ability of lymphoid cells to mount a humoral or cellular immune response when challenged by antigen.",
    "arabic_definition": "الأهلية المناعية (الإنجليزية: Immunocompetence) هي قدرة الجسم على إنتاج استجابة مناعية طبيعية بعد التعرض لمستضد. إن مصطلح الأهلية المناعية معاكس لمصطلح نقص المناعة أو عوز المناعة أو عدم أهلية المناعة.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007121.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemagglutination",
    "term_en": "Hemagglutination",
    "term_ar": "تراص دموي",
    "synonyms": [
      "Hemagglutinations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The aggregation of ERYTHROCYTES by AGGLUTININS, including antibodies, lectins, and viral proteins (HEMAGGLUTINATION, VIRAL).",
    "arabic_definition": "التراص الدموي أو تجمع الهيم (الإنجليزية: Hemagglutination) هو شكل محدد من التراص يتضمن خلايا الدم الحمراء (كرات الدم الحمراء). له استخدامان شائعان في المختبر: معرفة نوع الدم وتقدير كمية التخفيف من الفيروس في فحص التراص الدموي.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006384.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroimmunomodulation",
    "term_en": "Neuroimmunomodulation",
    "term_ar": "علم المناعة العصبية",
    "synonyms": [
      "Neuro-immune Interactions",
      "Interaction, Neuro-immune",
      "Neuro-immune Interaction",
      "Neuroimmune Mechanisms",
      "Mechanism, Neuroimmune",
      "Neuroimmune Mechanism",
      "Neuroimmune Process",
      "Process, Neuroimmune"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The biochemical and electrophysiological interactions between the NERVOUS SYSTEM and IMMUNE SYSTEM.",
    "arabic_definition": "عِلْمُ المَناعَةِ العَصَبِيَّة (الإنجليزية: Neuroimmunology) هو العلم المعني بدراسة كل من الجهاز العصبي، وعلم المناعة الذي يدرس الجهاز المناعي. يسعى علماء المناعة العصبية إلى فهم التفاعلات بين هذين النظامين المعقدين بشكل أفضل خلال عمليات التطور والاستتباب والاستجابة للأذية. (Neuroimmunomodulation)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015213.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "farmers-lung",
    "term_en": "Farmer's Lung",
    "term_ar": "مرض رئة المزارع",
    "synonyms": [
      "Farmer Lung",
      "Farmers Lung",
      "Farmer's Lungs",
      "Mushroom Worker's Lung",
      "Mushroom Worker Lung",
      "Mushroom Workers Lung",
      "Mushroom Worker's Lungs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of alveolitis or pneumonitis due to an acquired hypersensitivity to inhaled antigens associated with farm environment. Antigens in the farm dust are commonly from bacteria actinomycetes (SACCHAROPOLYSPORA and THERMOACTINOMYCES), fungi, and animal proteins in the soil, straw, crops, pelts, serum, and excreta.",
    "arabic_definition": "مرض رئة المزارع، «وينبغي عدم الخلط مع مرض معبئات الصوامع (silo-filler's disease)» هو عبارة عن حساسية مفرطة تؤدي إلى التهاب الرئة والتي تحدث بسبب استنشاق الأغبرة البيولوجية المبعوثة من القش «التبن» أو أبواغ العفن أو أي منتجات زراعية أخرى. وينتج عن ذلك حساسية مفرطة من النوع الثالث تحدث التهابا كرد فعل، ويمكن تطور الأمر إلى حالة مزمنة وعندها تعد خطيرة. (Farmer's Lung)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005203.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunosenescence",
    "term_en": "Immunosenescence",
    "term_ar": "تشيخ مناعي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The decline in the function of the IMMUNE SYSTEM during aging.",
    "arabic_definition": "التَشَيُّخ المَنَاعِيّ (الإنجليزية: Immunosenescence) هو مُصطلح يشير إلى التَدَهور التدريجيّ للجهاز المَناعيّ نتيجة التقدّم بالعمر. ويؤثّر على استطاعة الجسم للاستجابة إلى العَدوى وعلى تطوير الذاكرة المناعيّة طويلة الأمَد، خاصّة بواسطة التلقيح.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000068884.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nut-hypersensitivity",
    "term_en": "Nut Hypersensitivity",
    "term_ar": "حساسية مكسرات الشجر",
    "synonyms": [
      "Hypersensitivities, Nut",
      "Nut Hypersensitivities",
      "Hypersensitivity, Nut",
      "Nut Allergy",
      "Allergies, Nut",
      "Nut Allergies",
      "Tree Nut Hypersensitivity",
      "Hypersensitivities, Tree Nut"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Allergic reaction to tree nuts that is triggered by the immune system.",
    "arabic_definition": "حساسية مكسرات الشجر هي واحدة من أكثر أنواع أمراض الحساسية الغذائية شيوعاً لدى البالغين والأطفال، يمكن أن تتراوح ردود الفعل التحسسية تجاه الجوز وبعض المكسرات من أعراض خفيفة إلى مهددة للحياة. (Nut Hypersensitivity)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D021184.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "multiple-chemical-sensitivity",
    "term_en": "Multiple Chemical Sensitivity",
    "term_ar": "حساسية كيميائية متعددة",
    "synonyms": [
      "Multiple Chemical Sensitivities",
      "Multiple Chemical Sensitivity Syndrome",
      "Sensitivities, Multiple Chemical",
      "Chemical Sensitivities, Multiple",
      "Chemical Sensitivity, Multiple",
      "Idiopathic Environmental Intolerance",
      "Environmental Intolerance, Idiopathic",
      "Environmental Intolerances, Idiopathic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acquired disorder characterized by recurrent symptoms, referable to multiple organ systems, occurring in response to demonstrable exposure to many chemically unrelated compounds at doses below those established in the general population to cause harmful effects. (Cullen MR. The worker with multiple chemical sensitivities: an overview. Occup Med 1987;2(4):655-61)",
    "arabic_definition": "تعد الحساسية الكيميائية المتعددة (MCS) (الإنجليزية: Multiple chemical sensitivity)، والمعروفة أيضًا باسم عدم تحمل البيئة مجهول السبب (IEI)، تشخيصًا غير معترف به يتميز بأعراض مزمنة تعزى إلى التعرض لمستويات منخفضة من المواد الكيميائية الشائعة الاستخدام. الأعراض عادة ما تكون غامضة وغير محددة.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018777.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sick-building-syndrome",
    "term_en": "Sick Building Syndrome",
    "term_ar": "متلازمة المبنى المريض",
    "synonyms": [
      "Syndrome, Sick Building",
      "Sick House Syndrome",
      "Syndrome, Sick House",
      "Syndromes, Sick House"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of symptoms that are two- to three-fold more common in those who work in large, energy-efficient buildings, associated with an increased frequency of headaches, lethargy, and dry skin. Clinical manifestations include hypersensitivity pneumonitis (ALVEOLITIS, EXTRINSIC ALLERGIC); allergic rhinitis (RHINITIS, ALLERGIC, PERENNIAL); ASTHMA; infections, skin eruptions, and mucous membrane irritation syndromes. Current usage tends to be less restrictive with regard to the type of building and delineation of complaints. (From Segen, Dictionary of Modern Medicine, 1992)",
    "arabic_definition": "متلازمة المبنى المريض أو متلازمة البناء المرضي أو متلازمة المباني المريضة أو متلازمة المكتب (الإنجليزية: Sick Building Syndrome) وتعرف اختصارًا SBS، هي حالة تظهر فيها أعراض مرضية أو تحدث إصابة بأمراض مزمنة لدى الأشخاص نتيجة تواجدهم في مبنى يعملون أو يقيمون فيه. تُعرف هذه الحالة أيضًا في الأدبيات العلمية باسم المرض المرتبط بالمباني أو الأعراض المرتبطة بالمباني أو عدم التحمل البيئي مجهول السبب.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018877.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "classical-complement-pathway",
    "term_en": "Classical Complement Pathway",
    "term_ar": "سبيل تقليدي متمم",
    "synonyms": [
      "Complement Activation Pathway, Classical",
      "Classical Complement Activation Pathway"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Complement activation initiated by the binding of COMPLEMENT C1 to ANTIGEN-ANTIBODY COMPLEXES at the COMPLEMENT C1Q subunit. This leads to the sequential activation of COMPLEMENT C1R and COMPLEMENT C1S subunits. Activated C1s cleaves COMPLEMENT C4 and COMPLEMENT C2 forming the membrane-bound classical C3 CONVERTASE (C4B2A) and the subsequent C5 CONVERTASE (C4B2A3B) leading to cleavage of COMPLEMENT C5 and the assembly of COMPLEMENT MEMBRANE ATTACK COMPLEX.",
    "arabic_definition": "السبيل التقليدي المتمم هو أحد السبل الثلاثة التي تفعل جملة المتممة التي تشكل جزءًا من الجهاز المناعي. يبدأ السبيل التقليدي بمعقدات الضد-مستضد والغلوبولينات المناعية من النمط الأسوي، الغلوبولين المناعي ج (آي جي جي) والغلوبولين المناعي م (آي جي إم). (Classical Complement Pathway)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003171.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "common-variable-immunodeficiency",
    "term_en": "Common Variable Immunodeficiency",
    "term_ar": "عوز مناعي شائع متغير",
    "synonyms": [
      "Common Variable Immunodeficiencies",
      "Immunodeficiencies, Common Variable",
      "Common Variable Hypogammaglobulinemia",
      "Common Variable Hypogammaglobulinemias",
      "Hypogammaglobulinemia, Common Variable",
      "Hypogammaglobulinemias, Common Variable",
      "Variable Hypogammaglobulinemia, Common",
      "Variable Hypogammaglobulinemias, Common"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Heterogeneous group of immunodeficiency syndromes characterized by hypogammaglobulinemia of most isotypes, variable B-cell defects, and the presence of recurrent bacterial infections.",
    "arabic_definition": "العوز المناعي الشائع المتغير هو اضطراب مناعي يتميز بعدوى متكررة ومستويات منخفضة من المضادات الحيوية، وخاصة الأنواع «آي جي جي»، و«آي جي إم» و«آي جي إيه» من الغلوبولين المناعي (آي جي). تشمل الأعراض بشكل عام قابلية التعرض العالية لغزو الأجسام الأجنبية، والمرض الرئوي المزمن وعدوى القناة الهضمية والتهابها. (Common Variable Immunodeficiency)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017074.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oral-allergy-syndrome",
    "term_en": "Oral Allergy Syndrome",
    "term_ar": "متلازمة حساسية الفم",
    "synonyms": [
      "Allergy Syndrome, Oral",
      "Oral Allergy Syndromes",
      "Syndrome, Oral Allergy",
      "Food Pollen Allergy Syndrome",
      "Pollen Food Allergy Syndrome",
      "Allergy Syndrome, Pollen-Food",
      "Pollen-Food Allergy Syndromes",
      "Syndrome, Pollen-Food Allergy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Allergic reaction to certain foods, including fresh fruits, vegetables and nuts which share CROSS REACTIONS to allergens from trees, grass or pollens. Oral allergy syndrome is limited to itchy lips, mouth, and throat without severe ANAPHYLAXIS and is often associated with chronic EOSINOPHILIC ESOPHAGITIS.",
    "arabic_definition": "متلازمة حساسية الفم (بالإنجليزية: Oral Allergy Syndrome) هي حساسية في الفم تعقب تناول طعام. هي نوع من حساسية الطعام المصنفة بمجموعة من ردود فعل الحساسية في الفم استجابة لتناول أنواع معينة من الطعام كالفواكه (الطازجة عادة)، والمكسرات، والخضروات وتحدث تقليديًا في الشخص البالغ مع حساسية الأنف.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000099072.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acquired-immunodeficiency-syndrome",
    "term_en": "Acquired Immunodeficiency Syndrome",
    "term_ar": "إيدز",
    "synonyms": [
      "AIDS",
      "Immunodeficiency Syndrome, Acquired",
      "Acquired Immunodeficiency Syndromes",
      "Immunodeficiency Syndromes, Acquired",
      "Syndrome, Acquired Immunodeficiency",
      "Syndromes, Acquired Immunodeficiency",
      "Acquired Immune Deficiency Syndrome",
      "Acquired Immuno-Deficiency Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acquired defect of cellular immunity associated with infection by the human immunodeficiency virus (HIV), a CD4-positive T-lymphocyte count under 200 cells/microliter or less than 14% of total lymphocytes, and increased susceptibility to opportunistic infections and malignant neoplasms. Clinical manifestations also include emaciation (wasting) and dementia. These elements reflect criteria for AIDS as defined by the CDC in 1993.",
    "arabic_definition": "مرض الإيدز أو الإيدس أو السيدا أو التَنَقْصُم (نحت تناذر نقص المناعة المكتسبة) أو متلازمة نقص المناعة المكتسبة أو متلازمة العَوَز المناعي المكتسب (الإنجليزية: AIDS؛ الفرنسية: SIDA) هو مرض يصيب الجهاز المناعي البشري ويسببه فيروس نقص المناعة البشرية فيروس إتش أي في (HIV) وتؤدي الإصابة بهذه الحالة المرضية إلى التقليل من فاعلية الجهاز المناعي للإنسان تدريجيًّا ليترك المصابين به عرضة للإصابة بأنواع من العدوى الانتهازية والأورام. وينتقل فيروس نقص المناعة إلى المصاب عن طريق حدوث اتصال مباشر بين غشاء مخاطي أو مجرى الدم وبين سائل جسدي يحتوي على هذا الفيروس مثل: الدم أو السائل المنوي للذكر أو السائل المهبلي للأنثى أو المذي أو لبن الرضاعة الطبيعية. (Acquired Immunodeficiency Syndrome)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000163.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mast-cell-activation-syndrome",
    "term_en": "Mast Cell Activation Syndrome",
    "term_ar": "متلازمة تنشيط الخلايا الصارية",
    "synonyms": [
      "Mast Cell Activation Syndromes",
      "Idiopathic Mast Cell Activation Disorder",
      "Non-Clonal Mast Cell Activation Syndrome",
      "Nonclonal Mast Cell Activation Syndrome",
      "nc-MCAS",
      "Non-Clonal Mast Cell Activation Disorder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clinically and genetically heterogeneous group of mast cell disorders in which there is aberrant release of mast cell mediators with little to no accompanying proliferation of MAST CELLS.",
    "arabic_definition": "متلازمة تنشيط الخلايا الصارية (الإنجليزية: Mast cell activation syndrome) هي أحد أنواع خلل تنشيط الخلايا الصارية، وهي حالة مناعية تقوم فيها الخلايا الصارية بإطلاق الوسائط الكيميائية بشكل مفرط وغير ملائم، مسببةً مجموعة من الأعراض المزمنة، والتي قد تتضمن أحيانا نوبات من الحساسية المفرطة أو ما يقارب الحساسية.تشمل الأعراض الأولية مشكلات في الجهاز الدوري والجلد والجهاز الهضمي والجهاز العصبي والجهاز التنفسي. بخلاف كثرة الخلايا الصارية، وهي نوع آخر من أنواع خلل تنشيط الخلايا الصارية، حيث يكون لدى المرضى عدد متزايد بشكل غير طبيعي من الخلايا الصارية، فإن المرضى الذين يعانون من متلازمة تنشيط الخلايا الصارية يكون لديهم عددًا طبيعيًا من الخلايا الصارية التي لا تعمل بشكل صحيح ويتم تعريفها على أنها «عالية الاستجابة».",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000090267.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "innate-immunity",
    "term_en": "Innate Immunity",
    "term_ar": "مناعة فطرية",
    "synonyms": [
      "Immunity, Natural",
      "Natural Immunity",
      "Immunity, Non-Specific",
      "Non-Specific Immunity",
      "Immunity, Native",
      "Native Immunity",
      "Innate Immune Response",
      "Immune Response, Innate"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The capacity of a normal organism to remain unaffected by microorganisms and their toxins. It results from the presence of naturally occurring ANTI-INFECTIVE AGENTS, constitutional factors such as BODY TEMPERATURE and immediate acting immune cells such as NATURAL KILLER CELLS.",
    "arabic_definition": "المناعة الطبيعية أو المناعة الفطرية (الإنجليزية: Innate immunity)، وَتُعرف أيضاً بالمناعة غير المتخصصة وهي المناعة المتوارثة الموجودة في الكائن الحي منذ الولادة وحتى قبل الولادة خلال المرحلة الجنينية. عمومًا يتميز جهاز المناعة الطبيعية بالعمل بطريقة غير متخصصة بمعنى أنه كل خلية أو جزيء تابع لها يعمل ضد عدد كبير ومتنوع من الممرضات ولكن فقط حسب التمييز بين ما هو ذاتي أي تابع للجسم أو ما هو جسيم غريب عن الجسم يجب التعامل معه وتحديده.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007113.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aids-related-complex",
    "term_en": "AIDS-Related Complex",
    "term_ar": "معقد مرتبط بالإيدز",
    "synonyms": [
      "Complex, AIDS-Related",
      "ARC",
      "Lymphadenopathy Syndrome",
      "Lymphadenopathy Syndromes",
      "Syndrome, Lymphadenopathy",
      "Syndromes, Lymphadenopathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A prodromal phase of infection with the human immunodeficiency virus (HIV). Laboratory criteria separating AIDS-related complex (ARC) from AIDS include elevated or hyperactive B-cell humoral immune responses, compared to depressed or normal antibody reactivity in AIDS; follicular or mixed hyperplasia in ARC lymph nodes, leading to lymphocyte degeneration and depletion more typical of AIDS; evolving succession of histopathological lesions such as localization of Kaposi's sarcoma, signaling the transition to the full-blown AIDS.",
    "arabic_definition": "المعقد المرتبط بالإيدز (AIDS-related complex) هو المرحلة البادرية من العدوى بفيروس نقص المناعة البشرية (HIV). تشمل المعايير المختبرية التي تفصل بين المعقدات المرتبطة بالإيدز (ARC) عن الإيدز استجابات مناعية خلطية مرتفعة أو مفرطة النشاط للخلايا البائية، مقارنة بتفاعل الجسم المضاد المنخفض أو الطبيعي في الإيدز؛ فرط تنسج جريبي أو مختلط في العقد الليمفاوية القوسية، مما يؤدي إلى انحطاط الخلايا الليمفاوية واستنزافها، وهو أكثر شيوعًا في حالات الإيدز؛ تطور تعاقب الآفات النسيجية المرضية مثل توطين ساركوما كابوسي، مما يشير إلى الانتقال إلى الإيدز الكامل.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000386.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "occupational-asthma",
    "term_en": "Occupational Asthma",
    "term_ar": "ربو مهني",
    "synonyms": [
      "Asthmas, Occupational",
      "Occupational Asthmas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Asthma attacks caused, triggered, or exacerbated by OCCUPATIONAL EXPOSURE.",
    "arabic_definition": "يشير الربو المهني إلى الإصابة الحديثة بالربو أو تكرر نوباته بسبب طبيعة المهنة نتيجة التعرض المباشر للعوامل المتسببة كالمحسسات والمهيجات. والربو المهني هو أحد أشكال أمراض الرئة المهنية. (Occupational Asthma)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059366.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autoimmune-diseases",
    "term_en": "Autoimmune Diseases",
    "term_ar": "مرض مناعي ذاتي",
    "synonyms": [
      "Disease, Autoimmune",
      "Diseases, Autoimmune",
      "Autoimmune Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorders that are characterized by the production of antibodies that react with host tissues or immune effector cells that are autoreactive to endogenous peptides.",
    "arabic_definition": "أمراض المناعة الذاتية أو داءُ المناعَةِ الذَّاتِيَّة أو الأمراض الانضِدادية (الإنجليزية: Autoimmune disease)، هي حالة تنتج عن استجابة شاذة للجهاز المناعي، حيث يستهدف عن طريق الخطأ ويهاجم أجزاء صحية تعمل من الجسم كما لو كانت كائنات غريبة. تشير التقديرات إلى أن هناك أكثر من 80 مرضا من أمراض المناعة الذاتية المعترف بها، حيث تشير الأدلة العلمية الحديثة إلى وجود أكثر من 100 حالة متميزة محتملة. (Autoimmune Diseases)",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001327.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coma",
    "term_en": "Coma",
    "term_ar": "غيبوبة",
    "synonyms": [
      "Comas",
      "Comatose",
      "Pseudocoma",
      "Pseudocomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A profound state of unconsciousness associated with depressed cerebral activity from which the individual cannot be aroused. Coma generally occurs when there is dysfunction or injury involving both cerebral hemispheres or the brain stem RETICULAR FORMATION.",
    "arabic_definition": "الغيبوبة (الإنجليزية: Coma، وتعني باليونانية النوم العميق)، هي حالة فقدان وعي عميقة، لا يمكن للفرد خلالها أن يتفاعل مع البيئة المحيطة به، ولا يمكنه أيضا الاستجابة للمؤثرات الخارجية. تتميز الغيبوبة بفشل عمل نظام التنشيط الشبكي (RAS).",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003128.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dyslexia",
    "term_en": "Dyslexia",
    "term_ar": "عسر القراءة",
    "synonyms": [
      "Dyslexias",
      "Word Blindness",
      "Blindnesses, Word",
      "Blindness, Word",
      "Word Blindnesses",
      "Alexia",
      "Alexias",
      "Reading Disorder, Developmental"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cognitive disorder characterized by an impaired ability to comprehend written and printed words or phrases despite intact vision. This condition may be developmental or acquired. Developmental dyslexia is marked by reading achievement that falls substantially below that expected given the individual's chronological age, measured intelligence, and age-appropriate education. The disturbance in reading significantly interferes with academic achievement or with activities of daily living that require reading skills. (From DSM-IV)",
    "arabic_definition": "عُسر القراءة أو خلل القرائية (الإنجليزية: Dyslexia) عجزٌ في التعلم يؤثر إما على القراءة أو الكتابة. يتميز بصعوبة في القراءة على الرغم من الذكاء الطبيعي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004410.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epilepsy",
    "term_en": "Epilepsy",
    "term_ar": "صرع",
    "synonyms": [
      "Epilepsies",
      "Seizure Disorder",
      "Seizure Disorders",
      "Epilepsy, Cryptogenic",
      "Cryptogenic Epilepsies",
      "Cryptogenic Epilepsy",
      "Epilepsies, Cryptogenic",
      "Aura"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder characterized by recurrent episodes of paroxysmal brain dysfunction due to a sudden, disorderly, and excessive neuronal discharge. Epilepsy classification systems are generally based upon: (1) clinical features of the seizure episodes (e.g., motor seizure), (2) etiology (e.g., post-traumatic), (3) anatomic site of seizure origin (e.g., frontal lobe seizure), (4) tendency to spread to other structures in the brain, and (5) temporal patterns (e.g., nocturnal epilepsy). (From Adams et al., Principles of Neurology, 6th ed, p313)",
    "arabic_definition": "الصَّرْعُ (الإنجليزية: Epilepsy) مجموعة من الاضطرابات العصبية التي تنتج عن اضطراب الإشارات الكهربائية في خلايا المخ وتتميز بحدوث نوبات متكررة. يمكن أن تختلف نوبات الصرع من فترات قصيرة وغير قابلة للكشف تقريبًا إلى فترات طويلة من التشنج الشديد، كما يمكن أن تؤدي هذه النوبات إلى إصابات جسدية، بما في ذلك كسر العظام في بعض الأحيان.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004827.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mania",
    "term_en": "Mania",
    "term_ar": "هوس",
    "synonyms": [
      "Manias",
      "Manic State",
      "Manic Episode",
      "Episode, Manic",
      "Manic Episodes",
      "Hypomanic Episode",
      "Hypomanic Episodes",
      "Hypomania"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A state of elevated excitement with over-activity sometimes accompanied with psychotic symptoms (e.g., PSYCHOMOTOR AGITATION, inflated SELF ESTEEM and flight of ideas). It is often associated with mental disorders (e.g., CYCLOTHYMIC DISORDER; and BIPOLAR DISEASES).",
    "arabic_definition": "الهَوَس هي حالة من الانفعال أو ارتفاع المزاج غير الطبيعي، والإثارة، و/أو مستويات الطاقة. كلمة مشتقة من «اليونانية» μανία } (الهوس)، «الجنون، جنون» وهذا من «فعل» μαίνομαι ' (mainomai)، «ليكون مجنونا، والغضب، ليكون غاضب». (Mania)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000087122.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tremor",
    "term_en": "Tremor",
    "term_ar": "رعاش",
    "synonyms": [
      "Tremors",
      "Action Tremor",
      "Action Tremors",
      "Tremor, Action",
      "Resting Tremor",
      "Resting Tremors",
      "Tremor, Resting",
      "Rest Tremor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cyclical movement of a body part that can represent either a physiologic process or a manifestation of disease. Intention or action tremor, a common manifestation of CEREBELLAR DISEASES, is aggravated by movement. In contrast, resting tremor is maximal when there is no attempt at voluntary movement, and occurs as a relatively frequent manifestation of PARKINSON DISEASE.",
    "arabic_definition": "الرعاش هو حركة لا إرادية متواترة إلى حد ما بسبب تقلص العضلات، ويتضمن حدوث استرخاء وحركات، ذهابا وايابا (تذبذبات أو وخز) في جزء واحد من الجسد أو أكثر. ويعد الأكثر شيوعا من جميع الحركات اللاإرادية ويمكن أن يؤثر على اليدين والذراعين والعينين والوجه والرأس والاحبال الصوتية، والجذع والساقين. (Tremor)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014202.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dementia",
    "term_en": "Dementia",
    "term_ar": "خرف",
    "synonyms": [
      "Dementias",
      "Amentia",
      "Amentias",
      "Senile Paranoid Dementia",
      "Dementias, Senile Paranoid",
      "Paranoid Dementia, Senile",
      "Paranoid Dementias, Senile",
      "Senile Paranoid Dementias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acquired organic mental disorder with loss of intellectual abilities of sufficient severity to interfere with social or occupational functioning. The dysfunction is multifaceted and involves memory, behavior, personality, judgment, attention, spatial relations, language, abstract thought, and other executive functions. The intellectual decline is usually progressive, and initially spares the level of consciousness.",
    "arabic_definition": "الخَرَف أو العُتَاه أو العَتَه أو الخَبَل أو التدهور العقلي (الإنجليزية: Dementia) هو متلازمة يرتبط بالعديد من التحللات العصبية، ويتميز بانخفاض عام في القدرات المعرفية ما يؤثر على قدرة الشخص على أداء أنشطة الحياة اليومية. يتضمن هذا عادةً مشاكل في الذاكرة، والتفكير، والسلوك، والتحكّم الحركي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003704.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "botulism",
    "term_en": "Botulism",
    "term_ar": "تسمم سجقي",
    "synonyms": [
      "Clostridium botulinum Infection",
      "Clostridium botulinum Infections",
      "Infection, Clostridium botulinum",
      "Botulism, Toxico-Infectious",
      "Toxico-Infectious Botulism",
      "Botulism, Infantile",
      "Infantile Botulism",
      "Infant Botulism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease caused by potent protein NEUROTOXINS produced by CLOSTRIDIUM BOTULINUM which interfere with the presynaptic release of ACETYLCHOLINE at the NEUROMUSCULAR JUNCTION. Clinical features include abdominal pain, vomiting, acute PARALYSIS (including respiratory paralysis), blurred vision, and DIPLOPIA. Botulism may be classified into several subtypes (e.g., food-borne, infant, wound, and others). (From Adams et al., Principles of Neurology, 6th ed, p1208)",
    "arabic_definition": "تسمم سُجقِّيّ أو التسمم الممباري أو تسمم الوشيقي ويُعرَف أيضًا بـتسمم بوتولينوس هو مرض شللي نادر ولكنه أحيانًا قاتل، ينتج عن البوتوكس، وهو بروتين يُفرَز في مناخ لاهوائي بواسطة البكتيريا المطثية الوشيقية، ويؤثر على مجموعة كبيرة من الثدييات، والطيور، والأسماك. يدخل التوكسين إلى جسم الإنسان بإحدى الطرق الثلاث التالية: عن طريق استعمار البكتيريا للجهاز الهضمي لدى الأطفال (التسمم السجقي للأطفال)، أو البالغين (تسمم الدم المعوي)، عن طريق تلوث الأغذية بالتوكسين (التسمم السجقي المنقول بالأغذية)، أو عن طريق تلوث جرح بالبكتيريا (التسمم بالجروح). (Botulism)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001906.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "apraxias",
    "term_en": "Apraxias",
    "term_ar": "عمه حركي",
    "synonyms": [
      "Apraxia",
      "Dyspraxia",
      "Dyspraxias",
      "Dressing Apraxia",
      "Apraxia, Dressing",
      "Apraxias, Dressing",
      "Dressing Apraxias",
      "Ideational Apraxia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of cognitive disorders characterized by the inability to perform previously learned skills that cannot be attributed to deficits of motor or sensory function. The two major subtypes of this condition are ideomotor (see APRAXIA, IDEOMOTOR) and ideational apraxia, which refers to loss of the ability to mentally formulate the processes involved with performing an action. For example, dressing apraxia may result from an inability to mentally formulate the act of placing clothes on the body. Apraxias are generally associated with lesions of the dominant PARIETAL LOBE and supramarginal gyrus. (From Adams et al., Principles of Neurology, 6th ed, pp56-7)",
    "arabic_definition": "العمه الحركي أو تعذّر الأداء أو اللاأدائية أو الخَرَق هو خلل حركي ناتج عن تلف في الدماغ (خاصة منطقة القشرة الجدارية الخلفية)، حيث يعاني المريض من صعوبة في تخطيط سلسلة الأحداث (التحركات) للقيام بحركة ما أو عندما يطلب منه تنفيذ مهمة ما، وبالرغم من أن الأمر مفهوم وينوي المصاب القيام به. إذاً هو خلل في عملية التخطيط الحركي لا يسبب اضطراباً في التناسق، أو فقدان الحواس، أو خللًا في فهم الأوامر البسيطة (والذي يمكن تشخيصه من خلال الطلب من المريض تمييز الحركة الصحيحة من بين سلسلة حركات)، إنما ينتج من تلف في أماكن معينة في المخ. (Apraxias)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001072.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anosmia",
    "term_en": "Anosmia",
    "term_ar": "فقد الشم",
    "synonyms": [
      "Loss of Smell",
      "Smell Loss",
      "Hyposmia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Complete or severe loss of the subjective sense of smell. Loss of smell may be caused by many factors such as a cold, allergy, OLFACTORY NERVE DISEASES, viral RESPIRATORY TRACT INFECTIONS (e.g., COVID-19), aging and various neurological disorders (e.g., ALZHEIMER DISEASE).",
    "arabic_definition": "فقد الشم أو فقد حاسة الشم أو اللاشمية أو الخشام أو الخشم أو أنوسميا anosmia: هي حالة خسارة أو فقدان حاسة الشم المعروفة علميا باسم أنوسميا، مفردات مرتبطة (هيبوسميا) نقصان في حاسة الشم وهيبروسميا زيادة في حاسة الشم، الانوسميا قد تكون فقدان مؤقت لحاسة الشم ناتج عن أسباب متعددة قد تكون بسبب التهابات الجيوب الأنفية، أو بسبب الحساسية التي تصيب الأنف أو بسبب التدخين وفي حالات أخرى قد تكون دلالة مبكرة للأصابة بمرض الخرف (الزهايمر) أو (الباركنسون). فقدان حاسة الشم قد يكون خطيرًا في حال عدم القدرة على اشتمام غاز الاشتعال وبالتالي التعرض لحوادث، ويؤثر فقدان حاسة الشم على القدرة الجنسية لكن هذا لا ينطبق على الانوسميا الخلقية أي التي تأتي مع الولادة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000086582.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myalgia",
    "term_en": "Myalgia",
    "term_ar": "ألم عضلي",
    "synonyms": [
      "Muscle Pain",
      "Pain, Muscle",
      "Pains, Muscle",
      "Muscle Soreness",
      "Muscle Sorenesses",
      "Soreness, Muscle",
      "Muscle Tenderness",
      "Tenderness, Muscle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Painful sensation in the muscles.",
    "arabic_definition": "الألم العضلي أو الوجع العضلي هو عرض يظهرُ في العديد من الأمراض والاضطرابات. من الأسباب الأكثر شيوعا هي الاستخدام المفرط أو الإفراط في تمدد عضلة أو مجموعة من العضلات. (Myalgia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063806.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "agnosia",
    "term_en": "Agnosia",
    "term_ar": "عمه",
    "synonyms": [
      "Agnosias",
      "Auditory Agnosia",
      "Agnosia, Auditory",
      "Agnosias, Auditory",
      "Auditory Agnosias",
      "Finger Agnosia",
      "Agnosia, Finger",
      "Agnosias, Finger"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Loss of the ability to comprehend the meaning or recognize the importance of various forms of stimulation that cannot be attributed to impairment of a primary sensory modality. Tactile agnosia is characterized by an inability to perceive the shape and nature of an object by touch alone, despite unimpaired sensation to light touch, position, and other primary sensory modalities.",
    "arabic_definition": "العمه أو عدم الدراية أو فقد التحسس (الإنجليزية: Agnosia) وهو فقدان القدرة على التعرف على الأشياء أو الأشخاص أو الأصوات أو الأشكال أو الروائح في حين أن إحساس معين ليس معيب ولا هناك أي فقدان معتبر للذاكرة. عادةً ما يرتبط مع إصابات الدماغ أو أمراض عصبية وخاصةً بعد الأضرار التي لحقت بحدود القذالي الصدغي والذي هو جزء من المجرى البطني.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000377.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spasm",
    "term_en": "Spasm",
    "term_ar": "تشنج",
    "synonyms": [
      "Spasms",
      "Muscle Spasm",
      "Muscle Spasms",
      "Spasm, Muscle",
      "Spasms, Muscle",
      "Muscular Spasm",
      "Muscular Spasms",
      "Spasm, Muscular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An involuntary contraction of a muscle or group of muscles. Spasms may involve SKELETAL MUSCLE or SMOOTH MUSCLE.",
    "arabic_definition": "التشنج أو الشَّنَج أو التقلص أو التقلص العضلي اللإرادي هو تقلص لا إرادي أو تشنج لإحدى العضلات وعادة ما يكون مصحوب بألمٍ شديد، وقد يحدث التقلص العضلي أثناء النوم، ومن أسبابه في الغالب نقص المغنسيوم في الدم، إلا أن التقلص الذي يحدث أثناء النوم يغلب عليه النقص في الكالسيوم. (Spasm)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013035.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "agraphia",
    "term_en": "Agraphia",
    "term_ar": "العجز عن الكتابة",
    "synonyms": [
      "Agraphias",
      "Pure Agraphia",
      "Agraphia, Pure",
      "Agraphias, Pure",
      "Pure Agraphias",
      "Acquired Agraphia",
      "Acquired Agraphias",
      "Agraphia, Acquired"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Loss or impairment of the ability to write (letters, syllables, words, or phrases) due to an injury to a specific cerebral area or occasionally due to emotional factors. This condition rarely occurs in isolation, and often accompanies APHASIA. (From Adams et al., Principles of Neurology, 6th ed, p485; APA, Thesaurus of Psychological Index Terms, 1994)",
    "arabic_definition": "العجز عن الكتابة هو اضطراب عصبي مكتسب يؤدي إلى فقدان القدرة على التواصل من خلال الكتابة، إما بسبب شكل من أشكال الخلل الوظيفي الحركي أو عدم القدرة على التهجئة. قد يترافق العجز عن الكتابة مع اضطرابات لغوية أو عصبية أخرى. (Agraphia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000381.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trismus",
    "term_en": "Trismus",
    "term_ar": "ضزز",
    "synonyms": [
      "Lockjaw",
      "Lock Jaw",
      "Masseter Muscle Spasm",
      "Masseter Muscle Spasms",
      "Muscle Spasm, Masseter",
      "Muscle Spasms, Masseter",
      "Spasm, Masseter Muscle",
      "Spasms, Masseter Muscle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Spasmodic contraction of the masseter muscle resulting in forceful jaw closure. This may be seen with a variety of diseases, including TETANUS, as a complication of radiation therapy, trauma, or in association with neoplastic conditions.",
    "arabic_definition": "الضزز أو الشكب أو الكزز أو كزاز الفك (الإنجليزية: trismus)، والمعروف بـ«lockjaw»، هي حالة تعود إلى عدم القدرة على فتح الفكين بسبب تقلص عضلات المضغ، أو محدودية القدرة على فتح الفكين لأي سببٍ كان يعتبر مرض الضزز مشكلة شائعة تعود إلى العديد من الأسباب، حيث أنها تسبب صعوبة في تناول الطعام والتكلم عملية تنظيف الفم، ومن الممكن أن يحدث تغير في ملامح الوجه. مرض الضزز يزيد من خطر حدوث الشفط أو الرشف.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014313.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myelitis",
    "term_en": "Myelitis",
    "term_ar": "التهاب النخاع",
    "synonyms": [
      "Myelitides",
      "Inflammation, Spinal Cord",
      "Myelopathy, Inflammatory",
      "Inflammatory Myelopathies",
      "Inflammatory Myelopathy",
      "Myelopathies, Inflammatory",
      "Spinal Cord Inflammation",
      "Inflammations, Spinal Cord"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the spinal cord. Relatively common etiologies include infections; AUTOIMMUNE DISEASES; SPINAL CORD; and ischemia Clinical features generally include weakness, sensory loss, localized pain, incontinence, and other signs of autonomic dysfunction.",
    "arabic_definition": "التهاب النّخاع أوالتهاب النخاع الشوكي (الإنجليزية: Myelitis) يشمل العدوى أو التهاب المادة البيضاء أو المادة الرمادية من النخاع الشوكي الذي هو جزء من الجهاز العصبي المركزي الذي يعمل كجسر بين الدماغ وبقية الجسم. قد يتضرر الميالين والمحور العصبي خلال الاستجابة الالتهابية في النخاع الشوكي مما يؤدي إلى عوارض مثل الشلل وفقدان حسّي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009187.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scrapie",
    "term_en": "Scrapie",
    "term_ar": "راعوش",
    "synonyms": [
      "Rida"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A fatal disease of the nervous system in sheep and goats, characterized by pruritus, debility, and locomotor incoordination. It is caused by proteinaceous infectious particles called PRIONS.",
    "arabic_definition": "رَاعُوش (الإنجليزية: Scrapie) التهابٌ دماغيٌّ في الماشية. يصيب الجهاز العصبي للأغنام والماعز.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012608.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paresis",
    "term_en": "Paresis",
    "term_ar": "شلل جزئي",
    "synonyms": [
      "Pareses",
      "Muscle Paresis",
      "Muscle Pareses",
      "Pareses, Muscle",
      "Paresis, Muscle",
      "Muscular Paresis",
      "Muscular Pareses",
      "Pareses, Muscular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A general term referring to a mild to moderate degree of muscular weakness, occasionally used as a synonym for PARALYSIS (severe or complete loss of motor function). In the older literature, paresis often referred specifically to paretic neurosyphilis (see NEUROSYPHILIS). General paresis and general paralysis may still carry that connotation. Bilateral lower extremity paresis is referred to as PARAPARESIS.",
    "arabic_definition": "الشلل الجزئي أو الْخَزَّل في الطب هو شلل لجزء من الجسم، وغالباً ما يكون مصحوباً بـ فقدان الإحساس، وعدم تحكم بحركات الجسم مثل الارتعاش. وتشمل الحالات الطبية التي تنطوي على الشلل: الشلل الدماغي (الذي تسببه آفات معينة داخل الجمجمة)، والشلل العضدي (شلل الذراع)، وشلل بيل (شلل نصف الوجه بسبب التهاب في أعصاب الوجه). (Paresis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010291.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tics",
    "term_en": "Tics",
    "term_ar": "عرة",
    "synonyms": [
      "Habit Chorea",
      "Chorea, Habit",
      "Choreas, Habit",
      "Habit Choreas",
      "Habit Spasm",
      "Habit Spasms",
      "Spasm, Habit",
      "Spasms, Habit"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Habitual, repeated, rapid contraction of certain muscles, resulting in stereotyped individualized actions that can be voluntarily suppressed for only brief periods. They often involve the face, vocal cords, neck, and less often the extremities. Examples include repetitive throat clearing, vocalizations, sniffing, pursing the lips, and excessive blinking. Tics tend to be aggravated by emotional stress. When frequent they may interfere with speech and INTERPERSONAL RELATIONS. Conditions which feature frequent and prominent tics as a primary manifestation of disease are referred to as TIC DISORDERS. (From Adams et al., Principles of Neurology, 6th ed, pp109-10)",
    "arabic_definition": "العَرّة أو النفضة أو التشنج اللاإرادي (الإنجليزية: Tic) هي حركة مفاجئة متكررة وغير ايقاعية ونمطية، أو هي تشكل مجموعة من العضلات المنفصلة. التشنجات اللاإرادية يمكن تكون غير مرئية للمراقب، مثل التوتر الداخلي أو تأزم اصبع القدم. (Tics)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020323.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stroke",
    "term_en": "Stroke",
    "term_ar": "سكتة دماغية",
    "synonyms": [
      "Strokes",
      "Cerebrovascular Accident",
      "Cerebrovascular Accidents",
      "Cerebral Stroke",
      "Cerebral Strokes",
      "Stroke, Cerebral",
      "Strokes, Cerebral",
      "Cerebrovascular Apoplexy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of pathological conditions characterized by sudden, non-convulsive loss of neurological function due to BRAIN ISCHEMIA or INTRACRANIAL HEMORRHAGES. Stroke is classified by the type of tissue NECROSIS, such as the anatomic location, vasculature involved, etiology, age of the affected individual, and hemorrhagic vs. non-hemorrhagic nature. (From Adams et al., Principles of Neurology, 6th ed, pp777-810)",
    "arabic_definition": "السكتة الدماغية أو السكتة أو الحادثة الدماغية الوعائية أو الجلطة الدماغية، هي عند نقص تدفّق الدم وتغذيته إلى أحد أجزاء الدماغ والذي يؤدي إلى موت الخلايا. للسكتة الدماغية نوعان رئيسيان،: السكتة الدماغية الإقفارية، وهي بسبب نقص تدفق الدم، والسكتة الدماغية النزفية، وهي بسبب النزيف الدماغي. (Stroke)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020521.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dystonia",
    "term_en": "Dystonia",
    "term_ar": "خلل التوتر",
    "synonyms": [
      "Muscle Dystonia",
      "Dystonia, Muscle",
      "Dystonia, Limb",
      "Limb Dystonia",
      "Dystonia, Paroxysmal",
      "Paroxysmal Dystonia",
      "Dystonia, Diurnal",
      "Diurnal Dystonia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An attitude or posture due to the co-contraction of agonists and antagonist muscles in one region of the body. It most often affects the large axial muscles of the trunk and limb girdles. Conditions which feature persistent or recurrent episodes of dystonia as a primary manifestation of disease are referred to as DYSTONIC DISORDERS. (Adams et al., Principles of Neurology, 6th ed, p77)",
    "arabic_definition": "خلل التوتر أو ديستونيا (الإنجليزية: Dystonia) الإتيان بحركات التواء بين الجذع والأطراف تشبه الرقص والسبب الرئيسي هنا هو نقص إمداد الطفل بالأكسجين فيما حول الولادة «أثناء أو بعد الولادة مباشرة». مرض ويلسون الشهير بعدم القدرة على تخلص الجسم من النحاس يكون من ضمن أعراضه الديستونيا الراقصة وممكن أن تشمل الأعراض كل عضلات الجسم، مما يؤثر على الكلام والبلع وأحيانًا تصيب طرفًا واحدًا كأن يمد المريض القدم ويمشي على قمم أطراف الأصابع.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004421.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chorea",
    "term_en": "Chorea",
    "term_ar": "رقاص",
    "synonyms": [
      "Choreas",
      "Chorea Syndromes",
      "Chorea Syndrome",
      "Syndrome, Chorea",
      "Syndromes, Chorea",
      "Choreatic Disorders",
      "Choreatic Disorder",
      "Disorder, Choreatic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Involuntary, forcible, rapid, jerky movements that may be subtle or become confluent, markedly altering normal patterns of movement. Hypotonia and pendular reflexes are often associated. Conditions which feature recurrent or persistent episodes of chorea as a primary manifestation of disease are referred to as CHOREATIC DISORDERS. Chorea is also a frequent manifestation of BASAL GANGLIA DISEASES.",
    "arabic_definition": "الرُقاص أو الزَّفَن أو الرَقَص (الإنجليزية: Chorea وأحيانا تكتب choreia) هو اضطراب حركي غير طبيعي لا إرادي. وهو أحد الاضطرابات العصبية التي تسمى خلل الحركة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002819.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scotoma",
    "term_en": "Scotoma",
    "term_ar": "عتمة",
    "synonyms": [
      "Scotomas",
      "Scotoma, Arcuate",
      "Arcuate Scotoma",
      "Arcuate Scotomas",
      "Scotomas, Arcuate",
      "Scotoma, Bjerrum",
      "Bjerrum Scotoma",
      "Bjerrum Scotomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A localized defect in the visual field bordered by an area of normal vision. This occurs with a variety of EYE DISEASES (e.g., RETINAL DISEASES and GLAUCOMA); OPTIC NERVE DISEASES, and other conditions.",
    "arabic_definition": "العَتَمَة (الإنجليزية: Scotoma) (باليونانية: σκότος / سكوتوس، وتعني الظلام) هي منطقة ينخفض فيها مجال الرؤية أو ينعدم كليا محاطة بمنطقة عادية، وتسمى هذه المنطقة بقعة عمياء. كل عيون الثدييات الطبيعية لديها عتمة في مجال رؤيتها، وعادة ما تسمى البقعة العمياء.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012607.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diplopia",
    "term_en": "Diplopia",
    "term_ar": "ازدواج الرؤية",
    "synonyms": [
      "Diplopias",
      "Double Vision",
      "Vision, Double",
      "Polyopsia",
      "Polyopsias",
      "Diplopia, Cortical",
      "Cortical Diplopia",
      "Cortical Diplopias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A visual symptom in which a single object is perceived by the visual cortex as two objects rather than one. Disorders associated with this condition include REFRACTIVE ERRORS; STRABISMUS; OCULOMOTOR NERVE DISEASES; TROCHLEAR NERVE DISEASES; ABDUCENS NERVE DISEASES; and diseases of the BRAIN STEM and OCCIPITAL LOBE.",
    "arabic_definition": "الشَّفَع أو ازدواج الرؤية أو الرؤية المزدوجة (Diplopia) هي رؤية صورتين لشيء واحد بعض أو كل الوقت. قد تكون الصورتان واحدة فوق الأخرى، جنباً إلى جنب، أو مزيج من الاثنين معاً ويعتمد سبب الرؤية المزدوجة لديك على ما إذا كان ضعف رؤيتك قادم من عين واحدة أو كلتا العينين.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004172.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cadasil",
    "term_en": "CADASIL",
    "term_ar": "متلازمة كاداسيل",
    "synonyms": [
      "Cerebral Arteriopathy with Subcortical Infarcts and Leukoencephalopathy",
      "Dementia, Hereditary Multi-Infarct Type",
      "Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy",
      "CADASILM"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A familial, cerebral arteriopathy mapped to chromosome 19q12, and characterized by the presence of granular deposits in small CEREBRAL ARTERIES producing ischemic STROKE; PSEUDOBULBAR PALSY; and multiple subcortical infarcts (CEREBRAL INFARCTION). CADASIL is an acronym for Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy. CADASIL differs from BINSWANGER DISEASE by the presence of MIGRAINE WITH AURA and usually by the lack of history of arterial HYPERTENSION. (From Bradley et al, Neurology in Clinical Practice, 2000, p1146)",
    "arabic_definition": "متلازمة كاداسيل (الإنجليزية: CADASIL syndrome) أو اعتلال الشرايين الدماغية الذاتي السائد مترافق مع احتشاءات تحت قشرية واعتلال بيضاء الدماغ (الإنجليزية: Cerebral Autosomal-Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy) هي أكثر أنواع السكتة الوراثية شيوعا، ويعتقد أن سببها طفرة في المورثة Notch 3 في الصبغي 19. هذه الحالة هي أحد الحالات التي تنتمي لمجموعة الأمراض المصنفة ضمن أمراض حثل المادة البيضاء.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046589.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ageusia",
    "term_en": "Ageusia",
    "term_ar": "فقد حاسة الذوق",
    "synonyms": [
      "Loss of Taste",
      "Taste Loss",
      "Ageusia, Hysterical",
      "Ageusias, Hysterical",
      "Hysterical Ageusia",
      "Hysterical Ageusias",
      "Hypogeusia",
      "Hypogeusias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Complete or severe loss of the subjective sense of taste, frequently accompanied by OLFACTION DISORDERS.",
    "arabic_definition": "فقد حاسة التذوق هو فقدان وظائف التذوق في اللسان، وخاصة عدم القدرة على اكتشاف المذاقات الخمسة الأساسية: الحلاوة، والحموضة، والمرارة، والملوحة، والأومامي (بمعنى «طعم لطيف»). يتم الخلط في بعض الأحيان بين فقد حاسة التذوق وفقد حاسة الشم. (Ageusia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000370.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stupor",
    "term_en": "Stupor",
    "term_ar": "ذهول",
    "synonyms": [
      "Narcosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A state of reduced sensibility and response to stimuli which is distinguished from COMA in that the person can be aroused by vigorous and repeated stimulation. The person is still conscious and can make voluntary movements. It can be induced by CENTRAL NERVOUS SYSTEM AGENTS. The word derives from Latin stupere and is related to stunned, stupid, dazed or LETHARGY.",
    "arabic_definition": "الذهول هو حالة من غياب الوظائف الذهنية الحيوية الادراكية، وانخفاض مستوى الوعي، حيث يكون المرء المصاب غير مستجيب تماما تقريبا، ويستجيب فقط للمحفزات الشديدة مثل الألم. (Stupor)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053608.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mutism",
    "term_en": "Mutism",
    "term_ar": "بكم",
    "synonyms": [
      "Mutisms",
      "Selective Mutism",
      "Mutism, Elective",
      "Elective Mutism",
      "Elective Mutisms",
      "Mutisms, Elective",
      "Mutism, Selective",
      "Mutism, Voluntary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inability to generate oral-verbal expression, despite normal comprehension of speech. This may be associated with BRAIN DISEASES or MENTAL DISORDERS. Organic mutism may be associated with damage to the FRONTAL LOBE; BRAIN STEM; THALAMUS; and CEREBELLUM. Selective mutism is a psychological condition that usually affects children characterized by continuous refusal to speak in social situations by a child who is able and willing to speak to selected persons. Kussmal aphasia refers to mutism in psychosis. (From Fortschr Neurol Psychiatr 1994; 62(9):337-44)",
    "arabic_definition": "البكم هم الأشخاص الذين ليست لهم القدرة على الكلام بسبب عوامل طبيعية (منذ الولادة) أو عوامل بيئية كحادثة أثرت عليهم مما أدى إلى فقدان الصوت أو عدم القدرة على الكلام. (Mutism)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009155.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tetany",
    "term_en": "Tetany",
    "term_ar": "تكزز",
    "synonyms": [
      "Tetanies",
      "Spasmophilia",
      "Spasmophilias",
      "Tetany, Neonatal",
      "Neonatal Tetanies",
      "Neonatal Tetany",
      "Tetanies, Neonatal",
      "Tetanilla"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder characterized by muscle twitches, cramps, and carpopedal spasm, and when severe, laryngospasm and seizures. This condition is associated with unstable depolarization of axonal membranes, primarily in the peripheral nervous system. Tetany usually results from HYPOCALCEMIA or reduced serum levels of MAGNESIUM that may be associated with HYPERVENTILATION; HYPOPARATHYROIDISM; RICKETS; UREMIA; or other conditions. (From Adams et al., Principles of Neurology, 6th ed, p1490)",
    "arabic_definition": "تكزز أو نوبة تكززية (الإنجليزية: Tetany) هي علامة طبية تتكون من انقباض غير طوعي للعضلات والتي قد تكون ناجمة عن اضطرابات تزيد من جهد تكرار خلايا العضلات أو الأعصاب التي يعصب بها. لا يتم تصنيف تشنجات العضلات الناجمة عن مرض الكزاز كتكزز، ولكن التكزز يكون بسبب عدم وجود تثبيط للخلايا العصبية التي تغذي العضلات، وتُعد الانقباضات التكززية (الكزاز الفسيولوجي) مجموعة واسعة من أنواع تقلص العضلات، والتكزز هو واحد فقط منها.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013746.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "syncope",
    "term_en": "Syncope",
    "term_ar": "الإغماء",
    "synonyms": [
      "Syncopes",
      "Fainting",
      "Drop Attack",
      "Attack, Drop",
      "Drop Attacks",
      "Presyncope",
      "Presyncopes",
      "Syncope, Postural"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A transient loss of consciousness and postural tone caused by diminished blood flow to the brain (i.e., BRAIN ISCHEMIA). Presyncope refers to the sensation of lightheadedness and loss of strength that precedes a syncopal event or accompanies an incomplete syncope. (From Adams et al., Principles of Neurology, 6th ed, pp367-9)",
    "arabic_definition": "الإغماء (المعروف أيضًا بالغشي) هو فقدان مفاجئ للوعي وقوة العضلات، يتميز ببداية سريعة، ومدة قصيرة، وتعافي تلقائي. تحدث هذه الحالة نتيجة انخفاض تدفق الدم إلى الدماغ، في الغالب بسبب انخفاض ضغط الدم. (Syncope)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013575.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amnesia",
    "term_en": "Amnesia",
    "term_ar": "فقدان الذاكرة",
    "synonyms": [
      "Amnesias",
      "Amnesia-Memory Loss",
      "Amnesia-Memory Losses",
      "Amnesia, Dissociative",
      "Amnesias, Dissociative",
      "Dissociative Amnesia",
      "Dissociative Amnesias",
      "Amnesia, Global"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pathologic partial or complete loss of the ability to recall past experiences (AMNESIA, RETROGRADE) or to form new memories (AMNESIA, ANTEROGRADE). This condition may be of organic or psychologic origin. Organic forms of amnesia are usually associated with dysfunction of the DIENCEPHALON or HIPPOCAMPUS. (From Adams et al., Principles of Neurology, 6th ed, pp426-7)",
    "arabic_definition": "فقدان الذاكرة أو النّسَاوَة هو عدم تذكر المعلومات والمهارات والخبرات التي مر بها الفرد، والنسيان ظاهرة طبيعية تحدث لجميع البشر ولكنه قد يكون مرضياً عند الإصابة ببعض الأمراض مثل ألزهايمر أو عقب إصابة دماغية أو صدمة انفعالية. (Amnesia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000647.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "catatonia",
    "term_en": "Catatonia",
    "term_ar": "شذوذ الحركة",
    "synonyms": [
      "Catatonias",
      "Catatonia, Malignant",
      "Catatonias, Malignant",
      "Malignant Catatonia",
      "Malignant Catatonias",
      "Lethal Catatonia",
      "Catatonia, Lethal",
      "Catatonias, Lethal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neuropsychiatric disorder characterized by one or more of the following essential features: immobility, mutism, negativism (active or passive refusal to follow commands), mannerisms, stereotypies, posturing, grimacing, excitement, echolalia, echopraxia, muscular rigidity, and stupor; sometimes punctuated by sudden violent outbursts, panic, or hallucinations. This condition may be associated with psychiatric illnesses (e.g., SCHIZOPHRENIA; MOOD DISORDERS) or organic disorders (NEUROLEPTIC MALIGNANT SYNDROME; ENCEPHALITIS, etc.). (From DSM-IV, 4th ed, 1994; APA, Thesaurus of Psychological Index Terms, 1994)",
    "arabic_definition": "شذوذ الحركة أو الجامود أو الخُلاع أو الكاتاتونيا أو الأفانين الشاذة (الإنجليزية: Catatonia) هو متلازمة سلوكية عصبية نفسية معقدة تتميز بحركات غير طبيعية، اللاحركية، سلوكيات غير طبيعية وانسحاب. قد يكون بدء الجامود حاد أو غير ملحوظ والأعراض قد تخف أو تتضاءل أو تتغير خلال النوب.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002389.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemiplegia",
    "term_en": "Hemiplegia",
    "term_ar": "خزل شقي",
    "synonyms": [
      "Hemiplegias",
      "Monoplegia",
      "Monoplegias",
      "Hemiplegia, Crossed",
      "Crossed Hemiplegia",
      "Crossed Hemiplegias",
      "Hemiplegias, Crossed",
      "Hemiplegia, Flaccid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Severe or complete loss of motor function on one side of the body. This condition is usually caused by BRAIN DISEASES that are localized to the cerebral hemisphere opposite to the side of weakness. Less frequently, BRAIN STEM lesions; cervical SPINAL CORD DISEASES; PERIPHERAL NERVOUS SYSTEM DISEASES; and other conditions may manifest as hemiplegia. The term hemiparesis (see PARESIS) refers to mild to moderate weakness involving one side of the body.",
    "arabic_definition": "خزل شقي (بالانجليزية: Hemiparesis)، هو شلل جزئي من جانب واحد، والذي يشمل ضعف كامل على الجانب الأيسر، أو الأيمن من الجسم. ويعتبر الشلل النصفي هو أشد أشكاله، وهو شلل كامل في نصف الجسم. (Hemiplegia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006429.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paralysis",
    "term_en": "Paralysis",
    "term_ar": "شلل",
    "synonyms": [
      "Paralyses",
      "Palsy",
      "Palsies",
      "Plegia",
      "Plegias",
      "Todd Paralysis",
      "Paralysis, Todd",
      "Todd's Paralysis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A general term most often used to describe severe or complete loss of muscle strength due to motor system disease from the level of the cerebral cortex to the muscle fiber. This term may also occasionally refer to a loss of sensory function. (From Adams et al., Principles of Neurology, 6th ed, p45)",
    "arabic_definition": "الشلل (الإنجليزية: Paralysis) هو الفقدان الكلي لوظيفة عضلة واحدة أو أكثر. من الممكن أن يصاحِب الشلل فقدان الإحساس في المنطقة المصابة بالإضافة إلى فقدان الحركة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010243.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "seizures",
    "term_en": "Seizures",
    "term_ar": "نوبة",
    "synonyms": [
      "Seizure",
      "Jacksonian Seizure",
      "Seizure, Jacksonian",
      "Single Seizure",
      "Seizure, Single",
      "Single Seizures",
      "Atonic Absence Seizures",
      "Atonic Absence Seizure"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Clinical or subclinical disturbances of cortical function due to a sudden, abnormal, excessive, and disorganized discharge of brain cells. Clinical manifestations include abnormal motor, sensory and psychic phenomena. Recurrent seizures are usually referred to as EPILEPSY or seizure disorder.",
    "arabic_definition": "نوبة الصرع (الإنجليزية: Epileptic seizure أو fit)، هي فترة من الأعراض الناجمة عن النشاط العصبوني المفرط أو التزامني الشاذ في الدماغ. تتراوح التأثيرات الظاهرية من الحركات الاهتزازية غير الإرادية الشاملة لمعظم الجسم مع فقدان الوعي (نوبة توترية رمعية)، مرورًا بالحركات الاهتزازية المنحصرة في جزء واحد من الجسم مع مستويات مختلفة من الوعي (نوبة بؤرية) ووصولًا إلى الفقدان اللحظي الدقيق للوعي (نوبة صرعية مصحوبة بغيبة). (Seizures)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012640.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stuttering",
    "term_en": "Stuttering",
    "term_ar": "تأتأة",
    "synonyms": [
      "Stuttering, Acquired",
      "Acquired Stuttering",
      "Stammering",
      "Stuttering, Childhood",
      "Childhood Stuttering",
      "Stuttering, Developmental",
      "Developmental Stuttering",
      "Stuttering, Familial Persistent 1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disturbance in the normal fluency and time patterning of speech that is inappropriate for the individual's age. This disturbance is characterized by frequent repetitions or prolongations of sounds or syllables. Various other types of speech dysfluencies may also be involved including interjections, broken words, audible or silent blocking, circumlocutions, words produced with an excess of physical tension, and monosyllabic whole word repetitions. Stuttering may occur as a developmental condition in childhood or as an acquired disorder which may be associated with BRAIN INFARCTIONS and other BRAIN DISEASES. (From DSM-IV, 1994)",
    "arabic_definition": "التَأْتَأَة أو التلعثم نوع من الاضطراب في الكلام عندما يتعطل الاسترسال في الحديث بسبب التكرار اللاإرادي وإطالة الأصوات والمقاطع والكلمات أو العبارات بالإضافة إلى التوقفات الصامتة اللا إرادية أثناء الكلام، أو العوائق التي لا يستطيع فيها الشخص الذي يتلعثم أن يصدر أي أصوات. وغالباً ما يرتبط مصطلح التأتأة أو التلعثم بالتكرار الصوتي اللاإرادي، كما يشمل أيضًا التردد غير الطبيعي أو التوقف المؤقت قبل البدء في الكلام والذي يشير إليه الأشخاص الذين يتلعثمون ككتل وإطالة بعض الأصوات وعادة ما تكون حروف العلة أو شبه حروف العلة ووفقًا للعالم واتكنز وآخرون فإن التأتأة هي عبارة عن اضطراب في اختيار واستهلال الكلام وتنفيذ التسلسل الحركي اللازم لصياغة الكلام بطلاقة والمشكلة الأساسية. (Stuttering)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013342.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "illusions",
    "term_en": "Illusions",
    "term_ar": "وهم",
    "synonyms": [
      "Illusion",
      "Autokinetic Illusions",
      "Autokinetic Illusion",
      "Illusion, Autokinetic",
      "Illusions, Autokinetic",
      "Autokinetic Effect",
      "Effect, Autokinetic",
      "Autokinetic Effects"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The misinterpretation of a real external, sensory experience.",
    "arabic_definition": "الوهم هو تشوُّه يحدث للحواس، ويَكشِف كيف يُنظم الدماغ ويُفسِّر الإثارة الحسية. وعلى الرغم من أن الأوهام تُشوه الحقيقة، يتشارك فيها عادةً معظم الناس. (Illusions)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007088.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "causalgia",
    "term_en": "Causalgia",
    "term_ar": "متلازمة الألم الناحي المركب",
    "synonyms": [
      "Causalgia Syndrome",
      "Causalgia Syndromes",
      "Syndrome, Causalgia",
      "Syndromes, Causalgia",
      "Complex Regional Pain Syndrome Type II",
      "CRPS Type II",
      "Deafferentation Pain",
      "Pain, Deafferentation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A complex regional pain syndrome characterized by burning pain and marked sensitivity to touch (HYPERESTHESIA) in the distribution of an injured peripheral nerve. Autonomic dysfunction in the form of sudomotor (i.e., sympathetic innervation to sweat glands), vasomotor, and trophic skin changes may also occur. (Adams et al., Principles of Neurology, 6th ed, p1359)",
    "arabic_definition": "متلازمة الألم الناحي المركب (الإنجليزية: Complex Regional Pain Syndrome) وَيُسمى أيضاً بالألم الناحي المُعقد أو تناذر سوديك، وَهوَ مرض جهازي مزمن غير مألوف، يتسبب بآلام شديدة غالبا ما تبدأ في الذراعين والقدمين واليدين وفي كثيرمن الاحيان من الممكن ان تتفاقم الحالة مع مرور الوقت فينتشرالالم إلى باقي انحاء الجسم، يتميز بظهور تورمات، وتغيرات في الجلد. ومن المتوقع أن تتفاقم الحالة مع مرور الوقت. (Causalgia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002422.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "esotropia",
    "term_en": "Esotropia",
    "term_ar": "حول داخلي",
    "synonyms": [
      "Esotropias",
      "Cross-Eye",
      "Cross-Eyes",
      "Convergent Strabismus",
      "Strabismus, Convergent",
      "Strabismus, Internal",
      "Internal Strabismus",
      "Monocular Esotropia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of ocular misalignment characterized by an excessive convergence of the visual axes, resulting in a cross-eye appearance. An example of this condition occurs when paralysis of the lateral rectus muscle causes an abnormal inward deviation of one eye on attempted gaze.",
    "arabic_definition": "الحول الداخلي أو الحول الإنسي هو شكل من أشكال حول العين أو «الانحراف»، والذي فيه إحدى أو كلتا العينين تتحول إلى الداخل. ويمكن لهذه الحالة أن تكون موجودة باستمرار أو تحدث بشكل متقطع، وأن تعطي للفرد المتضرر مظهر «العينين المتقاطعتين». (Esotropia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004948.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "papilledema",
    "term_en": "Papilledema",
    "term_ar": "وذمة حليمة العصب البصري",
    "synonyms": [
      "Papillitis",
      "Optic Nerve Papillitis",
      "Papillitis, Optic Nerve",
      "Edema of the Optic Disc",
      "Choked Disk",
      "Choked Disks",
      "Disk, Choked",
      "Edema of the Optic Disk"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Swelling of the OPTIC DISK, usually in association with increased intracranial pressure, characterized by hyperemia, blurring of the disk margins, microhemorrhages, blind spot enlargement, and engorgement of retinal veins. Chronic papilledema may cause OPTIC ATROPHY and visual loss. (Miller et al., Clinical Neuro-Ophthalmology, 4th ed, p175)",
    "arabic_definition": "وذمة حليمة العصب البصري (الإنجليزية: Papilledema) هو انتفاخ في القرص البصري سببه زيادة في الضغط داخل القحف. يحدث الانتفاخ غالباً في كلا العينين، وقد يستغرق ظهوره ساعات أو أسابيع، أما الانتفاخ في قرص بصري واحد - عين واحدة - فهو نادر الحدوث.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010211.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysgeusia",
    "term_en": "Dysgeusia",
    "term_ar": "خلل الذوق",
    "synonyms": [
      "Dysgeusias",
      "Taste, Distorted",
      "Distorted Taste",
      "Taste, Altered",
      "Altered Taste",
      "Parageusia",
      "Parageusias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by alterations of the sense of taste which may range from mild to severe, including gross distortions of taste quality.",
    "arabic_definition": "خلل الذوق (الإنجليزية: Dysgeusia)، هو خَلل في شعور الذوق. غالبًا ما يرتبط أيضًا بالعمر، وهو النقص الكامل في التذوق، ونقص التذوق هو انخفاض في حساسية الذوق.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004408.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meningocele",
    "term_en": "Meningocele",
    "term_ar": "تشقق العمود الفقري",
    "synonyms": [
      "Meningoceles",
      "Herniation of Meninges",
      "Meninges Herniation",
      "Meninges Herniations",
      "Meningeal Herniation",
      "Herniation, Meningeal",
      "Herniations, Meningeal",
      "Meningeal Herniations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital or acquired protrusion of the meninges, unaccompanied by neural tissue, through a bony defect in the skull or vertebral column.",
    "arabic_definition": "تشقق العمود الفقري أو السِّنْسِنَة المشقوقة أو الصُّلْبُ الأشرم أو الصُّلْبُ المفلوح أو الصُّلْبُ المشقوق (باللغة اللاتينية: \"Split spine\" الشوك المشقوق) وهو عبارة عن عيب تطور خَلقِي ناجم عن انغلاق غير كامل للأنبوب العصبي لدى الجنين. حيث تبقى بعض الفقرات غير ملتحمة ومفتوحة. (Meningocele)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008588.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anencephaly",
    "term_en": "Anencephaly",
    "term_ar": "انعدام الدماغ",
    "synonyms": [
      "Congenital Absence of Brain",
      "Brain Congenital Absence",
      "Absence of Brain, Congenital",
      "Anencephalia",
      "Anencephalias",
      "Anencephalus",
      "Aprosencephaly",
      "Aprosencephalies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malformation of the nervous system caused by failure of the anterior neuropore to close. Infants are born with intact spinal cords, cerebellums, and brainstems, but lack formation of neural structures above this level. The skull is only partially formed but the eyes are usually normal. This condition may be associated with folate deficiency. Affected infants are only capable of primitive (brain stem) reflexes and usually do not survive for more than two weeks. (From Menkes, Textbook of Child Neurology, 5th ed, p247)",
    "arabic_definition": "انعدام الدماغ هو عدم وجود جزء كبير من الدماغ أو الجمجمة أو فروة الرأس (الجلد المغطي للجمجمة) التي تحدث أثناء التطور الجنيني. وهو مرض رأسي ناتج عن عيب في تكوين الأنبوب العصبي الذي تحدث عند عدم إغلاق النهاية الرأسية للأنبوب العصبي. (Anencephaly)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000757.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kernicterus",
    "term_en": "Kernicterus",
    "term_ar": "يرقان نووي",
    "synonyms": [
      "Hyperbilirubinemic Encephalopathy",
      "Encephalopathies, Hyperbilirubinemic",
      "Hyperbilirubinemic Encephalopathies",
      "Encephalopathy, Bilirubin",
      "Encephalopathy, Hyperbilirubinemic",
      "Bilirubin Encephalopathy",
      "Bilirubin Encephalopathies",
      "Encephalopathies, Bilirubin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A term used pathologically to describe BILIRUBIN staining of the BASAL GANGLIA; BRAIN STEM; and CEREBELLUM and clinically to describe a syndrome associated with HYPERBILIRUBINEMIA. Clinical features include athetosis, MUSCLE SPASTICITY or hypotonia, impaired vertical gaze, and DEAFNESS. Nonconjugated bilirubin enters the brain and acts as a neurotoxin, often in association with conditions that impair the BLOOD-BRAIN BARRIER (e.g., SEPSIS). This condition occurs primarily in neonates (INFANT, NEWBORN), but may rarely occur in adults. (Menkes, Textbook of Child Neurology, 5th ed, p613)",
    "arabic_definition": "اليرقان النووي (الإنجليزية: Kernicterus) هو تلف دماغي ناجم عن البيليروبين. البيليروبين هو عبارة عن مادة شديدة السمية للأعصاب عندما ترتفع نسبتها في الدم، وهذه الحالة تعرف بفرط بيليروبين الدم.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007647.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sciatica",
    "term_en": "Sciatica",
    "term_ar": "عرق النسا",
    "synonyms": [
      "Neuralgia, Sciatic",
      "Neuralgias, Sciatic",
      "Sciatic Neuralgias",
      "Sciatic Neuralgia",
      "Sciatica, Bilateral",
      "Bilateral Sciatica",
      "Bilateral Sciaticas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by pain radiating from the back into the buttock and posterior/lateral aspects of the leg. Sciatica may be a manifestation of SCIATIC NEUROPATHY; RADICULOPATHY (involving the SPINAL NERVE ROOTS; L4, L5, S1, or S2, often associated with INTERVERTEBRAL DISK DISPLACEMENT); or lesions of the CAUDA EQUINA.",
    "arabic_definition": "عرق النسا (اللاتينية: Sciatica) هو ألم يمتد من أسفل الظهر إلى أسفل الساق. وقد يمتد هذا الألم على طول الظهر أو الجزء الخارجي أو الأمامي من الساق.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012585.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dyssomnias",
    "term_en": "Dyssomnias",
    "term_ar": "عسر النوم",
    "synonyms": [
      "Dyssomnia",
      "Sleep Disorders, Extrinsic",
      "Extrinsic Sleep Disorder",
      "Extrinsic Sleep Disorders",
      "Sleep Disorder, Extrinsic",
      "Adjustment Sleep Disorder",
      "Adjustment Sleep Disorders",
      "Sleep Disorders, Adjustment"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A broad category of sleep disorders characterized by either hypersomnolence or insomnia. The three major subcategories include intrinsic (i.e., arising from within the body) (SLEEP DISORDERS, INTRINSIC), extrinsic (secondary to environmental conditions or various pathologic conditions), and disturbances of circadian rhythm. (From Thorpy, Sleep Disorders Medicine, 1994, p187)",
    "arabic_definition": "عسر النوم (الإنجليزية: Dyssomnia) هو تصنيف واسع لاضطرابات النوم التي تشمل صعوبة النوم، والبقاء نائماً، أو النعاس المفرط. عسر النوم هي اضطرابات رئيسية في الدخول في النوم أو الحفاظ عليه أو النعاس الزائد، وتتميز بالاضطراب في كمية النوم أو جودته أو توقيته. (Dyssomnias)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020920.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paresthesia",
    "term_en": "Paresthesia",
    "term_ar": "تشوش الحس",
    "synonyms": [
      "Paresthesias",
      "Formication",
      "Formications",
      "Paresthesia, Distal",
      "Distal Paresthesia",
      "Distal Paresthesias",
      "Paresthesias, Distal",
      "Paresthesia, Painful"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Subjective cutaneous sensations (e.g., cold, warmth, tingling, pressure, etc.) that are experienced spontaneously in the absence of stimulation.",
    "arabic_definition": "تشوش الحس أو المَذَل أو الخدران (الإنجليزية: Paresthesia) إحساس غير طبيعي بالجلد (وخز، نخز، قشعرة، حرق، خدر) دون سبب فيسولوجي واضح. قد يكون تشوش الحس عابرا أو مزمنا، وقد يكون له أي من العشرات من الأسباب الكامنة المحتملة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010292.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paraplegia",
    "term_en": "Paraplegia",
    "term_ar": "شلل سفلي",
    "synonyms": [
      "Paraplegias",
      "Paralysis, Lower Extremities",
      "Paralysis, Legs",
      "Paralysis, Lower Limbs",
      "Paraplegia, Spastic",
      "Paraplegias, Spastic",
      "Spastic Paraplegias",
      "Spastic Paraplegia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Severe or complete loss of motor function in the lower extremities and lower portions of the trunk. This condition is most often associated with SPINAL CORD DISEASES, although BRAIN DISEASES; PERIPHERAL NERVOUS SYSTEM DISEASES; NEUROMUSCULAR DISEASES; and MUSCULAR DISEASES may also cause bilateral leg weakness.",
    "arabic_definition": "شَلُلٌ سُفْلِيّ هو إصابة الأطراف السفلية بضعف في الوظيفة الحركية أو الحسية. وتُشتق هذه الكلمة من الكلمة اليونانية الأيونية: παραπληγίη «المضروب نصفه». (Paraplegia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010264.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myotonia",
    "term_en": "Myotonia",
    "term_ar": "تأتر العضل",
    "synonyms": [
      "Myotonias",
      "Myotonic Phenomenon",
      "Myotonic Phenomenons",
      "Phenomenon, Myotonic",
      "Phenomenons, Myotonic",
      "Percussion Myotonia",
      "Myotonia, Percussion",
      "Myotonias, Percussion"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Prolonged failure of muscle relaxation after contraction. This may occur after voluntary contractions, muscle percussion, or electrical stimulation of the muscle. Myotonia is a characteristic feature of MYOTONIC DISORDERS.",
    "arabic_definition": "التَأتُّر العَضَلي (الإنجليزية: Myotonia) هو عرض لحفنة صغيرة من الاضطرابات العصبية والعضلية التي تتميز بتأخر الاسترخاء (الانقباض المطول) للعضلات الهيكلية بعد الانقباض الإرادي أو التحفيز الكهربائي. التوتر العضلي هو العَرَض المحدد للعديد من اعتلال القنوات، مثل تأتر العضل الخلقي، وداء التشنج العضلي التوتري الخلقي، وحثل التأتر العضلي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009222.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "strabismus",
    "term_en": "Strabismus",
    "term_ar": "حول",
    "synonyms": [
      "Phorias",
      "Phoria",
      "Squint",
      "Strabismus, Comitant",
      "Comitant Strabismus",
      "Concomitant Strabismus",
      "Strabismus, Concomitant",
      "Strabismus, Noncomitant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Misalignment of the visual axes of the eyes. In comitant strabismus the degree of ocular misalignment does not vary with the direction of gaze. In noncomitant strabismus the degree of misalignment varies depending on direction of gaze or which eye is fixating on the target. (Miller, Walsh &amp; Hoyt's Clinical Neuro-Ophthalmology, 4th ed, p641)",
    "arabic_definition": "الحَوَل (الإنجليزية: Squint واسمه العلمي Strabismus) هو عيب بصري يجعل العينين بحالة غير متوازنة، بحيث تتجه كل عين لاتجاه مختلف، فيمكن أن تركز إحدى العينين لاتجاه الأمام، بينما تنحرف العين الأخرى للداخل أو للخارج أو للأعلى أو للأسفل. ويمكن أن يلاحَظ هذا الاختلال في وضع العينين بشكل واضح، أو يظهر أحيانا ويختفي أحيانا أخرى.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013285.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amblyopia",
    "term_en": "Amblyopia",
    "term_ar": "غمش",
    "synonyms": [
      "Amblyopias",
      "Anisometropic Amblyopia",
      "Amblyopia, Anisometropic",
      "Amblyopias, Anisometropic",
      "Anisometropic Amblyopias",
      "Amblyopia, Developmental",
      "Amblyopias, Developmental",
      "Developmental Amblyopia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nonspecific term referring to impaired vision. Major subcategories include stimulus deprivation-induced amblyopia and toxic amblyopia. Stimulus deprivation-induced amblyopia is a developmental disorder of the visual cortex. A discrepancy between visual information received by the visual cortex from each eye results in abnormal cortical development. STRABISMUS and REFRACTIVE ERRORS may cause this condition. Toxic amblyopia is a disorder of the OPTIC NERVE which is associated with ALCOHOLISM, tobacco SMOKING, and other toxins and as an adverse effect of the use of some medications.",
    "arabic_definition": "الغَمَش أو الكَمَش أو العين الكسولة هو ضعف في الرؤية المركزية للعين، بدون وجود سبب عضوي في العين، أو بشكل لا يتناسب مع الخلل العضوي في العين إن وجد. ولا يصيب الرؤية الطرفية عادة، كما لا يمكن إصلاحه بالعدسات. (Amblyopia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000550.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "catalepsy",
    "term_en": "Catalepsy",
    "term_ar": "جمدة",
    "synonyms": [
      "Catalepsies",
      "Anochlesia",
      "Anochlesias",
      "Cerea Flexibilitas",
      "Flexibilitas, Cerea",
      "Flexibility, Waxy",
      "Flexibilities, Waxy",
      "Waxy Flexibilities"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by inactivity, decreased responsiveness to stimuli, and a tendency to maintain an immobile posture. The limbs tend to remain in whatever position they are placed (waxy flexibility). Catalepsy may be associated with PSYCHOTIC DISORDERS (e.g., SCHIZOPHRENIA, CATATONIC), nervous system drug toxicity, and other conditions.",
    "arabic_definition": "الجُمدة أو الجمود أو الإغماء التخشبيّ أو الصُّمُول أو التَّخشُّب (الإنجليزية: Catalepsy) هي حالة يفقد معها الإنسان، بصورة مؤقتة القدرة على الحركة الإرادية، ولا يُعدُّ الشخص الذي يعاني من التَّخشُّب مشلولاً إلا أنه ببساطة يفتقر إلى إرادة الحركة. ويمكن وضع اليدين والساقين للشخص المجمود في أوضاع غير عادية، ويمكن الإبقاء على مثل هذا الوضع لعدة دقائق، وفي بعض الأحيان تكون عضلات الوجه عاجزة عن الحركة أيضًا.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002375.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myoclonus",
    "term_en": "Myoclonus",
    "term_ar": "رمع عضلي",
    "synonyms": [
      "Myoclonic Jerk",
      "Jerk, Myoclonic",
      "Jerks, Myoclonic",
      "Myoclonic Jerks",
      "Myoclonic Jerking",
      "Jerking, Myoclonic",
      "Myoclonus, Action",
      "Action Myoclonus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Involuntary shock-like contractions, irregular in rhythm and amplitude, followed by relaxation, of a muscle or a group of muscles. This condition may be a feature of some CENTRAL NERVOUS SYSTEM DISEASES; (e.g., EPILEPSY, MYOCLONIC). Nocturnal myoclonus is the principal feature of the NOCTURNAL MYOCLONUS SYNDROME. (From Adams et al., Principles of Neurology, 6th ed, pp102-3).",
    "arabic_definition": "الرَّمَع العضلي أو التشنج الارتجاجي العضلي أو الارتجاج العضلي أو التقلص الارتجافي العضلي هو فترة وجيزة من الارتعاش غير الطوعي للعضلة أو مجموعة من العضلات. وهو فعلياً عبارة عن عرض طبي، وليس تشخيصاً لمرضٍ معين. (Myoclonus)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009207.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "athetosis",
    "term_en": "Athetosis",
    "term_ar": "كنع",
    "synonyms": [
      "Athetoses",
      "Athetoid Movements",
      "Athetoid Movement",
      "Movement, Athetoid",
      "Movements, Athetoid",
      "Hammond Disease",
      "Disease, Hammond",
      "Diseases, Hammond"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dyskinesia characterized by an inability to maintain the fingers, toes, tongue, or other body parts in a stable position, resulting in continuous slow, sinusoidal, and flowing involuntary movements. This condition is frequently accompanied by CHOREA, where it is referred to as choreoathetosis. Athetosis may occur as a manifestation of BASAL GANGLIA DISEASES or DRUG TOXICITY. (From Adams et al., Principles of Neurology, 6th ed, p76)",
    "arabic_definition": "كنع (الإنجليزية: Athetosis) هو مرض خلقي. نتيجة خلل في الدماغ .يتميز الطفل المصاب بقيامه بحركات ملتوية بطيئة غير إرادية، تصيب أساساً القطع السفلية للأطراف العليا، تحدث غالباً على شكل الشلل الدماغي الطفلي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001264.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "echolalia",
    "term_en": "Echolalia",
    "term_ar": "لفظ صدوي",
    "synonyms": [
      "Echo Reaction",
      "Reaction, Echo",
      "Reactions, Echo",
      "Echo Speech",
      "Speech, Echo",
      "Echophrasia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Involuntary (parrot-like), meaningless repetition of a recently heard word, phrase, or song. This condition may be associated with transcortical APHASIA; SCHIZOPHRENIA; or other disorders. (From Adams et al., Principles of Neurology, 6th ed, p485)",
    "arabic_definition": "اللفظ الصدوي أو تصدية الألفاظ أو المصاداة ويعرف أيضا بصداء لفظي أو تصدية الألفاظ، هو تكرار ذاتي للكلمات التي أدلى بها شخص أخر (و تسمى الكلمات التي أدلى بها نفس الشخص بتكرار مقاطع الكلام).وهي إحدى ظواهر صدى الصوت التي ترتبط ارتباطا وثيقا بصدى تنسيق الحركات والتكرار الذاتي للحركات التي أدلى بها شخص أخر؛ حيث يعتبر كلاهما (مجموعات فرعية من السلوك التقليدي) التي تحدد الأصوات أو التصرفات «دون وعي صريح».قد يكون للفظ الصدوي ردة فعل فورية لسبب أو تأخير. (Echolalia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004454.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysarthria",
    "term_en": "Dysarthria",
    "term_ar": "رتة",
    "synonyms": [
      "Dysarthrias",
      "Dysarthosis",
      "Dysarthoses",
      "Dysarthria, Flaccid",
      "Dysarthrias, Flaccid",
      "Flaccid Dysarthria",
      "Flaccid Dysarthrias",
      "Dysarthria, Guttural"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorders of speech articulation caused by imperfect coordination of pharynx, larynx, tongue, or face muscles. This may result from CRANIAL NERVE DISEASES; NEUROMUSCULAR DISEASES; CEREBELLAR DISEASES; BASAL GANGLIA DISEASES; BRAIN STEM diseases; or diseases of the corticobulbar tracts (see PYRAMIDAL TRACTS). The cortical language centers are intact in this condition. (From Adams et al., Principles of Neurology, 6th ed, p489)",
    "arabic_definition": "الرُّتَّة أو عُسْر التلفظ أو اللُّكْنَة أو عسر الكلام (الإنجليزية: Dysarthria) هو اضطراب كلام حركي ناتج عن إصابات عصبية في المكونات الحركية في جهاز الكلام الحركي ويتميز بصعوبة تلفظ الصويتات. هذه الحالة تصيب العضلات التي تساعد في تكوين الكلام، مما يصعب عملية تلفظ الكلمات.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004401.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meningism",
    "term_en": "Meningism",
    "term_ar": "حالة سحائية",
    "synonyms": [
      "Meningisms",
      "Dupre Syndrome",
      "Syndrome, Dupre",
      "Dupre's Syndrome",
      "Dupres Syndrome",
      "Syndrome, Dupre's",
      "Meningismus",
      "Meningitis-Like Reaction"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by neck stiffness, headache, and other symptoms suggestive of meningeal irritation, but without actual inflammation of the meninges (MENINGITIS). Spinal fluid pressure may be elevated but spinal fluid is normal. (DeJong, The Neurologic Examination, 4th ed, p673)",
    "arabic_definition": "الحالة السحائية أو ببساطة السحائية (الإنجليزية: Meningism) هي ثلاثية من الصمل القفوي (أو تيبس الرقبة) ورهاب الضوء وصداع. تتصف العلامة بأنها حالة تهيج السحايا كما يحدث في التهاب السحايا ونزف تحت العنكبوتية وأمراض أخرى مختلفة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008580.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuralgia",
    "term_en": "Neuralgia",
    "term_ar": "ألم عصبي",
    "synonyms": [
      "Neuralgias",
      "Neurodynia",
      "Neurodynias",
      "Neuropathic Pain",
      "Neuropathic Pains",
      "Pain, Neuropathic",
      "Pains, Neuropathic",
      "Nerve Pain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Intense or aching pain that occurs along the course or distribution of a peripheral or cranial nerve.",
    "arabic_definition": "الألم العصبي هو ألم ناتج عن إصابة أحد أعضاء الجهاز العصبي، بما في ذلك الدماغ، الحبل الشوكي والأعصاب المحيطية. قد يكون هذا الألم إما قصير المدى حيث يبقى لفترة قصيرة، إلا أنه غالبا ما يكون طويل المدى ويسبب آلاما مزمنة. (Neuralgia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009437.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "confusion",
    "term_en": "Confusion",
    "term_ar": "تشوش ذهني",
    "synonyms": [
      "Confusional State",
      "Confusional States",
      "State, Confusional",
      "States, Confusional",
      "Bewilderment",
      "Confusion, Post-Ictal",
      "Post-Ictal Confusion",
      "Confusion, Reactive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mental state characterized by bewilderment, emotional disturbance, lack of clear thinking, and perceptual disorientation.",
    "arabic_definition": "التشوش الذهني(1) هو مصطلحٌ طبي يُعبر عن حالةٍ يكون فيها الفرد مشوشًا أو غير صافٍ ذهنيًا. يُستعمل مُصطلح التشوش الذهني الحاد عادةً بالتناوب مع مُصطلح الهذيان في منشورات التصنيف الدولي للأمراض ونظام فهرسة المواضيع الطبية لوصف المرضية. (Confusion)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003221.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blindness",
    "term_en": "Blindness",
    "term_ar": "إعاقة بصرية",
    "synonyms": [
      "Amaurosis",
      "Amauroses",
      "Blindness, Legal",
      "Legal Blindness",
      "Blindness, Monocular",
      "Monocular Blindness",
      "Blindness, Acquired",
      "Acquired Blindness"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inability to see or the loss or absence of perception of visual stimuli. This condition may be the result of EYE DISEASES; OPTIC NERVE DISEASES; OPTIC CHIASM diseases; or BRAIN DISEASES affecting the VISUAL PATHWAYS or OCCIPITAL LOBE.",
    "arabic_definition": "الإعاقة البصرية أو ضعف البصر أو فقد البصر هو نقص القدرة على الرؤية يسبب مشاكل غير قابلة للحل بالطرق الطبيعية مثل النظارات. ويشمل أيضا من لديهم قدرة منخفضة على الرؤية بسبب عدم قدرتهم على الوصول إلى نظارة أو عدسة لاصقة. (Blindness)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001766.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypokinesia",
    "term_en": "Hypokinesia",
    "term_ar": "نقص الحراك",
    "synonyms": [
      "Hypodynamia",
      "Hypokinesia, Antiorthostatic",
      "Antiorthostatic Hypokinesia",
      "Antiorthostatic Hypokinesias",
      "Hypokinesias, Antiorthostatic",
      "Bradykinesia",
      "Bradykinesias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Slow or diminished movement of body musculature. It may be associated with BASAL GANGLIA DISEASES; MENTAL DISORDERS; prolonged inactivity due to illness; and other conditions.",
    "arabic_definition": "نقص الحراك (الإنجليزية: Hypokinesia) هو مصطلح طبي يشير إلى النقص في حركة الجسم. وهو صنف واحد من اثنين من اضطرابات الحركة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018476.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cataplexy",
    "term_en": "Cataplexy",
    "term_ar": "مرض الجمدة",
    "synonyms": [
      "Henneberg Syndrome",
      "Syndrome, Henneberg",
      "Tonelessness Syndrome",
      "Syndromes, Tonelessness",
      "Syndrome, Tonelessness",
      "Tonelessness Syndromes",
      "Cataleptic Attacks",
      "Attack, Cataleptic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by transient weakness or paralysis of somatic musculature triggered by an emotional stimulus or physical exertion. Cataplexy is frequently associated with NARCOLEPSY. During a cataplectic attack, there is a marked reduction in muscle tone similar to the normal physiologic hypotonia that accompanies rapid eye movement sleep (SLEEP, REM). (From Adams et al., Principles of Neurology, 6th ed, p396)",
    "arabic_definition": "مرض الجمدة أو نوبة خمود (الإنجليزية: Cataplexy) من الأمراض النادرة في العالم، حيث يسبب ضعف العضلات مصحوبا بالوعي الكامل في حالات الانفعال الشديد، مثل الضحك، أو البكاء، أو الخوف. يصيب مرض الجمدة ما يقرب من 70٪ من الناس المصابين بالنوم القهري، وينجم عن التدمير المناعي الذاتي للخلايا العصبية التي تُنتِج هيبوكريتين (ويسمى أيضا أوركسين)، الذي ينظم الإثارة واليقظة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002385.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuritis",
    "term_en": "Neuritis",
    "term_ar": "التهاب العصب",
    "synonyms": [
      "Neuritides",
      "Neuritis, Peripheral",
      "Neuritides, Peripheral",
      "Peripheral Neuritides",
      "Peripheral Neuritis",
      "Polyneuritis",
      "Polyneuritides",
      "Neuritis, Sensory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A general term indicating inflammation of a peripheral or cranial nerve. Clinical manifestation may include PAIN; PARESTHESIAS; PARESIS; or HYPESTHESIA.",
    "arabic_definition": "التهاب العصب هو التهاب في العصب أو التهاب عام في الجهاز العصبي المحيطي. يسبب الالتهاب وما يرافقه من إزالة الميالين في كثير من الأحيان ضعفًا في نقل الإشارات العصبية، وشذوذًا في وظيفة الأعصاب. (Neuritis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009443.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anisocoria",
    "term_en": "Anisocoria",
    "term_ar": "تفاوت الحدقتين",
    "synonyms": [
      "Pupil Diameter Unequal",
      "Pupillary Size Inequality",
      "Inequality, Pupillary Size",
      "Anisocoria, Physiologic",
      "Physiologic Anisocoria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Unequal pupil size, which may represent a benign physiologic variant or a manifestation of disease. Pathologic anisocoria reflects an abnormality in the musculature of the iris (IRIS DISEASES) or in the parasympathetic or sympathetic pathways that innervate the pupil. Physiologic anisocoria refers to an asymmetry of pupil diameter, usually less than 2mm, that is not associated with disease.",
    "arabic_definition": "'تفاوت الحدقتين (Anisocoria)' تفاوت الحدقتين هو حالة تتسم بحجم غير متكافئ لـ الحدقتين.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015875.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sarcopenia",
    "term_en": "Sarcopenia",
    "term_ar": "ضمور اللحم",
    "synonyms": [
      "Sarcopenias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Progressive decline in muscle mass due to aging which results in decreased functional capacity of muscles.",
    "arabic_definition": "ضمور اللحم (ساركوبينيا sarcopenia؛ كلمة يونانية تعني \"الفقر من اللحم\") هو في الواقع خسارة تنكسية في كتلة العضلات الهيكلية وكفاءتها وقوتها نتيجة التقدم بالعمر أو قلة الحركة (خسارة 0.5-1% من كتلة العضلات الهيكلية سنويّاً عند من هم أكبر من 50 عامًا)، وهو مرض قد يُعرَّف بأنه يشمل أي حالة مرضية أو غير طبيعية تُصيب أنسجة العضلات، خاصة العضلات الهيكلية، والتي يكون فيها ضعف العضلات هو الشكوى الأولية، نتيجة لعدم قدرة العضلات المصابة على أداء وظائفها على أكمل وجه. إذن، فإن مرض ضعف العضلات أو ضمور اللحم هو مرض يصيب ألياف العضلة، ما يؤدى إلى عدم قدرتها على القيام بوظيفتها لعدة أسباب، ما ينتج عنه ضعف في العضلة بشكل عام.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055948.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myositis",
    "term_en": "Myositis",
    "term_ar": "التهاب العضل",
    "synonyms": [
      "Myositides",
      "Inflammatory Muscle Diseases",
      "Inflammatory Muscle Disease",
      "Muscle Disease, Inflammatory",
      "Inflammatory Myopathy",
      "Inflammatory Myopathies",
      "Myopathies, Inflammatory",
      "Muscle Diseases, Inflammatory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of a muscle or muscle tissue.",
    "arabic_definition": "التهاب العضل (الإنجليزية: Myositis) هو مصطلح عام لالتهاب العضلات. الكثير من هذه الحالات تعتبر ناجمة عن المناعة الذاتية وليس كنتيجة مباشرة للإصابة (على الرغم من أن المناعة الذاتية يمكن تفعيلها بسبب العدوى.).",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009220.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exotropia",
    "term_en": "Exotropia",
    "term_ar": "حول وحشي",
    "synonyms": [
      "Divergent Strabismus",
      "Strabismus, Divergent",
      "Exophoria",
      "Alternating Exotropia",
      "Exotropia, Alternating",
      "Monocular Exotropia",
      "Exotropia, Monocular",
      "Primary Exotropia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of ocular misalignment where the visual axes diverge inappropriately. For example, medial rectus muscle weakness may produce this condition as the affected eye will deviate laterally upon attempted forward gaze. An exotropia occurs due to the relatively unopposed force exerted on the eye by the lateral rectus muscle, which pulls the eye in an outward direction.",
    "arabic_definition": "الحَوَلُ الوَحشيّ أو الحَول الخارجي (الإنجليزية: Exotropia)؛ هو شكل من أشكال حول العين أو الانحراف، إذ تنحرف العين إلى الخارج. وهو عكس الحول الداخلي والذي عادة ما يتضمن انحراف محور أكثر شدّة من الاِحولال الوحشيّ.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005099.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemianopsia",
    "term_en": "Hemianopsia",
    "term_ar": "عمى شقي",
    "synonyms": [
      "Hemianopsias",
      "Hemianopia",
      "Hemianopias",
      "Hemianopsia, Homonymous",
      "Hemianopsias, Homonymous",
      "Homonymous Hemianopsia",
      "Homonymous Hemianopsias",
      "Homonymous Hemianopia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Partial or complete loss of vision in one half of the visual field(s) of one or both eyes. Subtypes include altitudinal hemianopsia, characterized by a visual defect above or below the horizontal meridian of the visual field. Homonymous hemianopsia refers to a visual defect that affects both eyes equally, and occurs either to the left or right of the midline of the visual field. Binasal hemianopsia consists of loss of vision in the nasal hemifields of both eyes. Bitemporal hemianopsia is the bilateral loss of vision in the temporal fields. Quadrantanopsia refers to loss of vision in one quarter of the visual field in one or both eyes.",
    "arabic_definition": "العمى الشقي (الإنجليزية: Hemianopia أو hemianopsia) هو نقصان الرؤية أو العمى (أو خلل النظر) في نصف المجال البصري لعين واحدة أو للعينين، وعادة ما يكون على جانب واحد وعلى محور عمودي. أهم أسبابه السكتة وورم الدماغ والإصابات.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006423.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parasomnias",
    "term_en": "Parasomnias",
    "term_ar": "خطل نومي",
    "synonyms": [
      "Parasomnia",
      "Neonatal Sleep Myoclonus, Benign",
      "Benign Neonatal Sleep Myoclonus",
      "Myoclonus, Benign Neonatal Sleep",
      "Sleep Drunkenness",
      "Drunkennesses, Sleep",
      "Drunkenness, Sleep",
      "Sleep Drunkennesses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Movements or behaviors associated with sleep, sleep stages, or partial arousals from sleep that may impair sleep maintenance. Parasomnias are generally divided into four groups: arousal disorders, sleep-wake transition disorders, parasomnias of REM sleep, and nonspecific parasomnias. (From Thorpy, Sleep Disorders Medicine, 1994, p191)",
    "arabic_definition": "يجمع الخطل النومي (الإنجليزية: Parasomnia) بين مجموعة من اضطرابات النوم التي تترافق عادة مع فرط النوم أو نقصه. تشمل هذه الاضطرابات حركات جسدية غير طبيعية، على غرار الحديث والصراخ وتخيل تصورات وأحلام (مثل الكوابيس) لا وجود لها في بداية النوم أو النعاس، أو أثناء النوم أو عند الاستيقاظ. (Parasomnias)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020447.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acrodynia",
    "term_en": "Acrodynia",
    "term_ar": "ألم النهايات",
    "synonyms": [
      "Acrodynic Erythema",
      "Erythema, Acrodynic",
      "Chronic Childhood Mercurialism",
      "Childhood Mercurialism, Chronic",
      "Childhood Mercurialisms, Chronic",
      "Chronic Childhood Mercurialisms",
      "Mercurialism, Chronic Childhood",
      "Feer Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition seen primarily in childhood, most often resulting from chronic exposure to MERCURY COMPOUNDS which may result in encephalopathy and POLYNEUROPATHY. Clinical features include pain, swelling and pinkish discoloration of the fingers and toes, weakness in the extremities, extreme irritability, HYPERESTHESIA, and alterations in level of consciousness. (From Menkes, Textbook of Child Neurology, 5th ed, p603)",
    "arabic_definition": "ألم النهايات أو الأكرودينيا (الإنجليزية: Acrodynia) هي حالة مرضية تتميز بألم وتغير في لون نهايات الأطراف (اليدين والقدمين) إلى اللون الوردي الغامق. الأطفال الذين يتعرضون بشكل دائم للمعادن الثقيلة لا سيما الزئبق، هم في الغالب الأكثر عرضة لهذه الحالة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000170.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lethargy",
    "term_en": "Lethargy",
    "term_ar": "خمول",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A general state of sluggishness, listless, or uninterested, with being tired, and having difficulty concentrating and doing simple tasks. It may be related to DEPRESSION or DRUG ADDICTION.",
    "arabic_definition": "الخمول (الإنجليزية: Lethargy) هو حالة من التعب، النعاس، الإعياء، الإرهاق، التباطؤ، أو فقدان الطاقة. يمكن أن يكون مصحوبًا بالاكتئاب، إنخفاض الدافع ،أو اللامبالاة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053609.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypesthesia",
    "term_en": "Hypesthesia",
    "term_ar": "نقص الحس",
    "synonyms": [
      "Hypesthesias",
      "Hypesthesia, Tactile",
      "Hypesthesias, Tactile",
      "Tactile Hypesthesia",
      "Tactile Hypesthesias",
      "Hypoesthesia",
      "Hypoesthesias",
      "Impaired Sensation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Absent or reduced sensitivity to cutaneous stimulation.",
    "arabic_definition": "نَقص الحِس (الإنجليزية: Hypoesthesia) هوَ انخفاض في حاسَة اللمس (الإحساس) أو فُقدان جُزئي لحساسية المُستقبلات الحِسية. يُعتبر نقص الحِس أحد الأعراض الحِسية السَلبية المُرتبطة باضطراب الحواس الجلدية (Cutaneous sensory disorder)، حيثُ يُعاني المَرضى المُصابين بهذا الاضطراب من أحاسيس جلدية غير اعتيادية مُتمثلةً إما بزيادة الإحساس (مِثل الحكة أوَالاحتراق) أو بِنقصه (مِثل الخدران أو نقص الحِس). (Hypesthesia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006987.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myokymia",
    "term_en": "Myokymia",
    "term_ar": "تقلص عضلي موجي",
    "synonyms": [
      "Myokymias",
      "Fibrillary Chorea",
      "Chorea, Fibrillary",
      "Choreas, Fibrillary",
      "Fibrillary Choreas",
      "Kymatism",
      "Kymatisms",
      "Morvan Chorea"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Successive and rapid contractions of motor units associated with chronic nerve injury. The discharges arise from the peripheral aspects of regenerating nerves, and clinically impart a nearly continuous undulation of the body surface overlying the muscle. (Adams et al., Principles of Neurology, 6th ed, p1491)",
    "arabic_definition": "التقلص العضلي الموجي هو الارتجاف اللاإرادي العفوي المقتصر على عدد قليل من العضلات، أو مجرد حزم عضلية داخل عضلة واحدة، لكنه غير كافي لتحريك المفصل. يُمثل التقلص العضلي الموجي للعضلة المائلة العلوية بالعين أحد الأمثلة علي التقلص العضلي الموجي. (Myokymia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020385.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synkinesis",
    "term_en": "Synkinesis",
    "term_ar": "حركة تصاحبية",
    "synonyms": [
      "Synkineses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An involuntary movement accompanying a volitional movement. It often refers to facial movements that accompany FACIAL PARALYSIS.",
    "arabic_definition": "الحركة التصاحبية هي عرض عصبي تحدث فيه حركات عضلية عفوية وتسبب تقلصات لا إرادية متزامنة في العضلات الأخرى. على سبيل المثال، قد يحرض الابتسام تقلصات في عضلات العين، ما يسبب الحول لدى الشخص إذا ابتسم. (Synkinesis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046608.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "narcolepsy",
    "term_en": "Narcolepsy",
    "term_ar": "نوم قهري",
    "synonyms": [
      "Gelineau Syndrome",
      "Syndrome, Gelineau",
      "Gelineau's Syndrome",
      "Gelineaus Syndrome",
      "Gelineau's Syndromes",
      "Syndrome, Gelineau's",
      "Syndromes, Gelineau's",
      "Narcoleptic Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by recurrent episodes of daytime somnolence and lapses in consciousness (microsomnias) that may be associated with automatic behaviors and AMNESIA. CATAPLEXY; SLEEP PARALYSIS, and hypnagogic HALLUCINATIONS frequently accompany narcolepsy. The pathophysiology of this disorder includes sleep-onset rapid eye movement (REM) sleep, which normally follows stage III or IV sleep. (From Neurology 1998 Feb;50(2 Suppl 1):S2-S7)",
    "arabic_definition": "السَّبَخ أو التغفيق (الإنجليزية: narcolepsy أو hypnolepsy)، هو مرض عصبي مزمن يتمحور حول فقدان قدرة الدماغ على تنظيم دورات النوم والاستيقاظ بشكل طبيعي. يعاني المصابون بالتغفيق غالبا من نعاس شديد في النهار يشابه النعاس الذي يحدث بعد الحرمان من النوم لمدة 24-48 ساعة عند الأشخاص الطبيعيين، ويعانون أيضا من اضطراب النوم ليلا، وغالبا ما يتم بشكل خاطئ تشخيص المريض بالإصابة بالأرق.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009290.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acromegaly",
    "term_en": "Acromegaly",
    "term_ar": "ضخامة الأطراف",
    "synonyms": [
      "Inappropriate Growth Hormone Secretion Syndrome (Acromegaly)",
      "Somatotropin Hypersecretion Syndrome (Acromegaly)",
      "Hypersecretion Syndrome, Somatotropin (Acromegaly)",
      "Hypersecretion Syndromes, Somatotropin (Acromegaly)",
      "Somatotropin Hypersecretion Syndromes (Acromegaly)",
      "Syndrome, Somatotropin Hypersecretion (Acromegaly)",
      "Syndromes, Somatotropin Hypersecretion (Acromegaly)",
      "Inappropriate GH Secretion Syndrome (Acromegaly)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by prolonged exposure to excessive HUMAN GROWTH HORMONE in adults. It is characterized by bony enlargement of the FACE; lower jaw (PROGNATHISM); hands; FEET; HEAD; and THORAX. The most common etiology is a GROWTH HORMONE-SECRETING PITUITARY ADENOMA. (From Joynt, Clinical Neurology, 1992, Ch36, pp79-80)",
    "arabic_definition": "عِظَم الأطراف (الإنجليزية: Acromegaly) أو العَرْطَلَة وتسمى أيضاً ضخامة النهايات هي متلازمة تنتج عند زيادة إفراز هرمون النمو(GH) من قبل الفص الأمامي للغدة النخامية، وذلك بعد توقف الصفائح (أو الغضاريف) المشاشية عن النمو ويحدث ذلك عند البلوغ، أما زيادة هرمون النمو قبل توقفها عن النمو ينتج عنه مرض العملقة، هنالك عدة اضطرابات قد تزيد من إفراز هرمون النمو، أكثرها شيوعا أورام الغدة النخامية، قد يؤدي مرض العرطلة إلى تشوهات خطيرة ومضاعفات مميتة، ونظراً لكونه مرضاً بطيء التقدم غالباً ما يتأخر اكتشافه بعد أن يظهر تأثيره على المظهر الخارجي لا سيما الوجه.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000172.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "poliomyelitis",
    "term_en": "Poliomyelitis",
    "term_ar": "شلل الأطفال",
    "synonyms": [
      "Poliomyelitis Infection",
      "Infection, Poliomyelitis",
      "Infections, Poliomyelitis",
      "Poliomyelitis Infections",
      "Polio",
      "Polios",
      "Epidemic Acute Poliomyelitis",
      "Acute Poliomyelitis, Epidemic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute infectious disease of humans, particularly children, caused by any of three serotypes of human poliovirus (POLIOVIRUS). Usually the infection is limited to the gastrointestinal tract and nasopharynx, and is often asymptomatic. The central nervous system, primarily the spinal cord, may be affected, leading to rapidly progressive paralysis, coarse FASCICULATION and hyporeflexia. Motor neurons are primarily affected. Encephalitis may also occur. The virus replicates in the nervous system, and may cause significant neuronal loss, most notably in the spinal cord. A rare related condition, nonpoliovirus poliomyelitis, may result from infections with nonpoliovirus enteroviruses. (From Adams et al., Principles of Neurology, 6th ed, pp764-5)",
    "arabic_definition": "شلل الأطفال أو التهاب سنجابية النخاع (الإنجليزية: Poliomyelitis) هو مرض معدٍ تُسببه الفيروسة السنجابية، حوالي 0.5% من حالات شلل الأطفال تعاني من وهن عضلي يؤدي إلى شلل رخو، ويمكن أن يحدث هذا على مدى بضع ساعات إلى بضعة أيام، غالبًا ما يشمل الوهن الساقين، وبصورة أقل شيوعًا قد يشمل عضلات الرأس والعنق والحجاب الحاجز، يتعافى العديد من الأشخاص تمامًا من المرض، لكن الأشخاص الذين يعانون من ضعف العضلات يموت من الأطفال منهم حوالي 2-5% ومن البالغين 15-30% لا تظهر أية أعراض على 70% من المصابين، بينما يعاني 25% من المصابين من أعراض بسيطة مثل الحمى والتهاب الحلق، ويعاني ما يصل إلى 5% من الصداع وتيبس الرقبة وآلام في الذراعين والساقين. عادة ما يعود هؤلاء الأشخاص إلى طبيعتهم في غضون أسبوع أو أسبوعين، لكن بعد سنوات من التعافي قد تحدث متلازمة ما بعد شلل الأطفال والتي يصحبها تطور بطيء لضعف العضلات مماثل لذلك الذي أصيب به الشخص أثناء العدوى الأولية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011051.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "syringomyelia",
    "term_en": "Syringomyelia",
    "term_ar": "تكهف النخاع",
    "synonyms": [
      "Syringomyelias",
      "Myelosyringosis",
      "Myelosyringoses",
      "Syringomyelus",
      "Hydrosyringomyelia",
      "Hydrosyringomyelias",
      "Morvan Disease",
      "Morvan Diseases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Longitudinal cavities in the spinal cord, most often in the cervical region, which may extend for multiple spinal levels. The cavities are lined by dense, gliogenous tissue and may be associated with SPINAL CORD NEOPLASMS; spinal cord traumatic injuries; and vascular malformations. Syringomyelia is marked clinically by pain and PARESTHESIA, muscular atrophy of the hands, and analgesia with thermoanesthesia of the hands and arms, but with the tactile sense preserved (sensory dissociation). Lower extremity spasticity and incontinence may also develop. (From Adams et al., Principles of Neurology, 6th ed, p1269)",
    "arabic_definition": "تكهف النخاع (الإنجليزية: Syringomyelia) مرض مزمن مترق يشير إلى اضطراب يتصف بتشكل كيس (الإنجليزية: cyst) أو تجويف (الإنجليزية: cavity) ضمن الحبل الشوكي، وخاصة في المنطقة الرقبية منه. هذا الكيس، ويدعى باللغة الإنكليزية بـ: سيرينكس (الإنجليزية: syrinx)، يمكنه أن يتوسع ويستطيل مع مرور الزمن، فيدمر جزءاً من النخاع الشوكي، وخاصة الأعصاب الحركية، وال قد يؤدي هذا الضرر إلى الألم، والشلل، والضعف، وتصلب في الظهر والكتفين والأطراف.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013595.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "unconsciousness",
    "term_en": "Unconsciousness",
    "term_ar": "فقدان الوعي",
    "synonyms": [
      "Consciousness, Loss of",
      "Loss of Consciousness",
      "Unconscious State",
      "State, Unconscious",
      "Unconscious States"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Loss of the ability to maintain awareness of self and environment combined with markedly reduced responsiveness to environmental stimuli. (From Adams et al., Principles of Neurology, 6th ed, pp344-5)",
    "arabic_definition": "فقدان الوعي أو غياب الوعي هي حالة تحدث عند فقدان القدرة على الحفاظ على الوعي الذاتي والبيئي، ويتمثل في عدم القدرة على الاستجابة مع الناس أو الإشعارات البيئية الأخرى. قد يحدث فقدان الوعي نتيجة لإصابات في الدماغ، أو نقص الأكسجين في المخ (على سبيل المثال، بسبب الاحتشاء أو السكتة القلبية)، أو التسمم الحاد مع العقاقير التي تخفض من نشاط الجهاز العصبي المركزي (على سبيل المثال، الكحول وغيرها من العقاقير المنومة أو المهدئة) ، والتعب الشديد، والتخدير، وغيرها من الأسباب. (Unconsciousness)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014474.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "encephalitis",
    "term_en": "Encephalitis",
    "term_ar": "التهاب الدماغ",
    "synonyms": [
      "Brain Inflammation",
      "Inflammation, Brain",
      "Brain Inflammations",
      "Rasmussen Syndrome",
      "Encephalitis, Rasmussen",
      "Rasmussen Encephalitis",
      "Rasmussen's Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the BRAIN due to infection, autoimmune processes, toxins, and other conditions. Viral infections (see ENCEPHALITIS, VIRAL) are a relatively frequent cause of this condition.",
    "arabic_definition": "التهاب الدماغ (Encephalitis)هو التهاب في أنسجة المخ. غالبًا ما يسبب التهاب الدماغ علامات وأعراضًا خفيفة مشابهة للإنفلونزا مثل الصداع، والحمى، والارتباك، وقيء.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004660.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hallucinations",
    "term_en": "Hallucinations",
    "term_ar": "هلوسة",
    "synonyms": [
      "Hallucination",
      "Hallucinations, Hypnagogic",
      "Hallucination, Hypnagogic",
      "Hypnagogic Hallucination",
      "Hypnagogic Hallucinations",
      "Hallucinations, Gustatory",
      "Gustatory Hallucination",
      "Gustatory Hallucinations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Subjectively experienced sensations in the absence of an appropriate stimulus, but which are regarded by the individual as real. They may be of organic origin or associated with MENTAL DISORDERS.",
    "arabic_definition": "الهلوسة (أو الهلس) بمفهومها العام هي الإحساس بمحسوس غير موجود، وبمعنى أدق، يمكن تعريف الهلوسة بأنها الإحساس في حالة اليقظة، والوعي بمحسوس غير موجود يتميز بخواص المحسوسات الموجودة كالحياة والمادية والتحقق في الخارج (وجود مصداق خارجي للمحسوس)، وبالتالي ومن خلال هذه الخصائص يمكننا تمييز الهلوسة من الحلم الذي لا يحصل في حالة الوعي، كما يمكننا تمييز الهلوسة من التوهم (illusion) والذي هو عبارة عن إحساس مشوّه أو مفسّر تفسيرا خاطئا، كما يتميّز من خلال ذلك الحلم عن التخيل والذي يتحقق بإرادة الإنسان وهو عبارة عن تصرف في صور المحسوسات الواقعية، كما يمكننا من خلال التعريف المذكور أن نميز ما بين الهلوسة والهلوسة الكاذبة (pseodohallucination)، والتي لا تحاكي المحسوسات الواقعية، ولكنها تتم دون إرادة الإنسان، وتختلف الهلوسة أيضا عن «الإحساسات الوهمية» التي يتحسس المريض المصاب بها محسوسات واقعية بشكل صحيح وتفسير سليم إلاّ أنه يعطي هذه المحسوسات مغزى إضافيا غريبا. تتنوّع أشكال الهلوسة ما بين بصرية وسمعية وشمية وذوقية ولمسية، كما يمكن للهلوسة أن تصيب إحساس الإنسان بالتوازن والحرارة والألم، كما تصيب إحساس الإنسان بالمواضع النسبية لأجزاء جسمه المتجاورة. (Hallucinations)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006212.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "quadriplegia",
    "term_en": "Quadriplegia",
    "term_ar": "شلل الأطراف الأربعة",
    "synonyms": [
      "Quadriplegias",
      "Tetraplegia",
      "Tetraplegias",
      "Quadriparesis",
      "Quadripareses",
      "Spastic Quadriplegia",
      "Quadriplegia, Spastic",
      "Quadriplegias, Spastic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Severe or complete loss of motor function in all four limbs which may result from BRAIN DISEASES; SPINAL CORD DISEASES; PERIPHERAL NERVOUS SYSTEM DISEASES; NEUROMUSCULAR DISEASES; or rarely MUSCULAR DISEASES. The locked-in syndrome is characterized by quadriplegia in combination with cranial muscle paralysis. Consciousness is spared and the only retained voluntary motor activity may be limited eye movements. This condition is usually caused by a lesion in the upper BRAIN STEM which injures the descending cortico-spinal and cortico-bulbar tracts.",
    "arabic_definition": "الشلل الرباعي هو شلل ينتج عن مرض أو إصابة تؤدي إلى عجز جزئي أو تام عن استخدام كل الأطراف والجذع. إن الشلل النصفي (أو السفلي) يشبه الشلل الرباعي، إلا أنه مختلف عنه بكونه لا يؤثر على الذراعين. (Quadriplegia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011782.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydrocephalus",
    "term_en": "Hydrocephalus",
    "term_ar": "استسقاء الرأس",
    "synonyms": [
      "Hydrocephaly",
      "Communicating Hydrocephalus",
      "Hydrocephalus, Communicating",
      "Congenital Hydrocephalus",
      "Hydrocephalus, Congenital",
      "Obstructive Hydrocephalus",
      "Hydrocephalus, Obstructive",
      "Post-Traumatic Hydrocephalus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive accumulation of cerebrospinal fluid within the cranium which may be associated with dilation of cerebral ventricles, INTRACRANIAL HYPERTENSION; HEADACHE; lethargy; URINARY INCONTINENCE; and ATAXIA.",
    "arabic_definition": "مَوَه الدماغ أو مَوَه الرَأس أو استسقاء الرأس أو استسقاء الدماغ (الإنجليزية: Hydrocephalus) (من اليونانية، Hydro تعني الماء و cephalus تعني الرأس) هو مرض يتميز بتراكم السائل النخاعي في الجيوب والتجاويف الداخلية للدماغ مما قد يتسبب في ارتفاع الضّغط داخل القحف، وقد يُؤَدي ذلك إلى تضخّم الرأس، واختلاجات واختلالات عقلية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006849.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydranencephaly",
    "term_en": "Hydranencephaly",
    "term_ar": "موه انعدام المخ",
    "synonyms": [
      "Hydranencephalies",
      "Cerebral Hemispheres, Absence, Congenital",
      "Congenital Absence of Cerebral Hemispheres",
      "Absence of Cerebral Hemispheres, Congenital",
      "Hemihydranencephaly",
      "Hemihydranencephalies",
      "Hydranencephaly with Proliferative Vasculopathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital condition where the greater portions of the cerebral hemispheres and CORPUS STRIATUM are replaced by CSF and glial tissue. The meninges and the skull are well formed, which is consistent with earlier normal embryogenesis of the telencephalon. Bilateral occlusions of the internal carotid arteries in utero is a potential mechanism. Clinical features include intact brainstem reflexes without evidence of higher cortical activity. (Menkes, Textbook of Child Neurology, 5th ed, p307)",
    "arabic_definition": "مَوَهُ انْعِدامِ المُخّ (بالإنجليزية: Hydranencephaly أو hydrancephaly) هو عبارة عن عدم تكوّن نصفي الكرة المخية أو غيابهما بدرجات متفاوتة مع امتلاء تجويف الجمجمة المتبقي بالسائل النخاعي. موه انعدام المخ هو نوع من الاضطراب الرأسي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006832.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lissencephaly",
    "term_en": "Lissencephaly",
    "term_ar": "انعدام تلافيف الدماغ",
    "synonyms": [
      "Lissencephalies",
      "Lissencephalia",
      "Agyria",
      "Agyrias",
      "Pachygyria",
      "Pachygyrias",
      "Macrogyria",
      "Macrogyrias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A smooth brain malformation of the CEREBRAL CORTEX resulting from the abnormal location of developing neurons during corticogenesis. It is characterized by an absence of normal convoluted indentations on the surface of the brain (agyria), or fewer and shallower indentations (pachygryia). There is a reduced number of cortical layers, typically 4 instead of 6, resulting in a thickened cortex, and reduced cerebral white matter that is a reversal of the normal ratio of cerebral white matter to cortex.",
    "arabic_definition": "انعدام التلافيف أو لدانة الدماغ أو الدماغ سلس السطح (بالإنجليزية: Lissencephaly) هو مجموعة من اضطرابات الدماغ النادرة حيث يكون سطح الدماغ كله أو أجزاء منه أملس أو ناعم. كلمة Lissencephaly مشتقة من اليونانية λισσός أو lissos بمعنى «أملس»، وencephalos بمعنى «الدماغ».",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054082.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "megalencephaly",
    "term_en": "Megalencephaly",
    "term_ar": "تضخم الدماغ",
    "synonyms": [
      "Megalencephalies",
      "Macrocephaly",
      "Macrocephalies",
      "Megacephaly",
      "Megacephalies",
      "Megalocephaly",
      "Megalocephalies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital abnormality in which the occipitofrontal circumference is greater than two standard deviations above the mean for a given age. It is associated with HYDROCEPHALUS; SUBDURAL EFFUSION; ARACHNOID CYSTS; or is part of a genetic condition (e.g., ALEXANDER DISEASE; SOTOS SYNDROME).",
    "arabic_definition": "تضخم الدماغ (يُطلق عليه «إم إي جي» اختصارًا) هو اضطراب تطوري نمائي مميز بضخامة غير طبيعية في الدماغ. يتميز متوسط وزن الدماغ في هذا الاضطراب بانحراف معياري أعلى بمقدار 2.5 عن متوسط مجموع السكان. (Megalencephaly)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058627.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microcephaly",
    "term_en": "Microcephaly",
    "term_ar": "صغر الرأس",
    "synonyms": [
      "Microcephalies",
      "Microlissencephaly",
      "Microlissencephalies",
      "Severe Congenital Microcephaly",
      "Congenital Microcephalies, Severe",
      "Congenital Microcephaly, Severe",
      "Microcephalies, Severe Congenital",
      "Microcephaly, Severe Congenital"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital abnormality in which the CEREBRUM is underdeveloped, the fontanels close prematurely, and, as a result, the head is small. (Desk Reference for Neuroscience, 2nd ed.)",
    "arabic_definition": "الصَعَل أو صغر الرأس (الإنجليزية: Microcephaly) هو وصف للدلالة على حجم رأس بشري صغير بشكل ملحوظ (بقياس المسافة حول قمة الرأس)، بحيث يكون القياس تحت المعدل الطبيعي لعُمر الشخص وجنسه، وذلك بالاعتماد على المخطّطات القياسية. تحدث حالة الصعل في أغلب الأحيان، بسبب فشلِ الدماغ في النمو بنسبة طبيعية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008831.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "porencephaly",
    "term_en": "Porencephaly",
    "term_ar": "تنخرب الدماغ",
    "synonyms": [
      "Porencephalies",
      "Congenital Porencephaly",
      "Porencephaly, Congenital",
      "Developmental Porencephaly",
      "Porencephaly, Developmental",
      "Porencephaly, Type 1",
      "Type 1 Porencephaly",
      "Porencephaly, Familial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cortical malformations characterized by white matter-lined cleft or cyst associated with ISCHEMIA and hemorrhagic insults. Symptoms include delayed growth and development, HYPOTONIA; SEIZURES; SPASTIC HEMIPLEGIA and MACROCEPHALY; MICROCEPHALY; or HYDROCEPHALUS. Mutations in the genes encoding COLLAGEN TYPE IV are associated with familial types.",
    "arabic_definition": "تنخرب الدماغ (بالانجليزية: Porencephaly)، هو اضطراب رأسي نادر للغاية يشمل تلين الدماغ. وهو اضطراب عصبي في الجهاز العصبي المركزي يتميز بوجود كيسات، أو تجاويف داخل نصف الكرة المخية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065708.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "somnambulism",
    "term_en": "Somnambulism",
    "term_ar": "السير أثناء النوم",
    "synonyms": [
      "Nocturnal Wandering",
      "Wandering, Nocturnal",
      "Sleep Walking",
      "Sleep Walking Disorder",
      "Sleep Walking Disorders",
      "Sleepwalking"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A parasomnia characterized by a partial arousal that occurs during stage IV of non-REM sleep. Affected individuals exhibit semipurposeful behaviors such as ambulation and are difficult to fully awaken. Children are primarily affected, with a peak age range of 4-6 years.",
    "arabic_definition": "السير النومي أو السير أثناء النوم أو السَّرنمة (الإنجليزية: Sleepwalking) أو الرباص (الإنجليزية: somnambulism)و(الإنجليزية: noctambulism) أو الجوال هو أحد اضطراب النوم التي تنتمي لعائلة الخطل النومي، ويُمثل هذا الاضطراب حالة مختلطة من النوم واليقظة، حيث يقوم المصاب بالاضطراب بأداء وظائف أو أعمال عادة تحتاج إلى حالة كاملة من الانتباه واليقظة، مثل التحدث، الجلوس في السرير، المشي تجاه الحمام، قيادة السيارة، الإيماءات العنيفة، الانتحار والقتل. على الرغم من أن حالات المشي أثناء النوم عادة ما تأخذ شكل سلوكيات بسيطة ومتكررة، إلا أن هناك تقارير ترد من حين لآخر حول أشخاص يؤدون سلوكيات مركبة أثناء النوم، رغم أن شرعيته هذه السلوكيات غالبا ما تكون محل نزاع.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013009.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibromyalgia",
    "term_en": "Fibromyalgia",
    "term_ar": "ألم عضلي ليفي",
    "synonyms": [
      "Fibromyalgias",
      "Diffuse Myofascial Pain Syndrome",
      "Fibromyalgia-Fibromyositis Syndrome",
      "Fibromyalgia-Fibromyositis Syndromes",
      "Syndrome, Fibromyalgia-Fibromyositis",
      "Syndromes, Fibromyalgia-Fibromyositis",
      "Fibromyositis-Fibromyalgia Syndrome",
      "Fibromyositis-Fibromyalgia Syndromes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A common nonarticular rheumatic syndrome characterized by myalgia and multiple points of focal muscle tenderness to palpation (trigger points). Muscle pain is typically aggravated by inactivity or exposure to cold. This condition is often associated with general symptoms, such as sleep disturbances, fatigue, stiffness, HEADACHES, and occasionally DEPRESSION. There is significant overlap between fibromyalgia and the chronic fatigue syndrome (FATIGUE SYNDROME, CHRONIC). Fibromyalgia may arise as a primary or secondary disease process. It is most frequent in females aged 20 to 50 years. (From Adams et al., Principles of Neurology, 6th ed, p1494-95)",
    "arabic_definition": "الألم العضلي الليفي وتُنقحر إلى فيبروميالجيا، هي حالة مرضية تتميز بانتشار ألم مزمن في أماكن متعددة من الجسم مع استجابة شديدة ومؤلمة عند الضغط. هناك أعراض أخرى بالإضافة إلى الألم وهذا ما يدعو إلى إطلاق مصطلح «متلازمة الألم العضلي المتفشي» على هذا المرض. (Fibromyalgia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005356.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prosopagnosia",
    "term_en": "Prosopagnosia",
    "term_ar": "عمى تعرف الوجوه",
    "synonyms": [
      "Prosopagnosias",
      "Agnosia for Faces",
      "Agnosia for Face",
      "Facial Recognition Agnosia",
      "Agnosia, Facial Recognition",
      "Agnosias, Facial Recognition",
      "Facial Recognition Agnosias",
      "Recognition Agnosia, Facial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inability to recognize a familiar face or to learn to recognize new faces. This visual agnosia is most often associated with lesions involving the junctional regions between the temporal and occipital lobes. The majority of cases are associated with bilateral lesions, however unilateral damage to the right occipito-temporal cortex has also been associated with this condition. (From Cortex 1995 Jun;31(2):317-29).",
    "arabic_definition": "عمى تعرف الوجوه أو جهل تمييز الوجوه أو عمى تمييز الوجوه (الإنجليزية: Prosopagnosia) وهي كلمة يونانية مكونة من جزئين \"prosopon\" وتعني وجه \"agnosia\" وتعني العمى فأن عمى التعرف على الوجوه هو اضطراب معرفي في إدراك الوجوه حيث تكون القدرة على تمييز الوجوه عليله بينما في جوانب أخرى كالمعالجة البصرية على سبيل المثال تمييز الأشياء وفي جانب آخر كالسير الفكري مثل إتخاذ القرارات فهما يبقان سليمان. في الأصل هذا المصطلح يشير إلى حالة تحدث بعد تضرر حاد إلى الدماغ (عمى التعرف على الوجوه المكتسب) ولكن يوجد نوع خلقي أو نمائي لهذا الاضطراب وقد يصيب حوالي 2.5% من سكان العالم.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020238.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "galactosemias",
    "term_en": "Galactosemias",
    "term_ar": "وجود الغالاكتوز في الدم",
    "synonyms": [
      "Galactosemia",
      "Galactokinase Deficiency Disease",
      "Galactokinase Deficiency Diseases",
      "Deficiency Disease, Galactokinase",
      "Galactokinase Deficiency",
      "Deficiencies, Galactokinase",
      "Deficiency, Galactokinase",
      "Galactokinase Deficiencies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of inherited enzyme deficiencies which feature elevations of GALACTOSE in the blood. This condition may be associated with deficiencies of GALACTOKINASE; UDPGLUCOSE-HEXOSE-1-PHOSPHATE URIDYLYLTRANSFERASE; or UDPGLUCOSE 4-EPIMERASE. The classic form is caused by UDPglucose-Hexose-1-Phosphate Uridylyltransferase deficiency, and presents in infancy with FAILURE TO THRIVE; VOMITING; and INTRACRANIAL HYPERTENSION. Affected individuals also may develop MENTAL RETARDATION; JAUNDICE; hepatosplenomegaly; ovarian failure (PRIMARY OVARIAN INSUFFICIENCY); and cataracts. (From Menkes, Textbook of Child Neurology, 5th ed, pp61-3)",
    "arabic_definition": "وجود الغالاكتوز في الدم أو وجود سكر اللبن في الدم أو جلكتوزية الدم أو الجلاكتوزيمية (بالانجليزية: Galactosaemia، باليونانية:γαλακτόζη + αίμα \"جالاكتوز + دم\"، تراكم الجالكتوز بالدم) هو اختلال وراثي نادر ينتج عنه خلل بقدرة الجسم على هضم الجالكتوز ويؤثر على عملية تأييض سكر الجالكتوز بحيث يمنع حدوثها بطريقة صحيحة، هذا الاختلال الوراثي ينتج عن صفة متنحية تتسبب في نقص بالإنزيم المسؤول عن التحلل الكافي للجالاكتوز. يعدّ الطبيب الألماني فريدريك غوبرت (1870- 1927)، أول شخص شخّص هذا المرض سنة 1917، أما السبب (خلل في تأييض الجالكتوز) فحددته مجموعة كان يترأسها هِرْمان كَلْكار في عام 1956. (Galactosemias)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005693.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photophobia",
    "term_en": "Photophobia",
    "term_ar": "رهاب الضوء (إنسان)",
    "synonyms": [
      "Photophobias",
      "Light Sensitivity",
      "Light Sensitivities",
      "Sensitivities, Light",
      "Sensitivity, Light"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal sensitivity to light. This may occur as a manifestation of EYE DISEASES; MIGRAINE; SUBARACHNOID HEMORRHAGE; MENINGITIS; and other disorders. Photophobia may also occur in association with DEPRESSION and other MENTAL DISORDERS.",
    "arabic_definition": "رهاب الضوء (الإنجليزية: Photophobia) هو عرض يتصف بعدم تقبل غير طبيعي للإدراك البصري للضوء.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020795.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dyscalculia",
    "term_en": "Dyscalculia",
    "term_ar": "عسر الحساب",
    "synonyms": [
      "Dyscalculias",
      "Developmental Dyscalculia",
      "Developmental Dyscalculias",
      "Dyscalculia, Developmental",
      "Primary Dyscalculia",
      "Dyscalculia, Primary",
      "Primary Dyscalculias",
      "Acquired Dyscalculia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Impaired ability in numerical concepts. These inabilities arise as a result of primary neurological lesion, are syndromic (e.g., GERSTMANN SYNDROME ) or acquired due to brain damage.",
    "arabic_definition": "عسر الحساب و يُطلق عليه أيضاً عجز في الرياضيات، وهو نوع محدد من اضطرابات التعلم يشمل صعوبة فطرية في تعلم أو استيعاب الحسابات الرياضية و هو قريب لعسر القراءة dyslexia، يتضمن صعوبة في فهم الأرقام وتعلم كيفية ضربها وتعلم النظريات الرياضية وعدد من الأعراض المُشابهة، على الرغم من عدم وجود نطاق مُحدد لصعوبة التعلم. عجز الرياضيات يمكن أن يحدث أيضًا نتيجة لبعض أنواع إصابة الدماغ، وفي هذه الحالة يُطلق على الإعاقة acalculia أو تعذر الحساب للتفريق بينها وبين عسر الحساب (ديسكالكوليا) التي تُعتبر فطرية أو وراثية. (Dyscalculia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060705.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "homocystinuria",
    "term_en": "Homocystinuria",
    "term_ar": "بيلة هوموسيستينية",
    "synonyms": [
      "Cystathionine beta-Synthase Deficiency Disease",
      "CBS Deficiency",
      "CBS Deficiencies",
      "Deficiencies, CBS",
      "Deficiency, CBS",
      "Cystathionine Beta Synthase Deficiency",
      "Deficiency Disease, Cystathionine beta-Synthase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Autosomal recessive inborn error of methionine metabolism usually caused by a deficiency of CYSTATHIONINE BETA-SYNTHASE and associated with elevations of homocysteine in plasma and urine. Clinical features include a tall slender habitus, SCOLIOSIS, arachnodactyly, MUSCLE WEAKNESS, genu varus, thin blond hair, malar flush, lens dislocations, an increased incidence of MENTAL RETARDATION, and a tendency to develop fibrosis of arteries, frequently complicated by CEREBROVASCULAR ACCIDENTS and MYOCARDIAL INFARCTION. (From Adams et al., Principles of Neurology, 6th ed, p979)",
    "arabic_definition": "بيلة هوموسيستينية (الإنجليزية: Homocystinuria) وتسمى أيضاً نقص بيتا سينثاز السيستاتيونين والتي تُعرف اختصارًا باسم CBS deficiency،، هو اضطرابٌ وراثي في عملية الأيض للحمض الأميني مثيونين، ويعود ذلك إلى نقصِ إنزيم بيتا سينثاز السيستاتيونين، وهو مرضٌ وراثي جسميٌ متنحٍ، مما يعني أن الطفل يجب أن يرث نسخةً من الجين المتنحي من كلا الوالدين حتى يُصبح مصابًا بالمرض، ويمكن اكتسابه من نقص فيتامين بي6 أو بي12 أو حمض الفوليك.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006712.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypopituitarism",
    "term_en": "Hypopituitarism",
    "term_ar": "قصور النخامية",
    "synonyms": [
      "Adenohypophyseal Hyposecretion",
      "Anterior Pituitary Hyposecretion Syndrome",
      "Hyposecretion Syndrome, Anterior Pituitary",
      "Hyposecretion, Adenohypophyseal",
      "Pituitary Insufficiency",
      "Insufficiency, Pituitary",
      "Postpartum Hypopituitarism",
      "Hypopituitarism, Postpartum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diminution or cessation of secretion of one or more hormones from the anterior pituitary gland (including LH; FOLLICLE STIMULATING HORMONE; SOMATOTROPIN; and CORTICOTROPIN). This may result from surgical or radiation ablation, non-secretory PITUITARY NEOPLASMS, metastatic tumors, infarction, PITUITARY APOPLEXY, infiltrative or granulomatous processes, and other conditions.",
    "arabic_definition": "قصور النخامية (الإنجليزية: Hypopituitarism)هو حالة مرضية تنتج عن نقص أو عدم إنتاج قدر كافي لواحد أو أكثر من هرمونات الغدة النخامية Pituitary Gland (غدة صغيرة توجد في قاعدة المخ). ويكون ذلك نتيجة مرض بالغدة النخامية نفسها أو غدة ما تحت المهاد Hypothalamus (هي جزء من المخ يحتوي على هرمونات تتحكم بالغدة النخامية).",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007018.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polymicrogyria",
    "term_en": "Polymicrogyria",
    "term_ar": "كثارة التلافيف",
    "synonyms": [
      "Polymicrogyrias",
      "Cerebral Micropolygyria",
      "Cerebral Micropolygyrias",
      "Micropolygyria, Cerebral",
      "Micropolygyrias, Cerebral",
      "Cerebral Polymicrogyria",
      "Cerebral Polymicrogyrias",
      "Polymicrogyria, Cerebral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Heterogeneous disorders of cortical malformation characterized by excessive and small fused gyri and shallow sulci of the CORTEX with abnormal cortical lamination. It is considered a malformation secondary to abnormal post-migrational development of the neurons during cerebral cortical development and is associated with EPILEPSY and learning difficulties.",
    "arabic_definition": "كَثَارَةُ التَّلَافيف (اختصارًا PMG) هي حالة تؤثر على نمو الدماغ البشري نتيجة وجود العديد من التلافيف الصغيرة ما يؤدي إلى تشكل طيات مفرطة في الدماغ تزيد من سماكة القشرة المخية بشكل غير طبيعي. قد يؤثر هذا الشذوذ على منطقة واحدة أو مناطق متعددة من الدماغ. (Polymicrogyria)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065706.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperalgesia",
    "term_en": "Hyperalgesia",
    "term_ar": "فرط التألم",
    "synonyms": [
      "Hyperalgesias",
      "Hyperalgia",
      "Hyperalgesic Sensations",
      "Hyperalgesic Sensation",
      "Sensation, Hyperalgesic",
      "Sensations, Hyperalgesic",
      "Tactile Allodynia",
      "Allodynia, Tactile"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An increased sensation of pain or discomfort produced by minimally noxious stimuli due to damage to soft tissue containing NOCICEPTORS or injury to a peripheral nerve.",
    "arabic_definition": "فرط التألم أو زيادة الحساسية للألم (الإنجليزية: Hyperalgesia) هو زيادة الحساسية تجاه الألم، والتي قد تكون ناجمة عن الأضرار التي لحقت بمستقبلات الأذية أو الأعصاب الطرفية. وتُعتبر البروستاغلاندينات E وF هي المسؤولة إلى حد كبير عن تنبيه مستقبلات الألم.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006930.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dyskinesias",
    "term_en": "Dyskinesias",
    "term_ar": "خلل الحركة",
    "synonyms": [
      "Dyskinesia",
      "Abnormal Movements",
      "Abnormal Movement",
      "Movement, Abnormal",
      "Movements, Abnormal",
      "Asterixis",
      "Ballismus",
      "Hemiballismus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal involuntary movements which primarily affect the extremities, trunk, or jaw that occur as a manifestation of an underlying disease process. Conditions which feature recurrent or persistent episodes of dyskinesia as a primary manifestation of disease may be referred to as dyskinesia syndromes (see MOVEMENT DISORDERS). Dyskinesias are also a relatively common manifestation of BASAL GANGLIA DISEASES.",
    "arabic_definition": "خلل الحركة أو عُسر الحركة (الإنجليزية: Dyskinesia) يشير إلى مجموعة من الاضطرابات الحركية التي تتسم بحركات لاإرادية للعضلات، بما في ذلك الحركات المشابهة للعرة أو الرقاص والحركات الإرادية الضعيفة. يمكن أن يتراوح خلل الحركة من رعشة طفيفة في اليدين إلى حركة لا يمكن السيطرة عليها في الجزء العلوي من الجسم أو في الأطراف السفلية. (Dyskinesias)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020820.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dermatomyositis",
    "term_en": "Dermatomyositis",
    "term_ar": "التهاب العضلات والجلد",
    "synonyms": [
      "Polymyositis-Dermatomyositis",
      "Dermatopolymyositis",
      "Dermatomyositis, Adult Type",
      "Adult Type Dermatomyositis",
      "Dermatomyositis, Childhood Type",
      "Childhood Type Dermatomyositis",
      "Juvenile Dermatomyositis",
      "Dermatomyositis, Juvenile"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A subacute or chronic inflammatory disease of muscle and skin, marked by proximal muscle weakness and a characteristic skin rash. The illness occurs with approximately equal frequency in children and adults. The skin lesions usually take the form of a purplish rash (or less often an exfoliative dermatitis) involving the nose, cheeks, forehead, upper trunk, and arms. The disease is associated with a complement mediated intramuscular microangiopathy, leading to loss of capillaries, muscle ischemia, muscle-fiber necrosis, and perifascicular atrophy. The childhood form of this disease tends to evolve into a systemic vasculitis. Dermatomyositis may occur in association with malignant neoplasms. (From Adams et al., Principles of Neurology, 6th ed, pp1405-6)",
    "arabic_definition": "هو مرض يصيب الأنسجة الضامة في الجسم ويظهر تأثيره على الجهاز العضلي والجلد على شكل التهاب، أسبابه ما تزال غير معروفة غير أن الكثيرين يعتقدون أنه ناشئ عن التهاب فيروسي سابق يقوم بتحفيز حصول هذا الاتهاب والبعض يعزوه لحصول مرض مناعي ذاتي في الجلد والعضلات. سبب المرض غير معروف. (Dermatomyositis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003882.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arachnoiditis",
    "term_en": "Arachnoiditis",
    "term_ar": "التهاب العنكبوتية",
    "synonyms": [
      "Arachnoiditides",
      "Arachnoid Membrane Inflammation",
      "Arachnoid Membrane Inflammations",
      "Inflammations, Arachnoid Membrane",
      "Inflammation, Arachnoid Membrane"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute or chronic inflammation of the arachnoid membrane of the meninges most often involving the spinal cord or base of the brain. This term generally refers to a persistent inflammatory process characterized by thickening of the ARACHNOID membrane and dural adhesions. Associated conditions include prior surgery, infections, trauma, SUBARACHNOID HEMORRHAGE, and chemical irritation. Clinical features vary with the site of inflammation, but include cranial neuropathies, radiculopathies, and myelopathies. (From Joynt, Clinical Neurology, 1997, Ch48, p25)",
    "arabic_definition": "التهاب العنكبوتية (بالإنجليزية:Arachnoiditis) هو التهاب يصيب العنكبوتية وهي إحدى الأغشية المحيطة بالأعصاب النابعة من الحبل الشوكي وتحميه والتي تٌعرف بالسحايا. يعاني المريض بالتهاب العنكبوتية بألم لاذع في الأعصاب والاضطرابات العصبية، ولا يوجد سن محدد أكثر عرضة للمرض فقد يصيب المعرضين للمرض في جميع الأعمار.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001100.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polymyositis",
    "term_en": "Polymyositis",
    "term_ar": "التهاب العضلات",
    "synonyms": [
      "Polymyositides",
      "Myositis, Multiple",
      "Multiple Myositis",
      "Myositides, Multiple",
      "Polymyositis Ossificans",
      "Ossificans, Polymyositis",
      "Polymyositis, Idiopathic",
      "Idiopathic Polymyositides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases characterized by inflammation involving multiple muscles. This may occur as an acute or chronic condition associated with medication toxicity (DRUG TOXICITY); CONNECTIVE TISSUE DISEASES; infections; malignant NEOPLASMS; and other disorders. The term polymyositis is frequently used to refer to a specific clinical entity characterized by subacute or slowly progressing symmetrical weakness primarily affecting the proximal limb and trunk muscles. The illness may occur at any age, but is most frequent in the fourth to sixth decade of life. Weakness of pharyngeal and laryngeal muscles, interstitial lung disease, and inflammation of the myocardium may also occur. Muscle biopsy reveals widespread destruction of segments of muscle fibers and an inflammatory cellular response. (Adams et al., Principles of Neurology, 6th ed, pp1404-9)",
    "arabic_definition": "التهاب العضلات المتعدد (PM) (الإنجليزية: Polymyositis) هو نوع من الالتهاب المزمن للعضلات (اعتلال عضلي التهابي) يرتبط بالتهاب الجلد العضلي والتهاب العضلات البدني الشامل. اسمه مشتق من poly- \"العديد\" myos- \"العضلات\" و-itis \"الالتهاب\".",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017285.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fasciculation",
    "term_en": "Fasciculation",
    "term_ar": "ارتجاف حزمي",
    "synonyms": [
      "Fasciculations",
      "Fasciculation, Muscular",
      "Fasciculations, Muscular",
      "Muscular Fasciculation",
      "Muscular Fasciculations",
      "Fasciculation, Benign",
      "Benign Fasciculation",
      "Benign Fasciculations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Involuntary contraction of the muscle fibers innervated by a motor unit. Fasciculations may be visualized as a muscle twitch or dimpling under the skin, but usually do not generate sufficient force to move a limb. They may represent a benign condition or occur as a manifestation of MOTOR NEURON DISEASE or PERIPHERAL NERVOUS SYSTEM DISEASES. (Adams et al., Principles of Neurology, 6th ed, p1294)",
    "arabic_definition": "الارتجافات الحزمية أو التقلصات الحزمية أو التحزُّم أو ارتعاش العضلات (الإنجليزية: Fasciculation) هو انقباض واسترخاء عضلي تلقائي لا إرادي، في ألياف عضلية دقيقة معصبة. تكون الانقباضات خفيفة، غير مؤلمة، ولا تسبب الحركة، وتنجم عن نشاط كهربي غير مراقب في الخلايا والألياف العصبية، وهي تظهر، بشكل أساسي، في أمراض الخلايا العصبية الحركية، مثل التصلب الجانبي الضموري (Amyotrophic lateral sclerosis) وبعد شلل الأطفال.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005207.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "citrullinemia",
    "term_en": "Citrullinemia",
    "term_ar": "سيترولينيميا",
    "synonyms": [
      "Citrullinemias",
      "ASS Deficiency",
      "ASS Deficiencies",
      "Deficiency, ASS",
      "Citrullinuria",
      "Citrullinurias",
      "Deficiency Disease, Argininosuccinate Synthase",
      "Deficiency Disease, Argininosuccinic Acid Synthase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of diseases related to a deficiency of the enzyme ARGININOSUCCINATE SYNTHASE which causes an elevation of serum levels of CITRULLINE. In neonates, clinical manifestations include lethargy, hypotonia, and SEIZURES. Milder forms also occur. Childhood and adult forms may present with recurrent episodes of intermittent weakness, lethargy, ATAXIA, behavioral changes, and DYSARTHRIA. (From Menkes, Textbook of Child Neurology, 5th ed, p49)",
    "arabic_definition": "سيترولينيميا (بالإنجليزية: Citrullinemia) هي اضطراب وراثي متنحي يصنف ضمن اضطرابات دورة اليوريا، يؤدي إلى تراكم الأمونيا ومواد سامة أخرى في الدم تم وصف شكلين من السيترولينيميا، لكل منهما علامات وأعراض وإدارة علاجية مختلفة، وينتج كلاهما عن طفرات في جينات مختلفة. تنتمي سيترولينيميا إلى فئة الأمراض الوراثية المعروفة باسم اضطرابات دورة اليوريا.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020159.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tyrosinemias",
    "term_en": "Tyrosinemias",
    "term_ar": "فرط تيروزين الدم",
    "synonyms": [
      "Tyrosinemia",
      "Hereditary Tyrosinemias",
      "Hypertyrosinemia",
      "Tyrosinemias, Hereditary",
      "Hereditary Tyrosinemia",
      "Tyrosinemia, Hereditary",
      "Tyrosinemia, Type I",
      "Type I Tyrosinemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of disorders which have in common elevations of tyrosine in the blood and urine secondary to an enzyme deficiency. Type I tyrosinemia features episodic weakness, self-mutilation, hepatic necrosis, renal tubular injury, and seizures and is caused by a deficiency of the enzyme fumarylacetoacetase. Type II tyrosinemia features INTELLECTUAL DISABILITY, painful corneal ulcers, and keratoses of the palms and plantar surfaces and is caused by a deficiency of the enzyme TYROSINE TRANSAMINASE. Type III tyrosinemia features INTELLECTUAL DISABILITY and is caused by a deficiency of the enzyme 4-HYDROXYPHENYLPYRUVATE DIOXYGENASE. (Menkes, Textbook of Child Neurology, 5th ed, pp42-3)",
    "arabic_definition": "فَرْطُ تيروسينِ الدَّم (الإنجليزية: Tyrosinemia) هوَ مَرض أَيضي وِراثي يَتميز بارتفاع مستوى التيروسين في بلازما الدَم، يتم تناقله بين الأجيال عن طريق النمط الجنسي المُتنحي الوراثي، غالباً ما يُتوفى المَريض نتيجة الإِصابة بالفَشل الكَلوي، والطَريقة الأمثل للعِلاج هي تَقليل نسبة التَيروزين والفينيل ألانين في الوجبات الغذائية. (Tyrosinemias)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020176.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ophthalmoplegia",
    "term_en": "Ophthalmoplegia",
    "term_ar": "شلل العين",
    "synonyms": [
      "Ophthalmoplegias",
      "Oculomotor Paralysis",
      "Paralysis, Oculomotor",
      "External Ophthalmoplegia",
      "External Ophthalmoplegias",
      "Ophthalmoplegia, External",
      "Ophthalmoplegias, External",
      "Internal Ophthalmoplegia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Paralysis of one or more of the ocular muscles due to disorders of the eye muscles, neuromuscular junction, supporting soft tissue, tendons, or innervation to the muscles.",
    "arabic_definition": "شلل العين أو الكَفَأ (بالإنجليزي: ophthalmoplegia or Ophthalmoparesis) يحدث نتيجة شلل عضلة أو أكثر من عضلات خارج المقلة المسؤولة عن حركة العين .",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009886.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "encephalocele",
    "term_en": "Encephalocele",
    "term_ar": "قيلة دماغية",
    "synonyms": [
      "Encephaloceles",
      "Cephalocele",
      "Cephaloceles",
      "Cranial Meningoencephalocele",
      "Cranial Meningoencephaloceles",
      "Meningoencephalocele, Cranial",
      "Meningoencephaloceles, Cranial",
      "Bifid Cranium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Brain tissue herniation through a congenital or acquired defect in the skull. The majority of congenital encephaloceles occur in the occipital or frontal regions. Clinical features include a protuberant mass that may be pulsatile. The quantity and location of protruding neural tissue determines the type and degree of neurologic deficit. Visual defects, psychomotor developmental delay, and persistent motor deficits frequently occur.",
    "arabic_definition": "القِيلَةٌ الدِماغِيَّة أحياناً يطلق عليها القحف المشقوق، هي عبارة عن عيب في الأنبوب العصبي تتميز ببروز كيسي للدماغ والأغشية السحائية المحيطة خلال فتحة من الجمجمة. سببها هو عيب في غلق الأنبوب العصبي أثناء النمو الجنيني. (Encephalocele)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004677.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucolipidoses",
    "term_en": "Mucolipidoses",
    "term_ar": "داء شحمي مخاطي",
    "synonyms": [
      "Sialidosis",
      "Sialidoses",
      "Mucolipidosis",
      "Type II Mucolipidosis",
      "Mucolipidoses, Type II",
      "Mucolipidosis, Type II",
      "Type II Mucolipidoses",
      "Mucolipidosis II"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of inherited metabolic diseases characterized by the accumulation of excessive amounts of acid mucopolysaccharides, sphingolipids, and/or glycolipids in visceral and mesenchymal cells. Abnormal amounts of sphingolipids or glycolipids are present in neural tissue. INTELLECTUAL DISABILITY and skeletal changes, most notably dysostosis multiplex, occur frequently. (From Joynt, Clinical Neurology, 1992, Ch56, pp36-7)",
    "arabic_definition": "داء الشحميات المخاطية (الإنجليزية: Mucolipidosis) هو مجموعة من الاضطرابات الأيضية الوراثية التي تحدث نتيجة خلل في أحد الانزيمات المسؤولة عن أيض بعض المواد الكربوهيدراتية والليبيدية غير المرغوبة داخل الخلية ويصنف من ضمن أمراض التخزين الليسوسومي. (Mucolipidoses)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009081.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyomyositis",
    "term_en": "Pyomyositis",
    "term_ar": "التهاب عضلات صديدي",
    "synonyms": [
      "Tropical Myositis",
      "Myositis, Tropical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An intramuscular suppuration of the large skeletal muscle groups. It is associated with INFECTION such as STAPHYLOCOCCUS AUREUS and PYODERMA. It was known as a tropical disease but is increasing among the immunocompromised (IMMUNOCOMPROMISED HOST). Symptoms include muscle pain, FEVER, and leucocytosis. It has been diagnosed by MRI SCANS.",
    "arabic_definition": "التهاب العضلات الصديدي أو التهاب العضلات التقيحي أو التهاب العضلات الاستوائي هو عدوى بكتيرية تصيب العضلات الهيكلية مما يؤدي إلى تكون خراجات مليئة بالقيح بها. تعتبر المناطق الاستوائية هي أكثر الأماكن التي يشيع بها التهاب العضلات التقيحي، لكن تبقى احتمالية حدوثه متاحة أيضًا في المناطق المعتدلة. (Pyomyositis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052880.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurosyphilis",
    "term_en": "Neurosyphilis",
    "term_ar": "زهري عصبي",
    "synonyms": [
      "Syphilis, Central Nervous System",
      "Central Nervous System Syphilis",
      "Syphilis, CNS",
      "General Paralysis",
      "General Paralysis of the Insane",
      "Paralysis, General",
      "General Paresis",
      "Paretic Neurosyphilis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections of the central nervous system caused by TREPONEMA PALLIDUM which present with a variety of clinical syndromes. The initial phase of infection usually causes a mild or asymptomatic meningeal reaction. The meningovascular form may present acutely as BRAIN INFARCTION. The infection may also remain subclinical for several years. Late syndromes include general paresis; TABES DORSALIS; meningeal syphilis; syphilitic OPTIC ATROPHY; and spinal syphilis. General paresis is characterized by progressive DEMENTIA; DYSARTHRIA; TREMOR; MYOCLONUS; SEIZURES; and Argyll-Robertson pupils. (Adams et al., Principles of Neurology, 6th ed, pp722-8)",
    "arabic_definition": "الزُّهْرِيُّ العَصَبِيّ أو الإِفرنجي العَصَبي أو سِفلِس الجهاز العصبي (الإنجليزية: Neurosyphilis) هو عدوى تُصيب الدماغ أو الحبل الشوكي نتيجة الإصابة بالبكتيريا الملتوية اللولبية الشاحبة، وعادةً ما يحدث هذا المرض في الأشخاص المُصابين بمرض الزهري المُزمن غير المُعالج، حيثُ يَظهر هذا المرض بعد حوالي 10-20 عاماً من الإصابة الأولى، كما يتطور المَرض في حوالي 25%-40% من الحالات التي تستمر من غير عِلاج. يَذكر مركز مكافحة الأمراض واتقائها في الولايات المتحدة أنَّ مرض الزُهري العصبي من الممكن أن يحدث في أي مرحلة من مراحل مرض الزُهري.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009494.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tauopathies",
    "term_en": "Tauopathies",
    "term_ar": "اعتلال تاو",
    "synonyms": [
      "Tauopathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Neurodegenerative disorders involving deposition of abnormal tau protein isoforms (TAU PROTEINS) in neurons and glial cells in the brain. Pathological aggregations of tau proteins are associated with mutation of the tau gene on chromosome 17 in patients with ALZHEIMER DISEASE; DEMENTIA; PARKINSONIAN DISORDERS; progressive supranuclear palsy (SUPRANUCLEAR PALSY, PROGRESSIVE); and corticobasal degeneration.",
    "arabic_definition": "اعتلال الطوباوية هو أحد الأمراض التنكسية العصبية التي تتميز بتراكم بروتين تاو في التشابك العصبي في الدماغ البشرية. ينتج هذا التشابك من فرط فسفرة بروتين الأنابيب الدقيقة المعروفة باسم تاو، مما يتسبب في انفصال البروتين عن الأنابيب الدقيقة وتشكيل تجمعات غير قابلة للذوبان. (Tauopathies)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D024801.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperesthesia",
    "term_en": "Hyperesthesia",
    "term_ar": "فرط الإحساس",
    "synonyms": [
      "Hyperesthesias",
      "Hyperesthetic Sensations",
      "Hyperesthetic Sensation",
      "Sensation, Hyperesthetic",
      "Sensations, Hyperesthetic",
      "Oxyesthesia",
      "Oxyesthesias",
      "Hyperesthesia, Tactile"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Increased sensitivity to cutaneous stimulation due to a diminished threshold or an increased response to stimuli.",
    "arabic_definition": "فرط الإحساس (الإنجليزية: Hyperesthesia) هي حالة تنطوي على زيادة غير طبيعية في الحساسية للمؤثرات الحسية. «عندما يسبب حافز غير ضار الإحساس بالألم فإن المنطقة ستطلق عليها مفرطة الإحساس».",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006941.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperekplexia",
    "term_en": "Hyperekplexia",
    "term_ar": "داء الجفلان",
    "synonyms": [
      "Hyperekplexias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neurological disorder characterized by an excessive startle reaction with ABNORMAL REFLEX; MYOCLONIC JERKS; and MUSCLE HYPERTONIA.",
    "arabic_definition": "داء الجفلان أو فرط الإجفالية هو اضطراب عصبي نادر جدًا، يتميز تقليديًا باستجابة الفزع اللافتة للمنبهات اللمسية أو السمعية إلى جانب فرط التوتر. يظهر فرط التوتر في الجذع بشكل رئيسي، ويضعف أثناء النوم ويصبح أقل وضوحًا بعد عمر السنة. (Hyperekplexia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071017.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pneumocephalus",
    "term_en": "Pneumocephalus",
    "term_ar": "استرواح الرأس",
    "synonyms": [
      "Cranial Airocele",
      "Airocele, Cranial",
      "Airoceles, Cranial",
      "Cranial Airoceles",
      "Cranial Pneumocyst",
      "Cranial Pneumocysts",
      "Pneumocyst, Cranial",
      "Pneumocysts, Cranial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Presence of air or gas within the intracranial cavity (e.g., epidural space, subdural space, intracerebral, etc.) which may result from traumatic injuries, fistulous tract formation, erosions of the skull from NEOPLASMS or infection, NEUROSURGICAL PROCEDURES, and other conditions.",
    "arabic_definition": "استرواح الرَّأس هو وجود هواءٍ أو غازٍ في تجويف القحف. يرتبطُ عادةٍ بانفتاحٍ في الجمجمة؛ وذلك بعد إصابات الرأس والوجه، أو أورام قاعدة الجمجمة، بعد جراحة الأعصاب أو جراحة الأنف والأذن والحنجرة، ونادرًا ما يحدث تلقائيًا. (Pneumocephalus)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011007.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radiculopathy",
    "term_en": "Radiculopathy",
    "term_ar": "اعتلال الجذور",
    "synonyms": [
      "Radiculopathies",
      "Radiculitis",
      "Radiculitides",
      "Nerve Root Inflammation",
      "Inflammation, Nerve Root",
      "Nerve Root Inflammations",
      "Nerve Root Avulsion",
      "Avulsion, Nerve Root"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disease involving a spinal nerve root (see SPINAL NERVE ROOTS) which may result from compression related to INTERVERTEBRAL DISK DISPLACEMENT; SPINAL CORD INJURIES; SPINAL DISEASES; and other conditions. Clinical manifestations include radicular pain, weakness, and sensory loss referable to structures innervated by the involved nerve root.",
    "arabic_definition": "اعتلال الجذور (الإنجليزية: Radiculopathy) يشير إلى مجموعة من الظروف التي تتأثر واحد أو أكثر من الأعصاب لا تعمل بشكل سليم (الاعتلال العصبي). موقع الإصابة هو على مستوى جذر العصب.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011843.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sulfatidosis",
    "term_en": "Sulfatidosis",
    "term_ar": "داء الكبريتيدات",
    "synonyms": [
      "Sulfatidoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of inherited metabolic disorders characterized by the intralysosomal accumulation of sulfur-containing lipids (SULFATIDES), including SULFOGLYCOSPHINGOLIPIDS normally found in the MYELIN SHEATH of the brain. These disorders are caused by defective degradative enzymes leading to substrate accumulation (or storage).",
    "arabic_definition": "داء الكبريتيدات (الإنجليزية: Sulfatidosis) هو نوع من أنواع أمراض التخزين الليزوزومي ويعتبر من الأضطرابات الأيضية التي تحدث نتيجة تجمع الكبريتيدات داخل جسيمات الحال تحدث هذه الاضطرابات بسبب قصور وراثي في أنيزم السلفاتاز.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052516.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synesthesia",
    "term_en": "Synesthesia",
    "term_ar": "حس مرافق",
    "synonyms": [
      "Synesthesias",
      "Chromesthesia",
      "Chromesthesias",
      "Colored Hearing Synesthesia",
      "Colored Hearing Synesthesias",
      "Hearing Synesthesia, Colored",
      "Hearing Synesthesias, Colored",
      "Synesthesia, Colored Hearing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The experience of involuntary sensory cross activation where the presentation of a particular stimulus elicits a secondary sensory-perceptual experience. It most commonly occurs in the association of color with linguistic stimuli such as letters, numbers, words, or music, but can also occur between other senses. Although synesthesia can be acquired or transient due to trauma or drug use, there is also a strong genetic component, with a prevalence of about 1 in 2,000 individuals and a female to male ratio of 6:1.",
    "arabic_definition": "الحس المرافق أو المُتزامن أو تبادل الحواس أو التدبيح (الإنجليزية: Synesthesia) ظاهرة إدراكية يؤدي فيها تحفيز مسلك حسي أو إدراكي واحد إلى تجارب لا إرادية في مسلك حسي أو إدراكي ثانٍ. يُعرف الأشخاص الذين يبلغون عن مثل هذه التجارب طوال حياتهم باسم مرضى التصاحب الحسي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000080311.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypophysitis",
    "term_en": "Hypophysitis",
    "term_ar": "التهاب الغدة النخامية",
    "synonyms": [
      "Hypophysitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the PITUITARY GLAND.",
    "arabic_definition": "التهاب الغدة النخامية (الإنجليزية: Hypophysitis) هو التهاب الغدة النخامية ويضم الأنواع:",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000072659.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "allesthesia",
    "term_en": "Allesthesia",
    "term_ar": "حس نازح للمقابل",
    "synonyms": [
      "Allesthesias",
      "Allachesthesia",
      "Allachesthesias",
      "Alloesthesia",
      "Alloesthesias",
      "Allochiria",
      "Allochirias",
      "Dyschiria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neurological disorder in which a sensory stimulus, usually tactile but more rarely other sensory modalities, is misperceived in a location distant from the original stimulus.",
    "arabic_definition": "حِسٌّ نازِحٌ للمُقابِلِ (الإنجليزية: Allochiria) حرفيًا ألوكيريا هي اضطراب عصبي يستجيب فيه المريض للمنبهات في أحد جانبي الجسم على أنها قادمة من الجانب المقابل. ترتبط الحالة بعمليات النقل المكاني -التي تكون عادةً متناظرة- للمنبهات من أحد جانبي الجسم (أو من المكان) إلى الجانب المعاكس. (Allesthesia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D066190.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "down-syndrome",
    "term_en": "Down Syndrome",
    "term_ar": "متلازمة داون",
    "synonyms": [
      "Syndrome, Down",
      "Down's Syndrome",
      "Downs Syndrome",
      "Syndrome, Down's",
      "Mongolism",
      "Trisomy 21",
      "Trisomy G",
      "47,XX,+21"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chromosome disorder associated either with an extra CHROMOSOME 21 or an effective TRISOMY for chromosome 21. Clinical manifestations include HYPOTONIA, short stature, BRACHYCEPHALY, upslanting palpebral fissures, epicanthus, Brushfield spots on the iris, protruding tongue, small ears, short, broad hands, fifth finger clinodactyly, single transverse palmar crease, and moderate to severe INTELLECTUAL DISABILITY. Cardiac and gastrointestinal malformations, a marked increase in the incidence of LEUKEMIA, and the early onset of ALZHEIMER DISEASE are also associated with this condition. Pathologic features include the development of NEUROFIBRILLARY TANGLES in neurons and the deposition of AMYLOID BETA-PROTEIN, similar to the pathology of ALZHEIMER DISEASE. (Menkes, Textbook of Child Neurology, 5th ed, p213)",
    "arabic_definition": "مُتَلاَزِمَةُ داون أو تثلُّث الصبغي 21 أو داءُ داون هو اضطرابٌ جينيٌّ يسببه وجود صبغيّ جسديّ رقم 21 زائد في النواة. ترتبط متلازمة داون عادةً بتأخيرات في النمو الجسدي وإعاقة ذهنية خفيفة إلى متوسطة وملامح وجهية مميزة. (Down Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004314.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phenylketonurias",
    "term_en": "Phenylketonurias",
    "term_ar": "بيلة الفينيل كيتون",
    "synonyms": [
      "Phenylketonuria",
      "Phenylketonuria II",
      "Dihydropteridine Reductase Deficiency",
      "Deficiency, Dihydropteridine Reductase",
      "Quinoid Dihydropteridine Reductase Deficiency",
      "DHPR Deficiency",
      "Deficiency, DHPR",
      "PKU, Atypical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of autosomal recessive disorders marked by a deficiency of the hepatic enzyme PHENYLALANINE HYDROXYLASE or less frequently by reduced activity of DIHYDROPTERIDINE REDUCTASE (i.e., atypical phenylketonuria). Classical phenylketonuria is caused by a severe deficiency of phenylalanine hydroxylase and presents in infancy with developmental delay; SEIZURES; skin HYPOPIGMENTATION; ECZEMA; and demyelination in the central nervous system. (From Adams et al., Principles of Neurology, 6th ed, p952).",
    "arabic_definition": "بيلة الفينول كيتون أو البوال التخلفي أو الفينيل كيتونيوريا أو داء فولينغ (الإنجليزية: Phenylketonuria) هو حالة من حالات الاستقلاب الغذائي البيولوجي الوراثية، أي الأمراض ذات الخلل الوراثي في التمثيل الغذائي في الجسم. ويسمى أيضاً بالبيلة الفينولية. (Phenylketonurias)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010661.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adrenoleukodystrophy",
    "term_en": "Adrenoleukodystrophy",
    "term_ar": "سوء تغذية الكظرية وبيضاء الدماغ",
    "synonyms": [
      "Bronze Schilder Disease",
      "Melanodermic Leukodystrophy",
      "Leukodystrophies, Melanodermic",
      "Leukodystrophy, Melanodermic",
      "Siemerling-Creutzfeldt Disease",
      "Schilder-Addison Complex",
      "X-Linked Adrenoleukodystrophy",
      "Adrenoleukodystrophy, X-Linked"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An X-linked recessive disorder characterized by the accumulation of saturated very long chain fatty acids in the LYSOSOMES of ADRENAL CORTEX and the white matter of CENTRAL NERVOUS SYSTEM. This disease occurs almost exclusively in the males. Clinical features include the childhood onset of ATAXIA; NEUROBEHAVIORAL MANIFESTATIONS; HYPERPIGMENTATION; ADRENAL INSUFFICIENCY; SEIZURES; MUSCLE SPASTICITY; and DEMENTIA. The slowly progressive adult form is called adrenomyeloneuropathy. The defective gene ABCD1 is located at Xq28, and encodes the adrenoleukodystrophy protein (ATP-BINDING CASSETTE TRANSPORTERS).",
    "arabic_definition": "سوء التغذية الكظرية وبيضاء الدماغ (الإنجليزية: Adrenoleukodystrophy) أيضا معروف بسوء التغذية الكظري وبيضاء الدماغ - المرتبط بالكروموسوم x، هو اضطراب جيني ثانوي يؤدي إلى تراكم الأحماض الدهنية، الذي يأثر بالدرجة الأولى على القشرة الكظرية والجهاز العصبي. هذا المرض ينتج عن اختلال في الجسيم التأكسدي لأكسدة الحمض الدهني وتراكم سلسلة طويلة من الحمض الدهني (VLCFA) في جميع الأنسجة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000326.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rett-syndrome",
    "term_en": "Rett Syndrome",
    "term_ar": "متلازمة ريت",
    "synonyms": [
      "Syndrome, Rett",
      "Autism-Dementia-Ataxia-Loss of Purposeful Hand Use Syndrome",
      "Rett's Syndrome",
      "Retts Syndrome",
      "Syndrome, Rett's",
      "Rett Disorder",
      "Rett's Disorder",
      "Autism, Dementia, Ataxia, and Loss of Purposeful Hand Use"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inherited neurological developmental disorder that is associated with X-LINKED INHERITANCE and may be lethal in utero to hemizygous males. The affected female is normal until the age of 6-25 months when progressive loss of voluntary control of hand movements and communication skills; ATAXIA; SEIZURES; autistic behavior; intermittent HYPERVENTILATION; and HYPERAMMONEMIA appear. (From Menkes, Textbook of Child Neurology, 5th ed, p199)",
    "arabic_definition": "متلازمة ريت (الإنجليزية: Rett Syndrome)، مرض وراثي نادر يسبب اضطرابات شاملة في النمو ويؤثر بشدة على دماغ المصاب حيث يفقده القدرة علي الاحتفاظ بما اكتسبه وتعلمه من خبرات ومهارات كالسير والنطق، وكثيراً ما تصاحبها درجة من درجات التخلف العقلي بالإضافة إلي ما تسببه من إعاقات حركية أو إعاقة تواصل ونوبات صرعية. ويتعلق المرض بالتوحد.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015518.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brain-death",
    "term_en": "Brain Death",
    "term_ar": "موت دماغي",
    "synonyms": [
      "Death, Brain",
      "Coma Depasse",
      "Brain Dead",
      "Brain Deads",
      "Irreversible Coma",
      "Coma, Irreversible"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A state of prolonged irreversible cessation of all brain activity, including lower brain stem function with the complete absence of voluntary movements, responses to stimuli, brain stem reflexes, and spontaneous respirations. Reversible conditions which mimic this clinical state (e.g., sedative overdose, hypothermia, etc.) are excluded prior to making the determination of brain death. (From Adams et al., Principles of Neurology, 6th ed, pp348-9)",
    "arabic_definition": "الموت الدماغي (الإنجليزية: brain death) هو تعريف قانوني للموت وظهر في الستينيات من القرن العشرين نتيجة تطور إمكانيات الإنعاش في المحافظة على التهوية الدورة الدموية. التعريف المبسط للموت الدماغي هو التوقف اللامعكوس لكامل نشاط الدماغ، بما في ذلك قدرته على التحكم اللاإرادي بالوظائف الحيوية، نتيجة موت عصبونات الدماغ والقطع الرقبية العليا للنخاع؛ بسبب توقف الدورة الدموية والأكسجة، مع استمرار نشاط الدورة الدموية والتهوية بفضل التهوية الآلية المستمرة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001926.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroschistosomiasis",
    "term_en": "Neuroschistosomiasis",
    "term_ar": "داء البلهارسيات",
    "synonyms": [
      "Neuroschistosomiases",
      "Schistosomiasis, Central Nervous System",
      "Central Nervous System Schistosomiasis",
      "Schistosomal Myelopathy",
      "Myelopathies, Schistosomal",
      "Myelopathy, Schistosomal",
      "Schistosomal Myelopathies",
      "Schistosomal Myelitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "SCHISTOSOMIASIS of the brain, spinal cord, or meninges caused by infections with trematodes of the genus SCHISTOSOMA (primarily SCHISTOSOMA JAPONICUM; SCHISTOSOMA MANSONI; and SCHISTOSOMA HAEMATOBIUM in humans). S. japonicum infections of the nervous system may cause an acute meningoencephalitis or a chronic encephalopathy. S. mansoni and S. haematobium nervous system infections are associated with acute transverse myelitis involving the lower portions of the spinal cord. (From Joynt, Clinical Neurology, 1998, Ch27, pp61-2)",
    "arabic_definition": "داء البلهارسيات (الإنجليزية: schistosomiasis أو bilharziasis) أو داء المنشقات (كما يسمى خطأً بلهارسيا، وهو اسم الطفيلي المسببب) مرض طفيلي سببه ديدان البلهارسيات يصيب العديد من الناس في الدول النامية. لا يعد داء البلهارسيات مرضاً مميتاً، إلا أنه يؤدي إلى سرعة استهلاك جسد المصاب. (Neuroschistosomiasis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020818.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "holoprosencephaly",
    "term_en": "Holoprosencephaly",
    "term_ar": "اندماج مقدم الدماغ",
    "synonyms": [
      "Holoprosencephalies",
      "Arhinencephaly",
      "Arhinencephalies",
      "Alobar Holoprosencephaly",
      "Alobar Holoprosencephalies",
      "Holoprosencephalies, Alobar",
      "Holoprosencephaly, Alobar",
      "Holoprosencephaly, Familial Alobar"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anterior midline brain, cranial, and facial malformations resulting from the failure of the embryonic prosencephalon to undergo segmentation and cleavage. Alobar prosencephaly is the most severe form and features anophthalmia; cyclopia; severe INTELLECTUAL DISABILITY; CLEFT LIP; CLEFT PALATE; SEIZURES; and microcephaly. Semilobar holoprosencepaly is characterized by hypotelorism, microphthalmia, coloboma, nasal malformations, and variable degrees of INTELLECTUAL DISABILITY. Lobar holoprosencephaly is associated with mild (or absent) facial malformations and intellectual abilities that range from mild INTELLECTUAL DISABILITY to normal. Holoprosencephaly is associated with CHROMOSOME ABNORMALITIES.",
    "arabic_definition": "اندماج مقدم الدماغ هو أحد العيوب التي تحدث للجنين في المراحل الأولى من الحمل. يحدث عادةً بين اليوم الثامن عشر والثامن والعشرين من الحمل. (Holoprosencephaly)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016142.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phantom-limb",
    "term_en": "Phantom Limb",
    "term_ar": "وهم الأطراف",
    "synonyms": [
      "Limb, Phantom",
      "Limbs, Phantom",
      "Phantom Limbs",
      "Pseudomelia",
      "Pseudomelias",
      "Phantom Sensation",
      "Phantom Sensations",
      "Sensation, Phantom"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Perception of painful and nonpainful phantom sensations that occur following the complete or partial loss of a limb. The majority of individuals with an amputated extremity will experience the impression that the limb is still present, and in many cases, painful. (From Neurol Clin 1998 Nov;16(4):919-36; Brain 1998 Sep;121(Pt 9):1603-30)",
    "arabic_definition": "وهم الأطراف هو إحساس الذين بترت أو فقدت أطرافهم أن أطرافهم المبتورة أو المفقودة لا تزال تلتصق بالجسم وتتحرك بشكل مناسب مع أجزاء أخرى من الجسم. ما يقرب من 60 إلى 80% من الأفراد الذين بترت أو فقدت أطرافهم يحدث لهم هذا الوهم والغالبية العظمى من الأحاسيس التي يشعرون بها هي الألم. (Phantom Limb)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010591.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mononeuropathies",
    "term_en": "Mononeuropathies",
    "term_ar": "اعتلال الأعصاب المحيطية",
    "synonyms": [
      "Mononeuropathy",
      "Mononeuritis",
      "Mononeuritides",
      "Mononeuropathy Multiplex",
      "Mononeuropathy Multiplex Syndrome",
      "Mononeuropathy Multiplex Syndromes",
      "Syndrome, Mononeuropathy Multiplex",
      "Syndromes, Mononeuropathy Multiplex"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disease or trauma involving a single peripheral nerve in isolation, or out of proportion to evidence of diffuse peripheral nerve dysfunction. Mononeuropathy multiplex refers to a condition characterized by multiple isolated nerve injuries. Mononeuropathies may result from a wide variety of causes, including ISCHEMIA; traumatic injury; compression; CONNECTIVE TISSUE DISEASES; CUMULATIVE TRAUMA DISORDERS; and other conditions.",
    "arabic_definition": "اعتلال الأعصاب المحيطية (الإنجليزية: Peripheral neuropathy) هو ضرر أو مرض يؤثر على الأعصاب، خارج الدماغ والنخاع الشوكي. قد يؤدي تلف الأعصاب إلى مشاكل الحس، الحركة، وظيفة الغدد، أو وظيفة العضو اعتمادا على الألياف العصبية المتأثرة. (Mononeuropathies)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020422.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "encephalomyelitis",
    "term_en": "Encephalomyelitis",
    "term_ar": "التهاب الدماغ والنخاع الشوكي",
    "synonyms": [
      "Myeloencephalitis",
      "Myeloencephalitides",
      "Encephalomyelitis, Inflammatory",
      "Inflammatory Encephalomyelitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A general term indicating inflammation of the BRAIN and SPINAL CORD, often used to indicate an infectious process, but also applicable to a variety of autoimmune and toxic-metabolic conditions. There is significant overlap regarding the usage of this term and ENCEPHALITIS in the literature.",
    "arabic_definition": "التهاب الدماغ والنخاع الشوكي (الإنجليزية: Encephalomyelitis) وهو مُصطلح عام يُطلق على التهاب الدماغ والتهاب النُخاع الشوكي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004679.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polyneuropathies",
    "term_en": "Polyneuropathies",
    "term_ar": "اعتلال الأعصاب المتعدد",
    "synonyms": [
      "Polyneuropathy",
      "Polyneuropathy, Acquired",
      "Acquired Polyneuropathies",
      "Acquired Polyneuropathy",
      "Polyneuropathies, Acquired",
      "Polyneuropathy, Critical Illness",
      "Critical Illness Polyneuropathies",
      "Critical Illness Polyneuropathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases of multiple peripheral nerves simultaneously. Polyneuropathies usually are characterized by symmetrical, bilateral distal motor and sensory impairment with a graded increase in severity distally. The pathological processes affecting peripheral nerves include degeneration of the axon, myelin or both. The various forms of polyneuropathy are categorized by the type of nerve affected (e.g., sensory, motor, or autonomic), by the distribution of nerve injury (e.g., distal vs. proximal), by nerve component primarily affected (e.g., demyelinating vs. axonal), by etiology, or by pattern of inheritance.",
    "arabic_definition": "اعتلال الاعصاب المتعددة أو اعتلال الأعصاب المتناظر (الإنجليزية: Polyneuropathy) هو ضرر أو مرض يصيب الأعصاب الطرفية تقريبا في نفس المناطق على جانبي الجسم، ويضم الضعف، وخدر، وخزإبر، والألم. وهي تبدأ عادة في اليدين والقدمين، ويمكن التقدم إلى الذراعين والساقين. (Polyneuropathies)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011115.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "encephalomalacia",
    "term_en": "Encephalomalacia",
    "term_ar": "تلين الدماغ",
    "synonyms": [
      "Encephalomalacias",
      "Cerebromalacia",
      "Cerebromalacias",
      "Multicystic Encephalomalacia",
      "Encephalomalacias, Multicystic",
      "Multicystic Encephalomalacias",
      "Encephalomalacia, Multicystic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Softening or loss of brain tissue following CEREBRAL INFARCTION; cerebral ischemia (see BRAIN ISCHEMIA), infection, CRANIOCEREBRAL TRAUMA, or other injury. The term is often used during gross pathologic inspection to describe blurred cortical margins and decreased consistency of brain tissue following infarction. Multicystic encephalomalacia refers to the formation of multiple cystic cavities of various sizes in the cerebral cortex of neonates and infants following injury, most notably perinatal hypoxia-ischemic events. (From Davis et al., Textbook of Neuropathology, 2nd ed, p665; J Neuropathol Exp Neurol, 1995 Mar;54(2):268-75)",
    "arabic_definition": "تلين الدماغ (الإنجليزية: Cerebral softening) هو تَليُن موضعي يحدُث في المُخ، ينجُم عن النزف أو الالتهاب. هناك ثلاثة أنواع يتم تصنيفها من خلال اللون وتُمثل ثلاث مراحل من العملية المرضية تُعرف بالتليُن الأحمر والأصفر والأبيض على التوالي. (Encephalomalacia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004678.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurolymphomatosis",
    "term_en": "Neurolymphomatosis",
    "term_ar": "مرض ماريك",
    "synonyms": [
      "Neurolymphomatoses",
      "Primary Neurolymphomatosis",
      "Neurolymphomatoses, Primary",
      "Neurolymphomatosis, Primary",
      "Primary Neurolymphomatoses",
      "Marek's disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infiltration of the nervous system by malignant lymphoma cells.",
    "arabic_definition": "مرض ماريك، هو مرض ورمي فيروسي شديد العدوى بين الدجاج. سُمِّيَ المرض على اسم جوزيف ماريك، وهو طبيب بيطري مجري. (Neurolymphomatosis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077162.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroacanthocytosis",
    "term_en": "Neuroacanthocytosis",
    "term_ar": "داء الكريات الشائكة العصبي",
    "synonyms": [
      "Chorea Acanthocytosis",
      "Acanthocytoses, Chorea",
      "Acanthocytosis, Chorea",
      "Chorea Acanthocytoses",
      "Chorea Acanthocytosis Syndrome",
      "Chorea Acanthocytosis Syndromes",
      "Choreoacanthocytosis",
      "Choreoacanthocytoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inherited autosomal disorder that is characterized by neurodegeneration; orofacial and buccal DYSKINESIAS; CHOREA; and thorny-looking red cells (ACANTHOCYTES). This disorder is due to mutations of chorein which is important in protein trafficking and is encoded by Vps13a on chromosome 9q21.",
    "arabic_definition": "داء الكريات الشائكة العصبي أو داءُ وُجُود خلايا الدم الشَّائِكَةِ العَصَبي فِي الدَّم أو داء المشوكات العصبي هو تسمية تطلق على العديد من الحالات العصبية الوراثية التي يحتوي فيها الدم على خلايا دم حمراء مشوهة وشوكية الشكل تسمى الكريات الشائكة. الاضطرابات العصبية الرئيسية بحيث الكريات الشائكة تمثل خاصية نموذجية هي الرَقَص ومتلازمة ماكليود. (Neuroacanthocytosis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054546.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meningoencephalitis",
    "term_en": "Meningoencephalitis",
    "term_ar": "التهاب السحايا والدماغ",
    "synonyms": [
      "Meningoencephalitides",
      "Encephalomeningitis",
      "Encephalomeningitides",
      "Cerebromeningitis",
      "Cerebromeningitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inflammatory process involving the brain (ENCEPHALITIS) and meninges (MENINGITIS), most often produced by pathogenic organisms which invade the central nervous system, and occasionally by toxins, autoimmune disorders, and other conditions.",
    "arabic_definition": "التهاب السحايا والدماغ (الإنجليزية: Meningoencephalitis) هوَ مرض يُشبه التهاب السحايا وَالتهاب الدماغ في آنٍ واحد.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008590.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperpituitarism",
    "term_en": "Hyperpituitarism",
    "term_ar": "فرط النخامية",
    "synonyms": [
      "Pituitary FSH Hypersecretion",
      "FSH Hypersecretion, Pituitary",
      "Hypersecretion, Pituitary FSH",
      "Follicle Stimulating Hormone, Inappropriate Secretion",
      "Inappropriate Follicle Stimulating Hormone Secretion",
      "Inappropriate FSH Secretion Syndrome",
      "Pituitary LH Hypersecretion",
      "Hypersecretion, Pituitary LH"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disease of the glandular, anterior portion of the pituitary (PITUITARY GLAND, ANTERIOR) resulting in hypersecretion of ADENOHYPOPHYSEAL HORMONES such as GROWTH HORMONE; PROLACTIN; THYROTROPIN; LUTEINIZING HORMONE; FOLLICLE STIMULATING HORMONE ; and ADRENOCORTICOTROPIC HORMONE. Hyperpituitarism usually is caused by a functional ADENOMA.",
    "arabic_definition": "فرط النخامية هي حالة بسبب فرط إفراز هرمونات الغدة النخامية، وعادة ما ينتج عن الورم الحميد النخامي. الأطفال الذين يعانون من فرط نشاط الغدد النكافية أمر نادر الحدوث، وتعطل تنظيم النمو، إما بسبب فرط هرمون فرط أو بسبب المظاهر الناجمة عن الضغط المحلي للورم الغدي يمكن أن يحدث. (Hyperpituitarism)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006964.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurocysticercosis",
    "term_en": "Neurocysticercosis",
    "term_ar": "داء الكيسات المذنبة العصبي",
    "synonyms": [
      "Neurocysticercoses",
      "Neurocoenurosis",
      "Neurocoenuroses",
      "Cerebral Coenurosis",
      "Cerebral Coenuroses",
      "Coenurosis, Cerebral",
      "Cerebral Cysticercosis",
      "Cerebral Cysticercoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection of the brain, spinal cord, or perimeningeal structures with the larval forms of the genus TAENIA (primarily T. solium in humans). Lesions formed by the organism are referred to as cysticerci. The infection may be subacute or chronic, and the severity of symptoms depends on the severity of the host immune response and the location and number of lesions. SEIZURES represent the most common clinical manifestation although focal neurologic deficits may occur. (From Joynt, Clinical Neurology, 1998, Ch27, pp46-50)",
    "arabic_definition": "داء الكيسات المذنَّبة العصبي هو نوعٌ خاصٌ من داء الكيسات المذنَّبة الذي يحدثُ بسبب عدوًى بالشريطية الوحيدة، وهي شريطيةٌ حقيقيةٌ تُوجد في الخنازير. يحدثُ داء الكيسات المذنَّبة العصبي عندما تتشكل كيساتٌ بسبب عدوًى تحدث في الدماغ، مسببةً لمتلازماتٍ عصبيةٍ مثل النوبات الصرعيّة، حيث يُعد سببًا شائعًا عالميًا لحدوث النوبات. (Neurocysticercosis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020019.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemimegalencephaly",
    "term_en": "Hemimegalencephaly",
    "term_ar": "تضخم الدماغ الشقي",
    "synonyms": [
      "Hemimegalencephalies",
      "Unilateral Megalencephaly",
      "Megalencephalies, Unilateral",
      "Megalencephaly, Unilateral",
      "Unilateral Megalencephalies",
      "Unilateral Macrocephaly",
      "Macrocephalies, Unilateral",
      "Macrocephaly, Unilateral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare MALFORMATIONS OF CORTICAL DEVELOPMENT, GROUP I characterized by the enlargement of one side of the brain. It is associated with seizures, partial paralysis, and mental retardation.",
    "arabic_definition": "يُعد تضخم الدماغ الشقي اضطرابًا خلقيًا نادرًا يصيب كل أو جزء من نصف الكرة المخية. يسبب نوبات صرعية شديدة، غالبًا ما تكون متكررة ويصعب السيطرة عليها. (Hemimegalencephaly)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065705.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "optic-atrophy",
    "term_en": "Optic Atrophy",
    "term_ar": "اعتلال عصبي بصري",
    "synonyms": [
      "Atrophy, Optic",
      "Optic neuropathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Atrophy of the optic disk which may be congenital or acquired. This condition indicates a deficiency in the number of nerve fibers which arise in the RETINA and converge to form the OPTIC DISK; OPTIC NERVE; OPTIC CHIASM; and optic tracts. GLAUCOMA; ISCHEMIA; inflammation, a chronic elevation of intracranial pressure, toxins, optic nerve compression, and inherited conditions (see OPTIC ATROPHIES, HEREDITARY) are relatively common causes of this condition.",
    "arabic_definition": "الاعتلال العصبي البصري (الإنجليزية: Optic neuropathy) يشير إلى ضرر في العصب البصري ولأي سبب. تضرر أو موت الخلايا العصبية أو عصبون يؤدي إلى الصفات المميزة للاعتلال العصبي البصري. (Optic Atrophy)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009896.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerebral-palsy",
    "term_en": "Cerebral Palsy",
    "term_ar": "شلل دماغي",
    "synonyms": [
      "CP (Cerebral Palsy)",
      "Little Disease",
      "Diplegia, Spastic",
      "Little's Disease",
      "Spastic Diplegia",
      "Diplegias, Spastic",
      "Spastic Diplegias",
      "Cerebral Palsy, Atonic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A heterogeneous group of nonprogressive motor disorders caused by chronic brain injuries that originate in the prenatal period, perinatal period, or first few years of life. The four major subtypes are spastic, athetoid, ataxic, and mixed cerebral palsy, with spastic forms being the most common. The motor disorder may range from difficulties with fine motor control to severe spasticity (see MUSCLE SPASTICITY) in all limbs. Spastic diplegia (Little disease) is the most common subtype, and is characterized by spasticity that is more prominent in the legs than in the arms. Pathologically, this condition may be associated with LEUKOMALACIA, PERIVENTRICULAR. (From Dev Med Child Neurol 1998 Aug;40(8):520-7)",
    "arabic_definition": "الشلل الدماغي أو الشلل المخي (الإنجليزية: Cerebral palsy) هو مصطلح جامع يشمل مجموعة من الأمراض غير المعدية والتي تسبب اعاقة بدنية تطور الإنسان. الشلل الدماغي (CP) هو مصطلح شامل يتضمن مجموعة من الحالات المرضية الحركية التي لا تتدهور وغير المعدية والتي تسبب عجز جسدي أثناء نمو الإنسان، وذلك في أجزاء مختلفة من الجسم مرتبطة بأداء الوظائف الحركية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002547.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "canavan-disease",
    "term_en": "Canavan Disease",
    "term_ar": "داء كانافان",
    "synonyms": [
      "Disease, Canavan",
      "Leukodystrophy, Spongiform",
      "Spongiform Leukodystrophy",
      "Spongy Disease of White Matter",
      "Spongy Degeneration of Infancy",
      "Von Bogaert-Bertrand Disease",
      "Disease, Von Bogaert-Bertrand",
      "Spongy Degeneration of the Central Nervous System"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare neurodegenerative condition of infancy or childhood characterized by white matter vacuolization and demeylination that gives rise to a spongy appearance. Aspartoacylase deficiency leads to an accumulation of N-acetylaspartate in astrocytes. Inheritance may be autosomal recessive or the illness may occur sporadically. This illness occurs more frequently in individuals of Ashkenazic Jewish descent. The neonatal form features the onset of hypotonia and lethargy at birth, rapidly progressing to coma and death. The infantile form features developmental delay, DYSKINESIAS, hypotonia, spasticity, blindness, and megalencephaly. The juvenile form is characterized by ATAXIA; OPTIC ATROPHY; and DEMENTIA. (From Adams et al., Principles of Neurology, 6th ed, p944; Am J Med Genet 1988 Feb;29(2):463-71)",
    "arabic_definition": "داء كانافان (الإنجليزية: Canavan disease) مرض صبغي جسدي متنحي من الأمراض التنكسية التي تسبب ضموراَ يُتلف الخلايا العصبية في الدماغ. يعتبر أيضا واحد من الأمراض الدماغية التنكسية الشائعة التي تصيب الرضع.ينتج هذا المرض نتيجة النقص في انزيم امينو اسيلاز2 وهو واحد من مجموعة من الأمراض الوراثية التي يشار إليها بمرض حتل المادة البيضاء.يمتاز هذا المرض بانتكاس الميالين في الطبقة الشحمية الفسفورية التي تعزل محوار العصبون، ويرتبط هذا المرض بجين موجود في صبغ 17 في جسم الإنسان.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017825.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "viral-meningitis",
    "term_en": "Viral Meningitis",
    "term_ar": "التهاب السحايا الفيروسي",
    "synonyms": [
      "Meningitides, Viral",
      "Viral Meningitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Viral infections of the leptomeninges and subarachnoid space. TOGAVIRIDAE INFECTIONS; FLAVIVIRIDAE INFECTIONS; RUBELLA; BUNYAVIRIDAE INFECTIONS; ORBIVIRUS infections; PICORNAVIRIDAE INFECTIONS; ORTHOMYXOVIRIDAE INFECTIONS; RHABDOVIRIDAE INFECTIONS; ARENAVIRIDAE INFECTIONS; HERPESVIRIDAE INFECTIONS; ADENOVIRIDAE INFECTIONS; JC VIRUS infections; and RETROVIRIDAE INFECTIONS may cause this form of meningitis. Clinical manifestations include fever, headache, neck pain, vomiting, PHOTOPHOBIA, and signs of meningeal irritation. (From Joynt, Clinical Neurology, 1996, Ch26, pp1-3)",
    "arabic_definition": "التهاب السحايا الفيروسي (الإنجليزية: Viral meningitis) هو التهاب للأغشية الدماغية المغلفة للدماغ والنخاع الشوكي، المعروفة باسم السحايا تسببها عدوى فيروسية. ويسمى أيضا التهاب السحايا العقيم كما أنها تندرج تحت التهاب السحايا الليمفاوي المشيمي نظراً لنتائج فحص السائل النخاعي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008587.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mobius-syndrome",
    "term_en": "Mobius Syndrome",
    "term_ar": "متلازمة موبيوس",
    "synonyms": [
      "Mobius Syndromes",
      "Moebius Spectrum",
      "Möbius Sequence",
      "Moebius Syndrome",
      "Moebius Syndromes",
      "Congenital Oculofacial Paralysis, Moebius",
      "Moebius Congenital Oculofacial Paralysis",
      "Moebius Sequence"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome of congenital facial paralysis, frequently associated with abducens palsy and other congenital abnormalities including lingual palsy, clubfeet, brachial disorders, cognitive deficits, and pectoral muscle defects. Pathologic findings are variable and include brain stem nuclear aplasia, facial nerve aplasia, and facial muscle aplasia, consistent with a multifactorial etiology. (Adams et al., Principles of Neurology, 6th ed, p1020)",
    "arabic_definition": "متلازمة موبيوس (الإنجليزية: Möbius syndrome) هو اضطراب عصبي خلقي ومرض نادر للغاية ويتميز بشلل في عضلات الوجه وعدم القدرة على تحريك العينين من جهة إلى أخرى. يولد معظم المصابون بمتلازمة «موبيوس» بشلل في الوجه بشكل كامل، ولا يمكنهم إغلاق أعينهم أو التحكم في تعابير وجههم، ويمكن أن تحدث لهم تشوهات على مستوى الأطراف وجدار الصدر. (Mobius Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020331.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prion-diseases",
    "term_en": "Prion Diseases",
    "term_ar": "اعتلال دماغي إسفنجي قابل للانتقال",
    "synonyms": [
      "Dementias, Transmissible",
      "Dementia, Transmissible",
      "Transmissible Dementia",
      "Transmissible Dementias",
      "Encephalopathies, Spongiform, Transmissible",
      "Prion Protein Diseases",
      "Prion Protein Disease",
      "Prion-Induced Disorder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of genetic, infectious, or sporadic degenerative human and animal nervous system disorders associated with abnormal PRIONS. These diseases are characterized by conversion of the normal prion protein to an abnormal configuration via a post-translational process. In humans, these conditions generally feature DEMENTIA; ATAXIA; and a fatal outcome. Pathologic features include a spongiform encephalopathy without evidence of inflammation. The older literature occasionally refers to these as unconventional SLOW VIRUS DISEASES. (From Proc Natl Acad Sci USA 1998 Nov 10;95(23):13363-83)",
    "arabic_definition": "اعتلالات الدماغ الإسفنجية المعدية (Transmissible spongiform encephalopathies) (TSEs)، والمعروفة أيضًا باسم الأمراض البريونية، هي مجموعة من الحالات المتقدمة (اعتلالات دماغية) تؤثر على الدماغ والجهاز العصبي للعديد من الحيوانات، بما في ذلك الإنسان بسبب تطابق الحمض النووي الريبوزي منقوص الأكسجين (DNA). ووفقًا للفرضية الأوسع انتشارًا، فإن هذه الأمراض تنتقل عبر البريونات، إلا أن بعض البيانات الأخرى تشير إلى تدخل عدوى بكتيريا سبيروبلازما (Spiroplasma). (Prion Diseases)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017096.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sleep-paralysis",
    "term_en": "Sleep Paralysis",
    "term_ar": "شلل النوم",
    "synonyms": [
      "Paralysis, Sleep"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A common condition characterized by transient partial or total paralysis of skeletal muscles and areflexia that occurs upon awakening from sleep or less often while falling asleep. Stimuli such as touch or sound may terminate the episode, which usually has a duration of seconds to minutes. This condition may occur in normal subjects or be associated with NARCOLEPSY; CATAPLEXY; and hypnagogic HALLUCINATIONS. The pathophysiology of this condition is closely related to the normal hypotonia that occur during REM sleep. (From Adv Neurol 1995;67:245-271)",
    "arabic_definition": "شلل النوم (الإنجليزية: sleep paralysis) حالة التي تحدث أثناء الاستيقاظ أو النوم، يكون الشخص واعيا ولكن غير قادر على التحرك أو الكلام. خلال النوبة، قد يصاب الفرد بالهلوسة (سماع، الشعور بـ، أو رؤية أشياء غير موجودة)، والذي غالبا ما يؤدي إلى الخوف.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020188.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brain-injuries",
    "term_en": "Brain Injuries",
    "term_ar": "تلف الدماغ",
    "synonyms": [
      "Injuries, Brain",
      "Brain Injury",
      "Injury, Brain",
      "Injuries, Acute Brain",
      "Acute Brain Injuries",
      "Acute Brain Injury",
      "Brain Injury, Acute",
      "Injury, Acute Brain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute and chronic injuries to the brain, including the cerebral hemispheres, CEREBELLUM, and BRAIN STEM. Clinical manifestations depend on the nature of injury. Diffuse trauma to the brain is frequently associated with DIFFUSE AXONAL INJURY or COMA, POST-TRAUMATIC. Localized injuries may be associated with NEUROBEHAVIORAL MANIFESTATIONS; HEMIPARESIS, or other focal neurologic deficits.",
    "arabic_definition": "تلف الدماغ (Brain damage) أو «إصابة الدماغ» (BI) هو تدمير خلايا المخ أو تدهورها. تحدث إصابات الدماغ نتيجة لمجموعة كبيرة من العوامل الداخلية والخارجية. (Brain Injuries)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001930.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cluster-headache",
    "term_en": "Cluster Headache",
    "term_ar": "صداع عنقودي",
    "synonyms": [
      "Cluster Headaches",
      "Headaches, Cluster",
      "Horton's Syndrome",
      "Hortons Syndrome",
      "Syndrome, Horton's",
      "Neuralgic Migraine",
      "Migraine, Neuralgic",
      "Migraines, Neuralgic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A primary headache disorder that is characterized by severe, strictly unilateral PAIN which is orbital, supraorbital, temporal or in any combination of these sites, lasting 15-180 min. occurring 1 to 8 times a day. The attacks are associated with one or more of the following, all of which are ipsilateral: conjunctival injection, lacrimation, nasal congestion, rhinorrhea, facial SWEATING, eyelid EDEMA, and miosis. (International Classification of Headache Disorders, 2nd ed. Cephalalgia 2004: suppl 1)",
    "arabic_definition": "الصداع العنقودي (اختصارًا CH) هو اضطراب عصبي يميّز من خلال حدوث صداع قوي ومتكرر على جانب واحد من الرأس، ونمطياً حول العين. هناك عادة أعراض منفردة مصاحبة للصداع مثل تدمّع العينين واحتقان الأنف وحدوث انتفاخ منطقة العين وما حولها، بحيث بكون الألم مغطياً حتى جانب الرأس. (Cluster Headache)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003027.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tabes-dorsalis",
    "term_en": "Tabes Dorsalis",
    "term_ar": "تابس ظهري",
    "synonyms": [
      "Tabes Spinalis",
      "Spinalis, Tabes",
      "Tabetic Neurosyphilis",
      "Neurosyphilis, Tabetic",
      "Locomotor Ataxia",
      "Ataxia, Locomotor",
      "Ataxias, Locomotor",
      "Locomotor Ataxias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Parenchymatous NEUROSYPHILIS marked by slowly progressive degeneration of the posterior columns, posterior roots, and ganglia of the spinal cord. The condition tends to present 15 to 20 years after the initial infection and is characterized by lightening-like pains in the lower extremities, URINARY INCONTINENCE; ATAXIA; severely impaired position and vibratory sense, abnormal gait (see GAIT DISORDERS, NEUROLOGIC), OPTIC ATROPHY; Argyll-Robertson pupils, hypotonia, hyperreflexia, and trophic joint degeneration (Charcot's Joint; see ARTHROPATHY, NEUROGENIC). (From Adams et al., Principles of Neurology, 6th ed, p726)",
    "arabic_definition": "التابس الظهري أو المعروف أيضًا باسم اختلاج النخاع الزهري ، هو تآكل وتدمير بطيء (تحديدًا، إزالة الميالين) من الخلايا العصبية في الجزء الخلفي من المادة البيضاء في النخاع الشوكي (الجزء الأقرب إلى الجزء الخلفي من الجسم)، وأيضاً جذور الأعصاب الظهرية. وتساعد هذه الأعصاب عادةً في الحفاظ على إحساس الشخص بالمكان (الاستقبال الحسي العميق)، والاهتزاز، والتمييز بين نقطتين. (Tabes Dorsalis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013606.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gaucher-disease",
    "term_en": "Gaucher Disease",
    "term_ar": "داء غوشيه",
    "synonyms": [
      "Disease, Gaucher",
      "Acid beta-Glucosidase Deficiency Disease",
      "Acid beta-Glucosidase Deficiency",
      "Glucocerebrosidase Deficiency",
      "Deficiencies, Glucocerebrosidase",
      "Deficiency, Glucocerebrosidase",
      "Glucocerebrosidase Deficiencies",
      "Gaucher's Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive disorder caused by a deficiency of acid beta-glucosidase (GLUCOSYLCERAMIDASE) leading to intralysosomal accumulation of glycosylceramide mainly in cells of the MONONUCLEAR PHAGOCYTE SYSTEM. The characteristic Gaucher cells, glycosphingolipid-filled HISTIOCYTES, displace normal cells in BONE MARROW and visceral organs causing skeletal deterioration, hepatosplenomegaly, and organ dysfunction. There are several subtypes based on the presence and severity of neurological involvement.",
    "arabic_definition": "داء غوشيه أو الشحام الغلوكوزيل سيراميدي هو مرض وراثي جسمي متنح تتراكم فيه المادة الدهنية (الدهون) في الخلايا وأجهزة معينة. داء غوشيه هو الأكثر شيوعًا من أمراض التخزين الليزوزومية. (Gaucher Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005776.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hartnup-disease",
    "term_en": "Hartnup Disease",
    "term_ar": "داء هارتنب",
    "synonyms": [
      "Transport Disorder, Neutral Amino Acid",
      "Neutral Amino Acid Transport Defect",
      "Transport Disorder, Neutral Amino Acids",
      "Hartnup Disorder",
      "Amino Acid Transport Disorder, Neutral",
      "Neutral Amino Acid Transport Disorder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive disorder due to defective absorption of NEUTRAL AMINO ACIDS by both the intestine and the PROXIMAL RENAL TUBULES. The abnormal urinary loss of TRYPTOPHAN, a precursor of NIACIN, leads to a NICOTINAMIDE deficiency, PELLAGRA-like light-sensitive rash, CEREBELLAR ATAXIA, emotional instability, and aminoaciduria. Mutations involve the neurotransmitter transporter gene SLC6A19.",
    "arabic_definition": "داءُ هارتنَب (الإنجليزية: Hartnup disease) (المعروف أيضاً باسم «الالتهاب الجلدي الشبيه بالبلاغرا» أو«اضطراب هارتناب») هو مرض وراثي مُتنحٍّ يتمثل باضطراب أيضيّ يؤثر على امتصاص الأحماض الأمينية غير القطبية (خصوصاً التريبتوفان الذي من الممكن أن يتحول إلى سيروتونين، وَميلاتونين، وَنياسين)، وَيُعتبر النياسين هو العنصر الأولي لـنيكوتيناميد، الذي يعتبر بدوره مكوّن ضروري من مكونات ثنائي نوكليوتيد الأدنين وأميد النيكوتين NAD+. يقع الجين المسبب للمرض -المسمى SLC6A19- على الكروموسوم الخامس..وسمي على اسم العائلة الإنجليزية، هارتناب، التي عانت من هذا المرض.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006250.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "essential-tremor",
    "term_en": "Essential Tremor",
    "term_ar": "رعاش مجهول السبب",
    "synonyms": [
      "Essential Tremors",
      "Tremor, Essential",
      "Tremors, Essential",
      "Benign Essential Tremor",
      "Benign Essential Tremors",
      "Essential Tremor, Benign",
      "Essential Tremors, Benign",
      "Tremor, Benign Essential"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A relatively common disorder characterized by a fairly specific pattern of tremors which are most prominent in the upper extremities and neck, inducing titubations of the head. The tremor is usually mild, but when severe may be disabling. An autosomal dominant pattern of inheritance may occur in some families (i.e., familial tremor). (Mov Disord 1988;13(1):5-10)",
    "arabic_definition": "رعاش مجهول السبب (ويشار اليه أيضا بالرعاش الحميد أو العائلي أو بمتلازمة اليد المهتزة). وهو اضطراب الحركة الأكثر شيوعا وأسبابه غير معروفة. (Essential Tremor)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020329.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tay-sachs-disease",
    "term_en": "Tay-Sachs Disease",
    "term_ar": "داء تاي ساكس",
    "synonyms": [
      "Gangliosidosis G(M2), Type I",
      "Gangliosidosis GM2, Type I",
      "GM2 Gangliosidosis, Type I",
      "Hexosaminidase A Deficiency Disease",
      "Deficiency Disease Hexosaminidase A",
      "Tay-Sachs Disease, B Variant",
      "GM2 Gangliosidosis, B Variant",
      "Gangliosidosis GM2, B Variant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive neurodegenerative disorder characterized by the onset in infancy of an exaggerated startle response, followed by paralysis, dementia, and blindness. It is caused by mutation in the alpha subunit of the HEXOSAMINIDASE A resulting in lipid-laden ganglion cells. It is also known as the B variant (with increased HEXOSAMINIDASE B but absence of hexosaminidase A) and is strongly associated with Ashkenazic Jewish ancestry.",
    "arabic_definition": "داء تاي ساكس (الإنجليزية: Tay–Sachs disease)هو مرض وراثي جسمي متنحٍ نادر يؤدي إلى تلف الخلايا العصبية في الدماغ والنخاع الشوكي. يُسمى النوع الأكثر شيوعًا منه داء تاي ساكس الطفلي الذي تصبح أعراضه واضحة في عمر 3-6 أشهر عندما يفقد الطفل قدرته على الجلوس أو الزحف، يتلو ذلك نوباتٍ اختلاجية وفقدان سمع ونقص شديد في القدرة على الحركة، وتحدث الوفاة عادة في مرحلة الطفولة المبكرة. (Tay-Sachs Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013661.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tourette-syndrome",
    "term_en": "Tourette Syndrome",
    "term_ar": "متلازمة توريت",
    "synonyms": [
      "Syndrome, Tourette",
      "Tic Disorder, Combined Vocal and Multiple Motor",
      "Tourette Disease",
      "Tourette Disorder",
      "Tourette's Disease",
      "Tourettes Disease",
      "Tourette's Disorder",
      "Tourettes Disorder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neuropsychological disorder related to alterations in DOPAMINE metabolism and neurotransmission involving frontal-subcortical neuronal circuits. Both multiple motor and one or more vocal tics need to be present with TICS occurring many times a day, nearly daily, over a period of more than one year. The onset is before age 18 and the disturbance is not due to direct physiological effects of a substance or another medical condition. The disturbance causes marked distress or significant impairment in social, occupational, or other important areas of functioning. (From DSM-IV, 1994; Neurol Clin 1997 May;15(2):357-79)",
    "arabic_definition": "متلازمة توريت (الإنجليزية: Tourette syndrome) هي عبارة عن خلل عصبي وراثي يظهر منذ الطفولة المبكرة، تظهر أعراضه على شكل حركات عصبية لاإرادية متلازمة يصحبها متلازمات صوتية متكررة، ويمكن أن يتم قمع هذه التشنجات اللاإرادية، التي تزداد وتتضاءل، بشكل مؤقت، وعادة ما يسبقها إحساس غير مرغوب فيه في العضلات المتأثرة. ومن الحركات اللاإرادية المتكررة الشائعة هي إمض العين، والسعال، وتطهير الحلق، وحركات الوجه.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005879.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arsenic-poisoning",
    "term_en": "Arsenic Poisoning",
    "term_ar": "تسمم بالزرنيخ",
    "synonyms": [
      "Arsenic Poisonings",
      "Poisoning, Arsenic",
      "Poisonings, Arsenic",
      "Arsenic Poisoning, Nervous System",
      "Nervous System Poisoning, Arsenic",
      "Neurotoxicity Syndrome, Arsenical",
      "Arsenical Neurotoxicity Syndrome",
      "Arsenical Neurotoxicity Syndromes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorders associated with acute or chronic exposure to compounds containing ARSENIC (ARSENICALS) which may be fatal. Acute oral ingestion is associated with gastrointestinal symptoms and an encephalopathy which may manifest as SEIZURES, mental status changes, and COMA. Chronic exposure is associated with mucosal irritation, desquamating rash, myalgias, peripheral neuropathy, and white transverse (Mees) lines in the fingernails. (Adams et al., Principles of Neurology, 6th ed, p1212)",
    "arabic_definition": "التسمم بالزرنيخ هي حالة طبية سببها ارتفاع مستويات الزرنيخ في الجسم. في حالة حدوث التسمم بالزرنيخ، يمكن أن تشمل الأعراض التقيؤ، آلام في البطن، التهاب الدماغ، الإسهال الذي يحتوي الدم، ويمكن أن تتطور الأعراض لاحقاً لتشمل: السرطان، فرط التصبغ، أمراض القلب، التنميل. (Arsenic Poisoning)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "williams-syndrome",
    "term_en": "Williams Syndrome",
    "term_ar": "متلازمة وليم",
    "synonyms": [
      "Syndrome, Williams",
      "Hypercalcemia-Supravalvar Aortic Stenosis",
      "Aortic Stenoses, Hypercalcemia-Supravalvar",
      "Aortic Stenosis, Hypercalcemia-Supravalvar",
      "Hypercalcemia-Supravalvar Aortic Stenoses",
      "Stenoses, Hypercalcemia-Supravalvar Aortic",
      "Stenosis, Hypercalcemia-Supravalvar Aortic",
      "Supravalvar Aortic Stenosis Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder caused by hemizygous microdeletion of about 28 genes on chromosome 7q11.23, including the ELASTIN gene. Clinical manifestations include SUPRAVALVULAR AORTIC STENOSIS; MENTAL RETARDATION; elfin facies; impaired visuospatial constructive abilities; and transient HYPERCALCEMIA in infancy. The condition affects both sexes, with onset at birth or in early infancy.",
    "arabic_definition": "متلازمة ويليام (الإنجليزية: Williams syndrome) هو اضطراب نادر يصيب الاجهزة المسؤولة عن النمو العصبي، يتميز بتغيرات في شكل الوجه مثل انخفاض جسر الأنف، وتصاحب الحالة سلوك نفسي غير عادي مثل الفرح الدائم وتقبل الجميع عند المصاب؛ إلى جانب تأخر في النمو، ومشاكل القلب والأوعية الدموية، مثل تضيق الأبهر، اكتشف هذه المتلازمة الطبيب النيوزلاندي وليام (JCP) مع عدد من زملائه، في عام 1961, ومن هنا جائت تسمية المرض. وأول ما كشفت عند أربعة أطفال ليس بينهم أي صلة قرابة وكانوا يشكون من سحنة خاصة أي ملامح وجه مميزة وتأخر عقلي وتضيق في منطقة ما فوق الدسام الابهري للقلب وبعض الحالات ترافقت مع ارتفاع في كلس الدم.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018980.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vascular-dementia",
    "term_en": "Vascular Dementia",
    "term_ar": "خرف وعائي",
    "synonyms": [
      "Dementias, Vascular",
      "Vascular Dementias",
      "Arteriosclerotic Dementia",
      "Arteriosclerotic Dementias",
      "Dementia, Arteriosclerotic",
      "Dementias, Arteriosclerotic",
      "Binswanger Disease",
      "Disease, Binswanger"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An imprecise term referring to dementia associated with CEREBROVASCULAR DISORDERS, including CEREBRAL INFARCTION (single or multiple), and conditions associated with chronic BRAIN ISCHEMIA. Diffuse, cortical, and subcortical subtypes have been described. (From Gerontol Geriatr 1998 Feb;31(1):36-44)",
    "arabic_definition": "الخَرَف الوِعَائِي أو كما يُعرف بالانسداد الوعائي (MID) أو ضعف الإدراك الوعائي (VCI) هو خرف يحصل بسبب مشاكل في الأوعية الدموية التي تزود الدماغ بالدم، عادة يكون كسلسلة من السكتات الدماغية الثانوية التي تؤدي إلى قلة الإدراك تدريجيًّا. الخرَف الوعائي هو ثاني أكثر أمراض الخرَف شيوعًا بعد مرض آلزهايمر عند كبار السن. (Vascular Dementia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015140.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vasovagal-syncope",
    "term_en": "Vasovagal Syncope",
    "term_ar": "استجابة وعائية مبهمية",
    "synonyms": [
      "Syncopes, Vasovagal",
      "Vasovagal Syncopes",
      "Syncope, Neurocardiogenic",
      "Neurocardiogenic Syncope",
      "Neurocardiogenic Syncopes",
      "Syncopes, Neurocardiogenic",
      "Syncope, Neurogenic",
      "Neurogenic Syncope"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Loss of consciousness due to a reduction in blood pressure that is associated with an increase in vagal tone and peripheral vasodilation.",
    "arabic_definition": "نوبة مبهمية أو استجابة وعائية مبهمية أو نوبة وعائية مبهمية (يطلق عليها أيضًا الإغماء العصبي القلبي) هي توعك بواسطة العصب المبهم، عندما تؤدي إلى الإغماء أو «الغيبوبة» يطلق عليها الإغماء الوعائي المبهمي، وهي أكثر أنواع الغيبوبة شيوعًا، الإغماء الوعائي المبهمي يُكتشف بكثرة عند فئتي اليافعين وكبار الراشدين. يوجد متلازمات إغمائية مختلفة تنضوي تحت مظلة الإغماء الوعائي المبهمي، العنصر المشترك بين هذه الحالات هي الآلية المركزية التي تؤدي إلى فقدان الوعي، والاختلاف بينهم في العوامل التي تفضي إلى هذه الآلية. (Vasovagal Syncope)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019462.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aicardi-syndrome",
    "term_en": "Aicardi Syndrome",
    "term_ar": "متلازمة أيكاردي",
    "synonyms": [
      "Syndrome, Aicardi",
      "Corpus Callosum, Agenesis Of, With Chorioretinal Abnormality",
      "Aicardi's Syndrome",
      "Syndrome, Aicardi's",
      "Agenesis of Corpus Callosum with Infantile Spasms and Ocular Abnormalities",
      "Callosal Agenesis and Ocular Abnormalities",
      "Chorioretinal Anomalies with Acc",
      "Agenesis of Corpus Callosum with Chorioretinal Abnormality"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare genetic disorder characterized by partial or complete absence of the CORPUS CALLOSUM, resulting in infantile spasms, MENTAL RETARDATION, and lesions of the RETINA or OPTIC NERVE.",
    "arabic_definition": "متلازمة واركاني (الإنجليزية: Aicardi syndrome) هو مرض وراثي نادر، تسبب تشوه وغياب جزئي أو كلي لتركيب مهم في الدماغ يسمى الجسم الثفني، مع وجود شذوذ في شبكية العين.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058540.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "moyamoya-disease",
    "term_en": "Moyamoya Disease",
    "term_ar": "داء مويامويا",
    "synonyms": [
      "Moya-Moya Disease",
      "Disease, Moya-Moya",
      "Cerebrovascular Moyamoya Disease",
      "Moyamoya Syndrome",
      "Progressive Intracranial Occlusive Arteropathy (Moyamoya)",
      "Moyamoya Disease, Primary",
      "Disease, Primary Moyamoya",
      "Moyamoya Diseases, Primary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A noninflammatory, progressive occlusion of the intracranial CAROTID ARTERIES and the formation of netlike collateral arteries arising from the CIRCLE OF WILLIS. Cerebral angiogram shows the puff-of-smoke (moyamoya) collaterals at the base of the brain. It is characterized by endothelial HYPERPLASIA and FIBROSIS with thickening of arterial walls. This disease primarily affects children but can also occur in adults.",
    "arabic_definition": "داء مويامويا هو مرض نادر يحدث فيه ضيق في شرايين محددة بالمخ، مما يتسبب في إعاقة تدفق الدم بها نتيجة لذلك وأيضاً نتيجة لتكون الخثرات في داخلها. يترتب على ذلك نمو لشرايين جانبية بجانب الشرايين المغلقة (دورة دموية رديفة) كي تقوم بتعويض نقص تدفق الدم للمخ، لكن هذه الشرايين الجديدة تكون ضعيفة وصغيرة، بالإضافة لذلك فإنها تكون معرضة لحدوث خثرات بداخلها أو تعرضها للنزيف أو التمدد. (Moyamoya Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009072.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemifacial-spasm",
    "term_en": "Hemifacial Spasm",
    "term_ar": "تشنج الوجه الشقي",
    "synonyms": [
      "Facial Spasm, Unilateral",
      "Facial Spasms, Unilateral",
      "Spasms, Unilateral Facial",
      "Spasm, Unilateral Facial",
      "Unilateral Facial Spasm",
      "Unilateral Facial Spasms",
      "Spasm, Hemifacial",
      "Hemifacial Spasms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recurrent clonic contraction of facial muscles, restricted to one side. It may occur as a manifestation of compressive lesions involving the seventh cranial nerve (FACIAL NERVE DISEASES), during recovery from BELL PALSY, or in association with other disorders. (From Adams et al., Principles of Neurology, 6th ed, p1378)",
    "arabic_definition": "تشنج الوجه الشقي (اختصارًا HFS) هو مرضٌ عصبي عضلي نادر يتميز بحدوث تقلصات عضلية غير منتظمة لا إرادية (تشنجات) في جانب واحد (نصفي) من الوجه (-وجهي). يتحكم العصب الوجهي (العصب القحفي السابع) في عضلات الوجه، إذ ينشأ من جذع الدماغ ويخرج من الجمجمة أسفل الأذن حيث ينقسم إلى خمسة فروع رئيسية. (Hemifacial Spasm)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019569.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sandhoff-disease",
    "term_en": "Sandhoff Disease",
    "term_ar": "داء ساندهوف",
    "synonyms": [
      "Deficiency Disease, Hexosaminidase A and B",
      "Gangliosidosis G(M2), Type II",
      "Gangliosidosis GM2, Type II",
      "GM2 Gangliosidosis, Type 2",
      "GM2 Gangliosidosis, Type II",
      "Hexosaminidase A and B Deficiency Disease",
      "Hexosaminidases A And B Deficiency",
      "Sandhoff's Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive neurodegenerative disorder characterized by an accumulation of G(M2) GANGLIOSIDE in neurons and other tissues. It is caused by mutation in the common beta subunit of HEXOSAMINIDASE A and HEXOSAMINIDASE B. Thus this disease is also known as the O variant since both hexosaminidase A and B are missing. Clinically, it is indistinguishable from TAY-SACHS DISEASE.",
    "arabic_definition": "داء ساندهوف هو اضطراب وراثي لخزن الشحوم مُتعلق بالجسيمات الحالَّة (الليزوزومات)، سببه نقص وراثي في التشكل الوظيفي لبيتا هيكسوزاميدين إيه وبي. هذه الأنزيمات الاستقلابية ضرورية لتقويض مكونات الغشاء الخلوي للخلايا العصبية الغانغليوزيد جي إم 2، وجي إيه 2 المشتقة منها، والغليبوزيد الشحمية السكرية الموجودة في الأحشاء وبعض السكريات قليلة الحدود. (Sandhoff Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012497.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alstrom-syndrome",
    "term_en": "Alstrom Syndrome",
    "term_ar": "متلازمة ألستروم",
    "synonyms": [
      "Syndrome, Alstrom",
      "Alström Syndrome",
      "Syndrome, Alström",
      "Alstrom-Hallgren Syndrome",
      "Syndrome, Alstrom-Hallgren",
      "Alstrom's Syndrome",
      "Alstroms Syndrome",
      "Syndrome, Alstrom's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare autosomal recessive disease characterized by multiple organ dysfunction. The key clinical features include retinal degeneration (NYSTAGMUS, PATHOLOGIC; RETINITIS PIGMENTOSA; and eventual blindness), childhood obesity, sensorineural hearing loss, and normal mental development. Endocrinologic complications include TYPE 2 DIABETES MELLITUS; HYPERINSULINEMIA; ACANTHOSIS NIGRICANS; HYPOTHYROIDISM; and progressive renal and hepatic failures. The disease is caused by mutations in the ALMS1 gene.",
    "arabic_definition": "متلازمة ألستروم (اختصارًا AS)، وتسمى أيضًا متلازمة ألستروم هالجيرن، هي اضطراب وراثي جسمي متنحٍ نادر جدًا يتصف بحدوث سمنة الأطفال واختلال وظائف الأعضاء المتعددة. تشمل الأعراض الإصابة المبكرة بداء السكري من النوع 2، وحثل المخروطية الذي يؤدي إلى العمى، وفقدان السمع الحسي العصبي، واعتلال عضلة القلب التوسعي. (Alstrom Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056769.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sneddon-syndrome",
    "term_en": "Sneddon Syndrome",
    "term_ar": "متلازمة سنيدون",
    "synonyms": [
      "Syndrome, Sneddon",
      "Livedo Reticularis, Systemic Involvement",
      "Sneddon-Champion Syndrome",
      "Syndrome, Sneddon-Champion",
      "Livedo Reticularis And Cerebrovascular Accidents",
      "Sneddon's syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A systemic non-inflammatory arteriopathy primarily of middle-aged females characterized by the association of LIVEDO RETICULARIS, multiple thrombotic CEREBRAL INFARCTION; CORONARY DISEASE, and HYPERTENSION. Elevation of antiphospholipid antibody titers, cardiac valvulopathy, ISCHEMIC ATTACK, TRANSIENT; SEIZURES; DEMENTIA; and chronic ischemia of the extremities may also occur. Pathologic examination of affected arteries reveals non-inflammatory adventitial fibrosis, thrombosis, and changes in the media (From Jablonski, Dictionary of Syndromes &amp; Eponymic Diseases, 2d ed; Adams et al., Principles of Neurology, 6th ed, p861; Arch Neurol 1997 Jan;54(1):53-60). Mutations in the CECR1 gene (ADA2 protein, human) are associated with Sneddon syndrome.",
    "arabic_definition": "متلازمة سنيدون هي شكل من أشكال اعتلال الشرايين تتميز بعدة أعراض، منها: (Sneddon Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018860.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sleep-deprivation",
    "term_en": "Sleep Deprivation",
    "term_ar": "حرمان من النوم",
    "synonyms": [
      "Deprivation, Sleep",
      "Insufficient Sleep Syndrome",
      "Insufficient Sleep Syndromes",
      "Syndrome, Insufficient Sleep",
      "REM Sleep Deprivation",
      "Deprivation, REM Sleep",
      "Sleep Deprivation, REM",
      "Sleep Fragmentation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The state of being deprived of sleep under experimental conditions, due to life events, or from a wide variety of pathophysiologic causes such as medication effect, chronic illness, psychiatric illness, or sleep disorder.",
    "arabic_definition": "الحِرْمان من النَّوم هي الحالات التي يجد فيها المرء صعوبة في النوم أو نوم متقطع غير متواصل، أو إن مُنِع عن النوم بالتعمد من قِبل شخص آخر. أسباب اضطرابات النوم عديدة ومنها: الأمراض النفسية أو تعاطي بعض الأدوية أو المخدرات. (Sleep Deprivation)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012892.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angelman-syndrome",
    "term_en": "Angelman Syndrome",
    "term_ar": "متلازمة أنجيلمان",
    "synonyms": [
      "Syndrome, Angelman",
      "Happy Puppet Syndrome",
      "Syndrome, Happy Puppet",
      "Puppet Children",
      "Children, Puppet"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterized by multiple abnormalities, INTELLECTUAL DISABILITY, and movement disorders. Present usually are skull and other abnormalities, frequent infantile spasms (SPASMS, INFANTILE); easily provoked and prolonged paroxysms of laughter (hence happy); jerky puppetlike movements (hence puppet); continuous tongue protrusion; motor retardation; ATAXIA; MUSCLE HYPOTONIA; and a peculiar facies. It is associated with maternal deletions of chromosome 15q11-13 and other genetic abnormalities. (From Am J Med Genet 1998 Dec 4;80(4):385-90; Hum Mol Genet 1999 Jan;8(1):129-35)",
    "arabic_definition": "متلازمة أنجلمان هو اضطراب وراثي نتيجة خلل جيني يحدث في الجين الموجود في كروموسوم 15. وهذا الجين يسمى UBE3A gene حيث يكون هناك نقص في هذا الجين المورث من الأم أو تحدث طفرة في هذا الجين المورث من الأم فيصبح موجود لكنه غير عامل أي كأنه غير موجود فلا يؤدي وظيفته. (Angelman Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017204.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "subdural-effusion",
    "term_en": "Subdural Effusion",
    "term_ar": "انصباب تحت الجافية",
    "synonyms": [
      "Effusion, Subdural",
      "Cerebrospinal Fluid Effusion, Subdural",
      "Subdural Cerebrospinal Fluid Effusion",
      "Cerebrospinal Fluid Leakage, Subdural",
      "Subdural Cerebrospinal Fluid Leakage",
      "Hygroma, Subdural",
      "Subdural Hygroma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Leakage and accumulation of CEREBROSPINAL FLUID in the subdural space which may be associated with an infectious process; CRANIOCEREBRAL TRAUMA; BRAIN NEOPLASMS; INTRACRANIAL HYPOTENSION; and other conditions.",
    "arabic_definition": "يشير انصباب تحت الجافية إلى وجود سائل في حيز تحت الجافية، وعادةً ما يكون سائلاً دماغياً شوكياً، ويُعالج أحياناً بالجراحة. (Subdural Effusion)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013353.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parkinson-disease",
    "term_en": "Parkinson Disease",
    "term_ar": "مرض باركنسون",
    "synonyms": [
      "Idiopathic Parkinson Disease",
      "Idiopathic Parkinson's Disease",
      "Lewy Body Parkinson Disease",
      "Lewy Body Parkinson's Disease",
      "Paralysis Agitans",
      "Parkinson Disease, Idiopathic",
      "Parkinson's Disease",
      "Parkinson's Disease, Idiopathic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A progressive, degenerative neurologic disease characterized by a TREMOR that is maximal at rest, retropulsion (i.e. a tendency to fall backwards), rigidity, stooped posture, slowness of voluntary movements, and a masklike facial expression. Pathologic features include loss of melanin containing neurons in the substantia nigra and other pigmented nuclei of the brainstem. LEWY BODIES are present in the substantia nigra and locus coeruleus but may also be found in a related condition (LEWY BODY DISEASE, DIFFUSE) characterized by dementia in combination with varying degrees of parkinsonism. (Adams et al., Principles of Neurology, 6th ed, p1059, pp1067-75)",
    "arabic_definition": "مرض باركنسون كما يُعرف باسم الشلل الرعاش أو داء باركنسون هو اضطراب تنكسي في الجهاز العصبي المركزي الذي يؤثر أساسًا على الجهاز الحركي. تبدأ الأعراض ببطء في بداية المرض، أكثر الأعراض وضوحاً هي الرعاش، التقبض، نقص الحراك وتشوه المشية. (Parkinson Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010300.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudotumor-cerebri",
    "term_en": "Pseudotumor Cerebri",
    "term_ar": "فرط الضغط داخل القحف مجهول السبب",
    "synonyms": [
      "Benign Intracranial Hypertension",
      "Hypertension, Benign Intracranial",
      "Idiopathic Intracranial Hypertension",
      "Hypertension, Idiopathic Intracranial",
      "Intracranial Hypertension, Idiopathic",
      "Intracranial Hypertension, Benign",
      "Fulminant Intracranial Hypertension",
      "Secondary Intracranial Hypertension"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition marked by raised intracranial pressure and characterized clinically by HEADACHES; NAUSEA; PAPILLEDEMA, peripheral constriction of the visual fields, transient visual obscurations, and pulsatile TINNITUS. OBESITY is frequently associated with this condition, which primarily affects women between 20 and 44 years of age. Chronic PAPILLEDEMA may lead to optic nerve injury (see OPTIC NERVE DISEASES) and visual loss (see BLINDNESS).",
    "arabic_definition": "فَرْطُ الضَّغْطِ داخِلَ القِحْف مَجْهُوْلُ السَّبَب (الإنجليزية: Idiopathic intracranial hypertension)، يُعرف سابقًا باسم الورم المخي الكاذب وارتفاع ضغط الدم الحميد داخل الجمجمة، هو حالة متميزة بارتفاع الضغط داخل القحف (الضغط حول الدماغ) دون وجود سبب ملاحظ. تشمل الأعراض الرئيسية الصداع، ومشاكل الرؤية، وطنين الأذن المتزامن مع النبض وآلام الكتف. (Pseudotumor Cerebri)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011559.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "huntington-disease",
    "term_en": "Huntington Disease",
    "term_ar": "داء هنتنغتون",
    "synonyms": [
      "Progressive Chorea, Hereditary, Chronic (Huntington)",
      "Chronic Progressive Hereditary Chorea (Huntington)",
      "Huntington's Chorea",
      "Chorea, Huntington's",
      "Huntington Chorea",
      "Chorea, Huntington",
      "Huntington's Disease",
      "Chorea, Chronic Progressive Hereditary (Huntington)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A familial disorder inherited as an autosomal dominant trait and characterized by the onset of progressive CHOREA and DEMENTIA in the fourth or fifth decade of life. Common initial manifestations include paranoia; poor impulse control; DEPRESSION; HALLUCINATIONS; and DELUSIONS. Eventually intellectual impairment; loss of fine motor control; ATHETOSIS; and diffuse chorea involving axial and limb musculature develops, leading to a vegetative state within 10-15 years of disease onset. The juvenile variant has a more fulminant course including SEIZURES; ATAXIA; dementia; and chorea. (From Adams et al., Principles of Neurology, 6th ed, pp1060-4)",
    "arabic_definition": "داء هنتنغتون هو مرض عقلي وراثي يشابه تدهور مرحلي للحالة العقلية، بسبب موت خلايا في المخ. هو مرض تنكسي مترقٍ يُسبب تلف خلايا عصبية معينة في الدماغ، ونتيجة لذلك تظهر حركات لا إرادية واضطرابات عاطفية وتدهور في الحالة العقلية. (Huntington Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006816.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "multiple-sclerosis",
    "term_en": "Multiple Sclerosis",
    "term_ar": "تصلب متعدد",
    "synonyms": [
      "Sclerosis, Multiple",
      "MS (Multiple Sclerosis)",
      "Sclerosis, Disseminated",
      "Disseminated Sclerosis",
      "Multiple Sclerosis, Acute Fulminating"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autoimmune disorder mainly affecting young adults and characterized by destruction of myelin in the central nervous system. Pathologic findings include multiple sharply demarcated areas of demyelination throughout the white matter of the central nervous system. Clinical manifestations include visual loss, extra-ocular movement disorders, paresthesias, loss of sensation, weakness, dysarthria, spasticity, ataxia, and bladder dysfunction. The usual pattern is one of recurrent attacks followed by partial recovery (see MULTIPLE SCLEROSIS, RELAPSING-REMITTING), but acute fulminating and chronic progressive forms (see MULTIPLE SCLEROSIS, CHRONIC PROGRESSIVE) also occur. (Adams et al., Principles of Neurology, 6th ed, p903)",
    "arabic_definition": "التصلب المتعدد (الإنجليزية: Multiple sclerosis) أو التصلب اللويحي، هو مرض مناعي ذاتي مزمن وتنكسي عصبي يهاجم فيه الجهاز المناعي الميالين، وهو الغطاء العازل للخلايا العصبية، مما يتسبب في تلف الجهاز العصبي المركزي. هذا يضعف قدرة الجهاز العصبي على نقل الإشارات.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009103.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tardive-dyskinesia",
    "term_en": "Tardive Dyskinesia",
    "term_ar": "خلل الحركة المتأخر",
    "synonyms": [
      "Dyskinesias, Tardive",
      "Dyskinesia, Tardive",
      "Tardive Dyskinesias",
      "Tardive Dystonia",
      "Dystonias, Tardive",
      "Dystonia, Tardive",
      "Tardive Dystonias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drug-related movement disorder characterized by uncontrollable movements in certain muscles. It is associated with a long-term exposure to certain neuroleptic medications (e.g., METOCLOPRAMIDE).",
    "arabic_definition": "خلل الحركة المتأخر أو خلل الحركة الشيخوخي (الإنجليزية: Tardive dyskinesia) هو خلل في الحركة. يكون بشكل حركات متكررة لا إرادية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071057.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "korsakoff-syndrome",
    "term_en": "Korsakoff Syndrome",
    "term_ar": "متلازمة كورساكوف",
    "synonyms": [
      "Korsakoff Psychosis",
      "Korsakoff Psychoses",
      "Psychoses, Korsakoff",
      "Psychosis, Korsakoff",
      "Wernicke-Korsakoff Syndrome",
      "Wernicke-Korsakoff Syndromes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acquired cognitive disorder characterized by inattentiveness and the inability to form short term memories. This disorder is frequently associated with chronic ALCOHOLISM; but it may also result from dietary deficiencies; CRANIOCEREBRAL TRAUMA; NEOPLASMS; CEREBROVASCULAR DISORDERS; ENCEPHALITIS; EPILEPSY; and other conditions. (Adams et al., Principles of Neurology, 6th ed, p1139)",
    "arabic_definition": "متلازمة كورساكوف هي خلل دماغي نتيجة نقص في مادة الثيامين (فيتامين بي1) في الدماغ. وقد نسبت هذه الحالة إلى طبيب الأعصاب الروسي الذي اكتشفها، سرغي كورساكوف. (Korsakoff Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020915.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alexander-disease",
    "term_en": "Alexander Disease",
    "term_ar": "مرض ألكسندر",
    "synonyms": [
      "Alexander's Disease",
      "Alexanders Disease",
      "Demyelinogenic Leukodystrophy",
      "Dysmyelinogenic Leukodystrophy",
      "Fibrinoid Degeneration of Astrocytes",
      "Leukodystrophy with Rosenthal Fibers"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare leukoencephalopathy with infantile-onset accumulation of Rosenthal fibers in the subpial, periventricular, and subependymal zones of the brain. Rosenthal fibers are GLIAL FIBRILLARY ACIDIC PROTEIN aggregates found in ASTROCYTES. Juvenile- and adult-onset types show progressive atrophy of the lower brainstem instead. De novo mutations in the GFAP gene are associated with the disease with propensity for paternal inheritance.",
    "arabic_definition": "مرض ألكسندر (الإنجليزية: Alexander disease) هُوَ أحد أمراض تآكل المادة البيضاء في الدماغ، وَهوَ نادر وَمُميت وَغالباً ما يُصيب الرُضع وَالأطفال، وَيُسبب تأخراً في النُمو وَسمات جسمانية مُعينة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D038261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "movement-disorders",
    "term_en": "Movement Disorders",
    "term_ar": "اضطرابات الحركة",
    "synonyms": [
      "Movement Disorder",
      "Dyskinesia Syndromes",
      "Dyskinesia Syndrome",
      "Movement Disorder Syndromes",
      "Movement Disorder Syndrome",
      "Etat Marbre",
      "Status Marmoratus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Syndromes which feature DYSKINESIAS as a cardinal manifestation of the disease process. Included in this category are degenerative, hereditary, post-infectious, medication-induced, post-inflammatory, and post-traumatic conditions.",
    "arabic_definition": "اضطرابات الحركة هي متلازمات سريرية يكون فيها إما زيادة أو ندرة في الحركة الإرادية واللاإرادية، بشرط أن لا يكون ذلك بسبب وجود ضعف أو تشنج. تُعرف اضطرابات الحركة بأمراض العقد القاعدية أو أمراض خارج السبيل الهرمي. (Movement Disorders)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009069.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myotonia-congenita",
    "term_en": "Myotonia Congenita",
    "term_ar": "تأتر العضل الخلقي",
    "synonyms": [
      "Batten Turner Congenital Myopathy",
      "Myopathy, Congenital",
      "Myotonia, Generalized",
      "Generalized Myotonia",
      "Generalized Myotonias",
      "Myotonias, Generalized",
      "Congenital Myotonia",
      "Myotonia Levior"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inherited myotonic disorders with early childhood onset MYOTONIA. Muscular hypertrophy is common and myotonia may impair ambulation and other movements. It is classified as Thomsen (autosomal dominant) or Becker (autosomal recessive) generalized myotonia mainly based on the inheritance pattern. Becker type is also clinically more severe. An autosomal dominant variant with milder symptoms and later onset is known as myotonia levior. Mutations in the voltage-dependent skeletal muscle chloride channel are associated with the disorders.",
    "arabic_definition": "تأتر العضل الخلقي (الإنجليزية: Myotonia congenita) هو عيب خلقي في التشابك العصبي العضلي وقنوات الأيونات مما يؤثر على العضلات الهيكلية (عضلات تستخدم للحركة).",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009224.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerebral-infarction",
    "term_en": "Cerebral Infarction",
    "term_ar": "احتشاء الدماغ",
    "synonyms": [
      "Cerebral Infarctions",
      "Infarctions, Cerebral",
      "Cerebral Infarct",
      "Cerebral Infarcts",
      "Infarct, Cerebral",
      "Infarcts, Cerebral",
      "Infarction, Cerebral",
      "Anterior Choroidal Artery Infarction"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The formation of an area of NECROSIS in the CEREBRUM caused by an insufficiency of arterial or venous blood flow. Infarcts of the cerebrum are generally classified by hemisphere (i.e., left vs. right), lobe (e.g., frontal lobe infarction), arterial distribution (e.g., INFARCTION, ANTERIOR CEREBRAL ARTERY), and etiology (e.g., embolic infarction).",
    "arabic_definition": "احْتِشاءُ الدِّمَاغ (الإنجليزية: Cerebral infarction)، هي منطقة من الأنسجة الميتة في الدماغ ناتجة عن انسداد أو تضيق في الشرايين التي تغذي الدماغ بالدم والأكسجين. يؤدي نقص التروية الدموية والأكسجين المحدود إلى سكتة دماغية والتي قد تؤدي بدورها إلى احتشاء الدماغ ما لم يتم استعادة تدفق الدم خلال فترة قصيرة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002544.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cryptococcal-meningitis",
    "term_en": "Cryptococcal Meningitis",
    "term_ar": "داء المستخفيات",
    "synonyms": [
      "Cryptococcal Meningitides",
      "Meningitides, Cryptococcal",
      "Granulomous Cerebral Cryptococcosis",
      "Cerebral Cryptococcoses, Granulomous",
      "Cerebral Cryptococcosis, Granulomous",
      "Cryptococcoses, Granulomous Cerebral",
      "Cryptococcosis, Granulomous Cerebral",
      "Granulomous Cerebral Cryptococcoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Meningeal inflammation produced by CRYPTOCOCCUS NEOFORMANS, an encapsulated yeast that tends to infect individuals with ACQUIRED IMMUNODEFICIENCY SYNDROME and other immunocompromised states. The organism enters the body through the respiratory tract, but symptomatic infections are usually limited to the lungs and nervous system. The organism may also produce parenchymal brain lesions (torulomas). Clinically, the course is subacute and may feature HEADACHE; NAUSEA; PHOTOPHOBIA; focal neurologic deficits; SEIZURES; cranial neuropathies; and HYDROCEPHALUS. (From Adams et al., Principles of Neurology, 6th ed, pp721-2)",
    "arabic_definition": "داء المستخفيات (الإنجليزية: Cryptococcosis) تسببه فطر المستخفيات، وهو عالمي الانتشار. ويحدث أوراماً شبه صمغية وآفات حبيبومية في الرئة والعظام والمخ والسحايا والمفاصل والجلد. (Cryptococcal Meningitis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016919.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "postherpetic-neuralgia",
    "term_en": "Postherpetic Neuralgia",
    "term_ar": "الألم العصبي التالي للهربس",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pain in nerves, frequently involving facial SKIN, resulting from the activation the latent varicella-zoster virus (HERPESVIRUS 3, HUMAN). The two forms of the condition preceding the pain are HERPES ZOSTER OTICUS; and HERPES ZOSTER OPHTHALMICUS. Following the healing of the rashes and blisters, the pain sometimes persists.",
    "arabic_definition": "الألم العصبي التالي للهربس هو ألم الاعتلال العصبي الناجم عن تلف عصب محيطي بسبب إعادة تنشيط فيروس جدري الماء النطاقي (الهربس النطاقي، الذي يُعرف أيضًا باسم القوباء المنطقية). في الحالات النموذجية، يتحدد الألم العصبي في قطاع جلدي واحد، أي منطقة محددة من الجلد ومعصبة بعصب حسي واحد. (Postherpetic Neuralgia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051474.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "machado-joseph-disease",
    "term_en": "Machado-Joseph Disease",
    "term_ar": "مرض ماتشادو جوزيف",
    "synonyms": [
      "Disease, Machado-Joseph",
      "Azorean Disease",
      "Disease, Azorean",
      "Joseph Azorean Disease",
      "Disease, Joseph Azorean",
      "Joseph Disease",
      "Disease, Joseph",
      "Spinocerebellar Ataxia Type 3"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dominantly-inherited ATAXIA first described in people of Azorean and Portuguese descent, and subsequently identified in Brazil, Japan, China, and Australia. This disorder is classified as one of the SPINOCEREBELLAR ATAXIAS (Type 3) and has been associated with a mutation of the MJD1 gene on chromosome 14. Clinical features include progressive ataxia, DYSARTHRIA, postural instability, nystagmus, eyelid retraction, and facial FASCICULATIONS. DYSTONIA is prominent in younger patients (referred to as Type I Machado-Joseph Disease). Type II features ataxia and ocular signs; Type III features MUSCULAR ATROPHY and a sensorimotor neuropathy; and Type IV features extrapyramidal signs combined with a sensorimotor neuropathy. (From Clin Neurosci 1995;3(1):17-22; Ann Neurol 1998 Mar;43(3):288-96)",
    "arabic_definition": "مرض ماتشادو جوزيف المعروف أيضًا باسم مرض ماتشادو جوزيف الأزوري، أو مرض ماتشادو، أو مرض جوزيف، أو الرنح النخاعي المخيخي النوع 3، هو مرض وراثي صبغي جسدي سائد تنكسي عصبي نادر، غالبًا ما يتسبب في رنح مخيخي متزايد، ما يؤدي إلى نقص السيطرة على العضلات وتناسق الحركة في الأطراف العلوية والسفلية. تنجم الأعراض عن طفرة جينية تؤدي إلى تكرار حدوث ثلاثي النوكليوتيد (سي إيه جي) (CAG) غير الطبيعي في جين (إيه تي إكس إن 3) (ATXN3) الذي ينتج عنه تكوين غير طبيعي من البروتين المسمى أتاكسين الذي يسبب انحلال الخلايا في الدماغ الخلفي. (Machado-Joseph Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017827.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "smith-magenis-syndrome",
    "term_en": "Smith-Magenis Syndrome",
    "term_ar": "متلازمة سميث-ماجينيس",
    "synonyms": [
      "Syndrome, Smith-Magenis",
      "Chromosome 17p11.2 Deletion Syndrome",
      "17p11.2 Monosomy",
      "Smith–Magenis syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Complex neurobehavioral disorder characterized by distinctive facial features (FACIES), developmental delay and INTELLECTUAL DISABILITY. Behavioral phenotypes include sleep disturbance, maladaptive, self-injurious and attention-seeking behaviors. The sleep disturbance is linked to an abnormal circadian secretion pattern of MELATONIN. The syndrome is associated with de novo deletion or mutation and HAPLOINSUFFICIENCY of the retinoic acid-induced 1 protein on chromosome 17p11.2.",
    "arabic_definition": "متلازمة سميث-ماجينيس (الإنجليزية: Smith–Magenis syndrome) هو اضطراب في النمو يؤثر على أجزاء كثيرة من الجسم. والسمات الرئيسية لهذه المتلازمة، تتصف من خفيفة إلى معتدلة في الإعاقة الفكرية، ملامح الوجه تكون مميزة، اضطرابات النوم، والمشاكل السلوكية. (Smith-Magenis Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058496.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brown-sequard-syndrome",
    "term_en": "Brown-Sequard Syndrome",
    "term_ar": "متلازمة براون سيكوارد",
    "synonyms": [
      "Syndrome, Brown-Sequard",
      "Brown-Sequard Disease",
      "Brown-Sequard's Disease",
      "Brown-Sequards Disease",
      "Brown-Sequard's Syndrome",
      "Brown-Sequards Syndrome",
      "Brown-Séquard syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome associated with injury to the lateral half of the spinal cord. The condition is characterized by the following clinical features (which are found below the level of the lesion): contralateral hemisensory anesthesia to pain and temperature, ipsilateral loss of propioception, and ipsilateral motor paralysis. Tactile sensation is generally spared. (From Adams et al., Principles of Neurology, 6th ed, p162).",
    "arabic_definition": "متلازمة براون سيكارد (الإنجليزية: Brown-Séquard syndrome) (تُعرف أيضًا باسم فالج براون سيكارد، أو شلل براون سيكارد، أو متلازمة الشلل النصفي السفلي، أو الفالج والشلل النصفي السفلي النخاعي أو الشلل النصفي السفلي النخاعي) هي متلازمة ناجمة عن تلف نصف النخاع الشوكي، أي القطع النصفي من النخاع الشوكي ما يؤدي إلى شلل وفقد في استقبال الحس العميق في نفس الجانب (أو الجانب المماثل) من الإصابة أو الآفة، وفقد في أحاسيس الألم والحرارة في الجانب المعاكس (أو الجانب المقابل) من الآفة. سُميت المتلازمة نسبة إلى عالم الفيزيولوجيا تشارلز إدوارد براون سيكارد، الذي وصف الحالة لأول مرة في عام 1850. (Brown-Sequard Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018437.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "guillain-barre-syndrome",
    "term_en": "Guillain-Barre Syndrome",
    "term_ar": "متلازمة غيلان باريه",
    "synonyms": [
      "Syndrome, Guillain-Barre",
      "Landry-Guillain-Barre Syndrome",
      "Syndrome, Landry-Guillain-Barre",
      "Guillain-Barré Syndrome",
      "Guillain-Barré Syndromes",
      "Syndrome, Guillain-Barré",
      "Guillaine-Barre Syndrome",
      "Guillain–Barré syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute inflammatory autoimmune neuritis caused by T cell- mediated cellular immune response directed towards peripheral myelin. Demyelination occurs in peripheral nerves and nerve roots. The process is often preceded by a viral or bacterial infection, surgery, immunization, lymphoma, or exposure to toxins. Common clinical manifestations include progressive weakness, loss of sensation, and loss of deep tendon reflexes. Weakness of respiratory muscles and autonomic dysfunction may occur. (From Adams et al., Principles of Neurology, 6th ed, pp1312-1314)",
    "arabic_definition": "متلازمة غيلان باريه (أو متلازمة غيَّان باريه)(1) هي ضعفٌ عضليٌ سريعُ الظهور يحدث نتيجةٍ لضررٍ في الجهاز العصبي المُحيطي يُسببه الجهاز المناعي. تتضمن الأعراض الأوليةُ عادةً تغيراتٍ في الإحساس أو الألم مع ضعفٍ في العضلات، بدءًا من القدمين واليدين، وغالبًا ما تمتدُ نحو الذراعين والجزء العلوي من الجسم، وتكون الإصابةُ في كلا الجانبين. (Guillain-Barre Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020275.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lyme-neuroborreliosis",
    "term_en": "Lyme Neuroborreliosis",
    "term_ar": "داء البورليات العصبي",
    "synonyms": [
      "Neuroborreliosis, Lyme",
      "Nervous System Lyme Disease",
      "Nervous System Lyme Borreliosis",
      "Neuroborreliosis, Borrelia burgdorferi",
      "Borrelia burgdorferi Neuroborreliosis",
      "Neuroborrelioses, Borrelia burgdorferi",
      "Lyme Borreliosis, Nervous System",
      "Lyme Disease, Nervous System"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Nervous system infections caused by tick-borne spirochetes of the BORRELIA BURGDORFERI GROUP. The disease may affect elements of the central or peripheral nervous system in isolation or in combination. Common clinical manifestations include a lymphocytic meningitis, cranial neuropathy (most often a facial neuropathy), POLYRADICULOPATHY, and a mild loss of memory and other cognitive functions. Less often more extensive inflammation involving the central nervous system (encephalomyelitis) may occur. In the peripheral nervous system, B. burgdorferi infection is associated with mononeuritis multiplex and polyradiculoneuritis. (From J Neurol Sci 1998 Jan 8;153(2):182-91)",
    "arabic_definition": "نيوروبوريليوسيس هو التهاب أو مرض ناجم عن عدوى الجهاز العصبي المركزي من قبل عضو من جنس بوريليا. وكثيرا ما يكون ذلك في مرحلة متأخرة من عملية المرض، ولا سيما في الأشخاص الذين يعانون من نقص المناعة، كالذين يعانون من نقص المناعة المكتسبة أو الإيدز. (Lyme Neuroborreliosis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020852.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "intellectual-disability",
    "term_en": "Intellectual Disability",
    "term_ar": "إعاقة ذهنية",
    "synonyms": [
      "Disabilities, Intellectual",
      "Intellectual Disabilities",
      "Disability, Intellectual",
      "Intellectual Development Disorder",
      "Development Disorder, Intellectual",
      "Development Disorders, Intellectual",
      "Disorder, Intellectual Development",
      "Disorders, Intellectual Development"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Subnormal intellectual functioning which originates during the developmental period. This has multiple potential etiologies, including genetic defects and perinatal insults. Intelligence quotient (IQ) scores are commonly used to determine whether an individual has an intellectual disability. IQ scores between 70 and 79 are in the borderline range. Scores below 67 are in the disabled range. (from Joynt, Clinical Neurology, 1992, Ch55, p28)",
    "arabic_definition": "الإعاقة الذهنية وتعرف أيضًا بالاضطراب العقلي النمائي أو عجز التعلم العام، وكانت تعرف سابقًا بالتخلف العقلي، هي اضطراب في النمو العصبي يتميز بضعف الأداء الفكري والتكيفي. تعرف الإعاقة الذهنية عندما يقل معدل ذكاء عن 70 بالإضافة إلى عجز في سلوكين تكيفيين أو أكثر مما يؤثر على سلوكات الحياة اليومية والعامة. (Intellectual Disability)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008607.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "idiopathic-hypersomnia",
    "term_en": "Idiopathic Hypersomnia",
    "term_ar": "فرط النوم مجهول السبب",
    "synonyms": [
      "Hypersomnia, Idiopathic",
      "Hypersomnias, Idiopathic",
      "Idiopathic Hypersomnias",
      "Hypersomnolence, CNS, Idiopathic",
      "Idiopathic CNS Hypersomnolence",
      "CNS Hypersomnolence, Idiopathic",
      "CNS Hypersomnolences, Idiopathic",
      "Hypersomnolence, Idiopathic CNS"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sleep disorder of central nervous system origin characterized by prolonged nocturnal sleep and periods of daytime drowsiness. Affected individuals experience difficulty with awakening in the morning and may have associated sleep drunkenness, automatic behaviors, and memory disturbances. This condition differs from narcolepsy in that daytime sleep periods are longer, there is no association with CATAPLEXY, and the multiple sleep latency onset test does not record sleep-onset rapid eye movement sleep. (From Chokroverty, Sleep Disorders Medicine, 1994, pp319-20; Psychiatry Clin Neurosci 1998 Apr:52(2):125-129)",
    "arabic_definition": "فرط النوم مجهول السبب هو حاله، يعتقد أن الاضطرابات العصبية التي تتميز في المقام الأول من قبل النعاس المفرط أثناء النهار (EDS). نادرا ما يتم تشخيصه وغالبا ما يكون من الصعب جدا تشخيص المرض في مرحلة مبكرة؛ إنه عادة ما يكون المرض مزمن ومنهك. (Idiopathic Hypersomnia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020177.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prader-willi-syndrome",
    "term_en": "Prader-Willi Syndrome",
    "term_ar": "متلازمة برادر- فيلي",
    "synonyms": [
      "Syndrome, Prader-Willi",
      "Labhart-Willi Syndrome",
      "Syndrome, Labhart-Willi",
      "Labhart-Willi-Prader-Fanconi Syndrome",
      "Syndrome, Labhart-Willi-Prader-Fanconi",
      "Willi-Prader Syndrome",
      "Syndrome, Willi-Prader",
      "Prader–Willi syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant disorder caused by deletion of the proximal long arm of the paternal chromosome 15 (15q11-q13) or by inheritance of both of the pair of chromosomes 15 from the mother (UNIPARENTAL DISOMY) which are imprinted (GENETIC IMPRINTING) and hence silenced. Clinical manifestations include MENTAL RETARDATION; MUSCULAR HYPOTONIA; HYPERPHAGIA; OBESITY; short stature; HYPOGONADISM; STRABISMUS; and HYPERSOMNOLENCE. (Menkes, Textbook of Child Neurology, 5th ed, p229)",
    "arabic_definition": "متلازمة برادر- ويلي (اختصارًا PWS) هي اضطراب جيني نادر حيث يتم حذف أو عدم ترجمة سبع جينات على الكروموسوم 15 (اس 11-13) من الكروموسوم الأبوي (حذف جزئي للكروموسوم15). تم وصفها للمرة الأولى من قبل أندريا برادر (1915-2001)، هينريتش ويلي (1900-1971)، أليكسيس لابهارت (1916-1994)، أندرو زيجلر وجويدو فانكوني عام 1956 في المؤتمر الدولي الثامن لطب الأطفال في عاصمة الدانمارك-كوبنهاغن. (Prader-Willi Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011218.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trigeminal-neuralgia",
    "term_en": "Trigeminal Neuralgia",
    "term_ar": "ألم عصب ثلاثي التوائم",
    "synonyms": [
      "Neuralgia, Trigeminal",
      "Trigeminal Neuralgias",
      "Tic Douloureux",
      "Epileptiform Neuralgia",
      "Epileptiform Neuralgias",
      "Neuralgia, Epileptiform",
      "Fothergill Disease",
      "Disease, Fothergill"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterized by recurrent episodes of excruciating pain lasting several seconds or longer in the sensory distribution of the TRIGEMINAL NERVE. Pain may be initiated by stimulation of trigger points on the face, lips, or gums or by movement of facial muscles or chewing. Associated conditions include MULTIPLE SCLEROSIS, vascular anomalies, ANEURYSMS, and neoplasms. (Adams et al., Principles of Neurology, 6th ed, p187)",
    "arabic_definition": "ألم العصب ثلاثي التوائم (الإنجليزية: Trigeminal neuralgia) هو ألمٌ في العصب ثلاثي التوائم، وهو العصب الخامس هو أحد أعصاب المخ الرئيسية، يقع على جانبي الوجه، يتفرع إلى ثلاثة فروع تغذي ثلاث مناطق، منطقة الجبهة ومنطقة وسط الوجه ومنطقة الفك. ويسمى العصب الخامس أيضا ذو الثلاثي التوائم وهو المسؤول أساسا عن التغذية الحسية للوجه والتغذية الحركية لبعض عضلات المضغ والكلام.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014277.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anterograde-amnesia",
    "term_en": "Anterograde Amnesia",
    "term_ar": "فقد الذاكرة التقدمي",
    "synonyms": [
      "Amnesias, Anterograde",
      "Anterograde Amnesias",
      "Memory Loss, Anterograde",
      "Anterograde Memory Loss",
      "Anterograde Memory Losses",
      "Memory Losses, Anterograde",
      "Post-Ictal Memory Loss",
      "Losses, Post-Ictal Memory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Loss of the ability to form new memories beyond a certain point in time. This condition may be organic or psychogenic in origin. Organically induced anterograde amnesia may follow CRANIOCEREBRAL TRAUMA; SEIZURES; ANOXIA; and other conditions which adversely affect neural structures associated with memory formation (e.g., the HIPPOCAMPUS; FORNIX (BRAIN); MAMMILLARY BODIES; and ANTERIOR THALAMIC NUCLEI). (From Memory 1997 Jan-Mar;5(1-2):49-71)",
    "arabic_definition": "فقد الذاكرة التقدمي أو فقدان الذاكرة التقدمي هو فقدان القدرة على خلق ذكريات بعد الحدث الذي تسبب في فقدان الذاكرة، مما يؤدي إلى عدم القدرة الجزئية أو الكلية على تذكر الماضي القريب، في حين أن الذكريات طويلة الأمد من قبل الحدث لا تزال سليمة، لكنه غير قادر على خلق ذكريات طويلة الأمد جديدة. وهذا هو عكس ما يحدث للمريض المصاب بفقدان الذاكرة الرجعي؛ حيث تُفقد الذكريات التي نشأت قبل الحدث بينما لا يزال من الممكن إنشاء ذكريات جديدة. (Anterograde Amnesia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020324.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "multiple-system-atrophy",
    "term_en": "Multiple System Atrophy",
    "term_ar": "ضمور جهازي متعدد",
    "synonyms": [
      "Atrophy, Multiple System",
      "Multiple System Atrophies",
      "Multisystem Atrophy",
      "Atrophies, Multisystem",
      "Atrophy, Multisystem",
      "Multisystem Atrophies",
      "Multisystemic Atrophy",
      "Atrophies, Multisystemic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome complex composed of three conditions which represent clinical variants of the same disease process: STRIATONIGRAL DEGENERATION; SHY-DRAGER SYNDROME; and the sporadic form of OLIVOPONTOCEREBELLAR ATROPHIES. Clinical features include autonomic, cerebellar, and basal ganglia dysfunction. Pathologic examination reveals atrophy of the basal ganglia, cerebellum, pons, and medulla, with prominent loss of autonomic neurons in the brain stem and spinal cord. (From Adams et al., Principles of Neurology, 6th ed, p1076; Baillieres Clin Neurol 1997 Apr;6(1):187-204; Med Clin North Am 1999 Mar;83(2):381-92)",
    "arabic_definition": "الضمور الجهازي المتعدد (MSA) هو اضطراب عصبي تنكسي الضمور الجهازي المتعدد مرتبط بانتكاس الخلايا العصبية في أماكن معينة في الدماغ. وهذه الخلايا المنتكسة تسبب مشاكل في الحركة والتوازن وظائف الجسم اللارادية كالتحكم بالمثانة وتنظيم ضغط الدم. (Multiple System Atrophy)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019578.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ataxia-telangiectasia",
    "term_en": "Ataxia Telangiectasia",
    "term_ar": "رنح وتوسع الشعيرات",
    "synonyms": [
      "Louis-Bar Syndrome",
      "Syndrome, Louis-Bar",
      "Ataxia Telangiectasia Syndrome",
      "Syndrome, Ataxia Telangiectasia",
      "Telangiectasia, Cerebello-Oculocutaneous",
      "Ataxia–telangiectasia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive inherited disorder characterized by choreoathetosis beginning in childhood, progressive CEREBELLAR ATAXIA; TELANGIECTASIS of CONJUNCTIVA and SKIN; DYSARTHRIA; B- and T-cell immunodeficiency, and RADIOSENSITIVITY to IONIZING RADIATION. Affected individuals are prone to recurrent sinobronchopulmonary infections, lymphoreticular neoplasms, and other malignancies. Serum ALPHA-FETOPROTEINS are usually elevated. (Menkes, Textbook of Child Neurology, 5th ed, p688) The gene for this disorder (ATM) encodes a cell cycle checkpoint protein kinase and has been mapped to chromosome 11 (11q22-q23).",
    "arabic_definition": "متلازمة الرنح وتوسع الشعيرات (AT) (المشارإليها باسم متلازمة لويس بار أيضا ) هو مرض نادر، تنكسي عصبي، وراثي يسبب إعاقة شديدة. يشير مرض الرّنح إلى ضعف في التوازن، وتوسع في شعيرات الأوعية الدموية المتوسعة الصغيرة، وتعد كلا الخاصيتين من السمات المميزة للمرض. (Ataxia Telangiectasia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001260.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lesch-nyhan-syndrome",
    "term_en": "Lesch-Nyhan Syndrome",
    "term_ar": "متلازمة ليش نيهان",
    "synonyms": [
      "Total Hypoxanthine-Guanine Phosphoribosyl Transferase Deficiency",
      "X-Linked Hyperuricemia",
      "Hyperuricemias, X-Linked",
      "Hyperuricemia, X-Linked",
      "X-Linked Hyperuricemias",
      "X-Linked Primary Hyperuricemia",
      "Hyperuricemias, X-Linked Primary",
      "Lesch–Nyhan syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inherited disorder transmitted as a sex-linked trait and caused by a deficiency of an enzyme of purine metabolism; HYPOXANTHINE PHOSPHORIBOSYLTRANSFERASE. Affected individuals are normal in the first year of life and then develop psychomotor retardation, extrapyramidal movement disorders, progressive spasticity, and seizures. Self-destructive behaviors such as biting of fingers and lips are seen frequently. Intellectual impairment may also occur but is typically not severe. Elevation of uric acid in the serum leads to the development of renal calculi and gouty arthritis. (Menkes, Textbook of Child Neurology, 5th ed, pp127)",
    "arabic_definition": "متلازمة ليش نيهان هي اضطراب وراثي نادر يحدث بسبب نقص في إنزيم هيبوكزانتين-غوانين فوسفوريبوزيل-ترانسفيراز (HGPRT). يحدث هذا النقص بسبب طفرات في جين HPRT1 الموجود على الصبغي X. تصيب متلازمة لش-نيهان واحدًا من بين كل 380000 مولود حي. (Lesch-Nyhan Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007926.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "familial-dysautonomia",
    "term_en": "Familial Dysautonomia",
    "term_ar": "خلل الوظائف المستقلة العائلي",
    "synonyms": [
      "HSAN 3",
      "Hereditary Sensory Neuropathy Type 3",
      "Hereditary Sensory and Autonomic Neuropathy 3",
      "HSAN III",
      "HSAN3",
      "HSN-III",
      "Neuropathy, Hereditary Sensory And Autonomic, Type III",
      "HSAN Type III"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal disorder of the peripheral and autonomic nervous systems limited to individuals of Ashkenazic Jewish descent. Clinical manifestations are present at birth and include diminished lacrimation, defective thermoregulation, orthostatic hypotension (HYPOTENSION, ORTHOSTATIC), fixed pupils, excessive SWEATING, loss of pain and temperature sensation, and absent reflexes. Pathologic features include reduced numbers of small diameter peripheral nerve fibers and autonomic ganglion neurons. (From Adams et al., Principles of Neurology, 6th ed, p1348; Nat Genet 1993;4(2):160-4)",
    "arabic_definition": "خلل الوظائف المستقلة العائلي أو خلل الوظائف الذاتية العائلي (الإنجليزية: Familial dysautonomia) واختصارًا إف دي (FD)، هو اضطراب في الجهاز العصبي الذاتي يؤثر على نِماء وبقاء العصبونات الحسية والودية وبعض العصبونات اللاودية في الجهازين العصبيين الذاتي والحسي ما يؤدي إلى ظهور أعراض متغيّرة، منها الحساسية للألم وعدم القدرة على إنتاج الدموع وضعف النمو وضغط الدم غير المستقر (فرط ضغط الدم الانتيابي وهبوط الضغط الانتصابي). يعاني الأشخاص المصابون من نوبات إقياء متكررة والتهاب رئوي ومشاكل في النطق والحركة وعسر البلع وإدراك حسي غير مناسب للحرارة والألم والتذوق إضافةً إلى ضغط الدم غير المستقر ونقص الحركية المعدية المعوية (انسداد معوي كاذب).",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004402.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "japanese-encephalitis",
    "term_en": "Japanese Encephalitis",
    "term_ar": "التهاب الدماغ الياباني",
    "synonyms": [
      "Japanese B Encephalitis",
      "Encephalitis, Japanese B",
      "Japanese B Viral Encephalitis",
      "Viral Encephalitis, Japanese B"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mosquito-borne encephalitis caused by the Japanese B encephalitis virus (ENCEPHALITIS VIRUS, JAPANESE) occurring throughout Eastern Asia and Australia. The majority of infections occur in children and are subclinical or have features limited to transient fever and gastrointestinal symptoms. Inflammation of the brain, spinal cord, and meninges may occur and lead to transient or permanent neurologic deficits (including a POLIOMYELITIS-like presentation); SEIZURES; COMA; and death. (From Adams et al., Principles of Neurology, 6th ed, p751; Lancet 1998 Apr 11;351(9109):1094-7)",
    "arabic_definition": "التهاب الدماغ الياباني (الإنجليزية: Japanese encephalitis) المعروفة سابقا باسم التهاب الدماغ الياباني باء لتمييزه عن Economo فون في أي التهاب الدماغ، هو مرض يسببه فيروس التهاب الدماغ الياباني الأمراض التي تنقلها البعوض. فيروس التهاب الدماغ الياباني هو فيروس من الفيروسات المصفرة الأسرية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004672.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kleine-levin-syndrome",
    "term_en": "Kleine-Levin Syndrome",
    "term_ar": "متلازمة كلاين ليفين",
    "synonyms": [
      "Syndrome, Kleine-Levin",
      "Hypersomnia, Periodic",
      "Periodic Hypersomnia",
      "Periodic Hypersomnias",
      "Kleine-Levin Hibernation Syndrome",
      "Hibernation Syndrome, Kleine-Levin",
      "Syndrome, Kleine-Levin Hibernation",
      "Kleine-Levin-Critchley Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare condition characterized by recurrent hypersomnias associated with hyperphagia, occurring primarily in males in the second to third decade of life. Clinical features include mental confusion, excessive sleep requirements (approximately 18 hours per day), restlessness, and in some cases hallucinations. Episodes have a duration of days to weeks, and may recur several times per year. This condition may resolve spontaneously over several years. (From Adams, et al., Principles of Neurology, 6th ed, p569)",
    "arabic_definition": "متلازمة كلاين ليفين (الإنجليزية: Kleine-Levin Syndrome) وتسمى أيضا بمتلازمة الجمال النائم وهي اضطراب عصبي يتميز بحصول فترات متكررة من النوم الطويل وأكل كميات زائدة من الطعام. في بداية كل فترة يصاب المريض بالنعاس وينام لأكثر من يوم وليلة (hypersomnolence) ويستيقظ فقط لتناول الطعام أو الذهاب إلى الحمام.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017593.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudobulbar-affect",
    "term_en": "Pseudobulbar Affect",
    "term_ar": "تقلقل",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition that is characterized by episodes of sudden uncontrollable and inappropriate laughing or crying. It can result from certain neurological conditions or injuries that may impact the way the brain controls emotions.",
    "arabic_definition": "التقلقل العاطفي أو عدم الثبات الانفعالي، أو بالاسم العلمي الوجدان البصلي الكاذب أو العاطفة البصلية الكاذبة هو نوع من الاضطراب العاطفي يتميز بنوبات لا يمكن السيطرة عليها من البكاء أو الضحك أو البكاء والضحك معا أو المشاعر العاطفية الأخرى. يحدث هذا المرض ثانويًا نتيجة لاضطراب عصبي أو إصابة في الدماغ. (Pseudobulbar Affect)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000099244.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kluver-bucy-syndrome",
    "term_en": "Kluver-Bucy Syndrome",
    "term_ar": "متلازمة كلوفر بوسي",
    "synonyms": [
      "Syndrome, Kluver-Bucy",
      "Temporal Lobectomy Behavior Syndrome",
      "Klüver–Bucy syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neurobehavioral syndrome associated with bilateral medial temporal lobe dysfunction. Clinical manifestations include oral exploratory behavior; tactile exploratory behavior; hypersexuality; BULIMIA; MEMORY DISORDERS; placidity; and an inability to recognize objects or faces. This disorder may result from a variety of conditions, including CRANIOCEREBRAL TRAUMA; infections; ALZHEIMER DISEASE; PICK DISEASE OF THE BRAIN; and CEREBROVASCULAR DISORDERS.",
    "arabic_definition": "متلازمة كلوفر بوسي (الإنجليزية: Klüver–Bucy syndrome) هي متلازمة ناتجة عن تلف في الفص الصدغي (بما في ذلك النواة اللوزية الشكل) في كلا جانبي المخ. قد يصاحب متلازمة كلوفر بوسي فرط الأكل، فرط الرغبة الجنسية، عمى إبصاري، وانقياد. (Kluver-Bucy Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020232.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "learning-disabilities",
    "term_en": "Learning Disabilities",
    "term_ar": "عجز التعلم",
    "synonyms": [
      "Disabilities, Learning",
      "Disability, Learning",
      "Learning Disability",
      "Adult Learning Disabilities",
      "Adult Learning Disability",
      "Disabilities, Adult Learning",
      "Disability, Adult Learning",
      "Learning Disabilities, Adult"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Conditions characterized by a significant discrepancy between an individual's perceived level of intellect and their ability to acquire new language and other cognitive skills. These may result from organic or psychological conditions. Relatively common subtypes include DYSLEXIA, DYSCALCULIA, and DYSGRAPHIA.",
    "arabic_definition": "عَجْزُ التَّعَلُّم مصطلح عام يصف التحديات التي تواجه الأطفال ضمن عملية التعلم، وبعض العمليات المتصلة بالتعلم كالفهم، أو التفكير، أوالإدراك، أو الانتباه، أو القراءة «عسر القراءة»، أو الكتابة، أو التهجي، أو النطق، أو إجراء العمليات الحسابية أو في المهارات المتصلة بكل من العمليات السابقة، وتتضمن حالات صعوبات التعلم ذوي الإعاقة العقلية والمضطربين انفعاليا والمصابين بأمراض وعيوب السمع والبصر وذوي الإعاقات بشرط أن لا تكون تلك الإعاقة هي سبب الصعوبة لديه. (Learning Disabilities)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007859.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "west-nile-fever",
    "term_en": "West Nile Fever",
    "term_ar": "حمى غرب النيل",
    "synonyms": [
      "West Nile Virus Infection",
      "WNV Infection",
      "Infection, WNV",
      "WNV Infections",
      "Encephalitis, West Nile Fever",
      "West Nile Fever Encephalitis",
      "West Nile Fever Meningitis",
      "West Nile Fever Meningoencephalitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mosquito-borne viral illness caused by the WEST NILE VIRUS, a FLAVIVIRUS and endemic to regions of Africa, Asia, and Europe. Common clinical features include HEADACHE; FEVER; maculopapular rash; gastrointestinal symptoms; and lymphadenopathy. MENINGITIS; ENCEPHALITIS; and MYELITIS may also occur. The disease may occasionally be fatal or leave survivors with residual neurologic deficits. (From Joynt, Clinical Neurology, 1996, Ch26, p13; Lancet 1998 Sep 5;352(9130):767-71)",
    "arabic_definition": "حمّى غرب النيل هو مرض فيروسي ينتشر بواسطة البعوض. لا تظهر أعراض أو قد تظهر أعراض قليلة عند حوالي 75% من الأشخاص المصابين. (West Nile Fever)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014901.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fragile-x-syndrome",
    "term_en": "Fragile X Syndrome",
    "term_ar": "متلازمة الصبغي X الهش",
    "synonyms": [
      "Fragile X Syndromes",
      "Syndrome, Fragile X",
      "Syndromes, Fragile X",
      "Marker X Syndrome",
      "Marker X Syndromes",
      "Syndrome, Marker X",
      "Syndromes, Marker X",
      "Fra(X) Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized genotypically by mutation of the distal end of the long arm of the X chromosome (at gene loci FRAXA or FRAXE) and phenotypically by cognitive impairment, hyperactivity, SEIZURES, language delay, and enlargement of the ears, head, and testes. INTELLECTUAL DISABILITY occurs in nearly all males and roughly 50% of females with the full mutation of FRAXA. (From Menkes, Textbook of Child Neurology, 5th ed, p226)",
    "arabic_definition": "متلازمة الصبغي س أو X الهش (الإنجليزية: Fragile X Syndrom) هي اضطراب وراثي يتميز بإعاقة ذهنية خفيفة إلى متوسطة. يكون متوسط معدل الذكاء عند الذكور المصابين بالمتلازمة أقل من 55 بشكل عام، في حين تعاني ثلثا الإناث من إعاقات فكرية. (Fragile X Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005600.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eosinophilia-myalgia-syndrome",
    "term_en": "Eosinophilia-Myalgia Syndrome",
    "term_ar": "متلازمة فرط الحمضات المصحوبة بألم عضلي",
    "synonyms": [
      "Eosinophilia-Myalgia Syndromes",
      "Syndrome, Eosinophilia-Myalgia",
      "Syndromes, Eosinophilia-Myalgia",
      "Eosinophilia-Myalgia Syndrome, L-Tryptophan-Related",
      "Eosinophilia-Myalgia Syndromes, L-Tryptophan-Related",
      "L-Tryptophan-Related Eosinophilia-Myalgia Syndromes",
      "Syndrome, L-Tryptophan-Related Eosinophilia-Myalgia",
      "Syndromes, L-Tryptophan-Related Eosinophilia-Myalgia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A complex systemic syndrome with inflammatory and autoimmune components that affect the skin, fascia, muscle, nerve, blood vessels, lung, and heart. Diagnostic features generally include EOSINOPHILIA, myalgia severe enough to limit usual activities of daily living, and the absence of coexisting infectious, autoimmune or other conditions that may induce eosinophilia. Biopsy of affected tissue reveals a microangiopathy associated with diffuse inflammation involving connective tissue. (From Spitzer et al., J Rheumatol Suppl 1996 Oct;46:73-9; Blackburn WD, Semin Arthritis Rheum 1997 Jun;26(6):788-93)",
    "arabic_definition": "متلازمة فرط الحمضات المصحوبة بألم عضلي هي حالة عصبية غير قابلة للشفاء تشبه الإنفلونزا، وقد تكون مميتة في بعض الأحيان، وترتبط بتناول المكمل الغذائي ال تريبتوفانL-tryptophan. يزداد خطر الإصابة بمتلازمة فرط الحمضات بتناول جرعات كبيرة من التريبتوفان والتقدم في العمر. (Eosinophilia-Myalgia Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016603.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shaken-baby-syndrome",
    "term_en": "Shaken Baby Syndrome",
    "term_ar": "متلازمة الرضيع المهزوز",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Brain injuries resulted from vigorous shaking of an infant or young child held by the chest, shoulders, or extremities causing extreme cranial acceleration. It is characterized by the intracranial and intraocular hemorrhages with no evident external trauma. Serious cases may result in death.",
    "arabic_definition": "متلازمة الرضيع المهزوز (اختصارًا SBS) هي مجموعة من النتائج الطبية (غالبا ما يشار إليها باسم «ثالوث») المتمثلة في الورم الدموي تحت الجافية (نزيف الدماغ)، ونزيف شبكية العين، وتورم في الدماغ تحدث بسبب إساءة معاملة الطفل الناجمة عن الهْز العنيف وحسب استنتاج الأطباء يتفق مع المفهوم الطبي الحالي. في معظم الحالات لا يوجد لها دليل خارجي واضح على الإصابة. (Shaken Baby Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D038642.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trisomy-13-syndrome",
    "term_en": "Trisomy 13 Syndrome",
    "term_ar": "متلازمة باتو",
    "synonyms": [
      "Bartholin-Patau Syndrome",
      "Chromosome 13 Trisomy Syndrome",
      "Patau's Syndrome",
      "Pataus Syndrome",
      "Trisomy 13 Syndromes",
      "Patau Syndrome",
      "Chromosome 13 Duplication",
      "Chromosome 13 Duplications"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chromosome disorder associated with TRISOMY of all or part of CHROMOSOME 13. Clinical manifestations include CONGENITAL HEART DEFECTS (e.g., PATENT DUCTUS ARTERIOSUS), facial malformations (e.g., CLEFT LIP; CLEFT PALATE; COLOBOMA; MICROPHTHALMIA); HYPOTONIA, digit malformations (e.g., POLYDACTYLY or SYNDACTYLY), and SEIZURES and severe INTELLECTUAL DISABILITY associated with NERVOUS SYSTEM MALFORMATIONS.",
    "arabic_definition": "متلازمة باتو (الإنجليزية: Patau Syndrome) ويسمى أيضًا تثلث الصبغي 13 هو خلل في انقسام الخلية عند تكوين البويضة أو الحيوان المنوي ادى إلى زيادة في العدد الإجمالي للكروموسومات - تكون الزيادة في عدد كروموسومات 13,من نسختين إلى 3 نسخ. نسبة حدوثها حالة لكل 20000 ولادة. (Trisomy 13 Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000073839.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aids-dementia-complex",
    "term_en": "AIDS Dementia Complex",
    "term_ar": "اضطراب عصبي معرفي مرتبط بفيروس نقص المناعة البشري",
    "synonyms": [
      "Complex, AIDS Dementia",
      "Dementia Complex, AIDS",
      "HIV-Associated Cognitive Motor Complex",
      "AIDS-Related Dementia Complex",
      "Acquired-Immune Deficiency Syndrome Dementia Complex",
      "Dementia Complex, Acquired Immune Deficiency Syndrome",
      "HIV Dementia",
      "Dementia, HIV"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neurologic condition associated with the ACQUIRED IMMUNODEFICIENCY SYNDROME and characterized by impaired concentration and memory, slowness of hand movements, ATAXIA, incontinence, apathy, and gait difficulties associated with HIV-1 viral infection of the central nervous system. Pathologic examination of the brain reveals white matter rarefaction, perivascular infiltrates of lymphocytes, foamy macrophages, and multinucleated giant cells. (From Adams et al., Principles of Neurology, 6th ed, pp760-1; N Engl J Med, 1995 Apr 6;332(14):934-40)",
    "arabic_definition": "الاضطراب العصبي المعرفي المرتبط بفيروس نقص المناعة البشرية (الإنجليزية: HIV-associated neurocognitive disorder) هي الاضطرابات العصبية المرتبطة بفيروس نقص المناعة البشرية والإيدز، وتشمل ذلك اضطرابات عصبية من مختلفة في الشدة. وترتبط الاضطرابات العصبية المرتبطة بفيروس نقص المناعة البشرية باعتلال الدماغ الأيضي الناجم عن عدوى الفيروس، ويغذيه تنشيط المناعة عبر الخلايا الأكولة الكبيرة والخلايا الدبقية الصغيرة، لأن هذه الخلايا مصابة بشكل فعال بالفيروس، وتفرز السموم العصبية ناتجة من الإنسان (المضيف) والفيروس. (AIDS Dementia Complex)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015526.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "empty-sella-syndrome",
    "term_en": "Empty Sella Syndrome",
    "term_ar": "متلازمة السرج الخالي",
    "synonyms": [
      "Empty Sella Syndromes",
      "Empty Sella Turcica",
      "Empty Sella Turcicas",
      "Sella Turcica, Empty",
      "Sella Turcicas, Empty",
      "Empty Sella Turcica Syndrome",
      "Empty Sella Syndrome, Primary",
      "Primary Empty Sella Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition when the SELLA TURCICA is not filled with pituitary tissue. The pituitary gland is either compressed, atrophied, or removed. There are two types: (1) primary empty sella is due a defect in the sella diaphragm leading to arachnoid herniation into the sellar space; (2) secondary empty sella is associated with the removal or treatment of PITUITARY NEOPLASMS.",
    "arabic_definition": "متلازمة السرجِ الخالي وتسمى أيضًا متلازمة ضمور الغدة النخامية أو متلازمة الكرسي الفارغ أو متلازمة السرج الفارغ وهي تركيب عظمي في قاعدة الدماغ الذي يحوي الغدة النخامية ويحيط ويحمي الغدة النخامية.حيث يكون السرج في هذه المتلازمة، مكان الغدة النخامية واسع بينما تكون الغدة في حجمها الطبيعي أو أصغر. (Empty Sella Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004652.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "central-cord-syndrome",
    "term_en": "Central Cord Syndrome",
    "term_ar": "متلازمة الحبل المركزية",
    "synonyms": [
      "Central Cord Injury Syndrome",
      "Central Spinal Cord Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome associated with traumatic injury to the cervical or upper thoracic regions of the spinal cord characterized by weakness in the arms with relative sparing of the legs and variable sensory loss. This condition is associated with ischemia, hemorrhage, or necrosis involving the central portions of the spinal cord. Corticospinal fibers destined for the legs are spared due to their more external location in the spinal cord. This clinical pattern may emerge during recovery from spinal shock. Deficits may be transient or permanent.",
    "arabic_definition": "متلازمة الحبل المركزية (الإنجليزية: Central cord syndrome) هي أكثر إصابات الحبل الشوكي في الفقرات العنقية. إرتبطت متلازمة الحبل المركزية بجرح مؤلم في المناطق الصدرية العنقية أو العليا للحبل الشوكي وتميزت بالضعف في النسبي في السيقان وخسارة في المتغيّرات الحسّية.وقد تسبب إلى النزف، أو نخر الذي يتضمّن الأجزاء المركزية للحبل الشوكي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020210.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "motor-neuron-disease",
    "term_en": "Motor Neuron Disease",
    "term_ar": "تصلب جانبي ضموري",
    "synonyms": [
      "Motor Neuron Diseases",
      "Neuron Disease, Motor",
      "Neuron Diseases, Motor",
      "Motor System Disease",
      "Motor System Diseases",
      "Anterior Horn Cell Disease",
      "Lateral Sclerosis",
      "Lateral Scleroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases characterized by a selective degeneration of the motor neurons of the spinal cord, brainstem, or motor cortex. Clinical subtypes are distinguished by the major site of degeneration. In AMYOTROPHIC LATERAL SCLEROSIS there is involvement of upper, lower, and brainstem motor neurons. In progressive muscular atrophy and related syndromes (see MUSCULAR ATROPHY, SPINAL) the motor neurons in the spinal cord are primarily affected. With progressive bulbar palsy (BULBAR PALSY, PROGRESSIVE), the initial degeneration occurs in the brainstem. In primary lateral sclerosis, the cortical neurons are affected in isolation. (Adams et al., Principles of Neurology, 6th ed, p1089)",
    "arabic_definition": "التصلب الجانبي الضموري أو مرض العصبون الحركي أو مرض لو غيهريك (الإنجليزية: Amyotrophic lateral sclerosis)، هو مرض عصبي تنكسي نادر ونهائي يتميز بفقدان تدريجي لكل من العصبونات الحركية العليا والسفلى، وهي الخلايا العصبية المسؤولة عن التحكم في الانقباض الإرادي للعضلات. يُعد التصلب الجانبي الضموري أكثر أمراض العصبونات الحركية شيوعًا. (Motor Neuron Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016472.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fatal-familial-insomnia",
    "term_en": "Fatal Familial Insomnia",
    "term_ar": "أرق مميت",
    "synonyms": [
      "Fatal Familial Insomnias",
      "Insomnias, Fatal Familial",
      "Insomnia Familial Fatal",
      "Familial Fatal, Insomnia",
      "Familial Fatals, Insomnia",
      "Fatal, Insomnia Familial",
      "Fatals, Insomnia Familial",
      "Insomnia Familial Fatals"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant disorder characterized by degeneration of the THALAMUS and progressive insomnia. It is caused by a mutation in the prion protein (PRIONS).",
    "arabic_definition": "الأرق المُميت (الإنجليزية: Fatal insomnia) مرضٌ وراثي نادر جدًا من أمراض البريون التي تصيب الدماغ وتنتقل وراثيًا بشكل سائد على الكروموسومات الجسمية. الجين السائد المسؤول عن ظهور هذا المرض لم يوجد إلا في 40 عائلة فقط حول العالم، ويكفي أن يكون أحد الأبوين حاملا للجين ليواجه الأبناء احتمالية حملهم للجين وإصابتهم للمرض بنسبة 50%. (Fatal Familial Insomnia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034062.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carpal-tunnel-syndrome",
    "term_en": "Carpal Tunnel Syndrome",
    "term_ar": "متلازمة النفق الرسغي",
    "synonyms": [
      "Carpal Tunnel Syndromes",
      "Syndrome, Carpal Tunnel",
      "Syndromes, Carpal Tunnel",
      "Compression Neuropathy, Carpal Tunnel",
      "Entrapment Neuropathy, Carpal Tunnel",
      "Median Neuropathy, Carpal Tunnel",
      "Amyotrophy, Thenar, Of Carpal Origin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Entrapment of the MEDIAN NERVE in the carpal tunnel, which is formed by the flexor retinaculum and the CARPAL BONES. This syndrome may be associated with repetitive occupational trauma (CUMULATIVE TRAUMA DISORDERS); wrist injuries; AMYLOID NEUROPATHIES; rheumatoid arthritis (see ARTHRITIS, RHEUMATOID); ACROMEGALY; PREGNANCY; and other conditions. Symptoms include burning pain and paresthesias involving the ventral surface of the hand and fingers which may radiate proximally. Impairment of sensation in the distribution of the median nerve and thenar muscle atrophy may occur. (Joynt, Clinical Neurology, 1995, Ch51, p45)",
    "arabic_definition": "متلازمة النفق الرسغي أو لُزمة قناة الرسغ أو شَلَلُ العَصَبِ المُتَوَسِّطِ المُتَأَخِّر (الإنجليزية: Carpal tunnel syndrome) هي حالة طبية تنتج من انضغاط العصب المتوسط في النفق الرسغي، والذي ينتج عنه اعتلال هذا العصب. وتظهر الأعراض الرئيسية في شكل ألم، وتنميل، وخدران في الإبهام، والسبابة، والوسطى، والجانب الإبهامي من إصبع البنصر.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002349.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "restless-legs-syndrome",
    "term_en": "Restless Legs Syndrome",
    "term_ar": "متلازمة تململ الساقين",
    "synonyms": [
      "Willis-Ekbom Disease",
      "Disease, Willis-Ekbom",
      "Willis-Ekbom Syndrome",
      "Syndrome, Willis-Ekbom",
      "Wittmaack Ekbom Syndrome",
      "Syndrome, Wittmaack Ekbom",
      "Restless Leg Syndrome",
      "Syndrome, Restless Leg"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder characterized by aching or burning sensations in the lower and rarely the upper extremities that occur prior to sleep or may awaken the patient from sleep.",
    "arabic_definition": "متلازمة تململ الساقين (الإنجليزية: Restless legs syndrome - RLS) هو اضطراب في جزء من الجهاز العصبي ويؤثر على الساقين ويدفع إلى تحريكهما ويحصل بشكل أساسي عند وقت النوم ولذلك يعتبر من اضطرابات النوم حيث يشتكي المصابون بها من شعور غريب وغير مريح يصيب كلتا الساقين لدى سكون الجسم، والاستلقاء للنوم بالليل، يؤدي إلى الرغبة الملحّة في تحريكهما، ما يعطي بعض الارتياح قصير الأمد. الناس الذين يعانون من متلازمة تململ الساقين يشعرون بأحاسيس غير مريحة في ارجلهم وأحيانا في ايديهم أو اجزاء أخرى من اجسامهم وهذه الاحاسيس تصبح أكثر سوءا عند وقت الراحة أو الجلوس وتؤدي إلى الإجهاد وانعدام النوم.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012148.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chronic-wasting-disease",
    "term_en": "Chronic Wasting Disease",
    "term_ar": "مرض الهزال المزمن",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A transmissible spongiform encephalopathy (prion disease) of DEER and elk characterized by chronic weight loss leading to death. It is thought to spread by direct contact between animals or through environmental contamination with the prion protein (PRIONS).",
    "arabic_definition": "مرض الهزال المزمن أو مرض الالتهاب المزمن (اختصارًا CWD) هو اعتلال دماغي إسفنجي معد (TSE) ومميت شبيه بمرض جنون البقر أو قعاص الغنم أو مرض كروتزفيلد جاكوب عند البشر، يؤثر المرض تحديدا في (غزال البغل، أو الغزلان ذي الذيل الأبيض، الأيائل، حيوانات الأميركة الشمالية الموظ الشبيه بالإلكة، والرنة). ولا تزال أسباب هذا المرض الناشئ غير مفهومه بشكل جيد حتى الآن. (Chronic Wasting Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034081.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "charles-bonnet-syndrome",
    "term_en": "Charles Bonnet Syndrome",
    "term_ar": "متلازمة شارل بونيه",
    "synonyms": [
      "Visual release hallucinations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Repetitive visual hallucinations experienced mostly by elderly with diminished visual acuity or visual field loss, with awareness of the fictional nature of their hallucinations. It is not associated with delusions and other sensory hallucinations.",
    "arabic_definition": "متلازمة شارل بونيه (الإنجليزية: Charles Bonnet syndrome) هي حالة مرضية يعاني المريض على إثرها من هلوسة بصرية معقدة. اكتشفها شارل بونيه عام 1769 وسميت على اسمه.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000075562.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thoracic-outlet-syndrome",
    "term_en": "Thoracic Outlet Syndrome",
    "term_ar": "متلازمة مخرج الصدر",
    "synonyms": [
      "Outlet Syndromes, Thoracic",
      "Outlet Syndrome, Thoracic",
      "Syndromes, Thoracic Outlet",
      "Syndrome, Thoracic Outlet",
      "Thoracic Outlet Syndromes",
      "Aperture Syndrome, Thoracic Outlet",
      "Neurovascular Syndrome, Thoracic Outlet",
      "Superior Thoracic Aperture Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A neurovascular syndrome associated with compression of the BRACHIAL PLEXUS; SUBCLAVIAN ARTERY; and SUBCLAVIAN VEIN at the superior thoracic outlet. This may result from a variety of anomalies such as a CERVICAL RIB, anomalous fascial bands, and abnormalities of the origin or insertion of the anterior or medial scalene muscles. Clinical features may include pain in the shoulder and neck region which radiates into the arm, PARESIS or PARALYSIS of brachial plexus innervated muscles, PARESTHESIA, loss of sensation, reduction of arterial pulses in the affected extremity, ISCHEMIA, and EDEMA. (Adams et al., Principles of Neurology, 6th ed, pp214-5).",
    "arabic_definition": "متلازمة مخرج الصدر (الإنجليزية: Thoracic Outlet Syndrome) واختصاراً TOS. تعرف بأنها مجموعة من الأعراض والعلامات الناتجة عن انضغاط الحزمة العصبية الوعائية بالبنى المختلفة الموجودة فوق الضلع الأول وخلف الترقوة. تقسم متلازمة مخرج الصدر بناءً على البنية المضغوطة إلى: متلازمة مخرج الصدر العصبية neurogenic TOS:يحدث فيها انضغاط الضفيرة العضدية وتشكل 95% من الحالات.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013901.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "optic-nerve-hypoplasia",
    "term_en": "Optic Nerve Hypoplasia",
    "term_ar": "نقص تنسج العصب البصري",
    "synonyms": [
      "Hypoplasia, Optic Nerve",
      "Superior Segmental Optic Nerve Hypoplasia",
      "Superior Segmental Optic Hypoplasia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of rare genetic disorders characterized by underdeveloped OPTIC NERVES, resulting in increased incidences of vision impairment, CONGENITAL NYSTAGMUS and STRABISMUS. It may be syndromic, and is often associated with CNS malformations.",
    "arabic_definition": "نقص تنسج العصب البصري (الإنجليزية: Optic nerve hypoplasia) هو حالة طبية تبرز من نقص نمو العصب البصري.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000080344.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "st-louis-encephalitis",
    "term_en": "St. Louis Encephalitis",
    "term_ar": "التهاب دماغ القديس لويس",
    "synonyms": [
      "Lethargic Encephalitis, Type C",
      "St. Louis Viral Encephalitis",
      "Encephalitis, Saint Louis",
      "Encephalitis, Viral, St. Louis",
      "Type C Lethargic Encephalitis",
      "Saint Louis Encephalitis",
      "Meningoencephalitis, St. Louis",
      "St. Louis Meningoencephalitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A viral encephalitis caused by the St. Louis encephalitis virus (ENCEPHALITIS VIRUS, ST. LOUIS), a FLAVIVIRUS. It is transmitted to humans and other vertebrates primarily by mosquitoes of the genus CULEX. The primary animal vectors are wild birds and the disorder is endemic to the midwestern and southeastern United States. Infections may be limited to an influenza-like illness or present as an ASEPTIC MENINGITIS or ENCEPHALITIS. Clinical manifestations of the encephalitic presentation may include SEIZURES, lethargy, MYOCLONUS, focal neurologic signs, COMA, and DEATH. (From Adams et al., Principles of Neurology, 6th ed, p750)",
    "arabic_definition": "التهاب دماغ القديس لويس (الإنجليزية: Saint Louis encephalitis) هو نوع من أنواع التهاب الدماغ وتسببه فيروس التهاب دماغ القديس لويس المنقول بواسطة بعوضة من نوع منسونية. يوجد هذا المرض في الولايات المتحدة. (St. Louis Encephalitis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004674.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "obstructive-sleep-apnea",
    "term_en": "Obstructive Sleep Apnea",
    "term_ar": "انقطاع النفس الانسدادي النومي",
    "synonyms": [
      "Apneas, Obstructive Sleep",
      "Obstructive Sleep Apneas",
      "Sleep Apneas, Obstructive",
      "Apnea, Obstructive Sleep",
      "Sleep Apnea Hypopnea Syndrome",
      "Obstructive Sleep Apnea Syndrome",
      "Syndrome, Obstructive Sleep Apnea",
      "Syndrome, Sleep Apnea, Obstructive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder characterized by recurrent apneas during sleep despite persistent respiratory efforts. It is due to upper airway obstruction. The respiratory pauses may induce HYPERCAPNIA or HYPOXIA. Cardiac arrhythmias and elevation of systemic and pulmonary arterial pressures may occur. Frequent partial arousals occur throughout sleep, resulting in relative SLEEP DEPRIVATION and daytime tiredness. Associated conditions include OBESITY; ACROMEGALY; MYXEDEMA; micrognathia; MYOTONIC DYSTROPHY; adenotonsilar dystrophy; and NEUROMUSCULAR DISEASES. (From Adams et al., Principles of Neurology, 6th ed, p395)",
    "arabic_definition": "انقطاع النفس الانسدادي النومي هو حالة مَرَضيَّة تتصف بتوقف مؤقَّت أو نوع من التنفس المتقطع خلال النوم، كل توقف في التنفس يُسمى«انقطاع النَّفَس»؛ (الإنجليزية: Apnea)، ويستمر لعدة ثواني إلى عدَّة دقائق، وتتكرر هذه الظاهرة خمس مرات -على الأقل- في الساعة. وكذلك فإنَّ الانخفاض في مُعدَّل النّفَس يُدعى «ضعف التنفُّس»، (الإنجليزية: Hypopnea). (Obstructive Sleep Apnea)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020181.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lennox-gastaut-syndrome",
    "term_en": "Lennox Gastaut Syndrome",
    "term_ar": "متلازمة لينوكس-غاستو",
    "synonyms": [
      "Lennox Gastaut Syndromes",
      "Lennox–Gastaut syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A childhood-onset epilepsy syndrome.",
    "arabic_definition": "متلازمة لينوكس-غاستو (اختصارًا LGS) هي حالة صرع بدائية عند الأطفال وتظهر غالباً عند الفئة العمرية من سنتين إلى ست سنوات. وتتمثل بثلاث علامات منها نوبات صرع متعددة الأنواع متكررة، نمط غير طبيعي من موجات الدماغ تكون عبارة عن نشاط موجي بطيء تردده أقل من 2.5 هيرتز، ويتراوح الاعتلال العقلي في هذه الحالة من معتدل إلى حاد. (Lennox Gastaut Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065768.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tarsal-tunnel-syndrome",
    "term_en": "Tarsal Tunnel Syndrome",
    "term_ar": "متلازمة نفق عظم الكعب",
    "synonyms": [
      "Syndromes, Tarsal Tunnel",
      "Syndrome, Tarsal Tunnel",
      "Tarsal Tunnel Syndromes",
      "Tunnel Syndromes, Tarsal",
      "Tunnel Syndrome, Tarsal",
      "Entrapment Neuropathy, Tarsal Tunnel",
      "Posterior Tibial Nerve Neuralgia",
      "Tarsal Tunnel Entrapment Neuropathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Entrapment of the distal branches of the posterior TIBIAL NERVE (which divides into the medial plantar, lateral plantar, and calcanial nerves) in the tarsal tunnel, which lies posterior to the internal malleolus and beneath the retinaculum of the flexor muscles of the foot. Symptoms include ankle pain radiating into the foot which tends to be aggravated by walking. Examination may reveal Tinel's sign (radiating pain following nerve percussion) over the tibial nerve at the ankle, weakness and atrophy of the small foot muscles, or loss of sensation in the foot. (From Foot Ankle 1990;11(1):47-52)",
    "arabic_definition": "تُعْرَف متلازمة نفق عظم الكَعْب أو متلازمة نفق رسغ القدم أو متلازمة النفق الرصغي أو متلازمة النفق الرسغي للقدم (الإنجليزية: Tarsal tunnel syndrome) بأنها اعتلال عصبي يتولَّد نتيجة الضغط على عصب قصبة الساق أثناء مروره في نفق عظم الكعب ويؤدي إلى حالة من الألم في القدم. ويمتدّ هذا النفق على طول الساق الداخلية خلف الكَعْبُ الإِنْسِيّ، الكعب الإنسي هو البروز الظاهر من الكاحل، بالتالي فإن نفق عظم الكعب يتموضع على الكاحل من الداخل.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013641.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "temporal-lobe-epilepsy",
    "term_en": "Temporal Lobe Epilepsy",
    "term_ar": "صرع الفص الصدغي",
    "synonyms": [
      "Epilepsies, Temporal Lobe",
      "Temporal Lobe Epilepsies",
      "Epilepsy, Uncinate",
      "Epilepsies, Uncinate",
      "Uncinate Epilepsies",
      "Uncinate Epilepsy",
      "Epilepsy, Benign Psychomotor, Childhood",
      "Benign Psychomotor Epilepsy, Childhood"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A localization-related (focal) form of epilepsy characterized by recurrent seizures that arise from foci within the TEMPORAL LOBE, most commonly from its mesial aspect. A wide variety of psychic phenomena may be associated, including illusions, hallucinations, dyscognitive states, and affective experiences. The majority of complex partial seizures (see EPILEPSY, COMPLEX PARTIAL) originate from the temporal lobes. Temporal lobe seizures may be classified by etiology as cryptogenic, familial, or symptomatic. (From Adams et al., Principles of Neurology, 6th ed, p321).",
    "arabic_definition": "صرع الفص الصدغي (الإنجليزية: Temporal lobe epilepsy) هو اضطراب مزمن في الجهاز العصبي يتميز بنوبات بؤرية متكررة غير محفَّزة (يعرف أيضا باسم النوبات الجزئية) التي تنشأ في الفص الصدغي للدماغ وتستمر حوالي دقيقة أو دقيقتين. صرع الفص الصدغي هو الشكل الأكثر شيوعا من الصرع ذو النوبات البؤرية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004833.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spinal-muscular-atrophy",
    "term_en": "Spinal Muscular Atrophy",
    "term_ar": "ضمور العضلات الشوكي",
    "synonyms": [
      "Atrophy, Spinal Muscular",
      "Spinal Amyotrophy",
      "Amyotrophies, Spinal",
      "Amyotrophy, Spinal",
      "Spinal Amyotrophies",
      "Myelopathic Muscular Atrophy",
      "Atrophy, Myelopathic Muscular",
      "Muscular Atrophy, Myelopathic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of disorders marked by progressive degeneration of motor neurons in the spinal cord resulting in weakness and muscular atrophy, usually without evidence of injury to the corticospinal tracts. Diseases in this category include Werdnig-Hoffmann disease and later onset SPINAL MUSCULAR ATROPHIES OF CHILDHOOD, most of which are hereditary. (Adams et al., Principles of Neurology, 6th ed, p1089)",
    "arabic_definition": "ضمور العضلات الشوكي (اختصارًا SMA) هو مرض وراثي يصيب الأعصاب التي تظهر من الحبل الشوكي الموجود في العمود الفقري. ويظهر على شكل ضمور عضلات الأطراف مع ارتخاء شديد في العضلات. (Spinal Muscular Atrophy)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009134.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cubital-tunnel-syndrome",
    "term_en": "Cubital Tunnel Syndrome",
    "term_ar": "متلازمة النفق المرفقي",
    "synonyms": [
      "Cubital Tunnel Syndromes",
      "Syndrome, Cubital Tunnel",
      "Syndromes, Cubital Tunnel",
      "Tunnel Syndrome, Cubital",
      "Tunnel Syndromes, Cubital",
      "Ulnar Nerve Compression, Cubital Tunnel",
      "Ulnar Nerve Entrapment, Elbow"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compression of the ULNAR NERVE in the cubital tunnel, which is formed by the two heads of the flexor carpi ulnaris muscle, humeral-ulnar aponeurosis, and medial ligaments of the elbow. This condition may follow trauma or occur in association with processes which produce nerve enlargement or narrowing of the canal. Manifestations include elbow pain and PARESTHESIA radiating distally, weakness of ulnar innervated intrinsic hand muscles, and loss of sensation over the hypothenar region, fifth finger, and ulnar aspect of the ring finger. (Joynt, Clinical Neurology, 1995, Ch51, p43)",
    "arabic_definition": "متلازمة النفق المرفقي (الإنجليزية: Cubital tunnel syndrome) هي اعتلالٌ عصبيٌ ناجمٌ عن احتباس العصب أو متلازمة الانضغاط العصبي، وهي حالةٌ تحدث نتيجةً لضغطٍ أو سحب أو احتكاك العصب الزندي عند المرفق. يُعرف أيضًا ضغط العصب بأنه العصب المحتبس.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020430.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "progressive-bulbar-palsy",
    "term_en": "Progressive Bulbar Palsy",
    "term_ar": "شلل بصلي مترقي",
    "synonyms": [
      "Bulbar Palsies, Progressive",
      "Palsies, Progressive Bulbar",
      "Palsy, Progressive Bulbar",
      "Progressive Bulbar Palsies",
      "Childhood Progressive Bulbar Palsy",
      "Progressive Bulbar Palsy of Childhood",
      "Bulbar Palsy, Progressive, Of Childhood",
      "Fazio-Londe Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A motor neuron disease marked by progressive weakness of the muscles innervated by cranial nerves of the lower brain stem. Clinical manifestations include dysarthria, dysphagia, facial weakness, tongue weakness, and fasciculations of the tongue and facial muscles. The adult form of the disease is marked initially by bulbar weakness which progresses to involve motor neurons throughout the neuroaxis. Eventually this condition may become indistinguishable from AMYOTROPHIC LATERAL SCLEROSIS. Fazio-Londe syndrome is an inherited form of this illness which occurs in children and young adults. (Adams et al., Principles of Neurology, 6th ed, p1091; Brain 1992 Dec;115(Pt 6):1889-1900)",
    "arabic_definition": "الشلل البصلي المترقي أو الشلل الدماغي التقدمي هو حالة طبية. وهو ينتمي إلى مجموعة من الاضطرابات المعروفة باسم أمراض الخلايا العصبية الحركية. (Progressive Bulbar Palsy)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010244.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "small-fiber-neuropathy",
    "term_en": "Small Fiber Neuropathy",
    "term_ar": "اعتلال الأعصاب المحيطية بالألياف الصغيرة",
    "synonyms": [
      "Neuropathies, Small Fiber",
      "Neuropathy, Small Fiber",
      "Small Fiber Neuropathies",
      "Small Fibre Neuropathy",
      "Neuropathies, Small Fibre",
      "Neuropathy, Small Fibre",
      "Small Fibre Neuropathies",
      "Small Nerve Fiber Neuropathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorder of the peripheral nerves that primarily impair small nerve fibers. The affected small nerve fibers include myelinated A-delta fibers (see A FIBERS) and unmyelinated C FIBERS. Because these small fibers innervate skin and help control autonomic function, their neuropathy presents with neuropathic pain, reduced thermal and pain sensitivity, and autonomic dysfunction (e.g. abnormal sweating or facial flushing). Small fiber neuropathy can be idiopathic or associated with underlying diseases (e.g., AMYLOIDOSIS; DIABETES MELLITUS; SARCOIDOSIS; or VASCULITIS).",
    "arabic_definition": "اعتلال الأعصاب المحيطية بالألياف الصغيرة هو نوع من اعتلال الأعصاب المحيطية التي تحدث نتيجة تلف الألياف العصبية المحيطية الصغيرة غير المغمدة بالميالين. تُقسم هذه الألياف إلى نوعين، ألياف «سي» وألياف «إيه δ» الصغيرة، وتتوزع في الجلد، والأعصاب المحيطية والأعضاء. (Small Fiber Neuropathy)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071075.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chronic-fatigue-syndrome",
    "term_en": "Chronic Fatigue Syndrome",
    "term_ar": "متلازمة التعب المزمن",
    "synonyms": [
      "Chronic Fatigue Syndromes",
      "Fatigue Syndromes, Chronic",
      "Chronic Fatigue-Fibromyalgia Syndrome",
      "Chronic Fatigue-Fibromyalgia Syndromes",
      "Fatigue-Fibromyalgia Syndrome, Chronic",
      "Fatigue-Fibromyalgia Syndromes, Chronic",
      "Infectious Mononucleosis-Like Syndrome, Chronic",
      "Royal Free Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterized by persistent or recurrent fatigue, diffuse musculoskeletal pain, sleep disturbances, and subjective cognitive impairment of 6 months duration or longer. Symptoms are not caused by ongoing exertion; are not relieved by rest; and result in a substantial reduction of previous levels of occupational, educational, social, or personal activities. Minor alterations of immune, neuroendocrine, and autonomic function may be associated with this syndrome. There is also considerable overlap between this condition and FIBROMYALGIA. (From Semin Neurol 1998;18(2):237-42; Ann Intern Med 1994 Dec 15;121(12): 953-9)",
    "arabic_definition": "التهاب الدماغ والنخاع الشوكي العضلي/متلازمة التعب المزمن (اختصارًا ME/CFS) هي مرضٌ مزمنٌ مسببٌ للإعاقة. يعاني المصابون بهذه المتلازمة من إعياء شديدٍ لا يزول بالراحة ومشاكل في النوم والذاكرة أو التركيز. (Chronic Fatigue Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015673.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "charcot-marie-tooth-disease",
    "term_en": "Charcot-Marie-Tooth Disease",
    "term_ar": "مرض شاركو-ماري-توث",
    "synonyms": [
      "Muscular Atrophy, Peroneal",
      "Atrophies, Peroneal Muscular",
      "Atrophy, Peroneal Muscular",
      "Muscular Atrophies, Peroneal",
      "Peroneal Muscular Atrophies",
      "Peroneal Muscular Atrophy",
      "Charcot-Marie-Tooth Syndrome",
      "Syndrome, Charcot-Marie-Tooth"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A hereditary motor and sensory neuropathy transmitted most often as an autosomal dominant trait and characterized by progressive distal wasting and loss of reflexes in the muscles of the legs (and occasionally involving the arms). Onset is usually in the second to fourth decade of life. This condition has been divided into two subtypes, hereditary motor and sensory neuropathy (HMSN) types I and II. HMSN I is associated with abnormal nerve conduction velocities and nerve hypertrophy, features not seen in HMSN II. (Adams et al., Principles of Neurology, 6th ed, p1343)",
    "arabic_definition": "مرض شاركو-ماري-توث أو اعتلال شاركو-ماري-توث العصبي، اعتلال الحركة والحس العصبي الموروث أو الضمور العضلي الشظوي هو مجموعة من الاضطرابات الموروثة المتغايرة جينياً وسريرياً تصيب الجهاز العصبي المحيطي ويتمثل بفقد مُتَرَقِّ في النسيج العضلي وحس اللمس في مختلف أجزاء الجسم دون التأثير على النمو العقلي أو أن يشكل خطراً على حياة المصاب. تم اكتشافه من قبل ثلاثة أطباء سنة 1886 وسمّي بأسمائهم. (Charcot-Marie-Tooth Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002607.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pelizaeus-merzbacher-disease",
    "term_en": "Pelizaeus-Merzbacher Disease",
    "term_ar": "مرض بليزايوس ميرتسباخر",
    "synonyms": [
      "Pelizaeus-Merzbacher Brain Sclerosis",
      "Brain Sclerosis, Pelizaeus-Merzbacher",
      "Pelizaeus-Merzbacher Sclerosis, Brain",
      "Brain Pelizaeus-Merzbacher Sclerosis",
      "Leukodystrophy, Hypomyelinating, 1",
      "Adult Pelizaeus-Merzbacher Disease",
      "Pelizaeus–Merzbacher disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare, slowly progressive disorder of myelin formation. Subtypes are referred to as classic, congenital, transitional, and adult forms of this disease. The classic form is X-chromosome linked, has its onset in infancy and is associated with a mutation of the proteolipid protein gene. Clinical manifestations include TREMOR, spasmus nutans, roving eye movements, ATAXIA, spasticity, and NYSTAGMUS, CONGENITAL. Death occurs by the third decade of life. The congenital form has similar characteristics but presents early in infancy and features rapid disease progression. Transitional and adult subtypes have a later onset and less severe symptomatology. Pathologic features include patchy areas of demyelination with preservation of perivascular islands (trigoid appearance). (From Menkes, Textbook of Child Neurology, 5th ed, p190)",
    "arabic_definition": "مرض بليزايوس ميرتسباخر (الإنجليزية: Pelizaeus–Merzbacher disease) هو مرض وراثي عصبي مرتبط بكروموسوم إكس مسؤول عن إتلاف الخلايا العصبية قليلة التغصن، تُسببه طفرة في البروتين الدهني 1، وهو بروتين ضروري في تكوين غشاء الميالين. يتّصف المرض بقلة في تكوين غشاء الميالين ويقع تصنيفه ضمن مجموعة من الأمراض الوراثية تُسمى بحثل المادة البيضاء. (Pelizaeus-Merzbacher Disease)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020371.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arnold-chiari-malformation",
    "term_en": "Arnold-Chiari Malformation",
    "term_ar": "تشوه آرنولد خياري",
    "synonyms": [
      "Arnold-Chiari Deformity",
      "Deformity, Arnold-Chiari",
      "Arnold-Chiari Syndrome",
      "Syndrome, Arnold-Chiari",
      "Malformation, Arnold-Chiari",
      "Arnold-Chiari Malformation, Type I",
      "Chiari malformation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of congenital malformations involving the brainstem, cerebellum, upper spinal cord, and surrounding bony structures. Type II is the most common, and features compression of the medulla and cerebellar tonsils into the upper cervical spinal canal and an associated MENINGOMYELOCELE. Type I features similar, but less severe malformations and is without an associated meningomyelocele. Type III has the features of type II with an additional herniation of the entire cerebellum through the bony defect involving the foramen magnum, forming an ENCEPHALOCELE. Type IV is a form a cerebellar hypoplasia. Clinical manifestations of types I-III include TORTICOLLIS; opisthotonus; HEADACHE; VERTIGO; VOCAL CORD PARALYSIS; APNEA; NYSTAGMUS, CONGENITAL; swallowing difficulties; and ATAXIA. (From Menkes, Textbook of Child Neurology, 5th ed, p261; Davis, Textbook of Neuropathology, 2nd ed, pp236-46)",
    "arabic_definition": "تشوه خياري والذي يعرف أيضا بـ:تشوه آرنولد خياري (الإنجليزية: Arnold–Chiari malformation) أو (ACM) هو حالة مرضية تحدث عند وجود تشوه خلقي نادر يصيب المخيخ وحجرة المخيخ الخلفية أو إذا كان حجم الجمجمة بالغ الصغر مما يؤدي إلى تغيير في موقع اللوزة المخيخية ودفعها نحو الأسفل من خلال الثقبة العظمى وقد يؤدي أحيانا إلى استسقاء رأس غير متواصل نتيجة لانسداد في جريان السائل الدماغي الشوكي. (Arnold-Chiari Malformation)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001139.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "frontotemporal-dementia",
    "term_en": "Frontotemporal Dementia",
    "term_ar": "الخرف الجبهي الصدغي",
    "synonyms": [
      "Dementias, Frontotemporal",
      "Frontotemporal Dementias",
      "Frontotemporal Dementia with Parkinsonism",
      "Dementia, Frontotemporal, with Parkinsonism",
      "Multiple System Tauopathy with Presenile Dementia",
      "Frontotemporal Dementia, Ubiquitin-Positive",
      "Dementias, Ubiquitin-Positive Frontotemporal",
      "Dementia, Ubiquitin-Positive Frontotemporal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The most common clinical form of FRONTOTEMPORAL LOBAR DEGENERATION, this dementia presents with personality and behavioral changes often associated with disinhibition, apathy, and lack of insight.",
    "arabic_definition": "الخرف الجبهي الصدغي (الإنجليزية: Frontotemporal dementia) أو داء التنكس الجبهي الصدغي، أو الداء العصبي المعرفي الجبهي الصدغي هو مرض يضم عدة أنواع من الخرف الشامل للفصين الجبهي والصدغي. تُعرف أنواع الخرف الجبهي الصدغي على نطاق واسع على أنها اضطرابات لغوية أو سلوكية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057180.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rubinstein-taybi-syndrome",
    "term_en": "Rubinstein-Taybi Syndrome",
    "term_ar": "متلازمة روبينشتاين - تايبي",
    "synonyms": [
      "Syndrome, Rubinstein-Taybi",
      "Rubinstein Syndrome",
      "Syndrome, Rubinstein",
      "Broad Thumb-Hallux Syndrome",
      "Broad Thumb-Hallux Syndromes",
      "Syndrome, Broad Thumb-Hallux",
      "Syndromes, Broad Thumb-Hallux",
      "Broad Thumbs and Great Toes, Characteristic Facies, and Mental Retardation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chromosomal disorder characterized by MENTAL RETARDATION, broad thumbs, webbing of fingers and toes, beaked nose, short upper lip, pouting lower lip, agenesis of corpus callosum, large foramen magnum, keloid formation, pulmonary stenosis, vertebral anomalies, chest wall anomalies, sleep apnea, and megacolon. The disease has an autosomal dominant pattern of inheritance and is associated with deletions of the short arm of chromosome 16 (16p13.3).",
    "arabic_definition": "متلازمة روبينشتاين - تايبي (بالإنجليزية Rubinstein-Taybi Syndrome)؛ وتسمى أيضًا بمتلازمة الإبهام الكبير. وهو مرض خلقي نادر، يحدث نتيجة حدوث طفرة في الموروث الجينى للإنسان، وهي ليست من المتلازمات التي تحدث نتيجة توارث الجينات بين الأجيال، تم التعرف على هذه المتلازمة عندما قام الطبيبان جاك روبينشتاين (الإنجليزية: Jack Rubinstein) وهوشانغ تايبي (الإنجليزية: Hooshang Taybi).",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012415.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metachromatic-leukodystrophy",
    "term_en": "Metachromatic Leukodystrophy",
    "term_ar": "حثل المادة البيضاء متبدل اللون",
    "synonyms": [
      "Leukodystrophies, Metachromatic",
      "Metachromatic Leukodystrophies",
      "Arylsulfatase A Deficiency Disease",
      "Cerebroside Sulphatase Deficiency Disease",
      "Sulfatide Lipidosis",
      "Lipidosis, Sulfatide",
      "Metachromatic Leukoencephalopathy",
      "Leukoencephalopathies, Metachromatic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive metabolic disease caused by a deficiency of CEREBROSIDE-SULFATASE leading to intralysosomal accumulation of cerebroside sulfate (SULFOGLYCOSPHINGOLIPIDS) in the nervous system and other organs. Pathological features include diffuse demyelination, and metachromatically-staining granules in many cell types such as the GLIAL CELLS. There are several allelic and nonallelic forms with a variety of neurological symptoms.",
    "arabic_definition": "حثل المادة البيضاء متبدل اللون (اختصارًا MLD) هو داءُ اختزانٍ في الجسيمات الحالّة، ويندرج هذا المرض ضمن عائلة حثل الكريات البيضاء وكذلك الشحامات السفنغولية لأنه يؤثر على استقلاب الشحميات السفينغولية. ويؤثر حثل الكريات البيضاء على نمو وتطور الميالين؛ وهو الغطاء الدهني الذي يعمل بمثابة عازل حول ألياف الأعصاب في جميع أنحاء الجهاز العصبي المركزي والمحيطي. (Metachromatic Leukodystrophy)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007966.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "landau-kleffner-syndrome",
    "term_en": "Landau-Kleffner Syndrome",
    "term_ar": "متلازمة لاندو-كليفنر",
    "synonyms": [
      "Syndrome, Landau-Kleffner",
      "Aphasia, Epileptic, Acquired",
      "Acquired Childhoood Aphasia with Convulsive Disorder",
      "Landau-Kleffner Acquired Epileptiform Aphasia",
      "Acquired Aphasia with Convulsive Disorder",
      "Acquired Epileptiform Aphasia",
      "Acquired Epileptiform Aphasias",
      "Epileptiform Aphasia, Acquired"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterized by the onset of isolated language dysfunction in otherwise normal children (age of onset 4-7 years) and epileptiform discharges on ELECTROENCEPHALOGRAPHY. Seizures, including atypical absence (EPILEPSY, ABSENCE), complex partial (EPILEPSY, COMPLEX PARTIAL), and other types may occur. The electroencephalographic abnormalities and seizures tend to resolve by puberty. The language disorder may also resolve although some individuals are left with severe language dysfunction, including APHASIA and auditory AGNOSIA. (From Menkes, Textbook of Child Neurology, 5th ed, pp749-50; J Child Neurol 1997 Nov;12(8):489-495).",
    "arabic_definition": "متلازمة لاندو-كليفنر وتعرف أيضاً بالحبسة الكلامية الطفولية المكتسبة، وبالحبسة الكلامية الصرعية المكتسبة، أو الحبسة الكلامية المترافقة مع اضطراب تشنجي؛ وهي متلازمة عصبية نادرة تحدث في الطفولة. سميت بهذا الاسم تيمناً بويليام لاندو وفرانك كليفنر، اللذان وصفاها عام 1957 وشخصاها لدى ستة أطفال. (Landau-Kleffner Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018887.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "corticobasal-degeneration",
    "term_en": "Corticobasal Degeneration",
    "term_ar": "تنكس قشري قاعدي",
    "synonyms": [
      "Cortico-basal Degeneration",
      "Cortico-basal Ganglionic Degeneration",
      "Corticobasal Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare progressive neurological disorder characterized by Parkinsonism, cortical atrophy of multiple areas of the brain including the cerebral cortex and the basal ganglia, cognitive dysfunction and eye movement abnormalities.",
    "arabic_definition": "التنكس القشري القاعدي (سي بي دي) هو مرض تنكسي عصبي نادر يصيب كلًا من القشرة المخية والعقد القاعدية. تبدأ أعراض «سي بي دي» نموذجيًا لدى المرضى في عمر 50 حتى 70 عامًا، ويصل متوسط مدة المرض إلى ست سنوات. (Corticobasal Degeneration)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000088282.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "walker-warburg-syndrome",
    "term_en": "Walker-Warburg Syndrome",
    "term_ar": "متلازمة والكر- فاربرج",
    "synonyms": [
      "Syndrome, Walker-Warburg",
      "Cerebroocular Dysplasia-Muscular Dystrophy Syndrome",
      "Chemke Syndrome",
      "Syndrome, Chemke",
      "COD-MD Syndrome",
      "COD-MD Syndromes",
      "Syndrome, COD-MD",
      "Walker–Warburg syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare autosomal recessive lissencephaly type 2 associated with congenital MUSCULAR DYSTROPHY and eye anomalies (e.g., RETINAL DETACHMENT; CATARACT; MICROPHTHALMOS). It is often associated with additional brain malformations such as HYDROCEPHALY and cerebellar hypoplasia and is the most severe form of the group of related syndromes (alpha-dystroglycanopathies) with common congenital abnormalities in the brain, eye and muscle development.",
    "arabic_definition": "متلازمة والكر- فاربرج (بالإنجليزية: Walker–Warburg syndrome، واختصارها WWS)، وتُسمى أيضًا متلازمة فاربرج، أو متلازمة هارد (HARD syndrome) حيث H: Hydrocephalus بمعنى موه الرأس، وA: Agyria بمعنى انعدام التلافيف، وRD: Retinal Dysplasia بمعنى خلل تنسج الشبكية، أو متلازمة باجون، أو خلل تكوّن العين والمخ، أو خلل تكوّن العين والمخ مع متلازمة الضمور العضلي، وهي عبارة عن شكل نادر من ضمور العضلات الخلقي المسؤول عنه صبغي جسمي متنحي. ويرتبط مع انعدام تلافيف الدماغ، واستسقاء الرأس، وتشوهات بالمخيخ، وتشوهات العين. (Walker-Warburg Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058494.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "post-concussion-syndrome",
    "term_en": "Post-Concussion Syndrome",
    "term_ar": "متلازمة ما بعد الارتجاج",
    "synonyms": [
      "Post-Concussive Syndrome",
      "Post-Concussive Syndromes",
      "Post-Concussion Symptoms",
      "Post-Concussion Symptom",
      "Post-Concussive Symptoms",
      "Post-Concussive Symptom"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The organic and psychogenic disturbances observed after closed head injuries (HEAD INJURIES, CLOSED). Post-concussion syndrome includes subjective physical complaints (i.e. headache, dizziness), cognitive, emotional, and behavioral changes. These disturbances can be chronic, permanent, or late emerging.",
    "arabic_definition": "متلازمة ما بعد الارتجاج، والمعروفة أيضًا باسم المتلازمة ما بعد الارتجاجية، هي مجموعة الأعراض التي ربما تستمر لأسابيع أو شهور أو سنة أو أكثر بعد الارتجاج - وهي عبارة عن شكل خفيف من إصابات الدماغ الرضية تختلف معدلات متلازمة ما بعد الارتجاج، لكن معظم الدراسات أوضحت أن حوالي 15% من الأفراد مع تاريخ من الارتجاج لمرة واحدة يصابون بأعراض دائمة مرتبطة بالإصابة. يمكن القيام بالتشخيص عند استمرار الأعراض الناجمة عن الارتجاج لأكثر من ثلاثة شهور بعد الإصابة. (Post-Concussion Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D038223.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurodegenerative-diseases",
    "term_en": "Neurodegenerative Diseases",
    "term_ar": "تحلل عصبي",
    "synonyms": [
      "Neurodegenerative Disease",
      "Degenerative Neurologic Disorders",
      "Degenerative Neurologic Disorder",
      "Neurologic Disorder, Degenerative",
      "Neurologic Disorders, Degenerative",
      "Nervous System Degenerative Diseases",
      "Neurodegenerative Disorders",
      "Neurodegenerative Disorder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hereditary and sporadic conditions which are characterized by progressive nervous system dysfunction. These disorders are often associated with atrophy of the affected central or peripheral nervous system structures.",
    "arabic_definition": "التحلل العصبي أو التآكل العصبي أو التنكس العصبي (الإنجليزية: Neurodegeneration) هو فقدان تدريجي متفاقم لبنية أو وظيفة الخلايا العصبية، بما قد يصل لموت الخلايا العصبية. العديد من الأمراض العصبية التحللية، بما في ذلك التصلب الجانبي الضموري ومرض باركنسون ومرض الزهايمر ومرض هنتنغتون، تحدث نتيجة لعمليات التحلل العصبي. (Neurodegenerative Diseases)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019636.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucopolysaccharidosis-ii",
    "term_en": "Mucopolysaccharidosis II",
    "term_ar": "متلازمة هنتر",
    "synonyms": [
      "Mucopolysaccharidosis 2",
      "Gargoylism, Hunter Syndrome",
      "Hunter Syndrome Gargoylism",
      "Mucopolysaccharidosis Type 2",
      "Mucopolysaccharidosis Type II",
      "Hunter's Syndrome",
      "Hunters Syndrome",
      "Syndrome, Hunter's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Systemic lysosomal storage disease marked by progressive physical deterioration and caused by a deficiency of L-sulfoiduronate sulfatase. This disease differs from MUCOPOLYSACCHARIDOSIS I by slower progression, lack of corneal clouding, and X-linked rather than autosomal recessive inheritance. The mild form produces near-normal intelligence and life span. The severe form usually causes death by age 15.",
    "arabic_definition": "متلازمة هنتر (الإنجليزية: Hunter syndrome)هي اضطراب جينى نادر يحدث عندما يكون انزيم جسمك إما مفقود أو به خلل. لأن الجسم ليس لديه امدادات كافية من الإنزيم الذي يكسر جزيئات معقدة معينة، وبناء الجزيئات بكميات ضارة في بعض الخلايا والأنسجة. (Mucopolysaccharidosis II)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016532.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transient-ischemic-attack",
    "term_en": "Transient Ischemic Attack",
    "term_ar": "نوبة نقص تروية عابرة",
    "synonyms": [
      "Brain TIA",
      "TIA, Brain",
      "TIA (Transient Ischemic Attack)",
      "TIAs (Transient Ischemic Attack)",
      "Attacks, Transient Ischemic",
      "Attack, Transient Ischemic",
      "Ischemic Attacks, Transient",
      "Transient Ischemic Attacks"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Brief reversible episodes of focal, nonconvulsive ischemic dysfunction of the brain having a duration of less than 24 hours, and usually less than one hour, caused by transient thrombotic or embolic blood vessel occlusion or stenosis. Events may be classified by arterial distribution, temporal pattern, or etiology (e.g., embolic vs. thrombotic). (From Adams et al., Principles of Neurology, 6th ed, pp814-6)",
    "arabic_definition": "نوبة نقص التروية العابرة أوالنوبة الإقفارية العابرة (الإنجليزية: Transient ischemic attack) هي نقص حاد في التروية لجزء من الدماغ ينجم عنه أعراض تماثل فقدان وظيفة هذا الجزء من الدماغ، كالفالجة (شلل نصفي) أو فقدان نصفي للإحساس، أو فقدان المقدرة على الكلام أو التعبير... الخ؛ لفترة زمنية قصيرة أقصاها 24 ساعة، لتعود تلك الأعراض وتختفي بشكل كامل (لذلك سمي الإقفار بالعابر).",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002546.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "von-hippel-lindau-disease",
    "term_en": "von Hippel-Lindau Disease",
    "term_ar": "داء فون هيبل - لينداو",
    "synonyms": [
      "Cerebelloretinal Angiomatosis, Familial",
      "Angiomatoses, Familial Cerebelloretinal",
      "Angiomatosis, Familial Cerebelloretinal",
      "Cerebelloretinal Angiomatoses, Familial",
      "Familial Cerebelloretinal Angiomatoses",
      "Familial Cerebelloretinal Angiomatosis",
      "Familial Cerebello-Retinal Angiomatosis",
      "Angiomatoses, Familial Cerebello-Retinal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant disorder caused by mutations in a tumor suppressor gene. This syndrome is characterized by abnormal growth of small blood vessels leading to a host of neoplasms. They include HEMANGIOBLASTOMA in the RETINA; CEREBELLUM; and SPINAL CORD; PHEOCHROMOCYTOMA; pancreatic tumors; and renal cell carcinoma (see CARCINOMA, RENAL CELL). Common clinical signs include HYPERTENSION and neurological dysfunctions.",
    "arabic_definition": "داء فون هيبل لينداو (الإنجليزية: Von Hippel-Lindau Disease)هو مرض وراثي نادر يسبب نمو أورام وكيسات في جسم الإنسان. وقد تكون هذه الأورام سرطانية أو حميدة، وقد تنمو في الدماغ والحبل الشوكي والكليتين والبنكرياس وفي الجهاز التناسلي عند الرجال.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006623.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transient-global-amnesia",
    "term_en": "Transient Global Amnesia",
    "term_ar": "فقدان الذاكرة الشامل العابر",
    "synonyms": [
      "Global Amnesia, Transient",
      "TGA (Transient Global Amnesia)",
      "TGAs (Transient Global Amnesia)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterized by a transient loss of the ability to form new memories. It primarily occurs in middle aged or elderly individuals, and episodes may last from minutes to hours. During the period of amnesia, immediate and recent memory abilities are impaired, but the level of consciousness and ability to perform other intellectual tasks are preserved. The condition is related to bilateral dysfunction of the medial portions of each TEMPORAL LOBE. Complete recovery normally occurs, and recurrences are unusual. (From Adams et al., Principles of Neurology, 6th ed, pp429-30)",
    "arabic_definition": "فقدان الذاكرة الشامل العابر (اختصارًا TGA) هو اضطراب عصبي يتضمن بشكل أساسي اختلال مؤقت ولكن شبه كامل في الذاكرة قصيرة المدى، وصعوبات في تذكر الذكريات القديمة. لا يُظهر المريض في حالة فقدان الذاكرة الشامل العابر أي علامات أخرى على الأداء الإدراكي الضعيف، لكنه يتذكر فقط اللحظات القليلة الأخيرة قبل أن يفقد الوعي، بالإضافة إلى بعض الحقائق المشفرة عن ماضيه، مثل طفولته أو أسرته أو منزله أحيانًا. (Transient Global Amnesia)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020236.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hereditary-spastic-paraplegia",
    "term_en": "Hereditary Spastic Paraplegia",
    "term_ar": "شلل نصفي تشنجي موروث",
    "synonyms": [
      "Hereditary Spastic Paraplegias",
      "Paraplegia, Hereditary Spastic",
      "Paraplegias, Hereditary Spastic",
      "Spastic Paraplegias, Hereditary",
      "Hypertrophic Motor-Sensory Neuropathy-Spastic Paraplegia",
      "Paraplegia, Spastic, Hereditary",
      "Spastic Paraplegia-Hypertrophic Motor-Sensory Neuropathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of inherited diseases that share similar phenotypes but are genetically diverse. Different genetic loci for autosomal recessive, autosomal dominant, and x-linked forms of hereditary spastic paraplegia have been identified. Clinically, patients present with slowly progressive distal limb weakness and lower extremity spasticity. Peripheral sensory neurons may be affected in the later stages of the disease. (J Neurol Neurosurg Psychiatry 1998 Jan;64(1):61-6; Curr Opin Neurol 1997 Aug;10(4):313-8)",
    "arabic_definition": "الشلل النصفي التشنجي الموروث (الإنجليزية: Hereditary spastic paraplegia) أو اختصارا HSP، هو مجموعة من الأمراض الوراثية النادرة، والتي تتمثل إحدى سماتها الرئيسية في اضطراب تدريجي في المشي. يظهر المرض على شكل تصلب تدريجي (التشنج) وانكماش في الأطراف السفلية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015419.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "persistent-vegetative-state",
    "term_en": "Persistent Vegetative State",
    "term_ar": "حالة إنباتية مستديمة",
    "synonyms": [
      "Persistent Unawareness State",
      "Persistent Unawareness States",
      "State, Persistent Unawareness",
      "States, Persistent Unawareness",
      "Unawareness State, Persistent",
      "Unawareness States, Persistent",
      "PVS (Persistent Vegetative State)",
      "PVSs (Persistent Vegetative State)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Vegetative state refers to the neurocognitive status of individuals with severe brain damage, in whom physiologic functions (sleep-wake cycles, autonomic control, and breathing) persist, but awareness (including all cognitive function and emotion) is abolished.",
    "arabic_definition": "الحالة الخُضرية الدائمة (نسبة إلى الخضراوات) أو الحالة الإنباتية المستديمة (بالإنجليزية: Persistent vegetative state) هي إحدى حالات اضطراب الوعي تحدث نتيجة وقوع أضرار أو تلف بخلايا المخ. وتختلف عن الغيبوبة Coma كونها قد يمر فيها المريض بمظاهر اليقظة والنوم، وفتح العينين وتحريكهما بشكل عشوائي، وإصدار بعض الأصوات غير المفهومة أو الصراخ أو البكاء أو بعض الحركات التي تشبه الابتسام أو الضحك ولكن لا تعبر هذه الحركات أبدًا عن إدراك المريض لنفسه أو لما حوله وإنما تعد هذه الحركات مجرد أفعال منعكسة لا إرادية.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018458.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "duchenne-muscular-dystrophy",
    "term_en": "Duchenne Muscular Dystrophy",
    "term_ar": "حثل عضلي دوشيني",
    "synonyms": [
      "Cardiomyopathy, Dilated, 3B",
      "Cardiomyopathy, Dilated, X-Linked",
      "Childhood Muscular Dystrophy, Pseudohypertrophic",
      "Childhood Pseudohypertrophic Muscular Dystrophy",
      "Duchenne-Type Progressive Muscular Dystrophy",
      "Muscular Dystrophy, Childhood, Pseudohypertrophic",
      "Muscular Dystrophy, Duchenne Type",
      "Muscular Dystrophy, Pseudohypertrophic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An X-linked recessive muscle disease caused by an inability to synthesize DYSTROPHIN, which is involved with maintaining the integrity of the sarcolemma. Muscle fibers undergo a process that features degeneration and regeneration. Clinical manifestations include proximal weakness in the first few years of life, pseudohypertrophy, cardiomyopathy (see MYOCARDIAL DISEASES), and an increased incidence of impaired mentation. Becker muscular dystrophy is a closely related condition featuring a later onset of disease (usually adolescence) and a slowly progressive course. (Adams et al., Principles of Neurology, 6th ed, p1415)",
    "arabic_definition": "الحثل العضلي الدوشيني (اختصارًا DMD) هو مرض وراثي يصيب جميع أنواع العضلات في الجسم، ويتميز بالضعف في العضلات التي تبدأ من عضلات الحوض، ثم يتطور بسرعة ليصيب جميع عضلات الجسم، وهو ما يؤدي إلى الأعاقة الحركية مبكراً ومن ثم الوفاة في منتصف العمر، ويبلغ معدل الإصابة واحد من 3500 ولادة من الذكورتقريباً، ونادراً ما يصيب الإناث. (Duchenne Muscular Dystrophy)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020388.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "normal-pressure-hydrocephalus",
    "term_en": "Normal Pressure Hydrocephalus",
    "term_ar": "استسقاء الرأس سوي الضغط",
    "synonyms": [
      "Hakim Syndrome",
      "Hakim Syndromes",
      "Syndrome, Hakim",
      "Syndromes, Hakim",
      "Hakim's Syndrome",
      "Hakims Syndrome",
      "Hakim's Syndromes",
      "Syndrome, Hakim's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of compensated hydrocephalus characterized clinically by a slowly progressive gait disorder (see GAIT DISORDERS, NEUROLOGIC), progressive intellectual decline, and URINARY INCONTINENCE. Spinal fluid pressure tends to be in the high normal range. This condition may result from processes which interfere with the absorption of CSF including SUBARACHNOID HEMORRHAGE, chronic MENINGITIS, and other conditions. (From Adams et al., Principles of Neurology, 6th ed, pp631-3)",
    "arabic_definition": "استسقاء الرأس سوي الضغط أو موه الرأس السوي الضغط (الإنجليزية: Normal pressure hydrocephalus أو NPH)، كما ويدعى أيضًا موه الرأس الأعراضيّ، هو اضطراب في الدماغ نابع من انخفاض في امتصاص السائل الدماغي الشوكي. تشمل أعراضه النموذجية اضطراب المشي، وسَلَس البول، والخَرَف أو تدهور نفسي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006850.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "globoid-cell-leukodystrophy",
    "term_en": "Globoid Cell Leukodystrophy",
    "term_ar": "مرض كرابي",
    "synonyms": [
      "Cell Leukodystrophies, Globoid",
      "Cell Leukodystrophy, Globoid",
      "Globoid Cell Leukodystrophies",
      "Leukodystrophies, Globoid Cell",
      "Globoid Cell Leukoencephalopathy",
      "Cell Leukoencephalopathies, Globoid",
      "Cell Leukoencephalopathy, Globoid",
      "Globoid Cell Leukoencephalopathies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive metabolic disorder caused by a deficiency of GALACTOSYLCERAMIDASE leading to intralysosomal accumulation of galactolipids such as GALACTOSYLCERAMIDES and PSYCHOSINE. It is characterized by demyelination associated with large multinucleated globoid cells, predominantly involving the white matter of the central nervous system. The loss of MYELIN disrupts normal conduction of nerve impulses.",
    "arabic_definition": "مرض كرابي (الإنجليزية: Krabbe disease) مرض نادر، وغالبًا ما يكون داء اختزان الجسيمات الحالة مُميتًا ويؤدي إلى ضرر مُترقي للجهاز العصبي. يشمل مرض كرابي أيض الشحميات السفينغولية بطريقة غير فعالة وهو مرض موروث من نمط الوراثة الصبغية الجسدية. (Globoid Cell Leukodystrophy)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007965.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerebral-amyloid-angiopathy",
    "term_en": "Cerebral Amyloid Angiopathy",
    "term_ar": "اعتلال وعائي نشواني مخي",
    "synonyms": [
      "Angiopathy, Cerebral Amyloid",
      "Cerebral Amyloid Angiopathies",
      "Amyloid Angiopathy, Cerebral",
      "Congophilic Angiopathy",
      "Angiopathy, Congophilic",
      "Congophilic Angiopathies",
      "Sporadic Cerebral Amyloid Angiopathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A heterogeneous group of sporadic or familial disorders characterized by AMYLOID deposits in the walls of small and medium sized blood vessels of CEREBRAL CORTEX and MENINGES. Clinical features include multiple, small lobar CEREBRAL HEMORRHAGE; cerebral ischemia (BRAIN ISCHEMIA); and CEREBRAL INFARCTION. Cerebral amyloid angiopathy is unrelated to generalized AMYLOIDOSIS. Amyloidogenic peptides in this condition are nearly always the same ones found in ALZHEIMER DISEASE. (from Kumar: Robbins and Cotran: Pathologic Basis of Disease, 7th ed., 2005)",
    "arabic_definition": "اعتلال وعائي نشواني مخي (الإنجليزية: Cerebral amyloid angiopathy) (اختصارًاCAA) ويُعرف أيضًا باسم اعتلال الأوعية الدموية الخلقي، هو اعتلال وعائي نشواني دماغي هو الأعتلال الوِعائي الذي يتميز بتكدس راسب من مواد نشَوانِية في جدران الأوعية الدموية، مما يتسبب في أحيان كثيرة بنزف وعائي دماغي، ويمكن مشاهدة رواسب البروتين النشواني تحت المجهر.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016657.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tropical-spastic-paraparesis",
    "term_en": "Tropical Spastic Paraparesis",
    "term_ar": "شلل سفلي تشنجي مداري",
    "synonyms": [
      "Parapareses, Tropical Spastic",
      "Spastic Parapareses, Tropical",
      "Spastic Paraparesis, Tropical",
      "Tropical Spastic Parapareses",
      "HTLV-I-Associated Myelopathy-Tropical Spastic Paraparesis",
      "Myelopathy, Human T-Lymphotropic Virus Type 1 Associated",
      "Paraplegia, Tropical Spastic",
      "Paraplegias, Tropical Spastic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A subacute paralytic myeloneuropathy occurring endemically in tropical areas such as the Caribbean, Colombia, India, and Africa, as well as in the southwestern region of Japan; associated with infection by HUMAN T-CELL LEUKEMIA VIRUS I. Clinical manifestations include a slowly progressive spastic weakness of the legs, increased reflexes, Babinski signs, incontinence, and loss of vibratory and position sensation. On pathologic examination inflammatory, demyelination, and necrotic lesions may be found in the spinal cord. (Adams et al., Principles of Neurology, 6th ed, p1239)",
    "arabic_definition": "خزل سفلي تشنجي مداري أو شلل سفلي تشنجي مداري (الإنجليزية: Tropical spastic paraparesis or TSP) هو إصابة النخاع الشوكي بفيروس تي- الليمفاوي البشري مما يؤدي إلى شَلُلٌ سُفْلِيّ وضعف في الساقين. كما يوحي اسمه هو شائع أكثر في المناطق المدارية بما في ذلك منطقة البحر الكاريبي وأفريقيا.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015493.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "juvenile-myoclonic-epilepsy",
    "term_en": "Juvenile Myoclonic Epilepsy",
    "term_ar": "صرع رمعي عضلي شبابي",
    "synonyms": [
      "Epilepsy, Juvenile Myoclonic",
      "Janz Impulsive Petit Mal",
      "Janz Juvenile Myoclonic Epilepsy",
      "Juvenile Myoclonic Epilepsy of Janz",
      "JME (Juvenile Myoclonic Epilepsy)",
      "JMEs (Juvenile Myoclonic Epilepsy)",
      "Myoclonic Epilepsy, Adolescent",
      "Epilepsy, Adolescent Myoclonic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder characterized by the onset of myoclonus in adolescence, a marked increase in the incidence of absence seizures (see EPILEPSY, ABSENCE), and generalized major motor seizures (see EPILEPSY, TONIC-CLONIC). The myoclonic episodes tend to occur shortly after awakening. Seizures tend to be aggravated by sleep deprivation and alcohol consumption. Hereditary and sporadic forms have been identified. (From Adams et al., Principles of Neurology, 6th ed, p323)",
    "arabic_definition": "الصرع الرمعي العضلي الشبابي (الإنجليزية: Juvenile myoclonic epilepsy) يعرف أيضاً باسم متلازمة جانز، هو شكل شائع نسبياً من أشكال الصرع الوراثية، كان يعرف سابقاً باسم الصرع المعمم مجهول السبب. يشكل بمفرده 5 – 10% من جميع حالات الصرع، ويظهر عادةً عند الشباب بين عمر 12 – 18 سنة.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020190.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "post-cardiac-arrest-syndrome",
    "term_en": "Post-Cardiac Arrest Syndrome",
    "term_ar": "المتلازمة التالية لتوقف القلب",
    "synonyms": [
      "Post-Cardiac Arrest Syndromes",
      "Postcardiac Arrest Syndrome",
      "Postcardiac Arrest Syndromes",
      "Postresuscitation Disease",
      "Postresuscitation Diseases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A reperfusion syndrome characterized by various pathophysiological processes after CARDIAC ARREST. It may include post-cardiac arrest brain injury (HYPOXIA-ISCHEMIA, BRAIN), cardiocirculatory dysfunction, (e.g., systemic ISCHEMIA), HYPERGLYCEMIA; MULTIPLE ORGAN FAILURE and delayed death.",
    "arabic_definition": "المتلازمة التالية لتوقف القلب (PCAS) هي حالة التهابية فيزيولوجية مرضية يمكن أن تحدث بعد إنعاش المريض من السكتة القلبية. يواجه الجسم أثناء وجوده في حالة السكتة القلبية حالة فريدة من نقص التروية المعمم. (Post-Cardiac Arrest Syndrome)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000080942.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endocarditis",
    "term_en": "Endocarditis",
    "term_ar": "التهاب الشغاف",
    "synonyms": [
      "Endocarditides",
      "Infective Endocarditis",
      "Endocarditides, Infective",
      "Endocarditis, Infective",
      "Infective Endocarditides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the inner lining of the heart (ENDOCARDIUM), the continuous membrane lining the four chambers and HEART VALVES. It is often caused by microorganisms including bacteria, viruses, fungi, and rickettsiae. Left untreated, endocarditis can damage heart valves and become life-threatening.",
    "arabic_definition": "التهاب الشغاف التهاب بطانة القلب أو الشُّغَاف هو التهاب في الطبقة الداخلية للقلب، أي البطانة الداخلية. فهو يتضمن عادة في صمامات القلب، والهياكل الأخرى التي قد تشارك وتشمل الحاجز بين البطينين، والحبل الوترية، والبطانة جدارية، أو حتى على الأجهزة داخل القلب. (Endocarditis)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004696.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scurvy",
    "term_en": "Scurvy",
    "term_ar": "بثع",
    "synonyms": [
      "Scurvies",
      "Scorbutus",
      "Hypoascorbemia",
      "Hypoascorbemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acquired blood vessel disorder caused by severe deficiency of vitamin C (ASCORBIC ACID) in the diet leading to defective collagen formation in small blood vessels. Scurvy is characterized by bleeding in any tissue, weakness, ANEMIA, spongy gums, and a brawny induration of the muscles of the calves and legs.",
    "arabic_definition": "البَثَع أو الحَفَر أو داء الحَفَر أو الإسقربوط (الإنجليزية: Scurvy) هو مرض ناتج عن نقص فيتامين ج (حمض الأسكوربيك). تشمل الأعراض المبكرة للنقص، الضعف، الشعور بالتعب، والتهاب الذراعين والساقين.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012614.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroleptic-malignant-syndrome",
    "term_en": "Neuroleptic Malignant Syndrome",
    "term_ar": "متلازمة مضادات الذهان الخبيثة",
    "synonyms": [
      "Neuroleptic Malignant Syndromes",
      "Syndrome, Neuroleptic Malignant",
      "Syndromes, Neuroleptic Malignant",
      "NMS (Neuroleptic Malignant Syndrome)",
      "NMSs (Neuroleptic Malignant Syndrome)",
      "Neuroleptic-Induced Neuroleptic Malignant Syndrome",
      "Neuroleptic-Malignant Syndrome, Neuroleptic Induced"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A potentially fatal syndrome associated primarily with the use of neuroleptic agents (see ANTIPSYCHOTIC AGENTS) which are in turn associated with dopaminergic receptor blockade (see RECEPTORS, DOPAMINE) in the BASAL GANGLIA and HYPOTHALAMUS, and sympathetic dysregulation. Clinical features include diffuse MUSCLE RIGIDITY; TREMOR; high FEVER; diaphoresis; labile blood pressure; cognitive dysfunction; and autonomic disturbances. Serum CPK level elevation and a leukocytosis may also be present. (From Adams et al., Principles of Neurology, 6th ed, p1199; Psychiatr Serv 1998 Sep;49(9):1163-72)",
    "arabic_definition": "متلازمة مضادات الذهان الخبيثة (الإنجليزية: Neuroleptic malignant syndrome) هي حالة مرضية نادرة ومهددة للحياة وهي عبارة عن رد فعل عكسي للأدوية المضادة للذهان تتسم بالحمى الشديدة، الإرتباك، التعرق، ارتفاع وتيرة القلب، صلابة العضلات، تغير الحالة العقلية، والخلل اللاإرادي. قد تشمل المضاعفات انحلال الربيدات، فرط بوتاسيوم الدم، قصور كلوي، أو نوبات.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009459.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "embolism",
    "term_en": "Embolism",
    "term_ar": "انسداد وعائي",
    "synonyms": [
      "Embolisms",
      "Embolus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Blocking of a blood vessel by an embolus which can be a blood clot or other undissolved material in the blood stream.",
    "arabic_definition": "الانسداد الوعائي أو الانْصِمَام يحدث عندما تاجر الصِّمَّة (جمعها: صِمَّات) من جزء من الجسم (من خلال الدورة الدموية) وتسبب انسداد في أحد الاوعية الدموية في جزء آخر من الجسم. والصِمَّة هي الجسم الذي ينتقل عن طريق الدم، وينغرس في أحد الاوعية الدموية ويسده. (Embolism)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004617.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thrombosis",
    "term_en": "Thrombosis",
    "term_ar": "خثار",
    "synonyms": [
      "Thromboses",
      "Thrombus",
      "Blood Clot",
      "Blood Clots",
      "Atherothrombosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Formation and development of a thrombus or blood clot in BLOOD VESSELS.",
    "arabic_definition": "التخثر (من اليونانية القديمة: θρόμβωσις thrómbōsis) هو تكون الجلطة الدموية داخل الوعاء الدموي، ما يعيق تدفق الدم عبر الدورة الدموية. عند إصابة أحد الأوعية الدموية (الوريد أو الشريان)، يستخدم الجسم الصفائح الدموية (الصفيحات) والفيبرين لتشكيل جلطة دموية لمنع فقدان الدم. (Thrombosis)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013927.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arteriosclerosis",
    "term_en": "Arteriosclerosis",
    "term_ar": "تصلب شرياني",
    "synonyms": [
      "Arterioscleroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Thickening and loss of elasticity of the walls of ARTERIES of all sizes. There are many forms classified by the types of lesions and arteries involved, such as ATHEROSCLEROSIS with fatty lesions in the ARTERIAL INTIMA of medium and large muscular arteries.",
    "arabic_definition": "تصلب الشرايين (الإنجليزية: Arteriosclerosis) هو زيادة سمك وصلابة جدران الشرايين مع فقدان مرونتها. تعوق تلك العملية بالتدريج سريان الدم للأعضاء والأنسجة وقد تؤدي إلى مخاطر صحية كبيرة بواسطة التصلب العصيدي، وهو أحد نواع التصلب الشرياني ينتج عن تكون رواسب دهنية، ورواسب من الكولستيرول وبعض المواد الأخرى في جدار الشريان.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001161.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aneurysm",
    "term_en": "Aneurysm",
    "term_ar": "أم الدم",
    "synonyms": [
      "Aneurysms",
      "Fusiform Aneurysm",
      "Aneurysm, Fusiform",
      "Aneurysms, Fusiform",
      "Fusiform Aneurysms",
      "Saccular Aneurysm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pathological outpouching or sac-like dilatation in the wall of any blood vessel (ARTERIES or VEINS) or the heart (HEART ANEURYSM). It indicates a thin and weakened area in the wall which may later rupture. Aneurysms are classified by location, etiology, or other characteristics.",
    "arabic_definition": "أم الدم أو تمدد الأوعية الدموية هو انتفاخ يشبه البالون في الشرايين يحدث عندما يجبر ضغط الدم جزء ضعيف من جدار الشريان على الانتفاخ للخارج. ويمكن أَن يتشكل ذلك في الشرايين بمختلف أحجامها. (Aneurysm)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000783.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myocarditis",
    "term_en": "Myocarditis",
    "term_ar": "التهاب العضلة القلبية",
    "synonyms": [
      "Myocarditides",
      "Carditis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammatory processes of the muscular walls of the heart (MYOCARDIUM) which result in injury to the cardiac muscle cells (MYOCYTES, CARDIAC). Manifestations range from subclinical to sudden death (DEATH, SUDDEN). Myocarditis in association with cardiac dysfunction is classified as inflammatory CARDIOMYOPATHY usually caused by INFECTION, autoimmune diseases, or responses to toxic substances. Myocarditis is also a common cause of DILATED CARDIOMYOPATHY and other cardiomyopathies.",
    "arabic_definition": "التهاب العضلة القلبية أو التهاب عضل القلب (Myocarditis) هو حدوث التهاب في الجزء العضلي من القلب(Myocardiac). سببها عامة هو الإصابة بالعدوى إما أن تكون بكتيرية أو فيروسية.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009205.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypotension",
    "term_en": "Hypotension",
    "term_ar": "انخفاض ضغط الدم",
    "synonyms": [
      "Blood Pressure, Low",
      "Hypotension, Vascular",
      "Low Blood Pressure",
      "Vascular Hypotension"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormally low BLOOD PRESSURE that can result in inadequate blood flow to the brain and other vital organs. Common symptom is DIZZINESS but greater negative impacts on the body occur when there is prolonged depravation of oxygen and nutrients.",
    "arabic_definition": "انخفاض ضغط الدم هو حالة قلبية وعائية تحدث عندما يتدفق الدم عبر الأوعية الدموية عند ضغط أقل من المعتاد. ضغط الدم عادة ما يوصف بأنه رقمان، الانقباضي والانبساطي. (Hypotension)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007022.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dextrocardia",
    "term_en": "Dextrocardia",
    "term_ar": "قلب يميني",
    "synonyms": [
      "Dextrocardias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital defect in which the heart is located on the right side of the THORAX instead of on the left side (levocardia, the normal position). When dextrocardia is accompanied with inverted HEART ATRIA, a right-sided STOMACH, and a left-sided LIVER, the combination is called dextrocardia with SITUS INVERSUS. Dextrocardia may adversely affect other thoracic organs.",
    "arabic_definition": "القلب اليميني أو القلب الأَيْمَن أو يمينية القلب (الإنجليزية: Dextrocardia) عيب خلقي يكون فيه القلب في الجهة اليمنى من جسم الإنسان. يوجد نوعان أساسيان من القلب اليميني: القلب اليميني للتوقف الجنيني (dextrocardia of embryonic arrest) (يعرف أيضًا باسم القلب اليميني المنعزل) والقلب اليميني مقلوب الموضع (situs inversus).",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003914.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vasculitis",
    "term_en": "Vasculitis",
    "term_ar": "التهاب وعائي",
    "synonyms": [
      "Vasculitides",
      "Angiitis",
      "Angiitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of any one of the blood vessels, including the ARTERIES; VEINS; and rest of the vasculature system in the body.",
    "arabic_definition": "الالتِهابُ الوِعائيّ أو التهابُ الأوعيةِ الدمويَّة (بالإنجليزية: Vasculitis) هو مجموعة من الاضطرابات التي تُدمِّر الأوعية الدموية عن طريق الالتهاب، وتتأثر كلٍّ من الشرايين والأوردة. يُعتبر التهابُ الأوعية اللمفية أحيانًا نوعًا من التهاب الأوعية الدموية.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014657.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pericarditis",
    "term_en": "Pericarditis",
    "term_ar": "التهاب التامور",
    "synonyms": [
      "Pleuropericarditis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the PERICARDIUM from various origins, such as infection, neoplasm, autoimmune process, injuries, or drug-induced. Pericarditis usually leads to PERICARDIAL EFFUSION, or CONSTRICTIVE PERICARDITIS.",
    "arabic_definition": "يُعد التهاب التأمور (الإنجليزية: Pericarditis) التهابًا يصيب التأمور (الكيس الليفي المحيط بالقلب). تشمل الأعراض عادة ألمًا صدريًا حادًا ومفاجئًا، قد ينتشر أيضًا إلى الكتفين أو الرقبة أو الظهر.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010493.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angiodysplasia",
    "term_en": "Angiodysplasia",
    "term_ar": "خلل التنسج الوعائي",
    "synonyms": [
      "Angiodysplasias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acquired degenerative dilation or expansion (ectasia) of normal BLOOD VESSELS, often associated with aging. They are isolated, tortuous, thin-walled vessels and sources of bleeding. They occur most often in mucosal capillaries of the GASTROINTESTINAL TRACT leading to GASTROINTESTINAL HEMORRHAGE and ANEMIA.",
    "arabic_definition": "خلل التنسج الوعائي (اللاتينية: Angiodysplasia) في طب الجهاز الهضمي هو تشوه في الأوعية الدموية الصغيرة في الأمعاء. وهو سبب شائع لنزيف الجهاز الهضمي غير المبررة، مما يؤدي لفقر الدم.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016888.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thromboembolism",
    "term_en": "Thromboembolism",
    "term_ar": "انصمام خثاري",
    "synonyms": [
      "Thromboembolisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Obstruction of a blood vessel (embolism) by a blood clot (THROMBUS) in the blood stream.",
    "arabic_definition": "الانصمام الخثاري هي حالة تنفصل فيها الجلطة الدموية (الخثرة) عن موقعها الأصلي وتنتقل عبر مجرى الدم (كصمة) لعرقلة الأوعية الدموية، ما يسبب نقص تروية الأنسجة وتلف الأعضاء. يمكن أن تؤثر الجلطات الدموية على كلا الجهازين الوريدي والشرياني، مع مظاهر سريرية مختلفة واستراتيجيات علاجية مختلفة. (Thromboembolism)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013923.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erythromelalgia",
    "term_en": "Erythromelalgia",
    "term_ar": "احمرار الأطراف المؤلم",
    "synonyms": [
      "Erythromelalgias",
      "Erythermalgia",
      "Erythermalgias",
      "Primary Erythermalgia",
      "Erythermalgias, Primary",
      "Primary Erythermalgias",
      "Erythermalgia, Primary",
      "Erythromelalgia, Familial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A peripheral arterial disease that is characterized by the triad of ERYTHEMA, burning PAIN, and increased SKIN TEMPERATURE of the extremities (or red, painful extremities). Erythromelalgia may be classified as primary or idiopathic, familial or non-familial. Secondary erythromelalgia is associated with other diseases, the most common being MYELOPROLIFERATIVE DISORDERS.",
    "arabic_definition": "احمرار الأطراف المؤلم أو داء ميتشل (الإنجليزية: Erythromelalgia) (نسبةً إلى مكتشفه سيلاس وير ميتشل) هو اضطراب نادر لآلام الأوعية المحيطية يحصل فيه انسداد نوبي في الأوعية الدموية، الذي عادةً ما يكون في الطرفين السفليين أو اليدين (في كثير من الأحيان تحصل الأعراض وتتراجع بشكل يومي)، ثم تصبح مُبَيِّغة وملتهبة. هناك ألم حارق شديد (في الألياف الصغيرة للأعصاب الحسية) واحمرار في الجلد.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004916.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phlebitis",
    "term_en": "Phlebitis",
    "term_ar": "التهاب الوريد",
    "synonyms": [
      "Phlebitides",
      "Periphlebitis",
      "Periphlebitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of a vein, often a vein in the leg. Phlebitis associated with a blood clot is called (THROMBOPHLEBITIS).",
    "arabic_definition": "التهاب الوَريد (الإنجليزية: Phlebitis) هو التهاب يمكن أن ينتشر في أيّ جزء من الجسم، لكنه شائع الحدوث في السيقان، ويسبب عادة الطراوة، والانتفاخ، والاحمرار، والألم في منطقة الوريد. وقد يؤدي إلى التهاب الوريد الخُثَارِّي، أي تَكَوُّن جلطةِ الدم بطول بطانة الوريد الملتهب.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010689.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angioedema",
    "term_en": "Angioedema",
    "term_ar": "وذمة وعائية",
    "synonyms": [
      "Angioedemas",
      "Urticaria, Giant",
      "Giant Urticaria",
      "Giant Urticarias",
      "Urticarias, Giant",
      "Angioneurotic Edema",
      "Angioneurotic Edemas",
      "Edema, Angioneurotic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Swelling involving the deep DERMIS, subcutaneous, or submucosal tissues, representing localized EDEMA. Angioedema often occurs in the face, lips, tongue, and larynx.",
    "arabic_definition": "الوَذَمَةٌ الوِعائِيَّة أو الاستسقاء الوعائي، والمعروف أيضًا باسم وذمة كوينكه، وَذَمَةٌ وِعائِيَّةٌ عَصَبِيَّة، هو تورم السريع (وذمة) في الأدمة والأنسجة تحت الجلد، والأنسجة المخاطية وتحت المخاطية. وهو مشابه جدًا للشرى، ولكن الشرى، المعروف باسم خلايا النحل، يحدث في الأدمة العليا. (Angioedema)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000799.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperkalemic-periodic-paralysis",
    "term_en": "Hyperkalemic Periodic Paralysis",
    "term_ar": "شلل فرط بوتاسيوم الدم الدوري",
    "synonyms": [
      "Adynamia Episodica Hereditaria",
      "Adynamia Episodica Hereditaria with or without Myotonia",
      "Familial Hyperkalemic Periodic Paralysis",
      "Gamstorp Disease",
      "Disease, Gamstorp",
      "Gamstorp Episodic Adynamy",
      "Hyperkalemic Periodic Paralysis, Familial",
      "HyperKPP"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant familial disorder which presents in infancy or childhood and is characterized by episodes of weakness associated with hyperkalemia. During attacks, muscles of the lower extremities are initially affected, followed by the lower trunk and arms. Episodes last from 15-60 minutes and typically occur after a period of rest following exercise. A defect in skeletal muscle sodium channels has been identified as the cause of this condition. Normokalemic periodic paralysis is a closely related disorder marked by a lack of alterations in potassium levels during attacks of weakness. (Adams et al., Principles of Neurology, 6th ed, p1481)",
    "arabic_definition": "شلل فرط بوتاسيوم الدم الدوري هو اضطراب وراثي. ويحدث ذلك في البشر، والخيول (حيث يعرف أيضا باسم متلازمة ايمبريسف، بعد حالة مؤشر في حصان اسمه ايمبريسف، أو ربما واحد من أسلافه)، وربما الحيوانات الأخرى. (Hyperkalemic Periodic Paralysis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020513.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arteritis",
    "term_en": "Arteritis",
    "term_ar": "التهاب الشرايين",
    "synonyms": [
      "Arteritides",
      "Arterial Inflammation",
      "Inflammation, Arterial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of any ARTERIES.",
    "arabic_definition": "التهاب الشرايين أو التهاب الشريان أو التهاب شرياني (الإنجليزية: Arteritis) هو التهاب جدران الشرايين، والذي عادة ما يكون نتيجة عدوى أو كاستجابة لأمراض المناعة الذاتية. لا يزال التهاب الشرايين، وهو اضطراب معقد، غير مفهوم تمامًا.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001167.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "telangiectasis",
    "term_en": "Telangiectasis",
    "term_ar": "توسع الشعيرات",
    "synonyms": [
      "Telangiectases",
      "Telangiectasia",
      "Telangiectasias",
      "Spider Veins",
      "Spider Vein",
      "Vein, Spider",
      "Veins, Spider"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Permanent dilation of preexisting blood vessels (CAPILLARIES; ARTERIOLES; VENULES) creating small focal red lesions, most commonly in the skin or mucous membranes. It is characterized by the prominence of skin blood vessels, such as vascular spiders.",
    "arabic_definition": "تَوَسُّعُ الشُّعَيْرات، المعروف أيضًا باسم الأوردة العنكبوتية، وهي عبارة عن أوعية دموية صغيرة متوسعة. تَظهر بالقرب من سطح الجلد أو الأغشية المخاطية، يتراوح قطرها بين 0.5 و 1 ملليمتر. (Telangiectasis)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013684.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "progressive-supranuclear-palsy",
    "term_en": "Progressive Supranuclear Palsy",
    "term_ar": "الشلل فوق النووي المترقي",
    "synonyms": [
      "Progressive Supranuclear Palsies",
      "Supranuclear Palsies, Progressive",
      "Palsy, Progressive Supranuclear",
      "Richardson's Syndrome",
      "Richardson Syndrome",
      "Steele-Richardson-Olszewski Disease",
      "Steele-Richardson-Olszewski Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A degenerative disease of the central nervous system characterized by balance difficulties; OCULAR MOTILITY DISORDERS (supranuclear ophthalmoplegia); DYSARTHRIA; swallowing difficulties; and axial DYSTONIA. Onset is usually in the fifth decade and disease progression occurs over several years. Pathologic findings include neurofibrillary degeneration and neuronal loss in the dorsal MESENCEPHALON; SUBTHALAMIC NUCLEUS; RED NUCLEUS; pallidum; dentate nucleus; and vestibular nuclei. (From Adams et al., Principles of Neurology, 6th ed, pp1076-7)",
    "arabic_definition": "الشلل فوق النووي المترقي والمعروف أيضاً باسم متلازمة ستيل-ريتشاردسون-أولزوسكي، هو مرض تنكسي يتضمن التلف التدريجي وتدهور الخلايا في مناطق من الدماغ. تؤدي هذه الحالة لأعراض تشمل عدم التوازن وتباطؤ الحركة وصعوبة تحريك العينين والخرف. (Progressive Supranuclear Palsy)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013494.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "varicocele",
    "term_en": "Varicocele",
    "term_ar": "دوالي الخصية",
    "synonyms": [
      "Varicoceles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by the dilated tortuous veins of the SPERMATIC CORD with a marked left-sided predominance. Adverse effect on male fertility occurs when varicocele leads to an increased scrotal (and testicular) temperature and reduced testicular volume.",
    "arabic_definition": "دوالي الخصية أو القيلة الدوالية أو دوالي الصفن، هو توسع غير طبيعي للأوردة داخل كيس الصفن والتي تمد الأعضاء فيه بالدم والممتدة من التجويف البطني عبر القناة الإربية (الإنجليزية: Inguinal Canal) كجزء من الحبل المنوي. تضمن الأوردة صعود الدم إلى الأعلى عن طريق صمّاماتٍ أحادية - خارجية الاتجاه ولكن عندَ حصولِ خللٍ فيها أو وجودِ ضغطِ يؤدي إلى إخلالها فإن الدم يبدأ بالرجوع والخروج ببطئ مشكلأً الدوالي. (Varicocele)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014646.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperemia",
    "term_en": "Hyperemia",
    "term_ar": "فرط الدم",
    "synonyms": [
      "Hyperemias",
      "Venous Engorgement",
      "Engorgement, Venous",
      "Passive Hyperemia",
      "Hyperemia, Passive",
      "Venous Congestion",
      "Congestion, Venous",
      "Active Hyperemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of an increased amount of blood in a body part or an organ leading to congestion or engorgement of blood vessels. Hyperemia can be due to increase of blood flow into the area (active or arterial), or due to obstruction of outflow of blood from the area (passive or venous).",
    "arabic_definition": "فرط الدم أو التبيغ (الإنجليزية: Hyperaemia) هو زيادة تدفق الدم إلى الأنسجة المختلفة في الجسم. ويمكن أن تترتب عليه آثار طبية، كما انه أيضا استجابة تنظيمية، حيث يسمح للتغيير في إمدادات الدم إلى الأنسجة المختلفة من خلال توسع الأوعية وينجم ذلك عن أسباب عديدة كتراكم نواتج الأيض في الأنسجة أو خلال بذل نشاط في العضلات كالجري وخلافه. (Hyperemia)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006940.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cardiotoxicity",
    "term_en": "Cardiotoxicity",
    "term_ar": "تسمم قلبي",
    "synonyms": [
      "Cardiotoxicities",
      "Cardiac Toxicity",
      "Cardiac Toxicities",
      "Toxicity, Cardiac"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Damage to the HEART or its function secondary to exposure to toxic substances such as drugs used in CHEMOTHERAPY; IMMUNOTHERAPY; or RADIATION.",
    "arabic_definition": "التسمم القلبي أو السمّية القلبية (الإنجليزية: Cardiotoxicity)، هو حدوث خلل وظيفي في كهربية القلب أو تلف في العضلات القلبية. حيث يصبح القلب أضعف وليس لديه الكفاءة لضخ الدم وبالتالي ضعف الدورة الدموية.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D066126.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cardiomegaly",
    "term_en": "Cardiomegaly",
    "term_ar": "تضخم القلب",
    "synonyms": [
      "Enlarged Heart",
      "Heart, Enlarged",
      "Heart Enlargement",
      "Enlargement, Heart",
      "Cardiac Hypertrophy",
      "Cardiac Hypertrophies",
      "Hypertrophies, Cardiac",
      "Hypertrophy, Cardiac"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enlargement of the HEART, usually indicated by a cardiothoracic ratio above 0.50. Heart enlargement may involve the right, the left, or both HEART VENTRICLES or HEART ATRIA. Cardiomegaly is a nonspecific symptom seen in patients with chronic systolic heart failure (HEART FAILURE) or several forms of CARDIOMYOPATHIES.",
    "arabic_definition": "تضخم القلب (الإنجليزية: Cardiomegaly) هو حالة طبية يحدث فيها زيادة في حجم القلب.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006332.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parasystole",
    "term_en": "Parasystole",
    "term_ar": "خطل الانقباض",
    "synonyms": [
      "Parasystoles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cardiac arrhythmia that is caused by interaction of two independently initiated cardiac impulses of different rates from two separate foci. Generally one focus is the SINOATRIAL NODE, the normal pacemaker. The ectopic focus is usually in the HEART VENTRICLE but can be in the HEART ATRIUM or the ATRIOVENTRICULAR NODE. Modulation of the parasystolic rhythm by the sinus rhythm depends on the completeness of entrance block surrounding the parasystolic focus.",
    "arabic_definition": "خطل الانقباض (الإنجليزية: Parasystole) هو نوع من عدم انتظام ضربات القلب ناجم عن وجود منظم ثانوي لضربات القلب، والذي يعمل بالتوازي مع العقدة الجيبية الأذينية.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017574.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microaneurysm",
    "term_en": "Microaneurysm",
    "term_ar": "أم الدم لشاركو وبوشار",
    "synonyms": [
      "Microaneurysms",
      "Charcot-Bouchard Aneurysm",
      "Aneurysm, Charcot-Bouchard",
      "Charcot-Bouchard Aneurysms",
      "Aneurysms, Charcot-Bouchard",
      "Miliary Aneurysm",
      "Aneurysm, Miliary",
      "Aneurysms, Miliary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Aneurysm of the MICROVASCULATURE. Charcot–Bouchard aneurysms are aneurysms of the brain vasculature which is a common cause of CEREBRAL HEMORRHAGE. Retinal microaneurysm is an early diagnostic sign of DIABETIC RETINOPATHY.",
    "arabic_definition": "أم الدم لشاركو وبوشار هي تمدداتٌ وعائيَّة في الأوعية الدموية الدماغيَّة الصغيرة، التي يقل قطرها عن 300 ميكرومتر. وتوجد غالبًا في الأوعية الشريانية العدسية المخططة ضمن العقد القاعدية، وترتبط بارتفاع ضغط الدم المزمن. (Microaneurysm)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071071.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "levocardia",
    "term_en": "Levocardia",
    "term_ar": "أيسرية القلب",
    "synonyms": [
      "Situs Inversus with Levocardia",
      "Isolated Levocardia",
      "Levocardia, Isolated"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital abnormalities in which the HEART is in the normal position (levocardia) in the left side of the chest but some or all of the THORAX or ABDOMEN viscera are transposed laterally (SITUS INVERSUS). It is also known as situs inversus with levocardia, or isolated levocardia. This condition is often associated with severe heart defects and splenic abnormalities such as asplenia or polysplenia.",
    "arabic_definition": "أيسرية القلب (الإنجليزية: Levocardia) هي الحالة الطبيّة التي يكون فيها القلب في مكانه السليم \"جهة اليسار\"، وهذا ما يعني صحة وجود بقية الأعضاء كالأمعاء والكبد والمعدة في أماكنها، وهذه الحالة مضادة لحالة القلب اليميني.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007979.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aortitis",
    "term_en": "Aortitis",
    "term_ar": "التهاب الأبهر",
    "synonyms": [
      "Aortitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the wall of the AORTA.",
    "arabic_definition": "التهاب الأبهر هو التهاب جدار شريان الأبهر. قد يكون هذا الاضطراب مهددًا للحياة ويحدث بصورة نادرة. (Aortitis)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001025.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prehypertension",
    "term_en": "Prehypertension",
    "term_ar": "ما قبل فرط ضغط الدم",
    "synonyms": [
      "Prehypertensions",
      "Pre-Hypertension",
      "Pre-Hypertensions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Blood pressure levels that are between normotension and hypertension. Individuals with prehypertension are at a higher risk for developing cardiovascular diseases. Generally, prehypertension is defined as SYSTOLIC PRESSURE of 131-139 mm Hg and/or DIASTOLIC PRESSURE of 81-89 when the optimal is 120/80 mm Hg. For diabetics and other metabolism diseases the prehypertension is around 110-129/70-79 mm Hg.",
    "arabic_definition": "ما قبل فرط ضغط الدم (الإنجليزية: Prehypertension) هو تصنيف طبي أمريكي لبعض الأشخاص الذين يعانون من زيادة في ضغط الدم أعلى من الطبيعي، لكن هذه الزيادة لا يمكن اعتبارها إصابة بفرط ضغط الدم. في حالة ما قبل فرط الدم يكون ضغط الدم الانقباضي 120 إلى 139 ملم زئبق وضغط الدم الانبساطي 80 إلى 89 ملم زئبق.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058246.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endarteritis",
    "term_en": "Endarteritis",
    "term_ar": "التهاب مسد لباطن الشريان",
    "synonyms": [
      "Endarteritides",
      "Obliterating endarteritis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the inner endothelial lining (TUNICA INTIMA) of an artery.",
    "arabic_definition": "الالتِهاب المُسِدّ لباطن الشِّريان أو التهاب باطنة الشريان المُسِدّ (الإنجليزية: Obliterating endarteritis) ويُسمى أيضًا التهاب الشرايين المُسِدّ (الإنجليزية: Obliterating arteritis)، هو التهاب شديد مُتكاثر في بِطانة الشرايين، حيثُ يؤثر على الغلالة الباطنة للشرايين، ويَنتج عنهُ انسداد في تجويف الشريان. قد يحدث هذا الالتهاب نتيجةً لأسبابٍ مُتعددة، فقد يحدث ضمن مُضاعفات التسمم بالإشعاع أو بسبب العدوى بالزهري أو السل السحائي.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004692.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-embolism",
    "term_en": "Pulmonary Embolism",
    "term_ar": "انصمام رئوي",
    "synonyms": [
      "Embolism, Pulmonary",
      "Embolisms, Pulmonary",
      "Pulmonary Embolisms",
      "Pulmonary Thromboembolisms",
      "Thromboembolisms, Pulmonary",
      "Pulmonary Thromboembolism",
      "Thromboembolism, Pulmonary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Blocking of the PULMONARY ARTERY or one of its branches by an EMBOLUS.",
    "arabic_definition": "الانصمام الرئوي (الإنجليزية: Pulmonary embolism) (PE) هو انسداد في أحد شرايين الرئتين بمادة انتقلت من مكان آخر في الجسم عبر مجرى الدم (انسداد وعائي). قد تشمل أعراض الانصمام الرئوي زلة تنفسية، ألم صدري خاصة عند التنفس، ونفث دموي.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011655.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sinus-tachycardia",
    "term_en": "Sinus Tachycardia",
    "term_ar": "تسرع القلب الجيبي",
    "synonyms": [
      "Sinus Tachycardias",
      "Tachycardias, Sinus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Simple rapid heartbeats caused by rapid discharge of impulses from the SINOATRIAL NODE, usually between 100 and 180 beats/min in adults. It is characterized by a gradual onset and termination. Sinus tachycardia is common in infants, young children, and adults during strenuous physical activities.",
    "arabic_definition": "تسرُّع القلب الجيبي (الإنجليزية: Sinus tachycardia) هو نظم قلبي ينشأ من العقدة الجيبية الأذينية مع وتيرة نبضات مرتفعة، معرّف كسرعة قلب تفوق الـ 100 نبضة بالدقيقة في الإنسان البالغ المعدل. معدل نبضات القلب الطبيعي في البالغ المعدّل تتراوح ما بين 60-100 نبضة بالدقيقة.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013616.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-atresia",
    "term_en": "Pulmonary Atresia",
    "term_ar": "رتق الرئة",
    "synonyms": [
      "Atresia, Pulmonary Valve",
      "Valve Atresia, Pulmonary",
      "Valve Atresias, Pulmonary",
      "Atresias, Pulmonary",
      "Atresias, Pulmonary Valve",
      "Atresia, Pulmonary",
      "Pulmonary Valve Atresia",
      "Pulmonary Valve Atresias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital heart defect characterized by the narrowing or complete absence of the opening between the RIGHT VENTRICLE and the PULMONARY ARTERY. Lacking a normal PULMONARY VALVE, unoxygenated blood in the right ventricle can not be effectively pumped into the lung for oxygenation. Clinical features include rapid breathing, CYANOSIS, right ventricle atrophy, and abnormal heart sounds (HEART MURMURS).",
    "arabic_definition": "رتق الرئة (بالإنجليزية: Pulmonary atresia) هو تشوه خلقي في الصمام الرئوي حيث يفشل الصمام في التطور، فيكون الصمام منغلق تماما، مما يعيق تدفق الدم من القلب إلى الرئتين. يقع الصمام الرئوي على الجانب الأيمن من القلب بين البطين الأيمن والشريان الرئوي.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018633.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tricuspid-atresia",
    "term_en": "Tricuspid Atresia",
    "term_ar": "رتق الصمام الثلاثي الشرفات",
    "synonyms": [
      "Atresias, Tricuspid",
      "Tricuspid Atresias",
      "Atresia, Tricuspid",
      "Tricuspid Valve Atresia",
      "Atresias, Tricuspid Valve",
      "Atresia, Tricuspid Valve",
      "Tricuspid Valve Atresias",
      "Valve Atresias, Tricuspid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Absence of the orifice between the RIGHT ATRIUM and RIGHT VENTRICLE, with the presence of an atrial defect through which all the systemic venous return reaches the left heart. As a result, there is left ventricular hypertrophy (HYPERTROPHY, LEFT VENTRICULAR) because the right ventricle is absent or not functional.",
    "arabic_definition": "رتق الصمام الثلاثي الشرف هو أحد أشكال المرض القلبي الخلقيحيث يغيب تمامًا الدسام ثلاثي الشرف. ولذلك لا يوجد توصيل الأذين البطيني الأيمن. (Tricuspid Atresia)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018785.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pericardial-effusion",
    "term_en": "Pericardial Effusion",
    "term_ar": "انصباب تاموري",
    "synonyms": [
      "Effusion, Pericardial",
      "Effusions, Pericardial",
      "Pericardial Effusions",
      "Hemopericardium",
      "Chylopericardium",
      "Chylopericardiums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fluid accumulation within the PERICARDIUM. Serous effusions are associated with pericardial diseases. Hemopericardium is associated with trauma. Lipid-containing effusion (chylopericardium) results from leakage of THORACIC DUCT. Severe cases can lead to CARDIAC TAMPONADE.",
    "arabic_definition": "انصباب التامور (الإنجليزية: pericardial effusion) هو عبارة عن تجمُّع لسوائل زائدة حول القلب. يحاط القلب بتركيب كيسي ثنائي الطبقة يدعى التّامور، يحتوي الفراغ بين هاتين الطبقتين على كميّة قليلة من السائل.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010490.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "may-thurner-syndrome",
    "term_en": "May-Thurner Syndrome",
    "term_ar": "متلازمة ماي-ثرنر",
    "synonyms": [
      "Syndrome, May-Thurner",
      "Cockett Syndrome",
      "Syndrome, Cockett",
      "Iliac Vein Compression Syndrome",
      "Iliocaval Compression Syndrome",
      "Compression Syndrome, Iliocaval",
      "Compression Syndromes, Iliocaval",
      "Iliocaval Compression Syndromes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A compression of ILIAC VEIN that results in a decreased flow in the vein and in the left LOWER EXTREMITY due to a vascular malformation. It may result in left leg EDEMA, pain, iliofemoral DEEP VENOUS THROMBOSIS and POSTTHROMBOTIC SYNDROME. Compression of the left common ILIAC VEIN by the right common ILIAC ARTERY against the underlying fifth LUMBAR VERTEBRA is the typical underlying malformation.",
    "arabic_definition": "متلازمة ماي-ثرنر (الإنجليزية: May-Thurner syndrome) واختصارها (ام تي اس) والمعروفة أيضًا باسم متلازمة ضغط الوريد الحرقفي (الإنجليزية: iliac vein compression syndrome)، هي حالة يمكن فيها لضغط قناة التدفق الوريدي الأصلي الأيسر في الطرف السفلي، وبالتالي يمكن أن تسبب انزعاجًا أو تورمًا أو ألمًا أو تجلطات دموية (خثار وريدي عميق) في الأوردة الحرقفية الفخذي. على وجه التحديد، تكون المشكلة بسبب ضغط الوريد الحرقفي الأصلي الأيسر بواسطة الشريان الحرقفي الأصلي الأيمن الذي يأتي فوقه، هذا يؤدي إلى ركود الدم، والذي يؤهب لتكوين جلطات الدم، تم وصف اختلافات غير شائعة من متلازمة ماي-ثرنر، مثل الضغط على الوريد الحرقفي الأصلي الأيمن بواسطة الشريان الحرقفي الأصلي الأيمن.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062108.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vascular-diseases",
    "term_en": "Vascular Diseases",
    "term_ar": "مرض وعائي",
    "synonyms": [
      "Diseases, Vascular",
      "Disease, Vascular",
      "Vascular Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pathological processes involving any of the BLOOD VESSELS in the cardiac or peripheral circulation. They include diseases of ARTERIES; VEINS; and rest of the vasculature system in the body.",
    "arabic_definition": "مرض وعائي (الإنجليزية: Vascular disease) هو شكل من أشكال الأمراض القلبية الوعائية، التي تصيب الأوعية الدموية بشكل رئيسي. بعض الحالات مثل الذبحة الصدرية ومرض القلب التاجي، يمكن اعتبارهم كمرض وعائي أو مرض من أمراض القلب. (Vascular Diseases)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014652.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "loeys-dietz-syndrome",
    "term_en": "Loeys-Dietz Syndrome",
    "term_ar": "متلازمة لويز- ديتز",
    "synonyms": [
      "Syndrome, Loeys-Dietz",
      "Loeys-Dietz Aortic Aneurysm Syndrome",
      "Loeys-Dietz Syndrome, Type 1a",
      "Loeys–Dietz syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant aneurysm with multisystem abnormalities caused by increased TGF-BETA signaling due to mutations in type I or II of TGF-BETA RECEPTOR. Additional craniofacial features include CLEFT PALATE; CRANIOSYNOSTOSIS; HYPERTELORISM; or bifid uvula. Phenotypes closely resemble MARFAN SYNDROME; Marfanoid craniosynostosis syndrome (Shprintzen-Goldberg syndrome); and EHLERS-DANLOS SYNDROME.",
    "arabic_definition": "متلازمة لويز ديتز (بالإنجليزية Loeys Dietz syndrome): هي خلل جيني في الصبغي ( TGFBR1 )و (TGFBR2) . في هذه المتلازمة، تكون الشرايين ملتوية خاصة في الرقبة، مما يؤهب خطر نشوء أم الدم وتسلخ الأبهر. (Loeys-Dietz Syndrome)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055947.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "atrial-fibrillation",
    "term_en": "Atrial Fibrillation",
    "term_ar": "رجفان أذيني",
    "synonyms": [
      "Atrial Fibrillations",
      "Fibrillation, Atrial",
      "Fibrillations, Atrial",
      "Auricular Fibrillation",
      "Auricular Fibrillations",
      "Fibrillation, Auricular",
      "Fibrillations, Auricular",
      "Persistent Atrial Fibrillation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal cardiac rhythm that is characterized by rapid, uncoordinated firing of electrical impulses in the upper chambers of the heart (HEART ATRIA). In such case, blood cannot be effectively pumped into the lower chambers of the heart (HEART VENTRICLES). It is caused by abnormal impulse generation.",
    "arabic_definition": "الرجفان الأذيني (الإنجليزية: Atrial fibrillation) هو أحد اضطرابات النظم، وهو ناجم عن تشكل وانتقال عشوائي للشارة الناقلة في حجرتي الأذينين في القلب، مما يؤدي إلى انقباضات عشوائية وغير منتظمة لخلايا الأذينين، ذلك يخل بالوظيفة الانقباضية للأذين، فيظهر ذلك على جدار الأذينين الذين «يرجفان» مكانهما بدل أن ينقبضا معاً بشكل منتظم. أما انقباض البطينين فيكون غير منتظم.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001281.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "digeorge-syndrome",
    "term_en": "DiGeorge Syndrome",
    "term_ar": "متلازمة دي جورج",
    "synonyms": [
      "Syndrome, DiGeorge",
      "DiGeorge Anomaly",
      "DiGeorge Sequence",
      "Familial Third and Fourth Pharyngeal Pouch Syndrome",
      "Hypoplasia of Thymus and Parathyroids",
      "Pharyngeal Pouch Syndrome",
      "Third and Fourth Pharyngeal Pouch Syndrome",
      "Thymic Aplasia Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital syndrome characterized by a wide spectrum of characteristics including the absence of the THYMUS and PARATHYROID GLANDS resulting in T-cell immunodeficiency, HYPOCALCEMIA, defects in the outflow tract of the heart, and craniofacial anomalies.",
    "arabic_definition": "متلازمة حذف 22q11.2، تعرف أيضا بمتلازمة دي جورج، شذوذ دي جورج، متلازمة الحنك والقلب والوجه، متلازمة شبرينتزين، متلازمة سترونج، عدم تنسج الصعترية الخلقي، ونقص نمو الغدة الصعترية ، وهي متلازمة تحدث نتيجة حذف جزء صغير من الصبغي أو (الكروموسوم) رقم 22 الحذف يحدث بالقرب من منتصف كروموسوم في مكان معين q11.2 أي على ذراع طويلة من واحد من زوج من الكروموسومات 22. لديها انتشار تقدر 1:4000. (DiGeorge Syndrome)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004062.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coronary-artery-disease",
    "term_en": "Coronary Artery Disease",
    "term_ar": "مرض القلب التاجي",
    "synonyms": [
      "Artery Disease, Coronary",
      "Artery Diseases, Coronary",
      "Coronary Artery Diseases",
      "Coronary Arteriosclerosis",
      "Arterioscleroses, Coronary",
      "Coronary Arterioscleroses",
      "Arteriosclerosis, Coronary",
      "Atherosclerosis, Coronary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pathological processes of CORONARY ARTERIES that may derive from a congenital abnormality, atherosclerotic, or non-atherosclerotic cause.",
    "arabic_definition": "مرض القلب التاجي أو الداء القلبي الإكليلي أو داء الشريان التاجي، أو مرض نقص تروية القلب، أو الداء القلبي التصلّبي اللويحي. وهو النتيجة النهائية لتراكم اللويحات العصيدية على الجدران الداخلية للشرايين التي تغذّي عضلة القلب. (Coronary Artery Disease)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003324.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "varicose-veins",
    "term_en": "Varicose Veins",
    "term_ar": "دوالي وريدية",
    "synonyms": [
      "Varicose Vein",
      "Veins, Varicose",
      "Vein, Varicose",
      "Varices",
      "Varix"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enlarged and tortuous VEINS.",
    "arabic_definition": "الدوالي الوريدية (الإنجليزية: Varicose Veins) أو دوالي الساقين أو توسع الأوردة أو دوالي الأوردة هي أوعية دموية وتحديداً أوردة متسعة تشبه الحبال تجري تحت جلد الساقين مباشرة. تنشأ دوالي الأوردة بسبب فشل أو تلف مجموعة من الصمامات الصغيرة موحدة الاتجاه في الأوردة، وهذه الصمامات تمنع الدم من الرجوع إلى القدمين بتأثير الجاذبية الأرضية، وكلما ضخت العضلات الدم تفتح الصمامات لتسمح للدم بالمرور ثم تغلق لتمنع تدفقه في الاتجاه العكسي، فإذا بدأ أحد هذه الصمامات في الإصابة بقصور وظيفي، فإن الدم يتسرب من خلاله ويتراكم فوق الصمام الذي أسفله، وهذا يجعل الجزء من الوريد الواقع فوق هذا الصمام ينتفخ، وفي نهاية الأمر يصبح الوريد متضخماً وظاهراً للعيان وبارزاً على سطح الجلد، كما تصبح الساق التي يوجد بها العديد من دوالي الأوردة متورمة بعض الشيء بسبب تسرب السوائل في الدم الراكد في الأوردة المتضخمة إلى الأنسجة المحيطة بالأوردة.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014648.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "marfan-syndrome",
    "term_en": "Marfan Syndrome",
    "term_ar": "متلازمة مارفان",
    "synonyms": [
      "Marfan's Syndrome",
      "Marfans Syndrome",
      "Marfan Syndrome Type 2",
      "Marfan Like Connective Tissue Disorder",
      "Marfan Syndrome, Type II",
      "Marfan Syndrome Type 1",
      "Marfan Syndrome, Type I"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant disorder of CONNECTIVE TISSUE with abnormal features in the heart, the eye, and the skeleton. Cardiovascular manifestations include MITRAL VALVE PROLAPSE; AORTIC ANEURYSM; and AORTIC DISSECTION. Other features include lens displacement (ectopia lentis), disproportioned long limbs and enlarged DURA MATER (dural ectasia). Marfan syndrome (type 1) is associated with mutations in the gene encoding FIBRILLIN-1 (FBN1), a major element of extracellular microfibrils of connective tissue. Mutations in the gene encoding TYPE II TGF-BETA RECEPTOR (TGFBR2) are associated with Marfan syndrome type 2.",
    "arabic_definition": "متلازمة مارفان هي اضطراب وراثي في النسيج الضام. تختلف درجة تأثر الأشخاص بها. (Marfan Syndrome)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008382.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cardiomyopathies",
    "term_en": "Cardiomyopathies",
    "term_ar": "اعتلال عضلة القلب",
    "synonyms": [
      "Cardiomyopathy",
      "Myocardial Disease",
      "Disease, Myocardial",
      "Diseases, Myocardial",
      "Myocardial Diseases",
      "Myocardiopathies",
      "Myocardiopathy",
      "Cardiomyopathies, Primary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of diseases in which the dominant feature is the involvement of the CARDIAC MUSCLE itself. Cardiomyopathies are classified according to their predominant pathophysiological features (DILATED CARDIOMYOPATHY; HYPERTROPHIC CARDIOMYOPATHY; RESTRICTIVE CARDIOMYOPATHY) or their etiological/pathological factors (CARDIOMYOPATHY, ALCOHOLIC; ENDOCARDIAL FIBROELASTOSIS).",
    "arabic_definition": "اعتلال عضلة القلب هو مجموعة من الأمراض التي تؤثر على عضلة القلب. في وقت مبكر قد يكون هناك أعراض قليلة أو معدومة. (Cardiomyopathies)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009202.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angina-pectoris",
    "term_en": "Angina Pectoris",
    "term_ar": "ذبحة صدرية",
    "synonyms": [
      "Angor Pectoris",
      "Stenocardia",
      "Stenocardias",
      "Angina"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The symptom of paroxysmal pain consequent to MYOCARDIAL ISCHEMIA usually of distinctive character, location and radiation. It is thought to be provoked by a transient stressful situation during which the oxygen requirements of the MYOCARDIUM exceed that supplied by the CORONARY CIRCULATION.",
    "arabic_definition": "الذبحة الصدرية (خُناق الصدر) (اللاتينية: angina pectoris) هي الإحساس بالألم أو الضغط في الصدر، الناتج عن إقفار (نقص في الإمداد الدموي وبالتالي في الأكسجين الوارد) في عضل القلب، عادة نتيجة انسداد أو تشنج في الشرايين التاجية (الأوعية المغذية لعضلة القلب). في حين أن الذبحة الصدرية قد تنبع من فقر الدم، اضطراب النظم القلبي أو قصور القلب إلا أن السبب الرئيسي للذبحة هو الداء القلبي الإكليلي وينتج عن تصلب عصيدي في الشرايين القلبية.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000787.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brugada-syndrome",
    "term_en": "Brugada Syndrome",
    "term_ar": "متلازمة بروغادا",
    "synonyms": [
      "Right Bundle Branch Block, ST Segment Elevation, and Sudden Death Syndrome",
      "Sudden Unexplained Nocturnal Death Syndrome (SUNDS)",
      "Sudden Unexplained Nocturnal Death Syndrome",
      "Sudden Unexplained Death Syndrome",
      "Brugada ECG Pattern",
      "ECG Pattern, Brugada",
      "Brugada Type ECG Pattern",
      "Brugada Syndrome 1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant defect of cardiac conduction that is characterized by an abnormal ST-segment in leads V1-V3 on the ELECTROCARDIOGRAM resembling a right BUNDLE-BRANCH BLOCK; high risk of VENTRICULAR TACHYCARDIA; or VENTRICULAR FIBRILLATION; SYNCOPAL EPISODE; and possible sudden death. This syndrome is linked to mutations of gene encoding the cardiac SODIUM CHANNEL alpha subunit.",
    "arabic_definition": "متلازمة بروغادا هي اضطراب وراثي يكون فيه النشاط الكهربائي للقلب غير طبيعي، ويزيد من خطر حدوث اضطراب النظم القلبي والموت القلبي المفاجئ. وقد يعاني المتضررون من نوبات إغماء. (Brugada Syndrome)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053840.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "barth-syndrome",
    "term_en": "Barth Syndrome",
    "term_ar": "متلازمة بارث",
    "synonyms": [
      "Syndrome, Barth",
      "MGA Type 2",
      "MGA Type 2s",
      "Type 2, MGA",
      "Type 2s, MGA",
      "3-Methylglutaconic Aciduria, Type II",
      "3-Methylglutaconicaciduria Type 2",
      "3-Methylglutaconicaciduria Type 2s"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare congenital X-linked disorder of lipid metabolism. Barth syndrome is transmitted in an X-linked recessive pattern. The syndrome is characterized by muscular weakness, growth retardation, DILATED CARDIOMYOPATHY, variable NEUTROPENIA, 3-methylglutaconic aciduria (type II) and decreases in mitochondrial CARDIOLIPIN level. Other biochemical and morphological mitochondrial abnormalities also exist.",
    "arabic_definition": "متلازمة بارث (بالإنجليزية: Barth (syndrome، اضطراب وراثي نادر مرتبط بالصبغي إكس. يحدث هذا الاضطراب بشكل شبه حصري عند الذكور، ويؤثر على أجهزة الجسم المتعددة. (Barth Syndrome)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056889.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heart-failure",
    "term_en": "Heart Failure",
    "term_ar": "قصور القلب",
    "synonyms": [
      "Cardiac Failure",
      "Heart Decompensation",
      "Decompensation, Heart",
      "Congestive Heart Failure",
      "Heart Failure, Congestive",
      "Heart Failure, Right-Sided",
      "Right-Sided Heart Failure",
      "Heart Failure, Left-Sided"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A heterogeneous condition in which the heart is unable to pump out sufficient blood to meet the metabolic need of the body. Heart failure can be caused by structural defects, functional abnormalities (VENTRICULAR DYSFUNCTION), or a sudden overload beyond its capacity. Chronic heart failure is more common than acute heart failure which results from sudden insult to cardiac function, such as MYOCARDIAL INFARCTION.",
    "arabic_definition": "القصور القلبي (الإنجليزية: cardiac insufficiency) أو فشل القلب (الإنجليزية: Heart failure) هو حالة مرضية تحدث نتيجة أي خلل وظيفي أو عضوي يؤثر على وظيفة القلب كمستقبل للدم ومضخة كافية لانتشار الدم إلى أنحاء الجسم لإمداده بالمواد الغذائية والأكسجين. تشمل العلامات والأعراض عادةً ضيقًا في التنفس، التعب المفرط، وتورُّم الساق.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006333.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cardiac-tamponade",
    "term_en": "Cardiac Tamponade",
    "term_ar": "اندحاس قلبي",
    "synonyms": [
      "Cardiac Tamponades",
      "Tamponade, Cardiac",
      "Tamponades, Cardiac",
      "Pericardial Tamponade",
      "Pericardial Tamponades",
      "Tamponade, Pericardial",
      "Tamponades, Pericardial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compression of the heart by accumulated fluid (PERICARDIAL EFFUSION) or blood (HEMOPERICARDIUM) in the PERICARDIUM surrounding the heart. The affected cardiac functions and CARDIAC OUTPUT can range from minimal to total hemodynamic collapse.",
    "arabic_definition": "الاندحاس القلبي أو اندحاس التامور أو الدُّكاك القلبي (الإنجليزية: Cardiac tamponade) هي حالة طبية طارئة تحدث عندما يمتلئ جوف التامور بالسوائل مما يعيق حركة القلب الارتخائية مسببة شل قدرة البطين في القلب على استيعاب الدم القادم إليه؛ الأمر الذي يؤدي إلى تقليل حجم الضربة القلبية وتقليل كمية الدم الذي يضخه القلب وبالتالي حدوث صدمة و من ثم الموت. قد ينشأ الاندحاس القلبي عقب رضح شديد على الصدر أو نتيجة التهاب عضلة القلب كما يظهر مصاحباً لبعض الأمراض الروماتيزمية والسرطانات الخبيثة في بعض الأحيان.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002305.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aortic-dissection",
    "term_en": "Aortic Dissection",
    "term_ar": "تسلخ الأبهر",
    "synonyms": [
      "Aortic Dissections",
      "Dissection, Aortic",
      "Aneurysm, Dissecting",
      "Dissecting Aneurysms",
      "Dissecting Aneurysm",
      "Dissecting Aneurysm Aorta",
      "Aneurysm Aorta, Dissecting",
      "Aorta, Dissecting Aneurysm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tear in the inner layer of the AORTA leading to interstitial HEMORRHAGE, and splitting (dissecting) of the aortic TUNICA MEDIA layer. It typically begins with a tear in the TUNICA INTIMA layer.",
    "arabic_definition": "تَسَلُّخُ الأَبْهَر (الإنجليزية: Aortic dissection) ويسمى أيضاً: أم الدم المسلخة تمزق يصيب جدار الشريان الأبهر مما يؤدي إلى تدفق الدم بين الطبقات المكونة لجدار الشريان الأبهر ويجبر هذه الطبقات على التباعد عن بعضها البعض. هو تمزق في جدار الشريان الأبهر يؤدي إلى تدفق الدم بين طبقاته وانفصالها عن بعضها، وتسلخ الأبهر هو من حالات الطوارئ التي قد تؤدي إلى الوفاة العاجلة حتى مع تقديم أفضل وأكمل العلاجات المتوفرة، ويعتبر تسلخ الأبهر حالة طبية طارئة يمكن أن تؤدي سريعًا إلى وفاة المريض، حتى وإن تلقى أفضل سبل العلاج الممكنة.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000784.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heart-diseases",
    "term_en": "Heart Diseases",
    "term_ar": "مرض قلبي وعائي",
    "synonyms": [
      "Heart Disease",
      "Cardiac Disorders",
      "Cardiac Disorder",
      "Heart Disorders",
      "Heart Disorder",
      "Cardiac Diseases",
      "Cardiac Disease",
      "Cardiovascular disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pathological conditions involving the HEART including its structural and functional abnormalities.",
    "arabic_definition": "الأمراض القلبية الوعائية فئة من الأمراض التي تنطوي على القلب أو الأوعية الدموية (الشرايين والاوردة). بينما يشير المصطلح تقنياً إلى أي مرض يؤثر على الجهاز القلبي الدوراني (كما هو مستخدم في عناوين المواضيع الطبية MeSH)، هو الذي يستخدم عادة للإشارة إلى أمراض الشرايين، مثل (مرض تصلب الشرايين). (Heart Diseases)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006331.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "atrial-flutter",
    "term_en": "Atrial Flutter",
    "term_ar": "رفرفة أذينية",
    "synonyms": [
      "Atrial Flutters",
      "Flutter, Atrial",
      "Flutters, Atrial",
      "Auricular Flutter",
      "Auricular Flutters",
      "Flutter, Auricular",
      "Flutters, Auricular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rapid, irregular atrial contractions caused by a block of electrical impulse conduction in the right atrium and a reentrant wave front traveling up the inter-atrial septum and down the right atrial free wall or vice versa. Unlike ATRIAL FIBRILLATION which is caused by abnormal impulse generation, typical atrial flutter is caused by abnormal impulse conduction. As in atrial fibrillation, patients with atrial flutter cannot effectively pump blood into the lower chambers of the heart (HEART VENTRICLES).",
    "arabic_definition": "الرفرفة الأذينيةهي اضطراب نظمي يصيب أذيني القلب ويؤدي إلى تسارع في انقباض الأذينين بتردد منتظم يتراوح ما بين 250 - 350/ دقيقة ، مما يؤدي إلى انتقال التسرع إلى البطينين حيث تكون سرعة البطينين أقل من ذلك. وذلك لأنه عادةً ما يرافق الرفرفة الأذينية إحصار أذيني بطيني بمقدار (2 : 1) أو بمقدار (3 : 1) مما يجعل سرعة القلب تكون 1\\3 أو 1\\2 سرعة الأذينين. (Atrial Flutter)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001282.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aortic-aneurysm",
    "term_en": "Aortic Aneurysm",
    "term_ar": "أم الدم الأبهرية",
    "synonyms": [
      "Aneurysms, Aortic",
      "Aortic Aneurysms",
      "Aneurysm, Aortic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormal balloon- or sac-like dilatation in the wall of AORTA.",
    "arabic_definition": "أم الدم الأبهرية هو مصطلح عام يعني (تمدد أو توسع الأوعية الدموية) في الشريان الأبهر، وهو ينتج عادة عن ضعف كامن في جدار الشريان الأبهر في ذلك الموقع. في حين أن التوسع قد يكون لاعرضي أو يكون ذات اعراض خفيفة، ولكن خطر تمزق ام الدم يبقى موجودا، والذي يسبب ألما شديدا في حال حصوله ونزيف داخلي واسع النطاق، وإذا لم يتم العلاج الفوري تحدث الوفاة. (Aortic Aneurysm)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001014.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "noonan-syndrome",
    "term_en": "Noonan Syndrome",
    "term_ar": "متلازمة نونان",
    "synonyms": [
      "Familial Turner Syndrome",
      "Turner Syndrome, Familial",
      "Noonan-Ehmke Syndrome",
      "Pseudo-Ullrich-Turner Syndrome",
      "Turner Phenotype with Normal Karyotype",
      "Turner's Phenotype, Karyotype Normal",
      "Turner-Like Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genetically heterogeneous, multifaceted disorder characterized by short stature, webbed neck, ptosis, skeletal malformations, hypertelorism, hormonal imbalance, CRYPTORCHIDISM, multiple cardiac abnormalities (most commonly including PULMONARY VALVE STENOSIS), and some degree of INTELLECTUAL DISABILITY. The phenotype bears similarities to that of TURNER SYNDROME that occurs only in females and has its basis in a 45, X karyotype abnormality. Noonan syndrome occurs in both males and females with a normal karyotype (46,XX and 46,XY). Mutations in a several genes (PTPN11, KRAS, SOS1, NF1 and RAF1) have been associated the NS phenotype. Mutations in PTPN11 are the most common. LEOPARD SYNDROME, a disorder that has clinical features overlapping those of Noonan Syndrome, is also due to mutations in PTPN11. In addition, there is overlap with the syndrome called neurofibromatosis-Noonan syndrome due to mutations in NF1.",
    "arabic_definition": "متلازمة نونان (الإنجليزية: Noonan syndrome) هو مرض وراثي شائع نسبيًّا (نوع من التقزم) يؤثر على كل من الذكور والإناث على حد سواء. سميت المتلازمة نسبة إلى جاكلين نونان الطبيبة في كلية الطب في بوسطن عام 1956م، وبدأت كأول طبيبة لأمراض القلب للأطفال.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009634.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thrombophlebitis",
    "term_en": "Thrombophlebitis",
    "term_ar": "التهاب الوريد الخثاري",
    "synonyms": [
      "Thrombophlebitides",
      "Phlegmasia Alba Dolens",
      "Dolens, Phlegmasia Alba"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of a vein associated with a blood clot (THROMBUS).",
    "arabic_definition": "التهاب الوريد الخثاري (الإنجليزية: Thrombophlebitis) حالة التهابية في الوريد تتبع تكون خثرة داخل الأوعية سببها تغير في تكوين الدم. وعندما تحدث بشكل متكرر في مناطق مختلفة فإنه يمسى بـ«التهاب الوريد الخثاري المتنقل».",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013924.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cryoglobulinemia",
    "term_en": "Cryoglobulinemia",
    "term_ar": "وجود الغلوبيولينات البردية في الدم",
    "synonyms": [
      "Cryoglobulinemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by the presence of abnormal quantities of CRYOGLOBULINS in the blood. Upon cold exposure, these abnormal proteins precipitate into the microvasculature leading to restricted blood flow in the exposed areas.",
    "arabic_definition": "وجود الغلوبيولينات البردية في الدم (الإنجليزية: Cryoglobulinemia) هو حالة مرضية يحتوي فيه الدم على كميات كبيرة من الغلوبيولين القري وهي بروتينات غير قابلة للذوبان في درجات الحرارة المنخفضة. عاد ما يظهر الغلوبيولين القري عندما تنخفض درجة حرارة الجسم عن الدرجة الطبيعية (37 درجة مئوية) وتختفي عندما يدفئ الدم.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003449.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arteriolosclerosis",
    "term_en": "Arteriolosclerosis",
    "term_ar": "تصلب الشرينات",
    "synonyms": [
      "Arterioloscleroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Thickening of the walls of small ARTERIES or ARTERIOLES due to cell proliferation or HYALINE deposition.",
    "arabic_definition": "تصلب الشرينات أو التصلب الشريني، هو مرض قلبي وعائي تتصلب فيه الشرينات –أو الشرايين الصغيرة– وتفقد مرونتها، ويرتبط في معظم الحالات بارتفاع ضغط الدم والداء السكري. ينقسم تصلب الشرينات إلى نوعين هما: التصلب الشريني الهياليني والتصلب الشريني مفرط التنسج. (Arteriolosclerosis)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050379.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fat-embolism",
    "term_en": "Fat Embolism",
    "term_ar": "انصمام دهني",
    "synonyms": [
      "Embolisms, Fat",
      "Fat Embolisms",
      "Fat Embolism Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Blocking of a blood vessel by fat deposits in the circulation. It is often seen after fractures of large bones or after administration of CORTICOSTEROIDS.",
    "arabic_definition": "انْصِمامٌ دُهْنِيّ أوالانسداد الدهني (الإنجليزية: Fat embolism)، هو نوع من الانسدادات الذي تكون فيه السداد متكوناً من مواد دهنية. وغالباً ما تكون ناجمة عن الرضوض الجسدية مثل كسر العظام الطويلة، وأذية الأنسجة اللينة، والحروق.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004620.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ehlers-danlos-syndrome",
    "term_en": "Ehlers-Danlos Syndrome",
    "term_ar": "متلازمة إيلرز دانلوس",
    "synonyms": [
      "Syndrome, Ehlers-Danlos",
      "Ehlers-Danlos Disease",
      "Disease, Ehlers-Danlos",
      "Cutis Elastica",
      "Danlos Disease, Ehlers",
      "Ehlers–Danlos syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A heterogeneous group of autosomally inherited COLLAGEN DISEASES caused by defects in the synthesis or structure of FIBRILLAR COLLAGEN. There are numerous subtypes: classical, hypermobility, vascular, and others. Common clinical features include hyperextensible skin and joints, skin fragility and reduced wound healing capability.",
    "arabic_definition": "متلازمة إيلرز دانلوس (الإنجليزية: Ehlers Danlos Syndrome) اختصارًا (EDS) كان يسمى سابقًا باسم جلد مفرط المرونة، هي اضطراب وراثي في النسيج الضام، وأول من قام بوصفه طبيب الجلدية الدنماركي إدفارد إيلرز (Edvard Ehlers) عام 1901، ثم قام العالم الفرنسي هنري دانلوس( Henri-Alexandre Danlos) بشرح الأسباب للمرض عام 1908، لذلك سميت الحالة باسم هذين العالمين. (Ehlers-Danlos Syndrome)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004535.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ventricular-fibrillation",
    "term_en": "Ventricular Fibrillation",
    "term_ar": "رجفان بطيني",
    "synonyms": [
      "Fibrillations, Ventricular",
      "Fibrillation, Ventricular",
      "Ventricular Fibrillations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A potentially lethal cardiac arrhythmia that is characterized by uncoordinated extremely rapid firing of electrical impulses (400-600/min) in HEART VENTRICLES. Such asynchronous ventricular quivering or fibrillation prevents any effective cardiac output and results in unconsciousness (SYNCOPE). It is one of the major electrocardiographic patterns seen with CARDIAC ARREST.",
    "arabic_definition": "رجفان بطيني (الإنجليزية: Ventricular fibrillation) هو حالة توقف القلب عن العمل بسبب خلل في منظومة القلب تؤدي إلى ارتجاف البطينين بدل انقباضهما، الأمر الذي يؤدي إلى توقف الدورة الدموية ومن ثم إلى الوفاة بالسكتة القلبية إن لم يتم تدارك الأمر علاجياً خلال دقائق معدودة من خلال عملية الإنعاش القلبي الرئوي.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014693.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dilated-cardiomyopathy",
    "term_en": "Dilated Cardiomyopathy",
    "term_ar": "اعتلال عضلة القلب التوسعي",
    "synonyms": [
      "Cardiomyopathies, Dilated",
      "Dilated Cardiomyopathies",
      "Cardiomyopathy, Familial Idiopathic",
      "Cardiomyopathies, Familial Idiopathic",
      "Familial Idiopathic Cardiomyopathies",
      "Familial Idiopathic Cardiomyopathy",
      "Idiopathic Cardiomyopathies, Familial",
      "Idiopathic Cardiomyopathy, Familial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of CARDIAC MUSCLE disease that is characterized by ventricular dilation, VENTRICULAR DYSFUNCTION, and HEART FAILURE. Risk factors include SMOKING; ALCOHOL DRINKING; HYPERTENSION; INFECTION; PREGNANCY; and mutations in the LMNA gene encoding LAMIN TYPE A, a NUCLEAR LAMINA protein.",
    "arabic_definition": "ينبغي عدم الخلط مع اعتلال عضلة القلب الضخامي أو أي اعتلال آخر لعضلة القلب. (DCM)اعتلال عضلة القلب المتوسعة هي حالة يصبح فيها القلب متوسعاً ولايمكنه ضخ الدم بكفاءة. (Dilated Cardiomyopathy)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002311.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "essential-hypertension",
    "term_en": "Essential Hypertension",
    "term_ar": "فرط ضغط الدم الأساسي",
    "synonyms": [
      "Hypertension, Essential",
      "Primary Hypertension",
      "Hypertension, Primary",
      "Hypertensions, Primary",
      "Primary Hypertensions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hypertension that occurs without known cause, or preexisting renal disease. Associated polymorphisms for a number of genes have been identified, including AGT, GNB3, and ECE1. OMIM: 145500",
    "arabic_definition": "فرط ضغط الدم الأساسي (الإنجليزية: Essential hypertension) أو فرط ضغط الدم الأولي (الإنجليزية: primary hypertension) أو فرط ضغط الدم مجهول السبب (الإنجليزية: idiopathic hypertension) هو أحد أنواع فرط ضغط الدم ويتميز بعد وجود سبب معروف له، كما أنه النوع الأكثر شيوعاً من أنواع ارتفاع ضغط الدم، وهو ما يمثل 90-95٪ من جميع حالات ارتفاع ضغط الدم. عادة ما يبدو أن فرط ضغط الدم الأساسي عائلي الحدوث ويبدو أنه يحدث نتيجة تفاعل العوامل البيئية والوراثية، كما أن انتشاره يزداد مع تقدم السن، وأن الأشخاص الذين تظهر عليهم زيادة في ضغط الدم لديهم احتمال أكبر في إصابتهم بفرط ضغط الدم.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000075222.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "churg-strauss-syndrome",
    "term_en": "Churg-Strauss Syndrome",
    "term_ar": "متلازمة شيرغ ستراوس",
    "synonyms": [
      "Syndrome, Churg-Strauss",
      "Angiitis, Allergic Granulomatous",
      "Vasculitis, Churg-Strauss",
      "Churg-Strauss Vasculitis",
      "Granulomatous Allergic Angiitis",
      "Allergic Angiitides, Granulomatous",
      "Allergic Angiitis, Granulomatous",
      "Angiitides, Granulomatous Allergic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Widespread necrotizing angiitis with granulomas. Pulmonary involvement is frequent. Asthma or other respiratory infection may precede evidence of vasculitis. Eosinophilia and lung involvement differentiate this disease from POLYARTERITIS NODOSA.",
    "arabic_definition": "متلازمة شيرغ ستراوس (المعروفة أيضا باسم «الحساسية الحبيبية» ) هي التهاب الأوعية الدموية الآنْضِدَادِي (المناعة الذاتية) في الأوعية المتوسطة والصغيرة، ويؤدي إلى النخر. أنها تشمل أساسا الأوعية الدموية في الرئة (تبدأ كنوع حاد من الربو)، والجهاز الهضمي، والأعصاب الطرفية، ولكن تؤثر أيضا على القلب والجلد والكليتين. (Churg-Strauss Syndrome)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015267.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "malignant-hypertension",
    "term_en": "Malignant Hypertension",
    "term_ar": "فرط ضغط الدم الإسعافي",
    "synonyms": [
      "Hypertensive emergency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of markedly elevated BLOOD PRESSURE with DIASTOLIC PRESSURE usually greater than 120 mm Hg. Malignant hypertension is characterized by widespread vascular damage, PAPILLEDEMA, retinopathy, HYPERTENSIVE ENCEPHALOPATHY, and renal dysfunction.",
    "arabic_definition": "فرط ضغط الدم الإسعافي أو حالة طوارئ ارتفاع ضغط الدم هي ارتفاع شديد في ضغط الدم مع أعراض قد تهدد الحياة وعلامات تلف حاد لواحد أو أكثر من أجهزة الأعضاء (خاصة الدماغ أو العينين أو القلب أو الشريان الأورطي أو الكلى). وهو يختلف عن إلحاح ارتفاع ضغط الدم من خلال هذا الدليل الإضافي على تلف الأعضاء الوشيك الذي لا يمكن علاجه بسبب ارتفاع ضغط الدم. (Malignant Hypertension)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006974.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudoxanthoma-elasticum",
    "term_en": "Pseudoxanthoma Elasticum",
    "term_ar": "ورم أصفر كاذب مرن",
    "synonyms": [
      "Gronblad-Strandberg Syndrome",
      "Syndrome, Gronblad-Strandberg",
      "Groenblad-Strandberg Syndrome",
      "Pseudoxanthoma Elasticum, Incomplete",
      "Elasticum, Incomplete Pseudoxanthoma",
      "Elasticums, Incomplete Pseudoxanthoma",
      "Incomplete Pseudoxanthoma Elasticum",
      "Incomplete Pseudoxanthoma Elasticums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inherited disorder of connective tissue with extensive degeneration and calcification of ELASTIC TISSUE primarily in the skin, eye, and vasculature. At least two forms exist, autosomal recessive and autosomal dominant. This disorder is caused by mutations of one of the ATP-BINDING CASSETTE TRANSPORTERS. Patients are predisposed to MYOCARDIAL INFARCTION and GASTROINTESTINAL HEMORRHAGE.",
    "arabic_definition": "الورم الأصفر الكاذب المرن (الإنجليزية: Pseudoxanthoma elasticum) مرض وراثي نادر يسبب التشتت وتمعدن الألياف المرنة في بعض الأنسجة. يظهر في الجلد و العيون والاوعيه الدمويةفي وقت لاحق من تطور المرض.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011561.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "subacute-bacterial-endocarditis",
    "term_en": "Subacute Bacterial Endocarditis",
    "term_ar": "التهاب الشغاف العدوائي",
    "synonyms": [
      "Bacterial Endocarditis, Subacute",
      "Endocarditides, Subacute Bacterial",
      "Endocarditis Lenta",
      "Subacute Bacterial Endocarditides",
      "Bacterial Endocarditides, Subacute",
      "Infective endocarditis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "ENDOCARDIUM infection that is usually caused by STREPTOCOCCUS. Subacute infective endocarditis evolves over weeks and months with modest toxicity and rare metastatic infection.",
    "arabic_definition": "الْتِهابُ الشَّغافِ العَدْوائِيُّ (الإنجليزية: Infective Endocarditis) هو عدوى تصيب طبقة الشغاف في القلب، فقد تصيب صمامات القلب، شَغاف القلب أو عيباً حاجزياً في القلب. قد يسبب المرض قصوراً في الصمامات، الأمر الذي قد يسبب فشل قلبٍ احتقانياً مُعَنِّداً (مقاوماً للشفاء) أو خُراجات في القلب. (Subacute Bacterial Endocarditis)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004698.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "abdominal-aortic-aneurysm",
    "term_en": "Abdominal Aortic Aneurysm",
    "term_ar": "أم الدم الأبهرية البطنية",
    "synonyms": [
      "Abdominal Aortic Aneurysms",
      "Aneurysm, Abdominal Aorta",
      "Aneurysm, Abdominal Aortic",
      "Abdominal Aorta Aneurysm",
      "Abdominal Aorta Aneurysms",
      "Aorta Aneurysm, Abdominal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormal balloon- or sac-like dilatation in the wall of the ABDOMINAL AORTA which gives rise to the visceral, the parietal, and the terminal (iliac) branches below the aortic hiatus at the diaphragm.",
    "arabic_definition": "أم الدم الأبهرية البطنية أو تمدد الأوعية الدموية الأبهري (Abdominal aortic aneurysm) هو حالة جسدية تتجلى بتضخم الشريان الأورطي البطني حين يتجاوز قطرها بأكثر من 50 في المئة من القطر الطبيعي. ما يقارب من 90 في المئة من تمدد الشريان الأورطي البطني تحدث تحت الكلى، ولكنها يمكن أيضا أن تحدث على مستوى الكلى أو فوق الكلى.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017544.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "left-ventricular-hypertrophy",
    "term_en": "Left Ventricular Hypertrophy",
    "term_ar": "تضخم البطين الأيسر",
    "synonyms": [
      "Hypertrophies, Left Ventricular",
      "Left Ventricular Hypertrophies",
      "Ventricular Hypertrophies, Left",
      "Ventricular Hypertrophy, Left"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enlargement of the LEFT VENTRICLE of the heart. This increase in ventricular mass is attributed to sustained abnormal pressure or volume loads and is a contributor to cardiovascular morbidity and mortality.",
    "arabic_definition": "تضخم البطين الأيسر (الإنجليزية: Left ventricular hypertrophy) هو زيادة في غلظ العضلات القلبية للبطين الأيسر.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017379.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "persistent-truncus-arteriosus",
    "term_en": "Persistent Truncus Arteriosus",
    "term_ar": "جذع شرياني مستديم",
    "synonyms": [
      "Truncus Arteriosus Communis",
      "Arteriosus Communis, Truncus",
      "Truncus Arteriosus Communi"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital anomaly caused by the failed development of TRUNCUS ARTERIOSUS into separate AORTA and PULMONARY ARTERY. It is characterized by a single arterial trunk that forms the outlet for both HEART VENTRICLES and gives rise to the systemic, pulmonary, and coronary arteries. It is always accompanied by a ventricular septal defect.",
    "arabic_definition": "الجِذْعُ الشِّرْيانِيُّ المُسْتَدِيم (الإنجليزية: Persistent truncus arteriosus) هو شكل نادر من أمراض القلب الخلقية التي تظهر عند الولادة. في هذه الحالة، البنية الجنينة المعروفة باسم الجذع الشرياني تفشل في الانقسام بشكل صحيح إلى الجذع الرئوي و الشريان الأبهر.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014339.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tetralogy-of-fallot",
    "term_en": "Tetralogy of Fallot",
    "term_ar": "رباعية فالو",
    "synonyms": [
      "Fallot's Tetralogy",
      "Fallots Tetralogy",
      "Fallot Tetralogy",
      "Tetralogy, Fallot's",
      "Tetralogy, Fallot",
      "Tetralogy, Fallots"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A combination of congenital heart defects consisting of four key features including VENTRICULAR SEPTAL DEFECTS; PULMONARY STENOSIS; RIGHT VENTRICULAR HYPERTROPHY; and a dextro-positioned AORTA. In this condition, blood from both ventricles (oxygen-rich and oxygen-poor) is pumped into the body often causing CYANOSIS.",
    "arabic_definition": "رُباعِيَّةُ فالُّو أو رباعية فالوب (الإنجليزية: Tetralogy of Fallot) مرض قلبي خلقي، ويعتبر أيضًا واحد من أهم أسباب متلازمة الطفل المزرق، وكذلك يعتبر واحدًا من أكثر الأمراض القلبية الزرقية انتشارًا، إذ يحدث فيه (تحويل دموي من اليمين إلى اليسار) في القلب مما يؤدي إلى ضخ دم منقوص الأكسجين للجسم. وصَف العالِم الدانماركي نيكولاس ستينو المرض لأول مرة عام 1672م، وقام أيضًا العالِم إدوارد سانديفورت بوصف المرض عام 1773م، لكنه سمّي باسم الطبيب الفرنسي إتيان فالو عام 1888م حيث كان أول من وصف تفاصيل المرض بشكل كامل.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013771.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "long-qt-syndrome",
    "term_en": "Long QT Syndrome",
    "term_ar": "متلازمة كيو تي الطويلة",
    "synonyms": [
      "Electrocardiogram QT Prolonged"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition that is characterized by episodes of fainting (SYNCOPE) and varying degree of ventricular arrhythmia as indicated by the prolonged QT interval. The inherited forms are caused by mutation of genes encoding cardiac ion channel proteins. The two major forms are ROMANO-WARD SYNDROME and JERVELL-LANGE NIELSEN SYNDROME.",
    "arabic_definition": "متلازمة كيو تي الطويلة (الإنجليزية: Long QT syndrome) هي اضطراب قلبي موروث نادر تتأخر بها عودة الاستقطاب في القلب مما يرفع احتمالات نوبات تسرع القلب البطيني مما قد يؤدي إلى ظهور نوبات لانظمية بطينية تدعى تورساد دي بوانت. هذه النوبات قد تؤدي إلى الخفقان، الإغماء والموت المفاجئ نتيجة لرجفان بطيني.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008133.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-heart-disease",
    "term_en": "Pulmonary Heart Disease",
    "term_ar": "مرض القلب الرئوي",
    "synonyms": [
      "Cor Pulmonale",
      "Disease, Pulmonary Heart",
      "Diseases, Pulmonary Heart",
      "Heart Disease, Pulmonary",
      "Heart Diseases, Pulmonary",
      "Pulmonary Heart Diseases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hypertrophy and dilation of the RIGHT VENTRICLE of the heart that is caused by PULMONARY HYPERTENSION. This condition is often associated with pulmonary parenchymal or vascular diseases, such as CHRONIC OBSTRUCTIVE PULMONARY DISEASE and PULMONARY EMBOLISM.",
    "arabic_definition": "مرض القلب الرئوي والمعروف أيضا باسم القلب الرئوي هو حالة مرضية يحدث فيها تضخم وقصور في البطين الأيمن للقلب بسبب زيادة مقاومة الأوعية الدموية، كما في التضيق الرئوي، أو بسبب فرط ضغط الدم الرئوي. يتسبب مرض القلب الرئوي الحاد في توسع حجم البطين عادة، ويُمثل هذا التوسع استجابة تَكَيُّفية لزيادة الضغط الرئوي الحاد، فيما يتسبب مرض القلب الرئوي المزمن في تضخم البطين الأيمن عادة، ويُمثل هذا التضخم استجابة تَكَيُّفية لزيادة الضغط الرئوي المزمن، حيث تزداد سماكة الخلايا العضلية لتقوى على ضخ الدم ضد المقاومة الكبيرة. (Pulmonary Heart Disease)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011660.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wolff-parkinson-white-syndrome",
    "term_en": "Wolff-Parkinson-White Syndrome",
    "term_ar": "متلازمة وولف -باركنسون -وايت",
    "synonyms": [
      "Syndrome, Wolff-Parkinson-White",
      "Anomalous Ventricular Excitation Syndrome",
      "Auriculoventricular Accessory Pathway Syndrome",
      "False Bundle-Branch Block Syndrome",
      "Ventricular Pre-Excitation with Arrhythmia",
      "Wolf-Parkinson-White Syndrome",
      "Syndrome, Wolf-Parkinson-White",
      "WPW Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of ventricular pre-excitation characterized by a short PR interval and a long QRS interval with a delta wave. In this syndrome, atrial impulses are abnormally conducted to the HEART VENTRICLES via an ACCESSORY CONDUCTING PATHWAY that is located between the wall of the right or left atria and the ventricles, also known as a BUNDLE OF KENT. The inherited form can be caused by mutation of PRKAG2 gene encoding a gamma-2 regulatory subunit of AMP-activated protein kinase.",
    "arabic_definition": "متلازمة وولف -باركنسون -وايت (الإنجليزية: Wolff–Parkinson–White syndrome)اختصاراً(WPW) هي واحدة من العديد من الاضطرابات في نظام التوصيل في القلب التي يشار إليها عادة بمتلأزمات ما قبل إلاستثارة. عادة تحدث هذه المتلازمة بدون وجود شذوذات قلبية أخرى. (Wolff-Parkinson-White Syndrome)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014927.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mitral-valve-prolapse",
    "term_en": "Mitral Valve Prolapse",
    "term_ar": "تدلي الصمام التاجي",
    "synonyms": [
      "Mitral Valve Prolapses",
      "Prolapse, Mitral Valve",
      "Prolapses, Mitral Valve",
      "Valve Prolapse, Mitral",
      "Valve Prolapses, Mitral",
      "Floppy Mitral Valve",
      "Floppy Mitral Valves",
      "Mitral Valve, Floppy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal protrusion or billowing of one or both of the leaflets of MITRAL VALVE into the LEFT ATRIUM during SYSTOLE. This allows the backflow of blood into left atrium leading to MITRAL VALVE INSUFFICIENCY; SYSTOLIC MURMURS; or CARDIAC ARRHYTHMIA.",
    "arabic_definition": "انسدال الصمام التاجي أو تدلي الصمام التاجي (الإنجليزية: Mitral valve prolapse-MVP) ويعرف أيضاً بمتلازمة القلقة أو التكة (Click murmur syndrome) أو متلازمة بارلو (Barlow's syndrome). تحدث هذه الحالة نتيجة ظهور ليونة وارتخاء في إحدى وريقات الصمام التاجي الأمامية أو الخلفية أو كلتيهما، مع تطاول وتمدد في الأربطة المعلقة والداعمة لهذا الصمام، مما يؤدي إلى حدوث اندفاع في هذه الوريقات خلال انقباض البطين الأيسر داخل الأذين الأيسر مع حدوث ارتجاع للدم داخل الأذين بكميات مختلفة.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008945.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "patent-ductus-arteriosus",
    "term_en": "Patent Ductus Arteriosus",
    "term_ar": "قناة شريانية سالكة",
    "synonyms": [
      "Patency of the Ductus Arteriosus",
      "Patent Ductus Arteriosus Familial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital heart defect characterized by the persistent opening of fetal DUCTUS ARTERIOSUS that connects the PULMONARY ARTERY to the descending aorta (AORTA, DESCENDING) allowing unoxygenated blood to bypass the lung and flow to the PLACENTA. Normally, the ductus is closed shortly after birth.",
    "arabic_definition": "القَناةُ الشِّريانيَّةُ السَّالِكَةُ (اللاتينية: Patent ductus arteriosus أو اختصارًا PDA) هو عيب خلقي يصيب القلب عند بعض المواليد حيث تظل القناة الشريانية التي تربط بين الشريان الرئوي والشريان الأبهر مفتوحة ولا تغلق تلقائياً.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004374.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypertrophic-cardiomyopathy",
    "term_en": "Hypertrophic Cardiomyopathy",
    "term_ar": "اعتلال عضلة القلب الضخامي",
    "synonyms": [
      "Cardiomyopathies, Hypertrophic",
      "Hypertrophic Cardiomyopathies",
      "Cardiomyopathy, Hypertrophic Obstructive",
      "Cardiomyopathies, Hypertrophic Obstructive",
      "Hypertrophic Obstructive Cardiomyopathies",
      "Hypertrophic Obstructive Cardiomyopathy",
      "Obstructive Cardiomyopathies, Hypertrophic",
      "Obstructive Cardiomyopathy, Hypertrophic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of CARDIAC MUSCLE disease, characterized by left and/or right ventricular hypertrophy (HYPERTROPHY, LEFT VENTRICULAR; HYPERTROPHY, RIGHT VENTRICULAR), frequent asymmetrical involvement of the HEART SEPTUM, and normal or reduced left ventricular volume. Risk factors include HYPERTENSION; AORTIC STENOSIS; and gene MUTATION; (FAMILIAL HYPERTROPHIC CARDIOMYOPATHY).",
    "arabic_definition": "اعتلال عضلة القلب الضخامي (الإنجليزية: Hypertrophic Cardiomyopathy) أو مايسمى بتضخم عضلة القلب المتراكز هو أحد الاعتلالات التي تُصيب العضلة القلبية وينتشر في مرضى فرط ضغط الدم ومرضى تضيق الصمام الأبهري. ويعود السبب لتضخم عضلة القلب التي تضطر لبذل جهد أكبر لضخ الدم أمام مقاومة أعلى من المعتاد، والمتمثلة في ارتفاع ضغط الدم في الدورة الدموية الكبرى أو بسبب الجهد المبذول في ضخ الدم خلال صمام قلبي متضيق.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002312.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "patent-foramen-ovale",
    "term_en": "Patent Foramen Ovale",
    "term_ar": "عيب الحاجز الأذيني",
    "synonyms": [
      "Patent Oval Foramen",
      "Oval Foramen, Patent",
      "Atrial septal defect"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition in which the FORAMEN OVALE in the ATRIAL SEPTUM fails to close shortly after birth. This results in abnormal communications between the two upper chambers of the heart. An isolated patent ovale foramen without other structural heart defects is usually of no hemodynamic significance.",
    "arabic_definition": "عيب الحاجز الأذيني (الإنجليزية: Atrial septal defect) هو أحد الاعتلالات القلبية الخَلقيَّة التي تُمكِّن الدم من التدفق بين الأذين الأيمن والأيسر خلال الحاجز بين أذيني (الذي يفصل بين الأذينين الأيمن والأيسر) وذلك عند اختفاء هذا الحاجز أو إذا كان به عيب، فيحصل تدفق الدم من الجانب الأيسر للقلب إلى الجانب الأيمن أوالعكس، وينتج عن ذلك اختلاط الدم الوريدي المفتقر للأكسجين بالدم الشرياني الذي يغذى المخ والأعضاء والأنسجة، وعلى الرغم من ذلك فإن عيب الحاجز الأذيني قد لا يكون له علامات أو أعراض، خاصةً إذا كان الثقب صغيراً. إن تدفق الدم خلال هذا الثقب (العيب) سواءً من اليمين إلى اليسار أو من اليسار إلى اليمين يُسمّى «التحويلة» (الإنجليزية: Shunt)، وإن كَمّ «التحويل» هو الذي يحدد مدى خطورة عيب الحاجز الأذيني على حَرَكِيّات الدم (ديناميكية الدم)، حيث أن أخطر الحالات هي التحويلة من الأذين الأيمن إلى الأذين الأيسر. (Patent Foramen Ovale)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054092.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "torsades-de-pointes",
    "term_en": "Torsades de Pointes",
    "term_ar": "تورساد دي بوانت",
    "synonyms": [
      "de Pointes, Torsades",
      "Pointes, Torsades de",
      "Torsade de Pointes",
      "de Pointes, Torsade",
      "Pointes, Torsade de"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malignant form of polymorphic ventricular tachycardia that is characterized by HEART RATE between 200 and 250 beats per minute, and QRS complexes with changing amplitude and twisting of the points. The term also describes the syndrome of tachycardia with prolonged ventricular repolarization, long QT intervals exceeding 500 milliseconds or BRADYCARDIA. Torsades de pointes may be self-limited or may progress to VENTRICULAR FIBRILLATION.",
    "arabic_definition": "تورساد دي بوانت (من الفرنسية: Torsade de pointes أي ضَفِيرَة الأَسَل أو ضفيرة النتوءات) هو مصطلح يصف حالة تسرع قلب بطيني متعدد الأشكال ذو خصائص مميزة في تخطيط كهربية القلب. وصف هذه الحالة للمرة الأولى الطبيب الفرنسي فرنسوا ديسيرتين عام 1966. (Torsades de Pointes)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016171.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acute-coronary-syndrome",
    "term_en": "Acute Coronary Syndrome",
    "term_ar": "متلازمة الشريان التاجي الحادة",
    "synonyms": [
      "Acute Coronary Syndromes",
      "Coronary Syndrome, Acute",
      "Coronary Syndromes, Acute",
      "Syndrome, Acute Coronary",
      "Syndromes, Acute Coronary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An episode of MYOCARDIAL ISCHEMIA that generally lasts longer than a transient anginal episode that ultimately may lead to MYOCARDIAL INFARCTION.",
    "arabic_definition": "متلازمة الشريان التاجي الحادة (الإنجليزية: Acute coronary syndrome)؛ عبارة عن مجموعة من الأعراض التي تنتج عن ضيق في الشريان التاجي المسؤول عن تروية عضلة القلب بالغذاء والأكسجين. مما يسبب عدم وصول كمية كافية من الاوكسجين إلى عضلة القلب وهو يتضمن احتشاء عضلة القلب، والذبحة القلبية غير المستقرة.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054058.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "capillary-leak-syndrome",
    "term_en": "Capillary Leak Syndrome",
    "term_ar": "متلازمة التسرب الشعيري",
    "synonyms": [
      "Capillary Leak Syndromes",
      "Clarkson Disease",
      "Systemic Capillary Leak Syndrome",
      "Clinical Capillary Leak Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by recurring episodes of fluid leaking from capillaries into extra-vascular compartments causing hematocrit to rise precipitously. If not treated, generalized vascular leak can lead to generalized EDEMA; SHOCK; cardiovascular collapse; and MULTIPLE ORGAN FAILURE.",
    "arabic_definition": "متلازمة تسرب شعيري (الإنجليزية: Capillary leak syndrome) أو مرض كلاركسون، تتمثل بخروج بلازما الدم عبر جدران الشعيرات الدموية، من جهاز الدوران إلى الأنسجة المحيطة، أو الحيزات العضلية، أو الأعضاء أو تجاويف الجسم. تكون شائعة في حالات الإنتانات، وأقل شيوعًا في أمراض المناعة الذاتية، ومتلازمة التمايز (متلازمة حمض الريتينوئيك)، متلازمة الازدراع، داء البلعمة، متلازمة فرط التنبيه المبيضي، الحمى النزفية الفيروسية، والتسمم بلدغة الأفعى والريسين.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019559.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trilogy-of-fallot",
    "term_en": "Trilogy of Fallot",
    "term_ar": "ثلاثية فالو",
    "synonyms": [
      "Fallot Trilogy",
      "Fallot's Trilogy",
      "Fallots Trilogy",
      "Trilogy, Fallot's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A combination of congenital heart defects consisting of three key features including ATRIAL SEPTAL DEFECTS; PULMONARY STENOSIS; and RIGHT VENTRICULAR HYPERTROPHY.",
    "arabic_definition": "ثلاثية فالو Trilogy of Fallot، هي مرض خلقي نادر في القلب يتكون من العيوب التالية: تضيق الصمام الرئوي، تضخم البطين الأيمن، عيب الحاجز الأذيني. يحدث في 1.25٪؜ من جميع عيوب القلب الخلقية.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014286.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "klippel-trenaunay-weber-syndrome",
    "term_en": "Klippel-Trenaunay-Weber Syndrome",
    "term_ar": "متلازمة كليبل-ترينوناي",
    "synonyms": [
      "Syndrome, Klippel-Trenaunay-Weber",
      "Angioosteohypertrophy Syndrome",
      "Angioosteohypertrophy Syndromes",
      "Syndrome, Angioosteohypertrophy",
      "Syndromes, Angioosteohypertrophy",
      "Congenital Dysplastic Angiopathy",
      "Angiopathies, Congenital Dysplastic",
      "Angiopathy, Congenital Dysplastic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital disorder that is characterized by a triad of capillary malformations (HEMANGIOMA), venous malformations (ARTERIOVENOUS FISTULA), and soft tissue or bony hypertrophy of the limb. This syndrome is caused by mutations in the VG5Q gene which encodes a strong angiogenesis stimulator.",
    "arabic_definition": "متلازمة كيبل ترينوني ويبر أو متلازمة كليبل-ترينوناي (الإنجليزية: Klippel-Trenaunay-Weber Syndrome) هي اضطراب دوراني خلقي نادر، سببه غير معروف إلى الآن، ولكن الفشل في التكوين بشكل الصحيح في الأوعية الدموية/ أو الأوعية الليمفاوية أحد الأسباب للوصل لهذه الحالة، وهناك اضطراب مشابه لمتلازمة كيبل ترينوني ويبر بوجود بقع نبيذية اللون واضطرابات وعائية هو متلازمة ستيرج ويبر.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007715.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-vein-stenosis",
    "term_en": "Pulmonary Vein Stenosis",
    "term_ar": "تضيق الوريد الرئوي",
    "synonyms": [
      "Pulmonary Vein Stenoses",
      "Stenoses, Pulmonary Vein",
      "Vein Stenoses, Pulmonary",
      "Vein Stenosis, Pulmonary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Narrowing of the PULMONARY VEIN.",
    "arabic_definition": "تضيُّق الوريد الرئوي(بالإنجليزية: Pulmonary vein stenosis) هو اضطراب قلبي وعائي نادر، ويُعرَّف بأنه تضيّق واحد أو أكثر من الالأوردة الرئوية الأربعة التي تُعيد الدم من الرئتين إلى الأذين الأيسر للقلب. في الحالات الخِلقية، يرتبط هذا المرض بإنذار سيئ ومعدل وفيات مرتفع، خاصة في مرحلة الطفولة المبكرة.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071078.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "goiter",
    "term_en": "Goiter",
    "term_ar": "تضخم الغدة الدرقية",
    "synonyms": [
      "Goiters",
      "Goitre"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enlargement of the THYROID GLAND that may increase from about 20 grams to hundreds of grams in human adults. Goiter is observed in individuals with normal thyroid function (euthyroidism), thyroid deficiency (HYPOTHYROIDISM), or hormone overproduction (HYPERTHYROIDISM). Goiter may be congenital or acquired, sporadic or endemic (GOITER, ENDEMIC).",
    "arabic_definition": "تضخم الغدة الدرقية أو ضخامة الدرقية أو الدُّراق أو التورم الدرقي أو السَلْعَة (الإنجليزية: Goitre أو struma) زيادة حجم الغدة الدرقية، غالباً نتيجة خلل في نشاط الغدة أو قصور فيها؛ أي نتيجة لفرط التنسج ولضخامة الخلايا الطلائية الجريبية المعاوضة لبعض النقص في نتاج الهرمون الدرقي. ويؤدي هذا إلى تضخمها. (Goiter)",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006042.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperthyroidism",
    "term_en": "Hyperthyroidism",
    "term_ar": "فرط الدرقية",
    "synonyms": [
      "Hyperthyroid",
      "Hyperthyroids",
      "Primary Hyperthyroidism",
      "Hyperthyroidism, Primary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hypersecretion of THYROID HORMONES from the THYROID GLAND. Elevated levels of thyroid hormones increase BASAL METABOLIC RATE.",
    "arabic_definition": "فَرْطُ الدَّرَقِيَّة هو فرط نشاط نسيج الغدة الدرقية مما يسبب الإفراط في إنتاج هرمونات الغدة الدرقية (هرمون الثيروكسين أو \"T4\" وثلاثي يودو ثيرونين أو \"T3\"). وبالتالي فرط نشاط الغدة الدرقية يكون سببا في التسمم الدرقي وهو حالة مرضية تسببها زيادة هرمونات الغدة الدرقية في الدم. (Hyperthyroidism)",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006980.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypothyroidism",
    "term_en": "Hypothyroidism",
    "term_ar": "قصور الدرقية",
    "synonyms": [
      "Hypothyroidisms",
      "Thyroid-Stimulating Hormone Deficiency",
      "Deficiency, Thyroid-Stimulating Hormone",
      "Hormone Deficiency, Thyroid-Stimulating",
      "Thyroid-Stimulating Hormone Deficiencies",
      "TSH Deficiency",
      "Deficiency, TSH",
      "TSH Deficiencies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome that results from abnormally low secretion of THYROID HORMONES from the THYROID GLAND, leading to a decrease in BASAL METABOLIC RATE. In its most severe form, there is accumulation of MUCOPOLYSACCHARIDES in the SKIN and EDEMA, known as MYXEDEMA. It may be primary or secondary due to other pituitary disease, or hypothalamic dysfunction.",
    "arabic_definition": "قُصورُ الدَّرَقِيَّة (الإنجليزية: Hypothyroidism) الذي يطلق عليه أيضًا خمول الغدة الدرقية أو انخفاض هرمون الغدة الدرقية هو اضطراب في نظام الغدد الصماء حيث لا تنتج الغدة الدرقية ما يكفي من الهرمون الدرقي. يمكن أن تسبب عددًا من الأعراض، مثل: ضعف القدرة على تحمل البرد، والشعور بالتعب، والإمساك، والاكتئاب انخفاض معدل دقات القلب، وزيادة الوزن.",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007037.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eunuchism",
    "term_en": "Eunuchism",
    "term_ar": "مخصي",
    "synonyms": [
      "Eunuchoidism",
      "Hypogonadism, Male",
      "Eunuch"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The state of being a eunuch, a male without TESTES or whose testes failed to develop. It is characterized by the lack of mature male GERM CELLS and TESTICULAR HORMONES.",
    "arabic_definition": "المخصي أو الخصي أو الطَواشي (الجمع: طَوَاشِيَّة) هو رجل أجري له إخصاء، أي استؤصلت خصيتيه، ولا سيما مخصى في وقت مبكر يكفي لأن لا تكون آثار هرمونية هامة أو علامات بلوغ؛ وعادة ما يشير المصطلح إلى المخصى لأداء وظيفة اجتماعية محددة، كما كان شائعا في كثير من المجتمعات من الماضي. أقدم حالات إخصاء متعمدة سجلت في سومر في مدينة لجش في القرن الحادي والعشرين قبل الميلاد. (Eunuchism)",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005058.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gigantism",
    "term_en": "Gigantism",
    "term_ar": "عملقة",
    "synonyms": [
      "Pituitary Gigantism",
      "Gigantism, Pituitary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The condition of accelerated and excessive GROWTH in children or adolescents who are exposed to excess HUMAN GROWTH HORMONE before the closure of EPIPHYSES. It is usually caused by somatotroph hyperplasia or a GROWTH HORMONE-SECRETING PITUITARY ADENOMA. These patients are of abnormally tall stature, more than 3 standard deviations above normal mean height for age.",
    "arabic_definition": "العملقة (الإنجليزية: Gigantism) حالة تتميز بالنمو المفرط وزيادة الطول فوق المستوى المتوسط بصورة ملحوظة. تحدث هذه الحالة عند البشر بسبب فرط إنتاج هرمون النمو في الطفولة، ما يؤدي إلى وصول طول الإنسان إلى 2.1 متر حتى 2.7 متر (7 حتى 9 أقدام).",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005877.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hereditary-hemorrhagic-telangiectasia",
    "term_en": "Hereditary Hemorrhagic Telangiectasia",
    "term_ar": "توسع الشعيرات النزفي الوراثي",
    "synonyms": [
      "Hemorrhagic Telangiectasia, Hereditary",
      "Weber-Osler Disease",
      "Telangiectasia, Hereditary Hemorrhagic, of Rendu, Osler, and Weber",
      "Rendu-Osler-Weber Disease",
      "Osler-Rendu-Weber Disease",
      "Osler's Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant vascular anomaly characterized by telangiectases of the skin and mucous membranes and by recurrent gastrointestinal bleeding. This disorder is caused by mutations of a gene (on chromosome 9q3) which encodes endoglin, a membrane glycoprotein that binds TRANSFORMING GROWTH FACTOR BETA.",
    "arabic_definition": "توسع الشعيرات النزيفي الوراثي (الإنجليزية: Hereditary Hemorrhagic Telangiectasia) ويُدعى اختصارًا HHT المعروف أيضا باسم مرض أوسلر ويبر-روندو ومتلازمة أوسلر ويبر-روندو، هو اضطراب وراثي يؤدي إلى تشكيل غير طبيعي في الأوعية الدموية في الجلد والأغشية المخاطية، وغالبا في أجهزة مثل الرئتين والكبد والدماغ. يؤدي هذا المرض إلى نزيف في الأنف، نزيف الجهاز الهضمي الحاد والمزمن، ومشاكل مختلفة في الأجهزة الأخرى.",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013683.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypogonadism",
    "term_en": "Hypogonadism",
    "term_ar": "قصور الغدد التناسلية",
    "synonyms": [
      "Hypogonadotropic Hypogonadism",
      "Hypogonadism, Hypogonadotropic",
      "Hypergonadotropic Hypogonadism",
      "Hypogonadism, Hypergonadotropic",
      "Hypogonadism, Isolated Hypogonadotropic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Condition resulting from deficient gonadal functions, such as GAMETOGENESIS and the production of GONADAL STEROID HORMONES. It is characterized by delay in GROWTH, germ cell maturation, and development of secondary sex characteristics. Hypogonadism can be due to a deficiency of GONADOTROPINS (hypogonadotropic hypogonadism) or due to primary gonadal failure (hypergonadotropic hypogonadism).",
    "arabic_definition": "قصور الغدد التناسلية (الإنجليزية: Hypogonadism) هو مصطلح طبي يستخدم لوصف نقص النشاط الوظيفي في عمل الغدد التناسلية – الخصيتين عند الرجال والمبايض عند النساء – والذي قد يؤدي إلى قصور في عملية التصنيع الحيوي للهرمونات الجنسية. في مصطلحات العالم ليمان، يطلق عليها أحيانا «البلوغ المتقطع من المرحلة الأولى».",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007006.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orchitis",
    "term_en": "Orchitis",
    "term_ar": "التهاب الخصية",
    "synonyms": [
      "Orchitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of a TESTIS. It has many features of EPIDIDYMITIS, such as swollen SCROTUM; PAIN; PYURIA; and FEVER. It is usually related to infections in the URINARY TRACT, which likely spread to the EPIDIDYMIS and then the TESTIS through either the VAS DEFERENS or the lymphatics of the SPERMATIC CORD.",
    "arabic_definition": "اِلْتِهاب الخِصية (الإنجليزية: Orchitis) هي التهاب الخصيتين، وهي حالة مرضية تكون مؤلمة للغاية في كثير من الأحيان التي تشمل على عدوى وتورم والتهابات متكررة للخصى، وغالباً ما تكون أعراض التهاب الخصية مشابهة لتلك التي تصاحب حالة (انفتال) أو لوي الخصية.",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009920.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "atrioventricular-nodal-reentry-tachycardia",
    "term_en": "Atrioventricular Nodal Reentry Tachycardia",
    "term_ar": "تسرع القلب بسبب إعادة الدخول بالعقدة الأذينية البطينية",
    "synonyms": [
      "Atrioventricular Reentrant Tachycardia",
      "Atrioventricular Reentrant Tachycardias",
      "Reentrant Tachycardia, Atrioventricular",
      "Tachycardia, Atrioventricular Reentrant",
      "Atrioventricular Nodal Re-Entrant Tachycardia",
      "Atrioventricular Nodal Reentrant Tachycardia",
      "AV Nodal Reentrant Tachycardia",
      "Tachycardia, AV Nodal Reentrant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormally rapid heartbeats caused by reentry of atrial impulse into the dual (fast and slow) pathways of ATRIOVENTRICULAR NODE. The common type involves a blocked atrial impulse in the slow pathway which reenters the fast pathway in a retrograde direction and simultaneously conducts to the atria and the ventricles leading to rapid HEART RATE of 150-250 beats per minute.",
    "arabic_definition": "تسرع القلب بسبب إعادة الدخول بالعقدة الأذينية البطينية (الإنجليزية: atrioventricular nodal reentrant tachycardia) هو شكل من أشكال إيقاع القلب المتسارع غير الطبيعي، والذي يندرج كنوع من أنواع تسرع القلب فوق البطيني، بما يعني أن هذا التسارع ينبع (ينشأ) من موقع في القلب فوق حزمة هيس. ويُمثل تسرع القلب بسبب إعادة الدخول بالعقدة الأذينية البطينية أحد أكثر أشكال تسرع القلب فوق البطيني المنتظم انتشارا. (Atrioventricular Nodal Reentry Tachycardia)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013611.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypoplastic-left-heart-syndrome",
    "term_en": "Hypoplastic Left Heart Syndrome",
    "term_ar": "متلازمة القلب الأيسر ناقص التنسج",
    "synonyms": [
      "Left Heart Hypoplasia Syndrome",
      "Left Heart Syndrome, Hypoplastic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by underdevelopment of the whole left half of the heart. It is characterized by hypoplasia of the left cardiac chambers (HEART ATRIUM; HEART VENTRICLE), the AORTA, the AORTIC VALVE, and the MITRAL VALVE. Severe symptoms appear in early infancy when DUCTUS ARTERIOSUS closes.",
    "arabic_definition": "متلازمة القلب الأيسر ناقص التنسج هو عيب خلقي نادر في القلب يكون فيه الجانب الأيسر من القلب غير متطور. قد يصيب البطين الأيسر، أو الأبهر، أو الصمام الأبهري، أو الصمام التاجي. (Hypoplastic Left Heart Syndrome)",
    "specialty": "Cardiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018636.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypoaldosteronism",
    "term_en": "Hypoaldosteronism",
    "term_ar": "نقص الألدوستيرونية",
    "synonyms": [
      "Hypoaldosteronism, Hyporeninemic",
      "Acidosis, Renal Tubular Type IV",
      "Hyporeninemic Hypoaldosteronism",
      "Renal Tubular Acidosis, Type IV",
      "Type IV Renal Tubular Acidosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital or acquired condition of insufficient production of ALDOSTERONE by the ADRENAL CORTEX leading to diminished aldosterone-mediated synthesis of Na(+)-K(+)-EXCHANGING ATPASE in renal tubular cells. Clinical symptoms include HYPERKALEMIA, sodium-wasting, HYPOTENSION, and sometimes metabolic ACIDOSIS.",
    "arabic_definition": "نقص الألدوستيرونية (الإنجليزية: hypoaldosteronism) هو مصطلح طبي يشير إلى انخفاض مستوى هرمون الألدوستيرون في الدم. نقص الألدوستيرونية المعزول (الإنجليزية: Isolated hypoaldosteronism) هو حالة انخفاض مستوى الألدوستيرون من غير أي تغير في مستوى الكورتيزول.",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006994.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thyroiditis",
    "term_en": "Thyroiditis",
    "term_ar": "التهاب الغدة الدرقية",
    "synonyms": [
      "Thyroiditides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammatory diseases of the THYROID GLAND. Thyroiditis can be classified into acute (THYROIDITIS, SUPPURATIVE), subacute (granulomatous and lymphocytic), chronic fibrous (Riedel's), chronic lymphocytic (HASHIMOTO DISEASE), transient (POSTPARTUM THYROIDITIS), and other AUTOIMMUNE THYROIDITIS subtypes.",
    "arabic_definition": "التهاب الغدة الدرقية (الإنجليزية: Thyroiditis) هو التهاب أو تضخم الغدة الدرقية، له أسباب متعددة، وقد يسبب ارتفاع أو انخفاض مستوى هرمونات الغدة الدرقية.",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013966.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperthyroxinemia",
    "term_en": "Hyperthyroxinemia",
    "term_ar": "فرط ثيروكسين الدم",
    "synonyms": [
      "Hyperthyroxinemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormally elevated THYROXINE level in the BLOOD.",
    "arabic_definition": "فرط ثيروكسين الدم (الإنجليزية: Hyperthyroxinemia أو hyperthyroxinaemia) هو مرض يصيب الغدة الدرقية ترتفع فيه هرمونات الغدة الدرقية (مثل الثيروكسين) أكثر من المتوقع. قد يستخدم مصطلح فرط ثيروكسين الدم للتعبير عن فرط الدرقية، لكن فرط الدرقية مصطلح عام أكثر.",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006981.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alcoholism",
    "term_en": "Alcoholism",
    "term_ar": "كحولية",
    "synonyms": [
      "Alcohol Addiction",
      "Addiction, Alcohol",
      "Alcohol Dependence",
      "Dependence, Alcohol",
      "Alcoholic Intoxication, Chronic",
      "Chronic Alcoholic Intoxication",
      "Intoxication, Chronic Alcoholic",
      "Alcohol Abuse"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A primary, chronic disease with genetic, psychosocial, and environmental factors influencing its development and manifestations. The disease is often progressive and fatal. It is characterized by impaired control over drinking, preoccupation with the drug alcohol, use of alcohol despite adverse consequences, and distortions in thinking, most notably denial. Each of these symptoms may be continuous or periodic. (Morse &amp; Flavin for the Joint Commission of the National Council on Alcoholism and Drug Dependence and the American Society of Addiction Medicine to Study the Definition and Criteria for the Diagnosis of Alcoholism: in JAMA 1992;268:1012-4)",
    "arabic_definition": "الكحولية أو إدمان المسكرات أو إدمان الكحول، أو اضطراب استخدام الكحول (الإنجليزية: Alcoholism) هو مصطلح واسع لأي شرب للكحول يسبب مشاكل نفسية أو صحية. تم تقسيم الاضطراب سابقًا لنوعين: معاقرة الكحول والاعتماد على الكحول.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000437.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "carnivory",
    "term_en": "Carnivory",
    "term_ar": "آكل اللحوم",
    "synonyms": [
      "Carnivories",
      "Carnivore"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The consumption of animal flesh.",
    "arabic_definition": "اللاحِم أو آكل اللحم (الإنجليزية: Carnivore) هو الكائن الحي الذي يستمد الطاقة والاحتياجات الغذائية من وجبة تحتوي بشكل غالب أو كلي من الأنسجة الحيوانية من خلال الافتراس أو أكل الجيف، وتدعى الحيوانات التي تعتمد على اللحم فقط للحصول على احتياجاتها الغذائية حيوانات آكلة للحوم إجبارياً، في حين تسمى الكائنات التي تستهلك اللحوم والنباتات بحيوانات قارتة . تتربع آكلات اللحوم على قمة المفترسات في السلسلة الغذائية. (Carnivory)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060435.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chemotaxis",
    "term_en": "Chemotaxis",
    "term_ar": "انجذاب كيميائي",
    "synonyms": [
      "Haptotaxis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The movement of cells or organisms toward or away from a substance in response to its concentration gradient.",
    "arabic_definition": "الانجذاب الكيميائي أو الانتحاء الكيميائي هو حركة كائن حي أو كيان معين استجابة لمحفز كيميائي. توجه الخلايا الجسدية والبكتيريا والكائنات الأخرى أحادية الخلية أو متعددة الخلايا حركاتها وفقًا لبعض المواد الكيميائية في بيئتها. (Chemotaxis)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002633.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gambling",
    "term_en": "Gambling",
    "term_ar": "قمار",
    "synonyms": [
      "Gamblings",
      "Gambling, Pathological",
      "Gamblings, Pathological",
      "Pathological Gamblings",
      "Pathological Gambling",
      "Gambling, Pathologic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An activity distinguished primarily by an element of risk in trying to obtain a desired goal, e.g., playing a game of chance for money.",
    "arabic_definition": "القِمَارُ أو المُقامَرة أو المَيْسِرُ هو كلُّ لَعِبٍ بين متنافسين على مال يجمع منهم ويوزع على الفائز منهم ويحرم الخاسر. ويوجد الكثير من أشكال القمار من أشهرها ألعاب اليانصيب اللوتري والقمار الإلكتروني، وبعض مسابقات التلفاز التي تطالب بالاتصال على رقم هاتف. (Gambling)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005715.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heterosexuality",
    "term_en": "Heterosexuality",
    "term_ar": "مغايرة جنسية",
    "synonyms": [
      "Heterosexuals",
      "Heterosexual"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sexual attraction or relationship between members of the opposite SEX.",
    "arabic_definition": "المغايرة الجنسية (الإنجليزية: heterosexuality) هي نوع من التوجه الجنسي، بين رجل وامرأة بناء على الحب أو الشهوة الجنسية، ويكون هذا التوجه عكس المثلية.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020010.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sign-language",
    "term_en": "Sign Language",
    "term_ar": "لغة إشارة",
    "synonyms": [
      "Sign Languages"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A system of hand gestures used for communication by those with HEARING LOSS or by people speaking different languages.",
    "arabic_definition": "لغة الإشارة هو مصطلح يطلق على وسيلة التواصل غير الصوتية التي يستخدمها ذوو الاحتياجات الخاصة سمعياً (الصم) أو صوتيا (البكم)، رغم أن هنالك ممارسات أخرى يمكن تصنيفها ضمن مستويات التخاطب الإشاري مثل إشارات الغواصين وبعض الإشارات الخاصة لدى بعض القوات الشرطية أو العسكرية أو حتى بين أفراد المنظمات السرية والعصابات الإجرامية وغيرها وهي تستخدم: حركات اليدين: كالأصابع لتوضيح الأرقام والحروف. تعابير الوجه : لنقل المشاعر والميول. (Sign Language)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012813.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "schizophrenia",
    "term_en": "Schizophrenia",
    "term_ar": "فصام",
    "synonyms": [
      "Schizophrenias",
      "Dementia Praecox",
      "Schizophrenic Disorders",
      "Disorder, Schizophrenic",
      "Disorders, Schizophrenic",
      "Schizophrenic Disorder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A severe emotional disorder of psychotic depth characteristically marked by a retreat from reality with delusion formation, HALLUCINATIONS, emotional disharmony, and regressive behavior.",
    "arabic_definition": "الفُصام، كما يُعرف باسم السكيزوفرينيا (اللاتينية: ) وأيضًا الشيزوفرينيا، هو اضطراب نفسي يتسم بسلوك اجتماعي غير طبيعي وفشل في تمييز الواقع. تشمل الأعراض الشائعة الوهام واضطراب الفكر والهلوسة السمعية بالإضافة إلى انخفاض المشاركة الاجتماعية والتعبير العاطفي وانعدام الإرادة. (Schizophrenia)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012559.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "voyeurism",
    "term_en": "Voyeurism",
    "term_ar": "شهوة التلصص",
    "synonyms": [
      "Voyeurisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A paraphilia characterized by repetitive looking at unsuspecting people, usually strangers, who are either naked, in the act of disrobing, or engaging in sexual activity, as the method for achieving sexual excitement.",
    "arabic_definition": "شهوة التلصص أو التلصصية أو البَصْبَصَة هو الانجذاب الجنسي إلى التجسس على الناس أثناء كونهم عراة مثل قيامهم بتغيير الملابس، أو الجماع، أو الاستحمام دون أن يعلم هؤلاء الناس أن هناك من يتجسس عليهم أو دون أن يعطوا موافقة على ذلك أي أن هناك كسراً لخصوصية أشخاص يظنون أنه لا أحد يراهم، وكسر الخصوصية هو العنصر المثير جنسياً بالنسبة لمن لديه شهوة التلصص الجنسي وهذا ما يميزها عن البصبصة العادية والتي لا تعدّ بارافيليا، فمن لديه شهوة التلصص قد لا يشعر مثلا بالاستثارة لدى مشاهدة مواد إباحية لأن من فيها لا يظنون أنهم في حالة خصوصية. (Voyeurism)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014843.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "agoraphobia",
    "term_en": "Agoraphobia",
    "term_ar": "رهاب الخلاء",
    "synonyms": [
      "Phobia, Open Spaces",
      "Open Spaces Phobia",
      "Phobia, Crowds",
      "Crowds Phobia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Obsessive, persistent, intense fear of places or situations from which escape might be difficult or embarrassing.",
    "arabic_definition": "رُهابُ الخلاء أو رهاب الزُّحام أو رهاب السّاح هو أحد أنواع التوتر. وهو خوف من حصول نوبات الهلع. (Agoraphobia)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000379.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trichotillomania",
    "term_en": "Trichotillomania",
    "term_ar": "هوس نتف الشعر",
    "synonyms": [
      "Trichotillomanias",
      "Hair Pulling Disorder",
      "Disorder, Hair Pulling",
      "Hair Pulling Disorders",
      "Pulling Disorder, Hair"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compulsion to pull out one's hair.",
    "arabic_definition": "هَوَس النَّتْف (الإنجليزية: Trichotillomania من المقطعين يونانَيْ الأصل: \"thrix\" بمعنى الشَّعْر، و\"tillein\" بمعنى النزع أو السَّحْب، و\"mania\"بمعنى الهوس أو الجنون) هو عدم قدرة المريض على التحكم في نزعه لمناطق معينة من شعر جسمه.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014256.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bruxism",
    "term_en": "Bruxism",
    "term_ar": "صرير الأسنان",
    "synonyms": [
      "Bruxomania",
      "Teeth Grinding Disorder",
      "Disorder, Teeth Grinding",
      "Grinding Disorder, Teeth",
      "Teeth Grinding Disorders"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder characterized by grinding and clenching of the teeth.",
    "arabic_definition": "صرير الأسنان أو صريف الأسنان (الإنجليزية: Bruxism) يعرف بانه عملية إطباق الأسنان على بعضها البعض أو احتكاكها ببعضها البعض بشدة مما يحدث صوتا قد يسبب تلف الأسنان أو ألم يزعج الأشخاص المحيطين، غالباً صرير الأسنان ما يحدث أثناء النوم، لكن يوجد البعض الآخر من الأشخاص الذين يعانون من هذه الحالة أثناء فترة النهار أو وهم مستيقظون. وغالبا ما يكونون الأشخاص الذين يقومون بقرض الأظافر وأصابع اليد أوالأقلام أو مضغ الوجنتين من الداخل بالأسنان.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002012.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypochondriasis",
    "term_en": "Hypochondriasis",
    "term_ar": "هجاس",
    "synonyms": [
      "Hypochondriacal Neuroses",
      "Neurosis, Hypochondriacal",
      "Hypochondriacal Neurosis",
      "Hypochondria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Preoccupation with the fear of having, or the idea that one has, a serious disease based on the person's misinterpretation of bodily symptoms. (APA, DSM-IV)",
    "arabic_definition": "الهُجَاس أو المَراق يُعتبر مرض الهجاس من الأمراض المهمة التي تبدأ بشكاوى بدنية، وهو الشكوى المستمرة من أعراض تظهر في الجسم والآلام يؤوِّلها المريض على أنها علامات لمرض خطير كالسرطان أو أمراض القلب أو الكلية، ومهما تتم محاولات إقناعه بعدم خطورة حالته الصحية وعمل الأبحاث الطبية المختلفة إلا أنه يكون دائم التردد على الأطباء وعمل الأبحاث في معامل ومختبرات عدة وكذلك اضطراب الجسد أي أنه يشتكي من عدة أعضاء أو أجهزة في جسمه ولكن دون الخوف من مرض محدد، وعادة ما يكون الخطب المشتكى منه آلاماً في الجسم وأعراضها ناتجةً من الجهاز العصبي أو القلب الدوري. أخيراً مرض (النيوراستينا) أو الإعياء النفسي والإحساس بالتعب والإرهاق الجسدي والنفسي حيث يشكو المريض التعب لأقل جهد أو أقل تركيز وعادة ما يؤول ذلك إلى فقر الدم أو كسل في الكبد أو نقص المناعة... (Hypochondriasis)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006998.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transvestism",
    "term_en": "Transvestism",
    "term_ar": "لبسة الجنس الآخر",
    "synonyms": [
      "Transvestisms",
      "Transvestic Fetishism",
      "Fetishisms, Transvestic",
      "Fetishism, Transvestic",
      "Transvestic Fetishisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorder characterized by recurrent, intense sexually arousing fantasies, sexual urges, or behaviors involving cross-dressing in a heterosexual male. The fantasies, urges, or behaviors cause clinically significant distress or impairment in social, occupational or other areas of functioning. (from APA, DSM-IV, 1994)",
    "arabic_definition": "لبسة الجنس الآخر أو انحراف المَلْبَس (الإنجليزية: Transvestism) هو مُمارسة ارتداء الملابس والتصرف بأسلوب أو طريقة ترتبط تقليدياً بالجنس الآخر.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014190.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hysteria",
    "term_en": "Hysteria",
    "term_ar": "هستيريا",
    "synonyms": [
      "Hysterical Neuroses",
      "Neuroses, Hysterical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Historical term for a chronic, but fluctuating, disorder beginning in early life and characterized by recurrent and multiple somatic complaints not apparently due to physical illness. This diagnosis is not used in contemporary practice.",
    "arabic_definition": "الهستيريا أو الهسترة أو الهُراع أو الهَرَع (الإنجليزية: Hysteria) هي مرض نفسي عصابي تظهر فيه اضطرابات انفعالية مع خلل في أعصاب الحس والحركة وهو اضطراب تحتوي فيه الانفعالات المزمنة على ظهور أعراض جسمية ليس لها أي أساس عضوي وهي تحدث لهدف عند الفرد الهستيري قد تكون بهدف الهروب من الصراع النفسي أو من القلق أو من موقف مؤلم بدون أن يدرك الدافع لذلك، وعدم إدراك الدافع يميز مريض الهستيريا عن المتمارض الذي يظهر المرض لغرض محدد مفيد. ـ وفي الهستيريا تصاب مناطق الجسم التي يتحكم فيها الجهـاز العصبي المركــزي (الإرادي) مثل الحواس وجهاز الحركة، وهذا غير المرض النفسي الجسمي حيث تصاب الأعضاء التي تحكم فيها الجهاز العصبي الذاتي (اللاإرادي).",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007046.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fasting",
    "term_en": "Fasting",
    "term_ar": "صوم",
    "synonyms": [
      "Hunger Strike",
      "Hunger Strikes",
      "Strike, Hunger",
      "Strikes, Hunger"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abstaining from FOOD.",
    "arabic_definition": "الصيام في اللغة مطلق الإمساك عن الشيء، فإذا أمسك شخص عن الكلام، أو الطعام فلم يتكلم، ولم يأكل، فإنه يقال له في اللغة: صائم. ومؤنثه: صائمة. (Fasting)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005215.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "masochism",
    "term_en": "Masochism",
    "term_ar": "سادية مازوخية",
    "synonyms": [
      "Masochisms",
      "Sexual Masochism",
      "Masochism, Sexual",
      "Masochisms, Sexual",
      "Sexual Masochisms",
      "Sadomasochism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pleasure derived from being physically or psychologically abused, whether inflicted by oneself or by others. Masochism includes sexual masochism.",
    "arabic_definition": "سادية مازوخية أو سادية – مازوخية (وقد تكتب: سادية ماسوشية) (الإنجليزية: Sadomasochism) هو نيل وحصول المُتعة من خلال القيام بالأعمال التي تتضمن إيصال أو إلحاق الألم أو الإذلال. تُعّرف السادية على أنها اضطراب نفسي يتجسّد في التلذّذ بإلحاق الألم على الطرف الآخر أو الشخص ذاته.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008398.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bottle-feeding",
    "term_en": "Bottle Feeding",
    "term_ar": "قنينة الرضاعة",
    "synonyms": [
      "Bottlefeeding",
      "Bottlefed",
      "Baby bottle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Use of nursing bottles for feeding. Applies to humans and animals.",
    "arabic_definition": "الرَّضَّاعة (الجمع: رَضَّاعَات) أو البزَّازة (الجمع: بَزَّازَات) هي قنينة يشرب منها الطفل الرضيع حليب الرضع بدلاً عن الرضاعة الطبيعية. والرضّاعة لها حلمة مِن مطاط يتغذى منها الطفل الرضيع. (Bottle Feeding)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001903.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exhibitionism",
    "term_en": "Exhibitionism",
    "term_ar": "استعرائية",
    "synonyms": [
      "Exhibitionisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder in which fantasies about or the act of exposing the genitals to an unsuspecting stranger produces sexual excitement with no attempt at further sexual activity with the stranger.",
    "arabic_definition": "الاستعرائية أو الافتضاحية أو الجَلَاعَة أو المُجَالَعة أو الإظهارية أو الاستعراضية (الإنجليزية: Exhibitionism) وهو أحد الانحرافات الجنسية، وهو انحراف يتميز برغبة المرء في الكشف عن عورته، والوقوف أو السير عاريا أمام الناس ، لتحقيق اللذة الجنسية. يطمع الاستعرائي أو الافتضاحي عادة، في أن يثير ردود فعل انفعالية لمن يشاهدوه ، كاللذة الجنسية أو الصدمة , وقد يود إظهار عورته أمام الأصدقاء أو الأقارب , أو الغرباء.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005084.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "claustrophobia",
    "term_en": "Claustrophobia",
    "term_ar": "رهاب الاحتجاز",
    "synonyms": [
      "Claustrophobias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Persistent and irrational fear of enclosed places (e.g., elevators, closets, tunnels) or of being confined (e.g., in an airplane or the backseat of a car). Situations where enclosure or confinement may be encountered are often avoided or else endured with intense anxiety or distress. The focus of fear is typically on panic symptoms triggered in these situations, such as feelings of being unable to breathe, choking, sweating, and fears of losing control. (From APA Dictionary of Psychology, accessed 11/8/2023)",
    "arabic_definition": "رهاب الاحتجاز أو رهاب الأماكن المغلقة (الإنجليزية: Claustrophobia) هو الخوف الناتج عن وجود الشخص في مكان ضيق أو مغلق. وهو يعتبر أحد الأمراض الناجمة عن القلق وعادة يتسبب في حدوث نوبات ذعر.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000098452.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "drug-overdose",
    "term_en": "Drug Overdose",
    "term_ar": "جرعة زائدة",
    "synonyms": [
      "Drug Overdoses",
      "Overdose, Drug",
      "Overdoses, Drug"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Accidental or deliberate use of a medication or street drug in excess of normal dosage.",
    "arabic_definition": "الجرعة الزائدة (أو الجرعة المفرطة) من العقاقير هو ابتلاع أو استخدام العقاقير أو المواد الأخرى بكميات تفوق الكمية الموصى بها أو المتبعة. قد تؤدي الجرعة المفرطة إلى التسمم أو الموت. (Drug Overdose)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D062787.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "narration",
    "term_en": "Narration",
    "term_ar": "قص (أدب)",
    "synonyms": [
      "Narrations",
      "Narrative Ethics",
      "Ethics, Narrative"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The act, process, or an instance of narrating, i.e., telling a story. In the context of MEDICINE or ETHICS, narration includes relating the particular and the personal in the life story of an individual.",
    "arabic_definition": "القصّ أو السرد أو التلفظ السردي (الإنجليزية: Narration) هو استخدام التعليق المكتوب أو المنطوق لنقل قصة للجمهور. يتم نقل القص بواسطة الراوي وهو شخص معين أو صوت أدبي غير محدد، تم تطويره بواسطة مبتكر القصة، لإيصال المعلومات للجمهور، خاصة حول الحبكة (سلسلة الأحداث).",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D033262.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurasthenia",
    "term_en": "Neurasthenia",
    "term_ar": "وهن عصبي",
    "synonyms": [
      "Neurasthenic Neuroses",
      "Neuroses, Neurasthenic",
      "Bodily Distress Disorder",
      "Bodily Distress Disorders",
      "Disorder, Bodily Distress",
      "Distress Disorder, Bodily"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mental disorder characterized by chronic fatigue and concomitant physiologic symptoms.",
    "arabic_definition": "الوهن العصبي (اللاتينية: neurasthenia) هو الشعور الذاتي والمستمر بالانهاك والضعف العام والإعياء والتعب المصحوب بأعراض عضوية متنوعة ينتهي إلى حد الانهيار، إنه بمثابة تعب مزمن يحدث اضطرابا في سلوك الفرد وعضويته. وأول من استخدم هذا اللفظ هو العالم الأمريكي بيرد (الإنجليزية: Beard) وجعله يشمل عددًا كبيرًا من الاضطرابات العصابية والعضوية، ثم يطلق على معظم أعراض العصاب التي يظن أنها ناتجة عن ضعف نفسي، وقد وصفه (جانيه) بأنه يشبه القلق والوساوس المتسلطة مضافًا إليه الوهن والضعف في الطاقة النفسية للفرد على حد تعبيره.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009440.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "healthy-diet",
    "term_en": "Healthy Diet",
    "term_ar": "نظام غذائي صحي",
    "synonyms": [
      "Diets, Healthy",
      "Healthy Diets",
      "Healthy Eating",
      "Eating, Healthy",
      "Healthy Eating Index",
      "Healthy Eating Indices",
      "Index, Healthy Eating",
      "Indices, Healthy Eating"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Dietary patterns which have been found to be important in reducing disease risk.",
    "arabic_definition": "النِظام الغِذائي الصِحي هو الذي يُساعد في المُحافظة على الصِحة العَامة وتَنْميتها ويقصد به النظام الغذائي الذي يؤدي إلى تحسين صحة الفرد، وهَذا النِظام يَقوم على إمداد الجِسم بالموادِ الغِذائية الأسَاسية مِن مثل: السَوائل و«المُغذيات الكُبرى»، وهي عَناصِر يحتاجها الجِسم بكمياتٍ كبيرة للبقاءِ والنمو مع «المُغذيات الصُغرى» التي يَحتاجها الجِسم بكمياتٍ صغيرة لتعزيزِ نموه، وتحْسينه، بالإضافةِ إلى السعراتِ الحراريةِ الكافية للجسمِ. هُناك العَديد مِن الأنظمِة الغِذائية المُبتدعة، التي تُعد أَصحابها بنتائِج متنوعة؛ إلا أنها لا تَقوم على أساس علمي. (Healthy Diet)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000072001.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "homosexuality",
    "term_en": "Homosexuality",
    "term_ar": "مثلية جنسية",
    "synonyms": [
      "Homosexuality, Ego-Dystonic",
      "Ego-Dystonic Homosexuality"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sexual attraction or relationship between members of the same SEX.",
    "arabic_definition": "المثلية الجنسية أو الانجذاب للمماثل (الإنجليزية: Homosexuality) هي توجه جنسي يتسم بالانجذاب الشعوري، أو الرومنسي، أو الجنسي بين أشخاص من نفس الجنس. تُعَد المثلية هُويَّة يشعر بها الإنسان بناءً على هذه الميول والتصرُّفات المصاحبة لها، إضافة إلى الشعور بأنه جزء من جماعة تشاركه هذه الميول.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006716.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pedophilia",
    "term_en": "Pedophilia",
    "term_ar": "اشتهاء الأطفال",
    "synonyms": [
      "Pedophilias",
      "Pederasty",
      "Pederasties"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sexual disorder occurring in a person 16 years or older and that is recurrent with intense sexually arousing fantasies, sexual urges, or behaviors involving sexual activity with a prepubescent child (generally age 13 or younger). (from APA, DSM-IV, 1994).",
    "arabic_definition": "اشتهاء الأطفال أو التحبب بالأطفال (بالإنجليزية الأمريكية: Pedophilia، وبالإنجليزية البريطانية: Paedophilia) هو اضطراب نفسي يتمثل في شعور شخص بالغ أو مراهق أكبر سنًا بانجذاب جنسي أساسي أو حصري نحو الأطفال الذين لم يبلغوا البلوغ. وعلى الرغم من أن الفتيات يبدأن عادةً مرحلة البلوغ في سن العاشرة أو الحادية عشرة، بينما يبدأها الفتيان في سن الحادية عشرة أو الثانية عشرة، فإن المعايير التشخيصية النفسية لاشتهاء الأطفال تعتمد سن الثالثة عشرة حدًا أقصى لمرحلة ما قبل البلوغ.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010378.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diabulimia",
    "term_en": "Diabulimia",
    "term_ar": "نهام عصابي سكري",
    "synonyms": [
      "Eating Disorder Diabetes Mellitus Type 1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Eating disorder occurring typically in patients with DIABETES MELLITUS, TYPE 1 who restrict INSULIN intake in order to lose weight.",
    "arabic_definition": "يشير مصطلح النهام العصابي السكري (أو ديابوليميا) إلى اضطراب في العادات الغذائية حيث يتعمّد الأشخاص المصابين بداء السكري النوع الأول استخدام الانسولين بكمية أقل من حاجتهم لغرض فقدان الوزن. وعلى الرغم من أن المجتمعات الطبية أو النفسية لا تعترف بداء النهام العصابي السكري بصفته تشخيصاً رسمياً في الوقت الحالي، إلا أن ثمة عبارات تُستخدم بكثرة في المطبوعات الطبية والنفسية مثل «السلوك الغذائي المضطرب» و «التغذية المضطربة» التي تقوم بتحديد الحالة المرضية للأشخاص المصابين بداء السكري النوع الأول، وأيضاً للأشخاص الذين يتعمدون التلاعب في تناول حقن الأنسولين بغرض التحكم بأوزانهم إلى جانب سلوكهم النُهامي. (Diabulimia)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000080887.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chronotype",
    "term_en": "Chronotype",
    "term_ar": "كرونوتايب",
    "synonyms": [
      "Chronotypes",
      "Morningness Eveningness Preferences",
      "Morningness Eveningness Preference",
      "Preference, Morningness Eveningness"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The natural inclination or preference of time of day in which an individual or an organism has the most activity, particularly as it relates to sleeping pattern and circadian sleep-wake preferences.",
    "arabic_definition": "النوع الزمني أو النمط الزمني أو السمة الزمنية أو وقت النشاط الزمني أو الكرونوتايب (بالإنجليزية: Chronotype) هو المظهر السلوكي لعدد لا يحصى من العمليات الجسدية الكامنة وراء إيقاع الساعة البيولوجية. النمط الزمني للشخص هو ميل الفرد للنوم في وقت معين خلال فترة 24 ساعة.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000094407.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sexuality",
    "term_en": "Sexuality",
    "term_ar": "جنسانية",
    "synonyms": [
      "Human sexuality"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sexual functions, activities, attitudes, and orientations of an individual. Sexuality, male or female, becomes evident at PUBERTY under the influence of gonadal steroids (TESTOSTERONE or ESTRADIOL), and social effects.",
    "arabic_definition": "الجنسانية البشرية (الإنجليزية: Human sexuality) هي الطريقة التي يختبر بها الناس ويعبرون عن أنفسهم جنسيًا. يشمل ذلك المشاعر والسلوكيات البيولوجية، أو الجنسية، أو الجسدية، أو العاطفية، أو الاجتماعية، أو الروحانية.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019529.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "breast-feeding",
    "term_en": "Breast Feeding",
    "term_ar": "رضاعة طبيعية",
    "synonyms": [
      "Breast Feedings",
      "Breast Fed",
      "Breastfed",
      "Breastfeeding",
      "Chestfeeding",
      "Chestfeedings",
      "Breast Feeding, Exclusive",
      "Exclusive Breast Feeding"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The nursing of an infant at the breast.",
    "arabic_definition": "الإرضاع الطبيعي أو الرضاعة الطبيعية هي عملية تغذية المولود بالحليب الذي ينتجه ثدي الأنثى بالمص. وهي عملية فطرية مشتركة بين الاٍنسان وباقي الثدييات وتستمر هذه العملية من الولادة وحتى الفطام. (Breast Feeding)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001942.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "binge-drinking",
    "term_en": "Binge Drinking",
    "term_ar": "شراهة شرب الكحوليات",
    "synonyms": [
      "Drinking, Binge",
      "Binge Alcohol Consumption",
      "Alcohol Consumption, Binge"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drinking an excessive amount of ALCOHOLIC BEVERAGES in a short period of time.",
    "arabic_definition": "شراهة شرب الكحوليات أو الافراط في معاقرة الكحوليات هي إحدى السمات الحديثة لشرب المشروبات الكحولية بقصد السُكر أو ما يُعرف طبيًا بالتسمم الكحولي عن طريق شرب الكحول بنهم على مدى فترة زمنية قصيرة، ولكن تختلف التعريفات في ذلك اختلافًا كبيرًا. يعتبر شرب المشروبات الكحولية بشراهة أسلوبًا شائعًا في العديد من البلدان حول العالم، ويتداخل إلى حد ما مع الشرب الاجتماعي نظرًا لأنه يتم في مجموعات. (Binge Drinking)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063425.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bisexuality",
    "term_en": "Bisexuality",
    "term_ar": "ازدواجية التوجه الجنسي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sexual attraction or relationship between members of both the same and the opposite SEX.",
    "arabic_definition": "ازدواجية التوجه الجنسي أو ثنائى الجنس أو خنثى (الإنجليزية: Bisexuality) هو واحد من الأنواع الأربعة الأساسية للتوجه الجنسي ويعني ميل الشخص عاطفيا أو جنسيا أو كليهما لنفس جنسه وللجنس الآخر أيضًا. وهي واحدة من أربعة تصنيفات أساسية للتوجه الجنسي عند البشر جنبا إلى الغيرية والمثلية واللاجنسية.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001727.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phototaxis",
    "term_en": "Phototaxis",
    "term_ar": "استجابة ضوئية",
    "synonyms": [
      "Photokinesis",
      "Photokineses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A behavioral change that results in an organism moving or orienting toward or away from the light source.",
    "arabic_definition": "إن المحور الضوئي هو نوع من الإستجابات ، أوالحركات ، التي تحدث عندما يتحرك كائن حي بأكمله باتجاه أو بعيدًا عن منبه الضوء. وهذا مفيد للكائنات الحية ذاتية التغذية حيث يمكنها توجيه نفسها بفعالية أكبر لتلقي الضوء من أجل البناء الضوئي. (Phototaxis)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071444.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "social-phobia",
    "term_en": "Social Phobia",
    "term_ar": "اضطراب القلق الاجتماعي",
    "synonyms": [
      "Social Phobias",
      "Social Anxiety Disorder",
      "Anxiety Disorder, Social",
      "Disorder, Social Anxiety",
      "Social Anxiety Disorders",
      "Social Evaluation Phobia",
      "Sociophobia",
      "Sociophobias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anxiety disorder characterized by the persistent and irrational fear, anxiety, or avoidance of social or performance situations.",
    "arabic_definition": "اضطراب القلق الاجتماعي (اختصارًا SAD)، ويسمى أيضًا الرهاب الاجتماعي)، هو نوع من الاضطرابات التي تحدث للفرد عندما يتعرض للحديث لأول مرة أو حتى بعد فترة من معرفة اشخاص جدد لا يعرفهم فيشعر بالخوف والتوتر الزائدين، وفي المواقف التي يشعر فيها الشخص أنه تحت المجهر أو داخل حلقة التركيز وأن الكل ينظر إليه، فيخاف أن يظهر عليه الخجل أو الخوف أو أن يخطئ أو يتلعثم مما يؤدي به للارتجاف والخفقان وضيق التنفس وجفاف الحلق والتعرق... الخ. (Social Phobia)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000072861.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "panic-disorder",
    "term_en": "Panic Disorder",
    "term_ar": "اضطراب الهلع",
    "synonyms": [
      "Disorder, Panic",
      "Disorders, Panic",
      "Panic Disorders",
      "Panic Attacks",
      "Attack, Panic",
      "Attacks, Panic",
      "Panic Attack"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of anxiety disorder characterized by unexpected panic attacks that last minutes or, rarely, hours. Panic attacks begin with intense apprehension, fear or terror and, often, a feeling of impending doom. Symptoms experienced during a panic attack include dyspnea or sensations of being smothered; dizziness, loss of balance or faintness; choking sensations; palpitations or accelerated heart rate; shakiness; sweating; nausea or other form of abdominal distress; depersonalization or derealization; paresthesias; hot flashes or chills; chest discomfort or pain; fear of dying and fear of not being in control of oneself or going crazy. Agoraphobia may also develop. Similar to other anxiety disorders, it may be inherited as an autosomal dominant trait.",
    "arabic_definition": "اضطراب الهلع هو أحد اضطرابات القلق الشائعة جدًا، والتي يجهلها كثير من الناس حتى الأطباء في التخصصات الأخرى. ويظهر الهلع على شكل نوبات من الأعراض الجسمية المفاجئة المصحوبة بالخوف الشديد من الموت أو فقدان الوعي أو العقل. (Panic Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016584.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "marijuana-abuse",
    "term_en": "Marijuana Abuse",
    "term_ar": "اضطراب استخدام القنب",
    "synonyms": [
      "Abuse, Marijuana",
      "Marihuana Abuse",
      "Abuse, Marihuana",
      "Cannabis Abuse",
      "Abuse, Cannabis",
      "Cannabis Dependence",
      "Dependence, Cannabis",
      "Marijuana Dependence"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Use of marijuana associated with abnormal psychological, social, and or occupational functioning.",
    "arabic_definition": "يُعرف اضطراب استخدام القنب، المعروف أيضًا بإدمان القنب أو إدمان الماريجوانا، في الطبعة الخامسة من الدليل التشخيصي والإحصائي للاضطرابات النفسية والمراجعة العاشرة للتصنيف الدولي للأمراض على أنه الاستمرار في تعاطي القنب على الرغم من الاعتلال السريري الواضح. (Marijuana Abuse)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002189.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kinesiophobia",
    "term_en": "Kinesiophobia",
    "term_ar": "رهاب الحركة",
    "synonyms": [
      "Pain-Related Activity Avoidance",
      "Activity Avoidance, Pain-Related",
      "Avoidance, Pain-Related Activity",
      "Movement Phobia",
      "Fear of Movement",
      "Movement Fear",
      "Kinesophobia",
      "Kinetophobia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anxiety disorder of persistent and irrational fear of movement following an injury. It is related to perceived disability due to injury and CATASTROPHIZING in fear of (anticipated) PAIN and possibility of REINJURY.",
    "arabic_definition": "رهاب الحركة (الإنجليزية: Kinesiophobia) هو الخوف من الألم بسبب الحركة . يستخدم المصطلح في سياق الطب الطبيعي وإعادة التأهيل وكذلك العلاج الفيزيائي كعامل يعيق التأهيل و يطيل الإعاقة و الألم .",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000092442.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orgasm",
    "term_en": "Orgasm",
    "term_ar": "هزة الجماع",
    "synonyms": [
      "Orgasms",
      "Sexual Satisfaction",
      "Satisfaction, Sexual",
      "Sexual Satisfactions",
      "Sexual Gratification",
      "Gratification, Sexual",
      "Sexual Gratifications"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The climax of sexual excitement in either humans or animals.",
    "arabic_definition": "هزة الجماع أو الإِيغَافُ أو الإرجاز (الإنجليزية: Orgasm) هي ختام للعملية الجنسية والتفريغ الكامل للإثارة الجنسية التي تراكمت خلال مراحل الجماع، حيث تحدث لكل من الذكور والإناث وهي أقصى مراحل الاستمتاع والنشوة حيث تنقبض العضلات لا إرادياً في منطقة الحوض، والتي تؤدي إلى القذف عند الرجال وحدوث انقباضات في العضلات المحيطة بالمهبل عند النساء، وتوتر عضلي شامل في جميع أنحاء الجسم ويلي هذه المرحلة عودة الجسم إلى مرحلة عدم الاستثارة وشعور عام بالارتخاء العضلي والإعياء وأحياناً بالنعاس.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009948.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coitus",
    "term_en": "Coitus",
    "term_ar": "جماع",
    "synonyms": [
      "Sexual Intercourse",
      "Intercourse, Sexual",
      "Sexual Intercourses",
      "Coital Frequency",
      "Coital Frequencies",
      "Frequency, Coital",
      "First Intercourse",
      "First Intercourses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sexual union of a male and a female, a term used for human only.",
    "arabic_definition": "الجِمَاعُ ويُسَمَّى أيضًا المُضَاجَعَة أو الوَطْء أو المُوَاقَعَة أو سفاد هو العملية الجنسية التي تقوم أساساً على إدخال القضيب منتصباً إلى داخل المهبل بهدف الحصول على المتعة الجنسية أو للتكاثر أو كليهما. كما تُعرف هذه العملية باسم الجماع المهبلي أو الجنس المهبلي توجد الغريزة الجنسية في الكائنات الحية الراقية والغرض منها التكاثر وحفظ النوع، أما في الكائنات الحية البدائية فيتم التكاثر غالباً بصورة لاجنسية. (Coitus)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003075.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diabetic-ketoacidosis",
    "term_en": "Diabetic Ketoacidosis",
    "term_ar": "حماض كيتوني سكري",
    "synonyms": [
      "Diabetic Ketoacidoses",
      "Ketoacidoses, Diabetic",
      "Acidosis, Diabetic",
      "Acidoses, Diabetic",
      "Diabetic Acidoses",
      "Diabetic Acidosis",
      "Diabetic Ketosis",
      "Diabetic Ketoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A life-threatening complication of diabetes mellitus, primarily of TYPE 1 DIABETES MELLITUS with severe INSULIN deficiency and extreme HYPERGLYCEMIA. It is characterized by KETOSIS; DEHYDRATION; and depressed consciousness leading to COMA.",
    "arabic_definition": "الحُماض الكيتوني السكري (الإنجليزية: diabetic ketoacidosis) هي مضاعفة قد تهدد الحياة في المرضى الذين يعانون من داء السكري. تحدث غالبًا في مرضى سكري النمط الأول، ولكن قد تحدث في مرضى سكري النمط الثاني في ظل ظروف معينة.",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016883.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cushing-syndrome",
    "term_en": "Cushing Syndrome",
    "term_ar": "متلازمة كوشينغ",
    "synonyms": [
      "Syndrome, Cushing",
      "Cushing's Syndrome",
      "Syndrome, Cushing's",
      "Hypercortisolism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by prolonged exposure to excess levels of cortisol (HYDROCORTISONE) or other GLUCOCORTICOIDS from endogenous or exogenous sources. It is characterized by upper body OBESITY; OSTEOPOROSIS; HYPERTENSION; DIABETES MELLITUS; HIRSUTISM; AMENORRHEA; and excess body fluid. Endogenous Cushing syndrome or spontaneous hypercortisolism is divided into two groups, those due to an excess of ADRENOCORTICOTROPIN and those that are ACTH-independent.",
    "arabic_definition": "متلازمة كوشينغ أو فرط نشاط قشر الكظر (الإنجليزية: Cushing's syndrome) اضطراب هورموني ناتج عن زيادة افراز هرمون الكورتيزول في الدم، هنالك عدة مسببات لهذا الاعتلال منها أورام الغدة النخامية أو فرط تنسج قشر الكظر والإفراز المنتبذ للهرمون الكظري القشري الاغتذائي (هرمون حاثة القشرة) والمعروف باسم الهرمون الموجه لقشر الكظر. علينا أن نميز بين حالتين متداخلتين هما مرض كوشينغ ومتلازمة كوشينغ، ففي الأولى ينتج الاعتلال عن ورم نشط في الغدة النخامية يفرز هرمون حاثة القشرة أما في الحالة الثانية فإن الغدة النخامية لا تستجيب للتلقيم الراجع السلبي وتستمر في إفراز هرمون حاثة القشرة، بعض الحالات (ومن أكثرها شيوعاً) علاجية المنشأ وتحدث نتيجة التداوي الخاطئ بالستيروئيدات وتؤدي لحدوث متلازمة كوشينغ. (Cushing Syndrome)",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003480.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hunger",
    "term_en": "Hunger",
    "term_ar": "جوع",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The desire for FOOD generated by a sensation arising from the lack of food in the STOMACH.",
    "arabic_definition": "الجوع هو الإحساس بالحاجة إلى الطعام وهو ينشأ في منطقة الوطاء ( تحت المهاد أو الهيبوثلامس ) وينشأ عن طريق مستقبلات في الكبد. ويبدأ إحساس الجوع بعد آخر وجبة بعشرة ساعات ويعتبر شعورا غير مريح وينتهي إحساس الجوع بتناول الطعام. (Hunger)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006815.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "addison-disease",
    "term_en": "Addison Disease",
    "term_ar": "مرض أديسون",
    "synonyms": [
      "Disease, Addison",
      "Addison's Disease",
      "Addisons Disease",
      "Primary Adrenal Insufficiency",
      "Adrenal Insufficiency, Primary",
      "Primary Adrenocortical Insufficiency",
      "Adrenocortical Insufficiencies, Primary",
      "Adrenocortical Insufficiency, Primary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An adrenal disease characterized by the progressive destruction of the ADRENAL CORTEX, resulting in insufficient production of ALDOSTERONE and HYDROCORTISONE. Clinical symptoms include ANOREXIA; NAUSEA; WEIGHT LOSS; MUSCLE WEAKNESS; and HYPERPIGMENTATION of the SKIN due to increase in circulating levels of ACTH precursor hormone which stimulates MELANOCYTES.",
    "arabic_definition": "مرض أديسون أو داء أديسون(الإنجليزية: Addison's disease) المعروف أيضا باسم القصور الكظري الأولي، هو اضطراب نادر في الغدد الصماء على المدى الطويل يتميز بعدم كفاية إنتاج هرمونات الستيرويد الكورتيزول والألدوسترون من قبل الطبقتين الخارجيتين من خلايا الغدد الكظرية (قشرة الكظرية)، مما يسبب قصور الكظرية. تحدث الأعراض بشكل عام ببطء وخبث وقد تشمل ألم البطن، مشاكل الجهاز الهضمي، الدوار عند الوقوف، ضعف، وفقدان الوزن. (Addison Disease)",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000224.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hashimoto-disease",
    "term_en": "Hashimoto Disease",
    "term_ar": "التهاب الغدة الدرقية لهاشيموتو",
    "synonyms": [
      "Disease, Hashimoto",
      "Hashimoto's Disease",
      "Disease, Hashimoto's",
      "Hashimotos Disease",
      "Chronic Lymphocytic Thyroiditis",
      "Chronic Lymphocytic Thyroiditides",
      "Lymphocytic Thyroiditides, Chronic",
      "Lymphocytic Thyroiditis, Chronic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chronic autoimmune thyroiditis, characterized by the presence of high serum thyroid AUTOANTIBODIES; GOITER; and HYPOTHYROIDISM.",
    "arabic_definition": "التهاب الدرقية لهاشيموتو (الإنجليزية: Hashimoto's thyroiditis) (أو التهاب الغدة الدرقية المزمن) هو مرض مناعي ذاتي في الغدة الدرقية، يتم فيه إنتاج اجسام مضادة لخلايا الغدة الدرقية وهو من أكثر الاسباب شيوعا لقصور الدرقية المزمن (نقص الهرمونات التي تفرزها الغدة الدرقية مثل الثيروكسين). ويعد التهاب الدرقية الهاشيموتي أكثر شيوعا عند الإناث، أول من اكتشفه هو الاخصائي الياباني هاكارو هاشيموتو بعام 1912، فيعتبر هذا المرض أول مرض مناعي ذاتي تم اكتشافه. (Hashimoto Disease)",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050031.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypoparathyroidism",
    "term_en": "Hypoparathyroidism",
    "term_ar": "قصور الدريقات",
    "synonyms": [
      "Idiopathic Hypoparathyroidism",
      "Hypoparathyroidism, Idiopathic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by a deficiency of PARATHYROID HORMONE (or PTH). It is characterized by HYPOCALCEMIA and hyperphosphatemia. Hypocalcemia leads to TETANY. The acquired form is due to removal or injuries to the PARATHYROID GLANDS. The congenital form is due to mutations of genes, such as TBX1; (see DIGEORGE SYNDROME); CASR encoding CALCIUM-SENSING RECEPTOR; or PTH encoding parathyroid hormone.",
    "arabic_definition": "قصور الدُرَيْقات أو نقص جنيبات الدرقية (الإنجليزية: Hypoparathyroidism) هو قصور وظيفة الغدد جارات الدرقية مع نقص إنتاج الهرمون جار الدرقي. يمكن أن يؤدي هذا النقص إلى انخفاض مستويات الكالسيوم في الدم، وغالبًا ما يتسبب بشد عضلي وتشنجها أو التكزز (تقلص العضلات اللاإرادي)، والعديد من الأعراض الأخرى.",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007011.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperparathyroidism",
    "term_en": "Hyperparathyroidism",
    "term_ar": "فرط جارات الدرقية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of abnormally elevated output of PARATHYROID HORMONE (or PTH) triggering responses that increase blood CALCIUM. It is characterized by HYPERCALCEMIA and BONE RESORPTION, eventually leading to bone diseases. PRIMARY HYPERPARATHYROIDISM is caused by parathyroid HYPERPLASIA or PARATHYROID NEOPLASMS. SECONDARY HYPERPARATHYROIDISM is increased PTH secretion in response to HYPOCALCEMIA, usually caused by chronic KIDNEY DISEASES.",
    "arabic_definition": "فرط جارات الدرقية هو زيادة مستويات الهرمون الجار درقي (PTH) في الدم. يحدث ذلك إما نتيجة زيادة إفراز الغدد جارات الدرقية للهرمون بشكل مبالغ فيه (فرط جارات الدرقية الأولي) أو بسبب أحداث أخرى تحفز زيادة إنتاج الغدد (فرط جارات الدرقية الثانوي). (Hyperparathyroidism)",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006961.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "primary-hyperparathyroidism",
    "term_en": "Primary Hyperparathyroidism",
    "term_ar": "فرط نشاط جارة الدرقية الأولي",
    "synonyms": [
      "Hyperparathyroidisms, Primary",
      "Primary Hyperparathyroidisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of abnormally elevated output of PARATHYROID HORMONE due to parathyroid HYPERPLASIA or PARATHYROID NEOPLASMS. It is characterized by the combination of HYPERCALCEMIA, phosphaturia, elevated renal 1,25-DIHYDROXYVITAMIN D3 synthesis, and increased BONE RESORPTION.",
    "arabic_definition": "فرط نشاط الغدة الجار درقية الأولي أو فرط الدريقات الأوليُّ (الإنجليزية: Primary Hyperparathyroidism) هو زيادة في تركيز الهرمون الدُّرَيقي في الدم نتيجة لزيادة نشاط الدُّرَيقات بشكل مستقل (أي تلقائياً، بدون وجود عامل محفز لزيادة نشاطها) ويعد أهمًّ الأسباب المسببة لـفرط كالسيوم الدم. ويجب تمييزه عن فرط الدريقات الثانوي، الذي يكون فيه زيادة في نشاط الدُّرَيقات نتيجة لنقص الكالسيوم في الدم لفترات طويلة (كما يحدث في نقص الفيتامين د)، وكذلك فإنه يختلف عن نقص الدُّرَيقات الثالثي، والذي يتكون فيه ورمٌ غُدّيّ (غُدُّومٌ) في الدُّرَيقات بسبب نقص مطوَّل في كالسيوم (كما يحدث في فشل الكلية المزمن).",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049950.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "speech",
    "term_en": "Speech",
    "term_ar": "حديث (تواصل)",
    "synonyms": [
      "Public Speaking",
      "Speaking, Public"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Communication through a system of conventional vocal symbols.",
    "arabic_definition": "الحديث (الإنجليزية: Speech) هو وسيلة تواصل صوتي بواسطة الكلمات، هذه الكلمات هي جزء من لغة وهي نظام من الرموز المعقدة ونظام يحتاج لتعلمه كي نستخدمه في حياتنا. يقوم الحديث على العنصر البشري فقط ويقوم أيضاً عند الأنواع الأخرى من الكائنات المنقرضة.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013060.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperaldosteronism",
    "term_en": "Hyperaldosteronism",
    "term_ar": "فرط الألدوستيرونية",
    "synonyms": [
      "Aldosteronism",
      "Conn Syndrome",
      "Syndrome, Conn",
      "Conn's Syndrome",
      "Conns Syndrome",
      "Syndrome, Conn's",
      "Primary Hyperaldosteronism",
      "Hyperaldosteronism, Primary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition caused by the overproduction of ALDOSTERONE. It is characterized by sodium retention and potassium excretion with resultant HYPERTENSION and HYPOKALEMIA.",
    "arabic_definition": "فرط الألدوستيرونية (الإنجليزية: Hyperaldosteronism) أو الألدوستيرونية (الإنجليزية: aldosteronism) هي حالة مرضية تتصف بزيادة إنتاج ألدوستيرون من الغدد الكظرية مما يتسبب في انخفاض مستوى البوتاسيوم في الدم (أو ما يسمى بنقص بوتاسيوم الدم).",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006929.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "latent-autoimmune-diabetes-in-adults",
    "term_en": "Latent Autoimmune Diabetes in Adults",
    "term_ar": "سكري كامن ذاتي المناعة لدى الكبار",
    "synonyms": [
      "Diabetes Mellitus Type 1.5",
      "LADA, Latent Autoimmune Diabetes in Adults",
      "Latent Autoimmune Diabetes of Adults",
      "Type 1.5 Diabetes Mellitus",
      "Type 1.5 Diabetes",
      "Diabetes, Type 1.5"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Autoimmune diabetes in adults with slowly progressive PANCREATIC BETA CELL failure and the presence of circulating autoantibodies to PANCREATIC ISLETS cell antigens.",
    "arabic_definition": "داء السكري الكامن ذاتي المناعة لدى الكبار هو شكل من أشكال سكري النوع الأول يحدث في مرحلة البلوغ (على عكس الشكل التقليدي لسكري النوع الأول) ويكون حدوثه أكثر بطئا وأحيانا يُشخص المرضي المصابين به في البداية بشكل غير صحيح على أنهم مصابون بسكري النوع الثاني بالنظر إلى إلى أعمارهم، خاصة إذا كان هناك عوامل خطر تزيد من احتمالية الإصابة بسكري النوع الثاني مثل التاريخ العائلي الطبي أو السمنة. يعتمد تشخيص داء السكري الكامن ذاتي المناعة لدى الكبار عادة على فرط سكر الدم وتكون انطباع سريري بأن سبب هذا الارتفاع في سكر الدم هو فشل جزر لانغرهانس وليس مقاومة الإنسولين؛ وذلك بالكشف عن نقص في ببتيد سي وارتفاع في الأجسام المضادة لجزر لانغرهانس، ويمكن علاج داء السكري الكامن ذاتي المناعة لدى الكبار في البداية باستخدام خافضات سكر الدم لفترة معينة من الزمن، وبعد ذلك يكون العلاج بالإنسولين ضروريًا، بجانب المراقبة الطويلة المدى لمضاعفات السكري. (Latent Autoimmune Diabetes in Adults)",
    "specialty": "Endocrinology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071698.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bipolar-disorder",
    "term_en": "Bipolar Disorder",
    "term_ar": "اضطراب ثنائي القطب",
    "synonyms": [
      "Bipolar Disorders",
      "Disorder, Bipolar",
      "Bipolar Mood Disorder",
      "Bipolar Mood Disorders",
      "Disorder, Bipolar Mood",
      "Mood Disorder, Bipolar",
      "Manic Depression",
      "Depression, Manic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A major affective disorder marked by severe mood swings (manic or major depressive episodes) and a tendency to remission and recurrence.",
    "arabic_definition": "اضطراب ثنائي القطب هو اضطراب نفسي يسبّب نوباتٍ من الاكتئاب ونوبات أخرى من الابتهاج غير الطبيعي. تعدّ نوبات الابتهاج المذكورة، والتي تعرف أيضاً باسم الهوس أو الهوس الخفيف، ذات أهمّية في تشخيص الحالة وذلك اعتماداً على شدّتها أو إذا كانت أعراض الذِّهان بادية. (Bipolar Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001714.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asperger-syndrome",
    "term_en": "Asperger Syndrome",
    "term_ar": "متلازمة أسبرجر",
    "synonyms": [
      "Syndrome, Asperger",
      "Asperger's Disorder",
      "Aspergers Disorder",
      "Disorder, Asperger's",
      "Asperger's Syndrome",
      "Aspergers Syndrome",
      "Syndrome, Asperger's",
      "Asperger Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder beginning in childhood whose essential features are persistent impairment in reciprocal social communication and social interaction, and restricted, repetitive patterns of behavior, interests, or activities. These symptoms may limit or impair everyday functioning. (From DSM-5)",
    "arabic_definition": "متلازمة أسبرجر، هو اضطراب في النمو العصبي تتميز بصعوبات كبيرة في التفاعل الاجتماعي والتواصل غير اللفظي بالإضافة إلى أنماط مقيدة ومتكررة من السلوك والاهتمامات. تجدر الإشارة إلى أن متلازمة أسبرجر قد تم دمجها مع حالات أخرى ذات صلة في ما يعرف الآن باسم اضطراب طيف التوحد ولم تعد تعتبر تشخيصًا مستقلاً. (Asperger Syndrome)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020817.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gender-dysphoria",
    "term_en": "Gender Dysphoria",
    "term_ar": "اضطراب الهوية الجندرية",
    "synonyms": [
      "Gender Identity Disorder",
      "Disorder, Gender Identity",
      "Gender Identity Disorders",
      "Identity Disorder, Gender"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A marked difference between the individual’s expressed/experienced gender and the gender others would assign to the individual, and it must continue for at least six months. (from DSM-5)",
    "arabic_definition": "اضطراب الهوية الجندرية أو الانزعاج الجندري (اختصارًا GD)، هو تشخيص يطلقه أطباء وعلماء النفس وعلماء وظائف الأعضاء على الأشخاص الذين يعانون من حالة من اللا ارتياح أو القلق حول نوع الجنس الذي ولدوا به. وكان يعتبر تصنيفا نفسيا، ثم أزيل التشخيص من قائمة الأمراض العقلية والنفسية. (Gender Dysphoria)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000068116.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "munchausen-syndrome",
    "term_en": "Munchausen Syndrome",
    "term_ar": "متلازمة مونخهاوزن",
    "synonyms": [
      "Syndrome, Munchausen",
      "Syndrome, Hospital-Addiction",
      "Hospital-Addiction Syndrome",
      "Hospital-Addiction Syndromes",
      "Syndromes, Hospital-Addiction",
      "Munchhausen Syndrome",
      "Syndrome, Munchhausen",
      "Factitious disorder imposed on self"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A factitious disorder characterized by habitual presentation for hospital treatment of an apparent acute illness, the patient giving a plausible and dramatic history, all of which is false.",
    "arabic_definition": "متلازمة مونخهاوزن، (الإنجليزية: Munchausen syndrome) هو خلل نفسي، يختلق المصاب به أمراضاً ووعكات صحية وإصابات أو أزمات نفسية بغرض جذب الانتباه أو التعاطف من الآخرين. وهذه الأصابات أو الأمراض يحدثها المصاب في نفسه أو يتسبب بها أو يختلقها اختلاقاً.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009110.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anxiety-disorders",
    "term_en": "Anxiety Disorders",
    "term_ar": "اضطراب القلق",
    "synonyms": [
      "Anxiety Disorder",
      "Disorder, Anxiety",
      "Disorders, Anxiety",
      "Neuroses, Anxiety",
      "Anxiety Neuroses",
      "Anxiety States, Neurotic",
      "Anxiety State, Neurotic",
      "Neurotic Anxiety State"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Persistent and disabling ANXIETY.",
    "arabic_definition": "اضطرابات القلق هي صنف من أصناف الاضطراب النفسي والذي يميز من خلال الإحساس بالقلق والخوف، حيث أن القلق هو حمل هم الأحداث المستقبلية، والخوف هو رد فعل على الأحداث الحالية. هذه المشاعر يمكن لها أن تسبب أعراض جسمانية، مثل تسرع القلب والرجفان. (Anxiety Disorders)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001008.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "self-mutilation",
    "term_en": "Self Mutilation",
    "term_ar": "إيذاء النفس",
    "synonyms": [
      "Mutilation, Self",
      "Autotomy Human",
      "Autotomy Humans",
      "Self Mutilating Behavior",
      "Behavior, Self Mutilating",
      "Mutilating Behavior, Self",
      "Self Mutilating Behaviors",
      "Self-harm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The act of injuring one's own body to the extent of cutting off or permanently destroying a limb or other essential part of a body.",
    "arabic_definition": "إيذاء النفس أو جرح النفس هو إصابة مباشرة متعمدة لأنسجة الجلد الخاصة للمرء عادة دون نية في الانتحار. استُخدمت مصطلحات أخرى مثل الجرح وتشويه الذات لأي سلوك يُضر بالنفس بغض النظر عن النية في الانتحار. (Self Mutilation)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012652.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "conduct-disorder",
    "term_en": "Conduct Disorder",
    "term_ar": "اضطراب السلوك",
    "synonyms": [
      "Conduct Disorders",
      "Callous-Unemotional Traits",
      "Callous-Unemotional Trait"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A repetitive and persistent pattern of behavior in which the basic rights of others or major age-appropriate societal norms or rules are violated. These behaviors include aggressive conduct that causes or threatens physical harm to other people or animals, nonaggressive conduct that causes property loss or damage, deceitfulness or theft, and serious violations of rules. The onset is before age 18. (From DSM-IV, 1994)",
    "arabic_definition": "اضطراب السلوك هو اضطراب عقلي يتم تشخيصه في مرحلة الطفولة أو المراهقة ويظهر من خلال نمط متكرر ومستمر من السلوكيات التي ينتهك فيها الحقوق الأساسية للآخرين أو الأعراف الرئيسية المناسبة للعمر، وغالبا ما يشار إلى هذه السلوكيات باسم «السلوكيات المعادية للمجتمع.» وغالبا ما يتم اعتباره مقدمة لاضطراب الشخصية المعادية للمجتمع، وهو تعريف لا يتم تشخيصه حتى يبلغ الفرد سن 18 سنة. يُقدر عدد المصابين باضطراب السلوك حوالي 51.1 مليون شخص على مستوى العالم اعتبارًا من عام 2013. (Conduct Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019955.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "assisted-suicide",
    "term_en": "Assisted Suicide",
    "term_ar": "انتحار بمساعدة الغير",
    "synonyms": [
      "Assisted Suicides",
      "Suicides, Assisted",
      "Death, Assisted",
      "Assisted Death",
      "Assisted Deaths",
      "Deaths, Assisted",
      "Medically Assisted Suicide",
      "Suicide, Medically Assisted"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Provision (by a physician or other health professional, or by a family member or friend) of support and/or means that gives a patient the power to terminate his or her own life. (from APA, Thesaurus of Psychological Index Terms, 8th ed).",
    "arabic_definition": "الانتحار بمساعدة الغير هو مساعدة شخص آخر على الانتحار. يشير المصطلح عادة إلى الانتحار بمساعدة الطبيب، أي يساعد فيه الطبيب أو غيره من مقدمي الرعاية الصحية. (Assisted Suicide)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017236.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "facial-expression",
    "term_en": "Facial Expression",
    "term_ar": "تعابير الوجه",
    "synonyms": [
      "Expression, Facial",
      "Facial Expressions",
      "Face Expression",
      "Expression, Face",
      "Face Expressions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Observable changes of expression in the face in response to emotional stimuli.",
    "arabic_definition": "تعابير الوجه هي حركة أو أكثر لعضلات أو جلد الوجه. هذه الحركات تقوم بالتعبير عن حالة المشاعر للفرد من قبل مراقب. (Facial Expression)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005149.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "capgras-syndrome",
    "term_en": "Capgras Syndrome",
    "term_ar": "وهم كابجراس",
    "synonyms": [
      "Syndrome, Capgras",
      "Capgras delusion"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A psychotic disorder characterized by the patient's belief that acquaintances or closely related persons have been replaced by doubles or imposters.",
    "arabic_definition": "وهم كابجراس أو وهم كابغرا (الإنجليزية: Capgras delusion) أو متلازمة كابجراس هو اضطراب يصاب به الشخص بحيث يتوهم أن صديقه أو زوجته أو والديه أو أي شخص قريب من العائلة (أو حيوانه الأليف) استبدلهم شخص محتال يشبههم بمظهرهم. يصنف مرض وهم كابجراس من متلازمة عدم التعرف الوهمية وهي نوع من المعتقدات الوهمية والتي تتضمن عدم التعرف على الأشخاص أو الأماكن أو الأجسام (عادة غير مقترنة). (Capgras Syndrome)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002194.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "conversion-disorder",
    "term_en": "Conversion Disorder",
    "term_ar": "اضطراب التحويل",
    "synonyms": [
      "Conversion Disorders",
      "Functional Movement Disorder",
      "Disorder, Functional Movement",
      "Functional Movement Disorders",
      "Movement Disorder, Functional",
      "Movement Disorders, Functional",
      "Functional Neurological Disorder",
      "Disorder, Functional Neurological"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder whose predominant feature is a loss or alteration in physical functioning that suggests a physical disorder but that is actually a direct expression of a psychological conflict or need.",
    "arabic_definition": "اضطرابُ التّحويل (الإنجليزية: Conversion disorder) وتُكتبُ اختصارًا (CD). هو مرض من فئة الأمراض التّشخيصيّة، وقد تمّ إدراجُهُ تحت تنصيفاتِ الاضطراباتِ العقليّة.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003291.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysthymic-disorder",
    "term_en": "Dysthymic Disorder",
    "term_ar": "اكتئاب جزئي",
    "synonyms": [
      "Disorder, Dysthymic",
      "Dysthymic Disorders",
      "Persistent Depressive Disorder, Dysthymia",
      "Dysthymia",
      "Dysthymia and Chronic Depression",
      "Neurotic Depression, Persistent Depressive Disorder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chronically depressed mood that occurs for most of the day more days than not for at least 2 years. The required minimum duration in children to make this diagnosis is 1 year. During periods of depressed mood, at least 2 of the following additional symptoms are present: poor appetite or overeating, insomnia or hypersomnia, low energy or fatigue, low self-esteem, poor concentration or difficulty making decisions, and feelings of hopelessness. (DSM-IV)",
    "arabic_definition": "الاكتئاب الجزئي (الإنجليزية: Dysthymia) المعروف باسم اضطراب الاكتئاب الجزئي المزمن (PDD) و الديسثيميا في الدليل التشخيصي والإحصائي، واضطراب الاكتئاب المزمن في المراجعة الحادية عشرة، هو اضطراب نفسي تتميز بأعراض مشابهة لأعراض اضطراب الاكتئاب الشديد، ولكنها تستمر لمدة عامين على الأقل لدى البالغين وسنة واحدة لدى الأطفال. قدم روبرت سبيتزر هذا المصطلح في أواخر سبعينيات القرن الماضي كبديل لمفهوم الشخصية الاكتئابية. (Dysthymic Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019263.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "globus-sensation",
    "term_en": "Globus Sensation",
    "term_ar": "لقمة هستيرية",
    "synonyms": [
      "Globus Sensations",
      "Sensation, Globus",
      "Globus Hystericus",
      "Globus Pharyngeus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A feeling of a lump in the throat that occurs between meals in the absence of other gastrointestinal and motility disorders (e.g., DYSPHAGIA; GASTROESOPHAGEAL REFLUX).",
    "arabic_definition": "اللُّقْمةُ الهستيريَّة (الإحساس بوجود كتلة في الحلق)، هي الإحساس المستمر أو المتقطع بوجود بلغم أو حبة أو أي عائق في الحلق رغم عدم وجود شيء حقيقةً. عادةً ما تكون الحالة طويلة الأمد ويصعب علاجها، وتشكل نحو 4% من الإحالات الجديدة إلى عيادات الأنف والأذن والحنجرة، يمكن البلع بشكل طبيعي فهي ليست حالة حقيقية من عسر البلع، ولكن يمكن أن تصبح مزعجة جدًا. (Globus Sensation)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000079564.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "child-development",
    "term_en": "Child Development",
    "term_ar": "تطور الطفل",
    "synonyms": [
      "Development, Child",
      "Infant Development",
      "Development, Infant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The continuous sequential physiological and psychological maturing of an individual from birth up to but not including ADOLESCENCE.",
    "arabic_definition": "تطور الطفل هو علم يشير إلى التغيرات البيولوجية والنفسية والعاطفية التي تحدث في بني البشر منذ الولادة وحتى نهاية مرحلة المراهقة، كما تقدم الفرد من التبعية إلى زيادة الاستقلال الذاتي. ولأن هذه التغرات التنموية قد تتأثر بشدة بالعوامل الوراثية وأحداث الحياة خلال فترة ماقبل الولادة، وعادةً ما تشمل علم الوراثة والتنمية قبل الولادة كجزء من دراسة تنشئة الطفل. (Child Development)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002657.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autistic-disorder",
    "term_en": "Autistic Disorder",
    "term_ar": "توحد كلاسيكي",
    "synonyms": [
      "Disorder, Autistic",
      "Disorders, Autistic",
      "Autism",
      "Autism, Early Infantile",
      "Early Infantile Autism",
      "Infantile Autism, Early",
      "Autism, Infantile",
      "Infantile Autism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder beginning in childhood. It is marked by the presence of markedly abnormal or impaired development in social interaction and communication and a markedly restricted repertoire of activity and interest. Manifestations of the disorder vary greatly depending on the developmental level and chronological age of the individual. (DSM-V)",
    "arabic_definition": "اعتُبرت متلازمة كانر، التي تُعرف رسميًا باسم توحد الطفولة، من الاضطرابات العصبية التنموية سابقًا قبل تحديث الطبعة الخامسة من الدليل التشخيصي والإحصائي للاضطرابات النفسية «دي إس إم - 5» / النسخة 11 من التصنيف الدولي للأمراض «آي سي دي - 11». استُبدل اضطراب طيف التوحد بهذا الاضطراب في وقت لاحق. (Autistic Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001321.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "historical-trauma",
    "term_en": "Historical Trauma",
    "term_ar": "الصدمة التاريخية",
    "synonyms": [
      "Historical Traumas",
      "Trauma, Historical",
      "Intergenerational Trauma",
      "Trauma, Intergenerational",
      "Historic Trauma",
      "Transgenerational Trauma",
      "Transgenerational Traumas",
      "Traumas, Transgenerational"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Clinical distress among descendants of survivors of mass trauma, as if they had suffered through the same extreme historic circumstances. Symptoms may persist through generations.",
    "arabic_definition": "تُشير الصدمة التاريخية (HT) ، كما يستخدمها الأخصائيون الاجتماعيون والمؤرخون وعلماء النفس ، إلى الأذى العاطفي التراكمي لفردٍ أو جيلٍ بسبب تجربةٍ أو حدثٍ صادمٍ. إن الاستجابة (ردة الفعل) للصدمة التاريخية (HTR) تشير إلى مظاهر (تجليات) العواطف والأفعال التي تنجم عن هذه الصدمة الحسية (الإدراكية). (Historical Trauma)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000080037.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cyclothymic-disorder",
    "term_en": "Cyclothymic Disorder",
    "term_ar": "دوروية المزاج",
    "synonyms": [
      "Cyclothymic Disorders",
      "Disorder, Cyclothymic",
      "Cyclothymia",
      "Cyclothymic Personality",
      "Cyclothymic Personalities",
      "Personality, Cyclothymic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An affective disorder characterized by periods of depression and hypomania. These may be separated by periods of normal mood.",
    "arabic_definition": "دَورَويّة المزاج أو تَغَيُّرُ المِزاج أو المزاج الدَّوريّ أو المَزاجٌ المُتَقَلِّب أو ذهان انفعالي دوري (الإنجليزية: Cyclothymia) هو نوع مزمن من أنواع اضطراب المزاج تناوب فيه فترات تظهر فيها أعراض اكتئابية وفترات تظهر فيها أعراض الهوس الخفيف ومع ذلك، فإن هذه الأعراض غير كافية لتكوين مشهد اكتئابي كبير أو مشهد هوسي. يجب أن تستمر الأعراض لأكثر من عام عند الأطفال وعامين عند الراشدين. (Cyclothymic Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003527.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erectile-dysfunction",
    "term_en": "Erectile Dysfunction",
    "term_ar": "عنانة",
    "synonyms": [
      "Dysfunction, Erectile",
      "Impotence",
      "Male Impotence",
      "Impotence, Male",
      "Male Sexual Impotence",
      "Impotence, Male Sexual",
      "Sexual Impotence, Male"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inability in the male to have a PENILE ERECTION due to psychological or organ dysfunction.",
    "arabic_definition": "العَنَانَة أو العُنَّة أو العجز الجنسي أو الضعف الجنسي أو ضعف الانتصاب (الاسم العلمي: Impotentia) لدى الرجل هو عدم قدرة القضيب على الانتصاب لفترات طويلة، أو عدم الإحساس بالرغبة الجنسية، وهو يختلف عن العجز الجنسي فالعجز الجنسي هو مرحلة متطورة من الضعف الجنسي والمقصود به هو عدم القدرة نهائياً على انتصاب العضو الذكري للرجل (القضيب)، وعدم الإحساس بالرغبة الجنسية تجاه الزوجة نهائياً، أو عدم احتمال ممارسة الجنس. إن ضعف الانتصاب هو من أهم المشاكل الجنسية التي يواجهها الرجل هي مشكلة ضعف انتصاب القضيب التي إن أردنا أن نعرف علاجها فلابد من الإلمام بأسبابها. (Erectile Dysfunction)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007172.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "premature-ejaculation",
    "term_en": "Premature Ejaculation",
    "term_ar": "قذف مبكر",
    "synonyms": [
      "Ejaculation, Premature",
      "Ejaculations, Premature",
      "Premature Ejaculations",
      "Ejaculatio Praecox",
      "Ejaculatio Praecoxs",
      "Praecox, Ejaculatio",
      "Praecoxs, Ejaculatio"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The emission of SEMEN and seminal fluid during the act of preparation for sexual intercourse, i.e. before there is penetration, or shortly after penetration.",
    "arabic_definition": "القذف المبكر أو الدفق المُبَتْسَر أو سرعة القذف ( خطأ: {{اللغة}}: لا نص (مساعدة)) هو مشكلة جنسية شائعة لدى الرجال إذ يصيب 30% إلى 40% من الرجال، وهو يعني انعدام الرقابة الطوعية على عملية القذف. معظم الرجال الذين يعانون من مشكلة القذف المبكر في الأساس طبيعيين جدًّا، والمشكلة لديهم هي عدم التحكم في وقت القذف. (Premature Ejaculation)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D061686.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "disorganized-schizophrenia",
    "term_en": "Disorganized Schizophrenia",
    "term_ar": "فصام فندي",
    "synonyms": [
      "Disorganized Schizophrenias",
      "Schizophrenias, Disorganized",
      "Hebephrenic Schizophrenia",
      "Hebephrenic Schizophrenias",
      "Schizophrenias, Hebephrenic",
      "Schizophrenia, Hebephrenic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of schizophrenia characterized by frequent incoherence; marked loosening of associations, or grossly disorganized behavior and flat or grossly inappropriate affect that does not meet the criteria for the catatonic type; associated features include extreme social withdrawal, grimacing, mannerisms, mirror gazing, inappropriate giggling, and other odd behavior. (Dorland, 27th ed)",
    "arabic_definition": "الفصام الفندي أو الفصام غير المنظم (الإنجليزية: Disorganized schizophrenia) نوع فرعي من انفصام الشخصية، على الرغم من أنه لم يتم التعرف عليه في أخر إصدار من الدليل التشخيصي والإحصائي للاضطرابات النفسية، بل أعترف به فقط في المراجعة العاشرة للتصنيف الدولي للأمراض والمشاكل الصحية ذات الصلة. الفصام غير المنظم، يعتقد أنه تعبير متطرف من متلازمة غير منظمة، وقد افترض بأنه واحد من ثلاثة عوامل لأعراض مرض الفصام، وهناك عوامل أخرى حيث فيها تشويه للحقيقة (التي تشمل الفصام غير منظم والأوهام والهلوسة)، والفقر النفسي الحركي (عدم الكلام، وعدم وجود حركة عفوية..).",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012562.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dissociative-disorders",
    "term_en": "Dissociative Disorders",
    "term_ar": "اضطراب انشقاقي",
    "synonyms": [
      "Disorder, Dissociative",
      "Disorders, Dissociative",
      "Dissociative Disorder",
      "Dissociative Reaction",
      "Dissociative Reactions",
      "Reaction, Dissociative",
      "Reactions, Dissociative",
      "Hysteria, Dissociative"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Sudden temporary alterations in the normally integrative functions of consciousness.",
    "arabic_definition": "الاضطرابات الانشقاقية أو التفارقية أو الانفصالية (بالإنجليزية: Dissociative disorders، واختصارًا: DD)، هي الحالات التي تنطوي على اختلالات أو انهيارات في الذاكرة أو الوعي أو الهوية أو الإدراك. يستخدم الأشخاص المصابون بالاضطرابات الانشقاقية الانشقاق باعتباره آليةً دفاعيةً، سواء بشكل مرضي أو لاإرادي.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004213.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neurodevelopmental-disorders",
    "term_en": "Neurodevelopmental Disorders",
    "term_ar": "اضطراب النمو العصبي",
    "synonyms": [
      "Disorder, Neurodevelopmental",
      "Neurodevelopmental Disorder",
      "Neurodevelopmental Disorders Usually Diagnosed in Infancy, Childhood or Adolescence",
      "Mental Disorders Usually Diagnosed in Infancy, Childhood or Adolescence",
      "Child Mental Disorders",
      "Child Mental Disorder",
      "Disorder, Child Mental",
      "Mental Disorder, Child"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "These are a group of conditions with onset in the developmental period. The disorders typically manifest early in development, often before the child enters grade school, and are characterized by developmental deficits that produce impairments of personal, social, academic, or occupational functioning. (From DSM-5).",
    "arabic_definition": "اضطرابات النمو العصبي هو ضعف النمو وتطور الدماغ أو الجهاز العصبي المركزي. يشير هذا المصطلح باختصار إلى اضطراب في وظيفة الدماغ التي تؤثر على العاطفة، القدرة على التعلم، وضبط النفس والذاكرة والتي تكشف عن نمو الفرد. (Neurodevelopmental Disorders)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065886.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "obsessive-compulsive-disorder",
    "term_en": "Obsessive-Compulsive Disorder",
    "term_ar": "اضطراب وسواسي قهري",
    "synonyms": [
      "Disorder, Obsessive-Compulsive",
      "Disorders, Obsessive-Compulsive",
      "Obsessive-Compulsive Disorders",
      "Anankastic Personality",
      "Anankastic Personalities",
      "Personalities, Anankastic",
      "Personality, Anankastic",
      "Neurosis, Obsessive-Compulsive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An anxiety disorder characterized by recurrent, persistent obsessions or compulsions. Obsessions are the intrusive ideas, thoughts, or images that are experienced as senseless or repugnant. Compulsions are repetitive and seemingly purposeful behavior which the individual generally recognizes as senseless and from which the individual does not derive pleasure although it may provide a release from tension.",
    "arabic_definition": "الاضطراب الوسواسي القهري أو الوسواس القهري (الإنجليزية: Obsessive–compulsive disorder) هو اضطراب نفسي يشعر فيه المصاب أنّ فكرة معيّنة تلازمه دائماً وتحتلّ جزءاً من الوعي والشعور لديه وذلك بشكلٍ قهري، أي أنّه لا يستطيع التخلّص أو الانفكاك منها، مثل الحاجة إلى تفقّد الأشياء بشكل مستمر، أو ممارسة عادات وطقوس بشكل متكرّر، أو أن تسيطر فكرة ما على الذهن بشكل لا يمكن التفكير بغيرها. كما يُعرّفُ الوسواسُ القهري بأنّه فِكْرٌ متسلّط وسلوك جبري يظهر بتكرار لدى الفرد ويلازمه ويستحوذ عليه ولا يستطيع مقاومته، رغم وعيه بغرابته وعدم فائدته، ويشعر بالقلق والتوتر إذا قاوم ما توسوس به نفسه، ويشعر بإلحاح داخلي للقيام به. (Obsessive-Compulsive Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009771.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "personality-disorders",
    "term_en": "Personality Disorders",
    "term_ar": "اضطراب الشخصية",
    "synonyms": [
      "Personality Disorder",
      "Avoidant Personality Disorder",
      "Avoidant Personality Disorders",
      "Personality Disorder, Avoidant",
      "Personality Disorders, Avoidant",
      "Impulse-Ridden Personality",
      "Personality, Impulse-Ridden",
      "Inadequate Personality"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A major deviation from normal patterns of behavior.",
    "arabic_definition": "اضطرابات الشخصية هي فئة من الاضطرابات النفسية تتميز بأنماط سلوكية وإدراكية ثابتة وصعبة التغيير والتأقلم، وتظهر هذه الأنماط غير السوية خلال السياقات التفاعلية المختلفة، وتجنح بعيدا عن السلوكيات المقبولة ضمن ثقافة المجتمع، وتتكون هذه الأنماط غير السوية أثناء مراحل النمو، وتكون ذات طبيعة غير مرنة وغير متكيفة، ودائما ما يصاحبها قدر من التوتر والضغط النفسي، ويختلف تعريف اضطراب الشخصية باختلاف المصدر. أُدرجت معايير رسمية لتشخيص اضطرابات الشخصية سواء في الدليل التشخيصي والإحصائي للاضطرابات النفسية أو في التصنيف الإحصائي الدولي للأمراض والمشاكل المتعلقة بالصحة المنشور عن منظمة الصحة العالمية، وقدر أدرج الدليل التشخيصي والإحصائي في إصداره الخامس (DSM-V) اضطرابات الشخصية بنفس طريقة إدراج بقية الاضطرابات، وليس في «محور» منفصل كما في الإصدارات السابقة. (Personality Disorders)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010554.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "somatoform-disorders",
    "term_en": "Somatoform Disorders",
    "term_ar": "اضطراب العرض الجسدي",
    "synonyms": [
      "Disorder, Somatoform",
      "Somatoform Disorder",
      "Medically Unexplained Syndrome",
      "Syndrome, Medically Unexplained",
      "Unexplained Syndrome, Medically",
      "Medically Unexplained Syndromes",
      "Pain Disorder",
      "Somatization Disorder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorders having the presence of physical symptoms that suggest a general medical condition but that are not fully explained by another medical condition, by the direct effects of a substance, or by another mental disorder. The MEDICALLY UNEXPLAINED SYMPTOMS must cause clinically significant distress or impairment in social, occupational, or other areas of functioning. In contrast to FACTITIOUS DISORDERS and MALINGERING, the physical symptoms are not under voluntary control. (APA, DSM-V)",
    "arabic_definition": "اضطراب العرض الجسدي (عُرف سابقًا باسم الاضطراب جسدي الشكل) هو اضطراب نفسي يميز من خلال أعراض جسدية والتي توحي بوجود اعتلال أو إصابة في الجسم، وهي أعراض لا يمكن أن تفسر بشكل كامل من خلال الحالة الطبية العامة أو من خلال تأثير مادة ما، كما أنها غير مرتبطة باضطرابات نفسية أخرى مثل اضطراب الهلع. تكون التحاليل الطبية للمصابين بالاضطراب جسدي الشكل تحاليل عادية وذات قيم طبيعية، ولا تفسر حالة الشخص التي يدعيها، كما ان تاريخ الفحوصات السابقة لا تشير إلى وجود حالة طبية يمكن أن تسبب مثل تلك الأعراض. (Somatoform Disorders)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013001.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "major-depressive-disorder",
    "term_en": "Major Depressive Disorder",
    "term_ar": "اضطراب اكتئابي",
    "synonyms": [
      "Depressive Disorders, Major",
      "Disorder, Major Depressive",
      "Disorders, Major Depressive",
      "Major Depressive Disorders",
      "Clinical Depression",
      "Depressions, Clinical",
      "Major Depression Disorder",
      "Depression Disorders, Major"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorder in which five (or more) of the following symptoms have been present during the same 2-week period and represent a change from previous functioning; at least one of the symptoms is either (1) depressed mood or (2) loss of interest or pleasure. Symptoms include: depressed mood most of the day, nearly every day; markedly diminished interest or pleasure in activities most of the day, nearly every day; significant weight loss when not dieting or weight gain; Insomnia or hypersomnia nearly every day; psychomotor agitation or retardation nearly every day; fatigue or loss of energy nearly every day; feelings of worthlessness or excessive or inappropriate guilt; diminished ability to think or concentrate, or indecisiveness, nearly every day; or recurrent thoughts of death, recurrent suicidal ideation without a specific plan, or a suicide attempt. (DSM-5)",
    "arabic_definition": "اضطراب الاكتئاب الشديد (اختصارًا MDD)(1) هو اضطراب نفسي يتَّصف بِأسبوعين على الأقل من الحالة المزاجية المكتئبة المستمرة معظم الوقت. غالبًا ما يكون مصحوبًا بتدني تقدير الذات، وفقدان الاهتمام بالأنشطة الممتعة عادة، انخفاض الطاقة، والمشاكل الجسدية بدون سبب واضح. (Major Depressive Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003865.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dissociative-identity-disorder",
    "term_en": "Dissociative Identity Disorder",
    "term_ar": "اضطراب الهوية التفارقي",
    "synonyms": [
      "Disorder, Dissociative Identity",
      "Identity Disorder, Dissociative",
      "Multiple Personalities",
      "Multiple Personality",
      "Personalities, Multiple",
      "Personality, Multiple",
      "Multiple Personality Disorder",
      "Disorder, Multiple Personality"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dissociative disorder in which the individual adopts two or more distinct personalities. Each personality is a fully integrated and complex unit with memories, behavior patterns and social friendships. Transition from one personality to another is sudden.",
    "arabic_definition": "اضطراب الهوية التفارقي (الإنجليزية: Dissociative identity disorder)، المعروف سابقاً باسم اضطراب تعدد الشخصيات (الإنجليزية: multiple personality disorder)، هو اضطراب عقلي يوصف بوجود شخصيتين -على الاقل- متميزتين ودائمتين نسبياً، وغالبا ما يصاحب ذلك حالة من صعوبات في تذكر الأحداث بشكل لا يمكن تفسيره من خلال عملية النسيان العادية، وهذه الحالات تظهر بشكل متناوب في سلوك الشخص، وتختلف من شخص لآخر. غالبا ما يصاحب اضطراب الهوية التفارقي اضطراب الشخصية الحدي، اضطراب الكرب التالي للصدمة النفسية، الاكتئاب، اضطراب تعاطي المخدرات، إيذاء النفس والتوتر.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009105.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "seasonal-affective-disorder",
    "term_en": "Seasonal Affective Disorder",
    "term_ar": "اضطراب عاطفي فصلي",
    "synonyms": [
      "Affective Disorder, Seasonal",
      "Disorder, Seasonal Affective",
      "Seasonal Affective Disorders",
      "Seasonal Mood Disorder",
      "Disorder, Seasonal Mood",
      "Mood Disorder, Seasonal",
      "Seasonal Mood Disorders",
      "Winter Depression"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterized by depressions that recur annually at the same time each year, usually during the winter months. Other symptoms include anxiety, irritability, decreased energy, increased appetite (carbohydrate cravings), increased duration of sleep, and weight gain. SAD (seasonal affective disorder) can be treated by daily exposure to bright artificial lights (PHOTOTHERAPY), during the season of recurrence.",
    "arabic_definition": "الاضطرابات العاطفية الفصلية أو الموسمية (SAD) نوع من الكآبة الذي يلي تتابع الفصول الأربعة. ومن أكثر أنواعه شيوعاً كآبة الشتاء. (Seasonal Affective Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016574.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "borderline-personality-disorder",
    "term_en": "Borderline Personality Disorder",
    "term_ar": "اضطراب الشخصية الحدي",
    "synonyms": [
      "Disorder, Borderline Personality",
      "Borderline Personality Disorders",
      "Disorders, Borderline Personality",
      "Personality Disorders, Borderline",
      "Personality Disorder, Borderline"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A personality disorder marked by a pattern of instability of interpersonal relationships, self-image, and affects, and marked impulsivity beginning by early adulthood and present in a variety of contexts. (DSM-IV)",
    "arabic_definition": "اضطراب الشخصيّة الحدّي (BPD) -المعروف أيضًا باضطراب الشخصية غير المستقرة عاطفياً (EUPD)- نوع من أنواع اضطراب الشخصيّة من المجموعة B أبرز أعراضه وملامحه وجود اندفاعية مميّزةٍ، وعدم اتّزانٍ في التعبير عن المشاعر، وفي العلاقات مع الأشخاص، وفي صورة الذات، وهو مصنّف ضمن الدليل التشخيصي والإحصائي للاضطرابات النفسية. إنه اضطراب في الشخصية يتميز بنمطٍ طويل الأمد من العلاقات الشخصية الكثيفة وغير المستقرة، والشعور المشوه بالذات، وردود الفعل العاطفية القوية. (Borderline Personality Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001883.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "histrionic-personality-disorder",
    "term_en": "Histrionic Personality Disorder",
    "term_ar": "اضطراب الشخصية التمثيلي",
    "synonyms": [
      "Personality Disorder, Histrionic",
      "Disorder, Histrionic Personality",
      "Disorders, Histrionic Personality",
      "Histrionic Personality Disorders",
      "Personality Disorders, Histrionic",
      "Hysterical Personality",
      "Hysterical Personalities",
      "Personalities, Hysterical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A personality disorder characterized by overly reactive and intensely expressed or overly dramatic behavior, proneness to exaggeration, emotional excitability, and disturbances in interpersonal relationships.",
    "arabic_definition": "تعرف الجمعية الأمريكية للأطباء النفسيين اضطراب الشخصية التمثيلي على أنه اضطراب شخصية يتميز بنمط من السلوكيات المبالغ فيها الساعية إلى الاهتمام، والتي تبدأ عادةً في مرحلة الطفولة المبكرة، وتشمل الإغواء غير اللائق والرغبة المفرطة في القبول. يذكر أن الأشخاص المشخصين بالاضطراب مفعمون بالنشاط، والدراما، والحيوية والحماسة ومنفتحون ومغازلون. (Histrionic Personality Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006677.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "narcissistic-personality-disorder",
    "term_en": "Narcissistic Personality Disorder",
    "term_ar": "اضطراب الشخصية النرجسية",
    "synonyms": [
      "Personality Disorder, Narcissistic",
      "Malignant Narcissism",
      "Malignant Narcissisms",
      "Narcissism, Malignant",
      "Narcissisms, Malignant",
      "Pathological Narcissism",
      "Narcissism, Pathological",
      "Narcissisms, Pathological"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pattern of grandiosity, need for admiration, and lack of empathy. (ncbi.nlm.nih.gov/books/NBK556001/)",
    "arabic_definition": "اضطراب الشخصية النرجسية (الإنجليزية: Narcissistic personality disorder)، وهو اضطراب مزمن وشامل في الشخصية ولهُ صفاته وملامحه السلوكية، ويصنف كواحد ضمن عشرة اضطرابات للشخصية في الدليل التشخيصي والإحصائي للاضطرابات النفسية DSM IV TR 2000. في هذا الاضطراب يتضخم فيه شعور الشخص بأهميته وتتولد لديهِ حاجة ماسة لأن يكون موضع الإعجاب عند الجميع، وتتدنى لديهِ مشاعر التعاطف مع الآخرين، ويستعمل المصطلح أيضاً بمعنى حب الذات الطبيعي والاعتيادي المقبول والمطلوب، في قضايا تربوية وحقوقية وقانونية، مثل التعبير عن الذات وحقوقها وحقوق الطفل والمرأة والأقليات والشعوب، وقد يؤدي الظلم والاضطهاد إلى جروح نرجسية عميقة وردود فعل متنوعة عدوانية.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000097165.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antisocial-personality-disorder",
    "term_en": "Antisocial Personality Disorder",
    "term_ar": "اضطراب الشخصية المعادية للمجتمع",
    "synonyms": [
      "Antisocial Personality Disorders",
      "Disorder, Antisocial Personality",
      "Disorders, Antisocial Personality",
      "Personality Disorders, Antisocial",
      "Psychopathic Personality",
      "Personalities, Psychopathic",
      "Personality, Psychopathic",
      "Psychopathic Personalities"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A personality disorder whose essential feature is a pervasive pattern of disregard for, and violation of, the rights of others that begins in childhood or early adolescence and continues into adulthood. The individual must be at least age 18 and must have a history of some symptoms of CONDUCT DISORDER before age 15. (From DSM-IV, 1994).",
    "arabic_definition": "اضطراب الشخصية المعادية للمجتمع أو اضطراب الشخصية المضادة للمجتمع هو المسمى لهذا الاضطراب كما هو مذكور في الدليل التشخيصي والإحصائي للاضطرابات العقلية. واضطراب الشخصية المستهينة بالمجتمع هو مسمى مشابه أو مماثل للمفهوم المذكور في التصنيف الإحصائي الدولي للأمراض والمشاكل المتعلقة بالصحة، حيث ينص على أن يتضمن التشخيص على اضطراب الشخصية المعادية للمجتمع. (Antisocial Personality Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000987.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "schizoid-personality-disorder",
    "term_en": "Schizoid Personality Disorder",
    "term_ar": "اضطراب الشخصية شبه الفصامي",
    "synonyms": [
      "Schizoid Personality",
      "Personalities, Schizoid",
      "Personality, Schizoid",
      "Schizoid Personalities",
      "Personality Disorder, Schizoid",
      "Disorder, Schizoid Personality",
      "Disorders, Schizoid Personality",
      "Personality Disorders, Schizoid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A personality disorder manifested by a profound defect in the ability to form social relationships, no desire for social involvement, and an indifference to praise or criticism.",
    "arabic_definition": "اضطراب الشخصية شبه الفصامي (الإنجليزية: Schizoid personality disorder) أو اضطراب الشخصية الفصامانية ويُعرف اختصارا بـالشخصية شبه الفصامية هو أحد اضطرابات الشخصية والذي يتميز بإنعدام الاهتمام بالعلاقات الاجتماعية، والتوجه نحو نمط حياة يتسم بالانفرادية، والسرية، والبرود العاطفي واللامبالاة. وقد يكون الأفراد المصابون بهذا الاضطراب غير قادرين على تكوين علاقات حميمة مع الآخرين، كما يظهر عليهم أنهم يعيشون في ذواتهم وفي عالمهم الخيالي الداخلي بشكل حصري.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012557.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dependent-personality-disorder",
    "term_en": "Dependent Personality Disorder",
    "term_ar": "اضطراب الشخصية الاعتمادي",
    "synonyms": [
      "Passive-Dependent Personality",
      "Personality, Passive-Dependent",
      "Personality Disorder, Dependent",
      "Dependent Personality Disorders",
      "Disorder, Dependent Personality"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A personality disorder characterized by a pervasive and excessive need to be taken care of that leads to submissive and clinging behavior and fears of separation, beginning by early adulthood and present in a variety of contexts. (From DSM-IV, 1994)",
    "arabic_definition": "اضطراب الشخصية الاعتمادي (الإنجليزية: Dependent personality disorder) ويُعرف اختصارا الشخصية الاعتمادية والذي كان يُسمى اضطراب الشخصية الواهنة (الإنجليزية: asthenic personality disorder) هو اضطراب شخصية يتميز بالاعتماد النفسي الزائد علي الأخرين، وهذا الاضطراب هو حالة طويلة المدى يعتمد فيها الشخص المصاب علي غيره لإشباع احتياجاته النفسية والجسدية، مع تحقيق درجة ضئيلة جدا من الاستقلالية. سبب اضطراب الشخصية الاعتمادية غير معروف، وأوضحت بعض الدراسات التي تمت عام 2012 أنه ما بين 55 % و 72% من الأشخاص المعرضين للإصابة بهذا الاضطراب نتيجة عامل وراثي من أحد الأبوين.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003859.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "schizotypal-personality-disorder",
    "term_en": "Schizotypal Personality Disorder",
    "term_ar": "اضطراب الشخصية الفصامية",
    "synonyms": [
      "Personality Disorder, Schizotypal",
      "Disorder, Schizotypal Personality",
      "Disorders, Schizotypal Personality",
      "Personality Disorders, Schizotypal",
      "Schizotypal Personality Disorders",
      "Incipient Schizophrenia",
      "Incipient Schizophrenias",
      "Schizophrenia, Incipient"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A personality disorder in which there are oddities of thought (magical thinking, paranoid ideation, suspiciousness), perception (illusions, depersonalization), speech (digressive, vague, overelaborate), and behavior (inappropriate affect in social interactions, frequently social isolation) that are not severe enough to characterize schizophrenia.",
    "arabic_definition": "اضطراب الشخصية الفُصَامِيَّة (الإنجليزية: Schizotypal personality disorder) هو اضطراب في الشخصية يتميز بشدة القلق الاجتماعي، واضطراب الفكر، وأفكار جنون العظمة، وتبدد الواقع، والذهان العابر، بجانب معتقدات غريبة في كثير من الأحيان. يشعر الأشخاص الذين يعانون من هذا الاضطراب بالانزعاج الشديد من بقاء العلاقات الوثيقة مع الآخرين، وذلك لأنهم بشكل أساسي يعتقدون أن الآخرين يحملون أفكار سلبية تجاههم، ولذلك يتجنب المصابون باضطراب الشخصية الفصامية تشكيل علاقات مع الآخرين.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012569.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "premenstrual-dysphoric-disorder",
    "term_en": "Premenstrual Dysphoric Disorder",
    "term_ar": "اضطراب سوء المزاج ما قبل الطمث",
    "synonyms": [
      "Disorder, Premenstrual Dysphoric",
      "Dysphoric Disorder, Premenstrual",
      "Premenstrual Dysphoric Syndrome",
      "Syndrome, Premenstrual Dysphoric"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition in which a woman suffers from severe depression, irritability, and tension before MENSTRUATION. Premenstrual dysphoric disorder (PMDD) may involve a wide range of physical or emotional symptoms, which are more severe and debilitating than those seen with premenstrual syndrome (PMS), and which include at least one mood-related symptom. Symptoms usually stop when, or shortly after, menstruation begins.",
    "arabic_definition": "اضطراب سوء المزاج ما قبل الطمث هو شكل حاد ومعيق للمتلازمة السابقة للحيض يصيب 1.8-5.8% من النساء في فترة الحيض. يشمل الاضطراب مجموعة متنوعة من الأعراض الوجدانية والسلوكية والجسدية التي تتكرر شهريًا خلال الطور الأصفري من الدورة الشهرية. (Premenstrual Dysphoric Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065446.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "generalized-anxiety-disorder",
    "term_en": "Generalized Anxiety Disorder",
    "term_ar": "اضطراب القلق العام",
    "synonyms": [
      "Anxiety Disorder, Generalized",
      "Anxiety Disorders, Generalized",
      "Disorder, Generalized Anxiety",
      "Disorders, Generalized Anxiety",
      "Generalized Anxiety Disorders",
      "Generalized Anxiety",
      "Anxieties, Generalized",
      "Anxiety, Generalized"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Uncontrolled anxiety or excessive worry that exceeds the realistic scope of life situations and endures for at least a month or longer.",
    "arabic_definition": "اضطراب القلق العام أو اضطراب القلق المعمم (الإنجليزية: Generalized Anxiety Disorder) اختصارا (GAD) هو اضطراب قلق يتميز بأنه مفرط، ولا يمكن السيطرة عليه وغالباً يكون غير عقلاني، ويكون بسبب توقعات يومية حول الأحداث والأنشطة. غالباً ما يتدخل هذا القلق المفرط مع الأداء اليومي، حيث أن الأفراد الذين لديهم هذا المرض عادة ما يتوقعون كارثة، وهم قلقون أكثر من اللازم بشأن المسائل اليومية مثل القضايا الصحية، والمال، والموت، والمشاكل الأسرية، ومشاكل الصداقة، ومشاكل العلاقات بين أصدقائهم، وصعوبات العمل.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000098647.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paranoid-personality-disorder",
    "term_en": "Paranoid Personality Disorder",
    "term_ar": "اضطراب الشخصية الزوراني",
    "synonyms": [
      "Paranoid Personality",
      "Paranoid Personalities",
      "Personalities, Paranoid",
      "Personality, Paranoid",
      "Personality Disorder, Paranoid",
      "Disorder, Paranoid Personality",
      "Disorders, Paranoid Personality",
      "Paranoid Personality Disorders"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A personality disorder characterized by the avoidance of accepting deserved blame and an unwarranted view of others as malevolent. The latter is expressed as suspiciousness, hypersensitivity, and mistrust.",
    "arabic_definition": "اضطراب الشخصية الزوراني (الإنجليزية: Paranoid personality disorder) ويعرف أيضا باسم اضطراب الشخصية البارانوي أو الشخصية المرتابة هو اضطراب عقلي يتسم بالزورانية والشك المستمر القوي وكذلك الارتياب العام تجاه الآخرين. كما أن الأشخاص الذين يعانون من هذا الاضطراب قد يكونون شديدي الحساسية، ويشعرون بالإهانة بسهولة، ويرتبطون بشكل معتاد بالعالم من خلال المسح البيئي اليقظ بحثًا عن أدلة أو اقتراحات قد تثبت مخاوفهم أو تحيزاتهم.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010260.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "reactive-attachment-disorder",
    "term_en": "Reactive Attachment Disorder",
    "term_ar": "اضطراب التعلق التفاعلي",
    "synonyms": [
      "Attachment Disorder, Reactive",
      "Attachment Disorders, Reactive",
      "Disorder, Reactive Attachment",
      "Disorders, Reactive Attachment",
      "Reactive Attachment Disorders"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Markedly disturbed and developmentally inappropriate social relatedness that begins before age 5 and is associated with grossly pathological child care. The child may persistently fail to initiate and respond to social interactions in a developmentally appropriate way (inhibited type) or there may be a pattern of diffuse attachments with nondiscriminate sociability (disinhibited type). (From DSM-V)",
    "arabic_definition": "اضطراب التعلق التفاعلي (RAD) هو اضطراب نفسي شديد التنموية ناجم عن الأعراض المتراكمة في تاريخ الإنسان. قد تكون أسبابها سوء المعاملة والتعرض الجسدي للطفل أوالاهمال أو التعرض لحالة متلازمة التخلي عن الطفل. (Reactive Attachment Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019962.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "passive-aggressive-personality-disorder",
    "term_en": "Passive-Aggressive Personality Disorder",
    "term_ar": "سلوك سلبي عدواني",
    "synonyms": [
      "Passive-Aggressive Personality",
      "Passive-Aggressive Personalities",
      "Personalities, Passive-Aggressive",
      "Personality, Passive-Aggressive",
      "Passive Aggressive Personality Disorders",
      "Personality Disorders, Passive Aggressive",
      "Personality Disorder, Passive-Aggressive",
      "Disorder, Passive-Aggressive Personality"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A personality disorder characterized by an indirect resistance to demands for adequate social and occupational performance; anger and opposition to authority and the expectations of others that is expressed covertly by obstructionism, procrastination, stubbornness, dawdling, forgetfulness, and intentional inefficiency. (Dorland, 27th ed)",
    "arabic_definition": "السلوك السلبي العدواني هو سلوك مؤذي يقوم به الفرد كتعبير عن شعور عدواني لكن بأساليب غير مباشرة. من علامات هذا السلوك التسويف، إلقاء نكت عدائية، العناد، الاستياء، العبوس، اللامبالاة، أو الفشل المتعمد والمتكرر في إنجاز المهام الموكلة للفرد. (Passive-Aggressive Personality Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010324.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oppositional-defiant-disorder",
    "term_en": "Oppositional Defiant Disorder",
    "term_ar": "اضطراب المعارض المتحدي",
    "synonyms": [
      "Defiant Disorder, Oppositional"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A repetitive and persistent pattern of behavior that develops in childhood and is characterized as recurrent disobedient, overall negative or agitated mood, a quarrelsome attitude or being vengeful toward authority figures. Unlike in conduct disorder defiant behaviors in oppositional defiant disorders typically do not involve aggression, destruction, theft, or deceit. Oppositional defiant disorder, CONDUCT DISORDER and ATTENTION DEFICIT AND HYPERACTIVITY DISORDER sometimes co-occur.",
    "arabic_definition": "اضطراب المعارض المتحدي هو اضطراب يعرف بأنه نمط من السلوك المزاجي المتسم بالحدة والجدلية والتحدي ونزعة الانتقام لفترة تستمر على الأقل ستة أشهر، تكون واضحة بأربعة أعراض على الأقل من الفئات المزاجية والتي يمكن لأشخاص من غير الأخوة ملاحظتها عند التعامل مع الشخص. يختلف الأطفال الذين يعانون من اضطراب التحدي الاعتراضي عن أولئلك المصابين باضطراب السلوك بأن الأوليين ليسوا عنيفين تجاه الأشخاص أو الحيوانات ولا يخربون الممتلكات أو يميلون إلى السرقة أو الخداع. (Oppositional Defiant Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000096865.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stereotypic-movement-disorder",
    "term_en": "Stereotypic Movement Disorder",
    "term_ar": "اضطراب الحركة التكراري",
    "synonyms": [
      "Stereotypic Movement Disorders",
      "Movement Disorder, Stereotypic",
      "Body Rocking",
      "Head Banging"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Motor behavior that is repetitive, often seemingly driven, and nonfunctional. This behavior markedly interferes with normal activities or results in severe bodily self-injury. The behavior is not due to the direct physiological effects of a substance or a general medical condition. (DSM-IV, 1994)",
    "arabic_definition": "اضطراب الحركة التكراري أو اضطراب الحركة النمطي (أو اضطراب الحركات المتكررة أو القالبية) ) هو نوع من أنواع الاضطرابات الحركية يبدأ من مرحلة الطفولة وينطوي على سلوك حركي متكرر وغير وظيفي (على سبيل المثال، التلويح باليد أو قرع الرأس) يتعارض بشكل ملحوظ مع الأنشطة العادية أو يؤدي إلى حدوث إصابة بدنية. يجب التفريق بين هذا السلوك وبين السلوك المصاحب لتناول العقاقير كأثر جانبي لهذا العقار، أو أي حالة طبية أخرى؛ ولا يزال سبب هذا الاضطراب غير معروفاً. (Stereotypic Movement Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019956.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "munchausen-syndrome-by-proxy",
    "term_en": "Munchausen Syndrome by Proxy",
    "term_ar": "متلازمة مونخهاوزن بالوكالة",
    "synonyms": [
      "Factitious disorder imposed on another"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A phenomenon in which symptoms of a disease are fabricated by an individual other than the patient causing unnecessary, and often painful, physical examinations and treatments. This syndrome is considered a form of CHILD ABUSE, since another individual, usually a parent, is the source of the fabrication of symptoms and presents the child for medical care.",
    "arabic_definition": "متلازمة مونخهاوزن بالوكالة (الإنجليزية: Munchausen Syndrome by Proxy) ، أو (الإنجليزية: Fabricated or Induced Illness) أو (الإنجليزية: Munchausen Syndrome) هو خلل نفسي خطير ، حيث يتسبب شخص مقرب في الضرر بأذى صحي أو جسدي في شخص ضعيف آخر رهن عنايته لجذب الانتباه أو للحصول على فوائد أخرى. الشخص الذي يقوم بالعناية الزائفة بالضحية هو في الغالب شخص مقرب جداً مثل الأب أو الأم أو الوصي أو الزوج/ الزوجة والضحية عادة هو طفل صغير أو راشد ضعيف ، حيث يقوم المتسبب بالأذى الجسدي والمعنوي لأحداث الظروف الخارجية التي تظهر على المريض لتبدو وكأنها مشاكل صحية أصيلة متكررة وصعبة العلاج.",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016735.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "relative-energy-deficiency-in-sport",
    "term_en": "Relative Energy Deficiency in Sport",
    "term_ar": "ثالوث الأنثى الرياضية",
    "synonyms": [
      "RED-S",
      "RED-Ss",
      "RED-S Relative Energy Deficiency in Sport"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Health disorders associated with low caloric intake of individuals involved in high-activity SPORTS.",
    "arabic_definition": "ثالوث الأنثى الرياضية (الإنجليزية: Female athlete triad) هو متلازمة تجمع بين 3 أعراض مرضية هي: اضطرابات التغذية ، اضطرابات الدورة الشهرية، وانخفاض كثافة المعادن في العظام (هشاشة العظام). وتُلاحظ هذه المتلازمة في الإناث اللاتي يمارسن بعض الرياضات البدنية التي تتطلب الحفاظ على وزن الجسم عند معدلات محددة، ويعد ثالوث الأنثى الرياضية مرضًا خطيرًا قد يترتب عليه العديد من المضاعفات الصحية مدى الحياة، وقد يكون قاتلًا. (Relative Energy Deficiency in Sport)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000080822.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chemotherapy-related-cognitive-impairment",
    "term_en": "Chemotherapy-Related Cognitive Impairment",
    "term_ar": "القصور الإدراكي اللاحق للعلاج الكيميائي",
    "synonyms": [
      "Chemotherapy-Related Cognitive Impairments",
      "Cognitive Impairment, Chemotherapy-Related",
      "Cognitive Impairments, Chemotherapy-Related",
      "Chemotherapy-Related Cognitive Dysfunction",
      "Chemotherapy-Related Cognitive Dysfunctions",
      "Cognitive Dysfunction, Chemotherapy-Related",
      "Chemotherapy-Induced Cognitive Dysfunction",
      "Post-chemotherapy cognitive impairment"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The diminished or impaired mental and/or intellectual function associated with the chemical treatment of cancer.",
    "arabic_definition": "القصور الإدراكي اللاحق للعلاج الكيميائي (PCCI) (المعروف أيضا في الأوساط العلمية ب \"CRCIs أو الاختلالات الإدراكية المرتبطة بالعلاج الكيميائي\" وبلغة مبسطة القصور أو الضعف العقلي الناتج عن العلاج الكيماوي ، مخ الكيمو، ضباب الكيمو)، هو وصف للضعف المعرفي الذي يمكن أن ينتج عن العلاج الكيميائي، حيث يعاني حوالي 20٪ إلى 30٪ من الأشخاص الذين يخضعون للعلاج الكيميائي من مستوى معين من الضعف الإدراكي بعد هذا العلاج. اكتشفت هذه الظاهرة لأول مرة عند إجراء تقييم لعدد كبير من الناجيات من سرطان الثدي اللواتي اشتكين من مشاكل بالذاكرة والطلاقة والقدرات المعرفية الأخرى التي أعاقت قدرتهن على أداء وظائفهن مقارنة بحالهن قبل العلاج الكيميائي. (Chemotherapy-Related Cognitive Impairment)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000084202.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cannabinoid-hyperemesis-syndrome",
    "term_en": "Cannabinoid Hyperemesis Syndrome",
    "term_ar": "متلازمة التقيؤ المفرط التالي للماريجوانا",
    "synonyms": [
      "Cannabinoid Hyperemesis Syndromes",
      "Hyperemesis Syndrome, Cannabinoid",
      "Syndrome, Cannabinoid Hyperemesis",
      "Cannabis Hyperemesis Syndrome",
      "Cannabis Hyperemesis Syndromes",
      "Hyperemesis Syndrome, Cannabis",
      "Syndrome, Cannabis Hyperemesis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recurrent vomiting accompanied by nausea, abdominal pain and sometimes compulsive hot bathing behavior in chronic CANNABIS abuse.",
    "arabic_definition": "تعرف متلازمة التقيؤ المفرط التالي للماريجوانا بأنها شعور متكرر بالغثيان والقيء والألم البطني الماغص الناتج عن تعاطي الماريجوانا. لوحظ تحسن هذه الأعراض بشكل مؤقت بعد أخذ حمام ساخن، أما عن مضاعفات هذه المتلازمة فهي تشمل الفشل الكلوي واضطرابات الشوارد في الدم بالإضافة إلى حروق الجلد الناتجة عن حرارة مياه الاستحمام، كما سُجلت وفيات ناتجة عن هذه المضاعفات. (Cannabinoid Hyperemesis Syndrome)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000096704.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autism-spectrum-disorder",
    "term_en": "Autism Spectrum Disorder",
    "term_ar": "توحد",
    "synonyms": [
      "Autistic Spectrum Disorder",
      "Autistic Spectrum Disorders",
      "Disorder, Autistic Spectrum",
      "Autism Spectrum Disorders",
      "Autism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Wide continuum of associated cognitive and neurobehavioral disorders, including, but not limited to, three core-defining features: impairments in socialization, impairments in verbal and nonverbal communication, and restricted and repetitive patterns of behaviors. (from DSM-V)",
    "arabic_definition": "التوحد أو الذووية أو الذاتوية (الإنجليزية: Autism) هو اضطراب النمو العصبي الذي يتصف بضعف التفاعل الاجتماعي والتواصل اللفظي وغير اللفظي وأنماط سلوكية مقيدة ومتكررة. وتتطلب معايير التشخيص ضرورة أن تصبح الأعراض واضحة قبل بلوغ الطفل ثلاث سنوات من العمر. (Autism Spectrum Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000067877.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prolonged-grief-disorder",
    "term_en": "Prolonged Grief Disorder",
    "term_ar": "اضطراب الحزن المطول",
    "synonyms": [
      "Disorder, Prolonged Grief",
      "Grief Disorder, Prolonged",
      "Prolonged Grief Disorders",
      "Persistent Complex Bereavement Disorder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Severe and disabling grief reactions that do not remit in the 12 months after the death of a significant other. The core of the diagnosis includes persistent yearning or missing the deceased, and preoccupation with the circumstance of the death. (Carmassi, Clinical Handbook of Bereavement and Grief Reactions, 2018)",
    "arabic_definition": "اضطراب الحزن المُطوّل، ويُعرف أيضًا بالحزن المعقّد، الحزن الناتج عن الصدمة، واضطراب الفقد المعقّد والمستمر، هو اضطراب نفسي يتكوّن من مجموعة مميزة من الأعراض التي تظهر بعد وفاة أحد أفراد العائلة أو صديق مقرّب (أي الحِداد). يُعاني الأشخاص المصابون بهذا الاضطراب من انشغال دائم بالحزن ومشاعر الفقد إلى درجة تُسبب ضيقًا نفسيًا كبيرًا وتأثيرًا واضحًا على الأداء الوظيفي، وتظهر هذه الحالة عبر مجموعة من الأعراض، منها الاكتئاب، والألم العاطفي، والخدر العاطفي، والشعور بالوحدة، واضطراب الهوية، وصعوبة إدارة العلاقات الشخصية. (Prolonged Grief Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000090382.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "social-communication-disorder",
    "term_en": "Social Communication Disorder",
    "term_ar": "اضطراب التواصل الاجتماعي (البراغماتي)",
    "synonyms": [
      "Communication Disorder, Social",
      "Communication Disorders, Social",
      "Social Communication Disorders",
      "Pragmatic Communication Disorder",
      "Communication Disorder, Pragmatic",
      "Communication Disorders, Pragmatic",
      "Disorders, Pragmatic Communication",
      "Pragmatic Communication Disorders"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Persistent difficulties in the social uses of verbal and nonverbal communications. (DSM-V)",
    "arabic_definition": "اضطراب التواصل الاجتماعي (البراغماتي)، المعروف أيضًا باسم اضطراب التواصل الدلالي-البراغماتي، أو ضعف اللغة البراغماتية، هو اضطراب نمائي عصبي يتميز بصعوبات في الاستخدام الاجتماعي للتواصل اللفظي وغير اللفظي. الأفراد المصنفون بهذا الاضطراب يواجهون صعوبة في الانخراط بشكل فعال في التفاعلات الاجتماعية، وفهم الإشارات الاجتماعية، وقد يعانون في استخدام الكلمات بشكل مناسب في السياقات الاجتماعية. (Social Communication Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000067404.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphedema",
    "term_en": "Lymphedema",
    "term_ar": "وذمة لمفية",
    "synonyms": [
      "Lymphedemas",
      "Milroy Disease",
      "Congenital Hereditary Lymphedema",
      "Congenital Hereditary Lymphedemas",
      "Hereditary Lymphedema, Congenital",
      "Hereditary Lymphedemas, Congenital",
      "Lymphedema, Congenital Hereditary",
      "Lymphedemas, Congenital Hereditary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Edema due to obstruction of lymph vessels or disorders of the lymph nodes.",
    "arabic_definition": "الوَذَمَة اللِّمفِية أو الاستسقاء الليمفي أو الاستسقاء اللمفاوي (الإنجليزية: Lymphedema) وَيُسمى أيضاً بالانسداد الليمفي (الإنجليزية: lymphatic obstruction)، وَهو تجمُع غير طبيعي لسائل غني بالبروتين في النسيج الخلالي للأطراف بسبب انسداد أو تمزق في الأوعية الليمفاوية؛ مما يؤدي إلى عدم القدرة على تصريف الليمف وتورم الأنسجة الرخوة، وكذلك تحفيز تكاثر الخلايا الليفية اليافعة.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008209.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "attention-deficit-disorder-with-hyperactivity",
    "term_en": "Attention Deficit Disorder with Hyperactivity",
    "term_ar": "اضطراب نقص الانتباه مع فرط النشاط",
    "synonyms": [
      "Attention Deficit Hyperactivity Disorders",
      "Hyperkinetic Syndrome",
      "Syndromes, Hyperkinetic",
      "Attention Deficit-Hyperactivity Disorder",
      "Deficit-Hyperactivity Disorder, Attention",
      "Deficit-Hyperactivity Disorders, Attention",
      "Disorder, Attention Deficit-Hyperactivity",
      "Disorders, Attention Deficit-Hyperactivity"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A behavior disorder originating in childhood in which the essential features are signs of developmentally inappropriate inattention, impulsivity, and hyperactivity. Although most individuals have symptoms of both inattention and hyperactivity-impulsivity, one or the other pattern may be predominant. The disorder is more frequent in males than females. Onset is in childhood. Symptoms often attenuate during late adolescence although a minority experience the full complement of symptoms into mid-adulthood. (From DSM-V)",
    "arabic_definition": "اضْطِرابُ نَقْصِ الانْتِباهِ مَعَ فَرْطِ النَّشَاط أو قصور الانتباه وفرط الحركة (الإنجليزية: Attention deficit hyperactivity disorder) هو اضطراب نفسي من نوع تأخر النمو العصبي وهو يبدأ في مرحلة الطفولة عند الإنسان، وهي تسبب نموذج من تصرفات تجعل الطفل غير قادر على إتباع الأوامر أو على السيطرة على تصرفاته، أو أنه يجد صعوبة بالغة في الانتباه للقوانين وبذلك هو في حالة إلهاء دائم بالأشياء الصغيرة. المصابون بهذه الحالة يواجهون صعوبة في الاندماج في صفوف المدارس والتعلم من مدرسيهم، ولا يتقيدون بقوانين الفصل، مما يؤدي إلى تدهور الأداء المدرسي لدى هؤلاء الأطفال بسبب عدم قدرتهم على التركيز وليس لأنهم غير أذكياء، لذلك يعتقد أغلبية الناس أنهم مشاغبون بطبيعتهم. (Attention Deficit Disorder with Hyperactivity)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001289.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemoglobinopathies",
    "term_en": "Hemoglobinopathies",
    "term_ar": "اعتلال الهيموغلوبين",
    "synonyms": [
      "Hemoglobinopathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of inherited disorders characterized by structural alterations within the hemoglobin molecule.",
    "arabic_definition": "اعتلال الهيموغلوبين (الإنجليزية: Hemoglobinopathy) هو نوع من أنواع الخلل الجيني وهو ناتج عن شذوذ في واحدة من سلاسل الغلوبين في جزيئة الهيموغلوبين. إن اعتلالات الهيموغلوبين عبارة عن اضطرابات موروثة في جين مفرد، وتورث في أغلب الحالات على شكل سيادة مشتركة. (Hemoglobinopathies)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006453.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "agranulocytosis",
    "term_en": "Agranulocytosis",
    "term_ar": "ندرة المحببات",
    "synonyms": [
      "Agranulocytoses",
      "Granulocytopenia",
      "Granulocytopenias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A decrease in the number of GRANULOCYTES; (BASOPHILS; EOSINOPHILS; and NEUTROPHILS).",
    "arabic_definition": "ندرة المحببات هي حالة حادة وخطيرة تنطوي على قلة عدد كريات الدم البيضاء، وخاصة الخلايا المتعادلة، مما يؤدي إلى قلة الخلايا المتعادلة في الدورة الدموية. ويمثل هذا نقصا حادا في فئة من كبرى مجموعات خلايا الدم البيضاء المختصة بمكافحة العدوى. (Agranulocytosis)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000380.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neutropenia",
    "term_en": "Neutropenia",
    "term_ar": "قلة العدلات",
    "synonyms": [
      "Neutropenias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A decrease in the number of NEUTROPHILS found in the blood.",
    "arabic_definition": "قلة العدلات (الإنجليزية: Neutropenia) أو نقص الخلايا المتعادلة، هي تركيز منخفض بشكل غير طبيعي من العدلات (نوع من خلايا الدم البيضاء) في الدم. تشكل العدلات غالبية خلايا الدم البيضاء المتداولة وتعمل كدفاع أساسي ضد العدوى عن طريق تدمير البكتيريا، الشظايا البكتيرية، والفيروسات المرتبطة بالغلوبولين المناعي في الدم.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009503.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eosinophilia",
    "term_en": "Eosinophilia",
    "term_ar": "كثرة اليوزينيات",
    "synonyms": [
      "Eosinophilia, Tropical",
      "Tropical Eosinophilias",
      "Tropical Eosinophilia",
      "Hypereosinophilia",
      "Hypereosinophilias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal increase of EOSINOPHILS in the blood, tissues or organs.",
    "arabic_definition": "فرط الحمضات أو فَرْط اليوزينيَّات(الحمضات) (الإنجليزية: Eosinophilia) هي حالة يتجاوز فيها عدد اليوزين في الدم المحيطي 5.0 × 108 / لتر (500 / ميكرولتر) و اليوزين مادة حامضية فلورية تتفاعل مع المواد القاعدية أو اليوزينية أو مركبات قاعدية مثل البروتينات. عادة ما تمثل اليوزينيات أقل من 7٪ من الكريات البيض، هناك عدة أسباب معروفة لهذه الحالة وأكثرها شيوعًا هي نوع من أنواع الحساسية أو العدوى الطفيلية.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004802.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphocytosis",
    "term_en": "Lymphocytosis",
    "term_ar": "كثرة اللمفاويات",
    "synonyms": [
      "Lymphocytoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excess of normal lymphocytes in the blood or in any effusion.",
    "arabic_definition": "كثرةُ اللِمْفاوِيّات (الإنجليزية: Lymphocytosis) هي زيادة في عدد الخلايا اللمفاوية (إحدى أنواع خلايا الدم البيضاء). الخلايا الليمفاوية هي جزء مهم من نظام المناعة وهي مصنوعة من قبل الجهاز المناعي لمحاربة الأمراض.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008218.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "methemoglobinemia",
    "term_en": "Methemoglobinemia",
    "term_ar": "ميتهيموغلوبينية الدم",
    "synonyms": [
      "Methemoglobinemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of methemoglobin in the blood, resulting in cyanosis. A small amount of methemoglobin is present in the blood normally, but injury or toxic agents convert a larger proportion of hemoglobin into methemoglobin, which does not function reversibly as an oxygen carrier. Methemoglobinemia may be due to a defect in the enzyme NADH methemoglobin reductase (an autosomal recessive trait) or to an abnormality in hemoglobin M (an autosomal dominant trait). (Dorland, 27th ed)",
    "arabic_definition": "الميتهيموغلوبين هو نمط من الهيموغلوبين يحتوي على حديد الفيريك (نمط الحديد ثلاثي التكافؤ Fe+3 ). وتكون أُلفة ارتباط الأكسجين بحديد الفيريك ضعيفة. (Methemoglobinemia)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008708.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thalassemia",
    "term_en": "Thalassemia",
    "term_ar": "ثلاسيميا",
    "synonyms": [
      "Thalassemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of hereditary hemolytic anemias in which there is decreased synthesis of one or more hemoglobin polypeptide chains. There are several genetic types with clinical pictures ranging from barely detectable hematologic abnormality to severe and fatal anemia.",
    "arabic_definition": "الثَلاَسيمِيَّة (بالإنجليزية: Thalassemia) اضطرابات دم موروثة تتميز بإنخفاض إنتاج الهيموجلوبين. تعتمد الأعراض على النوع ويمكن أن تختلف من لا شيء إلى شديدة.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013789.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sarcoidosis",
    "term_en": "Sarcoidosis",
    "term_ar": "ساركويد",
    "synonyms": [
      "Sarcoidoses",
      "Schaumann's Syndrome",
      "Schaumann's Syndromes",
      "Syndrome, Schaumann's",
      "Besnier-Boeck-Schaumann Syndrome",
      "Syndrome, Besnier-Boeck-Schaumann",
      "Boeck Disease",
      "Schaumann Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An idiopathic systemic inflammatory granulomatous disorder comprised of epithelioid and multinucleated giant cells with little necrosis. It usually invades the lungs with fibrosis and may also involve lymph nodes, skin, liver, spleen, eyes, phalangeal bones, and parotid glands.",
    "arabic_definition": "الغرناوية أو داء الساركويد (الإنجليزية: sarcoidosis) مرض مناعي مجهول السبب يظهر على هيئة مجموعات غير طبيعية من الخلايا الالتهابية «granulomas - الحبيبية» والتي يمكن أن تشكل عقيدات في أعضاء عدة. وغالباً ما تحدث هذه التجمعات الحبيبية في الرئتين والعقد اللمفاوية المرتبطة بها، لكن من المحتمل أن يصاب بها أي عضو آخر كذلك.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012507.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "favism",
    "term_en": "Favism",
    "term_ar": "عوز نازعة هيدروجين الغلوكوز-6-فوسفات",
    "synonyms": [
      "Favisms",
      "Glucose-6-phosphate dehydrogenase deficiency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hemolytic anemia due to the ingestion of fava beans or after inhalation of pollen from the Vicia fava plant by persons with glucose-6-phosphate dehydrogenase deficient erythrocytes.",
    "arabic_definition": "تكسر الدم الفولي أو التفول أو أنيميا الفول أو فقر الدمِ الناجم عن عوزِ سداسي فوسفات الجلوكوز النازع للهيدروجين (الإنجليزية: G6PD Deficiency أو Favism) هو نقص الإنزيم الأكثر شيوعا في جميع أنحاء العالم، هو خطأ فطري في التمثيل الغذائي يؤهب لانهيار خلايا الدم الحمراء. في معظم الأحيان، لا يعاني المصابون من أي أعراض.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005236.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "granuloma",
    "term_en": "Granuloma",
    "term_ar": "ورم حبيبي",
    "synonyms": [
      "Granulomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A relatively small nodular inflammatory lesion containing grouped mononuclear phagocytes, caused by infectious and noninfectious agents.",
    "arabic_definition": "ورم حُبَيبي (الإنجليزية: Granuloma) ويسمى أيضاً حبيبوم ويعني العقدة الصغيرة. وهو ورم يتكون من نسيج حبيبي.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006099.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polycythemia",
    "term_en": "Polycythemia",
    "term_ar": "كثرة كريات الدم الحمر",
    "synonyms": [
      "Polycythemias",
      "Erythrocytosis",
      "Erythrocytoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An increase in the total red cell mass of the blood. (Dorland, 27th ed)",
    "arabic_definition": "مرض كثرة كريات الدم الحمر، وله أسماء أخرى في اللغة العربية منها احمرار الدم ، أو كثرة الكريات الحمر، (الإنجليزية: Polycythemia)، وهناك نوع من أنواع كثرة كريات الدم الحمر يسمى كثرة الحمر الحقيقية وهو من الأمراض التي تدخل تحت تصنيف مرض تكاثر نخاع العظم، ويعرف هذا المرض على أنه الازدياد الغير طبيعي في مجموع كتل كريات الدم الحمراء عن المعدل الطبيعي لنفس الجنس والعمر والبيئة. ولا يشترط في كل الحالات ازدياد عدد كريات الدم الحمراء في الجسم.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011086.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thrombocytosis",
    "term_en": "Thrombocytosis",
    "term_ar": "كثرة الصفيحات",
    "synonyms": [
      "Thrombocytoses",
      "Thrombocythemia",
      "Thrombocythemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Increased numbers of platelets in the peripheral blood. (Dorland, 27th ed)",
    "arabic_definition": "كثرة الصفيحات (الإنجليزية: Thrombocytosis أو thrombocythemia) هو وجود عدد عال من الصفيحات الدموية في الدم، والذي قد يكون أوليا (أو أساسيا، وسببه مرض تكاثر نقوي) أو ثانوي (ويسمى تفاعليا أيضا). عادة ما يكون بدون أعراض خاصة عندما يكون ثانويا، وقد يؤدي إلى حدوث خثار.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013922.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thrombasthenia",
    "term_en": "Thrombasthenia",
    "term_ar": "وهن صفيحات لغلانزمان",
    "synonyms": [
      "Thrombasthenias",
      "Thrombasthenia of Glanzmann and Naegeli",
      "Glanzmann Thrombasthenia, Type A",
      "Deficiency of GP 2b 3a Complex",
      "Platelet Fibrinogen Receptor, Deficiency of",
      "Glanzmann Thrombasthenia",
      "Thrombasthenia, Glanzmann",
      "Glycoprotein Complex IIb-IIIa, Deficiency Of"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital bleeding disorder with prolonged bleeding time, absence of aggregation of platelets in response to most agents, especially ADP, and impaired or absent clot retraction. Platelet membranes are deficient in or have a defect in the glycoprotein IIb-IIIa complex (PLATELET GLYCOPROTEIN GPIIB-IIIA COMPLEX).",
    "arabic_definition": "وهن صفيحات لغلانزمان (الإنجليزية: Glanzmann thrombasthenia) هو شذوذ في الصفيحات الدموية. وهو اعتلال خثري نادر جدًا (اضطراب في النزيف بسبب شذوذ في الدم)، حيث تكون الصفيحات الدموية مُحتويًة على اختلال أو على مستويات قليلة من البروتين سكري 2ب/3أ، وهو مستقبِل للفيبرينوجين.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013915.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphadenopathy",
    "term_en": "Lymphadenopathy",
    "term_ar": "تضخم العقد اللمفية",
    "synonyms": [
      "Lymphadenopathies",
      "Adenopathy",
      "Adenopathies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disease of LYMPH NODES which are abnormal in size, number or consistency.",
    "arabic_definition": "تضخم العقد اللمفية (الإنجليزية: Lymphadenopathy) هو مصطلح بمعنى (مرض العقد المفاوية). بيد أنه يستخدم مرادف «تورم / تضخم العقد اللمفاوية».",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000072281.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leukopenia",
    "term_en": "Leukopenia",
    "term_ar": "قلة الكريات البيض",
    "synonyms": [
      "Leukopenias",
      "Leukocytopenia",
      "Leukocytopenias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A decrease in the number of LEUKOCYTES in a blood sample below the normal range (LEUKOCYTE COUNT less than 4000).",
    "arabic_definition": "نقص الكريات البيضاء (الإنجليزية: Leukopenia) هو نقص عدد كريات الدم البيضاء الموجودة في الدم مما يزيد خطر تعرض الشخص للعدوى. إحدى الأنواع الفرعية لنقص خلايا الدم البيضاء هو نقص العدلات (Neutropenia) ويشير إلى نقص عدد العدلات الدائرة في مجرى الدم والعدلات أكثر أنواع خلايا الدم البيضاء شيوعًا، كلا المصطلحين نقص الكريات البيضاء ونقص العدلات يمكن استخدامهم احيانا بشكل متبادل ذلك ان عدد العدلات هو المؤشر الأكثر اهمية على وجود خطر انتقال عدوى معينة.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007970.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "purpura",
    "term_en": "Purpura",
    "term_ar": "فرفرية",
    "synonyms": [
      "Purpuras",
      "Petechiae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Purplish or brownish red discoloration, easily visible through the epidermis, caused by hemorrhage into the tissues. When the size of the discolorization is &gt;2-3 cm it is generally called Ecchymoses (ECCHYMOSIS).",
    "arabic_definition": "فُرفُرِيّة (الإنجليزية: Purpura) مصطلح طبي أصله من اللغة اللاتينية ويعني الأرجواني، يستخدم طبيا لوصف حالات تغير بعض مناطق الجلد إلى اللون الأحمر أو الأرجواني نتيجة نزيف سطحي تحت الجلد . سبب الفرفرية يكون في العادة أما نقص الصفائح الدموية ، التهاب الأوعية الدموية أو النقص الشديد لفيتامين ج (البثع).",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011693.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thrombophilia",
    "term_en": "Thrombophilia",
    "term_ar": "أهبة التخثر",
    "synonyms": [
      "Thrombophilias",
      "Hypercoagulability",
      "Hypercoagulabilities"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder of HEMOSTASIS in which there is a tendency for the occurrence of THROMBOSIS.",
    "arabic_definition": "أُهْبَةُ التَّخَثُّر (الإنجليزية: Thrombophilia) أو فرط الخثورية هو اضطراب في عملية تخثر الدم التي تؤدي إلى زيادة حدوث الخثار داخل الأوعية الدموية. احتمالية حدوثه مرتفعة، ولكن حدوثه في معظم الحالات يكون بسبب وجود عوامل الخطورة لدى بعض المرضى.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019851.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytopenia",
    "term_en": "Cytopenia",
    "term_ar": "قلة الكريات",
    "synonyms": [
      "Cytopenias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A deficiency in or reduction of the number of blood cells.",
    "arabic_definition": "قلة الكريات أو الفقر الخلوي أو ندرة الخلايا أو قلتها في الدم (الإنجليزية: Cytopenia) هوَ انخفاض في عدد خلايا الدم، ويظهر بعدة أشكال: انخفاض في عدد كريات الدم الحمراء مما يؤدي إلى حدوث فقر الدم. انخفاض في عدد خلايا الدم البيضاء ويُسمى قلة الكريات البيض أو قلة الخلايا المتعادلة.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000095542.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pancytopenia",
    "term_en": "Pancytopenia",
    "term_ar": "قلة الكريات الشاملة",
    "synonyms": [
      "Pancytopenias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Deficiency of all three cell elements of the blood, erythrocytes, leukocytes and platelets.",
    "arabic_definition": "قلة الكريات الشاملة (الإنجليزية: Pancytopenia) هي حالة طبية بها نقص في عدد كريات الدم الحمراء، البيضاء، وصفائح الدم.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010198.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "agammaglobulinemia",
    "term_en": "Agammaglobulinemia",
    "term_ar": "نقص غاما غلوبولين الدم",
    "synonyms": [
      "Agammaglobulinemias",
      "Hypogammaglobulinemia",
      "Hypogammaglobulinemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An immunologic deficiency state characterized by an extremely low level of generally all classes of gamma-globulin in the blood.",
    "arabic_definition": "نقص غاما غلوبولين الدم (الإنجليزية: Hypogammaglobulinemia) هو خلل مناعي يتميز بنقص تركيز جميع أنواع الغلوبيولين غاما وهو سمة من سمات مرض العوز المناعي الشائع المتغير. (Agammaglobulinemia)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000361.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphangitis",
    "term_en": "Lymphangitis",
    "term_ar": "التهاب الأوعية اللمفية",
    "synonyms": [
      "Lymphangitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A lymphatic disease characterized by INFLAMMATION of LYMPHATIC VESSELS.",
    "arabic_definition": "التهاب الأوعية اللمفية (الإنجليزية: Lymphangitis) هو التهاب الأوعية اللمفية، ينجم عن إصابة في موقع بعيد عن القناة. السبب الأكثر شيوعا لالتهاب الأوعية اللمفاوية لدى البشر هو العقدية المقيحة (الجموعة أ من العقديات).",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008205.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphopenia",
    "term_en": "Lymphopenia",
    "term_ar": "قلة اللمفاويات",
    "synonyms": [
      "Lymphopenias",
      "Lymphocytopenia",
      "Lymphocytopenias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Reduction in the number of lymphocytes.",
    "arabic_definition": "قلة اللمفاويات أو قلة الكريات اللمفاوية (الإنجليزية: Lymphocytopenia) هي حالة انخفاض مستوى الخلايا اللمفية في الدم بدرجة غير طبيعية. والخلايا اللمفية عبارة عن خلايا دم بيضاء لها وظائف ذات أهمية كبيرة في الجهاز المناعي. (Lymphopenia)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008231.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "afibrinogenemia",
    "term_en": "Afibrinogenemia",
    "term_ar": "فقد فبرينوجين الدم الخلقي",
    "synonyms": [
      "Afibrinogenemias",
      "Congenital Afibrinogenemia",
      "Congenital Afibrinogenaemia",
      "Afibrinogenaemia, Congenital",
      "Afibrinogenaemias, Congenital",
      "Congenital Afibrinogenaemias",
      "Afibrinogenemia, Congenital",
      "Afibrinogenemias, Congenital"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A deficiency or absence of FIBRINOGEN in the blood.",
    "arabic_definition": "يعد فقد فبرينوجين الدم الخلقي (أو الـ أفبرينوجين) اضطرابًا نادرًا وراثيًا في الفبرينوجين في الدم حيث لا يتجلط الدم بشكل طبيعي بسبب نقص الفبرينوجين، وهو بروتين دم ضروري للتخثر. هذا الاضطراب وراثي جسمي متنحي، ما يعني أن الوالدين غير المتأثرين يمكن أن يكون لهما طفل مصاب بهذا الاضطراب. (Afibrinogenemia)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000347.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypoproteinemia",
    "term_en": "Hypoproteinemia",
    "term_ar": "نقص بروتين الدم",
    "synonyms": [
      "Hypoproteinemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition in which total serum protein level is below the normal range. Hypoproteinemia can be caused by protein malabsorption in the gastrointestinal tract, EDEMA, or PROTEINURIA.",
    "arabic_definition": "نقص بروتينات الدم (Hypoproteinemia) أو ( Hypoproteinaemia ) هي الحالة التي يحدث فيها نقص غير طبيعي في مستوى البروتين في الدم . هناك أسباب متعددة وكلها تؤدي لوذمة عندما يتجاوز النقص عتبة معينة.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007019.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypoalbuminemia",
    "term_en": "Hypoalbuminemia",
    "term_ar": "نقص ألبيومين الدم",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition in which albumin level in blood (SERUM ALBUMIN) is below the normal range. Hypoalbuminemia may be due to decreased hepatic albumin synthesis, increased albumin catabolism, altered albumin distribution, or albumin loss through the urine (ALBUMINURIA).",
    "arabic_definition": "نقص ألبومين الدم (الإنجليزية: Hypoalbuminemia أو hypoalbuminaemia) هي حالة طبية تشير إلى مستوى الألبومين في الدم أقل من المستوى الطبيعي. يعد نقص ألبومين الدم نوعا من أنواع نقص بروتين الدم.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034141.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphangiectasis",
    "term_en": "Lymphangiectasis",
    "term_ar": "توسع الأوعية اللمفية",
    "synonyms": [
      "Lymphangiectases",
      "Lymphangiectasia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A transient dilatation of the lymphatic vessels.",
    "arabic_definition": "توسع الأوعية المفية (الإنجليزية: Lymphangiectasia or lymphangiectasis) هو تمدد مرضي للأوعية اللمفاوية، عندما يحدث ذلك في أمعاء الكلاب، وفي حالات نادرة من البشر، فإنه يسبب مرضًا يعرف باسم «تضخم الغدد اللمفاوية المعوية»، هذا المرض يتميز بتوسع الأوعية اللمفاوية، والإسهال المزمن وفقدان البروتينات مثل مصل الألبومين والجلوبيولين، ويعتبر أن يكون شكل مزمن من اعتلال الأمعاء بخسارة البروتين.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008200.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "histiocytosis",
    "term_en": "Histiocytosis",
    "term_ar": "كثرة المنسجات",
    "synonyms": [
      "Histiocytoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "General term for the abnormal appearance of histiocytes in the blood. Based on the pathological features of the cells involved rather than on clinical findings, the histiocytic diseases are subdivided into three groups: HISTIOCYTOSIS, LANGERHANS CELL; HISTIOCYTOSIS, NON-LANGERHANS-CELL; and HISTIOCYTIC DISORDERS, MALIGNANT.",
    "arabic_definition": "كثرة المنسجات هو مصطلح يشير لوجود اضطراب وعدد كبير من المنسجات وهي نوع من الخلايا الأكولة الكبيرة وجزء من كريات الدم البيضاء ،وعادة ما يستخدم المصطلح للإشارة لمجموعة من الأمراض النادرة المشتركة بهذه الخاصية، قد يستخدم المصطلح أحيانا وبشكل مربك للإشارة لأمراض بعينها. وفقا لجمعية أمراض كثرة المنسجات الأمريكية، فإن واحدا من كل مئتي ألف طفل في الولايات المتحدة الأمريكية يولد مصابا بكثرة المنسجات كل عام ،المنظمة أيضا تقول أن غالب المصابين بأمراض كثرة المنسجات هم من الأطفال تحت سن العاشرة، على الرغم من أنه من الممكن أن يصيب البالغين. (Histiocytosis)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015614.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sulfhemoglobinemia",
    "term_en": "Sulfhemoglobinemia",
    "term_ar": "السلفهيموغلوبينيميا",
    "synonyms": [
      "Sulfhemoglobinemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A morbid condition due to the presence of sulfmethemoglobin in the blood. It is marked by persistent cyanosis, but the blood count does not reveal any special abnormality in the blood. It is thought to be caused by the action of hydrogen sulfide absorbed from the intestine. (Stedman, 25th ed)",
    "arabic_definition": "السلفهيموغلوبينيميا هي حالة نادرة يحدث فيها ارتفاع في مستوى السلفهيموغلوبين في الدم. وهو مشتق أخضراللون من الهيموغلوبين، ويتكوّن نتيجة ارتباط الكبريت بالهيموغلوبين ارتباطًا غير عكوس، مما يمنع إعادة تحويله إلى هيموغلوبين طبيعي. (Sulfhemoglobinemia)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013436.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "avoidant-restrictive-food-intake-disorder",
    "term_en": "Avoidant Restrictive Food Intake Disorder",
    "term_ar": "اضطراب تناول الطعام الاجتنابي أو المحدد",
    "synonyms": [
      "Food Neophobia",
      "Food Neophobias",
      "Neophobia, Food",
      "ARFID"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An eating or feeding disturbance (e.g., apparent lack of interest in eating or food; avoidance based on the sensory characteristics of food; concern about aversive consequences of eating) as manifested by persistent failure to meet appropriate nutritional and/or energy needs associated with one (or more) of the following: significant weight loss (or failure to achieve expected weight gain or faltering growth in children); significant nutritional deficiency; dependence on enteral feeding or oral nutritional supplements; or marked interference with psychosocial functioning. (from DSM-V)",
    "arabic_definition": "يعرف اضطراب تناول الطعام الاجتنابي أو المحدد بأنه اضطراب أكل انتقائي وهو نوع من أنواع اضطرابات الطعام ويكون عندما يأكل الناس تصنيفه قليلة للغاية من الأطعمة. قد يعتمد هذا التجنب على مظهر الأكل أو رائحته أو طعمه أو ملمسه أو العلامة التجارية أو العرض التقديمي أو تجربة سلبية قد خاضها سابقًا مع الطعام وهذا التجنب قد يكون إلى درجة قد تؤدي إلى نقص التغذية أو غيرها من النتائج الصحية السلبية. (Avoidant Restrictive Food Intake Disorder)",
    "specialty": "Psychiatry",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000080146.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leukostasis",
    "term_en": "Leukostasis",
    "term_ar": "ركودة خلايا الدم البيضاء",
    "synonyms": [
      "Leukostases",
      "Leukostasis Syndrome",
      "Leukostasis Syndromes",
      "Syndrome, Leukostasis",
      "Syndromes, Leukostasis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal intravascular leukocyte aggregation and clumping often seen in leukemia patients. The brain and lungs are the two most commonly affected organs. This acute syndrome requires aggressive cytoreductive modalities including chemotherapy and/or leukophoresis. It is differentiated from LEUKEMIC INFILTRATION which is a neoplastic process where leukemic cells invade organs.",
    "arabic_definition": "ركودة خلايا الدم البيضاء أو فرط الكريات البيض العرضي، هي حالة طبية طارئة تحدث بشكل شائع لدى المرضى المصابين بابيضاض الدم النقوي الحاد. تتميز الحالة بارتفاع شديد في عدد الخلايا الأرومية مع أعراض تدل على انخفاض تروية الأنسجة. (Leukostasis)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018921.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "splenosis",
    "term_en": "Splenosis",
    "term_ar": "تطحال",
    "synonyms": [
      "Splenoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The spontaneous transplantation of splenic tissue to unusual sites after open splenic trauma, e.g., after automobile accidents, gunshot or stab wounds. The splenic pulp implants appear as red-blue nodules on the peritoneum, omentum, and mesentery, morphologically similar to multifocal pelvic endometriosis. (Segen, Dictionary of Modern Medicine, 1992)",
    "arabic_definition": "التَطْحال (الإنجليزية: Splenosis)، يحدث نتيجة انقطاع في أنسجة الطحال الرئيسية وانغراسها في مكان آخر داخل الجسم. وهذا ما يسمى بالنقل الذاتي للطحال.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017890.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "infectious-mononucleosis",
    "term_en": "Infectious Mononucleosis",
    "term_ar": "كثرة الوحيدات العدوائية",
    "synonyms": [
      "Glandular Fever",
      "Fever, Glandular",
      "Mononucleosis, Infectious"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A common, acute infection usually caused by the Epstein-Barr virus (HERPESVIRUS 4, HUMAN). There is an increase in mononuclear white blood cells and other atypical lymphocytes, generalized lymphadenopathy, splenomegaly, and occasionally hepatomegaly with hepatitis.",
    "arabic_definition": "كثرة الوحيدات العدائية أو كثرة الوحيدات الخمجية (الإنجليزية: Infectious Mononucleosis) (يعرف أيضاً بعدة أسماء أخرى مثل مرض فايفر (Pfeiffer's Disease) ومرض فايلاتوف H أو الحمى الغددية؛ وبالعامية داء التقبيل؛ بسبب انتقاله من شخص لآخر عبر إفرازات الفم وفي بعض الدول بالحمى الغدية) هو داءٌ خمجي معدي فيروسي منتشر يسببه فيروس إبشتاين-بار (EBV) وهو من فيروسات الهربس والذي تعرض له أكثر من 90% من الكبار. تعرض معظمهم له أثناء مرحلة الطفولة بدون أن يُظهر المرض أي أعراض أو يظهر كنزلة برد بسيطة فقط.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007244.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "essential-thrombocythemia",
    "term_en": "Essential Thrombocythemia",
    "term_ar": "كثرة الصفيحات الأولية",
    "synonyms": [
      "Essential Thrombocythemias",
      "Thrombocythemias, Essential",
      "Thrombocytosis, Primary",
      "Primary Thrombocytoses",
      "Primary Thrombocytosis",
      "Thrombocytoses, Primary",
      "Primary Thrombocythemia",
      "Thrombocythemia, Primary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clinical syndrome characterized by repeated spontaneous hemorrhages and a remarkable increase in the number of circulating platelets.",
    "arabic_definition": "كثرة الصفيحات الأولية أو الأساسية (الإنجليزية: Essential thrombocytosis أو essential thrombocythemia أو essential thrombocythaemia أو primary thrombocytosis) هو اضطراب دموي مزمن نادر يمتاز بفرط إنتاج الصفيحات الدموية بواسطة الخلايا النواء في نخاع العظم. وقد يتطور في حالات نادرة إلى ابيضاض الدم النقوي الحاد أو تليف نقوي.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013920.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wiskott-aldrich-syndrome",
    "term_en": "Wiskott-Aldrich Syndrome",
    "term_ar": "متلازمة فيسكوت آلدريك",
    "synonyms": [
      "Aldrich Syndrome",
      "Eczema-Thrombocytopenia-Immunodeficiency Syndrome",
      "Eczema-Thrombocytopenia-Immunodeficiency Syndromes",
      "Imd2",
      "Immunodeficiency 2",
      "Immunodeficiency 2s",
      "Wiskott Syndrome",
      "Wiskott Syndromes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare, X-linked immunodeficiency syndrome characterized by ECZEMA; LYMPHOPENIA; and, recurrent pyogenic infection. It is seen exclusively in young boys. Typically, IMMUNOGLOBULIN M levels are low and IMMUNOGLOBULIN A and IMMUNOGLOBULIN E levels are elevated. Lymphoreticular malignancies are common.",
    "arabic_definition": "متلازمة فيسكوت آلدريك أو متلازمة فيسكوت ألدريتش هي مرض وراثي نادر مرتبط بكروموسوم جنسي X متنحي يتميز بحدوث إكزيما وقلة الصفيحات الدموية ونقص المناعة وإسهال دموي (نتيجة لقلة الصفيحات الدموية). يطلق عليها أيضا اسم متلازمة الإكزيما – قلة الصفيحات الدموية – نقص المناعة كما وصفها ألدريخ عام 1954. (Wiskott-Aldrich Syndrome)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014923.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "protein-s-deficiency",
    "term_en": "Protein S Deficiency",
    "term_ar": "عوز البروتين إس",
    "synonyms": [
      "Deficiency, Protein S",
      "Deficiencies, Protein S",
      "Protein S Deficiencies",
      "Hereditary Thrombophilia Due To Protein S Deficiency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant disorder showing decreased levels of plasma protein S antigen or activity, associated with venous thrombosis and pulmonary embolism. PROTEIN S is a vitamin K-dependent plasma protein that inhibits blood clotting by serving as a cofactor for activated PROTEIN C (also a vitamin K-dependent protein), and the clinical manifestations of its deficiency are virtually identical to those of protein C deficiency. Treatment with heparin for acute thrombotic processes is usually followed by maintenance administration of coumarin drugs for the prevention of recurrent thrombosis. (From Harrison's Principles of Internal Medicine, 12th ed, p1511; Wintrobe's Clinical Hematology, 9th ed, p1523)",
    "arabic_definition": "عوز البروتين إس هو اضطراب يرتبط بزيادة خطر الإصابة بالخثار الوريدي. البروتين إس هو مضاد تخثر فسيولوجي يعتمد على فيتامين ك، يعمل كعامل مرافق غير إنزيمي لتنشيط البروتين سي الذي يحلل العامل الخامس والعامل الثامن. (Protein S Deficiency)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018455.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diamond-blackfan-anemia",
    "term_en": "Diamond-Blackfan Anemia",
    "term_ar": "فقر دم دياموند-بلاكفان",
    "synonyms": [
      "Anemia, Diamond Blackfan",
      "Anemia, Diamond-Blackfan Type",
      "Diamond-Blackfan Type Anemia",
      "Blackfan-Diamond Syndrome",
      "Erythrogenesis Imperfecta",
      "Erythrogenesis Imperfectas",
      "Diamond–Blackfan anemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare congenital hypoplastic anemia that usually presents early in infancy. The disease is characterized by a moderate to severe macrocytic anemia, occasional neutropenia or thrombocytosis, a normocellular bone marrow with erythroid hypoplasia, and an increased risk of developing leukemia. (Curr Opin Hematol 2000 Mar;7(2):85-94)",
    "arabic_definition": "أنيميا أو فقر دم دياموند-بلاكفان وتعرف أيضاً بفقر دم بلاكفان-دياموند أو عدم التنسج الصرف لكرات الدم الحمراء الوراثي، أو نقص الأرومات ( كرات الدم الحمراء قبل النضج) الحمراء الوراثي (الإنجليزية: Diamond–Blackfan anemia)، وهو واحد من مجموعة الأمراض المسماة بمتلازمات فشل نخاع العظم الموروثة، وهو عيب خلقي في نخاع العظام ينتج عنه نقص تعداد كرات الدم الحمراء. يؤثر فقر دم دياموند-بلاكفان على كرات الدم الحمراء دون باقي مكونات الدم (خلايا الدم البيضاء والصفائح الدموية) وتكون تلك المكونات الأخرى طبيعية في العادة . (Diamond-Blackfan Anemia)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D029503.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "erdheim-chester-disease",
    "term_en": "Erdheim-Chester Disease",
    "term_ar": "مرض إيردهايم-شيستر",
    "synonyms": [
      "Granulomatosis, Lipid",
      "Lipid Granulomatosis",
      "Erdheim–Chester disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare form of non-Langerhans-cell histiocytosis (HISTIOCYTOSIS, NON-LANGERHANS-CELL) with onset in middle age. The systemic disease is characterized by infiltration of lipid-laden macrophages, multinucleated giant cells, an inflammatory infiltrate of lymphocytes and histiocytes in the bone marrow, and a generalized sclerosis of the long bones.",
    "arabic_definition": "مرض إيردهايم-شيستر هو مرض شديد الندرة يحدث فيه نموٌ غير طبيعي للخلايا النسيجية البيضاء المهاجمة للأمراض، والتي تتسبب بدورها التهابات ليمفاوية في نخاع العظام، ويتميّز هذا المرض بسرعة توالي ظهور أعراضه، حيث تكون الفترة الزمنية بين كل عرض وما يليه في غضون الساعتين (Erdheim-Chester Disease)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D031249.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemophagocytic-lymphohistiocytosis",
    "term_en": "Hemophagocytic Lymphohistiocytosis",
    "term_ar": "داء البلعمة",
    "synonyms": [
      "Hemophagocytic Lymphohistiocytoses",
      "Lymphohistiocytoses, Hemophagocytic",
      "Reactive Hemophagocytic Syndrome",
      "Hemophagocytic Syndrome, Infection-Associated",
      "Infection-Associated Hemophagocytic Syndrome",
      "Hemophagocytic Syndrome, Reactive",
      "Familial Hemophagocytic Lymphocytosis",
      "Familial Hemophagocytic Lymphocytoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of related disorders characterized by LYMPHOCYTOSIS; HISTIOCYTOSIS; and hemophagocytosis. The two major forms are familial and reactive.",
    "arabic_definition": "داء البلعمة أو بلعمة الدم (الإنجليزية: Hemophagocytic lymphohistiocytosis) هو مرض مناعي وليس سرطاني، لكنه يشبه مرض السرطان في طبيعته وطريقة علاجه. وهو من الأمراض النادر الإصابة بها، قد يصيب أي فئة عمرية، لكنه شائع بين الأطفال صغار السن خاصة ما دون السنة بنسبة 70 %، وقد يتواجد لدى الأطفال حديثي الولادة وتتساوى نسبة الإصابة به بين الذكور والإناث.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051359.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acute-chest-syndrome",
    "term_en": "Acute Chest Syndrome",
    "term_ar": "متلازمة الصدر الحادة",
    "synonyms": [
      "Acute Chest Syndromes",
      "Syndrome, Acute Chest",
      "Syndromes, Acute Chest"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Respiratory syndrome characterized by the appearance of a new pulmonary infiltrate on chest x-ray, accompanied by symptoms of fever, cough, chest pain, tachypnea, or DYSPNEA, often seen in patients with SICKLE CELL ANEMIA. Multiple factors (e.g., infection, and pulmonary FAT EMBOLISM) may contribute to the development of the syndrome.",
    "arabic_definition": "متلازمة الصدر الحادة هي أزمة انسداد الأوعية الدموية الرئوية التي تُشاهد عادةً لدى الأشخاص المصابين بفقر الدم المنجلي. تتجلى هذه الحالة عادةً بظهور عتامة جديدة في الرئة (الرئتين) في صورة الأشعة السينية للصدر. (Acute Chest Syndrome)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056586.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vitamin-k-deficiency",
    "term_en": "Vitamin K Deficiency",
    "term_ar": "نقص فيتامين ك",
    "synonyms": [
      "Deficiency, Vitamin K",
      "Deficiencies, Vitamin K",
      "Vitamin K Deficiencies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nutritional condition produced by a deficiency of VITAMIN K in the diet, characterized by an increased tendency to hemorrhage (HEMORRHAGIC DISORDERS). Such bleeding episodes may be particularly severe in newborn infants. (From Cecil Textbook of Medicine, 19th ed, p1182)",
    "arabic_definition": "نقص فيتامين ك هو شكل من أشكال النقص أو العوز الفيتاميني (الإنجليزية: avitaminosis) الناتجة عن عدم كفاية فيتامين ك1 أو فيتامين ك2 أو كليهما. (Vitamin K Deficiency)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014813.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sickle-cell-anemia",
    "term_en": "Sickle Cell Anemia",
    "term_ar": "داء الخلايا المنجلية",
    "synonyms": [
      "Anemias, Sickle Cell",
      "Sickle Cell Anemias",
      "Hemoglobin S Disease",
      "Disease, Hemoglobin S",
      "Hemoglobin S Diseases",
      "Sickle Cell Disease",
      "Cell Disease, Sickle",
      "Cell Diseases, Sickle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease characterized by chronic hemolytic anemia, episodic painful crises, and pathologic involvement of many organs. It is the clinical expression of homozygosity for hemoglobin S.",
    "arabic_definition": "مرض الخلايا المنجلية، ويسمى أيضا ببساطة الخلايا المنجلية، هو مجموعة من اضطرابات الدم الموروثة عادة من والدي الشخص. يحدث مرض الخلايا المنجلية نتيجة خلل في الهيموجلوبين البروتيني الحامل للأكسجين الموجود في خلايا الدم الحمراء. (Sickle Cell Anemia)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000755.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aplastic-anemia",
    "term_en": "Aplastic Anemia",
    "term_ar": "فقر الدم اللاتنسجي",
    "synonyms": [
      "Aplastic Anemias",
      "Aplastic Anaemia",
      "Anaemia, Aplastic",
      "Aplastic Anaemias",
      "Anemia, Hypoplastic",
      "Hypoplastic Anemia",
      "Hypoplastic Anemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of anemia in which the bone marrow fails to produce adequate numbers of peripheral blood elements.",
    "arabic_definition": "فقر الدم اللاتنسجي أو فشل نخاع العظم هي حالة توصف بعدم قدرة نخاع العظم على إنتاج عدد كافي من الخلايا لتجديد خلايا الدم. مرضى فقر الدم اللا تنسجي يعانون من نقص في كافة خلايا الدم ، ويشمل النقص خلايا الدم الحمراء وخلايا الدم البيضاء والصفائح الدموية. (Aplastic Anemia)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000741.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemophilia-a",
    "term_en": "Hemophilia A",
    "term_ar": "هيموفيليا أ",
    "synonyms": [
      "Hemophilia As",
      "Classic Hemophilia",
      "Classic Hemophilias",
      "Hemophilias, Classic",
      "Haemophilia",
      "Hemophilia",
      "Hemophilia A, Congenital",
      "Congenital Hemophilia A"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The classic hemophilia resulting from a deficiency of factor VIII. It is an inherited disorder of blood coagulation characterized by a permanent tendency to hemorrhage.",
    "arabic_definition": "هيموفيليا أ (الإنجليزية: Haemophilia A) هو نقص وراثي في عامل التخثر الثامن، مما يسبب زيادة النزف، وعادة ما يصيب الذكور. ويتم توارثه في معظم الحالات باعتباره سمة متنحية مرتبطة بالكروموسوم X، على الرغم من أن هناك حالات تنشأ عن الطفرات العفوية. (Hemophilia A)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006467.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemophilia-b",
    "term_en": "Hemophilia B",
    "term_ar": "هيموفيليا ب",
    "synonyms": [
      "Bs, Hemophilia",
      "Hemophilia Bs",
      "Christmas Disease",
      "Disease, Christmas",
      "Deficiency, Factor IX",
      "Deficiencies, Factor IX",
      "Factor IX Deficiencies",
      "Factor IX Deficiency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A deficiency of blood coagulation factor IX inherited as an X-linked disorder. (Also known as Christmas Disease, after the first patient studied in detail, not the holy day.) Historical and clinical features resemble those in classic hemophilia (HEMOPHILIA A), but patients present with fewer symptoms. Severity of bleeding is usually similar in members of a single family. Many patients are asymptomatic until the hemostatic system is stressed by surgery or trauma. Treatment is similar to that for hemophilia A. (From Cecil Textbook of Medicine, 19th ed, p1008)",
    "arabic_definition": "هيموفيليا ب (الإنجليزية: Haemophilia B) هي اضطراب تخثر الدم الناجم عن طفرة في جين العامل التاسع، مما يؤدي إلى نقص العامل التاسع. وهو ثاني أكثر أشكال الهيموفيليا شيوعا، وأكثر ندرة من الهيموفيليا أ. (Hemophilia B)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002836.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fanconi-anemia",
    "term_en": "Fanconi Anemia",
    "term_ar": "فقر دم فانكوني",
    "synonyms": [
      "Anemias, Fanconi",
      "Fanconi Anemias",
      "Anemia, Fanconi",
      "Fanconi's Anemia",
      "Anemia, Fanconi's",
      "Fanconi Hypoplastic Anemia",
      "Fanconi Pancytopenia",
      "Fanconi Panmyelopathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital disorder affecting all bone marrow elements, resulting in ANEMIA; LEUKOPENIA; and THROMBOPENIA, and associated with cardiac, renal, and limb malformations as well as dermal pigmentary changes. Spontaneous CHROMOSOME BREAKAGE is a feature of this disease along with predisposition to LEUKEMIA. There are at least 7 complementation groups in Fanconi anemia: FANCA, FANCB, FANCC, FANCD1, FANCD2, FANCE, FANCF, FANCG, and FANCL. (from Online Mendelian Inheritance in Man, http://www.ncbi.nlm.nih.gov/entrez/dispomim.cgi?id=227650, August 20, 2004)",
    "arabic_definition": "فقر دم فانكوني (الإنجليزية: Fanconi anemia) هو مرض وراثي شديد الندرة يسبب فشل نخاع العظام في تكوين خلايا الدم المختلفة مما يؤدي إلى أنيميا من نوع (فقر الدم اللاخلوي) ونزف وعدوى متكررة، مع زيادة في احتمالية الإصابة بسرطان الدم من نوع ابيضاض الدم النقوي الحاد وسرطانات أخرى. وقد يصحب ذلك اختلالات في النمو والتطور وتشوهات بالجلد والرأس واليدين والعينين.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005199.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "iron-deficiency-anemia",
    "term_en": "Iron-Deficiency Anemia",
    "term_ar": "فقر الدم الناجم عن عوز الحديد",
    "synonyms": [
      "Anemia, Iron Deficiency",
      "Anemias, Iron-Deficiency",
      "Iron-Deficiency Anemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anemia characterized by decreased or absent iron stores, low serum iron concentration, low transferrin saturation, and low hemoglobin concentration or hematocrit value. The erythrocytes are hypochromic and microcytic and the iron binding capacity is increased.",
    "arabic_definition": "فقر الدم الناجم عن عوز الحديد (الإنجليزية: Iron-deficiency anemia)، هو فقر الدم الذي يحدث بسبب نقص الحديد. يعرف فقر الدم بأنه انخفاض في عدد خلايا الدم الحمراء أو كمية الهيموجلوبين عن المستوى الطبيعي في الدم.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018798.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fetofetal-transfusion",
    "term_en": "Fetofetal Transfusion",
    "term_ar": "متلازمة نقل الدم الجنيني",
    "synonyms": [
      "Fetofetal Transfusions",
      "Transfusion, Fetofetal",
      "Twin Transfusion Syndrome",
      "Syndrome, Twin Transfusion",
      "Transfusion Syndrome, Twin",
      "Twin Transfusion Syndromes",
      "Twin Twin Transfusion Syndrome",
      "Fetal Transfusion Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Passage of blood from one fetus to another via an arteriovenous communication or other shunt, in a monozygotic twin pregnancy. It results in anemia in one twin and polycythemia in the other. (Lee et al., Wintrobe's Clinical Hematology, 9th ed, p737-8)",
    "arabic_definition": "متلازمة نقل الدم الجنيني أو نقل الدم بين توأمين، هي حالة تحدث في التوائم أحادية المشيمة، تتضمن نقل الدم من جنين إلى الآخر عبر المشيمة المشتركة، وتشكل معدلات الوفاة الناتجة عنها في الحالات الشديدة 60-100%. (Fetofetal Transfusion)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005330.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "primary-myelofibrosis",
    "term_en": "Primary Myelofibrosis",
    "term_ar": "تليف نقوي",
    "synonyms": [
      "Myelofibroses, Primary",
      "Myelofibrosis, Primary",
      "Primary Myelofibroses",
      "Agnogenic Myeloid Metaplasia",
      "Agnogenic Myeloid Metaplasias",
      "Metaplasia, Agnogenic Myeloid",
      "Metaplasias, Agnogenic Myeloid",
      "Myeloid Metaplasia, Agnogenic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A de novo myeloproliferation arising from an abnormal stem cell. It is characterized by the replacement of bone marrow by fibrous tissue, a process that is mediated by CYTOKINES arising from the abnormal clone.",
    "arabic_definition": "التليف النقوي (الإنجليزية: Myelofibrosis) هو سرطان نادر يصيب نخاع العظم. يصنف حاليا على أنه مرض تكاثر نقوي، حيث ينتج عن تكوين نسيلة شاذة للخلية الجذعية المكونة للدم في نخاع العظم مما يتسبب بتليف أو استبدال النخاع بألياف نسيج رابط كولاجيني. (Primary Myelofibrosis)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055728.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypoprothrombinemias",
    "term_en": "Hypoprothrombinemias",
    "term_ar": "نقص بروثرومبين الدم",
    "synonyms": [
      "Deficiency, Factor II",
      "Deficiencies, Factor II",
      "Factor II Deficiencies",
      "Factor II Deficiency",
      "Hypoprothrombinemia",
      "Prothrombin Deficiency",
      "Deficiencies, Prothrombin",
      "Deficiency, Prothrombin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Absence or reduced levels of PROTHROMBIN in the blood.",
    "arabic_definition": "نقص بروثرومبين الدم (الإنجليزية: Hypoprothrombinemia) هو اضطراب نادر في الدم يحدث فيه نقص في البروثرومبين المناعي (العامل الثاني)، الذي يصنعه الكبد، مما يؤدي إلى ضعف في تفاعل تخثر الدم، وبالتالي زيادة المخاطر الفسيولوجية للنزيف التلقائي. يمكن ملاحظة آثار هذه الحالة عبر الأعراض التي تصيب الجهاز الهضمي، والقبو القحفي، والجهاز اللحافي، ويؤثر المرض على الذكور والإناث. (Hypoprothrombinemias)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007020.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eosinophilic-granuloma",
    "term_en": "Eosinophilic Granuloma",
    "term_ar": "ورم حبيبي يوزيني",
    "synonyms": [
      "Granuloma, Eosinophilic",
      "Eosinophilic Granulomas",
      "Granulomas, Eosinophilic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The most benign and common form of Langerhans-cell histiocytosis which involves localized nodular lesions predominantly of the bones but also of the gastric mucosa, small intestine, lungs, or skin, with infiltration by EOSINOPHILS.",
    "arabic_definition": "الورم الحبيبي اليوزيني (الإنجليزية: Eosinophilic granuloma) هو شكل من الخلايا اللانغرهانسية كثيرة المنسجات الخلايا اللانغرهانسية كثيرة المنسجات، وهو مرض يصيب الإنسان والحيوان، وفي بعض الأحيان يعود نمط التفاعل إلى قرحة القوارض. الورم الحبيبي الحلقي القطي وهو تركيب مرادف لأمراض ورم الجلد الحبيبي الحلقي يصنف هذا المرض ليكون من انماط التفاعل الجلدية والذي بإمكانه أن يظهر كداعم للالتهابات والحساسية والطفيليات الخارجية أو علة مجهولة السبب.",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004803.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cat-scratch-disease",
    "term_en": "Cat-Scratch Disease",
    "term_ar": "داء خدش القطة",
    "synonyms": [
      "Cat-Scratch Diseases",
      "Inoculation Lymphoreticulosis",
      "Inoculation Lymphoreticuloses",
      "Lymphoreticuloses, Inoculation",
      "Lymphoreticulosis, Inoculation",
      "Inoculative Lymphoreticulosis",
      "Inoculative Lymphoreticuloses",
      "Lymphoreticuloses, Inoculative"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A self-limiting bacterial infection of the regional lymph nodes caused by AFIPIA felis, a gram-negative bacterium recently identified by the Centers for Disease Control and Prevention and by BARTONELLA HENSELAE. It usually arises one or more weeks following a feline scratch, with raised inflammatory nodules at the site of the scratch being the primary symptom.",
    "arabic_definition": "داء خَدْش القطة أو داء خرمشة القطة (الإنجليزية: Cat scratch disease)، يسمى أيضًا الشُّبَاك البِطَانِيّ اللِمْفيّ الحَمِيْد (الإنجليزية: Benign lymphoreticulosis)، مرضٌ معدٍ غير خطير، يظهر بالعادة لدى الأطفال 1-2 أسبوع من تعرضهم لخدش القطة. وُصف للمرة الأولى في العام 1889 من قبل هنيري بارنويد. (Cat-Scratch Disease)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002372.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microscopy",
    "term_en": "Microscopy",
    "term_ar": "مجهرية",
    "synonyms": [
      "Optical Microscopy",
      "Microscopy, Optical",
      "Compound Microscopy",
      "Microscopy, Compound",
      "Hand-Held Microscopy",
      "Microscopy, Hand-Held",
      "Light Microscopy",
      "Microscopy, Light"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The use of instrumentation and techniques for visualizing material and details that cannot be seen by the unaided eye. It is usually done by enlarging images, transmitted by light or electron beams, with optical or magnetic lenses that magnify the entire image field. With scanning microscopy, images are generated by collecting output from the specimen in a point-by-point fashion, on a magnified scale, as it is scanned by a narrow beam of light or electrons, a laser, a conductive probe, or a topographical probe.",
    "arabic_definition": "المجهرية أو الفحص المجهري أو الاستجهار (الإنجليزية: Microscopy) في الفيزياء وعلم الأحياء وعلم المعادن هو دراسة الأشياء باستخدام المجهر، ويستخدم المجهر لرؤية أو لتكوين صورة لشيئ لا يمكن للعين رؤيته لصغره. وتوجد ثلاثة أنواع من المجهرات : المجهر الضوئي، مجهر إلكتروني، ومجهر نقطي.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008853.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photography",
    "term_en": "Photography",
    "term_ar": "تصوير ضوئي",
    "synonyms": [
      "Photographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Method of making images on a sensitized surface by exposure to light or other radiant energy.",
    "arabic_definition": "التصوير الضوئي أو التصوير الشمسي (بالإنجليزية: Photography، وهي مشتقة من اليونانية، وتعني الرسم أو التخطيط بالضوء)، مرادف لفن الرسم القديم فمن خلال العدسة يقوم المصور بإعادة إسقاط المشهد أمامه على وسط يمكن من خلاله إعادة تمثيل المشهد فيما بعد. والتصوير الضوئي هو عملية إنتاج صور ومناظر بواسطة تأثيرات ضوئية؛ فالأشعة المنعكسة من المنظر تكوِّن خيالاً داخل مادة حسّاسة للضوء، ثم تُعالَج هذه المادة بعد ذلك، فينتج عنها صورة تمثل المنظر.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010781.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "holography",
    "term_en": "Holography",
    "term_ar": "تصوير تجسيمي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The recording of images in three-dimensional form on a photographic film by exposing it to a laser beam reflected from the object under study.",
    "arabic_definition": "التصوير التجسيمي أو التصوير النافر (الإنجليزية: Holography) تمتلك خاصية فريدة تمكنها من إعادة تكوين صورة الأجسام بأبعادها الثلاثة في الفضاء، وتسمى هذه الصورة بالصورة المُجسَّمة أو المُصَوَّر التجسيمي (الإنجليزية: Hologram). تجري تلك العملية باستخدام أشعة الليزر.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006696.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radiography",
    "term_en": "Radiography",
    "term_ar": "تصوير شعاعي",
    "synonyms": [
      "Diagnostic X-Ray",
      "Diagnostic X-Rays",
      "X-Rays, Diagnostic",
      "X-Ray, Diagnostic",
      "Diagnostic X-Ray Radiology",
      "X-Ray Radiology, Diagnostic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Examination of any part of the body for diagnostic purposes by means of X-RAYS or GAMMA RAYS, recording the image on a sensitized surface (such as photographic film).",
    "arabic_definition": "التصوير الشعاعي فحص الأشعة السينية أو اشعة رنتجن (الإنجليزية: Radiography) وهو يستخدم الأشعة السينية لرؤية الأجزاء غير المرئية أو صعبة التصوير. هو فحص تخترق خلاله أشعة كهرومغناطيسية يصدرها جهاز إشعاعي خاص، أنسجة الجسم، وتصيب لوحا يكون موضوعا بالعادة خلف الجسم.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011859.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mammography",
    "term_en": "Mammography",
    "term_ar": "تصوير الثدي الشعاعي",
    "synonyms": [
      "Mammographies",
      "Digital Breast Tomosynthesis",
      "Breast Tomosyntheses, Digital",
      "Breast Tomosynthesis, Digital",
      "Digital Breast Tomosyntheses",
      "X-ray Breast Tomosynthesis",
      "Breast Tomosyntheses, X-ray",
      "Breast Tomosynthesis, X-ray"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiographic examination of the breast.",
    "arabic_definition": "تصوير الثدي الشعاعى هو عملية استخدام الأشعة السينية ذات الشعة منخفضة الجرعة (عادة حوالي 0.7 ملي سيفرت) لفحص الثدي البشرية ويستخدم كأداة للتشخيص والفحص. والهدف من تصوير الثدي هو الاكتشاف المبكر لسرطان الثدي، من خلال الكشف عن الكُتَل المميزة أو التكلسات الصغيرة. (Mammography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008327.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tomography",
    "term_en": "Tomography",
    "term_ar": "تصوير مقطعي",
    "synonyms": [
      "Tomographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Imaging methods that result in sharp images of objects located on a chosen plane and blurred images located above or below the plane.",
    "arabic_definition": ". التصوير المقطعي أو التصوير الطبقي هو أسلوب تصوير علمي يعتمد على تكوين صورة عن الجسم المدروس بعد إجراء عملية تراكب لصور شرائح مأخوذة تراتبياً واحدة تلو الأخرى بتعريض الجسم إلى الأشعة. يستخدم التصوير المقطعي في العديد من المجالات العلمية مثل علم الأشعة وعلم الأحياء وعلم المواد والفيزياء وغيرها. (Tomography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014054.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fluoroscopy",
    "term_en": "Fluoroscopy",
    "term_ar": "كشف فلوري",
    "synonyms": [
      "Fluoroscopies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Production of an image when x-rays strike a fluorescent screen.",
    "arabic_definition": "الكشْف الفَلْوَريّ أو التَنْظيرٌ التَأَلُّقِيّ (الإنجليزية: Fluoroscopy) ويُسمَّى الجهاز المِلْصَاف، طريقة تشخيص طبية تستخدم الأشعة السينية. تمكن الطبيب من رؤية التركيب الداخلي والعمليات في الجسم، وتعطي صورة بالأشعة السينية لأعضاء الجسم، تعمل بالفعل.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005471.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angiography",
    "term_en": "Angiography",
    "term_ar": "تصوير الأوعية",
    "synonyms": [
      "Angiographies",
      "Arteriography",
      "Arteriographies",
      "Angiogram",
      "Angiograms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiography of blood vessels after injection of a contrast medium.",
    "arabic_definition": "تَصْويرُ الأَوعِيَة أو تصوير الشرايين (الإنجليزية: Angiography) هو تقنية تصوير طبية تُستخدم لتصور الأوعية الدموية وأعضاء الجسم من الداخل أو التجويف، مع الاهتمام بشكل خاص بالشرايين والأوردة وغرف القلب. يتم ذلك عادةً عن طريق حقن عامل تباين غير شفاف في الأوعية الدموية والتصوير باستخدام تقنيات تعتمد على الأشعة السينية مثل التنظير الفلوري.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000792.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chronic-granulomatous-disease",
    "term_en": "Chronic Granulomatous Disease",
    "term_ar": "داء الورم الحبيبي المزمن",
    "synonyms": [
      "Chronic Granulomatous Diseases",
      "Granulomatous Diseases, Chronic",
      "Granulomatous Disease, Chronic, X-Linked",
      "Chronic Granulomatous Disease, X-Linked",
      "Cytochrome B-Negative Granulomatous Disease, Chronic, X-Linked",
      "Cytochrome B-Positive Granulomatous Disease, Chronic, X-Linked",
      "Granulomatous Disease, Chronic, X-Linked, Variant",
      "Chronic Granulomatous Disease, Atypical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A defect of leukocyte function in which phagocytic cells ingest but fail to digest bacteria, resulting in recurring bacterial infections with granuloma formation. When chronic granulomatous disease is caused by mutations in the CYBB gene, the condition is inherited in an X-linked recessive pattern. When chronic granulomatous disease is caused by CYBA, NCF1, NCF2, or NCF4 gene mutations, the condition is inherited in an autosomal recessive pattern.",
    "arabic_definition": "الورم الحبيبي المزمن (اختصارًا CGD) ويعرف أيضاً باسم \"متلازمة الجسور الجيدة\" و\"الاضطراب الحبيبي المزمن\" و\"متلازمة كيو\"\") هو مجموعة منوعة من الأمراض الوراثية تواجه فيها خلايا معينة في الجهاز المناعي صعوبة بتكوين مركبات الأكسجين (والأكثر أهمية الأكسيد الفائق الأساسي) المستخدمة لقتل بعض المُمْرِضَات التي تدخل الجسم. وهذا يؤدي إلى تشكّل حبيبات في العديد من أجهزة الجسم. (Chronic Granulomatous Disease)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006105.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "inherited-blood-coagulation-disorders",
    "term_en": "Inherited Blood Coagulation Disorders",
    "term_ar": "اعتلال خثري",
    "synonyms": [
      "Inherited Coagulation Disorders",
      "Coagulation Disorder, Inherited",
      "Inherited Coagulation Disorder",
      "Hereditary Blood Coagulation Disorders",
      "Hereditary Coagulation Disorders",
      "Coagulation Disorder, Hereditary",
      "Coagulation Disorders, Hereditary",
      "Hereditary Coagulation Disorder"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hemorrhagic and thrombotic disorders that occur as a consequence of inherited abnormalities in blood coagulation.",
    "arabic_definition": "اعتلال خثري أو كغلوبثي (بالإنجليزية Coagulopathy). هو مرض يتسبب في عدم قدرة الدم على التخثر، مما يؤدي إلى اضطرابات نزفية. (Inherited Blood Coagulation Disorders)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D025861.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dermoscopy",
    "term_en": "Dermoscopy",
    "term_ar": "منظار الجلد",
    "synonyms": [
      "Dermoscopies",
      "Epiluminescence Microscopy",
      "Epiluminescence Microscopies",
      "Microscopies, Epiluminescence",
      "Microscopy, Epiluminescence",
      "Dermatoscopy",
      "Dermatoscopies",
      "Skin Surface Microscopy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A noninvasive technique that enables direct microscopic examination of the surface and architecture of the SKIN.",
    "arabic_definition": "منظار الجلد أو الديرموسكوب (الإنجليزية: Dermatoscopy) هو عبارة عن أداة طبية تشتمل على عدسة مكبرة واحدة أو أكثر (عدسة مكبرة 10 أضعاف أو مجهر) ونظام إضاءة مخصص لمساعدة الطبيب (طبيب الأمراض الجلدية) أو البيطري على إجراء عمليات فحص أكثر دقة لآفات الجلد والأغشية المخاطية أو الزوائد أو لسطوح الأعضاء المصابة أو التي من المحتمل أن تكون مصابة بصفة عامة، للتمييز على سبيل المثال بين الأورام الميلانينية والشامات الميلانينية. لذلك فإن لهذه الأداة أهمية بالغة في التمييز بين الآفات الجلدية الحميدة والآفات الجلدية الخبيثة، بصفة خاصة في عملية تشخيص سرطان الجلد. (Dermoscopy)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046169.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myelography",
    "term_en": "Myelography",
    "term_ar": "تصوير النخاع",
    "synonyms": [
      "Myelographies",
      "Cisternography, Myelographic",
      "Myelographic Cisternography",
      "Cisternographies, Myelographic",
      "Myelographic Cisternographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "X-ray visualization of the spinal cord following injection of contrast medium into the spinal arachnoid space.",
    "arabic_definition": "تصوير النخاع: هو نوع من الفحص الشعاعي الذي يستخدم مادة ملونة اليود للكشف عن أمراض الحبل الشوكي بما في ذلك تشخيص موقع إصابة الحبل الشوكي، والأورام. (Myelography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009192.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urography",
    "term_en": "Urography",
    "term_ar": "صورة الحويضة",
    "synonyms": [
      "Urographies",
      "Urogram",
      "Urograms",
      "Pyelogram",
      "Pyelograms",
      "Pyelography",
      "Pyelographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiography of any part of the URINARY TRACT.",
    "arabic_definition": "صورة الحويضة(تُعرف أيضاً بتصوير الحويضة أو تصوير الجهاز البولي أو القناة البولية) هي نوع من التصوير للحوض الكلوي والحالب. تتضمن الأنواع: تصوير الحويضة الوريدية - حيث يتم إدخال محلول التباين من خلال الوريد إلى الدورة الدموية. (Urography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014567.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "portography",
    "term_en": "Portography",
    "term_ar": "تصوير الوريد البابي",
    "synonyms": [
      "Portographies",
      "Splenoportography",
      "Splenoportographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Examination of the portal circulation by the use of X-ray films after injection of radiopaque material.",
    "arabic_definition": "تصوير الوريد البابي أو تصوير وريد الباب أو التصوير البابي (الإنجليزية: Portography) هوَ تصوير شعاعي للوريد البابي بعد حَقنه بمادة تباين ذات كثافة إشعاعية.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011172.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "connectome",
    "term_en": "Connectome",
    "term_ar": "كونيكتوم",
    "synonyms": [
      "Connectomes",
      "Connectomics",
      "Connectomic",
      "Brain Connectomics",
      "Brain Connectomic",
      "Connectomic, Brain",
      "Connectomics, Brain",
      "Connectome Mapping"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A comprehensive map of the physical interconnections of an organism's neural networks. This modular organization of neuronal architecture is believed to underlie disease mechanisms and the biological development of the CENTRAL NERVOUS SYSTEM.",
    "arabic_definition": "الكونيكتوم هو الخريطة الشاملة للاتصالات العصبية في الدماغ، ويمكن اعتباره بمثابة «الرسم البياني لشبكة أسلاك» الدماغ. يتكون الجهاز العصبي لدى الكائن الحي من العصبونات التي تتواصل مع بعضها البعض عبر المشابك. (Connectome)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063132.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aortography",
    "term_en": "Aortography",
    "term_ar": "تصوير الأبهر",
    "synonyms": [
      "Aortographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiographic visualization of the aorta and its branches by injection of contrast media, using percutaneous puncture or catheterization procedures.",
    "arabic_definition": "تتضمن عملية تصوير الأبهر أو تصوير الوتين إدخال قسطرة في الأبهر وحقن مادة تباين أثناء تصوير الأبهر بالأشعة السينية. تُعرف هذه العملية باسم صورة/رسم الأبهر/الوتين. (Aortography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001027.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "electron-microscopy",
    "term_en": "Electron Microscopy",
    "term_ar": "مجهر إلكتروني",
    "synonyms": [
      "Electron microscope"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Microscopy using an electron beam, instead of light, to visualize the sample, thereby allowing much greater magnification. The interactions of ELECTRONS with specimens are used to provide information about the fine structure of that specimen. In TRANSMISSION ELECTRON MICROSCOPY the reactions of the electrons that are transmitted through the specimen are imaged. In SCANNING ELECTRON MICROSCOPY an electron beam falls at a non-normal angle on the specimen and the image is derived from the reactions occurring above the plane of the specimen.",
    "arabic_definition": "مِجْهَرٌ إِلِكتْرونِيّ (نسبة للإلكترون وليس للإلكترونيات) أو مجهر الإلكترونات أدقّ مجهر اختُرع حتى اليوم، يعتمده الفيزيائيون للنظر في داخل الخلية وله تطبيقات كثيرة. فحص الأشياء الدقيقة الحجم بواسطة المجهر الضوئي تتقيد بقوة التمييز لدى المجاهر الضوئية. (Electron Microscopy)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008854.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "functional-neuroimaging",
    "term_en": "Functional Neuroimaging",
    "term_ar": "تصوير عصبي وظيفي",
    "synonyms": [
      "Neuroimaging, Functional",
      "Functional Brain Imaging",
      "Brain Imaging, Functional",
      "Brain Imagings, Functional",
      "Functional Brain Imagings",
      "Imaging, Functional Brain",
      "Imagings, Functional Brain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Methods for visualizing REGIONAL BLOOD FLOW, metabolic, electrical, or other physiological activities in the CENTRAL NERVOUS SYSTEM using various imaging modalities.",
    "arabic_definition": "التصوير العصبي الوظيفي هو استخدام تقنيات التصوير العصبي في قياس جانب من وظائف الدماغ، غالبًا ما يترافق مع ملاحظة العلاقة بين نشاط مناطق معينة من الدماغ ووظائف ذهنية معينة وفهمها. اسُتخدم بشكل أساسي كأداة بحثية في علم الأعصاب المعرفي، وعلم النفس المعرفي، وعلم النفس العصبي وعلم الأعصاب الاجتماعي. (Functional Neuroimaging)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059907.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerebral-angiography",
    "term_en": "Cerebral Angiography",
    "term_ar": "تصوير وعائي دماغي",
    "synonyms": [
      "Angiography, Cerebral",
      "Angiographies, Cerebral",
      "Cerebral Angiographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiography of the vascular system of the brain after injection of a contrast medium.",
    "arabic_definition": "تصوير وعائي دماغي أو تصوير الأوعية الدماغية (الإنجليزية: Cerebral angiograph) هي شكل من تصوير الأوعية، حيثُ تساعد في تصوير الأوعية الدموية في وحول الدماغ، وبالتالي تسمح بالكشف عن الاضطرابات مثل التشوه الشرياني الوريدي وأم الدم. أُدخلت هذه التقنية عام 1927 بواسطة طبيب الأعصاب البرتغالي إيغاس مونيز في جامعة لشبونة، والذي ساعد أيضًا في تطوير ثوروتراست لاستعماله في هذا الإجراء التصويري. (Cerebral Angiography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002533.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fluorescence-microscopy",
    "term_en": "Fluorescence Microscopy",
    "term_ar": "مجهر فلوري",
    "synonyms": [
      "Fluorescence Microscopies",
      "Microscopies, Fluorescence",
      "Immunofluorescence Microscopy",
      "Immunofluorescence Microscopies",
      "Microscopies, Immunofluorescence",
      "Microscopy, Immunofluorescence",
      "Fluorescence microscope"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Microscopy of specimens stained with fluorescent dye (usually fluorescein isothiocyanate) or of naturally fluorescent materials, which emit light when exposed to ultraviolet or blue light. Immunofluorescence microscopy utilizes antibodies that are labeled with fluorescent dye.",
    "arabic_definition": "المجهر الفلوري أو (المجهر الفسفوري) (الإنجليزية: Fluorescent Microscope) هو مجهر ضوئي يستخدم في دراسة خصائص المواد العضوية وغير العضوية باستخدام ظاهرة الفلورية الفسفورية بدلا من أو إضافة إلى الانعكاس أو امتصاص. تشبه المجاهر الضوئية مع وجود إضافات عليها لتزيد من قدرتها على التكبير. (Fluorescence Microscopy)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008856.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "confocal-microscopy",
    "term_en": "Confocal Microscopy",
    "term_ar": "مجهر بؤري",
    "synonyms": [
      "Confocal Microscopies",
      "Microscopies, Confocal",
      "Microscopy, Confocal, Laser Scanning",
      "Confocal Laser Scanning Microscopy",
      "Confocal Microscopy, Scanning Laser",
      "Laser Scanning Confocal Microscopy",
      "Laser Microscopy",
      "Laser Microscopies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A light microscopic technique in which only a small spot is illuminated and observed at a time. An image is constructed through point-by-point scanning of the field in this manner. Light sources may be conventional or laser, and fluorescence or transmitted observations are possible.",
    "arabic_definition": "مجهر التطابق البؤري هو مجهر بصري يستخدم لزيادة تباين contrast الصور المجهرية أو من أجل الحصول على صور ثلاثية الأبعاد باستخدام ثقب مكاني spatial pinhole لإلغاء الضوء اللابؤري أو الإضاءة في العينة التي تكون أكثر بروزا من المستوي البؤري focal plane. توجد حاليا أنواع مختلفة من المجهر البؤري، ومن ضمنها ما يعمل بشعاع الليزر confocal laser scanning microscope. (Confocal Microscopy)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018613.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cryoelectron-microscopy",
    "term_en": "Cryoelectron Microscopy",
    "term_ar": "مجهر إلكتروني فائق البرودة",
    "synonyms": [
      "Cryoelectron Microscopies",
      "Microscopies, Cryoelectron",
      "Microscopy, Cryoelectron",
      "Cryo-electron Microscopy",
      "Cryo-electron Microscopies",
      "Microscopies, Cryo-electron",
      "Microscopy, Cryo-electron",
      "Electron Cryomicroscopy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Electron microscopy involving rapid freezing of the samples. The imaging of frozen-hydrated molecules and organelles permits the best possible resolution closest to the living state, free of chemical fixatives or stains.",
    "arabic_definition": "المجهر الإلكتروني فائق البرودة (الإنجليزية: Cryo-electron microscopy) (اختصاراً cryo-EM) هو نوع من أنواع المجهر الإلكتروني النافذ (TEM) والذي يشغّل بالتبريد العميق بواسطة النتروجين السائل عند درجات حرارة منخفضة جداً. يستخدم المجهر الإلكتروني فائق البرودة بشكل خاص في علم الأحياء البنيوي. (Cryoelectron Microscopy)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020285.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diagnostic-imaging",
    "term_en": "Diagnostic Imaging",
    "term_ar": "تصوير تشخيصي طبي",
    "synonyms": [
      "Imaging, Diagnostic",
      "Medical Imaging",
      "Imaging, Medical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any visual display of structural or functional patterns of organs or tissues for diagnostic evaluation. It includes measuring physiologic and metabolic responses to physical and chemical stimuli, as well as ultramicroscopy.",
    "arabic_definition": "يشير مصطلح التصوير التَّشخيصي الطبي إلى التقنيات والعمليات المستخدمة للحصول على صور للجسم البشري (أو أجزاء منه) للأغراض التشخيصية، العلاجية أو البحثية. وهو يعتبر فرع من التصوير البيولوجي الحيوي ويتعاون بشكل كبير مع علم الأشعة، التنظير الداخلي، التصوير الحراري. (Diagnostic Imaging)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003952.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thermography",
    "term_en": "Thermography",
    "term_ar": "تصوير حراري",
    "synonyms": [
      "Temperature Mapping",
      "Mappings, Temperature",
      "Mapping, Temperature",
      "Temperature Mappings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Imaging the temperatures in a material, or in the body or an organ. Imaging is based on self-emanating infrared radiation (HEAT WAVES), or on changes in properties of the material or tissue that vary with temperature, such as ELASTICITY; MAGNETIC FIELD; or LUMINESCENCE.",
    "arabic_definition": "التصوير الحراري هو نوع من أنواع التصوير الذي يستعمل الأشعة تحت الحمراء. آلة التصوير الحراري تكشف الضوء في نطاق الأشعة تحت الحمراء للطيف الكهرومغناطيسي (900-14000 نانومتر تقريبا أو 0.9-14 ميكرومتر) وينتج الصور لذلك الضوء. (Thermography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013817.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "echocardiography",
    "term_en": "Echocardiography",
    "term_ar": "تخطيط صدى القلب",
    "synonyms": [
      "Echocardiography, Transthoracic",
      "Transthoracic Echocardiography",
      "Echocardiography, Contrast",
      "Contrast Echocardiography",
      "Echocardiography, Cross-Sectional",
      "Cross-Sectional Echocardiography",
      "Echocardiography, M-Mode"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Ultrasonic recording of the size, motion, and composition of the heart and surrounding tissues. The standard approach is transthoracic.",
    "arabic_definition": "تخطيط صدى القلب أو فحص القلب التصواتي (الإنجليزية: Echocardiography) هو فحص للقلب باستخدام تقنية الموجات فوق الصوتية. يُعَد تخطيط صدى القلب من الفحوصات الطبية التصويرية غير الباضعة لحجرات القلب، ويتم التعرف خلال الفحص على قوة العضلة القلبية وعلى شكل وهيئة الصمامات القلبية، وما يعتريهما من أمراض.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004452.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pneumoencephalography",
    "term_en": "Pneumoencephalography",
    "term_ar": "تصوير الدماغ المحقون بالغاز",
    "synonyms": [
      "Pneumoencephalographies",
      "Cisternography, Pneumoencephalographic",
      "Pneumoencephalographic Cisternography",
      "Cisternographies, Pneumoencephalographic",
      "Pneumoencephalographic Cisternographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiographic visualization of the cerebral ventricles by injection of air or other gas.",
    "arabic_definition": "تصوير الدماغ المحقون بالغاز أو تصوير الدماغ الغازي (الإنجليزية: Pneumoencephalography) ويُعرف اختصارًا PEG، هو إجراء طبي كان شائعاً، حيثُ يُسحب فيه مُعظم السائل الدماغي الشوكي من حول الدماغ، عن طريق بزل قطني ويستبدل بالهواء أو الأكسجين أو الهيليوم، وذلك لجعل ظهور هياكل الدماغ أكثر وضوحًا في صورة الأشعة السينية. اشتُقَ من الطريقة البدائية في تصوير البُطينات، حيثُ كان يُحقن الهواء من خلال فُتحات محفورة في الجمجمة.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011011.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photogrammetry",
    "term_en": "Photogrammetry",
    "term_ar": "مساحة تصويرية",
    "synonyms": [
      "Photogrammetries",
      "Stereophotogrammetry",
      "Stereophotogrammetries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Making measurements by the use of stereoscopic photographs.",
    "arabic_definition": "المِساحة التصويرية علم وفن تكنولوجيا الحصول على معلومات كميّة ونوعية عن المعالم الطبيعية والصناعية لمنطقةً ما بواسطة صور فوتوغرافية أو غير فوتوغرافية لهذه المنطقة. وتختلف المساحة التصويرية عن المساحة الأرضية في أن المساحة الأرضية تتعامل مع الطبيعة بشكل مباشر، أمّا المساحة التصويرية فيتم الحصول على المعلومات والقياس من الصور بدون احتكاك مباشر مع الطبيعة في أغلب مراحل العمل. (Photogrammetry)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010780.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "angiocardiography",
    "term_en": "Angiocardiography",
    "term_ar": "قسطرة تاجية",
    "synonyms": [
      "Angiocardiographies",
      "Coronary catheterization"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiography of the heart and great vessels after injection of a contrast medium.",
    "arabic_definition": "القسطرة التاجية أو القسطرة الإكليلية أو القسطرة القلبية (الإنجليزية: Coronary catheterization) هي نوع من الإجراءات طفيفة التوغل التي تهدف إلى دخول الدوران التاجي والأجواف القلبية المملوءة بالدم باستخدام القسطرة. يمكن تنفيذ هذا النوع من الإجراءات لغايات تشخيصية فقط أو تشخيصية وعلاجية معًا. (Angiocardiography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000790.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cholangiography",
    "term_en": "Cholangiography",
    "term_ar": "تصوير الأقنية الصفراوية",
    "synonyms": [
      "Cholangiographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An imaging test of the BILIARY TRACT in which a contrast dye (RADIOPAQUE MEDIA) is injected into the BILE DUCT and x-ray pictures are taken.",
    "arabic_definition": "تصوير الأقنية الصفراوية(1) هي تقنية تصويرٍ طبي لقناة الصفراء (تُعرف أيضًا بالجهاز الصفراوي) بواسطة الأشعة السينية وحقن مادةٍ تباين. (Cholangiography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002758.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stroboscopy",
    "term_en": "Stroboscopy",
    "term_ar": "مصطربة",
    "synonyms": [
      "Stroboscope"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The observation of successive phases of MOVEMENT by use of a flashing light.",
    "arabic_definition": "المصباح الرعاش أو المنبع الوماض أو المصطربة أو الستروبوسكوب، جهاز كهربائي يستعمل لقياس سرعة الدوران والتردد وأيضا الزمن الدوري للأجسام ذات الحركة الدورانية أو الترددية أو التذبذبية أو الاهتزازية مثل النواس البسيط أو نواس ساعة الحائط. (Stroboscopy)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049489.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "photomicrography",
    "term_en": "Photomicrography",
    "term_ar": "صورة مجهرية",
    "synonyms": [
      "Photomicrographies",
      "Micrograph"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Photography of objects viewed under a microscope using ordinary photographic methods.",
    "arabic_definition": "الصورة المجهرية هي صورة تُلتقط فوتوغرافيًا أو رقميًا باستخدام مجهر أو جهاز مماثل، بهدف إظهار صورة مكبّرة لجسم ما. يختلف ذلك عن الصورة العيانية أو الصورة الضوئية العيانية، وهي صورة تُلتقط أيضًا باستخدام المجهر، ولكن بتكبير طفيف فحسب، يقل عادةً عن عشرة أضعاف. (Photomicrography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010784.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arthrography",
    "term_en": "Arthrography",
    "term_ar": "تصوير المفاصل",
    "synonyms": [
      "Arthrographies",
      "Arthrogram"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Roentgenography of a joint, usually after injection of either positive or negative contrast medium.",
    "arabic_definition": "تصوير المفصل هو نوع من التصوير الطبي يستخدم في تشخيص وتقييم حالات آلام المفاصل. في حين أن التصوير المفصلي يستخدم بشكل شائع لفحص مفاصل الركبة والكتف، فإنه يمكن استخدامه أيضًا للنظر في المفاصل الأخرى، مثل الرسغ أو الكاحل أو الورك أو الكوع.، و يتم استخدام هذه التقنية في الصدمات والحوادث أو في الحالات التي لم تستجب للعلاج الوقائي في المفاصل وفي تقديم معلومات تشريحية قيمة حول المفاصل. (Arthrography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001175.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sentinel-lymph-node",
    "term_en": "Sentinel Lymph Node",
    "term_ar": "عقدة لمفاوية حارسة",
    "synonyms": [
      "Lymph Node, Sentinel",
      "Lymph Nodes, Sentinel",
      "Sentinel Lymph Nodes",
      "Sentinal Node",
      "Node, Sentinal",
      "Nodes, Sentinal",
      "Sentinal Nodes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "First lymph node to receive drainage from the primary tumor. SENTINEL LYMPH NODE BIOPSY is performed to determine early METASTASIS status because cancer cells may appear first in the sentinel node.",
    "arabic_definition": "العقدة اللمفاوية الحارسة (الخافرة) هي العقدة اللمفاوية أو مجموعة العقد الأولى الافتراضية التي تستنزف الخلايا السرطانية. في حالة الانتشار السرطاني المنتظم، يُفترض أن تكون العقد اللمفاوية الحارسة الأعضاء المستهدفة الأولى عند انبثاث الخلايا السرطانية من الورم. (Sentinel Lymph Node)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071036.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "molecular-imaging",
    "term_en": "Molecular Imaging",
    "term_ar": "تصوير جزيئي",
    "synonyms": [
      "Imaging, Molecular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The use of molecularly targeted imaging probes to localize and/or monitor biochemical and cellular processes via various imaging modalities that include RADIONUCLIDE IMAGING; ULTRASONOGRAPHY; MAGNETIC RESONANCE IMAGING; FLUORESCENCE IMAGING; and MICROSCOPY.",
    "arabic_definition": "التصوير الجزيئي هو أحد مجالات التصوير التشخيصي الطبي التي تعنى بتصوير الجزيئات الهامة طبيًا داخل المرضى الأحياء. يعاكس هذا الوسائل التقليدية المستخدمة في تحصيل المعلومات الجزيئية من العينات النسيجية المحفوظة، مثل علم الأنسجة. (Molecular Imaging)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057054.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuroimaging",
    "term_en": "Neuroimaging",
    "term_ar": "تصوير عصبي",
    "synonyms": [
      "Brain Imaging",
      "Imaging, Brain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Non-invasive methods of visualizing the CENTRAL NERVOUS SYSTEM, especially the brain, by various imaging modalities.",
    "arabic_definition": "التصوير العصبي أو تصوير الدماغ هو استخدام تقنيات متعددة بشكل مباشرة أو غير مباشر في التصوير التشخيصي لهياكل، ووظيفة، وعلاجات الجهاز العصبي، وهو مجال جديد نسبيًا في الطب والعلوم العصبية وعلم النفس، ويُعرف الأطباء المتخصصين في تنفيذ وتفسير التصوير العصبي ضمن الإطار السريري بأطباء أشعة الأعصاب. ينقسم التصوير العصبي إلى فئتين رئيسيتين: التصوير التركيب البنائي، ويتعامل مع تركيبات الجهاز العصبي، وتشخيص الأمراض والإصابات المخية العيانية داخل الجمجمة (مثل الأوارم). (Neuroimaging)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059906.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "optical-tomography",
    "term_en": "Optical Tomography",
    "term_ar": "تصوير مقطعي بصري",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Projection of near-IR light (INFRARED RAYS), in the 700-1000 nm region, across an object in parallel beams to an array of sensitive photodetectors. This is repeated at various angles and a mathematical reconstruction provides three dimensional MEDICAL IMAGING of tissues. Based on the relative transparency of tissues to this spectra, it has been used to monitor local oxygenation, brain and joints.",
    "arabic_definition": "التصوير المقطعي البصري هو شكل من أشكال التصوير الطبقي المحوري المحوسب والذي يُنشئ نموذجاً رقمياً ثلاثي الأبعاد لجسم ما عبر إعادة تركيب صور تم الحصول عليها من ضوء تم إرساله وبعثرته خلال هذا الجسم. يستخدم التصوير المقطعي البصري غالباً في أبحاث طرائق التصوير الطبي. (Optical Tomography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041622.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transillumination",
    "term_en": "Transillumination",
    "term_ar": "تضوء",
    "synonyms": [
      "Transilluminations",
      "Diaphanoscopy",
      "Diaphanoscopies",
      "Diaphanography",
      "Diaphanographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Passage of light through body tissues or cavities for examination of internal structures.",
    "arabic_definition": "التَضَوُّء (الإنجليزية: Transillumination) هو نفاذ الضوء خلال أنسجة الجسم كنفاذه خلال الاصابع حيث يتجلى بوهج أحمر إذ يمتص اليحمور (Haemoglobin)سائر الألوان ماعدا الأحمر، ويستخدم التضوء أطباء الأطفال ليكتشفوا من خلاله وجود موه الرأس (Hydrocephalus).",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014172.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endosonography",
    "term_en": "Endosonography",
    "term_ar": "تنظير بالموجات فوق الصوتية",
    "synonyms": [
      "Endosonographies",
      "Endoscopy, Echo",
      "Echo Endoscopies",
      "Endoscopies, Echo",
      "Echo-Endoscopy",
      "Endoscopy, Ultrasonic",
      "Endoscopies, Ultrasonic",
      "Ultrasonic Endoscopies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Ultrasonography of internal organs using an ultrasound transducer sometimes mounted on a fiberoptic endoscope. In endosonography the transducer converts electronic signals into acoustic pulses or continuous waves and acts also as a receiver to detect reflected pulses from within the organ. An audiovisual-electronic interface converts the detected or processed echo signals, which pass through the electronics of the instrument, into a form that the technologist can evaluate. The procedure should not be confused with ENDOSCOPY which employs a special instrument called an endoscope. The endo- of endosonography refers to the examination of tissue within hollow organs, with reference to the usual ultrasonography procedure which is performed externally or transcutaneously.",
    "arabic_definition": "تنظير بالموجات فوق الصوتية (الإنجليزية: Endoscopic ultrasound) هو إجراءٌ طبي يُستعمل فيه التنظير الداخلي مع التصوير بالموجات فوق الصوتية للحصول على صورٍ للأعضاء الداخلية في الصدر والبطن والقولون. يُمكن أن تستخدم لرؤية جدران هذه الأعضاء أو لإلقاء نظرة قريبة عليها. (Endosonography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019160.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brain-mapping",
    "term_en": "Brain Mapping",
    "term_ar": "رسم خرائط الدماغ",
    "synonyms": [
      "Mapping, Brain",
      "Brain Electrical Activity Mapping",
      "Topographic Brain Mapping",
      "Brain Mapping, Topographic",
      "Mapping, Topographic Brain",
      "Functional Cerebral Localization",
      "Functional Cerebral Localizations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Imaging techniques used to colocalize sites of brain functions or physiological activity with brain structures.",
    "arabic_definition": "رسم خرائط الدماغ أو تخريط الدماغ (الإنجليزية: Brain mapping) هو مجموعة من تقنيات العلوم العصبية التي تقوم على أساس رسم الخرائط (البيولوجية) الكمية، أو خصائص التمثيل المكاني للدماغ، بما يؤدي لإمكانية رسم الخرائط. وفقا للتعريف الذي وُضع في عام 2013 من قِبل جمعية رسم الخرائط الدماغية والعلاج ( Society for Brain Mapping and Therapeutics)، فقد تم تحديد رسم خرائط الدماغ على وجه دقيق، فباختصار هو دراسة تشريح ووظيفة الدماغ والحبل الشوكي من خلال استخدام التصوير العصبي، والمناعة الكيميائية، والجينات الجزيئية وعلم الوراثة، والخلايا الجذعية والبيولوجيا الخلوية، والهندسة، والفيزيولوجيا العصبية وتكنولوجيا النانو.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001931.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sialography",
    "term_en": "Sialography",
    "term_ar": "تصوير القناة اللعابية",
    "synonyms": [
      "Sialographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiography of the SALIVARY GLANDS or ducts following injection of contrast medium.",
    "arabic_definition": "التصوير اللعابيّ (يُطلق عليه أيضًا التصوير الشعاعي ) هو الفحص الشعاعي للغدد اللعابية. عادة ما ينطوي على حقن كمية صغيرة من وسيط التباين في القناة اللعابية لغدة واحدة، متبوعًا بإسقاط روتيني للأشعة السينية. (Sialography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012796.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xeromammography",
    "term_en": "Xeromammography",
    "term_ar": "تصوير شعاعي جاف للثدي",
    "synonyms": [
      "Breast Xeroradiography",
      "Xeroradiography, Breast"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Xeroradiography of the breast.",
    "arabic_definition": "التَّصوير الشُّعاعِيُّ الجافُّ للثَّدْي هي طريقةٌ كهروضوئية لتسجيل صورةٍ بالأشعة السينية على صفيحةٍ معدنية مطلية (مُغلفة)، وذلك باستخدام أشعة فوتونية مُنخفضة الطاقة، ووقت تعريضٍ طويل، ومحاليل إظهار كيميائية جافة. يُعد التصوير الشعاعي الجاف للثدي نوعًا من التصوير الشعاعي الجاف (الإنجليزية: Xeroradiography). (Xeromammography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014984.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "echoencephalography",
    "term_en": "Echoencephalography",
    "term_ar": "تخطيط صدى الدماغ",
    "synonyms": [
      "Echoencephalographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Use of reflected ultrasound in the diagnosis of intracranial pathologic processes.",
    "arabic_definition": "تخطيط صدى الدماغ (الإنجليزية: Echoencephalography) هو تَفصيل أسطح الدماغ باستعمال الموجات فوق الصوتية.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004453.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phlebography",
    "term_en": "Phlebography",
    "term_ar": "تصوير الوريد",
    "synonyms": [
      "Phlebographies",
      "Venography",
      "Venographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiographic visualization or recording of a vein after the injection of contrast medium.",
    "arabic_definition": "تصوير الوريد (الإنجليزية: Venography) هي طريقة لتصوير الأوردة بالأشعة السينية، حيث يتم التصوير بطريق فينوغرافي بعد حقن مادة صابغة خاصة في نقي العظم أو الأوردة، حيث يتم حقن المادة الصابغة باستمرار عبر القثطرة، وعليه تكون طريقة فينوغرافي هي طريقة تدخلية. تدخل القثطرة ويقوم الطبيب بتحريكها إلى المكان المطلوب مارا عبر الجسم ضمن الجهاز الدوراني. (Phlebography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010690.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xeroradiography",
    "term_en": "Xeroradiography",
    "term_ar": "تصوير شعاعي جاف",
    "synonyms": [
      "Xeroradiographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A photoelectric method of recording an X-ray image on a coated metal plate, using low-energy photon beams, long exposure time and dry chemical developers.",
    "arabic_definition": "التَّصوير الشُّعاعِيُّ الجاف هو نوعٌ من التصوير بالأشعة السينية، حيث تسجلُ فيه صورة الجسم على ورقٍ بدلًا من فيلم. تُستخدم في هذه التقنية صفيحةٌ من السيلينيوم تستندُ على طبقةٍ رقيقةٍ من أكسيد الألومنيوم، حيث تُشحَنُ هذه الصفيحة بانتظامٍ عبر تمريرها أمام شبكة التفريغ التاجي. (Xeroradiography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014986.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "defecography",
    "term_en": "Defecography",
    "term_ar": "تصوير إشعاعي تبرزي",
    "synonyms": [
      "Defecographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiographic examination of the process of defecation after the instillation of a CONTRAST MEDIA into the rectum.",
    "arabic_definition": "تصوير إشعاعي تبرزي (الاسم العلمي: Defecography) هو الفحص بالتصوير الإشعاعي لعملية ووظيفة إفراغ المستقيم من محتواه، وكذلك رد فعل الحوض الأصغر (الذي يحتوي المثانة والمستقيم) والتي تتم في ظروف أقرب ما يمكن إلى عملية التبرز الطبيعي. يتم إدخال مادة عاكسة للاشعة السينية (مانعة لاختراق الضوء، تشبه في تكوينها للبراز، من خلال فتحة الشرج بواسطة حقنة تصل إلى نحو 250 إلى 300 مل.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019841.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphography",
    "term_en": "Lymphography",
    "term_ar": "صورة الجهاز اللمفي",
    "synonyms": [
      "Lymphographies",
      "Lymphangiography",
      "Lymphangiographies",
      "Lymphogram"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiographic study of the lymphatic system following injection of dye or contrast medium.",
    "arabic_definition": "التصوير اللمفي أو تصوير الأوعية اللمفية (الإنجليزية: Lymphography) هو تصوير تشخيصي طبي تستخدم فيه مادة مظللة، وتُؤخذ بعد ذلك أشعة سينية لتصوّر تركيب الجهاز اللمفاوي، بما في ذلك الغدد الليمفاوية والقنوات الليمفاوية والأنسجة اللمفاوية والشعيرات الدموية الليمفاوية والأوعية الليمفاوية. تصوير الأوعية اللمفية (الإنجليزية: Lymphangiography) هو نفس الإجراء، ويستخدم فقط لتصوير الأوعية الليمفاوية.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008220.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystography",
    "term_en": "Cystography",
    "term_ar": "تصوير المثانة",
    "synonyms": [
      "Cystographies",
      "Cystogram",
      "Cystograms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiography of the URINARY BLADDER.",
    "arabic_definition": "في علم الأشعة وطب الجهاز البولي، تصوير المثانة (cystography) أو صورة المثانة (cystogram) هو إجراء يستخدم لتصوير المثانة البولية وتقييم مشاكلها الطبية. باستخدام قسطرة بولية، يتم غرس مادة التباين الإشعاعي في المثانة، ويتم إجراء التصوير بالأشعة السينية.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000070621.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cholecystography",
    "term_en": "Cholecystography",
    "term_ar": "تصوير المرارة",
    "synonyms": [
      "Cholecystographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiography of the gallbladder after ingestion of a contrast medium.",
    "arabic_definition": "التصوير المقطعي للمرارة عن طريق الفم (الإنجليزية: Oral cholecystography (OCG)) هو إجراء إشعاعي يُستخدم لتصوير المرارة والقنوات الصفراوية. تم تطويره عام 1924 على يد الجراحين الأمريكيين إيفارتس أمبروز غراهام وهنري كول.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002765.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radioimmunodetection",
    "term_en": "Radioimmunodetection",
    "term_ar": "كشف مناعي إشعاعي",
    "synonyms": [
      "Radioimmunodetections",
      "Radioimmunoimaging",
      "Radioimmunoimagings",
      "Immunoscintigraphy, Radiolabeled",
      "Immunoscintigraphy, Radiolabelled",
      "Immunoscintigraphies, Radiolabelled",
      "Radiolabelled Immunoscintigraphies",
      "Radiolabeled Immunoscintigraphy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Use of radiolabeled antibodies for diagnostic imaging of neoplasms. Antitumor antibodies are labeled with diverse radionuclides including iodine-131, iodine-123, indium-111, or technetium-99m and injected into the patient. Images are obtained by a scintillation camera.",
    "arabic_definition": "الكشف المناعي الإشعاعي أو الكشف المناعي الشعاعي (الإنجليزية: Radioimmunodetection) هي تقنية تصوير، تستعمل أجسامًا مُضادة موسومة شُعاعيًا. أي تستبدل في اجسام مضادة معينة بعض الذرات بذرات لنظير مشع بحيث يمكن رؤيته بجهاز التصوير.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016719.html",
        "accessedAt": "2026-11-21"
      }
    ]
  }
];
