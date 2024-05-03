import { createShortUrl } from '@/lib/db';
import { createRandomString } from '@/lib/create-random-string';


export default function UrlForm() {
    async function createUrl(formData) {
        "use server";
        await createShortUrl(createRandomString(4), formData.get("url"));
    }
    return (
        <form className="py-4" action={createUrl}>
            <input className="border-2 border-slate-400 rounded-md p-2" type="text" name="url" placeholder="Insert your url" />
            <button type="submit">Shorten</button>
            {/* https://flowbite.com/docs/forms/search-input/ */}
        </form>
    )
}