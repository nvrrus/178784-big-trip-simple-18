import AbstractView from './abstract-view';
import FiltersTemplate from '../templates/filters-template';

export default class FiltersView extends AbstractView {
  innerGetTemplate() {
    return FiltersTemplate;
  }
}
