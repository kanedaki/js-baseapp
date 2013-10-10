define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["notes"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="hbox stretch" id="noteapp">\r\n  <aside>\r\n    <section class="vbox">\r\n      <header class="header bg-light lter bg-gradient b-b">\r\n        <button class="btn btn-success pull-right btn-sm" id="new-note"><i class="icon-plus"></i> NEW</button>\r\n        <p>Notes</p>\r\n      </header>\r\n      <section class="bg-light lter">\r\n        <section class="hbox stretch">\r\n          <!-- .aside -->\r\n          <aside>\r\n            <section class="vbox b-b">\r\n              <section class="paper" id="note-detail">\r\n                <!-- note detail -->\r\n                <script type="text/template" id="note-template">\r\n                  <textarea type="text" class="form-control scrollable" placeholder="Type your note here">' +
__e( desc ) +
'</textarea>\r\n                </script>\r\n                <!-- note detail -->\r\n              </section>\r\n            </section>\r\n          </aside>\r\n          <!-- /.aside -->\r\n        </section>\r\n      </section>\r\n    </section>\r\n  </aside>\r\n  <!-- .aside -->\r\n  <aside class="aside-lg bg-light lter b-l">\r\n    <section class="vbox">\r\n      <header class="header bg-light lter bg-gradient clearfix b-b">\r\n        <div class="input-group m-t-sm">\r\n          <span class="input-group-addon input-sm"><i class="icon-search"></i></span>\r\n          <input type="text" class="form-control input-sm" id="search-note" placeholder="search">\r\n        </div>\r\n      </header>\r\n      <section class="scrollable">\r\n        <div class="wrapper">\r\n          <!-- note list -->\r\n          <ul id="note-list" class="list-group"></ul>\r\n            <!-- templates -->\r\n            <script type="text/template" id="item-template">\r\n              <div class="view" id="note-' +
__e( id ) +
'">\r\n                <button class="destroy close hover-action">&times;</button>\r\n                <div class="note-name">\r\n                  <strong>\r\n                  ' +
__e( (name && name.length) ? name : 'New note' ) +
'\r\n                  </strong>\r\n                </div>\r\n                <div class="note-desc">\r\n                  ' +
__e( desc.replace(name,'').length ? desc.replace(name,'') : 'empty note' ) +
'\r\n                </div>\r\n                <span class="text-xs text-muted">' +
__e( moment(date).format('MMM Do, h:mm a') ) +
'</span>\r\n              </div>\r\n            </script>\r\n            <!-- / template  -->\r\n          <!-- note list -->\r\n        </div>\r\n      </section>\r\n    </section>          \r\n  </aside>\r\n  <!-- /.aside -->\r\n</section>\r\n\r\n';

}
return __p
};

