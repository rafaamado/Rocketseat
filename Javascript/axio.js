axios.get('https://api.github.com/users/rafaamado')
.then(function(response){
    console.log(response.data);
})
.catch(function(error){
    console.warn(error);
});