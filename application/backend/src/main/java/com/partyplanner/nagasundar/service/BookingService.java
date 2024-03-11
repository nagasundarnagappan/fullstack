package com.partyplanner.nagasundar.service;

import java.util.List;

import com.partyplanner.nagasundar.dto.request.BookingRequest;
import com.partyplanner.nagasundar.dto.response.BookingResponse;
import com.partyplanner.nagasundar.model.Booking;

public interface BookingService {
    BookingResponse createBooking(BookingRequest request);
    List<Booking> getAllBookings();
    // List<Booking> getusersidebookings(String userid);
    void deleteBooking(Long userId);
    // String getUsernameByUserId(String userIds);
    List<Booking> getBookingsByUserId(String userId) ;
    Long getTotalBookingsCount();

}
