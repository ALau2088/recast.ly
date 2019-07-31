var searchYouTube = (options, callback) => {
  $.get(
    'https://www.googleapis.com/youtube/v3/search',
    {
      q:options.query,
      max:options.max,
      key: options.key,
      part: 'snippet'
      // contentType: 'application/json',
      // crossDomain: true,
      // headers: {
      //   'Access-Control-Allow-Origin': '*'
      // },
    })
    .done( function(data) {
      console.log('hi',data)
      callback(data)
    })

      // error: function (error) {
      //   console.error('chatterbox: Failed to create message', error);
      // }
};



export default searchYouTube;
