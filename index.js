const ffmpeg = require('fluent-ffmpeg');
let track = '123.flac';//your path to source file

ffmpeg(track)
.toFormat('mp3')
.on('error', (err) => {
    console.log('An error occurred: ' + err.message);
})
.on('progress', (progress) => {
    // console.log(JSON.stringify(progress));
    console.log('Processing: ' + progress.targetSize + ' KB converted');
})
.on('end', () => {
    console.log('Processing finished !');
})
.save('output.mp3');//path where you want to save your file