/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { City, GarbaEvent, CompetitionSummary } from './types';
import { EVENTS_DATA, COMPETITIONS_DATA, ARTISTS_DATA } from './data/mockData';
import { Language } from './utils/translations';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FastPassModal } from './components/FastPassModal';
import { ReportModal } from './components/ReportModal';
import { AiSearchModal } from './components/AiSearchModal';

import { ExploreView } from './views/ExploreView';
import { EventDetailView } from './views/EventDetailView';
import { RadarView } from './views/RadarView';
import { CompetitionsView } from './views/CompetitionsView';
import { CompetitionDetailView } from './views/CompetitionDetailView';
import { MyGarbaView } from './views/MyGarbaView';
import { ArtistsView } from './views/ArtistsView';
import { CompareView } from './views/CompareView';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('explore');
  const [currentCity, setCurrentCity] = useState<City>('Ahmedabad');
  const [selectedEventId, setSelectedEventId] = useState<string>('event-gmdc-ahmedabad');
  const [selectedCompetitionId, setSelectedCompetitionId] = useState<string>('comp-couple-05');
  const [language, setLanguage] = useState<Language>('en');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals State
  const [isPassModalOpen, setIsPassModalOpen] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [reportTargetEventId, setReportTargetEventId] = useState<string | undefined>(undefined);
  const [isAiSearchOpen, setIsAiSearchOpen] = useState<boolean>(false);

  // Saved Events in Browser LocalStorage (Section 30: "My Garba" Without Login)
  const [savedEventIds, setSavedEventIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('garba_saved_events');
      return saved ? JSON.parse(saved) : ['event-gmdc-ahmedabad'];
    } catch {
      return ['event-gmdc-ahmedabad'];
    }
  });

  // User Reports Queue
  const [userReports, setUserReports] = useState<any[]>([]);

  // Sync saved events to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('garba_saved_events', JSON.stringify(savedEventIds));
    } catch {}
  }, [savedEventIds]);

  const toggleSaveEvent = (eventId: string) => {
    setSavedEventIds((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  };

  const handleOpenReportModal = (eventId?: string) => {
    setReportTargetEventId(eventId);
    setIsReportModalOpen(true);
  };

  const handleReportSubmitted = (report: { eventName: string; category: string; description: string }) => {
    setUserReports((prev) => [
      ...prev,
      {
        ...report,
        id: `rep-${Date.now()}`,
        submittedAt: new Date().toLocaleTimeString()
      }
    ]);
  };

  const handleSelectEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    setActiveTab('event-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCompetition = (compId: string) => {
    setSelectedCompetitionId(compId);
    setActiveTab('competition-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active event and competition objects
  const currentEvent = EVENTS_DATA.find((e) => e.id === selectedEventId) || EVENTS_DATA[0];
  const currentCompetition =
    COMPETITIONS_DATA.find((c) => c.id === selectedCompetitionId) || COMPETITIONS_DATA[0];
  const savedEventsList = EVENTS_DATA.filter((e) => savedEventIds.includes(e.id));

  return (
    <div className="min-h-screen bg-[#180d2c] text-[#ebdcff] flex flex-col font-body selection:bg-[#ff6f00] selection:text-white">
      {/* Top Application Header */}
      <Header
        currentCity={currentCity}
        onCityChange={(city) => {
          setCurrentCity(city);
          if (activeTab === 'explore') {
            setSearchQuery(city);
          }
        }}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        language={language}
        onLanguageChange={setLanguage}
        onOpenReportModal={() => handleOpenReportModal()}
        onOpenAiSearch={() => setIsAiSearchOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenPassModal={() => setIsPassModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {activeTab === 'explore' && (
          <ExploreView
            events={EVENTS_DATA}
            currentCity={currentCity}
            onCityChange={setCurrentCity}
            onSelectEvent={handleSelectEvent}
            onSelectCompetition={handleSelectCompetition}
            onToggleSaveEvent={toggleSaveEvent}
            savedEventIds={savedEventIds}
            onOpenReportModal={handleOpenReportModal}
            onNavigateToTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            language={language}
          />
        )}

        {activeTab === 'event-detail' && (
          <EventDetailView
            event={currentEvent}
            onBack={() => {
              setActiveTab('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCompetition={handleSelectCompetition}
            onOpenReportModal={handleOpenReportModal}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            language={language}
          />
        )}

        {activeTab === 'radar' && (
          <RadarView
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            language={language}
          />
        )}

        {activeTab === 'competitions' && (
          <CompetitionsView
            onSelectCompetition={handleSelectCompetition}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            language={language}
          />
        )}

        {activeTab === 'competition-detail' && (
          <CompetitionDetailView
            competition={currentCompetition}
            onBack={() => {
              setActiveTab('competitions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            language={language}
          />
        )}

        {activeTab === 'my-garba' && (
          <MyGarbaView
            savedEvents={savedEventsList}
            onSelectEvent={handleSelectEvent}
            onRemoveSavedEvent={toggleSaveEvent}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            language={language}
          />
        )}

        {activeTab === 'artists' && (
          <ArtistsView
            onSelectEvent={handleSelectEvent}
            language={language}
          />
        )}

        {activeTab === 'compare' && (
          <CompareView
            events={EVENTS_DATA}
            onSelectEvent={handleSelectEvent}
            language={language}
          />
        )}
      </main>

      {/* Global Modals */}
      <FastPassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
      />

      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        events={EVENTS_DATA}
        selectedEventId={reportTargetEventId}
        onReportSubmitted={handleReportSubmitted}
      />

      <AiSearchModal
        isOpen={isAiSearchOpen}
        onClose={() => setIsAiSearchOpen(false)}
        events={EVENTS_DATA}
        competitions={COMPETITIONS_DATA}
        artists={ARTISTS_DATA}
        onSelectEvent={handleSelectEvent}
        onSelectCompetition={handleSelectCompetition}
        onSelectArtist={() => setActiveTab('artists')}
      />

      {/* Global Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenReportModal={() => handleOpenReportModal()}
      />
    </div>
  );
}
