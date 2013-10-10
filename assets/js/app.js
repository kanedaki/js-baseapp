define(["backbone", "jquery", "R"], function(Backbone, $, R) {
  "use strict";

/* Base classes */

  var BaseView = R.extend(Backbone.View, {
    init: function() {
        Backbone.View.apply(this, arguments)
        /* Beware! this.helpers is in the prototype! */
        var h = _.extend({}, this.helpers);
        if (h) for (var k in h) if (h.hasOwnProperty(k)) {
              h[k] = h[k].bind(this)
            }
        this.helpers = h
      },
    render: function() {
        var model = (this.model || this.collection),
            data = _.extend(model? model.toJSON() : {}, this.helpers || {}),
            html = this.template(data)
        this.$el.html(html)
        return this
      }
  })

  var BaseModel = R.extend(Backbone.Model, {
    init: function() {
        Backbone.Model.apply(this, arguments)
      },
    idAttribute: "_id"
  })

  var BaseCollection = R.extend(Backbone.Collection, {
    init: function() {
        Backbone.Collection.apply(this, arguments)
      }
  })

  var SmartRouter = R.extend(Backbone.Router, {
    init: function(options) {
        options || (options = {})
        Backbone.Router.apply(this, arguments)
        this._activePage = null
        this.container = $(options.container || "body")
      },
    changePage: function(newPage) {
        var oldActive = this._activePage
        this._activePage = newPage.render()
        this.container.html(this._activePage.el)
        this._activePage.didShow && this._activePage.didShow()
        if (oldActive) {
              oldActive.undelegateEvents()
              oldActive.didHide && oldActive.didHide()
              oldActive.remove()
            }
      }
  })

  /* Models */
  /* Collections */
  /* Views */
  /* Routers */

  var AppRouter = R.extend(Backbone.Router, {
  
  })

  window.appRouter = new AppRouter();
  Backbone.history.start()

});
