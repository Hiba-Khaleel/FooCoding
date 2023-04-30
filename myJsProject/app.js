//------------navbar-------------//

const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); 
    const section = document.querySelector(link.hash);
    section.scrollIntoView({ behavior: 'smooth',block: 'start' });
  });
});

//--------- Get and post data from API-----------//


const gitDiv = document.getElementsByClassName('project-git')[0];
const GitHubBtn = document.getElementsByClassName('show')[0];

let div = null;
let shown = false;

GitHubBtn.addEventListener('click', getDataFromGitHub);

function getDataFromGitHub() {
  if (shown) {
    gitDiv.removeChild(div);
    GitHubBtn.innerText = "Show";
    shown = false;
    div = null;
  } else {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://api.github.com/repos/Hiba-Khaleel/FooCoding/contents");
    myRequest.send();
    myRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let jsData = JSON.parse(this.responseText);
        div = document.createElement("div");
        div.className = "gitHubContainer";
        for (let i = 0; i < jsData.length; i++) {
          if (jsData[i].type === "dir") { 
            let folderName = document.createElement("h4");
            folderName.innerText = jsData[i].name;
            let folderUrl = document.createElement("a");
            folderName.className = 'gitName';
            folderUrl.setAttribute("href", "https://github.com/Hiba-Khaleel/FooCoding/tree/main/" + jsData[i].name);
            folderUrl.innerText = "Source code";
            folderUrl.className = 'gitUrl';
            div.appendChild(folderName);
            div.appendChild(folderUrl);
            gitDiv.appendChild(div);
          }
        }
        GitHubBtn.innerText = "Hide";
        shown = true;
      }
    };
  }
}

/*-----Accepting Admin user------*/

const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const adminMessage = document.querySelector('#admin-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (username.value === 'Hiba' && password.value === '1234567890') {
    console.log( 'Login successful!');
    adminMessage.classList.add('success');
    adminMessage.classList.remove('error');
  } else {
    adminMessage.innerText = 'Login failed. Please try again.';
    adminMessage.classList.add('error');
    adminMessage.classList.remove('success');
  }
});