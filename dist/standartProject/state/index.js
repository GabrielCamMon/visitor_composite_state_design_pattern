"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisabledState = exports.EnableState = exports.State = exports.Context = void 0;
class Context {
    constructor(state) {
        this.transitionTo(state);
    }
    /**
     * The Context allows changing the State object at runtime.
     */
    transitionTo(state) {
        // console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }
    /**
     * The Context delegates part of its behavior to the current State object.
     */
    reqGetState() {
        return this.state.getState();
    }
    reqHandleState() {
        this.state.handleState();
    }
}
exports.Context = Context;
class State {
    setContext(context) {
        this.context = context;
    }
}
exports.State = State;
class EnableState extends State {
    constructor() {
        super(...arguments);
        this.state = true;
    }
    getState() {
        // console.log("Enable handles reqHandleState. : " + this.state);
        return this.state;
    }
    handleState() {
        // console.log("Enable handles reqGetState.");
        // console.log("Enable wants to change the state of the context.");
        this.context.transitionTo(new DisabledState());
    }
}
exports.EnableState = EnableState;
class DisabledState extends State {
    constructor() {
        super(...arguments);
        this.state = false;
    }
    getState() {
        // console.log("Enable handles reqHandleState : " + this.state);
        return this.state;
    }
    handleState() {
        // console.log("Disabled handles reqHandleState.");
        // console.log("Disabled wants to change the state of the context.");
        this.context.transitionTo(new EnableState());
    }
}
exports.DisabledState = DisabledState;
