import {
  Bed,
  Building,
  CalendarCheck,
  Camera,
  ChartLine,
  ScanSearch,
  Compass,
  Globe,
  Hotel,
  House,
  MessagesSquare,
  Search,
  Trees,
  type LucideIcon,
} from 'lucide-react';
import type { ServiceId } from '@/lib/i18n/routes';

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  'digital-check': ScanSearch,
  'andario-web': Globe,
  'andario-visibility': Search,
  'andario-booking-engine': CalendarCheck,
  'andario-connect': MessagesSquare,
  'andario-content': Camera,
  'andario-growth': ChartLine,
};

export const audienceIcons: LucideIcon[] = [Bed, Hotel, House, Building, Trees, Compass];
