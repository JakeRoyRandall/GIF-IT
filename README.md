App deployed @ https://gif-it-good.netlify.app

App takes MP4 videos and converts them to gifs switly & locally utilizing ffmpeg. I was inspired by Fireship.io video to utilize the Web Assembly version of FFMPEG and then was able to upgrade the application using the insights from GIPHY who also uses FFMPED (though not WASM to do it locally).

Acknowledgements:
Fireship.io: https://fireship.io/lessons/wasm-video-to-gif/
Giphy: https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/

Q: How long can my gif be?
A: Pretty dang long. The only limit (beyond) your patience, your browser memory) is Web Assembly. Web Assemply (or WASM for short)currently the caps file inputs to 2 GB, which means uploaded videos can be several minutes long.