import { useSelector } from "react-redux"
import "./app-info.css";

export const AppInfo = () => {
	const persons = useSelector((state) => state.persons.persons)

	let personsLength = 0;
	
	let increaseLength = 0;

	if(persons) {
		personsLength = persons.length;
		persons.forEach(item => item.increase === true && increaseLength++)
	}
	

	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {personsLength}</h2>
			<h2>Премию получат: {increaseLength}</h2>
		</div>
	);
};
