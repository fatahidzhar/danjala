import DashboardComponent from "@/components/client/DashboardComponents"
import HomeComponents from "@/components/client/HomeComponents"

const Home = () => {
    return (

        <div className="flex flex-col">
            <DashboardComponent>
                <HomeComponents />
            </DashboardComponent>
        </div>
    )
}
export default Home