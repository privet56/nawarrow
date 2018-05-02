import { observable, action, computed } from 'mobx';
import { getProjects, pushProject } from './fbdbwrapper';

export default class ProjectsStore
{
  @observable
  projects = []

  @observable
  unsubscribeFn = null;

  @action
  postProjectToServer(project){
    postData(project)
  }

  @action
  updateProjects(projects){
    this.projects = Object.values(projects.val());
  }

  @action
  subscribeToGetProjectsFromServer(){
    this.unsubscribeFn = getProjects(this.updateProjects.bind(this))
  }

  @action
  unSubscribeToGetProjectsFromServer(){
    this.unsubscribeFn = this.unsubscribeFn();
  }
}
