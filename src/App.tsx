import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { CurriculumPage } from './components/CurriculumPage';
import { CurriculumDetailView, TopicLessonView } from './components/CurriculumDetailView';
import { StorePage, ProductDetailView, AboutPage } from './components/StoreAndAboutViews';
import { ContactPage, AuthPage } from './components/ContactAndAuthViews';
import {
  Language,
  ThemeMode,
  PageRoute,
  CURRICULA_DATA,
  STORE_PRODUCTS,
  parseUrlPathname,
  buildUrlPathname,
} from './utils/platformData';
import { ShieldCheck, FileText, ArrowRight, ArrowLeft, Link2, Check } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('mindeyes_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      // ignore storage errors
    }
    return 'light';
  });

  // Initialize route directly from window.location.pathname so every URL works on load
  const initialRoute = parseUrlPathname(typeof window !== 'undefined' ? window.location.pathname : '/');
  const [currentPage, setCurrentPage] = useState<PageRoute>(initialRoute.page);
  const [routeParam, setRouteParam] = useState<string | undefined>(initialRoute.param);
  const [copiedPath, setCopiedPath] = useState(false);

  // Sync dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('mindeyes_theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  // Listen to browser back/forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseUrlPathname(window.location.pathname);
      setCurrentPage(parsed.page);
      setRouteParam(parsed.param);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Persisted state for interactive lessons, quizzes, and 7-day challenge
  const [completedChallengeDays, setCompletedChallengeDays] = useState<Record<string, number[]>>(() => {
    try {
      const saved = localStorage.getItem('mindeyes_challenges');
      return saved ? JSON.parse(saved) : { 'c0a9478b-0937-493e-81c3-1a338a1eb427': [1, 2] };
    } catch {
      return { 'c0a9478b-0937-493e-81c3-1a338a1eb427': [1, 2] };
    }
  });

  const [quizScores, setQuizScores] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('mindeyes_quiz_scores');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(() => {
    try {
      const saved = localStorage.getItem('mindeyes_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mindeyes_challenges', JSON.stringify(completedChallengeDays));
    } catch {
      // ignore storage errors
    }
  }, [completedChallengeDays]);

  useEffect(() => {
    try {
      localStorage.setItem('mindeyes_quiz_scores', JSON.stringify(quizScores));
    } catch {
      // ignore storage errors
    }
  }, [quizScores]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('mindeyes_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('mindeyes_user');
      }
    } catch {
      // ignore storage errors
    }
  }, [currentUser]);

  // Calculate total explorer points
  const totalPoints = React.useMemo(() => {
    let sum = 0;
    for (const curr of CURRICULA_DATA) {
      for (const topic of curr.topics) {
        const doneDays = completedChallengeDays[topic.id] || [];
        for (const dayObj of topic.challengeDays) {
          if (doneDays.includes(dayObj.day)) {
            sum += dayObj.points;
          }
        }
        if (quizScores[topic.id]) {
          sum += quizScores[topic.id];
        }
      }
    }
    return sum;
  }, [completedChallengeDays, quizScores]);

  const handleNavigate = (page: PageRoute, param?: string) => {
    const targetPath = buildUrlPathname(page, param);
    if (typeof window !== 'undefined' && window.location.pathname !== targetPath) {
      window.history.pushState({ page, param }, '', targetPath);
    }
    setCurrentPage(page);
    setRouteParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleToggleChallengeDay = (topicId: string, day: number) => {
    setCompletedChallengeDays((prev) => {
      const current = prev[topicId] || [];
      const exists = current.includes(day);
      const updated = exists ? current.filter((d) => d !== day) : [...current, day];
      return { ...prev, [topicId]: updated };
    });
  };

  const handleSaveQuizScore = (topicId: string, points: number) => {
    setQuizScores((prev) => ({
      ...prev,
      [topicId]: Math.max(prev[topicId] || 0, points),
    }));
  };

  const isAr = lang === 'ar';
  const livePathname = buildUrlPathname(currentPage, routeParam);

  // Human-readable breadcrumb label for current page
  const currentBreadcrumbTitle = React.useMemo(() => {
    switch (currentPage) {
      case 'home':
        return isAr ? 'الرئيسية' : 'Home';
      case 'curriculum':
        return isAr ? 'المناهج الدراسية' : 'Curricula';
      case 'curriculum-detail': {
        const item = CURRICULA_DATA.find((c) => c.id === routeParam || c.categoryKey === routeParam);
        return item ? (isAr ? item.titleAr : item.titleEn) : isAr ? 'تفاصيل المسار' : 'Track Details';
      }
      case 'topic-detail': {
        for (const c of CURRICULA_DATA) {
          const t = c.topics.find((top) => top.id === routeParam);
          if (t) return isAr ? t.titleAr : t.titleEn;
        }
        return isAr ? 'الدرس التفاعلي' : 'Interactive Lesson';
      }
      case 'store':
        return isAr ? 'المتجر التعليمي (8 منتجات)' : 'Educational Store (8 Products)';
      case 'product-detail': {
        const p = STORE_PRODUCTS.find((prod) => prod.id === routeParam || prod.slug === routeParam);
        return p ? (isAr ? p.titleAr : p.titleEn) : isAr ? 'تفاصيل المنتج' : 'Product Details';
      }
      case 'about':
        return isAr ? 'عن مايند آيز كيدز' : 'About Mind Eyes Kids';
      case 'contact':
        return isAr ? 'تواصل معنا' : 'Contact Us';
      case 'auth':
        return isAr ? 'حساب الطالب / ولي الأمر' : 'Explorer Account';
      case 'privacy':
        return isAr ? 'سياسة الخصوصية' : 'Privacy Policy';
      case 'terms':
        return isAr ? 'الشروط والأحكام' : 'Terms & Conditions';
      default:
        return isAr ? 'الرئيسية' : 'Home';
    }
  }, [currentPage, routeParam, isAr]);

  const handleCopyLiveUrl = () => {
    const fullUrl = window.location.origin + livePathname;
    navigator.clipboard?.writeText(fullUrl).catch(() => {});
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B1120] text-[#0F172A] dark:text-[#F8FAFC] selection:bg-[#0077B6] selection:text-white transition-colors duration-300"
    >
      <Navbar
        lang={lang}
        theme={theme}
        currentPage={currentPage}
        totalPoints={totalPoints}
        currentUser={currentUser}
        onToggleLanguage={handleToggleLanguage}
        onToggleTheme={handleToggleTheme}
        onNavigate={handleNavigate}
        onLogout={() => setCurrentUser(null)}
      />

      {/* Dedicated Page URL & Breadcrumb Bar on inner pages */}
      {currentPage !== 'home' && (
        <div className="bg-white/95 dark:bg-[#1E293B]/95 border-b border-slate-200 dark:border-slate-800 py-2.5 px-4 sm:px-6 lg:px-8 transition-colors">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate('home');
                }}
                className="hover:text-[#0077B6] dark:hover:text-[#38BDF8] transition-colors"
              >
                {isAr ? 'الرئيسية' : 'Home'}
              </a>
              <span className="text-slate-400">/</span>
              <span className="font-black text-slate-950 dark:text-white truncate max-w-xs sm:max-w-md">
                {currentBreadcrumbTitle}
              </span>
            </div>

            
          </div>
        </div>
      )}

      <main className="flex-1">
        {currentPage === 'home' && <HomePage lang={lang} onNavigate={handleNavigate} />}

        {currentPage === 'curriculum' && (
          <CurriculumPage lang={lang} initialCategory={routeParam || null} onNavigate={handleNavigate} />
        )}

        {currentPage === 'curriculum-detail' && (
          <CurriculumDetailView
            lang={lang}
            curriculumId={routeParam || 'e1d88007-75b9-4bda-be9d-ad7558b8ff41'}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'topic-detail' && (
          <TopicLessonView
            lang={lang}
            topicId={routeParam || 'c0a9478b-0937-493e-81c3-1a338a1eb427'}
            onNavigate={handleNavigate}
            completedChallengeDays={completedChallengeDays}
            onToggleChallengeDay={handleToggleChallengeDay}
            quizScores={quizScores}
            onSaveQuizScore={handleSaveQuizScore}
          />
        )}

        {currentPage === 'store' && <StorePage lang={lang} onNavigate={handleNavigate} />}

        {currentPage === 'product-detail' && (
          <ProductDetailView
            lang={lang}
            productId={routeParam || 'prod-dr-wizzy-energy'}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && <AboutPage lang={lang} onNavigate={handleNavigate} />}

        {currentPage === 'contact' && <ContactPage lang={lang} />}

        {currentPage === 'auth' && (
          <AuthPage
            lang={lang}
            onLoginSuccess={(user) => {
              setCurrentUser(user);
              handleNavigate('home');
            }}
            onNavigate={handleNavigate}
          />
        )}

        {(currentPage === 'privacy' || currentPage === 'terms') && (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="bg-white dark:bg-[#1E293B] rounded-[2.2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm">
              <button
                type="button"
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-sm font-black text-[#0077B6] dark:text-[#38BDF8] mb-6 cursor-pointer"
              >
                {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{isAr ? 'العودة للرئيسية' : 'Back to Home'}</span>
              </button>

              <div className="flex items-center gap-3 mb-6">
                {currentPage === 'privacy' ? (
                  <ShieldCheck className="w-8 h-8 text-[#0077B6] dark:text-[#38BDF8]" />
                ) : (
                  <FileText className="w-8 h-8 text-[#0077B6] dark:text-[#38BDF8]" />
                )}
                <h1 className="text-2xl md:text-3xl font-black text-slate-950 dark:text-white">
                  {currentPage === 'privacy'
                    ? isAr
                      ? 'سياسة الخصوصية وحماية بيانات الأطفال'
                      : 'Privacy Policy & Child Data Protection'
                    : isAr
                    ? 'الشروط والأحكام لمنصة مايند آيز كيدز'
                    : 'Terms & Conditions — Mind Eyes Kids'}
                </h1>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed text-sm md:text-base">
                <p>
                  {isAr
                    ? 'تلتزم منصة مايند آيز كيدز (Mind Eyes Kids) بأعلى معايير الأمان الرقمي والخصوصية لحماية الأطفال وأولياء الأمور أثناء استخدام المحتوى التعليمي التفاعلي.'
                    : 'Mind Eyes Kids is committed to the highest standards of digital safety and privacy to protect children and parents while using our interactive educational content.'}
                </p>
                <p>
                  {isAr
                    ? 'جميع الفيديوهات والأنشطة والاختبارات مصممة تحت إشراف تربوي وعلمي متخصص وخالية تماماً من أي إعلانات خارجية غير ملائمة للأطفال.'
                    : 'All videos, experiments, and quizzes are designed under specialized pedagogical supervision and are completely free of third-party ads.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer lang={lang} onNavigate={handleNavigate} />
    </div>
  );
}
