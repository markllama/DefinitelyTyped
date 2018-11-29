// Type definitions for react-materialize 2.5
// Project: https://github.com/react-materialize/react-materialize
// Definitions by: Mark Lamourine <https://github.com/markllama>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyType
// TypeScript Version: 2.8

import * as React from 'react';

export interface NavItemProps {
  children?: string | React.ReactNode;
  divider?: boolean;
  href?: string;
  onClick?: any;
}

export class NavItem extends React.Component<NavItemProps, any> {}
