"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const services = [
  "Commercial Property Law",
  "Commercial Lease Advice",
  "Corporate & Commercial Law",
  "Agricultural Law",
  "Land & Development Law",
  "Business Contracts",
  "General Enquiry",
] as const;

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.enum(services, { required_error: "Please select a service" }),
  message: z.string().min(10, "Please provide a brief message (min 10 characters)"),
  gdpr: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to our privacy policy to submit this form",
    }),
  }),
});

type FormData = z.infer<typeof schema>;

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle size={48} className="text-success" />
        <h3 className="font-cormorant font-semibold text-2xl text-ink">
          Thank you for your enquiry
        </h3>
        <p className="font-outfit text-sm text-slate max-w-md">
          A member of the NJB Legal team will be in touch within 24 hours.
          For urgent matters, please call{" "}
          <a href="tel:+447587723897" className="text-gold font-semibold">
            07587 723897
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Enquiry form"
      className="space-y-5"
    >
      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700"
        >
          <AlertCircle size={16} className="shrink-0" />
          Something went wrong. Please try again or call us directly on{" "}
          <a href="tel:+447587723897" className="font-semibold underline">
            07587 723897
          </a>
          .
        </div>
      )}

      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-outfit font-medium text-ink mb-1.5"
        >
          Full Name <span aria-hidden="true" className="text-gold">*</span>
        </label>
        <input
          {...register("fullName")}
          id="fullName"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          placeholder="Your full name"
          className={`w-full px-4 py-3 text-sm font-outfit border rounded-lg bg-white text-ink placeholder:text-slate/50 transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold ${
            errors.fullName ? "border-red-400" : "border-mist"
          }`}
        />
        {errors.fullName && (
          <p id="fullName-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-outfit font-medium text-ink mb-1.5"
        >
          Email Address <span aria-hidden="true" className="text-gold">*</span>
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="your@email.com"
          className={`w-full px-4 py-3 text-sm font-outfit border rounded-lg bg-white text-ink placeholder:text-slate/50 transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold ${
            errors.email ? "border-red-400" : "border-mist"
          }`}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-outfit font-medium text-ink mb-1.5"
        >
          Phone Number{" "}
          <span className="text-slate text-xs font-normal">(optional)</span>
        </label>
        <input
          {...register("phone")}
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+44..."
          className="w-full px-4 py-3 text-sm font-outfit border border-mist rounded-lg bg-white text-ink placeholder:text-slate/50 transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-outfit font-medium text-ink mb-1.5"
        >
          Service Required <span aria-hidden="true" className="text-gold">*</span>
        </label>
        <select
          {...register("service")}
          id="service"
          aria-required="true"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={`w-full px-4 py-3 text-sm font-outfit border rounded-lg bg-white text-ink transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold ${
            errors.service ? "border-red-400" : "border-mist"
          }`}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-outfit font-medium text-ink mb-1.5"
        >
          How Can We Help? <span aria-hidden="true" className="text-gold">*</span>
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Please briefly describe what you need help with..."
          className={`w-full px-4 py-3 text-sm font-outfit border rounded-lg bg-white text-ink placeholder:text-slate/50 transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none ${
            errors.message ? "border-red-400" : "border-mist"
          }`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* GDPR */}
      <div>
        <div className="flex items-start gap-3">
          <input
            {...register("gdpr")}
            id="gdpr"
            type="checkbox"
            aria-required="true"
            aria-invalid={!!errors.gdpr}
            aria-describedby={errors.gdpr ? "gdpr-error" : undefined}
            className="mt-0.5 w-4 h-4 accent-gold"
          />
          <label htmlFor="gdpr" className="text-xs font-outfit text-slate leading-relaxed">
            I agree to NJB Legal processing my personal data in accordance with
            the{" "}
            <a href="/privacy" className="text-gold hover:underline">
              Privacy Policy
            </a>
            . We will only use your details to respond to your enquiry.{" "}
            <span aria-hidden="true" className="text-gold">*</span>
          </label>
        </div>
        {errors.gdpr && (
          <p id="gdpr-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.gdpr.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>

      <p className="text-xs font-outfit text-slate/70 text-center">
        We aim to respond within 24 hours. For urgent matters, call{" "}
        <a href="tel:+447587723897" className="text-gold">
          07587 723897
        </a>
        .
      </p>
    </form>
  );
}
