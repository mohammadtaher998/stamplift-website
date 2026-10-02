// Single source for anything tied to the domain, so a domain change is one
// env change (NEXT_PUBLIC_SITE_DOMAIN).
export const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "stamplift.com";
export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@stamplift.com";
