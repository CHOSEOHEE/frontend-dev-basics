var _JQuery = function(elements) {
	this.length = elements.length;
	for(var i = 0; i < this.length; i++) {
		this[i] = elements[i];
	}
		
}

_JQuery.prototype.jquery = '0.0.1';
_JQuery.prototype.click = function(callback) {
	for(var i = 0; i < this.length; i++) {
		this[i].addEventListener('click', callback);
	}
}

_JQuery.prototype.css = function(name, value) {
	for(var i = 0; i < this.length; i++) {
		this[i].style[name] = value;
	}
}

var jQuery = function(param) {
	if(typeof(param) === 'function') {
		window.addEventListener('load', param);
		return;
	}
	
	var elements;
	
	if(typeof(param) === 'string') {
		elements = document.querySelectorAll(param);
		
	}
	
	return new _jQuery(elements ? elements : {length: 0});
	// return new _JQuery(elements || {length: 0});
	
}

var $ = jQuery;