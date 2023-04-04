Put helper functions in their own modules and import them where needed

Line lengths are cringe
	USE 80 COL LINES

every component should
	- Files should end in JSX DONE
	- have it's own file Partially DONE
	- their helpers should be grouped by domain in their own files

=== true isn't needed DONE
	So this would be a case of {someVar ?
	or {!someVar ?
	YES MF

Inputs can be generated in a loop to avoid repetition partially done?
		EXAMPLE
		const inputs = [ { type: 'text', name: 'firstName', ... }, ... ];

		return <>
			{ inputs.map(input =>
				<input type={input.type} name={input.name} ... />
			) }
		</>


for the switch cases, I can just assign a relevant name DONE
	- then I can run newIntroduction[e.target.name] =e.target.value instead of switch casing it

	   const onIntroductionChange = (event, toUpdate) => {
        let newIntroduction = Object.assign({}, introduction);

        switch (toUpdate) {
            case 'firstName':
                newIntroduction.firstName = event.target.value;
                break;
            case 'lastName':
                newIntroduction.lastName = event.target.value;
                break;
            case 'profession':
                newIntroduction.profession = event.target.value;
                break;
            case 'phoneNumber':
                newIntroduction.phoneNumber = event.target.value;
                break;
            case 'email':
                newIntroduction.email = event.target.value;
                break;
            case 'linkedIn':
                newIntroduction.linkedIn = event.target.value;
                break;
            case 'website':
                newIntroduction.website = event.target.value;
                break;
            default:
                throw new Error("There's something wrong with onIntroductionChange()");
        }
        setIntroduction(newIntroduction);
    }


Just put them into an array and loop over them
This seems to be the way of doing things in react
	workHistories: [ { ...workHistory1 }, ... ]

	data could just be put into 1 obj

by keeping all states in the app I'm rerendering the entire app every time.
	keep state where it needs to go
	Lift state on a case by case basis
	useContext is the key here
		-it houses state and passes it to nested components
		-w/o unnecessary rerenders
