'use client';

import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Provider({children}:{children:ReactNode}){
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <TooltipProvider>
                {children}
            </TooltipProvider>
        </ThemeProvider>
    )
}