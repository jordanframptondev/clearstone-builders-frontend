import {getFocusData} from "@/utils/cms-service";
import {toHTML} from "@portabletext/to-html";
import "../../styles/focus.css";
import Image from "next/image";

export default async function Contact() {
    const {text, imageUrl} = await getFocusData();
    const textHtml = toHTML(text);
    return (
        <>
            <div className="image-container">
                <Image
                    src={imageUrl}
                    alt="Background Image"
                    width={1920}
                    height={1080}
                    priority={true}
                    className={"fade-in-background full-screen-image"}
                />
            </div>

            <div
                className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-in
                max-w-[1260px] w-full lg:min-w-[1000px]">
                <div className="bg-[#262a1cbd] transition-all duration-1000 ease-in
                fade-in-div bg-opacity-80 px-9 py-11 rounded-sm text-left text-white font-light overflow-auto
                max-h-[400px] sm:max-h-[455px] mx-[5%]">
                    <div
                        className="text-sm sm:text-base md:text-lg lg:text-lg custom-paragraph-spacing"
                        dangerouslySetInnerHTML={{__html: textHtml}}
                    />
                </div>
            </div>
        </>
    );
}
