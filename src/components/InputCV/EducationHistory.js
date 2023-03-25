export default function EducationHistory({ educationHistory, onEducationHistoryChange, index }) {
	return (
		<section>
			<label htmlFor={"educationName" + index}>{"Education " + (index + 1) + ":"}</label>
			<input type="text" name={"educationName" + index} value={educationHistory[index].educationName} onChange={(event) => onEducationHistoryChange(event, 'educationName', index)} />

			<label htmlFor={"certificate" + index}>Position :</label>
			<input type="text" name={"certificate" + index} value={educationHistory[index].certificateName} onChange={(event) => onEducationHistoryChange(event, 'certificateName', index)} />

			<label htmlFor={"dateAchieved" + index}>Starting Date :</label>
			<input type="month" name={"dateAchieved" + index} value={educationHistory[index].dateAcquired} onChange={(event) => onEducationHistoryChange(event, 'dateAcquired', index)} />

			<label htmlFor={"educationDescription" + index}>Summary :</label>
			<input type="textarea" name={"educationDescription" + index} value={educationHistory[index].educationDescription} onChange={(event) => onEducationHistoryChange(event, 'educationDescription', index)}></input>
		</section>
	)
}