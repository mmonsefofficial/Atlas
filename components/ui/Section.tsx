import { HTMLAttributes } from "react";
import Container from "./Container";

type Props = HTMLAttributes<HTMLElement>;

export default function Section({
    children,
    className = "",
    ...Props
}: Props){
    return(
        <section 
        {...Props}
        className={`py-28 ${className}`}
    >
        <Container>
            {children}
        </Container>
    </section>
    );
}