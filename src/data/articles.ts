import { LucideIcon, Brain, Activity, Shield } from "lucide-react";

export type ContentBlock =
    | { type: 'text'; content: string }
    | { type: 'heading'; content: string }
    | { type: 'quote'; content: string; author?: string }
    | { type: 'image-row'; images: string[]; caption?: string }
    | { type: 'stat-box'; value: string; label: string; subtext?: string }
    | { type: 'highlight'; title: string; list: string[] };

export interface Article {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    author: string;
    role: string;
    readTime: string;
    category: "Innovation" | "Pediatrics" | "Wellness" | "Future";
    image: string;
    icon: LucideIcon;
    excerpt: string;
    content: ContentBlock[];
    tags: string[];
    color: string;
    authorImage: string;
}

export const articles: Article[] = [
    {
        id: "01",
        slug: "future-of-pediatric-care",
        title: "The Future of Child Care: Smarter & Gentler",
        subtitle: "Beyond Stethoscope",
        date: "OCT 24, 2026",
        author: "Dr. Priya Sharma",
        role: "Head of Pediatrics",
        readTime: "6 MIN READ",
        category: "Pediatrics",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
        icon: Brain,
        excerpt: "How new technology helps us catch health issues early and keeps your child healthier for life.",
        color: "from-neon-pink to-purple-600",
        tags: ["Child Health", "Growth", "Future Care"],
        authorImage: "/doctor_priya.png",
        content: [
            {
                type: 'text',
                content: "We are at a turning point in how we care for children. In the past, we only visited the doctor when a child was sick. But now, things are changing. With new tools and better understanding, we can focus on keeping children healthy before they ever get sick. It is a shift from 'fixing problems' to 'preventing them'."
            },
            {
                type: 'quote',
                content: "Our goal is simple: We don't just want to treat your child today. We want to make sure they grow into healthy, strong adults.",
                author: "Dr. Priya Sharma"
            },
            {
                type: 'heading',
                content: "Predicting Growth Spurts"
            },
            {
                type: 'text',
                content: "Every parent knows that children grow fast, but did you know we can now track that growth with amazing accuracy? It is not just about measuring height and weight anymore. By looking at small patterns in their development, we can see growth spurts coming before they happen."
            },
            {
                type: 'text',
                content: "This helps us guide you on what to feed them during these important times. If we know a growth spurt is coming, we can make sure their body has exactly what it needs to build strong bones and muscles."
            },
            {
                type: 'stat-box',
                value: "94%",
                label: "Accuracy",
                subtext: "In predicting key growth stages early."
            },
            {
                type: 'heading',
                content: "Personalized Nutrition"
            },
            {
                type: 'text',
                content: "Every child is different. Some need more iron, others need more protein. At Santosh Clinic, we are moving away from 'one size fits all' advice. We use simple, non-invasive checks to understand your child's unique needs. This way, we can give you a nutrition plan that is perfect for them."
            },
            {
                type: 'image-row',
                images: [
                    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=2070&auto=format&fit=crop"
                ],
                caption: "Friendly, modern care for your little ones."
            },
            {
                type: 'heading',
                content: "The Human Touch Matters Most"
            },
            {
                type: 'text',
                content: "Even with all this amazing technology, the most important part of our job is still the human connection. A machine cannot comfort a scared child, and a computer cannot understand a parent's worry like another person can."
            },
            {
                type: 'text',
                content: "We use technology to handle the data and the numbers, so our doctors have more time to listen to you, answer your questions, and just be there for your family. Technology makes us smarter, but care makes us human."
            }
        ]
    },
    {
        id: "02",
        slug: "orthopedics-regenerative-era",
        title: "Stronger Bones: The New Way to Heal",
        subtitle: "Structural Engineering",
        date: "NOV 02, 2026",
        author: "Dr. Pravesh Mudgil",
        role: "Senior Orthopedic Surgeon",
        readTime: "8 MIN READ",
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop",
        icon: Activity,
        excerpt: "No more long months in a cast. Learn how we help your body heal bone fractures faster natural capability.",
        color: "from-neon-blue to-cyan-500",
        tags: ["Bone Health", "Recovery", "Mobility"],
        authorImage: "/doctors/pravesh.png",
        content: [
            {
                type: 'text',
                content: "Bones are amazing. They are living tissue that allows us to stand, walk, and run. When a bone breaks, the old way of thinking was to just lock it in a heavy plaster cast and wait for months. But we now know there is a better way."
            },
            {
                type: 'text',
                content: "Modern orthopedics is about 'active recovery'. This means we help the bone heal itself, faster and stronger than before. We don't just wait for healing to happen; we encourage it."
            },
            {
                type: 'highlight',
                title: "Our Key Steps",
                list: [
                    "Smart Movement Sensors",
                    "Advanced Support Implants",
                    "Rapid Physical Therapy"
                ]
            },
            {
                type: 'heading',
                content: "Moving to Heal"
            },
            {
                type: 'text',
                content: "It might sound strange, but staying completely still isn't always best for a broken bone. Controlled, careful movement actually tells your body to send more repair cells to the injury. We use smart sensors to know exactly when it is safe to start moving again."
            },
            {
                type: 'text',
                content: "This approach can speed up your recovery time significantly. Instead of weeks in bed, you could be back on your feet much sooner, with less muscle loss and less stiffness."
            },
            {
                type: 'image-row',
                images: [
                    "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                ],
                caption: "Modern equipment for faster recovery."
            },
            {
                type: 'heading',
                content: "Helping Nature Do Its Work"
            },
            {
                type: 'text',
                content: "For more complex breaks, we use special support structures that act like a frame for your bone to grow back on. Think of it like a trellis for a plant. These supports hold everything perfectly in place so your body can weave new bone tissue quickly and correctly."
            },
            {
                type: 'text',
                content: "Our goal is to get you back to your life—your work, your hobbies, your family—as quickly and safely as possible. It's not just about fixing a bone; it's about giving you back your freedom of movement."
            }
        ]
    },
    {
        id: "03",
        slug: "immunity-architecture",
        title: "Building Your Body's Shield",
        subtitle: "Defense Systems",
        date: "NOV 15, 2026",
        author: "Dr. Mahesh Mudgil",
        role: "General Physician",
        readTime: "7 MIN READ",
        category: "Wellness",
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop",
        icon: Shield,
        excerpt: "Your immune system is your best defense. Simple ways to make it stronger against everyday illness.",
        color: "from-neon-mint to-emerald-500",
        tags: ["Immunity", "Healthy Eating", "Lifestyle"],
        authorImage: "/doctor_mahesh.png",
        content: [
            {
                type: 'text',
                content: "Think of your immune system as your body's personal security team. It is always working, looking out for germs and viruses that might make you sick. The stronger this team is, the less likely you are to fall ill, and the faster you recover if you do."
            },
            {
                type: 'text',
                content: "Many people think they need expensive supplements to boost immunity. But the truth is simpler. The foundation of a strong immune system is built on everyday habits: what you eat, how you sleep, and how you handle stress."
            },
            {
                type: 'heading',
                content: "It Starts in the Stomach"
            },
            {
                type: 'text',
                content: "Did you know that a huge part of your immune system actually lives in your gut? It's true. The healthy bacteria in your stomach play a massive role in fighting off sickness. That is why we focus so much on good nutrition."
            },
            {
                type: 'stat-box',
                value: "70%",
                label: "Gut Health",
                subtext: "Of your immune system is in your digestive tract."
            },
            {
                type: 'text',
                content: "Eating plenty of fruits, vegetables, and yogurt helps keep these good bacteria happy. When your stomach is healthy, your whole body is stronger against infections."
            },
            {
                type: 'heading',
                content: "More Than Just Medicine"
            },
            {
                type: 'text',
                content: "We believe in looking at the whole picture. Taking a pill might help symptoms, but we want to prevent illness in the first place. This means looking at your sleep patterns—are you getting enough rest? It means looking at stress—are you constantly worried?"
            },
            {
                type: 'quote',
                content: "Being healthy isn't just about avoiding the flu. It's about having the energy to enjoy your life every single day.",
                author: "Dr. Mahesh Mudgil"
            },
            {
                type: 'text',
                content: "Simple changes can make a big difference. Walking 20 minutes a day, drinking enough water, and getting to bed on time are powerful tools. We are here to help you build a lifestyle that acts as a shield, keeping you and your family safe and full of life."
            }
        ]
    }
];
