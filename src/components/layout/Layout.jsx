import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="relative">
            <Header />
            {
                children
            }
            <Footer />
        </div>);
}

export default Layout;