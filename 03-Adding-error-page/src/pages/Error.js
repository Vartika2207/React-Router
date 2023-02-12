import MainNavigation from "../components/MainNavigation";


function ErrorPage() {
    return (
        <>
           <MainNavigation/>
           <main>
               <h1>An error occurred :X</h1>
               <h3>Can't find the page</h3>
           </main>
        </>
    );
};

export default ErrorPage;