/**
 * Analytics contract. Payloads are categorical only — never names, emails or message bodies.
 * If GA4 is not configured, or the visitor has not accepted analytics, calls are no-ops.
 */

export type AnalyticsEvent =
  | { name: 'page_view'; path: string }
  | { name: 'diagnosis_cta_click'; placement: string }
  | { name: 'contact_form_start' }
  | { name: 'contact_form_submit'; outcome: 'success' | 'error' }
  | { name: 'contact_form_success'; needs: string; accommodation_type: string; language: string }
  | { name: 'contact_form_error' }
  | { name: 'whatsapp_click'; context: string }
  | { name: 'service_cta_click'; service: string }
  | { name: 'booking_engine_cta'; placement: string }
  | { name: 'booking_engine_view' }
  | { name: 'faq_open'; page: string }
  | { name: 'digital_check_cta_click'; placement: string }
  | { name: 'digital_check_whatsapp_click' }
  | { name: 'digital_check_faq_open' }
  | { name: 'andario_web_cta_click'; placement: string }
  | { name: 'andario_web_whatsapp_click' }
  | { name: 'andario_web_faq_open' }
  | { name: 'andario_web_booking_click' }
  | { name: 'andario_visibility_cta_click'; placement: string }
  | { name: 'andario_visibility_whatsapp_click' }
  | { name: 'andario_visibility_faq_open' }
  | { name: 'andario_visibility_web_click' }
  | { name: 'andario_visibility_booking_click' }
  | { name: 'andario_connect_cta_click'; placement: string }
  | { name: 'andario_connect_whatsapp_click' }
  | { name: 'andario_connect_faq_open' }
  | { name: 'andario_connect_booking_click' }
  | { name: 'andario_content_cta_click'; placement: string }
  | { name: 'andario_content_whatsapp_click' }
  | { name: 'andario_content_faq_open' }
  | { name: 'andario_content_web_click' }
  | { name: 'andario_growth_cta_click'; placement: string }
  | { name: 'andario_growth_whatsapp_click' }
  | { name: 'andario_growth_faq_open' }
  | { name: 'andario_growth_web_click' }
  | { name: 'solutions_service_click'; service: string }
  | { name: 'solutions_diagnosis_click'; placement: string }
  | { name: 'solutions_whatsapp_click' }
  | { name: 'solutions_faq_open' }
  | { name: 'home_primary_cta_click'; placement: string }
  | { name: 'home_secondary_cta_click'; placement: string }
  | { name: 'home_booking_engine_click'; placement: string }
  | { name: 'home_service_click'; service: string }
  | { name: 'home_whatsapp_click' }
  | { name: 'home_scenario_click'; placement: string }
  | { name: 'home_faq_open' }
  | { name: 'home_case_click' }
  | { name: 'accommodations_type_click'; type: string }
  | { name: 'accommodations_scenario_click'; placement: string }
  | { name: 'accommodations_booking_engine_click'; placement: string }
  | { name: 'accommodations_service_click'; service: string }
  | { name: 'accommodations_diagnosis_click'; placement: string }
  | { name: 'accommodations_whatsapp_click' }
  | { name: 'accommodations_faq_open' }
  | { name: 'how_we_work_primary_cta'; placement: string }
  | { name: 'how_we_work_diagnosis_cta'; placement: string }
  | { name: 'how_we_work_solution_click'; service: string }
  | { name: 'how_we_work_booking_engine_click'; placement: string }
  | { name: 'how_we_work_faq_open' }
  | { name: 'about_how_we_work_click'; placement: string }
  | { name: 'about_booking_engine_click'; placement: string }
  | { name: 'about_case_click' }
  | { name: 'about_primary_cta'; placement: string }
  | { name: 'about_diagnosis_cta'; placement: string }
  | { name: 'about_faq_open' }
  | { name: 'about_whatsapp_click' }
  | { name: 'about_solution_click'; target: string }
  | { name: 'case_view' }
  | { name: 'language_switch'; to: string }
  | { name: 'social_click'; network: string }
  | { name: 'footer_cta_click' }
  | { name: 'footer_whatsapp_click' }
  | { name: 'footer_email_click' }
  | { name: 'footer_phone_click' }
  | { name: 'footer_social_click'; network: string }
  | { name: 'footer_language_change'; to: string };

type GtagWindow = Window & {
  gtag?: (command: 'event', eventName: string, params?: Record<string, string>) => void;
};

export function track(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;

  const { name, ...params } = event;
  const gtag = (window as GtagWindow).gtag;
  if (typeof gtag !== 'function') return;

  try {
    gtag('event', name, params);
  } catch {
    // Measurement must never surface an error to the visitor.
  }
}
