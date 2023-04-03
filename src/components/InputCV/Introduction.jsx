import InputCSS from "../../css/inputCV.module.css";
import { onIntroductionChange } from './functions';
import { useContext } from "react";
import { CVContext, SetCVContext } from "../../Context";

export default function Introduction() {
	const cv = useContext(CVContext);
	const setCV = useContext(SetCVContext);

  const inputs = [
    {
      type: "text",
      name: "firstName",
      text: "First Name",
			length: null,
    },
    {
      type: "text",
      name: "lastName",
      text: "Last Name",
			length: null,
    },
    {
      type: "text",
      name: "profession",
      text: "Profession",
			length: null,
    },
    {
      type: "text",
      name: "phoneNumber",
      text: "Phone Number",
			length: 10,
    },
    {
      type: "email",
      name: "email",
      text: "Email",
			length: null,
    },
    {
      type: "text",
      name: "website",
      text: "Personal Website",
			length: null,
    },
    {
      type: "text",
      name: "linkedIn",
      text: "Linked In",
			length: null,
    },
  ];

  return (
    <section id="introduction" className={InputCSS.introduction}>
      <h1>Introduction</h1>
			{ inputs.map(input => 
				<input 
				type={input.type} 
				name={input.name}
				placeholder={input.text}
				maxLength={input.length}
				value={cv.introduction[input.name]}
				onChange={(event) => setCV(onIntroductionChange(event, cv))}
				/>
				)
				
			}
    </section>
  );
}