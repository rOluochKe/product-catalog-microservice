"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRepository_1 = require("../../data-layer/data-abstracts/repositories/ProductRepository");
const mongoose = require("mongoose");
class ProductDataAgent {
    constructor() { }
    createNewProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            let newProduct = (product);
            if (newProduct.id) {
                let productObj = yield ProductRepository_1.ProductRepo.findOne({ productId: newProduct.id });
                if (productObj && productObj.ownerId != newProduct.ownerId) {
                    return { thrown: true, success: false, status: 403, message: "you are not the owner of Product" };
                }
            }
            let addUpdateProduct = yield ProductRepository_1.ProductRepo.create(newProduct);
            console.log(addUpdateProduct);
            if (addUpdateProduct.errors) {
                return { thrown: true, success: false, status: 422, message: "db is currently unable to process request" };
            }
            return addUpdateProduct;
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            let objectId = mongoose.Types.ObjectId;
            if (!objectId.isValid(productId)) {
                return { status: 401, message: "incorrect product id" };
            }
            let result = yield ProductRepository_1.ProductRepo.findById(productId);
            if (result.errors) {
                return { thrown: true, success: false, status: 422, message: "db is currently unable to process request" };
            }
            return result;
        });
    }
}
exports.ProductDataAgent = ProductDataAgent;
//# sourceMappingURL=ProductDataAgent.js.map