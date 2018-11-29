// Type definitions for react-materialize 2.5
// Project: https://github.com/react-materialize/react-materialize
// Definitions by: Mark Lamourine <https://github.com/markllama>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyType
// TypeScript Version: 2.8

import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface NavbarProps {
  children: string ;
  divider: boolean;
  href: string;
  onClick(): void;
}

export class Navbar extends React.Component<NavbarProps, any> {}
