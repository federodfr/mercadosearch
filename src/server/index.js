
 async function handleServer(serverURL){
  try{
    var response  = await (await fetch(serverURL)),
        data      = await response.json();
        
        return data
  }
  catch(err){
    console.error(err);
  }
}

export default handleServer;