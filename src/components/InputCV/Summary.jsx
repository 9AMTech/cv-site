import InputCSS from '../../css/inputCV.module.css';

export default function Summary({ summary, onSummaryChange }) {
	return (
		<section id='summary' className={InputCSS.summary}>
			<h1>Summary</h1>
			<textarea value={summary} maxLength={120} placeholder='Write a brief description about yourself here!' onChange={event => onSummaryChange(event)}></textarea>
		</section>
	)
}