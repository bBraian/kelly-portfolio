import { ContactBox, ContactContainer, TextGradient, Title } from "./styles";
import { Footer } from "../../components/Footer";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Contact() {
    const { language } = useContext(AppContext);

    return (
        <ContactContainer>
            <div></div>
            <ContactBox>
                <Title>{ language.contact_title }</Title>
                <TextGradient>braianvoficial@gmail.com</TextGradient>
            </ContactBox>
            <Footer />
        </ContactContainer>
    )
}