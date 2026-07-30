# Atlas

Atlas is a free programming learning platform that brings structured roadmaps, trusted learning resources, and real projects together in one place, so learners spend less time searching and more time building.

Here's what Atlas looks like:

<img width="2539" height="1209" alt="Screenshot 2026-07-28 223712" src="https://github.com/user-attachments/assets/28a91b3e-57bc-4028-a0a0-b83fcd71a8d8" />
The hero section in the landing page.

<img width="2535" height="1202" alt="Screenshot 2026-07-28 225126" src="https://github.com/user-attachments/assets/ea705efb-1e34-4369-b379-5c93563580e8" />
The roadmaps it shows the number of topics inside each roadmap and the expected duration to finish it.
    
<img width="2511" height="1088" alt="Screenshot 2026-07-28 225524" src="https://github.com/user-attachments/assets/110107e2-394e-4b94-9896-276560969c3f" />
When the learner start its journey in learning, he shows the topics and its progress.
    
<img width="2386" height="1211" alt="Screenshot 2026-07-27 163453" src="https://github.com/user-attachments/assets/423f599f-f2a6-4f1b-bd2f-e47cd259c620" />
The learning paths should the learner follow to achieve the goal.
    
<img width="1756" height="1175" alt="Screenshot 2026-07-27 175928" src="https://github.com/user-attachments/assets/98e9c79b-a0ce-4722-8c26-dc7dcd36d41b" />
Carefully selected Learning Paths, videos, documentation, and tools.

## Try it

Open this: [https://atlas-navy-mu.vercel.app/](https://atlas-navy-mu.vercel.app/)

## Features

- **Structured Roadmaps** : Follow organized learning paths for different programming fields.
- **Curated Resources** : Learn from carefully selected Learning Paths, videos, documentation, and tools.
- **Progress Tracking** : Keep track of completed topics while moving through each roadmap.
- **Responsive Design** : Built to work smoothly across desktop, tablet, and mobile devices.
- **Modern UI** : Clean interface with light & dark themes, simple animations, and reusable components.


## How Atlas was built

One of my goals was to build Atlas so it could grow without needing to redesign the project every time I added new content. Instead of creating each page separately, I built reusable components that are shared across the platform, making it easy to add new roadmaps, resources, and future features.

Performance was important So I built Interactive sections such as the hero animation and technology strip rely mostly on GPU-accelerated CSS transforms instead of heavy JavaScript animations to keep the interface smooth across different devices.

The biggest challenge was designing an interface that feels modern while staying simple enough that learners can focus on the content rather than the UI.


## How to run it locally

1. Clone the repository

```bash
git clone https://github.com/mmonsefofficial/Atlas.git
```

2. Move into the project

```bash
cd Atlas
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```
5. Create a production build

```bash
npm run build
```

## AI Disclosure
Ai was used  as a development assistant for a limited parts of Atlas for some styling in the landing page, the Resources cards, the Hack Club call-to-action section, and parts of the Hero section. All of these usage approximately about **10–15% of the project** . The rest parts of the project from A to Z was built and customized by me these including the data of roadmaps. I used Ai also in the data part as a guide only for the best learning path should the learner follow.
