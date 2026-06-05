const base_url = "https://6a21bb05b1d0aaf32b4fea81.mockapi.io/";

//get method:
async function getUsers() {
    const response = await fetch(`${base_url}/Users-Details`);
    const jsobject = await response.json();
    console.log(jsobject);
}

getUsers();

//get method:
async function user(id) {
    const res = await fetch(`${base_url}/Users-Details/${id}`);
    const data = await res.json(); 
    console.log(data);
}

user(11);

//post method:

async function addusers(user) {
     const newresponse = await fetch(`${base_url}/Users-Details`,
        {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
        });
     const obj = await newresponse.json();
     console.log(obj);

}
const newuser = {name: "rayyan",email: "test@gmail.com"}

addusers(newuser);

//PUT METHOD UPDATE DATE:
async function updateUsers(user,id) {
     const response = await fetch(`${base_url}/Users-Details/${id}`,
        {
        method: "PUT",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(user)
        });
 
     const obj = await response.json();
     console.log(obj); 
}
 const updateUser = {
   name: "cooper",
   email: "conooly123@gmail.com",
   phoneNumber: "9988634485",
 }; 
  updateUsers(updateUser,20);



//DELETE METHOD:
  async function deleteUser(id) {
    const res = await fetch(`${base_url}/Users-Details/${id}`,
       {
         method:"DELETE"
       });
       const objdata = await res.json();
       console.log(objdata)
  }

  deleteUser(15);