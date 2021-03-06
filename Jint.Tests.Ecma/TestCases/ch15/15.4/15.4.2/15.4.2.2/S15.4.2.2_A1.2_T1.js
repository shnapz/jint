// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The [[Class]] property of the newly constructed object is set to "Array"
 *
 * @path ch15/15.4/15.4.2/15.4.2.2/S15.4.2.2_A1.2_T1.js
 * @description Checking use Object.prototype.toString
 */

//CHECK#1
var x = new Array(0); 
x.getClass = Object.prototype.toString;
if (x.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = new Array(0); x.getClass = Object.prototype.toString; x is Array object. Actual: ' + (x.getClass()));
}

