import { getAllusersCon, getSingleuserCon, insertuserCon, deleteuserCon, updateuserCon } from "../controller/usersCon.js";
import express from "express"
import users from "../model/usersDb.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from "dotenv";
config()
const {sign} = jwt
const {getSingleuserByEmail} = users
const router = express.Router()
router.get("/",getAllusersCon)
router.get("/:user_id",getSingleuserCon)
router.post("/",insertuserCon)
router.delete("/:user_id",deleteuserCon)
router.put("/:user_id",updateuserCon)
//comparing password
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        // Checking for the user
        //const user = await users.findOne({ email }); // :white_check_mark: Correct reference
        const users = await getSingleuserByEmail(email)//:stew:
        if (!users) return res.status(400).json({ error: "Invalid email or password" });
        // console.log(users,password);
        // Validating THE password
        const isMatch = await bcrypt.compare(password, users.password); // :white_check_mark: Use `user.password`
        // console.log(isMatch);
        if (!isMatch) return res.status(400).json({ error: "Invalid email or password" });
        // token being created
        const token = sign(
            { user_id: users._id, email: users.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        // console.log(token);
        res.json({ token, user: { user_id: users._id, email: users.email } });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
export default router