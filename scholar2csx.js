// 2007-04-30
// Copyright (c) 2007, punkaholic, Based on Butler script.
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// ==UserScript==
// @name            scholar2csx
// @namespace       http://
// @description     Add links to Google Scholar for CiteSeerX
// @include         http://scholar.google.*/*
// ==/UserScript==

var ScholarServices = {
	_otherWebSearches: function(q) {
		var s = '';
		s += '<a href="http://scholar.google.com/scholar?q=' + q + '">Google Scholar</a>';
		return s;
	}};

var Scholar = {
	// add arbitrary CSS styles to page
	addGlobalStyle: function(css) {
		var style = document.createElement("style");
		style.type = "text/css";
		style.innerHTML = css;
		document.getElementsByTagName('head')[0].appendChild(style);
	}};
var ScholarFunc = {
	addOtherWebSearches: function() {
		var titles = document.getElementsByTagName('H3');
		for (var t in titles) {
			titles[t].innerHTML += " - <a href=\"http://citeseerx.ist.psu.edu/search?q=" + titles[t].childNodes[0].innerHTML.replace(/<[^\>]*>/g, "") + "\">CiteSeerX</a>";
		}
	},
}
var href = window.location.href;
if (href.match(/^http:\/\/scholar\.google\.com\/[\w\.]+/i)) { 
	ScholarFunc.addOtherWebSearches();
}