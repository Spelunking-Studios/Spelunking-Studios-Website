"use client";
import Link from "next/link"
import Image from "next/image"
import banner from "app/SpelunkingStudiosBannerWhite.png"
import { useState, cloneElement } from "react"
import { usePathname } from "next/navigation";

export default function NavBar(){
    const [mobileLinksShown, setMobileLinksShown] = useState(false);
    const pathname = usePathname();

    const links  = {
        "/games" : <Link id="nav_games" className="link" href="/games" data-test={ pathname == "replace with URL" }>Games</Link>,
        "/about" : <Link id="nav_about" className="link" href="/about" data-test={ pathname == "replace with URL" }>About</Link>,
        "/contact_us" : <Link id="nav_contact" className="link" href="/contact_us" data-test={ pathname == "replace with URL" }>Contact Us</Link>,
        "/account" : <Link id="nav_account" className="link" href="/account" data-test={ pathname == "replace with URL" }>Account</Link>
    }

    if (links[pathname]) {
        links[pathname] = cloneElement(links[pathname]), {
            "data-navbar-is-current-pathname": true
        };
        console.log(links[pathname]);
    }

    function toggleMobile() {
        setMobileLinksShown(!mobileLinksShown);
    }

    return (
        <div>
            <nav>
                <div id="navContents">
                    <a href="/">
                        <Image id="banner" src={banner} width={250} alt="Spelunking Studios" style={{objectFit: "contain"}}/>
                    </a>
                    <div id="navLinks">
                        { Object.values(links) }
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