# Game of Life in JS
John Horton Conway's game of life is pseudo-simulation of life. This simple system produces complex behaviour, determining cells as alive or dead based on the 4 rules below.


## Rules
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with fewer than two live neighbors dies, as if caused by under-population.
* Any live cell with more than three live neighbors dies, as if by overcrowding.
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.


The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed — in other words, each generation is a pure function of the preceding one.

The discrete moment at which all the births and deaths actually occur is often called a tick. The rules are applied repeatedly to create further generations (one new generation per tick).
