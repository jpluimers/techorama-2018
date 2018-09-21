import {authHeaders} from "./helpers/auth-headers";

export function slide14fetch() {


  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  async function getLatestRepo() {
    const response = await fetch(endpointUrl, authHeaders)
    const repos = await response.json()

    return repos[0].name;
  }


  getLatestRepo().then(console.log);





}
