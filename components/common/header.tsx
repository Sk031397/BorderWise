'use client';

import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Header(){
    return (
        <header className="p-2 flex justify-between items-center px-5 shadow-sm">
            <Link href={'/'}>
                <Image width={75} height={75} priority src={'/logo.png'} alt="logo"/>
            </Link>
            <nav className="flex gap-6">
                <Link href={"#features"}>Features</Link>
                <Link href={"#use-cases"}>Use Cases</Link>
            </nav>
            <ModeToggle/>
        </header>
    )
}