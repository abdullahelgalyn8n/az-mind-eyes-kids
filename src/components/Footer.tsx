import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Globe, MessageCircle } from 'lucide-react';
import { Language, PageRoute, buildUrlPathname } from '../utils/platformData';

interface FooterProps {
  onNavigate: (page: PageRoute, param?: string) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  return (
    <>
      <footer className="bg-[#1E293B] dark:bg-[#070B14] text-slate-100 pt-14 pb-8 border-t border-slate-700/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/80">
            {/* Col 1: Brand & Bio (Rightmost in RTL) */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/mindeyes-logo.png"
                  alt="Mind Eyes Logo"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 object-contain rounded-full bg-white p-0.5"
                />
                <div className="leading-tight">
                  <div className="text-lg font-black text-[#38BDF8]">Mind Eyes</div>
                  <div className="text-xs font-semibold text-slate-300">Spark Your Vision</div>
                </div>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {lang === 'ar'
                  ? 'منصة تعليمية تفاعلية تربط بين القصة والمنهج العلمي وتجارب المعمل وتقييم المهارات. كل طالب يتعلم بطريقته ومستواه! 🌟'
                  : 'An interactive educational platform connecting stories, scientific curricula, lab experiments, and skill evaluation. Every child learns their own way! 🌟'}
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61586652724067"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-slate-700 hover:bg-[#0284C7] flex items-center justify-center text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/mindeeyes86431"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-slate-700 hover:bg-pink-600 flex items-center justify-center text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={buildUrlPathname('home')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  aria-label="Website"
                  className="w-9 h-9 rounded-full bg-slate-700 hover:bg-sky-500 flex items-center justify-center text-white transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@mindeyes-162"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-slate-700 hover:bg-red-600 flex items-center justify-center text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-base font-extrabold text-white">
                {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-200 font-medium">
                <li>
                  <a
                    href={buildUrlPathname('curriculum-detail', 'e1d88007-75b9-4bda-be9d-ad7558b8ff41')}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('curriculum-detail', 'e1d88007-75b9-4bda-be9d-ad7558b8ff41');
                    }}
                    className="hover:text-[#38BDF8] transition-colors"
                  >
                    {lang === 'ar' ? 'ابدأ التجربة المجانية' : 'Start Free Trial'}
                  </a>
                </li>
                <li>
                  <a
                    href={buildUrlPathname('curriculum')}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('curriculum');
                    }}
                    className="hover:text-[#38BDF8] transition-colors"
                  >
                    {lang === 'ar' ? 'المنهج' : 'Curricula'}
                  </a>
                </li>
                <li>
                  <a
                    href={buildUrlPathname('store')}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('store');
                    }}
                    className="hover:text-[#38BDF8] transition-colors"
                  >
                    {lang === 'ar' ? 'المتجر' : 'Store'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Our Services */}
            <div className="space-y-4">
              <h3 className="text-base font-extrabold text-white">
                {lang === 'ar' ? 'خدماتنا' : 'Our Services'}
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-200 font-medium">
                <li>
                  <a
                    href={buildUrlPathname('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427')}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427');
                    }}
                    className="hover:text-[#38BDF8] transition-colors"
                  >
                    {lang === 'ar' ? '📚 مكتبة القصص التفاعلية' : '📚 Interactive Story Library'}
                  </a>
                </li>
                <li>
                  <a
                    href={buildUrlPathname('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427')}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427');
                    }}
                    className="hover:text-[#38BDF8] transition-colors"
                  >
                    {lang === 'ar' ? '🧪 تجارب المعمل' : '🧪 Hands-on Lab Experiments'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div className="space-y-4">
              <h3 className="text-base font-extrabold text-white">
                {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </h3>
              <ul className="space-y-3 text-sm text-slate-200 font-medium">
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>{lang === 'ar' ? 'مصر' : 'Cairo, Egypt'}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span className="tabular-nums" dir="ltr">
                    01034434077
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>info@mindeyeskids.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-medium">
            <div className="space-y-1 text-center sm:text-right">
              <p>
                {lang === 'ar'
                  ? '<a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline">جميع الحقوق محفوظة. A.Z Agency 2026 ©</a>'
                  : '<a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline">جميع الحقوق محفوظة. A.Z Agency 2026 ©</a>'}
              </p>
              <p>
                {lang === 'ar' ? 'تم التصميم بواسطة ' : 'Designed by '}
                <a
                  href={buildUrlPathname('about')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="text-[#38BDF8] hover:underline font-bold"
                >
                  {lang === 'ar' ? '' : ''}
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={buildUrlPathname('privacy')}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('privacy');
                }}
                className="hover:text-white transition-colors"
              >
                {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a
                href={buildUrlPathname('terms')}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('terms');
                }}
                className="hover:text-white transition-colors"
              >
                {lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/201034434077"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 left-5 z-50 w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </>
  );
};
