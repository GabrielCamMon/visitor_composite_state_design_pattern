"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Composite = exports.Leaf = exports.Component = void 0;
/**
 * The base Component class declares common operations for both simple and
 * complex objects of a composition.
 */
class Component {
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
exports.Component = Component;
/**
 * The Leaf class represents the end objects of a composition. A leaf can't have
 * any children.
 *
 * Usually, it's the Leaf objects that do the actual work, whereas Composite
 * objects only delegate to their sub-components.
 */
class Leaf extends Component {
    operation() {
        return {
            name: this.name,
            type: this.type,
            enabled: this.enable.reqGetState(),
            leaf: !this.isComposite(),
        };
    }
}
exports.Leaf = Leaf;
/**
 * The Composite class represents the complex components that may have children.
 * Usually, the Composite objects delegate the actual work to their children and
 * then "sum-up" the result.
 */
class Composite extends Component {
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
exports.Composite = Composite;
