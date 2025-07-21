export const galleryQuery = `
    *[_type == "gallery"]{
        _id,
        title,
        description,
        "images": images[].asset->url
    }
`

export const portfolioQuery = `
    *[_type == "portfolio"]{
        _id,
        title,
        location,
        type,
        year,
        size,
        bedrooms,
        bathrooms,
        description,
        budget_range,
        timeline,
        "images": images[].asset->url
    }
`

export const communitiesQuery = `
    *[_type == "communities"]{
        _id,
        name,
        description,
        location,
        "image": image.asset->url
    }
`