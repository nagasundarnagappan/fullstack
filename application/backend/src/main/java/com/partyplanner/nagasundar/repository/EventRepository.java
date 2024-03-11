package com.partyplanner.nagasundar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.partyplanner.nagasundar.model.Event;

public interface EventRepository extends JpaRepository<Event,Long> {

}
