GIF transcoding

“FFmpeg is the leading multimedia framework, able to decode, encode, transcode, mux, demux, stream, filter and play pretty much anything that humans and machines have created. It supports the most obscure ancient formats up to the cutting edge.”


GIPHY uses FFMPEG, so it's good enough for me too! Though I learned that it's not free of bugs or quirks.

Acknowledgements:


https://ffmpeg.org/ffmpeg.html#Main-options

Giphy:
https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/

Fireship.io
https://fireship.io/lessons/wasm-video-to-gif/


http://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html

Niave implementation:
ffmpeg -ss 61.0 -t 2.5 -i input.mp4 -f gif output.gif


Q: How long can my gif be?
A: Pretty dang long. The only limit (beyond) your patience, your browser memory) is Web Assembly. Web Assemply (or WASM for short)currently the caps file inputs to 2 GB, which means uploaded videos can be several minutes long.