export let PROJECTS = [
  {
    name: "Monitor Developers",
    summary:
      "Monitor and get statistics on everything your programmers do",
  },
  {
    name: "Analytics",
    summary:
      "We developed a microservices architecture for the main analytics services for our Customer",
    description: "We received a monolithic PHP application with multiple mission-critical services. These services had the problem that when one failed, the others did too. There was no easy way to see where the project was failing. \n\n As a team, we identified the most important components of the application. We designed cloud computing-oriented microservices using an event-driven architecture. \n\nFor the new projects, we use Python, Flask, FastAPI, and additionally, we built a new CI/CD pipeline that reduced the build and deployment time from 2 weeks to 10 minutes.",
    image: "analytics.png"
  },
  {
    name: "Single Sign On",
    summary:
      "We designed a single sign on service for all the services inside our customer network",
    description: "Our Client have 3 big service that offers to their clients. Every one of these services were using different authentication implementations. The problem was the users need to have username/password for every app. Also they login multiple time to use the different services\n\n We designed a new Single sign on service to allow the users to login only once. But also we improve the security because our main backend component is aws cognito. Now we support advance security, once time passwords flow and authentication federation using external providers like azure or pink",
    image: "sso.png"
  },
  {
    name: "Admin Tool",
    summary:
      "We developed brand positioning and design assets for the launch of a new colored water product.",
  },
  {
    name: "Order Management",
    summary:
      "We developed brand positioning and design assets for the launch of a new colored water product.",
  },
  {
    name: "Delivery Service",
    summary:
      "We developed brand positioning and design assets for the launch of a new colored water product.",
  },
  {
    name: "QA Platform",
    summary:
      "We developed brand positioning and design assets for the launch of a new colored water product.",
  },
  {
    name: "Monolith to Distributed monolith",
    summary:
      "How to reduce contention. Team, technology and deployment",
    description: "We took a project with 5 different modules. Every one of these modules were in the same repository. Every module have its own team in 3 different countries.\n\nThese project suffer from a lot of contetion. The teams were not able to work independently in a isolated way. The degree of coupling was high. for the teams was impossible to deploy, innovate or upgrade independently the projects.\n\nWe took the monolith and refactored and transition to a distributed monolith. We used docker and ngix locally to split the services. And in AWS we used load balancer networking rules.\n\nThese was one of the more complicate projects we faced. Because while the 5 teams continue working we were spliting and improving the project.\n\nNow we have 10 different projects that can be deploy faster and are easier to modernize",
    image: "monolithic_service.png"
  },
];