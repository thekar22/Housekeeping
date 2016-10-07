angular.module('housekeeping')
.service('parseService', [function () {
  var service = {  // n minutes, where n < 10, is converted to '0n'
    formatResponse: function(appointments) {
      var date;
      var hours;
      var minutes;        
      for (var i = 0; i < appointments.length; i++) {
                  
        appointments[i].scheduled_at = new Date(appointments[i].scheduled_at);

        date = appointments[i].scheduled_at;
        hours = date.getHours().toString();
        minutes = date.getMinutes();
        var minutesStr = parseUnits(minutes);

        appointments[i].scheduleTime = hours + ":" + minutesStr;

        if(canStart(new Date(), date)) {
          appointments[i].canStart = true;
        }
      }

      return appointments;
    }
  };

  function canStart(now, scheduleTime) {
    // can only start if appointment is 2 hours from now
    var two_hours = 2 * 3600 * 1000;

    if ((scheduleTime.getTime() - now.getTime()) < two_hours) {      
      return true;
    }
    return false;
  }


  function parseUnits(units) {
   if (units >= 10) {
      return units.toString();
    } else if (units < 10 && units !== 0) {
      return '0' + units.toString();
    } else { // parse 0
      return '00';
    }
  }

  return service;
}]);