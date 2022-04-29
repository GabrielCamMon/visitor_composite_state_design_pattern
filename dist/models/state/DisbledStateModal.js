"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisabledState = void 0;
const IStateMenuComponent_1 = require("../../dependencies/IStateMenuComponent");
const EnabledStateModal_1 = require("./EnabledStateModal");
class DisabledState extends IStateMenuComponent_1.State {
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
        this.context.transitionTo(new EnabledStateModal_1.EnableState());
    }
}
exports.DisabledState = DisabledState;
