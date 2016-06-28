$(document).ready(function () {

	var addMusicView = document.getElementById('addMusicView');// add music link
	var listView = document.getElementById('listView'); // container holding list view divs
	var addMusic = document.getElementById('addMusic'); // div added on 'add music' click event


	addMusicView.addEventListener('click', function () {
		addMusic.classList.remove('hideAddView');
		listView.classList.add('hideListView');
	});

})
