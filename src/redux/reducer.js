const initialState = {
    data:[]
};
  
  const selectedDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECTEDDATA':
        return{
            data:action.payload
        };
      default:
        return state;
    }
  };
  
  export default selectedDataReducer;