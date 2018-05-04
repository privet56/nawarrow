import { navStore } from './navstore';
import { observable, autorun, action, computed } from 'mobx';
import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { getProjects, pushProject, pushProjectStatus } from './fbdbwrapper';

/* TODO: use oauth to login
import OAuthManager from 'react-native-oauth';
const manager = new OAuthManager('learningreactnative')
manager.configure({
    twitter: {
        consumer_key: 'CONSUMER_KEY',
        consumer_secret: 'CONSUMER_SECRET'}
    })
export { manager }
*/
class UserStore
{
    @observable userData = {};
    @action tryToLogIn()
    {
        AsyncStorage.getItem('@nawarrow:authToken').then((result) => {
            if (result === null)
            {
                this.getUser()
            }
            else
            {
                navStore.dispatch(NavigationActions.navigate({ routeName: "login" }))
            }
        })
        .catch(result => {
            navStore.dispatch(NavigationActions.navigate({ routeName:"login" }))
        })
    }
    @action
    setUserData(data)
    {
        this.userData = data;
    }
    @action login()
    {
        this.setUserData(todo);
        AsyncStorage.setItem('@nawarrow', JSON.stringify(todo));
        navStore.dispatch(NavigationActions.navigate({ routeName: "mainFlow" }));
    }
    @action.bound getUser()
    {
        this.setUserData(todo);
        navStore.dispatch(NavigationActions.navigate({ routeName: "mainFlow" }));
    }
}
export const userStore = new UserStore();
