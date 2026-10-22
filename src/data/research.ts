/** User-reviewed public profile. Keep unverified dates, private details and unpublished results out. */
export const researchProfile = {
  name: 'FANGLIN JIAN 简方林',
  description: 'Artificial intelligence undergraduate at Chongqing University, interested in multi-agent learning and embodied intelligence.',
  github: 'https://github.com/linnene',
  email: null as string | null,
  cv: null as string | null,
  banner: {
    src: '/images/research/cooperative-platform-scene.png',
    alt: 'An illustrated platform landscape with three square characters, grassy ledges, and a suspended rope.',
    width: 1402,
    height: 325,
  },
  introduction: [
    'I am an undergraduate student in Artificial Intelligence at Chongqing University, expecting to graduate in June 2027.',
    'I am interested in how embodied agents learn to divide tasks, cooperate, and make decisions. My current focus is model-based multi-agent reinforcement learning and learned world models, particularly collaboration when communication is incomplete or unreliable.',
    'Alongside my research, I have worked on robot teleoperation, simulation for robotics, and software infrastructure for AI agents. I primarily work with Python and TypeScript.',
  ],
  research: [
    {
      title: 'Multi-Agent World Models for Collaboration under Unreliable Communication',
      context: 'Undergraduate research · Chongqing University',
      status: 'Ongoing',
      paragraphs: [
        'I am investigating how an agent can use local observations, interaction history, and partial or outdated messages to estimate teammates’ states and short-term intentions, and use these estimates to inform its own decisions.',
        'My current work starts with an independent reproduction of CoDreamer. It includes multi-agent data handling, graph-based communication, controlled ablations, and evaluation of multi-step world-model predictions on shared trajectories. I am also integrating collaborative simulation tasks and investigating training and evaluation discrepancies before testing communication failures.',
      ],
      links: [
        { label: 'Code', href: 'https://github.com/linnene/My-CoDreamer' },
        { label: 'CoDreamer paper', href: 'https://arxiv.org/abs/2406.13600' },
      ],
    },
  ],
  projects: [
    {
      title: 'GeoTrave: Multi-Agent Travel Planning',
      context: 'Personal project · Python, LangGraph, FastAPI, PostGIS',
      description: 'A conversational travel-planning engine that turns natural-language requests into structured preferences, parallel research, recommendations, and day-by-day itineraries. A manager coordinates specialized agents, while a research subgraph retrieves and evaluates information from spatial, document, web, and weather sources. The system uses persistent conversation checkpoints and a PostgreSQL research cache to carry information across planning steps.',
      links: [{ label: 'Code', href: 'https://github.com/linnene/geotrave' }],
    },
    {
      title: 'VR Teleoperation for a Semi-Humanoid Robot',
      context: 'Embodied intelligence laboratory · Chongqing University',
      description: 'A laboratory project using a VR headset and handheld controllers to remotely operate a semi-humanoid robot. This experience introduced me to the practical interface between human commands and robot actions.',
      links: [],
    },
    {
      title: 'Digital Twin and Simulation for RoboCon',
      context: 'Digital Twin Group Lead · University robotics team',
      description: 'Led the digital twin group, working on a virtual training platform for the team’s robots and generating simulated training data for the vision group through an engine-based environment.',
      links: [],
    },
  ],
  experience: [
    {
      title: 'Agent Hosting Infrastructure',
      context: 'Ant Group · Internship',
      organizationUrl: 'https://www.antgroup.com/en',
      logo: '/images/experience/ant-group-logo.png',
      description: 'Worked in a PaaS infrastructure team developing a cloud platform for hosting multiple types of AI agents for internal teams and products.',
    },
  ],
};
