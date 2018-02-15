// ==UserScript==
// @name         Chess.com additional Emojis
// @namespace    https://github.com/johnnyawesome
// @version      0.1
// @description  Additional EMojis for Chess.com
// @author       JohnnyAwesome
// @match        https://www.chess.com/tv
// @match        https://www.chess.com/live*
// @match        https://www.chess.com/daily*
// @grant        none
// @icon         https://cdn0.iconfinder.com/data/icons/pixelo/32/skull.png
// ==/UserScript==

(function() {
	'use strict';

	//If we're in Live Chess, wait 5 Sec before adding the Emojis, because otherways it breaks
	if(window.location.href.match(/live/)){
		setTimeout(addEmojis, 3000);
	}
	else{
		//In any other Case (e.g. Daily Chess or Livestream) just add the Emoji Selector
		addEmojis();
	}

	function addEmojis() {

		//Creates Select Element
		var s = document.createElement('SELECT');
		s.setAttribute('onchange', 'insertEmoji()');
		s.setAttribute('id', 'selection');

		//Creates an Emoji
		var x1 = document.createElement('OPTION');
		var t1 = document.createTextNode('💩');
		x1.addEventListener("click", insertEmoji);
		x1.appendChild(t1);
		s.appendChild(x1);

		var x2 = document.createElement('OPTION');
		var t2 = document.createTextNode('🖕🏼');
		x2.addEventListener("click", insertEmoji);
		x2.appendChild(t2);
		s.appendChild(x2);

		var x3 = document.createElement('OPTION');
		var t3 = document.createTextNode('💩 🚽');
		x3.addEventListener("click", insertEmoji);
		x3.appendChild(t3);
		s.appendChild(x3);

		var x4 = document.createElement('OPTION');
		var t4 = document.createTextNode('☠️');
		x4.addEventListener("click", insertEmoji);
		x4.appendChild(t4);
		s.appendChild(x4);

		var x5 = document.createElement('OPTION');
		var t5 = document.createTextNode('🤡');
		x5.addEventListener("click", insertEmoji);
		x5.appendChild(t5);
		s.appendChild(x5);

		var x6 = document.createElement('OPTION');
		var t6 = document.createTextNode('🤢');
		x6.addEventListener("click", insertEmoji);
		x6.appendChild(t6);
		s.appendChild(x6);

		var x7 = document.createElement('OPTION');
		var t7 = document.createTextNode('💀');
		x7.addEventListener("click", insertEmoji);
		x7.appendChild(t7);
		s.appendChild(x7);

		var x8 = document.createElement('OPTION');
		var t8 = document.createTextNode('🐷');
		x8.addEventListener("click", insertEmoji);
		x8.appendChild(t8);
		s.appendChild(x8);

		var x9 = document.createElement('OPTION');
		var t9 = document.createTextNode('💋 💋 💋');
		x9.addEventListener("click", insertEmoji);
		x9.appendChild(t9);
		s.appendChild(x9);

		var x10 = document.createElement('OPTION');
		var t10 = document.createTextNode(' 🚹 💩 🚽');
		x10.addEventListener("click", insertEmoji);
		x10.appendChild(t10);
		s.appendChild(x10);

		var x11 = document.createElement('OPTION');
		var t11 = document.createTextNode(' 😘 😘 😘');
		x11.addEventListener("click", insertEmoji);
		x11.appendChild(t11);
		s.appendChild(x11);

		var x12 = document.createElement('OPTION');
		var t12 = document.createTextNode('👙 👙 👙');
		x12.addEventListener("click", insertEmoji);
		x12.appendChild(t12);
		s.appendChild(x12);

		var x13 = document.createElement('OPTION');
		var t13 = document.createTextNode('💩 😘');
		x13.addEventListener("click", insertEmoji);
		x13.appendChild(t13);
		s.appendChild(x13);

		var x14 = document.createElement('OPTION');
		var t14 = document.createTextNode('🤣 🤣 🤣');
		x14.addEventListener("click", insertEmoji);
		x14.appendChild(t14);
		s.appendChild(x14);

		var x15 = document.createElement('OPTION');
		var t15 = document.createTextNode('👬 🌈');
		x15.addEventListener("click", insertEmoji);
		x15.appendChild(t15);
		s.appendChild(x15);

		var x16 = document.createElement('OPTION');
		var t16 = document.createTextNode(':mate 💩');
		x16.addEventListener("click", insertEmoji);
		x16.appendChild(t16);
		s.appendChild(x16);

		var x17 = document.createElement('OPTION');
		var t17 = document.createTextNode(':mate 🤣 😝');
		x17.addEventListener("click", insertEmoji);
		x17.appendChild(t17);
		s.appendChild(x17);

		var x18 = document.createElement('OPTION');
		var t18 = document.createTextNode(':mate 😘');
		x18.addEventListener("click", insertEmoji);
		x18.appendChild(t18);
		s.appendChild(x18);

		var x19 = document.createElement('OPTION');
		var t19 = document.createTextNode(':mate 💋');
		x19.addEventListener("click", insertEmoji);
		x19.appendChild(t19);
		s.appendChild(x19);

		var x20 = document.createElement('OPTION');
		var t20 = document.createTextNode(' :mate 🖕🏼');
		x20.addEventListener("click", insertEmoji);
		x20.appendChild(t20);
		s.appendChild(x20);

		//Appends all the options to the chat in Stream.
		if(document.getElementsByClassName('chat-input').length > 0){
			document.getElementsByClassName('chat-input') [0].appendChild(s);
		}

		if(document.getElementsByClassName('send-message').length > 0){
			document.getElementsByClassName('send-message') [0].appendChild(s);
		}
	}

	function insertEmoji() {
		var x = document.getElementById('selection').value;

		if(window.location.href.match(/tv/)){
			document.getElementsByTagName("input")[8].value=x;
		}

		if(window.location.href.match(/live/)){
			document.getElementsByTagName("input") [5].value=x;
		}

		if(window.location.href.match(/daily/)){
			document.getElementsByTagName("textarea") [0].value=x;
		}
	}

})();
