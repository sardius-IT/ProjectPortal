package com.example.JobPortalBackend.controller;

import com.example.JobPortalBackend.dto.LoginRequest;
import com.example.JobPortalBackend.dto.LoginResponse;
import com.example.JobPortalBackend.model.User;
import com.example.JobPortalBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3001") // Enable CORS for frontend
public class UserController {

    @Autowired
    private UserService userService;

    // LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOpt = userService.getUserByEmail(loginRequest.getEmail());

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (user.getPassword().equals(loginRequest.getPassword())) {
                String token = "mock-token"; // Replace with actual JWT later
                LoginResponse response = new LoginResponse(token, user.getRole(), user.getId());
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(401).body("Invalid password");
            }
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

    // REGISTER
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            User savedUser = userService.registerUser(user);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Registration failed: " + e.getMessage());
        }
    }
}

