import {getLatestRepo} from './helpers/get-latest-repo';

export async function slide20pitfalls() {

  const myRepo = await getLatestRepo('mvollebregt');
  const myFriendsRepo = await getLatestRepo('ilionx');
  const myOtherFriendsRepo = await getLatestRepo('qnh');

  if (myRepo.pushed_at > myFriendsRepo.pushed_at && myRepo.pushed_at > myOtherFriendsRepo.pushed_at) {
    console.log('I won!');
  } else if (myFriendsRepo.pushed_at > myOtherFriendsRepo.pushed_at) {
    console.log('My friend won!');
  } else {
    console.log('My other friend won!');
  }

}
