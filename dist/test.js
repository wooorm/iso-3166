"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_assert_1 = require("node:assert");
var tape_1 = require("tape");
var _1_js_1 = require("./1.js");
var _1_reserved_js_1 = require("./1-reserved.js");
var _2_js_1 = require("./2.js");
var _3_js_1 = require("./3.js");
var _1_a2_to_1_a3_js_1 = require("./1-a2-to-1-a3.js");
var _1_a2_to_1_n_js_1 = require("./1-a2-to-1-n.js");
var _1_a3_to_1_a2_js_1 = require("./1-a3-to-1-a2.js");
var _1_n_to_1_a2_js_1 = require("./1-n-to-1-a2.js");
(0, tape_1.default)('iso-3166/1', function (t) {
    /** @type {string[]} */
    var iA2s = [];
    /** @type {string[]} */
    var iA3s = [];
    /** @type {string[]} */
    var iNs = [];
    t.plan(_1_js_1.iso31661.length);
    var index = -1;
    var _loop_1 = function () {
        var d = _1_js_1.iso31661[index];
        t.doesNotThrow(function () {
            node_assert_1.default.ok(d.state === 'assigned', 'should be assigned');
            node_assert_1.default.ok(a2(d.alpha2), 'should have an alpha-2');
            node_assert_1.default.ok(!iA2s.includes(d.alpha2), 'should have a unique alpha-2');
            node_assert_1.default.ok(a3(d.alpha3), 'should have an alpha-3');
            node_assert_1.default.ok(!iA3s.includes(d.alpha3), 'should have a unique alpha-3');
            node_assert_1.default.ok(numeric(d.numeric), 'should have a numeric');
            node_assert_1.default.ok(!iNs.includes(d.numeric), 'should have a unique numeric');
            node_assert_1.default.ok(name(d.name), 'should have a name');
            iA2s.push(d.alpha2);
            iA3s.push(d.alpha3);
            iNs.push(d.numeric);
        }, d.alpha2);
    };
    while (++index < _1_js_1.iso31661.length) {
        _loop_1();
    }
});
(0, tape_1.default)('iso-3166/1-reserved', function (t) {
    /** @type {string[]} */
    var iA2s = [];
    t.plan(_1_reserved_js_1.iso31661Reserved.length);
    var index = -1;
    var _loop_2 = function () {
        var d = _1_reserved_js_1.iso31661Reserved[index];
        t.doesNotThrow(function () {
            node_assert_1.default.ok(d.state === 'indeterminately-reserved' ||
                d.state === 'exceptionally-reserved' ||
                d.state === 'transitionally-reserved' ||
                d.state === 'formerly-assigned', 'should be reserved');
            node_assert_1.default.ok(a2(d.alpha2), 'should have an alpha-2');
            node_assert_1.default.ok(!iA2s.includes(d.alpha2), 'should have a unique code');
            node_assert_1.default.ok(name(d.name), 'should have a name');
            iA2s.push(d.alpha2);
        }, d.alpha2);
    };
    while (++index < _1_reserved_js_1.iso31661Reserved.length) {
        _loop_2();
    }
});
(0, tape_1.default)('iso-3166/2', function (t) {
    /** @type {string[]} */
    var i1s = [];
    /** @type {string[]} */
    var i2sInitial = [];
    /** @type {string[]} */
    var i2s = [];
    t.plan(_2_js_1.iso31662.length);
    var index = -1;
    while (++index < _1_js_1.iso31661.length) {
        var d = _1_js_1.iso31661[index];
        i1s.push(d.alpha2);
    }
    index = -1;
    while (++index < _2_js_1.iso31662.length) {
        var d = _2_js_1.iso31662[index];
        i2sInitial.push(d.code);
    }
    index = -1;
    var _loop_3 = function () {
        var d = _2_js_1.iso31662[index];
        t.doesNotThrow(function () {
            node_assert_1.default.ok(i2(d.code), 'should have a code');
            node_assert_1.default.ok(!i2s.includes(d.code), 'should have a unique code');
            node_assert_1.default.ok(name(d.name), 'should have a name');
            node_assert_1.default.ok(i2(d.parent) || a2(d.parent), 'should have a parent');
            node_assert_1.default.ok(i2sInitial.includes(d.parent) || i1s.includes(d.parent), 'should have a known, assigned, parent');
            i2s.push(d.code);
        }, d.code);
    };
    while (++index < _2_js_1.iso31662.length) {
        _loop_3();
    }
});
(0, tape_1.default)('iso-3166/3', function (t) {
    /** @type {string[]} */
    var a4s = [];
    t.plan(_3_js_1.iso31663.length);
    var index = -1;
    var _loop_4 = function () {
        var d = _3_js_1.iso31663[index];
        t.doesNotThrow(function () {
            node_assert_1.default.ok(d.type === 'merge' || d.type === 'change' || d.type === 'split', 'should have a type');
            node_assert_1.default.ok(a4(d.alpha4), 'should have an alpha-4');
            node_assert_1.default.ok(!a4s.includes(d.alpha4), 'should have a unique alpha-4');
            node_assert_1.default.ok(d.from.state === 'formerly-assigned', 'from should be removed');
            node_assert_1.default.ok(a2(d.from.alpha2), 'from should have an alpha-2');
            node_assert_1.default.ok(a3(d.from.alpha3), 'from should have an alpha-2');
            node_assert_1.default.ok(name(d.from.name), 'from should have a name');
            if (d.from.numeric) {
                node_assert_1.default.ok(numeric(d.from.numeric), 'if there is a numeric, from should have a valid numeric');
            }
            var index = -1;
            while (++index < d.to.length) {
                var to = d.to[index];
                var label = 'to `' + to.alpha2 + '`';
                node_assert_1.default.ok(to.state === 'assigned' || to.state === 'formerly-assigned', label + ' should be removed or assigned');
                node_assert_1.default.ok(a2(to.alpha2), label + ' should have an alpha-2');
                node_assert_1.default.ok(a3(to.alpha3), label + ' should have an alpha-2');
                node_assert_1.default.ok(name(to.name), label + ' should have a name');
                node_assert_1.default.ok(numeric(to.numeric), label + ' should have a valid numeric');
            }
            a4s.push(d.alpha4);
        }, d.alpha4);
    };
    while (++index < _3_js_1.iso31663.length) {
        _loop_4();
    }
});
(0, tape_1.default)('iso-3166/1-a2-to-1-a3', function (t) {
    var keys = Object.keys(_1_a2_to_1_a3_js_1.iso31661Alpha2ToAlpha3);
    t.plan(keys.length);
    var index = -1;
    var _loop_5 = function () {
        var d = keys[index];
        t.doesNotThrow(function () {
            node_assert_1.default.ok(a2(d), 'key should be an alpha-2');
            node_assert_1.default.ok(a3(_1_a2_to_1_a3_js_1.iso31661Alpha2ToAlpha3[d]), 'value should be an alpha-3');
        }, d);
    };
    while (++index < keys.length) {
        _loop_5();
    }
});
(0, tape_1.default)('iso-3166/1-a3-to-1-a2', function (t) {
    var keys = Object.keys(_1_a3_to_1_a2_js_1.iso31661Alpha3ToAlpha2);
    t.plan(keys.length);
    var index = -1;
    var _loop_6 = function () {
        var d = keys[index];
        t.doesNotThrow(function () {
            node_assert_1.default.ok(a3(d), 'key should be an alpha-3');
            node_assert_1.default.ok(a2(_1_a3_to_1_a2_js_1.iso31661Alpha3ToAlpha2[d]), 'value should be an alpha-2');
        }, d);
    };
    while (++index < keys.length) {
        _loop_6();
    }
});
(0, tape_1.default)('iso-3166/1-a2-to-1-n', function (t) {
    var keys = Object.keys(_1_a2_to_1_n_js_1.iso31661Alpha2ToNumeric);
    t.plan(keys.length);
    var index = -1;
    var _loop_7 = function () {
        var d = keys[index];
        t.doesNotThrow(function () {
            node_assert_1.default.ok(a2(d), 'key should be an alpha-2');
            node_assert_1.default.ok(numeric(_1_a2_to_1_n_js_1.iso31661Alpha2ToNumeric[d]), 'value should be a numeric');
        }, d);
    };
    while (++index < keys.length) {
        _loop_7();
    }
});
(0, tape_1.default)('iso-3166/1-n-to-1-a2', function (t) {
    var keys = Object.keys(_1_n_to_1_a2_js_1.iso31661NumericToAlpha2);
    t.plan(keys.length);
    var index = -1;
    var _loop_8 = function () {
        var d = keys[index];
        t.doesNotThrow(function () {
            node_assert_1.default.ok(numeric(d), 'key should be a numeric');
            node_assert_1.default.ok(a2(_1_n_to_1_a2_js_1.iso31661NumericToAlpha2[d]), 'value should be an alpha-2');
        }, d);
    };
    while (++index < keys.length) {
        _loop_8();
    }
});
/**
 * @param {string} value
 * @returns {boolean}
 */
function a2(value) {
    return /^[A-Z]{2}$/.test(value);
}
/**
 * @param {string} value
 * @returns {boolean}
 */
function a3(value) {
    return /^[A-Z]{3}$/.test(value);
}
/**
 * @param {string} value
 * @returns {boolean}
 */
function a4(value) {
    return /^[A-Z]{4}$/.test(value);
}
/**
 * @param {string} value
 * @returns {boolean}
 */
function numeric(value) {
    return /^\d{3}$/.test(value);
}
/**
 * @param {string} value
 * @returns {boolean}
 */
function i2(value) {
    return /^[A-Z]{2}-[A-Z\d]{1,3}$/.test(value);
}
/**
 * @param {string} value
 * @returns {boolean}
 */
function name(value) {
    return typeof value === 'string' && value.length > 1;
}
