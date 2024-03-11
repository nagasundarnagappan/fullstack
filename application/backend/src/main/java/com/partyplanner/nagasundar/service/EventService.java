package com.partyplanner.nagasundar.service;

import java.util.List;

import com.partyplanner.nagasundar.dto.request.EventRequest;
import com.partyplanner.nagasundar.dto.request.VenueRequest;
import com.partyplanner.nagasundar.dto.response.EventResponse;
import com.partyplanner.nagasundar.dto.response.VenueResponse;
import com.partyplanner.nagasundar.model.Event;

public interface EventService{
EventResponse createEvent(EventRequest request);
List<Event> getAllEvents();

    EventResponse deleteEvent(Long Id);
    EventResponse updateEvent(Long Id,EventRequest request);
    Long countEvents();

}
