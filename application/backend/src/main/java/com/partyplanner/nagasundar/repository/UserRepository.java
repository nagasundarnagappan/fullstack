package com.partyplanner.nagasundar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.partyplanner.nagasundar.model.User;
import java.util.Optional;
public interface UserRepository extends JpaRepository<User,String>{

    Optional <User> findByEmail(String username);

}
