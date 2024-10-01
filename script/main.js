const categoryEastern = document.querySelector('.eastern');
const categoryWestern = document.querySelector('.western');
const categoryBakery = document.querySelector('.bakery');
const categoryChocolate = document.querySelector('.chocolates');

const eastern = [
    {title:"بسبوسة سادة",price:"220",img:"images/شرقي/بسبوسة سادة_1.webp"},
    {title:"بسيمة",price:"275",img:"images/شرقي/بسيمة_2.webp"},
    {title:"بصمة كاجو",price:"440",img:"images/شرقي/بصمة كاجو_3.webp"},
    {title:"بقلاوة اسية فستق (6)",price:"300",img:"images/شرقي/بقلاوة اسية فستق (6)_4.webp"},
    {title:"بقلاوة بغاشة",price:"275",img:"images/شرقي/بقلاوة بغاشة_5.webp"},
    {title:"بقلاوة حجاب عين جمل (3)",price:"475",img:"images/شرقي/بقلاوة حجاب عين جمل (3)_6.webp"},
    {title:"بقلاوة سكينة قرفة",price:"275",img:"images/شرقي/بقلاوة سكينة قرفة_7.webp"},
    {title:"بقلاوة سيخ",price:"300",img:"images/شرقي/بقلاوة سيخ_8.webp"},
    {title:"بقلاوة عنتاب فستق (2)",price:"300",img:"images/شرقي/بقلاوة عنتاب فستق (2)_9.webp"},
    {title:"بقلاوة غوايش (2)",price:"300",img:"images/شرقي/بقلاوة قشطة_11.webp"},
    {title:"بقلاوة قشطة",price:"385",img:"images/شرقي/بقلاوة قشطة_11.webp"},
    {title:"بقلاوة لقمة الباشا",price:"495",img:"images/شرقي/بقلاوة لقمة الباشا_12.webp"},
    {title:"بلح الشام كريمة",price:"200",img:"images/شرقي/بلح الشام كريمة_13.webp"},
    {title:"بلح الشام نوتيلا",price:"200",img:"images/شرقي/بلح الشام نوتيلا_14.webp"},
    {title:"رموش",price:"275",img:"images/شرقي/رموش_15.webp"},
    {title:"شكلمة",price:"275",img:"images/شرقي/شكلمة_16.webp"},
    {title:"علبة بقلاوة تركي",price:"300",img:"images/شرقي/علبة بقلاوة تركي_17.webp"},
    {title:"علبة شرقي صوصات",price:"300",img:"images/شرقي/علبة شرقي صوصات_18.webp"},
    {title:"فورمة بسبوسة بندق",price:"255",img:"images/شرقي/فورمة بسبوسة بندق_19.webp"},
    {title:"فورمة بسبوسة مكسرات",price:"255",img:"images/شرقي/فورمة بسبوسة مكسرات_20.webp"},
    {title:"فورمة بقلاوة سوري",price:"355",img:"images/شرقي/فورمة بقلاوة سوري_21.webp"},
    {title:"فورمة دلوعة 8 سيزون",price:"300",img:"images/شرقي/فورمة دلوعة 8 سيزون_22.webp"},
    {title:"فورمة فور سيزون",price:"300",img:"images/شرقي/فورمة فور سيزون_23.webp"},
    {title:"فورمة كنافة سوري",price:"330",img:"images/شرقي/فورمة كنافة سوري_24.webp"},
    {title:"فورمة كنافة مانجو (2)",price:"250",img:"images/شرقي/فورمة كنافة مانجو (2)_25.webp"},
    {title:"فورمة هاف",price:"300",img:"images/شرقي/فورمة هاف_26.webp"},
    {title:"كنافة اساور لوكس (2)",price:"440",img:"images/شرقي/كنافة اساور لوكس (2)_27.webp"},
    {title:"كنافة اساور نوتيلا (2)",price:"300",img:"images/شرقي/كنافة اساور نوتيلا (2)_28.webp"},
    {title:"كنافة بصمة عجوة",price:"275",img:"images/شرقي/كنافة بصمة عجوة_29.webp"},
    {title:"كنافة بصمة عين جمل (5)",price:"440",img:"images/شرقي/كنافة بصمة عين جمل (5)_30.webp"},
    {title:"كنافة بصمة فستق",price:"1400",img:"images/شرقي/كنافة بصمة فستق_31.webp"},
    {title:"كنافة بصمة كاجو (4)",price:"440",img:"images/شرقي/كنافة بصمة كاجو (4)_32.webp"},
    {title:"كنافة بصمة ماكس (4)",price:"550",img:"images/شرقي/كنافة بصمة ماكس (4)_33.webp"},
    {title:"كنافة بصمة مكسرات (2)",price:"300",img:"images/شرقي/كنافة بصمة مكسرات (2)_34.webp"},
    {title:"كنافة بورمة فستق",price:"1400",img:"images/شرقي/كنافة بورمة فستق_35.webp"},
    {title:"كنافة بورمة ماكس (2)",price:"440",img:"images/شرقي/كنافة بورمة ماكس (2)_36.webp"},
    {title:"كنافة سيجار بندق (2)",price:"385",img:"images/شرقي/كنافة سيجار بندق (2)_37.webp"},
    {title:"كنافة سيجار سادة (3)",price:"255",img:"images/شرقي/كنافة سيجار سادة (3)_38.webp"},
    {title:"كنافة سيجار فستق (4)",price:"300",img:"images/شرقي/كنافة سيجار فستق (4)_39.webp"},
    {title:"كنافة قشطة",price:"250",img:"images/شرقي/كنافة قشطة_40.webp"},
    {title:"كنافة كورنيه",price:"300",img:"images/شرقي/كنافة كورنيه_41.webp"},
    {title:"هريسة شامي",price:"275",img:"images/شرقي/هريسة شامي_42.webp"},
    {title:"هريسة",price:"300",img:"images/شرقي/هريسة_43.webp"},
]

