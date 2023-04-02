import { WorkHistory } from "./Exports";

let workHistoryList = [<WorkHistory />];

const addWorkHistory = () => {
	workHistoryList.push(<WorkHistory />);
}

const removeWorkHistory = () => {
	workHistoryList.pop();
}

export { addWorkHistory, removeWorkHistory };