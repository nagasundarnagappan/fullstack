package com.partyplanner.nagasundar.service;

import com.partyplanner.nagasundar.dto.request.LoginRequest;
import com.partyplanner.nagasundar.dto.request.RegisterRequest;
import com.partyplanner.nagasundar.dto.response.LoginResponse;
import com.partyplanner.nagasundar.dto.response.RegisterResponse;

public interface AuthenticationService {
RegisterResponse register(RegisterRequest request);
LoginResponse login(LoginRequest request);
}
