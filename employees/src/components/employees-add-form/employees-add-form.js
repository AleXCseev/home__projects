import { useState } from "react"
import { useDispatch } from "react-redux";
import { addNewPerson } from "../../store/person-reducer";
import "./employees-add-form.css"

export const EmployeesAddForm = () => {

    const dispatch = useDispatch()
    const [inputName, setInputName] = useState("");
    const [inputSalary, setInputSalary] = useState("");

    const addPerson = (e) => {
        e.preventDefault();
        const person = {
            name: inputName,
            salary: +inputSalary,
            id: Date.now(),
            increase: false,
        }
        dispatch(addNewPerson(person))
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex" onSubmit={addPerson}>
                <input type="text" className="form-control new-post-label" placeholder="Как его зовут" onChange={(e) => setInputName(e.target.value)} />
                <input type="number" className="form-control new-post-label" placeholder="З/П в $" onChange={(e) => setInputSalary(e.target.value)} />
                <button type="submit" className="btn btn-outline-light">
                    Добавить
                </button>
            </form>
        </div>
    )
}