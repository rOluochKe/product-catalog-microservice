"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//here we will have getters and setters of productModel
class ProductModel {
    constructor(iProductDocument) {
        this._useModel = iProductDocument;
    }
    get id() {
        return (this._useModel.id).toString();
    }
    get shipping() {
        return JSON.stringify(this._useModel.shipping);
    }
    get desc() {
        return this._useModel.desc;
    }
    get name() {
        return this._useModel.name.toString();
    }
    get category() {
        return this._useModel.category.toString();
    }
    get attrs() {
        return this._useModel.attrs;
    }
    get feedbackEmail() {
        return this._useModel.feedbackEmail.toString();
    }
    get description() {
        return this._useModel.description.toString();
    }
    get addedAt() {
        return new Date(this._useModel.createdAt);
    }
    get ownerId() {
        return this._useModel.ownerId.toString();
    }
    getClientProductModel() {
        return Object.seal({
            id: (this._useModel.id).toString(),
            shipping: this._useModel.shipping,
            desc: this._useModel.desc,
            name: this._useModel.name.toString(),
            category: this._useModel.category.toString(),
            // attrs:this._useModel.attrs,
            feedbackEmail: this._useModel.feedbackEmail.toString()
        });
    }
}
exports.ProductModel = ProductModel;
//# sourceMappingURL=ProductModel.js.map