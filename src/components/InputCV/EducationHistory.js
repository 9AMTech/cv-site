import InputCSS from '../../css/inputCV.module.css';

export default function EducationHistory({ educationHistory, onEducationHistoryChange, index }) {
	return (
		<>
			{index === 0 ? <h1>Education History</h1> : null}
			<h2>Education {index + 1} </h2>
			<input type="text" name={"educationName" + index} placeholder='School Name' value={educationHistory[index].educationName} onChange={(event) => onEducationHistoryChange(event, 'educationName', index)} />

			<input type="text" name={"certificate" + index} placeholder='Degree/Certificate Name' value={educationHistory[index].certificateName} onChange={(event) => onEducationHistoryChange(event, 'certificateName', index)} />

			<textarea name={"educationDescription" + index} placeholder='Education description/list any achievements' value={educationHistory[index].educationDescription} onChange={(event) => onEducationHistoryChange(event, 'educationDescription', index)}></textarea>
			
			<section className={InputCSS.certificateDateInfo}>
			<label htmlFor={"dateAchieved" + index}>Grad Date :</label>
			<input type="month" name={"dateAchieved" + index} value={educationHistory[index].dateAcquired} onChange={(event) => onEducationHistoryChange(event, 'dateAcquired', index)} />
			</section>
		</>
	)
}