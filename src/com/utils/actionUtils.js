/**
 * 返回一个action
 * */
export const action =  (type,payload)=> {
    return{
        type,
        ...payload
    }
};

export const apiAction =(type,module)=>{
    if(module){
        module="_"+module.toUpperCase();
    }
    else{
        module = ''
    }
    let actionObject={
        request:data=>action(type.toUpperCase()+module+"_REQUEST",{data}),
        success:(response,data)=>action(type.toUpperCase()+module+"_SUCCESS",{response,data}),
        failure:(error,data)=>action(type.toUpperCase()+module+"_FAILURE",{error,data})
    }
    let actionType={
        REQUEST:type.toUpperCase()+module+"_REQUEST",
        SUCCESS:type.toUpperCase()+module+"_SUCCESS",
        FAILURE:type.toUpperCase()+module+"_FAILURE"
    }
    return {
        TYPE:actionType,
        operation:actionObject
    }
}