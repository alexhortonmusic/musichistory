var songs = [
"The Logical Song > by Supertr@amp on the album Breakfast in America",
"Another Brick in the Wall > by Pink Floyd on the album The Wall",
"Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction",
"Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"
];

songs.unshift("Frankenstein > by Edgar Winter Group on the album They Only Come Out at Night");
songs.push("Stairway to Heaven > by Led Zeppelin on the album IV");

var songsLength = songs.length;

var element = document.getElementById("container");

for (var i = 0; i < songsLength; i++) {
	var currentSong = songs[i];
	currentSong = currentSong.replace(/>/g, "-");
	currentSong = currentSong.replace(/[@!*]/g,'');
	element.innerHTML += currentSong;
	}





// `<div class="song">
//                   <h2>${songs[i].song}</h2>
//                   <div class="artist-name">
//                     <p>${songs[i].artist}</p>
//                   </div>
//                   <div class="album-name">
//                     <p><i>${songs[i].album}</i></p>
//                   </div>
//                  </div>`


// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in 
// the index.html file for their Music History project. Have them download 
// the songs.js file, which contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously dont. 
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.