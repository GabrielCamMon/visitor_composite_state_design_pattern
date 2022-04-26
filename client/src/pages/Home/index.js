"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ButtonCartCount_1 = __importDefault(require("../../components/common/ButtonCartCount"));
const Footer_1 = __importDefault(require("../../components/common/Footer"));
const Banner_1 = __importDefault(require("../../components/Home/Banner"));
const Menu_1 = __importDefault(require("../../components/common/Menu"));
const foods_1 = require("../../redux/datas/foods");
const Header_1 = __importDefault(require("../../components/common/Header"));
const Home = () => {
    const menuRef = (0, react_1.useRef)();
    const handleScrollMenu = () => {
        menuRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (<div>
      <Banner_1.default handleScrollMenu={handleScrollMenu}/>
      <div style={{ position: "relative", marginBottom: "100px" }}>
        <Header_1.default />
      </div>
      <Menu_1.default list={foods_1.menuItemsData} ref={menuRef}/>
      <Footer_1.default />
      <ButtonCartCount_1.default />
    </div>);
};
exports.default = Home;
