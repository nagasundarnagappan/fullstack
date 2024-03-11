package com.partyplanner.nagasundar.repository;

import com.partyplanner.nagasundar.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.*;

public interface BookingRepository extends JpaRepository<Booking, Long> {
     @Query("SELECT b FROM Booking b WHERE b.userId = :userId")
    List<Booking> findByUserId(@Param("userId") Long userId);

    List<Booking> findByUserId(String userId);
}