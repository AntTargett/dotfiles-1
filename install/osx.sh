#!/usr/bin/env sh

echo "Disable press-and-hold for keys in favor of key repeat"
defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false

echo "Set a blazingly fast keyboard repeat rate"
defaults write NSGlobalDomain KeyRepeat -int 2 # lower = faster, 1 delta = 15ms, 2 = 30ms

echo "Set a shorter Delay until key repeat"
defaults write NSGlobalDomain InitialKeyRepeat -int 15 # lower = faster, 1 delta = 25ms, 15 = 225ms

echo "Make the dock autoshow after 2 seconds"
# https://apple.stackexchange.com/questions/59556/is-there-a-way-to-completely-disable-dock
defaults write com.apple.dock autohide-delay -float 2

