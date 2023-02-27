import Link from "next/link"
import Image from "next/image"
import banner from "./SpelunkingStudiosBanner.png"

export default function NavBar(){
    return(
        <nav>
            <div id="navContents">
                <Image src={banner} width={250} alt="Spelunking Studios"/>
                <div id="navLinks">
                    <Link className="link" href="/another_page">Games</Link>
                    <Link className="link" href="#">About</Link>
                    <Link className="link" href="#">Account</Link>
                </div>
            </div>
        </nav>
    )
}