//List all the functions
declare class NekoClient {
  sfw: {
    "8Ball"(opts: NekoClient.NekoQueryParams):Promise<NekoClient.NekoChatResults>;
    OwOify(opts: NekoClient.NekoQueryParams):Promise<NekoClient.NekoOwOResult>;
    avatar():Promise<NekoClient.NekoRequestResults>;
    baka():Promise<NekoClient.NekoRequestResults>;
    catText():Promise<NekoClient.NekoCatResult>;
    chat(opts: NekoClient.NekoChatParams):Promise<NekoClient.NekoChatResults>;
    cuddle():Promise<NekoClient.NekoRequestResults>;
    fact():Promise<NekoClient.NekoFactResult>;
    feed():Promise<NekoClient.NekoRequestResults>;
    foxGirl():Promise<NekoClient.NekoRequestResults>;
    gecg():Promise<NekoClient.NekoRequestResults>;
    goose():Promise<NekoClient.NekoRequestResults>;
    holo():Promise<NekoClient.NekoRequestResults>;
    hug():Promise<NekoClient.NekoRequestResults>;
    kemonomimi():Promise<NekoClient.NekoRequestResults>;
    kiss():Promise<NekoClient.NekoRequestResults>;
    lizard():Promise<NekoClient.NekoRequestResults>;
    meow():Promise<NekoClient.NekoRequestResults>;
    neko():Promise<NekoClient.NekoRequestResults>;
    nekoGif():Promise<NekoClient.NekoRequestResults>;
    pat():Promise<NekoClient.NekoRequestResults>;
    poke():Promise<NekoClient.NekoRequestResults>;
    slap():Promise<NekoClient.NekoRequestResults>;
    smug():Promise<NekoClient.NekoRequestResults>;
    spoiler(opts: NekoClient.NekoQueryParams):Promise<NekoClient.NekoOwOResult>;
    tickle():Promise<NekoClient.NekoRequestResults>;
    wallpaper():Promise<NekoClient.NekoRequestResults>;
    why():Promise<NekoClient.NekoWhyResult>;
    woof():Promise<NekoClient.NekoRequestResults>;
  }
  nsfw: {
    anal():Promise<NekoClient.NekoRequestResults>;
    avatar():Promise<NekoClient.NekoRequestResults>;
    bJ():Promise<NekoClient.NekoRequestResults>;
    blowJob():Promise<NekoClient.NekoRequestResults>;
    boobs():Promise<NekoClient.NekoRequestResults>;
    classic():Promise<NekoClient.NekoRequestResults>;
    cumArts():Promise<NekoClient.NekoRequestResults>;
    cumsluts():Promise<NekoClient.NekoRequestResults>;
    ero():Promise<NekoClient.NekoRequestResults>;
    eroFeet():Promise<NekoClient.NekoRequestResults>;
    eroKemonomimi():Promise<NekoClient.NekoRequestResults>;
    eroKitsune():Promise<NekoClient.NekoRequestResults>;
    eroNeko():Promise<NekoClient.NekoRequestResults>;
    eroYuri():Promise<NekoClient.NekoRequestResults>;
    feet():Promise<NekoClient.NekoRequestResults>;
    feetGif():Promise<NekoClient.NekoRequestResults>;
    femdom():Promise<NekoClient.NekoRequestResults>;
    futanari():Promise<NekoClient.NekoRequestResults>;
    girlSolo():Promise<NekoClient.NekoRequestResults>;
    girlSoloGif():Promise<NekoClient.NekoRequestResults>;
    hentai():Promise<NekoClient.NekoRequestResults>;
    holo():Promise<NekoClient.NekoRequestResults>;
    holoEro():Promise<NekoClient.NekoRequestResults>;
    kemonomimi():Promise<NekoClient.NekoRequestResults>;
    keta():Promise<NekoClient.NekoRequestResults>;
    kitsune():Promise<NekoClient.NekoRequestResults>;
    kuni():Promise<NekoClient.NekoRequestResults>;
    lesbian():Promise<NekoClient.NekoRequestResults>;
    neko():Promise<NekoClient.NekoRequestResults>;
    nekoGif():Promise<NekoClient.NekoRequestResults>;
    orgasmEmote():Promise<NekoClient.NekoRequestResults>;
    pussy():Promise<NekoClient.NekoRequestResults>;
    pussyArt():Promise<NekoClient.NekoRequestResults>;
    pussyGif():Promise<NekoClient.NekoRequestResults>;
    pussyWankGif():Promise<NekoClient.NekoRequestResults>;
    randomHentaiGif():Promise<NekoClient.NekoRequestResults>;
    smallBoobs():Promise<NekoClient.NekoRequestResults>;
    tits():Promise<NekoClient.NekoRequestResults>;
    trap():Promise<NekoClient.NekoRequestResults>;
    yuri():Promise<NekoClient.NekoRequestResults>;
  }
}

export = NekoClient;


declare namespace NekoClient {
  //Help create options interface for the few functions that need it
  export interface NekoQueryParams {
    text: string;
  }
  export interface NekoChatParams extends NekoQueryParams {
    owo?: boolean;
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
}
