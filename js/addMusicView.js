var secondLevel = document.getElementById('second-level'); // container
var addMusicView = document.getElementById('addMusicView');// add music link

var listMusicView = document.getElementById('listMusicView'); // list music link
var listView = document.getElementById('listView'); // container holding list view divs
var addMusic = document.getElementById('addMusic'); // div added on 'add music' click event


addMusicView.addEventListener('click', function () {
	listView.classList.toggle('hide');
	addMusicDiv();
	
});


function addMusicDiv () {
	secondLevel.innerHTML = `
		<div class="addMusic" id="addMusic">
			<label>Song name:</label>
			<input type="text" id="songInput" class="musicInput">
			<label>Artist name:</label>
			<input type="text" id="artistInput" class="musicInput">
			<label>Album name:</label>
			<input type="text" id="albumInput" class="musicInput">
			<label>Genre</label>
			<input type="text" id="genreInput" class="musicInput">
			<button id="addBtn">Add</button>
		</div>
	`;
}

listMusicView.addEventListener('click', function () {
	// listView.classList.remove('hideListView');
});
