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

  const initialDisplayComponent = [
    {
      workHistory1: false,
      workHistory2: false,
      educationHistory1: false,
    },
  ];

  const initialCounters = {
    workHistory: 1,
    educationHistory: 1,
  };

  const initialTutorialController = {
    activePage: 0,
    isHidden: false,
  };

  const [cv, setCV] = useState(initialCV);

  const [displayComponent, setDisplayComponent] = useState(
    initialDisplayComponent
  );

  const [counters, setCounters] = useState(initialCounters);

  const [tutorialController, setTutorialController] = useState(
    initialTutorialController
  );

  // ===========================================================
  //    Functions for Adding and Removing Sections of the CV
  // ===========================================================

  const onAddWorkButtonClick = () => {
    let newDisplayComponent = Object.assign({}, displayComponent);
    let newCounter = Object.assign({}, counters);

    newCounter.workHistory++;
    if (newCounter.workHistory === 2) {
      newDisplayComponent.workHistory1 = true;
    } else if (newCounter.workHistory === 3) {
      newDisplayComponent.workHistory2 = true;
    }
    setDisplayComponent(newDisplayComponent);
    setCounters(newCounter);
  };

  const onRemoveWorkButtonClick = () => {
    let newDisplayComponent = Object.assign({}, displayComponent);
    let newCounter = Object.assign({}, counters);

    if (newCounter.workHistory === 2) {
      newDisplayComponent.workHistory1 = false;
    } else if (newCounter.workHistory === 3) {
      newDisplayComponent.workHistory2 = false;
    }
    newCounter.workHistory--;
    setDisplayComponent(newDisplayComponent);
    setCounters(newCounter);
  };

  const onAddEducationButtonClick = () => {
    let newDisplayComponent = Object.assign({}, displayComponent);
    let newCounter = Object.assign({}, counters);

    newCounter.educationHistory++;
    if (newCounter.educationHistory === 2) {
      newDisplayComponent.educationHistory1 = true;
    }
    setDisplayComponent(newDisplayComponent);
    setCounters(newCounter);
  };

  const onRemoveEducationButtonClick = () => {
    let newDisplayComponent = Object.assign({}, displayComponent);
    let newCounter = Object.assign({}, counters);

    if (newCounter.educationHistory === 2) {
      newDisplayComponent.educationHistory1 = false;
    }
    newCounter.educationHistory--;
    setDisplayComponent(newDisplayComponent);
    setCounters(newCounter);
  };

  // ===========================================================
  //           Function for Resetting the Form Info
  // ===========================================================

  const resetForm = () => {
    let newCV = Object.assign({}, initialCV);
    let newDisplayComponent = Object.assign({}, initialDisplayComponent);
    let newCounters = Object.assign({}, initialCounters);
    setCV(newCV);
    setDisplayComponent(newDisplayComponent);
    setCounters(newCounters);
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
    setDisplayComponent({
      workHistory1: true,
      workHistory2: true,
      educationHistory1: true,
    });
    setCounters({
      workHistory: 3,
      educationHistory: 2,
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
        tutorialController={tutorialController}
				setTutorialController={setTutorialController}
      />
      <Header />
      <main>
        <Toolbar
          tutorialController={tutorialController}
          setTutorialController={setTutorialController}
          generateSampleCV={generateSampleCV}
          resetForm={resetForm}
          handlePrint={handlePrint}
        />
        <CVContext.Provider value={cv}>
          <SetCVContext.Provider value={setCV}>
            <InputCV
              displayComponent={displayComponent}
              setDisplayComponent={setDisplayComponent}
              counters={counters}
              setCounters={setCounters}
              // onIntroductionChange={onIntroductionChange}
              onAddWorkButtonClick={onAddWorkButtonClick}
              onRemoveWorkButtonClick={onRemoveWorkButtonClick}
              onAddEducationButtonClick={onAddEducationButtonClick}
              onRemoveEducationButtonClick={onRemoveEducationButtonClick}
            />
          </SetCVContext.Provider>
          <OutputCV ref={componentRef} displayComponent={displayComponent} />
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
