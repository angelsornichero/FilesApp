import { UserDashboard } from "../../../components/userDashboard/userDashboard"

export default function PathPage ({params}) {
    const { path } = params
    return <UserDashboard path={path} />
}