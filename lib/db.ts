// db.ts
import { sql } from "@vercel/postgres";
import { z } from "zod";

// async function isValidUrl(url: string) {
//     try {
//         console.time("get")
//         const response = await fetch(url);
//         console.timeEnd("get")
//         return response.ok; // Return true if response is ok
//     } catch (e) {
//         console.log(e);
//         return false;
//     }
// }

async function shortUrlExists(shortUrl: string) {
    const result = await sql`SELECT * FROM urls WHERE short_url = ${shortUrl}`;
    return result.rowCount > 0; // Return true if rowCount > 0
}

export async function createShortUrl(shortUrl: string, longUrl: string) {
    console.time("insertdb")
    const myschema = z.string().url()
    if (!myschema.parse(longUrl)) return false;

    if (await shortUrlExists(shortUrl)) return false;

    try {
        await sql`INSERT INTO urls(short_url, long_url) VALUES (${shortUrl}, ${longUrl})`;
        console.timeEnd("insertdb")
        return true; // Return true if insertion is successful
    } catch (error) {
        console.error(error);
        return false; // Return false if insertion fails
    }
}

export async function getLongUrl(short_url:string) {
    try {
        const result = await sql`SELECT long_url FROM urls WHERE short_url = ${short_url}`;
        return result.rows[0].long_url
    } catch (e) {
        console.log(e)
    }
    
}

// Usage
// (async () => {
//     console.log(await isValidUrl("https://google.com"));
//     console.log(await createShortUrl('efdd', 'https://youtube.com'));
// })(); // o erro era nisso aqui