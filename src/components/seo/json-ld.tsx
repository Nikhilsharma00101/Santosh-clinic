import { SITE_CONFIG } from "@/lib/constants";

export function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": SITE_CONFIG.name,
        "alternateName": SITE_CONFIG.shortName,
        "url": "https://santoshclinic.com", // Placeholder URL
        "logo": "https://santoshclinic.com/logo.png",
        "description": SITE_CONFIG.tagline,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Narela", // Specific address needed
            "addressLocality": "Narela",
            "addressRegion": "Delhi",
            "postalCode": "110040",
            "addressCountry": "IN"
        },
        "telephone": SITE_CONFIG.phoneValue,
        "email": SITE_CONFIG.email,
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "10:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "13:00"
            }
        ],
        "department": [
            {
                "@type": "MedicalSpecialty",
                "name": "Paediatrics",
                "medicalSpecialty": "Pediatric"
            },
            {
                "@type": "MedicalSpecialty",
                "name": "Orthopaedics",
                "medicalSpecialty": "Orthopedic"
            },
            {
                "@type": "MedicalSpecialty",
                "name": "General Medicine",
                "medicalSpecialty": "PrimaryCare"
            }
        ],
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
