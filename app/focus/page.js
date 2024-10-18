import CenteredFadeInDiv from "../components/CenteredFadeInDiv";
import { getFocusData } from "../utils/cms-service";
import { toHTML } from "@portabletext/to-html";

export default async function Contact() {
    const { text, imageUrl } = await getFocusData();
    const textHtml = toHTML(text);
    return (
        <>
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <CenteredFadeInDiv>
                <div className="text-center text-white">
                    <div dangerouslySetInnerHTML={{ __html: textHtml }} />
                </div>
            </CenteredFadeInDiv>
        </>
    );
}
