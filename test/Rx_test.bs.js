// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Jest from "@glennsl/bs-jest/src/jest.js";
import * as Rxjs from "rxjs";
import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Operators from "rxjs/operators";

var oneObs = Rxjs.Observable.create((function (obs) {
        obs.next(10);
        obs.complete();
        return /* () */0;
      }));

var twoObs = Rxjs.Observable.create((function (obs) {
        obs.next(100);
        obs.next(200);
        obs.complete();
        return /* () */0;
      }));

Jest.describe("Expect", (function (param) {
        Jest.test("Sample test", (function (param) {
                return Jest.Expect[/* toBe */2](3, Jest.Expect[/* expect */0](3));
              }));
        return Jest.testAsync("Rx.create - Create observable using static method", undefined, (function (finish) {
                      var obs = Rxjs.Observable.create((function (obs) {
                              obs.next(20);
                              obs.complete();
                              return /* () */0;
                            }));
                      obs.subscribe((function (value) {
                              return Curry._1(finish, Jest.Expect[/* toBe */2](20, Jest.Expect[/* expect */0](value)));
                            }));
                      return /* () */0;
                    }));
      }));

Jest.describe("combineLatest", (function (param) {
        Jest.testAsync("combineLatest2", undefined, (function (finish) {
                var testObs = Rxjs.combineLatest(twoObs, oneObs);
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toEqual */12](/* tuple */[
                                        200,
                                        10
                                      ], Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        return Jest.testAsync("combineLatest6", undefined, (function (finish) {
                      var testObs = Rxjs.combineLatest(oneObs, oneObs, oneObs, oneObs, oneObs, oneObs);
                      testObs.subscribe((function (value) {
                              return Curry._1(finish, Jest.Expect[/* toEqual */12](/* tuple */[
                                              10,
                                              10,
                                              10,
                                              10,
                                              10,
                                              10
                                            ], Jest.Expect[/* expect */0](value)));
                            }));
                      return /* () */0;
                    }));
      }));

Jest.describe("Static operators", (function (param) {
        Jest.testAsync("concat", undefined, (function (finish) {
                var testObs = Curry._1(Operators.reduce((function (acc, n, _i) {
                            return $$Array.append(acc, /* array */[n]);
                          }), /* array */[]), Rxjs.concat(oneObs, twoObs, oneObs));
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toEqual */12](/* array */[
                                        10,
                                        100,
                                        200,
                                        10
                                      ], Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        Jest.testAsync("defer", 100, (function (finish) {
                var testObs = Rxjs.defer((function () {
                        return oneObs;
                      }));
                testObs.subscribe((function (value) {
                        return Curry._1(finish, Jest.Expect[/* toBe */2](10, Jest.Expect[/* expect */0](value)));
                      }));
                return /* () */0;
              }));
        return Jest.testAsync("deferArray", 100, (function (finish) {
                      var testObs = Rxjs.defer((function (param) {
                              return /* array */[20];
                            }));
                      testObs.subscribe((function (value) {
                              return Curry._1(finish, Jest.Expect[/* toBe */2](20, Jest.Expect[/* expect */0](value)));
                            }));
                      return /* () */0;
                    }));
      }));

export {
  oneObs ,
  twoObs ,
  
}
/* oneObs Not a pure module */
