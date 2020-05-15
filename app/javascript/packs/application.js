// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("tui-calendar")
// var Calendar = require('tui-calendar'); /* CommonJS */
// require("tui-calendar/dist/tui-calendar.css");
import Calendar from 'tui-calendar'; /* ES6 */
import 'tui-time-picker/dist/tui-time-picker.css';
// If you use the default popups, use this.
// require("tui-date-picker/dist/tui-date-picker.css");
// require("tui-time-picker/dist/tui-time-picker.css");
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "controllers"
document.addEventListener('turbolinks:load',function() {
    calendar = new Calendar(document.getElementById('calendar'), {
        defaultView: 'month',
        taskView: true,    // Can be also ['milestone', 'task']
        scheduleView: true,  // Can be also ['allday', 'time']
        useCreationPopup: true,
        useDetailPopup: true,
        template: {
            milestone: function(schedule) {
                return '<span style="color:red;"><i class="fa fa-flag"></i> ' + schedule.title + '</span>';
            },
            milestoneTitle: function() {
                return 'Milestone';
            },
            task: function(schedule) {
                return '&nbsp;&nbsp;#' + schedule.title;
            },
            taskTitle: function() {
                return '<label><input type="checkbox" />Task</label>';
            },
            allday: function(schedule) {
                return schedule.title + ' <i class="fa fa-refresh"></i>';
            },
            alldayTitle: function() {
                return 'All Day';
            },
            time: function(schedule) {
                return schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start;
            }
        },
        month: {
            daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            startDayOfWeek: 0,
            narrowWeekend: true
        },
        week: {
            daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            startDayOfWeek: 0,
            narrowWeekend: true
        }
    });

      var schedules = JSON.parse(document.querySelector("#calendar").dataset.schedules);
  window.schedules = schedules;
  console.log(schedules);

schedules.forEach(schedule => {
  console.log(schedule.id)
  calendar.createSchedules([
    {
      id: schedule.id,
      calendarId: '1',
      title: schedule.title,
      category: 'time',
      dueDateClass: schedule.dueDateClass,
      location: "THis is it ",
      start: schedule.start,
      end: schedule.end
    }
  ])
});

//   // delete 
  calendar.on('beforeDeleteSchedule', function(event) {
    var schedule = event.schedule;
    alert('The schedule is removed.', schedule);
    calendar.deleteSchedule(schedule.id, schedule.calendarId)
});

calendar.on('beforeUpdateSchedule', function(event) {
  var schedule = event.schedule;
  var changes = event.changes;

  calendar.updateSchedule(schedule.id, schedule.calendarId, changes);
});

calendar.on('beforeCreateSchedule', function(event) {
    //   console.log(calendar)
      var title = event.title
      var startTime = event.start;
      var endTime = event.end;
      var isAllDay = event.isAllDay;
    //   var guide = event.guide;
    //   console.log(guide)
      var triggerEventName = event.triggerEventName;
      var schedule =  {
        id: 1,
        calendarId: '1',
        title: title,
        category: 'time',
        // dueDateClass: schedule.dueDateClass,
        location: "THis is it ",
        start: startTime,
        end: endTime
      }
    console.log(schedule)
      if (triggerEventName === 'click') {
          // open writing simple schedule popup
          // schedule = {...};
      } else if (triggerEventName === 'dblclick') {
          // open writing detail schedule popup
          // schedule = {...};
      }
    
      calendar.createSchedules([schedule]);
    });
});

