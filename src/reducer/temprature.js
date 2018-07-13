const temprature = (state = 0, action) => {
    const { type, payload} = action;

    switch(type){
        case 'GET_TEMPRATURE':
        console.log('in reducer',type,payload);
        console.log("store", state);
        state = payload
            return state;
        default:
            return state;
    }
};

export default temprature;