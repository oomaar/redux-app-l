/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectStatus, makeSelectUsers } from "../../Redux/selectors/HomeScreenSelectors";
import Axios from "axios";
import { useEffect } from "react";
import { setStatus, setUsers } from "../../Redux/actions/HomeScreenActions";
import {
    HomeSection,
    Container,
    Button,
} from "./styledHomeScreen";
import { Math } from "../../Components";

const stateSelector = createSelector(makeSelectUsers, users => ({
    // users: users,
    users
}));

const statusSelector = createSelector(makeSelectStatus, status => ({
    status
}))

const actionDispatch = (dispatch) => ({
    setUsers: users => dispatch(setUsers(users)),
    setStatus: status => dispatch(setStatus(status)),
});

const HomeScreen = () => {
    const { users } = useSelector(stateSelector);
    const { setUsers } = actionDispatch(useDispatch());
    const { status } = useSelector(statusSelector);
    const { setStatus } = actionDispatch(useDispatch());
    
    const fetchUsers = async () => {
        const response = await Axios.get("https://reqres.in/api/users")
        .catch(error => console.error("error: ", error));
        
        setUsers(response.data.data);
    };
    
    console.log("🚀 ~ file: HomeScreen.js ~ line 19 ~ HomeScreen ~ users", users)
    
    useEffect(() => {
        fetchUsers();
    }, []);
    
    const handleClick = () => setStatus(!status);
    return (
        <HomeSection>
            <Container>
                <Button onClick={handleClick}>Click Me</Button>
                {status ? (
                    <h1>True</h1>
                ) : (
                    <h4>False</h4>
                )}
                <Math />
            </Container>
        </HomeSection>
    );
};

export default HomeScreen;
