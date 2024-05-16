package chat.prozza.dataTransferObjects;
import chat.prozza.models.UserModel;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.ZonedDateTime;

public record MsgDto(@NotNull UserModel sender, @NotBlank String content, @NotNull ZonedDateTime date) {
}
