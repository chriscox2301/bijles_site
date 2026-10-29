"use server";

import {
  readRequest,
  validateRequest,
  type FieldErrors,
  type LessonRequest,
} from "@/lib/lesson-request";
import { submitRequest } from "@/lib/submit-request";

export type RequestState =
  | { status: "idle" }
  | { status: "invalid"; values: LessonRequest; errors: FieldErrors }
  | { status: "error"; values: LessonRequest }
  | { status: "sent"; values: LessonRequest };

export async function sendRequest(_prev: RequestState, formData: FormData): Promise<RequestState> {
  const values = readRequest(formData);

  // Honeypot: echte bezoekers zien dit veld niet. Doe alsof het gelukt is.
  if (formData.get("website")) return { status: "sent", values };

  const errors = validateRequest(values);
  if (Object.keys(errors).length > 0) return { status: "invalid", values, errors };

  const result = await submitRequest(values);
  return result.ok ? { status: "sent", values } : { status: "error", values };
}
