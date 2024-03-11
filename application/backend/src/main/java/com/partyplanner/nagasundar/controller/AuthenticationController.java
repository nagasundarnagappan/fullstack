package com.partyplanner.nagasundar.controller;

import static com.partyplanner.nagasundar.utils.MyConstant.AUTH;
import static com.partyplanner.nagasundar.utils.MyConstant.LOGIN;
import static com.partyplanner.nagasundar.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.partyplanner.nagasundar.dto.request.LoginRequest;
import com.partyplanner.nagasundar.dto.request.RegisterRequest;
import com.partyplanner.nagasundar.dto.response.LoginResponse;
import com.partyplanner.nagasundar.dto.response.RegisterResponse;
import com.partyplanner.nagasundar.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor

public class AuthenticationController {
    private final AuthenticationService AuthenticationService;
    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request){
        RegisterResponse response =new RegisterResponse();
          try {
            response = AuthenticationService.register(request);
          
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request){
        LoginResponse response = new LoginResponse();
        try {
            response = AuthenticationService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            LoginResponse.builder()
            .message("Something went wrong!").token("").build();
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
           
        }
    }

}
