import { IComponentMenu } from "../../dependencies/ICompositeMenuComponent";

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
export class LeafMenu extends IComponentMenu {
  public operation(): object {
    const parent = this.getParent() ? true : false;
    return {
      parent,
      name: this.name,
      type: this.type,
      enabled: this.enable.reqGetState(),
      leaf: !this.isComposite(),
    };
  }
}
