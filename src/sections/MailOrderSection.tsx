import FadeInView from "@/components/FadeInView";
import SectionTitle from "@/components/SectionTitle";
import { LINE_URL } from "@/data/site-data";

const steps = [
  {
    number: "01",
    title: "公式LINEでご相談",
    description:
      "まずは公式LINEよりご連絡ください。お品物の内容や発送方法についてご案内いたします。",
  },
  {
    number: "02",
    title: "お品物を発送",
    description:
      "ご案内に沿って、安全にお品物をお送りください。梱包方法についても事前にお伝えします。",
  },
  {
    number: "03",
    title: "査定・ご案内",
    description:
      "到着後、内容を丁寧に確認のうえ、査定結果をご連絡いたします。",
  },
  {
    number: "04",
    title: "ご成約・お支払い",
    description:
      "内容にご納得いただけた場合、必要なお手続きを経てお支払いへと進みます。",
  },
];

export default function MailOrderSection() {
  return (
    <section className="section-padding bg-white" id="postal">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <SectionTitle
            subtitle="Postal Appraisal"
            title="郵送買取も承っています"
            description="ご来店が難しい方や遠方の方でも、安心してご利用いただけます。事前に公式LINEでご相談のうえ、お品物をお送りください。"
          />
        </FadeInView>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-light border border-border-light">
          {steps.map((step, i) => (
            <FadeInView key={step.number} delay={i * 0.1}>
              <div className="bg-white p-8 lg:p-10 h-full">
                <span className="font-serif text-3xl font-light text-champagne/30 tracking-wide block mb-5">
                  {step.number}
                </span>
                <h3 className="font-serif text-base lg:text-lg tracking-[0.04em] text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[2] text-text-secondary tracking-wide">
                  {step.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView>
          <div className="mt-14 text-center">
            <p className="text-[13px] leading-[2] text-text-secondary tracking-wide mb-6">
              まずは公式LINEよりお気軽にご相談ください。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border border-champagne/40 text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300"
            >
              公式LINEで相談する
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
