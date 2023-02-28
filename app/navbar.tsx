import Link from "next/link"
import Image from "next/image"
import banner from "app/SpelunkingStudiosBanner.png"

export default function NavBar(){
    return(
        <nav>
            <div id="navContents">
                <a href="/">
                    <Image src={banner} width={250} alt="Spelunking Studios"/>
                </a>
                <div id="navLinks">
                    <Link className="link" href="/games">Games</Link>
                    <Link className="link" href="/about">About</Link>
                    <Link className="link" href="/contact_us">Contact Us</Link>
                    <Link className="link" href="/account">Account</Link>
                </div>
            </div>
        </nav>
    )
}