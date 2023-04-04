import OutputCSS from "../../css/outputCV.module.css";
import { formatDate } from "./functions";
import { useContext } from "react";
import { CVContext } from "../../Context";

export default function EducationHistory({ displayComponent }) {
  const cv = useContext(CVContext);

  const outputs = [
    {
      educationName: "educationName",
      certificateName: "certificateName",
      dateAcquired: "dateAcquired",
      educationDescription: "educationDescription",
    },
		{
      educationName: "educationName",
      certificateName: "certificateName",
      dateAcquired: "dateAcquired",
      educationDescription: "educationDescription",
    },
  ];

  return (
    <section className={OutputCSS.educationHistory + " preview-padding"}>
      <h2>Education</h2>

        {outputs.map((output, index) => (
				<section>
            <p className={OutputCSS[output.educationName]}>
              {cv.educationHistory[index][output.educationName]}
            </p>
            <p className={OutputCSS[output.certificateName]}>
              {cv.educationHistory[index][output.certificateName]}
            </p>
            <p className={OutputCSS[output.dateAcquired]}>
              {formatDate(cv.educationHistory[index][output.dateAcquired], false)}
            </p>
            <p className={OutputCSS[output.educationName]}>
              {cv.educationHistory[index][output.educationDescription]}
            </p>
          </section>
        ))}
    </section>
)};