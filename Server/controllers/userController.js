import UserInfo from "../model/user"
import bcrypt from "bcrypt";
import TokenAuth from "../helpers/tokenAuth";

class UserController {

    static SignupUser = async (req, res) => {

        const hashPassword = bcrypt.hashSync(req.body.password, 10)
        req.body.password = hashPassword

        const user = await UserInfo.create(req.body)
        if (!user) {
            return (res.status(400)).json({
                status: 400,
                message: "failed to register"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "user registered successfully",
            data: user
        })
    }

    static async userLogin(req, res,) {
        const user = await UserInfo.findOne({ email: req.body.email })

        if (!user) {
            return res.status(404).json({ error: "user not found! first sign up" })
        }


        if (bcrypt.compareSync(req.body.password, user.password)) {
            user.password = null;
            const token = TokenAuth.tokenGenerator({ user: user });

            return res.status(200).json({ message: "successfully logged in", token: token, data: user });
        }

        return res.status(400).json({ error: "wrong password" });

    }

}

export default UserController;