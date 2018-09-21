import {authHeaders} from "../src/app/auth-headers";

export function slide8fetch() {


  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  fetch(endpointUrl, authHeaders).then(response =>
    console.log(response.json())
  )






}
