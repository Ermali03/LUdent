import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FolderOpen, Sparkles } from "lucide-react";

import { HeroSectionWithOverlay } from "@/components/hero-section-with-overlay";
import { OurWorkGallery } from "@/app/our-work/our-work-gallery";
import { sanityFetch } from "@/lib/sanity/client";
import { hasSanityEnv, sanityStudioPath } from "@/lib/sanity/env";
import { DENTAL_CASES_QUERY } from "@/lib/sanity/queries";
import type { DentalCase } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Our Work | LUDent",
  description:
    "Explore real dental before-and-after cases managed from Sanity Studio.",
};

export const revalidate = 60;

async function getDentalCases() {
  if (!hasSanityEnv) {
    return {
      dentalCases: [] as DentalCase[],
      hasFetchError: false,
    };
  }

  try {
    const dentalCases = await sanityFetch<DentalCase[]>({
      query: DENTAL_CASES_QUERY,
      revalidate,
    });

    return {
      dentalCases,
      hasFetchError: false,
    };
  } catch (error) {
    console.error("Failed to fetch dental cases from Sanity", error);

    return {
      dentalCases: [] as DentalCase[],
      hasFetchError: true,
    };
  }
}

function SetupState() {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-dashed border-teal-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 text-teal-800">
            <Sparkles className="h-5 w-5" />
            <p className="text-sm font-medium uppercase tracking-[0.2em]">
              Sanity setup required
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950">
            Add your Sanity project details to connect this page
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            This page is already wired to Sanity. Add your project ID and
            dataset in <code>.env.local</code>, then start adding cases in
            Studio.
          </p>

          <div className="mt-6 rounded-[1.5rem] bg-neutral-950 p-5 text-sm text-neutral-100">
            <p>NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id</p>
            <p>NEXT_PUBLIC_SANITY_DATASET=production</p>
            <p>NEXT_PUBLIC_SANITY_API_VERSION=2026-04-15</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={sanityStudioPath}
              className="inline-flex items-center rounded-full bg-teal-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-800"
            >
              Open Studio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://www.sanity.io/manage"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-teal-200 px-5 py-3 text-sm font-medium text-teal-900 transition-colors hover:bg-teal-50"
            >
              Create Sanity project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-[2rem] border border-teal-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-800">
            <FolderOpen className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-950">
            No dental cases yet
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Your client can log into Sanity Studio, create a new Dental Case,
            upload before and after images, and the case will appear here
            automatically.
          </p>

          <Link
            href={sanityStudioPath}
            className="mt-8 inline-flex items-center rounded-full bg-teal-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-800"
          >
            Add first case in Studio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ConnectionState() {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800">
            Sanity connection issue
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950">
            The page is ready, but Sanity could not be reached right now
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-700">
            Check that your Sanity project is available and that this
            environment has internet access. Once Sanity responds again, your
            Dental Cases will appear here automatically.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.sanity.io/manage"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-amber-300 px-5 py-3 text-sm font-medium text-amber-900 transition-colors hover:bg-amber-100"
            >
              Check project access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function OurWorkPage() {
  const { dentalCases, hasFetchError } = await getDentalCases();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6fffd_0%,#ffffff_35%,#f8fafc_100%)]">
      <HeroSectionWithOverlay
        title="OUR WORK"
        subtitle="Smile Transformations"
        imageSrc="/images/image5.jpg"
        height="small"
      >
        <div className="space-y-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-teal-100">
            Real before and after dental cases managed from Sanity Studio, so
            your clinic can publish new transformations without touching code.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/appointment"
              className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </HeroSectionWithOverlay>

      {!hasSanityEnv ? <SetupState /> : null}

      {hasSanityEnv && hasFetchError ? <ConnectionState /> : null}

      {hasSanityEnv && !hasFetchError && dentalCases.length === 0 ? (
        <EmptyState />
      ) : null}

      {hasSanityEnv && !hasFetchError && dentalCases.length > 0 ? (
        <section className="px-4 py-12 sm:px-6 md:py-16">
          <div className="container mx-auto">
            <OurWorkGallery dentalCases={dentalCases} />
          </div>
        </section>
      ) : null}
    </div>
  );
}
