const initalState = {
    page: 1,
    list: [],
    isLoading: false
  };
  


export default function aa(state=initalState,action){
    switch(action.type){
        case 'INIT_MESSAGE_LIST':{
          return {...state,...action.data}
        }
        case 'UPDATE_MESSAGE_LIST':{
          return {...state,...action.data}
        }
        case 'CHANGE_LIST_LOADING':{
          return {...state,...action.data}
        }
        default: 
          return state
    }
}