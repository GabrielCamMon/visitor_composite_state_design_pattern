import { Context } from "./IStateMenuComponent";

export abstract class IComponentMenu {
  protected parent!: IComponentMenu | null;
  protected enable!: Context;
  protected name?: string;
  protected type?: string;

  constructor(enable: Context, name?: string, type?: string) {
    this.enable = enable;
    this.name = name;
    this.type = type;
  }

  /**
   * Optionally, the base Component can declare an interface for setting and
   * accessing a parent of the component in a tree structure. It can also
   * provide some default implementation for these methods.
   */
  public setParent(parent: IComponentMenu | null) {
    this.parent = parent;
  }

  public getParent(): IComponentMenu | null {
    return this.parent;
  }
  public getState(): boolean {
    return this.enable.reqGetState();
  }

  public handleState(): void {
    return this.enable.reqHandleState();
  }

  /**
   * In some cases, it would be beneficial to define the child-management
   * operations right in the base Component class. This way, you won't need to
   * expose any concrete component classes to the client code, even during the
   * object tree assembly. The downside is that these methods will be empty
   * for the leaf-level components.
   */
  public add(component: IComponentMenu): void {}

  public remove(component: IComponentMenu): void {}

  /**
   * You can provide a method that lets the client code figure out whether a
   * component can bear children.
   */
  public isComposite(): boolean {
    return false;
  }

  /**
   * The base Component may implement some default behavior or leave it to
   * concrete classes (by declaring the method containing the behavior as
   * "abstract").
   */
  public abstract operation(): object;
}
