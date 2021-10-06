import { useSelector } from "react-redux"
import "./app-info.css";

export const AppInfo = () => {
	const persons = useSelector((state) => state.persons.persons)

	const personsLength = persons.length
	let increaseLength = 0;

	// console.log(persons)

	persons.forEach(item => item.increase === true && increaseLength++)

	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {personsLength}</h2>
			<h2>Премию получат: {increaseLength}</h2>
		</div>
	);
};
