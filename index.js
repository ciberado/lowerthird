#! /usr/bin/env node

const fs = require('fs');

const commandLineArgs = require('command-line-args')

const record = require('record-page');

(async () => {
  const tmpDir = fs.mkdtempSync('lowerthird');  

  const optionDefinitions = [
    { name: 'message', alias : 'm', type : String, defaultOption : true},
    { name: 'title', alias : 't', type : String, defaultValue : ''},
    { name: 'output', alias: 'o', type: String, defaultValue : 'video' },
    { name: 'fps', alias: 'f', type: Number, defaultValue : 60 },
    { name: 'seconds', alias: 's', type: Number, defaultValue : 10 }
  ];

  const options = commandLineArgs(optionDefinitions);

  if (options.message === undefined) {
    console.error(`lowerthird message [--title title] [--output filename] [--fps frames-per-second] [--seconds number-of-seconds]`);
    process.exit(-1);
  }

  console.info(`Generating ${options.output} video at ${options.fps} fps for ${options.seconds} seconds.`);

  await record({
	  url: `file://${__dirname}/lower-third.html?title=${options.title}&message=${options.message}`,
    filename : options.output,
    framesPerSecond: options.fps,
    maxFramesCount : 60 * options.seconds,
    framesDir: tmpDir
  });

  console.log('Done.');

  fs.rmSync(tmpDir, { recursive: true, force: true });
  
  fs.readdirSync(__dirname)
    .filter(f => f.indexOf('lighthouse') !== -1)
    .forEach(d => fs.rmSync(__dirname + '/' + d, {recursive: true, force: true}));
  
})();
