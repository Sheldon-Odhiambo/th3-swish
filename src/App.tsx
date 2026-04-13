/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import SchedulePage from './pages/SchedulePage';
import TablePage from './pages/TablePage';
import PlayerProfilePage from './pages/PlayerProfilePage';
import FanZonePage from './pages/FanZonePage';
import PartnerPage from './pages/PartnerPage';
import AwayTripsPage from './pages/AwayTripsPage';
import EntertainmentPage from './pages/EntertainmentPage';
import KidsClubPage from './pages/KidsClubPage';
import FanClubsPage from './pages/FanClubsPage';
import TicketsPage from './pages/TicketsPage';
import ShopPage from './pages/ShopPage';
import TicketShopPage from './pages/TicketShopPage';
import OrganizationPage from './pages/OrganizationPage';
import NewsDetailPage from './pages/NewsDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/season" element={<SchedulePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/player/:id" element={<PlayerProfilePage />} />
        <Route path="/fanzone" element={<FanZonePage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/away-trips" element={<AwayTripsPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/kids-club" element={<KidsClubPage />} />
        <Route path="/fan-clubs" element={<FanClubsPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/ticket-shop" element={<TicketShopPage />} />
        <Route path="/organization" element={<OrganizationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
