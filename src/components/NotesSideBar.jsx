import React, { useState, useEffect } from "react";
import { Button, Nav, NavItem } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";

const Sidebar = () => {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Fetch notes from the API
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/notes');
                setNotes(response.data);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();
    }, []);

    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };

    const handleNoteClick = (noteId) => {
        navigate(`/edit/${noteId}`); // Navigate to the NoteEditor with the note ID
    };

    const handleAddNewNote = () => {
        navigate('/create'); // Navigate to the NoteEditor without an ID
    };

    return (
        <div className="sidebar-container">
            <div className="d-flex align-items-center">
                <Button
                    color="primary"
                    className="add-button"
                    onClick={handleAddNewNote}
                >
                    <i className="bi bi-plus"></i> Add New Note
                </Button>
            </div>
            <div
                className="profilebg"
                style={{ background: `url(${probg}) no-repeat` }}
            >
                <div className="p-3 d-flex">
                    <img src={user1} alt="user" width="50" className="rounded-circle" />
                    <Button
                        color="white"
                        className="ms-auto text-white d-lg-none"
                        onClick={() => showMobilemenu()}
                    >
                        <i className="bi bi-x"></i>
                    </Button>
                </div>
                <div className="bg-dark text-white p-2 opacity-75">Gourav R</div>
            </div>
            <div className="p-3 my-2 py-4 bg-light sidebar-content" style={{ height: 'calc(100vh - 150px)', overflowY: 'auto' }}>
                <Nav vertical className="sidebarNav">
                    {notes.length > 0 ? (
                        notes.map((note) => (
                            <NavItem key={note._id} className="mb-2">
                                <Button
                                    color="light"
                                    className="sidebar-button"
                                    onClick={() => handleNoteClick(note._id)}
                                    style={{ width: '100%', textAlign: 'left' }}
                                >
                                    {note.title}
                                </Button>
                            </NavItem>
                        ))
                    ) : (
                        <div>No notes available</div>
                    )}
                </Nav>
            </div>
        </div>
    );
};

export default Sidebar;
