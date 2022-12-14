import GetDeal from '../services/GetDeal';
import GetDealProducts from '../services/GetDealProducts';
import PostTrelloCard from '../services/PostTrelloCard';
import assertInstallationDeal from '../helpers/assertInstallationDeal'
import formatDeal from '../helpers/formatDeal'

class PipedriveEventController {
  async store(req, res) {
    const { event, current } = req.body;

    switch (event) {
      case 'updated.deal': {
        if (current.status === 'won') {
          const getDeal = new GetDeal();

          const deal = await getDeal.run({
            id: current.id
          });

          if (assertInstallationDeal(deal) === true) {
            const getDealProducts = new GetDealProducts();
            const products = await getDealProducts.run({ id: current.id });

            const formattedDeal = formatDeal(deal, products)

            const postTrelloCard = new PostTrelloCard();
            const trelloCard = await postTrelloCard.run(formattedDeal);

            return res.json({
              trelloCard
            })
          }
        }

        break;
      }
    }

    return res.json({
      status: 'success',
    });
  }
}

export default PipedriveEventController;
