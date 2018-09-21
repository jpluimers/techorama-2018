import {authHeaders} from "./helpers/auth-headers";

export function slide10fetch() {


  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  fetch(endpointUrl, authHeaders)
    response.json()

    console.log(repos[0].name)








}
