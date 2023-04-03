import InputCSS from "../../css/inputCV.module.css";
import { useContext } from "react";
import { CVContext, SetCVContext } from "../../Context";
import { onWorkHistoryChange } from "./functions";

export default function WorkHistory({ index }) {
  const cv = useContext(CVContext);
  const setCV = useContext(SetCVContext);

  return (
    <>
      {index === 0 ? <h1>Work History</h1> : null}
      <h2>Company {index + 1} </h2>

      <section className={InputCSS.currentJobInfo}>
        <label htmlFor="currentJob">Current Job? :</label>
        <input
          type="checkbox"
          name="currentJob"
          onChange={(event) => setCV(onWorkHistoryChange(event, index, cv))}
        />
      </section>

      <input
        type="text"
        name="jobName"
        placeholder="Job Name"
        value={cv.workHistory[index].jobName}
        onChange={(event) => setCV(onWorkHistoryChange(event, index, cv))}
      />

      <input
        type="text"
        name="jobPosition"
        placeholder="Job Position"
        value={cv.workHistory[index].jobPosition}
        onChange={(event) => setCV(onWorkHistoryChange(event, index, cv))}
      />

      <textarea
        name="jobDescription"
        placeholder="List job description or duties here"
        value={cv.workHistory[index].jobDescription}
        onChange={(event) => setCV(onWorkHistoryChange(event, index, cv))}
      />

      <section className={InputCSS.dates}>
        <label htmlFor="startingDate">Start Date :</label>
        <input
          type="month"
          name="startDate"
          value={cv.workHistory[index].startDate}
          onChange={(event) => setCV(onWorkHistoryChange(event, index, cv))}
        />

        {cv.workHistory[index].currentJob ? null : (
          <>
            <label htmlFor="endingDate">End Date :</label>
            <input
              type="month"
              name="endDate"
              value={cv.workHistory[index].endDate}
              onChange={(event) => setCV(onWorkHistoryChange(event, index, cv))}
            />
          </>
        )}
      </section>
    </>
  );
}
