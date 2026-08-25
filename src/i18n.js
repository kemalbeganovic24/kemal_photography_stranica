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
            "about_text_1": "Zovem se Kemal i fotografija je moja strast već godinama. Specijalizovan sam za bilježenje prirodnih, spontanih trenutaka koji prenose iskrene emocije.",
            "about_text_2": "Bilo da se radi o vašem vjenčanju, maturi, portretu ili važnom događaju, moj cilj je kreirati vizuelne priče koje ćete rado gledati i nakon mnogo godina.",

            "contact_title": "Kontaktirajte Nas",
            "contact_subtitle": "Imate pitanja ili želite rezervisati termin? Javite nam se!",
            "contact_info_title": "Informacije za kontakt",
            "phone": "Telefon",
            "email": "E-mail",
            "location": "Lokacija",
            "form_name": "Ime i prezime",
            "form_email": "E-mail adresa",
            "form_message": "Poruka",
            "form_submit": "Pošalji poruku",
            "message_sent": "Poruka je uspješno poslata!",

            "about_page_title": "O meni",
            "about_page_hero_text": "Zovem se Kemal i bavim se fotografijom sa ciljem da uhvatim trenutke koje se pamte. Bavim se portretima, događajima, sportom i kreativnom fotografijom, ali jednako volim i mir prirode gdje mogu fotografisati pejzaže. Editovanje u Lightroomu mi je posebno zadovoljstvo jer to mi je vrijeme za smirenje, uživanje i kreativnost, gdje svakoj fotografiji dam njen jedinstveni izgled i atmosferu.",
            "about_story_title": "Moja priča",
            "about_story_text": "Kemal Photography je nastao u oktobru 2022. godine, najprije kao jednostavna zabava i način da zabilježim trenutke koji mi se sviđaju. Malo po malo, kroz fotografiju, razvijao sam svoj stil i gledanje svijeta, istražujući prirodu, gradove, putovanja i ljude. Danas, ono što je počelo kao igra, postalo je moja strast i način da dijelim svoj pogled na svijet kroz objektiv.",
            "about_stat_clients": "Zadovoljnih korisnika",
            "about_stat_photos": "Fotografija",
            "about_skills_title": "Moje vještine",
            "skills": {
                "creativity": "Kreativnost",
                "persistence": "Upornost",
                "technical_skills": "Tehnička vještina",
                "patience": "Strpljenje"
            },
            "services_hero_title": "Usluge",
            "equipment_title": "Fotografska oprema",
            "equipment_subtitle": "Koristimo vrhunsku Canon optiku i profesionalna tijela kako bismo osigurali da svaki piksel na vašim fotografijama bude savršen.",
            "equipment_cat": {
                "cameras": "Kamere",
                "lenses": "Canon EF i EF-S objektivi",
                "accessories": "Osvetljenje i oprema"
            },
            "services_list": {
                "weddings": {
                    "title": "Vjenčanja",
                    "description": "",
                    "f1": "Cijelodnevno slikanje",
                    "f2": "Općinsko/Šerijatsko vjenčanje",
                    "f3": "Editovanje (Lightroom)",
                    "price": "Od 400 KM"
                },
                "portraits": {
                    "title": "Portretske sesije",
                    "description": "Portretske sesije za individualne osobe, grupe, porodice, parove i slično.",
                    "f1": "1-4 sata sesije",
                    "price": "Na upit"
                },
                "events": {
                    "title": "Događaji / eventi",
                    "description": "Profesionalno pokrivanje kulturnih, društvenih i privatnih događaja.",
                    "f1": "",
                    "price": "Na upit"
                },
                "sports": {
                    "title": "Sport",
                    "description": "",
                    "f1": "Fudbal/Nogomet, Futsal, Košarka, Stoni tenis, tenis",
                    "price": "Na upit"
                }
            },
            "contact_hero_title": "Kontaktiraj me!",
            "contact_hero_subtitle": "Spreman/a za zabilježiti vaše posebne trenutke? Hajde da razgovaramo o vašim željama i stvorimo nešto posebno zajedno!",
            "contact_urgent_title": "Hitno javljanje",
            "contact_urgent_desc": "Inače odgovorim u roku 24 sata, u slučaju hitne situacija nazovite na broj. Za kontakt koristite aplikaciju Whatsapp ili Viber!",
            "form_service_label": "Odaberite uslugu",
            "form_select_service": "-- Izaberite uslugu --",
            "message_failed": "Slanje poruke nije uspjelo. Pokušajte ponovo.",
            "contact_errors": {
                "name": "Ime mora imati najmanje 2 znaka",
                "email": "Unesite važeću e-mail adresu",
                "phone": "Unesite važeći broj telefona (najmanje 10 cifara)",
                "service": "Molimo odaberite uslugu",
                "message": "Poruka mora imati najmanje 10 znakova"
            },
            //title: t('events_data. .title'),
            //location: t('events_data.ena_session.location')
            "events_data": {
                "18smotra": {
                    "title": "18. Međunarodna smotra folklora Vitez",
                },
                "farmalavandi":{
                    "title": "Farma Lavandi",
                },
                "ena_sesija" :{
                    "title": "Ena sesija slikanja",
                },
                "smotraturbe2026":{
                    "title": "Smotra folklora Turbe 2026",
                },
                "nyhavnkopenhagen2026":{
                    "title": "Nyhavn Kopenhagen",
                    "location":"Kopenhagen, Dasnka"
                },
                "gradkopenhagen2026":{
                    "title": "Grad Kopenhagen",
                    "location":"Kopenhagen, Dasnka"
                },
                "centargradakopenhagena2026":{
                    "title": "Centar grada Kopenhagena",
                    "location":"Kopenhagen, Dasnka"
                },
                "tivoliyggardens2026":{
                    "title": "Tivoli Omladinska garda",
                    "location":"Kopenhagen, Dasnka"
                },
                "tivoligarden2026":{
                    "title": "Tivoli Gardens",
                    "location":"Kopenhagen, Dasnka"
                },
                "baltaslikanje26":{
                    "title": "Ednan Baltić - sesija slikanja"
                },
                "tradicionalnibajramskosijelo_nma2026":{
                    "title": "Tradicionalno Bajramsko sijelo 'Nek mirišu avlije'"
                },
                "prom-msst2026":{
                    "title": "Matura 2026. Mješovita srednje škole Travnik"
                },
                "ahmedvarupamatura2026":{
                    "title": "Ahmed Varupa Matura 2026"
                },
                "amilapezermatura2026":{
                    "title": "Amila Pezer Matura 2026"
                },
                "amiladajicmatura2026":{
                    "title": "Amila Dajić Matura 2026"
                },
                "edinsuljevicmatura2026":{
                    "title": "Edin Suljević Matura 2026"
                },
                "ednatulummatura2026":{
                    "title": "Edna Talam Matura 2026"
                },
                "prom-mstsT2026":{
                    "title": "Matura 2026. Mješovita srednje tehničke škole Travnik"
                },
                "amarhodzicmatura2026":{
                    "title": "Amar Hodžić Matura 2026"
                },
                "danotvorenihvrataptf2026":{
                    "title": "Dan otvorenih vrata Univerziteta u Zenici 2026."
                },
            }
        },

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
            "about_text_1": "My name is Kemal and photography has been my passion for years. I specialize in capturing natural, candid moments that convey genuine emotions.",
            "about_text_2": "Whether it is your wedding, prom, portrait session, or an important event, my goal is to create visual stories that you will cherish for years to come.",

            "contact_title": "Contact Us",
            "contact_subtitle": "Have questions or want to book a session? Reach out to us!",
            "contact_info_title": "Contact Information",
            "phone": "Phone",
            "email": "E-mail",
            "location": "Location",
            "form_name": "Full Name",
            "form_email": "Email Address",
            "form_message": "Message",
            "form_submit": "Send Message",
            "message_sent": "Message sent successfully!",

            "about_page_title": "About Me",
            "about_page_hero_text": "My name is Kemal and I do photography with the goal of capturing memorable moments. I specialize in portraits, events, sports, and creative photography, but I also enjoy the peace of nature where I can capture landscapes. Editing in Lightroom is a special pleasure for me as it gives me time to relax, enjoy, and unleash creativity, giving each photo its unique look and atmosphere.",
            "about_story_title": "My Story",
            "about_story_text": "Kemal Photography was founded in October 2022, initially as simple fun and a way to capture moments I loved. Step by step, through photography, I developed my style and perspective on the world, exploring nature, cities, travel, and people. Today, what started as a passion project has become my way of sharing my view of the world through the lens.",
            "about_stat_clients": "Satisfied Clients",
            "about_stat_photos": "Photos Taken",
            "about_skills_title": "My Skills",
            "skills": {
                "creativity": "Creativity",
                "persistence": "Persistence",
                "technical_skills": "Technical Skills",
                "patience": "Patience"
            },
            "services_hero_title": "Services",
            "equipment_title": "Photography Equipment",
            "equipment_subtitle": "We use top-tier Canon optics and professional bodies to ensure every pixel in your photos is perfect.",
            "equipment_cat": {
                "cameras": "Cameras",
                "lenses": "Canon EF & EF-S Lenses",
                "accessories": "Lighting & Gear"
            },
            "services_list": {
                "weddings": {
                    "title": "Weddings",
                    "description": "",
                    "f1": "Full-day coverage",
                    "f2": "Civil / Religious ceremonies",
                    "f3": "Professional Lightroom editing",
                    "price": "Starting at 400 KM"
                },
                "portraits": {
                    "title": "Portrait Sessions",
                    "description": "Portrait sessions for individuals, groups, families, couples, and more.",
                    "f1": "1-4 hours session",
                    "price": "On request"
                },
                "events": {
                    "title": "Events",
                    "description": "Professional coverage of cultural, social, and private events.",
                    "f1": "",
                    "price": "On request"
                },
                "sports": {
                    "title": "Sports",
                    "description": "",
                    "f1": "Football/Soccer, Futsal, Basketball, Table Tennis, Tennis",
                    "price": "On request"
                }
            },
            "contact_hero_title": "Contact Me!",
            "contact_hero_subtitle": "Ready to capture your special moments? Let's talk about your wishes and create something special together!",
            "contact_urgent_title": "Urgent Inquiry",
            "contact_urgent_desc": "I usually reply within 24 hours. In case of an emergency, feel free to call. For quick messages, use WhatsApp or Viber!",
            "form_service_label": "Select a Service",
            "form_select_service": "-- Choose a service --",
            "message_failed": "Failed to send message. Please try again.",
            "contact_errors": {
                "name": "Name must be at least 2 characters",
                "email": "Please enter a valid email address",
                "phone": "Please enter a valid phone number (at least 10 digits)",
                "service": "Please select a service",
                "message": "Message must be at least 10 characters"
            },
            "events_data": {
                "18smotra": {
                    "title": "18th International Folklore Festival in Vitez",
                },
                "farmalavandi":{
                    "title": "lavander Farm",
                },
                "ena_sesija" :{
                    "title": "Ena photo session",
                },
                "smotraturbe2026":{
                    "title": "Folklore festival Turbe 2026",
                },
                "nyhavnkopenhagen2026":{
                    "title": "Nyhavn Copenhagen",
                    "location":"Copenhagen, Denmark"
                },
                "gradkopenhagen2026":{
                    "title": "City of Copenhagen",
                    "location":"Copenhagen, Denmark"
                },
                "centargradakopenhagena2026":{
                    "title": "Copenhagen city center",
                    "location":"Copenhagen, Denmark"
                },
                "tivoliyggardens2026":{
                    "title": "Tivoli Youth Guard",
                    "location":"Copenhagen, Denmark"
                },//tivoligarden2026
                "tivoligarden2026":{
                    "title": "Tivoli Gardens",
                    "location":"Copenhagen, Denmark"
                },
                "baltaslikanje26":{
                    "title": "Ednan Baltić photo session"
                },
                "tradicionalnibajramskosijelo_nma2026":{
                    "title": "Traditional Eid Gathering 'Let the courtyards be fragrant.'"
                },
                "prom-msst2026":{
                    "title": "Class of 2026 Graduation – Travnik Mixed High School"
                },
                "ahmedvarupamatura2026":{
                    "title": "Ahmed Varupa Prom 2026"
                },
                "amilapezermatura2026":{
                    "title": "Amila Pezer Prom 2026"
                },
                "amiladajicmatura2026":{
                    "title": "Amila Dajić Prom 2026"
                },
                "edinsuljevicmatura2026":{
                    "title": "Edin Suljević Prom 2026"
                },
                "ednatulummatura2026":{
                    "title": "Edna Talam Prom 2026"
                },
                "prom-mstsT2026":{
                    "title": "Class of 2026 – Travnik Technical High School"
                },
                "amarhodzicmatura2026":{
                    "title": "Amar Hodžić Prom 2026"
                },
                "danotvorenihvrataptf2026":{
                    "title": "University of Zenica Open Day 2026"
                },
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "bs",
        fallbackLng: "bs",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;