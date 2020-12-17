import { objectOf } from "prop-types"

const initalState = {
    user:{
        menuByUserModule:[
            {
                menuName:'运维中心',
                childMenu:[
                    {
                        menuName:'资产运维'
                    },
                    {
                        menuName:'新建申请'
                    },
                    {
                        menuName:'待我审批'
                    },
                    {
                        menuName:'运维协助'
                    },
                ]
            },
            {
                menuName:'运维中心1',
                childMenu:[
                    {
                        menuName:'工单运维'
                    },
                    {
                        menuName:'特殊运维'
                    },
                    {
                        menuName:'命令复核'
                    },
                    {
                        menuName:'密码会同'
                    },
                ]
            },
            {
                menuName:'运维中心2',
                childMenu:[
                    {
                        menuName:'审批历史'
                    },
                    {
                        menuName:'审批历史'
                    },
                    {
                        menuName:'代理设置'
                    },
                    {
                        menuName:'密码会同'
                    },
                ]
            }
        ]
    },
    activePermissiion:'运维中心'
}

export default function BottomScreen(state=initalState,action){
    let {type,payload} = action
    switch(type){
        case 'CHANGEUSER':{
            console.log(type,payload)
            return Object.assign({},state,{activePermissiion:payload})
        }
        default :
            return state
    }
}