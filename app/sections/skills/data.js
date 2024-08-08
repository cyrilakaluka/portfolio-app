const data = [
  {
    category: "Front-end Development",
    skills: [
      {
        name: "HTML5/CSS3",
        level: '5/5',
        description: "Creating responsive and accessible web pages using modern HTML5 and CSS3 techniques.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        }
      },
      {
        name: "JavaScript/TypeScript",
        level: '5/5',
        description: "Building dynamic web applications with JavaScript and TypeScript.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        }
      },
      {
        name: "React",
        level: '4/5',
        description: "Using React to build reusable and efficient components for web applications.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        }
      },
      {
        name: "Cypress",
        level: '4/5',
        description: "Using Cypress to write and run automated tests for web applications.",
        icon: {
          type: "font",
          class: "devicon-cypressio-plain",
          color: "#1ca379"
        }
      },
      {
        name: "SASS/SCSS",
        level: '3/5',
        description: "Using SASS/SCSS to create modular and scalable styles for web applications.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        }
      },
      {
        name: "Tailwind CSS",
        level: '5/5',
        description: "Using Tailwind CSS to create responsive and visually appealing web designs.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        }
      },
      {
        name: "ASP.NET MVC",
        level: '5/5',
        description: "Using ASP.NET MVC to develop web applications using the .NET framework.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg"
        }
      }
    ]
  },
  {
    category: "Back-end Development",
    skills: [
      {
        name: "C#/.NET",
        level: '5/5',
        description: "Building scalable applications using .NET and C#.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
        }
      },
      {
        name: "Node.js/Express",
        level: '5/5',
        description: "Developing robust back-end applications and RESTful APIs with Node.js and Express.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        }
      },
      {
        name: "Postgres SQL",
        level: '5/5',
        description: "Using SQL (PostgreSQL) to store and manage data in a database.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        }
      },
      {
        name: "MongoDB",
        level: '4/5',
        description: "Using NoSQL (MongoDB) to store and manage data in a database.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
        }
      },
      {
        name: "RabbitMQ",
        level: '4/5',
        description: "Using RabbitMQ to build message queues and publish and subscribe applications.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg"
        }
      },
      {
        name: "API Development",
        level: '5/5',
        description: "Designing and implementing RESTful APIs with JSON and XML data formats.",
        icon: {
          type: "text",
          text: "API",
          hexColor: "#00A9FE"
        }
      },
      {
        name: "Microservices",
        level: '4/5',
        description: "Using microservices architecture to build and deploy scalable web applications.",
        icon: {
          type: "text",
          text: "µSvc",
          hexColor: "#A674A1"
        }
      }
    ]
  },
  {
    category: "DevOps & Cloud Services",
    skills: [
      {
        name: "Docker",
        level: '5/5',
        description: "Using Docker to build and run containers for web applications.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        }
      },
      {
        name: "Kubernetes",
        level: '5/5',
        description: "Using Kubernetes to manage and scale web applications.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
        }
      },
      {
        name: "CI/CD",
        level: '5/5',
        description: "Implementing CI/CD pipelines with Azure DevOps, GitHub Actions, and GitLab CI.",
        icon: {
          type: "image",
          url: "https://code.benco.io/icon-collection/azure-icons/Azure-DevOps.svg"
        }
      },
      {
        name: "Azure Key Vault",
        level: '4/5',
        description: "Using Azure Key Vault to store and manage secrets for web applications.",
        icon: {
          type: "image",
          url: "https://code.benco.io/icon-collection/azure-icons/Key-Vaults.svg"
        }
      },
      {
        name: "Azure Blob Storage/AWS S3",
        level: '3/5',
        description: "Using blob storage services to store and manage unstructured data.",
        icon: {
          type: "image",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
        }
      }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      {
        name: "Problem Solving",
        level: '5/5',
        description: "Critical thinking and problem-solving skills for debugging and optimizing code.",
        icon: {
          type: "image",
          url: "./assets/head-idea.svg"
        }
      },
      {
        name: "Effective Communication",
        level: '5/5',
        description: "Communicating technical concepts to both technical and non-technical stakeholders.",
        icon: {
          type: "image",
          url: "./assets/communication.svg"
        }
      },
      {
        name: "Team Collaboration",
        level: '5/5',
        description: "Working collaboratively in cross-functional teams and mentoring junior developers.",
        icon: {
          type: "image",
          url: "./assets/team.svg"
        }
      },
      {
        name: "Time Management",
        level: '5/5',
        description: "Ensuring projects are completed on time and to a high standard.",
        icon: {
          type: "image",
          url: "./assets/time-success.svg"
        }
      },
      {
        name: "Fast Learner",
        level: '5/5',
        description: "Self-motivated and willing to take on new challenges and responsibilities.",
        icon: {
          type: "image",
          url: "./assets/book.svg"
        }
      }
    ]
  }
];

export default data;