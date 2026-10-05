export const games = [
{id:'dot-mosaic',title:'Animal & Mosaic Jigsaw',category:'Puzzle',description:'Choose geometric animal artwork or a mosaic and assemble 12–96 interlocking or square pieces. Drag, drop and snap into place.'},
{id:'sudoku',title:'Sudoku',category:'Numbers',description:'Fill each row, column and box. Choose a 4 × 4, 6 × 6 or classic 9 × 9 board.'},
{id:'letter-rush',title:'Letter Rush',category:'Word',description:'Find the word with its first letter revealed before time runs out.'},
{id:'block-garden',title:'Block Garden',category:'Puzzle',description:'Fit shapes into a board and clear full lines.'},
{id:'double-trail',title:'Double Trail',category:'Numbers',description:'Slide and merge matching numbers to reach the target tile.'},
{id:'pattern-pairs',title:'Pattern Pairs',category:'Puzzle',description:'Turn over geometric cards and remember matching pairs.'},
{id:'four-in-a-row',title:'Four in a Row',category:'Strategy',description:'Connect four pieces in a row before your opponent.',difficulty:'Easy · Medium · Hard'},
{id:'tic-tac-toe',title:'Tic-Tac-Toe',category:'Strategy',description:'Classic three-in-a-row against an adaptive computer opponent.',difficulty:'Easy · Medium · Hard'}
]
export const gameCategories = ['All','Words','Puzzle','Numbers','Strategy']
export const gameById = id => games.find(game => game.id === id)
export const filterGames = category => games.filter(game => category === 'All' || game.category === (category === 'Words' ? 'Word' : category))