this["JST"]["task"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="hbox stretch" id="taskapp">\r\n  <aside>\r\n    <section class="vbox">\r\n      <header class="header bg-light lter bg-gradient b-b">\r\n        <button class="btn btn-success btn-sm pull-right btn-icon" id="new-task"><i class="icon-plus"></i></button>\r\n        <p>Tasks</p>\r\n      </header>            \r\n      <section class="bg-light lter">\r\n        <section class="hbox stretch">          \r\n          <!-- .aside -->\r\n          <aside>\r\n            <section class="vbox">\r\n              <section class="scrollable wrapper">\r\n                <!-- task list -->\r\n                <ul id="task-list" class="list-group list-group-sp"></ul>\r\n                  <!-- templates -->\r\n                  <script type="text/template" id="item-template">\r\n                    <div class="view" id="task-' +
__e( id ) +
'">\r\n                      <button class="destroy close hover-action">&times;</button>\r\n                      <div class="checkbox">\r\n                        <input class="toggle" type="checkbox" ' +
((__t = ( done ? 'checked="checked"' : '' )) == null ? '' : __t) +
' />\r\n                        <span class="task-name">' +
__e( (name && name.length) ? name : 'New task' ) +
'</span>\r\n                        <input class="edit form-control" type="text" value="' +
__e( name ) +
'" />\r\n                      </div>\r\n                    </div>\r\n                  </script>\r\n                  <!-- / template  -->\r\n                <!-- task list -->\r\n              </section>\r\n            </section>\r\n          </aside>\r\n          <!-- /.aside -->\r\n        </section>\r\n      </section>\r\n      <footer class="footer bg-white-only b-t">\r\n        <p class="checkbox"><label><input id="toggle-all" type="checkbox"> Mark all as complete</label></p>\r\n      </footer>\r\n    </section>\r\n  </aside>\r\n  <!-- .aside -->\r\n  <aside class="col-lg-4 bg-white b-l">\r\n    <section class="vbox flex" id="task-detail">\r\n      <!-- task detail -->\r\n      <script type="text/template" id="task-template">\r\n      <header class="header bg-light lt b-b">\r\n        <p class="m-b">\r\n          <span class="text-muted">Created:</span> ' +
__e( moment(date).format('MMM Do, h:mm a') ) +
'\r\n        </p>\r\n        <div class="lter pull-in b-t m-t-xxs">\r\n        <textarea type="text" class="form-control form-control-trans scrollable" placeholder="Task description">' +
__e( desc ) +
'</textarea>\r\n        </div>\r\n      </header>\r\n      <section>\r\n        <section>\r\n          <section>\r\n            <ul id="task-comment" class="list-group no-radius no-border m-t-n-xxs">\r\n            </ul>\r\n          </section>\r\n        </section>\r\n      </section>\r\n      <footer class="footer bg-light lter clearfix b-t">\r\n          <div class="input-group m-t-sm">   \r\n            <input type="text" class="form-control input-sm" id="task-c-input" placeholder="Type a comment">\r\n            <span class="input-group-btn">\r\n              <button class="btn btn-success btn-sm" type="button" id="task-c-btn"><i class="icon-pencil"></i></button>\r\n            </span>\r\n          </div>\r\n      </footer>\r\n      </script>\r\n      <!-- task detail -->\r\n      <script type="text/template" id="item-c-template">\r\n        <div class="view">\r\n          <button class="destroy close hover-action">&times;</button>\r\n          <div>\r\n              <span>' +
__e( desc ) +
'</span>\r\n              <small class="text-muted block text-xs"><i class="icon-time"></i> ' +
__e( moment(date).fromNow() ) +
'</small>\r\n          </div>\r\n        </div>\r\n      </script>\r\n    </section>\r\n  </aside>\r\n  <!-- /.aside -->\r\n</section>\r\n\r\n';

}
return __p
};

