'use client';

import Link from "next/link";
import { Button } from "../ui/button";

export const Hero = () => {
    return (
        <div className="flex flex-col items-center mx-56 gap-9">
            <h1 className="font-extrabold text-6xl text-center leading-tight">
                <span className="text-[#f56551]">AI-Powered Rules</span> for a Moving World
            </h1>
            <p className="text-xl text-center text-gray-500">
                Utilize AI and real-time web data to track policy changes, migration trends and global disruptions
            </p>
            <Link href={'/live-map'}>
                <Button className="px-6 py-3 rounded text-lg transition">Try the Live Map</Button>
            </Link>
        </div>
    )
}