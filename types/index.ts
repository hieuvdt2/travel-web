export interface Image {
  data: Data
}


export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Medium {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Large {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}




export interface Destination {
  id: number
  attributes: Attributes
}

export interface Attributes {
  content: string
  name: string
  location: string
  description: string
  longDescription: string
  category: string
  region: string
  bestTimeToVisit: string
  suggestedDuration: string
  localFood: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: Image
}


export interface Data {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
  medium: Medium
  small: Small
  large: Large
}




export interface Foods{
  id: number
  attributes: Food
}


export interface Food {
  name: string
  description: string
  longDescription: string
  origin: string
  regions: string
  ingredients: string | ''
  howToEat: string
  prepTime: string
  type: string
  bestPlacesToTry: string
  price: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: Image
}

export interface Banners{
  id: number;
  attributes: Banner;
}

export interface Banner {
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: Image
}


export interface TraditionalVillages{
  id: number;
  attributes: TraditionalVillage;
}
export interface TraditionalVillage {
  name: string
  location: string
  description: string
  region: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  origin:string
  image: Image
}

///
export interface Heritages{
  id: number;
  attributes: Heritage;
}
export interface Heritage {
  name: string
  location: string
  description: string
  region: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  origin:string
  image: Image
}
export interface Festivals{
  id: number;
  attributes: Festival;
}
export interface Festival {
  name: string
  location: string
  description: string
  region: string
  createdAt: string
  origin:string
  updatedAt: string
  publishedAt: string
  image: Image
}

// Am nhạc dân gian
export interface Musicals{
  id: number;
  attributes: Musical;
}
export interface Musical {
  name: string
  location: string
  description: string
  region: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  origin:string
  image: Image
}