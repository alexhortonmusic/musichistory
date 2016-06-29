var listMusicView = $('#listMusicView'); // list music link
var listView = $('#listView'); // container holding list view divs
var addMusic = $('#addMusic'); // div added on 'add music' click event

listMusicView.on('click', function () {
	listView.removeClass('hideListView');
	addMusic.addClass('hideAddView');
});
