"use client";
import Link from "next/link"
import Image from "next/image"
import banner from "app/SpelunkingStudiosBannerWhite.png"
import { useState } from "react"
import { useRouter } from "next/router";

export default function NavBar(){
    const [mobileLinksShown, setMobileLinksShown] = useState(false);
    const router = useRouter();

    function toggleMobile(){
        setMobileLinksShown(!mobileLinksShown);
        console.log("hello");
    }

    return(
        <div>
            <nav>
                <div id="navContents">
                    <a href="/">
                        <Image src={banner} width={250} alt="Spelunking Studios" style={{objectFit: "contain"}}/>
                    </a>
                    <div id="navLinks">
                        <Link id="nav_games" className="link" href="/games">Games</Link>
                        <Link id="nav_about" className="link" href="/about">About</Link>
                        <Link id="nav_contact" className="link" href="/contact_us">Contact Us</Link>
                        <Link id="nav_account" className="link" href="/account">Account</Link>
                    </div>
                </div>
                <div id="mobContainer" style={{display: mobileLinksShown ? "flex" : "none", opacity: mobileLinksShown ? "100%" : "0%"}}>
                    <div id="mobileLinks">
                        <Link id="nav_games" className="link mobile" href="/games" onClick={toggleMobile}>Games</Link>
                        <Link id="nav_about" className="link mobile" href="/about" onClick={toggleMobile}>About</Link>
                        <Link id="nav_contact" className="link mobile" href="/contact_us" onClick={toggleMobile}>Contact Us</Link>
                        <Link id="nav_account" className="link mobile" href="/account" onClick={toggleMobile}>Account</Link>
                    </div>
                </div>
                
                <i className="material-symbols-outlined" id="mobileHamburger" onClick={toggleMobile}>{mobileLinksShown ? "close" : "menu"}</i>
            </nav>
        </div>
        
    )
}