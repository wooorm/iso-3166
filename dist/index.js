"use strict";
/**
 * @typedef {import('./1.js').ISO31661AssignedEntry} ISO31661AssignedEntry
 * @typedef {import('./1-reserved.js').ISO31661ReservedEntry} ISO31661ReservedEntry
 * @typedef {ISO31661AssignedEntry|ISO31661ReservedEntry} ISO31661Entry
 * @typedef {import('./2.js').ISO31662Entry} ISO31662Entry
 * @typedef {import('./3.js').ISO31663Entry} ISO31663Entry
 * @typedef {ISO31663Entry['type']} Type
 * @typedef {ISO31661Entry['state']} State
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.iso31663 = exports.iso31662 = exports.iso31661Reserved = exports.iso31661NumericToAlpha2 = exports.iso31661Alpha3ToAlpha2 = exports.iso31661Alpha2ToNumeric = exports.iso31661Alpha2ToAlpha3 = exports.iso31661 = void 0;
var _1_1 = require("./1");
Object.defineProperty(exports, "iso31661", { enumerable: true, get: function () { return _1_1.iso31661; } });
var _1_a2_to_1_a3_js_1 = require("./1-a2-to-1-a3.js");
Object.defineProperty(exports, "iso31661Alpha2ToAlpha3", { enumerable: true, get: function () { return _1_a2_to_1_a3_js_1.iso31661Alpha2ToAlpha3; } });
var _1_a2_to_1_n_js_1 = require("./1-a2-to-1-n.js");
Object.defineProperty(exports, "iso31661Alpha2ToNumeric", { enumerable: true, get: function () { return _1_a2_to_1_n_js_1.iso31661Alpha2ToNumeric; } });
var _1_a3_to_1_a2_js_1 = require("./1-a3-to-1-a2.js");
Object.defineProperty(exports, "iso31661Alpha3ToAlpha2", { enumerable: true, get: function () { return _1_a3_to_1_a2_js_1.iso31661Alpha3ToAlpha2; } });
var _1_n_to_1_a2_js_1 = require("./1-n-to-1-a2.js");
Object.defineProperty(exports, "iso31661NumericToAlpha2", { enumerable: true, get: function () { return _1_n_to_1_a2_js_1.iso31661NumericToAlpha2; } });
var _1_reserved_js_1 = require("./1-reserved.js");
Object.defineProperty(exports, "iso31661Reserved", { enumerable: true, get: function () { return _1_reserved_js_1.iso31661Reserved; } });
var _2_js_1 = require("./2.js");
Object.defineProperty(exports, "iso31662", { enumerable: true, get: function () { return _2_js_1.iso31662; } });
var _3_js_1 = require("./3.js");
Object.defineProperty(exports, "iso31663", { enumerable: true, get: function () { return _3_js_1.iso31663; } });
