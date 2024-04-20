import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try{
    const insertQuery = `INSERT INTO todos (userId, title, description)
    VALUES ($1, $2, $3)`
    const values = [userId,title,description]
    const res = await client.query(insertQuery,values)
    console.log("Insertion was successful", res)
    return res
    }catch(err){
        console.log("Error during creating a Todo",err)
        throw err
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        const updateQuery = `UPDATE todos SET done = true WHERE id = $1`
        const values = [todoId]
        const res = await client.query(updateQuery,values)
        console.log("Todo updated", res)
        return res
    }catch(err) {
        console.log("Error during updating todo",err)
        throw err
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try{
        const getTodoQuery =   `SELECT * FROM todos WHERE id = $1`
        const values = [userId]
        const res = await client.query(getTodoQuery,values)

        if(res.rows.length >0){
            console.log("Todo found", res.rows[0])
            return res.rows[0]
        }else{
            console.log("No todos found")
            throw null
        }
    }catch(err){
        console.log("error during getting todos",err)
        throw err
    }
}