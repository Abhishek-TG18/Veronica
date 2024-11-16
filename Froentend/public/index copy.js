import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth,onAuthStateChanged , signOut} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTDRSQKdd6gsDwM4u4W7MGfl4yrkpAGa8",
    authDomain: "crafted-legacyyy.firebaseapp.com",
    projectId: "crafted-legacyyy",
    storageBucket: "crafted-legacyyy.appspot.com",
    messagingSenderId: "567514521643",
    appId: "1:567514521643:web:d11058e513f79086dd8a6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();



onAuthStateChanged(auth , (user) =>{
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        const docRef = doc(db , "user" , loggedInUserId);
        console.log(docRef);
        getDoc(docRef)
        .then((docSnap)=>{
            console.log(docSnap);
            if(docSnap.exists()){
                const userData = docSnap.data();
                document.getElementById('loggedUserName').innerText=userData.name;
            }
            else{
                console.log("no document found matching id");
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not found in Localstorage");
    }
})


const signout = document.getElementById('logout-signout');

signout.addEventListener('click' , ()=> {
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href = 'main.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:',error);
    })
})


const dashboard = document.getElementById('dash');

dashboard.addEventListener('click' ,()=>{
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if (loggedInUserId) {
        const docRef = doc(db, "user", loggedInUserId);
        console.log(docRef);
        getDoc(docRef)
            .then((docSnap) => {
                console.log(docSnap);
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    if(userData.selrole === "user"){
                        window.location.href = 'DashboardUser.html';
                    }else{
                        window.location.href = 'DashboradSeller.html';
                    }
                }
                else {
                    console.log("no document found matching id");
                }
            })
            .catch((error) => {
                console.log("Error getting document");
            })
    }
    else {
        console.log("User Id not found in Localstorage");
    }
})