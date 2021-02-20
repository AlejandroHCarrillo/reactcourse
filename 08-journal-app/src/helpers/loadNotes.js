import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) =>{
    // console.log('[loadNotes] uid: ', uid);
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];
    
    notesSnap.forEach( note => {
        // console.log("nota", note.data());
        notes.push({
            id: note.id,
            ...note.data()
        });
    });

    // console.log(notes);
    
    return notes;
}