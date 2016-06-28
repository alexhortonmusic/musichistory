var listMusicView = document.getElementById('listMusicView'); // list music link
var listView = document.getElementById('listView'); // container holding list view divs
var addMusic = document.getElementById('addMusic'); // div added on 'add music' click event

listMusicView.addEventListener('click', function () {
	listView.classList.remove('hideListView');
	addMusic.classList.add('hideAddView');
});
