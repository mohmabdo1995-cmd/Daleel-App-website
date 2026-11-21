// Auto-curated verified medical terms (NIH NLM MeSH 2026 + verified bilingual medical entries) - Part 6
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

export const MEDICAL_TERMS_PART_6: RawExpandedMedicalTerm[] = [
  {
    "id": "hysterosalpingography",
    "term_en": "Hysterosalpingography",
    "term_ar": "تصوير الرحم بالصبغة",
    "synonyms": [
      "Hysterosalpingographies",
      "Salpingography",
      "Salpingographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiography of the uterus and fallopian tubes after the injection of a contrast medium.",
    "arabic_definition": "تصوير الرحم بالصبغة أو تصوير الرحم والبوق هو إجراء إشعاعي لفحص شكل تجويف الرحم وشكل وقناة فالوب. ينطوي ذلك على حقن مادة مشعة راديوية في قناة عنق الرحم وعادة ما يتم عن طريق الكشف الفلوري مع تكثيف الصورة. (Hysterosalpingography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007047.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bronchography",
    "term_en": "Bronchography",
    "term_ar": "تصوير القصبات الظليل",
    "synonyms": [
      "Bronchographies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Radiography of the bronchial tree after injection of a contrast medium.",
    "arabic_definition": "تصوير القَصَبات الظَّليل (الإنجليزية: bronchography) هي تقنية تصويرٍ شُعاعي، تتضمن استعمال الأشعة السينية في تصوير السبيل التنفسي بعد تغليف المسالك الهوائية بمادة تباين. نادرًا ما يُجرى تصوير القصبات الظليل، حيث أصبح غير مستعملٍ بعد تطوير التصوير المقطعي المحوسب وتنظير القصبات.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001995.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scanning-tunneling-microscopy",
    "term_en": "Scanning Tunneling Microscopy",
    "term_ar": "مجهر مسح نفقي",
    "synonyms": [
      "Scanning Tunnelling Microscopy",
      "Microscopies, Scanning Tunnelling",
      "Microscopy, Scanning Tunnelling",
      "Scanning Tunnelling Microscopies",
      "Tunnelling Microscopies, Scanning",
      "Tunnelling Microscopy, Scanning",
      "Microscopies, Scanning Tunneling",
      "Scanning Tunneling Microscopies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of scanning probe microscopy in which a very sharp conducting needle is swept just a few angstroms above the surface of a sample. The tiny tunneling current that flows between the sample and the needle tip is measured, and from this are produced three-dimensional topographs. Due to the poor electron conductivity of most biological samples, thin metal coatings are deposited on the sample.",
    "arabic_definition": "المجهر الأنبوبي الماسح (الإنجليزية: scanning tunneling microscope (STM)) تبلغ قوة التكبير في المجهر الانبوبي الماسح فأمكن حوالي مئة مليون مرة، يتصل به حاسوب يعمل على تحليل المعلومات الواردة إليه ليظهر صورة العينة بأبعادها الثلاثة. (Scanning Tunneling Microscopy)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016252.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "optical-coherence-tomography",
    "term_en": "Optical Coherence Tomography",
    "term_ar": "تصوير مقطعي للترابط البصري",
    "synonyms": [
      "Coherence Tomography, Optical",
      "OCT Tomography",
      "Tomography, OCT"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An imaging method using LASERS that is used for mapping subsurface structure. When a reflective site in the sample is at the same optical path length (coherence) as the reference mirror, the detector observes interference fringes.",
    "arabic_definition": "تصوير مقطعي للترابط البصري (يُعرف اختصارًا OCT) هو تقنية تصوير مقطعية (أقسام) بصرية، غير غازية، تستخدم مزيجا من نوعين مختلفين من موجات الضوء لتحقيق دقة أعلى. اختراقها يوفر صورا عالية الدقة من الطبقات مختلفة من شبكية العين. (Optical Coherence Tomography)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041623.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diffusion-tensor-imaging",
    "term_en": "Diffusion Tensor Imaging",
    "term_ar": "صورة الانتشار في الرنين المغناطيسي",
    "synonyms": [
      "Imaging, Diffusion Tensor",
      "Diffusion Tensor MRI",
      "Diffusion Tensor MRIs",
      "MRI, Diffusion Tensor",
      "DTI MRI",
      "Diffusion Tensor Magnetic Resonance Imaging",
      "Diffusion Tractography",
      "Tractography, Diffusion"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The use of diffusion ANISOTROPY data from diffusion magnetic resonance imaging results to construct images based on the direction of the faster diffusing molecules.",
    "arabic_definition": "التصوير بالرنين المغناطيسي الموّزن بمعامل الانتشار (اختصارًا DW-MRI أو DWI) هي طريقة تصوير التي تستخدم انتشار الماء في الحصول على تباين في صورة الرنين المغناطيسي. . تسمح لنا هذه الطريقة باستخراج خريطة لعملية الانتشار للجزيئات، بشكل رئيسي الماء، في الأنسجة الحيوية، والكائنات الحية وليس العكس. (Diffusion Tensor Imaging)",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D056324.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "magnetic-resonance-angiography",
    "term_en": "Magnetic Resonance Angiography",
    "term_ar": "تصوير الأوعية بالرنين المغناطيسي",
    "synonyms": [
      "Angiographies, Magnetic Resonance",
      "Magnetic Resonance Angiographies",
      "MRI Angiography",
      "Angiographies, MRI",
      "Angiography, MRI",
      "MRI Angiographies",
      "Angiography, Magnetic Resonance",
      "Time Of Flight MRA"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Non-invasive method of vascular imaging and determination of internal anatomy without injection of contrast media or radiation exposure. The technique is used especially in CEREBRAL ANGIOGRAPHY as well as for studies of other vascular structures.",
    "arabic_definition": "تصوير الأوعية بالرنين المغناطيسي (بالإنجليزية Magnetic resonance angiography (MRA)) هُوَ مَجموعة مِن التِّقنيات القائِمة عَلى التصوير بالرنين المغناطيسي (MRI) لِتَصوير الأوعية الدموية. يُستخدم تَصوير الأوعية بالرنين المغناطيسي لإعطاء صُور الشرايين (والأوردة الأقل شيوعاً) مِن أجل تَقييمها كالتضيق (تضييق غير طبيعي)، انسداد، تمدد الأوعية الدموية (توسع جدار الوعاء، في خطر التمزق) أوأي تشوهات أخرى.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018810.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myocardial-perfusion-imaging",
    "term_en": "Myocardial Perfusion Imaging",
    "term_ar": "تصوير إرواء عضلة القلب",
    "synonyms": [
      "Imaging, Myocardial Perfusion",
      "Perfusion Imaging, Myocardial",
      "Myocardial Scintigraphy",
      "Scintigraphy, Myocardial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The creation and display of functional images showing where the blood is flowing into the MYOCARDIUM by following over time the distribution of tracers injected into the blood stream.",
    "arabic_definition": "تصوير إرواء عضلة القلب (الإنجليزية: Myocardial perfusion imaging) عملية تعتمد على الطب النووي، وتعمل على توضيح الكفاءة الوظيفية لعضلة القلب. يقيِّم هذا التصوير العديد من الحالات المصيبة للقلب، مثل مرض القلب التاجي، واعتلال عضلة القلب الضخامي، واختلالات حركة جدار القلب.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D055414.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "computed-tomography-angiography",
    "term_en": "Computed Tomography Angiography",
    "term_ar": "تصوير الأوعية الطبقي المبرمج",
    "synonyms": [
      "Angiographies, Computed Tomography",
      "Computed Tomography Angiographies",
      "Tomography Angiographies, Computed",
      "Tomography Angiography, Computed",
      "CT Angiography",
      "Angiographies, CT",
      "CT Angiographies",
      "Angiography, Computed Tomography"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A non-invasive method that uses a CT scanner for capturing images of blood vessels and tissues. A CONTRAST MATERIAL is injected, which helps produce detailed images that aid in diagnosing VASCULAR DISEASES.",
    "arabic_definition": "تصوير الأوعية الطبقي المبرمج أو ما يعرف باسم (CTA) اختصارا لـ (Computed tomography angiography) هو نوع من تقنيات التصوير الطبقي المبرمج التي تستخدم لإظهار الأوردة والشرايين في الجسم الحي، حيث يتراوح حجم تلك الشرايين من بين تلك التي تغذي الدماغ بالدم إلى تلك التي تتصل مع القلب والرئتين والكلية.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000072226.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "genetic-testing",
    "term_en": "Genetic Testing",
    "term_ar": "فحص جيني",
    "synonyms": [
      "Testing, Genetic",
      "Genetic Screening",
      "Genetic Screenings",
      "Screening, Genetic",
      "Screenings, Genetic",
      "Testing, Genetic Predisposition",
      "Predisposition Testing, Genetic",
      "Predictive Genetic Testing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Detection of a MUTATION; GENOTYPE; KARYOTYPE; or specific ALLELES associated with genetic traits, heritable diseases, or predisposition to a disease, or that may lead to the disease in descendants. It includes prenatal genetic testing.",
    "arabic_definition": "الفحص الجيني أو ما يعرف بفحص الحمض النووي، يسمح بتحديد السلالات والتشخيص الجيني لقابلية الإصابة بالأمراض الوراثية. في تربية المواشي يستخدم نوع من الفحص الجيني، ويدعى اختبار النسل، لتقييم جودة القطيع. (Genetic Testing)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005820.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hiv-testing",
    "term_en": "HIV Testing",
    "term_ar": "تشخيص فيروس نقص المناعة البشرية",
    "synonyms": [
      "Testing, HIV",
      "AIDS Testing",
      "Testing, AIDS",
      "HIV-AIDS Testing",
      "Testing, HIV-AIDS",
      "HIV Infection Diagnosis",
      "Diagnosis, HIV Infection",
      "Diagnosis of HIV/AIDS"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diagnosis of HIV INFECTIONS by assaying bodily fluids or tissues for the presence of HIV ANTIBODIES; HIV ANTIGENS; or the VIRAL RNA of HIV.",
    "arabic_definition": "تُستخدم اختبارات فيروس نقص المناعة البشرية (HIV) للتحقق من وجود فيروس نقص المناعة البشرية، وهو الفيروس الذي يسبب متلازمة نقص المناعة (الإيدز) في مصل الدم، واللعاب، والبول. وقد ترصد مثل هذه الاختبارات جسيمات مضادة، أو مولدات الضد، أو حمض نووي ريبوزي. (HIV Testing)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000082922.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pericardiocentesis",
    "term_en": "Pericardiocentesis",
    "term_ar": "بزل التامور",
    "synonyms": [
      "Pericardiocenteses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Puncture and aspiration of fluid from the PERICARDIUM.",
    "arabic_definition": "بزل التأمور(الإنجليزية: Pericardiocentesis).هو إجراء يتم فيه بزل غشاءالتامور من أجل استحضار عينة من السائل الذي يجري بين وريقتي الغشاء (السائل التأموري)، ويمكن إجراء هذا الفحص لأسباب علاجية وتشخيصية. ويهدف بزل التامور علاجياً إلى التخفيف من الضغط الواقع على القلب بفعل وجود كمية كبيرة من السائل الجائل بين وريقـتي التامور، اما البزل التشخيصي فيجري فيه سحـب كـمية مناسـبة من السـائل، ومن ثم ترسل إلى المختبر لإجراء الفحوصات الضرورية التي يراها الطبيب مناسبة.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020519.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "freeze-drying",
    "term_en": "Freeze Drying",
    "term_ar": "تجفيف بالتجميد",
    "synonyms": [
      "Drying, Freeze",
      "Dryings, Freeze",
      "Freeze Dryings",
      "Lyophilization",
      "Lyophilizations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Method of tissue preparation in which the tissue specimen is frozen and then dehydrated at low temperature in a high vacuum. This method is also used for dehydrating pharmaceutical and food products.",
    "arabic_definition": "التجميد المجفف، والمعروف كذلك باسم التبريد أو التجفيد، أو بالإنجليزية lyophilization أو cryodesiccation، عمليةُ تجفيفٍ تستخدم أساسًا من أجل حفظ المواد القابلة للفساد أو جعل المواد في حالة تسهل نقلها. ويعمل التجميد بالتبريد من خلال تجميد المواد ثم تقليل الضغط المحيط بها للسماح بتسامي المياه الموجودة في المواد بشكل مباشر من الحالة الصلبة إلى الحالة الغازية. (Freeze Drying)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005612.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunohistochemistry",
    "term_en": "Immunohistochemistry",
    "term_ar": "كيمياء نسيجية مناعية",
    "synonyms": [
      "Immunohistocytochemistry",
      "Immunogold Techniques",
      "Immunogold Technique",
      "Technique, Immunogold",
      "Techniques, Immunogold",
      "Immunogold Technics",
      "Immunogold Technic",
      "Technic, Immunogold"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Histochemical localization of immunoreactive substances using labeled antibodies as reagents.",
    "arabic_definition": "الكيمياء النسيجية المناعية (الإنجليزية: Immunohistochemistry) هي تقنية مخبرية لتحديد مكان البروتينات عن طريق تصوير انتقائي لمولدات الضد في خلايا قطعة نسيج حيوي باستغلال مبدأ ارتباط الأجسام المضادة بمولدات الضد. كلمة المناعية في اسم هذه التقنية تشير إلى الأجسام المضادة والكلمة نسيجية إشارة إلى النسيج الحيوي وذلك لتمييزها عن تقنية الكيمياء الخلوية المناعية.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007150.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cell-tracking",
    "term_en": "Cell Tracking",
    "term_ar": "تعقب الهاتف المحمول",
    "synonyms": [
      "Cell Trackings",
      "Tracking, Cell",
      "Trackings, Cell",
      "Mobile phone tracking"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Non-invasive imaging of cells that have been labeled non-destructively, such as with nanoemulsions or reporter genes that can be detected by molecular imaging, to monitor their location, viability, cell lineage expansion, response to drugs, movement, or other behaviors in vivo.",
    "arabic_definition": "هي عملية تستخدم لتحديد موقع الهاتف المحمول، سواء كان ثابتًا أو متحركًا. يمكن تحديد الموقع باستخدام العديد من التقنيات، مثل إشارات الراديو متعددة الأطراف بين الكثير من المواقع الخلوية للشبكة والهاتف، أو ببساطة استخدام نظام التموضع العالمي. (Cell Tracking)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058948.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunoelectrophoresis",
    "term_en": "Immunoelectrophoresis",
    "term_ar": "الرحلان الكهربائي المناعي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A technique that combines protein electrophoresis and double immunodiffusion. In this procedure proteins are first separated by gel electrophoresis (usually agarose), then made visible by immunodiffusion of specific antibodies. A distinct elliptical precipitin arc results for each protein detectable by the antisera.",
    "arabic_definition": "الرحلان الكهربائي المناعي هو اسم عام لعدد من الطرق البيوكيميائية لفصل البروتينات وتوصيفها بناءً على الرحلان الكهربائي والتفاعل مع الأجسام المضادة. تتطلب جميع أنواع الرحلان الكهربائي المناعي جلوبولينات مناعية ، تُعرف أيضًا باسم الأجسام المضادة ، تتفاعل مع البروتينات المراد فصلها أو تمييزها. (Immunoelectrophoresis)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007122.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amniocentesis",
    "term_en": "Amniocentesis",
    "term_ar": "بزل السلى",
    "synonyms": [
      "Amniocenteses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Percutaneous transabdominal puncture of the uterus during pregnancy to obtain amniotic fluid. It is commonly used for fetal karyotype determination in order to diagnose abnormal fetal conditions.",
    "arabic_definition": "بزل السلى (الإنجليزية: Amniocentesis) اختبار آمن يشخص الشذوذات الصبغية والاضطرابات الوراثية للأجنة وفيه يستخدم الطبيب إبرة رفيعة ويقوم بإدخالها في بطن الحامل من اجل الحصول على عينة قليلة من السائل الأمنيوسي من خلال الكيس المحيط بالجنين داخل الرحم. ويقدم هذا الاختبار معلومات عن البنية الوراثية للجنين قبل ولادته وكذلك اكتشاف فيما إذا كانت الرئتان ناضجتين بشكل كافٍ للقيام بعملهما عند الولادة بشكل طبيعي.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000649.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "biopsy",
    "term_en": "Biopsy",
    "term_ar": "خزعة",
    "synonyms": [
      "Biopsies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Removal and pathologic examination of specimens from the living body.",
    "arabic_definition": "الخِزْعَة أو الخَزْعَة أو الخَذْعَة أو التشخيص النسيجي أو فحص العينة الحية أو اختزاع، نقحرة: بايوبسي (الإنجليزية: Biopsy)، هو اختبارٌ طبي يجريه جراح أو طبيب أشعة تدخّلي أو طبيب قلب تدخّلي بأخذ عينة من خلايا أو أنسجة ليتم فحصها؛ وهي عملية إزالة طبيّة لجزئ حيّ ليتم التحقق من وجود علة أو مرض. يفحص الأنسجة عالم أمراض تحت المجهر كما يمكن فحصها كيميائيا.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001706.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hematocrit",
    "term_en": "Hematocrit",
    "term_ar": "هيماتوكريت",
    "synonyms": [
      "Hematocrits",
      "Packed Red-Cell Volume",
      "Packed Red-Cell Volumes",
      "Red-Cell Volume, Packed",
      "Red-Cell Volumes, Packed",
      "Volume, Packed Red-Cell",
      "Volumes, Packed Red-Cell",
      "Erythrocyte Volume, Packed"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The volume of packed RED BLOOD CELLS in a blood specimen. The volume is measured by centrifugation in a tube with graduated markings, or with automated blood cell counters. It is an indicator of erythrocyte status in disease. For example, ANEMIA shows a low value; POLYCYTHEMIA, a high value.",
    "arabic_definition": "الهيماتوكريت أو حجم الخلايا المكدسة (الإنجليزية: Haematocrit) أو مكداس الدم أو فارزة الدم وتعني هيماتوكريت في اللاتينية فصل الدم أو عزل الخلايا والمقصود بهذا المصطلح الراسب الدموي أو النسبة المئوية لحجم خلايا الدم الحمراء من إجمالي حجم الدم. ويكون بالوضع الطبيعي حوالي 47% عند الرجال وحوالي 42% عند النساء وعند الأطفال فهي حوالي 36% حتى 44%. (Hematocrit)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006400.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dissection",
    "term_en": "Dissection",
    "term_ar": "تسلخ",
    "synonyms": [
      "Dissections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The separation and isolation of tissues for surgical purposes, or for the analysis or study of their structures.",
    "arabic_definition": "التسلّخ أو التَّشريح هو تقطيع جسد الحيوان أو النبات المُتوفّى بغرض دراسة البُنى التشريحيّة. يُستخدم تشريح الجثث في علم الباثولوجيا والطّب الشرعيّ لتحديد سبب الوفاة عند الإنسان. (Dissection)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004210.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "autoradiography",
    "term_en": "Autoradiography",
    "term_ar": "صورة إشعاعية ذاتية",
    "synonyms": [
      "Radioautography",
      "Autoradiograph"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The making of a radiograph of an object or tissue by recording on a photographic plate the radiation emitted by radioactive material within the object. (Dorland, 27th ed)",
    "arabic_definition": "الصورة الإشعاعية الذاتية هي صورة إشعاعية على شريحة أشعة سينية أو لوح مستحلب نووي استحصل عليها من نمط اضمحلال النشاط الإشعاعي (مثل جسيمات بيتا أو أشعة غاما) الصادر عن توزع مادة مشعة في نسيج حيوي. يمكن الاستحصال على هذه الصورة بشكل رقمي نظراً للتطور الحاصل في أجهزة الكشف سواء عن طريق الكواشف الومّاضة؛ أو أنظمة التصوير الفوسفوري للفلزات الأرضية النادرة. (Autoradiography)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001345.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endoscopic-retrograde-cholangiopancreatography",
    "term_en": "Endoscopic Retrograde Cholangiopancreatography",
    "term_ar": "تصوير البنكرياس والأقنية الصفراوية بالتنظير الباطني بالطريق الراجع",
    "synonyms": [
      "ERCP",
      "Retrograde Cholangiopancreatography, Endoscopic",
      "Cholangiopancreatographies, Endoscopic Retrograde",
      "Endoscopic Retrograde Cholangiopancreatographies",
      "Retrograde Cholangiopancreatographies, Endoscopic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fiberoptic endoscopy designed for duodenal observation and cannulation of VATER'S AMPULLA, in order to visualize the pancreatic and biliary duct system by retrograde injection of contrast media. Endoscopic (Vater) papillotomy (SPHINCTEROTOMY, ENDOSCOPIC) may be performed during this procedure.",
    "arabic_definition": "تصوير البنكرياس والأقنية الصفراوية بالتنظير الباطني بالطريق الراجع (Endoscopic retrograde cholangiopancreatography) (ERCP) هو الأسلوب الذي يجمع بين استخدام التنظير الداخلي والتنظير التألقي لتشخيص وعلاج بعض مشاكل جهاز القنوات الصفراوية والقنوات المعثكلية. من خلال المنظار يمكن للطبيب مشاهدة داخل الإثني عشر والمعدة وحقن الأصباغ في شجرة القنوات المرارية والبنكرياسية بحيث يمكن مشاهدتها بالأشعة السينية.",
    "specialty": "Radiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002760.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oximetry",
    "term_en": "Oximetry",
    "term_ar": "قياس التأكسج النبضي",
    "synonyms": [
      "Oximetries",
      "Oximetry, Pulse",
      "Oximetries, Pulse",
      "Pulse Oximetries",
      "Pulse Oximetry"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The determination of oxygen-hemoglobin saturation of blood either by withdrawing a sample and passing it through a classical photoelectric oximeter or by electrodes attached to some translucent part of the body like finger, earlobe, or skin fold. It includes non-invasive oxygen monitoring by pulse oximetry.",
    "arabic_definition": "قياس التأكسج النبضي (الإنجليزية: Pulse oximetry) هي تقنية تستخدم لمعرفة نسبة تأكسد الدم بطريقة غير مباشرة (كون الطريقة المباشرة هي أخذ عينة من الدم الشرياني وتحليلها) كما يقيس الجهاز عدد نبضات القلب. وعلى الرغم من أن قراءة الجهاز لتأكسد الدم (تشبع الدم المحيطي بالأكسجين SpO2) ليست دائما مطابقة لقراءة تشبع الأكسجين الشرياني SaO2 من تحليل غازات الدم الشرياني، ألا أنها طريقة آمنة، ومريحة، وليست جائرة أو مكلفة لقياس تشبع الدم بالأكسجين في الاستخدام السريري.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010092.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microtomy",
    "term_en": "Microtomy",
    "term_ar": "مشراح",
    "synonyms": [
      "Thin Sectioning",
      "Sectionings, Thin",
      "Sectioning, Thin",
      "Thin Sectionings",
      "Ultramicrotomy",
      "Microtome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The technique of using a microtome to cut thin or ultrathin sections of tissues embedded in a supporting substance. The microtome is an instrument that hold a steel, glass or diamond knife in clamps at an angle to the blocks of prepared tissues, which it cuts in sections of equal thickness.",
    "arabic_definition": "المشراح أو الميكروتوم (الإنجليزية: Microtome) هي أداة تستخدم لقطع شرائح رقيقة جدا من المواد. يستخدم الميكروتوم في الأعمال المجهرية، حيث يعد الأنسجة للفحص تحت المجهر الضوئي أو الإلكتروني. (Microtomy)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008867.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "serotyping",
    "term_en": "Serotyping",
    "term_ar": "نمط مصلي",
    "synonyms": [
      "Serotypings",
      "Serotype"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Process of determining and distinguishing species of bacteria or viruses based on antigens they share.",
    "arabic_definition": "النمط المصلي أو الضرب المصلي يشير إلى التغيرات المتميزة التي تحدث داخل أنواع من البكتيريا أو الفيروسات أو بين الخلايا المناعية في مختلف الأفراد. ويتم تصنيف هذه الميكروبات، أو الفيروسات، أو الخلايا معًا استنادًا إلى مستضدات سطح الخلية، مما يسمح بالتصنيف الوبائي للكائنات الحية على مستوى الأنواع الفرعية. (Serotyping)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012703.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunophenotyping",
    "term_en": "Immunophenotyping",
    "term_ar": "نمط ظاهري مناعي",
    "synonyms": [
      "Immunophenotypings",
      "Immunologic Subtyping",
      "Immunologic Subtypings",
      "Subtyping, Immunologic",
      "Subtypings, Immunologic",
      "Lymphocyte Immunophenotyping",
      "Immunophenotyping, Lymphocyte",
      "Immunophenotypings, Lymphocyte"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Process of classifying cells of the immune system based on structural and functional differences. The process is commonly used to analyze and sort T-lymphocytes into subsets based on CD antigens by the technique of flow cytometry.",
    "arabic_definition": "النمط الظاهري المناعي (الإنجليزية: Immunophenotyping) هو تقنية تستخدم لدراسة البروتين الذي تعبر عنه الخلايا. يشيع استخدام هذه التقنية في البحوث العلمية الأساسية والغرض التشخيصي للمختبر.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016130.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paracentesis",
    "term_en": "Paracentesis",
    "term_ar": "بزل",
    "synonyms": [
      "Paracenteses",
      "Centesis",
      "Centeses",
      "Puncture and Drainage",
      "Drainage and Puncture",
      "Puncture and Aspiration",
      "Aspiration and Puncture",
      "Culdocentesis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A procedure in which fluid is withdrawn from a body cavity or organ via a trocar and cannula, needle, or other hollow instrument.",
    "arabic_definition": "البَزل أو الإفراغ أو البَط (الإنجليزية: Paracentesis) هو شكل من أشكال الإجراءات التي تتم لأخذ العينات من السوائل في الجسم، يشير بصورة عامة إلى بزل الصفاق، والذي يتم فيه حقن التجويف البريتوني عن طريق إبرة لإزالة السائل البريتوني. يشير «البزل التشخيصي» لإزالة كمية صغيرة من السائل للاختبار.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019152.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tympanocentesis",
    "term_en": "Tympanocentesis",
    "term_ar": "بزل الطبلة",
    "synonyms": [
      "Tympanocenteses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Needle aspiration of fluid from the MIDDLE EAR through a puncture in the TYMPANIC MEMBRANE.",
    "arabic_definition": "بَزْلُ الطَّبْلَة، هو إجراء جراحي بسيط لتصريف السوائل من الأذن الوسطى. يُجرى عادةً بسبب التهاب الأذن الوسطى، وذلك باستخدام إبرة ثقب صغيرة لثقب الغشاء الطبلي. (Tympanocentesis)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069356.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "thrombelastography",
    "term_en": "Thrombelastography",
    "term_ar": "تخطيط المرونة الخثرية",
    "synonyms": [
      "Thromboelastography",
      "Thromboelastometry"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Use of a thrombelastograph, which provides a continuous graphic record of the physical shape of a clot during fibrin formation and subsequent lysis.",
    "arabic_definition": "تخطيط المرونة الخثرية، هي طريقة لاختبار كفاءة تخثر الدم تُستخدم بشكل رئيسي في الجراحة والتخدير، على الرغم من استخدامه بشكل متزايد في الإنعاش في أقسام الطوارئ ووحدات العناية المركزة وأجنحة المخاض والولادة. تشمل الاختبارات الأشيع لتخثر الدم وقت البروثرومبين (PT، INR) ووقت الثرومبوبلاستين الجزئي المُفعَّل (aPTT) التي تقيس وظائف عوامل التخثر، ولكن يمكن لتخطيط المرونة الخثرية تقييم وظيفة الصفائح الدموية وقوة الخثرة وانحلال الفيبرين؛ وهي أمور لا تستطيع الاختبارات آنفة الذكر تقييمها. (Thrombelastography)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013916.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "conization",
    "term_en": "Conization",
    "term_ar": "استئصال مخروطي عنقي",
    "synonyms": [
      "Conizations",
      "Conisation",
      "Conisations",
      "Cervical conization"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The excision of a cone of tissue, especially of the CERVIX UTERI.",
    "arabic_definition": "استِئصال مَخروطي عُنقي (الإنجليزية: Cervical conization) هو استئصال عينة مخروطية الشكل من الغشاء المخاطي الخاص بعنق الرحم، وقد يستعمل الاستئصال بِغرض التَشخيص (أخذ خزعة) أو يستعمل لأغراض علاجية بهدف إزالة الخلايا السابقة للسرطان، ويُعتبر الاستئصال المخروطي لعنق الرحم علاج شائع لخلل التنسج الذي يَتبع لطاخة بابانيكولاو.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019092.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "immunodiffusion",
    "term_en": "Immunodiffusion",
    "term_ar": "انتشار مناعي",
    "synonyms": [
      "Immunodiffusions",
      "Gel Diffusion Tests",
      "Diffusion Test, Gel",
      "Diffusion Tests, Gel",
      "Gel Diffusion Test",
      "Test, Gel Diffusion",
      "Tests, Gel Diffusion"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Technique involving the diffusion of antigen or antibody through a semisolid medium, usually agar or agarose gel, with the result being a precipitin reaction.",
    "arabic_definition": "الانتشار المناعي (الإنجليزية: Immunodiffusion) هو اختبار تَشخيصي يتضمن الانتشار من خلال مادة مثل الآغار. هُناك شكلين معروفين من الانتشار المناعي، الانتشار المناعي المضاعف حسب أوكتارلوني والانتشار المناعي الشعاعي.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005779.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arthrocentesis",
    "term_en": "Arthrocentesis",
    "term_ar": "بزل المفصل",
    "synonyms": [
      "Arthrocenteses",
      "Arthrocentesis,Temporomandibular Joint",
      "Arthrocentesis,Temporomandibular Joints",
      "Joint, Arthrocentesis,Temporomandibular",
      "Joints, Arthrocentesis,Temporomandibular",
      "Temporomandibular Joint Arthrocentesis",
      "Arthrocenteses, Temporomandibular Joint",
      "Joint Arthrocenteses, Temporomandibular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Puncture and aspiration of fluid (e.g., SYNOVIAL FLUID) from a joint cavity. It is used sometimes to irrigate or administer drugs into a joint cavity.",
    "arabic_definition": "بزل المفصل (الإنجليزية: Arthrocentesis) هو عملية سريرية تجرى بواسطة محقنة لجمع السائل الزلالي من محفظة المفصل. يستخدم بزل المفصل لتشخيص النقرس والتهاب المفاصل وعدوى السائل الزلالي مثل التهاب المفاصل الإنتاني.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069237.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cordocentesis",
    "term_en": "Cordocentesis",
    "term_ar": "اعتيان دم الحبل السري عبر الجلد",
    "synonyms": [
      "Cord Blood Sampling",
      "Blood Sampling, Cord",
      "Blood Samplings, Cord",
      "Cord Blood Samplings",
      "Sampling, Cord Blood",
      "Samplings, Cord Blood",
      "Percutaneous Umbilical Blood Sampling",
      "Percutaneous umbilical cord blood sampling"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The collecting of fetal blood samples typically via ENDOSCOPIC ULTRASOUND GUIDED FINE NEEDLE ASPIRATION from the umbilical vein.",
    "arabic_definition": "اعتيان دم الحبل السري عبر الجلد، ويسمى أيضًا بزل الحبل السري، أو أخذ عينة من الدم الجنيني، أو أخذ عينة من الوريد السري هو اختبار وراثي تشخيصي يفحص الدم من الحبل السري الجنيني للكشف عن تشوهات الجنين. يصل دم الجنين ودم الأم في الرحم إلى الجنين عبر وريد واحد وشريانين. (Cordocentesis)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017218.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cryopreservation",
    "term_en": "Cryopreservation",
    "term_ar": "حفظ بالبرودة",
    "synonyms": [
      "Cryofixation",
      "Cryonic Suspension",
      "Cryonic Suspensions",
      "Suspension, Cryonic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Preservation of cells, tissues, organs, or embryos by freezing. In histological preparations, cryopreservation or cryofixation is used to maintain the existing form, structure, and chemical composition of all the constituent elements of the specimens.",
    "arabic_definition": "الحفظ بالبرودة أو الحفظ بالتبريدأو الحفظ بالتجميد أو الحفظ بالتبريد الشديد هي عملية حفظ العضية الخلوية والخلايا والنسيج الخلوي والنسيج البيني خارج الخلية والأعضاء، أو أي بنية بيولوجية معرضة للضرر بسبب حركية التفاعل الكيميائية غير المنظمة. تُحفظ تلك البنى العضوية عن طريق تبريدها بدرجات حرارة منخفضة جدًا (80 درجة سيليزيوس تحت الصفر بشكل معياري وباستخدام ثاني أوكسيد الكربون، أو حتى 196– سيلزيوس باستخدام النيتروجين السائل). (Cryopreservation)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015925.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytophotometry",
    "term_en": "Cytophotometry",
    "term_ar": "تعداد الخلايا",
    "synonyms": [
      "Cytophotometries",
      "Microfluorometry",
      "Microfluorometries",
      "Cytometry"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A method for the study of certain organic compounds within cells, in situ, by measuring the light intensities of the selectively stained areas of cytoplasm. The compounds studied and their locations in the cells are made to fluoresce and are observed under a microscope.",
    "arabic_definition": "تعداد الخلايا أو عَدُّ الخلايا (الإنجليزية: Cytometry) هو قياس خصائص الخلايا. المتغيرات التي يمكن قياسها بطرق تعداد الخلايا تشمل حجم الخلية، عدد الخلية، مورفولوجيا الخلية (الشكل والبنية)، مرحلة دورة الخلية، محتوى الحمض النووي، ووجود أو عدم وجود بروتينات محددة على سطح الخلية أو في السيتوبلازم. (Cytophotometry)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003592.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xenodiagnosis",
    "term_en": "Xenodiagnosis",
    "term_ar": "تشخيص ثوائي",
    "synonyms": [
      "Xenodiagnoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A method for diagnosing a disease in one organism by inoculating the putative causative organism in a second animal of a different species. It has been used for the detection of parasites (Trypanosoma cruzi and Trichinella spiralis) when peripheral blood smears are negative. (Segen, Current Med Talk, 1995)",
    "arabic_definition": "تشخيص ثوائي (الإنجليزية: Xenodiagnosis) هو عملية تشخيص الأمراض المعدية من خلال تعريض الأنسجة لناقلات معقمة، ثم فحص وجود كائنات حية دقيقة في هذه الناقلات.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D020525.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemoglobinometry",
    "term_en": "Hemoglobinometry",
    "term_ar": "مقياس الهيموغلوبين",
    "synonyms": [
      "Hemoglobinometries",
      "Hemoglobinometer"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Measurement of hemoglobin concentration in blood.",
    "arabic_definition": "مقياس الهيموغلوبين هو جهاز طبي يستخدم لقياس تركيز الهيموغلوبين في الدم. يمكن أن تعمل عن طريق القياس الضوء الطيفي لتركيز الهيموغلوبين. (Hemoglobinometry)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006452.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glucose-tolerance-test",
    "term_en": "Glucose Tolerance Test",
    "term_ar": "اختبار تحمل الجلوكوز",
    "synonyms": [
      "Glucose Tolerance Tests",
      "Intravenous Glucose Tolerance Test",
      "Intravenous Glucose Tolerance",
      "Oral Glucose Tolerance Test",
      "OGTT",
      "Oral Glucose Tolerance",
      "Glucose Tolerance, Oral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A test to determine the ability of an individual to maintain HOMEOSTASIS of BLOOD GLUCOSE. It includes measuring blood glucose levels in a fasting state, and at prescribed intervals before and after oral glucose intake (75 or 100 g) or intravenous infusion (0.5 g/kg).",
    "arabic_definition": "اختبار تحمل الجلوكوز (الإنجليزية: Glucose tolerance test) هو اختبار طبي يُعطى فيه المريض الجلوكوز ثم تُؤخذ منه عينات الدم بعد ذلك لتحديد مدى سرعة ذهابه من الدم. يستخدم الاختبار عادة لتحري الداء السكري، ومقاومة الإنسولين، وضعف وظيفة خلايا بيتا، وفي بعض الأحيان نقص سكر الدم الارتكاسي وضخامة الأطراف، أو الاضطرابات النادرة في استقلاب السكريات.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005951.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chorionic-villi-sampling",
    "term_en": "Chorionic Villi Sampling",
    "term_ar": "فحص الزغابات المشيمية",
    "synonyms": [
      "Chorionic Villi Samplings",
      "Sampling, Chorionic Villi",
      "Samplings, Chorionic Villi",
      "Biopsy, Chorionic Villi",
      "Biopsies, Chorionic Villi",
      "Chorionic Villi Biopsies",
      "Chorionic Villi Biopsy",
      "Chorionic Villus Sampling"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A method for diagnosis of fetal diseases by sampling the cells of the placental chorionic villi for DNA analysis, presence of bacteria, concentration of metabolites, etc. The advantage over amniocentesis is that the procedure can be carried out in the first trimester.",
    "arabic_definition": "فحص الزغابات المشيمية أو فحص خملات الكوريون (الإنجليزية: Chorionic villus sampling)، هي اختبار يُجرى أثناء الحمل للكشف عن بعض الاختلالات الوراثية في جنين الإنسان والعمل على تحديد الاجنة غير الطبيعية وتشخيص أكثر من 200 مرض يعد أهمها هو متلازمة داون أثناء الحياة الجنينية ، يمكن إجراء هذه الطريقة في الفترة ما بين الاسبوع الثامن والعاشر من الحمل وتعطي هذه الطريقة نتائج في وقت قصير نسبيا. أجري هذا الاختبار لأول مرة على يد عالم الكيمياء الحيوية الإيطالي جيوسيف سيموني عام 1983. (Chorionic Villi Sampling)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015193.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blood-urea-nitrogen",
    "term_en": "Blood Urea Nitrogen",
    "term_ar": "نيتروجين يوريا الدم",
    "synonyms": [
      "Nitrogen, Blood Urea",
      "Urea Nitrogen, Blood",
      "BUN"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The urea concentration of the blood stated in terms of nitrogen content. Serum (plasma) urea nitrogen is approximately 12% higher than blood urea nitrogen concentration because of the greater protein content of red blood cells. Increases in blood or serum urea nitrogen are referred to as azotemia and may have prerenal, renal, or postrenal causes. (From Saunders Dictionary &amp; Encyclopedia of Laboratory Medicine and Technology, 1984)",
    "arabic_definition": "نيتروجين يوريا الدم (مختصره: BUN من Blood urea nitrogen) هو أحد الفحوص التشخصية الطبية التي تستخدم لتشخيص حالة الكلية. المعدل الطبيعي هو 1.8-7.1 مللي مول/لتر.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001806.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cell-migration-assays",
    "term_en": "Cell Migration Assays",
    "term_ar": "هجرة الخلية",
    "synonyms": [
      "Assay, Cell Migration",
      "Assays, Cell Migration",
      "Cell Migration Assay",
      "Migration Assay, Cell",
      "Migration Assays, Cell",
      "Cell Motility Assays",
      "Assay, Cell Motility",
      "Assays, Cell Motility"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Specific assays that measure the migration of cells. They are commonly used to measure the migration of immune cells in response to stimuli and the inhibition of immune cell migration by immunosuppressive factors.",
    "arabic_definition": "هجرة الخلايا (الإنجليزية: Cell migration) هي عملية مركزية في تطوير وصيانة الكائنات متعددة الخلايا. يتطلب تكوين الأنسجة أثناء التكون الجنيني والتئام الجروح والاستجابات المناعية حركة منسقة للخلايا في اتجاهات معينة إلى مواقع محددة. (Cell Migration Assays)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054443.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "skin-window-technique",
    "term_en": "Skin Window Technique",
    "term_ar": "تقنية نافذة الجلد",
    "synonyms": [
      "Skin Window Techniques",
      "Technique, Skin Window",
      "Techniques, Skin Window",
      "Skin Window Technic",
      "Skin Window Technics",
      "Technic, Skin Window",
      "Technics, Skin Window",
      "Rebuck Skin Window Technique"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A technique to study CELL MIGRATION in the INFLAMMATION process or during immune reactions. After an area on the skin is abraded, the movement of cells in the area is followed via microscopic observation of the exudate through a coverslip or tissue culture chamber placed over the area.",
    "arabic_definition": "تقنية النافذة الجلدية (بالإنجليزية : Skin window technique ) هي إحدى التقنيات المستخدمة في علم المناعة حيث يتم كشط الطبقة العليا من الجلد مما يمكننا من التعرف على الاستجابة المناعية التي يمكن أن تحدث عند تقليص حاجز مناعي فعلي للعائل ، كما يمكن أيضاً ملاحظة حركة حشد كريات الدم البيضاء . وقد وضع هذه التقنية جون ريباك (بالإنجليزية : John Rebuck ) عام 1955 م .",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012884.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prothrombin-time",
    "term_en": "Prothrombin Time",
    "term_ar": "زمن البروثرومبين",
    "synonyms": [
      "Prothrombin Times",
      "Time, Prothrombin",
      "Times, Prothrombin",
      "Russell's Viper Venom Time",
      "Russell Viper Venom Time",
      "Russells Viper Venom Time",
      "Quick Test",
      "Test, Quick"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Clotting time of PLASMA recalcified in the presence of excess TISSUE THROMBOPLASTIN. Factors measured are FIBRINOGEN; PROTHROMBIN; FACTOR V; FACTOR VII; and FACTOR X. It is used for monitoring anticoagulant therapy with COUMARINS.",
    "arabic_definition": "زمن البروثرومبين (اختصارًا PT) والمقاييس المستمدة منه - نسبة البروثرومبين (PR) (الإنجليزية: Prothrombin time) والنسبة المعيارية الدولية (الإنجليزية: International Normalized Ratio) المعروفة اختصاراً بمؤشر سيولة الدم INR - هي مقاييسٌ للعوامل الخارجية لعملية تجلط الدم. وتستخدم لتحديد ميول الدم للتجلط، وبناء عليه قياس وتحديد: الجرعات من الأدوية المانعة للتجلط مثل الوارفارين، تلف الكبد، وحالة فيتامين ك.",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011517.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "papanicolaou-test",
    "term_en": "Papanicolaou Test",
    "term_ar": "لطاخة بابانيكولاو",
    "synonyms": [
      "Test, Papanicolaou",
      "Papanicolaou Smear",
      "Smear, Papanicolaou",
      "Pap Test",
      "Test, Pap",
      "Pap Smear",
      "Smear, Pap"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Cytological preparation of cells collected from a mucosal surface and stained with Papanicolaou stain.",
    "arabic_definition": "لطاخة بابانيكولاو أو لطاخة عنق الرحم (الإنجليزية: Pap test)، هو فحص طبي لعنق الرحم لاكتشاف سرطان عنق الرحم بعد أو قبل حدوثه، وعند اكتشاف أي شذوذ في طبيعة الأنسجة يتم إجراء اختبارات أخرى أكثر حساسية. يرجع اختراعه إلى العالمين أوريل بابز و‌جورجيوس بابانيكولاو؛ الذي سمي باسمه. (Papanicolaou Test)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D065006.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glaucoma",
    "term_en": "Glaucoma",
    "term_ar": "زرق",
    "synonyms": [
      "Glaucomas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An ocular disease, occurring in many forms, having as its primary characteristics an unstable or a sustained increase in the intraocular pressure which the eye cannot withstand without damage to its structure or impairment of its function. The consequences of the increased pressure may be manifested in a variety of symptoms, depending upon type and severity, such as excavation of the optic disk, hardness of the eyeball, corneal anesthesia, reduced visual acuity, seeing of colored halos around lights, disturbed dark adaptation, visual field defects, and headaches. (Dictionary of Visual Science, 4th ed)",
    "arabic_definition": "الزَّرَقُ أو الزَّرْق أو الزُّرْقَة أو الماء الأزرق أو الماء الأسود أو الغلوكوما هي أسماء لمرض ينشأ نتيجة ارتفاع الضغط في العين فيحصل نتيجة ذلك تلف في أنسجة العصب البصري وإذا لم يعالج المرض فإن تلفًا كليًا في العصب البصري قد يحدث وبذلك تفقد العين قدرتها على الإبصار. الزرق هو مرض يصيب العين عند التقدم في السن بسبب تلف العصب البصري في العين ما ينتج عنه ارتفاع ضغط العين ومشكلات في الرؤية والإجهاد العيني. (Glaucoma)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005901.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myopia",
    "term_en": "Myopia",
    "term_ar": "قصر النظر",
    "synonyms": [
      "Myopias",
      "Nearsightedness",
      "Nearsightednesses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A refractive error in which rays of light entering the EYE parallel to the optic axis are brought to a focus in front of the RETINA when accommodation (ACCOMMODATION, OCULAR) is relaxed. This results from an overly curved CORNEA or from the eyeball being too long from front to back. It is also called nearsightedness.",
    "arabic_definition": "قصر البصر أو الحَسَر أو قصر النظر هو إحدى أشكال ضعف البصر حيث تسقط بؤرة الضوء أمام الشبكية وهو عكس ما يحدث في حالة طول البصر وكلاهما يعد نتيجة خطأ في وضعية الصورة. وفي معظم الحالات لا يعد قصر البصر كحالة مرضية ولكنه مرتبط بميل جيني ولكن يمكن اعتبار قصر البصر المركب«المانجن» حالة مرضية. (Myopia)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009216.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cataract",
    "term_en": "Cataract",
    "term_ar": "الساد",
    "synonyms": [
      "Cataracts",
      "Lens Opacities",
      "Lens Opacity",
      "Opacities, Lens",
      "Opacity, Lens",
      "Cataract, Membranous",
      "Cataracts, Membranous",
      "Membranous Cataract"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Partial or complete opacity on or in the lens or capsule of one or both eyes, impairing vision or causing blindness. The many kinds of cataract are classified by their morphology (size, shape, location) or etiology (cause and time of occurrence). (Dorland, 27th ed)",
    "arabic_definition": "السَّادُّ أو السُّدّ أو الماء الأبيض أو عتامة العين أو إعتام عدسة العين (بعدة لغات: Cataract) هو مرض يصيب عدسة العين الطبيعية القائمة خلف الحدقة فيعتمها ويفقدها شفافيتها مما يسبب ضعفاً في البصر دون وجع أو ألم، ويعاني المصاب بالساد من تحسسه للإنارة المبهرة والقوية مع ضعف في النظر ليلاً، وقد يصيب عيناً واحدةً أو كلا العينين سويةً. ويختلف مرض الساد عن الزرق (جلوكوما، الماء الأسود) الذي يؤدي إلى تلف العصب البصري نتيجة ارتفاع ضغط العين وعلاجه يكون بوسائل أخرى كالقطرات والليزر وأخيراً الجراحة.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002386.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chorioretinitis",
    "term_en": "Chorioretinitis",
    "term_ar": "التهاب المشيمية والشبكية",
    "synonyms": [
      "Chorioretinitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the choroid in which the sensory retina becomes edematous and opaque. The inflammatory cells and exudate may burst through the sensory retina to cloud the vitreous body.",
    "arabic_definition": "الْتِهابُ المَشيمِيَّةِ والشَّبَكِيَّة يكون عبارة عن التهاب للمشيمية (الوعاء الرقيق الملون المحيط بالعين) والشبكية. ويسمى أيضاً بالتهاب الشبكية المشيمي. (Chorioretinitis)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002825.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "keratoconus",
    "term_en": "Keratoconus",
    "term_ar": "قرنية مخروطية",
    "synonyms": [
      "Pellucid Marginal Degeneration",
      "Degeneration, Pellucid Marginal",
      "Marginal Degeneration, Pellucid",
      "Pellucid Marginal Degenerations",
      "Pellucid Marginal Corneal Degeneration",
      "Keratoglobus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A noninflammatory, usually bilateral protrusion and thinning of the CORNEA, the apex being displaced downward and nasally. It occurs most commonly in females at about puberty. Two closely related noninflammatory corneal ectasias are pellucid marginal degeneration and keratoglobus.",
    "arabic_definition": "القرنية المخروطية هو اضطراب يصيب العين، حيث تحدث تغييرات هيكلية داخل القرنية تجعلها أكثر دقة ويصحبها تغيير إلى شكل مخروطي أكثر من الشكل الطبيعي. القرنية المخروطية يمكن أن يسبب تشويه كبير في الرؤية، مع صور متعددة، والضعف والحساسية للضوء، هذا غالبا ما يشكو منه المريض - وعادة يصاب به المراهقين. (Keratoconus)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007640.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperopia",
    "term_en": "Hyperopia",
    "term_ar": "مد البصر",
    "synonyms": [
      "Farsightedness",
      "Hypermetropia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A refractive error in which rays of light entering the eye parallel to the optic axis are brought to a focus behind the retina, as a result of the eyeball being too short from front to back. It is also called farsightedness because the near point is more distant than it is in emmetropia with an equal amplitude of accommodation. (Dorland, 27th ed)",
    "arabic_definition": "مد البصر أو طول النظر أو بُعد النظر ( Hyperopia, أو hypermetropia) هي نوع من أنواع تأثر البصر بسبب شكل غير متكامل للعين (عادة لان كرة العين تصبح قصيرة أو عندما عدسة العين لا تستطيع أن تصبح مدورة بشكل كافي) تسبب عدم استطاعة الفرد عن التركيز على الأشياء القريبة، وفي حالات قوية عدم استطاعته التركيز على أي شيء بغض النظر عن المسافة. كلما يتحرك جسيم قرب العين، يجب على العين ان تزيد من قوتها لتبقي الصورة على الشبكية.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006956.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "keratitis",
    "term_en": "Keratitis",
    "term_ar": "التهاب القرنية",
    "synonyms": [
      "Keratitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the cornea.",
    "arabic_definition": "التهاب القرنية (بالإنجليزي: Keratitis) هو التهاب يصيب الجزء الأمامي للعين، يرافقه ألم شديد وضعف في النظر التهاب القرنية هو حالة مرضية تصيب قرنية العين، الجزء الأمامي من العين، والذي يؤدي إلى التهابها. هذه الحالة المرضية تكون مصحوبة بألم متوسط إلى حاد، ضعف في البصر، رهاب الضوء، احمرار العين، وشعور بوجود أجسام غريبة في العين .",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007634.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "presbyopia",
    "term_en": "Presbyopia",
    "term_ar": "قصو البصر الشيخوخي",
    "synonyms": [
      "Presbyopias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The normal decreasing elasticity of the crystalline lens that leads to loss of accommodation.",
    "arabic_definition": "قُصُوُّ البَصَرِ الشَّيخُوُخِيّ أو القَدَع أو مد البصر أو الطَّرَح (الإنجليزية: Presbyopia) هي الحالة التي تصيب العين عندما تتقلص مدى رؤية الأجسام القريبة مع تقدم العمر. اليات هذه الحالة غير معروفة بشكل دقيق، إلا أن الأبحاث تؤيد بقوة فقدان مرونة العدسة البلورية، رغم التغيرات في انحناء العدسة بفعل النمو المستمر وفقدان قوة العضلات الهدبية (العضلات التي تثبت وتصوب العدسة) كما هو مفروض في هذه الحالة.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011305.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blepharitis",
    "term_en": "Blepharitis",
    "term_ar": "التهاب الجفن",
    "synonyms": [
      "Blepharitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the eyelids.",
    "arabic_definition": "التهاب الجَفْن أو السُّلاق هو مرض يصيب جفون العين، ويعد واحدا من أكثر أمراض العين شيوعا. قد يكون ظهور المرض حادا ويحل بدون علاج في غضون 2-4 أسابيع (ويمكن لهذا الالتهاب ان ينخفض إلى حد كبير مع تعقيم الجفن)، ولكن بشكل عام هو التهاب طويل الأمد متباين الشدة. (Blepharitis)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001762.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aniridia",
    "term_en": "Aniridia",
    "term_ar": "غياب القزحية",
    "synonyms": [
      "Absent Iris",
      "Congenital Aniridia",
      "Irideremia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital abnormality in which there is only a rudimentary iris. This is due to the failure of the optic cup to grow. Aniridia also occurs in a hereditary form, usually autosomal dominant.",
    "arabic_definition": "توسع الحدقة الولادي أو انعدام القزحية (الإنجليزية: Aniridia) هو غياب القزحية بسبب وجود عيب خلقي أو إصابة تخللية، ويحدث عادة في كلتا العينين، وتوسع الحدقة الولادي ليس غياب القزحية فقط بل هو اضطراب في البقعة الصفراء، ونقص تنسج العصب البصري، والساد، وحدوث تغيرات في القرنية. ويشكل غياب القزحية خطرا شديدا على العين إذ يؤدي إلى: الرأرأة، والحول، والساد، والجلوكوما (الماء الأزرق)، وجسامة المقلة، والغمش.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015783.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hordeolum",
    "term_en": "Hordeolum",
    "term_ar": "شحاذ العين",
    "synonyms": [
      "Hordeola",
      "Hordeolas",
      "Stye",
      "Styes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Purulent infection of one of the sebaceous glands of Zeis along the eyelid margin (external) or of the meibomian gland on the conjunctival side of the eyelid (internal).",
    "arabic_definition": "شحاذ العين أو الجليجل أو تبزّل العين أو جنجل العين أو الضبضوب أو الحدقدقة هي أسماء لمرض دمل الجفن أما اسمه في اللاتينية هو Stye أو الشعيرة.وهو التهاب يصيب الغدة الدهنية الموجودة على طرف الجفن. كما يتم تعريفها بأنها التهاب يصيب الغدد العرقية المعروفة بغدة مُول. (Hordeolum)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006726.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "uveitis",
    "term_en": "Uveitis",
    "term_ar": "التهاب العنبية",
    "synonyms": [
      "Uveitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of part or all of the uvea, the middle (vascular) tunic of the eye, and commonly involving the other tunics (sclera and cornea, and the retina). (Dorland, 27th ed)",
    "arabic_definition": "التهاب العنبية (بالإنجليزية: Uveitis)، هو التهاب يصيب الطبقة المصطبغة الواقعة بين الشبكية الداخلية والليفية الخارجية التي تضم الصلبة والقرنية. تتكون العنبية من الطبقة الوسطى التي تضم البنى الوعائية المصطبغة في العين، وتشمل: القزحية والجسم الهدبي والمشيمية.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014605.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trachoma",
    "term_en": "Trachoma",
    "term_ar": "تراخوما",
    "synonyms": [
      "Trachomas",
      "Egyptian Ophthalmia",
      "Ophthalmia, Egyptian"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic infection of the CONJUNCTIVA and CORNEA caused by CHLAMYDIA TRACHOMATIS.",
    "arabic_definition": "الحُثَار أو الحَثَر أو التراخوما أو التهاب المُلتحمة الحُبيبي أو الرَمَد الحُبَيْبي مرض معد تسببه المتدثرة الحثرية ويمكن أن يؤدي الاحتكاك الدائم للرموش بالقرنية بعد مرور الوقت إلى العمى حددت منظمة الصحة العالمية هدفا يتمثل في القضاء على الحُثار تسبب العمى بحلول عام 2020. بالتعاون مع الحكومات الوطنية والعديد من المنظمات غير الربحيه باستخدام برامج مراقبة منظمة الصحة العالمية أوصت الاستراتيجيه الامنه، التي تشمل جراحة لتصحيح مراحل متقدمة من المرض. (Trachoma)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014141.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trichiasis",
    "term_en": "Trichiasis",
    "term_ar": "انحراف الأهداب",
    "synonyms": [
      "Trichiases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease of the eye in which the eyelashes abnormally turn inwards toward the eyeball producing constant irritation caused by motion of the lids.",
    "arabic_definition": "انحراف الأهداب أو شَعْرَة مصطلح طبي يطلق عندما يكون الرمش ينمو للخلف ويلامس قرنية العين أو ملتحمة العين. هذه الحالة يسببها إما عدوى أو التهاب أو مرض المناعة ضد الذات أو أمراض خلقية مثل عدم تخلق الجفن أو إصابة في العين كالحرق مثلاً. (Trichiasis)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058457.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coloboma",
    "term_en": "Coloboma",
    "term_ar": "ثلامة",
    "synonyms": [
      "Colobomas",
      "Coloboma, Ocular",
      "Colobomas, Ocular",
      "Ocular Colobomas",
      "Coloboma Of Iris, Choroid, And Retina",
      "Ocular Coloboma",
      "Uveoretinal Coloboma",
      "Coloboma, Uveoretinal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital anomaly in which some of the structures of the eye are absent due to incomplete fusion of the fetal intraocular fissure during gestation.",
    "arabic_definition": "الثلامة (الإنجليزية: Coloboma) (باليونانية: koloboma، وتعني عيب) هو ثقب في أحد أجزاء العين مثل القزحية، أو الشبكية، أو القرص البصري، أو المشيمية. وهو ثقب موجود منذ الولادة، يحدث عندما يفشل الشق المشيمي (الذي يظهر في مراحل مبكرة من تكوين الجنين) في الإغلاق بالكامل قبل ولادة الطفل.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003103.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xerophthalmia",
    "term_en": "Xerophthalmia",
    "term_ar": "جفاف الملتحمة",
    "synonyms": [
      "Xerophthalmias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Dryness of the eye surfaces caused by deficiency of tears or conjunctival secretions. It may be associated with vitamin A deficiency, trauma, or any condition in which the eyelids do not close completely.",
    "arabic_definition": "جَفاف المُلتحمة (الإنجليزية: Xerophthalmia) هيَ حالة طِبية ناتِجة عن عَدم قُدرة العين عَلى إَِفراز الدموع بِسبب نَقص فِيتامين A بِشكل رَئيس، وَ يُعتبر هَذا المَرض شائع في المَناطق النامية كَإفريقيا وَ آسيا الجنوبية.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014985.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exophthalmos",
    "term_en": "Exophthalmos",
    "term_ar": "جحوظ العين",
    "synonyms": [
      "Proptosis",
      "Proptoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal protrusion of both eyes; may be caused by endocrine gland malfunction, malignancy, injury, or paralysis of the extrinsic muscles of the eye.",
    "arabic_definition": "الجحوظ (الإنجليزية: Exophthalmos) بروز العين إلى الأمام بحيث يلفت انتباه الآخرين وخاصة إذا كان في عين واحدة.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005094.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fluorescence-in-situ-hybridization",
    "term_en": "Fluorescence In Situ Hybridization",
    "term_ar": "تهجين موضعي متألق",
    "synonyms": [
      "FISH Technic",
      "FISH Technics",
      "Technic, FISH",
      "Technics, FISH",
      "FISH Technique",
      "FISH Techniques",
      "Technique, FISH",
      "Techniques, FISH"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of IN SITU HYBRIDIZATION in which target sequences are stained with fluorescent dye so their location and size can be determined using fluorescence microscopy. This staining is sufficiently distinct that the hybridization signal can be seen both in metaphase spreads and in interphase nuclei.",
    "arabic_definition": "التهجين الموضعي المتألق (التهجين الفلوري في الموقع) هي تقنية خلوية تعتمد فكرة التهجين الموضعي للتحري عن وجود تسلسلات دنوية معينة بغية تشخيص المرض أو متابعة العلاج. يتم استخدام مسبار يحتوي على صبغات متألقة يتم رأيتها باستخدام مجهر متألق في حالة وجود التسلسل الدنوي المطلوب. (Fluorescence In Situ Hybridization)",
    "specialty": "Laboratory Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017404.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ectropion",
    "term_en": "Ectropion",
    "term_ar": "شتر خارجي",
    "synonyms": [
      "Ectropions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The turning outward (eversion) of the edge of the eyelid, resulting in the exposure of the palpebral conjunctiva. (Dorland, 27th ed)",
    "arabic_definition": "الاغتراب الجفني أو شَتَرٌ خارِجِيّ حالة طبية تحدث عندما ينقلب الجفن السفلي للخارج. تعتبر واحدة من علامات مرض الوليد المهرج عند الأطفال، ولكن الشتر الخارجي يمكن ان يحدث بسبب أي ضعف في الانسجة للجفن السفلي. (Ectropion)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004483.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "entropion",
    "term_en": "Entropion",
    "term_ar": "انطواء جفني",
    "synonyms": [
      "Entropions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The turning inward (inversion) of the edge of the eyelid, with the tarsal cartilage turned inward toward the eyeball. (Dorland, 27th ed)",
    "arabic_definition": "الانطواء الجفني أو (الشتر الداخلي) (الإنجليزية: Entropion) تنثني فيها جفون العين إلى الداخل وتحدث إزعاجا عندما تحتك الأهداب بالقرنية من أهم الأسباب إصابة العين بالحثر (Trachoma) الذي يشكل ندوبا في باطن الجفن تؤدي إلى انكماش الجفن وحدوث الشتر الداخلي. يعد الشتر الداخلي مرضاً حيث ينحني جفن العين (الجفن السفلي عادة) إلى الداخل، وهو غير مريح أبدًا حيث يحتك الرمش بالقرنية ويهيجها.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004774.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asthenopia",
    "term_en": "Asthenopia",
    "term_ar": "إجهاد العين",
    "synonyms": [
      "Eyestrain",
      "Fatigue, Visual",
      "Visual Fatigue",
      "Eye Fatigue",
      "Fatigue, Eye",
      "Eye strain"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Term generally used to describe complaints related to refractive error, ocular muscle imbalance, including pain or aching around the eyes, burning and itchiness of the eyelids, ocular fatigue, and headaches.",
    "arabic_definition": "وهن البصر (اللاتينية: Asthenopia) أو كلال العين أو إجهاد العين هو بحسب طب العيون يتجلى من خلال أعراض غير محددة مثل التعب والإرهاق، والألم داخل أو حول العينين، وعدم وضوح الرؤية، والصداع، وأحيانا الرؤية المزدوجة. الأعراض غالبا ما تحدث بعد القراءة، والعمل على الحاسوب، أو الأنشطة الأخرى التي تستلزم المهام البصرية.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001248.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aphakia",
    "term_en": "Aphakia",
    "term_ar": "انعدام العدسة",
    "synonyms": [
      "Aphakias",
      "Aphakic Eye",
      "Aphakic Eyes",
      "Eye, Aphakic",
      "Aphakic Eye, Traumatic",
      "Eye, Traumatic Aphakic",
      "Traumatic Aphakic Eye",
      "Traumatic Aphakic Eyes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Absence of crystalline lens totally or partially from field of vision, from any cause except after cataract extraction. Aphakia is mainly congenital or as result of LENS DISLOCATION AND SUBLUXATION.",
    "arabic_definition": "انعدام العدسة (الإنجليزية: Aphakia) هو فقدان عدسة العين بسبب إزالة جراحية أو انثقاب بواسطة جرح أو تقرح أو عيب خلقي.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001035.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyphema",
    "term_en": "Hyphema",
    "term_ar": "تحدمية",
    "synonyms": [
      "Hyphemas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Bleeding in the anterior chamber of the eye.",
    "arabic_definition": "التحدمية (الإنجليزية: Hyphema) تجمع الدم في غرفة العين الأمامية وينجم غالبا عن رضح كليل (Blunt Trauma) وقد يؤدي إلى فقد بصر جزئي أو كلي وفي بعض الاحوال يتعافى المريض تعافيا تاما .",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006988.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scleritis",
    "term_en": "Scleritis",
    "term_ar": "التهاب الصلبة",
    "synonyms": [
      "Scleritides",
      "Episcleritis",
      "Episcleritides",
      "Necrotizing Scleritis",
      "Necrotizing Scleritides",
      "Scleritides, Necrotizing",
      "Scleritis, Necrotizing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Refers to any inflammation of the sclera including episcleritis, a benign condition affecting only the episclera, which is generally short-lived and easily treated. Classic scleritis, on the other hand, affects deeper tissue and is characterized by higher rates of visual acuity loss and even mortality, particularly in necrotizing form. Its characteristic symptom is severe and general head pain. Scleritis has also been associated with systemic collagen disease. Etiology is unknown but is thought to involve a local immune response. Treatment is difficult and includes administration of anti-inflammatory and immunosuppressive agents such as corticosteroids. Inflammation of the sclera may also be secondary to inflammation of adjacent tissues, such as the conjunctiva.",
    "arabic_definition": "التهاب الصلبة (بالإنجليزي: Scleritis) هو مرض التهابي خطير يصيب الطبقة الخارجية البيضاء للعين المعروفة بالصلبة. غالبًا ما يحدث هذا المرض بالترافق مع أمراض أخرى تصيب الجسم، مثل الورم الحُبيبي مع التهاب الأوعية أو التهاب المفاصل الروماتويدي.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015423.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blepharospasm",
    "term_en": "Blepharospasm",
    "term_ar": "تشنج الجفن",
    "synonyms": [
      "Blepharospasms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Excessive winking; tonic or clonic spasm of the orbicularis oculi muscle.",
    "arabic_definition": "تَشَنُّجُ الجَفْن هو تقلّص عضلي (أي تقلّص غير منضبط في العضلات)، أي انكماش غير طبيعي أو رعشة في الجفن. وهو نوعان: «مجهول السبب» و«لاإرادي». (Blepharospasm)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001764.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "astigmatism",
    "term_en": "Astigmatism",
    "term_ar": "لابؤرية (عين)",
    "synonyms": [
      "Corneal Astigmatism",
      "Astigmatism, Corneal",
      "Lenticular Astigmatism",
      "Astigmatism, Lenticular",
      "Oblique Astigmatism",
      "Astigmatism, Oblique",
      "Oblique Astigmatisms",
      "Myopic Astigmatism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Unequal or irregular curvature of the CORNEA (Corneal astigmatism) and/or the EYE LENS (Lenticular astigmatism) resulting in REFRACTIVE ERROR.",
    "arabic_definition": "اللاَبُؤْرِيّة (الإنجليزية: Astigmatism) أو حرج البصر، هي حالة من الخلل الانكساري الذي يحتاج المريض عند الإصابة به لعدسات اسطوانية. تنجم اللابؤرية عن تفاوت مستوى التحدب في مختلف أجزاء القرنية أو عدسة العين.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001251.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enophthalmos",
    "term_en": "Enophthalmos",
    "term_ar": "غؤور العين",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Recession of the eyeball into the orbit.",
    "arabic_definition": "الخوص أو غؤور العينين (الإنجليزية: Enopthalmos) انزياح العين إلى داخل المحجر) هو تراجع لمقلة العين داخل محجر العين. قد يكون تشوهات خلقية أو مكتسب كنتيجة إصابة (مثل وجود كسر انفجاري لمحجر العين)، ومتلازمة هورنر، ومتلازمة الجيب الصامت، أو انضمار العين. (Enophthalmos)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015841.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retinitis",
    "term_en": "Retinitis",
    "term_ar": "التهاب شبكية العين",
    "synonyms": [
      "Neuroretinitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the RETINA. It is rarely limited to the retina, but is commonly associated with diseases of the choroid (CHORIORETINITIS) and of the OPTIC DISK (neuroretinitis).",
    "arabic_definition": "التهاب الشبكية (بـالأنجليزية Retinitis نسخة محفوظة 26 يناير 2012 على موقع واي باك مشين) يتلازم عادة مع التهابات الجسم الزجاجي والأوعية الشبكية وأوعية المشيمية. هذا الاعتلال يؤدي عادة إلى تكاثر الخلايا في الجسم الزجاجي، وإذا ازداد هذا بدرجة خطيرة فسوف تتأثر الرؤية، وإذا تأثرت منطقة البقعة بالالتهاب فسيؤدي هذا إلى فقدان الرؤية المركزية.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012173.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anophthalmos",
    "term_en": "Anophthalmos",
    "term_ar": "انعدام المقلة",
    "synonyms": [
      "Anophthalmia",
      "Anophthalmias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital absence of the eye or eyes.",
    "arabic_definition": "انعدام المقلة هو المصطلح الطبي لغياب إحدى العينين أو كلتيهما، كل من مقلة العين (العين البشرية) وأنسجة العين مفقودة من المدار. سيؤدي غياب العين إلى مدار عظمي صغير، وتضيّق مقبس الغشاء المخاطي، وجفون قصيرة، وانخفاض الشق الجفني والبروز الوجني. (Anophthalmos)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000853.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pterygium",
    "term_en": "Pterygium",
    "term_ar": "ظفرة",
    "synonyms": [
      "Pterygiums",
      "Pterygium Of Conjunctiva And Cornea"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormal triangular fold of membrane in the interpalpebral fissure, extending from the conjunctiva to the cornea, being immovably united to the cornea at its apex, firmly attached to the sclera throughout its middle portion, and merged with the conjunctiva at its base. (Dorland, 27th ed)",
    "arabic_definition": "الظفرة (الإنجليزية: Pterygium) كلمة تشير إلى أي غشاء مثلث الشكل شكله يشبه \"الجناح\" وقد يتواجد في الرقبة، أو العيون، أو الركبتين، أو المرفقين، أو الكاحلين أو الأصابع.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011625.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "albinism",
    "term_en": "Albinism",
    "term_ar": "مهق",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "General term for a number of inherited defects of amino acid metabolism in which there is a deficiency or absence of pigment in the eyes, skin, or hair.",
    "arabic_definition": "المَهَقُ (الإنجليزية: albinism، من اللاتينية albus التي تعني أبيض)، كما يسمَّى الإِغْرَابُ أو الإِحْسَابُ أو تَعَذُّرُ التَّلَوُّنِ أو اللَّاتَلَوُّنِيَّةُ أو اِنْعِدَامُ لَوْنِ الجِلْدِ أو ظَاهِرَةُ الألبينو هو اضطراب خلقي يتميز بغياب الصباغ في الجلد والشعر والعيون، نتيجة غياب كامل أو جزئي أو عيب من إنزيم تيروزيناز (تايروسيناز)، وهو إنزيم يشارك في إنتاج الميلانين ويحتوي على النحاس. تعتبر هذه الحالة معاكسة لاسْوِدَادُ الجِلْد.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000417.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retinitis-pigmentosa",
    "term_en": "Retinitis Pigmentosa",
    "term_ar": "التهاب الشبكية الصباغي",
    "synonyms": [
      "Pigmentary Retinopathy",
      "Pigmentary Retinopathies",
      "Retinopathies, Pigmentary",
      "Retinopathy, Pigmentary",
      "Tapetoretinal Degeneration",
      "Tapetoretinal Degenerations"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hereditary, progressive degeneration of the retina due to death of ROD PHOTORECEPTORS initially and subsequent death of CONE PHOTORECEPTORS. It is characterized by deposition of pigment in the retina.",
    "arabic_definition": "التهاب الشبكية الصباغي (RP) هو اضطراب وراثي يحدث للعين ويتسبب في فقدان الرؤية. ومن ضمن أعراضه وجود مشكلة في الرؤية ليلاً وقلة رؤية محيطية (الرؤية الجانبية). (Retinitis Pigmentosa)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012174.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retinal-detachment",
    "term_en": "Retinal Detachment",
    "term_ar": "انفصال الشبكية",
    "synonyms": [
      "Detachment, Retinal",
      "Detachments, Retinal",
      "Retinal Detachments",
      "Retinal Pigment Epithelial Detachment"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Separation of the inner layers of the retina (neural retina) from the pigment epithelium. Retinal detachment occurs more commonly in men than in women, in eyes with degenerative myopia, in aging and in aphakia. It may occur after an uncomplicated cataract extraction, but it is seen more often if vitreous humor has been lost during surgery. (Dorland, 27th ed; Newell, Ophthalmology: Principles and Concepts, 7th ed, p310-12).",
    "arabic_definition": "انْفِصالُ الشَّبَكِيَّة (الإنجليزية: retinal detachment) اضطراب في العين حيث تتقشر شبكية العين عن الطبقة الكامنة فيها من الأنسجة الداعمة. قد يكون الانفصال المبدئي موضعياً، ولكن بدون العلاج السريع فإن الشبكية قد تنفصل بالكامل، مما يؤدي إلى فقدان البصر والعمى.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012163.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "macular-degeneration",
    "term_en": "Macular Degeneration",
    "term_ar": "تنكس بقعي",
    "synonyms": [
      "Degeneration, Macular",
      "Macular Degenerations",
      "Macular Dystrophy",
      "Dystrophy, Macular",
      "Macular Dystrophies",
      "Maculopathy",
      "Maculopathies",
      "Age-Related Macular Degeneration"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Degenerative changes in the RETINA usually of older adults which results in a loss of vision in the center of the visual field (the MACULA LUTEA) because of damage to the retina. It occurs in dry and wet forms.",
    "arabic_definition": "التنكس البقعي المرتبط بالسن هو حالة طبية عادة ما تُصيب كبار السن وتؤدي إلى فقدان البصر في مركز المجال البصري (البقعة) بسبب التلف الذي يلحق بالشبكية. وهو يحدث في أشكال «جافة» و«رطبة»، وهو السبب الرئيسي لضعف البصر في كبار السن (أكبر من 50 سنة). (Macular Degeneration)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008268.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "intermediate-uveitis",
    "term_en": "Intermediate Uveitis",
    "term_ar": "التهاب القزحية المتوسط",
    "synonyms": [
      "Cyclitis, Chronic",
      "Chronic Cyclitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the pars plana, ciliary body, and adjacent structures.",
    "arabic_definition": "يشير التهاب القزحية المتوسط إلى التهاب في الجسم الزجاجي والشبكية الطرفية. تتضمن الأماكن الأولية للالتهاب الجسم الزجاجي والذي يشمل أشياء أخرى منها التهاب الجزء الأملس من الجسم الهدبي والتهاب الهدابي والتهاب الزجاجي. (Intermediate Uveitis)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015867.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vitreous-hemorrhage",
    "term_en": "Vitreous Hemorrhage",
    "term_ar": "نزف الجسم الزجاجي",
    "synonyms": [
      "Hemorrhage, Vitreous",
      "Vitreous Hemorrhages"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Hemorrhage into the VITREOUS BODY.",
    "arabic_definition": "نزف الجسم الزجاجي هو ارتشاح أو تسرب الدم إلى المناطق الموجودة داخل وحول الجسم الزجاجي للعين. الجسم الزجاجي هو الهلام الصافي الذي يملأ الفراغ بين العدسة وشبكية العين. (Vitreous Hemorrhage)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014823.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "conjunctivitis",
    "term_en": "Conjunctivitis",
    "term_ar": "التهاب الملتحمة",
    "synonyms": [
      "Conjunctivitides",
      "Pink Eye",
      "Pink Eyes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the CONJUNCTIVA.",
    "arabic_definition": "التهاب الملتحمة أو كما يعرف أيضاً بـ «العين الوردية» هو التهاب في ملتحمة العين (الطبقة الخارجية للعين والسطح الداخلي للجفن. في العادة تكون نتيجة التهاب (غالبا فيروسي، وأحياناً بكتيري) أو حساسية. (Conjunctivitis)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003231.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "graves-disease",
    "term_en": "Graves Disease",
    "term_ar": "داء غريفز",
    "synonyms": [
      "Disease, Graves",
      "Basedow Disease",
      "Disease, Basedow",
      "Hyperthyroidism, Autoimmune",
      "Exophthalmic Goiter",
      "Exophthalmic Goiters",
      "Goiters, Exophthalmic",
      "Goiter, Exophthalmic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A common form of hyperthyroidism with a diffuse hyperplastic GOITER. It is an autoimmune disorder that produces antibodies against the THYROID STIMULATING HORMONE RECEPTOR. These autoantibodies activate the TSH receptor, thereby stimulating the THYROID GLAND and hypersecretion of THYROID HORMONES. These autoantibodies can also affect the eyes (GRAVES OPHTHALMOPATHY) and the skin (Graves dermopathy).",
    "arabic_definition": "الدُّرَاق الجُحُوظِيّ أو داء بازدوف أو مرض غريفز (الإنجليزية: Graves' disease) مرض مناعي ذاتي يصيب الغدة الدرقية، ترجع تسميته نسبةً إلى الطبيب الأيرلندي روبرت جريفز الذي قام بوصف المرض قبل أكثر من 100 عام. مرض غريفز، المعروف أيضا باسم تضخم الغدة الدرقية السّام، هو أحد أمراض المناعة الذاتية التي تؤثر على الغدة الدرقية. (Graves Disease)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006111.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retinoschisis",
    "term_en": "Retinoschisis",
    "term_ar": "انشقاق الشبكية",
    "synonyms": [
      "Retinoschises",
      "Retinoschisis, Degenerative",
      "Degenerative Retinoschises",
      "Degenerative Retinoschisis",
      "Retinoschises, Degenerative",
      "Retinoschisis, Juvenile, X-Linked",
      "Retinoschisis, Juvenile, X Chromosome-Linked",
      "X-Linked Juvenile Retinoschisis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A vitreoretinal dystrophy characterized by splitting of the neuroretinal layers. It occurs in two forms: degenerative retinoschisis and X chromosome-linked juvenile retinoschisis.",
    "arabic_definition": "انشقاق الشبكية (Retinoschisis) مرض عيني يتسم بانشقاق الطبقة الحسية العصبية في الشبكية خاصة في الطبقة الضفيرية الخارجية وينجم عنها فقد البصر في المجال البصري الموافق للإصابة. انقسام الشبكية إلى طبقتين.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D041441.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anisometropia",
    "term_en": "Anisometropia",
    "term_ar": "تفاوت الانكسار",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition of an inequality of refractive power of the two eyes.",
    "arabic_definition": "تفاوت الانكسار (الإنجليزية: Anisometropia) حالة لا يكون فيها تعادل بين قوة الانكسار في العينين وتعني بأن يحظى المريض بقصر نظر في عين وطول نظر بالأخرى. عندها تقوم القشرة البصرية بالدماغ إلى عدم استخدام كلتا العينين في اّن معا وعوضا عن ذلك تقوم الرؤية المركزية بالتركيز على إحدى العينين مما قد يؤدي في نهاية المطاف إلى الحول إذا لم يتم أخذ الاجراء الطبي اللازم لتصحيح مدى الرؤية.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015858.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "night-blindness",
    "term_en": "Night Blindness",
    "term_ar": "عشى",
    "synonyms": [
      "Blindness, Night",
      "Nyctalopia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Failure or imperfection of vision at night or in dim light, with good vision only on bright days. (Dorland, 27th ed)",
    "arabic_definition": "العَشَى أو العَشَا أو العَشَاوَة أو الشَّبْكَرَة (الإنجليزية: Nyctalopia) هي حالة يكون من الصعب فيها، بل ومن المستحيل، الرؤية في الضوء الخافت، ويعتبر عرض من أعراض أمراض العين المتعددة. قد يُصاب الإنسان بالعشاوة منذ ولادته أو قد يأتي نتيجة لإصابة أو سوء تغذية (على سبيل المثال، نقص فيتامين أ). (Night Blindness)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009755.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microphthalmos",
    "term_en": "Microphthalmos",
    "term_ar": "مرض العين المتحجمة",
    "synonyms": [
      "Microphthalmia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital or developmental anomaly in which the eyeballs are abnormally small.",
    "arabic_definition": "مرض العين المتحجمة أو الصغيرة (اللاتينية: Microphthalmia) هو مرض يصيب الشخص منذ ولادته، وقد يكون اضمحلال جزئي لأحد أو كلتا العينين. في أسوأ أنواعه يدعى الاضمحلال الشبه كلي لعين (اللاتينية: Nanophthalmia)، وفي الغالب بالإضافة إلى صغر حجم العين يمكن أن ينشئ تشوه في بناء العين، متل الثلامة. (Microphthalmos)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008850.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "keratoconjunctivitis",
    "term_en": "Keratoconjunctivitis",
    "term_ar": "التهاب القرنية والملتحمة",
    "synonyms": [
      "Keratoconjunctivitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Simultaneous inflammation of the cornea and conjunctiva.",
    "arabic_definition": "الْتِهابُ القَرْنيَّة والمُلْتَحِمَة هو التهاب في القَرنية والمُلتحمة. عندما يَكون الالتهاب في القرنية فقط، يُطلق عليه التهاب القرنية، وعندما يكون الالتهاب في الملتحمة فقط، ُيسمّى التهاب الملتحمة. (Keratoconjunctivitis)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007637.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "choroideremia",
    "term_en": "Choroideremia",
    "term_ar": "تنكس المشيمية",
    "synonyms": [
      "Choroideremias",
      "Tapetochoroidal Dystrophy, Progressive",
      "Dystrophies, Progressive Tapetochoroidal",
      "Dystrophy, Progressive Tapetochoroidal",
      "Progressive Tapetochoroidal Dystrophies",
      "Tapetochoroidal Dystrophies, Progressive",
      "Progressive Tapetochoroidal Dystrophy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An X chromosome-linked abnormality characterized by atrophy of the choroid and degeneration of the retinal pigment epithelium causing night blindness.",
    "arabic_definition": "تنكس المشيمة عبارة عن مرض متنحي مرتبط بالكروموسوم x ويكون تهتكي لشبكية العين الذي يؤدي إلى تهتك المَشيماءُ الشُّعَيرِيَّة وايبيثيليم صبغة البكية وأيضا مستقبل الضوء الموجود في العين. تنكس المشيمية يعتبر اضطراب وراثي نادر يسبب فقدان النظر بسبب تهتك المشيمية والشبكية. (Choroideremia)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015794.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "canaliculitis",
    "term_en": "Canaliculitis",
    "term_ar": "قنية دمعية",
    "synonyms": [
      "Canaliculitides",
      "Lacrimal Canaliculitis",
      "Canaliculitides, Lacrimal",
      "Canaliculitis, Lacrimal",
      "Lacrimal Canaliculitides",
      "Lacrimal canaliculi"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation and infection of the lacrimal canaliculus area in the LACRIMAL APPARATUS.",
    "arabic_definition": "القُنَيَّتان الدمعيتان (الإنجليزية: Lacrimal canaliculi)، ومفردهما: قُنَيَّة canaliculus، وتُعرف الواحدة أيضا باسم القناة الدمعية (الإنجليزية: lacrimal canal) أو (الإنجليزية: lacrimal duct)، هما تلكما القناتان الصغيرتان الموجودتان في جفني العين، في كل جفن قناة دمعية. تبدأ كل قناة دمعية بفتحة دقيقة تسمى «نقطة دمعية» على قمة الحليمات الدمعية وتُرى على حافة كل جفن في أقصى الطرف الجانبي للبحيرة الدمعية (الإنجليزية: lacus lacrimalis). (Canaliculitis)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000069282.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lagophthalmos",
    "term_en": "Lagophthalmos",
    "term_ar": "عين أرنبية",
    "synonyms": [
      "Nocturnal Lagophthalmos",
      "Lagophthalmos, Nocturnal",
      "Paralytic Lagophthalmos",
      "Lagophthalmos, Paralytic",
      "Cicatricial Lagophthalmos",
      "Lagophthalmos, Cicatricial",
      "Blink Lagophthalmos",
      "Lagophthalmos, Blink"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inability to close eyelids completely.",
    "arabic_definition": "عين أرنبية وهو عدم القدرة على إغلاق الجفن تماما مع أمض يغطي العين و طبقة رقيقة من الدموع السائلة التي تعزز البيئة الرطبة للخلايا في الجزء الخارجي للعين، هذه الدموع تغسل العين من الأجسام المضادة وتحافظ على سلامتها، وقد يؤدي انعدام هذه الدموع إلى جفاف وتقرح في العين . (Lagophthalmos)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000092164.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blepharoptosis",
    "term_en": "Blepharoptosis",
    "term_ar": "تدلي الجفن",
    "synonyms": [
      "Blepharoptoses",
      "Ptosis, Eyelid",
      "Eyelid Ptoses",
      "Eyelid Ptosis",
      "Ptoses, Eyelid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drooping of the upper lid due to deficient development or paralysis of the levator palpebrae muscle.",
    "arabic_definition": "تدلي الجفون (الإنجليزية: Blepharoptosis) (تدلي الجفون من اللغة اليونانية أو πτῶσις، إلى «سقوط») وهو (انخفاض) في الجفن العلوي أو السفلي. وقد يكون الانخفاض أسوأ بعد أن يكون الشخص متيقظا لفترة طويلة، حيث تكون العضلات الفردية متعبة.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001763.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endophthalmitis",
    "term_en": "Endophthalmitis",
    "term_ar": "التهاب باطن المقلة",
    "synonyms": [
      "Endophthalmitides",
      "Ophthalmia",
      "Ophthalmias",
      "Infectious Endophthalmitis",
      "Endophthalmitides, Infectious",
      "Endophthalmitis, Infectious",
      "Infectious Endophthalmitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Suppurative inflammation of the tissues of the internal structures of the eye frequently associated with an infection.",
    "arabic_definition": "التهاب باطن المقلة (الإنجليزية: Endophthalmitis) هو التهاب يصيب التجويف الداخلي للعين وينتج عادةً عن العدوى. يعد إحدى المضاعفات المحتملة لجميع العمليات الجراحية داخل العين، وخاصة جراحة الساد، وقد يؤدي إلى فقد البصر أو فقد العين نفسها.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009877.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dacryocystitis",
    "term_en": "Dacryocystitis",
    "term_ar": "التهاب كيس الدمع",
    "synonyms": [
      "Dacryocystitides",
      "Dacryoadenitis",
      "Dacryoadenitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the lacrimal sac. (Dorland, 27th ed)",
    "arabic_definition": "التهاب كيس الدمع هو عدوى تصيب الكيس الدمعي، وهي ثانوية لانسداد القناة الأنفية الدمعية عند تقاطع الكيس الدمعي. المصطلح مشتق من اليونانية dákryon تعني (دمع) cysta تعني( كيس) و -itis (التهاب). (Dacryocystitis)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003607.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blepharophimosis",
    "term_en": "Blepharophimosis",
    "term_ar": "تضيق الأجفان",
    "synonyms": [
      "Blepharophimoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The abnormal narrowness of the palpebral fissure in the horizontal direction caused by the lateral displacement of the medial canthi of the eyelids. (Dorland, 27th ed)",
    "arabic_definition": "تضييق الأجفان (الإنجليزية: Blepharophimosis) هو اعتلال خلقي تكون فيه الجفون غير مكتملة النمو بحيث لا يمكن فتحها بشكل طبيعي وتغطي جزءًا من العينين بشكل دائم. تكون شقوق الجفن الرأسية والأفقية (فتحات الجفن) أصغر.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016569.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hydrophthalmos",
    "term_en": "Hydrophthalmos",
    "term_ar": "جسامة المقلة",
    "synonyms": [
      "Buphthalmos"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital open-angle glaucoma that results from dysgenesis of the angle structures accompanied by increased intraocular pressure and enlargement of the eye. Treatment is both medical and surgical.",
    "arabic_definition": "جسامة المقلة (الإنجليزية: Buphthalmos أو Buphthalmia) هي زيادة في حجم العين تظهر عن حديثي الولادة والأطفال، وتظهر عادة في الأشهر الثلاثة الأولى بعد الولادة. وعادة ما تدل الإصابة بجسامة المقلة على وجود زرق ولادي، وهو اضطراب تؤدي فيه الضغوط المرتفعة داخل العين إلى تلف هياكل العين وفقدان البصر. (Hydrophthalmos)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006871.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "panophthalmitis",
    "term_en": "Panophthalmitis",
    "term_ar": "التهاب العين الشامل",
    "synonyms": [
      "Panophthalmitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute suppurative inflammation of the inner eye with necrosis of the sclera (and sometimes the cornea) and extension of the inflammation into the orbit. Pain may be severe and the globe may rupture. In endophthalmitis the globe does not rupture.",
    "arabic_definition": "التهاب العين الشامل أو التهاب المقلة الشامل (الإنجليزية: Panophthalmitis) هو التهاب في جميع أغطية العين، بما في ذلك الهياكل داخل العين. يُمكن أن يحدث هذا الالتهاب بسبب العدوى، وخاصةً أنواع الزائفة مثل الزائفة الزنجارية، أو أنواع المطثية، أو بسبب داء ويبل أو الإصابة بالفطريات، كما أنه قد يحدث بسبب الإجهاد.",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010202.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meconium",
    "term_en": "Meconium",
    "term_ar": "عقي",
    "synonyms": [
      "Meconiums"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The thick green-to-black mucilaginous material found in the intestines of a full-term fetus. It consists of secretions of the INTESTINAL GLANDS; BILE PIGMENTS; FATTY ACIDS; AMNIOTIC FLUID; and intrauterine debris. It constitutes the first stools passed by a newborn.",
    "arabic_definition": "العِقْيُ أو الرَّدَجُ (الإنجليزية: Meconium) هو أول براز يخرج من رضيع الثدييات ومنها الإنسان. يتكون العقي من المواد التي بلعها الطفل خلال الوقت الذي قضاه في الرحم وهي: الخلايا الظهارية في الأمعاء، الزغب، المخاط، السائل السلوي، والصفراء، والماء.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008470.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mesoderm",
    "term_en": "Mesoderm",
    "term_ar": "أديم متوسط",
    "synonyms": [
      "Mesenchyma",
      "Mesenchymas",
      "Mesenchyme",
      "Paraxial Mesoderm",
      "Mesoderm, Paraxial",
      "Mesoderms, Paraxial",
      "Paraxial Mesoderms",
      "Dorsal Mesoderm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The middle germ layer of an embryo derived from three paired mesenchymal aggregates along the neural tube.",
    "arabic_definition": "الأديم المتوسط أو الرُّغَيْلَة (الإنجليزية: Mesoderm) هي الطبقة الوسطى من الطبقات الجنينية تتكون عند انتقال الخلايا من الأديم الظاهري إلى الأديم الباطني في عملية التطور الجنيني. ينتج من هذه الطبقة عدة أعضاء منها القلب والأعضاء التناسلية والعظام والعضلات.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008648.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "placenta",
    "term_en": "Placenta",
    "term_ar": "مشيمة",
    "synonyms": [
      "Placentas",
      "Placentome",
      "Placentomes",
      "Placentoma, Normal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A highly vascularized mammalian fetal-maternal organ and major site of transport of oxygen, nutrients, and fetal waste products. It includes a fetal portion (CHORIONIC VILLI) derived from TROPHOBLASTS and a maternal portion (DECIDUA) derived from the uterine ENDOMETRIUM. The placenta produces an array of steroid, protein and peptide hormones (PLACENTAL HORMONES).",
    "arabic_definition": "المَشِيمَة أو الخَلاَص أو السُخْد هي عضو دائري مسطح الشكل يتصل بالجنين عن طريق الحبل السري في الرحم، وتخرج المشيمة من رحم الأم بعد المرحلة الثالثة من الولادة. (Placenta)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010920.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amnion",
    "term_en": "Amnion",
    "term_ar": "سلى",
    "synonyms": [
      "Amnions",
      "Amniotic Membrane",
      "Amniotic Membranes",
      "Membrane, Amniotic",
      "Membranes, Amniotic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The innermost membranous sac that surrounds and protects the developing embryo which is bathed in the AMNIOTIC FLUID. Amnion cells are secretory EPITHELIAL CELLS and contribute to the amniotic fluid.",
    "arabic_definition": "للاطلاع على سباق المخلوقات الفضائية في قصة دورة جاب للمؤلف ستيفن آر دونالدسون، انظر أمنيون (دورة جاب). السلى أو أمنيون أو غشاء الجنين الداخلي أو غلاف السلى هو غشاء يعمل على تكوين الكيس السلوي الذي يحيط بـالجنين ويحميه. (Amnion)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000650.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blastula",
    "term_en": "Blastula",
    "term_ar": "تكون أرومي",
    "synonyms": [
      "Blastulae",
      "Blastulation"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An early non-mammalian embryo that follows the MORULA stage. A blastula resembles a hollow ball with the layer of cells surrounding a fluid-filled cavity (blastocele). The layer of cells is called BLASTODERM.",
    "arabic_definition": "التكوُّن الأرومي هو مرحلة من مراحل التطوّر الجنيني المبكر لدى الحيوانات تُنتج فيها البُليسة (blastula). في تطوّر الثدييات، تتطوّر البُليسة لتُصبح الكيس الأرومي، الذي يتكوّن من كتلة خلوية داخلية متمايزة وغلاف خارجي يُعرف بالأدمة الأرومية.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D036703.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "umbilical-cord",
    "term_en": "Umbilical Cord",
    "term_ar": "حبل سري",
    "synonyms": [
      "Cords, Umbilical",
      "Cord, Umbilical",
      "Umbilical Cords"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The flexible rope-like structure that connects a developing FETUS to the PLACENTA in mammals. The cord contains blood vessels which carry oxygen and nutrients from the mother to the fetus and waste products away from the fetus.",
    "arabic_definition": "الحَبْلُ السُّرِّيُّ أو السُّرَر هو القناة التي تصل الجنين بالمشيمة داخل الرحم، ووظيفته نقل الفضلات التي تتكون في جسم الجنين إلى دورة الام الدموية. هكذا يفرز من جسم الجنين ثاني اكسيد الكربون ومواد البول. (Umbilical Cord)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014470.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ectoderm",
    "term_en": "Ectoderm",
    "term_ar": "أديم ظاهر",
    "synonyms": [
      "Ectoderms",
      "Apical Ectodermal Ridge",
      "Apical Ectodermal Ridges",
      "Ectodermal Ridge, Apical"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The outer of the three germ layers of an embryo.",
    "arabic_definition": "الأديم الظاهر (اللاتينية: Ectoderm) هو أحد الطبقات المنتشة الثلاثة التي تتشكل أثناء التكون الجنيني المبكر. يعد الطبقة الخارجية والسطحية مقارنةً بالأديم المتوسط (الطبقة الوسطى) والأديم الباطن (الطبقة الأعمق).",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004475.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "endoderm",
    "term_en": "Endoderm",
    "term_ar": "أديم باطن",
    "synonyms": [
      "Endoderms",
      "Definitive Endoderm",
      "Definitive Endoderms",
      "Endoderm, Definitive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The inner of the three germ layers of an embryo.",
    "arabic_definition": "الأديم الباطن (الإنجليزية: endoderm) وهو مشابه نسبيًا للأديم الظاهر وكذلك الأديم المتوسط، وهو عبارة عن ورقة أو صفحة داخلية جنينية عند بعض الكائنات متعددة الخلايا، حيث أنه يتشكل عند مرحلة المعيدة. كما أنه يقوم بالوظائف الغذائية عند الجنين.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004707.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chorion",
    "term_en": "Chorion",
    "term_ar": "مشيماء",
    "synonyms": [
      "Chorions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The outermost extra-embryonic membrane surrounding the developing embryo. In REPTILES and BIRDS, it adheres to the shell and allows exchange of gases between the egg and its environment. In MAMMALS, the chorion evolves into the fetal contribution of the PLACENTA.",
    "arabic_definition": "للمعلومات عن المشيماء في اللافقاريات والبيض، انظر مشيماء (بيض). للمعلومات عن شركة الترفيه انظر المشيماء (شركة). (Chorion)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002823.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blastocyst",
    "term_en": "Blastocyst",
    "term_ar": "كيسة أريمية",
    "synonyms": [
      "Blastocysts",
      "Embryo, Preimplantation",
      "Embryos, Preimplantation",
      "Preimplantation Embryo",
      "Preimplantation Embryos"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A post-MORULA preimplantation mammalian embryo that develops from a 32-cell stage into a fluid-filled hollow ball of over a hundred cells. A blastocyst has two distinctive tissues. The outer layer of trophoblasts gives rise to extra-embryonic tissues. The inner cell mass gives rise to the embryonic disc and eventual embryo proper.",
    "arabic_definition": "تعد الكيسَةُ الأُرَومِيَّة أو كيس البلاستولة هي بنية تتشكل خلال التطور الجنيني المبكر لدى الثدييات. تتكون من كتلة خلوية داخلية (آي سي إم) تُعرف أيضًا باسم الأرومة المضغية التي تشكل المُضعة (الجنين) لاحقًا، وطبقة خارجية من خلايا الأرومة الغاذِيَة (الأرومة المُغذِّية) تُسمى الأديم الظاهر المغذِّي. (Blastocyst)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001755.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cloaca",
    "term_en": "Cloaca",
    "term_ar": "مذرق",
    "synonyms": [
      "Cloacas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A dilated cavity extended caudally from the hindgut. In adult birds, reptiles, amphibians, and many fishes but few mammals, cloaca is a common chamber into which the digestive, urinary and reproductive tracts discharge their contents. In most mammals, cloaca gives rise to LARGE INTESTINE; URINARY BLADDER; and GENITALIA.",
    "arabic_definition": "في تشريح الحيوان، المَذْرَق (الإنجليزية: Cloaca) هي الفتحة الخلفية التي تعدّ الوحيدة من نوعها لفتح المسارات المعوية التناسلية و المسالك البولية لبعض الأنواع الحيوانية المعينة. كل الطيور، الزواحف والبرمائيات تمتلك هذه الفوهة، التي تفرز كل من البول والبراز، على عكس الثدييات المشيمية، التي تمتلك اثنتين (أو ثلاثة) فتحات منفصلة للاخلاء.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002988.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "notochord",
    "term_en": "Notochord",
    "term_ar": "حبل ظهري",
    "synonyms": [
      "Notochords",
      "Chordamesoderm",
      "Chordamesoderms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A cartilaginous rod of mesodermal cells at the dorsal midline of all CHORDATE embryos. In lower vertebrates, notochord is the backbone of support. In the higher vertebrates, notochord is a transient structure, and segments of the vertebral column will develop around it. Notochord is also a source of midline signals that pattern surrounding tissues including the NEURAL TUBE development.",
    "arabic_definition": "الحبل الظهري (الإنجليزية: Notochord) هو قضيب مرن على شكل جسم أنبوبي يوجد في أجنة كل الحبليات، وهي تتكون من خلايا مشتقة من الأديم المتوسط، ويكون موقعه محوري في الجنين، في بعض الحبليات يستمر الحبل الظهري طوال فترة حياة الكائن، بينما في معظم الحبليات يتحول إلى عمود فقري، ويمتد داخل الحبل الظهري حبل عصبي يسمى النخاع الشوكي.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009672.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amniotic-fluid",
    "term_en": "Amniotic Fluid",
    "term_ar": "سائل سلوي",
    "synonyms": [
      "Amniotic Fluids",
      "Fluid, Amniotic",
      "Fluids, Amniotic",
      "Amniotic Fluid Index",
      "Amniotic Fluid Indices",
      "Fluid Index, Amniotic",
      "Fluid Indices, Amniotic",
      "Index, Amniotic Fluid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clear, yellowish liquid that envelopes the FETUS inside the sac of AMNION. In the first trimester, it is likely a transudate of maternal or fetal plasma. In the second trimester, amniotic fluid derives primarily from fetal lung and kidney. Cells or substances in this fluid can be removed for prenatal diagnostic tests (AMNIOCENTESIS).",
    "arabic_definition": "السَّائلُ السلويّ أو النُّخْط أو الصَّاء أو الصاءة أو سَائِل السَلَى (الإنجليزية: Amniotic fluid) سائل غذائي ويُوفر الحماية للجنين يُوجد داخل الكيس الأمنيوتي في رحم المرأة.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000653.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "somites",
    "term_en": "Somites",
    "term_ar": "جسيدة",
    "synonyms": [
      "Somite"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Paired, segmented masses of MESENCHYME located on either side of the developing spinal cord (neural tube). Somites derive from PARAXIAL MESODERM and continue to increase in number during ORGANOGENESIS. Somites give rise to SKELETON (sclerotome); MUSCLES (myotome); and DERMIS (dermatome).",
    "arabic_definition": "إن الجسيدة هي جزء من جسم أي حيوان. تكون الجسيدات في الفقاريات عبارة عن وحدات ثنائية مزدوجة من الأديم المتوسط الذي يتكون عبر المحور الأمامي الخلفي في الجنين المتطور في الحيوانات مقسمة الجسم. (Somites)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019170.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "allantois",
    "term_en": "Allantois",
    "term_ar": "سقاء (أجنة)",
    "synonyms": [
      "Allantoic Membrane",
      "Membrane, Allantoic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An extra-embryonic membranous sac derived from the YOLK SAC of REPTILES; BIRDS; and MAMMALS. It lies between two other extra-embryonic membranes, the AMNION and the CHORION. The allantois serves to store urinary wastes and mediate exchange of gas and nutrients for the developing embryo.",
    "arabic_definition": "المنبار أو النِتويس أو السقاء أو اللقانقي (؛ الجمع أسقية) هو جزءٌ من حمل الحيوان النامي (الذي يتكون من جميع الأنسجة الجنينية والأنسجة خارج الجنينية). ويساعد السقاء الجنين على تبادل الغازات ومعالجة الفضلات السائلة. (Allantois)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000482.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "morula",
    "term_en": "Morula",
    "term_ar": "الانقسام (جنين)",
    "synonyms": [
      "Morulas",
      "Cleavage (embryo)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An early embryo that is a compact mass of about 16 BLASTOMERES. It resembles a cluster of mulberries with two types of cells, outer cells and inner cells. Morula is the stage before BLASTULA in non-mammalian animals or a BLASTOCYST in mammals.",
    "arabic_definition": "في علم الأجنة، الانقسام أو الانفلاق أو انشطار خلوى تام هو تقسيم الخلية في أول مراحل الجنين. وتمر لاقحة الكثير من الأنواع بدورات خلوية بدون زيادة في الحجم تذكر، مما ينتج عنه مجموعة من الخلايا بنفس حجم البيضة الملقحة الأصلية. (Morula)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009028.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neural-crest",
    "term_en": "Neural Crest",
    "term_ar": "عرف عصبي",
    "synonyms": [
      "Crest, Neural",
      "Crests, Neural",
      "Neural Crests",
      "Neural Fold",
      "Fold, Neural",
      "Folds, Neural",
      "Neural Folds",
      "Neural Groove"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The two longitudinal ridges along the PRIMITIVE STREAK appearing near the end of GASTRULATION during development of nervous system (NEURULATION). The ridges are formed by folding of NEURAL PLATE. Between the ridges is a neural groove which deepens as the fold become elevated. When the folds meet at midline, the groove becomes a closed tube, the NEURAL TUBE.",
    "arabic_definition": "العرف العصبي (الإنجليزية: Neural crest)، هي مجموعة من الخلايا العصبية التي تتكون في المراحل الجنينية في الفقاريات والتي تدخل في تركيب الأجزاء الهامة كالدماغ والجمجمة وأعضاء الإحساس. وهذه الخلايا التي تكون اتصالها مع بعضها رخواً تكون في البدء على هيئة صفين خلويين طوليين على جانبي الخط المتوسط الظهري، بين الأنبوب العصبي والأديم الظاهر السطحي.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009432.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "decidua",
    "term_en": "Decidua",
    "term_ar": "غشاء ساقط",
    "synonyms": [
      "Deciduas",
      "Deciduum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The hormone-responsive glandular layer of ENDOMETRIUM that sloughs off at each menstrual flow (decidua menstrualis) or at the termination of pregnancy. During pregnancy, the thickest part of the decidua forms the maternal portion of the PLACENTA, thus named decidua placentalis. The thin portion of the decidua covering the rest of the embryo is the decidua capsularis.",
    "arabic_definition": "السَّاقط أو الغشاء الساقط أو النُّفَاض أو اللُّفَاظ(الإنجليزية: Decidua)، هو مصطلح لبطانة الرحم خلال فترة الحمل، التي تشكل جزء المشيمة، تتشكل تحت تأثير خلايا هرمون الإستروجين وأشكال مميزة جدا.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003656.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "urachus",
    "term_en": "Urachus",
    "term_ar": "سرر مثاني",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An embryonic structure originating from the ALLANTOIS. It is a canal connecting the fetal URINARY BLADDER and the UMBILICUS. It is normally converted into a fibrous cord postnatally. When the canal fails to be filled and remains open (patent urachus), urine leaks through the umbilicus.",
    "arabic_definition": "السرر المثاني وقد يسمى «المريطاء» هو بقية ليفية من الممبار, وهو القناة التي تفرغ المثانة البولية للجنين التي تنضم إلى الحبل السري وتسير ضمنه. البقية الليفية توجد في حيز ريتزيوس, بين اللفافة المستعرضة في الأمام وبريتون في الخلف. (Urachus)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014497.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blastoderm",
    "term_en": "Blastoderm",
    "term_ar": "أدمة الأريمة",
    "synonyms": [
      "Blastoderms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A layer of cells lining the fluid-filled cavity (blastocele) of a BLASTULA, usually developed from a fertilized insect, reptilian, or avian egg.",
    "arabic_definition": "أدَمَةُ الأريْمة أو أدَمَة الجُرثومة أو القرص الجرثومي أو القرص الأريمي (الإنجليزية: Blastoderm) هي طبقة واحدة من الأنسجة الظهارية الجنينية التي تشكل الأريمة. تُحيط بالسائل المملوء بالتجويف الأريمي.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001756.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fetus",
    "term_en": "Fetus",
    "term_ar": "جنين حي",
    "synonyms": [
      "Fetuses",
      "Fetal Tissue",
      "Fetal Tissues",
      "Tissue, Fetal",
      "Tissues, Fetal",
      "Mummified Fetus",
      "Fetus, Mummified",
      "Retained Fetus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The unborn young of a viviparous mammal, in the postembryonic period, after the major structures have been outlined. In humans, the unborn young from the end of the eighth week after CONCEPTION until BIRTH, as distinguished from the earlier EMBRYO, MAMMALIAN.",
    "arabic_definition": "الجنين الحي أو الحميل (الإنجليزية: foetus) هو مرحلة في النماء السابق للولادة في الكائنات الولودية. في التطور البشري، الجنين الحي (الجمع: أجنة) هو مرحلة ما قبل الولادة بين مرحلة الجنين والولادة. (Fetus)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005333.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "persistent-hyperplastic-primary-vitreous",
    "term_en": "Persistent Hyperplastic Primary Vitreous",
    "term_ar": "الجملة الوعائية الجنينية المستدمية",
    "synonyms": [
      "Persistent Fetal Vasculature Syndrome",
      "Persistent Hyaloid Artery",
      "Persistent Hyaloid Arteries",
      "Persistent Hyaloid Vasculature",
      "Persistent Hyaloid Vasculatures",
      "Persistent fetal vasculature"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A developmental ocular anomaly in which the primary VITREOUS BODY and its surrounding hyaloid vasculature failed to regress. It is usually unilateral and characterized by CATARACT; MICROPHTHALMOS (small eyeballs), and retrolenticular fibrovascular tissue. (from Yanoff: Ophthalmology, 2nd ed.)",
    "arabic_definition": "الجملة الوعائية الجنينية المستدمية (الإنجليزية: Persistent fetal vasculature) هو مرض يلتبس بينهم وبين سد الطفولة. كان يسمى سابقا باستدامة الزجاجي الأولي مفرط التنسج. (Persistent Hyperplastic Primary Vitreous)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054514.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alleles",
    "term_en": "Alleles",
    "term_ar": "أليل",
    "synonyms": [
      "Allele",
      "Allelomorphs",
      "Allelomorph",
      "أليل (وراثة)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Variant forms of the same gene, occupying the same locus on homologous CHROMOSOMES, and governing the variants in production of the same gene product.",
    "arabic_definition": "الأليل أو الحليل أو البديل أو الداغش (الإنجليزية: allele) هو نسخة أو شكل بديل للمورِّثة أو موقع كروموسومي (عادة يتكون من مجموعة مورثات). وللمورثة على الأقل نسختان أو شكلان بديلان. (Alleles)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000483.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exons",
    "term_en": "Exons",
    "term_ar": "إكسون",
    "synonyms": [
      "Exon",
      "Mini-Exon",
      "Mini-Exons"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The parts of a transcript of a split GENE remaining after the INTRONS are removed. They are spliced together to become a MESSENGER RNA or other functional RNA.",
    "arabic_definition": "الإكسون (الإنجليزية: Exon) هو أي قطعة من الدي ان اي التي تم نسخها لتصبح جزءا من الرنا المرسال البدائي ولا يتم التخلص منها عند معالجته، على عكس الإنترون الذي يتم اقتطاعه من الرنا المرسال البدائي للحصول على رنا مرسال ناضج. واضع التسمية هو العالم والتر كيلبرت في عام 1978. (Exons)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005091.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "genetic-code",
    "term_en": "Genetic Code",
    "term_ar": "شيفرة جينية",
    "synonyms": [
      "Code, Genetic",
      "Codes, Genetic",
      "Genetic Codes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The meaning ascribed to the BASE SEQUENCE with respect to how it is translated into AMINO ACID SEQUENCE. The start, stop, and order of amino acids of a protein is specified by consecutive triplets of nucleotides called codons (CODON).",
    "arabic_definition": "الشفرة الجينية، هي مجموعة من القواعد التي تستخدمها الخلايا الحية لترجمة المعلومات المُشفَّرة داخل المادة الوراثية (سلاسل DNA أو RNA المكوّنة من ثلاثيّات النوكليوتيدات أو الكودونات) إلى بروتينات. وتُنجَز عملية الترجمة بواسطة الريبوسوم، الذي يربط الأحماض الأمينية المُكوِّنة للبروتينات وفق ترتيب تُحدده الرسالة الجينية المحمولة على جزيء الحمض الريبي النووي الرسول (mRNA)، وذلك باستخدام جزيئات الحمض الريبي النووي الناقل (tRNA)، التي تقوم بحمل الأحماض الأمينية وقراءة mRNA ثلاث قواعد نيتروجينية في كل مرة. (Genetic Code)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005815.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "genome",
    "term_en": "Genome",
    "term_ar": "مجموع مورثي",
    "synonyms": [
      "Genomes",
      "Pangenome",
      "Pan-genome",
      "Accessory Genome",
      "Core Genome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The genetic complement of an organism, including all of its GENES, as represented in its DNA, or in some cases, its RNA.",
    "arabic_definition": "في علم الأحياء، المَجِين أو الجماع الوراثي أو الجينوم (الإنجليزية: Genome) هو كامل تسلسل الدنا لأحد الكائنات الحية. تحت المجهر الميكروسكوب يمكن رؤية شريط الدنا في هيئة معرفات للصبغيات الوراثيةات توجد في نواة الخلية الحية.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016678.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "genotype",
    "term_en": "Genotype",
    "term_ar": "نمط جيني",
    "synonyms": [
      "Genotypes",
      "Genogroup",
      "Genogroups"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The genetic constitution of the individual, comprising the ALLELES present at each GENETIC LOCUS.",
    "arabic_definition": "النمط الوراثي أو النمط الجيني أو الطراز الجيني أو محتوى وراثي هو التكوين الوراثي للخلية، الفرد، أو الكائن الحي. وهو عبارة عن مجموعة المعلومات الوراثية «المُشَفَّرة باطنياً» والتي يحملها كل كائن حي، أي مجموعة الجينات الكاملة الخاصة به والتي تحدد الكيفية التي تظهر عليها سماته أو خصائصه. (Genotype)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005838.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "heredity",
    "term_en": "Heredity",
    "term_ar": "توريث",
    "synonyms": [
      "توريث (أحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The transmission of traits encoded in GENES from parent to offspring.",
    "arabic_definition": "الوراثة أو التوريث (الإنجليزية: heredity) هو انتقال الصفات الجسمية في الكائنات الحية من الكائنات إلى نسلهم. وهو يتم عن طريق مشاركة النسل للشيفرة الوراثية للآباء من خلال أنصاف الشفيرات الوراثية من الأم، وأنصاف الشفيرات الوراثية (كروموسومات) من الأب.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D040941.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "introns",
    "term_en": "Introns",
    "term_ar": "إنترون",
    "synonyms": [
      "Intron",
      "Intervening Sequences",
      "Sequences, Intervening",
      "Intervening Sequence",
      "Sequence, Intervening"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Sequences of DNA in the genes that are located between the EXONS. They are transcribed along with the exons but are removed from the primary gene transcript by RNA SPLICING to leave mature RNA. Some introns code for separate genes.",
    "arabic_definition": "الإنترون (الإنجليزية: Intron) هي قطعة من الدنا تـُنسخ عند تكوين الرنا المرسال، إلا أنها تـُحذف من التركيب النهائي له، وما تبقى في الرنا المرسال ماهو إلا نسخ قطع الدنا التي تعرف بالإكسونات. لا تعرف ماهي الوظيفة الأساسية للإنترونات لكن الأبحاث الجارية تتوقع أن لها دور في عملية النسخ الوراثي وكذلك تطور الكائنات الحية. (Introns)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007438.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "meiosis",
    "term_en": "Meiosis",
    "term_ar": "انقسام منصف",
    "synonyms": [
      "Meioses",
      "M Phase, Meiotic",
      "Meiotic M Phase",
      "Meiotic M Phases",
      "M Phases, Meiotic",
      "Phase, Meiotic M",
      "Phases, Meiotic M"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of CELL NUCLEUS division, occurring during maturation of the GERM CELLS. Two successive cell nucleus divisions following a single chromosome duplication (S PHASE) result in daughter cells with half the number of CHROMOSOMES as the parent cells.",
    "arabic_definition": "انْتِصَاف أو الانقسام المنصِّف أو الإنشطار الثنائي أو الانقسام الاختزالي أو تَنَصُّف أو الانقسام الميوزي (الإنجليزية: meiosis) يحدث في الخلايا التناسلية الحية والتي تسمى بالخلايا الجنسية الأم، ويختلف هذا النوع من الانقسام بأنه خلاله يختزل عدد الكرموسومات إلى النصف. وتكمن أهمية الانقسام المنصف بأنه ضروري للحفاظ على الكائنات الحية التي تتكاثر جنسياً، كما انه بواسطة الانقسام المنصف تتم المحافظة على ثبات عدد الصبغيات، ويساعد في تنوع صفات الكائنات الحية لنفس السلالة.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008540.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mitosis",
    "term_en": "Mitosis",
    "term_ar": "انقسام متساو",
    "synonyms": [
      "Mitoses",
      "M Phase, Mitotic",
      "Mitotic M Phase",
      "Mitotic M Phases",
      "M Phases, Mitotic",
      "Phase, Mitotic M",
      "Phases, Mitotic M"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of CELL NUCLEUS division by means of which the two daughter nuclei normally receive identical complements of the number of CHROMOSOMES of the somatic cells of the species.",
    "arabic_definition": "الانقسام المتساوي أو الانقسام الفتيلي أو انقسام النواة أو الميتوسيس أو الانقسام الميتوزي (الإنجليزية: mitosis) هو العملية الحيوية التي يتم بها انقسام النواة إلى قسمين وتتضاعف المعلومات الوراثية الجينية ضمن الخلية الحية لتشكيل خليتين حيتين متطابقتين ندعوهما الخليتين الابنتين. عادة الانقسام المتساوي يتبع بحرائك خلوية تعمل على قسم الهيولى (السيتوبلازم) والغشاء الخلوي للخلية الأم بين الخليتين الابنتين.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008938.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oncogenes",
    "term_en": "Oncogenes",
    "term_ar": "جين ورمي",
    "synonyms": [
      "Oncogene",
      "Transforming Gene",
      "Genes, Transforming",
      "Gene, Transforming",
      "Transforming Genes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Genes whose gain-of-function alterations lead to NEOPLASTIC CELL TRANSFORMATION. They include, for example, genes for activators or stimulators of CELL PROLIFERATION such as growth factors, growth factor receptors, protein kinases, signal transducers, nuclear phosphoproteins, and transcription factors. A prefix of v- before oncogene symbols indicates oncogenes captured and transmitted by RETROVIRUSES; the prefix c- before the gene symbol of an oncogene indicates it is the cellular homolog (PROTO-ONCOGENES) of a v-oncogene.",
    "arabic_definition": "الجين الورمي أو المورثة الورمية (الإنجليزية: Oncogene) هو جين يقوم بتشفير صناعة بروتين يعتقد أنه مسبب للسرطان. تنشأ هذه الجينات من جينات تعرف بطلائع الجينات الورمية (الإنجليزية: Proto-Oncogene) وظيفتها الأساسية التحكم بدورة حياة الخلية وتمايزها. (Oncogenes)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009857.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ploidies",
    "term_en": "Ploidies",
    "term_ar": "صيغة صبغية",
    "synonyms": [
      "Ploidy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The degree of replication of the chromosome set in the karyotype.",
    "arabic_definition": "الصيغة الصبغية مجموعة من الصبغيات في نواة الخلية. عادة ما تحمل الأمشاج (الحيوانات المنوية أو بويضة) مجموعة كاملة من الصبغيات التي تتضمن نسخة واحدة من كل كروموسوم، واختلال الصيغة الصبغية يؤدي عادة إلى مرض وراثي حاد في النسل. (Ploidies)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011003.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "plasmids",
    "term_en": "Plasmids",
    "term_ar": "بلازميد",
    "synonyms": [
      "Plasmid",
      "Episomes",
      "Episome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Extrachromosomal, usually CIRCULAR DNA molecules that are self-replicating and transferable from one organism to another. They are found in a variety of bacterial, archaeal, fungal, algal, and plant species. They are used in GENETIC ENGINEERING as CLONING VECTORS.",
    "arabic_definition": "البلازميدات هي جزيئات DNA حلقية تحمل جينات في الخلية، وهي منفصلة عن الكروموسوم البكتيري. وتحتوى على جينات إضافية غير أساسية تساعد على تحسين صفات الكائن الدقيق، ولكن رغم ذلك يمكنه العيش بدونها. (Plasmids)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010957.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trisomy",
    "term_en": "Trisomy",
    "term_ar": "تثلث صبغي",
    "synonyms": [
      "Trisomies",
      "Chromosomal Triplication",
      "Chromosomal Triplications",
      "Partial Trisomy",
      "Partial Trisomies",
      "Trisomies, Partial",
      "Trisomy, Partial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The possession of a third chromosome of any one type in an otherwise diploid cell.",
    "arabic_definition": "تثلث صبغي أو تثلث كروموسومي (الإنجليزية: Trisomy) هو نوع من التعدّد الصبغي حيث يكون عدد إحدى الكروموسومات 3 بدل 2، وهو نوع من الاختلال في الصيغة الصبغيّة، وسببه هو خلل في افتراق أزواج الكروموسومات خلال انقسام الخليّة ممّا يؤدّي إلى وجود نسخة إضافيّة من الكروموسوم.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014314.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prophase",
    "term_en": "Prophase",
    "term_ar": "طور تمهيدي",
    "synonyms": [
      "Prophases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The first phase of cell nucleus division, in which the CHROMOSOMES become visible, the CELL NUCLEUS starts to lose its identity, the SPINDLE APPARATUS appears, and the CENTRIOLES migrate toward opposite poles.",
    "arabic_definition": "الطور التمهيدي (الإنجليزية: Prophase) هو المرحلة الأولى من الانقسام المتساوي (الميتوسيس)، والذي تسبقه مرحلة الطور البيني عند انقسام نواة الخلية. تبدأ هذه المرحلة من الانقسام بظهور الكروموسومات كخيوط واضحة تحت المجهر حيث تتجزأ الشبكة الصبغية إلى عدد من الخيوط المزدوجة طوليا تبدأ رفيعة ثم تزداد في السمك وتقل في الطول حيث تعرف بالصبغيات أو الكروموسومات ويتكون كل صبغي من نصفين طوليين يعرف منهما بالنصف صبغي ( أو الكروماتيد ) ويتلاقى كل كروماتيد مع الآخر في نقطة قرب أحد طرفيه تعرف بالسنتـرومير في نفـس تحدث تغيرات أخرى داخل الخلية ففي خلايا الحيوانات والنباتات الدنيا يتحرك الجسم المركزي ( السنتريـول) إلى الأطراف المضادة للنواة حيث تعمل كأقطاب للجهاز الانقسامي عند بدأ تكوينه ويتكون هذا الجهاز من شبكة من الخيوط الأنيبيبية الدقيقة حيث تتصل هذه الخيـوط بالسنتريولين لتكوين المغزل وأخـيرا تتكـون خيوط كروموسومية لتربط بين سنترومير الكروموسوم والسنتريولات ( تفقد خلايا النباتات العليا وبعض اللافقاريات الأجسام المركزية ولكنها تكون خيوط مغزلية ) وتختفي النويات خلال مراحل الطور التمهيدي المتأخر وينتهي هذا الطور بانهيار الغشاء النووي وبذلك لا تكون الكروموسومات معزولة عن السيتوبلازم .",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011418.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phylogeny",
    "term_en": "Phylogeny",
    "term_ar": "شجرة المحتد",
    "synonyms": [
      "Phylogenies",
      "Phylogenomics",
      "Phylogenomic",
      "Phylogenetic Relationships",
      "Phylogenetic Relationship",
      "Relationship, Phylogenetic",
      "Phylogenetic Relatedness",
      "Phylogenetic Relatednesses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The relationships of groups of organisms as reflected by their genetic makeup.",
    "arabic_definition": "شجرة المَحْتِد (الإنجليزية: phylogenetic tree) أو شجرة التطور شجرة تُظهر العلاقات التطورية بين مختلف الأنواع الحيوية أو مختلف الكيانات الحية التي يعتقد بأنها تمتلك أصلاً مشتركاً. تمثل كل عقدة مع تفرعاتها في شجرة المحتد السلف المشترك الأحدث most recent common ancestor لما يتفرع عنه، وأطوال الفروع تمثل تقديرات زمنية. (Phylogeny)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010802.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "operon",
    "term_en": "Operon",
    "term_ar": "مشغل",
    "synonyms": [
      "Operons",
      "مشغل (أحياء)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "In bacteria, a group of metabolically related genes, with a common promoter, whose transcription into a single polycistronic MESSENGER RNA is under the control of an OPERATOR REGION.",
    "arabic_definition": "المَشغل (الإنجليزية: Operon) هو عبارة عن تسلسل من الدنا يحتوي على مجموعة من الجينات متجاورة لها وظائف متعلقة بعملية حيوية مشتركة. تشترك المورثات بوجود محفز ومُشغل واحد يتحكمان في التعبير الجيني لهذا المشغل الحيوي على شكل وحدة واحدة.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009876.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anaphase",
    "term_en": "Anaphase",
    "term_ar": "طور الصعود",
    "synonyms": [
      "Anaphases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The phase of cell nucleus division following METAPHASE, in which the CHROMATIDS separate and migrate to opposite poles of the spindle.",
    "arabic_definition": "طور الصعود أو طور الانفصال (الإنجليزية: Anaphase) هو المرحلة الرابعة التي تلي الطور التالي وتسبق مرحلة الطور النهائي في عملية الانقسام المتساوي. تتمثل هذه المرحلة بانقسام كل زوج من الكروموسومات إلى كروموسومين متطابقين ومستقلين.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000705.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metaphase",
    "term_en": "Metaphase",
    "term_ar": "طور تالي",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The phase of cell nucleus division following PROMETAPHASE, in which the CHROMOSOMES line up across the equatorial plane of the SPINDLE APPARATUS prior to separation.",
    "arabic_definition": "الطور التالي أو الطور الاستوائي أو الطور الوسيط (الإنجليزية: metaphase) هو المرحلة الثالثة من مراحل الانقسام الخيطي في دورة حياة الخلايا حقيقيات النوى، ويكون فيها الصبغي متكثفاً ويمكن رؤيته تحت المجهر الضوئي. تأتي هذه المرحلة بعد مرحلة طليعة الطور التالي ويأتي بعدها مرحلة طور الصعود.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008677.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mosaicism",
    "term_en": "Mosaicism",
    "term_ar": "فسيفساء",
    "synonyms": [
      "Mosaic (genetics)",
      "فسيفساء (علم الوراثة)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The occurrence in an individual of two or more cell populations of different chromosomal constitutions, derived from a single ZYGOTE, as opposed to CHIMERISM in which the different cell populations are derived from more than one zygote.",
    "arabic_definition": "الفسيفساء الوراثيَّة أو فُسَيْسَائية (الإنجليزية: Genetic mosaicism) تحدث عندما تحتوي بعض خلايا الجسم على دنا متحوِّر، في حين لا يحدث هذا في الخلايا الأخرى، وبالتالي يكون لدى الشخص المصاب بالفسيفساء الجينية مزيج من خلايا سوية وأخرى مصابة بالطَّفرة. وربطت دراستان جديدتان الحالة المعروفة باسم الفسيفساء الجينية بحالات مثل الشيخوخة والسرطان.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009030.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ecotype",
    "term_en": "Ecotype",
    "term_ar": "نمط بيئي",
    "synonyms": [
      "Ecotypes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Geographic variety, population, or race, within a species, that is genetically adapted to a particular habitat. An ecotype typically exhibits phenotypic differences but is capable of interbreeding with other ecotypes.",
    "arabic_definition": "النمط البيئي النوع البيئي (الإنجليزية: Ecotype) ، هو رتبة تصنيفية لفرد أو مجموعة من نوع معين، مميزة ظاهريا أو وراثيا عن باقي أفراد نوعه، بخصائص متكيفة مع موائل مختلفة. مع أن التحليل الجيني يزداد انتشارا يوما بعد يوم، إلا أن النمط البيئي لا يزال اليون محددا وفقا للبيانات المورفولوجية والفسيولوجية والبيئية.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D060146.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cosmids",
    "term_en": "Cosmids",
    "term_ar": "كوزميد",
    "synonyms": [
      "Cosmid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Plasmids containing at least one cos (cohesive-end site) of PHAGE LAMBDA. They are used as cloning vehicles.",
    "arabic_definition": "كان كولينز وهون هما أول من وصفا الكوزميد (الإنجليزية: cosmid) في عام 1978 على أنه نوعاً من البلازميد (الذي يُستخدم غالباً كناقل وراثي في عملية الاستنساخ) يشتمل على سلاسل الكروموسومات، والتي تمثل سلاسل الحمض النووي (دنا) من عاثية لامدا (الإنجليزية: lambda phage). ونلاحظ أن الكوزميدات تُستخدم لبناء المكتبات الوراثية ({{اللغة|en|Library (biology)]]. (Cosmids)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003360.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sympatry",
    "term_en": "Sympatry",
    "term_ar": "تماكن",
    "synonyms": [
      "Sympatries",
      "Sympatric Species",
      "Species, Sympatric",
      "Specy, Sympatric",
      "Sympatric Specy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "In evolutionary theory, overlapping geographic distribution of diverging species. In sympatric GENETIC SPECIATION, genetic diversion occurs without geographic separation.",
    "arabic_definition": "التماكن أو التواطن (الإنجليزية: Sympatry) في علم الأحياء هو الحالة التي يوجد فيها نوعان أو مجموعتان في نفس المنطقة الجغرافية وفي نفس الزمان ولذا يتقابلان في كثير من الأحيان. يُقال أن هذه الأنواع متماكنة لأنها توجد في نفس المكان والزمان.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D061350.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "monosomy",
    "term_en": "Monosomy",
    "term_ar": "أحاد الصبغي",
    "synonyms": [
      "Monosomies"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The condition in which one chromosome of a pair is missing. In a normally diploid cell it is represented symbolically as 2N-1.",
    "arabic_definition": "أُحاد الصبغي (الإنجليزية: Monosomy) هو اختلال في الصيغة الصبغية يوجد فيه صبغي مفرد بدلاً من زوج من الصبغيات كما هو الطبيعي لدى عند الإنسان.الأحاد الجزئي هو فقد قسم من الصبغي مع بقاء القسم المقابل له من الشفع الأخر. من حالات الأُحاد الصبغي الشائعة عند الإنسان: متلازمة تورنر: تملك المرأة فيه شفع صبغي جنسي واحد X، بدلاً من زوج من الصبغيات الجنسية.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009006.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synteny",
    "term_en": "Synteny",
    "term_ar": "تصاحب جيني",
    "synonyms": [
      "Syntenies",
      "Syntenic Homology",
      "Homologies, Syntenic",
      "Homology, Syntenic",
      "Syntenic Homologies",
      "Conserved Synteny",
      "Conserved Syntenies",
      "Syntenies, Conserved"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence of two or more genetic loci on the same chromosome. Extensions of this original definition refer to the similarity in content and organization between chromosomes, of different species for example.",
    "arabic_definition": "في علم الوراثة الكلاسيكي , يعرف التصاحب الجيني أو التزامن، على انه التوطين المادي المشترك للمكان الجيني على نفس الكروموسوم داخل الفرد أو الفصيلة. اليوم، علماء الوراثة يشيرون إلى التصاحب الجيني عادة باعتباره التحفظ على كتل النظام داخل مجموعتين من الكروموسومات التي يتم مقارنتها مع بعضها البعض. (Synteny)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D026801.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lysogeny",
    "term_en": "Lysogeny",
    "term_ar": "دورة المستذيب",
    "synonyms": [
      "Integration, Prophage",
      "Integrations, Prophage",
      "Prophage Integrations",
      "Prophage Integration",
      "Lysogenic cycle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The phenomenon by which a temperate phage incorporates itself into the DNA of a bacterial host, establishing a kind of symbiotic relation between PROPHAGE and bacterium which results in the perpetuation of the prophage in all the descendants of the bacterium. Upon induction (VIRUS ACTIVATION) by various agents, such as ultraviolet radiation, the phage is released, which then becomes virulent and lyses the bacterium.",
    "arabic_definition": "دورة المستذيب هي اٍحدى طريقتي تكاثر الفيروسات تسمى الدورة الأخرى بالدورة الحالة تتميز دورة المستذيب بدمج حمض العاثية النووي في جينوم البكتيريا الثوية. المادة الوراثية المندمجة حديثا، تسمى طليعة العاثية و التي تنتقل اٍلى الخلايا البنات مع كل اٍنقسام خلوي. (Lysogeny)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008242.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "primitive-streak",
    "term_en": "Primitive Streak",
    "term_ar": "شريط بدائي",
    "synonyms": [
      "Primitive Streaks",
      "Streak, Primitive",
      "Streaks, Primitive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A linear band of rapidly proliferating cells that begins near the posterior end of an embryo and grows cranially. Primitive streak is formed during GASTRULATION by the convergent migration of primary ectodermal cells (EPIBLAST). The knot at the tip of the streak is called HENSEN NODE.",
    "arabic_definition": "الشريط البدائي هو الهيكل الذي تشكل في الأريمة خلال المراحل الأولى للتخلق المضغي في الطيور، والزواحف والثدييات . (Primitive Streak)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054240.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "genes",
    "term_en": "Genes",
    "term_ar": "جين",
    "synonyms": [
      "Gene",
      "Genetic Materials",
      "Genetic Material",
      "Material, Genetic",
      "Materials, Genetic",
      "Cistron",
      "Cistrons"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A category of nucleic acid sequences that function as units of heredity and which code for the basic instructions for the development, reproduction, and maintenance of organisms.",
    "arabic_definition": "المُوَرِّثَةُ (الجمع: المُوَرِّثَات) أو المُوَرِّثُ أو الوِرْثَةُ أو الجِينَةُ أو الجِينُ (الإنجليزية: Gene) (الجمع: الجِينَاتُ) أو الإِرْثِينُ أو وَحْدَةُ الوِرَاثَةِ هي الوحدات الأساسية للوراثة في الكائنات الحيّة. وضمن هذه المورِّثات تُشفَّر المعلومات المهمة لتكوين أعضاء الجنين والوظائف العضوية الحيويَّة له. (Genes)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005796.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "truncus-arteriosus",
    "term_en": "Truncus Arteriosus",
    "term_ar": "جذع شرياني",
    "synonyms": [
      "Arteriosus, Truncus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The arterial trunk arising from the fetal heart. During development, it divides into AORTA and the PULMONARY ARTERY.",
    "arabic_definition": "الجذع الشرياني هو تركيب موجود خلال التطور الجنيني. وهو جذع شرياني ينشأ من كلتا بطيني القلب وينقسم لاحقًا إلى الأبهر والجذع الرئوي. (Truncus Arteriosus)",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014338.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "regulon",
    "term_en": "Regulon",
    "term_ar": "ريجولون",
    "synonyms": [
      "Regulons"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "In eukaryotes, a genetic unit consisting of a noncontiguous group of genes under the control of a single regulator gene. In bacteria, regulons are global regulatory systems involved in the interplay of pleiotropic regulatory domains and consist of several OPERONS.",
    "arabic_definition": "في علم الوراثة الجزيئي ، الريجولون أو الريغولون هو مجموعة من الجينات التي يتم تنظيمها كوحدة ، يتم التحكم فيها بشكل عام بواسطة نفس الجين التنظيمي الذي يعبر عن بروتين يعمل كمثبط أو منشط . يتم استخدام هذا المصطلح بشكل عام ، وإن لم يكن حصريًا ، للإشارة إلى بدائيات النوى ، التي غالبًا ما يتم تنظيم جينوماتها في أوبيرونات ؛ عادة ما يتم تنظيم الجينات الموجودة داخل ريجولون في أكثر من أوبيرون واحد في مواقع متباينة على الكروموسوم . (Regulon)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018085.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "exome",
    "term_en": "Exome",
    "term_ar": "إكسوم",
    "synonyms": [
      "Exomes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "That part of the genome that corresponds to the complete complement of EXONS of an organism or cell.",
    "arabic_definition": "الإكسوم هو جزء من الشريط الوراثي المكون من الخوارج وهي سلسلة متتالية عند نسخها تبقى في الحمض النووي الريبي الناضج وتساهم في الناتج النهائي للبروتين المشفر بتلك المورثة. ويتألف من كامل الحمض النووي الريبوزي منقوص الأوكسجين الذي يتم نسخه إلى حمض نووي ريبي ناضج في الخلايا من أية نوع والتي تفرق عن الترانسكريبتوم والذي هو حمض نووي ريبي يتم نسخه ضمن خلايا نوعية معينة. (Exome)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059472.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mandibulofacial-dysostosis",
    "term_en": "Mandibulofacial Dysostosis",
    "term_ar": "متلازمة تريتشر كولينز",
    "synonyms": [
      "Dysostoses, Mandibulofacial",
      "Dysostosis, Mandibulofacial",
      "Mandibulofacial Dysostoses",
      "Franceschetti-Zwahlen-Klein Syndrome",
      "Franceschetti-Zwahlen-Klein Syndromes",
      "Syndrome, Franceschetti-Zwahlen-Klein",
      "Syndromes, Franceschetti-Zwahlen-Klein",
      "Treacher Collins Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A hereditary disorder occurring in two forms: the complete form (Franceschetti's syndrome) is characterized by a slant of the palpebral fissures, COLOBOMA of the lower lid, MICROGNATHIA and hypoplasia of the ZYGOMATIC ARCHES, and CONGENITAL MICROTIA. It is transmitted as an autosomal trait. The incomplete form (Treacher Collins syndrome) is characterized by the same anomalies in less pronounced degree. It occurs sporadically, but an autosomal dominant mode of transmission is suspected. (Dorland, 27th ed)",
    "arabic_definition": "متلازمة تريتشر كولينز هي اضطراب وراثي يتميز بتشوهات في الأذنين، والعينين، وعظام الوجنتين، والذقن. تختلف شدّة المرض عند المصابين من خفيفة إلى شديدة. (Mandibulofacial Dysostosis)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008342.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chediak-higashi-syndrome",
    "term_en": "Chediak-Higashi Syndrome",
    "term_ar": "متلازمة شدياق-هيغاشي",
    "synonyms": [
      "Chediak-Steinbrinck-Higashi Syndrome",
      "Chediak-Steinbrinck-Higashi Syndromes",
      "Oculocutaneous Albinism with Leukocyte Defect",
      "Chédiak–Higashi syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of phagocyte bactericidal dysfunction characterized by unusual oculocutaneous albinism, high incidence of lymphoreticular neoplasms, and recurrent pyogenic infections. In many cell types, abnormal lysosomes are present leading to defective pigment distribution and abnormal neutrophil functions. The disease is transmitted by autosomal recessive inheritance and a similar disorder occurs in the beige mouse, the Aleutian mink, and albino Hereford cattle.",
    "arabic_definition": "متلازمة شدياق-هيغاشي(بالإسبانية Síndrome de Chédiak-Higashi) هو مرض جيني لتغير الجينات البدنية المتنحية التي تؤثر على أنظمة عديدة بالجسم، ويحدث هذا المرض بسبب تغير طفري في جين منظم حركة الليزوزومية، ويظهر هذا المرض في الإنسان، والحوت القاتل، وحيوان ببر، وقط فارسي، والأبقار. (Chediak-Higashi Syndrome)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002609.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leber-congenital-amaurosis",
    "term_en": "Leber Congenital Amaurosis",
    "term_ar": "كمنة ليبر الخلقية",
    "synonyms": [
      "Amauroses, Leber Congenital",
      "Congenital Amauroses, Leber",
      "Congenital Amaurosis, Leber",
      "Leber Congenital Amauroses",
      "Amaurosis, Leber Congenital",
      "Congenital Retinal Blindness",
      "Blindness, Congenital Retinal",
      "Blindnesses, Congenital Retinal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare degenerative inherited eye disease that appears at birth or in the first few months of life that results in a loss of vision. Not to be confused with LEBER HEREDITARY OPTIC NEUROPATHY, the disease is thought to be caused by abnormal development of PHOTORECEPTOR CELLS in the RETINA, or by the extremely premature degeneration of retinal cells.",
    "arabic_definition": "كُمْنة لِيبَر الخِلْقيَّة أو عمى ليبر الخلقي (اختصارًا LCA) هو مرض وراثي نادر يظهر عند الولادة أو في الأشهر القليلة الأولى من الحياة. يصيب عمى ليبر طفل واحد من كل 40000 طفل. (Leber Congenital Amaurosis)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057130.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "iridocorneal-endothelial-syndrome",
    "term_en": "Iridocorneal Endothelial Syndrome",
    "term_ar": "متلازمة غشاء القزحية",
    "synonyms": [
      "Endothelial Syndrome, Iridocorneal",
      "Iridocorneal Endothelial Syndromes",
      "ICE Syndrome",
      "Chandler Syndrome",
      "Chandler's Syndrome",
      "Chandlers Syndrome",
      "Iris Atrophy with Corneal Edema and Glaucoma"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A grouping of three closely linked conditions: iris nevus (or Cogan-Reese) syndrome, Chandler Syndrome, and essential (progressive) iris atrophy. The most common features of this syndrome are the movement of endothelial cells off the cornea onto the iris leading to corneal swelling, distortion of the iris, and variable degrees of distortion of the pupil. The abnormal cell movement plugs fluid outflow channels of the eye causing GLAUCOMA.",
    "arabic_definition": "تعد متلازمة غشاء القزحية المعروفة اختصار بـ (ICE) سلسلة من الأمراض المصنفة وفقا لمعدل التشوهات في بطانة وخواص القرنية، مسببة حدوث مياه زرقاء أو تشوه القزحية. غالبا ما تكون الإصابة بـ متلازمة غشاء القزحية أحادية الجانب، وغير ناتجة عن الوراثة، كما تحدث على الأغلب للسيدات صاحبات العمر المتوسط. (Iridocorneal Endothelial Syndrome)",
    "specialty": "Ophthalmology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057129.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mutagenesis",
    "term_en": "Mutagenesis",
    "term_ar": "تطفير جيني",
    "synonyms": [
      "Mutageneses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Process of generating a genetic MUTATION. It may occur spontaneously or be induced by MUTAGENS.",
    "arabic_definition": "تطفير جيني (الإنجليزية: Mutagenesis) هو العملية التي تتغير فيها المعلومات الجينية للكائن الحي مؤديةً إلى حدوث طفرة. يمكن أن يحدث التطفير بشكل تلقائي في الطبيعة، أو نتيجة التعرض إلى المُطفِّرات.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016296.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "quasispecies",
    "term_en": "Quasispecies",
    "term_ar": "نموذج أشباه الأنواع",
    "synonyms": [
      "Quasi-Species",
      "Viral Quasispecies",
      "Quasispecies, Viral",
      "Viral Quasi-Species",
      "Quasi-Species, Viral",
      "Quasispecies model"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Variations among a population of a given species due to errors in replication of the genome that result in a distribution of non-identical members.",
    "arabic_definition": "يمثل نموذج أشباه الأنواع وصفًا لعملية التطور الدارويني لدى بعض الكائنات ذاتية الاستنساخ ضمن إطار الكيمياء الفيزيائية. شبه النوع هو مجموعة كبيرة أو (سحابة) من الأنماط الجينية المتعلقة به والتي توجد في بيئة ذات معدل عال من الطفرات (كحالة ثابتة )، حيث من المتوقع أن يحتوي جزء كبير من النسل على طفرة واحدة أو أكثر ذات صلة بالأهل. (Quasispecies)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000074704.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "inbreeding",
    "term_en": "Inbreeding",
    "term_ar": "توالد داخلي",
    "synonyms": [
      "Backcrossing",
      "Backcrossings",
      "Half-Sib Mating",
      "Half-Sib Matings",
      "Mating, Half-Sib",
      "Matings, Half-Sib",
      "Sib Mating",
      "Mating, Sib"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The mating of plants or non-human animals which are closely related genetically.",
    "arabic_definition": "التوالد الداخليّ في علم الوراثة هو توالد حيوانين أبوين متشابهين ومُرتبطين وراثياً، كأخ وأخت، أو ابن وأم، أو غير ذلك. بما أن جميع الحيوانات ذات الدماء الصافية يرجع أصلها إلى عدد ضئيل ومحدود من الأسلاف (أي أن صفاتها يَجب أن تكون متشابهة بالنتيجة)، فتوالد جميع الحيوانات خالصة النسل هو بالنتيجة توالد داخليّ، وذلك مع أن هذا المُصطلح لا يُستخدم عموماً إلا للإشارة إلى التوالد الذي يَحدث ضمن نطاق ضئيل من الأفراد المُنحدرين من سلف واحد قريب. (Inbreeding)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007178.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polyploidy",
    "term_en": "Polyploidy",
    "term_ar": "تعدد الصيغ الصبغية",
    "synonyms": [
      "Polyploidies",
      "Polyploid",
      "Polyploids",
      "Polyploid Cell",
      "Cell, Polyploid",
      "Cells, Polyploid",
      "Polyploid Cells"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The chromosomal constitution of a cell containing multiples of the normal number of CHROMOSOMES; includes triploidy (symbol: 3N), tetraploidy (symbol: 4N), etc.",
    "arabic_definition": "تعدد الصيغ الصبغية (الإنجليزية: polyploidy) هي حالة تتميز باحتواء خلية الكائن الحي على أكثر من مجموعتين (متماثلتين) من الصبغيات. تعد غالبية الأنواع التي تمتلك نوى (حقيقيات النوى) ثنائية الصيغة الصبغية، أي أنها تحوي مجموعتين من الصبغيات، تُورث كل مجموعة من أحد الأبوين.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011123.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chimerism",
    "term_en": "Chimerism",
    "term_ar": "خيمر",
    "synonyms": [
      "Microchimerism",
      "Chimera (genetics)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The occurrence in an individual of two or more cell populations of different chromosomal constitutions, derived from different individuals. This contrasts with MOSAICISM in which the different cell populations are derived from a single individual.",
    "arabic_definition": "الخيمر (اللاتينية: Chimera) حيوان يمتلك تجمعين أو أكثر من الخلايا المتميزة جينيا التي نشأت في لاقحات (زايجوت) مختلفة مرتبطة بالتكاثر الجنسي؛ في حال بروز الخلايا المختلفة من نفس اللاقحة فإنها تدعى بالتزيق. تتشكل الخيمرات من أربع خلايا أبوية ( بيضتين مخصبتين أو أجنة مبكرة تلتحم وتتحد معا). (Chimerism)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D046528.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "penetrance",
    "term_en": "Penetrance",
    "term_ar": "نفوذية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The percent frequency with which a dominant or homozygous recessive gene or gene combination manifests itself in the phenotype of the carriers. (From Glossary of Genetics, 5th ed)",
    "arabic_definition": "النفوذية أو قد يسمى الانتفاذ (الإنجليزية: penetrance) في علم الوراثة؛ هي قدرة الجِين النسبية على إحداث تأثير خاص في الكائن الحيّ الذي يشكل هو جزءا منه.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019683.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gene-pool",
    "term_en": "Gene Pool",
    "term_ar": "تجميعة الجينات",
    "synonyms": [
      "Gene Pools",
      "Pool, Gene",
      "Pools, Gene"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The total genetic information possessed by the reproductive members of a POPULATION of sexually reproducing organisms.",
    "arabic_definition": "تجميعة الجينات (الإنجليزية: Gene pool) هي العدد الإجماليّ للأليلات التي يَتشاركها عدد من الجمهرة الذين يَنتمون إلى أحد الأنواع. ويُمكن أن تشير تجميعة الجينات إلى جين بعينه مثل جين لون الشعر، أو إلى خصائص نوع بأكمله.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005788.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudogenes",
    "term_en": "Pseudogenes",
    "term_ar": "جين كاذب",
    "synonyms": [
      "Pseudogene",
      "beta-Tubulin Pseudogene",
      "beta-Tubulin Pseudogenes",
      "Pseudogene, beta-Tubulin",
      "Pseudogenes, beta-Tubulin",
      "Genes, Processed",
      "Gene, Processed",
      "Processed Gene"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Genes bearing close resemblance to known genes at different loci, but rendered non-functional by additions or deletions in structure that prevent normal transcription or translation. When lacking introns and containing a poly-A segment near the downstream end (as a result of reverse copying from processed nuclear RNA into double-stranded DNA), they are called processed genes.",
    "arabic_definition": "المورثات الكاذبة أو الجينات الكاذبة (الإنجليزية: Pseudogenes) هي أجزاء عديمة الوظيفة في المادة الوراثية تشبه المورثات فقدت قدرتها على الترميز للبروتين أو لم يعد يعبَّر عنها في الخلية. بالرغم من أن بعض المورثات الكاذبة تفتقر إلى الإنترونات أو المحفزات (وهذه المورثات الكاذبة تُنسخ من الرنا المراسل وتدمج في الصبغي وتسمى مورثات كاذبة معالَجة)، إلا أن أغلبها لها خصائص شبيهة بالمورثات (كالمحفزات، وجزر CpG، ومواقع التضفير)، ولكنها تظل تعتبر عديمة الوظيفة بسبب عجزها عن الترميز للبروتين والذي ينتج عن عدة معيقات وراثية (مثل رامزات الإيقاف المبتسرة، أو الإزاحة الترجمية، أو انعدام النسخ) أو عن عدم قدرتها لترميز الرنا (كما في المورثات الكاذبة في الرنا الريبوسومي).",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011544.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aneuploidy",
    "term_en": "Aneuploidy",
    "term_ar": "اختلال الصيغة الصبغية",
    "synonyms": [
      "Aneuploidies",
      "Aneuploid",
      "Aneuploids",
      "Aneuploid Cell",
      "Aneuploid Cells",
      "Cell, Aneuploid",
      "Cells, Aneuploid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The chromosomal constitution of cells which deviate from the normal by the addition or subtraction of CHROMOSOMES, chromosome pairs, or chromosome fragments. In a normally diploid cell (DIPLOIDY) the loss of a chromosome pair is termed nullisomy (symbol: 2N-2), the loss of a single chromosome is MONOSOMY (symbol: 2N-1), the addition of a chromosome pair is tetrasomy (symbol: 2N+2), the addition of a single chromosome is TRISOMY (symbol: 2N+1).",
    "arabic_definition": "اخْتِلالُ الصِّيغَةِ الصِّبْغِيَّة أو اللاتضاعف أو إختلال الصيغة الكروموسومية أو شذوذ الصبغة (الإنجليزية: Aneuploidy) الحالة التي فيها يكون عدد الصبغيات غير طبيعي نسبة إلى زيادة أو نقصان في عدد الصبغيات، وبكلمات أخرى هي الحالة التي تخص الصبغيات عندما يكون عددها ليس من مضاعفات عدد صبغيات خلايا الأمشاج. خلايا الجسم الاعتيادية لها 2س من الصبغيات، بينما خلايا الامشاج لها س من الكروكوسومات.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000782.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "self-fertilization",
    "term_en": "Self-Fertilization",
    "term_ar": "تأبير ذاتي",
    "synonyms": [
      "Self-Fertilizations",
      "Self-pollination"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The fusion of a male gamete with a female gamete from the same individual animal or plant.",
    "arabic_definition": "التأبير الذاتي أو التلقيح الذاتي هو أحد أنواع التلقيح الذي ينتقل فيه الطلع من السداة على السِمة في زهرة واحدة، أو من زهرة إلى أخرى في نفس النبتة. ويحدث التلقيح الذاتي في النبات الذي تحوي زهرته سداة ومدقة في نفس الوقت، ولا يحتاج إلى ملقح خارجي. (Self-Fertilization)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D057945.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "consanguinity",
    "term_en": "Consanguinity",
    "term_ar": "قرابة العصب",
    "synonyms": [
      "Consanguinities",
      "Consanguinous Mating",
      "Consanguinous Matings",
      "Mating, Consanguinous",
      "Matings, Consanguinous",
      "Inbreeding, Human",
      "Human Inbreeding",
      "Human Inbreedings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The magnitude of INBREEDING in humans.",
    "arabic_definition": "قرابة العصب (الإنجليزية: Consanguinity) أو«قرابة الدم»، والمصطلح الإنجليزي مشتق من المصطلح اللاتيني (اللاتينية: consanguinitas) الذي يعني زواج الأقارب. قرابة العصب تُشير إلى الصفات المميزة لشخص ينتمي لنفس القرابة.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003241.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "telophase",
    "term_en": "Telophase",
    "term_ar": "طور نهائي",
    "synonyms": [
      "Telophases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The final phase of cell nucleus division following ANAPHASE, in which two daughter nuclei are formed, the CYTOPLASM completes division, and the CHROMOSOMES lose their distinctness and are transformed into CHROMATIN threads.",
    "arabic_definition": "الطور النهائي أو الطور الانتهائي (الإنجليزية: telophase) يعتبر الطور النهائي آخر مرحلة في كلٍ من الانقسام المتساوي والانقسام المنصف في حقيقيات النوى. يبدأ الطور النهائي فوراً بعدما يتم فصل، ومن ثم سحب كل زوج من الكروموسومات المتضاعفة إلى قطبي النواة.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013692.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "riboswitch",
    "term_en": "Riboswitch",
    "term_ar": "ريبوسويتش",
    "synonyms": [
      "Riboswitches",
      "Ribosensors",
      "Ribosensor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Part of a MESSENGER RNA molecule that undergoes a conformation change upon binding a specific metabolite or other small molecule thereby regulating the messenger RNA's transcription, post-transcriptional processing, transport, translation, or stability in response to varying levels of the metabolite or other small molecule.",
    "arabic_definition": "الريبوسويتش (الإنجليزية: Riboswitch) هو عنصر (تسلسل) من عناصر المنطقة 5' غير المترجمة في بعض جزيئات الرنا الرسول والذي يرتبط بجزيئات صغيرة ويعمل على تنظيم ترجمة البروتينات المشفرة بها. يتكون الريبوسويتش عادة من نطاقين: الأبتمر ومنصة التعبير، وظيفة الأبتمر هي التعرف على والارتباط بالجزيئات الصغيرة وعادة ما تكون مستقلبات التفاعل الذي يحفزه البروتين المشفر بواسطة ذلك الرنا الرسول، ارتباط الأمبتر يسبب تغييرا في بنية منصة التعبير التي تتخذ بنية ثانوية وتتآثر مع بروتينات الترجمة وتعمل على تنظيم التعبير عن ذلك الجين بتثبيط أو تنشيط عمل تلك البروتينات.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D058928.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tata-box",
    "term_en": "TATA Box",
    "term_ar": "صندوق TATA",
    "synonyms": [
      "Box, TATA",
      "Hogness Box",
      "Box, Hogness"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A conserved A-T rich sequence which is contained in promoters for RNA polymerase II. The segment is seven base pairs long and the nucleotides most commonly found are TATAAAA.",
    "arabic_definition": "صندوق TATA أو صندوق غولدبرغ-هوغنيس (الإنجليزية: TATA box) هو تسلسل دنا يتواجد في منطقة المحفز لدى العتائق وحقيقيات النوى، صيغته 5'-TATAWAW-3' حيث W إما نوكليوتيدة T أو A، ويقع على بعد حوالي 25-35 نوكليوتيدة من موقع بداية النسخ مثيل صندوق تاتا لدى بدائيات النوى يسمى صندوق بربنو ويحتوي على تسلسلات متوافقة أقصر. يعتبر صندوق تاتا تسلسل دنا غير مشفر (ويعرف كذلك بـ: عنصر تنظيمي-مقرون).",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016385.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "haplotypes",
    "term_en": "Haplotypes",
    "term_ar": "نمط فرداني",
    "synonyms": [
      "Haplotype"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The genetic constitution of individuals with respect to one member of a pair of allelic genes, or sets of genes that are closely linked and tend to be inherited together such as those of the MAJOR HISTOCOMPATIBILITY COMPLEX.",
    "arabic_definition": "النمط الفرداني (الإنجليزية: Haplotype) في علم الوراثة هو توليفة من الألائل (أشكال بديلة من الجين) لمجموعة من الجينات المرتبطة التي تحتل مواقع متجاورة على الصبغي، والتي عادة ما يتم توريثها سوياً كوحدة واحدة. النمط الفرداني قد يكون موضعًا صبغويًا واحدًا، عدة مواضع صبغوية، أو الصبغي بأكمله. (Haplotypes)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006239.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retroelements",
    "term_en": "Retroelements",
    "term_ar": "ينقول راجع",
    "synonyms": [
      "Retroelement",
      "MDG1 Retrotransposons",
      "MDG1 Retrotransposon",
      "Retrotransposon, MDG1",
      "Retrotransposons, MDG1",
      "Ty1 Transposon",
      "Transposons, Ty1",
      "Transposon, Ty1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Elements that are transcribed into RNA, reverse-transcribed into DNA and then inserted into a new site in the genome. Long terminal repeats (LTRs) similar to those from retroviruses are contained in retrotransposons and retrovirus-like elements. Retroposons, such as LONG INTERSPERSED NUCLEOTIDE ELEMENTS and SHORT INTERSPERSED NUCLEOTIDE ELEMENTS do not contain LTRs.",
    "arabic_definition": "الينقولات الراجعة (وتسمى كذلك ينقولات عبر وسائط رنا) (الإنجليزية: Retrotransposon) هي عناصر وراثية قادرة على إدراج نفسها في الجينوم وهي مكونات شائعة للدنا لدى العديد من الكائنات حقيقيات النوى. تستخدم تسلسلات الدنا هذه آلية «نسخ ولصق» يتم خلالها ترجمتها أولا إلى جزيئات رنا، ثم تحويلها إلى تسلسل دنا مماثل باستخدام النسخ العكسي وبعدها يتم إدراج هذه التسلسلات في الجينوم في مواقع محددة. (Retroelements)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018626.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transfection",
    "term_en": "Transfection",
    "term_ar": "تعداء",
    "synonyms": [
      "Transfections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The uptake of naked or purified DNA by CELLS, usually meaning the process as it occurs in eukaryotic cells. It is analogous to bacterial transformation (TRANSFORMATION, BACTERIAL) and both are routinely employed in GENE TRANSFER TECHNIQUES.",
    "arabic_definition": "تعداء أو نقل العدوى صناعياً (الإنجليزية: Transfection) ويقصد بها عملية ادخال مواد أجنبية (دنا أو رنا أو بروتينات) للخلية عن طريق إحداث ثغرات في الغشاء البلازمي للخلية.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014162.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transcriptome",
    "term_en": "Transcriptome",
    "term_ar": "ترنسكربيتوم",
    "synonyms": [
      "Transcriptomes",
      "Gene Expression Profiles",
      "Expression Profile, Gene",
      "Expression Profiles, Gene",
      "Gene Expression Profile",
      "Profile, Gene Expression",
      "Profiles, Gene Expression",
      "Gene Expression Signatures"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The pattern of GENE EXPRESSION at the level of genetic transcription in a specific organism or under specific circumstances in specific cells.",
    "arabic_definition": "الترنسكريبتوم أو النسخوم أو مكنون النسخ (بالإنجليزية: Transcriptome) هي مجموعة كل جزيئات الرنا (RNA) التي تتضمن الرنا المرسال والرنا الريبوسومي والرنا الناقل وغيرها من أنواع الرنا غير المشفر التي يتم إنتاجها في خلية واحدة أو تجمع من الخلايا، تنتج جزيئات الرنا تلك من الدنا (DNA) . يمكن إطلاق هذا المصطلح على مجموعة النواسخ الكاملة في كائن ما أو على مجموعة فرعية محددة من النواسخ التي توجد في نوع خلوي معين.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D059467.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "s-phase",
    "term_en": "S Phase",
    "term_ar": "طور التركيب",
    "synonyms": [
      "Phase, S",
      "Phases, S",
      "S Phases",
      "S Period",
      "Period, S",
      "Periods, S",
      "S Periods"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Phase of the CELL CYCLE following G1 and preceding G2 when the entire DNA content of the nucleus is replicated. It is achieved by bidirectional replication at multiple sites along each chromosome.",
    "arabic_definition": "طور التركيب أو S phase هو فترة في الطور البيني للخلية تلي طور النمو الأول وتسبق طور النمو الثاني يتم فيها تضاعف الحمض النووي DNA تمهيداً للانقسام غير المباشر أثناء دورة انقسام الخلية. يتكون كل كروموسوم بعد نهاية هذا الطور من كروماتيدين، ينفصلان عن بعضهما أثناء الانقسام غير المباشر مكونين كروموسومين مستقلين.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016196.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "metagenome",
    "term_en": "Metagenome",
    "term_ar": "الميتاجينومية",
    "synonyms": [
      "Metagenomes",
      "Metagenomics"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A collective genome representative of the many organisms, primarily microorganisms, existing in a community.",
    "arabic_definition": "هي دراسة المادة الوراثية المستخرجة مباشرة من العينات البيئية. يمكن الإشارة إلى المجال الواسع أيضًا باسم الجينوم البيئي أو الجينوميات المجتمعية. (Metagenome)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D054892.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epigenome",
    "term_en": "Epigenome",
    "term_ar": "ما فوق الجينوم",
    "synonyms": [
      "Epigenomes",
      "Methylome",
      "Methylomes",
      "DNA Methylome",
      "DNA Methylomes",
      "Methylome, DNA",
      "Methylomes, DNA"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A network of chemical compounds surrounding DNA that modify the genome without altering the DNA sequences and have a role in determining which genes are active in a cell.",
    "arabic_definition": "يُشير مصطلح \"ما فوق الجينوم\"(بالإنجليزية: Epigenome) إلى سجل التغيرات الكيميائية الفوق جينية في الحمض النووي وبروتينات الهيستون لكائن حي؛ يمكن أن تنتقل هذه التغييرات إلى نسل الكائن الحي عبر الوراثة الفوق جينية العابرة للأجيال. يمكن أن تؤدي التغييرات في ما فوق الجينوم إلى تغييرات في بنية الكروماتين وتغييرات في وظيفة الجينوم، ولكن من غير تغيير تسلسل الحمض النووي على الإطلاق.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000081122.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prometaphase",
    "term_en": "Prometaphase",
    "term_ar": "طليعة الطور التالي",
    "synonyms": [
      "Prometaphases",
      "Pro-Metaphase",
      "Pro-Metaphases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The phase of cell nucleus division following PROPHASE, when the breakdown of the NUCLEAR ENVELOPE occurs and the MITOTIC SPINDLE APPARATUS enters the nuclear region and attaches to the KINETOCHORES.",
    "arabic_definition": "طليعة الطور التالي أو طليعة الطور الاستوائي أو طليعة الطور الوسيط (الإنجليزية: prometaphase) هي المرحلة الثانية في الإنقسام المتساوي التي تلي الطور التمهيدي وتسبق الطور الإستوائي في الخلايا الجسدية الحقيقية النواة. يمكن اعتبار هذه المرحلة على أنها نهاية الطور التمهيدي أو بداية الطور الإستوائي.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D049468.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transgenes",
    "term_en": "Transgenes",
    "term_ar": "جين متحور",
    "synonyms": [
      "Transgene",
      "Recombinant Transgenes",
      "Recombinant Transgene",
      "Transgene, Recombinant",
      "Transgenes, Recombinant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Genes that are introduced into an organism using GENE TRANSFER TECHNIQUES.",
    "arabic_definition": "الجين المتحور أو الجين المحول (بالإنجليزية: Transgene)، هو جين تم نقله بشكل طبيعي، أو من خلال عدد من تقنيات الهندسة الوراثية من كائن حي إلى آخر. إن إدخال الجين المحول لديه القدرة على تغيير النمط الظاهري للكائن الحي. (Transgenes)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D019076.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "isochores",
    "term_en": "Isochores",
    "term_ar": "الجزء المتساوي",
    "synonyms": [
      "Isochore",
      "Isochore (genetics)",
      "الجزء المتساوي (علم الوراثة)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Large regions of the GENOME that contain local similarities in BASE COMPOSITION.",
    "arabic_definition": "في علم الوراثة، يعتبر الجزء المتساوي أو الإيزوكور (isochore) منطقة كبيرة من الحمض النووي الجينومي (أكبر من 300 كيلو قاعدة ) بدرجة عالية من التماثل في محتوى GC ؛ أي ما يعني قواعد الجوانين (G) و السيتوزين (C). لأن توزيع القواعد داخل الجينوم ليس عشوائيًا: فتحتوي مناطق مختلفة من الجينوم على كميات مختلفة من أزواج قواعد GC، لذلك، يتم تصنيف المناطق و تحديدها بالأساس حسب نسبة أزواج قواعد GC التي تحتوي عليها. (Isochores)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D032085.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "homozygote",
    "term_en": "Homozygote",
    "term_ar": "اقترانية زيجوتية",
    "synonyms": [
      "Homozygotes",
      "Zygosity"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An individual in which both alleles at a given locus are identical.",
    "arabic_definition": "الاقترانية الزيجوتية (الإنجليزية: Zygosity) (تُشتق كلمة زيغوت من الكلمة اليونانية «زيغوت» أي المقترن، والتي تعود بدورها إلى «زيغون» أي الاقتران)، وهي الدرجة التي تشترك فيها نسختان من الصبغي أو الجين بنفس التسلسل الجيني. بمعنى آخر، تمثل درجة تشابه الأليلات في الكائن الحي. (Homozygote)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006720.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sex-ratio",
    "term_en": "Sex Ratio",
    "term_ar": "نسبة الجنس",
    "synonyms": [
      "Ratio, Sex",
      "Ratios, Sex",
      "Sex Ratios"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The number of males per 100 females.",
    "arabic_definition": "نسبة الجنس (الإنجليزية: Sex ratio) هي النسبة بين الذكور للإناث في تعداد السكان، اعتبارًا من عام 2014، تقدر نسبة الجنس العالمية عند الولادة بـ 107 ذكر إلى 100 أنثى (1000 ذكر لكل 934 أنثى). توجد الكثير من العوامل التي تتحكم في نسبة الجنس.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012744.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dna-repair",
    "term_en": "DNA Repair",
    "term_ar": "ترميم الدنا",
    "synonyms": [
      "DNA Damage Response"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The removal of DNA LESIONS and/or restoration of intact DNA strands without BASE PAIR MISMATCHES, intrastrand or interstrand crosslinks, or discontinuities in the DNA sugar-phosphate backbones.",
    "arabic_definition": "يسمح ترميم الدنا للخلية بالتعرف على الضرر الذي يصيب جزيئات الدنا المُشكّلة لجينوم الخلية وإصلاحه. في الخلايا البشرية، تسبب العمليات الاستقلابية الطبيعية والعوامل البيئية كالتعرض للإشعاع تأذي الدنا، وتنتج عن ذلك عشرات الآلاف من الآفات الجزيئية في الخلية الواحدة يوميًا. (DNA Repair)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004260.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cell-division",
    "term_en": "Cell Division",
    "term_ar": "انقسام الخلية",
    "synonyms": [
      "Division, Cell",
      "Divisions, Cell",
      "Cell Divisions",
      "M Phase",
      "M Phases",
      "Phase, M",
      "Phases, M",
      "Cell Division Phase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The fission of a CELL. It includes CYTOKINESIS, when the CYTOPLASM of a cell is divided, and CELL NUCLEUS DIVISION.",
    "arabic_definition": "انقسام الخلية أو الانقسام الخلوي هو انقسام الخلية إلى خليتين، ثم الخليتين، إلى أربع وهكذا، وهناك نوعين اثنين من الانقسام الخلوي وهما الانقسام المتساوي (الذي يحدث في الخلايا الجسدية في الكائنات الحية) والانقسام الاختزالي (والذي يحدث في الخلايا التناسلية للكائنات الحية). يؤدي الانقسام الخلوي المتساوي إلى تشكيل خلايا متطابقة وراثيًا مع المحافظة على العدد الإجمالي للصبغيات. (Cell Division)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002455.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xyy-karyotype",
    "term_en": "XYY Karyotype",
    "term_ar": "متلازمة XYY",
    "synonyms": [
      "Karyotypes, XYY",
      "Karyotype, XYY",
      "XYY Karyotypes",
      "XYY syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal genetic constitution in males characterized by an extra Y chromosome.",
    "arabic_definition": "مُتَلازِمَة XYY أو مُتَلازِمَة تعدد الصبغيّ Y اضطراب وراثي سببه اختلال في الصيغة الصبغية لصبغيات الجنس يحدث فيها أن يستقبل الذكر صبغي Y زائدة مسببة النمط النووي 47,XYY.وهذه المتلازمة محصورة في الذكور فقط. (XYY Karyotype)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014997.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "human-genome",
    "term_en": "Human Genome",
    "term_ar": "جينوم بشري",
    "synonyms": [
      "Genomes, Human",
      "Human Genomes",
      "Pangenome, Human",
      "Human Pan-genome",
      "Human Pangenome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The complete genetic complement contained in the DNA of a set of CHROMOSOMES in a HUMAN. The length of the human genome is about 3 billion base pairs.",
    "arabic_definition": "الجينوم البشري أو المجين البشري (الإنجليزية: Human Genome) هو مجموعة كاملة من المعلومات الوراثية للإنسان (Homo sapins) الموجودة في تسلسل الحمض الريبوزي النووي منقوص الأكسجين (الدي أن إيه (DNA)) في 23 زوجاً من الصبغيات في نواة الخلية بالأضافة إلى الحمض النووي داخل الميتوكوندريا. ويشمل الجينوم البشري على الحمض النووي المكود للبروتينات والحمض النووي المهمل غير المكود للبروتينات على حد سواء.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015894.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "genetic-drift",
    "term_en": "Genetic Drift",
    "term_ar": "انحراف وراثي",
    "synonyms": [
      "Drift, Genetic",
      "Evolution, Neutral",
      "Neutral Evolution"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The fluctuation of the ALLELE FREQUENCY from one generation to the next.",
    "arabic_definition": "الانحراف الوراثي، أو الانحراف الأليلي (الإنجليزية: Genetic drift)، هو قوة تطورية تعمل مع الاصطفاء الطبيعي عن طريق تغيير خصائص الأنواع على مر الزمن؛ وهو غالبًا ما يعرف بالتغير العشوائي في تواتر الأشكال المغايرة للجينات (الأليل) الذي يحدث نتيجة لخطأ الاستعيان (الخطأ في تمثيل العينة للكل). إن جزءًا معينًا فقط من مجموع الأليلات الموجودة في الجيل الخاص بالآباء تنتقل إلى جيل الأبناء.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D040961.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "satellite-dna",
    "term_en": "Satellite DNA",
    "term_ar": "ساتل الحمض النووي",
    "synonyms": [
      "DNAs, Satellite",
      "Satellite DNAs",
      "Satellite I DNA",
      "DNA, Satellite I",
      "DNAs, Satellite I",
      "I DNA, Satellite",
      "I DNAs, Satellite",
      "Satellite I DNAs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Highly repetitive DNA sequences found in HETEROCHROMATIN, mainly near centromeres. They are composed of simple sequences (very short) (see MINISATELLITE REPEATS) repeated in tandem many times to form large blocks of sequence. Additionally, following the accumulation of mutations, these blocks of repeats have been repeated in tandem themselves. The degree of repetition is on the order of 1000 to 10 million at each locus. Loci are few, usually one or two per chromosome. They were called satellites since in density gradients, they often sediment as distinct, satellite bands separate from the bulk of genomic DNA owing to a distinct BASE COMPOSITION.",
    "arabic_definition": "يتكون الحمض النووي الساتلي أو '''ساتل الدنا '''من مصفوفات طويلة جدًا من الحمض النووي المتكرر ترادفيا وغير المشفر . ساتل الحمض النووي هو المكون الرئيسي للسينتروميرات الوظيفية، ويشكل المكون الهيكلي الرئيسي للهيتروكروماتين . (Satellite DNA)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004276.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hybrid-vigor",
    "term_en": "Hybrid Vigor",
    "term_ar": "قوة الهجين",
    "synonyms": [
      "Vigor, Hybrid",
      "Heterosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The adaptive superiority of the heterozygous GENOTYPE with respect to one or more characters in comparison with the corresponding HOMOZYGOTE.",
    "arabic_definition": "التغاير أو قوة الهجين أو تحسين التوالد الخارجي أو قوة الخليط هو الوظيفة المحسنة أو المتزايدة لأي خاصية بيولوجية في النسل الهجين. يكون النسل متغايرًا إذا تحسنت خلاياه نتيجةً اختلاط المساهمات الجينية لأبويه. (Hybrid Vigor)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006823.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rna-editing",
    "term_en": "RNA Editing",
    "term_ar": "تحرير الرنا",
    "synonyms": [
      "Editing, RNA",
      "Editings, RNA",
      "RNA Editings",
      "RNA, Messenger, Editing"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A process that changes the nucleotide sequence of mRNA from that of the DNA template encoding it. Some major classes of RNA editing are as follows: 1, the conversion of cytosine to uracil in mRNA; 2, the addition of variable number of guanines at pre-determined sites; and 3, the addition and deletion of uracils, templated by guide-RNAs (RNA, GUIDE, KINETOPLASTIDA).",
    "arabic_definition": "تحرير الرنا أو تعديل الرنا هي عملية جزيئية تحدث بشكل طبيعي داخل الخلايا يتم تعريفها بالمعنى الواسع بأنها التغيير الذي يحدث بعد النسخ لتسلسلات الحمض النووي الريبوزي من خلال غرز أو حذف أو تعديل النيوكليوتيدات ولكن لا يشمل أحداث معالجة الحمض النووي الريبوزي مثل التوصيل (ازالة الانترونات) أو التذييل بعديد الأدينيلات أو تحلل جزيئات الحمض النووي الريبوزي. تمكّن هذه العملية لبعض الخلايا إمكانية إجراء تغييرات منفصلة على تسلسلات نيوكليوتيدات محددة داخل جزيء الحمض النووي الريبوزي بعد أن يتم توليده بواسطة بوليميراز الحمض النووي الريبوزي. (RNA Editing)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017393.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dna-replication",
    "term_en": "DNA Replication",
    "term_ar": "تضاعف الحمض النووي الريبوزي منقوص الأكسجين",
    "synonyms": [
      "DNA Replications",
      "Replication, DNA",
      "Replications, DNA",
      "Autonomous Replication",
      "Replication, Autonomous",
      "Autonomous Replications",
      "Replications, Autonomous"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The process by which a DNA molecule is duplicated.",
    "arabic_definition": "تَرْفِيل الحمض الريبي النووي منقوص الأكسجين أو تضاعف الدي أن إيه أو تنسُّخ الدنا ((الإنجليزية: DNA replication) يعد من أهم العمليات الحيوية الخلوية، فلولا تضاعف الدنا لماتت معظم الخلايا، فهي وسيلة للتطور والتجديد والنمو. تنتهي العملية ببناء جزيئي دنا مطابقان لجزئ الحمض النووي الريبي منقوص الأكسجين الرئيسي، ولهذا السبب يتم تسمية عملية تضاعف الدنا بعملية شبة محافظة.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004261.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "homeobox-genes",
    "term_en": "Homeobox Genes",
    "term_ar": "علبة مثلية",
    "synonyms": [
      "Gene, Homeobox",
      "Homeobox Gene",
      "Genes, Homeo Box",
      "Gene, Homeo Box",
      "Homeo Box Gene",
      "Homeo Box Genes",
      "Genes, Homeotic",
      "Gene, Homeotic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Genes that encode highly conserved TRANSCRIPTION FACTORS that control positional identity of cells (BODY PATTERNING) and MORPHOGENESIS throughout development. Their sequences contain a 180 nucleotide sequence designated the homeobox, so called because mutations of these genes often results in homeotic transformations, in which one body structure replaces another. The proteins encoded by homeobox genes are called HOMEODOMAIN PROTEINS.",
    "arabic_definition": "العلبة المثلية أو صندوق النحت (الإنجليزية: homeobox) هي تسلسل دنا موجود ضمن المورثات يشارك في تنظيم تنامي الحيوانات (التشكل الحيوي)، أيضا الفطريات والنباتات. (Homeobox Genes)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005801.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gene-expression",
    "term_en": "Gene Expression",
    "term_ar": "تعبير جيني",
    "synonyms": [
      "Expression, Gene",
      "Expressions, Gene",
      "Gene Expressions"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The phenotypic manifestation of a gene or genes by the processes of GENETIC TRANSCRIPTION and GENETIC TRANSLATION.",
    "arabic_definition": "التعبير الجيني هو العملية التي يتم من خلالها استخدام المعلومات الجينية لاصطناع منتجات جينية الوظيفية. هذه المنتجات قد تكون بروتينات (يتم صنعها باستخدام المعلومات من الرنا الرسول)، أو قد تكون أحد الأنواع العديدية من الأحماض النووية الريبوزية، مثل الرنا الريبوسومي (rRNA)، الرنا الناقل (tRNA) والرنا النووي الصغير (snRNA). (Gene Expression)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015870.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "founder-effect",
    "term_en": "Founder Effect",
    "term_ar": "تأثير المؤسس",
    "synonyms": [
      "Effect, Founder",
      "Effects, Founder",
      "Founder Effects"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A phenomenon that is observed when a small subgroup of a larger POPULATION establishes itself as a separate and isolated entity. The subgroup's GENE POOL carries only a fraction of the genetic diversity of the parental population resulting in an increased frequency of certain diseases in the subgroup, especially those diseases known to be autosomal recessive.",
    "arabic_definition": "تأثير المؤسس في علم وراثة السكان هو خسارة مزايا وراثية تحدث عندما يَنشأ جيل جديد من السكان من عدد صغير جداً من الأفراد، الذين كانوا في السابق جزءاً من جماعة أكبر (مثلاً، مجموعة قليلة من الحيوانات نجت من حدث انقراض جماعي). كان إرنست ماير هو أول من وضع المفهوم الكامل لهذا المُصطلح في عام 1952، وقد استطاع عمل ذلك باستخدام أعمال نظرية أخرى قام بها علماء مثل سيوال رايت. (Founder Effect)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018703.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "intergenic-dna",
    "term_en": "Intergenic DNA",
    "term_ar": "منطقة بين الجينيات",
    "synonyms": [
      "DNAs, Intergenic",
      "Intergenic DNAs",
      "DNA, Junk",
      "DNAs, Junk",
      "Junk DNAs",
      "Junk DNA",
      "Intergenic Sequence",
      "Intergenic Sequences"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any of the DNA in between gene-coding DNA, including untranslated regions, 5' and 3' flanking regions, INTRONS, non-functional pseudogenes, and non-functional repetitive sequences. This DNA may or may not encode regulatory functions.",
    "arabic_definition": "منطقة بين الجينيات (الإنجليزية: Intergenic region) هي امتداد لتسلسلات من الدنا تقع بين الجينات. المناطق بين الجينية هي جزء من الدنا غير المشفر. (Intergenic DNA)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D021901.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "genomic-imprinting",
    "term_en": "Genomic Imprinting",
    "term_ar": "دمغ المورثات",
    "synonyms": [
      "Imprinting, Genomic",
      "Imprinting, Genetic",
      "Genetic Imprinting",
      "Parental Imprinting",
      "Imprinting, Parental"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The variable phenotypic expression of a GENE depending on whether it is of paternal or maternal origin, which is a function of the DNA METHYLATION pattern. Imprinted regions are observed to be more methylated and less transcriptionally active. (Segen, Dictionary of Modern Medicine, 1992)",
    "arabic_definition": "دمغ المورثات أو التطبع الجيني أو البصمة الجينية (الاسم العلمي: Genomic imprinting) هو ظاهرة جينية تتمثل بالشكل الظاهري الناتج عن الجينات المورثة من الآباء الأصليين. عندما يستنسخ الأليل المورث من الأب، فأن الأليل المورث من الأم فقط يعطي التعبير الظاهري.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D018392.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sexual-selection",
    "term_en": "Sexual Selection",
    "term_ar": "اصطفاء جنسي",
    "synonyms": [
      "Selection, Sexual",
      "Sexual Selections",
      "Intersexual Selection",
      "Intersexual Selections",
      "Selection, Intersexual"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A type of natural selection in which members of one sex choose to mate with members of the other sex that have genetically different components.",
    "arabic_definition": "الاصطفاء الجنسي أو الانتخاب الجنسي هو المصطلح الذي قدمه تشارلز داروين في كتابه أصل الأنواع سنة 1859 وهو عنصر هام من نظريته الاصطفاء الطبيعي. أمثلته على الاصطفاء الجنسي تتضمن ريش الطاووس المزخرف، طيور الجنة، قرون ذكر الأيل، ولبدة الأسد. (Sexual Selection)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000082723.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "uniparental-disomy",
    "term_en": "Uniparental Disomy",
    "term_ar": "تكرار أحادي الأبوين",
    "synonyms": [
      "Disomies, Uniparental",
      "Uniparental Disomies",
      "Disomy, Uniparental",
      "Uniparental Isodisomy",
      "Isodisomies, Uniparental",
      "Uniparental Isodisomies",
      "Uniparental Heterodisomy",
      "Heterodisomies, Uniparental"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The presence in a cell of two paired chromosomes from the same parent, with no chromosome of that pair from the other parent. This chromosome composition stems from non-disjunction (NONDISJUNCTION, GENETIC) events during MEIOSIS. The disomy may be composed of both homologous chromosomes from one parent (heterodisomy) or a duplicate of one chromosome (isodisomy).",
    "arabic_definition": "يحدث التكرار أحادي الأبوين حين يتلقى الشخص نسختين من صبغي، أو جزء من صبغي، من أحد الأبوين دون تلقي نسخة من الأب الآخر. قد ينتج التكرار أحادي الأبوين عن التكرار المتغاير، ويورث فيها زوج من الصبغيات غير المتطابقة من أحد الأبوين فقط (خطأ في مرحلة مبكرة من الانقسام المنصف الأول)، أو عن التكرار المتماثل، ويورث فيها صبغي مفرد متكرر من أحد الأبوين (خطأ في مرحلة متأخرة من الانقسام المنصف الثاني). (Uniparental Disomy)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D024182.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "superhelical-dna",
    "term_en": "Superhelical DNA",
    "term_ar": "لف الدنا الفائق",
    "synonyms": [
      "DNA, Supercoiled",
      "Supercoiled DNA",
      "DNA, Supertwisted",
      "Supertwisted DNA",
      "DNA supercoil"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Circular duplex DNA isolated from viruses, bacteria and mitochondria in supercoiled or supertwisted form. This superhelical DNA is endowed with free energy. During transcription, the magnitude of RNA initiation is proportional to the DNA superhelicity.",
    "arabic_definition": "لدف الدنا الفائق هو عملية لف سلسلتي لولب الدنا المزدوج بشكل يفوق حالتها في وضع الاسترخاء في شكل الدنا ب، حيث إن كان اللف في اتجاه اللولب المزدوج فإن القواعد تصبح متراصة أكثر ويسمى ذلك الالتفاف الفائق الموجب إما إن كان ملفوفا عكس اتجاه اللولب المزدوج فإن القواعد تصبح أقل تراصا ويسمى ذلك بالالتفاف الفائق السالب. اللف الفائق مهم في العديد من الوظائف الحيوية مثل تحزيم الدنا، وبتنظيمه الوصول إلى الشيفرة الجينية؛ يؤثر اللف الفائق على صيانة ووظائف الدنا وكذلك التعبير الجيني، بعض الإنزيمات مثل التوبوإيزوميراز لها القدرة على تغيير طوبولوجيا الدنا لتسهيل عمليات مثل تضاعف الدنا والنسخ. (Superhelical DNA)",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004278.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rna-interference",
    "term_en": "RNA Interference",
    "term_ar": "تدخل الرنا",
    "synonyms": [
      "Interference, RNA",
      "RNAi",
      "Posttranscriptional Gene Silencing",
      "Gene Silencing, Posttranscriptional",
      "Gene Silencings, Posttranscriptional",
      "RNA Silencing",
      "Post-Transcriptional Gene Silencing",
      "Post-Transcriptional Gene Silencings"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A gene silencing phenomenon whereby specific dsRNAs (RNA, DOUBLE-STRANDED) trigger the degradation of homologous mRNA (RNA, MESSENGER). The specific dsRNAs are processed into SMALL INTERFERING RNA (siRNA) which serves as a guide for cleavage of the homologous mRNA in the RNA-INDUCED SILENCING COMPLEX. DNA METHYLATION may also be triggered during this process.",
    "arabic_definition": "تدخل الرنا (الإنجليزية: RNAi) أو تداخل الرنا أو تداخل الحمض النووي الريبي (الإنجليزية: Ribonucleic Acid Interference) اختصارًا: (الإنجليزية: RNA interference (RNAi))؛ هو عملية بيولوجية يتم من خلالها تثبيط التعبير الجيني في جزيئات الرنا، ويحدث عادة بسبب تخريب جزيئات محددة في ناقل الشفرة الوراثية (mRNA) وقد عرفت هذه العملية تاريخياً بأسماء أخرى مثل «المشاركة في الإعاقة» و«سكون جينات مابعد النسخ» و«التهدئة» إلى أن تم فهم هذه العملية بعدما كانت تبدو غير مترابطة، وأصبح جلياً أنها تصف ظاهرة «تداخل الرنا». في عام 2006 تشارك آندرو فاير وكريغ فيلو جائزة نوبل في الفسيولوجيا -علم وظائف الأعضاء- أو الطب عن دراسة نشراها في العام 1998 وقدما فيها بحثاً عن تداخل الرنا في الربداء الرشيقة إحدى الديدان الخيطية.",
    "specialty": "Medical Genetics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D034622.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antidiarrheals",
    "term_en": "Antidiarrheals",
    "term_ar": "مضاد الإسهال",
    "synonyms": [
      "Antidiarrheal",
      "Antidiarrheal Agent",
      "Agent, Antidiarrheal",
      "Antidiarrheal Agents",
      "Agents, Antidiarrheal",
      "Antidiarrheal Drugs",
      "Drugs, Antidiarrheal",
      "Antidiarrheal Drug"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Miscellaneous agents found useful in the symptomatic treatment of diarrhea. They have no effect on the agent(s) that cause diarrhea, but merely alleviate the condition.",
    "arabic_definition": "مضاد الإسهال أو الدواء مضاد الإسهال هو أي دواء يوفر ارتياحا ويفرج من أعراض الإسهال. (Antidiarrheals)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000930.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "refractory-anemia",
    "term_en": "Refractory Anemia",
    "term_ar": "فقر الدم",
    "synonyms": [
      "Anemias, Refractory",
      "Refractory Anemias",
      "Anemia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A severe sometimes chronic anemia, usually macrocytic in type, that does not respond to ordinary antianemic therapy.",
    "arabic_definition": "فقر الدم وأحيانا تسمى الأنيميا هو حالة تتطور عندما تكون هناك كميات أقل من المعتاد من خلايا الدم الحمراء السليمة أو الهيموجلوبين في الدم. عندما يحدث فقر الدم ببطء، غالبا ما تكون الأعراض غامضة وقد تشمل شعور بالتعب، صداع، ضيق تنفس وضعف القدرة على بذل مجهود. (Refractory Anemia)",
    "specialty": "Hematology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000753.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antiemetics",
    "term_en": "Antiemetics",
    "term_ar": "مضاد قيء",
    "synonyms": [
      "Antiemetic Agent",
      "Agent, Antiemetic",
      "Antiemetic",
      "Anti-emetics",
      "Antiemetic Agents",
      "Agents, Antiemetic",
      "Antiemetic Drugs",
      "Drugs, Antiemetic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs used to prevent NAUSEA or VOMITING.",
    "arabic_definition": "مضاد القيء هو الدواء الفعالة ضد التقيؤ والغثيان. عادة ما تستخدم مضادات القيء لعلاج دوار الحركة والآثار الجانبية للمسكنات الأفيونية والتخدير العام والعلاج الكيميائي ضد السرطان. (Antiemetics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000932.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anticoagulants",
    "term_en": "Anticoagulants",
    "term_ar": "مضاد تخثر",
    "synonyms": [
      "Anticoagulant Drug",
      "Drug, Anticoagulant",
      "Anticoagulant Agent",
      "Agent, Anticoagulant",
      "Anticoagulation Agents",
      "Agents, Anticoagulation",
      "Anticoagulant Drugs",
      "Drugs, Anticoagulant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents that prevent BLOOD CLOTTING.",
    "arabic_definition": "مضادات التخثر أو مانع التخثر او مضادات التجلط المعروفة عادة بـ مسيلات الدم او مميعات الدم او مخففات الدم (بالإنجليزية Blood Thinners). هي مواد كيميائية تمنع أو تقلل من حدوث تخثر الدم مطيلة بذلك زمن التخثر. (Anticoagulants)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000925.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anticonvulsants",
    "term_en": "Anticonvulsants",
    "term_ar": "مضاد اختلاج",
    "synonyms": [
      "Anticonvulsant Drug",
      "Drug, Anticonvulsant",
      "Anticonvulsive Agent",
      "Agent, Anticonvulsive",
      "Anticonvulsive Drug",
      "Drug, Anticonvulsive",
      "Anticonvulsant",
      "Anticonvulsant Drugs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs used to prevent SEIZURES or reduce their severity.",
    "arabic_definition": "مضادات الاختلاج أو مضادات الصرع أو مضادات النوبات هو دواء يستعمل لعلاج وخصوصاً للوقاية من نوبات الصرع. تستعمل هذه الادوية لعلاج الأعراض المرضية أحياناً كما يمكن ان تستعمل في علاج امراض أخرى كالقلق والاضطراب ثنائي القطب وأيضاً كمسكّن للألم. (Anticonvulsants)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000927.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anesthetics",
    "term_en": "Anesthetics",
    "term_ar": "مخدر",
    "synonyms": [
      "Anesthetic",
      "Anesthetic Agents",
      "Agents, Anesthetic",
      "Anesthetic Drugs",
      "Drugs, Anesthetic",
      "Anesthetic Effect",
      "Effect, Anesthetic",
      "Anesthetic Effects"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents capable of inducing a total or partial loss of sensation, especially tactile sensation and pain. They may act to induce general ANESTHESIA, in which an unconscious state is achieved, or may act locally to induce numbness or lack of sensation at a targeted site.",
    "arabic_definition": "المخدر أو البِنج عقار يستخدم من أجل الوصول إلى حالة التخدير وهي فقدان غير دائم للوعي. تستخدم هذه العقاقير المخدرة في العمليات الجراحية لتسهيل العمل ولتخفيف ألم المريض. (Anesthetics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000777.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anodontia",
    "term_en": "Anodontia",
    "term_ar": "انعدام الأسنان (اضطراب جيني)",
    "synonyms": [
      "Hypodontia",
      "Tooth Agenesis, Familial",
      "Agenesis, Familial Tooth",
      "Familial Tooth Ageneses",
      "Hypodontia Oligodontia 1",
      "Oligodontia 1, Hypodontia",
      "Tooth Agenesis, Selective, 1",
      "Dental Agenesis, Familial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital absence of the teeth. It may involve all (total anodontia) or only some of the teeth (partial anodontia, hypodontia), or six or more of the teeth (oligodontia) and both the deciduous and the permanent dentition, or only teeth of the permanent dentition.",
    "arabic_definition": "انعدام الأسنان أو عدم الأسنان أو غياب الأسنان الخُلقي أو سقوط الأسنان أو الدَّرَم أو الدَّرَد (الإنجليزية: anodontia) هو اضطراب جيني نادر يتسبّبُ في عيبٍ خلقي على مُستوى الأسنان اللبنيّة. ينقسمُ هذا الاضطراب إلى فرعين؛ ويُعرف الفرع الأول بانعدامٍ أو غيابٍ كامل للأسنان فيما يقتصرُ الفرع الثاني على غياب بعض الأسنان فقط.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000848.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anthelmintics",
    "term_en": "Anthelmintics",
    "term_ar": "طارد الديدان",
    "synonyms": [
      "Anthelmintic",
      "Antihelmintic",
      "Vermifuges",
      "Antihelmintics",
      "Vermifuge"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents that kill parasitic worms. They are used therapeutically in the treatment of HELMINTHIASIS in man and animal.",
    "arabic_definition": "طاردات الديدان أو طاردات الدود هي عبارة عن أدوية تقوم بالتخلص من الدّيدان، أو أيّ كائنات تطفليّة داخل الجسم عن طريق قتلها، دون التسبّب بأيّ ضرر بجسم العائل. يمكن أيضًا تسميتها طاردات الديدان (تلك التي تقوم بإعاقتها) ، أو مبيدات الدّيدان (تلك التي تقوم بقتلها). (Anthelmintics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000871.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cyanobacteria",
    "term_en": "Cyanobacteria",
    "term_ar": "بكتيريا زرقاء",
    "synonyms": [
      "Algae, Blue Green",
      "Blue Green Algae",
      "Cyanophyceae",
      "Bacteria, Blue Green",
      "Blue Green Bacteria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A phylum of oxygenic photosynthetic bacteria comprised of unicellular to multicellular bacteria possessing CHLOROPHYLL a and carrying out oxygenic PHOTOSYNTHESIS. Cyanobacteria are the only known organisms capable of fixing both CARBON DIOXIDE (in the presence of light) and NITROGEN. Cell morphology can include nitrogen-fixing heterocysts and/or resting cells called akinetes. Formerly called blue-green algae, cyanobacteria were traditionally treated as ALGAE.",
    "arabic_definition": "البكتيريا الزرقاء أو الجراثيم الزرقاء أو البكتيريا الخضراء المزرقة أو طحالب خضراء مزرقة هي شعبة من البكتيريا سالبة الغرام القادرة على التمثيل الضوئي، عادة ما تعيش في الماء. نحو ثلثي الأنواع المدروسة قادرة على تثبيت النيتروجين، وهي تشارك بذلك في دورة النيتروجين. (Cyanobacteria)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000458.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alkaptonuria",
    "term_en": "Alkaptonuria",
    "term_ar": "بيلة ألكابتونية",
    "synonyms": [
      "Alcaptonuria",
      "Alcaptonurias",
      "Homogentisic Acid Oxidase Deficiency",
      "Homogentisic Acidura"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An inborn error of amino acid metabolism resulting from a defect in the enzyme HOMOGENTISATE 1,2-DIOXYGENASE, an enzyme involved in the breakdown of PHENYLALANINE and TYROSINE. It is characterized by accumulation of HOMOGENTISIC ACID in the urine, OCHRONOSIS in various tissues, and ARTHRITIS.",
    "arabic_definition": "بِيلَة الكابتونِيَّة أو ألكابتنيوريا هوَ مَرض وراثي خَلقي سببهـ نَقص الإنزيم الضروري لِتحليل الحمضين الإمينيين تيروسين (Tyrosine) و فينيل ألانين (Phenylalanine) مما يؤدي إلى تراكُم حمض أكسيداز هوموجنتيزات(Homogentisate Oxidase) في الدَم والبول. (Alkaptonuria)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000474.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "anaplasmataceae",
    "term_en": "Anaplasmataceae",
    "term_ar": "إيرليخيات",
    "synonyms": [
      "Ehrlichieae",
      "Ehrlichiaceae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bacteria in the order RICKETTSIALES which inhabit RED BLOOD CELLS and other types of cells, causing disease in both animals and humans.",
    "arabic_definition": "الإيرْليخِيَّات (الاسم العلمي: Ehrlichiaceae) أو الإرْليكيَّة هي فصيلةٌ من البكتيريا، تقع ضمن رتبة الريكتسيات. (Anaplasmataceae)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000710.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aminophylline",
    "term_en": "Aminophylline",
    "term_ar": "أمينوفيلين",
    "synonyms": [
      "Theophyllamine",
      "Theophylline Ethylenediamine",
      "Ethylenediamine, Theophylline",
      "Somophyllin",
      "Phyllotemp",
      "Mundiphyllin",
      "Novophyllin",
      "Mundiphyllin Retard"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A drug combination that contains THEOPHYLLINE and ethylenediamine. It is more soluble in water than theophylline but has similar pharmacologic actions. It's most common use is in bronchial asthma, but it has been investigated for several other applications.",
    "arabic_definition": "لأمينوفللين هو موسع للشعب الهوائية وهو مركب من الثيوفيلين الموسع الشعبي مع الإيثيلنديامين في نسبة 1:2. والإيثيلنديامين جيد الذوبان، بينما الأميوفيلين يوجد عادة بصورة جافة. (Aminophylline)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000628.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alphavirus",
    "term_en": "Alphavirus",
    "term_ar": "فيروس ألفا",
    "synonyms": [
      "Alphaviruses",
      "Arboviruses, Group A",
      "Arbovirus, Group A",
      "Group A Arbovirus",
      "Group A Arboviruses",
      "Alpha Virus",
      "Alpha Viruses",
      "Barmah forest virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of TOGAVIRIDAE, also known as Group A arboviruses. They are serologically related to each other and are transmitted by mosquitoes. The type species is the SINDBIS VIRUS.",
    "arabic_definition": "فيروس ألفا (الإنجليزية: Alphavirus) هي مجموعة من الفيروسات تنمتي إلى الفيروسات الطخائية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000524.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "agglutinins",
    "term_en": "Agglutinins",
    "term_ar": "تراص",
    "synonyms": [
      "Agglutinin",
      "Agglutination (biology)"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A substance that makes particles (such as bacteria or cells) stick together to form a clump or a mass.",
    "arabic_definition": "التَّراصّ أو ارتصاص (الإنجليزية: Agglutination) هو تكتل جُسَيمات حاملة لمستضِد بفعل أجسام مضادة نوعية. التراص الدموي، شكل من أشكال التراص، هو الذي أدى إلى اكتشاف فصائل الدم. (Agglutinins)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000373.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "african-horse-sickness",
    "term_en": "African Horse Sickness",
    "term_ar": "مرض الخيول الأفريقي",
    "synonyms": [
      "African Horse Sicknesses",
      "Horse Sickness, African",
      "Horse Sicknesses, African",
      "Sickness, African Horse",
      "Sicknesses, African Horse",
      "Equine Plague",
      "Equine Plagues",
      "Plague, Equine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An insect-borne reovirus infection of horses, mules and donkeys in Africa and the Middle East; characterized by pulmonary edema, cardiac involvement, and edema of the head and neck.",
    "arabic_definition": "داء الخيول الأفريقية (الإنجليزية: African horse sickness) (AHS) هو مرضٌ شديدُ العدوى وقاتلٌ في كثيرٍ من الأحيان، يُسبِّبه فيروسُ مرضِ الخيل الأفريقيّ. يُصيبُ عادةً الخيول والبغال والحمير.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000355.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "alcaligenes",
    "term_en": "Alcaligenes",
    "term_ar": "مقلية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic, motile bacteria that occur in water and soil. Some are common inhabitants of the intestinal tract of vertebrates. These bacteria occasionally cause opportunistic infections in humans.",
    "arabic_definition": "مقلية أو الكاليجنس (الاسم العلمي: Alcaligenes) هي جنس من البكتيريا، سلبية الغرام، تتبع المقليات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000421.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ancylostomiasis",
    "term_en": "Ancylostomiasis",
    "term_ar": "دودة شصية (دودة الانسيلوستوما)",
    "synonyms": [
      "Ancylostomiases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection of humans or animals with hookworms of the genus ANCYLOSTOMA. Characteristics include anemia, dyspepsia, eosinophilia, and abdominal swelling.",
    "arabic_definition": "عدوى الدودة الشصية او الدودة الخطافية (الإنجليزية: Hookworm infection) هي عدوى بنوع من الطفيليات المعوية المعروفة باسم الدودة الشصية. في البداية، قد تحدث الحكة والطفح الجلدي في مكان العدوى. (Ancylostomiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000724.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adrenergic-agonists",
    "term_en": "Adrenergic Agonists",
    "term_ar": "أدرينالي الفعل",
    "synonyms": [
      "Agonists, Adrenergic",
      "Adrenergic Agonist",
      "Agonist, Adrenergic",
      "Adrenomimetics",
      "Adrenergic Receptor Agonists",
      "Agonists, Adrenergic Receptor",
      "Receptor Agonists, Adrenergic",
      "Adrenergic Receptor Agonist"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs that bind to and activate adrenergic receptors.",
    "arabic_definition": "أدريناليُّ الفِعْل (الإنجليزية: adrenergic) يعني يعمل على الأدرينالين (الإيبينيفرين) أو النورأدرينالين (النورإبينفرين)\" (أو على مستقبلاتهما). يُستخدم المصطلح عادةً للإشارة إلى تعزيز تأثيرات الإبينفرين والنورإبينفرين في الجسم أو محاكاتها. (Adrenergic Agonists)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000322.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "amelogenesis-imperfecta",
    "term_en": "Amelogenesis Imperfecta",
    "term_ar": "تخلق الميناء الناقص",
    "synonyms": [
      "Congenital Enamel Hypoplasia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clinically and genetically heterogeneous group of hereditary conditions characterized by malformed DENTAL ENAMEL, usually involving DENTAL ENAMEL HYPOPLASIA and/or TOOTH HYPOMINERALIZATION.",
    "arabic_definition": "خلل النشوء غير التام (AI) (الإنجليزية: Amelogenesis imperfecta) هو اضطراب خلقي يتمثل بتشكيل غير طبيعي نادر للمينا أو طبقة خارجية من تاج الأسنان، لا علاقة له بأي حالات جهازية أو معممة. يتكون المينا في معظمه من معدن، يتم تشكيله وتنظيمه بواسطة البروتينات الموجودة فيه.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000567.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antioxidants",
    "term_en": "Antioxidants",
    "term_ar": "مضاد تأكسد",
    "synonyms": [
      "Anti-Oxidant",
      "Anti-Oxidants",
      "Antioxidant",
      "Antioxidant Effect",
      "Antioxidant Effects",
      "Anti-Oxidant Effect",
      "Anti-Oxidant Effects"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Naturally occurring or synthetic substances that inhibit or retard oxidation reactions. They counteract the damaging effects of oxidation in animal tissues.",
    "arabic_definition": "مُضادُّ التَّأَكْسُد أو مضادات عوامل الأكسدة أو مضادات المؤكسدات هو جزيء قادر على إبطاء أو منع تأكسد الجزيئات الشاردة ( الجدور الحرة) في الجسم الحي، والتأكسد هو تفاعل كيميائي يقوم بتحويل الإلكترونات من مادة معينة إلى عامل مؤكسد والذي قد يتلف بعض الخلايا. فإن مُضادُّات التَّأَكْسُد تنهي هذه السلسلة من التفاعلات بإزالة الوسيط الشارد الأساسي تماماً، ومنع تفاعلات الأكسدة الأخرى من أكسدة أنفسها. (Antioxidants)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000975.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arthrobacter",
    "term_en": "Arthrobacter",
    "term_ar": "فصلاء",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of asporogenous bacteria isolated from soil that displays a distinctive rod-coccus growth cycle.",
    "arabic_definition": "الفَصْلاء أو أرثروباكتر (الاسم العلمي: Arthrobacter) هي جنس بكتيري يُوجد عادةً في التُربة. جميع أنواع هذا الجنس هي عبارة عن بكتيريا إيجابية الغرام هوائية إجبارية ذات شكل عَصوي خلال النمو الأسي، وشكل مُكور خلال مرحلة الثبات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001173.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aphrodisiacs",
    "term_en": "Aphrodisiacs",
    "term_ar": "منشط جنسي طبيعي",
    "synonyms": [
      "Aphrodisiac",
      "Aphrodisiac Effect",
      "Effect, Aphrodisiac",
      "Aphrodisiac Effects",
      "Effects, Aphrodisiac"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Chemical agents or ODORANTS that stimulate sexual desires. (McGraw-Hill Dictionary of Scientific and Technical Terms, 4th ed)",
    "arabic_definition": "مثير الشهوة الجنسية (بالانجليزية Aphrodisiac) تحتوي الفواكه على نسبة كبيرة من الفيتامينات، أهمها وأشهرها: فيتامين A، وفيتامين C، وعنصر البورون القادرة على منح الجسم صحة ونضارةً، وتعتبر أكثر فاكهة أو ثمرة لها مصداقية علمية بتأثيرها على الطاقة هي «التمر» ففي دراسة قام بها الباحث السعودي «الورثان» على مجموعة من زملائه وجد أن التمر يحتوي على أحماض أمينية وسكريات، وفيتامينات، ومعادن متنوعة، وهي جميعًا مواد هامة للحفاظ على التوازن الطبيعي عند الناضجين. ومع أن كل التمور تحوي عنصر «البورون» بشكل كبير، وهو عنصر أكدت الدراسات فاعليته في علاج الكثير من الأمراض، إلا أن عنصر «البورون» يؤثر على الهرمون الذكري والأنثوي معاً، وإن كان تأثيره على هرمون الذكورة أكبر إن تناول التمر يقلل الإصابة بالضعف الجنسي، ويجعل الدافع العاطفي أقوى وخصوصًا تمر الخلاص وأكثر إنتاجه في الأحساء شرق شبه الجزيرة العربية. (Aphrodisiacs)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001046.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antimalarials",
    "term_en": "Antimalarials",
    "term_ar": "مضادات الملاريا",
    "synonyms": [
      "Antimalarial Agent",
      "Agent, Antimalarial",
      "Anti-Malarials",
      "Antimalarial Agents",
      "Agents, Antimalarial",
      "Antimalarial Drugs",
      "Drugs, Antimalarial",
      "Antimalarial Drug"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents used in the treatment of malaria. They are usually classified on the basis of their action against plasmodia at different stages in their life cycle in the human. (From AMA, Drug Evaluations Annual, 1992, p1585)",
    "arabic_definition": "الأدوية المضادة للملاريا أو مضادات الملاريا هي نوع من العوامل الكيميائية المضادة للطفيليات، غالبًا ما تكون مشتقة بشكل طبيعي، والتي يمكن استخدامها لعلاج الملاريا أو الوقاية منها، وفي الحالة الأخيرة، غالبًا ما تستهدف مجموعتين مستهدفتين معرضتين للإصابة، الأطفال الصغار والنساء الحوامل. اعتبارًا من عام 2018، استمرت العلاجات الحديثة، بما في ذلك الملاريا الحادة، في الاعتماد على العلاجات المشتقة تاريخيًا من الكينين والأرتيسونات، وكلاهما من الأدوية الوريدية (القابلة للحقن)، والتوسع من هناك إلى العديد من فئات الأدوية الحديثة المتاحة. (Antimalarials)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000962.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ascariasis",
    "term_en": "Ascariasis",
    "term_ar": "داء الأسكارس",
    "synonyms": [
      "Ascariases",
      "Ascaris Infection",
      "Ascaris Infections",
      "Infection, Ascaris",
      "Infections, Ascaris"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection by nematodes of the genus ASCARIS. Ingestion of infective eggs causes diarrhea and pneumonitis. Its distribution is more prevalent in areas of poor sanitation and where human feces are used for fertilizer.",
    "arabic_definition": "الأَسْكَارِيّة أو دَاءُ الأسْكارِس أو داء الصَفَر هو مرض يصيب الإنسان وينتج عن الديدان الممسودة الطفيلية وهي ما تعرف باسم الصَفَر الخراطيني أو ديدان الأسكارس أو حيات البطن من جنس الصَفَر. ذلك، حيث يرتفع عدد المصابين به وربما يصل إلى ربع سكان العالم، وخاصةً أنه يعد أكثر انتشاراً في المناطق الاستوائية والمناطق التي تعاني من انعدام الاهتمام بالنظافة والصحة العامة. (Ascariasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001196.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "arboviruses",
    "term_en": "Arboviruses",
    "term_ar": "أربوفيروس",
    "synonyms": [
      "Arbovirus",
      "Arthropod-Borne Viruses",
      "Virus, Arthropod-Borne",
      "Viruses, Arthropod-Borne",
      "Arthropod-Borne Virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Arthropod-borne viruses. A non-taxonomic designation for viruses that can replicate in both vertebrate hosts and arthropod vectors. Included are some members of the following families: ARENAVIRIDAE; BUNYAVIRIDAE; REOVIRIDAE; TOGAVIRIDAE; and FLAVIVIRIDAE. (From Dictionary of Microbiology and Molecular Biology, 2nd ed)",
    "arabic_definition": "أربوفيروس أو الفايروسات المنقولة أو فيروسات الأربو (الإنجليزية: Arbovirus) هو مصطلح يعني فيروس منقولة بالمفصليات ويشير إلى مجموعة من الفيروسات التي تنتقل بواسطة نواقل من مفصليات الأرجل. أصل التسمية مشتق من الاسم الإنكليزي (ARthropod-BOrne virus). (Arboviruses)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001103.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antithrombins",
    "term_en": "Antithrombins",
    "term_ar": "مضاد الثرومبين",
    "synonyms": [
      "Direct Thrombin Inhibitor",
      "Inhibitor, Direct Thrombin",
      "Thrombin Inhibitor, Direct",
      "Antithrombin",
      "Direct Antithrombins",
      "Antithrombins, Direct",
      "Direct Thrombin Inhibitors",
      "Thrombin Inhibitors, Direct"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Endogenous factors and drugs that directly inhibit the action of THROMBIN, usually by blocking its enzymatic activity. They are distinguished from INDIRECT THROMBIN INHIBITORS, such as HEPARIN, which act by enhancing the inhibitory effects of antithrombins.",
    "arabic_definition": "مضاد الثرومبين أو مضاد الخثرين أو مضاد التخثر (الإنجليزية: Antithrombin) ويُعرف اختصارًا AT، هو جزيء بروتيني صغير يعمل على تعطيل العديد من إنزيمات نظام التخثر، وهو بروتين سكري يُنتج من الكبد ويتكون من 432 حمض أميني. (Antithrombins)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000991.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antipruritics",
    "term_en": "Antipruritics",
    "term_ar": "مضاد حكة",
    "synonyms": [
      "Antipruritic",
      "Antipruritic Agent",
      "Agent, Antipruritic",
      "Antipruritic Drug",
      "Drug, Antipruritic",
      "Antipruritic Agents",
      "Agents, Antipruritic",
      "Antipruritic Drugs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents, usually topical, that relieve itching (pruritus).",
    "arabic_definition": "الدواء المضاد للحكة (الإنجليزية: Antipruritic أو anti-itch drug) هو الدواء المستخدم لكبح الحكة المتعلقة بلفح الشمس والحساسية والتهاب الجلد والصدفية والحماق والعدوى الفطرية ولسعات البعوض والبراغيث والسوس والتهاب الجلد التماسي والشرى الناتج من نباتات اللبلاب السام (التهاب الجلد التماسي المحدث بال يوروشيول) أو القراص الكبير. (Antipruritics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000982.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "asphyxia-neonatorum",
    "term_en": "Asphyxia Neonatorum",
    "term_ar": "اختناق وليدي",
    "synonyms": [
      "Perinatal asphyxia"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Respiratory failure in the newborn. (Dorland, 27th ed)",
    "arabic_definition": "الاختناق الوليدي الاختناق أثناء الولادة أو الاختناق الوليدي هي حالة طبية ناجمة عن الحرمان من الأوكسجين للطفل الحديث الولادة والذي يحدث لفترة كافية خلال عملية الولادة لالحاق الضرر الجسدي، والذي قد يؤثر على الدماغ. يمكن أن يُحدث نقص الأوكسجين الضرر لمعظم أعضاء الرضيع الحيوية مثل (القلب ،الرئتين، الكبد، الأمعاء والكلى)، ولكن حدوث تلف في الدماغ هو الأكثر إثارة للقلق، وليس من المرجح أن يشفى بسرعة أو أن يشفى كليا. (Asphyxia Neonatorum)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001238.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "antimetabolites",
    "term_en": "Antimetabolites",
    "term_ar": "مضاد المئيضة",
    "synonyms": [
      "Antimetabolite"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs that are chemically similar to naturally occurring metabolites, but differ enough to interfere with normal metabolic pathways. (From AMA Drug Evaluations Annual, 1994, p2033)",
    "arabic_definition": "مضاد المستقلب أو مضاد المئيضة أو مضاد الأيضة أو مانع لناتج الأيض أو مضاد الأيض أو ضد المئيضة أو مضادات الأيض مادة كيميائية تثبط استعمال المستقلب وهو عبارة عن مادة كيميائية أخرى لها دور في عمليات الأيض. تعمل على تثبيط وظيفة الحمض النووي (DNA) أو تصنيع حمض نووي غير طبيعي والذي بدوره يحفز عمليات تؤدي إلى موت الخلايا المبرمجة. (Antimetabolites)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000963.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aspergillosis",
    "term_en": "Aspergillosis",
    "term_ar": "داء الرشاشيات",
    "synonyms": [
      "Aspergilloses",
      "Aspergillus Infection",
      "Aspergillus Infections",
      "Infection, Aspergillus",
      "Infections, Aspergillus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with fungi of the genus ASPERGILLUS.",
    "arabic_definition": "داء الرشاشيات هو الاسم الذي يُطلق على مجموعة متنوعة وواسعة من الأمراض تسببها عدوى فطرية بجنس الرشاشيات. وتصيب الرشاشيات البشر والطيور وحيوانات أخرى. (Aspergillosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001228.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacillus-thuringiensis",
    "term_en": "Bacillus thuringiensis",
    "term_ar": "عصوية تورنجية",
    "synonyms": [
      "Bacilan",
      "Dipel",
      "Thuricide"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria which may be pathogenic for certain insects. It is used for the biological control of the Gypsy moth.",
    "arabic_definition": "العصوية التورنجية أو باسلس ثيرنجينسيس (الاسم العلمي: Bacillus thuringiensis) أو (بالإنجليزية اختصارًا: Bt) هي بكتريا موجبة الغرام، ساكنة للتربة يشيع استخدامها مبيدًا حيويًا للآفات. توجد العصوية التورنجية عادة في أمعاء يرقات العديد من أنواع العث والفراشات، بالإضافة إلى سطوح أوراق الأشجار والبيئات المائية وفضلات الحشرات البيئات الغنية بالحشرات والمطاحن ومخازن الحبوب.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001413.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacteriophages",
    "term_en": "Bacteriophages",
    "term_ar": "عاثية",
    "synonyms": [
      "Bacteriophage",
      "Phages",
      "Phage"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Viruses whose hosts are bacterial cells.",
    "arabic_definition": "العاثيات، ومفردها عاثية أو فيروسات لاقمة للبكتريا أو بكتريوفاج أو ملتهم البكتيريا (الإنجليزية: bacteriophage) هي فيروسات تغزو البكتيريا. العاثيات من أكثر الكائنات الحية شيوعاً على سطح الأرض. (Bacteriophages)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001435.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacterial-infections",
    "term_en": "Bacterial Infections",
    "term_ar": "عدوى",
    "synonyms": [
      "Bacterial Disease",
      "Bacterial Diseases",
      "Bacterial Infection",
      "Infection, Bacterial",
      "Infections, Bacterial",
      "Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections by bacteria, general or unspecified.",
    "arabic_definition": "العدوى أو الخَمَج هي غزو الأنسجة بواسطة العوامل المُمرِضة، وتكاثرها، واستجابة أنسجة المضيف للعامل المُعدي والسموم التي يُنتجها. يُطلق على المرض الناتج عن العدوى اسم المرض المُعدي، كما يُعرف أيضاً بـ المرض الساري أو المرض القابل للانتقال. (Bacterial Infections)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001424.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacillus-cereus",
    "term_en": "Bacillus cereus",
    "term_ar": "عصوية شمعية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of rod-shaped bacteria that is a common soil saprophyte. Its spores are widespread and multiplication has been observed chiefly in foods. Contamination may lead to food poisoning.",
    "arabic_definition": "العصوية الشمعية (اللاتينية: Bacillus cereus) (نقحرة: باسيلس سيريس) هو بكتيريا متوطنة تَعيش في التربة، وهي بكتيريا بكتيريا إيجابية الغرام وهي عصوية الشكل ومُتحَرِكة. هذه سُلالة تُسبب المرض للإنسان والتي تَنتقل إليه عبر الأغذية الملوثة، فترة حضانة ها المَرَضّ من 8-16 ساعة ومدة المرض من 6-24 ساعة والكائن المسؤؤل عن هذا التسمم هو باسيلس سيريس.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001409.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bdellovibrio",
    "term_en": "Bdellovibrio",
    "term_ar": "ضمية مشابهة للعلقة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of bacteria capable of developing within other bacteria.",
    "arabic_definition": "ضمية مشابهة للعلقة أو بديللوفبريو (الاسم العلمي: Bdellovibrio) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة ضميات مشابهة للعلق.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001501.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "babesiosis",
    "term_en": "Babesiosis",
    "term_ar": "داء البابسيات",
    "synonyms": [
      "Babesioses",
      "Babesia Infection",
      "Babesia Infections",
      "Infection, Babesia",
      "Infections, Babesia",
      "Piroplasmosis",
      "Piroplasmoses",
      "Babesiasis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of tick-borne diseases of mammals including ZOONOSES in humans. They are caused by protozoa of the genus BABESIA, which parasitize erythrocytes, producing hemolysis. In the U.S., the organism's natural host is mice and transmission is by the deer tick IXODES SCAPULARIS.",
    "arabic_definition": "البابسيات (الإنجليزية: Babesiosis) هو مرض يشبه الملاريا ينتقل عن طريق القراد وينتقل عن طريق القراد في خلايا الدم الحمراء. ويدعى أيضاً بداء الكمثريات (داء البابسيات) مرض طفيلي شبيه بالملاريا تسببه اواليات البابيسيا (نسبة إلى مكتشفها الروماني فيكتور بابيس)، ويصيب عادة الحيوانات الداجنة خاصة الكلاب.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001404.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "beckwith-wiedemann-syndrome",
    "term_en": "Beckwith-Wiedemann Syndrome",
    "term_ar": "متلازمة بكوث ودمان",
    "synonyms": [
      "Syndrome, Beckwith-Wiedemann",
      "EMG Syndrome",
      "EMG Syndromes",
      "Syndrome, EMG",
      "Exomphalos-Macroglossia-Gigantism Syndrome",
      "Exomphalos-Macroglossia-Gigantism Syndromes",
      "Syndrome, Exomphalos-Macroglossia-Gigantism",
      "Wiedemann-Beckwith Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome of multiple defects characterized primarily by umbilical hernia (HERNIA, UMBILICAL); MACROGLOSSIA; and GIGANTISM; and secondarily by visceromegaly; HYPOGLYCEMIA; and ear abnormalities.",
    "arabic_definition": "متلازمة بكوث ودمان هي مجموعة أعراض تظهر عند الولادة، توجد الجينات المسؤولة عن المرض على الكروموسوم رقم 11. تتميز بوجود تضخم وزيادة في حجم الجسم واللسان والأحشاء الداخلية، مصحوبة بانخفاض مستوى السكر في الدم، وقد قام الدكتورالألماني هانز رودلف ويدمان بنشر بحث عام 1964م عن مجموعة من الحالات تتميز بوجود فتق في السرة مع بروز بعض الأحشاء مصحوبة بكبر حجم اللسان، وقد واطلق على الحالة اسم متلازمة الفتق السرري-ضخامة اللسان-العملقة. (Beckwith-Wiedemann Syndrome)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001506.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacillus-subtilis",
    "term_en": "Bacillus subtilis",
    "term_ar": "عصوية رقيقة",
    "synonyms": [
      "Bacillus subtilis subsp. natto",
      "Bacillus subtilis (natto)",
      "Bacillus subtilis var. natto",
      "Natto Bacteria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive bacteria that is a common soil and water saprophyte.",
    "arabic_definition": "العصوية الرقيقة (اللاتينية: Bacillus subtilis) نوع من بكتريا إيجابية الغرام وموجبة الكتالاز تتواجد في التربة. تتبع للجنس عصوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001412.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bartonella",
    "term_en": "Bartonella",
    "term_ar": "برتونيلة",
    "synonyms": [
      "Rochalimaea"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative bacteria characteristically appearing in chains of several segmenting organisms. It occurs in man and arthropod vectors and is found only in the Andes region of South America. This genus is the etiologic agent of human bartonellosis. The genus Rochalimaea, once considered a separate genus, has recently been combined with the genus Bartonella as a result of high levels of relatedness in 16S rRNA sequence data and DNA hybridization data.",
    "arabic_definition": "البرتونيلة أو بارتونيلا (الاسم العلمي: Bartonella) هي جنس من البكتيريا سلبية الغرام تتبع فصيلة البارتونيلات من رتبة المستجذريات. وهو الجنس الوحيد من فصيلة البارتونيلات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001473.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "azotobacter",
    "term_en": "Azotobacter",
    "term_ar": "آزوتية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic bacteria found in soil and water. Its organisms occur singly, in pairs or irregular clumps, and sometimes in chains of varying lengths.",
    "arabic_definition": "الآزوتية أو أزوتوباكتر (اللاتينية: Azotobacter) جنس من البكتيريا الرمّامية (تعيش في التربة) والتي تستطيع تحويل الآزوت بحالته الغازية إلى شكل ذوّاب يمكن أن تستفيد منه النباتات من خلال عملية تثبيت الآزوت. تنتمي إلى البكتيريا سلبية الغرام وتصنف مع فئة مثبّتات الآزوت حرة المعيشة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001395.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "astringents",
    "term_en": "Astringents",
    "term_ar": "مادة قابضة",
    "synonyms": [
      "Astringent",
      "Astringent Effect",
      "Effect, Astringent",
      "Astringent Effects",
      "Effects, Astringent"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents, usually topical, that cause the contraction of tissues for the control of bleeding or secretions.",
    "arabic_definition": "المادة القابضة (الإنجليزية: Astringent) أو القابض أو العقول هي مركب كيميائي زامة للأنسجة الحية تجعل أنسجة الجسم تنقبض وبذلك يخف الإفراز أو النزف. اثنين من الأمثلة الشائعة هي محلول الكالامين و بندق الساحرة. (Astringents)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001252.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "infectious-bronchitis-virus",
    "term_en": "Infectious bronchitis virus",
    "term_ar": "فيروس كورونا الطيري",
    "synonyms": [
      "bronchitis viruses, Infectious",
      "Infectious bronchitis viruses",
      "Avian Infectious Bronchitis Virus",
      "Infectious Bronchitis Virus, Avian"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of CORONAVIRUS causing infections in chickens and possibly pheasants. Chicks up to four weeks old are the most severely affected.",
    "arabic_definition": "فيروس كورونا الطيري أو فيروس كورونا الطيور أو فيروس الاتهاب الشعبي الممرض للطيور هو نوع ينتمي إلى جنس فيروس كورونا غاما ويصيب الطيور. منذ 2018، صُنِّفت جميع فيروسات غاما التي تصيب الطيور في هذا النوع. (Infectious bronchitis virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001351.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacillaceae",
    "term_en": "Bacillaceae",
    "term_ar": "عصويات (فصيلة)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bacteria which produce endospores. They are mostly saprophytes from soil, but a few are insect or animal parasites or pathogens.",
    "arabic_definition": "العصويات هي عائلة من البكتيريا موجبة غرام عصوية الشكل غير ذاتية التغذية والتي قد تنتج أبواغ داخلية. (Bacillaceae)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001406.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacteroides",
    "term_en": "Bacteroides",
    "term_ar": "عصوانية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, anaerobic, rod-shaped bacteria. Its organisms are normal inhabitants of the oral, respiratory, intestinal, and urogenital cavities of humans, animals, and insects. Some species may be pathogenic.",
    "arabic_definition": "العَصَوَانِيَّةُ أو طور البكتيرويدات (اللاتينية: Bacteroides) هي جنس من البكتيريا سلبية الغرام اللاهوائية الإجبارية، وهي عصوية غير مكونة للأبواغ الداخلية، وقد تكون قابلة للحركة أو غير قابلة للحركة بحسب النوع. من أبرز العصوانيات ذات الأهمية السريرية هي العصوانية الهشة (اللاتينية: Bacteroides fragilis).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001439.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacteroides-fragilis",
    "term_en": "Bacteroides fragilis",
    "term_ar": "عصوانية هشة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gram-negative bacteria occurring in the lower intestinal tracts of man and other animals. It is the most common species of anaerobic bacteria isolated from human soft tissue infections.",
    "arabic_definition": "العصوانية الهشة (الإنجليزية: Bacteroides fragilis) هي بكتيريا لاهوائية إجبارية سلبية الغرام عصوية الشكل، وتُعتبر من الميكروبات البشرية لقولون الإنسان وهي مُتعايشة بشكلٍ عام، ولكنها قد تؤدي إلى حدوث عدوى في حال انتقالها إلى مجرى الدم أو الأنسجة المُحطية نتيجةً لجراحةٍ أو مرضٍ أو صدمة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001441.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacillus-megaterium",
    "term_en": "Bacillus megaterium",
    "term_ar": "عصوية ضارية",
    "synonyms": [
      "Bacillus megatherium",
      "Priestia megaterium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of bacteria whose spores vary from round to elongate. It is a common soil saprophyte.",
    "arabic_definition": "العصوية الضارية هي بكتيريا عصوية الشكل، هوائية، موجبة غرام، مكونة للأبواغ توجد في بيئات متنوعة جدا. (Bacillus megaterium)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001410.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "geobacillus-stearothermophilus",
    "term_en": "Geobacillus stearothermophilus",
    "term_ar": "عصوية دهنية أليفة الحرارة",
    "synonyms": [
      "Bacillus stearothermophilus",
      "Bacillus thermoliquefaciens"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of GRAM-POSITIVE ENDOSPORE-FORMING BACTERIA in the family BACILLACEAE, found in soil, hot springs, Arctic waters, ocean sediments, and spoiled food products.",
    "arabic_definition": "العصوية الدهنية أليفة الحرارة أو باسلس ستيروثرموفيلاس (اللاتينية: Bacillus stearothermophilus أو Geobacillus stearothermophilus) ذات شكل عصوي، بكتيريا إيجابية الغرام وعضو في متينات الجدار.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001411.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacteroidaceae",
    "term_en": "Bacteroidaceae",
    "term_ar": "عصوانيات (فصيلة)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative bacteria found primarily in the intestinal tracts and mucous membranes of warm-blooded animals. Its organisms are sometimes pathogenic.",
    "arabic_definition": "فصيلة العصوانيات (اللاتينية: Bacteroidaceae) هي فصيلة من البكتريا تضم خمس أجناس. أما الجنس Capsularis الذي كان مستخدما حتى عام 1982 كان يضم نوعا واحدا هو B. zoogleoformans لكنه لاحقا ألحق بجنس العصوانية لكونه قريبا من أنواعها.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001438.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bacillus-anthracis",
    "term_en": "Bacillus anthracis",
    "term_ar": "عصوية جمرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of bacteria that causes ANTHRAX in humans and animals.",
    "arabic_definition": "العصوية الجمرية (نقحرة: باسلس انثراسيس) (Bacillus anthracis) هي العامل المسبب للجمرة الخبيثة (مرض شائع يصيب الماشية وأحيانا البشر). وتعد العصوية الجمرية من مسبب المرض الإجباري الوحيد ضمن جنس العصوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001408.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bifidobacterium",
    "term_en": "Bifidobacterium",
    "term_ar": "شقاء (بكتيريا)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rod-shaped, gram-positive, non-acid-fast, non-spore-forming, non-motile bacterium that is a genus of the family Bifidobacteriaceae, order Bifidobacteriales, class ACTINOBACTERIA. It inhabits the intestines and feces of humans as well as the human vagina.",
    "arabic_definition": "الشَّقَّاء (اللاتينية: Bifidobacterium) جنس من البكتيريا موجبة الغرام اللاهوائية يسكن القناة الهضمية كلها، وعُزل عن المهبل والفم (الشَّقَّاء السِّنيَّة) عند الثدييات والبشر. الشقاء أحد الأجناس الرئيسة للبكتيريا التي تشكل مجهاريات الجهاز الهضمي في الثدييات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001644.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bluetongue",
    "term_en": "Bluetongue",
    "term_ar": "مرض اللسان الأزرق",
    "synonyms": [
      "Blue Tongue",
      "Tongue, Blue",
      "Bluetongue disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A reovirus infection, chiefly of sheep, characterized by a swollen blue tongue, catarrhal inflammation of upper respiratory and gastrointestinal tracts, and often by inflammation of sensitive laminae of the feet and coronet.",
    "arabic_definition": "مرض اللسان الأزرق (الإنجليزية: Blue Tongue) هو مرض وبائي يصيب الأغنام والأبقار والمجترات عموما، ويسببه فيروس ينتقل عن طريق الحشرات. من عائلة الفيروسات الجرمية – ومن نوع arbivirus وتنقله بعوضة licoides sppcu. (Bluetongue)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001819.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "blackwater-fever",
    "term_en": "Blackwater Fever",
    "term_ar": "حمى البول الأسود",
    "synonyms": [
      "Blackwater Fevers",
      "Fever, Blackwater",
      "Fevers, Blackwater",
      "Black Water Fever",
      "Black Water Fevers",
      "Fever, Black Water",
      "Fevers, Black Water",
      "Malaria, Hemolytic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A complication of MALARIA, FALCIPARUM characterized by the passage of dark red to black urine.",
    "arabic_definition": "حمى البول الأسود هي حمى تتميز ببول أسود مصحوب بدم. وهي إحدى مضاعفات الملاريا والتي تنفجر فيها خلايا الدم الحمراء ويحصل لها تحلل دموي في مجرى الدم وتطلق الهيموغلوبين إلى الأوعية الدموية وإلى البول بشكل متكرر مما يؤدي إلى فشل كلوي. (Blackwater Fever)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001742.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bloom-syndrome",
    "term_en": "Bloom Syndrome",
    "term_ar": "متلازمة بلوم",
    "synonyms": [
      "Bloom-Torre-Machacek Syndrome",
      "Bloom's Syndrome",
      "Bloom's Syndromes",
      "Congenital Telangiectatic Erythema",
      "Congenital Telangiectatic Erythemas",
      "Erythema, Congenital Telangiectatic",
      "Telangiectatic Erythema, Congenital"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive disorder characterized by telangiectatic ERYTHEMA of the face, photosensitivity, DWARFISM and other abnormalities, and a predisposition toward developing cancer. The Bloom syndrome gene (BLM) encodes a RecQ-like DNA helicase.",
    "arabic_definition": "متلازمة بلوم (الإنجليزية: Bloom syndrome)، هيَّ مرض وراثي نادر سَببه اضطراب شَديد في إِعادة ترتيب الكرموسومات في الشَخص المُتأثر.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001816.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bordetella",
    "term_en": "Bordetella",
    "term_ar": "بورديتيلا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative aerobic bacteria whose cells are minute coccobacilli. It consists of both parasitic and pathogenic species.",
    "arabic_definition": "البوردتلاَّ (بالإنجليزية: Bordetella) هي جنس من العصويات المكورة سالبة الجرام الصغيرة (بحجم 0.2 إلى 0.7 ميكرو ميلليمتر) من شعبة البروتيوبكتيريا. وفصيلة البورديتيلَة باستثناء النوع بي بتري (B. petrii) هي هوائيات مجبرة لها احتياجات تغذوية واستزراعية معقدة، أو أنها صعبة الاستنبات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001884.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "moraxella-catarrhalis",
    "term_en": "Moraxella catarrhalis",
    "term_ar": "موراكسيلة نزلية",
    "synonyms": [
      "Branhamella catarrhalis",
      "Moraxella (Branhamella) catarrhalis",
      "Mikrokkokus catarrhalis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gram-negative aerobic cocci of low virulence that colonize the nasopharynx and occasionally cause MENINGITIS; BACTEREMIA; EMPYEMA; PERICARDITIS; and PNEUMONIA.",
    "arabic_definition": "الموراكسيلة النزلية (الاسم العلمي: Moraxella catarrhalis) هي بكتريا مكورة مزدوجة سلبية الغرام هوائية موجب الأوكسيداز يمكن أن تسبب العدوى للإنسان في جهاز التنفس والأذن الوسطى والعين والجهاز العصبي المركزي والمفصل. كما يمكن أن تسبب العدوى لأنواع أخرى من الرئيسيات مثل قرد المكاك.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001936.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bordetella-pertussis",
    "term_en": "Bordetella pertussis",
    "term_ar": "بورديتيلا شاهوقية",
    "synonyms": [
      "Bacterium tussis-convulsivae",
      "Haemophilus pertussis",
      "Hemophilus pertussis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria that is the causative agent of WHOOPING COUGH. Its cells are minute coccobacilli that are surrounded by a slime sheath.",
    "arabic_definition": "البورديتيلة الشاهوقية (اللاتينية: Bordetella pertussis) أو بوردتلاّ برتوسيس هي بكتيريا سلبية الغرام هوائية عصوية مكورة محفظية من جنس البورديتيلا، وهي إحدى مسببات السعال الديكي. والبورديتيلة الشاهوقية غير متحركة بخلاف البورديتيلة المنتنة للقصبات (اللاتينية: Bordetella bronchiseptica).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001886.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bronchitis",
    "term_en": "Bronchitis",
    "term_ar": "التهاب القصبات",
    "synonyms": [
      "Bronchitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the large airways in the lung including any part of the BRONCHI, from the PRIMARY BRONCHI to the TERTIARY BRONCHI.",
    "arabic_definition": "التهاب القصبات أو التهاب الشعب الهوائية أو التهاب شعبي (الإنجليزية: Bronchitis) هو التهاب الشعب الهوائية في الرئتين. (Bronchitis) عند حدوث التهاب الشعب الهوائية، تنتفخ الشعب الهوائية، تتوذّم (Edematous) وتنتج البلغم.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001991.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "achondroplasia",
    "term_en": "Achondroplasia",
    "term_ar": "لاتصنع الغضروف",
    "synonyms": [
      "Achondroplasias",
      "Achondroplasia, Severe, With Developmental Delay And Acanthosis Nigricans",
      "SADDAN",
      "SADDANs",
      "SADDAN Dysplasia",
      "Dysplasia, SADDAN",
      "Dysplasias, SADDAN",
      "SADDAN Dysplasias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal dominant disorder that is the most frequent form of short-limb dwarfism. Affected individuals exhibit short stature caused by rhizomelic shortening of the limbs, characteristic facies with frontal bossing and mid-face hypoplasia, exaggerated lumbar lordosis, limitation of elbow extension, GENU VARUM, and trident hand. (Online Mendelian Inheritance in Man, http://www.ncbi.nlm.nih.gov/Omim, MIM#100800, April 20, 2001)",
    "arabic_definition": "الودانة أو لاتَصَنُّع العضروف أو الدحدحة أو عجز النمو الغضروفي أو نقص تعظم الكراديس(الإنجليزية: Achondroplasia) هو مرض وراثي للهيكل العظمي، حيث يكون هناك تعظم غضروفي باطني ناتج عن التقزم. وتتحد المشاشات والجدول مبكراً ولا يتم نمو العظام الطويلة، وتثخن العظام الطويلة وتقوى.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000130.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "abetalipoproteinemia",
    "term_en": "Abetalipoproteinemia",
    "term_ar": "فقد البروتين الشحمي بيتا من الدم",
    "synonyms": [
      "Bassen-Kornzweig Syndrome",
      "Microsomal Triglyceride Transfer Protein Deficiency Disease",
      "Bassen-Kornzweig Disease",
      "Microsomal Triglyceride Transfer Protein Deficiency",
      "Betalipoprotein Deficiency Disease",
      "Betalipoprotein Deficiency Diseases",
      "Deficiency Disease, Betalipoprotein",
      "Deficiency Diseases, Betalipoprotein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive disorder of lipid metabolism. It is caused by mutation of the microsomal triglyceride transfer protein that catalyzes the transport of lipids (TRIGLYCERIDES; CHOLESTEROL ESTERS; PHOSPHOLIPIDS) and is required in the secretion of BETA-LIPOPROTEINS (low density lipoproteins or LDL). Features include defective intestinal lipid absorption, very low serum cholesterol level, and near absent LDL.",
    "arabic_definition": "فَقْدُ البْرُوتين الشَّحْمِيِّ بِيتا مِنَ الدَّم (بالإنجليزية: Abetalipoproteinemia)، أو متلازمة باسن-كورنزويغ (بالإنجليزية: Bassen-Kornzweig syndrome)، هو اضطراب نادر مسؤول عنه جين جسدي متنحي يتداخل مع الامتصاص الطبيعي للدهون، والفيتامينات القابلة للذوبان في الدهون من الطعام. وذلك بسبب طفرة في البروتين الناقل للدهون الثلاثية، مما أدى إلى نقص في صميم البروتينات الشحمية بيتا-48 و بيتا-100، التي تستخدم في تصنيع، وتصدير الكيلومكرونات، والبروتين الدهني منخفض الكثافة جدا على التوالي.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000012.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acetobacter",
    "term_en": "Acetobacter",
    "term_ar": "خلالة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria of the family ACETOBACTERACEAE found in FLOWERS and FRUIT. Cells are ellipsoidal to rod-shaped and straight or slightly curved.",
    "arabic_definition": "العصية الخلية أو الخَلاَّلَةُ أو أُمُّ الخَلّ أو أسيتوباكتر (الاسم العلمي: Acetobacter) هي جنس من البكتيريا يتبع الفصيلة الخلالية من رتبة الوردانيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000091.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "adenoviridae",
    "term_en": "Adenoviridae",
    "term_ar": "فيروسات غدانية",
    "synonyms": [
      "Adenoviruses",
      "Adenovirus",
      "Ichtadenovirus",
      "Ichtadenoviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of non-enveloped viruses infecting mammals (MASTADENOVIRUS) and birds (AVIADENOVIRUS) or both (ATADENOVIRUS). Infections may be asymptomatic or result in a variety of diseases.",
    "arabic_definition": "الفيروسات الغدانية أو فيروسات الجهاز التنفسي (اللاتينية: Adenoviridae) متوسطة الحجم (90-100 نانوميتر)، غير مغلفة (عارية) فيروسات متعددة السطوح، تتكون من قفيصة منواة وجينوم دنا ثنائي السلسلة، هناك 53 نمط مصلي يصيب البشر والمسؤولة عن 5 اٍلى 10 % من التهابات الجهاز التنفسي العلوي لدى الأطفال وعدد من الاٍصابات لدى البالغين كذلك. الفيروسات الغدانية تصيب الكثير من الفقاريات ومنها الاٍنسان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000256.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acinetobacter",
    "term_en": "Acinetobacter",
    "term_ar": "مكورة راكدة",
    "synonyms": [
      "Herellea",
      "Mima"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative bacteria of the family MORAXELLACEAE, found in soil and water and of uncertain pathogenicity.",
    "arabic_definition": "المكورة الراكدة أو أساينيتوباكتر (الاسم العلمي: Acinetobacter) هي جنس من البكتيريا يتبع الفصيلة الموراكسيلية من رتبة الزوافات. وهي سلبية الغرام شائعة في التربة والمياه، ويمكن العثور عليها فوق جلد الأفراد الذين يقومون بخدمات الرعاية الصحية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000150.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "actinomyces",
    "term_en": "Actinomyces",
    "term_ar": "شعية فطرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, rod-shaped bacteria whose organisms are nonmotile. Filaments that may be present in certain species are either straight or wavy and may have swollen or clubbed heads.",
    "arabic_definition": "الفطريات الشعاعية أو الفطريات الشُعية أو الحارش أو أكتينومايسيس (الاسم العلمي: Actinomyces) هو جنس من البكتيريا يتبع فصيلة الشعاوية من رتبة الشعيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000190.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "actinomycetales",
    "term_en": "Actinomycetales",
    "term_ar": "شعيات",
    "synonyms": [
      "Corynebacteriaceae",
      "Coryneform Group"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An order of gram-positive, primarily aerobic BACTERIA that tend to form branching filaments.",
    "arabic_definition": "شعيات أو الفطريات المشعة (الاسم العلمي: Actinomycetales) هي رتبة من البكتيريا تتبع طائفة الشعاويات من شعبة البكتيريا شعاوية. تتصف الشعاوات بتنوع عظيم وتشمل العديد من التقسيمات، و كذلك الكثير من المستفردات غير المصنَّفة، ويعود ذلك إلى صعوبة تصنيف بعض الأجناس لأن نمطها الظاهري يتغير بشدة حسب ظروف النمو.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000192.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "actinomycosis",
    "term_en": "Actinomycosis",
    "term_ar": "داء الشعيات",
    "synonyms": [
      "Actinomycoses",
      "Infections, Actinomyces",
      "Actinomyces Infection",
      "Infection, Actinomyces",
      "Actinomyces Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with bacteria of the genus ACTINOMYCES.",
    "arabic_definition": "داء الشعيات أو مرض الحارش أو أمراض الأكتينومايسيتات هو مرض بكتيري معدٍ تسببه أنواع مختلفة من الشعيّة مثل الشعية الإسرائيلية أو الشعية الجرنسيرية. يمكن أيضًا أن يكون بسبب بروبيوني بكتيريوم بروبيونيكوس، ومن المرجح أن تكون عدوى هوائية لاهوائية متعددة المكروبات. (Actinomycosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000196.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acrocephalosyndactylia",
    "term_en": "Acrocephalosyndactylia",
    "term_ar": "تسنم الرأس وارتفاق الأصابع",
    "synonyms": [
      "Acrocephalosyndactylias",
      "Kurczynski Casperson Syndrome",
      "Syndrome, Kurczynski Casperson",
      "Saethre-Chotzen Syndrome",
      "Syndrome, Saethre-Chotzen",
      "Dysostosis Craniofacialis with Hypertelorism",
      "Acrocephalosyndactyly III",
      "Acrocephalosyndactyly IIIs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital craniostenosis with syndactyly.",
    "arabic_definition": "تسنم الرأس وارتفاق الأصابع (الإنجليزية: Acrocephalosyndactylia أو acrocephalosyndactyly) هي حالات تظهر فيها تعظم الدروز الباكر وارتفاق الأصابع.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000168.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "actinomycetaceae",
    "term_en": "Actinomycetaceae",
    "term_ar": "شعاوية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bacteria including numerous parasitic and pathogenic forms.",
    "arabic_definition": "شعاوية (الاسم العلمي: Actinomycetaceae) هي فصيلة من البكتيريا تتبع رتبة الشعيات من طائفة الشعاويات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000191.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acrodermatitis",
    "term_en": "Acrodermatitis",
    "term_ar": "التهاب جلد الأطراف",
    "synonyms": [
      "Acrodermatitides",
      "Gianotti-Crosti Syndrome",
      "Syndrome, Gianotti-Crosti",
      "Acrodermatitis Papulosa Infantum",
      "Acrodermatitis Papulosa Infantums",
      "Acropapulo-Vesicular Syndrome",
      "Acropapulo-Vesicular Syndromes",
      "Syndrome, Acropapulo-Vesicular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation involving the skin of the extremities, especially the hands and feet. Several forms are known, some idiopathic and some hereditary. The infantile form is called Gianotti-Crosti syndrome.",
    "arabic_definition": "التهاب جلد الأطراف (الإنجليزية: Acrodermatitis) مرض جلدي يقتصر انتشاره عادة على أطراف الجسم. وقد يكون الالتهاب ضامراً، حيث يسبب هذا المرض بضمور الجلد، وخاصة في السطوح الامتدادية، مثل الركبة والكوعوالأصابع.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D000169.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-botulinum",
    "term_en": "Clostridium botulinum",
    "term_ar": "مطثية وشيقية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of anaerobic, gram-positive, rod-shaped bacteria in the family Clostridiaceae that produces proteins with characteristic neurotoxicity. It is the etiologic agent of BOTULISM in humans, wild fowl, HORSES; and CATTLE. Seven subtypes (sometimes called antigenic types, or strains) exist, each producing a different botulinum toxin (BOTULINUM TOXINS). The organism and its spores are widely distributed in nature.",
    "arabic_definition": "مطثية وشيقية أو مغزني وشيقي أو كلوستريديوم بوتولينيوم(الاسم العلمي: Clostridium botulinum) هي نوع من البكتيريا يتبع جنس المطثية من الفصيلة المطثاوية. المطثية الوشيقية هي نوع من البكتيريا تنشأ في التربة وهي لاهوائية التنفس وتنتشر في النباتات بسهولة كما تكون أنواع وتتميز بمقاومتها العالية للحرارة وتنمو فقط في ظروف التنفس اللاهوائي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003014.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coccidioidomycosis",
    "term_en": "Coccidioidomycosis",
    "term_ar": "حمى الصحراء",
    "synonyms": [
      "Coccidioidomycoses",
      "Coccidioides Infection",
      "Coccidioides Infections",
      "Infection, Coccidioides",
      "Coccidioidomycosis Infection",
      "Coccidioidomycosis Infections",
      "Infection, Coccidioidomycosis",
      "San Joaquin Valley Fever"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with a fungus of the genus COCCIDIOIDES, endemic to the SOUTHWESTERN UNITED STATES. It is sometimes called valley fever but should not be confused with RIFT VALLEY FEVER. Infection is caused by inhalation of airborne, fungal particles known as arthroconidia, a form of FUNGAL SPORES. A primary form is an acute, benign, self-limited respiratory infection. A secondary form is a virulent, severe, chronic, progressive granulomatous disease with systemic involvement. It can be detected by use of COCCIDIOIDIN.",
    "arabic_definition": "حمى الوادي أو الفطار الكرواني أو داء بوسادا-فيرنيكه (الإنجليزية: Coccidyoumicosis) معروفة كذلك بِحُمَّى الوادي، حُمَّى سان جوكين فالي، حُمَّى وادي كاليفورنيا. وهو مرض فطري غير خطير يشبه الإنفلونزا ونادراً مايكون مميتاً ويعطى مناعة دائمة لمن اصيب به ذات مرة وهو يعرف باسم الفطور الكرواتية أو الكوكسيدية وهو مرض مستوطن في بعض أجزاء أريزونا، كاليفورنيا، نيفادا، نيو مكسيكو، تكساس، يوتاه وشمال غرب المكسيك. (Coccidioidomycosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003047.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cleft-lip",
    "term_en": "Cleft Lip",
    "term_ar": "الشفة المشقوقة والحنك المشقوق",
    "synonyms": [
      "Cleft Lips",
      "Lip, Cleft",
      "Lips, Cleft",
      "Harelip",
      "Harelips",
      "Cleft lip and cleft palate"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital defect in the upper lip where the maxillary prominence fails to merge with the merged medial nasal prominences. It is thought to be caused by faulty migration of the mesoderm in the head region.",
    "arabic_definition": "فلح الشفة والحنك، الشفة المشقوقة أو الحلق المشقوق أو الشفة الأرنبية، والتي يمكن أيضا أن تحدثا معاً كما في الشفة والحلق المشقوقين - يعتبر أحد الأنواع المتعددة للتشوه الخلقي الناجمة عن النمو غير الطبيعي في وجه الطفل أثناء فترة الحمل. والشق هو فتحة أوفجوة نتيجة عدم أكتمال (خلل) في البنية الطبيعية للجسم التي تشكل قبل الولادة. (Cleft Lip)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002971.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium",
    "term_en": "Clostridium",
    "term_ar": "مطثية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of motile or nonmotile gram-positive bacteria of the family Clostridiaceae. Many species have been identified with some being pathogenic. They occur in water, soil, and in the intestinal tract of humans and lower animals.",
    "arabic_definition": "المِطَثِّيَّة أو الكلوستريديوم أو المغزلي أو المجزآت المغزلية (الاسم العلمي: Clostridium) هي جنس من البكتيريا موجبة غرام يتبع فصيلة نظيرات المطثية من رتبة المطثيات. وهي بكتيريا لاهوائية إجبارية قادرة على إنتاج أبواغ داخلية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003013.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chikungunya-virus",
    "term_en": "Chikungunya virus",
    "term_ar": "شيكونغونيا",
    "synonyms": [
      "Chikungunya Fever Virus",
      "Chikungunya"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of ALPHAVIRUS causing an acute dengue-like fever.",
    "arabic_definition": "شيكونجونيا (الإنجليزية: Chikungunya) هو مرض يتسبب به فيروس شيكونغونيا، يتعرض المصاب به عادةً إلى حمى أولية مفاجئة من يومين إلى 7 أيام ويتعرض لآلام تدوم لأسابيع أو شهور وحتى سنوات، ويتعرض لآلام مفصلية، معدل الوفاة بهذا المرض ضئيل فهو يصل من 1 من 1000 إصابة والمسنين هم الأكثر عُرضة للموت بسبب هذا المرض. ينتقل هذا الفيروس عن طريق نوع من البعوض يسمى بالزاعجة Aedes وبعوضة أخرى تسمى الزاعجة المصرية، هذا المرض منتشر حالياً في الولايات المتحدة والمكسيك ودول البحر الكاريبي، أفضل الوسائل لمنع المرض هي عن طريق تجنب عضات البعوض والابتعاد عن الأشخاص المصابين بالمرض، يمكن استخدام الأدوية لتخفيض الأعراض والاستراحة وشرب السوائل هي وسيلة أيضاً للعلاج من المرض. (Chikungunya virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002646.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chlamydia-trachomatis",
    "term_en": "Chlamydia trachomatis",
    "term_ar": "متدثرة تراخومية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Type species of CHLAMYDIA causing a variety of ocular and urogenital diseases.",
    "arabic_definition": "المتدثرة التراخومية أو المتدثرة الحثرية أو كلاميديا تراكوماتيس (الاسم العلمي: Chlamydia trachomatis) والمعروفة باسم الكلاميديا، هي نوع من البكتيريا يتبع جنس المتدثرة من الفصيلة المتدثرية يمكن أن تتكاثر فقط في الخلايا البشرية وتسبب المتدثرة، التي يمكن أن تتجلى بطرق مختلفة، بما في ذلك: التراخوما، والورم الحبيبي الليمفي المنقول جنسيا، والتهاب الإحليل الغضروفي، والتهاب عنق الرحم، والتهاب البوق، ومرض التهاب الحوض. المتدثرة التراخومية هي السبب الأكثر شيوعا للعمى والبكتيريا المنتقلة جنسيا الأكثر شيوعاً.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002692.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-perfringens",
    "term_en": "Clostridium perfringens",
    "term_ar": "مطثية حاطمة",
    "synonyms": [
      "Clostridium welchii"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The most common etiologic agent of GAS GANGRENE. It is differentiable into several distinct types based on the distribution of twelve different toxins.",
    "arabic_definition": "المِطَثِّيَّةُ الحاطِمَة أو مغزلي الغنغرينا أو كلوستريديوم بيرفرنجنز (الاسم العلمي: Clostridium perfringens) هي نوع من من البكتيريا إيجابية الغرام يتبع جنس المطثية من الفصيلة المطثاوية. المطثية الحاطمة تأخذ شكل القضيب وهي لاهوائية مجبرة تشكل أبواغ.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003016.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clubfoot",
    "term_en": "Clubfoot",
    "term_ar": "حنف القدم",
    "synonyms": [
      "Clubfeet, Congenital",
      "Congenital Clubfeet",
      "Talipes Equinovarus",
      "Equinovarus",
      "Congenital Talipes Equinovarus",
      "Talipes Equinovarus, Congenital",
      "Pie Torcido",
      "Pie Torcidos"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A deformed foot in which the foot is plantarflexed, inverted, and adducted.",
    "arabic_definition": "حنف القدم أو اعوجاج القدم أو الحَنَف القَفَدِيّ الفَحَجِيّ الخلقي هي مشكلة خلقية تؤثر على إحدى القدمين أو كلتيهما. تبدو القدم المصابة معوجّة إلى الداخل عند مفصل الكاحل. (Clubfoot)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003025.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clonorchiasis",
    "term_en": "Clonorchiasis",
    "term_ar": "داء متفرعات الخصية",
    "synonyms": [
      "Clonorchiases",
      "Clonorchis Infection",
      "Clonorchis Infections",
      "Infection, Clonorchis",
      "Opisthorchis sinensis Infection",
      "Infection, Opisthorchis sinensis",
      "Opisthorchis sinensis Infections",
      "Clonorchis sinensis Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection of the biliary passages with CLONORCHIS SINENSIS, also called Opisthorchis sinensis. It may lead to inflammation of the biliary tract, proliferation of biliary epithelium, progressive portal fibrosis, and sometimes bile duct carcinoma. Extension to the liver may lead to fatty changes and cirrhosis. (From Dorland, 27th ed)",
    "arabic_definition": "داء متفرعات الخصية (الإنجليزية: Clonorchiasis) هي عدوى تسببها ديدان كبدبة، متفرع الخصية الصيني. داء متفرعات الخصية هي من أكبر العوامل المسببة لسرطانة الأقنية الصفراوية، تنشؤ الجهاز الصفراوي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003003.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coccidiosis",
    "term_en": "Coccidiosis",
    "term_ar": "داء الأكريات",
    "synonyms": [
      "Coccidioses",
      "Besnoitiasis",
      "Besnoitiases",
      "Besnoitiosis",
      "Besnoitioses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Protozoan infection found in animals and man. It is caused by several different genera of COCCIDIA.",
    "arabic_definition": "داء الأكريات هو مرض طفيلي يصيب القناة المعوية للحيوانات وتسببه الأكريات الأوالي. ينتقل المرض من حيوان إلى آخر عن طريق التماس مع البراز المصاب أو ابتلاع الأنسجة المصابة. (Coccidiosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003048.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chlamydophila-psittaci",
    "term_en": "Chlamydophila psittaci",
    "term_ar": "متدثرة ببغائية",
    "synonyms": [
      "Chlamydia psittaci"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of CHLAMYDOPHILA infecting primarily birds. It contains eight known serovars, some of which infect more than one type of host, including humans.",
    "arabic_definition": "المتدثرة الببغائية أو كلاميديا بستاسي (الاسم العلمي: Chlamydia psittaci) هي نوع من البكتيريا يتبع جنس المتدثرة من الفصيلة المتدثرية. (Chlamydophila psittaci)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002691.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cherubism",
    "term_en": "Cherubism",
    "term_ar": "ورم زوايا الفك",
    "synonyms": [
      "Familial Benign Giant-Cell Tumor of the Jaw",
      "Familial Fibrous Dysplasia of Jaw",
      "Familial Multilocular Cystic Disease of the Jaws"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A fibro-osseous hereditary disease of the jaws. The swollen jaws and raised eyes give a cherubic appearance; multiple radiolucencies are evident upon radiographic examination.",
    "arabic_definition": "وَرَمُ زَوايا الفَك أو الشاروبيمية (الإنجليزية: Cherubism) هوَ عِبارة عن مرض وراثي نِادر يُسبب بروز النصف السُفلي منَ الوجه، وَاسم المَرض مُشتق من المظهر ذو الخدين الممتلئين المشابه بِالمظهر مع الملائكة المذكورة قديماً.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002636.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chlamydiales",
    "term_en": "Chlamydiales",
    "term_ar": "متدثريات",
    "synonyms": [
      "Parachlamydiaceae",
      "Simkaniaceae",
      "Microorganism Z",
      "Waddliaceae",
      "Rhabdochlamydia",
      "Criblamydiaceae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An order of obligately intracellular, gram-negative bacteria that have the chlamydia-like developmental cycle of replication. This is a two-stage cycle that includes a metabolically inactive infectious form, and a vegetative form that replicates by binary fission. Members of Chlamydiales are disseminated by aerosol or by contact. There are at least six recognized families: CHLAMYDIACEAE, Criblamydiaceae, Parachlamydiaceae, Rhabdochlamydia, Simkaniaceae, and Waddliaceae.",
    "arabic_definition": "المتدثريات (الاسم العلمي: Chlamydiales) هي رتبة من البكتيريا تتبع طائفة المتدثرات من شعبة البكتيريا المتدثرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002695.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "citrobacter",
    "term_en": "Citrobacter",
    "term_ar": "الليمونية (بكتيريا)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, rod-shaped enterobacteria that can use citrate as the sole source of carbon.",
    "arabic_definition": "الليمونية هي جنس من البكتيريا سلبية الغرام القولونية في أسرة الأمعائيات. تظهر الليمونية القدرة على تجميع اليورانيوم عن طريق بناء معقدات الفوسفات. (Citrobacter)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002954.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chlamydiaceae",
    "term_en": "Chlamydiaceae",
    "term_ar": "متدثرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative, coccoid microorganisms, in the order CHLAMYDIALES, pathogenic for vertebrates. Genera include CHLAMYDIA and CHLAMYDOPHILA.",
    "arabic_definition": "المتدثرية (الاسم العلمي: Chlamydiaceae) هي فصيلة من البكتيريا تتبع رتبة المتدثريات من طائفة المتدثرات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002693.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "clostridium-tetani",
    "term_en": "Clostridium tetani",
    "term_ar": "مطثية كزازية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The cause of TETANUS in humans and domestic animals. It is a common inhabitant of human and horse intestines as well as soil. Two components make up its potent exotoxin activity, a neurotoxin and a hemolytic toxin.",
    "arabic_definition": "المِطَثِّيّة الكُزازية أو مغزلي الكزاز أو الكلوستريديوم تيتاني (الإنجليزية: Clostridium tetani) هي بكتيريا إيجابية الغرام لاهوائيّة من جنس المطثية. تظهر هذه البكتيريا على شكل مضرب التنس تحت المجهر.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003017.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chickenpox",
    "term_en": "Chickenpox",
    "term_ar": "جدري الماء",
    "synonyms": [
      "Varicella",
      "Chicken Pox"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A highly contagious infectious disease caused by the varicella-zoster virus (HERPESVIRUS 3, HUMAN). It usually affects children, is spread by direct contact or respiratory route via droplet nuclei, and is characterized by the appearance on the skin and mucous membranes of successive crops of typical pruritic vesicular lesions that are easily broken and become scabbed. Chickenpox is relatively benign in children, but may be complicated by pneumonia and encephalitis in adults. (From Dorland, 27th ed)",
    "arabic_definition": "جُدَرِيّ الماء أو الحُمَاقُ أو العَنْقَزُ أو الجُدَيْرِيّ أو جديري الدجاج (الإنجليزية: Chickenpox)، هو مرض شديد العدوى، يمكن الوقاية منه باللقاح، ويسببه فيروس جدري الماء النطاقي، وهو أحد أفراد عائلة الفيروسات الهربسية. يؤدي المرض إلى ظهور طفح جلدي يتخذ شكل بثور صغيرة مثيرة للحكة، تتحول في النهاية إلى قشور.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002644.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "candidiasis",
    "term_en": "Candidiasis",
    "term_ar": "داء المبيضات",
    "synonyms": [
      "Candidiases",
      "Moniliasis",
      "Moniliases",
      "Candida Infection",
      "Candida Infections",
      "Infection, Candida"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with a fungus of the genus CANDIDA. It is usually a superficial infection of the moist areas of the body and is generally caused by CANDIDA ALBICANS. (Dorland, 27th ed)",
    "arabic_definition": "داء المُبْيَضَّات أو السفاد أو أمراض الكانديدا أو أمراض المونيليا (اللاتينية: Candidiasis) هو عدوى فطرية يسببها فطر المبيضة البيضاء خصوًا أو أي من فطور عائلة جنس المبيضات السفيديات، تسبب هذه الفطور عدوى مختلفة تتراوح ما بين عدوى سطحية مقتصرة على الجلد إلى عدوى مجموعية تهدد حياة المصاب. فقد يحدث وجود المبيضات في الدم (اللاتينية: Candidemia) لدى المرضى ممن لديهم عوز مناعي كمرضى الإيدز والسرطان ومن خضعوا لعمليات نقل أعضاء.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002177.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "campylobacter",
    "term_en": "Campylobacter",
    "term_ar": "عطيفة (بكتيريا)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of bacteria found in the reproductive organs, intestinal tract, and oral cavity of animals and man. Some species are pathogenic.",
    "arabic_definition": "العَطِيفَة أو المنثنية (الاسم العلمي: Campylobacter، كمبيلوبكتر) جنس من البكتيريا تتبع الفصيلة العطيفات من رتبة العطيفيات. هي جنس من البكتيريا سالبة الجرام الهوائية حلزونية لها سياط أحادية أو ثنائية القطبية وتظهر خاصية الفتح/التدويم (شاهد الصورة) وموجبة في اختبار إفراز أنزيم الأكسيداز.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002167.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brucellosis",
    "term_en": "Brucellosis",
    "term_ar": "داء البروسيلات",
    "synonyms": [
      "Brucelloses",
      "Brucella Infection",
      "Brucella Infections",
      "Infection, Brucella",
      "Malta Fever",
      "Fever, Malta",
      "Undulant Fever",
      "Fever, Undulant"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection caused by bacteria of the genus BRUCELLA mainly involving the MONONUCLEAR PHAGOCYTE SYSTEM. This condition is characterized by fever, weakness, malaise, and weight loss.",
    "arabic_definition": "داء البروسيلات أو مرض بانج أو (الحمى المالطية-Malta fever) (الإنجليزية: Brucellosis) هو مرض حيواني المنشأ شديد العدوى، ينتج عن تناول حليب غير مبستر أو لحم غير مطهو جيداً، من منتجات الحيوانات المصابة، أو من الاتصال المباشر بإفرازاتها. يعرف داء البروسيلات أيضاً بـ الحمى المتماوجة و الحمى المالطية و حمى البحر المتوسط.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002006.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "caliciviridae",
    "term_en": "Caliciviridae",
    "term_ar": "فيروسات كأسية",
    "synonyms": [
      "Nebovirus",
      "Neboviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of RNA viruses infecting a broad range of animals. Most individual species are restricted to their natural hosts. They possess a characteristic six-pointed starlike shape whose surfaces have cup-shaped (chalice) indentions. Transmission is by contaminated food, water, fomites, and occasionally aerosolization of secretions. Genera include LAGOVIRUS; NORWALK-LIKE VIRUSES; SAPPORO-LIKE VIRUSES; and VESIVIRUS.",
    "arabic_definition": "الفيروسات الكأسية أو فصيلة كاليسي (الاسم العلمي: Caliciviridae) فصيلة من الفيروسات الاٍيجابية ذات الرنا أحادي السلسلة. ضمن المجموعة الرابعة لتصنيف بلتيمور.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002139.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bronchopneumonia",
    "term_en": "Bronchopneumonia",
    "term_ar": "ذات الرئة القصبية",
    "synonyms": [
      "Bronchopneumonias",
      "Bronchial Pneumonia",
      "Bronchial Pneumonias",
      "Pneumonia, Bronchial",
      "Pneumonias, Bronchial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the lung parenchyma that is associated with BRONCHITIS, usually involving lobular areas from TERMINAL BRONCHIOLES to the PULMONARY ALVEOLI. The affected areas become filled with exudate that forms consolidated patches.",
    "arabic_definition": "ذات الرئة القصبية أو ذات الرئة الفصيصية أو التهاب الشعب الرئوية (الإنجليزية: Bronchopneumonia أو bronchial pneumonia أو Bronchogenic pneumonia) أو الالتهاب الشّعِبي الرئوي هو التهاب حاد يصيب جدران القصبة الهوائية، وهو أحد النوعين التصنيفيين التشريحيين لذات الرئة البكتيري بالإضافة لذات الرئة الفصي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001996.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bronchopulmonary-dysplasia",
    "term_en": "Bronchopulmonary Dysplasia",
    "term_ar": "خلل التنسج القصبي الرئوي",
    "synonyms": [
      "Dysplasia, Bronchopulmonary"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic lung disease developed after OXYGEN INHALATION THERAPY or mechanical ventilation (VENTILATION, MECHANICAL) usually occurring in certain premature infants (INFANT, PREMATURE) or newborn infants with respiratory distress syndrome (RESPIRATORY DISTRESS SYNDROME, NEWBORN). Histologically, it is characterized by the unusual abnormalities of the bronchioles, such as METAPLASIA, decrease in alveolar number, and formation of CYSTS.",
    "arabic_definition": "خلل التنسج القصبي الرئوي (كان يُعرف سابقاً باسم \"مرض الرئة المزمن في الطفولة\")، هو اضطراب مزمن يصيب رئات الرضّع والأطفال، وقد وُصف للمرة الأولى عام 1967. يشيع أكثر عند الرضع ذوي الأوزان المنخفضة عند الولادة والأطفال الذين يتلقون تنفساً صناعياً لعلاج متلازمة الضائقة التنفسية لدى الرضع. (Bronchopulmonary Dysplasia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D001997.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "campylobacter-fetus",
    "term_en": "Campylobacter fetus",
    "term_ar": "عطيفة جنينية",
    "synonyms": [
      "Spirillum fetus",
      "Vibrio fetus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of bacteria present in man and many kinds of animals and birds, often causing infertility and/or abortion.",
    "arabic_definition": "عطيفة جنينية (الاسم العلمي: Campylobacter fetus) هي نوع من البكتيريا تتبع جنس العطيفة من فصيلة العطيفات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002168.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "brucella-abortus",
    "term_en": "Brucella abortus",
    "term_ar": "بروسيلة مجهضة",
    "synonyms": [
      "Bacterium abortus",
      "Brucella melitensis biovar abortus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of the genus BRUCELLA whose natural hosts are cattle and other bovidae. Abortion and placentitis are frequently produced in the pregnant animal. Other mammals, including humans, may be infected.",
    "arabic_definition": "بروسيلا أبورتيس أو عصويات بانج أو بروسيلة مجهضة أو سقط أو جهيض (الإنجليزية: Brucella abortus) هي متقلبات سلبية الغرام ضمن فصيلة البروسيلات وهي واحدة من العوامل المسببة لداء البروسيلات، يصنف هذه العامل المعدي تحت نطاق البكتيريا. تعتبر بروسيلا المجهضة من بدائيات النوى المبوغة غير المتحركة والهوائية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002003.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "capnocytophaga",
    "term_en": "Capnocytophaga",
    "term_ar": "سخامية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A gram-negative gliding bacterium isolated from the oral cavity. It is a pathogen often causing PERIODONTITIS.",
    "arabic_definition": "سخامية أو كابنو سايتوفاجا (الاسم العلمي: Capnocytophaga) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة نظيرات الصيفرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002206.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bunyamwera-virus",
    "term_en": "Bunyamwera virus",
    "term_ar": "فيروس بونيامويرا",
    "synonyms": [
      "Batai virus",
      "Calovo virus",
      "Chittoor virus",
      "Cache Valley virus",
      "Bunyamwera Group Viruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species in the ORTHOBUNYAVIRUS genus of the family BUNYAVIRIDAE. A large number of serotypes or strains exist in many parts of the world. They are transmitted by mosquitoes and infect humans in some areas.",
    "arabic_definition": "فَيروسِ بُونْيامُوِيرا (اختصارًا BUNV) هو فيروس الحمض النووي الريبي أحادي الجانب مغلف رَنا، الحمض النووي الريبي. هو نوع من جنس فيروس أورثونيا، في ترتيب فيروسات بونيا. (Bunyamwera virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D002042.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diphtheria",
    "term_en": "Diphtheria",
    "term_ar": "خناق",
    "synonyms": [
      "Corynebacterium diphtheriae Infection",
      "Corynebacterium diphtheriae Infections",
      "Infection, Corynebacterium diphtheriae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A localized infection of mucous membranes or skin caused by toxigenic strains of CORYNEBACTERIUM DIPHTHERIAE. It is characterized by the presence of a pseudomembrane at the site of infection. DIPHTHERIA TOXIN, produced by C. diphtheriae, can cause myocarditis, polyneuritis, and other systemic toxic effects.",
    "arabic_definition": "الخُنَاق أو الخَانُوق أو الذُّبَاح أو الديفتيريا (διφθέρα اليونانية (diphthera) «زوج من المخطوطات الجلدية») هو مرض الجهاز التنفسي العلوي بسبب بكتريا الخناق الوتدية، وهي بكتيريا لاهوائية إيجابية الجرام. يتميز المرض بالتهاب في الحلق، حمى منخفضة، غشاء ملتصق (غشاء كاذب) على اللوزتين والبلعوم، و/أو تجويف الأنف. (Diphtheria)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004165.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "echinococcosis",
    "term_en": "Echinococcosis",
    "term_ar": "داء المشوكات",
    "synonyms": [
      "Echinococcoses",
      "Echinococcus Infection",
      "Echinococcus Infections",
      "Infection, Echinococcus",
      "Cystic Echinococcosis",
      "Cystic Echinococcoses",
      "Echinococcoses, Cystic",
      "Echinococcosis, Cystic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An infection caused by the infestation of the larval form of tapeworms of the genus Echinococcus. The liver, lungs, and kidney are the most common areas of infestation.",
    "arabic_definition": "داء المُشْوِكات أو داء المكورات المشوكة أو الاكينوكية (اللاتينية: echinococcosis) أو مرض الأكياس المائية أو الكيس العدري هو مرض طفيلي يصيب الديدان الشريطية من النوع المشوكة. النوعان الرئيسيان للمرض هما داء المشوكات الكيسي (المعروف أيضاً باسم داء التكيس الديداني) وداء المشوكات السنخي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004443.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "canine-distemper-virus",
    "term_en": "Canine Distemper Virus",
    "term_ar": "مرض كف القدم الخشبية",
    "synonyms": [
      "Canine Distemper Viruses",
      "Distemper Viruses, Canine",
      "Canine distemper"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of MORBILLIVIRUS causing distemper in dogs, wolves, foxes, raccoons, and ferrets. Pinnipeds have also been known to contract Canine distemper virus from contact with domestic dogs.",
    "arabic_definition": "ديستمبر الكلاب (يُطلق عليه أحيانًا مرض كف القدم الخشبية) هو مرض فيروسي يصيب مجموعة كبيرة من الثدييات ، بما في ذلك الأنواع المهجنة والبرية من الكلاب، والقيوط، والثعالب، والباندا، والذئاب، والقوارض، والظربان، والراكون، والقطط الكبيرة، بالإضافة إلى زعنفيات الاقدام، وبعض الرئيسيات، ومجموعة متنوعة من الأنواع الأخرى. كان يُعتقد لفترة طويلة أن الحيوانات في عائلة السنوريات Felidae ، بما في ذلك العديد من أنواع السنوريات الكبيرة وكذلك القطط المنزلية، تقاوم ديستمبر الكلاب، إلى أن وجد بعض الباحثين عن انتشار عدوى فيروس ديستمبر الكلاب (CDV) في السنوريات الكبيرة. (Canine Distemper Virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004217.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dwarfism",
    "term_en": "Dwarfism",
    "term_ar": "قزامة",
    "synonyms": [
      "Nanism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genetic or pathological condition that is characterized by short stature and undersize. Abnormal skeletal growth usually results in an adult who is significantly below the average height.",
    "arabic_definition": "القزامة أو داء التقزم هي حالة طبية يكون نتيجتها الفرد أو الحيوان قصير القامة وغالباً ما تكون تلك الحالة ناجمة عن النمو البطيء. في البشر، يتم تعريف التقزم في بعض الأحيان باعتباره طول قامة البالغين الأقل من (135 سم). (Dwarfism)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004392.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "disinfectants",
    "term_en": "Disinfectants",
    "term_ar": "مطهر",
    "synonyms": [
      "Disinfectant",
      "Biocides",
      "Biocide"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Substances used on inanimate objects that destroy harmful microorganisms or inhibit their activity. Disinfectants are classed as complete, destroying SPORES as well as vegetative forms of microorganisms, or incomplete, destroying only vegetative forms of the organisms. They are distinguished from ANTISEPTICS, which are local anti-infective agents used on humans and other animals. (From Hawley's Condensed Chemical Dictionary, 11th ed)",
    "arabic_definition": "المطهرات هي المواد التي تطبق على الكائنات غير الحية لتدمير الكائنات الحية الدقيقة التي تعيش على الكائنات. التطهير لا يقتل بالضرورة جميع الكائنات الدقيقة، وخصوصا الجراثيم البكتيرية فهي غير مقاومة لها، وإنما هي أقل فعالية من التعقيم، وهي العملية الكيميائية التي تقتل كل أنواع الحياة. (Disinfectants)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004202.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dimenhydrinate",
    "term_en": "Dimenhydrinate",
    "term_ar": "ديمينهيدرينات",
    "synonyms": [
      "Diphenhydramine Theoclate",
      "Theoclate, Diphenhydramine",
      "Dramamine",
      "Aviomarin",
      "Cinfamar",
      "Calm-X",
      "Biodramina",
      "Apo-Dimenhydrinate"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A drug combination that contains diphenhydramine and theophylline. It is used for treating VERTIGO, MOTION SICKNESS, and NAUSEA associated with PREGNANCY.",
    "arabic_definition": "الديمينهدرينات، الذي يُسوق باسم درامامين وغرافول من بين أسماء أخرى، هو دواء متاح دون وصفة طبية يُستخدم لعلاج داء الحركة والغثيان. الديمينهدرينات هو دواء مركب من الديفينهيدرامين و8-كلوروثيوفيلين. (Dimenhydrinate)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004111.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dracunculiasis",
    "term_en": "Dracunculiasis",
    "term_ar": "داء التنينات",
    "synonyms": [
      "Dracunculiases",
      "Dracunculosis",
      "Dracunculoses",
      "Guinea Worm Disease",
      "Disease, Guinea Worm",
      "Diseases, Guinea Worm",
      "Guinea Worm Diseases",
      "Worm Disease, Guinea"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with nematodes of the genus Dracunculus. One or more worms may be seen at a time, with the legs and feet being the most commonly infected areas. Symptoms include pruritus, nausea, vomiting, diarrhea, or asthmatic attacks.",
    "arabic_definition": "داءُ الدُّودة الغينيَّة أو داءُ التُّنَينات أو التنينية (الإنجليزية: Dracunculiasis) عدوى بواسطة دودة غينيا. يصاب الشخص بالعدوى عند شرب الماء الذي يحتوي على براغيث الماء المصابة بـ يرقة دودة غينيا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004320.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diastema",
    "term_en": "Diastema",
    "term_ar": "فلج الأسنان",
    "synonyms": [
      "Diastemas",
      "Diastemata"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormal opening or fissure between two adjacent teeth.",
    "arabic_definition": "فلج الأسنان أو الفَرَق (الإنجليزية: diastema؛ يقال الرجل أَفْرَق، أي متباعد أسنانه) هو تباعد الأسنان عن بعض أو وجود فراغ بين الأسنان، يعتبر هذا التباعد شائع في الأطفال ويمكن أن يوجد في أسنان الكبار كذلك، فالفلج بين الاسنان الأمامية (القواطع المركزية) هو الأكثر شيوعاً. قبول شكل تباعد الاسنان يختلف من بين فئة عمرية وعرق بشري وثقافة شعوب وأخرى.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003970.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dirofilariasis",
    "term_en": "Dirofilariasis",
    "term_ar": "داء الخيطاوات",
    "synonyms": [
      "Dirofilariases",
      "Heartworm Disease",
      "Disease, Heartworm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with nematodes of the genus DIROFILARIA, usually in animals, especially dogs, but occasionally in man.",
    "arabic_definition": "داء الخيطاوات (الإنجليزية: Dirofilariasis)، هو عدوى تتسبب بها طفيليات من جنس الدروفيلاريا وتنتقل عن طريق لدغة البعوض. يشمل العوائل الرئيسة لها الكلاب والحيوانات من فصيلة الكلبيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004184.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "diphyllobothriasis",
    "term_en": "Diphyllobothriasis",
    "term_ar": "داء العوساء",
    "synonyms": [
      "Diphyllobothriases",
      "Diphyllobothrium Infection",
      "Diphyllobothrium Infections",
      "Infection, Diphyllobothrium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with tapeworms of the genus Diphyllobothrium.",
    "arabic_definition": "داء العوساء (الإنجليزية: Diphyllobothriasis) هو داء تسببه العوساء و ينتشر المرض في أوروبا والجمهوريات المستقلة حديثا عن الاتحاد السوفيتي ، أمريكا الشمالية ، آسيا ، أوغندا وبيرو ، تشيلي وبشكل استثنائي في اليابان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004169.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "colic",
    "term_en": "Colic",
    "term_ar": "مغص",
    "synonyms": [
      "Abdominal Cramps",
      "Abdominal Cramp",
      "Cramp, Abdominal",
      "Cramps, Abdominal",
      "Infantile Colic",
      "Colic, Infantile"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A clinical syndrome with intermittent abdominal pain characterized by sudden onset and cessation that is commonly seen in infants. It is usually associated with obstruction of the INTESTINES; of the CYSTIC DUCT; or of the URINARY TRACT.",
    "arabic_definition": "مَغْص (الإنجليزية: Colic) (جاءت من اليونانية κολικός كوليكوس، القريبة من كلمة كولون) وهو مجموعة أعراض وآلام في أسفل البطن وله أسباب عديدة تؤدي لحدوثه.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003085.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "corynebacterium-diphtheriae",
    "term_en": "Corynebacterium diphtheriae",
    "term_ar": "وتدية خناقية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, asporogenous bacteria in which three cultural types are recognized. These types (gravis, intermedius, and mitis) were originally given in accordance with the clinical severity of the cases from which the different strains were most frequently isolated. This species is the causative agent of DIPHTHERIA.",
    "arabic_definition": "وتدية خناقية (الاسم العلمي:Corynebacterium diphtheriae) هي نوع من البكتيريا تتبع جنس الوتدية من فصيلة الوتديات. وهي جرثومة مرضية تتسبب بداء الدفتيريا، اكتشفت في عام 1884 م من قبل العالمين الألمانيين إدوين كلبس وفريدريك لوفلر.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003353.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "corynebacterium",
    "term_en": "Corynebacterium",
    "term_ar": "وتدية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of asporogenous bacteria that is widely distributed in nature. Its organisms appear as straight to slightly curved rods and are known to be human and animal parasites and pathogens.",
    "arabic_definition": "الوتدية (الاسم العلمي: Corynebacterium) هي جنس من البكتيريا تتبع الفصيلة الوتديات من رتبة الشعيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003352.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "craniofacial-dysostosis",
    "term_en": "Craniofacial Dysostosis",
    "term_ar": "متلازمة كروزن",
    "synonyms": [
      "Dysostosis, Craniofacial",
      "Craniofacial Dysostoses",
      "Dysostoses, Craniofacial",
      "Craniofacial Dysarthrosis",
      "Craniofacial Dysarthroses",
      "Dysarthroses, Craniofacial",
      "Dysarthrosis, Craniofacial",
      "Craniofacial Dysostosis Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Autosomal dominant CRANIOSYNOSTOSIS with shallow ORBITS; EXOPHTHALMOS; and maxillary hypoplasia.",
    "arabic_definition": "متلازمة كروزون (الإنجليزية: Crouzon Syndrome) هي اضطراب وراثي جسدي سائد يعرف باسم متلازمة القوس الخيشومي. بالأخص، هذه المتلازمة تؤثر على القوس الخيشومي الأول (أو البلعوم)، الذي يوجد في مقدمة الفك العلوي والفك السفلي. (Craniofacial Dysostosis)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003394.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coronaviridae",
    "term_en": "Coronaviridae",
    "term_ar": "فيروسات تاجية",
    "synonyms": [
      "Coronavirinae",
      "Torovirinae",
      "Bafinivirus",
      "Bafiniviruses",
      "White bream virus",
      "White bream viruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Spherical RNA viruses, in the order NIDOVIRALES, infecting a wide range of animals including humans. Transmission is by fecal-oral and respiratory routes. Mechanical transmission is also common. There are two genera: CORONAVIRUS and TOROVIRUS.",
    "arabic_definition": "الفيروسات التاجية (اللاتينية: Coronaviridae) هي فيروسات اٍيجابية ذات حمض نووي ريبوزي أحادي السلسلة (27-31 كيلو قاعدة)، 120 - 160 نانومتر بشكل يشبه الإكليل أو التاج. الغلاف مكون من بروتينات سكرية بنيوية (خاصة بالفيروس) S و M. تضم عائلة الفيروسات الإكليلية أجناس هي: جنس فيروس تاجي؛ الأنواع: فيروس التهاب القصبات المعدي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003332.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "acute-disseminated-encephalomyelitis",
    "term_en": "Acute Disseminated Encephalomyelitis",
    "term_ar": "التهاب الدماغ والنخاع الحاد المنتشر",
    "synonyms": [
      "Acute Disseminated Encephalomyelitides",
      "Disseminated Encephalomyelitis, Acute",
      "Encephalitis, Post-Vaccinal",
      "Post-Vaccinal Encephalitides",
      "Post-Vaccinal Encephalitis",
      "Encephalitis, Postvaccinal",
      "Postvaccinal Encephalitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute or subacute inflammatory process of the CENTRAL NERVOUS SYSTEM characterized histologically by multiple foci of perivascular demyelination. Symptom onset usually occurs several days after an acute viral infection or immunization, but it may coincide with the onset of infection or rarely no antecedent event can be identified. Clinical manifestations include CONFUSION, somnolence, FEVER, nuchal rigidity, and involuntary movements. The illness may progress to COMA and eventually be fatal. (Adams et al., Principles of Neurology, 6th ed, p921)",
    "arabic_definition": "التهاب الدماغ والنخاع المنتثر الحاد (الإنجليزية: acute disseminated encephalomyelitis) مرض متواسط بالمناعة يصيب الدماغ. وعادةً ما تتم الإصابة به بعد الإصابة بعدوى فيروسية، وقد يظهر عقب التطعيم (على الرغم من عدم وجود أي دليل سببي يثبت الصلة بين التطعيم والتهاب الدماغ والنخاع المنتثر الحاد)، وكذلك عقب التعرض لعدوى بكتيرية أو طفيلية، أو حتى يظهر بشكلٍ عفوي.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004673.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ectodermal-dysplasia",
    "term_en": "Ectodermal Dysplasia",
    "term_ar": "خلل التنسج الأديمي الظاهر",
    "synonyms": [
      "Dysplasia, Ectodermal",
      "Dysplasias, Ectodermal",
      "Ectodermal Dysplasias",
      "Congenital Ectodermal Defect",
      "Congenital Ectodermal Defects",
      "Defects, Congenital Ectodermal",
      "Ectodermal Defects, Congenital",
      "Defect, Congenital Ectodermal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of hereditary disorders involving tissues and structures derived from the embryonic ectoderm. They are characterized by the presence of abnormalities at birth and involvement of both the epidermis and skin appendages. They are generally nonprogressive and diffuse. Various forms exist, including anhidrotic and hidrotic dysplasias, FOCAL DERMAL HYPOPLASIA, and aplasia cutis congenita.",
    "arabic_definition": "خلل التنسج الأديمي الظاهر ( ED ) ليس اضطرابًا واحدًا، بل مجموعة من المتلازمات المستمدة جميعًا من تشوهات الهياكل الأديمية الخارجية. تم تحديد أكثر من 150 متلازمة مختلفة. (Ectodermal Dysplasia)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004476.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "venezuelan-equine-encephalitis-virus",
    "term_en": "Venezuelan Equine Encephalitis Virus",
    "term_ar": "فيروس التهاب دماغ الحصان الفنزويلي",
    "synonyms": [
      "Encephalomyelitis Virus, Venezuelan Equine",
      "Viruses, Venezuelan Equine Encephalitis",
      "Venezuelan Equine Encephalitis Viruses",
      "Virus, Venezuelan Equine Encephalitis",
      "Encephalitis Viruses, Venezuelan Equine"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of ALPHAVIRUS that is the etiologic agent of encephalomyelitis in humans and equines. It is seen most commonly in parts of Central and South America.",
    "arabic_definition": "التهاب الدماغ مرض يشكو مصابوه من ارتفاع قليل في درجة الحرارة ومن صداع يستمر عدة أيام. يمكن أن يسبب التهاب الدماغ الارتجاجات والغيبوبة، وقد يسبب الموت. (Venezuelan Equine Encephalitis Virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004666.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ectromelia",
    "term_en": "Ectromelia",
    "term_ar": "انعدام الطرف",
    "synonyms": [
      "Congenital Limb Reduction Deformities",
      "Congenital Limb Reduction Deformity",
      "Amelia",
      "Hemimelia",
      "Phocomelia",
      "Sirenomelia",
      "Sirenomelus",
      "Fused Legs and Feet"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gross hypo- or aplasia of one or more long bones of one or more limbs. The concept includes amelia, hemimelia, phocomelia, and sirenomelia.",
    "arabic_definition": "انعدام الطرف أو اللاطرفية أو غيبة أحد الأطراف (الإنجليزية: Ectromelia) هي حالة خلقية يحصل فيه اختفاء أو نقص نمو في العظام الطويلة، ومن الأمثلة عليها:",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004480.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "echovirus-9",
    "term_en": "Echovirus 9",
    "term_ar": "فيروس A23",
    "synonyms": [
      "Echo Virus 9",
      "Echovirus 9, Human",
      "Human echovirus 9"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of ENTEROVIRUS associated with outbreaks of aseptic meningitis (MENINGITIS, ASEPTIC).",
    "arabic_definition": "فيروس A23 (الإنجليزية: A23 virus) هو نمط مصلي فيروسي ضمن جنس الفيروس المعوي. (Echovirus 9)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004459.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cytomegalovirus",
    "term_en": "Cytomegalovirus",
    "term_ar": "فيروس مضخم للخلايا",
    "synonyms": [
      "Cytomegaloviruses",
      "Salivary Gland Viruses",
      "Salivary Gland Virus",
      "Viruses, Salivary Gland",
      "Virus, Salivary Gland",
      "Herpesvirus 5, Human",
      "Herpesvirus 5 (beta), Human",
      "HHV 5"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family HERPESVIRIDAE, subfamily BETAHERPESVIRINAE, infecting the salivary glands, liver, spleen, lungs, eyes, and other organs, in which they produce characteristically enlarged cells with intranuclear inclusions. Infection with Cytomegalovirus is also seen as an opportunistic infection in AIDS.",
    "arabic_definition": "الفيروس المضخم للخلايا هو جنس فيروسي ينتمي لمجموعة الفيروسات الهربسية (الحلأ). يتوزع وجوده في كافة المناطق الجغرافية ويصيب جميع الفئات العمرية. (Cytomegalovirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003587.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cryptorchidism",
    "term_en": "Cryptorchidism",
    "term_ar": "اختفاء الخصية",
    "synonyms": [
      "Cryptorchism",
      "Testes, Undescended",
      "Undescended Testes",
      "Testis, Undescended",
      "Cryptorchidism, Unilateral Or Bilateral",
      "Undescended Testis",
      "Bilateral Cryptorchidism",
      "Cryptorchidism, Bilateral"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A developmental defect in which a TESTIS or both TESTES failed to descend from high in the ABDOMEN to the bottom of the SCROTUM. Testicular descent is essential to normal SPERMATOGENESIS which requires temperature lower than the BODY TEMPERATURE. Cryptorchidism can be subclassified by the location of the maldescended testis.",
    "arabic_definition": "اختفاء الخُصية أو خفاء الخُصيَّة أو خفيُّ الخُصيَّة ويُشار لها أحيانًا باسم الخُصية الهاجِرة (الإنجليزية: Cryptorchidism)، كما تُعرف باسم خُصْية غير نازلة هو اختفاء إحدى الخصيتين أو كلاهما من كيس الصفن ووجودهما في الحوض الذكري، ويعتبر هذا الخلل من أشهر العيوب الولاديَّة في الجهاز التناسلي الذكري.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003456.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cysticercosis",
    "term_en": "Cysticercosis",
    "term_ar": "داء الكيسات المذنبة",
    "synonyms": [
      "Cysticercoses",
      "Coenurosis",
      "Coenuroses",
      "Coenuri Infection",
      "Coenuri Infections",
      "Infection, Coenuri",
      "Coenurus Infection",
      "Coenurus Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with CYSTICERCUS, the larval form of the various tapeworms of the genus Taenia (usually T. solium in man). In humans they penetrate the intestinal wall and invade subcutaneous tissue, brain, eye, muscle, heart, liver, lung, and peritoneum. Brain involvement results in NEUROCYSTICERCOSIS.",
    "arabic_definition": "داء الكيسات المذنبة هو عدوى بالأنسجة تسببها يرقة (الكيسة المذنبة) من الدودة الشريطية التي توجد في لحم الخنزير (الدودة الشريطية الخنزيرية). قد تظهر على المصابين أعراض قليلة أو قد تكون معدومة على مدى سنوات، وتسبب ما يقرب من واحد إلى اثنين سنتيمتر من الخراجات أو الكيسات الصلبة غير المؤلمة في الجلد والعضلات، أو أعراض عصبية إذا تأثر الدماغ. (Cysticercosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003551.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "dengue-virus",
    "term_en": "Dengue Virus",
    "term_ar": "فيروس الضنك",
    "synonyms": [
      "Dengue Viruses",
      "Virus, Dengue",
      "Viruses, Dengue",
      "Breakbone Fever Virus",
      "Breakbone Fever Viruses",
      "Fever Virus, Breakbone",
      "Fever Viruses, Breakbone",
      "Virus, Breakbone Fever"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of the genus FLAVIVIRUS which causes an acute febrile and sometimes hemorrhagic disease in man. Dengue is mosquito-borne and four serotypes are known.",
    "arabic_definition": "فيروس الضنك أو فيروس الدنك أو فيروس الدنج (الإنجليزية: Dengue virus) هو فيروس يوجد في خمسة أنماط مصلية تسبب حمى الضنك. الفيروس عبارة عن فيروس حمض نووي ريبوزي أحادي السلسلة منقول بالبعوض ينتمي لعائلة الفيروسات المصفرة ولجنس الفيروسة المصفرة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003716.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "craniosynostoses",
    "term_en": "Craniosynostoses",
    "term_ar": "تعظم الدروز الباكر",
    "synonyms": [
      "Craniosynostose",
      "Craniosynostosis",
      "Craniostenosis",
      "Craniostenoses",
      "Plagiocephaly, Synostotic",
      "Synostotic Plagiocephaly",
      "Plagiocephaly, Craniosynostosis",
      "Craniosynostosis Plagiocephaly"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Premature closure of one or more CRANIAL SUTURES. It often results in plagiocephaly. Craniosynostoses that involve multiple sutures are sometimes associated with congenital syndromes such as ACROCEPHALOSYNDACTYLIA; and CRANIOFACIAL DYSOSTOSIS.",
    "arabic_definition": "تَعَظُّمُ الدُّرُوزِ البَاكِر (بالإنجليزية: Craniosynostosis) هي الحالة التي يلتحم فيها واحد أو أكثر من الدروز الليفية في جمجمة رضيع بالتحول إلى عظام (التعظم)، وبالتالي يتغير نمط نمو الجمجمة. ولأن الجمجمة لا يمكنها التوسع عموديًا، فإنها تعوض ذلك عن طريق التمدد أكثر في الاتجاه الموازي للدروز الملتحمة. (Craniosynostoses)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003398.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cystinosis",
    "term_en": "Cystinosis",
    "term_ar": "داء سيستيني",
    "synonyms": [
      "Cystine Storage Disease",
      "Cystine Storage Diseases",
      "Storage Disease, Cystine",
      "Storage Diseases, Cystine",
      "Lysosomal Cystine Transport Protein, Defect Of",
      "Cystine Disease",
      "Cystine Diseases",
      "Cystinoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A metabolic disease characterized by the defective transport of CYSTINE across the lysosomal membrane due to mutation of a membrane protein cystinosin. This results in cystine accumulation and crystallization in the cells causing widespread tissue damage. In the KIDNEY, nephropathic cystinosis is a common cause of RENAL FANCONI SYNDROME.",
    "arabic_definition": "الداء السيستيني (الإنجليزية: Cystinosis) هو أحد أمراض الاختزان في الجسميات الحالة التي تتميز بالتراكم غير الطبيعي للحمض الأميني السيستين. وهو اضطراب وراثي يتبع نمطًا وراثيًا جسميًا متنحيًا.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003554.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "atopic-dermatitis",
    "term_en": "Atopic Dermatitis",
    "term_ar": "التهاب الجلد التأتبي",
    "synonyms": [
      "Eczema, Atopic",
      "Atopic Eczema",
      "Neurodermatitis, Atopic",
      "Atopic Neurodermatitis",
      "Neurodermatitis, Disseminated",
      "Disseminated Neurodermatitis",
      "Eczema, Infantile",
      "Infantile Eczema"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic inflammatory genetically determined disease of the skin marked by increased ability to form reagin (IgE), with increased susceptibility to allergic rhinitis and asthma, and hereditary disposition to a lowered threshold for pruritus. It is manifested by lichenification, excoriation, and crusting, mainly on the flexural surfaces of the elbow and knee. In infants it is known as infantile eczema.",
    "arabic_definition": "التهاب الجلد التأتبي (الإنجليزية: Atopic Dermatitis)- ويعرف بالإكزيمة التأتبية- هو نوع من الالتهابات الجلدية ينتج عنه حكة واحمرار وانتفاخ على سطح الجلد وقد تخرج أحياناً سوائل من المنطقة الملتهبة. يبدأ الالتهاب عادةً في مرحلة الطفولة وتتغير شدة الالتهاب مع العمر، فالأطفال الأقل من سنة قد يعانون من حكة في جميع الجسم ومع تقدم الطفل في العمر تصبح المنطقة خلف الركبتين والمنطقة الأمامية للكوع الأكثر تسبباً بالحكة، وغالباً ما تكون الحكة لدى البالغين في اليدين والقدمين.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003876.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "crigler-najjar-syndrome",
    "term_en": "Crigler-Najjar Syndrome",
    "term_ar": "متلازمة كريغلر-نجار",
    "synonyms": [
      "Crigler Najjar Syndromes",
      "Najjar Syndrome, Crigler",
      "Syndrome, Crigler Najjar",
      "Crigler-Najar Syndrome",
      "Familial Nonhemolytic Unconjugated Hyperbilirubinemia",
      "Hereditary Unconjugated Hyperbilirubinemia",
      "Hereditary Unconjugated Hyperbilirubinemias",
      "Hyperbilirubinemia, Hereditary Unconjugated"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A familial form of congenital hyperbilirubinemia transmitted as an autosomal recessive trait. It is characterized by icterus and brain damage caused by a glucuronyl transferase deficiency in the liver and faulty bilirubin conjugation.",
    "arabic_definition": "متلازمة كريغلر نجار هي اضطراب وراثي جسمي متنحٍ نادر ينتج عن خلل في استقلاب البيليروبين. ينجم المرض عن غياب أو نقص شديد في نشاط إنزيم الغلوكورونوسيل ترانسفيراز UDP-glucuronosyltransferases المسؤول عن اقتران البيليروبين بحمض الغلوكورونيك في الكبد. (Crigler-Najjar Syndrome)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003414.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "desulfovibrio",
    "term_en": "Desulfovibrio",
    "term_ar": "منتزعة الكبريت",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, anaerobic, rod-shaped bacteria capable of reducing sulfur compounds to hydrogen sulfide. Organisms are isolated from anaerobic mud of fresh and salt water, animal intestines, manure, and feces.",
    "arabic_definition": "منتزعة الكبريت (الاسم العلمي: Desulfovibrio) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة الحليزنيات. ارتبط فرط نمو منتزعة الكببريت بداء الأمعاء الالتهابي وتجرثم الدم ومرض باركنسون.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003901.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cutis-laxa",
    "term_en": "Cutis Laxa",
    "term_ar": "تهدل الجلد",
    "synonyms": [
      "Dermatolysis",
      "Dermatolyses",
      "Dermatomegaly"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of connective tissue diseases in which skin hangs in loose pendulous folds. It is believed to be associated with decreased elastic tissue formation as well as an abnormality in elastin formation. Cutis laxa is usually a genetic disease, but acquired cases have been reported. (From Dorland, 27th ed)",
    "arabic_definition": "تهدل الجلد (اللاتينية: Chalazoderma، Dermatochalasia)، (الإنجليزية: Cutis laxa) ويسمى أيضا انحلال النسيج المرن المعمم، أو تمزق النسيج المرن المعمعم، أو قيلة جلدية ثخينة هو مجموعة اضطرابات نادرة تصيب النسيج الضام حيث يصبح الجلد غير مرن مرافق بترهلات فضفاضة في طياته.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D003483.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterobacteriaceae",
    "term_en": "Enterobacteriaceae",
    "term_ar": "أمعائيات",
    "synonyms": [
      "Coliform Bacilli",
      "Enterobacteria",
      "Paracolobactrum",
      "Ewingella",
      "Leclercia",
      "Sodalis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative, facultatively anaerobic, rod-shaped bacteria that do not form endospores. Its organisms are distributed worldwide with some being saprophytes and others being plant and animal parasites. Many species are of considerable economic importance due to their pathogenic effects on agriculture and livestock.",
    "arabic_definition": "الأَمْعَائِيَّاتُ أو البكتيريا المعوية (الاسم العلمي: Enterobacteriaceae) هي فصيلة من البكتيريا تتبع رتبة الأمعائيات من طائفة متقلبات غاما. وهي عائلة كبيرة من البكتيريا سلبية الغرام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004755.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "escherichia-coli",
    "term_en": "Escherichia coli",
    "term_ar": "إشريكية قولونية",
    "synonyms": [
      "Bacillus coli",
      "Bacterium coli",
      "Bacterium coli commune",
      "E coli",
      "Enterococcus coli",
      "Alkalescens-Dispar Group",
      "Enteroaggregative Escherichia coli",
      "Enteroaggregative E. coli"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, facultatively anaerobic, rod-shaped bacteria (GRAM-NEGATIVE FACULTATIVELY ANAEROBIC RODS) commonly found in the lower part of the intestine of warm-blooded animals. It is usually nonpathogenic, but some strains are known to produce DIARRHEA and pyogenic infections. Pathogenic strains (virotypes) are classified by their specific pathogenic mechanisms such as toxins (ENTEROTOXIGENIC ESCHERICHIA COLI), etc.",
    "arabic_definition": "الإشريكية القولونية أو (اللاتينية: Escherichia coli) العصيات القولونية (اللاتينية: Bacillus coli)، هي بكتيريا سلبية الغرام، لاهوائية اختيارية، على شكل قضيب، تنتمي إلى مجموعة القولونيات من جنس الإشريكية. تعيش هذه البكتيريا عادة في الأمعاء السفلى للكائنات ذوات الدم الحار.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004926.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "epidermolysis-bullosa",
    "term_en": "Epidermolysis Bullosa",
    "term_ar": "انحلال البشرة الفقاعي",
    "synonyms": [
      "Acantholysis Bullosa"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Group of genetically determined disorders characterized by the blistering of skin and mucosae. There are four major forms: acquired, simple, junctional, and dystrophic. Each of the latter three has several varieties.",
    "arabic_definition": "انحلال البشرة الفقاعي هو مجموعة من الاضطرابات الوراثية تصيب النسيج الضام و تسبب ظهور بثرات بالجلد والأغشية المخاطية بمدى 1/50,000 . و يحدث هذا نتيجة لنقص في الروابط الدقيقة بين طبقتى البشرة والأدمة. (Epidermolysis Bullosa)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004820.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterovirus",
    "term_en": "Enterovirus",
    "term_ar": "فيروس معوي",
    "synonyms": [
      "Coxsackieviruses",
      "Coxsackie Viruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family PICORNAVIRIDAE whose members preferentially inhabit the intestinal tract of a variety of hosts. The genus contains many species. Newly described members of human enteroviruses are assigned continuous numbers with the species designated human enterovirus.",
    "arabic_definition": "الفيروس المعوي (الإنجليزية: Enterovirus) هو جنس فيروسات اٍيجابية ذات الرنا أحادي السلسلة مرتبط بالعديد من أمراض الاٍنسان والثدييات. تاريخيا الأكثر ذكرا هو الفيروس السنجابي، هناك أنواع أخرى ك فيروس كوكساكس والفيروس الاٍيكوي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004770.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "escherichia",
    "term_en": "Escherichia",
    "term_ar": "إشريكية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, facultatively anaerobic, rod-shaped bacteria whose organisms occur in the lower part of the intestine of warm-blooded animals. The species are either nonpathogenic or opportunistic pathogens.",
    "arabic_definition": "الإشريكية أو العُصَيَّة هي جنس من البكتيريا سالبة الغرام، غير مشكلة للأبواغ، لاهوائية اختيارية، عصوية الشكل من عائلة الأمعائيات. هذه الأجناس من سكان السبيل الهضمي للحيوانات ذوات الدم الحار، وتوفر جزءا من فيتامين ك المشتق الميكروبي لمضيفها، عدد من أجناس هذه البكتيريا مُمرض. (Escherichia)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004925.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterobacter",
    "term_en": "Enterobacter",
    "term_ar": "أمعائية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gram-negative gas-producing rods found in feces of humans and other animals, sewage, soil, water, and dairy products.",
    "arabic_definition": "الأَمْعائِيَّةُ أو إيروباكتر (الاسم العلمي: Enterobacter) هو جنس من البكتيريا يتبع فصيلة الأمعائيات من رتبة المعويات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D004754.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "expectorants",
    "term_en": "Expectorants",
    "term_ar": "دواء مؤثر على الإفرازات الشعبية",
    "synonyms": [
      "Expectorant",
      "Mucolytic Agents",
      "Agents, Mucolytic",
      "Mucolytic Agent",
      "Agent, Mucolytic",
      "Mucolytics",
      "Mucolytic",
      "Mucoactive agent"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents that increase mucous excretion. Mucolytic agents, that is drugs that liquefy mucous secretions, are also included here.",
    "arabic_definition": "الأدوية المؤثرة على الإفرازات الشعبية (الإنجليزية: Mucokinetics) هي مجموعة من الأدوية التي تساعد على التخلص من المخاط من الشعب الهوائية. هذه الأدوية مصنفة حسب طريقة عملها: مذيبات البلغم مقشعات أدوية مرطبة أو أدوية خفض اللزوجة منشطات السطح هذه الأدوية لها القدرة على التخلص من الإفرازات الشعبية من خلال إعاقة التصاقها في الرئة والإخلال بلزوجتها. (Expectorants)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005100.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "filariasis",
    "term_en": "Filariasis",
    "term_ar": "داء الخيطيات",
    "synonyms": [
      "Filariases",
      "Filarioidea Infections",
      "Infections, Filarioidea",
      "Filarioidea Infection",
      "Infection, Filarioidea",
      "Elaeophoriasis",
      "Elaeophoriases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with nematodes of the superfamily FILARIOIDEA. The presence of living worms in the body is mainly asymptomatic but the death of adult worms leads to granulomatous inflammation and permanent fibrosis. Organisms of the genus Elaeophora infect wild elk and domestic sheep causing ischemic necrosis of the brain, blindness, and dermatosis of the face.",
    "arabic_definition": "يشير مصطلح داء الخيطيات أو داء الفيلاريا إلى مرض طفيلي سببه عدوى الديدان من نوع الفيلاريات. تنتشر هذه الديدان عن طريق الذباب والبعوض الأسود الذي يتغذى على الدم. (Filariasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005368.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flavivirus",
    "term_en": "Flavivirus",
    "term_ar": "فيروسة مصفرة (جنس)",
    "synonyms": [
      "Flaviviruses",
      "Arbovirus, Group B",
      "Arboviruses, Group B",
      "Group B Arbovirus",
      "Group B Arboviruses",
      "Orthoflavivirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of FLAVIVIRIDAE containing several subgroups and many species. Most are arboviruses transmitted by mosquitoes or ticks. The type species is YELLOW FEVER VIRUS.",
    "arabic_definition": "الفيروسة المصفرة هي جنس ينتمي لعائلة الفيروسات المصفرة. يشمل هذا الجنس مجموعة من الفيروسات أبرزها: فيروس غرب النيل وفيروس الضنك وفيروس الحمى الصفراء وفيروس التهاب الدماغ المحمول بالقراد بالإضافة لأنواع أخرى قد تسبب التهاب الدماغ. (Flavivirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005416.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flatfoot",
    "term_en": "Flatfoot",
    "term_ar": "قدم مسطحة",
    "synonyms": [
      "Talipes Valgus",
      "Valgus, Talipes",
      "Splayfoot",
      "Flat Foot",
      "Foot, Flat",
      "Pes Planus",
      "Flat Feet",
      "Feet, Flat"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Anomaly in which one or more of the arches of the feet are flat.",
    "arabic_definition": "القدم المسطحة (الإنجليزية: Flat feet) أو القدم المسحاء أو القدم الرَحَّاء هي حالة التي يكون فيها باطن القدم مسطحًا أو مفلطحًا، وتفقد بذلك التقوس الطبيعي الذي يكون موجودًا من الجهة الجانبية للقدم، وتظهر هذه الحالة بشكل ملحوظ أثناء الوقوف. وهو تشوّه وضعيّ بحيث تهبط تقوّسات أخمص القدم، فيصبح أخمص القدم على ارتباط كامل أو شبه كامل مع الأرض، بعض الأفراد ( تقريبًا 20-30% من سكان العالم) يكون التقوّس لديهم بقدم واحدة (وحيد الجانب) أو يكون بكلا القدمين (ثنائي الجانب). (Flatfoot)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005413.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "flavobacterium",
    "term_en": "Flavobacterium",
    "term_ar": "صيفرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic, rod-shaped bacteria widely distributed in SOIL and WATER. Its organisms are also found in raw meats, MILK and other FOOD, hospital environments, and human clinical specimens. Some species are pathogenic in humans.",
    "arabic_definition": "صيفرية (الاسم العلمي: Flavobacterium) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة نظيرات الصيفرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005417.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fascioloidiasis",
    "term_en": "Fascioloidiasis",
    "term_ar": "مثقبيات الكبد",
    "synonyms": [
      "Fascioloidiases",
      "Liver fluke"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection of cattle and other herbivores with the giant liver fluke Fascioloides magna. It is characterized by extensive destruction of the liver parenchyma.",
    "arabic_definition": "مثقبيات الكبد أو الديدان المثقبة الكبدية أو الديدان المثقوبة الكبدية (الإنجليزية: Liver fluke) هي مجموعة من المثقوبات حيث يكون الشكل البالغ من هذه الديدان متمركز بكبد العديد من الثدييات . هذه الديدان يمكن أن تلج اٍلى القنوات الصفراوية والنسيج الكبدي، تتغدى على الدم. (Fascioloidiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005213.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "foot-and-mouth-disease",
    "term_en": "Foot-and-Mouth Disease",
    "term_ar": "حمى قلاعية",
    "synonyms": [
      "Disease, Foot-and-Mouth",
      "Diseases, Foot-and-Mouth",
      "Foot-and-Mouth Diseases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A highly infectious disease caused by FOOT AND MOUTH DISEASE VIRUS that affects mammals of the ARTIODACTYLA order (CATTLE; SHEEP; GOATS; and PIGS) and is characterized by high fever followed by the appearance of blisters inside the mouth and on the feet.",
    "arabic_definition": "الحُمَّى القِلَاعِيَّةُ أو الجُلَاخُ المعروف أيضًا بداء الحافر والفم (الإنجليزية: Foot-and-mouth disease)، هو مرض فيروسي معدٍ وقد يكون مميتًا في بعض الأحيان، ويؤثر أساسًا على الحيوانات ذات الأصابع الزوجية مثل الماشية البرية والمستأنسة. يتسبب الفيروس في حدوث حمى شديدة تستمر من يومين إلى ستة أيام، تليها ظهور بثور داخل الفم وعلى الحوافر، التي قد تنفجر مسببة العرج.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005536.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orthohantavirus",
    "term_en": "Orthohantavirus",
    "term_ar": "فيروسات هانتا",
    "synonyms": [
      "Orthohantaviruses",
      "Hantavirus",
      "Hantaviruses",
      "Dobrava-Belgrade Virus",
      "Andes Virus",
      "Andes Hantavirus",
      "Andes Hantaviruses",
      "Hantavirus, Andes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family BUNYAVIRIDAE causing HANTAVIRUS INFECTIONS, first identified during the Korean war. Infection is found primarily in rodents and humans. Transmission does not appear to involve arthropods. HANTAAN VIRUS is the type species.",
    "arabic_definition": "فيروسات هانتا أو فيروسات هنتا (الاسم العلمي: hantaviruses) هي فيروسات حمض نووي ريبوزي سلبية الاتجاه من عائلة البانيوية. عادة ما تسبب العدوى في القوارض لكنها لا تسبب المرض. (Orthohantavirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006476.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemostatics",
    "term_en": "Hemostatics",
    "term_ar": "إرقاء",
    "synonyms": [
      "Hemostatic",
      "Antihemorrhagics",
      "Antihemorrhagic",
      "Hemostasis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Agents acting to arrest the flow of blood. Absorbable hemostatics arrest bleeding either by the formation of an artificial clot or by providing a mechanical matrix that facilitates clotting when applied directly to the bleeding surface. These agents function more at the capillary level and are not effective at stemming arterial or venous bleeding under any significant intravascular pressure.",
    "arabic_definition": "الإرقاء (اللاتينية: haemostasis) هو وقف نزف الدم بتحويله من سائل إلى صلب. تشتمل مهمة الإرقاء على ثلاث عمليات.عندما يجرح الوعاء الدموي تبدأ أولى هذه العمليات وهي انقباض الوعاء الدموي وتضيقه مما يقلص فقد الدم. (Hemostatics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006490.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hemochromatosis",
    "term_en": "Hemochromatosis",
    "term_ar": "فرط حمل الحديد",
    "synonyms": [
      "Von Recklenhausen-Applebaum Disease",
      "Diseases, Von Recklenhausen-Applebaum",
      "Disease, Von Recklenhausen-Applebaum",
      "Recklenhausen-Applebaum Diseases, Von",
      "Recklenhausen-Applebaum Disease, Von",
      "Von Recklenhausen-Applebaum Diseases",
      "Bronze Diabetes",
      "Bronzed Cirrhosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disorder of iron metabolism characterized by a triad of HEMOSIDEROSIS; LIVER CIRRHOSIS; and DIABETES MELLITUS. It is caused by massive iron deposits in parenchymal cells that may develop after a prolonged increase of iron absorption. (Jablonski's Dictionary of Syndromes &amp; Eponymic Diseases, 2d ed)",
    "arabic_definition": "فرط حمل الحديد أو التحميل المفرط بالحديد (الإنجليزية: iron overload) أو داء ترسب الأصبغة الدموية (الإنجليزية: Hemochromatosis) هو مصطلح طبي يعني تراكم الحديد داخل جسم الإنسان عادة يكون ناتج عن اختلال جيني مما يؤدي إلى امتصاص كميات كبيرة من الحديد من الجهاز الهضمي فتترسب في الكبد ويؤدي هذا الأمر إلى حدوث سرطان الكبد.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006432.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "helminthiasis",
    "term_en": "Helminthiasis",
    "term_ar": "داء ديداني",
    "synonyms": [
      "Helminthiases",
      "Infections, Nematomorpha",
      "Infection, Nematomorpha",
      "Nematomorpha Infection",
      "Nematomorpha Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infestation with parasitic worms of the helminth class.",
    "arabic_definition": "دواد أو داء ديداني المعروف أيضًا باسم عدوى الديدان، هو أي مرض طفيلي يصيب البشر والحيوانات الأخرى يصاب فيه جزء من الجسم بالديدان الطفيلية، المعروفة باسم هيلمنتس. هناك أنواع عديدة من هذه الطفيليات، التي تصنف على نطاق واسع إلى الديدان الشريطية، والمثقوبات، والديدان الأسطوانية. (Helminthiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006373.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "murine-hepatitis-virus",
    "term_en": "Murine hepatitis virus",
    "term_ar": "فيروس كورونا مورين",
    "synonyms": [
      "Murine hepatitis viruses",
      "Murine coronavirus",
      "Murine coronaviruses",
      "Mouse Hepatitis Virus",
      "Hepatitis Viruses, Mouse",
      "Mouse Hepatitis Viruses",
      "Hepatitis Virus, Mouse",
      "Murine Gastroenteritis Virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of the CORONAVIRUS genus causing hepatitis in mice. Four strains have been identified as MHV 1, MHV 2, MHV 3, and MHV 4 (also known as MHV-JHM, which is neurotropic and causes disseminated encephalomyelitis with demyelination as well as focal liver necrosis).",
    "arabic_definition": "فيروس مورين التاجي (أختصارا:M-COV)، هو فيروس ينتقل من المصابين ومن الفئران يعرف أيضا بأسم فيروس التهاب الكبد المنقول من الفئران (أختصارا:MHV) إصابة في الفئران والقوارض ولكن أغلبه من الفئران فهو من سلالات مختلفة وما شابه ذلك. يعد هذا الفيروس من جنس فيروسات كورونا بيتا، وهو نوع نموذجي من الجنس، وهو أحد أكثر فيروسات كورونا دراسة في الصين. (Murine hepatitis virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006517.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatitis-b-virus",
    "term_en": "Hepatitis B virus",
    "term_ar": "فيروس التهاب الكبد ب",
    "synonyms": [
      "B virus, Hepatitis",
      "Hepatitis B viruses",
      "viruses, Hepatitis B",
      "Hepatitis Virus, Homologous Serum",
      "Dane Particle",
      "Particle, Dane"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of the genus ORTHOHEPADNAVIRUS which causes human HEPATITIS B and is also apparently a causal agent in human HEPATOCELLULAR CARCINOMA. The Dane particle is an intact hepatitis virion, named after its discoverer. Non-infectious spherical and tubular particles are also seen in the serum.",
    "arabic_definition": "فيروس التهاب الكبد ب (الإنجليزية: hepatitis B virus) هو فيروس يسبب مرض التهاب الكبد الفيروسي ينتقل من خلال التعرّض للدم والمني وأيّ سائل من سوائل الجسم الملوّثة به. ويمكن أن ينتقل الفيروس من الأمهات اللائي يحملنه إلى أطفالهن الرضّع أثناء الولادة أو من أحد أفراد الأسرة إلى الرضيع في مرحلة الطفولة المبكّرة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006515.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gout",
    "term_en": "Gout",
    "term_ar": "نقرس",
    "synonyms": [
      "Gouts"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Metabolic disorder characterized by recurrent acute arthritis, hyperuricemia and deposition of sodium urate in and around the joints, sometimes with formation of URIC ACID calculi.",
    "arabic_definition": "النِّقْرِس (ويُعرف أيضاً بـ نِقْرس إبهام القدم عندما يصيب الأصبع الكبير للقدم) هو حالة مرضية تتصف عادةً بتكرار حدوث الإصابة بالتهاب المفاصل الحاد (مفصل متورم يتصف بالإحمرار والمضض وارتفاع الحرارة). يُعد المفصل المشطي السلامي في قاعدة الإصبع الكبير للقدم أكثر الأماكن إصابة (نحو 50% من الحالات). (Gout)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006073.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "haemophilus-ducreyi",
    "term_en": "Haemophilus ducreyi",
    "term_ar": "مستدمية دوكرية",
    "synonyms": [
      "Bacillus ulceris cancrosi",
      "Coccobacillus ducreyi",
      "Hemophilus ducreyi"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of HAEMOPHILUS that appears to be the pathogen or causative agent of the sexually transmitted disease, CHANCROID.",
    "arabic_definition": "مستدمية دوكرية (الاسم العلمي: Haemophilus ducreyi) هي نوع من البكتيريا تتبع جنس المستدمية من فصيلة الباستوريلات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006191.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "haemophilus-influenzae",
    "term_en": "Haemophilus influenzae",
    "term_ar": "مستدمية نزلية",
    "synonyms": [
      "Hemophilus influenzae",
      "Bacterium influenzae",
      "Coccobacillus pfeifferi",
      "Haemophilus meningitidis",
      "Influenza-bacillus",
      "Mycobacterium influenzae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of HAEMOPHILUS found on the mucous membranes of humans and a variety of animals. The species is further divided into biotypes I through VIII.",
    "arabic_definition": "المستدمية النزلية (بالاتينية Haemophilus influenzae) هي نوع من البكتيريا صغيرة متعددة الأشكال سالبة الغرام، أي عند صبغها بطريقة غرام تعطي نتيجة سالبة بكتيريا عصوية- سبحية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006193.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "haemophilus",
    "term_en": "Haemophilus",
    "term_ar": "مستدمية",
    "synonyms": [
      "Hemophilus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of PASTEURELLACEAE that consists of several species occurring in animals and humans. Its organisms are described as gram-negative, facultatively anaerobic, coccobacillus or rod-shaped, and nonmotile.",
    "arabic_definition": "المُستَدمية أو هيموفيلاس (الاسم العلمي: Haemophilus) هي جنس من البكتيريا تتبع الفصيلة الباستوريلات من رتبة الباستوريليات. وهي من عصية صغيرة سالبة الغرام ذات محفظة عديدة السكاريد وهي واحدة من المقيحات الثلاثة الهامة ذات المحفظة إضافة إلى المكورة الرئوية والمكورة السحائية وهي السبب الرئيسي لالتهاب السحايا عند الأطفال.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006190.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "goldenhar-syndrome",
    "term_en": "Goldenhar Syndrome",
    "term_ar": "متلازمة جولدينهار",
    "synonyms": [
      "Facioauriculovertebral Sequence",
      "Facioauriculovertebral Sequences",
      "Goldenhar Disease",
      "Moeschler Clarren Syndrome",
      "Oculoauriculovertebral Dysplasia",
      "Dysplasia, Oculoauriculovertebral",
      "Dysplasias, Oculoauriculovertebral",
      "Oculoauriculovertebral Dysplasias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Mandibulofacial dysostosis with congenital eyelid dermoids.",
    "arabic_definition": "متلازمة جولدينهار (الإنجليزية: Goldenhar syndrome) هي عبارة عن عيب خلقي نادر يتميز بعدم اكتمال نمو الأنف، الأذن، اللهاة، الشفة والفك السفلي، وَيُصاحب هذه المتلازمة شذوذ في نمو القوس الخيشومي الأول والثاني. هذه الحالة تصيب ما بين 1 من كل 3500 ل 1 من كل 26000 من المواليد في المملكة المتحدة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006053.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hallucinogens",
    "term_en": "Hallucinogens",
    "term_ar": "مهلوس",
    "synonyms": [
      "Hallucinogen",
      "Hallucinogenic Agent",
      "Agent, Hallucinogenic",
      "Psychedelic Agents",
      "Agents, Psychedelic",
      "Psychotomimetic Agents",
      "Agents, Psychotomimetic",
      "Hallucinogenic Drugs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs capable of inducing illusions, hallucinations, delusions, paranoid ideations, and other alterations of mood and thinking. Despite the name, the feature that distinguishes these agents from other classes of drugs is their capacity to induce states of altered perception, thought, and feeling that are not experienced otherwise.",
    "arabic_definition": "المهلوس هو عقار نفساني التأثير يمكن أن يسبب الهلوسة واضطرابات في الإدراك الحسي للموجودات، بالإضافة إلى اختلال في التفكير والشعور والوعي. من أنواع المهلوسات المُخلّات بالنفس والمفارِقات (تسبب حالة التفارق) والمُهذّيات (تسبب حالة الهذيان). (Hallucinogens)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006213.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fusobacterium",
    "term_en": "Fusobacterium",
    "term_ar": "مغزلية (بكتيريا)",
    "synonyms": [
      "Sphaerophorus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, anaerobic, rod-shaped bacteria found in cavities of humans and other animals. No endospores are formed. Some species are pathogenic and occur in various purulent or gangrenous infections.",
    "arabic_definition": "المغزلية (الاسم العلمي: Fusobacterium) هي جنس من البكتيريا يتبع الفصيلة المغزلاوية من رتبة المغزليات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005673.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gastrula",
    "term_en": "Gastrula",
    "term_ar": "تكون المعيدة",
    "synonyms": [
      "Gastrulas",
      "Blastopore",
      "Blastopores",
      "Primitive Gut",
      "Gut, Primitive",
      "Guts, Primitive",
      "Primitive Guts",
      "Gastrocoele"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The developmental stage that follows BLASTULA or BLASTOCYST. It is characterized by the morphogenetic cell movements including invagination, ingression, and involution. Gastrulation begins with the formation of the PRIMITIVE STREAK, and ends with the formation of three GERM LAYERS, the body plan of the mature organism.",
    "arabic_definition": "تكوُّن المُعَيدَة أو تكوُّن الجسْترولَة أو الطبقة الجنينية (الإنجليزية: Gastrulation) هي مرحلةٌ أولية في التطور الجنيني لمعظم الحيوانات، حيثُ يحدث فيها إعادة ترتيبٍ للأريمة وحيدة الطبقة لتصبح هيكلًا مُتعدد الطبقات يُعرف باسم المُعيْدة (الاسم العلمي: Gastrula)، حيثُ تتكون المُعيدة من طبقة خارجية من خلايا الأديم الخارجي، وطبقة داخلية، من خلايا الأديم الباطن. مع طبقة من الأديم المتوسط، بينها في مرحلة لاحقة.",
    "specialty": "Embryology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005775.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "glucocorticoids",
    "term_en": "Glucocorticoids",
    "term_ar": "هرمون قشري سكري",
    "synonyms": [
      "Glucocorticoid",
      "Glucocorticoid Effect",
      "Effect, Glucocorticoid",
      "Glucorticoid Effects",
      "Effects, Glucorticoid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of CORTICOSTEROIDS that affect carbohydrate metabolism (GLUCONEOGENESIS, liver glycogen deposition, elevation of BLOOD SUGAR), inhibit ADRENOCORTICOTROPIC HORMONE secretion, and possess pronounced anti-inflammatory activity. They also play a role in fat and protein metabolism, maintenance of arterial blood pressure, alteration of the connective tissue response to injury, reduction in the number of circulating lymphocytes, and functioning of the central nervous system.",
    "arabic_definition": "تُعد الهرمونات القشرية السكرية أو القشرانيات السكرية (الإنجليزية: Glucocorticoids أو Glucocorticosteroids) جزءًا من آليات ردود الفعل التي يتخذها الجهاز المناعي ليقلل من أحد جوانب الوظيفة المناعية، مثل الالتهابات. تُستخدم القشرانيات السكرية في الطب في علاج الكثير من الأمراض التي يسببها فرط نشاط الجهاز المناعي مثل الحساسية والربو وأمراض المناعة الذاتية وتعفن الدم (التقيح أو الإنتان).",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005938.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "funnel-chest",
    "term_en": "Funnel Chest",
    "term_ar": "صدر مقعر",
    "synonyms": [
      "Chest, Funnel",
      "Chests, Funnel",
      "Funnel Chests",
      "Pectus Excavatum",
      "Excavatum, Pectus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A developmental anomaly in which the lower sternum is posteriorly dislocated and concavely deformed, resulting in a funnel-shaped thorax.",
    "arabic_definition": "الصدر المقعر (الإنجليزية: Pectus Excavatum) هو أكثر العيوب الخلقية شيوعاً في الجهة الأمامية من الصدر، وهي حالة تنمو فيها عظمة القص وعدة ضلوع بشكل غير طبيعي. مما ينتج عن هذا التشوه شكل يشبه الكهف في الصدر. (Funnel Chest)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005660.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "francisella",
    "term_en": "Francisella",
    "term_ar": "فرنسيسيلة",
    "synonyms": [
      "Francisellaceae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The lone genus of bacteria in the family Francisellaceae, frequently found in natural waters. It can be parasitic in humans, other MAMMALS; BIRDS; and ARTHROPODS.",
    "arabic_definition": "الفرنسيسيلة (الإنجليزية: Francisella) هو جنس من البكتيريا سلبية الغرام المسببة للأمراض. إنها كائنات صغيرة على شكل قضبان أو عصويات مكورة، غير متحركة، وهي أيضا طفيليات داخل الخلاية تتطفل على الخلايا البلعمية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005603.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "francisella-tularensis",
    "term_en": "Francisella tularensis",
    "term_ar": "فرنسيسيلة تولارية",
    "synonyms": [
      "Bacterium tularense",
      "Brucella tularensis",
      "Pasteurella tularensis",
      "Francisella tularense"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The etiologic agent of TULAREMIA in man and other warm-blooded animals.",
    "arabic_definition": "الفرنسيسيلة التولارية أو التولاريمية (الإنجليزية: Francisella tularensis) هي نوع من البكتيريا العصوية المكورة المسببة للأمراض، وهي بكتيريا هوائية سلبية الغرام، غير متحركة، ولا تشكل أبواغ، معروفة بكونها العامل المسبب لمرض التولاريمية، الذي يكون شكله الرئوي قاتلا إذا بقي دون علاج. وهي بكتيريا داخل خلوية مخيرة شديدة الحساسية، تتطلب عملة نموها وجود سيستئين.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005604.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "fusobacterium-necrophorum",
    "term_en": "Fusobacterium necrophorum",
    "term_ar": "مغزلية ناخرة",
    "synonyms": [
      "Sphaerophorus necrophorus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, non-spore-forming bacteria isolated from the natural cavities of man and other animals and from necrotic lesions, abscesses, and blood.",
    "arabic_definition": "مغزلية ناخرة (الاسم العلمي: Fusobacterium necrophorum) هي نوع من البكتيريا يتبع جنس المغزلية من الفصيلة المغزلية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005675.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "geotrichosis",
    "term_en": "Geotrichosis",
    "term_ar": "داء التيربيات",
    "synonyms": [
      "Geotrichoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection due to the fungus Geotrichum.",
    "arabic_definition": "داء التيربيات أو داء الفطر الشعري الأرضي (الإنجليزية: Geotrichosis) هي عدوى فطرية يسببها الفطر التَّيرَبِيَّ المُبْيَضَّ .",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005847.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gingivitis",
    "term_en": "Gingivitis",
    "term_ar": "التهاب اللثة",
    "synonyms": [
      "Gingivitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of gum tissue (GINGIVA) without loss of connective tissue.",
    "arabic_definition": "التهاب اللّثّة هو مرض غير مدمر يسبب التهاب باللثة ويعد من أمراض اللّثّة و دواعم الأسنان الأكثر شيوعًا. سبب الالتهابات هو تكوّن بيوفيلمات بكتيريّة على سطح الأسنان تسمّى باللويحات السنية، معروفة بـ ( بلاك / dental plaque). (Gingivitis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005891.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "transmissible-gastroenteritis-virus",
    "term_en": "Transmissible gastroenteritis virus",
    "term_ar": "فيروس التهاب المعدة والأمعاء الساري",
    "synonyms": [
      "Transmissible Gastroenteritis Virus, Swine",
      "Porcine Transmissible Gastroenteritis Virus",
      "Gastroenteritis Virus, Porcine Transmissible",
      "Gastroenteritis Virus of Swine",
      "Swine Gastroenteritis Virus",
      "Swine Gastroenteritis Viruses",
      "TGE Virus",
      "TGE Viruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of CORONAVIRUS causing a fatal disease to pigs under 3 weeks old.",
    "arabic_definition": "فيروس التهاب المعدة والأمعاء الساري (اختصارًا TGEV) هو فيروس كورونا يُصيب الخنازير، وهو فيروس رنا مُفرد السلسلة مُغلف إيجابي الاتجاه، ويدخلُ إلى خلايا العائل عبر الارتباط مع ألانين أمينوبيبتيداز. ينتمي إلى جنس فيروس كورونا ألفا. (Transmissible gastroenteritis virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D005760.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hyperbilirubinemia",
    "term_en": "Hyperbilirubinemia",
    "term_ar": "بيليروبين",
    "synonyms": [
      "Hyperbilirubinemias",
      "Bilirubinemia",
      "Bilirubinemias",
      "Bilirubin"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition characterized by an abnormal increase of BILIRUBIN in the blood, which may result in JAUNDICE. Bilirubin, a breakdown product of HEME, is normally excreted in the BILE or further catabolized before excretion in the urine.",
    "arabic_definition": "البيليروبين أو صبغة صفراوية مادة صفراء تنتج عن تكسير أو تحلل خلايا الدم الحمراء من مادة الهيموغلوبين التي تكسب خلايا الدم الحمراء لونها الأحمر. (Hyperbilirubinemia)",
    "specialty": "Pathology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006932.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "histoplasmosis",
    "term_en": "Histoplasmosis",
    "term_ar": "داء النوسجات",
    "synonyms": [
      "Histoplasma Infection",
      "Histoplasma Infections",
      "Infection, Histoplasma",
      "Histoplasma capsulatum Infection",
      "Histoplasma capsulatum Infections",
      "Infection, Histoplasma capsulatum",
      "Disseminated Histoplasmosis",
      "Histoplasmosis, Disseminated"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection resulting from exposure to the fungus HISTOPLASMA.",
    "arabic_definition": "داء النوسجات أو مراض الهيستوبلازما (الإنجليزية: Histoplasmosis) (ويعرف أيضاَ ب «داء الكهف»، «داء دارلنج»، «داء وادي اهايو»، «شباك بطاني»، «داء مستكشف الكهوف»، «داء سبيلانكير») هو مرض يسببه فطر النوسجة المغمدة. أعراض المرض تختلف بشكل كبير، لكن المرض يصيب الرئتين بشكل أساسي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006660.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "herpes-zoster",
    "term_en": "Herpes Zoster",
    "term_ar": "هربس نطاقي",
    "synonyms": [
      "Shingles",
      "Zona",
      "Zoster"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute infectious, usually self-limited, disease believed to represent activation of latent varicella-zoster virus (HERPESVIRUS 3, HUMAN) in those who have been rendered partially immune after a previous attack of CHICKENPOX. It involves the SENSORY GANGLIA and their areas of innervation and is characterized by severe neuralgic pain along the distribution of the affected nerve and crops of clustered vesicles over the area. (From Dorland, 27th ed)",
    "arabic_definition": "الهِربِس النُطاقي(1) أو مرض الحلا المنطقي هو مرضٌ فيروسيٌّ يظهرُ فيه طفحٌ جلديٌّ مؤلمٌ مع بثراتٍ في منطقةٍ مُعينة. عادةً ما يحدثُ الطفحُ على شكلِ شريطٍ عريضٍ واحدٍ إما على الجانب الأيسر أو الأيمن من الجسم أو الوجه، كما قد يحدثُ نخزٌ أو ألمٌ موضعيٌّ في المنطقة المتأثرة قبل يومين إلى أربعة أيامٍ من ظهورِ الطفح. (Herpes Zoster)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006562.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "herpangina",
    "term_en": "Herpangina",
    "term_ar": "ذباح هربسي",
    "synonyms": [
      "Herpanginas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Acute types of coxsackievirus infections or ECHOVIRUS INFECTIONS that usually affect children during the summer and are characterized by vesiculoulcerative lesions on the MUCOUS MEMBRANES of the THROAT; DYSPHAGIA; VOMITING, and FEVER.",
    "arabic_definition": "الذباح الهربسي أو الخناق الحلائي أو الذباح الحلائي (الإنجليزية: Herpangina) وتترجم حرفيًا إلى هربنجاينا، وهيَ عدوى مؤلمة في الفم يتسبب بها فيروس كوكساكي. في العادة تتسبب في المرض سلالة معينة من فيروس كوكساكي أ (و مصطلح فيروس الخناق الحلائي يعود على الكوكساكي أ)، لكن يمكن التسبب به أيضا من فيروس كوكساكي ب أو فيروس إيكو.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006557.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hymenolepiasis",
    "term_en": "Hymenolepiasis",
    "term_ar": "داء المحرشفات",
    "synonyms": [
      "Hymenolepiases",
      "Hymenolepis Infection",
      "Hymenolepis Infections",
      "Infection, Hymenolepis",
      "Infections, Hymenolepis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with tapeworms of the genus Hymenolepis.",
    "arabic_definition": "داء المحرشفات (الإنجليزية: Hymenolepiasis) هو داء ديداني تسببه أحد الأنواع: محرشفة قزمة. محرشفة ضئيلة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006925.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "umbilical-hernia",
    "term_en": "Umbilical Hernia",
    "term_ar": "فتق سري",
    "synonyms": [
      "Hernias, Umbilical",
      "Umbilical Hernias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A HERNIA due to an imperfect closure or weakness of the umbilical ring. It appears as a skin-covered protrusion at the UMBILICUS during crying, coughing, or straining. The hernia generally consists of OMENTUM or SMALL INTESTINE. The vast majority of umbilical hernias are congenital but can be acquired due to severe abdominal distention.",
    "arabic_definition": "فَتْقٌ سُرِّيّ أو فتق السُرَّة أو البُجْرَة (بالإنجليزية: Umbilical hernia) هو حالة صحية يحدث فيها تلف لجدار البطن وراء السرة، مما قد يتسبب في بروز السرة إلى الخارج. يتكون الانبعاج أو البروز من الدهون في منطقة البطن من الثرب الأكبر أو أحيانًا أجزاء من الأمعاء الدقيقة.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006554.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "herpesviridae",
    "term_en": "Herpesviridae",
    "term_ar": "فيروسات هربسية",
    "synonyms": [
      "Herpesviruses",
      "Thymic Group Viruses",
      "Mouse Thymic Virus",
      "Mouse Thymic Viruses",
      "Thymic Viruses, Mouse",
      "Thymic Virus, Mouse",
      "Murid herpesvirus 3"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of enveloped, linear, double-stranded DNA viruses infecting a wide variety of animals. Subfamilies, based on biological characteristics, include: ALPHAHERPESVIRINAE; BETAHERPESVIRINAE; and GAMMAHERPESVIRINAE.",
    "arabic_definition": "الفيروسات الهربسية أو الفيروسات الحلئية (الإنجليزية: Herpesviridae) هي عائلة واسعة من فيروسات الدنا والتي تسبب أمراض لدى الحيوان والاٍنسان. اٍسم العائلة مشتق من الكلمة اليونانية herpein والتي تعني زحف.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006564.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactobacillus",
    "term_en": "Lactobacillus",
    "term_ar": "عصية لبنية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, microaerophilic, rod-shaped bacteria occurring widely in nature. Its species are also part of the many normal flora of the mouth, intestinal tract, and vagina of many mammals, including humans. Lactobacillus species are homofermentative and ferment a broad spectrum of carbohydrates often host-adapted but do not ferment PENTOSES. Most members were previously assigned to the Lactobacillus delbrueckii group. Pathogenicity from this genus is rare.",
    "arabic_definition": "العصية اللبنية أو المُلَبِّنَة هي جنس من البكتيريا موجبة غرام اللاهوائية الاختيارية عصوية الشكل. وهي نوع رئيسي في مجموعة بكتيريا حمض اللبن. (Lactobacillus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007778.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "klebsiella-pneumoniae",
    "term_en": "Klebsiella pneumoniae",
    "term_ar": "كلبسيلة رئوية",
    "synonyms": [
      "Klebsiella pneumoniae aerogenes",
      "Hyalococcus pneumoniae",
      "Bacillus pneumoniae",
      "Bacterium pneumoniae crouposae",
      "Klebsiella rhinoscleromatis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gram-negative, non-motile, capsulated, gas-producing rods found widely in nature and associated with urinary and respiratory infections in humans.",
    "arabic_definition": "الكَلِبْسية الرئوية (الاسم العلمي: Klebsiella pneumoniae)، هي بكتيريا عصوية الشكل سالبة الغرام غير متحركة مغلفة بمحفظة، وتصنف ضمن اللاهوائيات الاختيارية المخمرة للاكتوز. ينمو هذا النوع من البكتيريا على آغار ماكونكي ليشكل مستعمرات بكتيرية لزجة مخمرة للاكتوز.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007711.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "klebsiella",
    "term_en": "Klebsiella",
    "term_ar": "كليبسيلا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, facultatively anaerobic, rod-shaped bacteria whose organisms arrange singly, in pairs, or short chains. This genus is commonly found in the intestinal tract and is an opportunistic pathogen that can give rise to bacteremia, pneumonia, urinary tract and several other types of human infection.",
    "arabic_definition": "كليبسيلا (الإنجليزية: Klebsiella) هي جنس بكتيري سلبية الغرام أحد أعضاء عائلة البكتيريا المعوية، وهي بكتيريا عصوية الشكل، غير متحركة، غير مكونة للابواغ، ذات كبسولة بارزة مكونة من عديد السكر (polysaccharides). سميت نسبة للعالم إدوين كلبس.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007709.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactobacillus-acidophilus",
    "term_en": "Lactobacillus acidophilus",
    "term_ar": "عصية لبنية حمضية",
    "synonyms": [
      "Lactobacillus amylovorus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, rod-shaped bacteria isolated from the intestinal tract of humans and animals, the human mouth, and vagina. This organism produces the fermented product, acidophilus milk.",
    "arabic_definition": "المُلَبِّنَة الحَمِضة أو المُلَبِّنَة الحمضية أو العصية اللبنية الحمضية (وباللاتينية Lactobacillus acidophilus ومعناها بكتيريا اللبن المحبة للأحماض ) نوع من أنواع البكتيريا النافعة للإنسان حيث تقوم بتخمير السكريات و تحويلها إلى حمض اللاكتيك وهيدروجين بيروكسايد وانزيمات وفيتامينات (ب) المركب، وكذلك مواد مضادة للجراثيم تثبط أو تقتل الكائنات المجهرية الدقيقة الضارة بالإنسان. كما أن لهذا الحمض خصائص تضاد الفطريات، كما يساعد على خفض مستوى الكوليسترول في الدم ويساعد على عملية الهضم وينشط امتصاص المواد الغذائية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007779.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "palmoplantar-keratoderma",
    "term_en": "Palmoplantar Keratoderma",
    "term_ar": "تقرن الجلد الراحي الأخمصي",
    "synonyms": [
      "Keratodermas, Palmoplantar",
      "Palmoplantar Keratodermas",
      "Hyperkeratosis Palmaris et Plantaris",
      "Keratosis Palmaris et Plantaris",
      "Keratosis, Palmoplantar",
      "Keratoses, Palmoplantar",
      "Palmoplantar Keratoses",
      "Palmoplantar Keratosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Group of mostly hereditary disorders characterized by thickening of the palms and soles as a result of excessive keratin formation leading to hypertrophy of the stratum corneum (hyperkeratosis).",
    "arabic_definition": "تقرن الجلد الراحي الأخمصي يشمل مجموعة متغايرة من الاضطرابات التي تتميز بسماكة غير طبيعية للطبقة المتقرنة في الراحتين والأخمصين. وُصفت جميع الأشكال الصبغية المتنحية، والسائدة، والمرتبطة بالصبغي إكس، والمكتسبة. (Palmoplantar Keratoderma)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007645.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "klippel-feil-syndrome",
    "term_en": "Klippel-Feil Syndrome",
    "term_ar": "متلازمة كليبل فيل",
    "synonyms": [
      "Syndrome, Klippel-Feil",
      "Dystrophia Brevicollis Congenita",
      "Dystrophia Brevicollis Congenitas",
      "Cervical Fusion Syndrome",
      "Klippel-Feil Sequence",
      "Vertebral Cervical Fusion Syndrome",
      "Klippel–Feil syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterised by a low hairline and a shortened neck resulting from a reduced number of vertebrae or the fusion of multiple hemivertebrae into one osseous mass.",
    "arabic_definition": "متلازمة كليبل فيل (الإنجليزية: Klippel–Feil syndrome) هو مرض نادر تم وصفه لأول مرة في عام 1912 من قبل العالمين موريس كليبل وآندري فيل من فرنسا. يتَّصف بالتصاق أي فقرتين من الفقرات العنقية السبع عند الإنسان. (Klippel-Feil Syndrome)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007714.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactobacillaceae",
    "term_en": "Lactobacillaceae",
    "term_ar": "ملبنات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-positive bacteria found regularly in the mouth and intestinal tract of man and other animals, in food and dairy products, and in fermenting vegetable juices. A few species are highly pathogenic.",
    "arabic_definition": "المُلَبِّنَات (الاسم العلمي: Lactobacillaceae) هي فصيلة من البكتيريا تتبع رتبة الملبنيات من طائفة العصيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007777.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "iridoviridae",
    "term_en": "Iridoviridae",
    "term_ar": "فيروسات مقزحة",
    "synonyms": [
      "Icosahedral Cytoplasmic Deoxyriboviruses",
      "Cytoplasmic Deoxyriboviruses, Icosahedral",
      "Deoxyriboviruses, Icosahedral Cytoplasmic",
      "Chloriridovirus",
      "Chloriridoviruses",
      "Lymphocystivirus",
      "Lymphocystiviruses",
      "Goldfish Viruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of large icosahedral DNA viruses infecting insects and poikilothermic vertebrates. Genera include IRIDOVIRUS; RANAVIRUS; Chloriridovirus; Megalocytivirus; and Lymphocystivirus.",
    "arabic_definition": "الفيروسات المقزحة (الإنجليزية: Iridoviridae) هي عائلة من الفيروسات ثنائية سلسلة الدنا، تضم هذه العائلة خمسة أجناس : جنس: فيروس كلوريريد جنس: فيروس مقزح جنس: فيروس لمفي كيسي جنس: فيروس الكريات الضخمة جنس: فيروس رانا عناصر هذه العائلة تصيب أساسا اللافقاريات، لكن أيضا بعض الفقاريات بما في ذلك الأسماك، البرمائيات والزواحف.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007497.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ichthyosis",
    "term_en": "Ichthyosis",
    "term_ar": "سماك",
    "synonyms": [
      "Ichthyoses",
      "Xeroderma",
      "Xerodermas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any of several generalized skin disorders characterized by dryness, roughness, and scaliness, due to hypertrophy of the stratum corneum epidermis. Most are genetic, but some are acquired, developing in association with other systemic disease or genetic syndrome.",
    "arabic_definition": "السُّماك (اللاتينية: ichthyosis) مجموعة غير متجانسة تشمل أكثر من 30 اضطراباً جلدياً أغلبها وراثي. المصطلح اللاتيني مشتق من الكلمة الإغريقية ιχθύς بمعنى سمكة، والمصطلح العربي ترجمة له.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007057.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "incontinentia-pigmenti",
    "term_en": "Incontinentia Pigmenti",
    "term_ar": "سلس الصباغ",
    "synonyms": [
      "Bloch-Sulzberger Syndrome",
      "Syndrome, Bloch-Sulzberger",
      "Bloch-Siemens Syndrome",
      "Bloch-Siemens-Sulzberger Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genodermatosis occurring mostly in females and characterized by skin changes in three phases - vesiculobullous, verrucous papillomatous, and macular melanodermic. Hyperpigmentation is bizarre and irregular. Sixty percent of patients have abnormalities of eyes, teeth, central nervous system, and skin appendages.",
    "arabic_definition": "سَلَسُ الصِّباغ (اختصارًا IP) هو اضطراب وراثي نادر، يتم وراثته عن طريق الوراثة السائِدة المرتبطة بX، ويصيب الجلد والشعر والأسنان والأظافر والجهاز العصبي المركزي. تمت تسميته بناءً على مظهره تحت المجهر. (Incontinentia Pigmenti)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007184.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "insect-repellents",
    "term_en": "Insect Repellents",
    "term_ar": "طارد الحشرات",
    "synonyms": [
      "Repellents, Insect",
      "Insect Repellent",
      "Repellent, Insect"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Substances causing insects to turn away from them or reject them as food.",
    "arabic_definition": "طارد الحشرات هو مادة توضع على الجلد، الملابس أو غيرها من الأسطح لكي لا تشجع الحشرات (والمفصليات بصفة عامة) من الهبوط أو التسلق على هذا السطح. هناك أيضا منتجات طارده للحشرات متاحة على أساس إنتاج الصوت، وعلى وجه الخصوص الموجات فوق الصوتية (أصوات عالية التردد). (Insect Repellents)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007302.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "infectious-bursal-disease-virus",
    "term_en": "Infectious bursal disease virus",
    "term_ar": "داء الغومبورو",
    "synonyms": [
      "Avian Nephrosis Virus",
      "Avian Nephrosis Viruses",
      "Nephrosis Virus, Avian",
      "Nephrosis Viruses, Avian",
      "Gumboro Disease Virus",
      "Bursal Agent, Infectious",
      "Bursal Agents, Infectious",
      "Infectious Bursal Agents"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of AVIBIRNAVIRUS causing severe inflammation of the bursa of Fabricius in chickens and other fowl. Transmission is thought to be through contaminated feed or water. Vaccines have been used with varying degrees of success.",
    "arabic_definition": "داء الغومبورو أو التهاب جراب فابريشيا (الإنجليزية: Infectious bursal disease) هو مرض فيروسي معدي، يصيب الطيور الأليفة والبرية في جميع أنحاء العالم وله تأثير اقتصادي-اجتماعي معتبر. تم وصف عدة أشكال من المرض لكن نمذجتها بقيت غير واضحة لأن بعض الخصائص المستضدية والتشريحية المميزة تم استعمالها دون تبصر وتأثيرها الفعلي يصعب تحديده. (Infectious bursal disease virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007243.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypophosphatasia",
    "term_en": "Hypophosphatasia",
    "term_ar": "نقص الفوسفاتاز",
    "synonyms": [
      "Hypophosphatasias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genetic metabolic disorder resulting from serum and bone alkaline phosphatase deficiency leading to hypercalcemia, ethanolamine phosphatemia, and ethanolamine phosphaturia. Clinical manifestations include severe skeletal defects resembling vitamin D-resistant rickets, failure of the calvarium to calcify, dyspnea, cyanosis, vomiting, constipation, renal calcinosis, failure to thrive, disorders of movement, beading of the costochondral junction, and rachitic bone changes. (From Dorland, 27th ed)",
    "arabic_definition": "يعد نقص الفوسفاتاز (ويُسمى أيضًا عوز الألكالين فوسفاتاز، أو الفوسفوإيتانول أمين يوريا) مرضًا نادرًا، وقاتلًا حتى في بعض الأحيان، وهو أحد أمراض العظم الاستقلابية. أعراضه السريرية غير متجانسة، وتتراوح بين الأعراض المُسبّبة للموت السريع التي تبدأ خلال فترة حول الولادة، بنقص شديد في تمعدن الهيكل العظمي، وحالة تنفسية متوسطة، وقد تقتصر الأعراض على هشاشة عظام أخف، وتتطور في وقت لاحق من الحياة. (Hypophosphatasia)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007014.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hypertelorism",
    "term_en": "Hypertelorism",
    "term_ar": "فرط التباعد",
    "synonyms": [
      "Hypertelorisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal increase in the interorbital distance due to overdevelopment of the lesser wings of the sphenoid.",
    "arabic_definition": "فَرْطُ التَّباعُد (الإنجليزية: Hypertelorism)، ومستمدة من الكلمة اليونانية \"telouros\" (بمعنى بعيدة)، هو زيادة المسافة بين عضوين أو جزئين من الجسم، وغالبا ما يشير إلى زيادة المسافة بين محجري العين (فرط التباعد المداري). وفي هذه الحالة تكون المسافة بين زوايا العين الداخلية وكذلك المسافة بين بؤبؤ العينين أكبر من الطبيعي.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D006972.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "major-histocompatibility-complex",
    "term_en": "Major Histocompatibility Complex",
    "term_ar": "معقد التوافق النسيجي الكبير",
    "synonyms": [
      "Complex, Major Histocompatibility",
      "Complices, Major Histocompatibility",
      "Histocompatibility Complex, Major",
      "Histocompatibility Complices, Major",
      "Major Histocompatibility Complices",
      "Histocompatibility Complex",
      "Complex, Histocompatibility",
      "Complices, Histocompatibility"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The genetic region which contains the loci of genes which determine the structure of the serologically defined (SD) and lymphocyte-defined (LD) TRANSPLANTATION ANTIGENS, genes which control the structure of the IMMUNE RESPONSE-ASSOCIATED ANTIGENS, HUMAN; the IMMUNE RESPONSE GENES which control the ability of an animal to respond immunologically to antigenic stimuli, and genes which determine the structure and/or level of the first four components of complement.",
    "arabic_definition": "مُعَقَّدُ التَّوافُقِ النَّسيجِيِّ الكَبير أو (المركب الرئيسي للتلاؤم النسيجي) (بالإنجليزية: MHC أو major histocompatibility complex) وسمى هذا البروتين بهذا الاسم حيث أنه مزود بواسمات «الذاتية»، لأن دوره في الجسم هو تحديد ما هو ذاتي وما هو «غريب» (مستضد). التفرقة بين الذاتي والغريب هو أحد وسائل الجسم الدفاعية ضد الغريب، ومعقد التوافق هذا هو عبارة عن بروتينات تتحكم في تركيبها مورثات جينية وتوجد على الغشاء السيتوبلازمي للخلايا.",
    "specialty": "Immunology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008285.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lyme-disease",
    "term_en": "Lyme Disease",
    "term_ar": "داء لايم",
    "synonyms": [
      "Disease, Lyme",
      "Borrelia burgdorferi Infection",
      "Borrelia burgdorferi Infections",
      "B. burgdorferi Infection",
      "B. burgdorferi Infections",
      "Lyme Borreliosis",
      "Borreliosis, Lyme",
      "Lyme Arthritis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An infectious disease caused by a spirochete, BORRELIA BURGDORFERI, which is transmitted chiefly by Ixodes dammini (see IXODES) and pacificus ticks in the United States and Ixodes ricinis (see IXODES) in Europe. It is a disease with early and late cutaneous manifestations plus involvement of the nervous system, heart, eye, and joints in variable combinations. The disease was formerly known as Lyme arthritis and first discovered at Old Lyme, Connecticut.",
    "arabic_definition": "داء لايم أو داء ليم (الإنجليزية: Lyme Disease) هو داء خمجي ينتج عن الإصابة بأحد 3 أنواع من بكتيريا البوريليا (جنس من اللولبيات): بوريليا برغدورفيرية وهي النوع الشائع في أمريكا بوريليا جاريني في أوروبا بوريليا أفزيلي في أوروبا يُصنيف مرض لايم إلى مراحل تبعاً لسرعة ومدى انتشار العدوى في الجسم: المرحلة الأولى من مرض لايم وتسمى أيضاً المحصورة حيث يكون مرض لايم في منطقة صغيرة جداً ومحدودة. المرحلة الثانية تبدأ في الانتشار الجزئي لمرض لايم في جسم الإنسان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008193.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "melioidosis",
    "term_en": "Melioidosis",
    "term_ar": "راعوم",
    "synonyms": [
      "Melioidoses",
      "Burkholderia pseudomallei Infection",
      "Burkholderia pseudomallei Infections",
      "Infection, Burkholderia pseudomallei",
      "Whitmore's Disease",
      "Disease, Whitmore's",
      "Whitmore Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease of humans and animals that resembles GLANDERS. It is caused by BURKHOLDERIA PSEUDOMALLEI and may range from a dormant infection to a condition that causes multiple abscesses, PNEUMONIA and BACTEREMIA.",
    "arabic_definition": "الراعوم هو مرض معد سببه بكتيريا سلبية الغرام هي بيركهولدرية راعومية والتي توجد في التربة والماء. للراعوم أهمية في الصحة العامة في الأماكن التي يتوطن فيها، خصوصا في تايلاند وشمال أستراليا. (Melioidosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008554.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "measles-virus",
    "term_en": "Measles virus",
    "term_ar": "فيروس الحصبة",
    "synonyms": [
      "Edmonston virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of MORBILLIVIRUS and the cause of the highly infectious human disease MEASLES, which affects mostly children.",
    "arabic_definition": "فيروس الحصبة (الإنجليزية: Measles virus) (ومختصره MeV) هو الفيروس المسبب لمرض الحصبة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008459.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "maple-syrup-urine-disease",
    "term_en": "Maple Syrup Urine Disease",
    "term_ar": "داء البول القيقبي",
    "synonyms": [
      "Branched-Chain alpha-Keto Acid Dehydrogenase Deficiency",
      "Branched-Chain Ketoaciduria",
      "Branched-Chain Ketoacidurias",
      "Ketoaciduria, Branched-Chain",
      "Ketoacidurias, Branched-Chain",
      "Keto Acid Decarboxylase Deficiency",
      "MSUD (Maple Syrup Urine Disease)",
      "BCKD Deficiency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive inherited disorder with multiple forms of phenotypic expression, caused by a defect in the oxidative decarboxylation of branched-chain amino acids (AMINO ACIDS, BRANCHED-CHAIN). These metabolites accumulate in body fluids and render a maple syrup odor. The disease is divided into classic, intermediate, intermittent, and thiamine responsive subtypes. The classic form presents in the first week of life with ketoacidosis, hypoglycemia, emesis, neonatal seizures, and hypertonia. The intermediate and intermittent forms present in childhood or later with acute episodes of ataxia and vomiting. (From Adams et al., Principles of Neurology, 6th ed, p936)",
    "arabic_definition": "داء البول القيقبي (الإنجليزية: Maple syrup urine disease) هو خلل وراثي في الجينات فالجسم لا يستطيع تكسير أجزاء عديدة من البروتين أثناء عملية الأيض. إن الشخص المصاب بهذا المرض لا يستطيع استخدام بعض مكونات من البروتين (بعض الأحماض الأمينية) وهي الليوسين والايزوليوسين و الفالين .",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008375.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lymphocytic-choriomeningitis",
    "term_en": "Lymphocytic Choriomeningitis",
    "term_ar": "التهاب السحايا والمشيميات اللمفاوي",
    "synonyms": [
      "Choriomeningitis, Lymphocytic",
      "Armstrong Syndrome",
      "Syndrome, Armstrong",
      "Armstrong's Syndrome",
      "Syndrome, Armstrong's",
      "Encephalomyelitis, Lymphocytic Choriomeningitis Virus",
      "Lymphocytic Choriomeningitis Virus Encephalomyelitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of meningitis caused by LYMPHOCYTIC CHORIOMENINGITIS VIRUS. MICE and other rodents serve as the natural hosts, and infection in humans usually occurs through inhalation or ingestion of infectious particles. Clinical manifestations include an influenza-like syndrome followed by stiff neck, alterations of mentation, ATAXIA, and incontinence. Maternal infections may result in fetal malformations and injury, including neonatal HYDROCEPHALUS, aqueductal stenosis, CHORIORETINITIS, and MICROCEPHALY. (From Joynt, Clinical Neurology, 1996, Ch26, pp1-3)",
    "arabic_definition": "الْتِهابُ السَّحايا والمَشيمِيَّاتِ اللِّمْفاوِيّ (الإنجليزية: Lymphocytic choriomeningitis) هي عَدوى منقولة بواسطة القوارض، والتي تُقدم مثل التهاب السحايا العقيم والتهاب السحايا والتهاب الدماغ أو التهاب السحايا والدماغ. الفيروسث المُسبب للمَرض هو فيروسُ الْتِهابُ السَّحايا و المَشيمِيَّاتِ اللِّمْفاوِيّ (الإنجليزية: lymphocytic choriomeningitis virus) يَنتمي لعائلة الفَيروسَةُ الرَّمْلِيَّة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008216.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lumpy-skin-disease",
    "term_en": "Lumpy Skin Disease",
    "term_ar": "داء الجلد الأكتل",
    "synonyms": [
      "Disease, Lumpy Skin",
      "Diseases, Lumpy Skin",
      "Lumpy Skin Diseases",
      "Skin Disease, Lumpy",
      "Skin Diseases, Lumpy"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A poxvirus infection of cattle characterized by the appearance of nodules on all parts of the skin.",
    "arabic_definition": "داء الجلد الأكتل أو داء الجلد الكتيل (LSD) هو مرض معد يصيب البقر ويسببه فيروس من فصيلة الفيروسات الجدرية. يتميز هذا الذاء بالحمى وتضخم العقد اللمفاوية السطحية وعقيدات متعددة (قطرها بين 2 و5 سنتيمترات) على الجلد والأغشية المخاطية، بما في ذلك تلك الموجودة في السبيل التنفسي والسبيل الهضمي. (Lumpy Skin Disease)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008166.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mansonelliasis",
    "term_en": "Mansonelliasis",
    "term_ar": "داء المنسونيلات",
    "synonyms": [
      "Mansonelliases",
      "Mansonellosis",
      "Mansonelloses",
      "Mansonella perstans Infections",
      "Infection, Mansonella perstans",
      "Infections, Mansonella perstans",
      "Mansonella perstans Infection",
      "perstans Infection, Mansonella"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with nematodes of the genus MANSONELLA. Symptoms include pruritus, headache, and articular swelling.",
    "arabic_definition": "داء المنسونيلات (الإنجليزية: Mansonelliasis) هي العدوى الناجمة عن الاٍصابة بالمنسونيلة. هذا المرض متواجد في أفريقيا وأمريكا الاٍستوائية، ينتقل المرض عن طريق عض البراغيث والذبابة السوداء.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008368.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "macrostomia",
    "term_en": "Macrostomia",
    "term_ar": "وجه مشقوق",
    "synonyms": [
      "Macrostomias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Greatly exaggerated width of the mouth, resulting from failure of union of the maxillary and mandibular processes, with extension of the oral orifice toward the ear. The defect may be unilateral or bilateral. (Dorland, 27th ed)",
    "arabic_definition": "تضخم الشدق أو الوجه المشقوق، (من اليونانية بادئة makro- معنى «كبير» وفي اليونانية στόμα، «الفم» يشير إلى الفم أنه واسع بشكل غير عادي. يتميز بوصفه شذوذ خلقي الذي يؤدي لشقوق على تشكيل الوجه للأفراد المصابين. (Macrostomia)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008265.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lassa-fever",
    "term_en": "Lassa Fever",
    "term_ar": "حمى لاسا",
    "synonyms": [
      "Fever, Lassa",
      "Lassa Fevers",
      "Lassa Virus Infection",
      "Infection, Lassa Virus",
      "Lassa Virus Infections",
      "Virus Infection, Lassa"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute febrile human disease caused by the LASSA VIRUS.",
    "arabic_definition": "حمى لاسا أو حمى لاسا النزفيَّة (الإنجليزية: Lassa fever) هي حمى فيروسية نزفية تنتج جراء الإصابة بفيروس لاسا، وقد سميت باسم لاسا نسباً لبلدة لاسا في ولاية برنو في نيجيريا سنة 1969. فيروس لاسا هو جزء من عائلة Arenavirus الفيروسية مثل فيروس إيبولا، تعتبر الفئران الناقل الرئيسي من بين من يحمل هذا المرض وخصوصاً فأر ناتال (Mastomys natalensis) المنتشر في الصحراء الكبرى.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007835.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "legionella",
    "term_en": "Legionella",
    "term_ar": "فيلقية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Gram-negative aerobic rods, isolated from surface water or thermally polluted lakes or streams. Member are pathogenic for man. Legionella pneumophila is the causative agent for LEGIONNAIRES' DISEASE.",
    "arabic_definition": "الفيلقية (الاسم العلمي: Legionella) هي جنس من البكتيريا سالبة غرام تتبع من رتبة الفيلقيات. وأنواع (الفيلقية المستروحة) هذه البكتريا تسبب داء الفيالقة وأخرى (فيلقية لونغ بيتش) تسبب حُمَّى بونتياك.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007875.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "listeria-monocytogenes",
    "term_en": "Listeria monocytogenes",
    "term_ar": "لستيريا مولدة للوحيدات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, rod-shaped bacteria widely distributed in nature. It has been isolated from sewage, soil, silage, and from feces of healthy animals and man. Infection with this bacterium leads to encephalitis, meningitis, endocarditis, and abortion.",
    "arabic_definition": "اللستيريا المولدة للخلايا الوحيدة أو لستيريا مونوسايتوجينز هي البكتيريا التي تسبب داء اللستيريات. وهي بكتيريا لاهوائية اختيارية تستطيع العيش بوجود الأكسجين أو بغيابه. (Listeria monocytogenes)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008089.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leptospirosis",
    "term_en": "Leptospirosis",
    "term_ar": "داء البريميات",
    "synonyms": [
      "Leptospiroses",
      "Stuttgart Disease",
      "Leptospira Infection",
      "Infection, Leptospira",
      "Infections, Leptospira",
      "Leptospira Infections",
      "Canicola Fever",
      "Fever, Canicola"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with bacteria of the genus LEPTOSPIRA.",
    "arabic_definition": "داء البريميات (اللاتينية: leptospirosis) مرض حيواني المنشأ تسببه جراثيم من جنس البريمية، وتتم العدوى حين يتعرض الناس لبول الكلاب والقطط والثدييات الوحشية والقوارض المصابة بالخمج. ويكثر التعرض في المزارع والمسالخ وفي معسكرات الرحلات وفي أثناء السباحة في المياه الملوثة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007922.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "listeriosis",
    "term_en": "Listeriosis",
    "term_ar": "داء الليستريات",
    "synonyms": [
      "Listerioses",
      "Infections, Listeria",
      "Infection, Listeria",
      "Listeria Infection",
      "Listeria Infections",
      "Listeria monocytogenes Infections",
      "Infection, Listeria monocytogenes",
      "Listeria monocytogenes Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with bacteria of the genus LISTERIA.",
    "arabic_definition": "داء اللِّيسْتَرِيّات الليسترية (Listeria) يطلق عليه أيضا مرض الدوران هي جرثومة تسبب الشعور باضطراب معدي ناجم عن تناول أطعمة ملوثة بجرثومة الليستيرية المستوحدة (Listeria monocytogenes). عند النساء الحوامل، قد تؤدي الإصابة بالجرثومة إلى الولادة المبكرة، أو إلى تلوث حاد لدى الجنين، أو حتى إلى ولادة جنين ميت. (Listeriosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008088.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucopolysaccharidosis-i",
    "term_en": "Mucopolysaccharidosis I",
    "term_ar": "متلازمة هيرلر",
    "synonyms": [
      "Lipochondrodystrophy",
      "Lipochondrodystrophies",
      "Mucopolysaccharidosis 1",
      "Mucopolysaccharidosis Type I",
      "Scheie Syndrome",
      "Mucopolysaccharidosis 5",
      "Mucopolysaccharidosis I-S",
      "Mucopolysaccharidosis Type Is"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of autosomal recessive lysosomal storage disorders caused by mutations in the gene encoding the enzyme, alpha-L-iduronidase (IDUA), required for the degradation of heparan and dermatan sulfates. This leads to abnormal accumulation of these glycosaminoglycans in various tissues causing a wide range of clinical presentations including cognitive and musculoskeletal disorders.",
    "arabic_definition": "متلازمة هيرلر (الإنجليزية: Hurler syndrome) أو داء عديدات السكريد المخاطية من النوع الأول هو اعتلال صبغي جسدي متنحي يسبب الوهن وغالباً ما يشكل خطراً على الحياة. وهو اعتلال وراثي سببه نقص في إنزيم يدعى ألفا-إل-أيدورونيداز. (Mucopolysaccharidosis I)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008059.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lassa-virus",
    "term_en": "Lassa virus",
    "term_ar": "فيروس لاسا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of ARENAVIRUS, part of the Old World Arenaviruses (ARENAVIRUSES, OLD WORLD), and the etiologic agent of LASSA FEVER. LASSA VIRUS is a common infective agent in humans in West Africa. Its natural host is the multimammate mouse Mastomys natalensis.",
    "arabic_definition": "يُعد فيروس لاسا (الإنجليزية: Lassa virus) اختصارًا (LASV) فيروس رملي قديم، والذي يسبب حمى لاسا النزفية،، وهو أحد أنواع الحمى النزفية الفيروسية (VHF) التي تصيب الرئيسيات البشرية وغير البشرية. ويعتبر فيروس لاسا فيروسًا حديث النشأة وعامل محدد، ويتطلب المستوى الرابع من الاحتواء في السلامة الأحيائية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007836.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leptospira",
    "term_en": "Leptospira",
    "term_ar": "بريمية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of aerobic, helical spirochetes, some species of which are pathogenic, others free-living or saprophytic.",
    "arabic_definition": "البريمية (الاسم العلمي: Leptospira) هي جنس من البكتيريا تتبع فصيلة نظيرات البريمية Leptospiraceae من رتبة البريميات. تسبب داء البريميات Liptospirosis وهو مرض حيواني منتشر حول العالم.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007919.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lacticaseibacillus-casei",
    "term_en": "Lacticaseibacillus casei",
    "term_ar": "ملبنة مجبنة",
    "synonyms": [
      "Lactobacillus casei"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rod-shaped bacterium isolated from milk and cheese, dairy products and dairy environments, sour dough, cow dung, silage, and human mouth, human intestinal contents and stools, and the human vagina. L. casei is CATALASE positive.",
    "arabic_definition": "الملبنة المجبنة أو بكتيريا اللبن الجبنية (الإنجليزية: Lactobacillus casei) هو نوع من البكتيريا ينتمي لجنس العصية اللبنية. توجد هذه البكتيريا بشكل طبيعي في الحليب والجبن والمسالك البولية للإنسان وكذا الجهاز الهضمي للبشر والخنازير والطيور على حد سواء. (Lacticaseibacillus casei)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007780.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leuconostoc",
    "term_en": "Leuconostoc",
    "term_ar": "نستقة",
    "synonyms": [
      "Leukonostoc"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, facultatively anaerobic bacteria whose growth is dependent on the presence of a fermentable carbohydrate. It is nonpathogenic to plants and animals, including humans.",
    "arabic_definition": "النستقة بكتيريا موجبة الجرام تبرز المرض للإنسان توجد في البيئة والعناصر الغذائية. عوامل خطر الإصابة تشمل ضغط المضاد الحيوي, الجهاز الغريب، أو عوامل المناعة الكامنة. (Leuconostoc)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007934.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "leptospira-interrogans",
    "term_en": "Leptospira interrogans",
    "term_ar": "بريمية استفهامية",
    "synonyms": [
      "Spirochaeta icterogenes",
      "Spirochaeta nodosa",
      "Spirochaeta icterohaemorrhagiae",
      "Spirochaeta interrogans",
      "Leptospira icteroides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of question mark-shaped bacteria spirochetes which is found in fresh water that is contaminated by animal urine. It causes LEPTOSPIROSIS.",
    "arabic_definition": "بريمية استفهامية (الاسم العلمي:Leptospira interrogans) هي نوع من البكتيريا تتبع جنس البريمية من فصيلة نظيرات البريمية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007921.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "legionnaires-disease",
    "term_en": "Legionnaires' Disease",
    "term_ar": "داء الفيالقة",
    "synonyms": [
      "Disease, Legionnaires'",
      "Legionnaire's Disease",
      "Legionnaire Disease",
      "Disease, Legionnaire",
      "Infections, Legionella pneumophila",
      "Infection, Legionella pneumophila",
      "Legionella pneumophila Infection",
      "Legionella pneumophila Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute, sometimes fatal, pneumonia-like bacterial infection characterized by high fever, malaise, muscle aches, respiratory disorders and headache. It is named for an outbreak at the 1976 Philadelphia convention of the American Legion.",
    "arabic_definition": "داء الفيالقة أو حُمّى الفَيلَق (الإنجليزية: Legionnaires Disease) هو داء تنفسي حادّ أحياناً يكون قاتلاً وتسببه الفَيلَقِيَّةُ المُسْتَرْوِحَة. ويشخّص هذا الدّاءَ بذاتِ الرئة من النوع الحادِّ وصداع وسعال جاف. (Legionnaires' Disease)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D007877.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "monoamine-oxidase-inhibitors",
    "term_en": "Monoamine Oxidase Inhibitors",
    "term_ar": "مثبط أكسيداز أحادي الأمين",
    "synonyms": [
      "Inhibitors, Monoamine Oxidase",
      "MAO Inhibitor",
      "Inhibitor, MAO",
      "MAO Inhibitors",
      "Inhibitors, MAO",
      "Monoamine Oxidase Inhibitor",
      "Inhibitor, Monoamine Oxidase",
      "Reversible Inhibitors of Monoamine Oxidase"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chemically heterogeneous group of drugs that have in common the ability to block oxidative deamination of naturally occurring monoamines. (From Gilman, et al., Goodman and Gilman's The Pharmacological Basis of Therapeutics, 8th ed, p414)",
    "arabic_definition": "مثبطات أكسيداز أحادي الأمين (الإنجليزية: Monoamine oxidase inhibitors ومختصرها MAOIs) هي مجموعة من الأدوية كانت تستعمل قديما في علاج الكآبة التي تثبط مجموعة من الإنزيمات التي تدعى بأكسيداز أحادي الأمين.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008996.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mineralocorticoids",
    "term_en": "Mineralocorticoids",
    "term_ar": "قشري معدني",
    "synonyms": [
      "Mineralocorticoid",
      "Mineralocorticoid Effect",
      "Effect, Mineralocorticoid",
      "Mineralocorticoid Effects",
      "Effects, Mineralocorticoid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of CORTICOSTEROIDS primarily associated with water and electrolyte balance. This is accomplished through the effect on ION TRANSPORT in renal tubules, resulting in retention of sodium and loss of potassium. Mineralocorticoid secretion is itself regulated by PLASMA VOLUME, serum potassium, and ANGIOTENSIN II.",
    "arabic_definition": "الهرمونات القشرية المعدنية أو القشرانيات المعدنية (الإنجليزية: Mineralocorticoids) هي صنف من الكورتيكوستيرويدات (أو الستيرويدات القشرية) والتي هي صنف من الهرمونات الستيرويدية. القشرانيات المعدنية هي كورتيكوستيرويدات ترتبط بمستقبل القشرانيات المعدنية للقشرانيات المعدنية دور في توازن السوائل والكهارل.",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008901.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucopolysaccharidoses",
    "term_en": "Mucopolysaccharidoses",
    "term_ar": "أمراض عديد السكاريد المخاطي",
    "synonyms": [
      "Mucopolysaccharidosis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Group of lysosomal storage diseases each caused by an inherited deficiency of an enzyme involved in the degradation of glycosaminoglycans (mucopolysaccharides). The diseases are progressive and often display a wide spectrum of clinical severity within one enzyme deficiency.",
    "arabic_definition": "داء عديد السكاريد المخاطي أو داء عديدات السكريد المخاطية (الإنجليزية: Mucopolysaccharidosis) هي أمراض وراثية ناجمة عن خلل في ما يسمى الليسوسوم وهو الجزء المسئول عن حرق المواد غير المرغوب فيها داخل الخلايا وتسمى أمراض تخزين، لأن الجسم يظل عاجزا عن كنس وحرق وتكسير تلك المواد. أما كيف لا تستطيع الخلية التخلص من مواد مخزنة عليها، فهذا ناتج عن عدم قدرتها على إنتاج الإنزيم المسئول عن تكسير تلك المواد وهي عملية مسئول عنها اللسيسوم عبر الأنزيمات التي ينتجها. (Mucopolysaccharidoses)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009083.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mumps-virus",
    "term_en": "Mumps virus",
    "term_ar": "فيروس النكاف",
    "synonyms": [
      "Mumps viruses",
      "Epidemic Parotitis Virus",
      "Epidemic Parotitis Viruses",
      "Myxovirus parotitidis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of RUBULAVIRUS that causes an acute infectious disease in humans, affecting mainly children. Transmission occurs by droplet infection.",
    "arabic_definition": "فيروس النُّكاف (الإنجليزية: mumps virus) هو العامل المسبب لمرض النكاف. تحدث معظم الاصابات بهذا الفيروس في سن الطفولة ويسبب انتفاخاً واوجاعاً في الغدد النكفية (Parotid glands) و باقي الغدد اللعابية (Salivary glands) و لكن في معظم الوقت ما تكون الأعراض خفيفة وعابرة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009109.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucopolysaccharidosis-iii",
    "term_en": "Mucopolysaccharidosis III",
    "term_ar": "متلازمة سانفيليبو",
    "synonyms": [
      "Mucopolysaccharidosis IIIs",
      "Mucopolysaccharidosis 3",
      "Polydystrophic Oligophrenia",
      "Oligophrenia, Polydystrophic",
      "Oligophrenias, Polydystrophic",
      "Polydystrophic Oligophrenias",
      "San Filippo's Syndrome",
      "San Filippos Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Mucopolysaccharidosis characterized by HEPARAN SULFATE in the urine, progressive mental retardation, mild dwarfism, and other skeletal disorders. There are four clinically indistinguishable but biochemically distinct forms, each due to a deficiency of a different enzyme.",
    "arabic_definition": "متلازمة سانفيليبو (الإنجليزية: Sanfilippo syndrome) عبارة عن مرض وراثي متنحي ناتج من عيب في التمثيل الغذائي وينتمي إلى أمراض السكريات المخاطية العديدة، وتظهر الإعاقة العقلية في سن 1-4 سنوات. وقد سميت المتلازمة بهذا الاسم نسبة إلى الطبيب الأمريكي سلفستر سانفيليبو الذي اكتشف المرض وذلك في عام 1963. (Mucopolysaccharidosis III)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009084.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "micromonosporaceae",
    "term_en": "Micromonosporaceae",
    "term_ar": "بوغانيات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-positive, saprophytic bacteria occurring in soil and aquatic environments.",
    "arabic_definition": "البوغانيات (الإنجليزية: Micromonosporaceae) هي عائلة بكتيرية ضمن صَف الشعاويات، وهي إيجابية الغرام ومُكونة للأبواغ في التربة حيثُ تُشكل غزل فطري.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008848.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "micrococcaceae",
    "term_en": "Micrococcaceae",
    "term_ar": "مكيرات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bacteria ranging from free living and saprophytic to parasitic and pathogenic forms.",
    "arabic_definition": "المُكَيَّرات (الاسم العلمي: Micrococcaceae) هي فصيلة بكتيرية، تتضمن جنس مكورات بكتيرية إيجابية الغرام والتي تسكن الهواء والجلد، مثل المكيرة الصفراء.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008835.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucopolysaccharidosis-iv",
    "term_en": "Mucopolysaccharidosis IV",
    "term_ar": "متلازمة موركيو",
    "synonyms": [
      "Eccentro-Osteochondrodysplasia",
      "Eccentro-Osteochondrodysplasias",
      "Eccentroosteochondrodysplasia",
      "Eccentroosteochondrodysplasias",
      "Morquio Disease",
      "Disease, Morquio",
      "Morquio Syndrome",
      "Morquio Syndromes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Genetic disorder of mucopolysaccharide metabolism characterized by skeletal abnormalities, joint instability, development of cervical myelopathy, and excessive urinary keratan sulfate. There are two biochemically distinct forms, each due to a deficiency of a different enzyme.",
    "arabic_definition": "متلازمة موركيو(الإنجليزية: Morquio syndrome) مرض وراثي قهري وهو عيب خلقي له مضاعفات عديدة وخطرة . في الولايات المتحدة الأمريكية، يقدر معدل الإصابة لموركيو ما بين 1 في 200,000 و1 في 300,000 ولادة حية. (Mucopolysaccharidosis IV)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009085.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "micrococcus",
    "term_en": "Micrococcus",
    "term_ar": "مكورة دقيقة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, spherical bacteria found in soils and fresh water, and frequently on the skin of man and other animals.",
    "arabic_definition": "المكورة الدقيقة أو المكورة الصغرية أو المُكَيَّرة (اللاتينية: Micrococcus) هو جنس من البكتريا في فصيلة المُكَيَّرات. تتواجد المكيرة في نطاق واسع من البيئات، من ضمنها الماء والغبار والتربة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008837.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "microstomia",
    "term_en": "Microstomia",
    "term_ar": "صغر الفم",
    "synonyms": [
      "Microstomias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital defect in which the mouth is unusually small. (Dorland, 27th ed)",
    "arabic_definition": "صغر الفم Microstomia شذوذ في النمو يظهر فيه الفم اصغر من حجمه الطبيعي حيث تبدو فتحة الفم عمودية بدل من أفقيه. (micro- يعني دقيق شكلا ويجمع بين معنى صغير -stomia تعني الفم وهو إشارة مرضية التلازمات القحفية الوجهية وتشمل متلازمة فريمان-شيلدون أو متلازمة شيلدون هول (أو اعوجاج المفاصل الخلقي المتعدد البعيد).",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008865.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucopolysaccharidosis-vi",
    "term_en": "Mucopolysaccharidosis VI",
    "term_ar": "متلازمة ماروتو لامي",
    "synonyms": [
      "ARSB Deficiency",
      "ARSB Deficiencies",
      "Deficiencies, ARSB",
      "Deficiency, ARSB",
      "Arylsulfatase B Deficiency",
      "Arylsulfatase B Deficiencies",
      "Deficiencies, Arylsulfatase B",
      "Deficiency, Arylsulfatase B"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Mucopolysaccharidosis with excessive CHONDROITIN SULFATE B in urine, characterized by dwarfism and deafness. It is caused by a deficiency of N-ACETYLGALACTOSAMINE-4-SULFATASE (arylsulfatase B).",
    "arabic_definition": "متلازمة ماروتو لامي وتكنب كذلك متلازمة ماروتو-لامي وهو اضطراب يصيب الأطفال نتيجة نقص انزيم سلفاتاز، مما يؤدي إلى اختلالات عصبية تشمل: (Mucopolysaccharidosis VI)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009087.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "micrognathism",
    "term_en": "Micrognathism",
    "term_ar": "صغر الفك",
    "synonyms": [
      "Micrognathisms",
      "Mandibular Micrognathia",
      "Mandibular Micrognathias",
      "Micrognathia, Mandibular",
      "Micrognathias, Mandibular",
      "Micrognathia",
      "Micrognathias",
      "Congenital Micrognathism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormally small jaw.",
    "arabic_definition": "صغر الفك (الإنجليزية: Micrognathism) الذي يُدعى أيضًا Micrognathia، أو ذقن الفراولة، أو(Hypognathia)، أو Hypogthathism، هي حالة يكون فيها الفك أصغر من الحالة الطبيعية. كما يطلق عليه أحيانًا «نقص تنسج الفك السفلي».",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008844.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucormycosis",
    "term_en": "Mucormycosis",
    "term_ar": "فطار عفني",
    "synonyms": [
      "Mucorales Infections",
      "Infection, Mucorales",
      "Mucormycoses",
      "Mucormycose",
      "Mucorales Infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection in humans and animals caused by any fungus in the order MUCORALES (e.g., RHIZOPUS; MUCOR; CUNNINGHAMELLA; APOPHYSOMYCES; ABSIDIA; SAKSENAEA and RHIZOMUCOR) There are many clinical types associated with infection including central nervous system, lung, gastrointestinal tract, skin, orbit and paranasal sinuses. In humans, it usually occurs as an OPPORTUNISTIC INFECTION.",
    "arabic_definition": "الفطار العفني هو كل عدوى فطرية تسببها الفطريات من رتبة العفنيات. بشكل عام، أكثر الأنواع المسببة هي تلك التي تتبع أجناس العفنة، الرازبة، العبسية، والكانينغهاميلة. (Mucormycosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009091.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tenericutes",
    "term_en": "Tenericutes",
    "term_ar": "عديمات الجدار",
    "synonyms": [
      "Mollicutes",
      "Mycoplasmatota"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A phylum of gram-negative bacteria consisting of cells bounded by a plasma membrane. Its organisms differ from other bacteria in that they are devoid of cell walls. This phylum was formerly the class Mollicutes. Mollicutes is now the sole class in the phylum Tenericutes.",
    "arabic_definition": "عديمات الجدار (الاسم العلمي: Tenericutes) هي شعبة من البكتيريا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008973.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "monkeypox-virus",
    "term_en": "Monkeypox virus",
    "term_ar": "فيروس جدري النسناس",
    "synonyms": [
      "Monkeypox viruses",
      "Monkey Pox Virus",
      "Monkey Pox Viruses",
      "Monkeypoxvirus",
      "Monkeypoxviruses",
      "Mpox Virus",
      "Mpox Viruses",
      "Viruses, Mpox"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of ORTHOPOXVIRUS that is the etiological agent of MPOX, MONKEYPOX.",
    "arabic_definition": "فيروس جُدَرِيُّ النِّسْناس (الاسم العلمي: Monkeypox virus) ويُعرف اختصارًا MPV أو MPXV، هو فيروسٌ حيواني المنشأ مزدوج الحمض النووي الريبوزي منقوص الأكسجين (الدنا)، وهو نوعٌ ضمن جنس الفيروسة الجدرية (الاسم العلمي: Orthopoxvirus) الذي يتبع فصيلة الفيروسات الجدرية (الاسم العلمي: Poxviridae). يُعد واحدًا من الفيروسة الجدرية البشرية التي تتضمن فيروسات الجدري وجدري البقر والوقس.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D008993.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parvoviridae",
    "term_en": "Parvoviridae",
    "term_ar": "فيروسات صغيرة",
    "synonyms": [
      "Picodnaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of very small DNA viruses containing a single molecule of single-stranded DNA and consisting of two subfamilies: PARVOVIRINAE and DENSOVIRINAE. They infect both vertebrates and invertebrates.",
    "arabic_definition": "الفيروسات الصغيرة (الإنجليزية: Parvoviridae) هي مجموعة من الفيروسات ذات الحمض النووي الريبي منقوص الأوكسجين (الدنا) والصغيرة الحجم. يوجد حاليًا أكثر من 100 نوع ضمن هذه العائلة، تقسم إلى 23 جنس موزعة في ثلاث مجموعات فرعية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010321.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paramyxoviridae",
    "term_en": "Paramyxoviridae",
    "term_ar": "فيروسات مخاطية",
    "synonyms": [
      "Ferlavirus",
      "Ferlaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of spherical viruses, of the order MONONEGAVIRALES, somewhat larger than the orthomyxoviruses, and containing single-stranded RNA. Subfamilies include PARAMYXOVIRINAE and PNEUMOVIRINAE.",
    "arabic_definition": "الفيروسات المخاطية (الإنجليزية: Paramyxoviridae) هي فيروسات من عائلة فيروسات رنا سالبة السلسلة ورتبة الفيروسات السلبية الأحادية. تمثل الفقاريات المضيف الطبيعي لها.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010252.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteomyelitis",
    "term_en": "Osteomyelitis",
    "term_ar": "التهاب العظم والنقي",
    "synonyms": [
      "Osteomyelitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the bone as a result of infection. It may be caused by a variety of infectious agents, especially pyogenic (PUS - producing) BACTERIA.",
    "arabic_definition": "التهاب العظم والنقي أو ذات العظم والنقي أو التهاب العظم ونخاعه (الإنجليزية: Osteomyelitis) هو خمج يصيب نقي العظم وأجزاء العظم المجاورة للنقي. تصل العدوى للنقي عن طريق الدم أو من النسج المجاورة أو بالتطعيم المباشر (مثلا إبرة ملوثة).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010019.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "parasympathomimetics",
    "term_en": "Parasympathomimetics",
    "term_ar": "دواء محاكي اللاودي",
    "synonyms": [
      "Parasympathomimetic Agents",
      "Agents, Parasympathomimetic",
      "Parasympathomimetic Drugs",
      "Drugs, Parasympathomimetic",
      "Parasympathomimetic Effect",
      "Effect, Parasympathomimetic",
      "Parasympathomimetic Effects",
      "Effects, Parasympathomimetic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs that mimic the effects of parasympathetic nervous system activity. Included here are drugs that directly stimulate muscarinic receptors and drugs that potentiate cholinergic activity, usually by slowing the breakdown of acetylcholine (CHOLINESTERASE INHIBITORS). Drugs that stimulate both sympathetic and parasympathetic postganglionic neurons (GANGLIONIC STIMULANTS) are not included here.",
    "arabic_definition": "محاكي اللاودي أو المقلدات الكولينية (أو مشابهات الكولين) Cholinergic mimics مجموعة من الأدوية العلاجية التي تقوم بتأثير مشابه لتأثير الأستيل كولين ضمن الجهاز العصبي نظير الودي . تستخدم هذه الأدوية في علاج مرض المياه الزرقاء (الذي ينتج عن زيادة في ضغط العين). (Parasympathomimetics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010277.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteogenesis-imperfecta",
    "term_en": "Osteogenesis Imperfecta",
    "term_ar": "تكون العظم الناقص",
    "synonyms": [
      "Fragilitas Ossium",
      "Ossiums, Fragilitas",
      "Brittle Bone Disease",
      "Lobstein's Disease",
      "Disease, Lobstein's",
      "Lobsteins Disease",
      "Lobstein Disease",
      "Disease, Lobstein"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "COLLAGEN DISEASES characterized by brittle, osteoporotic, and easily fractured bones. It may also present with blue sclerae, loose joints, and imperfect dentin formation. Most types are autosomal dominant and are associated with mutations in COLLAGEN TYPE I.",
    "arabic_definition": "تكوّن العظم الناقص (اختصارًا OI) وله أسماء عديدة أخرى مثل: متلازمة لوبشتاين، وتخلق العظم الناقص، والعظم الزجاجي، هو مرض وراثي في أغلب حالاته. أي يكفي أن يكون أحد الوالدين حاملا للمرض فيصاب أحد الأبناء به. (Osteogenesis Imperfecta)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010013.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paratuberculosis",
    "term_en": "Paratuberculosis",
    "term_ar": "مرض جونز",
    "synonyms": [
      "Paratuberculoses",
      "Johne Disease",
      "Disease, Johne",
      "Johne's Disease",
      "Disease, Johne's",
      "Johnes Disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A chronic GASTROENTERITIS in RUMINANTS caused by MYCOBACTERIUM AVIUM SUBSPECIES PARATUBERCULOSIS.",
    "arabic_definition": "مرض جونز (الإنجليزية: john's disease) أو نظير السل (الإنجليزية: Paratuberculosis) هو إحدى الأمراض البكتيرية الضارية والسريعة الانتشار بين قطعان المجترات والتي تسببه بكتيريا متفطرة شبيه السل (MAP) وتصيب البكتيريا الامعاء الدقيقة وخصوصا الجزء لفائفي. وقد لوحظ إصابة أنواع واسعة من الحيوانات كالارانب والقوارض والثعالب والخيل والكلاب.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010283.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pediococcus",
    "term_en": "Pediococcus",
    "term_ar": "مملسة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, facultatively anaerobic bacteria whose growth is dependent on the presence of a fermentable carbohydrate. No endospores are produced. Its organisms are found in fermenting plant products and are nonpathogenic to plants and animals, including humans.",
    "arabic_definition": "المُمَلَّسَة (الاسم العلمي: Pediococcus) هي جنس من البكتيريا تتبع فصيلة الملبنات من رتبة الملبنيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010376.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paragonimiasis",
    "term_en": "Paragonimiasis",
    "term_ar": "داء جانبية المناسل",
    "synonyms": [
      "Paragonimiases",
      "Paragonimus westermani Infection",
      "Infection, Paragonimus westermani",
      "Infections, Paragonimus westermani",
      "Paragonimus westermani Infections",
      "Paragonimus Infection",
      "Infection, Paragonimus",
      "Infections, Paragonimus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with TREMATODA of the genus PARAGONIMUS.",
    "arabic_definition": "داء جانبية المناسل (الإنجليزية: Paragonimiasis) هو مرض معدي ينقل عن طريق الأغذية وتسببه جانبية المناسل الفسترمانية، الاٍصابة عند الاٍنسان يسببها اٍستهلاك المياه العذبة والأغذية الطازجة وغير المطبوخة جيدا مثل سرطان البحر . و هو عبارة عن عدوى طفيلية مكتسبة من الغذاء، تسببها الدودة المثقوبة الرئوية وتعرف بجانبية المناسل الفسترمانية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010237.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "gammainfluenzavirus",
    "term_en": "Gammainfluenzavirus",
    "term_ar": "فيروس إنفلونزا ج",
    "synonyms": [
      "Gammainfluenzaviruses",
      "Influenzavirus C",
      "Influenza Viruses Type C",
      "Orthomyxoviruses Type C",
      "Influenza C Virus",
      "Influenza C Viruses",
      "Virus, Influenza C",
      "FLUCV"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family ORTHOMYXOVIRIDAE comprising viruses similar to types A and B but less common, more stable, more homogeneous, and lacking the neuraminidase protein. They have not been associated with epidemics but may cause mild influenza. Influenza C virus is the type species.",
    "arabic_definition": "فيروسات الإنفلونزا ج هي أحد أجناس فيروس أورثوميكوفيريداي. و فيروسات الإنفلونزا ج تضم نوع واحد وهو الفيروس ج الذي تصيب البشر والخنازير. (Gammainfluenzavirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009982.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paratyphoid-fever",
    "term_en": "Paratyphoid Fever",
    "term_ar": "حمى نظيرة تيفية",
    "synonyms": [
      "Fever, Paratyphoid",
      "Fevers, Paratyphoid",
      "Paratyphoid Fevers"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A prolonged febrile illness commonly caused by several Paratyphi serotypes of SALMONELLA ENTERICA. It is similar to TYPHOID FEVER but less severe.",
    "arabic_definition": "الحمى نظيرة التيفية (الإنجليزية: paratyphoid fever) (وتعرف أيضا باسم نظيرة التيفية أو السَّلْمونيلَةُ النَّظيرَةُ التِّيفِيَّة أو التيفوئيد)، هي عدوى بكتيرية تسببها واحدة من ثلاثة أنواع من داء السالمونيلا المعويل A أو B أو C1، ويستوطن في المناطق ذات المعايير الصحية السيئة التي يحدث فيها تلوث للماء والطعام بالفضلات البشرية، مثل جنوب آسيا وإفريقيا والقارة الهندية، وبعض دول أمريكا الجنوبية والشرق الأوسط التي تشهد أزمات بشرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010284.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "osteochondrodysplasias",
    "term_en": "Osteochondrodysplasias",
    "term_ar": "خلل تنسج عظمي غضروفي",
    "synonyms": [
      "Osteochondrodysplasia",
      "Hyperostosis Corticalis Generalisata",
      "Endosteal Hyperostosis, Autosomal Recessive",
      "Hyperphosphatasemia Tarda",
      "Van Buchem Disease",
      "Sost-Related Sclerosing Bone Dysplasia",
      "Sost Sclerosing Bone Dysplasia",
      "Melnick-Needles Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Abnormal development of cartilage and bone.",
    "arabic_definition": "خلل التنسج العظمي الغضروفي هو مصطلح عام يشير إلى خلل في نمو (خلل تنسج) العظم (\"osteo\") والغضروف (\"chondro\"). يندر حدوث هذا المرض بين السكان، إذ يولد 1 من بين كل 5,000 طفل مع نمط معين من خلل التنسج الهيكلي. (Osteochondrodysplasias)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010009.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "paracoccidioidomycosis",
    "term_en": "Paracoccidioidomycosis",
    "term_ar": "الفطار نظير الكرواني",
    "synonyms": [
      "Blastomycosis, South American",
      "South American Blastomycosis",
      "Paracoccidioidomycoses",
      "Paracoccidioidomycose",
      "Paracoccidioides Infections",
      "Infection, Paracoccidioides",
      "Paracoccidioidal Granuloma",
      "Granuloma, Paracoccidioidal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A mycosis affecting the skin, mucous membranes, lymph nodes, and internal organs. It is caused most often by Paracoccidioides brasiliensis. It is also called paracoccidioidal granuloma.",
    "arabic_definition": "يُعد الفطار نظير الكرواني (بّي سي إم) عدوى فطرية حادة إلى مزمنة تسببها فطريات من جنس نظيرات الكروانية (Paracoccidioides)، بما فيها نظيرة الكروانية البرازيلية (Paracoccidioides brasiliensis) ونظيرة الكروانية اللوتزية (Paracoccidioides lutzii). يتوطن في أمريكا الوسطى والجنوبية، ويُصنف ضمن الفطريات المتوطنة المهملة، علمًا أنه نوع من أمراض المناطق المدارية المهملة. (Paracoccidioidomycosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010229.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oxyuriasis",
    "term_en": "Oxyuriasis",
    "term_ar": "داء السرميات",
    "synonyms": [
      "Oxyuriases",
      "Aspiculariasis",
      "Aspiculariases",
      "Pinworm infection"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with nematodes of the superfamily OXYUROIDEA.",
    "arabic_definition": "داء السرميات (الإنجليزية: Pinworm infection) ويسمى أيضاً بداء الأمعاء وهو مرض طفيلي بشري سببه الإصابة بدودة الحرقوص. يصيب بشكل واسع الأطفال.. (Oxyuriasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010123.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "psittacosis",
    "term_en": "Psittacosis",
    "term_ar": "حمى الببغاوات",
    "synonyms": [
      "Psittacoses",
      "Ornithosis",
      "Ornithoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with CHLAMYDOPHILA PSITTACI (formerly Chlamydia psittaci), transmitted to humans by inhalation of dust-borne contaminated nasal secretions or excreta of infected BIRDS. This infection results in a febrile illness characterized by PNEUMONITIS and systemic manifestations.",
    "arabic_definition": "حمى الببغاء أو داء الطيور - هو من الأمراض المعدية لالبشر الناجمة عن البكتيريا يسمى المتدثرة الببغائية و ينتقل من التعامل مع الببغاوات المصابة، مثل الماكاو، الكوكاتيل، طيور البادجي بالإضافة للحمام والبط، الدجاج وطيور النورس والعديد من أنواع الطيور الأخرى. يُعتقد أن الإصابة بالعدوى في طيور الكناري والحسونيات أقل مما هي عليه في الببغاوات . (Psittacosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009956.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orf-virus",
    "term_en": "Orf virus",
    "term_ar": "أرف",
    "synonyms": [
      "Orf viruses",
      "viruses, Orf",
      "Sheep Contagious Ecthyma Virus",
      "Contagious Ecthyma Virus of Sheep",
      "Sheep Contagious Pustular Dermatitis Virus",
      "Contagious Pustular Dermatitis Virus of Sheep",
      "Ecthyma contagiosum Virus",
      "Ecthyma contagiosum Viruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of PARAPOXVIRUS which causes a skin infection in natural hosts, usually young sheep. Humans may contract local skin lesions by contact. The virus apparently persists in soil.",
    "arabic_definition": "الأُرف (الإنجليزية: Orf) تسمية تطلق على مرض جلدي تسببه الفيروسات الجدرية Parapoxvirus يصيب الأغنام والماعز وينتقل منها إلى الإنسان بالتماس. (Orf virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009923.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "influenza-a-virus",
    "term_en": "Influenza A virus",
    "term_ar": "فيروس إنفلونزا أ",
    "synonyms": [
      "Influenza A viruses",
      "Human Influenza A Virus",
      "Influenza Virus Type A",
      "FLUAV",
      "Influenza Viruses Type A",
      "Orthomyxovirus Type A",
      "Orthomyxovirus Type A, Avian",
      "Fowl Plague Virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of the genus ALPHAINFLUENZAVIRUS that causes influenza and other diseases in humans and animals. Antigenic variation occurs frequently between strains, allowing classification into subtypes and variants. Transmission is usually by aerosol (human and most non-aquatic hosts) or waterborne (ducks). Infected birds shed the virus in their saliva, nasal secretions, and feces.",
    "arabic_definition": "فيروسات الإنفلونزا أ (الإنجليزية: Influenza A virus) هي أحد أجناس فيروسات أورثوميكوفيريداي. وفيروسات الإنفلونزا أ تضم نوع واحد وهو الفيروس أ الذي تصيب الطيور وبعض أنواع الثديات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009980.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "orthomyxoviridae",
    "term_en": "Orthomyxoviridae",
    "term_ar": "فيروس الإنفلونزا",
    "synonyms": [
      "Influenza Viruses",
      "Influenza Virus",
      "Orthomyxoviruses",
      "Orthomyxovirus",
      "Myxoviruses",
      "Myxovirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of RNA viruses causing INFLUENZA and other respiratory diseases. Orthomyxoviridae includes INFLUENZAVIRUS A; INFLUENZAVIRUS B; INFLUENZAVIRUS C; INFLUENZAVIRUS D; ISAVIRUS; and THOGOTOVIRUS.",
    "arabic_definition": "فيروسات الإنفلونزا أو الفيروسات المخاطية القويمة (اللاتينية: Orthomyxoviridae) هي مجموعة من فيروسات تحتوي على ستة أجناس وهي: فيروس إنفلونزا أ وفيروس إنفلونزا ب وفيروس إنفلونزا ج وإيسافيروس وثوقوتوفيروس وكارانجافيروس. الفيروسات الثلاث الأولى تسبب الإنفلونزا للبشر والطيور وبعض الثديات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009975.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "newcastle-disease",
    "term_en": "Newcastle Disease",
    "term_ar": "مرض نيوكاسل الخبيث",
    "synonyms": [
      "Disease, Newcastle",
      "Virulent Newcastle disease"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute febrile, contagious, viral disease of birds caused by an AVULAVIRUS called NEWCASTLE DISEASE VIRUS. It is characterized by respiratory and nervous symptoms in fowl and is transmissible to man causing a severe, but transient conjunctivitis.",
    "arabic_definition": "مرض نيوكاسل الخبيث ( VND )، المعروف سابقًا باسم مرض نيوكاسل الغريب، هو مرضٌ فيروسي معدٍ يصيب العديد من أنواع الطيور الداجنة والبرية؛ وقد ينتقل إلى البشر. وعلى الرغم من أنه يمكن أن يصيب البشر، إلا أن معظم الحالات تكون غير مصحوبة بأعراض؛ ونادراً ما يمكن أن يسبب حمّى خفيفة وأعراضاً تشبه أعراض الأنفلونزا و/أو التهاب الملتحمة لدى البشر. (Newcastle Disease)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009521.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oncogenic-viruses",
    "term_en": "Oncogenic Viruses",
    "term_ar": "فيروس ورمي",
    "synonyms": [
      "Oncogenic Virus",
      "Viruses, Oncogenic",
      "Virus, Oncogenic",
      "Tumor Viruses",
      "Tumor Virus",
      "Viruses, Tumor",
      "Virus, Tumor",
      "Oncovirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Viruses that produce tumors.",
    "arabic_definition": "الفيروس الورمي هو فيروس يمكن أن يسبب السرطان . هذا المصطلح نشأ من دراسات التحول الحاد للفيروسات القهقرية في سنوات 1950-60. (Oncogenic Viruses)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009858.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nitrosomonas",
    "term_en": "Nitrosomonas",
    "term_ar": "وحيدة الخلية منتجة النيتريت",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, ellipsoidal or rod-shaped bacteria whose major source of energy and reducing power is from the oxidation of ammonia to nitrite. Its species occur in soils, oceans, lakes, rivers, and sewage disposal systems.",
    "arabic_definition": "وحيدة الخلية منتجة النيتريت (الاسم العلمي: Nitrosomonas) هي جنس من البكتيريا، سلبية الغرام، تتبع فصيلة وحيدات الخلية منتجة النيتريت.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009606.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neuromuscular-blocking-agents",
    "term_en": "Neuromuscular Blocking Agents",
    "term_ar": "محصر عضلي عصبي",
    "synonyms": [
      "Agents, Neuromuscular Blocking",
      "Blocking Agents, Neuromuscular",
      "Neuromuscular Blocking Agent",
      "Agent, Neuromuscular Blocking",
      "Blocking Agent, Neuromuscular",
      "Neuromuscular Blockers",
      "Blockers, Neuromuscular",
      "Neuromuscular Blocker"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs that interrupt transmission of nerve impulses at the skeletal neuromuscular junction. They can be of two types, competitive, stabilizing blockers (NEUROMUSCULAR NONDEPOLARIZING AGENTS) or noncompetitive, depolarizing agents (NEUROMUSCULAR DEPOLARIZING AGENTS). Both prevent acetylcholine from triggering the muscle contraction and they are used as anesthesia adjuvants, as relaxants during electroshock, in convulsive states, etc.",
    "arabic_definition": "المحصِرات العضلية العصبية هي الأدوية التي تحصر النقل العضلي العصبي في الموصل العصبي العضلي، مؤدية إلى شلل العضلات الهيكلية المتأثرة. يحدث هذا عبر تأثيرها في مستقبلات الأستيل كولين (إن إم) بعد المشبكية. (Neuromuscular Blocking Agents)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009466.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nitrobacter",
    "term_en": "Nitrobacter",
    "term_ar": "نترية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, rod-shaped bacteria that oxidizes nitrites to nitrates. Its organisms occur in aerobic environments where organic matter is being mineralized, including soil, fresh water, and sea water.",
    "arabic_definition": "نترية (الاسم العلمي: Nitrobacter) هي جنس من البكتيريا، سلبية الغرام، عصوية الشكل، تتبع فصيلة المجتذرات، وهي كيميائية التغذية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009576.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "influenza-b-virus",
    "term_en": "Influenza B virus",
    "term_ar": "فيروس إنفلونزا ب",
    "synonyms": [
      "Influenza B viruses",
      "FLUBV",
      "Human Influenza B Virus",
      "Influenza Viruses Type B",
      "Orthomyxoviruses Type B",
      "Influenza virus type B",
      "Betainfluenzavirus influenzae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Species of the genus BETAINFLUENZAVIRUS that cause HUMAN INFLUENZA and other diseases primarily in humans. Antigenic variation is less extensive than in type A viruses (INFLUENZA A VIRUS) and consequently there is no basis for distinct subtypes or variants. Epidemics are less likely than with INFLUENZA A VIRUS and there have been no pandemics. Previously only found in humans, Influenza B virus has been isolated from seals which may constitute the animal reservoir from which humans are exposed.",
    "arabic_definition": "فيروس إنفلونزا ب هي أحد أجناس فيروس أورثوميكوفيريداي، و المعروف إنه يصيب فقط الإنسان و الفقمة. و عدم مقدرة الفيروس ب على إصابة أنواع مختلفة من الكائنات قد يكون سبب شبه انعدام جوائح فيروسية لهذا النوع. (Influenza B virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009981.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "opisthorchiasis",
    "term_en": "Opisthorchiasis",
    "term_ar": "داء متأخرات الخصية",
    "synonyms": [
      "Opisthorchiases",
      "Opisthorchis Infection",
      "Infection, Opisthorchis",
      "Infections, Opisthorchis",
      "Opisthorchis Infections",
      "Opisthorchis felineus Infection",
      "Infection, Opisthorchis felineus",
      "Infections, Opisthorchis felineus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with flukes of the genus Opisthorchis.",
    "arabic_definition": "داءُ مُتَأَخِّراتِ الخُصْيَة هو دّاء يسببه دود متأخر الخصية وهو ناتج عن أَكْل السمكِ النيئ أَو المطبوخِ بشكل غير كافي والمصاب بالطفيليات. قد تؤدي العدوى المزمنة إلى سرطانة الأقنية الصفراوية. (Opisthorchiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009889.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nocardiaceae",
    "term_en": "Nocardiaceae",
    "term_ar": "نوكارديات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-positive, aerobic actinomycetes found in soil and animal tissue. Some species are the cause of infection in man and animals.",
    "arabic_definition": "النوكارديات (الاسم العلمي: Nocardiaceae) هي فصيلة من البكتيريا تتبع رتبة الشعيات من طائفة الشعاويات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009618.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oesophagostomiasis",
    "term_en": "Oesophagostomiasis",
    "term_ar": "محلقمة",
    "synonyms": [
      "Oesophagostomiases",
      "Oesophagostomum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection of the intestinal tract with worms of the genus OESOPHAGOSTOMUM. This condition occurs mainly in animals other than man.",
    "arabic_definition": "المحلقمة (الاسم العلمي: Oesophagostomum) هي جنس من الحيوانات الطفيلية حرة المعيشة من فصيلة الأسطونية تتبع رتبة الأسطونيات من شعبة الديدان الأسطوانية. تتواجد هذه الديدان في أفريقيا والبرازيل والصين واندونيسيا والفلبين. (Oesophagostomiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009814.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "nocardia-asteroides",
    "term_en": "Nocardia asteroides",
    "term_ar": "نوكاردية نجمية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of bacterium of the family NOCARDIACEAE, producing pulmonary infections in man.",
    "arabic_definition": "نوكاردية نجمية (الاسم العلمي: Nocardia asteroides) هي نوع من البكتيريا تتبع جنس النوكاردية من فصيلة النوكارديات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009616.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "q-fever",
    "term_en": "Q Fever",
    "term_ar": "حمى كيو",
    "synonyms": [
      "Fever, Q",
      "Fevers, Q",
      "Q Fevers",
      "Query Fever",
      "Fever, Query",
      "Fevers, Query",
      "Query Fevers",
      "Coxiella burnetii Fever"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute infectious disease caused by COXIELLA BURNETII. It is characterized by a sudden onset of FEVER; HEADACHE; malaise; and weakness. In humans, it is commonly contracted by inhalation of infected dusts derived from infected domestic animals (ANIMALS, DOMESTIC).",
    "arabic_definition": "الحمى Q (الإنجليزية: Q fever) مرض معدي ناجم عن الكوكسيلة البورنيتية، وهي بكتيريا تصيب الإنسان وحيوانات أخرى، من أبقار وغنم وماعز، وكذلك الكلاب والقطط. تحدث العدوى نتيجة استنشاق جسيمات غبار ملوثة بالبكتيريا المسببة، وكذلك بالتماس المباشر مع مفرزات الحيوانات المصابة من حليب وبول وبراز والمني والمفرزات المهبلية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011778.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "reoviridae",
    "term_en": "Reoviridae",
    "term_ar": "فيروسات تنفسية معوية يتيمة",
    "synonyms": [
      "Respiratory Enteric Orphan Viruses",
      "Aquareovirus",
      "Aquareoviruses",
      "Cypovirus",
      "Cypoviruses",
      "Fijivirus",
      "Fijiviruses",
      "Phytoreovirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of unenveloped RNA viruses with cubic symmetry. The twelve genera include ORTHOREOVIRUS; ORBIVIRUS; COLTIVIRUS; ROTAVIRUS; Aquareovirus, Cypovirus, Phytoreovirus, Fijivirus, Seadornavirus, Idnoreovirus, Mycoreovirus, and Oryzavirus.",
    "arabic_definition": "الفيروسات التنفسية المعوية اليتيمة أو فصيلة الأربوفيروسات ريوفيريدي (الإنجليزية: Reoviridae) هي عائلة من الفيروسات التي يمكنها أن تصيب الجهاز الهضمي (مثل الفيروسة العجلية) والمجاري التنفسية. اشتق اسم (Reoviridae) من (respiratory enteric orphan viruses) وتعني بالعربي (فيروسات تنفسية معوية يتيمة) كلمة يتيمة تشير إلى أن الفيروسات ليست مرتبطة بأي مرض معروف.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012087.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudomonas-fluorescens",
    "term_en": "Pseudomonas fluorescens",
    "term_ar": "زائفة متألقة",
    "synonyms": [
      "Bacillus fluorescens",
      "Bacterium fluorescens",
      "Bacillus fluorescens liquefaciens",
      "Liquidomonas fluorescens"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of nonpathogenic fluorescent bacteria found in feces, sewage, soil, and water, and which liquefy gelatin.",
    "arabic_definition": "زائفة متألقة (الاسم العلمي: Pseudomonas fluorescens) هي نوع من البكتيريا تتبع جنس الزائفة من فصيلة الزوائف.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011551.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rabies-virus",
    "term_en": "Rabies virus",
    "term_ar": "فيروس داء الكلب",
    "synonyms": [
      "Rabies viruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of LYSSAVIRUS causing rabies in humans and other animals. Transmission is mostly by animal bites through saliva. The virus is neurotropic multiplying in neurons and myotubes of vertebrates.",
    "arabic_definition": "فيروس داء الكلب هو عبارة عن فيروس يصيب العصب ويتسبب في إصابة الإنسان والحيوان بداء الكلب. يمكن لداء الكلب أن ينتقل عن طريق لعاب الحيوانات، وعن طريق الاتصال مع لعاب الإنسان وهذا قليلاً ما يحدث. (Rabies virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011820.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rat-bite-fever",
    "term_en": "Rat-Bite Fever",
    "term_ar": "حمى عضة الجرذ",
    "synonyms": [
      "Fever, Rat-Bite",
      "Fevers, Rat-Bite",
      "Rat-Bite Fevers",
      "Haverhill Fever",
      "Fever, Haverhill",
      "Ratbite Fever",
      "Fever, Ratbite",
      "Fevers, Ratbite"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome characterized by recurring fever, rash, and arthralgias occurring days to weeks after a rat bite. The causative agents are either Streptobacillus moniliformis or Spirillum minus.",
    "arabic_definition": "حمى عضة الجرذ (الإنجليزية: Rat-bite fever) هي مرض يصيب الإنسان (حمى حادة) تسببه البكتيريا المنقولة عن طريق القوارض والفئران أو الجرذان في معظم الحالات، تنتقل هذه البكتيريا من القوارض إلى الإنسان عن طريق البول والإفرازات المخاطية. يسبب هذا المرض بكتيريا السلسلية طوقية الشكل من شعبة البكتيريا المغزلية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011906.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudomonas-aeruginosa",
    "term_en": "Pseudomonas aeruginosa",
    "term_ar": "زائفة زنجارية",
    "synonyms": [
      "Bacillus aeruginosus",
      "Bacillus pyocyaneus",
      "Pseudomonas pyocyanea",
      "Bacterium aeruginosum",
      "Bacterium pyocyaneum",
      "Micrococcus pyocyaneus",
      "Pseudomonas polycolor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic, rod-shaped bacteria commonly isolated from clinical specimens (wound, burn, and urinary tract infections). It is also found widely distributed in soil and water. P. aeruginosa is a major agent of nosocomial infection.",
    "arabic_definition": "الزائفة الزنجارية (الاسم العلمي: Pseudomonas aeruginosa) هي بكتيريا سالبة غرام منتشرة بكثرة، يمكن أن تسبب امراض عند الثدييات، بما فيها البشر. وانها تعتبر ايجابية السترات، وتحوي انزيم الكاتالاز (Catalase)، وكانت نتيجة اختبار الاوكسيداز لها ايجابي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011550.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudopseudohypoparathyroidism",
    "term_en": "Pseudopseudohypoparathyroidism",
    "term_ar": "قصور جارات الدرق الكاذب الكاذب",
    "synonyms": [
      "Pseudopseudohypoparathyroidisms",
      "Pseudopseudo-Hypoparathyroidism",
      "Pseudopseudo-Hypoparathyroidisms",
      "Pseudo-Pseudohypoparathyroidism",
      "Pseudo-Pseudohypoparathyroidisms",
      "Albright Hereditary Osteodystrophy without Multiple Hormone Resistance"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A form of PSEUDOHYPOPARATHYROIDISM characterized by the same features except for the abnormal response to hormones such as PARATHYROID HORMONE. It is associated with paternally inherited mutant alleles of the ALPHA CHAIN OF STIMULATORY G PROTEIN.",
    "arabic_definition": "قصور جارات الدرق الكاذب الكاذب هو مرض وراثي، سُمّي بذلك بسبب تشابهه مع قصور جارات الدرق الكاذب في الصورة السريرية. وبشكل أصح، فهو يماثل الحثل العظمي الوراثي لأولبرايت لكن دون وجود مقاومة للهرمون الدريقي. (Pseudopseudohypoparathyroidism)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011556.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "psychotropic-drugs",
    "term_en": "Psychotropic Drugs",
    "term_ar": "دواء نفسي المفعول",
    "synonyms": [
      "Drugs, Psychotropic",
      "Psychoactive Agent",
      "Agent, Psychoactive",
      "Psychoactive Drug",
      "Drug, Psychoactive",
      "Psychopharmaceutical",
      "Psychoactive Agents",
      "Agents, Psychoactive"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A loosely defined grouping of drugs that have effects on psychological function. Here the psychotropic agents include the antidepressive agents, hallucinogens, and tranquilizing agents (including the antipsychotics and anti-anxiety agents).",
    "arabic_definition": "دواء نفسي المفعول أو العقار نفساني التأثير أو المؤثر العقلي عبارة عن مادة كيميائية تعبر الحاجز الدموي الدماغي وتؤثر على الجهاز العصبي المركزي ومنه على وظيفة العقل مما يؤدي إلى حدوث تأثيرات على الإدراك الحسي والحالة والوعي والإدراك والسلوك. قد تستخدم هذه المواد طبيًا؛ أو استجماميًا؛ أو لتحسين الأداء أو تغيير حالة وعي المرء عمدًا؛ أو كعقار روحي لأغراض شعائرية أو روحانية أو شامانية؛ أو بغرض البحث العلمي. (Psychotropic Drugs)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011619.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "progeria",
    "term_en": "Progeria",
    "term_ar": "شيخوخة مبكرة",
    "synonyms": [
      "Hutchinson-Gilford Syndrome",
      "Hutchinson Gilford Progeria Syndrome",
      "Hutchinson-Gilford Progeria Syndromes",
      "Progeria Syndrome, Hutchinson-Gilford",
      "Progeria Syndromes, Hutchinson-Gilford"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An abnormal congenital condition, associated with defects in the LAMIN TYPE A gene, which is characterized by premature aging in children, where all the changes of cell senescence occur. It is manifested by premature graying; hair loss; hearing loss (DEAFNESS); cataracts (CATARACT); ARTHRITIS; OSTEOPOROSIS; DIABETES MELLITUS; atrophy of subcutaneous fat; skeletal hypoplasia; elevated urinary HYALURONIC ACID; and accelerated ATHEROSCLEROSIS. Many affected individuals develop malignant tumors, especially SARCOMA.",
    "arabic_definition": "الشيخوخة المبكرة (الإنجليزية: Progeria) أو الشيخوخة المبكرة عند الصغار (المعروف أيضا باسم (متلازمة بروجيريا جيلفورد-هاتشينسون) أو HGPS اختصارًا، أو متلازمة بروجيريا)، ، هو اضطراب وراثي صبغي جسدي سائد نادر جدًا، حيث تظهر على الإنسان أعراضٌ تشبه أعراض الشيخوخة ولكن في سن مبكرة جدًا. متلازمة بروجيريا هي واحدة من عدة متلازمات بروجيرويدية.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011371.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudomonas",
    "term_en": "Pseudomonas",
    "term_ar": "زائفة",
    "synonyms": [
      "Pseudomona",
      "Flavimonas",
      "Chryseomonas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic, rod-shaped bacteria widely distributed in nature. Some species are pathogenic for humans, animals, and plants.",
    "arabic_definition": "الزائفة جنس من البروتيوبكتيريا غاما، التي تنتمي إلى رتبة الزوافات الكبيرة. أدى التحليل التسلسلي لـ16S rRNA في الآونة الأخيرة إلى إعادة تعريف التصنيف للأنواع بكتيرية كثيرة. (Pseudomonas)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011549.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteus-vulgaris",
    "term_en": "Proteus vulgaris",
    "term_ar": "متقلبة شائعة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, facultatively anaerobic, rod-shaped bacteria that occurs in soil, fecal matter, and sewage. It is an opportunistic pathogen and causes cystitis and pyelonephritis.",
    "arabic_definition": "متقلبة شائعة (الاسم العلمي: Proteus vulgaris) هي نوع من البكتيريا تتبع جنس المتقلبة من الفصيلة المورغانيلية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011514.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "propionibacterium-acnes",
    "term_en": "Propionibacterium acnes",
    "term_ar": "بروبيونية عدية",
    "synonyms": [
      "Corynebacterium acnes",
      "Corynebacterium parvum",
      "Cutibacterium acnes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A bacteria isolated from normal skin, intestinal contents, wounds, blood, pus, and soft tissue abscesses. It is a common contaminant of clinical specimens, presumably from the skin of patients or attendants.",
    "arabic_definition": "البروبيونية العُدِّيَّة (الإنجليزية: Propionibacterium acnes) هي نوع من البكتيريا اللاهوائية الإجابية الغرام، والتي تعرف بصلتها العُدّ (حب الشباب) الذي هو حالة جلدية شائعة في سن اليفاعة (الشباب). كما يمكن لها أيضا التسبب في أمراض أخرى من قبيل التهاب الجفن، والتهاب باطن المقلة، هذا الأخير يكون شائع الحدوث خاصة بعد إجراء جراحة العيون على مستوى العين.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011425.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "protease-inhibitors",
    "term_en": "Protease Inhibitors",
    "term_ar": "مثبط بروتياز",
    "synonyms": [
      "Inhibitors, Protease",
      "Peptide Peptidohydrolase Inhibitor",
      "Inhibitor, Peptide Peptidohydrolase",
      "Peptidohydrolase Inhibitor, Peptide",
      "Antiprotease",
      "Endopeptidase Inhibitor",
      "Inhibitor, Endopeptidase",
      "Peptidase Inhibitor"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Compounds which inhibit or antagonize biosynthesis or actions of proteases (ENDOPEPTIDASES).",
    "arabic_definition": "مثبط البروتياز (الإنجليزية: Protease inhibitor) عموما يثبط بروتياز واحد أو عدة بروتيازات متجاورة، بالنسبة للتطبيقات الدوائية يمثل الفئة الثانية من العوامل المضادة للفيروسات القهقرية التي تم تطويرها إلى المرحلة السريرية (ابتداء ضد فيروس نقص المناعة البشرية و فيروس التهاب الكبد الفيروسي ج). أول إذن لطرحها في الأسواق يعود لأواخر عام 1995 وكانت هذه نقطة تحول رئيسية في الإستراتيجيات العلاجية ضد فيروس نقص المناعة البشرية. (Protease Inhibitors)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011480.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "polyomaviridae",
    "term_en": "Polyomaviridae",
    "term_ar": "فيروسات تورامية",
    "synonyms": [
      "Alphapolyomavirus",
      "Alphapolyomaviruses",
      "Betapolyomavirus",
      "Betapolyomaviruses",
      "Deltapolyomavirus",
      "Deltapolyomaviruses",
      "Gammapolyomavirus",
      "Gammapolyomaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of small, non-enveloped DNA viruses, infecting mainly MAMMALS.",
    "arabic_definition": "الفيروسات التورامية (الإنجليزية: Polyomaviridae) هي عائلة من الفيروسات، الأثوياء الطبيعون لها هي الثدييات والطيور في المقام الأول. اعتبارًا من عام 2019 اُعترِف بأربعة أجناس و 102 نوع من الفيروس، تسعة منها غير منتمية لجنس محدّد.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D027382.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "proteus-mirabilis",
    "term_en": "Proteus mirabilis",
    "term_ar": "متقلبة رائعة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, facultatively anaerobic, rod-shaped bacteria that is frequently isolated from clinical specimens. Its most common site of infection is the urinary tract.",
    "arabic_definition": "متقلبة رائعة (الاسم العلمي:Proteus mirabilis) هي نوع من البكتيريا تتبع جنس المتقلبة من الفصيلة المورغانيلية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011513.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudomonadaceae",
    "term_en": "Pseudomonadaceae",
    "term_ar": "زوائف",
    "synonyms": [
      "Azomonas",
      "Azomonas agilis",
      "Azotobacteraceae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative bacteria usually found in soil or water and including many plant pathogens and a few animal pathogens.",
    "arabic_definition": "الزوائف (الاسم العلمي: Pseudomonadaceae) هي فصيلة من البكتيريا تتبع رتبة الزوافات من طائفة المتقلبات الغاما.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011548.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "poxviridae",
    "term_en": "Poxviridae",
    "term_ar": "فيروسات جدرية",
    "synonyms": [
      "Poxviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of double-stranded DNA viruses infecting mammals (including humans), birds and insects. There are two subfamilies: CHORDOPOXVIRINAE, poxviruses of vertebrates, and ENTOMOPOXVIRINAE, poxviruses of insects.",
    "arabic_definition": "الفيروسات الجدرية (الإنجليزية: Poxviridae) الفيروسات الجدرية هي عائلة من فيروسات الحمض النووي مزدوجة السلسة. تعتبر الفقاريات والمفصليات مضيفات طبيعية لهذه الفيروسات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011212.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "prognathism",
    "term_en": "Prognathism",
    "term_ar": "بروز الفك",
    "synonyms": [
      "Prognathisms"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A condition marked by abnormal protrusion of the mandible. (Dorland, 27th ed)",
    "arabic_definition": "بروز الفَك أو الفَقَم أو بُرُوز الفَكَّيْن أو الكَسَس (الإنجليزية: prognathism) هو اختلال في العلاقة الموضعية بين الفك السفلي و الفك العلوي بحيث يبرز أحد الفكين أو ينتؤ أكثر من الآخر. يتم تشخيص وتقييم هذا الاعتلال الموضعي سريريا أو إشعاعيا (أشعة الرأس الجانبية) من قبل أخصائيي أي من الاختصاصات الطبية التالية : طب الأسنان، جراحة الفم والوجه والفكين و تقويم الأسنان.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011378.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "poland-syndrome",
    "term_en": "Poland Syndrome",
    "term_ar": "متلازمة بولاند",
    "synonyms": [
      "Syndrome, Poland",
      "Poland Syndactyly",
      "Syndactyly, Poland",
      "Poland Sequence",
      "Poland Anomaly",
      "Anomaly, Poland"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A syndrome which is characterized by symbrachydactyly and aplasia of the sternal head of pectoralis major.",
    "arabic_definition": "متلازمة بولاند (الإنجليزية: Poland's syndrome) أو متوالية بولاند تعرف أيضا بتشوه بولاند أو تسلسل بولاندز هي متلازمة مرضية نادرة يتلازم فيها ارتفاق الأصابع مع عدم أكتمال نمو أو غياب الجزء القصي الضلعي من العضلة الصدرية الكبرى على نفس الناحية من الجسم. في بعض الحالات عضلات من القفص الصدري أو الكتف تكون غير مكتملة النمو أو غير موجودة. (Poland Syndrome)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011045.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pseudohypoparathyroidism",
    "term_en": "Pseudohypoparathyroidism",
    "term_ar": "قصور جارات الدرق الكاذب",
    "synonyms": [
      "Pseudohypoparathyroidisms",
      "Pseudohypoparathyroidism, Type Ib",
      "Pseudohypoparathyroidisms, Type Ib",
      "Type Ib Pseudohypoparathyroidism",
      "Type Ib Pseudohypoparathyroidisms",
      "PHD Ib",
      "PHD1b",
      "Pseudohypoparathyroidism Type 1B"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A hereditary syndrome clinically similar to HYPOPARATHYROIDISM. It is characterized by HYPOCALCEMIA; HYPERPHOSPHATEMIA; and associated skeletal development impairment and caused by failure of response to PARATHYROID HORMONE rather than deficiencies. A severe form with resistance to multiple hormones is referred to as Type 1a and is associated with maternal mutant allele of the ALPHA CHAIN OF STIMULATORY G PROTEIN.",
    "arabic_definition": "قصور جارات الدرق الكاذب أو قُصورُ الدُّرَيقِيَّةِ الكاذِب هي حالة ترتبط بالمقام الأول بمقاومة انسجة الجسم للهرمون الجار درقي. مما يؤدي إلى انخفاض تركيز الكالسيوم وارتفاع نركيز الفوسفات في الدم، مع ارتفاع في مستوى هرمون الغدة الدرقية (PTH)(بسبب انخفاض مستوى الكالسيوم في الدم). (Pseudohypoparathyroidism)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011547.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rothmund-thomson-syndrome",
    "term_en": "Rothmund-Thomson Syndrome",
    "term_ar": "متلازمة روثموند تومسون",
    "synonyms": [
      "Syndrome, Rothmund-Thomson",
      "Poikiloderma Congenitale",
      "Congenitale, Poikiloderma",
      "Congenitales, Poikiloderma",
      "Poikiloderma Congenitales",
      "Poikiloderma of Rothmund-Thomson",
      "Rothmund-Thomson Poikiloderma",
      "Rothmund-Thomson Poikilodermas"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An autosomal recessive syndrome occurring principally in females, characterized by the presence of reticulated, atrophic, hyperpigmented, telangiectatic cutaneous plaques, often accompanied by juvenile cataracts, saddle nose, congenital bone defects, disturbances in the growth of HAIR; NAILS; and TEETH; and HYPOGONADISM.",
    "arabic_definition": "متلازمة روثموند - تومسون (الإنجليزية: rothmund thomson syndrome) وتعرف أيضاً باسم تبكل الجلد الضموري مع اعتام عدسة العين أو تبكل الجلد الخلقي، عبارة عن خلل صبغي متنحي نادر يصيب الجلد. وُصفت لأول مرة بواسطة العالم أوغست فون روثموند (1840:1906) في العام 1868. (Rothmund-Thomson Syndrome)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011038.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "picornaviridae",
    "term_en": "Picornaviridae",
    "term_ar": "فيروسات بيكورناوية",
    "synonyms": [
      "Picornaviruses",
      "Senecavirus",
      "Senecaviruses",
      "Sapelovirus",
      "Sapeloviruses",
      "Avihepatovirus",
      "Avihepatoviruses",
      "Pasivirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of small RNA viruses comprising some important pathogens of humans and animals. Transmission usually occurs mechanically. There are nine genera: APHTHOVIRUS; CARDIOVIRUS; ENTEROVIRUS; ERBOVIRUS; HEPATOVIRUS; KOBUVIRUS; PARECHOVIRUS; RHINOVIRUS; and TESCHOVIRUS.",
    "arabic_definition": "الفيروسات البيكورناوية أو بيكورنافيروس(الإنجليزية: Picornaviridae)، هي مجموعة من الفيروسات ذات الحمض النووي الريبوزي غير المغلفة التي تصيب الفقاريات بما في ذلك الأسماك، الثدييات، والطيور. تمثل هذه الفيروسات عائلة كبيرة من الفيروسات الصغيرة ذات الحمض النووي الريبوزي أحادي السلسلة والموجب، وتتميز بغلاف كروي الشكل يبلغ قطره 30 نانومتر.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010849.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "familial-mediterranean-fever",
    "term_en": "Familial Mediterranean Fever",
    "term_ar": "حمى البحر الأبيض المتوسط العائلية",
    "synonyms": [
      "Periodic Peritonitis",
      "Periodic Peritonitides",
      "Peritonitides, Periodic",
      "Peritonitis, Periodic",
      "Polyserositis, Familial Paroxysmal",
      "Familial Paroxysmal Polyserositides",
      "Paroxysmal Polyserositides, Familial",
      "Paroxysmal Polyserositis, Familial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of HEREDITARY AUTOINFLAMMATION DISEASES, characterized by recurrent fever, abdominal pain, headache, rash, PLEURISY; and ARTHRITIS. ORCHITIS; benign MENINGITIS; and AMYLOIDOSIS may also occur. Homozygous or compound heterozygous mutations in marenostrin gene encoding PYRIN result in autosomal recessive transmission; simple heterozygous, autosomal dominant form of the disease also exists with mutations in the same gene.",
    "arabic_definition": "حمى البحر الأبيض المتوسط العائلية (الإنجليزية: Familial Mediterranean fever) هو اضطراب وراثي مجهول السبب يُصيب عادةً سكان مناطق حوض البحر الأبيض المتوسط، خاصة الأرمن والعرب واليهود الشرقيين.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010505.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pleuropneumonia",
    "term_en": "Pleuropneumonia",
    "term_ar": "التهاب الجنبة والرئة",
    "synonyms": [
      "Pleuropneumonias"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the lung parenchyma that is associated with PLEURISY, inflammation of the PLEURA.",
    "arabic_definition": "الْتِهابُ الجَنَبَةِ والرِّئَة هو التهاب الرئتين والجنبة؛ بينما التهاب الجنبة أو الشوصة يُطلق على التهاب الجنبة وحده. (Pleuropneumonia)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011001.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "periostitis",
    "term_en": "Periostitis",
    "term_ar": "التهاب السمحاق",
    "synonyms": [
      "Periostitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the periosteum. The condition is generally chronic, and is marked by tenderness and swelling of the bone and an aching pain. Acute periostitis is due to infection, is characterized by diffuse suppuration, severe pain, and constitutional symptoms, and usually results in necrosis. (Dorland, 27th ed)",
    "arabic_definition": "التهاب السمحاق (الإنجليزية: periostitis) هو التهاب يحدث في النسيج المغلف للعظم. يحدث هذا الالتهاب نتيجة الإصابة، وله علاقة بالورم الدموي (Hematoma)، الذي من شأنه أن يتلوث.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010522.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peptostreptococcus",
    "term_en": "Peptostreptococcus",
    "term_ar": "هضمونية عقدية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, anaerobic, coccoid bacteria that is part of the normal flora of humans. Its organisms are opportunistic pathogens causing bacteremias and soft tissue infections.",
    "arabic_definition": "الهضمونية العقدية (اللاتينية: Peptostreptococcus) هو جنس من البكتيريا اللاهوائية إيجابية الغرام غير مكونة للأبواغ. خلاياها صغيرة مكورة، قد توجد في سلاسل أو أزواج أو منفردة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010462.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pestivirus",
    "term_en": "Pestivirus",
    "term_ar": "فيروس طاعوني",
    "synonyms": [
      "Pestiviruses",
      "Orthopestivirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of FLAVIVIRIDAE, also known as mucosal disease virus group, which is not arthropod-borne. Transmission is by direct and indirect contact, and by transplacental and congenital transmission. Species include BORDER DISEASE VIRUS, bovine viral diarrhea virus (DIARRHEA VIRUS, BOVINE VIRAL), and CLASSICAL SWINE FEVER VIRUS.",
    "arabic_definition": "فيروس الطاعون (الإنجليزية: Pestivirus) هو جنس من الفيروسات ينتمي لفصيلة الفيروسات المصفرة. فيروسات هذا الجنس تصيب الثدييات بما في ذلك البقريات (الأبقار والأغنام والماعز...) والخنزيريات (خنزير).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010576.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pierre-robin-syndrome",
    "term_en": "Pierre Robin Syndrome",
    "term_ar": "متلازمة بيير روبين",
    "synonyms": [
      "Robin Syndrome, Pierre",
      "Syndrome, Pierre Robin",
      "Glossoptosis, Micrognathia, and Cleft Palate",
      "Pierre Robin Sequence",
      "Sequence, Pierre Robin",
      "Pierre Robin's Sequence",
      "Pierre Robins Sequence",
      "Sequence, Pierre Robin's"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Congenital malformation characterized by MICROGNATHIA or RETROGNATHIA; GLOSSOPTOSIS and CLEFT PALATE. The mandibular abnormalities often result in difficulties in sucking and swallowing. The syndrome may be isolated or associated with other syndromes (e.g., ANDERSEN SYNDROME; CAMPOMELIC DYSPLASIA). Developmental mis-expression of SOX9 TRANSCRIPTION FACTOR gene on chromosome 17q and its surrounding region is associated with the syndrome.",
    "arabic_definition": "متلازمة بيير روبين أو متوالية بيير روبين عبارة عن ثلاثية: صغر حجم الفك السفلي، حلق مشقوق، ولسان مشدود إلى الخلف. وتدعى بمتوالية بيير روبين؛ إذ أنها عبارة عن أحداث متتالية تحدث في الجنين في بداية الحمل؛ أولها عيب في الفك السفلي يؤدي إلى وضع غير طبيعي للسان مما يؤدي إلى شق في الفك العلوي. (Pierre Robin Syndrome)",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010855.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "platybasia",
    "term_en": "Platybasia",
    "term_ar": "تسطح القاعدة",
    "synonyms": [
      "Platybasias",
      "Basilar Impression",
      "Basilar Impressions",
      "Impression, Basilar",
      "Impressions, Basilar"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A developmental deformity of the occipital bone and upper end of the cervical spine, in which the latter appears to have pushed the floor of the occipital bone upward. (Dorland, 27th ed)",
    "arabic_definition": "تَفَلْطُحُ القاعِدَة أو تسطح القاعدة (الإنجليزية: Platybasia)، هو مرض حبلي شوكي يحدث بسبب تلف الرابطة بين العظم القذالي والفقرات العنقية. يسبّب مرض بادجيت هذه الحالة وأيضاً متلازمة سرطانة الخلية القاعدية الوحمانية.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010985.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pneumocystis-pneumonia",
    "term_en": "Pneumocystis Pneumonia",
    "term_ar": "ذات الرئة بالمتكيسة الجؤجؤية",
    "synonyms": [
      "Pneumocystis Pneumonias",
      "PCP Infection",
      "Infection, PCP",
      "PCP Infections",
      "Pneumocystis jirovecii Pneumonia",
      "Pneumonia, Pneumocystis jirovecii",
      "Pneumocystosis",
      "Pneumocystoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pulmonary disease in humans occurring in immunodeficient or malnourished patients or infants, characterized by DYSPNEA, tachypnea, and HYPOXEMIA. Pneumocystis pneumonia is a frequently seen opportunistic infection in AIDS. It is caused by the fungus PNEUMOCYSTIS JIROVECII. The disease is also found in other MAMMALS where it is caused by related species of Pneumocystis.",
    "arabic_definition": "الالتهاب الرئوي بالمتكيسة الجؤجؤية أو ذات الرئة بالمتكيسة الجؤجؤية (الإنجليزية: Pneumocystis jirovecii pneumonia) هو أحد أنواع ذات الرئة سببه خميرة شبيهة بالفطر اسمها المتكيسة الرئوية الجؤجؤية. الالتهاب الرئوي بالمتكيسة الجؤجؤية غير شائع عند الأصحاء، لكنه يحدث عن طريق عدوى انتهازية، فتسبب عدوى الرئة عند المرضى الذين يشكون من نقص المناعة. (Pneumocystis Pneumonia)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D011020.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peptococcaceae",
    "term_en": "Peptococcaceae",
    "term_ar": "هضمونيات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bacteria found in the mouth and intestinal and respiratory tracts of man and other animals as well as in the human female urogenital tract. Its organisms are also found in soil and on cereal grains.",
    "arabic_definition": "الهَضْمونِيَّات (الإنجليزية: Peptococcaceae) هيَ عائلة بَكتيرية ضِمن رُتبة الكلوستريدياليس.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010459.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "peptococcus",
    "term_en": "Peptococcus",
    "term_ar": "هضمونية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, anaerobic, coccoid bacteria that is part of the normal flora of the mouth, upper respiratory tract, and large intestine in humans. Its organisms cause infections of soft tissues and bacteremias.",
    "arabic_definition": "الهضمونية (الاسم العلمي:Peptococcus) هي جنس من البكتيريا تتبع الفصيلة الهضمونيات من رتبة المطثيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D010460.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neisseria-gonorrhoeae",
    "term_en": "Neisseria gonorrhoeae",
    "term_ar": "نيسرية بنية",
    "synonyms": [
      "Gonococcus neisseri",
      "Gonococcus",
      "Merismopedia gonorrhoeae",
      "Micrococcus der gonorrhoe",
      "Micrococcus gonococcus",
      "Diplococcus gonorrhoeae",
      "Micrococcus gonorrhoeae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria primarily found in purulent venereal discharges. It is the causative agent of GONORRHEA.",
    "arabic_definition": "النَيْسَرِيّة البُنِّيّة (الاسم العلمي: Neisseria gonorrhoeae) هي نوع من البكتيريا تتبع جنس النيسرية من فصيلة نظيرات النيسرية. وهي بكتيريا سلبية الغرام ذات شكل كلوي ومزدوجة التكور، وتسبب مرض السيلان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009344.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "myxococcales",
    "term_en": "Myxococcales",
    "term_ar": "جرثومة مخاطية",
    "synonyms": [
      "Myxobacterales",
      "Slime Bacteria",
      "Myxobacteria",
      "Polyangiaceae",
      "Polyangium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An order of rod-shaped, gram-negative fruiting gliding bacteria found in SOIL; WATER; and HUMUS.",
    "arabic_definition": "الجراثيم المخاطية (الإنجليزية: myxobacteria) هي مجموعة من الجراثيم التي تعيش غالباً في التراب وتتغذى على مواد عضوية لاذوابة. تمتلك البكتيريا المخاطية جينومات كبيرة جداً مقارنةً مع البكتيرات الأخرى، مثلاً قد تحتوي جينوماتها على 9-10 ملايين نوكليوتيدات. (Myxococcales)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009231.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma",
    "term_en": "Mycoplasma",
    "term_ar": "مفطورة",
    "synonyms": [
      "Haemobartonella",
      "Eperythrozoon",
      "Pleuropneumonia Like Organisms",
      "PPLO",
      "Mycoplasma putrefaciens"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, mostly facultatively anaerobic bacteria in the family MYCOPLASMATACEAE. The cells are bounded by a PLASMA MEMBRANE and lack a true CELL WALL. Its organisms are pathogens found on the MUCOUS MEMBRANES of humans, ANIMALS, and BIRDS.",
    "arabic_definition": "المفطورة (الاسم العلمي: Mycoplasma) هي جنس من البكتيريا سلبية الغرام تتبع الفصيلة المفطورات من رتبة المفطوريات. وتفتقر إلى الجدار الخلوي لذا تغدو عصية على بعض المضادات الحيوية كالبنسلين وغيره من مجموعة البيتا لاكتام التي تستهدف الجدار الخلوي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009174.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycobacterium-tuberculosis",
    "term_en": "Mycobacterium tuberculosis",
    "term_ar": "متفطرة سلية",
    "synonyms": [
      "Mycobacterium tuberculosis H37Rv"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, aerobic bacteria that produces TUBERCULOSIS in humans, other primates, CATTLE; DOGS; and some other animals which have contact with humans. Growth tends to be in serpentine, cordlike masses in which the bacilli show a parallel orientation.",
    "arabic_definition": "المُتَفَطِّرة السُلِّيّة أو عصية كوخ (الاسم العلمي: Mycobacterium tuberculosis) هو نوع من البكتيريا يتبع جنس المتفطرة من فصيلة المتفطرات. وهي بكتيريا تتسبب في السل أو داء الدرن، لها شكل يشبه العصية ولكنها تتجمع في لُمَّات على شكل كرات متفرقة وسميت بعصية كوخ نسبة إلى مكتشفها الطبيب والبيولوجي الألماني روبرت كوخ سنة 1883.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009169.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycobacterium",
    "term_en": "Mycobacterium",
    "term_ar": "متفطرة",
    "synonyms": [
      "Mycobacteria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, aerobic bacteria. Most species are free-living in soil and water, but the major habitat for some is the diseased tissue of warm-blooded hosts.",
    "arabic_definition": "الجرثومة الفُطْرية أو المتفطرة (الاسم العلمي: Mycobacterium) هي جنس من البكتيريا يتبع فصيلة المتفطرات من رتبة الشعيات. وهو الجنس الوحيد في فصيلة المتفطرات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009161.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycobacterium-leprae",
    "term_en": "Mycobacterium leprae",
    "term_ar": "متفطرة جذامية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, aerobic bacteria that causes LEPROSY in man. Its organisms are generally arranged in clumps, rounded masses, or in groups of bacilli side by side.",
    "arabic_definition": "متفطرة جذامية أو عصية هانسن أو الفطرية الجذامية أو بكتريا الجذام (الاسم العلمي: Mycobacterium leprae) هو نوع من البكتيريا يتبع جنس المتفطرة من فصيلة المتفطرات. وهي العامل المسبب للجذام.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009166.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-pneumoniae",
    "term_en": "Mycoplasma pneumoniae",
    "term_ar": "مفطورة رئوية",
    "synonyms": [
      "Eaton Agent"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Short filamentous organism of the genus Mycoplasma, which binds firmly to the cells of the respiratory epithelium. It is one of the etiologic agents of non-viral primary atypical pneumonia in man.",
    "arabic_definition": "مفطورة رئوية (الاسم العلمي: Mycoplasma pneumoniae) هي نوع من البكتيريا تتبع جنس المفطورة من فصيلة المفطورات. وهي المسبب لذات الرئة بالمفطورات الذي يصيب الإنسان، وهو من أنواع ذات الرئة البكتيري اللانموذجي ومرتبط بداء الراصات الباردة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009177.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycobacterium-bovis",
    "term_en": "Mycobacterium bovis",
    "term_ar": "متفطرة بقرية",
    "synonyms": [
      "BCG",
      "Calmette-Guerin Bacillus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The bovine variety of the tubercle bacillus. It is called also Mycobacterium tuberculosis var. bovis.",
    "arabic_definition": "متفطرة بقرية أو السل البقري (الاسم العلمي: Mycobacterium bovis) هي نوع من البكتيريا يتبع جنس المتفطرة من فصيلة المتفطرات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009163.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasmataceae",
    "term_en": "Mycoplasmataceae",
    "term_ar": "مفطورات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative, non-motile bacteria from human and animal sources. One saprophytic species is known.",
    "arabic_definition": "المفطورات (الاسم العلمي: Mycoplasmataceae) هي فصيلة من البكتيريا تتبع رتبة المفطوريات من طائفة الرخصيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009178.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neisseriaceae",
    "term_en": "Neisseriaceae",
    "term_ar": "نظيرات النيسرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative, parasitic bacteria including several important pathogens of man.",
    "arabic_definition": "نظيرات النيسرية (الاسم العلمي: Neisseriaceae) هي فصيلة من البكتيريا تتبع رتبة النيسريات من طائفة المتقلبات البيتا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009346.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycobacterium-avium",
    "term_en": "Mycobacterium avium",
    "term_ar": "متفطرة الطيور",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A bacterium causing tuberculosis in domestic fowl and other birds. In pigs, it may cause localized and sometimes disseminated disease. The organism occurs occasionally in sheep and cattle. It should be distinguished from the M. avium complex, which infects primarily humans.",
    "arabic_definition": "متفطرة الطيور (الاسم العلمي: Mycobacterium avium) هي نوع من البكتيريا يتبع جنس المتفطرة من فصيلة المتفطرات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009162.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neisseria-meningitidis",
    "term_en": "Neisseria meningitidis",
    "term_ar": "نيسرية سحائية",
    "synonyms": [
      "Meningococcus",
      "Diplokokkus intracellularis meningitidis",
      "Micrococcus meningitidis",
      "Micrococcus meningitidis cerebrospinalis",
      "Neisseria weichselbaumii",
      "Micrococcus intracellularis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic BACTERIA. It is a commensal and pathogen only of humans, and can be carried asymptomatically in the NASOPHARYNX. When found in cerebrospinal fluid it is the causative agent of cerebrospinal meningitis (MENINGITIS, MENINGOCOCCAL). It is also found in venereal discharges and blood. There are at least 13 serogroups based on antigenic differences in the capsular polysaccharides; the ones causing most meningitis infections being A, B, C, Y, and W-135. Each serogroup can be further classified by serotype, serosubtype, and immunotype.",
    "arabic_definition": "النيسرية السحائية (الاسم العلمي: Neisseria meningitidis) هي نوع من بكتريا سلبية الغرام من فصيلة نظيرات النيسرية. ذات تكور مزدوج مشهورة بتسببها بالتهاب السحايا وإنتان الدم.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009345.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasmatales",
    "term_en": "Mycoplasmatales",
    "term_ar": "مفطوريات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An order of highly pleomorphic, gram-negative bacteria including both pathogenic and saprophytic species.",
    "arabic_definition": "المفطوريات (الاسم العلمي: Mycoplasmatales) هي رتبة من البكتيريا تتبع طائفة الرخصيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009179.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "necatoriasis",
    "term_en": "Necatoriasis",
    "term_ar": "داء الدودة الفتاكة",
    "synonyms": [
      "Necatoriases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection of humans or animals with hookworms of the genus NECATOR. The resulting anemia from this condition is less severe than that from ANCYLOSTOMIASIS.",
    "arabic_definition": "داء الدودة الفتاكة (الإنجليزية: Necatoriasis) هو الداء الذي ينتج عن الإصابة بالدودة الشصية الفتاكة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009332.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-mycoides",
    "term_en": "Mycoplasma mycoides",
    "term_ar": "مفطورة فطرانية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The etiological agent of contagious pleuropneumonia (PLEUROPNEUMONIA, CONTAGIOUS) of cattle and goats.",
    "arabic_definition": "مفطورة فطرانية (الإنجليزية: Mycoplasma mycoides) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009176.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "neonatal-abstinence-syndrome",
    "term_en": "Neonatal Abstinence Syndrome",
    "term_ar": "انسحاب حديثي الولادة",
    "synonyms": [
      "Abstinence Syndrome, Neonatal",
      "Abstinence Syndromes, Neonatal",
      "Neonatal Abstinence Syndromes",
      "Syndrome, Neonatal Abstinence",
      "Syndromes, Neonatal Abstinence",
      "Neonatal Substance Withdrawal",
      "Neonatal Substance Withdrawals",
      "Substance Withdrawals, Neonatal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Fetal and neonatal addiction and withdrawal as a result of the mother's dependence on drugs during pregnancy. Withdrawal or abstinence symptoms develop shortly after birth. Symptoms exhibited are loud, high-pitched crying, sweating, yawning and gastrointestinal disturbances.",
    "arabic_definition": "انسحاب حديثي الولادة (بالإنجليزية: Neonatal withdrawal) أو متلازمة الامتناع الوليدي (بالانجليزية: Neonatal abstinence syndrome) أو متلازمة انسحاب الأفيونات الوليدية (بالإنجليزية: Neonatal opioid withdrawal syndrome) هي متلازمة انسحاب دوائي لدى الرضّع، تحدث بسبب التوقّف عن إعطاء الأدوية، سواء كانت مشروعة أو غير مشروعة. قد يحدث التحمل، والاعتماد، والانسحاب نتيجة إعطاء الأدوية بشكل متكرر، أو بعد استخدام قصير الأمد بجرعات عالية، على سبيل المثال، أثناء التنفس الاصطناعي في وحدات العناية المركزة.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D009357.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "retroviridae",
    "term_en": "Retroviridae",
    "term_ar": "فيروس راجع",
    "synonyms": [
      "Retroviruses",
      "Retrovirus",
      "Type C Oncoviruses",
      "Leukoviruses",
      "Leukovirus",
      "Oncoviruses, Type C",
      "C Oncoviruses, Type",
      "C Oncovirus, Type"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Family of RNA viruses that infects birds and mammals and encodes the enzyme reverse transcriptase. The family contains seven genera: DELTARETROVIRUS; LENTIVIRUS; RETROVIRUSES TYPE B, MAMMALIAN; ALPHARETROVIRUS; GAMMARETROVIRUS; RETROVIRUSES TYPE D; and SPUMAVIRUS. A key feature of retrovirus biology is the synthesis of a DNA copy of the genome which is integrated into cellular DNA. After integration it is sometimes not expressed but maintained in a latent state (PROVIRUSES).",
    "arabic_definition": "الفيروس القهقري هو فيروس من فصيلة الفيروسيات القهقرية (الاسم العلمي: Retroviridae) الريبونية ذات جينوم وقطبية موجبة وأنزيم فيروسي يسمى المنتسخة العكسية ينسخ عكسيا الجينومات من صيغة الحمض الريبوني إلى الحمض الأكريبوني، ويشركها في جينومات الخلية، ولا يوبئ إلا خلايا الكائنات الفقاريّة. عندما يصل إلى سيتوبلازما الخلية المضيفة، يستخدم الفيروس أنزيم المنتسخة العكسية خاصته بهدف إنتاج حمض نووي ريبوزي منقوص الأكسجين بدءًا من رنا جينومه، وهي الحالة المعاكسة للأسلوب الاعتيادي، من هنا تأتي تسميته.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012190.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rickettsia",
    "term_en": "Rickettsia",
    "term_ar": "ريكتسيا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, aerobic, rod-shaped bacteria often surrounded by a protein microcapsular layer and slime layer. The natural cycle of its organisms generally involves a vertebrate and an invertebrate host. Species of the genus are the etiological agents of human diseases, such as typhus.",
    "arabic_definition": "الركتسيا أو الرِّيكِتْسِيَّة أو الريكتسيا (الإنجليزية: Rickettsia) هي جنس من البكتيريا تتبع الفصيلة الريكتسية من رتبة الريكتسيات. غالبا ما تنتقل عن طريق المفصليات ولا تعيش هذه البكتيريا إلا متطفلة داخل خلايا العائل ولكن الركتيسيا ليست وسطا بين الفيروسات والبكتيريا إذ أن تركيبها مشابه التركيب الكيميائي للبكتيريا حيث هناك الكلاميديا التي تعتبر من طفيليات الطاقة حيث تتطفل تطفل كامل على المخلوق العائل وهناك الميكوبلازما التي تخلو من الجدار الخلوي.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012281.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rocky-mountain-spotted-fever",
    "term_en": "Rocky Mountain Spotted Fever",
    "term_ar": "حمى الجبال الصخرية المبقعة",
    "synonyms": [
      "Brazilian Spotted Fever",
      "Fever, Brazilian Spotted",
      "Spotted Fever, Brazilian",
      "Rickettsia rickettsii Infection",
      "Infection, Rickettsia rickettsii",
      "Rickettsia rickettsii Infections",
      "Sao Paulo Typhus",
      "Typhus, Sao Paulo"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute febrile illness caused by RICKETTSIA RICKETTSII. It is transmitted to humans by bites of infected ticks and occurs only in North and South America. Characteristics include a sudden onset with headache and chills and fever lasting about two to three weeks. A cutaneous rash commonly appears on the extremities and trunk about the fourth day of illness.",
    "arabic_definition": "حمى الجبال الصخرية المبقعة أو الحمى الزرقاء (بالانجليزية: Rocky Mountain spotted fever)هي عدوى بكتيرية تنتقل عن طريق القراد. ومن الممكن أن تسبب أضراراً جسيمة على الأعضاء الداخلية للجسم مثل القلب والكليتين إذا لم تعالج بطريقة فورية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012373.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhinovirus",
    "term_en": "Rhinovirus",
    "term_ar": "فيروس أنفي",
    "synonyms": [
      "Rhinoviruses",
      "Common Cold Virus",
      "Cold Virus, Common",
      "Cold Viruses, Common",
      "Common Cold Viruses",
      "Coryza Viruses",
      "Coryza Virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of PICORNAVIRIDAE inhabiting primarily the respiratory tract of mammalian hosts. It includes over 100 human serotypes associated with the COMMON COLD.",
    "arabic_definition": "الفيروس الأنفي (الإنجليزية: Rhinovirus) هو جنس فيروسات من عائلة الفيروسات البيكورناوية وهو المسبب الرئيسي للزكام (حوالي 49. 12159 % من حالات الزكام تسببها هذه الفيروسات) الفيروس الأنفي هو أشيع عامل مسبب للخمج الفيروسي لدى البشر، وهو السبب السائد للزكام (نزلة البرد الشائعة).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012229.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhodospirillales",
    "term_en": "Rhodospirillales",
    "term_ar": "وردانيات (بكتيريا)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An order of photosynthetic bacteria representing a physiological community of predominantly aquatic bacteria.",
    "arabic_definition": "الوردانيات (الاسم العلمي: Rhodospirillales) هي رتبة من البكتيريا تتبع طائفة متقلبات ألفا من شعبة المتقلبات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012245.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhabdoviridae",
    "term_en": "Rhabdoviridae",
    "term_ar": "فيروسات ربدية",
    "synonyms": [
      "Rhabdoviruses",
      "Rhabdovirus",
      "Varicosavirus",
      "Varicosaviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of bullet-shaped viruses of the order MONONEGAVIRALES, infecting vertebrates, arthropods, protozoa, and plants. Genera include VESICULOVIRUS; LYSSAVIRUS; EPHEMEROVIRUS; NOVIRHABDOVIRUS; Cytorhabdovirus; and Nucleorhabdovirus.",
    "arabic_definition": "الفيروسات الربدية أو فصيلة الأربوفيروسات رهابدوفيريدي (الإنجليزية: Rhabdoviridae) هي عائلة فيروسات من رتبة الفيروسات السلبية الأحادية و تصيب مجموعة واسعة من الأثوياء من مملكة الحيوان والنبات. الفيروسات الربدية الحيوانية تصيب الحشرات ، الأسماك والثدييات بما في ذلك الاٍنسان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012209.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rinderpest",
    "term_en": "Rinderpest",
    "term_ar": "طاعون البقر",
    "synonyms": [
      "Cattle Plague",
      "Plague, Cattle"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A viral disease of cloven-hoofed animals caused by MORBILLIVIRUS. It may be acute, subacute, or chronic with the major lesions characterized by inflammation and ulceration of the entire digestive tract. The disease was declared successfully eradicated worldwide in 2010.",
    "arabic_definition": "كان طاعون الماشية (ويُعرف أيضًا باسم طاعون الأبقار أو طاعون السهوب) مرضًا فيروسيًا مُعديًا يصيب الماشية والجاموس المائي والعديد من أنواع ذوات الحوافر الأخرى بما في ذلك الغور والجاموس والبيسون والظباء والغزلان والزرافات والحيوانات البرية والخنازير البرية. تتميز أعراض المرض بالحمى وتآكل الفم والإسهال ونخر الأنسجة اللمفاوية كما تميز بارتفاع معدلات الوفيات. (Rinderpest)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012301.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rickettsia-prowazekii",
    "term_en": "Rickettsia prowazekii",
    "term_ar": "ريكتسية بروفاتسيكية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, aerobic bacteria that is the etiologic agent of epidemic typhus fever acquired through contact with lice (TYPHUS, EPIDEMIC LOUSE-BORNE) as well as Brill's disease.",
    "arabic_definition": "الريكتسية البروفاتسيكية أو الريكتسية البروفاسيكية (الإنجليزية: Rickettsia prowazekii) هي إحدى أنواع البكتيريا سلبية الغرام، وهيَ من متقلبات ألفا، وَتُعتبر متطفلة إجبارية داخل الخلية، وهيَ بكتيريا عصوية هوائية، وتعتبر العامل المُسبب للتيفوس الوبائي، وتنتقل عن طريق براز القَمل. يُعتبر السنجاب الطائِر المُضيف المستودع الرئيسي للريكتسية البروفاتسيكية في أمريكا الشمالية، وغالباً ما تُحاط هذه البكتيريا بطبقة محفظة جرثومية بروتينية وبطبقة مُخاطية، كما أنَّ دورة حياة هذه البكتيريا تتضمن مضيف من الفقاريات ومِن اللافقاريات وغالباً ما تكون المفصليات هي المُضيف، ويُعتبر قمل الجسم المُضيف النموذجي في جسم الإنسان، كما أنَّ الريكتسية البروفاتسيكية تَبقى الموجودة في براز المفصليات ثابتة العدوى لعدة شهور.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012283.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rubella-virus",
    "term_en": "Rubella virus",
    "term_ar": "فيروس الحصبة الألمانية",
    "synonyms": [
      "Measles Virus, German",
      "German Measles Virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type (and only) species of RUBIVIRUS causing acute infection in humans, primarily children and young adults. Humans are the only natural host. A live, attenuated vaccine is available for prophylaxis.",
    "arabic_definition": "فيروس الحصبة الألمانية (الإنجليزية: Rubella virus) هو العامل الممراض المسبب لداء الحصبة الألمانية، وهو سبب متلازمة الحميراء الخلقية عندما تحدث العدوى خلال الأسابيع الأولى للحمل. البشر هم المضيف الوحيد المعروف لهذا الفيروس.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012412.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rhizobiaceae",
    "term_en": "Rhizobiaceae",
    "term_ar": "مستجذرات",
    "synonyms": [
      "Neorhizobium galegae",
      "Rhizobium galegae",
      "Bradyrhizobium lupini",
      "Rhizobium lupini"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative bacteria which are saprophytes, symbionts, or plant pathogens.",
    "arabic_definition": "المستجذرات (الاسم العلمي: Rhizobiaceae) هي فصيلة من البكتيريا تتبع رتبة المستجذريات من طائفة متقلبات ألفا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012230.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rickettsiaceae",
    "term_en": "Rickettsiaceae",
    "term_ar": "ريكتسية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative bacteria belonging to the order Rickettsiales.",
    "arabic_definition": "الريكتسية (الاسم العلمي: Rickettsiaceae) هي فصيلة من البكتيريا تتبع رتبة الريكتسيات من طائفة متقلبات ألفا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012287.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "rickettsia-typhi",
    "term_en": "Rickettsia typhi",
    "term_ar": "ريكتسيا تيفوئيدية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The etiologic agent of murine typhus (see TYPHUS, ENDEMIC FLEA-BORNE).",
    "arabic_definition": "ريكتسيا تيفوئيدية (الاسم العلمي: Rickettsia typhi) هي نوع من البكتيريا تتبع جنس الريكتسيا من الفصيلة الريكتسية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012286.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salmonella",
    "term_en": "Salmonella",
    "term_ar": "سلمونيلا",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, facultatively anaerobic, rod-shaped bacteria that utilizes citrate as a sole carbon source. It is pathogenic for humans, causing enteric fevers, gastroenteritis, and bacteremia. Food poisoning is the most common clinical manifestation. Organisms within this genus are separated on the basis of antigenic characteristics, sugar fermentation patterns, and bacteriophage susceptibility.",
    "arabic_definition": "السلمونيلا أو السلمونيلة أو السَّلْمُونِلَّة جنس من العصيات المعوية سلبية الغرام لا تشكل أبواغاً وتنتج كبريت الهيدروجين. طولها بين 1 و7 ميكرون، وسمكها 0.3 - 0.7 ميكرون. (Salmonella)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012475.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scarlet-fever",
    "term_en": "Scarlet Fever",
    "term_ar": "حمى قرمزية",
    "synonyms": [
      "Fever, Scarlet",
      "Fevers, Scarlet",
      "Scarlet Fevers"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with group A streptococci that is characterized by tonsillitis and pharyngitis. An erythematous rash is commonly present.",
    "arabic_definition": "الحُمَّى القُرْمُزِيَّةُ (الإنجليزية: Scarlet fever) (وتسمى أيضًا الحُمَّى القُرْمُزِيَّةُ العَدِيْمَةُ في الأدب القديم)؛ هي أحد الأمراض المعدية الأكثر شيوعا في الأطفال. وتشمل علامات وأعراض التهاب الحلق، والحمى، وطفح جلدي أحمر مميز.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012541.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "septic-shock",
    "term_en": "Septic Shock",
    "term_ar": "صدمة إنتانية",
    "synonyms": [
      "Shock, Endotoxic",
      "Endotoxin Shock",
      "Endotoxin Shocks",
      "Shock, Endotoxin",
      "Shocks, Endotoxin",
      "Shock, Toxic",
      "Toxic Shock",
      "Toxic Shock Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Sepsis associated with HYPOTENSION or hypoperfusion despite adequate fluid resuscitation. Perfusion abnormalities may include but are not limited to LACTIC ACIDOSIS; OLIGURIA; or acute alteration in mental status.",
    "arabic_definition": "الصدمة الإنتانية (الإنجليزية: Septic shock) هي حالة طبية خطيرة تحدث نتيجة الإنتان الذي ينتج عنه تلف وأذى للأعضاء الحيوية كنتيجة للعدوى، مما يتسبب في انخفاض خطير في ضغط الدم واختلال الأيض على المستوى الخلوي. تتسبب البكتيريا عادة في حدوث العدوى الأولية، إلا أن العدوى يمكن أن تكون عدوى فيروسية أو فطرية أو طفيلية، ويمكن لهذه الميكروبات أن تتموضع في أي مكان بالجسم، يمكن أن تؤدي الصدمة الإنتانية إلى الإصابة بمتلازمة الاختلال العضوي المتعدد (والمعروف سابقا باسم فشل الأعضاء المتعدد) والموت.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012772.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "serratia-marcescens",
    "term_en": "Serratia marcescens",
    "term_ar": "بكتيريا الحرارية الذاتية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, facultatively anaerobic, rod-shaped bacteria found in soil, water, food, and clinical specimens. It is a prominent opportunistic pathogen for hospitalized patients.",
    "arabic_definition": "تعد السراتية الذابلة بكتيريا سالبة الغرام تنتمي إلى فصيلة الأمعائيات وهي النوع الأكثر استهدافاً للبشر ضمن هذه الفصيلة وتوجد بشكل طبيعي في الحيوانات والحشرات والنباتات إضافة إلى التربة والمياه كما تشكل جزءاً من الميكروبيوم البشري وتحديداً في الأمعاء حيث تساهم في الحفاظ على توازنها البيئي الطبيعي ما يجعلها كائناً متعايشاً في الظروف العادية ومنتشرة على نطاق واسع في البيئات المحيطة بالإنسان (Serratia marcescens)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012706.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "scrub-typhus",
    "term_en": "Scrub Typhus",
    "term_ar": "تيفوس أكالي",
    "synonyms": [
      "Orientia tsutsugamushi Infection",
      "Infection, Orientia tsutsugamushi",
      "Infections, Orientia tsutsugamushi",
      "Orientia tsutsugamushi Infections",
      "Typhus, Scrub",
      "Tsutsugamushi Disease",
      "Diseases, Tsutsugamushi",
      "Disease, Tsutsugamushi"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute infectious disease caused by ORIENTIA TSUTSUGAMUSHI. It is limited to eastern and southeastern Asia, India, northern Australia, and the adjacent islands. Characteristics include the formation of a primary cutaneous lesion at the site of the bite of an infected mite, fever lasting about two weeks, and a maculopapular rash.",
    "arabic_definition": "التيفوس الأكالي أو حُمَّى تسوتسوغامُوشي هو شكل من أشكال التيفوس التي تسببها الطفيل داخلي الخلايا التسوتسوغاموشية الأورينتية (Orientia tsutsugamushi)، من عائلة الريكتسيات والذ تم عزله والتعرف عليه للمرة الأولى في اليابان عام 1930. (Scrub Typhus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012612.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salmonella-infections",
    "term_en": "Salmonella Infections",
    "term_ar": "داء السلمونيلات",
    "synonyms": [
      "Infections, Salmonella",
      "Infection, Salmonella",
      "Salmonella Infection",
      "Salmonellosis",
      "Salmonelloses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with bacteria of the genus SALMONELLA.",
    "arabic_definition": "داء السلمونيلات عدوى معوية تنتقل بشكل رئيسي عن طريق المواد العذائية، تسببها أنواع مختلفة من الجرائيم التي تتبع عائلة سلمونيلا. هذه البكتيريا تحتفظ بنفسها لمدة طويلة في الوسط الخارجي من جسم الإنسان: في الماء لمدة 5 أشهر، في اللحوم والنقانق تتفاوت المدة من 2 إلى 4 أشهر، في اللحم المجمد لمدة ستة أشهر وأكثر. (Salmonella Infections)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012480.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shigella-dysenteriae",
    "term_en": "Shigella dysenteriae",
    "term_ar": "شيغيلة زحارية",
    "synonyms": [
      "Bacillus dysenteriae",
      "Bacillus dysentericus",
      "Bacillus shigae",
      "Eberthella dysenteriae",
      "Shigella shigae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, facultatively anaerobic, rod-shaped bacteria that is extremely pathogenic and causes severe dysentery. Infection with this organism often leads to ulceration of the intestinal epithelium.",
    "arabic_definition": "الشيغيلة الزحارية (الإنجليزية: Shigella dysenteriae) هو أحد أنواع البكتيريا التابع لجنس الشيغيلة ضمن شعبة المتقلبات. ويضم هذا النوع إثنا عشر نمطاً مصلياً.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012762.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "schistosomiasis-japonica",
    "term_en": "Schistosomiasis japonica",
    "term_ar": "بلهارسية يابانية",
    "synonyms": [
      "Schistosoma japonicum Infection",
      "Infection, Schistosoma japonicum",
      "Infections, Schistosoma japonicum",
      "Schistosoma japonicum Infections",
      "Schistosomiasis japonicum",
      "Schistosoma japonicum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Schistosomiasis caused by Schistosoma japonicum. It is endemic in the ASIA, EASTERN and affects the bowel, liver, and spleen.",
    "arabic_definition": "البلهارسية اليابانية أو البلهارسيا اليابانية (الإنجليزية: Schistosoma japonicum) هي اٍصابة طفيلية كبيرة ومن أحد أهم مسببات البلهارسيا. يصيب على الأقل 31 نوع من الحيوانات البرية منها 9 أكلات لحوم، 16 قوارض، واحد من الرئيسيات و 2 أكلات حشرات و 3 من الشفعيات. (Schistosomiasis japonica)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012554.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "schistosomiasis-mansoni",
    "term_en": "Schistosomiasis mansoni",
    "term_ar": "بلهارسية منسونية",
    "synonyms": [
      "Schistosoma mansoni Infection",
      "Infection, Schistosoma mansoni",
      "Infections, Schistosoma mansoni",
      "Schistosoma mansoni Infections",
      "Schistosomiasis, Intestinal",
      "Intestinal Schistosomiases",
      "Intestinal Schistosomiasis",
      "Schistosomiases, Intestinal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Schistosomiasis caused by Schistosoma mansoni. It is endemic in Africa, the Middle East, South America, and the Caribbean and affects mainly the bowel, spleen, and liver.",
    "arabic_definition": "بلهارسية منسونية أو بلهارسيا منسونية (الإنجليزية: Schistosoma mansoni) هي من أهم طفيليات الاٍنسان، ومن أبرز مسببات البلهارسيا. ينسب اسمها إلى الطبيب الإسكتلندي السير باتريك مانسون، الذي اكتشفها في فرموزا (تايوان). (Schistosomiasis mansoni)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012555.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shigella-flexneri",
    "term_en": "Shigella flexneri",
    "term_ar": "شيغيلة فلكسنرية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A bacterium which is one of the etiologic agents of bacillary dysentery (DYSENTERY, BACILLARY) and sometimes of infantile gastroenteritis.",
    "arabic_definition": "شيغيلة فلكسنرية (الإنجليزية: Shigella flexneri) هو أحد أنواع البكتيريا التابع لجنس الشيغيلة ضمن شعبة المتقلبات. يضم هذا النوع ستة أنماط مصلية مختلفة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012763.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shigella-boydii",
    "term_en": "Shigella boydii",
    "term_ar": "شيغيلة بويدية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "One of the SHIGELLA species that produces bacillary dysentery (DYSENTERY, BACILLARY).",
    "arabic_definition": "شيغيلة بويدية (الإنجليزية: Shigella boydii) هو أحد أنواع البكتيريا التابع لجنس الشيغيلة ضمن شعبة المتقلبات. يضم هذا النوع ثمانية عشرة نمط مصلي مختلف.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012761.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sexually-transmitted-diseases",
    "term_en": "Sexually Transmitted Diseases",
    "term_ar": "مرض منقول جنسيا",
    "synonyms": [
      "Disease, Sexually Transmitted",
      "Diseases, Sexually Transmitted",
      "Sexually Transmitted Disease",
      "STIs",
      "STI",
      "STDs",
      "Venereal Diseases",
      "Diseases, Venereal"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Diseases due to or propagated by sexual contact.",
    "arabic_definition": "الأمراض المنقولة جنسيًا، المعروفة أيضًا بالعدوى المنقولة جنسيًا، هي الأمراض المنقولة غالبًا عن طريق ممارسة الجنس، عادةً الجنس المهبلي، والفموي والشرجي. معظم الأمراض المنقولة جنسيا في البداية لا تسبب الأعراض، مما يزيد من احتمال تمرير هذه الأمراض للآخرين. (Sexually Transmitted Diseases)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012749.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "shigella-sonnei",
    "term_en": "Shigella sonnei",
    "term_ar": "شيغيلة سونية",
    "synonyms": [
      "Bacterium sonnei"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A lactose-fermenting bacterium causing dysentery.",
    "arabic_definition": "الشيغيلة السونية (الإنجليزية: Shigella sonnei) هو أحد أنواع البكتيريا التابع لجنس الشيغيلة ضمن شعبة المتقلبات ويضم نمطاً مصلياً واحداً.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012764.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "salmonella-enteritidis",
    "term_en": "Salmonella enteritidis",
    "term_ar": "سلمونيلا تيفية",
    "synonyms": [
      "Salmonella enterica serovar enteritidis",
      "Salmonella enterica subsp. enterica"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A serotype of Salmonella enterica which is an etiologic agent of gastroenteritis in man and other animals.",
    "arabic_definition": "سلمونيلا تيفية أو كما تسمى سلمونيلا معوية تيفية أو سلمونيلا معوية معوية (الاسم العلمي: Salmonella enterica subsp. enterica) هي نويع من السلمونيلا المعوية، وهي بكتيريا على شكل قضيب، سوطية، وهوائية وهي كذلك بكتيريا سلبية الغرام. (Salmonella enteritidis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012477.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spirochaeta",
    "term_en": "Spirochaeta",
    "term_ar": "ملتوية (جنس)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of flexible, spiral rods found in hydrogen sulfide-containing mud, sewage, and polluted water. None of the species properly referred to in this genus are pathogenic.",
    "arabic_definition": "ملتوية هي جنس بكتيري يُصنف ضمن شُعبة البكتيريا الملتوية. (Spirochaeta)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013142.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "situs-inversus",
    "term_en": "Situs Inversus",
    "term_ar": "أحشاء معكوسة الموضع",
    "synonyms": [
      "Inversus, Situs",
      "Situs Inversus Viscerum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital abnormality in which organs in the THORAX and the ABDOMEN are opposite to their normal positions (situs solitus) due to lateral transposition. Normally the STOMACH and SPLEEN are on the left, LIVER on the right, the three-lobed right lung is on the right, and the two-lobed left lung on the left. Situs inversus has a familial pattern and has been associated with a number of genes related to microtubule-associated proteins.",
    "arabic_definition": "أحشاء معكوسة الموضع أو الانعكاس الجذعي أو انقلاب وضع الأحشاء (بالإنجليزية: Situs inversus) هي حالة خِلقية يتم فيها عكس الأعضاء الحشوية الرئيسية من مواقعها الطبيعية. وعلى الرغم من شيوع المشاكل القلبية في هذه الحالة، لكن معظم الذين يعانون من الأحشاء مقلوبة الموضع ليس لديهم أي أعراض طبية أو مضاعفات ناجمة عن هذه الحالة، حتى أنها لم تُشخَّص حتى ظهور الطب الحديث.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D012857.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spirochaetales",
    "term_en": "Spirochaetales",
    "term_ar": "ملتويات (بكتيريا)",
    "synonyms": [
      "Spirochete",
      "Spirochetes"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An order of slender, flexuous, helically coiled bacteria, with one or more complete turns in the helix.",
    "arabic_definition": "الملتويات (الاسم العلمي: Spirochaetales) هي رتبة من البكتيريا تتبع الطبقة من طائفة الملتويانية.الملتويات أو بكتيريا حلزونية (اللاتينية: Spirochaete) تنتمي إلى أسرة بكتيريا سلبية الغرام، وتتميز بأن خلاياها ملتفة بشكل حلزوني، يتراوح طولها بين 3 - 500 مايكرومتر وقطرها 0.09 - 3 مايكرومتر، تتكاثر لاجنسيًا بواسطة الانقسام الثنائي. يمكن تميزها عن أنواع البكتيريا الأخرى بأن لها سوط محوري يمتد طوليا بين الغشاء الداخلي الجرثومي والغشاء الخارجي في الحيز المحيط بالغشاء الهيولي .",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013144.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spondylitis",
    "term_en": "Spondylitis",
    "term_ar": "التهاب الفقار",
    "synonyms": [
      "Spondylitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Inflammation of the SPINE. This includes both arthritic and non-arthritic conditions.",
    "arabic_definition": "التهاب الفقار (التهاب الفقرات) (الإنجليزية: Spondylitis) هو شكل من أشكال اعتلال الفقار.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013166.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sparganosis",
    "term_en": "Sparganosis",
    "term_ar": "داء المكفنات",
    "synonyms": [
      "Sparganoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection of animals, including fish and man, with a developmental stage of Diphyllobothrium. This stage has recently been referred to as a plerocercoid but the name sparganum has persisted. Therefore, infection of fish or other animals with the plerocercoid larvae is sparganosis. Fish-eating mammals, including man, are the final hosts.",
    "arabic_definition": "داء المكفنات (الإنجليزية: Sparganosis) هي عدوى طفيلية تسببها يرقة من رتبة العوسانات (شراطيات) وبالضبط من جنس اللولبية. أول وصف للطفيلي كان من قبل مانسون عام 1882 م.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013031.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "spirochaetaceae",
    "term_en": "Spirochaetaceae",
    "term_ar": "ملتويات (فصيلة)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of spiral bacteria of the order SPIROCHAETALES.",
    "arabic_definition": "الملتويات (الإنجليزية: Spirochaetaceae) هي فصيلة من البكتيريا الملتوية. بعض أنواع هذه الفصيلة تُعرف بإحداثها مرض الزهري، وداء لايم، والحمى الراجعة وأمراض أُخرى.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013143.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "staphylococcal-infections",
    "term_en": "Staphylococcal Infections",
    "term_ar": "عدوى المكورات العنقودية",
    "synonyms": [
      "Infections, Staphylococcal",
      "Staphylococcal Infection",
      "Staphylococcus aureus Infection",
      "Staphylococcus aureus Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infections with bacteria of the genus STAPHYLOCOCCUS.",
    "arabic_definition": "عدوى المكورات العنقودية أو العدوى العنقودية هي مجموعة من الأمراض المعدية التي تسببها بكتيريا جنس المكورات العنقودية (Staphylococcus). وتتراوح مظاهرها من استعمار الجلد والأغشية المخاطية دون أعراض إلى العدوى الموضعية القيحية، وقد تتطور في الحالات الشديدة إلى تجرثم الدم أو الإنتان وإصابة أعضاء متعددة. (Staphylococcal Infections)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013203.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "treponema-pallidum",
    "term_en": "Treponema pallidum",
    "term_ar": "لولبية شاحبة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The causative agent of venereal and non-venereal syphilis as well as yaws.",
    "arabic_definition": "اللولبية الشاحبة (اللاتينية: Treponema pallidum) نوع من الجراثيم سلبية الغرام من الملتويات، اكتشفها في 1905 عالما جراثيم ألمانيان هما فريتز شاودين وإريخ هوفمان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014210.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "toxoplasmosis",
    "term_en": "Toxoplasmosis",
    "term_ar": "داء المقوسات",
    "synonyms": [
      "Toxoplasma gondii Infection",
      "Infection, Toxoplasma gondii"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The acquired form of infection by Toxoplasma gondii in animals and man.",
    "arabic_definition": "داء المقوسات أو داء البلازميّات السُّمِّية (الإنجليزية: Toxoplasmosis)، إصابة بعدوى سببها طفيلي من الأوالي (البدائيات) ينتقل من الحيوانات المصابة (مثل القط) إلى البشر، وإذا التُقط من قِبل امرأة حامل يمكن أن تؤدي إلى ضرر بالغ للجنين، حيث قد تتطور عنده حالة صغر الرأس في إطار داء المقوسات الخلقي. ينتشر عن طريق التلوث ببراز القطط المصابة به، وقد تكون الإصابة به عن طريق تلوث خضار ببراز القط أو الحيوان ثم يأكل الإنسان الخضار من دون غسيل كاف .",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014123.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tobacco-mosaic-virus",
    "term_en": "Tobacco Mosaic Virus",
    "term_ar": "فيروس تبرقش التبغ",
    "synonyms": [
      "Mosaic Viruses, Tobacco",
      "Mosaic Virus, Tobacco",
      "Tobacco Mosaic Viruses",
      "Viruses, Tobacco Mosaic",
      "Virus, Tobacco Mosaic"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of TOBAMOVIRUS which causes mosaic disease of NICOTIANA. Transmission occurs by mechanical inoculation.",
    "arabic_definition": "فيروس تبرقش التبغ هو من فيروسات الرنا التي تصيب النباتات (فيروسات نباتية). ينتمي هذا الفيروس إلى مجموعة فيروسات تبرقش الدخان (الإنجليزية: Tobamovirus group) ويعد من أكثر الفيروسات انتشاراً في العالم. (Tobacco Mosaic Virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014027.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "toxocariasis",
    "term_en": "Toxocariasis",
    "term_ar": "داء السهميات",
    "synonyms": [
      "Toxocariases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection by round worms of the genus TOXOCARA, usually found in wild and domesticated cats and dogs and foxes, except for the larvae, which may produce visceral and ocular larva migrans in man.",
    "arabic_definition": "داء السهميات (الإنجليزية: Toxocariasis) هو مرض يصيب الإنسان تسببه اليرقات (الديدان غير الناضجة) إما من الدودة المدورة الكلبية (سهمية كلبية، أو الدودة المدورة الهرية (السهمية الهرية)، أو الدودة المدورة الثعلبية (السهمية الكلبية). يُطلق على داء السهميات اسم داء هجرة اليرقات الحشوي في أغلب الأحيان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014120.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tracheitis",
    "term_en": "Tracheitis",
    "term_ar": "التهاب القصبة الهوائية",
    "synonyms": [
      "Tracheitides"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "INFLAMMATION of the TRACHEA that is usually associated with RESPIRATORY TRACT INFECTIONS.",
    "arabic_definition": "التهاب الرغامي أو التهاب القصبة الهوائية (الإنجليزية: Tracheitis) عبارة عن التهاب للقصبه الهوائية. بالرغم من أن القصبة الهوائية تكو جزء من القناة التنفسية السفلية إلا أنها تصنف ضمن العدوى التنفسية العلوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014136.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tracheobronchomegaly",
    "term_en": "Tracheobronchomegaly",
    "term_ar": "تضخم الرغامى والقصبات",
    "synonyms": [
      "Tracheobronchomegalies",
      "Mounier-Kuhn Syndrome",
      "Congenital Tracheobronchomegaly",
      "Congenital Tracheobronchomegalies",
      "Tracheobronchomegalies, Congenital",
      "Tracheobronchomegaly, Congenital"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare and probably congenital condition characterized by great enlargement of the lumen of the trachea and the larger bronchi.",
    "arabic_definition": "«تضخم الرغامى والقصبات» (الإنجليزية: Tracheobronchomegaly) أو «متلازمة منير-كوهن» (الإنجليزية: Mounier-Kuhn syndrome)، هو اضطراب خلقي نادر جدا يحدث في الرئة في المقام الأول ويتسم بتوسع غير طبيعي للشعب الهوائية العليا. القصبة الهوائية والجذع الرئيسي للشعب الهوائية المتوسعان بشكل غير طبيعي يقترنان بالتهاب متكرر في الجهاز التنفسي السفلي وإفراز بلغم صديدي غزير، مما يؤدي في النهاية إلى توسع القصبات وغيرها من مضاعفات أخرى في الجهاز التنفسي.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014137.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptococcus",
    "term_en": "Streptococcus",
    "term_ar": "عقدية (بكتيريا)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, coccoid bacteria whose organisms occur in pairs or chains. No endospores are produced. Many species exist as commensals or parasites on man or animals with some being highly pathogenic. A few species are saprophytes and occur in the natural environment.",
    "arabic_definition": "العِقدية أو السُّبْحِية أو المكورة العقدية (الإنجليزية: Streptococcus) هي جنس بكتيريا كروية إيجابية الغرام تنتمي لشعبة متينات الجدار وبكتيريا حمض اللاكتيك.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013291.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptococcus-pyogenes",
    "term_en": "Streptococcus pyogenes",
    "term_ar": "عقدية مقيحة",
    "synonyms": [
      "Streptococcus Group A",
      "Bacteria, Flesh-Eating",
      "Flesh-Eating Bacteria"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, coccoid bacteria isolated from skin lesions, blood, inflammatory exudates, and the upper respiratory tract of humans. It is a group A hemolytic Streptococcus that can cause SCARLET FEVER and RHEUMATIC FEVER.",
    "arabic_definition": "العِقْديّة المقيِّحة أو المكورة العقدية المقيحة (اللاتينية: Streptococcus pyogenes) نوع من البكتيريا إيجابية الغرام. ومثل كل العقديات الأخرى، لها دور مهم في الأمراض التي تصيب الإنسان.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013297.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "staphylococcus-aureus",
    "term_en": "Staphylococcus aureus",
    "term_ar": "مكورة عنقودية ذهبية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Potentially pathogenic bacteria found in nasal membranes, skin, hair follicles, and perineum of warm-blooded animals. They may cause a wide range of infections and intoxications.",
    "arabic_definition": "المكورات العنقودية الذهبية أو العنقوديات الذهبيّة أو البكتيريا الكروية العنقودية الذهبية (اللاتينية: Staphylococcus aureus) نوع من البكتيريا إيجابية الغرام، عادة ما تعيش على جلد الإنسان أو في جوف الأنف أو في الجهاز التنفسي. يتصف هذا النوع من الجراثيم بعدة صفات: إيجابية التخثير، تفكيك الدنا، واستهلاكه للسكر من نوع المانيتول.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013211.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptococcus-pneumoniae",
    "term_en": "Streptococcus pneumoniae",
    "term_ar": "عقدية رئوية",
    "synonyms": [
      "Diplococcus pneumoniae",
      "Pneumococcus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A gram-positive organism found in the upper respiratory tract, inflammatory exudates, and various body fluids of normal and/or diseased humans and, rarely, domestic animals.",
    "arabic_definition": "العقديَّة الرئويَّة (الاسم العلمي: Streptococcus pneumoniae) أو المكوَّرة الرئويَّة (الاسم العلمي: Pneumococcus) هي بكتيريا إيجابية الغرام، وهي عضو من جنس العقديات لاهوائي اختياري يسبب انحلال الدم من النوع ألفا (تحت الظروف الهوائية) وانحلال الدم من النوع بيتا (تحت الظروف اللاهوائية)، وعادة ما توجد في أزواج، ولا تشكل أبواغ، كما أنها غير متحركة. وباعتبارها جرثومة ممرضة بشريّة مهمة، تمّ اعتبار المكورة الرئوية كسبب رئيسي للالتهاب الرئوي في أواخر القرن التاسع عشر، وهو موضوع العديد من دراسات المناعة الخلطية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013296.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptobacillus",
    "term_en": "Streptobacillus",
    "term_ar": "سلسلية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, facultatively anaerobic, rod-shaped bacteria that require SERUM; ASCITIC FLUID; or BLOOD for growth. Its organisms inhabit the THROAT; and NASOPHARYNX of wild and laboratory rats and cause one form of RAT-BITE FEVER in man.",
    "arabic_definition": "السلسلية (الإنجليزية: Streptobacillus) هو جنس من البكتيريا الهوائية سلبية الغرام. تنمو هذه البكتيريا في المزارع على شكل سلاسل قضبان، والأنواع المرتبطة بالعدوى: السِّلْسِلِيَّةُ الطَّوْقِيَّةُ الشَّكِل.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013288.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "simian-virus-40",
    "term_en": "Simian virus 40",
    "term_ar": "فيروس قردي 40",
    "synonyms": [
      "SV40 Virus",
      "SV40 Viruses",
      "Vacuolating Agent",
      "Vacuolating Agents",
      "Polyomavirus macacae",
      "SV 40 Virus",
      "SV 40 Viruses",
      "SV40"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of POLYOMAVIRUS originally isolated from Rhesus monkey kidney tissue. It produces malignancy in human and newborn hamster kidney cell cultures.",
    "arabic_definition": "الفيروسُ القِرْدِيُّ 40 (الإنجليزية: Simian virus 40 or Simian vacuolating virus 40 or SV40) هو فيروس تورامي من فيروسات الدنا يصيب السعادين والإنسان حيث يتسبب بأورام لكن في معظم الأحيان يمر كعدوى كامنة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013539.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptomyces",
    "term_en": "Streptomyces",
    "term_ar": "متسلسلة (بكتيريا)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of bacteria that form a nonfragmented aerial mycelium. Many species have been identified with some being pathogenic. This genus is responsible for producing a majority of the ANTI-BACTERIAL AGENTS of practical value.",
    "arabic_definition": "المتسلسلة أو جْنس الفطُور العْقِديَّة (اللاتينية: Streptomyces) هي من أكبر أجناس فصيلة المتسلسلات، وهي الجنس النموذجي لهذه الفصيلة. وصف أكثر من 500 نوع ضمن هذا الجنس.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013302.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sympathomimetics",
    "term_en": "Sympathomimetics",
    "term_ar": "محاكي الودي",
    "synonyms": [
      "Sympathomimetic",
      "Sympathomimetic Agent",
      "Agent, Sympathomimetic",
      "Sympathomimetic Drug",
      "Drug, Sympathomimetic",
      "Sympathomimetic Agents",
      "Agents, Sympathomimetic",
      "Sympathomimetic Drugs"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs that mimic the effects of stimulating postganglionic adrenergic sympathetic nerves. Included here are drugs that directly stimulate adrenergic receptors and drugs that act indirectly by provoking the release of adrenergic transmitters.",
    "arabic_definition": "المحاكيات الودية أو المقلدات الودية (الإنجليزية: Sympathomimtics) بشكل عام والشادات الأدرينالية (الإنجليزية: adrenergic agonist) كمجموعة رئيسية منها هي مجموعة من الأدوية العلاجية التي تحاكي تأثير الأدرينالين والنورأدرينالين منتجا تأثيرا يماثل تنبيه الأعصاب الودية على الأعضاء. يتم تقسيم منبهات الودي إلى كاتيكول أمينات ومركبات غير الكاتيكول أمينات. (Sympathomimetics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013566.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "strongyloidiasis",
    "term_en": "Strongyloidiasis",
    "term_ar": "داء الأسطوانيات (إنسان)",
    "synonyms": [
      "Strongyloidiases",
      "Anguilluliasis",
      "Anguilluliases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with nematodes of the genus STRONGYLOIDES. The presence of larvae may produce pneumonitis and the presence of adult worms in the intestine could lead to moderate to severe diarrhea.",
    "arabic_definition": "داء الأسطوانيات (الإنجليزية: Strongyloidiasis) هو مرض طفيلي يصيب الإنسان تسببه الاسطوانيات البرازية. أسطوانيات أخرى مثل الأسطوانية فيلبورني (S. fülleborni) التي تصيب الشمبانزي البابون قد تنتج عدوى محدودة للبشر.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013322.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptococcus-mutans",
    "term_en": "Streptococcus mutans",
    "term_ar": "عقدية طافرة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A polysaccharide-producing species of STREPTOCOCCUS isolated from human dental plaque.",
    "arabic_definition": "العقدية الطافرة (اللاتينية: Streptococcus mutans) هي بكتيريا إيجابية الغرام لا هوائية اٍختياريا، تواجد غالبا في التجويف الفموي للإنسان، وتعد مساهمًا كبيرًا في تسوس الأسنان. اكتشف كلارك البكتيريا أول مرة سنة 1924.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013295.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "syndactyly",
    "term_en": "Syndactyly",
    "term_ar": "ارتفاق الأصابع",
    "synonyms": [
      "Syndactylies",
      "Syndactylia",
      "Syndactylias",
      "Polysyndactyly"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A congenital anomaly of the hand or foot, marked by the webbing between adjacent fingers or toes. Syndactylies are classified as complete or incomplete by the degree of joining. Syndactylies can also be simple or complex. Simple syndactyly indicates joining of only skin or soft tissue; complex syndactyly marks joining of bony elements.",
    "arabic_definition": "ارتفاق الأصابع أو التصاق الأصابع (الإنجليزية: Syndactyly) هو أكثر عيوب اليد التكوينية انتشاراً. وتحدث أكثر من 50% من حالات الالتصاق بين الإصبعين الوسطى والبنصر، يليه الالتصاق بين الخنصر والبنصر، ثم بين الالوسطى والسبابة.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013576.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "staphylococcus-epidermidis",
    "term_en": "Staphylococcus epidermidis",
    "term_ar": "عنقودية بشروية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of STAPHYLOCOCCUS that is a spherical, non-motile, gram-positive, chemoorganotrophic, facultative anaerobe. Mainly found on the skin and mucous membrane of warm-blooded animals, it can be primary pathogen or secondary invader.",
    "arabic_definition": "العُنقودية البَشْرَوية (من البشرة) أو عنقودية الجلد الخارجي (الاسم العلمي:Staphylococcus epidermidis) هي نوع من البكتيريا تتبع جنس العنقودية من فصيلة المكورات العنقودية. المكورات العنقودية البشروية هي نوع من البكتيريا موجبة الجرام وواحدة من أكثر من 40 نوعاً تنتمي إلى جنس المكورات العنقودية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013212.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterococcus-faecalis",
    "term_en": "Enterococcus faecalis",
    "term_ar": "معوية البراز",
    "synonyms": [
      "Streptococcus faecalis",
      "Streptococcus Group D"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, coccoid bacteria commonly isolated from clinical specimens and the human intestinal tract. Most strains are nonhemolytic.",
    "arabic_definition": "معوية البراز (الاسم العلمي: Enterococcus faecalis) هي نوع من البكتيريا تتبع جنس المكورة المعوية من فصيلة المكورات المعوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013293.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptococcus-agalactiae",
    "term_en": "Streptococcus agalactiae",
    "term_ar": "عقدية قاطعة للدر",
    "synonyms": [
      "Streptococcus Group B"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A bacterium which causes mastitis in cattle and occasionally in man.",
    "arabic_definition": "العقدية القاطعة للدر (اللاتينية: Streptococcus agalactiae) وتعرف أيضا العقدية من المجموعة ب (الإنجليزية: Group B streptococcus) ومختصرها \"GBS\"، هي بكتيريا موجبة الغرام مكورة عقدية تميل لإنشاء السلاسل سلبية الكاتالاز ومحللة للدم من النوع بيتا ولاهوائية مخيرة. بشكل عام، تتواجد هذه الجرثومة في الأمعاء البشرية وهي جزء من النبيت الجرثومي المعوي (الميكروبيوتا) بالإضافة إلى تواجدها في الجهاز البولي التناسلي لدى ما يقارب ال 30٪ من البشر البالغين الذين يُعدون من حاملي البكتيريا، لكنهم غير مصابين بالمرض (لا توجد اعراض).",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013292.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "subacute-sclerosing-panencephalitis",
    "term_en": "Subacute Sclerosing Panencephalitis",
    "term_ar": "التهاب الدماغ الشامل المصلب تحت الحاد",
    "synonyms": [
      "Panencephalitides, Subacute Sclerosing",
      "Sclerosing Panencephalitides, Subacute",
      "Subacute Sclerosing Panencephalitides",
      "SSPE",
      "Sclerosing Panencephalitis, Subacute",
      "Panencephalitis, Subacute Sclerosing",
      "Leukoencephalitis, Van Bogaert's",
      "Leukoencephalitis, Van Bogaert"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A rare, slowly progressive encephalitis caused by chronic infection with the MEASLES VIRUS. The condition occurs primarily in children and young adults, approximately 2-8 years after the initial infection. A gradual decline in intellectual abilities and behavioral alterations are followed by progressive MYOCLONUS; MUSCLE SPASTICITY; SEIZURES; DEMENTIA; autonomic dysfunction; and ATAXIA. DEATH usually occurs 1-3 years after disease onset. Pathologic features include perivascular cuffing, eosinophilic cytoplasmic inclusions, neurophagia, and fibrous gliosis. It is caused by the SSPE virus, which is a defective variant of MEASLES VIRUS. (From Adams et al., Principles of Neurology, 6th ed, pp767-8)",
    "arabic_definition": "الْتِهابُ الدِّماغِ الشَّامِلُ المُصَلِّبُ تحت الحادّ (الإنجليزية: Subacute sclerosing panencephalitis) هو نوع نادر ومُزمن من التهاب الدماغ التَقَدُمي، يُسببه عدوى مُسْتَديمة بفيروس الحصبة (والذي من المُمكن أن يَكون بسبب طَفْرَة الفَيروس نَفسه). يُصيب في المَقام الأول الأطفال والبالغين الصغار، وتُشير الدراسات إلى أن واحد من كُل 10000 شخص مُصاب بفيروس الحَصَبَة سوف يُصاب بالتهاب الدماغ الشامل المصلب تحت الحاد.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013344.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptococcaceae",
    "term_en": "Streptococcaceae",
    "term_ar": "سبحيات (فصيلة)",
    "synonyms": [
      "Gaffkya homari"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-positive non-sporing bacteria including many parasitic, pathogenic, and saprophytic forms.",
    "arabic_definition": "السبحيات (الإنجليزية: Streptococcaceae) هي عائلة من البكتيريا موجبة غرام التي تنتمي لرتبة بكتيريا حمض اللبنيك. تشمل الأجناس التمثيلية النموذجية العصية اللبنية واللاكتوفم والبليباكتر والسبحية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013289.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptomycetaceae",
    "term_en": "Streptomycetaceae",
    "term_ar": "متسلسلات (بكتيريا)",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of soil bacteria. It also includes some parasitic forms.",
    "arabic_definition": "المتسلسلات (اللاتينية: Streptomycetaceae) فصيلة من الشعاوات، وهي الفصيلة الوحيدة في تحت رتبة Streptomycineae. تشمل جنس المتسلسلة التي تُستخدم أنواعها كمصدر للمضادات الحيوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013306.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "streptococcus-sanguis",
    "term_en": "Streptococcus sanguis",
    "term_ar": "عقدية دموية",
    "synonyms": [
      "Streptococcus sanguinis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A gram-positive organism found in dental plaque, in blood, on heart valves in subacute endocarditis, and infrequently in saliva and throat specimens. L-forms are associated with recurrent aphthous stomatitis.",
    "arabic_definition": "العِقْدِيَّةُ الدَّمويَّة (اللاتينية: Streptococcus sanguinis، وكانت تُسمى Streptococcus sanguis) نوع من البكتيريا اللاهوائية المُخيَّرة موجبة الغرام ومن في مجموعة العقيدات المخضرة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013298.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "synostosis",
    "term_en": "Synostosis",
    "term_ar": "التحام عظمي",
    "synonyms": [
      "Synostoses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A union between adjacent bones or parts of a single bone formed by osseous material, such as ossified connecting cartilage or fibrous tissue. (Dorland, 27th ed)",
    "arabic_definition": "الالتحام العظمي أو التحام العظام (الإنجليزية: Synostosis) هو التصاق عظمَيْن ببعضهما. قد يكون الالتصاق طبيعياً كما يحدث عند سن البلوغ حيث يلتحم المشاش، ولكن قد يكون الالتصاق غير طبيعياً.",
    "specialty": "Medicine",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013580.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "sympatholytics",
    "term_en": "Sympatholytics",
    "term_ar": "حال الودي",
    "synonyms": [
      "Sympatholytic Agent",
      "Agent, Sympatholytic",
      "Sympatholytic",
      "Sympatholytic Drug",
      "Drug, Sympatholytic",
      "Sympathetic-Blocking Agents",
      "Agents, Sympathetic-Blocking",
      "Sympatholytic Agents"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Drugs that inhibit the actions of the sympathetic nervous system by any mechanism. The most common of these are the ADRENERGIC ANTAGONISTS and drugs that deplete norepinephrine or reduce the release of transmitters from adrenergic postganglionic terminals (see ADRENERGIC AGENTS). Drugs that act in the central nervous system to reduce sympathetic activity (e.g., centrally acting alpha-2 adrenergic agonists, see ADRENERGIC ALPHA-AGONISTS) are included here.",
    "arabic_definition": "حال الودي أو داحض الودي أو مثبط تأثير العصب الودي (الإنجليزية: Sympatholytic) هو عقار أو دواء يعاكس التأثيرات مسار بيولوجي الناتجة عن جهد فعل لعصب بعد عقدي في أعضاء مستجيبة معصّبة بواسطة الجهاز العصبي الودي. تُستخدم هذه العقاقير لعدة وظائف منها على سبيل المثال خافضات ضغط الدم، كما تُستخدم في علاج القلق مثل اضطراب القلق العام، اضطراب الهلع واضطراب الكرب التالي للصدمة النفسية. (Sympatholytics)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013565.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "suppuration",
    "term_en": "Suppuration",
    "term_ar": "قيح",
    "synonyms": [
      "Pus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A pathologic process consisting in the formation of pus.",
    "arabic_definition": "القَيْحُ أو الصَّدِيدُ (الإنجليزية: Pus) (ويُسمَّى بالعامية المد) هو إفرازات، عادة تتميز باللون الأصفر المائل للبياض «البيج»، أو الأصفر البني، أو الأصفر، يتشكل بسبب الالتهابات وبسبب العدوى. من المعروف أن تراكم القيح في مناطق محصورة كما في الأنسجة المغلقة يكوِّن ما يعرف بالخُراج. (Suppuration)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013492.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "staphylococcus",
    "term_en": "Staphylococcus",
    "term_ar": "مكورة عنقودية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, facultatively anaerobic, coccoid bacteria. Its organisms occur singly, in pairs, and in tetrads and characteristically divide in more than one plane to form irregular clusters. Natural populations of Staphylococcus are found on the skin and mucous membranes of warm-blooded animals. Some species are opportunistic pathogens of humans and animals.",
    "arabic_definition": "المكورة العنقودية أو البكتيريا العنقودية أو جرثومية عنبية أو العنقودية هو جنس من البكتيريا من فصيلة العنقوديات، وصفها يأتي من اللغة اليونانية \"σταφυλόκοκκος\" وتعني تقريبًا كريات عنقود العنب. العنقودية عبارة عن مكوّرات غير متحرّكة، لا تبني البوغ، ترتيبها في العادة على شكل العناقيد، تتلوّن إيجابيّا حسب طريقة غرام، وإجمالًا لاهوائية اختياريا (باستثناء: Staphylococcus aureus subsp.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D013210.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vibrio-cholerae",
    "term_en": "Vibrio cholerae",
    "term_ar": "ضمة الكوليرا",
    "synonyms": [
      "Bacillus cholerae-asiaticae",
      "Vibrio comma",
      "Microspira comma",
      "Pacinia cholerae-asiaticae",
      "Spirillum cholerae",
      "Spirillum cholerae-asiaticae",
      "Vibrio albensis",
      "Vibrio cholera"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The etiologic agent of CHOLERA.",
    "arabic_definition": "ضمة الكوليرا (اللاتينية: Vibrio cholerae) هي نوع من البكتيريا سالبة الغرام، لاهوائية اختيارية، ذات شكل منحنٍ يشبه الفاصلة. تعيش هذه البكتيريا بشكل طبيعي في المياه المالحة أو قليلة الملوحة، حيث تلتصق بسهولة بالقشور المحتوية على الكيتين مثل تلك الموجودة في السرطانات والجمبري والمحاريات الأخرى.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014734.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vesicular-stomatitis-indiana-virus",
    "term_en": "Vesicular stomatitis Indiana virus",
    "term_ar": "فيروس التهاب الفم الحويصلي",
    "synonyms": [
      "Indiana vesiculovirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The type species of VESICULOVIRUS causing a disease symptomatically similar to FOOT-AND-MOUTH DISEASE in cattle, horses, and pigs. It may be transmitted to other species including humans, where it causes influenza-like symptoms.",
    "arabic_definition": "فيروس التهاب الفم الحويصلي إنديانا (الإنجليزية: Vesicular stomatitis Indiana virus) (غالباً ما يشار إليها بالاختصار ف.س.ف) هو فيروس من عائلة فيروسات ربدية. حيث ينتمي فيروس داء الكلب المعروف إلى نفس العائلة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014721.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vibrionaceae",
    "term_en": "Vibrionaceae",
    "term_ar": "ضماوات",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of gram-negative bacteria whose members predominate in the bacterial flora of PLANKTON; FISHES; and SEAWATER. Some members are important pathogens for humans and animals.",
    "arabic_definition": "الضماوات (الإنجليزية: Vibrionaceae) هي عائلة بكتيريا من متقلبات غاما، تعيش في المياه العذبة أو المالحة، والعديد من أنواعها ممرضة بما في ذلك النوع المميز لها الضمة الكوليرية وهو المسؤول عن الكوليرا، أغلب البكتيريا الضيائية حيوياً تنتمي لهذه العائلة وتعيش عادةً في تكافل مع حيوانات أعماق البحار. الضماوات هي بكتيريا سلبية الغرام لاهوائية اختيارياً وقادرة على التخمير، تحتوي على أكسيداز ولها سوط واحد أو أكثر في المنطقة القطبية عموماً، حددت هذه الخصائص في الأصل العائلة التي قسمت إلى أربعة أجناس، إثنين منها الضمة واللميعة توافق المجموعة الحديثة، على الرغم من تحديد العديد من الأجناس الجديدة وقد أظهرت الدراسات الوراثية الأعضاء الأصليين الآخرين وهما الغازية والقوربية وتنتمي إلى عائلات منفصلة، وتضم عائلة الضماوات حاليا ثمانية أجناس نشرت بشكل معتمد.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014737.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "yellow-fever",
    "term_en": "Yellow Fever",
    "term_ar": "حمى صفراء",
    "synonyms": [
      "Fevers, Yellow",
      "Fever, Yellow",
      "Yellow Fevers"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute infectious disease primarily of the tropics, caused by a virus and transmitted to man by mosquitoes of the genera Aedes and Haemagogus. The severe form is characterized by fever, HEMOLYTIC JAUNDICE, and renal damage.",
    "arabic_definition": "الحُمّى الصَّفراء هي مرض فيروسي حاد ينتقل عن طريق لدغات بعض أنواع البعوض الحاملة للفيروس، وينتشر بصورة خاصة في المناطق الاستوائية من أفريقيا وأمريكا الجنوبية. ويسبب المرض فيروس الحمى الصفراء، وهو فيروس ينتمي إلى جنس الفيروسات المصفرة. (Yellow Fever)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015004.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "yersinia-pestis",
    "term_en": "Yersinia pestis",
    "term_ar": "يرسينيا طاعونية",
    "synonyms": [
      "Bacillus pestis",
      "Pasteurella pestis",
      "Bacterium pestis",
      "Yersinia pseudotuberculosis subsp. pestis",
      "Pestisella pestis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The etiologic agent of PLAGUE in man, rats, ground squirrels, and other rodents.",
    "arabic_definition": "اليرسينية الطاعونية (الاسم العلمي: Yersinia pestis) (المعروفة سابقًا باسم الاستوريلا الطاعونية) (الاسم العلمي: Pasteurella pestis) ويسمى أيضًا طاعون الانديز حيث ينتشر في جبال الأنديز بأمريكا الجنوبية. و هي بكتيريا عصوية سالبة الجرام وغير متحركة، ولا تحتوي على جراثيم مرتبطة بكل من مرض اليرسينية السلية الكاذبة واليرسينية القولونية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015010.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "whooping-cough",
    "term_en": "Whooping Cough",
    "term_ar": "سعال ديكي",
    "synonyms": [
      "Cough, Whooping",
      "Pertussis",
      "Pertusses",
      "Bordetella pertussis Infection, Respiratory"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A respiratory infection caused by BORDETELLA PERTUSSIS and characterized by paroxysmal coughing ending in a prolonged crowing intake of breath.",
    "arabic_definition": "السعال الديكي أو الشاهوق أو الشَّهْقة (الإنجليزية: Whooping Cough) مرض بكتيري حاد، يصيب الأطفال دون سن الخامسة. تعتبر جرثومة البروديتيلا الشاهوقية (Bordetella Pertussis) المسبب المرضي - pathogen) الرئيسي للشاهوق.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014917.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "vitamin-b-complex",
    "term_en": "Vitamin B Complex",
    "term_ar": "فيتامينات بي",
    "synonyms": [
      "Neurobion",
      "B Vitamins",
      "B Vitamin",
      "Vitamin, B"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of water-soluble vitamins, some of which are COENZYMES.",
    "arabic_definition": "فيتامينات بي (الإنجليزية: B vitamins) هي مجموعة من الفيتامينات القابلة للذوبان في الماء والتي تلعب أدوارًا مهمة في استقلاب الخلايا وتكوين خلايا الدم الحمراء. على الرغم من أن هذه الفيتامينات تشترك في أسماء مماثلة، إلا إنها مركبات متنوعة مختلفة كيميائيا عن بعض. (Vitamin B Complex)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014803.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "waardenburg-syndrome",
    "term_en": "Waardenburg Syndrome",
    "term_ar": "متلازمة واردينبيرغ",
    "synonyms": [
      "Syndrome, Waardenburg",
      "Waardenburg's Syndrome",
      "Syndrome, Waardenburg's",
      "Waardenburgs Syndrome",
      "Klein Syndrome",
      "Syndrome, Klein",
      "Klein's Syndrome",
      "Kleins Syndrome"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Rare, autosomal dominant disease with variable penetrance and several known clinical types. Characteristics may include depigmentation of the hair and skin, congenital deafness, heterochromia iridis, medial eyebrow hyperplasia, hypertrophy of the nasal root, and especially dystopia canthorum. The underlying cause may be defective development of the neural crest (neurocristopathy). Waardenburg's syndrome may be closely related to piebaldism. Klein-Waardenburg Syndrome refers to a disorder that also includes upper limb abnormalities.",
    "arabic_definition": "متلازمة واردينبيرغ هو اضطراب وراثي نادر يتميز في معظم الأحيان مع درجات متفاوتة من الصمم، والعيوب الطفيفة في الهياكل الناشئة عن القمة العصبية، واضطرابات في تكون العضل، واضطرابات في السمع والجلد والعينين بشكل أساسي وقد يصيب القولون أو الأطراف العلوية خاصة اليدين. (Waardenburg Syndrome)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014849.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "superinfection",
    "term_en": "Superinfection",
    "term_ar": "عدوى إضافية",
    "synonyms": [
      "Superinfections",
      "Microbial Superinvasion",
      "Microbial Superinvasions",
      "Superinvasions, Microbial",
      "Superinvasion, Microbial"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A frequent complication of drug therapy for microbial infection. It may result from opportunistic colonization following immunosuppression by the primary pathogen and can be influenced by the time interval between infections, microbial physiology, or host resistance. Experimental challenge and in vitro models are sometimes used in virulence and infectivity studies.",
    "arabic_definition": "العدوى الفوقية هي حدوث إنتان ثانٍ يتراكب مع عدوى سابقة، وينجم خصوصًا عن عامل ميكروبي مختلف، سواء كان مصدره خارجيًا أو داخليًا، ويكون مقاومًا للعلاج المستخدم لمكافحة العدوى الأولى. ومن أمثلة ذلك في علم الجراثيم فرط نمو بكتيريا المطثية العسيرة الموجودة طبيعيًا في الجسم، والذي قد يحدث عقب العلاج باستخدام مضاد حيوي واسع الطيف، وكذلك الإصابة بالالتهاب الرئوي أو إنتان الدم الناجم عن بكتيريا الزائفة الزنجارية لدى بعض المرضى الذين يعانون من نقص العدلات أو ضعف المناعة. (Superinfection)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015163.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "yersinia-enterocolitica",
    "term_en": "Yersinia enterocolitica",
    "term_ar": "يرسينيا القولون",
    "synonyms": [
      "Bacterium enterocoliticum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of the genus YERSINIA, isolated from both man and animal. It is a frequent cause of bacterial gastroenteritis in children.",
    "arabic_definition": "يرسينيا القولون (بالإنجليزية يرسينيا القولون) هي بكتيريا عصوية سالبة لصبغة جرام، تنتمي لعائلة البكتيريا المعوية. وهي قادرة على الحركة على درجات الحرارة بين 22-29 درجة مئوية لكنها تفقد قدرتها على الحركة على درجة حرارة جسم الإنسان الطبيعية. (Yersinia enterocolitica)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015008.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "yersinia-pseudotuberculosis",
    "term_en": "Yersinia pseudotuberculosis",
    "term_ar": "يرسينية سلية كاذبة",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A human and animal pathogen causing mesenteric lymphadenitis, diarrhea, and bacteremia.",
    "arabic_definition": "يرسينية سلية كاذبة (الاسم العلمي: Yersinia pseudotuberculosis) هي نوع من البكتيريا تتبع جنس اليرسينية من فصيلة الأمعائيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015011.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycobacterium-avium-complex",
    "term_en": "Mycobacterium avium Complex",
    "term_ar": "معقد المتفطرات الطيرية",
    "synonyms": [
      "Mycobacterium avium-intracellulare",
      "MAIC",
      "Mycobacterium avium-intracellulare Complex",
      "Battey Bacillus",
      "Nocardia intracellularis",
      "Mycobacterium intracellulare"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A complex that includes several strains of M. avium. M. intracellulare is not easily distinguished from M. avium and therefore is included in the complex. These organisms are most frequently found in pulmonary secretions from persons with a tuberculous-like mycobacteriosis. Strains of this complex have also been associated with childhood lymphadenitis and AIDS; M. avium alone causes tuberculosis in a variety of birds and other animals, including pigs.",
    "arabic_definition": "مركب المتفطرات الطيرية (الإنجليزية: Mycobacterium avium complex) هو عبارة عن مجموعة من المواد المرتبطة وراثيا البكتيريا تنتمي إلى عائلة المتفطرات. ويشمل مركب المتفطرة الطيرية- المتفطرة الخنازيرية، المتفطرة داخل الخلوية، المتفطرة الطيرية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015269.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "xanthomonas",
    "term_en": "Xanthomonas",
    "term_ar": "مستصفرة",
    "synonyms": [
      "Xanthomonas albilineans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus in the family XANTHOMONADACEAE whose cells produce a yellow pigment (Gr. xanthos - yellow). It is pathogenic to plants.",
    "arabic_definition": "المستصفرة (الاسم العلمي: Xanthomonas) هي جنس من البكتيريا يتبع الفصيلة المستصفرية من رتبة المستصفريات",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014974.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "wolman-disease",
    "term_en": "Wolman Disease",
    "term_ar": "داء ولمان",
    "synonyms": [
      "Disease, Wolman",
      "Acid Cholesteryl Ester Hydrolase Deficiency, Wolman Type",
      "Acid Lipase Deficiency",
      "Acid Lipase Deficiencies",
      "Deficiencies, Acid Lipase",
      "Deficiency, Acid Lipase",
      "Lipase Deficiencies, Acid",
      "Lipase Deficiency, Acid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The severe infantile form of inherited lysosomal lipid storage diseases due to deficiency of acid lipase (STEROL ESTERASE). It is characterized by the accumulation of neutral lipids, particularly CHOLESTEROL ESTERS in leukocytes, fibroblasts, and hepatocytes. It is also known as Wolman's xanthomatosis and is an allelic variant of CHOLESTEROL ESTER STORAGE DISEASE.",
    "arabic_definition": "داء ولمان (بالإنجليزية: Wolman disease) والمعروف أيضا ببداية ظهور نقص في الليباز الحمضي في الجسيمات الحالة وهو مرض وراثي نادر يسببه نقص إنزيم يعرف باسم الليباز الحمضي في الجسيمات الحالة. ويعد هذا الإنزيم ضروري لتحليل بعض الدهون داخل الخلايا، ويؤدي نقصه إلى تراكم الدهون في الكبد والأمعاء وأجزاء أخرى من الجسم.",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015223.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "west-nile-virus",
    "term_en": "West Nile virus",
    "term_ar": "فيروس غرب النيل",
    "synonyms": [
      "Egypt 101 virus",
      "Kunjin virus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of FLAVIVIRUS, one of the Japanese encephalitis virus group (ENCEPHALITIS VIRUSES, JAPANESE). It can infect birds and mammals. In humans, it is seen most frequently in Africa, Asia, and Europe presenting as a silent infection or undifferentiated fever (WEST NILE FEVER). The virus appeared in North America for the first time in 1999. It is transmitted mainly by CULEX spp mosquitoes which feed primarily on birds, but it can also be carried by the Asian Tiger mosquito, AEDES albopictus, which feeds mainly on mammals.",
    "arabic_definition": "فيروس غرب النيل أو داء غرب النيل (الإنجليزية: West Nile Virus - WNV)، هو فيروس حيواني المنشأ منقول عبر المفصليات، وتحديدًا بواسطة البعوض. ينتمي إلى جنس الفيروسات المصفرة ضمن فصيلة الفيروسات المصفرة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014902.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "helicobacter-pylori",
    "term_en": "Helicobacter pylori",
    "term_ar": "ملوية بوابية",
    "synonyms": [
      "Campylobacter pylori subsp. pylori",
      "Campylobacter pyloridis",
      "Campylobacter pylori",
      "Helicobacter nemestrinae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A spiral bacterium active as a human gastric pathogen. It is a gram-negative, urease-positive, curved or slightly spiral organism initially isolated in 1982 from patients with lesions of gastritis or peptic ulcers in Western Australia. Helicobacter pylori was originally classified in the genus CAMPYLOBACTER, but RNA sequencing, cellular fatty acid profiles, growth patterns, and other taxonomic characteristics indicate that the micro-organism should be included in the genus HELICOBACTER. It has been officially transferred to Helicobacter gen. nov. (see Int J Syst Bacteriol 1989 Oct;39(4):297-405).",
    "arabic_definition": "المَلْوِيَّة البَوَّابِيَّة (اللاتينية: Helicobacter pylori) المعروفة أيضًا باسم جرثومة المعدة، هي بكتيريا سالبة الجرام، أليفة الهواء القليل، ملوية توجد عادة في المعدة. يعتقد أن شكلها الملوي (الذي اشتق منه اسم الجنس، الملوية) قد تطور لاختراق البطانة المخاطية للمعدة والإصابة بالعدوى.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016480.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "severe-combined-immunodeficiency",
    "term_en": "Severe Combined Immunodeficiency",
    "term_ar": "عوز المناعة المشترك الشديد",
    "synonyms": [
      "Combined Immunodeficiencies, Severe",
      "Combined Immunodeficiency, Severe",
      "Immunodeficiencies, Severe Combined",
      "Severe Combined Immunodeficiencies",
      "Immunodeficiency Syndrome, Severe Combined",
      "Severe Combined Immunodeficiency Syndrome",
      "Severe Combined Immune Deficiency",
      "Immunologic Deficiency, Severe Combined"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Group of rare congenital disorders characterized by impairment of both humoral and cell-mediated immunity, leukopenia, and low or absent antibody levels. It is inherited as an X-linked or autosomal recessive defect. Mutations occurring in many different genes cause human Severe Combined Immunodeficiency (SCID).",
    "arabic_definition": "العوز المناعي المشترك الشديد: ويعرف أيضًا بـغياب الخلايا الليمفاوية أو متلازمة جلينزمان-رينكر أو عدم التنسج الليمفاوي بالغدة الزعترية. وقد يعرف المرض أحيانًا بـمرض الولد الفقاعة وترجع التسمية إلى قصة الطفل ديفيد فيتر (الإنجليزية: David Vetter) المصاب بالمرض والذي تم احتجازه في فقاعة لتعزله عزلًا تامًا عن البيئة المحيطة لتقليل فرصة تعرضه لأي نوع من أنواع العدوى. (Severe Combined Immunodeficiency)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016511.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "campylobacter-jejuni",
    "term_en": "Campylobacter jejuni",
    "term_ar": "عطيفة صائمية",
    "synonyms": [
      "Campylobacter fetus subsp. jejuni",
      "Vibrio hepaticus",
      "Vibrio jejuni"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of bacteria that resemble small tightly coiled spirals. Its organisms are known to cause abortion in sheep and fever and enteritis in man and may be associated with enteric diseases of calves, lambs, and other animals.",
    "arabic_definition": "عطيفة صائمية (الاسم العلمي: Campylobacter jejuni) هي نوع من البكتيريا تتبع جنس العطيفة من فصيلة العطيفات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016123.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "baculoviridae",
    "term_en": "Baculoviridae",
    "term_ar": "فيروس عصوي",
    "synonyms": [
      "Baculovirus",
      "Baculoviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Family of INSECT VIRUSES which contain polyhedron-shaped or ovocylindrical occlusion bodies. The genera include ALPHABACULOVIRUS; GAMMABACULOVIRUS; and DELTABACULOVIRUS (commonly known as NUCLEOPOLYHEDROVIRUSES) and BETABACULOVIRUS (commonly known as GRANULOVIRUSES). Baculovirus vectors are used for expression of foreign genes in insects and as BIOPESTICIDES for controlling insect populations.",
    "arabic_definition": "الفيروسات العصوية أو عائلة بايكولوفيريدي أو فيروسات باكيلو (الإنجليزية: Baculovirus) هي عائلة كبيرة من الفيروسات والتي يمكن تقسيمها اٍلى جنسين: الفيروسات الحبيبية; لها قفيصة منواة واحدة في الغلاف الفيروسي nucleopolyhedroviruses; لها قفيصة منواة واحدة أو أكثر في الغلاف الفيروسي الفيروسات العصوية لها ميول تجاه اللافقاريات بأكثر من 600 ثوي نوع محدد. أنواع العثة غير الناضجة (اليرقات) هي المستضيفات الأكثر شيوعا، لكن هذه الفيروسات وجدة أيضا عند حشرة المنشار، البعوضيات والروبيان. (Baculoviridae)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016367.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "piebaldism",
    "term_en": "Piebaldism",
    "term_ar": "لمع",
    "synonyms": [
      "Piebald Trait",
      "Piebald Traits",
      "Trait, Piebald",
      "Traits, Piebald",
      "Albinism, Cutaneous",
      "Cutaneous Albinism",
      "Albinism, Partial",
      "Partial Albinism"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Autosomal dominant, congenital disorder characterized by localized hypomelanosis of the skin and hair. The most familiar feature is a white forelock presenting in 80 to 90 percent of the patients. The underlying defect is possibly related to the differentiation and migration of melanoblasts, as well as to defective development of the neural crest (neurocristopathy). Piebaldism may be closely related to WAARDENBURG SYNDROME.",
    "arabic_definition": "اللَّمَع (اختصارًا PBT) هو اضطراب وراثي سائد نادر في تطور الخلايا الميلانينية. تشمل الخصائص الشائعة مقدمة شعر الرأس الأبيض الخِلقيّة وبقع طبيعية متناثرة ونقص التصبغ، ولطخة مثلثة الشكل بدون تصبغ على الجبهة، ومع ذلك فهناك تباين كبير في درجة ونمط تجلِّي المرض حتى بالعائلات المصابة، في بعض الحالات تحدث الإصابة باللَّمَع مع مشاكل شديدة بالنمو كما هو الحال في متلازمة واردينبيرغ ومرض هيرشسبرونج. (Piebaldism)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016116.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "human-t-lymphotropic-virus-1",
    "term_en": "Human T-lymphotropic virus 1",
    "term_ar": "فيروس تي- الليمفاوي البشري من النوع الأول",
    "synonyms": [
      "T-Cell Leukemia Virus I, Human",
      "HTLV-1",
      "Adult T Cell Leukemia Lymphoma Virus I",
      "Leukemia Lymphoma Virus I, Adult T Cell",
      "ATLV",
      "HTLV-I",
      "Human T Cell Leukemia Virus I",
      "Leukemia Virus I, Human T Cell"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A strain of PRIMATE T-LYMPHOTROPIC VIRUS 1 isolated from mature T4 cells in patients with T-lymphoproliferation malignancies. It causes adult T-cell leukemia (LEUKEMIA-LYMPHOMA, T-CELL, ACUTE, HTLV-I-ASSOCIATED), T-cell lymphoma (LYMPHOMA, T-CELL), and is involved in mycosis fungoides, SEZARY SYNDROME and tropical spastic paraparesis (PARAPARESIS, TROPICAL SPASTIC).",
    "arabic_definition": "فيروس تي- الليمفاوي البشري من النوع الأول (الإنجليزية: Human T-lymphotropic virus 1) هو فيروس قهقري متورط في عدة أنواع من الأمراض، مثل: لمفوما/ابيضاض الدم تائي الخلايا في البالغين، والاعتلال النخاعي المرتبط بـ HTLV-1، والتهاب القزحية، وبعض الأمراض الأخرى. يُعتقد أن حوالي 1-5% من الأشخاص المصابين بهذا الفيروس يصابون بالسرطان خلال حياتهم.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015368.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "molecular-probes",
    "term_en": "Molecular Probes",
    "term_ar": "المسابير الجزيئية",
    "synonyms": [
      "Probes, Molecular",
      "Molecular Probe",
      "Probe, Molecular"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A group of atoms or molecules attached to other molecules or cellular structures and used in studying the properties of these molecules and structures. Radioactive DNA or RNA sequences are used in MOLECULAR GENETICS to detect the presence of a complementary sequence by NUCLEIC ACID HYBRIDIZATION.",
    "arabic_definition": "المسابير الجزيئية كانت شركة تكنولوجية حيوية تقع في يوجين، أوريغون متخصصة في التفلور ( الومضان ). تأسست الشركة في عام 1975 من قبل ريتشارد و روزاريا هوغلاند في مطبخهم في ولاية منيسوتا، ثم انتقلت لفترة وجيزة إلى ولاية تكساس، وأخيرا إلى أوريغون في بداية 1980. (Molecular Probes)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015335.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "human-t-lymphotropic-virus-2",
    "term_en": "Human T-lymphotropic virus 2",
    "term_ar": "فيروس تي الليمفاوي البشري من النوع الثاني",
    "synonyms": [
      "HTLV-II",
      "Human T Lymphotropic Virus II",
      "Human T Cell Leukemia Virus II",
      "Leukemia Virus II, Human T Cell",
      "T Cell Leukemia Virus II, Human"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A strain of PRIMATE T-LYMPHOTROPIC VIRUS 2 that can transform normal T-lymphocytes and can replicate in both T- and B-cell lines. The virus is related to but distinct from HTLV-1.",
    "arabic_definition": "فيروس يرتبط ارتباطًا وثيقًا بفيروس تي الليمفاوي البشري من النوع الأول، يتشارك فيروس تي الليمفاوي البشري من النوع الثاني (إتش تي إل في 2) بحوالي 70٪ من التماثل الجيني (التشابه البنيوي) مع فيروس تي الليمفاوي البشري من النوع الأول. اكتُشف من قبل روبرت غالو وزملائه. (Human T-lymphotropic virus 2)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D015367.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mucopolysaccharidosis-vii",
    "term_en": "Mucopolysaccharidosis VII",
    "term_ar": "متلازمة سلاي",
    "synonyms": [
      "Mucopolysaccharidosis VIIs",
      "VIIs, Mucopolysaccharidosis",
      "Mucopolysaccharidosis 7",
      "Sly Disease",
      "Disease, Sly",
      "Sly Syndrome",
      "Syndrome, Sly",
      "GUSB Deficiency"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Mucopolysaccharidosis characterized by excessive dermatan and heparan sulfates in the urine and Hurler-like features. It is caused by a deficiency of beta-glucuronidase.",
    "arabic_definition": "متلازمة سلاي \" Sly syndrome \" كما تدعى داء عديد السكاريد المخاطي النوع السابع أو MPS ، هو مرض تخزين الليزوزومية وراثي متنحي يتميز نقص في انزيم β غلوكورونيداز، انزيم الليزوزومية فيؤدي إلى تراكم بعض الكربوهيدرات المعقدة ( عديدات السكاريد المخاطية ) في العديد من أنسجة وأعضاء الجسم. سميت باسم مكتشفها وليام س. (Mucopolysaccharidosis VII)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016538.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "filoviridae",
    "term_en": "Filoviridae",
    "term_ar": "فيروسات خيطية",
    "synonyms": [
      "Filovirus",
      "Filoviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A family of RNA viruses, of the order MONONEGAVIRALES, containing filamentous virions. Although they resemble RHABDOVIRIDAE in possessing helical nucleocapsids, Filoviridae differ in the length and degree of branching in their virions. There are two genera: EBOLAVIRUS and MARBURGVIRUS.",
    "arabic_definition": "الفيروسات الخيطية (الإنجليزية: Filoviridae) هي عائلة من الفيروسات السلبية ذات الرنا أحادي السلسلة، ويعرف أفراد هذه العائلة بأنهم العوامل المسببة حمات نزفية مثل:",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016563.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "hepatitis-e-virus",
    "term_en": "Hepatitis E virus",
    "term_ar": "فيروس التهاب الكبد الوبائي هـ",
    "synonyms": [
      "Paslahepevirus balayani",
      "Orthohepevirus A",
      "Hepatitis E virus (strain Burma)",
      "Paslahepevirus",
      "Paslahepeviruses"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A positive-stranded RNA virus species, causing enterically-transmitted non-A, non-B hepatitis (HEPATITIS E).",
    "arabic_definition": "فيروس التهاب الكبد الوبائي هـ (HEV) هو فيروسٌ يُسبب التهاب الكبد الوبائي هـ. يقدر العبء العالمي للعدوى من الطرازين الجينيين الرئيسيين (1 و2) بحوالي 20 مليون سنويًا، مما يؤدي إلى 70,000 حالة وفاة و3000 حالة ولادة ميتة. (Hepatitis E virus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016752.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "phlebovirus",
    "term_en": "Phlebovirus",
    "term_ar": "فيروس الفواصد",
    "synonyms": [
      "Phleboviruses",
      "Sandfly Fever Sicilian Virus",
      "SFTS bunyavirus",
      "Severe Fever with Thrombocytopenia Syndrome Bunyavirus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of the family BUNYAVIRIDAE comprising many viruses, most of which are transmitted by Phlebotomus flies and cause PHLEBOTOMUS FEVER. The type species is RIFT VALLEY FEVER VIRUS.",
    "arabic_definition": "فيروس الفواصد هو أحد أجناس عائلة الفيروسات البانيوية، تضم حاليا أكثر من 70 نمط مصلي متميز مستضديا ولم يتم دراسة سوى عدد قليل منها. (Phlebovirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016856.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "bovine-spongiform-encephalopathy",
    "term_en": "Bovine Spongiform Encephalopathy",
    "term_ar": "جنون البقر",
    "synonyms": [
      "Spongiform Encephalopathy, Bovine",
      "Mad Cow Disease",
      "Mad Cow Diseases",
      "BSE (Bovine Spongiform Encephalopathy)",
      "BSEs (Bovine Spongiform Encephalopathy)",
      "Encephalitis, Bovine Spongiform",
      "Bovine Spongiform Encephalitis"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A transmissible spongiform encephalopathy of cattle associated with abnormal prion proteins in the brain. Affected animals develop excitability and salivation followed by ATAXIA. This disorder has been associated with consumption of SCRAPIE infected ruminant derived protein. This condition may be transmitted to humans, where it is referred to as variant or new variant CREUTZFELDT-JAKOB SYNDROME. (Vet Rec 1998 Jul 25;143(41):101-5)",
    "arabic_definition": "اعتلال الدماغ الإسفنجي البقري أو مرض الدماغ الاسفنجي البقري (الإنجليزية: Bovine spongiform encephalopathy)‏ (BSE) أو كما يُعرف بـجنون البقر، هو مرض اعتلال دماغي قاتل يُصيب البقر، ويؤدي إلى انكماش الدماغ والنخاع الشوكي. ويتميز المرض بطول فترة الحضانة، والتي تصل بين 2.5 سنة إلى 8 سنوات، وتؤثر عادةً على الأبقار البالغة التي وصل عُمرها بين 4-5 سنوات، وجميع سلالات البقر مُعرضة للمرض دون استثناء.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016643.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "crack-cocaine",
    "term_en": "Crack Cocaine",
    "term_ar": "كراك (كوكايين)",
    "synonyms": [
      "Cocaine, Crack"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "The purified, alkaloidal, extra-potent form of cocaine. It is smoked (free-based), injected intravenously, and orally ingested. Use of crack results in alterations in function of the cardiovascular system, the autonomic nervous system, the central nervous system, and the gastrointestinal system. The slang term crack was derived from the crackling sound made upon igniting of this form of cocaine for smoking.",
    "arabic_definition": "صخرة الكوكايين هي شكل من أشكال الكوكايين الصلب القابل للتدخين. فهو نوع من أنواع الكوكايين النقي الذي يُمكن تحضيره باستخدام صودا الخبز (بيكربونات الصوديوم) أو هيدروكسيد الصوديوم لتحويل هيدروكلوريد الكوكايين (مسحوق الكوكايين) إلى ميثايل بينزويل جونين (الكوكايين النقي). (Crack Cocaine)",
    "specialty": "Pharmacology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016578.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "feline-coronavirus",
    "term_en": "Feline Coronavirus",
    "term_ar": "فيروس كورونا السنوري",
    "synonyms": [
      "Coronaviruses, Feline",
      "Feline Coronaviruses",
      "Coronavirus, Feline Enteric",
      "Coronaviruses, Feline Enteric",
      "Enteric Coronaviruses, Feline",
      "Enteric Coronavirus, Feline",
      "Feline Enteric Coronaviruses",
      "FECV"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of CORONAVIRUS infecting cats of all ages and commonly found in catteries and zoos. Cats are often found carrying the virus but only a small proportion develop disease. Feline coronavirus and Feline infectious peritonitis virus (FIPV) are virtually the same virus in genetic and antigenetic terms, and are morphologically indistinguishable. Since they only differ in their disease potential (with FIPV causing a more serious illness), they are considered biotypes of each other.",
    "arabic_definition": "فيروس كورونا السنوري هو فيروس رنا مفرد السلسلة موجب الدلالة يصيب السنوريات في جميع أنحاء العالم، وينتمي إلى النوع فيروس كورونا ألفا 1 الذي يشمل فيروس كورونا الكلبي وفيروس التهاب المعدة والأمعاء الساري الخنزيري. وتوجد منه هيئتين مختلفتين: فيروس كورونا المعوي السنوري (FECV) الذي يصيب الأمعاء وفيروس التهاب البريتون المعدي السنوري (FIPV) الذي يسبب مرض التهاب البريتون المعدي السنوري. (Feline Coronavirus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016765.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mycoplasma-fermentans",
    "term_en": "Mycoplasma fermentans",
    "term_ar": "مفطورة مخمرة",
    "synonyms": [
      "Mycoplasma incognitus"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of the genus MYCOPLASMA, originally isolated infrequently from the lower genital tract of humans, and possessing uncertain pathogenicity. The incognitus strain of M. fermentans has been identified in necrotizing lesions of multiple organs from AIDS and non-AIDS patients dying of an acute influenza-like disease.",
    "arabic_definition": "مفطورة مخمرة (الإنجليزية: Mycoplasma fermentans) هي نوع من البكتيريا، سلبية الغرام، تتبع المفطورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016858.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterococcus",
    "term_en": "Enterococcus",
    "term_ar": "مكورة معوية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, coccoid bacteria consisting of organisms causing variable hemolysis that are normal flora of the intestinal tract. Previously thought to be a member of the genus STREPTOCOCCUS, it is now recognized as a separate genus.",
    "arabic_definition": "المُكَوَّرة المعوية أو العقدية (الإنجليزية: Enterococcus) هي جنس كبير من الملبنيات من شعبة متينات الجدار. والمكورات المعوية هي مكورات موجبة الجرام التي غالباً تحدث في الأزواج ( مكورات مزدوجة ) أو سلاسل قصيرة، ويصعب تمييزها عن العقديات على الخصائص الفيزيائية وحدها.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016983.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "helicobacter",
    "term_en": "Helicobacter",
    "term_ar": "ملوية (جنس)",
    "synonyms": [
      "Gastrospirillum"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, spiral-shaped bacteria that has been isolated from the intestinal tract of mammals, including humans. It has been associated with PEPTIC ULCER.",
    "arabic_definition": "المَلْوِيّة (اللاتينية: Helicobacter) جنس من البكتيريا سلبية الغرام أليفة الهواء القليل، تتصف بشكل لولبي مميز ولها سياط تساعدها على الحركة السريعة. كانت تُصنَّف سابقاً ضمن جنس العطيفة، لكن منذ 1989 تم فرزها إلى جنس مستقل.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016998.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "lactococcus",
    "term_en": "Lactococcus",
    "term_ar": "مكورة لبنية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-positive, coccoid bacteria mainly isolated from milk and milk products. These bacteria are also found in plants and nonsterile frozen and dry foods. Previously thought to be a member of the genus STREPTOCOCCUS (group N), it is now recognized as a separate genus.",
    "arabic_definition": "المكورة اللبنية أو بكتريا متماثلة التخمر هي جنس من بكتيريا حمض اللبنيك كانت مشمولة سابقا ضمن جنس السبحية من المجموعة N1. وهي تعرف أيضا بأنها بكتيريا مثلية التخمير أي أنها تنتج مادة واحدة هي حمض اللاكتيك في هذه الحالة وهو المنتج الرئيسي أو الوحيد لعملية تخمير الجلوكوز. (Lactococcus)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017045.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ureaplasma-urealyticum",
    "term_en": "Ureaplasma urealyticum",
    "term_ar": "ميورة حالة لليوريا",
    "synonyms": [
      "Ureaplasma urealyticum biovar 2"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria found in the human genitourinary tract (UROGENITAL SYSTEM), oropharynx, and anal canal. Serovars 1, 3, 6, and 14 have been reclassed into a separate species UREAPLASMA parvum.",
    "arabic_definition": "ميورة حالة لليوريا (الإنجليزية: Ureaplasma urealyticum) هي نوع من البكتيريا، سلبية الغرام، تتبع الميورة.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016990.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "coxiella-burnetii",
    "term_en": "Coxiella burnetii",
    "term_ar": "كوكسيلة بورنيتية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative bacteria that grows preferentially in the vacuoles of the host cell. It is the etiological agent of Q FEVER.",
    "arabic_definition": "الكُوكْسِيلَّةُ البُورنيتِيَّة (اللاتينية: Coxiella burnetii) هي النوع الوحيد في جنس الكوكسيلا، وهي البكتيريا المسببة لحمّى Q. الكوكسيلة تشبه مورفولوجياً الريكتسيا، ولكنها تختلف عنها من الناحية الفيزيولوجية والوراثية. الكوكسيلة البورنيتية عبارة عن جرثومة صغيرة الحجم سلبية الغرام ترشح عبر الفلاتر، وعالية المقاومة للإجهادات البيئية مثل ارتفاع درجة الحرارة، الضغط التناضحي، والأشعة فوق البنفسجية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016997.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chlamydophila-pneumoniae",
    "term_en": "Chlamydophila pneumoniae",
    "term_ar": "متدثرة رئوية",
    "synonyms": [
      "Chlamydia pneumoniae"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of CHLAMYDOPHILA that causes acute respiratory infection, especially atypical pneumonia, in humans, horses, and koalas.",
    "arabic_definition": "المتدثرة الرئوية أو كلاميديا نيمونيا (الاسم العلمي: Chlamydia pneumoniae) هي نوع من البكتيريا يتبع جنس المتدثرة من الفصيلة المتدثرية. (Chlamydophila pneumoniae)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016993.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "micrococcus-luteus",
    "term_en": "Micrococcus luteus",
    "term_ar": "ميكروكوكس لوتس",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, spherical bacteria whose organisms occur in tetrads and in irregular clusters of tetrads. The primary habitat is mammalian skin.",
    "arabic_definition": "ميكروكوكس لوتس بالانجليزية Micrococcus luteus هو جرثومة موجبة الجرام ، إلى متغير الجرام ، غير متحرك ، كوكوس ، رباعي الترتيب ، مصطبغة ، بكتيريا رمية تنتمي إلى عائلة Micrococcaceae . ويكون اليورياز والكتلاز موجب.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016982.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterobacter-cloacae",
    "term_en": "Enterobacter cloacae",
    "term_ar": "أمعائية مذرقية",
    "synonyms": [],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, facultatively anaerobic, rod-shaped bacteria that occurs in water, sewage, soil, meat, hospital environments, and on the skin and in the intestinal tract of man and animals as a commensal.",
    "arabic_definition": "الأَمْعائِيَّةُ المَذْرَقِيَّة (الاسم العلمي: Enterobacter cloacae) هي نوع من البكتيريا يتبع جنس الأمعائية من الفصيلة الأمعائيات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016972.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "enterococcus-faecium",
    "term_en": "Enterococcus faecium",
    "term_ar": "معوية برازية",
    "synonyms": [
      "Streptococcus faecium"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-positive, coccoid bacteria whose organisms are normal flora of the intestinal tract. Unlike ENTEROCOCCUS FAECALIS, this species may produce an alpha-hemolytic reaction on blood agar and is unable to utilize pyruvic acid as an energy source.",
    "arabic_definition": "مكورة معوية برازية (الاسم العلمي:Enterococcus faecium) هي نوع من البكتيريا تتبع جنس المكورة المعوية من فصيلة المكورات المعوية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016984.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "pectobacterium-carotovorum",
    "term_en": "Pectobacterium carotovorum",
    "term_ar": "بكتوبكتيريوم كاروتوفورم",
    "synonyms": [
      "Bacillus carotovorus",
      "Erwinia carotovora",
      "Bacterium carotovorum",
      "Erwinia caratovora"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, facultatively anaerobic, rod-shaped bacteria that causes rotting, particularly of storage tissues, of a wide variety of plants and causes a vascular disease in CARROTS; and POTATO plants.",
    "arabic_definition": "بكتوبكتيريوم كاروتوفورم أو بكتيريا العفن الطري أو الهلامي أو بكتيريا الساق السوداء (الاسم العلمي: Pectobacterium carotovorum) هي نوع بكتيريا تتبع فصيلة البكتيريا الخلية «Pectobacteriaceae»، وكانت تُصنَّف سابقًا ضمن جنس الإيروينيا «Erwinia». يُعد هذا النوع مُمرِّضًا نباتيًّا ذو نطاق عوائل متسع، يشمل عدَّة أنواع نباتية مهمَّة زراعيًّا وعلميًّا.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016973.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "aggregatibacter-actinomycetemcomitans",
    "term_en": "Aggregatibacter actinomycetemcomitans",
    "term_ar": "بكتيريا متجمعة مرافقة لكائنات شعاعية شبيهة بالفطريات",
    "synonyms": [
      "Bacterium acetinomycetum comitans",
      "Bacterium comitans",
      "Actinobacillus actinomycetemcomitans",
      "Haemophilus actinomycetemcomitans",
      "Haemophilus actinomyceticomitans"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of Gram-negative, facultatively anaerobic spherical or rod-shaped bacteria indigenous to dental surfaces. It is associated with PERIODONTITIS; BACTERIAL ENDOCARDITIS; and ACTINOMYCOSIS.",
    "arabic_definition": "هي بكتيريا سالبة الغرام، لا هوائية تكيفية، وغير متحركة، وغالبًا ما توجد مصاحبةً لالتهاب دواعم السن العدواني الموضعي، وهو عدوى حادة تصيب دواعم السن. ويُشتبه أيضًا في تورطها في التهاب دواعم السن المزمن. (Aggregatibacter actinomycetemcomitans)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D016976.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "campylobacter-coli",
    "term_en": "Campylobacter coli",
    "term_ar": "عطيفة قولونية",
    "synonyms": [
      "Vibrio coli"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A species of gram-negative, rod-shaped bacteria isolated from the intestinal tract of swine, poultry, and man. It may be pathogenic.",
    "arabic_definition": "عطيفة قولونية (الاسم العلمي: Campylobacter coli) هي نوع من البكتيريا تتبع جنس العطيفة من فصيلة العطيفات.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D017000.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "chagas-disease",
    "term_en": "Chagas Disease",
    "term_ar": "داء شاغاس",
    "synonyms": [
      "Trypanosoma cruzi Infection",
      "Infections, Trypanosoma cruzi",
      "Infection, Trypanosoma cruzi",
      "Trypanosoma cruzi Infections",
      "Trypanosomiasis, South American",
      "South American Trypanosomiasis",
      "American Trypanosomiasis",
      "Trypanosomiasis, American"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with the protozoan parasite TRYPANOSOMA CRUZI, a form of TRYPANOSOMIASIS endemic in Central and South America. It is named after the Brazilian physician Carlos Chagas, who discovered the parasite. Infection by the parasite (positive serologic result only) is distinguished from the clinical manifestations that develop years later, such as destruction of PARASYMPATHETIC GANGLIA; CHAGAS CARDIOMYOPATHY; and dysfunction of the ESOPHAGUS or COLON.",
    "arabic_definition": "داء شاغاس (الإنجليزية: Chagas disease) أو داء المثقبيّات الأمريكيّ (الإنجليزية: American trypanosomiasis) هو مرض ينتشر في المناطق المدارية الاستوائية، وهو مرض طفيلي يسببه طلائعي التريبانوسوما الكروزية. ينتشر المرض بشكل أساسي عن طريق حشرات معروفة باسم الفسافس -جنس من البق- أو البَقُّ المُقَبِّل.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014355.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "tuberculosis",
    "term_en": "Tuberculosis",
    "term_ar": "سل",
    "synonyms": [
      "Tuberculoses",
      "Koch's Disease",
      "Koch Disease",
      "Kochs Disease",
      "Mycobacterium tuberculosis Infection",
      "Infection, Mycobacterium tuberculosis",
      "Infections, Mycobacterium tuberculosis",
      "Mycobacterium tuberculosis Infections"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Any of the infectious diseases of HUMANS and other animals caused by species of MYCOBACTERIUM TUBERCULOSIS.",
    "arabic_definition": "السُّلّ أو الدّرن أو التّدرّن (الإنجليزية: Tuberculosis) هو مرض معد شائع وقاتل في كثير من الحالات تُسببه سُلالات مُختلفة من المتفطّرات (جنس جراثيم) وعادة المتفطّرة السلية يُهاجم السل عادة الرئة، ولكنه يُمكن أن يؤثر أيضًا على أجزاء أخرى من الجسم. وينتقل المرض عن طريق الهواء عند انتقال رذاذ لعاب الأفراد المُصابين بعدوى السل النشطة عن طريق السعال أو العطس، أو أي طريقة أخرى لانتقال رذاذ اللعاب في الهواء تُعد مُعظم الإصابات بأنها لا عرضية وكامنة، ولكن واحدة من بين كل عشر حالات كامنة ستتطور في نهاية المطاف إلى حالة عدوى نشطة والتي إذا ما تُركت دون علاج، ستسبب وفاة أكثر من 50٪ من المُصابين بها.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014376.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "typhoid-fever",
    "term_en": "Typhoid Fever",
    "term_ar": "حمى التيفوئيد",
    "synonyms": [
      "Fevers, Typhoid",
      "Fever, Typhoid",
      "Typhoid Fevers",
      "Salmonella typhi Infection",
      "Infection, Salmonella typhi",
      "Infections, Salmonella typhi",
      "Salmonella typhi Infections",
      "Typhoid"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An acute systemic febrile infection caused by SALMONELLA TYPHI, a serotype of SALMONELLA ENTERICA.",
    "arabic_definition": "حمى التيفوئيد أو الحمى التِّيفِيَّة المعروفة أيضًا باسم التيفوئيد، هو مرض تسببه بكتيريا السالمونيلا. تختلف الأعراض من خفيفة إلى شديدة ولكن عادة ما تبدأ بعد 6-30 يومًا بعد الإصابة. (Typhoid Fever)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014435.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trichuriasis",
    "term_en": "Trichuriasis",
    "term_ar": "داء المسلكات",
    "synonyms": [
      "Trichuriases",
      "Trichuris Infection",
      "Infections, Trichuris",
      "Infection, Trichuris",
      "Trichuris Infections",
      "Whipworm Infection",
      "Infections, Whipworm",
      "Infection, Whipworm"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with nematodes of the genus TRICHURIS, formerly called Trichocephalus.",
    "arabic_definition": "داء المسلكات، يُعرف أيضاً باسم العدوى السوطية أو \"داء شعريات الذيل\"، هو عدوى سببها جرثومة طفيلية (دودة العدوى السوطية). إذا ترافقت العدوى مع القليل من الديدان، فإنه لن يظهر غالباً أية أعراض. (Trichuriasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014257.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trichinellosis",
    "term_en": "Trichinellosis",
    "term_ar": "داء الشعرينات",
    "synonyms": [
      "Trichinelloses",
      "Trichinelliasis",
      "Trichinelliases",
      "Trichinosis",
      "Trichinoses",
      "Human Trichinellosis",
      "Human Trichinelloses",
      "Trichinelloses, Human"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "An infection with TRICHINELLA. It is caused by eating raw or undercooked meat that is infected with larvae of nematode worms TRICHINELLA genus. All members of the TRICHINELLA genus can infect human in addition to TRICHINELLA SPIRALIS, the traditional etiological agent. It is distributed throughout much of the world and is re-emerging in some parts as a public health hazard and a food safety problem.",
    "arabic_definition": "داء الشعرينات أو داء التريخينا (الإنجليزية: Trichinosis) أو التريكينوزيس هو داء طفيلي غير بكتيري تسببه يرقات شعرية ميكروسكوبية تسمى كراكينيلا سبيرالس ينتج عن تناول لحم طائر التدرج أو الخنزير النيئ والملوث بيرقات من نوع الشعرينة الحلزونية ويكون مسؤولا عن مرض التريكينوزيس يشار إليها أحيانا باسم «دودة الخنزير»، نظرا لكونها وجدت انها عادة في منتجات لحوم الخنزير غير المطبوخ جيدا. داء الشعرينات مرض طفيلي تسببه الديدان الأسطوانية من جنس الدودة الشعرية. (Trichinellosis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014235.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "conjoined-twins",
    "term_en": "Conjoined Twins",
    "term_ar": "توأمان ملتصقان",
    "synonyms": [
      "Conjoined Twin",
      "Twin, Conjoined",
      "Siamese Twins",
      "Siamese Twin",
      "Twin, Siamese",
      "Twins, Siamese"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "MONOZYGOTIC TWINS who are joined in utero. They may be well developed and share only a superficial connection, often in the frontal, transverse or sagittal body plane, or they may share a partial duplication of a body structure. Alternatively, there may be a small and incompletely developed twin conjoined to a larger, more fully developed twin.",
    "arabic_definition": "التوائم الملتصقة، الملقبة بالتوائم السيامية، هم توأم متماثل ارتبطت أجسادهم في الرحم. وهي ظاهرة نادرة، إذ يقدر حدوثها من 1 لكل49000 ولادة إلى 1 لكل 189000 ولادة، مع وجود نسبة أعلى نوعاً ما في جنوب شرق آسيا وإفريقيا والبرازيل. (Conjoined Twins)",
    "specialty": "Pediatrics",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014428.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "african-trypanosomiasis",
    "term_en": "African Trypanosomiasis",
    "term_ar": "داء المثقبيات الإفريقي",
    "synonyms": [
      "African Trypanosomiases",
      "Trypanosomiases, African",
      "African Sleeping Sickness",
      "African Sleeping Sicknesses",
      "Sickness, African Sleeping",
      "Sicknesses, African Sleeping",
      "Sleeping Sickness, African",
      "Sleeping Sicknesses, African"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A disease endemic among people and animals in Central Africa. It is caused by various species of trypanosomes, particularly T. gambiense and T. rhodesiense. Its second host is the TSETSE FLY. Involvement of the central nervous system produces African sleeping sickness. Nagana is a rapidly fatal trypanosomiasis of horses and other animals.",
    "arabic_definition": "داء المثقبيات الأفريقي (الإنجليزية: African trypanosomiasis) أو مرض النوم أو مرض النوم الإفريقي (الإنجليزية: sleeping sickness) أو النُّوَام هو مرض طفيلي يصيب البشر والحيوانات الأخرى. وهو ناتج عن طفيلي أولي من جنس المثقبيات وهو المثقبية البروسية.",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014353.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "trypanosomiasis",
    "term_en": "Trypanosomiasis",
    "term_ar": "داء المثقبيات",
    "synonyms": [
      "Trypanosomiases"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "Infection with protozoa of the genus TRYPANOSOMA.",
    "arabic_definition": "داء المثقبيات هو اسم لعدة أمراض تسببها أوالي طفيلية مثقبية من جنس المثقبيات. يشمل ذلك عند البشر داء المثقبيات الأفريقي، وداء شاغاس، وهناك العديد من الأمراض الأخرى تصيب الحيوانات. (Trypanosomiasis)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014352.html",
        "accessedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "ureaplasma",
    "term_en": "Ureaplasma",
    "term_ar": "ميورة",
    "synonyms": [
      "T-Mycoplasma",
      "Ureaplasma parvum",
      "Ureaplasma urealyticum biovar 1"
    ],
    "pronunciation": "",
    "ipa": "",
    "english_definition": "A genus of gram-negative, nonmotile bacteria which are common parasitic inhabitants of the urogenital tracts of humans, cattle, dogs, and monkeys.",
    "arabic_definition": "ميورة هي جنس من البكتيريا، تتبع المفطورات. (Ureaplasma)",
    "specialty": "Microbiology",
    "sources": [
      {
        "name": "NLM MeSH – Medical Subject Headings",
        "url": "https://id.nlm.nih.gov/mesh/D014509.html",
        "accessedAt": "2026-11-21"
      }
    ]
  }
];
