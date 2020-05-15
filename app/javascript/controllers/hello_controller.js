
import { Controller } from "stimulus"
require("tui-calendar")
var Calendar = require('tui-calendar'); /* CommonJS */
require("tui-calendar/dist/tui-calendar.css");


export default class extends Controller {
  //  calendar = new tui.Calendar(document.getElementById('calendar'))

  getUserSchedule(){

  }
  
  connect() {}
    // this.getUserSchedule();

    // console.log(schedules)
  //   this.calendar = new tui.Calendar(document.getElementById('calendar'), {
  //     defaultView: 'month',
  //     taskView: true,    // Can be also ['milestone', 'task']
  //     scheduleView: true,  // Can be also ['allday', 'time']
  //     useCreationPopup: true,
  //     useDetailPopup: true,
  //     template: {
  //         milestone: function(schedule) {
  //             return '<span style="color:red;"><i class="fa fa-flag"></i> ' + schedule.title + '</span>';
  //         },
  //         milestoneTitle: function() {
  //             return 'Milestone';
  //         },
  //         task: function(schedule) {
  //             return '&nbsp;&nbsp;#' + schedule.title;
  //         },
  //         taskTitle: function() {
  //             return '<label><input type="checkbox" />Task</label>';
  //         },
  //         allday: function(schedule) {
  //             return schedule.title + ' <i class="fa fa-refresh"></i>';
  //         },
  //         alldayTitle: function() {
  //             return 'All Day';
  //         },
  //         time: function(schedule) {
  //             return schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start;
  //         }
  //     },
  //     month: {
  //         daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  //         startDayOfWeek: 0,
  //         narrowWeekend: true
  //     },
  //     week: {
  //         daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  //         startDayOfWeek: 0,
  //         narrowWeekend: true
  //     }
  // });

//   var schedules = JSON.parse(document.querySelector("#calendar").dataset.schedules);
//   window.schedules = schedules;
//   console.log(schedules);

// schedules.forEach(schedule => {
//   console.log(schedule.id)
//   this.calendar.createSchedules([
//     {
//       id: schedule.id,
//       calendarId: '1',
//       title: schedule.title,
//       category: 'time',
//       dueDateClass: schedule.dueDateClass,
//       location: "THis is it ",
//       start: schedule.start,
//       end: schedule.end
//     }
//   ])
// });
// this.moveToNextOrPrevRange()
// function moveToNextOrPrevRange(val) {
//   if (val === -1) {
//   calendar.prev();
//   } else if (val === 1) {
//   calendar.next();
//   }
//   }


//   // delete 
//   this.calendar.on('beforeDeleteSchedule', function(event) {
//     var schedule = event.schedule;
//     alert('The schedule is removed.', schedule);
// });

// // update
// // calendar.on('beforeUpdateSchedule', function(event) {
// //   var schedule = event.schedule;
// //   var changes = event.changes;

// //   calendar.updateSchedule(schedule.id, schedule.calendarId, changes);
// // });

// // create
// this.calendar.on('beforeCreateSchedule', function(event) {
//   console.log(this.calendar)

//   var startTime = event.start;
//   var endTime = event.end;
//   var isAllDay = event.isAllDay;
//   var guide = event.guide;
//   var triggerEventName = event.triggerEventName;
//   var schedule;

//   if (triggerEventName === 'click') {
//       // open writing simple schedule popup
//       // schedule = {...};
//   } else if (triggerEventName === 'dblclick') {
//       // open writing detail schedule popup
//       // schedule = {...};
//   }

//   this.calendar.createSchedules([schedule]);
// });


//   }


//  defineCalendar() {
  
//  }

//  addSchedule(){
//   this.calendar.createSchedules([
//     {
//         id: '1',
//         calendarId: '1',
//         title: 'new one',
//         category: 'time',
//         dueDateClass: '',
//         start: '2020-05-13T22:30:00+09:00',
//         end: '2020-05-229T02:30:00+09:00'
//     }
//   ])
   
//  }
 
  
//  clearCalendar(){
//    this.calendar.clear();
//  }
// scheduleGetter(){
//   var schedule = calendar.getSchedule(scheduleId, calendarId);
// console.log(schedule.title);
// }

// moveToNextOrPrevRange(val) {
//   if (val === -1) {
//   this.calendar.prev();
//   } else if (val === 1) {
//   this.calendar.next();
//   }
//   }

// moveToDate(){
//   moveToNextOrPrevRange()
// }

}
