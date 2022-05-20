/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
var child_process = require('child_process');
var extract = require('extract-zip');
const path = require('node:path');
URL = `${process.env.REACT_APP_TOLGEE_API_URL}/api/project/export/jsonZip?ak=${process.env.REACT_APP_TOLGEE_API_KEY}`;
FILE_NAME = 'zip/data.zip';
FILE_PATH = path.join(process.env.REACT_APP_TOLGEE_DATA_PATH, FILE_NAME);
//ZIP
ZIP_PATH = path.join(process.cwd(), process.env.REACT_APP_TOLGEE_DATA_PATH);
ZIP_SOURCE = path.join(ZIP_PATH, FILE_NAME);

try {
  var cmd = `curl ${URL} --output .${FILE_PATH}`;
  child_process.execSync(cmd);

  extract(ZIP_SOURCE, { dir: ZIP_PATH }, function (unzipErr) {
    console.error('UNZIP_ERROR', unzipErr);
  });
} catch (error) {
  console.error('ERROR', error);
}
