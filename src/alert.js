var AlertView = Backbone.View.extend({
    //This is where the alerts will be attached.
	  el:"#main",

    //bootstrap alert template
    template: _.template(
           ['<div class="alert fade in alert-dismissable <%=cssclass%>">',
               '<button type="button" class="close" data-dismiss="alert">&times;</button>',
               '<%=message%>',
               '</div>'
           ].join('')),

    //Cofirm function will show a modal with 2 buttons, if the user clicked on OK, the callback will be fired
    confirm: function (msg, callback) {
        var confirmModal =
      $(['<div class="modal fade">',
           '<div class="modal-dialog">',
           '<div class="modal-content">',
          '<div class="modal-body">',
            '<p>',
			       msg,
			     '</p>',
          '</div>',
          '<div class="modal-footer">' +
            '<button class="btn btn-primary" id="noButton" data-dismiss="modal">No</button>',
            '<button id="okButton" class="btn">Yes</button>',
          '</div>',
            '</div>',
         '</div>',
        '</div>'].join(''));
        confirmModal.modal('show').on("hidden.bs.modal", function () {
            $(this).remove();
        }).find('#okButton').click(function (event) {
            callback();
            confirmModal.modal('hide');
        });
    },

    //alerts
    warn: function (msg) { this.set(msg, "alert-warning"); },
    error: function (msg) { this.set(msg, "alert-danger"); },
    success: function (msg) { this.set(msg, "alert-success"); },
    clear: function () { this.$el.find(".alert").remove(); },
    set: function (msg, css, ext) {
        this.$el.html(this.template({ message: msg, cssclass: css }));
    }
});