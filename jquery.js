console.log(`in scrimpt.js`);

$(document).ready(onReady);

function onReady() {
  console.log(`so ready!`);

  let titleHeader = $(`h1`);
  console.log(`titleHeader`, titleHeader);
  //console.log('titleHeader', <h1>..</h1>)
  // somwhere within jquery, "$" is the name of a function

  let allListItems = $(`li`);
  console.log(`li elments`, allListItems);

  let justThatOneListItem = $(`#mrs-li-element`).css(`font-weight`, `bold`); //Using # to access ID in html
  // ^ also you can chain that .css onto a prvious object
  // this id is maniuplated in jquery with that .text function
  justThatOneListItem.text(`DOM Manipulation`);

  $(`.First-and-last`).css(`color`, `blue`);
  $(`.every-other`).css(`background-color`, `red`);
  $(`.another-one`).css(`transform`, `rotate(-2deg)`);

  $(`ul`).append(`<li>forms</li>`);
  $(`#topics-list`).append(`
    <li>
        forms
        <button>YEAH</button>
    </li>
  `);
  $(`#the-button`).on(`click`, whenIClickTheButton);
  //                            ^ don't need to () - because that resolves to return value of the function and will be UNDEFINED
  // using . you're able to use the class system and you can access css and change colors like this
}
function whenIClickTheButton() {
  console.log(`someone clicked me!`);
  $(`li`).last().remove();
  $(`h1`).text();

  let titleText = $(`h1`).text();
  console.log(`title text is: `, titleText);

  let louderTitleText = titleText.toUpperCase();
  $(`h1`).text(louderTitleText);
}

// you can reference things in the html AND this jquery

//<button class="YEAH-BUTTON">YEAH</button>
//^ if I wanted to change the button on line 29 within the java, i could do that
/*

*/
