let langdata = {
  languages: {
    en: {
        "home_nav": "Home",
        "about_nav": "About",
        "services_nav": "Services",
        "administrative_nav":"Administrative Lawwww",
        "family_nav":"Family Law",
        "inheritance_nav":"Inheritance Law",
        "criminal_nav":"Criminal Law",
        "foreigners_nav":"Foreigners Law",
        "commercial_nav":"Commercial and Corporate Law",
        "Citizenship_nav":"Citizenship Services for Foreigners",
        "nationality_nav":"Turkish Nationality",
        "contact_nav":"Contact Us",
        "services_desc":"We have long experience in our field, so we can provide you with excellent services.",
        "contact_us":"contact Us",
        "contactus_desc":"We are here to answer your questions and comments",
        "name":"Name",
        "email":"Email",
        "phone":"Phone",
        "message":"message",
        "send":"send"

    },
    ar: {
        "home_nav": "الرئسية",
        "about_nav": "عنا",
        'services_nav': 'خدماتنا',
        "administrative_nav":"قانون إداري",
        "family_nav":"قانون الأسرة",
        "inheritance_nav":"قانون الميراث",
        "criminal_nav":"القانون الجنائي",
        "foreigners_nav":"قانون الأجانب",
        "commercial_nav":"قانون التجارة و الشركات",
        "Citizenship_nav":"خدمات المواطنة الأجانب",
        "nationality_nav":"الجنسية التركية",
        "contact_nav":"تواصل معنا",
        "services_desc":"نمتلك خبرة طويلة في مجالنا، ولذلك نستطيع تقديم خدمات متميّزة لك.",
        "contact_us":"تواصل معنا",
        "contactus_desc":"نحن هنا لللإجابة عن استفساراتك و تعليقاتك",
        "name":"الاسم",
        "email":"ايميل",
        "phone":"الهاتف",
        "message":"الرسالة",
        "send":"إرسال"
    },
    tr: {
        "home_nav": "Home",
        "about_nav": "About",
        "services_nav": "Services",
        "administrative_nav":"Administrative Law",
        "family_nav":"Family Law",
        "inheritance_nav":"Inheritance Law",
        "criminal_nav":"Criminal Law",
        "foreigners_nav":"Foreigners Law",
        "commercial_nav":"Commercial and Corporate Law",
        "Citizenship_nav":"Citizenship Services for Foreigners",
        "nationality_nav":"Turkish Nationality",
        "contact_nav":"Contact Us",
        "services_desc":"We have long experience in our field, so we can provide you with excellent services.",
        "contact_us":"contact Us",
        "contactus_desc":"We are here to answer your questions and comments",
        "name":"Name",
        "email":"Email",
        "phone":"Phone",
        "message":"message",
        "send":"send"
    },
  },
};

//check language
let lang = "en";
if (localStorage.hasOwnProperty("lang")) {
  lang = localStorage.getItem("lang");
}
if(lang == 'ar'){
    var stylesheet = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "css/rtl.css"
    });
    stylesheet.appendTo("head");
}
$(".multi-lang").each(function () {
  key = $(this).data('key');
  if (key) {
    $(this).html(langdata.languages[lang][key]);
}
});
$(".lang-switcher").on("click", function (e) {
  e.preventDefault();
  lang = $(this).data("lang");
  localStorage.setItem("lang", lang);
  location.reload();
});