const western = [
    {title:"اكلير",img:"images/اكلير/اكلير نوتيلا_8.webp",second_title:"eclear"},           ///////////
    {title:"انجلش كيك",img:"images/انجلش كيك/انجلش كيك اسبشيال كيندر.webp",second_title:"english_cake"},
    {title:"تريليتشي وبولات",img:"images/تريليتشي وبولات/بولة بورليه_2.webp",second_title:"trelteshe_bolat"},
    {title:"تورات",img:"images/تورات/امريكان لوتس ميكس بيري.webp",second_title:"torat"},
    {title:"جاتوهات",img:"images/جاتوهات/جاتوه امريكان (2)_1.webp",second_title:"gatouh"},
    {title:"سواريه وماكرون",img:"images/سواريه وماكرون/ماكرون 24 قطعة_6.webp",second_title:"soareh_macron"},
    {title:"قطع ديزرت",img:"images/قطع ديزرت/ليزي كيك_33.webp",second_title:"dessert_pieces"},
    {title:"كب كيك",img:"images/كب كيك/كب كيك_7.webp",second_title:"capcake"},
    {title:"كبات",img:"images/كبات/ام علي كبير_4.webp",second_title:"capat"},
    {title:"ملفاي",img:"images/ملفاي/ملفاي مكسرات_6.webp",second_title:"melfay"},
]

const eclear = [
    {title:"اكلير اسنيكرز",price:"40",img:"images/اكلير/اكلير اسنيكرز_1.webp"},
    {title:"اكلير شوكلت",price:"40",img:"images/اكلير/اكلير شوكلت_2.webp"},
    {title:"اكلير فواكه",price:"40",img:"images/اكلير/اكلير فواكه_3.webp"},
    {title:"اكلير كراميل",price:"40",img:"images/اكلير/اكلير كراميل_4.webp"},
    {title:"اكلير لوتس",price:"40",img:"images/اكلير/اكلير لوتس_5.webp"},
    {title:"اكلير نوتيلا",price:"40",img:"images/اكلير/اكلير نوتيلا_7.webp"},
    {title:"اكلير ميكس بيري",price:"40",img:"images/اكلير/اكلير ميكس بيري_6.webp"},
    {title:"اكلير نوتيلا",price:"40",img:"images/اكلير/اكلير نوتيلا_8.webp"},
]

const english_cake = [
    {title:"انجلش كيك اسبشيال نوتيلا",price:"350",img:"images/انجلش كيك/انجلش كيك اسبشيال كيندر.webp"},
    {title:"انجلش كيك اسبشيال لوتس",price:"350",img:"images/انجلش كيك/انجلش كيك اسبشيال لوتس.webp"},
    {title:"انجلش كيك اسبشيال كيندر",price:"350",img:"images/انجلش كيك/انجلش كيك اسبشيال نوتيلا.webp"},
    {title:"قالب انجلش شوكلت",price:"100",img:"images/انجلش كيك/قالب انجلش شوكلت.webp"},
    {title:"قالب انجلش فانيليا",price:"80",img:"images/انجلش كيك/قالب انجلش فانيليا.webp"},
]

const trelteshe_bolat = [
    {title:"بولة برفترول",price:"250",img:"images/تريليتشي وبولات/بولة برفترول_1.webp"},
    {title:"بولة بورليه",price:"320",img:"images/تريليتشي وبولات/بولة بورليه_2.webp"},
    {title:"بولة ترايفل مانجو",price:"220",img:"images/تريليتشي وبولات/بولة ترايفل مانجو_3.webp"},
    {title:"تريلتشي صنداي مانجو",price:"70",img:"images/تريليتشي وبولات/تريلتشي صنداي مانجو_5.webp"},
    {title:"تريلتشي لوتس",price:"80",img:"images/تريليتشي وبولات/تريلتشي لوتس_6.webp"},
    {title:"تريلتشي صنداي لوتس",price:"300",img:"images/تريليتشي وبولات/تريلتشي صنداي لوتس_4.webp"},
    {title:"تريلتشي مانجو",price:"300",img:"images/تريليتشي وبولات/تريلتشي مانجو_7.webp"},
    {title:"تريلتشي نوتيلا",price:"300",img:"images/تريليتشي وبولات/تريلتشي نوتيلا_8.webp"},
]

