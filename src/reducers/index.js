import { combineReducers } from 'redux';
import projects from './reducer_projects';
import main_projects from './main_projects';
const rootReducer = combineReducers({
  projects: projects,
  main_projects: main_projects
});

export default rootReducer;
