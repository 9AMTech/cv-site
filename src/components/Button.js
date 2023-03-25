export default function Button({ onButtonClick, buttonText }) {
	return (
		<button onClick={onButtonClick}>{buttonText}</button>
	)
}