import { useSelector } from "react-redux"
import { AppInfo } from "../../components";
import { SearchPanel } from "../../components"
import { AppFilter } from "../../components"
import { EmployeesList } from "../../components"
import { EmployeesAddForm } from "../../components"

import "./app.css";

export const App = () => {
	const persons = useSelector((state) => state.persons.persons)

	return (
		<div className="app">
			<AppInfo></AppInfo>
			<div className="search-panel">
				<SearchPanel></SearchPanel>
				<AppFilter></AppFilter>
			</div>
			<EmployeesList persons={persons}></EmployeesList>
			<EmployeesAddForm></EmployeesAddForm>
		</div>
	);
};
