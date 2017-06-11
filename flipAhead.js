var Cylon = require('cylon');

Cylon.robot({
  connections: [{ name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' }],
  devices: [{ name: 'drone', driver: 'ardrone' }],

  work: function(my) {
    my.drone.takeoff();

    after((3).seconds(), function() {
      my.drone.calibrate(1);
    });

    after((5).seconds(), function() { 
      my.drone.animate('flipAhead', 180);
    });
    after((10).seconds(), function() { 
      my.drone.stop();
    });
    after((15).seconds(), function() { 
      my.drone.land();
    });
    after((10).seconds(), function() { 
      my.drone.stop();
    });    
  }
}).start();