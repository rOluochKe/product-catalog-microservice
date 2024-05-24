"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const config = require("config");
const logging_1 = require("../../middleware/common/logging");
Mongoose.Promise = global.Promise;
class MongooseAccess {
    constructor() {
        MongooseAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        let connectionString = config.get('mongo.urlClient').toString();
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once('open', () => {
            logging_1.logger.info('Connect to an mongodb is opened.');
        });
        this.mongooseInstance = Mongoose.connect(connectionString);
        this.mongooseConnection.on('connected', () => {
            logging_1.logger.info('Mongoose default connection open to ' + connectionString);
        });
        // If the connection throws an error
        this.mongooseConnection.on('error', (msg) => {
            logging_1.logger.info('Mongoose default connection message:', msg);
        });
        // When the connection is disconnected
        this.mongooseConnection.on('disconnected', () => {
            setTimeout(function () {
                this.mongooseInstance = Mongoose.connect(connectionString);
            }, 10000);
            logging_1.logger.info('Mongoose default connection disconnected.');
        });
        // When the connection is reconnected
        this.mongooseConnection.on('reconnected', () => {
            logging_1.logger.info('Mongoose default connection is reconnected.');
        });
        // If the Node process ends, close the Mongoose connection
        process.on('SIGINT', () => {
            this.mongooseConnection.close(() => {
                logging_1.logger.info('Mongoose default connection disconnected through app termination.');
                process.exit(0);
            });
        });
        return this.mongooseInstance;
    }
}
exports.MongooseAccess = MongooseAccess;
MongooseAccess.connect();
//# sourceMappingURL=MongoAccess.js.map