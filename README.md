# 🌍 GlobeTrotter — Country Tracker

**Explore the World. Discover Countries. Track Your Journey.**

GlobeTrotter is a responsive and interactive web application built with React, TypeScript, and Tailwind CSS. It allows users to explore countries around the world, search for specific destinations, filter countries, and keep track of the countries they have visited.

## ✨ Features

- 🌎 **Explore Countries** — Browse a collection of countries from around the world.
- 🔍 **Smart Search** — Search countries by name, official name, or capital.
- 🗺️ **Country Information** — View country flags, names, regions, capitals, and population.
- ✅ **Visited Countries Tracker** — Mark countries as visited or not visited.
- 🎯 **Filter Countries** — Display all countries, visited countries, or countries not yet visited.
- 📊 **Visited Summary** — View your visited-country statistics and progress.
- 📱 **Responsive Design** — Enjoy a user-friendly interface across desktop, tablet, and mobile devices.
- ⚡ **Fast Performance** — Powered by Vite for a fast development experience and optimized production builds.
- 🎨 **Modern UI** — Styled with Tailwind CSS for a clean and consistent interface.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Responsive styling and UI design |
| Vite | Development server and production build |
| React Icons | Icons and visual elements |
| Fetch API | Retrieving country data from the API |

## 🌐 API

Country data is retrieved from the Programming Hero API:

**API Endpoint:** https://openapi.programming-hero.com/api/all

The application uses the API to display country information such as flags, country names, regions, capitals, and population.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Navigate to the Project Directory

```bash
cd globetrotter
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### 5. Build for Production

```bash
npm run build
```

Vite generates the production-ready files in the `dist` directory.

### 6. Preview the Production Build

```bash
npm run preview
```

## 📁 Project Structure

```text
globetrotter/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CountryCard.tsx
│   │   ├── CountryList.tsx
│   │   ├── CountrySearch.tsx
│   │   ├── CountryTrackerHeader.tsx
│   │   ├── FilterButtons.tsx
│   │   ├── Footer.tsx
│   │   └── VisitedSummary.tsx
│   ├── types/
│   │   └── country.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*Note: The structure above is illustrative. Adjust the file and folder names to match your actual project.*

## 💡 How to Use

1. Open GlobeTrotter in your browser.
2. Browse the available countries.
3. Use the search bar to find a country by name or capital.
4. Use the filter buttons to view all, visited, or unvisited countries.
5. Mark a country as visited using its country card.
6. Check the visited summary to see your progress exploring the world.

## 🔮 Future Improvements

- [ ] Save visited countries in local storage.
- [ ] Add country details pages.
- [ ] Add sorting by population and country name.
- [ ] Add region-based filtering.
- [ ] Add pagination or infinite scrolling.
- [ ] Improve loading, error, and empty states.
- [ ] Add automated tests.

## 👨‍💻 Author

**Naharul Islam**

Aspiring Full-Stack Web Developer passionate about building responsive, accessible, and user-friendly web applications.

- GitHub: [@touhidcode](https://github.com/touhidcode)
- Facebook: [Naharul Islam](https://www.facebook.com/naharul36)
- Email: naharulislam@gmail.com

## 📄 License

This project is available for learning and personal portfolio purposes. Add an open-source license, such as the MIT License, if you intend to distribute it under those terms.

---

⭐ If you find this project interesting, consider giving the repository a star!

**Built with ❤️ by Naharul Islam**
