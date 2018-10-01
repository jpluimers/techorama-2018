export function slide11beforepromises() {


  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  doGet(endpointUrl, response => {
    parseJson(response, function (parsed) {
      console.log(parsed[0].name);
    });
  });


  function doGet(url, callback) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        callback(this.responseText);
      }
    };
    xmlhttp.open("GET", url);
    xmlhttp.send();
  }

// we pretend that calling JSON.parse is asynchronous, just for the sake of the example
  function parseJson(text, callback) {
    callback(JSON.parse(text));
  }

}
