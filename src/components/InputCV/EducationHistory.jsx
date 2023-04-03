import InputCSS from "../../css/inputCV.module.css";
import { useContext } from "react";
import { CVContext, SetCVContext } from "../../Context";
import { onEducationHistoryChange } from "./functions";

export default function EducationHistory({ index }) {
  const cv = useContext(CVContext);
  const setCV = useContext(SetCVContext);

  return (
    <>
      {index === 0 ? <h1>Education History</h1> : null}
      <h2>Education {index + 1} </h2>
      <input
        type="text"
        name="educationName"
        placeholder="School Name"
        value={cv.educationHistory[index].educationName}
        onChange={(event) => setCV(onEducationHistoryChange(event, index, cv))}
      />

      <input
        type="text"
        name="certificateName"
        placeholder="Degree/Certificate Name"
        value={cv.educationHistory[index].certificateName}
        onChange={(event) => setCV(onEducationHistoryChange(event, index, cv))}
      />

      <textarea
        name="educationDescription"
        placeholder="Education description/list any achievements"
        value={cv.educationHistory[index].educationDescription}
        onChange={(event) => setCV(onEducationHistoryChange(event, index, cv))}
      />

      <section className={InputCSS.certificateDateInfo}>
        <label htmlFor="dateAcquired">Grad Date :</label>
        <input
          type="month"
          name="dateAcquired"
          value={cv.educationHistory[index].dateAcquired}
          onChange={(event) =>
            setCV(onEducationHistoryChange(event, index, cv))
          }
        />
      </section>
    </>
  );
}
