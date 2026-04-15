import Image from "next/image";

import { urlForImage } from "@/lib/sanity/image";
import type { DentalCase } from "@/lib/sanity/types";
import { BeforeAfterSlider } from "@/components/before-after-slider";

type DentalCaseCardProps = {
  dentalCase: DentalCase;
};

export function DentalCaseCard({ dentalCase }: DentalCaseCardProps) {
  const beforeSrc = urlForImage(dentalCase.beforeImage)
    .width(1200)
    .height(900)
    .url();
  const afterSrc = urlForImage(dentalCase.afterImage)
    .width(1200)
    .height(900)
    .url();

  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm">
      <div className="space-y-4 p-6 sm:p-8">
        {dentalCase.category ? (
          <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-teal-800">
            {dentalCase.category.replaceAll("-", " ")}
          </span>
        ) : null}

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            {dentalCase.title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-neutral-600">
            {dentalCase.description}
          </p>
        </div>
      </div>

      <div className="mt-auto px-6 pb-6 sm:px-8 sm:pb-8 md:hidden">
        <BeforeAfterSlider
          beforeSrc={beforeSrc}
          afterSrc={afterSrc}
          title={dentalCase.title}
        />
      </div>

      <div className="mt-auto hidden gap-px bg-teal-100 md:grid md:grid-cols-2">
        <figure className="space-y-3 bg-white p-4">
          <figcaption className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Before
          </figcaption>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={beforeSrc}
              alt={`${dentalCase.title} before`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </figure>

        <figure className="space-y-3 bg-white p-4">
          <figcaption className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            After
          </figcaption>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={afterSrc}
              alt={`${dentalCase.title} after`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </figure>
      </div>
    </article>
  );
}
