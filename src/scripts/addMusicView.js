'use strict';
$(document).ready(function () {

	var addMusicView = $('#addMusicView');// add music link
	var listView = $('#listView'); // container holding list view divs
	var addMusic = $('#addMusic'); // div added on 'add music' click event


	addMusicView.on('click', function () {
		addMusic.removeClass('hideAddView');
		listView.addClass('hideListView');
	});

})
