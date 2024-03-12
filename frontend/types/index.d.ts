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
    polishedimg: string,
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

export interface MineralWithDetails {
    id: number,
    name: string,
    color?: string,
    streak?: string,
    luster?: string,
    diaphaneity?: string,
    cleavage?: string,
    mohshardness?: string,
    specificgravity?: string,
    diagnosticproperties?: string,
    crystalsystem?: string,
    uses?: string,
    chemicalclassification?: string
}

export interface ImagePrediction {
    class: string,
    class_id: number,
    confidence: number,
    detection_id: string,
    height: number,
    width: number,
    x: number,
    y: number
}

export interface UserCollectionItem {
    name: string,
    type: string,
    color: string,
    addedat: string,
    filepath: string,
    id: string,
}
