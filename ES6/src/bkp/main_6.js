
const minhaPromise = () =>new Promise((resolve, reject)=>{
    setTimeout(() => {resolve('OK')} , 2000);
});

async function execPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

execPromise();


// AXIOS

import axios from 'axios';

class Api{
    static async getUserInfo(username){
        
        try{
            const response= await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch(err){
            console.warn('Erro na Api');
        }
        
    }
}

Api.getUserInfo('rafaamado');
Api.getUserInfo('rafaamadoAJSHDLAS');