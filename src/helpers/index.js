
function getImageSize(url, idSize){
    let urlArray    = url.split(/(?<=.com)/g),
        path        = urlArray && urlArray[1],
        pathArray   = path && path.split(/(?=.jpg)/g),
        imageId     = pathArray && pathArray[0].replace(/.$/,idSize),
        urlSized    = `${urlArray[0]}${imageId}${pathArray[1]}`;

    return urlSized
}



exports.getImageSize = getImageSize