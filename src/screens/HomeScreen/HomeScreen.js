import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "../../Redux/selectors/HomeScreenSelectors";
import Axios from "axios";
import { useEffect } from "react";

const stateSelector = createSelector(makeSelectUsers, users => ({
        // users: users,
        users
    }));

const HomeScreen = () => {
    const { users } = useSelector(stateSelector);

    const fetchUsers = async () => {
        const response = await Axios.get("https://reqres.in/api/users")
        .catch(error => console.error("error: ", error));

        console.log(response.data.data)
    };

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            HomeScreen
        </div>
    );
};

export default HomeScreen;
