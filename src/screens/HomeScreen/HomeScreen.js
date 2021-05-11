import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";

const stateSelector = createSelector(makeSelectUsers, users => ({
    users
}));

const HomeScreen = () => {
    const { users } = useSelector(stateSelector);
    console.log("🚀 ~ file: HomeScreen.js ~ line 11 ~ HomeScreen ~ users", users)

    return (
        <div>
            HomeScreen
        </div>
    );
};

export default HomeScreen;
