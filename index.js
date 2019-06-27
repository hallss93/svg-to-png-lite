'use strict';
module.exports = function (id, opt) {
	return new Promise((res, rej) => {
		const {
			width,
			height,
			ext = "png"
		} = opt
		if (ext.toUpperCase() != 'PNG' && ext.toUpperCase() != 'JPEG') {
			rej({
				error: "Extensão inválida"
			})
			return false;
		} else
			try {
				let doc = document.querySelector("#" + id);
				var svgString = new XMLSerializer().serializeToString(doc);
				var image = new Image();
				let xml = window.btoa(unescape(encodeURIComponent(svgString)));
				image.src = "data:image/svg+xml;base64," + xml;
				let url = "";

				image.onload = function () {
					var canvas = document.createElement("canvas");
					canvas.width = width ? width : image.width;
					canvas.height = height ? height : image.height;
					var context = canvas.getContext("2d");
					context.drawImage(image, 0, 0);
					url = canvas.toDataURL("image/" + ext);
					res(url);
				};
				image.onerror = function (e) {
					rej({
						error: e
					})
				}
			} catch (err) {
				rej({
					error: err
				})
			}
	})
}