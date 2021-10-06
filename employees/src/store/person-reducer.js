import { createSlice } from '@reduxjs/toolkit'
const persons = [
    {
        id: 1,
        name: "Jonh Smith",
        salary: 800,
        increase: true,
    },
    {
        id: 2,
        name: "Alex M.",
        salary: 1500,
        increase: false,
    },
    {
        id: 3,
        name: "Jonh Snow",
        salary: 2000,
        increase: false,
    }
]

export const personSlice = createSlice({
    name: 'persons',
    initialState: {
        persons: persons,
    },
    reducers: {
        addIncrease: (state, action) => {
            const person = state.persons.find((person) => person.id === action.payload)
            if (person) {
                person.increase = !person.increase
            }
        },
        deletePerson: (state, action) => {
            const newState = state.persons.filter((person) => person.id !== action.payload)

            state.persons = newState
        },
        addNewPerson: (state, action) => {
            const person = state.persons.find((person) => person.name === action.payload.name)
            if (person) {
                return state
            }
            state.persons.push(action.payload);
        }
    },
})

export const { addIncrease, deletePerson, addNewPerson } = personSlice.actions

export default personSlice.reducer