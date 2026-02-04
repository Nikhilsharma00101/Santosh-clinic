"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { doctors as doctorsData } from "@/data/doctors";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense, useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { Calendar, Clock, User, Phone, CheckCircle2, ChevronRight, Sparkles, ShieldCheck, ArrowRight, Info, X, MapPin, Send } from "lucide-react";

const doctors = doctorsData.map(d => d.name);

const DOCTOR_SLOTS: Record<string, string[]> = {
    "Dr. Pravesh Mudgil": ["08 AM - 09 AM", "09 AM - 10 AM"],
    "Dr. Mahesh Mudgil": ["10 AM - 11 AM", "11 AM - 12 PM", "12 PM - 01 PM", "01 PM - 02 PM"],
    "Dr. Priya Sharma": ["04 PM - 05 PM", "05 PM - 06 PM", "06 PM - 07 PM", "07 PM - 08 PM"],
};

const SERVICE_SLOTS = [
    "08 AM - 09 AM", "09 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM",
    "12 PM - 01 PM", "01 PM - 02 PM", "04 PM - 05 PM", "05 PM - 06 PM",
    "06 PM - 07 PM", "07 PM - 08 PM"
];

const bookingSchema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    preferenceType: z.enum(["doctor", "service"]),
    selection: z.string().min(1, "Please make a selection"),
    date: z.string().min(1, "Date is required"),
    timeSlot: z.string().min(1, "Time slot is required"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

function PreviewModal({ data, onConfirm, onClose }: { data: BookingFormValues, onConfirm: () => void, onClose: () => void }) {
    const [mounted] = useState(true);

    if (!mounted) return null;

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6"
        >
            <div className="absolute inset-0 bg-teal-950/60 backdrop-blur-xl" onClick={onClose} />

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20"
            >
                {/* Header Decoration */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-teal-600 to-blue-600">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                </div>

                <div className="relative pt-10 px-8 pb-10">
                    <div className="flex justify-between items-start mb-12">
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                        <button onClick={onClose} className="p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors">
                            <X className="w-5 h-5 text-white" />
                        </button>
                    </div>

                    <div className="space-y-1 mb-8">
                        <h3 className="text-2xl font-black text-teal-950 tracking-tight">Confirm Booking</h3>
                        <p className="text-teal-900/40 text-xs font-bold uppercase tracking-widest">Double check your information</p>
                    </div>

                    <div className="space-y-4">
                        {/* Information Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-100">
                                <label className="text-[10px] font-black uppercase tracking-widest text-teal-900/30 block mb-1">Patient Name</label>
                                <span className="text-sm font-bold text-teal-950">{data.name}</span>
                            </div>
                            <div className="p-4 bg-teal-50/50 rounded-2xl border border-teal-100">
                                <label className="text-[10px] font-black uppercase tracking-widest text-teal-900/30 block mb-1">Phone Number</label>
                                <span className="text-sm font-bold text-teal-950">{data.phone}</span>
                            </div>
                        </div>

                        <div className="p-5 bg-blue-50/30 rounded-3xl border border-blue-100/50 shadow-inner">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-blue-100">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-900/40 block mb-1">
                                        Selected {data.preferenceType === 'doctor' ? 'Doctor' : 'Service'}
                                    </label>
                                    <span className="text-2xl font-black text-teal-950 leading-[1.1] block">
                                        {data.selection}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white border border-teal-100 rounded-2xl flex items-center gap-3">
                                <Calendar className="w-4 h-4 text-teal-600" />
                                <div className="flex flex-col">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-teal-900/40">Appointment Date</label>
                                    <span className="text-sm font-bold text-teal-950">{data.date}</span>
                                </div>
                            </div>
                            <div className="p-4 bg-white border border-teal-100 rounded-2xl flex items-center gap-3">
                                <Clock className="w-4 h-4 text-teal-600" />
                                <div className="flex flex-col">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-teal-900/40">Preferred Time</label>
                                    <span className="text-sm font-bold text-teal-950">{data.timeSlot}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50/80 rounded-2xl border border-dashed border-gray-200 flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <div className="flex flex-col">
                                <label className="text-[8px] font-black uppercase tracking-widest text-gray-400">Clinic Address</label>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter leading-tight">{SITE_CONFIG.address}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-3">
                        <Button
                            onClick={onConfirm}
                            className="w-full h-16 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white shadow-xl shadow-teal-500/20 text-lg font-bold flex items-center justify-center gap-3 group transition-all"
                        >
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Book on WhatsApp
                        </Button>
                        <button
                            onClick={onClose}
                            className="w-full h-12 text-teal-900/30 hover:text-teal-950 text-xs font-black uppercase tracking-[0.2em] transition-colors"
                        >
                            Make Changes
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
}

function BookingForm() {
    const searchParams = useSearchParams();
    const preSelectedDoctor = searchParams.get("doctor");
    const preSelectedService = searchParams.get("service");

    const [step, setStep] = useState(1);
    const [showPreview, setShowPreview] = useState(false);
    const [previewData, setPreviewData] = useState<BookingFormValues | null>(null);

    const {
        register,
        handleSubmit,
        control,
        setValue,
        trigger,
        formState: { errors, isSubmitting },
    } = useForm<BookingFormValues>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            preferenceType: preSelectedDoctor ? "doctor" : "service",
            selection: preSelectedDoctor || preSelectedService || "",
        },
    });

    const preferenceType = useWatch({ control, name: "preferenceType" });
    const selection = useWatch({ control, name: "selection" });
    const timeSlot = useWatch({ control, name: "timeSlot" });
    const selectedDate = useWatch({ control, name: "date" });
    const nameValue = useWatch({ control, name: "name" });
    const phoneValue = useWatch({ control, name: "phone" });
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    // Dynamic time slots
    const availableSlots = useMemo(() => {
        if (preferenceType === "doctor" && selection && DOCTOR_SLOTS[selection]) {
            return DOCTOR_SLOTS[selection];
        }
        return SERVICE_SLOTS;
    }, [preferenceType, selection]);

    // Reset time slot if it's no longer available in the new list
    useEffect(() => {
        if (timeSlot && !availableSlots.includes(timeSlot)) {
            setValue("timeSlot", "");
        }
    }, [availableSlots, setValue, timeSlot]);

    const nextStep = async () => {
        let fields: (keyof BookingFormValues)[] = [];
        if (step === 1) fields = ["name", "phone"];
        if (step === 2) fields = ["selection"];

        const isValid = await trigger(fields);
        if (isValid) setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const handleConfirmRequest = (data: BookingFormValues) => {
        setPreviewData(data);
        setShowPreview(true);
    };

    const finalTransmit = async () => {
        if (!previewData) return;
        const data = previewData;
        const message = encodeURIComponent(
            `*New Appointment Request - Santosh Clinic*\n\n` +
            `*Patient:* ${data.name}\n` +
            `*Phone:* ${data.phone}\n` +
            `*Preferred:* ${data.preferenceType === 'doctor' ? 'Doctor' : 'Service'}\n` +
            `*Selection:* ${data.selection}\n` +
            `*Date:* ${data.date}\n` +
            `*Time Slot:* ${data.timeSlot}\n\n` +
            `_Sent via Santosh Clinic Website_`
        );

        const whatsappUrl = `https://wa.me/${SITE_CONFIG.phoneValue.replace(/\D/g, '')}?text=${message}`;
        await new Promise((resolve) => setTimeout(resolve, 500));
        window.open(whatsappUrl, '_blank');
        setShowPreview(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleConfirmRequest)} className="space-y-8">
                {/* Multi-step Navigation */}
                <div className="flex gap-2 mb-8 items-center justify-center">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${step >= i ? "bg-teal-600 text-white shadow-lg shadow-teal-500/20" : "bg-teal-100 text-teal-400"}`}>
                                {step > i ? <CheckCircle2 className="w-4 h-4" /> : i}
                            </div>
                            {i < 3 && <div className={`w-12 h-0.5 mx-2 transition-all duration-500 ${step > i ? "bg-teal-600" : "bg-teal-100"}`} />}
                        </div>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative group">
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500 ${focusedField === 'name' ? 'opacity-100' : ''}`} />
                                    <div className="relative bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 shadow-sm group-hover:border-teal-200">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-teal-600" />
                                                <span className="text-xs font-bold text-slate-500 tracking-wide">Full Name</span>
                                            </div>
                                            {nameValue && <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />}
                                        </div>
                                        <Input
                                            {...register("name")}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="Full Name"
                                            className="bg-transparent border-none text-slate-900 placeholder:text-slate-400 focus-visible:ring-0 px-2 h-10 text-lg font-medium tracking-tight"
                                        />
                                    </div>
                                    {errors.name && <p className="text-rose-500 text-[11px] mt-2 ml-4 font-bold">{errors.name.message}</p>}
                                </div>

                                <div className="relative group">
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500 ${focusedField === 'phone' ? 'opacity-100' : ''}`} />
                                    <div className="relative bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 shadow-sm group-hover:border-blue-200">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-blue-600" />
                                                <span className="text-xs font-bold text-slate-500 tracking-wide">Phone Number</span>
                                            </div>
                                            {phoneValue && phoneValue.length >= 10 && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />}
                                        </div>
                                        <Input
                                            {...register("phone")}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="Mobile Number"
                                            className="bg-transparent border-none text-slate-900 placeholder:text-slate-400 focus-visible:ring-0 px-2 h-10 text-lg font-medium tracking-tight"
                                        />
                                    </div>
                                    {errors.phone && <p className="text-rose-500 text-[11px] mt-2 ml-4 font-bold">{errors.phone.message}</p>}
                                </div>
                            </div>
                            <Button type="button" onClick={nextStep} className="w-full h-14 rounded-2xl bg-teal-600 text-white font-bold text-lg hover:bg-teal-500 transition-all flex items-center justify-center gap-2">
                                Continue Booking <ArrowRight className="w-5 h-5" />
                            </Button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="relative bg-white/30 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 sm:p-8">
                                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-teal-950 font-bold tracking-tight text-xl mb-1">Who do you want to see?</h3>
                                        <p className="text-teal-900/60 text-sm">Choose a doctor or a clinic service.</p>
                                    </div>
                                    <div className="flex p-1 bg-teal-100/30 backdrop-blur-md rounded-xl border border-teal-200/50">
                                        {["doctor", "service"].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => {
                                                    setValue("preferenceType", type as "doctor" | "service");
                                                    setValue("selection", "");
                                                }}
                                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 ${preferenceType === type ? "bg-white text-teal-600 shadow-sm" : "text-teal-900/40"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                    {(preferenceType === "doctor" ? doctors : SERVICES.map(s => s.title)).map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => setValue("selection", item)}
                                            className={`group relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${selection === item
                                                ? "bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-500/20"
                                                : "bg-white/50 border-white/40 text-teal-900 hover:border-teal-300 hover:bg-white"
                                                }`}
                                        >
                                            <span className="text-sm font-bold tracking-tight text-left">{item}</span>
                                            {selection === item ? (
                                                <CheckCircle2 className="w-5 h-5 text-teal-100" />
                                            ) : (
                                                <ChevronRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                                {errors.selection && <p className="text-rose-500 text-[10px] mt-2 font-medium uppercase tracking-tighter">{errors.selection.message}</p>}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Button type="button" variant="outline" onClick={prevStep} className="h-14 rounded-2xl border-teal-100 text-teal-600 font-bold hover:bg-teal-50">Back</Button>
                                <Button type="button" onClick={nextStep} className="h-14 rounded-2xl bg-teal-600 text-white font-bold hover:bg-teal-500">Pick Date & Time</Button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            {/* Premium Date Scroller */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between px-2">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-teal-600" />
                                        <span className="text-sm font-bold text-slate-700 tracking-tight">Select Date</span>
                                    </div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100/50 px-2 py-1 rounded-md">Next 14 Days</div>
                                </div>

                                <div className="flex gap-3 overflow-x-auto pb-4 pt-2 px-2 custom-scrollbar no-scrollbar">
                                    {mounted && Array.from({ length: 14 }).map((_, i) => {
                                        const d = new Date();
                                        d.setDate(d.getDate() + i);
                                        const dateStr = d.toISOString().split('T')[0];
                                        const isSelected = selectedDate === dateStr;
                                        const isToday = i === 0;

                                        const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
                                        const dayNum = d.getDate();
                                        const monthName = d.toLocaleDateString('en-US', { month: 'short' });

                                        return (
                                            <button
                                                key={dateStr}
                                                type="button"
                                                onClick={() => {
                                                    setValue("date", dateStr);
                                                    trigger("date");
                                                }}
                                                className={`relative flex-shrink-0 w-20 h-28 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-500 border ${isSelected
                                                    ? "bg-teal-600 border-teal-500 text-white shadow-xl shadow-teal-500/30 -translate-y-1"
                                                    : "bg-white border-slate-100 text-slate-600 hover:border-teal-200 hover:bg-teal-50/30"
                                                    }`}
                                            >
                                                {isToday && (
                                                    <span className={`absolute top-2 text-[8px] font-black uppercase tracking-tighter ${isSelected ? 'text-teal-200' : 'text-teal-600'}`}>Today</span>
                                                )}
                                                <span className={`text-[10px] font-bold uppercase tracking-widest ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>{dayName}</span>
                                                <span className="text-2xl font-black tracking-tighter">{dayNum}</span>
                                                <span className={`text-[9px] font-bold uppercase tracking-widest ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>{monthName}</span>
                                                {isSelected && (
                                                    <motion.div
                                                        layoutId="activeDate"
                                                        className="absolute -bottom-1 w-6 h-1 bg-white rounded-full"
                                                    />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                                {errors.date && <p className="text-rose-500 text-[11px] mt-2 ml-2 font-bold">{errors.date.message}</p>}
                            </div>

                            {/* Refined Time Grid */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 px-2">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm font-bold text-slate-700 tracking-tight">Available Times</span>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 px-2">
                                    {availableSlots.map((slot) => {
                                        const isSelected = timeSlot === slot;
                                        return (
                                            <button
                                                key={slot}
                                                type="button"
                                                onClick={() => {
                                                    setValue("timeSlot", slot);
                                                    trigger("timeSlot");
                                                }}
                                                className={`px-4 py-4 rounded-2xl text-[11px] font-black transition-all duration-300 border text-center ${isSelected
                                                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30 translate-y-[-2px]"
                                                    : "bg-white border-slate-100 text-slate-600 hover:border-blue-200 hover:bg-blue-50/50"
                                                    }`}
                                            >
                                                {slot}
                                            </button>
                                        );
                                    })}
                                </div>
                                {errors.timeSlot && <p className="text-rose-500 text-[11px] mt-2 ml-2 font-bold">{errors.timeSlot.message}</p>}
                            </div>

                            {selection && preferenceType === "doctor" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-blue-50/30 border border-blue-100/50 rounded-2xl p-4 flex gap-4 items-center mx-2"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-blue-100">
                                        <Info className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-bold leading-relaxed">
                                        Note: <strong className="text-slate-900">{selection}</strong> sees patients from <strong>{doctorsData.find(d => d.name === selection)?.schedule}</strong>.
                                    </p>
                                </motion.div>
                            )}

                            <div className="flex flex-col gap-4 pt-4 px-2">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="relative w-full h-16 rounded-3xl bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-200 group overflow-hidden transition-all active:scale-[0.98]"
                                >
                                    <div className="flex items-center justify-center gap-3 relative z-10">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span className="text-lg font-black uppercase tracking-widest">Review My Booking</span>
                                    </div>
                                </Button>
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="h-10 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] transition-colors"
                                >
                                    Back to choices
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-center gap-6 py-6 border-t border-teal-100/30">
                    <div className="flex items-center gap-2 text-teal-900/40 text-[9px] font-bold uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Secure Booking</span>
                    </div>
                    <div className="flex items-center gap-2 text-teal-900/40 text-[9px] font-bold uppercase tracking-widest">
                        <Sparkles className="w-3 h-3" />
                        <span>Instant Support</span>
                    </div>
                </div>
            </form>

            <AnimatePresence>
                {showPreview && previewData && (
                    <PreviewModal
                        data={previewData}
                        onConfirm={finalTransmit}
                        onClose={() => setShowPreview(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default function BookingPage() {
    return (
        <div className="min-h-screen bg-[#FDFDFF] relative overflow-hidden font-outfit">
            {/* Ultra-Premium Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.12)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-[0.02]" />

            {/* Kinetic Light Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] -left-[5%] w-[600px] h-[600px] bg-teal-300/30 blur-[120px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.15, 0.1],
                    x: [0, -50, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] -right-[5%] w-[700px] h-[700px] bg-blue-300/20 blur-[130px] rounded-full pointer-events-none"
            />

            <div className="container relative z-10 max-w-6xl mx-auto pt-40 pb-32 px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-stretch">

                    {/* Left: Elite Identity Sidebar */}
                    <div className="lg:w-[35%]">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:sticky lg:top-40 space-y-10"
                        >
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "60px" }}
                                    className="h-1 bg-teal-500 rounded-full"
                                />
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-teal-50 rounded-full text-teal-600 text-[10px] font-black uppercase tracking-[0.2em]">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                                    </span>
                                    Priority Booking
                                </div>
                                <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                                    Better Care. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">Made Easy.</span>
                                </h1>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-sm">
                                    Book your visit in seconds. We help you connect with our doctors instantly.
                                </p>
                            </div>

                            {/* Technical Specs / HUD Elements */}
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { icon: ShieldCheck, label: "Private", value: "Safe & Private", color: "text-teal-500", bg: "border-teal-50" },
                                    { icon: Sparkles, label: "Support", value: "Quick Help", color: "text-blue-500", bg: "border-blue-50" },
                                    { icon: MapPin, label: "Location", value: "Narela, Delhi", color: "text-indigo-500", bg: "border-indigo-50" }
                                ].map((spec, i) => (
                                    <div key={i} className="group flex items-center gap-4 p-4 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 hover:border-teal-100 transition-all duration-500 shadow-sm hover:shadow-md">
                                        <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border ${spec.bg} group-hover:scale-110 transition-transform`}>
                                            <spec.icon className={`w-5 h-5 ${spec.color}`} />
                                        </div>
                                        <div>
                                            <div className="text-[9px] uppercase font-black text-slate-400 tracking-widest">{spec.label}</div>
                                            <div className="text-sm font-bold text-slate-800">{spec.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: The Advanced Console */}
                    <div className="lg:w-[65%] w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative group/console"
                        >
                            {/* Decorative Outer Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5 rounded-[3.5rem] blur-3xl opacity-0 group-hover/console:opacity-100 transition-opacity duration-1000" />

                            <div className="relative bg-white/70 backdrop-blur-3xl border border-white rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)]">
                                <Suspense fallback={
                                    <div className="space-y-8 animate-pulse">
                                        <div className="h-8 bg-slate-100 rounded-full w-48 mx-auto" />
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="h-24 bg-slate-50 rounded-3xl" />
                                            <div className="h-24 bg-slate-50 rounded-3xl" />
                                        </div>
                                        <div className="h-16 bg-slate-100 rounded-3xl" />
                                    </div>
                                }>
                                    <BookingForm />
                                </Suspense>
                            </div>

                            {/* Console Footer Decor */}
                            <div className="mt-8 flex justify-center gap-8">
                                <div className="h-1 w-12 bg-slate-100 rounded-full" />
                                <div className="h-1 w-24 bg-teal-500/20 rounded-full" />
                                <div className="h-1 w-12 bg-slate-100 rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.05); border-radius: 20px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(20, 184, 166, 0.2); }
                
                input[type="date"]::-webkit-calendar-picker-indicator {
                    filter: invert(0.5);
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
}
