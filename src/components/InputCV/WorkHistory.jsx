import InputCSS from "../../css/inputCV.module.css";

export default function WorkHistory({
  workHistory,
  onWorkHistoryChange,
  index,
}) {
  return (
    <>
      {index === 0 ? <h1>Work History</h1> : null}
      <h2>Company {index + 1} </h2>

      <section className={InputCSS.currentJobInfo}>
        <label htmlFor="currentJob">Current Job? :</label>
        <input
          type="checkbox"
          name="currentJob"
          onChange={(event) => onWorkHistoryChange(event, index)}
        />
      </section>

      <input
        type="text"
        name="jobName"
        placeholder="Job Name"
        value={workHistory[index].jobName}
        onChange={(event) => onWorkHistoryChange(event, index)}
      />

      <input
        type="text"
        name="jobPosition"
        placeholder="Job Position"
        value={workHistory[index].jobPosition}
        onChange={(event) => onWorkHistoryChange(event, index)}
      />

      <textarea
        name="jobDescription"
        placeholder="List job description or duties here"
        value={workHistory[index].jobDescription}
        onChange={(event) => onWorkHistoryChange(event, index)}
      />

      <section className={InputCSS.dates}>
        <label htmlFor="startingDate">Start Date :</label>
        <input
          type="month"
          name="startDate"
          value={workHistory[index].startDate}
          onChange={(event) => onWorkHistoryChange(event, index)}
        />

        {workHistory[index].currentJob ? null : (
          <>
            <label htmlFor="endingDate">End Date :</label>
            <input
              type="month"
              name="endDate"
              value={workHistory[index].endDate}
              onChange={(event) => onWorkHistoryChange(event, index)}
            />
          </>
        )}
      </section>
    </>
  );
}
