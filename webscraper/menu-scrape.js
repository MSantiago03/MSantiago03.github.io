

//test case
function changeColor() {
  document.getElementById("my-div").style.backgroundColor = "#00FF00";
}


const pt= require('puppeteer')
async function getThorne(){
  // test cases

  const thorneDiv = document.getElementById("thorne-menu");
  // thorneDiv.innerHTML = "Hello"
  // thorneDiv.innerHTML += '\tadditional text'
  // thorneDiv.style.backgroundColor = "#00FF00";

  const browser = await pt.launch()
  const page = await browser.newPage()

  //navigating to page
  await page.goto('https://www.bowdoin.edu/dining/menus/index.html')

  //getting thorne menu
  const thorne = await page.$("[id='u49']")
  const thorneText = await (await thorne.getProperty('textContent')).jsonValue()
  thorneDiv.innerHTML = thorneText



}