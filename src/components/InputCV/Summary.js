export default function Summary({ summary, onSummaryChange }) {
	return (
		<section>
			<label htmlFor="summaryTextArea">Summary :</label>
			<input type="textarea" name="summaryTextArea" value={summary} placeholder='Write a brief description about yourself here!' onChange={event => onSummaryChange(event)}></input>
		</section>
	)
}