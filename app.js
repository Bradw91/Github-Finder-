//init github class
const github = new Github();

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e) => {
  //get input text
  const userText = e.target.value;
  if (userText != ''){
    //make http call
    github.getUser(userText)
    .then(data => {
      console.log(data);
    })
  }
});