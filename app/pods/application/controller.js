import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    updateSsn(e) {
      let value = e.target.value;
      let model = this.get('model');
      let newSsn = value.replace(/-/g, '');
      let oldSsn = model.get('ssn');

      if (newSsn === oldSsn && e.inputType === 'deleteContentBackward') {
        newSsn = newSsn.substr(0, newSsn.length - 1);
      }

      if (newSsn.length <= 9 && !isNaN(+newSsn)) {
        model.set('ssn', newSsn);
      }

      model.notifyPropertyChange('ssn');
    }
  }

});
