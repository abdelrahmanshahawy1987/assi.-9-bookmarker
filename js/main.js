
var bookmarkName=document.getElementById('name')
var bookmarkUrl=document.getElementById('url')


var bookmarkList=[]

if (localStorage.getItem('bookmarks')) {
    bookmarkList=JSON.parse(localStorage.getItem('bookmarks'))
display()
}



function addBookmark() {
if (validInput()===true) {
    var bookmark={
        name:bookmarkName.value,
        url:bookmarkUrl.value
    }
bookmarkList.push(bookmark),
display(),
localStorage.setItem('bookmarks',JSON.stringify(bookmarkList))
clearInputs()
}else{
    alert('Please enter a valid Name and URL /// Name 2 letters or more /////// url must match this format https://www.google.com/')
}
}


function display() {
    var cartona=""
    for (let i = 0; i < bookmarkList.length; i++) {
        cartona+=`
                  <tr>
            <td>${i+1}</td>
            <td>${bookmarkList[i].name}</td>
            <td><a href="${bookmarkList[i].url}" target="blank"><button class="btn btn-success"><i class="fa-solid fa-eye pe-2" me-3"></i>Visit</button></a></td>
            <td><button onclick="deleteBookmark(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can me-3"></i>Delete</button></td>
          </tr>
        `
    }
    document.getElementById('table').innerHTML=cartona
}

function deleteBookmark(index) {
    bookmarkList.splice(index,1)
    localStorage.setItem('bookmarks',JSON.stringify(bookmarkList))
    display()
}

function clearInputs() {
    bookmarkName.value="",
    bookmarkUrl.value=""
}

function validInput() {
    var regexName = /[a-zA-Z0-9]{2,}/;
    var regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
    if (regexName.test(bookmarkName.value) === true && regexUrl.test(bookmarkUrl.value) === true ) {
        return true
    }else{
        return false
    }
}



//   i made many trys to use duplicate function with addBookmark function by using IF condition the ...  code is errored

function duplicate(name, url) {
    for (var i = 0; i < bookmarkList.length; i++) {
      if (
        bookmarkList[i].name.toLowerCase() === name.toLowerCase() ||
        bookmarkList[i].url.toLowerCase() === url.toLowerCase()
      ) {
        return true;
      }
    }
    return false;
  }

