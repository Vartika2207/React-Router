import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";


function RootLayout() {
    return (
        <>
           <MainNavigation/>
           <main>
              {/* outlet us where child route should be rendered */}
              <Outlet/>
           </main>
        </>
    )
};

export default RootLayout;