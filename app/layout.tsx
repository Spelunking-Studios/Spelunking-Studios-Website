import "styles/reset.css";
import "styles/global.css";
import NavBar from "./navbar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <title>Spelunking Studios</title>
            <body>
                <NavBar/>
                {children}
            </body>
        </html>
    );
}
