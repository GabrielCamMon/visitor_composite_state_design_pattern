"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logo_1 = __importDefault(require("../Logo"));
require("./styles.css");
const Footer = () => {
    return (<footer>
      <p>
        We're a team of Professional cooks who are excited about their food,
        amazing skills and expertiness in cooking.
      </p>
      <Logo_1.default />
    </footer>);
};
exports.default = Footer;
