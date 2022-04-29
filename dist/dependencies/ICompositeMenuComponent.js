"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IComponentMenu = void 0;
class IComponentMenu {
    constructor(enable, name, type) {
        this.enable = enable;
        this.name = name;
        this.type = type;
    }
    /**
     * Optionally, the base Component can declare an interface for setting and
     * accessing a parent of the component in a tree structure. It can also
     * provide some default implementation for these methods.
     */
    setParent(parent) {
        this.parent = parent;
    }
    getParent() {
        return this.parent;
    }
    getState() {
        return this.enable.reqGetState();
    }
    handleState() {
        return this.enable.reqHandleState();
    }
    /**
     * In some cases, it would be beneficial to define the child-management
     * operations right in the base Component class. This way, you won't need to
     * expose any concrete component classes to the client code, even during the
     * object tree assembly. The downside is that these methods will be empty
     * for the leaf-level components.
     */
    add(component) { }
    remove(component) { }
    /**
     * You can provide a method that lets the client code figure out whether a
     * component can bear children.
     */
    isComposite() {
        return false;
    }
}
exports.IComponentMenu = IComponentMenu;
