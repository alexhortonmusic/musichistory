$(document).ready(function () {

	var secondLevel = document.getElementById('second-level'); // container

	var addMusicView = document.getElementById('addMusicView');// add music link
	var listMusicView = document.getElementById('listMusicView'); // list music link
	var listView = document.getElementById('listView'); // container holding list view divs
	var addMusic = document.getElementById('addMusic'); // div added on 'add music' click event


	addMusicView.addEventListener('click', function () {
		addMusic.classList.remove('hideAddView');
		listView.classList.add('hideListView');
	});


})
