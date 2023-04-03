const preventPageScroll = () => {
	document.body.style.overflow = "hidden";
};

const enterTutorial = (oldController) => {
	let newController = Object.assign({}, oldController);
	preventPageScroll();
	newController.activePage = 0;
	newController.isHidden = false;
	return newController;
};

export {
	enterTutorial
}