// Type definitions for react-materialize 2.5
// Project: https://github.com/react-materialize/react-materialize
// Definitions by: Mark Lamourine <https://github.com/markllama>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyType
// TypeScript Version: 3.0

import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface NavbarProps {
  children: string | node ;
  divider: boolean;
  href: string;
  onClick: any;
}

export class Navbar extends React.Component<NavbarProps, any> {}
