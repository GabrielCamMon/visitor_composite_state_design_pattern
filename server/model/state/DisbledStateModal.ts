import { State } from "../../dependencies/IStateMenuComponent";
import { EnableState } from "./EnabledStateModal";
export class DisabledState extends State {
  protected state: boolean = false;
  public getState(): boolean {
    // console.log("Enable handles reqHandleState : " + this.state);
    return this.state;
  }

  public handleState(): void {
    // console.log("Disabled handles reqHandleState.");
    // console.log("Disabled wants to change the state of the context.");
    this.context.transitionTo(new EnableState());
  }
}
