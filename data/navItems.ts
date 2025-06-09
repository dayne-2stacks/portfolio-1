export interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const navItems: NavItem[] = [
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/#projects" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "Contact", link: "/#contact" },
];
