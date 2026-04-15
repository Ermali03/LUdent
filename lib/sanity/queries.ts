import { groq } from "next-sanity"

export const DENTAL_CASES_QUERY = groq`
  *[_type == "dentalCase"] | order(_createdAt desc) {
    _id,
    title,
    description,
    category,
    beforeImage,
    afterImage
  }
`
