import { Action } from '@ngrx/store';
import { ClockActions } from './actions';

export function clockReducer(state = new Date(), action: Action) {
    switch(action.type){
        case ClockActions.SET_HOURS:
            let hours = new Date(state.getTime());
            hours.setHours(hours.getHours() + 1);
            return hours;
        case ClockActions.SET_SECONDS:
            let seconds = new Date(state.getTime());
            seconds.setSeconds(seconds.getSeconds() + 1);
            return seconds;
        default:
            return state;
    }
};