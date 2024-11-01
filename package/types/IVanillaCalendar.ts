import type {
  FormatDateString,
  IActions,
  ILayouts,
  IPopups,
  IPrivateVariables,
  IRange,
  IReset,
  ISelected,
  ISelection,
  IVisibility,
  Labels,
  Locale,
  MonthsCount,
  Styles,
  ToggleSelected,
  TypesCalendar,
  WeekDayID,
} from '../types';

export interface IVanillaCalendar extends IActions {
  viewType: TypesCalendar;

  isInput: boolean;
  positionToInput: 'auto' | 'center' | 'left' | 'right' | ['bottom' | 'top', 'center' | 'left' | 'right'];

  firstWeekday: WeekDayID;
  monthsToSwitch: number;
  themeAttrDetect: string | false;

  locale: Locale;

  dateToday: Date;
  dateMin: FormatDateString | 'today';
  dateMax: FormatDateString | 'today';

  displayMonthsCount: MonthsCount;
  displayDateMin: FormatDateString | 'today';
  displayDateMax: FormatDateString | 'today';
  displayDatesOutside: boolean;
  displayDisabledDates: boolean;

  enableJumpToSelectedDate: boolean;
  enableDateToggle: ToggleSelected;
  enableMonthChangeOnDayClick: boolean;

  settings: {
    range: IRange;
    selection: ISelection;
    selected: ISelected;
    visibility: IVisibility;
  };

  sanitizerHTML: (dirtyHtml: string) => unknown;
  labels: Labels;
  layouts: ILayouts;
  styles: Styles;
  popups: IPopups;

  init: () => () => void;
  update: (reset?: IReset) => void;
  destroy: () => void;
  show: () => void;
  hide: () => void;

  readonly private: IPrivateVariables;
}
