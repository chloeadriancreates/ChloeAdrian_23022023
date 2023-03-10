import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CalorieTracker from "../../components/CalorieTracker/CalorieTracker";
import Counter from "../../components/Counter/Counter";
import Greeting from "../../components/Greeting/Greeting";
import Template from "../../components/Template/Template";
import { getUserData } from "../../utils/getUserData";
import "./Profile.scss";

function Profile() {
    let { id } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        getUserData(id, setUser);
        // getData(`http://localhost:3000/user/${id}/average-sessions`, setAverageSession);
        // getData(`http://localhost:3000/user/${id}/performance`, setPerformance);
    }, [id]);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <Template>
            { user &&
                <div>
                    <Greeting name={user.name} />
                    <div className="stats">
                        <div className="stats-graphs">
                            <CalorieTracker data={user.pastWeek} />
                        </div>
                        <div className="stats-counters">
                            <Counter value={user.overview.calories} type="Calories" />
                            <Counter value={user.overview.protein} type="Protéines" />
                            <Counter value={user.overview.carbs} type="Glucides" />
                            <Counter value={user.overview.lipids} type="Lipides" />
                        </div>
                    </div>
                </div>
            }
        </Template>
    );
}

export default Profile;