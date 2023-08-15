import "./globalcss"
import React, { ReactNode } from "react";

export const metadata =  {
    title: "DQC",
    description: "Digitized Quality Control"
};
interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function RootLayout({
    children,
}; {
    children: React.ReactNode;
})  {
    return (
        <html lang="en">
            <body className="bg-zinc-900 text-zinc-200">
                <div className="flex felx-col gap-10 items-center p-6">
                    {/* <input classname */}
                    <div className="flex flex-col items-centre w-full {...props}">{children}</div>
                </div>
            </body>
        </html>
    );
}