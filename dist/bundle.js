(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// loads first 5 songs
const loadSongMod = require('./loadSongs.js');
loadSongMod.ajaxCall(print5songstoDom); // loads 5 songs to DOM
let songArr = loadSongMod.songArr;

// list/add view module
const viewMod = require('./musicView.js');
console.log(viewMod.goToListView);

const songContainer = $("#container");
const more = $('#more');
let counter = 0;

// populates 'Artist' dropdown
let artistDrop = $('#artist-drop');
let selectArtistArr = [
	'Ryan Adams',
	'Magnolia Sons',
	'Original Cast',
	'Lake Street Dive',
	'Simon & Garfunkel'
];

populateSelectBox(selectArtistArr, artistDrop);

// populates 'Album' dropdown
let albumDrop = $('#album-drop');
let selectAlbumArr = [
	"Heartbreaker",
	"Bookends",
	"Hamilton",
	"Side Pony",
	"Baby, That's You"
];

populateSelectBox(selectAlbumArr, albumDrop)

// function to populate select boxes
function populateSelectBox (arr, drop) {
	for (let i = 0, j = arr.length; i < j; i++) {
		drop.append(`<option>${arr[i]}</option>`);
	}
}

function print5songstoDom () {
	$.each(songArr, (key, song) => {
		counter++;
		// adds songs to DOM
		songContainer.append(`
			<div class="song" id="song-${counter}">
				<h2>${song.song}</h2>
				<div class="artist-name">
					<p>${song.band}</p>
				</div>
				<div class="album-name">
					<p><i>${song.album}</i></p>
				</div>
				<div class="song-genre">
					<p>${song.genre}</p>
				</div>
				<button class="delete" id="btn-${counter}">Delete</button>
			</div>
		`);
	});
	$(".delete").click(deleteSong);
	more.append(`<a href="#">More ></a>`);
}

function loadRemaining (songData2) {
	let songs = songData2.songs;
	counter = 5;
	$.each(songs, (key, song) => {
		songArr.push(song);
		counter++;
		// adds songs to DOM
		songContainer.append(`
			<div class="song" id="song-${counter}">
				<h2>${song.song}</h2>
				<div class="artist-name">
					<p>${song.band}</p>
				</div>
				<div class="album-name">
					<p><i>${song.album}</i></p>
				</div>
				<div class="song-genre">
					<p>${song.genre}</p>
				</div>
				<button class="delete" id="btn-${counter}">Delete</button>
			</div>
		`);
	});
	$(".delete").click(deleteSong);
}

// show remaing songs in second JSON file
more.on('click', function () {
	more.addClass('hideMore');
	$.ajax({
			url: "src/scripts/songs2.json"
		}).done(loadRemaining);
});


//------ADDING MORE SONGS------//

const listMusicView = $('#listMusicView'); // list music link
const addMusicView = $('#addMusicView');// add music link

listMusicView.click(function () {
	viewMod.goToListView();
})

addMusicView.click(function () {
	viewMod.goToAddView();
});


// inputs to get values to add to array/DOM
let songInput = $("#songInput"),
	  artistInput = $("#artistInput"),
		albumInput = $("#albumInput"),
		genreInput = $("#genreInput"),
		addBtn = $("#addBtn");

addBtn.on('click', songObjToArray);

function songObjToArray() {
	var songObj = {
		song: songInput.val(),
		band: artistInput.val(),
		album: albumInput.val(),
		genre: genreInput.val()
	}
	songArr.push(songObj);
	counter++;
	songContainer.append(`
		<div class="song" id="song-${counter}">
				<h2>${songInput.val()}</h2>
				<div class="artist-name">
					<p>${artistInput.val()}</p>
				</div>
				<div class="album-name">
					<p><i>${albumInput.val()}</i></p>
				</div>
				<div class="song-genre">
					<p>${genreInput.val()}</p>
				</div>
				<button class="delete" id="btn-${counter}">Delete</button>
		</div>
	`);
	$(".delete").click(deleteSong);
	songInput.val("");
	artistInput.val("");
	albumInput.val("");
	genreInput.val("");

	// go back to list view
	viewMod.goToListView();
}


//-----Delete Button

function deleteSong () { // this does not delete object from array yet...
	$(this).parent('.song').remove();
	let songThing = $(this).parent('.song').song;
	console.log("songArr", songArr);
	$.each(songArr, function (i, el) {
		if (this.song === songThing) {
			songArr.splice(i, 1);
		}
	})
}





},{"./loadSongs.js":2,"./musicView.js":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
'use strict';

const listMusicView = $('#listMusicView'); // list music link
const addMusicView = $('#addMusicView');// add music link

let listView = $('#listView'); // container holding list view divs
let addMusic = $('#addMusic'); // div added on 'add music' click event

let goToListView = function () {
	console.log("Howdy");
	listView.removeClass('hideListView');
	addMusic.addClass('hideAddView');
};

let goToAddView = function () {
	console.log("Howdy");
	addMusic.removeClass('hideAddView');
	listView.addClass('hideListView');
};

module.exports = {goToAddView, goToListView};
},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
