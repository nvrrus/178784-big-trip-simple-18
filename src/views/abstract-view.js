import { createElement } from '../render';

export default class AbstractView {
  getElement() {
    if (!this.element) {
      this.element = createElement(this.innerGetTemplate());
    }
    return this.element;
  }

  innerGetTemplate() {
    throw new Error('Method innerGetTemplate must be implemented.');
  }

  removeElement() {
    this.element = null;
  }
}
