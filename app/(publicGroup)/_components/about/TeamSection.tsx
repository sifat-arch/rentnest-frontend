import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22 2H2v20h20V2z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.58.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

const team = [
  {
    name: "Sifat Ahmed",
    role: "Founder & CEO",
    description:
      "Leads RentNest with a vision to make trusted rentals accessible across Bangladesh.",
    initials: "SA",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Nusrat Jahan",
    role: "Head of Product",
    description:
      "Designs experiences that help tenants discover homes and landlords manage listings with ease.",
    initials: "NJ",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Rafiul Islam",
    role: "Lead Engineer",
    description:
      "Builds secure, scalable systems that power search, booking, and payments on RentNest.",
    initials: "RI",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Farhana Akter",
    role: "Customer Success",
    description:
      "Supports renters and landlords every step of the way, ensuring a smooth and trusted journey.",
    initials: "FA",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">People</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            A small, dedicated team building Bangladesh&apos;s most trusted
            rental marketplace.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Avatar className="size-20">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>

              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {member.role}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {member.description}
              </p>

              <div className="mt-5 flex items-center gap-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on GitHub`}
                  className="flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <GithubIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
