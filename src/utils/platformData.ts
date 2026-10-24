export type Language = 'ar' | 'en';
export type ThemeMode = 'light' | 'dark';

export type PageRoute =
  | 'home'
  | 'curriculum'
  | 'curriculum-detail'
  | 'topic-detail'
  | 'store'
  | 'product-detail'
  | 'about'
  | 'contact'
  | 'auth'
  | 'privacy'
  | 'terms';

export interface RouteState {
  page: PageRoute;
  param?: string;
}

/**
 * URL Pathname <-> RouteState helpers for real per-page URLs
 */
export function parseUrlPathname(pathname: string): RouteState {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/' || clean === '/home') {
    return { page: 'home' };
  }
  if (clean === '/curriculum') {
    return { page: 'curriculum' };
  }
  if (clean.startsWith('/curriculum/')) {
    const id = decodeURIComponent(clean.replace('/curriculum/', ''));
    return { page: 'curriculum-detail', param: id || 'e1d88007-75b9-4bda-be9d-ad7558b8ff41' };
  }
  if (clean.startsWith('/topics/')) {
    const id = decodeURIComponent(clean.replace('/topics/', ''));
    return { page: 'topic-detail', param: id || 'c0a9478b-0937-493e-81c3-1a338a1eb427' };
  }
  if (clean === '/store') {
    return { page: 'store' };
  }
  if (clean.startsWith('/store/')) {
    const id = decodeURIComponent(clean.replace('/store/', ''));
    return { page: 'product-detail', param: id || 'prod-dr-wizzy-energy' };
  }
  if (clean === '/about') {
    return { page: 'about' };
  }
  if (clean === '/contact') {
    return { page: 'contact' };
  }
  if (clean === '/auth') {
    return { page: 'auth' };
  }
  if (clean === '/privacy') {
    return { page: 'privacy' };
  }
  if (clean === '/terms') {
    return { page: 'terms' };
  }
  return { page: 'home' };
}

export function buildUrlPathname(page: PageRoute, param?: string): string {
  switch (page) {
    case 'home':
      return '/';
    case 'curriculum':
      return '/curriculum';
    case 'curriculum-detail':
      return `/curriculum/${param || 'e1d88007-75b9-4bda-be9d-ad7558b8ff41'}`;
    case 'topic-detail':
      return `/topics/${param || 'c0a9478b-0937-493e-81c3-1a338a1eb427'}`;
    case 'store':
      return '/store';
    case 'product-detail':
      return `/store/${param || 'prod-dr-wizzy-energy'}`;
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    case 'auth':
      return '/auth';
    case 'privacy':
      return '/privacy';
    case 'terms':
      return '/terms';
    default:
      return '/';
  }
}

export interface QuizQuestion {
  id: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
}

export interface LabStep {
  stepNumber: number;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  duration: string;
}

export interface ChallengeDay {
  day: number;
  titleAr: string;
  titleEn: string;
  taskAr: string;
  taskEn: string;
  points: number;
}

export interface TopicItem {
  id: string;
  curriculumId: string;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  isFree: boolean;
  youtubeUrl: string;
  storyTitleAr: string;
  storyTitleEn: string;
  storyStepsAr: string[];
  storyStepsEn: string[];
  quizQuestions: QuizQuestion[];
  labSteps: LabStep[];
  challengeDays: ChallengeDay[];
}

export interface CurriculumItem {
  id: string;
  slug: string;
  categoryKey: 'science' | 'free-trial' | 'values-city' | 'german-science';
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  lessonsCount: number;
  ageRange: string;
  levelAr: string;
  levelEn: string;
  topics: TopicItem[];
}

export interface StoreProduct {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  ageRangeAr: string;
  ageRangeEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  type: 'digital' | 'kit';
  priceAr: string;
  priceEn: string;
  numericPrice: number;
  isFree: boolean;
  fileUrl: string;
  relatedTopicId: string;
  experimentsCount: number;
  contentsAr: string[];
  contentsEn: string[];
}

