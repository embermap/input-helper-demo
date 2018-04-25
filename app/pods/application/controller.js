import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    updateSsn(event) {
      let user = this.get('model');
      let value = event.target.value;
      let newSsn = value.replace(/-/g, '');

      if (newSsn.length <= 9) {
        user.set('ssn', newSsn);
      }

      user.notifyPropertyChange('ssn');
    }
  }

});
