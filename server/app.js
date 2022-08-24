const http = require('http');
const {add} = require('../server/calc')
const {substract} = require('../server/calc')
const {multiply} = require('../server/calc')
const {divide} = require('../server/calc')

http.createServer((req, res)=>{
    var ans = multiply(6, 4);
    res.write(ans.toString());
    res.write('\n')
    ans = add(3, 5);
    res.write(ans.toString())
    res.write('\n')
    ans = substract(3, 5);
    res.write(ans.toString())
    res.write('\n')
    ans = divide(3, 0);
    res.write(ans.toString())
    res.end();
}).listen(4000);