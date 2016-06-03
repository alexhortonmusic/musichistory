var songContainer = document.getElementById("container");

function executeCodeWhenFileLoads () {
	var jFile = JSON.parse(event.target.responseText);
	console.log("jFile", jFile);	

	var songsLength = jFile.songs.length;
	
	jFile.songs.forEach(function (song) {
		songContainer.innerHTML += `
			<div class="song">
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
			</div>
			`;
		});
	};

function executeIfFilesFailToLoad () {
	songContainer.innerHTML = ("error");
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeCodeWhenFileLoads);
myRequest.addEventListener("error", executeIfFilesFailToLoad);

myRequest.open("GET", "songs.json");

myRequest.send();

console.log("myRequest", myRequest);

