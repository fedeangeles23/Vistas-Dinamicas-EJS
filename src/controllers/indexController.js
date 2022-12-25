module.exports = {
    home:(req,res) => {
        return res.render('index')
    },
    menu: (req,res) => {
        return res.render ('detalleMenu')
    }
}