const notesDB = {
    notes: [
        {
            id: 0,
            content: "Lorem ipsum"
        },
        {
            id: 1,
            content: "Lorem ipsum 2"
        }
    ]
}

export const getNote = (id) => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes).find(note => note.id == id) : null
}

export const getNotes = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : []
}

export const createNote = (note) => {
    notesDB.notes = [note, ...notesDB.notes]
    localStorage.setItem('notes', JSON.stringify(notesDB.notes));

    return note
}

export const removeNote = (id) => {
    notesDB.notes = notesDB.notes.filter(note => note.id !== id);
    const notes = localStorage.setItem('notes', JSON.stringify(notesDB.notes));
    
    return notes;
}


export default notesDB;