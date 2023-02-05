import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { UserModel } from "../../daos/configDB/MongoDB/model/user.models.js";
import { checkLogin } from "./checkLogin.js";
import logger from "../../logs/logger.js";


const passportAuth = passport

//serializar y deserializar al usuario
passportAuth.serializeUser((user,done)=>{
    return done(null,user.id)
}); //req.session.passport.user={idUsuario}


passportAuth.deserializeUser((id,done)=>{
    UserModel.findById(id,(error,userFound)=>{
        return done(error, userFound)
    })
});//gracias a esta serializacion se produce lo siguiente req.user = userFound.

const createHash = (password)=>{
    const hash = bcrypt.hashSync(password,bcrypt.genSaltSync(10));
    return hash;
};

/* -------------- crear una funcion para validar contraseña ------------- */
function isValidPassword(user, password) {
    return bcrypt.compareSync(password, user.password);
}

//estrategia de registro utilizando passport local.
passportAuth.use("signupStrategy", new LocalStrategy(
    {
        passReqToCallback:true,
        usernameField: "email"
    },
    (req, username,password,done)=>{
        // logger.info(req.body,username,password)
        //logica para registrar al usuario
        //verificar si el usuario existe en db
        UserModel.findOne({email:username},(error,userFound)=>{
            if(error) return done(error,null,{message:`Hubo un error ${error}`});
            if(userFound) return done(null,null,{message:"El usuario ya existe"});
            //guardamos el usuario en la db
            const newUser={
                email:req.body.email,
                password:createHash(password),
                nombre:req.body.nombre,
                direccion:req.body.direccion,
                edad:req.body.edad,
                telefono:req.body.telefono,
                fotoUrl:req.body.fotoUrl
            };
            // console.log(newUser
            UserModel.create(newUser,(error,userCreated)=>{
                if(error) return done(error, null, {message:`hubo un error al registrar el usuario ${error}`})
                return done(null,userCreated, {message:"Usuario registrado exitosamente"});
            })
        })
    }
));

passportAuth.use("loginStrategy", new LocalStrategy({
    // successRedirect: "/home",
    // failureRedirect: "/login",
    usernameField: "email"
    },
    (email,password,done)=>{
        //logica para registrar al usuario
        //verificar si el usuario exitse en db
        UserModel.findOne({email},(error,userFound)=>{
            if(error) return done(error,null,{message:"Hubo un error"});
            if(!userFound) return done(null,null,{message:"No existe el usuario"});
            //guardamos el usuario en la db
            if(!isValidPassword(userFound,password)) return done(null, null,{message:"Contraseña incorrecta"});
            return done(null,userFound); 
        })
    }
));


export default passportAuth