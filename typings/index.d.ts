//List all the functions
declare class NekoClient {
  getSFWTickle():Promise<NekoClient.NekoRequestResults>;
  getSFWSlap():Promise<NekoClient.NekoRequestResults>;
  getSFWSmug():Promise<NekoClient.NekoRequestResults>;
  getSFWBaka():Promise<NekoClient.NekoRequestResults>;
  getSFWPoke():Promise<NekoClient.NekoRequestResults>;
  getSFWPat():Promise<NekoClient.NekoRequestResults>;
  getSFWNeko():Promise<NekoClient.NekoRequestResults>;
  getSFWNekoGif():Promise<NekoClient.NekoRequestResults>;
  getSFWMeow():Promise<NekoClient.NekoRequestResults>;
  getSFWLizard():Promise<NekoClient.NekoRequestResults>;
  getSFWKiss():Promise<NekoClient.NekoRequestResults>;
  getSFWHug():Promise<NekoClient.NekoRequestResults>;
  getSFWFoxGirl():Promise<NekoClient.NekoRequestResults>;
  getSFWFeed():Promise<NekoClient.NekoRequestResults>;
  getSFWCuddle():Promise<NekoClient.NekoRequestResults>;
  getSFWWhy():Promise<NekoClient.NekoWhyResult>;
  getSFWCatText():Promise<NekoClient.NekoCatResult>;
  getSFWOwOify(opts: NekoClient.NekoQueryParams):Promise<NekoClient.NekoOwOResult>;
  getSFWChat(opts: NekoClient.NekoChatParams):Promise<NekoClient.NekoChatResults>;
  getSFW8Ball(opts: NekoClient.NekoQueryParams):Promise<NekoClient.NekoChatResults>;
  getSFWFact():Promise<NekoClient.NekoChatResults>;
  getSFWKemonomimi():Promise<NekoClient.NekoRequestResults>;
  getSFWHolo():Promise<NekoClient.NekoRequestResults>;
  getNSFWRandomHentaiGif():Promise<NekoClient.NekoRequestResults>;
  getNSFWPussy():Promise<NekoClient.NekoRequestResults>;
  getNSFWNekoGif():Promise<NekoClient.NekoRequestResults>;
  getNSFWNeko():Promise<NekoClient.NekoRequestResults>;
  getNSFWLesbian():Promise<NekoClient.NekoRequestResults>;
  getNSFWKuni():Promise<NekoClient.NekoRequestResults>;
  getNSFWCumsluts():Promise<NekoClient.NekoRequestResults>;
  getNSFWClassic():Promise<NekoClient.NekoRequestResults>;
  getNSFWBoobs():Promise<NekoClient.NekoRequestResults>;
  getNSFWBJ():Promise<NekoClient.NekoRequestResults>;
  getNSFWAnal():Promise<NekoClient.NekoRequestResults>;
  getNSFWAvatar():Promise<NekoClient.NekoRequestResults>;
  getNSFWYuri():Promise<NekoClient.NekoRequestResults>;
  getNSFWTrap():Promise<NekoClient.NekoRequestResults>;
  getNSFWTits():Promise<NekoClient.NekoRequestResults>;
  getNSFWGirlSoloGif():Promise<NekoClient.NekoRequestResults>;
  getNSFWGirlSolo():Promise<NekoClient.NekoRequestResults>;
  getNSFWSmallBoobs():Promise<NekoClient.NekoRequestResults>;
  getNSFWPussyWankGif():Promise<NekoClient.NekoRequestResults>;
  getNSFWPussyArt():Promise<NekoClient.NekoRequestResults>;
  getNSFWKemonomimi():Promise<NekoClient.NekoRequestResults>;
  getNSFWKitsune():Promise<NekoClient.NekoRequestResults>;
  getNSFWKeta():Promise<NekoClient.NekoRequestResults>;
  getNSFWHolo():Promise<NekoClient.NekoRequestResults>;
  getNSFWHoloEro():Promise<NekoClient.NekoRequestResults>;
  getNSFWHentai():Promise<NekoClient.NekoRequestResults>;
  getNSFWFutanari():Promise<NekoClient.NekoRequestResults>;
  getNSFWFemdom():Promise<NekoClient.NekoRequestResults>;
  getNSFWFeetGif():Promise<NekoClient.NekoRequestResults>;
  getNSFWEroFeet():Promise<NekoClient.NekoRequestResults>;
  getNSFWFeet():Promise<NekoClient.NekoRequestResults>;
  getNSFWEro():Promise<NekoClient.NekoRequestResults>;
  getNSFWEroKitsune():Promise<NekoClient.NekoRequestResults>;
  getNSFWEroKemonomimi():Promise<NekoClient.NekoRequestResults>;
  getNSFWEroNeko():Promise<NekoClient.NekoRequestResults>;
  getNSFWEroYuri():Promise<NekoClient.NekoRequestResults>;
  getNSFWCumArts():Promise<NekoClient.NekoRequestResults>;
  getNSFWBlowJob():Promise<NekoClient.NekoRequestResults>;
  getNSFWPussyGif():Promise<NekoClient.NekoRequestResults>;
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

}
