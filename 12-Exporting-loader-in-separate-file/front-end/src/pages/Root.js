import { Outlet } from "react-router-dom";
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
    return (
        <>
           <MainNavigation/>
           <main>
            {/* below content of child route is rendered */}
               <Outlet/>
           </main>
        </>
    );
};

export default RootLayout;