import getParsedDetail from '../../parsers/itemDetail';
import getParsedList from '../../parsers/itemList';
import CONST from '../../constants';

async function handleData(dataServer, pageName){
  let redirected = await (await handleRedirect(dataServer, pageName));

  return redirected
}

async function handleRedirect(data, page){
  switch (page){
    default : 
      return `Data ${CONST.NOT_FOUND}`
    case `${CONST.PAGEVIEW.ITEM_DETAIL}`:
      return await getParsedDetail(data)
    case `${CONST.PAGEVIEW.ITEM_LIST}`:
      return await getParsedList(data)
  }
}

export default handleData;