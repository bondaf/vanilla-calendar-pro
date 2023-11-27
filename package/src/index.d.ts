import * as T from './types';

export type Options = T.IOptions;
export type TypesCalendar = T.TypesCalendar;
export type Date = T.IDate;
export type Range = T.IRange;
export type Selection = T.ISelection;
export type Selected = T.ISelected;
export type Visibility = T.IVisibility;
export type Locale = T.ILocale;
export type Actions = T.IActions;
export type Popups = T.IPopups;
export type CSSClasses = T.ICSSClasses;
export type DOMTemplates = T.IDOMTemplates;

export default class VanillaCalendar {
	constructor(selector: HTMLElement | string, options?: Partial<T.IOptions>);

	input: boolean;
	type: T.TypesCalendar;
	months: number;
	jumpMonths: number;
	date: T.IDate;
	settings: {
		lang: string;
		iso8601: boolean;
		range: T.IRange;
		selection: T.ISelection;
		selected: T.ISelected;
		visibility: T.IVisibility;
	};
	locale: T.ILocale;
	actions: T.IActions;
	popups: T.IPopups;
	CSSClasses: T.ICSSClasses;
	DOMTemplates: T.IDOMTemplates;

	reset: () => void;
	update: () => void;
	init: () => void;
	destroy: () => void;
}
