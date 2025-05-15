import { Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { Catalog, Contacts, Home, Products } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/Categories/:category" element={<Catalog />} />
      </Route>
    </Routes>
  );
};

export default App;
