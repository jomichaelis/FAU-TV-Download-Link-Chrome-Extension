# FAU-TV-Download-Link-Chrome-Extension
Chrome Extension that copies the m3u8- and vtt-links to clipboard when opening a clip on www.fau.tv

Please use this chrome-extension with caution.
Also, please be aware that videos of www.fau.tv are underlying strong copyright-restrictions, so use the videos for personal use only!

## Usage
To download the videos, use ffmpeg:

I created a script called `download-fau-tv.sh` looking like so:
```bash
#!/bin/bash

ffmpeg -i $1 -i $2 -bsf:a aac_adtstoasc -c copy -c:s mov_text -metadata:s:s:0 language=eng $3
```

Then, you can just call the script like so:
```bash
./download-fau-tv.sh <text copied from chrome extension> <your-desired-filename.mp4>
```
