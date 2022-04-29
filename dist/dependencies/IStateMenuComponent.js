"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Context = void 0;
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
