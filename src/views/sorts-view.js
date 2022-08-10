import AbstractView from './abstract-view';
import SortsTemplate from '../templates/sorts-temlate';

export default class SortsView extends AbstractView {
  innerGetTemplate() {
    return SortsTemplate;
  }
}
