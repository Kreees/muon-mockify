require("coffee-script/register");

require("chai").should();
global.expect = require("chai").expect;
global.main = global.mockify = require("../main");