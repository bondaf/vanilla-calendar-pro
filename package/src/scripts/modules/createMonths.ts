import createDOM from '@scripts/modules/createDOM';
import visibilityTitle from '@scripts/modules/visibilityTitle';
import type VanillaCalendar from '@src/vanilla-calendar';

const relationshipID = (self: VanillaCalendar) => {
  if (self.type !== 'multiple') return 0;
  const columnEls = self.HTMLElement.querySelectorAll<HTMLElement>('[data-vc="column"]');
  const indexColumn = Array.from(columnEls).findIndex((column) => column.closest('[data-vc-column="month"]'));
  return indexColumn > 0 ? indexColumn : 0;
};

const createMonthEl = (self: VanillaCalendar, templateEl: HTMLButtonElement, selected: number, title: string, disabled: boolean, i: number) => {
  const monthEl = templateEl.cloneNode(false) as HTMLButtonElement;
  monthEl.className = self.CSSClasses.monthsMonth;
  monthEl.innerText = `${self.settings.visibility.monthShort ? title.substring(0, 3) : title}`;
  monthEl.title = title;
  monthEl.dataset.vcMonthsMonth = `${i}`;
  if (selected === i) monthEl.dataset.vcMonthsMonthSelected = '';
  if (disabled) monthEl.tabIndex = -1;
  monthEl.disabled = disabled;
  return monthEl;
};

const createMonths = (self: VanillaCalendar, target?: HTMLElement) => {
  const yearEl = target?.closest('[data-vc="header"]')?.querySelector<HTMLElement>('[data-vc="year"]');
  const selectedYear = yearEl ? Number(yearEl.dataset.vcYear) : (self.selectedYear as number);
  const selectedMonth = target?.dataset.vcMonth ? Number(target.dataset.vcMonth) : self.selectedMonth;

  self.currentType = 'month';
  createDOM(self, target);
  visibilityTitle(self);

  const monthsEl = self.HTMLElement.querySelector('[data-vc="months"]');
  if (!self.settings.selection.month || !monthsEl) return;

  const activeMonthsID =
    self.jumpMonths > 1
      ? self.locale.months
          .map((_, i) => selectedMonth - self.jumpMonths * i)
          .concat(self.locale.months.map((_, i) => selectedMonth + self.jumpMonths * i))
          .filter((monthID) => monthID >= 0 && monthID <= 12)
      : Array.from(Array(12).keys());

  const templateMonthEl = document.createElement('button');
  templateMonthEl.type = 'button';

  for (let i = 0; i < 12; i++) {
    const monthTitle = self.locale.months[i];
    const monthDisabled =
      (i < (self.dateMin as Date).getMonth() + relationshipID(self) && selectedYear <= (self.dateMin as Date).getFullYear()) ||
      (i > (self.dateMax as Date).getMonth() + relationshipID(self) && selectedYear >= (self.dateMax as Date).getFullYear()) ||
      (i !== selectedMonth && !activeMonthsID.includes(i));
    const monthEl = createMonthEl(self, templateMonthEl, selectedMonth, monthTitle, monthDisabled, i);
    monthsEl.appendChild(monthEl);
    if (self.actions.getMonths) self.actions.getMonths(i, monthEl, self);
  }
};

export default createMonths;
