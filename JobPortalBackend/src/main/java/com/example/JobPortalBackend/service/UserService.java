package com.example.JobPortalBackend.service;

import com.example.JobPortalBackend.model.User;
import com.example.JobPortalBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // ✅ Add this method for user registration
    public User registerUser(User user) {
        // Optional: Check if email already exists
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        return userRepository.save(user);
    }
}
