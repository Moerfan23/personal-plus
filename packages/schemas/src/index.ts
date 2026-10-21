import { z } from "zod";

// Placeholder schema — the real 5-layer data model (questionnaire → verified
// profile → strategy → design spec → snapshot) is defined in Sprint 1.
export const profileSchema = z.object({
  displayName: z.string().min(1),
  locale: z.enum(["ar", "en"]).default("ar"),
});

export type Profile = z.infer<typeof profileSchema>;
