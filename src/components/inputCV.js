import InputCSS from '../css/inputCV.module.css';

export default function InputCV(props) {
	return (
		<section className="input-cv">

			<Introduction onIntroductionChange={props.onIntroductionChange} />

			<Summary onSummaryChange={props.onSummaryChange} />

			<WorkHistory
				onWorkHistoryChange={props.onWorkHistoryChange}
				index={0}
				displayComponent={props.displayComponent}
				setDisplayComponent={props.setDisplayComponent}
				counters={props.counters}
				setCounters={props.setCounters}
			/>
			{/* The following two components are conditional. They will render if the add work history button is hit. */}
			{props.displayComponent.workHistory1
				? <WorkHistory
					onWorkHistoryChange={props.onWorkHistoryChange}
					index={1}
					displayComponent={props.displayComponent}
					setDisplayComponent={props.setDisplayComponent}
					counters={props.counters}
					setCounters={props.setCounters}
				/>
				: null
			}
			{props.displayComponent.workHistory2
				? <WorkHistory
					onWorkHistoryChange={props.onWorkHistoryChange}
					index={2}
					displayComponent={props.displayComponent}
					setDisplayComponent={props.setDisplayComponent}
					counters={props.counters}
					setCounters={props.setCounters}
				/>
				: null
			}
			{/* These buttons will conditionally render, the remove button will disapear when there's 
			only 1 work history. The add button will disapear when there is 3 work histories */}
			{props.counters.workHistory < 3 ? <Button onButtonClick={props.onAddWorkButtonClick} buttonText={'Add Work History'} /> : null}
			{props.counters.workHistory > 1 ? <Button onButtonClick={props.onRemoveWorkButtonClick} buttonText={'Remove Work History'} /> : null}

			<EducationHistory onEducationHistoryChange={props.onEducationHistoryChange} index={0} />
			{props.displayComponent.educationHistory1
				? <EducationHistory
					onEducationHistoryChange={props.onEducationHistoryChange}
					index={1} />
				: null
			}
			{/* These buttons work the same as the above, they will conditionally render when the counter */}
			{props.counters.educationHistory < 2 ? <Button onButtonClick={props.onAddEducationButtonClick} buttonText={'Add Education History'} /> : null}
			{props.counters.educationHistory > 1 ? <Button onButtonClick={props.onRemoveEducationButtonClick} buttonText={'Remove Education History'} /> : null}
			<Button buttonText={'Sample CV'} />
			<Button buttonText={'Print CV'} onClick={props.onPrintClick}/>
		</section>
	)
}

function Introduction({ onIntroductionChange }) {
	return (
		<section className={InputCSS.introduction}>
			<label htmlFor="firstName">First Name :</label>
			<input type="text" name="firstName" placeholder="Terry" onChange={(event) => onIntroductionChange(event, 'firstName')} />

			<label htmlFor="lastName">Last Name :</label>
			<input type="text" name="lastName" placeholder='Bogard' onChange={(event) => onIntroductionChange(event, 'lastName')} />

			<label htmlFor="phoneNumber">Phone Number :</label>
			<input type="text" name="phoneNumber" placeholder='123-456-7890' onChange={(event) => onIntroductionChange(event, 'phoneNumber')} />

			<label htmlFor="email">Email :</label>
			<input type="email" name='email' placeholder='terrybogardKOF@gmail.com' onChange={(event) => onIntroductionChange(event, 'email')} />

			<label htmlFor="linkedIn">Linked-In :</label>
			<input type="text" name="linkedIn" placeholder='https://www.linkedin.com/in/terry-bogard/' onChange={(event) => onIntroductionChange(event, 'linkedIn')} />

			<label htmlFor="website">Website :</label>
			<input type="text" name="website" placeholder='https://www.terrybogard.com/' onChange={(event) => onIntroductionChange(event, 'website')} />
		</section>
	)
}

function Summary({ onSummaryChange }) {
	return (
		<section className={InputCSS.summary}>
			<label htmlFor="summaryTextArea">Summary :</label>
			<input type="textarea" name="summaryTextArea" placeholder='Write a brief description about yourself here!' onChange={event => onSummaryChange(event)}></input>
		</section>
	)
}

function WorkHistory({ onWorkHistoryChange, index, displayComponent, setDisplayComponent, counters }) {
	return (
		<section className={InputCSS.workHistory}>
			<label htmlFor="jobName1">Company 1 :</label>
			<input type="text" name="jobName1" onChange={(event) => onWorkHistoryChange(event, 'jobName', index)} />

			<label htmlFor="jobPosition1">Position :</label>
			<input type="text" name="jobPosition1" onChange={(event) => onWorkHistoryChange(event, 'jobPosition', index)} />

			<label htmlFor="startingDate1">Starting Date :</label>
			<input type="month" name="startingDate1" onChange={(event) => onWorkHistoryChange(event, 'startDate', index)} />

			<label htmlFor="endingDate1">Ending Date :</label>
			<input type="month" name="endingDate1" onChange={(event) => onWorkHistoryChange(event, 'endDate', index)} />

			<label htmlFor="jobDescription1">Description :</label>
			<input type="textarea" name="jobDescription1" onChange={(event) => onWorkHistoryChange(event, 'jobDescription', index)}></input>

		</section>
	)
}

function EducationHistory({ onEducationHistoryChange, index }) {
	return (
		<section className={InputCSS.educationHistory}>
			<label htmlFor="educationName1">Education 1 :</label>
			<input type="text" name="educationName1" onChange={(event) => onEducationHistoryChange(event, 'educationName', index)} />

			<label htmlFor="certificate1">Position :</label>
			<input type="text" name="certificate1" onChange={(event) => onEducationHistoryChange(event, 'certificateName', index)} />

			<label htmlFor="dateAchieved1">Starting Date :</label>
			<input type="month" name="dateAchieved1" onChange={(event) => onEducationHistoryChange(event, 'dateAcquired', index)} />

			<label htmlFor="educationDescription1">Summary :</label>
			<input type="textarea" name="educationDescription1" onChange={(event) => onEducationHistoryChange(event, 'educationDescription', index)}></input>
		</section>
	)
}

function Button({ onButtonClick, buttonText }) {
	return (
		<button onClick={onButtonClick}>{buttonText}</button>
	)
}

// function Input({ labelText, inputType, inputName, placeholder, onChangeEvent }) {
// 	return (
// 		<>
// 			<label htmlFor={inputName}>{labelText}</label>
// 			<input type={inputType} name={inputName} placeholder={placeholder} onChange={onChangeEvent}></input>
// 		</>
// 	)
// }