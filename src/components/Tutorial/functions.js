const enablePageScroll = () => {
	document.body.style.overflow = "auto";
};

const nextTutorialPage = (oldController) => {
	let newController = Object.assign({}, oldController);
	console.log(oldController);
	newController.activePage++;
	return newController;
};

const previousTutorialPage = (oldController) => {
	let newController = Object.assign({}, oldController);
	newController.activePage--;
	return newController;
};

const exitTutorial = (oldController) => {
	let newController = Object.assign({}, oldController);
	enablePageScroll();
	newController.isHidden = true;
	return newController;
};

export {
	nextTutorialPage,
	previousTutorialPage,
	exitTutorial
}