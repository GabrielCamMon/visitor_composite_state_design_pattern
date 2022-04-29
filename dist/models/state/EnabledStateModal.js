"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableState = void 0;
const IStateMenuComponent_1 = require("../../dependencies/IStateMenuComponent");
const DisbledStateModal_1 = require("./DisbledStateModal");
class EnableState extends IStateMenuComponent_1.State {
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
        this.context.transitionTo(new DisbledStateModal_1.DisabledState());
    }
}
exports.EnableState = EnableState;
