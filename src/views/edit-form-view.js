import AbstractView from './abstract-view';
import EditFormTemplate from '../templates/edit-form-template';

export class EditFormView extends AbstractView {
  innerGetTemplate() {
    return EditFormTemplate;
  }
}
