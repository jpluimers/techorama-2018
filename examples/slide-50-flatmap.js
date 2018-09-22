import {map} from 'rxjs/operators';

export function slide50flatmap(httpClient) {

  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  httpClient.get(endpointUrl).pipe(
    map(repos => repos[0]),
    map(repo => httpClient.get(repo.commits_url.replace('{/sha}', '')))
  ).subscribe(commits =>
    console.log(commits)
  );







}
