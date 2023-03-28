export default function Button({ onButtonClick, buttonText, classedAs }) {
	return (
		<button className={classedAs} onClick={onButtonClick}>{buttonText}</button>
	)
}