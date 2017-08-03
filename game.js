'use strict';

const gameOfLife = {

  width: 12,
  height: 12, // width and height dimensions of the board
  stepInterval: null, // should be used to hold reference to an interval that is "playing" the game

  //Game Board
  createAndShowBoard: function () {

    // create <table> element
    var goltable = document.createElement("tbody");

    // build Table HTML
    var tablehtml = '';
    for (var h=0; h<this.height; h++) {
      tablehtml += "<tr id='row+" + h + "'>";
      for (var w=0; w<this.width; w++) {
        tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
      }
      tablehtml += "</tr>";
    }
    goltable.innerHTML = tablehtml;

    // add table to the #board element
    var board = document.getElementById('board');
    board.appendChild(goltable);

    // once html elements are added to the page, attach events to them
    this.setupBoardEvents();
  },

  //Utility Functions

  //Visit each cell on the board via the "iteratorFunc" function, passing the cell and the cell's x & y coordinates. For example: iteratorFunc(cell, x, y)
  forEachCell: function (iteratorFunc) {
    Array.from(document.getElementsByTagName('td')).forEach(cell => {
      const coords = this.getCoordsOfCell(cell)
      iteratorFunc(cell, coords[0], coords[1])
    })

  },

  getCoordsOfCell: function(cell) {
    const idSplit = cell.id.split('-') //['0', '0'], ["1", "0"]
    return idSplit.map(str => +str) //must coerce string to a number because of lexical scoping. inner function contains scope of parent function even if parent function returned
  },

  getCellStatus: function(cell){
    return cell.getAttribute('data-status')
  },

  setCellStatus: function(cell, status) {
    cell.className = status;
    cell.setAttribute('data-status', status)
  },

  setupBoardEvents: function() {
    // each board cell has an CSS id in the format of: "x-y"
    // where x is the x-coordinate and y the y-coordinate
    // use this fact to loop through all the ids and assign
    // them "click" events that allow a user to click on
    // cells to setup the initial state of the game
    // before clicking "Step" or "Auto-Play"

    // clicking on a cell should toggle the cell between "alive" & "dead"
    // for ex: an "alive" cell be colored "blue", a dead cell could stay white

    // EXAMPLE FOR ONE CELL
    // Here is how we would catch a click event on just the 0-0 cell
    // You need to add the click event on EVERY cell on the board

    let gameOfLifeObj = this;

    let onCellClick = function (e) {

      // QUESTION TO ASK YOURSELF: What is "this" equal to here?

      // how to set the style of the cell when it's clicked
      if (this.dataset.status == 'dead') {
        this.className = 'alive';
        this.dataset.status = 'alive';
      } else {
        this.className = 'dead';
        this.dataset.status = 'dead';
      }

    };

    // var cell00 = document.getElementById('0-0');
    // cell00.addEventListener('click', onCellClick);

    this.forEachCell(function(cell) {
      cell.onclick = onCellClick;
    })

    document.getElementById('step_btn').addEventListener("click", function() {
      alert("test step")
    })

    document.getElementById('play_btn').addEventListener("click", function() {
      alert("test play")
    })

    document.getElementById('reset_btn').addEventListener("click", function(e) {
      gameOfLifeObj.resetRandom();
    })

    document.getElementById('clear_btn').addEventListener("click", function(e) {
      gameOfLifeObj.clearBoard();
    })
  },

  step: function () {
    // Here is where you want to loop through all the cells
    // on the board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the next
    // evolution of the game.
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells based on their alive neighbors
  },

  clearBoard: function() {
    this.forEachCell(function(cell) {
      this.setCellStatus(cell, 'dead');
    }.bind(this));
  },

  resetRandom: function() {
    //randomly reset alive and dead cells
    this.forEachCell(function(cell) {
      Math.random() > .5 ?
        this.setCellStatus(cell, 'alive')
      :
        this.setCellStatus(cell, 'dead')
    }.bind(this))
  },

  enableAutoPlay: function () {
    // Start Auto-Play by running the 'step' function
    // automatically repeatedly every fixed time interval
  }

};

gameOfLife.createAndShowBoard();
