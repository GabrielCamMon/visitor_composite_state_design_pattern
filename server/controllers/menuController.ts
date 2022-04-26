import { Composite, Leaf, Component } from "../standartProject/composite/index";
import {
  Context,
  DisabledState,
  EnableState,
} from "../standartProject/state/index";

// function clientCode(component: Component) {
//   // ...

//   console.log(`RESULT: ${component.operation()}`);

//   // ...
// }

// function clientCode2(component1: Component, component2: Component) {
//   // ...

//   if (component1.isComposite()) {
//     component1.add(component2);
//   }
//   console.log(`RESULT: ${component1.operation()}`);

//   // ...
// }

exports.get = (req: Request, res: any, next: any) => {
  const context = new Context(new EnableState());
  const rootMenu = new Composite(context);
  // console.log(context.reqGetState());
  // context.reqHandleState();
  // console.log(context.reqGetState());
  // context.request2();
  console.log(rootMenu.getState());
  //console.log(tree.operation());
  res.send("Requisição recebida com sucesso!");
};

exports.post = async (req: Request, res: any, next: any) => {
  res.send("Requisição recebida com sucesso!");
};
