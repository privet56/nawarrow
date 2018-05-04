import { MainScreenNavigator } from '../App';
import { observable, action } from 'mobx';
import { NavigationActions } from 'react-navigation';

class NavStore
{
    @observable.ref navigationState = MainScreenNavigator.router.getStateForAction(NavigationActions.init({}))

    @action dispatch = (action, stackNavState = true) => {
        const previousNavState = stackNavState ? this.navigationState : null;
        return this.navigationState = MainScreenNavigator.router.getStateForAction(action, previousNavState);
    }
}

export const navStore = new NavStore();
