const initalState = {
    list:[],
    isLoading:true
}

export default function CompanyList(state=initalState,action){
    switch(action.type){
        case 'INIT_COMPANY_LIST':{
            return action.data
        };
        default :
            return state
    }
}