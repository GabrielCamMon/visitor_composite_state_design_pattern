"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./styles.css");
const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
    return (<div className="btnAddRemove">
      {quantity !== 0 ? (<div className="btnAddRemove-positive">
          <i className="fa fa-minus" aria-hidden="true" onClick={handleRemoveItem}></i>
          <span> {quantity}</span>
          <i className="fa fa-plus" aria-hidden="true" onClick={handleAddItem}></i>
        </div>) : (<div onClick={handleAddItem} className="btnAddRemove-negative">
          <span>ADD</span>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </div>)}
    </div>);
};
exports.default = ButtonAddRemoveItem;
