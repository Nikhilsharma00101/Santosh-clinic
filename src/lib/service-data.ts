export interface ServiceData {
    title: string;
    description: string;
    longDescription: string;
    faqs: { question: string; answer: string }[];
}

export const SERVICE_DETAILS: Record<string, ServiceData> = {
    "child-care": {
        title: "Child Care & Pediatrics",
        description: "Expert care for infants, children, and adolescents.",
        longDescription: "Our pediatric department is designed to make children feel safe and comfortable. From routine check-ups and growth monitoring to managing acute illnesses and chronic conditions, Dr. Priya Sharma ensures that your child receives the best possible care with a gentle touch. We focus on tracking developmental milestones and providing nutritional guidance for growing bodies.",
        faqs: [
            { question: "When should I bring my newborn for the first checkup?", answer: "We recommend the first checkup within 3-5 days of birth, followed by regular visits as per the vaccination schedule." },
            { question: "Do you offer nutritional counseling for picky eaters?", answer: "Yes, we provide personalized diet plans and strategies to ensure your child gets proper nutrition." }
        ]
    },
    "vaccination": {
        title: "Vaccination",
        description: "Complete immunization schedules for children and adults.",
        longDescription: "Vaccines are the safest way to protect your family from infectious diseases. We offer a comprehensive range of vaccines for newborns, children, and adults, strictly maintaining cold chain protocols to ensure efficacy. We also provide catch-up vaccination for those who may have missed scheduled doses.",
        faqs: [
            { question: "Are the vaccines painless?", answer: "We use the latest painless vaccination options wherever available to minimize discomfort for your child." },
            { question: "Do you maintain a vaccination record?", answer: "Yes, we provide a digital and physical card to track your child's immunization history." }
        ]
    },
    "orthopaedics": {
        title: "Orthopaedics",
        description: "Advanced treatment for bone, joint, and muscle conditions.",
        longDescription: "Under the expert guidance of Dr. Pravesh Mudgil, we diagnose and treat a wide array of musculoskeletal issues. Whether it's arthritis, sports injuries, fractures, or back pain, our goal is to restore mobility and improve quality of life. We believe in conservative management first, offering surgery only when necessary.",
        faqs: [
            { question: "Do you treat sports injuries?", answer: "Yes, we specialize in treating sprains, ligament tears, and other sports-related injuries." },
            { question: "Is surgery always needed for joint pain?", answer: "Not at all. Many conditions can be managed effectively with medication, physiotherapy, and lifestyle changes." }
        ]
    },
    "general-medicine": {
        title: "General Medicine",
        description: "Primary healthcare for adults focusing on prevention and wellness.",
        longDescription: "Our General Medicine practice manages a broad spectrum of adult health conditions. From viral fevers and infections to chronic lifestyle diseases like hypertension, diabetes, and thyroid disorders, Dr. Mahesh Mudgil provides holistic care tailored to your needs.",
        faqs: [
            { question: "Do you manage diabetes?", answer: "Yes, we offer comprehensive diabetes management including diet counseling, medication, and regular monitoring." },
            { question: "Can I get a full body checkup here?", answer: "We offer various health packages to screen for common conditions and ensure early detection." }
        ]
    },
    "preventive-health": {
        title: "Preventive Health",
        description: "Proactive health screenings and lifestyle counseling.",
        longDescription: "Prevention is better than cure. Our preventive health services are designed to identify risk factors early. We offer health counseling, weight management programs, and screening tests to keep you and your family in peak health.",
        faqs: [
            { question: "How often should I get a health checkup?", answer: "For healthy adults under 40, once every 2-3 years is common. Over 40, we recommend annual checkups." },
            { question: "Do you offer lifestyle counseling?", answer: "Absolutely. We guide you on diet, exercise, and stress management to prevent future health issues." }
        ]
    }
};
