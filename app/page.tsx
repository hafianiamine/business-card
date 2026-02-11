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
      {/* Header */}
      <header className="bg-[#F5C75B]">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 pt-10 pb-8 text-center">
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

          <p className="mt-1 text-white font-semibold">Directeur Exécutif</p>

          <p className="text-white text-sm mt-1">
            Faderco SPA • Algeria • Algiers
          </p>

          {/* Real add contact */}
          <div className="mt-6 flex justify-center">
            <a
              href="/khoufi.vcf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-gray-900 shadow-md hover:opacity-90 transition"
            >
              Add Contact
            </a>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-2xl px-5 sm:px-8 py-8 space-y-4">
        {/* Contact */}
        <ActionCard
          title="Contact"
          subtitle="Email and LinkedIn"
          isOpen={open === "contact"}
          onClick={() => toggle("contact")}
        >
          <div className="space-y-3 text-sm">
            <InfoRow label="Email" value="akhoufi@faderco.com" />
            <InfoRow label="LinkedIn" value="dz.linkedin.com/in/khoufiaziz" />

            <div className="flex gap-3 pt-2 flex-wrap">
              <a
                className="rounded-xl bg-gray-900 text-white px-4 py-2 font-semibold hover:opacity-90"
                href="mailto:akhoufi@faderco.com"
                onClick={(e) => e.stopPropagation()}
              >
                Send Email
              </a>

              <a
                className="rounded-xl bg-[#0A66C2] text-white px-4 py-2 font-semibold hover:opacity-90"
                href="https://dz.linkedin.com/in/khoufiaziz"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Open LinkedIn
              </a>
            </div>
          </div>
        </ActionCard>

        {/* Company */}
        <ActionCard
          title="Company"
          subtitle="Role and mission"
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

        {/* Social */}
        <ActionCard
          title="Social"
          subtitle="Professional profile"
          isOpen={open === "social"}
          onClick={() => toggle("social")}
        >
          <div className="space-y-3 text-sm">
            <InfoRow label="LinkedIn" value="https://dz.linkedin.com/in/khoufiaziz" />
            <a
              className="inline-flex rounded-xl bg-[#0A66C2] text-white px-4 py-2 font-semibold hover:opacity-90"
              href="https://dz.linkedin.com/in/khoufiaziz"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Open LinkedIn
            </a>
          </div>
        </ActionCard>
      </section>
    </main>
  );
}

/* Components */

function ActionCard({
  title,
  subtitle,
  isOpen,
  onClick,
  children,
}: {
  title: string;
  subtitle: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
    >
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        <div className="text-gray-400 text-2xl">{isOpen ? "˅" : "›"}</div>
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
