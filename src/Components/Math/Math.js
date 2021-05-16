import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { setByTen, setDecrement, setIncrement } from "../../Redux/actions/Mathactions";
import { selectIncrement } from "../../Redux/selectors/MathSelectors";
import {
    MathSection,
    Container,
    Btn,
    Result,
} from "./styledMath";

const incSelector = createSelector(selectIncrement, number => ({ number }));

const actionDispatch = dispatch => ({
    setIncrement: number => dispatch(setIncrement(number)),
    setDecrement: number => dispatch(setDecrement(number)),
    setByTen: number => dispatch(setByTen(number)),
});

const Math = () => {
    const { number } = useSelector(incSelector);
    const { setIncrement } = actionDispatch(useDispatch());
    const { setDecrement } = actionDispatch(useDispatch());
    const { setByTen } = actionDispatch(useDispatch());
    
    const handleIncrement = () => setIncrement(number + 1);
    const handleDecrement = () => setDecrement(number - 1);
    const handleByTen = () => setByTen(number + 10);
    
    console.log("🚀 ~ file: Math.js ~ line 21 ~ Math ~ inc", number)
    return (
        <MathSection>
            <Container>
                <Btn onClick={handleIncrement}>+</Btn>
                <Result>{number}</Result>
                <Btn onClick={handleDecrement}>-</Btn>
                <Btn onClick={handleByTen}> + 10</Btn>
            </Container>
        </MathSection>
    );
};

export default Math;
