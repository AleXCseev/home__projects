import React from "react"
import { AppInfo } from "../../components";
import { SearchPanel } from "../../components"
import { AppFilter } from "../../components"
import { EmployeesList } from "../../components"
import { EmployeesAddForm } from "../../components"
import store from "../../store"
import { Provider } from "react-redux"

import "./app.css";

export const App = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<AppInfo></AppInfo>
				<div className="search-panel">
					<SearchPanel></SearchPanel>
					<AppFilter></AppFilter>
				</div>
				<EmployeesList></EmployeesList>
				<EmployeesAddForm></EmployeesAddForm>
			</div>
		</Provider>	
		
	);
};
