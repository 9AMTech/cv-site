export default function WorkHistory({ workHistory, onWorkHistoryChange, index }) {
	return (
		<section>
			<label htmlFor={'jobName' + index}>{"Company " + (index + 1) + ":"}</label>
			<input type="text" name={'jobName' + index} value={workHistory[index].jobName} onChange={(event) => onWorkHistoryChange(event, 'jobName', index)} />

			<label htmlFor={"jobPosition" + index}>Position :</label>
			<input type="text" name={"jobPosition" + index} value={workHistory[index].jobPosition} onChange={(event) => onWorkHistoryChange(event, 'jobPosition', index)} />

			<label htmlFor={"startingDate" + index}>Starting Date :</label>
			<input type="month" name={"startingDate" + index} value={workHistory[index].startDate} onChange={(event) => onWorkHistoryChange(event, 'startDate', index)} />

			{workHistory[index].currentJob === true
				? null
				: <>
					<label htmlFor={"endingDate" + index}>Ending Date :</label>
					<input type="month" name={"endingDate" + index} value={workHistory[index].endDate} onChange={(event) => onWorkHistoryChange(event, 'endDate', index)} />
				</>
			}

			<label htmlFor={"currentJob" + index}>Current Job? :</label>
			<input type="checkbox" name={"currentJob" + index} onChange={(event) => onWorkHistoryChange(event, 'currentJob', index)}></input>

			<label htmlFor={"jobDescription" + index}>Description :</label>
			<input type="textarea" name={"jobDescription" + index} value={workHistory[index].jobDescription} onChange={(event) => onWorkHistoryChange(event, 'jobDescription', index)}></input>

		</section>
	)
}