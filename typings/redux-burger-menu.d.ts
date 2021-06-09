declare module 'redux-burger-menu' {
  import { TOGGLE_MENU } from 'redux-burger-menu';

  interface BurgerMenu {
    isOpen: boolean;
    menuId?: string;
  }

  interface BurgerMenuWithMenuId extends BurgerMenu {
    [menuId: string]: BurgerMenu;
  }

  enum typeComponent {
    slide,
    stack,
    elastic,
    bubble,
    push,
    pushRotate,
    scaleDown,
    scaleRotate,
    fallDown,
    reveal,
  }

  type ReturnReducer = {
    type: TOGGLE_MENU;
    payload: BurgerMenu;
  };

  export function action(isOpen: boolean, menuId?: string): ReturnReducer;
  export function reducer(
    state: ReturnReducer,
    action: ReturnReducer
  ): BurgerMenuWithMenuId;
  export const decorator = (
    ComposedComponent:
      | slide
      | stack
      | elastic
      | bubble
      | push
      | pushRotate
      | scaleDown
      | scaleRotate
      | fallDown
      | reveal,
    menuId?: string
  ) => Connect;
}
