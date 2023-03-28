import InputCSS from '../../css/inputCV.module.css';

export default function WorkHistory({ workHistory, onWorkHistoryChange, index }) {
	return (
				<>
				{index === 0 ? <h1>Work History</h1> : null}
				<h2>Company {index + 1} </h2>

				<section className={InputCSS.currentJobInfo}>
				<label htmlFor={"currentJob" + index}>Current Job? :</label>
				<input type="checkbox" name={"currentJob" + index} onChange={(event) => onWorkHistoryChange(event, 'currentJob', index)}></input>
				</section>

				<input type="text" name={'jobName' + index} placeholder='Job Name' value={workHistory[index].jobName} onChange={(event) => onWorkHistoryChange(event, 'jobName', index)} />

				<input type="text" name={"jobPosition" + index} placeholder='Job Position' value={workHistory[index].jobPosition} onChange={(event) => onWorkHistoryChange(event, 'jobPosition', index)} />

				<textarea name={"jobDescription" + index} placeholder='List job description or duties here' value={workHistory[index].jobDescription} onChange={(event) => onWorkHistoryChange(event, 'jobDescription', index)}></textarea>
				
				<section className={InputCSS.dates}>
				<label htmlFor={"startingDate" + index}>Start Date :</label>
				<input type="month" name={"startingDate" + index} value={workHistory[index].startDate} onChange={(event) => onWorkHistoryChange(event, 'startDate', index)} />

				{workHistory[index].currentJob === true
					? null
					: <>
						<label htmlFor={"endingDate" + index}>End Date :</label>
						<input type="month" name={"endingDate" + index} value={workHistory[index].endDate} onChange={(event) => onWorkHistoryChange(event, 'endDate', index)} />
					</>
				}
				</section>
					</>
	)
}