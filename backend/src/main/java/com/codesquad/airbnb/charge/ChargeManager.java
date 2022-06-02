package com.codesquad.airbnb.charge;

import com.codesquad.airbnb.charge.discount.DiscountBill;
import com.codesquad.airbnb.charge.discount.DiscountPolicy;
import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.StayDate;
import com.codesquad.airbnb.room.entity.Room;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ChargeManager {

    private static final double SERVICE_COMMISSION_RATE = 14.0;
    private static final double TAX_COMMISSION_RATE = 1.4;

    private final List<DiscountPolicy> discountPolicies;

    public ChargeBill createBill(Room room, StayDate stayDate, GuestGroup guestGroup) {
        Duration duration = Duration.between(
            stayDate.getCheckinDate().atStartOfDay(),
            stayDate.getCheckoutDate().atStartOfDay()
        );

        return new ChargeBill(
            (int) duration.toDays(),
            room.getPrice().getLodging(),
            room.getPrice().getCleaning(),
            getServiceCommission(room),
            getTaxCommission(room),
            createDiscounts(room, stayDate, guestGroup)
        );
    }

    private int getServiceCommission(Room room) {
        return (int) (room.getPrice().getLodging() * SERVICE_COMMISSION_RATE / 100);
    }

    private int getTaxCommission(Room room) {
        return (int) (room.getPrice().getLodging() * TAX_COMMISSION_RATE / 100);
    }

    private List<DiscountBill> createDiscounts(Room room, StayDate stayDate,
        GuestGroup guestGroup) {
        List<DiscountBill> discountBills = new ArrayList<>();

        for (DiscountPolicy policy : discountPolicies) {
            if (policy.canExecute(stayDate, guestGroup)) {
                discountBills.add(policy.execute(room, stayDate, guestGroup));
            }
        }
        return discountBills;
    }

}
