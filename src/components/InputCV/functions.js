const onIntroductionChange = (event, oldCV) => {
	let newCV = Object.assign({}, oldCV);
	newCV.introduction[event.target.name] = event.target.value;
	return newCV;
}

const onSummaryChange = (event, oldCV) => {
	let newCV = Object.assign({}, oldCV);
	newCV.summary = event.target.value;
	return newCV;
};

const onWorkHistoryChange = (event, index, oldCV) => {
	let newCV = Object.assign({}, oldCV);
	if (event.target.name === "currentJob") {
		newCV.workHistory[index][event.target.name] = event.target.checked;
	} else {
		newCV.workHistory[index][event.target.name] = event.target.value;
	}
	return newCV;
};

const onEducationHistoryChange = (event, index, oldCV) => {
	let newCV = Object.assign({}, oldCV);
	newCV.educationHistory[index][event.target.name] = event.target.value;
	return newCV;
};

export {
	onIntroductionChange,
	onSummaryChange,
	onWorkHistoryChange,
	onEducationHistoryChange,
};