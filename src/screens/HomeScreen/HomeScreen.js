import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "../../Redux/selectors/HomeScreenSelectors";
import Axios from "axios";
import { useEffect } from "react";
import { setUsers } from "../../Redux/actions/HomeScreenActions";

const stateSelector = createSelector(makeSelectUsers, users => ({
        // users: users,
        users
    }));

const actionDispatch = (dispatch) => ({
    setUsers: users => dispatch(setUsers(users)),
});

const HomeScreen = () => {
    const { users } = useSelector(stateSelector);
    const { setUsers } = actionDispatch(useDispatch());
    
    const fetchUsers = async () => {
        const response = await Axios.get("https://reqres.in/api/users")
        .catch(error => console.error("error: ", error));
        
        setUsers(response.data.data);
    };
    
    console.log("🚀 ~ file: HomeScreen.js ~ line 19 ~ HomeScreen ~ users", users)

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
