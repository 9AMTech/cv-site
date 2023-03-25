export default function Introduction({ onIntroductionChange, introduction }) {
	return (
		<section>
			<label htmlFor="firstName">First Name :</label>
			<input type="text" name="firstName" placeholder="Terry" value={introduction.firstName} onChange={(event) => onIntroductionChange(event, 'firstName')} />

			<label htmlFor="lastName">Last Name :</label>
			<input type="text" name="lastName" placeholder='Bogard' value={introduction.lastName} onChange={(event) => onIntroductionChange(event, 'lastName')} />

			<label htmlFor="phoneNumber">Phone Number :</label>
			<input type="text" name="phoneNumber" maxLength={10} placeholder='123-456-7890' value={introduction.phoneNumber} onChange={(event) => onIntroductionChange(event, 'phoneNumber')} />

			<label htmlFor="email">Email :</label>
			<input type="email" name='email' placeholder='terrybogardKOF@gmail.com' value={introduction.email} onChange={(event) => onIntroductionChange(event, 'email')} />

			<label htmlFor="linkedIn">Linked-In :</label>
			<input type="text" name="linkedIn" placeholder='https://www.linkedin.com/in/terry-bogard/' value={introduction.linkedIn} onChange={(event) => onIntroductionChange(event, 'linkedIn')} />

			<label htmlFor="website">Website :</label>
			<input type="text" name="website" placeholder='https://www.terrybogard.com/' value={introduction.website} onChange={(event) => onIntroductionChange(event, 'website')} />
		</section>
	)
}