// فيها 3 تعديلات
const torat = [
    {title:"امريكان لوتس ميكس بيري",price:"385",img:"images/تورات/امريكان لوتس ميكس بيري.webp"},
    {title:"تورتة امريكان بلاك فستق",price:"500",img:"images/تورات/تورتة امريكان بلاك فستق.webp"},
    {title:"تورتة امريكان شوكلت نوتيلا",price:"315",img:"images/تورات/تورتة امريكان شوكلت نوتيلا.webp"},
    {title:"تورتة امريكان فور سيزون",price:"495",img:"images/تورات/تورتة امريكان فور سيزون.webp"},
    {title:"تورتة 4 سيزون ايطالي",price:"410",img:"images/تورات/تورتة امريكان فور سيزون.webp"},
    {title:"تورتة هاف ايطالي",price:"465",img:"images/تورات/تورتة هاف ايطالي.webp"},
    {title:"تورتة وايت روشية",price:"500",img:"images/تورات/تورتة وايت روشية.webp"},
    {title:"تورتة 8 سيزون",price:"495",img:"images/تورات/تورتة 8 سيزون.webp"},
    {title:"تورتة اوريو م 15",price:"300",img:"images/تورات/تورتة اوريو م 15.webp"},
    {title:"تورتة بلاك فورست",price:"450",img:"images/تورات/تورتة بلاك فورست.webp"},
    {title:"تورتة تشيز بروانيز",price:"300",img:"images/تورات/تورتة تشيز بروانيز.webp"},
    {title:"تورتة توتي",price:"475",img:"images/تورات/تورتة توتي.webp"},
    {title:"تورتة جالاكسي فاكهة",price:"560",img:"images/تورات/تورتة جالاكسي فاكهة.webp"},
    {title:"تورتة جالاكسي",price:"630",img:"images/تورات/تورتة جالاكسي.webp"},
    {title:"تورتة جيفارا",price:"620",img:"images/تورات/تورتة جيفارا.webp"},
    {title:"تورتة شوكلت كيندر",price:"300",img:"images/تورات/تورتة شوكلت كيندر.webp"},
    {title:"تورتة شوكلت",price:"475",img:"images/تورات/تورتة شوكلت.webp"},
    {title:"تورتة فادج",price:"300",img:"images/تورات/تورتة فادج.webp"},
    {title:"تورتة فروت شيري",price:"440",img:"images/تورات/تورتة فروت شيري.webp"},
    {title:"تورتة لي برنسس (2)",price:"300",img:"images/تورات/تورتة لي برنسس (2).webp"},
    {title:"تورتة لي برنسس",price:"300",img:"images/تورات/تورتة لي برنسس.webp"},
    {title:"تورتة ملفاي شوكلت",price:"495",img:"images/تورات/تورتة ملفاي شوكلت.webp"},
    {title:"تورتة ملفاي",price:"495",img:"images/تورات/تورتة ملفاي.webp"},
    {title:"تورتة ميني تشيز كيك",price:"300",img:"images/تورات/تورتة ميني تشيز كيك.webp"},
    {title:"تورتة هاف مربع",price:"650",img:"images/تورات/تورتة هاف مربع.webp"},
    {title:"تورتة هاف",price:"465",img:"images/تورات/تورتة هاف.webp"},
]

const gatouh = [
    {title:"جاتوه امريكان",price:"50",img:"images/جاتوهات/جاتوه امريكان_20.webp"},
    {title:"جاتوه امريكان (2)",price:"50",img:"images/جاتوهات/جاتوه امريكان (2)_1.webp"},
    {title:"جاتوه امريكان (3)",price:"50",img:"images/جاتوهات/جاتوه امريكان (3)_2.webp"},
    {title:"جاتوه امريكان (4)",price:"50",img:"images/جاتوهات/جاتوه امريكان (4)_3.webp"},
    {title:"جاتوه امريكان (5)",price:"50",img:"images/جاتوهات/جاتوه امريكان (5)_4.webp"},
    {title:"جاتوه امريكان (6)",price:"50",img:"images/جاتوهات/جاتوه امريكان (6)_5.webp"},
    {title:"جاتوه امريكان (7)",price:"50",img:"images/جاتوهات/جاتوه امريكان (7)_6.webp"},
    {title:"جاتوه امريكان (8)",price:"50",img:"images/جاتوهات/جاتوه امريكان (8)_7.webp"},
    {title:"جاتوه امريكان (9)",price:"50",img:"images/جاتوهات/جاتوه امريكان (9)_8.webp"},
    {title:"جاتوه امريكان (10)",price:"50",img:"images/جاتوهات/جاتوه امريكان (10)_9.webp"},
    {title:"جاتوه امريكان (11)",price:"50",img:"images/جاتوهات/جاتوه امريكان (11)_10.webp"},
    {title:"جاتوه امريكان (12)",price:"50",img:"images/جاتوهات/جاتوه امريكان (12)_11.webp"},
    {title:"جاتوه امريكان (13)",price:"50",img:"images/جاتوهات/جاتوه امريكان (13)_12.webp"},
    {title:"جاتوه امريكان (14)",price:"50",img:"images/جاتوهات/جاتوه امريكان (14)_13.webp"},
    {title:"جاتوه امريكان (15)",price:"50",img:"images/جاتوهات/جاتوه امريكان (15)_14.webp"},
    {title:"جاتوه امريكان (16)",price:"50",img:"images/جاتوهات/جاتوه امريكان (16)_15.webp"},
    {title:"جاتوه امريكان (17)",price:"50",img:"images/جاتوهات/جاتوه امريكان (17)_16.webp"},
    {title:"جاتوه امريكان (18)",price:"50",img:"images/جاتوهات/جاتوه امريكان (18)_17.webp"},
    {title:"جاتوه امريكان (19)",price:"50",img:"images/جاتوهات/جاتوه امريكان (19)_18.webp"},
    {title:"جاتوه امريكان (20)",price:"50",img:"images/جاتوهات/جاتوه امريكان (20)_19.webp"},
    {title:"جاتوه ايطالي",price:"35",img:"images/جاتوهات/جاتوه ايطالي_31.webp"},
    {title:"جاتوه ايطالي (2)",price:"35",img:"images/جاتوهات/جاتوه ايطالي (2)_21.webp"},
    {title:"جاتوه ايطالي (3)",price:"35",img:"images/جاتوهات/جاتوه ايطالي (3)_22.webp"},
    {title:"جاتوه ايطالي (4)",price:"35",img:"images/جاتوهات/جاتوه ايطالي (4)_23.webp"},
    {title:"جاتوه ايطالي (5)",price:"35",img:"images/جاتوهات/جاتوه ايطالي (5)_24.webp"},
    {title:"جاتوه ايطالي (6)",price:"35",img:"images/جاتوهات/جاتوه ايطالي (6)_25.webp"},
    {title:"جاتوه ايطالي (7)",price:"35",img:"images/جاتوهات/جاتوه ايطالي (7)_26.webp"},
    {title:"جاتوه ايطالي (8)",price:"35",img:"images/جاتوهات/جاتوه ايطالي (8)_27.webp"},
    {title:"جاتوه ايطالي (9)",price:"35",img:"images/جاتوهات/جاتوه ايطالي (9)_28.webp"},
    {title:"جاتوه ايطالي (10)",price:"35",img:"images/جاتوهات/جاتوه ايطالي (10)_29.webp"},
    {title:"جاتوه ايطالي (11)",price:"35",img:"images/جاتوهات/جاتوه ايطالي (11)_30.webp"},
    {title:"جاتوه فرنساوي",price:"50",img:"images/جاتوهات/جاتوه فرنساوي_45.webp"},
    {title:"جاتوه فرنساوي (2)",price:"50",img:"images/جاتوهات/جاتوه فرنساوي (2)_32.webp"},
    {title:"جاتوه فرنساوي (3)",price:"50",img:"images/جاتوهات/جاتوه فرنساوي (3)_33.webp"},
    {title:"جاتوه فرنساوي (4)",price:"50",img:"images/جاتوهات/جاتوه فرنساوي (4)_34.webp"},
    {title:"جاتوه فرنساوي (5)",price:"50",img:"images/جاتوهات/جاتوه فرنساوي (5)_35.webp"},
    {title:"جاتوه فرنساوي (6)",price:"50",img:"images/جاتوهات/جاتوه فرنساوي (6)_36.webp"},
    {title:"جاتوه فرنساوي (7)",price:"50",img:"images/جاتوهات/جاتوه فرنساوي (7)_37.webp"},
    {title:"جاتوه فرنساوي (8)",price:"50",img:"images/جاتوهات/جاتوه فرنساوي (8)_38.webp"},
    {title:"جاتوه فرنساوي (9)",price:"50",img:"images/جاتوهات/جاتوه فرنساوي (9)_39.webp"},
    {title:"جاتوه فرنساوي (10)",price:"50",img:"images/جاتوهات/جاتوه فرنساوي (10)_40.webp"},
    {title:"جاتوه فرنساوي جالاكسي",price:"65",img:"images/جاتوهات/جاتوه فرنساوي جالاكسي_41.webp"},
    {title:"جاتوه فرنساوي فادج",price:"65",img:"images/جاتوهات/جاتوه فرنساوي فادج_44.webp"},
    {title:"جاتوه فرنساوي روشية",price:"65",img:"images/جاتوهات/جاتوه فرنساوي روشية_43.webp"},
    {title:"جاتوه فرنساوي روشية (2)",price:"65",img:"images/جاتوهات/جاتوه فرنساوي روشية (2)_42.webp"},
]

