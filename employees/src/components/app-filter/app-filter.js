import "./app-filter.css"

 export const AppFilter = ({onSort}) => {
    const {noSort, sortIncrease, sortSalary, filter} = onSort

    const buttonData = [
        {name: "all", label: "Все сотрудники", onClickFunction: noSort},
        {name: "increase", label: "На повышение", onClickFunction: sortIncrease},
        {name: "salary", label: "З/П больше 1000$", onClickFunction: sortSalary},
    ]

    return(
        <div className="btn-group">
            {buttonData.map(({name, label, onClickFunction}) => {
                const active = filter === name
                const clazz = active ? "btn-light" : "btn-outline-light"
                return (
                    <button type="button" className={`btn ${clazz}`} key={name} onClick={() => onClickFunction()}>{label}</button>
                )
            })}
        </div>
    )
}