import {map} from 'rxjs/operators';

export async function slide42map(httpClient) {

  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  httpClient.get(endpointUrl).pipe(
    map(repos => repos[0].name)
  ).subscribe(name =>
    console.log(name)
  );







}
