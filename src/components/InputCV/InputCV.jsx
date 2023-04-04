import InputCSS from "../../css/inputCV.module.css";
import Button from "../Button.jsx";
import {
  Introduction,
  Summary,
  EducationHistory,
  WorkHistory,
} from "./Exports.js";
import { useState } from "react";

export default function InputCV(props) {
  const [workHistoryData, setWorkHistoryData] = useState([{ id: 0 }]);
  const [educationHistoryData, setEducationHistoryData] = useState([{ id: 0 }]);

  const addWorkHistory = () => {
    let newArray = [...workHistoryData];
    newArray.push({ id: workHistoryData.length });
    setWorkHistoryData(newArray);
  };

  const removeWorkHistory = () => {
    let newArray = [...workHistoryData];
    newArray.pop();
    setWorkHistoryData(newArray);
  };

  const addEducationHistory = () => {
    let newArray = educationHistoryData.map((x) => x);
    newArray.push({ id: educationHistoryData.length });
    setEducationHistoryData(newArray);
  };

  const removeEducationHistory = () => {
    let newArray = educationHistoryData.map((x) => x);
    newArray.pop();
    setEducationHistoryData(newArray);
  };

  return (
    <section className={InputCSS.inputCV}>
      <Introduction onIntroductionChange={props.onIntroductionChange} />
      <div className={InputCSS.fadedSeparator}> &nbsp;</div>
      <Summary onSummaryChange={props.onSummaryChange} />
      <div className={InputCSS.fadedSeparator}> &nbsp;</div>

      <section id="work-history" className={InputCSS.workHistory}>
        {workHistoryData.map((history) => (
          <WorkHistory index={history.id} />
        ))}
      </section>

      <section className={InputCSS.addRemoveButtons}>
        {workHistoryData.length < 3 ? (
          <Button onButtonClick={addWorkHistory} buttonText={"Add History"} />
        ) : null}
        {workHistoryData.length > 1 ? (
          <Button
            onButtonClick={removeWorkHistory}
            buttonText={"Remove History"}
          />
        ) : null}
      </section>
      <div className={InputCSS.fadedSeparator}> &nbsp;</div>

      <section id="education-history" className={InputCSS.educationHistory}>
        {educationHistoryData.map((history) => (
          <EducationHistory index={history.id} />
        ))}
      </section>
      <section className={InputCSS.addRemoveButtons}>
        {educationHistoryData.length < 2 ? (
          <Button
            onButtonClick={addEducationHistory}
            buttonText={"Add History"}
          />
        ) : null}
        {educationHistoryData.length > 1 ? (
          <Button
            onButtonClick={removeEducationHistory}
            buttonText={"Remove History"}
          />
        ) : null}
      </section>
    </section>
  );
}
