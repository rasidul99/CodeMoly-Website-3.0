const { getPayload } = require('payload');
const config = require('../src/payload.config').default || require('../src/payload.config');

async function run() {
  try {
    const payload = await getPayload({ config });
    const siteSettings = await payload.findGlobal({
      slug: 'site-settings',
      draft: false,
    });
    console.log('Site Settings Navigation:', JSON.stringify(siteSettings.navigation, null, 2));
    process.exit(0);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    process.exit(1);
  }
}

run();
