let users = new Map()

users.set('eduardo', "Adm")
users.set('luiz', "Adm")
users.set('julio', "Adm")
users.set('junior', "user")
users.set('marcos', "user")


function getAdmins(map){
for(let [key, value] of map){
    if(value === "Adm"){
        console.log(key)
    }
}
}

getAdmins(users)