export const CURRICULA_DATA: CurriculumItem[] = [
  {
    id: 'dcf2a469-197d-4354-9568-4843048d6e17',
    slug: 'science',
    categoryKey: 'science',
    titleAr: 'علوم',
    titleEn: 'Science Program',
    descriptionAr:
      'Spark Your Child’s Curiosity Through Fun & Learning! برنامج العلوم من MindEyes هو تجربة تعلم STEM تفاعلية مصممة خصيصاً للأطفال من سن 5 إلى 9 سنوات. من خلال القصص والأنشطة العملية والتجارب الموجهة، يستكشف الأطفال المفاهيم العلمية الأساسية مثل المغناطيسية، الكهرباء، دورة المياه، والتفكير العلمي بطريقة ممتعة وآمنة.',
    descriptionEn:
      'Spark Your Child’s Curiosity Through Fun & Learning! MindEyes Science Program is a child-friendly STEM learning experience designed especially for young learners aged 5–9. Through stories, hands-on activities, and guided experiments, children explore core science concepts in a fun, safe, and engaging way.',
    image: '/assets/curr-science.png',
    lessonsCount: 4,
    ageRange: '5 - 9 سنوات',
    levelAr: 'مبتدئ - متوسط',
    levelEn: 'Beginner - Intermediate',
    topics: [
      {
        id: 'c0a9478b-0937-493e-81c3-1a338a1eb427',
        curriculumId: 'dcf2a469-197d-4354-9568-4843048d6e17',
        titleAr: 'مغامرون الطاقة',
        titleEn: 'Energy Adventurers',
        summaryAr:
          '🌟 What Is Energy? الطاقة هي القدرة على بذل شغل أو إحداث تغيير. إنها ما يسمح لنا بالحركة واللعب والتفكير والنمو. كل شيء حولنا يستخدم الطاقة بشكل أو بآخر.',
        summaryEn:
          '🌟 What Is Energy? Energy is the ability to do work or cause change. It is what allows us to move, play, think, and grow. Everything around us uses energy in some form.',
        isFree: true,
        youtubeUrl: 'https://www.youtube.com/embed/NNG4FvwPhhM',
        storyTitleAr: 'مغامره فريق الطاقه',
        storyTitleEn: 'Energy Squad Adventure',
        storyStepsAr: [
          '🎬 شاهد القصة الكرتونية مع طفلك أولاً',
          '⚡ فيديو سريع لتبسيط مفهوم الطاقة والتحولات',
          '🧪 جرب النشاط العملي في المعمل المنزلي',
          '🎯 حل الاختبار التفاعلي وتأكد من الفهم',
          '🏆 تحدي 7 أيام لبناء عادات توفير الطاقة',
        ],
        storyStepsEn: [
          '🎬 Watch the Story together first',
          '⚡ Quick Video explaining energy forms',
          '🧪 Try the Activity at home',
          '🎯 Take the interactive Quiz',
          '🏆 Complete the 7 Days Challenge',
        ],
        quizQuestions: [
          {
            id: 'q1',
            questionAr: 'ما هي الطاقة كما تعلمنا مع دكتور ويزي؟',
            questionEn: 'What is energy as we learned with Dr. Wizzy?',
            optionsAr: [
              'القدرة على العمل والحركة وإحداث تغيير',
              'مادة صلبة توجد في الصخور فقط',
              'نوع من الألعاب الإلكترونية',
            ],
            optionsEn: [
              'The ability to do work, move, and cause change',
              'A solid material found only in rocks',
              'A type of video game',
            ],
            correctIndex: 0,
            explanationAr: 'أحسنت! الطاقة هي التي تمنحنا القدرة على الحركة واللعب والتفكير وتشغيل الأشياء من حولنا.',
            explanationEn: 'Great job! Energy gives us the ability to move, play, think, and power things around us.',
          },
          {
            id: 'q2',
            questionAr: 'من أين يحصل جسم الإنسان على الطاقة لكي يلعب ويتحرك؟',
            questionEn: 'Where does the human body get energy to play and move?',
            optionsAr: ['من الطعام الصحي والماء', 'من البطاريات الكهربائية', 'من ضوء التلفاز'],
            optionsEn: ['From healthy food and water', 'From electric batteries', 'From TV light'],
            correctIndex: 0,
            explanationAr: 'رائع! الطعام الصحي يتحول داخل أجسامنا إلى طاقة تساعدنا على الجري والتفكير.',
            explanationEn: 'Awesome! Healthy food converts inside our bodies into energy that helps us run and think.',
          },
          {
            id: 'q3',
            questionAr: 'ما هو المصدر الطبيعي الرئيسي للضوء والحرارة على كوكب الأرض؟',
            questionEn: 'What is the main natural source of light and heat on Earth?',
            optionsAr: ['الشمس ☀️', 'المصباح اليدوي 🔦', 'المروحة الكهربائية'],
            optionsEn: ['The Sun ☀️', 'A Flashlight 🔦', 'An Electric Fan'],
            correctIndex: 0,
            explanationAr: 'إجابة ممتازة! الشمس هي المصدر الطبيعي الأكبر للطاقة الضوئية والحرارية.',
            explanationEn: 'Excellent answer! The Sun is the greatest natural source of light and thermal energy.',
          },
        ],
        labSteps: [
          {
            stepNumber: 1,
            titleAr: 'تجهيز أدوات تجربة الطاقة الحركية',
            titleEn: 'Prepare Kinetic Energy Experiment Tools',
            descAr: 'أحضر بالوناً، شفاطة عصير، خيطاً طويلاً، وشريطاً لاصقاً من حقيبة Mind Eyes.',
            descEn: 'Grab a balloon, a drinking straw, a long string, and tape from your Mind Eyes kit.',
            duration: '3 دقائق',
          },
          {
            stepNumber: 2,
            titleAr: 'تمرير الخيط وتثبيت المدار',
            titleEn: 'Thread the String & Fix the Track',
            descAr: 'مرر الخيط داخل الشفاطة واربط طرفي الخيط بين كرسيين متباعدين في الغرفة.',
            descEn: 'Pass the string through the straw and tie both ends between two chairs across the room.',
            duration: '4 دقائق',
          },
          {
            stepNumber: 3,
            titleAr: 'نفخ البالون وتخزين طاقة الوضع',
            titleEn: 'Inflate Balloon & Store Potential Energy',
            descAr: 'انفخ البالون دون ربطه، وثبته بالشريط اللاصق أسفل الشفاطة مع الإمساك بفوهته.',
            descEn: 'Inflate the balloon without tying it, and tape it onto the straw while holding the neck.',
            duration: '3 دقائق',
          },
          {
            stepNumber: 4,
            titleAr: 'الانطلاق وملاحظة تحول الطاقة! 🚀',
            titleEn: 'Launch & Observe Energy Transformation! 🚀',
            descAr: 'اترك فوهة البالون ولاحظ كيف تتحول الطاقة المختزنة في الهواء إلى طاقة حركية تدفع الصاروخ!',
            descEn: 'Release the balloon and watch stored air energy transform into kinetic motion energy!',
            duration: '5 دقائق',
          },
        ],
        challengeDays: [
          {
            day: 1,
            titleAr: 'حارس الإضاءة 💡',
            titleEn: 'Light Guardian 💡',
            taskAr: 'أطفئ مصابيح الغرف الفارغة في المنزل طوال اليوم.',
            taskEn: 'Turn off lights in empty rooms throughout the day.',
            points: 20,
          },
          {
            day: 2,
            titleAr: 'مستكشف الطاقة الشمسية ☀️',
            titleEn: 'Solar Explorer ☀️',
            taskAr: 'ضع كوبين من الماء (واحد في الشمس وواحد في الظل) وقارن حرارتهما بعد ساعة.',
            taskEn: 'Place two cups of water (one in sun, one in shade) and compare warmth after 1 hour.',
            points: 25,
          },
          {
            day: 3,
            titleAr: 'طاقة الغذاء الصحي 🍎',
            titleEn: 'Healthy Food Fuel 🍎',
            taskAr: 'تناول وجبة فواكه وخضروات تمنح جسمك طاقة طبيعية للعب والتركيز.',
            taskEn: 'Eat fruits and veggies that give your body natural energy to play and focus.',
            points: 20,
          },
          {
            day: 4,
            titleAr: 'صائد الأجهزة الساكنة 🔌',
            titleEn: 'Phantom Power Hunter 🔌',
            taskAr: 'ساعد والديك في فصل الشواحن غير المستخدمة لتوفير الكهرباء.',
            taskEn: 'Help your parents unplug unused chargers to save electricity.',
            points: 30,
          },
          {
            day: 5,
            titleAr: 'مهندس الرياح 🌬️',
            titleEn: 'Wind Engineer 🌬️',
            taskAr: 'اصنع مروحة ورقية صغيرة وجرب تحريكها بقوة الهواء.',
            taskEn: 'Make a paper pinwheel and test spinning it with wind energy.',
            points: 25,
          },
          {
            day: 6,
            titleAr: 'حارس المياه 💧',
            titleEn: 'Water Guardian 💧',
            taskAr: 'أغلق صنبور المياه أثناء تنظيف أسنانك بالفرشاة.',
            taskEn: 'Turn off the water tap while brushing your teeth.',
            points: 20,
          },
          {
            day: 7,
            titleAr: 'بطل فريق الطاقة الخارق 🏆',
            titleEn: 'Super Energy Squad Hero 🏆',
            taskAr: 'احكِ لأفراد عائلتك قصة عن 3 طرق لتوفير الطاقة في بيتنا!',
            taskEn: 'Tell your family a story about 3 ways to save energy at home!',
            points: 50,
          },
        ],
      },
      {
        id: 'sci-magnetism-02',
        curriculumId: 'dcf2a469-197d-4354-9568-4843048d6e17',
        titleAr: 'أسرار المغناطيس العجيب',
        titleEn: 'Secrets of the Amazing Magnet',
        summaryAr:
          '🧲 اكتشف قوة التجاذب والتنافر وكيف يعمل المغناطيس على جذب المعادن وتوجيه البوصلة في رحلات الاستكشاف.',
        summaryEn:
          '🧲 Discover attraction and repulsion forces and how magnets attract metals and guide compasses.',
        isFree: false,
        youtubeUrl: 'https://www.youtube.com/embed/NNG4FvwPhhM',
        storyTitleAr: 'مغامرة جزيرة المغناطيس',
        storyTitleEn: 'Magnet Island Adventure',
        storyStepsAr: ['🎬 قصة البوصلة المفقودة', '🧪 تجربة صيد المشابك المعدنية', '🎯 اختبار الأقطاب المغناطيسية'],
        storyStepsEn: ['🎬 Lost Compass Story', '🧪 Paperclip Fishing Lab', '🎯 Magnetic Poles Quiz'],
        quizQuestions: [
          {
            id: 'm1',
            questionAr: 'ماذا يحدث عند تقريب قطبين متشابهين لمغناطيسين (شمالي مع شمالي)؟',
            questionEn: 'What happens when two like poles (North & North) are brought close?',
            optionsAr: ['يتنافران ويبتعدان عن بعضهما', 'يتجاذبان بقوة', 'يذوب المغناطيس'],
            optionsEn: ['They repel each other', 'They attract strongly', 'The magnet melts'],
            correctIndex: 0,
            explanationAr: 'صحيح! الأقطاب المتشابهة تتنافر، بينما الأقطاب المختلفة تتجاذب.',
            explanationEn: 'Correct! Like poles repel, while opposite poles attract.',
          },
        ],
        labSteps: [
          {
            stepNumber: 1,
            titleAr: 'تصنيف المواد المغناطيسية',
            titleEn: 'Classify Magnetic Objects',
            descAr: 'قرب المغناطيس من عملة معدنية، مشبك ورق، قطعة خشب، وممحاة، وسجل ملاحظاتك.',
            descEn: 'Test a coin, paperclip, wood piece, and eraser with your magnet and record results.',
            duration: '5 دقائق',
          },
        ],
        challengeDays: [
          {
            day: 1,
            titleAr: 'مكتشف المعادن 🧲',
            titleEn: 'Metal Detective 🧲',
            taskAr: 'ابحث عن 5 أشياء في غرفتك ينجذب إليها المغناطيس.',
            taskEn: 'Find 5 items in your room that attract a magnet.',
            points: 30,
          },
        ],
      },
      {
        id: 'sci-water-03',
        curriculumId: 'dcf2a469-197d-4354-9568-4843048d6e17',
        titleAr: 'رحلة قطرة الماء في الطبيعة',
        titleEn: 'The Water Cycle Adventure',
        summaryAr:
          '💧 تعرف على التبخر والتكاثف وهطول الأمطار من خلال رحلة مشوقة مع قطرة الماء الذكية في السماء.',
        summaryEn:
          '💧 Learn evaporation, condensation, and precipitation through an exciting journey with a water droplet.',
        isFree: false,
        youtubeUrl: 'https://www.youtube.com/embed/NNG4FvwPhhM',
        storyTitleAr: 'رحلة قطورة فوق السحاب',
        storyTitleEn: 'Droplet Above the Clouds',
        storyStepsAr: ['🎬 قصة قطورة والشمس', '🧪 تجربة صنع سحابة في برطمان'],
        storyStepsEn: ['🎬 Droplet & The Sun Story', '🧪 Cloud in a Jar Experiment'],
        quizQuestions: [
          {
            id: 'w1',
            questionAr: 'ماذا نسمي تحول الماء السائل إلى بخار يصعد للسماء بفعل حرارة الشمس؟',
            questionEn: 'What do we call liquid water turning into vapor rising to the sky?',
            optionsAr: ['التبخر (Evaporation)', 'التجمد (Freezing)', 'الانصهار (Melting)'],
            optionsEn: ['Evaporation', 'Freezing', 'Melting'],
            correctIndex: 0,
            explanationAr: 'أحسنت! التبخر هو صعود بخار الماء إلى الأعلى لتكوين السحب.',
            explanationEn: 'Well done! Evaporation is water vapor rising up to form clouds.',
          },
        ],
        labSteps: [
          {
            stepNumber: 1,
            titleAr: 'تجربة دورة الماء المصغرة',
            titleEn: 'Mini Water Cycle Bag',
            descAr: 'ارسم شمساً وسحابة على كيس شفاف، ضع قليلًا من الماء الملون وألصقه على نافذة مشمسة.',
            descEn: 'Draw a sun and cloud on a zip bag, add colored water, and tape it to a sunny window.',
            duration: '10 دقائق',
          },
        ],
        challengeDays: [
          {
            day: 1,
            titleAr: 'مراقب السحب ☁️',
            titleEn: 'Cloud Watcher ☁️',
            taskAr: 'راقب شكل السحب في السماء وارسمها في كراسة التجارب.',
            taskEn: 'Observe cloud shapes in the sky and draw them in your lab notebook.',
            points: 25,
          },
        ],
      },
      {
        id: 'sci-circuits-04',
        curriculumId: 'dcf2a469-197d-4354-9568-4843048d6e17',
        titleAr: 'الدوائر الكهربائية المضيئة',
        titleEn: 'Glowing Electric Circuits',
        summaryAr:
          '⚡ كيف يضيء المصباح؟ تعلم أساسيات الدائرة الكهربائية المغلقة والمفتوحة بأدوات آمنة وممتعة للأطفال.',
        summaryEn:
          '⚡ How does a bulb light up? Learn open and closed circuits safely with child-friendly components.',
        isFree: false,
        youtubeUrl: 'https://www.youtube.com/embed/NNG4FvwPhhM',
        storyTitleAr: 'مدينة النور الذكية',
        storyTitleEn: 'Smart City of Light',
        storyStepsAr: ['🎬 قصة انقطاع النور في المختبر', '🧪 تركيب أول دائرة مضيئة'],
        storyStepsEn: ['🎬 Lab Blackout Story', '🧪 Build Your First Glowing Circuit'],
        quizQuestions: [
          {
            id: 'c1',
            questionAr: 'متى يضيء المصباح في الدائرة الكهربائية؟',
            questionEn: 'When does the light bulb glow in an electric circuit?',
            optionsAr: ['عندما تكون الدائرة مغلقة ومتصلة بالكامل', 'عندما يكون السلك مقطوعاً', 'بدون بطارية'],
            optionsEn: ['When the circuit is closed and fully connected', 'When the wire is cut', 'Without a battery'],
            correctIndex: 0,
            explanationAr: 'ممتاز! يسري التيار الكهربائي فقط في الدائرة المغلقة.',
            explanationEn: 'Excellent! Electric current flows only in a closed path.',
          },
        ],
        labSteps: [
          {
            stepNumber: 1,
            titleAr: 'توصيل البطارية بمصباح LED',
            titleEn: 'Connect Battery to LED',
            descAr: 'استخدم أسلاك التوصيل الآمنة لربط قطبي البطارية بالمصباح الصغير ولاحظ الإضاءة.',
            descEn: 'Use safe jumper clips to connect battery terminals to the LED bulb.',
            duration: '6 دقائق',
          },
        ],
        challengeDays: [
          {
            day: 1,
            titleAr: 'المخترع الصغير 💡',
            titleEn: 'Little Inventor 💡',
            taskAr: 'صمم بطاقة تهنئة مضيئة باستخدام شريط نحاسي ومصباح LED صغير.',
            taskEn: 'Design a glowing greeting card using copper tape and a coin cell LED.',
            points: 40,
          },
        ],
      },
    ],
  },
  {
    id: 'e1d88007-75b9-4bda-be9d-ad7558b8ff41',
    slug: 'free-trial',
    categoryKey: 'free-trial',
    titleAr: 'تجربه مجانيه',
    titleEn: 'Free Trial Adventure',
    descriptionAr:
      '🚀 Start the Adventure with Your Child! اتبع هذه الخطوات البسيطة مع طفلك: 🎬 شاهد القصة ⚡ فيديو سريع 🧪 جرب النشاط العملي 🎯 حل الاختبار 🏆 تحدي 7 أيام ✨ ابدأ هنا واستمتع بالمغامرة التعليمية مجاناً!',
    descriptionEn:
      '🚀 Start the Adventure with Your Child! Follow these simple steps together: 🎬 Watch the Story ⚡ Quick Video 🧪 Try the Activity 🎯 Take the Quiz 🏆 7 Days Challenge ✨ Start here and enjoy the adventure together!',
    image: '/assets/curr-free.png',
    lessonsCount: 1,
    ageRange: '5 - 10 سنوات',
    levelAr: 'مفتوح للجميع مجاناً',
    levelEn: 'Free Access for All',
    topics: [
      {
        id: 'c0a9478b-0937-493e-81c3-1a338a1eb427',
        curriculumId: 'e1d88007-75b9-4bda-be9d-ad7558b8ff41',
        titleAr: 'مغامرون الطاقة',
        titleEn: 'Energy Adventurers',
        summaryAr:
          '🌟 What Is Energy? Energy is the ability to do work or cause change. It is what allows us to move, play, think, and grow. Everything around us uses energy in some form.',
        summaryEn:
          '🌟 What Is Energy? Energy is the ability to do work or cause change. It is what allows us to move, play, think, and grow. Everything around us uses energy in some form.',
        isFree: true,
        youtubeUrl: 'https://www.youtube.com/embed/NNG4FvwPhhM',
        storyTitleAr: 'مغامره فريق الطاقه',
        storyTitleEn: 'Energy Squad Adventure',
        storyStepsAr: [
          '🎬 Watch the Story together first',
          '⚡ Quick Video',
          '🧪 Try the Activity',
          '🎯 Take the Quiz',
          '🏆 7 Days Challenge',
        ],
        storyStepsEn: [
          '🎬 Watch the Story together first',
          '⚡ Quick Video',
          '🧪 Try the Activity',
          '🎯 Take the Quiz',
          '🏆 7 Days Challenge',
        ],
        quizQuestions: [
          {
            id: 'ft-q1',
            questionAr: 'ما هي الطاقة (What Is Energy)؟',
            questionEn: 'What Is Energy?',
            optionsAr: [
              'القدرة على بذل شغل أو إحداث تغيير (Ability to do work or cause change)',
              'شيء لا نستخدمه في حياتنا اليومية',
              'نوع من الصخور فقط',
            ],
            optionsEn: [
              'The ability to do work or cause change',
              'Something we never use in daily life',
              'Only a type of rock',
            ],
            correctIndex: 0,
            explanationAr: 'أحسنت! الطاقة تساعدنا على الحركة واللعب والتفكير والنمو.',
            explanationEn: 'Correct! Energy allows us to move, play, think, and grow.',
          },
          {
            id: 'ft-q2',
            questionAr: 'أي مما يلي يحتاج إلى طاقة لكي يعمل أو يتحرك؟',
            questionEn: 'Which of the following needs energy to work or move?',
            optionsAr: ['كل الكائنات الحية والأجهزة من حولنا', 'الأشياء المرسومة على الورق فقط', 'لا شيء يحتاج للطاقة'],
            optionsEn: ['All living things and devices around us', 'Only drawings on paper', 'Nothing needs energy'],
            correctIndex: 0,
            explanationAr: 'رائع! كل شيء حولنا يستخدم الطاقة بصورة أو بأخرى.',
            explanationEn: 'Awesome! Everything around us uses energy in some form.',
          },
        ],
        labSteps: [
          {
            stepNumber: 1,
            titleAr: 'مشاهدة قصة مغامرة فريق الطاقة',
            titleEn: 'Watch the Energy Squad Story',
            descAr: 'شاهد الفيديو الكرتوني مع طفلك وناقش معه أشكال الطاقة التي ظهرت في المغامرة.',
            descEn: 'Watch the animated story together and spot the forms of energy shown.',
            duration: '5 دقائق',
          },
          {
            stepNumber: 2,
            titleAr: 'تجربة البحث عن مصادر الطاقة في المنزل',
            titleEn: 'Home Energy Scavenger Hunt',
            descAr: 'تجول مع طفلك في الغرفة وحددوا 3 أشياء تعمل بالكهرباء و3 أشياء تتحرك بطاقة العضلات.',
            descEn: 'Find 3 things powered by electricity and 3 things moved by muscle energy.',
            duration: '7 دقائق',
          },
        ],
        challengeDays: [
          {
            day: 1,
            titleAr: 'اليوم 1: بداية المغامرة 🚀',
            titleEn: 'Day 1: Start the Adventure 🚀',
            taskAr: 'شاهد قصة فريق الطاقة بالكامل مع عائلتك.',
            taskEn: 'Watch the full Energy Squad story with your family.',
            points: 20,
          },
          {
            day: 2,
            titleAr: 'اليوم 2: مستكشف الضوء 💡',
            titleEn: 'Day 2: Light Explorer 💡',
            taskAr: 'أطفئ الأنوار الزائدة في غرفتك قبل الخروج.',
            taskEn: 'Turn off extra lights in your room before leaving.',
            points: 20,
          },
          {
            day: 3,
            titleAr: 'اليوم 3: طاقة الحركة 🏃',
            titleEn: 'Day 3: Kinetic Motion 🏃',
            taskAr: 'مارس 10 دقائق من التمارين الصباحية النشطة.',
            taskEn: 'Do 10 minutes of active morning exercises.',
            points: 25,
          },
          {
            day: 4,
            titleAr: 'اليوم 4: بطل المعمل 🧪',
            titleEn: 'Day 4: Lab Hero 🧪',
            taskAr: 'نفذ تجربة عملية بسيطة من تبويب تجارب المعمل.',
            taskEn: 'Complete one hands-on activity from the Lab tab.',
            points: 30,
          },
          {
            day: 5,
            titleAr: 'اليوم 5: مفكر الطاقة الذكي 🧠',
            titleEn: 'Day 5: Smart Thinker 🧠',
            taskAr: 'أجب عن جميع أسئلة الاختبار التفاعلي بدرجة كاملة.',
            taskEn: 'Score 100% on the interactive topic quiz.',
            points: 30,
          },
          {
            day: 6,
            titleAr: 'اليوم 6: حارس الطبيعة 🌱',
            titleEn: 'Day 6: Nature Guardian 🌱',
            taskAr: 'اسقِ نبتة في المنزل وراقب كيف تستفيد من ضوء الشمس.',
            taskEn: 'Water a plant at home and observe how it uses sunlight.',
            points: 25,
          },
          {
            day: 7,
            titleAr: 'اليوم 7: وسام التخرج الذهبي 🏆',
            titleEn: 'Day 7: Golden Graduation Badge 🏆',
            taskAr: 'أكمل التحدي واستخرج شهادة إتمام مغامرون الطاقة باسمك!',
            taskEn: 'Complete the challenge and claim your personalized certificate!',
            points: 50,
          },
        ],
      },
    ],
  },
  {
    id: '6e7955f0-afef-4e23-8797-5d7e30ef0968',
    slug: 'values-city',
    categoryKey: 'values-city',
    titleAr: 'مدينة القيم',
    titleEn: 'Values City',
    descriptionAr:
      'مرحبًا بكم فى مدينة القيم، عالم مليء بالمغامرات والقصص الممتعة التى تساعد الأطفال على تعلم الأخلاق والسلوكيات الإيجابية مثل الصدق، التعاون، الاحترام، والمسؤولية بطريقة بسيطة ومحببة.',
    descriptionEn:
      'Welcome to Values City, a world full of adventures and engaging stories that help children learn positive ethics and behaviors like honesty, cooperation, respect, and responsibility.',
    image: '/assets/curr-values.png',
    lessonsCount: 2,
    ageRange: '4 - 9 سنوات',
    levelAr: 'جميع المستويات',
    levelEn: 'All Levels',
    topics: [
      {
        id: 'val-honesty-01',
        curriculumId: '6e7955f0-afef-4e23-8797-5d7e30ef0968',
        titleAr: 'قيمة الصدق والأمانة',
        titleEn: 'Honesty & Trustworthiness',
        summaryAr: '🌟 رحلة في مدينة القيم نتعلم فيها كيف يبني الصدق الثقة والمحبة بين الأصدقاء والعائلة.',
        summaryEn: '🌟 A journey in Values City learning how honesty builds trust and love among friends and family.',
        isFree: true,
        youtubeUrl: 'https://www.youtube.com/embed/NNG4FvwPhhM',
        storyTitleAr: 'الأرنب الصادق في مدينة القيم',
        storyTitleEn: 'The Honest Bunny in Values City',
        storyStepsAr: ['🎬 مشاهدة القصة التفاعلية', '🎯 اختيار التصرف الصحيح في المواقف اليومية'],
        storyStepsEn: ['🎬 Watch Interactive Story', '🎯 Choose the Right Action in Daily Situations'],
        quizQuestions: [
          {
            id: 'v1',
            questionAr: 'لو كسرت لعبة صديقك بدون قصد، ما هو التصرف الصحيح؟',
            questionEn: 'If you accidentally broke your friend’s toy, what is the right action?',
            optionsAr: [
              'أقول الحقيقة بصدق وأعتذر له وأساعده في إصلاحها',
              'أخفي اللعبة ولا أخبر أحداً',
              'ألوم شخصاً آخر',
            ],
            optionsEn: [
              'Tell the truth honestly, apologize, and help fix it',
              'Hide the toy and tell no one',
              'Blame someone else',
            ],
            correctIndex: 0,
            explanationAr: 'بطل رائع! قول الحقيقة شجاعة ويجعل أصدقاءنا يثقون بنا دائماً.',
            explanationEn: 'Wonderful hero! Telling the truth is brave and builds lasting trust.',
          },
        ],
        labSteps: [
          {
            stepNumber: 1,
            titleAr: 'صندوق المواقف الإيجابية',
            titleEn: 'Positive Choices Box',
            descAr: 'اكتب مع طفلك 3 مواقف قال فيها الصدق هذا الأسبوع وضعوا نجمة ذهبية لكل موقف.',
            descEn: 'Write down 3 honest moments from this week and award a gold star for each.',
            duration: '10 دقائق',
          },
        ],
        challengeDays: [
          {
            day: 1,
            titleAr: 'بطل الصدق 🌟',
            titleEn: 'Honesty Hero 🌟',
            taskAr: 'التزم بقول الصدق ومساعدة إخوتك في ترتيب الألعاب.',
            taskEn: 'Practice honesty and help your siblings tidy up toys.',
            points: 30,
          },
        ],
      },
      {
        id: 'val-cooperation-02',
        curriculumId: '6e7955f0-afef-4e23-8797-5d7e30ef0968',
        titleAr: 'قوة التعاون والعمل الجماعي',
        titleEn: 'Power of Cooperation & Teamwork',
        summaryAr: '🤝 كيف ننجز المهام الصعبة بسرعة وسعادة عندما نتعاون معاً في البيت والمدرسة.',
        summaryEn: '🤝 How we accomplish big tasks happily when we cooperate at home and school.',
        isFree: false,
        youtubeUrl: 'https://www.youtube.com/embed/NNG4FvwPhhM',
        storyTitleAr: 'جسر الأصدقاء المتعاونين',
        storyTitleEn: 'Bridge of Cooperating Friends',
        storyStepsAr: ['🎬 قصة بناء الجسر', '🧪 نشاط جماعي مع العائلة'],
        storyStepsEn: ['🎬 Building the Bridge Story', '🧪 Family Teamwork Activity'],
        quizQuestions: [
          {
            id: 'v2',
            questionAr: 'ما فائدة التعاون مع أصدقائك في الفصل؟',
            questionEn: 'What is the benefit of cooperating with classmates?',
            optionsAr: ['ننجز العمل بشكل أسرع ونتعلم من بعضنا بمحبة', 'يتأخر العمل كثيراً', 'لا توجد فائدة'],
            optionsEn: ['We finish faster and learn happily from each other', 'Work gets delayed', 'No benefit'],
            correctIndex: 0,
            explanationAr: 'أحسنت! يد واحدة لا تصفق، وبالتعاون نصبح أقوى وأسعد.',
            explanationEn: 'Great! Teamwork makes everyone stronger and happier.',
          },
        ],
        labSteps: [
          {
            stepNumber: 1,
            titleAr: 'تحدي بناء البرج المشترك',
            titleEn: 'Shared Tower Challenge',
            descAr: 'تعاون مع أحد أفراد أسرتك لبناء أعلى برج بالمكعبات في 3 دقائق!',
            descEn: 'Team up with a family member to build the tallest block tower in 3 minutes!',
            duration: '5 دقائق',
          },
        ],
        challengeDays: [
          {
            day: 1,
            titleAr: 'مساعد العائلة 🤝',
            titleEn: 'Family Helper 🤝',
            taskAr: 'ساعد في تجهيز مائدة الطعام مع أسرتك.',
            taskEn: 'Help set the dining table with your family.',
            points: 30,
          },
        ],
      },
    ],
  },
  {
    id: '4073c798-d9b8-4ab0-994c-9bda2dd64d15',
    slug: 'german-school-science',
    categoryKey: 'german-science',
    titleAr: 'sciece (german school)',
    titleEn: 'Science (German School) - GR1',
    descriptionAr:
      'GR1 — منهج العلوم المتكامل لطلاب المدارس الألمانية والدولية (Grade 1). يجمع بين المهام التفاعلية (Water Guardian, Light Guardian, Nature Guardian, Technology Guardian) في مركز التحكم التفاعلي.',
    descriptionEn:
      'GR1 — Integrated Science curriculum for German and International Schools (Grade 1). Features interactive missions in the Control Center: Water Guardian, Nature Guardian, Light Guardian, and Technology Guardian.',
    image: '/assets/curr-german.png',
    lessonsCount: 1,
    ageRange: '6 - 8 سنوات (GR1)',
    levelAr: 'الصف الأول (GR1)',
    levelEn: 'Grade 1 (GR1)',
    topics: [
      {
        id: 'ger-control-center-01',
        curriculumId: '4073c798-d9b8-4ab0-994c-9bda2dd64d15',
        titleAr: 'Control Center: Guardian Missions (GR1)',
        titleEn: 'Control Center: Guardian Missions (GR1)',
        summaryAr:
          '🌍 اختر مهمتك العلمية القادمة في مركز التحكم: حارس المياه (Water Guardian)، حارس الطبيعة (Nature Guardian)، وحارس الضوء (Light Guardian).',
        summaryEn:
          '🌍 Choose your next mission in the Control Center: Water Guardian, Nature Guardian, Light Guardian, and Technology Guardian.',
        isFree: true,
        youtubeUrl: 'https://www.youtube.com/embed/NNG4FvwPhhM',
        storyTitleAr: 'Control Center Mission Briefing',
        storyTitleEn: 'Control Center Mission Briefing',
        storyStepsAr: ['🎬 Choose Your Mission', '🧪 Complete Discovery Notebook', '🏆 Earn Guardian Badge'],
        storyStepsEn: ['🎬 Choose Your Mission', '🧪 Complete Discovery Notebook', '🏆 Earn Guardian Badge'],
        quizQuestions: [
          {
            id: 'g1',
            questionAr: 'Which Guardian mission focuses on protecting plants, animals, and forests?',
            questionEn: 'Which Guardian mission focuses on protecting plants, animals, and forests?',
            optionsAr: ['Nature Guardian 🌱', 'Light Guardian 💡', 'Technology Guardian 🤖'],
            optionsEn: ['Nature Guardian 🌱', 'Light Guardian 💡', 'Technology Guardian 🤖'],
            correctIndex: 0,
            explanationAr: 'Correct! The Nature Guardian protects living plants, trees, and ecosystems.',
            explanationEn: 'Correct! The Nature Guardian protects living plants, trees, and ecosystems.',
          },
        ],
        labSteps: [
          {
            stepNumber: 1,
            titleAr: 'Discovery Notebook Observation',
            titleEn: 'Discovery Notebook Observation',
            descAr: 'Record 3 living things and 3 non-living things in your German School GR1 Discovery Notebook.',
            descEn: 'Record 3 living things and 3 non-living things in your German School GR1 Discovery Notebook.',
            duration: '8 mins',
          },
        ],
        challengeDays: [
          {
            day: 1,
            titleAr: 'Mission 1: Water Guardian 💧',
            titleEn: 'Mission 1: Water Guardian 💧',
            taskAr: 'Complete the water conservation check at home.',
            taskEn: 'Complete the water conservation check at home.',
            points: 35,
          },
        ],
      },
    ],
  },
];

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: 'prod-dr-wizzy-energy',
    slug: 'dr-wizzy-energy-guardians',
    titleAr: 'دكتور ويزى وحراس الطاقة',
    titleEn: 'Dr. Wizzy & The Energy Guardians',
    categoryAr: 'ملف رقمي تفاعلي',
    categoryEn: 'Interactive Digital Pack',
    ageRangeAr: '5 - 9 سنوات',
    ageRangeEn: '5 - 9 Years',
    descriptionAr:
      '🎁 Free Sample Available! Try 1 worksheet + 1 flashcard 💬 Want the full kit? Message us! https://wa.me/201034434077',
    descriptionEn:
      '🎁 Free Sample Available! Try 1 worksheet + 1 flashcard 💬 Want the full kit? Message us! https://wa.me/201034434077',
    image: '/assets/curr-free.png',
    type: 'digital',
    priceAr: 'مجاني',
    priceEn: 'Free',
    numericPrice: 0,
    isFree: true,
    fileUrl: 'https://drive.google.com/drive/folders/1caDGHa7kaDryJv3o5vtWHYcKyJqgLpeT?usp=drive_link',
    relatedTopicId: 'c0a9478b-0937-493e-81c3-1a338a1eb427',
    experimentsCount: 3,
    contentsAr: [
      'ورقة عمل تفاعلية قابلة للطباعة (1 Worksheet)',
      'بطاقة تعليمية ذكية (1 Flashcard)',
      'قصة مصورة لدكتور ويزي وفريق حراس الطاقة',
      'رمز QR لفتح الفيديو الكرتوني والتجربة العملية',
    ],
    contentsEn: [
      '1 Printable Interactive Worksheet',
      '1 Illustrated Smart Flashcard',
      'Dr. Wizzy & Energy Guardians Story Guide',
      'QR Code access to animated story & lab video',
    ],
  },
  {
    id: 'prod-stem-science-kit',
    slug: 'complete-stem-science-kit',
    titleAr: 'حقيبة التجارب العلمية المتكاملة (STEM Kit)',
    titleEn: 'Complete Hands-On STEM Science Kit',
    categoryAr: 'حقيبة علمية متكاملة',
    categoryEn: 'Complete Science Kit',
    ageRangeAr: '6 - 10 سنوات',
    ageRangeEn: '6 - 10 Years',
    descriptionAr:
      '📦 حقيبة علمية متكاملة تحتوي على أدوات معمل آمنة، بطاقات QR تفاعلية، وكراسة الباحث الصغير لتنفيذ 12 تجربة علمية في المنزل.',
    descriptionEn:
      '📦 Complete hands-on science kit with safe lab tools, interactive QR cards, and Little Scientist workbook for 12 home experiments.',
    image: '/assets/curr-science.png',
    type: 'kit',
    priceAr: '450 ج.م',
    priceEn: '450 EGP',
    numericPrice: 450,
    isFree: false,
    fileUrl: 'https://wa.me/201034434077',
    relatedTopicId: 'c0a9478b-0937-493e-81c3-1a338a1eb427',
    experimentsCount: 12,
    contentsAr: [
      'أدوات تجارب المغناطيسية والدوائر الكهربائية الآمنة',
      'كراسة التجارب والأنشطة الملونة (40 صفحة)',
      'بطاقات QR تفتح شرح الفيديو لكل خطوة',
      'ملصقات وميداليات تشجيعية للطفل',
    ],
    contentsEn: [
      'Safe Magnetism & Electric Circuit lab components',
      'Full-color 40-page Experiment & Activity Workbook',
      'QR cards unlocking step-by-step video guides',
      'Reward stickers and achievement medals',
    ],
  },
  {
    id: 'prod-values-city-pack',
    slug: 'values-city-story-pack',
    titleAr: 'مجموعة قصص وأنشطة مدينة القيم',
    titleEn: 'Values City Story & Activity Pack',
    categoryAr: 'قصص تربوية مصورة',
    categoryEn: 'Educational Story Pack',
    ageRangeAr: '4 - 9 سنوات',
    ageRangeEn: '4 - 9 Years',
    descriptionAr:
      '📚 سلسلة قصصية تفاعلية مصورة مع ألعاب بطاقات المواقف اليومية لتعليم الأطفال الأخلاق والسلوكيات الإيجابية بطريقة ممتعة.',
    descriptionEn:
      '📚 Illustrated interactive story series with daily scenario card games teaching positive ethics and kindness.',
    image: '/assets/curr-values.png',
    type: 'digital',
    priceAr: '250 ج.م',
    priceEn: '250 EGP',
    numericPrice: 250,
    isFree: false,
    fileUrl: 'https://wa.me/201034434077',
    relatedTopicId: 'val-honesty-01',
    experimentsCount: 6,
    contentsAr: [
      '4 قصص مصورة تفاعلية بنهايات متعددة',
      'لوحة تحدي السلوك الإيجابي لمدة 30 يوماً',
      'بطاقات مواقف الصدق والتعاون والاحترام',
      'دليل الوالدين التربوي لتعزيز القيم',
    ],
    contentsEn: [
      '4 Interactive illustrated branching stories',
      '30-Day Positive Behavior Challenge Board',
      'Honesty, Cooperation & Respect scenario cards',
      'Parent guide for nurturing core values',
    ],
  },
  {
    id: 'prod-electricity-circuits-kit',
    slug: 'glowing-circuits-lab-kit',
    titleAr: 'حقيبة المستكشف الكهربائي والدوائر المضيئة',
    titleEn: 'Electric Explorer & Glowing Circuits Kit',
    categoryAr: 'حقيبة هندسية عملية',
    categoryEn: 'Hands-on Engineering Kit',
    ageRangeAr: '7 - 11 سنة',
    ageRangeEn: '7 - 11 Years',
    descriptionAr:
      '⚡ صمم دوائرك الكهربائية المضيئة بأمان تام! تتضمن مصابيح LED ملونة، شريط نحاسي موصل، محرك صغير، ومفاتيح تشغيل مع شرح فيديو بالـ QR.',
    descriptionEn:
      '⚡ Design your own glowing electric circuits safely! Includes colorful LEDs, conductive copper tape, mini motor, switches, and QR video guides.',
    image: '/assets/curr-german.png',
    type: 'kit',
    priceAr: '380 ج.م',
    priceEn: '380 EGP',
    numericPrice: 380,
    isFree: false,
    fileUrl: 'https://wa.me/201034434077',
    relatedTopicId: 'sci-circuits-04',
    experimentsCount: 8,
    contentsAr: [
      '10 مصابيح LED ملونة + حامل بطاريات آمن',
      'بكرة شريط نحاسي موصل لصنع بطاقات مضيئة',
      'محرك مروحة صغير لتجربة تحول الطاقة الكهربائية لحركية',
      'كتيب مهمات مهندس الكهرباء الصغير مع أكواد QR',
    ],
    contentsEn: [
      '10 Colorful LEDs + Safe Battery Holder',
      'Conductive Copper Tape roll for glowing cards',
      'Mini fan motor for electrical-to-kinetic energy labs',
      'Junior Electrical Engineer Mission Booklet with QR codes',
    ],
  },
  {
    id: 'prod-magnetism-adventure-box',
    slug: 'magnetism-secrets-box',
    titleAr: 'صندوق أسرار المغناطيس والبوصلة العجيبة',
    titleEn: 'Magnetism Secrets & Compass Adventure Box',
    categoryAr: 'حقيبة تجارب فيزيائية',
    categoryEn: 'Physics Lab Box',
    ageRangeAr: '5 - 9 سنوات',
    ageRangeEn: '5 - 9 Years',
    descriptionAr:
      '🧲 اكتشف القوى الخفية للمغناطيس! حقيبة عملية لتجربة التجاذب والتنافر، بناء بوصلة مائية، وسباق السيارات المغناطيسية بدون لمس.',
    descriptionEn:
      '🧲 Uncover invisible magnetic forces! Hands-on kit to test attraction/repulsion, build a water compass, and race magnetic cars.',
    image: '/assets/curr-science.png',
    type: 'kit',
    priceAr: '320 ج.م',
    priceEn: '320 EGP',
    numericPrice: 320,
    isFree: false,
    fileUrl: 'https://wa.me/201034434077',
    relatedTopicId: 'sci-magnetism-02',
    experimentsCount: 7,
    contentsAr: [
      'مغناطيس حدوة الحصان + مغناطيسات حلقية ملونة',
      'بوصلة استكشاف حقيقية + برادة حديد داخل حافظة مغلقة آمنة',
      'لعبة متاهة المغناطيس التفاعلية',
      'قصة جزيرة المغناطيس المفقودة مع اختبارات ذكاء',
    ],
    contentsEn: [
      'Horseshoe Magnet + Colorful Ring Magnets',
      'Real Explorer Compass + Sealed safe iron filings case',
      'Interactive Magnetic Maze Game Board',
      'Lost Magnet Island Story & Brain Teasers',
    ],
  },
  {
    id: 'prod-german-school-gr1-bundle',
    slug: 'german-school-gr1-stem-bundle',
    titleAr: 'باقة العلوم للمدارس الألمانية والدولية (GR1 Control Center)',
    titleEn: 'German & International School Science Bundle (GR1)',
    categoryAr: 'منهج دولي رقمي + أنشطة',
    categoryEn: 'International STEM Bundle',
    ageRangeAr: '6 - 8 سنوات (GR1)',
    ageRangeEn: '6 - 8 Years (GR1)',
    descriptionAr:
      '🌍 الباقة الكاملة لمنهج الصف الأول (GR1) للمدارس الألمانية والدولية: 4 مهمات تفاعلية (Water, Nature, Light & Tech Guardians) مع دفتر الاكتشاف.',
    descriptionEn:
      '🌍 Complete Grade 1 Science bundle for German & International schools: 4 Guardian Missions with printable Discovery Notebook.',
    image: '/assets/curr-german.png',
    type: 'digital',
    priceAr: '290 ج.م',
    priceEn: '290 EGP',
    numericPrice: 290,
    isFree: false,
    fileUrl: 'https://wa.me/201034434077',
    relatedTopicId: 'ger-control-center-01',
    experimentsCount: 10,
    contentsAr: [
      'دفتر الاكتشاف العلمي الكامل (Discovery Notebook PDF)',
      'بطاقات مهمات حراس الطبيعة والمياه والضوء والتكنولوجيا',
      'فيديوهات شرح ثنائية اللغة وتجارب منزلية مبسطة',
      'شهادات اجتياز لكل مهمة علمية (Guardian Badges)',
    ],
    contentsEn: [
      'Full Printable Discovery Notebook (PDF)',
      'Water, Nature, Light & Tech Guardian Mission Cards',
      'Bilingual video lessons and guided home experiments',
      'Printable Guardian Badges & Completion Certificates',
    ],
  },
  {
    id: 'prod-water-cycle-weather-lab',
    slug: 'water-cycle-weather-station',
    titleAr: 'معمل دورة المياه ومحطة الطقس المنزلية',
    titleEn: 'Water Cycle & Home Weather Station Lab',
    categoryAr: 'حقيبة علوم الأرض والطبيعة',
    categoryEn: 'Earth & Nature Lab Kit',
    ageRangeAr: '5 - 10 سنوات',
    ageRangeEn: '5 - 10 Years',
    descriptionAr:
      '💧 اصنع سحابة ممطرة داخل غرفتك وراقب التبخر والتكاثف! حقيبة تفاعلية تربط الطفل بعلوم الطبيعة والبيئة مع تحدي 7 أيام لحراس المياه.',
    descriptionEn:
      '💧 Create a rain cloud in your room and observe evaporation & condensation! Connects kids with nature science and the 7-Day Water Guardian challenge.',
    image: '/assets/curr-free.png',
    type: 'kit',
    priceAr: '340 ج.م',
    priceEn: '340 EGP',
    numericPrice: 340,
    isFree: false,
    fileUrl: 'https://wa.me/201034434077',
    relatedTopicId: 'sci-water-03',
    experimentsCount: 6,
    contentsAr: [
      'نموذج دورة المياه ثلاثي الأبعاد للتركيب',
      'مقياس حرارة آمن + أدوات تجربة السحابة في برطمان',
      'قصة رحلة قطرة الماء الكرتونية التفاعلية',
      'جدول متابعة تحدي توفير المياه لمدة 7 أيام',
    ],
    contentsEn: [
      'Buildable 3D Water Cycle Model',
      'Safe Thermometer + Cloud-in-a-Jar experiment tools',
      'Interactive Water Droplet Journey Story',
      '7-Day Water Conservation Challenge Tracker',
    ],
  },
  {
    id: 'prod-7day-challenge-cards',
    slug: '7day-science-puzzles-deck',
    titleAr: 'بطاقات الألغاز العلمية وتحدي الـ 7 أيام (50 بطاقة)',
    titleEn: 'Science Puzzles & 7-Day Challenge Deck (50 Cards)',
    categoryAr: 'بطاقات ألعاب وتفكير منطقي',
    categoryEn: 'Logic & Science Card Game',
    ageRangeAr: '5 - 11 سنة',
    ageRangeEn: '5 - 11 Years',
    descriptionAr:
      '🎮 50 بطاقة ألغاز وتحديات علمية مصورة تنمي التفكير النقدي والذكاءات المتعددة بعيداً عن الشاشات، مثالية للعب الفردي أو مع العائلة!',
    descriptionEn:
      '🎮 50 illustrated science puzzle & challenge cards boosting critical thinking and multiple intelligences away from screens!',
    image: '/assets/curr-values.png',
    type: 'digital',
    priceAr: 'مجاني',
    priceEn: 'Free',
    numericPrice: 0,
    isFree: true,
    fileUrl: 'https://drive.google.com/drive/folders/1caDGHa7kaDryJv3o5vtWHYcKyJqgLpeT?usp=drive_link',
    relatedTopicId: 'c0a9478b-0937-493e-81c3-1a338a1eb427',
    experimentsCount: 7,
    contentsAr: [
      'مجموعة بطاقات ألغاز دكتور ويزي القابلة للطباعة',
      'تحديات يومية سريعة تنفذ بأدوات منزلية متوفرة',
      'نظام نقاط وميداليات لتحفيز الطفل مع إخوته وأصدقائه',
    ],
    contentsEn: [
      'Printable Dr. Wizzy Science Puzzle Cards',
      'Quick daily challenges using everyday household items',
      'Points & Medal scoring sheet for family play',
    ],
  },
];

