import { CompositeMenu } from "../model/composite/MenuCompositeModel";
import { LeafMenu } from "../model/composite/MenuLeafModel";
import { Context } from "../dependencies/IStateMenuComponent";
import { EnableState } from "../model/state/EnabledStateModal";
import { DisabledState } from "../model/state/DisbledStateModal";

export function CreateMenu() {
  //Root Menu
  const rootMenu = new CompositeMenu(new Context(new EnableState()));

  //Menu 1
  const menu1 = new CompositeMenu(
    new Context(new EnableState()),
    "Dough",
    "massa"
  );

  // //Submenu of Menu1
  const menu11 = new LeafMenu(
    new Context(new EnableState()),
    "Pasta",
    "noodle"
  );
  const menu12 = new CompositeMenu(
    new Context(new EnableState()),
    "Pizza",
    "pizza"
  );
  const menu121 = new LeafMenu(
    new Context(new EnableState()),
    "ThinCrust",
    "pizza"
  );
  const menu122 = new LeafMenu(
    new Context(new EnableState()),
    "LargeCrust",
    "pizza"
  );

  // //Menu2
  const menu2 = new CompositeMenu(
    new Context(new EnableState()),
    "Meets",
    "meets"
  );
  // //Submenu of Menu2
  const menu21 = new LeafMenu(
    new Context(new EnableState()),
    "Dishes",
    "dishes"
  );

  const menu22 = new LeafMenu(
    new Context(new EnableState()),
    "Hamburguer",
    "hamburguer"
  );

  //Menu3 Leaf
  const menu3 = new LeafMenu(
    new Context(new EnableState()),
    "Saladas",
    "salada"
  );

  // Menu 4

  const menu4 = new LeafMenu(
    new Context(new DisabledState()),
    "Canibal",
    "humano"
  );

  //add menus on rootMenu
  rootMenu.add(menu1);
  rootMenu.add(menu2);
  rootMenu.add(menu3);
  rootMenu.add(menu4);

  menu1.add(menu11);
  menu1.add(menu12);
  menu2.add(menu21);
  menu2.add(menu22);

  menu12.add(menu121);
  menu12.add(menu122);

  return rootMenu.operation();
}
