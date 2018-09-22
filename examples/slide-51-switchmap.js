import {map, switchMap} from 'rxjs/operators';

export async function slide51switchmap(httpClient) {

  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  httpClient.get(endpointUrl).pipe(
    map(repos => repos[0]),
    switchMap(repo => httpClient.get(repo.commits_url.replace('{/sha}', '')))
  ).subscribe(commits =>
    console.log(commits)
  );







}