// فيهاااا تعديل
const soareh_macron = [
    {title:"تريلتشي فيلاميندو",price:"500",img:"images/سواريه وماكرون/تريلتشي فيلاميندو_1.webp"},
    {title:"سواريه صغير 20 ق",price:"195",img:"images/سواريه وماكرون/سواريه صغير 20 ق_2.webp"},
    {title:"سواريه كبير 40 ق",price:"385",img:"images/سواريه وماكرون/سواريه كبير 40 ق_3.webp"},
    {title:"مارينج",price:"55",img:"images/سواريه وماكرون/مارينج_4.webp"},
    {title:"ماكرون 10 ق",price:"110",img:"images/سواريه وماكرون/ماكرون 10 ق_5.webp"},
    {title:"ماكرون 24 قطعة",price:"250",img:"images/سواريه وماكرون/ماكرون 24 قطعة_6.webp"},
    {title:"مشكل سواريه وشرقي",price:"350",img:"images/سواريه وماكرون/مشكل سواريه وشرقي_7.webp"},
]


const dessert_pieces = [
    {title:"بلاك بيس ريد فيلفيت",price:"100",img:"images/قطع ديزرت/بلاك بيس ريد فيلفيت_1.webp"},
    {title:"بلاك بيس شوكلت",price:"100",img:"images/قطع ديزرت/بلاك بيس شوكلت_2.webp"},
    {title:"بلاك بيس فستق",price:"100",img:"images/قطع ديزرت/بلاك بيس فستق_3.webp"},
    {title:"بلاك بيس مانجو",price:"100",img:"images/قطع ديزرت/بلاك بيس مانجو_4.webp"},
    {title:"بودابيست رول ذبادي",price:"60",img:"images/قطع ديزرت/بودابيست رول ذبادي_5.webp"},
    {title:"بودابيست رول شوكلت",price:"60",img:"images/قطع ديزرت/بودابيست رول شوكلت_6.webp"},
    {title:"بودابيست رول فانيليا",price:"60",img:"images/قطع ديزرت/بودابيست رول فانيليا_7.webp"},
    {title:"بودابيست رول فستق",price:"60",img:"images/قطع ديزرت/بودابيست رول فستق_8.webp"},
    {title:"بودابيست رول لوتس",price:"60",img:"images/قطع ديزرت/بودابيست رول لوتس_9.webp"},
    {title:"تارت بروفيترول شوكلت (2)",price:"400",img:"images/قطع ديزرت/تارت بروفيترول شوكلت (2)_10.webp"},
    {title:"تارت بروفيترول لوتس (2)",price:"400",img:"images/قطع ديزرت/تارت بروفيترول لوتس (2)_11.webp"},
    {title:"تشيز بارد",price:"300",img:"images/قطع ديزرت/تشيز بارد_15.webp"},
    {title:"تشيز بارد فراولة",price:"300",img:"images/قطع ديزرت/تشيز بارد فراولة_12.webp"},
    {title:"تشيز بارد لوتس",price:"300",img:"images/قطع ديزرت/تشيز بارد لوتس_13.webp"},
    {title:"تشيز بارد نوتيلا",price:"300",img:"images/قطع ديزرت/تشيز بارد نوتيلا_14.webp"},
    {title:"سانت نوريه بلوبيري",price:"80",img:"images/قطع ديزرت/سانت نوريه بلوبيري_16.webp"},
    {title:"سانت نوريه شوكلت",price:"80",img:"images/قطع ديزرت/سانت نوريه شوكلت_17.webp"},
    {title:"سيباستيان راسبري",price:"300",img:"images/قطع ديزرت/سيباستيان راسبري_18.webp"},
    {title:"سيباستيان لوتس",price:"300",img:"images/قطع ديزرت/سيباستيان لوتس_19.webp"},
    {title:"سيباستيان نوتيلا",price:"300",img:"images/قطع ديزرت/سيباستيان نوتيلا_20.webp"},
    {title:"ق تارت لوتس",price:"70",img:"images/قطع ديزرت/ق تارت لوتس_21.webp"},
    {title:"ق تارت مانجو",price:"70",img:"images/قطع ديزرت/ق تارت مانجو_22.webp"},
    {title:"ق تارت نوتيلا",price:"70",img:"images/قطع ديزرت/ق تارت نوتيلا_23.webp"},
    {title:"قطعة تارت تشيز بلوبيري",price:"70",img:"images/قطع ديزرت/قطعة تارت تشيز بلوبيري_24.webp"},
    {title:"قطعة تارت تشيز فراولة",price:"70",img:"images/قطع ديزرت/قطعة تارت تشيز فراولة_25.webp"},
    {title:"قطعة تارت تشيز لوتس",price:"70",img:"images/قطع ديزرت/قطعة تارت تشيز لوتس_26.webp"},
    {title:"قطعة تيراميسو",price:"70",img:"images/قطع ديزرت/قطعة تيراميسو_27.webp"},
    {title:"قطعة فادج",price:"75",img:"images/قطع ديزرت/قطعة فادج_28.webp"},
    {title:"قطعة فاكهة",price:"60",img:"images/قطع ديزرت/قطعة فاكهة_29.webp"},
    {title:"قطعة نوتيلا",price:"90",img:"images/قطع ديزرت/قطعة نوتيلا_30.webp"},
    {title:"قطعة هاني كيك",price:"70",img:"images/قطع ديزرت/قطعة هاني كيك_31.webp"},
    {title:"كب صخر كيك",price:"150",img:"images/قطع ديزرت/كب صخر كيك_32.webp"},
    {title:"ليزي كيك",price:"95",img:"images/قطع ديزرت/ليزي كيك_33.webp"},
    {title:"مولتن كيك",price:"75",img:"images/قطع ديزرت/مولتن كيك_34.webp"},
]

