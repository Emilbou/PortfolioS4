import Pocketbase from 'pocketbase';
import type {
    ProjetsResponse
} from "@/pocketbase-types";

export const pb = new Pocketbase('http://127.0.0.1:8090')


export async function alldata() {
    const alldata = await pb.collection('Projets').getFullList<ProjetsResponse>();
    return alldata;
}