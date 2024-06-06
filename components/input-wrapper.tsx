//input-wrapper.tsx
import UrlForm from "./urlform"

export default function InputWrapper() {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-7xl font-black text-cornflower-blue">LINKIFY</h1>
                <p className="text-cool-gray">A simple url shortener</p>
                <UrlForm />
            </div>
        </div>

    )
}