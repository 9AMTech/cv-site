import { forwardRef } from 'react';
import { Introduction, Summary, EducationHistory, WorkHistory } from './Exports.js';

// const OutputCV = forwardRef((props, ref) => {
// 	return (
// 		<section className="output-cv" ref={ref}>
// 			<Introduction introduction={props.introduction} />
// 			<Summary summary={props.summary} />
// 			<WorkHistory workHistory={props.workHistory} displayComponent={props.displayComponent} />
// 			<EducationHistory educationHistory={props.educationHistory} displayComponent={props.displayComponent} />
// 		</section>
// 	)
// })

const OutputCV = forwardRef((props, ref) => {
	return (
		<section className="output-cv" ref={ref}>
			<Introduction introduction={props.introduction} formatPhoneNumber={props.formatPhoneNumber} />
			<Summary summary={props.summary} />
			<WorkHistory workHistory={props.workHistory} displayComponent={props.displayComponent} formatDate={props.formatDate} />
			<EducationHistory educationHistory={props.educationHistory} displayComponent={props.displayComponent} formatDate={props.formatDate}/>
		</section>
	)
})

export default OutputCV;


// export default function OutputCV(props){
// 	return (
// 		<section className="output-cv" ref={props.newRef}>
// 			<Introduction introduction={props.introduction} />
// 			<Summary summary={props.summary} />
// 			<WorkHistory workHistory={props.workHistory} displayComponent={props.displayComponent} />
// 			<EducationHistory educationHistory={props.educationHistory} displayComponent={props.displayComponent} />
// 		</section>
// 	)
// }

