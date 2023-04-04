const enablePageScroll = () => {
	document.body.style.overflow = "auto";
};

const nextTutorialPage = (currentPage) => {
	return currentPage++;
};

const previousTutorialPage = (currentPage) => {
	return currentPage--;
};

// const exitTutorial = (oldController) => {
// 	let newController = Object.assign({}, oldController);
// 	enablePageScroll();
// 	newController.isHidden = true;
// 	return newController;
// };

export {
	nextTutorialPage,
	previousTutorialPage,
	enablePageScroll,
	// exitTutorial
}