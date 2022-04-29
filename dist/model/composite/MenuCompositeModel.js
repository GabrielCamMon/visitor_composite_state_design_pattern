"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeMenu = void 0;
const ICompositeMenuComponent_1 = require("../../dependencies/ICompositeMenuComponent");
/**
 * The Composite class represents the complex components that may have children.
 * Usually, the Composite objects delegate the actual work to their children and
 * then "sum-up" the result.
 */
class CompositeMenu extends ICompositeMenuComponent_1.IComponentMenu {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    /**
     * A composite object can add or remove other components (both simple or
     * complex) to or from its child list.
     */
    add(component) {
        this.children.push(component);
        component.setParent(this);
    }
    remove(component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    }
    isComposite() {
        return true;
    }
    /**
     * The Composite executes its primary logic in a particular way. It
     * traverses recursively through all its children, collecting and summing
     * their results. Since the composite's children pass these calls to their
     * children and so forth, the whole object tree is traversed as a result.
     */
    operation() {
        const results = [];
        const parent = this.getParent() ? true : false;
        for (const child of this.children) {
            results.push(child.operation());
        }
        return {
            parent,
            name: this.name,
            type: this.type,
            enabled: this.enable.reqGetState(),
            leaf: !this.isComposite(),
            children: results,
        };
    }
}
exports.CompositeMenu = CompositeMenu;
