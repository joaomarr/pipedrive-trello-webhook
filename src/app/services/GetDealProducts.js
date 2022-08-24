import { serverUnavailable } from '@hapi/boom';
import axios from 'axios';

import { pipedriveApiUrl } from '../../config/pipedrive';

class GetDealProducts {
  async run({ id }) {
    try {
      let items = [];
      const { data: products } = await axios.get(
        `${pipedriveApiUrl}/deals/${id}/products`,
        {
          params: { api_token: process.env.PIPEDRIVE_API_TOKEN },
        }
      );
      
      try {
        products.data.forEach(({ name, quantity, item_price }) => {
          items.push({
            quantity,
            description: name,
            unitary_value: item_price,
          });
        });
      } catch {
        items[0] = 'None product was found'
      }

      return items;
      
    } catch ({ response }) {
      throw serverUnavailable(
        "An error occurred while trying to retrieve the deal's products from Pipedrive",
        {
          code: 533,
          details: {
            response
          },
        }
      );
    }
  }
}

export default GetDealProducts;
