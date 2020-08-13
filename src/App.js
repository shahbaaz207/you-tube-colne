import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideo from "./components/RecommendedVideo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exect path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route exect path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
