package chat.prozza.models;

import lombok.*;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;

public class MsgModel {
    @Getter @Setter private UserModel sender;
    @Getter @Setter private String content;
    @Getter @Setter private ZonedDateTime date;
    protected MsgModel(UserModel sender, String content){
        this.sender=sender;
        this.content=content;
        this.date = ZonedDateTime.now(ZoneId.of(ZoneId.SHORT_IDS.get("BET"))); //To test
    }
}
