var songs = [
{
	song: "The Logical Song",
	band: "Supertramp", 
	album: "Breakfast in America",
	genre: "Art-Rock"
},
{
	song: "Another Brick in the Wall",
	band: "Pink Floyd",
	album: "The Wall",
	genre: "Psychadelic-Rock"
},
{
	song: "Welcome to the Jungle",
	band: "Guns & Roses",
	album: "Appetite for Destruction",
	genre: "Hard Rock"
},
{
	song: "Ironic",
	band: "Alanis Morisette",
	album: "Jagged Little Pill",
	genre: "Alt-Rock"
}
];

var frankenstein = {
	song: "Frankenstein",
	band: "Edgar Winter Group",
	album: "They Only Come Out At Night",
	genre: "Classic Rock"
};

var levee = {
	song: "When the Levee Breaks",
	band: "Led Zeppelin",
	album: "IV",
	genre: "Blues-Rock"
};

songs.unshift(frankenstein);
songs.push(levee);

var songsLength = songs.length;

var songContainer = document.getElementById("container");

songs.forEach(function (song) {
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


// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in 
// the index.html file for their Music History project. Have them download 
// the songs.js file, which contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously dont. 
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.