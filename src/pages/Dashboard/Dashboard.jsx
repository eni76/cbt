import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import StudentDashboard from "./DashboardComponent/StudentDashboard";
import Layout from "../../components/layout/Layout";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <Layout>
            <div>
                {user?.role === 'admin' ? <h1>Admin Dashboard</h1> : user?.role === 'student' ? <StudentDashboard /> : user?.role === 'school' ? <h1>Schools Dashboard</h1> : <h1>Not a const [state, dispatch] = useReducer(first, second, third)</h1>}
            </div>
        </Layout>
    );
}

export default Dashboard;