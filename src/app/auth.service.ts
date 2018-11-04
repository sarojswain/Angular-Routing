
export class AuthService{

	loggedIn = false;

	isAuthenticated(){

		const promise= new Promise(
             (resolve, reject) => {
                setTimeout(() => {
                	resolve(this.loggedIn);
                }, 800)
             }
			);

		return promise;
	}

	login(){
       this.loggedIn = true;
	}	
    logout(){
       this.loggedIn = false;
    }
}


//fake service, in real application, we are doing by reching to server to check the login authentication

// resolve & reject are methods/functions which are parameters for Promise