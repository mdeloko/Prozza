package chat.prozza.dataTransferObjects;

import chat.prozza.models.AddressModel;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record UserDto(@NotBlank String name, @NotBlank String username, @NotBlank String password, @NotBlank String email, @NotNull
                      AddressModel address, @NotBlank String telephoneNumber, @NotBlank String gender) {}