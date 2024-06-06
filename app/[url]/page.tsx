// page.ts
'use server'
import { redirect } from "next/navigation";
import { getLongUrl } from "@/lib/db";

// fazer a condição pra caso não exista
export default async function Page({ params }: { params: { url: string } }) {
    redirect(await getLongUrl(params.url))
}