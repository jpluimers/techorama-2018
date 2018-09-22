import {flatMap, mergeMap, switchMap} from 'rxjs/operators';

export function slide52flatmaps(httpClient) {

  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  function getCommits(repos) {
    return httpClient.get(repos[0].commits_url.replace('{/sha}', ''));
  }

  // switchMap
  httpClient.get(endpointUrl).pipe(
    switchMap(getCommits)
  ).subscribe( console.log );

  // flatMap
  httpClient.get(endpointUrl).pipe(
    flatMap(getCommits)
  ).subscribe( console.log );

  // mergeMap
  httpClient.get(endpointUrl).pipe(
    mergeMap(getCommits)
  ).subscribe( console.log );

  // concatMap
  httpClient.get(endpointUrl).pipe(
    mergeMap(getCommits)
  ).subscribe( console.log );

  // exhaustMap
  httpClient.get(endpointUrl).pipe(
    mergeMap(getCommits)
  ).subscribe( console.log );

}
