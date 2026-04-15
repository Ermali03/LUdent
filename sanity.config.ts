import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

import {
  sanityDataset,
  sanityProjectId,
  sanityStudioPath,
} from "./lib/sanity/env"
import { schemaTypes } from "./sanity/schemaTypes"

export default defineConfig({
  name: "default",
  title: "LUDent Sanity Studio",
  projectId: sanityProjectId || "missing-project-id",
  dataset: sanityDataset || "production",
  basePath: sanityStudioPath,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
