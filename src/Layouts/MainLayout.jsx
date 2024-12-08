import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

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
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;