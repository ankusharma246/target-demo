// targetGlobalSettings MUST be set BEFORE at.js loads.
// This fixes the "content delivery is disabled" error on GitHub Pages
// by ensuring cookies are written to the correct domain with proper settings.
window.targetGlobalSettings = window.targetGlobalSettings || {};
window.targetGlobalSettings.cookieDomain = window.location.hostname;
window.targetGlobalSettings.secureOnly = window.location.protocol === 'https:';
window.targetGlobalSettings.enabled = true;
