import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ChatComponent from "../components/ChatWindow";
import { Container } from "reactstrap";
import DatabaseListPage from "./DatabaseListPage";

const FullLayout = () => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: 0, overflow: 'hidden' }}>
      {/********Header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex" style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea" style={{ flex: '0 0 250px', backgroundColor: '#1a1a1a', height: '100%', overflow: 'hidden' }}>
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea" style={{ flexGrow: 1, overflowY: 'auto' }}>
          {/********Middle Content**********/}
          <Container className="p-0" fluid>
            <DatabaseListPage />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
