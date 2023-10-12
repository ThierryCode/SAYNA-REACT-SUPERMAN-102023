import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Game } from './pages/Game'
import { Eshop } from './pages/Eshop/Eshop';
import { Ficheproduit } from './pages/Eshop/Cart/Ficheproduit';
import { Panier } from './pages/Eshop/Cart/Panier';
import { Commandes } from './pages/Eshop/Cart/Commandes';
import { Authentification } from './pages/Eshop/Achat/Authentification';
import { Livraison } from './pages/Eshop/Achat/Livraison';
import { Catalogue } from './pages/Eshop/Catalogue/Catalogue';
import { Moncompte } from './pages/Moncompte/Moncompte';
import { Connexion } from './pages/Moncompte/Connexion/Connexion';
import { Inscription } from './pages/Moncompte/Connexion/Inscription';
import { Deconnexion } from './pages/Moncompte/Connexion/Deconnexion';
import { Confirmation } from './pages/Eshop/Validation/Confirmation';
import { Useraccount } from './pages/Moncompte/Useraccount/Useraccount';
import { Provider } from 'react-redux';
import { store } from './features/store/store';

import './App.css';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/game" element={<Game />}/>
          <Route path="/eshop" element={<Eshop />}>
            <Route path="/eshop" index element={<Catalogue />}/>
            <Route path="ficheproduit" element={<Ficheproduit />}/>
            <Route path="panier" element={<Panier />}/>
            <Route path="commandes" element={<Commandes />}/>
            <Route path="authentification" element={<Authentification />}/>
            <Route path="livraison" element={<Livraison />}/>
            <Route path="confirmation" element={<Confirmation />}/>
          </Route>
          <Route path="/Moncompte" element={<Moncompte />}>
            <Route path="/Moncompte" index element={<Inscription />}/>
            <Route path="connexion" element={<Connexion />}/>
            <Route path="deconnexion" element={<Deconnexion />}/>
            <Route path="useraccount" element={<Useraccount />}/>
          </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
    </>
  );
}

export default App;
