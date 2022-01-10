import { sfw, nsfw } from "../endpoints.json"

//Help create options interface for the few functions that need it
export interface NekoQueryParams {
    text: string;
}
export interface NekoRequestResults {
    url: string;
}
export interface NekoChatResults {
    response: string;
    url?: string;
}
export interface NekoCatResult {
    cat: string;
}
export interface NekoWhyResult {
    why: string;
}
export interface NekoOwOResult {
    owo: string;
}
export interface NekoFactResult {
    fact: string;
}

export type SFW = keyof typeof sfw;
export type NSFW = keyof typeof nsfw;

export type QueryTypes = "spoiler" | "OwOify" | "eightBall" | "catText" | "fact"

export type SFWTypes = { [name in Exclude<SFW, QueryTypes>]: () => Promise<NekoRequestResults> }
    & { [name in "OwOify" | "spoiler"]: (text: string) => Promise<NekoOwOResult> }
    & { "eightBall": (text: string) => Promise<NekoChatResults> }
    & { "why": () => Promise<NekoWhyResult> }
    & { "catText": () => Promise<NekoCatResult> }
    & { "fact": () => Promise<NekoFactResult> }

export type NSFWTypes = { [name in NSFW]: () => Promise<NekoRequestResults> }