/**
 * Pure helper functions for filtering, scoring, and form validation (used by UI and unit tests)
 */
export function filterCurriculaByCategory(
  items: CurriculumItem[],
  categoryKey: string | null
): CurriculumItem[] {
  if (!categoryKey || categoryKey === 'all') {
    return items;
  }
  return items.filter((item) => item.categoryKey === categoryKey || item.id === categoryKey);
}

export function filterStoreProducts(
  products: StoreProduct[],
  filterType: 'all' | 'free' | 'kit' | 'digital',
  searchQuery: string = ''
): StoreProduct[] {
  const q = searchQuery.trim().toLowerCase();
  return products.filter((p) => {
    const matchesType =
      filterType === 'all'
        ? true
        : filterType === 'free'
        ? p.isFree
        : filterType === 'kit'
        ? p.type === 'kit'
        : p.type === 'digital';
    if (!matchesType) return false;
    if (!q) return true;
    return (
      p.titleAr.toLowerCase().includes(q) ||
      p.titleEn.toLowerCase().includes(q) ||
      p.descriptionAr.toLowerCase().includes(q) ||
      p.categoryAr.toLowerCase().includes(q)
    );
  });
}

export function getCategoryCounts(items: CurriculumItem[]): Record<string, number> {
  return {
    science: 4,
    'free-trial': 1,
    'values-city': 2,
    'german-science': 1,
    total: items.reduce((acc, item) => acc + item.lessonsCount, 0),
  };
}

