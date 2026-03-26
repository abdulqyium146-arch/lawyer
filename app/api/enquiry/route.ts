import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const services = [
  "Commercial Property Law",
  "Commercial Lease Advice",
  "Corporate & Commercial Law",
  "Agricultural Law",
  "Land & Development Law",
  "Business Contracts",
  "General Enquiry",
] as const;

const enquirySchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.enum(services),
  message: z.string().min(10).max(2000),
  gdpr: z.literal(true),
});

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const data = enquirySchema.parse(body);

    // Log to console in development; integrate with email provider in production
    if (process.env.NODE_ENV === "development") {
      console.log("New enquiry received:", {
        name: data.fullName,
        email: data.email,
        phone: data.phone ?? "Not provided",
        service: data.service,
        message: data.message,
        timestamp: new Date().toISOString(),
      });
    }

    // TODO: Integrate with email provider (e.g. Resend, SendGrid, Nodemailer)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@anisrahmanchambers.co.uk",
    //   to: "info@anisrahmanchambers.co.uk",
    //   subject: `New Enquiry: ${data.service} — ${data.fullName}`,
    //   html: `<p>Name: ${data.fullName}</p><p>Email: ${data.email}</p>...`
    // });

    return NextResponse.json(
      { message: "Enquiry received successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
