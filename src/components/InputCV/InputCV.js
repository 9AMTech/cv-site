import InputCSS from '../../css/inputCV.module.css';
import Button from '../Button.js'
import { Introduction, Summary, EducationHistory, WorkHistory } from './Exports.js';


export default function InputCV(props) {
	return (
		<section className={InputCSS.inputCV}>
			<Introduction
				introduction={props.introduction}
				onIntroductionChange={props.onIntroductionChange}
			/>
			<div className={InputCSS.fadedSeparator}>	&nbsp;</div>
			<Summary
				summary={props.summary}
				onSummaryChange={props.onSummaryChange}
			/>
			<div className={InputCSS.fadedSeparator}>	&nbsp;</div>

			<section id='work-history' className={InputCSS.workHistory}>

				<WorkHistory
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
			</section>
			{/* These buttons will conditionally render, the remove button will disapear when there's 
			only 1 work history. The add button will disapear when there is 3 work histories */}
			<section className={InputCSS.addRemoveButtons}>
			{props.counters.workHistory < 3 ? <Button onButtonClick={props.onAddWorkButtonClick} buttonText={'Add History'} /> : null}
			{props.counters.workHistory > 1 ? <Button onButtonClick={props.onRemoveWorkButtonClick} buttonText={'Remove History'} /> : null}
			</section>

			<div className={InputCSS.fadedSeparator}>	&nbsp;</div>

			<section id='education-history' className={InputCSS.educationHistory}>
				<EducationHistory
					educationHistory={props.educationHistory}
					onEducationHistoryChange={props.onEducationHistoryChange}
					index={0} />

				{props.displayComponent.educationHistory1
					? <EducationHistory
						educationHistory={props.educationHistory}
						onEducationHistoryChange={props.onEducationHistoryChange}
						index={1} />
					: null
				}
			</section>
			{/* These buttons work the same as the above, they will conditionally render when the counter */}
			<section className={InputCSS.addRemoveButtons}>
			{props.counters.educationHistory < 2 ? <Button onButtonClick={props.onAddEducationButtonClick} buttonText={'Add History'} /> : null}
			{props.counters.educationHistory > 1 ? <Button onButtonClick={props.onRemoveEducationButtonClick} buttonText={'Remove History'} /> : null}
			</section>

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