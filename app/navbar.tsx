import Link from "next/link"
import Image from "next/image"
import banner from "app/SpelunkingStudiosBannerWhite.png"

export default function NavBar(){
    
    /*if(typeof window !== "undefined"){
        const pathMap = {
            '/games': document.getElementById('nav_games')?.style,
            '/about': document.getElementById('nav_about')?.style, 
            '/contact_us': document.getElementById('nav_contact')?.style, 
            '/account': document.getElementById('nav_account')?.style
        }

        if(pathMap[location.pathname]){
            pathMap[location.pathname].setProperty('--underline-active', '100%');
        }
    }*/

    return(
        <nav>
            <div id="navContents">
                <a href="/">
                    <Image src={banner} width={250} alt="Spelunking Studios" style={{objectFit: "contain"}}/>
                </a>
                <div id="navLinks">
                    <Link id="nav_games"  className="link" href="/games">Games</Link>
                    <Link id="nav_about" className="link" href="/about">About</Link>
                    <Link id="nav_contact" className="link" href="/contact_us">Contact Us</Link>
                    <Link id="nav_account" className="link" href="/account">Account</Link>
                </div>
            </div>
        </nav>
    )
}