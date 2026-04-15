import "server-only"

import { createClient, type QueryParams } from "next-sanity"

import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from "@/lib/sanity/env"

export const sanityClient = createClient({
  projectId: sanityProjectId || "missing-project-id",
  dataset: sanityDataset || "production",
  apiVersion: sanityApiVersion,
  useCdn: true,
  perspective: "published",
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
}: {
  query: string
  params?: QueryParams
  revalidate?: number
}) {
  return sanityClient.fetch<QueryResponse>(query, params, {
    next: { revalidate },
  })
}
