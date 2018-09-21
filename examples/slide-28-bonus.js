export async function slide28bonus() {

  const somethingThatImplementsThen = {
    then: (resolve) => setTimeout(() => resolve('resolved then!'), 1000)
  };

  let result = await somethingThatImplementsThen;
  console.log(result);

}
