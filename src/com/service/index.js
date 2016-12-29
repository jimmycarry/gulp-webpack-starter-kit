import * as Jquery from 'jquery';
import API from './enum';
export  function callApi(endpoint,data,method) {
    return new Promise((resolve,reject)=>{
        let data = data||{};
        Jquery.ajax({
            url:API+endpoint,
            data:data,
            type:method.toUpperCase()||'POST'
        }).done((res)=>{
            console.log(res);
            if(res.status==200||res.status==201)
                return resolve(res);
            else
                return reject(res)
        }).fail((res)=>{
            console.log(res);
            return reject(res)
        })
    })
}