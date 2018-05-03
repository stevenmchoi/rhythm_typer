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

var _start_song = __webpack_require__(16);

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

	(0, _song_handling.playSong1)().pause();
	(0, _song_handling.playSong1)().currentTime = 0;

	(0, _root2.default)();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var playSong1 = exports.playSong1 = function playSong1() {
	var song1 = document.getElementById("song1");
	song1.volume = 0.3;

	return song1;
};

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

var _sleep = __webpack_require__(15);

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

var _filtered = __webpack_require__(11);

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

"use strict";


var common_5000Words = __webpack_require__(12);
var leftHanded = __webpack_require__(13);
var rightHandedWords = __webpack_require__(14);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common_5000Words = ['the', 'be', 'and', 'of', 'a', 'in', 'to', 'have', 'to', 'it', 'I', 'that', 'for', 'you', 'he', 'with', 'on', 'do', 'say', 'this', 'they', 'at', 'but', 'we', 'his', 'from', 'that', 'not', 'by', 'she', 'or', 'as', 'what', 'go', 'their', 'can', 'who', 'get', 'if', 'would', 'her', 'all', 'my', 'make', 'about', 'know', 'will', 'as', 'up', 'one', 'time', 'there', 'year', 'so', 'think', 'when', 'which', 'them', 'some', 'me', 'people', 'take', 'out', 'into', 'just', 'see', 'him', 'your', 'come', 'could', 'now', 'than', 'like', 'other', 'how', 'then', 'its', 'our', 'two', 'more', 'these', 'want', 'way', 'look', 'first', 'also', 'new', 'because', 'day', 'more', 'use', 'no', 'man', 'find', 'here', 'thing', 'give', 'many', 'well', 'only', 'those', 'tell', 'one', 'very', 'her', 'even', 'back', 'any', 'good', 'woman', 'through', 'us', 'life', 'child', 'there', 'work', 'down', 'may', 'after', 'should', 'call', 'world', 'over', 'school', 'still', 'try', 'in', 'as', 'last', 'ask', 'need', 'too', 'feel', 'three', 'when', 'state', 'never', 'become', 'between', 'high', 'really', 'something', 'most', 'another', 'much', 'family', 'own', 'out', 'leave', 'put', 'old', 'while', 'mean', 'on', 'keep', 'student', 'why', 'let', 'great', 'same', 'big', 'group', 'begin', 'seem', 'country', 'help', 'talk', 'where', 'turn', 'problem', 'every', 'start', 'hand', 'might', 'American', 'show', 'part', 'about', 'against', 'place', 'over', 'such', 'again', 'few', 'case', 'most', 'week', 'company', 'where', 'system', 'each', 'right', 'program', 'hear', 'so', 'question', 'during', 'work', 'play', 'government', 'run', 'small', 'number', 'off', 'always', 'move', 'like', 'night', 'live', 'Mr', 'point', 'believe', 'hold', 'today', 'bring', 'happen', 'next', 'without', 'before', 'large', 'all', 'million', 'must', 'home', 'under', 'water', 'room', 'write', 'mother', 'area', 'national', 'money', 'story', 'young', 'fact', 'month', 'different', 'lot', 'right', 'study', 'book', 'eye', 'job', 'word', 'though', 'business', 'issue', 'side', 'kind', 'four', 'head', 'far', 'black', 'long', 'both', 'little', 'house', 'yes', 'after', 'since', 'long', 'provide', 'service', 'around', 'friend', 'important', 'father', 'sit', 'away', 'until', 'power', 'hour', 'game', 'often', 'yet', 'line', 'political', 'end', 'among', 'ever', 'stand', 'bad', 'lose', 'however', 'member', 'pay', 'law', 'meet', 'car', 'city', 'almost', 'include', 'continue', 'set', 'later', 'community', 'much', 'name', 'five', 'once', 'white', 'least', 'president', 'learn', 'real', 'change', 'team', 'minute', 'best', 'several', 'idea', 'kid', 'body', 'information', 'nothing', 'ago', 'right', 'lead', 'social', 'understand', 'whether', 'back', 'watch', 'together', 'follow', 'around', 'parent', 'only', 'stop', 'face', 'anything', 'create', 'public', 'already', 'speak', 'others', 'read', 'level', 'allow', 'add', 'office', 'spend', 'door', 'health', 'person', 'art', 'sure', 'such', 'war', 'history', 'party', 'within', 'grow', 'result', 'open', 'change', 'morning', 'walk', 'reason', 'low', 'win', 'research', 'girl', 'guy', 'early', 'food', 'before', 'moment', 'himself', 'air', 'teacher', 'force', 'offer', 'enough', 'both', 'education', 'across', 'although', 'remember', 'foot', 'second', 'boy', 'maybe', 'toward', 'able', 'age', 'off', 'policy', 'everything', 'love', 'process', 'music', 'including', 'consider', 'appear', 'actually', 'buy', 'probably', 'human', 'wait', 'serve', 'market', 'die', 'send', 'expect', 'home', 'sense', 'build', 'stay', 'fall', 'oh', 'nation', 'plan', 'cut', 'college', 'interest', 'death', 'course', 'someone', 'experience', 'behind', 'reach', 'local', 'kill', 'six', 'remain', 'effect', 'use', 'yeah', 'suggest', 'class', 'control', 'raise', 'care', 'perhaps', 'little', 'late', 'hard', 'field', 'else', 'pass', 'former', 'sell', 'major', 'sometimes', 'require', 'along', 'development', 'themselves', 'report', 'role', 'better', 'economic', 'effort', 'up', 'decide', 'rate', 'strong', 'possible', 'heart', 'drug', 'show', 'leader', 'light', 'voice', 'wife', 'whole', 'police', 'mind', 'finally', 'pull', 'return', 'free', 'military', 'price', 'report', 'less', 'according', 'decision', 'explain', 'son', 'hope', 'even', 'develop', 'view', 'relationship', 'carry', 'town', 'road', 'drive', 'arm', 'true', 'federal', 'break', 'better', 'difference', 'thank', 'receive', 'value', 'international', 'building', 'action', 'full', 'model', 'join', 'season', 'society', 'because', 'tax', 'director', 'early', 'position', 'player', 'agree', 'especially', 'record', 'pick', 'wear', 'paper', 'special', 'space', 'ground', 'form', 'support', 'event', 'official', 'whose', 'matter', 'everyone', 'center', 'couple', 'site', 'end', 'project', 'hit', 'base', 'activity', 'star', 'table', 'need', 'court', 'produce', 'eat', 'American', 'teach', 'oil', 'half', 'situation', 'easy', 'cost', 'industry', 'figure', 'face', 'street', 'image', 'itself', 'phone', 'either', 'data', 'cover', 'quite', 'picture', 'clear', 'practice', 'piece', 'land', 'recent', 'describe', 'product', 'doctor', 'wall', 'patient', 'worker', 'news', 'test', 'movie', 'certain', 'north', 'love', 'personal', 'open', 'support', 'simply', 'third', 'technology', 'catch', 'step', 'baby', 'computer', 'type', 'attention', 'draw', 'film', 'Republican', 'tree', 'source', 'red', 'nearly', 'organization', 'choose', 'cause', 'hair', 'look', 'point', 'century', 'evidence', 'window', 'difficult', 'listen', 'soon', 'culture', 'billion', 'chance', 'brother', 'energy', 'period', 'course', 'summer', 'less', 'realize', 'hundred', 'available', 'plant', 'likely', 'opportunity', 'term', 'short', 'letter', 'condition', 'choice', 'place', 'single', 'rule', 'daughter', 'administration', 'south', 'husband', 'Congress', 'floor', 'campaign', 'material', 'population', 'well', 'call', 'economy', 'medical', 'hospital', 'church', 'close', 'thousand', 'risk', 'current', 'fire', 'future', 'wrong', 'involve', 'defense', 'anyone', 'increase', 'security', 'bank', 'myself', 'certainly', 'west', 'sport', 'board', 'seek', 'per', 'subject', 'officer', 'private', 'rest', 'behavior', 'deal', 'performance', 'fight', 'throw', 'top', 'quickly', 'past', 'goal', 'second', 'bed', 'order', 'author', 'fill', 'represent', 'focus', 'foreign', 'drop', 'plan', 'blood', 'upon', 'agency', 'push', 'nature', 'color', 'no', 'recently', 'store', 'reduce', 'sound', 'note', 'fine', 'before', 'near', 'movement', 'page', 'enter', 'share', 'than', 'common', 'poor', 'other', 'natural', 'race', 'concern', 'series', 'significant', 'similar', 'hot', 'language', 'each', 'usually', 'response', 'dead', 'rise', 'animal', 'factor', 'decade', 'article', 'shoot', 'east', 'save', 'seven', 'artist', 'away', 'scene', 'stock', 'career', 'despite', 'central', 'eight', 'thus', 'treatment', 'beyond', 'happy', 'exactly', 'protect', 'approach', 'lie', 'size', 'dog', 'fund', 'serious', 'occur', 'media', 'ready', 'sign', 'thought', 'list', 'individual', 'simple', 'quality', 'pressure', 'accept', 'answer', 'hard', 'resource', 'identify', 'left', 'meeting', 'determine', 'prepare', 'disease', 'whatever', 'success', 'argue', 'cup', 'particularly', 'amount', 'ability', 'staff', 'recognize', 'indicate', 'character', 'growth', 'loss', 'degree', 'wonder', 'attack', 'herself', 'region', 'television', 'box', 'TV', 'training', 'pretty', 'trade', 'deal', 'election', 'everybody', 'physical', 'lay', 'general', 'feeling', 'standard', 'bill', 'message', 'fail', 'outside', 'arrive', 'analysis', 'benefit', 'name', 'forward', 'lawyer', 'present', 'section', 'environmental', 'glass', 'answer', 'skill', 'sister', 'PM', 'professor', 'operation', 'financial', 'crime', 'stage', 'ok', 'compare', 'authority', 'miss', 'design', 'sort', 'one', 'act', 'ten', 'knowledge', 'gun', 'station', 'blue', 'state', 'strategy', 'little', 'clearly', 'discuss', 'indeed', 'force', 'truth', 'song', 'example', 'democratic', 'check', 'environment', 'leg', 'dark', 'public', 'various', 'rather', 'laugh', 'guess', 'executive', 'set', 'study', 'prove', 'hang', 'entire', 'rock', 'design', 'enough', 'forget', 'since', 'claim', 'note', 'remove', 'manager', 'help', 'close', 'sound', 'enjoy', 'network', 'legal', 'religious', 'cold', 'form', 'final', 'main', 'science', 'green', 'memory', 'card', 'above', 'seat', 'cell', 'establish', 'nice', 'trial', 'expert', 'that', 'spring', 'firm', 'Democrat', 'radio', 'visit', 'management', 'care', 'avoid', 'imagine', 'tonight', 'huge', 'ball', 'no', 'close', 'finish', 'yourself', 'talk', 'theory', 'impact', 'respond', 'statement', 'maintain', 'charge', 'popular', 'traditional', 'onto', 'reveal', 'direction', 'weapon', 'employee', 'cultural', 'contain', 'peace', 'head', 'control', 'base', 'pain', 'apply', 'play', 'measure', 'wide', 'shake', 'fly', 'interview', 'manage', 'chair', 'fish', 'particular', 'camera', 'structure', 'politics', 'perform', 'bit', 'weight', 'suddenly', 'discover', 'candidate', 'top', 'production', 'treat', 'trip', 'evening', 'affect', 'inside', 'conference', 'unit', 'best', 'style', 'adult', 'worry', 'range', 'mention', 'rather', 'far', 'deep', 'past', 'edge', 'individual', 'specific', 'writer', 'trouble', 'necessary', 'throughout', 'challenge', 'fear', 'shoulder', 'institution', 'middle', 'sea', 'dream', 'bar', 'beautiful', 'property', 'instead', 'improve', 'stuff', 'detail', 'method', 'sign', 'somebody', 'magazine', 'hotel', 'soldier', 'reflect', 'heavy', 'cause', 'bag', 'heat', 'fall', 'marriage', 'tough', 'sing', 'surface', 'purpose', 'exist', 'pattern', 'whom', 'skin', 'agent', 'owner', 'machine', 'gas', 'down', 'ahead', 'generation', 'commercial', 'address', 'cancer', 'test', 'item', 'reality', 'coach', 'step', 'Mrs', 'yard', 'beat', 'violence', 'total', 'tend', 'investment', 'discussion', 'finger', 'garden', 'notice', 'collection', 'modern', 'task', 'partner', 'positive', 'civil', 'kitchen', 'consumer', 'shot', 'budget', 'wish', 'painting', 'scientist', 'safe', 'agreement', 'capital', 'mouth', 'nor', 'victim', 'newspaper', 'instead', 'threat', 'responsibility', 'smile', 'attorney', 'score', 'account', 'interesting', 'break', 'audience', 'rich', 'dinner', 'figure', 'vote', 'western', 'relate', 'travel', 'debate', 'prevent', 'citizen', 'majority', 'none', 'front', 'born', 'admit', 'senior', 'assume', 'wind', 'key', 'professional', 'mission', 'fast', 'alone', 'customer', 'suffer', 'speech', 'successful', 'option', 'participant', 'southern', 'fresh', 'eventually', 'no', 'forest', 'video', 'global', 'Senate', 'reform', 'access', 'restaurant', 'judge', 'publish', 'cost', 'relation', 'like', 'release', 'own', 'bird', 'opinion', 'credit', 'critical', 'corner', 'concerned', 'recall', 'version', 'stare', 'safety', 'effective', 'neighborhood', 'original', 'act', 'troop', 'income', 'directly', 'hurt', 'species', 'immediately', 'track', 'basic', 'strike', 'hope', 'sky', 'freedom', 'absolutely', 'plane', 'nobody', 'achieve', 'object', 'attitude', 'labor', 'refer', 'concept', 'client', 'powerful', 'perfect', 'nine', 'therefore', 'conduct', 'announce', 'conversation', 'examine', 'touch', 'please', 'attend', 'completely', 'vote', 'variety', 'sleep', 'turn', 'involved', 'investigation', 'nuclear', 'researcher', 'press', 'conflict', 'spirit', 'experience', 'replace', 'British', 'encourage', 'argument', 'by', 'once', 'camp', 'brain', 'feature', 'afternoon', 'AM', 'weekend', 'dozen', 'possibility', 'along', 'insurance', 'department', 'battle', 'beginning', 'date', 'generally', 'African', 'very', 'sorry', 'crisis', 'complete', 'fan', 'stick', 'define', 'easily', 'through', 'hole', 'element', 'vision', 'status', 'normal', 'Chinese', 'ship', 'solution', 'stone', 'slowly', 'scale', 'bit', 'university', 'introduce', 'driver', 'attempt', 'park', 'spot', 'lack', 'ice', 'boat', 'drink', 'sun', 'front', 'distance', 'wood', 'handle', 'truck', 'return', 'mountain', 'survey', 'supposed', 'tradition', 'winter', 'village', 'Soviet', 'refuse', 'sales', 'roll', 'communication', 'run', 'screen', 'gain', 'resident', 'hide', 'gold', 'club', 'future', 'farm', 'potential', 'increase', 'middle', 'European', 'presence', 'independent', 'district', 'shape', 'reader', 'Ms', 'contract', 'crowd', 'Christian', 'express', 'apartment', 'willing', 'strength', 'previous', 'band', 'obviously', 'horse', 'interested', 'target', 'prison', 'ride', 'guard', 'terms', 'demand', 'reporter', 'deliver', 'text', 'share', 'tool', 'wild', 'vehicle', 'observe', 'flight', 'inside', 'facility', 'understanding', 'average', 'emerge', 'advantage', 'quick', 'light', 'leadership', 'earn', 'pound', 'basis', 'bright', 'operate', 'guest', 'sample', 'contribute', 'tiny', 'block', 'protection', 'settle', 'feed', 'collect', 'additional', 'while', 'highly', 'identity', 'title', 'mostly', 'lesson', 'faith', 'river', 'promote', 'living', 'present', 'count', 'unless', 'marry', 'tomorrow', 'technique', 'path', 'ear', 'shop', 'folk', 'order', 'principle', 'survive', 'lift', 'border', 'competition', 'jump', 'gather', 'limit', 'fit', 'claim', 'cry', 'equipment', 'worth', 'associate', 'critic', 'warm', 'aspect', 'result', 'insist', 'failure', 'annual', 'French', 'Christmas', 'comment', 'responsible', 'affair', 'approach', 'until', 'procedure', 'regular', 'spread', 'chairman', 'baseball', 'soft', 'ignore', 'egg', 'measure', 'belief', 'demonstrate', 'anybody', 'murder', 'gift', 'religion', 'review', 'editor', 'past', 'engage', 'coffee', 'document', 'speed', 'cross', 'influence', 'anyway', 'threaten', 'commit', 'female', 'youth', 'wave', 'move', 'afraid', 'quarter', 'background', 'native', 'broad', 'wonderful', 'deny', 'apparently', 'slightly', 'reaction', 'twice', 'suit', 'perspective', 'growing', 'blow', 'construction', 'kind', 'intelligence', 'destroy', 'cook', 'connection', 'charge', 'burn', 'shoe', 'view', 'grade', 'context', 'committee', 'hey', 'mistake', 'focus', 'smile', 'location', 'clothes', 'Indian', 'quiet', 'dress', 'promise', 'aware', 'neighbor', 'complete', 'drive', 'function', 'bone', 'active', 'extend', 'chief', 'average', 'combine', 'wine', 'below', 'cool', 'voter', 'mean', 'demand', 'learning', 'bus', 'dangerous', 'remind', 'moral', 'United', 'category', 'relatively', 'victory', 'key', 'academic', 'visit', 'Internet', 'healthy', 'fire', 'negative', 'following', 'historical', 'medicine', 'tour', 'depend', 'photo', 'finding', 'grab', 'direct', 'classroom', 'contact', 'justice', 'participate', 'daily', 'fair', 'pair', 'famous', 'exercise', 'knee', 'flower', 'tape', 'hire', 'familiar', 'appropriate', 'supply', 'fully', 'cut', 'will', 'actor', 'birth', 'search', 'tie', 'democracy', 'eastern', 'primary', 'yesterday', 'circle', 'device', 'progress', 'next', 'front', 'bottom', 'island', 'exchange', 'clean', 'studio', 'train', 'lady', 'colleague', 'application', 'neck', 'lean', 'damage', 'plastic', 'tall', 'plate', 'hate', 'otherwise', 'writing', 'press', 'male', 'start', 'alive', 'expression', 'football', 'intend', 'attack', 'chicken', 'army', 'abuse', 'theater', 'shut', 'map', 'extra', 'session', 'danger', 'welcome', 'domestic', 'lots', 'literature', 'rain', 'desire', 'assessment', 'injury', 'respect', 'northern', 'nod', 'paint', 'fuel', 'leaf', 'direct', 'dry', 'Russian', 'instruction', 'fight', 'pool', 'climb', 'sweet', 'lead', 'engine', 'fourth', 'salt', 'expand', 'importance', 'metal', 'fat', 'ticket', 'software', 'disappear', 'corporate', 'strange', 'lip', 'reading', 'urban', 'mental', 'increasingly', 'lunch', 'educational', 'somewhere', 'farmer', 'above', 'sugar', 'planet', 'favorite', 'explore', 'obtain', 'enemy', 'greatest', 'complex', 'surround', 'athlete', 'invite', 'repeat', 'carefully', 'soul', 'scientific', 'impossible', 'panel', 'meaning', 'mom', 'married', 'alone', 'instrument', 'predict', 'weather', 'presidential', 'emotional', 'commitment', 'Supreme', 'bear', 'pocket', 'thin', 'temperature', 'surprise', 'poll', 'proposal', 'consequence', 'half', 'breath', 'sight', 'cover', 'balance', 'adopt', 'minority', 'straight', 'attempt', 'connect', 'works', 'teaching', 'belong', 'aid', 'advice', 'okay', 'photograph', 'empty', 'regional', 'trail', 'novel', 'code', 'somehow', 'organize', 'jury', 'breast', 'Iraqi', 'human', 'acknowledge', 'theme', 'storm', 'union', 'record', 'desk', 'fear', 'thanks', 'fruit', 'under', 'expensive', 'yellow', 'conclusion', 'prime', 'shadow', 'struggle', 'conclude', 'analyst', 'dance', 'limit', 'like', 'regulation', 'being', 'last', 'ring', 'largely', 'shift', 'revenue', 'mark', 'locate', 'county', 'appearance', 'package', 'difficulty', 'bridge', 'recommend', 'obvious', 'train', 'basically', 'e', 'generate', 'anymore', 'propose', 'thinking', 'possibly', 'trend', 'visitor', 'loan', 'currently', 'comfortable', 'investor', 'but', 'profit', 'angry', 'crew', 'deep', 'accident', 'male', 'meal', 'hearing', 'traffic', 'muscle', 'notion', 'capture', 'prefer', 'truly', 'earth', 'Japanese', 'chest', 'search', 'thick', 'cash', 'museum', 'beauty', 'emergency', 'unique', 'feature', 'internal', 'ethnic', 'link', 'stress', 'content', 'select', 'root', 'nose', 'declare', 'outside', 'appreciate', 'actual', 'bottle', 'hardly', 'setting', 'launch', 'dress', 'file', 'sick', 'outcome', 'ad', 'defend', 'matter', 'judge', 'duty', 'sheet', 'ought', 'ensure', 'Catholic', 'extremely', 'extent', 'component', 'mix', 'long', 'slow', 'contrast', 'zone', 'wake', 'challenge', 'airport', 'chief', 'brown', 'standard', 'shirt', 'pilot', 'warn', 'ultimately', 'cat', 'contribution', 'capacity', 'ourselves', 'estate', 'guide', 'circumstance', 'snow', 'English', 'politician', 'steal', 'pursue', 'slip', 'percentage', 'meat', 'funny', 'neither', 'soil', 'influence', 'surgery', 'correct', 'Jewish', 'blame', 'estimate', 'due', 'basketball', 'late', 'golf', 'investigate', 'crazy', 'significantly', 'chain', 'address', 'branch', 'combination', 'just', 'frequently', 'governor', 'relief', 'user', 'dad', 'kick', 'part', 'manner', 'ancient', 'silence', 'rating', 'golden', 'motion', 'German', 'gender', 'solve', 'fee', 'landscape', 'used', 'bowl', 'equal', 'long', 'official', 'forth', 'frame', 'typical', 'except', 'conservative', 'eliminate', 'host', 'hall', 'trust', 'ocean', 'score', 'row', 'producer', 'afford', 'meanwhile', 'regime', 'division', 'confirm', 'fix', 'appeal', 'mirror', 'tooth', 'smart', 'length', 'entirely', 'rely', 'topic', 'complain', 'issue', 'variable', 'back', 'range', 'telephone', 'perception', 'attract', 'confidence', 'bedroom', 'secret', 'debt', 'rare', 'his', 'tank', 'nurse', 'coverage', 'opposition', 'aside', 'anywhere', 'bond', 'file', 'pleasure', 'master', 'era', 'requirement', 'check', 'stand', 'fun', 'expectation', 'wing', 'separate', 'now', 'clear', 'struggle', 'mean', 'somewhat', 'pour', 'stir', 'judgment', 'clean', 'except', 'beer', 'English', 'reference', 'tear', 'doubt', 'grant', 'seriously', 'account', 'minister', 'totally', 'hero', 'industrial', 'cloud', 'stretch', 'winner', 'volume', 'travel', 'seed', 'surprised', 'rest', 'fashion', 'pepper', 'separate', 'busy', 'intervention', 'copy', 'tip', 'below', 'cheap', 'aim', 'cite', 'welfare', 'vegetable', 'gray', 'dish', 'beach', 'improvement', 'everywhere', 'opening', 'overall', 'divide', 'initial', 'terrible', 'oppose', 'contemporary', 'route', 'multiple', 'essential', 'question', 'league', 'criminal', 'careful', 'core', 'upper', 'rush', 'necessarily', 'specifically', 'tired', 'rise', 'tie', 'employ', 'holiday', 'dance', 'vast', 'resolution', 'household', 'fewer', 'abortion', 'apart', 'witness', 'match', 'barely', 'sector', 'representative', 'lack', 'beneath', 'beside', 'black', 'incident', 'limited', 'proud', 'flow', 'faculty', 'increased', 'waste', 'merely', 'mass', 'emphasize', 'experiment', 'definitely', 'bomb', 'enormous', 'tone', 'liberal', 'massive', 'engineer', 'wheel', 'female', 'decline', 'invest', 'promise', 'cable', 'towards', 'expose', 'rural', 'AIDS', 'Jew', 'narrow', 'cream', 'secretary', 'gate', 'solid', 'hill', 'typically', 'noise', 'grass', 'unfortunately', 'hat', 'legislation', 'succeed', 'either', 'celebrate', 'achievement', 'fishing', 'drink', 'accuse', 'hand', 'useful', 'land', 'secret', 'reject', 'talent', 'taste', 'characteristic', 'milk', 'escape', 'cast', 'sentence', 'unusual', 'closely', 'convince', 'height', 'physician', 'assess', 'sleep', 'plenty', 'ride', 'virtually', 'first', 'addition', 'sharp', 'creative', 'lower', 'behind', 'approve', 'explanation', 'outside', 'campus', 'proper', 'live', 'guilty', 'living', 'acquire', 'compete', 'technical', 'plus', 'mind', 'potential', 'immigrant', 'weak', 'illegal', 'hi', 'alternative', 'interaction', 'column', 'personality', 'signal', 'curriculum', 'list', 'honor', 'passenger', 'assistance', 'forever', 'fun', 'regard', 'Israeli', 'association', 'twenty', 'knock', 'review', 'wrap', 'lab', 'offer', 'display', 'criticism', 'asset', 'depression', 'spiritual', 'musical', 'journalist', 'prayer', 'suspect', 'scholar', 'warning', 'climate', 'cheese', 'observation', 'childhood', 'payment', 'sir', 'permit', 'cigarette', 'definition', 'priority', 'bread', 'creation', 'graduate', 'request', 'emotion', 'scream', 'dramatic', 'universe', 'gap', 'excellent', 'deeply', 'prosecutor', 'mark', 'green', 'lucky', 'drag', 'airline', 'library', 'agenda', 'recover', 'factory', 'selection', 'primarily', 'roof', 'unable', 'expense', 'initiative', 'diet', 'arrest', 'funding', 'therapy', 'wash', 'schedule', 'sad', 'brief', 'housing', 'post', 'purchase', 'existing', 'dark', 'steel', 'regarding', 'shout', 'remaining', 'visual', 'fairly', 'chip', 'violent', 'silent', 'suppose', 'self', 'bike', 'tea', 'perceive', 'comparison', 'settlement', 'layer', 'planning', 'far', 'description', 'later', 'slow', 'slide', 'widely', 'wedding', 'inform', 'portion', 'territory', 'immediate', 'opponent', 'abandon', 'link', 'mass', 'lake', 'transform', 'tension', 'display', 'leading', 'bother', 'consist', 'alcohol', 'enable', 'bend', 'saving', 'gain', 'desert', 'shall', 'error', 'release', 'cop', 'Arab', 'double', 'walk', 'sand', 'Spanish', 'rule', 'hit', 'print', 'preserve', 'passage', 'formal', 'transition', 'existence', 'album', 'participation', 'arrange', 'atmosphere', 'joint', 'reply', 'cycle', 'opposite', 'lock', 'whole', 'deserve', 'consistent', 'resistance', 'discovery', 'tear', 'exposure', 'pose', 'stream', 'sale', 'trust', 'benefit', 'pot', 'grand', 'mine', 'hello', 'coalition', 'tale', 'knife', 'resolve', 'racial', 'phase', 'present', 'joke', 'coat', 'Mexican', 'symptom', 'contact', 'manufacturer', 'philosophy', 'potato', 'interview', 'foundation', 'quote', 'online', 'pass', 'negotiation', 'good', 'urge', 'occasion', 'dust', 'breathe', 'elect', 'investigator', 'jacket', 'glad', 'ordinary', 'reduction', 'rarely', 'shift', 'pack', 'numerous', 'touch', 'substance', 'discipline', 'elsewhere', 'iron', 'practical', 'moreover', 'passion', 'volunteer', 'implement', 'essentially', 'gene', 'enforcement', 'sauce', 'independence', 'marketing', 'priest', 'amazing', 'intense', 'advance', 'employer', 'shock', 'inspire', 'adjust', 'retire', 'sure', 'visible', 'kiss', 'illness', 'cap', 'habit', 'competitive', 'juice', 'congressional', 'involvement', 'dominate', 'previously', 'whenever', 'transfer', 'analyze', 'another', 'attach', 'for', 'Indian', 'disaster', 'parking', 'prospect', 'boss', 'complaint', 'championship', 'coach', 'exercise', 'fundamental', 'severe', 'enhance', 'mystery', 'impose', 'poverty', 'other', 'entry', 'fat', 'spending', 'king', 'evaluate', 'symbol', 'still', 'trade', 'maker', 'mood', 'accomplish', 'emphasis', 'illustrate', 'boot', 'monitor', 'Asian', 'entertainment', 'bean', 'evaluation', 'creature', 'commander', 'digital', 'arrangement', 'concentrate', 'total', 'usual', 'anger', 'psychological', 'heavily', 'peak', 'approximately', 'increasing', 'disorder', 'missile', 'equally', 'vary', 'wire', 'round', 'distribution', 'transportation', 'holy', 'ring', 'twin', 'command', 'commission', 'interpretation', 'breakfast', 'stop', 'strongly', 'engineering', 'luck', 'so', 'constant', 'race', 'clinic', 'veteran', 'smell', 'tablespoon', 'capable', 'nervous', 'tourist', 'light', 'toss', 'crucial', 'bury', 'pray', 'tomato', 'exception', 'butter', 'deficit', 'bathroom', 'objective', 'block', 'electronic', 'ally', 'journey', 'reputation', 'mixture', 'surely', 'tower', 'smoke', 'confront', 'pure', 'glance', 'dimension', 'toy', 'prisoner', 'fellow', 'smooth', 'nearby', 'peer', 'designer', 'personnel', 'shape', 'educator', 'relative', 'immigration', 'belt', 'teaspoon', 'birthday', 'implication', 'perfectly', 'coast', 'supporter', 'accompany', 'silver', 'teenager', 'recognition', 'retirement', 'flag', 'recovery', 'whisper', 'watch', 'gentleman', 'corn', 'moon', 'inner', 'junior', 'rather', 'throat', 'salary', 'swing', 'observer', 'due', 'straight', 'publication', 'pretty', 'crop', 'dig', 'strike', 'permanent', 'plant', 'phenomenon', 'anxiety', 'unlike', 'wet', 'literally', 'resist', 'convention', 'embrace', 'supply', 'assist', 'exhibition', 'construct', 'viewer', 'pan', 'consultant', 'soon', 'line', 'administrator', 'date', 'occasionally', 'mayor', 'consideration', 'CEO', 'secure', 'pink', 'smoke', 'estimate', 'buck', 'historic', 'poem', 'grandmother', 'bind', 'fifth', 'constantly', 'enterprise', 'favor', 'testing', 'stomach', 'apparent', 'weigh', 'install', 'sensitive', 'suggestion', 'mail', 'recipe', 'reasonable', 'preparation', 'wooden', 'elementary', 'concert', 'aggressive', 'false', 'intention', 'channel', 'extreme', 'tube', 'drawing', 'protein', 'quit', 'absence', 'roll', 'Latin', 'rapidly', 'jail', 'comment', 'diversity', 'honest', 'Palestinian', 'pace', 'employment', 'speaker', 'impression', 'essay', 'respondent', 'giant', 'cake', 'historian', 'negotiate', 'restore', 'substantial', 'pop', 'particular', 'specialist', 'origin', 'approval', 'mine', 'quietly', 'advise', 'conventional', 'drop', 'count', 'depth', 'wealth', 'disability', 'shell', 'general', 'criticize', 'fast', 'professional', 'effectively', 'biological', 'pack', 'onion', 'deputy', 'flat', 'brand', 'assure', 'mad', 'award', 'criteria', 'dealer', 'via', 'alternative', 'utility', 'precisely', 'arise', 'armed', 'nevertheless', 'highway', 'clinical', 'routine', 'schedule', 'wage', 'normally', 'phrase', 'ingredient', 'stake', 'Muslim', 'dream', 'fiber', 'activist', 'Islamic', 'snap', 'terrorism', 'refugee', 'incorporate', 'hip', 'ultimate', 'switch', 'corporation', 'valuable', 'assumption', 'gear', 'graduate', 'barrier', 'minor', 'provision', 'killer', 'assign', 'gang', 'developing', 'classic', 'chemical', 'wave', 'label', 'teen', 'index', 'vacation', 'advocate', 'draft', 'extraordinary', 'heaven', 'rough', 'yell', 'pregnant', 'distant', 'drama', 'satellite', 'personally', 'wonder', 'clock', 'chocolate', 'Italian', 'Canadian', 'ceiling', 'sweep', 'advertising', 'universal', 'spin', 'house', 'button', 'bell', 'rank', 'darkness', 'ahead', 'clothing', 'super', 'yield', 'fence', 'portrait', 'paint', 'survival', 'roughly', 'lawsuit', 'bottom', 'testimony', 'bunch', 'beat', 'wind', 'found', 'burden', 'react', 'chamber', 'furniture', 'cooperation', 'string', 'ceremony', 'communicate', 'taste', 'cheek', 'lost', 'profile', 'mechanism', 'disagree', 'like', 'penalty', 'match', 'ie', 'advance', 'resort', 'destruction', 'bear', 'unlikely', 'tissue', 'constitutional', 'pant', 'stranger', 'infection', 'cabinet', 'broken', 'apple', 'electric', 'proceed', 'track', 'bet', 'literary', 'virus', 'stupid', 'dispute', 'fortune', 'strategic', 'assistant', 'overcome', 'remarkable', 'occupy', 'statistics', 'shopping', 'cousin', 'encounter', 'wipe', 'initially', 'blind', 'white', 'port', 'honor', 'electricity', 'genetic', 'adviser', 'pay', 'spokesman', 'retain', 'latter', 'incentive', 'slave', 'chemical', 'translate', 'accurate', 'whereas', 'terror', 'though', 'expansion', 'elite', 'Olympic', 'dirt', 'odd', 'rice', 'bullet', 'tight', 'Bible', 'chart', 'solar', 'decline', 'conservative', 'process', 'square', 'stick', 'concentration', 'complicated', 'gently', 'champion', 'scenario', 'telescope', 'reflection', 'revolution', 'strip', 'interpret', 'friendly', 'tournament', 'fiction', 'detect', 'balance', 'likely', 'tremendous', 'lifetime', 'recommendation', 'flow', 'senator', 'market', 'hunting', 'salad', 'guarantee', 'innocent', 'boundary', 'pause', 'remote', 'satisfaction', 'journal', 'bench', 'lover', 'raw', 'awareness', 'surprising', 'withdraw', 'general', 'deck', 'similarly', 'newly', 'pole', 'testify', 'mode', 'dialogue', 'imply', 'naturally', 'mutual', 'founder', 'top', 'advanced', 'pride', 'dismiss', 'aircraft', 'delivery', 'mainly', 'bake', 'freeze', 'platform', 'finance', 'sink', 'attractive', 'respect', 'diverse', 'relevant', 'ideal', 'joy', 'worth', 'regularly', 'working', 'singer', 'evolve', 'shooting', 'partly', 'unknown', 'assistant', 'offense', 'counter', 'DNA', 'smell', 'potentially', 'transfer', 'thirty', 'justify', 'protest', 'crash', 'craft', 'treaty', 'terrorist', 'insight', 'possess', 'politically', 'tap', 'lie', 'extensive', 'episode', 'double', 'swim', 'tire', 'fault', 'loose', 'free', 'shortly', 'originally', 'considerable', 'prior', 'intellectual', 'mix', 'assault', 'relax', 'stair', 'adventure', 'external', 'proof', 'confident', 'headquarters', 'sudden', 'dirty', 'violation', 'tongue', 'license', 'hold', 'shelter', 'rub', 'controversy', 'entrance', 'favorite', 'practice', 'properly', 'fade', 'defensive', 'tragedy', 'net', 'characterize', 'funeral', 'profession', 'alter', 'spot', 'constitute', 'establishment', 'squeeze', 'imagination', 'target', 'mask', 'convert', 'comprehensive', 'prominent', 'presentation', 'regardless', 'easy', 'load', 'stable', 'introduction', 'appeal', 'pretend', 'not', 'elderly', 'representation', 'deer', 'split', 'violate', 'partnership', 'pollution', 'emission', 'steady', 'vital', 'neither', 'fate', 'earnings', 'oven', 'distinction', 'segment', 'nowhere', 'poet', 'mere', 'exciting', 'variation', 'comfort', 'radical', 'stress', 'adapt', 'Irish', 'honey', 'correspondent', 'pale', 'musician', 'significance', 'load', 'round', 'vessel', 'storage', 'flee', 'mm', 'leather', 'distribute', 'evolution', 'ill', 'tribe', 'shelf', 'can', 'grandfather', 'lawn', 'buyer', 'dining', 'wisdom', 'council', 'vulnerable', 'instance', 'garlic', 'capability', 'poetry', 'celebrity', 'gradually', 'stability', 'doubt', 'fantasy', 'scared', 'guide', 'plot', 'framework', 'gesture', 'depending', 'ongoing', 'psychology', 'since', 'counselor', 'witness', 'chapter', 'fellow', 'divorce', 'owe', 'pipe', 'athletic', 'slight', 'math', 'shade', 'tail', 'sustain', 'mount', 'obligation', 'angle', 'palm', 'differ', 'custom', 'store', 'economist', 'fifteen', 'soup', 'celebration', 'efficient', 'damage', 'composition', 'satisfy', 'pile', 'briefly', 'carbon', 'closer', 'consume', 'scheme', 'crack', 'frequency', 'tobacco', 'survivor', 'besides', 'in', 'psychologist', 'wealthy', 'galaxy', 'given', 'fund', 'ski', 'limitation', 'OK', 'trace', 'appointment', 'preference', 'meter', 'explosion', 'arrest', 'publicly', 'incredible', 'fighter', 'rapid', 'admission', 'hunter', 'educate', 'painful', 'friendship', 'aide', 'infant', 'calculate', 'fifty', 'rid', 'porch', 'tendency', 'uniform', 'formation', 'scholarship', 'reservation', 'efficiency', 'waste', 'qualify', 'mall', 'derive', 'scandal', 'PC', 'helpful', 'impress', 'heel', 'resemble', 'privacy', 'fabric', 'surprise', 'contest', 'proportion', 'guideline', 'rifle', 'maintenance', 'conviction', 'trick', 'organic', 'tent', 'examination', 'publisher', 'strengthen', 'French', 'proposed', 'myth', 'sophisticated', 'cow', 'etc', 'standing', 'asleep', 'tennis', 'nerve', 'barrel', 'bombing', 'membership', 'ratio', 'menu', 'purchase', 'controversial', 'desperate', 'rate', 'lifestyle', 'humor', 'loud', 'glove', 'suspect', 'sufficient', 'narrative', 'photographer', 'helicopter', 'Catholic', 'modest', 'provider', 'delay', 'agricultural', 'explode', 'stroke', 'scope', 'punishment', 'handful', 'badly', 'horizon', 'curious', 'downtown', 'girlfriend', 'prompt', 'request', 'cholesterol', 'absorb', 'adjustment', 'taxpayer', 'eager', 'principal', 'detailed', 'motivation', 'assignment', 'restriction', 'across', 'Palestinian', 'laboratory', 'workshop', 'differently', 'auto', 'romantic', 'cotton', 'motor', 'sue', 'flavor', 'overlook', 'float', 'undergo', 'sequence', 'demonstration', 'jet', 'orange', 'consumption', 'assert', 'blade', 'temporary', 'medication', 'print', 'cabin', 'bite', 'relative', 'edition', 'valley', 'yours', 'pitch', 'pine', 'brilliant', 'versus', 'manufacturing', 'risk', 'Christian', 'complex', 'absolute', 'chef', 'discrimination', 'offensive', 'German', 'suit', 'boom', 'register', 'appoint', 'heritage', 'God', 'terrorist', 'dominant', 'successfully', 'lemon', 'hungry', 'sense', 'dry', 'wander', 'submit', 'economics', 'naked', 'anticipate', 'nut', 'legacy', 'extension', 'shrug', 'fly', 'battery', 'arrival', 'legitimate', 'orientation', 'inflation', 'cope', 'flame', 'cluster', 'host', 'wound', 'dependent', 'shower', 'institutional', 'depict', 'operating', 'flesh', 'garage', 'operator', 'instructor', 'collapse', 'borrow', 'furthermore', 'comedy', 'mortgage', 'sanction', 'civilian', 'twelve', 'weekly', 'habitat', 'grain', 'brush', 'consciousness', 'devote', 'crack', 'measurement', 'province', 'ease', 'seize', 'ethics', 'nomination', 'permission', 'wise', 'actress', 'summit', 'acid', 'odds', 'gifted', 'frustration', 'medium', 'function', 'physically', 'grant', 'distinguish', 'shore', 'repeatedly', 'lung', 'firm', 'running', 'correct', 'distinct', 'artistic', 'discourse', 'basket', 'ah', 'fighting', 'impressive', 'competitor', 'ugly', 'worried', 'portray', 'powder', 'ghost', 'persuade', 'moderate', 'subsequent', 'continued', 'cookie', 'carrier', 'cooking', 'frequent', 'ban', 'swing', 'orange', 'awful', 'admire', 'pet', 'miracle', 'exceed', 'rhythm', 'widespread', 'killing', 'lovely', 'sin', 'charity', 'script', 'tactic', 'identification', 'transformation', 'everyday', 'headline', 'crash', 'venture', 'invasion', 'military', 'nonetheless', 'adequate', 'piano', 'grocery', 'intensity', 'exhibit', 'high', 'blanket', 'margin', 'principal', 'quarterback', 'mouse', 'rope', 'concrete', 'prescription', 'African', 'chase', 'document', 'brick', 'recruit', 'patch', 'consensus', 'horror', 'recording', 'changing', 'painter', 'colonial', 'pie', 'sake', 'gaze', 'courage', 'pregnancy', 'swear', 'defeat', 'clue', 'reinforce', 'win', 'confusion', 'slice', 'occupation', 'dear', 'coal', 'sacred', 'criminal', 'formula', 'cognitive', 'collective', 'exact', 'uncle', 'square', 'captain', 'sigh', 'attribute', 'dare', 'okay', 'homeless', 'cool', 'gallery', 'soccer', 'defendant', 'tunnel', 'fitness', 'lap', 'grave', 'toe', 'container', 'virtue', 'abroad', 'architect', 'dramatically', 'makeup', 'inquiry', 'rose', 'surprisingly', 'highlight', 'decrease', 'indication', 'rail', 'anniversary', 'couch', 'alliance', 'hypothesis', 'boyfriend', 'compose', 'peer', 'mess', 'rank', 'legend', 'regulate', 'adolescent', 'shine', 'norm', 'upset', 'remark', 'resign', 'reward', 'gentle', 'related', 'organ', 'lightly', 'concerning', 'invent', 'laughter', 'fit', 'northwest', 'counseling', 'tight', 'receiver', 'ritual', 'insect', 'interrupt', 'salmon', 'favor', 'trading', 'concern', 'magic', 'superior', 'combat', 'stem', 'surgeon', 'acceptable', 'physics', 'counsel', 'brush', 'jeans', 'hunt', 'continuous', 'log', 'echo', 'pill', 'excited', 'sculpture', 'compound', 'integrate', 'flour', 'bitter', 'bare', 'slope', 'rent', 'presidency', 'serving', 'subtle', 'greatly', 'bishop', 'drinking', 'delay', 'cry', 'acceptance', 'collapse', 'shop', 'pump', 'candy', 'evil', 'final', 'finance', 'pleased', 'medal', 'beg', 'sponsor', 'ethical', 'secondary', 'slam', 'export', 'experimental', 'melt', 'midnight', 'net', 'curve', 'integrity', 'entitle', 'evident', 'logic', 'essence', 'park', 'exclude', 'harsh', 'closet', 'suburban', 'greet', 'favor', 'interior', 'corridor', 'murder', 'retail', 'pitcher', 'march', 'snake', 'pitch', 'excuse', 'cross', 'weakness', 'pig', 'cold', 'classical', 'estimated', 'T', 'online', 'unemployment', 'civilization', 'fold', 'patient', 'pop', 'daily', 'reverse', 'missing', 'correlation', 'humanity', 'flash', 'developer', 'reliable', 'excitement', 'beef', 'Islam', 'Roman', 'stretch', 'architecture', 'occasional', 'administrative', 'elbow', 'deadly', 'Muslim', 'Hispanic', 'allegation', 'tip', 'confuse', 'airplane', 'monthly', 'duck', 'dose', 'Korean', 'plead', 'initiate', 'lecture', 'van', 'sixth', 'bay', 'mainstream', 'suburb', 'sandwich', 'unlike', 'trunk', 'rumor', 'implementation', 'swallow', 'motivate', 'render', 'longtime', 'trap', 'restrict', 'cloth', 'seemingly', 'legislative', 'effectiveness', 'enforce', 'lens', 'reach', 'inspector', 'lend', 'plain', 'fraud', 'companion', 'contend', 'nail', 'array', 'strict', 'assemble', 'frankly', 'rat', 'burst', 'hallway', 'cave', 'inevitable', 'southwest', 'monster', 'speed', 'protest', 'unexpected', 'obstacle', 'facilitate', 'encounter', 'rip', 'herb', 'overwhelming', 'integration', 'crystal', 'recession', 'wish', 'top', 'written', 'motive', 'label', 'flood', 'pen', 'ownership', 'nightmare', 'notice', 'inspection', 'supervisor', 'consult', 'arena', 'laugh', 'diagnosis', 'possession', 'forgive', 'warm', 'consistently', 'basement', 'project', 'drift', 'drain', 'last', 'prosecution', 'maximum', 'announcement', 'warrior', 'prediction', 'bacteria', 'questionnaire', 'mud', 'infrastructure', 'hurry', 'privilege', 'temple', 'medium', 'outdoor', 'suck', 'and', 'broadcast', 're', 'leap', 'random', 'past', 'wrist', 'curtain', 'monitor', 'pond', 'domain', 'guilt', 'cattle', 'subject', 'walking', 'playoff', 'minimum', 'fiscal', 'skirt', 'dump', 'hence', 'database', 'uncomfortable', 'aim', 'execute', 'limb', 'ideology', 'average', 'welcome', 'tune', 'continuing', 'harm', 'railroad', 'endure', 'radiation', 'horn', 'chronic', 'peaceful', 'innovation', 'strain', 'guitar', 'replacement', 'behave', 'administer', 'simultaneously', 'dancer', 'amendment', 'guard', 'pad', 'transmission', 'await', 'retired', 'trigger', 'spill', 'grateful', 'grace', 'virtual', 'response', 'colony', 'adoption', 'slide', 'indigenous', 'closed', 'convict', 'civilian', 'towel', 'modify', 'particle', 'award', 'glance', 'prize', 'landing', 'conduct', 'blue', 'boost', 'bat', 'alarm', 'festival', 'grip', 'weird', 'undermine', 'freshman', 'sweat', 'outer', 'European', 'drunk', 'survey', 'research', 'separation', 'traditionally', 'stuff', 'govern', 'southeast', 'intelligent', 'wherever', 'ballot', 'rhetoric', 'convinced', 'driving', 'vitamin', 'enthusiasm', 'accommodate', 'praise', 'injure', 'wilderness', 'nearby', 'endless', 'mandate', 'pause', 'excuse', 'respectively', 'uncertainty', 'chaos', 'short', 'mechanical', 'canvas', 'forty', 'matter', 'lobby', 'profound', 'format', 'trait', 'currency', 'turkey', 'reserve', 'beam', 'abuse', 'astronomer', 'corruption', 'contractor', 'apologize', 'doctrine', 'genuine', 'thumb', 'unity', 'compromise', 'horrible', 'behavioral', 'exclusive', 'scatter', 'commonly', 'convey', 'rush', 'twist', 'complexity', 'fork', 'disk', 'relieve', 'suspicion', 'lock', 'finish', 'residence', 'shame', 'meaningful', 'sidewalk', 'Olympics', 'technological', 'signature', 'pleasant', 'wow', 'suspend', 'rebel', 'frozen', 'desire', 'spouse', 'fluid', 'pension', 'resume', 'theoretical', 'sodium', 'blow', 'promotion', 'delicate', 'forehead', 'rebuild', 'bounce', 'electrical', 'hook', 'detective', 'traveler', 'click', 'compensation', 'signal', 'exit', 'attraction', 'dedicate', 'altogether', 'pickup', 'carve', 'needle', 'belly', 'ship', 'scare', 'portfolio', 'shuttle', 'invisible', 'timing', 'engagement', 'ankle', 'transaction', 'rescue', 'counterpart', 'historically', 'firmly', 'mild', 'rider', 'doll', 'noon', 'exhibit', 'amid', 'identical', 'precise', 'anxious', 'structural', 'residential', 'loud', 'diagnose', 'carbohydrate', 'liberty', 'poster', 'theology', 'nonprofit', 'crawl', 'oxygen', 'handsome', 'magic', 'sum', 'provided', 'businessman', 'promising', 'conscious', 'determination', 'donor', 'hers', 'pastor', 'jazz', 'opera', 'Japanese', 'bite', 'frame', 'evil', 'acquisition', 'pit', 'hug', 'wildlife', 'punish', 'giant', 'primary', 'equity', 'wrong', 'doorway', 'departure', 'elevator', 'teenage', 'guidance', 'happiness', 'statue', 'pursuit', 'repair', 'decent', 'gym', 'oral', 'clerk', 'Israeli', 'envelope', 'reporting', 'destination', 'fist', 'endorse', 'exploration', 'generous', 'bath', 'rescue', 'thereby', 'overall', 'indicator', 'sunlight', 'feedback', 'spectrum', 'purple', 'laser', 'bold', 'reluctant', 'starting', 'expertise', 'practically', 'program', 'picture', 'tune', 'eating', 'age', 'volunteer', 'hint', 'sharply', 'parade', 'advocate', 'realm', 'ban', 'strip', 'cancel', 'blend', 'therapist', 'slice', 'peel', 'pizza', 'recipient', 'hesitate', 'flip', 'accounting', 'debate', 'bias', 'huh', 'metaphor', 'candle', 'handle', 'worry', 'judicial', 'entity', 'suffering', 'full', 'feel', 'lamp', 'garbage', 'servant', 'addition', 'regulatory', 'diplomatic', 'elegant', 'inside', 'reception', 'vanish', 'automatically', 'chin', 'trail', 'necessity', 'confess', 'racism', 'starter', 'interior', 'banking', 'casual', 'gravity', 'enroll', 'diminish', 'prevention', 'Arab', 'value', 'minimize', 'chop', 'performer', 'intent', 'isolate', 'pump', 'inventory', 'productive', 'assembly', 'civic', 'silk', 'magnitude', 'steep', 'hostage', 'collector', 'popularity', 'kiss', 'alien', 'dynamic', 'scary', 'equation', 'angel', 'switch', 'offering', 'rage', 'photography', 'repair', 'toilet', 'disappointed', 'precious', 'prohibit', 'representative', 'content', 'realistic', 'Russian', 'hidden', 'command', 'tender', 'wake', 'gathering', 'outstanding', 'stumble', 'lonely', 'automobile', 'artificial', 'dawn', 'abstract', 'descend', 'silly', 'hook', 'tide', 'shared', 'hopefully', 'readily', 'cooperate', 'revolutionary', 'romance', 'hardware', 'pillow', 'kit', 'cook', 'spread', 'continent', 'seal', 'circuit', 'sink', 'ruling', 'shortage', 'annually', 'lately', 'trap', 'scan', 'fool', 'deadline', 'rear', 'processing', 'ranch', 'coastal', 'undertake', 'softly', 'reserve', 'burning', 'verbal', 'tribal', 'ridiculous', 'automatic', 'diamond', 'credibility', 'import', 'spring', 'way', 'divine', 'sentiment', 'cart', 'oversee', 'stem', 'elder', 'pro', 'inspiration', 'Dutch', 'quantity', 'trailer', 'mate', 'o', 'Greek', 'genius', 'monument', 'bid', 'quest', 'sacrifice', 'invitation', 'accuracy', 'juror', 'officially', 'broker', 'treasure', 'loyalty', 'credit', 'shock', 'talented', 'gasoline', 'stiff', 'output', 'nominee', 'extended', 'please', 'diabetes', 'slap', 'toxic', 'alleged', 'jaw', 'grief', 'mysterious', 'rocket', 'donate', 'inmate', 'tackle', 'dynamics', 'bow', 'ours', 'senior', 'dignity', 'carpet', 'parental', 'bubble', 'heat', 'buddy', 'barn', 'sword', 'flash', 'seventh', 'glory', 'tightly', 'protective', 'tuck', 'drum', 'faint', 'post', 'queen', 'dilemma', 'input', 'specialize', 'northeast', 'shallow', 'liability', 'sail', 'merchant', 'stadium', 'improved', 'bloody', 'defeat', 'associated', 'withdrawal', 'refrigerator', 'nest', 'near', 'thoroughly', 'lane', 'ancestor', 'condemn', 'steam', 'accent', 'escape', 'optimistic', 'unite', 'cage', 'equip', 'shrimp', 'homeland', 'exchange', 'rack', 'costume', 'wolf', 'courtroom', 'statute', 'cartoon', 'besides', 'productivity', 'grin', 'symbolic', 'seal', 'bug', 'bless', 'aunt', 'agriculture', 'rock', 'hostile', 'root', 'conceive', 'combined', 'instantly', 'bankruptcy', 'vaccine', 'bonus', 'collaboration', 'mixed', 'opposed', 'orbit', 'grasp', 'patience', 'spite', 'tropical', 'voting', 'patrol', 'willingness', 'position', 'revelation', 'rent', 'calm', 'jewelry', 'Cuban', 'haul', 'concede', 'trace', 'wagon', 'afterward', 'spectacular', 'ruin', 'sheer', 'prior', 'immune', 'reliability', 'ass', 'alongside', 'bush', 'exotic', 'fascinating', 'secure', 'clip', 'thigh', 'bull', 'drawer', 'regard', 'sheep', 'discourage', 'coordinator', 'ideological', 'runner', 'secular', 'intimate', 'empire', 'cab', 'divorce', 'exam', 'documentary', 'neutral', 'biology', 'flexible', 'progressive', 'web', 'conspiracy', 'catch', 'casualty', 'republic', 'execution', 'terrific', 'whale', 'functional', 'star', 'draft', 'instinct', 'teammate', 'aluminum', 'whoever', 'ministry', 'verdict', 'instruct', 'skull', 'self', 'ease', 'cooperative', 'manipulate', 'bee', 'practitioner', 'loop', 'edit', 'whip', 'puzzle', 'mushroom', 'subsidy', 'boil', 'tragic', 'mathematics', 'mechanic', 'jar', 'respect', 'earthquake', 'pork', 'creativity', 'safely', 'underlying', 'dessert', 'sympathy', 'fisherman', 'incredibly', 'isolation', 'sock', 'near', 'jump', 'eleven', 'entrepreneur', 'syndrome', 'bureau', 'seat', 'workplace', 'ambition', 'touchdown', 'utilize', 'breeze', 'costly', 'ambitious', 'Christianity', 'presumably', 'influential', 'translation', 'uncertain', 'dissolve', 'object', 'statistical', 'gut', 'metropolitan', 'rolling', 'aesthetic', 'spell', 'insert', 'booth', 'helmet', 'waist', 'expected', 'lion', 'accomplishment', 'royal', 'panic', 'cast', 'crush', 'actively', 'cliff', 'minimal', 'cord', 'fortunately', 'cocaine', 'illusion', 'anonymous', 'tolerate', 'appreciation', 'commissioner', 'harm', 'flexibility', 'instructional', 'scramble', 'casino', 'tumor', 'decorate', 'sort', 'charge', 'pulse', 'equivalent', 'fixed', 'experienced', 'donation', 'diary', 'sibling', 'irony', 'spoon', 'midst', 'alley', 'upset', 'interact', 'soap', 'cute', 'rival', 'short', 'punch', 'pin', 'hockey', 'passing', 'persist', 'supplier', 'known', 'momentum', 'purse', 'shed', 'liquid', 'icon', 'elephant', 'consequently', 'legislature', 'associate', 'franchise', 'correctly', 'mentally', 'foster', 'bicycle', 'encouraging', 'cheat', 'access', 'heal', 'fever', 'filter', 'rabbit', 'coin', 'exploit', 'accessible', 'organism', 'sensation', 'partially', 'stay', 'upstairs', 'dried', 'minimum', 'pro', 'conservation', 'shove', 'backyard', 'charter', 'stove', 'consent', 'comprise', 'reminder', 'alike', 'placement', 'dough', 'grandchild', 'dam', 'reportedly', 'well', 'surrounding', 'ecological', 'outfit', 'unprecedented', 'columnist', 'workout', 'preliminary', 'patent', 'shy', 'quote', 'trash', 'disabled', 'gross', 'hormone', 'texture', 'counter', 'pencil', 'associate', 'frontier', 'spray', 'bet', 'disclose', 'custody', 'banker', 'beast', 'interfere', 'oak', 'case', 'eighth', 'notebook', 'outline', 'gaze', 'attendance', 'speculation', 'uncover', 'behalf', 'innovative', 'shark', 'reward', 'mill', 'installation', 'stimulate', 'tag', 'vertical', 'swimming', 'fleet', 'catalog', 'outsider', 'sacrifice', 'desperately', 'stance', 'compel', 'sensitivity', 'someday', 'instant', 'debut', 'proclaim', 'worldwide', 'hike', 'required', 'confrontation', 'colorful', 'ideal', 'constitution', 'trainer', 'Thanksgiving', 'scent', 'stack', 'eyebrow', 'sack', 'cease', 'inherit', 'tray', 'pioneer', 'organizational', 'textbook', 'uh', 'nasty', 'shrink', 'model', 'emerging', 'dot', 'wheat', 'fierce', 'envision', 'rational', 'kingdom', 'aisle', 'weaken', 'protocol', 'exclusively', 'vocal', 'marketplace', 'openly', 'unfair', 'terrain', 'deploy', 'risky', 'pasta', 'genre', 'distract', 'merit', 'planner', 'depressed', 'chunk', 'closest', 'discount', 'no', 'ladder', 'jungle', 'migration', 'breathing', 'invade', 'hurricane', 'retailer', 'classify', 'wound', 'coup', 'aid', 'ambassador', 'density', 'supportive', 'curiosity', 'skip', 'aggression', 'stimulus', 'journalism', 'robot', 'flood', 'dip', 'likewise', 'informal', 'Persian', 'feather', 'sphere', 'tighten', 'boast', 'pat', 'perceived', 'sole', 'publicity', 'major', 'unfold', 'joke', 'well', 'validity', 'ecosystem', 'strictly', 'partial', 'collar', 'weed', 'compliance', 'streak', 'supposedly', 'added', 'builder', 'glimpse', 'premise', 'specialty', 'deem', 'artifact', 'sneak', 'monkey', 'mentor', 'two', 'listener', 'lightning', 'legally', 'sleeve', 'disappointment', 'disturb', 'rib', 'excessive', 'high', 'debris', 'pile', 'rod', 'logical', 'liberal', 'ash', 'socially', 'parish', 'slavery', 'blank', 'commodity', 'cure', 'mineral', 'hunger', 'dying', 'developmental', 'faster', 'spare', 'halfway', 'cure', 'equality', 'cemetery', 'harassment', 'deliberately', 'fame', 'regret', 'striking', 'likelihood', 'carrot', 'atop', 'toll', 'rim', 'embarrassed', 'cling', 'isolated', 'blink', 'suspicious', 'hay', 'squad', 'eligible', 'processor', 'plunge', 'this', 'sponsor', 'grin', 'color', 'demographic', 'rain', 'chill', 'refuge', 'steer', 'legislator', 'rally', 'programming', 'cheer', 'outlet', 'intact', 'vendor', 'thrive', 'peanut', 'chew', 'elaborate', 'intellectual', 'conception', 'auction', 'steak', 'comply', 'triumph', 'shareholder', 'comparable', 'transport', 'conscience', 'calculation', 'considerably', 'interval', 'scratch', 'awake', 'jurisdiction', 'inevitably', 'feminist', 'constraint', 'emotionally', 'expedition', 'allegedly', 'compromise', 'strain', 'similarity', 'lid', 'dumb', 'bulk', 'sprinkle', 'mortality', 'philosophical', 'conversion', 'patron', 'municipal', 'any', 'liver', 'harmony', 'solely', 'tolerance', 'instant', 'goat', 'arm', 'blessing', 'banana', 'running', 'palace', 'formerly', 'peasant', 'neat', 'grandparent', 'lawmaker', 'supermarket', 'cruise', 'mobile', 'plain', 'part', 'calendar', 'widow', 'deposit', 'beard', 'brake', 'downtown', 'screening', 'impulse', 'forbid', 'fur', 'brutal', 'predator', 'poke', 'opt', 'voluntary', 'trouble', 'valid', 'forum', 'dancing', 'happily', 'soar', 'removal', 'autonomy', 'enact', 'round', 'thread', 'light', 'landmark', 'unhappy', 'offender', 'coming', 'privately', 'fraction', 'distinctive', 'tourism', 'threshold', 'calm', 'routinely', 'suite', 'remark', 'regulator', 'straw', 'theological', 'apart', 'exhaust', 'globe', 'fragile', 'objection', 'chemistry', 'old', 'crowded', 'circle', 'blast', 'prevail', 'overnight', 'denial', 'rental', 'fantastic', 'fragment', 'level', 'screw', 'warmth', 'undergraduate', 'liquid', 'headache', 'policeman', 'yield', 'projection', 'battle', 'suitable', 'mention', 'graduation', 'drill', 'cruel', 'mansion', 'regard', 'grape', 'authorize', 'cottage', 'driveway', 'charm', 'loyal', 'clay', 'pound', 'balloon', 'invention', 'ego', 'fare', 'homework', 'disc', 'sofa', 'guarantee', 'availability', 'radar', 'frown', 'regain', 'leave', 'permit', 'sweater', 'rehabilitation', 'rubber', 'retreat', 'molecule', 'freely', 'favorable', 'steadily', 'veteran', 'integrated', 'ha', 'youngster', 'broadcast', 'premium', 'accountability', 'overwhelm', 'one', 'contemplate', 'update', 'spark', 'ironically', 'fatigue', 'beyond', 'speculate', 'marker', 'low', 'preach', 'bucket', 'bomb', 'blond', 'confession', 'provoke', 'marble', 'substantially', 'twist', 'defender', 'fish', 'explicit', 'transport', 'disturbing', 'surveillance', 'magnetic', 'technician', 'mutter', 'devastating', 'depart', 'arrow', 'trauma', 'neighboring', 'soak', 'ribbon', 'meantime', 'transmit', 'screen', 'harvest', 'consecutive', 'republican', 'coordinate', 'worldwide', 'within', 'spy', 'slot', 'riot', 'nutrient', 'citizenship', 'severely', 'sovereignty', 'ridge', 'brave', 'lighting', 'specify', 'contributor', 'frustrate', 'crowd', 'articulate', 'importantly', 'transit', 'dense', 'seminar', 'electronics', 'sunny', 'shorts', 'swell', 'accusation', 'soften', 'photograph', 'straighten', 'terribly', 'cue', 'sudden', 'bride', 'biography', 'hazard', 'compelling', 'seldom', 'tile', 'economically', 'honestly', 'troubled', 'bow', 'twentieth', 'balanced', 'foreigner', 'launch', 'convenience', 'delight', 'weave', 'timber', 'till', 'accurately', 'plea', 'bulb', 'copy', 'flying', 'sustainable', 'devil', 'bolt', 'cargo', 'spine', 'seller', 'skilled', 'managing', 'public', 'marine', 'dock', 'organized', 'fog', 'diplomat', 'boring', 'sometime', 'summary', 'missionary', 'epidemic', 'fatal', 'trim', 'warehouse', 'accelerate', 'butterfly', 'bronze', 'drown', 'inherent', 'praise', 'nationwide', 'spit', 'harvest', 'kneel', 'vacuum', 'selected', 'dictate', 'stereotype', 'sensor', 'laundry', 'manual', 'pistol', 'naval', 'plaintiff', 'kid', 'middle', 'apology', 'till'];

