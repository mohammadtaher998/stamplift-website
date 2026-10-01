// Single source for anything tied to the domain, so moving off
// stamplift.online later is one env change (NEXT_PUBLIC_SITE_DOMAIN).
export const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "stamplift.online";
export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@stamplift.com";
