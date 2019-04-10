# Pig Dice

#### A program that allows users to input a word and determine its raw Scrabble score, assuming no special tiles. 6/1/17

#### By **Tessa Sullivan and Marissa Perry**

## Description

A website created with HTML, CSS, JS two player Pig Dice. Each player takes a turn rolling the dice

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| Player 1 rolls 1 die  | Input Player 1 rolls 1 die  | Output: a number between 1 & 6 |
| Player 1 rolls a 1 and gets a 1 | User input: 1  | Output: Turn ends, any accumulated points are discarded |
| Player 1 rolls a 1 and gets 2 - 6 | User Input: 2 - 6 | Output: temporary points increase by that amount |
| Player 1 rolls a 1 and gets 2 - 6 | User Input: Player 1 goes again | Output: Die is rolled |
| Player 1 rolls a 1 and gets 2 - 6 | User Input: Player 1 chooses to pass | Output: their point score increases by the temporary amount and Player 2 rolls |
| Player reaches 100 points| Input: 100 points | Output: Player wins and game ends |
| | Input:  | Output: |

## Setup/Installation Requirements

1. Clone this repository.
2. Open your browser and navigate to index.html
3. Enjoy!

## Known Bugs
* No known bugs at this time.

## Technologies Used

* HTML
* Javascript
  * jQuery
* CSS
  * Bootstrap

## Support and contact details

_Contact Tessa Sullivan @ tessa.sullivan@gmail.com or Marissa Perry @ ohthatmarissa@gmail.com_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **_{Marissa Perry and Tessa Sullivan}_**
