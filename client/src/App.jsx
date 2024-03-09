import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Collections from './Browse/Collections';
import Categories from './Browse/Categories';
import Authors from './Browse/Authors';
import CategoryPage from './Browse/CategoryPage';
import PublisherPage from './Browse/PublisherPage';
import JournalPage from './components/JournalPage';
import Publishers from './Browse/Publishers';
import AuthorDashboard from './Browse/AuthorDashboard';
import AuthorRegistration from './components/AuthorRegistration';
import EditorDashboard from './Browse/EditorDashboard';
import { ContextProvider } from './context/Contexts';
import AdvancedSearch from './Others/AdvancedSearch';
import './index.css';
import SearchPage from './components/SearchPage';
import EditorRegistration from './components/EditorRegistration';
import ReviewerRegistration from './components/ReviewerRegistration';
import JournalPage2 from './components/JournalPage2';

const App = () => {
  return (
    <div>
      <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='browseByPublishers' element={<Publishers />}/>
          <Route path='/browseBycollections' element={<Collections />}/>
          <Route path='/browseBycategories' element={<Categories />}/>
          <Route path='/Search' element={<SearchPage />} />
          <Route path='/journal2' element={<JournalPage2 />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path='/AdvancedSearch' element={<AdvancedSearch/>}/>
          <Route path='/AuthorDashboard' element={<AuthorDashboard/>}/>
          <Route path='/EditorDashboard' element={<EditorDashboard/>}/>
          <Route path='/publisher/:pubId' element={<PublisherPage />} />
          <Route path='/journal/:journalId' element={<JournalPage />} />
          <Route path="/AuthorRegistration" element={<AuthorRegistration />} />
          <Route path="/EditorRegistration" element={<EditorRegistration />} />
          <Route path='/ReviewerRegistration' element={<ReviewerRegistration />}/>
          <Route path='/browseByauthors' element={<Authors />}/>
        </Routes>
      </Router>
      </ContextProvider>
    </div>
  );
};

export default App;
