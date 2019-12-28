async function getParsed(dataServer){
  let data        =  dataServer,
      results     = (data && data.results),
      items       = (results && getItems(results)),
      categories  = (results && getCategories(dataServer)) || [],
      parsedData;
        
  parsedData ={
    author: {
      name: 'Federico',
      lastname: 'Rodriguez'
    },
    categories: categories,
    items: items
  }
        
  return await parsedData
}

function getItems(results){
  let items = [];


  for (var i = 0; i < 4 ; i++) {
    let result      = results.length && results[i],
        id          = (result && result.id) || '',
        title       = (result && result.title) || '',
        price       = (result && result.price) || '',
    //amount. decimals
        picture     = (result && result.thumbnail) || '',
        condition   = (result && result.condition) || '',
        address     = (result && result.address) || '',
        state_name  = (address && address.state_name) || '',
        parsedItem;
    // free_shipping = 
    parsedItem = {id, title, price, picture, condition, state_name};

    items.push(parsedItem)
  }

  return items;
}

function getCategories(dataServer){
  let filters       = (dataServer.filters) || [],
      categories    = (filters && filters.find(filter => filter.id === 'category')) || [],
      categoryArray = (categories && categories.values[0])|| [],
      paths         = (categoryArray && categoryArray.path_from_root) || [],
      pathsString   = [];

  paths.forEach(path => pathsString.push(path.name))

  return pathsString
}

export default getParsed;
