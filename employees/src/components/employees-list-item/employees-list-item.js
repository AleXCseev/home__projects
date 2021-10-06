import cn from "classnames"
import { useDispatch } from "react-redux"
import { addIncrease, deletePerson } from "../../store/person-reducer"


import "./employees-list-item.css"

export const EmployeesListItem = ({ id, name, salary, increase }) => {
    const dispatch = useDispatch()

    return (
        <li className={cn("list-group-item", "justify-content-between", {
            'increase': increase === true,
        })}>
            <span className="list-group-item-label">{ name }</span>
            <input type="text" className="list-group-item-input" defaultValue={ salary } />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-sm" onClick={() => dispatch(addIncrease(id))}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button" className="btn-trash btn-sm" onClick={() => dispatch(deletePerson(id))}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}