import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seed started');

  await prisma.socialLink.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: 'Andrey Koreshkov',

      description:
        'Senior Backend / Fullstack Developer with 10+ years of experience building scalable backend systems, APIs, high-load applications, and distributed services. Strong expertise in Node.js and TypeScript, with experience in Express, NestJS, databases, messaging systems, microservices, and infrastructure automation. Experienced in fintech, Web3, blockchain, trading systems, and automation. Hands-on experience with Solana and Fuel Network, including blockchain data indexing, transaction processing, liquidity management, and blockchain-integrated backend services. Additional experience with Rust and .NET/C#, including backend and automation tasks. Comfortable taking ownership of features end-to-end, from system design and implementation to deployment and production support.',

      socialLinks: {
        create: [
          {
            name: 'github',
            displayName: 'GitHub',
            url: 'https://github.com/balthazzar',
            iconUrl: 'https://cdn.simpleicons.org/github',
          },
          {
            name: 'linkedin',
            displayName: 'LinkedIn',
            url: 'https://linkedin.com/in/andrey-koreshkov-4081a8136',
            iconUrl: 'https://cdn.simpleicons.org/linkedin',
          },
          {
            name: 'telegram',
            displayName: 'Telegram',
            url: 'https://t.me/ololo_12345',
            iconUrl: 'https://cdn.simpleicons.org/telegram',
          },
        ],
      },

      skills: {
        create: [
          { name: 'JavaScript' },
          { name: 'TypeScript' },
          { name: 'Rust' },
          { name: 'C#' },

          { name: 'Node.js' },
          { name: 'Express' },
          { name: 'NestJS' },
          { name: 'Hapi' },
          { name: '.NET / ASP.NET Core' },

          { name: 'React' },
          { name: 'Redux' },
          { name: 'Vite' },

          { name: 'PostgreSQL' },
          { name: 'MongoDB' },
          { name: 'Oracle' },
          { name: 'Redis' },

          { name: 'Kafka' },
          { name: 'RabbitMQ' },

          { name: 'Solana' },
          { name: 'Fuel Network' },
          { name: 'Blockchain Indexing' },
          { name: 'Transaction Processing' },
          { name: 'DEX Infrastructure' },
          { name: 'Trading Systems' },

          { name: 'Docker' },
          { name: 'Kubernetes' },
          { name: 'KubeVirt' },
          { name: 'CI/CD' },

          { name: 'REST APIs' },
          { name: 'Microservices' },
          { name: 'Distributed Systems' },
          { name: 'High-load Applications' },
          { name: 'System Design' },

          { name: 'GraphQL' },
          { name: 'Prisma' },
        ],
      },

      experience: {
        create: [
          {
            company: 'Reactor.exchange',
            position: 'Backend Developer',
            startDate: new Date('2025-08-01'),
            endDate: null,

            achievements: [
              'Developing backend services for a decentralized exchange (DEX) on Fuel Network.',
              'Designing and implementing APIs for trading, competitions, rewards, and other platform functionality.',
              'Working with PostgreSQL and blockchain data indexing.',
              'Optimizing database queries, indexes, and backend performance.',
              'Working with Fuel SDK and blockchain infrastructure.',
              'Contributing to React frontend functionality when required.',
              'Working with distributed services and asynchronous blockchain-related processing.',
            ],
          },

          {
            company: 'Solstone',
            position: 'Backend Developer',
            startDate: new Date('2025-01-01'),
            endDate: new Date('2025-12-31'),

            achievements: [
              'Developed backend infrastructure for Telegram-based crypto trading automation.',
              'Built Node.js services integrating with Solana blockchain infrastructure.',
              'Implemented blockchain transaction processing and liquidity-management functionality.',
              'Worked extensively with Rust on blockchain-related backend components.',
              'Developed restaking-related logic and custom blockchain infrastructure using Rust.',
              'Worked with a custom lightweight RPC node and blockchain communication layer.',
              'Implemented backend services for transaction monitoring and automated blockchain operations.',
              'Used .NET / C# alongside Node.js for selected backend and automation components.',
            ],
          },

          {
            company: 'Sidus Heroes',
            position: 'Backend Developer',
            startDate: new Date('2024-01-01'),
            endDate: new Date('2025-12-31'),

            achievements: [
              'Implemented server-side logic for an online strategy game.',
              'Designed data models and backend services for game state and user progression.',
              'Developed functionality for competitions and game-related workflows.',
              'Optimized storage and processing of large volumes of game data.',
              'Worked with distributed backend services and database-heavy workloads.',
            ],
          },

          {
            company: 'NDA Project',
            position: 'Backend Developer',
            startDate: new Date('2024-01-01'),
            endDate: new Date('2024-12-31'),

            achievements: [
              'Built Node.js automation tools for infrastructure management.',
              'Developed services for automated virtual machine provisioning using KubeVirt.',
              'Automated operating system installation and configuration.',
              'Implemented SSH tunneling and remote infrastructure management.',
              'Worked with Kubernetes-based infrastructure and containerized services.',
              'Designed backend automation workflows for managing virtualized environments.',
            ],
          },

          {
            company: 'Globiance',
            position: 'Backend Developer',
            startDate: new Date('2022-01-01'),
            endDate: new Date('2023-12-31'),

            achievements: [
              'Participated in redesign and development of a crypto exchange trading engine.',
              'Developed and integrated internal backend services.',
              'Worked with Kafka and Redis in a distributed microservices environment.',
              'Improved backend performance and reliability.',
              'Worked with trading-related business logic and asynchronous event processing.',
              'Designed and implemented integrations between internal services.',
              'Worked with high-throughput event-driven backend architecture.',
            ],
          },

          {
            company: 'Alfa-Bank',
            position: 'Fullstack Developer',
            startDate: new Date('2017-01-01'),
            endDate: new Date('2022-12-31'),

            achievements: [
              'Developed and maintained a large-scale platform for managing non-financial banking services.',
              'Designed and implemented backend APIs and integrations with external partners.',
              'Worked in a distributed, high-load environment.',
              'Developed frontend functionality and internal applications.',
              'Worked with Node.js, JavaScript, databases, and microservices.',
              'Participated in architectural and system-design decisions.',
              'Developed and maintained integrations between internal and external banking systems.',
            ],
          },

          {
            company: 'Tinkoff Bank',
            position: 'Fullstack Developer',
            startDate: new Date('2016-01-01'),
            endDate: new Date('2017-12-31'),

            achievements: [
              'Developed internal tools and administrative applications.',
              'Built backend services using Node.js.',
              'Developed frontend functionality using Angular.',
              'Worked with internal APIs, databases, and business workflows.',
            ],
          },

          {
            company: 'WebRunes',
            position: 'Fullstack Developer',
            startDate: new Date('2015-01-01'),
            endDate: new Date('2016-12-31'),

            achievements: [
              'Developed a distributed document management system.',
              'Built backend services using Node.js.',
              'Worked with microservices architecture.',
              'Developed frontend functionality and integrations.',
              'Participated in designing distributed application components.',
            ],
          },
        ],
      },

      projects: {
        create: [
          {
            name: 'Reactor.exchange',
            url: 'https://reactor.exchange',
          },
          {
            name: 'Telegram Trading Bots',
            url: 'https://t.me/swapiz_bot',
          },
        ],
      },
    },
  });

  console.log('Seed finished');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });