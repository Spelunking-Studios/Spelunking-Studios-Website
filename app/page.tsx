import Image from "next/image";
import bg from "./placeholder.jpg";
import title from "public/images/SpelunkingStudiosTitleWhite.png";

export default function Page() {
    return (
        <div id="firstSectionBG">
            <div className="section" id="firstSection">
                <div>
                    <Image
                        src={title}
                        alt="helo"
                        width={"600"}
                        style={{ objectFit: "contain", margin: "auto" }}
                    />
                    <p
                        className="text"
                        style={{ width: "680pt", margin: "auto" }}
                    >
                        We&apos;re high schoolers that supposedly want to work
                        on a game, or something, so far we&apos;ve done nothing
                    </p>
                </div>
            </div>
        </div>
    );
}
