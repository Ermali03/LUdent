import { createImageUrlBuilder } from "@sanity/image-url"

import {
  sanityDataset,
  sanityProjectId,
} from "@/lib/sanity/env"
import type { SanityImage } from "@/lib/sanity/types"

const builder = createImageUrlBuilder({
  projectId: sanityProjectId || "missing-project-id",
  dataset: sanityDataset || "production",
})

export function urlForImage(source: SanityImage) {
  return builder.image(source).auto("format").fit("crop")
}
