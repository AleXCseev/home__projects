import { EmployeesListItem } from "../../components"
import "./employees-list.css"

export const EmployeesList = ({ persons }) => {
    return (
        <ul className="app-list list-group">
            { 
                persons.map((person) => <EmployeesListItem  key={person.id} {...person}></EmployeesListItem>) 
            }
        </ul>
    )
}