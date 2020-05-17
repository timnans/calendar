// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
// require("@rails/activestorage").start()
require("channels")
require("tui-calendar")
import Rails from "@rails/ujs";
var Calendar = require('tui-calendar'); /* CommonJS */
// require("tui-calendar/dist/tui-calendar.css");
// import Calendar from 'tui-calendar'; /* ES6 */
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
var calendar;

document.addEventListener('turbolinks:load',function() {
    calendar = new Calendar(document.getElementById('calendar'), {
        defaultView: 'month',
        milestone: true,    // Can be also ['milestone', 'task']
        scheduleView: true,  // Can be also ['allday', 'time']
        useCreationPopup: true,
        useDetailPopup: true,
        template: {

          popupDetailRepeat: function(schedule) {
            return 'Repeat : ' + schedule.recurrenceRule;
          },
          
          popupStateFree: function() {
            return 'Free';
          },
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
schedules.forEach(schedule => {
  calendar.createSchedules([
    {
      id: schedule.id,
      calendarId: '1',
      title: schedule.title,
      category: 'time',
      dueDateClass: schedule.dueDateClass,
      location: schedule.location,
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

    Rails.ajax({
      type: "DELETE",
      url: '/schedules/'+ schedule.id,
      // data: formData
    })
});

calendar.on('beforeUpdateSchedule', function(event) {
  var schedule = event.schedule;
  var changes = event.changes;
  var formUpdate = new FormData()
  
  console.log(schedule)


//  console.log(changes)
 if (changes.end) {
   formUpdate.append("end", changes.end._date)
   
 }
 if (changes.start) {
  formUpdate.append("start", changes.start._date)
  
}
if (changes.title) {
  formUpdate.append("title", changes.title)  
}
if (changes.category) {
  formUpdate.append("category", changes.category)  
}
  calendar.updateSchedule(schedule.id, schedule.calendarId, changes);

  Rails.ajax({
    type: "PATCH",
    url: '/schedules/'+ schedule.id,
    data: formUpdate
  })

});
// create
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
        calendarId: '3',
        title: title,
        category: 'time',
        // dueDateClass: schedule.dueDateClass,
        location: location,
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
    console.log(schedule.start._date)
      let formData = new FormData()
      formData.append('title', schedule.title);
      formData.append('category', schedule.category);
      formData.append('start', schedule.start._date);
      formData.append('end', schedule.end._date);

      Rails.ajax({
        type: "POST",
        url: '/schedules',
        data: formData
      })
     
    });
});

