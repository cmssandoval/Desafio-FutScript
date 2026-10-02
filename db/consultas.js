const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'futscript',
    allowExitOnIdle: true
})

const getTeams = async () => {
    //...
}

const getPlayers = async (teamID) => {
    //...
}

const addTeam = async (equipo) => {
    //...
}

const addPlayer = async ({ jugador, teamID }) => {
    //...
}

const logUser = async ({ username, password }) => {
    try {
        const query = 'SELECT username FROM usuarios WHERE username = $1 AND password = $2';
        const values = [username, password];
        const response = await pool.query(query,values);
        return response.rows[0];
    } catch (error) {
        return error;
    }
}

module.exports = { getTeams, addTeam, getPlayers, addPlayer, logUser }