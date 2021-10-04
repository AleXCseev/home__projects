import { useSelector } from "react-redux"
import { EmployeesListItem } from "../../components"
import "./employees-list.css"

export const EmployeesList = () => {
    const persons = useSelector((state) => state.persons.persons)


    return (
        <ul className="app-list list-group">
            { 
                persons.map((person, index) => <EmployeesListItem person={person} key={index}></EmployeesListItem>) 
            }
        </ul>
    )
}