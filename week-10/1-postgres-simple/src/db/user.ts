import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try{
        const userQuery = `INSERT INTO users (username, password, name)
        VALUES ($1,$2,$3)`
        const values = [username,password,name]
        const userRes = await client.query(userQuery,values)
        console.log("Insertion was successful")
        return userRes
    }catch(err){
        console.log("Insertion failed", err)
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try{
        const getUserQuery = `SELECT * FROM users WHERE id = $1`
        const values = [userId]
        const res = await client.query(getUserQuery,values)
    
        if(res.rows.length>0){
            console.log("User found", res.rows[0])
            return res.rows[0]
        }else{
            console.log("No user found")
            return null
        }
    }catch(err){
        console.log("Error during fetching user", err)
        throw err
}
}
