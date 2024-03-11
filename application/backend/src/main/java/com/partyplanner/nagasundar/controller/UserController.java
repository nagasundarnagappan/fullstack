package com.partyplanner.nagasundar.controller;

import org.springframework.web.bind.annotation.RestController;

import com.partyplanner.nagasundar.dto.response.BasicResponse;
import com.partyplanner.nagasundar.dto.response.UserResponse;
import com.partyplanner.nagasundar.service.UserService;

import lombok.RequiredArgsConstructor;

import static com.partyplanner.nagasundar.utils.MyConstant.USER;
import static com.partyplanner.nagasundar.utils.MyConstant.USERLIST;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

        @GetMapping(USERLIST)
        public ResponseEntity<BasicResponse<UserResponse>> create() {
            BasicResponse<UserResponse> response = new BasicResponse<>();
            try {
                response = userService.getAllUser();
                return new ResponseEntity<>(response, HttpStatus.OK);
            } catch (Exception e) {
                response.setMessage("Something went wrong!!");
                return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
            }
        }
    
}
