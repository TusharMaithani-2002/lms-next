import { ReactNode } from "react";
import SideBar from "./_components/SideBar";
import NavBar from "./_components/NavBar";

const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
        <div className="h-[80px] fixed inset-y-0 w-full z-50">
            <NavBar />
        </div>
      <div className="hidden md:flex w-56 flex-clo fixed inset-y-0 z-50">
        <SideBar />
      </div>
      {/* we are creating this main as our side bar is 56units wide and we want are children to start after the sidebar */}
      <main className="md:pl-56 h-full">{children}</main>
    </div>
  );
};

export default DashBoardLayout;
