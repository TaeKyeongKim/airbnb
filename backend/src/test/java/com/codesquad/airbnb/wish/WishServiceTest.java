package com.codesquad.airbnb.wish;

import static org.assertj.core.api.BDDAssertions.then;

import com.codesquad.airbnb.common.embeddable.Location;
import com.codesquad.airbnb.common.embeddable.ReviewStat;
import com.codesquad.airbnb.config.TestConfig;
import com.codesquad.airbnb.district.District;
import com.codesquad.airbnb.district.District.DistrictType;
import com.codesquad.airbnb.member.Member;
import com.codesquad.airbnb.member.Member.MemberRole;
import com.codesquad.airbnb.room.entity.Room;
import com.codesquad.airbnb.room.entity.Room.RoomType;
import com.codesquad.airbnb.room.entity.embeddable.RoomCharge;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

@ActiveProfiles("test")
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Import({TestConfig.class, WishService.class})
@DisplayName("WishService 통합 테스트")
class WishServiceTest {

    @Autowired
    TestEntityManager em;

    @Autowired
    WishService wishService;

    // fixture
    Room room;
    Member guest;

    @BeforeEach
    public void setUp() {
        District district = new District(
            "서울특별시",
            "서울특별시",
            "https://bit.ly/3PKgIBo",
            DistrictType.PRIMARY,
            new Location(126.9896, 37.5499),
            new ReviewStat(4.5, 50)
        );

        Member host = new Member("Miller",
            "https://avatars.githubusercontent.com/u/50660684?v=4",
            false,
            MemberRole.USER
        );

        room = new Room(
            district,
            host,
            "Spacious and Comfortable cozy house #4",
            "강남역 5번 출구에서 도보로 이동가능합니다.",
            "https://bit.ly/39ZouHy",
            RoomType.WHOLE_RESIDENCE,
            new Location(127.0286, 37.4953),
            new RoomCharge(71466.0, 25996.0),
            new ReviewStat(4.8, 127)
        );

        guest = new Member(
            "BB-choi",
            "https://avatars.githubusercontent.com/u/78826879?v=4",
            false,
            MemberRole.USER
        );

        em.persist(district);
        em.persist(host);
        em.persist(room);
        em.persist(guest);
    }

    @Test
    @DisplayName("숙소를 위시리스트에 추가하고 저장소에서 추가한 데이터를 확인한다")
    public void addWishTest() {
        // given
        Wish savedWish = wishService.addWish(guest.getId(), room.getId());

        em.flush();
        em.clear();

        // when
        Wish findWish = em.find(Wish.class, savedWish.getId());

        // then
        then(findWish.getMember().getName()).isEqualTo("BB-choi");
        then(findWish.getMember().getImagePath()).isEqualTo(
            "https://avatars.githubusercontent.com/u/78826879?v=4");
        then(findWish.getMember().getIsSuperHost()).isFalse();
        then(findWish.getMember().getRole()).isEqualTo(MemberRole.USER);

        then(findWish.getRoom().getName()).isEqualTo("Spacious and Comfortable cozy house #4");
        then(findWish.getRoom().getDescription()).isEqualTo("강남역 5번 출구에서 도보로 이동가능합니다.");
        then(findWish.getRoom().getImagePath()).isEqualTo("https://bit.ly/39ZouHy");
        then(findWish.getRoom().getType()).isEqualTo(RoomType.WHOLE_RESIDENCE);
    }

    @Test
    @DisplayName("숙소를 위시리스트에서 제거하고 저장소에서 삭제한 데이터를 확인한다")
    public void deleteWishTest() {
        // given
        Wish savedWish = wishService.addWish(guest.getId(), room.getId());
        Wish deletedWish = wishService.deleteWish(guest.getId(), savedWish.getId());

        // when
        Wish findWish = em.find(Wish.class, deletedWish.getId());

        // then
        then(findWish.getDeleted()).isTrue();
        then(findWish.getMember().getName()).isEqualTo("BB-choi");
        then(findWish.getMember().getImagePath()).isEqualTo(
            "https://avatars.githubusercontent.com/u/78826879?v=4");
        then(findWish.getMember().getIsSuperHost()).isFalse();
        then(findWish.getMember().getRole()).isEqualTo(MemberRole.USER);

        then(findWish.getRoom().getName()).isEqualTo("Spacious and Comfortable cozy house #4");
        then(findWish.getRoom().getDescription()).isEqualTo("강남역 5번 출구에서 도보로 이동가능합니다.");
        then(findWish.getRoom().getImagePath()).isEqualTo("https://bit.ly/39ZouHy");
        then(findWish.getRoom().getType()).isEqualTo(RoomType.WHOLE_RESIDENCE);
    }

}
