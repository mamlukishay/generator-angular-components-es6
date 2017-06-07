import angular from 'angular';
//  import uiRouter from 'angular-ui-router';

import Component from './<%= componentFileName %>.component';
import styles from './<%= componentFileName %>.scss';

export default angular
  .module("<%= componentName %>", [/*uiRouter*/])
  .component("<%= componentName %>", Component)
  // .config(($stateProvider) => {
  //   'ngInject';

  //   $stateProvider
  //     .state('companyPageX', {
  //       url: '/companies/x/{companyName}',
  //       component: 'companyPageX',
  //     });
  // }).name;
  .name;