async function getParsedDetail(dataServer){
  let data          =  dataServer,
    //author
      id            = (data && data.id) || '',
      title         = (data && data.title) || '',
      price         = (data && data.price) || '',
      currency      = (data && data.currency_id) || '',
      picture       = (data && data.pictures && data.pictures[0]) || [],
      condition     = (data && data.condition) || '',
      shippings     = (data && data.shippings) || {},
      freeShipping  = (shippings && shippings.free_shipping) || false,
      sold_quantity = (data && data.sold_quantity) || '',
      description   = (data && data.plain_text) || '',
      parsedData    = {
        author: {
          name: 'Federico',
          lastname: 'Rodriguez'
        },
        item: {
          id,
          title,
          price: {
            currency: currency,
            amount: price,
            decimals: '00',
          },
          picture,
          condition,
          sold_quantity,
          freeShipping,
          description}
      };

  return await parsedData
}

export default getParsedDetail;