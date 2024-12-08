import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";

const MainLayout = () => {
    return (
        <div className="noto-sans-font">
            <header>
                <nav>
                    <Navber></Navber>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;