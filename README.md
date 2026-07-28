# Atlas

Atlas is a programming learning platform that brings structured roadmaps, trusted learning resources, and real projects together in one place, so learners spend less time searching and more time building.

Here's what Atlas looks like:

<img width="2016" height="1344" alt="export (6)-Photoroom" src="https://github.com/user-attachments/assets/723b88c3-bf6e-42b1-aa85-11d8c179f2da" />

## Try it

Open this: [https://atlas-navy-mu.vercel.app/](https://atlas-navy-mu.vercel.app/)

---

## Features

- **Structured Roadmaps** – Follow organized learning paths for different programming fields.
- **Curated Resources** – Learn from carefully selected articles, videos, documentation, and tools.
- **Progress Tracking** – Keep track of completed topics while moving through each roadmap.
- **Responsive Design** – Built to work smoothly across desktop, tablet, and mobile devices.
- **Modern UI** – Clean interface with light & dark themes, subtle animations, and reusable components.

---

## How Atlas was built

One of my goals was to build Atlas so it could grow without needing to redesign the project every time I added new content. Instead of creating each page separately, I built reusable components that are shared across the platform, making it easy to add new roadmaps, resources, and future features.

Performance was another priority. Interactive sections such as the hero animation and technology strip rely mostly on GPU-accelerated CSS transforms instead of heavy JavaScript animations to keep the interface smooth across different devices.

The biggest challenge wasn't writing the code—it was designing an interface that feels modern while staying simple enough that learners can focus on the content rather than the UI.

---

## Running locally

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
