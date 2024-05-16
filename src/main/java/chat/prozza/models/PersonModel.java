package chat.prozza.models;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;


public abstract class PersonModel {
    //The person's name.
    @Getter(AccessLevel.PROTECTED) @Setter(AccessLevel.PROTECTED) private String name;

    //The person's username used to log in the application.
    @Getter(AccessLevel.PROTECTED) @Setter(AccessLevel.PROTECTED) private String username;

    //The person's password.
    @Getter(AccessLevel.PROTECTED) @Setter(AccessLevel.PROTECTED) private String password;

    //The person's e-mail.
    @Getter(AccessLevel.PROTECTED) @Setter(AccessLevel.PROTECTED) private String email;

    /*
    * Protected Person constructor.
    */
    protected PersonModel(){
        this.name = null;
        this.username = null;
        this.password = null;
        this.email = null;
    }
}
