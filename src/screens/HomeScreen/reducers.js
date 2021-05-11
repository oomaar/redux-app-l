const defaultState = {
    users: ["No User!"],
};

export default function homeScreenReducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    };
};