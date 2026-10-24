import React, { useState } from 'react';
import {
  ShoppingBag,
  Download,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Eye,
  Compass,
  Award,
  HeartHandshake,
  Lightbulb,
  BookOpen,
  Play,
  ArrowLeft,
  ArrowRight,
  Search,
  Package,
  FileText,
  FlaskConical,
  Share2,
  Check,
} from 'lucide-react';
import {
  Language,
  PageRoute,
  STORE_PRODUCTS,
  StoreProduct,
  filterStoreProducts,
  buildUrlPathname,
} from '../utils/platformData';

interface StorePageProps {
  lang: Language;
  onNavigate: (page: PageRoute, param?: string) => void;
}

export const StorePage: React.FC<StorePageProps> = ({ lang, onNavigate }) => {
  const isAr = lang === 'ar';
  const [selectedProductModal, setSelectedProductModal] = useState<StoreProduct | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'free' | 'kit' | 'digital'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = filterStoreProducts(STORE_PRODUCTS, filterType, searchQuery);

  const counts = {
    all: STORE_PRODUCTS.length,
    kit: STORE_PRODUCTS.filter((p) => p.type === 'kit').length,
    digital: STORE_PRODUCTS.filter((p) => p.type === 'digital').length,
    free: STORE_PRODUCTS.filter((p) => p.isFree).length,
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F2942] text-white p-8 md:p-12 mb-10 shadow-xl border border-slate-800">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300 mb-2">
                {isAr
                  ? 'المتجر التعليمي والحقائب العلمية · 8 منتجات متكاملة'
                  : 'Educational Store & STEM Kits · 8 Complete Products'}
              </p>
              <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-white">
                {isAr ? 'متجر مايند آيز كيدز التعليمي' : 'Mind Eyes Kids Educational Store'}
              </h1>
              <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                {isAr
                  ? 'اكتشف 8 حقائب علمية عملية وباقات رقمية تفاعلية قابلة للطباعة مصممة لتحويل المفاهيم العلمية والتربوية إلى تجارب ممتعة بيد طفلك في المنزل!'
                  : 'Explore 8 hands-on STEM experiment kits and printable digital learning packs designed to turn science and values into joyful home adventures!'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://drive.google.com/drive/folders/1caDGHa7kaDryJv3o5vtWHYcKyJqgLpeT?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-4 rounded-2xl shadow-lg transition-all text-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{isAr ? 'تحميل ملفات دكتور ويزي المجانية' : 'Download Free Dr. Wizzy Pack'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-4 md:p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter store products">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-[#0077B6] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {isAr ? `الكل (${counts.all})` : `All (${counts.all})`}
            </button>
            <button
              type="button"
              onClick={() => setFilterType('kit')}
              className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                filterType === 'kit'
                  ? 'bg-[#0077B6] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>{isAr ? `حقائب علمية (${counts.kit})` : `STEM Kits (${counts.kit})`}</span>
            </button>
            <button
              type="button"
              onClick={() => setFilterType('digital')}
              className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                filterType === 'digital'
                  ? 'bg-[#0077B6] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{isAr ? `باقات رقمية (${counts.digital})` : `Digital Packs (${counts.digital})`}</span>
            </button>
            <button
              type="button"
              onClick={() => setFilterType('free')}
              className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                filterType === 'free'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100'
              }`}
            >
              {isAr ? `مجاني (${counts.free})` : `Free (${counts.free})`}
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isAr ? 'ابحث عن حقيبة علمية، تجربة، أو فئة عمرية...' : 'Search kits, experiments, or topics...'
              }
              className="w-full ps-10 pe-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:border-[#0077B6] dark:focus:border-[#38BDF8]"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-700">
            <p className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
              {isAr ? 'لا توجد منتجات مطابقة لبحثك' : 'No matching products found'}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              {isAr
                ? 'جرب البحث بكلمة أخرى أو استعرض جميع الحقائب العلمية والملفات الرقمية.'
                : 'Try another keyword or reset the filters to view all kits and packs.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setFilterType('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-xl bg-[#0077B6] text-white font-bold text-sm cursor-pointer"
            >
              {isAr ? 'عرض كل المنتجات (8)' : 'Show All Products (8)'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-[#1E293B] rounded-[1.8rem] border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-[#0077B6]/50 dark:hover:border-[#38BDF8]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <a
                    href={buildUrlPathname('product-detail', product.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('product-detail', product.id);
                    }}
                    className="relative block aspect-[4/3] bg-slate-100 dark:bg-slate-800/90 p-5 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-700/60"
                  >
                    <img
                      src={product.image}
                      alt={isAr ? product.titleAr : product.titleEn}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 start-3 bg-slate-950/90 text-white text-xs font-black px-3 py-1.5 rounded-xl shadow">
                      {isAr ? product.priceAr : product.priceEn}
                    </div>
                    <div className="absolute top-3 end-3 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-slate-100 text-[11px] font-extrabold px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                      {product.type === 'kit'
                        ? isAr
                          ? 'حقيبة عملية'
                          : 'STEM Kit'
                        : isAr
                        ? 'باقة رقمية'
                        : 'Digital Pack'}
                    </div>
                  </a>

                  {/* Details */}
                  <div className="p-5">
                    <p className="text-xs font-bold text-[#0077B6] dark:text-[#38BDF8] mb-1.5">
                      {isAr ? product.categoryAr : product.categoryEn} · {isAr ? product.ageRangeAr : product.ageRangeEn}
                    </p>
                    <a
                      href={buildUrlPathname('product-detail', product.id)}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('product-detail', product.id);
                      }}
                      className="block"
                    >
                      <h2 className="text-lg font-black text-slate-950 dark:text-white mb-2 group-hover:text-[#0077B6] dark:group-hover:text-[#38BDF8] transition-colors line-clamp-2">
                        {isAr ? product.titleAr : product.titleEn}
                      </h2>
                    </a>
                    <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed mb-4 line-clamp-2">
                      {isAr ? product.descriptionAr : product.descriptionEn}
                    </p>

                    {/* Contents preview */}
                    <div className="bg-slate-50 dark:bg-[#0F172A]/90 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                      <p className="text-[11px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">
                        {isAr
                          ? `يتضمن (${product.experimentsCount} أنشطة وتجارب):`
                          : `Includes (${product.experimentsCount} Labs & Activities):`}
                      </p>
                      {(isAr ? product.contentsAr : product.contentsEn).slice(0, 2).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-5 pb-5 pt-1 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={buildUrlPathname('product-detail', product.id)}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('product-detail', product.id);
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 font-black py-2.5 px-3 rounded-xl text-xs bg-[#0077B6] hover:bg-[#023E8A] text-white transition-all shadow-sm"
                    >
                      <span>{isAr ? 'صفحة المنتج والتفاصيل' : 'Product Page & Details'}</span>
                      {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedProductModal(product)}
                      className="px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0077B6] dark:hover:border-[#38BDF8] text-slate-800 dark:text-slate-200 font-bold text-xs transition-all cursor-pointer"
                      title={isAr ? 'معاينة سريعة' : 'Quick Preview'}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  <a
                    href={product.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-1.5 font-bold py-2 px-3 rounded-xl text-xs transition-all ${
                      product.isFree
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                    }`}
                  >
                    {product.isFree ? <Download className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                    <span>
                      {product.isFree
                        ? isAr
                          ? 'تحميل مجاني مباشر (Google Drive)'
                          : 'Free Direct Download'
                        : isAr
                        ? 'اطلب عبر واتساب الآن'
                        : 'Order via WhatsApp'}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-75" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Quick Preview Modal */}
      {selectedProductModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProductModal(null)}
        >
          <div
            className="bg-white dark:bg-[#1E293B] rounded-[2rem] max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-extrabold text-[#0077B6] dark:text-[#38BDF8] mb-1">
                  {isAr ? selectedProductModal.categoryAr : selectedProductModal.categoryEn} ·{' '}
                  {isAr ? selectedProductModal.ageRangeAr : selectedProductModal.ageRangeEn}
                </p>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">
                  {isAr ? selectedProductModal.titleAr : selectedProductModal.titleEn}
                </h3>
              </div>
              <span className="bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 font-black px-3 py-1 rounded-xl text-xs border border-amber-300 dark:border-amber-700">
                {isAr ? selectedProductModal.priceAr : selectedProductModal.priceEn}
              </span>
            </div>

            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-5">
              {isAr ? selectedProductModal.descriptionAr : selectedProductModal.descriptionEn}
            </p>

            <div className="bg-slate-50 dark:bg-[#0F172A] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 mb-6 space-y-2.5">
              <p className="text-xs font-black text-slate-900 dark:text-white">
                {isAr ? 'جميع محتويات الحقيبة / الباقة:' : 'Full Package Contents:'}
              </p>
              {(isAr ? selectedProductModal.contentsAr : selectedProductModal.contentsEn).map((c, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={buildUrlPathname('product-detail', selectedProductModal.id)}
                onClick={(e) => {
                  e.preventDefault();
                  const id = selectedProductModal.id;
                  setSelectedProductModal(null);
                  onNavigate('product-detail', id);
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-[#0077B6] hover:bg-[#023E8A] text-white font-black py-3 px-5 rounded-xl text-sm transition-all cursor-pointer"
              >
                <span>{isAr ? 'فتح صفحة المنتج الكاملة' : 'Open Full Product Page'}</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedProductModal(null)}
                className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition-all cursor-pointer"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface ProductDetailViewProps {
  lang: Language;
  productId: string;
  onNavigate: (page: PageRoute, param?: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ lang, productId, onNavigate }) => {
  const isAr = lang === 'ar';
  const [copiedLink, setCopiedLink] = useState(false);

  const product =
    STORE_PRODUCTS.find((p) => p.id === productId || p.slug === productId) || STORE_PRODUCTS[0];

  const relatedProducts = STORE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleCopyUrl = () => {
    const url = window.location.origin + buildUrlPathname('product-detail', product.id);
    navigator.clipboard?.writeText(url).catch(() => {});
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] py-10 md:py-14 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Store & Copy Direct Link Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <a
            href={buildUrlPathname('store')}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('store');
            }}
            className="inline-flex items-center gap-2 text-sm font-black text-slate-800 dark:text-slate-200 hover:text-[#0077B6] dark:hover:text-[#38BDF8] bg-white dark:bg-[#1E293B] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs transition-all"
          >
            {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{isAr ? 'العودة إلى المتجر التعليمي (8 منتجات)' : 'Back to Educational Store (8 Products)'}</span>
          </a>

          <button
            type="button"
            onClick={handleCopyUrl}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-[#1E293B] hover:border-[#0077B6] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-400">
                  {isAr ? 'تم نسخ رابط المنتج المباشر!' : 'Direct Product Link Copied!'}
                </span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />
                <span dir="ltr">{buildUrlPathname('product-detail', product.id)}</span>
              </>
            )}
          </button>
        </div>

        {/* Product Detail Main Card */}
        <div className="bg-white dark:bg-[#1E293B] rounded-[2.2rem] border border-slate-200 dark:border-slate-700/80 shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Product Visual Column */}
            <div className="lg:col-span-5 bg-slate-100 dark:bg-[#0F172A] p-8 md:p-12 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-e border-slate-200 dark:border-slate-800">
              <div className="w-full max-w-sm aspect-square flex items-center justify-center">
                <img
                  src={product.image}
                  alt={isAr ? product.titleAr : product.titleEn}
                  className="w-full h-full object-contain drop-shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-extrabold text-slate-700 dark:text-slate-300">
                <span>
                  {product.type === 'kit'
                    ? isAr
                      ? '📦 حقيبة تجارب علمية'
                      : '📦 Physical STEM Kit'
                    : isAr
                    ? '📄 باقة رقمية للطباعة'
                    : '📄 Printable Digital Pack'}
                </span>
                <span>·</span>
                <span>
                  {isAr ? `العمر: ${product.ageRangeAr}` : `Age: ${product.ageRangeEn}`}
                </span>
                <span>·</span>
                <span>
                  {isAr ? `${product.experimentsCount} تجارب وأنشطة` : `${product.experimentsCount} Labs & Activities`}
                </span>
              </div>
            </div>

            {/* Product Info & CTA Column */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <p className="text-xs font-black uppercase tracking-wider text-[#0077B6] dark:text-[#38BDF8]">
                    {isAr ? product.categoryAr : product.categoryEn} · {isAr ? product.ageRangeAr : product.ageRangeEn}
                  </p>
                  <span className="text-2xl md:text-3xl font-black text-slate-950 dark:text-white bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700 px-4 py-1.5 rounded-2xl">
                    {isAr ? product.priceAr : product.priceEn}
                  </span>
                </div>

                <h1 className="text-2xl md:text-4xl font-black text-slate-950 dark:text-white mb-4 leading-tight">
                  {isAr ? product.titleAr : product.titleEn}
                </h1>

                <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg leading-relaxed mb-8">
                  {isAr ? product.descriptionAr : product.descriptionEn}
                </p>

                {/* Contents Checklist */}
                <div className="bg-slate-50 dark:bg-[#0F172A] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 mb-8">
                  <h2 className="text-sm font-black text-slate-950 dark:text-white mb-4 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-[#0077B6] dark:text-[#38BDF8]" />
                    <span>
                      {isAr
                        ? 'ماذا يوجد داخل هذه الحقيبة / الباقة التعليمية؟'
                        : 'What is included inside this educational package?'}
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {(isAr ? product.contentsAr : product.contentsEn).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 bg-white dark:bg-[#1E293B] p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={product.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2.5 font-black py-4 px-6 rounded-2xl text-sm shadow-md transition-all ${
                    product.isFree
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-[#0077B6] hover:bg-[#023E8A] text-white'
                  }`}
                >
                  {product.isFree ? <Download className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
                  <span>
                    {product.isFree
                      ? isAr
                        ? 'تحميل الملفات مجاناً عبر Google Drive'
                        : 'Download Free Files via Google Drive'
                      : isAr
                      ? 'اطلب الحقيبة الآن عبر واتساب'
                      : 'Order Kit Now via WhatsApp'}
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                {product.relatedTopicId && (
                  <a
                    href={buildUrlPathname('topic-detail', product.relatedTopicId)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('topic-detail', product.relatedTopicId);
                    }}
                    className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-4 px-6 rounded-2xl text-sm transition-all shadow-sm cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{isAr ? 'ابدأ الدرس التفاعلي المرتبط' : 'Start Related Interactive Lesson'}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white">
              {isAr ? 'منتجات وحقائب تعليمية أخرى قد تعجبك' : 'Other STEM Kits & Packs You Might Like'}
            </h2>
            <a
              href={buildUrlPathname('store')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('store');
              }}
              className="text-sm font-black text-[#0077B6] dark:text-[#38BDF8] hover:underline"
            >
              {isAr ? 'عرض كل المتجر (8)' : 'View All (8)'}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <a
                key={rel.id}
                href={buildUrlPathname('product-detail', rel.id)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('product-detail', rel.id);
                }}
                className="group bg-white dark:bg-[#1E293B] rounded-2xl p-5 border border-slate-200 dark:border-slate-700/80 hover:border-[#0077B6] dark:hover:border-[#38BDF8] shadow-xs hover:shadow-md transition-all flex items-center gap-4"
              >
                <img
                  src={rel.image}
                  alt={isAr ? rel.titleAr : rel.titleEn}
                  className="w-20 h-20 object-contain rounded-xl bg-slate-100 dark:bg-slate-800 p-2 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-[#0077B6] dark:text-[#38BDF8] mb-0.5">
                    {isAr ? rel.priceAr : rel.priceEn} · {isAr ? rel.ageRangeAr : rel.ageRangeEn}
                  </p>
                  <h3 className="text-sm font-black text-slate-950 dark:text-white group-hover:text-[#0077B6] dark:group-hover:text-[#38BDF8] transition-colors line-clamp-2">
                    {isAr ? rel.titleAr : rel.titleEn}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface AboutPageProps {
  lang: Language;
  onNavigate: (page: PageRoute, param?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onNavigate }) => {
  const isAr = lang === 'ar';

  const pillars = [
    {
      icon: Lightbulb,
      titleAr: 'التعلم القائم على القصص والتجربة',
      titleEn: 'Story-Driven Hands-on Learning',
      descAr:
        'نحول كل مفهوم علمي مجرد إلى مغامرة كرتونية ممتعة يقودها دكتور ويزي وأصدقاؤه مع تجارب منزلية آمنة.',
      descEn:
        'We turn every abstract scientific concept into an engaging animated story led by Dr. Wizzy with safe home experiments.',
      color: 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800',
    },
    {
      icon: Compass,
      titleAr: 'دمج المنصة الرقمية بالنشاط العملي',
      titleEn: 'Bridging Screen & Physical World',
      descAr:
        'لا نكتفي بالمشاهدة؛ كل درس يتبعه نشاط عملي وتحدي 7 أيام يربط الطفل ببيئته الحقيقية بعيداً عن الإدمان الرقمي.',
      descEn:
        'More than passive watching: every lesson includes a real-world lab activity and a 7-Day habit challenge.',
      color: 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    },
    {
      icon: HeartHandshake,
      titleAr: 'بناء الشخصية والقيم الأخلاقية',
      titleEn: 'Character & Ethical Values Building',
      descAr:
        'إلى جانب العلوم والتفكير النقدي، تغرس "مدينة القيم" سلوكيات الصدق، التعاون، المسؤولية، واحترام الآخرين.',
      descEn:
        'Alongside STEM and critical thinking, Values City nurtures honesty, teamwork, responsibility, and empathy.',
      color:
        'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    },
    {
      icon: Award,
      titleAr: 'مناهج دولية ثنائية اللغة',
      titleEn: 'Bilingual International Standards',
      descAr:
        'ندعم طلاب المدارس الدولية والألمانية واللغات بمحتوى علمي رصين يجمع بين العربية والإنجليزية بمرونة كاملة.',
      descEn:
        'Supporting International, German, and Language school students with rigorous bilingual STEM curricula.',
      color:
        'bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Card */}
        <div className="bg-white dark:bg-[#1E293B] rounded-[2.5rem] border border-slate-200 dark:border-slate-700/80 shadow-md p-8 md:p-14 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0077B6] dark:text-[#38BDF8] mb-3 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>{isAr ? 'تعرف على رؤية ورسالة مايند آيز كيدز' : 'Discover Mind Eyes Kids Vision & Mission'}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white mb-6 leading-tight">
                {isAr
                  ? 'نفتح عيون وعقول أطفالنا على متعة الاكتشاف العلمي والقيم الأصيلة'
                  : 'Opening Young Minds to the Joy of Scientific Discovery & Core Values'}
              </h1>

              <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg leading-relaxed mb-6">
                {isAr
                  ? 'مايند آيز كيدز (Mind Eyes Kids) هي منصة تعليمية تفاعلية متخصصة للأطفال من عمر 4 إلى 12 سنة. نصمم رحلات تعليمية تجمع بين القصص الكرتونية المشوقة، التجارب العلمية المنزلية الآمنة، والألعاب التفاعلية لبناء جيل مفكر ومبدع.'
                  : 'Mind Eyes Kids is an interactive educational platform for children aged 4 to 12. We craft learning journeys combining animated storytelling, safe home STEM experiments, and interactive quizzes to raise creative thinkers.'}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={buildUrlPathname('curriculum')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('curriculum');
                  }}
                  className="bg-[#0077B6] hover:bg-[#023E8A] text-white font-black px-7 py-4 rounded-2xl shadow-md transition-all text-sm cursor-pointer"
                >
                  {isAr ? 'استكشف المناهج الـ 4 الآن' : 'Explore the 4 Curricula'}
                </a>
                <a
                  href={buildUrlPathname('store')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('store');
                  }}
                  className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold px-7 py-4 rounded-2xl transition-all text-sm cursor-pointer"
                >
                  {isAr ? 'تصفح الحقائب العلمية (8)' : 'Browse STEM Kits (8)'}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] bg-gradient-to-br from-[#E0F2FE] via-white to-[#FEF3C7] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-2 border-sky-200 dark:border-slate-700 shadow-xl flex items-center justify-center p-6">
                <img
                  src="/assets/mindeyes-mascot.png"
                  alt="Mind Eyes Mascot"
                  className="w-full h-full object-contain drop-shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-950 dark:text-white mb-3">
              {isAr ? 'لماذا يختار الآباء والمعلمون مايند آيز؟' : 'Why Parents & Educators Choose Mind Eyes?'}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
              {isAr
                ? 'منهجية خماسية الخطوات تجعل الطفل شريكاً فاعلاً في التعلم وليست مجرد متلقٍ سلبي.'
                : 'A 5-step methodology that makes your child an active explorer rather than a passive viewer.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#1E293B] rounded-[1.8rem] p-7 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all flex items-start gap-5"
                >
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${pillar.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950 dark:text-white mb-2">
                      {isAr ? pillar.titleAr : pillar.titleEn}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {isAr ? pillar.descAr : pillar.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5-Step Journey Banner */}
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-[2.2rem] p-8 md:p-12 text-white shadow-xl border border-slate-800">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-white">
              {isAr ? 'الخطوات الـ 5 في كل درس على المنصة' : 'The 5 Steps in Every Lesson on Our Platform'}
            </h3>
            <p className="text-slate-200 text-sm md:text-base mb-8">
              {isAr
                ? '🎬 شاهد القصة مع طفلك · ⚡ فيديو سريع مبسط · 🧪 جرب النشاط العملي · 🎯 حل الاختبار التفاعلي · 🏆 تحدي 7 أيام لبناء العادات'
                : '🎬 Watch the Story · ⚡ Quick Video · 🧪 Try the Lab Activity · 🎯 Take the Quiz · 🏆 7-Day Challenge'}
            </p>
            <a
              href={buildUrlPathname('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427')}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('topic-detail', 'c0a9478b-0937-493e-81c3-1a338a1eb427');
              }}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-2xl text-sm shadow-lg transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>{isAr ? 'جرب درس "مغامرون الطاقة" مجاناً الآن' : 'Try "Energy Adventurers" Free Lesson Now'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
