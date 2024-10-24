export interface MenuItem {
  id: number;
  title?: string;
  icon?: string;
  link?: string;
  color?: string;
  expanded?: boolean;
  subMenu?: MenuItem[];
}

export type Menu = MenuItem[];
