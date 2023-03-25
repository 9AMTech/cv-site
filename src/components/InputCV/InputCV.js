import InputCSS from '../../css/inputCV.module.css';
import Button from '../Button.js'
import { Introduction, Summary, EducationHistory, WorkHistory } from './Exports.js';


export default function InputCV(props) {
	return (
		<section className="input-cv">
			<Introduction
				className={InputCSS.introduction}
				introduction={props.introduction}
				onIntroductionChange={props.onIntroductionChange}
				/>

			<Summary
				className={InputCSS.summary}
				summary={props.summary}
				onSummaryChange={props.onSummaryChange}
				/>

			<WorkHistory
				className={InputCSS.workHistory}
				workHistory={props.workHistory}
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
				className={InputCSS.workHistory}
				workHistory={props.workHistory}
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
				className={InputCSS.workHistory}
				workHistory={props.workHistory}
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

			<EducationHistory
				className={InputCSS.workHistory}
				educationHistory={props.educationHistory}
				onEducationHistoryChange={props.onEducationHistoryChange}
				index={0} />

			{props.displayComponent.educationHistory1
				? <EducationHistory
				className={InputCSS.workHistory}
				educationHistory={props.educationHistory}
				onEducationHistoryChange={props.onEducationHistoryChange}
				index={1} />
				: null
			}
			{/* These buttons work the same as the above, they will conditionally render when the counter */}
			{props.counters.educationHistory < 2 ? <Button onButtonClick={props.onAddEducationButtonClick} buttonText={'Add Education History'} /> : null}
			{props.counters.educationHistory > 1 ? <Button onButtonClick={props.onRemoveEducationButtonClick} buttonText={'Remove Education History'} /> : null}

		</section>
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