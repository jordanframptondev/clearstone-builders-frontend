import {getContactData} from "@/utils/cms-service";
import CenteredFadeInDiv from "@/components/CenteredFadeInDiv";
import Image from "next/image";

export default async function Contact() {
    const {email, phone, address, imageUrl} = await getContactData();
    return (
        <>
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
                style={{backgroundImage: `url(${imageUrl})`}}
            ></div>
            <CenteredFadeInDiv marginCentered={false}>
                <div className="flex flex-col items-center text-center text-white">
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
