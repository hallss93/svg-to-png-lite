'use strict';
module.exports = function (id) {
	return new Promise((res, rej) => {
		let doc = document.querySelector("#" + id);
		var svgString = new XMLSerializer().serializeToString(doc);
		var image = new Image();
		let xml = window.btoa(unescape(encodeURIComponent(svgString)));
		image.src = "data:image/svg+xml;base64," + xml;
		let url = "";

		image.onload = function () {
			var canvas = document.createElement("canvas");
			canvas.width = image.width;
			canvas.height = image.height;
			var context = canvas.getContext("2d");
			context.drawImage(image, 0, 0);
			url = canvas.toDataURL("image/png");
			res(url);
		};
		image.onerror = function (e) {
			rej({
				error: e
			})
		}
	})
}