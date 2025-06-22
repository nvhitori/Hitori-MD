# H1TORI Multi-Device WhatsApp Bot

A multi-device WhatsApp bot based on Baileys with comprehensive features and easy deployment options.

![GitHub stars](https://img.shields.io/github/stars/nvhitori/Hitori-MD?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/nvhitori/Hitori-MD?style=flat-square)
![CodeFactor](https://www.codefactor.io/repository/github/nvhitori/Hitori-MD/badge)

## Features

- **Multi-Device Support** - Works across multiple WhatsApp devices
- **Fast Response** - Optimized for quick message processing
- **Comprehensive Commands** - Downloader, games, tools, AI integration
- **No Internet Required** - Offline capabilities for basic functions
- **Premium Features** - Advanced functionality for premium users

## Quick Start

### Termux Installation
```bash
pkg upgrade && pkg update
pkg install git nodejs -y
pkg install ffmpeg imagemagick -y
git clone https://github.com/nvhitori/Hitori-MD.git
cd Hitori-MD
npm install
node .
```

### Windows/VPS Installation
1. Install [Node.js](https://nodejs.org/en/download)
2. Install [Git](https://git-scm.com/downloads) 
3. Install [FFmpeg](https://ffmpeg.org/download.html)
4. Install [ImageMagick](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/nvhitori/Hitori-MD.git
cd Hitori-MD
npm install
node .
```

## Configuration

Edit configuration in `config.js`:
- Owner number and name
- Bot name and settings
- API keys and tokens

## Deployment

### Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/nvhitori/Hitori-MD)

Required buildpacks:
- [FFmpeg](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest)
- [ImageMagick](https://github.com/DuckyTeam/heroku-buildpack-imagemagick)

### Session Generation
[![Get Session](https://repl.it/badge/github/quiec/whatsAlfa)](https://replit.com/@nvhitori/Hitori-Multi-Device-Session?v=1)

## Command Line Options

```bash
node . [--options] [<session name>]
```

- `--self` - Self mode (bot only responds to owner)
- `--pconly` - Private chat only
- `--gconly` - Group chat only  
- `--prefix <prefix>` - Set custom prefix
- `--server` - Server mode for hosting
- `--autoread` - Auto-read all messages

## Contact

- **Bot Demo**: [WhatsApp](https://wa.me/6283198872425)
- **Official Group**: [Join Group](https://chat.whatsapp.com/C3yInEZrV0XBT2agetofDy)
- **Developer**: [@nvkenn_](https://instagram.com/nvkenn_)

## License & Terms

1. Not for commercial use
2. Give proper credit when reusing
3. Star the repository before use
4. Follow responsible usage guidelines

## Credits

- [Adiwajshing](https://github.com/adiwajshing/Baileys) - Baileys library
- [BochilGaming](https://github.com/bochilgaming) - Original base
- [Nurutomo](https://github.com/nurutomo) - Contributions
- All contributors and supporters

---

**Developed by [HIT6RI](https://github.com/nvhitori)**
