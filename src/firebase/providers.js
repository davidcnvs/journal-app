import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            // user data
            displayName, email, photoURL, uid
        }
    } catch (error) {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode, errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password)
        const {uid, photoURL} = resp.user;
        console.log(resp)
        await updateProfile(FirebaseAuth.currentUser, {displayName});
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        return {ok: false, errorMessage: error.message}
    }
}