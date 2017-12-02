/**
 * Created by sml2 on 2017/12/2.
 */
export default class DLHTTPUtil {
    static GET(url){
        return new Promise((resolve,reject)=>{
                fetch(url)
                    .then((response)=>response.json())
                    .then((result)=>{
                        if(resolve){
                            resolve(result);
                        }
                    })
                    .catch((error)=>{
                        if(reject){
                            reject(error);
                        }
                    })
        })
    }

    static POST(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(data),
                })
                .then((response)=>response.json())
                .then((result)=>{
                    if(resolve){
                        resolve(result);
                    }
                })
                .catch((error)=>{
                    if(reject){
                        reject(error);
                    }
                })
        });
    }
}