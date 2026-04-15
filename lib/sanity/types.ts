export type SanityImageAsset = {
  _ref: string
  _type: "reference"
}

export type SanityImage = {
  _type: "image"
  asset?: SanityImageAsset
}

export type DentalCase = {
  _id: string
  title: string
  description: string
  beforeImage: SanityImage
  afterImage: SanityImage
  category?: string | null
}
