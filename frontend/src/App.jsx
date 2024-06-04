import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <div className="">
            <Navbar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </div>
    );
}

export default App;
