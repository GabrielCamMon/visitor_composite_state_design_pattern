"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeafMenu = exports.CompositeMenu = void 0;
const ICompositeMenuComponent_1 = require("../../interfaces/ICompositeMenuComponent");
/**
 * The Composite class represents the complex components that may have children.
 * Usually, the Composite objects delegate the actual work to their children and
 * then "sum-up" the result.
 */
class CompositeMenu extends ICompositeMenuComponent_1.ComponentMenu {
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
        for (const child of this.children) {
            results.push(child.operation());
        }
        return {
            name: this.name,
            type: this.type,
            enabled: this.enable.reqGetState(),
            leaf: !this.isComposite(),
            children: results,
        };
    }
}
exports.CompositeMenu = CompositeMenu;
/**
 * The base Component class declares common operations for both simple and
 * complex objects of a composition.
 */
/**
 * The Leaf class represents the end objects of a composition. A leaf can't have
 * any children.
 *
 * Usually, it's the Leaf objects that do the actual work, whereas Composite
 * objects only delegate to their sub-components.
 */
class LeafMenu extends ICompositeMenuComponent_1.ComponentMenu {
    operation() {
        return {
            name: this.name,
            type: this.type,
            enabled: this.enable.reqGetState(),
            leaf: !this.isComposite(),
        };
    }
}
exports.LeafMenu = LeafMenu;
