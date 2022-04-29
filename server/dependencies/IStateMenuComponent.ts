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
    // console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
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
