import * as ActionTypes from '../ActionTypes';


const getUserListSucess=(data)=>{
    return {
        type:ActionTypes.GET_USER_LIST_SUCCESS,
        payload:data
    }
}

const getUserListFailed=(data)=>{
    return {
        type:ActionTypes.GET_USER_LIST_FAILED,
        payload:data
    }
}

const getUserListLoading=(data)=>{
    return {
        type:ActionTypes.GET_USER_LIST_LOADING,
    }
}

 export const getUserListAction =()=>{

    return (dispatch)=>{

        dispatch(getUserListLoading())

        fetch('http://192.168.18.8:8000/api/get_employee')
            .then((response) => response.json())
            .then((data) => {
                //  console.log(JSON.stringify(json,null,2))
                dispatch(getUserListSucess(data))
            })
            .catch((error) => {
                dispatch(getUserListFailed(error))

                console.error(error)
            })
      
    }
 }