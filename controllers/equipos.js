const { getTeams, addTeam } = require('../db/consultas')

const obtenerEquipos = async (req, res) => {
    const equipos = await getTeams()
    return res.status(200).json(equipos);
}

const agregarEquipo = async (req, res) => {
    const equipo = req.body
    await addTeam(equipo)
    res.send({ message: "Equipo agregado con éxito" })
}

module.exports = { obtenerEquipos, agregarEquipo }