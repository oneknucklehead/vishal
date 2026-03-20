import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";

// ─── Data ─────────────────────────────────────────────────────────────────────

const DISCIPLINES = [
  {
    id: "whatwedo-tax",
    num: "01",
    title: "Tax & Regulatory Services",
    eyebrow: "Minimising risks, Maximising sustainability.",
    summary:
      "Proactive, data-driven tax strategies designed to navigate evolving global regulations, ensuring structural efficiency and long-term financial resilience.",
    body: [
      "With every business decision there results an accompanying tax and regulatory implication. With tax laws evolving dynamically, there is a continuous need to interpret the impact of tax incidence and mitigate/ leverage it accordingly. We provide a range of specialised services that makes it possible for clients to attain a tax-efficient and regulatory-compliant structure.",
      "Our tax professionals keep clients updated on a real-time basis on how an evolving tax environment can affect their tax incidence. Besides, we enable clients to implement customised strategies that help achieve tax efficiencies at the entity-level as well as the group-level, strengthening financial health.",
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    stats: [
      {
        n: "Direct Tax",
        modal: {
          title: "Direct Tax",
          subsections: [
            {
              label: "Domestic Tax",
              items: [
                "Advisory services",
                "Compliance services",
                "Litigation services",
              ],
            },
            {
              label: "International Tax",
              items: [
                "Advisory and compliance services in relation to EPC, Royalty, FTS, POEM, Capital Gains etc.",
                "Global Mobility services",
                "Assistance in Return filing, assessment, litigation",
                "Withholding Tax & Equalisation Levy proceedings",
                "Start-up Advisory and set up of entities / branches / project offices",
                "Professional Employment Organisation Services",
                "STPI registration & compliances",
                "Dispute Resolution including MAP & Advance Rulings",
              ],
            },
          ],
        },
      },
      {
        n: "Indirect Tax",
        modal: {
          title: "Indirect Tax",
          subsections: [
            {
              label: "Compliances, Advisory & Litigation Services",
              items: [
                "Goods & Services Tax (GST), Customs, Erstwhile Sales Tax, All India VAT, Excise Duty, Service Tax & other indirect taxes",
                "Incentives — recovery & dispute resolution",
                "Export Zone & Export Oriented Unit",
                "Foreign Trade Policy",
                "Representation before CBIC, Ministry, Senior Revenue Authorities",
                "Due diligence, Contingent liability review",
                "ERP implementation assistance for indirect tax laws",
                "Refund / rebate claims",
                "Incentive Optimisation",
                "Guidance and support for setting up new unit in India",
                "Training modules",
                "Customs bonded warehouse set up support",
              ],
            },
          ],
        },
      },
      {
        n: "Transfer Pricing",
        modal: {
          title: "Transfer Pricing",
          subsections: [
            {
              label: "",
              items: [
                "TP planning / study and compliances",
                "Global multi-jurisdiction transfer pricing study",
                "Advisory and compliance for PE",
                "Assistance in TP assessment / litigation",
                "Analysis of specified domestic transactions",
                "Seeking safe harbour and advance pricing agreements",
                "Restructuring of business models",
              ],
            },
          ],
        },
      },
      {
        n: "M&A Tax",
        modal: {
          title: "M&A Tax and Regulatory",
          subsections: [
            {
              label: "Advisory",
              items: [
                "Pre-acquisition due diligence",
                "Structuring / direct and indirect tax laws / business restructuring / corporate restructuring",
                "Company law and corporate governance, securities law for listed companies",
                "Companies with regulatory laws and accounting standards",
                "Handholding entire transaction as one stop solution",
                "Review and advise on transaction documents",
                "Post Implementation Support",
              ],
            },
          ],
        },
      },
      {
        n: "Regulatory",
        modal: {
          title: "Regulatory Services",
          subsections: [
            {
              label: "",
              items: [
                "Regulatory Relationships and advocacy — approvals",
                "Structuring advice for transactions",
                "Mapping of regulatory process",
                "Regulatory investigations",
                "Upstream / downstream / regulator risks",
                "Regulatory interpretations & Compliance",
              ],
            },
          ],
        },
      },
      {
        n: "Special Advisory",
        modal: {
          title: "Special Advisory",
          subsections: [
            {
              label: "",
              items: [
                "Comprehensive corporate tax review",
                "Establishment of SEZ unit / Migration to SEZ",
                "Value chain tax management",
                "Family office tax advisory",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "whatwedo-corporate",
    num: "02",
    title: "Corporate Finance Advisory Services",
    eyebrow: "Trusted advisors. Strategic partners.",
    summary:
      "Strategic financial guidance for complex transactions, from capital raising to cross-border M&A, delivered with deep industry expertise and a global perspective.",
    body: [
      "There is a growing demand for financing, funding, acquisition, expansion, structuring, restructuring, mergers, de-mergers, cross border transactions. These transactions are becoming more and more complex with every passing day and these are required to be managed with great deal of expertise.",
      "Our corporate finance advisory services are tailored to meet the needs of each client in these areas. Our professional teams combine integrated global approach with extensive industry experience.",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    stats: [
      {
        n: "Valuation",
        modal: {
          title: "Valuation",
          subsections: [
            {
              label: "",
              items: [
                "Business Investment in Shares / Securities",
                "Impairment Testing Analysis",
                "Purchase Price Allocation",
                "Intangible Assets",
                "Arbitration & Dispute Settlement",
              ],
            },
          ],
        },
      },
      {
        n: "Due Diligence",
        modal: {
          title: "Due Diligence",
          subsections: [
            {
              label: "",
              items: [
                "Financial, Accounting and Tax",
                "Commercial, Legal and Market",
                "Mock Diligence",
                "Vendor Due Diligence",
                "Virtual Data Room Management",
              ],
            },
          ],
        },
      },
      {
        n: "Mergers & Acquisitions",
        modal: {
          title: "Mergers & Acquisitions",
          subsections: [
            {
              label: "",
              items: [
                "Buy Side and Sell Side Advice",
                "On-going advice on grooming for future sale",
                "Evaluation of strategic options to structure the acquisition/sale transaction",
                "Running Confidential Auction Processes",
                "Negotiating all aspects of commercial deal",
                "Analysis of Tax and Regulatory implications for all strategic options",
                "End to End Compliance & Implementation Support",
              ],
            },
          ],
        },
      },
      {
        n: "Fund Raising",
        modal: {
          title: "Fund Raising",
          subsections: [
            {
              label: "",
              items: [
                "Preparing the company for fund raising",
                "IPO Advisory",
                "Advising on business plans and projections",
                "Access to the right debt and equity providers",
                "Integrate Tax Structuring",
                "Evaluating various alternative sources of finance",
                "Providing end to end assistance in regulatory compliances",
              ],
            },
          ],
        },
      },
      {
        n: "Transaction Advisory",
        modal: {
          title: "Transaction Advisory",
          subsections: [
            {
              label: "",
              items: [
                "Joint Venture / Strategic Partnerships",
                "Acquisitions / Hive-Off",
                "Capital Restructuring",
                "Corporate Restructuring",
                "Merger / De-Merger",
                "ESOP Advisory",
              ],
            },
          ],
        },
      },
      {
        n: "Insolvency Resolution",
        modal: {
          title: "Insolvency Resolution",
          subsections: [
            {
              label: "",
              items: [
                "Bid Evaluation for Lenders",
                "Forensic Review of Specific Transactions",
                "Vendor Due Diligence and Virtual Data Room Management",
                "Due diligence on Bidders",
                "Compliance & Monitoring of Implementation of Resolution Plan",
                "Strategic Planning of Resolution Plan",
                "Liquidation Analysis",
              ],
            },
          ],
        },
      },
      {
        n: "Stressed Asset Resolution",
        modal: {
          title: "Stressed Asset Resolution Services",
          subsections: [
            {
              label: "",
              items: [
                "Stressed Asset Resolution",
                "Stakeholder Negotiation",
                "Implementation of Turnaround Plan",
              ],
            },
          ],
        },
      },
      {
        n: "Succession Planning & Estate",
        modal: {
          title: "Succession Planning & Estate Duty",
          subsections: [
            {
              label: "",
              items: ["Optimized Structures", "Advice on settlement of assets"],
            },
          ],
        },
      },
    ],
  },
  {
    id: "whatwedo-risk",
    num: "03",
    title: "Risk & Advisory Services",
    eyebrow: "Minimising risks, Maximising sustainability.",
    summary:
      "Comprehensive risk management frameworks and strategic assurance services designed to identify vulnerabilities and build long-term business resilience.",
    body: [
      "Risk is all pervasive and it can travel from anywhere – internally and externally. Businesses were never so vulnerable to risk as it is today and the risk in business is going to grow exponentially in future. Enterprises that effectively manage risks outlast and outperform those that do not.",
      "We deploy risk professionals with a proven track record of assisting organisations in managing intricate financial and business risks. We help clients in enhancing performance through proactive and effective risk management frameworks along with business strategic assurance services.",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    stats: [
      {
        n: "Management Assurance",
        modal: {
          title: "Management Assurance",
          subsections: [
            {
              label: "",
              items: [
                "Internal Audit (Transformation, full Outsourcing, Co-sourcing, effectiveness review)",
                "Concurrent Audit",
                "Management Audit",
                "Process Validation",
                "Revenue Assurance",
                "Continuous Control Monitoring",
                "Regulatory Inspection",
                "Physical verification of inventory and assets and management procedures review",
              ],
            },
          ],
        },
      },
      {
        n: "Business Advisory",
        modal: {
          title: "Business Advisory",
          subsections: [
            {
              label: "",
              items: [
                "Performance Management & Advisory Services",
                "Business Transformation (BT)",
                "Diagnostic & Maturity Matrix Analysis (at Entity, SBU & Department level)",
                "Business Process Rule Book (Standard Operating Procedures)",
                "Post ERP implementation review",
                "Business Process Reengineering",
                "Account Receivables Analysis and Recovery Support",
                "Portfolio Due Diligence",
                "Business Resilience Services (BCP/DRP)",
                "Business Responsibility and Sustainable Reporting Readiness",
              ],
            },
          ],
        },
      },
      {
        n: "IT Risk & Advisory",
        modal: {
          title: "IT Risk & Advisory",
          subsections: [
            {
              label: "",
              items: [
                "Information Systems Audit",
                "IT General Controls Review",
                "Application Review and Pre/Post – Implementation Review",
                "SSAE 16 (SOC1)/SOC2 facilitation and SOX IT Controls Testing",
                "Regulatory Audits",
                "Security Compliance & Governance Services for ISO 27001/PCI DSS",
                "Data Migration Audit",
                "Third Party Information Security Assessment (ERM)",
                "Vulnerability Assessment",
                "Penetration Testing",
                "Data Analytics",
              ],
            },
          ],
        },
      },
      {
        n: "Forensic Services",
        modal: {
          title: "Forensic Services",
          subsections: [
            {
              label: "",
              items: [
                "Fraud Investigation",
                "Digital, Financial and Physical Forensics",
                "Anti Fraud Framework",
                "Corporate Intelligence",
                "Know Your Client (KYC) and Anti-Money Laundering",
                "Whistle Blower-Implementation & Management",
                "Dispute Advisory Service",
                "Pre & Post CDR Review",
                "Employee and Third party Due Diligence - Assets Tracking",
              ],
            },
          ],
        },
      },
      {
        n: "GRC Advisory",
        modal: {
          title: "Governance, Risk and Compliance (GRC) Advisory",
          subsections: [
            {
              label: "",
              items: [
                "Corporate governance implementation",
                "Family Governance Arrangement",
                "Enterprise Risk Management (ERM)",
                "Clause 49 advisory including support services",
                "Internal financial controls and SOX-Compliances",
                "Advisory board formation",
                "Legal compliance management",
              ],
            },
          ],
        },
      },
      {
        n: "Cyber Security",
        modal: {
          title: "Cyber Security Portfolio",
          subsections: [
            {
              label: "",
              items: [
                "Security and Advisory Consulting",
                "Telecom Security",
                "IoT Security",
                "Blockchain Security",
                "Digital Transformation",
                "Industrial Security",
                "Enterprise IT Security",
                "Monitoring and incident response",
                "Technology Management",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "whatwedo-assurance",
    num: "04",
    title: "Assurance Services",
    eyebrow: "Ensuring total compliance. Enhancing credibility.",
    summary:
      "Leveraging seven decades of experience to provide credible financial reporting and global assurance solutions that meet the highest standards of stakeholder transparency.",
    body: [
      "With the ever changing regulatory landscape and correspondingly the growing expectations of stakeholders, financial accounting, interpretation, compliance, reporting is becoming more and more complex and challenging.",
      "With this there is growing demand for accounting and consulting firms which can provide various assurance services anywhere in the world.",
      "We enjoy seven decades of experience in providing clients and other stakeholders with trustworthy and credible assurance services. Our assurance team is trained to handle complex accounting and reporting requirements across the world.",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    stats: [
      {
        n: "Assurance Services",
        modal: {
          title: "Assurance Services",
          subsections: [
            {
              label: "",
              items: [
                "Independent opinion on company law and accounting matters",
                "Performing agreed-upon procedures",
                "Independent review of financial statements",
                "Translation of accounts under other GAAPs viz. US GAAP and IFRS, including quick impact assessment and implementation support",
                "Restatement of accounts",
                "Quick impact assessment / end to end implementation of IND-AS",
                "Special purpose management certificates",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "whatwedo-gks",
    num: "05",
    title: "Global Knowledge Services",
    eyebrow: "Bringing efficiencies. Adding value.",
    summary:
      "Strategic outsourcing and Virtual CFO solutions that streamline non-core functions, allowing businesses to focus on growth while driving day-to-day operational efficiencies.",
    body: [
      "In a highly competitive environment, businesses need to focus on core activities and outsource non-core activities to specialized service providers.",
      "We offer our clients a range of outsourcing services from payroll processing to end to end compliance to virtual CFO services. Our services not only drive day-to-day efficiencies but also foster far-sighted decision-making.",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    stats: [
      {
        n: "Outsourcing Services",
        modal: {
          title: "Finance & Accounting Outsourcing",
          paragraphs: [
            "With start-ups and MNCs growing, there is a need for accounting and consulting firms specializing in accounting and allied services. We come in as 'virtual' CFO and accounts department through onshore and off-shore models.",
            "We provide end-to-end outsourcing services to clients (local and global). We offer comprehensive customised services in the following areas:",
          ],
          subsections: [
            {
              label: "",
              items: [
                "Financial and Management Accounting services",
                "Budgetary Management and MIS Reporting",
                "Audit Assistance and support",
                "Company Secretary Compliance Services",
                "HR and Payroll services, including fulfilment of statutory compliances",
              ],
            },
          ],
        },
      },
      {
        n: "Financial Modelling",
        modal: {
          title: "Financial Modelling",
          paragraphs: [
            "With large infrastructure and government projects catering to an increasing population, it has become imperative for a model building and analytics system to test value-creation capabilities.",
            "Our service portfolio includes:",
          ],
          subsections: [
            {
              label: "",
              items: [
                "Financial model building",
                "Independent review / audit of financial model",
                "Managing financial models and MIS",
              ],
            },
          ],
        },
      },
      {
        n: "XBRL Services",
        modal: {
          title: "Extensible Business Reporting Language (XBRL)",
          paragraphs: [
            "XBRL allows regulatory systems to interact via a common platform. We attest correct data use, information sharing and informed decision-making. We have developed extensive XBRL capabilities for domestic and global clients.",
            "We developed comprehensive XBRL-enabled services including:",
          ],
          subsections: [
            {
              label: "",
              items: [
                "Regulatory filing and certification",
                "XBRL-enabled MIS",
                "XBRL-enabled consolidation of financial statements",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "whatwedo-esg",
    num: "06",
    title: "ESG Advisory Services",
    eyebrow: "Complies with laws in short term and Sustainability in long run.",
    summary:
      "Strategic guidance on sustainability metrics and ethical operations, helping organizations balance short-term regulatory compliance with long-term stakeholder value.",
    body: [
      "Environmental, Social and Governance (ESG) refers to the indicators / criterias / metrics that characterize an organization's operations as sustainable, responsible or ethical. As corporates carry equal amount of responsibility for society and for survival from a long term perspective, it is evident to respect all stakeholders in the ecosystem for business continuity.",
      "In 2015, United Nations introduced sustainable development goals as a call for action by all 192 countries. This has been divided across 17 goals and 5 P's i.e. people, planet, prosperity, peace and partnership.",
      "From 2022-23, the top 1,000 listed companies by market capitalisation are required to disclose a Business Responsibility and Sustainability Reporting (BRSR) to the stock exchanges as a part of their annual report.",
    ],
    // Extra rich content rendered inline on the left column
    extra: {
      benefits: {
        title: "Benefits of ESG",
        description:
          "ESG is thus an investment and gaining importance in the following way:",
        points: [
          "Improve business valuation",
          "Reduce cost of funding",
          "Gain an edge in an overseas market as compared to a less-compliant competitor",
        ],
      },
      help: {
        title: "How DHC Can Help?",
        description:
          "At DHC, ESG is part of business continuity plan. We help clients through our blue book in complying regulatory laws in terms of transparency in disclosures, audit readiness and in spirit. Our ESG partners are sector agnostic and have tailor made solutions based on the sector in which client operates.",
      },
    },
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    stats: [
      {
        n: "BRSR Disclosure Readiness Review",
        modal: {
          title:
            "Business Responsibility & Sustainability Reporting (BRSR) Disclosure Readiness Review",
          paragraphs: [
            "Dedicated team at DHC understand the client's activities on ESG which in turn helps in assisting / prepares the disclosure statement. DHC team train the client team in terms of documentation to be maintained.",
          ],
        },
      },
      {
        n: "ESG Implementation",
        modal: {
          title:
            "Implementation of ESG from Conceptualisation to Implementation & Reporting",
          paragraphs: [
            "Our ESG team will design a framework wherein activities agreed with Board / Senior Management from conceptualization, implementation, monitoring and reporting purpose will be captured. Client's team will also be involved to have a feel of co-ownership.",
          ],
        },
      },
      {
        n: "BRR to BRSR Transition",
        modal: {
          title:
            "Transition Advisory from Business Responsibility Reporting to BRSR",
          paragraphs: [
            "Our team through their master blue book on BRSR reconciles the additional activities and documentation to be maintained for disclosure purpose and helps to create audit trail so that in future it helps in reviewing the performance from inception till date.",
          ],
        },
      },
      {
        n: "BRSR Audit Readiness",
        modal: {
          title: "BRSR Audit Readiness",
          paragraphs: [
            "Our ESG audit team is an independent team and will perform auditing and assurance function as per ESG auditing standards defined by SEBI.",
          ],
        },
      },
    ],
  },
];

// ─── Stat Modal ───────────────────────────────────────────────────────────────
function StatModal({ stat, onClose }) {
  // Close on Escape key
  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- safe: window check above
  }

  return (
    <AnimatePresence>
      {stat && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/50 z-50 backdrop-blur-[2px]"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 bg-white
              bottom-0 left-0 right-0
              sm:bottom-auto sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2
              sm:w-full sm:max-w-lg
              border border-stone-200 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between px-8 pt-7 pb-5 border-b border-stone-200">
              <div className="pr-4">
                <p className="font-baskerville text-[clamp(18px,2vw,22px)] font-normal text-stone-800 leading-snug">
                  {stat.modal.title || stat.n}
                </p>
                {stat.l && (
                  <p className="text-[10px] tracking-[0.26em] uppercase font-medium font-jost text-stone-400 mt-1.5">
                    {stat.l}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400 bg-transparent cursor-pointer transition-colors duration-150 hover:border-stone-800 hover:text-stone-800"
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 1L11 11M11 1L1 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-6 max-h-[60vh] overflow-y-auto">
              {/* Flat paragraphs */}
              {stat.modal.paragraphs?.length > 0 && (
                <div className="space-y-3 mb-5">
                  {stat.modal.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-jost text-[13px] leading-loose text-stone-400 font-light"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* Flat bullets */}
              {stat.modal.bullets?.length > 0 && (
                <ul className="space-y-2.5 mb-5">
                  {stat.modal.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1.5 h-1.5 shrink-0 bg-stone-300 rounded-full" />
                      <span className="font-jost text-[13px] leading-relaxed text-stone-500 font-light">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsections */}
              {stat.modal.subsections?.length > 0 && (
                <div>
                  {stat.modal.subsections.map((sub, si) => (
                    <div
                      key={si}
                      className={`py-4 ${si > 0 ? "border-t border-stone-200" : ""}`}
                    >
                      {sub.label && (
                        <p className="text-[10px] tracking-[0.22em] uppercase font-semibold font-jost text-stone-500 mb-3">
                          {sub.label}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {sub.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-[7px] w-1.5 h-1.5 shrink-0 bg-stone-300 rounded-full" />
                            <span className="font-jost text-[13px] leading-relaxed text-stone-400 font-light">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-8 py-4 border-t border-stone-200">
              <button
                onClick={onClose}
                className="w-full bg-stone-800 text-white font-jost text-[11px] tracking-[0.18em] uppercase font-medium py-3 border-none cursor-pointer transition-colors duration-200 hover:bg-stone-900"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Services sidebar ─────────────────────────────────────────────────────────
function StatsSidebar({ stats, onStatClick }) {
  return (
    <div>
      <p className="text-xs tracking-[0.26em] uppercase font-medium font-jost text-stone-400 mb-4">
        Our Services
      </p>
      <div className="border border-stone-200 divide-y divide-stone-200">
        {stats.map((s) => {
          const hasModal = Boolean(s.modal);
          return (
            <motion.div
              key={s.n}
              onClick={() => hasModal && onStatClick(s)}
              whileHover={hasModal ? { backgroundColor: "#f5f5f4" } : {}}
              transition={{ duration: 0.18 }}
              className={`px-5 py-4 flex items-center justify-between gap-3 group ${
                hasModal ? "cursor-pointer" : ""
              }`}
            >
              <span className="font-jost text-sm font-normal text-stone-700 leading-snug flex-1">
                {s.n}
              </span>
              {hasModal && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="shrink-0 text-stone-300 group-hover:text-stone-600 transition-colors duration-150"
                >
                  <path
                    d="M5 2L10 7L5 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Discipline Section ───────────────────────────────────────────────────────
function DisciplineSection({ d, onStatClick }) {
  return (
    <section id={d.id} className="border-b border-stone-200">
      <div className="max-w-7xl">
        {/* Image strip */}
        <Reveal y={16}>
          <div className="overflow-hidden" style={{ aspectRatio: "21/7" }}>
            <motion.img
              src={d.image}
              alt={d.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* Text + sidebar grid */}
        <div className="px-6 sm:px-10 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-16 items-start">
          {/* Left: text */}
          <div>
            <Reveal>
              <div className="flex items-baseline gap-4 mb-4">
                <Eyebrow>{d.num}</Eyebrow>
                <div className="flex-1 h-px bg-stone-200" />
              </div>
              <h2 className="font-baskerville text-[clamp(24px,3vw,40px)] font-normal text-stone-800 leading-tight tracking-tight">
                {d.title}
              </h2>
              <p className="font-baskerville text-[clamp(14px,1.4vw,20px)] font-normal italic text-stone-500 leading-relaxed mt-3 max-w-2xl">
                {d.summary}
              </p>
            </Reveal>

            <div className="mt-6 space-y-4">
              {d.body.map((para, i) => (
                <Reveal key={i} delay={0.06 * (i + 1)}>
                  <p className="text-[clamp(14px,1.5vw,16px)] leading-loose text-stone-400 font-light font-jost max-w-2xl">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* ESG-specific extra content */}
            {d.extra && (
              <div className="mt-8 space-y-6">
                <Reveal delay={0.1}>
                  <div className="border-t border-stone-200 pt-6">
                    <h3 className="font-baskerville text-[clamp(24px,1.5vw,30px)] font-normal text-stone-800 mb-2">
                      {d.extra.benefits.title}
                    </h3>
                    <p className="font-jost text-[clamp(14px,1.5vw,16px)] text-stone-400 font-light mb-3">
                      {d.extra.benefits.description}
                    </p>
                    <ul className="space-y-2">
                      {d.extra.benefits.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <span className="mt-[7px] w-1.5 h-1.5 shrink-0 bg-stone-300 rounded-full" />
                          <span className="font-jost text-[clamp(14px,1.5vw,16px)] text-stone-400 font-light leading-relaxed">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.14}>
                  <div className="border-t border-stone-200 pt-6">
                    <h3 className="font-baskerville text-[clamp(24px,1.5vw,30px)] font-normal text-stone-800 mb-2">
                      {d.extra.help.title}
                    </h3>
                    <p className="font-jost text-[clamp(14px,1.5vw,16px)] text-stone-400 font-light leading-loose">
                      {d.extra.help.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            )}
          </div>

          {/* Right: services sidebar */}
          <Reveal delay={0.1}>
            <StatsSidebar stats={d.stats} onStatClick={onStatClick} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export function WhatWeDo() {
  const [activeStat, setActiveStat] = useState(null);
  const [searchParams] = useSearchParams();

  // When arriving via a carousel card link (/what-we-do?section=whatwedo-tax),
  // scroll to the target section once the page has mounted and painted.
  useEffect(() => {
    const sectionId = searchParams.get("section");
    if (!sectionId) return;
    // rAF ensures the DOM is fully painted before we scroll
    const frame = requestAnimationFrame(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [searchParams]);

  return (
    <div className="bg-white">
      {/* Modal — rendered at root so z-index is never clipped */}
      <StatModal stat={activeStat} onClose={() => setActiveStat(null)} />

      {/* ── Hero ── */}
      <section
        id="whatwedo-header"
        className="bg-stone-50 border-b border-stone-200"
      >
        <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-14 max-w-7xl">
          <Reveal>
            <Eyebrow>What We Do</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-baskerville text-[clamp(30px,4.5vw,64px)] font-normal text-stone-800 leading-[1.1] mt-4 tracking-tight max-w-4xl">
              Finance and technology,
              <br />
              <em className="italic">inseparably intertwined.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-[clamp(14px,1.5vw,16px)] leading-loose text-stone-400 max-w-lg mt-5 font-light font-jost">
              We operate across six interlocking disciplines — each essential,
              each world-class, and each united by the same commitment to rigour
              and intellectual honesty.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="flex flex-wrap gap-3 mt-10">
              {DISCIPLINES.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(d.id)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="font-jost text-[11px] tracking-[0.16em] uppercase font-medium text-stone-500 border border-stone-200 px-5 py-2.5 transition-all duration-200 hover:border-stone-800 hover:text-stone-800 cursor-pointer"
                >
                  {d.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── All discipline sections — including ESG ── */}
      {DISCIPLINES.map((d) => (
        <DisciplineSection key={d.id} d={d} onStatClick={setActiveStat} />
      ))}

      {/* ── CTA ── */}
      <section className="bg-stone-800">
        <div className="px-6 sm:px-10 lg:px-16 py-14 max-w-7xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <Reveal>
            <h2 className="font-baskerville text-[clamp(18px,2.2vw,30px)] font-normal text-white">
              Not sure where to start?
            </h2>
            <p className="text-base text-white/40 mt-2 font-light font-jost">
              Talk to our team and we'll point you to the right practice area.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link
              to="/contact"
              className="shrink-0 bg-white text-stone-800 text-[11px] tracking-[0.18em] uppercase font-semibold px-7 py-3 border-none cursor-pointer transition-colors duration-200 hover:bg-stone-100 font-jost"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
