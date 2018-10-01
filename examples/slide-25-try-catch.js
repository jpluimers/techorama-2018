export async function slide25trycatch() {


  async function throwing() {
    throw 'This is an error!';
  }

  try {
    await throwing();
  } catch(error) {
    console.log(error);
  }


}
