'use strict';

const listMusicView = $('#listMusicView'); // list music link
const addMusicView = $('#addMusicView');// add music link

let listView = $('#listView'); // container holding list view divs
let addMusic = $('#addMusic'); // div added on 'add music' click event

let goToListView = function () {
	console.log("Howdy");
	listView.removeClass('hideListView');
	addMusic.addClass('hideAddView');
};

let goToAddView = function () {
	console.log("Howdy");
	addMusic.removeClass('hideAddView');
	listView.addClass('hideListView');
};

module.exports = {goToAddView, goToListView};