import Navbar from './modules/navbar/Navbar'
import './App.css'
import {currentUser} from "./model/IUser";
const App = () => {

    return (
        <div className="App">
            <Navbar user={currentUser}/>
        </div>
    )
}

export default App
