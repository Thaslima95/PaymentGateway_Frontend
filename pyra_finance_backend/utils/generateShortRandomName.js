const { v4: uuidv4 } = require('uuid');
function generateShortRandomName() {
  const uuid = uuidv4();
  const shortName = uuid.replace(/-/g, '').substr(0, 10);
  return shortName;
}
module.exports = generateShortRandomName;