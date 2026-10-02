const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'futscript',
    allowExitOnIdle: true
})

const getTeams = async () => {
    try {
        const query = 'SELECT * FROM equipos';
        const response = await pool.query(query);
        return response.rows;
    } catch (error) {
        return error;
    }
}

const getPlayers = async (teamID) => {
try {
    const query = `
        SELECT jugadores.name, posiciones.name AS posicion
        FROM jugadores
        INNER JOIN posiciones
        ON jugadores.position = posiciones.id
        INNER JOIN equipos
        ON jugadores.id_equipos = equipos.id 
    `;
    const result = await pool.query(query);
    return result.rows;
} catch (error) {
    return error;
}}

const addTeam = async (equipo) => {
    //...
}

const addPlayer = async ({ jugador, teamID }) => {
    const query = 'INSERT INTO jugadores values (DEFAULT, $1, $2, $3)';
    const values = [teamID, jugador.name, jugador.posicion];
    const result = await pool.query( query, values );
    return result.rows;
}

const logUser = async ({ username, password }) => {
    try {
        const query = 'SELECT username FROM usuarios WHERE username = $1 AND password = $2';
        const values = [username, password];
        const result = await pool.query(query,values);
        if ( result.rowCount === 0 ) return { message: 'Invalid credentials' };
        return result.rows[0];
    } catch (error) {
        return error;
    }
}

module.exports = { getTeams, addTeam, getPlayers, addPlayer, logUser }