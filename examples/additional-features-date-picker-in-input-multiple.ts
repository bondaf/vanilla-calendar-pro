import VanillaCalendar, { Options } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

// start irrelevant code
document.querySelector('#calendar-input').style.display = 'flex';
// end irrelevant code

const options: Options = {
  input: true,
  type: 'multiple',
  settings: {
    range: {
      disablePast: true,
    },
    selection: {
      day: 'multiple-ranged',
    },
    visibility: {
      daysOutside: false,
    },
  },
  actions: {
    changeToInput(e, calendar, dates, time, hours, minutes, keeping) {
      if (dates[1]) {
        dates.sort((a, b) => +new Date(a) - +new Date(b));
        calendar.HTMLInputElement.value = `${dates[0]} — ${dates[dates.length - 1]}`;
      } else if (dates[0]) {
        calendar.HTMLInputElement.value = dates[0];
      } else {
        calendar.HTMLInputElement.value = '';
      }
    },
  },
};

const calendarInput = new VanillaCalendar('#calendar-input', options);
calendarInput.init();