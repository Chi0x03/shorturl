import UrlForm from "./urlform"

export default function InputWrapper(){
    return (
        <div className="flex">
        <div className="place-content-center p-16 md:w-2/5">
            <h1 className="text-3xl">Simple URL shortener</h1>
            <UrlForm/>
            <p className="w-full max-w-80">This is a personal project for training and showing my skills with Next.js, Vercel & Postgres.</p>
        </div>
        </div>
    )
}