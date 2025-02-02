package com.codesquad.airbnb.core.tag;

import static org.assertj.core.api.BDDAssertions.then;

import com.codesquad.airbnb.config.TestConfig;
import com.codesquad.airbnb.core.tag.TagService;
import com.codesquad.airbnb.core.tag.dto.TagResponse;
import com.codesquad.airbnb.core.tag.entity.Tag;
import java.util.List;
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
@Import({TestConfig.class, TagService.class})
@DisplayName("TagService 통합 테스트")
class TagServiceTest {

    @Autowired
    TestEntityManager em;

    @Autowired
    TagService tagService;

    @Test
    @DisplayName("태그 조회 시 보이도록 설정한 태그만 출력한다")
    void showTagsByDisplayTest() {
        // given
        em.persist(new Tag("자연생활을 만끽할 수 있는 숙소", "https://bit.ly/3LKC2DF", true, 1));
        em.persist(new Tag("독특한 공간", "https://bit.ly/3anRokK", true, 2));
        em.persist(new Tag("집 전체", "https://bit.ly/3agOhuJ", false, null));
        em.persist(new Tag("반려동물 동반 가능", "https://bit.ly/3sYUWjL", false, null));

        em.flush();
        em.clear();

        // when
        List<TagResponse> tagResponses = tagService.showTags();

        // then
        then(tagResponses.size()).isEqualTo(2);
        then(tagResponses)
            .extracting("name")
            .containsExactly("자연생활을 만끽할 수 있는 숙소", "독특한 공간");
    }

    @Test
    @DisplayName("태그 조회 시 태그를 정해진 순서대로 출력한다")
    void showTagBySequenceTest() {
        // given
        em.persist(new Tag("자연생활을 만끽할 수 있는 숙소", "https://bit.ly/3LKC2DF", true, 4));
        em.persist(new Tag("독특한 공간", "https://bit.ly/3anRokK", true, 3));
        em.persist(new Tag("집 전체", "https://bit.ly/3agOhuJ", true, 2));
        em.persist(new Tag("반려동물 동반 가능", "https://bit.ly/3sYUWjL", true, 1));

        em.flush();
        em.clear();

        // when
        List<TagResponse> tagResponses = tagService.showTags();

        // then
        then(tagResponses.size()).isEqualTo(4);
        then(tagResponses)
            .extracting("name")
            .containsExactly("반려동물 동반 가능", "집 전체", "독특한 공간", "자연생활을 만끽할 수 있는 숙소");
    }

}
