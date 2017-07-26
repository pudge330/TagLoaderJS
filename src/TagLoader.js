var TagLoader = (function() {
	var __this = {
		getJson: function(_elm) {
			return JSON.safeParse(__this.getText(_elm));
		}
		,setJson: function(_elm, _obj) {
			__this.setText(_elm, JSON.stringify(_obj));
		}
		,getText: function(_elm) {
			var _text = null;
			if (typeof window.jQuery != 'undefined' && _elm instanceof window.jQuery)
				_text = _elm.text() || _elm.html();
			else if (isObject(_elm))
				_text = _elm.innerHTML;
			else {
				var _elm = document.getElementById(_elm.replace(/^#/, ''));
				if (_elm !== null)
					_text = _elm.innerText;
			}
			return __this.removeWrap(_text);
		}
		,setText: function(_elm, _text) {
			_text = __this.applyWrap(_text);
			if (typeof window.jQuery != 'undefined' && _elm instanceof window.jQuery)
				_elm.html(_text);
			else if (isObject(_elm))
				_elm.innerHTML = _text;
			else {
				var _orgElm = _elm;
				var _elm = document.getElementById(_elm.replace(/^#/, ''));
				if (_elm !== null)
					_elm.innerHTML = _text;
				else {
					var script = document.createElement( 'script' );
					script.type = 'application/json';
					script.id = _orgElm.replace(/^#/, '');
					script.innerHTML = _text;
					document.body.appendChild(script);
				}
			}
		}
		,applyWrap: function(_text) {
			return '<!--' + _text.trim() + '-->';
		}
		,removeWrap: function(_text) {
			if (typeof _text == 'string')
				return _text.trim().replace(/(\r\n|\n|\r)/gm, ' ').replace(/\t+/gm, ' ').replace(/^<\!\-\-(.+)\-\->$/, '$1');
			return null;
		}
	};
	if(!String.prototype.trim) {
		String.prototype.trim = function() {
			return this.replace(/^\s+|\s+$/g, '');
		};
	}
	if (!window.isObject) {
		window.isObject = function(val) {
			if (val === null) { return false; }
			return ( (typeof val === 'function') || (typeof val === 'object') );
		}
	}
	if (!JSON.safeParse) {
		JSON.safeParse = function(_json) {
			if (_json === null) { return null; }
			try {
				_json = JSON.parse(_json);
			} catch(e) {
				_json = null;
			}
			return _json;
		}
	}
	return __this;
})();