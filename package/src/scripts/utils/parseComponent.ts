import { getComponent } from '@scripts/templates/components';
import getCorrectNumberOfMonths from '@scripts/utils/getCorrectNumberOfMonths';
import type VanillaCalendar from '@src/vanilla-calendar';

export const parseDOM = (self: VanillaCalendar, template: string): string => {
  return template
    .replace(/[\n\t]/g, '')
    .replace(/<#(?!\/?Multiple)(.*?)>/g, (_, tagContent) => {
      const type = (tagContent.match(/\[(.*?)\]/) || [])[1];
      const componentName = tagContent.replace(/[/\s\n\t]|\[(.*?)\]/g, '');
      const component = getComponent(componentName);
      const htmlContent = component ? component(self, type ?? null) : '';
      return self.sanitizerHTML(htmlContent);
    })
    .replace(/[\n\t]/g, '');
};

export const parseMultiple = (self: VanillaCalendar, template: string): string => {
  return template
    .replace(/<#Multiple>(.*?)<#\/Multiple>/gs, (_, content) => {
      const repeatedContent = Array(getCorrectNumberOfMonths(self) as number)
        .fill(content)
        .join('');
      return self.sanitizerHTML(repeatedContent);
    })
    .replace(/[\n\t]/g, '');
};
