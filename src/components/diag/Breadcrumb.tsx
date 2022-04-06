import React from 'react';
import { SBreadcrumb } from '~components/diag/SBreadcrumb';

interface BreadcrumbProps {
  navGuide: string;
}

/**
 * Breadcrumb to indicate the users at what step they are in the experience
 *
 * @param {string} navGuide current step of the experience
 * @returns {React.ReactElement} display the current step
 */
export const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = React.memo(
  ({ navGuide }) => {
    Breadcrumb.displayName = 'Breadcrumb';

    return <SBreadcrumb>{navGuide}</SBreadcrumb>;
  }
);
