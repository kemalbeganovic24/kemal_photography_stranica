import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    bs: {
        translation: {
            // Navigacija
            "hero_capturing": "Bilježimo",
            "hero_moments": "prelijepe trenutke",
            "hero_btn_portfolio": "Pogledaj Portfolio / Galeriju",
            "hero_btn_contact": "Kontaktiraj me!",

            "events_heading": "Posljednja izdanja",
            "events_subheading": "Pogledajte najnovije fotografske projekte!",
            "events_view_all": "Pogledaj sve",

            "portfolio_title": "Portfolio / Galerija slika",
            "portfolio_subtitle": "Pogledajte sva izdanja koja sam izdvojio za Vas!",

            "event_not_found": "Događaj nije pronađen",
            "back_to_portfolio": "Nazad na portfolio",

            "nav_home": "Početna",
            "nav_portfolio": "Portfolio",
            "nav_services": "Usluge",
            "nav_about": "O meni",
            "nav_contact": "Kontakt",

            "footer_desc": "Profesionalno bilježenje vaših najvažnijih životnih trenutaka kroz objektiv kreativnosti i strasti.",
            "footer_links_title": "Brzi linkovi",
            "footer_contact_title": "Kontakt informacije",
            "footer_rights": "Sva prava zadržana.",

            "services_title": "Naše Usluge",
            "services_subtitle": "Nudimo širok spektar profesionalnih fotografskih usluga prilagođenih vašim željama.",
            "service_weddings_title": "Vjenčanja & Zaruke",
            "service_weddings_desc": "Bilježenje emocija, osmijeha i neprocjenjivih trenutaka vašeg posebnog dana kroz spontane i umjetničke fotografije.",
            "service_portraits_title": "Portreti & Sesije",
            "service_portraits_desc": "Individualne, porodične ili poslovne portretne sesije na lokaciji po vašem izboru ili u studiju.",
            "service_events_title": "Događaji & Manifestacije",
            "service_events_desc": "Profesionalno pokrivanje kulturnih, sportskih, školskih (mature) i korporativnih događaja.",

            "about_badge": "Upoznajte fotografa",
            "about_title": "Kreativnost iza objektiva",
            "about_text_1": "Zovem se [Tvoje Ime] i fotografija je moja strast već godinama. Specijalizovan sam za bilježenje prirodnih, spontanih trenutaka koji prenose iskrene emocije.",
            "about_text_2": "Bilo da se radi o vašem vjenčanju, maturi, portretu ili važnom događaju, moj cilj je kreirati vizuelne priče koje ćete rado gledati i nakon mnogo godina.",

            "contact_title": "Kontaktirajte Nas",
            "contact_info_title": "Informacije za kontakt",
            "phone": "Telefon",
            "email": "E-mail",
            "location": "Lokacija",
            "form_name": "Ime i prezime",
            "form_email": "E-mail adresa",
            "form_message": "Poruka",
            "form_submit": "Pošalji poruku",
            "message_sent": "Poruka je uspješno poslata!"
        }
    },
    en: {
        translation: {
            // Navigation
            "hero_capturing": "Capturing",
            "hero_moments": "beautiful moments",
            "hero_btn_portfolio": "View Portfolio / Gallery",
            "hero_btn_contact": "Contact me!",

            "events_heading": "Latest Releases",
            "events_subheading": "Check out my latest photography projects!",
            "events_view_all": "View All",

            "portfolio_title": "Portfolio / Image Gallery",
            "portfolio_subtitle": "Take a look at all the sessions I have prepared for you!",

            "event_not_found": "Event not found",
            "back_to_portfolio": "Back to portfolio",

            "nav_home": "Home",
            "nav_portfolio": "Portfolio",
            "nav_services": "Services",
            "nav_about": "About Me",
            "nav_contact": "Contact",

            "footer_desc": "Professionally capturing your most important life moments through the lens of creativity and passion.",
            "footer_links_title": "Quick Links",
            "footer_contact_title": "Contact Info",
            "footer_rights": "All rights reserved.",

            "services_title": "Our Services",
            "services_subtitle": "We offer a wide range of professional photography services tailored to your needs.",
            "service_weddings_title": "Weddings & Engagements",
            "service_weddings_desc": "Capturing emotions, smiles, and priceless moments of your special day through candid and artistic photography.",
            "service_portraits_title": "Portraits & Sessions",
            "service_portraits_desc": "Individual, family, or business portrait sessions at a location of your choice or in a studio.",
            "service_events_title": "Events & Ceremonies",
            "service_events_desc": "Professional coverage of cultural, sports, school (proms), and corporate events.",

            "about_badge": "Meet the Photographer",
            "about_title": "Creativity Behind the Lens",
            "about_text_1": "My name is [Your Name] and photography has been my passion for years. I specialize in capturing natural, candid moments that convey genuine emotions.",
            "about_text_2": "Whether it is your wedding, prom, portrait session, or an important event, my goal is to create visual stories that you will cherish for years to come.",

            "contact_title": "Contact Us",
            "contact_info_title": "Contact Information",
            "phone": "Phone",
            "email": "E-mail",
            "location": "Location",
            "form_name": "Full Name",
            "form_email": "Email Address",
            "form_message": "Message",
            "form_submit": "Send Message",
            "message_sent": "Message sent successfully!"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "bs", // Početni jezik
        fallbackLng: "bs",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;