import * as React from 'react';

interface NavItemProps {
  children?: string | React.ReactNode;
  divider?: boolean;
  href?: string;
  onClick?: () => void;
}

declare class NavItem extends React.Component<NavItemProps, any> {}

export = NavItem;
