import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Container } from "reactstrap";
import ChatComponent from "../components/ChatWindow";

const MainWindow = () => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: 0 }}>
      {/********header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex flex-grow-1" style={{ display: 'flex', flexGrow: 1 }}>
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea" style={{ flex: '0 0 250px', backgroundColor: '#1a1a1a', height: '100%' }}>
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {/********Middle Content**********/}
          <Container className="p-0" fluid style={{ flex: 1 }}>
            <ChatComponent />
            {/* If you need the Outlet, you can uncomment it */}
            {/* <Outlet /> */}
          </Container>
        </div>
      </div>
    </main>
  );
};

export default MainWindow;
