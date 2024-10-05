"use strict";
/*
 * Write 3 different functions that return promises that resolve after 1,
 * 2, and 3 seconds respectively. Write a function that uses the 3
 * functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const wait = (n) => {
    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000);
    });
};
const waitOneSecond = () => wait(1);
const waitTwoSecond = () => wait(2);
const waitThreeSecond = () => wait(3);
const calculateTime = () => __awaiter(void 0, void 0, void 0, function* () {
    const startTime = Date.now();
    yield Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;
    console.log(`Total time taken : ${timeTaken} sec`);
});
calculateTime();
