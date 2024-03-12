export interface DataRequiredForCollection {
    name: string,
    type: string,
    color: string,
    file?: FileData
}

export interface FileData {
    filename: string,
    path: string,
    mimetype: string,
    size: number
}

export interface UserCollectionData {
    name: string,
    type: string,
    color: string,
    addedat: string,
    imageid: string | null,
    ispublic: boolean,
    filename: string,
    filepath: string,
    mimetype: string,
    size: string
}
