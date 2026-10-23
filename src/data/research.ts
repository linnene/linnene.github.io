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
    [
      { text: 'I am an undergraduate student in ' },
      { text: 'Artificial Intelligence', strong: true },
      { text: ' at Chongqing University’s National Elite Institute of Engineering, in the ' },
      { text: '2023 cohort of the Mingyue Class', strong: true },
      { text: '.' },
    ],
    [
      { text: 'My research centers on ' },
      { text: 'multi-agent collaboration in embodied intelligence', strong: true },
      { text: ': learning to divide tasks, coordinate actions, and make decisions together. I am pursuing this through multi-agent reinforcement learning, learned world models, and communication-based cooperation, with a particular interest in ' },
      { text: 'practical applications for robot teams', strong: true },
      { text: '—including learning from teammates’ experiences and collaborating with incomplete information.' },
    ],
    [
      { text: 'My engineering work spans ' },
      { text: 'robot teleoperation and simulation', strong: true },
      { text: ', including VR rendering and data-transmission optimization in the laboratory and leading a university robotics team’s digital twin group. At ' },
      { text: 'Ant Group', strong: true },
      { text: ', I worked on ' },
      { text: 'AI agent cloud infrastructure and full-duplex voice integration', strong: true },
      { text: ', including cloud deployment and session recovery. I also develop GeoTrave, a multi-agent travel-planning engine, and primarily work with Python and TypeScript.' },
    ],
  ],
  research: [
    {
      title: 'Multi-Agent Collaboration with Disentangled World Models',
      context: 'Undergraduate research · Chongqing University',
      status: 'Baseline reproduction in progress',
      image: {
        src: '/images/research/overcooked-demo.gif',
        alt: 'Three agents working in three separated areas of an Overcooked kitchen.',
      },
      description: 'Exploring how **individual-agent state modeling**, **multi-agent interaction modeling**, and execution-time communication can support cooperative decisions.',
      highlights: [
        { title: 'Research question', description: 'How can interaction modeling support policy learning while respecting the **information available to each agent during execution**?' },
        { title: 'Current work', description: '**Reproducing CoDreamer**, auditing training and evaluation discrepancies, and conducting controlled communication ablations. Preparation for an **official-code DMAWM baseline** is also underway.' },
        { title: 'Evaluation', description: 'Comparing multi-step world-model predictions on **shared trajectories** and checking communication pathways in collaborative simulation tasks.' },
      ],
      links: [
        { label: 'My-CoDreamer', href: 'https://github.com/linnene/My-CoDreamer' },
        { label: 'CoDreamer paper', href: 'https://arxiv.org/abs/2406.13600' },
      ],
    },
    {
      title: 'Execution-Time Sharing and Use of Failure Experience',
      context: 'Undergraduate research · Chongqing University',
      status: 'Exploratory direction · Problem formulation',
      description: 'Exploring a **world-model-independent mechanism** for sharing failure experiences during execution, helping teammates **avoid repeating similar mistakes**.',
      highlights: [
        { title: 'Research question', description: 'Can a **learned latent representation** of an unsuccessful interaction guide teammates in similar, but not identical, situations?' },
        { title: 'Focus', description: 'Learning what to retain from a failure, **when to share it**, and how teammates can use it to **adjust their policies**.' },
      ],
      links: [],
    },
  ],
  projects: [
    {
      title: 'GeoTrave: Multi-Agent Travel Planning',
      logo: '/images/experience/geotrave-logo.png',
      context: 'Personal project · Python, LangGraph, FastAPI, PostGIS',
      description: 'A conversational multi-agent engine that turns travel preferences into **personalized recommendations and day-by-day itineraries**.',
      highlights: [
        { title: 'Agent orchestration', description: 'LangGraph coordinates preference clarification, **parallel research**, and **information-quality assessment**.' },
        { title: 'Iterative planning', description: '**Persistent conversation state** and a **shared research cache** support revisions across turns.' },
      ],
      links: [{ label: 'Code', href: 'https://github.com/linnene/geotrave' }],
    },
    {
      title: 'VR Teleoperation for a Semi-Humanoid Robot',
      context: 'Embodied intelligence laboratory · Chongqing University',
      description: 'A VR headset and controller interface for **remotely operating a semi-humanoid robot**.',
      highlights: [
        { title: 'My contribution', description: '**VR-side rendering optimization** and **data-transmission optimization**.' },
      ],
      links: [],
    },
    {
      title: 'Digital Twin and Simulation for RoboCon',
      context: 'Digital Twin Group Lead · University robotics team · Fusion 360, Unity',
      description: 'Worked with the team’s digital twin group to build a **1:1 virtual replica of the competition arena** in Unity, using robot models created in Fusion 360.',
      highlights: [
        { title: 'Rendering and lighting', description: 'Used a **custom rendering pipeline** to reproduce realistic lighting in the virtual competition environment.' },
        { title: 'Vision training data', description: 'Ran robots in simulation to collect **realistically rendered synthetic training data** for the team’s vision group.' },
      ],
      outcome: 'The team earned a **bronze medal at the national finals** in the “颗粒归仓” main competition.',
      links: [],
    },
  ],
  experience: [
    {
      title: 'Robotics Software Development',
      context: 'Embodied Intelligence Laboratory · Chongqing University',
      dates: 'Jul 2025 – Present',
      organizationUrl: 'https://eie.cqu.edu.cn/k_y/jszx/jszn.htm',
      organizationName: 'National Elite Institute of Engineering, Chongqing University',
      logo: '/images/experience/cqu-eie-logo.png',
      logoWidth: 298,
      description: 'Contribute to robotics project development in the laboratory, taking **independent responsibility** for selected software features alongside collaborative development work.',
      contributions: [
        {
          title: 'VR teleoperation',
          description: 'Worked on the VR side of a robot teleoperation system, **optimizing rendering and data transmission** as part of the laboratory’s project development.',
        },
      ],
    },
    {
      title: 'Agent Platform Development Intern',
      context: 'Ant Group · PaaS Team',
      dates: 'Jun 18 – Oct 8, 2026',
      organizationUrl: 'https://www.antgroup.com/en',
      organizationName: 'Ant Group 蚂蚁集团',
      logo: '/images/experience/ant-group-logo.png',
      logoWidth: 128,
      description: 'Contributed to the development of a **core PaaS cloud platform** providing infrastructure for internal AI agent applications, adapting agents including **dsh, pi, OpenCode, and Claude Code** for cloud-hosted execution.',
      contributions: [
        {
          title: 'Cloud enablement and session recovery',
          description: 'Adapted pi and dsh for **cloud deployment**, implemented **session and state restoration within seconds**, and integrated agent functionality with the hosting platform.',
        },
        {
          title: 'Full-duplex voice integration',
          description: 'Designed an integration architecture for **full-duplex voice interaction**, enabling agents without native voice-input support to participate in voice-enabled workflows with **limited changes** to the agents and their adapters.',
        },
      ],
    },
  ],
};
