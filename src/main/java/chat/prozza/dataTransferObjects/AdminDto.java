package chat.prozza.dataTransferObjects;

import jakarta.validation.constraints.NotBlank;

public record AdminDto(@NotBlank String name, @NotBlank String username, @NotBlank String password, @NotBlank String email) {
}
