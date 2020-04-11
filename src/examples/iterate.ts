//https://github.com/beyondscreen/node-rpi-ws281x-native/blob/master/examples/iterate.js
import * as ws281x from 'rpi-ws281x-native'

const NUM_LEDS = parseInt(process.argv[2], 10) || 10
const pixelData = new Uint32Array(NUM_LEDS)

ws281x.init(NUM_LEDS)

// ---- trap the SIGINT and reset before exit
process.on('SIGINT', () => {
  ws281x.reset()
  process.nextTick(() => { process.exit(0) })
});


// ---- animation-loop
let offset = 0
setInterval(() => {
  let i = NUM_LEDS
  while (i--) {
    pixelData[i] = 0
  }
  pixelData[offset] = 0xffffff

  offset = (offset + 1) % NUM_LEDS
  ws281x.render(pixelData)
}, 100)

console.log('Press <ctrl>+C to exit.')
