import AbstractView from './abstract-view';
import CreateFormTemplate from '../templates/create-form-template';

export default class CreateFormView extends AbstractView {
  innerGetTemplate() {
    return CreateFormTemplate;
  }
}
