const { load: loadClassic } = require('./classic');
const { load: loadNext } = require('./next');

async function load(writeKey) {
  const classic = await loadClassic(writeKey);
  const next = await loadNext(writeKey);

  window.analyticsClassic = classic;
  window.analyticsNext = next;

  console.log(`Done loading A.JS`);
}

const triggerBtn = document.getElementById('trigger');

document.getElementById('load').addEventListener('click', async () => {
  const writeKey = document.getElementById('writeKey').value;
  await load(writeKey);

  triggerBtn.disabled = false;
});

triggerBtn.addEventListener('click', () => {
  console.time('track-classic');
  analyticsClassic.track('Timeout Tested', (...args) => {
    console.timeEnd('track-classic');
    console.log(`Classic track callback invoked`, ...args);
  });

  console.time('track-next');
  analyticsNext.track('Timeout Tested', (...args) => {
    console.timeEnd('track-next');
    console.log(`Next track callback invoked`, ...args);
  });
});