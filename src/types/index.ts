export type City = 
  | 'Ahmedabad' 
  | 'Vadodara' 
  | 'Surat' 
  | 'Rajkot' 
  | 'Gandhinagar' 
  | 'Bhavnagar' 
  | 'Jamnagar' 
  | 'Junagadh' 
  | 'Anand' 
  | 'Nadiad' 
  | 'Mehsana' 
  | 'Bharuch';

export type VerificationStatus = 
  | 'Officially Verified' 
  | 'Recently Verified' 
  | 'User Reported' 
  | 'Requires Verification' 
  | 'Information Unavailable';

export type EventStatus = 
  | 'Upcoming' 
  | 'Live Today' 
  | 'Ongoing' 
  | 'Completed' 
  | 'Cancelled' 
  | 'Postponed' 
  | 'Sold Out' 
  | 'Registration Closed';

export type RuleStatus = 'Allowed' | 'Not Allowed' | 'Restricted' | 'Information Unavailable';

export interface RuleItem {
  name: string;
  status: RuleStatus;
  notes?: string;
}

export interface ProgramMilestone {
  time: string;
  activity: string;
  performer?: string;
  stageOrArea: string;
  status: 'Scheduled' | 'Live' | 'Completed';
  isHighlight?: boolean;
}

export interface DayProgram {
  dayNumber: number; // 1 to 9
  gujaratiDayName: string; // e.g., 'Ekam', 'Bij', 'Trij', 'Pancham'
  dateStr: string; // e.g., 'Wed, 15 Oct 2026'
  shortDate: string; // e.g., 'Oct 15'
  openingTime: string;
  closingTime: string;
  headlinerArtist: string;
  expectedCrowd: number;
  highlightTheme: string;
  sessions: ProgramMilestone[];
  competitionRound?: string;
}

export interface TicketOption {
  id: string;
  name: string;
  platform: 'Official Trust' | 'BookMyShow' | 'Insider' | 'District' | 'Free';
  type: 'Single Day' | '9-Night Season RFID' | 'Couple Pass' | 'VIP Lounge' | 'Student';
  basePrice: number;
  convenienceFee: number;
  gstTaxes: number;
  finalPrice: number;
  availability: 'Available' | 'Fast Filling' | 'Sold Out';
  perks: string[];
  purchaseUrl?: string;
  lastChecked: string;
}

export interface ParkingBay {
  lotId: string;
  name: string;
  type: '2-Wheeler' | '4-Wheeler' | 'VIP Valet' | 'Competitor Reserved';
  capacity: number;
  spotsLeft: number;
  fee: number;
  distanceToGates: string;
  shuttleAvailable: boolean;
  notes: string;
  navigationCoordinates: { lat: number; lng: number };
}

export interface FoodZoneInfo {
  hasFoodZone: boolean;
  stallsCount: number;
  cuisines: string[];
  jainFoodAvailable: boolean;
  fastingFaraliAvailable: boolean;
  priceRange: string;
  operatingHours: string;
  seatingCapacity: number;
  satvikCertified: boolean;
  nearbyAlternatives?: string[];
}

export interface VenueDetails {
  name: string;
  address: string;
  city: City;
  areaSquareFeet: number;
  garbaTurfAreaSqFt: number;
  maxDancerCapacity: number;
  indoorOutdoor: 'Outdoor Lawn' | 'Indoor AC Dome' | 'Semi-Covered Arena';
  surfaceType: 'Cushioned Lawn Turf' | 'Wooden Board Flooring' | 'Synthetic Turf';
  gatesCount: number;
  gates: {
    gateNumber: number;
    title: string;
    targetAudience: string;
    avgWaitMinutes: number;
    status: 'Fast Moving' | 'Steady Flow' | 'High Volume';
    accessibleByMetro?: boolean;
  }[];
  medicalPost: boolean;
  drinkingWaterRoBooths: number;
  freeShoeStall: boolean;
  womenSecurityDesk: boolean;
}

export interface CompetitionSummary {
  id: string;
  slug: string;
  code: string;
  title: string;
  gujaratiTitle?: string;
  category: 
    | 'Best Traditional Garba Couple'
    | 'Mega Mandli Raas Spardha'
    | 'Best Authentic Heritage Chaniyo'
    | 'Solo Garba Prince & Princess'
    | 'Senior Masters Prachin Mandvi'
    | 'Junior Garba Rising Star';
  nightNumber: number;
  dateStr: string;
  reportingTime: string;
  startTime: string;
  locationArea: string;
  totalCashPool: number;
  firstPrize: {
    cash: number;
    trophyTitle: string;
    perks: string[];
  };
  entryFee: number;
  maxSlots: number;
  registeredSlots: number;
  registrationOpen: boolean;
  judgingWeights: {
    criteria: string;
    percentage: number;
    description: string;
  }[];
  rules: string[];
  judges: {
    name: string;
    title: string;
    credentials: string;
    avatarUrl: string;
  }[];
}

export interface GarbaEvent {
  id: string;
  slug: string;
  name: string;
  gujaratiName: string;
  city: City;
  edition: string;
  tagline: string;
  description: string;
  posterImage: string;
  heroBannerImage: string;
  venue: VenueDetails;
  startDate: string;
  endDate: string;
  datesText: string;
  status: EventStatus;
  organizerName: string;
  isTrustEndorsed: boolean;
  verification: {
    status: VerificationStatus;
    verifiedBy: string;
    lastVerifiedDate: string;
    sourceDocumentUrl?: string;
  };
  startingPrice: number;
  isFreeEntry: boolean;
  dressCodeRequirement: 'Traditional Mandatory' | 'Traditional Recommended' | 'Ethnic Casual Allowed';
  familyFriendly: boolean;
  featuredArtists: {
    name: string;
    role: string;
    avatarUrl: string;
  }[];
  nineDayProgram: DayProgram[];
  competitions: CompetitionSummary[];
  tickets: TicketOption[];
  parkingLots: ParkingBay[];
  foodZone: FoodZoneInfo;
  rules: RuleItem[];
  turnstileCrowdCount: number;
  maxAllowedCrowd: number;
  ambientTempC: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ArtistProfile {
  id: string;
  name: string;
  gujaratiName: string;
  title: string;
  bio: string;
  imageUrl: string;
  genre: string;
  popularSongs: string[];
  navratriSchedule: {
    eventId: string;
    eventName: string;
    venueName: string;
    city: City;
    nightNumber: number;
    dateStr: string;
    timeSlot: string;
  }[];
}

export interface UserReportEntry {
  id: string;
  eventId: string;
  eventName: string;
  category: string;
  description: string;
  submittedAt: string;
  status: 'Pending Review' | 'Investigating' | 'Verified & Resolved';
}
