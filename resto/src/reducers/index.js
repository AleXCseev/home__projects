import {createSlice} from "@reduxjs/toolkit"

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menu: []
    },
    reducers: {
        menuLoaded(state, action) {
            return state.menu.push(action.payload)
        }
    }
})

export default menuSlice.reducer
export const {menuLoaded} = menuSlice.actions
