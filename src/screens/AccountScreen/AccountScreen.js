/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSelector } from "reselect";
import { setUser } from "../../Redux/actions/AccountScreenActions";
import { makeSelectUser } from "../../Redux/selectors/AccountScreenSelectors";
import {
    AccountSection,
    Container,
    UserContainer,
    UserImage,
    UserName,
} from "./styledAccountScreen";

const stateSelector = createSelector(makeSelectUser, user => ({ user }));

const actionDispatch = dispatch => ({
    setUser: user => dispatch(setUser(user)),
});

const AccountScreen = () => {
    const { userId } = useParams();
    const { setUser } = actionDispatch(useDispatch());
    const { user } = useSelector(stateSelector);
    
    const fetchUser = async id => {
        const response = await axios
        .get(`https://reqres.in/api/users/${id}`)
        .catch(err => console.error(err));
        
        console.log("line 37 account screen: ", response.data.data)
        if (response) {
            setUser(response.data.data);
        };
    };

    
    useEffect(() => {
        if (userId && userId !== "") {
            fetchUser(userId);
        };
    }, [userId]);
    console.log("🚀 ~ file: AccountScreen.js ~ line 27 ~ AccountScreen ~ user", user)

    return (
        <AccountSection>
            <Container>
                <UserContainer>
                    <UserImage>
                        <img src={user.avatar} alt={user.first_name} />
                    </UserImage>
                    <UserName>
                        {user.first_name} {user.last_name}
                    </UserName>
                </UserContainer>
            </Container>
        </AccountSection>
    );
};

export default AccountScreen;
