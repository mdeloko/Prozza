package chat.prozza.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "TB_USERS")
public class UserModel extends PersonModel {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter @Setter private UUID id;
    @Getter @Setter private AddressModel address;
    @Getter @Setter private String telephoneNumber;
    @Getter @Setter private String gender;

    public UserModel(String name, String username, String password, String email, AddressModel address, String telephoneNumber, String gender) {
        super.setName(name);
        super.setUsername(username);
        super.setPassword(password);
        super.setEmail(email);
        this.address = address;
        this.telephoneNumber = telephoneNumber;
        this.gender = gender;
    }
}
