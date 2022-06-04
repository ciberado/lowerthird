const record = require('record-page');

(async () => {
  await record({
	  url: 'http://172.27.116.252:8080/lower-third.html',
    filename : 'video',
    framesPerSecond: 60,
    maxFramesCount : 60*10,
    framesDir: '/tmp'
  });
  console.log('Finished, video.mp4 generated!');
})();
