	// ===========================================================
  //    					Function for Formatting Data
  // ===========================================================

	const formatDate = (date, needDash) => {
		if (date === "") return;
		const dateParts = date.split("-");
		if (needDash) return dateParts[1] + "/" + dateParts[0] + " - ";
		else return dateParts[1] + "/" + dateParts[0];
	};
	
	// Cool Phone Number Format Function I found online
	let formatPhoneNumber = (str) => {
		//Filter only numbers from the input
		let cleaned = ("" + str).replace(/\D/g, "");
	
		//Check if the input is of correct length
		let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
	
		if (match) {
			return "(" + match[1] + ") " + match[2] + "-" + match[3];
		}
	
		return null;
	};

	export {
		formatDate, 
		formatPhoneNumber
	};