
exports.resolveAfterNSeconds = async function(N)
{
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, N*1000);
  });
}
