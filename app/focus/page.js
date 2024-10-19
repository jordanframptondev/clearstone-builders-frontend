import CenteredFadeInDiv from "@/components/CenteredFadeInDiv";
import { getFocusData } from "@/utils/cms-service";
import { toHTML } from "@portabletext/to-html";
import "../../styles/focus.css";

export default async function Contact() {
    const { text, imageUrl } = await getFocusData();
    const textHtml = toHTML(text);
    return (
        <>
            <div
                className="fixed lg:absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <CenteredFadeInDiv>
                <div className="text-left text-white">
                    <div
                        className="text-sm md:text-base p-2 custom-paragraph-spacing"
                        dangerouslySetInnerHTML={{ __html: textHtml }}
                    />
                </div>
            </CenteredFadeInDiv>
        </>
    );
}
