export function slide31observables(httpClient) {

  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  httpClient.get(endpointUrl).subscribe(repos =>
    console.log(repos[0].name)
  );







}
