
import { useEffect, useState } from "react";
import { AppInfo } from "../../components";
import { SearchPanel } from "../../components"
import { AppFilter } from "../../components"
import { EmployeesList } from "../../components"
import { EmployeesAddForm } from "../../components"

import "./app.css";

export const App = ({ persons }) => {
	const [sortPersons, setSortPersons] = useState(persons)	
	const [filter, setFilter] = useState("all")

	useEffect(() => {
		setSortPersons(persons)
	}, [persons])

	const noSort = () => {
		setSortPersons(persons)
		setFilter("all")
	}

	const sortIncrease = () => {
		setSortPersons(persons.filter(person => person.increase === true))
		setFilter("increase")
	}

	const sortSalary = () => {
		setSortPersons(persons.filter(person => person.salary > 1000))
		setFilter("salary")
	}

	const searchPerson = (str) => {
		str = str.trim().toLowerCase()
		setSortPersons(persons.filter(person => person.name.toLowerCase().indexOf(str) !== -1))
		setFilter("all")
	}



	return (
		<div className="app">
			<AppInfo></AppInfo>
			<div className="search-panel">
				<SearchPanel onSearch={searchPerson}></SearchPanel>
				<AppFilter onSort={{noSort, sortIncrease, sortSalary, filter}}></AppFilter>
			</div>
			<EmployeesList persons={sortPersons}></EmployeesList>
			<EmployeesAddForm></EmployeesAddForm>
		</div>
	);
};
