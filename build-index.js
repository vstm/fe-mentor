const process = require('node:process');
const path = require('node:path');
const fs = require('node:fs');
const fsPromises = fs.promises;

const pages = process.argv.slice(2);

Promise.allSettled(
  pages.map(async file => {
    const packageFile = path.join(__dirname, file, 'package.json');

    if ((await fsPromises.access(packageFile, fs.constants.R_OK))) {
      throw new Error(`file ${ packageFile } does not exist`);
    }

    const packageDataRaw = await fsPromises.readFile(packageFile);
    const packageData = JSON.parse(packageDataRaw);

    return {
      name: packageData.name,
      description: packageData.description,
      url: `${ file }/`,
    }
  })
).then(values => {
  const errors = values.filter(value => value.status === 'rejected').map(value => value.reason);

  if (errors.length > 0) {
    console.error(errors);
    process.exit(1);
    return;
  }
  
  const pages = values.filter(value => value.status === 'fulfilled').map(value => value.value);

  const output = `
<html>
<head>
</head>
<body>
  <h1>Available Frontend Mentor pages</h1>
  <ul>
    ${ pages.map(page => 
      `<li><a href="${page.url}">${ page.name } - ${ page.description }</a></li>`
    ).join("\n") }
  </ul>
<body>
</html>
  `;
      console.log(output);

});
