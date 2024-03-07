export interface User {
    username: string
}

export interface Gemstone {
    id: number,
    name: string,
    polishedimg: string,
    roughimg: string
}

export interface GemstoneWithDetails {
    id: number,
    name: string,
    polished: string,
    roughimg: string,
    mineral: string | null,
    color: string | null,
    mohshardness: string | null,
    specificgravity: string | null,
    refractiveindex: string | null,
    birefringence: string | null
}

export interface Mineral {
    id: number,
    name: string
}
