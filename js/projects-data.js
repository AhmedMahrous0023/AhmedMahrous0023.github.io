/* Portfolio projects (AR/EN). Loaded before site.js */
(function (w) {
  "use strict";

  w.PROJECTS_INITIAL_COUNT = 6;

  w.PORTFOLIO_PROJECTS = [
    {
      image: "assets/projects/qimni/1.png",
      badgePlay: true,
      ar: {
        name: "Qimni",
        problem:
          "المبدعون والعلامات الصغيرة تحتاج رابطاً واحداً يجمع حضورهم الرقمي مع بيع منتجات بسيط دون بناء متجر معقّد.",
        built:
          "منصة شبيهة بـ Linktree مع متجر مصغّر داخل التطبيق: ملف شخصي، روابط، وعربة/طلبات مبسّطة.",
        stack: "Flutter · Dart · Clean Architecture · Firebase · REST",
        outcome: "منشور على Google Play — تجربة موحّدة للروابط والبيع من مكان واحد.",
      },
      en: {
        name: "Qimni",
        problem:
          "Creators and small brands need one hub for their digital presence plus lightweight product sales without a heavy storefront.",
        built:
          "A Linktree-like platform with an integrated mini e-commerce flow: profile, links, and streamlined orders.",
        stack: "Flutter · Dart · Clean Architecture · Firebase · REST",
        outcome: "Published on Google Play — one surface for links and commerce.",
      },
    },
    {
      image: "assets/project-meknaz.png",
      badgePlay: false,
      ar: {
        name: "Meknaz",
        problem:
          "متابعة المصاريف والأهداف المالية تحتاج أداة خفيفة دون تعقيد تطبيقات البنوك أو الجداول اليدوية.",
        built:
          "تطبيق لإدارة الإنفاق، الأهداف الشهرية، وتلخيصات تساعد على الالتزام اليومي.",
        stack: "Flutter · Dart · تخزين محلي / مزامنة · واجهات UX بسيطة",
        outcome: "تجربة واضحة تقلّل الاحتكاك عند تسجيل المعاملات وتُظهر التقدم نحو الهدف.",
      },
      en: {
        name: "Meknaz",
        problem:
          "People need a simple way to track expenses and monthly money goals without banking-app complexity.",
        built:
          "A personal finance app for spending, monthly goals, and lightweight summaries.",
        stack: "Flutter · Dart · local storage / sync · focused UX",
        outcome: "Clear flows that reduce friction when logging spending and viewing progress.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Smart Pharmacy",
        problem:
          "الوصول للأدوية بسهولة وشفافية يتطلب سوقاً رقمياً يوفّر البحث والتوصيل أو الاستلام بثقة.",
        built:
          "تطبيق سوق إلكتروني لبيع وشراء الأدوية عبر قوائم منتجات، بحث، وطلبات.",
        stack: "Flutter · Dart · Backend / APIs · مصادقة · إشعارات",
        outcome: "منصة موحّدة تربط العرض والطلب مع تجربة طلب مبسّطة.",
      },
      en: {
        name: "Smart Pharmacy",
        problem:
          "Patients and pharmacies need a trustworthy digital marketplace to find and trade medicines online.",
        built:
          "A marketplace app for buying and selling medicines with listings, search, and orders.",
        stack: "Flutter · Dart · backend / APIs · auth · notifications",
        outcome: "A single platform connecting supply and demand with a streamlined checkout path.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: true,
      ar: {
        name: "Yaqeen — أذكار المسلم",
        problem:
          "المستخدمون يبحثون عن تطبيق إسلامي موحّد للأذكار والمحتوى الروحي مع تجربة هادئة.",
        built:
          "تطبيق يضم الأذكار، راديو إسلامي، ومحتوى ديني منظم حسب الاستخدام اليومي.",
        stack: "Flutter · Dart · وسائط (صوت) · تخزين محتوى · إشعارات",
        outcome: "منشور على Google Play — محتوى يومي قابل للمتابعة بسهولة.",
      },
      en: {
        name: "Yaqeen — Muslim Azkar",
        problem:
          "Users want one Islamic app that bundles daily azkar, audio, and faith content in a calm UX.",
        built:
          "An Islamic app with azkar, Islamic radio, and curated religious content.",
        stack: "Flutter · Dart · audio · content layers · notifications",
        outcome: "Live on Google Play — daily spiritual habits in one place.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: true,
      ar: {
        name: "Yaqeen — Quiz Arena",
        problem:
          "التعلّم والترفيه الإسلامي يحتاج تفاعلاً خفيفاً عبر تحديات وألغاز بوقت قصير.",
        built:
          "تطبيق اختبارات تفاعلي مع تحديات متدرجة وتجربة استخدام جذابة.",
        stack: "Flutter · Dart · منطق أسئلة · لوحات نتائج · حالة لعبة",
        outcome: "منشور على Google Play — تفاعل أعلى مع المحتوى الديني.",
      },
      en: {
        name: "Yaqeen — Quiz Arena",
        problem:
          "Islamic learning benefits from quick, engaging challenges instead of long passive reads.",
        built:
          "An interactive quiz app with progressive challenges and polished UX.",
        stack: "Flutter · Dart · quiz engine · scoring · game state",
        outcome: "Published on Google Play — higher engagement with faith-based content.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Noor Al-Iman",
        problem:
          "المستخدم يحتاج مرجعاً إسلامياً شاملاً: قرآن، أوقات صلاة، تعلّم الوضوء والصلاة، وأذكار يومية.",
        built:
          "تطبيق متكامل للقرآن، المواقيت، دروس تعليمية، والأذكار في هيكل تنقل واضح.",
        stack: "Flutter · Dart · محتوى وسائط · جداول صلاة · تخزين محلي",
        outcome: "تجربة موحّدة للعبادة والتعلّم اليومي دون تشتيت بين عدة تطبيقات.",
      },
      en: {
        name: "Noor Al-Iman",
        problem:
          "Muslim users want Quran, prayer times, learning wudu/prayer, and daily azkar in one coherent app.",
        built:
          "A comprehensive Islamic app combining Quran, timings, tutorials, and azkar.",
        stack: "Flutter · Dart · media content · prayer schedules · offline layers",
        outcome: "One place for worship and learning instead of juggling multiple tools.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Ne’mah",
        problem:
          "دعم المحتاجين بالطعام يتطلّب قناة بسيطة للتبرع والتنسيق بين المتبرعين والمستفيدين.",
        built:
          "منصة خيرية لجمع تبرعات غذائية وتسهيل الوصول للحالات بأمانة وتنظيم.",
        stack: "Flutter · Dart · حسابات · طلبات/تبرعات · لوحة إدارة",
        outcome: "تقليل الاحتكاك بين «من يعطي» و«من يحتاج» مع شفافية أكبر.",
      },
      en: {
        name: "Ne’mah",
        problem:
          "Food aid needs a simple channel to coordinate donors and people in need with trust and clarity.",
        built:
          "A charity platform for food donations and structured help requests.",
        stack: "Flutter · Dart · accounts · donation flows · admin views",
        outcome: "Less friction between givers and recipients with clearer operations.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: true,
      ar: {
        name: "Pop Room",
        problem:
          "المجتمعات تريد غرف صوتية مباشرة للنقاش دون تعقيد بث فيديو.",
        built:
          "تطبيق غرف صوتية مباشرة ينضمّ فيها المستخدمون لمحادثات جماعية صوتية.",
        stack: "Flutter · Dart · صوت لحظي · غرف · إدارة جلسات",
        outcome: "منشور على Google Play — تفاعل صوتي خفيف وسريع الانضمام.",
      },
      en: {
        name: "Pop Room",
        problem:
          "Communities want lightweight live audio rooms without the overhead of video streaming.",
        built:
          "A live voice chat rooms app for group audio discussions.",
        stack: "Flutter · Dart · realtime audio · rooms · session management",
        outcome: "Published on Google Play — quick-to-join voice social experiences.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Qatra",
        problem:
          "مراقبة استهلاك المياه واكتشاف التسريبات مبكراً يقلّل الهدر والتكلفة في المنزل أو المباني.",
        built:
          "نظام مراقبة مياه ذكي يعتمد على IoT مع تكامل Arduino لرصد الاستهلاك والتنبيه.",
        stack: "Flutter · Dart · Arduino / مستشعرات · MQTT أو تكامل تسلسلي · لوحات بيانات",
        outcome: "رؤية أوضح للاستهلاك وتنبيهات مبكرة عند شذوذ القراءات.",
      },
      en: {
        name: "Qatra",
        problem:
          "Homes and small buildings need early leak detection and clearer water usage visibility.",
        built:
          "An IoT smart water monitoring system with Arduino integration for usage and alerts.",
        stack: "Flutter · Dart · Arduino / sensors · MQTT or serial · dashboards",
        outcome: "Better consumption insight and early warnings on abnormal readings.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Braille Arabic",
        problem:
          "تعلّم برايل العربي يحتاج تمارين تفاعلية بدلاً من المواد الورقية فقط.",
        built:
          "تطبيق تعليمي لبرايل العربي مع دروس تفاعلية واختبارات قصيرة.",
        stack: "Flutter · Dart · محتوى تعليمي · تتبع تقدّم · واجهات إتاحة",
        outcome: "مسار تعلّم أوضح مع تغذية راجعة فورية للمتعلّم.",
      },
      en: {
        name: "Braille Arabic",
        problem:
          "Learning Arabic Braille needs interactive practice beyond static textbooks.",
        built:
          "An educational app with interactive lessons and quizzes for Arabic Braille.",
        stack: "Flutter · Dart · lesson content · progress tracking · accessible UI",
        outcome: "A clearer learning loop with immediate learner feedback.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Dawa",
        problem:
          "المرضى والصيادلة يحتاجون بحثاً سريعاً عن الأدوية والبدائل مع معلومات موثوقة.",
        built:
          "تطبيق طبي للبحث عن الأدوية، اقتراح بدائل، وعرض تفاصيل دوائية منظّمة.",
        stack: "Flutter · Dart · قاعدة بيانات دوائية · بحث · شاشات تفاصيل",
        outcome: "تقليل وقت الوصول للمعلومة الدوائية مقارنة بالبحث العشوائي.",
      },
      en: {
        name: "Dawa",
        problem:
          "Patients and pharmacists need fast medicine search with alternatives and structured drug info.",
        built:
          "A medical app to search medicines, suggest alternatives, and show detailed drug data.",
        stack: "Flutter · Dart · drug dataset · search · detail screens",
        outcome: "Faster access to medication information than ad-hoc searching.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Inner Peace",
        problem:
          "الدعم النفسي يحتاج قنوات متعددة: محتوى، جلسات، محادثة، وتتبّع مزاج بخصوصية.",
        built:
          "تطبيق دعم صحة نفسية يجمع محتوى توعوي، جلسات/تدريب مباشر، محادثة، وتتبّع المزاج.",
        stack: "Flutter · Dart · محادثة لحظية · تقويم جلسات · تخزين آمن",
        outcome: "مسار دعم متكامل يحترم الخصوصية ويقلّل العوائق أمام طلب المساعدة.",
      },
      en: {
        name: "Inner Peace",
        problem:
          "Mental health support works best when content, live help, chat, and mood tracking live together.",
        built:
          "A mental health app combining awareness content, live coaching, chat, and mood tracking.",
        stack: "Flutter · Dart · realtime chat · scheduling · secure storage",
        outcome: "A cohesive support journey that lowers the barrier to asking for help.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Neroplast",
        problem:
          "مصانع البلاستيك تحتاج تتبّعاً للخطوط، الورديات، الجودة، والتقارير بدون جداول متفرقة.",
        built:
          "نظام صناعي لإدارة خطوط الإنتاج، الورديات، مراقبة الجودة، وتصدير تقارير.",
        stack: "Flutter · Dart (ويب/سطح مكتب حسب النشر) · تقارير · أدوار مستخدمين",
        outcome: "قرارات تشغيلية أسرع ببيانات موحّدة بدل تتبع يدوي.",
      },
      en: {
        name: "Neroplast",
        problem:
          "Plastic production teams need one system for lines, shifts, QC, and reporting.",
        built:
          "An industrial system for production lines, shifts, quality control, and report exports.",
        stack: "Flutter · Dart (web/desktop as deployed) · reporting · roles",
        outcome: "Faster operational decisions with unified data instead of spreadsheets.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "AOU Connect",
        problem:
          "طلاب الجامعة يشتتون بين محاضرات، جداول، ومجموعات دراسية على منصات مختلفة.",
        built:
          "منصة جامعية للمحاضرات، الجداول، محادثة لكل مقرر، والتواصل مع أعضاء هيئة التدريس.",
        stack: "Flutter · Dart · محادثات · ملفات/محتوى · أدوار (طالب/دكتور)",
        outcome: "تجربة حرم رقمية أوضح وتقليل فقدان المعلومات الأكاديمية.",
      },
      en: {
        name: "AOU Connect",
        problem:
          "University students juggle lectures, schedules, and course chats across fragmented tools.",
        built:
          "A campus platform for lectures, schedules, per-course chat, and professor communication.",
        stack: "Flutter · Dart · chat · content · roles (student/faculty)",
        outcome: "A clearer digital campus experience with less academic information loss.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "EEGAR",
        problem:
          "مكاتب الإيجار تحتاج سجلاً موحّداً للعقود والمستأجرين والمواعيد المالية.",
        built:
          "نظام لإدارة عقود الإيجار وبيانات المستأجرين والتذكيرات والتقارير.",
        stack: "Flutter · Dart · نمذجة عقود · بحث وتصفية · تصدير",
        outcome: "تقليل الأخطاء الإدارية وسرعة العثور على أي عقد أو مستأجر.",
      },
      en: {
        name: "EEGAR",
        problem:
          "Rental offices need unified records for leases, tenants, and payment timelines.",
        built:
          "A rental management system for leases, tenant data, reminders, and reporting.",
        stack: "Flutter · Dart · lease modeling · filters · exports",
        outcome: "Fewer admin mistakes and faster lookup for any lease or tenant.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Souq Al-Baseet",
        problem:
          "متاجر الملابس الصغيرة تحتاج واجهة تجارة إلكترونية بسيطة لعرض المخزون والطلب.",
        built:
          "تطبيق تجارة إلكترونية للملابس مع كتالوج، سلة، ومتابعة الطلبات.",
        stack: "Flutter · Dart · كتالوج · سلة · دفع/تسليم حسب التكامل",
        outcome: "قناة بيع رقمية جاهزة دون بناء موقع معقّد من الصفر.",
      },
      en: {
        name: "Souq Al-Baseet",
        problem:
          "Clothing retailers need a simple mobile storefront for catalog browsing and orders.",
        built:
          "An e-commerce clothing application with catalog, cart, and order tracking.",
        stack: "Flutter · Dart · catalog · cart · payments/fulfillment as integrated",
        outcome: "A ready digital sales channel without building a complex website first.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Alzheimer Care",
        problem:
          "عائلات مرضى ألزهايمر تحتاج راحة بال عبر مراقبة آمنة وإشارات من الساعة الذكية.",
        built:
          "تطبيق رعاية صحية مرتبط بساعة ذكية لتتبّع المريض وتنبيه العائلة عند الحاجة.",
        stack: "Flutter · Dart · ارتباط wearable · إشعارات · خصوصية بيانات",
        outcome: "دعم أوضح للعائلة مع تقليل القلق عند التنقّل أو الانقطاع.",
      },
      en: {
        name: "Alzheimer Care",
        problem:
          "Families need safer monitoring signals for Alzheimer patients, assisted by wearables.",
        built:
          "A healthcare app integrated with smartwatch data to track patients and alert families.",
        stack: "Flutter · Dart · wearable integration · alerts · privacy controls",
        outcome: "More peace of day-to-day care with timely family notifications.",
      },
    },
    {
      image: "assets/project-placeholder.svg",
      badgePlay: false,
      ar: {
        name: "Posture Analyzer",
        problem:
          "تقييم انحناء العمود الفقري يحتاج أداة تسجّل الزوايا وتقارن الزيارات بدقة نسبية.",
        built:
          "تطبيق طبي لتحليل وضعية الظهر (الحداب/الجنف) مع تقارير ومقارنات بين الجلسات.",
        stack: "Flutter · Dart · معالجة صور/قياسات · تخزين تقارير · واجهة سريرية بسيطة",
        outcome: "توثيق أوضح لتطور الحالة لدى المريض والمختص.",
      },
      en: {
        name: "Posture Analyzer",
        problem:
          "Spinal posture assessment benefits from structured angles and visit-to-visit comparison.",
        built:
          "A medical app analyzing kyphosis/scoliosis posture with reports and comparisons.",
        stack: "Flutter · Dart · imaging/measurement pipeline · report storage · clinical UI",
        outcome: "Clearer longitudinal records for patients and clinicians.",
      },
    },
  ];
})(window);
