import React, { useState } from 'react';
import { Globe, Menu, X, Sun, Moon } from 'lucide-react';
import { Language, PageRoute, ThemeMode, buildUrlPathname } from '../utils/platformData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, param?: string) => void;
  lang: Language;
  onToggleLang: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  loggedInUser: { name: string; email: string } | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
  loggedInUser,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageRoute; labelAr: string; labelEn: string }[] = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'curriculum', labelAr: 'المناهج', labelEn: 'Curricula' },
    { id: 'store', labelAr: 'المتجر', labelEn: 'Store' },
    { id: 'about', labelAr: 'من نحن', labelEn: 'About Us' },
    { id: 'contact', labelAr: 'اتصل بنا', labelEn: 'Contact Us' },
  ];

  const isNavActive = (id: PageRoute) => {
    if (
      id === 'curriculum' &&
      (currentPage === 'curriculum' ||
        currentPage === 'curriculum-detail' ||
        currentPage === 'topic-detail')
    ) {
      return true;
    }
    if (id === 'store' && (currentPage === 'store' || currentPage === 'product-detail')) {
      return true;
    }
    return currentPage === id;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup (Right in RTL) */}
        <a
          href={buildUrlPathname('home')}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus:outline-none"
        >
          <img
            src="/assets/mindeyes-logo.png"
            alt="Mind Eyes Logo"
            referrerPolicy="no-referrer"
            className="w-10 h-10 object-contain rounded-full bg-white p-0.5 border border-slate-200 dark:border-slate-700 transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex flex-col text-right leading-tight">
            <span className="text-lg font-black tracking-tight text-[#0284C7] dark:text-[#38BDF8]">
              Mind Eyes
            </span>
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
              Spark Your Vision
            </span>
          </div>
        </a>

        {/* Zone 2: 5 Single-Line Navigation Links (Center) */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden md:flex items-center gap-7 text-[15px] font-bold"
        >
          {navItems.map((item) => {
            const active = isNavActive(item.id);
            return (
              <a
                key={item.id}
                href={buildUrlPathname(item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`whitespace-nowrap shrink-0 transition-colors py-1.5 border-b-2 ${
                  active
                    ? 'text-[#0284C7] dark:text-[#38BDF8] font-extrabold border-[#0284C7] dark:border-[#38BDF8]'
                    : 'text-slate-800 dark:text-slate-200 hover:text-[#0284C7] dark:hover:text-[#38BDF8] border-transparent'
                }`}
              >
                {lang === 'ar' ? item.labelAr : item.labelEn}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle, Language Switcher & Auth Actions (Left in RTL) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Dark / Light Mode Switcher */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark'
                ? lang === 'ar'
                  ? 'تفعيل الوضع الفاتح'
                  : 'Switch to Light Mode'
                : lang === 'ar'
                ? 'تفعيل الوضع الداكن'
                : 'Switch to Dark Mode'
            }
            className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-amber-400 border border-slate-200/80 dark:border-slate-700 transition-colors shrink-0 cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={lang === 'ar' ? 'تغيير اللغة إلى الإنجليزية' : 'Switch language to Arabic'}
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 transition-colors shrink-0 cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#0284C7] text-white text-[10px] font-bold flex items-center justify-center">
              {lang === 'ar' ? 'ع' : 'E'}
            </span>
          </button>

          {loggedInUser ? (
            <a
              href={buildUrlPathname('auth')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('auth');
              }}
              className="text-sm font-extrabold text-slate-900 dark:text-white hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors whitespace-nowrap shrink-0 px-2"
            >
              {loggedInUser.name}
            </a>
          ) : (
            <a
              href={buildUrlPathname('auth')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('auth');
              }}
              className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors whitespace-nowrap shrink-0 px-2"
            >
              {lang === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
            </a>
          )}

          <a
            href={buildUrlPathname('auth')}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('auth');
            }}
            className="px-4 py-2 text-sm font-extrabold text-white bg-[#0284C7] hover:bg-[#0369A1] dark:bg-[#0284C7] dark:hover:bg-[#38BDF8] dark:hover:text-slate-950 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'ar' ? 'ابدأ الآن' : 'Start Now'}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن'}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-amber-400 border border-slate-200 dark:border-slate-700"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onToggleLang}
            aria-label="Language"
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
          >
            <Globe className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#0284C7] text-white text-[10px] font-bold flex items-center justify-center">
              {lang === 'ar' ? 'ع' : 'E'}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="p-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const active = isNavActive(item.id);
            return (
              <a
                key={item.id}
                href={buildUrlPathname(item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2.5 rounded-lg text-base font-bold ${
                  active
                    ? 'bg-sky-50 dark:bg-sky-950/60 text-[#0284C7] dark:text-[#38BDF8]'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {lang === 'ar' ? item.labelAr : item.labelEn}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
            <a
              href={buildUrlPathname('auth')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('auth');
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 text-center text-sm font-bold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg"
            >
              {lang === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
            </a>
            <a
              href={buildUrlPathname('auth')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('auth');
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 text-center text-sm font-extrabold text-white bg-[#0284C7] rounded-lg"
            >
              {lang === 'ar' ? 'ابدأ الآن' : 'Start Now'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
