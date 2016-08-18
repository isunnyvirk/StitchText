import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer.jsx';
import FolderReducer from './FolderReducer.jsx';
import NotesReducer from './NotesReducer.jsx';
import SingleNoteReducer from './SingleNoteReducer.jsx';
import NotesInFolderReducer from './NotesInFolderReducer.jsx';
import NotificationReducer from './NotificationReducer.jsx';
import SingleFolderReducer from './SingleFolderReducer.jsx';

const appReducer = combineReducers({
  users: AuthReducer,
  folders: FolderReducer,
  notes: NotesReducer,
  singleNote: SingleNoteReducer,
  notesInFolder: NotesInFolderReducer,
  notifications: NotificationReducer,
  singleFolder: SingleFolderReducer,
});

export default appReducer;
