var songContainer = document.getElementById("container");

var jFile;
var counter = 0;

function executeCodeWhenFileLoads () {
	jFile = JSON.parse(event.target.responseText);
	console.log("jFile", jFile);	
	
	jFile.songs.forEach(function (song) {
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
};

function executeIfFilesFailToLoad () {
	songContainer.innerHTML = ("error");
}

//-----Delete Button
document.querySelector("body").addEventListener("click", function(event) {
	if (event.target.parentNode.className === "song") {
  	var clickedBtn = event.target.id.split("-")[1];//delete button
  	var songToDelete = document.getElementById("song-" + `${clickedBtn }`);//song
  	console.log("songToDelete", songToDelete);
		container.removeChild(songToDelete);
		jFile.songs.splice(clickedBtn, 1, {});
	}
});

//--------XHR---------//

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeCodeWhenFileLoads);
myRequest.addEventListener("error", executeIfFilesFailToLoad);

myRequest.open("GET", "songs.json");

myRequest.send();

console.log("myRequest", myRequest);

