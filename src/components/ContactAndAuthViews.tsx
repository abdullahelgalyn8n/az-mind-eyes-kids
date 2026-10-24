import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  User,
  Lock,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Clock,
} from 'lucide-react';
import {
  Language,
  PageRoute,
  validateContactForm,
  validateAuthForm,
  ContactFormInput,
  buildUrlPathname,
} from '../utils/platformData';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(form, lang);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#0077B6] dark:text-[#38BDF8] mb-2">
            {isAr ? 'نحن هنا لمساعدتك دائماً' : 'We Are Always Here to Help'}
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white mb-4">
            {isAr ? 'تواصل مع فريق مايند آيز كيدز' : 'Contact Mind Eyes Kids Team'}
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {isAr
              ? 'لديك استفسار حول المناهج الدراسية، الحقائب العلمية، أو الاشتراكات المدرسية؟ تواصل معنا مباشرة عبر واتساب أو أرسل رسالتك.'
              : 'Have a question about our STEM curricula, experiment kits, or school partnerships? Reach us via WhatsApp or send a message below.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-[#1E293B] rounded-[2rem] p-7 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-6">
              <h2 className="text-xl font-black text-slate-950 dark:text-white">
                {isAr ? 'قنوات التواصل المباشر' : 'Direct Contact Channels'}
              </h2>

              <a
                href="https://wa.me/201034434077"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 hover:border-emerald-500 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-0.5">
                    {isAr ? 'واتساب خدمة العملاء والطلبات' : 'WhatsApp Support & Orders'}
                  </p>
                  <p className="text-base font-black text-slate-950 dark:text-white" dir="ltr">
                    +20 103 443 4077
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    {isAr ? 'رد فوري خلال ساعات العمل اليومية' : 'Fast response during daily working hours'}
                  </p>
                </div>
              </a>

              <a
                href="tel:01034434077"
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-[#0077B6] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0077B6] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-0.5">
                    {isAr ? 'الاتصال الهاتفي المباشر' : 'Direct Phone Call'}
                  </p>
                  <p className="text-base font-black text-slate-950 dark:text-white" dir="ltr">
                    01034434077
                  </p>
                </div>
              </a>

              <a
                href="mailto:mindeyeskids@gmail.com"
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-[#0077B6] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-0.5">
                    {isAr ? 'البريد الإلكتروني الرسمي' : 'Official Email'}
                  </p>
                  <p className="text-sm md:text-base font-black text-slate-950 dark:text-white break-all">
                    mindeyeskids@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 pt-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                <Clock className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8] shrink-0" />
                <span>
                  {isAr
                    ? 'مواعيد العمل: السبت إلى الخميس من 9 صباحاً حتى 9 مساءً'
                    : 'Working Hours: Saturday to Thursday, 9:00 AM – 9:00 PM'}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1E293B] rounded-[2rem] p-7 md:p-10 border border-slate-200 dark:border-slate-700/80 shadow-sm">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                    {isAr ? 'تم إرسال رسالتك بنجاح!' : 'Your Message Has Been Sent!'}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    {isAr
                      ? `شكراً لتواصلك معنا يا ${form.name}. سيقوم فريق مايند آيز كيدز بالرد عليك عبر البريد الإلكتروني أو الهاتف في أقرب وقت.`
                      : `Thank you for reaching out, ${form.name}. Our Mind Eyes Kids team will get back to you shortly.`}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-3 rounded-xl bg-[#0077B6] text-white font-bold text-sm cursor-pointer"
                  >
                    {isAr ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h2 className="text-xl font-black text-slate-950 dark:text-white mb-2">
                    {isAr ? 'أرسل لنا رسالة مباشرة' : 'Send Us a Direct Message'}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
                        {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={isAr ? 'مثال: أحمد محمد' : 'e.g., Ahmed Mohamed'}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-medium focus:outline-none focus:border-[#0077B6] dark:focus:border-[#38BDF8]"
                      />
                      {errors.name && (
                        <p className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
                        {isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="01034434077"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-medium focus:outline-none focus:border-[#0077B6] dark:focus:border-[#38BDF8]"
                      />
                      {errors.phone && (
                        <p className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
                        {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-medium focus:outline-none focus:border-[#0077B6] dark:focus:border-[#38BDF8]"
                      />
                      {errors.email && (
                        <p className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
                        {isAr ? 'موضوع الرسالة *' : 'Subject *'}
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder={isAr ? 'استفسار عن الحقائب العلمية / المناهج' : 'Inquiry about STEM Kits / Curricula'}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-medium focus:outline-none focus:border-[#0077B6] dark:focus:border-[#38BDF8]"
                      />
                      {errors.subject && (
                        <p className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
                      {isAr ? 'تفاصيل الرسالة *' : 'Message Details *'}
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={
                        isAr
                          ? 'اكتب استفسارك أو عمر طفلك لنساعدك في اختيار المسار والحقيبة الأنسب...'
                          : 'Write your question or your child age so we can recommend the best kit...'
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-medium focus:outline-none focus:border-[#0077B6] dark:focus:border-[#38BDF8]"
                    />
                    {errors.message && (
                      <p className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#0077B6] hover:bg-[#023E8A] text-white font-black py-4 px-6 rounded-2xl shadow-md transition-all text-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'إرسال الرسالة الآن' : 'Send Message Now'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AuthPageProps {
  lang: Language;
  onLoginSuccess: (user: { name: string; email: string }) => void;
  onNavigate: (page: PageRoute, param?: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ lang, onLoginSuccess, onNavigate }) => {
  const isAr = lang === 'ar';
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateAuthForm({ mode, name, email, password }, lang);
    if (!validation.valid) {
      setError(validation.error || null);
      return;
    }
    setError(null);
    const displayName =
      mode === 'register' && name.trim()
        ? name.trim()
        : email.split('@')[0] || (isAr ? 'بطل مايند آيز' : 'Mind Eyes Explorer');
    onLoginSuccess({ name: displayName, email: email.trim() });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] py-12 md:py-16 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-[#1E293B] rounded-[2.2rem] border border-slate-200 dark:border-slate-700/80 shadow-xl p-7 md:p-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 flex items-center justify-center mx-auto mb-4 p-2">
            <img
              src="/assets/mindeyes-logo.png"
              alt="Mind Eyes Kids"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-2xl font-black text-slate-950 dark:text-white mb-1">
            {mode === 'login'
              ? isAr
                ? 'تسجيل الدخول إلى حسابك'
                : 'Sign In to Your Account'
              : isAr
              ? 'إنشاء حساب بطل جديد'
              : 'Create a New Explorer Account'}
          </h1>
          <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
            {isAr
              ? 'احفظ تقدم طفلك في الدروس وتحدي الـ 7 أيام والشهادات'
              : 'Save your child lesson progress, 7-day challenges, and certificates'}
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-100 dark:bg-[#0F172A] rounded-2xl mb-6 border border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError(null);
            }}
            className={`py-2.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-white dark:bg-[#1E293B] text-[#0077B6] dark:text-[#38BDF8] shadow-xs'
                : 'text-slate-700 dark:text-slate-300'
            }`}
          >
            {isAr ? 'تسجيل الدخول' : 'Sign In'}
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setError(null);
            }}
            className={`py-2.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
              mode === 'register'
                ? 'bg-white dark:bg-[#1E293B] text-[#0077B6] dark:text-[#38BDF8] shadow-xs'
                : 'text-slate-700 dark:text-slate-300'
            }`}
          >
            {isAr ? 'حساب جديد' : 'Create Account'}
          </button>
        </div>

        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
                {isAr ? 'اسم الطالب أو ولي الأمر' : 'Student or Parent Name'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isAr ? 'مثال: عمر أحمد' : 'e.g., Omar Ahmed'}
                  className="w-full ps-10 pe-4 py-3 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:border-[#0077B6] dark:focus:border-[#38BDF8]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
              {isAr ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="explorer@mindeyeskids.com"
                className="w-full ps-10 pe-4 py-3 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:border-[#0077B6] dark:focus:border-[#38BDF8]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
              {isAr ? 'كلمة المرور' : 'Password'}
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full ps-10 pe-4 py-3 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:border-[#0077B6] dark:focus:border-[#38BDF8]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#0077B6] hover:bg-[#023E8A] text-white font-black py-3.5 px-6 rounded-xl shadow-md transition-all text-sm cursor-pointer mt-2"
          >
            <span>
              {mode === 'login'
                ? isAr
                  ? 'دخول إلى المنصة'
                  : 'Sign In Now'
                : isAr
                ? 'إنشاء الحساب والبدء'
                : 'Create Account & Start'}
            </span>
            {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 text-center">
          <a
            href={buildUrlPathname('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427')}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0077B6] dark:text-[#38BDF8] hover:underline"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>
              {isAr
                ? 'أو جرب درس "مغامرون الطاقة" المجاني فوراً بدون تسجيل'
                : 'Or try the Free "Energy Adventurers" Lesson immediately without registration'}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
