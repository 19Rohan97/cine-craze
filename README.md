# Cine-Craze 🎬

A modern React application for discovering and organizing movies and TV series.

![Cine-Craze Screenshot](./public/assets/images/logo.svg)

## Overview

Cine-Craze is a web application that allows users to browse, search, and bookmark movies and TV series. Built with React and styled with Tailwind CSS, it provides a clean, intuitive interface for exploring entertainment content.

## Features

- **Search**: Find movies and TV series by title
- **Browse**: Explore content by category (Movies, TV Series)
- **Bookmark**: Save your favorite content for later viewing
- **Responsive Design**: Optimized for all screen sizes

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **API**: OMDB API for movie and TV series data
- **State Management**: React Hooks (useState, useEffect)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cine-craze.git
   cd cine-craze
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cine-craze/
├── public/                 # Static assets
│   ├── assets/             # Images, CSS, and other static files
│   └── index.html          # HTML template
├── src/                    # Source code
│   ├── components/         # React components
│   ├── App.js              # Main application component
│   ├── index.css           # Global styles
│   └── index.js            # Application entry point
└── package.json            # Project dependencies and scripts
```

## Usage

- **Home**: Browse recommended content
- **Movies**: Filter to show only movies
- **TV Series**: Filter to show only TV series
- **Bookmarked**: View your saved content
- **Search**: Enter keywords to find specific titles

## Development

### Available Scripts

- `npm start`: Run the development server
- `npm build`: Build the app for production
- `npm test`: Run tests
- `npm eject`: Eject from Create React App

### Styling

The project uses Tailwind CSS for styling. Custom colors and font sizes are defined in `tailwind.config.js`.

## Future Enhancements

- User authentication
- Advanced search filters
- Ratings and reviews
- Recommendations based on viewing history
- Offline support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [OMDB API](http://www.omdbapi.com/) for providing movie and TV series data
- [Frontend Mentor](https://www.frontendmentor.io) for the design inspiration
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the JavaScript library
