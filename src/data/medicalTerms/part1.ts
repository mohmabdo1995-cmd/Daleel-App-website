// Auto-curated verified medical terms (NIH NLM MeSH 2026 + verified bilingual medical entries) - Part 1
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

export const MEDICAL_TERMS_PART_1: RawExpandedMedicalTerm[] = [
  {
    "id": "glomerulus",
    "term_en": "Glomerulus",
    "term_ar": "الكُبيبة الكلوية",
    "synonyms": [
      "Kidney Glomerulus",
      "Renal glomerulus",
      "Malpighian tuft",
      "الكبيبة"
    ],
    "pronunciation": "gloh-MAIR-yoo-lus",
    "ipa": "/ɡləˈmɛr.jʊ.ləs/",
    "english_definition": "A tuft of convoluted filtering capillaries situated at the beginning of each nephron inside Bowman capsule in the renal cortex, responsible for the initial ultrafiltration of blood plasma to form urine filtrate.",
    "arabic_definition": "شبكة من الشعيرات الدموية المتشابكة تقع في مقدمة الوحدة الأنبوبية الكلوية داخل محفظة بومان (Glomerulus)، وتقوم بالمحطة الأولى لترشيح بلازما الدم لتكوين الرشاحة الكبيبية تمهيداً لإنتاج البول.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Kidney Glomerulus",
        "url": "https://id.nlm.nih.gov/mesh/D007678.html",
        "accessedAt": "2026-11-21"
      },
      {
        "name": "NCI Thesaurus – Glomerulus",
        "url": "https://evsexplore.semantics.cancer.gov/evsexplore/concept/ncit/C13250",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "encephalopathy",
    "term_en": "Encephalopathy",
    "term_ar": "اعتلال الدماغ",
    "synonyms": [
      "Brain disorder",
      "Cerebral encephalopathy",
      "الاعتلال الدماغي"
    ],
    "pronunciation": "en-SEF-uh-LOP-uh-thee",
    "ipa": "/ɛnˌsɛf.əˈlɒp.ə.θi/",
    "english_definition": "Any diffuse disorder or pathologic process altering brain structure or function, arising from metabolic, toxic, infectious, hypoxic, hepatic, or degenerative causes and manifesting with altered mental status or neurologic deficits.",
    "arabic_definition": "مصطلح سريري يصف أي اضطراب أو خلل وظيفي أو بنيوي واسع النطاق يصيب الدماغ (Encephalopathy) نتيجة أسباب استقلابية أو سمية أو كبدية أو نقص أكسجة أو عدوى، ويؤدي إلى تغيّر الوعي أو الأداء العصبي.",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NCI Thesaurus – Encephalopathy",
        "url": "https://evsexplore.semantics.cancer.gov/evsexplore/concept/ncit/C26920",
        "accessedAt": "2026-11-21"
      },
      {
        "name": "NLM MeSH – Brain Diseases",
        "url": "https://id.nlm.nih.gov/mesh/D001927.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nephrolithiasis",
    "term_en": "Nephrolithiasis",
    "term_ar": "تحصّي الكلية (حصى الكلى)",
    "synonyms": [
      "Kidney stones",
      "Renal calculi",
      "Kidney Calculi",
      "حصاة كلوية"
    ],
    "pronunciation": "NEF-roh-lih-THY-uh-sis",
    "ipa": "/ˌnɛf.roʊ.lɪˈθaɪ.ə.sɪs/",
    "english_definition": "The formation of crystalline mineral calculi within the renal pelvis or calyces—most commonly composed of calcium oxalate, uric acid, or struvite—often causing severe renal colic, hematuria, or urinary obstruction.",
    "arabic_definition": "تكوّن حصيات معدنية صلبة داخل حويضة الكلية أو كؤوسها (Nephrolithiasis) نتيجة تبلور أملاح البول مثل أوكسالات الكالسيوم أو حمض اليوريك، وقد يسبب مغصاً كلوياً حاداً أو بيلة دموية أو انسداداً بولياً.",
    "specialty": "Nephrology",
    "sources": [
      {
        "name": "NLM MeSH – Kidney Calculi",
        "url": "https://id.nlm.nih.gov/mesh/D007669.html",
        "accessedAt": "2026-11-21"
      },
      {
        "name": "NLM MeSH – Nephrolithiasis",
        "url": "https://id.nlm.nih.gov/mesh/D053040.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "histopathology",
    "term_en": "Histopathology",
    "term_ar": "علم أمراض الأنسجة",
    "synonyms": [
      "Histopathologic Examination",
      "Tissue pathology",
      "الباثولوجيا النسيجية"
    ],
    "pronunciation": "HIS-toh-puh-THOL-uh-jee",
    "ipa": "/ˌhɪs.toʊ.pəˈθɒl.ə.dʒi/",
    "english_definition": "The branch of pathology focused on microscopic examination of stained tissue biopsies or surgical specimens to detect cellular injury, inflammation, dysplasia, and neoplastic disease.",
    "arabic_definition": "فرع من علم الأمراض يُعنى بالفحص المجهري الدقيق للعينات والخزعات النسيجية المصبوغة (Histopathology) لاكتشاف التغيرات المرضية والالتهابات والأورام وتحديد طبيعتها بدقة تشخيصية.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NCI Thesaurus – Histopathologic Examination",
        "url": "https://evsexplore.semantics.cancer.gov/evsexplore/concept/ncit/C18190",
        "accessedAt": "2026-11-21"
      },
      {
        "name": "NLM MeSH – Surgical Pathology",
        "url": "https://id.nlm.nih.gov/mesh/D010658.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antacids",
    "term_en": "Antacids",
    "term_ar": "مضاد الحموضة",
    "synonyms": [
      "Antacid",
      "Alkalinizing Agent",
      "Agent, Alkalinizing",
      "Alkalinizing Agents",
      "Agents, Alkalinizing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Substances that counteract or neutralize acidity of the GASTROINTESTINAL TRACT.",
    "arabic_definition": "مضادات الحموضة من القواعد الضعيفة التي لها القابلية على التفاعل مع الحامض الموجود في المعدة لتكوين الماء والملح وبذلك تقلل من حموضة المعدة بسبب أن إنزيم الببسين يكون غير نشط عندما يكون ph أعلى من 4. إن مضادات الحموضة تقوم بمعادلة حمض المعدة، حيث إن زيادة الحامض تؤدي إلى إرسال إشارت إلى الجهاز المركزي العصبي فيحدث الإحساس بالألم، وهذه العملية تحدث عندما تكون هذه الأعصاب مكشوفة وغير مغطاة. (Antacids)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000863.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colistin",
    "term_en": "Colistin",
    "term_ar": "كوليستين",
    "synonyms": [
      "Colimycin",
      "Colisticin",
      "Polymyxin E",
      "Colistin Sulfate",
      "Sulfate, Colistin",
      "Totazina",
      "Coly-Mycin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cyclic polypeptide antibiotic from Bacillus colistinus. It is composed of Polymyxins E1 and E2 (or Colistins A, B, and C) which act as detergents on cell membranes. Colistin is less toxic than Polymyxin B, but otherwise similar; the methanesulfonate is used orally.",
    "arabic_definition": "الكوليستين (الإنجليزية: Colistin) شائع باسم: كوليستين سلفوميثان، كوليستيميثات الصوديوم، ويعرف أيضًا باسم بوليميكسين E، يستخدم كملاذ أخير للعدوى الناتجة من البكتيريا سالبة الغرام المقاومة للأدوية كمضاد حيوي لعلاج الالتهابات البكتيرية التي تسببها البكتيريا سالبة الغرام والتي ينتج منها التهاب رئوي. كوليستين هو مزيج من ببتيدات حلقية من كوليستين أ وب وينتمي إلى فئة المضادات الحيوية متعددة بولي ببتيد المعروفة باسم بوليمكسينات.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003091.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flavins",
    "term_en": "Flavins",
    "term_ar": "مجموعة الفلافين",
    "synonyms": [
      "Flavin group"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Derivatives of the dimethylisoalloxazine (7,8-dimethylbenzo[g]pteridine-2,4(3H,10H)-dione) skeleton. Flavin derivatives serve an electron transfer function as ENZYME COFACTORS in FLAVOPROTEINS.",
    "arabic_definition": "الفلافين (في اللاتينية فلافوس، وتعني الأصفر) هو الاسم الشائع لمجموعة من المركبات العضوية المشتقة من البتيريدين، وتتكون من ثلاثية حلقات غير المتجانسة لمركب الإيزو آلوكسازين. المصدر الكيميائي الحيوي هو فيتامين الريبوفلافين. (Flavins)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005415.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "miosis",
    "term_en": "Miosis",
    "term_ar": "تقبض الحدقة",
    "synonyms": [
      "Mioses",
      "Constricted Pupil",
      "Constricted Pupils",
      "Pupil, Constricted",
      "Pupils, Constricted",
      "Miosis, Persistent",
      "Mioses, Persistent",
      "Persistent Mioses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pupillary constriction. This may result from congenital absence of the dilatator pupillary muscle, defective sympathetic innervation, or irritation of the CONJUNCTIVA or CORNEA.",
    "arabic_definition": "تقبض الحدقة (الإنجليزية: myosis) أو انقباض حدقة العين إلى أقل من أو يساوي إلى اثنين ملليمتر وهي استجابة طبيعية للزيادة في الضوء، ويمكن أيضا أن تكون مرتبطة مع بعض الامرض، كالتعرض للإشعاع الميكروويف، وبعض المخدرات، خصوصا الأفيونيات، حيث ان التحفيز اللإرادي للعضلة العاصرة الحدقية يقلل من انفتاح الحدقة. وهذا يشار إليه بانقباض أو ضيق الحدقة. (Miosis)",
    "specialty": "Neurology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015877.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "motilin",
    "term_en": "Motilin",
    "term_ar": "موتيلين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A peptide of about 22-amino acids isolated from the DUODENUM. At low pH it inhibits gastric motor activity, whereas at high pH it has a stimulating effect.",
    "arabic_definition": "الموتيلين هو هرمون ببتيدي يتكون من 22 حمضًا أمينيًا من عائلة الموتيلين، والذي يتم ترميزه في البشر بواسطة جين MLN. يتم إفراز الموتيلين بواسطة الخلايا الصماء يشار إليها أيضًا باسم الخلايا M، أوالخلايا الدقيقة الموجودة في بقع باير والتي توجد بكثرة في جيوب الأمعاء الدقيقة، وخاصة في الاثني عشر والصائم. يتم إطلاقه في الدورة الدموية العامة لدى البشر على فترات تبلغ حوالي 100 دقيقة أثناء الحالة بين الهضم، وهو العامل الأكثر أهمية في التحكم في الانقباضات المهاجرة بين الهضم، كما أنه يحفز الإطلاق الداخلي للبنكرياس الصماء. (Motilin)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009037.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vomiting",
    "term_en": "Vomiting",
    "term_ar": "تقيؤ",
    "synonyms": [
      "Emesis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The forcible expulsion of the contents of the STOMACH through the MOUTH.",
    "arabic_definition": "القيء أو قياء (المعروف أيضا باسم التقيؤ) هو الطرد القسري القوي لمحتويات معدة المرء عن طريق الفم وأحيانا الأنف. يمكن أن يكون القيء نتيجة لأمراض مثل التسمم الغذائي، التهاب المعدة والأمعاء، التهاب المعدة، الحمل، دوار الحركة، أو الخمار؛ أو يمكن أن يكون تأثيرا لاحقا لأمراض مثل أورام المخ، ارتفاع الضغط داخل الجمجمة، أو التعرض المفرط للإشعاع المؤين. (Vomiting)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014839.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hormones",
    "term_en": "Hormones",
    "term_ar": "هرمون",
    "synonyms": [
      "Hormone",
      "Hormone Receptor Agonists",
      "Agonists, Hormone Receptor",
      "Receptor Agonists, Hormone"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chemical substances having a specific regulatory effect on the activity of a certain organ or organs. The term was originally applied to substances secreted by various ENDOCRINE GLANDS and transported in the bloodstream to the target organs. It is sometimes extended to include those substances that are not produced by the endocrine glands but that have similar effects.",
    "arabic_definition": "الهرمون أو الحاثَّة هو أي عضو من فئة جزيئات الإشارة، والذي تنتجه الغدد في الكائنات مُتعدِّدة الخلايا، والذي يُنْقَل عن طريق جهاز الدّوران لاستهداف الأعضاء البعيدة، ولتنظيم وظائف الأعضاء والسّلوك. للهرمونات تراكيب كيميائيّة متنوعة، وتتكوّن بشكل رئيسيّ من ثلاث فئات: ايكوسانويدات، والستيرويدات، ومشتقات الحمض الأميني/ البروتين (الأمينات، والببتيدات، والبروتينات). (Hormones)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006728.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastrins",
    "term_en": "Gastrins",
    "term_ar": "غاسترين",
    "synonyms": [
      "Gastrin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gastrointestinal peptide hormones that excite the secretion of GASTRIC JUICE. They may also occur in the central nervous system where they are presumed to be neurotransmitters.",
    "arabic_definition": "الغاسترين أو المَعِدين هو هرمون ببتيدي يحفز إفراز العصارة الهضمية (حمض الهيدروكلوريك) في خلايا المعدة الجدارية ويساعد في حركية المعدة. يفرز هذا الهرمون من خلايا G في فتحة البواب في المعدة وفي الاثني عشر والبنكرياس. (Gastrins)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005755.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mitogens",
    "term_en": "Mitogens",
    "term_ar": "ميتوجين",
    "synonyms": [
      "Mitogen",
      "Phytomitogens",
      "Phytomitogen"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Substances that stimulate mitosis and lymphocyte transformation. They include not only substances associated with LECTINS, but also substances from streptococci (associated with streptolysin S) and from strains of alpha-toxin-producing staphylococci. (Stedman, 25th ed)",
    "arabic_definition": "محدث التفتل أو المُفتِّل أو الميتوجين (الإنجليزية: Mitogen) هو مادة كيميائية (عادة ما تكون بروتينا) تعمل على تحفز الخلية على بدء الانقسام الخلوي: الانقسام المتساوي. حدوث التفتل هو المصطلح الذي يطلق على عملية تحريض (إطلاق) الانقسام المتساوي، والتي تتم عادة عن طريق الميتوجين. (Mitogens)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008934.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "inhibins",
    "term_en": "Inhibins",
    "term_ar": "الأكتيفين والإنهيبين",
    "synonyms": [
      "Inhibin",
      "Inhibins, Female",
      "Female Inhibins",
      "Inhibin-F",
      "Ovarian Inhibin",
      "Inhibin, Ovarian",
      "Female Inhibin",
      "Inhibin, Female"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Glycoproteins that inhibit pituitary FOLLICLE STIMULATING HORMONE secretion. Inhibins are secreted by the Sertoli cells of the testes, the granulosa cells of the ovarian follicles, the placenta, and other tissues. Inhibins and ACTIVINS are modulators of FOLLICLE STIMULATING HORMONE secretions; both groups belong to the TGF-beta superfamily, as the TRANSFORMING GROWTH FACTOR BETA. Inhibins consist of a disulfide-linked heterodimer with a unique alpha linked to either a beta A or a beta B subunit to form inhibin A or inhibin B, respectively",
    "arabic_definition": "الأكتيفين والإنهيبين هما مركبان بروتينان مرتبطان ارتباطًا وثيقًا ولهما تأثيرًا بيولوجيًا متضاداً تقريبًا تم تحديده في عام 1986، يعزز الأكتيفين التخليق الحيوي وإفراز الهرمون المُنشّط للحوصلة، ويشارك في تنظيم الدورة الشهرية. تم العثور على العديد من الوظائف الأخرى للأكتيفين بما في ذلك أدوار في انتشار الخلايا والتمايز و الإستماتة والتمثيل الغذائي والاستتباب والاستجابة المناعية والتئام الجروح ووظيفة الغدد الصماء. (Inhibins)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007265.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leptin",
    "term_en": "Leptin",
    "term_ar": "لبتين",
    "synonyms": [
      "Ob Gene Product",
      "Gene Product, Ob",
      "Ob Protein",
      "Obese Gene Product",
      "Gene Product, Obese",
      "Obese Protein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A 16-kDa peptide hormone secreted from WHITE ADIPOCYTES. Leptin serves as a feedback signal from fat cells to the CENTRAL NERVOUS SYSTEM in regulation of food intake, energy balance, and fat storage.",
    "arabic_definition": "اللبتين هرمون بروتيني، ينتجه ويفرزه النسيج الدهني Adipose tissue خاصة النسيج الدهني الأبيض. ويلعب اللبتين دوراً هاماً في استهلاك الطاقة وتنظيم استهلاكها، بما في ذلك الشهية والتمثيل الغذائي والأيض (وتتركز مستقبلات اللبتين في الوطاء Hypothalamus). (Leptin)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020738.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "biotin",
    "term_en": "Biotin",
    "term_ar": "بيوتين",
    "synonyms": [
      "Vitamin H",
      "Biodermatin",
      "Biokur",
      "Biotin Gelfert",
      "Gelfert, Biotin",
      "Biotin Hermes",
      "Hermes, Biotin",
      "Deacura"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A water-soluble, enzyme co-factor present in minute amounts in every living cell. It occurs mainly bound to proteins or polypeptides and is abundant in liver, kidney, pancreas, yeast, and milk.",
    "arabic_definition": "البيوتين أو فيتامين H أو فيتامين ب المركب، واحد من فيتامينات بي. يشارك في مجموعة كبيرة من العمليات الأيضية، لدى الإنسان والكائنات الحية الأخرى، وترتبط وظائفه الأساسية باستخدام الدهون والكربوهيدرات والأحماض الأمينية. (Biotin)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001710.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nisin",
    "term_en": "Nisin",
    "term_ar": "نيسين (كمياء)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A 34-amino acid polypeptide antibiotic produced by Streptococcus lactis. It has been used as a food preservative in canned fruits and vegetables, and cheese.",
    "arabic_definition": "النيسين هو ببتيد مضاد للجراثيم متعدد الحلقات تنتجه بكتيريا Lactococcus lactis والذي يستخدم كمادة حافظة للأغذية يكتب على الاغذية اختصاراً E234 . يحتوي على 34 بقايا من الأحماض الأمينية ، بما في ذلك الأحماض الأمينية غير الشائعة لانثيونين (لان) ، وميثيلانثيونين (ميلان) ، وديهيدروالانين (دا) ، وحمض ديهيدرو أمينوبوتيريك (دي إتش بي). (Nisin)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009561.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nadp",
    "term_en": "NADP",
    "term_ar": "فوسفات ثنائي نيوكليوتيد الأدينين وأميد النيكوتين",
    "synonyms": [
      "Coenzyme II",
      "NADPH",
      "Nicotinamide-Adenine Dinucleotide Phosphate",
      "Dinucleotide Phosphate, Nicotinamide-Adenine",
      "Phosphate, Nicotinamide-Adenine Dinucleotide",
      "Triphosphopyridine Nucleotide",
      "Nucleotide, Triphosphopyridine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Nicotinamide adenine dinucleotide phosphate. A coenzyme composed of ribosylnicotinamide 5'-phosphate (NMN) coupled by pyrophosphate linkage to the 5'-phosphate adenosine 2',5'-bisphosphate. It serves as an electron carrier in a number of reactions, being alternately oxidized (NADP+) and reduced (NADPH). (Dorland, 27th ed)",
    "arabic_definition": "نيكوتيناميد أدينين ثنائي نوكليوتيد الفوسفات (الإنجليزية: Nicotinamide adenine dinucleotide phosphate) مركب كيميائي يرمز له اختصارا بـ NADP ، أو TPN اختصارا لـ triphosphopyridine nucleotide، هو عامل مساعد في تفاعلات التمثيل الغذائي، مثل الدهون وتوليف الحمض النووي والتي تتطلب NADPH كعامل مختزل. NADPH هو صورة مختزلة من +NADP. يختلف +NADP عن +NAD في وجود مجموعة الفوسفات إضافية على المكان 2 من حلقة الريبوز الذي يحمل المجموعة الوظيفية للأدينين.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009249.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vitamins",
    "term_en": "Vitamins",
    "term_ar": "فيتامين",
    "synonyms": [
      "Vitamin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Organic substances that are required in small amounts for maintenance and growth, but which cannot be manufactured by the human body.",
    "arabic_definition": "الفيتامين أو حيمين هو مركب عضوي (أو مجموعة من الجزيئات المرتبطة كيميائيًا ارتباطًا وثيقًا) من المغذيات الدقيقة الأساسية التي يحتاجها الكائن الحي بكميات صغيرة من أجل الأداء السليم لعملية التمثيل الغذائي. لا يمكن الحصول على العناصر الغذائية الأساسية في الكائن الحي بطرق الاصطناع الحيوي، وحتى لو حصلَ ذلك فإنه لا يكون بكمّيات كافية، لذا يجب الحصول عليها من خلال الغذاء. (Vitamins)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014815.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thymosin",
    "term_en": "Thymosin",
    "term_ar": "ثيموسين",
    "synonyms": [
      "Thymosins",
      "Thymosin Fs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Thymosin. A family of heat-stable, polypeptide hormones secreted by the thymus gland. Their biological activities include lymphocytopoiesis, restoration of immunological competence and enhancement of expression of T-cell characteristics and function. They have therapeutic potential in patients having primary or secondary immunodeficiency diseases, cancer or diseases related to aging.",
    "arabic_definition": "الثيموسين (Thymosin) هو اسم مجموعة من الهرمونات الببتيدية، التي تُنتَج في الغدة الزعترية في جسم الإنسان، منها:",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013947.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "androgens",
    "term_en": "Androgens",
    "term_ar": "أندروجين",
    "synonyms": [
      "Androgen",
      "Androgen Receptor Agonist",
      "Agonist, Androgen Receptor",
      "Receptor Agonist, Androgen",
      "Androgen Receptor Agonists",
      "Agonists, Androgen Receptor",
      "Receptor Agonists, Androgen",
      "Androgenic Agents"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compounds that interact with ANDROGEN RECEPTORS in target tissues to bring about the effects similar to those of TESTOSTERONE. Depending on the target tissues, androgenic effects can be on SEX DIFFERENTIATION; male reproductive organs, SPERMATOGENESIS; secondary male SEX CHARACTERISTICS; LIBIDO; development of muscle mass, strength, and power.",
    "arabic_definition": "الأندروجين هو الاسم العام لمجموعة من الستيروئيدات الطبيعية والاصطناعية من الستيرويد التي تنظم تطور وصيانة الخصائص الذكورية في الفقاريات من خلال الارتباط بمستقبلات الأندروجين، وهذا يشمل التطور الجنيني للأعضاء التناسلية الذكرية الأولية، وتطور الخصائص الجنسية الثانوية للذكور عند سن البلوغ. يتم تصنيع الأندروجين في الخصيتين والمبيضين والغدد الكظرية.. (Androgens)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000728.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "resistin",
    "term_en": "Resistin",
    "term_ar": "ريزيستين",
    "synonyms": [
      "Adipocyte Cysteine-Rich Secreted Protein FIZZ3"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A 12-kDa cysteine-rich polypeptide hormone secreted by FAT CELLS in the ADIPOSE TISSUE. It is the founding member of the resistin-like molecule (RELM) hormone family. Resistin suppresses the ability of INSULIN to stimulate cellular GLUCOSE uptake.",
    "arabic_definition": "ريزيستين يُعرف أيضًا باسم عامل إفرازي خاص بالأنسجة الدهنية (ADSF) أو بروتين C/EBP-epsilon الذي ينظم إفراز النخاع الغني بالسيستين (XCP1)، هو هرمون ببتيد غني بالسيستين مشتق من الأنسجة الدهنية التي يتم ترميزها في البشر بواسطة جين RETN. في الرئيسيات، والخنازير، والكلاب، يفرز الريزيستين بواسطة الخلايا المناعية والطلائية، بينما في القوارض، يتم إفرازه بواسطة الأنسجة الدهنية. يبلغ طول ما قبل ببتيد الريزيستن في الإنسان 108 من الأحماض الأمينية وفي الفئران والجرذان 114 من حمض أميني؛ الوزن الجزيئي ~ 12.5 كيلو دالتون. (Resistin)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052243.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antidotes",
    "term_en": "Antidotes",
    "term_ar": "ترياق",
    "synonyms": [
      "Antidote",
      "Theriacs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents counteracting or neutralizing the action of POISONS.",
    "arabic_definition": "الترياق أو الدرياق هي مادة يمكنها أن تعاكس أثر السم. وكلمة الترياق شاملة تتضمن مضاد الذيفانات أو مضادات السموم. (Antidotes)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000931.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "estrogens",
    "term_en": "Estrogens",
    "term_ar": "إستروجين",
    "synonyms": [
      "Estrogen",
      "Estrogen Receptor Agonists",
      "Agonists, Estrogen Receptor",
      "Receptor Agonists, Estrogen",
      "Estrogenic Agents",
      "Agents, Estrogenic",
      "Estrogenic Compounds",
      "Compounds, Estrogenic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compounds that interact with ESTROGEN RECEPTORS in target tissues to bring about the effects similar to those of ESTRADIOL. Estrogens stimulate the female reproductive organs, and the development of secondary female SEX CHARACTERISTICS. Estrogenic chemicals include natural, synthetic, steroidal, or non-steroidal compounds.",
    "arabic_definition": "الإستروجينات (Estrogens أو Oestrogens) (من الإسترات الدهنية) أو المُودِقات (منسوب إلى الوِداق: فترة الإباضة) هي هرمونات أنثوية يفرزها المبـِيض في شكل هرمون الجنس الأولي ويتوقف إفرازها عند الأنثى عند بلوغها سن اليأس. الإستروجينات الطبيعية هي هرمونات ستيرويدية، أما بعض الإستروجينات التخليقية فهي غير ستيرويدية.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004967.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diuretics",
    "term_en": "Diuretics",
    "term_ar": "مدر البول",
    "synonyms": [
      "Diuretic",
      "Diuretic Effect",
      "Effect, Diuretic",
      "Diuretic Effects",
      "Effects, Diuretic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents that promote the excretion of urine through their effects on kidney function.",
    "arabic_definition": "مُدِرَّات البول (الإنجليزية: Diuretics) أو المُبيلات هي أدوية تساعد على زيادة معدل التبول وطرح السوائل وهي مهمة للمرضى الذين يعانون من تضخم الأعضاء الناتج عن تجمع الماء داخل الجسم. ولها استخدامات طبية مثل علاج مرضى ارتفاع ضغط الدم.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004232.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fever",
    "term_en": "Fever",
    "term_ar": "حمى",
    "synonyms": [
      "Fevers",
      "Pyrexia",
      "Pyrexias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormal elevation of body temperature, usually as a result of a pathologic process.",
    "arabic_definition": "الحمى أو الحرارة أو السخونية هي ارتفاع في درجة حرارة الجسم عن المعدل الطبيعي، وذلك نتيجة ارتفاع درجة حرارة منظم حرارة الجسم الموجود في منطقة تحت المهاد والذي يُعرف باسم نقطة التضبيط. حيث يُؤدي هذا الارتفاع إلي حث الجسم على الحفاظ على حرارته، وإنتاج المزيد من الحرارة حتي تتوافق مع مقدار الزيادة في نقطة التضبيط، فتتضيق أوعية الجلد لتقليل فقدان الحرارة مما يتسبب في الشعور بالبرد، ويزداد توتر العضلات والنفض أحيانًا مما يؤدي إلى زيادة إنتاج الجسم للحرارة، وعندما تعود درجة حرارة نقطة التضبيط إلى وضعها الطبيعي يسعى الجسم إلى فقد ما اكتسبه من حرارة ويحدث توسع في أوعية الجلد مما يؤدي إلى الشعور بالحر والتورد وقد يصاحبه حدوث تعرق. (Fever)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005334.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "secretin",
    "term_en": "Secretin",
    "term_ar": "سيكريتين",
    "synonyms": [
      "Secretin, Pig",
      "Pig Secretin",
      "Secretin Pentacetate, Pig",
      "Pig Secretin Pentacetate",
      "Secretin Sulfate, Pig",
      "Pig Secretin Sulfate",
      "Secretin Maleate, Pig",
      "Pig Secretin Maleate"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A peptide hormone of about 27 amino acids from the duodenal mucosa that activates pancreatic secretion and lowers the blood sugar level. (USAN and the USP Dictionary of Drug Names, 1994, p597)",
    "arabic_definition": "السيكريتين (الإنجليزية: Secretin) هو هرمون ينظم الاسْتِقْرارُ الدَّاخِلِيّ للماء في جميع أنحاء الجسم ويؤثر على بيئة الاثنا عشري بواسطة تنظيم الافرازات في المعدة والبنكرياس والكبد. وهو هرمون ببتيدي ينتج في خلايا س (S cells) للاثنا عشري والتي تقع في الغدد المعوية في الإنسان.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012633.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lypressin",
    "term_en": "Lypressin",
    "term_ar": "فازوبرسين",
    "synonyms": [
      "Lysine Vasopressin",
      "Vasopressin, Lysine",
      "Lysyl Vasopressin",
      "Vasopressin, Lysyl",
      "Lys-Vasopressin",
      "8-Lysine Vasopressin",
      "Vasopressin, 8-Lysine",
      "Postacton"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The porcine antidiuretic hormone (VASOPRESSINS). It is a cyclic nonapeptide that differs from ARG-VASOPRESSIN by one amino acid, containing a LYSINE at residue 8 instead of an ARGININE. Lys-vasopressin is used to treat DIABETES INSIPIDUS or to improve vasomotor tone and BLOOD PRESSURE.",
    "arabic_definition": "الهرمون المانع لإدرار البول أو الهرمون المضاد لإدرار البول (الإنجليزية: antidiuretic hormone) يعرف اختصارًا (ADH) أو الفازوبرسين أو الفاسوبريسين (قابض الأوعية الدموية) (الإنجليزية: فازوبرسين) هو هرمون ببتيدي يتم تركيبه في تحت المهاد ويخزن في النخامية الخلفية. والعمل الرئيسي لهذا الهرمون هو إعادة امتصاص الماء في الكلية. (Lypressin)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008236.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "narcotics",
    "term_en": "Narcotics",
    "term_ar": "ناركوتي",
    "synonyms": [
      "Narcotic",
      "Narcotic Analgesics",
      "Analgesics, Narcotic",
      "Narcotic Effect",
      "Effect, Narcotic",
      "Narcotic Effects",
      "Effects, Narcotic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents that induce NARCOSIS. Narcotics include agents that cause somnolence or induced sleep (STUPOR); natural or synthetic derivatives of OPIUM or MORPHINE or any substance that has such effects. They are potent inducers of ANALGESIA and OPIOID-RELATED DISORDERS.",
    "arabic_definition": "الناركوتيات أو الأدوية الناركوتية أو المخدرات الناركوتية (الإنجليزية: narcotic) هي أدوية نفسانية التأثير ومحفزة للنوم. في الولايات المتحدة، الناركوتيات للتعبير عن الأفيونيات أو أشباه الأفيونيات، مثل مورفين وهيروين ومشتقاتها مثل هيدروكودون. (Narcotics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009294.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oxytocics",
    "term_en": "Oxytocics",
    "term_ar": "محفز انقباض الرحم",
    "synonyms": [
      "Oxytocic Agents",
      "Agents, Oxytocic",
      "Oxytocic Drugs",
      "Drugs, Oxytocic",
      "Uterine Stimulants",
      "Stimulants, Uterine",
      "Oxytocic",
      "Oxytocic Agent"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs that stimulate contraction of the myometrium. They are used to induce LABOR, OBSTETRIC at term, to prevent or control postpartum or postabortion hemorrhage, and to assess fetal status in high risk pregnancies. They may also be used alone or with other drugs to induce abortions (ABORTIFACIENTS). Oxytocics used clinically include the neurohypophyseal hormone OXYTOCIN and certain prostaglandins and ergot alkaloids. (From AMA Drug Evaluations, 1994, p1157)",
    "arabic_definition": "محفز انقباض الرحم ويعرف أيضًا باسم معجل الولادة، هو عامل يُستعمل لتحفيز زيادة شدة انقباض الرحم. كما يمكن أن يستخدم أيضًا في تحفيز الولادة والتقليل من النزيف الذي يأتي بعدها. (Oxytocics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010120.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "goserelin",
    "term_en": "Goserelin",
    "term_ar": "غوزيريلين",
    "synonyms": [
      "Zoladex",
      "ICI-118630",
      "ICI118630",
      "Goserelin Acetate",
      "Acetate, Goserelin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A synthetic long-acting agonist of GONADOTROPIN-RELEASING HORMONE. Goserelin is used in treatments of malignant NEOPLASMS of the prostate, uterine fibromas, and metastatic breast cancer.",
    "arabic_definition": "غوزيريلين (الإنجليزية: Goserelin) هو دواء يُستعمل في علاج بطانة الرحم الهاجرة.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017273.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nafarelin",
    "term_en": "Nafarelin",
    "term_ar": "نافاريلين",
    "synonyms": [
      "Nafarelin Monoacetate",
      "Nafarelin Acetate",
      "Nafarelin Acetate, Hydrate",
      "Synarel",
      "RS-94991-298",
      "RS94991298"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A potent synthetic agonist of GONADOTROPIN-RELEASING HORMONE with 3-(2-naphthyl)-D-alanine substitution at residue 6. Nafarelin has been used in the treatments of central PRECOCIOUS PUBERTY and ENDOMETRIOSIS.",
    "arabic_definition": "نافاريلين (الإنجليزية: Nafarelin) هو دواء يُستعمل في علاج:",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017274.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "analgesics",
    "term_en": "Analgesics",
    "term_ar": "مسكن ألم",
    "synonyms": [
      "Analgesic",
      "Analgesic Agents",
      "Agents, Analgesic",
      "Analgesic Drugs",
      "Drugs, Analgesic",
      "Anodynes",
      "Antinociceptive Agents",
      "Agents, Antinociceptive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compounds capable of relieving pain without the loss of CONSCIOUSNESS.",
    "arabic_definition": "تعمل مسكنات الألم بطرق مختلفة على الأجهزة العصبية المحيطية والمركزية. تختلف مسكنات الألم عن الأدوية المخدرة التي تذهب الشعور كليًا بشكل مؤقت. (Analgesics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000700.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "calcitonin",
    "term_en": "Calcitonin",
    "term_ar": "كالسيتونين",
    "synonyms": [
      "Calcitonin(1-32)",
      "Calcitrin",
      "Thyrocalcitonin",
      "Eel Calcitonin",
      "Calcitonin, Eel",
      "Ciba 47175-BA",
      "Ciba 47175BA"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A peptide hormone that lowers calcium concentration in the blood. In humans, it is released by thyroid cells and acts to decrease the formation and absorptive activity of osteoclasts. Its role in regulating plasma calcium is much greater in children and in certain diseases than in normal adults.",
    "arabic_definition": "كالسيتونين (الإنجليزية: Calcitonin) هو أحد الهرمونات التي تفرز من الغدة الدرقية واشتق اسمه من العنصر الكالسيوم وذلك لارتباطه بمستوى الكالسيوم في الدم. ويستخرج هذا الهرمون من سمك السلمون، كما تقوم الغدة الدرقية في جسم الإنسان السليم بإنتاج هذا الهرمون المسؤول بشكل رئيسي عن عمليات الأيض الغذائي لعنصر الكالسيوم، وله فائدة في خفض مستوى الكالسيوم في الدم بسرعة كبيرة عن طريق تثبيط عملية سحبه من العظام، أي أن نشاطه الحيوي يضاد هرمون الغدة الجار درقية.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002116.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "laxatives",
    "term_en": "Laxatives",
    "term_ar": "ملين",
    "synonyms": [
      "Laxative",
      "Bulk Laxatives",
      "Laxatives, Bulk",
      "Bulk Laxative",
      "Laxative, Bulk"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents that produce a soft formed stool, and relax and loosen the bowels, typically used over a protracted period, to relieve CONSTIPATION.",
    "arabic_definition": "الملينات أغذية أو مركّبات أو أدوية تؤخذ لغرض تليين البراز من خلال تسهيل حركته في القولون وذلك غالبا لمعالجة حالات الإمساك. كما تستخدم أنواع من الملينات المنشطة أو المشحمة أو المالحة لتفريغ القولون عند إجراء فحوص المستقيم أو الأمعاء، وقد يعزز باستخدام حقنة شرجية في ظروف محددة. (Laxatives)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054368.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "incretins",
    "term_en": "Incretins",
    "term_ar": "إنكرتين",
    "synonyms": [
      "Glucose-Dependent Insulin-Releasing Hormone",
      "Hormone, Glucose-Dependent Insulin-Releasing",
      "Insulin-Releasing Hormone, Glucose-Dependent",
      "Incretin",
      "Incretin Effect",
      "Effect, Incretin",
      "Incretin Effects",
      "Effects, Incretin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Peptides which stimulate INSULIN release from the PANCREATIC BETA CELLS following oral nutrient ingestion, or postprandially.",
    "arabic_definition": "الإنكرتينات (الإنجليزية: Incretins) هي مجموعة من الهرمونات المعدية المعوية التي تحفز على خفض مستويات الجلوكوز في الدم. تقوم الإنكرتينات بهذا العمل عن طريق زيادة كمية الإنسولين المفرز.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054795.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cathartics",
    "term_en": "Cathartics",
    "term_ar": "مسهل (صيدلة)",
    "synonyms": [
      "Cathartic",
      "Bowel Evacuant",
      "Evacuant, Bowel",
      "Purgative",
      "Bowel Evacuants",
      "Evacuants, Bowel",
      "Purgatives",
      "Bowel Preparation Solutions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents that are used to stimulate evacuation of the bowels.",
    "arabic_definition": "المسهل أو الملين أو المفتح على صيغة اسم الفاعل من التفتيح عند الأطباء دواء يخرج المادة السادة من المجرى إلى الخارج بفعل الحرارة الغريزية فيه، كالكرفس. في الطب, المسهل هي المادة التي تعمل على تحفيز إفراغ الأمعاء من محتويتها عن طريق تسريع عملية التغوط ( إخراج البراز ) . (Cathartics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002400.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leucovorin",
    "term_en": "Leucovorin",
    "term_ar": "حمض الفولينيك",
    "synonyms": [
      "Folinic Acid",
      "Acid, Folinic",
      "Folinic Acid-SF",
      "Leukovorum",
      "Leukovorin",
      "Citrovorum Factor",
      "Factor, Citrovorum",
      "Calcium Folinate"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The active metabolite of FOLIC ACID. Leucovorin is used principally as an antidote to FOLIC ACID ANTAGONISTS.",
    "arabic_definition": "حمض الفولينيك أو فولينيك أسيد (INN) أو ليوكوفورين (USAN) هو دواء مساعد في العلاج الكيميائي للسرطان بضمنها ميثوتركسيت. كما أنه يعطي مفعول تآزر عند استخدامه مع فلورويوراسيل. (Leucovorin)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002955.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "excipients",
    "term_en": "Excipients",
    "term_ar": "سواغ",
    "synonyms": [
      "Excipient",
      "Stabilizing Agents",
      "Agents, Stabilizing",
      "Stabilizing Agent",
      "Agent, Stabilizing",
      "Suspending Agents",
      "Agents, Suspending",
      "Suspending Agent"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Usually inert substances added to a prescription in order to provide suitable consistency to the dosage form. These include binders, matrix, base or diluent in pills, tablets, creams, salves, etc.",
    "arabic_definition": "السَّوَّاغ أو السِّوَاغ هي مجموع المواد المُضافة إلى الجرعة الدوائية جنباً إلى جنب المادة الفعالة (API) ، والتي تم إضافتها إما للمساعدة في تعزيز الثباتية والتوافر البيولوجي للدواء أثناء التخزين والاستخدام، أو في تحديد الجرعة المناسبة والمنتج النهائي. خصائص السواغات المثالية. (Excipients)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005079.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "emollients",
    "term_en": "Emollients",
    "term_ar": "مرطب للبشرة",
    "synonyms": [
      "Emollient",
      "Moisturizer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Oleagenous substances used topically to soothe, soften or protect skin or mucous membranes. They are used also as vehicles for other dermatologic agents.",
    "arabic_definition": "المرطبات أو المطريات هي مزيج معقد من المواد الكيميائية مصممة خصيصاً لجعل الطبقات الخارجية من الجلد (البشرة) أكثر ليونة ومرونة، وهي تزيد من ترطيب الجلد (محتوى الماء)عن طريق التقليل من التبخر، وتمثل دهون الجلد الطبيعية وستيرول، وكذلك الزيوت الطبيعية أوالصناعية، والمرطبات، والمطريات، ومواد التشحيم، وما إلى ذلك جزء من تركيب مرطبات الجلد التجارية، فهي عادة تتوفر كمنتجات تجارية وتكون للاستخدامات التجميلية والعلاجية، ولكن أيضا من الممكن صنعها في المنزل باستخدام مركبات معروفة من الصيدلية. (Emollients)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004643.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gramicidin",
    "term_en": "Gramicidin",
    "term_ar": "غراميسيدين",
    "synonyms": [
      "Gramicidins",
      "Gramicidin A(1)",
      "Linear Gramicidin",
      "Gramicidin, Linear",
      "Gramicidin D",
      "Gramicidin Dubos",
      "Gramicidin K",
      "Gramicidin P"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of peptide antibiotics from BACILLUS brevis. Gramicidin C or S is a cyclic, ten-amino acid polypeptide and gramicidins A, B, D are linear. Gramicidin is one of the two principal components of TYROTHRICIN.",
    "arabic_definition": "غراميسيدين هو خليط غير متجانس من ستة مركبات من المضادات الحيوية، gramicidins A، B و C، والتي تشكل 80٪، 6٪، و 14٪ على التوالي، والتي يتم الحصول عليها من التربة البكتيرية لأنواع العصوية القصيرة Bacillus brevis والتي تسمى مجتمعة غراميسيدين D. غراميسيدين D هي pentadecapeptides الخطية، وهذا هو سلاسل مكونة من 15 الأحماض الأمينية. هذا هو على النقيض من غراميسيدين S التي هي سلسلة ببتيد دوري.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006096.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ionophores",
    "term_en": "Ionophores",
    "term_ar": "حامل الأيون",
    "synonyms": [
      "Ionophore"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chemical agents that increase the permeability of biological or artificial lipid membranes to specific ions. Most ionophores are relatively small organic molecules that act as mobile carriers within membranes or coalesce to form ion permeable channels across membranes. Many are antibiotics, and many act as uncoupling agents by short-circuiting the proton gradient across mitochondrial membranes.",
    "arabic_definition": "حامل الأيون أو الحامل الأيوني هو نوع كيميائي قادر على الارتباط بالأيونات والتخلي عنها. توجد حاملات الأيون في الجسم على شكل جزيئات قابلة للذوبان في الدهون عادة ما يتم صنعها بواسطة الكائنات الدقيقة لنقل الأيونات عبر الطبقة الدهنية الثنائية الموجودة في غشاء الخلية. (Ionophores)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007476.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "riboflavin",
    "term_en": "Riboflavin",
    "term_ar": "فيتامين ب2",
    "synonyms": [
      "Vitamin B 2",
      "Vitamin G",
      "Vitamin B2"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Nutritional factor found in milk, eggs, malted barley, liver, kidney, heart, and leafy vegetables. The richest natural source is yeast. It occurs in the free form only in the retina of the eye, in whey, and in urine; its principal forms in tissues and cells are as FLAVIN MONONUCLEOTIDE and FLAVIN-ADENINE DINUCLEOTIDE.",
    "arabic_definition": "الريبوفلافين (الإنجليزية: Riboflavin)، المعروف أيضا باسم فيتامين بي2، هو فيتامين موجود في الطعام ويباع كمكمل غذائي. إنه ضروري لتكوين اثنين من الإنزيمات المساعدة الرئيسية، أحادي نوكليوتيد الفلافين وفلافين أدينين ثنائي النوكليوتيد.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012256.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "progestins",
    "term_en": "Progestins",
    "term_ar": "بروجستوجين",
    "synonyms": [
      "Gestagen",
      "Progestagen",
      "Progestational Agent",
      "Agent, Progestational",
      "Progestational Compound",
      "Compound, Progestational",
      "Progestogen",
      "Progestational Hormone"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compounds that interact with PROGESTERONE RECEPTORS in target tissues to bring about the effects similar to those of PROGESTERONE. Primary actions of progestins, including natural and synthetic steroids, are on the UTERUS and the MAMMARY GLAND in preparation for and in maintenance of PREGNANCY.",
    "arabic_definition": "البروجستوجين (بالإنجليزية: progestogen)، يُشار إليه أيضًا باسم «بروجستاجين» أو «جستاجين» أو «جستوجين»، نمط دوائي يمنح تأثيرات مشابهةً للتأثيرات الطبيعية الناجمة عن الهرمون الجنسي الأنثوي «البروجستيرون» على الجسم، ويُعد هذا الدواء بروجستيرونًا صنعيًا. تُستخدم البروجستوجينات عادةً في تحديد النسل هرمونيًا وضمن نظام العلاج الهرموني في فترة الضهي. (Progestins)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011372.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proinsulin",
    "term_en": "Proinsulin",
    "term_ar": "طليعة الإنسولين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pancreatic polypeptide of about 110 amino acids, depending on the species, that is the precursor of insulin. Proinsulin, produced by the PANCREATIC BETA CELLS, is comprised sequentially of the N-terminal B-chain, the proteolytically removable connecting C-peptide, and the C-terminal A-chain. It also contains three disulfide bonds, two between A-chain and B-chain. After cleavage at two locations, insulin and C-peptide are the secreted products. Intact proinsulin with low bioactivity also is secreted in small amounts.",
    "arabic_definition": "طليعة الإنسولين هي طليعة الهرمون التي تسبق مرحلة صنع الإنسولين في خلايا بيتا في جزر لانغرهانس. لدى البشر، يُرمز تصنيع الإنسولين من خلال جين INS. تفرز جزر لانغرهانس ما بين 1% إلى 3% من طليعة الإنسولين السليم. (Proinsulin)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011384.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polymyxins",
    "term_en": "Polymyxins",
    "term_ar": "بوليميكسين",
    "synonyms": [
      "Polymyxin",
      "Polymyxin M"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Basic lipopeptide antibiotic group obtained from Bacillus polymyxa. They affect the cell membrane by detergent action and may cause neuromuscular and kidney damage. At least eleven different members of the polymyxin group have been identified, each designated by a letter.",
    "arabic_definition": "البوليميكسينات (الإنجليزية: Polymyxins) هي مضادات حيوية، ويستخدم البوليميكسين ب وهـ (المعروفان أيضا باسم كوليستين) في علاج العدوى البكتيرية سلبية الغرام، حيث يعمل البوليميكسين ب وهـ في الغالب عن طريق تفتيت غشاء الخلية البكتيرية، وهما جزء من فئة أوسع من جزيئات تسمى الببتيدات اللاريبوزومية. ويتم إنتاج البوليمكسينات في الطبيعة بواسطة البكتيريا موجبة الجرام مثل العَصَوِيَّةُ المَخَّاطَة (Paenibacillus polymyxa).",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011113.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ubiquinone",
    "term_en": "Ubiquinone",
    "term_ar": "مساعد الإنزيم Q10",
    "synonyms": [
      "Coenzyme Q",
      "Coenzyme Q10"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A lipid-soluble benzoquinone which is involved in ELECTRON TRANSPORT in mitochondrial preparations. The compound occurs in the majority of aerobic organisms, from bacteria to higher plants and animals.",
    "arabic_definition": "مساعد الإنزيم Q-10 أو مرافق الإنزيم Q هو مادة شبيهة بالفيتامين, آثارها في الجسم تشابه آثار فيتامين هـ ، بل قد تكون أقوى كمضاد تأكسد. و يسمى أيضاً أوبيكينونUbiquinone.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014451.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leuprolide",
    "term_en": "Leuprolide",
    "term_ar": "ليوبرورلين",
    "synonyms": [
      "Leuprorelin",
      "TAP-144",
      "TAP144",
      "Enantone",
      "Leuprolide, (L-Leu)-Isomer",
      "Leuprolide, (DL-Leu)-Isomer",
      "Leuprolide Monoacetate",
      "Monoacetate, Leuprolide"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A potent synthetic long-acting agonist of GONADOTROPIN-RELEASING HORMONE that regulates the synthesis and release of pituitary gonadotropins, LUTEINIZING HORMONE and FOLLICLE STIMULATING HORMONE.",
    "arabic_definition": "ليوبرورلين (بالإنجليزية leuprorelin) ويعرف أيضا ب (ليوبرولايد) , هو نسخة مصنعة من هرمون يستخدم لعلاج سرطان البروستاتا، وسرطان الثدي، بطانة الرحم، الأورام الليفية الرحمية، والبلوغ المبكر. ويعطى عن طريق الحقن في العضلات أو تحت الجلد. (Leuprolide)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016729.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mydriasis",
    "term_en": "Mydriasis",
    "term_ar": "توسع الحدقة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Dilation of pupils to greater than 6 mm combined with failure of the pupils to constrict when stimulated with light. This condition may occur due to injury of the pupillary fibers in the oculomotor nerve, in acute angle-closure glaucoma, and in ADIE SYNDROME.",
    "arabic_definition": "توسع الحدقة (الإنجليزية: Mydriasis) هو توسع حدقة العين بصورة غير طبيعية ناتج عن مرض أو إصابة أو أدوية. في طبيعة الحدقة أن تتوسع تلقائيًا في الأماكن المظلمة كي تحسن من مستوى الرؤية في تلك الأماكن.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015878.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "picrotoxin",
    "term_en": "Picrotoxin",
    "term_ar": "بيكروتوكسين",
    "synonyms": [
      "Cocculin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mixture of PICROTOXININ and PICROTIN that is a noncompetitive antagonist at GABA-A receptors acting as a convulsant. Picrotoxin blocks the GAMMA-AMINOBUTYRIC ACID-activated chloride ionophore. Although it is most often used as a research tool, it has been used as a CNS stimulant and an antidote in poisoning by CNS depressants, especially the barbiturates.",
    "arabic_definition": "بيكروتوكسين (كوكولين) (بالانجليزية:Picrotoxin). هي مادة بلورية سامة مستخلصة من النباتات.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010852.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "demulcents",
    "term_en": "Demulcents",
    "term_ar": "ملطف (صيدلة)",
    "synonyms": [
      "Mucoprotective Agents",
      "Agents, Mucoprotective",
      "Demulcent"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compounds that form soothing films on the surface of MUCOUS MEMBRANES. They are generally used as agents to protect the integrity of internal EPITHELIUM.",
    "arabic_definition": "مُلطف أو مُطرِ أو مُلين (الإنجليزية: Demulcent) هو عامل يُفترض تشكيله لِطبقة مُلطفة (مسكنة/مُهدئة) على الغشاء المُخاطي، حيثُ تعمل هذه الطبقة على تخفيف آلام والتهابات الغشاء المُخاطي الطَفيفة. على الرغم من ذلك، فإنها تساعد بشكلٍ عام لمدة أقل من 30 دقيقة. (Demulcents)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065106.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "breast",
    "term_en": "Breast",
    "term_ar": "ثدي",
    "synonyms": [
      "Breasts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "In humans, one of the paired regions in the anterior portion of the THORAX. The breasts consist of the MAMMARY GLANDS, the SKIN, the MUSCLES, the ADIPOSE TISSUE, and the CONNECTIVE TISSUES.",
    "arabic_definition": "الثَّدْي (الثَّدْي للمرأة والثَّنْدُوَة أو الثُّنْدُؤَة للرجل) أو الدَيْس، (بالإنْگْلِيْزية breast، وتُلفَظ: بْرَسْت)، هما بروزان يقعان في المنطقة العلوية البطنية من جذع الإنسان وغيره من الرئيسيات. ينمو الثديان لدى كلا الجنسين من نفس الأنسجة الجنينية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001940.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orbit",
    "term_en": "Orbit",
    "term_ar": "مدار",
    "synonyms": [
      "Orbits",
      "Eye Socket",
      "Eye Sockets",
      "Socket, Eye",
      "Sockets, Eye"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bony cavity that holds the eyeball and its associated tissues and appendages.",
    "arabic_definition": "المدار في الفيزياء هو مسارٌ مُنحنٍ لجسم ما حول نقطة أو جسم آخر تحت تأثير قوة الجاذبية. على سبيل المثال مدار كوكب حول نجم، مثل دوران كواكب المجموعة الشمسية حول الشمس. (Orbit)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009915.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ovary",
    "term_en": "Ovary",
    "term_ar": "مبيض",
    "synonyms": [
      "Ovaries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The reproductive organ (GONADS) in female animals. In vertebrates, the ovary contains two functional parts: the OVARIAN FOLLICLE for the production of female germ cells (OOGENESIS); and the endocrine cells (GRANULOSA CELLS; THECA CELLS; and LUTEAL CELLS) for the production of ESTROGENS and PROGESTERONE.",
    "arabic_definition": "اَلْمَبِيضُ هو إحدى الغدتين التناسليتين عند الأنثى، وهي الصفة الجنسية الأولية، المسؤولة عن إنتاج البويضات والهرومونات الجنسية الأنثوية، مثل: هرمون الإستروجين، الذي يفرز من حويصلة جراف في المبيض، والبروجسترون، الذي يفرز من الجسم الأصفر في المبيض، ويَعمل هرمون الأستروجين عند سن البلوغ وهو المسؤول عن ظهور الصفات الجنسية الأنثوية الثانوية، مثل: نضج غدد الثدي، وتعبئته بالدهون، أما هرومون البروجسترون، فهو مسؤول عن تثبيت الحمل والحفاظ عليه. يبلغ حجم كل مبيض حجم لوزة كبيرة: ثلاثة سنتمترات طولًا، وسنتمترين عرضًا، وسنتمتر واحد سمكًا. (Ovary)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010053.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stomach",
    "term_en": "Stomach",
    "term_ar": "معدة",
    "synonyms": [
      "Stomachs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An organ of digestion situated in the left upper quadrant of the abdomen between the termination of the ESOPHAGUS and the beginning of the DUODENUM.",
    "arabic_definition": "المعدة (الإنجليزية: Stomach) أو البْطَيْنةُ، هي عضو عضلي مجوف في الجهاز الهضمي العلوي للبشر والعديد من الحيوانات الأخرى، بما في ذلك العديد من اللافقاريات. تحتوي المعدة على بنية متوسعة وتعمل كعضو حيوي في الجهاز الهضمي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013270.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "larynx",
    "term_en": "Larynx",
    "term_ar": "حنجرة",
    "synonyms": [
      "Laryngeal Anterior Commissure",
      "Anterior Commissures, Laryngeal",
      "Commissure, Laryngeal Anterior",
      "Commissures, Laryngeal Anterior",
      "Laryngeal Anterior Commissures",
      "Anterior Commissure, Laryngeal",
      "Anterior Commissure, Larynx",
      "Anterior Commissures, Larynx"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tubular organ of VOICE production. It is located in the anterior neck, superior to the TRACHEA and inferior to the tongue and HYOID BONE.",
    "arabic_definition": "الحَنْجَرَة (الإنجليزية: The larynx) وجمعها حَناجِر (الإنجليزية: Larynges)، هي عُضوٌ في عُنُق (رقبة) رباعيات الأطراف، يشترك في التنفس وإنتاج الأصوات، ويُسهم في حماية الرُّغامَى من دخول الطعام إليها. تحتوي الحَنجَرة على الحبال الصوتيّة، وتتولى الحَنجَرة التحكُّم في توتُّر هذه الحبال وما ينشأ عن ذلك من توتر اهتزازاتها عند مرور الهواء بها، وهو أمر بالغ الأهمية في عملية التصويت.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007830.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "veins",
    "term_en": "Veins",
    "term_ar": "وريد",
    "synonyms": [
      "Vein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The vessels carrying blood away from the CAPILLARY BEDS.",
    "arabic_definition": "الوريد هو وعاء دموي في الدورة الدموية يقوم بنقل الدم من أعضاء الجسم المختلفة باتجاه القلب. في الدورة الدموية الكبرى يقوم البطين الأيسر بضخ الدم المحمل بالأكسجين عبر الشرايين إلى العضلات وأعضاء الجسم الأخرى. (Veins)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014680.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pupil",
    "term_en": "Pupil",
    "term_ar": "حدقة",
    "synonyms": [
      "Pupils"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The aperture in the iris through which light passes.",
    "arabic_definition": "الحدقة pupil أو بؤبؤ هي ثقب أسود يقع في وسط قزحية العين يسمح للضوء بضرب شبكية العين. تظهر باللون الأسود لأن الأشعة الضوئية التي تدخل الحدقة تمتصها الأنسجة داخل العين مباشرة، أو تمتص بعد الانعكاسات المنتشرة داخل العين التي لا تخرج في الغالب من الحدقة الضيقة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011680.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sweat",
    "term_en": "Sweat",
    "term_ar": "تعرق",
    "synonyms": [
      "Sweats",
      "Perspiration"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The fluid excreted by the SWEAT GLANDS. It consists of water containing sodium chloride, phosphate, urea, ammonia, and other waste products.",
    "arabic_definition": "التعرّق هي عملية التخلص من الإفرازات الجسمية المكونة بشكل أساسي من الماء وبعض الأملاح والمركبات الكيميائية، والذي يسمى بالعرق. (Sweat)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013542.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gonads",
    "term_en": "Gonads",
    "term_ar": "غدة تناسلية",
    "synonyms": [
      "Gonad"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The gamete-producing glands, OVARY or TESTIS.",
    "arabic_definition": "الغدة التناسلية أو المَنسل أو الأعضاء التناسليةهي العضو الذي ينتج الأمشاج. فالغدد التناسلية في الذكور هي الخصيتان بينما الغدد التناسلية في الإناث هي المبيضان. (Gonads)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006066.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tears",
    "term_en": "Tears",
    "term_ar": "دموع",
    "synonyms": [
      "Tear",
      "Meibum",
      "Meibomian Lipids",
      "Lipid, Meibomian",
      "Meibomian Lipid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The fluid secreted by the lacrimal glands. This fluid moistens the CONJUNCTIVA and CORNEA.",
    "arabic_definition": "الدموع (مفردها دمعة) هي أحد السوائل الجسمية، سائل ناتج عن عمليات إنتاج وافراء واراقة لتنظيف العين. العواطف القوية مثل الحزن أو شدة الفرحة والإثارة، من الممكن أن تؤدي إلى البكاء. (Tears)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013666.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "uvula",
    "term_en": "Uvula",
    "term_ar": "لهاة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A fleshy extension at the back of the soft palate that hangs above the opening of the throat.",
    "arabic_definition": "اللَّهَاةُ أو لَّهَاةُ الحَلق (الإنجليزية: uvula) بروز عضلي يتكون من نسيج طلائي غدّي، مخروطي الشكل، يتدلى من الحنك الرخو soft palate، يبلغ طولها 15 – 35 ملم . وتقع قرب خلف الحنجرة وهي معلقة في قمة الجزء الخلفي للفم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014609.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "palate",
    "term_en": "Palate",
    "term_ar": "حنك",
    "synonyms": [
      "Palates",
      "Incisive Papilla",
      "Incisive Papillas",
      "Papilla, Incisive",
      "Papillas, Incisive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The structure that forms the roof of the mouth. It consists of the anterior hard palate (PALATE, HARD) and the posterior soft palate (PALATE, SOFT).",
    "arabic_definition": "الحنك (بالإنجليزية: palate) هو التركيب الفاصل بين جوف الأنف وجوف الفم فهو سقف الفم وأرضية الأنف. يمتد الحنك نحو الخلف ليفصل جزئياً بين البلعوم الأنفي والبلعوم الفموي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010159.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "skull",
    "term_en": "Skull",
    "term_ar": "جمجمة",
    "synonyms": [
      "Skulls",
      "Cranium",
      "Calvaria",
      "Calvarium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The SKELETON of the HEAD including the FACIAL BONES and the bones enclosing the BRAIN.",
    "arabic_definition": "الجُمجُمة بنيةٌ عظميّة تشكّل الرأس في معظم الفقاريات. تدعم الجمجمة بنى الوجه وتقدِّم للدماغ حماية عبر توضّعه في جوفها الرئيسي. (Skull)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012886.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thumb",
    "term_en": "Thumb",
    "term_ar": "إبهام",
    "synonyms": [
      "Thumbs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The first digit on the radial side of the hand which in humans lies opposite the other four.",
    "arabic_definition": "الإبهام أُولى أصابع اليد، تختلف عن سائر الأصابع في الاتجاه واتجاه الحركة، فيكمل مهام اليد: كالإمساك، والضغط. والإشارة بالإبهام إلى الأعلى علامةُ رضًا (في معظم الثقافات) عن شيءٍ، والإشارة إلى الأسفل هي خِلافُ الرضا. (Thumb)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013933.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cuspid",
    "term_en": "Cuspid",
    "term_ar": "ناب",
    "synonyms": [
      "Cuspids",
      "Canine Teeth",
      "Teeth, Canine",
      "Canine Tooth",
      "Tooth, Canine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The third tooth to the left and to the right of the midline of either jaw, situated between the second INCISOR and the premolar teeth (BICUSPID). (Jablonski, Dictionary of Dentistry, 1992, p817)",
    "arabic_definition": "الناب (الإنجليزية: Canine) هو أحد الأسنان في الثدييات، ويكون طويلًا نسبيًا، ومدبب. ومع ذلك، وفي بعض الحالات يكون مسطحًا يشبه القواطع. (Cuspid)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003481.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "joints",
    "term_en": "Joints",
    "term_ar": "مفصل",
    "synonyms": [
      "Joint",
      "مفصل (أحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Also known as articulations, these are points of connection between the ends of certain separate bones, or where the borders of other bones are juxtaposed.",
    "arabic_definition": "المَفْصِلُ أو الجُبَّةُ أو رُزّة هو مكان التقاء عظم بعظم آخر أو بين عظم وغضروف أو بين غضروفين، ويوجد أنواع مختلفة من المفاصل في مناطق معينة من الهيكل العظمي والتي تختلف فيما بينها من حيث درجة قابليتها للحركة. (Joints)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007596.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hallux",
    "term_en": "Hallux",
    "term_ar": "إصبع القدم",
    "synonyms": [
      "Great Toe",
      "Great Toes",
      "Toe, Great",
      "Toes, Great",
      "Big Toe",
      "Big Toes",
      "Toe, Big",
      "Toes, Big"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The innermost digit of the foot in PRIMATES.",
    "arabic_definition": "أصابع القدم أو الأباخس مفردها: أَبْخَس هي الأصابع الموجودة في القدم، توصف الحيوانات التي تسير علي أصابع القدم بأنها إصبعية السير، بينما توصف الحيوانات التي لها حوافر بأنها حافريات اما الإنسان فيوصف بأنه إخمصي السير لانه يسير على راحة القدم، والإنسان يملك خمسة أصابع، وهناك حالات نادرة تولد بستة أصابع.أكبرهم وأطولهم الإبهام عند معظم الناس وهي أحد خصائص الإنسان المتوارثة، حيث الجين السائد يخدث الطول الطبيعي في الإبهام، بينما الزَيْجُوتٍ مُتَمَاثِلَة الأَلائِل (homozygous) تتميز بطول أكبر في الأصبع الثاني وهو ما يعرف عادة ب\"أصابع قفاز اليد\" (Hallux)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006214.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coccyx",
    "term_en": "Coccyx",
    "term_ar": "عصعص",
    "synonyms": [
      "Caudal Vertebrae",
      "Vertebrae, Caudal",
      "Caudal Vertebra",
      "Caudal Vertebras",
      "Vertebra, Caudal",
      "Vertebras, Caudal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The last bone in the VERTEBRAL COLUMN in tailless primates considered to be a vestigial tail-bone consisting of three to five fused VERTEBRAE.",
    "arabic_definition": "العُصْعُصُ (اللاتينية: Coccyx) عظم ناتج عن اندماج الفقرات السفلية الأربع من العمود الفقري يلي العجز.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003050.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thigh",
    "term_en": "Thigh",
    "term_ar": "فخذ",
    "synonyms": [
      "Thighs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The superior part of the lower extremity between the HIP and the KNEE.",
    "arabic_definition": "الفَخْذ هو الجزء الذي يصل بين جذع الإنسان وركبته. وفي علم التشريح يصنف مع الطرف السفلي. (Thigh)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013848.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wrist",
    "term_en": "Wrist",
    "term_ar": "معصم",
    "synonyms": [
      "Wrists"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The region of the upper limb between the metacarpus and the FOREARM.",
    "arabic_definition": "المعصم هو المفصل بين اليد والساعد. في علم تشريح الإنسان، يعرف المعصم بـ: الرسغ أو عظام الرسغ، وهي العظام الثمانية المكونة للجزء الهيكلي القريب من اليد. (Wrist)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014953.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tibia",
    "term_en": "Tibia",
    "term_ar": "قصبة الساق",
    "synonyms": [
      "Tibias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The second longest bone of the skeleton. It is located on the medial side of the lower leg, articulating with the FIBULA laterally, the TALUS distally, and the FEMUR proximally.",
    "arabic_definition": "قصبة الساق أو عظم الظنبوب (الجمع: ظنابيب) هو العظم الأكبر والأقوى وذو التوضع الأمامي من بين عظمي الساق تحت الركبة لدى الفقاريات (العظم الآخر هو الشظية، يتوضع خلف الظنبوب وإلى الخارج منه)، ويصل الركبة بعظام الكاحل. يوجد عظم الظنبوب في الجانب الأنسي (الأقرب إلى الوسط) من الساق إلى جانب الشظية ويكون أقرب منها إلى المستوى الناصف أو الخط المركزي. (Tibia)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013977.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cornea",
    "term_en": "Cornea",
    "term_ar": "قرنية",
    "synonyms": [
      "Corneas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The transparent anterior portion of the fibrous coat of the eye consisting of five layers: stratified squamous CORNEAL EPITHELIUM; BOWMAN MEMBRANE; CORNEAL STROMA; DESCEMET MEMBRANE; and mesenchymal CORNEAL ENDOTHELIUM. It serves as the first refracting medium of the eye. It is structurally continuous with the SCLERA, avascular, receiving its nourishment by permeation through spaces between the lamellae, and is innervated by the ophthalmic division of the TRIGEMINAL NERVE via the ciliary nerves and those of the surrounding conjunctiva which together form plexuses. (Cline et al., Dictionary of Visual Science, 4th ed)",
    "arabic_definition": "القرنية (اللاتينية: cornea) عبارة عن نسيج شفاف مقوس موجود في العين. تتكون من خمس طبقات، يفصل بينها غشائان.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003315.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vomer",
    "term_en": "Vomer",
    "term_ar": "عظم حاجزي",
    "synonyms": [
      "Vomers"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An unpaired thin ploughshare-shaped facial bone. It is situated in the median plane of the SKULL. The vomer forms the posterior and inferior border of the NASAL SEPTUM.",
    "arabic_definition": "العظمة الأنفية أو العظم الحاجزي أو الميكعة (الإنجليزية: Vomer) هي إحدى عظام الجمجمة المفردة. تتوضع العظمة الأنفية على الخط الناصف، وتتلامس مع كل من العظم الوتدي والعظم الغربالي والعظمين الحنكيين الأيمن والأيسر ومع الفكين العلويين الأيمن والأيسر.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055172.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibula",
    "term_en": "Fibula",
    "term_ar": "شظية (عظم)",
    "synonyms": [
      "Fibulas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The bone of the lower leg lateral to and smaller than the tibia. In proportion to its length, it is the most slender of the long bones.",
    "arabic_definition": "عظم الشظية (اللاتينية: fibula) هو أحد العظام الطويلة في البشر، وهو أحد عظمتي الساق الموجود على الجانب الوحشي أي الخارجي للساق، بينما يكون العظم الآخر وهو قصبة الساق في الجانب الإنسي أي الداخلي للساق.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005360.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymph",
    "term_en": "Lymph",
    "term_ar": "لمف",
    "synonyms": [
      "Lymphs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The interstitial fluid that is in the LYMPHATIC SYSTEM.",
    "arabic_definition": "اللمف أو اللنف أو البلغم (بالإنجليزية: Lymph) هو سائل شفاف، يميل لونه إلى الصفرة، يشبه في تركيبه تركيب الدم إلا أنّه لا يحتوي على كريات دم حمراء، أي أنه يتركب من (بلازما وصفائح دموية وخلايا بيضاء وبعض البروتينات. يتكون من بقايا السائل النسيجي (2 لتر من بين 10 لترات دوارة في الجهاز اللمفاوي) وجزيئات البروتين والخلايا الدموية البيضاء وبعض مكونات الجهاز المناعي الأخرى، بحيث يساهم في نقل الدسم (الأحماض الدهنية) من الأمعاء الدقيقة إلى القلب.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008196.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sebum",
    "term_en": "Sebum",
    "term_ar": "غدة دهنية",
    "synonyms": [
      "Sebums",
      "Sebaceous gland"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The oily substance secreted by SEBACEOUS GLANDS. It is composed of KERATIN, fat, and cellular debris.",
    "arabic_definition": "الغدد الدُّهنية أو الغُدد الزُهْمية أو الغدد الشَّحمية (الإنجليزية: Sebaceous glands) وتُسمى أيضًا الغُدد الزيتية (الإنجليزية: Oil glands)، هي غُدد مجهرية خارجية الإفراز، تتواجد في الجلد، حيث تُفرز مادة شمعية أو زيتية تُسمى الدُهْن أو الزُهْم (الإنجليزية: Sebum)، والتي تُشَحِّم وتُشمع جلد وشعر الثدييات. تتواجد الغدد الدهنية في البشر بأعدادٍ كبيرة في الوجه وفروة الرأس، وأيضًا تتواجد في جميع أجزاء الجلد ما عدا راحة اليد وأخمص القدم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012629.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucus",
    "term_en": "Mucus",
    "term_ar": "مخاط",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The viscous secretion of mucous membranes. It contains mucin, white blood cells, water, inorganic salts, and exfoliated cells.",
    "arabic_definition": "المخاط (الاسم العلمي: Mucus) هو إفراز زلِق ينتجه الغشاء المخاطي عند الفقاريات ويُغَطّى به. المخاط غرواني لزِج يتضمن إنزيمات مطهرة (مثل ليزوزيم (الإنجليزية: Lysozyme))، وبروتينات مثل لاكتوفيرين، وبروتينات سكرية تعرف بالميوسين تنتجها الخلايا الكأسية (الإنجليزية: goblet cells) في الغشاء الخلوي للمخاط والغدد تحت المخاطية، جسم مضاد، والأملاح غير العضوية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009093.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scalp",
    "term_en": "Scalp",
    "term_ar": "فروة الرأس",
    "synonyms": [
      "Scalps"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The outer covering of the calvaria. It is composed of several layers: SKIN; subcutaneous connective tissue; the occipitofrontal muscle which includes the tendinous galea aponeurotica; loose connective tissue; and the pericranium (the PERIOSTEUM of the SKULL).",
    "arabic_definition": "فروة الرأس (الإنجليزية: scalp) هي الجزء من الرأس الّذي يمتد من القوسين الحاجبيّتين في الأمام حتى الناشزة القذالية الخارجية والخطّين القفويّين العلويّين في الخلف. ويستمر وحشيًا نحو الأسفل وصولًا إلى القوس الوجنية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012535.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fascia",
    "term_en": "Fascia",
    "term_ar": "لفافة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Layers of connective tissue of variable thickness. The superficial fascia is found immediately below the skin; the deep fascia invests MUSCLES, nerves, and other organs.",
    "arabic_definition": "اللِّفَافَة (الإنجليزية: Fascia) هي مَجموعة مِن النَسيج الضام تقع إما أسفل الجِلد مُباشرة وتعرف بِـاللِّفَافَة السطحية (Superficial Fascia) أو تقع بشكل غائر تغطِّي فيه العَضلات والأوعية الدَموية حيث تُشكل كَغمد أو كغشاء حَولها وتعرف بِـ اللِّفَافَة الغائِرة أو العَميقة (Deep Fascia).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005205.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "torso",
    "term_en": "Torso",
    "term_ar": "جذع",
    "synonyms": [
      "Torsos",
      "جذع (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The central part of the body to which the neck and limbs are attached.",
    "arabic_definition": "الجذع (الإنجليزية: Torso) أو (الإنجليزية: Trunk) في التشريح، هي المنطقة التي تتوسط جسم الإنسان ويتفرع منه الرقبة والأطراف العلوية والأطراف السفلية. كما يحتوي على منطقة البطن والصدر والظهر.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060726.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "axilla",
    "term_en": "Axilla",
    "term_ar": "إبط",
    "synonyms": [
      "Armpit",
      "Underarm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Area of the human body underneath the SHOULDER JOINT, also known as the armpit or underarm.",
    "arabic_definition": "الإبط (اللاتينية: Axilla) هي المنطقة الموجودة تحت المفصل الذي يربط الذراع مع الكتف. والإبط من المواقع الأربعة في الجسم، (بالإضافة إلى الفم والمستقيم وقناة الأذن)، التي يمكن من خلالها إدخال مقياس الحرارة الطبي لقياس درجة حرارة الجسم عبر وضع ميزان الحرارة بإحكام تحت الإبط لعدة دقائق.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001365.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dentin",
    "term_en": "Dentin",
    "term_ar": "عاج السن",
    "synonyms": [
      "Dentins",
      "Dentine",
      "Dentines"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The hard portion of the tooth surrounding the pulp, covered by enamel on the crown and cementum on the root, which is harder and denser than bone but softer than enamel, and is thus readily abraded when left unprotected. (From Jablonski, Dictionary of Dentistry, 1992)",
    "arabic_definition": "العاج أو عاج السن أو عاج الأسنان أو السِّنِّين أو العاجين (الإنجليزية: Dentin) هو نسيج متكلّس من الجسم، وإلى جانب المينا، والملاط، واللب هو واحد من المكونات الرئيسية الأربعة للأسنان. وهو مغطى عادة بالمينا في تاج السن والملاط في الجذر، ويحيط بكامل اللب.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003804.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urine",
    "term_en": "Urine",
    "term_ar": "بول",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Liquid by-product of excretion produced in the kidneys, temporarily stored in the bladder until discharge through the URETHRA.",
    "arabic_definition": "البَول هو أحد السوائل الجسمية، وهو السائل الذي تستخلصه الكليتان من الدم ثم تفرزانه من خلال الحالب ليصل المثانة ثم الإحليل ليخرج من الجسم للتخلص من الأملاح والمياه الزائدة في الجسم. ويكون عادة أصفر اللون وذلك تبعًا لنسبة البولة والماء فيه، فكلما زادت البولة مال إلى الاصفرار، وإذا زاد الماء أصبح شفافًا أو فاتحًا أكثر. (Urine)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014556.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mouth",
    "term_en": "Mouth",
    "term_ar": "فم",
    "synonyms": [
      "Cavitas Oris",
      "Oral Cavity",
      "Cavity, Oral",
      "Vestibule of the Mouth",
      "Vestibule Oris",
      "Oral Cavity Proper",
      "Cavitas oris propria",
      "Mouth Cavity Proper"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The oval-shaped oral cavity located at the apex of the digestive tract and consisting of two parts: the vestibule and the oral cavity proper.",
    "arabic_definition": "الفم هو جزء من الوجه يقع أسفل الأنف وأعلى الذقن يعد مدخل الطعام والشراب إلى الجهاز الهضمي ومدخل للهواء إلى الجهاز التنفسي، ويحتوي علي الأسنان التي بها تبدأ عملية المضغ، وعلى اللسان الذي يلعب دوراَ أساسياً في عملية التذوق والبلع، ويستخدمه كذلك الإنسان في الكلام للتواصل مع الاخرين، وتستحدمه الحيوانات في إصدار الأصوات. (Mouth)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009055.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "penis",
    "term_en": "Penis",
    "term_ar": "قضيب (عضو ذكري)",
    "synonyms": [
      "Glans Penis",
      "Penis, Glans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The external reproductive organ of males. It is composed of a mass of erectile tissue enclosed in three cylindrical fibrous compartments. Two of the three compartments, the corpus cavernosa, are placed side-by-side along the upper part of the organ. The third compartment below, the corpus spongiosum, houses the urethra.",
    "arabic_definition": "القضيب هو العضو الجنسي الأساسي الذي يستعمله الذكر الحيوان والخنثى لإمناء شريكه الجنسي (عادة الإناث والخنثى على التوالي) أثناء الجماع. (Penis)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010413.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "semen",
    "term_en": "Semen",
    "term_ar": "مني",
    "synonyms": [
      "Seminal Plasma",
      "Plasma, Seminal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The thick, yellowish-white, viscid fluid secretion of male reproductive organs discharged upon ejaculation. In addition to reproductive organ secretions, it contains SPERMATOZOA and their nutrient plasma.",
    "arabic_definition": "المَنِيّ أو السائل المَنَوِيّ هو أحد السوائل الجسمية، وهو سائل عضوي تفرزه الخصيتان (الغدد الجنسية) لدى الذكور ويحتوي على الحيوانات المنوية بالإضافة إلى إنزيمات وبروتينات ومركب الفركتوز وتعمل هذه العناصر على بقاء الحيوانات المنوية حية، وتوفر وسط يمكنها من خلاله التنقل أو السباحة. يتم إنتاج المني في الحويصلة المنوية ويندفع خارج الجسم عبر العضو الذكري بعملية تسمى القذف. (Semen)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012661.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kefir",
    "term_en": "Kefir",
    "term_ar": "كفير",
    "synonyms": [
      "Kefir Grains",
      "Grain, Kefir",
      "Grains, Kefir",
      "Kefir Grain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A beverage made from milk fermented by a mixture of endogenous LACTIC ACID-producing yeast and bacteria (KEFIR GRAINS), many of which are PROBIOTICS. It should not be confused with KAFFIR LIME or KAFFIR CORN.",
    "arabic_definition": "الكفير أو لبن الكفير، ويسمى أيضًا الفطر الهندي وتالاي وميودو كيكيا؛ هو لبن متخمر يرجع أصله إلى الرعاة في منطقة القوقاز، حيث اكتشفوا أن اللبن الطازج يتخمر أحيانًا ليصير مشروبًا غازيًا. ويتم تحضيره بوضع حبوب الكفير في حليب البقر أو الماعز أو النوق في درجة حرارة الغرفة. (Kefir)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000070716.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vulva",
    "term_en": "Vulva",
    "term_ar": "فرج (امرأة)",
    "synonyms": [
      "Vulvas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The external genitalia of the female. It includes the CLITORIS, the labia, the vestibule, and its glands.",
    "arabic_definition": "في الثدييات، يتكوّن الفرج (وهو الجزء الخارجي للجهاز التناسلي للأنثى ويُسمّى أحيانًا الهن)؛ بشكل أساسي من الهياكل الخارجية المرئية للأعضاء التناسلية الأنثوية التي تمتد إلى الداخل عبر الجهاز التناسلي الأنثوي. أما لدى البشر، فيشمل: جبل العانة، والشفرين الكبيرين، والشفرين الصغيرين، والبظر، والدهليز، وفتحة الإحليل، وفتحة المهبل، وغشاء البكارة، وفتحات الغدد الدهليزية (غدتا بارتولين وغدتا سكين). (Vulva)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014844.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tooth",
    "term_en": "Tooth",
    "term_ar": "سن",
    "synonyms": [
      "Teeth"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of a set of bone-like structures in the mouth used for biting and chewing.",
    "arabic_definition": "الأسنان ومفردها سن، هي تركيب صلب شبه عظمي يحتوي على جذور مغمورة في جيوب داخل الفكين في جنس الفقاريات، يتكون السن من تجويف يدعى لب السن (يحتوي على الأعصاب والأوعية الدموية) ومحاط بالعاج المغلف بالميناء عند التاج (الجزء البارز من السن) وبالملاط السني (في الجذر). (Tooth)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014070.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pelvis",
    "term_en": "Pelvis",
    "term_ar": "حوض",
    "synonyms": [
      "Pelvic Region",
      "Region, Pelvic",
      "حوض (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The space or compartment surrounded by the pelvic girdle (bony pelvis). It is subdivided into the greater pelvis and LESSER PELVIS. The pelvic girdle is formed by the PELVIC BONES and SACRUM.",
    "arabic_definition": "الحوض (اللاتينية: pelvis)، أو الزنار الحوضي هو الجزء من الهيكل العظمي للإنسان (وفقاريات أخرى) الواقع عند أساس العمود الفقري يرتكز إليه الطرفان السفليان، كما يدعم ويحمي عدداً من الأعضاء الداخلية. ويكون حوض الإناث أوسع منه عند الذكور وذلك لأنها تضم بعض أعضاء الجهاز التناسلي الأنثوي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010388.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pleura",
    "term_en": "Pleura",
    "term_ar": "غشاء جنبي",
    "synonyms": [
      "Visceral Pleura",
      "Pleura, Visceral",
      "Parietal Pleura",
      "Pleura, Parietal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The thin serous membrane enveloping the lungs (LUNG) and lining the THORACIC CAVITY. Pleura consist of two layers, the inner visceral pleura lying next to the pulmonary parenchyma and the outer parietal pleura. Between the two layers is the PLEURAL CAVITY which contains a thin film of liquid.",
    "arabic_definition": "غشاء الجَنَب أو الغشاء الجَنَبي أو غشاء البلورا أو غشاء الرئة المصلي هو غشاء مصلي مزدوج يأخذ شكل كيس يُغلف الرئة ويلتحم بالتجويف الصدري، ويتكون من غشاء الجنب الحشوي هو غشاء داخلي دقيق يغطي سطح كل رئة (النسيج الحشوي) وينغمس في الشقوق الموجودة بين فصوص الرئة. وغشاء الجنب الجداري هو غشاء خارجي يلتحم بالسطح الداخلي للتجويف الصدري ويستمد تغذيته العصبية من الأعصاب البين ضلعية والعصب الحجابي. (Pleura)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010994.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aorta",
    "term_en": "Aorta",
    "term_ar": "أبهر (شريان)",
    "synonyms": [
      "Aortas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The main trunk of the systemic arteries.",
    "arabic_definition": "الشريان الأبهر أو الأورطي ويسمى أدبياً الوتين (اللاتينية: Aorta) هو أكبر شريان في جسم الإنسان، يخرج من البطين الأيسر من الأمام على يسار الشريان الرئوي، ويتجه إلى أعلى واليمين خلف الشريان الرئوي. وهو يوزع الدم المؤكسج إلى جميع أنحاء الجسم عن طريق الدورة الدموية الكبرى التي تبدأ من البطين الأيسر وتنتهي في الأذين الأيمن.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001011.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brain",
    "term_en": "Brain",
    "term_ar": "دماغ",
    "synonyms": [
      "Encephalon"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The part of CENTRAL NERVOUS SYSTEM that is contained within the skull (CRANIUM). Arising from the NEURAL TUBE, the embryonic brain is comprised of three major parts including PROSENCEPHALON (the forebrain); MESENCEPHALON (the midbrain); and RHOMBENCEPHALON (the hindbrain). The developed brain consists of CEREBRUM; CEREBELLUM; and other structures in the BRAIN STEM.",
    "arabic_definition": "الدِماغ مركز الجهاز العصبي في الفَقاريات كافةً، وفي معظم غير الفَقاريات. وهو عضو في الرأس، قريب عادةً من أعضاء الحواس المختلفة كالرؤية. (Brain)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001921.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blood",
    "term_en": "Blood",
    "term_ar": "دم",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The body fluid that circulates in the vascular system (BLOOD VESSELS). Whole blood includes PLASMA and BLOOD CELLS.",
    "arabic_definition": "الدم هو سائل في جسم الإنسان وسائر الحيوانات ينقل المواد الضرورية مثل المغذيات والأكسجين إلى الخلايا، وينقل الفضلات الأيضية مثل ثاني أكسيد الكربون. بعيدًا عن تلك الخلايا نفسها. (Blood)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001769.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "foot",
    "term_en": "Foot",
    "term_ar": "قدم",
    "synonyms": [
      "Feet"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The distal extremity of the leg in vertebrates, consisting of the tarsus (ANKLE); METATARSUS; phalanges; and the soft tissues surrounding these bones.",
    "arabic_definition": "القدم هي العضو الواقع في نهاية الساق، والتي يقف عليها الإنسان، وبعض الحيوان. تحوي القدم عند معظم الثدييات والطيور وبعض الزواحف على المخالب بالإضافة إلى الأظافر، أما الإنسان فإن لديه أظافر فقط. (Foot)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005528.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "milk",
    "term_en": "Milk",
    "term_ar": "حليب",
    "synonyms": [
      "Cow Milk",
      "Milk, Cow",
      "Cow's Milk",
      "Milk, Cow's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The off-white liquid secreted by the mammary glands of humans and other mammals. It contains proteins, sugar, lipids, vitamins, and minerals.",
    "arabic_definition": "الحَلِيب أو اللَّبَن إحدى صور الطعام السائل، وهو غنى بالمواد المغذية، يُنتَج من غدد الثدي في الثدييات، وهو أساس مصادر التغذية لصغار الثدييات، وكذلك صغار البشر؛ فرضيع الإنسان يتغذى بالرَّضَاعة الطبيعية إلى أن يقدر على هضم الأطعمة الصُّلْبة. يسمى الحليب المبكر أو حليب الأيام الأولي باللبأ، والذي يحتوي على الأجسام المضادة التي تقوي الجهاز المناعي لدى الأطفال، وبذلك يقلل خطر الإصابة بالعديد من الأمراض. (Milk)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008892.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heart",
    "term_en": "Heart",
    "term_ar": "قلب",
    "synonyms": [
      "Hearts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The hollow, muscular organ that maintains the circulation of the blood.",
    "arabic_definition": "القلب عضو عضلي عند البشر والحيوانات الأخرى، يضخّ الدم عبر الأوعية الدموية في الدورة الدموية. يزود الدم الجسم بالأكسجين والمغذيات، كما يساعد في إزالة مخلفات عمليات الاستقلاب. (Heart)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006321.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lung",
    "term_en": "Lung",
    "term_ar": "رئة",
    "synonyms": [
      "Lungs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Either of the pair of organs occupying the cavity of the thorax that effect the aeration of the blood.",
    "arabic_definition": "الرئتان هما العضوان الرئيسيان في جهاز التنفس عند الإنسان والعديد من الحيوانات الأخرى بما فيها بعض الأسماك وبعض الحلزونات. عند الثدييات ومعظم الفقاريات تتموضع الرئتان قرب العمود الفقري على كل جانب من القلب. (Lung)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008168.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "face",
    "term_en": "Face",
    "term_ar": "وجه",
    "synonyms": [
      "Faces",
      "وجه (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The anterior portion of the head that includes the skin, muscles, and structures of the forehead, eyes, nose, mouth, cheeks, and jaw.",
    "arabic_definition": "الوجه هو الجزء الأمامي المكون لرأس الحيوان وجسم الإنسان الذي يحتوي على الاعضاء التي يتعامل الإنسان بها مع غيره، ويحتوي الوجه فقط على ثلاثة من أعضاء الإحساس بالرأس، وهي العين والأنف والفم، والتي من خلالها تعبر الحيوانات عن الكثير من مشاعرها. الوجه عامل مهم لتحديد الهوية البشرية، وقد تؤثر الأضرار بالوجه مثل الندوب أو تشوهات النمو سلبًا على النفس.وسمي (وجه) لأن الإنسان يواجه ماحوله باستخدامه وبه حواس السمع والبصر والشم والتذوق. (Face)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005145.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neck",
    "term_en": "Neck",
    "term_ar": "رقبة",
    "synonyms": [
      "Necks"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The part of a human or animal body connecting the HEAD to the rest of the body.",
    "arabic_definition": "الرقبة أو العنق هو الجزء الواصل بين الرأس والجذع في الفقاريات. وتحتوي على عدد من الفقرات وتُمكن الرأس من الحركة والالتفات. (Neck)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009333.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arm",
    "term_en": "Arm",
    "term_ar": "ذراع",
    "synonyms": [
      "Arms",
      "Upper Arm",
      "Arms, Upper",
      "Arm, Upper",
      "Upper Arms",
      "Brachium",
      "Brachiums",
      "ذراع (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The superior part of the upper extremity between the SHOULDER and the ELBOW.",
    "arabic_definition": "في تشريح الإنسان، يشير مصطلح الذراع (Arm) في الاستخدام الشائع إلى الطرف العلوي كاملاً، إلا أنه من الناحية الأكاديمية يعني تحديداً العضد وهي المنطقة الواقعة بين المفصل الحقاني العضدي (مفصل الكتف) ومفصل المرفق. ويُعرف الجزء البعيد من الطرف العلوي الواقع بين المرفق والمفصل الرسغي الكعبري (مفصل الرسغ) باسم الساعد، أما ما بعد الرسغ فيُسمى اليد.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001132.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rib-cage",
    "term_en": "Rib Cage",
    "term_ar": "قفص صدري",
    "synonyms": [
      "Rib Cages",
      "Thoracic Cage",
      "Thoracic Cages",
      "Ribcage",
      "Ribcages",
      "Costal Margin",
      "Costal Margins",
      "Margin, Costal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The bony thoracic enclosure consisting of the vertebral column; the RIBS; the STERNUM; and the COSTAL CARTILAGE.",
    "arabic_definition": "القفص الصدري (الإنجليزية: Thoracic cage) جزء من الهيكل العظمي البشري يتكون الهيكل العظمي عند الإنسان من الهيكل المحوري، والهيكل الطرفي حيث نجد أن الهيكل المحوري يتكون من العمود الفقري، والقفص الصدري، والجمجمة. (Rib Cage)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000070602.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hymen",
    "term_en": "Hymen",
    "term_ar": "غشاء البكارة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A thin fold of MUCOUS MEMBRANE situated at the orifice of the vagina.",
    "arabic_definition": "غِشاء البَكارَة هو قطعةٌ رقيقة من الغشاء المخاطي ويقع على بعد حوالي 1-2 سم من فتحة المهبل، يُحيط غِشاء البكارة أو يغطي جزئيًا الفتحة المهبلية الخارجية ويشكل جزءًا من الفرج أو الأعضاء التناسلية الخارجية. لم تُحدد أي وظيفةٍ عضويةٍ خاصة بغشاء البَكارة أو أيُ وظيفةٍ للنهايات العصبية القليلة فيه والتي قد لا تكون موجودةً أحيانًا. (Hymen)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006924.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "incus",
    "term_en": "Incus",
    "term_ar": "سندان",
    "synonyms": [
      "سندان (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of three ossicles of the middle ear. It conducts sound vibrations from the MALLEUS to the STAPES.",
    "arabic_definition": "السندان (اللاتينية: Incus) هو أحد عظيمات السمع الموجودة في الأذن الوسطى. يتصل مع المطرقة وحشياً ومع الركاب إنسياً.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007188.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bile",
    "term_en": "Bile",
    "term_ar": "صفراء",
    "synonyms": [
      "Biliary Sludge",
      "Sludge, Biliary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An emulsifying agent produced in the LIVER and secreted into the DUODENUM. Its composition includes BILE ACIDS AND SALTS; CHOLESTEROL; and ELECTROLYTES. It aids DIGESTION of fats in the duodenum.",
    "arabic_definition": "الصَّفْرَاءُ أو المِرَّةُ من سوائل الجسم وهو سائل قاعدي سميك مر الطعم أصفر اللون ينشأ في الكبد يجمع في قناة المرارة ويخزن في كيس المرارة الذي تفرغ هذا السائل في العفج أثناء دخول الطعام إلى الإثنى عشر حيث يساهم في هضم المأكولات الدهنية. (Bile)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001646.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cecum",
    "term_en": "Cecum",
    "term_ar": "أعور",
    "synonyms": [
      "Cecums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The blind sac or outpouching area of the LARGE INTESTINE that is below the entrance of the SMALL INTESTINE. It has a worm-like extension, the vermiform APPENDIX.",
    "arabic_definition": "الأعور (الإنجليزية: Cecum) هو كيس داخل الصفاق، والذي يعتبر بداية الأمعاء الغليظة. يستقبل الكيموس من اللفائفي، ويتصل بالقولون الصاعد (جزء من الأمعاء الغليظة).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002432.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ileum",
    "term_en": "Ileum",
    "term_ar": "لفائفي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The distal and narrowest portion of the SMALL INTESTINE, between the JEJUNUM and the ILEOCECAL VALVE of the LARGE INTESTINE.",
    "arabic_definition": "اللفائفي (الإنجليزية: Ileum) هو القسم الأخير من الأمعاء الدقيقة. ويبلغ طوله نحو 2-4 م في الإنسان، ويأتي بعد الاثنا عشر والصائم، ويفصله عن المصران الأعور الصمام اللفائفي الأعوري.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007082.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heel",
    "term_en": "Heel",
    "term_ar": "عقب",
    "synonyms": [
      "Heels",
      "Sinus Tarsi",
      "Sinus Tarsus",
      "عقب (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The back (or posterior) of the foot in PRIMATES, found behind the ankle and distal to the toes.",
    "arabic_definition": "في علم التشريح، العَقِب (الإنجليزية: heel) هو بروز في نهاية الخلفية للقدم. مكون من عظم واحد، هو العظم العقبي، يوجد إلى الخلف والأسفل من الكعبين.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006365.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eye",
    "term_en": "Eye",
    "term_ar": "عين",
    "synonyms": [
      "Eyes",
      "عين (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The organ of sight constituting a pair of globular organs made up of a three-layered roughly spherical structure specialized for receiving and responding to light.",
    "arabic_definition": "العين عضو في الجهاز البصري. إنها تزود الحيوانات بالرؤية والقدرة على تلقي التفاصيل المرئية ومعالجتها، فضلاً عن تمكين العديد من وظائف الاستجابة للصور المستقلة عن الرؤية. (Eye)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005123.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "femur",
    "term_en": "Femur",
    "term_ar": "عظم فخذ",
    "synonyms": [
      "Femurs",
      "Trochanter",
      "Trochanters",
      "Greater Trochanter",
      "Greater Trochanters",
      "Trochanter, Greater",
      "Trochanters, Greater",
      "Lesser Trochanter"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The longest and largest bone of the skeleton, it is situated between the hip and the knee.",
    "arabic_definition": "عظم الفخذ (الإنجليزية: Femur) والجمع (الإنجليزية: femora) يُصنّف كأحد العظام الطويلة، وهو أطول عظام الهيكل العظمي عند الإنسان، ويكوّن أكثر من 26.74% من طول الإنسان، وهو أيضاً أقوى عظام الجسم وأصلبها في البشر. يتكون عظم الفخذ من: نهاية علوية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005269.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "knee",
    "term_en": "Knee",
    "term_ar": "ركبة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A region of the lower extremity immediately surrounding and including the KNEE JOINT.",
    "arabic_definition": "يُطلق اسم مفصل الركبة عند الفقاريات، على المفصل المركزي للأطراف الخلفية، أما عند الإنسان فيُطلق على المفصل المركزي للأطراف السفلية. فالركبة هي مفصل يربط الفخذ مع الساق، وهي أكبر مفصل في الجسم البشري. (Knee)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007717.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ulna",
    "term_en": "Ulna",
    "term_ar": "زند",
    "synonyms": [
      "Ulnas",
      "Trochlear Notch",
      "Trochlear Notchs",
      "Semilunar Notch",
      "Semilunar Notchs",
      "Ulnar Trochlear Groove",
      "Trochlear Groove, Ulnar",
      "Ulnar Trochlear Grooves"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inner and longer bone of the FOREARM.",
    "arabic_definition": "عظم الزَّنْد (الإنجليزية: Ulna) هو أحد العظام الطويلة في البشر، وهو أحد عظمتين طوال داخل الساعد (العظمة الأخرى هي الكعبرة). وهي تمتد من المرفق إلى الرسغ موازية للكعبرة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014457.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "whey",
    "term_en": "Whey",
    "term_ar": "مصل لبن",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The liquid components of milk that remain after the CASEIN, fat, and fat soluble components have been removed. It is also a byproduct of cheese production.",
    "arabic_definition": "مَصْلُ اللَّبَن أو شِرْشُ اللَّبَن (الحليب): سائلٌ ينفصل عن اللبن (الحليب) الذي تخثَّر على شكل جُبن أو رائب (لبن الزَّبادي). وهو شِرْش الحليب بعد صِناعة الجُبْن. (Whey)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000067796.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pons",
    "term_en": "Pons",
    "term_ar": "جسر",
    "synonyms": [
      "Pons Varolii",
      "Pons Varolius",
      "Varolii, Pons",
      "Varolius, Pons",
      "Ponte",
      "Pontes",
      "جسر (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The front part of the hindbrain (RHOMBENCEPHALON) that lies between the MEDULLA and the midbrain (MESENCEPHALON) ventral to the cerebellum. It is composed of two parts, the dorsal and the ventral. The pons serves as a relay station for neural pathways between the CEREBELLUM to the CEREBRUM.",
    "arabic_definition": "الجسر (الإنجليزية: Pons) أو جسر فارول (الإنجليزية: pons varolii) منطقة في جذع الدماغ تقع تحت الدماغ المتوسط وأمام المخيخ وأعلى النخاع المستطيل. وهو من أقسام جذع الدماغ.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011149.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "jaw",
    "term_en": "Jaw",
    "term_ar": "فك",
    "synonyms": [
      "Jaws"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bony structure of the mouth that holds the teeth. It consists of the MANDIBLE and the MAXILLA.",
    "arabic_definition": "الفك (الإنجليزية: Jaw)، هو أي هيكل قابل للطعن بوضوح عند مدخل الفم، يستخدم عادة لاستيعاب ومعالجة المواد الغذائية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007568.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ankle",
    "term_en": "Ankle",
    "term_ar": "كاحل",
    "synonyms": [
      "Ankles",
      "Tarsus",
      "Regio tarsalis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The region of the lower limb between the FOOT and the LEG.",
    "arabic_definition": "الكاحل أو الكرسوع هو المفصل الذي يصل القدم بالساق. يعد تكوين مفصل الكاحل معقد، ويشتمل على مفصلين: المفصل الأساسي: وهو الذي يتكون من ثلاثة عظام: الظنبوب وهو الجزء الإنسي من الكاحل الشظية الذي يكون في الجزء الوحشي من الكاحل عظم الكاحل ويكون في الجزء السفلي. (Ankle)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000842.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chyle",
    "term_en": "Chyle",
    "term_ar": "كيلوس",
    "synonyms": [
      "Chyles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An opaque, milky-white fluid consisting mainly of emulsified fats that passes through the lacteals of the small intestines into the lymphatic system.",
    "arabic_definition": "الكَيْلُوس (الاسم العلمي: Chyle) (من الكلمة اليونانية χυλός chylos ، «عصير» ) هو سائل جسدي حليبي يتكون من الدهون الليمفاوية والمستحلب ، أو الأحماض الدهنية الحرة (FFAs). يتشكل في الأمعاء الدقيقة أثناء هضم الأطعمة الدهنية ، ويتم تناوله عن طريق الأوعية الليمفاوية المعروفة على وجه التحديد باسم اللاكتيل lacteals.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002913.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cheek",
    "term_en": "Cheek",
    "term_ar": "خد",
    "synonyms": [
      "Cheeks",
      "Bucca",
      "Buccas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The part of the face that is below the eye and to the side of the nose and mouth.",
    "arabic_definition": "الخَد أو الوَجَنَة هي المنطقة الموجودة تحت العينين من الأذن اليمنى إلى الأذن اليسرى. وهي منطقة لينة يسهل إحساس عظمة الخَدّ عند الضغط عليها ويغذيها العصب الشدق. (Cheek)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002610.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ear",
    "term_en": "Ear",
    "term_ar": "أذن",
    "synonyms": [
      "Ears",
      "Vestibulocochlear Apparatus",
      "Apparatus, Vestibulocochlear",
      "Vestibulocochlear System",
      "System, Vestibulocochlear"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The hearing and equilibrium system of the body. It consists of three parts: the EXTERNAL EAR, the MIDDLE EAR, and the INNER EAR. Sound waves are transmitted through this organ where vibration is transduced to nerve signals that pass through the ACOUSTIC NERVE to the CENTRAL NERVOUS SYSTEM. The inner ear also contains the vestibular organ that maintains equilibrium by transducing signals to the VESTIBULAR NERVE.",
    "arabic_definition": "الأذن هي عضو يستخدم من قبل الكائنات لاستشعار الصوت ضمن ما يعرف بحاسة السمع. يستخدم المصطلح إما للإشارة للعضو الخارجي الظاهر من الجهاز السمعي أو عن كامل الجهاز السمعي الداخلي المسؤول عن المعالجة الأولية للصوت. (Ear)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004423.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "uvea",
    "term_en": "Uvea",
    "term_ar": "عنبية (عين)",
    "synonyms": [
      "Uveas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The pigmented vascular coat of the eyeball, consisting of the CHOROID; CILIARY BODY; and IRIS, which are continuous with each other. (Cline et al., Dictionary of Visual Science, 4th ed)",
    "arabic_definition": "العِنَبِيّة هي طبقة العين الوسطى الوعائية والتي تتألف من طبقة العين المشيمة والجسم الهدبي والقزحية. (Uvea)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014602.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "head",
    "term_en": "Head",
    "term_ar": "رأس",
    "synonyms": [
      "Heads",
      "رأس (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The upper part of the human body, or the front or upper part of the body of an animal, typically separated from the rest of the body by a neck, and containing the brain, mouth, and sense organs.",
    "arabic_definition": "الرأس هو جزء من جسم الكائن الحي، يشمل الأذنين والدماغ والجبهة والخدين والذقن والعينين والأنف والفم، يعمل كل منها في وظائف حسية مختلفة مثل السمع والبصر والشم والذوق على التتالي. قد لا تملك بعض الحيوانات البسيطة للغاية رأسًا، لكن العديد من الحيوانات ثنائية التناظر لديها رأس، مهما كان حجمها. (Head)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006257.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "groin",
    "term_en": "Groin",
    "term_ar": "مغبن",
    "synonyms": [
      "Groins"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The external junctural region between the lower part of the abdomen and the thigh.",
    "arabic_definition": "المَغْبِن أو الأُرْبِيَّة أو المَرْفَغ أو الرَّفَغ (الإنجليزية: Groin) في جسم الإنسان هي المنطقة بين البطن والفخذ على جانبي الجسم، وعلى جانبي منطقة العانة. بالنسبة لجراحي الأوعية الدموية، فإن المغبن هو الموقع المفضل للشقوق من أجل إدخال قِثْطار في الأوعية الدموية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006119.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lip",
    "term_en": "Lip",
    "term_ar": "شفة",
    "synonyms": [
      "Lips",
      "Philtrum",
      "Philtrums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Either of the two fleshy, full-blooded margins of the mouth.",
    "arabic_definition": "الشفة (الجمع الشِّفاه) هي جزء مرئي من الفم في البشر وكثير من الحيوانات. تكون الشفاه ليّنة، متحركة، وهي بمثابة المدخل لتناول الطعام والتعبير عن الصوت والكلام والنطق. (Lip)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008046.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hip",
    "term_en": "Hip",
    "term_ar": "ورك",
    "synonyms": [
      "Hips",
      "Coxa",
      "Coxas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The projecting part on each side of the body, formed by the side of the pelvis and the top portion of the femur.",
    "arabic_definition": "في تشريح الفقاريات، الوَرِك (أو \"coxa\" في علم المصطلحات الطبية) يشير إما إلى المنطقة التشريحية أو المفصل. منطقة الورك تقع في جانب المنطقة الألوية (أي الأرداف)، أسفل العرف الحرقفي، ومتراكبة فوق المدور الكبير من عظمة الفخذ. (Hip)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006615.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "back",
    "term_en": "Back",
    "term_ar": "ظهر",
    "synonyms": [
      "Human back"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The rear surface of an upright primate from the shoulders to the hip, or the dorsal surface of tetrapods.",
    "arabic_definition": "ظهر الإنسان (والذي يُطلق عليه أيضًا اسم الظهر)هو المنطقة الخلفية الكبيرة في جسم الإنسان، والتي ترتفع من أعلى الأرداف إلى مؤخرة العنق. إنه سطح الجسم المقابل للصدر. (Back)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001415.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chin",
    "term_en": "Chin",
    "term_ar": "ذقن",
    "synonyms": [
      "Mental Region",
      "Mentum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The anatomical frontal portion of the mandible, also known as the mentum, that contains the line of fusion of the two separate halves of the mandible (symphysis menti). This line of fusion divides inferiorly to enclose a triangular area called the mental protuberance. On each side, inferior to the second premolar tooth, is the mental foramen for the passage of blood vessels and a nerve.",
    "arabic_definition": "في التشريح، الذَّقَن (بفتح القاف لا بتسكينها) أو المنطقة العقلية هو آخر جزء من منطقة الوجه تحت الشفة السفلى بما في ذلك بروز الفك السفلي، وهو الذي ينبت عليه شعر اللحية. وهي تتكون من الجزء السفلي من الفك السفلي. (Chin)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002680.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nose",
    "term_en": "Nose",
    "term_ar": "أنف",
    "synonyms": [
      "Noses",
      "External Nose",
      "External Noses",
      "Nose, External",
      "Noses, External"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A part of the upper respiratory tract. It contains the organ of SMELL. The term includes the external nose, the nasal cavity, and the PARANASAL SINUSES.",
    "arabic_definition": "الأَنْف هو عضو في جسم الإنسان والحيوانات التي تتنفس الهواء عبر تجويف رئوي، في مقابل الحيوانات التي تتنفس إما عن طريق الجلد أو عن طريق الخياشيم. بالإضافة إلى التنفس، فالأنف هو عضو الشم أيضاً ويحتوي الأنف على نهايات للأعصاب (أوردة وشرايين) تعمل على تدفئة الهواء ويحتوي الأنف أيضاً على الشعر لمنع دخول الأتربة والغبار، ويحتوي على السائل المخاطي وذلك لترطيب الجو. (Nose)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009666.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "liver",
    "term_en": "Liver",
    "term_ar": "كبد",
    "synonyms": [
      "Livers"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A large lobed glandular organ in the abdomen of vertebrates that is responsible for detoxification, metabolism, synthesis and storage of various substances.",
    "arabic_definition": "الكبد عضو موجود فقط في الفقاريات، يقوم بإزالة السمية من المُستقلَبات المختلفة، يركب البروتينات، وينتج المواد الكيميائية الحيوية اللازمة لعملية الهضم. في الإنسان، يتموضع الكبد في الربع العلوي الأيمن من البطن، تحت الحجاب الحاجز. (Liver)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008099.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leg",
    "term_en": "Leg",
    "term_ar": "طرف سفلي",
    "synonyms": [
      "Legs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inferior part of the lower extremity between the KNEE and the ANKLE.",
    "arabic_definition": "الطرف السفلي وهي المنطقة التي تمتد من الفخذ حتى أصابع القدم. وهي الرِّجْل لغةً. (Leg)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007866.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hand",
    "term_en": "Hand",
    "term_ar": "يد",
    "synonyms": [
      "Hands"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The distal part of the arm beyond the wrist in humans and primates, that includes the palm, fingers, and thumb.",
    "arabic_definition": "اليد طرف يتصل بالساعد عبر المعصم عند الإنسان. باليد خمس أصابع تسمح بتحسس الأشياء وتلمسها كما تساعد في مسكها. (Hand)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006225.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "elbow",
    "term_en": "Elbow",
    "term_ar": "مرفق",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Region of the body immediately surrounding and including the ELBOW JOINT.",
    "arabic_definition": "المِرفَق (اللاتينية: Cubitus) هو المفصل المرئي بين الجزأين العلوي والسفلي من الذراع. ويشمل المفصل عدّة تراكيب مهمة مثل الزُّج (النتوء العظمي الزندي في المرفق)، والحفرة المرفقية، واللقيمتان الأنسية والوحشية، ومفصل المرفق. (Elbow)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004550.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "feces",
    "term_en": "Feces",
    "term_ar": "براز",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excrement from the INTESTINES, containing unabsorbed solids, waste products, secretions, and BACTERIA of the DIGESTIVE SYSTEM.",
    "arabic_definition": "البراز هو ناتج عملية الهضم وبقايا الطعام الصلبة أو شبه الصلبة التي لم تهضم في الأمعاء الدقيقة، وتفككت بواسطة البكتيريا في الأمعاء الغليظة. يحتوي البراز على كمية صغيرة نسبيًا من الفضلات الأيضية مثل البيليروبين المتغير جرثوميًا، والخلايا الظهارية الميتة من بطانة الأمعاء. (Feces)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005243.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clitoris",
    "term_en": "Clitoris",
    "term_ar": "بظر",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An erectile structure homologous with the penis, situated beneath the anterior labial commissure, partially hidden between the anterior ends of the labia minora.",
    "arabic_definition": "البَـظْر عضو جنسي في إناث الثدييات والنعام وعدد محدود من الحيوانات الأخرى. في البشر، الجزء المرئي الشبيه بالزر البظر موجود بالقرب من التقاطع الأمامي للشفرين الصغيرين (الشفرين الداخليين)، فوق فوّهة الإحليل. (Clitoris)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002987.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "skeleton",
    "term_en": "Skeleton",
    "term_ar": "هيكل",
    "synonyms": [
      "Skeletons",
      "هيكل (أحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The rigid framework of connected bones that gives form to the body, protects and supports its soft organs and tissues, and provides attachments for MUSCLES.",
    "arabic_definition": "الهيكل أو الهيكل العظمي أو الجهاز الهيكلي هو جزء من تكوين أجسام الكائنات الحية الراقية كالثديات والطيور والكثير من أنواع الأسماك. مهمة الهيكل العظمي لدى الحيوانات التي لديها هياكل عظمية هو الدعم والحماية، فهو يشكل الجزء الأكثر صلابة من أجسامها وبالتالي يقوم بدعم الجسم ويحمل أجزاءه المختلفة ويحافظ على الشكل العام لأجسامها، كما يقوم بدور الحماية للأجزاء الحساسة، ومن الأمثلة على الجهاز الهيكلي عظام الجسم البشري وأصداف الكائنات البحرية، ومثال على دور الحماية الذي يقوم به الجهاز الهيكلي الجمجمة التي تحمي الدماغ والعمود الفقري الذي يحمي الحبل الشوكي والقفص الصدري الذي يحمي الأجزاء الداخلية من الصدر كالقلب والرئتين. (Skeleton)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012863.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urethra",
    "term_en": "Urethra",
    "term_ar": "إحليل",
    "synonyms": [
      "Urethras",
      "Urethral Sphincters",
      "Sphincter, Urethral",
      "Urethral Sphincter",
      "External Urinary Sphincter",
      "External Urinary Sphincters",
      "Sphincter, External Urinary",
      "Urinary Sphincter, External"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tube that transports URINE from the URINARY BLADDER to the outside of the body in both the sexes. It also has a reproductive function in the male by providing a passage for SPERM.",
    "arabic_definition": "في التشريح، الإحليل هو قناة تربط المثانة إلى خارج الجسم. للإحليل وظيفة إخراجية في الجنسين بإخراج البول إلى الخارج، وأيضاً له وظيفة جنسية في الذكر (لعبور السائل المنوي). (Urethra)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014521.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arteries",
    "term_en": "Arteries",
    "term_ar": "شريان",
    "synonyms": [
      "Artery"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The vessels carrying blood away from the heart.",
    "arabic_definition": "الشريان هو وعاء دموي، ينقل الدم من القلب إلى أعضاء الجسم، وتطلق هذه التسمية على الوعاء الدموي بغضّ النظر عن نسبة إشباعه بالأكسجين، إلا أنّ أغلب الشرايين هي الأوعية الغنية بالأكسجين، باستثناء الشريان الرئوي الذي ينقل الدم من القلب (بعد دورته في الجسم) إلى الرئتين لتغذيته بالأكسجين وتخليصه من غاز ثاني أكسيد الكربون CO2، والشريان السري الذي ينقل الدم غير المؤكسد من الجنين إلى الأم عبر الحبل السري. ويرجع لون الدم الأحمر الفاتح في الشرايين إلى وجود الأكسجين والحديد في كرات الدم الحمراء. (Arteries)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001158.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pancreas",
    "term_en": "Pancreas",
    "term_ar": "بنكرياس",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nodular organ in the ABDOMEN that contains a mixture of ENDOCRINE GLANDS and EXOCRINE GLANDS. The small endocrine portion consists of the ISLETS OF LANGERHANS secreting a number of hormones into the blood stream. The large exocrine portion (EXOCRINE PANCREAS) is a compound acinar gland that secretes several digestive enzymes into the pancreatic ductal system that empties into the DUODENUM.",
    "arabic_definition": "الْبَنكِرِيَاس (الإنجليزية: Pancreas) أو الْمُعَثْكَلَة أو الْمِعْقَد أو الْحُلْوَة أو لَوْزَةُ الْمَعِدَة أحد أهم الغدد الموجودة في جسم الثدييات ولها دور مزدوج حيث يعمل كغدة خارجية الإفراز تقوم بإفراز العصارة البنكرياسية المحتوية على أنزيمات هاضمة وغدة صماء أو داخلية الإفراز تقوم بإفراز هرموني الإنسولين والغلوكاغون اللذان ينظمان مستوى السكر في الدم. يبلغ حجم البنكرياس ما يقارب سبع بوصات ويتصل مع الأمعاء الدقيقة، بواسطة القناة البنكرياسية ويقع قريباً من المعدة وعميقاً في الجزء العلوي الخلفي للبطن مقابل العمود الفقري.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010179.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prostate",
    "term_en": "Prostate",
    "term_ar": "بروستات",
    "synonyms": [
      "Prostates"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A gland in males that surrounds the neck of the URINARY BLADDER and the URETHRA. It secretes a substance that liquefies coagulated semen. It is situated in the pelvic cavity behind the lower part of the PUBIC SYMPHYSIS, above the deep layer of the triangular ligament, and rests upon the RECTUM.",
    "arabic_definition": "البروستات أو البروستاتة أو البروستاتا أو البرُستاتة أو المُوثَة (الإنجليزية: Prostate) غدة ملحقة بالجهاز التناسلي الذكري، وتعمل بمثابة مفتاح ميكانيكي يتحكّم فيه النشاط العضلي للتبديل بين عمليتي التبوّل والقذف، وتوجد لدى جميع ذكور الثدييات. تختلف خصائصها التشريحية والكيميائية والوظيفية باختلاف الأنواع؛ وتقع أسفل المثانة، ويمر الإحليل عبرها.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011467.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "duodenum",
    "term_en": "Duodenum",
    "term_ar": "اثنا عشر",
    "synonyms": [
      "Duodenums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The shortest and widest portion of the SMALL INTESTINE adjacent to the PYLORUS of the STOMACH. It is named for having the length equal to about the width of 12 fingers.",
    "arabic_definition": "الٱثْنَا عَشَرِيُّ أو العَفَج (الإنجليزية: Duodenum) أولُ قسمٍ من الأمعاء الدقيقة في معظم الفقاريات العليا، بما في ذلك الثدييَّات والزواحف والطيور. أما في الأسماك فإنَّ تقسُّم الأمعاء الدقيقة ليس بذلك الوضوح، وتُستعمل عندئذٍ المصطلحات المِعَى الأمامي والمِعَى الخلفي أو المِعَ الداني (القريب) بدلاً من العفج أو الاثني عشري.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004386.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trachea",
    "term_en": "Trachea",
    "term_ar": "قصبة هوائية",
    "synonyms": [
      "Tracheas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The cartilaginous and membranous tube descending from the larynx and branching into the right and left main bronchi.",
    "arabic_definition": "القصبة الهوائية أو الرُغامى (اللاتينية: Trachea) هي ممر يوجد في الجهاز التنفسي، ويحمل الهواء بين الرئتين والممرات التنفسية العليا. قطر القصبة الهوائية عند الإنسان 2.5 سم، وطوله 13 سم تقريباً.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014132.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thalamus",
    "term_en": "Thalamus",
    "term_ar": "مهاد",
    "synonyms": [
      "Thalamencephalon",
      "Thalamencephalons"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Paired bodies containing mostly GRAY MATTER and forming part of the lateral wall of the THIRD VENTRICLE of the brain.",
    "arabic_definition": "المِهاد أو الثلاموس (اللاتينية: Thalamus)، وهي كلمة إغريقيّة تعني الحُجرة. المهاد هي كتلة كبيرة في المادة الرّماديّة في الجزء الظّهريّ للدّماغ البينيّ، والذي هو جزء من الدماغ.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013788.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "perineum",
    "term_en": "Perineum",
    "term_ar": "عجان",
    "synonyms": [
      "Perineums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The body region lying between the genital area and the ANUS on the surface of the trunk, and to the shallow compartment lying deep to this area that is inferior to the PELVIC DIAPHRAGM. The surface area is between the VULVA and the anus in the female, and between the SCROTUM and the anus in the male.",
    "arabic_definition": "العِجان (اللاتينية: Perineum) هي المنطقة الملساء الواقعة بين كيس الصفن والشرج في الذكور والفتحة التناسلية الانثوية والشرج في الإناث، وتعتبر من مناطق الإثارة الجنسية لأنها غنية بالأعصاب. وقد تُشَقّ هذه المنطقة لدى الإناث عند الولادة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010502.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dentition",
    "term_en": "Dentition",
    "term_ar": "مجموع سني",
    "synonyms": [
      "Dentitions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The teeth collectively in the dental arch. Dentition ordinarily refers to the natural teeth in position in their alveoli. Dentition referring to the deciduous teeth is DENTITION, PRIMARY; to the permanent teeth, DENTITION, PERMANENT. (From Jablonski, Dictionary of Dentistry, 1992)",
    "arabic_definition": "التَسْنين أو الإسْنَان أو المجموع السني أو الإثغار (الإنجليزية: Dentition) مصطلح يشير إلى عدد الأسنان وتطورها وترتيبها في الفك ونوعها بالإضافة إلى وظيفة كل نوع تبعًا لشكل السن للحيوانات والبشر في عمر معين. يُطلق المصطلح التشريحي متماثل الأسنان على الحيوان أحادي المورفولوجيا السنية، وعلى النقيض من ذلك يُطلق على الحيوان متعدد المورفولوجيا السنية مصطلح متغاير الأسنان.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003817.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tendons",
    "term_en": "Tendons",
    "term_ar": "وتر",
    "synonyms": [
      "Tendon",
      "Tendons, Para-Articular",
      "Para-Articular Tendon",
      "Para-Articular Tendons",
      "Tendon, Para-Articular",
      "Tendons, Paraarticular",
      "Paraarticular Tendon",
      "Paraarticular Tendons"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fibrous bands or cords of CONNECTIVE TISSUE at the ends of SKELETAL MUSCLE FIBERS that serve to attach the MUSCLES to bones and other structures.",
    "arabic_definition": "الوَتَر (الإنجليزية: Tendon) هو شريط متين من الأنسجة الضامة الليفية التي تربط عضلة معينة بجزء آخر من الجسم، عادة إلى عظم معين (في حالات معينة يربط عضلة بعضلة أخرى)، ويمتاز الوتر بقدرته على تحمل الضغط. تتشابه الأوتار مع الأربطة والأسفقة من حيث مبناها. (Tendons)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013710.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amygdala",
    "term_en": "Amygdala",
    "term_ar": "لوزة دماغية",
    "synonyms": [
      "Amygdaloid Body",
      "Amygdaloid Bodies",
      "Amygdaloid Nuclear Complex",
      "Amygdaloid Nuclear Complices",
      "Complex, Amygdaloid Nuclear",
      "Complices, Amygdaloid Nuclear",
      "Nuclear Complex, Amygdaloid",
      "Nuclear Complices, Amygdaloid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Almond-shaped group of basal nuclei anterior to the INFERIOR HORN OF THE LATERAL VENTRICLE of the TEMPORAL LOBE. The amygdala is part of the limbic system.",
    "arabic_definition": "اللوزة الدماغية أو اللوزة العصبية أو اللوزة (الإنجليزية: Amygdala)، وتعرف أيضًا باسم الجسم اللوزي (الإنجليزية: Corpus Amygdaloideum)، هي جزء من الدماغ تقع داخل الفص الصدغي من المخ أمام الحصين. اللوزة الدماغية تشكل جزءا من الجهاز الحوفي، وتشارك في إدراك وتقييم العواطف والمدارك الحسية والاستجابات السلوكية المرتبطة بالخوف والقلق وهي تراقب باستمرار ورود أي إشارات خطر من حواس الإنسان تعدّ كنظام إنذار واستشعار للمتعة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000679.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "viscera",
    "term_en": "Viscera",
    "term_ar": "عضو",
    "synonyms": [
      "Organ (biology)",
      "عضو (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any of the large interior organs in any one of the three great cavities of the body, especially in the abdomen.",
    "arabic_definition": "عند الكائن متعدد الخلايا، العضو هو مجموعة من الأنسجة المرتبطة في وحدة هيكلية لتؤدي وظيفة مشتركة. في تسلسل الحياة، يوجد العضو بين النسيج وجهاز الأعضاء. (Viscera)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014781.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cartilage",
    "term_en": "Cartilage",
    "term_ar": "غضروف",
    "synonyms": [
      "Cartilages"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A non-vascular form of connective tissue composed of CHONDROCYTES embedded in a matrix that includes CHONDROITIN SULFATE and various types of FIBRILLAR COLLAGEN. There are three major types: HYALINE CARTILAGE; FIBROCARTILAGE; and ELASTIC CARTILAGE.",
    "arabic_definition": "الغُضْرُوف (الإنجليزية: Cartilage) هو نوعٌ مرنٌ وسلسٌ من النسيج الضام. في رباعيات الأطراف، يغطي الغضروف ويحمي نهايات العظام الطويلة عند المفاصل مثل الغضروف المفصلي(الزجاجي)، وهو مكون بنيوي للعديد من أجزاء الجسم بما في ذلك القفص الصدري والرقبة والشعب الهوائية والأقراص بين الفقرات.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002356.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clavicle",
    "term_en": "Clavicle",
    "term_ar": "ترقوة",
    "synonyms": [
      "Clavicles",
      "Collar Bone",
      "Bone, Collar",
      "Bones, Collar",
      "Collar Bones"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A bone on the ventral side of the shoulder girdle, which in humans is commonly called the collar bone.",
    "arabic_definition": "التَّرْقُـوَة (الجمع: التَّراقي) أو الناحرة (الإنجليزية: Clavicle) عظم يُصَنَّف في تشريح جسم الإنسان بأحد العظام الطويلة، وهي تعمل دعامة بين لوح الكتف في الظهر وعظم القص في منتصف الصدر. هناك ترقوتان، واحدة علي اليمين والأخرى على اليسار، وهي العظم الطويل الوحيد الذي يقع أفقياً في جسم الإنسان.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002968.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acromion",
    "term_en": "Acromion",
    "term_ar": "أخرم",
    "synonyms": [
      "Acromions",
      "Acromion Process",
      "Acromion Processes",
      "أخرم (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The lateral extension of the spine of the SCAPULA and the highest point of the SHOULDER.",
    "arabic_definition": "الأخرم (اللاتينية: Acromion) هو امتداد لشوكة لوح الكتف. يمتد الأخرم و الناتئ الغرابى معا جانبيا فوق المفصل الحقاني العضدي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000174.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nephrons",
    "term_en": "Nephrons",
    "term_ar": "وحدة أنبوبية كلوية",
    "synonyms": [
      "Nephron"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The functional units of the kidney, consisting of the glomerulus and the attached tubule.",
    "arabic_definition": "هذه المقالة تتحدث عن المصفاة الكلوية، أما عن السياسي اليوناني أنظر كليون (سياسي). الكُلْيُون (الجمع: كُلْيُونَات) أو وحْدَة كُلْوِيَّة (الإنجليزية: Nephron) هو الوحدة الفاعلة الأساسية في الكلية، ويمكن تسميته اصطلاحًا مصفاة الكلية. (Nephrons)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009399.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "koumiss",
    "term_en": "Koumiss",
    "term_ar": "قمارص",
    "synonyms": [
      "Kumis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A beverage made from horse's milk that is fermented by endogenous LACTIC ACID-producing bacteria and ETHANOL-producing yeast.",
    "arabic_definition": "القُمارِص أو القُرْمص أو القُمْرِصُ أو القارِصُ (القرغيزية: Кымыз) (ويُلفظ: قُمِز) ويعرف بالتركية باسم قمز (التركية: Kımız) أو الآمص، هو أحد أنواع الألبان المُخمّرة خصّه البعض بحليب الإبل وفي آسيا الوسطى يُصنع من حليب الفرس، سمّاه العرب بالقمارص لأنه يقرص اللسان لشدّة حموضته، وضُرب فيه الأمثال حتى قيل: «عَدَا الْقَارِصُ فَحَزَرَ» (أَيْ: جَاوَزَ الْحَدَّ إِلَى أَنْ حَمِضَ يَعْنِي تَفَاقَمَ الْأَمْرُ وَاشْتَدَّ). وعُرِف لدى العرب والشعوب التركية، وهو شراب هامٌ لدى شعوب سهوب آسيا الوسطى من أصول هونو-بلغار والترك ومنغولية: وتشمل هذه الشعوب الكازاخ والباشكير والقلميقيون والقرغيز والمغول والياكوت. (Koumiss)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000070736.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shoulder",
    "term_en": "Shoulder",
    "term_ar": "كتف",
    "synonyms": [
      "Shoulders"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Part of the body in humans and primates where the arms connect to the trunk. The shoulder has five joints; ACROMIOCLAVICULAR joint, CORACOCLAVICULAR joint, GLENOHUMERAL joint, scapulathoracic joint, and STERNOCLAVICULAR joint.",
    "arabic_definition": "الكتف (الإنجليزية: Shoulder) هي المنطقة التي تربط العضد مع الجذع. تتكون من 3 عظام الترقوة ولوح الكتف والجزء العلوي من عظمة العضد.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012782.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epidermis",
    "term_en": "Epidermis",
    "term_ar": "بشرة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The external, nonvascular layer of the skin. It is made up, from within outward, of five layers of EPITHELIUM: (1) basal layer (stratum basale epidermidis); (2) spinous layer (stratum spinosum epidermidis); (3) granular layer (stratum granulosum epidermidis); (4) clear layer (stratum lucidum epidermidis); and (5) horny layer (stratum corneum epidermidis).",
    "arabic_definition": "البَشْرَة (الإنجليزية: Epidermis)، طبقة الجلد الخارجية. وهي الطبقة العليا في الجلد، أما الطبقة السفلى أو الداخلية فتسمى الأدمة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004817.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meninges",
    "term_en": "Meninges",
    "term_ar": "سحايا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The three membranes that cover the BRAIN and the SPINAL CORD. They are the dura mater, the arachnoid, and the pia mater.",
    "arabic_definition": "السَحَايَا (المفرد: سِحاءَة) (الإنجليزية: Meninges) (المفرد: meninx) هي الأغشية التي تحيط بالدماغ والنخاع الشوكي تتكون من ثلاثة طبقات تغطي الدماغ واسمها من الخارج إلى الداخل: الأم الجافية الأم العنكبوتية الأم الحنون الطبقة الخارجية هي طبقة صلبة بينما الطبقة الداخلية هي رقيقة. تغلف الأم الجافية الدماغ وتبطن الجمجمة وتنزل منها حواجز septae.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008578.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "forehead",
    "term_en": "Forehead",
    "term_ar": "جبهة",
    "synonyms": [
      "Foreheads"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The part of the face above the eyes.",
    "arabic_definition": "الجَبهَة أو الجَبين في علم تشريح الإنسان هي الجزء من الرأس الواقع أعلى العينين، أو ما يطلق عليه مقدمة الرأس. تتشكل من ثلاثة أقسام: قسم عمودي وقسم أنفي وقسم أفقي. (Forehead)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005546.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epiphyses",
    "term_en": "Epiphyses",
    "term_ar": "مشاشة",
    "synonyms": [
      "Epiphysis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The head of a long bone that is separated from the shaft by the epiphyseal plate until bone growth stops. At that time, the plate disappears and the head and shaft are united.",
    "arabic_definition": "المُشاشة (ويطلق عليه اسم الكردوس في بعض المصادر) (الإنجليزية: Epiphysis) هي النهاية المستديرة للعظام الطويلة، مع المفصل للعظام المجاور. يقع الكردوس بين المشاشة وجسم العظم (القسم الوسطي الطويل للعظام الطويلة)، ويشمل ذلك لوحة المشاش (لوحة النمو). (Epiphyses)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004838.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eyebrows",
    "term_en": "Eyebrows",
    "term_ar": "حاجب عين",
    "synonyms": [
      "Eyebrow"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Curved rows of HAIR located on the upper edges of the eye sockets.",
    "arabic_definition": "حاجب العين شريط على شكل قوس تشكله شعيرات تنمو أعلى عين الإنسان. يساهم الحاجب في حماية العين من قطرات العرق أو المطر وغيرهما. (Eyebrows)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005138.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerebrum",
    "term_en": "Cerebrum",
    "term_ar": "مخ",
    "synonyms": [
      "Cerebra",
      "Cerebral Hemispheres",
      "Cerebral Hemisphere",
      "Left Cerebral Hemisphere",
      "Cerebral Hemisphere, Left",
      "Right Cerebral Hemisphere",
      "Cerebral Hemisphere, Right"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Derived from TELENCEPHALON, cerebrum is composed of a right and a left hemisphere. Each contains an outer cerebral cortex and a subcortical basal ganglia. The cerebrum includes all parts within the skull except the MEDULLA OBLONGATA, the PONS, and the CEREBELLUM. Cerebral functions include sensorimotor, emotional, and intellectual activities.",
    "arabic_definition": "المخ (اللاتينية: Cerebrum) أو الدماغ الانتهائي (اللاتينية: Telencephalon) هو القسم الأكبر، والأهم، في الجهاز العصبي، المركزي، حيث يتشكل من نصفي كرة، مخيتين منفصلتين، يرتبطان بجسر عصبي (حزمة عريضة من الألياف العصبية البيضاء) تجتمع هذه الحزم على شكل جسم، يسمى الجسم الثفني. ويهتم المخ بشكل عام، بالوظائف الإدراكية، والحسية، والعقلية، ووظائف اللغة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054022.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenoids",
    "term_en": "Adenoids",
    "term_ar": "زائدة أنفية",
    "synonyms": [
      "Adenoid",
      "Pharyngeal Tonsil",
      "Tonsils, Pharyngeal",
      "Pharyngeal Tonsils",
      "Tonsil, Pharyngeal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A collection of lymphoid nodules on the posterior wall and roof of the NASOPHARYNX.",
    "arabic_definition": "الزائدة الأنفية أو لحمية الأنف (باللاتينية:tonsilla pharyngea وتعني اللوزة الأنفية البلعومية) هي كتلة من الأنسجة الليمفية تقع خلف تجويف الأنف في سقف البلعوم الأنفي حيث يلتقي الأنف بالحنجرة، وعادة عند الأطفال تشكل كومة لينة في الشقف الخلفي لجدار البلعوم الأنفي خلف أعلى اللهاة. (Adenoids)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000234.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "calcaneus",
    "term_en": "Calcaneus",
    "term_ar": "عقبي",
    "synonyms": [
      "Heel Bone",
      "Bone, Heel"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The largest of the TARSAL BONES which is situated at the lower and back part of the FOOT, forming the HEEL.",
    "arabic_definition": "العَقِبِيّ أو العَظْم العَقِبِيّ أو عَظْم العَقِب (الإنجليزية: Calcaneus) هو أكبر عظام الرُصُغ يقع في القسم الخلفي من القدم، ويطلق عليه أيضاً عظم الكعب حيث أنه العظم من طرسوس في القدم والتي تشكل الكعب. في بعض الحيوانات الأخرى، هو نقطة العرقوب.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002111.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colostrum",
    "term_en": "Colostrum",
    "term_ar": "لبأ",
    "synonyms": [
      "Colostrums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The thin, yellow, serous fluid secreted by the mammary glands during pregnancy and immediately postpartum before lactation begins. It consists of immunologically active substances, white blood cells, water, protein, fat, and carbohydrates.",
    "arabic_definition": "اللِّبَأُ (والسَّرْسُوبُ) أول الألبان عند الولادة. هو حليب يُنتج بواسطة الغدد الثديية من الثدييات في أواخر الحمل تحديدا قبيل الولادة. (Colostrum)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003126.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "venules",
    "term_en": "Venules",
    "term_ar": "وريد (صغير)",
    "synonyms": [
      "Venule"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The minute vessels that collect blood from the capillary plexuses and join together to form veins.",
    "arabic_definition": "الوُرَيد (بضم حرف الواو) هو وعاء دموي صغير جدا (بالإنجليزية: venule) في دوران الأوعية الدقيقة الذي يسمح ل الدم بالعودة من تجمع الشعيرات الدموية ليصب في الأوعية الدموية الكبيرة، للمقارنة راجع الأوردة. ويتراوح قطر الوريد من 7 إلى 50 μm . (Venules)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014699.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endolymph",
    "term_en": "Endolymph",
    "term_ar": "لمف داخلي",
    "synonyms": [
      "Endolymphs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The lymph fluid found in the membranous labyrinth of the ear. (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "الليمف الداخلي ويسمى أيضا سائل سكاربا (نسبة إلى أنطونيو سكاربا) هو السائل الموجود في التيه الغشائي داخل الأذن الداخلية، ويُمثل البوتاسيوم الأيون الرئيسي فيه هذا السائل بتركيز 154 مم، ويكون تركيز الصوديوم 0.91 مم، (Endolymph)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004710.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ependyma",
    "term_en": "Ependyma",
    "term_ar": "بطانة عصبية",
    "synonyms": [
      "Ependymas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A thin membrane that lines the CEREBRAL VENTRICLES and the central canal of the SPINAL CORD.",
    "arabic_definition": "البطانة العصبية هي بطانة عصبية ظهارية رقيقة في الجهاز البطيني للدماغ والقناة المركزية للحبل الشوكي . البطانة العصبية هي أحد أنواع الخلايا الدبقية العصبية الأربعة في الجهاز العصبي المركزي (CNS)، وتعتبر من ضمن عملية إنتاج السائل النخاعي (CSF) ، والذي يبدو أنه يعمل بمثابة خزان للتجدد العصبي . (Ependyma)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004805.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bicuspid",
    "term_en": "Bicuspid",
    "term_ar": "ضاحكة",
    "synonyms": [
      "Bicuspids",
      "Premolar",
      "Premolars"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of the eight permanent teeth, two on either side in each jaw, between the canines (CUSPID) and the molars (MOLAR), serving for grinding and crushing food. The upper have two cusps (bicuspid) but the lower have one to three. (Jablonski, Dictionary of Dentistry, 1992, p822)",
    "arabic_definition": "الضواحك أو النواجذ (الإنجليزية: premolars) (والمفرد: ضاحكة أو ضاحك أو ناجذة أو قَبْطاحِن (الإنجليزية: premolar)) هي أسنان انتقالية تتواجد بين الأنياب والأرحاء. يمتلك الإنسان سنين ضاحكتين في كل ربع من الفك للأسنان الدائمة، مما يعني وجود ثمان ضواحك في الفم بأكمله. (Bicuspid)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001641.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "habenula",
    "term_en": "Habenula",
    "term_ar": "عنان",
    "synonyms": [
      "Habenulas",
      "Habenula Complex",
      "Complex, Habenula",
      "Complices, Habenula",
      "Habenula Complices",
      "Nucleus Habenularis",
      "Habenulari, Nucleus",
      "Habenularis, Nucleus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A small protuberance at the dorsal, posterior corner of the wall of the THIRD VENTRICLE, adjacent to the dorsal THALAMUS and PINEAL BODY. It contains the habenular nuclei and is a major part of the epithalamus.",
    "arabic_definition": "العِنان (الإنجليزية: habenula) هي بنية تشريحية تشبه لجام الفرس. يستقبل العِنان من الدماغ النواقل العصبية عبر خط النخاع وتخرجه إلى عدّة مناطق في الدماغ البيني ومنها هرمونات السيرتونين والميلاتونين والنورأبيفرين أو الأدرينالين.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019262.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "buttocks",
    "term_en": "Buttocks",
    "term_ar": "أرداف",
    "synonyms": [
      "Buttock",
      "Gluteal Region",
      "Gluteal Regions",
      "Region, Gluteal",
      "Regions, Gluteal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Either of two fleshy protuberances at the lower posterior section of the trunk or HIP in humans and primate on which a person or animal sits, consisting of gluteal MUSCLES and fat.",
    "arabic_definition": "الأرداف (المفرد: ردف)،(الإنجليزية: Buttocks) هما جزآن مستديران من التشريح الخارجي لمعظم الثدييات، ويقعان في الجزء الخلفي من منطقة الحوض. تتواجد الأرداف في البشر بين أسفل الظهر والعجان.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002081.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "foreskin",
    "term_en": "Foreskin",
    "term_ar": "قلفة",
    "synonyms": [
      "Foreskins"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The double-layered skin fold that covers the GLANS PENIS, the head of the penis.",
    "arabic_definition": "القُلْفَة أو القَلَفَة أو الغُرْلَة (الإنجليزية: Foreskin) في جسم الإنسان الذكر جلد رقيق فضفاض ما به شعر وغني بالألياف العضلية يحمي ويغطي جزءاً من رأس القضيب (الحشفة)، وهي بمعظمها خصائص تسمح له بأن تستجيب لتغيير طول القضيب عندالانتصاب وتزال في الختان. انطواء الجلد على نفسه فوق الرأس هو ما يكون مظهر القلفة، و٤٪ من قلف الأولاد قد تنقبض حين الولادة، ويبقى جلها ثابتاً على حشفه القضيب بأوائل السنين، وإن لم تختّن القلفة فلا ترغمنّها أن تنسلخ عن الحشفة، فالتحامهما تفككه بطيء ويصير لنحو ٩٠٪ من الأولاد قبل الثالثةِ مقدرةُ سحب القلفة إلى حد ما، والألياف مثبتة القلفة بالرأس تمنع تراجعه كله لقرابة ٦٠٪ من أولاد التاسعة، وعلى العموم تختفي كل الألياف المثبته قبل سن 17 وتتحرر القلفة كليًا وتسمى وقتها قلفة ناضجة، فالقلفةُ الناضجةُ غطاءٌ جلديٌ يحمي الحشفة ويبقيها رطبة، وفي الانتصاب مع تضخم القضيب بسبب امتلاءه بالدم، تنزلق القلفة إلى الوراء لتغطي جسم القضيب كاشفة الرأس كله.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D052816.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mandible",
    "term_en": "Mandible",
    "term_ar": "فك سفلي",
    "synonyms": [
      "Mandibles",
      "Mylohyoid Ridge",
      "Mylohyoid Ridges",
      "Ridge, Mylohyoid",
      "Ridges, Mylohyoid",
      "Mylohyoid Groove",
      "Groove, Mylohyoid",
      "Grooves, Mylohyoid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The largest and strongest bone of the FACE constituting the lower jaw. It supports the lower teeth.",
    "arabic_definition": "عظمُ الفَكِّ السُّفلِيّ (الإنجليزية: Mandible) (بالإنجليزيّة المحكيّة: Lower jaw) أو عظم الفك (الإنجليزية: Jawbone)، (اللاتينية: Mandibula)، هو أكبر وأقوى وأدنى (في المستوى) عظم في هيكل الوجه. يحمل هذا العظم الأسنان السفلية، ويقع هذا العظم أسفل عظم الفك العلويّ.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008334.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ganglia",
    "term_en": "Ganglia",
    "term_ar": "عقدة",
    "synonyms": [
      "Ganglion",
      "عقدة (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Clusters of multipolar neurons surrounded by a capsule of loosely organized CONNECTIVE TISSUE located outside the CENTRAL NERVOUS SYSTEM.",
    "arabic_definition": "العُقدة أو عُقدة عصبية (الإنجليزية: Ganglion) هوَ مُصطلح تشريحي يَدل على تَجمُع من الخَلايا العَصبية أو تَجمع أجسام الخلايا العَصبية الموجودة في الجِهاز العَصبي الذاتي، حيث تتواجد أجسام الخَلايا العَصبية الورادة في العُقدة. (Ganglia)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005724.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glottis",
    "term_en": "Glottis",
    "term_ar": "مزمار",
    "synonyms": [
      "Rima Glottidis",
      "Glottidi, Rima",
      "Glottidis, Rima",
      "Rima Glottidi",
      "مزمار (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The vocal apparatus of the larynx, situated in the middle section of the larynx. Glottis consists of the VOCAL FOLDS and an opening (rima glottidis) between the folds.",
    "arabic_definition": "في التشريح، المِزْمَار أو الزَّرْدَمَة (الإنجليزية: glottis) هو الفتحة الموجودة بين الأحبال الصوتية، وتُسمى مشق المزمار أو الحواف المزمارية (الإنجليزية: rima glottidis). في علم وظائف الأعضاء، يشكل المزمار الحد الفاصل بين الطريقين الصوتيين العلوي والسفلي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005931.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "uterus",
    "term_en": "Uterus",
    "term_ar": "رحم",
    "synonyms": [
      "Womb",
      "Wombs",
      "Uteri",
      "Uterine Fundus",
      "Fundus, Uterine",
      "Fundus Uteri",
      "Fundus Uterus",
      "Uteri, Fundus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The hollow thick-walled muscular organ in the female PELVIS. It consists of the fundus which is the site of EMBRYO IMPLANTATION and FETAL DEVELOPMENT. Beyond the isthmus at the perineal end of fundus, is CERVIX UTERI (the neck) opening into VAGINA. Beyond the isthmi at the upper abdominal end of fundus, are the FALLOPIAN TUBES.",
    "arabic_definition": "الرحم هي العضو الموجود في الجهاز التناسلي لدى معظم الثدييات الإناث، بما في ذلك الإنسان، والذي يستضيف التطور المضغي والجنيني لبويضة مخصبة (بيضة ملقحة) واحدة أو أكثر حتى الولادة. الرحم عضو جنسي يستجيب للهرمونات يحتوي على غدد في بطانته تفرز اللبن الرحمي (الحليب الرحمي) لتغذية الجنين. (Uterus)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014599.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vagina",
    "term_en": "Vagina",
    "term_ar": "مهبل",
    "synonyms": [
      "Vaginas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The genital canal in the female, extending from the UTERUS to the VULVA. (Stedman, 25th ed)",
    "arabic_definition": "المَهْبِل (في الثدييات) هو الجزء العضلي المرن من الجهاز التناسلي للأنثى. في البشر يمتد المهبل من الدهليز الفرجي حتى عنق الرحم. (Vagina)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014621.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "venoms",
    "term_en": "Venoms",
    "term_ar": "زعاف (سم حيواني)",
    "synonyms": [
      "Venom"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Poisonous animal secretions forming fluid mixtures of many different enzymes, toxins, and other substances. These substances are produced in specialized glands and secreted through specialized delivery systems (nematocysts, spines, fangs, etc.) for disabling prey or predator.",
    "arabic_definition": "الزعاف أو السُم الحيواني هو نوع من السموم تُنتجها الحيوانات لتصيب به ضحيتها عن طريق العض أو اللدغ أو غيرها، عبر الاستعانة بعضو مخصص لإيصال السم، كالناب الداخلي أو الشوكة، لإحداث حالة تسمم. غالبًا ما يتمييز الزعاف عن غيره من السموم التي تنتقل إلى الضحية بشكل سلبي عن طريق الابتلاع أو الاستنشاق أو الامتصاص عبر الجلد، أو التي تنتقل إلى السطح الخارجي للضحية عبر البصق أو الرش أو التلطيخ. (Venoms)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014688.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "putamen",
    "term_en": "Putamen",
    "term_ar": "بطامة",
    "synonyms": [
      "Putamens",
      "Nucleus Putamen",
      "Nucleus Putamens",
      "Putamen, Nucleus",
      "Putamens, Nucleus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The largest and most lateral of the BASAL GANGLIA lying between the lateral medullary lamina of the GLOBUS PALLIDUS and the EXTERNAL CAPSULE. It is part of the neostriatum and forms part of the LENTIFORM NUCLEUS along with the GLOBUS PALLIDUS.",
    "arabic_definition": "البَطامَة (بالإنجليزية:putamen) هي بنية دائرية في قاعدة الدماغ الأمامي. البطامة والنواة الذنبية تكونان معا المخطط الظهري وهي تعتبر أيضا أحد الهياكل التي تحتويها العقد القاعدية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011699.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fingers",
    "term_en": "Fingers",
    "term_ar": "إصبع اليد",
    "synonyms": [
      "Finger"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Four or five slender jointed digits in humans and primates, attached to each HAND.",
    "arabic_definition": "إِصْبَعُ ٱلْيَدِ (الجمع: ٱلْأَصَابِعُ) طرفٌ من جسم الإنسان، وهو عضو التداول باليد (الإمساك، والتقليب، والتحريك، ونحوها)، وعضو الإحساس، وهو في أيدي البشر والرئيسيات. وتسمى الأصابع من الصغرى للكبرى: الخِنصِر، والبِنصِر، والوُسطىٰ، والسَّبَّابة، والإبهام. (Fingers)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005385.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spleen",
    "term_en": "Spleen",
    "term_ar": "طحال",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An encapsulated lymphatic organ through which venous blood filters.",
    "arabic_definition": "الطِحَال (الإنجليزية: Spleen) عضوٌ في الإنسان وفي الحيَوانات الفَقَارية جميعِها. أمَّا طِحَالُ الإنسان، فهو عضو مفرد، وهو أكبر كتلة مفردة من النسيج اللمفاوي في الجسم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013154.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retina",
    "term_en": "Retina",
    "term_ar": "شبكية",
    "synonyms": [
      "Ora Serrata"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The ten-layered nervous tissue membrane of the eye. It is continuous with the OPTIC NERVE and receives images of external objects and transmits visual impulses to the brain. Its outer surface is in contact with the CHOROID and the inner surface with the VITREOUS BODY. The outer-most layer is pigmented, whereas the inner nine layers are transparent.",
    "arabic_definition": "شبكية العين (اللاتينية: retina) وهي الطبقة الأعمق والأكثر حساسية للضوء من أنسجة عين معظم الفقاريات وبعض الرخويات. تخلق بصريات العين صورة مركزة ثنائية الأبعاد للعالم المرئي على شبكية العين، والتي تترجم تلك الصورة إلى نبضات عصبية كهربائية للدماغ لإنشاء الإدراك البصري.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012160.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tongue",
    "term_en": "Tongue",
    "term_ar": "لسان",
    "synonyms": [
      "Tongues"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A muscular organ in the mouth that is covered with pink tissue called mucosa, tiny bumps called papillae, and thousands of taste buds. The tongue is anchored to the mouth and is vital for chewing, swallowing, and for speech.",
    "arabic_definition": "اللِّسَانُ لغةً اللِّسَانُ . - لِسَانُ واللِّسَانُ: جسم لحميّ مستطيل متحرك، يكون في الفم، ويصلح للتّذوُّق والبلع، وللنطق .. (Tongue)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014059.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "testis",
    "term_en": "Testis",
    "term_ar": "خصية",
    "synonyms": [
      "Testes",
      "Testicles",
      "Testicle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The male gonad containing two functional parts: the SEMINIFEROUS TUBULES for the production and transport of male germ cells (SPERMATOGENESIS) and the interstitial compartment containing LEYDIG CELLS that produce ANDROGENS.",
    "arabic_definition": "الخصْيَة هي الغدد التناسلية الذكرية في الحيوانات، والخصيتين عضو في كل من الجهاز التناسلي وجهاز الغدد الصماء. تُسمَّى الغدة التناسلية في ذكور الطير حِسْيَة، وهما حِسْيَتَان تفرزان الكراض. (Testis)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013737.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stapes",
    "term_en": "Stapes",
    "term_ar": "ركاب",
    "synonyms": [
      "ركاب (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of the three ossicles of the middle ear. It transmits sound vibrations from the INCUS to the internal ear (Ear, Internal see LABYRINTH).",
    "arabic_definition": "الرِّكَاب (الإنجليزيّة: Stirrup، اللاتينيّة: Stapes) عظمٌ يوجد في الأذن الوسطى عند الإنسان وثدييات أخرى، تشارك عظمة الرِّكَاب في إيصال الاهتزازات الصوتية إلى الأذن الداخلية. يأخذ العظم شكل الركاب في عدة الفرس، و يقوم بنقل الاهتزازات إلى النافذة البيضيّة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013199.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "jejunum",
    "term_en": "Jejunum",
    "term_ar": "صائم",
    "synonyms": [
      "Jejunums",
      "صائم (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The middle portion of the SMALL INTESTINE, between DUODENUM and ILEUM. It represents about 2/5 of the remaining portion of the small intestine below duodenum.",
    "arabic_definition": "الصائم (اللاتينية: Jejunum) الجزء الثاني من الأمعاء الدقيقة ويشكل الخُمْسَيْن العلويين من الأمعاء الدقيقة، تمتد من نهاية العفج إلى اللفائفي، ويتوضع جزئه الرئيس في منطقة السرة، ولكنه قد يتحرك حسب الظروف، إلى مناطق مجاورة. بطانتها متخصصة في امتصاص الخلايا المعوية لجزيئات المغذيات الصغيرة التي تم هضمها سابقا بواسطة الإنزيمات في العفج.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007583.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cochlea",
    "term_en": "Cochlea",
    "term_ar": "قوقعة",
    "synonyms": [
      "Cochleas",
      "قوقعة (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The part of the inner ear (LABYRINTH) that is concerned with hearing. It forms the anterior part of the labyrinth, as a snail-like structure that is situated almost horizontally anterior to the VESTIBULAR LABYRINTH.",
    "arabic_definition": "القوقعة (اللاتينية: Cochlea) هو القسم المسؤول عن السمع موجودة في الأذن الداخلية ضمن العظم الصدغي. وللقوقعة تجويف حلزوني الشكل يتكون عند البشر من 2.75 دورة حول محوره.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003051.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nipples",
    "term_en": "Nipples",
    "term_ar": "حلمة",
    "synonyms": [
      "Nipple",
      "Areola",
      "Areolae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The conic organs which usually give outlet to milk from the mammary glands.",
    "arabic_definition": "الحَلَمَة هي الثؤلول (الجزء الامامي) في وسط ثدي المرأة يمتص منه الحليب. وهي مهمة فسيولوجيا من حيث مرور الحليب بها بعد الولادة لإرضاع الطفل. (Nipples)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009558.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "smegma",
    "term_en": "Smegma",
    "term_ar": "لخن",
    "synonyms": [
      "Smegmas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A foul-smelling accumulation of SEBUM and desquaminated epidermal cells, especially the cheesy substance found under the foreskin of the penis and at the base of the labia minor near the clitoris.",
    "arabic_definition": "اللخن (الإنجليزية: Smegma) هو مزيج من نسيج طلائي مُقشر وزيوت الجلد ورطوبة، يحدُث في الأعضاء التناسلية في الذكور والإناث. في أجسام الإناث تتجمع حول البظران وفي طيات الشفران الصغيران، أما في الذكور، تتجمع أسفل القلفة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012902.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ureter",
    "term_en": "Ureter",
    "term_ar": "حالب",
    "synonyms": [
      "Ureters"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of a pair of thick-walled tubes that transports urine from the KIDNEY PELVIS to the URINARY BLADDER.",
    "arabic_definition": "في تشريح جسم الإنسان، الحالبان هما أنبوبان مصنوعان من ألياف عضلية ملساء ويدفعان البول من الكلى إلى المثانة البولية. في الشخص البالغ، يبلغ طول الحالب عادة 25-30 سنتيمتر (10-12 بوصة) وقطره حوالي 3-4 ميلليمتر (0.12-0.16 بوصة) نسيجيًا، يُبطن الحالب بنسيج طلائي بولي (الظهارة البولية)، وهو أحد أنواع النسيج الطلائي الانتقالي، وله طبقة إضافية من العضلات الملساء في الثلث الأخير للحالب لتساعد في الحركة الدودية. (Ureter)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014513.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "saliva",
    "term_en": "Saliva",
    "term_ar": "لعاب",
    "synonyms": [
      "Salivas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The clear, viscous fluid secreted by the SALIVARY GLANDS and mucous glands of the mouth. It contains MUCINS, water, organic salts, and ptylin.",
    "arabic_definition": "اللُّعاب هو مادّة سائلة موجودة في أفواه الحيوانات والإنسان وتفرزه الغدد اللّعابية الموجودة فيها، غير أن اللّعاب الموجود في فم الإنسان يتكون في معظمه من 99.3% من الماء أما الـ 0.5% المتبقّية فهي تحتوي على: مركّبات أيونيَّة، موادّ لزجة، بروتينات سكريَّة، إنزيمات، ومواد بكتيريَّة، وأخرى مضادة للبكتيريا مثل (الغلوبين المناعيّ«أ» والليزوزيم) إضافة إلى إنزيم الأميلاز اللعابي الذي يعمل على تفكيك جزيئات النشا إلى سكر الشعير مالتوز. تكمن أهمِّيَّة الإنزيمات الموجودة في اللُّعاب في أنها تمثل معظم المرحلة الأولى من الهضم، حيث تفكّك المأكولات النشويَّة والدُّهنيّة إلى موادٍّ أبسط، هذا إلى تحليل أجزاء الطّعام الّتي تعلق في تشقّقات الأسنان، ممّا يعمل على حماية الأسنان من التسوّسات الجرثوميّة. (Saliva)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012463.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scapula",
    "term_en": "Scapula",
    "term_ar": "عظم الكتف",
    "synonyms": [
      "Shoulder Blade",
      "Shoulder Blades",
      "Scapulae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Also called the shoulder blade, it is a flat triangular bone, a pair of which form the back part of the shoulder girdle.",
    "arabic_definition": "عَظْم الكَتِف أو عظم اللَّوْح أو لوح الكتف (الإنجليزية: Scapula) عظمة مسطحة زوجية تقع في الجزء الخلفي من منطقة الحزام الكتفي. العظمة كبيرة نسبياً وقريبة من شكل المثلث.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012540.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "humerus",
    "term_en": "Humerus",
    "term_ar": "عظم عضد",
    "synonyms": [
      "Humeri",
      "Olecranon Fossa",
      "Olecranon Fossi",
      "Lesser Tubercle",
      "Lesser Tubercles",
      "Humeral Lesser Tuberosity",
      "Humeral Lesser Tuberosities",
      "Lesser Tuberosities, Humeral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bone in humans and primates extending from the SHOULDER JOINT to the ELBOW JOINT.",
    "arabic_definition": "النَّقَا أو النَّقْو أو عظم العَضُد (الإنجليزية: Humerus) هو من العظام الطويلة وهو جزء من الهيكل العظمي البشري ويوجد في العضد حيث يصل الكتف مع المرفق. ويرتبط مع عظم الكتف علويا ومع عظمي الزند والكعبرة سفلياً، وينقسم تشريحيا إلى ثلاثة أقسام.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006811.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sacrum",
    "term_en": "Sacrum",
    "term_ar": "عجز",
    "synonyms": [
      "Sacrums",
      "Sacra",
      "Sacral Vertebrae",
      "Vertebrae, Sacral",
      "Sacral Vertebra",
      "Vertebra, Sacral",
      "عجز (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Five fused VERTEBRAE forming a triangle-shaped structure at the back of the PELVIS. It articulates superiorly with the LUMBAR VERTEBRAE, inferiorly with the COCCYX, and anteriorly with the ILIUM of the PELVIS. The sacrum strengthens and stabilizes the PELVIS.",
    "arabic_definition": "العَجُز (اللاتينية: os sacrum) عظم كبير مثلث الشكل يقع في قاعدة العمود الفقري في الجزء الخلفي العلوي من الحوض ومتموضع بشكل يشبه الإسفين بين العظمين الوركيين ويرتبط في الأسفل مع العصعص وفي الأعلى مع الفقرة القطنية الخامسة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012447.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sclera",
    "term_en": "Sclera",
    "term_ar": "صلبة (عين)",
    "synonyms": [
      "Scleras",
      "Scleral Spur",
      "Scleral Spurs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The white, opaque, fibrous, outer tunic of the eyeball, covering it entirely excepting the segment covered anteriorly by the cornea. It is essentially avascular but contains apertures for vessels, lymphatics, and nerves. It receives the tendons of insertion of the extraocular muscles and at the corneoscleral junction contains the CANAL OF SCHLEMM. (From Cline et al., Dictionary of Visual Science, 4th ed)",
    "arabic_definition": "الصُّلْبَة (الإنجليزية: sclera) والتي تعرف أيضًا باسم بياض العين هي طبقة ليفية معتمة خارجية لحماية العين تحتوي على كولاجين وألياف مرنة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012590.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "forearm",
    "term_en": "Forearm",
    "term_ar": "ساعد",
    "synonyms": [
      "Forearms",
      "Antebrachium",
      "Antebrachiums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Part of the upper extremity in humans and primates extending from the ELBOW to the WRIST.",
    "arabic_definition": "الساعد (Forearm) هو الوحدة القاصية للطرف العلوي، ويمتد من المرفق إلى رسغ اليد. يتكون هيكل الساعد من عظمتين، وفيه الكثير من العضلات.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005542.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sputum",
    "term_en": "Sputum",
    "term_ar": "قشع",
    "synonyms": [
      "Sputums",
      "Sputum, Induced",
      "Induced Sputum",
      "Induced Sputums",
      "Sputums, Induced"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Material coughed up from the lungs and expectorated via the mouth. It contains MUCUS, cellular debris, and microorganisms. It may also contain blood or pus.",
    "arabic_definition": "القَشَع (الإنجليزية: Sputum) هو المادة المخاطية التي تخرج من الشعب الهوائية عند السعال. وعيناته تستخدم للكشف عن عدوى الجهاز التنفسي وفحوص الباثولوجيا المرضية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013183.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "maxilla",
    "term_en": "Maxilla",
    "term_ar": "فك علوي",
    "synonyms": [
      "Maxillas",
      "Maxillae",
      "Maxillary Bone",
      "Bone, Maxillary",
      "Bones, Maxillary",
      "Maxillary Bones"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of a pair of irregularly shaped bones that form the upper jaw. A maxillary bone provides tooth sockets for the superior teeth, forms part of the ORBIT, and contains the MAXILLARY SINUS.",
    "arabic_definition": "الفك العلوي (الإنجليزية: Maxilla) هو أحد عظام الجمجمة وهو عظم ثابت بعكس الفك السفلي الذي يمثل العظم الوحيد المتحرك من عظام الجمجمة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008437.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thorax",
    "term_en": "Thorax",
    "term_ar": "صدر",
    "synonyms": [
      "Chest",
      "Chests",
      "Thoraces",
      "Thorace"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The upper part of the trunk between the NECK and the ABDOMEN. It contains the chief organs of the circulatory and respiratory systems. (From Stedman, 25th ed)",
    "arabic_definition": "الصدر أو الجَوْشَن (الإنجليزية: Thorax) هو جزء من تشريح الإنسان والعديد من الحيوانات الأخرى. يقع بين الرقبة والبطن.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013909.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bronchi",
    "term_en": "Bronchi",
    "term_ar": "شعبة هوائية",
    "synonyms": [
      "Bronchus",
      "Primary Bronchi",
      "Bronchi, Primary",
      "Bronchus, Primary",
      "Primary Bronchus",
      "Secondary Bronchi",
      "Bronchi, Secondary",
      "Bronchus, Secondary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The larger air passages of the lungs arising from the terminal bifurcation of the TRACHEA. They include the largest two primary bronchi which branch out into secondary bronchi, and tertiary bronchi which extend into BRONCHIOLES and PULMONARY ALVEOLI.",
    "arabic_definition": "القصبة هوائية أو شعب هوائية هي ممر أو طريق هوائي في الجهاز التنفسي والتي توصل الهواء إلى الرئتين. إن أول قصبة وأكبرها في الطريق التنفسي هي الرغامى والتي تتفرع إلى قصبتين رئيسيتين هما القصبة الرئيسية اليمنى والقصبة الرئيسية اليسرى، والمعروفتان أيضا بالقصبتان الرئيسيتان. (Bronchi)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001980.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "patella",
    "term_en": "Patella",
    "term_ar": "رضفة",
    "synonyms": [
      "Patellas",
      "Knee Cap",
      "Knee Caps",
      "Kneecap",
      "Kneecaps"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The flat, triangular bone situated at the anterior part of the KNEE.",
    "arabic_definition": "الرَّضْفَة (الإنجليزية: Patella) أو الدَّاغِصَة أو عظمة رأس الركبة (الإنجليزية: Kneecap) أو (الإنجليزية: kneepan)، هي عظمة سميكة مستديرة ومثلثة الشكل تتمفصل مع عظم الفخذ، و هي تغطي وتحمي الجزء الأمامي لسطح مفصل الركبة. توجد الرضفة عند معظم الفقاريات مثل الفئران والقطط والطيور، ولكنها لا توجد في الحيتان و لا في الزواحف مثل الثعابين ولا في البرمائيات مثل الضفادع.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010329.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "incisor",
    "term_en": "Incisor",
    "term_ar": "قاطعة (سن)",
    "synonyms": [
      "Incisors"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any of the eight frontal teeth (four maxillary and four mandibular) having a sharp incisal edge for cutting food and a single root, which occurs in man both as a deciduous and a permanent tooth. (Jablonski, Dictionary of Dentistry, 1992, p820)",
    "arabic_definition": "القاطعة (الجمع: قواطع) (الإنجليزية: incisor) نوع من أنواع الأسنان عند الثدييات والإنسان وتوجد في قادمة الفك العلوي وفي الفك السفلي. وتسمى القاطعتان الأوليان الثنايا (م: ثنيّة).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007180.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerumen",
    "term_en": "Cerumen",
    "term_ar": "صملاخ",
    "synonyms": [
      "Ear Wax",
      "Wax, Ear",
      "Earwax"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The yellow or brown waxy secretions produced by vestigial apocrine sweat glands in the external ear canal.",
    "arabic_definition": "الصِّملاخ هو مادة شمعية تفرز في قناة الأذن عند الإنسان والثديات الأخرى. ويعرف أيضاً بالسملاخ أو الصملوخ أو السملوخ أو أُفُّ الأذُن (الإنجليزية: Earwax). (Cerumen)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002571.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pylorus",
    "term_en": "Pylorus",
    "term_ar": "بواب",
    "synonyms": [
      "Pyloric Sphincter",
      "Pyloric Sphincters",
      "Sphincter, Pyloric",
      "Sphincters, Pyloric",
      "بواب (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The region of the STOMACH at the junction with the DUODENUM. It is marked by the thickening of circular muscle layers forming the pyloric sphincter to control the opening and closure of the lumen.",
    "arabic_definition": "البواب (اللاتينية: Pylorus) هو المنطقة من المعدة التي تتصل بالاثني عشر، وينقسم إلى جزأين: غار البواب: يتصل بجسم المعدة. القناة البوابية: وتتصل بالإثني عشر.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011708.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "choroid",
    "term_en": "Choroid",
    "term_ar": "مشيمية",
    "synonyms": [
      "Choroids",
      "Sattler Layer",
      "Sattler's Layer",
      "Haller's Layer",
      "Haller Layer",
      "Choriocapillaris"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The thin, highly vascular membrane covering most of the posterior of the eye between the RETINA and SCLERA.",
    "arabic_definition": "مشيمية أو الغشاء القاعدي للوحدة البصرية (بالإنجليزي: Choroid) طبقة وعائية - يحتوي على أوعية دموية- في العين , يتراوح سمكها بين 0.2 ملم – 0.1 ملم, تغذي طبقات خارج شبكية العين وتمدها بالأكسجين . تنقسم مشيمية إلى أربع طبقات : • طبقة هالر: هي الطبقة الخارجية في المشيمية تضم أوعية دموية كبيرة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002829.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eyelids",
    "term_en": "Eyelids",
    "term_ar": "جفن",
    "synonyms": [
      "Eyelid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Each of the upper and lower folds of SKIN which cover the EYE when closed.",
    "arabic_definition": "الجَفْنُ بفتح أوله (أما بالكسر فهو غِمدُ السَّيْفِ) وجمعه أَجْفُنٌ، وأَجْفَانٌ، وجُفُونٌ، هو غطاء جلدي للعين وظيفته تغطية حماية العين من المكاره البيئية مثل الرمال المتطايرة والريح والاشياء البارزة يتكون من جفن علوي وجفن سفلي وهو مهم لحماية العين من التعب إذ انه يغلق بين الحين والاخر كما أنه يكون مغلقا أثناء النوم ومن الجدير ذكره ان معظم الحيوانات لها جفون. (Eyelids)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005143.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gingiva",
    "term_en": "Gingiva",
    "term_ar": "لثة",
    "synonyms": [
      "Gums",
      "Gum",
      "Interdental Papilla",
      "Papilla, Interdental"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Oral tissue surrounding and attached to TEETH.",
    "arabic_definition": "اللِّثَة (بالإنجليزية: gingiva or Gums) هي طبقة من الأنسجة الضامة والمخاطية الرخوة التي تستر العظم السنخي للفكين العلوي والسفلي داخل الفم. النسيج اللِّـثَـوِي نسيج شفاف بطبيعته، ويعزى لونه الأحمر للتغذية الدموية الغزيرة الواردة إليه، تلتصق اللثة إلى كل من العظم السنخي الواقع تحتها وإلى جدر السن بواسطة ما يسمى بالألياف اللِّـثَـوِية، تعدّ اللثة أيضا جزء من المكونات الأربعة للنسيج الداعم حول السني والمؤلف من: اللثة والعظم السنخي والملاط السني وأخيرا الرباط السني السنخي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005881.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radius",
    "term_en": "Radius",
    "term_ar": "نصف قطر",
    "synonyms": [
      "Radial Tuberosity",
      "Radial Tuberosities",
      "Tuberosities, Radial",
      "Tuberosity, Radial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The outer shorter of the two bones of the FOREARM, lying parallel to the ULNA and partially revolving around it.",
    "arabic_definition": "نصف القطر (؈ أو ر) (الإنجليزية: Radius) المقصود به نصف قطر الدائرة أو الكرة أو الإهليلج. وهو يساوي المسافة الفاصلة بين مركز الدائرة (أو الكرة أو الإهليلج) وأي نقطة على حدود الشكل.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011884.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dander",
    "term_en": "Dander",
    "term_ar": "وبغ",
    "synonyms": [
      "Danders"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Microscopic particles comprising dead skin, dried salivary proteins, hair, SEBUM and microorganisms, shed by animals which causes allergic reactions in atopic persons.",
    "arabic_definition": "الوبغ (الإنجليزية: Dander) هي المادة التي يطرحها جسم البشر والحيوانات المختلفة التي لها فراء أو شعر أو ريش. هذا المصطلح يشابه طرح قشرة الرأس، عندما يصبح فائض القشارة مرئيًا.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063607.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "abdomen",
    "term_en": "Abdomen",
    "term_ar": "بطن",
    "synonyms": [
      "Abdomens"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "That portion of the body that lies between the THORAX and the PELVIS.",
    "arabic_definition": "البطن (الإنجليزية: Abdomen) هو الجزء من الجسم الواقع بين الصدر والحوض عند البشر والفقاريات الأخرى. ويُطلق على المنطقة التي يشغلها البطن التجويف البطنيّ.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000005.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ischium",
    "term_en": "Ischium",
    "term_ar": "إسك",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of three bones that make up the coxal bone of the pelvic girdle. In tetrapods, it is the part of the pelvis that projects backward on the ventral side, and in primates, it bears the weight of the sitting animal.",
    "arabic_definition": "يشكل الإِسْك (اللاتينية: ischium) الجزء الأسفل والخلفي لعظم الورك. ويتوضع تحت عظم الحرقفة وخلف عظم العانة، وهو أحد العظام الثلاثة التي تندمج مع بعضها لتشكل مفصل الورك، يشكل القسم العلوي لهذا العظم ثلث الحُق تقريباً.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007512.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mastoid",
    "term_en": "Mastoid",
    "term_ar": "القسم الخشائي من العظم الصدغي",
    "synonyms": [
      "Mastoids",
      "Mastoid Bone",
      "Bone, Mastoid",
      "Mastoid Bones",
      "Mastoid Process",
      "Mastoid Processes",
      "Process, Mastoid",
      "Mastoid Foramen"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The posterior part of the temporal bone. It is a projection of the petrous bone.",
    "arabic_definition": "القِسم الخُشَّائيّ من العَظم الصَّدغيّ (الإنجليزية: mastoid part of the temporal bone)، هو الجزء الخلفيّ من العظم الصدغيّ. يؤمّن سطحه الخشن ارتباطًا لعضلاتٍ مُختلفة وفيه فُتحات لنَفاذ الأوعية الدمويّة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008416.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "muscles",
    "term_en": "Muscles",
    "term_ar": "عضلة",
    "synonyms": [
      "Muscle",
      "Muscle Tissue",
      "Muscle Tissues",
      "Tissue, Muscle",
      "Tissues, Muscle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Contractile tissue that produces movement in animals.",
    "arabic_definition": "العضلة (الجمع: عَضَلَات) نسيج ليفي يتميز بقابلية الانقباض والانبساط، ويؤمِّن حركة الكائن، وتتكون العضلة الهيكلية من حزم عضلية، وكل حزمة تتكون من ألياف عضلية، ويسمى سيتوبلازم الليفة العضلية الساركوبلازم، وغشاء الليفة العضلية يسمى الساركوليما، وتتكون الليفة العضلية من لييفات عضلية، واللييفة الواحدة تتكون من قطع عضلية متجاورة، والقطع العضلية تتكون من خيوط بروتينية وهي أكتين وميوسين. تنقسم العضلة إلى ثلاثة أقسام: عضلة هيكلية مخططة وهي عضلات تتكون من حزمة من الألياف الرفيعة مثل عضلات الرأس والجذع والأطراف وهي تتيح الحركة وتسمى عضلات إرادية، عضلة ملساء وهي تتكون من خلايا أو ألياف مستطيلة وهي غير متصلة بالهيكل العظمي مثل العضلات المخططة وهي تحيط بالأعضاء المجوفة مثل الأمعاء والقصبة الهوائية والأوعية الدموية ، وتسمى عضلات لا إرادية وعضلة القلب هي أيضاً عضلة غير إرادية، ولكنها أقرب في البنية إلى العضلة الهيكلية، وتوجد فقط في القلب. (Muscles)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009132.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scrotum",
    "term_en": "Scrotum",
    "term_ar": "صفن",
    "synonyms": [
      "Scrotums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cutaneous pouch of skin containing the testicles and spermatic cords.",
    "arabic_definition": "الصَفَن هو أحد التراكيب الذكرية التشريحية وهو عبارة عن كيس مُعلّق من الجلد والعضلات الملساء ويتميز بأنه ثنائي الغرف.يوجد كيس الصفن في أغلب ذكور الثدييات ويُوجد أسفل القضيب. ويقوم بحفظ الخصيتين. (Scrotum)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012611.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rectum",
    "term_en": "Rectum",
    "term_ar": "مستقيم",
    "synonyms": [
      "Rectums",
      "مستقيم (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The distal segment of the LARGE INTESTINE, between the SIGMOID COLON and the ANAL CANAL.",
    "arabic_definition": "المستقيم (الإنجليزية: Rectum) هو آخر جزء من الأمعاء الغليظة قبل نهايتها، ويمتد حتى فتحة الشرج، وهو موجود في البشر وبعض الثدييات، ويبلغ طوله في الإنسان حوالي 12 سم، ووظيفته هي الاحتفاظ بالفضلات حتى تخرج من الجسم عن طريق فتحة الشرج. ويبدأ المستقيم عند الملتقى المستقيمي السيني في نهاية القولون السيني على مستوى الفقرة العجزية الثالثة أو طنف العجز تبعا للتعريف المستخدم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012007.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pharynx",
    "term_en": "Pharynx",
    "term_ar": "بلعوم",
    "synonyms": [
      "Pharynxs",
      "Throat",
      "Throats"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A funnel-shaped fibromuscular tube that conducts food to the ESOPHAGUS, and air to the LARYNX and LUNGS. It is located posterior to the NASAL CAVITY; ORAL CAVITY; and LARYNX, and extends from the SKULL BASE to the inferior border of the CRICOID CARTILAGE anteriorly and to the inferior border of the C6 vertebra posteriorly. It is divided into the NASOPHARYNX; OROPHARYNX; and HYPOPHARYNX (laryngopharynx).",
    "arabic_definition": "البُلْعُوم (باللاتينية: Pharynx وفي اللهجات العامية: الـزَّلْـعُـوم أو اللَّـغْـلُوغ) تنحرف المسالك التنفسية إلى أسفل بزاوية قائمة قادمة من الأنف مكونة أنبوبة عضلية قصيرة تعرف بالبُـلْعُوم. ويقوم البلعوم بدور مزدوج في إمرار الغذاء من الفم إلى المريء والهواء من الأنف والفم إلى الحَـنْـجَرَة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010614.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sternum",
    "term_en": "Sternum",
    "term_ar": "عظم القص",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A long, narrow, and flat bone commonly known as BREASTBONE occurring in the midsection of the anterior thoracic segment or chest region, which stabilizes the rib cage and serves as the point of origin for several muscles that move the arms, head, and neck.",
    "arabic_definition": "عظم القَصّ (اللاتينية: Sternum) عظمٌ مسطح، مفرد، طويل، غير سميك، يتكون من عدة قطع ملتحمة، طوله نحو 19 سم، يشبه السيف الروماني العريض وضعه في الجسم شاقوليًّا مع ميلان قليل نحو الأمام، هو في منتصف الصدر إلى الأمام عند الإنسان، يتصل بالأضلاع السبعة العليا بواسطة الغضاريف الضلعية ويكوّن مع الأضلاع والفِقْرات الصدرية القفص الصدري الذي يحمي القلب والرئتين ويمنح مواقع لاتصال عضلات الصدر والبطن والظهر والأطراف العليا، ويتألف من ثلاثة أجزاء: قبضة القصّ. جسم القصّ.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013249.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "malleus",
    "term_en": "Malleus",
    "term_ar": "مطرقة (عظم)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The largest of the auditory ossicles, and the one attached to the membrana tympani (TYMPANIC MEMBRANE). Its club-shaped head articulates with the INCUS.",
    "arabic_definition": "المطرقة (اللاتينية: Malleus) هي أكبر عظيمات السمع، تتوضع في الجوف الطبلي في الأذن الوسطى، وتقع وحشي السندان وإنسي الغشاء الطبلي. يوصف لها رأس وعنق وقبضة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008307.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neostriatum",
    "term_en": "Neostriatum",
    "term_ar": "جسم مخطط",
    "synonyms": [
      "Striatum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The phylogenetically newer part of the CORPUS STRIATUM consisting of the CAUDATE NUCLEUS and PUTAMEN. It is often called simply the striatum.",
    "arabic_definition": "الجسم المخطط، والمعروف أيضا باسم الجسم المخطط الحديث أو النواة المخططية ، هو جزء من تحت القشرية للالدماغ الأمامي. يستقبل المدخلات من القشرة المخية وهي المدخلات الأولية إلى نظام العقد القاعدية. (Neostriatum)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017072.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "middle-ear",
    "term_en": "Middle Ear",
    "term_ar": "أذن وسطى",
    "synonyms": [
      "Ears, Middle",
      "Middle Ears",
      "Tympanic Cavity",
      "Cavities, Tympanic",
      "Cavity, Tympanic",
      "Tympanic Cavities",
      "Tympanum",
      "Tympanums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The space and structures directly internal to the TYMPANIC MEMBRANE and external to the inner ear (LABYRINTH). Its major components include the AUDITORY OSSICLES and the EUSTACHIAN TUBE that connects the cavity of middle ear (tympanic cavity) to the upper part of the throat.",
    "arabic_definition": "الأذن الوسطى عبارة عن تجويف يقع خلف الطبلة ويتصل بتجويف البلعوم بواسطة قناة استاكيوس، المسؤولة عن تعادل الضغط الجوي على جانبي غشاء الطبلة، وتوجد في الأذن الوسطى عظيمات السمع الثلاث وهي (المطرقة، السندان، الركاب). للأذن الوسطى أهمية خاصة، إلى جانب نقلها الموجات الصوتية من غشاء الطبلة إلى الأذن الداخلية تقوم بموازنة الضغط داخل الأذن مع الضغط الجوي الخارجي عن طريق قناة استاكيوس. (Middle Ear)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004432.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypothalamus",
    "term_en": "Hypothalamus",
    "term_ar": "تحت المهاد",
    "synonyms": [
      "Preoptico-Hypothalamic Area",
      "Area, Preoptico-Hypothalamic",
      "Areas, Preoptico-Hypothalamic",
      "Preoptico-Hypothalamic Areas",
      "Lamina Terminalis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Ventral part of the DIENCEPHALON extending from the region of the OPTIC CHIASM to the caudal border of the MAMMILLARY BODIES and forming the inferior and lateral walls of the THIRD VENTRICLE.",
    "arabic_definition": "تحت المهاد أو الوِطَاء أو الهايبوثلاموس (الإنجليزية: hypothalamus)، يعتبر تحت المهاد حلقة الوصل بين الجهاز العصبي الذاتي والجهاز الإفرازي من خلال الغدة النخامية. يحتل تحت المهاد (الوطاء)الجزء الأكبر من الدماغ البيني حيث يقع أسفل المهاد وفوق ساق الدماغ، ويوجد تحت المهاد في أدمغة جميع الثدييات والبشر.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007031.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bile-ducts",
    "term_en": "Bile Ducts",
    "term_ar": "قناة الصفراء",
    "synonyms": [
      "Bile Duct",
      "Duct, Bile",
      "Ducts, Bile"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The channels that collect and transport the bile secretion from the BILE CANALICULI, the smallest branch of the BILIARY TRACT in the LIVER, through the bile ductules, the bile ducts out the liver, and to the GALLBLADDER for storage.",
    "arabic_definition": "قناة الصفراء هي أي قناة تقوم بنقل الصفراء من الكبد الذي يقوم بإنتاجه ثم نقله إلى القناة الهضمية ليساهم في هضم المواد الغذائية في الاثني عشري. (Bile Ducts)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001652.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brain-stem",
    "term_en": "Brain Stem",
    "term_ar": "جذع الدماغ",
    "synonyms": [
      "Brain Stems",
      "Brainstem",
      "Brainstems",
      "Truncus Cerebri",
      "Cerebri, Truncus",
      "Cerebrus, Truncus",
      "Truncus Cerebrus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The part of the brain that connects the CEREBRAL HEMISPHERES with the SPINAL CORD. It consists of the MESENCEPHALON; PONS; and MEDULLA OBLONGATA.",
    "arabic_definition": "جذع الدماغ أو ساق المخ (الإنجليزية: brainstem) هو كتلة دماغية تصل بين الدماغ الأمامي (مكون من مخ ودماغ بيني) والنخاع الشوكي، يتألف جذع الدماغ من: الدماغ المتوسط والجسر والنخاع المستطيل، أي أن جذع الدماغ يتكون من: الدماغ المتوسط والدماغ الخلفي عدا المخيخ. ينقل الأوامر من المخ إلى أعضاء الجسم وينقل المعلومات الحسية من أعضاء الجسم إلى المخ، وتوجد فيه مراكز التنفس وتنظيم الضغط ونظم القلب. (Brain Stem)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001933.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyoid-bone",
    "term_en": "Hyoid Bone",
    "term_ar": "عظم لامي",
    "synonyms": [
      "Bone, Hyoid",
      "Bones, Hyoid",
      "Hyoid Bones",
      "Lingual Bone",
      "Bone, Lingual",
      "Bones, Lingual",
      "Lingual Bones"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mobile U-shaped bone that lies in the anterior part of the neck at the level of the third CERVICAL VERTEBRAE. The hyoid bone is suspended from the processes of the TEMPORAL BONES by ligaments, and is firmly bound to the THYROID CARTILAGE by muscles.",
    "arabic_definition": "العظم اللاّمِيّ أو الفريكة أو العظم اللساني أو الواقع عند قاعدة اللسان أو العظم الحذوي لأن شكله يشبه حذوة الفرس (الإنجليزية: Hyoid bone) هو عظم على شكل حذوة يقع في مقدمة الرقبة تحت الذقن وفوق الغضروف الدرقي، تتصل به عضلاتٌ عديدةٌ تمسكه بحذر، منها اللسان وقاعدة الجمجمة والغضروف الدرقي ولسان المزمار، وهو العظم الوحيد المنفصل عن الهيكل العظمي، يوجد العظم اللامي في المحور الهيكلي في الخط منتصف الجسم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006928.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bronchioles",
    "term_en": "Bronchioles",
    "term_ar": "قصيبة رئيسية",
    "synonyms": [
      "Bronchiole",
      "Terminal Bronchioles",
      "Bronchioles, Terminal",
      "Bronchiole, Terminal",
      "Terminal Bronchiole",
      "Respiratory Bronchioles",
      "Bronchiole, Respiratory",
      "Bronchioles, Respiratory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The small airways branching off the TERTIARY BRONCHI. Terminal bronchioles lead into several orders of respiratory bronchioles which in turn lead into alveolar ducts and then into PULMONARY ALVEOLI.",
    "arabic_definition": "القصيبات أو الشعيبات (الإنجليزية: bronchioles أو bronchioli) ومفردها قصيبة أو شعيبة (الإنجليزية: Bronchiole) وهي المجاري التنفسية التي ينتقل خلالها الهواء من الفم والأنف نحو الحويصلات الهوائية في الرئة لكن هذه التفرعات لم تعد تحتوي على الغضاريف والغدد في تحت المخاطية. القصيبات فروع للشعب الهوائية وجزء من المنطقة الموصلة في الجهاز التنفسي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055745.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibrocartilage",
    "term_en": "Fibrocartilage",
    "term_ar": "غضروف ليفي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of CARTILAGE whose matrix contains large bundles of COLLAGEN TYPE I. Fibrocartilage is typically found in the INTERVERTEBRAL DISK; PUBIC SYMPHYSIS; TIBIAL MENISCI; and articular disks in synovial JOINTS. (From Ross et. al., Histology, 3rd ed., p132,136)",
    "arabic_definition": "الغضروف الليفي (الإنجليزية: Fibrocartilage) يتكون من خليط من نسيج ليفي أبيض ونسيج غضروفي بنسب مختلفة، وهو النوع الوحيد للغضروف الذي يحوي النوع كولاجن 1 بالإضافة للنوع 2 العادي. ويوجد هذا النوع من الغضاريف في الأقراص بين الفقارية (الإنجليزية: intervertebral discs) وكذلك في منطقة الارتفاق العاني (الإنجليزية: pubic symphysis).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051445.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microcirculation",
    "term_en": "Microcirculation",
    "term_ar": "دوران الأوعية الدقيقة",
    "synonyms": [
      "Microvascular Blood Flow",
      "Blood Flow, Microvascular",
      "Flow, Microvascular Blood",
      "Microvascular Blood Flows",
      "Microvascular Circulation",
      "Circulation, Microvascular",
      "Microvascular Circulations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The circulation of the BLOOD through the MICROVASCULAR NETWORK.",
    "arabic_definition": "دوران الأوعية الدقيقة هي دورة الدم في الأوعية الدموية الأصغر الموجودة في الجملة الوعائية المضمنة في أنسجة الأعضاء. بالمقارنة مع دورة الأوعية الكبيرة والتي هي دورة الدم من وإلى الأعضاء. (Microcirculation)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008833.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prosencephalon",
    "term_en": "Prosencephalon",
    "term_ar": "دماغ أمامي",
    "synonyms": [
      "Forebrain",
      "Forebrains"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The anterior of the three primitive cerebral vesicles of the embryonic brain arising from the NEURAL TUBE. It subdivides to form DIENCEPHALON and TELENCEPHALON. (Stedmans Medical Dictionary, 27th ed)",
    "arabic_definition": "الدماغ الأمامي (اللاتينية: prosencephalon) أو (الإنجليزية: Forebrain) أو الدماغ المُقَدَّم يتألف الدماغ الأمامي من: الدماغ الانتهائي والذي هو نفسه المخ الدماغ البيني.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016548.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mesencephalon",
    "term_en": "Mesencephalon",
    "term_ar": "دماغ متوسط",
    "synonyms": [
      "Mesencephalons",
      "Midbrain",
      "Midbrains"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The middle of the three primitive cerebral vesicles of the embryonic brain. Without further subdivision, midbrain develops into a short, constricted portion connecting the PONS and the DIENCEPHALON. Midbrain contains two major parts, the dorsal TECTUM MESENCEPHALI and the ventral TEGMENTUM MESENCEPHALI, housing components of auditory, visual, and other sensorimoter systems.",
    "arabic_definition": "الدماغ المتوسط (اللاتينية: mesencephalon) أو (الإنجليزية: Midbrain) هو قسم من أقسام الجهاز العصبي المركزي والذي يرتبط بالرؤية والسمع والتحكم الحركي والنوم واليقظة وتنظيم درجة حرارة الجسم. وهو أقصر أجزاء جذع الدماغ ويقع بين الجسر من أسفل والدماغ البيني من أعلى.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008636.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dura-mater",
    "term_en": "Dura Mater",
    "term_ar": "أم جافية",
    "synonyms": [
      "Pachymeninx",
      "Tentorium Cerebelli",
      "Falx Cerebri",
      "Falx Cerebelli"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The outermost of the three MENINGES, a fibrous membrane of connective tissue that covers the brain and the spinal cord.",
    "arabic_definition": "الأم الجافية (اللاتينية: dura mater) تتكون من طبقتين: طبقة خارجية ليفية تلتصق بالعظام fibrous layer، وطبقة داخلية ناعمة serous layer. والطبقة الناعمة تمشي معا مع الطبقة الليفية لكنها تنفصل عنها في الأماكن التي يجب أن تكون فيها الأوردة والحواجز.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004388.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diencephalon",
    "term_en": "Diencephalon",
    "term_ar": "دماغ بيني",
    "synonyms": [
      "Interbrain",
      "Interbrains"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The paired caudal parts of the PROSENCEPHALON from which the THALAMUS; HYPOTHALAMUS; EPITHALAMUS; and SUBTHALAMUS are derived.",
    "arabic_definition": "يعد الدماغ البيني (اللاتينية: Diencephalon) قسمًا من الدماغ الأمامي (الدماغ المقدم الجنيني)، ويقع بين الدماغ الانتهائي والدماغ المتوسط (الدماغ المتوسط الجنيني). يُعرف الدماغ البيني أيضًا باسم الدماغ الوسطي في المؤلفات القديمة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004027.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heterografts",
    "term_en": "Heterografts",
    "term_ar": "نقل الأعضاء بين الكائنات الحية",
    "synonyms": [
      "Heterograft",
      "Xenografts",
      "Xenograft",
      "Xenotransplantation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tissues, cells or organs transplanted between animals of different species.",
    "arabic_definition": "نقل الأعضاء بين الكائنات الحية (Xenotransplantation) هو نقل الخلايا الحية ،الأنسجة أو الأجهزة في من كائن لتوضع في كائن آخر. هذه الخلابا، الأجهزة أو الأنسجة تسمى بالطعوم المغايرة أو الطعوم الأجنبية xenografts كزراعة خلايا الخنزير في الإنسان. (Heterografts)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064593.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aponeurosis",
    "term_en": "Aponeurosis",
    "term_ar": "وتر عريض",
    "synonyms": [
      "Aponeuroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The flattened and/or expanded “tendon-like” dense fibrous connective tissue that connects skeletal muscles to each other or to bone.",
    "arabic_definition": "الوَتَر العريض أو الوَتَر الغشائي أو الغشاء الوَتَري أو السِّفاق (جمع: سُفُق: απο أي «بعيدًا» أو «من» وνευρον أي «وَتَر عضلي»، وتُنطق ap•o•neu•ro•sis) هي طبقات من الأوتار العريضة المسطَحة. وتتميز بلون فضي لامع ضارب إلى البياض، ومن ناحية تصنيف علم الأنسجة فإنها تشبه الأوتار، وهي مزوَدة بقدر ضئيل من الأوعية الدموية والأعصاب. (Aponeurosis)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000070606.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "periodontium",
    "term_en": "Periodontium",
    "term_ar": "دواعم الأسنان",
    "synonyms": [
      "Periodontiums",
      "Paradentium",
      "Paradentiums",
      "Tooth Supporting Structures",
      "Structures, Tooth Supporting",
      "Structure, Tooth Supporting",
      "Supporting Structures, Tooth",
      "Supporting Structure, Tooth"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The structures surrounding and supporting the tooth. Periodontium includes the gum (GINGIVA), the alveolar bone (ALVEOLAR PROCESS), the DENTAL CEMENTUM, and the PERIODONTAL LIGAMENT.",
    "arabic_definition": "دواعم السن أو النسيج حول السني، هو النسيج المتخصص الذي يحيط ويدعم السن ويحافظ عليه في عظام الفك العلوي والفك السفلي، وهو في الأصل مصطلح يوناني من كلمتين، الأولى ((peri وتعني حول أما الثاني (odons) والذي يعني السن، وعند أخذها حرفيا تصبح (ما يحيط السن)، وهنالك تخصص سني يسمى علم أمراض النسج الداعمة الذي يختص بالرعاية والحفاظ على هذه الأنسجة، توفر هذه الأنسجة الدعم المطلوب للحفاظ على وظيفة الأسنان. وتتكون من أربعة مكونات: اللثة أربطة النسج حول السني (رباط دواعم السن) الملاط العظم السنخي كل هذه المكونات فريد في موقعه وفي التركيب البنياني للأنسجة الخاصة به، وفي التركيب الكيميائي والبيو كيميائي، وكل منهم يمتلك وظائف محددة تمكن التكيف خلال حياة البناء الهيكلي، ومثال ذلك عندما تستجيب الاسنان من تأثير القوى أو عندما تتحرك باتجاه الخط الناصف فيقوم العظم بامتصاص الضغط عن الجانب المتأثر ويضاف إلى جانب التوتر. (Periodontium)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010519.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epithalamus",
    "term_en": "Epithalamus",
    "term_ar": "فوق المهاد",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The dorsal posterior subdivision of the diencephalon. The epithalamus is generally considered to include the habenular nuclei (HABENULA) and associated fiber bundles, the PINEAL BODY, and the epithelial roof of the third ventricle. The anterior and posterior paraventricular nuclei of the thalamus are included with the THALAMIC NUCLEI although they develop from the same pronuclear mass as the epithalamic nuclei and are sometimes considered part of the epithalamus.",
    "arabic_definition": "فوق المهاد أو المهيد هو قطَّاع خلفي (الظهري) للدماغ البيني. الدماغ البيني هو جزء من الدماغ الأمامي الذي يحتوي أيضا على المهاد وتحت المهاد والغدة النخامية., يحتوي فوق المهاد أيضاً على العِنان habenula وموصلاتها العصبيَّة بالإضافة إلى خط النخاع الخط النخاعي المهادي والغدة الصنوبرية. (Epithalamus)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anal-canal",
    "term_en": "Anal Canal",
    "term_ar": "قناة شرجية",
    "synonyms": [
      "Anal Sphincter",
      "Anal Sphincters",
      "Sphincter, Anal",
      "Sphincters, Anal",
      "Anal Gland, Human",
      "Human Anal Gland",
      "Human Anal Glands",
      "Anal Gland"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The terminal segment of the LARGE INTESTINE, beginning from the ampulla of the RECTUM and ending at the anus.",
    "arabic_definition": "القناة الشرجية هي الجزء الذي يربط المستقيم بفتحة الشرج، ويقع أسفل مستوى قاع الحوض. يقع داخل المثلث الشرجي للعجان، بين الحفرة الإسكية الشرجية اليمنى واليسرى. (Anal Canal)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001003.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhombencephalon",
    "term_en": "Rhombencephalon",
    "term_ar": "دماغ خلفي",
    "synonyms": [
      "Rhombencephalons",
      "Hindbrain",
      "Hindbrains",
      "Hind Brain",
      "Brain, Hind",
      "Brains, Hind",
      "Hind Brains"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The posterior of the three primitive cerebral vesicles of an embryonic brain. It consists of myelencephalon, metencephalon, and isthmus rhombencephali from which develop the major BRAIN STEM components, such as MEDULLA OBLONGATA from the myelencephalon, CEREBELLUM and PONS from the metencephalon, with the expanded cavity forming the FOURTH VENTRICLE.",
    "arabic_definition": "الدماغ الخلفي (اللاتينية: Rhombencephalon) أو (الإنجليزية: Hindbrain) أو الدماغ المُؤَخَّر قسم من أقسام الدماغ الثلاثة، يتطور إلى الدماغ التالي والدماغ البصلي. يحتوي الدماغ الخلفي على المخيخ والنخاع المستطيل والجسر.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012249.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myelencephalon",
    "term_en": "Myelencephalon",
    "term_ar": "دماغ بصلي",
    "synonyms": [
      "Myelencephalons"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The most posterior portion of the hindbrain from which MEDULLA OBLONGATA is derived.",
    "arabic_definition": "الدماغ البصلي (اللاتينية: Myelencephalon) هو القسم السفلي للدماغ الخلفي يحتوي على النخاع المستطيل (البصلة).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054024.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metencephalon",
    "term_en": "Metencephalon",
    "term_ar": "دماغ تالي",
    "synonyms": [
      "Metencephalons"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The anterior portion of the developing hindbrain. It gives rise to the CEREBELLUM and the PONS.",
    "arabic_definition": "الدماغ التالي (اللاتينية: Metencephalon) هو جزء جنيني من الدماغ الخلفي الذي يتمايز إلى جسر فارول والمخيخ. يحتوي على جزء من البطين الرابع، والعصب ثلاثي التوائم (سي إن V)، والعصب المبعد (سي إن VI) والعصب الوجهي (سي إن VII)، وجزء من العصب الدهليزي القوقعي (سي إن VIII).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020540.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "subthalamus",
    "term_en": "Subthalamus",
    "term_ar": "مهاد سفلي",
    "synonyms": [
      "Nucleus of Ansa Lenticularis",
      "Ansa Lenticularis Nucleus",
      "Nucleus of Field H",
      "Field H Nucleus",
      "Nucleus Campi Foreli",
      "Campi Foreli, Nucleus",
      "Campi Forelus, Nucleus",
      "Foreli, Nucleus Campi"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A transition zone in the anterior part of the diencephalon interposed between the thalamus, hypothalamus, and tegmentum of the mesencephalon. Components of the subthalamus include the SUBTHALAMIC NUCLEUS, zona incerta, nucleus of field H, and the nucleus of ansa lenticularis. The latter contains the ENTOPEDUNCULAR NUCLEUS.",
    "arabic_definition": "المهاد السفلي أو المهاد التحتاني أو أمام المهاد هو جزء من الدماغ البيني. التركيب الأبرز فيه هو نواة أسفل المهاد. (Subthalamus)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020530.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endometrium",
    "term_en": "Endometrium",
    "term_ar": "بطانة الرحم",
    "synonyms": [
      "Endometria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The mucous membrane lining of the uterine cavity that is hormonally responsive during the MENSTRUAL CYCLE and PREGNANCY. The endometrium undergoes cyclic changes that characterize MENSTRUATION. After successful FERTILIZATION, it serves to sustain the developing embryo.",
    "arabic_definition": "بطانة الرحم (اللاتينية: endometrium) هو الغشاء المبطن لجدار الرحم الداخلي لدى إناث الثدييات.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004717.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ligaments",
    "term_en": "Ligaments",
    "term_ar": "رباط",
    "synonyms": [
      "Ligament",
      "Interosseal Ligament",
      "Interosseal Ligaments",
      "Ligament, Interosseal",
      "Interosseous Ligament",
      "Interosseous Ligaments",
      "Ligament, Interosseous",
      "رباط (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Shiny, flexible bands of fibrous tissue connecting together articular extremities of bones. They are pliant, tough, and inextensile.",
    "arabic_definition": "رباط في علم التشريح هي بناء حيوي، مركب من انسجة توصيل (أنسجة ضامة) كثيفة ومرتبة، وهي تشبه الأوتار من حيث البنية، وتتكون بشكل أساسي من ألياف الكولاجين وألياف أخرى مرنة ومرتبة بالتوازي، لتجعل النسيج، ذا قدرة عالية على تحمل شد المحاور. (Ligaments)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008022.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "genitalia",
    "term_en": "Genitalia",
    "term_ar": "عضو جنسي",
    "synonyms": [
      "Reproductive Organs",
      "Organ, Reproductive",
      "Organs, Reproductive",
      "Reproductive Organ",
      "Reproductive System",
      "Reproductive Systems",
      "System, Reproductive",
      "Systems, Reproductive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The external and internal organs involved in the functions of REPRODUCTION.",
    "arabic_definition": "العضو الجنسي هو العضو المخصص للتكاثر عند كائن ما، والأعضاء الجنسية تختلف تشريحياً بين الذكور والإناث وبين الإنسان وغيره من الرئيسيات، وإن وجِدَ التشابه التشريحي (أو التشابه الشكلي) فإن الاختلاف موجود لأن التكاثر لا يتم إلا ما بين المتشابهات من الأنواع. تملك كل من الحزازيات والسراخس وبعض النباتات المشابهة لها حافظة مشيجية (مَعْرَس) للأعضاء التكاثرية والتي تُشكل جزءاً من النابتة العرسية. (Genitalia)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005835.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peritoneum",
    "term_en": "Peritoneum",
    "term_ar": "صفاق",
    "synonyms": [
      "Peritoneum, Parietal",
      "Parietal Peritoneum",
      "Peritoneum, Visceral",
      "Visceral Peritoneum",
      "Parametrium",
      "Parametriums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A membrane of squamous EPITHELIAL CELLS, the mesothelial cells, covered by apical MICROVILLI that allow rapid absorption of fluid and particles in the PERITONEAL CAVITY. The peritoneum is divided into parietal and visceral components. The parietal peritoneum covers the inside of the ABDOMINAL WALL. The visceral peritoneum covers the intraperitoneal organs. The double-layered peritoneum forms the MESENTERY that suspends these organs from the abdominal wall.",
    "arabic_definition": "الصِفاق أو البريتوان هو غشاء مصلي يبطن جوف البطن ويتكون من طبقتين: جدارية وحشوية. وهو نسيج رابط. (Peritoneum)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010537.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerebellum",
    "term_en": "Cerebellum",
    "term_ar": "مخيخ",
    "synonyms": [
      "Cerebellums",
      "Parencephalon",
      "Parencephalons",
      "Corpus Cerebelli",
      "Cerebella"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The part of brain that lies behind the BRAIN STEM in the posterior base of skull (CRANIAL FOSSA, POSTERIOR). It is also known as the little brain with convolutions similar to those of CEREBRAL CORTEX, inner white matter, and deep cerebellar nuclei. Its function is to coordinate voluntary movements, maintain balance, and learn motor skills.",
    "arabic_definition": "المُخَيخ (اللاتينيّة: Cerebellum والتي تعني «الدماغ الصغير») مَعَلمٌ رئيسيّ في الدماغ الخلفيّ لجميع الفقاريات. على الرغم من أنه عادةً أصغر من المخ، إلا أنه في بعض الحيوانات كالأسماك القنومية قد يكون كبيراً كالمخ أو أكبر حتَّى.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002531.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hippocampus",
    "term_en": "Hippocampus",
    "term_ar": "حصين",
    "synonyms": [
      "Ammon's Horn",
      "Ammons Horn",
      "Horn, Ammon's",
      "Cornu Ammonis",
      "Ammon Horn",
      "Horn, Ammon",
      "Hippocampus Proper",
      "Hippocampus Propers"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A curved elevation of GRAY MATTER extending the entire length of the floor of the TEMPORAL HORN of the LATERAL VENTRICLE The hippocampus proper, subiculum, and DENTATE GYRUS constitute the hippocampal formation. Sometimes authors include the ENTORHINAL CORTEX in the hippocampal formation.",
    "arabic_definition": "الحُصيْن أو قرن آمون (الإنجليزية: Hippocampus) (سمي بذلك بسبب التشابهه مع فرس البحر) هو مكون رئيسي لأدمغة البشر والفقاريات الأخرى. يقع الحصين لدى الإنسان وغيره من الرئيسيات في القشرة العريقة، ينتمي الحصين إلى الجهاز الحوفي ويلعب أدوارًا مهمة في دمج المعلومات من الذاكرة قصيرة المدى مع الذاكرة طويلة الأمد، وفي الذاكرة المكانية التي تمكّن الشخص من التجوال.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006624.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "capillaries",
    "term_en": "Capillaries",
    "term_ar": "شعيرة دموية",
    "synonyms": [
      "Capillary",
      "Capillary Beds",
      "Capillary Bed",
      "Sinusoidal Beds",
      "Bed, Sinusoidal",
      "Beds, Sinusoidal",
      "Sinusoidal Bed",
      "Sinusoids"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The minute vessels that connect arterioles and venules.",
    "arabic_definition": "الشعيرات الدموية تتفرّعُ الشرايين داخل أنسجة الجسم وتنتهي بأوعية دقيقة تًسمى الشعيرات وتتكون الشعيرات من طبقة واحدة من الخلايا. فهي عبارة عن قنوات دقيقة جدًا، تشبه الشعر يتراوح قطرها ما بين 0.007 – 0.014 ملم، ويتراوح طول الشعيرة ما بين 0.5 – 1 ملم، ويتكون جدراها من طبقة خلوية واحدة، يبلغ عددها عشرة بلايين شعيرة، وطولها مجتمعة حوالي 80 ألف كلم. (Capillaries)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002196.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastrointestinal-tract",
    "term_en": "Gastrointestinal Tract",
    "term_ar": "قناة هضمية",
    "synonyms": [
      "Gastrointestinal Tracts",
      "GI Tract",
      "GI Tracts",
      "Digestive Tract",
      "Digestive Tracts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Generally refers to the digestive structures stretching from the MOUTH to ANUS, but does not include the accessory glandular organs (LIVER; BILIARY TRACT; PANCREAS).",
    "arabic_definition": "القناة الهضمية أو السبيل الهضمي أو السبيل المعدي المعوي هو نظام عضوي داخل البشر والحيوانات الأخرى التي تتناول الطعام، يهضمها لاستخراج وامتصاص الطاقة والمواد الغذائية، ويخرج ما تبقى من الفضلات في شكل البراز. الفم والمريء والمعدة والأمعاء هي جزء من الجهاز الهضمي، معدي معوي هي صفة تعني أو متعلقة بالمعدة والأمعاء، والسبيل هو مجموعة من التراكيب التشريحية ذات الصلة أو سلسلة من أعضاء الجسم المتصلة. (Gastrointestinal Tract)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041981.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "esophagus",
    "term_en": "Esophagus",
    "term_ar": "مريء",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The muscular membranous segment between the PHARYNX and the STOMACH in the UPPER GASTROINTESTINAL TRACT.",
    "arabic_definition": "المَرِيء(الجمع: أَمْرِئةٌ ومُرُؤٌ) عضوٌ في الفقاريات يمر عبره الطعام الآتي من البلعوم إلى المعدة، وذلك بمساعدة التقلُّصات التَمَعُّجِيّة. المريء أنبوبٌ عضليّ ليفيّ يبلغ طوله عند البشر البالغين حوالي 25 سم، كما ويمر المريء خلف الرغامى والقلب وعبر الحجاب الحاجز حتى ينفتح على القسم الأكثر علويّة من المعدة. (Esophagus)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004947.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acetabulum",
    "term_en": "Acetabulum",
    "term_ar": "حق",
    "synonyms": [
      "Acetabulums",
      "Acetabula",
      "Acetabulas",
      "Cotyloid Cavity",
      "Cavities, Cotyloid",
      "Cavity, Cotyloid",
      "Cotyloid Cavities",
      "حق (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The part of the pelvis that comprises the pelvic socket where the head of FEMUR joins to form HIP JOINT (acetabulofemoral joint).",
    "arabic_definition": "الحُقّ (الصفة منه: حُقِّي وليس حُقَّانِي (اللاتينية: acetabulum) هو تجويف صغير مقعّر في الحوض (عظم الورك)، حيث يلتقي رأس عظم الفخذ مع عظم الورك من خلال هذا التجويف. يتألف من اندماج عظام الورك الثلاثة، عظم الحرقفة وعظم العانة وعظم الإسك.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gallbladder",
    "term_en": "Gallbladder",
    "term_ar": "مرارة",
    "synonyms": [
      "Gallbladders"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A storage reservoir for BILE secretion. Gallbladder allows the delivery of bile acids at a high concentration and in a controlled manner, via the CYSTIC DUCT to the DUODENUM, for degradation of dietary lipid.",
    "arabic_definition": "المَرارَة أو الحوصلة الصفراوية أو الحويصلة الصفراوية (الإنجليزية: Gallbladder)، في الفقاريات، هيَ عضوٌ صغيرٌ مُجوَف، تُخزنُ وتتركزُ فيهِ العُصارةُ الصفراوية قبل إطلاقها في الأمعاء الدقيقة. في الإنسان، تقعُ المرارة كُمثرية الشكل أسفل الكبد، وعلى الرغم من هذا إلا أنَّ هيكل وموقع المرارة قد يختلفُ كثيرًا بين الأنواع الحيوانية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005704.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "buttermilk",
    "term_en": "Buttermilk",
    "term_ar": "مخيض",
    "synonyms": [
      "Butter Milk",
      "Milk, Butter"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A beverage made from cow's milk fermented by LACTIC ACID-producing bacteria, especially LACTOCOCCUS LACTIS and LACTOBACILLUS BULGARICUS.",
    "arabic_definition": "المَخِيض أو مَخِيض اللَّبَن أو اللَّبَنُ المَخِيض أو المخدض أو الحليب الرائب المَمْخُوض أو الشنينة في بلاد الشام والرافدين، ويَشِيع تسميته باللبن في كثير من الأقطار العربية (مثل المناطق المغاربية). وهو في الأصل، سائل ينتج بعد مخمضة الزبدة من القشدة. (Buttermilk)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000070696.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metatarsal-bones",
    "term_en": "Metatarsal Bones",
    "term_ar": "مشط القدم",
    "synonyms": [
      "Bone, Metatarsal",
      "Bones, Metatarsal",
      "Metatarsal Bone",
      "Metatarsals",
      "Metatarsal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The five long bones of the METATARSUS, articulating with the TARSAL BONES proximally and the PHALANGES OF TOES distally.",
    "arabic_definition": "مُشْط القدم مجموعةٌ من خمسة عظام طويلة في قدم الإنسان، تصل عظامَ الرُّصْغ بعظام سُلَامَيَات القدم. تُرَقَّم عظام مُشط القدم من الجانب الإنسي (جانب إصبع القدم الكبير): مشط القدم الأول، والثاني، والثالث، والرابع، والخامس (ترقم بالأرقام الرومانية غالبًا). (Metatarsal Bones)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008682.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metacarpal-bones",
    "term_en": "Metacarpal Bones",
    "term_ar": "مشط اليد",
    "synonyms": [
      "Bones, Metacarpal",
      "Metacarpals"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The five cylindrical bones of the METACARPUS, articulating with the CARPAL BONES proximally and the PHALANGES OF FINGERS distally.",
    "arabic_definition": "السِّنْع أو مشط اليد هو عبارة عن وصلة عظمية تصل رسغ اليد من جهة وسلاميات الأصابع من جهة أخرى والعظام السنعية خمسة، أو يُعرف على أنه مجموعة العظام التي تشكل راحة اليَد وعددها خمسة، تربط بين السلاميات والرسغ ،ولا تعتبر سلاميات الأصابع من مشط اليد.و عظام مشط اليد تقابل عظام مشط القدم. (Metacarpal Bones)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D050279.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epiglottis",
    "term_en": "Epiglottis",
    "term_ar": "لسان المزمار",
    "synonyms": [
      "Epiglottic Cartilage",
      "Cartilage, Epiglottic",
      "Cartilages, Epiglottic",
      "Epiglottic Cartilages"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A thin leaf-shaped cartilage that is covered with LARYNGEAL MUCOSA and situated posterior to the root of the tongue and HYOID BONE. During swallowing, the epiglottis folds back over the larynx inlet thus prevents foods from entering the airway.",
    "arabic_definition": "لِسانُ المِزْمار أو الفَلْكَة أو الغَلْصَمة (الإنجليزية: Epiglottis) هو نسيج ضام غضروفي مرن مُغطَّى بغشاء مخاطي يغلق مدخل الحنجرة ويحميه أثناء عملية بلع الطعام، لكيلا يدخل الطعام إلى القصبة الهوائية، لذلك عندما يتكلم الإنسان أثناء تناول الطعام يضطر لسان المزمار لفتح الحنجرة عند البلع مما يؤدي أحيانًا إلى دخول الطعام إلى القصبة الهوائية وقد يؤدي ذلك للاختناق. يتقدم لسان المزمار بشكل غير مباشر خلف اللسان والعظام اللامية، ممتدًا إلى الخلف.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004825.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epididymis",
    "term_en": "Epididymis",
    "term_ar": "بربخ",
    "synonyms": [
      "بربخ (تشريح)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The convoluted cordlike structure attached to the posterior of the TESTIS. Epididymis consists of the head (caput), the body (corpus), and the tail (cauda). A network of ducts leaving the testis joins into a common epididymal tubule proper which provides the transport, storage, and maturation of SPERMATOZOA.",
    "arabic_definition": "البربخ هو أنبوب ضيق يربط الخصية بالأسهر في الجهاز التناسلي الذكري. يتواجد في جميع الزواحف والطيور والثدييات. (Epididymis)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004822.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arterioles",
    "term_en": "Arterioles",
    "term_ar": "شرين",
    "synonyms": [
      "Arteriole"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The smallest divisions of the arteries located between the muscular arteries and the capillaries.",
    "arabic_definition": "الشرينات (الإنجليزية: Arterioles) هي عبارة عن شرايين صغيرة، متفرعة من الشرايين الكبيرة، وهي تقوم بنقل الدم من الشرايين الكبيرة إلى الشعيرات الدموية ومنها تتجمع وتصب في وريد. لها دور كبير في تنظيم ضغط الدم عن طريق انكماش وتمدد العضلات الملساء الموجودة في جدارنها.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001160.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neocortex",
    "term_en": "Neocortex",
    "term_ar": "قشرة جديدة",
    "synonyms": [
      "Neocortices",
      "Neopallium",
      "Neopalliums",
      "Isocortex",
      "Isocortices",
      "Cerebral Neocortex",
      "Cerebral Neocortices",
      "Neocortex, Cerebral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The largest portion of the CEREBRAL CORTEX in which the NEURONS are arranged in six layers in the mammalian brain: molecular, external granular, external pyramidal, internal granular, internal pyramidal and multiform layers.",
    "arabic_definition": "القشرة الجديدة (اللاتينية: Neocortex) أو القشرة الحديثة هي جزء من القشرة المخية و هي الطبقة الخارجية من نصف كرة المخ لدى الثديات بشكل عام. و تتكون لدى الأنسان من ست طبقات من الخلايا العصبية وهذه الطبقات مرقمة على حسب الأرقام اللاتينية من I إلى VI. و سميت بالقشرة الجديدة كونها في أعلى مراتب التطور في التصنيف العام.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019579.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endothelium",
    "term_en": "Endothelium",
    "term_ar": "بطانة",
    "synonyms": [
      "Endotheliums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A layer of epithelium that lines the heart, blood vessels (ENDOTHELIUM, VASCULAR), lymph vessels (ENDOTHELIUM, LYMPHATIC), and the serous cavities of the body.",
    "arabic_definition": "البِطانَة (الإنجليزية: Endothelium) في طب الأوعية الدموية هي طبقة خلايا التي تكون السطح الداخلي للأوعية الدموية من شرايين وأوردة وأوعية الجهاز اللمفاوي. البطانة الغشائية تكون ملساء وتسمح بمرور الدم على سطحها بسهولة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004727.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "turbinates",
    "term_en": "Turbinates",
    "term_ar": "محارة أنفية",
    "synonyms": [
      "Turbinate",
      "Conchae Nasales",
      "Conchae Nasale",
      "Nasal Concha",
      "Nasal Conchas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The scroll-like bony plates with curved margins on the lateral wall of the NASAL CAVITY. Turbinates, also called nasal concha, increase the surface area of nasal cavity thus providing a mechanism for rapid warming and humidification of air as it passes to the lung.",
    "arabic_definition": "المحارة الأنفية (الإنجليزية: Nasal concha) في علم التشريح هي عبارة عن رف عظمي طويل وضيق يبرز خلال مجري التنفس في الأنف، لدى كل من البشر والحيوانات المختلفة. وتأخذ المحارة الأنفية شكل صدفة أو المحارة البحرية، وهذا هو سبب تسميتها بهذا الاسم. (Turbinates)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014420.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "claustrum",
    "term_en": "Claustrum",
    "term_ar": "عائق",
    "synonyms": [
      "Claustra",
      "Endopiriform Claustrum",
      "Insular Claustrum",
      "عائق (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A gray matter lamina located underneath the inner NEOCORTEX lateral to the PUTAMEN and medial to the INSULAR CORTEX. It is considered to be a part of the basal ganglia. Extensive claustral projections exist to most cortices and subcortical structures including the AMYGDALA, the CAUDATE NUCLEUS, the HIPPOCAMPUS and the THALAMUS.",
    "arabic_definition": "العائق (الإنجليزية: Claustrum) وهو غلالة رقيقة غير منتظمة من الخلايا العصبية التي تعلق على الجانب السفلي من القشرة المخية في وسط الدماغ. ويشتبه في أن يكون متواجداً في أدمغة جميع الثدييات.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000079482.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endocardium",
    "term_en": "Endocardium",
    "term_ar": "شغاف",
    "synonyms": [
      "Endocardiums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The innermost layer of the heart, comprised of endothelial cells.",
    "arabic_definition": "الشَّغاف (اللاتينية: endocardium) ويُطلق عليه أيضًا بِطانةُ القَلْب هو الطبقة المبطنة لجوف القلب. خلاياه تشبه جنينياً وبيولوجياً الخلايا البطانية التي تبطن الأوعية الدموية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004699.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mesentery",
    "term_en": "Mesentery",
    "term_ar": "مسراق",
    "synonyms": [
      "Mesenteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A layer of the peritoneum which attaches the abdominal viscera to the ABDOMINAL WALL and conveys their blood vessels and nerves.",
    "arabic_definition": "المسراق او المساريقا (وجمعه مساريق) (الإنجليزية: Mesentery) هي طية مزدوجة من الصفاق تربط الأمعاء بجدار البطن. أو هو مجموعة مستمرة من الأنسجة التي تتشكل من طية مزدوجة من الصفاق الذي يربط الأمعاء بجدار البطن.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008643.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "periosteum",
    "term_en": "Periosteum",
    "term_ar": "سمحاق",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Thin outer membrane that surrounds a bone. It contains CONNECTIVE TISSUE, CAPILLARIES, nerves, and a number of cell types.",
    "arabic_definition": "السِّمحاق (الإنجليزية: Periosteum) ، معناه باليونانية «حول» ((اليونانية: περί) - بيري) «عظم» ((اليونانية: ὀστοῦν) - أوستون). هو غشاء ليفي يغطي الطبقة الخارجية لجميع العظام ما عدا مفاصل العظام الطويلة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010521.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "allografts",
    "term_en": "Allografts",
    "term_ar": "زرع الطعم الخيفي",
    "synonyms": [
      "Allograft",
      "Homografts",
      "Homograft",
      "Homologous Transplants",
      "Homologous Transplant",
      "Transplant, Homologous",
      "Transplants, Homologous",
      "Allogeneic Grafts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tissues, cells, or organs transplanted between genetically different individuals of the same species.",
    "arabic_definition": "زرع الطعم الخيفي (الإنجليزية: Allotransplant) (خيفي\"Allo\" من المعنى اليوناني «الآخر») هو زرع الخلايا، الأنسجة، أو أعضاء، إلى مستقبِل من متبرع غير متطابق معه وراثيا من نفس النوع. يُسمى المنقول في عملية الزرع: المزروع، زرع الأعضاء المختلفة وراثيا، أو الطعم المثلي. (Allografts)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064591.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eyelashes",
    "term_en": "Eyelashes",
    "term_ar": "هدب العين",
    "synonyms": [
      "Eyelash"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The hairs which project from the edges of the EYELIDS.",
    "arabic_definition": "الهُدْب (جمعه أهداب، واحدته هُدْبَة) أو هدب العين، يسمى خطأ رمش العين (الإنجليزية: Eyelash)، شعيرات تنمو على حافة الجفن. الهُدْب تحمي العين من الحطام، وتتذر عند التتحسس من الغبار أو حشرة قرب العين. (Eyelashes)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005140.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "conjunctiva",
    "term_en": "Conjunctiva",
    "term_ar": "ملتحمة",
    "synonyms": [
      "Conjunctivas",
      "Tunica Conjunctiva",
      "Palpebral Conjunctiva",
      "Conjunctiva, Palpebral",
      "Bulbar Conjunctiva",
      "Conjunctiva, Bulbar",
      "Plica Semilunaris of Conjunctiva",
      "Plicae Semilunares of Conjunctiva"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The mucous membrane that covers the posterior surface of the eyelids and the anterior pericorneal surface of the eyeball.",
    "arabic_definition": "الملتحمة (الإنجليزية: Conjunctiva) هي الغشاء المبطن لجفن العين من الداخل الذي يغطي الصلبة (بياض العين)، هذا الغشاء شفاف وينتمي لنوع الانسجة اللمفانية (جهاز لمفي).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003228.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diaphyses",
    "term_en": "Diaphyses",
    "term_ar": "جسم العظم",
    "synonyms": [
      "Diaphysis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The shaft of long bones.",
    "arabic_definition": "جسم العظم أو قصبة العظم أو ساق العظم أو الجَدْل أو عمد العظم (الإنجليزية: Diaphysis) (الجمع: أجْدال) هو ذلك الجزء الأسطواني الطويل من العظم، وهو الجزء الرئيسي والقسم الأوسط من العظام الطويلة ، وهو مكون من العظام القشرية وعادة ما يحتوي على نِقْي العظم (أو نخاع العظم) (الإنجليزية: Myeloid tissue) والأنسجة الدهنية. وهو الجزء الأنبوبي المتوسط من العظام الطويلة و يتكون من عظم مضغوط يُحيط بتجويف النخاع المركزي الذي يحتوي على النخاع الأحمر أو الأصفر. (Diaphyses)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018483.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urothelium",
    "term_en": "Urothelium",
    "term_ar": "ظهارة انتقالية",
    "synonyms": [
      "Urinary Tract Epithelium",
      "Epithelium, Urinary Tract",
      "Transitional epithelium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The epithelial lining of the URINARY TRACT.",
    "arabic_definition": "الظهارة الانتقالية هي نوع من الظهارة الطبقية. يتكون هذا النسيج من طبقات متعددة من الخلايا الظهارية القادرة على الانقباض والتوسع من أجل التكيف مع درجة التمدد المطلوبة. (Urothelium)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019459.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myometrium",
    "term_en": "Myometrium",
    "term_ar": "عضل الرحم",
    "synonyms": [
      "Uterine Muscle",
      "Muscles, Uterine",
      "Muscle, Uterine",
      "Uterine Muscles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The smooth muscle coat of the uterus, which forms the main mass of the organ.",
    "arabic_definition": "عضل الرحم هي الطبقة الوسطى من جدار الرحم، التي تتألف من خلايا العضلات الملساء للرحم (وتسمى أيضا خلية عضلية رحمية)، وهي ذات خاصية دعامية سدوية وأنسجة وعائية. وظيفتها الرئيسية هي تحفيز تقلصات الرحم. (Myometrium)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009215.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adventitia",
    "term_en": "Adventitia",
    "term_ar": "غلالة برانية",
    "synonyms": [
      "Tunica Externa",
      "Tunica Adventitia",
      "Adventitia, Tunica",
      "Adventitial Tissue",
      "Adventitial Tissues",
      "Tissue, Adventitial",
      "Tissues, Adventitial",
      "Adventitious Tissue"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The outermost covering of organs, blood vessels, and other such structures in the body.",
    "arabic_definition": "الغلالة البرانية (Adventitia) هي الطبقة الخارجية من النسيج الضام الليفي المحيط بالعضو. تسمى أيضًا الطبقة الخارجية من النسيج الضام الذي يحيط بالشريان أو الوريد - الغلالة الخارجية بالغلالة البرانية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D063194.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "stapedius",
    "term_en": "Stapedius",
    "term_ar": "عضلة ركابية",
    "synonyms": [
      "Stapedius muscle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tiny muscle that arises from the posterior wall of the TYMPANIC CAVITY of MIDDLE EAR with its tendon inserted onto the neck of the STAPES. Stapedius pulls the stapes posteriorly and controls its movement.",
    "arabic_definition": "العضلة الركابية (الإنجليزية: Stapedius muscle) هي عضلة في الأذن الوسطى، تتوضع إلى الجانب الوسطي من القطعة الحلمية للعصب الوجهي في الجزء الخلفي لجوف الطبل ضمن الناتئ الهرمي ويخرج وترها من ذروة الناتئ الهرمي ويتثبت على رأس عظم الركاب. العضلة الرِكَابيّة (الإنجليزيّة: The stapedius) أصغر عضلة هيكلية في جسم الإنسان.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013198.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "perilymph",
    "term_en": "Perilymph",
    "term_ar": "لمف محيطي",
    "synonyms": [
      "Perilymphs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The fluid separating the membranous labyrinth from the osseous labyrinth of the ear. It is entirely separate from the ENDOLYMPH which is contained in the membranous labyrinth. (From McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed, p1396, 642)",
    "arabic_definition": "الِّليمْفِ المُحيطِيّ أوْ الِّلمْفِ المُحيطِيّ أو الِّلمْفِ الخارجي (الإنجليزية: Perilymph) هو سائل خارج خلوي يقع داخل الأذن الداخلية. يتواجد هذا السائل، بالتحديد، داخل السِّقالَةُ الطَّبْلِيَّة والسقالة الدهليزية في القوقعة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010498.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autografts",
    "term_en": "Autografts",
    "term_ar": "اغتراس ذاتي",
    "synonyms": [
      "Autograft",
      "Autologous Transplants",
      "Autologous Transplant",
      "Transplant, Autologous",
      "Transplants, Autologous",
      "Autotransplants",
      "Autotransplant",
      "Autotransplantation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Transplant comprised of an individual's own tissue, transferred from one part of the body to another.",
    "arabic_definition": "الاغتراس الذاتي أو الزرع الذاتي (الإنجليزية: Autotransplantation) هو زراعة الأعضاء والأنسجة أو حتى بروتينات معينة من جزء معين من الجسم إلى جزء آخر في نفس الشخص، وتسمى بالأنسجة الذاتية. يتناقض مع زرع الطعم الخيفي (من فرد آخر من نفس النوع)، وزرع سينجينيك (الطعوم المزروعة بين اثنين من الأفراد المتطابقين وراثيا ومن نفس النوع) وزرع الأعضاء (من الأنواع الأخرى). (Autografts)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064592.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "isografts",
    "term_en": "Isografts",
    "term_ar": "طعم إسوي",
    "synonyms": [
      "Isograft",
      "Homografts, Isogeneic",
      "Homograft, Isogeneic",
      "Isogeneic Homograft",
      "Isogeneic Homografts",
      "Homografts, Syngeneic",
      "Homograft, Syngeneic",
      "Syngeneic Homograft"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tissues, cells or organs transplanted between genetically identical individuals, i.e. members of the same species with identical histocompatibility antigens, such as monozygotic twins, members of the same inbred strain, or members of a hybrid population produced by crossing certain inbred strains.",
    "arabic_definition": "الطُعُم الإِسْوِيّ أو الطُعُم المُشَابِه أو الطُعُم المِثْليّ (الإنجليزية: Isograft) هو عبارة عن طعم من الأنسجة بين شخصين متطابقين وراثياً (أي توائم أحادية الزيجوت). رفض الزرع بين هذين الشخصين لا يحدث أبدًا، مما يجعل التماثل متساوي بشكل خاص مع عمليات زرع الأعضاء ؛ المرضى الذين يعانون من أعضاء من التوائم المتطابقة هم من المرجح بشكل لا يصدق أن يستقبلوا الأعضاء بشكل إيجابي والبقاء على قيد الحياة. (Isografts)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064596.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "membranes",
    "term_en": "Membranes",
    "term_ar": "غشاء",
    "synonyms": [
      "Membrane",
      "Membrane Tissue",
      "Membrane Tissues",
      "Tissue, Membrane",
      "Tissues, Membrane"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Thin layers of tissue which cover parts of the body, separate adjacent cavities, or connect adjacent structures.",
    "arabic_definition": "الغشاء هو طبقة من مادة تعمل كحاجز بين وسطين لاتسمح بعبور مواد، جسيمات أو جزئيات معينة عند مرورها عبر الغشاء. فيتم السماح بالعبور للجسيمات المسموح بها ولايتم السماح للباقى بالنفاذ. (Membranes)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008566.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vagus-nerve",
    "term_en": "Vagus Nerve",
    "term_ar": "عصب مبهم",
    "synonyms": [
      "Nerves, Vagus",
      "Nerve, Vagus",
      "Vagus Nerves",
      "Pneumogastric Nerve",
      "Nerve, Pneumogastric",
      "Nerves, Pneumogastric",
      "Pneumogastric Nerves",
      "Tenth Cranial Nerve"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The 10th cranial nerve. The vagus is a mixed nerve which contains somatic afferents (from skin in back of the ear and the external auditory meatus), visceral afferents (from the pharynx, larynx, thorax, and abdomen), parasympathetic efferents (to the thorax and abdomen), and efferents to striated muscle (of the larynx and pharynx).",
    "arabic_definition": "العصب المبهم أو العصب الحائر أو العصب الرئوي المعدي (الإنجليزية: Vagus nerve) هو أحد الأعصاب القحفية الاثنا عشر وهو العصب الوحيد الذي ينشأ في الدماغ وينتهي بعيدا في الجهاز الهضمي ولهذا السبب يطلق على العصب تسمية العصب الحائر. التسمية اللاتينية للعصب vagus تعني المتجول أو المسافر.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014630.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymph-nodes",
    "term_en": "Lymph Nodes",
    "term_ar": "عقدة لمفاوية",
    "synonyms": [
      "Lymph Node",
      "Node, Lymph",
      "Nodes, Lymph"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "They are oval or bean shaped bodies (1 - 30 mm in diameter) located along the lymphatic system.",
    "arabic_definition": "العقد اللمفاوية أو العقد اللنفاوية أو العقد البلغمية (الإنجليزية: Lymph node) هي انتفاخات تظهر على مسير الأوعية اللمفاوية لها وظائف مهمة في الدفاع عن الجسم لتشكيلها أنواع من الخلايا المناعية. يحتوي جسم الإنسان على عدد كبير من العقد اللمفاوية التي يخترقها اللمف بالإضافة إلى الدم، يتراوح وزنها الإجمالي ما بين 600-700غ. (Lymph Nodes)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008198.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bone-marrow",
    "term_en": "Bone Marrow",
    "term_ar": "نخاع العظام",
    "synonyms": [
      "Marrow, Bone",
      "Red Marrow",
      "Marrow, Red",
      "Yellow Marrow",
      "Marrow, Yellow",
      "Marrow"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The soft tissue filling the cavities of bones. Bone marrow exists in two types, yellow and red. Yellow marrow is found in the large cavities of large bones and consists mostly of fat cells and a few primitive blood cells. Red marrow is a hematopoietic tissue and is the site of production of erythrocytes and granular leukocytes. Bone marrow is made up of a framework of connective tissue containing branching fibers with the frame being filled with marrow cells.",
    "arabic_definition": "نِقْيُ العَظْم أو نخاع العظم هو نسيج حيوي شبه صلب يوجد داخل الأجزاء الإسفنجيَّة من العظام الطويلة، وهو الموقع الرئيسي لإنتاج خلايا الدم الجديدة «تكوين الدم» عند الطيور والثدييات، يتكون نقي العظم من الخلايا الجذعية المنتجة للدم ونسيج شحمي وأنسجة داعمة أخرى، ويوجد عند البالغين بشكل أساسي في عظام الأضلاع والحوض والقص والفقرات، ويشكل تقريباً 4% من وزن الجسم بشكل وسطي فتقريباً هو يشكِّل 2.6 كغ عند شخص وزنه 65 كغ. ينتج نقي العظم قرابة 500 مليار خلية دموية يومياً والتي تدخل للدوران عبر جيوب وريدية خاصة، جميع مكونات الدم وخلاياه يتمُّ إنتاجها في نقي العظم ومع ذلك فبعض أنواعها كالخلايا اللمفاوية يجب أن تهاجر خارج نقي العظم إلى الأعضاء اللمفاوية الأخرى لكي تنضج بشكل كامل وتصبح قادرة على القيام بوظيفتها. (Bone Marrow)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001853.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "portal-vein",
    "term_en": "Portal Vein",
    "term_ar": "وريد بابي",
    "synonyms": [
      "Portal Veins",
      "Vein, Portal",
      "Veins, Portal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A short thick vein formed by union of the superior mesenteric vein and the splenic vein.",
    "arabic_definition": "الوريد البابي أو وريد الباب أو الباب أو وريد بابي كبدي (الإنجليزية: Portal vein) هو الوريد الذي يحمل الدم المحمّل بالمواد الغذائية الممتصة عن طريق عملية الهضم إلى الكبد. يرد 75% من الدوران الدموي في الكبد من الوريد البابي، ويأتي المتبقي من الشريان الكبدي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011169.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ulnar-nerve",
    "term_en": "Ulnar Nerve",
    "term_ar": "عصب زندي",
    "synonyms": [
      "Nerves, Ulnar",
      "Nerve, Ulnar",
      "Ulnar Nerves"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A major nerve of the upper extremity. In humans, the fibers of the ulnar nerve originate in the lower cervical and upper thoracic spinal cord (usually C7 to T1), travel via the medial cord of the brachial plexus, and supply sensory and motor innervation to parts of the hand and forearm.",
    "arabic_definition": "العَصَبُ الزَّنْدِيّ (الإنجليزية: Ulnar nerve) هو العصب الذي يمتد بالقرب من العظام الزند، وهو أكبر عصب في جسم الأنسان دون وقاية (غير محمي بواسطة العضلات أو العظام) لذلك تكون الإصابة محتملة بنسبة أكبر. العصب الزندي يعطي التغذية العصبية الحسية للجانب الإنسي من ظاهر من يد (ظاهر الخنصر وظاهر النصف الإنسي للبنصر).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014459.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "soft-palate",
    "term_en": "Soft Palate",
    "term_ar": "حنك رخو",
    "synonyms": [
      "Palates, Soft",
      "Velum Palatinum",
      "Palatinum, Velum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A movable fold suspended from the posterior border of the hard palate. The uvula hangs from the middle of the lower border.",
    "arabic_definition": "الحنك الرخو (الإنجليزية: soft palate) أو شِراع الحَنَك أو الحَفّاف أو الحنك اللين أو الحنك العضلي أو غشاء الحنك هو الجزء الخلفي من الحنك وهو عبارة عن طية ليفية عضلية متحركة ومعلقة بالحافة الخلفية للحنك الصلب. الحافة الخلفية للحنك الرخو حرة ولها في المستوى الناصف استطالة تدعى اللهاة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010160.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nasal-bone",
    "term_en": "Nasal Bone",
    "term_ar": "عظم أنفي",
    "synonyms": [
      "Bone, Nasal",
      "Bones, Nasal",
      "Nasal Bones"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Either one of the two small elongated rectangular bones that together form the bridge of the nose.",
    "arabic_definition": "العظم الأنفي (الإنجليزية: Nasal bone) عبارة عن عظم صغير مستطيل الشكل تختلف أبعاده من فرد لآخر. يوجد عظم أنفي في كل جانب في منتصف الوجه يشكلان لدى اتحادهما ما يسمى بجسر الأنف.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009295.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hard-palate",
    "term_en": "Hard Palate",
    "term_ar": "حنك صلب",
    "synonyms": [
      "Hard Palates",
      "Palates, Hard",
      "Palatine Bone",
      "Bone, Palatine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The anteriorly located rigid section of the PALATE.",
    "arabic_definition": "الحنك الصلب أو الحنك القاسي هو الجزء العظمي من الحنك ويشكل الثلثين الأماميين منه. يتوضع عند البالغ في مستوى الفقرة الرقبية الثانية وهو أعلى من ذلك بقليل عند الطفل. (Hard Palate)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D021362.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "red-nucleus",
    "term_en": "Red Nucleus",
    "term_ar": "نواة حمراء",
    "synonyms": [
      "Nucleus, Red",
      "Nucleus Ruber"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pinkish-yellow portion of the midbrain situated in the rostral mesencephalic tegmentum. It receives a large projection from the contralateral half of the CEREBELLUM via the superior cerebellar peduncle and a projection from the ipsilateral MOTOR CORTEX.",
    "arabic_definition": "النواة الحمراء هي تركيب يقع في مقدمة الدماغ المتوسط تشارك في تنسيق الحركة. تمتلك لوناً وردياً باهتاً، يُعتقد أن هذا اللون نتيجة وجود الحديد والذي يوجد في النواة الحمراء في شكلين مختلفين على الأقل: االهيموجلوبين والفيريتين. (Red Nucleus)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012012.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spinal-cord",
    "term_en": "Spinal Cord",
    "term_ar": "نخاع شوكي",
    "synonyms": [
      "Cord, Spinal",
      "Cords, Spinal",
      "Spinal Cords",
      "Myelon",
      "Myelons",
      "Medulla Spinalis",
      "Medulla Spinali",
      "Spinali, Medulla"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cylindrical column of tissue that lies within the vertebral canal. It is composed of WHITE MATTER and GRAY MATTER.",
    "arabic_definition": "النخاع الشوكي أو الحبل الشوكي أو النُّخاع (الإنجليزية: Spinal cord) هو جزء من الجهاز العصبي المركزي والذي يبدأ من قاعدة الدماغ (تحديداً من النخاع المستطيل) ويمر خلال النفق الفقري (أو القناة الفقرية) للعمود الفقري، ويمتد حتى الفراغ بين الفقرة القطنية الأولى والثانية، وهو أنبوبي الشكل ويتكون من حزمة من الأعصاب التي تعتبر امتداداً للجهاز العصبي المركزي من الدماغ، ويحميها مجموعة من العظام تسمى العمود الفقري. والوظيفة الرئيسية للنخاع الشوكي هي نقل النبضات العصبية من وإلى الدماغ وتوصيلها الأعصاب الفرعية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013116.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "optic-chiasm",
    "term_en": "Optic Chiasm",
    "term_ar": "تصالبة بصرية",
    "synonyms": [
      "Chiasm, Optic",
      "Chiasms, Optic",
      "Optic Chiasms",
      "Optic Decussation",
      "Decussation, Optic",
      "Decussations, Optic",
      "Optic Decussations",
      "Chiasma Opticum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The X-shaped structure formed by the meeting of the two optic nerves. At the optic chiasm the fibers from the medial part of each retina cross to project to the other side of the brain while the lateral retinal fibers continue on the same side. As a result each half of the brain receives information about the contralateral visual field from both eyes.",
    "arabic_definition": "التَّصَالُبَةُ البَصَريَّةُ أو التَّصَالُبُ البَصَرِيُّ هي جزء من الدماغ حيث يتقاطع العصبان البصريان جزئياً. تقع التصالبة البصرية في قاع الدماغ مباشرةً أسفل تحت المهاد. (Optic Chiasm)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009897.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "facial-nerve",
    "term_en": "Facial Nerve",
    "term_ar": "عصب وجهي",
    "synonyms": [
      "Facial Nerves",
      "Nerve, Facial",
      "Seventh Cranial Nerve",
      "Cranial Nerve, Seventh",
      "Nerve, Seventh Cranial",
      "Seventh Cranial Nerves",
      "Cranial Nerve VII",
      "Cranial Nerve VIIs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The 7th cranial nerve. The facial nerve has two parts, the larger motor root which may be called the facial nerve proper, and the smaller intermediate or sensory root. Together they provide efferent innervation to the muscles of facial expression and to the lacrimal and SALIVARY GLANDS, and convey afferent information for TASTE from the anterior two-thirds of the TONGUE and for TOUCH from the EXTERNAL EAR.",
    "arabic_definition": "العَصَب الوَجْهِيّ(الإنجليزية: Facial nerve) أو العصب القحفي السابع (الإنجليزية: seventh cranial nerve أو cranial nerve VII) هو أحد الأعصاب قحفية المزدوجة الاثنى عشر. و يتحكم في العضلات الخاصة بتعابير الوجه و ثلثي الجزء الداخلي من اللسان المتعلق بعملية التذوق وتجويف الفم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005154.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radial-nerve",
    "term_en": "Radial Nerve",
    "term_ar": "عصب كعبري",
    "synonyms": [
      "Nerve, Radial",
      "Nerves, Radial",
      "Radial Nerves"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A major nerve of the upper extremity. In humans the fibers of the radial nerve originate in the lower cervical and upper thoracic spinal cord (usually C5 to T1), travel via the posterior cord of the brachial plexus, and supply motor innervation to extensor muscles of the arm and cutaneous sensory fibers to extensor regions of the arm and hand.",
    "arabic_definition": "العصب الكعبري (الإنجليزية: Radial Nerve) هو عصب في جسم الإنسان يغذي الجزء الخلفي من الطرف العلوي. يعصّب الرأس الإنسي والجانبي للعضلة ثلاثية الرؤوس العضدية للذراع، بالإضافة إلى جميع العضلات الاثنتي عشرة في الحيز اللفافي العظمي الخلفي للساعد والمفاصل المرتبطة والجلد العلوي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011826.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heart-valves",
    "term_en": "Heart Valves",
    "term_ar": "صمام قلبي",
    "synonyms": [
      "Heart Valve",
      "Valve, Heart",
      "Valves, Heart",
      "Cardiac Valves",
      "Cardiac Valve",
      "Valve, Cardiac",
      "Valves, Cardiac"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Flaps of tissue that prevent regurgitation of BLOOD from the HEART VENTRICLES to the HEART ATRIA or from the PULMONARY ARTERIES or AORTA to the ventricles.",
    "arabic_definition": "الصَّمَّامُ القَلْبِيُّ أو الصمام الأذيني يسمح للدم بالتدفق عبر حجرات القلب باتجاه واحد فقط. صمامات القلب الأربعة الحيوية لها أهمية في قلب الثدييات حيث تحدد اتجاه عبور الدم في القلب وتمنع تدفق الدم رجوعاً، فهي تُفتح وتُغلق كرد فعل لتغيرات الضغط على جوانبها المتقابلة. (Heart Valves)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006351.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aortic-valve",
    "term_en": "Aortic Valve",
    "term_ar": "صمام أبهري",
    "synonyms": [
      "Aortic Valves",
      "Valve, Aortic",
      "Valves, Aortic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The valve between the left ventricle and the ascending aorta which prevents backflow into the left ventricle.",
    "arabic_definition": "الصمام الأبهري أو الأورطي هو صمام ثلاثي الشرف يفصل بين البطين الأيسر والشريان الأبهر، ويسمح للدم بالتدفق خارجاً من البطين الأيسر إلى الشريان الأبهري، وهو يفتح عند انقباض القلب، ليغلق عند نهاية الانقباضة ليمنع رجوع الدم إلى القلب. يتكون الصمام من ثلاث شُرَف (اللاتينية: Valvulae) تلتقي معاً على شكل نجمة ثلاثية، تحوي هذه الشرف على مخارج الشرايين التاجية. (Aortic Valve)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001021.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mitral-valve",
    "term_en": "Mitral Valve",
    "term_ar": "صمام تاجي",
    "synonyms": [
      "Mitral Valves",
      "Valve, Mitral",
      "Valves, Mitral",
      "Bicuspid Valve",
      "Bicuspid Valves",
      "Valve, Bicuspid",
      "Valves, Bicuspid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The valve between the left atrium and left ventricle of the heart.",
    "arabic_definition": "الصمام التاجي أو الصِمَام المِترالي (الإنجليزية: mitral valve) أو الصمام ثنائي الشرفات (لأنه يتكون من شرفتين) أو الصمام القلنسي هو الصمام الذي يوجه جريان الدم من الأذين الأيسر إلى البطين الأيسر. (اللاتينية: mitra).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008943.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "macula-lutea",
    "term_en": "Macula Lutea",
    "term_ar": "بقعة الشبكية",
    "synonyms": [
      "Lutea, Macula",
      "Luteas, Macula",
      "Macula Luteas",
      "Macula"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An oval area in the retina, 3 to 5 mm in diameter, usually located temporal to the posterior pole of the eye and slightly below the level of the optic disk. It is characterized by the presence of a yellow pigment diffusely permeating the inner layers, contains the fovea centralis in its center, and provides the best phototropic visual acuity. It is devoid of retinal blood vessels, except in its periphery, and receives nourishment from the choriocapillaris of the choroid. (From Cline et al., Dictionary of Visual Science, 4th ed)",
    "arabic_definition": "البقعة أو البقعة الصفراء هي بيضوية الشكل ذات بقع صفراء مصطبغة جدا بالقرب من مركز شبكية العين البشرية. فقد يبلغ قطرها حوالي 5 ملم وهي من الخلايا المتشابهه أحيانا تحتوي على اثنتين أو أكثر من طبقات الخلايا العقدية. (Macula Lutea)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008266.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pineal-gland",
    "term_en": "Pineal Gland",
    "term_ar": "غدة صنوبرية",
    "synonyms": [
      "Gland, Pineal",
      "Pineal Glands",
      "Epiphysis Cerebri",
      "Pineal Body",
      "Pineal Bodies",
      "Corpus Pineale"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A light-sensitive neuroendocrine organ attached to the roof of the THIRD VENTRICLE of the brain. The pineal gland secretes MELATONIN, other BIOGENIC AMINES and NEUROPEPTIDES.",
    "arabic_definition": "الغدة الصَّنَوبرية (الإنجليزية: Pineal gland) غدة صمَّاءُ صغيرة في تجويف الدماغ. تفرز الميلاتونين، وهو هرمون النوم وعمل الجسم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010870.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ethmoid-bone",
    "term_en": "Ethmoid Bone",
    "term_ar": "عظم غربالي",
    "synonyms": [
      "Bone, Ethmoid",
      "Bones, Ethmoid",
      "Ethmoid Bones",
      "Horizontal Plate of Ethmoid Bone",
      "Cribriform Plate",
      "Cribriform Plates",
      "Plate, Cribriform",
      "Plates, Cribriform"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A light and spongy (pneumatized) bone that lies between the orbital part of FRONTAL BONE and the anterior of SPHENOID BONE. Ethmoid bone separates the ORBIT from the ETHMOID SINUS. It consists of a horizontal plate, a perpendicular plate, and two lateral labyrinths.",
    "arabic_definition": "العظم الغربالي (الإنجليزية: Ethmoid bone) هو أحد عظام الجمجمة، يفصل جوف الأنف عن الدماغ. يشكل العظم الغربالي جزءاً من سقف جوف الأنف ويقع بين جوفي الحجاج.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005004.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "frontal-bone",
    "term_en": "Frontal Bone",
    "term_ar": "عظم جبهي",
    "synonyms": [
      "Bone, Frontal",
      "Bones, Frontal",
      "Frontal Bones"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The bone that forms the frontal aspect of the skull. Its flat part forms the forehead, articulating inferiorly with the NASAL BONE and the CHEEK BONE on each side of the face.",
    "arabic_definition": "العظم الجبهي (الإنجليزية: Frontal bone) هو أحد عظام الجمجمة المفردة، ويشكل الجبهة والحافة العلوية وسقف المحجر. يتوضع في الوجه الأمامي للقحف، ويشاهد من الوجه الجانبي ومن قاعدة القحف أيضاً، وهو عظم مفرد يكون في الحياة الجنينية مزدوجاً وبعد التحامه يبقى أثر للالتحام يسمى: الدرز الجبهي (الناصف)، يساهم في تشكيل كل من الحفرة القحفية الأمامية وقاعدة القحف وجوف الحجاج.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005624.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sense-organs",
    "term_en": "Sense Organs",
    "term_ar": "الجهاز العصبي الحسي",
    "synonyms": [
      "Organ, Sense",
      "Sense Organ",
      "Sensory System",
      "Sensory Systems",
      "System, Sensory",
      "Sensory nervous system"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Specialized organs adapted for the reception of stimuli by the NERVOUS SYSTEM.",
    "arabic_definition": "الجهاز العصبي الحسي هو جزء من الجهاز العصبي المسؤول عن معالجة المعلومات الحسية الواردة. يتألف الجهاز العصبي الحسي من العصبونات الحسية (بما فيها الخلايا المستقبلة الحسية)، والسبل العصبية، وأجزاء من الدماغ التي تشمل الإدراك الحسي. (Sense Organs)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012679.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nasal-cavity",
    "term_en": "Nasal Cavity",
    "term_ar": "جوف الأنف",
    "synonyms": [
      "Cavities, Nasal",
      "Cavity, Nasal",
      "Nasal Cavities"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The proximal portion of the respiratory passages on either side of the NASAL SEPTUM. Nasal cavities, extending from the nares to the NASOPHARYNX, are lined with ciliated NASAL MUCOSA.",
    "arabic_definition": "جوف الأنف أو الحفرة الأنفية هو الجزء العميق من الأنف والممتد من المنخرين في الأمام وحتى المنعرين في الخلف، أي حتى البلعوم في الخلف. يقسم جوف الأنف إلى قسمين أيمن وأيسر بواسطة بنية عظمية غضروفية تدعى حاجز الأنف أو الوتيرة. (Nasal Cavity)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009296.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "frontal-lobe",
    "term_en": "Frontal Lobe",
    "term_ar": "فص جبهي",
    "synonyms": [
      "Frontal Lobes",
      "Lobe, Frontal",
      "Frontal Cortex",
      "Cortex, Frontal",
      "Frontal Cortices",
      "Lobus Frontalis",
      "Frontal Eye Fields",
      "Eye Field, Frontal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The part of the cerebral hemisphere anterior to the central sulcus, and anterior and superior to the lateral sulcus.",
    "arabic_definition": "الفص الجبهي هو جزء من دماغ الإنسان وأدمغة الثدييات، يقع في الجزء الأمامي لكل من نصفي الكرة الدماغية إذ يتموضع في الجزء الأمامي للفص الجانبي ويحد الفص الصدغي من الجهة العلوية الأمامية. ويفصل بينه وبين الفص الجداري فراغ بين الأنسجة يطلق عليه التلم المركزي، كما يفصله عن الفص الصدغي طي عميق يطلق عليه التلم الجانبي. (Frontal Lobe)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005625.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "raphe-nuclei",
    "term_en": "Raphe Nuclei",
    "term_ar": "نوى الرفاء",
    "synonyms": [
      "Nuclei, Raphe",
      "Nucleus, Raphe",
      "Raphe Nucleus",
      "Superior Central Nucleus",
      "Central Nucleus, Superior",
      "Nucleus, Superior Central",
      "Rostral Linear Nucleus of Raphe",
      "Rostral Linear Nucleus of the Raphe"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Collections of small neurons centrally scattered among many fibers from the level of the TROCHLEAR NUCLEUS in the midbrain to the hypoglossal area in the MEDULLA OBLONGATA.",
    "arabic_definition": "النوى الرفائية (من اليونانية: ῥαφή، أي «الدرز») هي مجموعة متوسطة الحجم من النوى تقع في جذع الدماغ. تحتوي هذه النوى على مستقبلات 5-HT1 المرتبطة ببروتين Gi/Go المثبِّط لإنزيم الأدينيل سيكلاز، وتعمل كمستقبلات ذاتية في الدماغ تُقلِّل من إفراز السيروتونين. (Raphe Nuclei)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011903.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "renal-artery",
    "term_en": "Renal Artery",
    "term_ar": "شريان كلوي",
    "synonyms": [
      "Arteries, Renal",
      "Artery, Renal",
      "Renal Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A branch of the abdominal aorta which supplies the kidneys, adrenal glands and ureters.",
    "arabic_definition": "الشريان الكلوي (الإنجليزية: Renal artery) هو فرع من شريان كظري سفلي ومن شرايين قطعية. الشريان الكلوي الأيسر أقصر من الأيمن، يصالب الساق الحجابية والعضلة القطنية، يكون خلف الوريد الكلوي وأحياناً فوقه.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012077.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "growth-plate",
    "term_en": "Growth Plate",
    "term_ar": "صفيحة مشاشية",
    "synonyms": [
      "Growth Plates",
      "Plate, Growth",
      "Plates, Growth",
      "Epiphyseal Plate",
      "Epiphyseal Plates",
      "Plate, Epiphyseal",
      "Plates, Epiphyseal",
      "Cartilage, Epiphyseal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The area between the EPIPHYSIS and the DIAPHYSIS within which bone growth occurs.",
    "arabic_definition": "صفيحة مشاشية (الإنجليزية: Epiphyseal plate) أو صفيحة النمو (الإنجليزية: growth plate) ، هي صفيحة من غضروف زجاجي تقع في كل كردوس في نهاية طرفيّ العظام الطويلة. توجد الصفيحة في الأطفال والمراهقين ؛ وفي البالغين ممن توقف لديهم النمو، فتُستبدال الصفيحة بخط مشاشي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006132.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thyroid-gland",
    "term_en": "Thyroid Gland",
    "term_ar": "غدة درقية",
    "synonyms": [
      "Glands, Thyroid",
      "Gland, Thyroid",
      "Thyroid Glands",
      "Thyroid",
      "Thyroids"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A highly vascularized endocrine gland consisting of two lobes joined by a thin band of tissue with one lobe on each side of the TRACHEA. It secretes THYROID HORMONES from the follicular cells and CALCITONIN from the parafollicular cells thereby regulating METABOLISM and CALCIUM level in blood, respectively.",
    "arabic_definition": "الغدة الدَّرَقية أو الدَّرَقيّة غدة صماء عند الفِقْريات، وهي عند الإنسان في مقدمة الرقبة، أسفل تفاحة آدم، وهي فصان متصلان. يرتبط الثلثان السفليان من الفصين برباط رفيع من الأنسجة يُدعى «برزخ الغدة الدرقية» (thyroid isthmus). (Thyroid Gland)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013961.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "visual-cortex",
    "term_en": "Visual Cortex",
    "term_ar": "قشرة بصرية",
    "synonyms": [
      "Cortex, Visual",
      "Extrastriate Cortex",
      "Cortex, Extrastriate",
      "Extrastriate Cortices",
      "Secondary Visual Cortex",
      "Cortex, Secondary Visual",
      "Secondary Visual Cortices",
      "Visual Cortex, Secondary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Area of the OCCIPITAL LOBE concerned with the processing of visual information relayed via VISUAL PATHWAYS.",
    "arabic_definition": "القشرة البصرية للدماغ (الإنجليزية: Visual cortex) هي القشرة الدماغية المسؤولة عن معالجة البيانات البصرية وهي تقع في الفص القذالي في الجزء الخلفي من الدماغ. وهي جزء من القشرة الدماغية التي تلعب دورا هاما في معالجة المعلومات المرئية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014793.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phrenic-nerve",
    "term_en": "Phrenic Nerve",
    "term_ar": "عصب حجابي",
    "synonyms": [
      "Nerve, Phrenic",
      "Nerves, Phrenic",
      "Phrenic Nerves"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The motor nerve of the diaphragm. The phrenic nerve fibers originate in the cervical spinal column (mostly C4) and travel through the cervical plexus to the diaphragm.",
    "arabic_definition": "العصب الحجابي هو عصب ينشأ في الرقبة من القطعة العنقية الثالثة حتى الخامسة من الحبل الشوكي ثم يتجه إلى الأسفل بين القلب والرئتين لكي يصل إلى الحجاب الحاجز. يلعب العصب دوراً مهما في عملية التنفس حيث ينقل معلومات حركية إلى الحجاب الحاجز ويستقبل معلومات حسية منه. (Phrenic Nerve)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010791.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thoracic-duct",
    "term_en": "Thoracic Duct",
    "term_ar": "قناة صدرية",
    "synonyms": [
      "Ducts, Thoracic",
      "Duct, Thoracic",
      "Thoracic Ducts",
      "Cisterna Chyli",
      "Chyli, Cisterna",
      "Chylus, Cisterna",
      "Cisterna Chylus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The largest lymphatic vessel that passes through the chest and drains into the SUBCLAVIAN VEIN.",
    "arabic_definition": "القناة الصدرية (الإنجليزية: Thoracic duct) (تعرف أيضا بالقناة اللمفية اليسرى) هي أكبر قناة لمفية في الجسم. تعمل القناة الصدرية على تجميع اللمف من جميع أنحاء الجسم (ماعدا الذراع الأيمن، الجهة اليمنى من الصدر، الرأس والرقبة، والفص السفلي الأيسر من الرئة حيث يتم تجميع اللمف منهم عن طريق القناة اللمفية اليمنى).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013897.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parietal-bone",
    "term_en": "Parietal Bone",
    "term_ar": "عظم جداري",
    "synonyms": [
      "Bone, Parietal",
      "Bones, Parietal",
      "Parietal Bones"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of a pair of irregularly shaped quadrilateral bones situated between the FRONTAL BONE and OCCIPITAL BONE, which together form the sides of the CRANIUM.",
    "arabic_definition": "العظم الجداري (الإنجليزية: Parietal bone) هو أحد عظام الجمجمة يشكل باتحاده مع نظيره في الجانب المقابل جانب وسقف الجمجمة. له شكل رباعي غير منتظم، يوصف له سطحان وأربعة حدود وأربع زاويا.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010294.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "temporal-bone",
    "term_en": "Temporal Bone",
    "term_ar": "عظم صدغي",
    "synonyms": [
      "Bone, Temporal",
      "Temporal Bones",
      "Stylomastoid Foramen"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Either of a pair of compound bones forming the lateral (left and right) surfaces and base of the skull which contains the organs of hearing. It is a large bone formed by the fusion of parts: the squamous (the flattened anterior-superior part), the tympanic (the curved anterior-inferior part), the mastoid (the irregular posterior portion), and the petrous (the part at the base of the skull).",
    "arabic_definition": "العظم الصدغي (الإنجليزية: Temporal bone) هو عظم مزدوج يتوضع في القسم السفلي الجانبي من القحف أو الجمجمة، ويشكل جزءاً من جانب الجمجمة وقاعدتها. يجاور العظم الصدغي من الأمام العظم الوتدي (الإنجليزية: Sphenoid bone) ومن الخلف العظم القفوي (الإنجليزية: Occipital bone) ومن الأعلى العظم الجداري (الإنجليزية: Parietal bone).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013701.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parotid-gland",
    "term_en": "Parotid Gland",
    "term_ar": "غدة نكافية",
    "synonyms": [
      "Gland, Parotid",
      "Glands, Parotid",
      "Parotid Glands"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The largest of the three pairs of SALIVARY GLANDS. They lie on the sides of the FACE immediately below and in front of the EAR.",
    "arabic_definition": "الغُدَّة النَّكَفِيَّة أو النَّكَفَة (الإنجليزية: Parotid gland) هي أكبر الغدد اللعابية. تتوضع في الوجه إلى الأسفل والأمام من الأذن بحيث تغطي فرع الفك السفلي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010306.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adipose-tissue",
    "term_en": "Adipose Tissue",
    "term_ar": "نسيج شحمي",
    "synonyms": [
      "Tissue, Adipose",
      "Fatty Tissue",
      "Tissue, Fatty",
      "Fat Pad",
      "Fat Pads",
      "Pad, Fat",
      "Pads, Fat",
      "Body Fat"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Specialized connective tissue composed of fat cells (ADIPOCYTES). It is the site of stored FATS, usually in the form of TRIGLYCERIDES. In mammals, there are two types of adipose tissue, the WHITE FAT and the BROWN FAT. Their relative distributions vary in different species with most adipose tissue being white.",
    "arabic_definition": "النسيج الدهني أو النسيج الشحمي (بالإنجليزية:adipose tissue) في التشريح يتكون من نَسيج قليل التماسك من الخلايا الدهنية. ويلعب دورًا أساسيًا في تخزين الطاقة على شكل دهون، كما تعزل الأعضاء الداخلية للجسم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000273.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "capitate-bone",
    "term_en": "Capitate Bone",
    "term_ar": "العظم الكبير",
    "synonyms": [
      "Bone, Capitate",
      "Bones, Capitate",
      "Capitate Bones",
      "Os Capitatum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A carpal bone with a rounded head located between the TRAPEZOID BONE and the HAMATE BONE.",
    "arabic_definition": "العظم الكبير عظم متصل بمشط اليد ويرتبط به العظم السنعي الثالث وهو إحدى عظام الصف الثاني من عظام الرسغ والثالث من جهة الإبهام. (Capitate Bone)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051224.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hair-follicle",
    "term_en": "Hair Follicle",
    "term_ar": "جريب الشعرة",
    "synonyms": [
      "Follicle, Hair",
      "Follicles, Hair",
      "Hair Follicles"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A tube-like invagination of the EPIDERMIS from which the hair shaft develops and into which SEBACEOUS GLANDS open. The hair follicle is lined by a cellular inner and outer root sheath of epidermal origin and is invested with a fibrous sheath derived from the dermis. (Stedman, 26th ed) Follicles of very long hairs extend into the subcutaneous layer of tissue under the SKIN.",
    "arabic_definition": "جريب الشعرة أو حويصلة الشعرة أو بصيلة الشعرة (الإنجليزية: Hair follicle) هو عضو جلدي في الثدييات يخرج شعر. عملية إنبات الشعر تمر بأطوار، وتشمل النمو (طور التنامي)، والانقطاع المطلق (فترة التراجع)، والثبات (الطور الانتهائي).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018859.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parietal-lobe",
    "term_en": "Parietal Lobe",
    "term_ar": "فص جداري",
    "synonyms": [
      "Lobe, Parietal",
      "Parietal Lobes",
      "Parietal Cortex",
      "Cortex, Parietal",
      "Parietal Cortices",
      "Parietal Region",
      "Parietal Regions",
      "Region, Parietal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Upper central part of the cerebral hemisphere. It is located posterior to central sulcus, anterior to the OCCIPITAL LOBE, and superior to the TEMPORAL LOBES.",
    "arabic_definition": "الفص الجداري (الإنجليزية: Parietal lobe) فص من فصوص الدماغ يقع أمام وفوق الفص القذالي وخلف الفص الجبهي. يدمج الفص الجداري المعلومات الحسية بأنواعها المتعددة، بما في ذلك الإحساس المكاني والملاحة (استقبال الحس العميق)، وهو المنطقة المستقبلة الحسية الرئيسة للإحساس باللمس في القشرة الحسية التي تقع خلف التلم المركزي في التلفيف خلف المركزي، ويعد التيار الظهري للنظام البصري.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010296.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "temporal-lobe",
    "term_en": "Temporal Lobe",
    "term_ar": "فص صدغي",
    "synonyms": [
      "Lobe, Temporal",
      "Temporal Lobes",
      "Temporal Cortex",
      "Cortex, Temporal",
      "Temporal Cortices",
      "Temporal Region",
      "Region, Temporal",
      "Temporal Regions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Lower lateral part of the cerebral hemisphere responsible for auditory, olfactory, and semantic processing. It is located inferior to the lateral fissure and anterior to the OCCIPITAL LOBE.",
    "arabic_definition": "الفص الصدغي (بالإنجليزية: Temporal lobe) هو فص من من فصوص دماغ الإنسان وأدمغة الثدييات، يقع في الجزء الجانبي لكل من نصفي الكرة الدماغية ويحدّه الفص الجداري والفص القفوي ويتوضع للأسفل من الشق الجانبي (شق سيلفيوس) أو الثلم الوحشي للدماغ. هو قسم من القشرة المخية التي توجد أسفل الشق الوحشي في نصفي الكرة المخية في دماغ الثدييات ويتضمن مسؤولية أساسية في استيعاب السمع واللغة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013702.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sella-turcica",
    "term_en": "Sella Turcica",
    "term_ar": "سرج تركي",
    "synonyms": [
      "Sella Turcicas",
      "Turcica, Sella",
      "Turcicas, Sella"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A bony prominence situated on the upper surface of the body of the sphenoid bone. It houses the PITUITARY GLAND.",
    "arabic_definition": "السرج التركي (اللاتينية: Sella turcica) هو الحفرة المركزية في جسم العظم الوتدي الذي يحوي الغدة النخامية في جمجمة الإنسان والقردة أيضًا.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012658.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radial-artery",
    "term_en": "Radial Artery",
    "term_ar": "شريان كعبري",
    "synonyms": [
      "Arteries, Radial",
      "Artery, Radial",
      "Radial Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The direct continuation of the brachial trunk, originating at the bifurcation of the brachial artery opposite the neck of the radius. Its branches may be divided into three groups corresponding to the three regions in which the vessel is situated, the forearm, wrist, and hand.",
    "arabic_definition": "يعتبر الشريان الكعبري من إحدى الأوعية الدموية الرئيسية من الطرف العلوي في جسم الإنسان. إذ يُعتبر الشريان الرئيسيّ للجانب الوحشيّ للساعد. (Radial Artery)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017534.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "joint-capsule",
    "term_en": "Joint Capsule",
    "term_ar": "محفظة مفصلية",
    "synonyms": [
      "Capsule, Joint",
      "Joint Capsules",
      "Articular Capsule",
      "Articular Capsules",
      "Capsule, Articular",
      "Capsula Articularis",
      "Synovial Capsule",
      "Capsule, Synovial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sac enclosing a joint. It is composed of an outer fibrous articular capsule and an inner SYNOVIAL MEMBRANE.",
    "arabic_definition": "المحفظة المفصلية أو محفظة المفصل (الإنجليزية: Joint capsule) هي غلاف يُحيط بـالمفصل الزلالي. كل محفظة مفصلية تتكون من جزئين: طبقة أو غشاء خارجي ليفي، وطبقة أو غشاء داخلي زليلي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017746.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "area-postrema",
    "term_en": "Area Postrema",
    "term_ar": "باحة منخفضة",
    "synonyms": [
      "Area Postremas",
      "Postrema, Area",
      "Chemoreceptor Trigger Zone",
      "Chemoreceptor Trigger Zones",
      "Trigger Zone, Chemoreceptor",
      "Trigger Zones, Chemoreceptor",
      "Zone, Chemoreceptor Trigger",
      "Zones, Chemoreceptor Trigger"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A small, rounded eminence on each side of the FOURTH VENTRICLE, which receives nerve fibers from the SOLITARY NUCLEUS; SPINAL CORD; and adjacent areas of the MEDULLA OBLONGATA. The area postrema lies outside the BLOOD-BRAIN BARRIER and its functions include acting as an emetic chemoreceptor.",
    "arabic_definition": "الباحة المنخفضة (الإنجليزية: Area postrema) (تعرف اختصارًا AP) هي بنية في النخاع المستطيل في جذع الدماغ تتحكم بالتقيؤ. يسمح لها موضعها من الدماغ أن تلعب دورا حياتيا في التحكم بوظائف الجهاز العصبي الذاتي بواسطة الجهاز العصبي المركزي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D031608.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immune-system",
    "term_en": "Immune System",
    "term_ar": "جهاز مناعي",
    "synonyms": [
      "Immune Systems",
      "System, Immune",
      "Systems, Immune"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The body's defense mechanism against foreign organisms or substances and deviant native cells. It includes the humoral immune response and the cell-mediated response and consists of a complex of interrelated cellular, molecular, and genetic components.",
    "arabic_definition": "الجهاز المناعي هو شبكة من العمليات الحيوية التي تحمي الكائن الحي من الأمراض. يكتشف ويستجيب لمجموعة واسعة من مُسببات الأمراض، من الفيروسات إلى الديدان الطفيلية، وكذلك الخلايا السرطانية، ويميزها عن الأنسجة السليمة للكائن الحي. (Immune System)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007107.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thymus-gland",
    "term_en": "Thymus Gland",
    "term_ar": "غدة زعترية",
    "synonyms": [
      "Glands, Thymus",
      "Gland, Thymus",
      "Thymus Glands",
      "Thymus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A single, unpaired primary lymphoid organ situated in the MEDIASTINUM, extending superiorly into the neck to the lower edge of the THYROID GLAND and inferiorly to the fourth costal cartilage. It is necessary for normal development of immunologic function early in life. By puberty, it begins to involute and much of the tissue is replaced by fat.",
    "arabic_definition": "الغدة الزعترية أو الغدة السعترية أو غدة التوتة أو الغدة التيموسية (الإنجليزية: Thymus) هي غدة صماء تقع على القصبة الهوائية أعلى القلب خلف عظمة القص، تكون كبيرة لدى الأطفال وتستمر في الضمور طوال سن المراهقة لان حجمها يتناقص عندما تبدأ الغدد التناسلية بالنضج والإفراز، تفرز هذه الغدة هرمون ثيموسين Thymosin الذي ينظم بناء المناعة في الجسم ويساعد على إنتاج الخلايا اللمفاوية ويشرف على تنظيم المناعة في الجسم. (Thymus Gland)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013950.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "basal-ganglia",
    "term_en": "Basal Ganglia",
    "term_ar": "عقد قاعدية",
    "synonyms": [
      "Ganglion, Basal",
      "Ganglia, Basal",
      "Basal Nuclei",
      "Nuclei, Basal",
      "Basal Nuclear Complex",
      "Basal Nuclear Complices",
      "Nuclear Complex, Basal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Large subcortical nuclear masses derived from the telencephalon and located in the basal regions of the cerebral hemispheres.",
    "arabic_definition": "العقد القاعدية (الإنجليزية: Basal Ganglia) هي مجموعة من النوى تحت القشرية، مختلفة المنشأ، الموجودة في دماغ الفقاريات. توجد العديد من الاختلافات لدى الإنسان وغيره من الرئيسيات، بشكل رئيسي في انقسام الكرة الشاحبة إلى منقطة داخلية وأخرى خارجية، وفي انقسام الجسم المخطط.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001479.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "limbic-system",
    "term_en": "Limbic System",
    "term_ar": "جهاز نطاقي",
    "synonyms": [
      "Limbic Systems",
      "System, Limbic",
      "Systems, Limbic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A set of forebrain structures common to all mammals that is defined functionally and anatomically. It is implicated in the higher integration of visceral, olfactory, and somatic information as well as homeostatic responses including fundamental survival behaviors (feeding, mating, emotion). For most authors, it includes the AMYGDALA; EPITHALAMUS; GYRUS CINGULI; hippocampal formation (see HIPPOCAMPUS); HYPOTHALAMUS; PARAHIPPOCAMPAL GYRUS; SEPTAL NUCLEI; anterior nuclear group of thalamus, and portions of the basal ganglia. (Parent, Carpenter's Human Neuroanatomy, 9th ed, p744; NeuroNames, http://rprcsgi.rprc.washington.edu/neuronames/index.html (September 2, 1998)).",
    "arabic_definition": "الجهاز الحافي أو الجهاز النطاقي أو الجهاز الحُوفِيّ أو الجهاز الطرفي (الإنجليزية: Limbic System) اسمه مشتق من الكلمة اللاتينية (Limbus) ومعناها (دائرة). ولأهميته الوظيفية شبه المستقلة، يعتبر علماء التشريح هذه المنطقة بمثابة فص خامس قائم بذاته في المخ، ويُسمونه الفص الحوفي (Limbic Lobe)، وهو يقع في مركز كل من النصفين الكرويين، ويكون ظاهراً على السطح الداخلي لهما.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008032.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vas-deferens",
    "term_en": "Vas Deferens",
    "term_ar": "أسهر",
    "synonyms": [
      "Deferens, Vas",
      "Ductus Deferens",
      "Deferens, Ductus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The excretory duct of the testes that carries SPERMATOZOA. It rises from the SCROTUM and joins the SEMINAL VESICLES to form the ejaculatory duct.",
    "arabic_definition": "الأسْهَر (اللاتينية: vas deferens) هو جزء من الجهاز التناسلي الذكري وهو مسؤول عن نقل الحيوانات المنوية من البربخ وحتى القناة الدافقة. يوجد وعائين للنقل طول كل منهما حوالي 30 سم محاطة بعضلات ملساء.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014649.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "corpus-luteum",
    "term_en": "Corpus Luteum",
    "term_ar": "جسم أصفر",
    "synonyms": [
      "Corpora Lutea",
      "Lutea, Corpora"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The yellow body derived from the ruptured OVARIAN FOLLICLE after OVULATION. The process of corpus luteum formation, LUTEINIZATION, is regulated by LUTEINIZING HORMONE.",
    "arabic_definition": "يقع الجسم الأصفر (الاسم العلمي: Corpus luteum) في مبيض الأنثى البالغة حيث أن كل خلية من أمهات البيض في المبيض عندما تنقسم كي تعطي بويضة تنقسم عدة انقسامات وفي النهاية تعطي بويضة وجسماً أصفراً وعدد اثنان أجسام قطبية (خلايا ضامرة). وظيفة الجسم الأصفر هو إفراز هرمونات في حالة حدوث الحمل لوقف التبويض، وإذا لم يحدث الحمل فإنه يضمر وتخرج البويضة و بطانة الرحم المعدة للحمل في ما يعرف بالدورة الشهرية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003338.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aqueous-humor",
    "term_en": "Aqueous Humor",
    "term_ar": "خلط مائي",
    "synonyms": [
      "Aqueous Humors",
      "Humor, Aqueous",
      "Humors, Aqueous",
      "Intraocular Fluid",
      "Fluid, Intraocular",
      "Fluids, Intraocular",
      "Intraocular Fluids",
      "Aqueous Flare"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The clear, watery fluid which fills the anterior and posterior chambers of the eye. It has a refractive index lower than the crystalline lens, which it surrounds, and is involved in the metabolism of the cornea and the crystalline lens. (Cline et al., Dictionary of Visual Science, 4th ed, p319)",
    "arabic_definition": "الرُّطُوبَة المَائِيَّة أو الخلط المائي (الإنجليزية: Aqueous humour) هو سائل شفاف مائي يشبه البلازما، ولكنه يحوي تركيزات أقل من البروتين، ويتم إفرازه عن طريق ظهارة الجسم الهدبي الذي يدعم العدسة، ويجد في غرفة العين الأمامية والخلفية، ويمر الضوء خلاله في طريقه إلى شبكية العين. ومن شأن الزيادة في حجم الخلط المائي أن تسبب زيادة في ضغط العين، مما يؤدي إلى ما يعرف باسم الماء الأزرق. (Aqueous Humor)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001082.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastric-acid",
    "term_en": "Gastric Acid",
    "term_ar": "حمض معدي",
    "synonyms": [
      "Acids, Gastric",
      "Gastric Acids",
      "Hydrochloric Acid, Gastric",
      "Acids, Gastric Hydrochloric",
      "Gastric Hydrochloric Acid",
      "Gastric Hydrochloric Acids",
      "Hydrochloric Acids, Gastric"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hydrochloric acid present in GASTRIC JUICE.",
    "arabic_definition": "الحمض المعدي أو العصارة المعدية (الإنجليزية: gastric secretion) هو ذلك الحمض الذي يُفرَز داخل تجويف المعدة من غدد في جدارها، وتحديدًا من خلايا تسمى الخلايا الجدارية (الإنجليزية: parietal cells) أو الخلايا المفرزة للحمض (الإنجليزية: oxyntic cells)؛ للمساعدة في هضم الطعام، وهو يتكون من حمض الهيدروكلوريك. وإن كان مصطلح «حمض معدي» يدل على المكون الحمضي في عصارة المعدة إلا أنه أحيانًا قد يدل على العصارة نفسها؛ لأنه من مكوناتها الرئيسة. (Gastric Acid)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005744.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "celiac-artery",
    "term_en": "Celiac Artery",
    "term_ar": "شريان بطني",
    "synonyms": [
      "Arteries, Celiac",
      "Artery, Celiac",
      "Celiac Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The arterial trunk that arises from the abdominal aorta and after a short course divides into the left gastric, common hepatic and splenic arteries.",
    "arabic_definition": "الشريان البطني أو الجذع البطني أو شريان مجوف (الإنجليزية: Celiac trunk) هو أكبر فرع من الأبهر البطني. هو المسؤول عن إمداد الدم الغني بالأكسجين إلى المعدة والطحال والكبد والمريء، وكذلك أجزاء من البنكرياس والإثني عشر . (Celiac Artery)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002445.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ulnar-artery",
    "term_en": "Ulnar Artery",
    "term_ar": "شريان زندي",
    "synonyms": [
      "Arteries, Ulnar",
      "Artery, Ulnar",
      "Ulnar Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The larger of the two terminal branches of the brachial artery, beginning about one centimeter distal to the bend of the elbow. Like the RADIAL ARTERY, its branches may be divided into three groups corresponding to their locations in the forearm, wrist, and hand.",
    "arabic_definition": "يعتبر الشريان الزندي من الشرايين الرئيسية من الطرف العلوي في جسم الإنسان. والذي يمتد من الشريان العضدي مروراً بالجهة الداخلية للساعد ويتفرع على مستوى راحة اليد. (Ulnar Artery)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017535.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "axillary-vein",
    "term_en": "Axillary Vein",
    "term_ar": "وريد إبطي",
    "synonyms": [
      "Axillary Veins",
      "Vein, Axillary",
      "Veins, Axillary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The venous trunk of the upper limb; a continuation of the basilar and brachial veins running from the lower border of the teres major muscle to the outer border of the first rib where it becomes the subclavian vein.",
    "arabic_definition": "الوريد الإبطي أو عرق تحث الضلع هو وعاء دموي كبير، يقوم بنقل الدم من الجزء الوحشي للصدر، والإبط، والأطراف العلوية إلى القلب. ويوجد في الجسم وريدان إبطيان، واحد في كل جانب من الجسم. (Axillary Vein)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001367.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "femoral-nerve",
    "term_en": "Femoral Nerve",
    "term_ar": "عصب فخذي",
    "synonyms": [
      "Femoral Nerves",
      "Nerve, Femoral",
      "Nerves, Femoral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nerve originating in the lumbar spinal cord (usually L2 to L4) and traveling through the lumbar plexus to provide motor innervation to extensors of the thigh and sensory innervation to parts of the thigh, lower leg, and foot, and to the hip and knee joints.",
    "arabic_definition": "يعتبر العصب الفخذي من أطول أعصاب الطرف السفلي، ويدخل عبر العضلة القطنية الكبيرة، وبعدها يصل بين العضلة الحرقفية واللفافة الحرقفية، و يمر من تحت الرباط الأربي مع الوريد الفخذي والشريان الفخذي. (Femoral Nerve)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005267.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trapezium-bone",
    "term_en": "Trapezium Bone",
    "term_ar": "عظم مربعي",
    "synonyms": [
      "Bones, Trapezium",
      "Bone, Trapezium",
      "Trapezium Bones",
      "Os Trapezium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A carpal bone adjacent to the TRAPEZOID BONE.",
    "arabic_definition": "العظم المربعي هو عظم متصل بمشط اليد ويرتبط به العظم السنعي الأول وهو إحدى عظام الصف الثاني من عظام الرسغ والأول من جهة الإبهام. (Trapezium Bone)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D051222.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "achilles-tendon",
    "term_en": "Achilles Tendon",
    "term_ar": "وتر أخيل",
    "synonyms": [
      "Tendon, Achilles",
      "Tendo Calcaneus",
      "Calcaneal Tendon",
      "Calcaneal Tendons",
      "Tendon, Calcaneal",
      "Tendons, Calcaneal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tendon that connects the muscles in the back of the calf to the HEEL BONE.",
    "arabic_definition": "العُرْقُوب أو الوَتَر العَقِبِيّ أو وتر أخيل أو وتر العُرقوب أو وَتَرَة العُرْقُوب (الإنجليزية: Achilles tendon) هو وتر يوجد في مؤخرة الساق، وتتصل به كل من العضلة الأخمصية والعضلة التوأمية الساقية (عضلة بطن الساق) لتندغما من خلاله في عظمة العقب.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000125.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adrenal-medulla",
    "term_en": "Adrenal Medulla",
    "term_ar": "لب الغدة الكظرية",
    "synonyms": [
      "Adrenal Medullas",
      "Medulla, Adrenal",
      "Medullas, Adrenal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inner portion of the adrenal gland. Derived from ECTODERM, adrenal medulla consists mainly of CHROMAFFIN CELLS that produces and stores a number of NEUROTRANSMITTERS, mainly adrenaline (EPINEPHRINE) and NOREPINEPHRINE. The activity of the adrenal medulla is regulated by the SYMPATHETIC NERVOUS SYSTEM.",
    "arabic_definition": "نخاع الغدة الكظرية أو كما يُعرف بـ (لب الغدة الكظرية) هو جزء من الغدة الكظرية. ويقع في منتصف الغدة، وتحيط به القشرة الكظرية. (Adrenal Medulla)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000313.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synovial-fluid",
    "term_en": "Synovial Fluid",
    "term_ar": "سائل زلالي",
    "synonyms": [
      "Fluids, Synovial",
      "Fluid, Synovial",
      "Synovial Fluids",
      "Synovia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The clear, viscous fluid secreted by the SYNOVIAL MEMBRANE. It contains mucin, albumin, fat, and mineral salts and serves to lubricate joints.",
    "arabic_definition": "يوجد السائل الزلالي أو السائل المزلق بين طرفي العظام في فراغ داخل المفصل، وهو بمثابة الزيت الذي يقوم بتشحيم المفاصل وعند إصابة المفصل قد يمتلئ هذا الفراغ بارتشاح مائي أو دموي. وللسائل قوام يشبه زلال البيض ويفرز من الغشاء الزلالي. (Synovial Fluid)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013582.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trigger-points",
    "term_en": "Trigger Points",
    "term_ar": "نقاط الزناد الليفي العضلي",
    "synonyms": [
      "Points, Trigger",
      "Point, Trigger",
      "Trigger Point",
      "Trigger Area",
      "Areas, Trigger",
      "Area, Trigger",
      "Trigger Areas",
      "Myofascial trigger point"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Discrete spots in taut bands of muscle that produce local and referred pain when muscle bands are compressed.",
    "arabic_definition": "نقاط الزناد الليفي العضلي، (بالانجليزية :trigger points) والمعروفة أيضًا بنقاط الزناد أو العقد العضلية ، توصف بأنها أماكن تهيجية في العضلات الهيكلية، وهي مرتبطة بعقيدات واضحة في الأشرطة المشدودة للخلايا العضلية. وهي محل خلاف دائم بسبب وجود معطيات وحقائق محدودة لوصفها وفهمها.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D061028.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tensor-tympani",
    "term_en": "Tensor Tympani",
    "term_ar": "عضلة موترة الطبل",
    "synonyms": [
      "Tensor Tympanus",
      "Tympani, Tensor",
      "Tympanus, Tensor",
      "Tensor tympani muscle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A short muscle that arises from the pharyngotympanic tube (EUSTACHIAN TUBE) and inserts into the handle of the MALLEUS. This muscle pulls the handle medially thus controlling the tension and movement of TYMPANIC MEMBRANE.",
    "arabic_definition": "العضلة موترة الطبل أو العضلة الموترة للطبلة (الإنجليزية: Tensor tympani) هي عضلة موجودة في الأذن الوسطى، تتوضع للأعلى والجانب الوسطي من قناة استاكيوس ضمن قناة عظمية، ينعطف وترها بمقدار زاوية قائمة عند النتوء الملعقي ويصل لعنق عظم المطرقة، يتم تزويدها عصبيا بالفرع الفكي السفلي للعصب الخامس (ثلاثي التوائم)، وظيفتها توتير غشاء الطبل.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013719.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "axillary-artery",
    "term_en": "Axillary Artery",
    "term_ar": "شريان إبطي",
    "synonyms": [
      "Arteries, Axillary",
      "Artery, Axillary",
      "Axillary Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The continuation of the subclavian artery; it distributes over the upper limb, axilla, chest and shoulder.",
    "arabic_definition": "يعتبر الشريان الإبطي من أضخم الأوعية الدموية في جسم الإنسان. هو استمرار الشريان تحت الترقوة، ويبدأ عند الحافة الوحشية للضلع الأولى، ويتواصل عند الحافة السفلية المدورة الكبيرة لشريان العضدي، يتجاور الشريان الإبطي على طول مساره وعلى حزم الضفيرة العضدية وفروعها، ويتغمد معها بغمد نسيجي ضام يسمى؛ الغمد الإبطي. (Axillary Artery)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001366.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shoulder-joint",
    "term_en": "Shoulder Joint",
    "term_ar": "مفصل الكتف",
    "synonyms": [
      "Joint, Shoulder",
      "Joints, Shoulder",
      "Shoulder Joints",
      "Glenohumeral Joint",
      "Glenohumeral Joints",
      "Joint, Glenohumeral",
      "Joints, Glenohumeral",
      "Glenoid Labrum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The articulation between the head of the HUMERUS and the glenoid cavity of the SCAPULA.",
    "arabic_definition": "مفصل الكتف (الإنجليزية: shoulder joint) أو المفصل الحقاني العضدي (الإنجليزية: glenohumeral joint)، هو مفصل زلالي عديد المحاور من النوع الكروي الحُقّي. وهو يشمل الربط (التمفصل) بين التجويف الحقاني لعظم الكتف مع رأس عظم العضد.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012785.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coronary-sinus",
    "term_en": "Coronary Sinus",
    "term_ar": "جيب تاجي",
    "synonyms": [
      "Sinus, Coronary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A short vein that collects about two thirds of the venous blood from the MYOCARDIUM and drains into the RIGHT ATRIUM. Coronary sinus, normally located between the LEFT ATRIUM and LEFT VENTRICLE on the posterior surface of the heart, can serve as an anatomical reference for cardiac procedures.",
    "arabic_definition": "الجيب التاجي أو الجيب الإكليلي (الإنجليزية: Coronary sinus) هو مجموعة من الأوردة التي توحدت لتكوين وعاء كبير من أجل تجميع الدم من عضلة القلب. يعمل الجيب التاجي على إيصال الدم غير المؤكسج إلى الأذين الأيمن كما يفعل الوريد الأجوف العلوي والوريد الأجوف السفلي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054326.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adrenal-glands",
    "term_en": "Adrenal Glands",
    "term_ar": "غدة كظرية",
    "synonyms": [
      "Adrenal Gland",
      "Gland, Adrenal",
      "Glands, Adrenal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pair of glands located at the cranial pole of each of the two KIDNEYS. Each adrenal gland is composed of two distinct endocrine tissues with separate embryonic origins, the ADRENAL CORTEX producing STEROIDS and the ADRENAL MEDULLA producing NEUROTRANSMITTERS.",
    "arabic_definition": "الكُظْر أو الغدة الكُظْرية أو الغدة فوق الكُلوية غدة صمَّاءُ صغيرة، وهما غدتان فوق الكُليتين، تفرزان هرموناتٍ: كالأدرينالين، والسترويدات، كالألدُسترون، والكُرتيزول.، لكل منهما قشرة (خارجية) تنتج الهرمونات السترويدية، ولب (داخلي). والغدة الكُظرية ثلاث مناطقَ، هي من الداخل إلى الخارج المناطق: الكبيبية، والحزمية، والشبكية. (Adrenal Glands)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000311.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nervous-system",
    "term_en": "Nervous System",
    "term_ar": "جهاز عصبي",
    "synonyms": [
      "Nervous Systems",
      "System, Nervous",
      "Systems, Nervous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The entire nerve apparatus, composed of a central part, the brain and spinal cord, and a peripheral part, the cranial and spinal nerves, autonomic ganglia, and plexuses. (Stedman, 26th ed)",
    "arabic_definition": "الجهاز العصبي ويدعى أيضاً الجملة العصبية هو أهم الأجهزة التي تميز المملكة الحيوانية. يشاهد عند كل الكائنات الحية ابتداءً من وحيدات الخلايا وحتى الثدييات حيث يكون مؤلفاً من دارات بسيطة بين مجموعات صغيرة من خلايا عصبية عند وحيدات الخلايا، ويزداد تعقيداً كلما صعدنا في سلم التطور ليصل إلى أقصى درجات التعقيد والكفاءة عند الإنسان. (Nervous System)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009420.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cranial-nerves",
    "term_en": "Cranial Nerves",
    "term_ar": "أعصاب قحفية",
    "synonyms": [
      "Cranial Nerve",
      "Nerve, Cranial",
      "Nerves, Cranial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Twelve pairs of nerves that carry general afferent, visceral afferent, special afferent, somatic efferent, and autonomic efferent fibers.",
    "arabic_definition": "الأعصَابُ القَحفِيَّة هي الأعصاب التي تنشأ مباشرة من الدماغ (بما في ذلك جذع الدماغ)، على النقيض من الأعصاب الشوكيّة (التي تنشأ من قطع الحبل الشوكي). 10 من أصل 12 عصباً تنشأ من جذع الدماغ. (Cranial Nerves)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003391.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "foramen-magnum",
    "term_en": "Foramen Magnum",
    "term_ar": "ثقبة عظمى",
    "synonyms": [
      "Foramen Magnums",
      "Magnum, Foramen",
      "Magnums, Foramen"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The large hole at the base of the skull through which the SPINAL CORD passes.",
    "arabic_definition": "الثُقبَةُ العُظمَى (الإنجليزّية: Foramen magnum) فتحة كبيرة بيضويّة (ثقبة) في العظم القذاليّ في جمجمة البشر وعدة حيوانات أُخرى. وتُعتبر إحدى فتحات دائريّة أو بيضويّة (ثُقب) عديدة في قاعدة الجمجمة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005539.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "occipital-bone",
    "term_en": "Occipital Bone",
    "term_ar": "عظم قذالي",
    "synonyms": [
      "Bone, Occipital",
      "Bones, Occipital",
      "Occipital Bones",
      "Basilar Bone",
      "Basilar Bones",
      "Bone, Basilar",
      "Bones, Basilar"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Part of the back and base of the CRANIUM that encloses the FORAMEN MAGNUM.",
    "arabic_definition": "العظم القذالي (الإنجليزية: Occipital bone) هو أحد العظام الجلدية للقحف العظام وهو العظم الرئيسي للقذال (الجزء الخلفي والسفلي من الجمجمة). يأخذ العظم القذالي شكل شبه منحرف منحني على نفسه مثل طبق ضحل.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009777.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "olfactory-bulb",
    "term_en": "Olfactory Bulb",
    "term_ar": "بصلة شمية",
    "synonyms": [
      "Bulb, Olfactory",
      "Bulbs, Olfactory",
      "Olfactory Bulbs",
      "Bulbus Olfactorius",
      "Olfactorius, Bulbus",
      "Main Olfactory Bulb",
      "Bulb, Main Olfactory",
      "Bulbs, Main Olfactory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Ovoid body resting on the CRIBRIFORM PLATE of the ethmoid bone where the OLFACTORY NERVE terminates. The olfactory bulb contains several types of nerve cells including the mitral cells, on whose DENDRITES the olfactory nerve synapses, forming the olfactory glomeruli. The accessory olfactory bulb, which receives the projection from the VOMERONASAL ORGAN via the vomeronasal nerve, is also included here.",
    "arabic_definition": "البصلة الشمية (الإنجليزية: Olfactory bulb) هي بنية عصبية موجودة في الدماغ الأمامي في الفقاريات وترتبط في الشم، المعنية بإدراك روائح. وتقوم بإرسال المعلومات الشمية ليتم معالجتها بشكل أكبر في اللوزة، والقشرة الجبهية الحجاجية وقرن آمون حيث تلعب هذه المعلومات الشمية دورا في العاطفة والذاكرة والتعلم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009830.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "occipital-lobe",
    "term_en": "Occipital Lobe",
    "term_ar": "فص قذالي",
    "synonyms": [
      "Lobe, Occipital",
      "Lobes, Occipital",
      "Occipital Lobes",
      "Occipital Region",
      "Occipital Regions",
      "Region, Occipital",
      "Regions, Occipital",
      "Lunate Sulcus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Posterior portion of the CEREBRAL HEMISPHERES responsible for processing visual sensory information. It is located posterior to the parieto-occipital sulcus and extends to the preoccipital notch.",
    "arabic_definition": "الفص القذالي هو أحد الفصوص الأربعة الرئيسية للقشرة الدماغية في دماغ الثدييات. الاسم مشتق من موقعه ضمن مؤخرة الرأس، من اللاتينية «أوب» بمعنى خلف، و«كبوت» بمعنى رأس. (Occipital Lobe)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009778.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "choroid-plexus",
    "term_en": "Choroid Plexus",
    "term_ar": "ضفيرة مشيموية",
    "synonyms": [
      "Plexus, Choroid",
      "Chorioid Plexus",
      "Plexus, Chorioid",
      "Plexus Choroideus",
      "Choroideus, Plexus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A villous structure of tangled masses of BLOOD VESSELS contained within the third, lateral, and fourth ventricles of the BRAIN. It regulates part of the production and composition of CEREBROSPINAL FLUID.",
    "arabic_definition": "الضفيرة المشيموية (الإنجليزية: Choroid plexus) هي ضفيرة من الخلايا التي تنتج السائل الدماغي الشوكي في بطينينات الدماغ، وتكون حاجز الدم-السائل الدماغي الشوكي",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002831.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "douglas-pouch",
    "term_en": "Douglas' Pouch",
    "term_ar": "ردبة دوغلاس",
    "synonyms": [
      "Pouch, Douglas'",
      "Sac of Douglas",
      "Douglas Sac",
      "Rectouterine Pouch",
      "Pouch, Rectouterine",
      "Cul-de-Sac of Douglas",
      "Douglas Cul-de-Sac",
      "Cul-de-Sac, Douglas'"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sac or recess formed by a fold of the peritoneum.",
    "arabic_definition": "ردبة دوغلس (الإنجليزية: Douglas cul-de-sac) هو أخفض منطقة لتجويف البريتوان عند النساء في وضعية الوقوف. يمتد بين المستقيم والجدار الخلفي للرحم، وهو موجود عند الإناث حصراً. (Douglas' Pouch)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004312.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "basilar-artery",
    "term_en": "Basilar Artery",
    "term_ar": "شريان قاعدي",
    "synonyms": [
      "Arteries, Basilar",
      "Artery, Basilar",
      "Basilar Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The artery formed by the union of the right and left vertebral arteries; it runs from the lower to the upper border of the pons, where it bifurcates into the two posterior cerebral arteries.",
    "arabic_definition": "الشريان القاعدي (الإنجليزية: Basilar artery) هو شريان يغذي الدماغ بالدم الغني بالأكسجين. الشريانان الفقريان والشريان القاعدي يكونان ما يسمى بالجهاز الفقري القاعدي الذي يغذي الجزء الأسفل من دائرة ويليس ويتفاغر مع الأوعية الدموية في الجزء الأمامي من دائرة ويليس من الشريانين السباتيين الباطنين.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001488.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pituitary-gland",
    "term_en": "Pituitary Gland",
    "term_ar": "غدة نخامية",
    "synonyms": [
      "Gland, Pituitary",
      "Glands, Pituitary",
      "Pituitary Glands",
      "Hypophysis",
      "Hypophyses",
      "Hypophysis Cerebri",
      "Cerebri, Hypophysis",
      "Cerebrus, Hypophysis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A small, unpaired gland situated in the SELLA TURCICA. It is connected to the HYPOTHALAMUS by a short stalk which is called the INFUNDIBULUM.",
    "arabic_definition": "الغدة النُّخَامية غدة صماءُ، بحجم حبة الحمص تقريبًا، تزن في المتوسط 0.5 جرام عند الإنسان. وتسمى أحيانًا بسيِّدة الغدد لتحكمها في إفرازات سائر غدد الجسم. (Pituitary Gland)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010902.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerebral-cortex",
    "term_en": "Cerebral Cortex",
    "term_ar": "قشرة مخية",
    "synonyms": [
      "Cerebral Cortices",
      "Cortex, Cerebral",
      "Cortex Cerebri",
      "Cortex Cerebrus",
      "Cortical Plate",
      "Cortical Plates",
      "Plate, Cortical",
      "Allocortex"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The thin layer of GRAY MATTER on the surface of the CEREBRAL HEMISPHERES that develops from the TELENCEPHALON and folds into gyri and sulci. It reaches its highest development in humans and is responsible for intellectual faculties and higher mental functions.",
    "arabic_definition": "القشرة المخية هي الطبقة السطحية من نصف كرة المخ لدى الثدييات. والقشرة المخية لدى الأنسان تتكون من المادة الرمادية والتي يتألف معظمها من العصبونات الهرمية مرتـّبة في 6 طبقات فيما يعرف القشرة الجديدة. (Cerebral Cortex)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002540.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "large-intestine",
    "term_en": "Large Intestine",
    "term_ar": "أمعاء غليظة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A segment of the LOWER GASTROINTESTINAL TRACT that includes the CECUM; the COLON; and the RECTUM.",
    "arabic_definition": "الأمعاء الغليظة أو القولون هي الجزء الأخير من الجهاز الهضمي في الفقاريات. وظيفتها الرئيسية هي امتصاص الماء من المتبقى من المواد الصلبة ثم تمرير الفضلات الزائدة إلى خارج الجسم. (Large Intestine)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007420.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucous-membrane",
    "term_en": "Mucous Membrane",
    "term_ar": "غشاء مخاطي",
    "synonyms": [
      "Membrane, Mucous",
      "Membranes, Mucous",
      "Mucosa",
      "Mucosal Tissue",
      "Mucosal Tissues",
      "Tissue, Mucosal",
      "Tissues, Mucosal",
      "Mucous Membranes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An EPITHELIUM with MUCUS-secreting cells, such as GOBLET CELLS. It forms the lining of many body cavities, such as the DIGESTIVE TRACT, the RESPIRATORY TRACT, and the reproductive tract. Mucosa, rich in blood and lymph vessels, comprises an inner epithelium, a middle layer (lamina propria) of loose CONNECTIVE TISSUE, and an outer layer (muscularis mucosae) of SMOOTH MUSCLE CELLS that separates the mucosa from submucosa.",
    "arabic_definition": "الغِشَاءُ المُخَاطِيُّ أو المُخَاطِيَّةُ، هي طبقة نسيجية تغطي جميع تجويفات الجسم المنفتحة على الخارج، المتصلة بالجلد. ملتحِمة العين عبارة كذلك عن نسيج مخاطي. (Mucous Membrane)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009092.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphatic-system",
    "term_en": "Lymphatic System",
    "term_ar": "جهاز لمفي",
    "synonyms": [
      "Lymphatic Systems"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A system of organs and tissues that process and transport immune cells and LYMPH.",
    "arabic_definition": "الجهاز اللمفي أو الجهاز اللنفي أو الجهاز البلغمي هو جهاز دوراني يجري فيه سائل شفاف يسمى سائل اللنف يميل لونه إلى الصفرة. على العكس من الجهاز الدوري الذي هو نظام مغلق، فإن الجهاز اللمفاوي يعتبر جهاز مفتوح. (Lymphatic System)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008208.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "small-intestine",
    "term_en": "Small Intestine",
    "term_ar": "أمعاء دقيقة",
    "synonyms": [
      "Intestines, Small",
      "Small Intestines"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The portion of the GASTROINTESTINAL TRACT between the PYLORUS of the STOMACH and the ILEOCECAL VALVE of the LARGE INTESTINE. It is divisible into three portions: the DUODENUM, the JEJUNUM, and the ILEUM.",
    "arabic_definition": "الأمعاء الدقيقة هي عضو في الجهاز الهضمي حيث يحدث معظم امتصاص العناصر الغذائية من الطعام. تقع بين المعدة والأمعاء الغليظة، وتتلقى العصارة الصفراوية والبنكرياسية عبر قناة البنكرياس للمساعدة في الهضم. (Small Intestine)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007421.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salivary-glands",
    "term_en": "Salivary Glands",
    "term_ar": "غدة لعابية",
    "synonyms": [
      "Gland, Salivary",
      "Glands, Salivary",
      "Salivary Gland"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Glands that secrete SALIVA in the MOUTH. There are three pairs of salivary glands (PAROTID GLAND; SUBLINGUAL GLAND; SUBMANDIBULAR GLAND).",
    "arabic_definition": "الغدد اللعابية هي غدد قنوية في الثدييات تفرز اللعاب وهي تكوينات صلبة تتكون من ملايين الخلايا الإفرازية وتسري بين هذه الخلايا قنوات رقيقة تجمع اللعاب وتحمله وتوجهه إلى قناة مفردة تقوم بدورها بحمل اللعاب إلى الفم. تعتبر الغدتان النكفيتان أكبر الغدد اللعابية وهما توجدان جانب الفك الأسفل أمام الأذن ويسري اللعاب من كل غدة نكفية إلى الفم في وعاء صغير يسمى ستنسن. (Salivary Glands)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012469.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brachial-artery",
    "term_en": "Brachial Artery",
    "term_ar": "شريان عضدي",
    "synonyms": [
      "Arteries, Brachial",
      "Artery, Brachial",
      "Brachial Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The continuation of the axillary artery; it branches into the radial and ulnar arteries.",
    "arabic_definition": "الشريان العضدي ويعتبر من أكبر الأوعية الدموية من الطرف العلوي من جسم الإنسان. ويبدأ من الشريان الإبطي ويتفرع على مستوى الكوع إلى : الشريان الكعبري، الشريان الزندي. (Brachial Artery)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001916.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brachial-plexus",
    "term_en": "Brachial Plexus",
    "term_ar": "ضفيرة عضدية",
    "synonyms": [
      "Plexus, Brachial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The large network of nerve fibers which distributes the innervation of the upper extremity. The brachial plexus extends from the neck into the axilla. In humans, the nerves of the plexus usually originate from the lower cervical and the first thoracic spinal cord segments (C5-C8 and T1), but variations are not uncommon.",
    "arabic_definition": "الضفيرة العضدية (الإنجليزية: Brachial plexus) هي عبارة عن مجموعة من الأعصاب متداخلة مع بعضها البعض تعصب الطرف العلوي، تتوضع في العنق وفي الإبط. يتم تغذية الأطراف العلوية (الذراعان) والسفلية (الرجلان) عصبيا عن طريق تشكيلات من الأعصاب تعرف بالضفائر العصبية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001917.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eustachian-tube",
    "term_en": "Eustachian Tube",
    "term_ar": "قناة استاكيوس (النفير)",
    "synonyms": [
      "Eustachian Tubes",
      "Tube, Eustachian",
      "Tubes, Eustachian",
      "Pharyngotympanic Tube",
      "Pharyngotympanic Tubes",
      "Tube, Pharyngotympanic",
      "Tubes, Pharyngotympanic",
      "Auditory Tube"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A narrow passageway that connects the upper part of the throat to the TYMPANIC CAVITY.",
    "arabic_definition": "النفير أو قناة استاكيوس وتسمى أيضاً قناة أوستاكي أو بوق أوستاكي أو نفير أوستاش أو القناة السمعية (الإنجليزية: Eustachian tube) والاسم التشريحي هو الأنبوب البلعومي الطبلي (الإنجليزية: pharyngotympanic tube) وهي قناة تمتد من الأذن الوسطى إلى البلعوم الأنفي. يتكون ثلث القناة القريب من الأذن الوسطى من طبيعة عظمة، ويكون الثلثان المتبقيان من القناة من طبيعة غضروفية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005064.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "corpus-callosum",
    "term_en": "Corpus Callosum",
    "term_ar": "جسم ثفني",
    "synonyms": [
      "Callosum, Corpus",
      "Callosums, Corpus",
      "Corpus Callosums",
      "Interhemispheric Commissure",
      "Commissure, Interhemispheric",
      "Commissures, Interhemispheric",
      "Interhemispheric Commissures",
      "Neocortical Commissure"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Broad plate of dense myelinated fibers that reciprocally interconnect regions of the cortex in all lobes with corresponding regions of the opposite hemisphere. The corpus callosum is located deep in the longitudinal fissure.",
    "arabic_definition": "الجسم الثفني أو الصوار الثَفَني (الإنجليزية: Corpus Callosum) هو حزمة مسطحة واسعة من الألياف العصبية بيضاء اللون تحت القشرة في الشق الطولي للدماغ، تمتد عدة سنتيمترات من الأمام إلى الخلف، وهو أكبر هيكل من المادة البيضاء في الدماغ، ويتكون من ملايين الألياف العصبية التي تربط بين النصفين الكرويين الأيمن والأيسر في الدماغ ويسهل الإتصال بينهما، وتنتقل المعلومات بينهما على هيئة إشارات كهربائية، ولذلك أيضاً يُعرف باسم «المُقْرِن الأعظم». وهو أكبر بنية للمادة البيضاء في الدماغ، يحتوي على 200-250 مليون نتوءات محوارية عصبية مقابلة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003337.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pubic-symphysis",
    "term_en": "Pubic Symphysis",
    "term_ar": "ارتفاق عاني",
    "synonyms": [
      "Pubic Symphyses",
      "Symphyses, Pubic",
      "Symphysis, Pubic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A slightly movable cartilaginous joint which occurs between the pubic bones.",
    "arabic_definition": "الارتفاق العاني (الإنجليزية: Pubic symphysis) هو مفصل غضروفي يصل بين الشعبتين العلويتين لعظمي العانة الأيمن والأيسر. يتوضع ارتفاق العانة إلى الأمام من المثانة البولية وإلى الأعلى من الأعضاء التناسلية الظاهرة؛ عند النساء يكون أعلى الفرج، وعند الذكور يكون أعلى القضيب.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011631.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "purkinje-fibers",
    "term_en": "Purkinje Fibers",
    "term_ar": "ألياف بوركينجي",
    "synonyms": [
      "Purkinje Fiber",
      "Fiber, Purkinje",
      "Fibers, Purkinje"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Modified cardiac muscle fibers composing the terminal portion of the heart conduction system.",
    "arabic_definition": "ألياف بوركينجي أو الخضر بوركينجي (الإنجليزية: Purkinje fibers) (وتعرف أيضًا بنسيج بيركنجي والفروع تحت الشغاف) تقع في الجزء الداخلي لجدار البطينين. تحت طبقة الشغاف.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011690.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "caudate-nucleus",
    "term_en": "Caudate Nucleus",
    "term_ar": "نواة ذنبية",
    "synonyms": [
      "Nucleus, Caudate",
      "Caudatus",
      "Nucleus Caudatus",
      "Caudatus, Nucleus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Elongated gray mass of the neostriatum located adjacent to the lateral ventricle of the brain.",
    "arabic_definition": "النواة الذنبية أو النواة المذنبة (الإنجليزية: Caudate nucleus) أكبر العقد (الأنوية) القاعدية في الدماغ، تتألف من: رأس ضخم في الأمام يشكل الجدار الجانبي للقرن الأمامي للبطين الجانبي. جسم في الوسط يستقر فوق ووحشي المهاد، ويحد بينهما تلم يسمى التلم المهادي المخطط، ويسير فيه كل من الوريد المهادي المخطط والحزمة الانتهائية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002421.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sinoatrial-node",
    "term_en": "Sinoatrial Node",
    "term_ar": "عقدة جيبية أذينية",
    "synonyms": [
      "Node, Sinoatrial",
      "Nodes, Sinoatrial",
      "Sinoatrial Nodes",
      "Sino-Atrial Node",
      "Node, Sino-Atrial",
      "Nodes, Sino-Atrial",
      "Sino-Atrial Nodes",
      "Sinu-Atrial Node"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The small mass of modified cardiac muscle fibers located at the junction of the superior vena cava (VENA CAVA, SUPERIOR) and right atrium. Contraction impulses probably start in this node, spread over the atrium (HEART ATRIUM) and are then transmitted by the atrioventricular bundle (BUNDLE OF HIS) to the ventricle (HEART VENTRICLE).",
    "arabic_definition": "العقدة الجيبية الأذينية (الإنجليزية: Sinoatrial node أو SA node) هي النسيج المولد للنظم الجيبي أي المنظم لنبض القلب. هي مجموعة خلايا تقع في جدار الأذين الأيمن قرب مدخل الوريد الأجوف العلوي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012849.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-veins",
    "term_en": "Pulmonary Veins",
    "term_ar": "وريد رئوي",
    "synonyms": [
      "Pulmonary Vein",
      "Vein, Pulmonary",
      "Veins, Pulmonary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The veins that return the oxygenated blood from the lungs to the left atrium of the heart.",
    "arabic_definition": "الوريد الرئوي وعاء دموي في جهاز الدوران ينقل الدم من الرئتين إلى الأذين الأيسر في القلب. ولدى الإنسان أربع أوردة رئوية . (Pulmonary Veins)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011667.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-valve",
    "term_en": "Pulmonary Valve",
    "term_ar": "صمام رئوي",
    "synonyms": [
      "Pulmonary Valves",
      "Valve, Pulmonary",
      "Valves, Pulmonary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A valve situated at the entrance to the pulmonary trunk from the right ventricle.",
    "arabic_definition": "الصمام الرئوي (الإنجليزية: Pulmonary valve) هو صمام ثلاثي الشرف يفصل بين البطين الأيمن والجذع الرئوي، ويسمح للدم بالتدفق خارجاً من البطين الأيمن إلى الجذع الرئوي، وهو يفتح عند انقباض القلب، عندما يرتفع الضغط في البطينِ الأيمن فوق الضغط في الشريانِ الرئويِ، ليغلق عند نهاية الانقباضة ليمنع رجوع الدم إلى القلب. يُساهم إغلاق الصمامِ الرئويِ بي 2 من مكوّن صوت القلبِ الثانيِ (إس 2).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011664.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peyers-patches",
    "term_en": "Peyer's Patches",
    "term_ar": "لطخة باير",
    "synonyms": [
      "Patches, Peyer's",
      "Peyer Patches",
      "Peyers Patches",
      "Peyer's patch"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Lymphoid tissue on the mucosa of the small intestine.",
    "arabic_definition": "بُقَع باير (أو الجُرَيباتُ اللِّمْفِيَّةُ المُتَكَدِّسَة لباير)(الإنجليزية: Peyer's patch)هي عقد لمفاوية تحتوي على تجمعات صغيرة من الخلايا اليمفاوية، سُمّيت نسبة الى عالم التشريح السويسري يوهان كونراد باير الذي اكتشفها في القرن السابع عشر. وهي جزء مهم من الأنسجة اللمفاوية المرتبطة بالأمعاء والتي تقع عادًة لدى البشر في الجزء الأدنى من الأمعاء الدقيقة، خاصة في الصائم البعيد واللفائفي، ولكن يمكن أيضًا العثور عليها في الاثني عشر. (Peyer's Patches)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010581.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "subclavian-vein",
    "term_en": "Subclavian Vein",
    "term_ar": "وريد تحت ترقوة",
    "synonyms": [
      "Subclavian Veins",
      "Veins, Subclavian",
      "Vein, Subclavian"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The continuation of the axillary vein which follows the subclavian artery and then joins the internal jugular vein to form the brachiocephalic vein.",
    "arabic_definition": "الوريد تحت الترقوة أو الوريد تحت الترقوي (الإنجليزية: Subclavian vein) هو وريد كبير مزدوج، واحد على كلِّ جانبٍ من جانبي الجسم. قطره حوالي قطر إصبع الخنصر (الإصبع الأصغر).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013350.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "maxillary-sinus",
    "term_en": "Maxillary Sinus",
    "term_ar": "جيب فكي علوي",
    "synonyms": [
      "Sinus, Maxillary",
      "Antrum of Highmore",
      "Highmore Antrum",
      "Maxillary Antrum",
      "Antrum, Maxillary",
      "Maxillary Antrums",
      "Maxillary Ostium",
      "Maxillary Ostiums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The air space located in the body of the MAXILLARY BONE near each cheek. Each maxillary sinus communicates with the middle passage (meatus) of the NASAL CAVITY on the same side.",
    "arabic_definition": "الجيب الفكي العلوي أو الجيب الأنفي الفكي هرمي الشكل (الإنجليزية: maxillary sinus) هو أكبر الجيوب المجاورة للأنف.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008443.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "maxillary-nerve",
    "term_en": "Maxillary Nerve",
    "term_ar": "عصب فكي علوي",
    "synonyms": [
      "Maxillary Nerves",
      "Nerve, Maxillary",
      "Nerves, Maxillary",
      "Alveolar Nerve, Superior",
      "Alveolar Nerves, Superior",
      "Nerves, Superior Alveolar",
      "Nerve, Superior Alveolar",
      "Superior Alveolar Nerve"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The intermediate sensory division of the trigeminal (5th cranial) nerve. The maxillary nerve carries general afferents from the intermediate region of the face including the lower eyelid, nose and upper lip, the maxillary teeth, and parts of the dura.",
    "arabic_definition": "العصب الفكي العلوي (الإنجليزية: Maxillary nerve) هو أحد ثلاثة فروع للعصب القحفي الخامس (العصب ثلاثي التوائم) وهو عصب حسي. وهو يدخل القحف عبر الثقبة المدورة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008442.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fallopian-tubes",
    "term_en": "Fallopian Tubes",
    "term_ar": "قناة فالوب",
    "synonyms": [
      "Tube, Fallopian",
      "Tubes, Fallopian",
      "Uterine Salpinges",
      "Salpinx, Uterine",
      "Oviducts, Mammalian",
      "Mammalian Oviduct",
      "Mammalian Oviducts",
      "Oviduct, Mammalian"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pair of highly specialized canals extending from the UTERUS to its corresponding OVARY. They provide the means for OVUM transport from the ovaries and they are the site of the ovum's final maturation and FERTILIZATION. The fallopian tube consists of an interstitium, an isthmus, an ampulla, an infundibulum, and fimbriae. Its wall consists of three layers: serous, muscular, and an internal mucosal layer lined with both ciliated and secretory cells.",
    "arabic_definition": "قَنَاةُ فَالُوب أو قَنَاةُ الرَّحِمِ أو البُوقُ أو أنبوب التبويض أو البُوقُ الرَّحِمِيُّ (الإنجليزية: Fallopian tube) قناة زوجية -أي يوجد واحدة منها في كل جانب-، سميت باسمها نسبة إلى مكتشفها الإيطالي غابرييلي فالوبيو، الذي اشتهر باسمه اللاتيني فآلُّوْپْيُس. والقناة عبارة عن أنبوب يصل بين المبيض والرحم، يبدأ طرفه الواسع من جهة المبيض، حيث يحتوي هذا الطرف على أهداب تساعد على حركة البويضات إلى داخل القناة، بينما يفتح طرفه الضيق في الرحم من جهته العليا. (Fallopian Tubes)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005187.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endocrine-system",
    "term_en": "Endocrine System",
    "term_ar": "جهاز الغدد الصماء",
    "synonyms": [
      "Endocrine Systems",
      "System, Endocrine",
      "Systems, Endocrine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The system of glands that release their secretions (hormones) directly into the circulatory system. In addition to the ENDOCRINE GLANDS, included are the CHROMAFFIN SYSTEM and the NEUROSECRETORY SYSTEMS.",
    "arabic_definition": "جهاز الغدد الصماء (الإنجليزية: Endocrine system) عبارة عن جهاز متكامل من الغدد، كل منها تفرز أنواع مختلفة من الهرمونات التي تنتقل عبر الدم. يختلف جهاز الغدد الصم عن الغدد خارجية الإفراز التي بدورها تفرز موادها الكيميائية عبر قنوات.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004703.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "digestion",
    "term_en": "Digestion",
    "term_ar": "هضم",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process of breakdown of food for metabolism and use by the body.",
    "arabic_definition": "الهضم هو عمليات حيوية كيميائية وحركية لتحويل الطعام إلى مواد قابلة للامتصاص في الأمعاء من أجل استخدامها في بناء الأنسجة أو الحصول على الطاقة. تبدأ عملية الهضم عادة لدى الحيوانات في الفم بعملية المضغ حيث يُكسر الطعام ميكاينيكيا إلى جزيئات أصغر، ثم تعمل عليها إنزيمات اللعاب التي تفرزها غدد موجودة تحت اللسان لهضم الكربوهيدرات، يلي ذلك البلع عبر البلعوم ثم المريء حتى يصل الطعام إلى المعدة حيث تعمل العصارة المعدية على هضم بعض أنواع المواد الغذائية مثل البروتينات وتعديل التركيب الكيميائي لأنواع أخرى. (Digestion)",
    "specialty": "Physiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004063.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tricuspid-valve",
    "term_en": "Tricuspid Valve",
    "term_ar": "صمام ثلاثي الشرفات",
    "synonyms": [
      "Tricuspid Valves",
      "Valves, Tricuspid",
      "Valve, Tricuspid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The valve consisting of three cusps situated between the right atrium and right ventricle of the heart.",
    "arabic_definition": "الدسام ثلاثي الشرف أو الصمام ثلاثي الشرف (الإنجليزية: Tricuspid valve) هو الدسام الواقع بين الأذين الأيمن والبطين الأيمن. يحتوي الدسام ثلاثي الشرف على ثلاث شرف تتصل بثلاث عضلات حليمية بواسطة الحبال الوترية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "skeletal-muscle",
    "term_en": "Skeletal Muscle",
    "term_ar": "عضلة هيكلية",
    "synonyms": [
      "Muscles, Skeletal",
      "Skeletal Muscles",
      "Muscle, Voluntary",
      "Muscles, Voluntary",
      "Voluntary Muscle",
      "Voluntary Muscles",
      "Anterior Tibial Muscle",
      "Muscle, Anterior Tibial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A subtype of striated muscle, attached by TENDONS to the SKELETON. Skeletal muscles are innervated and their movement can be consciously controlled. They are also called voluntary muscles.",
    "arabic_definition": "العضلة الهيكلية كما تُعرف باسم العضلة المخططة (الإنجليزية: Skeletal muscle أو striated muscle أو striped muscle) هي المحرك الأساسي لجسم الإنسان وتشمل أغلب عضلات جسم الإنسان؛ فهي تشمل ما نسبته 40% من وزن الجسم، ويوجد في الجسم نحو 475 عضلة هيكلية مختلفة، ووظيفتها هي تحريك عظام الهيكل العظمي والتحكم في موضع كلٍ منها. تتصل العضلات بالعظام عن طريق الأوتار (tendons)، وتقسم كل عضلة -بحسب مكان ارتباطها بالعظمة- إلى قسمين رئيسيين: المنشأ، والمغرس.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018482.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "third-ventricle",
    "term_en": "Third Ventricle",
    "term_ar": "بطين ثالث",
    "synonyms": [
      "Third Ventricles",
      "Ventricles, Third",
      "Ventricle, Third",
      "3rd Ventricle",
      "3rd Ventricles",
      "Ventricle, 3rd",
      "Ventricles, 3rd"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A narrow cleft inferior to the CORPUS CALLOSUM, within the DIENCEPHALON, between the paired thalami. Its floor is formed by the HYPOTHALAMUS, its anterior wall by the lamina terminalis, and its roof by EPENDYMA. It communicates with the FOURTH VENTRICLE by the CEREBRAL AQUEDUCT, and with the LATERAL VENTRICLES by the interventricular foramina.",
    "arabic_definition": "البطين الثالث هو أحد أربعة تجاويف متصلة معا ومملوءة بالسائل النخاعي لتؤلف الجهاز البطيني للمخ. يمثل البطين الثالث شق وسطي بين المهادين. (Third Ventricle)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020542.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "striated-muscle",
    "term_en": "Striated Muscle",
    "term_ar": "نسيج عضلي مخطط",
    "synonyms": [
      "Muscles, Striated",
      "Striated Muscles",
      "Striated muscle tissue"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of two types of muscle in the body, characterized by the array of bands observed under microscope. Striated muscles can be divided into two subtypes: the CARDIAC MUSCLE and the SKELETAL MUSCLE.",
    "arabic_definition": "النسيج العضلي المخطط (الإنجليزية: Striated muscle tissue)هو نسيج عضلي يتميز باحتوائه على وحدات وظيفية تُدعى الساكرومير، على عكس الأنسجة العضلية الملساء التي تفتقرهم. وجود الساكرومير يظهر على شكل سلسلة من الأشرطة في الألياف العضلية، والتي بدورها تكون مسؤولة عن الشكل المخطط للنسيج في الصور المجهرية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054792.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "haversian-system",
    "term_en": "Haversian System",
    "term_ar": "وحدة العظم",
    "synonyms": [
      "Osteon",
      "Osteons",
      "Nutrient Canals",
      "Canal, Nutrient",
      "Canals, Nutrient",
      "Nutrient Canal",
      "Haversian Canals",
      "Canals, Haversian"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A circular structural unit of bone tissue. It consists of a central hole, the Haversian canal through which blood vessels run, surrounded by concentric rings, called lamellae.",
    "arabic_definition": "وحدة العظم المنظومة الهافرسية أو العظمون أو نظام هافيرس (يسمي نسبة لكلوبتون هافيرس) هو الوحدة الوظيفية الأساسية لأغلب العظم المضغوط. العظمون عبارة عن هيكل اسطواني خشن حيث يبلغ عدة ملليمترات في الطول وحوالي 0.2 مم في القطر. (Haversian System)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006253.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "basal-forebrain",
    "term_en": "Basal Forebrain",
    "term_ar": "دماغ أمامي قاعدي",
    "synonyms": [
      "Basal Forebrains",
      "Forebrain, Basal",
      "Forebrains, Basal",
      "Basal Forebrain Area",
      "Area, Basal Forebrain",
      "Areas, Basal Forebrain",
      "Basal Forebrain Areas",
      "Forebrain Area, Basal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The region of the telencephalon located rostral and ventral to the STRIATUM comprising AMYGDALA; SEPTAL NUCLEI; SUBSTANTIA INNOMINATA and ventral pallidum.",
    "arabic_definition": "تقع أجسام الدماغ الأمامي القاعدي في الدماغ الأمامي، أمام الجسم المخطط نحو الأسفل قليلاً. تضم هذه الأجسام العقد القاعدية الأمامية (بما فيها النواة المتكئة والشاحبة البطنية) والنويات القاعدية وحزمة بوركا القطرية والمادة غير المسماة والنواة الحاجزية تكمن أهمية هذه الأجسام في كونها موضعاً هاماً لإنتاج الأسيتيل كولين، الذي ينتشر بعدها على عموم الدماغ. (Basal Forebrain)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D066187.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "medulla-oblongata",
    "term_en": "Medulla Oblongata",
    "term_ar": "نخاع مستطيل",
    "synonyms": [
      "Medulla Oblongatas",
      "Accessory Cuneate Nucleus",
      "Cuneate Nucleus, Accessory",
      "Nucleus, Accessory Cuneate",
      "External Cuneate Nucleus",
      "Cuneate Nucleus, External",
      "Nucleus, External Cuneate",
      "Lateral Cuneate Nucleus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The lower portion of the BRAIN STEM. It is inferior to the PONS and anterior to the CEREBELLUM. Medulla oblongata serves as a relay station between the brain and the spinal cord, and contains centers for regulating respiratory, vasomotor, cardiac, and reflex activities.",
    "arabic_definition": "النخاع المستطيل (اللاتينية: Medulla oblongata) أو البصلة السيسائية هو أخفض جزء عند دماغ الفقاريات، يستمر بالنخاع الشوكي. يحتوي على مراكز التحكم بالقلب والتنفس والتقيؤ والحركة، يتعامل مع الحركات الذاتية غير الإرادية، مثل: التنفس وسرعة القلب وضغط الدم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008526.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "connective-tissue",
    "term_en": "Connective Tissue",
    "term_ar": "نسيج ضام",
    "synonyms": [
      "Connective Tissues",
      "Tissue, Connective",
      "Tissues, Connective"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tissue that supports and binds other tissues. It consists of CONNECTIVE TISSUE CELLS embedded in a large amount of EXTRACELLULAR MATRIX.",
    "arabic_definition": "النسيج الضام (الإنجليزية: Connective Tissue) هو أحد أنواع الأنسجة الأربعة الرئيسية في جسم الإنسان، والتي تقوم بدعم أو ربط أو فصل أنواع مختلفة من الأنسجة والأعضاء. يتنامى هذا النسيج من الأديم المتوسط.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003238.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coracoid-process",
    "term_en": "Coracoid Process",
    "term_ar": "ناتئ غرابي",
    "synonyms": [
      "Coracoid Processes",
      "Processus Coracoideus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A beak-like bone projection located at the lateral end of the superior anterior border of the SCAPULA.",
    "arabic_definition": "الناتئ الغرابى (الإنجليزية: Coracoid process) هو بنيان على هيئة خُطَّاف معقوف، على الحافة الجانبية للجزء الأعلى الأمامى من لوح الكتف. يتجه الناتئ الغرابى أفقيا وإلى الأمام، وهو يعمل جنبا إلى جنب مع الأخرم على تحقيق الإستقرار في مفصل الكتف.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000070597.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypoglossal-nerve",
    "term_en": "Hypoglossal Nerve",
    "term_ar": "عصب تحت اللسان",
    "synonyms": [
      "Hypoglossal Nerves",
      "Nerve, Hypoglossal",
      "Nerves, Hypoglossal",
      "Cranial Nerve XII",
      "Cranial Nerve XIIs",
      "Nerve XII, Cranial",
      "Nerve XIIs, Cranial",
      "Twelfth Cranial Nerve"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The 12th cranial nerve. The hypoglossal nerve originates in the hypoglossal nucleus of the medulla and supplies motor innervation to all of the muscles of the tongue except the palatoglossus (which is supplied by the vagus). This nerve also contains proprioceptive afferents from the tongue muscles.",
    "arabic_definition": "عَصَب تحتَ اللِّسان (اللاتينية: nervus hypoglossus) هوَ العَصَبُ القِحفي الثاني عشر، حيثُ يُعَصِّب جَميع عَضلات اللسان الداخلية مِنها والخارِجية باستثناء العَضلة الحَنكية اللسانية التي تُعصب بواسطة العصب المُبهَم، كما أنَّ العَصب تحت اللسان يُعتبر عَصبا ذا وظيفة حركية فَقط. يَنشأ العصب تحتَ اللسان على شكل مجموعة من الجذور الصَغيرة الناشئة مِن نواة العَصب تحت اللسان الموجودة في جذع الدماغ، ثُم يَمر العصب عبرَ النفق تحت اللسان(4) وفي أسفل الرَقبة، وفي النِهاية يَمر مرة أُخرى فوقَ عضلات اللسان. (Hypoglossal Nerve)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007002.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nucleus-accumbens",
    "term_en": "Nucleus Accumbens",
    "term_ar": "نواة متكئة",
    "synonyms": [
      "Accumbens, Nucleus",
      "Nucleus Accumbens Septi",
      "Accumbens Septi, Nucleus",
      "Accumbens Septus, Nucleus",
      "Nucleus Accumbens Septus",
      "Septi, Nucleus Accumbens",
      "Septus, Nucleus Accumbens"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Collection of pleomorphic cells in the caudal part of the anterior horn of the LATERAL VENTRICLE, in the region of the OLFACTORY TUBERCLE, lying between the head of the CAUDATE NUCLEUS and the ANTERIOR PERFORATED SUBSTANCE. It is part of the so-called VENTRAL STRIATUM, a composite structure considered part of the BASAL GANGLIA.",
    "arabic_definition": "النَّواة المُتَكِئَة (الاسم العلمي: nucleus accumbens septi) هي منطقة مهمة بالمخ. وهذه المنطقة مسؤولة عن المكافآت بالدماغ البشري، وتنشط عند حصول الإنسان على الطعام الجيد أو المال، كما تنشط عند حصول الشخص على سمعة جيدة وثناء ومديح لشخصه.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009714.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerebral-aqueduct",
    "term_en": "Cerebral Aqueduct",
    "term_ar": "مسال دماغي",
    "synonyms": [
      "Aqueduct, Cerebral",
      "Aqueducts, Cerebral",
      "Cerebral Aqueducts",
      "Aqueduct of Sylvius",
      "Sylvius Aqueduct",
      "Aqueductus Cerebri",
      "Aqueductus Cerebrus",
      "Cerebri, Aqueductus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Narrow channel in the MESENCEPHALON that connects the third and fourth CEREBRAL VENTRICLES.",
    "arabic_definition": "المسال الدماغي (الإنجليزية: Cerebral aqueduct) مسال الدماغ المتوسط أو مسال سلفيوس أو قناة سلفيوس هو قناة ضيقة تقع ضمن الدماغ المتوسط يصل البطين الثالث مع البطين الرابع للدماغ. إن انسداد هذه القناة يسبب مواه الرأس.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002535.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ophthalmic-artery",
    "term_en": "Ophthalmic Artery",
    "term_ar": "شريان عيني",
    "synonyms": [
      "Arteries, Ophthalmic",
      "Artery, Ophthalmic",
      "Ophthalmic Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Artery originating from the internal carotid artery and distributing to the eye, orbit and adjacent facial structures.",
    "arabic_definition": "الشريان العيني (الإنجليزية: Arteria ophthalmica)، هو شريان ينشأ من الشريان السباتي الباطن بعد خروجه من الجيب الكهفي، ويسير إلى الأمام عبر النفق البصري أسفل ووحشي من العصب البصري، ثم يسير إلى الأمام ليكون الجدار الأُنسي لجوف الحجاج ويعطي فروعاً متعددة هي؛ الشريان الشبكي المركزي، الشريان الدمعي، الشرايين الهدبية الخلفية القصيرة والطويلة، الشريان فوق الحجاج، الشريان الغربالي الخلفي والأمامي، الشرايين الهدبية الأمامية، شريان ظهر الأنف والشريان فوق البَكَري. (Ophthalmic Artery)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009880.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "substantia-nigra",
    "term_en": "Substantia Nigra",
    "term_ar": "المادة السوداء",
    "synonyms": [
      "Nigras, Substantia",
      "Nigra, Substantia",
      "Substantia Nigras"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The black substance in the ventral midbrain or the nucleus of cells containing the black substance. These cells produce DOPAMINE, an important neurotransmitter in regulation of the sensorimotor system and mood. The dark colored MELANIN is a by-product of dopamine synthesis.",
    "arabic_definition": "المادة السوداء هي بنية من الدماغ المتوسط مسؤولة عن المكافأة والحركة بشكل أساسي. يعكس الاسم «المادة السوداء» حقيقة أن بعض أجزائها تكون أغمق من الأجزاء المجاورة نتيجة وجود نسب مرتفعة من النيوروميلانين في الخلايا العصبية دوبامينينة الفِعل. (Substantia Nigra)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013378.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oculomotor-nerve",
    "term_en": "Oculomotor Nerve",
    "term_ar": "عصب محرك للعين",
    "synonyms": [
      "Nerve, Oculomotor",
      "Nerves, Oculomotor",
      "Oculomotor Nerves",
      "Cranial Nerve III",
      "Cranial Nerve IIIs",
      "Third Cranial Nerve",
      "Cranial Nerves, Third",
      "Cranial Nerve, Third"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The 3d cranial nerve. The oculomotor nerve sends motor fibers to the levator muscles of the eyelid and to the superior rectus, inferior rectus, and inferior oblique muscles of the eye. It also sends parasympathetic efferents (via the ciliary ganglion) to the muscles controlling pupillary constriction and accommodation. The motor fibers originate in the oculomotor nuclei of the midbrain.",
    "arabic_definition": "العصب المحرك للعين أو العصب القحفي الثالث هو ثالث الأعصاب القحفية، يدخل محجر العين عبر الشق العلوي ويُغذي عضلات العين الخارجية المسؤولة عن معظم حركات العين والتي ترفع الجفن، كما يحتوي العصب المحرك للعين أيضًا على ألياف تغذي عضلات العين الداخلية المسؤلة عن انقباض الحدقة وتكيفها (أي قدرتها على التركيز على الأشياء القريبة أثناء القراءة مثلا). يُشتق العصب المحرك للعين من الصفيحة القاعدية للدماغ المتوسط في الجنين، ويشارك العصبان القحفيان الرابع والسادس أيضا في السيطرة على حركة العين. (Oculomotor Nerve)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009802.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trigeminal-nerve",
    "term_en": "Trigeminal Nerve",
    "term_ar": "عصب ثلاثي التوائم",
    "synonyms": [
      "Nerve, Trigeminal",
      "Trigeminal Nerves",
      "Fifth Cranial Nerve",
      "Cranial Nerve, Fifth",
      "Fifth Cranial Nerves",
      "Nerve, Fifth Cranial",
      "Cranial Nerve V",
      "Nerve V, Cranial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The 5th and largest cranial nerve. The trigeminal nerve is a mixed motor and sensory nerve. The larger sensory part forms the ophthalmic, mandibular, and maxillary nerves which carry afferents sensitive to external or internal stimuli from the skin, muscles, and joints of the face and mouth and from the teeth. Most of these fibers originate from cells of the TRIGEMINAL GANGLION and project to the TRIGEMINAL NUCLEUS of the brain stem. The smaller motor part arises from the brain stem trigeminal motor nucleus and innervates the muscles of mastication.",
    "arabic_definition": "العصب ثلاثي التوائم (الإنجليزية: CN.V Trigeminal nerve) وهو العصب القحفي الخامس والمسؤول عن نقل الإيعازات الحسية للوجه وعن الوظائف الحركية مثل العض والمضغ وهو أكبر الأعصاب القحفية في الإنسان. أطلقت عليه هذه التسمية (ثلاثي التوائم) بسبب امتلاك كل من العصبين (عصب واحد على كل جهة من جهتي الجسر) ثلاثة فروع رئيسية: العصب العيني (V1) و العصب الفكي العلوي (V2) والعصب الفكي السفلي (V3).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014276.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lumbar-vertebrae",
    "term_en": "Lumbar Vertebrae",
    "term_ar": "فقرة قطنية",
    "synonyms": [
      "Vertebrae, Lumbar"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "VERTEBRAE in the region of the lower BACK below the THORACIC VERTEBRAE and above the SACRAL VERTEBRAE.",
    "arabic_definition": "الفقرات القَطَنِيَّة (الإنجليزية: Lumbar vertebrae) هي إحدى أقسام العمود الفقري وعددها خمس فقرات، وتقع بين الفقرات الصدرية والفقرات العجزية. تمتاز بكبر حجمها عن باقي الفقرات التي تعلوها (العنقية الصدرية) وتحمل جميع صفات الفقرة النموذجية فلا توجد فتحة بالنتوء المستعرض كالفقرات العنقية ولا توجد أوجه مفصلية على جوانب الجسم أو على القسم الأمامي للنتوء المستعرض كما في الفقرات الصدرية، والنتوء الشوكي رباعي الشكل موازٍ لسطح الأرض، وتتباعد النتوءات الشوكية بعضها عن بعض أما النتوء المستعرض فقصير.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008159.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "seminal-vesicles",
    "term_en": "Seminal Vesicles",
    "term_ar": "حويصلة منوية",
    "synonyms": [
      "Seminal Vesicle",
      "Vesicle, Seminal",
      "Vesicles, Seminal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A saclike, glandular diverticulum on each ductus deferens in male vertebrates. It is united with the excretory duct and serves for temporary storage of semen. (From McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "الحُويصَلات المَنَوِيَّة(1) هي زوجٌ من الغدد الأنبوبية المُلفَّفة التي تقعُ خلف المثانة لدى الإنسان وبعض ذكور الثدييات. تُفرز الحُويصَلات سائلًا يُكون جزءًا من المَنِيّ. (Seminal Vesicles)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012669.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulmonary-artery",
    "term_en": "Pulmonary Artery",
    "term_ar": "شريان رئوي",
    "synonyms": [
      "Arteries, Pulmonary",
      "Artery, Pulmonary",
      "Pulmonary Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The short wide vessel arising from the conus arteriosus of the right ventricle and conveying unaerated blood to the lungs.",
    "arabic_definition": "الشِّريانُ الرِّئويّ أو الجذْعُ الرِّئويّ (الإنجليزية: Pulmonary artery) هو شريان يخرج من البطين الأيمن للقلب ثم ينقسم إلى فرعين أيمن وأيسر. يذهب الأيمن إلى الرئة اليمنى والأيسر إلى الرئة اليسرى.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011651.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pyramidal-tracts",
    "term_en": "Pyramidal Tracts",
    "term_ar": "سبيل هرمي",
    "synonyms": [
      "Pyramidal Tract",
      "Tract, Pyramidal",
      "Tracts, Pyramidal",
      "Decussation, Pyramidal",
      "Pyramidal Decussation",
      "Corticospinal Tracts",
      "Corticospinal Tract",
      "Tract, Corticospinal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fibers that arise from cells within the cerebral cortex, pass through the medullary pyramid, and descend in the spinal cord. Many authorities say the pyramidal tracts include both the corticospinal and corticobulbar tracts.",
    "arabic_definition": "السبيل الهرمي أو السبيل المخي النخاعي الوحشي(الإنجليزية: Pyramidal tracts) ، وتشمل المساحات الهرمية في كل من القشرية والنخاعية القشرية. هذه التجميعات من الألياف العصبية في الخلايا العصبية الحركية العليا التي تنتقل من القشرة الدماغية وتنتهي إما في الدماغ ( القشرية ) أو الحبل الشوكي ( القشرية ) وتشارك في السيطرة على وظائف احركة في الجسم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011712.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rectus-abdominis",
    "term_en": "Rectus Abdominis",
    "term_ar": "عضلة مستقيمة بطنية",
    "synonyms": [
      "Rectus Abdominus",
      "Abdominus, Rectus",
      "Recti Abdominis",
      "Rectus Muscle of Abdomen",
      "Abdomen Rectus Muscle",
      "Abdomen Rectus Muscles",
      "Rectus abdominis muscle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A long flat muscle that extends along the whole length of both sides of the abdomen. It flexes the vertebral column, particularly the lumbar portion; it also tenses the anterior abdominal wall and assists in compressing the abdominal contents. It is frequently the site of hematomas. In PLASTIC SURGERY PROCEDURES it is often used for the creation of MYOCUTANEOUS FLAP. (From Gray's Anatomy, 30th American ed, p491)",
    "arabic_definition": "عضلة البطن المستقيمة والمعروفة أيضًا باسم «عضلات البطن» هي عضلة مقترنة تعمل عموديًا على كل جانب من الجدار الأمامي للبطن البشري، بالإضافة إلى بعض الثدييات الأخرى. يقطع سطح العضلة ثلاث تقاطعات وترية: 1- الأول: عند ذروة الرهابة. (Rectus Abdominis)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017568.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cochlear-nucleus",
    "term_en": "Cochlear Nucleus",
    "term_ar": "نواة قوقعية",
    "synonyms": [
      "Cochlear Nuclei",
      "Nuclei, Cochlear",
      "Nucleus, Cochlear"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The brain stem nucleus that receives the central input from the cochlear nerve. The cochlear nucleus is located lateral and dorsolateral to the inferior cerebellar peduncles and is functionally divided into dorsal and ventral parts. It is tonotopically organized, performs the first stage of central auditory processing, and projects (directly or indirectly) to higher auditory areas including the superior olivary nuclei, the medial geniculi, the inferior colliculi, and the auditory cortex.",
    "arabic_definition": "يشتمل مركب النواة القوقعية على نواتين من نوى الأعصاب القحفية الموجودة في جذع الدماغ وهما: النواة القوقعية البطنية والنواة القوقعية الظهرية. حيث تنقل الألياف العصبية السمعية الإشارات العصبية من قوقعة الأذن الموجودة على نفس جانب النواة إلى جذر العصب، حيث تتفرع هذه الألياف لتغذي النواة القوقعية البطنية والطبقة العميقة للنواة القوقعية الظهرية. (Cochlear Nucleus)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017626.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "entorhinal-cortex",
    "term_en": "Entorhinal Cortex",
    "term_ar": "قشرة شمية داخلية",
    "synonyms": [
      "Cortex, Entorhinal",
      "Entorhinal Area",
      "Area, Entorhinal",
      "Entorhinal Areas",
      "Entorhinal Cortices",
      "Secondary Olfactory Cortex",
      "Cortex, Secondary Olfactory",
      "Olfactory Cortex, Secondary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cerebral cortex region on the medial aspect of the PARAHIPPOCAMPAL GYRUS, immediately caudal to the OLFACTORY CORTEX of the uncus. The entorhinal cortex is the origin of the major neural fiber system afferent to the HIPPOCAMPAL FORMATION, the so-called PERFORANT PATHWAY.",
    "arabic_definition": "القشرة الشمية الداخلية هي منطقة من الدماغ تقع في الفص الصدغي من الجهة الإنسية وتعمل كمحور لشبكة واسعة تخدم الذاكرة والملاحة المكانية والإحساس بالوقت، كما تُمثل الواجهة الرئيسية بين الحصين (قرن آمون) والقشرة الجديدة، ويلعب نظام الحصين-القشرة الشمية الداخلية دورًا مهمًا في الذكريات التعريفية (السيرة الذاتية، العرضية، الدلالية) وخاصة في الذاكرة المكانية بما في ذلك تكوين الذاكرة، وتعزيزها، وتحسينها أثناء النوم. تعتبر القشرة الشمية الداخلية مسؤولة أيضًا عن المعالجة المسبقة لإشارات الإدخال في منعكس الغشاء الراف (في الحيوانات) كاستجابة للإشراط الكلاسيكي، ويحدث الترابط بين الإشارات القادمة من العين والأذن في القشرة الشمية الداخلية. (Entorhinal Cortex)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018728.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tympanic-membrane",
    "term_en": "Tympanic Membrane",
    "term_ar": "غشاء طبلي",
    "synonyms": [
      "Membranes, Tympanic",
      "Membrane, Tympanic",
      "Tympanic Membranes",
      "Eardrum",
      "Eardrums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An oval semitransparent membrane separating the external EAR CANAL from the tympanic cavity (EAR, MIDDLE). It contains three layers: the skin of the external ear canal; the core of radially and circularly arranged collagen fibers; and the MUCOSA of the middle ear.",
    "arabic_definition": "طبلة الأذن (الإنجليزية: Eardrum) أو الغشاء الطبلي (الإنجليزية: Tympanic Membrane) هو غشاء حيوي رقيق يفصل الأذن الخارجية عن الأذن الوسطى لدى البشر والأخرى. ووظيفته هي نقل الصوت من الهواء إلى داخل عظيمات الأذن الوسطى.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014432.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bartholins-glands",
    "term_en": "Bartholin's Glands",
    "term_ar": "غدة بارتولين",
    "synonyms": [
      "Bartholin Glands",
      "Bartholins Glands",
      "Glands, Bartholin's",
      "Bartholin's Gland",
      "Bartholins Gland",
      "Gland, Bartholin's",
      "Bartholin Gland",
      "Gland, Bartholin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Mucus-secreting glands situated on the posterior and lateral aspect of the vestibule of the vagina.",
    "arabic_definition": "غدد بارثولين وتُسمى أيضًا غدة بارتولين أو الغدد الدهليزية الكبيرة (الإنجليزية: Bartholin's gland) هي زوجٌ من الغدد التي توجد خلف فتحة الـمهبل قليلاً وعلى جانبيها الأيمن والأيسر، وتفرز هاتان الغدتان مخاطًا لترطيب المهبل وهما تنادديتان (أي مماثلتان) للغدد البصلية الإحليلية عند الذكور. وعلى الرغم من هذا، بينما تقع غدد بارثولين في الجيبة العجانية السطحية عند الإناث، تقع الغدد البصلية الإحليلية في الجيبة العجانية العميقة عند الذكور. (Bartholin's Glands)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001472.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "subclavian-artery",
    "term_en": "Subclavian Artery",
    "term_ar": "شريان تحت الترقوة",
    "synonyms": [
      "Arteries, Subclavian",
      "Artery, Subclavian",
      "Subclavian Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Artery arising from the brachiocephalic trunk on the right side and from the arch of the aorta on the left side. It distributes to the neck, thoracic wall, spinal cord, brain, meninges, and upper limb.",
    "arabic_definition": "شريان تحت الترقوة (الإنجليزية: Subclavian artery) شريان ينشأ من قوس الأبهر والشريان العضدي الرأسي. تقترن الشرايين تحت الترقوة مع الشرايين الرئيسية في القفص الصدري العلوي وتحت الترقوة (عظمة الترقوة).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013348.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urogenital-system",
    "term_en": "Urogenital System",
    "term_ar": "جهاز بولي تناسلي",
    "synonyms": [
      "Systems, Urogenital",
      "System, Urogenital",
      "Urogenital Systems",
      "Genitourinary System",
      "Genitourinary Systems",
      "System, Genitourinary",
      "Systems, Genitourinary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "All the organs involved in reproduction and the formation and release of URINE. It includes the kidneys, ureters, BLADDER; URETHRA, and the organs of reproduction - ovaries, UTERUS; FALLOPIAN TUBES; VAGINA; and CLITORIS in women and the testes; SEMINAL VESICLES; PROSTATE; seminal ducts; and PENIS in men.",
    "arabic_definition": "الجهاز البولي التناسلي هو نظام أحيائي يتكون من أعضاء التكاثر والجهاز البولي. يصنف الجهازان سوية بسبب تقاربهما وبسبب منشأهما الجنيني ولتشارك الجهازين ببعض الأعضاء مثل الإحليل الذكري. (Urogenital System)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014566.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphatic-vessels",
    "term_en": "Lymphatic Vessels",
    "term_ar": "وعاء لمفي",
    "synonyms": [
      "Lymphatic Vessel",
      "Vessel, Lymphatic",
      "Vessels, Lymphatic",
      "Lymphatic Capillaries",
      "Capillaries, Lymphatic",
      "Capillary, Lymphatic",
      "Lymphatic Capillary",
      "Lymphatic Venules"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Tubular vessels that are involved in the transport of LYMPH and LYMPHOCYTES.",
    "arabic_definition": "الأوعية اللمفية أو الأوعية اللنفية أو الأوعية البلغمية (الإنجليزية: Lymph vessel) هي أوعية تشريحية و يمكن تشبيهها بالأوعية الدموية، و لكنها لا تعمل على نقل الدم و إنما تعد المسؤولة عن نقل السائل اللمفي المتواجد في النسيج و الذي يتضمن كمية قليلة من البروتينات. و يمكن التمييز بين أربع أنواع تقريبا للأوعية اللمفية من حيث البنية و الوظيفة و الحجم: الشعيرات اللمفية ( Lymph capillary ). (Lymphatic Vessels)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D042601.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "septum-pellucidum",
    "term_en": "Septum Pellucidum",
    "term_ar": "حاجز شفاف",
    "synonyms": [
      "Pellucidum, Septum",
      "Septum Lucidum",
      "Lucidum, Septum",
      "Lucidums, Septum",
      "Septum Lucidums",
      "Septum Pelusidum",
      "Pelusidum, Septum",
      "Pelusidums, Septum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A triangular double membrane separating the anterior horns of the LATERAL VENTRICLES of the brain. It is situated in the median plane and bounded by the CORPUS CALLOSUM and the body and columns of the FORNIX (BRAIN).",
    "arabic_definition": "الحاجز الشفاف (اللاتينية: Septum pellucidum) هو غشاء رقيق مزدوج عمودي مثلثي يفصل بين القرون الأمامية للبطينين الجانبيين الأيمن والأيسر للدماغ ويمرعلى شكل صحيفة من الجسم الثفني وصولاً إلى قبو الدماغ.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012688.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cervical-vertebrae",
    "term_en": "Cervical Vertebrae",
    "term_ar": "فقرة عنقية",
    "synonyms": [
      "Vertebrae, Cervical",
      "Cervical Spine",
      "Cervical Spines",
      "Spine, Cervical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The first seven VERTEBRAE of the SPINAL COLUMN, which correspond to the VERTEBRAE of the NECK.",
    "arabic_definition": "الفقرات الرقبية أو الفقرات العنقية (الإنجليزية: Cervical vertebrae) يوجد في الرقبة سبع فقرات مرقمة تسلسليا من الأعلى إلى الأسفل. تسمى الفقرة الأولى بالأطلس وهي تشبه الحلقة، وتكون مع قاعدة الجمجمة من الأعلى مفصل يسمى المفصل بالأطلسي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002574.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prefrontal-cortex",
    "term_en": "Prefrontal Cortex",
    "term_ar": "قشرة مقدم الجبهي",
    "synonyms": [
      "Cortex, Prefrontal",
      "Frontal Sulcus",
      "Sulcus, Frontal",
      "Superior Frontal Gyrus",
      "Frontal Gyrus, Superior",
      "Gyrus, Superior Frontal",
      "Marginal Gyrus",
      "Gyrus, Marginal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The rostral part of the frontal lobe, bounded by the inferior precentral fissure in humans, which receives projection fibers from the MEDIODORSAL NUCLEUS OF THE THALAMUS. The prefrontal cortex receives afferent fibers from numerous structures of the DIENCEPHALON; MESENCEPHALON; and LIMBIC SYSTEM as well as cortical afferents of visual, auditory, and somatic origin.",
    "arabic_definition": "في تشريح دماغ الثدييات، قشرة مُقدَّمِ الجَبْهيَ أو القشرة قبل الجبهيّة أو القشرة أمام الجبهيَّة (اللاتينية: cortex praefrontalis) هي القشرة المخية التي تغطي الجزء الأمامي من الفص الجبهي. تحتوي البّي إف سي على باحات برودمان بي إيه 8، وبي إيه 9، وبي إيه 10، وبي إيه 11، وبي إيه 12، وبي إيه 13، وبي إيه 14، وبي إيه 24، وبي إيه 25، وبي إيه 32، وبي إيه 44، وبي إيه 45، وبي إيه 46 وبي إيه 47. (Prefrontal Cortex)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017397.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thyroid-cartilage",
    "term_en": "Thyroid Cartilage",
    "term_ar": "غضروف درقي",
    "synonyms": [
      "Cartilages, Thyroid",
      "Cartilage, Thyroid",
      "Thyroid Cartilages"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The largest cartilage of the larynx consisting of two laminae fusing anteriorly at an acute angle in the midline of the neck. The point of fusion forms a subcutaneous projection known as the Adam's apple.",
    "arabic_definition": "الغضروف الدرقي (الإنجليزية: Thyroid cartilage) هو الغضروف الأكبر بين تسعة غضاريف تُشكل الهيكل الحنجري، وهو عبارة عن بناء غضروفي داخل وحول القصبة الهوائية (الرغامى) التي تحوي داخلها الحنجرة.يتكون الغضروف الدرقي من صفيحتين مائلتين تلتحمان في قسمهما الأمامي لتشكلا نتوءاً يسمّى النتوء الحنجري، أو ما يعرف باسم تفاحة آدم. ويكون النتوء الحنجري أكثر بروزاً لدى الرجال عنه لدى النساء، بسبب الاختلاف في الزاوية بين صفيحتيه الغضروفيتين، حيث يبلغ 90 درجة لدى الرجال، بينما هي 120 لدى النساء.تسمى الثلمة فوق الحافة العلوية للغضروف الحنجري، والتي تعلو مباشرة النتوء الحنجري بـ الثلمة الحنجرية العلوية؛ في حين تُسمّى الثلمة أسفل الزاوي الدرقية بـ الثلمة الحنجرية السفلية.تمتد الحافة الخلفية للغضروف الدرقي علوياً وسفلياً لتشكلان القرن العلوي للغضروف الدرقي والقرن السفلي للغضروف الدرقي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013957.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "olecranon-process",
    "term_en": "Olecranon Process",
    "term_ar": "ناتئ مرفقي",
    "synonyms": [
      "Process, Olecranon",
      "Olecranon"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A prominent projection of the ulna that articulates with the HUMERUS and forms the outer protuberance of the ELBOW JOINT.",
    "arabic_definition": "النتوء المرفقي أو نتوء المرفق أو الناتئ الزُجّي للزند (الإنجليزية: Olecranon)، الزُجّ (الصفة منه زُجّي) أو الناتئ المرفقي أو طرف المرفق ، باليونانية olene بمعنى «مرفق» و kranon بمعنى «رأس». هو ذلك النتوء العظمي الكبير السميك المنحني في المنطقة العلوية لعظم الزند، وينبسط خلف المرفق، وهو مقابل للحفرة المرفقية. (Olecranon Process)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056740.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cerebrospinal-fluid",
    "term_en": "Cerebrospinal Fluid",
    "term_ar": "سائل دماغي شوكي",
    "synonyms": [
      "Cerebrospinal Fluids",
      "Fluid, Cerebrospinal",
      "Fluids, Cerebrospinal",
      "Cerebro Spinal Fluid",
      "Cerebro Spinal Fluids",
      "Fluid, Cerebro Spinal",
      "Fluids, Cerebro Spinal",
      "Spinal Fluid, Cerebro"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A watery fluid that is continuously produced in the CHOROID PLEXUS and circulates around the surface of the BRAIN; SPINAL CORD; and in the CEREBRAL VENTRICLES.",
    "arabic_definition": "السائل الدماغيّ الشوكيّ يُسمى أيضًا سائل مخي نخاعي أو شوكي (الإنجليزيّة: Cerebrospinal fluid اختصاراً CSF)، أو السائل الدماغيّ النخاعيّ سائلٌ جسميّ عديم اللون وصافي يوجد في الدماغ والحبل الشوكيّ. يُنتج في الضفائر المشيميّة لبطينات الدماغ ويُمتص في التحبُّبات العنكبوتيّة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002555.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "respiratory-system",
    "term_en": "Respiratory System",
    "term_ar": "جهاز تنفسي",
    "synonyms": [
      "Respiratory Systems",
      "System, Respiratory",
      "Respiratory Tract",
      "Respiratory Tracts",
      "Tract, Respiratory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The tubular and cavernous organs and structures, by means of which pulmonary ventilation and gas exchange between ambient air and the blood are brought about.",
    "arabic_definition": "الجِِهَازُ التَّنَفُسِيُّ هو الجهاز المسؤول عن تزويد خلايا جسم الإنسان بالأكسجين الضروري لأنشطتها، ويخلصها من ثاني أكسيد الكربون الناتج من عمليات الأكسدة في الخلايا. يمر هواء الشهيق عبر الرغامى والقصبتين اللَّتَين تتفرعان منه قبل الدخول للرئتين. (Respiratory System)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012137.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blood-brain-barrier",
    "term_en": "Blood-Brain Barrier",
    "term_ar": "حاجز دموي دماغي",
    "synonyms": [
      "Barrier, Blood-Brain",
      "Barriers, Blood-Brain",
      "Blood-Brain Barriers",
      "Brain-Blood Barrier",
      "Barrier, Brain-Blood",
      "Barriers, Brain-Blood",
      "Brain-Blood Barriers",
      "Hemato-Encephalic Barrier"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Specialized non-fenestrated tightly-joined ENDOTHELIAL CELLS with TIGHT JUNCTIONS that form a transport barrier for certain substances between the cerebral capillaries and the BRAIN tissue.",
    "arabic_definition": "الحاجز الدموي الدماغي أو الحائل الدموي الدماغي (الإنجليزية: Blood–brain barrier): هو حاجز بين الدم، وسائل خارج الخلوي الخاص بالدماغ في الجهاز العصبي المركزي. يتكون الحاجز من غشاء قاعدي سميك، بالإضافة إلى نهايات قدمية للخلايا النجمية. (Blood-Brain Barrier)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001812.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lateral-ventricles",
    "term_en": "Lateral Ventricles",
    "term_ar": "بطين جانبي",
    "synonyms": [
      "Lateral Ventricle",
      "Ventricle, Lateral",
      "Ventricles, Lateral",
      "Subventricular Zone",
      "Subventricular Zones",
      "Zones, Subventricular",
      "Zone, Subventricular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cavity in each of the CEREBRAL HEMISPHERES derived from the cavity of the embryonic NEURAL TUBE. They are separated from each other by the SEPTUM PELLUCIDUM, and each communicates with the THIRD VENTRICLE by the foramen of Monro, through which also the choroid plexuses (CHOROID PLEXUS) of the lateral ventricles become continuous with that of the third ventricle.",
    "arabic_definition": "البطين الجانبي (الإنجليزية: Lateral ventricles) هو أحد بطينات الدماغ الأربع. ويوجد بطين جانبي في كل نصف من كرة الدماغ.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020547.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anatomic-landmarks",
    "term_en": "Anatomic Landmarks",
    "term_ar": "مصطلحات تشريحية",
    "synonyms": [
      "Anatomic Landmark",
      "Landmark, Anatomic",
      "Landmarks, Anatomic",
      "Anatomical terminology"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Reference points located by visual inspection, palpation, or computer assistance, that are useful in localizing structures on or within the human body.",
    "arabic_definition": "المُصطلحات التشريحيّة (الإنجليزية: Anatomical terminology) هي تعبيرات يستعملها خبراءُ علم التشريح وخبراء علم الحيوان في المجلّات العلمية والكتب الدراسية وتُستخدم كذلك بواسطة الأطباء والعاملين الآخرين في مجال الصحة. المصطلحات التشريحية تحتوي على الكثير من التعبيرات المختلفة والتي قد تسبب التباسًا والتي تصف الموقع التشريحي وكذلك وظيفة التراكيب المختلفة في الجسم، وبواسطة هذه المصطلحات، يأْمل العلماء أن يكونوا أكثر دقة وأكثر تجنبًا للأخطاء والغموض. (Anatomic Landmarks)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059925.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "temporomandibular-joint",
    "term_en": "Temporomandibular Joint",
    "term_ar": "مفصل صدغي فكي",
    "synonyms": [
      "Joints, Temporomandibular",
      "Joint, Temporomandibular",
      "Temporomandibular Joints",
      "TMJ"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An articulation between the condyle of the mandible and the articular tubercle of the temporal bone.",
    "arabic_definition": "المفصل الصدغي الفكي (الإنجليزية: Temporomandibular joint) هو مفصل زليلي ثنائي بين العظم الصدغي للجمجمة أعلاه والفك السفلي أدناه؛ فمن هذه العظام اشتقت اسمها. هذا المفصل فريد من نوعه حيث أنه مفصل ثنائي يعمل كقطعة واحدة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013704.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vestibulocochlear-nerve",
    "term_en": "Vestibulocochlear Nerve",
    "term_ar": "عصب دهليزي قوقعي",
    "synonyms": [
      "Nerves, Vestibulocochlear",
      "Nerve, Vestibulocochlear",
      "Vestibulocochlear Nerves",
      "Eighth Cranial Nerve",
      "Cranial Nerve, Eighth",
      "Cranial Nerves, Eighth",
      "Eighth Cranial Nerves",
      "Nerve, Eighth Cranial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The 8th cranial nerve. The vestibulocochlear nerve has a cochlear part (COCHLEAR NERVE) which is concerned with hearing and a vestibular part (VESTIBULAR NERVE) which mediates the sense of balance and head position. The fibers of the cochlear nerve originate from neurons of the SPIRAL GANGLION and project to the cochlear nuclei (COCHLEAR NUCLEUS). The fibers of the vestibular nerve arise from neurons of Scarpa's ganglion and project to the VESTIBULAR NUCLEI.",
    "arabic_definition": "العصب الدهليزي القوقعي (الإنجليزية: Vestibulocochlear Nerve) (يعرف أيضا بالعصب السمعي) هو العصب الثامن من الأعصاب القحفية الإثني عشر وهو عصب حسي مسؤول عن نقل الصوت والاتزان من الأذن الداخلية إلى الدماغ. يحمل العصب الدهليزي القوقعي أليافًا للسمع والتوازن، ويتركّب من قسمين مكّونٌ دهليزيٌّ للتوازن، ومكّونٌ قوقعيٌّ للسمع.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000159.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glossopharyngeal-nerve",
    "term_en": "Glossopharyngeal Nerve",
    "term_ar": "عصب بلعومي لساني",
    "synonyms": [
      "Glossopharyngeal Nerves",
      "Nerve, Glossopharyngeal",
      "Nerves, Glossopharyngeal",
      "Cranial Nerve IX",
      "Cranial Nerve IXs",
      "Ninth Cranial Nerve",
      "Cranial Nerve, Ninth",
      "Cranial Nerves, Ninth"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The 9th cranial nerve. The glossopharyngeal nerve is a mixed motor and sensory nerve; it conveys somatic and autonomic efferents as well as general, special, and visceral afferents. Among the connections are motor fibers to the stylopharyngeus muscle, parasympathetic fibers to the parotid glands, general and taste afferents from the posterior third of the tongue, the nasopharynx, and the palate, and afferents from baroreceptors and CHEMORECEPTOR CELLS of the carotid sinus.",
    "arabic_definition": "العصب البلعومي اللساني (الإنجليزية: Glossopharyngeal nerve)، يُعرف باسم العصب القحفي التاسع (سي إن IX)، هو عصب مختلط مسؤول عن نقل المعلومات الواردة الحسية والصادرة الحركية. يغادر جذع الدماغ من جانبي النخاع المستطيل العلوية بشكل أمامي (أقرب إلى الأنف) بالنسبة للعصب المبهم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005930.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "suprachiasmatic-nucleus",
    "term_en": "Suprachiasmatic Nucleus",
    "term_ar": "نواة فوق التصالبة",
    "synonyms": [
      "Suprachiasmatic Nuclei",
      "Hypothalamic Suprachiasmatic Nucleus",
      "Suprachiasmatic Nucleus, Hypothalamic",
      "Hypothalamic Suprachiasmatic Nuclei",
      "Suprachiasmatic Nuclei, Hypothalamic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An ovoid densely packed collection of small cells of the anterior hypothalamus lying close to the midline in a shallow impression of the OPTIC CHIASM.",
    "arabic_definition": "النواة فوق التصالبة (الإنجليزية: Suprachiasmatic nucleus) واختصارا (SCN) هي منطقة صغيرة من الدماغ في تحت المهاد، تقع مباشرة فوق التصالبة البصرية وهي مسؤولة عن التحكم في النظم اليوماوي. تنظِّم الوظائف العصبونية والهرمونية التي تولدها النواة فوق التصالبة البصرية العديد من وظائف الجسد في دورة مدتها 24 ساعة، وذلك باستخدام حوالي 20 ألف عصبون.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013493.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "musculoskeletal-system",
    "term_en": "Musculoskeletal System",
    "term_ar": "جهاز عضلي هيكلي",
    "synonyms": [
      "Musculoskeletal Systems",
      "System, Musculoskeletal",
      "Systems, Musculoskeletal",
      "Human musculoskeletal system"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The MUSCLES, bones (BONE AND BONES), and CARTILAGE of the body.",
    "arabic_definition": "الجهاز العضلي الهيكلي (الإنجليزية: Human Musculoskeletal System) في الإنسان يعرف أيضًا باسم الجهاز الحركي أو الجهاز التحركي وكان يُعرف سابقًا باسم نظام النشاط، هو مجموعة من الأعضاء التي تعطي البشر القدرة على التحرك باستخدام أجهزتهم العضلية والهيكلية. يعطي الجهاز العضلي الهيكلي هيئة الإنسان ويعطي للجسم دعم واستقرار وحركة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009141.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sympathoadrenal-system",
    "term_en": "Sympathoadrenal System",
    "term_ar": "جهاز ودي كظري",
    "synonyms": [
      "Sympatho-Adrenal Axis",
      "Axis, Sympatho-Adrenal",
      "Sympathoadrenal Axis",
      "Sympatho-Adrenal System",
      "Sympatho-Adrenal Systems",
      "System, Sympatho-Adrenal",
      "Sympatho-Adrenal Medullary System",
      "Medullary System, Sympatho-Adrenal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A connection of the SYMPATHETIC NERVOUS SYSTEM and the ADRENAL MEDULLA of the ADRENAL GLANDS. Intra-adrenal connection from the medulla to the cortex connects the system to other neuroendocrine systems, which in concert participate in FLIGHT REACTION in stress situations. CATECHOLAMINES are the principle hormone in the system.",
    "arabic_definition": "الجهاز الودي الكظري هو اتصال فيزيولوجي بين الجهاز العصبي الودي ولب الكظر، وله دور هام في استجابة الكائن الحي الفيزيولوجية للمنبهات الخارجية. عندما يتلقى الجسم إشاراتٍ حسية، يرسل الجهاز العصبي الودي إشارة إلى الألياف العصبية ما قبل العقد، والتي تنشط لب الكظر عن طريق الأستيل كولين، وفور تنشيطه يفرز الأدرينالين والنورأدرينالين مباشرة إلى الدم عن طريق الألياف العصبية ما بعد العقدة. (Sympathoadrenal System)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000084602.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cardiovascular-system",
    "term_en": "Cardiovascular System",
    "term_ar": "جهاز الدوران",
    "synonyms": [
      "Cardiovascular Systems",
      "Circulatory System",
      "Circulatory Systems"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The HEART and the BLOOD VESSELS by which BLOOD is pumped and circulated through the body.",
    "arabic_definition": "جِهَازُ الدَّوَرَانِ أو جهاز دوري أو الجِهَازُ الدَّوَرَانِيُّ ويسمى أيضًا الجِهَازُ القَلْبِيُّ الوِعَائِيُّ أو الجِهَازُ الوِعَائِيُّ، هو نظام من الأعضاء التي تشمل القلب والأوعية الدموية والدم والتي تنتشر في جميع أنحاء الجسم، ويشمل الجهاز القلبي الوعائي الذي يتكون من القلب والأوعية الدموية. يسمح الجهاز الدوري بدوران الدم ونقله معه للمغذيات مثل الأحماض الأمينية، الكهرليات، الأكسجين، ثنائي أكسيد الكربون،الهرمونات والعديد من المواد الأخرى من وإلى الخلايا؛ وذلك لتزويدها بالغذاء والمساعدة في التخلص من نواتج الأيض. (Cardiovascular System)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002319.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "semicircular-canals",
    "term_en": "Semicircular Canals",
    "term_ar": "قناة هلالية",
    "synonyms": [
      "Canal, Semicircular",
      "Semicircular Canal",
      "Semi-Circular Canals",
      "Canal, Semi-Circular",
      "Semi-Circular Canal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Three long canals (anterior, posterior, and lateral) of the bony labyrinth. They are set at right angles to each other and are situated posterosuperior to the vestibule of the bony labyrinth (VESTIBULAR LABYRINTH). The semicircular canals have five openings into the vestibule with one shared by the anterior and the posterior canals. Within the canals are the SEMICIRCULAR DUCTS.",
    "arabic_definition": "النفق الهلالي أو القناة الهلالية أو القناة شبه الدائرية (الإنجليزية: Semicircular canal) أو النفق نصف الدائري هو أحد ثلاثة أنفاق موجود في الأذن الداخلية. وهم: النفق الهلالي الأفقي (ويعرف أيضاً باسم: النفق الهلالي الوحشي) النفق الهلالي العلوي (ويعرف أيضاً باسم: النفق الهلالي الأمامي) النفق الهلالي الخلفي. (Semicircular Canals)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012665.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "atrioventricular-node",
    "term_en": "Atrioventricular Node",
    "term_ar": "عقدة أذينية بطينية",
    "synonyms": [
      "Atrioventricular Nodes",
      "Node, Atrioventricular",
      "Nodes, Atrioventricular",
      "A-V Node",
      "A-V Nodes",
      "Node, A-V",
      "Nodes, A-V",
      "Atrio-Ventricular Node"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A small nodular mass of specialized muscle fibers located in the interatrial septum near the opening of the coronary sinus. It gives rise to the atrioventricular bundle of the conduction system of the heart.",
    "arabic_definition": "العقدة الأذينية البطينية (الإنجليزية: Atrioventricular node) و(اللاتينية: nodus atrioventricularis) هي مجموعة من الخلايا القلبية المتخصصة في توصيل الشارة المحفزة ما بين أذين القلب وبطيني القلب، وهي جزء من جهاز التوصيل القلبي، وبالإضافة لدورها في توصيل الاشارة المحفزة تأخذ محل العقدة الجيبية كمنظم لدقات القلب في حالة فشل العقدة الجيبية في أداء دور تحفيز القلب. اكتشفها العالم الألماني لودفيغ أشوف وتلميذه الياباني سوناو تاوارا، ولذلك يطلق عليها أحيانًا اسم عقدة أشوف-تاوارا.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001283.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "periaqueductal-gray",
    "term_en": "Periaqueductal Gray",
    "term_ar": "سنجابية محيطة بالمسال",
    "synonyms": [
      "Midbrain Central Gray",
      "Central Gray, Midbrain",
      "Periaqueductal Gray Matter",
      "Gray Matter, Periaqueductal",
      "Substantia Grisea Centralis",
      "Central Gray Substance of Midbrain",
      "Griseum Centrale",
      "Griseum Centrale Mesencephali"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Central gray matter surrounding the CEREBRAL AQUEDUCT in the MESENCEPHALON. Physiologically it is probably involved in RAGE reactions, the LORDOSIS REFLEX; FEEDING responses, bladder tonus, and pain.",
    "arabic_definition": "السنجابية المحيطة بالمسال أو الرمادية المحيطة بالمسال (واختصارا PAG وتعرف كذلك بالسنجابية المركزية) هي نواة تلعب دورا حاسما في وظيفة الجهاز العصبي الذاتي، سلوك التحفير وسلوكات الاستجابة لمنبهات مهدِّدة. كما أنها مركز التحكم الأولي لتعديل الألم النازل. (Periaqueductal Gray)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010487.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "reticular-formation",
    "term_en": "Reticular Formation",
    "term_ar": "تشكل شبكي",
    "synonyms": [
      "Formation, Reticular",
      "Formations, Reticular",
      "Reticular Formations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A region extending from the PONS &amp; MEDULLA OBLONGATA through the MESENCEPHALON, characterized by a diversity of neurons of various sizes and shapes, arranged in different aggregations and enmeshed in a complicated fiber network.",
    "arabic_definition": "التَشَكُّل الشَّبَكِيّ أو التكوين الشبكي (الإنجليزية: reticular formation) هو شبكة واسعة من الخلايا العصبية تمتد من جذع الدماغ إلى المهاد. والاسم مستمد من الكلمة اللاتينية (Reticulum) بمعنى شبكة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012154.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "collateral-ligaments",
    "term_en": "Collateral Ligaments",
    "term_ar": "رباط جانبي",
    "synonyms": [
      "Ligaments, Collateral",
      "Collateral Ligament",
      "Ligament, Collateral",
      "Lateral Ligaments",
      "Lateral Ligament",
      "Ligament, Lateral",
      "Ligaments, Lateral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A number of ligaments on either side of, and serving as a radius of movement of, a joint having a hingelike movement. They occur at the elbow, knee, wrist, metacarpo- and metatarsophalangeal, proximal interphalangeal, and distal interphalangeal joints of the hands and feet. (Stedman, 25th ed)",
    "arabic_definition": "قد يعني الرباط الجانبي أحد ما يلي: (Collateral Ligaments)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017885.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "central-nervous-system",
    "term_en": "Central Nervous System",
    "term_ar": "جهاز عصبي مركزي",
    "synonyms": [
      "Central Nervous Systems",
      "Nervous System, Central",
      "Nervous Systems, Central",
      "Systems, Central Nervous",
      "Cerebrospinal Axis",
      "Axi, Cerebrospinal",
      "Axis, Cerebrospinal",
      "Cerebrospinal Axi"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The main information-processing organs of the nervous system, consisting of the brain, spinal cord, and meninges.",
    "arabic_definition": "يتألف الجهاز العصبي من ثلاث أقسام رئيسية هي المركزي، المحيطي والذاتي، وتسمى بالترتيب: - الجهاز العصبي المركزي (الإنجليزية: Central Nervous System) - الجهاز العصبي الطرفي (الإنجليزية: Peripheral Nervous System) - الجهاز العصبي الذاتي (الإنجليزية: Autonomic Nervous System). ترتبط هذه الأقسام الثلاثة مع بعضها منسقة عملها بشكل يسمح للجهاز العصبي بتلقي ومعالجة المعلومات الحسية الواردة بكفاءة عالية واتخاذ أفضل القرارات من خلال الخيارات المتاحة لتأمين شروط البقاء والتكيف للكائن الحي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002490.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autonomic-nervous-system",
    "term_en": "Autonomic Nervous System",
    "term_ar": "جهاز عصبي ذاتي",
    "synonyms": [
      "Autonomic Nervous Systems",
      "Nervous System, Autonomic",
      "Nervous Systems, Autonomic",
      "System, Autonomic Nervous",
      "Systems, Autonomic Nervous",
      "Vegetative Nervous System",
      "Nervous Systems, Vegetative",
      "Nervous System, Vegetative"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The ENTERIC NERVOUS SYSTEM; PARASYMPATHETIC NERVOUS SYSTEM; and SYMPATHETIC NERVOUS SYSTEM taken together. Generally speaking, the autonomic nervous system regulates the internal environment during both peaceful activity and physical or emotional stress. Autonomic activity is controlled and integrated by the CENTRAL NERVOUS SYSTEM, especially the HYPOTHALAMUS and the SOLITARY NUCLEUS, which receive information relayed from VISCERAL AFFERENTS.",
    "arabic_definition": "الجهاز العصبي الذاتي أو الجهاز العصبي التلقائي أو الجهاز العصبي المستقل أو جهاز عصبي أحشائي (الإنجليزية: autonomic nervous system) أحد أقسام الجهاز العصبي المحيطي في الكائنات الحية العليا، يختص بالتحكم بالوظائف الحيوية الذاتية اللاإرادية، ويقسم عادة إلى جهازين ذوي مهام متعاكسة هما: الجهاز العصبي الودي والجهاز العصبي اللاودي. أول من تعرف على هذا الجهاز هو الطبيب الإغريقي جالينوس.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001341.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anterior-pituitary-gland",
    "term_en": "Anterior Pituitary Gland",
    "term_ar": "نخامية أمامية",
    "synonyms": [
      "Anterior Pituitary Glands",
      "Pituitary Glands, Anterior",
      "Pars Distalis of Pituitary",
      "Pituitary Pars Distalis",
      "Anterior Lobe of Pituitary",
      "Pituitary Anterior Lobe",
      "Lobus Anterior",
      "Anterior, Lobus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The anterior glandular lobe of the pituitary gland, also known as the adenohypophysis. It secretes the ADENOHYPOPHYSEAL HORMONES that regulate vital functions such as GROWTH; METABOLISM; and REPRODUCTION.",
    "arabic_definition": "النخامية الأمامية (الإنجليزية: Anterior pituitary) أو النخامية الغدية هي الفص الأمامي من الغدة النخامية وهي جزء هام من الجهاز الصماوي. تنظم النخامية الأمامية العديد من العمليات الفيزيولوجية في الجسم مثل الكرب والنمو الاستقلاب التكاثر. (Anterior Pituitary Gland)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010903.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "middle-cerebral-artery",
    "term_en": "Middle Cerebral Artery",
    "term_ar": "شريان دماغي أوسط",
    "synonyms": [
      "Arteries, Middle Cerebral",
      "Artery, Middle Cerebral",
      "Cerebral Arteries, Middle",
      "Middle Cerebral Arteries",
      "Cerebral Artery, Middle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The largest of the cerebral arteries. It trifurcates into temporal, frontal, and parietal branches supplying blood to most of the parenchyma of these lobes in the CEREBRAL CORTEX. These are the areas involved in motor, sensory, and speech activities.",
    "arabic_definition": "الشريان الدماغي الأوسط أو الشريان المخّي الأوسط (الإنجليزية: Middle cerebral artery أو MCA) هو واحد من ثلاثة أزواج الشرايين الرئيسية التي تزود المخ بالدم. ينشأ الشريان الدماغي الأوسط من الشريان السباتي الباطن ويستمر إلى التلم الجانبي حيث يتفرّع ليصل إلى أجزاء عديدة في القشرة المخية الجانبية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020768.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anterior-cranial-fossa",
    "term_en": "Anterior Cranial Fossa",
    "term_ar": "حفرة القحف الأمامية",
    "synonyms": [
      "Fossa, Anterior Cranial",
      "Olfactory Groove",
      "Groove, Olfactory",
      "Olfactory Grooves"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The compartment containing the inferior part and anterior extremities of the frontal lobes (FRONTAL LOBE) of the cerebral hemispheres. It is formed mainly by orbital parts of the FRONTAL BONE and the lesser wings of the SPHENOID BONE.",
    "arabic_definition": "حفرة القحف الأمامية هي انخفاض في قاعدة الجمجمة تضم الفصين الجبهيين البارزين في الدماغ. تتكون الحفرة من الجزء المحجري من العظم الجبهي والصفيحة المصفوية في العظم الغربالي والجناحين الصغيرين للعظم الوتدي. (Anterior Cranial Fossa)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D035262.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peripheral-nervous-system",
    "term_en": "Peripheral Nervous System",
    "term_ar": "جهاز عصبي محيطي",
    "synonyms": [
      "Nervous System, Peripheral",
      "Nervous Systems, Peripheral",
      "Peripheral Nervous Systems",
      "System, Peripheral Nervous",
      "Systems, Peripheral Nervous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The nervous system outside of the brain and spinal cord. The peripheral nervous system has autonomic and somatic divisions. The autonomic nervous system includes the enteric, parasympathetic, and sympathetic subdivisions. The somatic nervous system includes the cranial and spinal nerves and their ganglia and the peripheral sensory receptors.",
    "arabic_definition": "الجهاز العصبي المحيطي (الإنجليزية: Peripheral Nervous System) هو أحد مكونات الجهاز العصبي عند الحيوانات ثنائية التناظر بالإضافة للجهاز العصبي المركزي. الوظيفة الأساسية للجهاز العصبي المحيطي هي ربط الأطراف والأعضاء بالجهاز العصبي المركزي، أي يعمل بشكل أساسي كنقطة وصل بين الدماغ والنخاع الشوكي وبقية الجسم.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017933.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parasympathetic-nervous-system",
    "term_en": "Parasympathetic Nervous System",
    "term_ar": "جهاز عصبي لاودي",
    "synonyms": [
      "Nervous System, Parasympathetic",
      "Nervous Systems, Parasympathetic",
      "Parasympathetic Nervous Systems",
      "System, Parasympathetic Nervous",
      "Systems, Parasympathetic Nervous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The craniosacral division of the autonomic nervous system. The cell bodies of the parasympathetic preganglionic fibers are in brain stem nuclei and in the sacral spinal cord. They synapse in cranial autonomic ganglia or in terminal ganglia near target organs. The parasympathetic nervous system generally acts to conserve resources and restore homeostasis, often with effects reciprocal to the sympathetic nervous system.",
    "arabic_definition": "الجهاز العصبي اللاودي (الإنجليزية: Parasympathetic nervous system) أو الجهاز العصبي نظير الودي هو أحد قسمي الجهاز العصبي الذاتي. فالجهاز العصبي الذاتي يقوم بتنظيم الأعضاء الداخلية والغدد بصورة غير إرادية.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010275.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sympathetic-nervous-system",
    "term_en": "Sympathetic Nervous System",
    "term_ar": "جهاز عصبي ودي",
    "synonyms": [
      "Nervous Systems, Sympathetic",
      "Nervous System, Sympathetic",
      "Sympathetic Nervous Systems",
      "Systems, Sympathetic Nervous",
      "System, Sympathetic Nervous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The thoracolumbar division of the autonomic nervous system. Sympathetic preganglionic fibers originate in neurons of the intermediolateral column of the spinal cord and project to the paravertebral and prevertebral ganglia, which in turn project to target organs. The sympathetic nervous system mediates the body's response to stressful situations, i.e., the fight or flight reactions. It often acts reciprocally to the parasympathetic system.",
    "arabic_definition": "الجهاز العصبي الودي أو الجملة العصبية الودية (الإنجليزية: Sympathetic nervous system) ويشكل مع الجهاز العصبي اللاودي الجهاز العصبي الذاتي، ويتكون من أعصاب ودية واردة وأعصاب ودية صادرة.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013564.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "posterior-pituitary-gland",
    "term_en": "Posterior Pituitary Gland",
    "term_ar": "الغدة النخامية الخلفية",
    "synonyms": [
      "Gland, Posterior Pituitary",
      "Posterior Pituitary Glands",
      "Neurohypophysis",
      "Lobus Nervosus",
      "Nervosus, Lobus",
      "Posterior Lobe of Pituitary",
      "Pituitary Posterior Lobe",
      "Infundibular Process"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Neural tissue of the pituitary gland, also known as the neurohypophysis. It consists of the distal AXONS of neurons that produce VASOPRESSIN and OXYTOCIN in the SUPRAOPTIC NUCLEUS and the PARAVENTRICULAR NUCLEUS. These axons travel down through the MEDIAN EMINENCE, the hypothalamic infundibulum of the PITUITARY STALK, to the posterior lobe of the pituitary gland.",
    "arabic_definition": "تتكون الغدة النخامية الخلفية ( بالإنجليزية : posterior pituitary gland ) ، و التي تسمى أيضا النخامى العصبية neurohypophysis ، بصورة رئيسية من خلايا تسمى الخلايا النخامية pituicytes . و لكن الخلايا النخامية هذه لا تفرز أية هرمونات لأنها تعمل ببساطة كبنيات إسنادية للأعداد الكبيرة من نهايات الألياف العصبية ونهايات الأعصاب الانتهائية من السبل العصبية التي تتأصل في النوى فوق البصرية supraoptic nucleus و جنيب البطين paraventricular nucleus of the hypothalamus (PVN) .",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010904.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "posterior-cruciate-ligament",
    "term_en": "Posterior Cruciate Ligament",
    "term_ar": "رباط صليبي خلفي",
    "synonyms": [
      "Cruciate Ligament, Posterior",
      "Cruciate Ligaments, Posterior",
      "Ligament, Posterior Cruciate",
      "Ligaments, Posterior Cruciate",
      "Posterior Cruciate Ligaments"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A strong ligament of the knee that originates from the anterolateral surface of the medial condyle of the femur, passes posteriorly and inferiorly between the condyles, and attaches to the posterior intercondylar area of the tibia.",
    "arabic_definition": "الرباط الصليبي الخلفي (الإنجليزية: Posterior cruciate ligament) هو أحد الأربطة الأربعة التي تربط عظمتي القصبة والفخذ ووظيفته الأساسية هي منع حركة عظمة القصبة للخلف بالنسبة لعظمة القصبة. الأسباب الشائعة لإصابات الرباط الصليبي الخلفي هي الضربات المباشرة على الركبة المثنية، مثلاً: ارتطام ركبة سائق سيارة بلوحة القيادة في حادث سير، أو السقوط الحاد على الركبة، كلتا الحالتين تؤديان إلى انزلاق عظمة القصبة خلف عظمة الفخذ.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016119.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anterior-cruciate-ligament",
    "term_en": "Anterior Cruciate Ligament",
    "term_ar": "رباط صليبي أمامي",
    "synonyms": [
      "Cruciate Ligament, Anterior",
      "Anterior Cruciate Ligaments",
      "Cruciate Ligaments, Anterior",
      "Ligament, Anterior Cruciate",
      "Ligaments, Anterior Cruciate",
      "Anterior Cranial Cruciate Ligament",
      "Cranial Cruciate Ligament",
      "Cranial Cruciate Ligaments"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A strong ligament of the knee that originates from the posteromedial portion of the lateral condyle of the femur, passes anteriorly and inferiorly between the condyles, and attaches to the depression in front of the intercondylar eminence of the tibia.",
    "arabic_definition": "الرباط الصليبي الأمامي (الإنجليزية: Anterior cruciate ligament) واختصاره ACL، هو أحد الأربطة الأربعة الموجودة في الركبة والتي تصل عظم الظنبوب (قصبة الساق) بعظم الفخذ. وهذه الأربطة الأربعة هي: الرباط الجانبي الوحشي (الإنجليزية: Lateral collateral ligament)، و الرباط الجانبي الإنسي (الإنجليزية: Medial collateral ligament)، والرباط المتصالب الأمامي، والرباط المتصالب الخلفي (الإنجليزية: Posterior cruciate ligament).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016118.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "superior-mesenteric-artery",
    "term_en": "Superior Mesenteric Artery",
    "term_ar": "شريان مساريقي علوي",
    "synonyms": [
      "Arteries, Superior Mesenteric",
      "Artery, Superior Mesenteric",
      "Mesenteric Arteries, Superior",
      "Superior Mesenteric Arteries"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A large vessel supplying the whole length of the small intestine except the superior part of the duodenum. It also supplies the cecum and the ascending part of the colon and about half the transverse part of the colon. It arises from the anterior surface of the aorta below the celiac artery at the level of the first lumbar vertebra.",
    "arabic_definition": "الشريان المساريقي العلوي (الإنجليزية: Superior mesenteric artery) هو فرع أمامي من الأبهر البطني يبدأ من على بعد 1 سم من الشريان البطني.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017538.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "superior-cervical-ganglion",
    "term_en": "Superior Cervical Ganglion",
    "term_ar": "العقدة الرقبية العلوية",
    "synonyms": [
      "Cervical Ganglion, Superior",
      "Ganglion, Superior Cervical",
      "Superior Cervical Ganglia",
      "Cervical Ganglia, Superior",
      "Ganglia, Superior Cervical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The largest and uppermost of the paravertebral sympathetic ganglia.",
    "arabic_definition": "العقدة الرقبية العلوية (SCG) هي العقدة العلوية والأكبر من العقد الودية الرقبية للجذع الودي. من المحتمل أنها تشكلت من خلال اتحاد أربع عقد متعاطفة من الأعصاب الشوكية العنقية C1-C4. (Superior Cervical Ganglion)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017783.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "middle-cerebellar-peduncle",
    "term_en": "Middle Cerebellar Peduncle",
    "term_ar": "سويقة مخيخية متوسطة",
    "synonyms": [
      "Cerebellar Peduncle, Middle",
      "Cerebellar Peduncles, Middle",
      "Middle Cerebellar Peduncles",
      "Peduncle, Middle Cerebellar",
      "Peduncles, Middle Cerebellar",
      "Brachia Pontis",
      "Pontis, Brachia",
      "Brachium Pontis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "WHITE MATTER consisting of a large bundle of paired fibers originating in the pontine nuclei in the pre pontis and the nucleus reticularis tegmenti pontis projecting to the contralateral cerebral cortex.",
    "arabic_definition": "السُّوَيقَةُ المُخَيخِيَّةُ المُتوسطَة (الذراع الجسرية) هي هياكل مزدوجة (أيسر وأيمن) تربط المخيخ بالجسر وتتكون بالكامل من الألياف الجابذة، أي الألياف الواردة. تنشأ الألياف من النوى الجسرية إلى نصف الكرة المعاكس للقشرة المخيخيّة. (Middle Cerebellar Peduncle)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065837.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retinal-pigment-epithelium",
    "term_en": "Retinal Pigment Epithelium",
    "term_ar": "ظهارة الشبكية المصطبغة",
    "synonyms": [
      "Pigment Epithelium, Retinal",
      "Epithelium, Retinal Pigment"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The single layer of pigment-containing epithelial cells in the RETINA, situated closely to the tips (outer segments) of the RETINAL PHOTORECEPTOR CELLS. These epithelial cells are macroglia that perform essential functions for the photoreceptor cells, such as in nutrient transport, phagocytosis of the shed photoreceptor membranes, and ensuring retinal attachment.",
    "arabic_definition": "ظهارة الشبكية المصطبغة أو الظهارة الصباغية الشبكية أو الظهارة المصطبغة الشبكية هي طبقة من الخلايا ذات الصبغة موجودة مجاورة للمنطقة الحسية العصبية من الشبكية والتي تغذي الخلايا البصرية الشبكية، وترتبط بقوة بالخلايا البصرية المشيمية الواقعة فوقها والخلايا البصرية الشبكية الواقعة تحتها. (Retinal Pigment Epithelium)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055213.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blood-spinal-cord-barrier",
    "term_en": "Blood-Spinal Cord Barrier",
    "term_ar": "الحاجز الدموي-الحبلي الشوكي",
    "synonyms": [
      "Spinal Cord-Blood Barrier",
      "Blood–spinal cord barrier"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A specialized transport barrier between the PARENCHYMAL TISSUE of the SPINAL CORD and the surrounding BLOOD VESSELS.",
    "arabic_definition": "حاجز الحبل الشوكي الدموي (الإنجليزية: Blood-Spinal Cord Barrier) هو مكوِّن من حاجز الجهاز العصبي المركزي الدموي، وغالبًا ما يتم تبسيطه من قبل الأدب الطبي باعتباره حاجز دموي دماغي، ومع ذلك قد يتم اختراق حاجز الحبل الشوكي في الدم بشكل مستقل عن الحاجز بين الدم والدماغ، كما هو موضح في الاختبار المعملي لعلاج التصلب المتعدد.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000099130.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "islets-of-langerhans",
    "term_en": "Islets of Langerhans",
    "term_ar": "جزيرات البنكرياس",
    "synonyms": [
      "Langerhans Islets",
      "Nesidioblasts",
      "Nesidioblast",
      "Pancreas, Endocrine",
      "Endocrine Pancreas",
      "Islet Cells",
      "Cell, Islet",
      "Cells, Islet"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Irregular microscopic structures consisting of cords of endocrine cells that are scattered throughout the PANCREAS among the exocrine acini. Each islet is surrounded by connective tissue fibers and penetrated by a network of capillaries. There are four major cell types. The most abundant beta cells (50-80%) secrete INSULIN. Alpha cells (5-20%) secrete GLUCAGON. PP cells (10-35%) secrete PANCREATIC POLYPEPTIDE. Delta cells (~5%) secrete SOMATOSTATIN.",
    "arabic_definition": "جُزَيراتُ البَنْكرياس أو جُزَيْرَات لاَنْغَرْهَانْس (الإنجليزية: Islets of Langerhans) هي عبارة عن مجموعات صغيرة من خلايا البنكرياس تظهر على هيئة بقع صغيرة مختلفة في الشكل والوظيفة عما حولها من خلايا البنكرياس ولذلك تم تسميتها بالجزر، وأول من وجد هذه الخلايا تحت الميكروسكوب هو عالم التشريح والأمراض الألماني پاول لانگرهانس عام 1869 و هو في سن 22 عاما، وتشكل الجزر 1-2% من كتلة البنكرياس، وكتلة الجزر مجتمعة تقدر ب 1-1.5 غرام، وعدد الجزر في بنكرياس الشخص البالغ يقدر بحوالي مليون جزيرة، ويبلغ قطر كل منها 0.2 مم، وهي معزولة عن أنسجة البنكرياس بنسيج ليفي رفيع.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007515.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "superior-vena-cava",
    "term_en": "Superior Vena Cava",
    "term_ar": "وريد أجوف علوي",
    "synonyms": [
      "Superior Vena Cavas",
      "Vena Cavas, Superior"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The venous trunk which returns blood from the head, neck, upper extremities and chest.",
    "arabic_definition": "الوريد الأجوف العلوي (بالإنجليزية: Superior vena cava) وعاء دموي لهُ قطر كبير، ولكنه قصير، وهو الوريد الذي ينقل الدم من الطرف العلوي من الجسم إلى الأذين الأيمن من القلب. ويوجد في المنصف الأمامي العلوي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014683.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "inferior-vena-cava",
    "term_en": "Inferior Vena Cava",
    "term_ar": "وريد أجوف سفلي",
    "synonyms": [
      "Inferior Vena Cavas",
      "Vena Cavas, Inferior"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The venous trunk which receives blood from the lower extremities and from the pelvic and abdominal organs.",
    "arabic_definition": "الوريد الأجوف السفلي وعاء دموي يقوم بحمل الدم الوريدي من الأحشاء والطرفين السفليين إلى القلب. يحمل الدم غير النقي من الاطراف السفلى واعضاء الحوض والخصيتان والكليتان والكبد. (Inferior Vena Cava)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014682.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "circle-of-willis",
    "term_en": "Circle of Willis",
    "term_ar": "دائرة شريانية دماغية",
    "synonyms": [
      "Willis' Circle",
      "Circle, Willis'",
      "Cerebral Arterial Circle",
      "Arterial Circle, Cerebral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A polygonal anastomosis at the base of the brain formed by the internal carotid (CAROTID ARTERY, INTERNAL), proximal parts of the anterior, middle, and posterior cerebral arteries (ANTERIOR CEREBRAL ARTERY; MIDDLE CEREBRAL ARTERY; POSTERIOR CEREBRAL ARTERY), the anterior communicating artery and the posterior communicating arteries.",
    "arabic_definition": "الدَّائِرَةُ الشِّرْيانِيَّةُ الدِّمَاغِيَّة أو دائرة ويليس (الإنجليزية: Circle of Willis) هي دائرة شرايين تزوّد الدماغ بالدم. يعود اسم دائرة الشرايين هذه للطبيب الإنجليزي توماس ويليس (1621-1675).",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002941.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "loop-of-henle",
    "term_en": "Loop of Henle",
    "term_ar": "التواء هنلي",
    "synonyms": [
      "Henle Loop",
      "Descending Limb of Loop of Henle",
      "Ascending Limb of Loop of Henle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The U-shaped portion of the renal tubule in the KIDNEY MEDULLA, consisting of a descending limb and an ascending limb. It is situated between the PROXIMAL KIDNEY TUBULE and the DISTAL KIDNEY TUBULE.",
    "arabic_definition": "عروة هنلي أو التواء هنلي هو جزء من الوحدة الأنبوبية الكلوية أو ما يسمى النيفرون متصل بالأنابيب الملتوية القريبة والأنابيب الملتوية البعيدة تساعد في تمرير الفضلات عبرها وامتصاص المواد المفيدة بعد تصفية الدم من كل ما فيه يمر خليط المواد عبر انحناء هنلي ويتم امتصاص المواد المفيدة وترك الضار يمر حتى يصل إلى الأنبوب الجامع الذي يجمعها ويمررها إلى حوض الكلية. تم تسميتها على اسم مكتشفها، عالم التشريح الألماني فريدرش غوستاف ياكوب هنلي، الوظيفة الرئيسية لعروة هينلي هي إنشاء تدرج تركيز في لب الكلية عن طريق نظام تضاعف التيار المعاكس، الذي يستخدم مضخات الشوارد، تخلق عروة هنلي منطقة ذات تركيز عالي من اليوريا عميقًا في لب الكلية، بالقرب من القناة الحليمية في نظام القنوات الجامعة. (Loop of Henle)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008138.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "organ-of-corti",
    "term_en": "Organ of Corti",
    "term_ar": "عضو كورتي",
    "synonyms": [
      "Corti Organ",
      "Corti's Organ",
      "Cortis Organ",
      "Organ, Corti's",
      "Spiral Organ",
      "Organ, Spiral",
      "Organs, Spiral",
      "Spiral Organs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The spiral EPITHELIUM containing sensory AUDITORY HAIR CELLS and supporting cells in the cochlea. Organ of Corti, situated on the BASILAR MEMBRANE and overlaid by a gelatinous TECTORIAL MEMBRANE, converts sound-induced mechanical waves to neural impulses to the brain.",
    "arabic_definition": "عضو كورتي (الاسم العلمي: organum spirale) أو العضو الحلزوني، هو الجهاز المُستقبل للسمع ويقع ضمن القوقعة في الأذن الداخلية عند الثدييات. يسمح وجود الصف المتنوع للغاية من الخلايا الظهارية بنقل الإشارات السمعية إلى مكان جهد فعل النبضات العصبية. (Organ of Corti)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009925.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bundle-of-his",
    "term_en": "Bundle of His",
    "term_ar": "حزمة هيس",
    "synonyms": [
      "His Bundle",
      "Atrioventricular Bundle",
      "Atrioventricular Bundles",
      "Bundle, Atrioventricular",
      "Bundles, Atrioventricular",
      "Kent-His Bundle",
      "Bundle, Kent-His",
      "Right Bundle Branch of His"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Small band of specialized CARDIAC MUSCLE fibers that originates in the ATRIOVENTRICULAR NODE and extends into the membranous part of the interventricular septum. The bundle of His, consisting of the left and the right bundle branches, conducts the electrical impulses to the HEART VENTRICLES in generation of MYOCARDIAL CONTRACTION.",
    "arabic_definition": "حزمة هيس أو الحزمة الأذينية البطينية هي مجموعة من خلايا عضلة القلب متخصصة في النقل الكهربي للنبضات من العقدة الأذينية البطينية (الواقعة بين الاذينين والبطينين) إلى قمة الفروع الحزمية. تؤدي الفروع الحزمية بعد ذلك إلى ألياف بركنجي التي تمد البطينين بالنبضات الكهربية مما يؤدي إلى الانقباض البطيني. (Bundle of His)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002036.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sinus-of-valsalva",
    "term_en": "Sinus of Valsalva",
    "term_ar": "جيب أبهري",
    "synonyms": [
      "Valsalva Sinus",
      "Aortic Sinus",
      "Sinus, Aortic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The dilatation of the aortic wall behind each of the cusps of the aortic valve.",
    "arabic_definition": "الجيب الأبهري هو واحد من المناطق الواسعة تشريحيًا للأبهر الصاعد، ويقع الجيب أعلى الصمام الأبهري مباشرةً. بشكلٍ عام هنالك ثلاثة جيوب أبهرية وتتموضع كجيب أمامي أيسر، وجيب أمامي أيمن، وجيب خلفي. (Sinus of Valsalva)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012850.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ampulla-of-vater",
    "term_en": "Ampulla of Vater",
    "term_ar": "أمبولة فاتر",
    "synonyms": [
      "Vater Ampulla",
      "Vater's Ampulla",
      "Ampulla, Vater's",
      "Vaters Ampulla",
      "Hepatopancreatic Ampulla",
      "Ampulla, Hepatopancreatic",
      "Ampullas, Hepatopancreatic",
      "Hepatopancreatic Ampullas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dilation of the duodenal papilla that is the opening of the juncture of the COMMON BILE DUCT and the MAIN PANCREATIC DUCT, also known as the hepatopancreatic ampulla.",
    "arabic_definition": "أمبولة فاتر(1) هي جزءٌ متوسعٌ يتكون من اتحاد قناة البنكرياس والقناة الصفراوية المشتركة، وتقع تحديدًا عند الحليمة الإثناعشرية الكبيرة. تُعتبر أمبولة فاتر علامةً مهمةً لمنتصف المسافة على طول الجزء الثاني من الاثناعشر، والتي تُشير إلى الانتقال التشريحي من المعى الأمامي إلى المعى المتوسط، وبالتالي تُمثل النقطة التي يتوقف عندها الجذع البطني عن تزويد المعى، حيثُ يحل محله الشريان المساريقي العلوي. (Ampulla of Vater)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014670.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sphincter-of-oddi",
    "term_en": "Sphincter of Oddi",
    "term_ar": "عاصرة أودي",
    "synonyms": [
      "Oddi Sphincter",
      "Oddi's Sphincter",
      "Oddis Sphincter",
      "Sphincter, Oddi's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sphincter of the hepatopancreatic ampulla within the duodenal papilla. The COMMON BILE DUCT and main pancreatic duct pass through this sphincter.",
    "arabic_definition": "عاصرة أودي (الإنجليزية: Sphincter of Oddi) وتسمى ايضاً (العضلة العاصرة الكبدية) وهي صمام العضلات التي تتحكم في تدفق العصارات الهضمية (الصفراء وعصير البنكرياس) من خلال أمبولة فاتر في الجزء الثاني من الاثنا عشر. وأطلق عليها اسم أودي تيمناً بعالم التشريح الفيزولوجي الإيطالي روجيرو أودي.",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009803.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "disease",
    "term_en": "Disease",
    "term_ar": "مرض",
    "synonyms": [
      "Diseases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A definite pathologic process with a characteristic set of signs and symptoms. It may affect the whole body or any of its parts, and its etiology, pathology, and prognosis may be known or unknown.",
    "arabic_definition": "المرض أو الداء أو العلة، هو حالة غير طبيعية تصيب الجسد البشري أو العقل البشري محدثة انزعاجاً، أو ضعفاً في الوظائف، أو إرهاقاً للشخص المصاب مع إزعاج. يستخدم هذا المصطلح أحيانا للدلالة على أي أذى جسدي، إعاقة، متلازمة، أعراض غير مريحة، سلوك منحرف، تغيرات لا نمطية في البنية والوظيفة، وفي سياقات أخرى قد يستلزم الأمر التمييز بين هذه الأمور كلها. (Disease)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004194.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "death",
    "term_en": "Death",
    "term_ar": "موت",
    "synonyms": [
      "End Of Life",
      "Determination of Death",
      "Near-Death Experience",
      "Cardiac Death",
      "Death, Cardiac"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Irreversible cessation of all bodily functions, manifested by absence of spontaneous breathing and total loss of cardiovascular and cerebral functions.",
    "arabic_definition": "الموت هو حالة توقف الكائنات الحية نهائيًا عن النمو، والاستقلاب، والنشاطات الوظيفية الحيوية الأخرى مثل التنفس، والأكل، والشرب، والتفكير، والحركة، والمشاعر، وجميع النشاطات الحيوية ولا يمكن للأجساد الميتة أن ترجع لمزاولة النشاطات والوظائف الآنفة الذكر. (Death)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003643.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pain",
    "term_en": "Pain",
    "term_ar": "ألم",
    "synonyms": [
      "Suffering, Physical",
      "Physical Suffering",
      "Physical Sufferings",
      "Sufferings, Physical",
      "Ache",
      "Aches",
      "Pain, Burning",
      "Burning Pain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An unpleasant sensation induced by noxious stimuli which are detected by NERVE ENDINGS of NOCICEPTIVE NEURONS.",
    "arabic_definition": "الألم هو «تجربة حسية وعاطفية بغيضة متعلقة بضرر نسيجي فعلي أو كامن، أو موصوفة بمصطلحات تمثل ضرر كهذا». الألم عادةً هو إحساس أو شعور سلبي بعدم السعادة والمعاناة. (Pain)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010146.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polyps",
    "term_en": "Polyps",
    "term_ar": "مديخ",
    "synonyms": [
      "Polyp",
      "Polyp (zoology)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Discrete abnormal tissue masses that protrude into the lumen of the DIGESTIVE TRACT or the RESPIRATORY TRACT. Polyps can be spheroidal, hemispheroidal, or irregular mound-shaped structures attached to the MUCOUS MEMBRANE of the lumen wall either by a stalk, pedunculus, or by a broad base.",
    "arabic_definition": "البولب (الإنجليزية: Polyp) أو السليلة أو المديخ هو طور مستطيل الشكل، يظهر في دورة الحياة كثير من الجوفمعويات، وفي كثير منها يتم تتابع الأجيال بينه وبين الشكل المدوزي، والبوليب هو الشكل السائد في المرجانيات والشقائق البحرية. (Polyps)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011127.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hernia",
    "term_en": "Hernia",
    "term_ar": "فتق",
    "synonyms": [
      "Hernias",
      "Enterocele"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Protrusion of tissue, structure, or part of an organ through the bone, muscular tissue, or the membrane by which it is normally contained. Hernia may involve tissues such as the ABDOMINAL WALL or the respiratory DIAPHRAGM. Hernias may be internal, external, congenital, or acquired.",
    "arabic_definition": "الفتق هو بروز عضو أو غطاء العضو من خلال جدار التجويف الذي عادة ما يحتويه. والفتق الفجوي يحدث عندما تبرز المعدة في التجويف الصدري من خلال فتحة المريء الموجودة في الحجاب الحاجز. (Hernia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006547.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bulimia",
    "term_en": "Bulimia",
    "term_ar": "نهام عصبي",
    "synonyms": [
      "Bulimias",
      "Binge Eating",
      "Eating, Binge"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Eating an excess amount of food in a short period of time, as seen in the disorder of BULIMIA NERVOSA. It is caused by an abnormal craving for food, or insatiable hunger also known as ox hunger.",
    "arabic_definition": "النهام العصبي أو النُهامُ العُصَابي أو الضَّوْر أو السُّعَار أو السُّحت أو بوليميا أو الشره العصبي أو الشره المرضي العصبي هو أحد اضطرابات الأكل يتمثّل بالشراهة عند تناول الطعام التي تُتبع بالتطهير أو التفريغ. يُقصد بالشّرَه تناول كميات كبيرة من الطعام خلال مُدّة زمنية قصيرة. (Bulimia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002032.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ascites",
    "term_en": "Ascites",
    "term_ar": "استسقاء بطني",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Accumulation or retention of free fluid within the peritoneal cavity.",
    "arabic_definition": "استسقاء بطني أو الاستسقاء أو الحَبَن أو استسقاء كيسي أو الاستسقاء الزِّقّي أو الخزب البطني -تسمية قديمة لم تعد تستخدم-، (بالإنجليزيّة: Ascites من اللاتينيّة المتأخرة، من اليونانيّة: askites المشتقة من askos التي تعني: قربة النبيذ، أو زِقّ النبيذ.) إحدى المصطلحات المتعلّقة بطب الجهاز الهضمي. يشير المصطلح إلى حالة تجمع السوائل في جوف الصفاق (التجويف البريتوني).",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001201.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fistula",
    "term_en": "Fistula",
    "term_ar": "ناسور",
    "synonyms": [
      "Fistulas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal communication most commonly seen between two internal organs, or between an internal organ and the surface of the body.",
    "arabic_definition": "النَّاسُور أو النَّاصُور (الجمع: نَوَاسِيرٌ) هو اتصال غير طبيعي أو ممر بين فراغين أجوفين (من الناحية التقنية، هما سطحان من نسيج طلائي)، مثل الأوعية الدموية أو الأمعاء أو أعضاء مجوفة أخرى. عادة ما تحدث النواسير بسبب إصابة أو جراحة، ولكنها يمكن أيضا أن تنتج عن عدوى أو التهاب. (Fistula)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005402.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fatigue",
    "term_en": "Fatigue",
    "term_ar": "إعياء",
    "synonyms": [
      "Lassitude"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The state of weariness following a period of exertion, mental or physical, characterized by a decreased capacity for work and reduced efficiency to respond to stimuli.",
    "arabic_definition": "الإعياء أو التعب (الإنجليزية: Fatigue) هو مصطلح يصف الشعور العام بالتعب أو الضعف لا تُحَل مع الراحة أو النوم. في الاستخدام العام، يكون التعب مرادف للتعب الشديد أو الإرهاق الذي يتبع عادة النشاط البدني أو العقلي المطول.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005221.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gagging",
    "term_en": "Gagging",
    "term_ar": "كعام",
    "synonyms": [
      "Reflex, Pharyngeal",
      "Pharyngeal Reflex",
      "Gag"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Contraction of the muscle of the PHARYNX caused by stimulation of sensory receptors on the SOFT PALATE, by psychic stimuli, or systemically by drugs.",
    "arabic_definition": "الكِعَام هو عنصر أو جهاز مصمم لمنع الكلام ويغلب ذلك لمنع المُقيَّد من طلب المساعدة وإبقاء مرتديه صامتًا. يجري ذلك بسد الفم جزئيًا أو كليًا أو محاولة منع اللسان أو الشفتين أو الفك من الحركة في أنماط الكلام الطبعية. (Gagging)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005683.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chills",
    "term_en": "Chills",
    "term_ar": "نافض",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sudden sensation of being cold. It may be accompanied by SHIVERING.",
    "arabic_definition": "النافض أو النفضان (الإنجليزية: Chills) هو ارتجاف يحدث خلال حمى مرتفعة، ويحدث بسبب السيتوكينات والبروستاغلاندينات (وسائط التهابية) التي تنتج كجزء من ردة الفعل المناعية للجسم، وترفع نقطة تنظيم حرار الجسم البشري في منطقة الوطاء في الدماغ. يدعى النافض الشديد مع ارتعاد عنيف بالصمل (الإنجليزية: rigors).",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D023341.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "atrophy",
    "term_en": "Atrophy",
    "term_ar": "ضمور",
    "synonyms": [
      "Atrophies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Decrease in the size of a cell, tissue, organ, or multiple organs, associated with a variety of pathological conditions such as abnormal cellular changes, ischemia, malnutrition, or hormonal changes.",
    "arabic_definition": "الضمور أو الضمور التغذوي (الإنجليزية: atrophy) هو انكماش أو تقلص في حجم جزء من الجسم، أوخلية، أوعضو، أو نسيج. قد يحدث الضمور نتيجة لنقص عدد الخلايا أو لتقلص حجمها لفقدان مواد من داخلها، أو نتيجة لكليهما.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001284.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pallor",
    "term_en": "Pallor",
    "term_ar": "شحوب",
    "synonyms": [
      "Pallors"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clinical manifestation consisting of an unnatural paleness of the skin.",
    "arabic_definition": "الشُحوب هو لون شاحب من الجلد يمكن أن يحدث بسبب المرض، الصدمة العاطفية، الإجهاد، استخدام المنشطات، أو فقر الدم، وهو نتيجة لانخفاض كمية الهيموجلوبين وقد يكون مرئيا أيضا كشحوب في الملتحمة للعيون عند الفحص البدني. الشحوب أكثر وضوحا على الوجه وكف اليدين. (Pallor)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010167.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "facies",
    "term_en": "Facies",
    "term_ar": "سحنة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The appearance of the face that is often characteristic of a disease or pathological condition, as the elfin facies of WILLIAMS SYNDROME or facies of DOWN SYNDROME. (Random House Unabridged Dictionary, 2d ed)",
    "arabic_definition": "السحنة هي تعبير عن الملامح العامة (الخواص) العامة للصخر، وذلك من الناحيتين الناحية الصخرية والحيوية، والتي تعكس الظروف البيئية التي أثرت عليه أثناء تكوينه. (Facies)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019066.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dorsolateral-prefrontal-cortex",
    "term_en": "Dorsolateral Prefrontal Cortex",
    "term_ar": "قشرة الفص الجبهي الظهراني",
    "synonyms": [
      "Cortex, Dorsolateral Prefrontal",
      "Dorsolateral Prefrontal Cortices",
      "Prefrontal Cortex, Dorsolateral",
      "DLPFC",
      "Brodmann Area 9",
      "Area 9, Brodmann",
      "Brodmann's Area 9",
      "Area 9, Brodmann's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The upper surfaces of the prefrontal cortex comprising the rostral parts of the superior frontal gyrus and the middle frontal gyrus. It is involved in EXECUTIVE FUNCTION.",
    "arabic_definition": "قشرة الفص الجبهي الظهراني (DLPFC أو DL-PFC) هي منطقة في قشرة الفص الجبهي لدماغ البشر والرئيسيات الأخرى. وهو واحد من أحدث الأجزاء المشتقة من الدماغ البشري. (Dorsolateral Prefrontal Cortex)",
    "specialty": "Anatomy",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000087643.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cadaver",
    "term_en": "Cadaver",
    "term_ar": "جثة",
    "synonyms": [
      "Cadavers",
      "Corpse",
      "Corpses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dead body, usually a human body.",
    "arabic_definition": "الجثة أو الجُثمان هي جسم الإنسان الميت. ويستخدمه طلاب الطب والأطباء وغيرهم من العلماء لدراسة التشريح، وتحديد مواقع المرض وتحديد أسباب الوفاة، وتوفير الأعضاء التي يحتاجها الإنسان الحي. (Cadaver)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002102.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hiccup",
    "term_en": "Hiccup",
    "term_ar": "فواق",
    "synonyms": [
      "Hiccups",
      "Hiccough",
      "Hiccoughs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A spasm of the diaphragm that causes a sudden inhalation followed by rapid closure of the glottis which produces a sound.",
    "arabic_definition": "الفُواق أو الحازوقة أو البوفهاق أو الزغطة أو الشهاق، هي انقباض لا إرادي (رعشة رمعية) في الحجاب الحاجز التي قد تتكرر عدة مرات في الدقيقة الواحدة. تتزامن مع رد فعل عكسي متمثل باغلاق لسان المزمار في الحلق وينتج عنه صوت مميز يعرف بالفواق، والحالة ناتجة عن أي سبب يؤدي إلى تهيج في الحجاب الحاجز أو العصب الحائر أو لسان المزمار كما تحدث عند وجود بعض الاضطرابات الأيضية داخل الجسم، يعتقد بعض علماء الأحياء أن رد الفعل هذا هو من بقايا نمط التنفس لدى البرمائيات كالضفادع وغيرها تم توريثها للثديات أثناء عملية التطور. (Hiccup)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006606.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nausea",
    "term_en": "Nausea",
    "term_ar": "غثيان",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An unpleasant sensation in the stomach usually accompanied by the urge to vomit. Common causes are early pregnancy, sea and motion sickness, emotional stress, intense pain, food poisoning, and various enteroviruses.",
    "arabic_definition": "الغثيان هو إحساس بالضيق وعدم الراحة في الجزء العلوي من المعدة مع رغبة غير إرادية في التقيؤ. غالبًا يتبع الغثيان بالتقيؤ، ولكن يمكن أحيانًا أن يحدث الغثيان دون تقيؤ. (Nausea)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009325.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flatulence",
    "term_en": "Flatulence",
    "term_ar": "إطلاق الريح",
    "synonyms": [
      "Flatus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Production or presence of gas in the gastrointestinal tract which may be expelled through the anus.",
    "arabic_definition": "يُعَرَّف إطلاق الريح طبيًا بطرد الغازات من الشرج. تجمع هذه الغازات في الجهاز الهضمي يسمى التّطبُّل أو تطبّل البطن أو الانتفاخ أو النُّفاخ أو الاندياق أو امتلاء البطن بالغازات أو غازات الأمعاء. (Flatulence)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005414.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diarrhea",
    "term_en": "Diarrhea",
    "term_ar": "إسهال",
    "synonyms": [
      "Diarrheas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An increased liquidity or decreased consistency of FECES, such as running stool. Fecal consistency is related to the ratio of water-holding capacity of insoluble solids to total water, rather than the amount of water present. Diarrhea is not hyperdefecation or increased fecal weight.",
    "arabic_definition": "الإسهال هي حالة توجد فيها ثلاث حركات أمعاء فضفاضة، سائلة، أو مائية على الأقل كل يوم. غالبا ما يستمر لبضعة أيام ويمكن أن يؤدي إلى الجفاف بسبب فقدان السوائل. (Diarrhea)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003967.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "jaundice",
    "term_en": "Jaundice",
    "term_ar": "يرقان",
    "synonyms": [
      "Icterus",
      "Jaundice, Hemolytic",
      "Hemolytic Jaundice",
      "Hemolytic Jaundices",
      "Jaundices, Hemolytic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clinical manifestation of HYPERBILIRUBINEMIA, characterized by the yellowish staining of the SKIN; MUCOUS MEMBRANE; and SCLERA. Clinical jaundice usually is a sign of LIVER dysfunction.",
    "arabic_definition": "اليرقان (الإنجليزية: Jaundice)، المعروف أيضًا بالصفار، أو الاصفرار، هو تصبغ مصفر أو مخضر للجلد وبياض العين بسبب ارتفاع مستويات البيليروبين. اليرقان عند البالغين هو عادة علامة تشير إلى وجود أمراض كامنة تنطوي على استقلاب الهيم غير الطبيعي، ضعف الكبد أو انسداد القناة الصفراوية.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007565.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "headache",
    "term_en": "Headache",
    "term_ar": "صداع",
    "synonyms": [
      "Headaches",
      "Cephalalgia",
      "Cephalalgias",
      "Cephalgia",
      "Cephalgias",
      "Cephalodynia",
      "Cephalodynias",
      "Cranial Pain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The symptom of PAIN in the cranial region. It may be an isolated benign occurrence or manifestation of a wide variety of HEADACHE DISORDERS.",
    "arabic_definition": "الصداع هو ألم في الرأس أو الفروة أو الرقبة، والسبب الرئيسي لكافة أنواع الصداع غير معلوم وقد يتحسن معظم الأشخاص لو غيروا أسلوب حياتهم وتدربوا على كيفية الاسترخاء أو بتناولهم أدوية له. وهناك الصداع التوتري الذي سببه تصلب العضلات بالكتفين أو الرقبة أو بفروة الرأس أو الفك. (Headache)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asphyxia",
    "term_en": "Asphyxia",
    "term_ar": "اختناق",
    "synonyms": [
      "Asphyxias",
      "Suffocation",
      "Suffocations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pathological condition caused by lack of oxygen, manifested in impending or actual cessation of life.",
    "arabic_definition": "الاختناق هي حالة من النقص الشديد في المعروض من الأكسجين إلى الجسم والذي ينشأ من عدم القدرة على التنفس بشكل طبيعي. على سبيل المثال من أنواع الاختناق هو الاختناق بسبب انسداد مجرى الهواء choking. (Asphyxia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001237.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemorrhage",
    "term_en": "Hemorrhage",
    "term_ar": "نزف",
    "synonyms": [
      "Hemorrhages",
      "Bleeding"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bleeding or escape of blood from a vessel.",
    "arabic_definition": "النزف أو إدماء (الإنجليزية: Bleeding) هو فقدان الدم عن طريق خروج الدم من الأوعية الدموية إلى خارج الدورة الدموية. استمرار هذه الحالة يؤدي إلى نقص في كمية الدم المتوفرة في الدورة الدموية. (Hemorrhage)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006470.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heartburn",
    "term_en": "Heartburn",
    "term_ar": "حرقة الفؤاد",
    "synonyms": [
      "Pyrosis",
      "Pyroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Substernal pain or burning sensation, usually associated with regurgitation of gastric juice into the esophagus.",
    "arabic_definition": "حرقة الفؤاد (الإنجليزية: Heartburn)، حرقة القلب، أو الحرقان، هو إحساس حارق يشعر به خلف عظمة الصدر. هو أحد الأعراض التي ترتبط عادة بالارتجاع الحمضي، وعادة ما يحدث بسبب الطعام.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006356.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "snoring",
    "term_en": "Snoring",
    "term_ar": "شخير",
    "synonyms": [
      "Snorings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rough, noisy breathing during sleep, due to vibration of the uvula and soft palate.",
    "arabic_definition": "الشخير (الإنجليزية: Snoring) صوت الذي يصدره النائم ويحدث الشخير نتيجة لضيق في ممرات التنفس وتختلف درجته من غطيط له صوت هادئ ويحدث هذا مع غالبية الناس حيث يكون وضع الرأس بالنسبة للعنق غير مضبوط وقد يكون للشخير صوت عالي يشبه الحشرجة وهذا النوع قد يكون مصحوبا بتوقف متقطع في التنفس واضطراب النوم. الشخير هو اهتزاز في الأجزاء التنفسية وهو الصوت الناتج عن حركة الهواء المتعسرة خلال التنفس أثناء النوم.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012913.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "drowning",
    "term_en": "Drowning",
    "term_ar": "غرق",
    "synonyms": [
      "Drownings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Death that occurs as a result of anoxia or heart arrest, associated with immersion in liquid.",
    "arabic_definition": "الغرق هو موت ينتج عن الاختناق بالماء أو السوائل الأخرى، ويمكن للشخص الذي لا يعرف السباحة أن ينجو من الغرق بالطفو على سطح الماء، ويتحقق الطفو بالاستلقاء على الظهر، وترك الجسم في حالة استرخاء، وعادةً يفشل الشخص في التمكن من الطفو، ويكون السبب في هذه الحالة هو الخوف الذي يؤدي إلى تصلب الجسم وغطسه، وبعد الغطس بزمن يقل عن دقيقتين، يدخل الشخص في غيبوبة، ولكن الموت لا يحدث. الغرق، وفقا لمنظمة الصحة العالمية، هو السبب الرئيسي الثالث للوفاة في العالم، وهو ما يمثل 7٪ من جميع الوفيات الناجمة عن الإصابات ذات الصلة به (طبقا لتقديرات إحصائيات الوفيات غرقا 388,000 في عام 2004، باستثناء تلك التي تعزى إلى الكوارث الطبيعية، علماً بأن 96٪ من هذه الوفيات تحدث في البلدان المنخفضة والمتوسطة الدخل... (Drowning)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004332.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sneezing",
    "term_en": "Sneezing",
    "term_ar": "عطاس",
    "synonyms": [
      "Sneezings",
      "Sneeze"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The sudden, forceful, involuntary expulsion of air from the NOSE and MOUTH caused by irritation to the MUCOUS MEMBRANES of the upper RESPIRATORY TRACT.",
    "arabic_definition": "العطاس (ويُعرف أيضاً باسم الاستعطاس) هو طرد شبه ذاتي وقسري للهواء من الرئتين عبر الأنف والفم، وعادة ما ينتج عن تهيج غشاء الأنف المخاطي بفعل جسيمات غريبة. يطرد العطاس الهواء بقوة من الفم والأنف في حركة متفجرة وتشنجية لا إرادية. (Sneezing)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012912.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amenorrhea",
    "term_en": "Amenorrhea",
    "term_ar": "انقطاع الحيض",
    "synonyms": [
      "Postpartum Amenorrhea",
      "Amenorrhea, Postpartum",
      "Postpartum Amenorrheas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Absence of menstruation.",
    "arabic_definition": "اِنْقِطاع الحَيْضِ أو غَيْبة الطَّمْث أو ضَهَى انقطاع نزول دم الحيض عند المرأة البالغة. ويحدث بشكل طبيعي خلال فترة الحمل والإرضاع، وتعتبر الرضاعة من الأشكال الأولية لموانع الحمل الطبيعية والتي تعرف باسم طريقة منع الحمل من خلال انقطاع الحيض، أما في سنوات عدم القدرة على الإنجاب فينقطع الحيض وذلك خلال مرحلة الطفولة ومرحلة اليأس. (Amenorrhea)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000568.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prolapse",
    "term_en": "Prolapse",
    "term_ar": "تدلي",
    "synonyms": [
      "Prolapses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The protrusion of an organ or part of an organ into a natural or artificial orifice.",
    "arabic_definition": "التدلي (الإنجليزية: Prolapse) يعني حرفيا \"الهبوط من الموضع الأصلي\"، في الطب هو هُبُوطُ عُضْو عن مَوْضِعِهِ السّوِيّ كالرحم. يُستخدم المصطلح للتعبير عن بروز الأعضاء من المهبل والمستقيم، أو لاختلال في صمامات القلب، أو في مرض الإنزلاق الغضروفي يحدث هبوط للفقرات.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011391.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gangrene",
    "term_en": "Gangrene",
    "term_ar": "غنغرينا",
    "synonyms": [
      "Gangrenes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Death and putrefaction of tissue usually due to a loss of blood supply.",
    "arabic_definition": "غنغرينا أو غَنْغَرِينَة أو المَوات أو الأُكال أو الغرغرينا (الإنجليزية: Gangrene) هي نوع من أنواع موت الأنسجة الناجم عن عدم كفاية إمدادات الدم. وقد تشمل الأعراض تغيرًا في لون الجلد إلى الأحمر أو الأسود والخدر والتورم والألم وبرودة الجلد ووقوعه، وحدوث الغنغرينا في الأقدام والأيدي هو الأكثر شيوعا، وقد تظهر أنواع معينة مصاحَبة بالحمى أو تعفن الدم.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005734.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "syndrome",
    "term_en": "Syndrome",
    "term_ar": "متلازمة",
    "synonyms": [
      "Syndromes",
      "Symptom Cluster",
      "Clusters, Symptom",
      "Cluster, Symptom",
      "Symptom Clusters"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A characteristic symptom complex.",
    "arabic_definition": "المتلازمة أو تناذر هي مجموعة من العلامات والأعراض الطبية المرتبطة مع بعضها والمتعلقة غالبًا بمرض أو اضطراب معين. الكلمة مشتقة من اليونانية «سيندرومون»، وتعني «تزامن». (Syndrome)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013577.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cachexia",
    "term_en": "Cachexia",
    "term_ar": "دنف",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "General ill health, malnutrition, and weight loss, usually associated with chronic disease.",
    "arabic_definition": "الدَنَف أو هُزال أو الحَرَض هو فقدان الوزن، ضمور العضلات والتعب، وضعف وفقدان كبير للشهية عند شخص لا يسعى بنشاط إلى إنقاص وزنه. التعريف الرسمي للدنف هو نقصان كتلة الجسم، مع تراكم أقل للأنسجة الدهنية والذي لا يمكن عكسه غذائياً: فحتى لو تناول الشخص المريض مزيدًا من السعرات الحرارية فسيفقد جزءاً من كتلة الجسم اللحمية مما يعكس وجود مرض بالمقام الأول. (Cachexia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002100.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "halitosis",
    "term_en": "Halitosis",
    "term_ar": "بخر",
    "synonyms": [
      "Halitoses",
      "Bad breath"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An offensive, foul breath odor resulting from a variety of causes such as poor oral hygiene, dental or oral infections, or the ingestion of certain foods.",
    "arabic_definition": "البَخَر أو بخر الفم (الإنجليزية: Halitosis) هو مصطلح يصف رائحة الفم الكريهة أو رائحة النفس أو النفس الكريه أو النفس السيئ، أي الرائحة غير المستحبة المنبعثة خلال التنفس بغض النظر إن كان الفم هو مصدرها الأصلي أم لا. يسبب البخر تأثيرًا نفسيًا واجتماعيًا كبيرًا على المصابين به أو الذين يعتقدون ذلك (المصابين برهاب البخر)، كما أنه يحتل المركز الثالث بين الأسباب التي تدعو إلى طلب مساعدة طبيب الأسنان بعد تسوس الأسنان والمشاكل حول السنية.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006209.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asthenia",
    "term_en": "Asthenia",
    "term_ar": "ضعف",
    "synonyms": [
      "Weakness"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Clinical sign or symptom manifested as debility, or lack or loss of strength and energy.",
    "arabic_definition": "في الطب، الضعف أو الوهن هو عرض لمختلف الأمراض. الأسباب كثيرة ويمكن تقسيمها إلى أمراض لها ضعف عضلي حقيقي أو ملموس. (Asthenia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001247.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "infarction",
    "term_en": "Infarction",
    "term_ar": "احتشاء",
    "synonyms": [
      "Infarctions",
      "Infarct",
      "Infarcts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Formation of an infarct, which is NECROSIS in tissue due to local ISCHEMIA resulting from obstruction of BLOOD CIRCULATION, most commonly by a THROMBUS or EMBOLUS.",
    "arabic_definition": "الاحتشاء (الإنجليزية: Infarction) هو منطقة من النخر الإقفاري تنجم عن انقطاع أو انخفاض شديد في التروية الدموية، نتيجة انسداد الإمداد الشرياني أو، بدرجة أقل، انسداد التصريف الوريدي، مما يؤدي إلى تموت النسيج في المنطقة المصابة. ويُعد الاحتشاء من أهم العمليات المرضية في الممارسة السريرية، إذ يمثل الأساس المرضي للعديد من الأمراض الشائعة والخطيرة، مثل احتشاء عضلة القلب والسكتة الدماغية الإقفارية واحتشاء الأمعاء، كما يمكن أن يصيب معظم أعضاء الجسم متى تجاوز نقص التروية قدرة النسيج على تحمل نقص الأكسجين والركائز الاستقلابية اللازمة لاستمرار الحياة الخلوية.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007238.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hematoma",
    "term_en": "Hematoma",
    "term_ar": "ورم دموي",
    "synonyms": [
      "Hematomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A collection of blood outside the BLOOD VESSELS. Hematoma can be localized in an organ, space, or tissue.",
    "arabic_definition": "التورم الدموي (الإنجليزية: Hematoma أو Haematoma) هو مصطلح طبى يصف تجمعاً موضعياً للدم خارج الأوعية الدموية ويكون عادةً بصورته السائلة متخللاً الأنسجة. بينما الكدمة هي تجمعٌ دموعىٌ تزيد مساحته عن 10 ملم.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006406.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "virilism",
    "term_en": "Virilism",
    "term_ar": "تذكير",
    "synonyms": [
      "Masculinization",
      "Virilization",
      "Androgenization"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Development of male secondary SEX CHARACTERISTICS in the FEMALE. It is due to the effects of androgenic metabolites of precursors from endogenous or exogenous sources, such as ADRENAL GLANDS or therapeutic drugs.",
    "arabic_definition": "في علم الأحياء والطب، يشير مصطلح التذكير (الإنجليزية: Virilization) إلى التطور الأحيائي لمثنوية الشكل الجنسية، والتغيرات التي تميّز جسم الذكر عن جسم الأنثى. تحدث معظم تغيرات التذكير بفعل هرمونات الأندروجين. (Virilism)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014770.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dizziness",
    "term_en": "Dizziness",
    "term_ar": "دوخة",
    "synonyms": [
      "Dizzyness",
      "Lightheadedness",
      "Light-Headedness",
      "Orthostasis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An imprecise term which may refer to a sense of spatial disorientation, motion of the environment, or lightheadedness.",
    "arabic_definition": "الدوخة هو وصف عام لمجموعة من أحاسيس مثل تشوش، أو كشعور بالأغماء. يمكن أن يشير أيضا إلى اختلال التوازن أو شعور غير محدد، مثل التشوش أو الحماقة. (Dizziness)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004244.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fibrosis",
    "term_en": "Fibrosis",
    "term_ar": "تليف",
    "synonyms": [
      "Fibroses",
      "Cirrhosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any pathological condition where fibrous connective tissue invades any organ, usually as a consequence of inflammation or other injury.",
    "arabic_definition": "التليف، يُعرف أيضًا باسم التندب الليفي، هو شفاء مرضي للجروح يحل فيه النسيج الضام محل النسيج البرانشيمي الطبيعي إلى الحد الذي يخرج فيه عن السيطرة، ما يؤدي إلى تغير شكل الأنسجة تغيرًا كبيرًا وتشكل نسيج ندبي دائم. يشتبه في تسبب الأذيات المتكررة والالتهاب المزمن والترميم في التليف، إذ يؤدي التراكم المفرط العرضي لمكونات النسيج خارج الخلوي، مثل الكولاجين الذي تنتجه الخلايا الليفية، إلى تشكل ندبة ليفية دائمة. (Fibrosis)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005355.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "eructation",
    "term_en": "Eructation",
    "term_ar": "تجشؤ",
    "synonyms": [
      "Eructations",
      "Belching",
      "Belchings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The ejection of gas or air through the mouth from the stomach.",
    "arabic_definition": "التجشؤ أو التكريع هو إفراج غازات من الجهاز الهضمي (أساسا المريء والمعدة) عن طريق الفم. يرافقه عادة صوت مميز، وفي بعض الأحيان، ترافقه الرائحة. (Eructation)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004884.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysuria",
    "term_en": "Dysuria",
    "term_ar": "عسر التبول",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Painful URINATION. It is often associated with infections of the lower URINARY TRACT.",
    "arabic_definition": "عُسْر التبول (الإنجليزية: Dysuria) في الطب، بالأخص طب الجهاز البولي، يشير عسر التبول إلى التبول المؤلم، أو إلى صعوبة التبول أحيانا ولكنها نادرًا ما توصف بعسر التبول. عسر التبول هو واحد من مجموعة من أعراض المثانة الهائجة (يشار إليها أحيانا بأعراض الجهاز البولي السفلي)، والتي تشمل البوال الليلي، وكثرة التبول.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053159.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dyspepsia",
    "term_en": "Dyspepsia",
    "term_ar": "عسر الهضم",
    "synonyms": [
      "Dyspepsias",
      "Indigestion",
      "Indigestions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Impaired digestion, especially after eating.",
    "arabic_definition": "الهُضام أو عسر الهضم، المعروف أيضا باسم اضطراب المعدة (الإنجليزية: Indigestion) هو حالة طبية من ضعف الهضم. قد تشمل الأعراض امتلاء البطن العلوي، حرقة الفؤاد، غثيان، تجشؤ، أو ألم بطني علوي. (Dyspepsia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004415.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metaplasia",
    "term_en": "Metaplasia",
    "term_ar": "تحول نسيجي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition in which there is a change of one adult cell type to another similar adult cell type.",
    "arabic_definition": "التحول النسيجي أو الحؤول (Metaplasia) هو استبدال خلايا متمايزة من نوع معين بخلايا متمايزة من نوع آخر. الحؤول مختلف عن خلل التنسج كما أنه مختلف عن السرطان.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008679.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lithiasis",
    "term_en": "Lithiasis",
    "term_ar": "حصاة",
    "synonyms": [
      "Lithiases",
      "Calculosis",
      "Calculoses",
      "Calculus (concretion)",
      "حصاة (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by the formation of CALCULI and concretions in the hollow organs or ducts of the body. They occur most often in the gallbladder, kidney, and lower urinary tract.",
    "arabic_definition": "حصاة (جمعها حصى) هي عبارة عن تحجر للمواد، غالبا أملاح المعادن، وتتكون في عضو أو قناة في الجسم. يعرف تكوين الحصوات باسم التحصي. (Lithiasis)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020347.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "emaciation",
    "term_en": "Emaciation",
    "term_ar": "نحول",
    "synonyms": [
      "Emaciations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Clinical manifestation of excessive LEANNESS usually caused by disease or a lack of nutrition (MALNUTRITION).",
    "arabic_definition": "يتم تعريف النحول على أنه فقدان الوزن الشديد والنحافة غير الطبيعية بسبب فقدان الدهون تحت الجلد (الأنسجة الدهنية، أو الأنسجة الدهنية تحت الجلد) والعضلات في جميع أنحاء الجسم. ويؤثر على البشر والحيوانات؛ يمكن وصف الشخص الذي يعاني من الهزال بأنه «يهدر» أو «هزيل». (Emaciation)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004614.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperoxia",
    "term_en": "Hyperoxia",
    "term_ar": "فرط التأكسج",
    "synonyms": [
      "Hyperoxias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormal increase in the amount of oxygen in the tissues and organs.",
    "arabic_definition": "فَرْط التّأكسج هو حالة ناجِمة عن تَعَرُض الخلايا والأنسجة والأعضاء لفائضٍ من الأكسجين (O2)، أو التعرضِ له عند ضغط جزئيّ أعلى من الضغط الجزئيّ الطبيعي. في علم الطب، يُشار إلى فَرط التأكسج على أنّه أكسجين زائد في الرئتين أو في أنسجة الجسم الأخرى، وهذه الزيادة في الأكسجين تَنجم عن استنشاق الهواء أو الأكسجين بضغوطٍ أكبرَ من الضغط الجوي الطبيعي، إنّ هذا النوع من فَرط التّأكسج يمكن أن يؤديَ إلى سُمِيّة الأكسجين، وهي إحدى الآثار الناتجة عن تنفس الأكسجين الجزيئي في ضغوطٍ جزئيةٍ مرتفعة. (Hyperoxia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018496.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thinness",
    "term_en": "Thinness",
    "term_ar": "نحافة",
    "synonyms": [
      "Leanness",
      "Underweight"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A state of insufficient flesh on the body usually defined as having a body weight less than skeletal and physical standards, such as BODY MASS INDEX, and dependent on age, sex, and genetic background.",
    "arabic_definition": "يمكن وصف شخص ما بأنه نحيف عندما يكون مؤشر كتلة الجسم لديه أقل من 18.5. (Thinness)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013851.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nocturia",
    "term_en": "Nocturia",
    "term_ar": "بوال ليلي",
    "synonyms": [
      "Nycturia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Frequent URINATION at night that interrupts sleep. It is often associated with outflow obstruction, DIABETES MELLITUS, or bladder inflammation (CYSTITIS).",
    "arabic_definition": "بُوالٌ لَيلِيّ أو تَبَوُّلٌ لَيْلِيّ مُتكرِّر (بالإنجليزية: Nocturia) (مُشتقَّة من الكلمة اللاتينية nox، وتعني لَيْل، والكلمة اليونانية τα] ούρα]، وتعني بول)، تعرفه جمعية الحصر الدولية (ICS) بأنها «شكوى الفرد بضرورة استيقاظه ليلًا مرة أو أكثر للتبول». له أسباب متنوعة، ويصعب تحديدها في كثير من المرضى.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053158.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gliosis",
    "term_en": "Gliosis",
    "term_ar": "فساد دبقي عصبي",
    "synonyms": [
      "Astrocytosis",
      "Astrocytoses",
      "Astrogliosis",
      "Glial Scar",
      "Glial Scars",
      "Scar, Glial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The production of a dense fibrous network of neuroglia; includes astrocytosis, which is a proliferation of astrocytes in the area of a degenerative lesion.",
    "arabic_definition": "الفساد الدبقي العصبي أو الدباق هو تغير تفاعلي لانوعي في نوع من الخلايا تسمى الخلايا الدِبقية استجابة لتعرض الجهاز العصبي المركزي (CNS) لضرر. في معظم الحالات، يتضمن هذا الورم تكاثر أو تضخم في عدة أنواع من الخلايا الدِبقية، بما فيها «الخلايا الدبقية الدقيقة»، «الخلايا النجمية» و«الخلايا قليلة التغصن». (Gliosis)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005911.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysbiosis",
    "term_en": "Dysbiosis",
    "term_ar": "اختلال الميكروبيوم",
    "synonyms": [
      "Dysbioses",
      "Dys-symbiosis",
      "Dys-symbioses",
      "Disbiosis",
      "Disbioses",
      "Dysbacteriosis",
      "Dysbacterioses",
      "Disbacteriosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Changes in quantitative and qualitative composition of MICROBIOTA. The changes may lead to altered host microbial interaction or homeostatic imbalance that can contribute to a disease state often with inflammation.",
    "arabic_definition": "اختلال الميكروبيوم (في الإنجليزية: Dysbiosis)، ويُطلق عليه أيضًا اختلال التوازن البكتيري (في الإنجليزية: Dysbacteriosis)، مصطلح يشير لاختلال توازن أو سوء تكيف الكائنات الدقيقة على سطح الجسم أو داخله. على سبيل المثال: قد يختل توازن الكائنات الحية الدقيقة المتعايشة مع الجسم البشري (مثل نبيت الجلد، أو نبيت الأمعاء، أو نبيت المهبل)؛ بحيث ينقص وجود الأنواع المهيمنة عادةً، ما يعطي الفرصة لبقية الكائنات بالتكاثر وغزو الفراغ.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064806.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "serositis",
    "term_en": "Serositis",
    "term_ar": "التهاب المصلية",
    "synonyms": [
      "Serositides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of a serous membrane.",
    "arabic_definition": "التهاب المصلية (الإنجليزية: Serositis) هو التهاب يصيب النسيج المصلي في الجسم، يبطن هذا النسيج القلب (التأمور) والرئتين (الجنبة) والبطانة الداخلية للبطن (الصفاق) والأعضاء الداخلية. يوجد مع التهاب المصلية تغليف دهني ودهن زاحف.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012700.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemobilia",
    "term_en": "Hemobilia",
    "term_ar": "نزف صفراوي",
    "synonyms": [
      "Hemobilias",
      "Biliary Tract Hemorrhage",
      "Biliary Tract Hemorrhages",
      "Hemorrhage, Biliary Tract",
      "Haemobilia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hemorrhage in or through the BILIARY TRACT due to trauma, inflammation, CHOLELITHIASIS, vascular disease, or neoplasms.",
    "arabic_definition": "النزف الصفراوي أو النزف الكبدي أو نزف العصارة الصفراوية هي حالة طبية عبارة عن نزيف في الشجرة الصفراوية، تحدث عند وجود ناسور بين وعاء دموي من الدورة الدموية الحشوية وبين الجهاز الصفراوي داخل الكبد أو خارجه. يمكن أن تظهر كـ نزيف حاد في الجهاز الهضمي العلوي، ويجب أخذها في الاعتبار عند وجود ألم في الجزء العلوي من البطن مصحوبًا بنزيف معوي علوي، خاصةً إذا كان هناك تاريخ من إصابة أو تدخل طبي سابق بالكبد.بحاجة لمصدر سجلت هذه الحالة لأول مرة عام 1654 على يد فرانسيس جلسون الأستاذ بجامعة كامبريدج. (Hemobilia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006431.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "choristoma",
    "term_en": "Choristoma",
    "term_ar": "ورم أرومي اغترابي",
    "synonyms": [
      "Choristomas",
      "Aberrant Tissue",
      "Aberrant Tissues",
      "Tissue, Aberrant",
      "Tissues, Aberrant",
      "Ectopic Tissue",
      "Ectopic Tissues",
      "Tissue, Ectopic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mass of histologically normal tissue present in an abnormal location.",
    "arabic_definition": "الورم الأرومي الاغترابي أو النسيج الزائغ،شكل من أشكال التوضع المغاير، وهو عبارة عن كتل من الأنسجة الطبيعية الموجودة في أماكن غير طبيعية. وعلى النقيض من الورم، يتم تنظيم نمو الورم الأرومي الاغترابي بشكل طبيعي. (Choristoma)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002828.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anorexia",
    "term_en": "Anorexia",
    "term_ar": "فقدان الشهية العصابي",
    "synonyms": [
      "Anorexias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The lack or loss of APPETITE accompanied by an aversion to food and the inability to eat. It is the defining characteristic of the disorder ANOREXIA NERVOSA.",
    "arabic_definition": "القهم العصبي أو القهم العُصابي أو فقدان الشهية العُصابي (الإنجليزية: Anorexia nervosa) هو اضطراب في الأكل يتميز بانخفاض الوزن، تقييد الطعام، اضطراب صورة الجسم، الخوف من زيادة الوزن، والرغبة الطاغية في أن يكون الشخص نحيفًا. فقدان الشهية هو مصطلح من أصل يوناني: an- (ἀν-، بادئة تدل على النفي) و orexis (⁇ ρεξις، «شهية»)، يترجم حرفيا إلى «فقدان الشهية»؛ الصفة العصبي تشير إلى الطبيعة الوظيفية وغير العضوية للاضطراب.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000855.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neointima",
    "term_en": "Neointima",
    "term_ar": "بطانة جديدة",
    "synonyms": [
      "Neointimas",
      "Neointima Formation",
      "Formation, Neointima"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The new and thickened layer of scar tissue that forms on a PROSTHESIS, or as a result of vessel injury especially following ANGIOPLASTY or stent placement.",
    "arabic_definition": "يشير مصطلح بطانة جديدة (الإنجليزية: Neointima) عادةً إلى النسيج الندبي الذي يتشكل داخل بنى تشريحية أنبوبية مثل الأوعية الدموية، حيث أن الغلالة الباطنة هي البطانة الداخلية الأعمق لهذه البنى. البطانة الجديدة يمكن أن تتشكل نتيجة لجراحة الأوعية الدموية مثل رأب الأوعية أو وضع الدعامة.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058426.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "emphysema",
    "term_en": "Emphysema",
    "term_ar": "نفاخ رئوي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pathological accumulation of air in tissues or organs.",
    "arabic_definition": "النُّفَاخ الرئوي (الإنجليزية: Emphysema) حالة مرضية تصيب الرئة وتؤدي إلى قصر في النفس وصعوبة في ممارسة النشاطات. وينتج ذلك بسبب دمار الجيوب الهوائية والممرات الصغيرة ضمن الرئة مما يجعل الزفير أمرا صعبا.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004646.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperamylasemia",
    "term_en": "Hyperamylasemia",
    "term_ar": "أميلاز",
    "synonyms": [
      "Macroamylasemia",
      "Amylase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition with abnormally elevated level of AMYLASES in the serum. Hyperamylasemia due to PANCREATITIS or other causes may be differentiated by identifying the amylase isoenzymes.",
    "arabic_definition": "الأميلاز أو خميرة النشاء أو أنزيم النّشا أو أمايليز (الإنجليزية: Amylase) هو إنزيم يُفرز من البنكرياس والغدد اللعابية، وتوجد كمية بسيطة منه بالدم تتراوح ما بين 100 - 300 وحدة جولية / لتر، وعند ازدياد هذه النسبة في الدم يزداد استخراج هذا الإنزيم عن طريق الكلى، وينصح بعدم استخدام الماصات الزجاجية بواسطة الفم عند تحليله وذلك لتجنب زيادة نسبته الناتجة عن التلوث. يُعد الأميلاز إنزيمًا يحفز التحلل المائي للنشأ ليتحول إلى سكر. (Hyperamylasemia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034321.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "inflammation",
    "term_en": "Inflammation",
    "term_ar": "التهاب",
    "synonyms": [
      "Inflammations",
      "Innate Inflammatory Response",
      "Inflammatory Response, Innate",
      "Innate Inflammatory Responses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pathological process characterized by injury or destruction of tissues caused by a variety of cytologic and chemical reactions. It is usually manifested by typical signs of pain, heat, redness, swelling, and loss of function.",
    "arabic_definition": "الالتهاب (الإنجليزية: Inflammation) هو استجابة نسيجية ووعاية ضد مسببات العدوى وتلف الأنسجة يحدث فيها خروج لخلايا وجزيئات من الدورة الدموية إلى موقع الضرر للقضاء على العوامل الممرضة. على الرغم من أن كلمة الالتهاب تستخدم طبيًا للإشارة إلى ضرر في الجسم، إلا أنها في الواقع استجابة مناعية ضد مسببات الأمراض وتعد ضرورية للبقاء على قيد الحياة.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007249.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperthermia",
    "term_en": "Hyperthermia",
    "term_ar": "فرط الحرارة",
    "synonyms": [
      "Hyperthermias",
      "Hyperpyrexia",
      "Hyperpyrexias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormal elevation of body temperature, usually as a result of inability to regulate core body temperature due to non-pathologic factors.",
    "arabic_definition": "فرط الحرارة (الإنجليزية: Hyperthermia) ارتفاع درجة حرارة الجسم بسبب فشل التنظيم الحراري، ويحدث عندما ينتج الجسم أو يمتص المزيد من الحرارة مما يستهلكه. وهي حالة طبية طارئة تتطلب معالجة فورية لمنع الإعاقة أو الوفاة.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000084462.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "emergencies",
    "term_en": "Emergencies",
    "term_ar": "طوارئ",
    "synonyms": [
      "Emergency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Situations or conditions requiring immediate intervention to avoid serious adverse results.",
    "arabic_definition": "الطوارئ هي كل حالة تشكل خطرا فوريا على الصحة أو الحياة أو الملكية الشخصية أو البيئة، وتتطلب معظم حالات الطوارئ تدخلاً عاجلاً بهدف الحيلولة دون تفاقم الوضع، إلا أنه في بعض الحالات قد لا يكون التخفيف منها ممكنًا، ولا تتمكن هيئات الاستجابة للطوارئ إلا من تقديم رعاية ملطفة عقب وقوع الكارثة. بالرغم من أن بعض حالات الطوارئ قد تكون بديهية (مثل الكوارث الطبيعية التي تهدد العديد من الأرواح)، فإن العديد منها الحوادث الصغرى تتطلب من المراقب (أو المتضرر) أن يقرر ما إذا اعتبرها حالة طوارئ، ويختلف التعريف الدقيق لحالة الطوارئ والهيئات المعنية بها والإجراءات المستخدمة خلالها باختلاف البلد، وعادةً ما تحدد الحكومة هذه المتغيرات، وتكون هيئاتها (خدمات الطوارئ) هي المسؤولة عن تخطيط وإدارة الطوارئ. (Emergencies)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004630.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypothermia",
    "term_en": "Hypothermia",
    "term_ar": "انخفاض درجة الحرارة",
    "synonyms": [
      "Hypothermias",
      "Hypothermia, Accidental",
      "Accidental Hypothermia",
      "Accidental Hypothermias",
      "Hypothermias, Accidental"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Lower than normal body temperature, especially in warm-blooded animals.",
    "arabic_definition": "انخفاض درجة الحرارة أو انخفاض الحرارة مصطلح يطلق عندما تنخفض درجة حرارة الجسم إلى أقل من 35 درجة مئوية (95 درجة فهرنهايت). وتعتمد الأعراض على درجة حرارة الجسم، ففي انخفاض الجسم البسيط يحصل ارتعاد واضطراب عقلي، أما في انخفاض درجة الحرارة المتوسط يتوقف الارتعاد ويزيد الاضطراب. (Hypothermia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007035.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "back-pain",
    "term_en": "Back Pain",
    "term_ar": "ألم الظهر",
    "synonyms": [
      "Back Pains",
      "Pain, Back",
      "Pains, Back",
      "Back Ache",
      "Ache, Back",
      "Aches, Back",
      "Back Aches",
      "Backache"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute or chronic pain located in the posterior regions of the THORAX; LUMBOSACRAL REGION; or the adjacent regions.",
    "arabic_definition": "آلام الظهر أو الظُّهَار (باللغة الإنجليزية: Dorsalgia، نقحرة: دورسالجيا، أو Back Pain) هي الآلام التي يشعر بها المصاب في ظهره، وهي عادةً تكون بسبب العضلات أو الأعصاب أو العظام أو المفاصل أو انزلاق غضروفي ضمن العمود الفقري. يمكن أن تحدث بصورة مفاجأة وسريعة أو بصورة تدريجية، ويمكن أيضا ان تكون بشكل مستمر أو بشكل متقطع، يمكنها أيضا ان تنتشر من مكان إلى آخر (عادةً نحو الذراع واليد، أو الفخذ والساق).",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001416.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "constipation",
    "term_en": "Constipation",
    "term_ar": "إمساك",
    "synonyms": [
      "Colonic Inertia",
      "Dyschezia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infrequent or difficult evacuation of FECES. These symptoms are associated with a variety of causes, including low DIETARY FIBER intake, emotional or nervous disturbances, systemic and structural disorders, drug-induced aggravation, and infections.",
    "arabic_definition": "الإمساك، المعروف أيضًا باسم عسر التغوط (الإنجليزية: Constipation) هو ضعف في الأمعاء يجعل حركات الأمعاء غير منتظمة أو يصعب تمريرها. غالبًا ما يكون البراز صلبًا وجافًا.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003248.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "teratogenesis",
    "term_en": "Teratogenesis",
    "term_ar": "علم المسوخ",
    "synonyms": [
      "Teratology"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The formation of CONGENITAL ABNORMALITIES.",
    "arabic_definition": "علم المسوخ أو مبحث المسخيات أو بحوث التمسخ أو الامساخ أو علم التشوّه الخَلْقي أو التراتولوجيا (Teratology)، وهو العلم الذي يبحث في دراسة التشوهات الخلقية والنمائية، حيث يصيب الامساخ زهاء 4% من المواليد، وينشأ المسوخ أو التشوّه الخَلْقي عن عوامل متعددة أثناء الحمل منها الأخماج (Infections)، والتعرض إلى الإشعاع، وتناول الأدوية، بالإضافة إلى بعض الأمراض الاستقلابية (Metabolic Diseases)، ورغم الأسباب المذكورة آنفا إلا أن هناك نسبة تنوف على 60% لا يعرف (Identify) لها سبب محدد. إذ تشمل العيوب التشوهات والاضطرابات والتشوهات وخلل التنسج التي قد تسبب توقف النمو أو تأخر النمو العقلي أو غيرها من الاضطرابات الخلقية التي تفتقر إلى التشوهات الهيكلية. (Teratogenesis)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D064793.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "torticollis",
    "term_en": "Torticollis",
    "term_ar": "صعر",
    "synonyms": [
      "Wryneck",
      "Torticollis, Intermittent",
      "Intermittent Torticollis",
      "Torticollis, Psychogenic",
      "Psychogenic Torticollis",
      "Cervical Dystonia",
      "Cervical Dystonias",
      "Dystonia, Cervical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A symptom, not a disease, of a twisted neck. In most instances, the head is tipped toward one side and the chin rotated toward the other. The involuntary muscle contractions in the neck region of patients with torticollis can be due to congenital defects, trauma, inflammation, tumors, and neurological or other factors.",
    "arabic_definition": "الصَعَر (الإنجليزية: torticollis) أو انفتال العنق (الاسم العلمي: Collum distortum) أو تخشب العنق هو تشنج مؤلم لعضلات الرقبة، يصيب الصعر غالبًا عضلة الرقبة الكبيرة والمعروفة باسم العضلة القترائية؛ أو القصية الترقوية الخشائية (الفرنسية: Sternocleidomastoid). يمكن أن يؤثر أيضًا على العضلة شبه المنحرفة (الإنجليزية: Trapezius muscle).",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014103.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "weight-loss",
    "term_en": "Weight Loss",
    "term_ar": "فقدان الوزن",
    "synonyms": [
      "Losses, Weight",
      "Loss, Weight",
      "Weight Losses",
      "Weight Reduction",
      "Reductions, Weight",
      "Reduction, Weight",
      "Weight Reductions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Decrease in existing BODY WEIGHT.",
    "arabic_definition": "فقدان الوزن (الإنجليزية: Weight Loss) في مجالات الطب والصحة واللياقة البدنية يُقصد به أيّ خسارة من كتلة الجسم الكليّة، بسبب فقدان السوائل أو دهون الجسم أو الأنسجة الدهنيّة و/ أو كتلة الجسم الغث (كتلة الجسم بدون الدهون)، خصوصًا: الترسبات المعدنية في العظام، والعضلات، والأوتار، والأنسجة الضامّة الأخرى. فقدان الوزن إما أن يكون غير متعمّد: بسبب سوء التغذية أو مرضٍ كامن، أو قد ينشأ بسبب جهدٍ واعٍ لتقليل فرط الوزن أو السمنة، حقيقيةً كانت السمنة أو متخيّلة.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015431.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dysmenorrhea",
    "term_en": "Dysmenorrhea",
    "term_ar": "عسر الطمث",
    "synonyms": [
      "Dysmenorrheas",
      "Menstruation, Painful",
      "Menstruations, Painful",
      "Painful Menstruation",
      "Painful Menstruations",
      "Pain, Menstrual",
      "Menstrual Pain",
      "Menstrual Pains"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Painful menstruation.",
    "arabic_definition": "عُسْر الطمث (الإنجليزية: Dysmenorrhea) ويعرف أيضًا بآلام الدورة هو ألم دوري يحدث أسفل البطن وبدايته من وقت ابتداء الدورة الطمثية أو قبلها مباشرةً وينتهي بعد توقف الطمث. وربما كانت نسبة 90 % من الإناث البالغات يعانين من آلام الدورة وهذا هو السبب الرئيسي للتغيب عن العمل والمدرسة.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004412.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperuricemia",
    "term_en": "Hyperuricemia",
    "term_ar": "فرط حمض يوريك الدم",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive URIC ACID or urate in blood as defined by its solubility in plasma at 37 degrees C; greater than 0.42mmol per liter (7.0mg/dL) in men or 0.36mmol per liter (6.0mg/dL) in women. This condition is caused by overproduction of uric acid or impaired renal clearance. Hyperuricemia can be acquired, drug-induced or genetically determined (LESCH-NYHAN SYNDROME). It is associated with HYPERTENSION and GOUT.",
    "arabic_definition": "فرط حمض يوريك الدم (الإنجليزية: Hyperuricemia) هو ارتفاع في مستوى حمض اليوريك في الدم إلى مستويات غير طبيعية عند الإنسان حيث أن المعدل الطبيعي هو 360 ميكرومول ,/ لتر (6 ملغ / ديسيلتر) للنساء و400 ميكرومول / لتر (6.8 ملغ / دل) للرجال.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D033461.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypercapnia",
    "term_en": "Hypercapnia",
    "term_ar": "فرط ثنائي أكسيد الكربون في الدم",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clinical manifestation of abnormal increase in the amount of carbon dioxide in arterial blood.",
    "arabic_definition": "فرط ثاني أكسيد الكربون في الدم حالة مرضية ترتفع فيها نسبة غاز ثاني أكسيد الكربون (CO2) في الدم. وثاني أكسيد الكربون هو غاز ناتج عن عملية التمثيل الغذائي داخل الجسم ويخرج عادة من الرئتين خلال عملية الزفير . (Hypercapnia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006935.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypovolemia",
    "term_en": "Hypovolemia",
    "term_ar": "نقص حجم الدم",
    "synonyms": [
      "Hypovolemias",
      "Hypovolemic",
      "Hypovolemics"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormally low volume of blood circulating through the body. It may result in hypovolemic shock (see SHOCK).",
    "arabic_definition": "نقص حجم الدم ويعني انخفاض حجم الدم في الجسم أو بالتحديد انخفاض حجم بلازما الدم. يتميز نقص حجم الدم باستنزاف الصوديوم والذي يختلف عن الجفاف، الذي يُعرف بفقدان كميات مُفرطة من مياه الجسم. (Hypovolemia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020896.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "body-weight",
    "term_en": "Body Weight",
    "term_ar": "وزن جسم الإنسان",
    "synonyms": [
      "Body Weights",
      "Weight, Body",
      "Weights, Body",
      "Human body weight"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The mass or quantity of heaviness of an individual. It is expressed by units of pounds or kilograms.",
    "arabic_definition": "يستخدم وزن جسم الإنسان على العموم لمعرفة المدى. وفي العلوم الطبية والبيولوجية للإشارة إلى كتلة الشخص أو وزنه. (Body Weight)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001835.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperammonemia",
    "term_en": "Hyperammonemia",
    "term_ar": "فرط أمونيا الدم",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Elevated level of AMMONIA in the blood. It is a sign of defective CATABOLISM of AMINO ACIDS or ammonia to UREA.",
    "arabic_definition": "فرط أمونيا الدم \" Hyperammonemia \" هو اضطراب التمثيل الغذائي يتميز بوجود فائض الأمونيا في الدم. وهي حالة خطيرة قد تؤدي إلى التهاب الدماغ والموت.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D022124.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polydipsia",
    "term_en": "Polydipsia",
    "term_ar": "عطاش",
    "synonyms": [
      "Polydipsias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive thirst manifested by excessive fluid intake. It is characteristic of many diseases such as DIABETES MELLITUS; DIABETES INSIPIDUS; and NEPHROGENIC DIABETES INSIPIDUS. The condition may be psychogenic in origin.",
    "arabic_definition": "العُطاش أو السُّهاف (الإنجليزية: Polydipsia) هو حالة العطش المفرط، وهو عرض غير محدد لعدد كبير من الأمراض. كما يعد العطاش تصرفا غير طبيعي في الحيوانات.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059606.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypertrophy",
    "term_en": "Hypertrophy",
    "term_ar": "تضخم الخلايا",
    "synonyms": [
      "Hypertrophies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "General increase in bulk of a part or organ due to CELL ENLARGEMENT and accumulation of FLUIDS AND SECRETIONS, not due to tumor formation, nor to an increase in the number of cells (HYPERPLASIA).",
    "arabic_definition": "التضخم (الإنجليزية: Hypertrophy) هو الزيادة في حجم العضو أو الأنسجة بسبب تضخم الخلايا المكونة له. على الرغم من أن التضخم وفرط التنسج هما عمليتان منفصلتان، إلا أنهما يحدثان معًا في كثير من الأحيان، كما هو الحال في حالة التكاثر الناجم عن الهرمونات وتضخم خلايا الرحم أثناء الحمل.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006984.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exsanguination",
    "term_en": "Exsanguination",
    "term_ar": "استنزاف",
    "synonyms": [
      "Exsanguinating Hemorrhage",
      "Exsanguinating Hemorrhages",
      "Hemorrhage, Exsanguinating",
      "Hemorrhages, Exsanguinating"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rapid and extreme blood loss leading to HEMORRHAGIC SHOCK.",
    "arabic_definition": "النزف أو إدماء (الإنجليزية: Bleeding) هو فقدان الدم عن طريق خروج الدم من الأوعية الدموية إلى خارج الدورة الدموية. استمرار هذه الحالة يؤدي إلى نقص في كمية الدم المتوفرة في الدورة الدموية. (Exsanguination)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058734.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sleepiness",
    "term_en": "Sleepiness",
    "term_ar": "نعاس",
    "synonyms": [
      "Somnolence"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compelling urge to sleep.",
    "arabic_definition": "النعاس أو النيمومة (الإنجليزية: Somnolence أو sleepiness أو drowsiness) هي حالة من الرغبة الشديدة في النوم، أو النوم لفترات طويلة (فرط النوم).",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000077260.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudophakia",
    "term_en": "Pseudophakia",
    "term_ar": "زراعة عدسة داخل العين",
    "synonyms": [
      "Intraocular lens"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Presence of an intraocular lens after cataract extraction.",
    "arabic_definition": "عدسة العين هي العضو المسؤول عن تركيز الأشعة القادمة من الجسم للتركيز على نقطه على الشبكية وهي شفافه وإذا حدثت بها عتامه يطلق عليها لفظ المياه البيضاء أو الكتاركتا وتحتاج لعملية جراحية لإزالتها وزرع عدسه أخرى صناعية مكانها. (Pseudophakia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019591.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "body-odor",
    "term_en": "Body Odor",
    "term_ar": "رائحة الجسم",
    "synonyms": [
      "Body Odors",
      "Odors, Body",
      "Bromhidrosis",
      "Bromhidroses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Strong or unusual odor related to the body. Occasional abnormal body odor may be a temporary effect of a metabolic change.",
    "arabic_definition": "رائحة الجسم موجودة في كل من الحيوانات والبشر، ويمكن أن تتأثر كثافتها بسبب العديد من العوامل (الأنماط السلوكية، وطريقة الحياة). رائحة الجسم لها أساس وراثي قوي في كل من الحيوانات والبشر، ولكن يمكن أن تتأثر بشدة أيضاً بمختلف الأمراض والحالات النفسية. (Body Odor)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000089083.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperphagia",
    "term_en": "Hyperphagia",
    "term_ar": "نهام",
    "synonyms": [
      "Overeating",
      "Polyphagia",
      "Polyphagias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Ingestion of a greater than optimal quantity of food.",
    "arabic_definition": "النُّهام (الإنجليزية: Polyphagia) أو فرط الأكل (الإنجليزية: hyperphagia) هو علامة سريرية تدل على الجوع الشديد وزيادة الشهية تؤدي إلى تناول كميات من الطعام بصورة غير طبيعية.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006963.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "splenomegaly",
    "term_en": "Splenomegaly",
    "term_ar": "تضخم الطحال",
    "synonyms": [
      "Enlarged Spleen",
      "Spleen, Enlarged"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Enlargement of the spleen.",
    "arabic_definition": "الطَّحَلُ أو تَضَخُّمُ الطَّحَالِ (الإنجليزية: Splenomegaly) هو ازدياد حجم الطحال. يقع الطحال في الربع العلوي الأيسر من بطن الإنسان.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013163.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "weight-gain",
    "term_en": "Weight Gain",
    "term_ar": "زيادة الوزن",
    "synonyms": [
      "Gains, Weight",
      "Gain, Weight",
      "Weight Gains"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Increase in BODY WEIGHT over existing weight.",
    "arabic_definition": "زيادة الوزن أو زيادة الدهون يشير إلى زيادة نسبة الدهون في الجسم مقارنة بالصحة المثالية، وتعتبر زيادة الوزن شائعة بشكل خاص، عندما تكون الإمدادات الغذائية وفيرة، وأنماط الحياة مستقرة. اعتبارًا من عام 2003، وصل الوزن الزائد إلى نسب وبائية على مستوى العالم، حيث يعاني أكثر من مليار شخص من زيادة الوزن أو السمنة، وفي عام 2013 زاد هذا إلى أكثر من مليارَين. (Weight Gain)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015430.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperplasia",
    "term_en": "Hyperplasia",
    "term_ar": "فرط تنسج",
    "synonyms": [
      "Hyperplasias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An increase in the number of cells in a tissue or organ without tumor formation. It differs from HYPERTROPHY, which is an increase in bulk without an increase in the number of cells.",
    "arabic_definition": "التَنْسَاج (الإنجليزية: Hyperplasia)(أيضًا فَرْطُ التَّنَسُّج) هو زيادة عدد الخلايا في عضو أو نسيج مما يؤدي إلى زيادة في حجمه بسبب زيادة في حِمْل العمل الوظيفي (Functional workload or demand) على العضو أو النسيج، حَث هرموني، أو نقص في كثافة النسيج نفسه.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006965.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oligomenorrhea",
    "term_en": "Oligomenorrhea",
    "term_ar": "ندرة الطموث",
    "synonyms": [
      "Oligomenorrheas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormally infrequent menstruation.",
    "arabic_definition": "ندرة الطموث أو قلة الطمث (الإنجليزية: Oligomenorrhea) هو إفراز دم الطمث بكمية أقل من الكمية الطبيعية وهو اضطراب وظيفي لمحور تحت المهاد النخامي المبيضي وهو من أكثر الأضطرابات المسببة للعقم عند النساء. المصابات بهذا المرض ينقلب لديهن نظام الدورة الشهرية الذي عادة يكون أكثر من 35 يومًا، ويكون ذلك مصحوبًا أحيانا بتاريخ نزيف رحمي لخلل وظيفي، ويكون لديهم أعراض لفرط الأندروجينية، وحب الشباب، وكثرة الشعر أو الصلع، كما تكون هذه الحالات مصحوبة كثيرا ببدانة مما يفاقم من مصير هذه الحالات، ليس بالضرورة ان يكون لدى المصابات بهذا المرض عقم ولكن تكون خصوبتهن منخفضة.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009839.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "reticulocytosis",
    "term_en": "Reticulocytosis",
    "term_ar": "كثرة الشبكيات",
    "synonyms": [
      "Reticulocytoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An increase in circulating RETICULOCYTES, which is among the simplest and most reliable signs of accelerated ERYTHROCYTE production. Reticulocytosis occurs during active BLOOD regeneration (stimulation of red bone marrow) and in certain types of ANEMIA, particularly CONGENITAL HEMOLYTIC ANEMIA.",
    "arabic_definition": "كثرة الشبكيات هي حالة يحدث فيها زيادةٌ في الخلايا الشبكية، وهي خلايا دم حمراء غير ناضجة. تُلاحظ بشكلٍ شائعٍ في فقر الدم، ويمكن مشاهدتها في اللطخات الدموية عندما يكون نخاع العظام نشطًا كثيرًا لمحاولة استبدال فقد خلايا الدم الحمراء، مثلًا في فقر الدم الانحلالي والنزف. (Reticulocytosis)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D045262.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mastodynia",
    "term_en": "Mastodynia",
    "term_ar": "ألم الثدي",
    "synonyms": [
      "Mastodynias",
      "Breast Pain",
      "Breast Pains",
      "Pain, Breast",
      "Pains, Breast",
      "Mammalgia",
      "Mammalgias",
      "Mastalgia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Pain in the breast generally classified as cyclical (associated with menstrual periods), or noncyclical, i.e. originating from the breast or nearby muscles or joints, ranging from minor discomfort to severely incapacitating.",
    "arabic_definition": "أَلَمُ الثَّدْي أو وَجَعُ الثَّدْي (من اليونانية μαστός، «الثدي» وἄλγος، «الألم»)، (بالإنجليزية: Mastodynia/ Breast pain/ Mastalgia) هو أحد الأعراض الطبية. يمكن أن يتراوح الألم وعدم الراحة من بسيط إلى شديد تعجيزي.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059373.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhinorrhea",
    "term_en": "Rhinorrhea",
    "term_ar": "سيلان الأنف",
    "synonyms": [
      "Runny Nose",
      "Nose, Runny",
      "Running nose"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excess nasal drainage.",
    "arabic_definition": "الثر الأنفي أو سيلان الأنف (اللاتينية: Rhinorrhea) سيلان غزير لـمخاط خفيف أو مائي (ذو محتوى مائي مرتفع) من الأنف بسبب غزارة إفراز الظهارة التنفسية المبطنة للأنف والجيوب جانب الأنفية للمخاط. وهو من الأعراض الشائعة للأرجية (الحساسية ) أو بعض الأمراض كالزكام والانفلونزا.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000086722.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "channelopathies",
    "term_en": "Channelopathies",
    "term_ar": "اعتلال القنوات",
    "synonyms": [
      "Channelopathy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A variety of neuromuscular conditions resulting from MUTATIONS in ION CHANNELS manifesting as episodes of EPILEPSY; HEADACHE DISORDERS; and DYSKINESIAS.",
    "arabic_definition": "اعتلال القنوات (الإنجليزية: Channelopathy) هي مجموعة أمراض سببها اضطراب وظيفة الأجزاء المكونة للقنوات الأيونية أو البروتينات المنظمة لها. هذه الأمراض قد يكون سببها خلقيا (نتيجة طفرة جينية) أو سببا مكتسبا (بسبب المناعة الذاتية التي تستهدف القناة الأيونية). (Channelopathies)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053447.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ochronosis",
    "term_en": "Ochronosis",
    "term_ar": "تمغر",
    "synonyms": [
      "Ochronoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The yellowish discoloration of connective tissue due to deposition of HOMOGENTISIC ACID (a brown-black pigment). This is due to defects in the metabolism of PHENYLALANINE and TYROSINE. Ochronosis occurs in ALKAPTONURIA, but has also been associated with exposure to certain chemicals (e.g., PHENOL, trinitrophenol, BENZENE DERIVATIVES).",
    "arabic_definition": "التَمَغُّر (بالإنجليزية:Ochronosis) (بالفرنسية:Ochronose) ، هوَ مَرض يَتضمن تَرسب صَبغات قاتِمة في أنسجة الجِسم خاصة في الغَضاريف والنسيج الضام ، وعادة ما يُصاحب البيلة الكابتونِية ، كما يُمكن أن يَنجم عن التَسمم بالفينُول ، ومنِ أعراضه تَلون داكن في الصُلبَة وفي الأُذن .",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009794.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "crystalluria",
    "term_en": "Crystalluria",
    "term_ar": "بيلة البلورات",
    "synonyms": [
      "Crystallurias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Crystals in the URINE found in urinary sediment analysis. Urinary crystalline may be formed from various metabolites (e.g. CALCIUM OXALATES; CALCIUM PHOSPHATES; URATES) and drugs (e.g., SULPHADIAZINE; ACYCLOVIR; and TRIAMTERENE).",
    "arabic_definition": "بيلة البلورات أو البول البلوري أو زيادة بلورات البول (الإنجليزية: Crystalluria) هو مُصطلح يشير إلى البول العَكر بسبب وجود بلورات في البول عند إجراء اختبار البول، وتعتبر بيلة البلورات من الحالات المرضية الحميدة وواحدة من الآثار الجانبية للسلفوناميد والبنسلين.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000092162.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypercalciuria",
    "term_en": "Hypercalciuria",
    "term_ar": "فرط كالسيوم البول",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excretion of abnormally high level of CALCIUM in the URINE, greater than 4 mg/kg/day.",
    "arabic_definition": "فرط كالسيوم البول (الإنجليزية: Hypercalciuria أو hypercalcinuria) هي حالة زيادة نسبة الكالسيوم في البول. فرط كالسيوم البول المزمن قد يؤدي إلى قصور كلوي أو كلاس كلوي.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053565.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "convalescence",
    "term_en": "Convalescence",
    "term_ar": "نقاهة",
    "synonyms": [
      "Convalescences"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The period of recovery following an illness.",
    "arabic_definition": "النقاهة هي استعادة الصحة والعافية تدريجيًا بعد المرض. وهي تشير إلى المرحلة التالية لمرض أو داء معدٍ عندما يتعافى المريض ويعود إلى حالته الطبيعية، ولكنه قد يظل مصدرًا للعدوى حتى وإن شعر بتحسن. (Convalescence)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003289.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "malacoplakia",
    "term_en": "Malacoplakia",
    "term_ar": "تلين لويحي",
    "synonyms": [
      "Malacoplakias",
      "Malakoplakia",
      "Malakoplakias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The formation of soft patches on the mucous membrane of a hollow organ, such as the urogenital tract or digestive tract.",
    "arabic_definition": "التليُّن اللويحي أو البقع الرخوة المثانية، حالة التهابية نادرة تتميز بوجود حطاطة أو لويحة أو تقرح يصيب عادةً الجهاز البولي التناسلي. ومع ذلك، قد تصيب أعضاء الجسم الأخرى. (Malacoplakia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008287.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lower-urinary-tract-symptoms",
    "term_en": "Lower Urinary Tract Symptoms",
    "term_ar": "أعراض المجاري البولية السفلية",
    "synonyms": [
      "Lower Urinary Tract Symptom"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Symptoms of disorders of the lower urinary tract including frequency, NOCTURIA; urgency, incomplete voiding, and URINARY INCONTINENCE. They are often associated with OVERACTIVE BLADDER; URINARY INCOMPETENCE; and INTERSTITIAL CYSTITIS. Lower urinary tract symptoms in males were traditionally called PROSTATISM.",
    "arabic_definition": "يشير مصطلح أعراض المجاري البولية السفلية (بالإنجليزية: Lower urinary tract symptoms) إلى مجموعة من الأعراض السريرية التي تصيب المثانة والعاصرة الإحليلية والحالبين بالإضافة إلى البروستاتا لدى الرجال. على الرغم من تفضيل مصطلح أعراض المجاري البولية السفلية على مصطلح البروستاتية الذي كان سائدًا في ما سبق بسبب انتشار هذه الأعراض لدى الرجال بشكل خاص، يمكن أن تصاب النساء أيضًا بأعراض المجاري البولية السفلية.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059411.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chronic-pain",
    "term_en": "Chronic Pain",
    "term_ar": "ألم مزمن",
    "synonyms": [
      "Pain, Chronic",
      "Widespread Chronic Pain",
      "Chronic Pain, Widespread",
      "Pain, Widespread Chronic",
      "Chronic Primary Pain",
      "Pain, Chronic Primary",
      "Primary Pain, Chronic",
      "Chronic Secondary Pain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Aching sensation that persists for more than a few months. It may or may not be associated with trauma or disease, and may persist after the initial injury has healed. Its localization, character, and timing are more vague than with acute pain.",
    "arabic_definition": "يصنف الألم على أنه ألم مزمن عندما يستمر لمدة تزيد عن 3 – 6 أشهر. يُفرق الأطباء بين الألم الحاد والألم المزمن بحسب الفترة الزمنية منذ وقت ظهوره، ورغم أن أغلب التصنيفات تحدد فترة 3 – 6 أشهر للتفريق بين الألم المزمن والألم الحاد، لكن بعض الباحثين حددوا فترة 12 شهرًا للتفريق بين الألم الحاد والألم المزمن، هناك تعريف بديل للألم المزمن لا يتضمن مدة محددة، بل يُعرف الألم المزمن بأنه أي ألم يستمر لفترة أطول من فترة الشفاء المتوقعة. (Chronic Pain)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059350.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hiatal-hernia",
    "term_en": "Hiatal Hernia",
    "term_ar": "فتق حجابي",
    "synonyms": [
      "Hernias, Hiatal",
      "Hiatal Hernias",
      "Hernia, Hiatus",
      "Hernias, Hiatus",
      "Hiatus Hernia",
      "Hiatus Hernias",
      "Paraesophageal Hiatal Hernia",
      "Hernia, Paraesophageal Hiatal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "STOMACH herniation located at or near the diaphragmatic opening for the ESOPHAGUS, the esophageal hiatus.",
    "arabic_definition": "فتق الحجاب الحاجز (الإنجليزية: Hiatus hernia) أو الفتق الحجابي، هو نوع من الفتق تنزلق فيه أعضاء البطن (عادة المعدة) عبر الحجاب الحاجز إلى المقصورة الوسطى من الصدر. قد يؤدي ذلك إلى مرض الارتجاع المعدي المريئي أو الارتجاع الحنجري البلعومي مع أعراض مثل طعم حمضي في الجزء الخلفي من الفم أو حرقة الفؤاد. (Hiatal Hernia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006551.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "abdominal-pain",
    "term_en": "Abdominal Pain",
    "term_ar": "ألم البطن",
    "synonyms": [
      "Abdominal Pains",
      "Pain, Abdominal",
      "Pains, Abdominal",
      "Colicky Pain",
      "Colicky Pains",
      "Pain, Colicky",
      "Pains, Colicky"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Sensation of discomfort, distress, or agony in the abdominal region.",
    "arabic_definition": "ألم البطن المعروف أيضاً باسم آلام المعدة هو ألم يصيب منطقة البطن، وهي المنطقة الممتدة من أسفل الصدر إلى نهاية الجذع.وتشمل الأسباب الشائعة للألم في البطن التهاب المعدة والأمعاء ومتلازمة القولون العصبي. يعاني حوالي 10% من الأشخاص من حالة أكثر خطورة مثل التهاب الزائدة الدودية أو تسريب أو تمزق تمدد الأوعية الدموية الأبهري أو التهاب الرتج أو الحمل خارج الرحم. (Abdominal Pain)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015746.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "inguinal-hernia",
    "term_en": "Inguinal Hernia",
    "term_ar": "فتق مغبني",
    "synonyms": [
      "Hernias, Inguinal",
      "Inguinal Hernias",
      "Inguinal Hernia, Indirect",
      "Hernia, Indirect Inguinal",
      "Hernias, Indirect Inguinal",
      "Indirect Inguinal Hernia",
      "Indirect Inguinal Hernias",
      "Inguinal Hernias, Indirect"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abdominal hernia with an external bulge in the GROIN region. It can be classified by the location of herniation. Indirect inguinal hernias occur through the internal inguinal ring. Direct inguinal hernias occur through defects in the ABDOMINAL WALL (transversalis fascia) in Hesselbach's triangle. The former type is commonly seen in children and young adults; the latter in adults.",
    "arabic_definition": "الفتق الأُرْبِي أو الفتق المغبني (بالإنجليزية: Inguinal hernia) هو نتوء محتويات جوف البطن ضمن القناة الأربية. وتعتبر الفتوق الأربية من الحالات الطبية الشائعة، ويعد إصلاحها من أشيع العمليات الجراحية.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006552.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chronic-disease",
    "term_en": "Chronic Disease",
    "term_ar": "مزمن",
    "synonyms": [
      "Chronic Diseases",
      "Disease, Chronic",
      "Chronic Illness",
      "Chronic Illnesses",
      "Illness, Chronic",
      "Chronically Ill",
      "Chronic Condition",
      "Chronic Conditions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases which have one or more of the following characteristics: they are permanent, leave residual disability, are caused by nonreversible pathological alteration, require special training of the patient for rehabilitation, or may be expected to require a long period of supervision, observation, or care (Dictionary of Health Services Management, 2d ed). For epidemiological studies chronic disease often includes HEART DISEASES; STROKE; CANCER; and diabetes (DIABETES MELLITUS, TYPE 2).",
    "arabic_definition": "مزمن (الإنجليزية: Chronic) في الطب يعني المرض المزمن المرض طويل الأمد أو المتكرر. ويصف مصطلح مزمن مسار المرض، أو معدل الاٍصابة والتطور. (Chronic Disease)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002908.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "premenstrual-syndrome",
    "term_en": "Premenstrual Syndrome",
    "term_ar": "متلازمة سابقة للحيض",
    "synonyms": [
      "Premenstrual Syndromes",
      "Syndrome, Premenstrual",
      "Syndromes, Premenstrual",
      "Premenstrual Tension",
      "Premenstrual Tensions",
      "Tension, Premenstrual",
      "Tensions, Premenstrual"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A combination of distressing physical, psychologic, or behavioral changes that occur during the luteal phase of the menstrual cycle. Symptoms of PMS are diverse (such as pain, water-retention, anxiety, cravings, and depression) and they diminish markedly 2 or 3 days after the initiation of menses.",
    "arabic_definition": "المتلازمة السابقة للحيض أو التناذر السابق للطمث (اختصارًا PMS) هي مجموعة من الأعراض الجسدية والنفسية والعاطفية المرتبطة بحدوث الحيض لدى النساء. بالرغم من أن 80% من النساء في عمر الإنجاب يعانين من بعض أعراض هذه المتلازمة إلا أن التعريف الرسمي للمتلازمة يقتضي أن تكون الأعراض من الشدة بحيث تمنع المصابة من ممارسة أنشطة حياتها بشكل طبيعي. (Premenstrual Syndrome)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011293.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sweating-sickness",
    "term_en": "Sweating Sickness",
    "term_ar": "داء التعرق",
    "synonyms": [
      "Sickness, Sweating",
      "Sudor Anglicus",
      "English Sweating Sickness"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clinical condition characterized by fever and profuse sweating and associated with high mortality. It occurred in epidemic form five times in the fifteenth and sixteenth centuries in England, first in 1485 and last in 1551, specially during the summer and early autumn, attacking the relatively affluent adult male population. The etiology was unknown.",
    "arabic_definition": "داء التعرق مرض غامض وشديد الضراوة ضرب إنجلترا ثم أوروبا في وقت لاحق، في سلسلة من الأوبئة في بدأت عام 1485. ثم عاود الظهور عام 1551، وبعد ذلك اختفى هذا المرض. (Sweating Sickness)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018614.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "food-intolerance",
    "term_en": "Food Intolerance",
    "term_ar": "عدم تحمل الطعام",
    "synonyms": [
      "Intolerance, Food",
      "Food, Sensitivity"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Digestive system disorder where a particular food irritates the digestive tract or cannot be properly digested (i.e., due to a lack of a digestive enzyme). It differs from FOOD HYPERSENSITIVITY which is an immune system disorder, usually due to specific proteins in food. http://my.clevelandclinic.org/health/articles/problem-foods-is-it-an-allergy-or-intolerance.",
    "arabic_definition": "حالة عدم تحمل الطعام هي ردة فعل سلبية للجسم، تجاه طعام أو مشروب أو مادة مضافة للأغذية أو مركب موجود في الأطعمة التي تسبب الأعراض في واحد أو أكثر من أعضاء وأنظمة الجسم، ولكنها تدل عمومًا على ردود فعل أخرى غير حساسية الطعام. يستخدم مصطلح فرط الحساسية الغذائي في نطاق واسع للإشارة إلى كلا من عدم تحمل الطعام والحساسية الغذائية. (Food Intolerance)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000073923.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neglected-diseases",
    "term_en": "Neglected Diseases",
    "term_ar": "مرض استوائي مهمل",
    "synonyms": [
      "Disease, Neglected",
      "Neglected Disease",
      "Neglected Tropical Diseases",
      "Disease, Neglected Tropical",
      "Neglected Tropical Disease",
      "Tropical Disease, Neglected"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases that are underfunded and have low name recognition but are major burdens in less developed countries. Neglected diseases include many tropical infectious diseases, e.g., HELMINTHIASIS; LEPROSY; LYMPHATIC FILARIASIS; ONCHOCERCIASIS; SCHISTOSOMIASIS; and TRACHOMA.",
    "arabic_definition": "الأمراض المدارية المهملة هي مجموعة متنوعة من الالتهابات المدارية الشائعة بين السكان ذوي الدخل المنخفض في المناطق النامية في أفريقيا وآسيا والأمريكتين. وهي ناتجة عن مجموعة متنوعة من العوامل الممرضة مثل الفيروسات والبكتيريا والأوالي والديدان الطفيلية. (Neglected Diseases)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058069.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "subcutaneous-emphysema",
    "term_en": "Subcutaneous Emphysema",
    "term_ar": "نفاخ تحت الجلد",
    "synonyms": [
      "Emphysema, Subcutaneous",
      "Emphysemas, Subcutaneous",
      "Subcutaneous Emphysemas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Presence of air or gas in the subcutaneous tissues of the body.",
    "arabic_definition": "نُفاخ تَحْت الجِلْد(1) هو حالةٌ طبية تحصل عندما يُصبح هُناك هواءٌ أو غازٌ تحت طبقة الجلد مباشرةً. بما أن الهواء يأتي في الجسم من التجويف الصدري، فإن النفاخ عادةً يحدثُ في الصدر والرقبة والوجه، حيث يكون قادرًا على الانتقال من تجويف الصدر على طول اللفافة الصدرية. (Subcutaneous Emphysema)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013352.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "radiation-fibrosis-syndrome",
    "term_en": "Radiation Fibrosis Syndrome",
    "term_ar": "علاج بالأشعة",
    "synonyms": [
      "Fibrosis Syndrome, Radiation",
      "Radiation-Induced Fibrosis",
      "Fibrosis, Radiation-Induced",
      "Fibrosis, Radiation",
      "Radiation Fibrosis",
      "Radiation therapy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiation-induced fibrosis due to increased production of FIBRIN. Its symptoms include CERVICAL DYSTONIA, difficulty with speech and swallowing, swelling in the radiation field and TRISMUS.",
    "arabic_definition": "فيزياء العلاج الإشعاعي قسم من أقسام الفيزياء الطبية ومن أهم أقسامها. والعلاج الإشعاعي هو الاستعمال الطبي للأشعة المؤينة كجزء من علاج السرطان والتحكم في الخلايا الخبيثة. (Radiation Fibrosis Syndrome)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000087525.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "psychophysiologic-disorders",
    "term_en": "Psychophysiologic Disorders",
    "term_ar": "مرض نفسي جسدي",
    "synonyms": [
      "Psychophysiologic Disorder",
      "Psychophysiological Disorders",
      "Psychophysiological Disorder",
      "Psychosomatic Disorders",
      "Psychosomatic Disorder",
      "Psychosomatic medicine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of disorders characterized by physical symptoms that are affected by emotional factors and involve a single organ system, usually under AUTONOMIC NERVOUS SYSTEM control. (American Psychiatric Glossary, 1988)",
    "arabic_definition": "الطب النَّفْسَجِسْمِيّ هو فرع من الطب يعنى بالأمراض النفسية الجسمية أو الأمراض النفسجسمية (أو الأمراض السيكوسوماتية في الترجمات الحرفية) وهي أمراض تؤثر فيها العوامل الذهنية والنفسية للمريض تأثيراً كبيرا في نشوئها وتطورها وتعكرها، مثل: الصداع النصفي، والأكزيما، والقرحة، والقولون العصبي...إلخ، وفي حالة إجراء فحص طبي، لا يظهر لهذه الأمراض أي أسباب جسمية أو عضوية، أو في حال حدوث مرض ناتج عن حالة عاطفية أو مزاجية مثل الغضب أو القلق أو الكبت أو الشعور بالذنب، في هذه الحالة تعد مثل هذه الحالات أمراضاً نفسية جسمية. (Psychophysiologic Disorders)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011602.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sudden-infant-death",
    "term_en": "Sudden Infant Death",
    "term_ar": "متلازمة موت الرضيع الفجائي",
    "synonyms": [
      "Cot Death",
      "Cot Deaths",
      "Death, Cot",
      "Death, Sudden Infant",
      "Infant Death, Sudden",
      "SIDS",
      "Sudden Infant Death Syndrome",
      "SID"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The abrupt and unexplained death of an apparently healthy infant under one year of age, remaining unexplained after a thorough case investigation, including performance of a complete autopsy, examination of the death scene, and review of the clinical history. (Pediatr Pathol 1991 Sep-Oct;11(5):677-84)",
    "arabic_definition": "متلازمة موت الرضيع الفجائي (الإنجليزية: Sudden Infant Death Syndrome) ويختصر بـ (SIDS) هو موت مفاجئ غير متوقع لرضيع عمره أقل من عام واحد. ويطلق البعض على هذه الحالة اسم «موت المهد»؛ لأنها عادة ما تحدث أثناء النوم بين الساعة 00:00 و09:00.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013398.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pelvic-organ-prolapse",
    "term_en": "Pelvic Organ Prolapse",
    "term_ar": "هبوط الرحم",
    "synonyms": [
      "Organ Prolapse, Pelvic",
      "Organ Prolapses, Pelvic",
      "Pelvic Organ Prolapses",
      "Prolapse, Pelvic Organ",
      "Prolapses, Pelvic Organ",
      "Urogenital Prolapse",
      "Prolapses, Urogenital",
      "Prolapse, Urogenital"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal descent of a pelvic organ resulting in the protrusion of the organ beyond its normal anatomical confines. Symptoms often include vaginal discomfort, DYSPAREUNIA; URINARY STRESS INCONTINENCE; and FECAL INCONTINENCE.",
    "arabic_definition": "هبوط الرحم ونزول الرحم عند النساء وتدلي أعضاء الحوض هو نزول أعضاء الحوض من مواقعها الطبيعية. ويحدث التدلي في النساء عادة عندما ينهار قاع الحوض بعد علاج سرطان الجهاز التناسلي، أو الولادة، أو رفع أشياء ثقيلة. (Pelvic Organ Prolapse)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056887.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pelvic-girdle-pain",
    "term_en": "Pelvic Girdle Pain",
    "term_ar": "ألم الحزام الحوضي",
    "synonyms": [
      "Girdle Pain, Pelvic",
      "Girdle Pains, Pelvic",
      "Pain, Pelvic Girdle",
      "Pains, Pelvic Girdle",
      "Pelvic Girdle Pains",
      "Symphysis Pubis Dysfunction",
      "Dysfunctions, Symphysis Pubis",
      "Dysfunction, Symphysis Pubis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Discomfort associated with the bones that make up the pelvic girdle. It occurs frequently during pregnancy.",
    "arabic_definition": "ألم الحزام الحوضي (الإنجليزية: pelvic girdle pain) هو حالة عضلية هيكلية تتميز بالألم الناشئ من مفصل واحد أو أكثر من مفاصل الحزام الحوضي، وأكثرها شيوعًا الارتفاق العاني والمفاصل العجزية الحرقفية. يرتبط هذا الاضطراب غالبًا بالحمل وفترة ما بعد الولادة، وقد يتراوح شدته من انزعاج خفيف إلى قصور وظيفي شديد.",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059388.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arthritis",
    "term_en": "Arthritis",
    "term_ar": "التهاب المفاصل",
    "synonyms": [
      "Arthritides",
      "Polyarthritis",
      "Polyarthritides",
      "Oligoarthritis",
      "Oligoarthritides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute or chronic inflammation of JOINTS.",
    "arabic_definition": "التهاب المفاصل (اللاتينية: Arthritis) هو مجموعة الأمراض والحالات التي تؤثر وتدمر مفاصل الجسم، تشمل الأعراض عمومًا آلام المفاصل وتيبسها، أما الأعراض الأخرى فتتضمن الاحمرار، والدفء، والتورم، ونقص نطاق حركة المفاصل المصابة. تتأثر أيضًا أعضاء أخرى في بعض أنواع التهاب المفاصل.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001168.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rickets",
    "term_en": "Rickets",
    "term_ar": "كساح الأطفال",
    "synonyms": [
      "Rachitis",
      "Rachitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Disorders caused by interruption of BONE MINERALIZATION manifesting as OSTEOMALACIA in adults and characteristic deformities in infancy and childhood due to disturbances in normal BONE FORMATION. The mineralization process may be interrupted by disruption of VITAMIN D; PHOSPHORUS; or CALCIUM homeostasis, resulting from dietary deficiencies, or acquired, or inherited metabolic, or hormonal disturbances.",
    "arabic_definition": "كُساح الأطفال (الإنجليزية: rickets)، أو الرَّخَد هي حالة تؤدي إلى ضعف أو رخوة العظام عند الأطفال، والناجمة إما عن نقص غذائي أو أسباب وراثية. تشمل الأعراض تقوس الساقين، تعثر النمو، ألم العظام، الجبين الكبير، وصعوبات في النوم.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012279.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "obesity",
    "term_en": "Obesity",
    "term_ar": "سمنة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A status with BODY WEIGHT that is grossly above the recommended standards, usually due to accumulation of excess FATS in the body. The standards may vary with age, sex, genetic or cultural background. In the BODY MASS INDEX, a BMI greater than 30.0 kg/m2 is considered obese, and a BMI greater than 40.0 kg/m2 is considered morbidly obese (MORBID OBESITY).",
    "arabic_definition": "السمنة وتُعَرف بأنها تلك الحالة الطبية التي تتراكم فيها الدهون الزائدة بالجسم إلى درجةٍ تتسبب معها في وقوع آثارٍ سلبيةٍ على الصحة، مؤديةً بذلك إلى انخفاض متوسط عمر الفرد المأمول و/أو إلى وقوع مشاكل صحيةٍ متزايدةٍ. يحدد مؤشر كتلة الجسم، وهو مقياس يقابل الوزن بالطول، الأفراد الذين يعانون فرط الوزن (مرحلة ما قبل السمنة) بأنهم الأفراد الذين يكون مؤشر كتلة جسمهم بين 25 كجم/م2 و30 كجم/م2، ويحدد الأفراد الذين يعانون السمنة بأنهم أصحاب مؤشر كتلة الجسم الأكثر من 30 كجم/م2. (Obesity)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009765.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "priapism",
    "term_en": "Priapism",
    "term_ar": "قساح",
    "synonyms": [
      "Priapisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A prolonged painful erection that may lasts hours and is not associated with sexual activity. It is seen in patients with SICKLE CELL ANEMIA, advanced malignancy, spinal trauma; and certain drug treatments.",
    "arabic_definition": "القُساح (الإنجليزية: Priapism) حالة يبقى فيها القضيب منتصبًا لساعات في غياب التحفيز أو بعد انتهاء التحفيز أي عدم عودة انتصاب القضيب إلى وضعه العادي بالرغم من غياب التهيج الفيزيائي والعاطفي. وهي من أهم اسباب ألم القضيب أو ألم النتصاب وهي حالة مؤلمة وطارئة تحتاج إلى علاج سريع ويحدث الانتصاب الدائم عند الإناث أيضاً وهو في العادة لا يشخص أو يشخص خطأ ويعالج بعلاج الألم والمراقبة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011317.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ketosis",
    "term_en": "Ketosis",
    "term_ar": "فرط كيتون الجسم",
    "synonyms": [
      "Ketoacidosis",
      "Ketoacidoses",
      "Acetonemia",
      "Acetonemias",
      "Ketoacidemia",
      "Ketoacidemias",
      "Ketonemia",
      "Ketonemias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by an abnormally elevated concentration of KETONE BODIES in the blood (acetonemia) or urine (acetonuria). It is a sign of DIABETES COMPLICATION, starvation, alcoholism or a mitochondrial metabolic disturbance (e.g., MAPLE SYRUP URINE DISEASE).",
    "arabic_definition": "فَرْطُ كيتونِ الجِسْمِ أو كيتوزية (بالإنجليزية:Ketosis) (بالفرنسية:interstitium) ،هيَ حالة مَرضية تنتج عن تراكم الأجسام الكتيونية (Ketone Bodies) في الدِم (Ketonemia) وظهورها في البَول (Ketonuria)، بِحيث يُصبح تَركيزها أعلى مِن 5 مل مكافئ/لتر، وتكون مَصحوبة برائحة أسيتون تَخرج مَع التَنفس، ويصبح من المُمكن الكَشف عن الأسيتون في البَول.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007662.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phimosis",
    "term_en": "Phimosis",
    "term_ar": "شبم",
    "synonyms": [
      "Phimoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition in which the FORESKIN cannot be retracted to reveal the GLANS PENIS. It is due to tightness or narrowing of the foreskin opening.",
    "arabic_definition": "الشبم أو تضيق القلفة (الإنجليزية: phimosis) ويسمى ايضاً الجُلاَع وهو تضيق حشفة القضيب الناجم عن تضيّق دائرة القلفة أي الجلد الذي يغطي الحشفة.حيث تضيق فتحة القلفة، بحيث لا يمكن إرجاع الجلدة الأمامية، وهو عادة مرض خلقي، ولكنه قد يتطور نتيجة تليف التهابي. . عند المراهقين والبالغين، قد يؤدي ذلك إلى الشعور بالألم أثناء الانتصاب، ولكنه لا يكون مؤلمًا عمومًا.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010688.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cough",
    "term_en": "Cough",
    "term_ar": "سعال",
    "synonyms": [
      "Coughs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A sudden, audible expulsion of air from the lungs through a partially closed glottis, preceded by inhalation. It is a protective response that serves to clear the trachea, bronchi, and/or lungs of irritants and secretions, or to prevent aspiration of foreign materials into the lungs.",
    "arabic_definition": "السعال أو الكحة (الإنجليزية: Cough) هو طرد فجائي للهواء عبر الحنجرة يُساعد علي تنظيف الممرات التنفسية الكبيرة من السوائل والمهيجات والجزيئات الغريبة والميكروبات وعادة ما يحدث بشكل متكرر. يتكون السعال من ثلاث مراحل: الاستنشاق، والزفير، والإطلاق العنيف للهواء من الرئتين، يرافقه عادة صوت مميز.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003371.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bunion",
    "term_en": "Bunion",
    "term_ar": "ورم ملتهب",
    "synonyms": [
      "Bunions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal swelling of the inner aspect of the first metatarsal head affecting the first METATARSOPHALANGEAL JOINT.",
    "arabic_definition": "الورم الملتهب أو الوَكْعَة أو الوَكَع (الإنجليزية: Bunion) أو تَوَرُّمٌ ثفني في الإبهام الأفحج هو شذوذ هيكلي للعظام بين إصبع القدم الكبيرة (الأفحج) والقدم ويمكن أن يسبب آلاماُ. والورم هو تضخم في العظم أو الأنسجة حول المفصل في المشط السامي في قاعدة الإبهام الأفحج.ويسبب هذا الورم بانحناء إصبع القدم الكبير نحو إصبع القدم الثاني (التزوي) ويمكن أن تتورم الأنسجة المحيطة بالمفصل مما تسبب انتفاخ وحساسية.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000071378.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "apnea",
    "term_en": "Apnea",
    "term_ar": "انقطاع النفس",
    "synonyms": [
      "Apneas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A transient absence of spontaneous respiration.",
    "arabic_definition": "البُهْر أو الدُّعْلَة أو انقطاع النفس أو انقطاع التنفس هو مصطلح يشير إلى توقف التنفس الخارجي، وأثناء هذا الانقطاع لا تستطيع العضلات الإستنشاقية القيام بالحركة، وفي بداية الانقطاع يبقى حجم الرئتين دون تغير. واستنادًا على كيفية انسداد الشعب الهوائية الانفتاحية؛ فمن المحتمل وجود تدفق في الغازات بين الرئيتن وما حولها، وبالرغم من ذلك لا يتأثر تبادل الغازات بداخل الرئتين والتنفس الخلوي. (Apnea)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001049.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ergotism",
    "term_en": "Ergotism",
    "term_ar": "تسمم أرغوني",
    "synonyms": [
      "Ergotisms",
      "St. Anthony's Fire",
      "St. Anthony Fire",
      "Poisoning, Ergot",
      "Ergot Poisoning",
      "Ergot Poisonings",
      "Poisonings, Ergot",
      "Saint Anthonys Fire"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Poisoning caused by ingesting ergotized grain or by the misdirected or excessive use of ergot as a medicine.",
    "arabic_definition": "التسمم الأرغوني هو تأثير يظهر بعد الاستهلاك على المدى الطويل لـ سم الشقران، يرجع ذلك عادة إلى ابتلاع القلويات التي ينتجها فطر بوربوريا الدبوسية الذي يصيب الشعير وغيرها من الحبوب، ومؤخراً بفعل عدد من الأدوية التي أساسها الـ (ergoline). يُعرف أيضا بتسمم الأرغوت، تسمم الشقران وأيضا نار القديس أنتوني. (Ergotism)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004881.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pellagra",
    "term_en": "Pellagra",
    "term_ar": "بلاغرا",
    "synonyms": [
      "Pellagras"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease due to deficiency of NIACIN, a B-complex vitamin, or its precursor TRYPTOPHAN. It is characterized by scaly DERMATITIS which is often associated with DIARRHEA and DEMENTIA (the three D's).",
    "arabic_definition": "الحُصَافُ أو الحصف أو البِلَّغْرَة أو البِلَّاغْرة أو البلاغرا أو البلاجرا (الإنجليزية: Pellagra) هو مرض ناجم عن نقص النياسين (فيتامين بي3). تشمل الأعراض التهاب الجلد، الإسهال، الخرف والقروح في الفم.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010383.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "frostbite",
    "term_en": "Frostbite",
    "term_ar": "قضمة الصقيع",
    "synonyms": [
      "Frostbites"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Damage to tissues as the result of low environmental temperatures.",
    "arabic_definition": "قَضْمَةُ الصَّقِيعِ أو تثليج (الإنجليزية: Frostbite) هي إصابة جلدية تحدث عند التعرض لدرجات حرارة منخفضة للغاية، مسببةً تجمد الجلد أو الأنسجة الأخرى، وعادةً ما تؤثر على أصابع اليدين والقدمين والأنف والأذنين والخدين ومناطق الذقن. غالبًا ما تحدث قضمة الصقيع في اليدين والقدمين.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005627.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "balanitis",
    "term_en": "Balanitis",
    "term_ar": "التهاب الحشفة",
    "synonyms": [
      "Balanitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the head of the PENIS, glans penis.",
    "arabic_definition": "التهاب الحشفة هو الحالة التي تصاب فيها الحشفة بالالتهاب إذا كانت الإصابة تشمل القلفة أيضاً فتسمى التهاب القلفة والحشفة. يجب تمييز التهاب الحشفة لدى الأولاد الذين يستعملون الحفاضات عن الإحمرار العادي الذي يظهر عند الأولاد يسبب التهاب الجلد النشادري. (Balanitis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001446.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acidosis",
    "term_en": "Acidosis",
    "term_ar": "حماض",
    "synonyms": [
      "Acidoses",
      "Metabolic Acidosis",
      "Acidoses, Metabolic",
      "Acidosis, Metabolic",
      "Metabolic Acidoses",
      "حماض (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pathologic condition of acid accumulation or depletion of base in the body. The two main types are RESPIRATORY ACIDOSIS and metabolic acidosis, due to metabolic acid build up.",
    "arabic_definition": "الحماض هي عملية يقوم بها الجسم للمحافظة على الأس الهيدروجيني للدم بحيث يكون بين 7.35 و 7.45 وذلك عن طريق التحكم بتركيز ببيكربونات والضغط الجزئي لثاني أكسيد الكربون في الدم. ويتم ذلك عن طريق كل من الكلية والرئة. (Acidosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000138.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alkalosis",
    "term_en": "Alkalosis",
    "term_ar": "قلاء",
    "synonyms": [
      "Alkaloses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pathological condition that removes acid or adds base to the body fluids.",
    "arabic_definition": "القُلَاء هو اختلال التوازن بين الحمض والقـِلي في الجسم، أي نقصان تركيز الهيدروجين الأيون في بلازما الدم الشريانية المسمّاة القلومية (بالإنج. Alkalemia)، وعندما يتجاوز pH الدم.7.45، كما يترافق مع انخفاض الحموضة في البلازما والسوائل النسيجية ما عدا السوائل الجارية في العروق. (Alkalosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000471.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kyphosis",
    "term_en": "Kyphosis",
    "term_ar": "حداب",
    "synonyms": [
      "Kyphoses",
      "Hyperkyphosis",
      "Hyperkyphoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Deformities of the SPINE characterized by an exaggerated convexity of the vertebral column. The forward bending of the thoracic region usually is more than 40 degrees. This deformity sometimes is called round back or hunchback.",
    "arabic_definition": "الحُداب (اللاتينية: Kyphosis) هو انحناء وتحدب شديد غير طبيعي للعمود الفقري يحدث في مناطق الفقرات الصدرية والعجزية. يسمى التقوس القعسي المقعر نحو الداخل بشكل غير الطبيعي في مناطق الفقرات الرقبية والقطنية في العمود الفقري البزح (الظهر المنحني).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007738.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bursitis",
    "term_en": "Bursitis",
    "term_ar": "التهاب الجراب",
    "synonyms": [
      "Bursitides",
      "Adhesive Capsulitis",
      "Adhesive Capsulitides",
      "Capsulitides, Adhesive",
      "Capsulitis, Adhesive",
      "Frozen Shoulder",
      "Frozen Shoulders",
      "Shoulder, Frozen"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation or irritation of a SYNOVIAL BURSA, the fibrous sac that acts as a cushion between moving structures of bones, muscles, tendons or skin.",
    "arabic_definition": "التهاب الجراب أو التهاب التجويف الكيسي (الإنجليزية: Bursitis) هو التهاب في جِراب واحد أو أكثر وهو ( كيس صغير ) في الجسم يحتوي على السائل الزليلي. تكون متراصة وعليها غشاء زليلي والذي يفرز سائل زلالي مزلق.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002062.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lordosis",
    "term_en": "Lordosis",
    "term_ar": "قعس",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The anterior concavity in the curvature of the lumbar and cervical spine as viewed from the side. The term usually refers to abnormally increased curvature (hollow back, saddle back, swayback). It does not include lordosis as normal mating posture in certain animals ( = POSTURE + SEX BEHAVIOR, ANIMAL).",
    "arabic_definition": "القَعَس أو البَزَخ أو دخول الظهر (الإنجليزية: Lordosis) هو اضطراب يحدث في المنطقة القطنية في العمود الفقري قد ينتج عن بعض الاضطرابات الأخرى التي يحدث فيها ضعف في العضلات وقد سمي بهذا الاسم لأنه يحدث بين اللوردات الإقطاعيين. وعندما يحاول الطفل التعويض عن هذا الضعف ليتمكن من المشي فإن ظهره يندفع للأمام.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008141.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ankylosis",
    "term_en": "Ankylosis",
    "term_ar": "تصلب المفصل",
    "synonyms": [
      "Ankyloses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fixation and immobility of a joint.",
    "arabic_definition": "تصلب المفصل أو القَسَطُ (Ankylosis) هي حالة مرضية تتصلب فيها المفاصل نتيجة التحام وتصلب العظام التي تكون المفصل. هذه الحالة تتنتج بسبب جرح أو مرض.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000844.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exostoses",
    "term_en": "Exostoses",
    "term_ar": "عرن",
    "synonyms": [
      "Exostosis",
      "عرن (طب)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Benign hypertrophy that projects outward from the surface of bone, often containing a cartilaginous component.",
    "arabic_definition": "العَرَن أو الدَّخَس أو النَبَج (بالأنجليزية: exostosis) «الجمع أعران» وهي نمو عظام جديدة فوق العظم. تتسبب في حدوث ألم مزمن يراوح بين الطفيف إلى الشديد معيق وحسب الشكل الحجم والمكان. (Exostoses)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005096.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aspermia",
    "term_en": "Aspermia",
    "term_ar": "انعدام المني",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by the complete absence of SEMEN. This disorder should be differentiated from AZOOSPERMIA, absence of sperm in the semen.",
    "arabic_definition": "انعدام المني (الإنجليزية: Aspermia) هو الفقدان التام للمني، وينتج عن عقم. أحد أسباب انعدام المني هو القذف الرجوعي والذي قد يكون سببه الإفراط في استخدام العقاقير أو بسبب جراحة البروستات.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D053714.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pulpitis",
    "term_en": "Pulpitis",
    "term_ar": "التهاب اللب",
    "synonyms": [
      "Pulpitides",
      "Inflammation, Endodontic",
      "Endodontic Inflammation",
      "Endodontic Inflammations",
      "Inflammations, Endodontic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the DENTAL PULP, usually due to bacterial infection in dental caries, tooth fracture, or other conditions causing exposure of the pulp to bacterial invasion. Chemical irritants, thermal factors, hyperemic changes, and other factors may also cause pulpitis.",
    "arabic_definition": "التهاب اللب (الإنجليزية: Pulpitis)وهو التهاب والأنسجة الضامة داخل الأسنان مما يؤدي إلى خلق ضغط حول السن ويشعر المريض بالام وسببها عدوى بكتيريا التي هي بحد ذاتها تتطور إلى تسوس الأسنان. و يمكن لالتهاب اللب يسبب مشاكل مع جذور لأعصاب في الأسنان.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011671.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glossitis",
    "term_en": "Glossitis",
    "term_ar": "التهاب اللسان",
    "synonyms": [
      "Glossitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the tongue.",
    "arabic_definition": "التهاب اللسان أو اللُّسَان (الإنجليزية: glossitis) يعنى بالتهاب اللسان قرحة اللسان أو الالتهاب مع عدم القدرة على لمس الجزء الظهري لسطح اللسان (فقدان الحليمات اللسانية) مخلفا ً سطحاً أملساً ومحمراً، (وفي بعض الأحيان يسمى ضمور التهاب اللسان). وبمعنى أوسع التهاب اللسان غالبا ما يكون بسبب نقص التغذية ويميل إلى أن يكون غير مؤلم وغير مريح، وفي كثير من الأحيان يستجيب التهاب اللسان إلى العلاج إذا كان السبب معروف.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005928.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fasciitis",
    "term_en": "Fasciitis",
    "term_ar": "التهاب اللفافة",
    "synonyms": [
      "Fasciitides",
      "Fascitis",
      "Fascitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the fascia. There are three major types: 1, Eosinophilic fasciitis, an inflammatory reaction with eosinophilia, producing hard thickened skin with an orange-peel configuration suggestive of scleroderma and considered by some a variant of scleroderma; 2, Necrotizing fasciitis (FASCIITIS, NECROTIZING), a serious fulminating infection (usually by a beta hemolytic streptococcus) causing extensive necrosis of superficial fascia; 3, Nodular/Pseudosarcomatous /Proliferative fasciitis, characterized by a rapid growth of fibroblasts with mononuclear inflammatory cells and proliferating capillaries in soft tissue, often the forearm; it is not malignant but is sometimes mistaken for fibrosarcoma.",
    "arabic_definition": "التهاب اللفافة (الإنجليزية: Fasciitis) هوَ مُصطلح طبي يُقصد به حدوث التهاب في اللِفَافَة، والتي هي عبارة عن نسيج ضام يُحيط بالعضلات والأوعية الدموية والأعصاب.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005208.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteitis",
    "term_en": "Osteitis",
    "term_ar": "التهاب العظام",
    "synonyms": [
      "Bone Inflammation",
      "Inflammation, Bone"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the bone.",
    "arabic_definition": "التهاب العظم (الإنجليزية: Osteitis) يقصد به الأمراض التي يحدث فيها التهابا في العظم مثل: عدوى التهاب العظم و في أكثر الاحيان وفي الغالب يكون المسبب له البكتيريا. التهاب العظم السنخي (السنخ الجاف).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010000.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "failed-back-surgery-syndrome",
    "term_en": "Failed Back Surgery Syndrome",
    "term_ar": "متلازمة فشل عملية الظهر",
    "synonyms": [
      "Persistent spinal pain syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of persistent pain and discomfort in the BACK and the LEG following lumbar surgery, often seen in patients enrolled in pain centers.",
    "arabic_definition": "متلازمة فشل عملية الظهر (اختصارًا FBS) وتعرف أيضًا باسم متلازمة ألم ما بعد عملية الظهر هي حالةُ فشلٍ بعد خضوع المريض لعملية جراحية في العمود الفقري القطني فيصاحب فشلَها أعراضُ ألم مزمن. (Failed Back Surgery Syndrome)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055111.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thiamine-deficiency",
    "term_en": "Thiamine Deficiency",
    "term_ar": "نقص الثيامين",
    "synonyms": [
      "Deficiency, Thiamine",
      "Deficiencies, Thiamine",
      "Thiamine Deficiencies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A nutritional condition produced by a deficiency of THIAMINE in the diet, characterized by anorexia, irritability, and weight loss. Later, patients experience weakness, peripheral neuropathy, headache, and tachycardia. In addition to being caused by a poor diet, thiamine deficiency in the United States most commonly occurs as a result of alcoholism, since ethanol interferes with thiamine absorption. In countries relying on polished rice as a dietary staple, BERIBERI prevalence is very high. (From Cecil Textbook of Medicine, 19th ed, p1171)",
    "arabic_definition": "نقص الثيامين هو حالة طبية ذات مستويات منخفضة من الثيامين (فيتامين بي1). يعرف الشكل الحاد والمزمن باسم البريبري. (Thiamine Deficiency)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013832.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cheilitis",
    "term_en": "Cheilitis",
    "term_ar": "التهاب الشفة",
    "synonyms": [
      "Cheilitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the lips. It is of various etiologies and degrees of pathology.",
    "arabic_definition": "التهاب الشفاه هو التهاب يصيب الشفاه، هذا الالتهاب يمكن أن يتضمن: المنطقة حول-الفموية (المنطقة المحيطة بالشفاه)، منطقة الشفاه، والأغشية المبطنة للشفاه داخل الفم (منطقة الشفاه داخل الفم). الجلد والحدود الخارجية للشفة هي المناطق الأكثرعرضة للالتهاب أما الأغشية الشفوية داخل الفم فهي الأقل عرضةَ للالتهاب والمضاعفات الناتجة عن الحساسية. (Cheilitis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002613.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bezoars",
    "term_en": "Bezoars",
    "term_ar": "بازهر",
    "synonyms": [
      "Bezoar",
      "Hair Balls",
      "Ball, Hair",
      "Balls, Hair",
      "Hair Ball",
      "Trichobezoars",
      "Trichobezoar"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Concretions of swallowed hair, fruit or vegetable fibers, or similar substances found in the alimentary canal.",
    "arabic_definition": "البازَهْر (الإنجليزية: Bezoar) هو كتلة توجد عالقة في الجهاز الهضمي (المعدة عادة)، أو قد يُوجَد في أماكن أخرى. والبازهر الكاذب هو جسم غير قابل للهضم أُدخِلَ عمدًا في الجهاز الهضمي. (Bezoars)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001630.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "overbite",
    "term_en": "Overbite",
    "term_ar": "تراكب العضة",
    "synonyms": [
      "Overbites",
      "Over Bite",
      "Over Bites",
      "Deep Bite",
      "Deep Bites",
      "Overjet, Dental",
      "Dental Overjet",
      "Dental Overjets"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A malocclusion in which maxillary incisor and canine teeth project over the mandibular teeth excessively. The overlap is measured perpendicular to the occlusal plane and is also called vertical overlap. When the overlap is measured parallel to the occlusal plane it is referred to as overjet.",
    "arabic_definition": "تراكب العضة أو تراكب الأسنان (الإنجليزية: overbite)، طبيًا تشير إلى امتداد التجاوز العمودي (العلوي السفلي) للقاطع المركزي العلوي على القاطع المركزي السفلي، تقاس نسبة إلى حيود القواطع. مصطلح تراكب العضة لا يشير إلى حالة معينة ولا شكل معين من سوء إطباق الأسنان، بالأحرى فإن غيابه من جهة أو الإفراط في تراكب العضة من جهة أخرى قد يكون شكل من سوء إطباق الأسنان.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057887.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lathyrism",
    "term_en": "Lathyrism",
    "term_ar": "التسمم بالبيقية",
    "synonyms": [
      "Neurolathyrism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A paralytic condition of the legs caused by ingestion of lathyrogens, especially BETA-AMINOPROPIONITRILE or beta-N-oxalyl amino-L-alanine, which are found in the seeds of plants of the genus LATHYRUS.",
    "arabic_definition": "التسمم باللاتيرس (الإنجليزية: Lathyrism) ويُعرف أيضًا باسم التسمم بالبيقية، هو مرض تسممي ينتج عن الاستهلاك المزمن والمفرط للبذور أو النباتات التابعة لجنس لاتيرس ((اللاتينية: Lathyrus)) مثل البازلاء الهندية (Lathyrus sativus). يؤدي هذا المرض إلى اضطرابات في الجهاز العصبي أو الجهاز العظمي بحسب نوعه.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007842.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "kwashiorkor",
    "term_en": "Kwashiorkor",
    "term_ar": "كواشيوركور",
    "synonyms": [
      "Kwashiorkors"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome produced by severe protein deficiency, characterized by retarded growth, changes in skin and hair pigment, edema, and pathologic changes in the liver, including fatty infiltration, necrosis, and fibrosis. The word is a local name in Gold Coast, Africa, meaning displaced child. Although first reported from Africa, kwashiorkor is now known throughout the world, but mainly in the tropics and subtropics. It is considered to be related to marasmus. (From Dorland, 27th ed)",
    "arabic_definition": "الكواشيوركور (الإنجليزية: Kwashiorkor) هو مرض ينشأ بسبب سوء التغذية، وينشأ بالأخص عن النقص الحاد في المعادن والفيتامينات والبروتين الكامل، الذي يحتوي على الأحماض الأمينية التسعة التي لا يمكن للجسم تكوينها بنفسه، بل يتوجب عليه للحصول عليها من تناول الأغذية التي يوجد بها البروتين الكامل أو تكملة الأغذية ببعضها (مثل الحليب مع القمح؛ أو البيض مع البطاطس) بحيث تنتج التسعة بروتينات التي لا يستطيع الجسم تكوينها بنفسه. يحدث هذا المرض في البلدان التي تعاني من المجاعات وفي الدول النامية التي تنعدم فيها الأغذية التي تحتوي على البروتين الكامل أو من خلال الفطم المبكر، ويصيب غالباً الأطفال الذين تكون أعمارهم ما بين سنة وثلاث سنوات.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007732.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prostatitis",
    "term_en": "Prostatitis",
    "term_ar": "التهاب البروستات",
    "synonyms": [
      "Prostatitides",
      "Acute Bacterial Prostatitis",
      "Acute Bacterial Prostatitides",
      "Bacterial Prostatitides, Acute",
      "Bacterial Prostatitis, Acute",
      "Chronic Bacterial Prostatitis",
      "Bacterial Prostatitides, Chronic",
      "Bacterial Prostatitis, Chronic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infiltration of inflammatory cells into the parenchyma of PROSTATE. The subtypes are classified by their varied laboratory analysis, clinical presentation and response to treatment.",
    "arabic_definition": "التهاب الموثة أو التهاب البروستات (الإنجليزية: Prostatitis) هو التهاب غدة بروستاتا لدى الرجال. يتم تشخيص التهاب البروستات عن طريق القصة المرضية والفحص السريري الجيد بالإضافة لبعض التحاليل المخبرية ويشخص التهاب البروستات عند 8 ٪ من مجمل مرضى المسالك البولية و1 ٪ من جميع الزيارات الأولية لطبيب الرعاية الصحية في الولايات المتحدة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011472.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "porphyrias",
    "term_en": "Porphyrias",
    "term_ar": "برفيريا",
    "synonyms": [
      "Porphyria",
      "Porphyrin Disorder",
      "Disorder, Porphyrin",
      "Disorders, Porphyrin",
      "Porphyrin Disorders"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A diverse group of metabolic diseases characterized by errors in the biosynthetic pathway of HEME in the LIVER, the BONE MARROW, or both. They are classified by the deficiency of specific enzymes, the tissue site of enzyme defect, or the clinical features that include neurological (acute) or cutaneous (skin lesions). Porphyrias can be hereditary or acquired as a result of toxicity to the hepatic or erythropoietic marrow tissues.",
    "arabic_definition": "البُرْفيرِيَّةٌ أو البورفيريا (الإنجليزية: Porphyria)، هي مجموعة من الاضطرابات التي يحدث فيها تراكم لمركبات تُسمى البورفيرينات في الجسم، مما يؤثر سلبًا على الجلد أو الجهاز العصبي. تُعرف الأنواع التي تصيب الجهاز العصبي أيضًا باسم البورفيريا الحادة، حيث تظهر الأعراض بشكل مفاجئ وتكون قصيرة الأمد. (Porphyrias)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011164.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "avitaminosis",
    "term_en": "Avitaminosis",
    "term_ar": "نقص الفيتامين",
    "synonyms": [
      "Avitaminoses",
      "Deficiency, Vitamin",
      "Deficiencies, Vitamin",
      "Vitamin Deficiencies",
      "Vitamin Deficiency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition due to a deficiency of one or more essential vitamins. (Dorland, 27th ed)",
    "arabic_definition": "عوز الفيتامين هي حالة نقص طويلة الأمد لفيتامين ما. عندما يكون العوز ناجمًا عن الوارد غير الكافي من الفيتامين يُصنَّف بأنه عوز أولي، بينما يٌصنّف عندما يكون ناجمًا عن اضطراب كامن مثل سوء الامتصاص بأنه عوز ثانوي. (Avitaminosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001361.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scoliosis",
    "term_en": "Scoliosis",
    "term_ar": "جنف",
    "synonyms": [
      "Scolioses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An appreciable lateral deviation in the normally straight vertical line of the spine. (Dorland, 27th ed)",
    "arabic_definition": "الجَنَف أو الزَّوَر (الإنجليزية: scoliosis) هو حالة مرضية تصيب العمود الفقري وتسبب له انحراف (ميلان) من جهه إلى جهة، واستدارة الفقرات أيضا بهذا الاتجاه بحيث لا يكون فيها العمود الفقري عموديا. وفي هذه الحالة تتشكل عدة انحناءات أيضا تحت تأثير ثقل الجسم التي تشكل في بعض الأحيان شكل حرف (S).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012600.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dehydration",
    "term_en": "Dehydration",
    "term_ar": "تجفاف",
    "synonyms": [
      "Water Stress",
      "Stress, Water"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The condition that results from excessive loss of water from a living organism.",
    "arabic_definition": "في علم وظائف الأعضاء، التَّجْفَاف أو الاجتفاف أو فقد الماء (الإنجليزية: Dehydration) هو نقص في إجمالي مياه الجسم، مع اضطراب مصاحب لعمليات الأيض. يحدث ذلك عندما يتجاوز فقدان الماء الحر كمية المياه الحرة، عادةً بسبب ممارسة الرياضة، المرض أو ارتفاع درجة حرارة البيئة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003681.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "infertility",
    "term_en": "Infertility",
    "term_ar": "عقم",
    "synonyms": [
      "Sterility, Reproductive",
      "Reproductive Sterility",
      "Sterility",
      "Subfertility",
      "Sub-Fertility"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A reduced or absent capacity to reproduce.",
    "arabic_definition": "العقم هو عدم القدرة على الإنجاب بعد سنة واحدة من الحياة الجنسية الطبيعية دون استعمال أي موانع للحمل لكلا الزوجين. هناك العديد من أسباب التي تسبب العقم، وبعضها يمكن أن تعالج بتقنيات التلقيح بالمساعدة (ART). (Infertility)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007246.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "berylliosis",
    "term_en": "Berylliosis",
    "term_ar": "تسمم بالبيريليوم",
    "synonyms": [
      "Beryllioses",
      "Beryllium Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of pneumoconiosis caused by inhaled rare metal BERYLLIUM or its soluble salts which are used in a wide variety of industry including alloys, ceramics, radiographic equipment, and vacuum tubes. Berylliosis is characterized by an acute inflammatory reaction in the upper airway leading to BRONCHIOLITIS; PULMONARY EDEMA; and pneumonia.",
    "arabic_definition": "التسمم بالبيريليوم (أو مرض البيريليوم الزمن؛ يرمز له اختصاراً CBD) هو مرض رئوي مزمن يحدث نتيجة التعرّض لعنصر البيريليوم أو أحد مركّباته. يعد هذا المرض من أحد المخاطر المهنية التي يمكن أن تصيب العاملين في مجال صناعة مركبات الفضاء وفي تعدين البيريليوم وفي صناعة مصابيح الفلوريسنت التي كانت تستخدم البيريليوم من أجل التغطية الفوسفورية. (Berylliosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001607.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "starvation",
    "term_en": "Starvation",
    "term_ar": "جوع شديد",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Lengthy and continuous deprivation of food. (Stedman, 25th ed)",
    "arabic_definition": "الجوع الشديد أو المخمصة أو التضور جوعا هو انخفاض شديد في المواد الغذائية، والفيتامينات واستهلاك الطاقة. وهو أكثر أوجه سوء التغذية حدةً عند البشر، حيث يمكن أن يسبب الجوع لفترات طويلة تلفا دائما في أعضاء الجسم، ويؤدى في نهاية المطاف إلى الموت، وتخصص الحالة بالتسمية «الموت جوعاً». (Starvation)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013217.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemoptysis",
    "term_en": "Hemoptysis",
    "term_ar": "نفث الدم",
    "synonyms": [
      "Hemoptyses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Expectoration or spitting of blood originating from any part of the RESPIRATORY TRACT, usually from hemorrhage in the lung parenchyma (PULMONARY ALVEOLI) and the BRONCHIAL ARTERIES.",
    "arabic_definition": "نفث الدم أو بصق الدم (الإنجليزية: Hemoptysis)، هو خروج الدم أو البصاق الممزوج بالدم من الحنجرة أو الرغامى أو القصبات الرئوية أو من الرئة. بمعنى آخر أن الطرق الهوائية تنزف.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006469.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tachypnea",
    "term_en": "Tachypnea",
    "term_ar": "تسرع التنفس",
    "synonyms": [
      "Tachypneas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Increased RESPIRATORY RATE.",
    "arabic_definition": "سرع النَّفَس (أو \"تسرع التنفس\") هو تنفس سريع وغير طبيعي وعدد مرات التنفس الطبيعية في الدقيقة عند الأشخاص البالغين 12 إلى 20 مرة ويعد هذا أمرًا طبيعيًا ويشار إلى تسرع النفس بمعدل التهوية حيث يتنفس الشخص أكثر من 20 مرة في الدقيقة. ومعدلات التهوية لدى الاطفال عالية بشكل ملحوظ، والتي تنخفض بسرعة خلال الثلاث سنوات الأولى من عمرهم ثم تثبت حتى سن الثامنة عشر. (Tachypnea)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059246.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lacerations",
    "term_en": "Lacerations",
    "term_ar": "جرح",
    "synonyms": [
      "Laceration",
      "Wound"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Torn, ragged, mangled wounds.",
    "arabic_definition": "الجرح هو انشقاق على مستوى الحاجز الجلدي للجسم، وهو النوع الموجود في غالب الإصابات، ويعود السبب إلى تمزق، أو قطع، أو ثقب في الجلد. إذا جرحت يدك بأداة حادة فإن الجرح يلتئم من نفسه بعد ثلاثة أيام ويعود إلى ما كان عليه قبل الإصابة، وذلك لأن الجسم له القدرة في تلك الحالة على علاج نفسه، ففي حالة الجرح تسرع الصفائح الدموية وتلصق نفسها على الجرح ويحدث للدم إرقاء لمنع النزيف، وتأتي كرات الدم البيضاء للقضاء على أي ميكروبات أو جراثيم تكون قد أصابت الجرح، وتنقل الخلايا المجروحة، وبعد يومين أو ثلاثة أيام يتكون نسيج حبيبي وأنسجة بدنية جديدة، ثم تمتد إليها أوعية دموية رقيقة لإمداد النسيج الجديد بالدم وتغذيته، لهذا يبدو الجلد محمر اللون. (Lacerations)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D022125.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pleural-effusion",
    "term_en": "Pleural Effusion",
    "term_ar": "انصباب جنبي",
    "synonyms": [
      "Effusion, Pleural",
      "Effusions, Pleural",
      "Pleural Effusions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Presence of fluid in the pleural cavity resulting from excessive transudation or exudation from the pleural surfaces. It is a sign of disease and not a diagnosis in itself.",
    "arabic_definition": "الانصباب الجنبي أو الارتشاح البِلّوري (الانسكاب البِلّوري) هو زيادة في تراكم السائل الموجود بالتجويف البِلّوري المحيط بالرئتين. تلك الكميات الزائدة من السائل يمكن لها أن تعوق التنفس عن طريق الحد من تًوًسُع الرئتين أثناء الشهيق. (Pleural Effusion)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010996.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asbestosis",
    "term_en": "Asbestosis",
    "term_ar": "داء الأسبست",
    "synonyms": [
      "Asbestoses",
      "Pulmonary Fibrosis - from Asbestos Exposure",
      "Idiopathic Interstitial Pneumonitis - from Asbestos Exposure"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of pneumoconiosis caused by inhalation of asbestos fibers which elicit potent inflammatory responses in the parenchyma of the lung. The disease is characterized by interstitial fibrosis of the lung, varying from scattered sites to extensive scarring of the alveolar interstitium.",
    "arabic_definition": "داء الأسبست أو داء الأميانت أو الأسبستوز التهاب طويل المدى وتليف رئوي للرئتين بسبب الأسبست. قد تشمل الأعراض ضيق التنفس، والسعال ، والأزيز، وألم الصدر. (Asbestosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001195.html",
        "accessedAt": "2026-11-21"
      }
    ]
  }
];
