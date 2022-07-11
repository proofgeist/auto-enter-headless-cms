/**
* Generated by @proofgeist/fmdapi package
* 2022-07-10 07:56 pm -07:00
* https://github.com/proofgeist/fmdapi
* DO NOT EDIT THIS FILE DIRECTLY. Changes may be overritten
*/

import { z } from "zod";
import { DataApi } from "@proofgeist/fmdapi";
export const ZFiles = z.object({
    "Container": z.string(),
    "Id": z.string(),
    "FileName": z.string()
});
export type TFiles = z.infer<typeof ZFiles>;
if (!process.env.FM_DATABASE)
    throw new Error("Missing env var: FM_DATABASE");
if (!process.env.FM_SERVER)
    throw new Error("Missing env var: FM_SERVER");
if (!process.env.OTTO_API_KEY)
    throw new Error("Missing env var: OTTO_API_KEY");
export const client = DataApi<any, TFiles>({
    auth: { apiKey: process.env.OTTO_API_KEY },
    db: process.env.FM_DATABASE,
    server: process.env.FM_SERVER,
    layout: "files_web"
}, {
    fieldData: ZFiles
});
