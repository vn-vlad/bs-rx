// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Operator from "rxjs/operator";
import * as Operators from "rxjs/operators";

function catchError(selector, stream) {
  return Curry._1(Operators.catchError(Curry.__2(selector)), stream);
}

function debounceTime(timerInMs, scheduler, param, stream) {
  return Curry._1(Operators.debounceTime(timerInMs, scheduler !== undefined ? Caml_option.valFromOption(scheduler) : undefined), stream);
}

function defer(factory, stream) {
  return Curry._1(Operators.defer((function () {
                    return Curry._1(factory, /* () */0);
                  })), stream);
}

function deferPromise(factory, stream) {
  return Curry._1(Operators.defer((function () {
                    return Curry._1(factory, /* () */0);
                  })), stream);
}

function deferArray(factory, stream) {
  return Curry._1(Operators.defer(factory), stream);
}

function filter(predicate, stream) {
  return Curry._1(Operators.filter(Curry.__1(predicate)), stream);
}

function filteri(predicate, stream) {
  return Curry._1(Operators.filter(Curry.__2(predicate)), stream);
}

function map(project, stream) {
  return Curry._1(Operators.map(Curry.__1(project)), stream);
}

function mapi(project, stream) {
  return Curry._1(Operators.map(Curry.__2(project)), stream);
}

function mergeMap(project, stream) {
  return Curry._1(Operators.mergeMap(Curry.__1(project)), stream);
}

function mergeMapArray(project, stream) {
  return Curry._1(Operators.mergeMap(Curry.__1(project)), stream);
}

function mergeMapPromise(project, stream) {
  return Curry._1(Operators.mergeMap(Curry.__1(project)), stream);
}

function switchMap(project, stream) {
  return Curry._1(Operators.switchMap(Curry.__1(project)), stream);
}

function switchToArray(project, stream) {
  return Curry._1(Operators.switchMap(Curry.__1(project)), stream);
}

function switchToPromise(project, stream) {
  return Curry._1(Operators.switchMap(Curry.__1(project)), stream);
}

function take(count, stream) {
  return Curry._1(Operators.take(count), stream);
}

function withLatestFrom2(stream, sourceStream) {
  return Curry._1(Operator.withLatestFrom(stream), sourceStream);
}

function withLatestFrom3(stream1, stream2, sourceStream) {
  return Curry._1(Operator.withLatestFrom(stream1, stream2), sourceStream);
}

function withLatestFrom4(stream1, stream2, stream3, sourceStream) {
  return Curry._1(Operator.withLatestFrom(stream1, stream2, stream3), sourceStream);
}

function withLatestFrom5(stream1, stream2, stream3, stream4, sourceStream) {
  return Curry._1(Operator.withLatestFrom(stream1, stream2, stream3, stream4), sourceStream);
}

export {
  catchError ,
  debounceTime ,
  defer ,
  deferPromise ,
  deferArray ,
  filter ,
  filteri ,
  map ,
  mapi ,
  mergeMap ,
  mergeMapArray ,
  mergeMapPromise ,
  switchMap ,
  switchToArray ,
  switchToPromise ,
  take ,
  withLatestFrom2 ,
  withLatestFrom3 ,
  withLatestFrom4 ,
  withLatestFrom5 ,
  
}
/* rxjs/operator Not a pure module */
