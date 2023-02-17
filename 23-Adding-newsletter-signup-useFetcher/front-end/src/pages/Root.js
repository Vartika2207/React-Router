import { Outlet, useNavigate } from "react-router-dom";
import MainNavigation from '../components/MainNavigation';

function RootLayout() {

    // const navigation = useNavigate();


    return (
        <>
           <MainNavigation/>
           <main>
            {/* {navigation.state === 'loading' && <p>Loading ... </p>} */}

            {/* below content of child route is rendered */}
               <Outlet/>
           </main>
        </>
    );
};

export default RootLayout;