module.exports = common_5000Words;

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rightHandedWords = ['hi', 'hili', 'hill', 'hillo', 'hilly', 'hilum', 'him', 'hin', 'hinny', 'hip', 'hippo', 'hippy', 'hm', 'hmm', 'ho', 'hokily', 'hokku', 'hokum', 'hokypoky', 'holily', 'holk', 'hollo', 'holloo', 'holly', 'holm', 'holmium', 'holp', 'holy', 'homily', 'hominy', 'homonym', 'homonymy', 'homophony', 'homy', 'hon', 'honk', 'honky', 'hook', 'hookup', 'hooky', 'hooly', 'hoop', 'hoopoo', 'hop', 'hoppy', 'hoy', 'huh', 'huipil', 'hulk', 'hulky', 'hull', 'hullo', 'hum', 'hump', 'humph', 'humpy', 'hun', 'hunh', 'hunk', 'hunky', 'hup', 'hymn', 'hyp', 'hypo', 'hypolimnion', 'hypopyon', 'ikon', 'ilium', 'ilk', 'ill', 'illinium', 'illy', 'imino', 'immy', 'imp', 'impi', 'imply', 'in', 'inion', 'ink', 'inky', 'inly', 'inn', 'inulin', 'ion', 'ionium', 'jill', 'jillion', 'jiminy', 'jimminy', 'jimmy', 'jimp', 'jimply', 'jimpy', 'jin', 'jink', 'jinn', 'jinni', 'jo', 'john', 'johnny', 'join', 'jokily', 'joky', 'jollily', 'jolly', 'jouk', 'joy', 'joypop', 'juju', 'jump', 'jumpily', 'jumpy', 'jun', 'junk', 'junky', 'jupon', 'khi', 'khoum', 'kilim', 'kill', 'killjoy', 'kiln', 'kilo', 'kimono', 'kin', 'kinin', 'kino', 'kip', 'knoll', 'knolly', 'knop', 'kohl', 'koi', 'kolo', 'konk', 'kook', 'kooky', 'kop', 'koph', 'li', 'lily', 'limn', 'limo', 'limp', 'limpkin', 'limply', 'limuli', 'limy', 'lin', 'linin', 'link', 'linkup', 'linky', 'linn', 'lino', 'linum', 'liny', 'lion', 'lip', 'lipin', 'lippy', 'lo', 'loin', 'loll', 'lollipop', 'lollop', 'lolly', 'lollypop', 'loo', 'look', 'lookup', 'loom', 'loon', 'loony', 'loop', 'loopy', 'lop', 'loppy', 'loup', 'lull', 'lulu', 'lum', 'lump', 'lumpily', 'lumpy', 'lunk', 'luny', 'lupin', 'lupulin', 'lymph', 'mho', 'mi', 'mil', 'milium', 'milk', 'milkily', 'milky', 'mill', 'millimho', 'milliohm', 'million', 'milo', 'mim', 'mini', 'minikin', 'minim', 'minimill', 'minimum', 'minion', 'minium', 'mink', 'minny', 'mm', 'mo', 'moil', 'mojo', 'mol', 'moll', 'molly', 'moly', 'mom', 'momi', 'mommy', 'mon', 'monk', 'mono', 'monohull', 'monophony', 'monophyly', 'monopoly', 'mony', 'moo', 'mool', 'moon', 'moonily', 'moony', 'mop', 'mopy', 'moujik', 'moulin', 'mu', 'muhly', 'mujik', 'mukluk', 'mull', 'mullion', 'mum', 'mumm', 'mummy', 'mump', 'mumu', 'mun', 'muni', 'munnion', 'muon', 'muonium', 'muumuu', 'my', 'myopy', 'nihil', 'nil', 'nill', 'nim', 'ninny', 'ninon', 'nip', 'nippily', 'nippy', 'no', 'noh', 'noil', 'noily', 'nolo', 'nom', 'nomoi', 'nonillion', 'nonoily', 'nonunion', 'nonyl', 'noo', 'nook', 'nooky', 'noon', 'noun', 'nu', 'null', 'nun', 'nylon', 'nymph', 'nympho', 'oh', 'ohm', 'oho', 'oil', 'oilily', 'oily', 'oink', 'olio', 'om', 'on', 'onion', 'oniony', 'onium', 'only', 'ooh', 'oomph', 'op', 'opinion', 'opium', 'ouph', 'oy', 'phi', 'phon', 'phonily', 'phono', 'phonon', 'phony', 'phyllo', 'phylon', 'phylum', 'pi', 'piki', 'pili', 'pill', 'pillion', 'pily', 'pimp', 'pimply', 'pin', 'pinion', 'pink', 'pinkly', 'pinko', 'pinky', 'pinny', 'pinon', 'pinup', 'piny', 'pinyin', 'pinyon', 'pion', 'pip', 'pipkin', 'pippin', 'pipy', 'piu', 'plink', 'plonk', 'plop', 'ploy', 'plum', 'plummy', 'plump', 'plumply', 'plumy', 'plunk', 'ply', 'poh', 'poi', 'poilu', 'pokily', 'poky', 'pol', 'polio', 'poll', 'pollinium', 'polo', 'polonium', 'poly', 'polynyi', 'polyp', 'polyphony', 'polypi', 'pom', 'pommy', 'pomp', 'pompom', 'pompon', 'pony', 'pooh', 'pool', 'poon', 'poop', 'pop', 'poplin', 'poppy', 'poyou', 'pul', 'puli', 'pulik', 'pull', 'pullup', 'pulp', 'pulpily', 'pulpy', 'pump', 'pumpkin', 'pun', 'punily', 'punk', 'punkin', 'punky', 'punny', 'puny', 'pup', 'pupil', 'puppy', 'pyin', 'pylon', 'uh', 'ulu', 'um', 'umm', 'ump', 'un', 'unhip', 'unholily', 'unholy', 'unhook', 'union', 'unlink', 'unpin', 'up', 'uphill', 'uplink', 'upo', 'upon', 'yill', 'yin', 'yip', 'yo', 'yok', 'yolk', 'yolky', 'yom', 'yomim', 'yon', 'yoni', 'you', 'youpon', 'yuk', 'yum', 'yummy', 'yup', 'yupon'];

module.exports = rightHandedWords;

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = startSong;

var _keyboard = __webpack_require__(17);

var _text_field = __webpack_require__(18);

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

	(0, _song_handling.playSong1)().play();

	(0, _keyboard.keyboard)();

	(0, _text_field2.default)();

	// handleBeats();
}
// import handleBeats from "../../actions/beat_handling";

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dict = __webpack_require__(19);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dict = exports.dict = ['Hello World!', 'alleviate'];

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map