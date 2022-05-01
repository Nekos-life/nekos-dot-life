//List all the functions
declare class NekoClient {
    tickle():Promise<NekoClient.NekoRequestResults>;
    slap():Promise<NekoClient.NekoRequestResults>;
    smug():Promise<NekoClient.NekoRequestResults>;
    baka():Promise<NekoClient.NekoRequestResults>;
    poke():Promise<NekoClient.NekoRequestResults>;
    pat():Promise<NekoClient.NekoRequestResults>;
    neko():Promise<NekoClient.NekoRequestResults>;
    nekoGif():Promise<NekoClient.NekoRequestResults>;
    meow():Promise<NekoClient.NekoRequestResults>;
    lizard():Promise<NekoClient.NekoRequestResults>;
    kiss():Promise<NekoClient.NekoRequestResults>;
    hug():Promise<NekoClient.NekoRequestResults>;
    foxGirl():Promise<NekoClient.NekoRequestResults>;
    feed():Promise<NekoClient.NekoRequestResults>;
    cuddle():Promise<NekoClient.NekoRequestResults>;
    woof():Promise<NekoClient.NekoRequestResults>;
    why():Promise<NekoClient.NekoWhyResult>;
    catText():Promise<NekoClient.NekoCatResult>;
    OwOify(opts: NekoClient.NekoQueryParams):Promise<NekoClient.NekoOwOResult>;
    eightBall(opts: NekoClient.NekoQueryParams):Promise<NekoClient.NekoChatResults>;
    fact():Promise<NekoClient.NekoFactResult>;
    kemonomimi():Promise<NekoClient.NekoRequestResults>;
    holo():Promise<NekoClient.NekoRequestResults>;
    spoiler(opts: NekoClient.NekoQueryParams):Promise<NekoClient.NekoOwOResult>;
    avatar():Promise<NekoClient.NekoRequestResults>;
    waifu():Promise<NekoClient.NekoRequestResults>;
    gecg():Promise<NekoClient.NekoRequestResults>;
    goose():Promise<NekoClient.NekoRequestResults>;
    wallpaper():Promise<NekoClient.NekoRequestResults>;
}

export = NekoClient;


declare namespace NekoClient {
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
}
