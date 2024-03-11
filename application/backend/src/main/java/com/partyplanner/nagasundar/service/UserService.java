package com.partyplanner.nagasundar.service;

import com.partyplanner.nagasundar.dto.response.BasicResponse;
import com.partyplanner.nagasundar.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
