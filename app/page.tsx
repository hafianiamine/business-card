"use client";

import Image from "next/image";
import { useState } from "react";

type CardKey = "contact" | "company" | "social" | null;

export default function Home() {
  const [open, setOpen] = useState<CardKey>(null);

  const toggle = (key: Exclude<CardKey, null>) =>
    setOpen((prev) => (prev === key ? null : key));

  return (
    <main className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/bc.jpg" alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative mx-auto max-w-2xl px-5 sm:px-8 pt-10 pb-8 text-center">
          <div className="flex justify-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              <Image
                src="/profile.jpg"
                alt="Mohamed Aziz Khoufi"
                fill
                className="rounded-full object-cover border-4 border-white shadow-md"
                priority
              />
            </div>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold text-white drop-shadow">
            Mohamed Aziz Khoufi
          </h1>

          <p className="mt-1 text-white/90 font-semibold drop-shadow">
            Directeur Exécutif
          </p>

          <p className="text-white/80 text-sm mt-1 drop-shadow">
            Faderco SPA • Algeria • Algiers
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="/khoufi.vcf"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-gray-900 shadow-md hover:opacity-90 transition"
            >
              <IconPlus />
              Add Contact
            </a>
          </div>
        </div>
      </header>

      {/* BODY */}
      <section className="mx-auto max-w-2xl px-5 sm:px-8 py-8 space-y-4">
        {/* CONTACT */}
        <ActionCard
          title="Contact"
          subtitle="Phone, email and LinkedIn"
          leftIcon={<IconCard />}
          isOpen={open === "contact"}
          onClick={() => toggle("contact")}
        >
          <div className="space-y-3 text-sm">
            <InfoRow label="Phone" value="+213770838733" />
            <InfoRow label="Email" value="akhoufi@faderco.com" />
            <InfoRow label="LinkedIn" value="dz.linkedin.com/in/khoufiaziz" />

            {/* ICON ACTIONS */}
            <div className="flex gap-3 pt-3">
              {/* CALL */}
              <a
                href="tel:+213770838733"
                onClick={(e) => e.stopPropagation()}
                className="w-11 h-11 rounded-xl bg-green-600 text-white flex items-center justify-center hover:opacity-90 transition"
                title="Call"
              >
                <IconPhone />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:akhoufi@faderco.com"
                onClick={(e) => e.stopPropagation()}
                className="w-11 h-11 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:opacity-90 transition"
                title="Send Email"
              >
                <IconMail />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://dz.linkedin.com/in/khoufiaziz"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-11 h-11 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition"
                title="Open LinkedIn"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </ActionCard>

        {/* COMPANY */}
        <ActionCard
          title="Company"
          subtitle="Role and mission"
          leftIcon={<IconBuilding />}
          isOpen={open === "company"}
          onClick={() => toggle("company")}
        >
          <div className="space-y-2 text-sm">
            <InfoRow label="Company" value="Faderco SPA" />
            <InfoRow label="Position" value="Directeur Exécutif" />
            <InfoRow label="Location" value="Algeria • Algiers" />
            <InfoRow label="Since" value="July 2014" />
          </div>

          <div className="mt-4 rounded-xl bg-gray-50 p-4 border">
            <p className="text-gray-700 leading-relaxed">
              Directeur Exécutif ayant pour mission le développement de l’activité
              commerciale de la société sur le marché local et la sous-région.
            </p>
          </div>
        </ActionCard>

        {/* SOCIAL */}
        <ActionCard
          title="Social"
          subtitle="Professional profile"
          leftIcon={<IconLinkedIn />}
          isOpen={open === "social"}
          onClick={() => toggle("social")}
        >
          <div className="flex gap-3 pt-3">
            <a
              href="https://dz.linkedin.com/in/khoufiaziz"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-11 h-11 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition"
              title="Open LinkedIn"
            >
              <IconLinkedIn />
            </a>
          </div>
        </ActionCard>
      </section>
    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function ActionCard({
  title,
  subtitle,
  leftIcon,
  isOpen,
  onClick,
  children,
}: {
  title: string;
  subtitle: string;
  leftIcon: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div onClick={onClick} className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer">
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700">
            {leftIcon}
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">{title}</p>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
        </div>

        <div className="text-gray-400 text-xl">
          {isOpen ? <IconChevronDown /> : <IconChevronRight />}
        </div>
      </div>

      {isOpen && (
        <div className="px-5 pb-5 pt-0 border-t">
          <div className="pt-4">{children}</div>
        </div>
      )}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-gray-900 text-right break-words">
        {value}
      </span>
    </div>
  );
}

/* ---------- SVG ICONS ---------- */

function baseIcon(props: React.SVGProps<SVGSVGElement>) {
  return {
    width: 18,
    height: 18,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    ...props,
  };
}

function IconPlus() {
  return (
    <svg {...baseIcon({})} viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg {...baseIcon({})} viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg {...baseIcon({})} viewBox="0 0 24 24">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg {...baseIcon({})} viewBox="0 0 24 24">
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg {...baseIcon({})} viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.57 2.5a2 2 0 0 1-.45 2.11L9.1 10.9a16 16 0 0 0 4 4l1.57-1.13a2 2 0 0 1 2.11-.45c.8.27 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg {...baseIcon({})} viewBox="0 0 24 24">
      <path d="M6 21V3h12v18" />
      <path d="M9 7h.01M9 11h.01M9 15h.01M15 7h.01M15 11h.01M15 15h.01" />
    </svg>
  );
}

function IconCard() {
  return (
    <svg {...baseIcon({})} viewBox="0 0 24 24">
      <path d="M3 7h18v10H3z" />
      <path d="M7 11h6M7 14h4" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.852 3.37-1.852 3.6 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452z" />
    </svg>
  );
}
