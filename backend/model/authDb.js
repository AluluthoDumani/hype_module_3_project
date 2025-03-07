import bcrypt from`bcryptjs`
import {pool} from '../config/config.js' 

// Register a new user
export const registerUser = async (email, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (email, password) VALUES (?, ?)";
        await pool.query(query, [ email, hashedPassword]);
        return { success: true, message: "User registered successfully" };
    } catch (error) {
        return { success: false, error: "Database error" };
    }
};


//loginUser function
export const loginUser = async (email, password) => {
    try {
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) return { success: false, error: "User not found" };

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return { success: false, error: "Invalid password" };

        // Generate JWT token
        const token = jwt.sign({ id: user.user_id }, 'your_jwt_secret', { expiresIn: '1h' });
        return { success: true, token, user: { id: user.user_id, email: user.email } };
    } catch (error) {
        return { success: false, error: "Database error" };
    }
};


