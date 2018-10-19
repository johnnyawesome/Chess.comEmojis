// ==UserScript==
// @name         Chess.com additional Emojis 2
// @namespace    https://github.com/johnnyawesome
// @version      3.2
// @description  Additional EMojis for Chess.com
// @author       JohnnyAwesome
// @match        https://www.chess.com/tv
// @match        https://www.chess.com/live*
// @match        https://www.chess.com/daily*
// @match        https://www.chess.com/member/*
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

		/*
		Creates the Emojis

		Replace the emojis you see with your own!
		Here's a complete List of all available Emojis http://unicode.org/emoji/charts/emoji-style.txt

		You can even add some more Emojis yourself. Just copy & paste one of the codeblocks.
		Add it to the end of the other blocks and increment the numbers(e.g. If you copy block 20, replace every number 20 with 21 after pasting the new block)

		*/

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
		var t4 = document.createTextNode('💀');
		x4.addEventListener("click", insertEmoji);
		x4.appendChild(t4);
		s.appendChild(x4);

		var x5 = document.createElement('OPTION');
		var t5 = document.createTextNode('☠️');
		x5.addEventListener("click", insertEmoji);
		x5.appendChild(t5);
		s.appendChild(x5);

		var x6 = document.createElement('OPTION');
		var t6 = document.createTextNode('🤡');
		x6.addEventListener("click", insertEmoji);
		x6.appendChild(t6);
		s.appendChild(x6);

		var x7 = document.createElement('OPTION');
		var t7 = document.createTextNode('🤢');
		x7.addEventListener("click", insertEmoji);
		x7.appendChild(t7);
		s.appendChild(x7);

		var x8 = document.createElement('OPTION');
		var t8 = document.createTextNode('🐷');
		x8.addEventListener("click", insertEmoji);
		x8.appendChild(t8);
		s.appendChild(x8);

		var x9 = document.createElement('OPTION');
		var t9 = document.createTextNode('😎');
		x9.addEventListener("click", insertEmoji);
		x9.appendChild(t9);
		s.appendChild(x9);

		var x10 = document.createElement('OPTION');
		var t10 = document.createTextNode('😍');
		x10.addEventListener("click", insertEmoji);
		x10.appendChild(t10);
		s.appendChild(x10);

		var x11 = document.createElement('OPTION');
		var t11 = document.createTextNode('🧙 💩');
		x11.addEventListener("click", insertEmoji);
		x11.appendChild(t11);
		s.appendChild(x11);

		var x12 = document.createElement('OPTION');
		var t12 = document.createTextNode('🐔 💩');
		x12.addEventListener("click", insertEmoji);
		x12.appendChild(t12);
		s.appendChild(x12);

		var x13 = document.createElement('OPTION');
		var t13 = document.createTextNode('💩 😘');
		x13.addEventListener("click", insertEmoji);
		x13.appendChild(t13);
		s.appendChild(x13);

		var x14 = document.createElement('OPTION');
		var t14 = document.createTextNode('🙈 🙉 🙊');
		x14.addEventListener("click", insertEmoji);
		x14.appendChild(t14);
		s.appendChild(x14);

		var x15 = document.createElement('OPTION');
		var t15 = document.createTextNode('🚹 💩 🚽');
		x15.addEventListener("click", insertEmoji);
		x15.appendChild(t15);
		s.appendChild(x15);

		//The :mate makes use of chess.com's own Emoji for a mated king.
		var x16 = document.createElement('OPTION');
		var t16 = document.createTextNode('👙 ♀ 👙 ♀ 👙');
		x16.addEventListener("click", insertEmoji);
		x16.appendChild(t16);
		s.appendChild(x16);

		var x17 = document.createElement('OPTION');
		var t17 = document.createTextNode('💋 💋 💋');
		x17.addEventListener("click", insertEmoji);
		x17.appendChild(t17);
		s.appendChild(x17);

		var x18 = document.createElement('OPTION');
		var t18 = document.createTextNode('😘 😘 😘');
		x18.addEventListener("click", insertEmoji);
		x18.appendChild(t18);
		s.appendChild(x18);

		var x19 = document.createElement('OPTION');
		var t19 = document.createTextNode('🤣 🤣 🤣');
		x19.addEventListener("click", insertEmoji);
		x19.appendChild(t19);
		s.appendChild(x19);

		var x20 = document.createElement('OPTION');
		var t20 = document.createTextNode('🌈 👬 👨‍❤️‍💋‍👨 🌈');
		x20.addEventListener("click", insertEmoji);
		x20.appendChild(t20);
		s.appendChild(x20);

		var x21 = document.createElement('OPTION');
		var t21 = document.createTextNode(':mate 💩');
		x21.addEventListener("click", insertEmoji);
		x21.appendChild(t21);
		s.appendChild(x21);

		var x22 = document.createElement('OPTION');
		var t22 = document.createTextNode(':mate 🤣 😝');
		x22.addEventListener("click", insertEmoji);
		x22.appendChild(t22);
		s.appendChild(x22);

		var x23 = document.createElement('OPTION');
		var t23 = document.createTextNode(':mate 😘');
		x23.addEventListener("click", insertEmoji);
		x23.appendChild(t23);
		s.appendChild(x23);

		var x24 = document.createElement('OPTION');
		var t24 = document.createTextNode(':mate 💋');
		x24.addEventListener("click", insertEmoji);
		x24.appendChild(t24);
s.appendChild(x24);


		//Appends the Emoji Selector to different chat functions (e.g. livestream, livechess, daily chess etc.)

		//Livestream (TV)
		if(document.getElementsByClassName('chat-input-component').length > 0){
			document.getElementsByClassName('chat-input-component') [0].appendChild(s);
		}

		//Livechess
		if(document.getElementsByClassName('send-message').length > 0){
			document.getElementsByClassName('send-message') [0].appendChild(s);
		}

		//Daily
		if(document.getElementsByClassName('game-controls-float').length > 0){
			document.getElementsByClassName('game-controls-float') [0].appendChild(s);
		}

		//Profile
		if(document.getElementsByClassName('input-group').length > 0){
			document.getElementsByClassName('input-group') [0].appendChild(s);
		}

	}

	//Writes your selected Emoji in the Text area
	function insertEmoji() {
		var x = document.getElementById('selection').value;

		//TV
		if(window.location.href.match(/tv/)){
			document.getElementsByTagName("input")[4].value=x;
		}

		//Livechess
		if(window.location.href.match(/live/)){
			document.getElementsByTagName("input") [8].value=x;
            document.getElementsByTagName("input") [10].value=x;
		}

		//Dailychess
		if(window.location.href.match(/daily/)){
			document.getElementsByTagName("textarea") [0].value=x;
		}

		//Profile
		if(window.location.href.match(/member/)){
			document.getElementsByTagName("input") [4].value=x;
		}

	}

})();
