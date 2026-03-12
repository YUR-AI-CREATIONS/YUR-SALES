import { VerticalConfig } from '../vertical.config';

const sales: VerticalConfig = {
  id: 'yur-sales',
  name: 'YUR Sales',
  tagline: 'AI-Powered Sales Intelligence — Score, Optimize, Close',
  icon: '📈',
  primaryColor: '#2E7D32',
  accentColor: '#FFD600',
  bgGradient: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #FFD600 100%)',
  systemInstruction: `You are YUR Sales, an enterprise-grade AI sales intelligence platform. You score and prioritize leads, optimize sales pipelines, generate compelling proposals, and develop closing strategies. You understand BANT, MEDDIC, Challenger Sale, and SPIN selling frameworks. You analyze CRM data, track deal velocity, forecast revenue, and identify at-risk opportunities. You produce sales playbooks, competitive battle cards, and territory plans. Always ground recommendations in pipeline data and win/loss analysis.`,
  complianceStandards: [
    'CAN-SPAM Act (Email Outreach)',
    'TCPA (Telephone Solicitation)',
    'GDPR/CCPA (Prospect Data Privacy)',
    'Anti-Bribery (FCPA, UK Bribery Act)',
    'Revenue Recognition (ASC 606)',
    'SOC 2 (CRM Data Security)'
  ],
  agents: [
    {
      name: 'LEAD_SCORER',
      role: 'Lead Scoring & Qualification Agent',
      systemPrompt: 'You score and qualify inbound and outbound leads using firmographic, technographic, behavioral, and intent signals. Build predictive lead scoring models based on historical conversion data. Identify ideal customer profiles, prioritize outreach by propensity to buy, and segment leads for personalized cadences. Flag leads that match target account lists.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'PIPELINE_OPTIMIZER',
      role: 'Sales Pipeline & Forecast Agent',
      systemPrompt: 'You analyze sales pipeline health — stage conversion rates, deal velocity, pipeline coverage ratios, and forecast accuracy. Identify bottleneck stages, at-risk deals, and slipping opportunities. Generate weighted and scenario-based revenue forecasts. Recommend pipeline actions: accelerate, nurture, disqualify, or escalate.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'PROPOSAL_GENERATOR',
      role: 'Sales Proposal & Presentation Agent',
      systemPrompt: 'You generate tailored sales proposals, pitch decks, and RFP responses. Customize value propositions by industry, company size, and pain points. Build ROI calculators, case study selections, and implementation timelines. Draft executive summaries, scope of work documents, and pricing packages optimized for deal size and competitive positioning.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 12288
    },
    {
      name: 'CLOSE_STRATEGIST',
      role: 'Deal Strategy & Competitive Intelligence Agent',
      systemPrompt: 'You develop deal-specific closing strategies using competitive intelligence, stakeholder mapping, and objection handling frameworks. Build competitive battle cards, anticipate procurement objections, map decision-making units, and recommend negotiation tactics. Analyze win/loss patterns to improve close rates across the team.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'CRM System',
      type: 'api',
      description: 'Salesforce/HubSpot CRM — leads, contacts, opportunities, activities, and pipeline data'
    },
    {
      name: 'Intent Data',
      type: 'realtime',
      description: 'Buyer intent signals from Bombora, G2, and website visitor tracking'
    },
    {
      name: 'Competitive Intelligence',
      type: 'api',
      description: 'Competitor pricing, feature comparisons, win/loss analysis, and market positioning data'
    },
    {
      name: 'Sales Content Library',
      type: 'database',
      description: 'Proposal templates, case studies, battle cards, and sales playbooks organized by segment'
    }
  ],
  outputFormats: [
    'Lead Scoring Reports',
    'Pipeline Health Dashboards',
    'Revenue Forecast Models',
    'Sales Proposals & Pitch Decks',
    'Competitive Battle Cards',
    'Territory Planning Documents',
    'Win/Loss Analysis Reports',
    'Sales Playbooks',
    'QBR Presentation Decks'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: false,
    maps: true,
    search: true,
    governance: true,
    stripe: true
  }
};

export default sales;
