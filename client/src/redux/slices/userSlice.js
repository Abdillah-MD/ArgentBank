import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// Vérification dans sessionStorage si token exist

const initialState = {
  isAuthenticated: sessionStorage.getItem("isAuthenticated") ? true : false,
  token: sessionStorage.getItem("Token") || null,
  user: {},
  error: null,
}

// Utilisation createAsyncThunk pour gérer l'async avec backend

// Pour se loguer
export const login = createAsyncThunk(
  "userSlice/login",
  async (userData) => {
    const {data} = await axios.post("http://localhost:3001/api/v1/user/login", userData)
    return data.body
  }
)

// Pour obtenir l'info utilisateur 
export const getUser = createAsyncThunk(
  "userSlice/getUser",
  async () => {
    const token = sessionStorage.getItem("Token")
    const {data} = await axios.post("http://localhost:3001/api/v1/user/profile", {token}, {
      headers: {
        "Content-Types": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    })

    return data.body
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false
      state.token = null
      // Supprimer la sessionStorage
      sessionStorage.clear()
      state.user = {}
    },
  },

  extraReducers: (builder) => {

    ////////// Gérer le cas où login success ///////////
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.token = action.payload.token
      // Stocker le token dans sessionStorage
      sessionStorage.setItem("Token", action.payload.token)
      sessionStorage.setItem("isAuthenticated", true)
    })
    ///////////////////////////////////////////////////////

    /////////// Gérer le cas où login echec ////////////
    builder.addCase(login.rejected, (state, action) => {
      sessionStorage.clear()
      state.isAuthenticated = false
      state.token = null
      state.error = action.payload ? action.payload.message : "Unknown error occurred";
      console.log(state.error)
    })
    ///////////////////////////////////////////////////////

    // Obtenir les informations utilisateur ///
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  }
})

export const { logout } = userSlice.actions;

export default userSlice.reducer
