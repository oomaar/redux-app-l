import {
    MathSection,
    Container,
    IncBtn,
    Result,
    DecBtn,
} from "./styledMath";

const Math = () => {
    return (
        <MathSection>
            <Container>
                <IncBtn>+</IncBtn>
                <Result>0</Result>
                <DecBtn>-</DecBtn>
            </Container>
        </MathSection>
    );
};

export default Math;
