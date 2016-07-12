'use strict';

const loadSongMod = require('./loadSongs.js');
loadSongMod.ajaxCall(); 
let songArr = loadSongMod.songArr;

console.log("songArr", songArr);

