import * as ActionTypes from '../ActionTypes';

export const UserListReducer =(state={isLoading:false,errorMsg:null,UserList:[]},action)=>{
      switch(action.type)
     {
        case ActionTypes.GET_USER_LIST_LOADING:
            return {
                ...state,
                isLoading:true
            };
            case ActionTypes.GET_USER_LIST_FAILED:
                return {
                    ...state,
                    isLoading:false,
                    errorMsg:action.payload
                };
                case ActionTypes.GET_USER_LIST_SUCCESS:
                    return {
                        ...state,
                        isLoading:false,
                        errorMsg:null,
                        UserList:action.payload 
                    };
            default:
                return state; 
     }

}