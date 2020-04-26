exports.seed = function(knex) {

  return knex('items').insert([
    { name: 'Blender', price: '20.00$', category: 'Appliance', location: 'Nigeria', users_id: 1 },
    { name: 'Shoes', price: '50.00$', category: 'Footwear', location: 'Benin', users_id: 1 },
    { name: 'Jacket', price: '35.00$', category: 'Clothing', location: 'Botswana', users_id: 1 },
    { name: 'Screwdriver', price: '15.00$', category: 'Tools', location: 'Cape Verde', users_id: 1 },
    { name: 'Blender', price: '20.00$', category: 'Appliance', location: 'Mozambique', users_id: 1 }
  ])
};
