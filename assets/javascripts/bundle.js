/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = removeAllListeners;

var _main_game = __webpack_require__(2);

var _main_game2 = _interopRequireDefault(_main_game);

var _back_button = __webpack_require__(3);

var _back_button2 = _interopRequireDefault(_back_button);

var _keypress_handling = __webpack_require__(5);

var _keypress_handling2 = _interopRequireDefault(_keypress_handling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removeAllListeners() {
	canvas.removeEventListener('click', _main_game2.default);
	canvas.removeEventListener('click', _back_button2.default);
	canvas.removeEventListener('keypress', _keypress_handling2.default);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = root;

var _main_game = __webpack_require__(2);

var _main_game2 = _interopRequireDefault(_main_game);

var _remove_all_listeners = __webpack_require__(0);

var _remove_all_listeners2 = _interopRequireDefault(_remove_all_listeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function root() {
	window.canvas = document.getElementById("game-layer");
	window.ctx = canvas.getContext("2d");
	(0, _remove_all_listeners2.default)();

	document.body.style.cursor = "wait";

	// TODO: Someday, figure out how backup fonts worked in JS
	document.fonts.load("50px Roboto Mono").then(function () {
		return (0, _main_game2.default)();
	});
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mainGame;

var _remove_all_listeners = __webpack_require__(0);

var _remove_all_listeners2 = _interopRequireDefault(_remove_all_listeners);

var _start_song = __webpack_require__(20);

var _start_song2 = _interopRequireDefault(_start_song);

var _in_button_listener = __webpack_require__(9);

var _in_button_listener2 = _interopRequireDefault(_in_button_listener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mainGame() {
	var _ctx;

	(0, _remove_all_listeners2.default)();

	// Render start button
	var start_dimens = [400.5, 300.5, 400, 125];
	ctx.strokeStyle = "black";
	(_ctx = ctx).strokeRect.apply(_ctx, start_dimens);
	ctx.fillStyle = "#000";
	ctx.fill();

	// Render start button text
	ctx.font = "50px Roboto Mono";
	ctx.fillText("Future Retro", 420.5, 380.5);

	document.body.style.cursor = "default";

	(0, _in_button_listener2.default)(start_dimens, event, _start_song2.default);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = backButton;

var _song_handling = __webpack_require__(4);

var _root = __webpack_require__(1);

var _root2 = _interopRequireDefault(_root);

var _remove_all_listeners = __webpack_require__(0);

var _remove_all_listeners2 = _interopRequireDefault(_remove_all_listeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function backButton() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	(0, _remove_all_listeners2.default)();

	_song_handling.song1.stop();

	(0, _root2.default)();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.song1 = undefined;

var _howler = __webpack_require__(11);

// export const song1 = () => {
// 	const song1 = document.getElementById("song1");
// 	song1.volume = 0.3;

// 	return song1;
// };

var path = __webpack_require__(13);


// export const song1 = new Howl({
// 	src: [
// 		path.resolve(
// 			__dirname,
// 			"assets",
// 			"songs",
// 			"Animusic",
// 			"01_Future_Retro.mp3"
// 		),
// 	],
// 	volume: 0.1,
// 	html5: true,
// 	// onend: display score, cancel clicking, and allow only to go back
// });

var song1 = exports.song1 = new _howler.Howl({
	src: ["assets/songs/Animusic/01_Future_Retro.mp3"],
	volume: 0.1,
	html5: true
	// onend: display score, cancel clicking, and allow only to go back
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = handleKeypress;

var _rand_common_word = __webpack_require__(6);

var _rand_common_word2 = _interopRequireDefault(_rand_common_word);

var _render_text = __webpack_require__(7);

var _render_text2 = _interopRequireDefault(_render_text);

var _render_text_box = __webpack_require__(8);

var _render_text_box2 = _interopRequireDefault(_render_text_box);

var _sleep = __webpack_require__(19);

var _sleep2 = _interopRequireDefault(_sleep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleTyping(event) {
	typedKeys.push(event.key);

	if (typedKeys.length === randWord.length) {
		(0, _sleep2.default)(100);

		typedKeys = [];
		randWord = (0, _rand_common_word2.default)();
	}

	return randWord;
}

function handleKeypress(event) {
	ctx.clearRect(textStartLocation, 0, 1200, 425 + 0.5);

	(0, _render_text_box2.default)();

	randWord = handleTyping(event);

	(0, _render_text2.default)();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = randCommonWord;

var _filtered = __webpack_require__(15);

function randCommonWord() {
	return _filtered.commonMoreThan_2[Math.floor(Math.random() * _filtered.commonMoreThan_2.length)];
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderText;
function renderText() {
	var charLocation = textStartLocation;

	var colorScore = ['black', 'red', 'green'];

	for (var charIdx = 0; charIdx < randWord.length; charIdx++) {
		var char = randWord[charIdx];
		var score = void 0;

		if (typedKeys[charIdx] === char) {
			score = 2;
		} else if (typedKeys[charIdx] === undefined) {
			score = 0;
		} else {
			score = 1;
		}

		ctx.font = '100px Roboto Mono';
		ctx.fillStyle = colorScore[score];
		ctx.fillText(char, charLocation, 400);

		charLocation += ctx.measureText(char).width;
	}
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderTextBox;
function renderTextBox() {
	for (var location = textStartLocation; location < 1200; location += 60) {
		ctx.beginPath();
		ctx.moveTo(location, 0);
		ctx.lineTo(location, 425);
		ctx.strokeStyle = '#ccc';
		ctx.stroke();
	}

	ctx.strokeStyle = 'black';
	ctx.strokeRect(textStartLocation, 300.5, 1200, 125);
	ctx.fillStyle = '#000';
	ctx.fill();
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = inButtonListener;
function inButton(_ref, event) {
	var _ref2 = _slicedToArray(_ref, 4),
	    button_x = _ref2[0],
	    button_y = _ref2[1],
	    button_len = _ref2[2],
	    button_height = _ref2[3];

	var x_coord = event.offsetX;
	var y_coord = event.offsetY;

	return x_coord > button_x && x_coord < button_x + button_len && y_coord > button_y && y_coord < button_y + button_height;
}

function inButtonListener(dimens, event, btn_fn) {
	canvas.addEventListener("mousemove", function (event) {
		if (inButton(dimens, event)) {
			document.body.style.cursor = "pointer";
		} else {
			document.body.style.cursor = "default";
		}
	});

	canvas.addEventListener("click", function (event) {
		if (inButton(dimens, event)) {
			btn_fn();
		}
	});
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _root = __webpack_require__(1);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const root = require('./components/root');

document.addEventListener("DOMContentLoaded", _root2.default);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.0.9
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto iOS enabler.
      self.mobileAutoEnable = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'running' : 'running';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Mobile browsers will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _enableMobileAudio: function() {
      var self = this || Howler;

      // Only run this on mobile devices if audio isn't already eanbled.
      var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
      var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
      if (self._mobileEnabled || !self.ctx || (!isMobile && !isTouch)) {
        return;
      }

      self._mobileEnabled = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function() {
        // Fix Android can not play in suspend state.
        Howler._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._mobileEnabled = true;
          self.mobileAutoEnable = false;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';
        self.ctx.suspend().then(function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        });
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhrWithCredentials = o.xhrWithCredentials || false;

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio on iOS.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.mobileAutoEnable) {
        Howler._enableMobileAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload) {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        var num = 0;
        for (var i=0; i<self._sounds.length; i++) {
          if (self._sounds[i]._paused && !self._sounds[i]._ended) {
            num++;
            id = self._sounds[i]._id;
          }
        }

        if (num === 1) {
          sprite = null;
        } else {
          id = null;
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Makr this sounded as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);

      // Update the parameters of the sound
      sound._paused = false;
      sound._ended = false;
      sound._sprite = sprite;
      sound._seek = seek;
      sound._start = self._sprite[sprite][0] / 1000;
      sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._loop = !!(sound._loop || self._sprite[sprite][2]);

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
            }, 0);
          }
        };

        if (Howler.state === 'running') {
          playWebAudio();
        } else {
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Mobile browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (typeof Promise !== 'undefined' && play instanceof Promise) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Releases the lock and executes queued actions.
              var runLoadQueue = function() {
                self._playLock = false;
                if (!internal) {
                  self._emit('play', sound._id);
                }
              };
              play.then(runLoadQueue, runLoadQueue);
            } else if (!internal) {
              self._emit('play', sound._id);
            }

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default') {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          var listener = function() {
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Make sure the volume is in the right bounds.
        vol = Math.max(0, vol);
        vol = Math.min(1, vol);

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            sound._rateSeek = self.seek(id[i]);
            sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Restart the playback if the sound was playing.
          if (playing) {
            self.play(id, true);
          }

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node) {
            sound._node.currentTime = seek;
          }

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                self._emit('seek', id);
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            self._emit('seek', id);
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
          if (!checkIE) {
            sounds[i]._node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
          }

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);

        // Remove the references in the global Howler object.
        var index = Howler._howls.indexOf(self);
        if (index >= 0) {
          Howler._howls.splice(index, 1);
        }
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;

      if (Howler._scratchBuffer) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
      }
      node.bufferSource = null;

      return self;
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else {
        self._node = new Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = 'auto';
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.withCredentials = self._xhrWithCredentials;
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Decode the buffer into an audio source.
    Howler.ctx.decodeAudioData(arraybuffer, function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      }
    }, function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    });
  };

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Define globally in case AMD is not available or unused.
  if (typeof window !== 'undefined') {
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.0.9
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
  
  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];
      self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];
      self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              sound._panner.setPosition(pan, 0, 0);
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            sound._panner.setPosition(x, y, z);
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            sound._panner.setOrientation(x, y, z);
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   * 
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;
      sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common_5000Words = __webpack_require__(16);
var leftHanded = __webpack_require__(17);
var rightHandedWords = __webpack_require__(18);

function moreThan_2(wordsArr) {
	return wordsArr.filter(function (word) {
		return word.length > 2;
	});
}

function moreThan(wordsArr, num) {
	return wordsArr.filter(function (word) {
		return word.length > num;
	});
}

var commonMoreThan_2 = moreThan_2(common_5000Words);

var leftMoreThan_2 = moreThan_2(leftHanded.leftHandedWords);

var rightMoreThan_2 = moreThan_2(rightHandedWords);

var oneHandedWords = leftMoreThan_2.concat(rightMoreThan_2);

var oneHandedMoreThan_3 = moreThan(oneHandedWords, 3);

module.exports = exports = {
	commonMoreThan_2: commonMoreThan_2,
	leftMoreThan_2: leftMoreThan_2,
	rightMoreThan_2: rightMoreThan_2,
	oneHandedWords: oneHandedWords,
	oneHandedMoreThan_3: oneHandedMoreThan_3
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common_5000Words = ['the', 'be', 'and', 'of', 'a', 'in', 'to', 'have', 'to', 'it', 'I', 'that', 'for', 'you', 'he', 'with', 'on', 'do', 'say', 'this', 'they', 'at', 'but', 'we', 'his', 'from', 'that', 'not', 'by', 'she', 'or', 'as', 'what', 'go', 'their', 'can', 'who', 'get', 'if', 'would', 'her', 'all', 'my', 'make', 'about', 'know', 'will', 'as', 'up', 'one', 'time', 'there', 'year', 'so', 'think', 'when', 'which', 'them', 'some', 'me', 'people', 'take', 'out', 'into', 'just', 'see', 'him', 'your', 'come', 'could', 'now', 'than', 'like', 'other', 'how', 'then', 'its', 'our', 'two', 'more', 'these', 'want', 'way', 'look', 'first', 'also', 'new', 'because', 'day', 'more', 'use', 'no', 'man', 'find', 'here', 'thing', 'give', 'many', 'well', 'only', 'those', 'tell', 'one', 'very', 'her', 'even', 'back', 'any', 'good', 'woman', 'through', 'us', 'life', 'child', 'there', 'work', 'down', 'may', 'after', 'should', 'call', 'world', 'over', 'school', 'still', 'try', 'in', 'as', 'last', 'ask', 'need', 'too', 'feel', 'three', 'when', 'state', 'never', 'become', 'between', 'high', 'really', 'something', 'most', 'another', 'much', 'family', 'own', 'out', 'leave', 'put', 'old', 'while', 'mean', 'on', 'keep', 'student', 'why', 'let', 'great', 'same', 'big', 'group', 'begin', 'seem', 'country', 'help', 'talk', 'where', 'turn', 'problem', 'every', 'start', 'hand', 'might', 'American', 'show', 'part', 'about', 'against', 'place', 'over', 'such', 'again', 'few', 'case', 'most', 'week', 'company', 'where', 'system', 'each', 'right', 'program', 'hear', 'so', 'question', 'during', 'work', 'play', 'government', 'run', 'small', 'number', 'off', 'always', 'move', 'like', 'night', 'live', 'Mr', 'point', 'believe', 'hold', 'today', 'bring', 'happen', 'next', 'without', 'before', 'large', 'all', 'million', 'must', 'home', 'under', 'water', 'room', 'write', 'mother', 'area', 'national', 'money', 'story', 'young', 'fact', 'month', 'different', 'lot', 'right', 'study', 'book', 'eye', 'job', 'word', 'though', 'business', 'issue', 'side', 'kind', 'four', 'head', 'far', 'black', 'long', 'both', 'little', 'house', 'yes', 'after', 'since', 'long', 'provide', 'service', 'around', 'friend', 'important', 'father', 'sit', 'away', 'until', 'power', 'hour', 'game', 'often', 'yet', 'line', 'political', 'end', 'among', 'ever', 'stand', 'bad', 'lose', 'however', 'member', 'pay', 'law', 'meet', 'car', 'city', 'almost', 'include', 'continue', 'set', 'later', 'community', 'much', 'name', 'five', 'once', 'white', 'least', 'president', 'learn', 'real', 'change', 'team', 'minute', 'best', 'several', 'idea', 'kid', 'body', 'information', 'nothing', 'ago', 'right', 'lead', 'social', 'understand', 'whether', 'back', 'watch', 'together', 'follow', 'around', 'parent', 'only', 'stop', 'face', 'anything', 'create', 'public', 'already', 'speak', 'others', 'read', 'level', 'allow', 'add', 'office', 'spend', 'door', 'health', 'person', 'art', 'sure', 'such', 'war', 'history', 'party', 'within', 'grow', 'result', 'open', 'change', 'morning', 'walk', 'reason', 'low', 'win', 'research', 'girl', 'guy', 'early', 'food', 'before', 'moment', 'himself', 'air', 'teacher', 'force', 'offer', 'enough', 'both', 'education', 'across', 'although', 'remember', 'foot', 'second', 'boy', 'maybe', 'toward', 'able', 'age', 'off', 'policy', 'everything', 'love', 'process', 'music', 'including', 'consider', 'appear', 'actually', 'buy', 'probably', 'human', 'wait', 'serve', 'market', 'die', 'send', 'expect', 'home', 'sense', 'build', 'stay', 'fall', 'oh', 'nation', 'plan', 'cut', 'college', 'interest', 'death', 'course', 'someone', 'experience', 'behind', 'reach', 'local', 'kill', 'six', 'remain', 'effect', 'use', 'yeah', 'suggest', 'class', 'control', 'raise', 'care', 'perhaps', 'little', 'late', 'hard', 'field', 'else', 'pass', 'former', 'sell', 'major', 'sometimes', 'require', 'along', 'development', 'themselves', 'report', 'role', 'better', 'economic', 'effort', 'up', 'decide', 'rate', 'strong', 'possible', 'heart', 'drug', 'show', 'leader', 'light', 'voice', 'wife', 'whole', 'police', 'mind', 'finally', 'pull', 'return', 'free', 'military', 'price', 'report', 'less', 'according', 'decision', 'explain', 'son', 'hope', 'even', 'develop', 'view', 'relationship', 'carry', 'town', 'road', 'drive', 'arm', 'true', 'federal', 'break', 'better', 'difference', 'thank', 'receive', 'value', 'international', 'building', 'action', 'full', 'model', 'join', 'season', 'society', 'because', 'tax', 'director', 'early', 'position', 'player', 'agree', 'especially', 'record', 'pick', 'wear', 'paper', 'special', 'space', 'ground', 'form', 'support', 'event', 'official', 'whose', 'matter', 'everyone', 'center', 'couple', 'site', 'end', 'project', 'hit', 'base', 'activity', 'star', 'table', 'need', 'court', 'produce', 'eat', 'American', 'teach', 'oil', 'half', 'situation', 'easy', 'cost', 'industry', 'figure', 'face', 'street', 'image', 'itself', 'phone', 'either', 'data', 'cover', 'quite', 'picture', 'clear', 'practice', 'piece', 'land', 'recent', 'describe', 'product', 'doctor', 'wall', 'patient', 'worker', 'news', 'test', 'movie', 'certain', 'north', 'love', 'personal', 'open', 'support', 'simply', 'third', 'technology', 'catch', 'step', 'baby', 'computer', 'type', 'attention', 'draw', 'film', 'Republican', 'tree', 'source', 'red', 'nearly', 'organization', 'choose', 'cause', 'hair', 'look', 'point', 'century', 'evidence', 'window', 'difficult', 'listen', 'soon', 'culture', 'billion', 'chance', 'brother', 'energy', 'period', 'course', 'summer', 'less', 'realize', 'hundred', 'available', 'plant', 'likely', 'opportunity', 'term', 'short', 'letter', 'condition', 'choice', 'place', 'single', 'rule', 'daughter', 'administration', 'south', 'husband', 'Congress', 'floor', 'campaign', 'material', 'population', 'well', 'call', 'economy', 'medical', 'hospital', 'church', 'close', 'thousand', 'risk', 'current', 'fire', 'future', 'wrong', 'involve', 'defense', 'anyone', 'increase', 'security', 'bank', 'myself', 'certainly', 'west', 'sport', 'board', 'seek', 'per', 'subject', 'officer', 'private', 'rest', 'behavior', 'deal', 'performance', 'fight', 'throw', 'top', 'quickly', 'past', 'goal', 'second', 'bed', 'order', 'author', 'fill', 'represent', 'focus', 'foreign', 'drop', 'plan', 'blood', 'upon', 'agency', 'push', 'nature', 'color', 'no', 'recently', 'store', 'reduce', 'sound', 'note', 'fine', 'before', 'near', 'movement', 'page', 'enter', 'share', 'than', 'common', 'poor', 'other', 'natural', 'race', 'concern', 'series', 'significant', 'similar', 'hot', 'language', 'each', 'usually', 'response', 'dead', 'rise', 'animal', 'factor', 'decade', 'article', 'shoot', 'east', 'save', 'seven', 'artist', 'away', 'scene', 'stock', 'career', 'despite', 'central', 'eight', 'thus', 'treatment', 'beyond', 'happy', 'exactly', 'protect', 'approach', 'lie', 'size', 'dog', 'fund', 'serious', 'occur', 'media', 'ready', 'sign', 'thought', 'list', 'individual', 'simple', 'quality', 'pressure', 'accept', 'answer', 'hard', 'resource', 'identify', 'left', 'meeting', 'determine', 'prepare', 'disease', 'whatever', 'success', 'argue', 'cup', 'particularly', 'amount', 'ability', 'staff', 'recognize', 'indicate', 'character', 'growth', 'loss', 'degree', 'wonder', 'attack', 'herself', 'region', 'television', 'box', 'TV', 'training', 'pretty', 'trade', 'deal', 'election', 'everybody', 'physical', 'lay', 'general', 'feeling', 'standard', 'bill', 'message', 'fail', 'outside', 'arrive', 'analysis', 'benefit', 'name', 'forward', 'lawyer', 'present', 'section', 'environmental', 'glass', 'answer', 'skill', 'sister', 'PM', 'professor', 'operation', 'financial', 'crime', 'stage', 'ok', 'compare', 'authority', 'miss', 'design', 'sort', 'one', 'act', 'ten', 'knowledge', 'gun', 'station', 'blue', 'state', 'strategy', 'little', 'clearly', 'discuss', 'indeed', 'force', 'truth', 'song', 'example', 'democratic', 'check', 'environment', 'leg', 'dark', 'public', 'various', 'rather', 'laugh', 'guess', 'executive', 'set', 'study', 'prove', 'hang', 'entire', 'rock', 'design', 'enough', 'forget', 'since', 'claim', 'note', 'remove', 'manager', 'help', 'close', 'sound', 'enjoy', 'network', 'legal', 'religious', 'cold', 'form', 'final', 'main', 'science', 'green', 'memory', 'card', 'above', 'seat', 'cell', 'establish', 'nice', 'trial', 'expert', 'that', 'spring', 'firm', 'Democrat', 'radio', 'visit', 'management', 'care', 'avoid', 'imagine', 'tonight', 'huge', 'ball', 'no', 'close', 'finish', 'yourself', 'talk', 'theory', 'impact', 'respond', 'statement', 'maintain', 'charge', 'popular', 'traditional', 'onto', 'reveal', 'direction', 'weapon', 'employee', 'cultural', 'contain', 'peace', 'head', 'control', 'base', 'pain', 'apply', 'play', 'measure', 'wide', 'shake', 'fly', 'interview', 'manage', 'chair', 'fish', 'particular', 'camera', 'structure', 'politics', 'perform', 'bit', 'weight', 'suddenly', 'discover', 'candidate', 'top', 'production', 'treat', 'trip', 'evening', 'affect', 'inside', 'conference', 'unit', 'best', 'style', 'adult', 'worry', 'range', 'mention', 'rather', 'far', 'deep', 'past', 'edge', 'individual', 'specific', 'writer', 'trouble', 'necessary', 'throughout', 'challenge', 'fear', 'shoulder', 'institution', 'middle', 'sea', 'dream', 'bar', 'beautiful', 'property', 'instead', 'improve', 'stuff', 'detail', 'method', 'sign', 'somebody', 'magazine', 'hotel', 'soldier', 'reflect', 'heavy', 'cause', 'bag', 'heat', 'fall', 'marriage', 'tough', 'sing', 'surface', 'purpose', 'exist', 'pattern', 'whom', 'skin', 'agent', 'owner', 'machine', 'gas', 'down', 'ahead', 'generation', 'commercial', 'address', 'cancer', 'test', 'item', 'reality', 'coach', 'step', 'Mrs', 'yard', 'beat', 'violence', 'total', 'tend', 'investment', 'discussion', 'finger', 'garden', 'notice', 'collection', 'modern', 'task', 'partner', 'positive', 'civil', 'kitchen', 'consumer', 'shot', 'budget', 'wish', 'painting', 'scientist', 'safe', 'agreement', 'capital', 'mouth', 'nor', 'victim', 'newspaper', 'instead', 'threat', 'responsibility', 'smile', 'attorney', 'score', 'account', 'interesting', 'break', 'audience', 'rich', 'dinner', 'figure', 'vote', 'western', 'relate', 'travel', 'debate', 'prevent', 'citizen', 'majority', 'none', 'front', 'born', 'admit', 'senior', 'assume', 'wind', 'key', 'professional', 'mission', 'fast', 'alone', 'customer', 'suffer', 'speech', 'successful', 'option', 'participant', 'southern', 'fresh', 'eventually', 'no', 'forest', 'video', 'global', 'Senate', 'reform', 'access', 'restaurant', 'judge', 'publish', 'cost', 'relation', 'like', 'release', 'own', 'bird', 'opinion', 'credit', 'critical', 'corner', 'concerned', 'recall', 'version', 'stare', 'safety', 'effective', 'neighborhood', 'original', 'act', 'troop', 'income', 'directly', 'hurt', 'species', 'immediately', 'track', 'basic', 'strike', 'hope', 'sky', 'freedom', 'absolutely', 'plane', 'nobody', 'achieve', 'object', 'attitude', 'labor', 'refer', 'concept', 'client', 'powerful', 'perfect', 'nine', 'therefore', 'conduct', 'announce', 'conversation', 'examine', 'touch', 'please', 'attend', 'completely', 'vote', 'variety', 'sleep', 'turn', 'involved', 'investigation', 'nuclear', 'researcher', 'press', 'conflict', 'spirit', 'experience', 'replace', 'British', 'encourage', 'argument', 'by', 'once', 'camp', 'brain', 'feature', 'afternoon', 'AM', 'weekend', 'dozen', 'possibility', 'along', 'insurance', 'department', 'battle', 'beginning', 'date', 'generally', 'African', 'very', 'sorry', 'crisis', 'complete', 'fan', 'stick', 'define', 'easily', 'through', 'hole', 'element', 'vision', 'status', 'normal', 'Chinese', 'ship', 'solution', 'stone', 'slowly', 'scale', 'bit', 'university', 'introduce', 'driver', 'attempt', 'park', 'spot', 'lack', 'ice', 'boat', 'drink', 'sun', 'front', 'distance', 'wood', 'handle', 'truck', 'return', 'mountain', 'survey', 'supposed', 'tradition', 'winter', 'village', 'Soviet', 'refuse', 'sales', 'roll', 'communication', 'run', 'screen', 'gain', 'resident', 'hide', 'gold', 'club', 'future', 'farm', 'potential', 'increase', 'middle', 'European', 'presence', 'independent', 'district', 'shape', 'reader', 'Ms', 'contract', 'crowd', 'Christian', 'express', 'apartment', 'willing', 'strength', 'previous', 'band', 'obviously', 'horse', 'interested', 'target', 'prison', 'ride', 'guard', 'terms', 'demand', 'reporter', 'deliver', 'text', 'share', 'tool', 'wild', 'vehicle', 'observe', 'flight', 'inside', 'facility', 'understanding', 'average', 'emerge', 'advantage', 'quick', 'light', 'leadership', 'earn', 'pound', 'basis', 'bright', 'operate', 'guest', 'sample', 'contribute', 'tiny', 'block', 'protection', 'settle', 'feed', 'collect', 'additional', 'while', 'highly', 'identity', 'title', 'mostly', 'lesson', 'faith', 'river', 'promote', 'living', 'present', 'count', 'unless', 'marry', 'tomorrow', 'technique', 'path', 'ear', 'shop', 'folk', 'order', 'principle', 'survive', 'lift', 'border', 'competition', 'jump', 'gather', 'limit', 'fit', 'claim', 'cry', 'equipment', 'worth', 'associate', 'critic', 'warm', 'aspect', 'result', 'insist', 'failure', 'annual', 'French', 'Christmas', 'comment', 'responsible', 'affair', 'approach', 'until', 'procedure', 'regular', 'spread', 'chairman', 'baseball', 'soft', 'ignore', 'egg', 'measure', 'belief', 'demonstrate', 'anybody', 'murder', 'gift', 'religion', 'review', 'editor', 'past', 'engage', 'coffee', 'document', 'speed', 'cross', 'influence', 'anyway', 'threaten', 'commit', 'female', 'youth', 'wave', 'move', 'afraid', 'quarter', 'background', 'native', 'broad', 'wonderful', 'deny', 'apparently', 'slightly', 'reaction', 'twice', 'suit', 'perspective', 'growing', 'blow', 'construction', 'kind', 'intelligence', 'destroy', 'cook', 'connection', 'charge', 'burn', 'shoe', 'view', 'grade', 'context', 'committee', 'hey', 'mistake', 'focus', 'smile', 'location', 'clothes', 'Indian', 'quiet', 'dress', 'promise', 'aware', 'neighbor', 'complete', 'drive', 'function', 'bone', 'active', 'extend', 'chief', 'average', 'combine', 'wine', 'below', 'cool', 'voter', 'mean', 'demand', 'learning', 'bus', 'dangerous', 'remind', 'moral', 'United', 'category', 'relatively', 'victory', 'key', 'academic', 'visit', 'Internet', 'healthy', 'fire', 'negative', 'following', 'historical', 'medicine', 'tour', 'depend', 'photo', 'finding', 'grab', 'direct', 'classroom', 'contact', 'justice', 'participate', 'daily', 'fair', 'pair', 'famous', 'exercise', 'knee', 'flower', 'tape', 'hire', 'familiar', 'appropriate', 'supply', 'fully', 'cut', 'will', 'actor', 'birth', 'search', 'tie', 'democracy', 'eastern', 'primary', 'yesterday', 'circle', 'device', 'progress', 'next', 'front', 'bottom', 'island', 'exchange', 'clean', 'studio', 'train', 'lady', 'colleague', 'application', 'neck', 'lean', 'damage', 'plastic', 'tall', 'plate', 'hate', 'otherwise', 'writing', 'press', 'male', 'start', 'alive', 'expression', 'football', 'intend', 'attack', 'chicken', 'army', 'abuse', 'theater', 'shut', 'map', 'extra', 'session', 'danger', 'welcome', 'domestic', 'lots', 'literature', 'rain', 'desire', 'assessment', 'injury', 'respect', 'northern', 'nod', 'paint', 'fuel', 'leaf', 'direct', 'dry', 'Russian', 'instruction', 'fight', 'pool', 'climb', 'sweet', 'lead', 'engine', 'fourth', 'salt', 'expand', 'importance', 'metal', 'fat', 'ticket', 'software', 'disappear', 'corporate', 'strange', 'lip', 'reading', 'urban', 'mental', 'increasingly', 'lunch', 'educational', 'somewhere', 'farmer', 'above', 'sugar', 'planet', 'favorite', 'explore', 'obtain', 'enemy', 'greatest', 'complex', 'surround', 'athlete', 'invite', 'repeat', 'carefully', 'soul', 'scientific', 'impossible', 'panel', 'meaning', 'mom', 'married', 'alone', 'instrument', 'predict', 'weather', 'presidential', 'emotional', 'commitment', 'Supreme', 'bear', 'pocket', 'thin', 'temperature', 'surprise', 'poll', 'proposal', 'consequence', 'half', 'breath', 'sight', 'cover', 'balance', 'adopt', 'minority', 'straight', 'attempt', 'connect', 'works', 'teaching', 'belong', 'aid', 'advice', 'okay', 'photograph', 'empty', 'regional', 'trail', 'novel', 'code', 'somehow', 'organize', 'jury', 'breast', 'Iraqi', 'human', 'acknowledge', 'theme', 'storm', 'union', 'record', 'desk', 'fear', 'thanks', 'fruit', 'under', 'expensive', 'yellow', 'conclusion', 'prime', 'shadow', 'struggle', 'conclude', 'analyst', 'dance', 'limit', 'like', 'regulation', 'being', 'last', 'ring', 'largely', 'shift', 'revenue', 'mark', 'locate', 'county', 'appearance', 'package', 'difficulty', 'bridge', 'recommend', 'obvious', 'train', 'basically', 'e', 'generate', 'anymore', 'propose', 'thinking', 'possibly', 'trend', 'visitor', 'loan', 'currently', 'comfortable', 'investor', 'but', 'profit', 'angry', 'crew', 'deep', 'accident', 'male', 'meal', 'hearing', 'traffic', 'muscle', 'notion', 'capture', 'prefer', 'truly', 'earth', 'Japanese', 'chest', 'search', 'thick', 'cash', 'museum', 'beauty', 'emergency', 'unique', 'feature', 'internal', 'ethnic', 'link', 'stress', 'content', 'select', 'root', 'nose', 'declare', 'outside', 'appreciate', 'actual', 'bottle', 'hardly', 'setting', 'launch', 'dress', 'file', 'sick', 'outcome', 'ad', 'defend', 'matter', 'judge', 'duty', 'sheet', 'ought', 'ensure', 'Catholic', 'extremely', 'extent', 'component', 'mix', 'long', 'slow', 'contrast', 'zone', 'wake', 'challenge', 'airport', 'chief', 'brown', 'standard', 'shirt', 'pilot', 'warn', 'ultimately', 'cat', 'contribution', 'capacity', 'ourselves', 'estate', 'guide', 'circumstance', 'snow', 'English', 'politician', 'steal', 'pursue', 'slip', 'percentage', 'meat', 'funny', 'neither', 'soil', 'influence', 'surgery', 'correct', 'Jewish', 'blame', 'estimate', 'due', 'basketball', 'late', 'golf', 'investigate', 'crazy', 'significantly', 'chain', 'address', 'branch', 'combination', 'just', 'frequently', 'governor', 'relief', 'user', 'dad', 'kick', 'part', 'manner', 'ancient', 'silence', 'rating', 'golden', 'motion', 'German', 'gender', 'solve', 'fee', 'landscape', 'used', 'bowl', 'equal', 'long', 'official', 'forth', 'frame', 'typical', 'except', 'conservative', 'eliminate', 'host', 'hall', 'trust', 'ocean', 'score', 'row', 'producer', 'afford', 'meanwhile', 'regime', 'division', 'confirm', 'fix', 'appeal', 'mirror', 'tooth', 'smart', 'length', 'entirely', 'rely', 'topic', 'complain', 'issue', 'variable', 'back', 'range', 'telephone', 'perception', 'attract', 'confidence', 'bedroom', 'secret', 'debt', 'rare', 'his', 'tank', 'nurse', 'coverage', 'opposition', 'aside', 'anywhere', 'bond', 'file', 'pleasure', 'master', 'era', 'requirement', 'check', 'stand', 'fun', 'expectation', 'wing', 'separate', 'now', 'clear', 'struggle', 'mean', 'somewhat', 'pour', 'stir', 'judgment', 'clean', 'except', 'beer', 'English', 'reference', 'tear', 'doubt', 'grant', 'seriously', 'account', 'minister', 'totally', 'hero', 'industrial', 'cloud', 'stretch', 'winner', 'volume', 'travel', 'seed', 'surprised', 'rest', 'fashion', 'pepper', 'separate', 'busy', 'intervention', 'copy', 'tip', 'below', 'cheap', 'aim', 'cite', 'welfare', 'vegetable', 'gray', 'dish', 'beach', 'improvement', 'everywhere', 'opening', 'overall', 'divide', 'initial', 'terrible', 'oppose', 'contemporary', 'route', 'multiple', 'essential', 'question', 'league', 'criminal', 'careful', 'core', 'upper', 'rush', 'necessarily', 'specifically', 'tired', 'rise', 'tie', 'employ', 'holiday', 'dance', 'vast', 'resolution', 'household', 'fewer', 'abortion', 'apart', 'witness', 'match', 'barely', 'sector', 'representative', 'lack', 'beneath', 'beside', 'black', 'incident', 'limited', 'proud', 'flow', 'faculty', 'increased', 'waste', 'merely', 'mass', 'emphasize', 'experiment', 'definitely', 'bomb', 'enormous', 'tone', 'liberal', 'massive', 'engineer', 'wheel', 'female', 'decline', 'invest', 'promise', 'cable', 'towards', 'expose', 'rural', 'AIDS', 'Jew', 'narrow', 'cream', 'secretary', 'gate', 'solid', 'hill', 'typically', 'noise', 'grass', 'unfortunately', 'hat', 'legislation', 'succeed', 'either', 'celebrate', 'achievement', 'fishing', 'drink', 'accuse', 'hand', 'useful', 'land', 'secret', 'reject', 'talent', 'taste', 'characteristic', 'milk', 'escape', 'cast', 'sentence', 'unusual', 'closely', 'convince', 'height', 'physician', 'assess', 'sleep', 'plenty', 'ride', 'virtually', 'first', 'addition', 'sharp', 'creative', 'lower', 'behind', 'approve', 'explanation', 'outside', 'campus', 'proper', 'live', 'guilty', 'living', 'acquire', 'compete', 'technical', 'plus', 'mind', 'potential', 'immigrant', 'weak', 'illegal', 'hi', 'alternative', 'interaction', 'column', 'personality', 'signal', 'curriculum', 'list', 'honor', 'passenger', 'assistance', 'forever', 'fun', 'regard', 'Israeli', 'association', 'twenty', 'knock', 'review', 'wrap', 'lab', 'offer', 'display', 'criticism', 'asset', 'depression', 'spiritual', 'musical', 'journalist', 'prayer', 'suspect', 'scholar', 'warning', 'climate', 'cheese', 'observation', 'childhood', 'payment', 'sir', 'permit', 'cigarette', 'definition', 'priority', 'bread', 'creation', 'graduate', 'request', 'emotion', 'scream', 'dramatic', 'universe', 'gap', 'excellent', 'deeply', 'prosecutor', 'mark', 'green', 'lucky', 'drag', 'airline', 'library', 'agenda', 'recover', 'factory', 'selection', 'primarily', 'roof', 'unable', 'expense', 'initiative', 'diet', 'arrest', 'funding', 'therapy', 'wash', 'schedule', 'sad', 'brief', 'housing', 'post', 'purchase', 'existing', 'dark', 'steel', 'regarding', 'shout', 'remaining', 'visual', 'fairly', 'chip', 'violent', 'silent', 'suppose', 'self', 'bike', 'tea', 'perceive', 'comparison', 'settlement', 'layer', 'planning', 'far', 'description', 'later', 'slow', 'slide', 'widely', 'wedding', 'inform', 'portion', 'territory', 'immediate', 'opponent', 'abandon', 'link', 'mass', 'lake', 'transform', 'tension', 'display', 'leading', 'bother', 'consist', 'alcohol', 'enable', 'bend', 'saving', 'gain', 'desert', 'shall', 'error', 'release', 'cop', 'Arab', 'double', 'walk', 'sand', 'Spanish', 'rule', 'hit', 'print', 'preserve', 'passage', 'formal', 'transition', 'existence', 'album', 'participation', 'arrange', 'atmosphere', 'joint', 'reply', 'cycle', 'opposite', 'lock', 'whole', 'deserve', 'consistent', 'resistance', 'discovery', 'tear', 'exposure', 'pose', 'stream', 'sale', 'trust', 'benefit', 'pot', 'grand', 'mine', 'hello', 'coalition', 'tale', 'knife', 'resolve', 'racial', 'phase', 'present', 'joke', 'coat', 'Mexican', 'symptom', 'contact', 'manufacturer', 'philosophy', 'potato', 'interview', 'foundation', 'quote', 'online', 'pass', 'negotiation', 'good', 'urge', 'occasion', 'dust', 'breathe', 'elect', 'investigator', 'jacket', 'glad', 'ordinary', 'reduction', 'rarely', 'shift', 'pack', 'numerous', 'touch', 'substance', 'discipline', 'elsewhere', 'iron', 'practical', 'moreover', 'passion', 'volunteer', 'implement', 'essentially', 'gene', 'enforcement', 'sauce', 'independence', 'marketing', 'priest', 'amazing', 'intense', 'advance', 'employer', 'shock', 'inspire', 'adjust', 'retire', 'sure', 'visible', 'kiss', 'illness', 'cap', 'habit', 'competitive', 'juice', 'congressional', 'involvement', 'dominate', 'previously', 'whenever', 'transfer', 'analyze', 'another', 'attach', 'for', 'Indian', 'disaster', 'parking', 'prospect', 'boss', 'complaint', 'championship', 'coach', 'exercise', 'fundamental', 'severe', 'enhance', 'mystery', 'impose', 'poverty', 'other', 'entry', 'fat', 'spending', 'king', 'evaluate', 'symbol', 'still', 'trade', 'maker', 'mood', 'accomplish', 'emphasis', 'illustrate', 'boot', 'monitor', 'Asian', 'entertainment', 'bean', 'evaluation', 'creature', 'commander', 'digital', 'arrangement', 'concentrate', 'total', 'usual', 'anger', 'psychological', 'heavily', 'peak', 'approximately', 'increasing', 'disorder', 'missile', 'equally', 'vary', 'wire', 'round', 'distribution', 'transportation', 'holy', 'ring', 'twin', 'command', 'commission', 'interpretation', 'breakfast', 'stop', 'strongly', 'engineering', 'luck', 'so', 'constant', 'race', 'clinic', 'veteran', 'smell', 'tablespoon', 'capable', 'nervous', 'tourist', 'light', 'toss', 'crucial', 'bury', 'pray', 'tomato', 'exception', 'butter', 'deficit', 'bathroom', 'objective', 'block', 'electronic', 'ally', 'journey', 'reputation', 'mixture', 'surely', 'tower', 'smoke', 'confront', 'pure', 'glance', 'dimension', 'toy', 'prisoner', 'fellow', 'smooth', 'nearby', 'peer', 'designer', 'personnel', 'shape', 'educator', 'relative', 'immigration', 'belt', 'teaspoon', 'birthday', 'implication', 'perfectly', 'coast', 'supporter', 'accompany', 'silver', 'teenager', 'recognition', 'retirement', 'flag', 'recovery', 'whisper', 'watch', 'gentleman', 'corn', 'moon', 'inner', 'junior', 'rather', 'throat', 'salary', 'swing', 'observer', 'due', 'straight', 'publication', 'pretty', 'crop', 'dig', 'strike', 'permanent', 'plant', 'phenomenon', 'anxiety', 'unlike', 'wet', 'literally', 'resist', 'convention', 'embrace', 'supply', 'assist', 'exhibition', 'construct', 'viewer', 'pan', 'consultant', 'soon', 'line', 'administrator', 'date', 'occasionally', 'mayor', 'consideration', 'CEO', 'secure', 'pink', 'smoke', 'estimate', 'buck', 'historic', 'poem', 'grandmother', 'bind', 'fifth', 'constantly', 'enterprise', 'favor', 'testing', 'stomach', 'apparent', 'weigh', 'install', 'sensitive', 'suggestion', 'mail', 'recipe', 'reasonable', 'preparation', 'wooden', 'elementary', 'concert', 'aggressive', 'false', 'intention', 'channel', 'extreme', 'tube', 'drawing', 'protein', 'quit', 'absence', 'roll', 'Latin', 'rapidly', 'jail', 'comment', 'diversity', 'honest', 'Palestinian', 'pace', 'employment', 'speaker', 'impression', 'essay', 'respondent', 'giant', 'cake', 'historian', 'negotiate', 'restore', 'substantial', 'pop', 'particular', 'specialist', 'origin', 'approval', 'mine', 'quietly', 'advise', 'conventional', 'drop', 'count', 'depth', 'wealth', 'disability', 'shell', 'general', 'criticize', 'fast', 'professional', 'effectively', 'biological', 'pack', 'onion', 'deputy', 'flat', 'brand', 'assure', 'mad', 'award', 'criteria', 'dealer', 'via', 'alternative', 'utility', 'precisely', 'arise', 'armed', 'nevertheless', 'highway', 'clinical', 'routine', 'schedule', 'wage', 'normally', 'phrase', 'ingredient', 'stake', 'Muslim', 'dream', 'fiber', 'activist', 'Islamic', 'snap', 'terrorism', 'refugee', 'incorporate', 'hip', 'ultimate', 'switch', 'corporation', 'valuable', 'assumption', 'gear', 'graduate', 'barrier', 'minor', 'provision', 'killer', 'assign', 'gang', 'developing', 'classic', 'chemical', 'wave', 'label', 'teen', 'index', 'vacation', 'advocate', 'draft', 'extraordinary', 'heaven', 'rough', 'yell', 'pregnant', 'distant', 'drama', 'satellite', 'personally', 'wonder', 'clock', 'chocolate', 'Italian', 'Canadian', 'ceiling', 'sweep', 'advertising', 'universal', 'spin', 'house', 'button', 'bell', 'rank', 'darkness', 'ahead', 'clothing', 'super', 'yield', 'fence', 'portrait', 'paint', 'survival', 'roughly', 'lawsuit', 'bottom', 'testimony', 'bunch', 'beat', 'wind', 'found', 'burden', 'react', 'chamber', 'furniture', 'cooperation', 'string', 'ceremony', 'communicate', 'taste', 'cheek', 'lost', 'profile', 'mechanism', 'disagree', 'like', 'penalty', 'match', 'ie', 'advance', 'resort', 'destruction', 'bear', 'unlikely', 'tissue', 'constitutional', 'pant', 'stranger', 'infection', 'cabinet', 'broken', 'apple', 'electric', 'proceed', 'track', 'bet', 'literary', 'virus', 'stupid', 'dispute', 'fortune', 'strategic', 'assistant', 'overcome', 'remarkable', 'occupy', 'statistics', 'shopping', 'cousin', 'encounter', 'wipe', 'initially', 'blind', 'white', 'port', 'honor', 'electricity', 'genetic', 'adviser', 'pay', 'spokesman', 'retain', 'latter', 'incentive', 'slave', 'chemical', 'translate', 'accurate', 'whereas', 'terror', 'though', 'expansion', 'elite', 'Olympic', 'dirt', 'odd', 'rice', 'bullet', 'tight', 'Bible', 'chart', 'solar', 'decline', 'conservative', 'process', 'square', 'stick', 'concentration', 'complicated', 'gently', 'champion', 'scenario', 'telescope', 'reflection', 'revolution', 'strip', 'interpret', 'friendly', 'tournament', 'fiction', 'detect', 'balance', 'likely', 'tremendous', 'lifetime', 'recommendation', 'flow', 'senator', 'market', 'hunting', 'salad', 'guarantee', 'innocent', 'boundary', 'pause', 'remote', 'satisfaction', 'journal', 'bench', 'lover', 'raw', 'awareness', 'surprising', 'withdraw', 'general', 'deck', 'similarly', 'newly', 'pole', 'testify', 'mode', 'dialogue', 'imply', 'naturally', 'mutual', 'founder', 'top', 'advanced', 'pride', 'dismiss', 'aircraft', 'delivery', 'mainly', 'bake', 'freeze', 'platform', 'finance', 'sink', 'attractive', 'respect', 'diverse', 'relevant', 'ideal', 'joy', 'worth', 'regularly', 'working', 'singer', 'evolve', 'shooting', 'partly', 'unknown', 'assistant', 'offense', 'counter', 'DNA', 'smell', 'potentially', 'transfer', 'thirty', 'justify', 'protest', 'crash', 'craft', 'treaty', 'terrorist', 'insight', 'possess', 'politically', 'tap', 'lie', 'extensive', 'episode', 'double', 'swim', 'tire', 'fault', 'loose', 'free', 'shortly', 'originally', 'considerable', 'prior', 'intellectual', 'mix', 'assault', 'relax', 'stair', 'adventure', 'external', 'proof', 'confident', 'headquarters', 'sudden', 'dirty', 'violation', 'tongue', 'license', 'hold', 'shelter', 'rub', 'controversy', 'entrance', 'favorite', 'practice', 'properly', 'fade', 'defensive', 'tragedy', 'net', 'characterize', 'funeral', 'profession', 'alter', 'spot', 'constitute', 'establishment', 'squeeze', 'imagination', 'target', 'mask', 'convert', 'comprehensive', 'prominent', 'presentation', 'regardless', 'easy', 'load', 'stable', 'introduction', 'appeal', 'pretend', 'not', 'elderly', 'representation', 'deer', 'split', 'violate', 'partnership', 'pollution', 'emission', 'steady', 'vital', 'neither', 'fate', 'earnings', 'oven', 'distinction', 'segment', 'nowhere', 'poet', 'mere', 'exciting', 'variation', 'comfort', 'radical', 'stress', 'adapt', 'Irish', 'honey', 'correspondent', 'pale', 'musician', 'significance', 'load', 'round', 'vessel', 'storage', 'flee', 'mm', 'leather', 'distribute', 'evolution', 'ill', 'tribe', 'shelf', 'can', 'grandfather', 'lawn', 'buyer', 'dining', 'wisdom', 'council', 'vulnerable', 'instance', 'garlic', 'capability', 'poetry', 'celebrity', 'gradually', 'stability', 'doubt', 'fantasy', 'scared', 'guide', 'plot', 'framework', 'gesture', 'depending', 'ongoing', 'psychology', 'since', 'counselor', 'witness', 'chapter', 'fellow', 'divorce', 'owe', 'pipe', 'athletic', 'slight', 'math', 'shade', 'tail', 'sustain', 'mount', 'obligation', 'angle', 'palm', 'differ', 'custom', 'store', 'economist', 'fifteen', 'soup', 'celebration', 'efficient', 'damage', 'composition', 'satisfy', 'pile', 'briefly', 'carbon', 'closer', 'consume', 'scheme', 'crack', 'frequency', 'tobacco', 'survivor', 'besides', 'in', 'psychologist', 'wealthy', 'galaxy', 'given', 'fund', 'ski', 'limitation', 'OK', 'trace', 'appointment', 'preference', 'meter', 'explosion', 'arrest', 'publicly', 'incredible', 'fighter', 'rapid', 'admission', 'hunter', 'educate', 'painful', 'friendship', 'aide', 'infant', 'calculate', 'fifty', 'rid', 'porch', 'tendency', 'uniform', 'formation', 'scholarship', 'reservation', 'efficiency', 'waste', 'qualify', 'mall', 'derive', 'scandal', 'PC', 'helpful', 'impress', 'heel', 'resemble', 'privacy', 'fabric', 'surprise', 'contest', 'proportion', 'guideline', 'rifle', 'maintenance', 'conviction', 'trick', 'organic', 'tent', 'examination', 'publisher', 'strengthen', 'French', 'proposed', 'myth', 'sophisticated', 'cow', 'etc', 'standing', 'asleep', 'tennis', 'nerve', 'barrel', 'bombing', 'membership', 'ratio', 'menu', 'purchase', 'controversial', 'desperate', 'rate', 'lifestyle', 'humor', 'loud', 'glove', 'suspect', 'sufficient', 'narrative', 'photographer', 'helicopter', 'Catholic', 'modest', 'provider', 'delay', 'agricultural', 'explode', 'stroke', 'scope', 'punishment', 'handful', 'badly', 'horizon', 'curious', 'downtown', 'girlfriend', 'prompt', 'request', 'cholesterol', 'absorb', 'adjustment', 'taxpayer', 'eager', 'principal', 'detailed', 'motivation', 'assignment', 'restriction', 'across', 'Palestinian', 'laboratory', 'workshop', 'differently', 'auto', 'romantic', 'cotton', 'motor', 'sue', 'flavor', 'overlook', 'float', 'undergo', 'sequence', 'demonstration', 'jet', 'orange', 'consumption', 'assert', 'blade', 'temporary', 'medication', 'print', 'cabin', 'bite', 'relative', 'edition', 'valley', 'yours', 'pitch', 'pine', 'brilliant', 'versus', 'manufacturing', 'risk', 'Christian', 'complex', 'absolute', 'chef', 'discrimination', 'offensive', 'German', 'suit', 'boom', 'register', 'appoint', 'heritage', 'God', 'terrorist', 'dominant', 'successfully', 'lemon', 'hungry', 'sense', 'dry', 'wander', 'submit', 'economics', 'naked', 'anticipate', 'nut', 'legacy', 'extension', 'shrug', 'fly', 'battery', 'arrival', 'legitimate', 'orientation', 'inflation', 'cope', 'flame', 'cluster', 'host', 'wound', 'dependent', 'shower', 'institutional', 'depict', 'operating', 'flesh', 'garage', 'operator', 'instructor', 'collapse', 'borrow', 'furthermore', 'comedy', 'mortgage', 'sanction', 'civilian', 'twelve', 'weekly', 'habitat', 'grain', 'brush', 'consciousness', 'devote', 'crack', 'measurement', 'province', 'ease', 'seize', 'ethics', 'nomination', 'permission', 'wise', 'actress', 'summit', 'acid', 'odds', 'gifted', 'frustration', 'medium', 'function', 'physically', 'grant', 'distinguish', 'shore', 'repeatedly', 'lung', 'firm', 'running', 'correct', 'distinct', 'artistic', 'discourse', 'basket', 'ah', 'fighting', 'impressive', 'competitor', 'ugly', 'worried', 'portray', 'powder', 'ghost', 'persuade', 'moderate', 'subsequent', 'continued', 'cookie', 'carrier', 'cooking', 'frequent', 'ban', 'swing', 'orange', 'awful', 'admire', 'pet', 'miracle', 'exceed', 'rhythm', 'widespread', 'killing', 'lovely', 'sin', 'charity', 'script', 'tactic', 'identification', 'transformation', 'everyday', 'headline', 'crash', 'venture', 'invasion', 'military', 'nonetheless', 'adequate', 'piano', 'grocery', 'intensity', 'exhibit', 'high', 'blanket', 'margin', 'principal', 'quarterback', 'mouse', 'rope', 'concrete', 'prescription', 'African', 'chase', 'document', 'brick', 'recruit', 'patch', 'consensus', 'horror', 'recording', 'changing', 'painter', 'colonial', 'pie', 'sake', 'gaze', 'courage', 'pregnancy', 'swear', 'defeat', 'clue', 'reinforce', 'win', 'confusion', 'slice', 'occupation', 'dear', 'coal', 'sacred', 'criminal', 'formula', 'cognitive', 'collective', 'exact', 'uncle', 'square', 'captain', 'sigh', 'attribute', 'dare', 'okay', 'homeless', 'cool', 'gallery', 'soccer', 'defendant', 'tunnel', 'fitness', 'lap', 'grave', 'toe', 'container', 'virtue', 'abroad', 'architect', 'dramatically', 'makeup', 'inquiry', 'rose', 'surprisingly', 'highlight', 'decrease', 'indication', 'rail', 'anniversary', 'couch', 'alliance', 'hypothesis', 'boyfriend', 'compose', 'peer', 'mess', 'rank', 'legend', 'regulate', 'adolescent', 'shine', 'norm', 'upset', 'remark', 'resign', 'reward', 'gentle', 'related', 'organ', 'lightly', 'concerning', 'invent', 'laughter', 'fit', 'northwest', 'counseling', 'tight', 'receiver', 'ritual', 'insect', 'interrupt', 'salmon', 'favor', 'trading', 'concern', 'magic', 'superior', 'combat', 'stem', 'surgeon', 'acceptable', 'physics', 'counsel', 'brush', 'jeans', 'hunt', 'continuous', 'log', 'echo', 'pill', 'excited', 'sculpture', 'compound', 'integrate', 'flour', 'bitter', 'bare', 'slope', 'rent', 'presidency', 'serving', 'subtle', 'greatly', 'bishop', 'drinking', 'delay', 'cry', 'acceptance', 'collapse', 'shop', 'pump', 'candy', 'evil', 'final', 'finance', 'pleased', 'medal', 'beg', 'sponsor', 'ethical', 'secondary', 'slam', 'export', 'experimental', 'melt', 'midnight', 'net', 'curve', 'integrity', 'entitle', 'evident', 'logic', 'essence', 'park', 'exclude', 'harsh', 'closet', 'suburban', 'greet', 'favor', 'interior', 'corridor', 'murder', 'retail', 'pitcher', 'march', 'snake', 'pitch', 'excuse', 'cross', 'weakness', 'pig', 'cold', 'classical', 'estimated', 'T', 'online', 'unemployment', 'civilization', 'fold', 'patient', 'pop', 'daily', 'reverse', 'missing', 'correlation', 'humanity', 'flash', 'developer', 'reliable', 'excitement', 'beef', 'Islam', 'Roman', 'stretch', 'architecture', 'occasional', 'administrative', 'elbow', 'deadly', 'Muslim', 'Hispanic', 'allegation', 'tip', 'confuse', 'airplane', 'monthly', 'duck', 'dose', 'Korean', 'plead', 'initiate', 'lecture', 'van', 'sixth', 'bay', 'mainstream', 'suburb', 'sandwich', 'unlike', 'trunk', 'rumor', 'implementation', 'swallow', 'motivate', 'render', 'longtime', 'trap', 'restrict', 'cloth', 'seemingly', 'legislative', 'effectiveness', 'enforce', 'lens', 'reach', 'inspector', 'lend', 'plain', 'fraud', 'companion', 'contend', 'nail', 'array', 'strict', 'assemble', 'frankly', 'rat', 'burst', 'hallway', 'cave', 'inevitable', 'southwest', 'monster', 'speed', 'protest', 'unexpected', 'obstacle', 'facilitate', 'encounter', 'rip', 'herb', 'overwhelming', 'integration', 'crystal', 'recession', 'wish', 'top', 'written', 'motive', 'label', 'flood', 'pen', 'ownership', 'nightmare', 'notice', 'inspection', 'supervisor', 'consult', 'arena', 'laugh', 'diagnosis', 'possession', 'forgive', 'warm', 'consistently', 'basement', 'project', 'drift', 'drain', 'last', 'prosecution', 'maximum', 'announcement', 'warrior', 'prediction', 'bacteria', 'questionnaire', 'mud', 'infrastructure', 'hurry', 'privilege', 'temple', 'medium', 'outdoor', 'suck', 'and', 'broadcast', 're', 'leap', 'random', 'past', 'wrist', 'curtain', 'monitor', 'pond', 'domain', 'guilt', 'cattle', 'subject', 'walking', 'playoff', 'minimum', 'fiscal', 'skirt', 'dump', 'hence', 'database', 'uncomfortable', 'aim', 'execute', 'limb', 'ideology', 'average', 'welcome', 'tune', 'continuing', 'harm', 'railroad', 'endure', 'radiation', 'horn', 'chronic', 'peaceful', 'innovation', 'strain', 'guitar', 'replacement', 'behave', 'administer', 'simultaneously', 'dancer', 'amendment', 'guard', 'pad', 'transmission', 'await', 'retired', 'trigger', 'spill', 'grateful', 'grace', 'virtual', 'response', 'colony', 'adoption', 'slide', 'indigenous', 'closed', 'convict', 'civilian', 'towel', 'modify', 'particle', 'award', 'glance', 'prize', 'landing', 'conduct', 'blue', 'boost', 'bat', 'alarm', 'festival', 'grip', 'weird', 'undermine', 'freshman', 'sweat', 'outer', 'European', 'drunk', 'survey', 'research', 'separation', 'traditionally', 'stuff', 'govern', 'southeast', 'intelligent', 'wherever', 'ballot', 'rhetoric', 'convinced', 'driving', 'vitamin', 'enthusiasm', 'accommodate', 'praise', 'injure', 'wilderness', 'nearby', 'endless', 'mandate', 'pause', 'excuse', 'respectively', 'uncertainty', 'chaos', 'short', 'mechanical', 'canvas', 'forty', 'matter', 'lobby', 'profound', 'format', 'trait', 'currency', 'turkey', 'reserve', 'beam', 'abuse', 'astronomer', 'corruption', 'contractor', 'apologize', 'doctrine', 'genuine', 'thumb', 'unity', 'compromise', 'horrible', 'behavioral', 'exclusive', 'scatter', 'commonly', 'convey', 'rush', 'twist', 'complexity', 'fork', 'disk', 'relieve', 'suspicion', 'lock', 'finish', 'residence', 'shame', 'meaningful', 'sidewalk', 'Olympics', 'technological', 'signature', 'pleasant', 'wow', 'suspend', 'rebel', 'frozen', 'desire', 'spouse', 'fluid', 'pension', 'resume', 'theoretical', 'sodium', 'blow', 'promotion', 'delicate', 'forehead', 'rebuild', 'bounce', 'electrical', 'hook', 'detective', 'traveler', 'click', 'compensation', 'signal', 'exit', 'attraction', 'dedicate', 'altogether', 'pickup', 'carve', 'needle', 'belly', 'ship', 'scare', 'portfolio', 'shuttle', 'invisible', 'timing', 'engagement', 'ankle', 'transaction', 'rescue', 'counterpart', 'historically', 'firmly', 'mild', 'rider', 'doll', 'noon', 'exhibit', 'amid', 'identical', 'precise', 'anxious', 'structural', 'residential', 'loud', 'diagnose', 'carbohydrate', 'liberty', 'poster', 'theology', 'nonprofit', 'crawl', 'oxygen', 'handsome', 'magic', 'sum', 'provided', 'businessman', 'promising', 'conscious', 'determination', 'donor', 'hers', 'pastor', 'jazz', 'opera', 'Japanese', 'bite', 'frame', 'evil', 'acquisition', 'pit', 'hug', 'wildlife', 'punish', 'giant', 'primary', 'equity', 'wrong', 'doorway', 'departure', 'elevator', 'teenage', 'guidance', 'happiness', 'statue', 'pursuit', 'repair', 'decent', 'gym', 'oral', 'clerk', 'Israeli', 'envelope', 'reporting', 'destination', 'fist', 'endorse', 'exploration', 'generous', 'bath', 'rescue', 'thereby', 'overall', 'indicator', 'sunlight', 'feedback', 'spectrum', 'purple', 'laser', 'bold', 'reluctant', 'starting', 'expertise', 'practically', 'program', 'picture', 'tune', 'eating', 'age', 'volunteer', 'hint', 'sharply', 'parade', 'advocate', 'realm', 'ban', 'strip', 'cancel', 'blend', 'therapist', 'slice', 'peel', 'pizza', 'recipient', 'hesitate', 'flip', 'accounting', 'debate', 'bias', 'huh', 'metaphor', 'candle', 'handle', 'worry', 'judicial', 'entity', 'suffering', 'full', 'feel', 'lamp', 'garbage', 'servant', 'addition', 'regulatory', 'diplomatic', 'elegant', 'inside', 'reception', 'vanish', 'automatically', 'chin', 'trail', 'necessity', 'confess', 'racism', 'starter', 'interior', 'banking', 'casual', 'gravity', 'enroll', 'diminish', 'prevention', 'Arab', 'value', 'minimize', 'chop', 'performer', 'intent', 'isolate', 'pump', 'inventory', 'productive', 'assembly', 'civic', 'silk', 'magnitude', 'steep', 'hostage', 'collector', 'popularity', 'kiss', 'alien', 'dynamic', 'scary', 'equation', 'angel', 'switch', 'offering', 'rage', 'photography', 'repair', 'toilet', 'disappointed', 'precious', 'prohibit', 'representative', 'content', 'realistic', 'Russian', 'hidden', 'command', 'tender', 'wake', 'gathering', 'outstanding', 'stumble', 'lonely', 'automobile', 'artificial', 'dawn', 'abstract', 'descend', 'silly', 'hook', 'tide', 'shared', 'hopefully', 'readily', 'cooperate', 'revolutionary', 'romance', 'hardware', 'pillow', 'kit', 'cook', 'spread', 'continent', 'seal', 'circuit', 'sink', 'ruling', 'shortage', 'annually', 'lately', 'trap', 'scan', 'fool', 'deadline', 'rear', 'processing', 'ranch', 'coastal', 'undertake', 'softly', 'reserve', 'burning', 'verbal', 'tribal', 'ridiculous', 'automatic', 'diamond', 'credibility', 'import', 'spring', 'way', 'divine', 'sentiment', 'cart', 'oversee', 'stem', 'elder', 'pro', 'inspiration', 'Dutch', 'quantity', 'trailer', 'mate', 'o', 'Greek', 'genius', 'monument', 'bid', 'quest', 'sacrifice', 'invitation', 'accuracy', 'juror', 'officially', 'broker', 'treasure', 'loyalty', 'credit', 'shock', 'talented', 'gasoline', 'stiff', 'output', 'nominee', 'extended', 'please', 'diabetes', 'slap', 'toxic', 'alleged', 'jaw', 'grief', 'mysterious', 'rocket', 'donate', 'inmate', 'tackle', 'dynamics', 'bow', 'ours', 'senior', 'dignity', 'carpet', 'parental', 'bubble', 'heat', 'buddy', 'barn', 'sword', 'flash', 'seventh', 'glory', 'tightly', 'protective', 'tuck', 'drum', 'faint', 'post', 'queen', 'dilemma', 'input', 'specialize', 'northeast', 'shallow', 'liability', 'sail', 'merchant', 'stadium', 'improved', 'bloody', 'defeat', 'associated', 'withdrawal', 'refrigerator', 'nest', 'near', 'thoroughly', 'lane', 'ancestor', 'condemn', 'steam', 'accent', 'escape', 'optimistic', 'unite', 'cage', 'equip', 'shrimp', 'homeland', 'exchange', 'rack', 'costume', 'wolf', 'courtroom', 'statute', 'cartoon', 'besides', 'productivity', 'grin', 'symbolic', 'seal', 'bug', 'bless', 'aunt', 'agriculture', 'rock', 'hostile', 'root', 'conceive', 'combined', 'instantly', 'bankruptcy', 'vaccine', 'bonus', 'collaboration', 'mixed', 'opposed', 'orbit', 'grasp', 'patience', 'spite', 'tropical', 'voting', 'patrol', 'willingness', 'position', 'revelation', 'rent', 'calm', 'jewelry', 'Cuban', 'haul', 'concede', 'trace', 'wagon', 'afterward', 'spectacular', 'ruin', 'sheer', 'prior', 'immune', 'reliability', 'ass', 'alongside', 'bush', 'exotic', 'fascinating', 'secure', 'clip', 'thigh', 'bull', 'drawer', 'regard', 'sheep', 'discourage', 'coordinator', 'ideological', 'runner', 'secular', 'intimate', 'empire', 'cab', 'divorce', 'exam', 'documentary', 'neutral', 'biology', 'flexible', 'progressive', 'web', 'conspiracy', 'catch', 'casualty', 'republic', 'execution', 'terrific', 'whale', 'functional', 'star', 'draft', 'instinct', 'teammate', 'aluminum', 'whoever', 'ministry', 'verdict', 'instruct', 'skull', 'self', 'ease', 'cooperative', 'manipulate', 'bee', 'practitioner', 'loop', 'edit', 'whip', 'puzzle', 'mushroom', 'subsidy', 'boil', 'tragic', 'mathematics', 'mechanic', 'jar', 'respect', 'earthquake', 'pork', 'creativity', 'safely', 'underlying', 'dessert', 'sympathy', 'fisherman', 'incredibly', 'isolation', 'sock', 'near', 'jump', 'eleven', 'entrepreneur', 'syndrome', 'bureau', 'seat', 'workplace', 'ambition', 'touchdown', 'utilize', 'breeze', 'costly', 'ambitious', 'Christianity', 'presumably', 'influential', 'translation', 'uncertain', 'dissolve', 'object', 'statistical', 'gut', 'metropolitan', 'rolling', 'aesthetic', 'spell', 'insert', 'booth', 'helmet', 'waist', 'expected', 'lion', 'accomplishment', 'royal', 'panic', 'cast', 'crush', 'actively', 'cliff', 'minimal', 'cord', 'fortunately', 'cocaine', 'illusion', 'anonymous', 'tolerate', 'appreciation', 'commissioner', 'harm', 'flexibility', 'instructional', 'scramble', 'casino', 'tumor', 'decorate', 'sort', 'charge', 'pulse', 'equivalent', 'fixed', 'experienced', 'donation', 'diary', 'sibling', 'irony', 'spoon', 'midst', 'alley', 'upset', 'interact', 'soap', 'cute', 'rival', 'short', 'punch', 'pin', 'hockey', 'passing', 'persist', 'supplier', 'known', 'momentum', 'purse', 'shed', 'liquid', 'icon', 'elephant', 'consequently', 'legislature', 'associate', 'franchise', 'correctly', 'mentally', 'foster', 'bicycle', 'encouraging', 'cheat', 'access', 'heal', 'fever', 'filter', 'rabbit', 'coin', 'exploit', 'accessible', 'organism', 'sensation', 'partially', 'stay', 'upstairs', 'dried', 'minimum', 'pro', 'conservation', 'shove', 'backyard', 'charter', 'stove', 'consent', 'comprise', 'reminder', 'alike', 'placement', 'dough', 'grandchild', 'dam', 'reportedly', 'well', 'surrounding', 'ecological', 'outfit', 'unprecedented', 'columnist', 'workout', 'preliminary', 'patent', 'shy', 'quote', 'trash', 'disabled', 'gross', 'hormone', 'texture', 'counter', 'pencil', 'associate', 'frontier', 'spray', 'bet', 'disclose', 'custody', 'banker', 'beast', 'interfere', 'oak', 'case', 'eighth', 'notebook', 'outline', 'gaze', 'attendance', 'speculation', 'uncover', 'behalf', 'innovative', 'shark', 'reward', 'mill', 'installation', 'stimulate', 'tag', 'vertical', 'swimming', 'fleet', 'catalog', 'outsider', 'sacrifice', 'desperately', 'stance', 'compel', 'sensitivity', 'someday', 'instant', 'debut', 'proclaim', 'worldwide', 'hike', 'required', 'confrontation', 'colorful', 'ideal', 'constitution', 'trainer', 'Thanksgiving', 'scent', 'stack', 'eyebrow', 'sack', 'cease', 'inherit', 'tray', 'pioneer', 'organizational', 'textbook', 'uh', 'nasty', 'shrink', 'model', 'emerging', 'dot', 'wheat', 'fierce', 'envision', 'rational', 'kingdom', 'aisle', 'weaken', 'protocol', 'exclusively', 'vocal', 'marketplace', 'openly', 'unfair', 'terrain', 'deploy', 'risky', 'pasta', 'genre', 'distract', 'merit', 'planner', 'depressed', 'chunk', 'closest', 'discount', 'no', 'ladder', 'jungle', 'migration', 'breathing', 'invade', 'hurricane', 'retailer', 'classify', 'wound', 'coup', 'aid', 'ambassador', 'density', 'supportive', 'curiosity', 'skip', 'aggression', 'stimulus', 'journalism', 'robot', 'flood', 'dip', 'likewise', 'informal', 'Persian', 'feather', 'sphere', 'tighten', 'boast', 'pat', 'perceived', 'sole', 'publicity', 'major', 'unfold', 'joke', 'well', 'validity', 'ecosystem', 'strictly', 'partial', 'collar', 'weed', 'compliance', 'streak', 'supposedly', 'added', 'builder', 'glimpse', 'premise', 'specialty', 'deem', 'artifact', 'sneak', 'monkey', 'mentor', 'two', 'listener', 'lightning', 'legally', 'sleeve', 'disappointment', 'disturb', 'rib', 'excessive', 'high', 'debris', 'pile', 'rod', 'logical', 'liberal', 'ash', 'socially', 'parish', 'slavery', 'blank', 'commodity', 'cure', 'mineral', 'hunger', 'dying', 'developmental', 'faster', 'spare', 'halfway', 'cure', 'equality', 'cemetery', 'harassment', 'deliberately', 'fame', 'regret', 'striking', 'likelihood', 'carrot', 'atop', 'toll', 'rim', 'embarrassed', 'cling', 'isolated', 'blink', 'suspicious', 'hay', 'squad', 'eligible', 'processor', 'plunge', 'this', 'sponsor', 'grin', 'color', 'demographic', 'rain', 'chill', 'refuge', 'steer', 'legislator', 'rally', 'programming', 'cheer', 'outlet', 'intact', 'vendor', 'thrive', 'peanut', 'chew', 'elaborate', 'intellectual', 'conception', 'auction', 'steak', 'comply', 'triumph', 'shareholder', 'comparable', 'transport', 'conscience', 'calculation', 'considerably', 'interval', 'scratch', 'awake', 'jurisdiction', 'inevitably', 'feminist', 'constraint', 'emotionally', 'expedition', 'allegedly', 'compromise', 'strain', 'similarity', 'lid', 'dumb', 'bulk', 'sprinkle', 'mortality', 'philosophical', 'conversion', 'patron', 'municipal', 'any', 'liver', 'harmony', 'solely', 'tolerance', 'instant', 'goat', 'arm', 'blessing', 'banana', 'running', 'palace', 'formerly', 'peasant', 'neat', 'grandparent', 'lawmaker', 'supermarket', 'cruise', 'mobile', 'plain', 'part', 'calendar', 'widow', 'deposit', 'beard', 'brake', 'downtown', 'screening', 'impulse', 'forbid', 'fur', 'brutal', 'predator', 'poke', 'opt', 'voluntary', 'trouble', 'valid', 'forum', 'dancing', 'happily', 'soar', 'removal', 'autonomy', 'enact', 'round', 'thread', 'light', 'landmark', 'unhappy', 'offender', 'coming', 'privately', 'fraction', 'distinctive', 'tourism', 'threshold', 'calm', 'routinely', 'suite', 'remark', 'regulator', 'straw', 'theological', 'apart', 'exhaust', 'globe', 'fragile', 'objection', 'chemistry', 'old', 'crowded', 'circle', 'blast', 'prevail', 'overnight', 'denial', 'rental', 'fantastic', 'fragment', 'level', 'screw', 'warmth', 'undergraduate', 'liquid', 'headache', 'policeman', 'yield', 'projection', 'battle', 'suitable', 'mention', 'graduation', 'drill', 'cruel', 'mansion', 'regard', 'grape', 'authorize', 'cottage', 'driveway', 'charm', 'loyal', 'clay', 'pound', 'balloon', 'invention', 'ego', 'fare', 'homework', 'disc', 'sofa', 'guarantee', 'availability', 'radar', 'frown', 'regain', 'leave', 'permit', 'sweater', 'rehabilitation', 'rubber', 'retreat', 'molecule', 'freely', 'favorable', 'steadily', 'veteran', 'integrated', 'ha', 'youngster', 'broadcast', 'premium', 'accountability', 'overwhelm', 'one', 'contemplate', 'update', 'spark', 'ironically', 'fatigue', 'beyond', 'speculate', 'marker', 'low', 'preach', 'bucket', 'bomb', 'blond', 'confession', 'provoke', 'marble', 'substantially', 'twist', 'defender', 'fish', 'explicit', 'transport', 'disturbing', 'surveillance', 'magnetic', 'technician', 'mutter', 'devastating', 'depart', 'arrow', 'trauma', 'neighboring', 'soak', 'ribbon', 'meantime', 'transmit', 'screen', 'harvest', 'consecutive', 'republican', 'coordinate', 'worldwide', 'within', 'spy', 'slot', 'riot', 'nutrient', 'citizenship', 'severely', 'sovereignty', 'ridge', 'brave', 'lighting', 'specify', 'contributor', 'frustrate', 'crowd', 'articulate', 'importantly', 'transit', 'dense', 'seminar', 'electronics', 'sunny', 'shorts', 'swell', 'accusation', 'soften', 'photograph', 'straighten', 'terribly', 'cue', 'sudden', 'bride', 'biography', 'hazard', 'compelling', 'seldom', 'tile', 'economically', 'honestly', 'troubled', 'bow', 'twentieth', 'balanced', 'foreigner', 'launch', 'convenience', 'delight', 'weave', 'timber', 'till', 'accurately', 'plea', 'bulb', 'copy', 'flying', 'sustainable', 'devil', 'bolt', 'cargo', 'spine', 'seller', 'skilled', 'managing', 'public', 'marine', 'dock', 'organized', 'fog', 'diplomat', 'boring', 'sometime', 'summary', 'missionary', 'epidemic', 'fatal', 'trim', 'warehouse', 'accelerate', 'butterfly', 'bronze', 'drown', 'inherent', 'praise', 'nationwide', 'spit', 'harvest', 'kneel', 'vacuum', 'selected', 'dictate', 'stereotype', 'sensor', 'laundry', 'manual', 'pistol', 'naval', 'plaintiff', 'kid', 'middle', 'apology', 'till'];

module.exports = common_5000Words;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.keyboard_3LetterWords = ['aas', 'aba', 'abs', 'ace', 'act', 'add', 'ads', 'adz', 'aff', 'aft', 'aga', 'age', 'arb', 'arc', 'are', 'arf', 'ars', 'art', 'ass', 'ate', 'att', 'ava', 'ave', 'awa', 'awe', 'axe', 'baa', 'bad', 'bag', 'bar', 'bas', 'bat', 'bed', 'bee', 'beg', 'bet', 'bra', 'brr', 'cab', 'cad', 'car', 'cat', 'caw', 'cee', 'dab', 'dad', 'dag', 'daw', 'deb', 'dee', 'dev', 'dew', 'dex', 'ear', 'eat', 'ebb', 'eff', 'efs', 'eft', 'egg', 'era', 'ere', 'erg', 'err', 'ers', 'ess', 'eta', 'eve', 'ewe', 'fad', 'fag', 'far', 'fas', 'fat', 'fax', 'fed', 'fee', 'fer', 'fet', 'few', 'fez', 'gab', 'gad', 'gae', 'gag', 'gar', 'gas', 'gat', 'ged', 'gee', 'get', 'qat', 'rad', 'rag', 'ras', 'rat', 'raw', 'rax', 'reb', 'rec', 'red', 'ree', 'ref', 'reg', 'res', 'ret', 'rev', 'rex', 'rts', 'sab', 'sac', 'sad', 'sae', 'sag', 'sat', 'saw', 'sax', 'sea', 'sec', 'see', 'seg', 'ser', 'set', 'sew', 'tab', 'tad', 'tae', 'tag', 'tar', 'tas', 'tat', 'tav', 'taw', 'tax', 'tea', 'ted', 'tee', 'teg', 'tet', 'tew', 'twa', 'vac', 'var', 'vas', 'vat', 'vav', 'vaw', 'vee', 'veg', 'vet', 'vex', 'wab', 'wad', 'wae', 'wag', 'war', 'was', 'wat', 'waw', 'wax', 'web', 'wed', 'wee', 'wet', 'zag', 'zax', 'zed', 'zee'];

exports.keyboard_4LetterWords = ['abas', 'abba', 'abbe', 'abed', 'abet', 'aced', 'aces', 'acre', 'acta', 'acts', 'adds', 'adze', 'afar', 'agar', 'agas', 'aged', 'agee', 'ager', 'ages', 'arbs', 'arcs', 'area', 'ares', 'arfs', 'arse', 'arts', 'asea', 'ates', 'aver', 'aves', 'awed', 'awee', 'awes', 'axed', 'axes', 'baas', 'baba', 'babe', 'bade', 'bads', 'baff', 'bags', 'barb', 'bard', 'bare', 'barf', 'bars', 'base', 'bass', 'bast', 'bate', 'bats', 'batt', 'bawd', 'bead', 'bear', 'beat', 'beds', 'beef', 'beer', 'bees', 'beet', 'begs', 'berg', 'best', 'beta', 'bets', 'brad', 'brae', 'brag', 'bras', 'brat', 'braw', 'bred', 'bree', 'brew', 'brrr', 'cabs', 'caca', 'cade', 'cads', 'cafe', 'caff', 'cage', 'carb', 'card', 'care', 'carr', 'cars', 'cart', 'casa', 'case', 'cast', 'cate', 'cats', 'cave', 'caws', 'ceca', 'cede', 'cees', 'cere', 'cess', 'cete', 'crab', 'crag', 'craw', 'crew', 'czar', 'dabs', 'dace', 'dada', 'dads', 'daff', 'daft', 'dags', 'darb', 'dare', 'dart', 'data', 'date', 'daws', 'dawt', 'daze', 'dead', 'deaf', 'dear', 'debs', 'debt', 'deed', 'deer', 'dees', 'deet', 'deft', 'dere', 'deva', 'devs', 'dews', 'drab', 'drag', 'drat', 'draw', 'dree', 'dreg', 'drew', 'ears', 'ease', 'east', 'eats', 'eave', 'ebbs', 'edge', 'effs', 'efts', 'egad', 'eger', 'eggs', 'eras', 'ergs', 'errs', 'erst', 'eses', 'etas', 'ever', 'eves', 'ewer', 'ewes', 'exec', 'exes', 'face', 'fact', 'fade', 'fads', 'fags', 'fard', 'fare', 'fart', 'fast', 'fate', 'fats', 'fava', 'fave', 'faze', 'fear', 'feat', 'feds', 'feed', 'fees', 'feet', 'fere', 'fess', 'feta', 'fete', 'fets', 'frae', 'frag', 'frat', 'free', 'fret', 'gabs', 'gads', 'gaed', 'gaes', 'gaff', 'gaga', 'gage', 'gags', 'garb', 'gars', 'gast', 'gate', 'gats', 'gave', 'gaze', 'gear', 'geds', 'geed', 'gees', 'geez', 'gest', 'geta', 'gets', 'grab', 'grad', 'grat', 'gree', 'grew', 'qats', 'race', 'rads', 'raff', 'raft', 'raga', 'rage', 'rags', 'rare', 'rase', 'rate', 'rats', 'rave', 'raws', 'raze', 'razz', 'read', 'rear', 'rebs', 'recs', 'redd', 'rede', 'reds', 'reed', 'reef', 'rees', 'refs', 'reft', 'regs', 'rest', 'rete', 'rets', 'revs', 'sabe', 'sabs', 'sacs', 'sade', 'safe', 'saga', 'sage', 'sags', 'sard', 'sass', 'sate', 'save', 'saws', 'scab', 'scad', 'scag', 'scar', 'scat', 'sear', 'seas', 'seat', 'secs', 'sect', 'seed', 'seer', 'sees', 'segs', 'sera', 'sere', 'serf', 'sers', 'seta', 'sets', 'sett', 'sews', 'stab', 'stag', 'star', 'stat', 'staw', 'stet', 'stew', 'swab', 'swag', 'swat', 'tabs', 'tace', 'tact', 'tads', 'tags', 'tare', 'tars', 'tart', 'tass', 'tate', 'tats', 'tavs', 'taws', 'taxa', 'tear', 'teas', 'teat', 'teds', 'teed', 'tees', 'teff', 'tegs', 'test', 'tets', 'tews', 'text', 'trad', 'tree', 'tref', 'tret', 'tsar', 'twae', 'twas', 'twat', 'twee', 'tzar', 'vacs', 'vara', 'vars', 'vasa', 'vase', 'vast', 'vats', 'vavs', 'vaws', 'veer', 'vees', 'vera', 'verb', 'vert', 'vest', 'vets', 'vext', 'wabs', 'wade', 'wads', 'waes', 'waff', 'waft', 'wage', 'wags', 'ward', 'ware', 'wars', 'wart', 'wast', 'wats', 'watt', 'wave', 'waws', 'wear', 'webs', 'weds', 'weed', 'weer', 'wees', 'weet', 'weft', 'were', 'wert', 'west', 'wets', 'zags', 'zarf', 'zeds', 'zees', 'zest', 'zeta'];

exports.keyboard_5LetterWords = ['abaca', 'abaft', 'abase', 'abate', 'abbas', 'abbes', 'abets', 'acerb', 'aceta', 'acred', 'acres', 'acted', 'adage', 'addax', 'added', 'adder', 'adzes', 'aedes', 'afars', 'after', 'agars', 'agate', 'agave', 'agaze', 'agers', 'agger', 'agree', 'arced', 'ardeb', 'areae', 'areas', 'areca', 'arete', 'arras', 'arses', 'asses', 'asset', 'aster', 'attar', 'avast', 'avers', 'avert', 'avgas', 'award', 'aware', 'baaed', 'babas', 'babes', 'bacca', 'badge', 'baffs', 'barbe', 'barbs', 'barde', 'bards', 'bared', 'barer', 'bares', 'barfs', 'barge', 'barre', 'based', 'baser', 'bases', 'baste', 'basts', 'bated', 'bates', 'batts', 'bawds', 'bazar', 'beads', 'beard', 'bears', 'beast', 'beats', 'bedew', 'beefs', 'beers', 'beets', 'begat', 'beget', 'beret', 'bergs', 'beset', 'bests', 'betas', 'betta', 'brace', 'bract', 'brads', 'braes', 'brags', 'brass', 'brats', 'brava', 'brave', 'braws', 'braza', 'braze', 'bread', 'brede', 'breed', 'brees', 'breve', 'brews', 'caber', 'cacas', 'cades', 'cadet', 'cadge', 'cadre', 'caeca', 'cafes', 'caffs', 'caged', 'cager', 'cages', 'carat', 'carbs', 'cards', 'cared', 'carer', 'cares', 'caret', 'carex', 'carrs', 'carse', 'carte', 'carts', 'carve', 'casas', 'cased', 'cases', 'caste', 'casts', 'cater', 'cates', 'caved', 'caver', 'caves', 'cawed', 'cease', 'cedar', 'ceded', 'ceder', 'cedes', 'cered', 'ceres', 'cesta', 'cetes', 'crabs', 'craft', 'crags', 'crass', 'crate', 'crave', 'craws', 'craze', 'creed', 'cress', 'crest', 'crews', 'czars', 'daces', 'dadas', 'daffs', 'dagga', 'darbs', 'dared', 'darer', 'dares', 'darts', 'dated', 'dater', 'dates', 'dawed', 'dawts', 'dazed', 'dazes', 'deads', 'dears', 'deave', 'debar', 'debts', 'decaf', 'deeds', 'deers', 'deets', 'defat', 'defer', 'degas', 'derat', 'deter', 'devas', 'dewar', 'dewax', 'dewed', 'dexes', 'drabs', 'draff', 'draft', 'drags', 'drats', 'drave', 'draws', 'dread', 'drear', 'dreed', 'drees', 'dregs', 'dress', 'drest', 'dwarf', 'dweeb', 'eager', 'eagre', 'eared', 'eased', 'eases', 'easts', 'eater', 'eaved', 'eaves', 'ebbed', 'ebbet', 'edged', 'edger', 'edges', 'egads', 'egers', 'egest', 'eggar', 'egged', 'egger', 'egret', 'erase', 'erect', 'erred', 'erses', 'escar', 'esses', 'ester', 'etwee', 'evade', 'evert', 'ewers', 'exact', 'execs', 'exert', 'extra', 'faced', 'facer', 'faces', 'facet', 'facts', 'faded', 'fader', 'fades', 'fadge', 'farad', 'farce', 'fards', 'fared', 'farer', 'fares', 'farts', 'fasts', 'fated', 'fates', 'fatwa', 'favas', 'faves', 'faxed', 'faxes', 'fazed', 'fazes', 'fears', 'fease', 'feast', 'feats', 'feaze', 'feces', 'feeds', 'feeze', 'feres', 'fesse', 'fetas', 'feted', 'fetes', 'fever', 'fewer', 'fezes', 'frags', 'frass', 'frats', 'freed', 'freer', 'frees', 'frere', 'frets', 'gaffe', 'gaffs', 'gaged', 'gager', 'gages', 'garbs', 'gases', 'gasts', 'gated', 'gates', 'gazar', 'gazed', 'gazer', 'gazes', 'gears', 'geese', 'geest', 'geste', 'gests', 'getas', 'grabs', 'grace', 'grade', 'grads', 'graft', 'grass', 'grate', 'grave', 'graze', 'great', 'grebe', 'greed', 'grees', 'greet', 'rabat', 'raced', 'racer', 'races', 'radar', 'raffs', 'rafts', 'ragas', 'raged', 'ragee', 'rages', 'rared', 'rarer', 'rares', 'rased', 'raser', 'rases', 'rated', 'rater', 'rates', 'raved', 'raver', 'raves', 'rawer', 'raxed', 'raxes', 'razed', 'razee', 'razer', 'razes', 'react', 'readd', 'reads', 'rears', 'reata', 'reave', 'rebar', 'rebbe', 'rebec', 'recce', 'recta', 'redds', 'reded', 'redes', 'reeds', 'reefs', 'reest', 'reeve', 'refed', 'refer', 'reges', 'resaw', 'resee', 'reset', 'resew', 'rests', 'retag', 'retax', 'revet', 'rewax', 'rewed', 'rewet', 'rexes', 'sabed', 'saber', 'sabes', 'sabra', 'sabre', 'sacra', 'sades', 'safer', 'safes', 'sagas', 'sager', 'sages', 'sards', 'saree', 'sarge', 'sated', 'sates', 'saved', 'saver', 'saves', 'sawed', 'sawer', 'saxes', 'scabs', 'scads', 'scags', 'scare', 'scarf', 'scars', 'scart', 'scats', 'scatt', 'scrag', 'scree', 'screw', 'sears', 'seats', 'sects', 'seder', 'sedge', 'seeds', 'seers', 'serac', 'sered', 'serer', 'seres', 'serfs', 'serge', 'serve', 'setae', 'setts', 'sever', 'sewar', 'sewed', 'sewer', 'stabs', 'stade', 'staff', 'stage', 'stags', 'stare', 'stars', 'start', 'state', 'stats', 'stave', 'stead', 'steed', 'steer', 'stere', 'stets', 'stews', 'straw', 'strew', 'swabs', 'swage', 'swags', 'sward', 'sware', 'swarf', 'swart', 'swats', 'swear', 'sweat', 'swede', 'sweer', 'sweet', 'taber', 'tabes', 'taces', 'tacet', 'tacte', 'tacts', 'tared', 'tares', 'targe', 'tarre', 'tarts', 'tasse', 'taste', 'tatar', 'tater', 'tates', 'tawed', 'tawer', 'tawse', 'taxed', 'taxer', 'taxes', 'tazza', 'tazze', 'tears', 'tease', 'teats', 'tecta', 'teffs', 'terce', 'terga', 'terra', 'terse', 'testa', 'tests', 'tetra', 'tewed', 'texas', 'texts', 'trace', 'tract', 'trade', 'trass', 'trave', 'tread', 'treat', 'treed', 'trees', 'tress', 'trets', 'trews', 'tsade', 'tsars', 'twaes', 'twats', 'tweed', 'tweet', 'tzars', 'varas', 'varve', 'vases', 'vasts', 'veers', 'verbs', 'verge', 'verse', 'verst', 'verts', 'verve', 'vesta', 'vests', 'vexed', 'vexer', 'vexes', 'waded', 'wader', 'wades', 'wafer', 'waffs', 'wafts', 'waged', 'wager', 'wages', 'wards', 'wared', 'wares', 'warts', 'waste', 'wasts', 'water', 'watts', 'waved', 'waver', 'waves', 'waxed', 'waxer', 'waxes', 'wears', 'weave', 'weber', 'wedge', 'weeds', 'weest', 'weets', 'wefts', 'wests', 'wrest', 'xebec', 'zarfs', 'zaxes', 'zebec', 'zebra', 'zests', 'zetas'];

exports.keyboard_6LetterWords = ['abacas', 'abased', 'abaser', 'abases', 'abated', 'abater', 'abates', 'abbess', 'abrade', 'abwatt', 'accede', 'access', 'adages', 'adders', 'advect', 'adverb', 'advert', 'aerate', 'afeard', 'affect', 'afreet', 'afters', 'agates', 'agaves', 'aggers', 'agrafe', 'agreed', 'agrees', 'arcade', 'ardebs', 'arecas', 'aretes', 'arrear', 'arrest', 'assert', 'assess', 'assets', 'asters', 'attars', 'attest', 'avatar', 'averse', 'averts', 'awards', 'axseed', 'baases', 'baccae', 'badass', 'badder', 'badged', 'badger', 'badges', 'baffed', 'bagass', 'bagged', 'bagger', 'barbed', 'barber', 'barbes', 'barbet', 'barded', 'bardes', 'barege', 'barest', 'barfed', 'barged', 'bargee', 'barges', 'barred', 'barres', 'barret', 'barter', 'basest', 'basses', 'basset', 'basted', 'baster', 'bastes', 'batted', 'batter', 'bawbee', 'bazaar', 'bazars', 'beaded', 'beards', 'bearer', 'beasts', 'beater', 'beaver', 'bedded', 'bedder', 'bedews', 'beebee', 'beefed', 'beeves', 'beezer', 'befret', 'begaze', 'begets', 'beggar', 'begged', 'berate', 'bereft', 'berets', 'besets', 'bested', 'bettas', 'betted', 'better', 'beware', 'bezazz', 'braced', 'bracer', 'braces', 'bracts', 'bravas', 'braved', 'braver', 'braves', 'brawer', 'brazas', 'brazed', 'brazer', 'brazes', 'breads', 'breast', 'bredes', 'breeds', 'breeze', 'breves', 'brevet', 'brewed', 'brewer', 'cabbed', 'cabers', 'cadets', 'cadged', 'cadger', 'cadges', 'cadres', 'caesar', 'cagers', 'carafe', 'carate', 'carats', 'carded', 'carder', 'career', 'carers', 'caress', 'carets', 'carses', 'carted', 'carter', 'cartes', 'carved', 'carver', 'carves', 'casaba', 'casava', 'caster', 'castes', 'caters', 'catted', 'caveat', 'cavers', 'ceased', 'ceases', 'cedars', 'ceders', 'cerate', 'certes', 'cessed', 'cesses', 'cestas', 'crafts', 'crases', 'crated', 'crater', 'crates', 'cravat', 'craved', 'craver', 'craves', 'crazed', 'crazes', 'crease', 'create', 'creeds', 'creese', 'crests', 'crewed', 'dabbed', 'dabber', 'daffed', 'dafter', 'daggas', 'dagger', 'darers', 'darted', 'darter', 'daters', 'dawted', 'deader', 'deafer', 'dearer', 'deaved', 'deaves', 'debars', 'debase', 'debate', 'decade', 'decafs', 'decare', 'decree', 'deeded', 'deface', 'defats', 'defeat', 'defect', 'defers', 'defter', 'degage', 'degree', 'derate', 'derats', 'desert', 'detect', 'deters', 'detest', 'devest', 'dewars', 'dexter', 'draffs', 'drafts', 'dragee', 'drawee', 'drawer', 'dreads', 'drears', 'dredge', 'dwarfs', 'dweebs', 'eagers', 'eagres', 'earwax', 'easter', 'eaters', 'ebbets', 'ecarte', 'edgers', 'efface', 'effect', 'effete', 'egesta', 'egests', 'eggars', 'eggers', 'egress', 'egrets', 'erased', 'eraser', 'erases', 'erects', 'ergate', 'errata', 'ersatz', 'escars', 'estate', 'esters', 'etwees', 'evaded', 'evader', 'evades', 'everts', 'exacta', 'exacts', 'exceed', 'excess', 'exedra', 'exerts', 'exsect', 'exsert', 'extras', 'facade', 'facers', 'facete', 'facets', 'faders', 'fadged', 'fadges', 'faeces', 'fagged', 'farads', 'farced', 'farcer', 'farces', 'farded', 'farers', 'farted', 'fasces', 'fasted', 'faster', 'fatted', 'fatter', 'fatwas', 'feared', 'fearer', 'feased', 'feases', 'feasts', 'feater', 'feazed', 'feazes', 'feeder', 'feezed', 'feezes', 'ferret', 'fessed', 'fesses', 'fester', 'fetted', 'fetter', 'fevers', 'fewest', 'fezzed', 'fezzes', 'fracas', 'frater', 'freers', 'freest', 'freeze', 'freres', 'gabbed', 'gabber', 'gadded', 'gadder', 'gadget', 'gaffed', 'gaffer', 'gaffes', 'gagers', 'gagged', 'gagger', 'garage', 'garbed', 'garget', 'garred', 'garret', 'garter', 'gasbag', 'gassed', 'gasser', 'gasses', 'gasted', 'gaster', 'gavage', 'gazars', 'gazers', 'geared', 'geegaw', 'geests', 'geezer', 'gestes', 'getter', 'gewgaw', 'graced', 'graces', 'graded', 'grader', 'grades', 'grafts', 'grated', 'grater', 'grates', 'graved', 'graver', 'graves', 'grazed', 'grazer', 'grazes', 'grease', 'greats', 'greave', 'grebes', 'greeds', 'greets', 'rabats', 'rabbet', 'racers', 'radars', 'radded', 'rafted', 'rafter', 'ragbag', 'ragees', 'ragged', 'raggee', 'ragtag', 'rarest', 'rasers', 'raster', 'ratbag', 'raters', 'ratted', 'ratter', 'ravage', 'ravers', 'rawest', 'razeed', 'razees', 'razers', 'razzed', 'razzes', 'reacts', 'readds', 'reader', 'reared', 'rearer', 'reatas', 'reaved', 'reaver', 'reaves', 'rebars', 'rebate', 'rebbes', 'rebecs', 'rebred', 'recast', 'recces', 'recede', 'recess', 'redact', 'redate', 'redded', 'redder', 'redear', 'redraw', 'redrew', 'reeded', 'reefed', 'reefer', 'reests', 'reeved', 'reeves', 'reface', 'refect', 'refeed', 'refers', 'reffed', 'regard', 'regave', 'regear', 'reggae', 'regret', 'regrew', 'reread', 'resaws', 'reseat', 'resect', 'reseda', 'reseed', 'resees', 'resets', 'resews', 'rested', 'rester', 'retags', 'retard', 'retear', 'retest', 'retted', 'reverb', 'revere', 'revers', 'revert', 'revest', 'revets', 'revved', 'reward', 'reweds', 'rewets', 'sabbat', 'sabbed', 'sabers', 'sabras', 'sabred', 'sabres', 'sacred', 'sadder', 'safest', 'sagest', 'saggar', 'sagged', 'sagger', 'sardar', 'sarees', 'sarges', 'sarsar', 'sassed', 'sasses', 'satara', 'savage', 'savate', 'savers', 'sawers', 'scarab', 'scarce', 'scared', 'scarer', 'scares', 'scarfs', 'scarts', 'scatts', 'scrags', 'screed', 'screes', 'screws', 'seabag', 'seabed', 'seared', 'searer', 'seated', 'seater', 'secede', 'secret', 'sedate', 'seders', 'sedges', 'seeded', 'seeder', 'seesaw', 'seggar', 'seracs', 'serdab', 'serest', 'serges', 'served', 'server', 'serves', 'sestet', 'settee', 'setter', 'severe', 'severs', 'sewage', 'sewars', 'sewers', 'sextet', 'stades', 'staffs', 'staged', 'stager', 'stages', 'stared', 'starer', 'stares', 'starts', 'starve', 'stases', 'stated', 'stater', 'states', 'staved', 'staves', 'steads', 'steeds', 'steers', 'steeve', 'steres', 'stewed', 'strafe', 'strass', 'strata', 'straws', 'street', 'stress', 'strews', 'swaged', 'swager', 'swages', 'swards', 'swarfs', 'swears', 'sweats', 'swedes', 'sweets', 'swerve', 'tabard', 'tabbed', 'tabers', 'tagged', 'tagger', 'tagrag', 'targes', 'target', 'tarred', 'tarres', 'tartar', 'tarted', 'tarter', 'tasses', 'tasset', 'tasted', 'taster', 'tastes', 'tatars', 'taters', 'tatted', 'tatter', 'tawers', 'tawsed', 'tawses', 'taxers', 'tazzas', 'teared', 'tearer', 'teased', 'teaser', 'teases', 'teated', 'tedded', 'tedder', 'teeter', 'terces', 'tercet', 'terete', 'terrae', 'terras', 'terret', 'terser', 'testae', 'tested', 'testee', 'tester', 'testes', 'tetrad', 'tetras', 'tetter', 'traced', 'tracer', 'traces', 'tracts', 'traded', 'trader', 'trades', 'traves', 'treads', 'treats', 'trevet', 'tsades', 'tsetse', 'tweeds', 'tweets', 'tweeze', 'tzetze', 'vacate', 'varved', 'varves', 'vaster', 'vatted', 'vaward', 'veered', 'vegete', 'verged', 'verger', 'verges', 'versed', 'verser', 'verses', 'verset', 'verste', 'versts', 'vertex', 'verves', 'vervet', 'vestas', 'vested', 'vestee', 'vetted', 'vexers', 'wadded', 'wadder', 'waders', 'wadset', 'wafers', 'waffed', 'wafted', 'wafter', 'wagers', 'wagged', 'wagger', 'warded', 'warder', 'warred', 'warsaw', 'warted', 'wasted', 'waster', 'wastes', 'waters', 'watter', 'wavers', 'waxers', 'wearer', 'weaved', 'weaver', 'weaves', 'webbed', 'webers', 'webfed', 'wedded', 'wedder', 'wedged', 'wedges', 'weeded', 'weeder', 'weeted', 'weever', 'weewee', 'wester', 'wetted', 'wetter', 'wrasse', 'wrests', 'xebecs', 'zaffar', 'zaffer', 'zaffre', 'zagged', 'zareba', 'zebecs', 'zebras', 'zested', 'zester'];

exports.keyboard_7LetterWords = ['abasers', 'abaters', 'abetted', 'abetter', 'abfarad', 'abraded', 'abrader', 'abrades', 'abreact', 'abreast', 'abscess', 'abwatts', 'acceded', 'acceder', 'accedes', 'accrete', 'acerate', 'acerber', 'acetate', 'acreage', 'actress', 'addaxes', 'address', 'addrest', 'advects', 'adverbs', 'adverse', 'adverts', 'aerated', 'aerates', 'afeared', 'affects', 'afreets', 'aggrade', 'aggress', 'agrafes', 'agraffe', 'arcaded', 'arcades', 'arrased', 'arrears', 'arrests', 'asceses', 'asserts', 'asswage', 'attests', 'attract', 'avatars', 'average', 'averred', 'averted', 'avgases', 'awarded', 'awardee', 'awarder', 'axseeds', 'baccara', 'baccate', 'baddest', 'badgers', 'bagasse', 'baggage', 'baggers', 'barbate', 'barbers', 'barbets', 'bareges', 'bargees', 'barrage', 'barrets', 'barters', 'barware', 'bassets', 'bassett', 'bastard', 'basters', 'batters', 'bawbees', 'bazaars', 'bearcat', 'bearded', 'bearers', 'beaters', 'beavers', 'bedders', 'bedewed', 'bedfast', 'bedward', 'bedwarf', 'beebees', 'beeswax', 'beezers', 'befrets', 'begazed', 'begazes', 'beggars', 'berated', 'berates', 'bereave', 'beretta', 'bergere', 'bestead', 'bestrew', 'betaxed', 'betters', 'bewared', 'bewares', 'bracers', 'bracted', 'bradded', 'bragged', 'bragger', 'brassed', 'brasses', 'bravers', 'bravest', 'brawest', 'brazers', 'breaded', 'breasts', 'breeder', 'breezed', 'breezes', 'brevets', 'brewage', 'brewers', 'cabaret', 'cabbage', 'cadaver', 'cadgers', 'caesars', 'carafes', 'carates', 'carcase', 'carcass', 'carders', 'careers', 'carfare', 'cartage', 'carters', 'carvers', 'casabas', 'casavas', 'cascade', 'cascara', 'casease', 'caseate', 'casette', 'cassaba', 'cassata', 'cassava', 'casters', 'catawba', 'catered', 'caterer', 'catface', 'caveats', 'cerated', 'cerates', 'cerebra', 'crabbed', 'crabber', 'crafted', 'cragged', 'crasser', 'craters', 'cravats', 'cravers', 'crawdad', 'creased', 'creaser', 'creases', 'created', 'creates', 'creeses', 'cresses', 'cresset', 'crested', 'czardas', 'dabbers', 'dabster', 'daftest', 'daggers', 'darters', 'dastard', 'deadest', 'deafest', 'dearest', 'debased', 'debaser', 'debases', 'debated', 'debater', 'debates', 'decades', 'decares', 'decease', 'decreed', 'decreer', 'decrees', 'defaced', 'defacer', 'defaces', 'defeats', 'defects', 'deftest', 'degases', 'degrade', 'degreed', 'degrees', 'derated', 'derates', 'deserts', 'deserve', 'dessert', 'detects', 'deterge', 'detests', 'detract', 'devests', 'dewater', 'dewaxed', 'dewaxes', 'drabbed', 'drabber', 'drabbet', 'drafted', 'draftee', 'drafter', 'dragees', 'dragged', 'dragger', 'dratted', 'drawbar', 'drawees', 'drawers', 'dreaded', 'dredged', 'dredger', 'dredges', 'dressed', 'dresser', 'dresses', 'dwarfed', 'dwarfer', 'dwarves', 'eagerer', 'easters', 'ecartes', 'ectases', 'effaced', 'effacer', 'effaces', 'effects', 'egested', 'erasers', 'erected', 'erecter', 'ergates', 'erratas', 'estated', 'estates', 'estreat', 'etagere', 'evaders', 'everted', 'exactas', 'exacted', 'exacter', 'exceeds', 'excreta', 'excrete', 'exedrae', 'exegete', 'exerted', 'exsects', 'exserts', 'extract', 'facades', 'faceted', 'farcers', 'fastest', 'fattest', 'fearers', 'feasted', 'feaster', 'featest', 'feedbag', 'feeders', 'ferrate', 'ferrets', 'festers', 'fetters', 'fevered', 'fracted', 'fragged', 'frasses', 'fraters', 'freebee', 'freezer', 'freezes', 'fretsaw', 'fretted', 'fretter', 'gabbard', 'gabbart', 'gabbers', 'gabfest', 'gadders', 'gadgets', 'gaffers', 'gaggers', 'gagster', 'garaged', 'garages', 'garbage', 'gargets', 'garrets', 'garters', 'gasbags', 'gassers', 'gasters', 'gastrea', 'gavages', 'gazette', 'geegaws', 'geezers', 'gerbera', 'gestate', 'getters', 'gewgaws', 'grabbed', 'grabber', 'gradate', 'graders', 'grafted', 'grafter', 'grassed', 'grasses', 'graters', 'gravers', 'gravest', 'grazers', 'greased', 'greaser', 'greases', 'greater', 'greaved', 'greaves', 'greeted', 'greeter', 'rabbets', 'rafters', 'ragbags', 'raggees', 'ragtags', 'ragweed', 'rasters', 'ratafee', 'ratatat', 'ratbags', 'ratters', 'ravaged', 'ravager', 'ravages', 'reacted', 'readded', 'readers', 'rearers', 'reavers', 'rebated', 'rebater', 'rebates', 'rebreed', 'recasts', 'receded', 'recedes', 'recrate', 'redacts', 'redated', 'redates', 'redders', 'reddest', 'redears', 'redraft', 'redraws', 'redress', 'redware', 'reefers', 'reerect', 'reested', 'refaced', 'refaces', 'refects', 'refeeds', 'referee', 'refract', 'regards', 'regatta', 'regears', 'reggaes', 'regrade', 'regraft', 'regrate', 'regreet', 'regress', 'regrets', 'rereads', 'resawed', 'reseats', 'resects', 'resedas', 'reseeds', 'reserve', 'resewed', 'restaff', 'restage', 'restart', 'restate', 'resters', 'retards', 'retaste', 'retaxed', 'retaxes', 'retears', 'retests', 'retrace', 'retract', 'retread', 'retreat', 'reverbs', 'revered', 'reverer', 'reveres', 'reverse', 'reverts', 'revests', 'rewards', 'rewaxed', 'rewaxes', 'reweave', 'sabbats', 'sabered', 'saccade', 'saccate', 'saddest', 'saggard', 'saggars', 'saggers', 'sardars', 'sarsars', 'sataras', 'savaged', 'savager', 'savages', 'savates', 'scabbed', 'scarabs', 'scarcer', 'scarers', 'scarfed', 'scarred', 'scarted', 'scarves', 'scatted', 'scatter', 'screeds', 'screwed', 'screwer', 'seabags', 'seabeds', 'searest', 'seaters', 'seaward', 'seaware', 'seaweed', 'seceded', 'seceder', 'secedes', 'secrete', 'secrets', 'sedated', 'sedater', 'sedates', 'seedbed', 'seeders', 'seeress', 'seesaws', 'seggars', 'serdabs', 'serfage', 'serrate', 'servers', 'sestets', 'settees', 'setters', 'severed', 'severer', 'sewages', 'sewered', 'sextets', 'stabbed', 'stabber', 'stactes', 'staffed', 'staffer', 'stagers', 'stagged', 'stagger', 'starers', 'starets', 'starred', 'started', 'starter', 'starved', 'starver', 'starves', 'staters', 'steaded', 'steered', 'steerer', 'steeved', 'steeves', 'stetted', 'steward', 'strafed', 'strafer', 'strafes', 'stratas', 'strawed', 'streets', 'stretta', 'strette', 'strewed', 'strewer', 'swabbed', 'swabber', 'swagers', 'swagged', 'swagger', 'swarded', 'swatted', 'swatter', 'swearer', 'sweated', 'sweater', 'sweeter', 'swerved', 'swerver', 'swerves', 'tabards', 'tabaret', 'tabered', 'taffeta', 'taggers', 'tagrags', 'targets', 'tartars', 'tartest', 'tarweed', 'tassets', 'tasters', 'tatters', 'teacart', 'tearers', 'teargas', 'teasers', 'teaware', 'tedders', 'teeters', 'tercets', 'terrace', 'terrets', 'tersest', 'tessera', 'testate', 'testees', 'testers', 'tetrads', 'tetters', 'texases', 'tracers', 'traders', 'trasses', 'treaded', 'treader', 'treated', 'treater', 'tressed', 'tresses', 'trevets', 'tsetses', 'tweeted', 'tweeter', 'tweezed', 'tweezer', 'tweezes', 'tzetzes', 'vacated', 'vacates', 'vastest', 'vawards', 'vedette', 'vergers', 'versers', 'versets', 'verstes', 'vervets', 'vestees', 'wadders', 'wadsets', 'wafered', 'waftage', 'wafters', 'wagered', 'wagerer', 'waggers', 'warders', 'warfare', 'warsaws', 'wastage', 'wasters', 'watered', 'waterer', 'wattage', 'wattest', 'wavered', 'waverer', 'waxweed', 'wearers', 'weavers', 'webfeet', 'webster', 'wedders', 'weeders', 'weevers', 'weeweed', 'weewees', 'westers', 'wetters', 'wettest', 'wrasses', 'wrested', 'wrester', 'zaffars', 'zaffers', 'zaffres', 'zarebas', 'zareeba', 'zebrass', 'zesters'];

exports.keyboard_8LetterWords = ['abbesses', 'abetters', 'abfarads', 'abraders', 'abreacts', 'absterge', 'abstract', 'acceders', 'accessed', 'accesses', 'accreted', 'accretes', 'acerated', 'acerbate', 'acerbest', 'acervate', 'acetated', 'acetates', 'acreages', 'advected', 'adverted', 'affected', 'affecter', 'aftertax', 'aggraded', 'aggrades', 'agraffes', 'arrested', 'arrestee', 'arrester', 'artefact', 'asserted', 'asserter', 'assessed', 'assesses', 'asswaged', 'asswages', 'attested', 'attester', 'attracts', 'avadavat', 'averaged', 'averages', 'avgasses', 'awardees', 'awarders', 'baccaras', 'baccarat', 'baccated', 'badassed', 'badasses', 'badgered', 'bagasses', 'baggages', 'barbered', 'barbette', 'barraged', 'barrages', 'barrater', 'barrette', 'bartered', 'barterer', 'barwares', 'basseted', 'bassetts', 'bastards', 'battered', 'bearcats', 'beavered', 'bedstead', 'bedstraw', 'bedwards', 'bedwarfs', 'beebread', 'begetter', 'beggared', 'bereaved', 'bereaver', 'bereaves', 'berettas', 'bergeres', 'berretta', 'besetter', 'besteads', 'bestrews', 'betatter', 'bettered', 'beverage', 'bezazzes', 'braggart', 'braggers', 'braggest', 'brassage', 'brassard', 'brassart', 'breasted', 'breeders', 'breveted', 'brewages', 'cabarets', 'cabbaged', 'cabbages', 'cabresta', 'cabretta', 'cadaster', 'cadastre', 'cadavers', 'caracara', 'carcases', 'cardcase', 'careered', 'careerer', 'carefree', 'caressed', 'caresser', 'caresses', 'carfares', 'cartages', 'cascaded', 'cascades', 'cascaras', 'caseases', 'caseated', 'caseates', 'casettes', 'cassabas', 'cassatas', 'cassavas', 'cassette', 'castrate', 'cataract', 'catawbas', 'caterers', 'cateress', 'catfaces', 'caveated', 'cerastes', 'crabbers', 'crassest', 'cratered', 'crawdads', 'creasers', 'cressets', 'crevasse', 'dabsters', 'daggered', 'dastards', 'database', 'deadbeat', 'deaerate', 'debarred', 'debasers', 'debaters', 'deceased', 'deceases', 'decrease', 'decreers', 'deerweed', 'defacers', 'defatted', 'defeated', 'defeater', 'defecate', 'defected', 'deferred', 'deferrer', 'degassed', 'degasser', 'degasses', 'degraded', 'degrader', 'degrades', 'degrease', 'deratted', 'deserted', 'deserter', 'deserved', 'deserver', 'deserves', 'desserts', 'detected', 'detecter', 'deterged', 'deterger', 'deterges', 'deterred', 'deterrer', 'detested', 'detester', 'detracts', 'devested', 'dewaters', 'drabbest', 'drabbets', 'draftees', 'drafters', 'draggers', 'dragster', 'drawbars', 'dredgers', 'dressage', 'dressers', 'dwarfest', 'eagerest', 'earwaxes', 'eastward', 'effacers', 'effected', 'effecter', 'egressed', 'egresses', 'erecters', 'ersatzes', 'esterase', 'estreats', 'etageres', 'etcetera', 'exacters', 'exactest', 'excavate', 'exceeded', 'exceeder', 'excessed', 'excesses', 'excreted', 'excreter', 'excretes', 'execrate', 'exegeses', 'exegetes', 'exsected', 'exserted', 'extracts', 'facetted', 'feasters', 'federate', 'feedbags', 'ferrates', 'ferreted', 'ferreter', 'festered', 'fettered', 'fetterer', 'feverfew', 'fracases', 'freebase', 'freebees', 'freezers', 'fretsaws', 'fretters', 'gabbards', 'gabbarts', 'gabfests', 'gagsters', 'garbages', 'gartered', 'gastraea', 'gastreas', 'gazetted', 'gazettes', 'gearcase', 'gerberas', 'gestated', 'gestates', 'gettered', 'grabbers', 'gradated', 'gradates', 'graftage', 'grafters', 'greasers', 'greatest', 'greegree', 'greeters', 'rabbeted', 'radwaste', 'raftered', 'raggeder', 'ragweeds', 'ratafees', 'ratatats', 'ravagers', 'reaccede', 'rearrest', 'rearward', 'reassert', 'reassess', 'rebaters', 'rebreeds', 'recessed', 'recesses', 'recrated', 'recrates', 'recreate', 'redacted', 'redefeat', 'redefect', 'redrafts', 'redrawer', 'redstart', 'redwares', 'reerects', 'refected', 'refereed', 'referees', 'referred', 'referrer', 'refracts', 'refreeze', 'regarded', 'regattas', 'regeared', 'regraded', 'regrades', 'regrafts', 'regrated', 'regrates', 'regreets', 'rereward', 'reseated', 'resected', 'reseeded', 'reserved', 'reserver', 'reserves', 'resetter', 'restaffs', 'restaged', 'restages', 'restarts', 'restated', 'restates', 'restress', 'retagged', 'retarded', 'retarder', 'retarget', 'retasted', 'retastes', 'retested', 'retraced', 'retraces', 'retracts', 'retreads', 'retreats', 'reverbed', 'reverers', 'reversed', 'reverser', 'reverses', 'reverted', 'reverter', 'revested', 'revetted', 'rewarded', 'rewarder', 'reweaved', 'reweaves', 'rewedded', 'rewetted', 'saccades', 'saggards', 'saggared', 'saggered', 'savagest', 'scabbard', 'scarcest', 'scatters', 'scragged', 'screeded', 'screwers', 'seacraft', 'seafarer', 'seawards', 'seawares', 'seawater', 'seaweeds', 'seceders', 'secreted', 'secreter', 'secretes', 'sedatest', 'seedbeds', 'seedcase', 'seesawed', 'serfages', 'serrated', 'serrates', 'sesterce', 'setscrew', 'severest', 'sewerage', 'sextette', 'stabbers', 'staffers', 'staggard', 'staggart', 'staggers', 'stargaze', 'starters', 'starvers', 'stearate', 'stedfast', 'steerage', 'steerers', 'stewards', 'strafers', 'strasses', 'stravage', 'stressed', 'stresses', 'strettas', 'strewers', 'svedberg', 'swabbers', 'swaggers', 'swatters', 'swearers', 'sweaters', 'sweetest', 'swervers', 'tabarded', 'tabarets', 'taffetas', 'targeted', 'tartrate', 'tarweeds', 'tattered', 'teacarts', 'teawares', 'teddered', 'teetered', 'terawatt', 'terraced', 'terraces', 'terrases', 'tesserae', 'testates', 'trabeate', 'tractate', 'traverse', 'treaders', 'treaters', 'tweeters', 'tweezers', 'vedettes', 'vegetate', 'verderer', 'vertebra', 'vertexes', 'waftages', 'wagerers', 'warcraft', 'wardress', 'warfares', 'wastages', 'waterage', 'waterbed', 'waterers', 'wattages', 'waverers', 'waxweeds', 'websters', 'westered', 'westward', 'wresters', 'zareebas'];

exports.keyboard_9LetterWords = ['aberrated', 'abreacted', 'abscessed', 'abscesses', 'absterged', 'absterges', 'abstracts', 'acerbated', 'acerbates', 'actresses', 'addressed', 'addressee', 'addresser', 'addresses', 'affecters', 'aftercare', 'afterward', 'aggravate', 'aggregate', 'aggressed', 'aggresses', 'arrearage', 'arrestees', 'arresters', 'artefacts', 'asserters', 'attesters', 'attracted', 'avadavats', 'baccarats', 'barbettes', 'barefaced', 'barraters', 'barrettes', 'barterers', 'bassetted', 'bedsteads', 'bedstraws', 'bedwarfed', 'beebreads', 'beefeater', 'beeswaxes', 'befretted', 'begetters', 'bereavers', 'berrettas', 'besetters', 'besteaded', 'bestrewed', 'betatters', 'beverages', 'bracteate', 'braggarts', 'brassages', 'brassards', 'brassarts', 'brevetted', 'cabrestas', 'cabrettas', 'cadasters', 'cadastres', 'caracaras', 'carcasses', 'cardcases', 'careerers', 'caressers', 'cassettes', 'castrated', 'castrates', 'cataracts', 'cerebrate', 'crabgrass', 'crevassed', 'crevasses', 'databases', 'deadbeats', 'deaerated', 'deaerates', 'decreased', 'decreases', 'deerweeds', 'defeaters', 'defecated', 'defecates', 'deferrers', 'degassers', 'degraders', 'degreased', 'degreaser', 'degreases', 'desecrate', 'deserters', 'deservers', 'detecters', 'detergers', 'deterrers', 'detesters', 'detracted', 'devastate', 'dewatered', 'dewaterer', 'dragsters', 'dressages', 'eastwards', 'effecters', 'eggbeater', 'esterases', 'estreated', 'etceteras', 'excavated', 'excavates', 'exceeders', 'excreters', 'execrated', 'execrates', 'extracted', 'extravert', 'federated', 'federates', 'ferreters', 'fetterers', 'feverfews', 'freebased', 'freebaser', 'freebases', 'gadgeteer', 'gastraeas', 'gazetteer', 'gearcases', 'graftages', 'greegrees', 'radwastes', 'raggedest', 'reacceded', 'reaccedes', 'readdress', 'rearrests', 'rearwards', 'reasserts', 'recreated', 'recreates', 'redbreast', 'redefeats', 'redefects', 'redrafted', 'redrawers', 'redressed', 'redresser', 'redresses', 'redstarts', 'reerected', 'referrers', 'refracted', 'refreezes', 'regrafted', 'regreeted', 'regressed', 'regresses', 'regretted', 'regretter', 'rerewards', 'reservers', 'resetters', 'restaffed', 'restarted', 'retardate', 'retarders', 'retargets', 'retracted', 'retreaded', 'retreated', 'retreater', 'reversers', 'reverters', 'rewarders', 'sassafras', 'scabbards', 'scattered', 'scatterer', 'seacrafts', 'seafarers', 'seawaters', 'secretest', 'seedcases', 'seedeater', 'seeresses', 'segregate', 'sesterces', 'setscrews', 'sewerages', 'sextettes', 'staggards', 'staggarts', 'staggered', 'staggerer', 'stargazed', 'stargazer', 'stargazes', 'steadfast', 'stearates', 'steerages', 'stewarded', 'stravaged', 'stravages', 'streetcar', 'svedbergs', 'swaggered', 'swaggerer', 'tartrates', 'teargases', 'terawatts', 'tesseract', 'trabeated', 'tractates', 'traversed', 'traverser', 'traverses', 'vegetated', 'vegetates', 'verderers', 'vertebrae', 'vertebras', 'wadsetted', 'warcrafts', 'waterages', 'waterbeds', 'waterweed', 'westwards', 'zebrasses'];

exports.keyboard_10LetterWords = ['abstracted', 'abstracter', 'addressees', 'addressers', 'aftercares', 'aftertaste', 'afterwards', 'aggravated', 'aggravates', 'aggregated', 'aggregates', 'arrearages', 'asseverate', 'beefeaters', 'beggarweed', 'betattered', 'casebearer', 'cateresses', 'cerebrated', 'cerebrates', 'degreasers', 'desecrated', 'desecrater', 'desecrates', 'devastated', 'devastates', 'dewaterers', 'effervesce', 'eggbeaters', 'exacerbate', 'exaggerate', 'extraverts', 'freebasers', 'gadgeteers', 'gazetteers', 'rearrested', 'reasserted', 'reassessed', 'reassesses', 'redbreasts', 'redefeated', 'redefected', 'redressers', 'regretters', 'restressed', 'restresses', 'retardates', 'retargeted', 'retreaters', 'revegetate', 'scabbarded', 'scatterers', 'seedeaters', 'segregated', 'segregates', 'stagecraft', 'staggerers', 'stargazers', 'statecraft', 'stavesacre', 'stewardess', 'streetcars', 'swaggerers', 'sweetbread', 'teargassed', 'teargasses', 'tesseracts', 'tradecraft', 'traversers', 'vertebrate', 'wardresses', 'wastewater', 'watercraft', 'watercress', 'waterweeds'];

exports.keyboard_11LetterWords = ['abstracters', 'abstractest', 'aftereffect', 'aftertastes', 'asseverated', 'asseverates', 'beggarweeds', 'casebearers', 'crabgrasses', 'decerebrate', 'desecraters', 'desegregate', 'effervesced', 'effervesces', 'exacerbated', 'exacerbates', 'exaggerated', 'exaggerates', 'extravagate', 'extravasate', 'extraverted', 'readdressed', 'readdresses', 'reaggregate', 'resegregate', 'revegetated', 'revegetates', 'reverberate', 'sassafrases', 'stagecrafts', 'statecrafts', 'stavesacres', 'sweetbreads', 'tradecrafts', 'vertebrates', 'wastewaters', 'watercrafts'];

exports.keyboard_12LetterWords = ['aftereffects', 'decerebrated', 'decerebrates', 'desegregated', 'desegregates', 'extravagated', 'extravagates', 'extravasated', 'extravasates', 'reaggregated', 'reaggregates', 'resegregated', 'resegregates', 'reverberated', 'reverberates', 'stewardesses', 'sweaterdress', 'watercresses'];

exports.keyboard_14LetterWords = ['sweaterdresses'];

exports.leftHandedWords = exports.keyboard_3LetterWords.concat(exports.keyboard_4LetterWords, exports.keyboard_5LetterWords, exports.keyboard_6LetterWords, exports.keyboard_7LetterWords, exports.keyboard_8LetterWords, exports.keyboard_9LetterWords, exports.keyboard_10LetterWords, exports.keyboard_11LetterWords, exports.keyboard_12LetterWords, exports.keyboard_14LetterWords);

module.exports = exports;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rightHandedWords = ['hi', 'hili', 'hill', 'hillo', 'hilly', 'hilum', 'him', 'hin', 'hinny', 'hip', 'hippo', 'hippy', 'hm', 'hmm', 'ho', 'hokily', 'hokku', 'hokum', 'hokypoky', 'holily', 'holk', 'hollo', 'holloo', 'holly', 'holm', 'holmium', 'holp', 'holy', 'homily', 'hominy', 'homonym', 'homonymy', 'homophony', 'homy', 'hon', 'honk', 'honky', 'hook', 'hookup', 'hooky', 'hooly', 'hoop', 'hoopoo', 'hop', 'hoppy', 'hoy', 'huh', 'huipil', 'hulk', 'hulky', 'hull', 'hullo', 'hum', 'hump', 'humph', 'humpy', 'hun', 'hunh', 'hunk', 'hunky', 'hup', 'hymn', 'hyp', 'hypo', 'hypolimnion', 'hypopyon', 'ikon', 'ilium', 'ilk', 'ill', 'illinium', 'illy', 'imino', 'immy', 'imp', 'impi', 'imply', 'in', 'inion', 'ink', 'inky', 'inly', 'inn', 'inulin', 'ion', 'ionium', 'jill', 'jillion', 'jiminy', 'jimminy', 'jimmy', 'jimp', 'jimply', 'jimpy', 'jin', 'jink', 'jinn', 'jinni', 'jo', 'john', 'johnny', 'join', 'jokily', 'joky', 'jollily', 'jolly', 'jouk', 'joy', 'joypop', 'juju', 'jump', 'jumpily', 'jumpy', 'jun', 'junk', 'junky', 'jupon', 'khi', 'khoum', 'kilim', 'kill', 'killjoy', 'kiln', 'kilo', 'kimono', 'kin', 'kinin', 'kino', 'kip', 'knoll', 'knolly', 'knop', 'kohl', 'koi', 'kolo', 'konk', 'kook', 'kooky', 'kop', 'koph', 'li', 'lily', 'limn', 'limo', 'limp', 'limpkin', 'limply', 'limuli', 'limy', 'lin', 'linin', 'link', 'linkup', 'linky', 'linn', 'lino', 'linum', 'liny', 'lion', 'lip', 'lipin', 'lippy', 'lo', 'loin', 'loll', 'lollipop', 'lollop', 'lolly', 'lollypop', 'loo', 'look', 'lookup', 'loom', 'loon', 'loony', 'loop', 'loopy', 'lop', 'loppy', 'loup', 'lull', 'lulu', 'lum', 'lump', 'lumpily', 'lumpy', 'lunk', 'luny', 'lupin', 'lupulin', 'lymph', 'mho', 'mi', 'mil', 'milium', 'milk', 'milkily', 'milky', 'mill', 'millimho', 'milliohm', 'million', 'milo', 'mim', 'mini', 'minikin', 'minim', 'minimill', 'minimum', 'minion', 'minium', 'mink', 'minny', 'mm', 'mo', 'moil', 'mojo', 'mol', 'moll', 'molly', 'moly', 'mom', 'momi', 'mommy', 'mon', 'monk', 'mono', 'monohull', 'monophony', 'monophyly', 'monopoly', 'mony', 'moo', 'mool', 'moon', 'moonily', 'moony', 'mop', 'mopy', 'moujik', 'moulin', 'mu', 'muhly', 'mujik', 'mukluk', 'mull', 'mullion', 'mum', 'mumm', 'mummy', 'mump', 'mumu', 'mun', 'muni', 'munnion', 'muon', 'muonium', 'muumuu', 'my', 'myopy', 'nihil', 'nil', 'nill', 'nim', 'ninny', 'ninon', 'nip', 'nippily', 'nippy', 'no', 'noh', 'noil', 'noily', 'nolo', 'nom', 'nomoi', 'nonillion', 'nonoily', 'nonunion', 'nonyl', 'noo', 'nook', 'nooky', 'noon', 'noun', 'nu', 'null', 'nun', 'nylon', 'nymph', 'nympho', 'oh', 'ohm', 'oho', 'oil', 'oilily', 'oily', 'oink', 'olio', 'om', 'on', 'onion', 'oniony', 'onium', 'only', 'ooh', 'oomph', 'op', 'opinion', 'opium', 'ouph', 'oy', 'phi', 'phon', 'phonily', 'phono', 'phonon', 'phony', 'phyllo', 'phylon', 'phylum', 'pi', 'piki', 'pili', 'pill', 'pillion', 'pily', 'pimp', 'pimply', 'pin', 'pinion', 'pink', 'pinkly', 'pinko', 'pinky', 'pinny', 'pinon', 'pinup', 'piny', 'pinyin', 'pinyon', 'pion', 'pip', 'pipkin', 'pippin', 'pipy', 'piu', 'plink', 'plonk', 'plop', 'ploy', 'plum', 'plummy', 'plump', 'plumply', 'plumy', 'plunk', 'ply', 'poh', 'poi', 'poilu', 'pokily', 'poky', 'pol', 'polio', 'poll', 'pollinium', 'polo', 'polonium', 'poly', 'polynyi', 'polyp', 'polyphony', 'polypi', 'pom', 'pommy', 'pomp', 'pompom', 'pompon', 'pony', 'pooh', 'pool', 'poon', 'poop', 'pop', 'poplin', 'poppy', 'poyou', 'pul', 'puli', 'pulik', 'pull', 'pullup', 'pulp', 'pulpily', 'pulpy', 'pump', 'pumpkin', 'pun', 'punily', 'punk', 'punkin', 'punky', 'punny', 'puny', 'pup', 'pupil', 'puppy', 'pyin', 'pylon', 'uh', 'ulu', 'um', 'umm', 'ump', 'un', 'unhip', 'unholily', 'unholy', 'unhook', 'union', 'unlink', 'unpin', 'up', 'uphill', 'uplink', 'upo', 'upon', 'yill', 'yin', 'yip', 'yo', 'yok', 'yolk', 'yolky', 'yom', 'yomim', 'yon', 'yoni', 'you', 'youpon', 'yuk', 'yum', 'yummy', 'yup', 'yupon'];

module.exports = rightHandedWords;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = sleep;
// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > milliseconds) {
			break;
		}
	}
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = startSong;

var _keyboard = __webpack_require__(21);

var _text_field = __webpack_require__(22);

var _text_field2 = _interopRequireDefault(_text_field);

var _back_button = __webpack_require__(3);

var _back_button2 = _interopRequireDefault(_back_button);

var _in_button_listener = __webpack_require__(9);

var _in_button_listener2 = _interopRequireDefault(_in_button_listener);

var _remove_all_listeners = __webpack_require__(0);

var _remove_all_listeners2 = _interopRequireDefault(_remove_all_listeners);

var _song_handling = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startSong() {
	var _ctx;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	(0, _remove_all_listeners2.default)();

	// Render back button
	var back_dimens = [-0.5, -0.5, 170, 100];
	ctx.font = "50px Roboto Mono";
	ctx.fillText("Back", 25, 70);
	ctx.strokeStyle = "black";
	(_ctx = ctx).strokeRect.apply(_ctx, back_dimens);

	(0, _in_button_listener2.default)(back_dimens, event, _back_button2.default);

	_song_handling.song1.play();

	(0, _keyboard.keyboard)();

	(0, _text_field2.default)();

	// handleBeats();
}
// import handleBeats from "../../actions/beat_handling";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var keyboard = exports.keyboard = function keyboard() {
	var mac_keys_img = new Image();
	mac_keys_img.onload = function () {
		ctx.drawImage(mac_keys_img, 80, 70, 1300, 360, 0, 480, 1195, 319);
	};
	mac_keys_img.src = "assets/images/mackeys.png";
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dict = __webpack_require__(23);

var _render_text_box = __webpack_require__(8);

var _render_text_box2 = _interopRequireDefault(_render_text_box);

var _rand_common_word = __webpack_require__(6);

var _rand_common_word2 = _interopRequireDefault(_rand_common_word);

var _keypress_handling = __webpack_require__(5);

var _keypress_handling2 = _interopRequireDefault(_keypress_handling);

var _render_text = __webpack_require__(7);

var _render_text2 = _interopRequireDefault(_render_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderRandWord() {
	randWord = (0, _rand_common_word2.default)();

	(0, _render_text2.default)();

	document.addEventListener('keypress', _keypress_handling2.default);
}

exports.default = function () {
	window.typedKeys = [];
	window.randWord = '';
	window.textStartLocation = 360 + 0.5;

	// (null on initial step; need )
	// listen to key that was pressed
	// detect key pressed
	// check if key is right or wrong
	// mark right or wrong

	// TODO: render last character
	(0, _render_text_box2.default)();
	renderRandWord();
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dict = exports.dict = ['Hello World!', 'alleviate'];

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map