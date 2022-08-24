import { serverUnavailable } from '@hapi/boom';
import axios from 'axios';

class GetDealProducts {
  async run({name, desc}) {
    try {
        const { data: deal } = await axios.post(`
        https://api.trello.com/1/cards?idList=${process.env.TRELLO_LIST_ID}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}
        `, {
            name: name,
            desc: desc,
        });
  
        return deal;
      } catch ({ response: { status, statusText } }) {
        throw serverUnavailable(
          'An error occurred while trying to post a card to trello',
          {
            code: 531,
            details: {
              status,
              statusText,
            },
          }
        );
      }
  }
}

export default GetDealProducts;
