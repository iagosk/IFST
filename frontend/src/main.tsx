import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from "react-router";
import LoginView from './views/LoginView.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
      <Route path="login" element={<LoginView />}></Route>
    </Routes>
  </BrowserRouter>,
)
