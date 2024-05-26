const translations = {
    en: {
        companyName: "MISI TRANS CO., Ltd.",
        navServices: "Services",
        navPrices: "Prices",
        navContact: "Contact",
        navPhotos: "Photos",
        aboutTitle: "About Us",
        aboutDescription: "Welcome to MISI TRANS CO., Ltd., your trusted trucking company. We provide reliable and efficient transportation services to meet all your needs.",
        servicesTitle: "Our Services",
        serviceItem1: "Transportation of ambient and fresh products with 10 wheel trucks",
        pricesTitle: "Prices",
        pricesDescription: "Contact us for detailed pricing information. We offer competitive rates to ensure you get the best service for your budget.",
        photosTitle: "Photos",
        contactTitle: "Contact Us",
        contactEmail: "Email: misitrans24@gmail.com",
        contactPhone: "Phone: +66896136895",
        contactPerson: "Contact Person: Olah Aree",
        contactCity: "City: Surat Thani"
    },
    de: {
        companyName: "MISI TRANS GmbH",
        navServices: "Dienstleistungen",
        navPrices: "Preise",
        navContact: "Kontakt",
        navPhotos: "Fotos",
        aboutTitle: "Über uns",
        aboutDescription: "Willkommen bei MISI TRANS GmbH, Ihrem vertrauenswürdigen Transportunternehmen. Wir bieten zuverlässige und effiziente Transportdienstleistungen, um all Ihre Bedürfnisse zu erfüllen.",
        servicesTitle: "Unsere Dienstleistungen",
        serviceItem1: "Transport von Umgebungstemperatur- und Frischprodukten mit 10-Rad-LKWs",
        pricesTitle: "Preise",
        pricesDescription: "Kontaktieren Sie uns für detaillierte Preisinformationen. Wir bieten wettbewerbsfähige Preise, um sicherzustellen, dass Sie den besten Service für Ihr Budget erhalten.",
        photosTitle: "Fotos",
        contactTitle: "Kontaktieren Sie uns",
        contactEmail: "Email: misitrans24@gmail.com",
        contactPhone: "Telefon: +66896136895",
        contactPerson: "Ansprechpartner: Olah Aree",
        contactCity: "Stadt: Surat Thani"
    },
    th: {
        companyName: "บริษัท มิซิ ทรานส์ จำกัด",
        navServices: "บริการ",
        navPrices: "ราคา",
        navContact: "ติดต่อ",
        navPhotos: "ภาพถ่าย",
        aboutTitle: "เกี่ยวกับเรา",
        aboutDescription: "ยินดีต้อนรับสู่บริษัท มิซิ ทรานส์ จำกัด บริษัทขนส่งที่เชื่อถือได้ของคุณ เราให้บริการขนส่งที่เชื่อถือได้และมีประสิทธิภาพเพื่อตอบสนองทุกความต้องการของคุณ",
        servicesTitle: "บริการของเรา",
        serviceItem1: "ขนส่งผลิตภัณฑ์ที่มีอุณหภูมิแวดล้อมและผลิตภัณฑ์สดด้วยรถบรรทุก 10 ล้อ",
        pricesTitle: "ราคา",
        pricesDescription: "ติดต่อเราเพื่อขอข้อมูลราคาโดยละเอียด เรามีอัตราที่แข่งขันได้เพื่อให้คุณได้รับบริการที่ดีที่สุดตามงบประมาณของคุณ",
        photosTitle: "ภาพถ่าย",
        contactTitle: "ติดต่อเรา",
        contactEmail: "อีเมล: misitrans24@gmail.com",
        contactPhone: "โทรศัพท์: +66896136895",
        contactPerson: "ผู้ติดต่อ: Olah Aree",
        contactCity: "เมือง: สุราษฎร์ธานี"
    }
};

function setLanguage(lang) {
    document.getElementById('company-name').textContent = translations[lang].companyName;
    document.getElementById('nav-services').textContent = translations[lang].navServices;
    document.getElementById('nav-prices').textContent = translations[lang].navPrices;
    document.getElementById('nav-contact').textContent = translations[lang].navContact;
    document.getElementById('nav-photos').textContent = translations[lang].navPhotos;
    document.getElementById('about-title').textContent = translations[lang].aboutTitle;
    document.getElementById('about-description').textContent = translations[lang].aboutDescription;
    document.getElementById('services-title').textContent = translations[lang].servicesTitle;
    document.getElementById('service-item-1').textContent = translations[lang].serviceItem1;
    document.getElementById('prices-title').textContent = translations[lang].pricesTitle;
    document.getElementById('prices-description').textContent = translations[lang].pricesDescription;
    document.getElementById('photos-title').textContent = translations[lang].photosTitle;
    document.getElementById('contact-title').textContent = translations[lang].contactTitle;
    document.getElementById('contact-email').textContent = translations[lang].contactEmail;
    document.getElementById('contact-phone').textContent = translations[lang].contactPhone;
    document.getElementById('contact-person').textContent = translations[lang].contactPerson;
    document.getElementById('contact-city').textContent = translations[lang].contactCity;
}

// Set default language to English
setLanguage('en');
