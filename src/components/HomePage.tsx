import React from 'react';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  QrCode,
  Gamepad2,
  Trophy,
  BookOpen,
  Zap,
  Puzzle,
  Brain,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Award,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  Language,
  PageRoute,
  STORE_PRODUCTS,
  buildUrlPathname,
} from '../utils/platformData';

interface HomePageProps {
  onNavigate: (page: PageRoute, param?: string) => void;
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, lang }) => {
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;
  const ChevronIcon = lang === 'ar' ? ChevronLeft : ChevronRight;
  const featuredStoreItems = STORE_PRODUCTS.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-14 pb-24 lg:pt-20 lg:pb-28 min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-bl from-[#F9ECF7]/80 via-[#F8FAFC] to-[#FEF7E6]/70 dark:from-[#1E1B4B]/70 dark:via-[#0B1120] dark:to-[#0F172A] transition-colors">
        {/* Soft Decorative Pastel Dots */}
        <span
          aria-hidden="true"
          className="hidden lg:block absolute top-14 left-[15%] w-3.5 h-3.5 rounded-full bg-pink-500/70"
        />
        <span
          aria-hidden="true"
          className="hidden lg:block absolute top-28 right-[24%] w-2.5 h-2.5 rounded-full bg-amber-500/80"
        />
        <span
          aria-hidden="true"
          className="hidden lg:block absolute bottom-20 right-[30%] w-2.5 h-2.5 rounded-full bg-purple-500/70"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Right Column in RTL: Hero Headline & CTAs */}
            <div className="lg:col-span-6 text-right space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800/80 text-[#0284C7] dark:text-[#38BDF8] text-sm font-extrabold shadow-2xs">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Spark Your Vision</span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.2] tracking-tight text-slate-950 dark:text-white">
                <span className="block text-[#0284C7] dark:text-[#38BDF8] mb-1">Mind Eyes</span>
                <span className="block text-slate-950 dark:text-white">
                  {lang === 'ar' ? 'تعلم بطريقتك الخاصة' : 'Learn Your Own Way'}
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 dark:text-slate-100 mt-2">
                  {lang === 'ar' ? 'واستمتع بالمغامرة! 🎉' : '& Enjoy the Adventure! 🎉'}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed max-w-2xl">
                {lang === 'ar'
                  ? 'منصة تعليمية تفاعلية تربط بين القصة + المنهج العلمي + الأنشطة العملية + تقييم المهارات. نفس الدرس يتقدم بأكثر من أسلوب: فيديو 🎬 قصة 📖 تجربة 🧪'
                  : 'An interactive learning platform connecting Story + Scientific Curriculum + Hands-on Lab Activities + Skill Evaluation. Each lesson is presented in multiple ways: Video 🎬 Story 📖 Experiment 🧪'}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={buildUrlPathname('curriculum-detail', 'e1d88007-75b9-4bda-be9d-ad7558b8ff41')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('curriculum-detail', 'e1d88007-75b9-4bda-be9d-ad7558b8ff41');
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-extrabold text-white bg-gradient-to-l from-[#7C3AED] to-[#0284C7] hover:opacity-95 shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{lang === 'ar' ? 'ابدأ التجربه المجانيه 🚀' : 'Start Free Trial 🚀'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </a>

                <a
                  href={buildUrlPathname('curriculum')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('curriculum');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-extrabold text-slate-900 dark:text-white bg-white dark:bg-[#1E293B] hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-2xs transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{lang === 'ar' ? 'استكشف المناهج 📚' : 'Explore Curricula 📚'}</span>
                </a>
              </div>
            </div>

            {/* Left Column in RTL: Mascot Circle + 3 Floating Interactive Cards */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
                {/* Soft Circular Halo */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-100/80 via-purple-100/70 to-sky-100/80 dark:from-amber-900/30 dark:via-purple-900/30 dark:to-sky-900/30 shadow-inner border border-white/90 dark:border-slate-700/80" />

                {/* Decorative Orbit Dots */}
                <span
                  aria-hidden="true"
                  className="absolute top-6 left-16 w-3.5 h-3.5 rounded-full bg-emerald-500/80"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-24 left-2 w-3 h-3 rounded-full bg-orange-500/80"
                />

                {/* 3D Brain Mascot */}
                <img
                  src="/assets/mindeyes-mascot.png"
                  alt="Mind Eyes Mascot"
                  referrerPolicy="no-referrer"
                  className="relative z-10 w-68 sm:w-80 h-auto object-contain drop-shadow-xl animate-float-slow"
                />

                {/* Floating Card 1: Top Right (امسح الـ QR) */}
                <a
                  href={buildUrlPathname('store')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('store');
                  }}
                  className="absolute -top-2 right-0 sm:right-2 z-20 flex items-center gap-3 bg-white dark:bg-[#1E293B] px-4 py-2.5 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform text-right cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-fuchsia-600 text-white flex items-center justify-center shrink-0">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div className="leading-snug">
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 font-bold">
                      {lang === 'ar' ? 'امسح الـ QR' : 'Scan QR Code'}
                    </p>
                    <p className="text-xs sm:text-sm font-black text-slate-950 dark:text-white whitespace-nowrap">
                      {lang === 'ar' ? 'افتح التجربة! 📦' : 'Open Experiment! 📦'}
                    </p>
                  </div>
                </a>

                {/* Floating Card 2: Middle Right (اجمع النقاط واربح!) */}
                <a
                  href={buildUrlPathname('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427');
                  }}
                  className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-6 z-20 flex items-center gap-3 bg-white dark:bg-[#1E293B] px-4 py-2.5 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform text-right animate-float-delayed cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="leading-snug">
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 font-bold">
                      {lang === 'ar' ? 'اجمع النقاط' : 'Collect Points'}
                    </p>
                    <p className="text-xs sm:text-sm font-black text-slate-950 dark:text-white whitespace-nowrap">
                      {lang === 'ar' ? 'واربح! 🏆' : '& Win! 🏆'}
                    </p>
                  </div>
                </a>

                {/* Floating Card 3: Bottom Left (ألعاب علمية تحدي 7 أيام!) */}
                <a
                  href={buildUrlPathname('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427');
                  }}
                  className="absolute bottom-2 -left-2 sm:-left-6 z-20 flex items-center gap-3 bg-white dark:bg-[#1E293B] px-4 py-2.5 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform text-right cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div className="leading-snug">
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 font-bold">
                      {lang === 'ar' ? 'ألعاب علمية' : 'Science Games'}
                    </p>
                    <p className="text-xs sm:text-sm font-black text-slate-950 dark:text-white whitespace-nowrap">
                      {lang === 'ar' ? 'تحدي 7 أيام! 🎮' : '7-Day Challenge! 🎮'}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR PILLAR HIGHLIGHTS ROW */}
      <section className="py-12 bg-[#EEF4F9] dark:bg-[#0F172A] border-y border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: '🎨',
                titleAr: 'أسلوب تعلم متعدد',
                titleEn: 'Multi-Style Learning',
                subAr: 'فيديو + قصة + تجربة',
                subEn: 'Video + Story + Lab',
              },
              {
                emoji: '🧩',
                titleAr: 'ذكاءات متعددة',
                titleEn: 'Multiple Intelligences',
                subAr: 'لكل طفل طريقته',
                subEn: 'Every child has a way',
              },
              {
                emoji: '🚀',
                titleAr: 'تعلم تفاعلي',
                titleEn: 'Interactive Learning',
                subAr: 'ممتع وفعال',
                subEn: 'Fun & Effective',
              },
              {
                emoji: '⭐',
                titleAr: 'حقائب متكاملة',
                titleEn: 'Complete STEM Kits',
                subAr: 'علوم وتكنولوجيا',
                subEn: 'Science & Technology',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center shadow-2xs hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{pillar.emoji}</div>
                <h3 className="text-base font-black text-slate-950 dark:text-white mb-1">
                  {lang === 'ar' ? pillar.titleAr : pillar.titleEn}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-bold">
                  {lang === 'ar' ? pillar.subAr : pillar.subEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW WE TEACH SECTION (كيف نعلم؟ 🤔) */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-xs font-extrabold">
              <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{lang === 'ar' ? 'كيف نعلم؟ 🤔' : 'How We Teach? 🤔'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white">
              {lang === 'ar' ? (
                <>
                  تحويل العلوم والتكنولوجيا لـ{' '}
                  <span className="bg-gradient-to-l from-purple-600 to-sky-500 dark:from-purple-400 dark:to-sky-400 bg-clip-text text-transparent">
                    مغامرة ممتعة!
                  </span>
                </>
              ) : (
                <>
                  Turning Science & Tech Into a{' '}
                  <span className="bg-gradient-to-l from-purple-600 to-sky-500 dark:from-purple-400 dark:to-sky-400 bg-clip-text text-transparent">
                    Fun Adventure!
                  </span>
                </>
              )}
            </h2>

            <p className="text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
              {lang === 'ar'
                ? 'منهج متكامل متوافق مع مهارات الطلاب المختلفة عن طريق حقيبة علمية تتوافق مع اختلاف ذكاءات الأطفال 🧠✨'
                : 'An integrated curriculum tailored to diverse student skills through a scientific kit aligned with multiple intelligences 🧠✨'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Interactive Story Library */}
            <a
              href={buildUrlPathname('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427');
              }}
              className="relative overflow-hidden rounded-3xl bg-[#FDF2F8] dark:bg-[#2E1035]/80 border border-pink-200 dark:border-pink-800/70 p-8 sm:p-10 text-right shadow-2xs hover:shadow-md transition-all cursor-pointer group block"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 left-8 text-5xl opacity-25 select-none"
              >
                📖
              </span>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-purple-600 text-white flex items-center justify-center mb-6 shadow-sm">
                <BookOpen className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-5">
                {lang === 'ar' ? 'مكتبة القصص التفاعلية 📚' : 'Interactive Story Library 📚'}
              </h3>

              <ul className="space-y-3 text-sm sm:text-base text-slate-800 dark:text-slate-100 font-semibold">
                <li className="flex items-center gap-2.5">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">✦</span>
                  <span>
                    {lang === 'ar' ? 'كل درس له قصة كرتونية قصيرة' : 'Every lesson has a short animated story'}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">✦</span>
                  <span>
                    {lang === 'ar' ? 'أسئلة تفاعلية جوه القصة' : 'Interactive questions embedded inside the story'}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">✦</span>
                  <span>
                    {lang === 'ar'
                      ? 'اختيارات تغير مسار القصة (Gamification)'
                      : 'Choices that change the story path (Gamification)'}
                  </span>
                </li>
              </ul>
            </a>

            {/* Card 2: Lab Experiments */}
            <a
              href={buildUrlPathname('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427');
              }}
              className="relative overflow-hidden rounded-3xl bg-[#ECFDF5] dark:bg-[#062E22]/85 border border-emerald-200 dark:border-emerald-800/70 p-8 sm:p-10 text-right shadow-2xs hover:shadow-md transition-all cursor-pointer group block"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 left-8 text-5xl opacity-25 select-none"
              >
                🧪
              </span>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-sky-600 text-white flex items-center justify-center mb-6 shadow-sm">
                <Zap className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-5">
                {lang === 'ar' ? 'تجارب المعمل 🔬' : 'Lab Experiments 🔬'}
              </h3>

              <ul className="space-y-3 text-sm sm:text-base text-slate-800 dark:text-slate-100 font-semibold">
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✦</span>
                  <span>
                    {lang === 'ar' ? 'فيديو قصير لكل خطوة' : 'Short video guide for every step'}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✦</span>
                  <span>
                    {lang === 'ar' ? 'عداد إنجاز (Progress bar)' : 'Visual completion Progress bar'}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✦</span>
                  <span>
                    {lang === 'ar'
                      ? 'جائزة تشجيعية عند انتهاء المسار!'
                      : 'Encouraging reward upon completing the path!'}
                  </span>
                </li>
              </ul>
            </a>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE OFFER SECTION (ما نقدمه 🚀) */}
      <section className="py-20 bg-[#EEF4F9] dark:bg-[#0F172A] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950/90 border border-sky-300 dark:border-sky-800 text-[#0284C7] dark:text-[#38BDF8] text-xs font-extrabold">
              <Rocket className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'ما نقدمه 🚀' : 'What We Offer 🚀'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white">
              {lang === 'ar' ? (
                <>
                  كل ما يحتاجه طفلك في{' '}
                  <span className="bg-gradient-to-l from-purple-600 to-sky-500 dark:from-purple-400 dark:to-sky-400 bg-clip-text text-transparent">
                    منصة واحدة!
                  </span>
                </>
              ) : (
                <>
                  Everything Your Child Needs in{' '}
                  <span className="bg-gradient-to-l from-purple-600 to-sky-500 dark:from-purple-400 dark:to-sky-400 bg-clip-text text-transparent">
                    One Platform!
                  </span>
                </>
              )}
            </h2>

            <p className="text-base text-slate-700 dark:text-slate-200 font-medium">
              {lang === 'ar'
                ? 'مجموعة متكاملة من الأدوات التعليمية التي تجعل التعلم مغامرة ممتعة 🎮'
                : 'A complete suite of educational tools that make learning an exciting adventure 🎮'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                titleAr: 'مكتبة القصص التفاعلية 📚',
                titleEn: 'Interactive Story Library 📚',
                descAr: 'كل درس له قصة كرتونية قصيرة مع أسئلة تفاعلية واختيارات تغير مسار القصة!',
                descEn: 'Every lesson features a short cartoon story with interactive questions and path choices!',
                page: 'topic-detail' as PageRoute,
                param: 'c0a9478b-0937-493e-81c3-1a338a1eb427',
              },
              {
                icon: Puzzle,
                titleAr: 'تجارب المعمل خطوة بخطوة 🧪',
                titleEn: 'Step-by-Step Lab Experiments 🧪',
                descAr: 'فيديو قصير لكل خطوة مع عداد إنجاز وجوائز تشجيعية عند انتهاء المسار',
                descEn: 'Short video for every step with a progress bar and motivating rewards at completion',
                page: 'topic-detail' as PageRoute,
                param: 'c0a9478b-0937-493e-81c3-1a338a1eb427',
              },
              {
                icon: QrCode,
                titleAr: 'نظام QR للحقائب التعليمية 📦',
                titleEn: 'QR System for Educational Kits 📦',
                descAr: 'كل Kit عليها QR - امسحها وافتح شرح الدرس وفيديو التجربة وخطوات التنفيذ!',
                descEn: 'Every Kit has a QR code - scan it to unlock lesson explanations and lab videos!',
                page: 'store' as PageRoute,
              },
              {
                icon: Gamepad2,
                titleAr: 'ألعاب علمية وألغاز 🎮',
                titleEn: 'Science Games & Puzzles 🎮',
                descAr: 'تحدي 7 أيام مع ألعاب علمية ممتعة تجعل التعلم مغامرة حقيقية',
                descEn: '7-day challenge with fun scientific games turning learning into a real adventure',
                page: 'topic-detail' as PageRoute,
                param: 'c0a9478b-0937-493e-81c3-1a338a1eb427',
              },
              {
                icon: Trophy,
                titleAr: 'نظام المكافآت 🏆',
                titleEn: 'Rewards System 🏆',
                descAr: 'اجمع النقاط والميداليات، افتح قصص جديدة واحصل على خصومات على Kits جديدة!',
                descEn: 'Collect points and medals, unlock new stories, and get discounts on new Kits!',
                page: 'topic-detail' as PageRoute,
                param: 'c0a9478b-0937-493e-81c3-1a338a1eb427',
              },
              {
                icon: Brain,
                titleAr: 'مسارات تعلم ذكية 🧠',
                titleEn: 'Smart Learning Paths 🧠',
                descAr: 'مبتدئ - متوسط - متقدم. المنصة تقترح المسار تلقائياً بعد اختبار بسيط',
                descEn: 'Beginner - Intermediate - Advanced. Automatically suggests the path after a quick quiz',
                page: 'curriculum' as PageRoute,
              },
            ].map((feat, idx) => {
              const IconComponent = feat.icon;
              return (
                <a
                  key={idx}
                  href={buildUrlPathname(feat.page, feat.param)}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(feat.page, feat.param);
                  }}
                  className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl p-7 text-right transition-all hover:shadow-md hover:border-[#0284C7] dark:hover:border-[#38BDF8] block"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950/90 text-[#0284C7] dark:text-[#38BDF8] flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950 dark:text-white mb-2.5">
                    {lang === 'ar' ? feat.titleAr : feat.titleEn}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                    {lang === 'ar' ? feat.descAr : feat.descEn}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURED EDUCATIONAL KITS & DIGITAL STORE SHOWCASE */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#0B1120] border-t border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-extrabold">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'أحدث الحقائب والمنتجات التعليمية 📦' : 'Featured Educational Kits & Packs 📦'}</span>
              </div>
              <h2 className="text-3xl font-black text-slate-950 dark:text-white">
                {lang === 'ar' ? 'استكشف حقائبنا العلمية والرقمية' : 'Explore Our STEM Kits & Digital Packs'}
              </h2>
            </div>

            <a
              href={buildUrlPathname('store')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('store');
              }}
              className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#0284C7] dark:text-[#38BDF8] hover:underline whitespace-nowrap shrink-0"
            >
              <span>{lang === 'ar' ? 'عرض جميع المنتجات في المتجر (8 منتجات)' : 'View All Store Products (8 Items)'}</span>
              <ChevronIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStoreItems.map((item) => (
              <a
                key={item.id}
                href={buildUrlPathname('product-detail', item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('product-detail', item.id);
                }}
                className="group bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-right"
              >
                <div>
                  <div className="h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={item.image}
                      alt={lang === 'ar' ? item.titleAr : item.titleEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                      <span>{lang === 'ar' ? item.categoryAr : item.categoryEn}</span>
                      <span>·</span>
                      <span>{lang === 'ar' ? item.ageRangeAr : item.ageRangeEn}</span>
                    </div>
                    <h3 className="text-base font-black text-slate-950 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] line-clamp-2">
                      {lang === 'ar' ? item.titleAr : item.titleEn}
                    </h3>
                  </div>
                </div>
                <div className="px-5 py-3.5 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
                  <span className="text-base font-black text-[#0284C7] dark:text-[#38BDF8] tabular-nums">
                    {lang === 'ar' ? item.priceAr : item.priceEn}
                  </span>
                  <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200 group-hover:translate-x-[-2px] transition-transform">
                    {lang === 'ar' ? 'تفاصيل المنتج ←' : 'View Details →'}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY MIND EYES SECTION (لماذا Mind Eyes؟ 🤔) */}
      <section className="py-20 bg-[#EEF4F9] dark:bg-[#0F172A] border-t border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-xs font-extrabold">
              <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{lang === 'ar' ? 'لماذا Mind Eyes؟ 🤔' : 'Why Mind Eyes? 🤔'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white">
              {lang === 'ar' ? (
                <>
                  نجعل التعلم{' '}
                  <span className="bg-gradient-to-l from-purple-600 to-sky-500 dark:from-purple-400 dark:to-sky-400 bg-clip-text text-transparent">
                    مغامرة لا تُنسى!
                  </span>
                </>
              ) : (
                <>
                  We Make Learning an{' '}
                  <span className="bg-gradient-to-l from-purple-600 to-sky-500 dark:from-purple-400 dark:to-sky-400 bg-clip-text text-transparent">
                    Unforgettable Adventure!
                  </span>
                </>
              )}
            </h2>

            <p className="text-base text-slate-700 dark:text-slate-200 font-medium">
              {lang === 'ar'
                ? 'لأن كل طفل فريد، صممنا منصتنا لتتكيف مع طريقة تفكيره وتقدم له المحتوى بالأسلوب الذي يحبه ويفهمه! 🌟'
                : 'Because every child is unique, we designed our platform to adapt to how they think and learn best! 🌟'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Right side in RTL: 2x2 Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white dark:bg-[#1E293B] border border-pink-200 dark:border-pink-800/70 rounded-2xl p-7 text-center space-y-2 shadow-2xs">
                <div className="text-4xl">📚</div>
                <h3 className="text-base font-black text-slate-950 dark:text-white">
                  {lang === 'ar' ? 'قصص تفاعلية' : 'Interactive Stories'}
                </h3>
                <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  {lang === 'ar' ? 'تغير المسار' : 'Branching Paths'}
                </p>
              </div>

              <div className="bg-white dark:bg-[#1E293B] border border-emerald-200 dark:border-emerald-800/70 rounded-2xl p-7 text-center space-y-2 shadow-2xs">
                <div className="text-4xl">🧪</div>
                <h3 className="text-base font-black text-slate-950 dark:text-white">
                  {lang === 'ar' ? 'تجارب عملية' : 'Hands-on Labs'}
                </h3>
                <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  {lang === 'ar' ? 'خطوة بخطوة' : 'Step by Step'}
                </p>
              </div>

              <div className="bg-white dark:bg-[#1E293B] border border-amber-200 dark:border-amber-800/70 rounded-2xl p-7 text-center space-y-2 shadow-2xs">
                <div className="text-4xl">🎮</div>
                <h3 className="text-base font-black text-slate-950 dark:text-white">
                  {lang === 'ar' ? 'ألعاب علمية' : 'Science Games'}
                </h3>
                <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  {lang === 'ar' ? 'تحدي 7 أيام' : '7-Day Challenge'}
                </p>
              </div>

              <div className="bg-white dark:bg-[#1E293B] border border-purple-200 dark:border-purple-800/70 rounded-2xl p-7 text-center space-y-2 shadow-2xs">
                <div className="text-4xl">🏆</div>
                <h3 className="text-base font-black text-slate-950 dark:text-white">
                  {lang === 'ar' ? 'مكافآت' : 'Rewards'}
                </h3>
                <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  {lang === 'ar' ? 'نقاط وميداليات' : 'Points & Medals'}
                </p>
              </div>
            </div>

            {/* Left side in RTL: 6 Checklist Bars */}
            <div className="lg:col-span-6 space-y-3.5">
              {[
                {
                  ar: 'كل طالب يتعلم بطريقته ومستواه الخاص',
                  en: 'Every student learns in their own style and pace',
                },
                {
                  ar: 'قصص تفاعلية مع اختيارات تغير المسار',
                  en: 'Interactive stories with path-changing choices',
                },
                {
                  ar: 'تجارب معمل بخطوات واضحة ومرحة',
                  en: 'Lab experiments with clear and fun steps',
                },
                {
                  ar: 'نظام QR يربط الحقيبة بالمحتوى الرقمي',
                  en: 'QR system connecting physical kits to digital content',
                },
                {
                  ar: 'ألعاب علمية وتحديات يومية',
                  en: 'Scientific games and daily challenges',
                },
                {
                  ar: 'مكافآت وميداليات تحفيزية',
                  en: 'Motivating rewards and achievement medals',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-3.5 shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100">
                    {lang === 'ar' ? item.ar : item.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. READY TO START CTA BANNER (جاهز تبدأ المغامرة؟) */}
      <section className="relative py-20 bg-gradient-to-l from-[#EC4899] via-[#7C3AED] to-[#0284C7] text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="text-6xl select-none">🚀</div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {lang === 'ar' ? 'جاهز تبدأ المغامرة؟' : 'Ready to Start the Adventure?'}
          </h2>
          <p className="text-base sm:text-lg text-white font-bold">
            {lang === 'ar'
              ? 'انضم لآلاف الأطفال اللي بيتعلموا بطريقة ممتعة وتفاعلية! 🎉'
              : 'Join thousands of kids learning in a fun and interactive way! 🎉'}
          </p>
          <div className="pt-2">
            <a
              href={buildUrlPathname('auth')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('auth');
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm sm:text-base shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              <span>{lang === 'ar' ? 'ابدأ الآن مجاناً! 🌟' : 'Start Now for Free! 🌟'}</span>
              <ArrowIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
