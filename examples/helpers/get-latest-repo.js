import {authHeaders} from "./auth-headers";

export async function getLatestRepo(user) {

  const endpointUrl =
    `https://api.github.com/users/${user}/repos?sort=pushed`;

  console.log(`Fetching repos for ${user}`);

  const response = await fetch(endpointUrl, authHeaders);
  const repos = await response.json();

  console.log(`Done fetching repos for ${user}`);

  return repos[0];
}
