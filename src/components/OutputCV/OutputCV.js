import OutputCSS from '../../css/outputCV.module.css';
import { forwardRef } from 'react';
import { Introduction, EducationHistory, WorkHistory } from './Exports.js';

const OutputCV = forwardRef((props, ref) => {
	return (
		<section id='preview' className={OutputCSS.outputCV} ref={ref}>
			<Introduction introduction={props.introduction} formatPhoneNumber={props.formatPhoneNumber} summary={props.summary} />
			<WorkHistory workHistory={props.workHistory} displayComponent={props.displayComponent} formatDate={props.formatDate}/>
			<EducationHistory educationHistory={props.educationHistory} displayComponent={props.displayComponent} formatDate={props.formatDate}/>
		</section>
	)
})

export default OutputCV;


