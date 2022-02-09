var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
  deliver: function () {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '47999999999',
      address: {
        postalcode: '89074400',
        street: 'Rua Christiano Karsten',
        number: '1000',
        details: 'apto 2',
        district: 'Testo Salto',
        city_state: 'Blumenau/SC'
      },
      cnh: 'cnh-digital.jpg'
    }

    return data
  }
}
