import { State } from "../../dependencies/IStateMenuComponent";
import { DisabledState } from "./DisbledStateModal";
export class EnableState extends State {
  protected state: boolean = true;

  public getState(): boolean {
    // console.log("Enable handles reqHandleState. : " + this.state);
    return this.state;
  }

  public handleState(): void {
    // console.log("Enable handles reqGetState.");
    // console.log("Enable wants to change the state of the context.");
    this.context.transitionTo(new DisabledState());
  }
}
