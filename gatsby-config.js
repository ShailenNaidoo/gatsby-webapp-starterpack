const { config } = require('dotenv');


const {
  HOTJAR_ID,
  GOOGLE_ANALYTICS_ID,
  SENTRY_DNS,
  HOTJAR_SNIPPET_VERSION,
} = config();


const siteMetadata = {
  title: 'Gatsby Default Starter',
  description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
  author: '@gatsbyjs',
};


const sourceFilesystemConfig = {
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'images',
    path: `${__dirname}/src/images`,
  },
};


const manifestConfig = {
  resolve: 'gatsby-plugin-manifest',
  options: {
    name: 'gatsby-starter-default',
    short_name: 'starter',
    start_url: '/',
    background_color: '#663399',
    theme_color: '#663399',
    display: 'minimal-ui',
    icon: 'src/images/gatsby-icon.png',
  },
};


const materialUiConfig = {
  resolve: '@wapps/gatsby-plugin-material-ui',
};


const createHotjarConfig = ({ id, sv }) => {
  if (!id || !sv) {
    return [];
  }

  return [
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        id,
        sv,
      },
    },
  ];
};


const createAnalyticsConfig = (trackingId) => {
  if (!trackingId) {
    return [];
  }

  return [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId,
      },
    },
  ];
};


const createSentryConfig = (dsn) => {
  if (!dsn) {
    return [];
  }

  return [
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn,
      },
    },
  ];
};


module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    sourceFilesystemConfig,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    manifestConfig,
    materialUiConfig,
    ...(createHotjarConfig({ id: HOTJAR_ID, sv: HOTJAR_SNIPPET_VERSION })),
    ...(createAnalyticsConfig({ trackingId: GOOGLE_ANALYTICS_ID })),
    ...(createSentryConfig({ dsn: SENTRY_DNS })),
  ],
};