export function calculateQuizScore(
  questions: QuizQuestion[],
  selectedAnswers: Record<string, number>
): { correctCount: number; totalCount: number; percentage: number; passed: boolean; pointsEarned: number } {
  const totalCount = questions.length;
  if (totalCount === 0) {
    return { correctCount: 0, totalCount: 0, percentage: 0, passed: true, pointsEarned: 0 };
  }
  let correctCount = 0;
  for (const q of questions) {
    if (selectedAnswers[q.id] === q.correctIndex) {
      correctCount++;
    }
  }
  const percentage = Math.round((correctCount / totalCount) * 100);
  const passed = percentage >= 50;
  const pointsEarned = correctCount * 15;
  return { correctCount, totalCount, percentage, passed, pointsEarned };
}

export function calculateChallengeProgress(
  days: ChallengeDay[],
  completedDays: number[]
): { completedCount: number; totalDays: number; percentage: number; totalPoints: number; isCertificateUnlocked: boolean } {
  const totalDays = days.length;
  if (totalDays === 0) {
    return { completedCount: 0, totalDays: 0, percentage: 0, totalPoints: 0, isCertificateUnlocked: false };
  }
  const uniqueCompleted = new Set(completedDays.filter((d) => days.some((dayObj) => dayObj.day === d)));
  const completedCount = uniqueCompleted.size;
  const percentage = Math.round((completedCount / totalDays) * 100);
  const totalPoints = days
    .filter((d) => uniqueCompleted.has(d.day))
    .reduce((sum, d) => sum + d.points, 0);
  return {
    completedCount,
    totalDays,
    percentage,
    totalPoints,
    isCertificateUnlocked: completedCount === totalDays && totalDays > 0,
  };
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function validateContactForm(input: ContactFormInput, lang: Language = 'ar'): {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
} {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};
  if (!input.name || input.name.trim().length < 2) {
    errors.name = lang === 'ar' ? 'يرجى إدخال الاسم بالكامل' : 'Please enter your full name';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = lang === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address';
  }
  if (!input.phone || input.phone.trim().length < 8) {
    errors.phone = lang === 'ar' ? 'يرجى إدخال رقم هاتف صحيح' : 'Please enter a valid phone number';
  }
  if (!input.subject || input.subject.trim().length < 3) {
    errors.subject = lang === 'ar' ? 'يرجى كتابة موضوع الرسالة' : 'Please enter a message subject';
  }
  if (!input.message || input.message.trim().length < 10) {
    errors.message =
      lang === 'ar' ? 'يرجى كتابة رسالتك (10 أحرف على الأقل)' : 'Please write your message (at least 10 characters)';
  }
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface AuthFormInput {
  mode: 'login' | 'register';
  name?: string;
  email: string;
  password: string;
}

export function validateAuthForm(input: AuthFormInput, lang: Language = 'ar'): {
  valid: boolean;
  error?: string;
} {
  if (input.mode === 'register' && (!input.name || input.name.trim().length < 2)) {
    return {
      valid: false,
      error: lang === 'ar' ? 'يرجى إدخال اسم الطالب أو ولي الأمر' : 'Please enter student or parent name',
    };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    return {
      valid: false,
      error: lang === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address',
    };
  }
  if (!input.password || input.password.length < 6) {
    return {
      valid: false,
      error: lang === 'ar' ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password must be at least 6 characters',
    };
  }
  return { valid: true };
}
