import { formOptions } from "@/content/site";

/** Een aanvraag zoals die uit het formulier komt. Wordt op client én server gevalideerd. */
export type LessonRequest = {
  name: string;
  role: string;
  email: string;
  phone: string;
  level: string;
  subject: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof LessonRequest, string>>;

export const emptyRequest: LessonRequest = {
  name: "",
  role: "",
  email: "",
  phone: "",
  level: "",
  subject: "",
  message: "",
};

export function readRequest(formData: FormData): LessonRequest {
  const get = (key: keyof LessonRequest) => String(formData.get(key) ?? "").trim();
  return {
    name: get("name"),
    role: get("role"),
    email: get("email"),
    phone: get("phone"),
    level: get("level"),
    subject: get("subject"),
    message: get("message"),
  };
}

const isOption = (options: { value: string }[], value: string) =>
  options.some((option) => option.value === value);

export function validateRequest(request: LessonRequest): FieldErrors {
  const errors: FieldErrors = {};

  if (request.name.length < 2) errors.name = "Vul je naam in.";
  else if (request.name.length > 100) errors.name = "Gebruik maximaal 100 tekens.";

  if (!isOption(formOptions.roles, request.role)) errors.role = "Kies wie de aanvraag doet.";

  if (!request.email) errors.email = "Vul je e-mailadres in, zodat ik kan antwoorden.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.email))
    errors.email = "Vul een geldig e-mailadres in, zoals naam@voorbeeld.nl.";

  if (request.phone && !/^[+()\d\s-]{8,20}$/.test(request.phone))
    errors.phone = "Vul een geldig telefoonnummer in, of laat dit veld leeg.";

  if (!isOption(formOptions.levels, request.level)) errors.level = "Kies een niveau.";
  if (!isOption(formOptions.subjects, request.subject)) errors.subject = "Kies een vak.";

  if (request.message.length < 10)
    errors.message = "Schrijf in een paar woorden waar je hulp bij zoekt (minimaal 10 tekens).";
  else if (request.message.length > 2000) errors.message = "Gebruik maximaal 2000 tekens.";

  return errors;
}

export const labelFor = (options: { value: string; label: string }[], value: string) =>
  options.find((option) => option.value === value)?.label ?? value;
