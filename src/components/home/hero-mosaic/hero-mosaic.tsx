"use client";

import React from "react";
import { ActionSidebar } from "./action-sidebar";
import { CinematicDisplay } from "./cinematic-display";
import { ServiceMarquee } from "./service-marquee";
import { TrustCluster } from "./trust-cluster";

export function HeroMosaic() {
    return (
        <section className="relative min-h-[100vh] pt-32 pb-8 px-4 md:px-8 bg-gray-50 flex items-center justify-center">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-100/50 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-100/50 rounded-full blur-[150px]" />
            </div>

            <div className="w-full max-w-[1600px] h-[85vh] min-h-[700px] relative z-10 grid grid-cols-1 md:grid-cols-12 grid-rows-6 gap-4">

                {/* ZONE A: Cinematic Core (Main Stage) */}
                <CinematicDisplay className="col-span-1 md:col-span-12 lg:col-span-10 row-span-4 lg:row-span-5 bg-white/40 rounded-[2.5rem] border border-white/50 shadow-sm backdrop-blur-md" />

                {/* ZONE B: Action Sidebar - Desktop Only Col Slot */}
                <div className="hidden lg:block lg:col-span-2 lg:row-span-5">
                    <ActionSidebar className="h-full rounded-[2.5rem]" />
                </div>

                {/* ZONE C: Service Ticker (Bottom Strip) */}
                <ServiceMarquee className="col-span-1 md:col-span-8 lg:col-span-10 row-span-1 md:row-span-2 lg:row-span-1 rounded-[2rem]" />

                {/* ZONE D: Trust Cluster (Bottom Corner) */}
                <TrustCluster className="col-span-1 md:col-span-4 lg:col-span-2 row-span-1 md:row-span-2 lg:row-span-1 rounded-[2rem]" />

                {/* Mobile Action Sidebar Slot (Handled by the floating fixed element inside the component) */}
                <div className="lg:hidden">
                    <ActionSidebar />
                </div>
            </div>
        </section>
    );
}
