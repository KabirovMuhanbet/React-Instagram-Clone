import '../styles/App.scss';
import Cards from './Cards/Cards';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';
import { Route } from 'react-router';
import Direct from './Direct/Direct';
import Explore from './Explore/Explore';
import UserProfile from './UserProfile/UserProfile';

function App() {
   return (
      <div className="App">
         <Navigation />
         <Route exact path="/" render={() =>
            <main>
               <div className="container">
                  <Cards />
                  <Sidebar />
               </div>
            </main>
         } />
         <Route path="/direct" render={() =>
            <main>
               <div className="container">
                  <Direct />
               </div>
            </main>
         } />
         <Route path="/explore" render={() =>
            <main>
               <div className="container">
                  <Explore image="https://picsum.photos/300/300"/>
               </div>
            </main>
         } />
         <Route path="/profile" render={() =>
            <main>
               <div className="container">
                  <UserProfile />
               </div>
            </main>
         } />
      </div>
   );
}

export default App;
