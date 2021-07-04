const menu = [
    {
    id: 1,
    meal: 'Carpaccio fresco',
    description: 'Entrada Carpaccio de salmón con cítricos',
    price: 65.50,
    image: '/images/Carpaccio-de-salmon.jpg'
},
{
    id: 2,
    meal: 'Risotto de berenjena',
    description: 'Risotto de berenjena y queso de cabra',
    price: 47.00,
    image: '/images/Risotto-berenjena-queso-cabra.jpg'
},
{
    id: 3,
    meal: 'Mousse de arroz',
    description: 'Mousse de arroz con leche y aroma de azahar',
    price: 27.50,
    image: '/images/Mousse-de-arroz-con-leche.jpg'
},
{
    id: 4,
    meal: 'Espárragos blancos',
    description: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
    price: 37.50,
    image: '/images/esparragos.png'
}
]

const controller = {
    listMeals: (req, res, next) => res.render('index', { menu: menu }),
    getMeal: (req, res, next) => {
        const mealChosen = menu.find(menu => menu.id === parseInt(req.params.id))
        res.render('detalleMenu', { mealChosen })
    }
}


module.exports = controller;