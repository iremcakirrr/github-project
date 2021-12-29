class Storage {

    static getSearchedUsersFromStorage(){
        //tüm kullanıcı al

        let users;

        if(localStorage.getItem("searched") === null){
            users= [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;

        
    }
    static addSearchedUserToStorage(username){
            //kullanıcı ekle

            let users = this.getSearchedUsersFromStorage();

            //ındexof
            if(users.indexOf("username") === -1){
                users.push(username);
            }

            localStorage.setItem("searched", JSON.stringify(users));
    }
    static clearAllSearchedUsersFromStorage(){

        //kullanıcıları sil

        localStorage.removeItem("searched");

    }


}