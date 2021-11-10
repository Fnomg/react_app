import React from "react";

import {Sidebar} from "../components/Sidebar/Sidebar";

export const Main = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        Мой профиль
      </div>
    </>

  )
}