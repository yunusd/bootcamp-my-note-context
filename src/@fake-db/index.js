import notesDB from './notesDB';

const initDB = () => {
    localStorage.setItem('notes', JSON.stringify(notesDB.notes))
}

initDB();