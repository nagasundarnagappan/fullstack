package com.partyplanner.nagasundar.service;

import java.util.List;

import com.partyplanner.nagasundar.dto.request.VenueRequest;
import com.partyplanner.nagasundar.dto.response.VenueResponse;
import com.partyplanner.nagasundar.model.Venue;

public interface VenueService {
    VenueResponse createVenue(VenueRequest request);

    List<Venue> getAllVenues();

    void deleteVenue(Long venueId);


    

}
