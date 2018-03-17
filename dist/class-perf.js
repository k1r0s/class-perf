(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('kaop-ts')) :
	typeof define === 'function' && define.amd ? define(['exports', 'kaop-ts'], factory) :
	(factory((global.classPerf = {}),global.kaopTs));
}(this, (function (exports,kaopTs) { 'use strict';

const message = (subject, actualms, previousms) => `PERF: Measure of ${subject} took: ${actualms - previousms} ms`;

const pool = {};

const getSubject = (meta, initial) => initial || meta.target.constructor.name;

const startPerformance = mname => kaopTs.beforeMethod(meta => pool[getSubject(meta, mname)] = Date.now());

const endPerformance = mname => kaopTs.afterMethod(meta => console.info(message(getSubject(meta, mname), Date.now(), pool[getSubject(meta, mname)])));

exports.startPerformance = startPerformance;
exports.endPerformance = endPerformance;

Object.defineProperty(exports, '__esModule', { value: true });

})));
