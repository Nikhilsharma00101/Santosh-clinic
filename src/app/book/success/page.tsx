"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function BookingSuccessPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-sage-50 px-4">
            <div className="text-center max-w-md">
                <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 mx-auto mb-6">
                    <CheckCircle size={40} />
                </div>
                <h1 className="text-3xl font-bold text-sage-900 mb-4">Request Received</h1>
                <p className="text-sage-600 leading-relaxed mb-8">
                    Thank you for choosing Santosh Clinic. We have received your appointment request.
                    Our team will confirm your slot via WhatsApp or Phone shortly.
                </p>
                <Link href="/">
                    <Button variant="outline">Back to Home</Button>
                </Link>
            </div>
        </div>
    );
}
