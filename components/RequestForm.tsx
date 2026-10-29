"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendRequest, type RequestState } from "@/app/aanvragen/actions";
import { formOptions, site } from "@/content/site";
import {
  emptyRequest,
  labelFor,
  readRequest,
  validateRequest,
  type FieldErrors,
  type LessonRequest,
} from "@/lib/lesson-request";
import { Fill } from "./Fill";

const fieldClass =
  "mt-1.5 block w-full rounded-md border border-muted bg-white px-3 py-2.5 text-base text-graphite aria-[invalid=true]:border-2 aria-[invalid=true]:border-red";

export function RequestForm() {
  const [state, formAction, pending] = useActionState<RequestState, FormData>(sendRequest, {
    status: "idle",
  });
  const [clientErrors, setClientErrors] = useState<FieldErrors | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);

  const values = state.status === "idle" ? emptyRequest : state.values;
  const errors = clientErrors ?? (state.status === "invalid" ? state.errors : {});

  useEffect(() => {
    if (state.status === "sent") confirmationRef.current?.focus();
    if (state.status === "invalid") focusFirstError(formRef.current, state.errors);
  }, [state]);

  if (state.status === "sent") {
    return <Confirmation ref={confirmationRef} request={state.values} />;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const found = validateRequest(readRequest(new FormData(event.currentTarget)));
    if (Object.keys(found).length > 0) {
      event.preventDefault();
      setClientErrors(found);
      focusFirstError(event.currentTarget, found);
    } else {
      setClientErrors(null);
    }
  }

  // Zodra er fouten staan, verdwijnen ze tijdens het typen als het veld klopt.
  function handleInput(event: React.FormEvent<HTMLFormElement>) {
    if (!clientErrors) return;
    const found = validateRequest(readRequest(new FormData(event.currentTarget)));
    const remaining: FieldErrors = {};
    for (const key of Object.keys(clientErrors) as (keyof LessonRequest)[]) {
      if (found[key]) remaining[key] = found[key];
    }
    setClientErrors(remaining);
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={handleSubmit}
      onInput={handleInput}
      noValidate
      className="space-y-6"
    >
      <p className="text-muted">
        Velden met <span aria-hidden="true">*</span>
        <span className="sr-only">een sterretje</span> zijn verplicht.
      </p>

      <Field id="name" label="Je naam" required error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          defaultValue={values.name}
          required
          {...describedBy("name", errors.name)}
          className={fieldClass}
        />
      </Field>

      <fieldset aria-describedby={errors.role ? "role-error" : undefined}>
        <legend className="font-semibold">
          Ik ben <RequiredMark />
        </legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {formOptions.roles.map((role) => (
            <label
              key={role.value}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-muted bg-white px-4 has-[:checked]:border-2 has-[:checked]:border-ink has-[:checked]:bg-marker/40"
            >
              <input
                type="radio"
                name="role"
                value={role.value}
                defaultChecked={values.role === role.value}
                required
                className="size-4 accent-ink"
              />
              {role.label}
            </label>
          ))}
        </div>
        <ErrorText id="role-error" error={errors.role} />
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="email" label="E-mailadres" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            defaultValue={values.email}
            required
            {...describedBy("email", errors.email)}
            className={fieldClass}
          />
        </Field>
        <Field id="phone" label="Telefoonnummer" hint="Optioneel, als je liever gebeld wordt." error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={values.phone}
            {...describedBy("phone", errors.phone, true)}
            className={fieldClass}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="level" label="Niveau" required error={errors.level}>
          <select
            id="level"
            name="level"
            defaultValue={values.level}
            required
            {...describedBy("level", errors.level)}
            className={fieldClass}
          >
            <option value="" disabled>
              Kies een niveau
            </option>
            {formOptions.levels.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="subject" label="Vak" required error={errors.subject}>
          <select
            id="subject"
            name="subject"
            defaultValue={values.subject}
            required
            {...describedBy("subject", errors.subject)}
            className={fieldClass}
          >
            <option value="" disabled>
              Kies een vak
            </option>
            {formOptions.subjects.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id="message"
        label="Waar zoek je hulp bij?"
        hint="Bijvoorbeeld een hoofdstuk, een toets of examen met datum, en wanneer je kunt."
        required
        error={errors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={values.message}
          required
          {...describedBy("message", errors.message, true)}
          className={fieldClass}
        />
      </Field>

      {/* Spamval: verborgen voor bezoekers, bots vullen dit veld vaak in. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">Laat dit veld leeg</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite" className="empty:hidden">
        {errorCount > 0 && (
          <p className="font-semibold text-red">
            Controleer {errorCount === 1 ? "het gemarkeerde veld" : `de ${errorCount} gemarkeerde velden`}.
          </p>
        )}
        {state.status === "error" && !clientErrors && (
          <p className="font-semibold text-red">
            Je aanvraag is niet verstuurd door een storing. Probeer het opnieuw, of mail naar{" "}
            <Fill text={site.email} />.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-13 w-full items-center justify-center rounded-md bg-marker px-6 text-lg font-bold text-graphite shadow-[0_2px_0_var(--color-ink)] ring-1 ring-ink hover:bg-marker-dark disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Aanvraag versturen…" : "Aanvraag versturen"}
      </button>
    </form>
  );
}

function Confirmation({ ref, request }: { ref: React.Ref<HTMLDivElement>; request: LessonRequest }) {
  return (
    <div ref={ref} tabIndex={-1} role="status" className="bg-white p-6 ring-2 ring-ink sm:p-8">
      <h2 className="text-3xl">Je aanvraag is verstuurd</h2>
      <p className="mt-3 text-lg">
        Bedankt, {request.name}. Je krijgt <Fill text={site.responseTime} /> antwoord op {request.email}.
      </p>
      <h3 className="mt-6 text-xl">Wat je hebt aangevraagd</h3>
      <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
        <dt className="font-semibold">Niveau</dt>
        <dd>{labelFor(formOptions.levels, request.level)}</dd>
        <dt className="font-semibold">Vak</dt>
        <dd>{labelFor(formOptions.subjects, request.subject)}</dd>
      </dl>
      <p className="mt-6 text-muted">Geen bericht ontvangen? Kijk ook even in je map met ongewenste e-mail.</p>
    </div>
  );
}

function Field({
  id,
  label,
  hint,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-semibold">
        {label} {required && <RequiredMark />}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="text-sm text-muted">
          {hint}
        </p>
      )}
      {children}
      <ErrorText id={`${id}-error`} error={error} />
    </div>
  );
}

function RequiredMark() {
  return (
    <>
      <span aria-hidden="true" className="text-red">
        *
      </span>
      <span className="sr-only">(verplicht)</span>
    </>
  );
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-1.5 font-semibold text-red">
      {error}
    </p>
  );
}

function describedBy(id: string, error?: string, hasHint = false) {
  const ids = [hasHint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ");
  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": ids || undefined,
  };
}

function focusFirstError(form: HTMLFormElement | null, errors: FieldErrors) {
  const first = Object.keys(emptyRequest).find((key) => errors[key as keyof LessonRequest]);
  if (!form || !first) return;
  const field = form.elements.namedItem(first);
  const element = field instanceof RadioNodeList ? (field[0] as HTMLElement) : (field as HTMLElement | null);
  element?.focus();
}
