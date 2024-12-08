import { useLoaderData } from "react-router-dom";
import Carousel from "../Components/Carousel";
import GamesSwiper from "../Components/GamesSwiper";
import GameGenric from "../Components/GameGenric";
import UpcomingGame from "../Components/UpcomingGame";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <section>
                <Carousel></Carousel>
            </section>
            <section>
                <GamesSwiper data={data}></GamesSwiper>
            </section>
            <section>
                <GameGenric></GameGenric>
            </section>
            <section>
                <UpcomingGame></UpcomingGame>
            </section>
        </div>
    );
};

export default Home;