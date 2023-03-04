import Image from "next/image";
import bg from "./placeholder.jpg";
import title from "./SpelunkingStudiosTitleWhite.png";

export default function Page() {
    return (
        <div id="firstSectionBG">
            <div className="section" id="firstSection">
                <div>
                    <Image
                        src={title}
                        alt="helo"
                        width={"600"}
                        style={{ objectFit: "contain" }}
                    />
                    <p className="text">
                        We&apos;re high schoolers that make games
                    </p>
                </div>
            </div>
            <div className="section" id="firstSection">
                <div>
                    <Image
                        src={title}
                        alt="helo"
                        width={"600"}
                        style={{ objectFit: "contain" }}
                    />
                    <p className="text">
                        We&apos;re high schoolers that make games
                    </p>
                </div>
            </div>
        </div>
    );
}
