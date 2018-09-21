import {authHeaders} from "../src/app/auth-headers";

export function slide9fetch() {


  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  fetch(endpointUrl, authHeaders).then(response =>
    response.json()
  ).then(repos =>
    console.log(repos[0].name)
  );







}
