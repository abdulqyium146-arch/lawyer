import type { Metadata } from "next";
import BlogPostLayout from "@/app/components/templates/BlogPostLayout";

export const metadata: Metadata = {
  title: "What to Do If You're Arrested in Manchester — Your Legal Rights (2026)",
  description:
    "Arrested in Manchester? Know your rights. NJB Legal explains what happens during arrest, your right to a duty solicitor, police interview rights, and the steps to take immediately.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://njblegal.co.uk/blog/what-to-do-if-arrested-manchester",
  },
  openGraph: {
    locale: "en_GB",
    type: "article",
    title: "What to Do If You're Arrested in Manchester — Your Legal Rights (2026)",
    description:
      "Your legal rights if arrested in Manchester — duty solicitor, police interviews, bail and what happens next. Expert advice from NJB Legal.",
    url: "https://njblegal.co.uk/blog/what-to-do-if-arrested-manchester",
  },
};

const faqs = [
  {
    question: "Do I have to answer police questions if arrested in Manchester?",
    answer:
      "No. You have the right to remain silent. You do not have to answer any questions until you have spoken to a solicitor. Exercise this right — anything you say during a police interview can be used as evidence against you in court.",
  },
  {
    question: "How long can police hold me without charge in the UK?",
    answer:
      "Police can initially detain you for up to 24 hours without charge. This can be extended to 36 hours by a senior officer, and up to 96 hours by a magistrate's court for serious offences. After this period, you must be charged or released.",
  },
  {
    question: "Is a duty solicitor really free?",
    answer:
      "Yes. You are entitled to free legal advice from a duty solicitor at any police station in England and Wales, regardless of your income. This right exists at the point of arrest — waiving it is almost never in your interest.",
  },
  {
    question: "What is a caution and should I accept one?",
    answer:
      "A caution is an admission of guilt used as an alternative to prosecution. It goes on your criminal record and can affect employment and travel. You should never accept a caution without taking legal advice first — a solicitor will advise whether it is in your best interests.",
  },
  {
    question: "Can I be arrested without a warrant in England?",
    answer:
      "Yes. Police in England and Wales have wide powers to arrest without a warrant if they have reasonable grounds to suspect you have committed, or are about to commit, an offence. However, they must inform you of the reason for arrest at the time.",
  },
];

