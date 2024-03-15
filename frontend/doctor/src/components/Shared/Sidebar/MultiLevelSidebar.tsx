const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-black w-64 flex-shrink-0">
            <div className="flex items-center justify-center h-16 border-b border-gray-700">
                Logo
            </div>
            <nav className="p-4">
                <ul>
                    <li>
                        <a href="http://localhost:3000/doctor/calendar">
                            <a className="block py-2">Lịch khám bệnh nhân</a>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/doctor/timetable">
                            <a className="block py-2">Quản lý lịch khám</a>
                        </a>
                    </li>
                    <li>
                        <a href="/settings">
                            <a className="block py-2">Quản lý hồ sơ khám</a>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
