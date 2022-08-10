import AbstractView from './abstract-view';
import TripPointTemplate from '../templates/trip-point-template';

export default class TripPointView extends AbstractView{
  innerGetTemplate() {
    return TripPointTemplate;
  }
}
