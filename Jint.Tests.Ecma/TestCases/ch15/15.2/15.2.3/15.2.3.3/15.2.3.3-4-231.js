/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.3/15.2.3.3-4-231.js
 * @description Object.getOwnPropertyDescriptor - ensure that 'enumerable' property of returned object is data property with correct 'value' attribute
 */


function testcase() {
        var obj = { "property": "ownDataProperty" };

        var desc = Object.getOwnPropertyDescriptor(obj, "property");

        return desc.enumerable === true;
    }
runTestCase(testcase);
