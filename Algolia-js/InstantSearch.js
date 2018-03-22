const instantsearch=require('./node_modules/instantsearch.js');
var search = instantsearch({
  // Replace with your own values
  appId: 'HFQUKXNAV8',
  apiKey: '657c0615b37ab570558bf5f748896ea2', // search only API key, no ADMIN key
  indexName: 'Tourism',
  urlSync: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

// Add this after the previous JavaScript code
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: document.getElementById('hit-template').innerHTML,
        empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination'
    })
  );

  search.start();