const capcake = [
    {title:"كب كيك",price:"300",img:"images/كب كيك/كب كيك_7.webp"},
    {title:"كب كيك بلو بيري",price:"40",img:"images/كب كيك/كب كيك بلو بيري_1.webp"},
    {title:"كب كيك ريد فيلفيت",price:"40",img:"images/كب كيك/كب كيك ريد فيلفيت_2.webp"},
    {title:"كب كيك شوكلت",price:"40",img:"images/كب كيك/كب كيك شوكلت_3.webp"},
    {title:"كب كيك كراميل",price:"40",img:"images/كب كيك/كب كيك كراميل_4.webp"},
    {title:"كب كيك لوتس",price:"40",img:"images/كب كيك/كب كيك لوتس_5.webp"},
    {title:"كب كيك نوتيلا",price:"40",img:"images/كب كيك/كب كيك نوتيلا_6.webp"},
]

const capat = [
    {title:"ارز باللبن لوتس",price:"300",img:"images/كبات/ارز باللبن لوتس_1.webp"},
    {title:"ارز باللبن مانجو",price:"300",img:"images/كبات/ارز باللبن مانجو_2.webp"},
    {title:"ارز باللبن مكسرات",price:"300",img:"images/كبات/ارز باللبن مكسرات_3.webp"},
    {title:"ام علي كبير",price:"165",img:"images/كبات/ام علي كبير_4.webp"},
    {title:"ام علي",price:"65",img:"images/كبات/ام علي_5.webp"},
    {title:"باباة فاكهة",price:"60",img:"images/كبات/باباة فاكهة_6.webp"},
    {title:"ميلك كريم",price:"65",img:"images/كبات/ميلك كريم_13.webp"},
    {title:"ميلك كريم اوريو",price:"65",img:"images/كبات/ميلك كريم اوريو_7.webp"},
    {title:"ميلك كريم ذبادي",price:"65",img:"images/كبات/ميلك كريم ذبادي_8.webp"},
    {title:"ميلك كريم ريد فيلفيت",price:"65",img:"images/كبات/ميلك كريم ريد فيلفيت_9.webp"},
    {title:"ميلك كريم شوكلت",price:"65",img:"images/كبات/ميلك كريم شوكلت_10.webp"},
    {title:"ميلك كريم لوتس",price:"65",img:"images/كبات/ميلك كريم لوتس_11.webp"},
    {title:"ميلك كريم مانجو",price:"65",img:"images/كبات/ميلك كريم مانجو_12.webp"},
]

const melfay = [
    {title:"قطعة ملفاي اسبشيال",price:"60",img:"images/ملفاي/قطعة ملفاي اسبشيال_1.webp"},
    {title:"ملفاي سكر",price:"40",img:"images/ملفاي/ملفاي سكر_2.webp"},
    {title:"ملفاي شوكلت",price:"40",img:"images/ملفاي/ملفاي شوكلت_3.webp"},
    {title:"ملفاي لوتس",price:"40",img:"images/ملفاي/ملفاي لوتس_4.webp"},
    {title:"ملفاي مربي",price:"40",img:"images/ملفاي/ملفاي مربي_5.webp"},
    {title:"ملفاي مكسرات",price:"40",img:"images/ملفاي/ملفاي مكسرات_6.webp"},
]

