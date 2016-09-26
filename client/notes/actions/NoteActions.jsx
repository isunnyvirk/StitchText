import { browserHistory } from 'react-router';
import { getOneFolder } from '../../folders/actions/FolderActions.jsx';

export function notesSuccess(notes) {
  return {
    type: 'GET_NOTES_SUCCESS',
    notes,
  };
}

export function notesFailure(message) {
  return {
    type: 'GET_NOTES_FAILURE',
    message,
  };
}

export function receiveSingleNote(note) {
  return {
    type: 'GET_SINGLE_NOTE_SUCCESS',
    note,
  };
}

export function failureSingleNote(message) {
  return {
    type: 'GET_SINGLE_NOTE_FAILURE',
    message,
  };
}

export function pendingSingleNote() {
  return {
    type: 'GET_SINGLE_NOTE_PENDING',
  };
}

export function receiveNotesInFolder(notes) {
  return {
    type: 'GET_ALL_NOTES_IN_FOLDER',
    notes,
  };
}

// Get all the notes that user has
export function getAllNotes() {
  const token = localStorage.getItem('jwtToken');
  return (dispatch) => {
    return fetch('/api/notes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })
    .then(res => res.json())
    .then(data => dispatch(notesSuccess(data)))
    .catch(err => dispatch(notesFailure(err)));
  };
}

// Get a specific note that the user requested
export function getOneNote(noteId) {
  const token = localStorage.getItem('jwtToken');

  return (dispatch) => {
    dispatch(pendingSingleNote());
    return fetch(`/api/notes/${noteId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })
    .then(res => res.json())
    .then((data) => {
      dispatch(receiveSingleNote(data));
      dispatch(getOneFolder(data.folder || {}));
    })
    .catch(err => dispatch(failureSingleNote(err)));
  };
}

// Get all notes in a specific folder
export function getNotesInFolder(folderId) {
  const token = localStorage.getItem('jwtToken');
  return (dispatch) => {
    return fetch(`/api/notes?folderId=${folderId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })
    .then(res => res.json())
    .then(data => dispatch(receiveNotesInFolder(data)))
    .catch(err => dispatch(notesFailure(err)));
  };
}

/**
* Functionality: Creates a new note
* Parameters: Optional folderId
* Returns: Newly created note
* TODO: remove folderID for blank note creation
* TODO: why have content required on a newly created note, should it not be blank?
*/
export function createNote() {
  const token = localStorage.getItem('jwtToken');
  return (dispatch) => {
    return fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })
    .then(res => res.json())
    .then(data => {
      dispatch(receiveSingleNote(data));
      browserHistory.replace(`/notes/${data.id}`);
    })
    .catch(err => dispatch(notesFailure(err)));
  };
}

export function createNoteInFolder(folderId) {
  const token = localStorage.getItem('jwtToken');
  return (dispatch) => {
    return fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify({
        folderId,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })
    .then(res => res.json())
    .then(data => browserHistory.push(`/notes/${data.id}`))
    .catch(err => dispatch(notesFailure(err)));
  };
}

export function saveNote(noteId, name, content) {
  const token = localStorage.getItem('jwtToken');
  return (dispatch) => {
    return fetch(`/api/notes/${noteId}`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })
    .catch(err => dispatch(notesFailure(err)));
  };
}

export function renameNote(content, title) {
  const token = localStorage.getItem('jwtToken');
  const noteId = content.id;
  return (dispatch) => {
    return fetch(`/api/notes/${noteId}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: title,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })
    .then(() => {
      dispatch(getAllNotes());
      dispatch(getOneNote(noteId));
      if (content.folderId) {
        dispatch(getNotesInFolder(content.folderId));
      }
    });
  };
}


export function deleteNote(noteId, redirect) {
  const token = localStorage.getItem('jwtToken');
  return (dispatch) => {
    return fetch(`/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })
    .then(() => {
      dispatch(getAllNotes());
      if (redirect) {
        browserHistory.replace('/');
      }
    })
    .catch(err => console.log(err));
  };
}
