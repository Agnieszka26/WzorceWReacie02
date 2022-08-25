import {ContextProvider} from "./components/Context/ContextPassphrase";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Places from "./components/Places/Places";
import Movies from "./components/Movies/Movies";
import Content from "./components/Content/Content";
import PassPhraseForm from "./components/PassphraseForm/PassphraseForm";
import LayoutsWithNavbar from "./components/Layout/Layout";
import {ContextProviderUserDetails} from "./components/Context/ContextUserDetails";
function App() {
  return (
    <>
      <ContextProviderUserDetails>
        <ContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LayoutsWithNavbar />}>
                <Route path="/app" element={<Content />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/places" element={<Places />} />
                <Route path="/" element={<PassPhraseForm />} />
              </Route>
            </Routes>
          </Router>
        </ContextProvider>
      </ContextProviderUserDetails>
    </>
  );
}

export default App;
