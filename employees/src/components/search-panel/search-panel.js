
import "./search-panel.css";

export const SearchPanel = ({onSearch}) => {
    // console.log(searchPerson)
    return (
        <input type="text" className="form-control search-input"  placeholder="Найти сотрудника" onChange={(e) => onSearch(e.target.value)}/>
    )
}