import {getContactData} from "@/utils/cms-service";
import CenteredFadeInDiv from "@/components/CenteredFadeInDiv";
import Image from "next/image";

export const metadata = {
    title: 'Clearstone Builders - Contact',
    description: 'Contact info of Clearstone Builders',
    keywords: 'Contact, Info, Phone, Email, website, clearstone builders, clearstone, builders, homes',
    viewport: 'width=device-width, initial-scale=1',
};

export default async function Contact() {
    const {email, phone, address, imageUrl} = await getContactData();
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10">
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
                <div className="flex flex-col items-center text-center text-white font-light">
                    <Image
                        src="/Clearstone_Builders_Primary.png"
                        alt="CB Logo"
                        width={200}
                        height={100}
                        className={"w-[200px]"}
                    />
                    <br/>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
            </CenteredFadeInDiv>
        </>
    );
}
