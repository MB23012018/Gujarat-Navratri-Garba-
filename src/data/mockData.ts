import { GarbaEvent, ArtistProfile, CompetitionSummary } from '../types';

export const COMPETITIONS_DATA: CompetitionSummary[] = [
  {
    id: 'comp-couple-05',
    slug: 'best-garba-couple-day-5',
    code: 'RTN-COUPLE-05',
    title: 'Best Garba Couple Spardha',
    gujaratiTitle: 'શ્રેષ્ઠ ગરબા જોડી સ્પર્ધા',
    category: 'Best Traditional Garba Couple',
    nightNumber: 5,
    dateStr: 'Wed, 15 Oct 2026',
    reportingTime: '8:45 PM Sharp',
    startTime: '9:30 PM Sharp',
    locationArea: 'Circle A, GMDC Ground',
    totalCashPool: 90000,
    firstPrize: {
      cash: 51000,
      trophyTitle: 'Gold Diya Trophy & Suvarna Kalash',
      perks: ['Royal Garba Hamper', 'Pure Silver Coin (50g)', 'State Cultural Council Scroll']
    },
    entryFee: 100,
    maxSlots: 100,
    registeredSlots: 72,
    registrationOpen: true,
    judgingWeights: [
      { criteria: 'Traditional Footwork & Dodhiyu Technique', percentage: 30, description: 'Mastery of authentic steps: Dodhiyu, Popat, Hinch, and pristine Tran Taali execution.' },
      { criteria: 'Rhythm & Live Taal Synchronization', percentage: 25, description: 'Punctual step landing aligned with live dhol beats, speed transitions, and orchestra tempo.' },
      { criteria: 'Couple Coordination & Spacing', percentage: 20, description: 'Partner alignment, seamless rotational symmetry, and disciplined arena circular movement.' },
      { criteria: 'Energy, Expressions & Devotional Grace', percentage: 15, description: 'Joyful bhakti bhav, constant smiles, posture stability, and uninterrupted stamina.' },
      { criteria: 'Authentic Traditional Attire & Ornaments', percentage: 10, description: 'Original Gujarati hand-embroidered Chaniya Choli, Kediyu, Dhoti, and genuine silver/brass accessories.' }
    ],
    rules: [
      'Registration verification desk at Gate 2 opens at 8:45 PM sharp. Both partners must present digital QR passes.',
      'Batch of 10 couples performs non-stop for 3 minutes before judges shortlist top 12 for the Grand Pancham Final Circle.',
      'Bollywood western choreography steps, acrobatics, and unapproved glowing/plastic accessories result in immediate disqualification.',
      'Authentic live music curated by Kinjal Dave & Troupe. Pre-recorded audio tracks are strictly banned.',
      'Traditional hand-embroidered attire is mandatory. Commercial branding on attire is prohibited.'
    ],
    judges: [
      {
        name: 'Pandit Bhavin Soni',
        title: 'Sangeet Natak Akademi Awardee',
        credentials: '18+ years leading Saurashtra Folk Choreography and national heritage delegations.',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA31N2srkm14MQ7RQnHZ09m7dVNg7xVxpMvej2rA_jQtlfmk8dirqn1iHLDDYHD1tW4bHrfyQCmoK-jtlzFqxllECGd-afhIF5l5OqUx0cS3q_nNAHr1MxQ4nuRem-Ixd86_3Q6gnx3MKk27G0B1jXnkG0xKANkz3cMUfRZcvVgT9wAi0fkeOWAZUgzpfZAVaLf8Z-RNGDpeV2VJVAi9QnEBk_fhGfmej_ocJH2m4ssyB-aOiVs0rsd'
      },
      {
        name: 'Radhika Trivedi',
        title: 'Garba Guru & Folk Exponent',
        credentials: 'Prasar Bharati Cultural Board Member & Doordarshan Garba Mahotsav chief commentator.',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdkIB6bjlxVqCHl4aW8YzYkoKJq7n1lJVBU3xMRXqlvcYApbRYw2UPYa2J7GyKUiFFa8k5AEvBVmqYx4aq51B7kCO7fNhgJBYGolYwTy39So9Q6uLhWoQQNoluqsMKuiRacTHHtcgiZHdc-JUgbvlq9Q9peyOkGeBKnbZZiH7xF0EpvIo88GkK4Cg6X0WniV4atdVYlC1kU3M54b9Vi2p5kjw3u30123_9znAN1VD6vIKNE6V--FJV'
      }
    ]
  },
  {
    id: 'comp-mandli-07',
    slug: 'mega-mandli-raas-day-7',
    code: 'RTN-MANDLI-07',
    title: 'Mega Mandli Raas Spardha',
    gujaratiTitle: 'મેગા મંડળી રાસ સ્પર્ધા (ગ્રુપ રાસ)',
    category: 'Mega Mandli Raas Spardha',
    nightNumber: 7,
    dateStr: 'Fri, 17 Oct 2026',
    reportingTime: '8:00 PM Sharp',
    startTime: '9:45 PM Sharp',
    locationArea: 'Main Center Arena Turf, Karnavati Club',
    totalCashPool: 150000,
    firstPrize: {
      cash: 75000,
      trophyTitle: 'Rajat Dhol Championship Trophy',
      perks: ['Special Television Broadcast on Doordarshan Girnar', 'State Folk Festival Invitation', 'Gold Medallions for 16 Dancers']
    },
    entryFee: 1500,
    maxSlots: 24,
    registeredSlots: 18,
    registrationOpen: true,
    judgingWeights: [
      { criteria: 'Gop-Gunthan & Complex Rhythm Loops', percentage: 35, description: 'Interlacing ribbons and intricate wooden dandiya synchronization.' },
      { criteria: 'Troupe Uniformity & Chokdi Transitions', percentage: 30, description: 'Uniform speed, stance, jump timing, and group alignment.' },
      { criteria: 'Authentic Traditional Attire', percentage: 20, description: 'Handcrafted Kutchi/Kathiyawadi attire matching regional style.' },
      { criteria: 'Stage Energy & Taali Sound Clarity', percentage: 15, description: 'Crisp percussive claps and stamina across tempo surges.' }
    ],
    rules: [
      'Minimum 16 and maximum 24 dancers per registered troupe.',
      'Only natural seasoned wooden dandiyas allowed (fiber or metal dandiyas banned).',
      'Mandli must report 90 minutes before stage time for costume tag checks.'
    ],
    judges: [
      {
        name: 'Haresh Dholakia',
        title: 'Master Percussionist & Ethnomusicologist',
        credentials: '30+ years judging Saurashtra Folk Raas Mandlis.',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'comp-costume-all',
    slug: 'best-authentic-chaniyo-choli',
    code: 'RTN-ATTIRE-DAILY',
    title: 'Best Traditional Chaniya Choli & Kediya',
    gujaratiTitle: 'પરંપરાગત ચણિયા ચોળી અને કેડિયું સ્પર્ધા',
    category: 'Best Authentic Heritage Chaniyo',
    nightNumber: 3,
    dateStr: 'Nightly (Day 1 to Day 9)',
    reportingTime: 'Walk-in Evaluation in Circle B',
    startTime: '10:15 PM Daily',
    locationArea: 'Circle B & Central Stage',
    totalCashPool: 99000,
    firstPrize: {
      cash: 25000,
      trophyTitle: 'Suvarna Sui Gold Needle Honor',
      perks: ['Handloom Artisan Guild Memento', 'Heritage Boutique Voucher ₹10,000']
    },
    entryFee: 0,
    maxSlots: 80,
    registeredSlots: 45,
    registrationOpen: true,
    judgingWeights: [
      { criteria: 'Original Hand Embroidery & Mirror Work', percentage: 40, description: 'Rabari, Ahir, or Kutchi hand embroidery versus digital printed machine work.' },
      { criteria: 'Vegetable Dye & Handloom Fabric Integrity', percentage: 30, description: 'Pure cotton, silk, and authentic Gujarati vegetable dyed fabric.' },
      { criteria: 'Heritage Jewelry & Accessories', percentage: 20, description: 'Authentic silver borla, nath, bajuband, and mojri alignment.' },
      { criteria: 'Poise and Presentation in Garba Movement', percentage: 10, description: 'How gracefully the flare (Gher) rotates during Taali cycles.' }
    ],
    rules: [
      'Open to all verified dancers on the floor with general or VIP wristbands.',
      'Judges scan Circle B between 9:30 PM and 10:15 PM to invite finalists to central ramp.',
      'Synthetic neon polyester garments are excluded from consideration.'
    ],
    judges: [
      {
        name: 'Meenakshi Dave',
        title: 'Gujarati Textile Historian & Weaver Patron',
        credentials: 'Curator of Calico Textile Museum exhibits on Navratri attires.',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'comp-junior-04',
    slug: 'junior-garba-rising-star',
    code: 'RTN-JR-04',
    title: 'Junior Garba Rising Star (Under 16)',
    gujaratiTitle: 'જુનિયર ગરબા રાઇઝિંગ સ્ટાર (૧૬ વર્ષથી ઓછી)',
    category: 'Junior Garba Rising Star',
    nightNumber: 4,
    dateStr: 'Tue, 14 Oct 2026',
    reportingTime: '7:30 PM',
    startTime: '8:30 PM',
    locationArea: 'Heritage Garden Arena, Shankus Dandiya Vatika',
    totalCashPool: 50000,
    firstPrize: {
      cash: 30000,
      trophyTitle: 'Bal Kala Ratna Silver Shield',
      perks: ['Sangeet Natak Academy Youth Certificate', '1 Year Free Classical Dance Sponsorship']
    },
    entryFee: 0,
    maxSlots: 50,
    registeredSlots: 22,
    registrationOpen: true,
    judgingWeights: [
      { criteria: 'Rhythmic Purity & Taal Grasp', percentage: 40, description: 'Flawless execution of basic Tran Taali and Heench counts.' },
      { criteria: 'Childlike Devotion & Joyful Bhav', percentage: 30, description: 'Spontaneity, radiant smiles, and festive enthusiasm.' },
      { criteria: 'Attire & Cultural Traditionalism', percentage: 30, description: 'Age-appropriate traditional Gujarati Kediyu or Chaniya Choli.' }
    ],
    rules: [
      'Participants must be below 16 years of age on 11 Oct 2026. Age proof required.',
      'Guardian consent form must be acknowledged at reporting desk.'
    ],
    judges: [
      {
        name: 'Bhavna Ben Trivedi',
        title: 'Senior Folk Dance Mentor',
        credentials: 'Founder of Rang Mandir Bal Garba Academy Ahmedabad.',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
      }
    ]
  }
];

export const ARTISTS_DATA: ArtistProfile[] = [
  {
    id: 'artist-kinjal-dave',
    name: 'Kinjal Dave',
    gujaratiName: 'કિંજલ દવે',
    title: 'The Queen of Folk & Dhol Beats',
    bio: 'Renowned Gujarati vocalist known for electrifying stutis, Char Bangdi Vadi Gadi, and soul-stirring traditional Navratri aartis across Gujarat and internationally.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUQtklXMlEXw8JQ3gPqUm5xKrgMdioiZ_mLf-oydjXh6DERfmDDG3v5GeSyQtlrL-cTiNBS1hpz4PDM6WwNMfmdOmMuvK9n3ZrXVRq6xR33Fnx2r9GwDEFf14AmTByP__iSBx1t-rGvS5xn4rej-4SObA_mU4Bmne8ZVe681yqsMxUsi-q84YRvLAjSABopK6L7lb6P4j4MJh_237DcwGq7ukwBwzWf17fNNq8mDH31_y7a3v42_9o',
    genre: 'Traditional Gujarati Folk, Ras-Garba & Bhakti Sangeet',
    popularSongs: ['Maa Ambe Aaya', 'Jay Adhyashakti', 'Dhan Chhe Gujarat', 'Char Bangdi Vadi'],
    navratriSchedule: [
      { eventId: 'event-gmdc-ahmedabad', eventName: 'Rangtaali Navratri 2026', venueName: 'GMDC Ground', city: 'Ahmedabad', nightNumber: 1, dateStr: '11 Oct 2026', timeSlot: '8:30 PM - 12:30 AM' },
      { eventId: 'event-gmdc-ahmedabad', eventName: 'Rangtaali Navratri 2026', venueName: 'GMDC Ground', city: 'Ahmedabad', nightNumber: 5, dateStr: '15 Oct 2026', timeSlot: '8:30 PM - 12:30 AM' },
      { eventId: 'event-gmdc-ahmedabad', eventName: 'Rangtaali Navratri 2026', venueName: 'GMDC Ground', city: 'Ahmedabad', nightNumber: 9, dateStr: '19 Oct 2026', timeSlot: '8:00 PM - 1:30 AM' },
      { eventId: 'event-surat-diamond', eventName: 'Surat Diamond City Rasotsav', venueName: 'VR Ground Dumas Road', city: 'Surat', nightNumber: 3, dateStr: '13 Oct 2026', timeSlot: '9:00 PM - 1:00 AM' }
    ]
  },
  {
    id: 'artist-atul-purohit',
    name: 'Atul Purohit',
    gujaratiName: 'અતુલ પુરોહિત',
    title: 'The Legendary Voice of Vadodara Garba',
    bio: 'Sangeet Natak Akademi honored pioneer who has led United Way of Baroda for over 30 years, captivating over 40,000 dancers nightly with pristine traditional rhythm and zero commercial distortion.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
    genre: 'Prachin Raas, classical stuti, traditional Baroda style',
    popularSongs: ['Tara Vina Shyam Mane', 'Rang Tali Rang Tali', 'Kanhaiyo Kanhaiyo', 'Ma Pava Te Gadh Thi'],
    navratriSchedule: [
      { eventId: 'event-united-way-baroda', eventName: 'United Way of Baroda Garba', venueName: 'VCA Stadium Ground', city: 'Vadodara', nightNumber: 1, dateStr: '11-19 Oct 2026 (All 9 Nights)', timeSlot: '8:00 PM - 12:30 AM' },
      { eventId: 'event-gmdc-ahmedabad', eventName: 'Rangtaali Navratri 2026 (Guest Stuti)', venueName: 'GMDC Ground', city: 'Ahmedabad', nightNumber: 6, dateStr: '16 Oct 2026', timeSlot: '8:30 PM - 10:00 PM' }
    ]
  },
  {
    id: 'artist-falguni-pathak',
    name: 'Falguni Pathak',
    gujaratiName: 'ફાલ્ગુની પાઠક',
    title: 'Dandiya Queen of India',
    bio: 'The undisputed national icon of Dandiya Raas with unforgettable beats, captivating generational fans across Gujarat and worldwide with non-stop energetic choreography.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    genre: 'High-Tempo Dandiya Raas, Bollywood Gujarati Fusion',
    popularSongs: ['Chudi Jo Khanki Haathon Mein', 'Maine Payal Hai Chhankai', 'Indhana Vinva Gayi Ti', 'Aiyo Rama'],
    navratriSchedule: [
      { eventId: 'event-karnavati-ahmedabad', eventName: 'Karnavati Club Navratri Mahotsav', venueName: 'Karnavati Club Lawns', city: 'Ahmedabad', nightNumber: 4, dateStr: '14 Oct 2026', timeSlot: '9:00 PM - 1:00 AM' },
      { eventId: 'event-surat-diamond', eventName: 'Surat Diamond City Rasotsav', venueName: 'VR Ground Dumas Road', city: 'Surat', nightNumber: 7, dateStr: '17 Oct 2026', timeSlot: '9:00 PM - 1:30 AM' }
    ]
  },
  {
    id: 'artist-aditya-gadhvi',
    name: 'Aditya Gadhvi',
    gujaratiName: 'આદિત્ય ગઢવી',
    title: 'The Folk Prodigy & Khalasi Sensation',
    bio: 'Coke Studio sensation bringing raw Saurashtra Charani sahitya and youth folk vigor to Gujarat festival grounds.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    genre: 'Contemporary Folk, Charani Sahitya, Dayro & Garba',
    popularSongs: ['Khalasi (Gotilo)', 'Mahahetvali', 'Mogal Aave', 'He Mari Mahisagar Ne Aare'],
    navratriSchedule: [
      { eventId: 'event-rajpath-ahmedabad', eventName: 'Rajpath Club Garba Utsav', venueName: 'Rajpath Grounds', city: 'Ahmedabad', nightNumber: 2, dateStr: '12 Oct 2026', timeSlot: '9:00 PM - 1:00 AM' },
      { eventId: 'event-rajkot-racecourse', eventName: 'Rangilu Rajkot Ras Mahotsav', venueName: 'Race Course Ground', city: 'Rajkot', nightNumber: 6, dateStr: '16 Oct 2026', timeSlot: '8:30 PM - 1:00 AM' }
    ]
  }
];

export const EVENTS_DATA: GarbaEvent[] = [
  {
    id: 'event-gmdc-ahmedabad',
    slug: 'rangtaali-navratri-gmdc-ground-ahmedabad',
    name: 'Rangtaali Navratri 2026',
    gujaratiName: 'રંગતાળી નવરાત્રી ૨૦૨૬ • જીએમડીસી ગ્રાઉન્ડ',
    city: 'Ahmedabad',
    edition: '2026 Sanctioned Edition',
    tagline: 'Experience Gujarat\'s grandest heritage Ras-Garba mahotsav on 2,50,000 sq.ft lawn turf with authentic Dhol, Shehnai, legendary Gujarati folk icons, and 5 state-sanctioned championship rounds.',
    description: 'Organized under the patronage of Shri Gujarat Cultural Trust, Rangtaali at GMDC Ground is Ahmedabad\'s flagship cultural celebration. Spanning 2,50,000 square feet of cushioned lawn turf, this premier venue offers 4 entry plazas, an optical gate turnstile throughput system, 1,800 reserved parking bays, and direct feeder shuttles from the Gujarat Metro.',
    posterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBXzS85g9YGeKV7rpxDHFXO4-qV7JMQH0hThIVaKq_hRczcRmaFb5oYM3JjEe2qpWliuoGIyyo8wvs5Q36xgec0NDsCQQcPIbOs7DHlD0SUG5oFf_yccitNLm7OLUd-zyDDg4D4PL8aPZi3zPl3hGqHJBz-Xah8m_9iwyx8cb81XxmUAGHma0zCqQqlmPw5qKtQWpR8hWeHGGQr8O_jmVbtevi6Wj_POxCgzlfCjXziqvFbjhGM79X',
    heroBannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYgfuy1w8xUle_XPim2Z5PDzG9v0n5hRLu1YVQgt2hrBPQjbN7anYzawk7YHljkDeHLyysdHzA9NVNqKx1JBA7EQf2iDJi1DpL5Ej7nfnGxbm1r2AQTWxI_Nc82-JI5CPx4nAFg6dM3gfi4sjBhVk9wLeZmdN2GJvPv_5hp44vrYIqroWN0k61n0CTTGT7csL3SnpsPtizOXsUtscmivtRHg2dKJe9GDdeI24A49MgXNeHFtv_EL91',
    venue: {
      name: 'GMDC Ground, 132 Feet Ring Road, Vastrapur',
      address: '132 Feet Ring Rd, Near Helmet Cross Road, Vastrapur, Ahmedabad, Gujarat 380052',
      city: 'Ahmedabad',
      areaSquareFeet: 250000,
      garbaTurfAreaSqFt: 180000,
      maxDancerCapacity: 15000,
      indoorOutdoor: 'Outdoor Lawn',
      surfaceType: 'Cushioned Lawn Turf',
      gatesCount: 4,
      gates: [
        { gateNumber: 1, title: 'VIP & Dignitaries Plaza', targetAudience: 'VIP lounge, State dignitaries, valet deck access (P1)', avgWaitMinutes: 3, status: 'Steady Flow' },
        { gateNumber: 2, title: 'Competitor Express & Fast Pass', targetAudience: 'Spardha performers, registered dancers, biometrics check (80m to Stage Desk)', avgWaitMinutes: 2, status: 'Fast Moving' },
        { gateNumber: 3, title: 'General West Lawn', targetAudience: 'General day passes & P3 multideck feeder', avgWaitMinutes: 14, status: 'High Volume' },
        { gateNumber: 4, title: 'Season RFID & Metro Plaza', targetAudience: '9-Night season pass holders, 400m direct walkway from Gujarat University Metro', avgWaitMinutes: 5, status: 'Fast Moving', accessibleByMetro: true }
      ],
      medicalPost: true,
      drinkingWaterRoBooths: 6,
      freeShoeStall: true,
      womenSecurityDesk: true
    },
    startDate: '2026-10-11',
    endDate: '2026-10-19',
    datesText: '11 - 19 October 2026 (9 Sacred Nights: Aaso Sud Ekam to Navam)',
    status: 'Live Today',
    organizerName: 'Shri Gujarat Cultural Trust (Non-Profit Heritage)',
    isTrustEndorsed: true,
    verification: {
      status: 'Officially Verified',
      verifiedBy: 'Gujarat State Garba Utsav & Cultural Heritage Trust',
      lastVerifiedDate: '26 Sep 2026, 11:15 PM IST',
      sourceDocumentUrl: 'https://gujaratculturaltrust.org/gazette/2026-rangtaali'
    },
    startingPrice: 999,
    isFreeEntry: false,
    dressCodeRequirement: 'Traditional Mandatory',
    familyFriendly: true,
    featuredArtists: [
      { name: 'Kinjal Dave', role: 'Headliner Vocalist (Night 1, 5, 9)', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUQtklXMlEXw8JQ3gPqUm5xKrgMdioiZ_mLf-oydjXh6DERfmDDG3v5GeSyQtlrL-cTiNBS1hpz4PDM6WwNMfmdOmMuvK9n3ZrXVRq6xR33Fnx2r9GwDEFf14AmTByP__iSBx1t-rGvS5xn4rej-4SObA_mU4Bmne8ZVe681yqsMxUsi-q84YRvLAjSABopK6L7lb6P4j4MJh_237DcwGq7ukwBwzWf17fNNq8mDH31_y7a3v42_9o' },
      { name: 'Atul Purohit', role: 'Guest Maestro (Night 6 Aarti Special)', avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80' }
    ],
    nineDayProgram: [
      {
        dayNumber: 1,
        gujaratiDayName: 'Ekam (એકમ)',
        dateStr: 'Sun, 11 Oct 2026',
        shortDate: 'Oct 11',
        openingTime: '07:30 PM',
        closingTime: '12:30 AM',
        headlinerArtist: 'Kinjal Dave & The Sur Mandli',
        expectedCrowd: 12500,
        highlightTheme: 'Ghatasthapana & Maa Ambe Agaman Stuti',
        competitionRound: 'Attire Spot Judging Qualifiers',
        sessions: [
          { time: '07:30 PM', activity: 'Gates & Security Validation Open', stageOrArea: 'All 4 Entry Plazas', status: 'Scheduled' },
          { time: '08:00 PM', activity: 'Ghatasthapana Vedic Puja by Trust Pundits', stageOrArea: 'Mataji Chowk Mandap', status: 'Scheduled', isHighlight: true },
          { time: '08:30 PM', activity: 'Maa Ambe Stuti & Traditional 2-Taali Inception', stageOrArea: 'North Orchestral Arena', status: 'Scheduled', performer: 'Kinjal Dave' },
          { time: '10:00 PM', activity: 'Circle A Traditional Dodhiya Momentum', stageOrArea: 'Inner Turf Ring', status: 'Scheduled' },
          { time: '12:00 AM', activity: 'Maha Aarti of 10,000 Brass Diyas', stageOrArea: 'Central Chowk', status: 'Scheduled', isHighlight: true }
        ]
      },
      {
        dayNumber: 2,
        gujaratiDayName: 'Bij (બીજ)',
        dateStr: 'Mon, 12 Oct 2026',
        shortDate: 'Oct 12',
        openingTime: '07:30 PM',
        closingTime: '12:30 AM',
        headlinerArtist: 'Hemant Chauhan & Troupe',
        expectedCrowd: 13000,
        highlightTheme: 'Prachin Saurashtra Dhol Rhythm',
        competitionRound: 'Solo Garba Prince & Princess Prelims',
        sessions: [
          { time: '07:30 PM', activity: 'Turnstile Gates Open', stageOrArea: 'Gates 1 to 4', status: 'Scheduled' },
          { time: '08:30 PM', activity: 'Jay Adhyashakti Aarti', stageOrArea: 'Central Mandap', status: 'Scheduled', isHighlight: true },
          { time: '09:00 PM', activity: 'Solo Performer Preliminary Heench Rounds', stageOrArea: 'Judging Stage A', status: 'Scheduled' },
          { time: '11:00 PM', activity: 'High-Tempo Sanedo Storm', stageOrArea: 'Full Turf', status: 'Scheduled' }
        ]
      },
      {
        dayNumber: 3,
        gujaratiDayName: 'Trij (ત્રીજ)',
        dateStr: 'Tue, 13 Oct 2026',
        shortDate: 'Oct 13',
        openingTime: '07:30 PM',
        closingTime: '12:30 AM',
        headlinerArtist: 'Sanjay Oza & Devang Patel',
        expectedCrowd: 13800,
        highlightTheme: 'Heritage Kathiawadi Raas Cycle',
        competitionRound: 'Couple Spardha Preliminary Heat 1',
        sessions: [
          { time: '08:00 PM', activity: 'Gates Open & Costume Tag Verification', stageOrArea: 'Gate 2 Desk', status: 'Scheduled' },
          { time: '08:30 PM', activity: 'Opening Stuti & 3-Taali Clapping Circles', stageOrArea: 'North Arena', status: 'Scheduled' },
          { time: '09:30 PM', activity: 'Couple Spardha Heat 1 (35 Pairs Evaluated)', stageOrArea: 'Circle A', status: 'Scheduled', isHighlight: true },
          { time: '12:00 AM', activity: 'Nightly Trophy & Cash Disbursement', stageOrArea: 'Podium', status: 'Scheduled' }
        ]
      },
      {
        dayNumber: 4,
        gujaratiDayName: 'Chouth (ચોથ)',
        dateStr: 'Wed, 14 Oct 2026',
        shortDate: 'Oct 14',
        openingTime: '07:30 PM',
        closingTime: '12:30 AM',
        headlinerArtist: 'Parthiv Gohil & Classical Ensemble',
        expectedCrowd: 14200,
        highlightTheme: 'Ragas of Navratri & Classical Taal Sync',
        competitionRound: 'Junior Rising Star (U-16) Rounds',
        sessions: [
          { time: '08:30 PM', activity: 'Classical Bhairavi Stuti', stageOrArea: 'Main Stage', status: 'Scheduled' },
          { time: '09:15 PM', activity: 'Junior Under-16 Talent Exhibition', stageOrArea: 'Circle B', status: 'Scheduled', isHighlight: true },
          { time: '11:00 PM', activity: 'Full Arena 12-Step Dodhiya Sequence', stageOrArea: 'Concentric Turf', status: 'Scheduled' }
        ]
      },
      {
        dayNumber: 5,
        gujaratiDayName: 'Pancham (પાંચમ)',
        dateStr: 'Thu, 15 Oct 2026',
        shortDate: 'Oct 15',
        openingTime: '07:30 PM',
        closingTime: '01:00 AM',
        headlinerArtist: 'Kinjal Dave & The Sur Mandli Live Band',
        expectedCrowd: 14820,
        highlightTheme: 'Grand Best Garba Couple Championship Finals',
        competitionRound: 'Best Garba Couple Spardha (Code: RTN-COUPLE-05)',
        sessions: [
          { time: '08:00 PM', activity: 'Gates & Security Validation Open', stageOrArea: 'Gates 1, 2, 3, 4', status: 'Scheduled' },
          { time: '08:30 PM', activity: 'Maa Ambe Stuti & Opening 2-Taali Ras', stageOrArea: 'North Orchestral Arena', status: 'Live', isHighlight: true, performer: 'Kinjal Dave' },
          { time: '09:30 PM', activity: 'Best Garba Couple Spardha - Live Round 1', stageOrArea: 'Circle A Judging Stage', status: 'Scheduled', isHighlight: true },
          { time: '10:30 PM', activity: 'Sanedo & Dodhiya High-Tempo Whirlwind', stageOrArea: 'All 4 Concentric Turf Rings', status: 'Scheduled' },
          { time: '11:30 PM', activity: 'Traditional Dress Contest Jury Parade', stageOrArea: 'Central Runway', status: 'Scheduled' },
          { time: '12:00 AM', activity: 'Maha Aarti of Maa Jagdamba & Daily Spot Prizes', stageOrArea: 'Mataji Chowk', status: 'Scheduled', isHighlight: true },
          { time: '12:45 AM', activity: 'Encore Fast Dodhiya Sprint (Extended Session)', stageOrArea: 'North Arena', status: 'Scheduled' }
        ]
      },
      {
        dayNumber: 6,
        gujaratiDayName: 'Chhath (છઠ્ઠ)',
        dateStr: 'Fri, 16 Oct 2026',
        shortDate: 'Oct 16',
        openingTime: '07:30 PM',
        closingTime: '01:00 AM',
        headlinerArtist: 'Atul Purohit (Guest Night) + Khelaiya Troupe',
        expectedCrowd: 15000,
        highlightTheme: 'Prachin Mandvi Garba Spardha (Senior Masters 50+)',
        competitionRound: 'Prachin Mandvi Heritage Honors',
        sessions: [
          { time: '08:30 PM', activity: 'Tara Vina Shyam Classical Baroda Style Opening', stageOrArea: 'North Arena', status: 'Scheduled', performer: 'Atul Purohit' },
          { time: '10:00 PM', activity: 'Senior Masters (50+) Mandvi Earthen Pot Balances', stageOrArea: 'Inner Circle', status: 'Scheduled', isHighlight: true },
          { time: '12:15 AM', activity: 'Aarti & ₹31,000 Cash Honorarium Presentation', stageOrArea: 'Main Stage', status: 'Scheduled' }
        ]
      },
      {
        dayNumber: 7,
        gujaratiDayName: 'Satam (સાતમ)',
        dateStr: 'Sat, 17 Oct 2026',
        shortDate: 'Oct 17',
        openingTime: '07:00 PM',
        closingTime: '01:30 AM',
        headlinerArtist: 'Kinjal Dave & Osman Mir',
        expectedCrowd: 15000,
        highlightTheme: 'Mega Mandli Raas Championship Battle',
        competitionRound: 'Group Raas Spardha (16 Dancers / Troupe)',
        sessions: [
          { time: '08:30 PM', activity: 'Sufi & Folk Bhakti Fusion Stuti', stageOrArea: 'North Arena', status: 'Scheduled' },
          { time: '09:45 PM', activity: 'Mega Mandli Raas Rounds with Wooden Dandiyas', stageOrArea: 'Center Main Ring', status: 'Scheduled', isHighlight: true },
          { time: '12:30 AM', activity: 'Rajat Dhol Trophy & ₹75,000 Award Handover', stageOrArea: 'Main Stage', status: 'Scheduled' }
        ]
      },
      {
        dayNumber: 8,
        gujaratiDayName: 'Aatham (આઠમ)',
        dateStr: 'Sun, 18 Oct 2026',
        shortDate: 'Oct 18',
        openingTime: '07:00 PM',
        closingTime: '01:30 AM',
        headlinerArtist: 'Kinjal Dave & Aditya Gadhvi',
        expectedCrowd: 15000,
        highlightTheme: 'Maha Aatham Havan & Shaktipith Puja',
        competitionRound: 'Best Traditional Costume Grand Finale',
        sessions: [
          { time: '08:00 PM', activity: 'Sacred Havan & 1008 Chandi Path Recital', stageOrArea: 'Central Mandap', status: 'Scheduled', isHighlight: true },
          { time: '09:30 PM', activity: 'Charani Folk & Khalasi High-Speed Sprint', stageOrArea: 'North Arena', status: 'Scheduled' },
          { time: '11:45 PM', activity: 'Finalists Chaniyo Mirror-Work Crowning', stageOrArea: 'Runway', status: 'Scheduled' }
        ]
      },
      {
        dayNumber: 9,
        gujaratiDayName: 'Nom Finale (નોમ)',
        dateStr: 'Mon, 19 Oct 2026',
        shortDate: 'Oct 19',
        openingTime: '07:00 PM',
        closingTime: '02:00 AM',
        headlinerArtist: 'Grand Orchestra of 50 Folk Masters & Kinjal Dave',
        expectedCrowd: 15000,
        highlightTheme: 'Navratri Mahasamapan & Sharad Poornima Lead',
        competitionRound: 'State Championship Mega Felicitations',
        sessions: [
          { time: '08:30 PM', activity: 'All-Star Artists Unified Stuti', stageOrArea: 'Main Stage', status: 'Scheduled', isHighlight: true },
          { time: '10:00 PM', activity: 'Grand Circle of 15,000 Unified Dancers', stageOrArea: 'Full Turf', status: 'Scheduled' },
          { time: '12:30 AM', activity: 'State Council Trophy Disbursal (₹2,00,000 Pool)', stageOrArea: 'Podium', status: 'Scheduled', isHighlight: true },
          { time: '01:30 AM', activity: 'Farewell Aarti to Maa Ambe', stageOrArea: 'Mataji Chowk', status: 'Scheduled' }
        ]
      }
    ],
    competitions: COMPETITIONS_DATA,
    tickets: [
      {
        id: 'tkt-single',
        name: 'Single Night Entry Pass',
        platform: 'Official Trust',
        type: 'Single Day',
        basePrice: 999,
        convenienceFee: 0,
        gstTaxes: 0,
        finalPrice: 999,
        availability: 'Available',
        perks: ['Ground entry to all 4 concentric circles', 'Access to pure RO chilled water & shoe stalls', 'Auto-enrolled in Spot Attire contest', '₹0 Convenience Fee guarantee'],
        purchaseUrl: 'https://garbautsav.gujarat.gov.in/tickets/gmdc-single',
        lastChecked: '30 mins ago'
      },
      {
        id: 'tkt-bms-comp',
        name: 'Single Night Pass (BookMyShow Listed)',
        platform: 'BookMyShow',
        type: 'Single Day',
        basePrice: 999,
        convenienceFee: 178,
        gstTaxes: 32,
        finalPrice: 1209,
        availability: 'Available',
        perks: ['Standard ticket portal with BMS convenience fee added'],
        purchaseUrl: 'https://bookmyshow.com',
        lastChecked: '45 mins ago'
      },
      {
        id: 'tkt-season-rfid',
        name: '9-Night Season RFID Pass',
        platform: 'Official Trust',
        type: '9-Night Season RFID',
        basePrice: 6499,
        convenienceFee: 0,
        gstTaxes: 0,
        finalPrice: 6499,
        availability: 'Fast Filling',
        perks: ['All 9 nights uninterrupted access', 'Dedicated Gate 3 & Gate 4 fast turnstiles', 'Save 28% compared to single passes', 'Complimentary weatherproof smart wristband delivered'],
        purchaseUrl: 'https://garbautsav.gujarat.gov.in/tickets/gmdc-season',
        lastChecked: '15 mins ago'
      },
      {
        id: 'tkt-vip-lounge',
        name: 'VVIP Royal Heritage Pavilion',
        platform: 'Official Trust',
        type: 'VIP Lounge',
        basePrice: 15000,
        convenienceFee: 0,
        gstTaxes: 0,
        finalPrice: 15000,
        availability: 'Fast Filling',
        perks: ['Air-conditioned viewing gallery with cushioned sofas', 'Gate 1 Valet drop-off with reserved P1 spot', 'Unlimited gourmet Kathiyawadi & fasting buffet', 'Meet & greet with Kinjal Dave & judges'],
        purchaseUrl: 'https://garbautsav.gujarat.gov.in/tickets/gmdc-vvip',
        lastChecked: '10 mins ago'
      }
    ],
    parkingLots: [
      {
        lotId: 'P1',
        name: 'P1 VIP & Dignitaries Deck',
        type: 'VIP Valet',
        capacity: 200,
        spotsLeft: 18,
        fee: 0,
        distanceToGates: 'Adjacent to Gate 1 (30m walk)',
        shuttleAvailable: false,
        notes: 'Strictly restricted to VIP lounge pass holders and state dignitaries with RFID windscreen tag.',
        navigationCoordinates: { lat: 23.0365, lng: 72.5321 }
      },
      {
        lotId: 'P2',
        name: 'P2 Competitor & Performer Lot',
        type: 'Competitor Reserved',
        capacity: 150,
        spotsLeft: 48,
        fee: 0,
        distanceToGates: '120m to Gate 2 via Drive-In Rd Ramp',
        shuttleAvailable: true,
        notes: 'Complimentary reserved bay for Spardha registered performers with bib barcode confirmation.',
        navigationCoordinates: { lat: 23.0371, lng: 72.5312 }
      },
      {
        lotId: 'P3',
        name: 'P3 General 4-Wheeler Multideck',
        type: '4-Wheeler',
        capacity: 850,
        spotsLeft: 180,
        fee: 150,
        distanceToGates: '350m walk to Gate 3 (Free 6-min Golf Shuttle)',
        shuttleAvailable: true,
        notes: 'High capacity paved parking with automated fast RFID entry lanes and continuous staff assistance.',
        navigationCoordinates: { lat: 23.0352, lng: 72.5335 }
      },
      {
        lotId: 'P4',
        name: 'P4 Two-Wheeler Pavilion Plaza',
        type: '2-Wheeler',
        capacity: 600,
        spotsLeft: 174,
        fee: 30,
        distanceToGates: '180m to Gate 4 West Gate',
        shuttleAvailable: false,
        notes: 'Dedicated helmet cloakroom locker bay (₹10 token) with security surveillance and concrete bays.',
        navigationCoordinates: { lat: 23.0348, lng: 72.5342 }
      }
    ],
    foodZone: {
      hasFoodZone: true,
      stallsCount: 32,
      cuisines: ['Authentic Kathiyawadi', 'Farali & Fasting Special', 'Surati Locho & Chaat', 'Pure Satvik Gujarati', 'Fresh Cold-Pressed Juices & Buttermilk'],
      jainFoodAvailable: true,
      fastingFaraliAvailable: true,
      priceRange: '₹60 - ₹220 per dish',
      operatingHours: '07:30 PM to 02:00 AM Nightly',
      seatingCapacity: 450,
      satvikCertified: true,
      nearbyAlternatives: [
        'Swati Snacks Vastrapur (600m away, open till 11:30 PM)',
        'Gordhan Thal SG Highway (2.1 km away, traditional Kathiyawadi thali)',
        'Vastrapur Lake Street Food Circle (750m away, open late night)'
      ]
    },
    rules: [
      { name: 'Traditional Dress Requirement', status: 'Allowed', notes: 'Traditional Chaniya Choli, Kediyu, Dhoti, or Kurta Pajama mandatory for dancers inside ground.' },
      { name: 'Western Casual Wear inside Garba Turf', status: 'Not Allowed', notes: 'Jeans, cargo shorts, T-shirts, and casual footwear strictly prohibited on main turf.' },
      { name: 'Satvik & Alcohol-Free Policy', status: 'Restricted', notes: 'Strictly 100% alcohol-free zone enforced by Ahmedabad City Police with breathalyzers at all 4 gates.' },
      { name: 'Re-Entry Privilege', status: 'Allowed', notes: 'Allowed with unbroken RFID wristband and biometric gate scan exit verification.' },
      { name: 'Outside Food and Beverages', status: 'Not Allowed', notes: 'Only infant formula and sealed medical necessities permitted after bag inspection.' },
      { name: 'Govt Photo ID Verification', status: 'Restricted', notes: 'Aadhaar Card, Driving License, or DigiLocker copy required matching ticket name for wristband issuance.' },
      { name: 'Professional DSLRs / Drones', status: 'Restricted', notes: 'Only accredited press with State Trust media credentials permitted.' }
    ],
    turnstileCrowdCount: 14820,
    maxAllowedCrowd: 15000,
    ambientTempC: 27,
    coordinates: { lat: 23.0362, lng: 72.5328 }
  },
  {
    id: 'event-united-way-baroda',
    slug: 'united-way-of-baroda-garba-vadodara',
    name: 'United Way of Baroda Garba Mahotsav 2026',
    gujaratiName: 'યુનાઇટેડ વે ઓફ બરોડા ગરબા મહોત્સવ • વડોદરા',
    city: 'Vadodara',
    edition: '37th Annual Charity Edition',
    tagline: 'The cultural epicenter of traditional Gujarati Garba where 40,000+ dancers move in pristine concentric circles to the voice of Atul Purohit.',
    description: 'United Way of Baroda is world-famous for pure traditional Garba with zero Bollywood influence. Every rupee generated goes directly to local orphanages, healthcare trusts, and rural education across Gujarat.',
    posterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCym93dJXoS8PuANE9ZVAaJOAPyx5GiyWk_Up2q2xc5fXLkFgHrCJkkL-e1rOZ703WzCj6kT8NU0Os-E--Df1IQKsbVukrBCwg4jUIhnvzX_33XgBTP8ZIp17X1gse8K5ItP0tlPB--yQEPxJwnGTgSgri0ptzhDhl6qiuB5yh7JOQKBhsi6e4NGhB4hDfguZRQVhA7Shym7qgcj5BHOn62USr4SqCvjUqEFFb268kADI2Byp22I9-N',
    heroBannerImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80',
    venue: {
      name: 'VCA Stadium Ground, Tarsali Road',
      address: 'VCA Ground, Tarsali, Vadodara, Gujarat 390009',
      city: 'Vadodara',
      areaSquareFeet: 350000,
      garbaTurfAreaSqFt: 280000,
      maxDancerCapacity: 45000,
      indoorOutdoor: 'Outdoor Lawn',
      surfaceType: 'Cushioned Lawn Turf',
      gatesCount: 6,
      gates: [
        { gateNumber: 1, title: 'VIP & Donors Gate', targetAudience: 'Trust patrons & VVIPs', avgWaitMinutes: 2, status: 'Fast Moving' },
        { gateNumber: 2, title: 'Registered Khelaiya (Male)', targetAudience: 'Verified male season pass holders', avgWaitMinutes: 6, status: 'Steady Flow' },
        { gateNumber: 3, title: 'Registered Khelaiya (Female)', targetAudience: 'Verified female season pass holders', avgWaitMinutes: 4, status: 'Fast Moving' },
        { gateNumber: 4, title: 'General Viewers East Deck', targetAudience: 'Spectator gallery', avgWaitMinutes: 12, status: 'High Volume' }
      ],
      medicalPost: true,
      drinkingWaterRoBooths: 12,
      freeShoeStall: true,
      womenSecurityDesk: true
    },
    startDate: '2026-10-11',
    endDate: '2026-10-19',
    datesText: '11 - 19 October 2026 (9 Sacred Nights)',
    status: 'Upcoming',
    organizerName: 'United Way of Baroda Charitable Trust',
    isTrustEndorsed: true,
    verification: {
      status: 'Officially Verified',
      verifiedBy: 'Vadodara District Collectorate & Cultural Trust',
      lastVerifiedDate: '25 Sep 2026, 06:40 PM IST',
      sourceDocumentUrl: 'https://unitedwaybaroda.org/verification-2026'
    },
    startingPrice: 1200,
    isFreeEntry: false,
    dressCodeRequirement: 'Traditional Mandatory',
    familyFriendly: true,
    featuredArtists: [
      { name: 'Atul Purohit', role: 'Chief Resident Vocalist (All 9 Nights)', avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80' }
    ],
    nineDayProgram: [
      {
        dayNumber: 1,
        gujaratiDayName: 'Ekam (એકમ)',
        dateStr: 'Sun, 11 Oct 2026',
        shortDate: 'Oct 11',
        openingTime: '07:30 PM',
        closingTime: '12:30 AM',
        headlinerArtist: 'Atul Purohit',
        expectedCrowd: 38000,
        highlightTheme: 'Inaugural Tara Vina Shyam Opening Ceremony',
        sessions: [
          { time: '07:30 PM', activity: 'Stadium Gates Open for 45,000 Dancers', stageOrArea: 'Gates 1 to 6', status: 'Scheduled' },
          { time: '08:15 PM', activity: 'Vedic Shankh Naad & Maha Aarti', stageOrArea: 'Central Sanctum', status: 'Scheduled', isHighlight: true },
          { time: '08:45 PM', activity: 'Atul Purohit Traditional 3-Taali Cycle Inception', stageOrArea: 'Grand Central Stage', status: 'Scheduled', performer: 'Atul Purohit' }
        ]
      }
    ],
    competitions: [COMPETITIONS_DATA[2]], // Attire contest
    tickets: [
      {
        id: 'tkt-uwb-female',
        name: 'Female Season Pass (All 9 Nights)',
        platform: 'Official Trust',
        type: '9-Night Season RFID',
        basePrice: 1200,
        convenienceFee: 0,
        gstTaxes: 0,
        finalPrice: 1200,
        availability: 'Available',
        perks: ['Subsidized female dancer entry supporting charity', 'All 9 nights entry with smart RFID tag'],
        purchaseUrl: 'https://unitedwaybaroda.org',
        lastChecked: '1 hour ago'
      },
      {
        id: 'tkt-uwb-male',
        name: 'Male Season Pass (All 9 Nights)',
        platform: 'Official Trust',
        type: '9-Night Season RFID',
        basePrice: 4800,
        convenienceFee: 0,
        gstTaxes: 0,
        finalPrice: 4800,
        availability: 'Fast Filling',
        perks: ['Strict verification pass with Aadhaar linking', 'Access to inner turf circles'],
        purchaseUrl: 'https://unitedwaybaroda.org',
        lastChecked: '1 hour ago'
      }
    ],
    parkingLots: [
      {
        lotId: 'Tarsali-A',
        name: 'Tarsali Stadium Ground 4-Wheeler Bay',
        type: '4-Wheeler',
        capacity: 1400,
        spotsLeft: 420,
        fee: 100,
        distanceToGates: '250m to Gate 2 & 3',
        shuttleAvailable: true,
        notes: 'Paved multi-acre field operated by Vadodara Traffic Wardens.',
        navigationCoordinates: { lat: 22.2581, lng: 73.2084 }
      }
    ],
    foodZone: {
      hasFoodZone: true,
      stallsCount: 45,
      cuisines: ['Baroda Sev Usal', 'Farali Singoda Khichdi', 'Kathiyawadi Thali', 'Jain Snacks', 'Cold Pressed Kulfi'],
      jainFoodAvailable: true,
      fastingFaraliAvailable: true,
      priceRange: '₹40 - ₹180',
      operatingHours: '07:30 PM - 01:30 AM',
      seatingCapacity: 600,
      satvikCertified: true
    },
    rules: [
      { name: 'Costume Code', status: 'Allowed', notes: 'Traditional Kedia, Kurta or Chaniya Choli mandatory. Western wear strictly stopped at turnstile.' },
      { name: 'Alcohol & Smoking', status: 'Not Allowed', notes: 'Strict non-negotiable prohibition with police station desk on site.' }
    ],
    turnstileCrowdCount: 38400,
    maxAllowedCrowd: 45000,
    ambientTempC: 26,
    coordinates: { lat: 22.2575, lng: 73.2091 }
  },
  {
    id: 'event-karnavati-ahmedabad',
    slug: 'karnavati-club-navratri-ahmedabad',
    name: 'Karnavati Club Navratri Mahotsav',
    gujaratiName: 'કર્ણાવતી ક્લબ નવરાત્રી મહોત્સવ • એસ.જી. હાઇવે',
    city: 'Ahmedabad',
    edition: 'Platinum Premier Edition',
    tagline: 'Luxury family-friendly Garba under starry night skies on SG Highway with Falguni Pathak and premier Mandli Raas tournaments.',
    description: 'Renowned for its high security, VIP infrastructure, and hosting the Gujarat State Mega Mandli Raas Championship with ₹1,50,000 cash purse.',
    posterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdwSujF7qrzMsxhdoAcdwIJOaLzV4fcK--eojmluzFiUlob9-ovfS0UJS8RZijTeZgf1sKW0a0-jD_rHjq7uhuhHLNlB2A7_4koDNn1gI4vfGjwhJRANx9EJIL9YFO77SrT9rv3RWq9k5NxRM1_hOho_eelPjq4ErMPHm8Xy5wUsUgIcR0ab4pl2hxtm3e6WLlB83bY7HYgKoWQs61X5NpOxYYYt2vlfk2MbKLKR0hu-vcaPP97lcn',
    heroBannerImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&auto=format&fit=crop&q=80',
    venue: {
      name: 'Karnavati Club Lawns, SG Highway',
      address: 'Gandhinagar-Sarkhej Hwy, Mumatpura, Ahmedabad, Gujarat 380058',
      city: 'Ahmedabad',
      areaSquareFeet: 190000,
      garbaTurfAreaSqFt: 140000,
      maxDancerCapacity: 12000,
      indoorOutdoor: 'Outdoor Lawn',
      surfaceType: 'Cushioned Lawn Turf',
      gatesCount: 4,
      gates: [
        { gateNumber: 1, title: 'Club Members Exclusive Gate', targetAudience: 'Members & guests', avgWaitMinutes: 2, status: 'Fast Moving' },
        { gateNumber: 2, title: 'Competitor Mandli Holding Tunnel', targetAudience: 'Group Raas performers', avgWaitMinutes: 3, status: 'Fast Moving' },
        { gateNumber: 3, title: 'General Passes & Parking', targetAudience: 'General public ticket holders', avgWaitMinutes: 8, status: 'Steady Flow' }
      ],
      medicalPost: true,
      drinkingWaterRoBooths: 8,
      freeShoeStall: true,
      womenSecurityDesk: true
    },
    startDate: '2026-10-11',
    endDate: '2026-10-19',
    datesText: '11 - 19 October 2026',
    status: 'Upcoming',
    organizerName: 'Karnavati Club Ltd.',
    isTrustEndorsed: true,
    verification: {
      status: 'Officially Verified',
      verifiedBy: 'SG Highway Police & Club Management',
      lastVerifiedDate: '26 Sep 2026, 04:20 PM IST'
    },
    startingPrice: 1499,
    isFreeEntry: false,
    dressCodeRequirement: 'Traditional Mandatory',
    familyFriendly: true,
    featuredArtists: [
      { name: 'Falguni Pathak', role: 'Guest Headliner (Night 4)', avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80' }
    ],
    nineDayProgram: [],
    competitions: [COMPETITIONS_DATA[1]], // Mandli raas
    tickets: [
      {
        id: 'tkt-karnavati-single',
        name: 'Single Night Guest Pass',
        platform: 'Official Trust',
        type: 'Single Day',
        basePrice: 1499,
        convenienceFee: 0,
        gstTaxes: 0,
        finalPrice: 1499,
        availability: 'Available',
        perks: ['Full lawn access', 'Gourmet satvik food voucher included'],
        purchaseUrl: 'https://karnavaticlub.com',
        lastChecked: '2 hours ago'
      }
    ],
    parkingLots: [
      {
        lotId: 'KC-P1',
        name: 'Karnavati Basement & Lawn Deck',
        type: '4-Wheeler',
        capacity: 650,
        spotsLeft: 110,
        fee: 100,
        distanceToGates: '100m to Gate 3',
        shuttleAvailable: false,
        notes: 'Security guard assisted valet and multi-level bays.',
        navigationCoordinates: { lat: 23.0135, lng: 72.5024 }
      }
    ],
    foodZone: {
      hasFoodZone: true,
      stallsCount: 24,
      cuisines: ['North Indian', 'Gujarati Kathiyawadi', 'Chaat & Fast Food', 'Jain Ice Creams'],
      jainFoodAvailable: true,
      fastingFaraliAvailable: true,
      priceRange: '₹80 - ₹350',
      operatingHours: '08:00 PM - 01:30 AM',
      seatingCapacity: 300,
      satvikCertified: true
    },
    rules: [
      { name: 'Traditional Dress', status: 'Allowed', notes: 'Mandatory on turf' }
    ],
    turnstileCrowdCount: 8900,
    maxAllowedCrowd: 12000,
    ambientTempC: 28,
    coordinates: { lat: 23.0142, lng: 72.5019 }
  },
  {
    id: 'event-surat-diamond',
    slug: 'surat-diamond-city-rasotsav',
    name: 'Surat Diamond City Rasotsav',
    gujaratiName: 'સુરત ડાયમંડ સિટી રાસોત્સવ • ડુમસ રોડ',
    city: 'Surat',
    edition: 'Grand 2026 Edition',
    tagline: 'Surat\'s high-energy Dandiya spectacle with Geeta Rabari, Falguni Pathak, and massive laser light choreographies.',
    description: 'VR Ground Dumas Road comes alive with 20,000+ enthusiastic South Gujarat youth, featuring famous Surati street food stalls and luxury lounge decks.',
    posterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpXRZknJTwCdibXza5iEyzenjzdYrFRKW2PzowQZfY9hIjT9mE-XKbfPxfLWLQu2yKLnk7HTK_s3PeEXtjv0N6FffWKO6gf75BzwqkfRB930AztZAveO2r8nUH0TAccB878aXGLA6JAf1BT4Fe2jnrDTfooBro47T1-1CGo-PNLvCUd4743DRCSAWs9jjr4dmo6mi-1BjIesY3CPHlXy3E2mw1b3q80xsJ5aHQGJ7NIKHufIuEMM-9',
    heroBannerImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80',
    venue: {
      name: 'VR Ground, Dumas Road, Surat',
      address: 'Dumas Rd, Magdalla, Surat, Gujarat 395007',
      city: 'Surat',
      areaSquareFeet: 220000,
      garbaTurfAreaSqFt: 160000,
      maxDancerCapacity: 20000,
      indoorOutdoor: 'Outdoor Lawn',
      surfaceType: 'Cushioned Lawn Turf',
      gatesCount: 4,
      gates: [
        { gateNumber: 1, title: 'Dumas Road Main Gate', targetAudience: 'General Passes', avgWaitMinutes: 5, status: 'Fast Moving' }
      ],
      medicalPost: true,
      drinkingWaterRoBooths: 10,
      freeShoeStall: true,
      womenSecurityDesk: true
    },
    startDate: '2026-10-11',
    endDate: '2026-10-19',
    datesText: '11 - 19 October 2026',
    status: 'Upcoming',
    organizerName: 'Surat Cultural Arts Forum',
    isTrustEndorsed: true,
    verification: {
      status: 'Officially Verified',
      verifiedBy: 'Surat Municipal Corporation Police Wing',
      lastVerifiedDate: '26 Sep 2026, 02:00 PM IST'
    },
    startingPrice: 699,
    isFreeEntry: false,
    dressCodeRequirement: 'Traditional Recommended',
    familyFriendly: true,
    featuredArtists: [
      { name: 'Kinjal Dave', role: 'Night 3 Special', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUQtklXMlEXw8JQ3gPqUm5xKrgMdioiZ_mLf-oydjXh6DERfmDDG3v5GeSyQtlrL-cTiNBS1hpz4PDM6WwNMfmdOmMuvK9n3ZrXVRq6xR33Fnx2r9GwDEFf14AmTByP__iSBx1t-rGvS5xn4rej-4SObA_mU4Bmne8ZVe681yqsMxUsi-q84YRvLAjSABopK6L7lb6P4j4MJh_237DcwGq7ukwBwzWf17fNNq8mDH31_y7a3v42_9o' },
      { name: 'Falguni Pathak', role: 'Night 7 Special', avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80' }
    ],
    nineDayProgram: [],
    competitions: [],
    tickets: [
      {
        id: 'tkt-surat-single',
        name: 'Single Day General Pass',
        platform: 'Official Trust',
        type: 'Single Day',
        basePrice: 699,
        convenienceFee: 0,
        gstTaxes: 0,
        finalPrice: 699,
        availability: 'Available',
        perks: ['Open ground entry', 'Free drinking water'],
        purchaseUrl: 'https://suratgarba.in',
        lastChecked: '3 hours ago'
      }
    ],
    parkingLots: [
      {
        lotId: 'VR-P1',
        name: 'VR Mall Overflow Deck',
        type: '4-Wheeler',
        capacity: 1200,
        spotsLeft: 550,
        fee: 80,
        distanceToGates: '150m walk',
        shuttleAvailable: false,
        notes: 'Underground shaded parking with fast FASTag scanning.',
        navigationCoordinates: { lat: 21.1492, lng: 72.7548 }
      }
    ],
    foodZone: {
      hasFoodZone: true,
      stallsCount: 40,
      cuisines: ['Surati Locho & Khaman', 'Live Chaat', 'Pav Bhaji & Dosa', 'Fasting Sabudana Wada', 'Ghari & Sweets'],
      jainFoodAvailable: true,
      fastingFaraliAvailable: true,
      priceRange: '₹50 - ₹160',
      operatingHours: '08:00 PM - 02:00 AM',
      seatingCapacity: 400,
      satvikCertified: true
    },
    rules: [
      { name: 'Dress Code', status: 'Allowed', notes: 'Traditional or smart ethnic wear' }
    ],
    turnstileCrowdCount: 16500,
    maxAllowedCrowd: 20000,
    ambientTempC: 29,
    coordinates: { lat: 21.1485, lng: 72.7554 }
  },
  {
    id: 'event-rajkot-racecourse',
    slug: 'rangilu-rajkot-ras-mahotsav',
    name: 'Rangilu Rajkot Ras Mahotsav',
    gujaratiName: 'રંગીલું રાજકોટ રાસ મહોત્સવ • રેસકોર્સ ગ્રાઉન્ડ',
    city: 'Rajkot',
    edition: 'Heritage Saurashtra Edition',
    tagline: 'Deep authentic Saurashtra Dhol and Heench rhythm with Osman Mir and Aditya Gadhvi in the cultural heart of Kathiyawad.',
    description: 'Free & subsidized community festival bringing together master Dhol players, Rabari mandlis, and traditional Tran Taali lovers.',
    posterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxbf8CkjyDDHzGPTSAA2ThdqpiQMYwnBRXeIE8H2WbPcXFApOhffYLKnGeyqeUuikMSCugq6U91fhec8os6pBDpz6e8R3OnOr36zov9-ph3BAtH_asLoetLjpr4B-ngtO-A5XQTM_j2r4zJ3lF5qVLwHxlVfarz5P_3yrd4kVD5oQmcd_Oy-dgrZizmFuF-7fNaS_76A1AJuzn3fcpVwX62Q9XHUMs1v6rCwfcxWrLtoJ3MRgIrgFb',
    heroBannerImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80',
    venue: {
      name: 'Race Course Ground, Ring Road',
      address: 'Race Course Ring Rd, Rajkot, Gujarat 360001',
      city: 'Rajkot',
      areaSquareFeet: 280000,
      garbaTurfAreaSqFt: 200000,
      maxDancerCapacity: 25000,
      indoorOutdoor: 'Outdoor Lawn',
      surfaceType: 'Cushioned Lawn Turf',
      gatesCount: 4,
      gates: [
        { gateNumber: 1, title: 'Chowk Entry Gate', targetAudience: 'General Entry', avgWaitMinutes: 4, status: 'Fast Moving' }
      ],
      medicalPost: true,
      drinkingWaterRoBooths: 10,
      freeShoeStall: true,
      womenSecurityDesk: true
    },
    startDate: '2026-10-11',
    endDate: '2026-10-19',
    datesText: '11 - 19 October 2026',
    status: 'Upcoming',
    organizerName: 'Saurashtra Ras Cultural Parishad',
    isTrustEndorsed: true,
    verification: {
      status: 'Officially Verified',
      verifiedBy: 'Rajkot District Collectorate',
      lastVerifiedDate: '24 Sep 2026, 05:10 PM IST'
    },
    startingPrice: 0,
    isFreeEntry: true,
    dressCodeRequirement: 'Traditional Mandatory',
    familyFriendly: true,
    featuredArtists: [
      { name: 'Aditya Gadhvi', role: 'Night 6 Special', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80' }
    ],
    nineDayProgram: [],
    competitions: [],
    tickets: [
      {
        id: 'tkt-rajkot-free',
        name: 'Community Open Pass (Free Entry)',
        platform: 'Free',
        type: 'Single Day',
        basePrice: 0,
        convenienceFee: 0,
        gstTaxes: 0,
        finalPrice: 0,
        availability: 'Available',
        perks: ['100% Free Entry sponsored by Saurashtra Municipal Trust', 'Traditional costume registration at gate'],
        purchaseUrl: 'https://rajkotcultural.org',
        lastChecked: '30 mins ago'
      }
    ],
    parkingLots: [
      {
        lotId: 'RC-1',
        name: 'Race Course Ring Road Civic Parking',
        type: '4-Wheeler',
        capacity: 1000,
        spotsLeft: 600,
        fee: 50,
        distanceToGates: '100m to gate',
        shuttleAvailable: false,
        notes: 'Municipal token based large open ground.',
        navigationCoordinates: { lat: 22.3021, lng: 70.7932 }
      }
    ],
    foodZone: {
      hasFoodZone: true,
      stallsCount: 30,
      cuisines: ['Kathiyawadi Gathiya & Jalebi', 'Rotla & Ringna no Oro', 'Dungli Bataka Chaat', 'Buttermilk'],
      jainFoodAvailable: true,
      fastingFaraliAvailable: true,
      priceRange: '₹30 - ₹120',
      operatingHours: '07:00 PM - 01:30 AM',
      seatingCapacity: 500,
      satvikCertified: true
    },
    rules: [
      { name: 'Traditional Dress', status: 'Allowed', notes: 'Mandatory on central ground' }
    ],
    turnstileCrowdCount: 18200,
    maxAllowedCrowd: 25000,
    ambientTempC: 27,
    coordinates: { lat: 22.3015, lng: 70.7928 }
  }
];

export const GUJARAT_CITIES = [
  'Ahmedabad',
  'Vadodara',
  'Surat',
  'Rajkot',
  'Gandhinagar',
  'Bhavnagar',
  'Jamnagar',
  'Junagadh',
  'Anand',
  'Nadiad',
  'Mehsana',
  'Bharuch'
] as const;
