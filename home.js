  
const note_url = "http://127.0.0.1:5000/note/";
const my_courses_url = "file:///D:/politech/HASKO/index.html";
const info_url = "file:///D:/politech/HASKO/index.html";

function sendRequest(method, request_url, body = null, header) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, request_url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-type", "application/json");
    if (localStorage.getItem("token")) {
      xhr.setRequestHeader(
        "Authorization",
        "Token " + localStorage.getItem("token")
      );
    }
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => reject(xhr.response);
    xhr.send(JSON.stringify(body));
  });
}
sendRequest("GET", note_url+"1")
  .then((data) => console.log(data)
    
        (document.getElementById("1").innerHTML +=

          data.filling 

    
  )

)
sendRequest("GET", note_url+"1")
  .then((data) => console.log(data)
    
        (document.getElementById("2").innerHTML +=

          data.filling 

    
  )

)
sendRequest("GET", note_url+"1")
  .then((data) => console.log(data)
    
        (document.getElementById("3").innerHTML +=

          data.filling 

    
  )

)
sendRequest("GET", note_url+"1")
  .then((data) => console.log(data)
    
        (document.getElementById("4").innerHTML +=

          data.filling 

    
  )

)
sendRequest("GET", note_url+"1")
  .then((data) => console.log(data)
    
        (document.getElementById("5").innerHTML +=

          data.filling 

    
  )

)
sendRequest("GET", note_url+"1")
  .then((data) => console.log(data)
    
        (document.getElementById("6").innerHTML +=

          data.filling 

    
  )

)