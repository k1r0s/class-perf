import { beforeMethod, afterMethod } from 'kaop-ts';

const message = (subject, actualms, previousms) => `PERF: Measure of ${subject} took: ${actualms - previousms} ms`;

const pool = {};

const getSubject = (meta, initial) => initial || meta.target.constructor.name;

const startPerformance = mname => beforeMethod(meta => pool[getSubject(meta, mname)] = Date.now());

const endPerformance = mname => afterMethod(meta => console.info(message(getSubject(meta, mname), Date.now(), pool[getSubject(meta, mname)])));

export { startPerformance, endPerformance };
