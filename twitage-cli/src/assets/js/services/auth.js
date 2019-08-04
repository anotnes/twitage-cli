import store from '@/store'
import axios from 'axios'
import firebase from 'firebase'

export default {
    signUp (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            return ''
        }).catch(err => {
            return err.message
        })
    },
    signIn (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            localStorage.setItem('jwt', res.user.qa)
            this.$router.push('/')
        }, err => {
            return err.message
        });
    },
    signOut () {
        firebase.auth().signOut().then(() => {
          localStorage.removeItem('jwt')
        });
    }
}