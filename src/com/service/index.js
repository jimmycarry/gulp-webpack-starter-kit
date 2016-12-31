import API from './enum';
export function callApi(endpoint, data, method) {
    return new Promise((resolve, reject) => {
        let data = data || {};
        $.ajax({
            url: API + endpoint,
            data: data,
            type: method.toUpperCase() || 'POST',
            success: (res) => {
                console.log(res);
                if (res.status == 200 || res.status == 201)
                    return resolve(res);
                else
                    return reject(res)
            },
            error:(res)=>{
                console.log(res);
                return reject(res)
            }
        })
    })
}