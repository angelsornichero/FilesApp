import { ContentComponent } from "./content";

export function UserDashboard (path) {
    path === null ? '-' : path
    return (
        <ContentComponent path={path} />
    )
}