'use strict';
import algolia from 'algoliasearch';
import async from 'async';


const client = algolia('FIM60MKDNL', '62002d4f3a380e257335f8e130078701');



const search = {
  add: ( items, callback) => {
    const index = client.initIndex('XD');
    index.saveObjects(items, callback);
  }
  }


export default search;