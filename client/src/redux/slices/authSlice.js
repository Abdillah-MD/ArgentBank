import { createSlice } from "@reduxjs/toolkit"

// Vérification dans sessionStorage si token exist
let isAuthenticated
let token 

if (sessionStorage.getItem("isAuthenticated") === "true" ) {
  isAuthenticated = true
  token = sessionStorage.getItem("Token") 
} else {
  isAuthenticated = null
  token = null
}


const initialState = {
  isAuthenticated: isAuthenticated,
  token: token,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true
      state.token = action.payload
      // Stocker le token dans sessionStorage
      sessionStorage.setItem("Token", action.payload)
      sessionStorage.setItem("isAuthenticated", true)
    },
    logout(state) {
      state.isAuthenticated = false
      state.token = null
      // Supprimer le token de sessionStorage
      sessionStorage.removeItem("Token")
      sessionStorage.setItem("isAuthenticated")
    },
  },
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer
