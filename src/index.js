var $ = require('jquery');
var hello_1 = require('./hello');
$('.test').on('click', function (event, args) {
    console.log(event.target);
});
var h = new hello_1["default"](1, 2);
h.getNumber('xxxx');
// function *g(): Iterable<string> {
//     for (var i = 0; i < 100; i++) {
//         yield ""; // string is assignable to string
//     }
// }
