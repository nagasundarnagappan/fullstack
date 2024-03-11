package com.partyplanner.nagasundar.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.partyplanner.nagasundar.dto.request.VenueRequest;
import com.partyplanner.nagasundar.dto.response.VenueResponse;
import com.partyplanner.nagasundar.model.Venue;
import com.partyplanner.nagasundar.repository.VenueRepository;
import com.partyplanner.nagasundar.service.VenueService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class VenueServiceImpl implements VenueService{
    private final VenueRepository venueRepo;
    @Override
    public VenueResponse createVenue(VenueRequest request){
        Venue venue=Venue.builder()
        .venueTypeId(request.getVenueTypeId())
        .venuName(request.getVenuName())
        .location(request.getLocation())
        .build();
        venueRepo.save(venue);
        return VenueResponse.builder()
        .message("venue added!")
        .build();
    }
    @Override
    public List<Venue> getAllVenues(){
       
        return venueRepo.findAll();

    }
    @Override
    public void deleteVenue(Long venueId) {
        venueRepo.deleteById(venueId);
        
    }
}
