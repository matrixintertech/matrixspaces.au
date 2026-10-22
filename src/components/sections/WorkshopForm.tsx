"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Building,
  Mail,
  User,
  Phone,
  ChevronDown,
} from "lucide-react";

const INTEREST_AREAS = [
  "Industrialised interiors",
  "Retrofit solutions",
  "Asset intelligence",
  "Preventive asset care",
  "Living laboratory",
  "Research and industry collaboration",
  "Other",
];

export default function WorkshopForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    organisation: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }

    if (!formData.organisation.trim() || formData.organisation.trim().length < 2) {
      errs.organisation = "Please provide your organisation or institution name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid work or institutional email address.";
    }

    if (!formData.areaOfInterest) {
      errs.areaOfInterest = "Please select your primary area of interest.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit workshop request.");
      }

      setSubmitSuccess(data.message);
      if (data.referenceId) {
        setReferenceId(data.referenceId);
      }
    } catch (err) {
      setServerError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or reach out directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="workshop-form"
      className="py-24 lg:py-32 bg-white relative border-b border-[#E2E8F0]"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Workshop Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
              <span>Next Steps</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
              Shape the next generation of spaces.
            </h2>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Explore a collaboration opportunity, discuss a potential pilot, or learn more
              about Matrix Spaces Australia.
            </p>

            {/* What Happens in the Workshop Box */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2E8F0] space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] text-[#B8860B] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-[#0A192F]">
                  About the 90-Minute Collaboration Workshop
                </h3>
              </div>

              <p className="text-xs text-[#475569] leading-relaxed">
                Structured for university property directors, campus planners, asset managers,
                and industry leaders. During the session, we review:
              </p>

              <ul className="text-xs text-[#334155] space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Your estate challenges, refurbishment backlogs, and sustainability mandates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Applicability of industrialised interior components and retrofit kits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Potential Living Laboratory co-design and pilot testbed parameters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Clear next steps with no immediate capital commitment.</span>
                </li>
              </ul>
            </div>

            <div className="text-xs text-[#64748B] leading-relaxed">
              <strong className="text-[#0A192F]">Direct Coordination: </strong>
              Enquiries are directly reviewed by the Matrix Spaces Australia founding team.
              We respond to institutional requests within two business days.
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F6] rounded-2xl border border-[#E2E8F0] p-7 sm:p-9 shadow-xs">
              {submitSuccess ? (
                /* Success State */
                <div
                  className="py-10 text-center space-y-4"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-14 h-14 rounded-full bg-[#FBF6E9] text-[#B8860B] border border-[#B8860B]/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A192F]">
                    Workshop Request Received
                  </h3>
                  <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                    {submitSuccess}
                  </p>
                  {referenceId && (
                    <div className="text-xs font-mono text-[#64748B] bg-white border border-[#E2E8F0] inline-block px-3 py-1.5 rounded">
                      Reference ID: {referenceId}
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitSuccess(null);
                        setFormData({
                          fullName: "",
                          organisation: "",
                          email: "",
                          phone: "",
                          areaOfInterest: "",
                          message: "",
                        });
                      }}
                      className="text-xs font-semibold uppercase tracking-wider text-[#B8860B] hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#EAE5D9] pb-4 mb-2">
                    <h3 className="text-lg font-serif font-bold text-[#0A192F]">
                      Arrange a 90-Minute Collaboration Workshop
                    </h3>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Please provide your details to coordinate a tailored discovery session.
                    </p>
                  </div>

                  {serverError && (
                    <div
                      className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Name and Organisation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-[#0A192F]"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3 top-3 text-[#94A3B8]" />
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: "" });
                          }}
                          placeholder="Dr. Sarah Campbell"
                          aria-invalid={!!errors.fullName}
                          aria-describedby={errors.fullName ? "fullName-error" : undefined}
                          className={`w-full pl-9 pr-3.5 py-2.5 text-xs bg-white rounded-lg border text-[#0A192F] placeholder:text-[#94A3B8] focus:bg-white transition-colors ${
                            errors.fullName
                              ? "border-red-400 focus:border-red-500"
                              : "border-[#CBD5E1] focus:border-[#B8860B]"
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p id="fullName-error" className="text-[11px] text-red-600">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="organisation"
                        className="block text-xs font-semibold text-[#0A192F]"
                      >
                        Organisation / Institution <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 absolute left-3 top-3 text-[#94A3B8]" />
                        <input
                          id="organisation"
                          type="text"
                          required
                          value={formData.organisation}
                          onChange={(e) => {
                            setFormData({ ...formData, organisation: e.target.value });
                            if (errors.organisation) setErrors({ ...errors, organisation: "" });
                          }}
                          placeholder="e.g. University Campus Estates"
                          aria-invalid={!!errors.organisation}
                          aria-describedby={errors.organisation ? "org-error" : undefined}
                          className={`w-full pl-9 pr-3.5 py-2.5 text-xs bg-white rounded-lg border text-[#0A192F] placeholder:text-[#94A3B8] focus:bg-white transition-colors ${
                            errors.organisation
                              ? "border-red-400 focus:border-red-500"
                              : "border-[#CBD5E1] focus:border-[#B8860B]"
                          }`}
                        />
                      </div>
                      {errors.organisation && (
                        <p id="org-error" className="text-[11px] text-red-600">
                          {errors.organisation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Work Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#0A192F]"
                      >
                        Work / Institutional Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-3 text-[#94A3B8]" />
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          placeholder="s.campbell@university.edu.au"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={`w-full pl-9 pr-3.5 py-2.5 text-xs bg-white rounded-lg border text-[#0A192F] placeholder:text-[#94A3B8] focus:bg-white transition-colors ${
                            errors.email
                              ? "border-red-400 focus:border-red-500"
                              : "border-[#CBD5E1] focus:border-[#B8860B]"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p id="email-error" className="text-[11px] text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-[#0A192F]"
                      >
                        Phone <span className="text-[#94A3B8] font-normal">(optional)</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3 top-3 text-[#94A3B8]" />
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+61 400 000 000"
                          className="w-full pl-9 pr-3.5 py-2.5 text-xs bg-white rounded-lg border border-[#CBD5E1] text-[#0A192F] placeholder:text-[#94A3B8] focus:border-[#B8860B] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Area of Interest Dropdown */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="areaOfInterest"
                      className="block text-xs font-semibold text-[#0A192F]"
                    >
                      Primary Area of Interest <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="areaOfInterest"
                        required
                        value={formData.areaOfInterest}
                        onChange={(e) => {
                          setFormData({ ...formData, areaOfInterest: e.target.value });
                          if (errors.areaOfInterest) setErrors({ ...errors, areaOfInterest: "" });
                        }}
                        aria-invalid={!!errors.areaOfInterest}
                        aria-describedby={errors.areaOfInterest ? "aoi-error" : undefined}
                        className={`w-full px-3.5 py-2.5 text-xs bg-white rounded-lg border text-[#0A192F] appearance-none focus:bg-white transition-colors cursor-pointer ${
                          errors.areaOfInterest
                            ? "border-red-400 focus:border-red-500"
                            : "border-[#CBD5E1] focus:border-[#B8860B]"
                        }`}
                      >
                        <option value="">Select an area of interest...</option>
                        {INTEREST_AREAS.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#94A3B8] absolute right-3 top-3 pointer-events-none" />
                    </div>
                    {errors.areaOfInterest && (
                      <p id="aoi-error" className="text-[11px] text-red-600">
                        {errors.areaOfInterest}
                      </p>
                    )}
                  </div>

                  {/* Message (Optional) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[#0A192F]"
                    >
                      Context or Initial Enquiries{" "}
                      <span className="text-[#94A3B8] font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us briefly about your facility, research interests, or proposed timeline..."
                        className="w-full p-3 text-xs bg-white rounded-lg border border-[#CBD5E1] text-[#0A192F] placeholder:text-[#94A3B8] focus:border-[#B8860B] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs uppercase tracking-wider font-semibold rounded bg-[#B8860B] text-white hover:bg-[#9E7309] shadow-sm transition-all duration-200 disabled:opacity-60 cursor-pointer"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Request...</span>
                      </div>
                    ) : (
                      <>
                        <span>Arrange a 90-minute collaboration workshop</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#64748B] pt-1">
                    Your institutional details remain strictly confidential and will only be used to coordinate this session.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