const chocolates = [
    {title:"ايس كريم",img:"images/ايس كريم/جار ايس كريم.webp",second_title:"ice_cream"},
    {title:"مكسرات واسبريد",img:"images/مكسرات واسبريد/مكسرات و اسبريد_7.webp",second_title:"mksrat_spread"},
]

const ice_cream = [
    {title:"بولة ايس كريم بسكوت",price:"25",img:"images/ايس كريم/بولة ايس كريم بسكوت.webp"},
    {title:"جار ايس كريم",price:"50",img:"images/ايس كريم/جار ايس كريم.webp"},
    {title:"تورتة ايس كريم  فورسيزون",price:"495",img:"images/ايس كريم/تورتة ايس كريم 8سيزون.webp"},
    {title:"تورتة ايس كريم 8سيزون",price:"495",img:"images/ايس كريم/تورتة ايس كريم 8سيزون.webp"},
    {title:"تورتة ايس كريم روشية",price:"495",img:"images/ايس كريم/تورتة ايس كريم روشية.webp"},
    {title:"تورتة ايس كريم كراميل",price:"495",img:"images/ايس كريم/تورتة ايس كريم كراميل.webp"},
    {title:"تورتة ايس كريم كيت كات",price:"495",img:"images/ايس كريم/تورتة ايس كريم كيت كات.webp"},
    {title:"تورتة ايس كريم فستق",price:"490",img:"images/ايس كريم/تورتة ايس كريم فستق.webp"},
    {title:"تورتة ايس كريم لوتس",price:"490",img:"images/ايس كريم/تورتة ايس كريم لوتس.webp"},
    {title:"تورتة ايس كريم مانجو",price:"490",img:"images/ايس كريم/تورتة ايس كريم مانجو.webp"},
]

const mksrat_spread = [
    {title:"اسبريد بندق",price:"150",img:"images/مكسرات واسبريد/اسبريد بندق_1.webp"},
    {title:"اسبريد لوز",price:"110",img:"images/مكسرات واسبريد/اسبريد لوز_2.webp"},
    {title:"جيرانيولا",price:"150",img:"images/مكسرات واسبريد/جيرانيولا_3.webp"},
    {title:"مكسرات بيكان",price:"250",img:"images/مكسرات واسبريد/مكسرات بيكان_4.webp"},
    {title:"مكسرات فستق",price:"220",img:"images/مكسرات واسبريد/مكسرات فستق_5.webp"},
    {title:"مكسرات مملحة بيكان",price:"300",img:"images/مكسرات واسبريد/مكسرات مملحة بيكان_6.webp"},
]

const bakery = [
    {title:"دوناتس وبومبلوني",img:"images/دوناتس وبومبولوني/علبة ميني بومبولوني_4.webp",second_title:"donates_bombloni"},
    {title:"مخبوزات ومعجنات",img:"images/مخبوزات ومعجنات/ميني ساندوتش_20.webp",second_title:"bakery_pastries"},
    {title:"نواعم",img:"images/نواعم/مشكل بيتي فور وسابليه_34.webp",second_title:"nawaem"},
]

const donates_bombloni = [
    {title:"دنش ضفيرة",price:"70",img:"images/دوناتس وبومبولوني/دنش ضفيرة_1.webp"},
    {title:"دنش لوز",price:"70",img:"images/دوناتس وبومبولوني/دنش لوز_2.webp"},
    {title:"سينابون",price:"60",img:"images/دوناتس وبومبولوني/سينابون_3.webp"},
    {title:"علبة ميني بومبولوني",price:"245",img:"images/دوناتس وبومبولوني/علبة ميني بومبولوني_4.webp"},
    {title:"علبة ميني دوناتس",price:"195",img:"images/دوناتس وبومبولوني/علبة ميني دوناتس_5.webp"},
    {title:"قطعة بومبولوني كريمة",price:"60",img:"images/دوناتس وبومبولوني/قطعة بومبولوني كريمة_7.webp"},
    {title:"قطعة بومبولوني كريمة (2)",price:"60",img:"images/دوناتس وبومبولوني/قطعة بومبولوني كريمة (2)_6.webp"},
    {title:"قطعة بومبولوني نوتيلا",price:"60",img:"images/دوناتس وبومبولوني/قطعة بومبولوني نوتيلا_8.webp"},
    {title:"قطعة دوناتس",price:"60",img:"images/دوناتس وبومبولوني/قطعة دوناتس_11.webp"},
    {title:"قطعة دوناتس (2)",price:"60",img:"images/دوناتس وبومبولوني/قطعة دوناتس (2)_9.webp"},
    {title:"قطعة دوناتس (3)",price:"60",img:"images/دوناتس وبومبولوني/قطعة دوناتس (3)_10.webp"},
    {title:"ميكس سينابون",price:"70",img:"images/دوناتس وبومبولوني/ميكس سينابون_12.webp"},
]

