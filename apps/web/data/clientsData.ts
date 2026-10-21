export interface ClientDeliverable {
  title: string;
  description: string;
  iconType: 'lms' | 'book' | 'security' | 'brand' | 'web' | 'course';
}

export interface ClientData {
  id: string;
  category: 'enterprise' | 'creator';
  categoryLabelAr: string;
  categoryLabelEn: string;
  nameAr: string;
  nameEn: string;
  founderOrLeader?: string;
  roleAr: string;
  countryAr: string;
  logoType: 'hrsd' | 'beyondbirths';
  websiteUrl?: string;
  websiteDomain?: string;
  summaryAr: string;
  tagsAr: string[];
  deliverablesAr: ClientDeliverable[];
  coursesList?: string[];
  statusBadgeAr: string;
}

export const CLIENTS_DATA: ClientData[] = [
  {
    id: 'hrsd-saudi',
    category: 'enterprise',
    categoryLabelAr: 'جهة حكومية ومؤسسية سيادية',
    categoryLabelEn: 'Enterprise Institutional Client',
    nameAr: 'وزارة الموارد البشرية والتنمية الاجتماعية',
    nameEn: 'Ministry of Human Resources and Social Development (HRSD)',
    countryAr: 'المملكة العربية السعودية',
    roleAr: 'تطوير كفاءات الذكاء الاصطناعي وبناء حزمة تعليمية رقمية متوافقة مع أنظمة LMS الحكومية',
    logoType: 'hrsd',
    statusBadgeAr: 'مشروع حكومي معتمد ومُسلّم',
    summaryAr:
      'قمنا بهندسة وتطوير برنامج تدريبي متكامل في الذكاء الاصطناعي التوليدي لموظفي الوزارة، مع إعداد وتجهيز حزمة تعليمية رقمية تفاعلية بصيغة SCORM متوافقة بنسبة 100% مع أنظمة إدارة التعلم LMS الحكومية، لتمكين منسوبي الوزارة من أتمتة المهام اليومية مع الالتزام بأعلى معايير حماية البيانات والخصوصية المؤسسية.',
    tagsAr: [
      'حزم SCORM 1.2 / 2004 LMS',
      '6 وحدات فيديو تفاعلية',
      'أتمتة بيئة العمل بالذكاء الاصطناعي',
      'أمن وسرية البيانات الحكومية',
      'بناء وتدقيق المحتوى المؤسسي'
    ],
    deliverablesAr: [
      {
        title: 'حزمة SCORM التعليمية الرقمية (6 وحدات تدريبية)',
        description: 'فيديوهات احترافية واختبارات قياس معرفة تفاعلية وتتبع آلي لتقدم المتدربين على أنظمة LMS.',
        iconType: 'lms',
      },
      {
        title: 'البنك المعرفي التحريري لأدوات الذكاء الاصطناعي',
        description: 'أدلة تفصيلية لأدوات الذكاء الاصطناعي اليومية، تقنيات صياغة الأوامر (Prompting)، والتحقق من الحقائق لمنع الهلوسة.',
        iconType: 'book',
      },
      {
        title: 'إطار أمان البيانات والامتثال المؤسسي',
        description: 'إرشادات واضحة وصارمة لمنع تسريب أي معلومات حكومية حساسة أو استخدام أدوات غير مصرح بها.',
        iconType: 'security',
      },
    ],
  },
  {
    id: 'beyond-births',
    category: 'creator',
    categoryLabelAr: 'منصة منتجات رقمية وعلامة شخصية رائدة',
    categoryLabelEn: 'Founder Digital Product Suite',
    nameAr: 'Beyond Births — د. علياء خليل',
    nameEn: 'Beyond Births • Alia Khalil',
    founderOrLeader: 'علياء خليل (Alia Khalil)',
    roleAr: 'دولاً معتمدة لما بعد الولادة وأخصائية صحة الأمومة والطفل (Certified Postpartum Doula)',
    countryAr: 'منصة دولية',
    logoType: 'beyondbirths',
    websiteUrl: 'https://www.beyondbirths.co/',
    websiteDomain: 'beyondbirths.co',
    statusBadgeAr: 'موقع حي ومنتجات رقمية نشطة',
    summaryAr:
      'حوّلنا استشارات الدكتورة علياء خليل الفردية المباشرة (1-on-1) إلى منصة تعليمية رقمية رائدة متكاملة. قمنا بهندسة المفهوم والهوية البصرية للبراند، وتصميم وتطوير المنصة الرقمية الرسمية وتجربة المستخدم، وهندسة 4 دورات تدريبية وماستركلاس رقمية تمكّن الأسر في شتى أنحاء العالم من الحصول على رعاية متخصصة للأم والمولود على مدار الساعة.',
    tagsAr: [
      'هندسة وبناء الهوية البصرية',
      'منصة ويب مخصصة ومطورة',
      '4 ماستركلاس ودورات رقمية مسجلة',
      'بوابات دفع واشتراك دولية',
      'أتمتة رحلة العميل بالكامل'
    ],
    deliverablesAr: [
      {
        title: 'هندسة الهوية والعلامة التجارية (Brand Architecture)',
        description: 'ترسيخ "Beyond Births" كمرجعية أولى وموثوقة في رعاية الأمومة ونقل الخبرة من ساعات استشارية محدودة إلى أصل رقمي عالمي.',
        iconType: 'brand',
      },
      {
        title: 'منصة ويب مخصصة للتحويل والمبيعات (beyondbirths.co)',
        description: 'منصة تفاعلية تضم بوابات الدفع الإلكتروني، تسجيل الطلاب الفوري، ونظام إدارة الاشتراكات والاستشارات.',
        iconType: 'web',
      },
      {
        title: '4 دورات رقمية ومحتوى تدريبي متكامل',
        description: 'إعداد المناهج، تسجيل الدروس المرئية، تجهيز أدلة العمل القابلة للتحميل، وأطر التعافي للأمهات الجدد.',
        iconType: 'course',
      },
    ],
    coursesList: [
      'ماستركلاس: رعاية حديثي الولادة للآباء الجدد (Masterclass: Newborn Care for New Parents)',
      'ورشة عمل حية: أساسيات رعاية الرضيع 101 (Live Workshop: Essentials of Newborn Care 101)',
      'تجاوز مرحلة ما بعد الولادة بثقة وأمان (Navigating Postpartum with Confidence)',
      'تهيئة الطفل الأول لاستقبال المولود الجديد (Preparing Your First Child to Welcome a New Baby)',
    ],
  },
];
