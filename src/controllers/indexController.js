let menu = require('../data/menu.json')

module.exports = {

    home:(req,res) => {
        return res.render('index',{ /* Renderiza la vista index */
            menu    /* Envía desde el backend hacia la vista index, menu desde el controlador */
        })
    },

    menu: (req,res) => {
        return res.render ('detalleMenu')
    },
    detalle: (req,res) => {
        return res.render ('detalleMenu')
    }
}