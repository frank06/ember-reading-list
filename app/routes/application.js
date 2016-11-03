import Ember from 'ember';
const { A } = Ember;

export default Ember.Route.extend({

  model() {
     return A([
       { title: "El Aleph" },
       { title: "2666" },
       { title: "The Black Swan" }
     ]);
   },

   actions: {

     addBook(book) {
       this.currentModel.pushObject(book);
       // save
     },

     removeBook(book) {
       this.currentModel.removeObject(book);
       // save
     }

   }

});
