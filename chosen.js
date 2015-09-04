var warned = false;
Template.chosen.onRendered(function(){
  var self = this;
  self.$select = this.$('select');
  if (self.$select.length === 0){
    Log.error('Blaze-Chosen: Missing a <select> element in chosen template helper');
    return;
  }

  self.$select.chosen(this.data || {});

  if (window.MutationObserver == null && !warned){
    warned = true;
    Log.warn('Blaze-Chosen: MutationObserver not supported. Disabling reactive updates.');
    return
  }

  self.observer = new window.MutationObserver(_.debounce(triggerUpdate, 50));
  self.observer.observe(self.$select.get(0), {
    subtree: true,
    childList: true
  });

  function triggerUpdate(){
    if (self.$select) {
      self.$select.trigger('chosen:updated')
    }
  }
});

Template.chosen.onDestroyed(function(){
  self.$select = null;
  if (self.observer != null){
    self.observer.disconnect();
    self.observer = null;
  }
});
