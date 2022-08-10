import TripEventsPresenter from './presenters/trip-events-presenter';
import { render } from './render';
import FiltersView from './views/filters-view';

const tripControlsContainer = document.querySelector('.trip-controls');
const eventsListContainer = document.querySelector('.trip-events__list');
const tripEventsPresenter = new TripEventsPresenter();

render(new FiltersView(), tripControlsContainer);
tripEventsPresenter.init(eventsListContainer);
