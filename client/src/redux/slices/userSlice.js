import { createSlice } from "@reduxjs/toolkit"
import { login, createAcount, getUser, updateUserName } from "../../callAPI/callAPI"

// Vérification dans sessionStorage si token exist

const initialState = {
  isAuthenticated: sessionStorage.getItem("isAuthenticated") ? true : false,
  token: sessionStorage.getItem("Token") || null,
  createAcountSuccess: null,
  user: {},
  error: null,
}

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

    ////////// Gérer la création d'un compte ///////////
    builder.addCase(createAcount.fulfilled, (state, action) => {
      state.user = action.payload
      state.createAcountSuccess = true
      
    })

    builder.addCase(createAcount.rejected, (state, action) => {
      state.user = action.error
      state.createAcountSuccess = false
    })

    ////////// Gérer le cas où login success ///////////
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.token = action.payload.token
      // Stocker le token dans sessionStorage
      sessionStorage.setItem("Token", action.payload.token)
      sessionStorage.setItem("isAuthenticated", true)
    })

    /////////// Gérer le cas où login echec ////////////
    builder.addCase(login.rejected, (state, action) => {
      sessionStorage.clear()
      state.isAuthenticated = false
      state.token = null
      // state.error = action.error ? action.error.message : "Unknown error occurred";
      action.error.message.includes("400") ? state.error = "invalid login" : "Unknown error occurred"
      action.error.message.includes("500") ? state.error = "Server error, try again later" : "Unknown error occurred"
      action.error.message.includes("Network Error") ? state.error = "Server error, try again later" : "Unknown error occurred"
      console.log(state.error)
    })
    ///////////////////////////////////////////////////////

    // Obtenir les informations utilisateur ///
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload
    })

    // Cas où on arrive pas à obtenir les infos utilisateur
    builder.addCase(getUser.rejected, (state, action) => {
      state.user = {}
      state.isAuthenticated = action.meta.rejectedWithValue
      state.token = null
      sessionStorage.clear()
    })
    ////////////////////////////////////////////////////////

    // Pour changer le userName ///////
    builder.addCase(updateUserName.fulfilled, (state, action) => {
      state.user.userName = action.payload.userName
      // console.log(action.payload.userName)
    })
  }
})

export const { logout } = userSlice.actions;

export default userSlice.reducer
