import { defineField, defineType } from "sanity"

export const dentalCaseType = defineType({
  name: "dentalCase",
  title: "Dental Case",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "beforeImage",
      title: "Before image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "afterImage",
      title: "After image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Whitening", value: "whitening" },
          { title: "Implants", value: "implants" },
          { title: "Veneers", value: "veneers" },
          { title: "Orthodontics", value: "orthodontics" },
          { title: "Smile makeover", value: "smile-makeover" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "afterImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle || "Uncategorized",
        media,
      }
    },
  },
})
