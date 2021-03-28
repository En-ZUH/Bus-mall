/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
let Names = ['banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'BusMallImages', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can','wine-glass'];

let leftIndex;
let MiddIndex;
let RightIndex;
let views=0;


// eslint-disable-next-line no-unused-vars
function Bus(Name) {
  this.Name = Name;
  this.path = `assets/${Name}.jpg`;
  this.views = 0;
  this.votes = 0;
  Bus.all.push(this);
}
Bus.all=[];


for (let i = 0; i < Names.length; i++) {
  new Bus(Names[i]);

}

let section= document.getElementById('images-section');
let leftPic= document.getElementById('left-image');
let MiddPic= document.getElementById('middle-image');
let RightPic= document.getElementById('right-image');


function randomNumber(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render()
{
  leftIndex= randomNumber(0, Bus.all.length-1);
  // console.log(leftIndex);
  MiddIndex= randomNumber(0, Bus.all.length-1);
  RightIndex= randomNumber(0, Bus.all.length-1);

  /* for (let i = 0; i < Bus.all.length; i++) {
  
    if( leftIndex === MiddIndex || leftIndex === RightIndex)
      leftIndex= randomNumber(0, Bus.all.length-1);
    
  
    else if (MiddIndex === leftIndex || MiddIndex === RightIndex) 
      MiddIndex= randomNumber(0, Bus.all.length-1);
        
    else if (RightIndex === leftIndex || RightIndex === MiddIndex) 
      RightIndex= randomNumber(0, Bus.all.length-1);
  } */
  // left-> midd ->right*/

  //    if( leftIndex !== MiddIndex && MiddIndex !=== RightIndex)

  if(leftIndex!==MiddIndex && MiddIndex!==RightIndex && RightIndex!==leftIndex )
  {
    leftPic.src= Bus.all[leftIndex].path;
    leftPic.alt= Bus.all[leftIndex].Name;
    leftPic.title= Bus.all[leftIndex].Name;
    
    
    console.log(leftIndex);

  

    MiddPic.src= Bus.all[MiddIndex].path;
    MiddPic.alt= Bus.all[MiddIndex].Name;
    MiddPic.title= Bus.all[MiddIndex].Name;
  
    //console.log(MiddIndex);

  
    RightPic.src= Bus.all[RightIndex].path;
    RightPic.alt= Bus.all[RightIndex].Name;
    RightPic.title= Bus.all[RightIndex].Name;
    leftPic=Bus.all[leftIndex];
  //console.log(RightIndex);
  }}

section.addEventListener('click',show);

function show(event)
{ render();
  event.preventDefault();
  let selections=25;

  if(event.target.id === 'left-image' || event.target.id === 'middle-image'|| event.target.id === 'Right-image'){
    for (let i = 0; i < Bus.all.length; i++) { 
      if (Bus.all[i].name === event.target.title)
      {
        Bus.all[i].votes++;
        views++;
         
      }      
    }
  }
}
/*{
      Bus.all[RightIndex].votes++;
      views++;
    }
    else if (event.target.id === 'middle-image')
    {
      Bus.all[MiddIndex].votes++;
      view++;
    }
    else {Bus.all[leftIndex].votes++;
      view++;

    }
  }}*/


render();
section.addEventListener('click',show);

