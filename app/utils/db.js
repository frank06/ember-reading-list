import EmberObject from '@ember/object';
import { copy } from '@ember/object/internals';

export default EmberObject.create({
  data: [
    { title: "El Aleph" },
    { title: "2666" },
    { title: "The Black Swan" }
  ],
  books() {
    return copy(this.data);
  },
  addBook(book) {
    this.data.push(book);
  },
  removeBook(book) {
    const index = this.data.indexOf(book);
    this.data.splice(index, 1);
  }
});