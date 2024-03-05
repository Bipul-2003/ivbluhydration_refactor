import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";

function App() {
    return (
        <div className="">
            <Navbar />
            <Container>
                <Home />
            </Container>
            <Footer />
        </div>
    );
}

export default App;
