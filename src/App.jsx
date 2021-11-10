import './App.css';
import * as React from 'react';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {MainSection} from "./components/MainSection/MainSection";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import {
  ABOUT_ROUTE,
  CHATS_ROUTE, FEED_ROUTE,
  FRIENDS_ROUTE,
  MAIN_ROUTE, NOT_FOUND_ROUTE,
} from "./components/constants/constants";
import {Main} from "./pages/main";
import {Chats} from "./pages/chats";
import {Friends} from "./pages/friends";
import {Feed} from "./pages/feed";
import {NotFoundPage} from "./pages/not-found-page";

const App = () => {

  return (
    <Router>
          <nav>
              <Link to={MAIN_ROUTE}>Моя страница</Link>
              <Link to={CHATS_ROUTE}>Мессенеджер</Link>
              <Link to={FRIENDS_ROUTE}>Друзья</Link>
              <Link to={FEED_ROUTE}>Новости</Link>
          </nav>
        <div className="content">
            <Routes>
              <Route path={MAIN_ROUTE} element={<Main />}/>
              <Route path={CHATS_ROUTE} element={<Chats />}/>
              <Route path={FRIENDS_ROUTE} element={<Friends />}/>
              <Route path={FEED_ROUTE} element={<Feed />}/>
              {/*<Route path={NOT_FOUND_ROUTE}>Page not found</Route>*/}
              <Route path={NOT_FOUND_ROUTE} render={() => <Navigate to={NOT_FOUND_ROUTE} />} />

            </Routes>
          {/*<Sidebar />*/}
          {/*<MainSection />*/}
        </div>
    </Router>
  )
}

export default App;
