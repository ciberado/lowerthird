# Lowerthird

This cli tool will help you to generate lower third banners videos (with a fine green screen background) just like those you see in the streaming shows. It is basically a simple wrapper for these fine pieces of software:

* Matt Chestnuts [lower third animations with CSS](https://codepen.io/mattchestnut/pen/dMrONe)
* Łukasz Nawrot elegant [record-page](https://github.com/lnawrot/record-page) 


## Requisites

* You will need `ffmpeg` in your system to produce the video from the individual frames

```bash
# instructions for Ubuntu 20.04

sudo apt update
sudo apt install ffmpeg -y
```

* `Chrome` is used to run the html code and should be available in your system

```bash
sudo apt-get install -y libappindicator1 fonts-liberation
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome*.deb
```

* Get a decent version of `nodejs`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm install --lts 
```

## Running the tool

* Set the path to Chrome

```bash
export CHROME_PATH=/usr/bin/google-chrome-stable
``` 

* Execute `lowerthird` without installing it

```bash
npx lowerthird "The original Matrix film was released on 1999" -t "Fun fact" --fps 60 --seconds 8
```

## Options

* Execute `lowerthird` without any parameter to see the syntax and available options
  
```bash
npx lowerthird
```
* This is the output text that will appear

```bash
lowerthird message [--title title] [--output filename] [--fps frames-per-second] [--seconds number-of-seconds]
```