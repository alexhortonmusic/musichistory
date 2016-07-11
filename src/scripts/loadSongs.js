'use strict';

const songArr = [];

const LoadSongs1 = function (songData) {	
	let songs = songData.songs;
	$.each(songs, (key, song) => {
		songArr.push(song);
	});
};

const ajaxCall = function (callback) {
//loads first five songs
	$.ajax({
		url: "src/scripts/songs.json"
	}).done(function (songData) {
		LoadSongs1(songData);
		callback();
	});
}

module.exports = {songArr, ajaxCall};