import Notiflix from "notiflix";

const Notification = () => {
	Notiflix.Notify.init({
		clickToClose: true,
		fontFamily: "Lato Regular",
		cssAnimationStyle: "from-right",
		success: {
			background: "#0094C6"
		},
		info: {
			background: "#EAEBED",
			textColor: "#000"
		},
		failure: {
			background: "#BF211E"
		},
		warning: {
			background: "#E9CE2C",
			textColor: "#000"
		}
	});
	
	Notiflix.Block.init({
		fontFamily: "Lato Regular",
		svgColor: "#0094C6"
	})
	
	Notiflix.Loading.init({
		fontFamily: "Lato Regular",
		svgColor: "#0094C6"
	})
	
	return Notiflix;
}

export default Notification;