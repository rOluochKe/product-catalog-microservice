"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * MongooseSchema
 * @type {"mongoose".Schema}
 * @private
 */
let ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        index: { unique: true, dropDups: true }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    ownerId: {
        type: String,
        required: true
    },
    feedbackEmail: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true
    }, category: {
        type: String,
        required: true
    }, brand: {
        id: {
            type: Number
        }, name: {
            type: String
        }
    }, desc: [{
            _id: false,
            lang: {
                type: String
            }, val: {
                type: String
            }
        }], shipping: {
        dimensions: {
            height: {
                type: Number
            }, length: {
                type: Number
            }, width: {
                type: Number
            }
        }, weight: {
            type: Number
        }
    }, attrs: [{
            _id: false,
            name: {
                type: String
            }, value: {
                type: String
            }
        }]
});
exports.ProductSchema = ProductSchema;
ProductSchema.pre("save", (next) => {
    if (this._doc) {
        let doc = this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.lastUpdated = now;
    }
    next();
});
//# sourceMappingURL=ProductSchema.js.map