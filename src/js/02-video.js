import Player from '@vimeo/player';
import { throttle } from 'lodash';

const vimeoPlayer = document.querySelector('#handstick');

if (vimeoPlayer) {
const player = new Player('handstick', {
    id: vimeoPlayer.dataset.vimeoId,
    width: 640
});

const onTimeUpdate = throttle(function(data) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
  console.log('Current time:', data.seconds);
}, 600);

  const currentTime = localStorage.getItem("videoplayer-current-time");
  const parsedSettings = JSON.parse(currentTime ?? '[]');

  player.setCurrentTime(parsedSettings).then(function(seconds) {

  }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
  
        default:
            // some other error occurred
            break;
    }
  });

player.on('timeupdate', onTimeUpdate);
};

