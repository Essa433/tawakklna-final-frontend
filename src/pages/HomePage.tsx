import { HomeComponent } from "../componant/HomeComponant";
import { Navbar } from "../componant/Navbar";
import "../styles/index.css"
import "../styles/home.css"
export function HomePage() {
    return (
        <>
            <div>

                <div>
                    <Navbar />
                </div>
                <div>

                    <HomeComponent />
                </div>

                {/* <div>
                <Sidebar />

            </div> */}
            </div>
        </>
    )
}