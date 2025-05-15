import { LiveMap } from "@/components/live-map";

export default function LiveMapPage(){
    return (
        <div className="p-5 sm:px-10 md:px-20 font-sans min-h-screen">
            <p className="max-w-2xl mx-auto text-center text-slate-400 mb-10">
                Explore global border activity, refugee flows, and policy changes in real-time
            </p>
            <div className="max-w-6xl mx-auto">
                <LiveMap/>
            </div>
        </div>
    )
}