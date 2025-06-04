package com.example.JobPortalBackend.service;

import com.example.JobPortalBackend.model.User;
import com.example.JobPortalBackend.repository.UserRepository;
import com.example.JobPortalBackend.websocket.AnalyticsPublisher;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AnalyticsPublisher analyticsPublisher;
    
    @Autowired
    private AnalyticsService analyticsService;

    public User registerUser(User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        User savedUser = userRepository.save(user);
       analyticsPublisher.publishAnalytics(); // ✅ // Trigger analytics update
        return savedUser;
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // 🔹 Used in analytics for user distribution (JobSeeker vs Employer)
    public List<Map<String, Object>> getUserTypeStats() {
        long employers = userRepository.countByRole("Employer");
        long jobSeekers = userRepository.countByRole("JobSeeker");

        return List.of(
            Map.of("name", "Employers", "value", employers),
            Map.of("name", "Job Seekers", "value", jobSeekers)
        );
    }
}
