import {getLatestRepo} from "./helpers/get-latest-repo";
import * as Observable from "rxjs";

export async function slide99together(httpClient) {

  const endpointUrl =
    'https://api.github.com/users/mvollebregt/repos?sort=pushed';

  Observable.from(getLatestRepo())
    .subscribe(repo => console.log(repo.name));

  httpClient.get(endpointUrl).toPromise()
    .then(repo => console.log(repo[0].name));





}
