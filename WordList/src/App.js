import InitialScream from "./Pages/InitialScreeam";
import { Routes, Route } from "react-router-dom";
import WordList from "./Pages/WordList";
import NotFound from "./Pages/NotFound";
import IndividualWordList from "./Pages/IndividualWordList";
import StudyList from "./Pages/StudyList";
import WordListStoreProvider from "./context/WordListStore";

const App = () => {
  return (
    <div className="App">
      <WordListStoreProvider>
        <Routes>
          <Route exact path="/" element={<InitialScream />} />
          <Route exact path="/:id" element={<WordList />} />
          <Route exact path="/:id/:index" element={<IndividualWordList />} />
          <Route exact path="/:id/study:index" element={<StudyList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </WordListStoreProvider>
    </div>
  );
};

export default App;
