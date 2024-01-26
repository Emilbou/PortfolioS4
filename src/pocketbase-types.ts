import type PocketBase from 'pocketbase';
import type { RecordService } from 'pocketbase';

export enum Collections {
    Projets = "projets",
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
    id: RecordIdString;
    created: IsoDateString;
    updated: IsoDateString;
    collectionId: string;
    collectionName: Collections;
    expand?: T;
};

// Record type for Projets
export type ProjetsRecord = {
    text?: string;
    image?: string;  // Assuming the image is stored as a string URL
};

// Response type for Projets
export type ProjetsResponse<Texpand = unknown> = Required<ProjetsRecord> & BaseSystemFields<Texpand>;

// Types containing all Records and Responses
export type CollectionRecords = {
    Projets: ProjetsRecord;
};

export type CollectionResponses = {
    Projets: ProjetsResponse;
};