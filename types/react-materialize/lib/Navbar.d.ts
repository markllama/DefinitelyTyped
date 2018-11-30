import * as React from 'react';

interface NavItemProps {
  brand?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  left?: boolean;
  centerLogo?: boolean;
  href?: string;
  fixed?: boolean;
  options?: any;
}

interface NavItem extends React.Component<NavItemProps, any> {}

export = NavItem;
