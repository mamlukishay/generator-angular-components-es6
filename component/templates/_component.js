import angular from 'angular';

const template = require('./company-page-x.html');

export const companyPageXComponent = {
  template,
  controller: class <%= componentClassName %>Component {
    constructor() {
      'ngInject';
    }
  },
};



