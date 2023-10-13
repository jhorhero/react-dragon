import Header from "../Shared/Header/Header";
import LeftSideNev from "../Shared/LefthsideNev/LeftSideNev";
import Navber from "../Shared/Nevber/Navber";
import RightSideNev from "../Shared/RighsideNav/RightSideNev";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
           
            <h1 className="font-popins text-3xl font-bold">Home</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNev></LeftSideNev>
                </div>
                <div className="md:col-span-2 border">
                    <h2>Comign soons</h2>
                </div>
                <div className="border">
                    <RightSideNev></RightSideNev>
                    </div>
            </div>
        </div>
    );
};

export default Home;