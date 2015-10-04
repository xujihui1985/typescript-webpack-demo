var Hello = (function () {
    function Hello(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     *
     */
    Hello.prototype.getNumber = function (name) {
        return this.x + this.y;
    };
    return Hello;
})();
exports.__esModule = true;
exports["default"] = Hello;
