export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type NavigationConfig = {
  mainNav: MainNavItem[];
};
