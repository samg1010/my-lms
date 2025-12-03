// lib/analytics.ts  ← drop this file in your project
import posthog from "posthog-js";

if (typeof window !== "undefined") {
  posthog.init("phc_YOUR_POSTHOG_KEY", {
    api_host: "https://app.posthog.com",
    person_profiles: "identified_only",
    capture_pageview: false,     // we do it manually
    autocapture: false,          // too noisy
    disable_session_recording: false,
  });
}

export const analytics = {
  identify(userId: string) {
    posthog.identify(userId);
  },

  track(event: string, properties?: Record<string, any>) {
    posthog.capture(event, { ...properties, $current_url: window.location.href });
  },

  page() {
    posthog.capture("$pageview");
  },

  reset() {
    posthog.reset();
  },
};