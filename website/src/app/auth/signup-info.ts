export class SignUpInfo {
    userFirstName: string;
    userLastName: string;
    username: string;
    userEmail: string;
    role: string[];
    password: string;

    constructor(userFirstName: string,userLastName: string, username: string, userEmail: string, password: string) {
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.username = username;
        this.userEmail = userEmail;
        this.password = password;
        this.role = ['user','admin', 'pm'];
    }
}
