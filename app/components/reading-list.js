import Component from '@ember/component';

export default Component.extend({
  
  title: "",
  
  actions: {
    
    onEnter() {
      const title = this.get('title');
      if (title) {
        this.get('addBook')({ title });
      }
      this.set('title', "");  // reset title
    }
    
  }
  
});
