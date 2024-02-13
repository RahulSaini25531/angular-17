"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myfun = void 0;
var a1 = 20;
var b1;
console.log(typeof a1, typeof b1);
var x = "raj";
x = 50;
console.log(x);
var y = 65;
y = "ram";
y = true;
console.log(typeof y);
var arr = [10, 20, 30, 40, 50];
console.log(arr);
var num = ["ten", 20, "thirty", 40, "fifty"];
console.log(num);
var arr4 = [10, "ram", 30];
console.log(arr4);
var arr5 = [10, 50, true];
console.log(arr5);
function sum(a, b, c) {
    if (c === void 0) { c = 20; }
    console.log(a + b + c);
}
sum(2, 10);
var days;
(function (days) {
    days[days["sunday"] = 0] = "sunday";
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
    days[days["wednesday"] = 3] = "wednesday";
    days[days["thrusday"] = 4] = "thrusday";
    days[days["friday"] = 5] = "friday";
    days[days["saturday"] = 6] = "saturday";
})(days || (days = {}));
console.log(days.thrusday);
console.log(days[1]);
function dummy() {
    throw Error;
}
var obj = {
    name: "Ram",
    age: 26,
};
var Employee = /** @class */ (function () {
    function Employee(n, s, e) {
        this.name = n;
        this.salary = s;
        // Employee.salary=s;
        this.email = e;
    }
    return Employee;
}());
var xyz = new Employee("Raj", 85000, "Raj@gmai.com");
var xyz1 = new Employee("Raj", 85000, "Raj@gmai.com");
var emp1 = {
    name: "Rahul",
    email: "rahulsaini3501@gmail.com",
    phone: 8588901989
};
var x1 = 23;
var obj5 = {
    name: "Rahul",
    email: "rahulsaini3501@gmail.com",
    salary: 250000
};
var sum2 = function (a, b) { return a + b; };
var sub2 = function (a, b) { return a - b; };
var mul2 = function (a, b) { return a * b; };
var div2 = function (a, b) { return a / b; };
// sum2(2,5)
function clicky(e) {
    console.log(e);
    // console.log(e.target.textContent)
    var btn = e.target;
    console.log(btn.textContent);
}
function sum5(x, y) {
    console.log(typeof x, typeof y);
}
sum5(2, 3);
sum5("hi ", "Ram");
var myfun;
(function (myfun) {
    function sum5(a, b) {
        return a + b;
    }
    myfun.sum5 = sum5;
})(myfun || (exports.myfun = myfun = {}));
console.log(myfun.sum5(2, 3));
