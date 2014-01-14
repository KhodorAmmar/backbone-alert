var MainView = Backbone.View.extend({
	 el:"body",
   events: {
      "click .btn-success" : "success",
      "click .btn-warning" : "warning",
      "click .btn-danger" : "danger",
      "click .btn-default" : "confirm"
   },
   success: function(event){
     if(event) event.preventDefault();
      notify.success("This is a success message!");
   },
   warning: function(event){
      event.preventDefault();
      notify.warn("Maybe you shouldn't be doing this");
   },
   danger: function(event){
      event.preventDefault();
      notify.error("Oops, I think you broke it");
   },
   confirm: function(event){
      event.preventDefault();
      var self = this;
      notify.confirm("Are you really sure?", function(){
        self.success();
      });
   }
});
 var notify, main;

$(function(){
  main = new MainView();
  notify = new AlertView();
})