const bakery_pastries = [
    {title:"باتون ساليه 300 جم",price:"55",img:"images/مخبوزات ومعجنات/باتون ساليه 300 جم_1.webp"},
    {title:"باتيه بسطرمة",price:"60",img:"images/مخبوزات ومعجنات/باتيه بسطرمة_2.webp"},
    {title:"باتيه جبنة",price:"55",img:"images/مخبوزات ومعجنات/باتيه جبنة_3.webp"},
    {title:"بريك فاست",price:"300",img:"images/مخبوزات ومعجنات/بريك فاست_4.webp"},
    {title:"بيتزا سلايس",price:"60",img:"images/مخبوزات ومعجنات/بيتزا سلايس_5.webp"},
    {title:"تراسينا 300 جم",price:"55",img:"images/مخبوزات ومعجنات/تراسينا 300 جم_6.webp"},
    {title:"ساليزون صغير",price:"190",img:"images/مخبوزات ومعجنات/ساليزون صغير_7.webp"},
    {title:"ساليزون كبير",price:"375",img:"images/مخبوزات ومعجنات/ساليزون كبير_8.webp"},
    {title:"فطير حلو 1",price:"110",img:"images/مخبوزات ومعجنات/فطير حلو 1_9.webp"},
    {title:"فطير رومي",price:"220",img:"images/مخبوزات ومعجنات/فطير رومي_10.webp"},
    {title:"فطير سادة",price:"155",img:"images/مخبوزات ومعجنات/فطير سادة_11.webp"},
    {title:"فطير",price:"300",img:"images/مخبوزات ومعجنات/فطير_13.webp"},
    {title:"فطير لوتس",price:"220",img:"images/مخبوزات ومعجنات/فطير لوتس_12.webp"},
    {title:"قراقيش 300 جم",price:"65",img:"images/مخبوزات ومعجنات/قراقيش 300 جم_14.webp"},
    {title:"قرص سادة 300 جم",price:"55",img:"images/مخبوزات ومعجنات/قرص سادة 300 جم_15.webp"},
    {title:"قرص عجوة 300 جم",price:"55",img:"images/مخبوزات ومعجنات/قرص عجوة 300 جم_16.webp"},
    {title:"كرواسون سادة 1",price:"50",img:"images/مخبوزات ومعجنات/كرواسون سادة 1_17.webp"},
    {title:"مشبك",price:"300",img:"images/مخبوزات ومعجنات/مشبك_18.webp"},
    {title:"مناقيش",price:"255",img:"images/مخبوزات ومعجنات/مناقيش_19.webp"},
    {title:"ميني ساندوتش",price:"190",img:"images/مخبوزات ومعجنات/ميني ساندوتش_20.webp"},
]

const nawaem = [
    {title:"بالميه 300 جم",price:"75",img:"images/نواعم/بالميه 300 جم_1.webp"},
    {title:"بسكويت (3)",price:"200",img:"images/نواعم/بسكويت (3)_2.webp"},
    {title:"بسكويت وايت شوكلت وفستق (2)",price:"250",img:"images/نواعم/بسكويت وايت شوكلت وفستق (2)_3.webp"},
    {title:"بيتي فور ابيض",price:"275",img:"images/نواعم/بيتي فور ابيض_6.webp"},
    {title:"بيتي فور ابيض (2)",price:"275",img:"images/نواعم/بيتي فور ابيض (2)_4.webp"},
    {title:"بيتي فور ابيض (3)",price:"275",img:"images/نواعم/بيتي فور ابيض (3)_5.webp"},
    {title:"بيتي فور شيكولاتة",price:"275",img:"images/نواعم/بيتي فور شيكولاتة_9.webp"},
    {title:"بيتي فور شيكولاتة (2)",price:"275",img:"images/نواعم/بيتي فور شيكولاتة (2)_7.webp"},
    {title:"بيتي فور شيكولاتة (3)",price:"275",img:"images/نواعم/بيتي فور شيكولاتة (3)_8.webp"},
    {title:"بيتي فور صوصات",price:"275",img:"images/نواعم/بيتي فور صوصات_10.webp"},
    {title:"سابليه (2)",price:"330",img:"images/نواعم/سابليه (2)_11.webp"},
    {title:"سابليه (3)",price:"330",img:"images/نواعم/سابليه (3)_12.webp"},
    {title:"سابليه (4)",price:"330",img:"images/نواعم/سابليه (4)_13.webp"},
    {title:"سابليه (5)",price:"330",img:"images/نواعم/سابليه (5)_14.webp"},
    {title:"سابليه (6)",price:"330",img:"images/نواعم/سابليه (6)_15.webp"},
    {title:"سابليه (7)",price:"330",img:"images/نواعم/سابليه (7)_16.webp"},
    {title:"سابليه (8)",price:"330",img:"images/نواعم/سابليه (8)_17.webp"},
    {title:"سابليه (9)",price:"330",img:"images/نواعم/سابليه (9)_18.webp"},
    {title:"سابليه",price:"330",img:"images/نواعم/سابليه_19.webp"},
    {title:"غريبة",price:"300",img:"images/نواعم/غريبة_20.webp"},
    {title:"قطعة سابليه (2)",price:"330",img:"images/نواعم/قطعة سابليه (2)_21.webp"},
    {title:"قطعة سابليه",price:"330",img:"images/نواعم/قطعة سابليه_22.webp"},
    {title:"قطعة كوكيز",price:"",img:"images/نواعم/قطعة كوكيز_24.webp"},
    {title:"قطعة كوكيز (2)",price:"",img:"images/نواعم/قطعة كوكيز (2)_23.webp"},
    {title:"كعك سادة",price:"230",img:"images/نواعم/كعك سادة_25.webp"},
    {title:"كعك عين جمل",price:"300",img:"images/نواعم/كعك عين جمل_27.webp"},
    {title:"كعك عجمية عين جمل",price:"280",img:"images/نواعم/كعك عجمية عين جمل_26.webp"},
    {title:"كعك ملبن",price:"200",img:"images/نواعم/كعك ملبن_29.webp"},
    {title:"كعك ملبن مكسرات",price:"275",img:"images/نواعم/كعك ملبن مكسرات_28.webp"},
    {title:"كوكيز 300 جم",price:"85",img:"images/نواعم/كوكيز 300 جم_30.webp"},
    {title:"كوكيز صوصات",price:"275",img:"images/نواعم/كوكيز صوصات_31.webp"},
    {title:"محوجة 600 جم",price:"130",img:"images/نواعم/محوجة 600 جم_32.webp"},
    {title:"مشكل بيتي فور وسابليه",price:"300",img:"images/نواعم/مشكل بيتي فور وسابليه_34.webp"},
    {title:"مشكل بيتي فور وسابليه (2)",price:"300",img:"images/نواعم/مشكل بيتي فور وسابليه (2)_33.webp"},
    {title:"ميني تارت",price:"330",img:"images/نواعم/ميني تارت_40.webp"},
    {title:"ميني تارت (2)",price:"330",img:"images/نواعم/ميني تارت (2)_35.webp"},
    {title:"ميني تارت (3)",price:"330",img:"images/نواعم/ميني تارت (3)_36.webp"},
    {title:"ميني تارت (7)",price:"330",img:"images/نواعم/ميني تارت (7)_37.webp"},
    {title:"ميني تارت (9)",price:"330",img:"images/نواعم/ميني تارت (9)_38.webp"},
    {title:"ميني تارت (11)",price:"330",img:"images/نواعم/ميني تارت (11)_39.webp"},
]


