"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoAccess_1 = require("../../../data-layer/adapters/MongoAccess");
const ProductSchema_1 = require("../../../data-layer/data-abstracts/repositories/ProductSchema");
exports.ProductRepo = MongoAccess_1.MongooseAccess.mongooseConnection.model("product", ProductSchema_1.ProductSchema);
//# sourceMappingURL=ProductRepository.js.map