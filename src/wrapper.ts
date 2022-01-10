import { IncomingMessage } from 'node:http';
import { get } from 'node:https';
import { URL } from 'node:url';
import { SFW, NSFW, SFWTypes, NSFWTypes } from "./typings/index";
import { sfw, nsfw } from "./endpoints.json"

function getContent(url: string | URL): Promise<unknown> {
    return new Promise((resolve, reject) =>
        get(url, (res: IncomingMessage) => {
            if (!res.statusCode?.toString()?.startsWith('2')) {
                res.resume();
                reject(new Error(`Request failed with status code: ${res.statusCode}`));
            }

            let rawData = '';
            res.setEncoding('utf8');
            res.on('data', (data: string) => rawData += data);
            res.on('end', () => resolve(JSON.parse(rawData)));
        }).on('error', reject),
    );
}

export default class NekoClient {
    sfw: SFWTypes = {} as SFWTypes;
    nsfw: NSFWTypes = {} as NSFWTypes;
    constructor() {
        (Object.keys(sfw) as Array<SFW>).forEach(async (endpoint: SFW) => {
            this.sfw[endpoint] = async function (queryParams: string) {
                const url = new URL(`https://nekos.life/api/v2${sfw[endpoint]}`);
                url.search = queryParams !== undefined ? new URLSearchParams(`text=${queryParams}`).toString() : "";
                return await getContent(url.toString());
            } as any;
        });

        (Object.keys(nsfw) as Array<NSFW>).forEach(async (endpoint: NSFW) => {
            this.nsfw[endpoint] = async function () {
                return await getContent(`https://nekos.life/api/v2${nsfw[endpoint]}`);
            } as any;
        });
    }
}