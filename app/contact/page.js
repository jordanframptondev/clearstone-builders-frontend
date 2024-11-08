import { getContactData } from "@/utils/cms-service";
import CenteredFadeInDiv from "@/components/CenteredFadeInDiv";
import Image from "next/image";

export const metadata = {
    title: "Clearstone Builders - Contact",
    description: "Contact info of Clearstone Builders",
    keywords:
        "Contact, Info, Phone, Email, website, clearstone builders, clearstone, builders, homes",
    viewport: "width=device-width, initial-scale=1",
};

export default async function Contact() {
    const { email, phone, address, imageUrl } = await getContactData();
    return (
        <div className="w-[100dvw] h-[100dvh] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10">
                <Image
                    src={imageUrl}
                    alt="Background Image"
                    width={1920}
                    height={1080}
                    priority={true}
                    className={"fade-in-background w-full h-full object-cover"}
                />
            </div>
            <CenteredFadeInDiv marginCentered={false}>
                <div className="flex flex-col items-center p-0 lg:p-24 lg:px-24 text-center font-light font-robotoCondensed">
                    <Image
                        src="/Clearstone_Builders_Primary.png"
                        alt="CB Logo"
                        width={200}
                        height={100}
                        className={"w-[200px]"}
                    />
                    <br />
                    <br className="hidden lg:block" />
                    <a
                        href={`mailto:${email}`}
                        className="hover:underline transition-all uppercase mb-1"
                    >
                        {email}
                    </a>
                    <a
                        href={`tel:${phone}`}
                        className="hover:underline transition-all"
                    >
                        {phone}
                    </a>
                </div>
            </CenteredFadeInDiv>
        </div>
    );
}
