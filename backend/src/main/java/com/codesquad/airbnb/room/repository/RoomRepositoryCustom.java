package com.codesquad.airbnb.room.repository;

import com.codesquad.airbnb.room.dto.request.RoomSearCondition;
import com.codesquad.airbnb.room.entity.Room;
import java.util.List;

public interface RoomRepositoryCustom {

    List<Room> searchWithCondition(RoomSearCondition condition);

}
