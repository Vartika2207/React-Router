import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
        <h1>My Home page</h1>
        <p>go to prodcuts <Link to="/products">list</Link></p>
        </>
    );
};

export default HomePage;