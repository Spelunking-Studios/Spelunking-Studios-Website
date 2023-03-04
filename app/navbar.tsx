"use client";
import Link from "next/link"
import Image from "next/image"
import banner from "app/SpelunkingStudiosBannerWhite.png"
import { useState, useEffect } from "react"

export default function NavBar(){
    const [mobileLinksShown, setMobileLinksShown] = useState(false);

    function toggleMobile(){
        setMobileLinksShown(!mobileLinksShown);
    }

    return(
        <div>
            <nav>
                <div id="navContents">
                    <a href="/">
                        <Image id="banner" src={banner} width={250} alt="Spelunking Studios" style={{objectFit: "contain"}}/>
                    </a>
                    <div id="navLinks">
                        <Link id="nav_games" className="link" href="/games">Games</Link>
                        <Link id="nav_about" className="link" href="/about">About</Link>
                        <Link id="nav_contact" className="link" href="/contact_us">Contact Us</Link>
                        <Link id="nav_account" className="link" href="/account">Account</Link>
                    </div>
                </div>
                <div id="mobContainer" style={{animation: mobileLinksShown ? "open .25s ease-in-out forwards" : "close .25s ease-in-out forwards"}}>
                    <div id="mobileLinks">
                        <Link id="nav_games" className="link mobile" href="/games" onClick={toggleMobile} style={{animation: mobileLinksShown ? "appear .6s ease-in-out forwards" : "none"}}>Games</Link>
                        <Link id="nav_about" className="link mobile" href="/about" onClick={toggleMobile} style={{animation: mobileLinksShown ? "appear .6s ease-in-out .1s forwards" : "none"}}>About</Link>
                        <Link id="nav_contact" className="link mobile" href="/contact_us" onClick={toggleMobile} style={{animation: mobileLinksShown ? "appear .6s ease-in-out .2s forwards" : "none"}}>Contact Us</Link>
                        <Link id="nav_account" className="link mobile" href="/account" onClick={toggleMobile} style={{animation: mobileLinksShown ? "appear .6s ease-in-out .3s forwards" : "none"}}>Account</Link>
                    </div>
                </div>
                
                <i className="material-symbols-outlined" id="mobileHamburger" onClick={toggleMobile}>{mobileLinksShown ? "close" : "menu"}</i>
            </nav>
        </div>
        
    )
}