import { observable, action, computed } from 'mobx';
import { getProjects, pushProject, pushProjectStatus } from './fbdbwrapper';

export default class ProjectsStore
{
  @observable
  projects = []

  @observable
  unsubscribeFn = null;

  @action
  postProjectToServer(project){
    pushProject(project)
  }
  @action
  postProjectStatusToServer(project, index, status){
    pushProjectStatus(project, index, status)
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
