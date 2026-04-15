"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { DentalCaseCard } from "@/components/dental-case-card";
import { cn } from "@/lib/utils";
import type { DentalCase } from "@/lib/sanity/types";

type ViewMode = "grid" | "list";

type OurWorkGalleryProps = {
  dentalCases: DentalCase[];
};

function formatCategoryLabel(category: string) {
  return category.replaceAll("-", " ");
}

export function OurWorkGallery({ dentalCases }: OurWorkGalleryProps) {
  const categories = React.useMemo(() => {
    const unique = new Set<string>();
    for (const dentalCase of dentalCases) {
      const category = dentalCase.category?.trim();
      if (category) unique.add(category);
    }
    return ["all", ...Array.from(unique).sort((a, b) => a.localeCompare(b))];
  }, [dentalCases]);

  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [viewMode, setViewMode] = React.useState<ViewMode>("grid");

  const filteredCases = React.useMemo(() => {
    if (selectedCategory === "all") return dentalCases;
    return dentalCases.filter(
      (dentalCase) => dentalCase.category === selectedCategory,
    );
  }, [dentalCases, selectedCategory]);

  return (
    <div className="grid gap-8 lg:gap-10 ">
      <div className=" flex flex-col gap-4 rounded-2xl border border-teal-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <span className="text-sm font-medium tracking-tight text-neutral-900">
            Category
          </span>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-[240px]"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? "All" : formatCategoryLabel(category)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex w-full gap-2 sm:w-auto">
          <Button
            type="button"
            variant={viewMode === "grid" ? "default" : "outline"}
            className={cn(
              "flex-1 sm:flex-none",
              viewMode === "grid" ? "bg-teal-700 hover:bg-teal-800" : "",
            )}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </Button>
          <Button
            type="button"
            variant={viewMode === "list" ? "default" : "outline"}
            className={cn(
              "flex-1 sm:flex-none",
              viewMode === "list" ? "bg-teal-700 hover:bg-teal-800" : "",
            )}
            onClick={() => setViewMode("list")}
          >
            List
          </Button>
        </div>
      </div>

      <div
        className={cn(
          viewMode === "grid"
            ? "grid grid-cols-1 gap-8 lg:gap-10 sm:grid-cols-2 xl:grid-cols-3"
            : "grid gap-8 lg:gap-10",
        )}
      >
        {filteredCases.map((dentalCase) => (
          <DentalCaseCard key={dentalCase._id} dentalCase={dentalCase} />
        ))}
      </div>
    </div>
  );
}
