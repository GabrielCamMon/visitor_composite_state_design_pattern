"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../standartProject/composite/index");
const index_2 = require("../standartProject/state/index");
// function clientCode(component: Component) {
//   // ...
//   console.log(`RESULT: ${component.operation()}`);
//   // ...
// }
// function clientCode2(component1: Component, component2: Component) {
//   // ...
//   if (component1.isComposite()) {
//     component1.add(component2);
//   }
//   console.log(`RESULT: ${component1.operation()}`);
//   // ...
// }
exports.get = (req, res, next) => {
    const context = new index_2.Context(new index_2.EnableState());
    const rootMenu = new index_1.Composite(context);
    // console.log(context.reqGetState());
    // context.reqHandleState();
    // console.log(context.reqGetState());
    // context.request2();
    console.log(rootMenu.getState());
    //console.log(tree.operation());
    res.send("Requisição recebida com sucesso!");
};
exports.post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Requisição recebida com sucesso!");
});
