// For more information on customizing Oni,
// check out our wiki page:
// https://github.com/onivim/oni/wiki/Configuration
// https://github.com/onivim/oni/blob/master/browser/src/Input/KeyBindings.ts
// https://github.com/onivim/oni/wiki/API
const activate = oni => {
    console.log("config activated")

    oni.input.bind(
        "<c-enter>",
        () => console.log("Control+Enter was pressed"),
        () => isNotInsertMode(oni)
    )
    // binding for fuzzy finder (I think this doesn't work coz oni bug)
    // oni.input.bind("<Space-f>", "quickOpen.show", () => isNotInsertMode(oni))
}

const isNormalMode = oni => oni.editors.activeEditor.mode === "normal"
const isInsertMode = oni => oni.editors.activeEditor.mode === "insert"
const isNotInsertMode = oni => oni.editors.activeEditor.mode !== "insert"

const deactivate = () => {
    console.log("config deactivated")
}

module.exports = {
    activate,
    deactivate,
    //add custom config here, such as

    "ui.colorscheme": "onedark",

    //"oni.useDefaultConfig": true,
    //"oni.bookmarks": ["~/Documents",]
    //"oni.loadInitVim": false,
    "editor.fontSize": "15px",

    // UI customizations
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto",
    // Use custom Oni init.vim file for settings that can't be set from this file
    "oni.loadInitVim": "~/.oni/init.vim"
}
