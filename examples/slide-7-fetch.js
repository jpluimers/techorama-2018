import {authHeaders} from "./helpers/auth-headers";

export function slide7fetch() {


  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  fetch(endpointUrl, authHeaders);






}
