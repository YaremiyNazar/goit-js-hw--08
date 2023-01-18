import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe')
const player = new Player(iframeEl)

function onPlay({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds)
}

function currentTime() {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    // localStorage.removeItem("videoplayer-current-time")
}

currentTime()
player.on('timeupdate', throttle(onPlay, 1000));






