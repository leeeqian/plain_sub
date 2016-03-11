# PlainSub
Converts subtitles to plain text
* currently only support *.ass file
* all styles tag are trimmed
* \N are converted to newlines, which handles bilingual subtitles
* using regular expression to match dialogues

# Usage
* PlainSub( txt ) => plain txt string

# Play Ground
https://jsfiddle.net/leeeqian/o1zpyL0b/8/

# Example
Split subtitles into lines with checkboxes, collect all selected notes.
https://jsfiddle.net/leeeqian/58up0ert/11/

# Screenshot
![Alt Text](https://raw.githubusercontent.com/leeeqian/plain_sub/master/example.png)
