import { getContactData } from "../utils/sanityClient";

export default async function Contact() {
    const { email, phone, address, imageUrl } = await getContactData();
    return (
        <>
            <h1>Contact</h1>
        </>
    );
}
