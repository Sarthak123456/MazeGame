import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.css'],
})
export class MazeComponent implements OnInit {

  public matrix = [] ;
  public obj = [];
  public cols: any ;
  public width: any;
  public height: any;
  public count = 0 ;
  constructor() {
  }

  randomCoord() {
    if (this.obj.length === 0){
    for (let r = 0 ; r < this.height ; r++) {
      let randomI = Math.floor(Math.random() * this.height);
      let randomJ = Math.floor(Math.random() * this.height);
      if(randomI === Math.floor(Number(this.width) / 2) && randomJ === Math.floor(Number(this.height) / 2)){
        continue;
      }
      else{
      this.obj.push({'randomI' :  randomI, 'randomJ' : randomJ});
    }
    }
  }

  }
  render(length , height , updatedI , updatedJ ){
    this.randomCoord();
    this.matrix = [];
    for (let i = 0 ; i < height ; i++ ) {
      this.cols = [];
      for (let j = 0 ; j < length ; j ++) {
          if (i === updatedI && j === updatedJ && this.cols.length < this.width) {
            this.cols.push(
              {'image' :
              'https://vignette.wikia.nocookie.net/supersmashbrosfanon/images/b/bf/8Bit_Mario.png/revision/latest?cb=20160124140114',
              'render' : true,
              'enemy' : false
            }
              );

          } else{
            if(this.cols.length < this.width ){
              this.cols.push({'image' : '' , 'render' : false});
            } else{
              break;
            }
          }

          this.obj.map((coords) => {
            if (i === coords.randomI && j === coords.randomJ ) {
              this.cols.pop();
              this.cols.push(
                {'image' :
                'https://images-na.ssl-images-amazon.com/images/I/41UarY8nb6L._SX425_.jpg',
                'render' : false,
                'enemy' : true
              }
                );


            }
          }
          );
      }
      this.matrix.push(this.cols);
    }
    return this.matrix;

  }
  ngOnInit() {
    this.width = prompt('Please enter the Maze width');
    this.height = prompt('Please enter the Maze height');

    let i = Math.floor(Number(this.width) / 2);
    let j = Math.floor(Number(this.height) / 2);

    this.render(this.width , this.height , i , j);

    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowUp' ) {
        if (i > 0) {
        this.render(this.width , this.height , --i , j);
        this.count++;
        for (let s = 0 ; s < this.obj.length ; s++) {

          if(this.obj[s].randomI === i && this.obj[s].randomJ === j) {
            this.obj.splice(s , 1);
            this.matrix[i][j].enemy = false;
            this.matrix[i][j].render = true;
            this.matrix[i][j].image = 'https://vignette.wikia.nocookie.net/supersmashbrosfanon/images/b/bf/8Bit_Mario.png/revision/latest?cb=20160124140114';
          }

        }
        if(this.obj.length === 0 ){
          alert('GameOver! ' + this.count);
        }
      }
    }
       else if (event.key === 'ArrowDown') {
        if (i < this.height - 1 ) {
        this.render(this.width , this.height , ++i , j);
        this.count++;
        for (let s = 0 ; s < this.obj.length ; s++) {

          if(this.obj[s].randomI === i && this.obj[s].randomJ === j) {
            this.obj.splice(s , 1);
            this.matrix[i][j].enemy = false;
            this.matrix[i][j].render = true;
            this.matrix[i][j].image = 'https://vignette.wikia.nocookie.net/supersmashbrosfanon/images/b/bf/8Bit_Mario.png/revision/latest?cb=20160124140114';
          }

        }
        if(this.obj.length === 0 ){
          alert('GameOver! ' + this.count);
        }
        }
      }
       else if (event.key === 'ArrowLeft') {
        if ( j > 0 ) {
        this.render(this.width , this.height , i , --j);
        this.count++;
        for (let s = 0 ; s < this.obj.length ; s++) {

          if(this.obj[s].randomI === i && this.obj[s].randomJ === j) {
            this.obj.splice(s , 1);
            this.matrix[i][j].enemy = false;
            this.matrix[i][j].render = true;
            this.matrix[i][j].image = 'https://vignette.wikia.nocookie.net/supersmashbrosfanon/images/b/bf/8Bit_Mario.png/revision/latest?cb=20160124140114';
          }

        }
        if(this.obj.length === 0 ){
          alert('GameOver! ' + this.count);
        }
      }
    }
       else if (event.key === 'ArrowRight') {
        if ( j < this.width - 1) {
        this.render(this.width , this.height , i , ++j);
        this.count++;
      }
      for (let s = 0 ; s < this.obj.length ; s++) {

        if(this.obj[s].randomI === i && this.obj[s].randomJ === j) {
            this.obj.splice(s , 1);
          this.matrix[i][j].enemy = false;
          this.matrix[i][j].render = true;
          this.matrix[i][j].image = 'https://vignette.wikia.nocookie.net/supersmashbrosfanon/images/b/bf/8Bit_Mario.png/revision/latest?cb=20160124140114';
        }
        if(this.obj.length === 0 ){
          alert('GameOver! ' + this.count);
        }

      }
      }



  });

}
}
