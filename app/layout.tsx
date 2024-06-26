import "styles/reset.css";
import "styles/global.css";
import NavBar from "./navbar";
import Footer from "./footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Spelunking Studios</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=optional"
                />
            </head>
            <body>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
