import { createRoot } from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { App } from './App';
import { HomePage } from './components/HomePage';
import { PeoplePage } from './components/PeoplePage';
import { PageNotFound } from './components/PageNotFound';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="people">
            <Route path=":user?" element={<PeoplePage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <App />
    </Router>,
  );