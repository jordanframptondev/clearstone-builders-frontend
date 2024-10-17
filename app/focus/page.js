import CenteredFadeInDiv from "../components/CenteredFadeInDiv";
import { getFocusData } from "../utils/sanityClient";
import { toHTML } from "@portabletext/to-html";

export default async function Contact() {
    const { text, imageUrl } = await getFocusData();
    const textHtml = toHTML(text);
    console.log(text);
    return (
        <>
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <CenteredFadeInDiv>
                <div className="text-center">
                    <div dangerouslySetInnerHTML={{ __html: textHtml }} />
                </div>
            </CenteredFadeInDiv>
        </>
    );
}
