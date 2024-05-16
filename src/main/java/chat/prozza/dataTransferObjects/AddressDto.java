package chat.prozza.dataTransferObjects;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AddressDto(@NotBlank String zipCode, @NotBlank String street, @NotNull @Digits(fraction = 0,integer = 4) short number,@NotBlank String addressComplement) {
}