// sub categories arrays
var categories = document.querySelector('.categories');
var category = document.querySelectorAll('.category');
const back_button = document.querySelector('.back-button'); 

// category.addEventListener('click', function () {
//     back_button.classList.remove('d-none');
// });

category.forEach(function (item) {
    item.addEventListener('click', function () {
        back_button.classList.remove('d-none');
    });
});

function DisplayCategory (category) {
    categories.innerHTML = '';
    var food = '';
    category.forEach(function (item) {
        food += `
            <div class="card card-category rounded-top-4 col-sm-6 col-lg-3 border-0 bg-transparent ${item.second_title}">
                <div class ="card-img-top ">
                    <img src="${item.img}" loading="lazy" class="card-img shadow-sm rounded-top-4 rounded-bottom-0 w-100">
                </div>
                <div class="card-body rounded-bottom-4 shadow-sm bg-white d-flex text-center justify-content-center flex-column border border-2 border-top-0">
                    <h3 class="card-text fs-5">${item.title}</h3>
                </div>
            </div>
        `;
        categories.innerHTML = food;
});
}

function  Displayitems (category) {
    categories.innerHTML = '';
    var food = '';
    category.forEach(function (item) {
        food += `
            <div class="card card-item col-sm-6 col-lg-3 border-0 bg-transparent">
                <div class ="card-img-top">
                    <img src="${item.img}" class="card-img rounded-top-4 rounded-bottom-0 ">
                </div>
                <div class="card-body rounded-bottom-4  bg-white d-flex text-center justify-content-center flex-column border border-2 border-top-0">
                    <h3 class="card-text fs-5 ">${item.title}</h3>
                    <p class="card-text fs-6 fw-bold"><small>${item.price} EGP</small></p>
                </div>
            </div>
        `;
        categories.innerHTML = food;
    });
}

categoryEastern.addEventListener('click', function () {
    Displayitems(eastern);
});

categoryWestern.addEventListener('click', function () {
    DisplayCategory(western);

    const eclearCard = document.querySelector('.eclear');
    eclearCard.addEventListener('click', function () {
        Displayitems(eclear);
    });
    const english_cake_card = document.querySelector('.english_cake');
    english_cake_card.addEventListener('click', function () {
        Displayitems(english_cake);
    });
    const trelteshe_bolat_card = document.querySelector('.trelteshe_bolat');
    trelteshe_bolat_card.addEventListener('click', function () {
        Displayitems(trelteshe_bolat);
    });
    const torat_card = document.querySelector('.torat');
    torat_card.addEventListener('click', function () {
        Displayitems(torat);
    });
    const gatouh_card  = document.querySelector('.gatouh');
    gatouh_card.addEventListener('click', function () {
        Displayitems(gatouh);
    });
    const soareh_macron_card = document.querySelector('.soareh_macron');
    soareh_macron_card.addEventListener('click', function () {
        Displayitems(soareh_macron);
    });
    const dessert_pieces_card = document.querySelector('.dessert_pieces');
    dessert_pieces_card.addEventListener('click', function () {
        Displayitems(dessert_pieces);
    });
    const capcake_card = document.querySelector('.capcake');
    capcake_card.addEventListener('click', function () {
        Displayitems(capcake);
    });
    const capat_card = document.querySelector('.capat');
    capat_card.addEventListener('click', function () {
        Displayitems(capat);
    });
    const melfay_card = document.querySelector('.melfay');
    melfay_card.addEventListener('click', function () {
        Displayitems(melfay);
    });
});

categoryBakery.addEventListener('click', function () {
    DisplayCategory(bakery);
    const donates_bombloni_card = document.querySelector('.donates_bombloni');
    donates_bombloni_card.addEventListener('click', function () {
        Displayitems(donates_bombloni);
    });
    const bakery_pastries_card = document.querySelector('.bakery_pastries');
    bakery_pastries_card.addEventListener('click', function () {
        Displayitems(bakery_pastries);
    });
    const nawaem_card = document.querySelector('.nawaem');
    nawaem_card.addEventListener('click', function () {
        Displayitems(nawaem);
    });
});

categoryChocolate.addEventListener('click', function () {
    DisplayCategory(chocolates);
    const ice_cream_card = document.querySelector('.ice_cream');
    ice_cream_card.addEventListener('click', function () {
        Displayitems(ice_cream);
    });
    const mksrat_spread_card = document.querySelector('.mksrat_spread');
    mksrat_spread_card.addEventListener('click', function () {
        Displayitems(mksrat_spread);
    });
});

