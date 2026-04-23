const fs = require('fs');
const createIco = require('png-to-ico');

async function createFavicon() {
  try {
    const icoBuffer = await createIco('public/images/logo2.jpeg');
    fs.writeFileSync('src/app/favicon.ico', icoBuffer);
    console.log('Successfully created favicon.ico from logo2.jpeg');
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon();