import React from "react";
import { Container } from "reactstrap";
import NotesSidebar from "../components/NotesSideBar";
import Header from "../components/Header";
import NotesList from "../components/NotesList";
import NoteEditor from "../components/NoteEditor";

const NotePad = () => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: 0, overflow: 'hidden' }}>
      {/********Header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex" style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea" style={{ flex: '0 0 250px', backgroundColor: '#1a1a1a', height: '100%', overflow: 'hidden' }}>
          <NotesSidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea" style={{ flexGrow: 1, overflowY: 'auto' }}>
          {/********Middle Content**********/}
          <Container className="p-0" fluid>
            <NoteEditor /> {/* Replace this with your note editing component */}
          </Container>
        </div>
      </div>
    </main>
  );
};

export default NotePad;
