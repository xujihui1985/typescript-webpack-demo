import * as $ from 'jquery';
import Hello from './hello';
$('.test').on('click', (event, args) => {
    console.log(event.target);
});
let h = new Hello(1, 2);
let n = h.getNumber('sfadsadfdss');
// function *g(): Iterable<string> {
//     for (var i = 0; i < 100; i++) {
//         yield ""; // string is assignable to string
//     }
// } 
//# sourceMappingURL=index.js.map