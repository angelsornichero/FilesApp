import { ContentComponent } from "./content";
import { AddForm } from "./addForm";
import { PersonalInfo } from "./userInformation";
import { MkdirForm } from "./mkdirForm";
export function UserDashboard (path) {
    path === null ? '-' : path
    return (
        <div>
            <PersonalInfo path={path} />
            <AddForm path={path} />
            <MkdirForm path={path} />
            <ContentComponent path={path} />
        </div>
    )
}