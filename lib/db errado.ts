import { sql } from "@vercel/postgres";

async function isValidUrl(url: string) {
    try {
        const response = await fetch(url)
        if (response.ok) return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}

async function shortUrlExists(shortUrl: string) {
    const result = await sql`SELECT * FROM urls WHERE short_url = ${shortUrl}`;
    if (result.rowCount > 0) {
        console.log(result.rowCount)
        return true
    } else {
        return false
    }
}

async function createShortUrl(shortUrl: string, longUrl: string) {
    const validUrl = await isValidUrl(longUrl); 
    if (!validUrl) return false

    // TODO: checar se já existe no banco de dados
    // if (await shortUrlExists(shortUrl)) return false

    const result = await sql`INSERT INTO urls(short_url, long_url) VALUES (${shortUrl}, ${longUrl})`
    // return result ? true : false
}

// const a = createShortUrl('efdd', 'https://youtube.com')
(async () => {
    console.log(await shortUrlExists('abcd'))
})()
// console.log(a) // não retornou true nem false, mas gravou no banco de dados
// console.log(shortUrlExists('abcd'))