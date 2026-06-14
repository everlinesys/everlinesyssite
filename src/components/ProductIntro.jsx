import { ArrowRight, BookOpen, MessageSquareText, ReceiptText } from "lucide-react";

const products = [
  {
    icon: BookOpen,
    name: "Eduline",
    eyebrow: "Learning platform",
    image: "/edu1.webp",
    description:
      "Create a branded online academy with course sales, student management, payments, and learning analytics.",
    features: ["White-label portals", "Course commerce", "Student operations"],
    link: "https://eduline.everlinesys.com",
  },
  {
    icon: MessageSquareText,
    name: "Deal Chat",
    eyebrow: "Customer engagement",
    image: "/crm1.webp",
    description:
      "Capture leads, automate follow-ups, and manage customer conversations through WhatsApp-first workflows.",
    features: ["Lead capture", "Team inbox", "Response automation"],
    link: "https://dealchat.everlinesys.com",
  },
  {
    icon: ReceiptText,
    name: "Billing & Stock",
    eyebrow: "Operations",
    image: "/bil1.webp",
    description:
      "Run billing, inventory, stock visibility, and day-to-day operating workflows from one practical system.",
    features: ["Inventory tracking", "Billing workflows", "Operations reports"],
    link: "https://api.whatsapp.com/send?phone=919400690911",
  },
];

export default function ProductIntro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">
              Explore the Everline ecosystem
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Platforms for every stage of business growth.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-slate-700 lg:justify-self-end">
            Start with a ready product, extend it with custom workflows, and
            connect it to the systems that already run your organization.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.name}
                className="group flex min-h-full flex-col border border-slate-200 bg-[#f7faf6] transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/10"
              >
                <div className="aspect-[1.45/1] overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={`${product.name} product preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center bg-emerald-100 text-emerald-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">
                        {product.eyebrow}
                      </p>
                      <h3 className="text-2xl font-semibold text-slate-950">{product.name}</h3>
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-slate-700">{product.description}</p>

                  <div className="mt-6 space-y-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                        <span className="h-2 w-2 bg-emerald-600" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-800"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
