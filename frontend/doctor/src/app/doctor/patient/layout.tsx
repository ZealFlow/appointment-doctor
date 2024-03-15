"use client";
import { Providers } from "../../provider";
import { TabCalendar } from "../../../components/Tab/TabCalendar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <Providers>
                <TabCalendar/>
                {children}
            </Providers>
        </div>
    );
}
