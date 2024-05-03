import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

// Utilisation createAsyncThunk pour gérer l'async avec backend

// Pour se loguer
export const login = createAsyncThunk(
    "userSlice/login",
    async (userData) => {
        const { data } = await axios.post("http://localhost:3001/api/v1/user/login", userData)
        return data.body
    }
)

// Pour créer un compte 
export const createAcount = createAsyncThunk(
    "userSlice/createAcount",
    async (userData) => {
        const { data } = await axios.post("http://localhost:3001/api/v1/user/signup", userData)
        return data.body
    }
)

// Pour obtenir l'info utilisateur 
export const getUser = createAsyncThunk(
    "userSlice/getUser",
    async () => {
        const token = sessionStorage.getItem("Token")
        const { data } = await axios.post("http://localhost:3001/api/v1/user/profile", { token }, {
            headers: {
                "Content-Types": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })

        return data.body
    }
)

// Pour changer le userName 
export const updateUserName = createAsyncThunk(
    "userSlice/updateUserName",
    async (userName) => {
        const token = sessionStorage.getItem("Token")
        const { data } = await axios.put("http://localhost:3001/api/v1/user/profile", { "userName": `${userName}` }, {
            headers: {
                "Content-Types": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })
        return data.body
    }
)