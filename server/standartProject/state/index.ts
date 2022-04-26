export class Context {
  /**
   * @type {State} A reference to the current state of the Context.
   */
  private state!: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  /**
   * The Context allows changing the State object at runtime.
   */
  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  /**
   * The Context delegates part of its behavior to the current State object.
   */
  public reqGetState(): boolean {
    return this.state.getState();
  }

  public reqHandleState(): void {
    this.state.handleState();
  }
}

export abstract class State {
  protected context!: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract getState(): boolean;

  public abstract handleState(): void;
}

export class EnableState extends State {
  protected state: boolean = true;

  public getState(): boolean {
    // console.log("Enable handles reqHandleState. : " + this.state);
    return this.state;
  }

  public handleState(): void {
    console.log("Enable handles reqGetState.");
    console.log("Enable wants to change the state of the context.");
    this.context.transitionTo(new DisabledState());
  }
}

export class DisabledState extends State {
  protected state: boolean = false;
  public getState(): boolean {
    // console.log("Enable handles reqHandleState : " + this.state);
    return this.state;
  }

  public handleState(): void {
    console.log("Disabled handles reqHandleState.");
    console.log("Disabled wants to change the state of the context.");
    this.context.transitionTo(new EnableState());
  }
}
