var initialState = { points: 100};


export default (state = initialState, action) => {
	    switch (action.type) {
        case 'UPDATE_POINTS': 
            return { points: action.payload};
        break;
        default: 
            return state;
    }
}