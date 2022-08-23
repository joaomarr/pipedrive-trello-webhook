import GetDeal from '../services/GetDeal';

class PipedriveEventController {
  async store(req, res) {
    const { event, current } = req.body;

    switch (event) {
      case 'updated.deal': {
        if (current.status === 'won') {
          const getDeal = new GetDeal();

          const deal = await updateDealFieldsName.run({
            data: await getDeal.run({ id: current.id }),
          });
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
