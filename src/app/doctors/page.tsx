"use client";

import { useRef } from "react";
import { DoctorsHero } from "@/components/doctors/doctors-hero";
import { DoctorsList } from "@/components/doctors/doctors-list";
import { PhilosophySection } from "@/components/doctors/philosophy-section";
import { HealingHubCTA } from "@/components/doctors/healing-hub-cta";
import { doctors } from "@/data/doctors";

export default function DoctorsPage() {
    const headerRef = useRef<HTMLElement>(null);

    return (
        <main className="bg-[#FAFAFA] min-h-screen relative overflow-hidden">

            {/* Ambient Background - Clean & Minimal */}
            <div className="fixed inset-0 z-0 pointer-events-none transform-gpu">
                <div className="absolute top-[-50%] right-[-20%] w-[1000px] h-[1000px] bg-blue-50/50 rounded-full blur-[100px] mix-blend-multiply" />
                <div className="absolute bottom-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-purple-50/50 rounded-full blur-[100px] mix-blend-multiply" />

            </div>

            <DoctorsHero
                headerRef={headerRef}
            />

            <DoctorsList doctors={doctors} />

            <PhilosophySection />

            <HealingHubCTA />

        </main>
    );
}
