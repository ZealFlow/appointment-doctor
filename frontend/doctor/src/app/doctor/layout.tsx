"use client";

import { Providers } from "../provider";
import { useEffect, useState } from "react";
import HeaderDoctor from '../../components/Shared/Header/HeaderDoctor';
import Sidebar from "../../components/Shared/Sidebar/MultiLevelSidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <html lang="en">
            <body>
                <Providers>
                    <div>
                        <div className="flex">
                            <div>
                                <Sidebar />
                            </div>
                            <div className="w-screen">
                                <HeaderDoctor />
                                {children}
                            </div>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
