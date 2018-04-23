import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({

  name: DS.attr('string'),
  ssn: DS.attr('string'),

  formattedSsn: computed('ssn', function() {
    let ssn = this.get('ssn') || '';
    let first = ssn.toString().substr(0, 3);
    let second = ssn.toString().substr(3, 2);
    let third = ssn.toString().substr(5, 4);

    let formattedSsn = '';
    if (first) {
      formattedSsn += `${first}`;
      if (first.length === 3) {
        formattedSsn += `-`;
      }
    }
    if (second) {
      formattedSsn += `${second}`;
      if (second.length === 2) {
        formattedSsn += `-`;
      }
    }
    if (third) {
      formattedSsn += `${third}`;
    }

    return formattedSsn;
  }),

});
