export const start = async () => {
   return await Promise.resolve('async work')
}

start().then(console.log)