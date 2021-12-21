const getYoutubeID = (text) => {
    let youtubeID ="";
    let startOfQueryofVidID = text.indexOf("?v=") + 3; //add three for the offset
    let lastCharOfVidID = text.indexOf("&");

    youtubeID = lastCharOfVidID !== -1 ? text.substring(startOfQueryofVidID, lastCharOfVidID ) :  text.substring(startOfQueryofVidID);
    
    return youtubeID;
}


module.exports = getYoutubeID;