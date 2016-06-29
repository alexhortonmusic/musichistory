$(document).ready(function () {
	var songContainer = $("#container");
	var songContainer2 = $('#container2');
	var more = $('#more');

	var songJSON;
	var counter = 0;
	var songArr = [];

	function executeCodeWhenFileLoads (songData) {
		// songJSON = JSON.parse(event.target.responseText);	
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
		more.html(`<a href="#">More ></a>`);
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
			songContainer2.append(`
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
			url: "js/songs2.json"
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
		songContainer2.append(`
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
	}


	//-----Delete Button
	document.querySelector("body").addEventListener("click", function(event) {
		if (event.target.parentNode.className === "song") {
	  	var clickedBtn = event.target.id.split("-")[1];//delete button
	  	var songToDelete = document.getElementById("song-" + `${clickedBtn }`);//song
	  	console.log("songToDelete", songToDelete);
			container.removeChild(songToDelete);
			songArr.splice(clickedBtn, 1, {});
		}
	});

	//--------XHR---------//

	$.ajax({
		url: "js/songs.json"
	}).done(executeCodeWhenFileLoads);

})



