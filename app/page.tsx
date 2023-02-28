import Image from "next/image";
import bg from "./placeholder.jpg";
import title from "./SpelunkingStudiosTitleWhite.png";


export default function Page() {
    return (
        <div id="firstSectionBG">
            <div className="section" id="firstSection">
                <div>
                    <Image id="logoTitle" width="600" src={title} alt="helo"/>
                    <p className="text">We're high schoolers that make games</p>
                </div>                
            </div>
        </div>
    );
}
