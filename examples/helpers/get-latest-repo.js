import {authHeaders} from "./auth-headers";

export async function getLatestRepo(user) {

  const isUserDefined = !!user;
  user = user || 'mvollebregt';

  const endpointUrl =
    `https://api.github.com/users/${user}/repos?sort=pushed`;

  if (isUserDefined) {
    console.log(`Fetching repos for ${user}`);
  }

  const response = await fetch(endpointUrl, authHeaders);
  const repos = await response.json();

  if (isUserDefined) {
    console.log(`Done fetching repos for ${user}`);
  }

  return repos[0];
}