export default function WhatToDoIfArrestedPage() {
  return (
    <BlogPostLayout
      title="What to Do If You're Arrested in Manchester — Your Legal Rights (2026)"
      datePublished="2026-03-20"
      dateDisplay="20 March 2026"
      readTime="9 min read"
      category="Criminal Defence"
      breadcrumbTitle="What to Do If Arrested"
      url="/blog/what-to-do-if-arrested-manchester"
      description="Arrested in Manchester? Know your rights. NJB Legal explains what happens during arrest, your right to a duty solicitor, police interview rights, and the steps to take immediately."
      faqs={faqs}
    >
      <p>
        Being arrested is one of the most frightening experiences you can face. Whether you have been stopped in
        the street, arrested at home or called in for a voluntary interview, knowing your legal rights could
        make a significant difference to the outcome of your case. This guide from NJB Legal —
        criminal defence lawyers based in Manchester — explains exactly what to do if you are arrested in
        Greater Manchester.
      </p>

      <nav aria-label="Contents">
        <ol>
          <li>Your rights on arrest</li>
          <li>What happens at the police station</li>
          <li>The right to a duty solicitor</li>
          <li>Police interviews — what you must know</li>
          <li>Bail and what comes next</li>
          <li>Cautions and charge decisions</li>
          <li>How NJB Legal can help</li>
        </ol>
      </nav>

      <h2>1. Your Rights on Arrest</h2>
      <p>
        Under the Police and Criminal Evidence Act 1984 (PACE) and its Codes of Practice, you have important
        rights the moment you are arrested. Police must:
      </p>
      <ul>
        <li>Inform you that you are under arrest and the reason for it</li>
        <li>Tell you that you do not have to say anything</li>
        <li>Warn you that anything you do say may be given in evidence</li>
        <li>Take you to a police station as soon as practicable</li>
      </ul>
      <p>
        You should remain calm. Resisting arrest or becoming aggressive will not help your position and may
        result in additional charges. The time to challenge the lawfulness of your arrest is with a solicitor
        — not in the street.
      </p>

      <h2>2. What Happens at the Police Station</h2>
      <p>
        Once at the police station, you will be taken to the custody suite. The custody sergeant — who is
        independent of the arresting officer — will book you in and inform you of your rights. These include:
      </p>
      <ul>
        <li><strong>The right to have someone informed of your arrest</strong></li>
        <li><strong>The right to consult a solicitor free of charge</strong></li>
        <li><strong>The right to inspect the Codes of Practice</strong></li>
      </ul>
      <p>
        You will be searched and your personal belongings will be taken and logged. You may be placed in a
        custody cell while the police decide how to proceed. The maximum initial detention period without
        charge is 24 hours, though this can be extended in serious cases.
      </p>

      <h2>3. The Right to a Duty Solicitor — Use It</h2>
      <p>
        The single most important step you can take after arrest is to request a solicitor immediately.
        <strong>This is free of charge, regardless of your income</strong>, and applies to everyone arrested
        in England and Wales.
      </p>
      <p>
        A duty solicitor will:
      </p>
      <ul>
        <li>Attend the police station or speak to you by telephone before any interview</li>
        <li>Advise you on the evidence against you (to the extent it has been disclosed)</li>
        <li>Advise you on whether to answer questions or make a prepared statement</li>
        <li>Be present during any police interview</li>
        <li>Challenge unlawful detention if appropriate</li>
      </ul>
      <p>
        <strong>Do not waive your right to legal advice</strong>. Police may suggest that waiting for a
        solicitor will take longer, or that a solicitor is not necessary for a minor matter. Do not be
        persuaded. A solicitor&apos;s presence at the police station protects your fundamental interests and
        costs you nothing.
      </p>
      <blockquote>
        NJB Legal operates a 24-hour duty solicitor service across Greater Manchester. Call
        07587 723897 from the custody suite and we will attend or advise immediately.
      </blockquote>

      <h2>4. Police Interviews — What You Must Know</h2>
      <p>
        Police interviews in England are conducted under caution. The standard caution is:
      </p>
      <blockquote>
        &ldquo;You do not have to say anything. But it may harm your defence if you do not mention when
        questioned something which you later rely on in court. Anything you do say may be given in evidence.&rdquo;
      </blockquote>
      <p>
        This caution is critically important. It means that if you stay silent during a police interview and
        then raise a new defence at court, the jury may draw an adverse inference from your earlier silence.
        Your solicitor will advise you on whether to:
      </p>
      <ul>
        <li><strong>Answer questions</strong> — where it is in your interests to provide an explanation</li>
        <li><strong>Make a prepared statement</strong> — setting out your position without being cross-examined</li>
        <li><strong>Exercise your right to silence</strong> — where the evidence is weak or the questions inappropriate</li>
      </ul>
      <p>
        Never decide your approach to a police interview without legal advice. What you say — and what you
        do not say — can have significant consequences for any subsequent prosecution.
      </p>

      <h2>5. Bail and What Comes Next</h2>
      <p>
        After interview, the police will decide whether to:
      </p>
      <ul>
        <li><strong>Release you without charge</strong> — no further action</li>
        <li><strong>Release you on bail</strong> — pending further investigation (pre-charge bail conditions may apply)</li>
        <li><strong>Charge you</strong> — you will be given a charge sheet and bailed or remanded to appear in court</li>
        <li><strong>Caution you</strong> — an admission of guilt recorded as an alternative to prosecution</li>
      </ul>
      <p>
        If you are released on bail, comply strictly with any bail conditions imposed — breach of bail is a
        criminal offence. If you are charged, your first court appearance will typically be in the magistrates&apos;
        court.
      </p>

      <h2>6. Cautions — Should You Accept One?</h2>
      <p>
        A caution is not a minor administrative matter. It is a formal admission of guilt that goes on your
        criminal record and can affect employment, professional licensing and travel to certain countries
        including the United States.
      </p>
      <p>
        You should <strong>never accept a caution without taking legal advice first</strong>. A solicitor
        will consider whether the evidence against you is strong enough to support a prosecution and whether
        a caution is genuinely in your best interests. In some cases, the right course is to contest the matter
        at court rather than accept a caution.
      </p>

      <h2>7. How NJB Legal Can Help</h2>
      <p>
        NJB Legal provides specialist criminal defence services across Greater Manchester. Our
        24/7 emergency line means we can attend any police station in the Greater Manchester area at any
        time — nights, weekends and bank holidays included.
      </p>
      <p>
        Our criminal defence solicitors are experienced in:
      </p>
      <ul>
        <li>Police station duty solicitor representation (free of charge)</li>
        <li>Magistrates&apos; court defence</li>
        <li>Crown Court representation for serious offences</li>
        <li>Road traffic offences including drink driving</li>
        <li>Drug offences</li>
        <li>Fraud and financial crime</li>
      </ul>
      <p>
        If you or a family member has been arrested in Manchester, call our emergency line immediately on
        <strong> 07587 723897</strong>. Do not face the police alone.
      </p>
    </BlogPostLayout>
  );
}
