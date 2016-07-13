'use strict';

const songArr = [];

var FirstSongsAJAX = function() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "src/scripts/songs.json"
		}).done(function (songData) {
			resolve(songData);
		}).fail(function(error) {
			reject(error);
		});
	});
};

// const FirstSongsPromise = function () {
// //loads first five songs
	// firstSongsAJAX()
	// 	.then(function (songData) {
	// 		console.log("songData", songData);
	// 		songArr.push(songData);
	// 	});
// };

module.exports = {songArr, FirstSongsAJAX};