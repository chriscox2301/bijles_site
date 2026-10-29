import "server-only";

import type { LessonRequest } from "@/lib/lesson-request";

/**
 * Verstuurt een gevalideerde aanvraag. Dit is de enige plek die je hoeft aan
 * te passen om het formulier op een e-mail- of opslagdienst aan te sluiten.
 *
 * Zonder instellingen wordt de aanvraag alleen in de serverlog gezet en komt
 * hij dus NIET bij je binnen. Zet daarom vóór livegang CONTACT_WEBHOOK_URL,
 * of vervang de inhoud van deze functie (zie README).
 */
export async function submitRequest(request: LessonRequest): Promise<{ ok: boolean }> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.info("[aanvraag] Geen CONTACT_WEBHOOK_URL ingesteld. Aanvraag:", request);
    return { ok: true };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...request, receivedAt: new Date().toISOString() }),
    });
    if (!response.ok) console.error("[aanvraag] Webhook gaf status", response.status);
    return { ok: response.ok };
  } catch (error) {
    console.error("[aanvraag] Webhook niet bereikbaar", error);
    return { ok: false };
  }
}
