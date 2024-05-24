"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logging_1 = require("../common/Logging");
const Express_1 = require("./Express");
const config = require("config");
class Application {
    constructor() {
        this.express = new Express_1.ExpressConfig();
        const port = config.get('express.port');
        const debugPort = config.get('express.debug');
        this.server = this.express.app.listen(port, () => {
            Logging_1.logger.info(`
      --------------------------------------------------
       Server Started! Express: http://localhost:${port}
       Health : http://localhost:${port}/ping
       Debugger: http:/${this.server.address()}:${port}/?ws=${this.server.address()}:${port}&port=${debugPort}
      ------------------------------------------------------
      `);
        });
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map