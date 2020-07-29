'use strict';
module.exports = function(app) {
  var Controller = require('../controllers/myControllers');

  //  Routes
  app.route('/find_closest_devices/:lat/:lon')
    .post(Controller.find_closest_devices);

  app.route('/show_polyline_for_path_id/:path_id')
    .post(Controller.show_polyline_for_path_id);

    app.route('/show_polyline_for_path_name/:path_name')
       .post(Controller.show_polyline_for_path_name);

//  app.route('/show_paths_for_device_id/')
  //  .post(Controlλer.show_paths_for_device_id);

  //  app.route('/show_paths_for_device_name/')
    //  .post(Controller.show_paths_for_device_name);



};
