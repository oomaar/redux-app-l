import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createSelector } from "reselect";
import { makeSelectUsers } from "../../Redux/selectors/HomeScreenSelectors";
import {
    UsersListSection,
    Container,
    UserWrapper,
    UserImage,
    UserName,
} from "./styledUsersList";

const stateSelector = createSelector(makeSelectUsers, users => ({ users }));

const UsersList = () => {
    const { users } = useSelector(stateSelector);
    const history = useHistory();

    const isEmptyUsers = !users || (users && users.length === 0);

    if (isEmptyUsers) {
        return null;
    };

    const goToAccountScreen = id => {
        history.push(`/user/${id}`);
    };

    return (
        <UsersListSection>
            <Container>
                {users.map((user, idx) => (
                    <UserWrapper key={idx} onClick={() => goToAccountScreen(user.id)}>
                        <UserImage>
                            <img src={user.avatar} alt={user.first_name} />
                        </UserImage>
                        <UserName>
                            {user.first_name} {user.last_name}
                        </UserName>
                    </UserWrapper>
                ))}
            </Container>
        </UsersListSection>
    );
};

export default UsersList;
