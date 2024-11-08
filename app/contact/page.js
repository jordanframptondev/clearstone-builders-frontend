import {getContactData} from "@/utils/cms-service";
import Image from "next/image";

export const metadata = {
    title: "Clearstone Builders - Contact",
    description: "Contact info of Clearstone Builders",
    keywords:
        "Contact, Info, Phone, Email, website, clearstone builders, clearstone, builders, homes",
    viewport: "width=device-width, initial-scale=1",
};

export default async function Contact() {
    const {email, phone, address, imageUrl} = await getContactData();
    return (
        <div className="w-[100dvw] h-[100dvh] overflow-hidden">
            <div className="absolute top-0 left-0 w-[100dvw] h-[100dvh] bg-cover bg-center -z-10">
                <Image
                    src={imageUrl}
                    alt="Background Image"
                    width={1920}
                    height={1080}
                    priority={true}
                    className={"fade-in-background w-full h-full object-cover"}
                />
            </div>

            <div
                className={`flex items-center justify-center w-[100dvw] h-[100dvh] md:my-[0] md:h-screen`}
            >
                <div
                    className="bg-[#262a1c] bg-opacity-90 fade-in-div font-thin text-[#b6b4b1] text-xl lg:text-3xl  p-8 rounded-sm max-w-4xl">

                    <div className="flex flex-col items-center p-0 lg:p-16 lg:px-28 text-center font-light">
                        <Image
                            src="/Clearstone_Builders_Primary.png"
                            alt="CB Logo"
                            width={200}
                            height={100}
                            className={"w-[200px] lg:w-[250px]"}
                        />
                        <br/>
                        <br className="hidden lg:block"/>
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

                </div>
            </div>
        </div>
    );
}
