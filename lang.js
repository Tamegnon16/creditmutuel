const translations = {"en": {"welcome": "Welcome to Crédit Mutuel", "login": "Client Login", "contact": "Contact us"}, "de": {"welcome": "Willkommen bei Crédit Mutuel", "login": "Kunden-Login", "contact": "Kontaktieren Sie uns"}, "ro": {"welcome": "Bine ați venit la Crédit Mutuel", "login": "Autentificare client", "contact": "Contactați-ne"}, "es": {"welcome": "Bienvenido a Crédit Mutuel", "login": "Acceso de cliente", "contact": "Contáctenos"}, "lt": {"welcome": "Sveiki atvykę į Crédit Mutuel", "login": "Kliento prisijungimas", "contact": "Susisiekite su mumis"}, "el": {"welcome": "Καλώς ήρθατε στην Crédit Mutuel", "login": "Είσοδος πελάτη", "contact": "Επικοινωνήστε μαζί μας"}};

function switchLanguage(lang) {
    document.getElementById("welcome").innerText = translations[lang]["welcome"];
    document.getElementById("login-btn").innerText = translations[lang]["login"];
    document.getElementById("contact-link").innerText = translations[lang]["contact"];
}
