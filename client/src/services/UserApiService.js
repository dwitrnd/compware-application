<<<<<<< HEAD
import axios from "axios";
export class UserApiService {
  static serverURL = "http://192.168.0.211";
=======
import axios from 'axios';
export class UserApiService {
  static serverURL = 'http://localhost:8080';
>>>>>>> final-tushar-2
  static getAllUsers() {
    // let dataURL = `${UserApiService.serverURL}/users`;
    // return axios.get(dataURL);
  }
  static getUserById(id) {
    // let dataURL = `${UserApiService.serverURL}/${id}`;
    // return axios.get(dataURL);
  }
}

//? how to use this api service ?
// either make custom hook to have clean code
//  and then call those customHooks in either contextFileProvider  or in component directly
