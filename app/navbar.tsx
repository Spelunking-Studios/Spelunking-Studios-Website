import Link from "next/link"
import Image from "next/image"
import banner from "./SpelunkingStudiosBanner.png"

export default function NavBar(){
    return(
        <div className="navbar">
            <Image src={banner} width={250} alt="Spelunking Studios"/>
            <nav className="navLinks">
                <Link className="link" href="/another_page">Games</Link>
                <Link className="link" href="#">About</Link>
                <Link className="link" href="#">Number3</Link>
            </nav>
            <button>Account</button>
        </div>
    )
}