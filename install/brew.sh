#!bin/sh

if test ! $(which brew); then
    echo "Installing homebrew"
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

echo "Installing homebrew packages..."

# brew stuff
brew install caskroom/cask/brew-cask

# core development tools
brew install mercurial
brew install git
brew install macvim --with-override-system-vim
brew install tmux
brew install zsh
brew install go --with-cc-all

# CLI tools
brew install tree
brew install jq

# cask apps
brew cask install atom

# need for YCM vim plugin
brew install cmake


exit 0
