import { UserData } from "./interfaces";

export interface item {
    _id: string;
    name: string;
    price: number;
    description: string;
    amount: number;
    imgPath: string;
    type: string;
    __v: number;
}

export interface iten {
    identifier: item;
    amount: number;
    _id: string;
}

export interface Payload {
    _id: string;
    user: string;
    iten: iten[];
}

export interface PurchaseHistoryItem {
    _id: string;
    iten: string;
    timestamp: string;
    valueTotal: number;
}

export interface imageResult {
    assets: ImageAsset[];
    canceled: boolean;
    cancelled: boolean;
}

export interface ImageAsset {
    assetId: string | null;
    base64: string | null;
    duration: number | null;
    exif: object | null;
    fileName: string | null;
    fileSize: number;
    height: number;
    type: string;
    uri: string;
    width: number;
}
export interface ResponseLogin {
    message: string;
    erro: string;
    userData: UserData;
}

