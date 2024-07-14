import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});
console.log(player.on);
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
// player.addEventListener('click', onPlay);
// const onPlay = function(data) {
//   // data is an object containing properties specific to that event
//   console.dir(data)
// };

// player.on('play', onPlay);

{/* <iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe> */}

