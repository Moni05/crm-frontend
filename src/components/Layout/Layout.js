import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({children}){

    return (
        <div className="layout">
            <header className="header">
                <Header />
            </header>

            <main className="main">{children}</main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}