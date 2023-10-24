

const textContainers = document.getElementsByClassName('textContainer');
const redColorOption = document.getElementsByClassName('redColorOption');
const blueColorOption = document.getElementsByClassName('blueColorOption');
const greenColorOption = document.getElementsByClassName('greenColorOption');
const colorOptionList = document.getElementsByClassName('colorOption');

let selectedTextActive = false;
let parentElement;



for (const textContainer of textContainers) {
  textContainer.addEventListener("mouseup", (event) => {
    selectedText = window.getSelection().toString();
    selectedTextActive = true;

    if(selectedText !== "" || selectedText !== " "){
      const range = window.getSelection().getRangeAt(0);
      parentElement = range.commonAncestorContainer.parentElement;
      // console.log("parent node : "+parentElement);
      // parentElement.classList.add('redColor');
      // console.log("text : "+ window.getSelection());
      // alert("Selected text: " + selectedText);
    };
  });
};

for (const colorOption of colorOptionList) {
  colorOption.addEventListener("click", (event) =>{
    if(selectedTextActive){ 
      if (colorOption.style.backgroundColor == "red"){
        parentElement.style.color = 'red';
      } 
      if (colorOption.style.backgroundColor == "blue"){
        parentElement.style.color = 'blue';
      } 
      if (colorOption.style.backgroundColor == "green"){
        parentElement.style.color = 'green';
      }  
    };
    selectedTextActive = false;
  });
};




document.addEventListener("mouseup", (event) =>{
  const range = window.getSelection().getRangeAt(0);
  const currParentElement = range.commonAncestorContainer.parentElement; 
  if(currParentElement.)
});

// redColorOption[0].addEventListener("click", (event) =>{
//   if(selectedTextActive){
//     parentElement.classList.add('redColor');
//   };
//   selectedTextActive = false;
// });

// blueColorOption[0].addEventListener("click", (event) =>{
//   if(selectedTextActive){
//     parentElement.classList.add('blueColor');
//   };
//   selectedTextActive = false;
// })

// greenColorOption[0].addEventListener("click", (event) =>{
//   if(selectedTextActive){
//     parentElement.classList.add('greenColor');
//   };
//   selectedTextActive = false;
// })



