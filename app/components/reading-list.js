import Ember from 'ember';

export default Ember.Component.extend({

  value: "",

  actions: {

    onEnter(title) {
      if (title) {
        this.get('addBook')({ title });
      }
      this.set('value', new String());  // reset value
    }

  }

});
