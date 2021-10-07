import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, AppWrapper } from "./components";
import store from "./store"
import { Provider } from "react-redux"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppWrapper>
				<App />
			</AppWrapper>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);
