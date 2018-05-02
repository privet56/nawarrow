export const PROJECTSTATUS_WIP = "wip";
export const PROJECTSTATUS_FINISHED = "finished";

class ProjectModel
{

    constructor()
    {
        this.name = '';
        this.description = '';
        this.status = '';
    }
}

export default ProjectModel;
