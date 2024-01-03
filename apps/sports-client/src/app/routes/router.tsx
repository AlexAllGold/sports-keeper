import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { Clubs } from '../components/clubsComponents/Clubs';
import { Clients } from '../components/clientsComponents/Clients';
import { NotFound } from '../components/NotFound';
import { LayoutNavigationBar } from '../layouts/Layout.navigation.bar';
import { Club } from '../components/clubsComponents/Club';
import { Client } from '../components/clientsComponents/Client';
import { ClubsForm } from '../components/registrationsForm/ClubsForm';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutNavigationBar />}>
          <Route index element={<Home />} />
          <Route path='clubs' element={<Clubs />} />
          <Route path='clubs/:id' element={<Club />} />
          <Route path='clubs/:id/clients' element={<Clients />} />
          <Route path='clubs/:id/clients/:id' element={<Client />} />
          <Route path='form' element={<ClubsForm />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
