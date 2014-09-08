audio-sprite-surfer
===================

This web app was built for developers to quickly generate an associated JSON data structure with an `id`, and `start` / `end` / `length` timings in milleseconds for a sound sprite with multiple sounds.  There are solutions such as [audiosprite](https://github.com/tonistiigi/audiosprite) which will concatenate separate sound files into one sound sprite with an associated spritesheet, but this tool is for quick one-offs and/or for sound sprites with extra production processing requiring a more detailed selection of sprites.


# How To Use

## Drag n Drop Your Sound

Drag a sound sprite from your computer to the drop zone area to load your sound file waveform.

## Create a Sprite From Selection

Point and click with your mouse to make a selection on the waveform.  You can click the blue `play / pause` button or use keyboard shortcut `space` to preview your selection.  Once you are happy with the sprite selection, you can click on the green `create` button or use keyboard shortcut `ctrl + enter`.

## Edit Sprite Details

After you create your first sprite, you will see it load into the form below with a number id starting at `0`.  You can edit the `id` in the form below, and change the `start` and `end` times manually with the form, or by using keyboard shortcuts `shift + left/right` to adjust `start` time, and `alt + left/right` to adjust `end` time.

You may also make another selection from the waveform and click `Update Selection` to take the `start` and `end` time from your current selection.

## Create Multiple Sprites

After you have created a few sprites, you can navigate between them by clicking the blue `left` and `right` buttons or by using keyboard shortcut `ctrl + left/right`.  You will see your actively selected sprite is bright with a yellow highlighted background.

## Deleting A Sprite

If you are not satisfied with a sprite, you can delete it by selecting it and then clicking the red `delete` button or by using keyboard shortcut `ctrl + del`.

## Exporting to JSON

When you are happy with your sprites, you can export them to JSON by clickin on the green `Export` button below the form.  Place your cursor in the textarea and select all by pressing `ctrl + a` to select all, then `ctrl + c` to copy.

## Importing from JSON

If you already have a sprite sheet that you would like to edit, you may be able to import it.  If you exported it from `audio-sprite-surfer`, then you will definitely be able to import it.  Otherwise, the import requires the following data structure:

```
[
  {
    "id" : "some-name" // optional
    "start" : 1000, // required -- milleseconds
    "end" : 1500, // required -- milleseconds
    "length" : 500 // ignored -- will be calculated from above
  }
]
```

If there are any JSON errors when you try to import, an error message will be displayed with a link to an external tool to help you quickly resolve your error.

If the JSON is valid, then you will be prompted that you will overwrite your existing data, so please confirm before importing.


## Keyboard Shortcuts

`space` play / stop
`ctrl+left` previous
`ctrl+right` next
`ctrl+enter` create from selection
`ctrl+del` delete selected
`shift+left` decrease start time
`shift+right` increase start time
`alt+left` decrease end time
`alt+right` increase end time

## Unit Tests

To run unit tests, checkout project from github and run `grunt test`.

# TODO

- different export formats for popular sprite players such as SoundManager
- ability to import with end OR length
- cache data in local storage per sound file
