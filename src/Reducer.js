const reducer=(state,action)=>{
    switch(action.type){
        case "get_story":
            return{
                ...state,
                status:action.payload.status,
            }
    }
    return state;
}
export default reducer;