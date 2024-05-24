"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const ProductValidationProcessor_1 = require("../../business-layer/validator/ProductValidationProcessor");
const Logging_1 = require("../../middleware/common/Logging");
const ProductDataAgent_1 = require("../../data-layer/data-agents/ProductDataAgent");
const ProductModel_1 = require("../../data-layer/models/ProductModel");
const MyMiddleWare_1 = require("../../middleware/custom-middleware/MyMiddleWare");
let ProductsController = class ProductsController {
    constructor() {
        this.productDataAgent = new ProductDataAgent_1.ProductDataAgent();
    }
    /*
     API 1: get all listing
    */
    getProductsList() {
        return __awaiter(this, void 0, void 0, function* () {
            return { "msg": "This is first Typescript Microservice" };
        });
    }
    /*
    API 2: Get product by productId
    */
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return { "msg": "This is first Typescript Microservice" };
        });
    }
    /*
    API 3: Add update product.
    */
    addUpdateProduct(request, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let validationErrors = yield ProductValidationProcessor_1.validateProductRequest(request);
            Logging_1.logger.info("total Validation Errors for product:-", validationErrors.length);
            if (validationErrors.length > 0) {
                throw {
                    thrown: true,
                    status: 401,
                    message: 'Incorrect Input',
                    data: validationErrors
                };
            }
            let result = yield this.productDataAgent.createNewProduct(request);
            if (result.id) {
                let newProduct = new ProductModel_1.ProductModel(result);
                let newProductResult = Object.assign({ product: newProduct.getClientProductModel() });
                return res.json((newProductResult));
            }
            else {
                throw result;
            }
        });
    }
    /*
    API 4: find product by product type.
    */
    getProductByType(productType) {
        return __awaiter(this, void 0, void 0, function* () {
            return { "msg": "This is first Typescript Microservice" };
        });
    }
    /*
    API 5: Delete product by productId
    */
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(productId);
            return { "msg": "This is first Typescript Microservice" };
        });
    }
};
__decorate([
    routing_controllers_1.Get('/products-listing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductsList", null);
__decorate([
    routing_controllers_1.Get('/product-by-id/:productId'),
    routing_controllers_1.OnUndefined(404),
    __param(0, routing_controllers_1.Param("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductById", null);
__decorate([
    routing_controllers_1.Put('/add-update-product'),
    __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.Req()), __param(2, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addUpdateProduct", null);
__decorate([
    routing_controllers_1.Get('/product-by-type/:productType'),
    __param(0, routing_controllers_1.Param("productType")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductByType", null);
__decorate([
    routing_controllers_1.Delete('/product/:productId'),
    routing_controllers_1.OnUndefined(404),
    __param(0, routing_controllers_1.Param("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
ProductsController = __decorate([
    routing_controllers_1.JsonController('/products'),
    routing_controllers_1.UseBefore(MyMiddleWare_1.MyMiddleware),
    __metadata("design:paramtypes", [])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=ProductsController.js.map