this["JST"]["timeline"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="vbox">        \r\n  <section class="bg-light lter">\r\n    <section class="hbox stretch">          \r\n      <!-- .aside -->\r\n      <aside>\r\n        <section class="vbox">\r\n          <section class="scrollable wrapper">\r\n            <div class="timeline">\r\n              <article class="timeline-item active">\r\n                  <div class="timeline-caption">\r\n                    <div class="panel bg-success lter no-borders">\r\n                      <div class="panel-body">\r\n                        <span class="timeline-icon"><i class="icon-bell-alt time-icon bg-success"></i></span>\r\n                        <span class="timeline-date">7:30 am</span>\r\n                        <h5>\r\n                          <span>Wake up</span>\r\n                          Me\r\n                        </h5>\r\n                        <div class="m-t-sm timeline-action">\r\n                          <span class="h3 pull-left m-r-sm">4:51</span>\r\n                          <button class="btn btn-sm btn-white"><i class="icon-pause"></i> Pause</button>\r\n                          <button class="btn btn-sm btn-white"><i class="icon-ok"></i> Confirm</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </article>\r\n              <article class="timeline-item">\r\n                  <div class="timeline-caption">\r\n                    <div class="panel">\r\n                      <div class="panel-body">\r\n                        <span class="arrow left"></span>\r\n                        <span class="timeline-icon"><i class="icon-phone time-icon bg-primary"></i></span>\r\n                        <span class="timeline-date">12:25 am</span>\r\n                        <h5>\r\n                          <span>Call to</span>\r\n                          Jason Cokde (021-254-3523)\r\n                        </h5>\r\n                      </div>       \r\n                    </div>\r\n                  </div>\r\n              </article>\r\n              <article class="timeline-item alt">\r\n                  <div class="timeline-caption">                \r\n                    <div class="panel">\r\n                      <div class="panel-body">\r\n                        <span class="arrow right"></span>\r\n                        <span class="timeline-icon"><i class="icon-male time-icon bg-success"></i></span>\r\n                        <span class="timeline-date">10:00 am</span>\r\n                        <h5>\r\n                          <span>Appointment</span>\r\n                          Carmark Sook (.inc company)\r\n                        </h5>\r\n                        <p>Morbi nec nunc condimentum, egestas dui nec, </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </article>          \r\n              <article class="timeline-item">\r\n                  <div class="timeline-caption">                \r\n                    <div class="panel">\r\n                      <div class="panel-body">\r\n                        <span class="arrow left"></span>\r\n                        <span class="timeline-icon"><i class="icon-plane time-icon bg-dark"></i></span>\r\n                        <span class="timeline-date">8:00 am</span>\r\n                        <h5>\r\n                          <span>Fly to</span>\r\n                          Newyork City\r\n                        </h5>\r\n                        <p>82°, Very hot with some sun</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </article>\r\n              <article class="timeline-item alt">\r\n                  <div class="timeline-caption">                \r\n                    <div class="panel">\r\n                      <div class="panel-body">\r\n                        <span class="arrow right"></span>\r\n                        <span class="timeline-icon"><i class="icon-file-text time-icon bg-info"></i></span>\r\n                        <span class="timeline-date">9:30 am</span>\r\n                        <h5>\r\n                          <span>Meeting</span>\r\n                          Office A - 2 floor\r\n                        </h5>\r\n                        <p>Iaculis lorem justo porttitor orci. Vivamus vestibulum tortor augue. Donec elementum mollis velit.</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </article>\r\n              <article class="timeline-item">\r\n                  <div class="timeline-caption">\r\n                    <div class="panel">\r\n                      <div class="panel-body">\r\n                        <span class="arrow left"></span>\r\n                        <span class="timeline-icon"><i class="icon-code time-icon bg-dark"></i></span>\r\n                        <span class="timeline-date">9:00 am</span>\r\n                        <h5>\r\n                          <span>Work on</span>\r\n                          Web application project\r\n                        </h5>\r\n                        <p>Iaculis lorem justo porttitor orci. Donec elementum mollis velit.</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </article>\r\n              <div class="timeline-footer"><a href="#"><i class="icon-plus time-icon inline-block bg-dark"></i></a></div>\r\n            </div>\r\n          </section>\r\n        </section>\r\n      </aside>\r\n      <!-- /.aside -->\r\n      <!-- .aside -->\r\n      <aside class="aside-lg bg-light">\r\n        <div class="wrapper">\r\n          <h4 class="m-t-none">Timeline(36)</h4>\r\n          <form>\r\n            <div class="form-group">\r\n              <label>Name</label>\r\n              <input type="text" placeholder="Event name" class="input-sm form-control">\r\n            </div>\r\n            <div class="form-group">\r\n              <label>Date</label>\r\n              <input type="text" placeholder="Event name" class="datepicker input-sm form-control">\r\n            </div>\r\n            <div class="form-group">\r\n              <label>Time</label>\r\n              <input type="text" placeholder="eg. 3:00 pm" class="input-sm form-control">\r\n            </div>\r\n            <div class="form-group">\r\n              <label>Type</label>\r\n              <div>\r\n                <div class="btn-group">\r\n                  <button data-toggle="dropdown" class="btn btn-sm btn-white dropdown-toggle">\r\n                    <span class="dropdown-label">Choose a type</span> \r\n                    <span class="caret"></span>\r\n                  </button>\r\n                  <ul class="dropdown-menu dropdown-select">\r\n                      <li><a href="#"><input type="radio" name="d-s-r">Travel</a></li>\r\n                      <li class=""><a href="#"><input type="radio" name="d-s-r">Phone</a></li>\r\n                      <li class=""><a href="#"><input type="radio" name="d-s-r">Meeting</a></li>\r\n                      <li class=""><a href="#"><input type="radio" name="d-s-r">Appointment</a></li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="m-t-lg"><button class="btn btn-sm btn-default">Add an event</button></div>\r\n          </form>\r\n        </div>\r\n      </aside>\r\n      <!-- /.aside -->\r\n    </section>\r\n  </section>\r\n  <footer class="footer bg-light dker bg-gradient">\r\n    <p>Timeline</p>\r\n  </footer>\r\n</section>\r\n';

}
return __p
};

  return this["JST"];

});