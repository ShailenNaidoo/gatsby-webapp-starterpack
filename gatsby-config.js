// eslint-disable-next-line import/no-extraneous-dependencies
const { config } = require('dotenv');
const app = require('./src/tooling/starterpack/config.json');


const {
  name: nameValue,
  color: colorValue,
  description: descriptionValue,
} = app;


const {
  HOTJAR_ID,
  GOOGLE_ANALYTICS_ID,
  SENTRY_DNS,
  HOTJAR_SNIPPET_VERSION,
} = config();


const isHexColor = value => /^#[0-9a-fA-F]{6}/.test(value);


const buildSiteMetadata = ({ name, description, color }) => {
  if (!name || !description || !color) {
    return {};
  }

  return {
    name,
    description,
    color,
  };
};


const buildManifestConfig = ({ name, color }) => {
  if (!name || !color) {
    return [];
  }

  if (!isHexColor(color)) {
    throw new Error('PRODUCT_HEX_COLOR is not a hex color');
  }

  return [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name,
        icon: 'src/assets/meta/icon.png',
        short_name: name,
        start_url: '/',
        background_color: color,
        theme_color: color,
        display: 'minimal-ui',
      },
    },
  ];
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
  siteMetadata: buildSiteMetadata({
    name: nameValue,
    description: descriptionValue,
    color: colorValue,
  }),
  plugins: [
    materialUiConfig,
    ...(buildManifestConfig({ name: nameValue, color: colorValue })),
    ...(createHotjarConfig({ id: HOTJAR_ID, sv: HOTJAR_SNIPPET_VERSION })),
    ...(createAnalyticsConfig({ trackingId: GOOGLE_ANALYTICS_ID })),
    ...(createSentryConfig({ dsn: SENTRY_DNS })),
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
};
