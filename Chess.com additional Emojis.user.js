// ==UserScript==
// @name         Chess.com additional Emojis
// @namespace    https://github.com/johnnyawesome
// @version      0.1
// @description  Additional EMojis for Chess.com
// @author       JohnnyAwesome
// @match        https://www.chess.com/tv
// @match        https://www.chess.com/daily/
// @grant        none
// @icon         https://cdn0.iconfinder.com/data/icons/pixelo/32/skull.png
// ==/UserScript==

(function() {
	'use strict';

	addEmojis();

	function addEmojis() {

		//Creates Select Element
		var s = document.createElement('SELECT');
		s.setAttribute('onchange', 'insertEmoji()');
		s.setAttribute('id', 'selection');

		//Creates an Emoji
		var x1 = document.createElement('OPTION');
		var t1 = document.createTextNode('💩 💩 💩');
		x1.addEventListener("click", insertEmoji);
		x1.appendChild(t1);
		s.appendChild(x1);

		var x2 = document.createElement('OPTION');
		var t2 = document.createTextNode('🖕🏼 🖕🏼 🖕🏼');
		x2.addEventListener("click", insertEmoji);
		x2.appendChild(t2);
		s.appendChild(x2);

		var x3 = document.createElement('OPTION');
		var t3 = document.createTextNode('💩 🚽');
		x3.addEventListener("click", insertEmoji);
		x3.appendChild(t3);
		s.appendChild(x3);

		var x4 = document.createElement('OPTION');
		var t4 = document.createTextNode('🤣 🤣 🤣');
		x4.addEventListener("click", insertEmoji);
		x4.appendChild(t4);
		s.appendChild(x4);

		var x5 = document.createElement('OPTION');
		var t5 = document.createTextNode('😘 😘 😘');
		x5.addEventListener("click", insertEmoji);
		x5.appendChild(t5);
		s.appendChild(x5);

		var x6 = document.createElement('OPTION');
		var t6 = document.createTextNode('🤢 🤢 🤢');
		x6.addEventListener("click", insertEmoji);
		x6.appendChild(t6);
		s.appendChild(x6);

		var x7 = document.createElement('OPTION');
		var t7 = document.createTextNode('👙 👙 👙');
		x7.addEventListener("click", insertEmoji);
		x7.appendChild(t7);
		s.appendChild(x7);

		var x8 = document.createElement('OPTION');
		var t8 = document.createTextNode('🐷 🐷 🐷');
		x8.addEventListener("click", insertEmoji);
		x8.appendChild(t8);
		s.appendChild(x8);

		var x9 = document.createElement('OPTION');
		var t9 = document.createTextNode('💋 💋 💋');
		x9.addEventListener("click", insertEmoji);
		x9.appendChild(t9);
		s.appendChild(x9);

		var x10 = document.createElement('OPTION');
		var t10 = document.createTextNode('💙 💕 💜 💚 💝');
		x10.addEventListener("click", insertEmoji);
		x10.appendChild(t10);
		s.appendChild(x10);


		//Appends all the options to the chat.
		document.getElementsByClassName('chat-input') [0].appendChild(s);
	}


	function insertEmoji() {
		var x = document.getElementById('selection').value;
		document.getElementsByTagName("input")[8].value=x;

	}

})();