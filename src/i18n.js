import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    bs: {
        translation: {
            "nav_home": "Početna",
            "nav_portfolio": "Portfolio",
            "nav_about": "O meni",
            "nav_services": "Usluge",
            "nav_contact": "Kontakt"
        }
    },
    en: {
        translation: {
            "nav_home": "Home",
            "nav_portfolio": "Portfolio",
            "nav_about": "About me",
            "nav_services": "Services",
            "nav_contact": "Contact"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "bs", // Početni jezik je bosanski
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;