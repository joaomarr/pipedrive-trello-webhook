export default (deal, products) => {
    const formattedDeal = { name: '', desc: '' };

    const contractId = deal['9535d1d0ccb578cac4bd6b8d13250026ae192d49']
    const serviceDesc = deal['2026a2121104c094798cc5c683219704cc27f05f']

    const person = deal['person_id']
    const personName = person['name']
    const personEmail = person['email'][0]['value']
    const personPhone = person['phone'][0]['value']

    const description = `-Contrato: ${contractId ? contractId : ''} -Cliente: ${personName ? personName : ''} -Email: ${personEmail ? personEmail : ''} -Telefone: ${personPhone ? personPhone : ''} -Local de instalação: _**SERVIÇOS VENDIDOS:**_ ${serviceDesc ? serviceDesc : ''}  _**INSTALAÇÃO (EQUIPAMENTO/SERVIÇOS):**_ ${products.map((product) => { return `- ${product.description ? product.description : 'Não definido'}` })}`

    formattedDeal.name = deal.title ? deal.title : ''
    formattedDeal.desc = description 

    return formattedDeal
}