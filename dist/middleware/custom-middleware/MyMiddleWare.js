"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyMiddleware {
    constructor() { }
    use(request, response, next) {
        console.log("custom middleware gets called.");
        next();
    }
}
exports.MyMiddleware = MyMiddleware;
//# sourceMappingURL=MyMiddleWare.js.map