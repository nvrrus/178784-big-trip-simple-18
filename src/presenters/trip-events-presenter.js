import { render, RenderPosition } from '../render';
import CreateFormView from '../views/create-from-view';
import { EditFormView } from '../views/edit-form-view';
import SortsView from '../views/sorts-view';
import TripPointView from '../views/trip-point-view';

export default class TripEventsPresenter {
  init = (tripEventsContainer) => {
    render(new SortsView(), tripEventsContainer, RenderPosition.BEFOREBEGIN);
    render(new CreateFormView(), tripEventsContainer);
    render(new TripPointView(), tripEventsContainer);
    render(new EditFormView(), tripEventsContainer);
    for (let i = 0; i < 2; i++) {
      render(new TripPointView(), tripEventsContainer);
    }
  };
}
