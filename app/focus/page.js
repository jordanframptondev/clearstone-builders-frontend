import CenteredFadeInDiv from "@/components/CenteredFadeInDiv";
import {getFocusData} from "@/utils/cms-service";
import {toHTML} from "@portabletext/to-html";
import "../../styles/focus.css";
import Image from "next/image";

export default async function Contact() {
    const {text, imageUrl} = await getFocusData();
    const textHtml = toHTML(text);
    return (
        <>
            <div className="fixed lg:absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10">
                <Image
                    src={imageUrl}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    className={"fade-in-background"}
                />
            </div>
            <CenteredFadeInDiv marginCentered={false}>
                <div className="text-left text-white font-light max-h-45vh overflow-auto">
                    <div
                        className="text-sm md:text-base p-2 custom-paragraph-spacing"
                        dangerouslySetInnerHTML={{__html: textHtml}}
                    />
                </div>
            </CenteredFadeInDiv>
        </>
    );
}
