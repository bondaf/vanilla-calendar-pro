import handleClick from '@scripts/handles/handleClick';
import { setPosition } from '@scripts/positions';
import type VanillaCalendar from '@src/vanilla-calendar';

import reset from '@/package/src/scripts/methods/reset';

const createToInput = (self: VanillaCalendar, isVisible = true) => {
  const calendar = document.createElement('div');
  calendar.className = self.CSSClasses.calendar;
  calendar.dataset.vc = 'calendar';
  calendar.dataset.vcInput = '';
  calendar.dataset.vcCalendarHidden = '';
  calendar.style.visibility = 'hidden';

  self.isInputInit = true;
  self.HTMLElement = calendar;
  document.body.appendChild(self.HTMLElement);

  if (isVisible) {
    queueMicrotask(() => {
      setPosition(self.HTMLInputElement, calendar, self.settings.visibility.positionToInput);
      self.HTMLElement.style.visibility = 'visible';
      self.show();
    });
  }

  reset(self, {
    year: true,
    month: true,
    dates: true,
    holidays: true,
    time: true,
  });

  if (self.actions.initCalendar) self.actions.initCalendar(self);
  return handleClick(self);
};

export default createToInput;
