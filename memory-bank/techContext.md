# Technical Context: Cine-Craze

## Technologies Used

### Frontend Framework

- **React.js (v19.1.0)**: A JavaScript library for building user interfaces with a component-based architecture.
- **React DOM (v19.1.0)**: React package for DOM rendering.
- **React Scripts (v5.0.1)**: Configuration and scripts for Create React App.

### Styling

- **Tailwind CSS (v3.4.17)**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Custom Color Scheme**: Defined in tailwind.config.js with project-specific colors.
- **Google Fonts**: Outfit font family imported for consistent typography.

### API Integration

- **OMDB API**: Open Movie Database API used for fetching movie and TV series data.
- **Fetch API**: Native browser API used for making HTTP requests.

### Testing

- **Jest**: JavaScript testing framework included with React Scripts.
- **React Testing Library**: Testing utilities for React components.
- **Testing Library DOM**: DOM testing utilities.
- **Testing Library User Event**: Library for simulating user events in tests.

### Development Tools

- **ESLint**: Linting utility for identifying and fixing problems in JavaScript code.
- **Web Vitals**: Library for measuring web performance metrics.

## Development Setup

### Environment Requirements

- **Node.js**: Required for running the development server and build tools.
- **npm/yarn**: Package manager for installing dependencies.
- **Modern Browser**: Chrome, Firefox, Safari, or Edge for development and testing.

### Project Structure

```
cine-craze/
├── public/                 # Static assets and HTML template
│   ├── assets/             # Images, CSS, and other static files
│   │   ├── css/            # Additional CSS files
│   │   ├── images/         # Image assets
│   │   └── js/             # JavaScript files
│   ├── index.html          # HTML template
│   └── ...                 # Other public assets
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── Bookmark.js     # Bookmark component
│   │   ├── Box.js          # Movie/TV show box component
│   │   ├── ...             # Other components
│   ├── App.js              # Main application component
│   ├── index.css           # Global styles
│   └── index.js            # Application entry point
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── ...                     # Other configuration files
```

### Build and Deployment

- **Development Server**: `npm start` runs the app in development mode.
- **Production Build**: `npm run build` creates an optimized production build.
- **Testing**: `npm test` runs the test suite.

## Technical Constraints

### API Limitations

- OMDB API has rate limits and requires an API key.
- Search results are paginated and limited in number.
- Some movie/TV show data may be incomplete or missing.

### Browser Compatibility

- The application targets modern browsers as defined in the browserslist configuration.
- IE11 and older browsers are not supported.

### Performance Considerations

- Large image assets may impact load times.
- API calls should be optimized to reduce latency.
- Component re-renders should be minimized for better performance.

## Dependencies

### Core Dependencies

- react
- react-dom
- react-scripts

### Development Dependencies

- tailwindcss

### Testing Dependencies

- @testing-library/dom
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event

## Configuration Files

### package.json

Contains project metadata, dependencies, and scripts for building, testing, and running the application.

### tailwind.config.js

Configures Tailwind CSS with custom colors, fonts, and other theme settings specific to the project.

### .gitignore

Specifies files and directories that should be ignored by Git version control.

## External Services

### OMDB API

- **Base URL**: http://www.omdbapi.com/
- **Authentication**: Requires API key (stored as KEY constant in App.js)
- **Endpoints Used**:
  - Search: `?apikey=${KEY}&s=${query}`
