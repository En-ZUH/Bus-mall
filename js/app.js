/* eslint-disable no-var */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

let Names = ['banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'BusMallImages', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can','wine-glass'];

let leftIndex;
let MiddIndex;
let RightIndex;
let vote=[];
let view=[];



// eslint-disable-next-line no-unused-vars
function Bus(Name) {
  this.Name = Name;
  this.path = `assets/${Name }.jpg`;
  this.views = 0;
  this.votes = 0;
  Bus.all.push(this);
  //settingItem();  ///wrong invoke
}
Bus.all=[];

//localStorage______________________________________________________

function settingItem()
{let data= JSON.stringify(Bus.all); // stringify method from obj to string
  localStorage.setItem('Bus', data);
  //console.log(data);
  
}

function gettingItems()
{
  let asString= localStorage.getItem('Bus');
  console.log('in string format', asString);

  let asObj= JSON.parse(asString); // parse method from string to obj
  console.log('im obj format', asObj);

  if (asObj!==null) { //even reset , still persistance
    Bus.all= asObj;
    //render();
  }
  
}


gettingItems();
//_____________________________________________________________________

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


function render() // to creat random images
{ 
  leftIndex= randomNumber(0, Bus.all.length-1);
  // console.log(leftIndex);
  MiddIndex= randomNumber(0, Bus.all.length-1);
  RightIndex= randomNumber(0, Bus.all.length-1);

 
  if(leftIndex!==MiddIndex && MiddIndex!==RightIndex && RightIndex!==leftIndex )
  { 
    leftPic.src= Bus.all[leftIndex].path;
    leftPic.alt= Bus.all[leftIndex].Name;
    leftPic.title= Bus.all[leftIndex].Name;
    Bus.all[leftIndex].views++; //view#1
    
    
    //let a= (Bus.all[leftIndex].views);

  

    MiddPic.src= Bus.all[MiddIndex].path;
    MiddPic.alt= Bus.all[MiddIndex].Name;
    MiddPic.title= Bus.all[MiddIndex].Name;
    Bus.all[MiddIndex].views++;
    
    //let b= (Bus.all[MiddIndex].views);

    //console.log(Bus.all[MiddIndex]);

  
    RightPic.src= Bus.all[RightIndex].path;
    RightPic.alt= Bus.all[RightIndex].Name;
    RightPic.title= Bus.all[RightIndex].Name;
    Bus.all[RightIndex].views++;

    /*let c= (Bus.all[RightIndex].views);
    let o=a+b+c;
    console.log(o); the first time to insert 3 rand. img*/

    //console.log(views);
    
  }} 
   




// click______________________________________________________

section.addEventListener('click',show);

let selections=5;
let firstclick=1;
let numVotes=0;

function show(event)
{  
  //render();
  //event.preventDefault();
  
  if (event.target.id !== 'images-section')
  { 
    if (firstclick < selections)
    { firstclick++;
      

      if(event.target.id === 'left-image' || event.target.id === 'middle-image'|| event.target.id === 'Right-image')
      {
        for (let i = 0; i < Bus.all.length; i++) 
        { 
          if (Bus.all[i].Name === event.target.title)
          {
             Bus.all[i].votes++;

            //console.log(Bus.all[i].vote);
            //views++;
          }      

        } //render(); 
        
      } render();
      
    }
    //_____________________________________________
    else {
      if(event.target.id === 'left-image' || event.target.id === 'middle-image'|| event.target.id === 'Right-image')
      {
        for (let i = 0; i < Bus.all.length; i++) 
        { 
          if (Bus.all[i].Name === event.target.title)
          {
             Bus.all[i].votes++;}}}

        //________________________________________________________________________resultList    
          
        

      let ulEl= document.getElementById('resultList');
      //let liEl= document.createElement('li');
      //ulEl.appendChild(liEl);
      

      for (let i=0; i<Bus.all.length; i++) 
      {  
        vote.push(Bus.all[i].votes);
        view.push(Bus.all[i].views);
        let liEl= document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent= `${Bus.all[i].Name} has ${Bus.all[i].votes} votes and ${Bus.all[i].views} views`;
        
        //console.log(Bus.all[i].votes , Bus.all[i].views);
      } 


      section.removeEventListener('click', show);
      settingItem(); // to get the data
      

      alert(`you have done ${Bus.all.vote} selections`);
      //console.log(Bus.all[i].votes , Bus.all[i].views);

      //alert(`you have done ${vote} selections`);
      //console.log(`${vote} votes , ${view} views`);
      chartRender();
      
    } 
  }
}  
 
//Uniqly images_____________________________________________________________

function notMatch(event) {
  if( firstclick <= selections) //still available to click
  {
    if( event.target.id === 'left-image' || event.target.id === 'middle-image' ||event.target.id === 'right-image') //newClick ?= previous one
       //let newPic =new Buss.all[i-1] || newPic =new Buss.all[i+1];
    // newPic= event.target.getAttribute('src'); //generate new
    //event.target.id= event.target.getAttribute('src'); //generate new
    render();

  }
  else section.removeEventListener('click', notMatch);

}




section.addEventListener('click', notMatch);

render(); //first views:3


//Creat Chart_____________________________________________________

function chartRender(){
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, { //Object
    
    type: 'bar',

    // The data for our dataset
    data: {
        labels: Names, //horizontally
        datasets: [{
            label: 'Buss-Mall',
            backgroundColor: '#c64756',
            borderColor: 'rgb(255, 99, 132)',
            data: vote, //column
        },
        //we creat anoother obj inside database
        {          
          label: 'Buss-Mall',
          backgroundColor: 'black',
          borderColor: 'rgb(255, 99, 132)',
          data: view , // other column
      
        } ]
    },

    
    options: {}
});
}

gettingItems();

