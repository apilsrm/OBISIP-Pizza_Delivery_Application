import axios from "axios"

const baseUrl = "http://localhost:5000/api/v1"

const API = axios.create({
    baseURL: baseUrl,

})

//interceptors
API.interceptors.request.use((req)=> {
    const token = localStorage.getItem("token")
    try {
        req.headers.Authorization = `Bearer ${token}`
    } catch (error) {
        console.log(error)
    }
    return req;
})


//users
//get all products/pizzas
export const getAllPizzas = () =>  API.get("/get/pizzas")

//admin
//created Add product
export const addPizza = (formData) => API.post("/create/pizza", formData)

//delete product
export const deletePizza = (id) => API.delete(`/delete/pizzas/${id}`)

//admin 
export const getAdminPizzas = () => API.get("/all/admin/pizzas")



//user register
 export const userRegister = (formData) => API.post("/register",formData)

 //user login
 export const userLogin = (loginValue) => API.post("/login",loginValue)
 
 //get profile
 export const userProfile = () => API.get("/single/user");

 //change password 
 export const passwordUpdate = (changeValue) => API.put("/change/password", changeValue)

 //update profile 
 export const updateProfile = (updateForm) => API.put("/update/user", updateForm);

