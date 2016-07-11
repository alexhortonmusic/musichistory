(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {
	var songContainer = $("#container");
	var more = $('#more');

	var songJSON;
	var counter = 0;
	var songArr = [];

	// populates 'Artist' dropdown
	let artistDrop = $('#artist-drop');
	let selectArtistArr = [
		'Ryan Adams',
		'Magnolia Sons',
		'Original Cast',
		'Lake Street Dive',
		'Simon & Garfunkel'
	];

	for (let i = 0, j = selectArtistArr.length; i < j; i++) {
		artistDrop.append(`<option>${selectArtistArr[i]}</option>`);
	}

	// populates 'Album' dropdown
	let albumDrop = $('#album-drop');
	let selectAlbumArr = [
		"Heartbreaker",
		"Bookends",
		"Hamilton",
		"Side Pony",
		"Baby, That's You"
	];

	for (let i = 0, j = selectAlbumArr.length; i < j; i++) {
		albumDrop.append(`<option>${selectAlbumArr[i]}</option>`);
	}


	function executeCodeWhenFileLoads (songData) {	
		let songs = songData.songs;
		
		$.each(songs, (key, song) => {
			songArr.push(song);
			console.log("songArr", songArr);
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
		more.append(`<a href="#">More ></a>`);
	};

	function executeIfFilesFailToLoad () {
		songContainer.html("error");
	}

	function executeNewCodeWhenFileLoads (songData2) {
		// song2JSON = JSON.parse(event.target.responseText);	
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
		console.log("songArr", songArr);
	};

	//------ADDING MORE SONGS------//

	more.on('click', function (event) {
		$.ajax({
			url: "src/scripts/songs2.json"
		}).done(executeNewCodeWhenFileLoads)
		more.addClass('hideMore');
	})

	
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
		songInput.val("");
		artistInput.val("");
		albumInput.val("");
		genreInput.val("");

		// go back to list view
		addMusic.addClass('hideAddView');
		listView.removeClass('hideListView');
	}


	//-----Delete Button

	$(".delete").click(function () { // this is not quite working yet...
		$(this).parent().remove();
		});

	// document.querySelector("body").addEventListener("click", function(event) {
	// 	if (event.target.parentNode.className === "song") {
	//   	var clickedBtn = event.target.id.split("-")[1];//delete button
	//   	var songToDelete = document.getElementById("song-" + `${clickedBtn }`);//song
	//   	console.log("songToDelete", songToDelete);
	// 		songContainer.remove(songToDelete);
	// 		songArr.splice(clickedBtn, 1, {});
	// 	}
	// });



	//--------AJAX---------//

	$.ajax({
		url: "src/scripts/songs.json"
	}).done(executeCodeWhenFileLoads);

})




},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
