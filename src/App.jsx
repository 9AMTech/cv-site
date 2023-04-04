import "./App.css";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { CVContext, SetCVContext } from "./Context";
import InputCV from "./components/InputCV/InputCV";
import OutputCV from "./components/OutputCV/OutputCV";
import Toolbar from "./components/Toolbar/Toolbar";
import Tutorial from "./components/Tutorial/Tutorial";

export default function App() {
  // ===================================================
  // ==================== States =======================
  // ===================================================

  const initialCV = {
    introduction: {
      firstName: "",
      lastName: "",
      profession: "",
      phoneNumber: "",
      email: "",
      linkedIn: "",
      website: "",
    },
    summary: "",
    workHistory: [
      {
        id: 0,
        jobName: "",
        jobPosition: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
        currentJob: false,
      },
      {
        id: 1,
        jobName: "",
        jobPosition: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
        currentJob: false,
      },
      {
        id: 2,
        jobName: "",
        jobPosition: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
        currentJob: false,
      },
    ],
    educationHistory: [
      {
        id: 0,
        educationName: "",
        certificateName: "",
        dateAcquired: "",
        educationDescription: "",
      },
      {
        id: 1,
        educationName: "",
        certificateName: "",
        dateAcquired: "",
        educationDescription: "",
      },
    ],
  };

  const initialIsTutorialHidden = false;

  const [cv, setCV] = useState(initialCV);

  const [isTutorialHidden, setIsTutorialHidden] = useState(
    initialIsTutorialHidden
  );

  // ===========================================================
  //           Function for Resetting the Form Info
  // ===========================================================

  const resetForm = () => {
    let newCV = Object.assign({}, initialCV);
    setCV(newCV);
  };

  // ===========================================================
  //           Function for Generating a Sample CV
  // ===========================================================

  const generateSampleCV = () => {
    resetForm();
    setCV({
      introduction: {
        firstName: "John",
        lastName: "Doe",
        profession: "Web Developer",
        phoneNumber: "555-555-5555",
        email: "coolwebdevname@web.dev",
        linkedIn: "www.linkedin.com/in/webdevguyman/",
        website: "www.dev.com",
      },
      summary: "Aspiring web developer looking to make it in the field!",
      workHistory: [
        {
          id: 0,
          jobName: "FAANG Company",
          jobPosition: "Front-end Developer",
          startDate: "2020-01",
          endDate: "2023-03",
          jobDescription:
            "I work at a FAANG company! Or would it be MAANG now because Facebook turned to Meta? Who knows? I made it!",
          currentJob: true,
        },
        {
          id: 1,
          jobName: "Florida Man Mall",
          jobPosition: "Mall Cop",
          startDate: "2017-06",
          endDate: "2019-12",
          jobDescription:
            "I stopped kids from skating on the stairs. I was really good at it",
        },
        {
          id: 2,
          jobName: "Generic Grocery Store Name",
          jobPosition: "Bagger",
          startDate: "2010-09",
          endDate: "2015-05",
          jobDescription:
            "I fight the urges of eating customers groceries while bagging them. Vigorously!",
        },
      ],
      educationHistory: [
        {
          id: 0,
          educationName: "Community College",
          certificateName: "Associates Degree",
          dateAcquired: "2023-03",
          educationDescription: "I got another piece of paper here!",
        },
        {
          id: 1,
          educationName: "High School",
          certificateName: "Diploma",
          dateAcquired: "2005-03",
          educationDescription: "I got a piece of paper here!",
        },
      ],
    });
  };

  // ===========================================================
  //          Functions for Printing the OutputCV
  // ===========================================================

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => console.log("Printing!!!"),
    bodyClass: "toPrint",
    documentTitle:
      cv.introduction.firstName + " " + cv.introduction.lastName + " - Resume",
  });

  return (
    <div className="App">
      <Tutorial
        isTutorialHidden={isTutorialHidden}
        setIsTutorialHidden={setIsTutorialHidden}
      />
      <Header />
      <main>
        <Toolbar
          isTutorialHidden={isTutorialHidden}
          setIsTutorialHidden={setIsTutorialHidden}
          generateSampleCV={generateSampleCV}
          resetForm={resetForm}
          handlePrint={handlePrint}
        />
        <CVContext.Provider value={cv}>
          <SetCVContext.Provider value={setCV}>
            <InputCV
            // onIntroductionChange={onIntroductionChange}
            />
          </SetCVContext.Provider>
          <OutputCV ref={componentRef} />
        </CVContext.Provider>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1 id="title">Simple-CV</h1>
    </header>
  );
}
