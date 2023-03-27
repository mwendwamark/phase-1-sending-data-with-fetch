function submitData(personsName,personsEmail){
    const data ={
        name:personsName,
        email:personsEmail
    }
    const configObj = {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body: JSON.stringify(data),    
    }
    let j = document.createElement("j")

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response){
        return response.json();
    })
    .then(data =>{
        let j = document.createElement("j")
        j.textContent = data.name + " " + data.email
        document.querySelector("body").appendChild(j)
    })
    .catch(function(error){
        let j = document.createElement("j")
        j.textContent = error.message;
        document.querySelector("body").appendChild(j)
    })
}
