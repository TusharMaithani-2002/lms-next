import { ReactNode } from "react";
import SideBar from "./_components/SideBar";

const DashBoardLayout = ({children}:{children:ReactNode}) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex w-56 flex-clo fixed inset-y-0 z-50">
                <SideBar />
            </div>
            {children}
        </div>
    )
}

export default DashBoardLayout;