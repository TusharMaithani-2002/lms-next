import NavBarRoutes from "@/components/NavBarRoutes";
import MobileSideBar from "./MobileSideBar";

const NavBar = () => {
    return (
        <div className="p-4 border-b h-full w-full flex items-center bg-white shadow-sm">
            <MobileSideBar />
            <NavBarRoutes />
        </div>
    )
};

export default NavBar;