import { useContext, useEffect, useState } from "react";
import {createNote, getNotes, removeNote} from "../../../@fake-db/notesDB";
import AuthContext from "../../context/AuthContext";
import PageLayout from "../../shared-components/page-layout";
import Logout from "../logout";
import NewNote from "./NewNote";
import NoteList from "./NoteList";

const Notes = () => {
    const {user} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        if(!notes) setNotes(getNotes());
        setIsLoading(false)
    }, [notes])

    const handleSubmit = (note) => {
        createNote({ id: notes.length, content: note });
        setNotes(getNotes())
    };
    const handleRemove = (id) => {
        removeNote(id);
        setNotes(getNotes())
    }

    if (isLoading) return <div>loading</div>

    return (
        <PageLayout 
            header={
                <>
                    <div>Hoşgeldin, {user.username} <Logout /></div>
                    <NewNote handleSubmit={handleSubmit} />
                </>
            } 
            content={<NoteList data={notes} handleRemove={handleRemove} />}
        />
    )
}

export default Notes;