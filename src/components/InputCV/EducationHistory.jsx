import InputCSS from "../../css/inputCV.module.css";

export default function EducationHistory({
  educationHistory,
  onEducationHistoryChange,
  index,
}) {
  return (
    <>
      {index === 0 ? <h1>Education History</h1> : null}
      <h2>Education {index + 1} </h2>
      <input
        type="text"
        name="educationName"
        placeholder="School Name"
        value={educationHistory[index].educationName}
        onChange={(event) =>
          onEducationHistoryChange(event, index)
        }
      />

      <input
        type="text"
        name="certificateName"
        placeholder="Degree/Certificate Name"
        value={educationHistory[index].certificateName}
        onChange={(event) =>
          onEducationHistoryChange(event, index)
        }
      />

      <textarea
        name="educationDescription"
        placeholder="Education description/list any achievements"
        value={educationHistory[index].educationDescription}
        onChange={(event) =>
          onEducationHistoryChange(event, index)
        }
      />

      <section className={InputCSS.certificateDateInfo}>
        <label htmlFor="dateAcquired">Grad Date :</label>
        <input
          type="month"
          name="dateAcquired"
          value={educationHistory[index].dateAcquired}
          onChange={(event) =>
            onEducationHistoryChange(event, index)
          }
        />
      </section>
    </>
  );
}
