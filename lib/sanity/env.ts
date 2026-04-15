export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ""
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ""
export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-15"

export const hasSanityEnv = Boolean(sanityProjectId && sanityDataset)
export const sanityStudioPath = "/studio"
