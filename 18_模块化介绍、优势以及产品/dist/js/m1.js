'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.teach = teach;
/* 
    Uncaught SyntaxError: The requested module './js/m.js' does not provide an export named 'default'
*/
// 分别暴露
var school = exports.school = '中心小学';
function teach() {
    console.log('教学');
}