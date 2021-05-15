import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "../../Redux/selectors/HomeScreenSelectors";

const stateSelector = createSelector(makeSelectUsers, users => (
    {
        // users: users,
        users
    }
));

const HomeScreen = () => {
    const { users } = useSelector(stateSelector);
    console.log("🚀 ~ file: HomeScreen.js ~ line 14 ~ HomeScreen ~ users", users)

    return (
        <div>
            HomeScreen
        </div>
    );
};

export default HomeScreen;
