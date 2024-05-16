package chat.prozza.models;

import lombok.*;

public class AddressModel {
    @Getter @Setter private String  zipCode;
    @Getter @Setter private String  street;
    @Getter @Setter private short  number;
    @Getter @Setter private String  addressComplement;
    protected AddressModel(String zipCode, String street, short number, String addressComplement) {
        this.zipCode = zipCode;
        this.street = street;
        this.number = number;
        this.addressComplement = addressComplement;
    }
}
