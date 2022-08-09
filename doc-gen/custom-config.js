let basic = {
  title: 'Slick',    // mandatory
  url: 'https://your-docusaurus-test-site.com',    // mandatory
  baseUrl: '/docs/shared/',
  favicon: 'images/antares-logo.png'
};

let header = {
  title: 'Mobility', 
};

let footer = {
  style: 'dark',
  copyright: `Copyright © ${new Date().getFullYear()} Antares Systems Ltd. All rights reserved.`,
};

let customFields = {
  landingDocId:'team-info/priya'
}

module.exports = {
  basic,
  header,
  footer,
  customFields
}
