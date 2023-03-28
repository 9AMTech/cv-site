import InputCSS from '../../css/inputCV.module.css';

export default function Introduction({ onIntroductionChange, introduction }) {
	return (
		<section id='introduction' className={InputCSS.introduction}>
			<h1>Introduction</h1>
			<input type="text" name="firstName" placeholder="First Name" value={introduction.firstName} onChange={(event) => onIntroductionChange(event, 'firstName')} />

			<input type="text" name="lastName" placeholder='Last Name' value={introduction.lastName} onChange={(event) => onIntroductionChange(event, 'lastName')} />

			<input type="text" name="profession" placeholder='Profession' value={introduction.profession} onChange={(event) => onIntroductionChange(event, 'profession')} />

			<input type="text" name="phoneNumber" maxLength={10} placeholder='Phone Number' value={introduction.phoneNumber} onChange={(event) => onIntroductionChange(event, 'phoneNumber')} />

			<input type="email" name='email' placeholder='E-Mail Address' value={introduction.email} onChange={(event) => onIntroductionChange(event, 'email')} />

			<input type="text" name="linkedIn" placeholder='Linked-In' value={introduction.linkedIn} onChange={(event) => onIntroductionChange(event, 'linkedIn')} />

			<input type="text" name="website" placeholder='Personal Site' value={introduction.website} onChange={(event) => onIntroductionChange(event, 'website')} />
		</section>
	)
}