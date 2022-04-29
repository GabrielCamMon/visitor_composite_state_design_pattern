"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMenu = void 0;
const MenuCompositeModel_1 = require("../model/composite/MenuCompositeModel");
const MenuLeafModel_1 = require("../model/composite/MenuLeafModel");
const IStateMenuComponent_1 = require("../dependencies/IStateMenuComponent");
const EnabledStateModal_1 = require("../model/state/EnabledStateModal");
const DisbledStateModal_1 = require("../model/state/DisbledStateModal");
function CreateMenu() {
    //Root Menu
    const rootMenu = new MenuCompositeModel_1.CompositeMenu(new IStateMenuComponent_1.Context(new EnabledStateModal_1.EnableState()));
    //Menu 1
    const menu1 = new MenuCompositeModel_1.CompositeMenu(new IStateMenuComponent_1.Context(new EnabledStateModal_1.EnableState()), "Dough", "massa");
    // //Submenu of Menu1
    const menu11 = new MenuLeafModel_1.LeafMenu(new IStateMenuComponent_1.Context(new EnabledStateModal_1.EnableState()), "Pasta", "noodle");
    const menu12 = new MenuCompositeModel_1.CompositeMenu(new IStateMenuComponent_1.Context(new EnabledStateModal_1.EnableState()), "Pizza", "pizza");
    const menu121 = new MenuLeafModel_1.LeafMenu(new IStateMenuComponent_1.Context(new EnabledStateModal_1.EnableState()), "ThinCrust", "pizza");
    const menu122 = new MenuLeafModel_1.LeafMenu(new IStateMenuComponent_1.Context(new EnabledStateModal_1.EnableState()), "LargeCrust", "pizza");
    // //Menu2
    const menu2 = new MenuCompositeModel_1.CompositeMenu(new IStateMenuComponent_1.Context(new EnabledStateModal_1.EnableState()), "Meets", "meets");
    // //Submenu of Menu2
    const menu21 = new MenuLeafModel_1.LeafMenu(new IStateMenuComponent_1.Context(new EnabledStateModal_1.EnableState()), "Dishes", "dishes");
    const menu22 = new MenuLeafModel_1.LeafMenu(new IStateMenuComponent_1.Context(new EnabledStateModal_1.EnableState()), "Hamburguer", "hamburguer");
    //Menu3 Leaf
    const menu3 = new MenuLeafModel_1.LeafMenu(new IStateMenuComponent_1.Context(new EnabledStateModal_1.EnableState()), "Saladas", "salada");
    // Menu 4
    const menu4 = new MenuLeafModel_1.LeafMenu(new IStateMenuComponent_1.Context(new DisbledStateModal_1.DisabledState()), "Canibal", "humano");
    //add menus on rootMenu
    rootMenu.add(menu1);
    rootMenu.add(menu2);
    rootMenu.add(menu3);
    rootMenu.add(menu4);
    menu1.add(menu11);
    menu1.add(menu12);
    menu2.add(menu21);
    menu2.add(menu22);
    menu12.add(menu121);
    menu12.add(menu122);
    return rootMenu.operation();
}
exports.CreateMenu = CreateMenu;
