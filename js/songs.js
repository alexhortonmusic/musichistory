var songContainer = document.getElementById("container");
var songContainer2 = document.getElementById('container2');
var more = document.getElementById('more');

var songJSON;
var counter = 0;

function executeCodeWhenFileLoads () {
	songJSON = JSON.parse(event.target.responseText);	
	
	songJSON.songs.forEach(function (song) {
		counter++;
		// adds songs to DOM
		songContainer.innerHTML += `
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
		`;
	});
	more.innerHTML = `
		<a href="#">More ></a>
	`;
};

function executeIfFilesFailToLoad () {
	songContainer.innerHTML = ("error");
}

function executeNewCodeWhenFileLoads () {
	song2JSON = JSON.parse(event.target.responseText);	
	
	song2JSON.songs.forEach(function (song) {
		counter = 5;
		counter++;
		// adds songs to DOM
		songContainer2.innerHTML += `
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
		`;
	});
};

//------MORE SONGS TO ADD------//
more.innerHTML = `
	<a href="#">More ></a>
`;

more.addEventListener('click', function (event) {
	song2Request.addEventListener('load', executeNewCodeWhenFileLoads);
	song2Request.send();
	more.classList.add('hideMore');
})

//-----Delete Button
document.querySelector("body").addEventListener("click", function(event) {
	if (event.target.parentNode.className === "song") {
  	var clickedBtn = event.target.id.split("-")[1];//delete button
  	var songToDelete = document.getElementById("song-" + `${clickedBtn }`);//song
  	console.log("songToDelete", songToDelete);
		container.removeChild(songToDelete);
		songJSON.songs.splice(clickedBtn, 1, {});
	}
});



//--------XHR---------//

var songRequest = new XMLHttpRequest();

songRequest.addEventListener("load", executeCodeWhenFileLoads);
songRequest.addEventListener("error", executeIfFilesFailToLoad);

songRequest.open("GET", "js/songs.json");

songRequest.send();

var song2Request = new XMLHttpRequest();


song2Request.addEventListener('error', executeIfFilesFailToLoad);

song2Request.open("GET", "js/songs2.json");





