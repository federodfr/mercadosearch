async function getParsedDetail(dataServer){
  let data          =  dataServer,
    //author
      id            = (data && data.id) || '',
      title         = (data && data.title) || '',
      price         = (data && data.price) || '',
      //object price
      picture       = (data && data.pictures && data.pictures[0]) || [],
      condition     = (data && data.condition) || '',
      // freeShipping = results && results.freeShiping
      sold_quantity = (data && data.sold_quantity) || '',
      description   = (data && data.plain_text) || '',
      parsedData    = {
        item: { id, title, price, picture, condition, sold_quantity, description}
      };

  return await parsedData
}

export default getParsedDetail;