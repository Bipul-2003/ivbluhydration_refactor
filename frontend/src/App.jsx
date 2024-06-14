import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { StoreProvider } from "./store/store.reducer";
function App() {
    return (
        <div className="">
            <Navbar />
            <Container>
            <StoreProvider>
                <Outlet />
                </StoreProvider>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
