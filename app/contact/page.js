import { getContactData } from "../utils/sanityClient";
import CenteredFadeInDiv from "../components/CenteredFadeInDiv";

export default async function Contact() {
    const { email, phone, address, imageUrl } = await getContactData();
    return (
        <>
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <CenteredFadeInDiv>
                <div className="text-center">
                    <p className="text-2xl font-extrabold">
                        Clearstone Builders
                    </p>
                    <br />
                    <p>{address}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
            </CenteredFadeInDiv>
        </>
    );
}
