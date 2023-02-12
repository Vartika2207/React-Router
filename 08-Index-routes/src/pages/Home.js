import { Link, useNavigate } from "react-router-dom";

function HomePage() {

    // used to switch to diff route from inside code
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }; 

    return (
        <>
        <h1>My Home page</h1>
        <p>go to prodcuts <Link to="products">list</Link></p>
        <p><button onClick={navigateHandler}>Navigate</button></p>
        </>
    );
};

export default HomePage;